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
    k: "resp", ilus: "estrela-dourada", ico: "sol", nome: "Respiração Dourada", det: "7 respirações pelo terceiro olho",
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
          { k: "raizes", ilus: "fitas", ico: "raiz", nome: "Raízes de Cura", det: "Sentir as raízes ativas e conectadas", texto: [
            { p: "Temos raízes, linhas invisíveis, tentáculos tremeluzentes pouco opacos que saem de nossas mãos, cabeça, garganta, coração, umbigo e centros sexuais." },
            { p: "Esses filamentos sutis, parte importante de nosso corpo invisível, são usados por curandeiros para penetrar em outros corpos, curar e manipular energia." },
            { p: "Quando as raízes estão ativas, sente-se uma leve vibração ou sensação de amortecimento na região: é um sinal de que aquele centro de energia está em funcionamento!" },
            { p: "O meio em que vivemos nos doa energia todo o tempo e preenche buracos e vazios do nosso corpo. Nós absorvemos continuamente a energia luminosa da natureza e do meio." },
            { p: "Saber recarregar-se intencionalmente de energia vital faz com que não precisemos absorver a energia do meio e de pessoas ao nosso redor! É comum tentarmos preencher esse esgotamento com compulsões físicas e mentais, ou apegos emocionais." },
            { sub: "Ative suas raízes agora!" },
            { p: "Aproxime suas mãos, sinta suas raízes dançando entre si como línguas de fogo que se entrelaçam! Brinque e dance com elas, ative o seu poder sutil." }
          ] } ] },
        { quando: "Noite", hora: "ao deitar", praticas: [
          { k: "noite", ilus: "meditacao-fita", ico: "lua", nome: "Corpo relaxado, mente desperta", det: "Encontre o seu nevoeiro", audio: true, texto: [
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
          { k: "dragao", ilus: "figura-espiral", ico: "sol", nome: "Respiração do Dragão", det: "O Estado Vibracional",
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
          { k: "madrugada", ilus: "figura-voo", ico: "espiral", nome: "Hermes Trismegisto", det: "Espiral da coroa e os comandos", audio: true, texto: [
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
          { k: "pilar", ilus: "figura-estrela", ico: "luz", nome: "Pilar de luz", det: "Azul claro e pulsante, várias vezes ao dia", texto: [
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
      k: "rio", ilus: "estrela-cadente", ico: "agua", nome: "O Rio dos Espíritos", det: "Lançar-se na Via Láctea", audio: true,
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
    { nome: "A frase que abre a porta", de: "Stephen LaBerge", ilus: "estrela-cadente",
      texto: "Pesquisadores do sono mostraram que uma intenção dita antes de dormir aumenta as chances de perceber o sonho por dentro. A mente leva para a noite a última coisa em que você pensou com convicção.",
      passos: ["Deite e respire devagar algumas vezes.", "Lembre um sonho recente, ou imagine um, e veja a si mesmo percebendo dentro dele que é sonho.", "Repita devagar, com convicção: “Na próxima vez que eu estiver sonhando, vou perceber que estou sonhando.”", "Adormeça com essa frase, sem pensar em mais nada."] },
    { nome: "Procure as suas mãos", de: "Dom Juan, nos livros de Castaneda", ilus: "maos-chama",
      texto: "Dom Juan ensinava que encontrar as próprias mãos dentro do sonho acende a atenção lá dentro.",
      passos: ["Antes de deitar, olhe as suas mãos por um minuto, com calma.", "Diga: “Hoje eu vou ver as minhas mãos no sonho.”", "Ao fechar os olhos, imagine as mãos na sua frente até adormecer."] },
    { nome: "O sankalpa", de: "Yoga Nidra", ilus: "figura-deitada",
      texto: "Uma intenção curta, plantada no limiar do sono, entra fundo, como uma semente.",
      passos: ["Escolha uma frase curta, no presente. Por exemplo: “Eu desperto dentro dos meus sonhos.”", "Repita três vezes ao deitar, com convicção.", "Use sempre a mesma, noite após noite."] },
    { nome: "Recapitular o dia", de: "Dom Juan, nos livros de Castaneda", ilus: "figura-fio",
      texto: "Lembrar o dia de trás para frente solta a energia presa nas cenas e treina a memória para guardar os sonhos.",
      passos: ["Deitado, volte no tempo: o que fez logo antes de deitar? E antes disso?", "Vá cena por cena até a manhã, sem julgar.", "Se uma cena pesar, respire fundo e deixe ir."] },
    { nome: "A caixa das preocupações", de: "Robert Monroe", ilus: "figura-cruz",
      texto: "Pensamentos do dia prendem a consciência ao corpo. Monroe ensinava a guardá-los antes de atravessar.",
      passos: ["Imagine uma caixa ao lado da cama.", "Coloque dentro dela, uma a uma, as preocupações do dia.", "Feche a tampa. Elas estarão lá amanhã. Agora você está livre para ir."] },
    { nome: "So Ham", de: "tradição do yoga", ilus: "espiral-figura",
      texto: "So Ham quer dizer “eu sou Aquilo”. A própria respiração já repete esse mantra, e você só escuta.",
      passos: ["Inspire ouvindo por dentro “So”.", "Expire ouvindo “Ham”.", "Não controle o ar. Se se perder, volte ao próximo So, até adormecer."] },
    { nome: "O som do AUM", de: "Mandukya Upanishad", ilus: "estrela-sol",
      texto: "O A é a vigília, o U é o sonho, o M é o sono profundo. O silêncio depois do M é a consciência que fica acordada através dos três.",
      passos: ["Sentado ou deitado, entoe o AUM três vezes, bem devagar.", "Sinta o A no peito, o U na garganta e o M na cabeça.", "Depois fique no silêncio que vem em seguida, até o sono chegar."] },
    { nome: "Pedir um sonho", de: "os templos de incubação", ilus: "morro-figuras",
      texto: "Por milhares de anos, quem buscava uma resposta dormia no templo e pedia um sonho. A pergunta clara abre o caminho.",
      passos: ["Escreva uma pergunta curta no diário.", "Leia em voz baixa antes de deitar.", "Peça: “Que a resposta venha em sonho, e que eu esteja desperto para recebê-la.”"] },
    { nome: "A luz na garganta", de: "yoga dos sonhos tibetana", ilus: "fita-estrela-lilas",
      texto: "Na yoga dos sonhos ensinada por Tenzin Wangyal Rinpoche, a garganta é o centro do sonho.",
      passos: ["Leve a atenção à garganta.", "Imagine ali uma pequena luz vermelha, quente e calma.", "Não force. Deixe a luz ficar enquanto o corpo adormece."] },
    { nome: "Contar até o sonho", de: "Stephen LaBerge", ilus: "fita-estrela",
      texto: "Contar devagar mantém a mente acesa enquanto o corpo adormece. Em algum número, o sonho começa e você percebe.",
      passos: ["Deitado, comece a contar em silêncio: “um, estou sonhando; dois, estou sonhando…”.", "Conte devagar, uma vez a cada respiração.", "Se perder a conta, recomece de onde lembrar, sem se cobrar.", "Quando as imagens aparecerem, pare de contar e só observe."] },
    { nome: "Observar as imagens", de: "técnica do sonho lúcido induzido desperto", ilus: "fitas",
      texto: "Ao adormecer surgem cores, rostos e paisagens. Quem observa sem se agarrar entra no sonho acordado.",
      passos: ["Deite de barriga para cima e fique imóvel.", "Observe o escuro atrás dos olhos, sem esperar nada.", "Quando as imagens vierem, só olhe. Deixe que fiquem mais nítidas até virar cena."] },
    { nome: "O alvo de três objetos", de: "William Buhlman", ilus: "fita-estrela-dourada",
      texto: "A intenção clara é o que mais leva para fora do corpo. Um lugar conhecido, com detalhes, vira um alvo para a consciência.",
      passos: ["Escolha um cômodo da casa e três objetos dele.", "Ao deitar, sinta-se lá, tocando cada um: a textura, a temperatura, o peso.", "Diga por dentro: “Agora eu estou lá.” e adormeça nessa cena."] }
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

  return { ATOS, ALVOS, VIAGENS, NOITE, AFIRMACOES };
})();
