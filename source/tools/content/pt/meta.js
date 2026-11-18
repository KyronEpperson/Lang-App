/* pt-en course metadata in the learner's language (Brazilian Portuguese). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (see DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["Primeiros passos", ["Cumprimentos", "Apresentações", "Sobrevivência 1", "Sobrevivência 2", "O alfabeto"]],
  ["Viagem e dia a dia", ["Direções e transporte", "No restaurante", "Cafeteria e mercado", "Compras e pagamentos", "Números, horas e datas", "Viagens (aeroporto e hotel)", "Saúde e emergências"]],
  ["Conversa e relacionamentos", ["Bate-papo", "Emoções e reações", "Elogios e carinho", "Telefone e abreviações"]],
  ["Trabalho", ["Trabalho e e-mail"]],
  ["Como um nativo", ["Armadilhas de pronúncia", "Phrasal verbs", "Expressões idiomáticas", "Cinema, séries e gírias"]],
  ["Pontos-chave para brasileiros", ["Palavras essenciais", "Falsos cognatos", "Make e do", "Incontáveis", "Cognatos e sílaba tônica"]]
];

exports.TAGS = {
  basics: ["Cumprimentos", "Apresentações", "Sobrevivência 1", "Sobrevivência 2", "Números, horas e datas", "O alfabeto"],
  travel: ["Sobrevivência 1", "Sobrevivência 2", "Direções e transporte", "No restaurante", "Cafeteria e mercado", "Compras e pagamentos", "Números, horas e datas", "Viagens (aeroporto e hotel)", "Saúde e emergências"],
  social: ["Cumprimentos", "Apresentações", "Bate-papo", "Emoções e reações", "Elogios e carinho", "Telefone e abreviações"],
  work: ["Trabalho e e-mail", "Telefone e abreviações", "Números, horas e datas", "Bate-papo"],
  media: ["Cinema, séries e gírias", "Expressões idiomáticas", "Emoções e reações"],
  skills: ["Armadilhas de pronúncia", "Phrasal verbs", "Expressões idiomáticas", "Palavras essenciais", "Falsos cognatos", "Make e do", "Incontáveis", "Cognatos e sílaba tônica"]
};

exports.DESC = {
  "Cumprimentos": "Cumprimentos e despedidas básicos, e como responder com naturalidade",
  "Apresentações": "Dizer seu nome, de onde você é, o que faz e do que gosta, e perguntar o mesmo a outra pessoa",
  "Sobrevivência 1": "Agradecer, pedir desculpas e pedir que repitam: o essencial do primeiro dia de viagem",
  "Sobrevivência 2": "Banheiro, preços, wi-fi, fotos: frases para usar assim que você chega",
  "Direções e transporte": "Perguntar o caminho, entender as indicações e andar de metrô, ônibus e táxi",
  "No restaurante": "Da mesa à conta: pratos, alergias, pagamento e gorjeta",
  "Cafeteria e mercado": "Pedir bebidas, trocar tamanho ou opções, recibos e sacolas",
  "Compras e pagamentos": "Olhar, provar roupas, pedir tamanhos, pagar, devolver e trocar",
  "Números, horas e datas": "Horas, datas, preços e números grandes do jeito inglês (com ponto decimal)",
  "Bate-papo": "Quebrar o gelo e manter a conversa: clima, fim de semana, hobbies",
  "Emoções e reações": "Parabenizar, se surpreender, consolar e dizer como você se sente",
  "Elogios e carinho": "Fazer elogios, agradecer e se aproximar de alguém com quem você quer mais intimidade",
  "Trabalho e e-mail": "Frases para e-mails de trabalho, reuniões, mudanças de horário e entrevistas de emprego",
  "Telefone e abreviações": "Inglês ao telefone e abreviações de chat como LOL, BRB e TBH",
  "Viagens (aeroporto e hotel)": "Imigração, check-in, assentos, bagagem e pedidos no hotel",
  "Saúde e emergências": "O que dizer se você ficar doente, se machucar, perder algo ou for roubado",
  "Phrasal verbs": "Os phrasal verbs que os nativos mais usam, como pick up e figure out, no lugar do verbo de origem latina",
  "Armadilhas de pronúncia": "Ship/sheep, head/red, bad/bed, team/teen, cold/code, school sem «i» na frente, o -ed e a sílaba tônica: os sons que mais dão trabalho a quem fala português",
  "Expressões idiomáticas": "Expressões que não se entendem palavra por palavra, com o equivalente em português",
  "Cinema, séries e gírias": "Expressões atuais de séries, música e redes sociais",
  "Palavras essenciais": "Get, take, put, keep, enough, though, still, yet: palavrinhas que os nativos usam o tempo todo e que não se parecem com o português",
  "Falsos cognatos": "Actually, push, lunch, college, parents: palavras que se parecem com o português, mas significam outra coisa",
  "Make e do": "As duas formas de «fazer»: make a mistake, make a decision, do homework, do the dishes",
  "Incontáveis": "Advice, information, news, furniture, bread: em português se contam, mas em inglês não levam -s nem a/an",
  "Cognatos e sílaba tônica": "-tion = -ção, -ty = -dade, -ous = -oso, -ly = -mente: palavras que você já conhece, com a sílaba tônica onde o inglês a põe",
  "O alfabeto": "O nome das 26 letras em inglês para soletrar nome, sobrenome, e-mail e códigos em voz alta"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Viajar", decks: ["Sobrevivência 1", "Sobrevivência 2", "Direções e transporte", "No restaurante", "Cafeteria e mercado", "Compras e pagamentos", "Viagens (aeroporto e hotel)", "Saúde e emergências"] },
  work: { label: "Trabalho", decks: ["Apresentações", "Trabalho e e-mail", "Telefone e abreviações", "Números, horas e datas", "Bate-papo"] },
  social: { label: "Amigos", decks: ["Cumprimentos", "Apresentações", "Bate-papo", "Emoções e reações", "Elogios e carinho", "Telefone e abreviações"] },
  media: { label: "Séries e filmes", decks: ["Cinema, séries e gírias", "Expressões idiomáticas", "Emoções e reações", "Phrasal verbs", "Armadilhas de pronúncia"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Preparar uma viagem", weeks: 3, decks: ["Cumprimentos", "Sobrevivência 1", "Sobrevivência 2", "Direções e transporte", "No restaurante", "Cafeteria e mercado", "Compras e pagamentos", "Números, horas e datas", "Viagens (aeroporto e hotel)", "Saúde e emergências"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Fazer amigos em inglês", weeks: 6, decks: ["Cumprimentos", "Apresentações", "Sobrevivência 1", "Bate-papo", "Emoções e reações", "Elogios e carinho", "Telefone e abreviações", "Phrasal verbs", "Cinema, séries e gírias", "Expressões idiomáticas"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "Conversação em 90 dias", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
/* common-gender nouns on purpose (profile §10): no title that must agree with the gender of the user */
exports.TITLES = ["Iniciante", "Estudante", "Tagarela", "Viajante", "De casa", "Profissional", "Lenda"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Elogio", expression: "Expressão do dia a dia", polite: "Cortesia", saying: "Ditado popular" };
