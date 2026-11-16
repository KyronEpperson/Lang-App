/* es-en course metadata in the learner's language (Spanish). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (see DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["Primeros pasos", ["Saludos", "Presentarse", "Supervivencia 1", "Supervivencia 2"]],
  ["Viajes y vida diaria", ["Direcciones y transporte", "En el restaurante", "Cafetería y tienda", "Compras y pagos", "Números, horas y fechas", "Viajes (aeropuerto y hotel)", "Salud y emergencias"]],
  ["Conversación y relaciones", ["Charla casual", "Emociones y reacciones", "Cumplidos y afecto", "Teléfono y abreviaturas"]],
  ["Trabajo", ["Trabajo y correo"]],
  ["Como un nativo", ["Trampas de pronunciación", "Phrasal verbs", "Expresiones idiomáticas", "Cine, series y jerga"]]
];

exports.TAGS = {
  basics: ["Saludos", "Presentarse", "Supervivencia 1", "Supervivencia 2", "Números, horas y fechas"],
  travel: ["Supervivencia 1", "Supervivencia 2", "Direcciones y transporte", "En el restaurante", "Cafetería y tienda", "Compras y pagos", "Números, horas y fechas", "Viajes (aeropuerto y hotel)", "Salud y emergencias"],
  social: ["Saludos", "Presentarse", "Charla casual", "Emociones y reacciones", "Cumplidos y afecto", "Teléfono y abreviaturas"],
  work: ["Trabajo y correo", "Teléfono y abreviaturas", "Números, horas y fechas", "Charla casual"],
  media: ["Cine, series y jerga", "Expresiones idiomáticas", "Emociones y reacciones"],
  skills: ["Trampas de pronunciación", "Phrasal verbs", "Expresiones idiomáticas"]
};

exports.DESC = {
  "Saludos": "Saludos y despedidas básicos, y cómo responder con naturalidad",
  "Presentarse": "Decir tu nombre, de dónde eres, a qué te dedicas y tus aficiones, y preguntarle lo mismo a otra persona",
  "Supervivencia 1": "Dar las gracias, disculparte y pedir que te repitan: lo imprescindible del primer día de viaje",
  "Supervivencia 2": "Baño, precios, wifi, fotos: frases para usar en cuanto llegas",
  "Direcciones y transporte": "Preguntar el camino, entender indicaciones y moverte en metro, autobús y taxi",
  "En el restaurante": "De pedir mesa a pedir la cuenta: platos, alergias, pago y propina",
  "Cafetería y tienda": "Pedir bebidas, cambiar tamaño u opciones, recibos y bolsas",
  "Compras y pagos": "Mirar, probarte ropa, pedir tallas, pagar, devolver y cambiar",
  "Números, horas y fechas": "Horas, fechas, precios y números grandes a la manera inglesa (con punto decimal)",
  "Charla casual": "Romper el hielo y mantener la conversación: clima, fin de semana, aficiones",
  "Emociones y reacciones": "Felicitar, sorprenderte, consolar y decir cómo te sientes",
  "Cumplidos y afecto": "Hacer cumplidos, dar las gracias y acercarte a alguien con quien quieres más confianza",
  "Trabajo y correo": "Frases para correos de trabajo, reuniones y cambios de horario",
  "Teléfono y abreviaturas": "Inglés al teléfono y abreviaturas de chat como LOL, BRB y TBH",
  "Viajes (aeropuerto y hotel)": "Migración, check-in, asientos, equipaje y peticiones en el hotel",
  "Salud y emergencias": "Qué decir si te enfermas, te lastimas, pierdes algo o te roban",
  "Phrasal verbs": "Los phrasal verbs que más usan los nativos, como pick up y figure out, en lugar del verbo culto",
  "Trampas de pronunciación": "Ship/sheep, very/berry, shoes/choose, yet/jet, school sin «e», la -ed y el acento: los sonidos que más cuestan a los hispanohablantes",
  "Expresiones idiomáticas": "Expresiones que no se entienden palabra por palabra, con su equivalente en español",
  "Cine, series y jerga": "Expresiones actuales de series, música y redes sociales"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Viajar", decks: ["Supervivencia 1", "Supervivencia 2", "Direcciones y transporte", "En el restaurante", "Cafetería y tienda", "Compras y pagos", "Viajes (aeropuerto y hotel)", "Salud y emergencias"] },
  work: { label: "Trabajo", decks: ["Presentarse", "Trabajo y correo", "Teléfono y abreviaturas", "Números, horas y fechas", "Charla casual"] },
  social: { label: "Amigos y citas", decks: ["Saludos", "Presentarse", "Charla casual", "Emociones y reacciones", "Cumplidos y afecto", "Teléfono y abreviaturas"] },
  media: { label: "Cine, series y música", decks: ["Cine, series y jerga", "Expresiones idiomáticas", "Emociones y reacciones", "Phrasal verbs", "Trampas de pronunciación"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Preparar un viaje", weeks: 3, decks: ["Saludos", "Supervivencia 1", "Supervivencia 2", "Direcciones y transporte", "En el restaurante", "Cafetería y tienda", "Compras y pagos", "Números, horas y fechas", "Viajes (aeropuerto y hotel)", "Salud y emergencias"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Hacer amigos en inglés", weeks: 6, decks: ["Saludos", "Presentarse", "Supervivencia 1", "Charla casual", "Emociones y reacciones", "Cumplidos y afecto", "Teléfono y abreviaturas", "Phrasal verbs", "Cine, series y jerga", "Expresiones idiomáticas"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "Conversación en 90 días", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
/* gender-neutral nouns on purpose (profile §10): no Viajero/Experto/Maestro that would agree with the user */
exports.TITLES = ["Principiante", "Estudiante", "Hablante", "Trotamundos", "Local", "Profesional", "Leyenda"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Cumplido", expression: "Expresión diaria", polite: "Cortesía", saying: "Refrán" };
