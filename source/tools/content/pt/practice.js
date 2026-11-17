/* TRANSLATE/ADAPT (pt): scaffolded from tools/content/es/practice.js by new_lang.js.
   Translate/adapt everything that is not English (the es text) for pt speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,
   explanations written from the pt point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position
   identical to es-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */
/* Practice sets for the original 11 lessons of the es-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Spanish; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing verb-core rule (docs/profiles/es.md §7): at least 2 of 3 order items and 2 of 3 type items hinge on agreement,
   the auxiliary in questions and negatives, or (typed) dummy it/there, and their why names it
   (sujeto | auxiliar | tercera persona | concordancia). */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "¿Qué palabra significa «oveja»?", o: ["sheep", "ship", "cheap", "chip"], why: "\"Sheep\" lleva la i larga y tensa. Con la i corta, \"ship\" significa «barco»." },
    { t: "mc", q: "¿Qué palabra significa «muy»?", o: ["very", "berry", "fairy", "ferry"], why: "\"Very\" empieza con v: dientes de arriba sobre el labio de abajo. Con b, \"berry\" significa «baya»." },
    { t: "mc", q: "¿Qué palabra significa «zapatos»?", o: ["shoes", "choose", "juice", "chose"], why: "\"Shoes\" empieza con sh, un sonido suave y continuo. \"Choose\" («elegir») empieza con ch." },
    { t: "mc", q: "¿Qué palabra significa «tonto»?", o: ["fool", "full", "fall", "fill"], why: "\"Fool\" lleva la u larga. \"Full\", con la u corta, significa «lleno»." },
    { t: "mc", q: "¿Qué palabra significa «broma»?", o: ["joke", "yolk", "choke", "coke"], why: "\"Joke\" empieza con el sonido de la j inglesa, como en \"job\". \"Yolk\", con el sonido de la i, significa «yema»." },

    { t: "order", p: "Mi escuela está en Madrid", a: ["My", "school", "is", "in", "Madrid"], x: ["are", "eschool"], why: "\"School\" va sin «e» delante. Con un solo sujeto (\"my school\"), el verbo es \"is\": concordancia." },
    { t: "order", p: "¿La sopa está muy caliente?", a: ["Is", "the", "soup", "very", "hot"], x: ["berry"], why: "En la pregunta, \"is\" va antes del sujeto (\"the soup\"). \"Very\" se escribe con v." },
    { t: "order", p: "Somos de España", a: ["We", "are", "from", "Spain"], x: ["is", "Espain"], why: "\"Spain\" empieza con s, sin «e» delante. Con \"we\", be es \"are\": concordancia." },

    { t: "fill", q: "I'm a __udent.", p: "Soy estudiante", a: ["st"], o: ["est", "es", "s"], why: "\"Student\" empieza con st, sin ninguna «e» delante." },
    { t: "fill", q: "I __ink so.", p: "Creo que sí", a: ["th"], o: ["s", "t", "f"], why: "\"Think\" empieza con th: la punta de la lengua entre los dientes. Con s sería \"sink\" («fregadero»)." },
    { t: "fill", q: "This is __ery good.", p: "Esto está muy bueno", a: ["v"], o: ["b", "f", "w"], why: "\"Very\" se escribe con v. En inglés, b y v son dos sonidos distintos." },

    { t: "type", p: "Hay tres árboles", a: ["There are three trees"], hint: "three · tree — empieza con \"there\"", x: ["is"], why: "En inglés el sujeto es obligatorio: \"There are\". \"Three\" empieza con th; \"tree\", con tr." },
    { t: "type", p: "Hace mucho calor", a: ["It's very hot", "It is very hot", "It's really hot", "It is really hot", "It's so hot", "It is so hot"], hint: "very · hot — la v no es b", x: ["berry"], why: "El inglés necesita un sujeto, aunque no signifique nada: \"It's very hot\". \"Very\" lleva v." },
    { t: "type", p: "Creo que sí", a: ["I think so"], hint: "think — la lengua entre los dientes", x: ["sink"], why: "\"Think\" empieza con th: la punta de la lengua entre los dientes, no s." }
  ],

  articles: [
    { t: "mc", q: "¿Cómo se dice «Soy estudiante»?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "En inglés, las profesiones y ocupaciones llevan \"a/an\", aunque en español no uses artículo." },
    { t: "mc", q: "¿Cómo se dice «una hora»?", o: ["an hour", "a hour", "one hours", "hour"], why: "La h de \"hour\" es muda: la palabra empieza con sonido de vocal, por eso va \"an\"." },
    { t: "mc", q: "¿Cómo se dice «La vida es dura»?", o: ["Life is hard.", "The life is hard.", "A life is hard.", "The lives are hard."], why: "Cuando hablas de algo en general o abstracto, el inglés no usa artículo." },
    { t: "mc", q: "¿Cómo se dice «Me encantan los perros» (en general)?", o: ["I love dogs.", "I love the dogs.", "I love a dog.", "I love dog."], why: "Para hablar en general: plural sin artículo. \"The dogs\" serían unos perros concretos." },
    { t: "mc", q: "¿Cómo se dice «Lávate las manos»?", o: ["Wash your hands.", "Wash the hands.", "Wash hands.", "Wash the your hands."], why: "Con partes del cuerpo, el inglés usa el adjetivo posesivo (\"my\", \"your\", \"her\"), no \"the\"." },

    { t: "order", p: "Mi hermana es enfermera", a: ["My", "sister", "is", "a", "nurse"], x: ["are", "the"], why: "Con profesiones va \"a\": \"a nurse\". Un solo sujeto (\"my sister\") lleva \"is\": concordancia." },
    { t: "order", p: "¿Ella es doctora?", a: ["Is", "she", "a", "doctor"], x: ["the"], why: "En la pregunta, \"is\" va antes del sujeto. Y con profesiones va \"a\": \"a doctor\"." },
    { t: "order", p: "El café es caro (en general)", a: ["Coffee", "is", "expensive"], x: ["The", "are"], why: "En general, \"coffee\" va sin artículo. Un sustantivo incontable lleva \"is\": concordancia." },

    { t: "fill", q: "I'm __ university student.", p: "Soy estudiante de universidad", a: ["a"], o: ["an", "the", "two"], why: "\"University\" empieza con sonido «iu», de consonante: \"a university\". Lo que cuenta es el sonido, no la letra." },
    { t: "fill", q: "Close __ eyes.", p: "Cierra los ojos", a: ["your"], o: ["the", "you", "a"], why: "Con partes del cuerpo va el posesivo: \"your eyes\", no \"the eyes\"." },
    { t: "fill", q: "__ is a virtue.", p: "La paciencia es una virtud", a: ["Patience"], o: ["The patience", "A patience", "Patiences"], why: "Las ideas abstractas, en general, van sin artículo en inglés." },

    { t: "type", p: "Ella es enfermera", a: ["She is a nurse", "She's a nurse"], hint: "nurse — la profesión lleva artículo", x: ["the"], why: "La profesión lleva \"a\", y con \"she\" el verbo be es \"is\": tercera persona." },
    { t: "type", p: "Mi hermano es ingeniero", a: ["My brother is an engineer", "My brother's an engineer"], hint: "brother · engineer — \"a\" o \"an\" según el sonido", x: ["a"], why: "\"Engineer\" empieza con sonido de vocal: \"an engineer\". Con \"my brother\" (tercera persona), be es \"is\"." },
    { t: "type", p: "Me duele la espalda", a: ["My back hurts", "I have a backache"], hint: "back · hurt — usa el posesivo", x: ["the"], why: "Con partes del cuerpo va el posesivo: \"my back\", no \"the back\". Con \"my back\" (tercera persona), el verbo lleva -s: \"hurts\"." }
  ],

  be: [
    { t: "mc", q: "¿Cómo se dice «Tengo hambre»?", o: ["I'm hungry.", "I have hungry.", "I have hunger.", "I hungry."], why: "Hambre, sed, frío, sueño: en inglés se dicen con \"be\", no con \"have\"." },
    { t: "mc", q: "¿Cómo se dice «Tengo 30 años»?", o: ["I'm 30.", "I have 30 years.", "I have 30.", "I'm 30 years."], why: "La edad va con \"be\": \"I'm 30\" o \"I'm 30 years old\". \"30 years\" sin \"old\" no se usa." },
    { t: "mc", q: "¿Cómo se dice «Es tarde»?", o: ["It's late.", "Is late.", "Late is.", "It late."], why: "En inglés la oración necesita sujeto (\"it\") y también el verbo be (\"is\")." },
    { t: "mc", q: "Elige la pregunta correcta: «¿Él habla inglés?»", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "Con \"he\" va \"does\", y después el verbo sin -s." },
    { t: "mc", q: "¿Cómo se dice «Tienes razón»?", o: ["You're right.", "You have reason.", "You have right.", "You're reason."], why: "«Tener razón» se dice con be: \"you're right\"." },

    { t: "order", p: "Mi hermano trabaja en Lima", a: ["My", "brother", "works", "in", "Lima"], x: ["work", "is"], why: "Con un solo sujeto (\"my brother\" = \"he\"), el verbo lleva -s: tercera persona. Sin \"is\"." },
    { t: "order", p: "¿Tienes frío?", a: ["Are", "you", "cold"], x: ["Do", "have"], why: "Con be no se usa \"do\": \"are\" va antes del sujeto. Y «tener frío» se dice con be: \"cold\"." },
    { t: "order", p: "Ella tiene dos perros", a: ["She", "has", "two", "dogs"], x: ["have", "is"], why: "Con \"she\", \"have\" cambia a \"has\": tercera persona." },

    { t: "fill", q: "My brother __ in Lima.", p: "Mi hermano vive en Lima", a: ["lives"], o: ["live", "is live", "living"], why: "Con \"he\" (\"my brother\"), el verbo lleva -s: \"lives\"." },
    { t: "fill", q: "__ you hungry?", p: "¿Tienes hambre?", a: ["Are"], o: ["Do", "Is", "Have"], why: "«Tener hambre» se dice con be, y con \"you\" es \"are\"." },
    { t: "fill", q: "We __ cold.", p: "Tenemos frío", a: ["are"], o: ["have", "is", "do"], why: "«Tener frío» va con be, y con \"we\" es \"are\"." },

    { t: "type", p: "Él es profesor", a: ["He is a teacher", "He's a teacher"], hint: "teacher — be y artículo", x: ["the"], why: "Con \"he\", be es \"is\": tercera persona. La profesión lleva \"a\"." },
    { t: "type", p: "Tengo 25 años", a: ["I'm 25", "I am 25", "I'm 25 years old", "I am 25 years old", "I'm twenty-five", "I am twenty-five", "I'm twenty-five years old", "I am twenty-five years old"], hint: "25 — con be, no con have", x: ["have"], why: "La edad se dice con \"be\", no con \"have\"." },
    { t: "type", p: "Es tarde", a: ["It's late", "It is late"], hint: "late — falta el sujeto", x: ["is"], why: "En inglés el sujeto es obligatorio: \"It's late\", nunca \"Is late\"." }
  ],

  polite: [
    { t: "mc", q: "En una cafetería, ¿qué es lo más natural para pedir un latte?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "En una tienda o una cafetería, \"Can I get…?\" es lo natural. Y es un solo café: \"a latte\"." },
    { t: "mc", q: "¿Cuál es la forma más amable de pedirle ayuda a un desconocido?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "\"Could you…?\" es la forma amable de pedirle algo a un desconocido." },
    { t: "mc", q: "No entendiste lo que te dijeron. ¿Cómo pides con amabilidad que lo repitan?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "\"Could you say that again?\" es la forma amable de pedir que te repitan algo." },
    { t: "mc", q: "Pide con mucha cortesía: «¿Le importaría tomarnos una foto?»", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Después de \"mind\" va la forma -ing: \"taking\"." },
    { t: "mc", q: "En el avión: «Quisiera un asiento junto a la ventana»", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "\"I'd like…\" es una petición educada. Es un solo asiento: \"a window seat\"." },

    { t: "order", p: "¿Me das un latte?", a: ["Can", "I", "get", "a", "latte"], x: ["gets", "give"], why: "Para pedir, el auxiliar \"can\" va antes del sujeto (\"Can I get…?\", no \"I can get…?\") y el verbo queda en forma base: \"get\", no \"gets\"." },
    { t: "order", p: "¿Te importaría abrir la ventana? (la de esta habitación)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "minds"], why: "En la pregunta, el auxiliar \"would\" va antes de \"you\" y \"mind\" queda en forma base, sin -s. Después de \"mind\" va la forma -ing." },
    { t: "order", p: "¿Podrías hablar más despacio?", a: ["Could", "you", "speak", "more", "slowly"], x: ["speaks", "slow"], why: "El auxiliar \"could\" va antes del sujeto (\"Could you…?\") y el verbo queda en forma base: \"speak\", nunca \"speaks\"." },

    { t: "fill", q: "Would you mind __ the door?", p: "¿Te importaría cerrar la puerta?", a: ["closing"], o: ["close", "to close", "closed"], why: "Después de \"mind\" va la forma -ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "¿Me das un café helado?", a: ["an"], o: ["a", "two", "many"], why: "\"Iced\" empieza con sonido de vocal («ai»): \"an\"." },
    { t: "fill", q: "No, not at __.", p: "(Respuesta a \"Would you mind…?\") No, para nada. Claro que sí.", a: ["all"], o: ["any", "one", "ever"], why: "\"No, not at all\" = «no me importa en absoluto», es decir, «claro, lo hago»." },

    { t: "type", p: "¿Me podrías ayudar? (con amabilidad)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — pide con amabilidad", x: ["can"], why: "La pregunta amable empieza con el auxiliar \"could\", antes de \"you\"." },
    { t: "type", p: "Quisiera un asiento junto a la ventana", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — un asiento, con artículo", x: ["the"], why: "Para pedir algo, \"I'd like…\". Es un solo asiento que mencionas por primera vez: \"a window seat\"." },
    { t: "type", p: "¿Puedo pagar con tarjeta?", a: pl(["Can I pay by card", "Could I pay by card", "Can I pay with a card", "Could I pay with a card", "Can I pay by credit card", "Could I pay by credit card"]), hint: "can · pay · card — pregunta con el auxiliar delante", x: ["pays"], why: "En la pregunta, el auxiliar \"can\" va antes del sujeto: \"Can I pay…?\", nunca \"I can pay…?\"." }
  ],

  tense: [
    { t: "mc", q: "¿Cómo se dice «Estoy tomando café ahora mismo»?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Lo que pasa en este momento va en presente continuo: be + forma -ing." },
    { t: "mc", q: "¿Cómo se dice «¿Qué haces?» (en este momento)?", o: ["What are you doing?", "What do you do?", "What you are doing?", "What you do?"], why: "Para lo que pasa ahora, el inglés usa el presente continuo. \"What do you do?\" pregunta a qué te dedicas." },
    { t: "mc", q: "Hablas de tus planes: «Voy a visitar la Ciudad de México el próximo mes»", o: ["I'm going to visit Mexico City next month.", "I visit Mexico City next month.", "I visited Mexico City next month.", "I'm going visit Mexico City next month."], why: "\"Going to\" funciona como «ir a» + infinitivo: no olvides el \"to\"." },
    { t: "mc", q: "Suena el timbre y decides en ese momento: «¡Yo abro!»", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Una decisión tomada en el momento va con \"will\"." },
    { t: "mc", q: "¿Cuál es el pasado de \"see\"?", o: ["saw", "seed", "seen", "sawed"], why: "\"See\" es irregular: see – saw – seen." },

    { t: "order", p: "Ella trabaja en un banco", a: ["She", "works", "at", "a", "bank"], x: ["work", "working"], why: "Un hábito va en presente simple; con \"she\", el verbo lleva -s: tercera persona." },
    { t: "order", p: "¿Fuiste a la playa?", a: ["Did", "you", "go", "to", "the", "beach"], x: ["went"], why: "En pasado, la pregunta lleva el auxiliar \"did\" y el verbo en forma base: \"go\", no \"went\"." },
    { t: "order", p: "Te llamo más tarde", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Una promesa hecha en el momento va con \"will\"." },

    { t: "fill", q: "I __ pizza last night.", p: "Anoche comí pizza", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "\"Eat\" es irregular: el pasado es \"ate\" (o \"had\", si usas \"have\")." },
    { t: "fill", q: "__ you have fun?", p: "¿Te divertiste?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Para preguntar por el pasado: \"Did\" + verbo en forma base." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Voy a visitar a mis padres", a: ["to"], o: ["for", "at", "on"], why: "\"Going to\" + verbo, igual que «ir a» + infinitivo." },

    { t: "type", p: "¿Qué estás haciendo?", a: ["What are you doing"], hint: "what · do — lo que pasa ahora", x: ["do"], why: "En la pregunta, el auxiliar \"are\" va antes del sujeto: \"What are you doing?\"" },
    { t: "type", p: "Ella no vio la película", a: ["She didn't see the movie", "She did not see the movie", "She didn't watch the movie", "She did not watch the movie"], hint: "see · movie — negativo en pasado", x: ["saw"], why: "En negativo, el pasado lleva el auxiliar \"didn't\" y el verbo en forma base: \"see\"." },
    { t: "type", p: "Hoy estoy trabajando desde casa", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — presente continuo, con be", x: ["work"], why: "Lo que haces hoy, en este periodo, va en presente continuo." }
  ],

  prep: [
    { t: "mc", q: "¿Cómo se dice «en mayo»?", o: ["in May", "on May", "at May", "to May"], why: "Con meses va \"in\"." },
    { t: "mc", q: "¿Cómo se dice «el 3 de mayo»?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "the May 3rd"], why: "Con fechas va \"on\", sin artículo, aunque en español digas «el 3 de mayo»." },
    { t: "mc", q: "¿Cómo se dice «Estoy en el autobús»?", o: ["I'm on the bus.", "I'm in bus.", "I'm at the bus.", "I'm on bus."], why: "Con el transporte público (\"bus\", \"train\", \"plane\") va \"on\"." },
    { t: "mc", q: "¿Cómo se dice «en la noche / por la noche»?", o: ["at night", "on night", "in night", "at the night"], why: "\"Night\" es una excepción: \"at night\", sin artículo." },
    { t: "mc", q: "¿Cuál es la oración correcta para «Vivo en Lima»?", o: ["I live in Lima.", "I live at Lima.", "I live on Lima.", "I live in the Lima."], why: "Con ciudades y países va \"in\", sin artículo." },

    { t: "order", p: "Mi celular está en la mesa", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "are"], why: "Sobre una superficie va \"on\". Un solo sujeto (\"my phone\") lleva \"is\": concordancia." },
    { t: "order", p: "¿Trabajas los sábados?", a: ["Do", "you", "work", "on", "Saturdays"], x: ["in"], why: "La pregunta lleva el auxiliar \"do\" antes del sujeto. Con días va \"on\": \"on Saturdays\"." },
    { t: "order", p: "Nos vemos la próxima semana", a: ["See", "you", "next", "week"], x: ["on"], why: "Con \"next\" no va preposición." },

    { t: "fill", q: "The meeting is __ three.", p: "La reunión es a las tres", a: ["at"], o: ["on", "to", "of"], why: "Con una hora exacta va \"at\"." },
    { t: "fill", q: "I was born __ 1998.", p: "Nací en 1998", a: ["in"], o: ["on", "at", "to"], why: "Con años va \"in\"." },
    { t: "fill", q: "See you __ Friday.", p: "Nos vemos el viernes", a: ["on"], o: ["in", "at", "to"], why: "Con días de la semana va \"on\"." },

    { t: "type", p: "Ella toma café por la mañana", a: ["She drinks coffee in the morning", "She has coffee in the morning", "In the morning she drinks coffee", "In the morning she has coffee"], hint: "drink · coffee · morning — \"in\" con \"the\"", x: ["at"], why: "Con \"she\", el verbo lleva -s: tercera persona. Partes del día: \"in the morning\"." },
    { t: "type", p: "Estoy en casa", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — sin artículo", x: ["the"], why: "\"At home\" va sin \"the\" (y nunca con \"in\")." },
    { t: "type", p: "¿La reunión es el lunes?", a: ["Is the meeting on Monday"], hint: "meeting · Monday — \"on\", sin el artículo", x: ["in"], why: "En la pregunta, \"is\" va antes del sujeto (\"the meeting\"). Con días va \"on\", sin artículo." }
  ],

  smalltalk: [
    { t: "mc", q: "Un compañero de trabajo te pregunta \"How was your weekend?\" ¿Qué respondes?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Te preguntan por algo pasado: responde en pasado y añade un dato." },
    { t: "mc", q: "Alguien dice \"I don't drink coffee.\" ¿Cómo dices «Yo tampoco»?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "«Yo tampoco» es \"Me neither\". \"Me too\" es «yo también»." },
    { t: "mc", q: "¿Cómo terminas la conversación con naturalidad?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "\"I should get going\" es una forma suave de despedirte." },
    { t: "mc", q: "¿Qué frase es buena para empezar a hablar con alguien que acabas de conocer?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "El clima es el tema más seguro para una charla casual." },
    { t: "mc", q: "Alguien te cuenta \"I went to Cartagena last weekend.\" ¿Qué respuesta muestra interés?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "\"Oh, really?\" y \"That sounds fun!\" muestran interés." },

    { t: "order", p: "¿A qué te dedicas?", a: ["What", "do", "you", "do"], x: ["are", "does"], why: "En la pregunta va el auxiliar \"do\" antes del sujeto: \"What do you do?\"" },
    { t: "order", p: "¿De dónde eres?", a: ["Where", "are", "you", "from"], x: ["is", "do"], why: "En la pregunta, \"are\" va antes del sujeto: \"Where are you from?\" Con \"you\", \"are\": concordancia." },
    { t: "order", p: "Fue un gusto hablar contigo", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Es una despedida típica: después de \"nice\" va la forma -ing (\"talking\")." },

    { t: "fill", q: "Pretty good! How __ you?", p: "¡Bastante bien! ¿Y tú?", a: ["about"], o: ["for", "with", "of"], why: "Responde corto y devuelve la pregunta con \"How about you?\"" },
    { t: "fill", q: "I know, __?", p: "¡Exacto! / ¡Eso mismo digo yo!", a: ["right"], o: ["no", "yes", "true"], why: "\"I know, right?\" sirve para darle la razón a alguien con énfasis." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "¿Has visto algo bueno últimamente?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Después de \"any\", en una pregunta, los sustantivos contables van en plural." },

    { t: "type", p: "¿Qué tal estuvo tu fin de semana?", a: ["How was your weekend"], hint: "how · weekend — en pasado", x: ["is"], why: "En la pregunta, \"was\" va antes del sujeto (\"your weekend\"): \"How was your weekend?\"" },
    { t: "type", p: "¿Vives por aquí?", a: ["Do you live around here", "Do you live near here", "Do you live nearby"], hint: "live · around here — pregunta con \"do\"", x: ["are"], why: "En presente, la pregunta lleva el auxiliar \"do\" antes del sujeto: \"Do you live…?\"" },
    { t: "type", p: "¡Qué buen clima hace hoy!", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — ¿lleva artículo?", x: ["a"], why: "\"Weather\" es incontable: no lleva \"a\" (no se dice \"a nice weather\")." }
  ],

  phrasal: [
    { t: "mc", q: "¿Cómo se dice «Enciéndelo»?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "El pronombre \"it\" va en medio del phrasal verb: \"turn it on\"." },
    { t: "mc", q: "¿Cómo se dice «Se nos acabó la leche»?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "\"Run out of\" = quedarse sin algo. No olvides el \"of\"." },
    { t: "mc", q: "¿Cómo se dice «Crecí en Santiago»?", o: ["I grew up in Santiago.", "I grew in Santiago up.", "I growed up in Santiago.", "I grew out in Santiago."], why: "\"Grow up\" = crecer (una persona). El pasado es \"grew up\"." },
    { t: "mc", q: "¿Cómo se dice «¿Puedes cuidar a mi gato?»?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "\"Look after\" = cuidar, y no se separa. \"Look for\" significa «buscar»." },
    { t: "mc", q: "¿Cómo se dice «Sigue, te escucho»?", o: ["Go on, I'm listening.", "Go out, I'm listening.", "Go in, I'm listening.", "Go up, I'm listening."], why: "\"Go on\" = seguir. En una conversación suena más natural que \"continue\", que es más formal." },

    { t: "order", p: "¿Ella cuida a tu gato?", a: ["Does", "she", "look", "after", "your", "cat"], x: ["looks"], why: "La pregunta con \"she\" lleva el auxiliar \"does\", y el verbo va sin -s: \"look after\"." },
    { t: "order", p: "Él se lleva bien con todos", a: ["He", "gets", "along", "with", "everyone"], x: ["get"], why: "Con \"he\", el verbo lleva -s: tercera persona. \"Gets along with\" = se lleva bien con." },
    { t: "order", p: "Paso por ti", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "El pronombre \"you\" va entre \"pick\" y \"up\"." },

    { t: "fill", q: "Can you turn it __?", p: "¿Puedes apagarlo?", a: ["off"], o: ["of", "on", "out"], why: "Apagar es \"turn off\". No lo confundas con \"of\"." },
    { t: "fill", q: "I work __ every morning.", p: "Hago ejercicio todas las mañanas", a: ["out"], o: ["up", "off", "on"], why: "\"Work out\" = hacer ejercicio." },
    { t: "fill", q: "We ran out of __.", p: "Se nos acabaron los huevos", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Con algo contable como los huevos, va el plural: \"eggs\"." },

    { t: "type", p: "Apágalo, por favor", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — el pronombre va en medio", x: ["on"], why: "El pronombre \"it\" va entre \"turn\" y \"off\"." },
    { t: "type", p: "Ella cuida a su madre", a: ["She looks after her mother", "She looks after her mom", "She takes care of her mother", "She takes care of her mom"], hint: "look after · mother — con \"she\"", x: ["look"], why: "Con \"she\", el verbo lleva -s: \"looks after\". Tercera persona." },
    { t: "type", p: "¿Te llevas bien con tu jefe?", a: ["Do you get along with your boss", "Do you get on with your boss"], hint: "get along with · boss — pregunta con \"do\"", x: ["are"], why: "La pregunta en presente lleva el auxiliar \"do\" antes del sujeto." }
  ],

  numbers: [
    { t: "mc", q: "¿Cómo se lee 2.5 (dos coma cinco)?", o: ["two point five", "two comma five", "two and five", "twenty-five"], why: "En inglés los decimales se escriben y se leen con punto: \"point\"." },
    { t: "mc", q: "¿Cómo se dice «mil millones»?", o: ["one billion", "one million", "ten million", "one trillion"], why: "\"Billion\" = mil millones. Ojo: el «billón» español es \"one trillion\"." },
    { t: "mc", q: "¿Cómo se lee 9:05?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Del minuto 1 al 9 se dice \"oh\" antes del número." },
    { t: "mc", q: "¿Cómo se lee con naturalidad $4.99?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Los precios se leen como dos números: \"four ninety-nine\"." },
    { t: "mc", q: "¿Cómo se lee el año 1990?", o: ["nineteen ninety", "one thousand nine hundred ninety", "one nine nine zero", "nineteen hundred nine"], why: "Los años se leen de dos en dos: 19 | 90." },

    { t: "order", p: "¿Qué hora es?", a: ["What", "time", "is", "it"], x: ["are"], why: "En la pregunta, \"is\" va antes del sujeto \"it\": \"What time is it?\" Con \"it\", \"is\": concordancia." },
    { t: "order", p: "¿Cuánto cuesta?", a: ["How", "much", "does", "it", "cost"], x: ["costs", "is"], why: "La pregunta lleva el auxiliar \"does\", y el verbo va sin -s: \"cost\"." },
    { t: "order", p: "Son quince dólares", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Más de un dólar: \"dollars\", en plural. \"Fifteen\" lleva la fuerza al final; \"fifty\", al principio." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Son las diez y cuarto", a: ["a"], o: ["the", "one", "an"], why: "Delante de \"quarter\" (cuarto de hora) va \"a\"." },
    { t: "fill", q: "That's fifty __ dollars.", p: "Son cincuenta mil dólares", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "Después de un número, \"thousand\" no lleva -s: \"fifty thousand\"." },
    { t: "fill", q: "I'll be there in ten __.", p: "Llego en diez minutos", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Son diez: \"minutes\", en plural." },

    { t: "type", p: "Son las tres y media", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30"], hint: "three · thirty — la hora y los minutos tal cual", x: ["thirteen"], why: "La hora necesita sujeto en inglés: \"It's three thirty\". No la confundas con \"thirteen\" (13)." },
    { t: "type", p: "Cuesta veinte dólares", a: ["It costs twenty dollars", "It costs 20 dollars", "It's twenty dollars", "It is twenty dollars", "It's 20 dollars", "It is 20 dollars"], hint: "cost · twenty · dollar — con \"it\"", x: ["cost"], why: "Con \"it\", el verbo lleva -s: \"costs\". Tercera persona." },
    { t: "type", p: "Ella sale a correr dos veces por semana", a: ["She runs twice a week", "She goes running twice a week"], hint: "run · twice · week — con \"she\"", x: ["run"], why: "Con \"she\", el verbo lleva -s: \"runs\". Tercera persona. «Por semana» = \"a week\"." }
  ],

  email: [
    { t: "mc", q: "Si empiezas con \"Dear\", ¿cuál es el saludo más natural?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Después de \"Dear\" va el nombre de la persona, no solo el cargo." },
    { t: "mc", q: "Avisas que adjuntaste el informe:", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Es el informe concreto que la persona va a recibir: \"the report\"." },
    { t: "mc", q: "¿Cómo dices «Quedo a la espera de su respuesta»?", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I stay waiting your answer.", "I wait your answer."], why: "Después de \"look forward to\" va la forma -ing: \"hearing\"." },
    { t: "mc", q: "Respondiste tarde. ¿Qué frase positiva puedes usar en vez de disculparte?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "\"Thanks for your patience\" suena amable sin pedir perdón. Ojo: \"patients\" significa «pacientes»." },
    { t: "mc", q: "¿Qué despedida queda bien en un correo del viernes?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "Es un fin de semana: \"a great weekend\", en singular." },

    { t: "order", p: "¿Recibiste mi correo?", a: ["Did", "you", "get", "my", "email"], x: ["got"], why: "La pregunta en pasado lleva el auxiliar \"did\", y el verbo va en forma base: \"get\"." },
    { t: "order", p: "El informe está adjunto", a: ["The", "report", "is", "attached"], x: ["are"], why: "Un solo sujeto (\"the report\") lleva \"is\": concordancia." },
    { t: "order", p: "Lo reviso y le escribo", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "\"Get back to you\" = volver a escribirte o llamarte. Va con \"to\"." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "¿Podría enviarme el archivo para el viernes?", a: ["by"], o: ["until", "in", "at"], why: "Para un plazo («a más tardar el…») se usa \"by\" + fecha." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Le escribo para preguntar por el horario", a: ["to"], o: ["for", "about", "at"], why: "Para el propósito: \"I'm writing to\" + verbo." },
    { t: "fill", q: "Thanks for all your hard __!", p: "¡Gracias por todo su esfuerzo!", a: ["work"], o: ["works", "working", "job"], why: "\"Work\" (trabajo, esfuerzo) es incontable: no lleva -s." },

    { t: "type", p: "Mañana tengo el día libre", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — con be", x: ["have"], why: "«Tener el día libre» se dice con \"be off\"." },
    { t: "type", p: "¿Cuándo es la fecha límite?", a: ["When is the deadline", "When's the deadline", "What's the deadline", "What is the deadline"], hint: "when · deadline — pregunta con \"is\"", x: ["are"], why: "En la pregunta, \"is\" va antes del sujeto (\"the deadline\")." },
    { t: "type", p: "Ella está de vacaciones esta semana", a: ["She is on vacation this week", "She's on vacation this week"], hint: "vacation · this week — con \"on\"", x: ["are"], why: "Con \"she\", be es \"is\": tercera persona. «De vacaciones» = \"on vacation\"." }
  ],

  idioms: [
    { t: "mc", q: "¿Cómo se dice «Es pan comido»?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Las expresiones se aprenden tal cual: con \"a\", y \"cake\" en singular." },
    { t: "mc", q: "¿Cómo se dice «Cuesta un ojo de la cara»?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "\"Arm\" empieza con sonido de vocal (\"an arm\"); \"leg\", con consonante (\"a leg\")." },
    { t: "mc", q: "¿Cómo se dice «Me estás tomando el pelo»?", o: ["You're pulling my leg.", "You're taking my hair.", "You're pulling my hair.", "You're cutting my hair."], why: "«Tomar el pelo» es \"pull someone's leg\". La traducción literal no existe en inglés." },
    { t: "mc", q: "¿Cómo se dice «Estoy en el séptimo cielo»?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "\"On cloud nine\" se dice así, sin artículo y sin -s." },
    { t: "mc", q: "¿Cuál es jerga para usar solo entre amigos?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "\"No cap\" («en serio») es jerga juvenil. Las otras son expresiones que se usan también en el trabajo." },

    { t: "order", p: "¿Él te está tomando el pelo?", a: ["Is", "he", "pulling", "your", "leg"], x: ["Does"], why: "En la pregunta, el auxiliar \"is\" va antes del sujeto. «Tomar el pelo» = \"pull someone's leg\"." },
    { t: "order", p: "Ella no se siente bien", a: ["She", "feels", "under", "the", "weather"], x: ["feel"], why: "Con \"she\", el verbo lleva -s: \"feels\". Tercera persona." },
    { t: "order", p: "No es lo mío", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "\"Not my cup of tea\" = no es lo mío. Se usa tal cual, con \"my\"." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Matar dos pájaros de un tiro", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Son dos pájaros: \"birds\", en plural. ¡Igual que en español!" },
    { t: "fill", q: "Speak of the __!", p: "¡Hablando del rey de Roma!", a: ["devil"], o: ["king", "angel", "wolf"], why: "En español es «el rey de Roma»; en inglés, \"the devil\" (el diablo)." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "No me siento muy bien", a: ["the"], o: ["a", "an", "my"], why: "\"Under the weather\" se dice siempre con \"the\"." },

    { t: "type", p: "Es pan comido", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — no olvides el sujeto", x: ["the"], why: "El inglés necesita sujeto donde el español no lo pone: \"It's a piece of cake\"." },
    { t: "type", p: "Dejémoslo aquí por hoy", a: ["Let's call it a day"], hint: "call it · day — con \"a\", no con \"the\"", x: ["the"], why: "\"Call it a day\" se dice con \"a\", no con \"the\"." },
    { t: "type", p: "¿Está lloviendo a cántaros?", a: ["Is it raining cats and dogs"], hint: "rain · cats · dogs — pregunta con \"is\"", x: ["Does"], why: "En la pregunta, \"is\" va antes del sujeto \"it\": \"Is it raining…?\"" }
  ]
};
