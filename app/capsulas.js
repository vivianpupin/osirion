// Cápsulas diárias do Arhat: uma por dia, em cartas curtas e interativas.
// Temas: "livro" (do Arhat), "ciencia" (ciência do sono), "tradicoes" (povos e templos), "viajantes" (técnicas de Monroe, Buhlman, LaBerge, Castaneda), "mantras" (mantras e práticas do sono da Índia e do Tibete).
// Cartas: abre · fala · revela · quiz · faca · leva · alvo
window.CAPSULAS = [
  { dia: 1, ilus: "meditacao-fita", tema: "livro", titulo: "O que é um Arhat", minutos: 2, cartas: [
    { t: "abre", titulo: "O que é um Arhat", sub: "O começo da jornada" },
    { t: "fala", texto: "“Arhat”, em sânscrito, refere-se a alguém que alcançou o estado de iluminação ou despertar espiritual." },
    { t: "fala", texto: "Aquele que transcende todos os planos, que pisou em todos os mundos, pois passou por todas as iniciações. É senhor de Si e caminhante do tempo." },
    { t: "fala", texto: "O livro tem cinco atos. Você pode atravessá-los em sequência ou ficar alguns dias em cada um. A transformação da consciência demanda tempo: quanto mais tempo fizer o Arhat, mais viverá seus resultados." },
    { t: "revela", pergunta: "O que o livro recomenda para o corpo durante a jornada?", resposta: "Uma alimentação leve e saudável, evitando carnes e bebidas alcoólicas." },
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
    { t: "fala", texto: "É por isso que o Arhat te desperta às 4 da manhã: você volta a dormir bem na janela dos sonhos mais longos, com a mente um pouco mais acordada." },
    { t: "leva", texto: "A madrugada é a hora do sonho." }
  ] },
  { dia: 4, ilus: "estrela-lilas", tema: "livro", titulo: "Lembrar é um treino", minutos: 2, cartas: [
    { t: "abre", titulo: "Lembrar é um treino", sub: "Os primeiros 5 minutos" },
    { t: "fala", texto: "Todos sonham, todas as noites. Em laboratório, a maioria das pessoas acordadas durante o REM conta um sonho, até quem jura que não sonha." },
    { t: "quiz", pergunta: "Você acordou e não lembra de nada. O que fazer?", opcoes: ["Levantar logo e desistir", "Abrir os olhos e pegar o celular", "Ficar imóvel, de olhos fechados, e perguntar onde estava"], certa: 2, explica: "Mexer o corpo e abrir os olhos apaga o sonho em segundos. Quieto, o fio costuma voltar." },
    { t: "faca", titulo: "Amanhã cedo", texto: "Não levante e nem abra os olhos. Pergunte: Onde eu estava? O que eu estava sentindo? Depois anote tudo, até as lembranças pequenas e sem sentido." },
    { t: "fala", texto: "Se você tem dificuldades para se recordar de seus sonhos é porque não teve estímulos para isso. Portanto, apenas continue treinando!" },
    { t: "leva", texto: "Dê importância à dimensão espiritual e receberá os doces frutos da eternidade!" }
  ] },
  { dia: 5, ilus: "morro-figuras", tema: "tradicoes", titulo: "Os templos do sonho", minutos: 3, cartas: [
    { t: "abre", titulo: "Os templos do sonho", sub: "Quando se ia ao templo para dormir" },
    { t: "fala", texto: "Por milhares de anos, a humanidade construiu templos não para rezar acordada, mas para dormir. Era a incubação dos sonhos." },
    { t: "revela", pergunta: "O que acontecia nos templos de Asclépio, na Grécia?", resposta: "Em Epidauro, Pérgamo e Cós, quem buscava cura se purificava, fazia oferendas e dormia numa sala sagrada chamada ábaton. O deus aparecia no sonho, tocando o corpo doente ou indicando o remédio. Em Epidauro ainda existem as pedras com os relatos das curas, com mais de 2.300 anos." },
    { t: "fala", texto: "No Egito, havia livros de sonhos há mais de 3.200 anos, como o papiro Chester Beatty III. Em Saqqara, as pessoas dormiam junto aos santuários pedindo orientação e cura." },
    { t: "fala", texto: "No Japão de mil anos atrás, peregrinos passavam a noite em templos de Kannon, como Hasedera, esperando um sonho que respondesse à sua pergunta." },
    { t: "faca", titulo: "Hoje", texto: "Prepare o seu quarto como um templo: arrume, limpe, desligue as telas antes de deitar. Imagine a chuva caindo e limpando o ambiente." },
    { t: "leva", texto: "O Arhat devolve esse templo para dentro do seu quarto." }
  ] },
  { dia: 6, ilus: "fitas", tema: "livro", titulo: "As raízes de cura", minutos: 2, cartas: [
    { t: "abre", titulo: "As raízes de cura", sub: "O corpo invisível" },
    { t: "fala", texto: "Temos raízes: linhas invisíveis, tentáculos tremeluzentes que saem de nossas mãos, cabeça, garganta, coração, umbigo e centros sexuais." },
    { t: "revela", pergunta: "Como saber que uma raiz está ativa?", resposta: "Sente-se uma leve vibração ou um amortecimento na região. É o sinal de que aquele centro de energia está funcionando." },
    { t: "faca", titulo: "Agora", texto: "Aproxime as mãos, sem encostar. Sinta as raízes dançando entre si como línguas de fogo que se entrelaçam.", segundos: 30 },
    { t: "fala", texto: "Saber recarregar-se de energia vital faz com que não precisemos absorver a energia do meio e das pessoas ao redor. É comum tentar preencher esse vazio com compulsões ou apegos." },
    { t: "leva", texto: "Ative o seu poder sutil." }
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
    { t: "fala", texto: "Pesquisas em vários países estimam que perto de uma em cada dez pessoas já teve ao menos uma experiência de se ver fora do próprio corpo." },
    { t: "revela", pergunta: "O que os neurologistas descobriram em 2002?", resposta: "Na Suíça, ao estimular uma pequena região do cérebro chamada junção temporoparietal, médicos provocaram numa paciente a sensação de flutuar e se ver de cima." },
    { t: "fala", texto: "Para a ciência, isso mostra onde o cérebro constrói a sensação de estar dentro do corpo. Para as tradições, mostra onde fica a porta. O Arhat convida você a experimentar e tirar as suas conclusões." },
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
    { t: "revela", pergunta: "O que acontecia antes de cada saída?", resposta: "Uma onda de vibrações tomava o corpo, às vezes com zumbido e sensação de choque. Com o tempo ele entendeu que era a porta, e não um perigo. O Arhat chama isso de estado vibracional." },
    { t: "fala", texto: "Monroe chamou de Foco 10 o estado de mente desperta e corpo dormindo. É o mesmo corpo relaxado, mente desperta do Arhat." },
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
    { t: "fala", texto: "Repare: é o mesmo exercício do Segundo Ato do Arhat, caminhar em outro cômodo com o corpo sutil. Tradições diferentes chegando ao mesmo caminho." },
    { t: "faca", titulo: "Hoje", texto: "Escolha um cômodo e três objetos. Olhe para eles hoje como se fosse a primeira vez." },
    { t: "leva", texto: "Para onde vai a atenção, vai o corpo sutil." }
  ] },
  { dia: 26, ilus: "estrela-terra", tema: "viajantes", titulo: "Comandos em voz firme", minutos: 2, cartas: [
    { t: "abre", titulo: "Comandos em voz firme", sub: "Buhlman e o Arhat" },
    { t: "fala", texto: "Buhlman recomenda frases curtas, ditas com firmeza, ao adormecer e dentro da experiência. Elas acordam a atenção." },
    { t: "quiz", pergunta: "Qual comando o Arhat ensina quando o sonho fica instável?", opcoes: ["“Quero acordar”", "“Clareza, agora!”", "“Não estou aqui”"], certa: 1, explica: "Buhlman ensina o mesmo pedido: clareza e consciência, agora. Dito com convicção, o ambiente se firma." },
    { t: "fala", texto: "Ao adormecer, repita em silêncio: “Agora estou fora do corpo.” Dentro da experiência: “Clareza, agora!” ou “Consciência, agora!”." },
    { t: "leva", texto: "Clareza, agora!" }
  ] },
  { dia: 27, ilus: "figura-fio", tema: "viajantes", titulo: "O som que solta o corpo", minutos: 2, cartas: [
    { t: "abre", titulo: "O som que solta o corpo", sub: "Monroe, o Om e as cigarras" },
    { t: "fala", texto: "Monroe usava um exercício de ressonância: cantar um som grave e longo, sentindo a vibração no peito e na cabeça, antes de praticar." },
    { t: "fala", texto: "O Arhat faz o mesmo com o Om no Quinto Ato, e conta que os Maias usavam o canto das cigarras para atravessar." },
    { t: "faca", titulo: "Agora", texto: "Inspire fundo e solte o ar num “ommm” grave, longo. Faça três vezes e repare onde o corpo vibra.", segundos: 45 },
    { t: "leva", texto: "Entre na vibração do som até ouvir o zumbido do outro lado." }
  ] },
  { dia: 28, ilus: "figura-mergulho", tema: "viajantes", titulo: "Lembrar de lembrar", minutos: 3, cartas: [
    { t: "abre", titulo: "Lembrar de lembrar", sub: "A técnica de Stephen LaBerge" },
    { t: "fala", texto: "Stephen LaBerge, o pesquisador de Stanford que provou o sonho lúcido com o movimento dos olhos, criou uma técnica chamada MILD: indução do sonho lúcido pela memória." },
    { t: "revela", pergunta: "Como fazer?", resposta: "Ao acordar de um sonho, de madrugada, relembre-o. Depois, voltando a dormir, repita: “Da próxima vez que eu sonhar, vou lembrar que estou sonhando.” E imagine-se de volta naquele sonho, percebendo que é sonho." },
    { t: "fala", texto: "Ela funciona ainda melhor somada ao despertar de madrugada do Arhat." },
    { t: "faca", titulo: "Nesta madrugada", texto: "Quando o Osirion te despertar, relembre o último sonho e repita a frase até adormecer." },
    { t: "leva", texto: "Da próxima vez que eu sonhar, vou lembrar que estou sonhando." }
  ] },
  { dia: 29, ilus: "estrela-cadente", tema: "viajantes", titulo: "O que todos os viajantes dizem", minutos: 2, cartas: [
    { t: "abre", titulo: "O que todos os viajantes dizem", sub: "Monroe, Buhlman, Castaneda, LaBerge e o Arhat" },
    { t: "fala", texto: "Caminhos diferentes, as mesmas chaves: relaxar o corpo sem apagar a mente, ter uma intenção clara, não ter medo das vibrações e lembrar de perguntar se está sonhando." },
    { t: "revela", pergunta: "E a chave mais esquecida?", resposta: "A constância. Quase todos contam que a primeira experiência veio depois de semanas de prática. Quanto mais tempo fizer o Arhat, mais viverá seus resultados." },
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
    { t: "revela", pergunta: "E o terceiro?", resposta: "Ver o próprio corpo dormindo. É a mesma cena que o Arhat descreve na saída do corpo." },
    { t: "quiz", pergunta: "Em qual portão está quem se levanta no sonho e vê o próprio corpo na cama?", opcoes: ["No primeiro", "No segundo", "No terceiro"], certa: 2, explica: "Ver o próprio corpo dormindo é o terceiro portão de Dom Juan." },
    { t: "leva", texto: "Um portão de cada vez. A atenção cresce como um músculo." }
  ] },
  { dia: 32, ilus: "figura-fio", tema: "viajantes", titulo: "Recapitular a vida", minutos: 3, cartas: [
    { t: "abre", titulo: "Recapitular a vida", sub: "A energia para sonhar, segundo Dom Juan" },
    { t: "fala", texto: "Dom Juan dizia que, para sonhar com lucidez, é preciso energia. E que a nossa energia fica presa em lembranças, mágoas e conversas que ainda giram na cabeça." },
    { t: "fala", texto: "A prática para soltar essa energia se chama recapitulação: lembrar, uma a uma, as pessoas e as cenas da vida, com a respiração." },
    { t: "faca", titulo: "Recapitulação", texto: "Lembre uma cena que ainda pesa. Inspire girando a cabeça devagar de um ombro ao outro, como se puxasse de volta a energia que deixou lá. Expire girando para o outro lado, soltando o que não é seu. Repita até a cena ficar leve." },
    { t: "revela", pergunta: "O que é o “intento”?", resposta: "Para Dom Juan, é a intenção firme, sem dúvida, que move a atenção. É o mesmo que o Arhat pede com o comando antes de dormir: dizer com convicção, como se já fosse verdade." },
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
    { t: "fala", texto: "Os maias também usavam sons e vibrações para alcançar estados de consciência expandida, como conta o Arhat sobre o canto das cigarras." },
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
  ] }
];
