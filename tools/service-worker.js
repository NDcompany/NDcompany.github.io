// The old tools portal (NDcompany/tools) registered a worker here, at /tools/image-to-pdf/sw.js and at
// /tools/invoice-generator/sw.js (three copies of this file), and served its pages from cache. Browsers
// that still have one check its address for updates and get this version, which deletes the old caches,
// unregisters itself and reloads the open tabs onto the tools that are now part of the main site.
// Keep all three for good: a 404 at a worker's address never removes the worker.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then((keys) => Promise.all(keys
        .filter((key) => /^(nd-tools|image-to-pdf|invoice-generator)-/.test(key))
        .map((key) => caches.delete(key)))));
    // Not in waitUntil: navigate() waits for this activation to finish.
    self.registration.unregister()
        .then(() => self.clients.matchAll({ type: 'window' }))
        .then((tabs) => tabs.forEach((tab) => tab.navigate(tab.url)));
});
