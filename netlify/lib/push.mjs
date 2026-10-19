// Código comum das notificações do Osirion (usado pelas funções do Netlify). Igual ao app da Caravana:
// Web Push com chaves VAPID guardadas no Firestore e a conta de serviço do Firebase na variável FIREBASE_SA.
import admin from "firebase-admin";
import webpush from "web-push";

export const SITE = "https://ooosirion.netlify.app";
let banco = null;
export function db() {
  if (!banco) {
    admin.initializeApp({ credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SA)) });
    banco = admin.firestore();
  }
  return banco;
}
export const auth = () => { db(); return admin.auth(); };
// o par de chaves das notificações é criado uma vez e fica guardado num documento que o app não consegue ler
export async function chaves(d) {
  const ref = d.doc("segredos/vapid"), s = await ref.get();
  if (s.exists) return s.data();
  const k = webpush.generateVAPIDKeys();
  await ref.set(k);
  return k;
}
// manda uma ou mais notificações para o celular de uma pessoa (documento em "avisos"); apaga inscrições vencidas
export async function enviarDoc(k, s, cargas, ttl) {
  if (!s.exists || !s.data().sub) return 0;
  webpush.setVapidDetails(SITE, k.publicKey, k.privateKey);
  let enviados = 0;
  for (const c of cargas) {
    try { await webpush.sendNotification(s.data().sub, JSON.stringify(c), { TTL: ttl || 3600 }); enviados++; }
    catch (e) { if (e.statusCode === 404 || e.statusCode === 410) { await s.ref.delete().catch(() => {}); return -1; } }
  }
  return enviados;
}
