/* Métadonnées du cours fr-en dans la langue de l'apprenant (français de France). Lues par tools/content/gen.js.
   Les noms de paquets doivent correspondre à ceux de decks.js (voir DECKNAMES.md). Les identifiants de leçon sont les identifiants anglais communs.
   PLAN_PRESETS : decks "@path" = tous les paquets dans l'ordre de GROUPS ; lessons "@all" = toutes les leçons dans l'ordre du cours. */
exports.GROUPS = [
  ["Premiers pas", ["Salutations", "Se présenter", "Survie 1", "Survie 2"]],
  ["Voyage et quotidien", ["Itinéraires et transports", "Au restaurant", "Café et supérette", "Achats et paiements", "Nombres, heures et dates", "Voyages (aéroport et hôtel)", "Santé et urgences"]],
  ["Conversation et relations", ["Conversation informelle", "Émotions et réactions", "Compliments et affection", "Téléphone et abréviations"]],
  ["Travail", ["Travail et e-mails"]],
  ["Comme un natif", ["Pièges de prononciation", "Phrasal verbs", "Expressions idiomatiques", "Cinéma, séries et argot"]],
  ["Points clés pour francophones", ["Mots essentiels", "Faux amis", "Make et do", "Indénombrables", "Mots transparents et accent"]]
];

exports.TAGS = {
  basics: ["Salutations", "Se présenter", "Survie 1", "Survie 2", "Nombres, heures et dates"],
  travel: ["Survie 1", "Survie 2", "Itinéraires et transports", "Au restaurant", "Café et supérette", "Achats et paiements", "Nombres, heures et dates", "Voyages (aéroport et hôtel)", "Santé et urgences"],
  social: ["Salutations", "Se présenter", "Conversation informelle", "Émotions et réactions", "Compliments et affection", "Téléphone et abréviations"],
  work: ["Travail et e-mails", "Téléphone et abréviations", "Nombres, heures et dates", "Conversation informelle"],
  media: ["Cinéma, séries et argot", "Expressions idiomatiques", "Émotions et réactions"],
  skills: ["Pièges de prononciation", "Phrasal verbs", "Expressions idiomatiques", "Mots essentiels", "Faux amis", "Make et do", "Indénombrables", "Mots transparents et accent"]
};

exports.DESC = {
  "Salutations": "Saluer, prendre congé et répondre avec naturel",
  "Se présenter": "Dire ton prénom, d'où tu viens, ton métier et tes loisirs, et poser les mêmes questions à quelqu'un d'autre",
  "Survie 1": "Dire merci, s'excuser et demander de répéter : l'essentiel du premier jour de voyage",
  "Survie 2": "Toilettes, prix, wifi, photos : des phrases à utiliser dès l'arrivée",
  "Itinéraires et transports": "Demander son chemin, comprendre les indications et se déplacer en métro, en bus et en taxi",
  "Au restaurant": "De la réservation à l'addition : plats, allergies, paiement et pourboire",
  "Café et supérette": "Commander une boisson, changer la taille ou les options, demander un reçu et un sac",
  "Achats et paiements": "Regarder, essayer des vêtements, demander une taille, payer, rendre et échanger",
  "Nombres, heures et dates": "Heures, dates, prix et grands nombres à l'anglaise (horloge de 12 heures, point décimal)",
  "Conversation informelle": "Briser la glace et faire durer la conversation : météo, week-end, loisirs",
  "Émotions et réactions": "Féliciter, s'étonner, consoler et dire ce que tu ressens",
  "Compliments et affection": "Faire des compliments, remercier et exprimer ton affection",
  "Travail et e-mails": "Des phrases pour les e-mails professionnels, les réunions, les changements d'horaire, les entretiens et le TOEIC",
  "Téléphone et abréviations": "L'anglais au téléphone et les abréviations de chat comme LOL, BRB et TBH",
  "Voyages (aéroport et hôtel)": "Immigration, enregistrement, sièges, bagages et demandes à l'hôtel",
  "Santé et urgences": "Que dire en cas de malaise, de blessure, de perte ou de vol",
  "Phrasal verbs": "Les phrasal verbs que les anglophones emploient le plus, comme pick up et figure out, à la place du verbe savant",
  "Pièges de prononciation": "Ship/sheep, hair/air, eat/heat, cat/cut, shoes/choose, le « th », le -ed et l'accent tonique : les sons qui posent le plus de problèmes aux francophones",
  "Expressions idiomatiques": "Des expressions qui ne se comprennent pas mot à mot, avec leur équivalent français",
  "Cinéma, séries et argot": "Des expressions actuelles venues des séries, de la musique et des réseaux sociaux",
  "Mots essentiels": "Get, take, put, keep, enough, though, still, yet : des mots courts que les anglophones emploient sans cesse et qui ne ressemblent pas au français",
  "Faux amis": "Actually, disappointed, library, college : des mots qui ressemblent au français mais veulent dire autre chose",
  "Make et do": "Les deux façons de dire « faire » : make a mistake, make a decision, do homework, do the dishes",
  "Indénombrables": "Advice, information, news, furniture, homework : en français on les compte, mais en anglais ils n'ont ni -s ni a/an",
  "Mots transparents et accent": "-tion = -tion, -ty = -té, -ous = -eux, -ly = -ment : des mots que tu connais déjà, avec l'accent tonique là où l'anglais le place"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Voyager", decks: ["Survie 1", "Survie 2", "Itinéraires et transports", "Au restaurant", "Café et supérette", "Achats et paiements", "Voyages (aéroport et hôtel)", "Santé et urgences"] },
  work: { label: "Travail", decks: ["Se présenter", "Travail et e-mails", "Téléphone et abréviations", "Nombres, heures et dates", "Conversation informelle"] },
  social: { label: "Amis", decks: ["Salutations", "Se présenter", "Conversation informelle", "Émotions et réactions", "Compliments et affection", "Téléphone et abréviations"] },
  media: { label: "Séries et films", decks: ["Cinéma, séries et argot", "Expressions idiomatiques", "Émotions et réactions", "Phrasal verbs", "Pièges de prononciation"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Préparer un voyage", weeks: 3, decks: ["Salutations", "Survie 1", "Survie 2", "Itinéraires et transports", "Au restaurant", "Café et supérette", "Achats et paiements", "Nombres, heures et dates", "Voyages (aéroport et hôtel)", "Santé et urgences"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Se faire des amis en anglais", weeks: 6, decks: ["Salutations", "Se présenter", "Survie 1", "Conversation informelle", "Émotions et réactions", "Compliments et affection", "Téléphone et abréviations", "Phrasal verbs", "Cinéma, séries et argot", "Expressions idiomatiques"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "Conversation en 90 jours", weeks: 13, decks: "@path", lessons: "@all" }
};

/* noms français des titres de niveau communs de gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
/* tous invariables en genre (profil §10) : aucun titre ne s'accorde avec l'apprenant */
exports.TITLES = ["Novice", "Élève", "Pipelette", "Globe-trotter", "Du coin", "Pro", "Légende"];

/* libellés français des séries de la pause ; gen.js ajoute devant le libellé anglais commun ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Mot gentil", expression: "Au quotidien", polite: "Politesse", saying: "Proverbe" };
