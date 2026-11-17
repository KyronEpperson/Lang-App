/* Practice sets for the original 11 lessons of the fr-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are in French (France, tu); answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing verb-core rule (docs/profiles/fr.md §7): at least half of the order + type items hinge on agreement,
   the auxiliary in questions and negatives, or (typed) dummy it/there, and their why names it
   (sujet | auxiliaire | troisième personne | accord — «d'accord» does not count).
   The English side follows es-en except pron (profile fr.md §8 item map, lesson deviation). */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "Quel mot veut dire « mouton » ?", o: ["sheep", "ship", "cheap", "chip"], why: "\"Sheep\" a le i long et tendu /iː/. Avec le i bref /ɪ/, \"ship\" veut dire « bateau »." },
    { t: "mc", q: "Quel mot veut dire « cheveux » ?", o: ["hair", "air", "ear", "here"], why: "\"Hair\" commence par un h qu'on entend : un souffle. Sans le h, \"air\" veut dire « air »." },
    { t: "mc", q: "Quel mot veut dire « chaussures » ?", o: ["shoes", "choose", "juice", "chose"], why: "\"Shoes\" commence par le son « ch » de « chat ». Le \"ch\" de \"choose\" (« choisir ») se dit « tch » : lu à la française, il donne \"shoes\"." },
    { t: "mc", q: "Quel mot veut dire « idiot » ?", o: ["fool", "full", "fall", "fill"], why: "\"Fool\" a le « ou » long /uː/. Avec le « ou » bref /ʊ/, \"full\" veut dire « plein »." },
    { t: "mc", q: "Quel mot veut dire « manger » ?", o: ["eat", "heat", "hit", "it"], why: "\"Eat\" commence par une voyelle, sans souffle : /ˈiːt/. Avec un h, \"heat\" veut dire « chaleur » ; \"hit\" et \"it\" ont le i bref." },

    { t: "order", p: "Mon hôtel est à Paris", a: ["My", "hotel", "is", "in", "Paris"], x: ["are", "at"], why: "Le h de \"hotel\" se prononce. Un seul sujet (\"my hotel\") : \"is\", accord. Et « à Paris » se dit \"in Paris\"." },
    { t: "order", p: "La soupe est très chaude ?", a: ["Is", "the", "soup", "very", "hot"], x: ["are"], why: "Dans la question, \"is\" passe devant le sujet (\"the soup\"). Et le h de \"hot\" se prononce." },
    { t: "order", p: "Nous venons de France", a: ["We", "are", "from", "France"], x: ["is"], why: "Avec \"we\", be devient \"are\" : accord. Et dans \"France\", le « a » est très ouvert, sans voyelle nasale : /ˈfræns/." },

    { t: "fill", q: "__is is my sister.", p: "C'est ma sœur", a: ["Th"], o: ["Z", "D", "S"], why: "\"This\" commence par le th voisé /ð/ : la langue entre les dents, avec la voix. Pas « z »." },
    { t: "fill", q: "I __ink so.", p: "Je pense que oui", a: ["th"], o: ["s", "t", "f"], why: "\"Think\" commence par th /θ/ : le bout de la langue entre les dents. Avec un s, ce serait \"sink\" (« évier »)." },
    { t: "fill", q: "Welcome to my __ouse.", p: "Bienvenue chez moi", a: ["h"], o: ["r", "m", "l"], why: "\"House\" commence par un h qu'on entend : un souffle, comme pour embuer une vitre." },

    { t: "type", p: "Il y a trois arbres", a: ["There are three trees"], hint: "three · tree — « il y a » + pluriel", x: ["is"], why: "« Il y a » ne change pas, mais \"there is / there are\" s'accorde : trois arbres, donc \"There are\". \"Three\" commence par th, \"tree\" par tr." },
    { t: "type", p: "Il fait très chaud", a: ["It's very hot", "It is very hot", "It's really hot", "It is really hot", "It's so hot", "It is so hot"], hint: "very · hot — le h se prononce", x: ["makes"], why: "« Il fait chaud » ne se traduit pas avec \"make\" : le sujet \"it\" + \"is\". Et le h de \"hot\" se prononce." },
    { t: "type", p: "Je pense que oui", a: ["I think so"], hint: "think — la langue entre les dents", x: ["sink"], why: "\"Think\" commence par th /θ/ : le bout de la langue entre les dents, ni « s » ni « t »." }
  ],

  articles: [
    { t: "mc", q: "Comment dit-on « Je suis étudiant / étudiante » ?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "En anglais, les métiers et les statuts prennent \"a/an\", même si le français n'a pas d'article." },
    { t: "mc", q: "Comment dit-on « une heure » ?", o: ["an hour", "a hour", "one hours", "hour"], why: "Le h de \"hour\" est muet, comme dans « heure » : le mot commence par un son de voyelle, d'où \"an\"." },
    { t: "mc", q: "Comment dit-on « La vie est dure » ?", o: ["Life is hard.", "The life is hard.", "A life is hard.", "The lives are hard."], why: "Quand on parle de quelque chose en général ou d'une idée abstraite, l'anglais ne met pas d'article." },
    { t: "mc", q: "Comment dit-on « J'adore les chiens » (en général) ?", o: ["I love dogs.", "I love the dogs.", "I love a dog.", "I love dog."], why: "Pour parler en général : pluriel sans article. \"The dogs\", ce seraient des chiens précis." },
    { t: "mc", q: "Comment dit-on « Lave-toi les mains » ?", o: ["Wash your hands.", "Wash the hands.", "Wash hands.", "Wash the your hands."], why: "Avec les parties du corps, l'anglais emploie l'adjectif possessif (\"my\", \"your\", \"her\"), pas \"the\"." },

    { t: "order", p: "Ma sœur est infirmière", a: ["My", "sister", "is", "a", "nurse"], x: ["are", "the"], why: "Avec un métier, on met \"a\" : \"a nurse\". Un seul sujet (\"my sister\") : \"is\", accord." },
    { t: "order", p: "Elle est médecin ?", a: ["Is", "she", "a", "doctor"], x: ["the"], why: "Dans la question, \"is\" passe devant le sujet. Et avec un métier, on met \"a\" : \"a doctor\"." },
    { t: "order", p: "Le café est cher (en général)", a: ["Coffee", "is", "expensive"], x: ["The", "are"], why: "En général, \"coffee\" s'emploie sans article. Un nom indénombrable prend \"is\" : accord." },

    { t: "fill", q: "I'm __ university student.", p: "Je suis étudiant / étudiante à l'université", a: ["a"], o: ["an", "the", "two"], why: "\"University\" commence par le son « you », une consonne : \"a university\". C'est le son qui compte, pas la lettre." },
    { t: "fill", q: "Close __ eyes.", p: "Ferme les yeux", a: ["your"], o: ["the", "you", "a"], why: "Avec les parties du corps, on met le possessif : \"your eyes\", pas \"the eyes\"." },
    { t: "fill", q: "__ is a virtue.", p: "La patience est une vertu", a: ["Patience"], o: ["The patience", "A patience", "Patiences"], why: "Les idées abstraites, prises en général, n'ont pas d'article en anglais." },

    { t: "type", p: "Elle est infirmière", a: ["She is a nurse", "She's a nurse"], hint: "nurse — le métier prend un article", x: ["the"], why: "Le métier prend \"a\", et avec \"she\", be devient \"is\" : troisième personne." },
    { t: "type", p: "Mon frère est ingénieur", a: ["My brother is an engineer", "My brother's an engineer"], hint: "brother · engineer — \"a\" ou \"an\" selon le son", x: ["a"], why: "\"Engineer\" commence par un son de voyelle : \"an engineer\". Avec \"my brother\" (troisième personne), be devient \"is\"." },
    { t: "type", p: "J'ai mal au dos", a: ["My back hurts", "I have a backache"], hint: "back · hurt — utilise le possessif", x: ["the"], why: "Avec les parties du corps, on met le possessif : \"my back\", pas \"the back\". Avec \"my back\" (troisième personne), le verbe prend un -s : \"hurts\"." }
  ],

  be: [
    { t: "mc", q: "Comment dit-on « J'ai faim » ?", o: ["I'm hungry.", "I have hungry.", "I have hunger.", "I hungry."], why: "La faim, la soif, le froid, le sommeil : en anglais, on les dit avec \"be\", pas avec \"have\"." },
    { t: "mc", q: "Comment dit-on « J'ai 30 ans » ?", o: ["I'm 30.", "I have 30 years.", "I have 30.", "I'm 30 years."], why: "L'âge se dit avec \"be\" : \"I'm 30\" ou \"I'm 30 years old\". \"30 years\" sans \"old\" ne se dit pas." },
    { t: "mc", q: "Comment dit-on « Il est tard » ?", o: ["It's late.", "Is late.", "Late is.", "It late."], why: "« Il » se traduit ici par \"it\", et il faut aussi le verbe be (\"is\") : \"It's late\"." },
    { t: "mc", q: "Choisis la bonne question : « Il parle anglais ? »", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "Avec \"he\", on met \"does\", puis le verbe sans -s." },
    { t: "mc", q: "Comment dit-on « Tu as raison » ?", o: ["You're right.", "You have reason.", "You have right.", "You're reason."], why: "« Avoir raison » se dit avec be : \"you're right\"." },

    { t: "order", p: "Mon frère travaille à Lima", a: ["My", "brother", "works", "in", "Lima"], x: ["work", "is"], why: "Un seul sujet (\"my brother\" = \"he\") : le verbe prend un -s, troisième personne. Pas de \"is\"." },
    { t: "order", p: "Tu as froid ?", a: ["Are", "you", "cold"], x: ["Do", "have"], why: "Avec be, pas de \"do\" : \"are\" passe devant le sujet. Et « avoir froid » se dit avec be : \"cold\"." },
    { t: "order", p: "Elle a deux chiens", a: ["She", "has", "two", "dogs"], x: ["have", "is"], why: "Avec \"she\", \"have\" devient \"has\" : troisième personne." },

    { t: "fill", q: "My brother __ in Lima.", p: "Mon frère habite à Lima", a: ["lives"], o: ["live", "is live", "living"], why: "Avec \"he\" (\"my brother\"), le verbe prend un -s : \"lives\"." },
    { t: "fill", q: "__ you hungry?", p: "Tu as faim ?", a: ["Are"], o: ["Do", "Is", "Have"], why: "« Avoir faim » se dit avec be, et avec \"you\", c'est \"are\"." },
    { t: "fill", q: "We __ cold.", p: "Nous avons froid", a: ["are"], o: ["have", "is", "do"], why: "« Avoir froid » se dit avec be, et avec \"we\", c'est \"are\"." },

    { t: "type", p: "Il est enseignant", a: ["He is a teacher", "He's a teacher"], hint: "teacher — be et un article", x: ["the"], why: "Avec \"he\", be devient \"is\" : troisième personne. Le métier prend \"a\"." },
    { t: "type", p: "J'ai 25 ans", a: ["I'm 25", "I am 25", "I'm 25 years old", "I am 25 years old", "I'm twenty-five", "I am twenty-five", "I'm twenty-five years old", "I am twenty-five years old"], hint: "25 — avec be, pas avec have", x: ["have"], why: "L'âge se dit avec \"be\", pas avec \"have\"." },
    { t: "type", p: "Il est tard", a: ["It's late", "It is late"], hint: "late — « il » se traduit par \"it\"", x: ["is"], why: "« Il est tard » : le sujet \"it\" + \"is\". Jamais \"Is late\"." }
  ],

  polite: [
    { t: "mc", q: "Dans un café, quelle est la façon la plus naturelle de commander un latte ?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "Dans un café ou un magasin, \"Can I get…?\" est la formule naturelle. Et c'est un seul café : \"a latte\"." },
    { t: "mc", q: "Quelle est la façon la plus polie de demander de l'aide à un inconnu ?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "\"Could you…?\" est la façon aimable de demander quelque chose à un inconnu." },
    { t: "mc", q: "Tu n'as pas compris ce qu'on t'a dit. Comment demander poliment de répéter ?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "\"Could you say that again?\" est la façon aimable de faire répéter quelqu'un." },
    { t: "mc", q: "Demande très poliment : « Ça vous dérangerait de nous prendre en photo ? »", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Après \"mind\", on met la forme en -ing : \"taking\"." },
    { t: "mc", q: "Dans l'avion : « Je voudrais une place côté hublot »", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "\"I'd like…\" est une demande polie, comme « je voudrais ». C'est une seule place : \"a window seat\"." },

    { t: "order", p: "Je peux avoir un latte ?", a: ["Can", "I", "get", "a", "latte"], x: ["gets", "give"], why: "Pour demander, l'auxiliaire \"can\" passe devant le sujet (\"Can I get…?\", pas \"I can get…?\") et le verbe reste à la base verbale : \"get\", pas \"gets\"." },
    { t: "order", p: "Ça vous dérangerait d'ouvrir la fenêtre ? (celle de cette pièce)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "minds"], why: "Dans la question, l'auxiliaire \"would\" passe devant \"you\", et \"mind\" reste à la base verbale, sans -s. Après \"mind\", la forme en -ing." },
    { t: "order", p: "Tu pourrais parler plus lentement ?", a: ["Could", "you", "speak", "more", "slowly"], x: ["speaks", "slow"], why: "L'auxiliaire \"could\" passe devant le sujet (\"Could you…?\") et le verbe reste à la base verbale : \"speak\", jamais \"speaks\"." },

    { t: "fill", q: "Would you mind __ the door?", p: "Ça vous dérangerait de fermer la porte ?", a: ["closing"], o: ["close", "to close", "closed"], why: "Après \"mind\", on met la forme en -ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Je peux avoir un café glacé ?", a: ["an"], o: ["a", "two", "many"], why: "\"Iced\" commence par un son de voyelle (« aï ») : \"an\"." },
    { t: "fill", q: "No, not at __.", p: "(Réponse à \"Would you mind…?\") Non, pas du tout. Bien sûr.", a: ["all"], o: ["any", "one", "ever"], why: "\"No, not at all\" = « ça ne me dérange pas du tout », donc « bien sûr, je le fais »." },

    { t: "type", p: "Tu pourrais m'aider ? (poliment)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — une demande polie", x: ["can"], why: "La question polie commence par l'auxiliaire \"could\", devant \"you\"." },
    { t: "type", p: "Je voudrais une place côté fenêtre", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — une place, avec un article", x: ["the"], why: "Pour demander quelque chose : \"I'd like…\". C'est une seule place, mentionnée pour la première fois : \"a window seat\"." },
    { t: "type", p: "Je peux payer par carte ?", a: pl(["Can I pay by card", "Could I pay by card", "Can I pay with a card", "Could I pay with a card", "Can I pay by credit card", "Could I pay by credit card"]), hint: "can · pay · card — l'auxiliaire en tête", x: ["pays"], why: "Dans la question, l'auxiliaire \"can\" passe devant le sujet : \"Can I pay…?\", jamais \"I can pay…?\"." }
  ],

  tense: [
    { t: "mc", q: "Comment dit-on « Je suis en train de boire un café » ?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Ce qui se passe en ce moment se dit avec be + forme en -ing." },
    { t: "mc", q: "Comment dit-on « Qu'est-ce que tu fais ? » (en ce moment) ?", o: ["What are you doing?", "What do you do?", "What you are doing?", "What you do?"], why: "Pour ce qui se passe maintenant, l'anglais emploie be + -ing. \"What do you do?\" demande quel est ton métier." },
    { t: "mc", q: "Tu parles de tes projets : « Je vais visiter Mexico le mois prochain »", o: ["I'm going to visit Mexico City next month.", "I visit Mexico City next month.", "I visited Mexico City next month.", "I'm going visit Mexico City next month."], why: "\"Going to\", c'est le futur proche « je vais » + infinitif : n'oublie pas le \"to\"." },
    { t: "mc", q: "On sonne et tu décides sur le moment : « J'y vais ! »", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Une décision prise sur le moment se dit avec \"will\"." },
    { t: "mc", q: "Quel est le prétérit de \"see\" ?", o: ["saw", "seed", "seen", "sawed"], why: "\"See\" est irrégulier : see – saw – seen." },

    { t: "order", p: "Elle travaille dans une banque", a: ["She", "works", "at", "a", "bank"], x: ["work", "working"], why: "Une habitude se dit au présent simple ; avec \"she\", le verbe prend un -s : troisième personne." },
    { t: "order", p: "Tu es allé / allée à la plage ?", a: ["Did", "you", "go", "to", "the", "beach"], x: ["went"], why: "Au prétérit, la question prend l'auxiliaire \"did\" et le verbe reste à la base verbale : \"go\", pas \"went\"." },
    { t: "order", p: "Je t'appelle plus tard", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Une promesse faite sur le moment se dit avec \"will\"." },

    { t: "fill", q: "I __ pizza last night.", p: "Hier soir, j'ai mangé une pizza", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "\"Eat\" est irrégulier : le prétérit est \"ate\" (ou \"had\", avec \"have\")." },
    { t: "fill", q: "__ you have fun?", p: "Tu t'es bien amusé / amusée ?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Pour une question sur le passé : \"Did\" + base verbale." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Je vais rendre visite à mes parents", a: ["to"], o: ["for", "at", "on"], why: "\"Going to\" + verbe, comme « je vais » + infinitif." },

    { t: "type", p: "Qu'est-ce que tu fais ? (en ce moment)", a: ["What are you doing"], hint: "what · do — ce qui se passe maintenant", x: ["do"], why: "Dans la question, l'auxiliaire \"are\" passe devant le sujet : \"What are you doing?\"" },
    { t: "type", p: "Elle n'a pas vu le film (au prétérit)", a: ["She didn't see the movie", "She did not see the movie", "She didn't watch the movie", "She did not watch the movie"], hint: "see · movie — négatif au prétérit", x: ["saw"], why: "Au négatif, le prétérit prend l'auxiliaire \"didn't\" et le verbe reste à la base verbale : \"see\"." },
    { t: "type", p: "Aujourd'hui, je travaille de chez moi", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — avec be + -ing", x: ["work"], why: "Ce que tu fais aujourd'hui, sur une période limitée, se dit avec be + -ing." }
  ],

  prep: [
    { t: "mc", q: "Comment dit-on « en mai » ?", o: ["in May", "on May", "at May", "to May"], why: "Avec les mois, on met \"in\"." },
    { t: "mc", q: "Comment dit-on « le 3 mai » ?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "the May 3rd"], why: "Avec les dates, on met \"on\", sans article, même si le français dit « le 3 mai »." },
    { t: "mc", q: "Comment dit-on « Je suis dans le bus » ?", o: ["I'm on the bus.", "I'm in bus.", "I'm at the bus.", "I'm on bus."], why: "Avec les transports en commun (\"bus\", \"train\", \"plane\"), on met \"on\"." },
    { t: "mc", q: "Comment dit-on « la nuit » (le moment) ?", o: ["at night", "on night", "in night", "at the night"], why: "\"Night\" est une exception : \"at night\", sans article." },
    { t: "mc", q: "Quelle phrase est correcte pour « J'habite à Lima » ?", o: ["I live in Lima.", "I live at Lima.", "I live on Lima.", "I live in the Lima."], why: "Avec les villes et les pays, on met \"in\", sans article. « À Lima » ne se dit jamais \"at Lima\"." },

    { t: "order", p: "Mon portable est sur la table", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "are"], why: "Sur une surface, on met \"on\". Un seul sujet (\"my phone\") : \"is\", accord." },
    { t: "order", p: "Tu travailles le samedi ?", a: ["Do", "you", "work", "on", "Saturdays"], x: ["in"], why: "La question prend l'auxiliaire \"do\" devant le sujet. Avec les jours, \"on\" : \"on Saturdays\"." },
    { t: "order", p: "À la semaine prochaine", a: ["See", "you", "next", "week"], x: ["on"], why: "Avec \"next\", pas de préposition." },

    { t: "fill", q: "The meeting is __ three.", p: "La réunion est à trois heures", a: ["at"], o: ["on", "to", "of"], why: "Avec une heure précise, on met \"at\"." },
    { t: "fill", q: "I was born __ 1998.", p: "Je suis né / née en 1998", a: ["in"], o: ["on", "at", "to"], why: "Avec les années, on met \"in\"." },
    { t: "fill", q: "See you __ Friday.", p: "À vendredi", a: ["on"], o: ["in", "at", "to"], why: "Avec les jours de la semaine, on met \"on\"." },

    { t: "type", p: "Elle boit du café le matin", a: ["She drinks coffee in the morning", "She has coffee in the morning", "In the morning she drinks coffee", "In the morning she has coffee"], hint: "drink · coffee · morning — \"in\" avec \"the\"", x: ["at"], why: "Avec \"she\", le verbe prend un -s : troisième personne. Moments de la journée : \"in the morning\"." },
    { t: "type", p: "Je suis à la maison", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — sans article", x: ["the"], why: "\"At home\" s'emploie sans \"the\" (et jamais avec \"in\")." },
    { t: "type", p: "La réunion est lundi ?", a: ["Is the meeting on Monday"], hint: "meeting · Monday — \"on\", sans article", x: ["in"], why: "Dans la question, \"is\" passe devant le sujet (\"the meeting\"). Avec les jours, \"on\", sans article." }
  ],

  smalltalk: [
    { t: "mc", q: "Un collègue te demande \"How was your weekend?\" Que réponds-tu ?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "On te parle du passé : réponds au prétérit et ajoute un détail." },
    { t: "mc", q: "Quelqu'un dit \"I don't drink coffee.\" Comment dire « Moi non plus » ?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "« Moi non plus » se dit \"Me neither\". \"Me too\" veut dire « moi aussi »." },
    { t: "mc", q: "Comment conclure la conversation avec naturel ?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "\"I should get going\" est une façon douce de prendre congé." },
    { t: "mc", q: "Quelle phrase permet de lancer la conversation avec quelqu'un que tu viens de rencontrer ?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "La météo est le thème le plus sûr pour bavarder." },
    { t: "mc", q: "Quelqu'un te raconte \"I went to Cartagena last weekend.\" Quelle réponse montre de l'intérêt ?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "\"Oh, really?\" et \"That sounds fun!\" montrent que ça t'intéresse." },

    { t: "order", p: "Qu'est-ce que tu fais dans la vie ?", a: ["What", "do", "you", "do"], x: ["are", "does"], why: "Dans la question, l'auxiliaire \"do\" passe devant le sujet : \"What do you do?\"" },
    { t: "order", p: "Tu viens d'où ?", a: ["Where", "are", "you", "from"], x: ["is", "do"], why: "Dans la question, \"are\" passe devant le sujet : \"Where are you from?\" Avec \"you\", \"are\" : accord." },
    { t: "order", p: "Ça m'a fait plaisir de discuter avec toi", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "C'est une formule d'au revoir typique : après \"nice\", la forme en -ing (\"talking\")." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Plutôt bien ! Et toi ?", a: ["about"], o: ["for", "with", "of"], why: "Réponds brièvement et renvoie la question avec \"How about you?\"" },
    { t: "fill", q: "I know, __?", p: "Carrément ! / C'est clair !", a: ["right"], o: ["no", "yes", "true"], why: "\"I know, right?\" sert à approuver quelqu'un avec enthousiasme." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Tu as vu de bonnes séries ou de bons films récemment ?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Après \"any\", dans une question, les noms dénombrables se mettent au pluriel." },

    { t: "type", p: "C'était comment, ton week-end ?", a: ["How was your weekend"], hint: "how · weekend — au passé", x: ["is"], why: "Dans la question, \"was\" passe devant le sujet (\"your weekend\") : \"How was your weekend?\"" },
    { t: "type", p: "Tu habites dans le coin ?", a: ["Do you live around here", "Do you live near here", "Do you live nearby"], hint: "live · around here — une question avec \"do\"", x: ["are"], why: "Au présent, la question prend l'auxiliaire \"do\" devant le sujet : \"Do you live…?\"" },
    { t: "type", p: "Il fait beau aujourd'hui, hein ! (avec \"weather\")", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — un article ou pas ?", x: ["a"], why: "\"Weather\" est indénombrable : pas de \"a\" (on ne dit pas \"a nice weather\")." }
  ],

  phrasal: [
    { t: "mc", q: "Comment dit-on « Allume-le » ?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Le pronom \"it\" se place au milieu du phrasal verb : \"turn it on\"." },
    { t: "mc", q: "Comment dit-on « On n'a plus de lait » ?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "\"Run out of\" = ne plus avoir de quelque chose. N'oublie pas le \"of\"." },
    { t: "mc", q: "Comment dit-on « J'ai grandi à Santiago » ?", o: ["I grew up in Santiago.", "I grew in Santiago up.", "I growed up in Santiago.", "I grew out in Santiago."], why: "\"Grow up\" = grandir (pour une personne). Le prétérit est \"grew up\"." },
    { t: "mc", q: "Comment dit-on « Tu peux t'occuper de mon chat ? »", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "\"Look after\" = s'occuper de, et il ne se sépare pas. \"Look for\" veut dire « chercher »." },
    { t: "mc", q: "Comment dit-on « Continue, je t'écoute » ?", o: ["Go on, I'm listening.", "Go out, I'm listening.", "Go in, I'm listening.", "Go up, I'm listening."], why: "\"Go on\" = continuer. À l'oral, c'est plus naturel que \"continue\", plus soutenu." },

    { t: "order", p: "Elle s'occupe de ton chat ?", a: ["Does", "she", "look", "after", "your", "cat"], x: ["looks"], why: "La question avec \"she\" prend l'auxiliaire \"does\", et le verbe reste sans -s : \"look after\"." },
    { t: "order", p: "Il s'entend bien avec tout le monde", a: ["He", "gets", "along", "with", "everyone"], x: ["get"], why: "Avec \"he\", le verbe prend un -s : troisième personne. \"Gets along with\" = s'entend bien avec." },
    { t: "order", p: "Je passe te prendre", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Le pronom \"you\" se place entre \"pick\" et \"up\"." },

    { t: "fill", q: "Can you turn it __?", p: "Tu peux l'éteindre ?", a: ["off"], o: ["of", "on", "out"], why: "Éteindre, c'est \"turn off\". Ne confonds pas avec \"of\"." },
    { t: "fill", q: "I work __ every morning.", p: "Je fais du sport tous les matins", a: ["out"], o: ["up", "off", "on"], why: "\"Work out\" = faire du sport, s'entraîner." },
    { t: "fill", q: "We ran out of __.", p: "On n'a plus d'œufs", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Avec un nom dénombrable comme les œufs, on met le pluriel : \"eggs\"." },

    { t: "type", p: "Éteins-le, s'il te plaît", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — le pronom au milieu", x: ["on"], why: "Le pronom \"it\" se place entre \"turn\" et \"off\"." },
    { t: "type", p: "Elle s'occupe de sa mère", a: ["She looks after her mother", "She looks after her mom", "She takes care of her mother", "She takes care of her mom"], hint: "look after · mother — avec \"she\"", x: ["look"], why: "Avec \"she\", le verbe prend un -s : \"looks after\". Troisième personne." },
    { t: "type", p: "Tu t'entends bien avec ton chef ?", a: ["Do you get along with your boss", "Do you get on with your boss"], hint: "get along with · boss — une question avec \"do\"", x: ["are"], why: "La question au présent prend l'auxiliaire \"do\" devant le sujet." }
  ],

  numbers: [
    { t: "mc", q: "Comment dit-on 2.5 (deux virgule cinq) ?", o: ["two point five", "two comma five", "two and five", "twenty-five"], why: "En anglais, les décimales s'écrivent et se lisent avec un point : \"point\"." },
    { t: "mc", q: "Comment dit-on « un milliard » ?", o: ["one billion", "one million", "ten million", "one trillion"], why: "\"Billion\" = un milliard. Attention : le « billion » français (mille milliards) se dit \"one trillion\"." },
    { t: "mc", q: "Comment dit-on l'heure 9:05 ?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "De la minute 1 à la minute 9, on dit \"oh\" avant le chiffre." },
    { t: "mc", q: "Comment dit-on naturellement le prix $4.99 ?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Les prix se lisent comme deux nombres : \"four ninety-nine\"." },
    { t: "mc", q: "Comment dit-on l'année 1990 ?", o: ["nineteen ninety", "one thousand nine hundred ninety", "one nine nine zero", "nineteen hundred nine"], why: "Les années se lisent deux chiffres par deux chiffres : 19 | 90." },

    { t: "order", p: "Quelle heure est-il ?", a: ["What", "time", "is", "it"], x: ["are"], why: "Dans la question, \"is\" passe devant le sujet \"it\" : \"What time is it?\" Avec \"it\", \"is\" : accord." },
    { t: "order", p: "Combien ça coûte ?", a: ["How", "much", "does", "it", "cost"], x: ["costs", "is"], why: "La question prend l'auxiliaire \"does\", et le verbe reste sans -s : \"cost\"." },
    { t: "order", p: "Ça fait quinze dollars", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Plus d'un dollar : \"dollars\", au pluriel. \"Fifteen\" a l'accent tonique à la fin ; \"fifty\", au début." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Il est dix heures et quart", a: ["a"], o: ["the", "one", "an"], why: "Devant \"quarter\" (le quart d'heure), on met \"a\"." },
    { t: "fill", q: "That's fifty __ dollars.", p: "Ça fait cinquante mille dollars", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "Après un nombre, \"thousand\" ne prend pas de -s : \"fifty thousand\", comme « cinquante mille »." },
    { t: "fill", q: "I'll be there in ten __.", p: "J'arrive dans dix minutes", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Il y en a dix : \"minutes\", au pluriel." },

    { t: "type", p: "Il est trois heures et demie", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30"], hint: "three · thirty — l'heure, puis les minutes", x: ["thirteen"], why: "Pour l'heure, le sujet est \"it\", comme le « il » de « il est trois heures » : \"It's three thirty\". Ne confonds pas avec \"thirteen\" (13)." },
    { t: "type", p: "Ça coûte vingt dollars", a: ["It costs twenty dollars", "It costs 20 dollars", "It's twenty dollars", "It is twenty dollars", "It's 20 dollars", "It is 20 dollars"], hint: "cost · twenty · dollar — avec \"it\"", x: ["cost"], why: "Avec \"it\", le verbe prend un -s : \"costs\". Troisième personne." },
    { t: "type", p: "Elle court deux fois par semaine", a: ["She runs twice a week", "She goes running twice a week"], hint: "run · twice · week — avec \"she\"", x: ["run"], why: "Avec \"she\", le verbe prend un -s : \"runs\". Troisième personne. « Par semaine » = \"a week\"." }
  ],

  email: [
    { t: "mc", q: "Si tu commences par \"Dear\", quelle est la salutation la plus naturelle ?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Après \"Dear\", on met le nom de la personne, pas seulement sa fonction." },
    { t: "mc", q: "Tu signales que le rapport est en pièce jointe :", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "C'est le rapport précis que la personne va recevoir : \"the report\"." },
    { t: "mc", q: "Comment dire « Dans l'attente de votre réponse » ?", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I stay waiting your answer.", "I wait your answer."], why: "Après \"look forward to\", on met la forme en -ing : \"hearing\". Les autres sont des traductions mot à mot." },
    { t: "mc", q: "Tu as répondu en retard. Quelle phrase positive peux-tu utiliser au lieu de t'excuser ?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "\"Thanks for your patience\" est aimable, sans demander pardon. Attention : \"patients\", ce sont des malades." },
    { t: "mc", q: "Quelle formule finale convient à un e-mail du vendredi ?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "C'est un seul week-end : \"a great weekend\", au singulier." },

    { t: "order", p: "Tu as reçu mon e-mail ?", a: ["Did", "you", "get", "my", "email"], x: ["got"], why: "La question au prétérit prend l'auxiliaire \"did\", et le verbe reste à la base verbale : \"get\"." },
    { t: "order", p: "Le rapport est en pièce jointe", a: ["The", "report", "is", "attached"], x: ["are"], why: "Un seul sujet (\"the report\") : \"is\", accord." },
    { t: "order", p: "Je reviens vers vous", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "\"Get back to you\" = revenir vers quelqu'un, le recontacter. Avec \"to\"." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Pourriez-vous m'envoyer le fichier d'ici vendredi ?", a: ["by"], o: ["until", "in", "at"], why: "Pour un délai (« au plus tard le… »), on utilise \"by\" + date." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Je vous écris pour vous demander le planning", a: ["to"], o: ["for", "about", "at"], why: "Pour le but : \"I'm writing to\" + verbe." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Merci pour tout votre travail !", a: ["work"], o: ["works", "working", "job"], why: "\"Work\" (le travail, les efforts) est indénombrable : pas de -s." },

    { t: "type", p: "Demain, je suis en congé (avec \"off\")", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — avec be", x: ["have"], why: "« Être en congé » se dit \"be off\"." },
    { t: "type", p: "C'est quand, la date limite ?", a: ["When is the deadline", "When's the deadline", "What's the deadline", "What is the deadline"], hint: "when · deadline — une question avec \"is\"", x: ["are"], why: "Dans la question, \"is\" passe devant le sujet (\"the deadline\")." },
    { t: "type", p: "Elle est en vacances cette semaine", a: ["She is on vacation this week", "She's on vacation this week"], hint: "vacation · this week — avec \"on\"", x: ["are"], why: "Avec \"she\", be devient \"is\" : troisième personne. « En vacances » = \"on vacation\"." }
  ],

  idioms: [
    { t: "mc", q: "Comment dit-on « C'est du gâteau » ?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Les expressions s'apprennent telles quelles : avec \"a\", et \"cake\" au singulier." },
    { t: "mc", q: "Comment dit-on « Ça coûte les yeux de la tête » ?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "\"Arm\" commence par un son de voyelle (\"an arm\") ; \"leg\", par une consonne (\"a leg\")." },
    { t: "mc", q: "Comment dit-on « Tu me fais marcher » ?", o: ["You're pulling my leg.", "You're taking my hair.", "You're pulling my hair.", "You're cutting my hair."], why: "« Tu me fais marcher » se dit \"You're pulling my leg\" (mot à mot, « tu me tires la jambe »). Les autres phrases n'ont pas ce sens." },
    { t: "mc", q: "Comment dit-on « Je suis aux anges » ?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "\"On cloud nine\" se dit ainsi : sans article et sans -s." },
    { t: "mc", q: "Laquelle est de l'argot, à réserver aux amis ?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "\"No cap\" (« sans mentir ») est de l'argot de jeunes. Les autres expressions s'emploient aussi au travail." },

    { t: "order", p: "Il te fait marcher ?", a: ["Is", "he", "pulling", "your", "leg"], x: ["Does"], why: "Dans la question, l'auxiliaire \"is\" passe devant le sujet. « Faire marcher quelqu'un » = \"pull someone's leg\"." },
    { t: "order", p: "Elle n'est pas dans son assiette", a: ["She", "feels", "under", "the", "weather"], x: ["feel"], why: "Avec \"she\", le verbe prend un -s : \"feels\". Troisième personne." },
    { t: "order", p: "Ce n'est pas mon truc", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "\"Not my cup of tea\" = ce n'est pas mon truc. L'expression s'emploie telle quelle, avec \"my\"." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Faire d'une pierre deux coups", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "En anglais, on tue deux oiseaux : \"birds\", au pluriel." },
    { t: "fill", q: "Speak of the __!", p: "Quand on parle du loup !", a: ["devil"], o: ["king", "angel", "wolf"], why: "Le français parle du loup (\"wolf\"), l'anglais du diable : \"the devil\"." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Je ne suis pas dans mon assiette", a: ["the"], o: ["a", "an", "my"], why: "\"Under the weather\" se dit toujours avec \"the\"." },

    { t: "type", p: "C'est du gâteau", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — « c'est » = \"it's\"", x: ["the"], why: "« C'est » se traduit avec le sujet \"it\" : \"It's a piece of cake\"." },
    { t: "type", p: "On s'arrête là pour aujourd'hui", a: ["Let's call it a day"], hint: "call it · day — avec \"a\", pas \"the\"", x: ["the"], why: "\"Call it a day\" se dit avec \"a\", pas avec \"the\"." },
    { t: "type", p: "Il pleut des cordes ?", a: ["Is it raining cats and dogs"], hint: "rain · cats · dogs — une question avec \"is\"", x: ["Does"], why: "Dans la question, \"is\" passe devant le sujet \"it\" : \"Is it raining…?\"" }
  ]
};
