// O sorteio do alvo da noite: como o oráculo dos planetas da Caravana, cada leitura é uma combinação.
// O altar mostra nove reinos (sem nomes). O sorteio para num reino e dentro dele tira um alvo,
// um caminho de chegada, um detalhe para os sentidos, duas tarefas lúcidas e uma pergunta para o diário.
// Os alvos do livro Arhat estão entre eles (Everest, Egito antigo, Lua, Sadhus, Sirius, fundo do mar, cura).
window.REINOS = [
  { id: "antigos", ilus: "estrela-sol", nome: "Os mundos antigos", alvos: [
    ["O Egito antigo", "Pirâmides de cobre ao pôr do sol, areia morna sob os pés e cheiro de incenso e de rio."],
    ["O Serapeum de Saqqara", "Corredores de pedra sob a terra, iluminados por tochas, e grandes câmaras de granito em silêncio."],
    ["Puma Punku", "Blocos de pedra cortados com perfeição no alto dos Andes, sob um céu muito azul e frio."],
    ["A Biblioteca de Alexandria", "Rolos de papiro até o teto, sábios conversando baixo e a luz do mar entrando pelas janelas."],
    ["Machu Picchu ao amanhecer", "Terraços verdes na neblina, lhamas no silêncio e o sol nascendo entre as montanhas."],
    ["Um templo de Delfos", "Colunas brancas na encosta, o som de uma fonte e uma sacerdotisa que espera a sua pergunta."],
    ["A Índia dos rishis", "Uma floresta antiga à beira do Ganges, fogueiras de oferenda e cantos em sânscrito."]
  ] },
  { id: "montanhas", ilus: "montanha-fita", nome: "As montanhas", alvos: [
    ["O alto do Everest", "Ar fino e gelado, um mar de nuvens abaixo e bandeiras de oração cantando no vento."],
    ["Uma caverna nos Himalaias", "Uma fogueira pequena, um Sadhu meditando imóvel e o frio da pedra nas costas."],
    ["O Monte Kailash", "Uma montanha sagrada coberta de neve, perfeita, refletida num lago azul."],
    ["A Chapada dos Veadeiros", "Cristais no chão de pedra, cachoeiras ao longe e um céu de estrelas que parece perto."],
    ["Um mosteiro no alto do Tibete", "Paredes vermelhas, tambores graves, monges cantando e o vento das alturas."],
    ["O topo de um vulcão adormecido", "Pedra escura e morna, vapor saindo da terra e o horizonte inteiro à sua volta."]
  ] },
  { id: "ceu", ilus: "lua", nome: "O céu e as estrelas", alvos: [
    ["A Lua", "Passos leves sobre a poeira cinza e a Terra azul flutuando inteira no céu negro."],
    ["Sirius", "Uma estrela azulada que cresce até ocupar tudo, e você entra na luz dela."],
    ["As Plêiades", "Sete irmãs de luz próximas umas das outras, como uma família no céu."],
    ["O cinturão de Órion", "Três estrelas em linha, a alma de Osíris no céu, e um caminho de luz entre elas."],
    ["O corpo de Nut", "O céu estrelado curvado sobre a Terra como uma deusa, e você caminha pela pele dela."],
    ["Saturno e seus anéis", "Faixas de gelo e poeira brilhando à sua volta, e um silêncio enorme."],
    ["A Via Láctea vista de fora", "Um redemoinho de bilhões de estrelas, e você flutua acima dele."]
  ] },
  { id: "aguas", ilus: "ondas", nome: "As águas", alvos: [
    ["O fundo do mar", "Você respira debaixo d'água, a luz vai ficando azul e uma baleia canta ao seu lado."],
    ["O Rio Ganges ao amanhecer", "Lamparinas boiando, sinos dos templos e a água morna subindo pelas pernas."],
    ["Uma cachoeira na mata", "O barulho da queda, o vapor fresco no rosto e pedras cobertas de musgo."],
    ["Um lago de cristal", "Água tão clara que você vê o fundo, e o céu inteiro refletido nela."],
    ["O encontro das águas na Amazônia", "Um rio escuro e um rio barrento correndo lado a lado sem se misturar."],
    ["Uma lagoa de bioluminescência", "Cada movimento seu acende pontos de luz azul na água escura."]
  ] },
  { id: "cura", ilus: "maos-chama", nome: "Os templos de cura", alvos: [
    ["O templo de Asclépio em Epidauro", "Uma sala de pedra branca à noite, tochas, o som de água e uma presença que vem curar."],
    ["Um templo de cristal", "Paredes que brilham em cores e uma luz que atravessa você e limpa tudo."],
    ["Uma oca de cura na floresta", "Fumaça de ervas, um canto antigo e mãos que tocam onde dói."],
    ["Um jardim de plantas medicinais", "Folhas grandes, cheiros fortes e uma guardiã que indica a planta certa para você."],
    ["As fontes termais da montanha", "Água quente saindo da pedra, vapor no frio e o corpo inteiro relaxando."],
    ["A sala do seu próprio coração", "Um quarto quente e iluminado dentro do peito, onde você pode cuidar do que precisa."]
  ] },
  { id: "mestres", ilus: "meditacao-figura", nome: "Os mestres", alvos: [
    ["Os Sadhus dos Himalaias", "Homens de cabelos longos e cinzas no corpo, meditando em silêncio na montanha."],
    ["Uma xamã da floresta", "Uma mulher pintada de urucum que canta ao lado do fogo e sabe o caminho dos sonhos."],
    ["Um sábio tibetano da yoga dos sonhos", "Um lama sorridente que ensina a reconhecer o sonho dentro do sonho."],
    ["Uma sacerdotisa de Ísis", "Vestes brancas, um templo à beira do Nilo e um segredo guardado para você."],
    ["O seu eu do futuro", "Você mesmo, anos à frente, sereno, com algo importante para dizer."],
    ["Um velho contador de histórias", "Ao redor da fogueira, ele conta a história que você precisava ouvir."]
  ] },
  { id: "reencontros", ilus: "morro-figuras", nome: "Os reencontros", alvos: [
    ["Quem partiu", "A porta de uma casa conhecida, um cheiro que você reconhece e alguém querido sorrindo ao te ver."],
    ["Os seus avós", "Uma cozinha antiga, café no fogo e mãos que você conhece há muito tempo."],
    ["A criança que você foi", "O lugar onde você brincava, e você mesmo pequeno esperando por você."],
    ["Um animal amado", "Ele corre ao seu encontro, inteiro e feliz, num campo aberto."],
    ["Os seus ancestrais", "Uma roda de pessoas antigas que te reconhecem como parte delas."],
    ["Uma amizade perdida", "Um encontro sem mágoa, só com o que vale a pena dizer."]
  ] },
  { id: "guias", ilus: "estrela-dourada", nome: "Os guias", alvos: [
    ["Os seus guias", "Uma clareira à noite e uma luz que se aproxima entre as árvores e ganha forma."],
    ["Um animal de poder", "Uma onça, um gavião ou uma serpente que aparece e quer te mostrar um caminho."],
    ["A guardiã do portal", "Uma figura de pé diante de um portal de luz, que pergunta o que você busca."],
    ["Os seres das estrelas", "Presenças de luz que falam sem palavras e te mostram de onde viemos."],
    ["Um anjo da guarda", "Asas enormes, um calor no peito e a sensação de estar protegido."],
    ["O conselho dos sábios", "Uma sala redonda com pessoas sentadas em roda esperando a sua pergunta."]
  ] },
  { id: "voo", ilus: "voo-figura", nome: "O voo e o corpo", alvos: [
    ["Voar sobre a sua cidade", "As ruas de cima, as luzes da noite e o vento passando pelo corpo."],
    ["Voar com os pássaros", "Um bando que te aceita entre eles, subindo nas correntes de ar quente."],
    ["Atravessar paredes", "A parede fica macia como água e você passa para o outro lado."],
    ["Ver o próprio corpo dormindo", "Você flutua perto do teto e olha para o seu corpo, tranquilo na cama."],
    ["Mudar de forma", "Você vira um pássaro, um peixe ou um feixe de luz, só com a intenção."],
    ["Dançar no ar", "Você gira, sobe e desce sem peso, com a música que o sonho tocar."]
  ] }
];
// Como chegar: o caminho de entrada no sonho.
window.CHEGADAS = [
  "Você atravessa o nevoeiro da sua cor e, do outro lado, o lugar já está à sua espera.",
  "Uma porta aparece na parede do quarto. Você abre e entra.",
  "Você sobe pelo teto, passa pelas nuvens e desce lá.",
  "Uma escada de pedra desce na escuridão. No último degrau, você chega.",
  "Você mergulha num lago escuro e sai do outro lado, já lá.",
  "Um fio de luz sai do seu umbigo e você segue por ele até o lugar.",
  "O chão do quarto vira areia, depois caminho, e o caminho leva até lá.",
  "Um pássaro grande pousa ao seu lado e te leva nas costas.",
  "Você caminha pelo outro cômodo da casa e a porta dos fundos dá direto lá.",
  "Você rola para fora do corpo, como ensina Monroe, e já está lá.",
  "Uma espiral de luz gira na sua frente e te puxa para dentro.",
  "Você fecha os olhos dentro do sonho e, ao abrir, está lá."
];
// Um detalhe para os sentidos, para deixar a imagem viva.
window.SENTIDOS = [
  "Repare no cheiro do ar.", "Sinta a temperatura na pele.", "Escute o som mais distante que existir.", "Toque o chão com as mãos e sinta a textura.",
  "Repare na cor da luz.", "Sinta o peso do seu corpo, ou a falta dele.", "Prove o gosto do ar.", "Olhe para cima e veja o que há no céu.",
  "Sinta o vento ou a água no rosto.", "Repare no que está bem perto, no detalhe pequeno."
];
// Tarefas para quando estiver lá, lúcido.
window.TAREFAS = [
  "Olhe para as suas mãos e conte os dedos.", "Pergunte: o que eu preciso saber agora?", "Peça para alguém te guiar pelo lugar.",
  "Peça um presente e tente trazê-lo de volta.", "Voe acima do lugar e veja tudo de cima.", "Se o sonho ficar instável, diga: “Clareza, agora!”",
  "Toque algo e sinta com todos os detalhes.", "Pergunte o seu nome de criador.", "Gire o corpo se a imagem começar a sumir.",
  "Sente-se e medite ali por um instante.", "Procure um espelho e olhe para o seu reflexo.", "Agradeça ao lugar antes de voltar.",
  "Peça para ver o seu nevoeiro de novo.", "Pergunte a um ser do lugar quem ele é.", "Lembre-se: o seu corpo dorme em segurança."
];
// A pergunta para o diário, na manhã seguinte.
window.PERGUNTAS = [
  "Qual foi o primeiro detalhe que você lembrou ao acordar?", "Como você chegou lá?", "Quem estava com você?", "Que cor tinha a luz?",
  "O que você sentiu no corpo?", "Você trouxe alguma palavra, imagem ou presente?", "Em que momento percebeu que era sonho?", "O que ficou para você hoje?"
];
// O reino da lua cheia: só aparece no altar nas noites perto da lua cheia.
window.REINO_LUA = { id: "luacheia", ilus: "fita-estrela-lilas", nome: "A Lua Cheia", especial: true, alvos: [
  ["O templo da Lua Cheia", "Um templo branco aberto para o céu, iluminado só pela lua, e uma água parada refletindo tudo."],
  ["Dançar sob a lua", "Um campo prateado, tambores ao longe e o corpo leve, girando na luz."],
  ["O lago de prata", "A lua inteira refletida num lago, e você caminha sobre o reflexo."],
  ["Subir pelo raio de lua", "Um feixe de luz prateada desce até a sua janela, e você sobe por ele."],
  ["A roda das sacerdotisas", "Mulheres de branco em roda, cantando para a lua, abrem um lugar para você."]
] };
