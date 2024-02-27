const todo = "GP";
const assets = [
  "/",
  "./index.html", 
  "./index.js",
  "./logo.png",
];
console.log('sw.js文件');
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(todo).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

