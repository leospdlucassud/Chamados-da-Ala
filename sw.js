/* Service Worker — Magnifique seu Chamado
   Estratégia network-first p/ o app shell, com fallback ao cache offline.
   Bump o CACHE a cada release (mesma lógica da versão do app). */
const CACHE = "chamado-v1.3.0";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", e=>{
  const req = e.request;
  if(req.method!=="GET") return;
  e.respondWith(
    fetch(req).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(()=>caches.match(req).then(r=>r || caches.match("./index.html")))
  );
});
