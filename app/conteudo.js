// Conteúdo do livro Arhat, de Vivian Pupin, organizado para o app.
// Blocos de texto: { p } parágrafo · { afirm, fonte } afirmação em destaque · { passos } lista numerada
// { lista } lista simples · { sub } subtítulo · { cita, autor } citação · { pergunta } pergunta para a pessoa
// Os ensinamentos do livro estão nas cápsulas diárias (capsulas.js).
window.ARHAT = (function () {
  const OUTRO_COMODO = [
    { p: "Volte para a cama e deite-se confortavelmente." },
    { p: "Feche os olhos e visualize-se caminhando em outro cômodo da sua casa, como a sala, por exemplo. Observe os objetos ao seu redor, o tapete, o cheiro do ambiente, a cor das paredes, as plantas penduradas no teto. Sinta a textura da madeira da mesa de centro, olhe atentamente todos os detalhes." },
    { p: "Essa prática treina nossa atenção para abandonar o foco no corpo físico e perceber outros planos." },
    { p: "Você pode voltar para o mesmo cômodo todas as noites para se aprofundar ainda mais. Com repetição e dedicação, você poderá expandir significativamente sua habilidade de mudar o foco de atenção e explorar diferentes estados de consciência e percepção." }
  ];

  const RESP_DOURADA = {
    k: "resp", ilus: "estrela-dourada", traco: "olho-galaxia", ico: "sol", nome: "Respiração Dourada", det: "7 respirações pelo terceiro olho",
    resp: { n: 7, inspire: "Inspire: um filamento dourado desce do sol central, penetra o terceiro olho, ilumina os olhos, o topo da cabeça e a nuca.", expire: "Expire: a energia faz o caminho de volta e libera as impurezas que bloqueiam os centros espirituais.", fim: "Todo o corpo se ilumina. Estimule a vibração das raízes extrafísicas: elas são a porta de entrada para algo totalmente novo." },
    texto: [
      { p: "Há dois grandes sóis centrais que sustentam a vida deste universo." },
      { p: "Ao inspirar profundamente, um filamento dourado desce desse centro de energia, penetra o terceiro olho (a região entre as sobrancelhas), preenche e ilumina os olhos, o topo da cabeça e a nuca." },
      { p: "Ao expirar, a energia segue o caminho de volta, liberando as impurezas que bloqueiam nossos centros espirituais." },
      { p: "Exteriorizamos a energia pelo terceiro olho, ativando as raízes do chakra frontal e promovendo a limpeza e o equilíbrio de nossa energia vital." },
      { sub: "7 respirações" },
      { p: "Após certa prática é comum sentir todo o corpo se iluminando e uma ligeira vibração das raízes extrafísicas. Estimule essas vibrações, elas são a porta de entrada para algo totalmente novo na sua existência!" }
    ]
  };

  const TESTE = { k: "teste", ilus: "olho", ico: "mao", nome: "Teste de realidade", det: "“Será que estou sonhando?” 7 a 10 vezes" };
  // Textos escritos para o app (a Vivian revisa): a atenção inteira (olhos, mente e coração) e as três forças.
  const ATENCAO = {
    k: "atencao", ilus: "olho", traco: "mente-coracao", ico: "luz", nome: "Olhos, mente e coração", det: "A atenção inteira num ponto só",
    texto: [
      { p: "Os olhos, a mente e o coração, juntos, formam a atenção inteira. Quando os três olham para o mesmo ponto, a consciência fica firme, e é essa firmeza que você leva para dentro do sonho." },
      { p: "Sente-se confortável e feche os olhos. Leve o olhar para dentro, para o ponto entre as sobrancelhas, sem forçar." },
      { p: "Sinta a mente se acalmar ali, como uma espiral que vai se fechando até um ponto de luz." },
      { p: "Agora traga um leve sorriso para o coração e sinta o calor dele." },
      { p: "Ligue o coração ao ponto entre as sobrancelhas, como um fio de luz que sobe. Olhos, mente e coração no mesmo lugar." },
      { p: "Fique assim por alguns minutos. Quando um pensamento puxar, volte ao ponto." }
    ]
  };
  const DIALOGO = {
    k: "dialogo", ilus: "olho", ico: "luz", nome: "Parar o diálogo interno", det: "Caminhar em silêncio, sem nomear",
    texto: [
      { p: "Dom Juan dizia que o mundo se mantém como o conhecemos porque falamos dele o tempo todo, por dentro. Quando essa conversa para, a percepção se abre, e é nesse silêncio que se aprende a sonhar." },
      { p: "Saia para caminhar devagar, de preferência num lugar com árvores ou céu aberto." },
      { p: "Deixe os olhos levemente desfocados, olhando um pouco acima da linha do horizonte, sem fixar em nada." },
      { p: "Não dê nome ao que vê: só perceba as formas, as cores, os sons, o vento na pele." },
      { p: "Quando um pensamento começar a falar, não brigue com ele: volte à sensação dos pés tocando o chão." },
      { p: "Comece com dez minutos. Com o tempo, os intervalos de silêncio ficam maiores." }
    ]
  };
  const VER = {
    k: "ver", ilus: "olho", ico: "luz", nome: "Ver, não só olhar", det: "O olhar que abrange tudo em volta",
    texto: [
      { p: "Olhar é fixar uma coisa e dar nome a ela. Ver é perceber tudo de uma vez, sem escolher. Nos livros de Castaneda, ver é a percepção do guerreiro: direta, sem o filtro das palavras." },
      { p: "Sente-se num lugar tranquilo, com a coluna ereta, e escolha um ponto à sua frente." },
      { p: "Mantenha o olhar parado nesse ponto e, sem mexer os olhos, comece a perceber o que está nas bordas da visão: em cima, embaixo, dos lados." },
      { p: "Abra a percepção até abranger tudo ao mesmo tempo, como se os olhos ficassem largos." },
      { p: "Sinta também os sons e a temperatura do ar, tudo junto, sem dar nome." },
      { p: "Fique assim alguns minutos. No sonho, esse mesmo olhar ajuda a perceber que o cenário não é comum." }
    ]
  };
  const FORCAS = {
    k: "forcas", ilus: "estrela-terra", traco: "tres-forcas", ico: "espiral", nome: "As três forças", det: "Do alto, da frente e da Terra",
    texto: [
      { p: "Três forças sustentam a vida: a do universo, que vem do alto; a cósmica, que chega pela frente, no ar que respiramos; e a da Terra, que sobe do chão." },
      { p: "Sente-se numa cadeira, com a coluna ereta e os pés inteiros no chão. Mãos sobre os joelhos. Feche os olhos e respire devagar." },
      { sub: "Do alto" },
      { p: "Sinta a força do universo descendo em espiral até o topo da cabeça e entrando pela coroa." },
      { sub: "Pela frente" },
      { p: "A cada inspiração, a força cósmica entra pelo rosto, entre as sobrancelhas, e enche a cabeça de luz." },
      { sub: "De baixo" },
      { p: "A força da Terra sobe em espiral pela planta dos pés, pelas pernas, até abaixo do umbigo." },
      { p: "As três se encontram abaixo do umbigo. Dali, deixe a energia subir pelas costas até o alto da cabeça e descer pela frente do corpo, de volta ao umbigo. Faça esse círculo algumas vezes." },
      { p: "Para terminar, junte a energia abaixo do umbigo e descanse as mãos ali por alguns instantes." }
    ]
  };

  const ATOS = [
    {
      id: 0, cor: "#a9b2f0", ilus: "morro-figuras", nome: "O Início", sub: "Atravessar o véu do sono", gratis: true, capa: "noite",
      frase: "A Terra Prometida é o mundo dos sonhos.",
      momentos: [
        { quando: "Ao acordar", hora: "no dia seguinte", praticas: [
          { k: "diario", ilus: "lua", ico: "pena", nome: "Diário dos 5 minutos", det: "Sem levantar e sem abrir os olhos", texto: [
            { p: "Ao escrevermos nossos sonhos imediatamente após acordar, mostramos ao cérebro a importância de recordar as experiências do plano extrafísico, incentivando-o a não mais ocultar essa valiosa informação." },
            { sub: "Os primeiros 5 minutos após o despertar são cruciais!" },
            { p: "Não levante e nem abra os olhos. Mantenha o estado de “Corpo relaxado, mente desperta”." },
            { pergunta: "Onde eu estava? O que eu estava sentindo?" },
            { p: "Se ao acordar você ainda tiver uma imagem na mente, preste atenção nela enquanto rememora suas experiências noturnas. Force sua mente a trazer à tona qualquer informação e anote tudo: até pequenas lembranças incoerentes podem desvendar verdadeiras histórias que poderiam ser perdidas para sempre! É importante anotar imediatamente após acordar qualquer experiência que você se lembre. Não deixe para depois, pois poderá perder grandes descobertas!" },
            { p: "Se não houver qualquer lembrança, continue praticando com convicção!" },
            { p: "É nativo do ser humano a vida dual, matéria e espírito. Todos, sem exceção de nenhum, passam por atividades noturnas de desdobramento. Todos possuem um cérebro com memória ativa. Se você tem dificuldades para se recordar de seus sonhos é porque não teve estímulos para isso, portanto, apenas continue treinando!" },
            { p: "Dê importância à dimensão espiritual e receberá os doces frutos da eternidade!" }
          ] } ] },
        { quando: "Dia", hora: "quando quiser", praticas: [
          { k: "raizes", ilus: "fitas", traco: "raizes", ilusFim: "maos-chama", ico: "raiz", nome: "Raízes de Cura", det: "Sentir as raízes ativas e conectadas", texto: [
            { p: "Temos raízes, linhas invisíveis, tentáculos tremeluzentes pouco opacos que saem de nossas mãos, cabeça, garganta, coração, umbigo e centros sexuais." },
            { p: "Esses filamentos sutis, parte importante de nosso corpo invisível, são usados por curandeiros para penetrar em outros corpos, curar e manipular energia." },
            { p: "Quando as raízes estão ativas, sente-se uma leve vibração ou sensação de amortecimento na região: é um sinal de que aquele centro de energia está em funcionamento!" },
            { p: "O meio em que vivemos nos doa energia todo o tempo e preenche buracos e vazios do nosso corpo. Nós absorvemos continuamente a energia luminosa da natureza e do meio." },
            { p: "Saber recarregar-se intencionalmente de energia vital faz com que não precisemos absorver a energia do meio e de pessoas ao nosso redor! É comum tentarmos preencher esse esgotamento com compulsões físicas e mentais, ou apegos emocionais." },
            { sub: "Ative suas raízes agora!" },
            { p: "Aproxime suas mãos, sinta suas raízes dançando entre si como línguas de fogo que se entrelaçam! Brinque e dance com elas, ative o seu poder sutil." }
          ] } ] },
        { quando: "Noite", hora: "ao deitar", praticas: [
          { k: "noite", ilus: "meditacao-fita", traco: "tensoes", ico: "lua", nome: "Corpo relaxado, mente desperta", det: "Encontre o seu nevoeiro", audio: true, texto: [
            { p: "Ao deitar-se, inicie limpando sua mente e respire profundamente para relaxar todo o corpo. Foque sua atenção na respiração e na planta dos pés. Permita que os pensamentos fluam livremente, sem se prender a eles. Se uma ideia intrusiva surgir, simplesmente comande sua consciência:" },
            { afirm: "Vá além disso… Vá além disso…" },
            { p: "Continue com essa concentração e observe enquanto seu corpo se entrega ao sono gradualmente. Esse estado é conhecido como “Corpo relaxado, mente desperta”, no qual você atravessa o véu do sono conscientemente, mantendo sua consciência ativa e presente durante o processo de adormecimento." },
            { p: "Apenas observe e mantenha-se quieto: ao retirar a atenção dos sentidos físicos, os sentidos espirituais são ativados." },
            { p: "Estamos tão acostumados a nos lançar na inconsciência do sono que é preciso treino para cruzar a ponte entre os mundos!" },
            { p: "Durante o trajeto, é comum sentirmos vibrações inesperadas em nosso corpo, ouvirmos zumbidos, vozes (até chamando nosso nome!), e sentir movimentos involuntários! Todos esses sintomas denunciam que você está prestes a passar para o outro lado, pois já está percebendo os sinais da nova realidade! Nessa hora, o que se move é seu corpo espiritual; o que você ouve vem de seus ouvidos extrafísicos! Tudo a partir daí é uma descoberta!" },
            { p: "À medida que seu corpo se desliga, imagens começam a se formar em sua tela mental: são as Imagens Hipnagógicas, uma mistura de criações da sua mente. Conforme essas imagens surgem, estimule-as concentrando-se nelas para que se tornem mais vívidas e detalhadas." },
            { p: "Nesse estágio, em um mar de cores e formas, esteja atento para reconhecer quando uma esfera de luz começar a surgir e ocupar todo o seu campo visual. Esse é o seu limiar, o sinal de que está prestes a atravessar para o outro lado, como um nevoeiro luminoso que indica a entrada para uma nova realidade." },
            { p: "Concentre toda a sua atenção no nevoeiro e continue respirando profundamente até adormecer." },
            { pergunta: "Qual é a cor do seu nevoeiro?" }
          ] } ] }
      ]
    },
    {
      id: 1, cor: "#9d93c9", ilus: "figura-descendo", nome: "Primeiro Ato", sub: "Captar energia cósmica e desobstruir os centros de energia", gratis: true, capa: "noite",
      frase: "Eu sou consciência além deste corpo.",
      intro: "Para sutilizar nossa vibração vamos reativar as raízes receptoras do corpo! Essa prática não apenas ativa nossa memória, mas também nos aproxima gradualmente de nossos conselheiros espirituais.",
      momentos: [
        { quando: "Ao acordar", hora: "primeiros 5 min", praticas: [
          { k: "diario", ico: "pena", nome: "Diário dos 5 minutos", det: "Onde eu estava? O que eu sentia?", irDiario: true } ] },
        { quando: "Dia", hora: "ao amanhecer e no pôr do sol", praticas: [ RESP_DOURADA, TESTE ] },
        { quando: "Noite", hora: "ao deitar", praticas: [
          { k: "noite", ilus: "fita-estrela", ico: "lua", nome: "Preparando o ambiente", det: "A chuva no quarto e a afirmação", audio: true, texto: [
            { afirm: "Eu sou consciência além deste corpo.\nPor isso, posso perceber o que existe além do mundo dos sentidos.\nAbro-me para expandir, explorar e compreender as forças sutis que me atravessam,\ne para usá-las com sabedoria, para o meu bem e o de quem eu amo.\nChamo para perto de mim os guias e conselheiros de jornada\ncuja luz e sabedoria me conduzem com amor.\nQue nada menor do que a minha verdade me alcance nesta noite.\nEu sou consciência além deste corpo.", fonte: "Afirmação" },
            { passos: [
              "Imagine uma chuva caindo em seu quarto, limpando toda a atmosfera ao seu redor.",
              "Leia a afirmação acima e deite-se na posição supino (barriga para cima).",
              "Concentre-se na cor do seu nevoeiro e deixe-se envolver por ele.",
              "Repita mentalmente “Eu sou consciência além deste corpo” enquanto se entrega às marés do sono.",
              "Lembre-se de anotar todas as experiências que recordar."
            ] },
            { p: "A folha em branco a ser preenchida se torna uma janela pela qual se enxergam as infinitas possibilidades do seu Ser." }
          ] } ] }
      ]
    },
    {
      id: 2, cor: "#9dc1dc", ilus: "figura-cruz", nome: "Segundo Ato", sub: "Cair no sono consciente", capa: "fios",
      frase: "Ao cair no sono estou consciente.",
      momentos: [
        { quando: "04:00", hora: "despertar no meio da noite", praticas: [
          { k: "madrugada", ilus: "fita-estrela-lilas", ico: "espiral", nome: "Nirvana Shatakam", det: "Testa no joelho e o outro cômodo", audio: true, texto: [
            { p: "Sente-se na postura de lótus, com as pernas cruzadas, e curve o corpo para a frente, colocando a testa sobre o joelho esquerdo." },
            { p: "Respire profundamente e visualize a raiz do seu terceiro olho brilhando intensamente, enquanto a energia da Terra circula por todo o seu corpo, nutrindo-o e fortalecendo-o." },
            { p: "Repita algumas vezes e sente-se naturalmente." },
            { afirm: "Eu sou desprovido de dualidade\nMinha forma é sem forma\nEu existo em todos os lugares\nImpregnando todos os sentidos\nEu não sou nem apegado, nem livre, nem cativo,\nEu sou a fôrma da consciência\nEu sou o Espírito Livre.", fonte: "Nirvana Shatakam" }
          ].concat(OUTRO_COMODO) } ] },
        { quando: "Dia", hora: "ao longo do dia", praticas: [
          Object.assign({}, RESP_DOURADA, { det: "7 vezes" }), TESTE ] },
        { quando: "Noite", hora: "ao deitar", praticas: [
          { k: "noite", ilus: "figura-fio", ico: "lua", nome: "Estou consciente", det: "Afirmação em voz alta e o nevoeiro", audio: true, texto: [
            { p: "Deitado, afirme em voz alta e em seguida mentalmente:" },
            { afirm: "Ao cair no sono estou consciente." },
            { p: "Encontre o nevoeiro de passagem para o outro lado e estimule para que essa visão se mantenha em sua tela mental." },
            { p: "Quando estiver pegando no sono, não se deixe perder a consciência, e sim, acentue o impacto emocional das afirmações!" },
            { afirm: "Estou consciente." },
            { p: "A intensidade deste comando mostra seu forte comprometimento pessoal, gerando resultados poderosos." },
            { p: "Repita até adormecer." }
          ] } ] }
      ]
    },
    {
      id: 3, cor: "#e69a84", ilus: "montanha-fita", nome: "Terceiro Ato", sub: "A chama da vela e o Dragão", capa: "fios",
      frase: "Eu tenho clareza do plano astral.",
      momentos: [
        { quando: "04:00", hora: "despertar no meio da noite", praticas: [
          { k: "madrugada", ilus: "maos-chama", ico: "vela", nome: "Chama da vela", det: "Estou leve e posso flutuar até o teto", audio: true, texto: [
            { passos: [
              "Acenda uma vela e posicione-se confortavelmente.",
              "Concentre sua atenção na chama da vela, olhando-a fixamente.",
              "Ao inspirar, visualize a energia da chama penetrando seu terceiro olho, ativando suas raízes e envolvendo toda a sua coroa, descendo, então, por todo o seu corpo.",
              "Mantenha os olhos abertos, fixos na vela, enquanto traz toda a sua presença ao Agora."
            ] },
            { afirm: "Todo o meu Ser simplesmente está\nno mesmo instante em que se queima a chama desta vela.", fonte: "Afirmação" },
            { p: "Volte para a cama e deite-se normalmente, mentalizando que está caminhando em outro cômodo da casa com o seu corpo sutil." },
            { p: "Afirme:" },
            { afirm: "Estou leve e posso flutuar até o teto." }
          ] } ] },
        { quando: "Dia", hora: "ao longo do dia", praticas: [
          { k: "dragao", ilus: "figura-espiral", traco: "espiral-coroa", ico: "sol", nome: "Respiração do Dragão", det: "O Estado Vibracional",
            resp: { n: 7, segura: true, inspire: "Inspire: a energia do centro da Terra sobe pela coluna, pelo umbigo, coração e garganta, ilumina a pineal, o terceiro olho e a coroa, e sai em direção ao Sol central.", segurar: "Não respire ainda. Sinta o esvaziamento e a liberdade.", expire: "Expire: a energia desce pelo terceiro olho, olhos, coroa e pineal, pela coluna, ativando cada centro, até voltar à Terra.", fim: "Estado vibracional: todos os centros ativos, o corpo astral mais solto." },
            texto: [
              { p: "Ao inspirar, visualize a energia do centro da Terra subindo pela sua coluna vertebral, passando pelo Chakra Umbilical, pelo Chakra Cardíaco e pelo Chakra Laríngeo, iluminando os cristais da glândula Pineal na nuca, o Terceiro Olho e a coroa da cabeça, e saindo para fora do seu corpo em direção ao Sol central." },
              { p: "Não respire ainda. Segure por alguns instantes e sinta a sensação de esvaziamento e liberdade da respiração." },
              { p: "Ao expirar, permita que a energia desça, fazendo o caminho de volta pelo Terceiro Olho, pelos olhos, coroa, glândula Pineal, descendo então pela coluna vertebral e ativando todos os centros de energia ao longo do caminho, até retornar à Terra." },
              { p: "Essa prática é conhecida por criar o Estado Vibracional, ativando todos os centros energéticos do corpo e favorecendo a soltura do corpo astral, o que pode contribuir para experiências mais profundas durante a meditação ou práticas de viagem astral." }
            ] },
          TESTE ] },
        { quando: "Noite", hora: "ao deitar", praticas: [
          { k: "noite", ilus: "figura-salto", ico: "lua", nome: "O outro cômodo", det: "Caminhar com o corpo fluídico", audio: true, texto: [
            { p: "Deitado, afirme em voz alta e em seguida mentalmente:" },
            { afirm: "Eu tenho clareza do plano astral." },
            { p: "Visualize-se caminhando em outro cômodo da sua casa, manipulando objetos e interagindo com o ambiente ao seu redor." },
            { p: "Sinta cada passo que você dá, o toque dos seus pés no chão e o respirar tranquilo e fresco da noite." },
            { p: "Observe os detalhes desse novo ambiente, absorvendo cada aspecto visual e sensorial." },
            { p: "Concentre sua mente inteiramente nesse local e não pense jamais em seu corpo físico." },
            { p: "Permita-se ser transportado para o seu corpo fluídico através da intenção e mantenha essa concentração firmemente até cair no sono." }
          ] } ] }
      ]
    },
    {
      id: 4, cor: "#f3d58b", ilus: "fita-estrela-dourada", nome: "Quarto Ato", sub: "A luz azul e o banho da pineal", capa: "noite",
      frase: "Sou um ser multidimensional.",
      momentos: [
        { quando: "04:00", hora: "despertar no meio da noite", praticas: [
          { k: "madrugada", ilus: "figura-mergulho", ico: "luz", nome: "Que a paz possa inundar minha alma", det: "O círculo de luz azul", audio: true, texto: [
            { afirm: "Que a paz possa inundar minha alma\nDe dentro, da semente, a claridade se espalhe para as periferias do meu corpo\nQue o silêncio possa acalmar a respiração e a tornar profunda\nComo um túnel a ser seguido rumo à Verdade.\nQue eu ouça meu nome de criador\nQue de uma vez por todas possa entender\nQue aquilo que se apresentar a mim é todo e parte de mim\nQue eu esteja pronto e nada me passe pelas mãos\nQue nesta jornada os dragões não possam me alcançar\nE que as prisões não possam jamais me enclausurar\nQue eu me inunde da certeza de que eu sou a resposta.\nQue eu sinta o vibrante som do éter como lembrete do caminho de volta\nE me preencha com a chave que dele ressoa em meu ser.", fonte: "Afirmação" },
            { p: "Ao voltar para a cama, deite-se em posição supina." },
            { p: "Visualize uma luz azul brilhante sobre o seu chakra coronário. Essa luz desce suavemente pela sua testa, ativando seus olhos e o terceiro olho, iluminando a glândula pineal e descendo pela garganta, coração, estômago, umbigo, órgãos sexuais e espalhando-se por suas pernas e pés." },
            { p: "Conforme a luz alcança seus pés, ela inicia o caminho de volta, subindo novamente pelo seu corpo e repetindo o processo." },
            { p: "Visualize esse círculo de luz até adormecer, procurando prestar atenção ao que aparecer no nevoeiro." }
          ] } ] },
        { quando: "Dia", hora: "ao acordar e no pôr do sol", praticas: [
          { k: "maos", ilus: "estrela-sol", ico: "sol", nome: "Mãos para o céu", det: "Captar a energia solar", texto: [
            { p: "Com as mãos esticadas na direção do céu, concentre-se em ativar as raízes das suas mãos e capte a energia solar com a intenção de preencher todos os seus corpos, tanto o físico quanto os extrafísicos." },
            { p: "Ao inspirar e expirar lentamente, permita-se sentir a sensação de ativação conforme a energia solar flui para dentro de você." },
            { p: "Visualize essa energia fluindo através de cada célula do seu corpo, nutrindo-o e fortalecendo-o em todos os níveis: físico, mental, emocional e espiritual. Essa prática pode trazer uma sensação de revitalização e conexão com a energia vital ao seu redor." }
          ] },
          TESTE,
          { k: "banho", ilus: "rio", ico: "agua", nome: "Durante o banho", det: "A água entra pela nuca", texto: [
            { passos: [
              "Posicione-se de costas para o chuveiro, permitindo que a água caia suavemente na região da nuca.",
              "Visualize que a água entra pela nuca e sai pelo seu terceiro olho.",
              "Concentre-se na ideia de que essa água está realizando uma limpeza profunda e desobstrução da sua glândula pineal, removendo qualquer bloqueio ou impureza que possa estar presente."
            ] },
            { p: "Essa prática combina a ação física do banho com a visualização e a intenção de limpeza energética, promovendo uma sensação de renovação e clareza mental." }
          ] } ] },
        { quando: "Noite", hora: "ao deitar", praticas: [
          { k: "noite", ilus: "figura-dourada", ico: "lua", nome: "Luz dourada", det: "Sou um ser multidimensional", audio: true, texto: [
            { p: "Deite-se na posição supina e respire lentamente, permitindo que o frescor da noite penetre suavemente seus pulmões. Conforme você inspira, visualize uma luz dourada irradiando de dentro de você, preenchendo todo o seu corpo através do ar que entra." },
            { p: "Sinta essa luz dourada nutrindo cada célula, trazendo uma sensação de calor e energia revitalizante. Deixe-se envolver por essa luz, permitindo que ela promova um estado de relaxamento profundo e renovação interior." },
            { p: "Repita mentalmente até dormir:" },
            { afirm: "Sou um ser multidimensional." }
          ] } ] }
      ]
    },
    {
      id: 5, cor: "#8cc6c7", ilus: "estrela-cadente", nome: "Quinto Ato", sub: "Sair do corpo", capa: "fios",
      frase: "Agora eu me separo facilmente do meu corpo e estou consciente.",
      momentos: [
        { quando: "04:00", hora: "despertar no meio da noite", praticas: [
          { k: "madrugada", ilus: "figura-voo", traco: "corpo-de-luz", ico: "espiral", nome: "Hermes Trismegisto", det: "Espiral da coroa e os comandos", audio: true, texto: [
            { afirm: "Sai para fora do corpo,\nAtravessa o tempo,\nTorna-te eternidade;\nReconhece-te por imortal,\nCapaz de tudo conceber\nE tudo fazer;\nSê mais alto do que toda altura,\nMais profundo do que toda profundeza;\nSê ao mesmo tempo\nTodas as partes do mundo;\nReúne num abraço todos os ciclos,\nTodas as medidas e todas\nAs extensões e, então,\nPoderás compreender a verdadeira eternidade: Deus", fonte: "Hermes Trismegisto" },
            { p: "Sente-se em um local confortável e concentre-se no seu chakra coronário, no topo da cabeça. Enquanto expira e inspira suavemente, visualize a energia nesse chakra movimentando-se em espiral, começando a partir do topo da sua cabeça." },
            { p: "A energia da sua coroa segue essa espiral ascendente, subindo em direção ao infinito e se perdendo na vastidão do universo. Conforme você continua a respirar de forma consciente, sinta essa energia expandindo-se e conectando-se com as energias mais elevadas." },
            { sub: "Repita esse movimento em espiral sete vezes." },
            { p: "Essa prática pode promover uma sensação de elevação espiritual e conexão com planos superiores de consciência." },
            { p: "Volte para a cama e deite-se confortavelmente em posição supina. Permita-se relaxar profundamente e visualize todo o seu corpo sendo preenchido por uma luz intensa que vem de dentro para fora." },
            { p: "Concentre-se em afastar-se do seu corpo físico enquanto mantém essa visualização e sensação de luminosidade. Não pense mais no seu corpo físico e evite mover-se." },
            { p: "Com convicção e firmeza, dê o comando mental para se desligar do corpo físico e explorar outras dimensões ou planos de existência. Mantenha uma atitude positiva e experimente vários comandos:" },
            { lista: ["“Agora vou até a porta”", "“Agora flutuo até o teto”", "“Agora estou no meu corpo sutil”", "“Agora eu me separo facilmente do meu corpo e estou consciente”"] },
            { p: "Anote os resultados." }
          ] } ] },
        { quando: "Dia", hora: "ao acordar e no pôr do sol", praticas: [
          { k: "pilar", ilus: "figura-estrela", traco: "corpo-eletrico", ico: "luz", nome: "Pilar de luz", det: "Azul claro e pulsante, várias vezes ao dia", texto: [
            { p: "Em pé ao ar livre, visualize um pilar de luz descendo dos céus e penetrando todos os seus corpos, preenchendo-os com uma luz pulsante de cor azul clara. Sinta essa luz fluindo e expandindo-se por todo o seu ser." },
            { p: "Respire profundamente e aguarde a ativação dos seus chakras (sensações de formigamento) enquanto permanece conectado com essa luz pulsante. Permita que a energia circule livremente, ativando e equilibrando cada um dos seus centros energéticos ao longo do corpo. Essa prática pode trazer uma sensação de clareza, harmonia e vitalidade para o seu ser." },
            { p: "(Pode ser feita várias vezes ao dia.)" }
          ] },
          TESTE ] },
        { quando: "Noite", hora: "ao deitar", praticas: [
          { k: "noite", ilus: "figura-deitada", ico: "lua", nome: "O som do Om", det: "Até o zumbido do plano astral", audio: true, texto: [
            { passos: [
              "Deite-se com o corpo totalmente relaxado e respire profundamente.",
              "Comece a entoar mentalmente o mantra “Om” em um ritmo confortável para você.",
              "Concentre-se em sutilizar sua percepção, permitindo que o som do mantra se propague e envolva todo o seu ser.",
              "Afunde-se no som, mergulhando profundamente na frequência sonora do “Om”.",
              "À medida que você continua entoando o mantra, permita-se entrar cada vez mais na vibração do som até que você comece a perceber o zumbido característico da vibração do plano astral.",
              "Esqueça completamente o seu corpo físico e concentre-se firmemente em permanecer dentro do som do “Om”, mantendo-se conectado com essa frequência vibracional mais elevada."
            ] },
            { p: "Os Maias tinham práticas espirituais que envolviam o uso de sons e vibrações para acessar estados de consciência expandida e realizar viagens astrais. O cantar das cigarras era um dos elementos naturais que eles consideravam propícios para essa finalidade. Ao se concentrarem no som das cigarras e mergulharem profundamente na vibração desse som, transcendiam a realidade física e exploravam outros planos de existência." },
            { cita: "A alma deve alargar-se sobre abismos cosmogônicos enquanto o corpo executa seus deveres diários!", autor: "Sri Yukteswar" }
          ] } ] }
      ]
    }
  ];

  const ALVOS = [
    { curto: "O Everest", texto: "Quero ir para o Everest, aonde a vista só alcança neve!" },
    { curto: "Me curar", texto: "Quero me curar." },
    { curto: "O Egito antigo", texto: "Quero conhecer o antigo Egito, andar pelas pirâmides na época em que o império era vivo! Descobrir seus segredos! Meus pés caminham pelas areias amareladas do deserto, ao fundo vejo o sol baixo, a civilização em seu auge!" },
    { curto: "A Lua", texto: "Ir para a Lua, caminhar em seu solo, explorar o que tem em sua superfície! Qual é a vista da Lua? Algum ser vive lá? Como é o espaço? Como sinto meu corpo? É frio?" },
    { curto: "Os Sadhus dos Himalaias", texto: "Conhecer os Sadhus que meditam nos Himalaias, trazer um ensinamento deles." },
    { curto: "Sirius", texto: "Viajar pra Sirius, conhecer outra galáxia!" },
    { curto: "O fundo do mar", texto: "Quero nadar com os grandes animais do fundo do mar. Baleias e criaturas marinhas desconhecidas que só vivem lá, bem no fundo negro do oceano!" }
  ];

  // Viagens guiadas: práticas da noite que valem em qualquer ato (escritas para o app, a Vivian revisa).
  const VIAGENS = [
    {
      k: "rio", ilus: "estrela-cadente", traco: "espiral-galaxia", ico: "agua", nome: "O Rio dos Espíritos", det: "Lançar-se na Via Láctea", audio: true,
      texto: [
        { p: "Muitos povos viram na Via Láctea um rio. Os incas a chamavam de Mayu, o rio do céu. Os tupis, de Tapi’i rapé, o caminho da anta. Para os lakota, é o caminho por onde os espíritos viajam. Os egípcios viam nela o corpo estrelado de Nut, e um Nilo no céu." },
        { sub: "Antes de começar" }, { p: "Deite de barriga para cima, num quarto escuro. Esta viagem é para a beira do sono: você vai adormecer dentro dela." },
        { passos: [
          "Respire devagar: inspire contando até quatro, expire contando até seis. Faça isso dez vezes.",
          "A cada expiração, o corpo afunda na cama e você fica mais leve.",
          "Imagine o teto se abrindo. Acima de você, o céu da noite, e atravessando o céu inteiro, a faixa branca da Via Láctea.",
          "Suba devagar até a margem desse rio de estrelas. Sinta a luz fria no rosto e escute o som dele, como água correndo longe.",
          "Agora lance-se. Mergulhe no rio e deixe a correnteza te levar.",
          "Diga por dentro: “Leve-me aonde eu preciso ir.” Não escolha o destino. O rio sabe.",
          "Observe onde a correnteza te deixa. Fique nessa imagem e deixe o sono vir ali."
        ] },
        { afirm: "Eu me entrego ao Rio dos Espíritos e desperto do outro lado." },
        { p: "Amanhã cedo, antes de abrir os olhos, pergunte: onde o rio me deixou?" }
      ]
    },
    {
      k: "sair", ilus: "salto-figura", ico: "espiral", nome: "Sentir o corpo sair", det: "Respirar, relaxar e se soltar", audio: true,
      texto: [
        { p: "Esta prática reúne o que os grandes viajantes ensinam, como William Buhlman e Robert Monroe: o corpo dorme, a consciência fica, e a intenção firme leva para fora." },
        { sub: "Respirar e relaxar" }, { passos: [
          "Deite de barriga para cima. Inspire em quatro tempos, expire em seis. Dez vezes.",
          "Solte o corpo dos pés à cabeça: pés, pernas, quadril, barriga, peito, ombros, braços, pescoço, rosto. Ele fica pesado, como areia molhada.",
          "Não se mexa mais. Se coçar, deixe passar."
        ] },
        { sub: "Tirar a atenção do corpo" }, { passos: [
          "Sinta o corpo inteiro como um bloco pesado, lá embaixo.",
          "Agora leve a atenção um pouco acima do peito, como se você estivesse alguns centímetros acima da pele.",
          "Perceba o espaço ao redor: acima da cabeça, dos lados, atrás. Perceba mais o espaço do que o corpo."
        ] },
        { afirm: "Agora eu estou fora do corpo." },
        { sub: "Se as vibrações vierem" }, { passos: [
          "Formigamento, zumbido, ondas elétricas, sensação de cair ou de crescer: é a ponte. Não tenha medo e não ajude. Só observe e deixe crescer.",
          "Quando as ondas estiverem fortes, diga por dentro: “Agora!”",
          "Saia de um só jeito, sem pensar muito: role para o lado, levante como névoa ou flutue até o teto.",
          "Fora do corpo, afaste-se do quarto. Se a visão estiver turva, peça: “Clareza, agora!”"
        ] },
        { p: "Se não sair, tudo bem. Adormeça repetindo a afirmação. Muitas vezes a saída vem mais tarde, de madrugada." }
      ]
    }
  ];

  // Uma técnica antes de dormir para cada noite, das mais simples às mais avançadas (avança com os dias da jornada). Escritas para o app, a Vivian revisa.
  const NOITE = [
    { nome: "A frase que abre a porta", afirm: ["Esta noite eu percebo que estou sonhando.", "Quando algo estranho acontecer, eu desperto."], de: "Stephen LaBerge", ilus: "estrela-cadente",
      texto: "Pesquisadores do sono mostraram que uma intenção dita antes de dormir aumenta as chances de perceber o sonho por dentro. A mente leva para a noite a última coisa em que você pensou com convicção.",
      passos: ["Deite e respire devagar algumas vezes.", "Lembre um sonho recente, ou imagine um, e veja a si mesmo percebendo dentro dele que é sonho.", "Repita devagar, com convicção: “Na próxima vez que eu estiver sonhando, vou perceber que estou sonhando.”", "Adormeça com essa frase, sem pensar em mais nada."] },
    { nome: "Procure as suas mãos", afirm: ["Quando eu vir as minhas mãos, eu desperto.", "Consciência, agora!"], de: "Dom Juan, nos livros de Castaneda", ilus: "maos-chama",
      texto: "Dom Juan ensinava que encontrar as próprias mãos dentro do sonho acende a atenção lá dentro.",
      passos: ["Antes de deitar, olhe as suas mãos por um minuto, com calma.", "Diga: “Hoje eu vou ver as minhas mãos no sonho.”", "Ao fechar os olhos, imagine as mãos na sua frente até adormecer."] },
    { nome: "O sankalpa", afirm: ["Eu sou consciência além deste corpo.", "Ao cair no sono, eu permaneço consciente.", "Eu sou mais do que o meu corpo físico."], de: "Yoga Nidra", ilus: "figura-deitada",
      texto: "Uma intenção curta, plantada no limiar do sono, entra fundo, como uma semente.",
      passos: ["Escolha uma frase curta, no presente. Por exemplo: “Eu desperto dentro dos meus sonhos.”", "Repita três vezes ao deitar, com convicção.", "Use sempre a mesma, noite após noite."] },
    { nome: "Recapitular o dia", afirm: ["Esta noite eu me lembro de tudo."], de: "Dom Juan, nos livros de Castaneda", ilus: "figura-fio",
      texto: "Lembrar o dia de trás para frente solta a energia presa nas cenas e treina a memória para guardar os sonhos.",
      passos: ["Deitado, volte no tempo: o que fez logo antes de deitar? E antes disso?", "Vá cena por cena até a manhã, sem julgar.", "Se uma cena pesar, respire fundo e deixe ir."] },
    { nome: "A caixa das preocupações", afirm: ["Só o que é da luz me alcança nesta noite."], de: "Robert Monroe", ilus: "figura-cruz",
      texto: "Pensamentos do dia prendem a consciência ao corpo. Monroe ensinava a guardá-los antes de atravessar.",
      passos: ["Imagine uma caixa ao lado da cama.", "Coloque dentro dela, uma a uma, as preocupações do dia.", "Feche a tampa. Elas estarão lá amanhã. Agora você está livre para ir."] },
    { nome: "So Ham", afirm: ["O meu corpo dorme; eu permaneço desperto."], de: "tradição do yoga", ilus: "espiral-figura",
      texto: "So Ham quer dizer “eu sou Aquilo”. A própria respiração já repete esse mantra, e você só escuta.",
      passos: ["Inspire ouvindo por dentro “So”.", "Expire ouvindo “Ham”.", "Não controle o ar. Se se perder, volte ao próximo So, até adormecer."] },
    { nome: "O som do AUM", afirm: ["Eu sou luz, e a luz não dorme."], de: "Mandukya Upanishad", ilus: "estrela-sol",
      texto: "O A é a vigília, o U é o sonho, o M é o sono profundo. O silêncio depois do M é a consciência que fica acordada através dos três.",
      passos: ["Sentado ou deitado, entoe o AUM três vezes, bem devagar.", "Sinta o A no peito, o U na garganta e o M na cabeça.", "Depois fique no silêncio que vem em seguida, até o sono chegar."] },
    { nome: "Pedir um sonho", afirm: ["Eu sou um espírito que atravessa os mundos."], de: "os templos de incubação", ilus: "morro-figuras",
      texto: "Por milhares de anos, quem buscava uma resposta dormia no templo e pedia um sonho. A pergunta clara abre o caminho.",
      passos: ["Escreva uma pergunta curta no diário.", "Leia em voz baixa antes de deitar.", "Peça: “Que a resposta venha em sonho, e que eu esteja desperto para recebê-la.”"] },
    { nome: "A luz na garganta", afirm: ["Eu sou um ser multidimensional."], de: "yoga dos sonhos tibetana", ilus: "fita-estrela-lilas",
      texto: "Na yoga dos sonhos ensinada por Tenzin Wangyal Rinpoche, a garganta é o centro do sonho.",
      passos: ["Leve a atenção à garganta.", "Imagine ali uma pequena luz vermelha, quente e calma.", "Não force. Deixe a luz ficar enquanto o corpo adormece."] },
    { nome: "Contar até o sonho", afirm: ["Clareza, agora!"], de: "Stephen LaBerge", ilus: "fita-estrela",
      texto: "Contar devagar mantém a mente acesa enquanto o corpo adormece. Em algum número, o sonho começa e você percebe.",
      passos: ["Deitado, comece a contar em silêncio: “um, estou sonhando; dois, estou sonhando…”.", "Conte devagar, uma vez a cada respiração.", "Se perder a conta, recomece de onde lembrar, sem se cobrar.", "Quando as imagens aparecerem, pare de contar e só observe."] },
    { nome: "Observar as imagens", afirm: ["Eu atravesso o limiar e volto lembrando de tudo."], de: "técnica do sonho lúcido induzido desperto", ilus: "fitas",
      texto: "Ao adormecer surgem cores, rostos e paisagens. Quem observa sem se agarrar entra no sonho acordado.",
      passos: ["Deite de barriga para cima e fique imóvel.", "Observe o escuro atrás dos olhos, sem esperar nada.", "Quando as imagens vierem, só olhe. Deixe que fiquem mais nítidas até virar cena."] },
    { nome: "O alvo de três objetos", afirm: ["Agora eu estou fora do corpo.", "Eu viajo em segurança e volto inteiro ao meu corpo."], de: "William Buhlman", ilus: "fita-estrela-dourada",
      texto: "A intenção clara é o que mais leva para fora do corpo. Um lugar conhecido, com detalhes, vira um alvo para a consciência.",
      passos: ["Escolha um cômodo da casa e três objetos dele.", "Ao deitar, sinta-se lá, tocando cada um: a textura, a temperatura, o peso.", "Diga por dentro: “Agora eu estou lá.” e adormeça nessa cena."] },
    // Textos escritos para o app, com base nos livros de Castaneda e na tradição da Yoga Nidra (a Vivian revisa)
    { nome: "A recapitulação com a respiração", afirm: ["Eu recolho a minha energia de volta.", "Eu solto o que não é meu."], de: "Dom Juan, nos livros de Castaneda", ilus: "figura-espiral",
      texto: "Dom Juan ensinava que cada cena vivida deixa presa uma parte da nossa energia. Relembrar a cena com a respiração devolve essa energia, e é com ela que se sonha.",
      passos: ["Deitado, escolha uma cena do dia, ou uma antiga, que ainda mexa com você.", "Reviva a cena com detalhes: o lugar, as pessoas, o que você sentiu.", "Vire a cabeça devagar para um lado, inspirando: puxe de volta a energia que deixou ali.", "Vire para o outro lado, expirando: solte o que recebeu dos outros naquela cena.", "Repita até a cena ficar leve. Depois, adormeça em silêncio."] },
    { nome: "Os portões do sonhar", afirm: ["Eu firmo a minha atenção dentro do sonho.", "Eu passo de um sonho para outro, desperto."], de: "Dom Juan, nos livros de Castaneda", ilus: "figura-cruz",
      texto: "Nos livros de Castaneda, a arte de sonhar tem portões. O primeiro é perceber que se está sonhando e firmar a atenção ali dentro. O segundo é passar de um sonho para outro sem acordar.",
      passos: ["Ao deitar, decida: esta noite eu vou encontrar o primeiro portão.", "No sonho, olhe para as suas mãos ou para um objeto. Quando a cena começar a mudar, volte a olhar para ele.", "Olhe rápido para algo e volte às mãos, várias vezes: assim a atenção fica firme e o sonho não se desfaz.", "Quando já firmar a atenção com facilidade, tente o segundo portão: ao sentir o sonho acabando, pense num outro lugar e deixe-se levar até ele, sem acordar."] },
    { nome: "Yoga Nidra completa", afirm: ["Eu desperto dentro dos meus sonhos."], de: "Yoga Nidra", ilus: "figura-deitada",
      texto: "O sono yóguico: o corpo dorme, a consciência fica. É a prática tradicional da fronteira entre a vigília e o sono, feita deitado e de olhos fechados, sem se mexer.",
      passos: ["Deite de barriga para cima, braços ao lado do corpo, palmas para cima. Diga a si mesmo: eu não vou dormir, vou ficar consciente.", "O sankalpa: repita três vezes a sua frase de intenção, curta e no presente.", "A rotação: leve a atenção, sem mexer, por cada parte do corpo: o polegar direito, o indicador, o médio, o anelar, o mínimo, a palma, o pulso… até percorrer o corpo inteiro, lado direito e depois o esquerdo.", "A respiração: conte de 27 até 1, uma respiração por número. Se perder a conta, recomece.", "As sensações opostas: sinta o corpo pesado como pedra; depois leve como uma pena. Frio, depois calor.", "As imagens: veja, uma após a outra, um céu estrelado, um rio, uma vela acesa, o mar à noite.", "Repita o sankalpa três vezes e deixe o sono vir, ainda observando."] },
    // Mais LaBerge e Buhlman (textos escritos para o app; a Vivian revisa)
    { nome: "Acordar e voltar a dormir", afirm: ["Ao voltar a dormir, eu percebo que estou sonhando.", "Esta madrugada eu desperto dentro do sonho."], de: "Stephen LaBerge", ilus: "lua",
      texto: "Os sonhos mais longos e vivos vêm na segunda metade da noite. Acordar no meio dela, ficar um pouco acordado e voltar a dormir com a intenção firme é a combinação que mais dá resultado nos estudos do sono.",
      passos: ["Programe o despertar para umas 5 horas depois de deitar.", "Ao acordar, levante-se, acenda uma luz fraca e fique acordado de 20 a 30 minutos. Leia sobre sonho lúcido ou relembre o último sonho.", "Volte para a cama e use a frase que abre a porta: lembre o sonho e veja a si mesmo percebendo que é sonho.", "Adormeça com a intenção: “Na próxima vez que eu estiver sonhando, vou perceber que estou sonhando.”"] },
    { nome: "Girar no sonho", afirm: ["Quando o sonho se desfizer, eu giro e continuo.", "Eu permaneço dentro do sonho."], de: "Stephen LaBerge", ilus: "espiral-figura",
      texto: "No sonho lúcido, a cena às vezes começa a se desfazer: as cores somem, tudo fica fraco, o corpo físico começa a puxar. Girar o corpo do sonho, como um pião, costuma segurar o sonho ou levar a um sonho novo, ainda lúcido.",
      passos: ["Ao deitar, ensaie mentalmente: no sonho, quando a cena começar a sumir, eu giro.", "No sonho, se perceber que ele está ficando fraco, abra os braços e gire o corpo com vontade, sentindo o movimento.", "Enquanto gira, diga: “Quando eu parar, ainda estarei sonhando.”", "Ao parar, olhe em volta: se o cenário mudou, continue lúcido no novo sonho. Esfregar as mãos também ajuda a firmar."] },
    { nome: "Agora eu estou fora do corpo", afirm: ["Agora eu estou fora do corpo.", "Eu sou consciência, livre do corpo."], de: "William Buhlman", ilus: "salto-figura",
      texto: "Para William Buhlman, a afirmação dita na beira do sono, com o sentimento de quem já está fora, é o que mais aproxima a consciência da saída. A mente obedece ao que você afirma com convicção quando o corpo adormece.",
      passos: ["Deite e relaxe o corpo inteiro, respirando devagar.", "Quando sentir que está quase dormindo, comece a afirmar, mentalmente e com força: “Agora eu estou fora do corpo.”", "Não apenas repita: sinta como se já estivesse fora, leve, flutuando no quarto.", "Continue até adormecer. Se acordar de madrugada, recomece a afirmação: é quando ela funciona melhor."] },
    { nome: "O alvo emocional", afirm: ["Eu quero estar lá, agora.", "O que eu amo me chama para fora."], de: "William Buhlman", ilus: "figura-voo",
      texto: "Buhlman ensina que a emoção é o que move a consciência para fora do corpo. Um alvo que você deseja de verdade, um lugar ou uma pessoa querida, puxa mais do que qualquer técnica fria.",
      passos: ["Escolha um alvo que mexa com você: um lugar que ama ou alguém de quem sente saudade.", "Ao deitar, lembre desse alvo com todos os detalhes e deixe crescer a vontade de estar lá.", "Afirme com emoção: “Eu quero estar com (o alvo), agora.”", "Adormeça sentindo essa vontade, como quem já está a caminho."] },
    { nome: "Os sons e as vibrações", afirm: ["Eu deixo as vibrações crescerem.", "Eu fico quieto e saio."], de: "William Buhlman", ilus: "figura-estrela",
      texto: "Na beira do sono podem vir zumbidos, chiados, sons de vento e vibrações pelo corpo. Muitos acordam assustados nessa hora, mas é justamente o sinal de que a saída está perto.",
      passos: ["Ao deitar, decida antes: se vierem sons ou vibrações, eu fico quieto.", "Quando vierem, não abra os olhos e não mexa o corpo físico.", "Deixe as vibrações crescerem, como uma onda que sobe. Respire devagar e diga: “Mais forte.”", "Quando estiverem intensas, imagine que rola para o lado ou que flutua até o teto, sem usar os músculos."] },
    // Robert Monroe (textos escritos para o app; a Vivian revisa)
    { nome: "Corpo dormindo, mente acordada", som: "binaural", afirm: ["O meu corpo dorme e eu fico acordado.", "Eu sou mais do que o meu corpo físico."], de: "Robert Monroe", ilus: "figura-deitada",
      texto: "Monroe chamou de Foco 10 o estado em que o corpo adormece e a mente continua alerta. É a base de todas as saídas: sem ele, a consciência dorme junto com o corpo.",
      passos: ["Deite de barriga para cima e relaxe parte por parte, dos pés até a cabeça.", "Mantenha um ponto de atenção leve, por exemplo a respiração ou um ponto escuro à frente dos olhos fechados.", "Deixe o corpo ficar pesado e dormente, até não sentir mais onde estão as mãos. Não se mexa.", "Se a mente começar a cochilar, aprofunde a atenção sem abrir os olhos. Fique nesse limiar o máximo que puder."] },
    { nome: "A ressonância", afirm: ["Eu entro na vibração do som.", "O som solta o meu corpo."], de: "Robert Monroe", ilus: "figura-estrela",
      texto: "Antes de praticar, Monroe usava um canto grave e longo para fazer o corpo vibrar por dentro. A vibração do som prepara o corpo para a vibração da saída.",
      passos: ["Deitado, inspire fundo pelo nariz.", "Solte o ar num som grave e longo, com a boca quase fechada, como um “ommm” baixinho.", "Sinta onde o corpo vibra: o peito, a garganta, a cabeça. Imagine essa vibração se espalhando pelo corpo inteiro.", "Faça de cinco a dez vezes. Depois fique em silêncio, ouvindo o zumbido que continua por dentro."] },
    { nome: "Rolar para fora", afirm: ["Eu rolo para fora do corpo.", "Agora eu estou fora do corpo."], de: "Robert Monroe", ilus: "salto-figura",
      texto: "Quando o corpo já dorme e as vibrações chegam, Monroe ensinava a sair do jeito mais simples: rolar de lado, como quem vira na cama, mas sem mexer nenhum músculo.",
      passos: ["Chegue ao estado de corpo dormindo e mente acordada.", "Quando sentir vibrações ou o corpo muito pesado, não se mexa.", "Imagine e sinta, com toda a atenção, que está virando de lado na cama, devagar.", "Continue o giro até sentir que deslizou para fora, como uma folha que escorrega de dentro de um livro. Se o corpo físico se mexer, relaxe e tente de novo quando a sensação voltar."] },
    { nome: "Elevar-se", afirm: ["Eu sou leve e subo.", "Eu flutuo até o teto."], de: "Robert Monroe", ilus: "figura-voo",
      texto: "A outra saída que Monroe descreve é a elevação: em vez de rolar, sentir-se leve como um balão e subir devagar, até flutuar acima do corpo.",
      passos: ["Com o corpo dormindo e a mente acordada, imóvel, pense em como seria flutuar.", "Sinta o corpo ficando leve, cada vez mais leve, como se perdesse o peso.", "Imagine que sobe devagar, alguns centímetros, depois mais, até o teto.", "Quando se sentir acima, não olhe logo para o corpo: olhe para o teto, para a janela, e se afaste."] },
    { nome: "A mão que atravessa", afirm: ["A minha mão sutil se solta.", "Eu sinto o meu corpo de luz."], de: "Robert Monroe", ilus: "maos-chama",
      texto: "Monroe começou a perceber o corpo sutil pelas mãos: sentia a mão atravessar o lençol, o chão. Esse pequeno desprendimento é o primeiro sinal de que a separação é possível.",
      passos: ["Com o corpo dormindo e a mente acordada, nas vibrações ou com o corpo muito pesado, concentre-se numa das mãos.", "Sem mexer a mão física, sinta a mão sutil se erguendo dela, ou descendo e atravessando o colchão.", "Deixe os dedos explorarem: o que eles tocam? Frio, tecido, chão?", "Se a mão sair, tente estender o braço inteiro e, depois, rolar ou se elevar."] },
    // As tradições do sonho (Egito, Grécia, povos indígenas do Brasil, aborígenes, sufis): só o que as fontes documentam
    {"nome": "Escrever o pedido do sonho", "afirm": ["Que a resposta venha em sonho."], "de": "os papiros greco-egípcios e o sacerdote Hor, em Saqqara", "ilus": "olho", "texto": "Nos papiros mágicos greco-egípcios (séculos IV e V), quem queria um sonho escrevia o pedido antes de dormir, diante de uma lâmpada, e ia deitar sem falar com mais ninguém. Em Saqqara, no século II a.C., o sacerdote Hor pedia sonhos a Thoth, a Ísis e a Imhotep, às vezes em nome de outras pessoas.", "passos": ["Com uma luz suave acesa, escreva numa linha só o que você quer ver ou entender no sonho.", "Leia o pedido em voz baixa, uma vez.", "Apague a luz e não fale mais com ninguém até adormecer, como o papiro pedia.", "Ao acordar, escreva o que sonhou ao lado do pedido."]},
    {"nome": "A mão guardada por Bes", "afirm": ["Bes guarda o meu sono."], "de": "o pedido de sonho a Bes, num papiro greco-egípcio", "ilus": "maos-chama", "texto": "Bes, o pequeno deus que protegia a casa e quem dorme, era entalhado nos apoios de cabeça egípcios; no de Tutankhamon, o rosto dele aparece dos dois lados. Num papiro greco-egípcio de pedido de sonho, a pessoa desenhava Bes na mão esquerda, envolvia a mão num pano escuro e ia dormir em silêncio.", "passos": ["Com o dedo, sem tinta, trace um pequeno sinal de Bes na palma da mão esquerda.", "Envolva a mão num lenço escuro, ou apenas feche a mão.", "Peça proteção para o sono e diga a sua intenção para a noite.", "Durma sem conversar com mais ninguém."]},
    {"nome": "Os quatro cantos do quarto", "afirm": ["Os quatro cantos guardam o meu sono."], "de": "um feitiço do Reino Novo e o papiro Chester Beatty III", "ilus": "estrela-sol", "texto": "Contra os pesadelos, um feitiço do Reino Novo (o óstraco Gardiner 363) mandava pôr quatro serpentes de barro com fogo na boca, uma em cada canto do quarto onde se dorme. O papiro dos sonhos Chester Beatty III ensinava a quem acordava de um sonho ruim a recitar uma fórmula e esfregar o rosto para afastar o sonho.", "passos": ["Antes de deitar, olhe para cada canto do quarto e imagine ali uma pequena chama guardiã.", "Diga uma frase curta de proteção para a noite.", "Se acordar de um pesadelo, passe as mãos no rosto ou lave-o e diga: “afasto este sonho”.", "Volte a dormir com uma intenção nova."]},
    {"nome": "Entrar puro", "afirm": ["Eu entro puro na noite."], "de": "os santuários de Asclépio, na Grécia antiga", "ilus": "rio", "texto": "Quem ia dormir no santuário de Asclépio se purificava antes. Segundo Porfírio, na entrada do templo de Epidauro havia um epigrama: puro deve ser quem entra no templo perfumado, e pureza é pensar coisas santas.", "passos": ["Tome um banho, ou lave o rosto e as mãos, com a intenção de deixar o dia para trás.", "Vista uma roupa limpa e simples.", "Por um minuto, solte a raiva e a pressa e escolha um pensamento bom: gratidão ou uma intenção clara.", "Deite já em silêncio."]},
    {"nome": "A oferenda à Memória", "afirm": ["Ao acordar, eu me lembro."], "de": "uma lei sagrada do Pireu, século IV a.C.", "ilus": "estrela-dourada", "texto": "Antes de dormir no templo de Asclépio, no Pireu, uma lei sagrada mandava oferecer bolos a vários deuses, e bolos e favos de mel a Mnemósine, a Memória. Estudiosos de hoje pensam que era para guardar a lembrança do sonho; as fontes antigas não dizem o motivo.", "passos": ["Antes de deitar, diga em voz baixa o seu pedido: uma pergunta ou uma intenção, curta e clara.", "Faça um pequeno gesto à Memória: uma gota de mel, ou só uma frase de agradecimento.", "Repita a intenção de lembrar do sonho ao acordar."]},
    {"nome": "O diário de Aristides", "afirm": ["Eu anoto o que a noite me mostra."], "de": "Élio Aristides, no santuário de Asclépio em Pérgamo (século II)", "ilus": "estrela-lilas", "texto": "Élio Aristides viveu cerca de dois anos no santuário de Asclépio em Pérgamo. Segundo ele, o próprio deus mandou em sonho que anotasse os sonhos; depois escreveu os Discursos Sagrados. As pedras de Epidauro também guardavam, para cada pessoa, quem era, o que pediu, o que sonhou e o que aconteceu.", "passos": ["Deixe o caderno ou o diário do Osirion ao lado da cama.", "Ao acordar, antes de levantar, anote tudo, até os fragmentos.", "Use o jeito das pedras de Epidauro: quem eu sou hoje, o que pedi, o que vi e o que mudou ao acordar.", "Com o tempo, releia e repare no que se repete."]},
    {"nome": "Contar o sonho ao amanhecer", "afirm": ["O meu sonho ganha vida quando é contado."], "de": "inspirado nos Guarani e nos Yanomami", "ilus": "fitas", "texto": "Na aldeia Ocoy, no Paraná, os Ava-Guarani conversam sobre os sonhos da noite logo cedo, antes do sol, enquanto preparam o fogo e o chimarrão. Entre os Mbya, os sonhos são contados e pensados junto, com os mais velhos. A antropóloga Hanna Limulja ouviu dos Yanomami que o sonho só existe porque é partilhado. Não é um rito deles: é um gesto inspirado no que eles contam.", "passos": ["Ao acordar, antes de pegar o celular, lembre a cena principal do sonho.", "Conte em voz alta para alguém da casa, ou grave no diário como se contasse para alguém.", "Se alguém ouviu, pergunte o que essa pessoa notou, e só escute."]},
    {"nome": "Sonhar mais longe que você mesmo", "afirm": ["Esta noite eu sonho além de mim."], "de": "inspirado em Davi Kopenawa, xamã yanomami, em A queda do céu", "ilus": "estrela-verde", "texto": "Em A queda do céu, com Bruce Albert, Davi Kopenawa conta que os Yanomami se esforçam para ver as coisas em sonho quando querem conhecê-las, e que os brancos dormem muito, mas sonham só com eles mesmos. Não é a viagem dos xamãs: é só uma intenção de atenção ao mundo vivo.", "passos": ["Antes de dormir, lembre de um lugar vivo de verdade: uma árvore, um rio, uma mata.", "Deseje com simplicidade conhecê-lo melhor, sem pedir nada para você.", "De manhã, anote se apareceu algo além de você mesmo: lugares, bichos, outras pessoas."]},
    {"nome": "O sonho que pede um gesto", "afirm": ["O que eu sonho, eu cuido acordado."], "de": "inspirado em famílias guarani de Ywy Pyhaú (SP)", "ilus": "estrela-terra", "texto": "Entre famílias tupi guarani da aldeia Ywy Pyhaú, em São Paulo, o que um sonho vai trazer depende do que fazem quem sonhou e quem ouviu, ao acordar e nos dias seguintes (Lígia Rodrigues de Almeida, 2022). O sonho não é um enigma a decifrar: ele pede cuidado.", "passos": ["Anote o sonho ao acordar.", "Pergunte-se que pequeno gesto de cuidado ele sugere: com você, com alguém ou com um lugar.", "Faça esse gesto no mesmo dia e repare nos dias seguintes no que mudou."]},
    {"nome": "A terra onde eu durmo", "afirm": ["Eu durmo sobre uma terra viva."], "de": "inspirado no respeito à terra dos povos aborígenes da Austrália", "ilus": "estrela-terra", "texto": "Para os Anangu, de Uluru, o Tjukurpa é a lei e o conhecimento que ligam as pessoas, os animais, as plantas e a terra. Parte desse saber é sagrada e só deles. Este gesto não é um rito aborígene: é só uma forma de lembrar a terra onde você dorme.", "passos": ["Antes de deitar, lembre o nome do lugar onde você está e dos povos que viveram ali antes.", "Pense em uma coisa viva desse lugar: uma árvore, um rio, um bicho.", "Agradeça em silêncio e durma."]},
    {"nome": "Receber e trabalhar", "afirm": ["O que chega no sonho, eu trago e cuido."], "de": "inspirado nos cantores do norte da Austrália", "ilus": "ondas", "texto": "No norte da Austrália, as canções wangga são entendidas como vindas dos ancestrais, que as cantam ao cantor em sonho; o etnomusicólogo Allan Marett registrou cantores trabalhando a canção recebida até ela tomar forma. Entre os Warlpiri, Barbara Glowczewski gravou sonhos que viraram canções, danças e pinturas. Não se trata de receber o Dreaming nem de imitar a arte deles: é o gesto de trazer o que vem do sonho e trabalhar com isso.", "passos": ["Deixe papel e lápis ao lado da cama.", "Ao acordar, anote ou desenhe qualquer som, imagem ou forma do sonho.", "Volte a esse registro durante o dia e trabalhe nele, sem forçar um sentido."]},
    {"nome": "Deitar em pureza", "afirm": ["Ó Deus, eu me entrego a Ti."], "de": "um hadith de Sahih al-Bukhari (247)", "ilus": "estrela-lilas", "texto": "Segundo al-Bara' ibn 'Azib, o Profeta ensinou: quando fores para a cama, faz a ablução como para a oração, deita-te sobre o lado direito e diz a súplica de entrega, “Ó Deus, eu me entrego a Ti…”.", "passos": ["Antes de deitar, faça a ablução como para a oração.", "Deite-se sobre o lado direito.", "Diga a súplica de entrega. Quem não é muçulmano pode dizer uma frase de entrega no mesmo espírito."]},
    {"nome": "A proteção da noite", "afirm": ["Eu durmo guardado até o amanhecer."], "de": "hadiths de Sahih al-Bukhari (2311 e 5017)", "ilus": "lua", "texto": "Segundo os hadiths, quem recita o Versículo do Trono (Alcorão 2:255) antes de dormir tem um guardião da parte de Deus até o amanhecer. Aisha conta que toda noite, ao deitar, o Profeta juntava as mãos, soprava nelas, recitava as três últimas suratas do Alcorão e passava as mãos pelo corpo, três vezes.", "passos": ["Recite o Versículo do Trono (Alcorão 2:255).", "Junte as mãos, recite as suratas Al-Ikhlas, Al-Falaq e An-Nas e sopre nas mãos.", "Passe as mãos pela cabeça, pelo rosto e pelo corpo, três vezes."]},
    {"nome": "Ao acordar de um sonho", "afirm": ["Eu agradeço o sonho bom e deixo ir o ruim."], "de": "hadiths de Sahih al-Bukhari (6985) e Sahih Muslim (2261, 2262)", "ilus": "estrela-cadente", "texto": "Os hadiths ensinam: do sonho bom, agradeça a Deus e conte a quem você ama; do sonho ruim, busque refúgio em Deus, vire para o outro lado e não o conte a ninguém, que ele não fará mal. No Osirion, o que você anota fica só com você.", "passos": ["Ao acordar de um sonho bom, agradeça.", "Ao acordar de um sonho ruim, busque refúgio em Deus três vezes e vire para o outro lado.", "Não conte o sonho ruim a ninguém. Se quiser guardá-lo, ele fica só no seu diário."]},
    // Mais do caminho de Castaneda: só o que os livros confirmam
    {"nome": "O terceiro portão", "afirm": ["Eu me vejo dormindo e permaneço desperto."], "de": "nos livros de Castaneda (A arte de sonhar, 1993)", "ilus": "figura-deitada", "texto": "Em A arte de sonhar, o terceiro portão é alcançado quando, no sonho, a pessoa se vê dormindo na própria cama. Ver o próprio corpo assim pode assustar: é só um sinal de que a consciência está desperta dentro do sono.", "passos": ["Ao deitar, decida com calma: se eu me vir dormindo, eu fico sereno.", "Se acontecer, não lute: respire devagar e observe.", "Se quiser acordar, mexa devagar um dedo do corpo físico.", "De manhã, anote como foi."]},
    {"nome": "O ovo de luz", "afirm": ["Eu sou um ovo de luz."], "de": "nos livros de Castaneda (O fogo interior, 1984)", "ilus": "estrela-dourada", "texto": "Em O fogo interior, Don Juan diz que quem “vê” percebe o ser humano como um ovo de luz, e que há nele um ponto de brilho intenso, a cerca de um braço de distância atrás das omoplatas, onde a percepção se monta. Mover esse ponto seria ver de outro jeito. Aqui é uma imagem de concentração, não uma promessa de enxergar luz.", "passos": ["Deitado, imagine o seu corpo dentro de um grande ovo de luz, do tamanho dos braços abertos.", "Imagine um ponto mais brilhante atrás das costas, a um braço de distância.", "Respire e imagine esse ponto deslizando devagar, como uma luz que muda de lugar.", "Adormeça com a imagem do ovo inteiro brilhando."]},
    {"nome": "O pássaro que sai e volta", "afirm": ["Eu saio de dia e volto inteiro."], "de": "inspirado nas fórmulas do ba no Livro dos Mortos egípcio", "ilus": "figura-voo", "texto": "O Livro dos Mortos egípcio chamava-se, na língua deles, “Livro de sair de dia”. Nele há fórmulas para tomar a forma de um ba vivo, de uma andorinha, e para o ba voltar a se unir ao corpo; nas ilustrações, o ba é um pássaro com cabeça humana pousado sobre o corpo. Eram textos para os mortos: aqui é só uma imagem para adormecer.", "passos": ["Deitado, imagine um pequeno pássaro de luz pousado sobre o seu peito: é o seu ba.", "Ao sentir o sono chegando, imagine que ele levanta voo devagar, sem medo.", "Diga por dentro: “Eu saio de dia e volto inteiro.”", "De manhã, antes de abrir os olhos, imagine o pássaro pousando de novo no peito, e lembre o sonho."]},
    // O Japão: o diário de Myōe, os templos de Kannon, o Baku e o primeiro sonho do ano
    {"nome": "O caderno de Myōe", "afirm": ["Ao acordar, eu guardo o que a noite me deu."], "de": "o monge Myōe, no Japão do século XIII", "ilus": "lua", "texto": "O monge Myōe, do templo Kōzanji, em Kyoto, anotou os seus sonhos e visões por cerca de 40 anos, até morrer, em 1232. De manhã, a primeira coisa que fazia era pegar o caderno. Depois acrescentava comentários e relia os sonhos antigos, ligando uns aos outros.", "passos": ["Deixe o diário ao lado da cama antes de dormir.", "Ao acordar, antes de levantar, anote o sonho, mesmo que seja só um pedaço.", "Mais tarde, escreva uma linha de comentário: o que este sonho lembra?", "Uma vez por semana, releia os sonhos antigos e procure o fio que os liga."]},
    {"nome": "Pedir um sonho a Kannon", "afirm": ["Que um sonho me seja concedido."], "de": "os retiros nos templos de Kannon, no Japão antigo", "ilus": "estrela-lilas", "texto": "No Japão dos séculos X a XII, peregrinos passavam noites nos templos de Kannon, como Hasedera e Ishiyamadera, dormindo no salão e pedindo que um sonho lhes fosse concedido. No Diário de Sarashina (por volta de 1060), a autora passa três dias em Hasedera e sonha com um ramo de cedro lançado no quarto. Era um pedido, não uma garantia.", "passos": ["Escolha uma única pergunta ou intenção para a noite.", "Coma leve à noite. Nada de jejum.", "Antes de dormir, peça em silêncio que um sonho lhe seja concedido sobre essa pergunta.", "Ao acordar, anote qualquer imagem, mesmo pequena: no diário, um ramo de cedro foi o sinal."]},
    {"nome": "Entregar o pesadelo ao Baku", "afirm": ["O Baku leva o que não é meu."], "de": "o folclore japonês do Baku", "ilus": "estrela-terra", "texto": "No Japão, o Baku é o ser que come os pesadelos. Desde o período Edo, havia amuletos e travesseiros com a figura dele. Em algumas regiões, quem acordava com medo dizia três vezes: “Baku, coma o meu pesadelo.”", "passos": ["Ao acordar de um pesadelo, sente-se e respire devagar.", "Diga três vezes: “Baku, leve este sonho.”", "Se quiser, anote o sonho e feche a página.", "Antes de voltar a dormir, pense numa imagem calma. Se os pesadelos forem frequentes, procure ajuda de um profissional."]},
    {"nome": "O barco do primeiro sonho", "afirm": ["Que o primeiro sonho do ciclo seja bom."], "de": "o hatsuyume, o primeiro sonho do ano no Japão", "ilus": "ondas", "texto": "No Japão, o primeiro sonho do ano se chama hatsuyume. O costume é pôr sob o travesseiro a imagem de um barco do tesouro, o takarabune, com um poema que se lê igual de trás para frente. Se o sonho fosse ruim, a imagem era jogada no rio pela manhã. Aqui, o barco marca o começo de um ciclo: um mês, uma técnica, um ano.", "passos": ["No começo de um ciclo, desenhe um pequeno barco num papel e escreva nele a sua intenção.", "Ponha o papel sob o travesseiro.", "Ao acordar, anote o primeiro sonho.", "Se o sonho foi ruim, rasgue o papel e jogue fora com respeito."]},

  ];

  // As afirmações antes de dormir: uma por noite, em sequência (a mesma lista está em netlify/functions/lembretes.mjs).
  const AFIRMACOES = [
    // Na linha de William Buhlman
    "Eu sou mais do que o meu corpo físico.",
    "Agora eu estou fora do corpo.",
    "Clareza, agora!",
    "Consciência, agora!",
    "Esta noite eu me lembro de tudo.",
    // Sobre quem eu sou
    "Eu sou um ser multidimensional.",
    "Eu sou consciência além deste corpo.",
    "Eu sou um espírito que atravessa os mundos.",
    "O meu corpo dorme; eu permaneço desperto.",
    "Eu sou luz, e a luz não dorme.",
    // Para despertar no sonho
    "Ao cair no sono, eu permaneço consciente.",
    "Esta noite eu percebo que estou sonhando.",
    "Quando algo estranho acontecer, eu desperto.",
    "Eu atravesso o limiar e volto lembrando de tudo.",
    // De proteção e entrega
    "Só o que é da luz me alcança nesta noite.",
    "Eu viajo em segurança e volto inteiro ao meu corpo."
  ];

  // Depois dos cinco atos do Arhat: as práticas que não são do livro
  const EXTRAS = [ATENCAO, FORCAS, DIALOGO, VER];

  // As práticas do dia das tradições (programa.js → ESTILOS[].dia). Só o que as fontes documentam; o resto é adaptação declarada.
  const DESPERTA = {
    k: "desperta", ilus: "olho", ico: "sol", nome: "Desperta em paz", det: "Saudar a luz da manhã, como no templo de Dendera",
    texto: [
      { p: "No templo de Hathor, em Dendera, um hino gravado na fachada do santuário pede que a deusa e as outras deusas despertem em paz, e diz que os deuses madrugam todos os dias para adorá-la. Nos templos egípcios, o ritual do dia começava logo depois da primeira luz." },
      { p: "No Ano Novo, os sacerdotes subiam com a estátua de Hathor até um pequeno quiosque no telhado do templo, para que ela recebesse os primeiros raios do sol: a união da deusa com o disco solar." },
      { p: "Esta prática é uma adaptação inspirada nisso, e não o rito do templo. Logo ao acordar, vá até uma janela ou um lugar aberto com a luz da manhã." },
      { p: "Fique de pé, de frente para a luz, sem olhar direto para o sol." },
      { p: "Diga em voz baixa: “Desperta em paz.” É uma frase inspirada no hino, não a tradução dele." },
      { p: "Respire devagar por dois ou três minutos, sentindo a luz no rosto e nas mãos." },
      { p: "Pergunte a si mesmo: “Estou acordado?” E lembre o sonho da noite." }
    ]
  };

  const PUREZA = {
    k: "pureza", ilus: "rio", ico: "agua", nome: "Pensamentos puros", det: "Preparar-se para a noite como no santuário de Asclépio",
    texto: [
      { p: "Segundo Porfírio (Da Abstinência 2.19), sobre a entrada do santuário de Asclépio em Epidauro havia uma inscrição: puro deve ser quem entra no templo perfumado, e pureza é pensar coisas santas. A data dessa inscrição é discutida pelos estudiosos." },
      { p: "Antes de dormir no santuário, quem vinha pedir um sonho se purificava com um banho e fazia uma oferenda e uma prece (Emma e Ludwig Edelstein, Asclepius, 1945)." },
      { p: "Esta prática é uma adaptação inspirada nisso. No fim da tarde, lave o rosto e as mãos com água fresca, como um banho simbólico." },
      { p: "Leia devagar a frase da inscrição: “Puro deve ser quem entra; pureza é pensar coisas santas.”" },
      { p: "Por três minutos, deixe passar as preocupações do dia e troque cada uma por um pensamento bom." },
      { p: "Diga numa frase o que você pede ao sonho desta noite. E não leve discussões nem telas para a hora de dormir." }
    ]
  };
  const FLORESTA = {
    k: "floresta", ilus: "morro-figuras", ico: "raiz", nome: "Sonhar a floresta", det: "Escutar os seres vivos e levar um deles para a noite",
    texto: [
      { p: "Em A queda do céu, com Bruce Albert, o xamã yanomami Davi Kopenawa diz que os brancos dormem muito, mas sonham só com eles mesmos, enquanto os Yanomami sonham longe; e que quem não sabe sonhar a floresta não a defende." },
      { p: "Na etnografia de Hanna Limulja, o sonho yanomami tem consequência durante o dia: quem sonha presta atenção ao que está em volta." },
      { p: "Não é um rito yanomami: é um gesto inspirado no que eles contam. Fique cinco minutos ao ar livre, ou junto a uma árvore ou uma planta." },
      { p: "Escute os sons e repare em três seres vivos que não são gente: um pássaro, um inseto, uma árvore." },
      { p: "Escolha um deles e guarde a imagem. À noite, ao deitar, lembre dele e deseje sonhar mais longe que você mesmo." }
    ]
  };
  const ESCUTA = {
    k: "escuta", ilus: "estrela-terra", ico: "lua", nome: "Escuta profunda", det: "Inspirada em dadirri, como Miriam-Rose Ungunmerr-Baumann a ofereceu",
    texto: [
      { p: "Dadirri é uma palavra dos povos Ngan'gikurungkurr e Ngen'giwumirri, da região do rio Daly, no norte da Austrália. A educadora Miriam-Rose Ungunmerr-Baumann a descreve como escuta interior e profunda e consciência quieta, e a ofereceu aos australianos como um presente." },
      { p: "Ela fala de aprender observando e escutando, esperando, e só então agindo. Dadirri não é uma técnica de sonho: é uma escuta que acalma por dentro." },
      { p: "Esta prática é inspirada nas palavras dela, e não um rito aborígene. Sente-se ao ar livre ou junto a uma janela, sem o celular." },
      { p: "Escute os sons de perto e de longe, sem dar nome e sem julgar." },
      { p: "Espere. Não faça nada: só repare na quietude por dentro." },
      { p: "Leve essa mesma escuta para a hora de dormir." }
    ]
  };
  const VERDADE = {
    k: "verdade", ilus: "estrela-lilas", ico: "luz", nome: "A fala verdadeira", det: "Durante o dia, falar só a verdade",
    texto: [
      { p: "Um hadith de Sahih Muslim (2263) liga o dia ao sonho: os sonhos mais verdadeiros vêm aos que são mais verdadeiros na fala." },
      { p: "A tradição registra também que o Profeta e os seus companheiros faziam uma sesta breve ao meio-dia (Sahih al-Bukhari 939 e 6281)." },
      { p: "Esta prática é uma adaptação inspirada nesse hadith. De manhã, proponha a si mesmo: hoje não digo nada que não seja verdade, nem exagero." },
      { p: "Ao meio-dia, repare onde a fala quis escapar da verdade." },
      { p: "No fim da tarde, por cinco minutos, reveja o dia. Se disse algo errado a alguém, corrija quando for possível." },
      { p: "Antes de dormir, lembre o hadith: a fala verdadeira prepara o sonho verdadeiro." }
    ]
  };
  // O homem pássaro: uma prática do dia diferente a cada técnica (os capítulos de Viagem a Ixtlan, 1972)
  const HISTORIA = {
    k: "historia", ilus: "maos-chama", ico: "pena", nome: "Apagar a história pessoal", det: "Não repetir hoje uma história sobre si mesmo",
    texto: [
      { p: "Em Viagem a Ixtlan, no capítulo “Apagar a história pessoal”, Don Juan ensina a deixar o passado de lado e a não alimentar a imagem que os outros fazem de nós: assim se fica mais livre e menos previsível." },
      { p: "Hoje, repare numa história sobre você que você costuma contar: “eu sou assim”, “comigo sempre acontece isso”." },
      { p: "Durante o dia, não a repita, nem em voz alta, nem por dentro." },
      { p: "À noite, antes de dormir, repare como ficou mais leve." }
    ]
  };
  const MORTE = {
    k: "conselheira", ilus: "maos-chama", ico: "pena", nome: "A conselheira à esquerda", det: "Dar peso a cada gesto do dia",
    texto: [
      { p: "Em Viagem a Ixtlan, no capítulo “A morte é uma conselheira”, Don Juan diz que a morte está sempre à nossa esquerda, a um braço de distância, e que lembrar dela tira a mesquinharia e dá peso a cada ato." },
      { p: "Aqui não se trata de pensar em morrer: é lembrar que este dia é precioso e não volta." },
      { p: "Quando se irritar com algo pequeno hoje, sinta o espaço à sua esquerda e pergunte: isto importa mesmo?" },
      { p: "À noite, lembre um gesto do dia que você fez inteiro, com atenção." }
    ]
  };
  const SOMBRAS = {
    k: "sombras", ilus: "fitas", ico: "luz", nome: "Olhar as sombras", det: "O não-fazer: reparar no que sempre se ignora",
    texto: [
      { p: "Em Viagem a Ixtlan, no capítulo “Não-fazer”, Don Juan ensina a prestar atenção ao que normalmente ignoramos: por exemplo, olhar as sombras das folhas, e não as folhas." },
      { p: "Escolha uma planta ou uma árvore com luz batendo nela." },
      { p: "Por três minutos, com os olhos relaxados, olhe só as sombras: as formas, os buracos de luz, como elas se mexem." },
      { p: "Quando os olhos quiserem voltar às folhas, volte às sombras." }
    ]
  };
  const MARCHA = {
    k: "marcha", ilus: "maos-chama", ico: "pena", nome: "O passo atento", det: "Caminhar confiando no corpo",
    texto: [
      { p: "Em Viagem a Ixtlan, no capítulo “A marcha de poder”, Don Juan ensina a correr no escuro, em terreno difícil, com os olhos fixos no chão logo à frente, confiando no corpo e não na vista." },
      { p: "O app não indica correr no escuro: esta é uma adaptação segura. Caminhe devagar num lugar plano e iluminado." },
      { p: "Deixe o olhar suave, um pouco à frente dos pés, sem fixar em nada." },
      { p: "Sinta cada passo tocando o chão e deixe o corpo encontrar o caminho." },
      { p: "Faça por cinco a dez minutos." }
    ]
  };
  const MEDITAR_SONHO = {
    k: "meditar-sonho", ilus: "lua", ico: "lua", nome: "Meditar para sonhar", det: "Como o monge Myōe, orientar o sonho pela meditação",
    texto: [
      { p: "O monge Myōe meditava sentado e recitava no templo Kōzanji. Pela meditação, ele tentava conduzir a mente a sonhar com o que buscava, e anotava no mesmo caderno as visões da meditação e os sonhos da noite." },
      { p: "Esta prática é uma adaptação inspirada nele. Sente-se em silêncio, de dia, por cinco a dez minutos." },
      { p: "No fim, traga à mente a imagem ou o tema que você quer sonhar esta noite." },
      { p: "Se surgir alguma imagem durante a meditação, anote no diário como “visão”." },
      { p: "Depois, compare as visões do dia com os sonhos da noite, como Myōe fazia." }
    ]
  };
  const DIAS = [DESPERTA, PUREZA, FLORESTA, ESCUTA, VERDADE, HISTORIA, MORTE, SOMBRAS, MARCHA, MEDITAR_SONHO];
  return { ATOS, ALVOS, VIAGENS, NOITE, AFIRMACOES, EXTRAS, DIAS };
})();
