// Minimal service worker — required by browsers for a page to be installable as an app.
// This one doesn't cache anything special, it just passes requests straight through.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ self.clients.claim(); });
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request));
});
