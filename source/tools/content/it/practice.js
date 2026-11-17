/* Practice sets for the original 11 lessons of the it-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Italian; answers are English (shared with es-en except where deviations.json says).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing verb-core rule (docs/profiles/it.md §7): at least half of the order + type items hinge on agreement,
   the auxiliary in questions and negatives, or (typed) dummy it/there, and their why names it
   (soggetto | ausiliare | terza persona | accordo | concordanza). */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "Quale parola significa «pecora»?", o: ["sheep", "ship", "cheap", "chip"], why: "\"Sheep\" ha la i lunga e tesa /iː/. Con la /ɪ/ rilassata, \"ship\" significa «nave»: cambia la qualità della vocale, non solo la lunghezza." },
    { t: "mc", q: "Quale parola significa «capelli»?", o: ["hair", "air", "ear", "here"], why: "\"Hair\" comincia con la h: un soffio che si sente. Senza h diventa \"air\", «aria»." },
    { t: "mc", q: "Quale parola significa «scarpe»?", o: ["shoes", "choose", "juice", "chose"], why: "\"Shoes\" comincia con sh, la «sc» di «scena». \"Choose\" («scegliere») comincia con ch, che in inglese è la «c» di «ciao», non una «k»." },
    { t: "mc", q: "Quale parola significa «sciocco»?", o: ["fool", "full", "fall", "fill"], why: "\"Fool\" ha la u lunga /uː/. \"Full\", con la /ʊ/ breve e rilassata, significa «pieno»." },
    { t: "mc", q: "Quale parola significa «gatto»?", o: ["cat", "cut", "cart", "cute"], why: "\"Cat\" ha la /æ/, una «a» molto aperta, quasi «è». \"Cut\" («tagliare») ha la /ʌ/, più breve e più chiusa." },

    { t: "order", p: "Il mio albergo è a Roma", a: ["My", "hotel", "is", "in", "Rome"], x: ["are", "at"], why: "La h di \"hotel\" si sente, e «a Roma» è \"in Rome\", non \"at Rome\". Un solo soggetto (\"my hotel\") vuole \"is\": accordo." },
    { t: "order", p: "La zuppa è molto calda?", a: ["Is", "the", "soup", "very", "hot"], x: ["are"], why: "Nella domanda \"is\" va prima del soggetto (\"the soup\"), al singolare per l'accordo. E la h di \"hot\" si sente." },
    { t: "order", p: "Veniamo dall'Italia", a: ["We", "are", "from", "Italy"], x: ["is"], why: "Con \"we\" il verbo be è \"are\": accordo. «Venire da» un paese si dice con be: \"be from\"." },

    { t: "fill", q: "__is is my sister.", p: "Questa è mia sorella", a: ["Th"], o: ["D", "T", "Z"], why: "\"This\" comincia con il th sonoro /ð/: la lingua tra i denti, con la voce. Non è una «d»." },
    { t: "fill", q: "I __ink so.", p: "Credo di sì", a: ["th"], o: ["s", "t", "f"], why: "\"Think\" comincia con th: la punta della lingua tra i denti. Non «tink»; e con la s diventa \"sink\" («lavandino»)." },
    { t: "fill", q: "Welcome to my __ouse.", p: "Benvenuti a casa mia", a: ["h"], o: ["r", "m", "l"], why: "\"House\" comincia con la h: un soffio che si sente. In inglese questa h non è muta." },

    { t: "type", p: "Ci sono tre alberi", a: ["There are three trees"], hint: "three · tree — la frase comincia con \"there\"", x: ["is"], why: "«Ci sono» si dice \"There are\": \"there\" fa da soggetto e il verbo va al plurale per l'accordo. \"Three\" comincia con th, \"tree\" con tr." },
    { t: "type", p: "Fa molto caldo", a: ["It's very hot", "It is very hot", "It's really hot", "It is really hot", "It's so hot", "It is so hot"], hint: "very · hot — la h si sente", x: ["makes"], why: "Il soggetto \"it\" è obbligatorio e il verbo è \"is\": \"It's very hot\", non \"It makes very hot\". E la h di \"hot\" si sente." },
    { t: "type", p: "Credo di sì", a: ["I think so"], hint: "think — la lingua tra i denti", x: ["sink"], why: "\"Think\" comincia con th: la lingua tra i denti, né t né s." }
  ],

  articles: [
    { t: "mc", q: "Come si dice «Sono studente» (o «studentessa»)?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "In inglese professioni e occupazioni vogliono \"a/an\", anche se in italiano non usi l'articolo." },
    { t: "mc", q: "Come si dice «un'ora»?", o: ["an hour", "a hour", "one hours", "hour"], why: "La h di \"hour\" è muta: la parola comincia con un suono vocalico, perciò ci vuole \"an\"." },
    { t: "mc", q: "Come si dice «La vita è dura»?", o: ["Life is hard.", "The life is hard.", "A life is hard.", "The lives are hard."], why: "Quando parli di qualcosa in generale o di un'idea astratta, l'inglese non usa l'articolo." },
    { t: "mc", q: "Come si dice «Adoro i cani» (in generale)?", o: ["I love dogs.", "I love the dogs.", "I love a dog.", "I love dog."], why: "Per parlare in generale: plurale senza articolo. \"The dogs\" sarebbero dei cani precisi." },
    { t: "mc", q: "Come si dice «Lavati le mani»?", o: ["Wash your hands.", "Wash the hands.", "Wash hands.", "Wash the your hands."], why: "Con le parti del corpo l'inglese usa l'aggettivo possessivo (\"my\", \"your\", \"her\"), non \"the\". E mai i due insieme come in «le tue mani»: \"the your hands\" non esiste." },

    { t: "order", p: "Mia sorella è infermiera", a: ["My", "sister", "is", "a", "nurse"], x: ["are", "the"], why: "Con le professioni ci vuole \"a\": \"a nurse\". Un solo soggetto (\"my sister\") vuole \"is\": accordo." },
    { t: "order", p: "Lei è medico? (parlando di una collega)", a: ["Is", "she", "a", "doctor"], x: ["the"], why: "Nella domanda \"is\" va prima del soggetto. E con le professioni ci vuole \"a\": \"a doctor\"." },
    { t: "order", p: "Il caffè è caro (in generale)", a: ["Coffee", "is", "expensive"], x: ["The", "are"], why: "In generale \"coffee\" non ha articolo. Un nome non numerabile vuole \"is\": accordo." },

    { t: "fill", q: "I'm __ university student.", p: "Studio all'università", a: ["a"], o: ["an", "the", "two"], why: "\"University\" comincia con il suono /j/, consonantico: \"a university\". Conta il suono, non la lettera." },
    { t: "fill", q: "Close __ eyes.", p: "Chiudi gli occhi", a: ["your"], o: ["the", "you", "a"], why: "Con le parti del corpo ci vuole il possessivo: \"your eyes\", non \"the eyes\"." },
    { t: "fill", q: "__ is a virtue.", p: "La pazienza è una virtù", a: ["Patience"], o: ["The patience", "A patience", "Patiences"], why: "Le idee astratte, in generale, non hanno articolo in inglese." },

    { t: "type", p: "Lei è infermiera", a: ["She is a nurse", "She's a nurse"], hint: "nurse — la professione vuole l'articolo", x: ["the"], why: "La professione vuole \"a\", e con \"she\" il verbo be è \"is\": terza persona." },
    { t: "type", p: "Mio fratello è ingegnere", a: ["My brother is an engineer", "My brother's an engineer"], hint: "brother · engineer — \"a\" o \"an\" secondo il suono", x: ["a"], why: "\"Engineer\" comincia con un suono vocalico: \"an engineer\". Con \"my brother\" (terza persona), be è \"is\"." },
    { t: "type", p: "Mi fa male la schiena", a: ["My back hurts", "I have a backache"], hint: "back · hurt — usa il possessivo", x: ["the"], why: "Con le parti del corpo ci vuole il possessivo: \"my back\", non \"the back\". Con \"my back\" (terza persona) il verbo prende la -s: \"hurts\"." }
  ],

  be: [
    { t: "mc", q: "Come si dice «Ho fame»?", o: ["I'm hungry.", "I have hungry.", "I have hunger.", "I hungry."], why: "Fame, sete, freddo, sonno: in inglese si dicono con \"be\", non con \"have\"." },
    { t: "mc", q: "Come si dice «Ho 30 anni»?", o: ["I'm 30.", "I have 30 years.", "I have 30.", "I'm 30 years."], why: "L'età vuole \"be\": \"I'm 30\" o \"I'm 30 years old\". \"30 years\" senza \"old\" non si usa." },
    { t: "mc", q: "Come si dice «È tardi»?", o: ["It's late.", "Is late.", "Late is.", "It late."], why: "In inglese la frase ha bisogno di un soggetto (\"it\") e anche del verbo be (\"is\")." },
    { t: "mc", q: "Scegli la domanda corretta: «Lui parla inglese?»", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "Con \"he\" ci vuole \"does\", e dopo il verbo va senza -s." },
    { t: "mc", q: "Come si dice «Hai ragione»?", o: ["You're right.", "You have reason.", "You have right.", "You're reason."], why: "«Avere ragione» si dice con be: \"you're right\"." },

    { t: "order", p: "Mio fratello lavora a Lima", a: ["My", "brother", "works", "in", "Lima"], x: ["work", "is"], why: "Con un solo soggetto (\"my brother\" = \"he\") il verbo prende la -s: terza persona. Senza \"is\"." },
    { t: "order", p: "Hai freddo?", a: ["Are", "you", "cold"], x: ["Do", "have"], why: "Con be non si usa \"do\": \"are\" va prima del soggetto. E «avere freddo» si dice con be: \"cold\"." },
    { t: "order", p: "Lei ha due cani", a: ["She", "has", "two", "dogs"], x: ["have", "is"], why: "Con \"she\", \"have\" diventa \"has\": terza persona." },

    { t: "fill", q: "My brother __ in Lima.", p: "Mio fratello abita a Lima", a: ["lives"], o: ["live", "is live", "living"], why: "Con \"he\" (\"my brother\") il verbo prende la -s: \"lives\"." },
    { t: "fill", q: "__ you hungry?", p: "Hai fame?", a: ["Are"], o: ["Do", "Is", "Have"], why: "«Avere fame» si dice con be, e con \"you\" è \"are\"." },
    { t: "fill", q: "We __ cold.", p: "Abbiamo freddo", a: ["are"], o: ["have", "is", "do"], why: "«Avere freddo» vuole be, e con \"we\" è \"are\"." },

    { t: "type", p: "Lui è insegnante", a: ["He is a teacher", "He's a teacher"], hint: "teacher — la professione vuole l'articolo", x: ["the"], why: "Con \"he\" be è \"is\": terza persona. La professione vuole \"a\"." },
    { t: "type", p: "Ho 25 anni", a: ["I'm 25", "I am 25", "I'm 25 years old", "I am 25 years old", "I'm twenty-five", "I am twenty-five", "I'm twenty-five years old", "I am twenty-five years old"], hint: "25 — si dice con be, non con have", x: ["have"], why: "L'età si dice con \"be\", non con \"have\"." },
    { t: "type", p: "È tardi", a: ["It's late", "It is late"], hint: "late — manca il soggetto", x: ["is"], why: "In inglese il soggetto è obbligatorio: \"It's late\", mai \"Is late\"." }
  ],

  polite: [
    { t: "mc", q: "Al bar, come ordini un \"latte\" nel modo più naturale?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "In un negozio o in un bar \"Can I get…?\" è la forma naturale. Ed è un caffè solo: \"a latte\" (negli Stati Uniti, un caffellatte)." },
    { t: "mc", q: "Qual è il modo più gentile di chiedere aiuto a uno sconosciuto?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "\"Could you…?\" è il modo gentile di chiedere qualcosa a uno sconosciuto." },
    { t: "mc", q: "Non hai capito che cosa ti hanno detto. Come chiedi con gentilezza di ripetere?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "\"Could you say that again?\" è il modo gentile di chiedere di ripetere qualcosa." },
    { t: "mc", q: "Chiedi con molta cortesia: «Le dispiacerebbe farci una foto?»", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Dopo \"mind\" ci vuole la forma in -ing: \"taking\"." },
    { t: "mc", q: "In aereo: «Vorrei un posto vicino al finestrino»", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "\"I'd like…\" è una richiesta educata. È un posto solo: \"a window seat\"." },

    { t: "order", p: "Mi dai un caffellatte?", a: ["Can", "I", "get", "a", "latte"], x: ["gets", "give"], why: "Per ordinare, l'ausiliare \"can\" va prima del soggetto (\"Can I get…?\", non \"I can get…?\") e il verbo resta alla forma base: \"get\", non \"gets\"." },
    { t: "order", p: "Ti dispiacerebbe aprire la finestra? (quella di questa stanza)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "minds"], why: "Nella domanda l'ausiliare \"would\" va prima di \"you\" e \"mind\" resta alla forma base, senza -s. Dopo \"mind\" ci vuole la forma in -ing." },
    { t: "order", p: "Potresti parlare più lentamente?", a: ["Could", "you", "speak", "more", "slowly"], x: ["speaks", "slow"], why: "L'ausiliare \"could\" va prima del soggetto (\"Could you…?\") e il verbo resta alla forma base: \"speak\", mai \"speaks\"." },

    { t: "fill", q: "Would you mind __ the door?", p: "Ti dispiacerebbe chiudere la porta?", a: ["closing"], o: ["close", "to close", "closed"], why: "Dopo \"mind\" ci vuole la forma in -ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Mi dai un caffè freddo?", a: ["an"], o: ["a", "two", "many"], why: "\"Iced\" comincia con un suono vocalico (/aɪ/): \"an\"." },
    { t: "fill", q: "No, not at __.", p: "(Risposta a \"Would you mind…?\") No, figurati. Certo che lo faccio.", a: ["all"], o: ["any", "one", "ever"], why: "\"No, not at all\" = «non mi dispiace affatto», cioè «certo, lo faccio»." },

    { t: "type", p: "Potresti aiutarmi? (con gentilezza)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — una richiesta gentile", x: ["can"], why: "La domanda gentile comincia con l'ausiliare \"could\", prima di \"you\"." },
    { t: "type", p: "Vorrei un posto vicino al finestrino", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — un posto, con l'articolo", x: ["the"], why: "Per chiedere qualcosa: \"I'd like…\". È un posto solo, nominato per la prima volta: \"a window seat\"." },
    { t: "type", p: "Posso pagare con la carta?", a: pl(["Can I pay by card", "Could I pay by card", "Can I pay with a card", "Could I pay with a card", "Can I pay by credit card", "Could I pay by credit card"]), hint: "can · pay · card — la domanda comincia con l'ausiliare", x: ["pays"], why: "Nella domanda l'ausiliare \"can\" va prima del soggetto: \"Can I pay…?\", mai \"I can pay…?\"." }
  ],

  tense: [
    { t: "mc", q: "Come si dice «Sto bevendo un caffè proprio adesso»?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Quello che succede in questo momento va al present continuous: be + forma in -ing." },
    { t: "mc", q: "Come si dice «Che fai?» (in questo momento)?", o: ["What are you doing?", "What do you do?", "What you are doing?", "What you do?"], why: "Per quello che succede adesso l'inglese usa il present continuous. \"What do you do?\" chiede che lavoro fai." },
    { t: "mc", q: "Parli dei tuoi progetti: «Il mese prossimo visiterò Città del Messico»", o: ["I'm going to visit Mexico City next month.", "I visit Mexico City next month.", "I visited Mexico City next month.", "I'm going visit Mexico City next month."], why: "Per un progetto già deciso: \"be going to\" + forma base. Non dimenticare il \"to\"." },
    { t: "mc", q: "Suona il campanello e decidi sul momento: «Vado io!»", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Una decisione presa sul momento vuole \"will\"." },
    { t: "mc", q: "Qual è il passato di \"see\"?", o: ["saw", "seed", "seen", "sawed"], why: "\"See\" è irregolare: see – saw – seen." },

    { t: "order", p: "Lei lavora in banca", a: ["She", "works", "at", "a", "bank"], x: ["work", "working"], why: "Un'abitudine va al present simple; con \"she\" il verbo prende la -s: terza persona." },
    { t: "order", p: "Hai fatto un salto al mare?", a: ["Did", "you", "go", "to", "the", "beach"], x: ["went"], why: "Al passato la domanda vuole l'ausiliare \"did\" e il verbo alla forma base: \"go\", non \"went\"." },
    { t: "order", p: "Ti chiamo più tardi", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Una promessa fatta sul momento vuole \"will\"." },

    { t: "fill", q: "I __ pizza last night.", p: "Ieri sera ho mangiato la pizza", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "\"Eat\" è irregolare: il passato è \"ate\" (oppure \"had\", se usi \"have\")." },
    { t: "fill", q: "__ you have fun?", p: "È stato divertente?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Per chiedere del passato: \"Did\" + verbo alla forma base." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Vado a trovare i miei genitori (è già deciso)", a: ["to"], o: ["for", "at", "on"], why: "Per un progetto già deciso: \"going to\" + forma base. L'italiano usa il presente, l'inglese no." },

    { t: "type", p: "Che cosa stai facendo?", a: ["What are you doing"], hint: "what · do — quello che succede ora", x: ["do"], why: "Nella domanda l'ausiliare \"are\" va prima del soggetto: \"What are you doing?\"" },
    { t: "type", p: "Lei non ha visto il film (al past simple)", a: ["She didn't see the movie", "She did not see the movie", "She didn't watch the movie", "She did not watch the movie"], hint: "see · movie — una frase negativa al passato", x: ["saw"], why: "Nella negativa al passato c'è l'ausiliare \"didn't\" e il verbo resta alla forma base: \"see\"." },
    { t: "type", p: "Oggi sto lavorando da casa", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — usa il present continuous", x: ["work"], why: "Quello che fai oggi, in questo periodo, va al present continuous." }
  ],

  prep: [
    { t: "mc", q: "Come si dice «a maggio»?", o: ["in May", "on May", "at May", "to May"], why: "Con i mesi ci vuole \"in\"." },
    { t: "mc", q: "Come si dice «il 3 maggio»?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "the May 3rd"], why: "Con le date ci vuole \"on\", senza articolo, anche se in italiano dici «il 3 maggio»." },
    { t: "mc", q: "Come si dice «Sono sull'autobus»?", o: ["I'm on the bus.", "I'm in bus.", "I'm at the bus.", "I'm on bus."], why: "Con i mezzi pubblici (\"bus\", \"train\", \"plane\") ci vuole \"on\"." },
    { t: "mc", q: "Come si dice «di notte»?", o: ["at night", "on night", "in night", "at the night"], why: "\"Night\" è un'eccezione: \"at night\", senza articolo." },
    { t: "mc", q: "Qual è la frase corretta per «Abito a Lima»?", o: ["I live in Lima.", "I live at Lima.", "I live on Lima.", "I live in the Lima."], why: "Con città e paesi ci vuole \"in\", senza articolo: «a Lima» non è \"at Lima\"." },

    { t: "order", p: "Il mio cellulare è sul tavolo", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "are"], why: "Sopra una superficie ci vuole \"on\". Un solo soggetto (\"my phone\") vuole \"is\": accordo." },
    { t: "order", p: "Lavori il sabato?", a: ["Do", "you", "work", "on", "Saturdays"], x: ["in"], why: "La domanda vuole l'ausiliare \"do\" prima del soggetto. Con i giorni ci vuole \"on\": \"on Saturdays\"." },
    { t: "order", p: "Ci vediamo la settimana prossima", a: ["See", "you", "next", "week"], x: ["on"], why: "Con \"next\" non c'è preposizione." },

    { t: "fill", q: "The meeting is __ three.", p: "La riunione è alle tre", a: ["at"], o: ["on", "to", "of"], why: "Con un'ora precisa ci vuole \"at\"." },
    { t: "fill", q: "I was born __ 1998.", p: "Sono del 1998", a: ["in"], o: ["on", "at", "to"], why: "Con gli anni ci vuole \"in\"." },
    { t: "fill", q: "See you __ Friday.", p: "Ci vediamo venerdì", a: ["on"], o: ["in", "at", "to"], why: "Con i giorni della settimana ci vuole \"on\"." },

    { t: "type", p: "Lei beve il caffè la mattina", a: ["She drinks coffee in the morning", "She has coffee in the morning", "In the morning she drinks coffee", "In the morning she has coffee"], hint: "drink · coffee · morning — usa \"in\" e l'articolo", x: ["at"], why: "Con \"she\" il verbo prende la -s: terza persona. Parti del giorno: \"in the morning\"." },
    { t: "type", p: "Sono a casa", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — qui non c'è articolo", x: ["the"], why: "\"At home\" non ha \"the\" (e non si usa mai \"in\")." },
    { t: "type", p: "La riunione è lunedì?", a: ["Is the meeting on Monday"], hint: "meeting · Monday — usa \"on\" con il giorno", x: ["in"], why: "Nella domanda \"is\" va prima del soggetto (\"the meeting\"). Con i giorni ci vuole \"on\", senza articolo." }
  ],

  smalltalk: [
    { t: "mc", q: "Un collega ti chiede \"How was your weekend?\" Che cosa rispondi?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Ti chiedono di una cosa passata: rispondi al passato e aggiungi un dettaglio." },
    { t: "mc", q: "Qualcuno dice \"I don't drink coffee.\" Come dici «Neanch'io»?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "«Neanch'io» è \"Me neither\". \"Me too\" vuol dire «anch'io»." },
    { t: "mc", q: "Come chiudi la conversazione con naturalezza?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "\"I should get going\" è un modo morbido per congedarti." },
    { t: "mc", q: "Quale frase va bene per attaccare discorso con una persona appena conosciuta?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Il tempo è l'argomento più sicuro per due chiacchiere." },
    { t: "mc", q: "Qualcuno ti racconta \"I went to Cartagena last weekend.\" Quale risposta mostra interesse?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "\"Oh, really?\" e \"That sounds fun!\" mostrano interesse." },

    { t: "order", p: "Che lavoro fai?", a: ["What", "do", "you", "do"], x: ["are", "does"], why: "Nella domanda c'è l'ausiliare \"do\" prima del soggetto: \"What do you do?\"" },
    { t: "order", p: "Di dove sei?", a: ["Where", "are", "you", "from"], x: ["is", "do"], why: "Nella domanda \"are\" va prima del soggetto: \"Where are you from?\" Con \"you\", \"are\": accordo." },
    { t: "order", p: "È stato un piacere parlare con te", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "È un saluto tipico: dopo \"nice\" ci vuole la forma in -ing (\"talking\")." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Abbastanza bene! E tu?", a: ["about"], o: ["for", "with", "of"], why: "Rispondi in breve e ricambia la domanda con \"How about you?\"" },
    { t: "fill", q: "I know, __?", p: "Vero? / Proprio così!", a: ["right"], o: ["no", "yes", "true"], why: "\"I know, right?\" serve a dare ragione a qualcuno con enfasi." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Hai visto qualcosa di bello ultimamente?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Dopo \"any\", in una domanda, i nomi numerabili vanno al plurale. In italiano si dice «gli show», ma in inglese ci vuole la -s: \"shows\"." },

    { t: "type", p: "Com'è stato il tuo fine settimana?", a: ["How was your weekend"], hint: "how · weekend — la domanda è al passato", x: ["is"], why: "Nella domanda \"was\" va prima del soggetto (\"your weekend\"): \"How was your weekend?\"" },
    { t: "type", p: "Abiti da queste parti?", a: ["Do you live around here", "Do you live near here", "Do you live nearby"], hint: "live · around here — domanda con \"do\"", x: ["are"], why: "Al presente la domanda vuole l'ausiliare \"do\" prima del soggetto: \"Do you live…?\"" },
    { t: "type", p: "Che bel tempo oggi!", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — c'è l'articolo?", x: ["a"], why: "\"Weather\" è non numerabile: niente \"a\" (non si dice \"a nice weather\")." }
  ],

  phrasal: [
    { t: "mc", q: "Come si dice «Accendilo»?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Il pronome \"it\" va in mezzo al phrasal verb: \"turn it on\"." },
    { t: "mc", q: "Come si dice «Abbiamo finito il latte»?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "\"Run out of\" = rimanere senza. Non dimenticare \"of\"." },
    { t: "mc", q: "Come si dice «Ho passato l'infanzia a Santiago»?", o: ["I grew up in Santiago.", "I grew in Santiago up.", "I growed up in Santiago.", "I grew out in Santiago."], why: "\"Grow up\" = crescere, diventare grandi (detto di una persona). Il passato è \"grew up\"." },
    { t: "mc", q: "Come si dice «Puoi badare al mio gatto?»", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "\"Look after\" = badare a, e non si separa. \"Look for\" significa «cercare»." },
    { t: "mc", q: "Come si dice «Vai avanti, ti ascolto»?", o: ["Go on, I'm listening.", "Go out, I'm listening.", "Go in, I'm listening.", "Go up, I'm listening."], why: "\"Go on\" = andare avanti. In una conversazione suona più naturale di \"continue\", che è più formale." },

    { t: "order", p: "Lei bada al tuo gatto?", a: ["Does", "she", "look", "after", "your", "cat"], x: ["looks"], why: "La domanda con \"she\" vuole l'ausiliare \"does\", e il verbo resta senza -s: \"look after\"." },
    { t: "order", p: "Lui va d'accordo con tutti", a: ["He", "gets", "along", "with", "everyone"], x: ["get"], why: "Con \"he\" il verbo prende la -s: terza persona. \"Get along with\" = andare d'accordo con." },
    { t: "order", p: "Passo a prenderti", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Il pronome \"you\" va tra \"pick\" e \"up\"." },

    { t: "fill", q: "Can you turn it __?", p: "Puoi spegnerlo?", a: ["off"], o: ["of", "on", "out"], why: "Spegnere è \"turn off\". Non confonderlo con \"of\"." },
    { t: "fill", q: "I work __ every morning.", p: "Mi alleno tutte le mattine", a: ["out"], o: ["up", "off", "on"], why: "\"Work out\" = allenarsi, fare esercizio fisico." },
    { t: "fill", q: "We ran out of __.", p: "Abbiamo finito le uova", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Con una cosa numerabile come le uova ci vuole il plurale: \"eggs\"." },

    { t: "type", p: "Spegnilo, per favore", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — il pronome va in mezzo", x: ["on"], why: "Il pronome \"it\" va tra \"turn\" e \"off\"." },
    { t: "type", p: "Lei si prende cura di sua madre", a: ["She looks after her mother", "She looks after her mom", "She takes care of her mother", "She takes care of her mom"], hint: "look after · mother — il soggetto è \"she\"", x: ["look"], why: "Con \"she\" il verbo prende la -s: \"looks after\". Terza persona." },
    { t: "type", p: "Vai d'accordo con il tuo capo?", a: ["Do you get along with your boss", "Do you get on with your boss"], hint: "get along with · boss — domanda con \"do\"", x: ["are"], why: "Al presente la domanda vuole l'ausiliare \"do\" prima del soggetto." }
  ],

  numbers: [
    { t: "mc", q: "Come si legge 2.5 (in italiano 2,5)?", o: ["two point five", "two comma five", "two and five", "twenty-five"], why: "In inglese i decimali si scrivono e si leggono con il punto: \"point\"." },
    { t: "mc", q: "Come si dice «un miliardo»?", o: ["one billion", "one million", "ten million", "one trillion"], why: "\"Billion\" = un miliardo. Attenzione: \"one trillion\" sono mille miliardi." },
    { t: "mc", q: "Come si legge 9:05?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Dal minuto 1 al 9 si dice \"oh\" prima del numero." },
    { t: "mc", q: "Come si legge con naturalezza $4.99?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "I prezzi si leggono come due numeri: \"four ninety-nine\"." },
    { t: "mc", q: "Come si legge l'anno 1990?", o: ["nineteen ninety", "one thousand nine hundred ninety", "one nine nine zero", "nineteen hundred nine"], why: "Gli anni si leggono a due a due: 19 | 90." },

    { t: "order", p: "Che ore sono?", a: ["What", "time", "is", "it"], x: ["are"], why: "Nella domanda \"is\" va prima del soggetto \"it\": \"What time is it?\" Con \"it\", \"is\": accordo." },
    { t: "order", p: "Quanto costa?", a: ["How", "much", "does", "it", "cost"], x: ["costs", "is"], why: "La domanda vuole l'ausiliare \"does\", e il verbo resta senza -s: \"cost\"." },
    { t: "order", p: "Sono quindici dollari", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Più di un dollaro: \"dollars\", al plurale. \"Fifteen\" ha l'accento tonico alla fine; \"fifty\", all'inizio." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Sono le dieci e un quarto", a: ["a"], o: ["the", "one", "an"], why: "Davanti a \"quarter\" (un quarto d'ora) ci vuole \"a\"." },
    { t: "fill", q: "That's fifty __ dollars.", p: "Sono cinquantamila dollari", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "Dopo un numero \"thousand\" non prende la -s: \"fifty thousand\", anche se in italiano «mille» diventa «mila»." },
    { t: "fill", q: "I'll be there in ten __.", p: "Arrivo tra dieci minuti", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Sono dieci: \"minutes\", al plurale." },

    { t: "type", p: "Sono le tre e mezza", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30"], hint: "three · thirty — ore e minuti così come sono", x: ["thirteen"], why: "In inglese anche l'ora ha bisogno del soggetto: \"It's three thirty\". Non confonderlo con \"thirteen\" (13)." },
    { t: "type", p: "Costa venti dollari", a: ["It costs twenty dollars", "It costs 20 dollars", "It's twenty dollars", "It is twenty dollars", "It's 20 dollars", "It is 20 dollars"], hint: "cost · twenty · dollar — il soggetto è \"it\"", x: ["cost"], why: "Con \"it\" il verbo prende la -s: \"costs\". Terza persona." },
    { t: "type", p: "Lei va a correre due volte alla settimana", a: ["She runs twice a week", "She goes running twice a week"], hint: "run · twice · week — il soggetto è \"she\"", x: ["run"], why: "Con \"she\" il verbo prende la -s: \"runs\". Terza persona. «Alla settimana» = \"a week\"." }
  ],

  email: [
    { t: "mc", q: "Se cominci con \"Dear\", qual è il saluto più naturale?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dopo \"Dear\" va il nome della persona, non solo il ruolo." },
    { t: "mc", q: "Avvisi che hai allegato la relazione:", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "È la relazione precisa che la persona riceverà: \"the report\"." },
    { t: "mc", q: "Come dici «Resto in attesa di un Suo riscontro»?", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I stay waiting your answer.", "I wait your answer."], why: "Dopo \"look forward to\" ci vuole la forma in -ing: \"hearing\". \"I stay waiting your answer\" è il calco di «resto in attesa»." },
    { t: "mc", q: "Hai risposto in ritardo. Quale frase positiva puoi usare invece di scusarti?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "\"Thanks for your patience\" suona gentile senza chiedere scusa. Attenzione: \"patients\" significa «pazienti», cioè le persone malate." },
    { t: "mc", q: "Quale saluto finale va bene in un'e-mail del venerdì?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "È un solo fine settimana: \"a great weekend\", al singolare." },

    { t: "order", p: "Hai ricevuto la mia e-mail?", a: ["Did", "you", "get", "my", "email"], x: ["got"], why: "La domanda al passato vuole l'ausiliare \"did\", e il verbo resta alla forma base: \"get\"." },
    { t: "order", p: "La relazione è in allegato", a: ["The", "report", "is", "attached"], x: ["are"], why: "Un solo soggetto (\"the report\") vuole \"is\": accordo." },
    { t: "order", p: "Verifico e Le faccio sapere", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "\"Get back to you\" = ricontattarti, farti sapere. Ci vuole \"to\"." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Potrebbe inviarmi il file entro venerdì?", a: ["by"], o: ["until", "in", "at"], why: "Per una scadenza («entro…») si usa \"by\" + data." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Le scrivo per chiedere informazioni sul calendario", a: ["to"], o: ["for", "about", "at"], why: "Per dire lo scopo: \"I'm writing to\" + forma base." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Grazie per tutto il Suo impegno!", a: ["work"], o: ["works", "working", "job"], why: "\"Work\" (lavoro, impegno) è non numerabile: niente -s." },

    { t: "type", p: "Domani ho il giorno libero", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — usa be", x: ["have"], why: "«Avere il giorno libero» si dice \"be off\"." },
    { t: "type", p: "Quand'è la scadenza?", a: ["When is the deadline", "When's the deadline", "What's the deadline", "What is the deadline"], hint: "when · deadline — la domanda con \"is\"", x: ["are"], why: "Nella domanda \"is\" va prima del soggetto (\"the deadline\")." },
    { t: "type", p: "Lei è in ferie questa settimana", a: ["She is on vacation this week", "She's on vacation this week"], hint: "vacation · this week — usa \"on\"", x: ["are"], why: "Con \"she\" be è \"is\": terza persona. «In ferie» = \"on vacation\"." }
  ],

  idioms: [
    { t: "mc", q: "Come si dice «È un gioco da ragazzi»?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Le espressioni si imparano così come sono: con \"a\", e \"cake\" al singolare." },
    { t: "mc", q: "Come si dice «Costa un occhio della testa»?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "\"Arm\" comincia con un suono vocalico (\"an arm\"); \"leg\" con un suono consonantico (\"a leg\")." },
    { t: "mc", q: "Come si dice «Mi stai prendendo in giro»?", o: ["You're pulling my leg.", "You're taking my hair.", "You're pulling my hair.", "You're cutting my hair."], why: "«Prendere in giro» si dice \"pull someone's leg\", letteralmente «tirare la gamba a qualcuno». Le altre frasi non hanno questo significato." },
    { t: "mc", q: "Come si dice «Sono al settimo cielo»?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "\"On cloud nine\" (letteralmente «sulla nuvola nove») si dice così, senza articolo e senza -s." },
    { t: "mc", q: "Quale di queste è slang da usare solo tra amici?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "\"No cap\" («sul serio») è slang giovanile. Le altre sono espressioni che si usano anche al lavoro." },

    { t: "order", p: "Lui ti sta prendendo in giro?", a: ["Is", "he", "pulling", "your", "leg"], x: ["Does"], why: "Nella domanda l'ausiliare \"is\" va prima del soggetto. «Prendere in giro» = \"pull someone's leg\"." },
    { t: "order", p: "Lei non si sente bene", a: ["She", "feels", "under", "the", "weather"], x: ["feel"], why: "Con \"she\" il verbo prende la -s: \"feels\". Terza persona." },
    { t: "order", p: "Non è il mio genere", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "\"Not my cup of tea\" = non è il mio genere. Si usa così com'è, con \"my\"." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Prendere due piccioni con una fava", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Sono due uccelli: \"birds\", al plurale. L'immagine è quasi la stessa dell'italiano, ma con un sasso al posto della fava." },
    { t: "fill", q: "Speak of the __!", p: "Lupus in fabula! / Parli del diavolo…", a: ["devil"], o: ["king", "angel", "wolf"], why: "In inglese c'è \"the devil\" (il diavolo), come in «parli del diavolo e spuntano le corna». Non \"wolf\", anche se in latino si dice «lupus in fabula»." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Non mi sento molto bene", a: ["the"], o: ["a", "an", "my"], why: "\"Under the weather\" si dice sempre con \"the\"." },

    { t: "type", p: "È un gioco da ragazzi", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — non dimenticare il soggetto", x: ["the"], why: "L'inglese vuole un soggetto dove l'italiano non lo mette: \"It's a piece of cake\"." },
    { t: "type", p: "Per oggi basta così", a: ["Let's call it a day"], hint: "call it · day — usa \"a\", non \"the\"", x: ["the"], why: "\"Call it a day\" si dice con \"a\", non con \"the\"." },
    { t: "type", p: "Sta piovendo a catinelle?", a: ["Is it raining cats and dogs"], hint: "rain · cats · dogs — domanda con \"is\"", x: ["Does"], why: "Nella domanda \"is\" va prima del soggetto \"it\": \"Is it raining…?\"" }
  ]
};
