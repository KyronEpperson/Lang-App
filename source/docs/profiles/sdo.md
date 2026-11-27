# Dominican Spanish speakers learning English: course profile

Course `sdo-en`: English for speakers of Dominican Spanish. Explanations, prompts, `why`, hints and card meanings are in Spanish that reads naturally in Santo Domingo; answers are in American English. Native code `sdo` (3 letters, same route as `spr`; the engine shows the Spanish interface through `ui:'es'`).

**Base: the Spanish-speakers' course es-en.** `tools/content/sdo/` is a byte copy of `tools/content/es/` (copied 2026-11-27, with the alphabet flip tiles and the spelling-patterns section already in it). `profile.json` has `reference: "es"`, so `parity.js sdo` compares the English side with es-en. This profile lists only what changes. Where it says nothing, es-en stays byte-identical: reuse it wherever it is already right for a Dominican reader. Most of it is.

Evidence tags: [research-backed], [tertiary], [practitioner opinion], [inference], [unsourced]. A word tagged [unsourced] is not used in content.

## 1. Summary

- **English variant:** American English, unchanged (`ttsLang` en-US). Dominican learners meet US English in school, media, tourism and the diaspora [inference].
- **Spanish of the explanations:** es-en's neutral Latin American Spanish with *tú*. It already reads naturally to Dominicans. Change only words that are marked or wrong in the DR (§2), and the setting (§9).
- **Learners (§5):** adults in the DR (tourism, call centres, school, emigration plans) and Dominicans in the US (New York, New Jersey, Massachusetts, Rhode Island, Florida). The range runs from true beginners to heritage speakers whose spoken English outruns their written accuracy.
- **What changes from es-en:**
  1. **Setting:** Santo Domingo, Santiago, La Romana, Puerto Plata, Punta Cana; Nueva York (Washington Heights, el Bronx), Lawrence, Providence; pesos in DR scenes, dollars in US scenes; *carro*, *guagua*; Dominican names. About 20 English-side items (deviations) and the Spanish text around them.
  2. **New lesson `dominicanismos`** ("Palabras dominicanas que vienen del inglés"), after `false-friends`.
  3. **Deck 22** renamed *Falsos amigos y dominicanismos* (done by the lead), with 14 cards added (deviation).
  4. **Typed-answer pass** over every type item (§8.3).
  5. **Interface:** the Spanish dictionary; `ui.json` expected empty (§10).
- **Lessons:** 43 (es-en's 42 + `dominicanismos`). **Decks:** 26, unchanged in number. **Standing rule:** verb-core, unchanged.
- **Voice:** neutral and respectful. Dominican words that came from English are normal Dominican Spanish, never "errors". No class labels, nothing vulgar, no politics.

## 2. Variant, register and voice

- *Tú* for the learner, *ustedes* for groups, no *vosotros* (as es-en). [tertiary] Caribbean Spanish has no voseo; *usted* is for formal or unfamiliar speakers (`docs/profiles/en-esdo.md` §2.3, Wikipedia mirror and Newcastle pages cited there).
- Model: educated Santo Domingo speech (en-esdo §2.1). Explanations do not imitate pronunciation (*ehtoy*, *peldón*) and use no slang.
- **Word swaps in Spanish text** (explanations, notes, meanings, `why`, hints, dialogue and example translations), only where es-en uses a word that is marked in the DR:

| es-en | sdo-en | why |
|---|---|---|
| auto, autos, coche | carro, carros | DR form [tertiary, Wikipedia mirror dialect table, en-esdo §2.2] |
| autobús, bus | guagua (*la guagua*) | everyday DR word [W, L, DA in en-esdo §10 #1]. In a grammar explanation where the word is incidental, *guagua* too |
| frijoles | habichuelas | [W, en-esdo §10 #11] |
| plátano meaning banana | guineo | [W, DC, en-esdo §10 #12]; *plátano* is the cooked plantain |
| departamento (flat) | apartamento | DR form [en-esdo §2.2] |
| cacahuate / camote / popote | maní / batata / calimete | [W, en-esdo §10 #65, #62, #68] |
| pesos, soles (prices) | pesos (DR scene) or dólares (US scene) | the DR uses the Dominican peso |
| Lima, Bogotá, Monterrey, México as "where you live" | Santo Domingo, Santiago, La Romana, Puerto Plata; Nueva York, Lawrence, Providence | setting |

- **Not swapped:** *jugo de naranja* stays (*jugo de china* is regional, en-esdo §10 #45). *Lentes*, *celular*, *computadora*, *carro*, *apartamento* are already DR forms. *Ahorita* is a false friend in the DR ("in a while", en-esdo §10 #18): where es-en uses *ahorita* for "right now", write *ahora mismo*.
- Mexico- and Spain-only words in Spanish text are FORBID (scan.js): *tacos, tortillas, quesadillas, tamales, cuate, lana, chamba, platicar, qué padre, vale (= OK), vosotros, ordenador, móvil, zumo, guay, chaval*. Notes that compare with Mexico may name them.
- English-derived Dominican words are presented neutrally: «En RD se dice *yipeta*; en inglés, *SUV*».

## 3. Glossary

es-en's glossary applies unchanged (*sujeto*, *auxiliar*, *tercera persona*, *concordancia*, *pista*, *phrasal verb* kept in English). Added:

| Term | Do not use | Note |
|---|---|---|
| dominicanismo | barbarismo, error | a word typical of Dominican Spanish |
| palabra que viene del inglés (*yipeta*, *jonrón*) | anglicismo incorrecto, mal dicho | |
| inglés estándar | inglés correcto | for the form used at school, at work, in writing |
| la República Dominicana, RD | | in English always *the Dominican Republic* (§4.7) |

## 4. Error zones specific to Dominican learners

es-en's error zones (all Spanish speakers) stay the base: subject drop, third-person -s, do-support, adjective order, *in/on/at*, *make/do*, vowel length, *b/v*, *th*, *sh/ch*, word stress. Ranked additions:

1. **Final -s: plurals, third person, possessive.** [tertiary] In Dominican Spanish syllable-final /s/ tends to become an aspiration [h] or disappear (Wikipedia mirror, *Dominican Spanish*; en-esdo §2.1). [inference] A speaker who drops final *s* at home is likely to drop English *-s* too: *two book*, *she work*, *my brother car*. Covered by es-en's `plurals`, `third-s`, `be`; `pron` may add one Spanish sentence on it (writer B).
2. **Word-final clusters** (*asked, texts, desks, months*). [inference] The same s-weakening makes *-sts, -sks, -kst* harder still. es-en's `pron` and `past` cover them; no new items.
3. **Questions without do-support, with the subject before the verb.** [tertiary] Dominican Spanish often keeps the subject pronoun before the verb in questions: *¿Qué tú quieres?* (Newcastle page; en-esdo §10 #5). [inference] This maps onto *What you want?* / *Where you live?*, with no *do*. es-en's `questions` covers do-support; the C writer may add, in Spanish only, one line naming *¿Qué tú quieres?* → *What do you want?* in `questions` (no item change).
4. **Final *n* and *ng*.** [tertiary/en-esdo §2.1, decided there as a production feature] Dominican final *n* is often velar ([ŋ]). [inference] So *thin / thing*, *win / wing*, *sun / sung* blur, in both directions. A note in `pron` (writer B); no new items.
5. ***th*, *v/b*, *sh/ch*:** as es-en (all Spanish speakers). No change.
6. **Syllable-final *r* and *l*.** [tertiary] The capital and the east may say *r* as *l* (*peldón*), the Cibao as *i* (en-esdo §2.1). [inference] Can blur *car/call*, *hard/hold*. Recognition only; no item.
7. ***the* Dominican Republic.** [inference] Spanish *República Dominicana* takes no article in speech (*soy de República Dominicana*), so learners write *I'm from Dominican Republic*. English needs *the* (like *the United States*). Writer A puts it in the *Presentarse* note; writer D may add one Spanish sentence in `articles-2`.
8. **English-derived Dominican words** whose English meaning or form differs: *yipeta* (any SUV; *Jeep* is one brand), *conflé* (any cereal; *Corn Flakes* is one), *tíchel* (a jersey; English *T-shirt*), *jonrón* (*home run*, two words, other stress). → new lesson `dominicanismos`.
9. **False friends** (*actualmente, embarazada, librería, carpeta, éxito, colegio, sensible*): es-en's `false-friends` lesson and deck 22 cover them. Keep as they are.

No study of Dominican learners of English was opened for this profile: zones 1 to 8 are inferences from the described features of Dominican Spanish. Do not cite studies in content.

## 5. Learners

- [tertiary] Dominican Spanish took English words during and after the US occupations of 1916 to 1924 and 1965 to 1966 (Wikipedia mirror). Baseball vocabulary is largely English-derived (Alba 2026, §11).
- Who [inference]: adults in the DR who need English for tourism (Punta Cana, Puerto Plata, La Romana), call centres, school or a planned move; Dominicans in New York, New Jersey, Massachusetts (Lawrence), Rhode Island (Providence) and Florida, and parents whose children study in English.
- Consequence: keep es-en's A1 to B1 path. Do not skip A1. The Dominican additions sit where es-en handles false friends (end of A1).

## 6. Pronunciation aid

es-en's respelling aid, unchanged (`pron: required`). Every respelling is copied from es-en's same card or row. `tools/content/es/PRON-RULES.md` is binding for every new row. New cards copy the respelling of the same English string from es-en where it exists; one English string has one respelling across the course (lint).

## 7. Standing practice rule

verb-core, keywords `sujeto|auxiliar|tercera persona|concordancia` (profile.json, as es). The `dominicanismos` set must hit it like every set: at least half of order + type items hinge on agreement, do-support or auxiliary inversion, or dummy *it/there*, and their `why` uses a keyword. The §8.1 map marks the hits (6 of 6).

## 8. Curriculum changes

### 8.1 Lessons

43 lessons: es-en's 42 in es-en order, plus:

| id | after | deck | file |
|---|---|---|---|
| `dominicanismos` | `false-friends` | *Falsos amigos y dominicanismos* (deck 22) | `more/a1.js` (writer C) |

Set in `profile.json` (`lessonOrder.after`). Writer C adds `"extraLessons": ["dominicanismos"]` and `"lessons": {"dominicanismos": "sdo.md §8.1 new lesson"}` to `deviations.c.json` once the lesson exists.

**`dominicanismos`: Palabras dominicanas que vienen del inglés.** Blurb idea: «Jonrón, yipeta, conflé: palabras dominicanas que vienen del inglés. Aquí ves cómo se dicen hoy en inglés.» Body (Spanish, same length as the other A1 lessons, about 300 words). Frame: these words are part of Dominican Spanish; many came with baseball, brands and the US presence; in English you need the English word, and sometimes it is not the one you expect. Sections:

1. **Del béisbol:** *jonrón* → *home run* (two words, stress on *home*); *estrái* → *strike*; *pícher* → *pitcher* (Alba 2026 lists *jonronero*, *pitcheo* and the *estráik / estrái / ehtrái* variants).
2. **Marcas que se volvieron palabras:** *yipeta* → *SUV* (*Jeep* is a brand); *conflé* → *cereal* (*Corn Flakes* is one cereal); *yilé* → *razor* (Gillette); *pamper* → *diaper* (Pampers); *vaporú* → *VapoRub* / *chest rub*.
3. **Ropa, casa y trabajo:** *poloché* → *polo shirt*; *tíchel* → *T-shirt*, and for sport *jersey*; *guachimán* → *security guard* (*watchman* exists but is less used today); *teipi* → *tape*.
4. **Un verbo:** *yompear* → *jump-start* (a car): *Can you jump-start my car?*, *I need a jump.*
5. **Se dice que…:** one line only: *se dice que* *zafacón* viene de *safety can*; nadie lo sabe con seguridad. En inglés: *trash can*.

At least 6 `{{ex:English|pron|español}}` rows. Tip: *I need a Jeep* means one brand; say *I need an SUV* (an, because *S* is said «es»).

**Practice map (14 items; English side as listed; Spanish prompts, `why` and hints by the writer):**

| # | type | English side |
|---|---|---|
| 0 | mc | "He hit a home run." (vs *He hit a jonrón.*, *He hitted a home run.*, *He hit a home runs.*) |
| 1 | mc | "I need a new razor." (vs *I need new razor.*, *I need a razor new.*, *I need a new rasor.*) |
| 2 | mc | "The baby needs a clean diaper." (vs *The baby need a clean diaper.*, *The baby needs a clean pamper.*, *The baby needs clean a diaper.*) |
| 3 | mc | "Do you have any tape?" (vs *Does you have any tape?*, *Do you have any teipi?*, *You has any tape?*) |
| 4 | mc | "Can you jump-start my car?" means (Spanish options: ¿Me puedes yompear el carro? / ¿Me puedes empujar el carro? / ¿Puedes saltar sobre mi carro? / ¿Me prestas tu carro?) |
| 5 | order | "My cousin drives an SUV" (distractor: *drive*): tercera persona |
| 6 | order | "Does he play baseball" (distractor: *plays*): auxiliar |
| 7 | order | "There is a security guard at the door" (distractor: *are*): there |
| 8 | fill | "I eat __ for breakfast." → *cereal* (o: *a cereal*, *cereals*, *corn flake*) |
| 9 | fill | "He's wearing a polo __." → *shirt* (o: *shirts*, *short*, *shoe*) |
| 10 | fill | "The pitcher __ the ball." → *throws* (o: *throw*, *throwing*, *is throw*): tercera persona |
| 11 | type | «Mi hermano tiene una yipeta nueva.» → *My brother has a new SUV*: tercera persona |
| 12 | type | «¿Tienes teipi? (cinta adhesiva)» → *Do you have any tape?* / *Do you have tape?*: auxiliar |
| 13 | type | «El guachimán trabaja de noche.» → *The security guard works at night* / *The guard works at night* / *The watchman works at night*: tercera persona |

Checks (3): *home run* (form and meaning); *cereal* as the general word (not *Corn Flakes*); *an SUV* (article *an*).

### 8.2 Inherited lessons: setting (deviations)

English-side items that name a Latin American home or the learner's origin become Dominican, or diaspora where that reads naturally. Travel destinations (Mexico, Lima, Buenos Aires, Peru as places visited, things made in Mexico) stay. In order and fill items use one-word places (Santiago, Providence, Lawrence) so the tile count does not change. Found by `node tools/content/sdo/scan.js` (stage 1: 39 English-side rows):

| Item | es-en English | sdo-en English | writer |
|---|---|---|---|
| deck *Presentarse* | I'm from Mexico. / I live in Lima. | I'm from the Dominican Republic. / I live in Santo Domingo. (note: *the* Dominican Republic, §4.7) | A |
| dialogue *Where are you from?* | I'm from Mexico. Monterrey, actually. | I'm from the Dominican Republic. Santiago, actually. | A |
| dialogue *I love your shoes.* | I got them in Mexico City. | I got them in New York. | A |
| `pron` #5 order | My school is in Madrid (x: *eschool*) | My school is in Santiago (keep *eschool*) | B |
| `pron` #7 order, `pron` ex | We are from Spain (x: *Espain*) / I'm from Spain. | keep: the *Espain* point needs *Spain* | B |
| `be` ex, #5 order, #8 fill | My brother works in Lima. / My brother __ in Lima. | … in Santiago. | B |
| `be` check 1 | My sister lives in Lima. (+3 wrong) | … in Providence. | B |
| `prep` #4 mc | I live in Lima. (at / on / the Lima) | I live in Santo Domingo. (at / on / the Santo Domingo) | B |
| `tense` #2 | I'm going to visit Mexico City next month. | keep (travel) | B |
| `plurals` ex | Her brothers live in Lima. | … live in New York. | C |
| `present` ex, #2 mc | We live in Mexico City. / We live in Bogotá. (+3) | We live in Santo Domingo. / We live in Santiago. | C |
| `object-have` #10 fill | Sofía and __ husband live in Madrid. | Yokasta and __ husband live in Lawrence. | C |
| `going-to` #0 mc, ex | I'm going to go to Lima. / I'm going to visit Lima. | … go to Punta Cana. / … visit Puerto Plata. | C |
| `false-friends` ex, #8 fill, check 1 | Actually, I'm from Lima. / __, I'm from Mexico. / Actually, I live in Madrid. | … from Santo Domingo. / … from the Dominican Republic. / … in New York. | C |
| `irregular-past` ex, #8, #11 | went to Lima / Mexico / Buenos Aires | keep (travel) | C |
| `perfect-2` ex | I've lived in Lima for five years. | I've lived in New York for five years. | D |
| `articles-2` ex | I live in Peru. | keep; writer D may add one Spanish line: *the Dominican Republic*, *the United States* take *the* | D |
| `perfect`, `make-do`, `passive`, `will` check 2, `perfect` check 2 | Mexico, Peru, Lima as visits or origin of goods | keep (travel, trade) | D |

Each change goes in the writer's `deviations.<part>.json` with the reason "sdo.md §8.2 setting". Spanish text around them changes with them.

### 8.3 Typed-answer pass (every type item, all files)

`node tools/content/sdo/list_type.js <scratch pack>` lists every `type` item with its prompt and accepted answers (stage 1: 127 items, 37 flagged). For each:
- **Person.** Spanish drops the subject. When the English needs *he* or *she*, the prompt names it: «(Él) trabaja aquí.», or a name. Never a bare verb that could be *he*, *she*, *it* or *you (usted)*.
- **Tense and aspect.** Spanish marks tense, so the verb form pins it: *trabajó* → past simple; *ha trabajado* → present perfect; *está trabajando* → progressive. The **Spanish simple present** (*trabaja*) can mean both *works* and *is working*. Add a time cue (*todos los días* → simple; *ahora mismo* → progressive), or accept both where both are right.
- ***usted / tú / ustedes*** all give *you*: no cue needed. Do not accept *you all* or *you guys* unless the item is about plural *you*.
- ***este / ese*** pins *this / that*; the Spanish article pins *a / the*. Where Spanish has no article and English could take one or none, accept both or cue.
- **Contractions.** Every accepted answer with a contraction must also be accepted in its full form in the **generated** pack. `more/*.js` items are expanded by the generator; `practice.js` items are not. Check the pack, not the source.
- A prompt fix (Spanish only) needs no deviation. An added accepted answer changes the English side: declare it (`items["<id>#<i>"]`: "sdo.md §8.3 typed-answer pass").

### 8.4 Do not touch

The `alphabet` lesson's `{{tiles:…}}` lines and its spelling-patterns section stay byte-identical to es-en (`alphabet_check.js` must pass).

## 9. Decks and localisation

- **Deck names:** es-en's 26, with one rename (done by the lead in decks.js, meta.js and the `false-friends` link): deck 22 *Falsos amigos* → **Falsos amigos y dominicanismos** (native side only; parity compares by index).
- **Deck 22 additions** (writer A; `decks["22"]` deviation "sdo.md §9 dominicanismo cards"). Fourteen English targets, none a card in es-en. Each Dominican word was found on a page opened on 2026-11-27 (source keys in §11):

| English target | Spanish meaning / note (writer finalises) | Source |
|---|---|---|
| home run | jonrón — dos palabras en inglés; acento en *home* | AL |
| strike | estrái (béisbol) — en inglés suena «straik» | AL |
| pitcher | pícher — el que lanza la pelota | AL |
| SUV | yipeta — *Jeep* es una marca; se dice «es-iu-VI» | W, MC |
| cereal | conflé — *Corn Flakes* es una marca; el general es *cereal* | W, MC |
| polo shirt | poloché | W, LR |
| T-shirt | camiseta — de aquí viene *tíchel*; la de un equipo es *jersey* | W |
| security guard | guachimán — viene de *watchman*, que hoy se usa menos | LR, JS |
| razor | yilé (afeitadora) — *Gillette* es una marca | W |
| diaper | pamper (pañal) — *Pampers* es una marca | W |
| tape | teipi, cinta adhesiva | JS |
| jump-start | yompear (un carro) — "Can you jump-start my car?" | RG |
| trash can | zafacón — se dice que viene de *safety can*; no es seguro | W ("possibly"), MC ("origin unknown"), LR |
| chest rub | vaporú — *VapoRub* es una marca | W |

  Respellings from es-en where the string exists, else PRON-RULES. Add at least 4 dialogues and 3 examples for the new cards in extra.js (DR and US scenes).
- **Considered and left out:** *quécher*, *pléi*, *lonche*, *parquear*, *bonche*, *cachú*, *greifrú* [unsourced: no opened page lists them as Dominican]; *suape* (listed as "mop" by MC, but no page gives the English source) [unsourced etymology]; *friza* (blanket; likely Spanish *frisa*, not English) [unsourced]; *seibó* (LR gives "save box", one source); *pana*, *chercha*, *pariguayo* (English etymologies "partner", "church chat", "party watcher" are disputed folk etymologies; *pariguayo* is also an insult, Semana); *boche* (W gives a vulgar English source); *josear* (Semana: criminal sense).
- **Setting in Spanish text:** names Yanelis, Rafael, Wilson, Yokasta, Ramón, Miguel, Altagracia, Yesenia (en-esdo §9.3; "typical" is [unsourced], owner check); places as §1; food *mangú, los tres golpes, la bandera, sancocho, tostones, pica pollo, habichuelas con dulce, morir soñando, jugo de chinola* (DC, en-esdo §9.3); settings *el colmado, la guagua, el concho, el Malecón, un almuerzo de domingo, la abuela en Santiago*. Baseball as the sport. Do not translate English proper nouns.
- **Phrasal verbs card «end up»:** its note's example "We ended up at a taco place." becomes "…at a pizza place." (Terminamos en una pizzería.): note text, no deviation (writer A).
- **What not to change:** Spanish that is already neutral and natural in the DR. When unsure, keep es-en's text.

## 10. Interface

- sdo-en reads `packs/i18n-es.js` (LANGS `sdo` has `ui:'es'`). **No second dictionary.**
- Overrides: `tools/content/sdo/ui.json`, a flat JSON object `{"<English key exactly as in tools/i18n/es/ui.json>": "<Dominican wording>"}`, emitted by `tools/content/gen.js` as the pack's `UI`. Exact keys only.
- Expected: **none.** A stage-1 grep of `tools/i18n/es/ui.json` for *auto, coche, autobús, México, Lima, pesos, soles, vale, ordenador, móvil, vosotros, chamba* found only *auto* in the sense "automatic"; es already uses *celular* and *computadora*, the DR forms. Writer I confirms by reading and writes `{}` if nothing is wrong.
- Rules: ¿ ¡, *tú*, tab labels ≤ 8 characters.

## 11. Sources and gaps

Sources opened 2026-11-27:
- **W** [tertiary] [Wikipedia, *Dominican Spanish*, IPFS mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Dominican_Spanish): yipeta (Jeep), tichel (T-shirt; jersey, undershirt), polo ché, conflé ("possibly"), yilé (Gillette), vaporú, pamper, zafacón ("possibly … safety can"); /s/ aspiration; the 1916 to 1924 and 1965 to 1966 occupations.
- **AL** [practitioner opinion: dialectologist's essay] [Orlando Alba, *Clasificación de los anglicismos del béisbol*, Acento, 2026-01-01](https://acento.com.do/cultura/clasificacion-de-los-anglicismos-del-beisbol-9588367.html): *jonronero*, *pitcheo*, *estráik / estrái / ehtrái / etrái*; *pitcher*, *catcher*, *hit*, *umpire* as unadapted loans.
- **LR** [practitioner opinion] [Oscar López Reyes, *Norteamericanización del español dominicano (II)*, El Nuevo Diario, 2023-02-06](https://elnuevodiario.com.do/norteamericanizacion-del-espanol-dominicano-ii/): guachimán (watchman), poloché (polo shirt), seibó (save box), zafacón (safe can).
- **MC** [practitioner opinion: student blog] [Macaulay CUNY e-portfolio, Dominican vocabulary list](https://eportfolios.macaulay.cuny.edu/lizabroad/?p=371): conflé (cornflakes), yipeta (Jeep), zafacón (origin unknown, possibly safety can), suape (mop), poloche.
- **JS** [practitioner opinion: teacher's newsletter] [Jely Spanish, *Dominican words that come from English*](https://jelyspanish.substack.com/p/dominican-words-that-come-from-english): guachimán (watchman), teipi (tape); also pana, chercha, pariguayo (not used).
- **RG** [practitioner opinion, citing the *Diccionario del español dominicano*, 2013] [Roberto Guzmán, *Yompear*, Acento, 2020](https://acento.com.do/opinion/yompear-8847760.html): yompear = connect a flat battery to another; from English *to jump*.
- [Frank Báez, *Tips para viajeros*, Semana, 2024-09-12](https://www.semana.com/turismo/articulo/tips-para-viajeros-el-particular-lexico-en-republica-dominicana/202437/): pariguayo as a strong insult (reason to leave it out).
- `docs/profiles/en-esdo.md` §2, §9.3, §10 (Newcastle, Dominican Cooking and blog sources listed there).

Gaps:
- No opened source gives frequencies for the 14 words, or says which speakers use them. The lesson says «en RD se dice», not «todos dicen».
- *Teipi* and *yompear* rest on one source each; *estrái* rests on one essay.
- The error zones in §4 are inferences; no study of Dominican learners of English was opened.

**Owner's review list (a Dominican speaker):**
1. *carro, guagua, habichuelas, guineo, apartamento* in a teacher's neutral explanation: right?
2. The 14 words of §9: all common in Santo Domingo? Any that sound dated or rural?
3. *tíchel* meaning a sports jersey vs a plain T-shirt: which is the usual sense?
4. «Palabras dominicanas que vienen del inglés»: is the framing respectful?
5. *the Dominican Republic* (§4.7): does *soy de República Dominicana* without article match what learners say?
6. The names in §9 as typical Dominican names.
