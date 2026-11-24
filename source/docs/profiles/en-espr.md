# English speakers learning Puerto Rican Spanish: course profile

Course `en-espr` teaches the Spanish of Puerto Rico to English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Spanish, in standard spelling.

The course is built on `en-es`. `tools/target/espr/` is a byte copy of `tools/target/es/` (decision: `docs/briefs/pr-decisions.md` §3), and this profile lists only what changes. Where it says nothing, `docs/profiles/en-es.md` rules: glossary, error zones, standing rule, typing. Most of the decisions mirror `docs/profiles/en-esdo.md` (Dominican, planned), because the two varieties share most Caribbean traits. The two differ in vocabulary (§10) and in a few sounds (§6.3). Machine twin: `tools/target/espr/profile.json`.

**Evidence tags** (as in `en-es.md`, `en-esdo.md`).
- **[research-backed]**: a study opened for this profile, named, with its sample and limits.
- **[tertiary]**: an encyclopedia page or a reference page that summarises the literature.
- **[practitioner opinion]**: a teacher's, blog's, tourism board's or columnist's view, with no data behind it.
- **[inference]**: this profile's own step from tagged items.
- **[unsourced]**: in no page opened for this profile. Every such item is on the owner's review list (§13), and none is taught as fact until a Puerto Rican speaker confirms it.

Untagged rules are design decisions.

## 1. Summary

- **Variant:** the everyday speech of educated people in the San Juan metro area, informal register: how a teacher, a nurse or an office worker talks with family and friends. Popular and rural features (*r* → *l*, a velar *rr*, a dropped *s*) are taught **for recognition**, and never put in what a learner types.
- **Voice:** `ttsLang` `es-PR`; `voiceAlso` `es-US`, `es-MX`, then any Spanish voice. `audioFrom` `es`: a recorded en-es clip plays only when the text is identical. No `voiceMatch`.
- **Register:** *tú* first, as in `en-es`; *usted* for elders, strangers and service. *Ustedes* is the only plural "you"; no *vosotros*.
- **What changes from `en-es`:**
  - **Sounds (§6):** the `pron` line stays the en-es careful respelling, because the voices that read it are not Puerto Rican. A new lesson and deck teach how Puerto Ricans *sound* (breath *s*, *r* that sounds like *l*, the velar *rr* of some speakers, *cansao*, *pa'*) for recognition.
  - **Grammar (§4):** subject pronouns are normal (*yo quiero, tú sabes*). The question order *¿Qué tú quieres?* is recognised and always accepted. *Ustedes* only.
  - **Vocabulary (§10):** island words become card targets where Puerto Ricans have their own everyday word: *la guagua, la china, los mahones, los espejuelos, el zafacón, el guineo*. Elsewhere the general word stays and the island word is added in a Puerto Rico deck. Prices are in **dollars**. *Pesos* (dollars) and *chavos* (money, cents) are the colloquial words.
  - **Anglicisms and code-switching (§4.6):** taught as part of the variety (*parquear, janguear, el break*), with the general word alongside so learners understand both.
  - **Setting (§9.3):** Mexican places, food and names in inherited content become Puerto Rican. Mexico stays only in notes that compare ("Mexico: el camión").
- **Lessons (§8):** 29. Of the 26 `en-es` lessons, 25 are inherited (most need only small localisation overrides) and `caribbean` is dropped (it was Dominican). 4 new Puerto Rico lessons.
- **Decks (§9):** 32. Of the 29 `en-es` decks, 28 are inherited (about 70 cards need a new target or note) and "Caribbean and Dominican Spanish" is dropped. 4 new decks, about 68 cards, in a new group "Puerto Rico".
- **Standing rule (§7):** unchanged: agreement. Gender and number; the verb ending matches the subject.

## 2. Variant, register and voice

### 2.1 What Puerto Rican Spanish is, for this course

- [tertiary] Puerto Rican Spanish has the Caribbean traits: a syllable-final /s/ "debuccalized to [h]" or "eliminated altogether" ([las rosas] → [laɦ ˈrosah]); a syllable-final *r* "often changed to an /l/" (*perdón* → "peldón"); a dropped intervocalic *d* ("hablado > hablao, vendido > vendío, dedo > deo"); a final *n* as velar [ŋ]. "Many rural Puerto Ricans do not roll their tongues on the double 'r' sound": it becomes [χ], "mostly a free variant of /r/" ([Wikipedia, *Puerto Rican Spanish*, IPFS mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Puerto_Rican_Spanish)).
- [practitioner opinion] A learner-facing guide gives the same list in plain terms: "S is often silent or pronounced as H if it's at the end of the word" (*gracias* → "graciah"); "R sometimes turns into L if it's before a consonant" (*cierto* → "cielto"); "In some areas, RR isn't rolled and is instead pronounced like H"; *d* drops between vowels; *para* → *pa* ([FluentU, *Puerto Rican Spanish*](https://www.fluentu.com/blog/spanish/puerto-rican-spanish/)).
- [practitioner opinion] The island's tourism board: "Our accent, vocabulary, and even rhythm vary by region, age, education level, and personality" ([Discover Puerto Rico](https://www.discoverpuertorico.com/article/speaking-boricua-how-language-connects-you-to-heart-puerto-rico)).
- [inference] The course models educated San Juan-area speech, the variety learners meet in the metro area, at the airport, in most media and in diaspora families. Features the sources tie to rural or popular speech, or that are socially marked, are recognition only.

| Feature | Taught for | Where |
|---|---|---|
| Syllable-final *s* as a breath (*graciah*) or dropped | recognition | `pr-sounds`, "Puerto Rican sounds" deck |
| Syllable-final *r* sounding like *l* (*Puelto Rico*, *peldón*) | recognition; never written | `pr-sounds` |
| Velar *rr* (like a Spanish *j*: *carro* "cajo") | recognition, labelled "some speakers" | `pr-sounds` (one section) |
| *-ado* → *-ao* (*cansao*), *-ido* → *-ío* | recognition; standard spelling in writing | `pr-sounds` |
| Final *n* as *ng* | not taught (not salient for a beginner) | — |
| Clipped forms (*pa'*, *pa'l*, *mai*, *pai*) | recognition; *mai/pai* as cards, with notes | `pr-sounds`, `pr-greetings` |

Whether *r* → *l* is stigmatised in San Juan, and how many educated speakers use the velar *rr*, was not established by any opened page (§12). So both are taught as "you'll hear", never as a model.

### 2.2 Vocabulary rule

1. Where Puerto Ricans have their own everyday word and a learner on the island needs it, the **island word is the card target**, and the base word goes in the note: *la guagua*, note "Elsewhere: el autobús; Mexico: el camión".
2. Where the base word is also the normal Puerto Rican word (*carro, celular, computadora, jugo, apartamento*), the card is inherited unchanged. A columnist's list of Puerto Rico vs Spain words gives *celular* and *computadora* as the Puerto Rican forms [practitioner opinion] ([Paizy, *Primera Hora*](https://www.primerahora.com/opinion/prof-gabriel-paizy/columnas/en-espana-no-lo-dicen-igual/)).
3. Where Puerto Ricans have a word and also use the general one, the general word stays the target and the island word is **added** in a Puerto Rico deck (*el dinero* stays; *los chavos* is added).
4. Slang is taught as slang: its note says who says it to whom ("with friends"). Nothing vulgar becomes a card.
5. Anglicisms are not errors in this course (§4.6). Their notes give the general Spanish word too, so learners can understand other Spanish speakers.

### 2.3 Forms of "you"

- *Tú* is the default, as in `en-es`. [research-backed] A 2020 UPR thesis on service encounters in metropolitan San Juan reports that earlier studies found *tú* to have "un alto porcentaje general de uso", that *usted* peaks "cuando los interlocutores no se conocen", and that in its own data *tú* was the preferred form for asking for and giving service, with speakers' sex and age as significant factors ([Ayala Rodríguez 2020, UPR repository, abstract](https://repositorio.upr.edu/handle/11721/2036); the abstract only, so the sample size was not read).
- *Usted*: elders, a stranger much older than you, officials. In shops and restaurants *tú* is common, and the course accepts either where the prompt does not say who is spoken to [inference from the same abstract].
- *Ustedes* only; no *vosotros* (no change from `en-es`).
- Terms of address heard in dialogues: *mi pana* (buddy), *nene / nena* (boy/girl; also affectionate), *mami / papi* (endearment), *mai / pai* (mom / dad). Notes say these are informal.

### 2.4 Voice of the English text

As `en-es` §2.4, with two changes, as in `en-esdo` §2.4:
- Notes name the other variety: "Elsewhere: …", "Mexico: …", "Spain: …".
- Recognition-only items start their note with "You'll hear:".

## 3. Glossary additions

All `en-es` §3 terms apply. Added:

| Term to use | Do not use | Note |
|---|---|---|
| breath *s* ("the s turns into a breath") | aspiration, debuccalisation | gloss once in `pr-sounds`: "like a soft English h" |
| dropped *s* | elided, deleted | |
| *r* that sounds like *l* | lateralisation, liquid neutralisation | |
| the back *rr* ("some speakers say rr far back, like a Spanish j") | velar, uvular | |
| pronoun before the verb (*¿Qué tú quieres?*) | non-inverted question, SV order | |
| island word / Puerto Rican word | dialect word, slang (as a label for the variety) | "slang" only for slang |
| English loanword, Spanglish | anglicism, barbarism, mistake | §4.6 |
| "You'll hear:" | — | starts every recognition-only note |

## 4. Grammar that differs from the `en-es` course

**4.1 Subject pronouns are used more (*yo quiero, tú sabes*).**
- [research-backed] A quantitative study of Puerto Rican Spanish reports that subjects are expressed 51% of the time ([*Subject ~ Verb word-order in Spanish interrogatives: a quantitative analysis of Puerto Rican Spanish*, CU Scholar, abstract](https://scholar.colorado.edu/concern/articles/pn89d725f); authors and corpus not recorded; full text not read).
- [tertiary] Redundant subject pronouns are listed as a feature of the Dominican Republic, Puerto Rico and coastal Venezuela ([Newcastle, *Caribbean Spanish*](https://www.staff.ncl.ac.uk/i.e.mackenzie/caribbeanr.htm), as cited in `en-esdo.md` §4.1; not re-opened here).
- **Design:** override the base advice in `ser` (§"Drop the pronoun") and `present` (§"You can drop the subject pronoun … Saying yo every time sounds heavy"). In this course both are right, and Puerto Ricans often keep the pronoun (*yo creo, tú sabes*). Do not write a comparison with Mexico or a percentage in lesson text. Typed answers already accept both (`en-es` §7).

**4.2 Pronoun before the verb in questions (*¿Qué tú quieres? ¿Dónde tú vives?*).**
- [research-backed] Same study: in 882 wh-questions, the subject comes before the verb in 14% of all cases, and in 25% of those with an overt subject. The abstract does not split this by subject type.
- [tertiary] For Caribbean Spanish generally, the order is described with pronoun subjects (*¿Qué tú quieres?*), not full nouns ([Newcastle, *Caribbean Spanish*](https://www.staff.ncl.ac.uk/i.e.mackenzie/caribbeanr.htm), as cited in `en-esdo.md` §4.2).
- **Design:**
  - The order is taught in `questions` as a short Puerto Rico section, for recognition and as an accepted answer. Only *tú* or *usted* directly before the verb: *¿Qué tú quieres?, ¿Dónde tú vives?, ¿Cómo usted se llama?*
  - Both orders are always accepted in typed answers. The model answer `a[0]` keeps the standard order in inherited lessons; the new Puerto Rico lessons may use the pronoun-first order in dialogues.
  - The base `questions` tip "**¿Dónde usted vive?** → **¿Dónde vive usted?**" is wrong for this course. Replace it with a different English-speaker mistake (for example, a missing ¿ or a missing accent on *dónde*).
  - Never taught or accepted: a full noun before the verb (*¿Qué Juan quiere?*).

**4.3 *Ustedes* only.** No change.

**4.4 *Tú* vs *usted*.** §2.3. The `greetings` lesson gets one Puerto Rico sentence (tú is used widely, including with shop staff your age; usted for elders and strangers much older than you).

**4.5 *Pa'* for *para*.** Recognition (`pr-sounds`). Typed answers need *para*. Dialogue lines in the four Puerto Rico lessons may write *pa'* only inside a note's "You'll hear:" part, never in a card target or an answer.

**4.6 English loanwords and code-switching.**
- [tertiary] "Many American English words are now found in the Puerto Rican vocabulary"; stateside speakers "borrow English words or phrases in mid-sentence in a phenomenon called code-switching"; English was the main language of instruction in public schools from 1902 to 1948 (Wikipedia mirror, above).
- [practitioner opinion] Common adapted verbs and nouns, with their English sources: *janguear* (hang out), *parquear* (park), *chequear* (check), *textear* (text), *printear* (print), *likear*, *frizar* (freeze), *rufo* (roof); phrases such as *Dame un break*, *Tengo un meeting a las tres*, *Está full*; "Spanish remains the dominant language of everyday life", and "The amount of code-switching varies greatly from person to person" ([Welcome to Puerto Rico, *Spanglish*](https://welcome.topuertorico.org/culture/spanglish.shtml)).
- **Design:**
  - Teach these as normal informal Puerto Rican words, never as mistakes. Each card's note gives the general Spanish word: *parquear*, note "General: estacionar".
  - Code-switching is described in `pr-daily` as a normal bilingual practice in informal talk. Learners are not drilled to produce it.
  - Typed answers: where a prompt asks for "park" in a Puerto Rico lesson, accept *parquear* and *estacionar*. In inherited lessons nothing changes.

**4.7 Present perfect vs preterite.** [unsourced] No page opened compares Puerto Rican and Mexican use. No change; owner check (§13).

## 5. Learners

- Who [inference]: English speakers with Puerto Rican partners, in-laws, friends and coworkers, in Puerto Rico and in the stateside communities (New York, Florida's Orlando area, New Jersey, Pennsylvania, Massachusetts, Connecticut); heritage learners who understand some Spanish; travellers and people moving to the island.
- They need first [inference]:
  1. to **understand** fast island speech (the breath *s*, *r* → *l*, *pa'*);
  2. greetings and talk with family and friends the Puerto Rican way;
  3. daily-life words (the bus, money, the trash can, oranges, jeans, glasses);
  4. food and culture, for family gatherings and the holidays;
  5. everything else from the base course, unchanged in grammar.
- Placement: a learner who finished `en-es` can skip to the four Puerto Rico lessons. There is no progress import yet (DIALECTS-PLAN §2.3 is a proposal).

## 6. Pronunciation aid (`pron`)

### 6.1 Decision

**The `pron` line stays the `en-es` careful respelling. `tools/target/espr/respell.js` is byte-identical to the es generator. Puerto Rican sounds are taught in prose and notes.**
- The voices that read this course are es-US or es-MX device voices, or en-es recordings of identical text (§11). A `pron` line showing *graciah* while the voice says *gracias* would contradict the audio.
- Standard spelling is what learners type (§12), and the careful respelling matches it.
- `en-esdo` §6 makes the same choice until recorded Dominican clips exist ("careful mode").
- Writers never hand-write a `pron`. Generate it with `node tools/target/espr/respell.js "<text>"`. The same string carries the same pron everywhere (validator).

### 6.2 Respellings inside prose and notes

- In `pr-sounds` and in "You'll hear:" notes, show the heard form in plain letters inside quotation marks: *gracias* sounds like "GRAH-syah", *Puerto Rico* like "PWEHL-toh RREE-koh", *cansado* like "kahn-SAH-oh".
- These are **prose**, not the `pron` field, and not generated. Keep them to the patterns in §6.3, and mark each with "You'll hear" or "sounds like".

### 6.3 What `pr-sounds` must teach (all recognition)

| Sound | Example (standard spelling) | Heard as | Source |
|---|---|---|---|
| breath *s* before a consonant or at the end | *¿Cómo estás?* | "KOH-moh ehh-TAH" | [tertiary], [practitioner opinion] (§2.1) |
| dropped *s* (plural shown by the article) | *los amigos* | "loh ah-MEE-goh" | [tertiary] |
| *r* before a consonant or at the end sounding like *l* | *Puerto Rico*, *perdón*, *cierto* | "PWEHL-toh", "pehl-DOHN", "SYEHL-toh" | [tertiary], [practitioner opinion] |
| back *rr* (some speakers, more rural) | *el carro*, *Ramón* | close to a Spanish *j* | [tertiary] ("mostly a free variant") |
| *-ado* → *-ao*, *-ido* → *-ío* | *cansado*, *vendido* | "kahn-SAH-oh", "behn-DEE-oh" | [tertiary] |
| *para* → *pa'*, *madre / padre* → *mai / pai* | *para la casa* | "pah lah KAH-sah" | [tertiary] |

Each section ends by saying: write it the standard way; the app accepts only standard spelling.

## 7. Standing practice rule

Unchanged from `en-es` (`profile.json` `standingRule`, keywords: agree, masculine, feminine, gender, singular, plural noun/adjective/article/ending/form/verb, verb ending, match the subject, *yo/tú/él/ella/usted/nosotros/ellos/ustedes*-form; minOrder 2, minType 2). It matters more here [inference]: when the *s* is a breath, the article and the verb ending carry plural and person (*los amigo* is heard, *los amigos* is written).

The four new lessons must meet it like every other: at least 2 order items and 2 type items per set hinge on agreement, and their `why` uses a keyword. Ways to do that in vocabulary lessons: article and gender of the island noun (*la guagua*, *el zafacón*, *los mahones* are plural), adjective agreement (*Está chévere* → *Las fiestas están chéveres*), the verb ending with *tú* (*¿Tú janguéas…?* is wrong; *¿Tú jangueas?*).

## 8. Lessons (final order)

29 lessons, in `profile.json`. **I** = inherited unchanged, **I+** = inherited with overrides (writer named), **N** = new (`lessons-pr.js`, writer EN-ESPR-1).

| # | id | title | deck | | Changes |
|---|---|---|---|---|---|
| 1 | sounds | Sounds, spelling and stress | Sounds and spelling | I+ (2) | body: one sentence pointing to `pr-sounds` for island pronunciation; the *jugo* note is fine |
| 2 | pr-sounds | Hearing Puerto Rico: s, r and -ao | Puerto Rican sounds | N | §6.3. Recognition. Practice: mc on what a heard form means; order and type in standard spelling, where the heard form is the prompt's clue ("You hear 'loh ah-MEE-goh'. Write it.") with agreement as the standing-rule hook (article + plural noun) |
| 3 | greetings | Greetings: tú and usted | Greetings and courtesy | I+ (2) | §4.4 sentence |
| 4 | pr-greetings | Talking like a boricua: pana, nena, wepa | Boricua greetings and slang | N | *Saludos*, *¿Qué es la que hay?*, *¿Qué hay?*; *mi pana*, *el corillo*; *nene / nena*, *mai / pai*; *boricua*; *¡Wepa!*, *¡Ay bendito!* (sympathy), *¡Acho!*; *chévere*, *brutal*, *nítido*; when not to use them |
| 5 | gender | Gender and number of nouns | People and family | I+ (2) | localise names and places |
| 6 | articles | el / la, un / una | Food and drink | I+ (2) | heaviest food override: tacos, tortillas, quesadillas, tamales → *mofongo* (m), *tostones* (m pl), *pastelillos* (m pl), *arroz con gandules* (m), *alcapurrias* (f pl), *piraguas* (f pl). **Rewrite every article, adjective and `why` by hand** (gender changes) |
| 7 | ser | Subject pronouns and ser | About me | I+ (2) | §4.1: replace "Drop the pronoun" with "Keep it or drop it"; Mexico → Puerto Rico in origin sentences (*Soy de Puerto Rico*, *Soy de Ponce*) |
| 8 | adjectives | Adjectives: agreement and position | Shopping and clothes | I | — |
| 9 | estar | estar: where and how | Around town and directions | I+ (2) | places → San Juan, Ponce, Mayagüez |
| 10 | ser-estar | ser vs estar | Feelings and states | I+ (2) | localise |
| 11 | hay | hay: there is, there are | Home and routine | I+ (2) | one practice item |
| 12 | present | Present tense: -ar, -er, -ir | Work and school | I+ (2) | §4.1 section; localise |
| 13 | questions | Questions and question words | Questions and connectors | I+ (2) | §4.2: new section "In Puerto Rico: ¿Qué tú quieres?" (recognition); replace the tip; accept pronoun-first answers where a `ty` item asks a *tú* question |
| 14 | numbers | Numbers, time and prices | Numbers, time and prices | I+ (2) | pesos → dólares (*cinco dólares*); a box on *pesos* = dollars and *chavos* (§10); 12-hour clock as in base |
| 15 | possessives | Possessives and demonstratives | People and family | I+ (2) | localise |
| 16 | irregular | Irregular present: tener, ir, hacer | Days, dates and weather | I+ (2) | Celsius note: Puerto Rico weather reports use Fahrenheit [unsourced; owner q.] → say "the US uses Fahrenheit; much of Latin America uses Celsius" |
| 17 | stem-change | Stem-changing verbs | Health and emergencies | I+ (2) | *gripa* → *gripe* / *catarro* if used |
| 18 | gustar | gustar: me gusta, me gustan | Likes and free time | I+ (2) | food → Puerto Rican food, music (*la salsa*, *el reguetón*, *la plena*), baseball |
| 19 | reflexive | Reflexive verbs and daily routine | Home and routine | I | — |
| 20 | prepositions | a, de, en, con, por, para | Travel and transport | I+ (2) | *el autobús* → *la guagua* where it is the island bus (gender) |
| 21 | muy-mucho | muy and mucho | Traps for English speakers | I+ (3) | localise |
| 22 | connectors | y, o, pero, porque | Questions and connectors | I+ (3) | localise (8 body hits) |
| 23 | directions | Directions and places in town | Around town and directions | I+ (3) | localise; *la parada de guagua* |
| 24 | pr-daily | Everyday island words: guagua, chavos, zafacón | Everyday Puerto Rico | N | *la guagua*, *el carro*, *pedir pon*; *los chavos*, *los pesos* (dollars), *una peseta* (25¢); *el zafacón*; *la china / el jugo de china*; *el guineo*; *los mahones*, *los espejuelos*; *el cel*; English loanwords (*parquear, janguear, chequear, textear, Dame un break*) with the general word; code-switching as a normal thing |
| 25 | ir-a | ir a + infinitive: plans | Travel and transport | I+ (3) | Cancún → Vieques / Culebra / Rincón; *la guagua* |
| 26 | lo-la | Object pronouns: lo, la, los, las | Shopping and clothes | I | — |
| 27 | preterite | The preterite: what you did | Likes and free time | I+ (3) | localise (tacos, Mexico trips) |
| 28 | se | Impersonal se: se habla español | Work and school | I+ (3) | *¿Dónde se compran tortillas?* → island food; gender and number must still agree |
| 29 | pr-culture | Food, music and fiestas | Food, music and places | N | food (*mofongo, arroz con gandules, tostones, pasteles, alcapurrias, coquito, tembleque, piraguas*); music (*plena, bomba, salsa, reguetón*); holidays (*la Navidad, las parrandas, el Día de Reyes* on January 6); places (*El Yunque, el Viejo San Juan, Ponce, Mayagüez, Vieques*); *el coquí*; the diaspora (*Nueva York, Orlando*). Grammar hook: *gustar* and agreement review |

Writers: EN-ESPR-2 owns the I+ (2) rows (`lessons-1.js`, `lessons-2.js`), EN-ESPR-3 the I+ (3) rows (`lessons-3.js`).

**Rules for overrides in inherited lessons:**
- Change only what this profile lists, plus Mexican setting found by `node tools/target/espr/scan.js`. Every other byte stays as in en-es.
- Never string-substitute. *el taco → el mofongo* keeps gender, but *las tortillas → los tostones* does not: every article, adjective, distractor, tile and `why` around a replaced noun must be re-checked by hand.
- Keep each practice set's item count, types, order and difficulty. A replaced item keeps the same grammar point.
- Keep the standing-rule hits: after editing, the `[order/type hits]` line of `validate.js` must not drop below 2/2 for the lesson.

## 9. Decks

### 9.1 Inherited decks (writer EN-ESPR-B; files `decks-a/b/c/f/t1/t2.js`, `extra-a/b/c/f/t1/t2.js`)

`node tools/target/espr/scan.js` lists every row that names Mexico, Mexican food or places, pesos, the bus, oranges, glasses or jeans: 73 cards at stage 1 (many need only a note change), 14 dialogues, 19 examples and 2 patterns. The map:

| Deck | Change |
|---|---|
| Sounds and spelling | *el jugo* note: keep. Oaxaca-type sound examples → a Puerto Rican place name if it shows the same letter (*Mayagüez* for ü) |
| People and family | *Mi abuela es de Oaxaca.* → *Mi abuela es de Mayagüez.* (new note: ü says w). *mis papás* note: "Common in Puerto Rico too" [unsourced; owner q.] or neutral |
| Numbers, time and prices | *cien pesos* → *cien dólares*; *Son doscientos pesos.* → *Son veinte dólares.*; *¿Cuánto cuestan los tacos?* → *¿Cuánto cuestan los pastelillos?* (agreement kept); note on *pesos* = dollars |
| Days, dates and weather | *Hace veinte grados.* → *Hace ochenta grados.* (note: Fahrenheit, as in the US) |
| Food and drink | *un taco de pollo* → *un pastelillo de carne*; *unos tamales* → *unos pasteles* (note: Puerto Rican pasteles are wrapped in plantain leaf, a holiday dish); *las tortillas de maíz* → *las alcapurrias* (keeps feminine plural); *Para mí, una quesadilla.* → *Para mí, una empanadilla.* (keeps feminine singular); *el agua de jamaica* → *el jugo de china* (note: china = orange); *los frijoles* → *las habichuelas* (gender changes!). Do NOT use *el mofongo*, *los tostones*, *el arroz con gandules*, *el coquito*: they are cards in writer A's «Food, music and places». *¿Me da un café, por favor?* note: drop "in Mexico" |
| Shopping and clothes | *la chaqueta gris* note: drop the Mexico remark. Add nothing here (*mahones*, *espejuelos* live in Everyday Puerto Rico) |
| Home and routine | notes: drop Mexico-only remarks (*refri* is also heard in Puerto Rico [unsourced]; drop it) |
| Around town and directions | *la parada de autobús* → *la parada de guagua* |
| Travel and transport | *Tomo el autobús.* → *Tomo la guagua.*; *Voy a viajar a Cancún.* → *Voy a viajar a Vieques.*; *coger* note: "In Puerto Rico coger is ordinary (coger la guagua is heard) but tomar is safe everywhere" [unsourced: owner q.; if unconfirmed, write only "tomar is safe everywhere"] |
| Health and emergencies | *Tengo gripa.* → *Tengo gripe.* (general; note "Mexico and Colombia: gripa") [unsourced which word Puerto Ricans prefer: *catarro* for a cold is common knowledge in the Caribbean; owner q.] |
| Work and school | *Mi jefa es de Puebla.* → *Mi jefa es de Ponce.* |
| Likes and free time | *Me gustan los tacos.* → *Me gustan los tostones.* |
| Traps for English speakers | *Actualmente vivo en Puebla.* → *Actualmente vivo en Bayamón.* |
| Compliments, Flirting | Mexico-only words (*chula*, *Me la pasé muy bien contigo* noted "Mexico") → neutral or Puerto Rican equivalents a source supports; otherwise make the note neutral |
| Top nouns, verbs, adjectives, adverbs, prepositions, words | note-only changes (drop "Mexico:" remarks that do not help here; *Voy a México* → *Voy a Puerto Rico*; *Mexico contra Brasil* → *Puerto Rico contra Cuba*); *ahorita* note: "Meaning varies by country; in the Caribbean it often means in a little while" [unsourced for Puerto Rico; owner q.] |
| Top interjections | replace the Mexico-only six (*¡Órale!, ¡Ándale!, ¡Híjole!, ¡Aguas!, ¡Sale!, ¡Guácala!*) with *¡Wepa!*, *¡Ay bendito!*, *¡Acho!*, *¡Dale!* (§10) and two general ones that are not already cards anywhere (e.g. *¡Qué asco!* for *¡Guácala!*; *¡Cuidado!* and *¡Ojo!* are already in the deck) |
| Top words | *¿Cómo?* note: drop *¿Mande?*; *un taco* example → *un pastelillo* |

A re-keyed card (new target) must have its DIALOG and EXAMPLES rows re-keyed in the same writer's extra file. Validator: a key that is not a card target fails.

### 9.2 New decks (group "Puerto Rico"; writer EN-ESPR-A; `decks-pr.js`, `extra-pr.js`)

16–18 cards each. Prons generated (careful mode). The first five rows of each deck are the samples. Writers include them and may adjust the notes.

Every target below was checked against the inherited decks (none is already a card). Writers re-check their additions with the duplicate script in their brief.

**Puerto Rican sounds** (recognition: the target is standard spelling; the note says how it is heard)

| target | pron | meaning | note |
|---|---|---|---|
| ¿Cómo están ustedes? | KOH-moh ehs-TAHN oos-TEH-dehs | How are you all? | You'll hear: "KOH-moh ehh-TAHN oo-TEH-deh". The s turns into a breath or drops. |
| Puerto Rico | PWEHR-toh RREE-koh | Puerto Rico | You'll hear: "PWEHL-toh RREE-koh". r before a consonant can sound like l. |
| Estamos cansados. | ehs-TAH-mohs kahn-SAH-dohs | We're tired. | You'll hear: "ehh-TAH-moh kahn-SAH-oh". Write the s and the d. |
| los amigos | lohs ah-MEE-gohs | the friends | You'll hear: "loh ah-MEE-goh". The article still shows the plural. |
| la carretera | lah kah-rreh-TEH-rah | the road; the highway | Some speakers say rr far back, close to a Spanish j. |

**Boricua greetings and slang** (not *¡Wepa!*, *¡Ay bendito!*, *¡Acho!*, *¡Dale!*: those are in Top interjections, §9.1; the `pr-greetings` lesson still teaches them)

| target | pron | meaning | note |
|---|---|---|---|
| ¿Qué es la que hay? | keh ehs lah keh ai | What's up? | With friends. |
| mi pana | mee PAH-nah | my buddy | From English "partner". Informal, for a man or a woman. |
| el corillo | ehl koh-REE-yoh | the crew; my group of friends | Informal. |
| boricua | boh-REE-kwah | Puerto Rican | From Borikén, the Taíno name of the island. Used with pride. |
| Está chévere. | ehs-TAH CHEH-beh-reh | It's cool. | Also brutal, nítido. |

**Everyday Puerto Rico**

| target | pron | meaning | note |
|---|---|---|---|
| la guagua | lah GWAH-gwah | the bus (in Puerto Rico) | Elsewhere: el autobús. Feminine: la guagua. |
| los chavos | lohs CHAH-bohs | money (informal) | un chavo = a cent. Formal: el dinero. |
| el zafacón | ehl sah-fah-KOHN | the trash can | Elsewhere: el bote de basura, la papelera. |
| la china | lah CHEE-nah | orange (the fruit) | Elsewhere: la naranja. Orange juice: el jugo de china. |
| los espejuelos | lohs ehs-peh-HWEH-lohs | glasses (for your eyes) | Elsewhere: los lentes, las gafas. Plural. |

Further cards to draw from (§10; not *el jugo de china*, which is writer B's «Food and drink» card): *los mahones*, *el guineo*, *el cel*, *pedir pon*, *parquear*, *janguear*, *chequear*, *textear*, *Dame un break.*, *una peseta*, *cinco pesos*, *bregar*, *el revolú*, *la parcha*.

**Food, music and places**

| target | pron | meaning | note |
|---|---|---|---|
| el mofongo | ehl moh-FOHN-goh | mofongo | Mashed fried green plantain with garlic. |
| el arroz con gandules | ehl ah-RROHS kohn gahn-DOO-lehs | rice with pigeon peas | The holiday rice. gandul is from an African language. |
| los tostones | lohs tohs-TOH-nehs | fried green plantain slices | Masculine plural: los tostones. |
| el coquito | ehl koh-KEE-toh | coquito | Christmas coconut drink. |
| el coquí | ehl koh-KEE | the coquí frog | Tiny tree frog named for its call; a symbol of the island. |

Further (not *los pasteles*, *las alcapurrias*, *una empanadilla*, *un pastelillo*, *las habichuelas*, *el jugo de china*: those replace base cards in «Food and drink», writer B): *el tembleque*, *la piragua*, *la plena*, *la bomba*, *la salsa*, *el reguetón*, *la parranda*, *el Día de Reyes*, *El Yunque*, *el Viejo San Juan*, *Ponce*, *Mayagüez*, *Vieques*.

**Extras:** at least 3 dialogues and 2 examples per new deck, and 4 patterns. Dialogues may use the pronoun-first question (*¿Qué tú quieres comer?*).

### 9.3 Localisation (inherited and new content)

- **Places:** San Juan, el Viejo San Juan, Santurce, Río Piedras, Bayamón, Carolina, Caguas, Ponce, Mayagüez, Arecibo, Aguadilla, Fajardo, Rincón, Vieques, Culebra, El Yunque; the diaspora: Nueva York, el Bronx, Orlando, Filadelfia, Chicago.
- **Money:** dollars. Write *dólares* in model answers and *$* in English prompts. *Pesos* and *chavos* are taught in `numbers` and `pr-daily` as the colloquial words (§10).
- **Names:** Puerto Rican given names in dialogues (José, Luis, Carmen, Gabriel, Yamilet, Xiomara, Kevin, Coral, Edwin, Nilda). Do not reuse famous people's names as characters.
- **Food:** see §9.2. **Sports:** baseball (*la pelota* [unsourced as the island word; owner q.]), basketball (*el baloncesto*), volleyball.
- **Neutral on politics:** never call Puerto Rico a country, state, colony or territory in content. Write *la isla*, *Puerto Rico*, *los Estados Unidos* (for the mainland in travel sentences: *Voy a Nueva York*). No flags or status debates in dialogues.

**Forbidden in course text** (outside card notes that compare varieties; checked by `scan.js`): tacos, tortillas, quesadillas, tamales, taquería, agua de jamaica, Cancún, Puebla, Oaxaca, Monterrey, Guadalajara, camión (bus), órale, híjole, ándale, aguas (warning), sale (okay), cuate, gripa, mande, Lupita, Dominican-only words from the dropped deck (*colmado, motoconcho, yipeta, chinola, aposento, un chin, mangú*).

## 10. Vocabulary: Puerto Rican words for the new decks and lessons

Every row has a source, or it is marked [unsourced] and is on the review list. "PH" = Paizy, *Primera Hora* (a list of Puerto Rico vs Spain words). "TPR" = Welcome to Puerto Rico phrases page. "TPR-S" = its Spanglish page. "W" = Wikipedia mirror. "WS" = Wikiwand, *List of Puerto Rican slang*. "SL" = Speaking Latino, US currency. "FU" = FluentU. "DPR" = Discover Puerto Rico.

| word | meaning | source | use |
|---|---|---|---|
| la guagua | bus | PH, FU ("a slang term for the many buses that run through San Juan"), DPR | card target (replaces el autobús where the island bus is meant) |
| el jugo de china / la china | orange juice / orange | PH, TPR, DPR | card target |
| los mahones | jeans | PH | card |
| los espejuelos | glasses | PH | card |
| el guineo | banana | PH | card (note: plátano = plantain) |
| los tenis | sneakers | PH | optional card |
| pedir pon | to ask for a ride | PH | card |
| el zafacón | trash can | TPR, DPR, TPR-S | card target |
| los chavos | money | TPR, FU, WS ("in place of dinero"), SL ("the most common term") | card |
| un chavo / un chavito | a cent | SL | note |
| un peso / cinco pesos | a dollar / five dollars (informal) | SL ("like English bucks") | `numbers`, `pr-daily` |
| una peseta | a quarter (25¢) | SL | note or card |
| mi pana | buddy | W, WS, TPR | card |
| el corillo | crew, group of friends | WS, TPR | card |
| boricua | Puerto Rican | WS, TPR | card |
| nene / nena | boy / girl; affectionate | WS, TPR | card |
| mai / pai | mom / dad (shortened) | W | card with "informal" note |
| ¡Wepa! | celebration, excitement | WS, TPR | Top interjections |
| ¡Ay bendito! | sympathy ("aww, poor thing"), also frustration | WS, TPR | Top interjections |
| ¡Acho! | dude / man / wow | TPR | Top interjections |
| ¿Qué es la que hay? | what's up? | TPR | card |
| Está chévere. | it's cool | TPR | card |
| ¡Brutal! | awesome | TPR | card |
| Está nítido. | it's great | TPR | card |
| el revolú | mess, commotion | WS, TPR | card |
| al garete | out of control | WS, TPR | optional card |
| el bochinche | gossip | WS | optional card |
| bregar | to deal with, work at | WS | card |
| janguear | to hang out | WS, TPR-S | card |
| parquear | to park | TPR-S | card (note: general estacionar) |
| chequear, textear, printear | check, text, print | TPR-S | `pr-daily` body; one card at most |
| Dame un break. | Give me a moment. | TPR-S | card |
| el rufo | roof | TPR-S | `pr-daily` body only |
| ¡Dale! | okay, go ahead | [unsourced for Puerto Rico; common Caribbean usage] | Top interjections, owner q. |
| la parcha | passion fruit | [unsourced] | owner q. before it becomes a card |
| el gandul, el fufú, la malanga | pigeon pea, mashed plantain, taro root | W (African loanwords) | food deck |
| hamaca, huracán, tabaco; Arecibo, Bayamón, Mayagüez, Vieques | Taíno words and place names | W | `pr-culture` body |
| el coquí, el mofongo, los tostones, los pasteles, el coquito, la piragua, el tembleque, las alcapurrias | food and symbols | [common knowledge; no page opened] | food deck. Notes describe the dish factually; no claim about origin beyond the deck notes above |
| la plena, la bomba, la salsa, el reguetón; las parrandas; el Día de Reyes (January 6) | music, Christmas carolling, Three Kings Day | [common knowledge; no page opened] | `pr-culture` |

**Not Puerto Rican, do not teach as such:** *ahorita* = "right now" (Mexican sense), *colmado*, *motoconcho*, *yipeta*, *chinola*, *mangú*, *un chin* (Dominican), *chamba*, *chido*, *padre* (cool), *cuate*, *güey* (Mexican), *pata* (Peruvian buddy).

## 11. Voices

- **Device voice:** `es-PR` voices are rare on phones. `voiceAlso` makes the app prefer `es-US`, then `es-MX`, over es-ES or another European voice (`pickVoice`, decisions §2).
- **Recorded clips:** `audioFrom: "es"`: the course plays en-es recordings for identical text only. That covers many inherited cards and example rows (standard-spelling sentences shared with en-es). Every changed or new row uses the device voice.
- **Later:** Puerto Rican recordings (`audio/espr/f`, `audio/espr/m`). Azure lists `es-PR` neural voices (`es-PR-KarinaNeural`, `es-PR-VictorNeural`) [unsourced here: confirm with the voices list before use]. When those exist, drop `audioFrom` or make `clipDir` try both folders.

## 12. Typing and script

- Standard spelling only. *Cansao*, *pa'*, *Puelto*, *graciah* are never accepted.
- *¿Qué tú quieres?* and *¿Qué quieres?* are both always accepted where the prompt asks a *tú* question.
- Anglicisms: in Puerto Rico lessons, *parquear* and *estacionar* are both accepted for "park", *janguear* and *pasar el rato* (or *salir*) for "hang out". In inherited lessons nothing changes.
- *Usted* forms are accepted wherever the prompt does not say who is spoken to and the base already accepts them.
- Accent bar, "almost" for a missing accent, `!strict` when the accent is the point: as in `en-es`.

## 13. Review plan: the owner's first checks (a Puerto Rican speaker)

1. Is *¿Qué tú quieres?* natural for educated San Juan speakers in informal talk, and is *¿Cómo usted se llama?* also heard?
2. *r* → *l* and the back *rr*: are they socially marked? Is "you'll hear, don't copy" the right advice?
3. *Pesos* for dollars and *chavos* for money: current and common? Is *una peseta* (25¢) still said?
4. *¡Dale!* and *¡Acho!*: normal in Puerto Rico?
5. *Coger la guagua*: ordinary in Puerto Rico, or avoided?
6. *Gripe* or *catarro*, for flu and cold?
7. *La parcha* for passion fruit; *la pelota* for baseball.
8. *Ahorita*: what does it mean in Puerto Rico?
9. Weather in Fahrenheit in everyday talk?
10. *mis papás* vs *mis padres*: which is everyday on the island?
11. The four new lessons' tone: slang taught with the right warnings?
12. *Mai / pai*: fine to teach as cards, or recognition only?

## 14. Gaps and unverified claims

- No page opened gives rates of *s* weakening, *r* → *l* or the back *rr* among educated San Juan speakers, or says how stigmatised each is.
- The tú/usted evidence is one thesis abstract (service encounters, San Juan metro).
- The question-order rates come from one abstract. Its corpus details and the split by subject type were not read.
- Food, music and holiday words are common knowledge; no page was opened for them. Dish descriptions stay factual and short.
- The Azure es-PR voice names are not verified here.

## Sources

- [Wikipedia, *Puerto Rican Spanish* (IPFS mirror)](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Puerto_Rican_Spanish)
- [Wikiwand, *List of Puerto Rican slang words and phrases*](https://www.wikiwand.com/en/articles/List_of_Puerto_Rican_slang_words_and_phrases)
- [Welcome to Puerto Rico, *Puerto Rican Words & Expressions*](https://www.topuertorico.org/culture/puerto-rican-phrases.shtml)
- [Welcome to Puerto Rico, *Spanglish*](https://welcome.topuertorico.org/culture/spanglish.shtml)
- [Paizy, G., *En España no lo dicen igual*, Primera Hora](https://www.primerahora.com/opinion/prof-gabriel-paizy/columnas/en-espana-no-lo-dicen-igual/)
- [Speaking Latino, *Puerto Rican Spanish words for US currency*](https://www.speakinglatino.com/puerto-rican-spanish-words-for-us-currency/)
- [FluentU, *Puerto Rican Spanish*](https://www.fluentu.com/blog/spanish/puerto-rican-spanish/)
- [Discover Puerto Rico, *Speaking Boricua*](https://www.discoverpuertorico.com/article/speaking-boricua-how-language-connects-you-to-heart-puerto-rico)
- [*Subject ~ Verb word-order in Spanish interrogatives: a quantitative analysis of Puerto Rican Spanish*, CU Scholar, abstract](https://scholar.colorado.edu/concern/articles/pn89d725f)
- [Ayala Rodríguez, G. (2020), *Variación pragmática en las formas pronominales de tratamiento en encuentros de servicios del área metropolitana de San Juan*, UPR repository](https://repositorio.upr.edu/handle/11721/2036)
- [Newcastle University, *Caribbean Spanish*](https://www.staff.ncl.ac.uk/i.e.mackenzie/caribbeanr.htm) (as cited in `en-esdo.md`)
