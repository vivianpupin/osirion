// Service worker do Osirion: guarda o app para abrir sem internet (à noite, em modo avião) e mostra os lembretes.
importScripts("imagens.js");
const CACHE = "osirion-v4", FB = "osirion-firebase", FONTES = "osirion-fontes";
// Na instalação já guarda o app e todas as imagens (uma por uma: se alguma falhar, as outras ficam guardadas).
const BASE = ["./", "index.html", "conteudo.js", "capsulas.js", "programa.js", "alvos.js", "imagens.js", "firebase-config.js", "manifest.webmanifest", "icone-192.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(BASE.concat(self.IMAGENS || []).map(a => c.add(new Request(a, { cache: "reload" }))))));
  self.skipWaiting();
});
self.addEventListener("activate", e => e.waitUntil(caches.keys()
  .then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== FB && k !== FONTES).map(k => caches.delete(k))))
  .then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== "GET") return;
  // o Firebase (login e nuvem): guardado depois da primeira vez
  if (u.hostname === "www.gstatic.com" && u.pathname.startsWith("/firebasejs/"))
    return e.respondWith(caches.open(FB).then(c => c.match(req).then(g => g || fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }))));
  // as fontes: abrem direto do celular (sem esperar a internet, a abertura não pisca); a folha de estilo se atualiza por trás
  if (u.hostname === "fonts.gstatic.com")
    return e.respondWith(caches.open(FONTES).then(c => c.match(req).then(g => g || fetch(req).then(r => { if (r.ok || r.type === "opaque") c.put(req, r.clone()); return r; }))));
  if (u.hostname === "fonts.googleapis.com")
    return e.respondWith(caches.open(FONTES).then(c => c.match(req).then(g => {
      const rede = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => g);
      return g || rede;
    })));
  if (u.origin !== location.origin || u.pathname.startsWith("/.netlify/")) return;
  // as imagens não mudam: abrem direto do celular
  if (u.pathname.includes("/img/")) return e.respondWith(caches.match(req).then(g => g || fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(req, c)); } return r; })));
  // o app: primeiro a rede (sempre a versão nova); sem sinal, a cópia guardada
  e.respondWith(fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(req, c)); } return r; })
    .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./index.html")).then(r => r || caches.match("./"))));
});
// os lembretes (teste de realidade, anotar o sonho, preparar a noite, o despertar)
self.addEventListener("push", e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Osirion", { body: d.body || "Será que estou sonhando?", icon: "icone-192.png", badge: "icone-192.png", tag: d.tag || "osirion", renotify: true, requireInteraction: !!d.requireInteraction, data: { url: d.url || "./?aba=hoje" } }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(ws => {
    const aba = (url.match(/aba=([a-z]+)/) || [])[1] || "hoje";
    for (const w of ws) { w.postMessage({ aba }); if ("focus" in w) return w.focus(); }
    return self.clients.openWindow(url);
  }));
});
