# Puerto Rican Spanish speakers learning English: course profile

Course `spr-en`: English for speakers of Puerto Rican Spanish. Explanations, prompts, `why`, hints and card meanings are in Puerto Rican Spanish; answers are in American English. Native code `spr` (decisions: `docs/briefs/pr-decisions.md` §1).

**Base: the Spanish-speakers' course es-en.** `tools/content/spr/` is a byte copy of `tools/content/es/`. `profile.json` has `reference: "es"`, so `parity.js spr` compares the English side with es-en. This profile lists only what changes. Where it says nothing, `docs/profiles/es.md` rules (glossary §3, error zones §4, pron §6, standing rule §7, interface §10). Reuse es-en text byte-for-byte wherever it is already right for a Puerto Rican reader. Most of it is.

Evidence tags as in `es.md` and `en-espr.md`: [research-backed], [tertiary], [practitioner opinion], [inference], [unsourced].

## 1. Summary

- **English variant:** American English, unchanged (`ttsLang` en-US). Puerto Rican learners hear US English in school, media and the stateside diaspora [inference].
- **Spanish of the explanations:** es-en's neutral Latin American Spanish with *tú* already reads naturally to Puerto Ricans. Change only words that are marked or wrong on the island (§2), and the setting (§9).
- **Learners (§5):** US citizens by birth. Most have studied English at school for years, and many have family stateside. Bilingualism is "modest" overall and varies widely [tertiary]. So the starting level spans true beginners to heritage-bilingual speakers whose spoken English outruns their written accuracy. The course keeps es-en's A1–B1 path, and the Puerto Rican additions target the errors heavy but informal exposure produces: Spanglish forms, false friends, prepositions after verbs, and spelling.
- **What changes from es-en:**
  1. **Setting:** San Juan, Ponce, Mayagüez, Bayamón, Orlando, New York; dollars; *carro*, *guagua*; Puerto Rican names. About 15 English-side items (deviations) and the Spanish text around them.
  2. **New lesson `spanglish`** ("Del spanglish al inglés estándar"), after `false-friends`.
  3. **Deck 22** renamed *Falsos amigos y spanglish*, with 14 Spanglish cards added (deviation).
  4. **Typed-answer pass** over every type item: prompts pin the accepted English, and full forms of contractions are accepted (the defect class in `docs/reviews/x-en-prs-2026-11-23.md`).
  5. **Interface:** the Spanish dictionary plus a short override file (§10).
- **Lessons:** 43 (es-en's 42 + `spanglish`). **Decks:** 26, unchanged in number. **Standing rule:** verb-core, unchanged.
- **Politics:** neutral. Content never calls Puerto Rico a country, state, colony or territory. Use *Puerto Rico*, *la isla*, *los Estados Unidos* for the mainland (*Me mudé a Orlando*). "I'm from Puerto Rico" is the self-introduction.

## 2. Variant, register and voice

- *Tú* for the learner, *ustedes* for groups, as es-en. [research-backed] *Tú* is the majority form in San Juan even in service encounters ([Ayala Rodríguez 2020, UPR, abstract](https://repositorio.upr.edu/handle/11721/2036)).
- **Word swaps in Spanish text** (explanations, notes, meanings, `why`, hints), only where es-en uses a word that is marked on the island:

| es-en | spr-en | why |
|---|---|---|
| auto | carro | es.md §2 chose *auto* as neutral; Puerto Rico says *carro* [practitioner opinion, Paizy, *Primera Hora*; `en-espr.md` §10] |
| autobús, bus | guagua (*la guagua*) | island word (same sources) |
| jugo de naranja | jugo de china (first mention may add "naranja") | island word; *naranja* is understood, so change only in dialogue translations and notes, not in grammar explanations |
| lentes, gafas | espejuelos | island word |
| jeans (in Spanish text) | mahones | island word |
| dinero (informal contexts only) | chavos | keep *dinero* in neutral explanations |
| pesos, soles (prices) | dólares | Puerto Rico uses the US dollar |
| *Lima, Bogotá, Monterrey* as "where you live" | San Juan, Ponce, Bayamón, Mayagüez | setting |

- Do **not** add Puerto Rican slang to explanations. The voice is a friendly teacher in San Juan, not a street register [inference].
- Anglicisms are not "errors" in this course's voice. When the course teaches the standard English form, it says so neutrally: «En Puerto Rico se dice *parquear*; en inglés es *park*».

## 3. Glossary

es.md §3 applies unchanged (*sujeto*, *auxiliar*, *tercera persona*, *concordancia*, *pista*, *phrasal verb* kept in English, etc.). Added:

| Term | Do not use | Note |
|---|---|---|
| spanglish | barbarismo, error | the informal mix of English and Spanish; neutral |
| palabra del inglés adaptada (*parquear*, *janguear*) | anglicismo incorrecto | |
| inglés estándar | inglés correcto | for the form used at school, at work, in writing |

## 4. Error zones specific to Puerto Rican learners

es.md §4 (all Spanish speakers) stays the base: subject drop, third-person -s, do-support, adjective order, *in/on/at*, *make/do*, vowel length, final consonants, *b/v*, *sh/ch*, word stress. Ranked additions [inference unless tagged]:

1. **Spanglish forms that look like English but are not standard English.** *Dame un break* means "give me a moment", but English *Give me a break!* means "come on, stop it". *Está full* is *It's packed* / *It's sold out*. *Voy de shopping* is *I'm going shopping*. *Aplicar para un trabajo* is *apply for a job*. *Llamar pa'trás* is *call back*. [practitioner opinion: the forms *janguear, parquear, chequear, textear, printear, rufo, Dame un break, Está full, Voy de shopping, Tengo un meeting* are listed on [Welcome to Puerto Rico, *Spanglish*](https://welcome.topuertorico.org/culture/spanglish.shtml); *llamar para atrás* as the literal translation of "call back" on [Speaking Latino](https://www.speakinglatino.com/word/llamar-para-atras); neither source gives frequencies.] → new lesson `spanglish`.
2. **False friends:** *actualmente, embarazada, librería, carpeta, soportar, asistir, realizar, éxito, colegio, sensible*. es-en's `false-friends` lesson and deck already cover these (deck 22: *actually, currently, embarrassed, pregnant, library, bookstore, attend, assist, realize, sensible, college, success, carpet, support*…). Keep them as they are.
3. **Prepositions after verbs, carried over from Spanish or Spanglish:** *apply for*, *depend on*, *married to*, *hang out with*, *text someone* (no *to*), *call someone back*. Covered in `spanglish` and es-en's `prep`.
4. **Spelling of words learned by ear** (*gonna, wanna* in writing; *could of*). A note in `spanglish`, with no new items.
5. **Pronunciation** (es.md §4): final clusters (*asked*, *texts*), *b/v*, *sh/ch* (*sheep/cheap*), *ship/sheep*, word stress (*com-PU-ter*). No change to the `pron` lesson; the Puerto Rican breath *s* makes final *-s/-st* harder still [inference], so the `pron` notes may mention it in Spanish.
6. **Grammar:** do-support (*Do you like…?*), the dropped *he/she/it* (*Is raining*), adjective order (*a red car*), *in/on/at*, *make/do*: es-en lessons, unchanged.

## 5. Learners

- [tertiary] English was the main language of instruction in public schools from 1902 to 1948; bilingualism rates are "modest"; many American English words are part of Puerto Rican vocabulary; stateside speakers code-switch ([Wikipedia mirror, *Puerto Rican Spanish*](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Puerto_Rican_Spanish)).
- [practitioner opinion] "English is widely understood" ([Discover Puerto Rico](https://www.discoverpuertorico.com/article/speaking-boricua-how-language-connects-you-to-heart-puerto-rico)). "English words and expressions are common in areas such as technology, business, tourism, education, and media" (Welcome to Puerto Rico, *Spanglish*).
- Who [inference]: adults on the island who need English for work (tourism, health, call centres, federal jobs) or school; people moving to Florida, New York, Pennsylvania; parents whose children study in English.
- Consequence: keep es-en's level and order. Do not skip A1: some learners are real beginners. The Puerto Rican additions sit where es-en already handles false friends (A1 end).

## 6. Pronunciation aid

es-en's IPA aid, unchanged (`pron: required`). Every IPA string is copied from es-en's same card or row. `tools/content/es/PRON-RULES.md` is binding for any new row. New Spanglish cards copy the IPA of the same English words from es-en where they exist (`tools/content/pt/` and `tools/content/es/` agree), and otherwise follow PRON-RULES.

## 7. Standing practice rule

verb-core, keywords `sujeto|auxiliar|tercera persona|concordancia` (profile.json, as es). The `spanglish` set must hit it like every set: at least half of order + type items hinge on agreement, do-support or auxiliary inversion, or dummy *it/there*, and their `why` uses a keyword. Examples: *She hangs out with her friends* (tercera persona), *Did you park the car?* (auxiliar), *Is there parking here?* (there).

## 8. Curriculum changes

### 8.1 Lessons

43 lessons. es-en's 42 in es-en order, plus:

| id | after | deck | file |
|---|---|---|---|
| `spanglish` | `false-friends` | *Falsos amigos y spanglish* (deck 22) | `more/a1.js` (writer C) |

Set in `profile.json` (`lessonOrder.after`). Writer C adds `"extraLessons": ["spanglish"]` in `deviations.c.json` once the lesson exists.

**`spanglish`: Del spanglish al inglés estándar.** Body (Spanish, same length as the other A1 lessons): Spanglish is a normal part of bilingual life on the island and stateside; at school, at work and in writing, use the standard English form. Sections:
1. words that came from English and go back as English: *parquear* → *park*, *janguear* → *hang out (with)*, *chequear* → *check*, *textear* → *text (someone)*, *printear* → *print*;
2. same words, different meaning: *Dame un break* → *Can I take a break?* / *Give me a minute* vs *Give me a break!*; *Está full* → *It's packed / It's sold out*;
3. preposition traps: *apply for a job*, *call someone back*, *text me* (not *text to me*), *go shopping* (not *go to shopping*), *have a meeting*;
4. a short note on code-switching: fine with friends; standard forms in a job interview or an email.

At least 6 `{{ex:English|IPA|español}}` rows. Tip: *I'm going to shopping* → *I'm going shopping*.

**Practice map (14 items; English side to write as listed; Spanish prompts, `why` and hints by the writer):**

| # | type | English side |
|---|---|---|
| 0 | mc | "Can I take a break?" (vs *Can you give me a break?* [means "stop it"], *Can I take a brake?*, *Can I do a break?*) |
| 1 | mc | "I'm applying for a job." (vs *I'm applying a job.*, *I'm aplicating for a job.*, *I'm applying for job.*; not *applying to*, which many Americans also say) |
| 2 | mc | "The bus is packed." (vs *The bus is full of people's.*, *The bus is fulled.*, *The bus is very full people.*) |
| 3 | mc | "I'll text you later." (vs *I'll text to you later.*, *I'll texting you later.*, *I'll send you a text to you later.*) |
| 4 | mc | "Give me a break!" means (Spanish options: ¡Ya, no exageres! / Dame un descanso / Dame un regalo / Dame una pausa de café) |
| 5 | order | "She hangs out with her friends" (distractor: *hang*) — tercera persona |
| 6 | order | "Did you park the car" (distractor: *parked*) — auxiliar |
| 7 | order | "He is going shopping" (distractor: *to*) — auxiliar / sujeto |
| 8 | fill | "Where can I __ the car?" → *park* (o: *parking, parked, to park*) |
| 9 | fill | "Call me __ when you can." → *back* (o: *again, return, behind*) |
| 10 | fill | "She applied __ the job." → *for* (o: *on, by, of*; not *to*, which is also used) |
| 11 | type | «Ella está en una reunión ahora mismo.» → *She's in a meeting* / *She is in a meeting* / *She's in a meeting right now* / *She is in a meeting right now* — sujeto |
| 12 | type | "¿Dónde puedo estacionar?" → *Where can I park?* / *Where can I park the car?* — auxiliar |
| 13 | type | "Él janguea con sus panas los viernes." → *He hangs out with his friends on Fridays* / *He hangs out with his buddies on Fridays* — tercera persona |

Checks (3): the meaning of *Give me a break!*; *apply for*; *text someone* without *to*.

### 8.2 Inherited lessons: setting (deviations)

The English-side items that name a Latin American "home" or the learner's origin become Puerto Rican. Travel destinations (Mexico City, Buenos Aires, Peru, Spain as places visited) stay: Puerto Ricans travel there too. Found by `node tools/content/spr/scan.js` (stage 1):

| Item | es-en English | spr-en English |
|---|---|---|
| deck *Presentarse* | I'm from Mexico. / I live in Lima. | I'm from Puerto Rico. / I live in San Juan. |
| `be` #5 order, #8 fill, `be` ex row | My brother works in Lima. / My brother __ in Lima. | … in Ponce. |
| `present` #2 mc | We live in Bogotá. (+ 3 distractors) | We live in Bayamón. |
| `prep` #4 mc | I live in Lima. (+ at / on / the Lima) | I live in San Juan. |
| `object-have` #10 fill | Sofía and __ husband live in Madrid. | … live in Orlando. |
| `going-to` #0 mc | I'm going to go to Lima. | I'm going to go to New York. |
| `false-friends` #8 fill, check 1 | __, I'm from Mexico. | __, I'm from Puerto Rico. |
| `pron` #5 order | My school is in Madrid (x: *eschool*) | My school is in Mayagüez (keep the *eschool* distractor: the epenthesis point stays) |
| `pron` #7 order | We are from Spain (x: *Espain*) | keep: the *Espain* epenthesis point needs *Spain*; it is a fact about the sentence, not a claim of origin. Only if it reads oddly, use *We are from Puerto Rico* with a different distractor |
| `be` check 1, `will` check 2, `perfect` check 2 | (read; localise only where the option names the learner's home) | |
| dialogues *Where are you from?*, *I love your shoes.* | origin lines | Puerto Rico / San Juan |

Each change goes in the writer's `deviations.<part>.json` with the reason "spr.md §8.2 setting". Spanish text around them changes with them. Lessons whose English names Lima, Madrid or Bogotá only as a place visited: leave them.

### 8.3 Typed-answer pass (every type item, all files)

`node tools/content/spr/list_type.js <scratch pack>` lists every `type` item with its prompt and accepted answers. For each:
- **Person.** Spanish drops the subject. When the English needs *he* or *she*, the prompt names it: «(Él) trabaja aquí.», or a name. Never a bare verb that could be *he*, *she*, *it* or *you (usted)*.
- **Tense and aspect.** Spanish marks tense, so the verb form pins it: *trabajó* → past simple; *ha trabajado* → present perfect; *está trabajando* → progressive. The **Spanish simple present** (*trabaja*) can mean both *works* and *is working*. Add a time cue (*todos los días* → simple; *ahora mismo* → progressive), or accept both where both are right.
- ***usted / tú / ustedes*** all give *you*: no cue needed. Do not accept *you all* or *you guys* unless the item is about plural *you*.
- ***este / ese*** pins *this / that*; the Spanish article pins *a / the*. Where Spanish has no article and English could take one or none, accept both or cue.
- **Contractions.** Every accepted answer with a contraction must also be accepted in its full form in the **generated** pack. `more/*.js` items are expanded by the generator; `practice.js` items are not. Check the pack, not the source.
- A prompt fix (Spanish only) needs no deviation. An added accepted answer changes the English side: declare it (`items["<id>#<i>"]`: "spr.md §8.3 typed-answer pass").

## 9. Decks and localisation

- **Deck names:** es-en's 26, with one rename: deck 22 *Falsos amigos* → **Falsos amigos y spanglish** (native side only; parity compares by index).
- **Deck 22 additions** (writer A; `decks["22"]` deviation "spr.md §9 Spanglish cards"). Fourteen English targets, none already a card in es-en:

| English target | Spanish meaning / note (writer finalises) |
|---|---|
| I'm applying for a job. | Estoy solicitando un trabajo. — en PR se oye *aplicar para*; en inglés, *apply for* |
| Where can I park? | ¿Dónde puedo estacionar? — *parquear* viene de *park* |
| Let's hang out this weekend. | Vamos a janguear este fin de semana. |
| I'll check and let you know. | Voy a chequear y te aviso. |
| Can I take a break? | ¿Puedo tomar un descanso? — no *Give me a break* |
| Give me a break! | ¡Ya, no exageres! / ¡No me digas! — no significa «dame un descanso» |
| The bus is packed. | La guagua está llena. — *Está full* |
| It's sold out. | Se agotó. — *Está full* (boletos) |
| I'm going shopping. | Voy de compras. — sin *to* |
| I have a meeting at three. | Tengo una reunión a las tres. |
| The roof is leaking. | El techo se está goteando. — *el rufo* viene de *roof* |
| I need to print this. | Necesito imprimir esto. — *printear* |
| Call me back when you can. | Llámame cuando puedas. — *llamar pa'trás* |
| Did you like my post? | ¿Te gustó mi publicación? — *likear* |

  IPA from es-en / PRON-RULES; the validator checks one IPA per English string across the course.
- **Setting in Spanish text:** dialogue and example translations, notes and lesson prose use the §2 swaps, Puerto Rican places and names (José, Luis, Carmen, Gabriel, Yamilet, Xiomara, Kevin, Coral, Edwin, Nilda), dollars, baseball and basketball, *mofongo*, *arroz con gandules*, *tostones*. Do not translate English proper nouns.
- **What not to change:** Spanish that is already neutral and natural in Puerto Rico. When unsure, leave es-en's text: byte-identical reuse is the default.

## 10. Interface

- spr-en reads `packs/i18n-es.js` (LANGS `spr` has `ui:'es'`). **No second dictionary.**
- Overrides: `tools/content/spr/ui.json`, a flat JSON object `{"<English key exactly as in tools/i18n/keys.json or tools/i18n/es/ui.json>": "<Puerto Rican wording>"}`. `tools/content/gen.js` emits it as the pack's `UI`. It overrides exact keys only; patterns stay es.
- What goes in: es wording that is wrong or marked on the island (an *auto*, a *Lima*, a *pesos*, a Spain or Mexico word), and the onboarding lines that name a place. Expected size: 0–30 keys. If es reads right, the key stays out.
- Rules: es.md §10 (¿ ¡, *tú*, label lengths: the seven tab labels ≤ 8 characters). The validator warns on empty values.
- Language names in the interface come from Intl in `es-PR` («inglés», «español»), as for es.

## 11. Gaps

- No source gives frequencies for the Spanglish forms in §4, or says which Puerto Ricans use them. The lesson presents them as "se oye", not as universal.
- *Aplicar para* and *llamar para atrás* as Puerto Rican usage are [practitioner opinion] at best (a calque noted for US Spanish generally). The owner should confirm both (q2 below).
- The learner-level spread is an inference from schooling history and the "modest" bilingualism line; no placement data.

**Owner's review list (a Puerto Rican speaker):**
1. Are *carro, guagua, espejuelos, mahones, chavos, jugo de china* right in a teacher's neutral explanation, or too colloquial for some of them?
2. *Aplicar para un trabajo*, *llamar pa'trás*, *Dame un break*, *Está full*: common on the island?
3. «Del spanglish al inglés estándar»: is the framing respectful?
4. "I'm from Puerto Rico" / *la isla* / *los Estados Unidos* as the neutral vocabulary.
5. *Give me a break!* glossed as «¡Ya, no exageres!»: natural Puerto Rican Spanish?

## Sources

- [Welcome to Puerto Rico, *Spanglish*](https://welcome.topuertorico.org/culture/spanglish.shtml)
- [Speaking Latino, *llamar para atrás*](https://www.speakinglatino.com/word/llamar-para-atras)
- [Wikipedia, *Puerto Rican Spanish* (IPFS mirror)](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Puerto_Rican_Spanish)
- [Discover Puerto Rico, *Speaking Boricua*](https://www.discoverpuertorico.com/article/speaking-boricua-how-language-connects-you-to-heart-puerto-rico)
- [Ayala Rodríguez, G. (2020), UPR repository](https://repositorio.upr.edu/handle/11721/2036)
- [Paizy, G., *En España no lo dicen igual*, Primera Hora](https://www.primerahora.com/opinion/prof-gabriel-paizy/columnas/en-espana-no-lo-dicen-igual/)
- `docs/profiles/es.md`, `docs/profiles/en-espr.md`, `docs/reviews/x-en-prs-2026-11-23.md`
