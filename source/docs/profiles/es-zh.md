# Spanish speakers learning Mandarin Chinese: pair profile

Course `es-zh` teaches Mandarin to speakers of Spanish. It is a standard course assembled from two halves (`docs/HALVES-SPEC.md` §11):
- the Chinese half `tools/halves/target/zh/`, exported from en-zh (28 lessons, 886 cards, Simplified characters + pinyin; read-only, shared with vi-zh);
- a Spanish native half `tools/halves/native/es/zh/`, filled by four writers (w1–w4, scaffolded by `mk_native.js es --target zh`).

This profile is the writers' and the reviewer's authority. It follows the house style of the reviewed Spanish half of the Korean course (`tools/halves/native/es/ko/`, its `REVIEW.md`) and `docs/profiles/es.md`, and reuses their settled Spanish wherever the idea is the same. It departs from them only where Chinese needs it, and says so.

**There are no reading rows in es-zh.** Spanish has no inherited Chinese readings. Cards carry meaning and note only.

**Evidence tags:**
- **[convention]**: an opened local file (es-ko half, `es.md`, `tools/i18n/es/`), named in the tag;
- **[author]**: the author's knowledge of Spanish and Mandarin phonetics and grammar, not checked against an opened source;
- **[inference]**: this profile's reasoning;
- **[decision]**: a choice this profile makes where nothing settles it. Writers follow it; the reviewer may change it only for a clear error, and must then change it everywhere.

No study of Spanish-speaking learners of Chinese was opened for this profile. The error ranking (§6) is [author]/[inference]. The author is not a native speaker of Spanish, and no native speaker will be consulted.

## 1. Summary

1. **Prose and voice:** neutral Latin American Spanish, **tú** to the learner, **ustedes** for plural address, never *vos* or *vosotros* [convention: `es.md` §1; es-ko REVIEW «tú to the learner in every instruction»]. Always ¿ and ¡. Spanish quotations in « ».
2. **The big sound bridge:** Spanish *p, t, k* have no puff of air, exactly like pinyin **b, d, g**. Pinyin **h** is close to the Spanish **jota**. Spanish syllables are open and its five vowels are pure, which suits pinyin [author].
3. **The big sound trap:** pinyin uses Latin letters with values a Spanish reader already "knows" wrongly: **j, q, x, z, c, h, r, g, ü**, and **qu** (which is *chü*, not *cu*). Every lesson that shows pinyin must fight Spanish spelling habits, never English ones (§4).
4. **Tones:** Spanish uses pitch for intonation and the written accent (tilde) for stress. Neither is a tone. The pinyin marks ´ and ` look like Spanish accents but mean the second and fourth tone (§4.3).
5. **Grammar bridges** (say them: they are the learner's head start, §5.2):
   - no *do*-support: questions and negatives need no helper, and the word order of a yes/no question is the statement's («¿Eres profesor?»);
   - **no** before the verb = 不 / 没 before the verb;
   - subject pronouns can drop, as in Spanish;
   - **tú / usted ≈ 你 / 您**;
   - **saber / poder ≈ 会 / 能, 可以**;
   - **estar + gerundio ≈ 在 + verb**; Spanish uses the present, not a progressive, for plans, like Chinese;
   - **hay / está ≈ 有 / 在** (new thing vs known thing);
   - **imperfecto → no 了**; **ya ≈ sentence-final 了** (change); **todavía no ≈ 还没**;
   - **«¿vas o no vas?» ≈ 去不去**; **«¿verdad?» ≈ 吧 / 对吗**;
   - partitives (*una taza de té, un par de zapatos*) prepare measure words.
6. **Grammar traps** (§5.1, §5.3):
   - **ser / estar vs 是 / 在 / 很**: 是 is only *ser* + noun;
   - **tener años / hambre / frío** is not 有;
   - **everything that describes a noun goes before it**: Spanish puts adjectives, *de* phrases and relative clauses after the noun, so the mirror is bigger than for English speakers (*el libro de Ana* / 安娜的书);
   - **place before the verb** (*trabajo en un hospital* / 在医院工作);
   - 了 is not the *pretérito*; 过 is not *he + participio* in general;
   - no agreement: one form for *alto, alta, altos, altas*;
   - asking by intonation alone, as Spanish does, without 吗;
   - **no** + command (*no te preocupes*) is 别, not 不;
   - double negation (*no voy tampoco*, *no tengo nada*) has no Chinese twin;
   - **y / o** join anything; 和 joins only nouns; *o* splits into 还是 / 或者.
7. **Script:** Simplified, as the course does. Traditional appears only where the English already shows it (门 / 門).

## 2. Learners

- Spanish-speaking learners of Chinese study it for trade and work with Chinese firms, study in China or Taiwan, travel, and Chinese media [inference]. Most start with no characters at all.
- Spanish spelling is close to phonemic. Learners expect to "read out" any Latin-letter word, which makes pinyin feel easy and makes its traps invisible [inference].
- **Dialect notes (write for all; use a regional sound only as an extra hint, never as the main anchor):**
  - Rioplatense speakers say *yo, calle* with a "sh"-like sound: a useful hint for pinyin **r** and **x**, never the main anchor [author].
  - Spain speakers have a *z / ce, ci* sound [θ]; Latin American speakers say [s]. Neither is pinyin **z** or **c** [author].
  - Caribbean, Andean and some Central American speakers often say a final *-n* as *-ng* (*pan* as "pang"). They need the **-n / -ng** contrast spelled out [author].
  - The *jota* is a strong [x] in Mexico and Spain and a soft [h] in the Caribbean, Colombia and Central America. Both are close enough for pinyin **h** [author].

## 3. Register, terms and settled names

### 3.1 Variety, voice, typography

- **Variety:** neutral Latin American Spanish, the register of pan-regional software and subtitling [convention: `es.md` §1]. Where no neutral word exists, use the Latin American form.
- **Address to the learner:** **tú** in every instruction, prompt, hint and explanation. **ustedes** for a group. Never *vos*, never *vosotros*, also not in grammar explanations [convention: `es.md` §1; es-ko REVIEW].
- **Neutral vocabulary:** reuse es-ko's list [convention: es-ko REVIEW «Neutral vocabulary»]: *piscina, maní, mascarilla, conversación, reunión, informe, pequeño, platos, tienda por departamentos*; kept as widely understood: *celular, boleto, manejar, mesero, jugo*. Add for this course [decision]: *computadora* (电脑), *auto* (车 / 汽车), *apartamento* (not *departamento* or *piso*: `es.md` §1), *autobús* (公共汽车, not *camión / guagua / colectivo*), *metro* (地铁), *taxi* (出租车), *tren de alta velocidad* (高铁), *bicicleta* or *bici* (自行车), *fideos* (面条), *arroz* (米饭), *té con leche* (奶茶), *de acuerdo / está bien* (not *vale*).
- **Language and script names** [decision, aligned with the roadmap: `tools/i18n/es/roadmap.json` «Mandarín, caracteres simplificados»]:
  - the language: **chino** (lowercase mid-sentence), **chino mandarín** or **mandarín** where the variety matters; *cantonés* is another language;
  - **caracteres** (sing. *carácter*), **caracteres chinos**; never *ideogramas* (inaccurate) or *letras* for characters;
  - **simplificados / tradicionales**; **pinyin** (masculine, lowercase, invariable: *el pinyin*).
- **Places** [decision]: **Pekín** (北京; the pinyin line still shows *Běijīng*), **Shanghái**, **Hong Kong**, **Taiwán**, **China**. Every other Chinese city is written in pinyin without tone marks: *Xi'an, Guangzhou, Shenzhen, Nanjing, Chengdu, Hangzhou, Tianjin, Chongqing*. Countries: *Estados Unidos, Reino Unido, España, México, Canadá, Francia, Alemania, Japón, Corea del Sur* (es-ko), *Australia*.
  - **美国 = Estados Unidos, 美国人 = estadounidense.** Never *América* or *americano* for 美国 / 美国人: in Spanish those name the continent [author].
  - 英国 = *Reino Unido*, 英国人 = *británico/a*; 英语 = *inglés*.
- **Chinese person names:** pinyin without tone marks, family name first, exactly as the English source writes them (王明 → *Wang Ming*; 李 *Li*, 张 *Zhang*). One spelling per name across all files.
- **Quoting:**
  - pinyin in `<i>` in bodies; in plain fields, in parentheses after the characters: 谢谢 (xièxie);
  - Spanish words, glosses and sound anchors in « »: la *j* de «jamón»; nested quotes are also « » as in es-ko («lección 12, «的: posesión y descripción»»);
  - in bodies, `<b>` marks a taught Chinese term only; Spanish anchor words go in « » or `<i>`, never `<b>`.
- **Punctuation:** always ¿ ? and ¡ !, including in options, hints and labels [convention: `es.md` §2]. Chinese rows keep their own full-width ？！。
- **Numbers** (§9).
- **`on…=` rule:** never a space + *on* + letters + `=` in a body (the app strips it as an event attribute). Spanish traps: «once =», «onda =», «onza =». Write «once: …» or «十一 = once» [convention: work/README.md rule 6].

### 3.2 Address and register in glosses

Chinese marks politeness by word choice only: 您, 贵姓, titles, 请, 吧. Spanish marks it in the pronoun and the verb. The mapping is close, so keep it mechanical [decision, consistent with es-ko's policy of usted only where the source marks honorific]:

| Chinese line | Spanish gloss |
|---|---|
| contains **您** or **贵** (您贵姓) | **usted** forms («¿Cómo está usted?», «¿Cuál es su apellido?») |
| contains 你 and no 您 | **tú** forms |
| 你们 (any group, a shop's staff) | **ustedes** («¿Tienen…?») |
| no pronoun, addressed to a stranger, staff or elder (请问, 请坐, 麻烦你, ordering) | a form with **no person** where natural: «Perdón, ¿…?», «Por favor, …», «Un café, por favor», impersonal *se*; otherwise **tú** |
| casual lines between friends (吧, 啊, 呢) | tú |

Rules:
- **Never use usted on a line without 您 or 贵.** A prompt in usted signals 您 (§8).
- Fixed formulas carry no person: «Para llevar», «La cuenta, por favor», «¡Ánimo!».
- 您 has no everyday plural: «ustedes» → 你们 or 大家.

**Fixed glosses** [decision; reuse es-ko where the function is the same: convention es-ko REVIEW «Fixed phrases»]:

| Chinese | Spanish |
|---|---|
| 你好 | «Hola» |
| 您好 | card: «Hola (con respeto, de usted)»; in a line: «Hola» + the rest of the line in usted |
| 你好吗？ | «¿Cómo estás?» (a real question, not a casual hi) |
| 谢谢 / 谢谢你 | «Gracias» |
| 不客气 | «De nada» |
| 对不起 | «Lo siento» (a real apology) |
| 没关系 | «No pasa nada» |
| 不好意思 | «Perdón» (light: squeezing past, a small favor) |
| 请问 | «Perdón, ¿…?» / card: «disculpe, una pregunta (para preguntar algo)» |
| 再见 | «Adiós». Chinese and Spanish both have one goodbye: no "who leaves" split as in Korean |
| 早上好 / 下午好 / 晚上好 / 晚安 | «Buenos días» / «Buenas tardes» / «Buenas noches» (greeting) / «Buenas noches» (on parting). Spanish has one *buenas noches* for both; the `greetings` lesson says so once |
| 吃了吗？ / 你吃饭了吗？ | «¿Ya comiste?» |
| 我叫… | «Me llamo…» |
| 您贵姓？ | «¿Cuál es su apellido?» |
| 我姓王 | «Me apellido Wang» |
| 你是哪国人？ | «¿De qué país eres?» |
| 我是美国人 | «Soy estadounidense» |
| 多少钱？ | «¿Cuánto cuesta?» |
| 服务员 | card: «mesero/a»; vocative 服务员！: «¡Mesero!»; 服务员，买单！: «¡Mesero, la cuenta!» |
| 买单 | «La cuenta, por favor» |
| 打包 | «Para llevar» (es-ko's «Para llevar, por favor» where the line is a request) |
| 老师 / 王老师 | «profesor/a» (es-ko) / «profesor Wang», «profesora Wang» by context |
| 先生 / 王先生 | «señor» / «el señor Wang»; 先生 also «esposo» (card note) |
| 女士 / 小姐 | «señora» / «señorita» + the trap (§5.1) |
| 师傅 | «maestro (trato para conductores y artesanos)» |
| 阿姨 / 叔叔 | «señora» / «señor» (literally «tía» / «tío»; the note says so) |
| 我们 / 咱们 | «nosotros» / «nosotros (tú y yo)» |
| 是 / 对 / 嗯 (yes) | «Sí» / «Exacto» / «Ajá» |
| 好 / 好的 / 好吧 / 行 | «Bien» or «De acuerdo» / «De acuerdo» / «Bueno, está bien» / «Va, de acuerdo» |
| 太好了！ | «¡Genial!» |
| 加油！ | «¡Ánimo!» |
| 哪里哪里 | «No es para tanto» |
| 请坐 / 请进 | «Siéntate, por favor» / «Pasa, por favor» (no 您: tú) |
| 麻烦你… | «¿Me harías el favor de…?» |
| 好吃 / 好喝 | «rico, sabroso (comida)» / «rico (bebida)» |
| 不要辣的 / 微辣 | «Sin picante» / «poco picante» |

Where no row fits, choose once and write it in your `work/NOTES-<wN>.md`, so the other writers use the same gloss.

### 3.3 Glossary: one term per idea (closed list)

Interface and general grammar terms are **es-ko / `es.md` unchanged** [convention: es-ko REVIEW «Glossary enforced», «App tabs»; `es.md` §3]:
- *sustantivo, verbo, adjetivo, adverbio, pronombre, preposición, partícula, sujeto, objeto, negación, orden de las palabras, palabra interrogativa, conector, sílaba, entonación*;
- tabs **Hoy, Práctica, Repaso, Lecciones, Entrenar, Progreso**; button **Comprobar**; deck **Mis frases**; *mazo, tarjeta, prueba rápida, fichas de palabras, pista, racha, lección, repaso, práctica* [convention: `tools/i18n/es/ui.json`, `es.md` §3];
- a check (3-question quiz) is a *prueba rápida*; the in-app word tiles are *fichas*.

Chinese-specific terms [decision; roadmap where tagged]:

| Idea | Use exactly | Not |
|---|---|---|
| tone 1 / 2 / 3 / 4 | **primer tono, segundo tono, tercer tono, cuarto tono** [convention: roadmap «tercer tono»] | *tono 1* in prose (allowed only in a table header), *acento* |
| neutral tone | **tono neutro** [convention: roadmap] | *tono ligero, quinto tono* |
| tone change (sandhi) | **cambio de tono** [convention: roadmap «Cambios de tono»]; once: «(sandhi tonal)» | |
| tone mark | **marca de tono** | *tilde, acento* (those are Spanish stress marks: §4.3) |
| initial / final | **inicial / final**, feminine: *la inicial, las finales* [convention: roadmap «iniciales y finales»] | |
| aspirated / unaspirated | **con soplo (de aire) / sin soplo**; once: «aspirada» [convention: es-ko «Aspirada: con soplo de aire»] | |
| retroflex | «con la punta de la lengua doblada hacia atrás»; once: «(retrofleja)» | |
| character, stroke, radical | **carácter, trazo, radical** [convention: roadmap] | *ideograma, letra, signo* |
| Simplified / Traditional | **simplificado / tradicional** | |
| measure word | **clasificador** [convention: roadmap «Clasificadores: 个・本・杯»]. First mention in a lesson: «clasificador (una palabra de medida, como *taza* en «una taza de té»)» | *contador* (es-ko's term, kept for Korean only), *palabra de medida* as the term |
| location word (上, 里, 旁边) | **palabra de ubicación** [convention: roadmap «palabras de ubicación»] | *posposición* |
| time word (今天, 明天) | **palabra de tiempo** | |
| coverb (在, 给, 跟, 从, 把) | **preposición**; once, in the deck description and `zai`: «(un coverbo: una preposición que es también verbo)» | |
| 了 / 过 / 着 | name the particle: «la partícula 了». Explain the meaning («acción terminada», «cambio», «experiencia: alguna vez») | *tiempo pasado*, *pretérito* as the meaning of 了 |
| verb-not-verb question | **pregunta verbo-no-verbo** [convention: roadmap] | *pregunta A-no-A* (the English "A-not-A" term: say it only as «lo que las gramáticas llaman A-no-A», once) |
| yes/no question | **pregunta de sí o no** | |
| modal verb (想 要 会 能 可以) | **verbo modal** | |
| verb-object word (吃饭) | **verbo separable** (once: «verbo + objeto que funciona como una palabra») | |
| complement (听懂, 吃完, 说得好) | **complemento de resultado**, **complemento de grado** | |
| serial verbs | **dos verbos seguidos** [convention: roadmap]; once: «(verbos en serie)» | |
| 把 / 比 sentence | **oración con 把 / oración con 比** | |
| syllable | **sílaba** | |
| false friend | **falso amigo** [convention: `es.md` §3] | |

### 3.4 Course meta, interface, format

- **`course.json`:** `{"native":"es","name":"…","brand":"中文"}`; no `readings` field. `name` = **«Chino mandarín»** [decision] (w1). `brand` stays 中文.
- **`ui.json`:** w1 fills `work/wU.jsonl` (12 strings). Follow the `ref` column (es-ko's wording) for the Korean-matching rows [decision on each]:
  - «Chino (obligatorio)»;
  - «Chino, pinyin, significado, nota — una por línea (pinyin y nota opcionales)» (the dash is in the source string; keep it);
  - grammar search: «Busca una estructura, p. ej., 了 o «querer»» (a Chinese pattern, never 에서);
  - hashtags: lowercase, no accents, no spaces, as vi-zh does: **#sonidosyescritura, #primerospasos, #palabrasdecadadia, #fueradecasa, #conversacion, #palabrasclave**;
  - «Informar de un problema en esta página»; «Contar mis visitas de forma anónima»; «Reproducir» (the audio play button).
- **Trainers:** en-zh has none. The tab is still called **Entrenar** in the Spanish interface. Never promise a character-writing trainer or a stroke-order animation.
- **The tone keys:** the English calls them "the accent bar". In Spanish, **«la barra de tonos»** [decision].
- **Format rules** (`work/README.md`):
  - Han set-equality: keep every Chinese run of the English, add none (except in card notes, and rarely in bodies and `why`, where the validator warns);
  - keep the pinyin of the English (warning if one is missing);
  - keep `__` / `___` blanks and the single dialogue " / ";
  - no braces and no `|` in example glosses;
  - `q p why hint` ≤ 400 characters, options ≤ 200, tile hints (`zh.tlNNN.NN`) about 25 characters at most.

### 3.5 Settled names

**Lesson titles.** Keep "N · " and exactly the English title's Chinese runs.
- 14 English titles are identical to a roadmap item whose Spanish already exists in `tools/i18n/es/roadmap.json` [convention]. **Use those titles exactly**, so the roadmap and the course agree.
- The other 14 are fixed here [decision], close to the roadmap wording where it has a near match. Writers use them exactly; the reviewer changes one only for a clear error.

| # | id | title | source |
|---|---|---|---|
| 1 | pinyin | 1 · Pinyin: iniciales y finales | roadmap |
| 2 | tones | 2 · Los cuatro tonos y el tono neutro | roadmap |
| 3 | tone-change | 3 · Cambios de tono: 不, 一 y tercer tono | roadmap |
| 4 | characters | 4 · Cómo funcionan los caracteres: trazos y radicales | roadmap |
| 5 | greetings | 5 · Hola, gracias, perdón: la cortesía china | decision |
| 6 | pronouns | 6 · Pronombres y 们 | roadmap |
| 7 | shi | 7 · 是: A es B | roadmap |
| 8 | adj | 8 · Adjetivos con 很 (sin 是) | decision |
| 9 | ma | 9 · Preguntas con 吗 y 呢 | roadmap |
| 10 | question-words | 10 · Palabras interrogativas: 什么, 谁, 哪儿, 几 | decision (roadmap wording, the English title's separators) |
| 11 | bu-mei | 11 · Negación: 不 y 没 | decision (roadmap wording) |
| 12 | de | 12 · 的: posesión y descripción | roadmap |
| 13 | you | 13 · 有: tener y haber | roadmap |
| 14 | numbers | 14 · Números y dinero | roadmap |
| 15 | measure | 15 · Clasificadores: 个, 本, 杯 | decision (roadmap wording) |
| 16 | food | 16 · Pedir comida y bebida | decision |
| 17 | family | 17 · Familia y edad | decision |
| 18 | time | 18 · La hora y las fechas | roadmap |
| 19 | zai | 19 · 在: «en» y palabras de ubicación | roadmap |
| 20 | word-order | 20 · Orden de las palabras: quién · cuándo · dónde · verbo | roadmap |
| 21 | want-can | 21 · 想, 要, 会, 能: querer, saber y poder | decision (adds *saber*: 会 = *saber hacer*, the key bridge) |
| 22 | le | 22 · 了: acción terminada y cambio (no es un pasado) | decision |
| 23 | progress | 23 · 在 y 正在: acciones en curso | decision (roadmap wording) |
| 24 | serial | 24 · Dos verbos seguidos: 去 + verbo | roadmap |
| 25 | a-not-a | 25 · Preguntas verbo-no-verbo: 去不去 | decision (roadmap wording) |
| 26 | ye-dou | 26 · 也, 都, 还: también, todos, todavía | decision (roadmap wording) |
| 27 | ba-bie | 27 · 吧 y 别: sugerencias y prohibiciones | decision (roadmap wording) |
| 28 | and-or | 28 · 和 y 还是: y, o | decision (roadmap wording) |

Cross-references give number and title, or the number alone: «lección 12, «的: posesión y descripción»», «lección 3». Never the English title.

**Group names (6)** (w1) [decision; two taken from the roadmap and es-ko]:

| id | name |
|---|---|
| zh.grp.sounds-and-script | Sonidos y escritura (roadmap stage name) |
| zh.grp.first-steps | Primeros pasos |
| zh.grp.everyday-words | Palabras de cada día |
| zh.grp.out-and-about | Fuera de casa |
| zh.grp.conversation | Conversación |
| zh.grp.core-words | Palabras clave (es-ko) |

**Deck labels (31)** (w1). They become permanent progress keys once shipped: short, unique, natural, never «Mis frases». "Top …" becomes «… clave», as es-ko does («Sustantivos clave») [convention: es-ko decks.jsonl]. Fixed [decision]:

| id | label |
|---|---|
| zh.d.pinyin-sounds | Sonidos del pinyin |
| zh.d.tone-pairs | Pares de tonos |
| zh.d.first-characters | Primeros caracteres |
| zh.d.greetings-and-courtesy | Saludos y cortesía |
| zh.d.people-and-family | Personas y familia |
| zh.d.about-me | Sobre mí |
| zh.d.numbers-and-money | Números y dinero |
| zh.d.measure-words | Clasificadores |
| zh.d.food-and-drink | Comida y bebida |
| zh.d.shopping | De compras |
| zh.d.time-days-and-dates | Horas, días y fechas |
| zh.d.around-town-and-directions | Por la ciudad |
| zh.d.travel-and-transport | Viajes y transporte |
| zh.d.work-and-study | Trabajo y estudios |
| zh.d.health-and-help | Salud y ayuda |
| zh.d.describing-things | Describir cosas |
| zh.d.questions-and-connectors | Preguntas y conectores |
| zh.d.traps-for-english-speakers | Trampas frecuentes |
| zh.d.top-nouns | Sustantivos clave |
| zh.d.top-verbs | Verbos clave |
| zh.d.top-adjectives | Adjetivos clave |
| zh.d.top-adverbs | Adverbios clave |
| zh.d.top-pronouns | Pronombres clave |
| zh.d.top-prepositions-coverbs | Preposiciones clave |
| zh.d.top-conjunctions | Conjunciones clave |
| zh.d.top-interjections | Interjecciones clave |
| zh.d.top-words | Palabras básicas (not «Palabras clave»: that is the group) |
| zh.d.top-measure-words | Clasificadores clave |
| zh.d.top-particles | Partículas clave |
| zh.d.compliments | Cumplidos |
| zh.d.flirting | Coqueteo (es-ko) |

- **"Traps for English speakers" → «Trampas frecuentes».** Its cards are general Chinese traps (很 instead of 是, 不 / 没, 两 / 二, 小姐, 东西), and its notes are rewritten from the Spanish angle (§5.1). The description drops "English" and names Spanish calques: «Errores típicos: 是 con adjetivos, 不 y 没, 二 y 两, calcos del español y frases que parecen corteses y no lo son».
- Deck descriptions follow the English content, with the reading-guide wording of §4 for `pinyin-sounds` and `tone-pairs` («las iniciales y finales que un lector de español lee mal»).

**Labels** (w1):
- **Level titles** `zh.t01–t20`, seven distinct, **gender-invariable nouns** so they fit any learner [decision; Brote, Estudiante, Pro, As reused from es-ko]:
  t01 **Brote** · t03 **Trotamundos** · t05 **Estudiante** · t08 **Hablante** · t12 **Pro** · t16 **As** · t20 **Leyenda**.
- **Greetings** `zh.h.*`, lowercase as es-ko [convention: es-ko labels]: night «buenas noches, ya es tarde» · morning «buenos días» · afternoon «buenas tardes» · evening «buenas noches».
- **In-lesson decks** (`zh.ld.*`; w2 and w3 by lesson) [decision]: pinyin-syllables «Sílabas en pinyin» · two-syllable-words «Palabras de dos sílabas» · radicals «Radicales» · characters-from-parts «Caracteres por partes».

## 4. Reading guide (pinyin for a Spanish eye)

The phonetics are [author]. **Never compare with English sounds.** Every English anchor in the source ("cheese", "jeep", "measure", "kids", "cats", "uh", "ee", "yen", "way", "yo", "kwoo", "ksyeh", "water") is rewritten from this guide (rows flagged `rw`).

### 4.1 Pinyin letter → Spanish anchor

**Pinyin letters are not Spanish spelling.** Say this first, then the two keys:
- **b, d, g are Spanish p, t, k** (no puff). This is the head start: «papá», «tío», «casa».
- **p, t, k are the same with a strong puff of air.** Spanish has no puff: put your hand in front of your mouth to feel it.

| Pinyin | Say | Spanish trap |
|---|---|---|
| b / p | the *p* of «papá», no puff / the same with a strong puff | b is never the soft *b* of «haba»; keep it firm, even between vowels (爸爸 bàba) |
| d / t | the *t* of «tío» / the same with a puff | d is never the soft *d* of «nada» |
| g / k | the *c* of «casa» / the same with a puff | **g is always hard, also before e and i**: 哥 gē is never the *g* of «gente» |
| h | **the jota of «jamón»**, never silent | **Spanish h is silent; pinyin h always sounds**: 好 hǎo ≈ «jao» |
| j | a soft «ch» with the tongue tip down behind the lower teeth and the lips spread, no puff; close to the emphatic *y* of «¡yo!» (es-ko's anchor for ㅈ) | **never the jota**: 九 jiǔ is not «jiú» |
| q | the same as j, with a puff | **never «k»** and never followed by a *u* sound: 七 qī ≈ «chi» with a puff; 去 qù ≈ «chü» |
| x | an *s* with the tongue flat and the lips in a smile, close to the «¡shh!» you say for silence | **never «ks»** (as in «taxi») and never the jota (as in «México»): 谢 xiè ≈ «sie», tongue flat |
| zh / ch / sh | «ch» without puff / «ch» of «chico» with a puff / «¡shh!», all three with the tongue tip **curled back** («retrofleja», once) | zh is not *z* + *h*; ch needs the puff and the curled tongue |
| r | like sh with the voice on, tongue curled back; Rioplatense speakers: near the *ll* of «calle» with the tongue curled back | **never the r of «pero» or «perro»**: 日 rì, 热 rè |
| z / c / s | the «ts» of «pizza» as Spanish speakers usually say it («pitsa»), no puff / the same with a puff / the *s* of «sol» | **z is never [θ] or [s]**; **c is never «k» or «s»**: 菜 cài ≈ «tsái» with a puff; 字 zì |
| l / m / n / f | as in Spanish | |
| w / y | «u» / «i» gliding into the vowel: 王 wáng ≈ «uang», 也 yě ≈ «ie» | y is never the Rioplatense «sh» of «yo» |
| a / o / u / i | as in Spanish (i, u after the consonants below: see -i, ü) | |
| e | not the Spanish *e*: say «o», then spread your lips without moving the tongue: 喝 hē, 饿 è | **in ie, üe, ei the e is a Spanish e**: 谢 xiè, 北 běi. In en / eng it is short and dull |
| -i after z c s zh ch sh r | **no vowel i**: the consonant goes on buzzing | **四 sì is not «sí»**, 是 shì and 十 shí neither |
| ü (lǜ, nǚ; written *u* after j q x y) | say «i» with the lips rounded as for «u» | **the diaeresis of «pingüino» only says the u sounds; in pinyin ü is another vowel.** And **ju, qu, xu, yu are ü**: 去 qù, never «cu» |
| ai / ei / ao / ou | «ai» of «baile» / «ei» of «rey» / «au» of «causa» / «ou» | |
| ia / ie / ian | «ia» / «ie» of «tiene» / **«ien»**: 天 tiān ≈ «tien» with a puff | **ian is not «i-an»** |
| uo / ui / iu / un | «uo» / **«uei»** as in «buey»: 对 duì / **«iou»**: 九 jiǔ / «uen» | the spelling hides a vowel in ui, iu, un |
| an / en | «an» / «en» with a short dull e; the tongue tip touches behind the upper teeth | dialects that say *pan* as "pang" must stop the tongue at the front |
| ang / eng / ong / ing | «an», «en», «un», «in» ending in the **n of «tengo» or «banco»** (tongue back), with no g sound (es-ko's anchor for ㅇ) | **-n and -ng are different words**: 饭 fàn / 放 fàng |
| er | «ar» with the tongue curled back | not a rolled r |

Letters that do not exist in pinyin: **v, ñ, ll, rr**. (Some keyboards type ü as *v*; the course never prints *v*.)

### 4.2 The four tones (and the neutral tone)

Spanish uses pitch for intonation (a rising «¿Vienes?», a falling «Vengo.») and stress for words (*papa / papá*). **Chinese uses pitch to make words.** Each syllable has its own tone, and the tone is part of the word like its letters [author].

| Tone | Sound | Spanish anchor (for one syllable) |
|---|---|---|
| primer tono (ā), 55 | high and level, held | like holding one sung note, or the «aaa» the doctor asks for |
| segundo tono (á), 35 | rises from mid to high | like a surprised «¿eh?» or «¿sí?» |
| tercer tono (ǎ), 214; 21 before another tone | low; alone it dips and comes back up | the bottom of your voice, as in a low, doubtful «mmm…». In speech it is mostly **low and flat** (half third tone) |
| cuarto tono (à), 51 | falls from high to low, short and firm | like a curt «¡no!» or a «¡ya!» that gives an order |
| tono neutro (no mark) | short and light, pitch set by the tone before | like the unstressed second syllable of «MA-ma» said *llana*: 妈妈 māma is never «mamá» |

- The anchors describe **one syllable said alone**. Never say "the second tone is Spanish question intonation": Spanish intonation spreads over a sentence, tones sit on every syllable.
- **Questions keep their tones.** Spanish asks yes/no questions with a final rise and no other change («¿Tienes tiempo?»). In Chinese that rise would turn a fourth tone into a second tone. The question word (吗, 呢, a question word, verb-not-verb) does the asking (`tones`, `ma`).
- **Stress habits:** Spanish gives one syllable per word the stress and shortens the rest. In Chinese every toned syllable is said in full; only the neutral tone is short (`tones`).

### 4.3 Spanish accent marks vs tone marks

Say this in `pinyin` and again in `tones`, in these words or close:
- In Spanish, the **tilde** ´ shows which syllable is stressed (*papá*). In pinyin, **´ is the second tone (rising)**, not stress.
- **` (grave) is the fourth tone (falling)**; Spanish does not use it. ¯ is the first tone, ˇ the third. Neither exists in Spanish.
- **Every syllable has its own mark** (Měiguórén: three tones). A syllable without a mark is the **neutral tone**, not "unstressed by default".
- **ü** is a vowel, not the diaeresis of *pingüino* (§4.1).
- Do not stress the syllable that carries ´ and flatten the rest: say every tone.

### 4.4 Typing pinyin on a Spanish keyboard

The app accepts pinyin with tone marks (through the barra de tonos), tone numbers, or characters, and uses word tiles (fichas) by default [convention: vi-zh profile §4.3; this profile does not re-test it]. Tell learners once, in `pinyin` and `tones`:
- The Spanish keyboard types **á é í ó ú** with the accent key: these are the **same characters** as pinyin second-tone vowels, so they are accepted. **ü** works with the diaeresis key (¨ + u). If your keyboard has the grave accent key (`), it types **à è ì ò ù** (fourth tone).
- **ā ǎ** and the other first- and third-tone marks are not on a Spanish keyboard: use the barra de tonos (press the tone right after the syllable), or the fichas.
- On a phone, **turn off autocorrect** when typing pinyin, or use the fichas: a Spanish autocorrect turns *shi* into «sí» and *ma* into «mal» [inference].
- Do not name exact key positions: Spain and Latin American layouts differ.

### 4.5 Lesson 1–3 anchors

- `pinyin` carries §4.1, §4.3 and §4.4; `tones` carries §4.2, §4.3 and §4.4; `tone-change` the sandhi (不 bú before a fourth tone, 一 yí / yì, 3 + 3 → 2 + 3). All three are **w2's**, so one writer keeps the anchors identical.
- The three bodies, the Pinyin sounds and Tone pairs cards (w1: `zh.c0001–` onward, the `pinyin-sounds` and `tone-pairs` decks) and their deck descriptions use **the same anchors and the same words**. w2 records the final anchor wording in `NOTES-w2.md` early; w1 copies it into the card notes. Until it appears, w1 uses the §4.1 wording exactly.
- Lesson 3's English analogy ("the t in *water*") becomes a Spanish one: «En español, la *n* de «un beso» suena como *m* y nadie la escribe distinta».

## 5. Bridges and traps

### 5.1 Traps and false friends (calcos y trampas)

**ser / estar vs 是 / 在 / 很** [author]. The single most important table of the course for this reader. Use it (or part of it) in `shi`, `adj`, `zai`, `progress`:

| Spanish | Chinese | Example |
|---|---|---|
| ser + sustantivo | **是** | Soy profesor. → 我是老师。 |
| ser / estar + adjetivo | **很** + adjective (no 是, no 在) | Es alto. / Estoy cansado. → 他很高。/ 我很累。 |
| estar en + lugar | **在** + place (no 是) | Está en casa. → 他在家。 |
| estar + gerundio | **在** + verb | Estoy comiendo. → 我在吃饭。 |
| hay | **有** (place first) | En la mesa hay un libro. → 桌子上有一本书。 |
| tener | **有** | Tengo celular. → 我有手机。 |
| tener … años | number + **岁** (no 有, no 是) | Tengo 25 años. → 我二十五岁。 |
| tener hambre / frío / sueño | adjective or verb, often with 了 or 很 (no 有) | Tengo hambre. → 我饿了。 |

**Other grammar traps** [author/inference]:
- **No agreement.** Adjectives, 的 and measure words never change for gender or number: 高 = *alto, alta, altos, altas*. 他 / 她 / 它 are all *tā*: only the character differs.
- **No conjugation.** One verb form for every person and time. 了 / 过 / 在 add aspect, not tense (§5.4).
- **tú / usted vs 你 / 您:** close, but 您 does not change the verb, has no everyday plural, and is for elders, teachers and customers. Using 您 with a friend sounds stiff, never rude. In regions where *usted* is used even with family, do not carry that over: between equals, 你.
- **Double negation.** Spanish says *no voy tampoco*, *no tengo nada*, *no viene nadie*. Chinese has one negation: «yo tampoco voy» = 我也不去 (也 + 不), never two 不.
- **Articles.** Chinese has none. *un / una* is not always 一个, and *el / la* is nothing (or 这 / 那 + measure word when pointing). Spanish also drops the article after *ser* with professions («Soy profesor» = 我是老师): a small bridge.
- **有 vs hay / tener:** one verb for both, and never 不有 (always 没有). The *tener* idioms above are not 有.
- **Question by intonation alone.** Spanish yes/no questions often differ from the statement only in the rise. Chinese needs 吗 (or verb-not-verb), and the tones must not rise.
- **«sí / no».** Chinese has no single word: answer with the verb or adjective (很忙 / 不忙; 是 / 不是). 是 answers *sí* only to a 是 question.
- **Measure words:** Spanish counts directly (*tres libros*); Chinese needs number + measure word + noun every time (三本书). Spanish partitives (*una taza de té*) are the bridge.
- **Comparison:** *más caro que el taxi* → 比出租车贵: 比 + the thing compared, **before** the adjective, and no 很 or 更 inside a plain 比 sentence. *el más rico* → 最好吃.
- **会 / 能 / 可以 vs saber / poder:** a bridge (§5.2), with one trap: *poder* splits in two (能 able, 可以 allowed).
- **ir a + infinitivo** is two things in Chinese: a plan (我要买 «voy a comprar») or going somewhere to do something (我去超市买东西 «voy al súper a comprar cosas»).
- **No + command:** *no te preocupes* → 别担心; 不 only says "not".
- **y / o:** *y* joins anything; 和 joins only nouns and pronouns. *o* is 还是 in a question and 或者 in a statement.
- **Dates and addresses:** Spanish goes small to big (*3 de diciembre de 2026*; street, city, country); Chinese goes big to small (2026年12月3号).

**Words and sounds that mislead** [author; use only where the card or lesson has the word]:

| Chinese | Trap |
|---|---|
| 美国 / 美国人 | Estados Unidos / estadounidense, not *América / americano* |
| 小姐 xiǎojiě | *señorita* is a polite way to call a waitress in parts of Latin America; in mainland China 小姐 can suggest a sex worker. Call 服务员 |
| 先生 xiānsheng | *señor*, and also *esposo* |
| 爱人 àiren | *cónyuge* (PRC usage), not a lover |
| 东西 dōngxi | *cosa*; with a full first tone on 西 (dōngxī) it is "east and west" |
| 老师, 老王 | 老 means old, but 老师 is any teacher and 老王 is a friendly way to address Wang |
| 四 sì | "four", not «sí» |
| 你 nǐ, 那 nà, 他 tā | sound like Spanish *ni, na, ta*; they mean "you", "that", "he" |
| 好吃 / 好喝 | Spanish *rico* covers food and drink; Chinese splits them |

### 5.2 Grammar bridges: what Spanish makes easier

Say these: they are the learner's head start [author/inference].
- **No helpers.** Spanish questions and negatives need no *do*; the yes/no question keeps the statement's order («¿Eres profesor?»). Chinese keeps the order too and adds 吗.
- **no + verb = 不 / 没 + verb**, in the same place.
- **Pro-drop.** Spanish leaves out *yo* («Estoy ocupado»); Chinese leaves out pronouns when the context is clear (很忙). (Prompts still name the subject when the answer has one: §8.)
- **tú / usted ≈ 你 / 您.**
- **saber / poder ≈ 会 / 能, 可以.** *Sé nadar* = 我会游泳 (a learned skill); *no puedo ir, estoy enfermo* = 我不能去; *¿puedo sentarme?* = 我可以坐吗？ English speakers mix 会 and 能 because *can* covers both; Spanish speakers already split them.
- **estar + gerundio ≈ 在 + verb** (我在吃饭 «estoy comiendo»). And Spanish, like Chinese, uses the plain present, not a progressive, for plans: «Mañana voy a Pekín» = 我明天去北京.
- **hay / estar ≈ 有 / 在.** Spanish makes the same split: «Hay un libro en la mesa» (new thing) = 桌子上有一本书; «El libro está en la mesa» (known thing) = 书在桌子上. Spanish also lets the place come first («En la mesa hay un libro»), the Chinese order.
- **imperfecto → no 了.** What Spanish says in the *imperfecto* (*era, estaba, iba, solía*) never takes 了: 我以前常常坐地铁 «Antes tomaba mucho el metro». (The reverse does not hold: a *pretérito* of a state, «ayer estuve ocupado», takes no 了 either.)
- **ya ≈ sentence-final 了** (a change): 我饿了 «Ya tengo hambre», 下雨了 «Ya está lloviendo», 好了 «Ya está». **ya no ≈ 不…了** (我不去了 «Ya no voy»). **todavía no ≈ 还没** + verb, with no 了.
- **«¿vas o no vas?» ≈ 去不去**; **«¿tienes tiempo o no?»** ≈ 有没有时间. Spanish already has the verb-not-verb question.
- **«¿verdad?», «¿no?»** ≈ 吧 / 对吗 / 是不是 at the end.
- **Time first.** Spanish happily starts with the time («Mañana voy a Pekín»), which is always right in Chinese.
- **Clock time** has the Spanish order: 三点半 «las tres y media», 两点十分 «las dos y diez».
- **Partitives** (*una taza de té, un par de zapatos, una hoja de papel, un vaso de agua*) prepare measure words.
- **Numbers 16–29** are already built from parts in Spanish (*dieciséis* = diez y seis, *veintidós*); Chinese builds every number that way.
- **住在**: «Vivo en Pekín» = 我住在北京, the Spanish order (the one verb that keeps 在 + place after it).
- **ellos / ellas ≈ 他们 / 她们:** a mixed group is 他们, as a mixed group is *ellos*.

### 5.3 The mirror: what Spanish makes harder

Tell the learner exactly these:
1. **Everything that describes a noun goes before it**, linked by 的. Spanish puts adjectives, *de* phrases and relative clauses after the noun, so the reversal is total:
   - *el libro de mi profesor* / 我老师的书;
   - *un auto muy caro* / 很贵的车;
   - *profesor de chino* / 中文老师;
   - *la comida que me gusta* / 我喜欢的菜;
   - demonstratives already come first in Spanish (*este libro* / 这本书) and so does *mi* (我的朋友): the bridge for the rule.
   - Give the rule as «Lo que describe va **antes** del sustantivo. Lee *X 的 Y* como «Y de X».»
2. **Place before the verb:** *Trabajo en un hospital* / 我**在医院**工作. Order: who · when · where · verb (the `word-order` title). Expect 我工作在医院 ✗.
3. **The way of going before 去:** *voy al trabajo en metro* / 我坐地铁去上班.
4. **Comparison:** 比 + the thing compared before the adjective (§5.1).
5. **Manner after the verb with 得:** *habla bien chino* / 他中文说得很好: the object first or the verb repeated.

### 5.4 了, 过, 在: not the Spanish tenses

[author] Spanish marks time and aspect on the verb (*fui, iba, he ido, voy, iré*); Chinese verbs never change.
- **了** marks completion or change, not past:
  - after the verb, with a counted object: 我买了三张票 «Compré tres boletos»;
  - at the end, for a change: «ya» (§5.2);
  - no 了 for past habits and states, and none after 没 («no fui» = 我没去).
  - Gloss with the Spanish that fits (*pretérito*, *ya*); **never add «ya» or a *pretérito* as the only past cue when the Chinese has no 了**, and never write that 了 "is the past".
- **过** = experience: «alguna vez», «ya he…»: 我去过北京 «He estado en Pekín» / «Ya estuve en Pekín». Latin American Spanish uses the compound past less; «alguna vez» works everywhere.
- **在 / 正在** + verb = *estar* + gerundio; **着** = an ongoing state, often not glossed.
- **要 / 会** (future) ≈ *ir a* / *va a*; 会 also *saber*, 能 *poder*, 想 *tener ganas de / me gustaría*, 要 *querer, tener que, ir a* (`want-can`).
- **不 / 没:**
  - 不 = *no* for habits, states, choices and the future (*no voy, no soy, no iré*);
  - 没 = *no* for what did not happen (*no fui, no he ido*) and 没有 = *no tengo / no hay*;
  - 还没 = *todavía no*; 不…了 = *ya no*.
- **把** has no Spanish twin; Spanish keeps SVO with a pronoun («lo pongo en la mesa»). Say so only where the course shows 把.

### 5.5 Pronouns and address

- 我 / 你 / 他 / 她 never change: *yo, me, mí, conmigo* are all 我; *él, lo, le* are 他 (`pronouns`).
- 你 = *tú*, 您 = *usted* (§3.2), 你们 = *ustedes*, 他们 = *ellos*, 她们 = *ellas*.
- 他 / 她 sound the same (tā): in speech the context says who; in glosses write *él / ella* as the character says.
- 咱们 = «nosotros (tú y yo)», inclusive; 我们 = *nosotros* (may exclude the listener).
- **Kinship words for strangers** exist in both languages to some degree (阿姨, 叔叔; Spanish *tía / tío* from children in some countries): note it, do not build on it.

## 6. Error zones, ranked [author/inference; no study opened]

1. **Spanish letter values on pinyin:** j as jota, q as k (and qu as «cu»), x as «ks» or jota, z as [θ]/[s], c as k/s, h silent, r tapped, g soft before e/i.
2. **Aspiration:** p / t / k said without the puff, so 怕 pà sounds like 爸 bà; b / d / g softened between vowels.
3. **The three sibilant rows** z / zh / j, c / ch / q, s / sh / x: Spanish has only *s* and *ch* (plus the regional «sh» sounds).
4. **Vowels outside the five:** e, ü, the buzzing -i, er; ian read «i-an».
5. **-n / -ng**, worst for speakers who velarise final -n.
6. **Tones:** second and third confused; first tone not high enough; fourth not falling all the way; Spanish stress imposed on one syllable with the others flattened; question rise overriding the tone.
7. **Grammar:** 是 with adjectives and with *estar*; 有 for *tener años / hambre*; describers and *de* phrases after the noun; place after the verb; 了 as a past tense; missing measure word; missing 很; 二 for 两; asking without 吗; 不 for "don't"; double negation; 和 between clauses.

## 7. Per-lesson notes (ids in `target/zh/lessons.jsonl` order; writer in brackets)

Each body keeps the English structure and every `{{ex:…}}` / `{{tiles:…}}` token. Rewrite what the English builds on English; keep what is about Chinese.

1. **pinyin (w2).** §4.1, §4.3, §4.4. Open with the bridge (b d g = Spanish p t k) and the warning that pinyin is not Spanish spelling. Rewrite the sound table entirely in Spanish anchors (q, x, j, zh ch sh, r, z c); replace "e sounds like uh", "ü is ee with rounded lips", "ian like yen, ui like way, iu like yo". The closing mistake becomes the Spanish one: 去 read «cu» → qù; 谢 read «jie» or «ksie» → xiè. Keep "one character, one syllable": a Chinese syllable is simple, like a Spanish open syllable (only -n, -ng at the end).
2. **tones (w2).** §4.2 and §4.3. Replace "English uses pitch for feeling" with Spanish intonation and stress. Replace the English anchors ("what?", "No!") with §4.2's. "Questions keep their tones": the Spanish rise is the habit to break. Neutral tone: «MA-ma», never «mamá».
3. **tone-change (w2).** Replace the *water* analogy (§4.5). 不 / 一 / 3 + 3 and the half third tone stay as in the English. 个 introduced as a **clasificador**. Spanish has nothing like tone sandhi, so the drill matters [author].
4. **characters (w3).** "English has 26 letters" → «el español tiene 27 letras». Spanish spelling is almost phonemic, so the urge to sound out a character from its parts is even stronger: keep the closing mistake. Keep every pictograph and compound statement of the English; **add no etymology**. Never «ideograma».
5. **greetings (w3).** 您 ≈ usted (§3.2, §5.1). Fixed glosses of §3.2. 对不起 «Lo siento» vs 不好意思 «Perdón». Names: Spanish has two surnames; 姓 = *apellido*, and 我姓王 «Me apellido Wang» is a perfect bridge. Titles go **after** the surname (王老师 «profesor Wang»), the reverse of Spanish. 你好吗 = «¿Cómo estás?», a real question; the casual hi is 你好. 晚上好 / 晚安 both «buenas noches». 小姐 trap from the Spanish angle (*¡señorita!*).
6. **pronouns (w3).** §5.5. Spanish pronouns change (*yo / me / mí*); Chinese ones do not. Pro-drop is shared (很忙). 们 vs Spanish -s plural and gender; 他们 / 她们 = *ellos / ellas* by the same rule. 您 has no plural; *vosotros* never appears. 学生 = *estudiante(s)*; no 们 after a number.
7. **shi (w3).** The ser / estar table (§5.1): 是 is *ser* + noun only. No articles; Spanish also says «Soy profesor» without *un*. 美国 / 美国人 / estadounidense. "As in English, the describer goes first" is false for Spanish: rewrite as «al revés que en español: *estudiante estadounidense* / 美国学生, *profesor de chino* / 中文老师». 也 vs *también*. Age: «tengo 25 años» → 我二十五岁 (no 有, no 是).
8. **adj (w3).** Neither *ser* nor *estar*: 很 + adjective. 很 is weak, not *muy*. No agreement. 太…了 ≈ «demasiado…» / 太好了 «¡Genial!». "Before a noun, as in English" is false for Spanish: 好朋友 «buen amigo» (Spanish can put *buen* first: use it as the bridge), 很好的朋友 «un muy buen amigo».
9. **ma (w3).** The order part is a bridge (Spanish does not invert); the intonation-only habit is the trap: 吗 is required, tones stay. No «sí / no»: answer with the verb. 你呢？ = «¿Y tú?», exact.
10. **question-words (w3).** Spanish moves the question word to the front («¿Dónde vives?»). Chinese leaves it where the answer goes, like a Spanish echo question («¿Vives dónde?») said in a neutral voice [author]. 什么 *qué*, 谁 *quién*, 哪儿 *dónde*, 几 *cuántos* (small number), 多少 *cuánto*. Never 吗 with them.
11. **bu-mei (w3).** «no» sits where 不 / 没 sit: bridge. Choose by meaning (§5.4): *no voy / no soy / no iré* → 不; *no fui / no he ido* → 没; *no tengo / no hay* → 没有. The Spanish *pretérito* is the signal, though the Chinese verb does not change. No double negation. 我不有 is the calque of *no tengo*.
12. **de (w3).** The mirror (§5.3): read *X 的 Y* as «Y de X». The English's "you can say it both ways" contrast is replaced: Spanish puts almost everything after the noun, Chinese everything before. *mi / tu* before the noun is the bridge (我的). 我妈妈 = «mi mamá» without 的. 中文老师 «profesor de chino», 中国菜 «comida china».
13. **you (w3).** 有 = *tener* and *hay*. Spanish already starts with the place («Cerca hay un banco» = 附近有银行); never 不有. 有 vs 在 = *hay* vs *está* (§5.2), a real bridge. 你们 in a shop = «¿Tienen…?». *tener años / hambre* is not 有.
14. **numbers (w3).** Chinese builds every number like Spanish 16–29. 一百 always with 一 («cien»). 零 fills a gap where Spanish says nothing: 一百零五 «ciento cinco». 一百五 = 150, not 105. 万 = 10,000: Spanish groups by thousands, Chinese by ten-thousands (十万 = 100,000, «cien mil»). 二 / 两. Money: yuan, «yuanes», 块 / 元 / 毛. Number format §9; beware the «once =» rule (§3.1).
15. **measure (w3).** «clasificador» (first-mention wording §3.3). Spanish partitives are the bridge; Chinese needs one with every number and with 这 / 那 / 哪 / 几 («este libro» → 这本书). *un / una* is not 个. 个 is common but not safe everywhere.
16. **food (w4).** Three ways to order: 我要 «quiero…», 来 «me pone… / me trae…» (casual), 请给我 «…, por favor» (no person: §3.2). 服务员 «¡Mesero!» and the 小姐 trap. Measure words on the menu (两杯奶茶 «dos tés con leche»). 好吃 / 好喝 vs *rico*. 买单, 打包, 辣 / 微辣 (§3.2).
17. **family (w4).** Spanish *hermano* does not say older or younger; Chinese always does (哥哥 / 弟弟, 姐姐 / 妹妹). 兄弟姐妹 = «hermanos» (the Spanish masculine plural covers a mixed group the same way). Family words are *llanas* with a neutral second syllable: 妈妈 «MA-ma». Age without 有 (§5.1); 你多大 «¿Cuántos años tienes?» (to an adult your age), 你几岁 to a child; Spanish uses one question for everyone. 口 and 两.
18. **time (w4).** Clock order as in Spanish (§5.2); 两点 «las dos» (两!), 一点 with yī. Weekdays are numbered: 星期一 *lunes* … 星期六 *sábado*, 星期天 / 星期日 *domingo*. Months numbered: 一月 *enero*. Dates big to small, the reverse of «3 de diciembre» (十二月三号). Time before the verb: Spanish «Mañana voy a Pekín» is the model; «Voy a Pekín mañana» is the trap.
19. **zai (w4).** 在 = *estar en*: thing + 在 + place, no 是, as Spanish uses *estar* (not *ser*) for location: bridge. Location words after the noun: «sobre la mesa» → 桌子上 («mesa-sobre»). 在 + place before the verb: «trabajo en un banco» → 我在银行工作. 在 vs 有 = *está* vs *hay*.
20. **word-order (w4).** who · when · where · verb; Spanish is flexible but leaves details after the verb. Time first is always fine. 坐地铁去上班 vs «voy al trabajo en metro». Big before small: Spanish addresses and dates go small to big. 住在 keeps the Spanish order («Vivo en Pekín»).
21. **want-can (w4).** Lead with the bridge: *saber* = 会 (我会说中文 «Sé hablar chino»), *poder* = 能 (able now) or 可以 (allowed: «¿Puedo…?»). 想 «tener ganas de / me gustaría», 要 «querer / tener que / ir a»; 要 + noun for ordering. Modals never conjugate. The English "most common mistake" (能 for a skill) is less likely for Spanish speakers: keep it, framed as «como en español: *sé*, no *puedo*».
22. **le (w4).** "English marks time on the verb" → Spanish conjugates (*fui, iba, he ido*). 了 is not the *pretérito*. Use §5.2 and §5.4: *imperfecto* → no 了; sentence-final 了 ≈ «ya»; past states and 没 take no 了. Prompts pin the 了 answer (§8).
23. **progress (w4).** *estar + gerundio* = 在 + verb: direct bridge. Never 是 (ser), never 是在. Spanish often says «¿Qué haces?» for "now": glosses may, prompts for 在 answers use the gerund. The English "not for plans" warning is easy for Spanish speakers (they already say «mañana voy»): keep it short.
24. **serial (w4).** «Voy al súper a comprar cosas» → 我去超市买东西: no word for *a / para*. The *ir a* + infinitive trap (§5.1). 来中国学中文 «Vine a China a estudiar chino». 坐 = «ir en» (metro, autobús, taxi, tren, avión) and comes before 去; 骑 «ir en bici», 走路 «a pie».
25. **a-not-a (w4).** «¿Vas o no vas?», «¿Tienes tiempo o no?» = verb-not-verb: the best bridge in the course. 有没有; no 吗; answer with the verb.
26. **ye-dou (w4).** *también* floats in Spanish; 也 sits before the verb. *tampoco* = 也不 / 也没, one negation (§5.1). *todos* floats («Todos somos…», «Somos todos…»); 都 comes after the subject. 都不 «ninguno» vs 不都 «no todos». 还没 «todavía no» (no 了); 还 «todavía, aún»; 还要 «¿Algo más?».
27. **ba-bie (w4).** 吧 ≈ «vamos a…», «¿…, no?»: 我们走吧 «Vámonos». Spanish negative commands use *no* + subjunctive («No te preocupes»), so learners reach for 不: 别担心. 请 + verb «…, por favor» (tú unless 您: 请坐 «Siéntate, por favor»). 麻烦你 «¿Me harías el favor de…?». 好吧 «Bueno, está bien», 行 «Va, de acuerdo».
28. **and-or (w4).** *y* joins anything; 和 only nouns and pronouns (跟 the same in speech). Two clauses: a comma, no 和. *o* splits: 还是 (question: «¿Té o café?») vs 或者 (statement: «té o café, da igual»). The list comma 、.

## 8. Glosses and practice prompts

- **One prompt, one answer.** Before writing a `p` or `q`, read the item in `target/zh/practice.jsonl`: `a` (the accepted answer), `o` (options), `x` (extra distractor tiles), `strict`. The prompt must lead to `a`, and no distractor in `x` or wrong option in `o` may fit the Spanish.
- **Name the subject.** Spanish drops pronouns; if the Chinese answer contains 我 / 你 / 他 / 她 / 我们 …, the prompt must show it (*Yo…*, *Ella…*). es-ko had to fix exactly this (meet.08, «yo») [convention: es-ko REVIEW].
- **Pin the cue where Spanish allows a second Chinese answer:**

| Choice in the item | Cue in the Spanish prompt |
|---|---|
| 你 vs 您 | tú forms → 你; **usted** forms → 您. If the Spanish has no verb or pronoun to show it, add the addressee: «(a tu profesora, de usted)» |
| 了 vs no 了 | 了 after the verb: *pretérito* + the counted object («Compré tres boletos»); sentence-final 了: **«ya»** («Ya tengo hambre»); no 了: *imperfecto* or a state («Antes tomaba el metro», «Ayer estaba muy ocupado») |
| 不 vs 没 | present, habit, future, *ya no* → 不; *pretérito* («no fui») or *no tengo / no hay* → 没 / 没有; *todavía no* → 还没 |
| 两 vs 二 | 两: a counted noun or a clock hour in the prompt («dos personas», «las dos»); 二: counting, digits, inside a bigger number («doce», «el número dos») |
| 和 vs 还是 vs 或者 | *y* → 和; a ¿…o…? question → 还是; a statement with *o* → 或者, and add «(da igual cuál)» if the item rejects 还是 |
| 我们 vs 咱们 | 咱们 → «nosotros (tú y yo)»; default *nosotros* → 我们; if the item rejects 咱们, say «nosotros (sin ti)» only when needed |
| 他 vs 她, 他们 vs 她们 | *él / ella*, *ellos / ellas* written out |
| 在 + verb vs plain verb | 在 → *estar* + gerundio; plain verb → simple present or a habit word («siempre», «todos los días») |
| 过 | «alguna vez» / «ya he…» |
| 会 / 能 / 可以 | *saber* → 会; *poder* + a reason («estoy enfermo») → 能; *¿puedo…? / se puede* → 可以 |
| 想 vs 要 | «me gustaría / tengo ganas de» → 想; «quiero / tengo que / voy a» → 要 |
| 几 vs 多少 | a small expected number («¿Cuántos hermanos…?») → 几; price or big number → 多少 |
| 吗 vs 吧 vs verb-not-verb | neutral ¿…? → 吗; «¿…, verdad?» / «vamos a…» → 吧; «¿…o no…?» → verb-not-verb |
| 别 vs 不要 | «No + subjuntivo» → 别 by default; read `a`, and if 不要 is the answer, «No quiero que…» or the English's cue |
| a measure word | name the noun and, where useful, the Spanish partitive («una taza de café» → 杯) |
| 是 vs 很 | noun predicate → 是; adjective predicate → 很 (the Spanish *ser / estar* gives no clue: the noun / adjective does) |

- **Gender and number rule** [decision]: where Spanish must choose a gender or number that the Chinese leaves open:
  1. **card meanings** (dictionary glosses) of a word for people show both: «amigo/a», «profesor/a», «estudiante» (es-ko style);
  2. **sentence glosses, prompts, options, hints** use the **generic masculine** («Estoy cansado», «mi amigo», «los estudiantes»), never «/a» inside a sentence;
  3. **exceptions:** the Chinese marks the gender (她, 她们, 姐姐, 妹妹, 女士, 小姐, 妈妈) or a dialogue names the speaker (王明 → masculine): then agree with it;
  4. **number:** a bare Chinese noun is singular in card meanings; in sentences, choose by context, singular when nothing decides; when the answer has 们 or a number, the prompt has the plural or the number.
- **Glosses of Chinese example rows and dialogues:**
  - one gloss per sentence: the same Chinese gets the **same** Spanish across cards, examples, dialogues, lesson rows and practice;
  - each writer records the glosses they set in `work/NOTES-<wN>.md`; every writer reads all four before glossing a repeat (`REPEATS.md` lists them; the first writer listed sets the gloss).
- **Pattern rows** (`patterns`: `meaning` + `tr`): `meaning` glosses the pattern with the blank kept (`___`); `tr` translates the example sentence (search text).
- **Meanings:** short and distinct within each deck (compare case-insensitively: the release check fails on duplicates). **Notes:** one or two sentences; no invented etymology.

## 9. Formats and what not to do

**Formats** [convention: es-ko half, checked by Grep]:
- **Numbers in Spanish text:** four digits with no separator (*1005, 1500, 2026*); five or more with a comma, as es-ko writes «50,000 wones» (*10,000; 100,000*). Avoid decimal numerals; if one is unavoidable, use a point (*3.5*), the counterpart of es-ko's comma thousands. Chinese rows stay as they are; `pre` rows change only for this format (*1,005* → *1005*).
- **Money:** *yuan*, plural **yuanes** («25 yuanes»); 块 = *yuan* (colloquial), 元 = *yuan* (on price tags); 毛 = **mao** (invariable: «cinco mao», «la décima parte de un yuan»). 三块五 = «tres yuanes con cincuenta» in words, never «3,5» or «3.5 yuanes».
- **Time and dates:** «las tres y media», «3 de diciembre».
- **¿ ¡** always; « » for Spanish quotations (nested « » as es-ko); "…" single character; Chinese punctuation untouched in Chinese runs.
- **Prompts with "="** keep the English shape («Compré tres boletos =»), as es-ko does.

**What not to do:**
1. No English sound comparisons and no English left anywhere (bodies, table headers, options, hints, deck descriptions).
2. No Spanish letter value presented as the pinyin value without the warning of §4.1.
3. No "tone X = Spanish intonation Y"; no stress-accent reading of tone marks.
4. No 了 = past tense; no «ya» or *pretérito* as the only cue for a no-了 answer.
5. No usted on a line without 您 / 贵; no *vos / vosotros*.
6. No Chinese beyond the source, except in card notes (and rarely bodies and `why`). Never in prompts, options or glosses.
7. No invented etymologies or character stories.
8. Never touch pinyin or characters: they are target-side. Keep the pinyin of the English prose exactly.
9. No «contador» for measure words, no «ideograma», no «América» for 美国.

## 10. Unverified; doubts

- **[author], unchecked against a source:** every sound anchor in §4.1 (especially j ≈ «¡yo!», z ≈ «pitsa», r ≈ Rioplatense *ll*, e = «o» with spread lips, h ≈ jota for Caribbean speakers); the tone anchors in §4.2; the error ranking in §6; the echo-question bridge (lesson 10).
- **App behaviour taken from the vi-zh profile, not re-tested:** that typed á / à / ü from a Spanish keyboard are accepted and that tone numbers are accepted.
- **Decisions a native reader may overturn:**
  1. *Pekín* (vs *Beijing*) in glosses;
  2. «¡Mesero!» for the vocative 服务员 (vs «¡Disculpe!»);
  3. the strict usted rule (usted only with 您 / 贵);
  4. comma thousands from es-ko (RAE prefers a space or no separator; Spain readers may read *10,000* as a decimal);
  5. «clasificador» for Chinese while es-ko keeps «contador» for Korean;
  6. the level titles (*Trotamundos, Hablante, Leyenda*);
  7. title 21 adds *saber* where the roadmap says «querer y poder»: the lead aligns `roadmap.json` or reverts the title;
  8. 师傅 = «maestro»;
  9. 三块五 in words («tres yuanes con cincuenta»).

## Sources

Local, opened 2026-11-28:
- `docs/profiles/vi-zh.md` (structure), `docs/profiles/es.md` (variety, address, punctuation, glossary);
- `tools/halves/native/es/ko/REVIEW.md` and Greps of `native/es/ko/*.jsonl` (terms, tabs, number format, labels, deck style);
- `tools/i18n/es/roadmap.json` (zh lesson titles and stage names), `tools/i18n/es/ui.json` (tab names);
- `tools/halves/native/en/zh/` (lesson titles, bodies, decks, groups, labels), `tools/halves/target/zh/practice.jsonl` (item fields);
- `tools/halves/native/es/zh/work/` (README, plan, wU, REPEATS).
