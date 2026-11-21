# English speakers learning Spanish: course profile

Course `en-es`: Spanish for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Spanish. Machine-readable twin: `tools/target/es/profile.json`, which was generated from the same data as §6, §8 and §9, so the two files agree.

**Evidence tags.**
- **[research-backed]**: an empirical study that was opened for this profile. The study is named, and its sample is given where it is small. **(second-hand)** means the finding was read in another paper's literature review, not in the original.
- **[curriculum convention]**: what textbooks and courses do.
- **[practitioner opinion]**: a teacher's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning from tagged items.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant:** Latin American Spanish, Mexican-neutral, with an `es-MX` voice, *ustedes* as the only plural "you" and no *vosotros*. Spain forms are taught for recognition only. One regional deck and one lesson cover Caribbean and Dominican Spanish, labelled as regional.
- **Register:** *tú* first, for friends and peers. *Usted* is introduced in lesson 2 and practised wherever a stranger, a shop assistant or an older person speaks.
- **Biggest English-speaker traps, ranked (§4):** gender and number agreement; *ser* vs *estar*; verb endings that must match the subject; object pronouns and *gustar*; *tener* expressions and other calques; false friends; *muy* vs *mucho*; *por* vs *para*; then articles, personal *a*, reflexives, word order, accent marks, and pronunciation (tap and trill, soft *d*, vowels).
- **Standing practice rule:** every practice set keeps re-testing **agreement**. That means gender and number on articles, adjectives and nouns, and person and number on the verb. A `why` line names the point with fixed keywords (§7).
- **Pronunciation aid:** a fixed, script-generated English-letter respelling (`OH-lah`, `GRAH-syahs`). Every Spanish vowel always has one spelling (ah, eh, ee, oh, oo), and the stressed syllable is in CAPITALS. It is required on every card and example row. It is generated, not hand-written, so it is identical everywhere, and `pronPattern` rejects raw Spanish spelling. Lesson 1 teaches the spelling rules, so the aid can be hidden early.
- **Lessons:** 26. All 23 roadmap items are kept. *Pretérito perfecto* becomes the **preterite** (Latin American usage), and adjectives move up to right after *ser*. Three lessons are added: `stem-change`, `lo-la` (object pronouns) and `caribbean`.
- **Decks:** 18 in 5 groups, about 16 to 18 cards each, including "Traps for English speakers" and "Caribbean and Dominican Spanish".
- **Typing:** a missing accent is "almost". Items that hinge on an accent are strict (*tú/tu, él/el, sí/si, está/esta*, preterite *habló/hablo*). *ñ* is a different letter, never an accent variant.

## 2. Variant, register and voice

### 2.1 Variant: Latin American, Mexican-neutral

The lead has set this. These are the reasons that support it:
- [research-backed] About 60% of US Hispanics are of Mexican origin: 37.2 million in 2021, out of a Hispanic population of 63.7 million in 2022 ([Pew Research Center 2023](https://www.pewresearch.org/short-reads/2023/08/16/11-facts-about-hispanic-origin-groups-in-the-us/%20); origin figures are from the 2021 ACS). The Spanish a US learner hears at work, in the neighbourhood and in media is mostly Mexican and Central American.
- [research-backed] Spanish was 62% of non-English home languages in the US in 2019 ([US Census Bureau, 2022 story on ACS 2019](https://census.gov/library/stories/2022/12/languages-we-speak-in-united-states.html)). The Census page gives the share, not a head count.
- [inference] The probe pack already uses `ttsLang:"es-MX"`. Spelling, vocabulary and the `pron` aid must match what the learner hears.

**Vocabulary rule.** Use the word that most of Latin America understands. When none exists, use the Mexican form, and put the other forms in the card `note`:

| Use | Note on the card | Avoid as the taught form |
|---|---|---|
| carro | Spain: coche | coche, auto |
| celular | Spain: móvil | móvil |
| computadora | Spain: ordenador | ordenador |
| jugo | Spain: zumo | zumo |
| autobús | Mexico: camión; Caribbean: guagua | camión (it also means truck) |
| boleto | Spain: billete | billete |
| apartamento | Mexico also: departamento; Spain: piso | piso |
| papa | Spain: patata | patata |
| frijoles | Caribbean: habichuelas; Spain: judías | judías |
| manejar | Spain: conducir | conducir |
| tomar (el autobús) | never *coger*, which is vulgar in Mexico and much of Latin America | coger |
| ¿Mande? / ¿Cómo? | *¿Mande?* is Mexican only; teach *¿Cómo?* and give *mande* as a note | ¿Qué? alone (curt) |

**Pronunciation follows the voice:** *seseo* (*c* before e/i, and *z*, sound like *s*), and *yeísmo* (*ll* = *y*). §6 encodes both.

### 2.2 Roadmap items changed by this variant

The roadmap (`packs/roadmaps.js`, entry `es`) is labelled "Spanish of Spain". These items change:

1. **`es-perfecto` "Pretérito perfecto: what you've done" becomes `preterite` "The preterite: what you did".**
   - [research-backed] For completed recent events, colloquial Mexican Spanish prefers the simple past: *Hoy lo vi*, where Peninsular Spanish says *Hoy lo he visto*. For experiences, the American varieties (except the Andean ones) prefer the simple form, often with *ya*: *Ya fui a Europa*. All varieties use the compound form for situations that continue into the present (*He trabajado mucho últimamente*) ([Akerberg 2006](https://ela.enallt.unam.mx/index.php/ela/article/download/599/651), a review in *Estudios de Lingüística Aplicada* 44).
   - Decision: A1 teaches the preterite: regular *-ar / -er / -ir*, plus *fui, hice, tuve*. The lesson's last screen explains *he comido* for recognition, as "what you will hear in Spain for today's events, and in Latin America for 'lately' or 'so far'".
2. **No *vosotros* anywhere** in tables, drills or answers. Each conjugation table has five rows (yo, tú, él / ella / usted, nosotros, ellos / ellas / ustedes). One footnote per table, in the first table only (`present`), reads: "In Spain you will also hear *vosotros habláis* for 'you all'."
3. **Prices** are in pesos (Mexico scenes) or dollars (US scenes), never euros.
4. **Impersonal *se*** stays as is; the construction is the same everywhere.

**What a learner will hear in Spain** (one note in `greetings`, one in `present`, one in `preterite`, never drilled):
- *vosotros* forms;
- *he comido* for today's events;
- *z* and *c* before e/i pronounced as English *th* (*distinción*), and a harsher *j*;
- *coche, móvil, ordenador, zumo, vale*.

### 2.3 Forms of "you": who is addressed, and when

**Taught first: *tú*.** It is the form of every dialogue between friends, classmates and family, and the form the learner says most in the first lessons.

**Usted:**
- Introduced in `greetings` as the form for strangers, older people, customers and staff (*¿Cómo está usted?*).
- From `present` onward it is drilled as "takes the *él / ella* form". That makes it an agreement point under the standing rule.
- `stem-change` (*¿Puede…?*) and `directions` (*Siga derecho, gire a la izquierda*) use it actively, because that is what a stranger says to the learner and what the learner says to a stranger.
- [inference] A US adult's first real conversations (a shop, a restaurant, a coworker's parent) often call for *usted*. So it cannot wait until A2, but *tú* still carries the first conjugations.

**Ustedes:** the only plural "you", for friends and strangers alike, from `present` onward.

**How examples address people.** Dialogues follow the relationship: friends and family use *tú*; a customer and server, a passenger and driver, or a stranger asked for directions use *usted*. Card notes say which one a phrase uses when it matters ("usted form, to a shop assistant"). Prompts in English never say "you (formal)" unless the item tests *usted*; then the prompt says "(to a stranger)" or "(usted)".

**Dominican note** (`caribbean` lesson). Dominican speech uses *tú* widely and keeps *usted* for elders and formal situations [practitioner opinion; not in the sources opened]. It often puts the subject pronoun before the verb in questions (*¿Cómo tú estás?*) [tertiary source, §4.12]. This is taught for listening, labelled as regional, and never accepted in a standard typed answer unless the item belongs to the `caribbean` lesson.

### 2.4 Voice of the English text

- Write plain, friendly US English with US spelling (*color, favorite*). Keep it short: a `why` is one sentence.
- Spanish inside English text: in lesson bodies, put Spanish in `<b>` (as the probe does). In plain-text fields (`why`, `hint`, card notes), write Spanish words bare, since they cannot carry markup. Never add English plural or possessive endings to Spanish words: write "the verb *tener*", not "tener's forms".
- Sample voice lines:
  1. "Spanish nouns have gender. *Casa* is feminine, so it's *la casa blanca*, not *la casa blanco*."
  2. "Use *usted* with someone you don't know. The verb takes the same form as *él*: *¿Usted habla inglés?*"
  3. "Nice work! Review these cards tomorrow so they stick."

## 3. Glossary

The terms below are [curriculum convention]: the names in common use in US first-year Spanish textbooks. For example, an open first-year text uses "stem", "stem-changing verbs" and "boot verbs" ([Huebener, *Libro Libre: Beginning Spanish*, ch. 4](https://human.libretexts.org/Bookshelves/Languages/Spanish/First-year_Spanish_Bookshelf/Libro_Libre_-_Beginning_Spanish_(Huebener)/04%3A_Capitulo_4/4.08%3A_Stem-Changing_Verbs)). Use each term exactly and always the same way. Where a Spanish name is the usual one, keep it in Spanish and do not translate it.

| Term to use | Do not use | Note |
|---|---|---|
| noun, verb, adjective, adverb, preposition | | |
| subject | | "the subject" is who does the verb |
| subject pronoun (yo, tú, él…) | personal pronoun | |
| gender: masculine / feminine | male / female (for words) | |
| number: singular / plural | | |
| agreement; "X agrees with Y" | concord, matching | **standing-rule keyword** (§7) |
| definite article (el, la, los, las) | | first mention; then "article" |
| indefinite article (un, una, unos, unas) | | |
| infinitive (hablar) | base form, dictionary form | |
| stem (habl-) | root | |
| ending (-o, -as, -amos) | suffix | write "verb ending" when the point is person (§7) |
| conjugate / conjugation | | |
| the yo form, the tú form, the él form, the usted form, the nosotros form, the ellos form | 1st person singular etc. | person names stay Spanish; **standing-rule keywords** |
| regular verb / irregular verb | | |
| -ar verb, -er verb, -ir verb | first conjugation | |
| stem-changing verb (e → ie, o → ue, e → i) | boot verb, shoe verb, radical-changing | mention "boot verb" once, in `stem-change` |
| yo-irregular verb (tengo, hago, salgo) | go-verb | |
| reflexive verb; reflexive pronoun (me, te, se, nos) | pronominal verb | |
| direct object pronoun (lo, la, los, las) | accusative | |
| indirect object pronoun (me, te, le, nos, les) | dative | first used in `gustar` |
| possessive (mi, tu, su) | possessive adjective | |
| demonstrative (este, ese) | | |
| present tense | simple present (for Spanish) | |
| preterite (hablé, comí) | past simple, pretérito indefinido | |
| present perfect (he comido) | pretérito perfecto | recognition only (§2.2) |
| ir a + infinitive | near future, periphrastic future | |
| ser, estar, hay, gustar | "to be (permanent)", "to be (temporary)" | never define ser/estar as permanent vs temporary (§4.2) |
| personal a | | |
| impersonal se | passive se | |
| question word (qué, dónde…) | interrogative | |
| accent mark (á) | tilde, stress mark | *tilde* is ambiguous in English; "the ñ" for the letter |
| stressed syllable | tonic syllable | |
| vowel / consonant; tap (r) / trill (rr) | flap, rolled r | "rolled r" may appear once as a gloss for trill |
| false friend | false cognate | "false cognate" once as a gloss |
| cognate | | |
| calque ("word-for-word copy from English") | | gloss it at first use |
| regional | dialect, slang | "Regional (Dominican):" starts every such note |
| usted command (Siga, Gire) | formal imperative | recognition at A1 |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items with fetched learner data come first.
2. Then items that recur in nearly every sentence and can be checked in typed practice.
3. Then lexical and lesson-local traps.

Learner-corpus counts for English-L1 learners of Spanish were thin in what could be opened (§11). Several key studies were reached only through other papers' reviews; they are tagged **(second-hand)**.

1. **Gender and number agreement** (articles, adjectives, demonstratives, possessive plurals)
   - Wrong → right: *la casa blanco* → *la casa blanca*; *los zapato negro* → *los zapatos negros*; *la problema* → *el problema*; *mucho gracias* → *muchas gracias*.
   - Why: English marks gender only on *he/she* and number only on the noun. Spanish marks both on every word in the noun phrase, and English speakers default to the masculine form.
   - [research-backed, second-hand] L2 learners were more accurate with masculine than feminine nouns, and made more errors with nouns whose ending does not show their gender (*-e*, consonant, *el problema*, *la mano*) (Montrul et al. 2008, as reviewed in [Hur, López Otero & Sánchez 2020](https://mdpi.com/2226-471X/5/4/48)). In the same review, highly proficient learners made gender-*assignment* errors in production more often than agreement errors (Grüter et al. 2012).
   - [research-backed] 47 instructed English-speaking learners "cannot grammaticalize" gender completely; the author attributes this to L1 transfer and processing load ([Gamboa Rengifo 2012](https://docs.lib.purdue.edu/dissertations/AAI1530213), MA thesis, abstract only).
   - [research-backed] A longitudinal study of 21 English-speaking university learners (11,833 tokens, before, during and after study abroad) found that the type of modifier (determiner vs adjective) significantly conditions feminine use ([Gudmestad, Edmonds & Metzger, LSRL 49 abstract](https://www.linguistics.uga.edu/sites/default/files/LSRL49-abstracts/GUDMESTAD_EDMONDS_METZGER_17.pdf); no rates in the abstract).
   - Design consequence: this is the standing rule (§7). Cards always show nouns with their article (*la llave*, never *llave*). The non-matching endings (*el día, el mapa, el problema, la mano, la foto*) get explicit cards and items.

2. ***Ser* vs *estar***
   - Wrong → right: *Soy cansado* → *Estoy cansado*; *¿Dónde es el baño?* → *¿Dónde está el baño?*; *Ella es en Lima* → *Ella está en Lima*. And the reverse trap: *La fiesta está en mi casa* → *La fiesta es en mi casa* (events "take place" with *ser*).
   - [research-backed] VanPatten describes five stages for English-speaking learners: no copula, then *ser* overgeneralised everywhere, then *estar* + *-ndo*, then *estar* for location, then, last and hardest, *estar* with adjectives for conditions ([VanPatten 2010, *Hispania* 93.1](https://faculty.weber.edu/tmathews/SLI/Readings/VanPatten%202010.pdf); the stages were first proposed in 1987).
   - Design consequence: teach location with *estar* before the ser/estar contrast (the roadmap already orders `estar` → `ser-estar`). Drill *estar* + adjective in many later lessons. Never give "permanent vs temporary" as the rule: it fails for *está muerto* and *es joven*. Use "what something is (identity, origin, job, time, events)" against "where it is and how it is right now".

3. **Verb endings that must match the subject; overusing subject pronouns**
   - Wrong → right: *Ella tener un perro* → *Ella tiene un perro*; *Nosotros vive en Miami* → *Nosotros vivimos en Miami*; *¿Usted tienes…?* → *¿Usted tiene…?*. Also *Yo soy Ana. Yo trabajo… Yo vivo…* → *Soy Ana. Trabajo… Vivo…* (not wrong, but marked and repetitive).
   - Why: English verbs barely change (*-s* only). English speakers leave the infinitive, use one form for everyone, or keep the pronoun because English needs one.
   - [practitioner opinion] Standard first-year teaching lore. No learner count was opened.
   - [inference] It is ranked third because it occurs in every sentence from `ser` onward and is fully testable in typing. It joins agreement in the standing rule (§7) as "the verb agrees with the subject".

4. **Object pronouns and *gustar*-type verbs**
   - Wrong → right: *Yo gusto la pizza* → *Me gusta la pizza*; *Me gusta los tacos* → *Me gustan los tacos*; *Compro la* → *La compro*; *Veo ella* → *La veo*; *Mi cabeza duele* → *Me duele la cabeza*.
   - [research-backed] In compositions by 90 English-speaking university students (30 each in 2nd, 3rd and 4th semester), pronouns had the highest internal error rate of any category in the 2nd semester (23.35%) and the 4th semester (13.51%), and the second highest in the 3rd semester ([García 2014, *Revista Lingüística* 16, Nebrija](https://nebrija.com/revista-linguistica/pronouns-students-worst-enemy-in-the-foreign-language-classroom.html)). The page does not break the errors down by pronoun type.
   - Design consequence: add `lo-la` (direct object pronouns, placed before the conjugated verb). Make `gustar` explicitly about "the thing liked is the subject, so the verb agrees with it" (*gusta / gustan*), which links it to the standing rule.

5. ***Tener* expressions and other calques from English**
   - Wrong → right: *Soy 25 años* → *Tengo 25 años*; *Estoy hambre* → *Tengo hambre*; *Estoy frío* (for "I feel cold") → *Tengo frío*; *Es frío hoy* → *Hace frío hoy*; *Me llamo es Ana* → *Me llamo Ana*.
   - [practitioner opinion] Standard teaching list, no source opened. *Tener años* is already in the probe pack.

6. **False friends**
   - Wrong → right: *Estoy embarazada* meant as "I'm embarrassed" → *Me da vergüenza*; *la librería* for "library" → *la biblioteca*; *éxito* for "exit" → *salida*; *Estoy constipado* (in some regions this means "I have a cold") for "constipated" → *estreñido*; *realizar* for "realize" → *darse cuenta*; *asistir* for "assist" → *ayudar*; *actualmente* for "actually" → *en realidad*; *carpeta* for "carpet" → *alfombra*; *sopa* for "soap" → *jabón*; *parientes* for "parents" → *padres*.
   - [practitioner opinion] The pairs are from the [Lawless Spanish / Kwiziq false-friends glossary](https://progress.lawlessspanish.com/revision/glossary/transference-problems/amigos-falsos). No frequency or error data.
   - Design consequence: they go in the "Traps for English speakers" deck. Spanish–English cognates are mostly reliable, so the deck targets a small high-frequency set rather than warning about cognates in general [inference].

7. ***Muy* vs *mucho***
   - Wrong → right: *Hace muy frío* → *Hace mucho frío*; *Tengo muy hambre* → *Tengo mucha hambre*; *Te quiero muy* → *Te quiero mucho*; *Es mucho grande* → *Es muy grande*.
   - Why: English "very" and "a lot / much" map onto *muy* (before adjectives and adverbs) and *mucho* (with nouns and verbs). *Frío, calor, hambre* are nouns after *tener* and *hacer*, so they take *mucho / mucha*. Note the agreement: *mucha hambre*.
   - [practitioner opinion] No source opened. The roadmap already has `muy-mucho`; this profile builds it around the calque.

8. ***Por* vs *para***
   - Wrong → right: *Gracias para todo* → *Gracias por todo*; *Estudio por ser médico* → *Estudio para ser médico*; *Es por ti* (meaning "it's for you", a gift) → *Es para ti*.
   - [practitioner opinion] No source opened. At A1, teach a closed set: *para* for purpose, recipient and deadline; *por* in *gracias por*, *por favor*, *por la mañana*, *por aquí*, and for "because of". Leave the full contrast to A2.

9. **Articles where English has none, or English has one and Spanish has none**
   - Wrong → right: *Me gusta café* → *Me gusta el café*; *en lunes* → *el lunes*; *Soy un estudiante* → *Soy estudiante*; *¿Qué hora es? Es tres* → *Son las tres*.
   - [practitioner opinion] No source opened. The "no article before a job" rule is already in the probe pack.

10. **Personal *a***
    - Wrong → right: *Veo Ana* → *Veo a Ana*; *Llamo mi mamá* → *Llamo a mi mamá*.
    - [practitioner opinion] Taught in `prepositions` and recycled in `lo-la`.

11. **Reflexive pronouns left out**
    - Wrong → right: *Llamo Ana* → *Me llamo Ana*; *Levanto a las siete* → *Me levanto a las siete*; *¿Cómo llamas?* → *¿Cómo te llamas?*.
    - [practitioner opinion] No source opened.

12. **Word order: adjectives and questions**
    - Wrong → right: *la roja camisa* → *la camisa roja*; *una americana chica* → *una chica americana*.
    - In standard Spanish the subject goes after the verb in wh-questions: *¿Dónde vive usted?* is the standard order and *¿Dónde usted vive?* is not. This is not an error in Dominican and Caribbean speech (*¿Cómo tú estás?*), which is why §2.3 accepts it only inside the `caribbean` lesson.
    - [tertiary source, for the Dominican pattern] "¿Cómo tú estás?" instead of "¿Cómo estás tú?" ([Wikipedia, *Dominican Spanish*, IPFS mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Dominican_Spanish); tertiary source). [practitioner opinion] for the adjective order.

13. **Accent marks and the letters ñ, ¿, ¡**
    - Wrong → right: *tu eres* → *tú eres*; *esta en casa* → *está en casa*; *ano* → *año* ("anus" vs "year").
    - [inference] §10 treats this in the matcher (strict items) rather than as a lesson.

14. **Pronunciation**
    - **Tap and trill.** *pero / perro* merge; the English approximant [ɹ] replaces both.
      - [research-backed, second-hand] Face (2006), with 41 English-speaking learners: intermediate learners produced the tap 49% of the time and the trill 5%; advanced learners 79% and 27%; native speakers 92% and 86%. Lord (2005), 17 students: trill accuracy rose from 26% to 39% after a phonetics course. Both are as reviewed in [Herd 2011](https://core.ac.uk/download/213394009.pdf).
      - [research-backed] In Herd's own study (42 learners), perception training improved the tap/trill contrast and transferred to new words. The *d* / tap contrast resisted training.
    - **Soft *d*, *b*, *g* between vowels** (*nada*, *lobo*, *amigo*).
      - [research-backed, second-hand] Learners spirantised */d/* far less than */b/* or */g/*, about 5 to 10% (Zampini 1993–1997, as reviewed in [Herd 2011](https://core.ac.uk/download/213394009.pdf); the reviewer notes there was no acoustic analysis).
    - **Vowels.** English speakers glide *e* and *o* (*no* → "know") and are said to reduce unstressed vowels to schwa.
      - [research-backed] A study of 55 learners at three levels (7,740 tokens) found that learners *and* native speakers both centralised unstressed vowels, so "learners reduce unstressed vowels" was not supported as a learner-only error. Learners' */e/* and */o/* moved toward native values as course level rose ([Bland 2016, MA thesis, Virginia Tech](https://vtechworks.lib.vt.edu/handle/10919/78109); abstract only).
      - [practitioner opinion] Diphthongised *e/o* is standard teaching lore; Bland's abstract does not report on it.
    - **Aspirated *p, t, k*** (Spanish has no puff of air), silent ***h*** pronounced, *j* as English *j*, ***ll*** as *l*, and **English stress on cognates** (*hospital* is stressed on the last syllable, *animal* likewise).
      - [practitioner opinion] No source opened. The aid's stress capitals (§6) target the cognate-stress problem.

## 5. Learners: who, why, what first

**Who** [research-backed unless tagged]
- Spanish is by far the most studied language in US higher education: 584,453 enrolments in fall 2021, 49.4% of all foreign-language enrolments (MLA census, as tabulated on [Wikipedia, *List of most commonly learned second languages in the United States*](https://en.wikipedia.org/wiki/List_of_most_commonly_learned_second_languages_in_the_United_States)). In K-12 public schools (2007–08), Spanish was 72% of foreign-language enrolments (same page).
- On Duolingo, Spanish was the most studied language in all 50 states and D.C. in 2020 ([Duolingo US Language Report 2020](https://blog.duolingo.com/us-language-report-2020)). In 2024 it was the second most studied language worldwide and the first in the US ([Duolingo Language Report 2024](https://blog.duolingo.com/2024-duolingo-language-report/)).
- [inference] Many US adults are **false beginners**: they had two years of high-school Spanish, recognise words such as *hola, gracias, taco, amigo*, and cannot build a sentence. Others are true beginners, and some are heritage speakers who understand far more than they can write. The order of lessons stays the same for all; a placement check lets false beginners skip `sounds` and `greetings`.
- The app's owner is learning Dominican Spanish (project context, stated in the brief). [inference] He stands for a real group of learners with Caribbean partners, family or neighbours. Pew counts 2.4 million US Hispanics of Dominican origin and 5.8 million of Puerto Rican origin ([Pew 2023](https://www.pewresearch.org/short-reads/2023/08/16/11-facts-about-hispanic-origin-groups-in-the-us/%20)).

**Why they study**
- [research-backed, global only] For Spanish, Duolingo's top stated reason worldwide is "connect with people", followed by "just for fun" and "support my education" ([Duolingo 2024](https://blog.duolingo.com/2024-duolingo-language-report/)). No US-only breakdown was available.
- [research-backed, US] In spring 2020, US learning "for school" rose 7% and "for travel" fell 6.5% compared with spring 2019 ([Duolingo 2020](https://blog.duolingo.com/us-language-report-2020)); these are pandemic-year changes, not levels.
- [inference] The four US adult motives are talking with people at work and in the neighbourhood (service jobs, healthcare, construction, teaching), family and partners, travel to Mexico and the Caribbean, and school credit.

**What they need first** [inference]
1. **Survival exchanges with strangers, in *usted*:** greetings, "excuse me", "how much is it?", ordering food, "where is…?", numbers and prices. That is why `numbers` stays in the first sentences stage and *usted* appears in lesson 2.
2. **Talking about themselves and their family, in *tú*:** name, origin, job, *tener* + age. These are in `ser`, `gender`, `possessives` and `irregular`.
3. **Listening to fast, real speech:** Mexican first, then Caribbean, where *s* is dropped and *r/l* change. The `caribbean` lesson exists for this.
4. **Agreement and verb endings from day one,** because English speakers fossilise "one form for everything" (§4.1, §4.3).
5. **Little explicit grammar terminology:** short rules with the glossary terms, and lots of typed production.

**Check of the roadmap's order against US beginner courses** [curriculum convention, weakly sourced]
- The roadmap follows the Instituto Cervantes A1 plan (via a Zaragoza A1 programme). Its order (sounds, greetings, gender and articles, *ser*, *estar*, present, questions, numbers, adjectives and possessives, irregular verbs, *gustar*, reflexives, *ir a*, a past tense) matches the usual US first-year order in outline.
- Search listings for several open US first-year textbooks put stem-changing verbs in chapter 4. One was opened ([Huebener, ch. 4](https://human.libretexts.org/Bookshelves/Languages/Spanish/First-year_Spanish_Bookshelf/Libro_Libre_-_Beginning_Spanish_(Huebener)/04%3A_Capitulo_4/4.08%3A_Stem-Changing_Verbs)). Their contents pages were not readable (§11).
- Changes made for US learners:
  - Stem-changing verbs get their own lesson (the roadmap folds *querer* into "irregular").
  - Adjectives move to straight after `ser`, so agreement is practised from the first descriptive sentence (*Ana es alta*).
  - Object pronouns are added, because of the evidence in §4.4.

## 6. Pronunciation aid (`pron`)

**Evidence.**
- No study comparing respelling, IPA and no aid for English-speaking learners of Spanish was found. Everything here is [inference] or [practitioner opinion].
- The only relevant finding cuts against the strongest argument for dropping the aid: [research-backed] Bland 2016 did not find unstressed-vowel reduction to be a learner-only habit (§4.14). So "respelling teaches English vowel habits" is a risk, not a measured effect.
- [research-backed, second-hand] Tap/trill and soft *d* are the documented problems (§4.14), and spelling does not fix them; only audio and practice do.

**Options weighed.**

| Option | For | Against |
|---|---|---|
| (a) English-letter respelling on every card | True beginners can read it on day one. It matches the probe pack and what US phrasebooks and textbooks do [curriculum convention]. It shows stress, which spelling shows only through rules. | It invites English vowels (*oh* read as the glide in *go*) and cannot show the tap, soft *d* or unaspirated *p t k*. Hand-written respellings drift between writers. |
| (b) IPA | Exact, one symbol per sound. | US adult self-learners cannot read it, and teaching it costs a lesson [inference]. |
| (c) No aid after a spelling lesson | Spanish spelling is nearly phonemic, so the spelling is the best aid once the rules are known [inference]. | Leaves a day-one learner with nothing for *ll, j, gue, ce, h, ñ, rr* and stress. The lint and validator need a fixed policy. |

**Decision: (a), made safe.** `pron: "required"`. Notes on the choice:
- The aid is **generated by a script from the Spanish spelling**, never hand-written. Every Spanish vowel has exactly one spelling, and `pronPattern` rejects raw Spanish spelling (a bare *a*, *o*, *u* or *i*, accented letters, *j q v x z*). So the aid cannot drift, and a writer cannot paste the target into `pron`.
- **BUILD-PLAN §2.5** says a plain respelling is used "only where spelling misleads English speakers". This profile overrides that for Spanish. For an English reader, Spanish spelling *does* mislead on day one (*h, j, ll, gue/gui, ce/ci, z, ñ, rr*, *v* = *b*, and stress), and the probe pack already fills `pron`.
- **The probe's `features.pron:false`** should become `true`, so the engine shows the line and its hide/blur toggle (decision for the lead).
- **Recommended engine default:** shown in the first stage ("Sounds and first words"), then blurred (tap to reveal) once `sounds` and three more lessons are done; the learner can turn it back on. In practice items there is no aid, as PRACTICE-SPEC requires.
- **What the respelling cannot carry** goes into lesson 1 and card notes: the tap vs trill difference beyond *r/rr*, soft *d b g*, no puff on *p t k*, and short pure vowels.

**What lesson 1 (`sounds`) must teach, so the aid can be read:**
1. The five vowels are short and pure: *ah eh ee oh oo* in the aid are one sound each, with no glide (the *oh* is not the *o* in *go*).
2. CAPITALS mark the stressed syllable, and the written accent mark shows stress in the spelling.
3. The stress rule: a word ending in a vowel, *n* or *s* is stressed on the next-to-last syllable; any other ending is stressed on the last; a written accent overrides both.
4. Letters that differ from English: silent *h*; *j* and *g* before e/i = breathy *h*; *ll* and *y* = *y*; *ñ* = *ny*; *c* before e/i and *z* = *s*; *qu* = *k*; *gue / gui* = hard *g*; *v* = *b*.
5. *r* is a quick tap (like the *tt* in American *butter*); *rr*, and *r* at the start of a word, is a trill. In the aid: `r` vs `rr`.
6. The aid is a crutch: listen first, and turn it off when the spelling is enough.

### 6.1 The key (exact format)

**Format**
- Lowercase ASCII letters. Words are separated by single spaces; syllables inside a word by hyphens.
- In every word of two or more syllables, exactly one syllable, the stressed one, is in CAPITALS.
- One-syllable words are all lowercase, including stressed ones (*sí* → `see`, *tres* → `trehs`).
- No punctuation, no accent marks, no digits: write numbers as words in the target, or use the word form in `pron`.

**Vowels** (always these spellings):

| Spanish | Aid | Example |
|---|---|---|
| a | ah | casa → `KAH-sah` |
| e | eh | mesa → `MEH-sah` |
| i, y as a vowel | ee | sí → `see`; y → `ee` |
| o | oh | todo → `TOH-doh` |
| u | oo | uno → `OO-noh` |
| i / u before another vowel (rising diphthong) | y / w + the vowel | bien → `byehn`; bueno → `BWEH-noh` |
| ai, ay | ai | hay → `ai`; baile → `BAI-leh` |
| ei, ey | ay | veinte → `BAYN-teh`; rey → `rray` |
| oi, oy | oy | hoy → `oy` |
| au | ow | auto → `OW-toh` |
| eu | ehw | Europa → `ehw-ROH-pah` |
| ui, uy | wee | muy → `mwee`; cuidado → `kwee-DAH-doh` |
| iu | yoo | ciudad → `syoo-DAHD` |
| two strong vowels (a, e, o), or í / ú with an accent next to a, e, o | separate syllables (but *ui / iu* stay one syllable even with an accent: cuídate → `KWEE-dah-teh`) | aeropuerto → `ah-eh-roh-PWEHR-toh`; día → `DEE-ah` |

**Consonants** (only those that differ; all others as written: b d f k l m n p s t):

| Spanish | Aid | Example |
|---|---|---|
| v | b | vaso → `BAH-soh` |
| c before e, i; z | s | cine → `SEE-neh`; zapato → `sah-PAH-toh` |
| c elsewhere; qu; k | k | casa → `KAH-sah`; queso → `KEH-soh` |
| ch | ch | mucho → `MOO-choh` |
| g before e, i; j | h | gente → `HEHN-teh`; jugo → `HOO-goh` (final *j*, as in *reloj*, is dropped) |
| gue, gui (silent u) | gh | guitarra → `ghee-TAH-rrah` |
| güe, güi | gw | pingüino → `peen-GWEE-noh` |
| g elsewhere | g | gato → `GAH-toh` |
| h | (nothing) | hola → `OH-lah` |
| ll; y as a consonant | y | llave → `YAH-beh`; ayer → `ah-YEHR` |
| ñ | ny | niño → `NEE-nyoh` |
| r between vowels or after a consonant other than n, l, s | r | pero → `PEH-roh`; tres → `trehs` |
| rr; r at the start of a word; r after n, l, s | rr | perro → `PEH-rroh`; Ricardo → `rree-KAHR-doh`; Enrique → `ehn-RREE-keh` |
| x | ks (the k closes the syllable before) | taxi → `TAHK-see`; examen → `ehk-SAH-mehn` |
| x in words starting *méxic- / mexic-*, in *Texas*, and *Oaxaca* (whole word, `wah-HAH-kah`) | h | México → `MEH-hee-koh`; mexicanos → `meh-hee-KAH-nohs` |

**Syllable breaks** follow Spanish spelling rules:
- One consonant goes with the next vowel.
- Two consonants split, except *pr br tr dr cr gr fr pl bl cl gl fl*, which stay together.
- With three consonants, the last two stay together if they form one of those pairs; otherwise the first two go left.
- *ch, ll, rr, qu, gu* count as one consonant.

**Regional cards** (Caribbean deck, `caribbean` lesson): the aid follows the **written standard form** and the `es-MX` voice. The regional pronunciation goes in the card `note` ("Often heard as *¿Cómo tú 'tá?*"). Reason: the TTS voice cannot drop *s* or change *r* to *l*, so an aid that did would contradict the audio.

**Names and English words** inside Spanish sentences: avoid them where possible (pick *San Antonio* over *Houston*). If one is needed, the generator output is used as is, because it shows how a Spanish speaker says it.

### 6.2 `pronPattern`

```
^(?!.*[cC](?![hH]))(?!.*(?<![aA])[iI])(?!.*[aA](?![hHiIyY]))(?!.*(?<![eE])[eE](?![hHeE]))(?!.*(?<![oO])[oO](?![hHoOyYwW]))(?:[abcdefghiklmnoprstwy]+|(?:[abcdefghiklmnoprstwy]+-)+[ABCDEFGHIKLMNOPRSTWY]+(?:-[abcdefghiklmnoprstwy]+)*|[ABCDEFGHIKLMNOPRSTWY]+(?:-[abcdefghiklmnoprstwy]+)+)(?: (?:[abcdefghiklmnoprstwy]+|(?:[abcdefghiklmnoprstwy]+-)+[ABCDEFGHIKLMNOPRSTWY]+(?:-[abcdefghiklmnoprstwy]+)*|[ABCDEFGHIKLMNOPRSTWY]+(?:-[abcdefghiklmnoprstwy]+)+))*$
```

What it enforces:
- Only the letters the key uses: no *j q u v x z*, and no accented letters.
- *c* only inside *ch*; *i* only after *a* (in *ai*).
- *a* only as *ah / ai / ay*; *e* only as *eh / ee*; *o* only as *oh / oo / oy / ow*.
- Every multi-syllable word has exactly one CAPITAL syllable; one-syllable words are lowercase.
- No punctuation, and single spaces only.

It is compiled with the `u` flag. It cannot catch a wrong but well-formed respelling (`KAH-sah` written for *mesa*). The lint, which requires the same target to have the same `pron` everywhere, and the generator below catch that.

### 6.3 Twenty worked examples (all pass `pronPattern` and equal the generator's output)

| # | Spanish | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | Hola. | `OH-lah` | Hello. | silent h; final vowel stress rule |
| 2 | Gracias. | `GRAH-syahs` | Thank you. | c before i = s; ia = yah |
| 3 | Buenos días. | `BWEH-nohs DEE-ahs` | Good morning. | ue = weh; written accent breaks ía |
| 4 | Adiós. | `ah-DYOHS` | Goodbye. | written accent on last syllable |
| 5 | Me llamo Ana. | `meh YAH-moh AH-nah` | My name is Ana. | ll = y; one-syllable words lowercase |
| 6 | Tengo veinte años. | `TEHN-goh BAYN-teh AH-nyohs` | I'm twenty years old. | v = b; ei = ay; ñ = ny |
| 7 | gente | `HEHN-teh` | people | g before e = h |
| 8 | guitarra | `ghee-TAH-rrah` | guitar | gu before i = gh; rr |
| 9 | queso | `KEH-soh` | cheese | qu = k |
| 10 | zapato | `sah-PAH-toh` | shoe | z = s |
| 11 | pero | `PEH-roh` | but | single r = tap |
| 12 | perro | `PEH-rroh` | dog | rr = trill |
| 13 | Ricardo | `rree-KAHR-doh` | Ricardo | word-initial r = rr |
| 14 | ciudad | `syoo-DAHD` | city | iu = yoo; final d kept |
| 15 | muy | `mwee` | very | uy = wee |
| 16 | hoy | `oy` | today | oy; silent h |
| 17 | taxi | `TAHK-see` | taxi | x = ks, split across syllables |
| 18 | México | `MEH-hee-koh` | Mexico | listed exception: x = h |
| 19 | ¿Dónde está el baño? | `DOHN-deh ehs-TAH ehl BAH-nyoh` | Where is the bathroom? | punctuation dropped; accent marks stress |
| 20 | Me gustan los tacos. | `meh GOOS-tahn lohs TAH-kohs` | I like tacos. | ending in n: stress next to last |

The probe pack's ten respellings (`OH-lah`, `BWEH-nohs DEE-ahs`, `KOH-moh ehs-TAHS`, `MOO-choh GOOS-toh`, `ah-DYOHS`, `GRAH-syahs`, `meh YAH-moh AH-nah`, `soy deh TEH-hahs`, `soy ehs-too-DYAHN-teh`, `TEHN-goh BAYN-teh AH-nyohs`) all equal the generator's output and pass the pattern, so the probe needs no change. All 90 sample cards in §9 pass too.

### 6.4 Reference generator

Writers should not hand-write `pron`. This is the generator that produced every respelling in this profile, verified against the probe cards. The lead may save it as a pipeline tool (for example `tools/target/es/respell.js`). The profile brief allowed only two files, so it is not saved there now. Usage: `node respell.js "¿Dónde está el baño?"` → `DOHN-deh ehs-TAH ehl BAH-nyoh`.

```js
/* Spanish spelling -> en-es pron respelling (profile en-es §6). Deterministic, so every writer gets the same string. */
const EXC = { 'oaxaca': 'wah-HAH-kah' };          /* whole-word exceptions */
const XJ = /^(m[eé]xic|texa)/;                 /* x said as j: México, mexicano/a/os/as, Texas */
const V = 'aeiouáéíóúü';
const isV = c => V.includes(c);
const strong = c => 'aeoáéíóú'.includes(c); // accented i/u behave as strong (hiatus)
function graphemes(w) {
  const g = [];
  for (let i = 0; i < w.length; i++) {
    const c = w[i], n = w[i + 1], n2 = w[i + 2];
    if (c === 'c' && n === 'h') { g.push('ch'); i++; continue; }
    if (c === 'l' && n === 'l') { g.push('ll'); i++; continue; }
    if (c === 'r' && n === 'r') { g.push('rr'); i++; continue; }
    if (c === 'q' && n === 'u') { g.push('qu'); i++; continue; }
    if (c === 'g' && n === 'u' && n2 && 'eéií'.includes(n2)) { g.push('gu'); i++; continue; }
    if (c === 'g' && n === 'ü') { g.push('gw'); i++; continue; }
    if (c === 'y' && (i === w.length - 1 || !isV(n || ''))) { g.push('i'); continue; } // y not before a vowel acts as the vowel i (hoy, muy)
    g.push(c);
  }
  return g;
}
const gv = x => x.length === 1 && isV(x);
const INSEP = new Set(['pr', 'br', 'tr', 'dr', 'cr', 'kr', 'gr', 'fr', 'pl', 'bl', 'cl', 'kl', 'gl', 'fl']);
function syllabify(w) {
  const g = graphemes(w);
  // nuclei: split vowel runs into nuclei (hiatus between two strong vowels)
  const units = []; // {t:'V'|'C', s}
  for (const x of g) units.push({ t: gv(x) ? 'V' : 'C', s: x });
  // group vowels into nuclei
  const seq = [];
  for (let i = 0; i < units.length;) {
    if (units[i].t === 'C') { seq.push(units[i]); i++; continue; }
    let run = [];
    while (i < units.length && units[i].t === 'V') run.push(units[i++].s);
    let cur = [run[0]];
    for (let k = 1; k < run.length; k++) {
      const a = run[k - 1], b = run[k];
      const weakPair = 'iuíúü'.includes(a) && 'iuíúü'.includes(b); /* ui, iu (even cuídate) = one syllable */
      const hiatus = !weakPair && ((strong(a) && strong(b)) || 'íú'.includes(a) || 'íú'.includes(b));
      if (hiatus) { seq.push({ t: 'N', s: cur.join('') }); cur = [b]; } else cur.push(b);
    }
    seq.push({ t: 'N', s: cur.join('') });
  }
  // h between vowels does not block (treated as consonant onset; fine)
  const nIdx = seq.map((u, i) => u.t === 'N' ? i : -1).filter(i => i >= 0);
  if (!nIdx.length) throw new Error('no vowel in "' + w + '": write numbers and symbols as words');
  const sylls = [];
  let start = 0;
  for (let k = 0; k < nIdx.length; k++) {
    const ni = nIdx[k];
    if (k === nIdx.length - 1) { sylls.push(seq.slice(start)); break; }
    const next = nIdx[k + 1];
    const cons = seq.slice(ni + 1, next).map(u => u.s);
    let toPrev;
    if (cons.length <= 1) toPrev = 0;
    else if (cons.length === 2) toPrev = INSEP.has(cons.join('')) ? 0 : 1;
    else if (cons.length === 3) toPrev = INSEP.has(cons.slice(1).join('')) ? 1 : 2;
    else toPrev = 2;
    sylls.push(seq.slice(start, ni + 1 + toPrev));
    start = ni + 1 + toPrev;
  }
  return sylls;
}
function stressIndex(w, sylls) {
  const accented = sylls.findIndex(s => s.some(u => /[áéíóú]/.test(u.s)));
  if (accented >= 0) return accented;          /* written accent wins */
  if (sylls.length === 1) return 0;
  return /[aeiouns]$/.test(w) ? sylls.length - 2 : sylls.length - 1; /* vowel, n, s -> next to last; else last (final y counts as a consonant) */
}
const plain = c => ({ 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' }[c] || c);
const VOW = { a: 'ah', e: 'eh', i: 'ee', o: 'oh', u: 'oo' };
const OFF = { ai: 'ai', ei: 'ay', oi: 'oy', au: 'ow', eu: 'ehw', ou: 'ohw' };
function nucleus(n) {
  const p = [...n].map(plain).join('');
  if (p.length === 1) return VOW[p];
  if (p === 'ui') return 'wee';
  if (p === 'iu') return 'yoo';
  let on = '', core = p, off = '';
  if ('iu'.includes(core[0]) && core.length > 1) { on = core[0] === 'i' ? 'y' : 'w'; core = core.slice(1); }
  if (core.length > 1 && 'iu'.includes(core[core.length - 1])) { off = core[core.length - 1]; core = core.slice(0, -1); }
  if (core.length !== 1) throw new Error('nucleus ' + n);
  return on + (off ? OFF[core + off] : VOW[core]);
}
function cons(c, next, prev, wordStart) {
  const nv = next ? plain(next[0]) : '';
  switch (c) {
    case 'b': case 'v': return 'b';
    case 'c': return 'ei'.includes(nv) && next ? 's' : 'k';
    case 'ch': return 'ch';
    case 'g': return 'ei'.includes(nv) && next ? 'h' : 'g';
    case 'gu': return 'gh';
    case 'gw': return 'gw';
    case 'h': return '';
    case 'j': return next ? 'h' : '';  /* final j (reloj) is silent */
    case 'll': return 'y';
    case 'ñ': return 'ny';
    case 'qu': return 'k';
    case 'r': return (wordStart || ['n', 'l', 's'].includes(prev)) ? 'rr' : 'r';
    case 'rr': return 'rr';
    case 'x': return 'ks';
    case 'z': return 's';
    case 'y': return 'y';
    default: return c;
  }
}
function word(w) {
  let lw = w.toLowerCase();
  if (EXC[lw]) return EXC[lw];
  if (XJ.test(lw)) lw = lw.replace(/x/g, 'j');
  if (lw === 'y') return 'ee';
  const sylls = syllabify(lw);
  const st = stressIndex(lw, sylls);
  const flat = sylls.flat();
  let pos = 0;
  const out = sylls.map((s, si) => {
    let r = '';
    s.forEach((u) => {
      const next = flat[pos + 1] ? flat[pos + 1].s : '';
      const prev = pos > 0 ? flat[pos - 1].s : '';
      if (u.t === 'N') r += nucleus(u.s); else r += cons(u.s, next, prev, pos === 0);
      pos++;
    });
    return r;
  });
  // x between vowels: k ends previous syllable, s starts next (ta-xi -> tahk-see)
  for (let i = 1; i < out.length; i++) if (out[i].startsWith('ks')) { out[i - 1] += 'k'; out[i] = out[i].slice(1); }
  if (out.length === 1) return out[0];
  return out.map((s, i) => i === st ? s.toUpperCase() : s).join('-');
}
function respell(text) {
  return text.replace(/[¿¡?!.,;:"«»()…]/g, ' ').trim().split(/\s+/).filter(Boolean).map(word).join(' ');
}
module.exports = { respell, syllabify };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));
```

## 7. Standing practice rule

**Rule: agreement.** Every lesson's practice set keeps re-testing that words agree. There are two strands:
- **(a) Noun-phrase agreement.** Gender and number on articles, demonstratives, possessive plurals, *mucho*, and adjectives, matching their noun. This includes *gusta / gustan* agreeing with the thing liked.
- **(b) Verb agreement.** The verb ending matches the subject's person and number, including *usted* = the *él* form and *ustedes* = the *ellos* form.

**Why these two, and not *ser* vs *estar*.**
- [research-backed] Gender agreement is the best-documented persistent problem in what was opened (§4.1).
- [inference] Agreement is present in essentially every Spanish sentence from lesson 1 (*buenos días*, *buenas noches*), so the rule can be met in every lesson. The JSON has no exemption field, so that matters.
- *Ser* vs *estar* is the second-ranked error (§4.2), but it cannot be tested before lesson 7 and would be artificial in `numbers` or `directions`. It is handled by its own two lessons and recycled as the "mixed neighbour" items in later sets.
- [practitioner opinion] Verb endings join because English speakers default to one form (§4.3), and typed items expose that at once.

**Count** (`minOrder: 2`, `minType: 2`): in every lesson's practice set, at least **2 `order` items** and at least **2 `type` items** must hinge on agreement, and their `why` must name it with a keyword. A 14-item set has 3–4 `order` and 3–4 `type`, so about half of each block.

**What counts as hinging** (mechanical, so a validator can check it):
- **`order`** hinges if the `why` matches the keywords and **either**:
  - `x` contains an agreement twin of a tile in `a`. A twin is the same word in another gender, number or person:
    - articles: *el / la / los / las / un / una / unos / unas*;
    - demonstratives: *este / esta / estos / estas*, *ese / esa…*;
    - possessives: *mi / mis*, *tu / tus*, *su / sus*;
    - *mucho / mucha / muchos / muchas*;
    - adjective endings: *-o / -a / -os / -as*, *-e / -es*, consonant / *+es*;
    - verb forms of the same verb in another person: *tengo / tienes / tiene / tienen*, *soy / es / son*, *gusta / gustan*, *habla / hablas / hablan*;
  - **or** `a` contains a noun phrase of article + noun + adjective, where the distractor is the wrong-gender adjective.

  Example: `{t:"order", p:"the red shirt", a:["la","camisa","roja"], x:["rojo"], why:"camisa is feminine, so the adjective agrees: roja."}`
- **`type`** hinges if the `why` matches the keywords and **either**:
  - `x` holds an agreement twin of a word in `a[0]`;
  - **or** `a[0]` contains an article, demonstrative or *mucho*-form plus a noun;
  - **or** `a[0]` contains an adjective in *-o / -a / -os / -as* that agrees with its noun or subject;
  - **or** `a[0]` contains a conjugated verb whose subject the English prompt names as anything other than "he / she / it" (*I, you, we, they, you all*, or "(to a stranger)").

  Example: `{t:"type", p:"We live in Miami", a:["Vivimos en Miami","Nosotros vivimos en Miami"], hint:"vivir · Miami", x:["vive"], why:"The nosotros form: the verb ending matches the subject, -imos."}`
- **Accepted answers** always include the version without the subject pronoun and the version with it (*Vivimos… / Nosotros vivimos…*). Leaving out *yo* or *tú* is never an error.

**Lessons where the rule is hardest, with a hinge for each:**
- `sounds`: from its own deck, which gives every noun its article: `order` *la llave* (x: *el*), *el perro* (x: *la*); `type` "the keys" → *las llaves* (x: *los*), "the dogs" → *los perros*. The lesson body introduces *el / la* as "the" for this purpose; `gender` then explains it.
- `numbers`: *Son las tres* (x: *es*, *los*); *¿Cuánto cuestan?* (x: *cuesta*); *doscientas personas*.
- `connectors`: *Tengo frío pero estoy bien* (x: *tiene*).
- `directions`: *La farmacia está a la derecha* (x: *el*, *están*).
- `se`: *Se venden casas* (x: *vende*), for number agreement with impersonal/passive *se*.
- `caribbean`: *¿Qué tú quieres?* (x: *quiere*). Write *quieres* in full, since Dominican speech drops the *s* but writing does not.

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\bagree(?:s|ment)?\b|\bmasculine\b|\bfeminine\b|\bgender\b|\bsingular\b|\bplural (?:noun|adjective|article|ending|form|verb)|\bverb ending|\bmatch(?:es)? the subject|(?:\byo|tú|él|\bella|\busted|\bnosotros|\bellos|\bustedes)[ -]form
```

Use them like this:
- "masculine", "feminine", "gender", "agrees / agreement", "singular", "plural noun / adjective / article / form / verb" for strand (a).
- "verb ending", "matches the subject", "the yo / tú / él / ella / usted / nosotros / ellos / ustedes form" for strand (b).

Bare "plural", "ending", "person" and "subject" are deliberately not keywords, so lines about numbers, *-mente*, the personal *a* or impersonal *se* do not count by accident. Do not use the keywords in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; all results as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| camisa is feminine, so roja. | match | should match |
| The adjective agrees with zapatos: negros. | match | should match |
| Gender: el problema is masculine. | match | should match |
| hablamos: the verb ending matches the subject (nosotros). | match | should match |
| With ella, use the él/ella form: tiene. | match | should match |
| Ustedes takes the ellos form: hablan. | match | should match |
| tienes: the tú form ends in -s. | match | should match |
| Plural noun, plural article: los tacos. | match | should match |
| gustan agrees with los tacos. | match | should match |
| Son las tres: plural, feminine las. | match | should match |
| usted uses the usted form, same as él: ¿Puede…? | match | should match |
| Agreement: muchas gracias. | match | should match |
| buenos is masculine plural, like días. | match | should match |
| Me levanto: the yo form takes me. | match | should match |
| fui is the yo form of ir in the preterite. | match | should match |
| Usted takes the él form: tiene. | match | should match |
| ellos form: tienen. | match | should match |
| nosotros form: tenemos. | match | should match |
| Impersonal se: no person is named. | no match | should not match |
| The personal a goes before a person. | no match | should not match |
| Numbers 16 to 29 are written as one word. | no match | should not match |
| Depending on the time of day, say buenos días or buenas tardes. | no match | should not match |
| hay never changes: hay un, hay dos. | no match | should not match |
| Location of a thing: estar. | no match | should not match |
| Events take place: ser (La fiesta es en mi casa). | no match | should not match |
| mucho before a noun, muy before an adjective. | no match | should not match |
| Question words carry an accent. | no match | should not match |
| por for cause, para for purpose. | no match | should not match |
| Single r is a tap; rr is a trill. | no match | should not match |
| en for vehicles: en autobús. | no match | should not match |
| This person is from Mexico. | no match | should not match |
| Weather uses hacer. | no match | should not match |
| A ending in -ar means an -ar verb. | no match | should not match |
| ustedes is the only plural you in Latin America. | no match | should not match |
| An ending of -mente makes an adverb. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §2, §4 and §5):
- **Kept: all 23 items.** Their ids lose the `es-` prefix.
- **Replaced: `es-perfecto`** is covered by the new lesson `preterite`. Latin American Spanish uses the preterite for "what you did today" and "have you ever…" (§2.2). The id changes because a lesson called `perfecto` that teaches the preterite would mislead writers. Its `roadmap` field is `es-perfecto`, so coverage still holds.
- **Renamed:** `greetings` → "Greetings: tú and usted"; `adjectives` → "Adjectives: agreement and position"; `irregular` → "Irregular present: tener, ir, hacer" (*querer* moves to `stem-change`); `gustar` → "gustar: me gusta, me gustan" (*preferir* moves to `stem-change`); `muy-mucho` → "muy and mucho: very cold is mucho frío"; `se` → "Impersonal se: se habla español".
- **Reordered:**
  - `adjectives` moves from after `numbers` to straight after `ser`, so agreement starts with the first description (*Ana es alta*) (§4.1).
  - `numbers` stays in the first sentences stage, because prices and time are first-week survival needs (§5).
- **Added (3):**
  - `stem-change`: the roadmap folds *querer* into "irregular", but stem-changing verbs are a separate, named topic in US first-year textbooks (§5) and cover the most useful request verbs (*quiero, puedo, prefiero, pido*).
  - `lo-la`: object pronouns, the highest error category in García 2014 (§4.4).
  - `caribbean`: required by the lead, and the owner's own target variety.
- **Stages:** the roadmap's three stages plus a fourth, "Regional Spanish", holding `caribbean`.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and first words** | | | |
| 1 | `sounds` | Sounds, spelling and stress | es-sounds | The five pure vowels, letters that differ from English, *r / rr*, the stress rule and accent marks, how to read the aid (§6); deck nouns shown with *el / la* ("the"), explained in `gender`. Trap: English vowel glides and stress on cognates; reading *h* and *j* as in English. | Sounds and spelling |
| 2 | `greetings` | Greetings: tú and usted | es-greetings | *Hola, buenos días / buenas tardes / buenas noches, ¿cómo estás? / ¿cómo está usted?, me llamo, mucho gusto, adiós, gracias, por favor, disculpe*. Trap: one "you" in English; choosing *tú* or *usted*; *buenos* vs *buenas* (first agreement). Note on Spain's *vosotros*. | Greetings and courtesy |
| 3 | `gender` | Gender and number of nouns | es-gender | Masculine and feminine, *-o / -a* and the exceptions (*el día, el mapa, el problema, la mano*), plurals in *-s / -es*. Trap: learning nouns without their gender; defaulting to masculine (§4.1). | People and family |
| 4 | `articles` | el / la, un / una | es-articles | Definite and indefinite articles in four forms each; *el agua* (feminine noun with *el*); articles with things in general (*Me gusta el café*). Trap: dropping articles English doesn't use (§4.9). | Food and drink |
| | | **Stage 2: First sentences** | | | |
| 5 | `ser` | Subject pronouns and ser | es-ser | *yo, tú, él, ella, usted, nosotros, ellos, ustedes* (no *vosotros*); *soy, eres, es, somos, son*; origin, job (no article: *Soy enfermera*), identity. Trap: keeping the pronoun every time; *un / una* before jobs. | About me |
| 6 | `adjectives` | Adjectives: agreement and position | es-adjectives | Adjective after the noun, four forms (*alto, alta, altos, altas*), invariable *-e* and consonant adjectives, colors. Trap: *la camisa rojo*, *la roja camisa* (§4.1, §4.12). | Shopping and clothes |
| 7 | `estar` | estar: where and how | es-estar | *estoy, estás, está…*; location (*¿Dónde está…?*) and how someone is right now (*Estoy bien / cansado*). Trap: *¿Dónde es el baño?* (VanPatten: location comes before conditions, §4.2). | Around town and directions |
| 8 | `ser-estar` | ser vs estar | es-ser-estar | Identity, origin, time and events (*la fiesta es en…*) vs location and condition; *aburrido, listo* change meaning. Trap: "permanent vs temporary" myths; *soy cansado*. | Feelings and states |
| 9 | `hay` | hay: there is, there are | es-hay | *hay* + indefinite article or number; *hay* vs *está* (*Hay un banco* vs *El banco está…*). Trap: *Hay el banco*; a plural form of *hay*. | Home and routine |
| 10 | `present` | Present tense: -ar, -er, -ir | es-present | Regular endings in five persons; *usted* takes the *él* form, *ustedes* the *ellos* form; the present also means "I'm doing". Trap: one form for every subject (§4.3); *Estoy estudiando* overused for routine. | Work and school |
| 11 | `questions` | Questions and question words | es-questions | *¿Qué? ¿Dónde? ¿Cuándo? ¿Cómo? ¿Cuánto/a/os/as? ¿Quién/es? ¿Por qué?*; ¿ ¡ and accent marks on question words; yes/no questions by intonation. Trap: no *do* in Spanish; *cuánto* agrees (*¿Cuántas hermanas?*). | Questions and connectors |
| 12 | `numbers` | Numbers, time and prices | es-numbers | 0–1,000; *veintiuno* as one word; *cien / ciento*; *Es la una / Son las tres*; prices in pesos and dollars; *¿Cuánto cuesta / cuestan?* Trap: *Es tres*; *uno* → *un / una* before nouns. | Numbers, time and prices |
| 13 | `possessives` | Possessives and demonstratives | es-possessives | *mi / mis, tu / tus, su / sus, nuestro/a/os/as*; *este / ese* in four forms; *su* = his, her, your (usted), their. Trap: the possessive agrees with the thing owned, not the owner (*sus libros* = his books). | People and family |
| | | **Stage 3: Everyday life** | | | |
| 14 | `irregular` | Irregular present: tener, ir, hacer | es-irregular | *tengo / tienes, voy, hago*; *tener* + age, hunger, cold; *hacer* + weather; *ir a* + place. Trap: *Soy 25 años*, *Estoy hambre*, *Es frío* (§4.5). | Days, dates and weather |
| 15 | `stem-change` | Stem-changing verbs: quiero, puedo, pido | (added) | e → ie (*querer, preferir, pensar*), o → ue (*poder, dormir, costar*), e → i (*pedir*); *nosotros* keeps the stem; *¿Puede ayudarme?* to strangers. Trap: changing the *nosotros* form; *pido* vs *pregunto* (ask for vs ask). | Health and emergencies |
| 16 | `gustar` | gustar: me gusta, me gustan | es-gustar | *me / te / le / nos / les gusta(n)*; the thing liked is the subject; *me gusta* + infinitive; *a mí también / tampoco*; *encantar* and *doler* work the same way. Trap: *Yo gusto*, *Me gusta los tacos* (§4.4). | Likes and free time |
| 17 | `reflexive` | Reflexive verbs and daily routine | es-reflexive | *me levanto, te bañas, se llama*; daily routine with times; the pronoun before the conjugated verb. Trap: *Levanto a las siete*; *¿Cómo llamas?* (§4.11). | Home and routine |
| 18 | `prepositions` | a, de, en, con, por, para | es-prepositions | *a* (direction, personal *a*), *de* (origin, possession: *el carro de Ana*), *en* (in, on, by vehicle), *con / conmigo*; *al / del*; closed set of *por* and *para* (§4.8). Trap: *Veo Ana*, *Gracias para todo*, *el Ana's carro*. | Travel and transport |
| 19 | `muy-mucho` | muy and mucho: very cold is mucho frío | es-muy-mucho | *muy* + adjective or adverb; *mucho* + noun (agrees: *mucha hambre*) and after verbs; *Hace mucho frío*, *Tengo mucho calor*. Trap: the "very = muy" calque with *tener* and *hacer* nouns (§4.7). The traps deck (false friends, calques) links here. | Traps for English speakers |
| 20 | `connectors` | y, o, pero, porque | es-connectors | *y → e* before *i-*, *o → u* before *o-*; *porque* vs *¿por qué?*; *pero* vs *sino* (recognition); *también / tampoco*. Trap: *porque* vs *por qué* spelling; *y* before *Isabel*. | Questions and connectors |
| 21 | `directions` | Directions and places in town | es-directions | *a la derecha / izquierda, derecho, cerca / lejos, al lado de, enfrente de*; usted commands heard from strangers (*siga, gire, cruce*) for recognition. Trap: *derecho* vs *derecha*; *a el* → *al*. | Around town and directions |
| 22 | `ir-a` | ir a + infinitive: plans | es-ir-a | *voy a, vas a, va a…* + infinitive; time words (*mañana, el sábado, la próxima semana*). Trap: leaving out *a* (*Voy comer*); *ir* in the wrong person. | Travel and transport |
| 23 | `lo-la` | Object pronouns: lo, la, los, las | (added) | Direct object pronouns agree with the thing replaced; placed before the conjugated verb or attached to an infinitive (*La voy a comprar / Voy a comprarla*). Trap: *Compro la*, *Veo ella*, *lo* for a feminine noun (§4.4). | Shopping and clothes |
| 24 | `preterite` | The preterite: what you did | es-perfecto | Regular *-ar / -er / -ir* preterite with accent marks (*hablé, habló*), plus *fui, hice, tuve*; *ayer, anoche, el fin de semana pasado*; Latin American *ya* + preterite for experience; last screen: *he comido* for recognition (§2.2). Trap: *hablo* vs *habló* (accent changes person and tense); importing the English present perfect. | Likes and free time |
| 25 | `se` | Impersonal se: se habla español | es-se | *Se habla español, ¿Cómo se dice…?, Se venden carros* (verb agrees with the plural thing), *No se puede*. Trap: translating "you" or "they" in general statements literally; *se vende* with plural nouns. | Work and school |
| | | **Stage 4: Regional Spanish** | | | |
| 26 | `caribbean` | Hearing Caribbean Spanish | (added) | Listening, labelled regional: dropped or aspirated final *s* (*lo niño*), *-ado* → *-ao* (*cansao*), *r* → *l* or *i* at the end of syllables (Santo Domingo / Cibao), pronoun before the verb in questions (*¿Cómo tú estás?*; by the same pattern *¿Qué tú quieres?*), *guagua, colmado, chin, vaina*. Production stays standard. Trap: not recognising known words without their *s* and *d*. | Caribbean and Dominican Spanish |

Per-lesson notes for writers:
- Every lesson's practice set satisfies §7.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: `ser` / `estar` contrasts, *gusta / gustan*, and *muy / mucho*.
- `preterite` items that differ only by an accent (*hablo / habló*) are strict (§10).
- `caribbean` items accept the regional order only where the prompt says "(Dominican style)". Standard answers are always accepted too.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards in total). Card shape: `[target, pron, meaning, note]`.
- `target`: Spanish with its article for nouns (*la llave*, never *llave*; this includes the Sounds deck), and ¿ ¡ on questions and exclamations.
- `pron`: generated (§6).
- `meaning`: short English.
- `note`: one English line, or empty. Agreement, regional forms and false-friend warnings go here. Any regional word starts its note with "Regional (…)".

**Groups, in order:**

| Group | Decks |
|---|---|
| First steps | Sounds and spelling · Greetings and courtesy · About me · People and family |
| Everyday words | Numbers, time and prices · Days, dates and weather · Food and drink · Shopping and clothes · Home and routine |
| Out and about | Around town and directions · Travel and transport · Health and emergencies · Work and school |
| Conversation | Feelings and states · Likes and free time · Questions and connectors |
| Watch out | Traps for English speakers · Caribbean and Dominican Spanish |

**Deck rules for writers**
- Nouns in decks other than "Sounds and spelling" mostly appear in short phrases that force agreement (*la camisa roja*, *los zapatos negros*). This keeps the standing rule visible in review too.
- Adjectives describing people: give the form that fits the sentence, and name the other gender in the note.
- **Traps for English speakers** (about 18 cards):
  - about 10 false friends (embarazada, librería, éxito, realizar, asistir, actualmente, carpeta, sopa, parientes, constipado);
  - about 6 calques (*tengo frío / hambre / X años*, *hace frío*, *mucho frío*, *me llamo*);
  - 2 cognate stress cards (*hospital*, *animal*: stress on the last syllable, unlike English).
- **Caribbean and Dominican Spanish** (16 cards): every note starts "Regional (Dominican)" or "Regional (Caribbean)", gives the general or Mexican word, and gives the regional pronunciation in words. Candidate words come from the [Wikipedia mirror](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Dominican_Spanish) (*guagua, colmado, chin, vaina, zafacón, yipeta, motoconcho, chinola, lechosa, aposento, conuco*) and from [FluentU](https://www.fluentu.com/blog/spanish/dominican-slang/) (*pana, jevi, tíguere, chercha, nítido, concho*). FluentU is a commercial blog [practitioner opinion], so every card from it needs a check by a Dominican speaker (§11). Leave out *sanky-panky*, *carajito* and other words a blog itself labels derogatory.

**Five sample cards per deck** (all `pron` values generated and checked against `pronPattern`):

**1. Sounds and spelling** (First steps). Words that show each spelling rule: silent h, j, ll, ñ, r and rr, c and z. Lessons: `sounds`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| la hora | `lah OH-rah` | the hour; the time | h is always silent. |
| la gente | `lah HEHN-teh` | people | g before e or i is a breathy h sound; gente is singular in Spanish. |
| la llave | `lah YAH-beh` | the key | ll sounds like English y in most of Latin America. |
| el niño | `ehl NEE-nyoh` | the boy; the child | ñ is its own letter: ny as in canyon. |
| el perro | `ehl PEH-rroh` | the dog | rr is a trill. pero (but) has a single tap. |

**2. Greetings and courtesy** (First steps). Hello, goodbye, please, thanks and polite openers for strangers. Lessons: `greetings`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Buenas tardes. | `BWEH-nahs TAHR-dehs` | Good afternoon. | From about noon until dark. |
| ¿Cómo está usted? | `KOH-moh ehs-TAH oos-TEHD` | How are you? (formal) | To a stranger, an older person or a customer. To a friend: ¿Cómo estás? |
| Por favor. | `pohr fah-BOHR` | Please. |  |
| De nada. | `deh NAH-dah` | You're welcome. |  |
| Disculpe. | `dees-KOOL-peh` | Excuse me. | To get a stranger's attention (usted form). To a friend: disculpa. |

**3. About me** (First steps). Name, where you are from, where you live, your job and your languages. Lessons: `ser`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Me llamo Carlos. | `meh YAH-moh KAHR-lohs` | My name is Carlos. | Literally: I call myself Carlos. |
| Soy de Chicago. | `soy deh chee-KAH-goh` | I'm from Chicago. | ser de = to be from. |
| Vivo en San Antonio. | `BEE-boh ehn sahn ahn-TOH-nyoh` | I live in San Antonio. | No yo needed: the -o ending already says I. |
| Soy enfermera. | `soy ehn-fehr-MEH-rah` | I'm a nurse. | No un / una before a job. A man says enfermero. |
| Hablo un poco de español. | `AH-bloh oon POH-koh deh ehs-pah-NYOHL` | I speak a little Spanish. | Language names are lowercase: español, inglés. |

**4. People and family** (First steps). Family members, friends and words to describe people. Lessons: `gender`, `possessives`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| mi hermana | `mee ehr-MAH-nah` | my sister | hermanos can mean brothers or brothers and sisters. |
| los padres | `lohs PAH-drehs` | parents | padres = parents. parientes = relatives, not parents. |
| la amiga | `lah ah-MEE-gah` | friend (female) | A male friend: el amigo. |
| Mi mamá es simpática. | `mee mah-MAH ehs seem-PAH-tee-kah` | My mom is nice. | simpática agrees with mamá (feminine). |
| los abuelos | `lohs ah-BWEH-lohs` | grandparents | The masculine plural covers a mixed group. |

**5. Numbers, time and prices** (Everyday words). Numbers to 1,000, telling the time, asking prices in pesos and dollars. Lessons: `numbers`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| veinticinco | `bayn-tee-SEEN-koh` | twenty-five | One word from 16 to 29. |
| ¿Qué hora es? | `keh OH-rah ehs` | What time is it? |  |
| Son las tres y media. | `sohn lahs trehs ee MEH-dyah` | It's half past three. | las (horas) is feminine; son because three is plural. One o'clock: Es la una. |
| ¿Cuánto cuesta? | `KWAHN-toh KWEHS-tah` | How much is it? | For more than one thing: ¿Cuánto cuestan? |
| cien pesos | `syehn PEH-sohs` | a hundred pesos | cien before a noun; 101 to 199 use ciento: ciento veinte. |

**6. Days, dates and weather** (Everyday words). Days, months, dates, yesterday and tomorrow, and the weather. Lessons: `irregular`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| el lunes | `ehl LOO-nehs` | on Monday | No word for on: el lunes. Every Monday: los lunes. |
| Hace calor. | `AH-seh kah-LOHR` | It's hot. | Weather uses hacer: hace frío, hace sol. |
| Está lloviendo. | `ehs-TAH yoh-BYEHN-doh` | It's raining. |  |
| el quince de septiembre | `ehl KEEN-seh deh sehp-TYEHM-breh` | September 15 | Day before month; months are lowercase. |
| ayer | `ah-YEHR` | yesterday | mañana = tomorrow (and also morning). |

**7. Food and drink** (Everyday words). Ordering in a restaurant or taquería, everyday food and drinks. Lessons: `articles`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| un taco de pollo | `oon TAH-koh deh POH-yoh` | a chicken taco | de joins the filling: taco de pollo, agua de jamaica. |
| un vaso de agua | `oon BAH-soh deh AH-gwah` | a glass of water |  |
| La cuenta, por favor. | `lah KWEHN-tah pohr fah-BOHR` | The check, please. |  |
| ¿Me da un café, por favor? | `meh dah oon kah-FEH pohr fah-BOHR` | Can I have a coffee, please? | A common way to order in Mexico. |
| el aguacate | `ehl ah-gwah-KAH-teh` | avocado | palta in parts of South America. |

**8. Shopping and clothes** (Everyday words). Clothes, colors, sizes and paying. Lessons: `adjectives`, `lo-la`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| la camisa roja | `lah kah-MEE-sah RROH-hah` | the red shirt | Color after the noun, and it agrees: camisa roja, zapatos rojos. |
| los zapatos negros | `lohs sah-PAH-tohs NEH-grohs` | the black shoes |  |
| ¿Tiene una talla más grande? | `TYEH-neh OO-nah TAH-yah mahs GRAHN-deh` | Do you have a bigger size? | usted form, to a shop assistant. |
| Me la llevo. | `meh lah YEH-boh` | I'll take it. | la = it, for a feminine thing (la camisa). For el suéter: Me lo llevo. |
| ¿Aceptan tarjeta? | `ah-SEHP-tahn tahr-HEH-tah` | Do you take cards? |  |

**9. Home and routine** (Everyday words). Rooms and things at home, and a daily routine with reflexive verbs. Lessons: `hay`, `reflexive`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Me levanto a las siete. | `meh leh-BAHN-toh ah lahs SYEH-teh` | I get up at seven. | levantarse is reflexive: me with yo. |
| Me baño. | `meh BAH-nyoh` | I take a shower. | Latin America: bañarse for a shower too; ducharse also exists. |
| la cocina | `lah koh-SEE-nah` | the kitchen | Also: cooking (the activity). |
| Hay dos cuartos. | `ai dohs KWAHR-tohs` | There are two bedrooms. | hay = there is and there are. |
| el baño | `ehl BAH-nyoh` | the bathroom |  |

**10. Around town and directions** (Out and about). Places in town, asking where things are, and following directions. Lessons: `estar`, `directions`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| ¿Dónde está el baño? | `DOHN-deh ehs-TAH ehl BAH-nyoh` | Where is the bathroom? | Where something is: estar. |
| a la derecha | `ah lah deh-REH-chah` | on the right | derecho = straight ahead; derecha = right. |
| Siga derecho. | `SEE-gah deh-REH-choh` | Go straight ahead. | usted command: what a stranger will say to you. |
| la parada de autobús | `lah pah-RAH-dah deh ow-toh-BOOS` | the bus stop | Mexico: la parada del camión. |
| Está cerca. | `ehs-TAH SEHR-kah` | It's close. | lejos = far. |

**11. Travel and transport** (Out and about). Tickets, stations, airports, getting around and hotel basics. Lessons: `prepositions`, `ir-a`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| el boleto | `ehl boh-LEH-toh` | the ticket | Spain: el billete. |
| Voy en metro. | `boy ehn MEH-troh` | I'm going by subway. | en + vehicle: en carro, en autobús. But a pie = on foot. |
| el aeropuerto | `ehl ah-eh-roh-PWEHR-toh` | the airport |  |
| ¿A qué hora sale el tren? | `ah keh OH-rah SAH-leh ehl trehn` | What time does the train leave? |  |
| el carro | `ehl KAH-rroh` | the car | Mexico and the Caribbean. Spain: el coche. |

**12. Health and emergencies** (Out and about). Saying what hurts, the pharmacy, and asking for help. Lessons: `stem-change`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Me duele la cabeza. | `meh DWEH-leh lah kah-BEH-sah` | My head hurts. | Works like gustar. la cabeza, not mi cabeza. |
| Estoy enfermo. | `ehs-TOY ehn-FEHR-moh` | I'm sick. | A woman says enferma. A condition: estar. |
| ¡Ayuda! | `ah-YOO-dah` | Help! |  |
| ¿Puede llamar a una ambulancia? | `PWEH-deh yah-MAHR ah OO-nah ahm-boo-LAHN-syah` | Can you call an ambulance? | puede: poder (o → ue), usted form. |
| la farmacia | `lah fahr-MAH-syah` | the pharmacy |  |

**13. Work and school** (Out and about). Jobs, the workplace, classes and everyday work verbs. Lessons: `present`, `se`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Trabajo en una oficina. | `trah-BAH-hoh ehn OO-nah oh-fee-SEE-nah` | I work in an office. |  |
| la reunión | `lah rrehw-NYOHN` | the meeting |  |
| Estudio español. | `ehs-TOO-dyoh ehs-pah-NYOHL` | I'm studying Spanish. | The simple present also means I am studying. |
| Mi jefa es de Puebla. | `mee HEH-fah ehs deh PWEH-blah` | My boss is from Puebla. | jefe for a man, jefa for a woman. |
| Se habla español. | `seh AH-blah ehs-pah-NYOHL` | Spanish spoken. | Impersonal se: no person named. |

**14. Feelings and states** (Conversation). How you feel, with estar and tener. Lessons: `ser-estar`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Estoy cansado. | `ehs-TOY kahn-SAH-doh` | I'm tired. | A woman says cansada. |
| Tengo hambre. | `TEHN-goh AHM-breh` | I'm hungry. | tener + noun: tengo sed, tengo frío, tengo miedo. |
| Estoy contenta. | `ehs-TOY kohn-TEHN-tah` | I'm happy. | Said by a woman; a man says contento. |
| Estoy aburrido. | `ehs-TOY ah-boo-RREE-doh` | I'm bored. | Soy aburrido = I am boring. |
| Tengo miedo. | `TEHN-goh MYEH-doh` | I'm scared. |  |

**15. Likes and free time** (Conversation). Hobbies, sports, likes and dislikes, and what you did at the weekend. Lessons: `gustar`, `preterite`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| Me gusta el fútbol. | `meh GOOS-tah ehl FOOT-bohl` | I like soccer. | Literally: soccer pleases me. el is required. |
| Me gustan los tacos. | `meh GOOS-tahn lohs TAH-kohs` | I like tacos. | A plural thing takes gustan. |
| ¿Te gusta bailar? | `teh GOOS-tah bai-LAHR` | Do you like to dance? |  |
| el fin de semana | `ehl feen deh seh-MAH-nah` | the weekend |  |
| Fui al cine. | `fwee ahl SEE-neh` | I went to the movies. | fui = I went. al = a + el. |

**16. Questions and connectors** (Conversation). Question words and the small words that join sentences. Lessons: `questions`, `connectors`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| ¿Por qué? | `pohr keh` | Why? | porque (one word, no accent) = because. |
| ¿Cuándo? | `KWAHN-doh` | When? | Question words carry an accent: cuándo, dónde, qué. |
| ¿Cuántos años tienes? | `KWAHN-tohs AH-nyohs TYEH-nehs` | How old are you? | Literally: how many years do you have? |
| pero | `PEH-roh` | but | Single tap r. perro is dog. |
| también | `tahm-BYEHN` | also; too | Not either: that is tampoco. |

**17. Traps for English speakers** (Watch out). False friends, calques and very / a lot. Lessons: `muy-mucho`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| embarazada | `ehm-bah-rah-SAH-dah` | pregnant | Not embarrassed. Embarrassed: Me da vergüenza. |
| la librería | `lah lee-breh-REE-ah` | bookstore | Library = la biblioteca. |
| el éxito | `ehl EHK-see-toh` | success | Exit = la salida. |
| Tengo frío. | `TEHN-goh FREE-oh` | I'm cold. | Feeling cold uses tener, not ser or estar. |
| Hace mucho frío. | `AH-seh MOO-choh FREE-oh` | It's very cold. | mucho, not muy: frío is a noun here. |

**18. Caribbean and Dominican Spanish** (Watch out). Regional: words and sounds you will hear in the Dominican Republic and the Caribbean. Lessons: `caribbean`.

| Spanish | `pron` | Meaning | Note |
|---|---|---|---|
| ¿Cómo tú estás? | `KOH-moh too ehs-TAHS` | How are you? | Regional (Dominican): pronoun before the verb in questions. Textbook: ¿Cómo estás? |
| la guagua | `lah GWAH-gwah` | the bus | Regional (Caribbean). Mexico: el camión; general: el autobús. |
| un chin | `oon cheen` | a little bit | Regional (Dominican): Dame un chin de jugo = Give me a little juice. |
| el colmado | `ehl kohl-MAH-doh` | the corner store | Regional (Dominican): the neighborhood shop. |
| esa vaina | `EH-sah BAI-nah` | that thing | Regional, informal: vaina = thing, stuff, situation. |

**Localisation** (examples, dialogues, practice):
- **Names:**
  - Mexican and wider Latin American: Ana, Carlos, Sofía, Diego, Lucía, Mateo, Valeria, Javier, Lupita, Alejandro.
  - Dominican (in the Caribbean deck and lesson only): Yanelis, Rafael, Wilson, Yokasta.
  - English-speaking learner characters: Emma, Jack, Ryan, Megan.
  - No celebrities.
- **Places:**
  - Mexico: Ciudad de México, Guadalajara, Monterrey, Puebla, Oaxaca, Cancún.
  - US cities with large Spanish-speaking communities: San Antonio, Los Ángeles, Chicago, Miami, Nueva York, Houston (spoken only, not in `pron`).
  - Others: Bogotá, Lima, San Juan; Santo Domingo and Santiago (de los Caballeros) for the Caribbean deck.
  - Madrid appears only in "what you'll hear in Spain" notes.
- **Food:** tacos, tortillas, frijoles, arroz, pollo, aguacate, elote, tamales, quesadillas, café, jugo, agua de jamaica. Caribbean deck: mangú, plátanos, habichuelas, chinola, lechosa. No paella or tapas as defaults.
- **Money:** pesos in Mexican scenes (*cien pesos*), dollars in US scenes (*diez dólares*). No euros.
- **Measures and dates:** day–month order (*el quince de septiembre*); kilometres and degrees Celsius in Mexico scenes, with a note when a US scene uses miles or Fahrenheit.
- **Settings:** a taquería, a market, a pharmacy, a bus stop, an office, a coworker's family barbecue, a trip to Mexico City; for the Caribbean, a colmado and a guagua ride.

## 10. Typing and script

**Script.** Latin letters plus *á é í ó ú ü ñ* and the opening marks *¿ ¡*. `targetScript`: `[A-Za-zÁÉÍÓÚÜÑáéíóúüñ¿¡]`. Every Spanish string must contain at least one character from this class.

**Accent bar** (`keys`): `á é í ó ú ñ ü ¿ ¡`, in that order (*ñ* before *ü* because it is far more frequent). Capitals are not on the bar, and the matcher does not check case.

**`accents: true`.** In this profile the flag means three things:
- The target language uses accent marks.
- Accent marks are part of the correct answer.
- The engine's accent-insensitive comparison is allowed, but only to grade an answer as **"almost"**: it is accepted, the correct form is shown, and it counts as right on first attempt only if the engine already treats "almost" that way.

It does **not** mean that accent marks may be ignored silently. The lead should check that the engine's reading of `accents:true` matches this.

**Strict items** (the item is marked strict, so an accent-only difference is wrong, not "almost"). Mark an item strict when the accent is the point being tested or changes the meaning:
- pairs where the accent separates two words: *tú / tu, él / el, sí / si, mí / mi, té / te, sé / se, dé / de, más / mas*;
- *está / esta, están / estan* in `estar` and `ser-estar` items;
- question words vs relatives in `questions`: *qué / que, cómo / como, dónde / donde, cuándo / cuando, por qué / porque*;
- preterite vs present in `preterite`: *habló / hablo, compró / compro, llegó / llego*;
- any `mc` item whose options differ only by an accent.

Everything else (for example *estás* typed as *estas* in a greetings item, or *café* as *cafe*) is "almost".

***ñ* is not an accent.** *año / ano*, *señora / senora* and *niño / nino* differ in a letter, and the difference can change the meaning (*año* "year" / *ano* "anus"). A missing tilde on *ñ* is always **wrong, never "almost"**. If the engine folds accents with Unicode NFD and strips combining marks, *ñ* would fold to *n*. The matcher must exclude U+0303 on *n* from folding. **This needs an engine check by the lead** (§11).

***ü*** (*pingüino, vergüenza*) is rare at A1. A missing diaeresis is "almost".

**Punctuation.**
- The engine already strips `. , ! ? ~` and quotes. It should also strip **¿ and ¡**, so a learner who types *Cómo estás?* or *¿Cómo estás?* or *Cómo estás* is accepted. **Engine check:** PRACTICE-SPEC lists only `. , ! ? ~`.
- Authors still write ¿ ¡ in every `a[0]` model answer, card target and example, since the model answer teaches the spelling.

**Case.** Not checked. Authors capitalise the first word of sentences in `a[0]`. Language names, days and months are lowercase in Spanish (*español, lunes, septiembre*), and model answers must follow that.

**What a typed answer must include**
- Every word Spanish requires: articles (*Me gusta el café*), the personal *a*, reflexive pronouns (*Me llamo*), and *a* in *ir a*.
- The correct agreement and verb ending (the standing rule).
- Accent marks on strict items.

**What it need not include**
- Subject pronouns. Authors list the variants with and without *yo / tú / él…* in `a`. Do not list both *usted* and no-pronoun unless the prompt makes *usted* necessary.
- ¿ ¡ and final punctuation; capital letters.
- Regional forms: never required. In `caribbean` items, standard answers are always in `a`.

**`fill` and tile fallbacks.** The three wrong options `o` should be agreement or person twins wherever possible (*roja → rojo, rojas, rojos*; *vivimos → vive, viven, vivo*), so the tap fallback still tests the standing rule.

## 11. Gaps and unverified claims

**Evidence that could not be opened, or was read second-hand**
- **Gender agreement accuracy** for English-L1 learners: no first-hand percentages were opened.
  - Montrul et al. 2008, Alarcón 2011 and Grüter et al. 2012 are known only through the review in Hur, López Otero & Sánchez 2020. That paper studies heritage speakers, not L2 learners.
  - Gamboa Rengifo 2012 and Gudmestad, Edmonds & Metzger were read as abstracts only. The Black & Tararova (CLA 2020) paper was blocked by a browser check.
- **Tap/trill and soft *d*:** Face 2006, Lord 2005 and Zampini are second-hand, via Herd 2011.
- **Bland 2016:** abstract only.
- **VanPatten's stages** are from his 2010 essay. The 1987 data were not opened.
- **García 2014** gives pronoun error rates but no breakdown by pronoun type. That *gustar* and *lo/la* in particular drive the rate is [inference].
- **No fetched source** for these error zones, all tagged [practitioner opinion]: verb-ending errors and pronoun overuse, *tener* calques, *muy / mucho*, *por / para*, articles, personal *a*, reflexive omission, adjective order, aspirated *p t k*, and cognate stress. A learner corpus (CEDEL2, or Swan & Smith-type references for Spanish as a second language) should be checked.
- **False friends:** the list is a teaching glossary, with no frequency or error data.

**Learners**
- The Census figure is a share (62% of non-English home languages, 2019), not a count. No head count was opened.
- Duolingo's motivation ranking for Spanish is **global**; no US-only data was found. The 2020 US figures are year-on-year changes, not levels.
- MLA enrolment figures were read through a Wikipedia table, not the MLA report.
- Where Dominican-origin learners or partners live in the US was not researched.

**Curriculum**
- No US first-year textbook contents page could be read: two open-textbook pages showed no grammar outline, and one was not on the allowlist. The "chapter 4" placement of stem-changing verbs comes from search-result titles plus one opened chapter.

**Variant**
- The preterite vs perfect claim for Mexico rests on one review article (Akerberg 2006). The RAE *Nueva gramática* was not opened.
- No neutral-Spanish or Mexican style guide was opened for §2.1's vocabulary table, which is [curriculum convention] and [inference].

**Dominican and Caribbean**
- Features come from a Wikipedia mirror (tertiary), the OSU *Dialectos* feature list (which names the Caribbean for velar *n*, aspirated *j*, *-ado* → *-ao* and uvular *rr*), and a commercial blog.
- ***¿Qué tú quieres?*** does not appear in the sources opened. The mirror gives *¿Cómo tú estás?*, and *¿Qué tú quieres?* is this profile's example of the same pattern [inference]. The page does not say how widely this order is used with other question words.
- The Dominican deck needs a native Dominican speaker's check before shipping: regional words, notes and spellings (*jevi*, *chin*, *vaina*). *¿Qué lo que?* (a common greeting) is not in any source opened, so it is left out until checked.

**Engine and pipeline** (for the lead)
- *ñ* must not fold to *n* in the accent-insensitive matcher (§10).
- ¿ ¡ should be stripped by the normaliser (§10).
- What `accents:true` means in the engine (§10).
- The probe's `features.pron:false` should change to `true` (§6).
- The reference generator (§6.4) should become a pipeline tool, so writers never hand-write `pron`.
- `stem-change`, `lo-la` and `caribbean` have an empty `roadmap` field. `preterite` covers `es-perfecto` under a new id, so the roadmap's own lesson link should point to `preterite`.

**Not verified at all**
- How well a learner reads the respelling. No study compares aid types for this pair.
- Whether `es-MX` TTS voices exist on the devices the app targets. That is a phase-0 engine question.

## Sources

Web pages opened and used for this profile (2026-11-18):
- [Akerberg, M. (2006). Pretérito perfecto compuesto vs. pretérito simple: su adquisición en portugués por hablantes de español. *Estudios de Lingüística Aplicada* 44 (UNAM)](https://ela.enallt.unam.mx/index.php/ela/article/download/599/651)
- [VanPatten, B. (2010). Some Verbs Are More Perfect than Others: Why Learners Have Difficulty with ser and estar. *Hispania* 93.1](https://faculty.weber.edu/tmathews/SLI/Readings/VanPatten%202010.pdf)
- [Hur, E., López Otero, J. C. & Sánchez, L. (2020). Gender Agreement and Assignment in Spanish Heritage Speakers: Does Frequency Matter? *Languages* 5(4), 48](https://mdpi.com/2226-471X/5/4/48)
- [Gamboa Rengifo, A. (2012). The acquisition of grammatical gender in Spanish by English-speaking L2 learners. MA thesis, Purdue (abstract)](https://docs.lib.purdue.edu/dissertations/AAI1530213)
- [Gudmestad, Edmonds & Metzger, LSRL 49 conference abstract on gender marking in L2 Spanish (title not recorded)](https://www.linguistics.uga.edu/sites/default/files/LSRL49-abstracts/GUDMESTAD_EDMONDS_METZGER_17.pdf)
- [García, M. (2014). Pronouns: students' worst enemy in the foreign language classroom. *Revista Lingüística* 16, Universidad Nebrija](https://nebrija.com/revista-linguistica/pronouns-students-worst-enemy-in-the-foreign-language-classroom.html)
- [Herd (2011). The perceptual and production training of /d, ɾ, r/ in L2 Spanish (thesis, CORE PDF; author's initial and degree not verified)](https://core.ac.uk/download/213394009.pdf)
- [Bland, J. (2016). Speech style, syllable stress, and the second-language acquisition of Spanish /e/ and /o/. MA thesis, Virginia Tech](https://vtechworks.lib.vt.edu/handle/10919/78109)
- [Lawless Spanish / Kwiziq: False friends (amigos falsos) glossary](https://progress.lawlessspanish.com/revision/glossary/transference-problems/amigos-falsos)
- [Huebener, *Libro Libre: Beginning Spanish*, 4.08 Stem-Changing Verbs (LibreTexts)](https://human.libretexts.org/Bookshelves/Languages/Spanish/First-year_Spanish_Bookshelf/Libro_Libre_-_Beginning_Spanish_(Huebener)/04%3A_Capitulo_4/4.08%3A_Stem-Changing_Verbs)
- [Pew Research Center (2023). 11 facts about Hispanic origin groups in the U.S.](https://www.pewresearch.org/short-reads/2023/08/16/11-facts-about-hispanic-origin-groups-in-the-us/%20)
- [US Census Bureau (2022). What languages do we speak in the United States? (ACS 2019)](https://census.gov/library/stories/2022/12/languages-we-speak-in-united-states.html)
- [Wikipedia: List of most commonly learned second languages in the United States (MLA 2021 census figures)](https://en.wikipedia.org/wiki/List_of_most_commonly_learned_second_languages_in_the_United_States)
- [Duolingo (2020). US Language Report](https://blog.duolingo.com/us-language-report-2020)
- [Duolingo (2024). Duolingo Language Report](https://blog.duolingo.com/2024-duolingo-language-report/)
- [Wikipedia: Dominican Spanish (IPFS mirror)](https://ipfs.ssi.eecc.de/ipns/en.wikipedia-on-ipfs.org/wiki/Dominican_Spanish)
- [The Ohio State University, *Dialectos del español*: feature descriptions](https://dialectos.osu.edu/feature-descriptions)
- [FluentU: 31 Unique Dominican Slang Terms (commercial blog)](https://www.fluentu.com/blog/spanish/dominican-slang/)

Local project files read: `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/profiles/es.md` (as a model), `packs/roadmaps.js` (entry `es`), `packs/course-en-es.js` (probe), `tools/content/validate.js` (the existing standing-rule kinds, for the hinge definitions).
