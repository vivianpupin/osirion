// A programação do Osirion: as etapas, na ordem do Arhat. Cada etapa só abre depois da anterior.
// Tipos:
//   ler     — uma cápsula (ref = número da cápsula em capsulas.js)
//   ato     — a abertura de um ato (ref = id do ato em conteudo.js); a partir dela, as práticas são as desse ato
//   pratica — aprender uma prática do ato atual (ref = k da prática em conteudo.js)
//   tecnica — escolher a técnica da semana (as técnicas antes de dormir, em conteudo.js → NOITE)
//   noite   — dormir com a prática: abre o modo noite ("Vou dormir")
//   anotar  — anotar o sonho ao acordar
//   teste   — fazer um teste de realidade
//   oraculo — sortear o primeiro alvo
//   viagem  — uma viagem guiada (ref = k em conteudo.js → VIAGENS)
// Para mudar a ordem, basta mover as linhas. O id de cada etapa não pode repetir (é o que guarda o que a pessoa já fez).
window.PROGRAMA = [
  // ---------- O Início · Atravessar o véu do sono ----------
  { id: "osirion", tipo: "ler", ref: 54 },
  { id: "arhat", tipo: "ler", ref: 1 },
  { id: "noite-porque", tipo: "ler", ref: 2 },
  { id: "ato0", tipo: "ato", ref: 0 },
  { id: "ciclos", tipo: "ler", ref: 3 },
  { id: "lembrar", tipo: "ler", ref: 4 },
  { id: "p-diario", tipo: "pratica", ref: "diario" },
  { id: "corpo-mente", tipo: "ler", ref: 49 },
  { id: "p-noite0", tipo: "pratica", ref: "noite" },
  { id: "silencio", tipo: "ler", ref: 48 },
  { id: "tecnica-semana", tipo: "ler", ref: 53 },
  { id: "tecnica1", tipo: "tecnica" },
  { id: "noite1", tipo: "noite", titulo: "A primeira noite" },
  { id: "anotar1", tipo: "anotar", titulo: "Anotar o primeiro sonho" },
  { id: "hipnagogicas", tipo: "ler", ref: 50 },
  { id: "nevoeiro", tipo: "ler", ref: 51 },
  { id: "raizes-cap", tipo: "ler", ref: 6 },
  { id: "p-raizes", tipo: "pratica", ref: "raizes" },
  { id: "templos", tipo: "ler", ref: 5 },
  { id: "noite2", tipo: "noite" },
  { id: "anotar2", tipo: "anotar" },

  // ---------- Primeiro Ato · Captar energia cósmica e desobstruir os centros de energia ----------
  { id: "ato1", tipo: "ato", ref: 1 },
  { id: "senso", tipo: "ler", ref: 10 },
  { id: "teste1", tipo: "teste", titulo: "O primeiro teste de realidade" },
  { id: "maos", tipo: "ler", ref: 47 },
  { id: "porta", tipo: "ler", ref: 7 },
  { id: "p-resp", tipo: "pratica", ref: "resp" },
  { id: "dia-entrada", tipo: "ler", ref: 52 },
  { id: "p-noite1", tipo: "pratica", ref: "noite" },
  { id: "lucido-astral", tipo: "ler", ref: 9 },
  { id: "mensagens", tipo: "ler", ref: 8 },
  { id: "noite3", tipo: "noite" },
  { id: "anotar3", tipo: "anotar" },
  { id: "guias", tipo: "ler", ref: 20 },
  { id: "oraculo1", tipo: "oraculo" },
  { id: "paralisia", tipo: "ler", ref: 12 },
  { id: "fora", tipo: "ler", ref: 11 },
  { id: "contados", tipo: "ler", ref: 13 },
  { id: "yoga-sonhos", tipo: "ler", ref: 14 },
  { id: "quatro", tipo: "ler", ref: 15 },
  { id: "noite4", tipo: "noite" },
  { id: "anotar4", tipo: "anotar" },

  // ---------- Segundo Ato · Cair no sono consciente ----------
  { id: "ato2", tipo: "ato", ref: 2 },
  { id: "janela4", tipo: "ler", ref: 16 },
  { id: "p-madrugada2", tipo: "pratica", ref: "madrugada" },
  { id: "p-noite2", tipo: "pratica", ref: "noite" },
  { id: "instavel", tipo: "ler", ref: 18 },
  { id: "monroe", tipo: "ler", ref: 22 },
  { id: "rolar", tipo: "ler", ref: 23 },
  { id: "lembrar-lembrar", tipo: "ler", ref: 28 },
  { id: "dom-juan", tipo: "ler", ref: 30 },
  { id: "portoes", tipo: "ler", ref: 31 },
  { id: "rio", tipo: "viagem", ref: "rio" },
  { id: "noite5", tipo: "noite" },
  { id: "anotar5", tipo: "anotar" },

  // ---------- Terceiro Ato · A chama da vela e o Dragão ----------
  { id: "ato3", tipo: "ato", ref: 3 },
  { id: "p-dragao", tipo: "pratica", ref: "dragao" },
  { id: "p-madrugada3", tipo: "pratica", ref: "madrugada" },
  { id: "p-noite3", tipo: "pratica", ref: "noite" },
  { id: "longe", tipo: "ler", ref: 17 },
  { id: "partilhado", tipo: "ler", ref: 19 },
  { id: "caixa", tipo: "ler", ref: 24 },
  { id: "recapitular", tipo: "ler", ref: 32 },
  { id: "ver", tipo: "ler", ref: 33 },
  { id: "dialogo", tipo: "ler", ref: 34 },
  { id: "noite6", tipo: "noite" },
  { id: "anotar6", tipo: "anotar" },

  // ---------- Quarto Ato · A luz azul e o banho da pineal ----------
  { id: "ato4", tipo: "ato", ref: 4 },
  { id: "p-maos", tipo: "pratica", ref: "maos" },
  { id: "p-banho", tipo: "pratica", ref: "banho" },
  { id: "p-madrugada4", tipo: "pratica", ref: "madrugada" },
  { id: "p-noite4", tipo: "pratica", ref: "noite" },
  { id: "aum", tipo: "ler", ref: 35 },
  { id: "nidra", tipo: "ler", ref: 36 },
  { id: "soham", tipo: "ler", ref: 37 },
  { id: "taraka", tipo: "ler", ref: 38 },
  { id: "garganta", tipo: "ler", ref: 39 },
  { id: "maias", tipo: "ler", ref: 40 },
  { id: "espelho", tipo: "ler", ref: 41 },
  { id: "andes", tipo: "ler", ref: 42 },
  { id: "noite7", tipo: "noite" },
  { id: "anotar7", tipo: "anotar" },

  // ---------- Quinto Ato · Sair do corpo ----------
  { id: "ato5", tipo: "ato", ref: 5 },
  { id: "p-pilar", tipo: "pratica", ref: "pilar" },
  { id: "p-madrugada5", tipo: "pratica", ref: "madrugada" },
  { id: "p-noite5", tipo: "pratica", ref: "noite" },
  { id: "buhlman", tipo: "ler", ref: 25 },
  { id: "comandos", tipo: "ler", ref: 26 },
  { id: "som", tipo: "ler", ref: 27 },
  { id: "viajantes", tipo: "ler", ref: 29 },
  { id: "sair", tipo: "viagem", ref: "sair" },
  { id: "hypnos", tipo: "ler", ref: 43 },
  { id: "ba", tipo: "ler", ref: 44 },
  { id: "guardioes", tipo: "ler", ref: 45 },
  { id: "mara", tipo: "ler", ref: 46 },
  { id: "noite8", tipo: "noite" },
  { id: "anotar8", tipo: "anotar" },
  { id: "abrir-olhos", tipo: "ler", ref: 21 }
];
