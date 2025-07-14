const CACHE_NAME = 'ndco-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/404.html',
  '/css/style.css',
  '/js/script.js',
  '/assets/banner/banner.webp',
  '/assets/avatar/nakshatra.webp',
  '/assets/avatar/dipro.webp',
  '/assets/logo/SYMBOL-LIGHT.png',
  '/assets/logo/SYMBOL-DARK.png',
  '/robots.txt',
  '/sitemap.xml',
  '/site.webmanifest',
  '/humans.txt',
  // Add more assets as needed
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
