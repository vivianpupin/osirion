// Os estágios do Osirion, na ordem do Arhat (um por ato).
// Cada estágio tem: ensinamentos (cápsulas, abrem em sequência), a meditação do dia (prática do ato, com o "feito"),
// a técnica da noite (a pessoa escolhe entre as técnicas de conteudo.js → NOITE, uma por semana) e um marco.
// O estágio avança pela prática: ler os ensinamentos, meditar `dias` dias e dormir com a técnica `noites` noites.
// O marco é uma conquista: pode acontecer em qualquer estágio e não trava nada.
// Marcos possíveis: nevoeiro, lucidez, lucido, alvo, vibra, astral.
window.ESTAGIOS = [
  { id: "nevoeiro", ato: 0, nome: "O Nevoeiro", objetivo: "ver o seu nevoeiro", marco: "nevoeiro", meditacao: "raizes", dias: 5, noites: 7,
    dica: "O nevoeiro pode demorar a aparecer. Continue: observe as imagens ao adormecer, sem segurar e sem fugir. Ele vem.",
    ensinamentos: [54, 1, 2, 3, 4, 49, 48, 53, 50, 51, 6, 5] },
  { id: "perceber", ato: 1, nome: "Perceber", objetivo: "o primeiro grau de lucidez", marco: "lucidez", meditacao: "resp", dias: 5, noites: 7,
    dica: "A lucidez nasce do hábito de perguntar, acordado: será que estou sonhando? Quanto mais testes de dia, mais chances à noite.",
    ensinamentos: [10, 47, 7, 52, 9, 8, 20, 12, 11, 13, 14, 15] },
  { id: "consciente", ato: 2, nome: "Cair no sono consciente", objetivo: "o primeiro sonho lúcido", marco: "lucido", meditacao: "resp", dias: 5, noites: 7,
    dica: "O despertar das 4 da manhã é o grande aliado deste estágio: volte a dormir com a mente um pouco acordada.",
    ensinamentos: [16, 18, 22, 23, 28, 30, 31] },
  { id: "comodo", ato: 3, nome: "O outro cômodo", objetivo: "chegar a um lugar escolhido dentro do sonho", marco: "alvo", meditacao: "dragao", dias: 5, noites: 7,
    dica: "Escolha o lugar antes de dormir e diga com firmeza: esta noite eu vou até lá e sei que estou sonhando.",
    ensinamentos: [17, 19, 24, 32, 33, 34] },
  { id: "luz", ato: 4, nome: "A luz azul", objetivo: "sentir as vibrações", marco: "vibra", meditacao: "maos", dias: 5, noites: 7,
    dica: "Vibrações, zumbidos e o corpo pesado são a porta, e não um perigo. Respire e deixe vir.",
    ensinamentos: [35, 36, 37, 38, 39, 40, 41, 42] },
  { id: "sair", ato: 5, nome: "Sair do corpo", objetivo: "a viagem astral", marco: "astral", meditacao: "pilar", dias: 5, noites: 7,
    dica: "Quando vierem as vibrações, não se mexa: imagine que rola para fora do corpo, ou que flutua até o teto.",
    ensinamentos: [25, 26, 27, 29, 43, 44, 45, 46, 21] }
];
