// The old hand-written site registered /service-worker.js and served '/' cache first,
// forever. Browsers that still have it check this URL for updates, so it hands them
// the current worker, whose activate step deletes the old 'ndco-cache-v2' cache.
// Keep this file for good: a 404 here never removes the old worker.
self.importScripts('/sw.js');

// Read before sw.js's activate deletes it: is this browser coming from the old site?
const fromOldSite = caches.has('ndco-cache-v2');

// The tab that triggered the update is still showing the old cached homepage, so move it
// onto the new site, but only when migrating: an old page re-registering this script later
// must not reload new-site tabs. Not in waitUntil: navigate() waits for this activation.
self.addEventListener('activate', () => {
    fromOldSite.then((old) => old && self.clients.matchAll({ type: 'window' }).then((tabs) => tabs.forEach((tab) => tab.navigate(tab.url))));
});
