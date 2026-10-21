// A voz do diário vira texto com um modelo de transcrição (bem mais fiel que o reconhecimento do celular).
// GET: diz se está pronto (se o Netlify tem a chave). POST (com o login da pessoa): recebe um trecho de áudio e devolve o texto.
// Precisa da variável OPENAI_API_KEY no Netlify (colada lá, nunca no código). OPENAI_MODELO troca o modelo, se quiser.
import { auth } from "../lib/push.mjs";

// o contexto ajuda o modelo a acertar as palavras de quem conta sonhos
const CONTEXTO = "Relato de um sonho, em português do Brasil, contado logo ao acordar, em primeira pessoa e no presente. "
  + "Pode falar de sonho lúcido, viagem astral, projeção, paralisia do sono, nevoeiro, vibrações, Osirion, Duat, Arhat.";

export default async req => {
  const chave = process.env.OPENAI_API_KEY;
  if (req.method === "GET") return Response.json({ pronto: !!chave && !!process.env.FIREBASE_SA });
  if (!chave || !process.env.FIREBASE_SA) return Response.json({ ok: false }, { status: 503 });
  // só quem está na conta do Osirion usa (a transcrição gasta créditos da conta da OpenAI)
  const tok = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  try { await auth().verifyIdToken(tok); } catch (e) { return Response.json({ ok: false }, { status: 401 }); }
  const tipo = (req.headers.get("content-type") || "audio/webm").split(";")[0];
  const audio = await req.arrayBuffer();
  if (!audio.byteLength) return Response.json({ texto: "" });
  const ext = tipo.includes("mp4") || tipo.includes("m4a") || tipo.includes("aac") ? "m4a" : tipo.includes("ogg") ? "ogg" : tipo.includes("wav") ? "wav" : "webm";
  const f = new FormData();
  f.append("file", new Blob([audio], { type: tipo }), "sonho." + ext);
  f.append("model", process.env.OPENAI_MODELO || "gpt-4o-transcribe");
  f.append("language", "pt");
  f.append("prompt", CONTEXTO);
  const r = await fetch("https://api.openai.com/v1/audio/transcriptions", { method: "POST", headers: { Authorization: "Bearer " + chave }, body: f });
  if (!r.ok) return Response.json({ ok: false, erro: r.status }, { status: 502 });
  const j = await r.json();
  return Response.json({ texto: (j.text || "").trim() });
};
