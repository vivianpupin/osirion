// Service worker do Osirion: guarda o app para abrir sem internet (à noite, em modo avião) e mostra os lembretes.
const CACHE = "osirion-v1", FB = "osirion-firebase";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(caches.keys()
  .then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== FB).map(k => caches.delete(k))))
  .then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== "GET") return;
  // o Firebase (login e nuvem): guardado depois da primeira vez
  if (u.hostname === "www.gstatic.com" && u.pathname.startsWith("/firebasejs/"))
    return e.respondWith(caches.open(FB).then(c => c.match(req).then(g => g || fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }))));
  if (u.origin !== location.origin || u.pathname.startsWith("/.netlify/")) return;
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
