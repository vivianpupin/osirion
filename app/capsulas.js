// Cápsulas diárias do Osirion: uma por dia, em cartas curtas e interativas.
// Temas: "livro" (do Osirion), "ciencia" (ciência do sono), "tradicoes" (povos e templos), "viajantes" (técnicas de Monroe, Buhlman, LaBerge, Castaneda), "mantras" (mantras e práticas do sono da Índia e do Tibete).
// Cartas: abre · fala · revela · quiz · faca · leva · alvo
window.CAPSULAS = [
  { dia: 1, ilus: "meditacao-fita", tema: "livro", titulo: "O que é um Arhat", minutos: 2, cartas: [
    { t: "abre", titulo: "O que é um Arhat", sub: "O objetivo da jornada" },
    { t: "fala", texto: "“Arhat”, em sânscrito, refere-se a alguém que alcançou o estado de iluminação ou despertar espiritual." },
    { t: "fala", texto: "Aquele que transcende todos os planos, que pisou em todos os mundos, pois passou por todas as iniciações. É senhor de Si e caminhante do tempo." },
    { t: "fala", texto: "Para o Arhat, o sono não apaga nada. A consciência segue acesa enquanto o corpo dorme: ele sonha lúcido, sai do corpo e volta lembrando de tudo." },
    { t: "revela", pergunta: "E qual é o objetivo do Osirion?", resposta: "Que você se torne um Arhat. Lembrar dos sonhos, perceber os sinais, despertar dentro deles e viajar: cada passo do caminho leva até lá." },
    { t: "fala", texto: "O Osirion tem cinco atos. Você pode atravessá-los em sequência ou ficar alguns dias em cada um. A transformação da consciência demanda tempo: quanto mais tempo praticar, mais viverá seus resultados." },
    { t: "revela", pergunta: "O que o Osirion recomenda para o corpo durante a jornada?", resposta: "Uma alimentação leve e saudável, evitando carnes e bebidas alcoólicas." },
    { t: "leva", texto: "Dedique-se, pois sem dedicação, nada obterá!" }
  ] },
  { dia: 2, ilus: "lua", tema: "livro", titulo: "Por que a noite", minutos: 2, cartas: [
    { t: "abre", titulo: "Por que a noite", sub: "A real morada da consciência" },
    { t: "quiz", pergunta: "Quanto da vida passamos dormindo?", opcoes: ["Um décimo", "Um quarto", "Um terço"], certa: 2, explica: "Cerca de um terço. Numa vida de 75 anos, são uns 25 anos de noites." },
    { t: "fala", texto: "O ponto onde nossa consciência mais se aproxima da sua real morada é durante o sono!" },
    { t: "fala", texto: "O Arhat nunca dorme, mas atua conscientemente em ambas as realidades: o dia, que é matéria, e a noite, que é espírito. Apenas atravessa de um limiar a outro." },
    { t: "faca", titulo: "Hoje à noite", texto: "Tente perceber o exato momento em que você adormece. Não precisa conseguir. Só a intenção já começa a acordar algo." },
    { t: "leva", texto: "Nós não somos daqui, viemos das estrelas, mas em alguma parte do caminho nos esquecemos." }
  ] },
  { dia: 3, ilus: "ondas", tema: "ciencia", titulo: "Os ciclos do sono", minutos: 3, cartas: [
    { t: "abre", titulo: "Os ciclos do sono", sub: "O mapa do território" },
    { t: "fala", texto: "Ninguém dorme de um jeito só. A noite é feita de ciclos de mais ou menos 90 minutos: sono leve, sono profundo e sono REM. Em uma noite, você passa por quatro a seis ciclos." },
    { t: "revela", pergunta: "O que acontece no sono REM?", resposta: "Os olhos se movem rápido sob as pálpebras, o cérebro fica quase tão ativo quanto acordado e o corpo fica paralisado, para você não encenar o sonho. É no REM que acontecem os sonhos mais vívidos." },
    { t: "quiz", pergunta: "Em que parte da noite os períodos de REM são mais longos?", opcoes: ["Logo depois de deitar", "No meio da noite", "Na madrugada, perto de acordar"], certa: 2, explica: "A cada ciclo o REM cresce. Os últimos, de madrugada, são os mais longos e cheios de sonhos." },
    { t: "fala", texto: "É por isso que o Osirion te desperta às 4 da manhã: você volta a dormir bem na janela dos sonhos mais longos, com a mente um pouco mais acordada." },
    { t: "leva", texto: "A madrugada é a hora do sonho." }
  ] },
  { dia: 4, ilus: "estrela-lilas", tema: "livro", titulo: "Lembrar é um treino", minutos: 3, cartas: [
    { t: "abre", titulo: "Lembrar é um treino", sub: "Os primeiros 5 minutos" },
    { t: "fala", texto: "É nativo do ser humano a vida dual – matéria x espírito – todos, sem exceção de nenhum, passam por atividades noturnas de desdobramento. Todos possuem um cérebro com memória ativa. Se você tem dificuldades para se recordar de seus sonhos é porque não teve estímulos para isso, portanto, apenas continue treinando!", de: "Arhat" },
    { t: "fala", texto: "Ao escrevermos nossos sonhos imediatamente após acordar, mostramos ao cérebro a importância de recordar as experiências do plano extrafísico, incentivando-o a não mais ocultar essa valiosa informação.", de: "Arhat" },
    { t: "fala", texto: "Os primeiros 5 minutos após o despertar são cruciais!", de: "Arhat" },
    { t: "quiz", pergunta: "Você acordou e não lembra de nada. O que fazer?", opcoes: ["Levantar logo e desistir", "Abrir os olhos e pegar o celular", "Ficar imóvel, de olhos fechados, e perguntar onde estava"], certa: 2, explica: "Mexer o corpo e abrir os olhos apaga o sonho em segundos. Quieto, o fio costuma voltar." },
    { t: "faca", titulo: "Amanhã cedo", texto: "Não levante e nem abra os olhos. Pergunte: Onde eu estava? O que eu estava sentindo? Depois anote tudo, até as lembranças pequenas e sem sentido." },
    { t: "fala", texto: "Se não houver qualquer lembrança, continue praticando com convicção!", de: "Arhat" },
    { t: "leva", texto: "Dê importância à dimensão espiritual e receberá os doces frutos da eternidade!" }
  ] },
  { dia: 5, ilus: "morro-figuras", tema: "tradicoes", titulo: "Os templos do sonho", minutos: 3, cartas: [
    { t: "abre", titulo: "Os templos do sonho", sub: "Quando se ia ao templo para dormir" },
    { t: "fala", texto: "Por milhares de anos, a humanidade construiu templos não para rezar acordada, mas para dormir. Era a incubação dos sonhos." },
    { t: "revela", pergunta: "O que acontecia nos templos de Asclépio, na Grécia?", resposta: "Em Epidauro, Pérgamo e Cós, quem buscava cura se purificava, fazia oferendas e dormia numa sala sagrada chamada ábaton. O deus aparecia no sonho, tocando o corpo doente ou indicando o remédio. Em Epidauro ainda existem as pedras com os relatos das curas, com mais de 2.300 anos." },
    { t: "fala", texto: "No Egito, havia livros de sonhos há mais de 3.200 anos, como o papiro Chester Beatty III. Em Saqqara, as pessoas dormiam junto aos santuários pedindo orientação e cura." },
    { t: "fala", texto: "No Japão de mil anos atrás, peregrinos passavam a noite em templos de Kannon, como Hasedera, esperando um sonho que respondesse à sua pergunta." },
    { t: "faca", titulo: "Hoje", texto: "Prepare o seu quarto como um templo: arrume, limpe, desligue as telas antes de deitar. Imagine a chuva caindo e limpando o ambiente." },
    { t: "leva", texto: "O Osirion devolve esse templo para dentro do seu quarto." }
  ] },
  { dia: 6, ilus: "fitas", tema: "livro", titulo: "As raízes de cura", minutos: 3, cartas: [
    { t: "abre", titulo: "As raízes de cura", sub: "O corpo invisível" },
    { t: "traco", img: "raizes", texto: "As raízes saem das mãos, da cabeça, da garganta, do coração, do umbigo e do centro sexual." },
    { t: "fala", texto: "Temos raízes, linhas invisíveis, tentáculos tremeluzentes pouco opacos que saem de nossas mãos, cabeça, garganta, coração, umbigo e centros sexuais." },
    { t: "fala", texto: "Esses filamentos sutis, parte importante de nosso corpo invisível, são usados por curandeiros para penetrar em outros corpos, curar e manipular energia." },
    { t: "fala", texto: "Quando as raízes estão ativas, sente-se uma leve vibração ou sensação de amortecimento na região: é um sinal de que aquele centro de energia está em funcionamento!" },
    { t: "fala", texto: "O meio em que vivemos nos doa energia todo o tempo e preenche buracos e vazios do nosso corpo. Nós absorvemos continuamente a energia luminosa da natureza e do meio." },
    { t: "fala", texto: "Saber recarregar-se intencionalmente de energia vital faz com que não precisemos absorver a energia do meio e de pessoas ao nosso redor! É comum tentarmos preencher esse esgotamento com compulsões físicas e mentais, ou apegos emocionais." },
    { t: "faca", titulo: "Ative suas raízes agora!", texto: "Aproxime suas mãos, sinta suas raízes dançando entre si como línguas de fogo que se entrelaçam!", segundos: 30 },
    { t: "foto", ilus: "maos-chama", texto: "Brinque e dance com elas, ative o seu poder sutil." }
  ] },
  { dia: 7, ilus: "fita-estrela", tema: "ciencia", titulo: "A porta entre os mundos", minutos: 3, cartas: [
    { t: "abre", titulo: "A porta entre os mundos", sub: "O estado hipnagógico" },
    { t: "fala", texto: "Entre a vigília e o sono existe um estado de passagem que a ciência chama de hipnagógico: imagens surgindo sozinhas, sons, vozes, a sensação de cair." },
    { t: "quiz", pergunta: "Aquele tranco de “cair” bem na hora de adormecer se chama…", opcoes: ["Espasmo hípnico", "Sonambulismo", "Apneia"], certa: 0, explica: "É um espasmo hípnico, muito comum e inofensivo. Sinal de que você está bem no limiar." },
    { t: "fala", texto: "Vibrações, zumbidos, vozes chamando seu nome, movimentos involuntários: todos esses sintomas denunciam que você está prestes a passar para o outro lado." },
    { t: "revela", pergunta: "E o nevoeiro?", resposta: "Num mar de cores e formas, uma esfera de luz começa a surgir e ocupar todo o campo visual. É o seu limiar. Concentre toda a atenção nele e continue respirando até adormecer." },
    { t: "leva", texto: "Corpo relaxado, mente desperta." }
  ] },
  { dia: 8, ilus: "olho", tema: "ciencia", titulo: "Mensagens de dentro do sonho", minutos: 3, cartas: [
    { t: "abre", titulo: "Mensagens de dentro do sonho", sub: "Como a ciência provou o sonho lúcido" },
    { t: "fala", texto: "Por muito tempo, cientistas duvidaram que alguém pudesse estar consciente dentro de um sonho. Como provar, se a pessoa está dormindo?" },
    { t: "quiz", pergunta: "Como os sonhadores lúcidos “falaram” com os cientistas?", opcoes: ["Falando dormindo", "Movendo os olhos num sinal combinado", "Apertando um botão"], certa: 1, explica: "No REM o corpo fica paralisado, mas os olhos não. Os sonhadores moviam os olhos para a esquerda e para a direita, e o sinal aparecia nos aparelhos." },
    { t: "fala", texto: "Os primeiros registros vieram nos anos 1970 e 1980, com Keith Hearne, na Inglaterra, e Stephen LaBerge, na Universidade Stanford. Pela primeira vez, alguém mandou uma mensagem de dentro de um sonho." },
    { t: "revela", pergunta: "E hoje?", resposta: "Em 2021, equipes de quatro países fizeram contas simples para sonhadores lúcidos durante o sono, e eles responderam com os olhos. Uma conversa de mão dupla entre os dois mundos." },
    { t: "leva", texto: "É possível despertar dentro do universo onírico." }
  ] },
  { dia: 9, ilus: "figura-voo", tema: "livro", titulo: "Sonho lúcido ou viagem astral?", minutos: 2, cartas: [
    { t: "abre", titulo: "Sonho lúcido ou viagem astral?", sub: "Os dois segredos da noite" },
    { t: "quiz", pergunta: "Onde a realidade é completamente maleável e você pode transformá-la?", opcoes: ["No sonho lúcido", "Na viagem astral"], certa: 0, explica: "No sonho lúcido mergulhamos no nosso inconsciente, e tudo pode mudar com a intenção." },
    { t: "quiz", pergunta: "E onde você está sujeito às leis do lugar e precisa aprender a navegar?", opcoes: ["No sonho lúcido", "Na viagem astral"], certa: 1, explica: "Na viagem astral a consciência se desloca do corpo físico para o espiritual, numa outra frequência." },
    { t: "fala", texto: "No início, é como se fôssemos astronautas aprendendo a caminhar na Lua, ou mergulhadores explorando as profundezas do mar." },
    { t: "leva", texto: "A maior expansão da consciência é o choque de realidade causado pela viagem astral." }
  ] },
  { dia: 10, ilus: "estrela-terra", tema: "livro", titulo: "O senso crítico", minutos: 2, cartas: [
    { t: "abre", titulo: "O senso crítico", sub: "Quem garante que agora não é um sonho?" },
    { t: "fala", texto: "No sonho aceitamos histórias absurdas como reais. O senso crítico é o que questiona a realidade, mesmo quando ela parece incrivelmente real." },
    { t: "faca", titulo: "Agora", texto: "Sinta os pés no chão. Olhe as mãos e conte os dedos. Puxe o indicador. Tampe o nariz e tente respirar. Pergunte: será que estou sonhando?" },
    { t: "revela", pergunta: "Por que fazer mais de um teste?", resposta: "Conforme a prática avança, o cérebro pode tentar enganar você e um teste que funcionava pode falhar. Se um não funcionar, o outro funciona." },
    { t: "fala", texto: "Tudo o que fazemos de dia se repete inconscientemente à noite. Um dia, você fará o teste dentro de um sonho e descobrirá que está sonhando." },
    { t: "leva", texto: "O Desperto é aquele que, caminhando pela Terra, entendeu que a vida também é feita do tecido dos sonhos." }
  ] },
  { dia: 11, ilus: "figura-salto", tema: "ciencia", titulo: "Fora do corpo", minutos: 3, cartas: [
    { t: "abre", titulo: "Fora do corpo", sub: "O que a ciência observa" },
    { t: "traco", img: "corpo-de-luz", texto: "O corpo fica em repouso; a consciência se ergue no corpo de luz." },
    { t: "fala", texto: "Pesquisas em vários países estimam que perto de uma em cada dez pessoas já teve ao menos uma experiência de se ver fora do próprio corpo." },
    { t: "revela", pergunta: "O que os neurologistas descobriram em 2002?", resposta: "Na Suíça, ao estimular uma pequena região do cérebro chamada junção temporoparietal, médicos provocaram numa paciente a sensação de flutuar e se ver de cima." },
    { t: "fala", texto: "Para a ciência, isso mostra onde o cérebro constrói a sensação de estar dentro do corpo. Para as tradições, mostra onde fica a porta. O Osirion convida você a experimentar e tirar as suas conclusões." },
    { t: "fala", texto: "Vislumbramos as cores vivas do astral, atravessamos barreiras físicas e viajamos à velocidade do pensamento." },
    { t: "leva", texto: "O medo da morte se dissipa quando vivenciamos, na prática, a multiplicidade de nossos corpos." }
  ] },
  { dia: 12, ilus: "figura-deitada", tema: "ciencia", titulo: "Paralisia do sono sem medo", minutos: 2, cartas: [
    { t: "abre", titulo: "Paralisia do sono sem medo", sub: "Quando o corpo ainda dorme" },
    { t: "fala", texto: "Às vezes você acorda e não consegue se mexer, às vezes com zumbidos, pressão no peito ou a sensação de uma presença. É a paralisia natural do REM, que continua por alguns instantes depois que a mente acordou." },
    { t: "quiz", pergunta: "A paralisia do sono é perigosa?", opcoes: ["Sim, pode parar a respiração", "Não, é passageira e inofensiva"], certa: 1, explica: "Ela assusta, mas passa sozinha e não faz mal. A respiração continua normalmente." },
    { t: "faca", titulo: "Se acontecer", texto: "Respire devagar. Afirme: “Estou protegido”. Para sair, mova um dedo bem devagar. Para atravessar, relaxe e deixe as vibrações crescerem: é o limiar." },
    { t: "leva", texto: "Estou protegido. Estou seguro." }
  ] },
  { dia: 13, ilus: "rio", tema: "tradicoes", titulo: "Os sonhos contados ao amanhecer", minutos: 2, cartas: [
    { t: "abre", titulo: "Os sonhos contados ao amanhecer", sub: "Os Achuar da Amazônia" },
    { t: "fala", texto: "Entre os Achuar, no Equador e no Peru, a família acorda antes do sol, toma junta o chá de guayusa e conta os sonhos da noite." },
    { t: "revela", pergunta: "Para que servem esses sonhos?", resposta: "É a partir deles que se decide o dia: caçar, viajar ou esperar. O sonho é tratado como parte da vida, e não como algo que se esquece ao acordar." },
    { t: "faca", titulo: "Hoje", texto: "Conte um sonho seu para alguém. Dizer em voz alta fixa a memória e ensina a mente que os sonhos importam." },
    { t: "leva", texto: "O sonho também é a vida." }
  ] },
  { dia: 14, ilus: "figura-espiral", tema: "tradicoes", titulo: "A yoga dos sonhos", minutos: 3, cartas: [
    { t: "abre", titulo: "A yoga dos sonhos", sub: "Tibete" },
    { t: "fala", texto: "No budismo tibetano, a yoga dos sonhos faz parte dos Seis Yogas de Naropa. O praticante aprende a reconhecer o sonho enquanto sonha." },
    { t: "revela", pergunta: "E depois de reconhecer o sonho?", resposta: "Vem o passo mais profundo: perceber que a própria vida desperta também tem a natureza de um sonho. Dormir vira meditação, e a noite, um treino para a hora da morte." },
    { t: "faca", titulo: "Hoje, três vezes", texto: "Pare onde estiver, olhe ao redor e pense com calma: “Isto também é um sonho.” Repare no que muda dentro de você." },
    { t: "leva", texto: "A vida também é feita do mesmo tecido dos sonhos." }
  ] },
  { dia: 15, ilus: "estrela-verde", tema: "tradicoes", titulo: "Os quatro estados", minutos: 2, cartas: [
    { t: "abre", titulo: "Os quatro estados", sub: "Índia" },
    { t: "fala", texto: "A Mandukya Upanishad ensina que a consciência atravessa estados: a vigília, o sonho e o sono profundo." },
    { t: "revela", pergunta: "E o quarto estado?", resposta: "É Turiya, o quarto: a consciência que testemunha os outros três. Quem desperta para Turiya está presente acordado, sonhando e dormindo." },
    { t: "fala", texto: "Eu sou desprovido de dualidade. Minha forma é sem forma. Eu existo em todos os lugares.", de: "Nirvana Shatakam" },
    { t: "leva", texto: "Eu sou o Espírito Livre.", de: "Nirvana Shatakam" }
  ] },
  { dia: 16, ilus: "estrela-cadente", tema: "ciencia", titulo: "A janela das 4 da manhã", minutos: 3, cartas: [
    { t: "abre", titulo: "A janela das 4 da manhã", sub: "Acordar para sonhar" },
    { t: "fala", texto: "Os pesquisadores chamam de “acordar e voltar para a cama”: dormir umas cinco horas, despertar por alguns minutos e voltar a dormir com uma intenção clara." },
    { t: "revela", pergunta: "Por que funciona?", resposta: "Você volta a dormir bem quando o REM fica mais longo, e com a mente um pouco mais desperta. Um estudo australiano de 2017 mostrou que essa técnica, somada à intenção de lembrar que está sonhando, aumentou bastante os sonhos lúcidos." },
    { t: "quiz", pergunta: "É bom fazer isso todas as noites?", opcoes: ["Sim, quanto mais melhor", "Não, o sono picado cansa"], certa: 1, explica: "Faça em algumas noites da semana, de preferência quando puder dormir mais na manhã seguinte." },
    { t: "faca", titulo: "Nesta madrugada", texto: "Ao voltar para a cama, repita com sentimento: “Ao cair no sono estou consciente.”" },
    { t: "leva", texto: "Ao cair no sono estou consciente." }
  ] },
  { dia: 17, ilus: "montanha-fita", tema: "tradicoes", titulo: "Sonhar longe", minutos: 2, cartas: [
    { t: "abre", titulo: "Sonhar longe", sub: "Os Yanomami" },
    { t: "fala", texto: "Entre os Yanomami, os xamãs sonham com os espíritos xapiri e viajam para muito longe durante a noite." },
    { t: "revela", pergunta: "O que Davi Kopenawa diz sobre o sonho dos brancos?", resposta: "Em A queda do céu, ele conta que os brancos dormem muito, mas sonham só consigo mesmos. O sonho do xamã alcança a floresta, os ancestrais e o céu." },
    { t: "faca", titulo: "Hoje à noite", texto: "Antes de dormir, peça para sonhar com algo maior do que você: um lugar, a natureza, os ancestrais." },
    { t: "leva", texto: "Sonhar além de si mesmo." }
  ] },
  { dia: 18, ilus: "fita-estrela-2", tema: "livro", titulo: "Quando o sonho fica instável", minutos: 2, cartas: [
    { t: "abre", titulo: "Quando o sonho fica instável", sub: "Comandos dentro do sonho" },
    { t: "quiz", pergunta: "Você está lúcido e o sonho começa a se desfazer. O que dizer?", opcoes: ["“Acordar!”", "“Clareza, agora!”", "Nada, só esperar"], certa: 1, explica: "Uma declaração direta e firme ajuda a restaurar a lucidez e o controle." },
    { t: "fala", texto: "Stephen LaBerge também estudou gestos para segurar o sonho: girar o corpo ou esfregar as mãos dentro dele." },
    { t: "revela", pergunta: "E se vier o medo?", resposta: "Afirme: “Estou protegido” ou “Estou seguro”. Em vez de fugir de um pesadelo, enfrente. O pesadelo pode ser a porta para a lucidez." },
    { t: "leva", texto: "Esses comandos influenciam a experiência do sonho, e da vida." }
  ] },
  { dia: 19, ilus: "maos-chama", tema: "tradicoes", titulo: "O sonho partilhado", minutos: 2, cartas: [
    { t: "abre", titulo: "O sonho partilhado", sub: "América do Norte e as escrituras" },
    { t: "fala", texto: "Os povos Haudenosaunee e Wendat viam nos sonhos os desejos da alma. No inverno, faziam festas em que cada um apresentava seu sonho, e a comunidade inteira se envolvia." },
    { t: "fala", texto: "Jacó viu em sonho a escada entre a terra e o céu. Na tradição islâmica, o sonho verdadeiro é considerado uma pequena parte da profecia." },
    { t: "revela", pergunta: "O que une todos esses povos?", resposta: "Independentemente do lugar no globo, todos falavam a mesma coisa, apesar das roupagens diferentes: de olhos fechados é possível ir além." },
    { t: "leva", texto: "Em quase todas as escrituras, o divino escolhe a noite para falar." }
  ] },
  { dia: 20, ilus: "estrela-fita", tema: "livro", titulo: "Os guias e os alvos", minutos: 2, cartas: [
    { t: "abre", titulo: "Os guias e os alvos", sub: "Para onde você vai esta noite?" },
    { t: "fala", texto: "Você pode pedir auxílio para sair do corpo. Os guias estão atentos do outro lado, e podemos nos conectar com eles ao pedir sinceramente." },
    { t: "fala", texto: "Faça uma lista de alvos para direcionar suas viagens. Dê o comando antes de dormir e visualize como se já estivesse lá." },
    { t: "alvo" },
    { t: "leva", texto: "Quero conhecer o antigo Egito, andar pelas pirâmides na época em que o império era vivo!" }
  ] },
  { dia: 21, ilus: "figura-estrela", tema: "livro", titulo: "Abrir os olhos", minutos: 2, cartas: [
    { t: "abre", titulo: "Abrir os olhos", sub: "O fechamento" },
    { t: "fala", texto: "Quem olha para a Magia da Vida resgata um conhecimento que preenche uma lacuna mantida por eras, que revela do que somos feitos e o caminho para casa!" },
    { t: "revela", pergunta: "O que significa Arhat?", resposta: "Arhat significa abrir os olhos." },
    { t: "faca", titulo: "Hoje", texto: "Abra o céu das suas noites e olhe a constelação que você formou. Cada ponto foi uma noite em que você se lembrou." },
    { t: "leva", texto: "Só aquele que decidiu abrir os olhos enxerga as portas da Verdade." }
  ] },
  { dia: 22, ilus: "figura-fio", tema: "viajantes", titulo: "Robert Monroe e as vibrações", minutos: 3, cartas: [
    { t: "abre", titulo: "Robert Monroe e as vibrações", sub: "O homem que mapeou a saída do corpo" },
    { t: "fala", texto: "Robert Monroe era um empresário de rádio nos Estados Unidos quando, nos anos 1950, começou a sair do corpo sem querer. Ele registrou tudo e publicou Viagens Fora do Corpo, em 1971." },
    { t: "revela", pergunta: "O que acontecia antes de cada saída?", resposta: "Uma onda de vibrações tomava o corpo, às vezes com zumbido e sensação de choque. Com o tempo ele entendeu que era a porta, e não um perigo. O Osirion chama isso de estado vibracional." },
    { t: "fala", texto: "Monroe chamou de Foco 10 o estado de mente desperta e corpo dormindo. É o mesmo corpo relaxado, mente desperta do Osirion." },
    { t: "faca", titulo: "Hoje à noite", texto: "Se vierem as vibrações, não se assuste e não se mexa. Respire e deixe que elas cresçam e se espalhem pelo corpo inteiro." },
    { t: "leva", texto: "A vibração é a porta, não o perigo." }
  ] },
  { dia: 23, ilus: "figura-deitada", tema: "viajantes", titulo: "Rolar para fora", minutos: 2, cartas: [
    { t: "abre", titulo: "Rolar para fora", sub: "Uma técnica de Robert Monroe" },
    { t: "fala", texto: "Quando o corpo físico já dorme e as vibrações chegam, Monroe ensinava a sair de um jeito simples: rolar, como quem vira na cama." },
    { t: "revela", pergunta: "Como fazer sem mexer o corpo?", resposta: "Você imagina e sente o giro de lado, sem mover um músculo. O corpo sutil acompanha o movimento e se solta do físico, como uma folha que desliza para fora de um livro." },
    { t: "quiz", pergunta: "E se você mexer o corpo físico sem querer?", opcoes: ["Acabou, perdeu a noite", "Relaxe de novo e espere as vibrações voltarem"], certa: 1, explica: "É comum no começo. Fique imóvel, respire e tente de novo quando a sensação voltar." },
    { t: "faca", titulo: "Hoje à noite", texto: "Quando sentir as vibrações ou o corpo pesado e distante, imagine que rola para o lado e caia suavemente no chão do quarto." },
    { t: "leva", texto: "Agora eu me separo facilmente do meu corpo." }
  ] },
  { dia: 24, ilus: "figura-cruz", tema: "viajantes", titulo: "A caixa das preocupações", minutos: 2, cartas: [
    { t: "abre", titulo: "A caixa das preocupações", sub: "Do método de Robert Monroe" },
    { t: "fala", texto: "No programa que Monroe criou no seu instituto, a primeira coisa a fazer antes de uma prática é guardar o que pesa." },
    { t: "revela", pergunta: "Como funciona?", resposta: "Você imagina uma caixa forte, com tampa. Coloca dentro dela, uma por uma, as preocupações do dia: contas, conversas, medos. Fecha a tampa e deixa a caixa do lado de fora da prática. Amanhã elas continuam lá, se você quiser buscá-las." },
    { t: "faca", titulo: "Agora", texto: "Feche os olhos e guarde três preocupações na caixa. Feche a tampa.", segundos: 40 },
    { t: "leva", texto: "Deixe o dia na entrada." }
  ] },
  { dia: 25, ilus: "fita-estrela-dourada", tema: "viajantes", titulo: "O alvo de William Buhlman", minutos: 3, cartas: [
    { t: "abre", titulo: "O alvo de William Buhlman", sub: "Escolher para onde ir" },
    { t: "fala", texto: "William Buhlman pesquisa a experiência fora do corpo há décadas e escreveu Aventuras Além do Corpo. Ele ensina que a intenção clara é o que mais leva alguém para fora." },
    { t: "revela", pergunta: "O que é a técnica do alvo?", resposta: "Escolha um lugar real que você conhece bem, como outro cômodo da casa, e três objetos dele. Durante o dia, observe esses objetos com atenção. À noite, ao deitar, sinta-se lá, tocando cada um." },
    { t: "fala", texto: "Repare: é o mesmo exercício do Segundo Ato do Osirion, caminhar em outro cômodo com o corpo sutil. Tradições diferentes chegando ao mesmo caminho." },
    { t: "faca", titulo: "Hoje", texto: "Escolha um cômodo e três objetos. Olhe para eles hoje como se fosse a primeira vez." },
    { t: "leva", texto: "Para onde vai a atenção, vai o corpo sutil." }
  ] },
  { dia: 26, ilus: "estrela-terra", tema: "viajantes", titulo: "Comandos em voz firme", minutos: 2, cartas: [
    { t: "abre", titulo: "Comandos em voz firme", sub: "Buhlman e o Osirion" },
    { t: "fala", texto: "Buhlman recomenda frases curtas, ditas com firmeza, ao adormecer e dentro da experiência. Elas acordam a atenção." },
    { t: "quiz", pergunta: "Qual comando o Osirion ensina quando o sonho fica instável?", opcoes: ["“Quero acordar”", "“Clareza, agora!”", "“Não estou aqui”"], certa: 1, explica: "Buhlman ensina o mesmo pedido: clareza e consciência, agora. Dito com convicção, o ambiente se firma." },
    { t: "fala", texto: "Ao adormecer, repita em silêncio: “Agora estou fora do corpo.” Dentro da experiência: “Clareza, agora!” ou “Consciência, agora!”." },
    { t: "leva", texto: "Clareza, agora!" }
  ] },
  { dia: 27, ilus: "figura-fio", tema: "viajantes", titulo: "O som que solta o corpo", minutos: 2, cartas: [
    { t: "abre", titulo: "O som que solta o corpo", sub: "Monroe, o Om e as cigarras" },
    { t: "fala", texto: "Monroe usava um exercício de ressonância: cantar um som grave e longo, sentindo a vibração no peito e na cabeça, antes de praticar." },
    { t: "fala", texto: "O Osirion faz o mesmo com o Om no Quinto Ato, e conta que os Maias usavam o canto das cigarras para atravessar." },
    { t: "faca", titulo: "Agora", texto: "Inspire fundo e solte o ar num “ommm” grave, longo. Faça três vezes e repare onde o corpo vibra.", segundos: 45 },
    { t: "leva", texto: "Entre na vibração do som até ouvir o zumbido do outro lado." }
  ] },
  { dia: 28, ilus: "figura-mergulho", tema: "viajantes", titulo: "Lembrar de lembrar", minutos: 3, cartas: [
    { t: "abre", titulo: "Lembrar de lembrar", sub: "A técnica de Stephen LaBerge" },
    { t: "fala", texto: "Stephen LaBerge, o pesquisador de Stanford que provou o sonho lúcido com o movimento dos olhos, criou uma técnica chamada MILD: indução do sonho lúcido pela memória." },
    { t: "revela", pergunta: "Como fazer?", resposta: "Ao acordar de um sonho, de madrugada, relembre-o. Depois, voltando a dormir, repita: “Da próxima vez que eu sonhar, vou lembrar que estou sonhando.” E imagine-se de volta naquele sonho, percebendo que é sonho." },
    { t: "fala", texto: "Ela funciona ainda melhor somada ao despertar de madrugada do Osirion." },
    { t: "faca", titulo: "Nesta madrugada", texto: "Quando o Osirion te despertar, relembre o último sonho e repita a frase até adormecer." },
    { t: "leva", texto: "Da próxima vez que eu sonhar, vou lembrar que estou sonhando." }
  ] },
  { dia: 29, ilus: "estrela-cadente", tema: "viajantes", titulo: "O que todos os viajantes dizem", minutos: 2, cartas: [
    { t: "abre", titulo: "O que todos os viajantes dizem", sub: "Monroe, Buhlman, Castaneda, LaBerge e o Osirion" },
    { t: "fala", texto: "Caminhos diferentes, as mesmas chaves: relaxar o corpo sem apagar a mente, ter uma intenção clara, não ter medo das vibrações e lembrar de perguntar se está sonhando." },
    { t: "revela", pergunta: "E a chave mais esquecida?", resposta: "A constância. Quase todos contam que a primeira experiência veio depois de semanas de prática. Quanto mais tempo praticar, mais viverá seus resultados." },
    { t: "leva", texto: "Dedique-se, pois sem dedicação, nada obterá!" }
  ] },
  { dia: 30, ilus: "maos-chama", tema: "viajantes", titulo: "Dom Juan e as mãos", minutos: 3, cartas: [
    { t: "abre", titulo: "Dom Juan e as mãos", sub: "Carlos Castaneda, a arte de sonhar" },
    { t: "fala", texto: "Nos livros de Carlos Castaneda, o antropólogo conta o que aprendeu com Dom Juan Matus, um mestre yaqui do México. Se Dom Juan existiu ou não é debatido até hoje. Os exercícios, esses, viraram prática de sonhadores no mundo inteiro." },
    { t: "fala", texto: "A primeira tarefa que Dom Juan dá é simples e difícil: dentro do sonho, encontrar as próprias mãos. Ele dizia que olhar as mãos no sonho é o começo do controle." },
    { t: "revela", pergunta: "E se o sonho começar a mudar quando você olhar?", resposta: "Dom Juan ensina a não fixar o olhar em nada por muito tempo. Olhe um detalhe só de relance, depois volte às mãos. As mãos são a âncora: cada vez que a cena se desfaz, você volta a elas." },
    { t: "faca", titulo: "Esta noite", texto: "Antes de dormir, olhe as suas mãos por um minuto e diga: “Hoje eu vou ver as minhas mãos no sonho.” É o mesmo gesto do teste de realidade, levado para dentro do sonho." },
    { t: "leva", texto: "Encontrar as mãos no sonho é acender a atenção lá dentro." }
  ] },
  { dia: 31, ilus: "figura-espiral", tema: "viajantes", titulo: "Os portões do sonhar", minutos: 3, cartas: [
    { t: "abre", titulo: "Os portões do sonhar", sub: "Castaneda, A Arte de Sonhar" },
    { t: "fala", texto: "Em A Arte de Sonhar, Dom Juan descreve o sonhar como uma travessia por portões. Cada portão é um obstáculo de energia que a atenção precisa vencer." },
    { t: "revela", pergunta: "Qual é o primeiro portão?", resposta: "Perceber que você está adormecendo, ou ter um sonho tão vivo que você percebe que está dentro dele. Para Dom Juan, é ali que nasce a “atenção do sonhar”." },
    { t: "revela", pergunta: "E o segundo?", resposta: "Acordar de um sonho para dentro de outro sonho, ou trocar de sonho de propósito, sem voltar ao corpo." },
    { t: "revela", pergunta: "E o terceiro?", resposta: "Ver o próprio corpo dormindo. É a mesma cena que o Osirion descreve na saída do corpo." },
    { t: "quiz", pergunta: "Em qual portão está quem se levanta no sonho e vê o próprio corpo na cama?", opcoes: ["No primeiro", "No segundo", "No terceiro"], certa: 2, explica: "Ver o próprio corpo dormindo é o terceiro portão de Dom Juan." },
    { t: "leva", texto: "Um portão de cada vez. A atenção cresce como um músculo." }
  ] },
  { dia: 32, ilus: "figura-fio", tema: "viajantes", titulo: "Recapitular a vida", minutos: 3, cartas: [
    { t: "abre", titulo: "Recapitular a vida", sub: "A energia para sonhar, segundo Dom Juan" },
    { t: "fala", texto: "Dom Juan dizia que, para sonhar com lucidez, é preciso energia. E que a nossa energia fica presa em lembranças, mágoas e conversas que ainda giram na cabeça." },
    { t: "fala", texto: "A prática para soltar essa energia se chama recapitulação: lembrar, uma a uma, as pessoas e as cenas da vida, com a respiração." },
    { t: "faca", titulo: "Recapitulação", texto: "Lembre uma cena que ainda pesa. Inspire girando a cabeça devagar de um ombro ao outro, como se puxasse de volta a energia que deixou lá. Expire girando para o outro lado, soltando o que não é seu. Repita até a cena ficar leve." },
    { t: "revela", pergunta: "O que é o “intento”?", resposta: "Para Dom Juan, é a intenção firme, sem dúvida, que move a atenção. É o mesmo que o Osirion pede com o comando antes de dormir: dizer com convicção, como se já fosse verdade." },
    { t: "leva", texto: "Quem recolhe a própria energia tem com o que sonhar." }
  ] },
  { dia: 33, ilus: "olho", tema: "viajantes", titulo: "Ver, não só olhar", minutos: 3, cartas: [
    { t: "abre", titulo: "Ver, não só olhar", sub: "Castaneda, Uma Estranha Realidade" },
    { t: "fala", texto: "Em Uma Estranha Realidade, Dom Juan separa duas coisas: olhar e ver. Olhar é o jeito comum, que só confirma o que a gente já sabe. Ver é perceber o mundo como ele é, sem a descrição que aprendemos." },
    { t: "revela", pergunta: "O que Dom Juan dizia que se percebe quando se vê?", resposta: "Que as pessoas e as coisas são feitas de energia: fibras de luz, como ovos luminosos. Ver não depende dos olhos; é um outro jeito de perceber, que aparece quando a mente se cala." },
    { t: "quiz", pergunta: "Para Dom Juan, o que mais impede de ver?", opcoes: ["Os olhos cansados", "A conversa que não para dentro da cabeça", "A falta de luz"], certa: 1, explica: "O diálogo interno. Enquanto a mente narra o mundo, ela só repete o que já conhece." },
    { t: "faca", titulo: "Hoje", texto: "Olhe uma árvore sem dizer “árvore” por dentro. Desfoque um pouco o olhar, sem fixar em nada, e repare no que aparece quando o nome some." },
    { t: "leva", texto: "Olhar confirma o mundo. Ver o abre." }
  ] },
  { dia: 34, ilus: "meditacao-figura", tema: "viajantes", titulo: "Parar o diálogo interno", minutos: 3, cartas: [
    { t: "abre", titulo: "Parar o diálogo interno", sub: "O silêncio que abre a porta" },
    { t: "fala", texto: "Dom Juan ensinava que repetimos o mundo para nós mesmos o tempo todo, numa conversa interna sem fim. É ela que mantém o mundo sempre igual." },
    { t: "fala", texto: "Quando o diálogo para, Dom Juan dizia que o mundo “para” também. É nesse silêncio que o sonhar e o ver ficam possíveis." },
    { t: "revela", pergunta: "Como ele ensinava a calar a conversa?", resposta: "Escutando. Prestar atenção aos sons do mundo, e principalmente aos espaços entre eles, ocupa a mente de um jeito que ela esquece de falar." },
    { t: "faca", titulo: "Ao deitar", texto: "De olhos fechados, escute o som mais distante que existir. Depois o silêncio entre um som e outro. Fique ali. É o mesmo silêncio do limiar do sono." },
    { t: "leva", texto: "No silêncio entre os sons, a porta se abre." }
  ] },
  { dia: 35, ilus: "estrela-sol", tema: "mantras", titulo: "O som do AUM", minutos: 3, cartas: [
    { t: "abre", titulo: "O som do AUM", sub: "A Mandukya Upanishad" },
    { t: "fala", texto: "A Mandukya Upanishad explica o Om em quatro partes. O A é a vigília. O U é o sonho. O M é o sono profundo." },
    { t: "revela", pergunta: "E o silêncio depois do M?", resposta: "É o quarto estado, Turiya: a consciência que fica acordada através dos outros três. É exatamente o que o Osirion busca: estar presente também no sonho." },
    { t: "quiz", pergunta: "Qual som do AUM corresponde ao sonho?", opcoes: ["O A", "O U", "O M"], certa: 1, explica: "O U, o som do meio, a ponte entre o dia e o sono profundo." },
    { t: "faca", titulo: "Antes de dormir", texto: "Entoe o AUM três vezes, devagar. Sinta o A no peito, o U na garganta e o M na cabeça. Depois fique no silêncio que vem em seguida, até o sono chegar." },
    { t: "leva", texto: "No silêncio depois do M, a consciência continua acordada." }
  ] },
  { dia: 36, ilus: "figura-deitada", tema: "mantras", titulo: "Yoga Nidra", minutos: 3, cartas: [
    { t: "abre", titulo: "Yoga Nidra", sub: "O sono yogue" },
    { t: "fala", texto: "Nidra quer dizer sono. A Yoga Nidra é deitar e descer até a beira do sono sem cair nele: o corpo dorme, a consciência fica." },
    { t: "fala", texto: "Ela foi organizada no século 20 por Swami Satyananda Saraswati, a partir de práticas tântricas antigas de levar a atenção pelo corpo, parte por parte." },
    { t: "revela", pergunta: "O que é o sankalpa?", resposta: "Uma intenção curta e positiva, dita no começo e no fim da prática. Plantada no limiar do sono, ela entra fundo, como uma semente. Por exemplo: “Eu desperto dentro dos meus sonhos.”" },
    { t: "faca", titulo: "Seu sankalpa", texto: "Escolha uma frase curta, no presente, e use sempre a mesma. Repita três vezes ao deitar, com convicção." },
    { t: "leva", texto: "O corpo dorme. A consciência fica." }
  ] },
  { dia: 37, ilus: "espiral-figura", tema: "mantras", titulo: "So Ham", minutos: 2, cartas: [
    { t: "abre", titulo: "So Ham", sub: "O mantra da respiração" },
    { t: "fala", texto: "So Ham quer dizer “Eu sou Aquilo”. A tradição diz que a própria respiração já repete esse mantra: So na entrada do ar, Ham na saída." },
    { t: "revela", pergunta: "Por que ele ajuda a adormecer consciente?", resposta: "Porque não exige esforço: você só acompanha o que o corpo já faz. A mente fica ocupada com o som suave, e o corpo vai dormindo sozinho." },
    { t: "faca", titulo: "Ao deitar", texto: "Inspire ouvindo por dentro “So”. Expire ouvindo “Ham”. Não controle o ar, só escute. Se se perder, volte ao próximo So." },
    { t: "leva", texto: "Eu sou Aquilo." }
  ] },
  { dia: 38, ilus: "rio", tema: "mantras", titulo: "Taraka, o mantra que atravessa", minutos: 2, cartas: [
    { t: "abre", titulo: "Taraka", sub: "O mantra que faz atravessar" },
    { t: "fala", texto: "Taraka vem de “tar”, atravessar. Em Kashi, a cidade de Shiva à beira do Ganges, conta-se que Shiva sussurra o mantra Taraka ao ouvido de quem parte, e a alma atravessa." },
    { t: "revela", pergunta: "O que isso tem a ver com o sono?", resposta: "Para muitas tradições, adormecer é uma pequena travessia. Um mantra na hora de dormir é como um barqueiro: leva a consciência de uma margem à outra sem que ela se perca." },
    { t: "faca", titulo: "Esta noite", texto: "Escolha o seu mantra de travessia, o Om ou o Om Namah Shivaya, e repita em silêncio até o último pensamento do dia." },
    { t: "leva", texto: "Adormecer também é atravessar o rio." }
  ] },
  { dia: 39, ilus: "fita-estrela-lilas", tema: "mantras", titulo: "A sílaba na garganta", minutos: 2, cartas: [
    { t: "abre", titulo: "A sílaba na garganta", sub: "A yoga dos sonhos tibetana" },
    { t: "fala", texto: "Na yoga dos sonhos ensinada por Tenzin Wangyal Rinpoche, da tradição Bön do Tibete, a garganta é o centro do sonho." },
    { t: "revela", pergunta: "O que se faz ao deitar?", resposta: "Visualiza-se, na garganta, uma sílaba sagrada vermelha e luminosa, a letra A, sobre um lótus. A atenção repousa nela até o sono vir. É um jeito de entrar no sono com uma luz acesa." },
    { t: "faca", titulo: "Ao deitar", texto: "Leve a atenção à garganta. Imagine ali uma pequena luz vermelha, quente e calma. Não force: deixe a luz ficar enquanto o corpo adormece." },
    { t: "leva", texto: "Entre no sono com uma luz acesa." }
  ] },
  { dia: 40, ilus: "estrela-verde", tema: "tradicoes", titulo: "O way dos maias", minutos: 3, cartas: [
    { t: "abre", titulo: "O way dos maias", sub: "O companheiro que viaja à noite" },
    { t: "fala", texto: "Para os maias, cada pessoa tinha um way: um espírito companheiro, muitas vezes um animal, como a onça, que sai e viaja enquanto o corpo dorme." },
    { t: "revela", pergunta: "Como os maias escreviam a palavra way?", resposta: "Com um rosto humano coberto pela metade por pele de onça. Meio gente, meio jaguar: o eu do dia e o eu da noite no mesmo rosto." },
    { t: "fala", texto: "Os maias também usavam sons e vibrações para alcançar estados de consciência expandida, como conta o Osirion sobre o canto das cigarras." },
    { t: "faca", titulo: "Esta noite", texto: "Antes de dormir, pergunte: “Quem viaja comigo esta noite?” Não escolha a resposta. Anote de manhã o que aparecer." },
    { t: "leva", texto: "Meio dia, meio noite: os dois são você." }
  ] },
  { dia: 41, ilus: "estrela-terra", tema: "tradicoes", titulo: "O espelho fumegante", minutos: 3, cartas: [
    { t: "abre", titulo: "O espelho fumegante", sub: "Os sonhadores do México antigo" },
    { t: "fala", texto: "Entre os astecas, o nahualli era quem sabia mudar de forma e viajar em sonho. Os toltecas, mais antigos, são o povo a quem Castaneda liga os ensinamentos de Dom Juan." },
    { t: "revela", pergunta: "Quem era Tezcatlipoca?", resposta: "O senhor da noite, cujo nome quer dizer “espelho fumegante”. Um espelho escuro de obsidiana, onde se via o que não aparece de dia." },
    { t: "fala", texto: "O frei Bernardino de Sahagún, que registrou a vida dos astecas no século 16, conta que havia gente dedicada a cuidar dos sonhos da comunidade." },
    { t: "faca", titulo: "Hoje", texto: "Olhe para uma superfície escura, uma janela à noite ou a tela apagada do celular, e lembre: o sonho é esse espelho. O que aparece nele também é você." },
    { t: "leva", texto: "A noite é um espelho." }
  ] },
  { dia: 42, ilus: "montanha-fita", tema: "tradicoes", titulo: "Mosqoy: o sonho nos Andes", minutos: 3, cartas: [
    { t: "abre", titulo: "Mosqoy", sub: "O sonho nos Andes" },
    { t: "fala", texto: "Em quíchua, a língua dos incas, sonho é mosqoy. Nos Andes, o sonho é um lugar onde se recebem mensagens." },
    { t: "revela", pergunta: "De quem vêm essas mensagens?", resposta: "Dos apus, os espíritos das montanhas, de Pachamama e dos ancestrais. As montanhas são vistas como seres vivos que cuidam de quem vive aos seus pés." },
    { t: "fala", texto: "Até hoje, entre os q’ero, os paqos, os sacerdotes andinos, muitos contam que o chamado para o caminho veio num sonho." },
    { t: "faca", titulo: "Esta noite", texto: "Pense numa montanha que você ama, ou numa que gostaria de conhecer. Antes de dormir, peça licença a ela para visitá-la em sonho." },
    { t: "leva", texto: "As montanhas também sonham." }
  ] },
  { dia: 43, ilus: "figura-deitada", tema: "tradicoes", titulo: "Hypnos e Morfeu", minutos: 3, cartas: [
    { t: "abre", titulo: "Hypnos e Morfeu", sub: "Os deuses do sono na Grécia" },
    { t: "fala", texto: "Para os gregos, o Sono era um deus: Hypnos, filho da Noite, Nyx. O irmão gêmeo dele era Thanatos, a Morte. Dormir era visitar, toda noite, a casa do irmão da morte." },
    { t: "fala", texto: "O poeta Ovídio conta que Hypnos vivia numa caverna sem sol, à beira do Lete, o rio do esquecimento, cercado de papoulas. Ele vinha ao mortal e tocava a sua testa, e o corpo se entregava." },
    { t: "revela", pergunta: "E quem trazia os sonhos?", resposta: "Os filhos de Hypnos. Morfeu tomava a forma de pessoas, e é dele que vem a palavra morfina. Fobetor aparecia como animais, e Fantasos como coisas e paisagens." },
    { t: "quiz", pergunta: "O rio do esquecimento, ao lado da caverna do Sono, explica o quê?", opcoes: ["Por que sonhamos com água", "Por que esquecemos os sonhos ao acordar", "Por que dormimos à noite"], certa: 1, explica: "Quem bebe do Lete esquece. É o que o diário dos primeiros 5 minutos vence: lembrar antes de o rio levar." },
    { t: "leva", texto: "Lembrar é atravessar o Lete de volta." }
  ] },
  { dia: 44, ilus: "olho", tema: "tradicoes", titulo: "O Ba e a palavra que desperta", minutos: 3, cartas: [
    { t: "abre", titulo: "O Ba e a palavra que desperta", sub: "O sono no Egito antigo" },
    { t: "fala", texto: "Os egípcios diziam que a pessoa tinha um Ba, desenhado como um pássaro com rosto humano. O Ba podia sair do corpo e voar, e voltar a ele. Era assim que viam a alma que viaja." },
    { t: "revela", pergunta: "Como os egípcios chamavam o sonho?", resposta: "Resut. A palavra vem da mesma raiz de “despertar”. Para eles, sonhar era acordar num outro lugar." },
    { t: "fala", texto: "Os egípcios viam Osíris no céu, na constelação de Órion, que chamavam de Sah. Uma teoria famosa liga as três pirâmides de Gizé às três estrelas do cinturão de Órion." },
    { t: "fala", texto: "Ao dormir, a alma descia como o Sol, que toda noite atravessava o Duat, o mundo da noite governado por Osíris, e renascia de manhã. Bes, o pequeno deus protetor, era esculpido nos apoios de cabeça para guardar quem dormia." },
    { t: "fala", texto: "No Serapeum de Saqqara, peregrinos dormiam no templo para receber em sonho a resposta de Serápis. É a mesma incubação dos templos gregos." },
    { t: "leva", texto: "Sonhar é despertar do outro lado." }
  ] },
  { dia: 45, ilus: "fita-estrela-dourada", tema: "tradicoes", titulo: "Os guardiões do sono", minutos: 3, cartas: [
    { t: "abre", titulo: "Os guardiões do sono", sub: "Da Mesopotâmia ao Japão" },
    { t: "fala", texto: "Na Mesopotâmia, Mamu era a deusa dos sonhos, filha do deus Sol, Shamash. Zaqiqu era o deus que levava os sonhos até quem dormia, como um sopro." },
    { t: "fala", texto: "Na Índia, Nidra é a deusa do sono. Vishnu dorme sobre a serpente Shesha, no oceano cósmico, e enquanto dorme, sonha o universo. É por isso que se fala em Yoga Nidra: o sono do próprio deus." },
    { t: "revela", pergunta: "E no Japão?", resposta: "Ali vive o Baku, um ser feito de partes de vários animais que come os pesadelos. Quem acordava assustado pedia: “Baku, coma o meu sonho.”" },
    { t: "faca", titulo: "Esta noite", texto: "Antes de dormir, chame o seu guardião, com o nome que fizer sentido para você: “Guarde o meu sono e me leve com consciência.”" },
    { t: "leva", texto: "Toda civilização deu um guardião para a noite." }
  ] },
  { dia: 46, ilus: "figura-cruz", tema: "tradicoes", titulo: "A Mara e quem vem à noite", minutos: 3, cartas: [
    { t: "abre", titulo: "A Mara e quem vem à noite", sub: "Os que vinham buscar o corpo no sono" },
    { t: "fala", texto: "Nos povos do norte da Europa, a Mara era um espírito que sentava no peito de quem dormia e o impedia de se mexer. Dela vem a palavra inglesa nightmare, o pesadelo." },
    { t: "revela", pergunta: "O que a ciência diz sobre isso hoje?", resposta: "É a paralisia do sono: a mente acorda enquanto o corpo ainda está no modo REM, paralisado. A pressão no peito e as presenças vêm desse estado entre dois mundos. Muitos viajantes contam que é justamente dali que se sai do corpo." },
    { t: "fala", texto: "Em outros cantos, quem vinha à noite era gentil: o João Pestana, ou o Homem da Areia das histórias europeias, jogava areia nos olhos das crianças, e o Ole Fecha-Olho, de Andersen, abria um guarda-chuva de sonhos sobre elas." },
    { t: "faca", titulo: "Se acontecer", texto: "Se acordar sem se mexer, não lute. Diga: “Estou protegido.” Respire devagar e use o momento: imagine que rola para fora do corpo." },
    { t: "leva", texto: "O que os antigos temiam é a porta que o viajante usa." }
  ] },
  // Os ensinamentos que abriam o app (a travessia antiga) viraram cápsulas: entram na programação, na ordem do Arhat.
  { dia: 47, ilus: "fita-estrela-2", tema: "viajantes", titulo: "Procure as suas mãos", minutos: 1, cartas: [
    { t: "abre", titulo: "Procure as suas mãos", sub: "O primeiro portão" },
    { t: "fala", texto: "Nos livros de Carlos Castaneda, Don Juan fala de portões do sonhar. O primeiro se abre quando você percebe que está adormecendo." },
    { t: "fala", texto: "E ele dá um conselho que ficou famoso: procurar as próprias mãos dentro do sonho." },
    { t: "leva", texto: "Por isso o Osirion vai te pedir, várias vezes ao dia, para olhar as suas mãos." }
  ] },
  { dia: 48, ilus: "maos-chama", tema: "livro", titulo: "Silenciar e perfumar o caminho", minutos: 1, cartas: [
    { t: "abre", titulo: "Silenciar e perfumar o caminho", sub: "A preparação da noite" },
    { t: "fala", texto: "Nos templos do sono, ninguém entrava direto. Depois da água vinham o silêncio e a fumaça." },
    { t: "fala", texto: "Ninguém conversava nos pátios internos, e o incenso ou as ervas queimadas limpavam o ar e a atenção." },
    { t: "faca", titulo: "Esta noite", texto: "Uma hora antes de dormir, desligue as telas. Acenda um incenso ou uma erva e deixe o quarto em silêncio." }
  ] },
  { dia: 49, ilus: "meditacao-fita", tema: "livro", titulo: "Corpo relaxado, mente desperta", minutos: 1, cartas: [
    { t: "abre", titulo: "Corpo relaxado, mente desperta", sub: "O estado que abre a porta" },
    { t: "traco", img: "tensoes", texto: "Onde há tensão, a energia trava. Solte cada ponto antes de adormecer." },
    { t: "fala", texto: "O sono não é um apagão. É uma travessia: o corpo adormece e a mente pode continuar desperta." },
    { t: "fala", texto: "O Osirion chama esse estado de corpo relaxado, mente desperta. Todas as práticas da noite levam até ele." },
    { t: "leva", texto: "O corpo dorme. Eu continuo aqui." }
  ] },
  { dia: 50, ilus: "fitas", tema: "livro", titulo: "O que aparece ao adormecer", minutos: 1, cartas: [
    { t: "abre", titulo: "O que aparece ao adormecer", sub: "As imagens na parede" },
    { t: "fala", texto: "Surgem cores, rostos e paisagens que mudam sozinhos. São as imagens hipnagógicas." },
    { t: "fala", texto: "Não segure e não fuja: apenas olhe, e deixe que fiquem mais nítidas." },
    { t: "fala", texto: "Vibrações, zumbidos e até alguém chamando seu nome são sinais de que você está perto." },
    { t: "leva", texto: "Apenas olhe. A imagem é a porta." }
  ] },
  { dia: 51, ilus: "estrela-lilas", tema: "livro", titulo: "No fundo, uma luz", minutos: 1, cartas: [
    { t: "abre", titulo: "No fundo, uma luz", sub: "O nevoeiro" },
    { t: "fala", texto: "Em algum momento, ao adormecer, uma esfera de luz ocupa tudo. É o nevoeiro: o limiar entre este mundo e o outro." },
    { t: "fala", texto: "Cada pessoa tem o seu, e cada nevoeiro tem uma cor." },
    { t: "faca", titulo: "Ao acordar", texto: "Se você vir o seu nevoeiro, guarde a cor. O Osirion vai te perguntar." }
  ] },
  { dia: 52, ilus: "meditacao-figura", tema: "livro", titulo: "Deixe o dia na entrada", minutos: 1, cartas: [
    { t: "abre", titulo: "Deixe o dia na entrada", sub: "O sopro" },
    { t: "fala", texto: "Antes de deitar, o dia ainda está em você: as conversas, as telas, as pressas." },
    { t: "faca", titulo: "Agora", texto: "Respire fundo três vezes. A cada expiração, solte um pedaço do dia.", segundos: 30 },
    { t: "leva", texto: "O que é do dia fica na entrada." }
  ] },
  { dia: 53, ilus: "estrela-cadente", tema: "livro", titulo: "Uma técnica por semana", minutos: 1, cartas: [
    { t: "abre", titulo: "Uma técnica por semana", sub: "Antes de dormir" },
    { t: "fala", texto: "Antes de dormir, você vai praticar técnicas dos pesquisadores do sono, dos grandes viajantes e das tradições antigas." },
    { t: "fala", texto: "O ideal é ficar uma semana com cada uma: é o tempo para a mente aprender e os resultados começarem a aparecer." },
    { t: "leva", texto: "Uma técnica, sete noites." }
  ] },
  { dia: 54, ilus: "olho", tema: "livro", titulo: "O Osirion", minutos: 1, cartas: [
    { t: "abre", titulo: "O Osirion", sub: "O santuário sob a terra" },
    { t: "fala", texto: "Osirion é um santuário escondido sob a terra, no Egito, dedicado a Osíris, o deus que atravessa o mundo da noite para renascer." },
    { t: "fala", texto: "Os egípcios viam Osíris no céu, na constelação de Órion." },
    { t: "fala", texto: "Toda noite, ao dormir, fazemos essa mesma travessia, mas sem consciência." },
    { t: "leva", texto: "O Osirion ensina a cruzar esse limiar desperto: descer além da superfície e voltar trazendo tudo o que foi visto do outro lado." }
  ] },
  // A energia: a circulação, os centros e o estado vibracional (com desenhos: t "desenho", d = nome do desenho em index.html).
  { dia: 55, ilus: "espiral-figura", tema: "livro", titulo: "A energia que circula", minutos: 2, cartas: [
    { t: "abre", titulo: "A energia que circula", sub: "O corpo de energia" },
    { t: "fala", texto: "Além do corpo físico, as tradições descrevem um corpo de energia: correntes sutis que percorrem o corpo como rios." },
    { t: "desenho", d: "circulacao", texto: "A energia entra pela terra e pelo alto da cabeça, sobe pelas costas e desce pela frente do corpo, num circuito contínuo." },
    { t: "traco", img: "orbita-estrelas", texto: "A energia sobe pelas costas, desce pela frente e se liga às estrelas acima da cabeça." },
    { t: "fala", texto: "Quando essa corrente flui, o corpo fica leve e a mente clara. Quando trava, vêm o peso, o cansaço e o sono pesado, sem lembranças." },
    { t: "faca", titulo: "Agora", texto: "Inspire imaginando a luz subindo pelas costas até o alto da cabeça. Expire deixando-a descer pela frente do corpo até o ventre. Faça o circuito algumas vezes.", segundos: 60 },
    { t: "leva", texto: "A energia segue a atenção." }
  ] },
  { dia: 56, ilus: "fita-estrela", tema: "livro", titulo: "Os centros de energia", minutos: 2, cartas: [
    { t: "abre", titulo: "Os centros de energia", sub: "Por que desobstruir" },
    { t: "fala", texto: "Ao longo do corpo há centros onde as correntes de energia se encontram, da base da coluna ao alto da cabeça. Na Índia, eles se chamam chakras." },
    { t: "desenho", d: "centros", texto: "Sete centros, da base à coroa. Cada um se abre com atenção e respiração." },
    { t: "traco", img: "mente-coracao", texto: "Os olhos, a mente e o coração juntos: a atenção inteira num ponto só." },
    { t: "fala", texto: "Quando um centro está obstruído, a energia não sobe. Por isso as meditações do dia desobstruem os centros: com eles livres, a consciência consegue atravessar a noite acordada." },
    { t: "revela", pergunta: "Por que liberar os centros antes de viajar?", resposta: "Porque a lucidez e a saída do corpo pedem energia livre, circulando. Um centro travado segura a consciência no corpo pesado." },
    { t: "leva", texto: "Centro livre, consciência livre." }
  ] },
  { dia: 57, ilus: "ondas", tema: "viajantes", titulo: "O estado vibracional", minutos: 2, cartas: [
    { t: "abre", titulo: "O estado vibracional", sub: "A porta da saída do corpo" },
    { t: "fala", texto: "Pouco antes de sair do corpo, muitos viajantes contam a mesma coisa: uma onda de vibração que toma o corpo inteiro." },
    { t: "desenho", d: "vibracao", texto: "As vibrações começam numa parte do corpo e se espalham. Às vezes vêm com zumbido, calor ou sensação de choque." },
    { t: "traco", img: "corpo-eletrico", texto: "O corpo tem um campo em volta. Nas vibrações, é esse campo que você sente." },
    { t: "fala", texto: "Não é perigo: é o corpo de energia se soltando do físico. Quem se assusta volta. Quem respira e deixa vir atravessa." },
    { t: "faca", titulo: "Quando vierem", texto: "Fique imóvel. Respire devagar. Imagine as vibrações cada vez mais rápidas e suaves, até virarem um zumbido fino. Então role para fora, ou flutue até o teto." },
    { t: "fala", texto: "Dá para treinar acordado: deite, relaxe e imagine uma onda subindo dos pés à cabeça, cada vez mais rápida." },
    { t: "leva", texto: "A vibração é a porta se abrindo." }
  ] },
  // As tradições do sonho: só o que as fontes documentam (a Vivian revisa antes de publicar)
  {"dia": 58, "ilus": "olho", "tema": "tradicoes", "titulo": "O papiro dos sonhos", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O papiro dos sonhos", "sub": "Egito, por volta de 1220 a.C."}, {"t": "fala", "texto": "No Museu Britânico está o papiro Chester Beatty III, escrito por volta de 1220 a.C., no tempo de Ramsés II. Ele veio de Deir el-Medina, a vila dos artesãos que construíam as tumbas reais."}, {"t": "fala", "texto": "Pertenceu ao escriba Qenherkhepshef e depois passou ao segundo marido da viúva dele e ao filho, que acrescentaram os seus nomes. Era um livro guardado em família."}, {"t": "revela", "pergunta": "Como era o livro?", "resposta": "Cada linha começava assim: “Se um homem se vê em sonho…”. Depois vinha a cena e se ela era boa ou ruim. As ruins eram escritas em tinta vermelha."}, {"t": "fala", "texto": "Para quem acordava de um pesadelo, o papiro trazia um remédio: recitar uma fórmula e esfregar o rosto para afastar o sonho ruim."}, {"t": "leva", "texto": "Há mais de três mil anos alguém anotava os sonhos ao acordar."}]},
  {"dia": 59, "ilus": "figura-deitada", "tema": "tradicoes", "titulo": "O sonho na Esfinge", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O sonho na Esfinge", "sub": "A estela de Tutmés IV"}, {"t": "fala", "texto": "Entre as patas da Esfinge de Gizé há uma estela de granito com cerca de 3,6 metros. Ela costuma ser datada do primeiro ano do rei Tutmés IV, por volta de 1401 a.C."}, {"t": "fala", "texto": "O texto conta que o príncipe Tutmés, caçando, descansou ao meio-dia à sombra da Esfinge e adormeceu. Em sonho, o deus da Esfinge falou com ele “com a sua própria boca” e o chamou de “meu filho Tutmés”."}, {"t": "revela", "pergunta": "O que o deus pediu?", "resposta": "Prometeu-lhe a realeza e pediu que tirasse a areia que o cobria."}, {"t": "fala", "texto": "Cerca de metade do texto se perdeu, e os historiadores leem a estela também como uma forma de o rei mostrar que o seu poder vinha dos deuses."}, {"t": "leva", "texto": "Um cochilo ao meio-dia mudou a história de um reino."}]},
  {"dia": 60, "ilus": "morro-figuras", "tema": "tradicoes", "titulo": "Dormir em Saqqara", "minutos": 2, "cartas": [{"t": "abre", "titulo": "Dormir em Saqqara", "sub": "Os que pediam sonhos aos deuses"}, {"t": "fala", "texto": "No século II a.C., em Saqqara, o sacerdote Hor cuidava do culto das íbis e deixou dezenas de cacos de cerâmica escritos com os seus sonhos. Ele pedia sonhos a Thoth, a Ísis e, pelo menos uma vez, a Imhotep."}, {"t": "fala", "texto": "Na mesma época, um grego chamado Ptolemaios viveu cerca de vinte anos recluso dentro do Serapeum de Mênfis, sem poder sair do templo. O arquivo dele e do irmão guarda petições, cartas e relatos de sonhos."}, {"t": "revela", "pergunta": "Todo mundo ia dormir no templo?", "resposta": "Não se sabe ao certo. O historiador Gil Renberg mostra que os documentos não deixam claro quem praticava, para quais deuses nem por quê. Provavelmente visitantes comuns também incubavam sonhos ali."}, {"t": "fala", "texto": "Em Saqqara foram escavadas as “câmaras de Bes”, com grandes relevos do pequeno deus que guardava o sono. Muitos estudiosos pensam que ali se dormia para receber sonhos, mas isso é uma hipótese."}, {"t": "leva", "texto": "Pedir um sonho é um gesto muito antigo."}]},
  {"dia": 61, "ilus": "rio", "tema": "tradicoes", "titulo": "Os templos de Asclépio", "minutos": 2, "cartas": [{"t": "abre", "titulo": "Os templos de Asclépio", "sub": "Epidauro, na Grécia antiga"}, {"t": "fala", "texto": "No santuário de Asclépio, em Epidauro, pedras do século IV a.C. guardam cerca de setenta relatos de curas. O viajante Pausânias viu seis delas no século II e contou que nelas estavam os nomes, a doença de cada um e como foi curado."}, {"t": "fala", "texto": "Uma das pedras conta de Ambrósia, de Atenas, cega de um olho, que caçoava das curas. No sonho, o deus prometeu curá-la se ela deixasse no templo um porco de prata como lembrança da sua descrença. De manhã, ela saiu curada."}, {"t": "revela", "pergunta": "Quem mais aparecia nas curas?", "resposta": "Os animais do deus. Um menino cego teve os olhos lambidos por um dos cães do santuário. Um homem que cochilava do lado de fora sentiu uma serpente lamber o seu pé doente e lembrou ter sonhado com um jovem que punha remédio nele."}, {"t": "fala", "texto": "Antes de dormir, faziam-se oferendas de bolos. Depois da cura, deixava-se um presente ao deus. As últimas palavras de Sócrates, segundo Platão, foram: “devemos um galo a Asclépio”."}, {"t": "leva", "texto": "Os gregos levavam o pedido para dentro do sono."}]},
  {"dia": 62, "ilus": "estrela-lilas", "tema": "tradicoes", "titulo": "O diário de um sonhador", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O diário de um sonhador", "sub": "Élio Aristides e Anfiarau"}, {"t": "fala", "texto": "No século II, o orador Élio Aristides viveu cerca de dois anos no santuário de Asclépio em Pérgamo. Ele conta que foi o próprio deus, num sonho, que mandou que ele anotasse os sonhos."}, {"t": "fala", "texto": "Daí nasceram os Discursos Sagrados, cheios de sonhos. O primeiro livro é um diário de cerca de mês e meio, do inverno do ano 166."}, {"t": "revela", "pergunta": "E quem consultava Anfiarau?", "resposta": "Em Oropos, segundo Pausânias, a pessoa primeiro se purificava. Depois sacrificava um carneiro, estendia a pele no chão, dormia sobre ela e esperava a resposta em sonho."}, {"t": "leva", "texto": "Anotar o sonho é uma prática de quase dois mil anos."}]},
  {"dia": 63, "ilus": "estrela-verde", "tema": "tradicoes", "titulo": "A imagem que viaja", "minutos": 2, "cartas": [{"t": "abre", "titulo": "A imagem que viaja", "sub": "O sonho entre os Yanomami"}, {"t": "fala", "texto": "Para os Yanomami, todo ser tem uma imagem, utupë. Durante o dia ela fica presa ao corpo; à noite, no sono, o corpo fica na rede e a imagem se desprende e vive as suas experiências no tempo do sonho (Hanna Limulja, O desejo dos outros)."}, {"t": "fala", "texto": "Em A queda do céu, Davi Kopenawa conta que, quando os Yanomami querem conhecer as coisas, eles se esforçam para vê-las em sonho."}, {"t": "revela", "pergunta": "Por que contar o sonho?", "resposta": "A antropóloga Hanna Limulja ouviu dos Yanomami que o sonho só existe porque é partilhado. Contado, ele ganha uma função na vida de todos."}, {"t": "fala", "texto": "Os Yanomami são um povo vivo, com a sua floresta ameaçada. Este ensinamento só conta o que eles mesmos contaram aos pesquisadores."}, {"t": "leva", "texto": "Sonhar também é um jeito de conhecer."}]},
  {"dia": 64, "ilus": "fitas", "tema": "tradicoes", "titulo": "Ver no sonho", "minutos": 2, "cartas": [{"t": "abre", "titulo": "Ver no sonho", "sub": "O sonho entre os Guarani"}, {"t": "fala", "texto": "Em mbya, sonhar se diz -exa ra'u, que os próprios Guarani traduzem como “ver no sonho”. Sonhar é um modo de ver e de conhecer (Elizabeth Pissolato; Marcelo Hotimsky)."}, {"t": "fala", "texto": "Entre os Guarani, os xamãs sonham os lugares onde devem fundar uma aldeia. E na aldeia Tenonde Porã, em São Paulo, um jovem disse sobre os cantos: “Não é a gente que compõe. Nhanderu nos mostra nos sonhos.”"}, {"t": "revela", "pergunta": "Quem ajuda a entender o sonho?", "resposta": "Os mais velhos. Entre os Mbya, as mensagens dos sonhos raramente são literais, por isso são contadas e pensadas juntas, e os anciãos ajudam a passar do relato à ação."}, {"t": "fala", "texto": "Mbya, Ava-Guarani e Kaiowá são povos diferentes, cada um com o seu jeito. O que está aqui vem de etnografias de aldeias de São Paulo e do Paraná."}, {"t": "leva", "texto": "O sonho se vê, se conta e se cuida."}]},
  {"dia": 65, "ilus": "estrela-terra", "tema": "tradicoes", "titulo": "O Dreaming não é um sonho", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O Dreaming não é um sonho", "sub": "Os povos aborígenes da Austrália"}, {"t": "fala", "texto": "“Tempo do Sonho” é uma tradução de etnógrafos brancos. Em 1904, Spencer e Gillen traduziram a palavra arrernte Altjeringa como “os tempos do sonho”, e a tradução foi contestada desde cedo."}, {"t": "fala", "texto": "O antropólogo W. E. H. Stanner escreveu que não se pode fixar o Dreaming no tempo: ele foi, e é, em todo-quando. Cada povo tem a sua palavra: Tjukurpa para os Anangu, Jukurrpa para os Warlpiri."}, {"t": "revela", "pergunta": "E os sonhos da noite?", "resposta": "Também contam. Entre os Warlpiri, Barbara Glowczewski gravou sonhos que viraram canções, danças e pinturas novas. No norte da Austrália, as canções wangga são recebidas em sonho dos ancestrais."}, {"t": "fala", "texto": "Para os Anangu, de Uluru, o Tjukurpa é a lei e o conhecimento que ligam pessoas, animais, plantas e terra. Parte dele é sagrada e fica só com eles."}, {"t": "leva", "texto": "Respeitar um saber também é não tomá-lo para si."}]},
  {"dia": 66, "ilus": "estrela-lilas", "tema": "tradicoes", "titulo": "O sonho no Islã", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O sonho no Islã", "sub": "Os hadiths e os sufis"}, {"t": "fala", "texto": "Segundo um hadith de Sahih al-Bukhari, o bom sonho é uma das 46 partes da profecia. A tradição fala de três tipos de sonho: o bom, que vem de Deus; o que entristece; e o que vem dos próprios pensamentos."}, {"t": "fala", "texto": "A istikhara é uma oração para pedir orientação numa decisão. O hadith que a ensina não fala de sonho: a ideia de receber a resposta dormindo é uma crença popular, e muitos estudiosos dizem que a resposta vem no coração e no rumo dos fatos."}, {"t": "revela", "pergunta": "E Ibn Arabi?", "resposta": "O mestre sufi Ibn Arabi (1165–1240) via o sonho como uma realidade intermediária, entre o corpo e o espírito, no mundo das imagens. Uma frase dele sobre controlar os pensamentos dentro do sonho circula nos livros de sonho lúcido, mas não foi encontrada nos seus escritos: ela vem de uma paráfrase de Idries Shah."}, {"t": "leva", "texto": "O sonho bom se agradece."}]},
  {"dia": 67, "ilus": "estrela-dourada", "tema": "tradicoes", "titulo": "O ovo de luz", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O ovo de luz", "sub": "Nos livros de Castaneda"}, {"t": "fala", "texto": "Em O fogo interior (1984), Don Juan diz que quem “vê” percebe o ser humano não como corpo, mas como um ovo de luz, feito de fios luminosos."}, {"t": "fala", "texto": "Nesse ovo há um ponto de brilho mais intenso, a cerca de um braço de distância atrás das omoplatas. Os livros o chamam de ponto de aglutinação: é ali que a percepção se monta."}, {"t": "revela", "pergunta": "E como se aprende a ver?", "resposta": "Os livros não dão um exercício passo a passo. Ver aparece como fruto do silêncio interior, do não-fazer e do sonhar. Mover o ponto seria perceber o mundo de outro jeito."}, {"t": "fala", "texto": "É o modelo dos livros, e não um fato comprovado. No Osirion, o ovo de luz é uma imagem para concentrar a atenção antes de dormir."}, {"t": "leva", "texto": "Imagine-se inteiro, feito de luz."}]},
  {"dia": 68, "ilus": "maos-chama", "tema": "tradicoes", "titulo": "O corvo de Castaneda", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O corvo de Castaneda", "sub": "O voo e as plantas"}, {"t": "fala", "texto": "Em A erva do diabo (1968), Castaneda conta que se transformou em corvo e voou. Nos livros, isso acontece sob o efeito de plantas: um fumo com cogumelo e um unguento de datura, que é tóxica e pode matar."}, {"t": "fala", "texto": "Nos livros seguintes, o voo passa a vir do sonhar: o duplo, o corpo de sonho que age à distância, e os portões do sonhar. O Osirion segue esse caminho, sem nenhuma substância."}, {"t": "revela", "pergunta": "Dom Juan existiu?", "resposta": "Ninguém sabe. Pesquisadores como Richard de Mille apontaram contradições nos livros, que hoje muitos leem como ficção ou alegoria. O que fica são as práticas de atenção e de sonhar."}, {"t": "leva", "texto": "O voo verdadeiro vem do sonhar desperto."}]},
  {"dia": 69, "ilus": "figura-voo", "tema": "tradicoes", "titulo": "O ba que voa", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O ba que voa", "sub": "O Livro de sair de dia"}, {"t": "fala", "texto": "O que chamamos de Livro dos Mortos, os egípcios chamavam de “Livro de sair de dia”: fórmulas para que o morto atravessasse a noite do outro mundo e saísse de novo para a luz."}, {"t": "fala", "texto": "Entre elas há fórmulas de transformação: tomar a forma de um ba vivo, de uma andorinha, de um falcão. E uma fórmula para o ba voltar a se unir ao corpo. Nas ilustrações, o ba aparece como um pássaro com rosto humano pousado sobre o corpo."}, {"t": "revela", "pergunta": "Isso era para quem sonha?", "resposta": "Não: eram textos para os mortos. Mas mostram como os egípcios imaginavam a alma: algo que sai, voa e volta. A numeração das fórmulas muda de uma edição para outra."}, {"t": "leva", "texto": "Sair de dia é voltar à luz depois da noite."}]},
  {"dia": 70, "ilus": "estrela-sol", "tema": "tradicoes", "titulo": "A festa da embriaguez", "minutos": 2, "cartas": [{"t": "abre", "titulo": "A festa da embriaguez", "sub": "Os tambores que despertam"}, {"t": "fala", "texto": "Hathor era chamada Senhora da Embriaguez. No templo de Mut, em Luxor, a egiptóloga Betsy Bryan escavou um “pórtico da embriaguez” ligado à rainha Hatshepsut, usado numa festa anual."}, {"t": "fala", "texto": "Segundo os textos estudados por ela, as pessoas bebiam, adormeciam e eram acordadas por músicos com tambores, para ver a deusa se manifestar. Alguns ficavam sóbrios, para cuidar dos outros."}, {"t": "revela", "pergunta": "O Osirion usa isso?", "resposta": "Sem bebida nenhuma. O que fica é a imagem: o som que desperta no meio da noite para ver o que está do outro lado, como o sino do despertar de madrugada."}, {"t": "leva", "texto": "Despertar no meio da noite para ver."}]},
  {"dia": 71, "ilus": "lua", "tema": "tradicoes", "titulo": "O monge que guardava sonhos", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O monge que guardava sonhos", "sub": "Myōe, Japão, século XIII"}, {"t": "fala", "texto": "Myōe (1173–1232), monge do templo Kōzanji, em Kyoto, anotou os seus sonhos e visões por cerca de 40 anos. Pedaços desse Registro dos Sonhos, o Yume no ki, estão hoje em museus como o Metropolitan, em Nova York."}, {"t": "fala", "texto": "O psicanalista japonês Kawai Hayao chamou esse diário de um fenômeno raro na história espiritual da humanidade. Myōe comentava os sonhos e relia os antigos, ligando uns aos outros."}, {"t": "revela", "pergunta": "Como ele começava o dia?", "resposta": "Segundo uma curadora do Smithsonian, a primeira coisa que Myōe fazia de manhã, quando tinha um sonho que queria guardar, era pegar o caderno e anotá-lo."}, {"t": "leva", "texto": "Quarenta anos de sonhos começam com um caderno ao lado da cama."}]},
  {"dia": 72, "ilus": "estrela-lilas", "tema": "tradicoes", "titulo": "Dormir no templo de Kannon", "minutos": 2, "cartas": [{"t": "abre", "titulo": "Dormir no templo de Kannon", "sub": "O Japão de mil anos atrás"}, {"t": "fala", "texto": "Na época Heian, peregrinos passavam várias noites nos templos de Kannon, como Hasedera, Ishiyamadera e Kiyomizudera, dormindo no salão e esperando um sonho. Os sonhos tidos ali eram tidos como respostas."}, {"t": "fala", "texto": "No Diário de Sarashina, por volta de 1060, a mãe da autora mandou um monge rezar no Hasedera para que fosse concedido um sonho sobre o futuro da filha. E o monge Shinran, em 1201, recebeu em sonho uma revelação de Kannon depois de quase cem dias de retiro."}, {"t": "revela", "pergunta": "E se o sonho não viesse?", "resposta": "Era um pedido, não uma garantia. Muitos voltavam sem sonho, e voltavam outra vez."}, {"t": "leva", "texto": "Pedir um sonho é um gesto paciente."}]},
  {"dia": 73, "ilus": "ondas", "tema": "tradicoes", "titulo": "O Baku e o barco do tesouro", "minutos": 2, "cartas": [{"t": "abre", "titulo": "O Baku e o barco do tesouro", "sub": "Os guardiões do sono no Japão"}, {"t": "fala", "texto": "No Japão, desde o período Muromachi, o Baku é conhecido como o ser que come os pesadelos. No período Edo, amuletos e travesseiros com a figura dele se espalharam pelo povo."}, {"t": "fala", "texto": "O primeiro sonho do ano, o hatsuyume, tem um costume próprio: dormir com a imagem do barco do tesouro, o takarabune, sob o travesseiro. Na vela do barco, às vezes, vinha escrito o nome do Baku."}, {"t": "revela", "pergunta": "E o poema do barco?", "resposta": "Vinha escrito na imagem e se lê igual de trás para frente. Fala de uma longa noite, de despertar do sono profundo e do bom som de um barco navegando nas ondas."}, {"t": "leva", "texto": "Todo começo merece um bom sonho."}]},
  {"dia": 74, "ilus": "lua", "tema": "ciencia", "titulo": "Sono e sonho", "minutos": 2, "cartas": [{"t": "abre", "titulo": "Sono e sonho", "sub": "Cuidar do sono é cuidar do sonho"}, {"t": "fala", "texto": "Para sonhar, é preciso dormir bem. Os sonhos mais longos chegam nos últimos ciclos da noite, e só chega até eles quem dorme o bastante."}, {"t": "revela", "pergunta": "O que o sono faz com a memória?", "resposta": "Uma das hipóteses mais estudadas (Giulio Tononi e Chiara Cirelli) diz que, no sono profundo, o cérebro enfraquece as ligações fracas do dia, como quem faz uma limpeza. O que fica, se firma. Por isso quem acorda no fim de um ciclo, saindo do sonho, lembra com mais facilidade."}, {"t": "revela", "pergunta": "O que encurta o sono dos sonhos?", "resposta": "O álcool e muitos remédios para dormir reduzem o sono REM, a fase dos sonhos mais vívidos. A cafeína, à tarde ou à noite, deixa o sono mais leve e mais curto."}, {"t": "fala", "texto": "A luz branca e azulada das telas e das lâmpadas frias atrasa a melatonina, o hormônio que avisa o corpo que é noite. Notícias e conversas agitadas deixam a mente em alerta."}, {"t": "quiz", "pergunta": "Que luz ajuda o corpo a entender que é noite?", "opcoes": ["Uma luz branca e forte", "Uma luz baixa e amarelada", "A luz do celular"], "certa": 1, "explica": "Luzes baixas e quentes atrapalham menos a melatonina. A luz forte, fria ou das telas faz o corpo pensar que ainda é dia."}, {"t": "fala", "texto": "Em 1977, os neurocientistas Allan Hobson e Robert McCarley propuseram que o sonho seria o cérebro tentando dar sentido a sinais quase aleatórios do sono REM. Muitos povos e tradições, e o próprio Osirion, olham o sonho de outro jeito: como um lugar onde se aprende e se viaja."}, {"t": "faca", "titulo": "Esta noite", "texto": "Uma hora antes de deitar, baixe as luzes, deixe o celular longe da cama e não leia notícias."}, {"t": "leva", "texto": "O sono e o sonho andam juntos."}]},
  {"dia": 75, "ilus": "rio", "tema": "tradicoes", "titulo": "Uma breve história do sonho", "minutos": 2, "cartas": [{"t": "abre", "titulo": "Uma breve história do sonho", "sub": "Do templo ao consultório"}, {"t": "fala", "texto": "Na Mesopotâmia, o sonho podia trazer os deuses e também os mortos, e um sonho ruim era desfeito com rituais de purificação. Mamu era a divindade ligada aos sonhos."}, {"t": "fala", "texto": "Na Índia antiga, o Atharva Veda já guardava sinais de sonhos bons e ruins. As Upanishads descrevem o eu que, no sonho, deixa o corpo deitado e cria o seu próprio mundo, para depois voltar."}, {"t": "fala", "texto": "No templo de Hathor, em Dendera, no Egito, havia um sanatório: os doentes se banhavam em água sagrada e dormiam ali, esperando um sonho de cura."}, {"t": "fala", "texto": "Na Grécia, o culto de Asclépio se espalhou por centenas de santuários. O seu símbolo era a serpente, que vive entre o fundo da terra e a luz, e serpentes andavam soltas pelos templos."}, {"t": "revela", "pergunta": "Qual é o livro antigo sobre sonhos que chegou inteiro até nós?", "resposta": "A Oneirocrítica, de Artemidoro de Daldis, escrita no século II, em cinco livros. Ele já dizia que o mesmo sonho muda conforme a vida de quem sonha."}, {"t": "fala", "texto": "Em 1900, Sigmund Freud publicou A interpretação dos sonhos. Carl Gustav Jung, que trabalhou com ele, seguiu depois outro caminho: para Jung, as imagens do sonho movem a energia da psique e buscam um equilíbrio entre o que sabemos e o que ainda não sabemos de nós."}, {"t": "leva", "texto": "Toda época teve o seu jeito de escutar a noite."}]},
  {"dia": 76, "ilus": "estrela-lilas", "tema": "psique", "titulo": "Os tipos de sonho", "minutos": 2, "cartas": [{"t": "abre", "titulo": "Os tipos de sonho", "sub": "Grandes e pequenos sonhos"}, {"t": "fala", "texto": "Jung chamava de grandes sonhos os que parecem vir de muito fundo: raros, cheios de símbolos, inesquecíveis. Os pequenos sonhos falam do dia a dia, e são a maioria. Os dois importam."}, {"t": "fala", "texto": "Os sonhos que se repetem costumam voltar até que alguma coisa neles seja notada: o lugar, as pessoas, o tema. No Diário, a aba Sonhos repetidos mostra as palavras que voltam."}, {"t": "revela", "pergunta": "E o pesadelo?", "resposta": "Ele chama a atenção com força. Em vez de fugir da imagem, ao acordar, pergunte por que ela veio tão forte justo agora."}, {"t": "revela", "pergunta": "O que a ciência viu no sonho lúcido?", "resposta": "Em laboratório, a parte da frente do cérebro, ligada à reflexão, fica mais ativa no sonho lúcido do que no sonho comum (Ursula Voss e colegas, 2009). Por isso, no sonho lúcido, é possível pensar e escolher."}, {"t": "leva", "texto": "Cada sonho tem o seu tamanho."}]},
  {"dia": 77, "ilus": "fita-estrela", "tema": "psique", "titulo": "A luz da vela", "minutos": 2, "cartas": [{"t": "abre", "titulo": "A luz da vela", "sub": "Lembrar e registrar"}, {"t": "fala", "texto": "A analista Marie-Louise von Franz comparava o sonho à luz de uma vela, que empalidece quando se acende a luz elétrica da mente desperta."}, {"t": "fala", "texto": "Por isso, ao acordar, fique um instante de olhos fechados, só sentindo. Entender vem depois."}, {"t": "fala", "texto": "Registre primeiro, pense depois. Uma palavra solta, uma cor, uma emoção: tudo conta. O absurdo também: o sonho pensa por imagens, não pela lógica do dia."}, {"t": "revela", "pergunta": "E se eu não lembrar de nada?", "resposta": "Esquecer não é o mesmo que não sonhar. Jung via o sonho agindo em nós mesmo quando não é lembrado. A lembrança é um treino que melhora com os dias."}, {"t": "faca", "titulo": "Amanhã cedo", "texto": "Deixe o celular com o Osirion ou um caderno ao alcance da mão: cada movimento do corpo afasta o sonho. Conte no presente e dê um título ao sonho."}, {"t": "leva", "texto": "Primeiro a imagem. Depois o sentido."}]},
  {"dia": 78, "ilus": "espiral-figura", "tema": "psique", "titulo": "Ficar com a imagem", "minutos": 2, "cartas": [{"t": "abre", "titulo": "Ficar com a imagem", "sub": "O sonho que continua de dia"}, {"t": "fala", "texto": "Na psicologia arquetípica de James Hillman, o sonho não precisa ser explicado às pressas. A regra, ensinada por Rafael López-Pedraza, era ficar com a imagem: voltar a ela e deixar que ela mesma fale."}, {"t": "fala", "texto": "Jung sugeria tratar o sonho como um objeto desconhecido: olhar de todos os lados, levá-lo consigo, deixar a imaginação brincar com ele."}, {"t": "revela", "pergunta": "Como fazer isso durante o dia?", "resposta": "Desenhando a cena, escrevendo um poema, moldando um personagem em barro, cantando, dançando a sensação do sonho. Depois, perceba o que essa imagem desperta em você."}, {"t": "fala", "texto": "A natureza também alimenta o sonhar: uma caminhada em silêncio, o som da água, o céu estrelado antes de dormir."}, {"t": "faca", "titulo": "Hoje", "texto": "Escolha uma imagem de um sonho recente e passe dez minutos com ela: desenhe, escreva ou só feche os olhos e volte a ela. Não explique. Observe."}, {"t": "leva", "texto": "A imagem sabe mais do que a explicação."}]},
  {"dia": 79, "ilus": "estrela-dourada", "tema": "livro", "titulo": "O que é o sonho lúcido", "minutos": 3, "cartas": [{"t": "abre", "titulo": "O que é o sonho lúcido", "sub": "Saber, dentro do sonho, que é um sonho"}, {"t": "fala", "texto": "Nunca sabemos quando estamos vivenciando um sonho. A nossa consciência de sonhador aceita histórias absurdas como reais, e perdemos a oportunidade de participar de um milagre todas as noites."}, {"t": "fala", "texto": "Sonho lúcido é o sonho em que você percebe que está sonhando. A cena continua, mas agora você sabe onde está, e pode olhar, escolher e agir com a mesma consciência de quando está acordado."}, {"t": "fala", "texto": "É possível despertar dentro desse universo onírico! Quando isso acontece, o sonhador molda o tecido dos sonhos e realiza as suas mais profundas aspirações com a mesma consciência presente durante a vigília."}, {"t": "revela", "pergunta": "Aonde se pode ir?", "resposta": "Explorar eras passadas, desvendar os mistérios de civilizações antigas, interagir com sábios e seres fascinantes, viajar por galáxias distantes e trazer ensinamentos valiosos do próprio inconsciente. Enquanto o seu corpo repousa tranquilamente no quarto, o sonhador está seguro."}, {"t": "fala", "texto": "Não é coisa nova. Aristóteles já escrevia que, às vezes, quem dorme percebe que aquilo que vê é só um sonho. O nome “sonho lúcido” foi dado em 1913 pelo psiquiatra holandês Frederik van Eeden."}, {"t": "quiz", "pergunta": "Quantas pessoas já tiveram pelo menos um sonho lúcido na vida?", "opcoes": ["Quase ninguém", "Cerca de metade", "Só quem medita"], "certa": 1, "explica": "Uma revisão de estudos com milhares de pessoas (Saunders e colegas, 2016) encontrou cerca de 55% com pelo menos um sonho lúcido na vida, e perto de um quarto com um por mês ou mais."}, {"t": "fala", "texto": "Para despertar no sonho, é essencial o senso crítico: questionar a realidade, mesmo quando ela parece incrivelmente real. Nos dias comuns raramente perguntamos se estamos sonhando. Mas quem garante que este momento não é um sonho?"}, {"t": "revela", "pergunta": "E se o sonho começar a se desfazer?", "resposta": "No começo a lucidez vai e volta. Se sentir que a atmosfera está instável, afirme com convicção: “Clareza, agora!”. Se vier medo: “Estou protegido”. Comandos firmes mudam na hora a experiência do sonho (e da vida)."}, {"t": "fala", "texto": "Os sonhos lúcidos acontecem mais no sono REM, nos últimos ciclos da noite. Lembrar dos sonhos, desconfiar da realidade durante o dia e ter uma intenção antes de dormir são os passos que mais ajudam."}, {"t": "leva", "texto": "O Arhat, o desperto, nunca dorme: atua conscientemente nas duas realidades, o dia e a noite."}]}
];
