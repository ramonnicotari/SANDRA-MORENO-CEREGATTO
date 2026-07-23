/* Service Worker — Relatório Genético Sandra Moreno Ceregatto */
const CACHE = 'genetica-sandra-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icons/icon-180.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/favicon-64.png'
];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(ASSETS.map(function (u) { return new Request(u, { cache: 'reload' }); }));
    }).catch(function () {})
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
                            .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Cache-first: funciona 100% offline depois da primeira abertura */
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return cached || fetch(event.request).then(function (resp) {
        return caches.open(CACHE).then(function (cache) {
          try { cache.put(event.request, resp.clone()); } catch (e) {}
          return resp;
        });
      }).catch(function () {
        return caches.match('index.html');
      });
    })
  );
});
