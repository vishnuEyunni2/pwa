

self.addEventListener('install', (ev) => {
  console.log('[Service Worker] Install event triggered ... ', ev);
})

self.addEventListener('activate', (ev) => {
  console.log('[Service Worker] Activating Service Worker  ... ', ev);
  return self.clients.claim();
})

self.addEventListener('fetch', (ev) => {
  console.log('[Service Worker] Fetch is triggered ...', ev);
  ev.respondWith(fetch(ev.request));
});

