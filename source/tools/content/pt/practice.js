/* Practice sets for the original 11 lessons of the pt-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Brazilian Portuguese; answers are English (shared with es-en except where deviations.json says).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing verb-core rule (docs/profiles/pt.md §7): at least half of the order + type items hinge on agreement,
   the auxiliary in questions and negatives, or (typed) dummy it/there, and their why names it
   (sujeito | auxiliar | terceira pessoa | concordância). */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "Qual palavra significa «ovelha»?", o: ["sheep", "ship", "cheap", "chip"], why: "\"Sheep\" tem o i longo e tenso /iː/. Com o i curto /ɪ/, \"ship\" significa «navio»." },
    { t: "mc", q: "Qual palavra significa «cabeça»?", o: ["head", "red", "had", "hate"], why: "\"Head\" começa com h: só um sopro leve. Com o r de «rato», que sai da garganta, vira \"red\" («vermelho»)." },
    { t: "mc", q: "Qual palavra significa «código»?", o: ["code", "cold", "cord", "coat"], why: "\"Code\" não tem l. \"Cold\" («frio») tem um l de verdade antes do d; se ele virar «u», as duas palavras soam iguais." },
    { t: "mc", q: "Qual palavra significa «tolo, bobo»?", o: ["fool", "full", "fall", "fill"], why: "\"Fool\" tem o u longo /uː/. \"Full\", com o u curto /ʊ/, significa «cheio»." },
    { t: "mc", q: "Qual palavra significa «time (equipe)»?", o: ["team", "teen", "tin", "ten"], why: "\"Team\" termina em m: feche os lábios no fim. \"Teen\" termina em n. E o t de \"team\" nunca vira «tch»." },

    { t: "order", p: "Minha escola fica em Madri", a: ["My", "school", "is", "in", "Madrid"], x: ["are", "eschool"], why: "\"School\" começa direto no s, sem «i» nem «e» na frente. Com um só sujeito (\"my school\"), o verbo é \"is\": concordância." },
    { t: "order", p: "A sopa está muito quente?", a: ["Is", "the", "soup", "very", "hot"], x: ["rot"], why: "Na pergunta, \"is\" vem antes do sujeito (\"the soup\"). E \"hot\" começa com um h leve: com o r de «rato», vira \"rot\"." },
    { t: "order", p: "Somos da Espanha", a: ["We", "are", "from", "Spain"], x: ["is", "Espain"], why: "\"Spain\" começa direto no s, sem vogal na frente. Com \"we\", o verbo be é \"are\": concordância." },

    { t: "fill", q: "I'm a __udent.", p: "Sou estudante", a: ["st"], o: ["ist", "is", "s"], why: "\"Student\" começa com st, sem nenhum «i» na frente: /ˈstuːdnt/." },
    { t: "fill", q: "I __ink so.", p: "Acho que sim", a: ["th"], o: ["s", "t", "f"], why: "\"Think\" começa com th: a ponta da língua entre os dentes. Com s, seria \"sink\" («pia»)." },
    { t: "fill", q: "Welcome to my __ouse.", p: "Bem-vindos à minha casa", a: ["h"], o: ["r", "w", "m"], why: "\"House\" começa com h: um sopro leve, sem raspar a garganta. Em inglês, esse h não é mudo." },

    { t: "type", p: "Tem três árvores", a: ["There are three trees"], hint: "three · tree — começa com \"there\"", x: ["is"], why: "\"Tem três árvores\" não é \"Has three trees\": o sujeito em inglês é \"there\", com concordância: \"There are\". E \"three\" começa com th; \"tree\", com tr." },
    { t: "type", p: "Está muito quente", a: ["It's very hot", "It is very hot", "It's really hot", "It is really hot", "It's so hot", "It is so hot"], hint: "very · hot — o h soa, não é «r»", x: ["Is"], why: "Em inglês o sujeito é obrigatório, mesmo sem significado: \"It's very hot\", nunca \"Is very hot\". E o h de \"hot\" é um sopro leve." },
    { t: "type", p: "Acho que sim", a: ["I think so"], hint: "think — a língua entre os dentes", x: ["sink"], why: "\"Think\" começa com th: a ponta da língua entre os dentes, não s nem f." }
  ],

  articles: [
    { t: "mc", q: "Como se diz «Sou estudante»?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Em inglês, profissões e ocupações levam \"a/an\", mesmo que em português você não use artigo." },
    { t: "mc", q: "Como se diz «uma hora»?", o: ["an hour", "a hour", "one hours", "hour"], why: "O h de \"hour\" é mudo: a palavra começa com som de vogal, por isso vai \"an\"." },
    { t: "mc", q: "Como se diz «A vida é dura»?", o: ["Life is hard.", "The life is hard.", "A life is hard.", "The lives are hard."], why: "Quando você fala de algo em geral ou abstrato, o inglês não usa artigo." },
    { t: "mc", q: "Como se diz «Eu adoro cachorros» (em geral)?", o: ["I love dogs.", "I love the dogs.", "I love a dog.", "I love dog."], why: "Para falar em geral: plural sem artigo. \"The dogs\" seriam cachorros específicos." },
    { t: "mc", q: "Como se diz «Lave as mãos»?", o: ["Wash your hands.", "Wash the hands.", "Wash hands.", "Wash the your hands."], why: "Com partes do corpo, o inglês usa o adjetivo possessivo (\"my\", \"your\", \"her\"), não \"the\". E nunca os dois juntos." },

    { t: "order", p: "Minha irmã é enfermeira", a: ["My", "sister", "is", "a", "nurse"], x: ["are", "the"], why: "Profissão leva \"a\": \"a nurse\". E sem artigo antes de \"my\". Um só sujeito (\"my sister\") pede \"is\": concordância." },
    { t: "order", p: "Ela é médica?", a: ["Is", "she", "a", "doctor"], x: ["the"], why: "Na pergunta, \"is\" vem antes do sujeito. E profissão leva \"a\": \"a doctor\"." },
    { t: "order", p: "Café é caro (em geral)", a: ["Coffee", "is", "expensive"], x: ["The", "are"], why: "Em geral, \"coffee\" vai sem artigo. Substantivo incontável pede \"is\": concordância." },

    { t: "fill", q: "I'm __ university student.", p: "Sou estudante universitário", a: ["a"], o: ["an", "the", "two"], why: "\"University\" começa com o som «iu», de consoante: \"a university\". O que conta é o som, não a letra." },
    { t: "fill", q: "Close __ eyes.", p: "Feche os olhos", a: ["your"], o: ["the", "you", "a"], why: "Com partes do corpo vai o possessivo: \"your eyes\", não \"the eyes\"." },
    { t: "fill", q: "__ is a virtue.", p: "A paciência é uma virtude", a: ["Patience"], o: ["The patience", "A patience", "Patiences"], why: "Ideias abstratas, em geral, vão sem artigo em inglês, mesmo com «a» em português." },

    { t: "type", p: "Ela é enfermeira", a: ["She is a nurse", "She's a nurse"], hint: "nurse — a profissão leva artigo", x: ["the"], why: "A profissão leva \"a\", e com \"she\" o verbo be é \"is\": terceira pessoa." },
    { t: "type", p: "Meu irmão é engenheiro", a: ["My brother is an engineer", "My brother's an engineer"], hint: "brother · engineer — \"a\" ou \"an\" de acordo com o som", x: ["a"], why: "\"Engineer\" começa com som de vogal: \"an engineer\". Com \"my brother\" (terceira pessoa), be é \"is\"." },
    { t: "type", p: "Minhas costas doem", a: ["My back hurts", "I have a backache"], hint: "back · hurt — com possessivo, não \"the\"", x: ["the"], why: "Com partes do corpo vai o possessivo: \"my back\", não \"the back\". \"Back\" é singular (terceira pessoa), então o verbo ganha -s: \"hurts\"." }
  ],

  be: [
    { t: "mc", q: "Como se diz «Estou com fome»?", o: ["I'm hungry.", "I have hungry.", "I have hunger.", "I hungry."], why: "Fome, sede, frio, sono: em inglês, tudo com \"be\" + adjetivo. Nada de \"with\" nem \"have\"." },
    { t: "mc", q: "Como se diz «Tenho 30 anos»?", o: ["I'm 30.", "I have 30 years.", "I have 30.", "I'm 30 years."], why: "A idade vai com \"be\": \"I'm 30\" ou \"I'm 30 years old\". \"30 years\" sem \"old\" não se usa." },
    { t: "mc", q: "Como se diz «É tarde»?", o: ["It's late.", "Is late.", "Late is.", "It late."], why: "Em inglês a frase precisa de sujeito (\"it\") e também do verbo be (\"is\")." },
    { t: "mc", q: "Escolha a pergunta correta: «Ele fala inglês?»", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "Com \"he\" vai \"does\", e depois o verbo sem -s." },
    { t: "mc", q: "Como se diz «Você tem razão»?", o: ["You're right.", "You have reason.", "You have right.", "You're reason."], why: "«Ter razão» se diz com be: \"you're right\"." },

    { t: "order", p: "Meu irmão trabalha em Lima", a: ["My", "brother", "works", "in", "Lima"], x: ["work", "is"], why: "Com um só sujeito (\"my brother\" = \"he\"), o verbo ganha -s: terceira pessoa. E sem \"is\"." },
    { t: "order", p: "Você está com frio?", a: ["Are", "you", "cold"], x: ["Do", "have"], why: "Com be não se usa \"do\": \"are\" vem antes do sujeito. E «estar com frio» se diz com be: \"cold\"." },
    { t: "order", p: "Ela tem dois cachorros", a: ["She", "has", "two", "dogs"], x: ["have", "is"], why: "Com \"she\", \"have\" vira \"has\": terceira pessoa." },

    { t: "fill", q: "My brother __ in Lima.", p: "Meu irmão mora em Lima", a: ["lives"], o: ["live", "is live", "living"], why: "Com \"he\" (\"my brother\"), o verbo ganha -s: \"lives\"." },
    { t: "fill", q: "__ you hungry?", p: "Você está com fome?", a: ["Are"], o: ["Do", "Is", "Have"], why: "«Estar com fome» se diz com be, e com \"you\" é \"are\"." },
    { t: "fill", q: "We __ cold.", p: "Estamos com frio", a: ["are"], o: ["have", "is", "do"], why: "«Estar com frio» vai com be, e com \"we\" é \"are\"." },

    { t: "type", p: "Ele é professor", a: ["He is a teacher", "He's a teacher"], hint: "teacher — é com be e artigo", x: ["the"], why: "Com \"he\", be é \"is\": terceira pessoa. A profissão leva \"a\"." },
    { t: "type", p: "Tenho 25 anos", a: ["I'm 25", "I am 25", "I'm 25 years old", "I am 25 years old", "I'm twenty-five", "I am twenty-five", "I'm twenty-five years old", "I am twenty-five years old"], hint: "25 — com be, não com have", x: ["have"], why: "A idade se diz com \"be\", não com \"have\"." },
    { t: "type", p: "É tarde", a: ["It's late", "It is late"], hint: "late — não esqueça o sujeito", x: ["is"], why: "Em inglês o sujeito é obrigatório: \"It's late\", nunca \"Is late\"." }
  ],

  polite: [
    { t: "mc", q: "Numa cafeteria, qual é o jeito mais natural de pedir um latte?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "Numa loja ou cafeteria, \"Can I get…?\" é o natural. E é um café só: \"a latte\"." },
    { t: "mc", q: "Qual é o jeito mais educado de pedir ajuda a um desconhecido?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "\"Could you…?\" é o jeito educado de pedir algo a um desconhecido." },
    { t: "mc", q: "Você não entendeu o que disseram. Como pedir com educação que repitam?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "\"Could you say that again?\" é o jeito educado de pedir que repitam." },
    { t: "mc", q: "Peça com muita educação: «O senhor se importaria de tirar uma foto nossa?»", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Depois de \"mind\" vem a forma -ing: \"taking\"." },
    { t: "mc", q: "No avião: «Eu gostaria de um assento na janela»", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "\"I'd like…\" é um pedido educado. E é um assento só: \"a window seat\"." },

    { t: "order", p: "Me vê um latte?", a: ["Can", "I", "get", "a", "latte"], x: ["gets", "give"], why: "Para pedir, o auxiliar \"can\" vem antes do sujeito (\"Can I get…?\", não \"I can get…?\") e o verbo fica na forma base: \"get\", não \"gets\"." },
    { t: "order", p: "Você se importaria de abrir a janela? (a desta sala)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "minds"], why: "Na pergunta, o auxiliar \"would\" vem antes de \"you\", e \"mind\" fica na forma base, sem -s. Depois de \"mind\" vem a forma -ing." },
    { t: "order", p: "Você poderia falar mais devagar?", a: ["Could", "you", "speak", "more", "slowly"], x: ["speaks", "slow"], why: "O auxiliar \"could\" vem antes do sujeito (\"Could you…?\") e o verbo fica na forma base: \"speak\", nunca \"speaks\"." },

    { t: "fill", q: "Would you mind __ the door?", p: "Você se importaria de fechar a porta?", a: ["closing"], o: ["close", "to close", "closed"], why: "Depois de \"mind\" vem a forma -ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Me vê um café gelado?", a: ["an"], o: ["a", "two", "many"], why: "\"Iced\" começa com som de vogal («ai»): \"an\"." },
    { t: "fill", q: "No, not at __.", p: "(Resposta a \"Would you mind…?\") Não, imagina. Pode deixar.", a: ["all"], o: ["any", "one", "ever"], why: "\"No, not at all\" = «não me importo nem um pouco», ou seja, «claro, eu faço»." },

    { t: "type", p: "Você poderia me ajudar? (com educação)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — peça com educação", x: ["can"], why: "A pergunta educada começa com o auxiliar \"could\", antes de \"you\"." },
    { t: "type", p: "Eu gostaria de um assento na janela", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — é um assento só, com artigo", x: ["the"], why: "Para pedir algo, \"I'd like…\". É um assento só, mencionado pela primeira vez: \"a window seat\"." },
    { t: "type", p: "Posso pagar com cartão?", a: pl(["Can I pay by card", "Could I pay by card", "Can I pay with a card", "Could I pay with a card", "Can I pay by credit card", "Could I pay by credit card"]), hint: "can · pay · card — pergunta com o auxiliar na frente", x: ["pays"], why: "Na pergunta, o auxiliar \"can\" vem antes do sujeito: \"Can I pay…?\", nunca \"I can pay…?\"." }
  ],

  tense: [
    { t: "mc", q: "Como se diz «Estou tomando café agora»?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "O que está acontecendo agora vai no presente contínuo: be + forma -ing. E o \"am\" (\"I'm\") não pode faltar." },
    { t: "mc", q: "Como se diz «O que você está fazendo?» (neste momento)?", o: ["What are you doing?", "What do you do?", "What you are doing?", "What you do?"], why: "Para o que acontece agora, o inglês usa o presente contínuo. \"What do you do?\" pergunta com o que você trabalha." },
    { t: "mc", q: "Você fala dos seus planos: «Vou visitar a Cidade do México no mês que vem»", o: ["I'm going to visit Mexico City next month.", "I visit Mexico City next month.", "I visited Mexico City next month.", "I'm going visit Mexico City next month."], why: "\"Going to\" funciona como «vou» + infinitivo: não esqueça o \"to\"." },
    { t: "mc", q: "A campainha toca e você decide na hora: «Deixa que eu abro!»", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Uma decisão tomada na hora vai com \"will\"." },
    { t: "mc", q: "Qual é o passado de \"see\"?", o: ["saw", "seed", "seen", "sawed"], why: "\"See\" é irregular: see – saw – seen." },

    { t: "order", p: "Ela trabalha num banco", a: ["She", "works", "at", "a", "bank"], x: ["work", "working"], why: "Um hábito vai no presente simples; com \"she\", o verbo ganha -s: terceira pessoa." },
    { t: "order", p: "Você foi à praia?", a: ["Did", "you", "go", "to", "the", "beach"], x: ["went"], why: "No passado, a pergunta leva o auxiliar \"did\" e o verbo na forma base: \"go\", não \"went\"." },
    { t: "order", p: "Te ligo mais tarde", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Uma promessa feita na hora vai com \"will\"." },

    { t: "fill", q: "I __ pizza last night.", p: "Ontem à noite eu comi pizza", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "\"Eat\" é irregular: o passado é \"ate\" (ou \"had\", se você usar \"have\")." },
    { t: "fill", q: "__ you have fun?", p: "Você se divertiu?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Para perguntar sobre o passado: \"Did\" + verbo na forma base." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Vou visitar meus pais", a: ["to"], o: ["for", "at", "on"], why: "\"Going to\" + verbo, como «vou» + infinitivo." },

    { t: "type", p: "O que você está fazendo?", a: ["What are you doing"], hint: "what · do — o que acontece agora", x: ["do"], why: "Na pergunta, o auxiliar \"are\" vem antes do sujeito: \"What are you doing?\"" },
    { t: "type", p: "Ela não viu o filme", a: ["She didn't see the movie", "She did not see the movie", "She didn't watch the movie", "She did not watch the movie"], hint: "see · movie — negativa no passado", x: ["saw"], why: "Na negativa, o passado leva o auxiliar \"didn't\" e o verbo na forma base: \"see\"." },
    { t: "type", p: "Hoje estou trabalhando de casa", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — presente contínuo, com be", x: ["work"], why: "O que você faz hoje, neste período, vai no presente contínuo." }
  ],

  prep: [
    { t: "mc", q: "Como se diz «em maio»?", o: ["in May", "on May", "at May", "to May"], why: "Com meses vai \"in\"." },
    { t: "mc", q: "Como se diz «no dia 3 de maio»?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "the May 3rd"], why: "Com datas vai \"on\", sem artigo, mesmo que em português você diga «no dia 3»." },
    { t: "mc", q: "Como se diz «Estou no ônibus»?", o: ["I'm on the bus.", "I'm in bus.", "I'm at the bus.", "I'm on bus."], why: "Com transporte público (\"bus\", \"train\", \"plane\") vai \"on\"." },
    { t: "mc", q: "Como se diz «à noite»?", o: ["at night", "on night", "in night", "at the night"], why: "\"Night\" é exceção: \"at night\", sem artigo." },
    { t: "mc", q: "Qual é a frase correta para «Moro em Lima»?", o: ["I live in Lima.", "I live at Lima.", "I live on Lima.", "I live in the Lima."], why: "Com cidades e países vai \"in\", sem artigo." },

    { t: "order", p: "Meu celular está na mesa", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "are"], why: "Em cima de uma superfície vai \"on\". Um só sujeito (\"my phone\") pede \"is\": concordância." },
    { t: "order", p: "Você trabalha aos sábados?", a: ["Do", "you", "work", "on", "Saturdays"], x: ["in"], why: "A pergunta leva o auxiliar \"do\" antes do sujeito. Com dias vai \"on\": \"on Saturdays\"." },
    { t: "order", p: "Até a semana que vem", a: ["See", "you", "next", "week"], x: ["on"], why: "Com \"next\" não vai preposição." },

    { t: "fill", q: "The meeting is __ three.", p: "A reunião é às três", a: ["at"], o: ["on", "to", "of"], why: "Com hora exata vai \"at\"." },
    { t: "fill", q: "I was born __ 1998.", p: "Nasci em 1998", a: ["in"], o: ["on", "at", "to"], why: "Com anos vai \"in\"." },
    { t: "fill", q: "See you __ Friday.", p: "Até sexta", a: ["on"], o: ["in", "at", "to"], why: "Com dias da semana vai \"on\"." },

    { t: "type", p: "Ela toma café (a bebida) de manhã", a: ["She drinks coffee in the morning", "She has coffee in the morning", "In the morning she drinks coffee", "In the morning she has coffee"], hint: "drink · coffee · morning — período do dia com \"in the\"", x: ["at"], why: "Com \"she\", o verbo ganha -s: terceira pessoa. Partes do dia: \"in the morning\"." },
    { t: "type", p: "Estou em casa", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — não leva artigo", x: ["the"], why: "\"At home\" vai sem \"the\" (e nunca com \"in\")." },
    { t: "type", p: "A reunião é na segunda?", a: ["Is the meeting on Monday"], hint: "meeting · Monday — pergunta com \"on\", sem artigo", x: ["in"], why: "Na pergunta, \"is\" vem antes do sujeito (\"the meeting\"). Com dias vai \"on\", sem artigo, mesmo com o «na» do português." }
  ],

  smalltalk: [
    { t: "mc", q: "Um colega de trabalho pergunta \"How was your weekend?\" O que você responde?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "A pergunta é sobre algo que já passou: responda no passado e acrescente um detalhe." },
    { t: "mc", q: "Alguém diz \"I don't drink coffee.\" Como dizer «Nem eu»?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "«Eu também não» / «Nem eu» é \"Me neither\". \"Me too\" é «eu também»." },
    { t: "mc", q: "Como encerrar a conversa de um jeito natural?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "\"I should get going\" é um jeito suave de se despedir." },
    { t: "mc", q: "Qual frase é boa para puxar conversa com alguém que você acabou de conhecer?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "O tempo é o assunto mais seguro para um bate-papo." },
    { t: "mc", q: "Alguém conta \"I went to Cartagena last weekend.\" Qual resposta mostra interesse?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "\"Oh, really?\" e \"That sounds fun!\" mostram interesse." },

    { t: "order", p: "Com o que você trabalha?", a: ["What", "do", "you", "do"], x: ["are", "does"], why: "Na pergunta vai o auxiliar \"do\" antes do sujeito: \"What do you do?\"" },
    { t: "order", p: "De onde você é?", a: ["Where", "are", "you", "from"], x: ["is", "do"], why: "Na pergunta, \"are\" vem antes do sujeito: \"Where are you from?\" Com \"you\", \"are\": concordância." },
    { t: "order", p: "Foi um prazer conversar com você", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "É uma despedida típica: depois de \"nice\" vem a forma -ing (\"talking\")." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Tudo ótimo! E você?", a: ["about"], o: ["for", "with", "of"], why: "Responda curto e devolva a pergunta com \"How about you?\"" },
    { t: "fill", q: "I know, __?", p: "Pois é! / Né?", a: ["right"], o: ["no", "yes", "true"], why: "\"I know, right?\" serve para concordar com alguém com ênfase, como «pois é!»." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Você viu alguma série ou filme bom ultimamente?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Depois de \"any\", numa pergunta, os substantivos contáveis vão no plural." },

    { t: "type", p: "Como foi o seu fim de semana?", a: ["How was your weekend"], hint: "how · weekend — no passado", x: ["is"], why: "Na pergunta, \"was\" vem antes do sujeito (\"your weekend\"): \"How was your weekend?\"" },
    { t: "type", p: "Você mora aqui perto?", a: ["Do you live around here", "Do you live near here", "Do you live nearby"], hint: "live · around here — pergunta com \"do\"", x: ["are"], why: "No presente, a pergunta leva o auxiliar \"do\" antes do sujeito: \"Do you live…?\"" },
    { t: "type", p: "Que tempo bom hoje!", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — tem artigo?", x: ["a"], why: "\"Weather\" é incontável: não leva \"a\" (não se diz \"a nice weather\")." }
  ],

  phrasal: [
    { t: "mc", q: "Como se diz «Liga isso»?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "O pronome \"it\" fica no meio do phrasal verb: \"turn it on\"." },
    { t: "mc", q: "Como se diz «Acabou o leite»?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "\"Run out of\" = ficar sem algo. Não esqueça o \"of\"." },
    { t: "mc", q: "Como se diz «Cresci em Santiago»?", o: ["I grew up in Santiago.", "I grew in Santiago up.", "I growed up in Santiago.", "I grew out in Santiago."], why: "\"Grow up\" = crescer (uma pessoa). O passado é \"grew up\"." },
    { t: "mc", q: "Como se diz «Você pode cuidar do meu gato?»", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "\"Look after\" = cuidar de, e não se separa. \"Look for\" significa «procurar»." },
    { t: "mc", q: "Como se diz «Continua, estou ouvindo»?", o: ["Go on, I'm listening.", "Go out, I'm listening.", "Go in, I'm listening.", "Go up, I'm listening."], why: "\"Go on\" = continuar. Numa conversa, soa mais natural que \"continue\", que é mais formal." },

    { t: "order", p: "Ela cuida do seu gato?", a: ["Does", "she", "look", "after", "your", "cat"], x: ["looks"], why: "A pergunta com \"she\" leva o auxiliar \"does\", e o verbo fica sem -s: \"look after\"." },
    { t: "order", p: "Ele se dá bem com todo mundo", a: ["He", "gets", "along", "with", "everyone"], x: ["get"], why: "Com \"he\", o verbo ganha -s: terceira pessoa. \"Gets along with\" = se dá bem com." },
    { t: "order", p: "Eu passo para te pegar", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "O pronome \"you\" fica entre \"pick\" e \"up\"." },

    { t: "fill", q: "Can you turn it __?", p: "Você pode desligar isso?", a: ["off"], o: ["of", "on", "out"], why: "Desligar é \"turn off\". Não confunda com \"of\"." },
    { t: "fill", q: "I work __ every morning.", p: "Eu malho todas as manhãs", a: ["out"], o: ["up", "off", "on"], why: "\"Work out\" = malhar, fazer exercício." },
    { t: "fill", q: "We ran out of __.", p: "Acabaram os ovos", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Com algo contável, como ovos, vai o plural: \"eggs\"." },

    { t: "type", p: "Desliga isso, por favor", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — o pronome vai no meio", x: ["on"], why: "O pronome \"it\" fica entre \"turn\" e \"off\"." },
    { t: "type", p: "Ela cuida da mãe dela", a: ["She looks after her mother", "She looks after her mom", "She takes care of her mother", "She takes care of her mom"], hint: "look after · mother — começa com \"she\"", x: ["look"], why: "Com \"she\", o verbo ganha -s: \"looks after\". Terceira pessoa." },
    { t: "type", p: "Você se dá bem com o seu chefe?", a: ["Do you get along with your boss", "Do you get on with your boss"], hint: "get along with · boss — é uma pergunta com \"do\"", x: ["are"], why: "A pergunta no presente leva o auxiliar \"do\" antes do sujeito." }
  ],

  numbers: [
    { t: "mc", q: "Como se lê 2.5 (dois vírgula cinco)?", o: ["two point five", "two comma five", "two and five", "twenty-five"], why: "Em inglês, a casa decimal se escreve e se lê com ponto: \"point\"." },
    { t: "mc", q: "Como se diz «um bilhão»?", o: ["one billion", "one million", "ten million", "one trillion"], why: "\"Billion\" = bilhão, mil milhões, como no Brasil. \"Trillion\" já é trilhão." },
    { t: "mc", q: "Como se lê 9:05?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Do minuto 1 ao 9, diz-se \"oh\" antes do número." },
    { t: "mc", q: "Qual é a leitura natural de $4.99?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Preços se leem como dois números: \"four ninety-nine\"." },
    { t: "mc", q: "Como se lê o ano 1990?", o: ["nineteen ninety", "one thousand nine hundred ninety", "one nine nine zero", "nineteen hundred nine"], why: "Anos se leem de dois em dois: 19 | 90." },

    { t: "order", p: "Que horas são?", a: ["What", "time", "is", "it"], x: ["are"], why: "Na pergunta, \"is\" vem antes do sujeito \"it\": \"What time is it?\" Com \"it\", \"is\": concordância." },
    { t: "order", p: "Quanto custa?", a: ["How", "much", "does", "it", "cost"], x: ["costs", "is"], why: "A pergunta leva o auxiliar \"does\", e o verbo fica sem -s: \"cost\"." },
    { t: "order", p: "São quinze dólares", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Mais de um dólar: \"dollars\", no plural. \"Fifteen\" tem a força no fim; \"fifty\", no começo." },

    { t: "fill", q: "It's __ quarter past ten.", p: "São dez e quinze", a: ["a"], o: ["the", "one", "an"], why: "Antes de \"quarter\" (um quarto de hora, 15 minutos) vai \"a\"." },
    { t: "fill", q: "That's fifty __ dollars.", p: "São cinquenta mil dólares", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "Depois de um número, \"thousand\" não leva -s: \"fifty thousand\"." },
    { t: "fill", q: "I'll be there in ten __.", p: "Chego em dez minutos", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "São dez: \"minutes\", no plural." },

    { t: "type", p: "São três e meia", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30"], hint: "three · thirty — a hora e os minutos, do jeito que estão", x: ["thirteen"], why: "A hora precisa de sujeito em inglês: \"It's three thirty\". Não confunda com \"thirteen\" (13)." },
    { t: "type", p: "Custa vinte dólares", a: ["It costs twenty dollars", "It costs 20 dollars", "It's twenty dollars", "It is twenty dollars", "It's 20 dollars", "It is 20 dollars"], hint: "cost · twenty · dollar — começa com \"it\"", x: ["cost"], why: "Com \"it\", o verbo ganha -s: \"costs\". Terceira pessoa." },
    { t: "type", p: "Ela corre duas vezes por semana", a: ["She runs twice a week", "She goes running twice a week"], hint: "run · twice · week — começa com \"she\"", x: ["run"], why: "Com \"she\", o verbo ganha -s: \"runs\". Terceira pessoa. «Por semana» = \"a week\"." }
  ],

  email: [
    { t: "mc", q: "Se você começa com \"Dear\", qual é a saudação mais natural?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Depois de \"Dear\" vem o nome da pessoa, não só o cargo." },
    { t: "mc", q: "Você avisa que anexou o relatório:", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "É o relatório específico que a pessoa vai receber: \"the report\"." },
    { t: "mc", q: "Como se diz «Fico no aguardo da sua resposta»?", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I stay waiting your answer.", "I wait your answer."], why: "Depois de \"look forward to\" vem a forma -ing: \"hearing\". \"I stay waiting\" é tradução literal de «fico aguardando»." },
    { t: "mc", q: "Você respondeu tarde. Que frase positiva usar em vez de pedir desculpas?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "\"Thanks for your patience\" soa gentil sem pedir desculpas. Cuidado: \"patients\" significa «pacientes» (de um médico)." },
    { t: "mc", q: "Qual despedida combina com um e-mail de sexta-feira?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "É um fim de semana: \"a great weekend\", no singular." },

    { t: "order", p: "Você recebeu meu e-mail?", a: ["Did", "you", "get", "my", "email"], x: ["got"], why: "A pergunta no passado leva o auxiliar \"did\", e o verbo fica na forma base: \"get\"." },
    { t: "order", p: "O relatório está em anexo", a: ["The", "report", "is", "attached"], x: ["are"], why: "Um só sujeito (\"the report\") pede \"is\": concordância." },
    { t: "order", p: "Vou verificar e te retorno", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "\"Get back to you\" = dar um retorno, responder depois. Vai com \"to\"." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Você poderia me enviar o arquivo até sexta?", a: ["by"], o: ["until", "in", "at"], why: "Para um prazo («até, no máximo, sexta») se usa \"by\" + data." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Escrevo para perguntar sobre o cronograma", a: ["to"], o: ["for", "about", "at"], why: "Para dizer a finalidade: \"I'm writing to\" + verbo." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Agradeço todo o seu empenho!", a: ["work"], o: ["works", "working", "job"], why: "\"Work\" (trabalho, esforço) é incontável: não leva -s." },

    { t: "type", p: "Amanhã estou de folga", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — é com be", x: ["have"], why: "«Estar de folga» se diz com \"be off\"." },
    { t: "type", p: "Qual é o prazo?", a: ["When is the deadline", "When's the deadline", "What's the deadline", "What is the deadline"], hint: "when · deadline — pergunta com \"is\"", x: ["are"], why: "Na pergunta, \"is\" vem antes do sujeito (\"the deadline\")." },
    { t: "type", p: "Ela está de férias esta semana", a: ["She is on vacation this week", "She's on vacation this week"], hint: "vacation · this week — é com \"on\"", x: ["are"], why: "Com \"she\", be é \"is\": terceira pessoa. «De férias» = \"on vacation\"." }
  ],

  idioms: [
    { t: "mc", q: "Como se diz «É moleza»?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Expressões se aprendem do jeito que são: com \"a\", e \"cake\" no singular." },
    { t: "mc", q: "Como se diz «Custa os olhos da cara»?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "\"Arm\" começa com som de vogal (\"an arm\"); \"leg\", com consoante (\"a leg\")." },
    { t: "mc", q: "Como se diz «Você está tirando com a minha cara»?", o: ["You're pulling my leg.", "You're taking my hair.", "You're pulling my hair.", "You're cutting my hair."], why: "«Tirar com a cara de alguém» é \"pull someone's leg\" («puxar a perna»). A tradução literal não existe em inglês." },
    { t: "mc", q: "Como se diz «Estou nas nuvens» (de tão feliz)?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "\"On cloud nine\" é assim mesmo: sem artigo e sem -s." },
    { t: "mc", q: "Qual destas é gíria, só para usar entre amigos?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "\"No cap\" («sério, sem mentira») é gíria jovem. As outras são expressões que também se usam no trabalho." },

    { t: "order", p: "Ele está tirando com a sua cara?", a: ["Is", "he", "pulling", "your", "leg"], x: ["Does"], why: "Na pergunta, o auxiliar \"is\" vem antes do sujeito. «Tirar com a cara» = \"pull someone's leg\"." },
    { t: "order", p: "Ela não está se sentindo bem", a: ["She", "feels", "under", "the", "weather"], x: ["feel"], why: "Com \"she\", o verbo ganha -s: \"feels\". Terceira pessoa." },
    { t: "order", p: "Não é a minha praia", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "\"Not my cup of tea\" = não é a minha praia. Usa-se do jeito que é, com \"my\"." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Matar dois coelhos com uma cajadada só", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Em inglês são dois pássaros, não coelhos: \"birds\", no plural. E com uma pedra (\"stone\")." },
    { t: "fill", q: "Speak of the __!", p: "Falando no diabo!", a: ["devil"], o: ["king", "angel", "wolf"], why: "Igualzinho ao português: \"the devil\" = o diabo." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Não estou me sentindo muito bem", a: ["the"], o: ["a", "an", "my"], why: "\"Under the weather\" se diz sempre com \"the\"." },

    { t: "type", p: "É moleza", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — não esqueça o sujeito", x: ["the"], why: "O inglês precisa de sujeito onde o português não usa: \"It's a piece of cake\"." },
    { t: "type", p: "Vamos parar por hoje", a: ["Let's call it a day"], hint: "call it · day — com \"a\", não com \"the\"", x: ["the"], why: "\"Call it a day\" se diz com \"a\", não com \"the\"." },
    { t: "type", p: "Está chovendo canivetes?", a: ["Is it raining cats and dogs"], hint: "rain · cats · dogs — pergunta com \"is\"", x: ["Does"], why: "Na pergunta, \"is\" vem antes do sujeito \"it\": \"Is it raining…?\"" }
  ]
};
