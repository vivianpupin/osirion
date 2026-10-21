// Os estágios do Osirion, na ordem do Arhat (um por ato).
// Cada estágio tem: ensinamentos (cápsulas, abrem em sequência), a meditação do dia (prática do ato, com o "feito"),
// a técnica da noite (a pessoa escolhe dentro do pacote `tecnicas` desta página, índices de conteudo.js → NOITE, uma por semana)
// e um marco. `sons`: os sons que se descobrem nesta página, um por noite dormida, em ordem sorteada.
// O estágio avança pela prática: ler os ensinamentos, meditar `dias` dias e dormir com a técnica `noites` noites.
// O marco é uma conquista: pode acontecer em qualquer estágio e não trava nada.
// Marcos possíveis: nevoeiro, lucidez, lucido, alvo, vibra, astral.
window.ESTAGIOS = [
  { id: "nevoeiro", tecnicas: [0, 10, 4], sons: ["chuva", "mar", "mata", "tacas"], ato: 0, nome: "O Nevoeiro", objetivo: "ver o seu nevoeiro", marco: "nevoeiro", meditacao: "raizes", dias: 5, noites: 7,
    dica: "O nevoeiro pode demorar a aparecer. Continue: observe as imagens ao adormecer, sem segurar e sem fugir. Ele vem.",
    ensinamentos: [54, 1, 2, 3, 4, 49, 48, 53, 50, 51, 6, 55, 5] },
  { id: "perceber", tecnicas: [9, 1, 3, 7], sons: ["chuvabin", "sono", "tempo"], ato: 1, nome: "Perceber", objetivo: "o primeiro grau de lucidez", marco: "lucidez", meditacao: "resp", dias: 5, noites: 7,
    dica: "A lucidez nasce do hábito de perguntar, acordado: será que estou sonhando? Quanto mais testes de dia, mais chances à noite.",
    ensinamentos: [10, 56, 47, 7, 52, 9, 8, 20, 12, 11, 13, 14, 15] },
  { id: "consciente", tecnicas: [15, 2, 5, 12], sons: ["foco10", "foco12", "limiar"], ato: 2, nome: "Cair no sono consciente", objetivo: "o primeiro sonho lúcido", marco: "lucido", meditacao: "resp", dias: 5, noites: 7,
    dica: "O despertar das 4 da manhã é o grande aliado deste estágio: volte a dormir com a mente um pouco acordada.",
    ensinamentos: [16, 18, 22, 23, 28, 30, 31] },
  { id: "comodo", tecnicas: [11, 16, 18, 13], sons: ["foco21", "vazio", "vialactea", "nebulosa"], ato: 3, nome: "O outro cômodo", objetivo: "chegar a um lugar escolhido dentro do sonho", marco: "alvo", meditacao: "dragao", dias: 5, noites: 7,
    dica: "Escolha o lugar antes de dormir e diga com firmeza: esta noite eu vou até lá e sei que estou sonhando.",
    ensinamentos: [17, 19, 24, 32, 33, 34] },
  { id: "luz", tecnicas: [8, 6, 14, 19, 21], sons: ["vibracoes", "zumbido", "pulsar", "esferas", "orbita", "aurora"], ato: 4, nome: "A luz azul", objetivo: "sentir as vibrações", marco: "vibra", meditacao: "maos", dias: 5, noites: 7,
    dica: "Vibrações, zumbidos e o corpo pesado são a porta, e não um perigo. Respire e deixe vir.",
    ensinamentos: [57, 35, 36, 37, 38, 39, 40, 41, 42] },
  { id: "sair", tecnicas: [20, 17, 22, 23, 24], sons: ["desprendimento", "elevar", "alem", "vazioprofundo", "poeira", "cosmos", "buraco"], ato: 5, nome: "Sair do corpo", objetivo: "a viagem astral", marco: "astral", meditacao: "pilar", dias: 5, noites: 7,
    dica: "Quando vierem as vibrações, não se mexa: imagine que rola para fora do corpo, ou que flutua até o teto.",
    ensinamentos: [25, 26, 27, 29, 43, 44, 45, 46, 21] }
];

// As tradições: a pessoa escolhe uma no começo e segue tudo dela (a variável continua ESTILOS, e est.estilo guarda a escolha).
// O Arhat é o livro: os atos acima (ESTAGIOS). Nas outras, `tecnicas` (índices de conteudo.js → NOITE) vêm em ordem,
// uma por semana: depois de 7 noites dormidas com o Osirion, a próxima se revela. `dia`: a prática do dia.
// `origem`: a legenda de onde vem a tradição. `ensinamentos`: as cápsulas, em sequência. `sons`: a ordem em que os sons aparecem (os que faltam vêm na última técnica).
window.ESTILOS = [
  { id: "arhat", nome: "O caminho do Arhat", sub: "O livro da Vivian: do sonho lembrado à viagem astral, em seis atos", origem: "Do livro Arhat, de Vivian Pupin.", ilus: "figura-dourada" },
  { id: "guerreiro", nome: "O homem pássaro", sub: "Os xamãs: a arte de sonhar de Dom Juan, nos livros de Castaneda", origem: "Dos livros de Carlos Castaneda (1968–1998), que contam os ensinamentos de Dom Juan Matus, xamã yaqui do México. Estudiosos discutem se Dom Juan existiu.", ilus: "maos-chama",
    dia: { k: "dialogo" }, tecnicas: [1, 3, 12, 13], ensinamentos: [30, 34, 33, 32, 31],
    sons: ["mata", "chuva", "mar", "foco10", "limiar", "zumbido"] },
  { id: "yoga", nome: "A yoga dos sonhos", sub: "Tibete e Índia: o sankalpa, os mantras, a luz na garganta e o Yoga Nidra", origem: "Do Tibete, a yoga dos sonhos, uma das Seis Yogas de Naropa. Da Índia, os Upanishads e o Yoga Nidra, organizado por Swami Satyananda Saraswati nos anos 1960.", ilus: "meditacao-figura",
    dia: { k: "atencao" }, tecnicas: [2, 5, 6, 8, 14], ensinamentos: [14, 15, 35, 36, 37, 38, 39, 31],
    sons: ["tacas", "chuva", "sono", "esferas", "vazio", "cosmos"] },
  // O sonho lúcido (LaBerge) e a projeção astral (Monroe e Buhlman) juntos: primeiro despertar no sonho, depois sair do corpo
  { id: "cosmico", nome: "O homem cósmico", sub: "Stephen LaBerge, Robert Monroe e William Buhlman: o sonho lúcido e a saída do corpo", origem: "Da ciência do sono: Stephen LaBerge comprovou o sonho lúcido em laboratório, em Stanford, nos anos 1980. Da exploração fora do corpo: Robert Monroe (1971) e William Buhlman (1996).", ilus: "salto-figura",
    dia: { k: "teste" }, tecnicas: [0, 10, 9, 15, 16, 4, 20, 21, 17, 19, 22, 23, 24, 18, 11], viagem: "sair",
    ensinamentos: [10, 28, 47, 30, 16, 18, 21, 3, 22, 57, 23, 27, 25, 26, 11, 29, 12],
    sons: ["chuva", "mar", "tacas", "chuvabin", "sono", "tempo", "foco10", "foco12", "limiar", "vibracoes", "zumbido", "desprendimento", "elevar", "foco21", "alem"] },
  // As tradições do sonho: técnicas e ensinamentos só com o que as fontes documentam (a Vivian revisa antes de publicar)
  { id: "egito", nome: "Códigos do antigo Egito", sub: "Os templos de Saqqara, o papiro dos sonhos, Bes e a Esfinge", origem: "Do Egito antigo, dos faraós ao período greco-romano: papiros, estelas e os santuários de Saqqara, de cerca de 1400 a.C. ao século V.", ilus: "olho",
    tecnicas: [27, 25, 26, 7], ensinamentos: [58, 59, 60, 44, 5], sons: ["vazio", "tacas", "mar", "vialactea", "tempo"] },
  { id: "grecia", nome: "O oráculo grego dos sonhos", sub: "O sono nos templos de Asclépio, em Epidauro e Pérgamo", origem: "Do culto de Asclépio, deus grego da cura, praticado por cerca de mil anos em Epidauro, Pérgamo e outros santuários.", ilus: "rio",
    tecnicas: [28, 29, 30], ensinamentos: [61, 62, 5, 43], sons: ["mar", "tacas", "chuva", "esferas"] },
  { id: "indigenas", nome: "A arte de sonhar", sub: "O sonho entre os Yanomami e os Guarani", origem: "Dos Yanomami, da Amazônia, na voz de Davi Kopenawa, e dos Guarani do Sul e do Sudeste, em estudos de antropólogos.", ilus: "morro-figuras",
    tecnicas: [31, 32, 33], ensinamentos: [63, 64, 17, 13], sons: ["mata", "chuva", "mar"] },
  { id: "aborigenes", nome: "Os aborígenes da Austrália", sub: "O Dreaming, a terra e as canções que chegam em sonho", origem: "Dos povos aborígenes da Austrália, como os Anangu, os Warlpiri e os cantores wangga do norte, em registros de antropólogos.", ilus: "estrela-terra",
    tecnicas: [34, 35], ensinamentos: [65], sons: ["mata", "vazio", "cosmos"] },
  { id: "sufis", nome: "Entre dois mundos", sub: "Os hadiths do sono, a istikhara e Ibn Arabi", origem: "Do Islã: os hadiths do Profeta reunidos por al-Bukhari e Muslim no século IX, e o mestre sufi andaluz Ibn Arabi (1165–1240).", ilus: "estrela-lilas",
    tecnicas: [36, 37, 38], ensinamentos: [66, 19], sons: ["vazio", "tacas", "esferas"] }
];
