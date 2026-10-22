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
    ensinamentos: [54,  1,  2,  3,  74,  4,  77,  49,  48,  53,  50,  51,  6,  55,  5,  75] },
  { id: "perceber", tecnicas: [9, 1, 3, 7], sons: ["chuvabin", "sono", "tempo"], ato: 1, nome: "Perceber", objetivo: "o primeiro grau de lucidez", marco: "lucidez", meditacao: "resp", dias: 5, noites: 7,
    dica: "A lucidez nasce do hábito de perguntar, acordado: será que estou sonhando? Quanto mais testes de dia, mais chances à noite.",
    ensinamentos: [10,  56,  47,  7,  52,  9,  8,  20,  76,  12,  11,  13,  14,  15,  78] },
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
    ensinamentos: [25, 26, 27, 43, 44, 45, 46, 21] }
];

// As tradições: a pessoa escolhe uma no começo e segue tudo dela (a variável continua ESTILOS, e est.estilo guarda a escolha).
// O Arhat é o livro: os atos acima (ESTAGIOS). Nas outras, `tecnicas` (índices de conteudo.js → NOITE) vêm em ordem,
// uma por semana: depois de 7 noites dormidas com o Osirion, a próxima se revela. `dia`: a prática do dia (ou uma lista:
// a prática do dia muda junto com a técnica da semana).
// `chamada`: a frase curta do cartão da escolha. `origem`: de onde vem a tradição (na página dela). `ensinamentos`: as cápsulas, em sequência. `sons`: a ordem em que os sons aparecem (os que faltam vêm na última técnica).
window.ESTILOS = [
  { id: "arhat", nome: "O caminho do Arhat", chamada: "Seis atos para tornar-se um Arhat: desperto no dia e na noite.", sub: "O livro da Vivian: do sonho lembrado à viagem astral, em seis atos", origem: "Do livro Arhat, de Vivian Pupin.", ilus: "figura-dourada" },
  { id: "guerreiro", nome: "O homem pássaro", chamada: "O voo dos feiticeiros do deserto.", sub: "Os xamãs: a arte de sonhar de Dom Juan, nos livros de Castaneda", origem: "Dos livros de Carlos Castaneda (1968–1998), que contam os ensinamentos de Dom Juan Matus, xamã yaqui do México.", ilus: "maos-chama",
    dia: [{ k: "dialogo" }, { k: "historia" }, { k: "sombras" }, { k: "conselheira" }, { k: "marcha" }, { k: "ver" }], tecnicas: [1, 3, 12, 13, 39, 40], ensinamentos: [77,  30,  67,  34,  74,  33,  32,  78,  31,  68],
    sons: ["mata", "chuva", "mar", "foco10", "limiar", "zumbido"] },
  { id: "yoga", nome: "A yoga dos sonhos", chamada: "O sono desperto dos iogues do Tibete e da Índia.", sub: "Tibete e Índia: o sankalpa, os mantras, a luz em Vishuddha e o Yoga Nidra", origem: "Do Tibete, a yoga dos sonhos, uma das Seis Yogas de Naropa. Da Índia, os Upanishads e o Yoga Nidra, organizado por Swami Satyananda Saraswati nos anos 1960.", ilus: "meditacao-figura",
    dia: { k: "atencao" }, tecnicas: [2, 5, 6, 8, 14], ensinamentos: [77,  14,  74,  15,  35,  36,  76,  37,  38,  39,  31],
    sons: ["tacas", "chuva", "sono", "esferas", "vazio", "cosmos"] },
  // O sonho lúcido (LaBerge) e a projeção astral (Monroe e Buhlman) juntos: primeiro despertar no sonho, depois sair do corpo
  { id: "cosmico", nome: "O homem cósmico", chamada: "Despertar no sonho e explorações do universo.", sub: "Stephen LaBerge, Robert Monroe e William Buhlman: o sonho lúcido e a saída do corpo", origem: "Da ciência do sono: Stephen LaBerge comprovou o sonho lúcido em laboratório, em Stanford, nos anos 1980. Da exploração fora do corpo: Robert Monroe (1971) e William Buhlman (1996).", ilus: "salto-figura",
    dia: { k: "teste" }, tecnicas: [0, 10, 9, 15, 16, 4, 20, 21, 17, 19, 22, 23, 24, 18, 11], viagem: "sair",
    ensinamentos: [10,  77,  28,  74,  47,  30,  16,  76,  18,  21,  3,  22,  57,  23,  27,  25,  26,  11,  12],
    sons: ["chuva", "mar", "tacas", "chuvabin", "sono", "tempo", "foco10", "foco12", "limiar", "vibracoes", "zumbido", "desprendimento", "elevar", "foco21", "alem"] },
  // As tradições do sonho: técnicas e ensinamentos só com o que as fontes documentam (a Vivian revisa antes de publicar)
  { id: "egito", nome: "Códigos do antigo Egito", chamada: "O que os sacerdotes do Nilo pediam à noite, há três mil anos.", sub: "Os templos do sono, o papiro dos sonhos, Bes e a Esfinge", origem: "Do Egito antigo, dos faraós ao período greco-romano, de cerca de 1400 a.C. ao século V.", ilus: "olho",
    dia: { k: "desperta" }, tecnicas: [27, 25, 26, 41, 7], ensinamentos: [58,  77,  59,  74,  60,  44,  69,  75,  70,  5], sons: ["vazio", "tacas", "mar", "vialactea", "tempo"] },
  { id: "grecia", nome: "O oráculo grego dos sonhos", chamada: "Mil anos de estudos do sono sagrado nos templos de Asclépio.", sub: "O sono nos templos de Asclépio, em Epidauro e Pérgamo", origem: "Rituais praticados por cerca de mil anos em Epidauro, Pérgamo e outros santuários de Asclépio.", ilus: "rio",
    dia: { k: "pureza" }, tecnicas: [28, 29, 30], ensinamentos: [61,  77,  62,  74,  5,  75,  43], sons: ["mar", "tacas", "chuva", "esferas"] },
  { id: "indigenas", nome: "A arte de sonhar", chamada: "O mundo encantado da Amazônia.", sub: "O sonho entre os Yanomami e os Guarani", origem: "Dos Yanomami, da Amazônia, na voz de Davi Kopenawa, e dos Guarani do Sul e do Sudeste, em estudos de antropólogos.", ilus: "morro-figuras",
    dia: { k: "floresta" }, tecnicas: [31, 32, 33], ensinamentos: [63,  77,  64,  74,  17,  78,  13], sons: ["mata", "chuva", "mar"] },
  { id: "aborigenes", nome: "Os aborígenes da Austrália", chamada: "O tempo que foi e ainda é, entre os povos da antiga Sahul.", sub: "O Dreaming, a terra e as canções que chegam em sonho", origem: "Dos povos aborígenes da Austrália, como os Anangu, os Warlpiri e os cantores wangga do norte, em registros de antropólogos.", ilus: "estrela-terra",
    dia: { k: "escuta" }, tecnicas: [34, 35], ensinamentos: [65,  77,  74,  78], sons: ["mata", "vazio", "cosmos"] },
  { id: "sufis", nome: "Entre dois mundos", chamada: "Onde o sonho encontra o espírito, no Islã dos sufis.", sub: "Os hadiths do sono, a istikhara e Ibn Arabi", origem: "Do Islã: os hadiths do Profeta reunidos por al-Bukhari e Muslim no século IX, e o mestre sufi andaluz Ibn Arabi (1165–1240).", ilus: "ondas",
    dia: { k: "verdade" }, tecnicas: [36, 37, 38], ensinamentos: [66,  77,  74,  19,  76], sons: ["vazio", "tacas", "esferas"] },
  { id: "japao", nome: "Os templos japoneses de Kannon", chamada: "Os sonhos que se pediam à deusa da compaixão.", sub: "O diário de Myōe, os templos de Kannon, o Baku e o primeiro sonho do ano",
    origem: "Do Japão budista: o monge Myōe (1173–1232), os retiros nos templos de Kannon na época Heian e o folclore do Baku.", ilus: "lua",
    dia: { k: "meditar-sonho" }, tecnicas: [42, 43, 44, 45], ensinamentos: [71,  77,  72,  74,  73,  45,  78], sons: ["chuva", "tacas", "mar", "vazio"] }
];
