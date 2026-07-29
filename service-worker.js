// ==========================================
// GALAXY NOVA
// Service Worker v0.1
// ==========================================

const CACHE_NAME = "galaxy-nova-v0.1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",

  "./css/style.css",
  "./css/mobile.css",
  "./css/desktop.css",

  "./js/engine.js",
  "./js/game.js",
  "./js/player.js",
  "./js/enemy.js",
  "./js/boss.js",
  "./js/drone.js",
  "./js/controls.js",
  "./js/shop.js",
  "./js/save.js",
  "./js/ui.js"
];

// Installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activation
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Requête
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});