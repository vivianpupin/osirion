// Notificações do Osirion.
// GET: a chave pública para o celular se inscrever. POST (com o login da pessoa): manda um lembrete de teste para ela.
// Precisa da variável FIREBASE_SA no Netlify (a chave da conta de serviço do Firebase, colada lá, nunca no código).
import { db, auth, chaves, enviarDoc } from "../lib/push.mjs";

export default async req => {
  if (!process.env.FIREBASE_SA) return Response.json({ ok: false, erro: "sem FIREBASE_SA" }, { status: 503 });
  const d = db(), k = await chaves(d);
  if (req.method === "GET") return Response.json({ publicKey: k.publicKey });
  const tok = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  let uid;
  try { uid = (await auth().verifyIdToken(tok)).uid; } catch (e) { return Response.json({ ok: false }, { status: 401 }); }
  const s = await d.doc("avisos/" + uid).get();
  const n = await enviarDoc(k, s, [{ title: "Osirion", body: "Pronto: os lembretes estão ligados. Será que estou sonhando?", tag: "teste", url: "./?aba=hoje" }]);
  return Response.json({ ok: n > 0 });
};
