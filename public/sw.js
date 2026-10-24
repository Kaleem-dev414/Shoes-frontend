// Minimal install service worker: never cache authenticated data or API responses.
const CACHE = 'shoe-shell-v1';
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil((async () => { for (const key of await caches.keys()) { if (key.startsWith('shoe-shell-') && key !== CACHE) await caches.delete(key); } await self.clients.claim(); })()); });
self.addEventListener('fetch', event => { /* Network-only: preserve existing online app behavior. */ });
