// Os estágios do Osirion, na ordem do Arhat (um por ato).
// Cada estágio tem: ensinamentos (cápsulas, abrem em sequência), a meditação do dia (prática do ato, com o "feito"),
// a técnica da noite (a pessoa escolhe entre as técnicas de conteudo.js → NOITE, uma por semana) e um marco.
// O estágio avança pela prática: ler os ensinamentos, meditar `dias` dias e dormir com a técnica `noites` noites.
// O marco é uma conquista: pode acontecer em qualquer estágio e não trava nada.
// Marcos possíveis: nevoeiro, lucidez, lucido, alvo, vibra, astral.
window.ESTAGIOS = [
  { id: "nevoeiro", ato: 0, nome: "O Nevoeiro", objetivo: "ver o seu nevoeiro", marco: "nevoeiro", meditacao: "raizes", dias: 5, noites: 7,
    dica: "O nevoeiro pode demorar a aparecer. Continue: observe as imagens ao adormecer, sem segurar e sem fugir. Ele vem.",
    ensinamentos: [54, 1, 2, 3, 4, 49, 48, 53, 50, 51, 6, 55, 5] },
  { id: "perceber", ato: 1, nome: "Perceber", objetivo: "o primeiro grau de lucidez", marco: "lucidez", meditacao: "resp", dias: 5, noites: 7,
    dica: "A lucidez nasce do hábito de perguntar, acordado: será que estou sonhando? Quanto mais testes de dia, mais chances à noite.",
    ensinamentos: [10, 56, 47, 7, 52, 9, 8, 20, 12, 11, 13, 14, 15] },
  { id: "consciente", ato: 2, nome: "Cair no sono consciente", objetivo: "o primeiro sonho lúcido", marco: "lucido", meditacao: "resp", dias: 5, noites: 7,
    dica: "O despertar das 4 da manhã é o grande aliado deste estágio: volte a dormir com a mente um pouco acordada.",
    ensinamentos: [16, 18, 22, 23, 28, 30, 31] },
  { id: "comodo", ato: 3, nome: "O outro cômodo", objetivo: "chegar a um lugar escolhido dentro do sonho", marco: "alvo", meditacao: "dragao", dias: 5, noites: 7,
    dica: "Escolha o lugar antes de dormir e diga com firmeza: esta noite eu vou até lá e sei que estou sonhando.",
    ensinamentos: [17, 19, 24, 32, 33, 34] },
  { id: "luz", ato: 4, nome: "A luz azul", objetivo: "sentir as vibrações", marco: "vibra", meditacao: "maos", dias: 5, noites: 7,
    dica: "Vibrações, zumbidos e o corpo pesado são a porta, e não um perigo. Respire e deixe vir.",
    ensinamentos: [57, 35, 36, 37, 38, 39, 40, 41, 42] },
  { id: "sair", ato: 5, nome: "Sair do corpo", objetivo: "a viagem astral", marco: "astral", meditacao: "pilar", dias: 5, noites: 7,
    dica: "Quando vierem as vibrações, não se mexa: imagine que rola para fora do corpo, ou que flutua até o teto.",
    ensinamentos: [25, 26, 27, 29, 43, 44, 45, 46, 21] }
];

// Os caminhos de prática: depois da primeira semana, a pessoa pode seguir outro caminho além do Arhat.
// Cada caminho é um pacote pronto: a prática do dia, as técnicas da noite (uma por semana, nesta ordem)
// e os ensinamentos (em sequência). O Arhat continua sendo o caminho padrão (os estágios).
window.ESTILOS = [
  { id: "arhat", nome: "O caminho do Arhat", sub: "As lições do livro, ato por ato, até a viagem astral", ilus: "figura-dourada" },
  { id: "lucido", nome: "Sonho lúcido", sub: "Perceber, dentro do sonho, que é sonho", ilus: "olho",
    dia: { k: "teste" }, tecnicas: [0, 9, 1, 10], ensinamentos: [10, 28, 47, 30, 16, 18, 21, 3] },
  { id: "astral", nome: "Viagem astral", sub: "Sair do corpo com consciência, como Monroe e Buhlman", ilus: "salto-figura",
    dia: { k: "pilar", ato: 5 }, tecnicas: [4, 11, 10], viagem: "sair", ensinamentos: [22, 57, 23, 27, 25, 26, 11, 29, 12] },
  { id: "energia", nome: "Energia e corpo sutil", sub: "As raízes, os centros e as três forças", ilus: "estrela-sol",
    dia: { k: "forcas" }, tecnicas: [8, 5, 2], ensinamentos: [6, 55, 56, 57] },
  { id: "tradicoes", nome: "Yoga dos sonhos e mantras", sub: "As tradições do Tibete e da Índia", ilus: "meditacao-figura",
    dia: { k: "atencao" }, tecnicas: [8, 6, 5, 2], ensinamentos: [14, 15, 35, 36, 37, 38, 39, 31] },
  { id: "incubar", nome: "Pedir sonhos", sub: "Como nos templos de incubação: perguntar e receber a resposta", ilus: "morro-figuras",
    dia: { k: "teste" }, tecnicas: [7, 3, 0], ensinamentos: [5, 13, 8, 19, 43, 44] }
];
