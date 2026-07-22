/* Service Worker — Magnifique seu Chamado
   Estratégia network-first p/ o app shell, com fallback ao cache offline.
   Bump o CACHE a cada release (mesma lógica da versão do app). */
const CACHE = "chamado-v1.8.0";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", e=>{
  // Não chama skipWaiting() aqui: a nova versão fica "waiting" até o
  // usuário confirmar (banner "Atualizar"), que envia a mensagem abaixo.
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener("message", e=>{
  if(e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
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
  // Só cacheia recursos do próprio app (evita inflar o cache com terceiros).
  if(new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(()=>caches.match(req).then(r=>r || caches.match("./index.html")))
  );
});
