// A cada 15 minutos: manda os lembretes de cada pessoa no horário dela (fuso, hora de acordar e de dormir).
// - ao acordar: anotar o sonho;
// - durante o dia: o teste de realidade, em horários sorteados (mudam todo dia);
// - meia hora antes de dormir: preparar a noite;
// - de madrugada: a hora do despertar (o despertar das 04:00, calculado pelo app).
import { db, chaves, enviarDoc } from "../lib/push.mjs";

export const config = { schedule: "*/15 * * * *" };

const TESTES = [
  "Será que estou sonhando? Olhe para as suas mãos e conte os dedos.",
  "Pare um instante: isto é um sonho? Leia algo, desvie o olhar e leia de novo.",
  "Tape o nariz e tente respirar. Se o ar passar, você está sonhando.",
  "Olhe em volta como se fosse a primeira vez. Isto é real? Como você sabe?",
  "Dê um pequeno pulo. No sonho, você flutua.",
  "Olhe um relógio, desvie o olhar e olhe de novo. Os números mudaram?"
];
const minutos = s => { const [h, m] = String(s || "0:0").split(":").map(Number); return (h || 0) * 60 + (m || 0); };
function agoraEm(tz) {
  const p = new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const g = t => p.find(x => x.type === t).value;
  return { dia: `${g("year")}-${g("month")}-${g("day")}`, min: +g("hour") * 60 + +g("minute") };
}
// sorteio fixo por pessoa e por dia: os horários mudam todo dia, mas não a cada execução
function sorteio(semente) { let s = 0; for (const c of semente) s = (s * 31 + c.charCodeAt(0)) >>> 0; return () => (s = (Math.imul(s, 1103515245) + 12345) >>> 0) / 4294967296; }
function horariosTestes(uid, dia, ini, fim, n) {
  const r = sorteio(uid + dia), faixa = (fim - ini) / n;
  return Array.from({ length: n }, (_, i) => Math.round(ini + faixa * i + r() * faixa * 0.8));
}

export default async () => {
  if (!process.env.FIREBASE_SA) return new Response("sem FIREBASE_SA", { status: 503 });
  const d = db(), k = await chaves(d), docs = await d.collection("avisos").get();
  let total = 0;
  await Promise.all(docs.docs.map(async s => {
    const a = s.data(); if (!a.sub) return;
    let t; try { t = agoraEm(a.tz || "America/Sao_Paulo"); } catch (e) { t = agoraEm("America/Sao_Paulo"); }
    const acorda = minutos(a.acorda || "07:00"), dorme = minutos(a.dorme || "23:00");
    // o dia acordado vai de 1h depois de acordar até 1h antes de dormir (ou até 22h, se a pessoa dorme depois da meia-noite)
    const fimDia = dorme > acorda + 120 ? dorme - 60 : 22 * 60;
    const naHora = m => { m = ((m % 1440) + 1440) % 1440; return t.min >= m && t.min < m + 15; };
    const ja = a.enviados && a.enviados.dia === t.dia ? a.enviados.lista || [] : [];
    const vai = [];
    if (naHora(acorda) && !ja.includes("manha")) vai.push(["manha", { title: "Bom dia", body: "Antes de levantar: o que você sonhou? Anote nos primeiros cinco minutos.", tag: "manha", url: "./?aba=diario" }]);
    const r = sorteio(s.id + t.dia + "f");
    horariosTestes(s.id, t.dia, acorda + 60, fimDia, Math.min(8, a.testes || 4)).forEach((m, i) => {
      const frase = TESTES[Math.floor(r() * TESTES.length)];
      if (naHora(m) && !ja.includes("teste" + i)) vai.push(["teste" + i, { title: "Osirion", body: frase, tag: "teste", url: "./?aba=hoje" }]);
    });
    if (naHora(dorme - 30) && !ja.includes("noite")) vai.push(["noite", { title: "Hora de preparar a noite", body: "A sua técnica e a afirmação desta noite estão esperando. Ao deitar, toque em “Vou dormir”.", tag: "noite", url: "./?aba=hoje" }]);
    if (a.despertar && naHora(minutos(a.despertar)) && !ja.includes("despertar")) vai.push(["despertar", { title: "A hora do despertar", body: "Relembre o último sonho, diga a sua frase e volte a dormir com a mente acesa.", tag: "despertar", url: "./?aba=hoje", requireInteraction: true }]);
    if (!vai.length) return;
    const n = await enviarDoc(k, s, vai.map(v => v[1]), 1800);
    if (n < 0) return;
    total += n;
    await s.ref.set({ enviados: { dia: t.dia, lista: ja.concat(vai.map(v => v[0])) } }, { merge: true });
  }));
  return new Response("enviados: " + total);
};
