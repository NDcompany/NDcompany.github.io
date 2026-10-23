// N&D Co. service worker: offline fallback and faster repeat visits.
// Pages are network-first, so visitors (and anything that does run a worker)
// always get the freshest HTML; the cache is only a fallback. Googlebot does
// not run service workers, so none of this changes what search engines see.
// Bump VERSION to force every client onto a clean cache.
const VERSION = 'v1';
// Registered as /sw.js?dev on the Vite dev server: only navigations and the
// offline page's own files are served, from a separate cache that replaces
// any production one, so development never sees stale modules.
const DEV = new URL(self.location.href).searchParams.has('dev');
const STATIC = DEV ? 'ndco-dev' : `ndco-static-${VERSION}`;
const PAGES = DEV ? 'ndco-dev' : `ndco-pages-${VERSION}`;
const OFFLINE = '/offline.html';
// The offline page, its logos, and the icons and manifest every page asks for.
const PRECACHE = [
    OFFLINE, '/assets/logo/logo-light-96.webp', '/assets/logo/logo-dark-96.webp',
    '/assets/favicon/favicon-16x16.png', '/assets/favicon/favicon-32x32.png',
    '/assets/favicon/android-chrome-192x192.png', '/manifest.webmanifest',
];
// Straight from the server: GitHub Pages lets the HTTP cache keep files for 10 minutes,
// which would re-store the previous offline page right after a redeploy.
const precache = (cache) => cache.addAll(PRECACHE.map((url) => new Request(url, { cache: 'reload' })));

// One network fetch per file at a time, shared by the page's own requests and cacheAssets, so a
// file the page is already loading is not downloaded again while the worker saves that page.
// Hashed build files may come from the HTTP cache; everything else asks the server, because an
// old-site copy can still sit in the HTTP cache after the cutover.
const inflight = new Map();
const fetchOnce = (path) => {
    if (!inflight.has(path)) {
        inflight.set(path, fetch(path, /^\/assets\/[^/?]+$/.test(path) ? {} : { cache: 'no-cache' }).finally(() => inflight.delete(path)));
    }
    return inflight.get(path).then((response) => response.clone());
};

// /faq/, /faq.html, /faq/index.html and /faq/index are one page (the app sends them all to
// /faq), and pages are keyed by path, so ?utm_ links find the same copy.
const pageKey = (path) => path.replace(/\/index(?:\.html)?$|\.html$/, '').replace(/(.)\/+$/, '$1') || '/';

// Only this site's app pages and its own redirect stubs (prerender REDIRECTS): never an
// old-site page still in the HTTP cache after the cutover, a captive portal's page, or
// the noindex 404 page. An app page must also be the page asked for: its canonical names
// that address (every indexable page has one), so another page served in its place (vite
// preview answers an unknown address with the homepage and a 200) is not saved under it.
// Matched as real tags ("<div id=", "<meta name="): an article that quotes such markup as text
// has it escaped (&lt;), so a post explaining noindex is not mistaken for a noindex page.
const canonicalKey = (html) => {
    const href = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    return href ? pageKey(new URL(href).pathname) : null;
};
const savable = (html, key) => !html.includes('<meta name="robots" content="noindex')
    && (html.includes('http-equiv="refresh" content="0; url=/') || (html.includes('<div id="root"') && canonicalKey(html) === key));

// Stores the assets a page's HTML references (never video) that are not cached
// yet; withMedia false keeps it to the build files the page boots with.
const cacheAssets = async (text, withMedia = true) => {
    const cache = await caches.open(STATIC);
    const assets = [...new Set([...text.matchAll(/["'(\s](\/assets\/[^"'\s)]+)/g)].map((m) => m[1]))]
        .filter((url) => (withMedia ? !url.endsWith('.mp4') : /^\/assets\/[^/]+\.(?:js|css|woff2)$/.test(url)))
        // An image offered with a 640px copy in its srcset (beside 320, 360, 480, 560px and full-size ones):
        // save the 640px copy only (a screen that wants another size fetches it, and the fetch handler
        // stores it then; offline the 640px copy answers for every size).
        .filter((url, _, all) => !(/(?<!-640)\.webp$/.test(url) && all.includes(url.replace(/(-320|-360|-480|-560)?\.webp$/, '-640.webp'))));
    await Promise.all(assets.map(async (url) => (await cache.match(url)) || fetchOnce(url).then((r) => r.ok && cache.put(url, r)).catch(() => {})));
    // Background images are referenced from the stylesheets, not the HTML.
    if (withMedia) {
        for (const url of assets.filter((asset) => asset.endsWith('.css'))) {
            const css = await cache.match(url);
            if (css) await cacheAssets(await css.text());
        }
    }
};

// Build files first and the page right after, so it opens offline within moments of
// being viewed; its images (60 logos on /tools-we-use) follow.
// Addresses storePage turned down for good (404, noindex, not this app's HTML): a later message
// for the same address must not fetch it again. Kept by the exact address, not the page key: a 404
// for /faq/ (GitHub Pages has no faq/ folder) must not stop /faq itself from being saved.
const refused = new Set();
const storePage = async (path, response, withMedia = true, address = path) => {
    if (response.status === 404) {
        refused.add(address);
        // Gone from the site: drop its saved copy too, or it still opens offline and stays under "Saved on
        // this device". Only at its own address: GitHub Pages answers /faq/ with a 404 while /faq is a page.
        if (address === path) await (await caches.open(PAGES)).delete(path);
    }
    if (!response.ok || response.redirected) return;
    const html = await response.clone().text();
    if (!savable(html, path)) {
        refused.add(address);
        return;
    }
    await cacheAssets(html, false);
    await (await caches.open(PAGES)).put(path, response);
    if (withMedia) await cacheAssets(html);
};

// The first page of a visit loads before this worker takes control and in-app
// links never reach the fetch handler, so the app posts each page it shows
// (src/main.jsx, AppRoutes ScrollReset). Install saves '/' with just its build
// files so the offline page's homepage link always works; viewing a page fills
// in the rest (lazy images the visitor has not scrolled to yet included).
const cachePage = async (path, withMedia) => {
    const key = pageKey(path);
    // Turned down this run (a 404 page the app then shows posts its address too): not saved again.
    if (refused.has(key)) return;
    const statics = await caches.open(STATIC);
    // Site data cleared under a running worker: put the offline page back.
    if (!(await statics.match(OFFLINE))) await precache(statics);
    const pages = await caches.open(PAGES);
    const cached = await pages.match(key);
    if (!cached) return storePage(key, await fetch(key, { cache: 'no-cache' }), withMedia);
    const html = await cached.clone().text();
    // Saving it again moves it to the end, so "Saved on this device" lists recent pages first.
    await pages.put(key, cached);
    await cacheAssets(html, withMedia);
};

// Firefox resolves a failed navigation preload with an error response instead of
// rejecting, and a host outage (5xx) should fall back like no network at all. Except
// Cloudflare's own check (cf-mitigated: its "I'm Under Attack" mode answers 503): the
// visitor has to see that page to get through, so it is passed on, never replaced.
const fromNetwork = async (event) => {
    const preloaded = await event.preloadResponse;
    const response = preloaded && preloaded.type !== 'error' ? preloaded : await fetch(event.request);
    if (response.status >= 500 && !response.headers.has('cf-mitigated')) throw new Error(`HTTP ${response.status}`);
    return response;
};

// no-store: WebKit would otherwise replay the fallback from its HTTP cache after reconnecting.
const offlinePage = async () => {
    const cached = await caches.match(OFFLINE);
    return cached ? new Response(cached.body, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } }) : Response.error();
};

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(STATIC).then(precache)
        .then(() => DEV || cachePage('/', false).catch(() => {}))
        .then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        // Start the page request while the worker boots, so network-first adds no delay.
        if (self.registration.navigationPreload) await self.registration.navigationPreload.enable();
        for (const key of await caches.keys()) {
            if (key !== STATIC && key !== PAGES) await caches.delete(key);
        }
        await self.clients.claim();
    })());
});

self.addEventListener('message', (event) => {
    if (!DEV && /^\/(?!\/)/.test(event.data)) event.waitUntil(cachePage(event.data).catch(() => {}));
});

const revalidated = new Set();

const putInCache = (cacheName, request, response) => {
    if (response.ok) caches.open(cacheName).then((cache) => cache.put(request, response));
};

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    if (request.method !== 'GET' || url.origin !== self.location.origin) return;
    // Videos stream with range requests; let the browser handle them directly.
    if (request.headers.has('range') || url.pathname.endsWith('.mp4')) return;

    if (request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const response = await fromNetwork(event);
                // Dev has no build stamp (see prerender.mjs), so refresh the offline page's files instead.
                if (DEV) event.waitUntil(caches.open(STATIC).then(precache).catch(() => {}));
                else if (url.pathname !== OFFLINE) event.waitUntil(storePage(pageKey(url.pathname), response.clone(), true, url.pathname).catch(() => {}));
                return response;
            } catch {
                return (!DEV && (await caches.match(pageKey(url.pathname), { cacheName: PAGES }))) || offlinePage();
            }
        })());
        return;
    }

    if (DEV) {
        if (PRECACHE.includes(url.pathname)) event.respondWith(fetch(request).catch(async () => (await caches.match(url.pathname)) || Response.error()));
        return;
    }

    // Vite's build output sits flat in /assets/ with a content hash in every
    // file name, so a cached copy can never be stale: cache first. ignoreVary: the copies are stored
    // without request headers, and a server that sends Vary: Origin (vite preview does) would
    // otherwise never match the Origin a module script or font request carries. A page served in a
    // missing file's place (vite preview's HTML fallback) is never stored under its name.
    // ponytail: old hashed files are never evicted; bump VERSION if it grows.
    if (/^\/assets\/[^/]+$/.test(url.pathname)) {
        event.respondWith(caches.match(request, { ignoreVary: true }).then((hit) => hit || fetchOnce(url.pathname + url.search).then((response) => {
            if (!(response.headers.get('content-type') || '').startsWith('text/html')) putInCache(STATIC, request, response.clone());
            return response;
        }).catch(() => Response.error())));
        return;
    }

    // Everything else (images, logos, icons): serve the cached copy at once and refresh
    // it in the background. A cached copy is refreshed once per worker run (Chrome
    // re-requests the favicon on every same-page URL change, and useSectionNav rewrites the
    // hash while scrolling), and again whenever a request asks for a fresh copy. The
    // refresh asks the server, not the HTTP cache, so an old-site file still in the HTTP
    // cache after the cutover is never stored, and a copy the server no longer has is dropped.
    event.respondWith(caches.match(request).then((hit) => {
        if (hit && revalidated.has(url.href) && request.cache === 'default') return hit;
        if (hit) revalidated.add(url.href);
        const refresh = fetchOnce(url.pathname + url.search).then((response) => {
            if (response.status === 404) caches.open(STATIC).then((cache) => cache.delete(request));
            putInCache(STATIC, request, response.clone());
            return response;
        }).catch(async () => hit || (await caches.match(url.pathname.replace(/(-320|-360|-480|-560)?\.webp$/, '-640.webp'))) || Response.error());
        return hit || refresh;
    }));
});
// precache 8de49b968e3a
