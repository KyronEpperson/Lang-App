# English speakers learning Dutch: course profile

Course `en-nl`: Dutch for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Dutch. Machine-readable twin: `tools/target/nl/profile.json`. The `pron` strings in §6 and §9 were produced by `tools/target/nl/respell.js`, and `pronPattern` in the JSON is the string that file's `pronPattern()` prints.

**Lead, before stage 2:** read `docs/briefs/en-nl-lead.md` and record the three decisions there. Writers follow this profile. That note is the review, not a second profile.

**Evidence tags.**
- **[research-backed]**: an empirical study that was opened for this profile. The study is named, and its sample is given where it is small.
- **[curriculum convention]**: what textbooks and courses do.
- **[practitioner opinion]**: a teacher's or guide's stated view, with no count behind it.
- **[inference]**: this profile's own reasoning from tagged items.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant:** Standard Dutch of the Netherlands, voice `nl-NL`. Flemish is named once, in the hard-sounds lesson, and is not taught. No *gij*, no soft *g*, no Belgian plural *zo'n mensen*.
- **Register:** *je* / *jij* first, for friends, peers and the learner's own speech. *u* arrives in greetings, for strangers, shop staff, older people and the *gemeente*. When the learner is unsure, the line to teach is *u*. *jij* is the stressed form of *je*.
- **Biggest English-speaker traps, ranked (§4):** *de* / *het* and the adjective *-e* that follows from it; verb-second and the verb-final clause after *omdat* / *dat*; separable verbs; *zijn* / *hebben* calques (*ik ben goed*, *ik ben koud*); *niet* / *geen*; the clock (*half drie* is 2:30); false friends; then the sounds *g* / *ch*, *ui*, *eu*, *ij* / *ei*.
- **Standing practice rule:** every practice set keeps re-testing two things that are in almost every sentence: **which article the noun takes** (*de* / *het*, which also decides *deze* / *dit* and the adjective *-e*), and **where the verb sits** (verb-second, inversion, verb-final, separable prefix at the end). A `why` line names the point with fixed keywords (§7). *niet* / *geen* is lesson-local, not the standing rule.
- **Pronunciation aid:** a fixed, script-generated English-letter respelling (`mahn`, `MAAH-nuh`, `khoot`). Required on every card and example. One syllable stays lowercase; a longer word puts exactly one syllable in CAPITALS. It is an aid, not a phonetic transcription. Lessons 1 and 2 teach the key, including what the letters cannot show (lip rounding, no puff on *p* / *t* / *k*, the three *r*s).
- **Lessons:** 28, the top of the allowed range. All 27 roadmap items are kept. *de* / *het* moves up to sit before the present tense. One lesson is added: `traps`.
- **Decks:** 17 in 5 groups. There is no Health deck: no roadmap lesson owns one.
- **Typing:** Latin. *ij* is the two letters *i* and *j*. A missing accent is "almost". The accents a writer will actually need are *é*, *ë* and *ï* (*één*, *café*, *coördinatie*). The engine already keeps an internal apostrophe (*auto's*, *zo'n*) and already treats a missing accent as "almost". No engine change.

## 2. Variant, register and voice

### 2.1 Variant: Standard Dutch of the Netherlands

The lead has set this. The roadmap says the same: Standard Dutch (Netherlands), voice `nl-NL`, and Flemish is not the course.

- [curriculum convention] *Start.nl deel 1* (Verbruggen and Hoogvorst, 2nd revised edition, Coutinho 2017) is a Netherlands NT2 course, ten chapters to A1. Its chapter order is the roadmap's basis. The preview opened here is the publisher's look-inside PDF on nt2.nl.
- [curriculum convention] Durham's beginners summary puts vowels, *de* / *het*, adjective agreement, the present, the perfect, modals, negation, pronouns and demonstratives in the first steps, and diminutives, subordinate clauses, the imperative, separable verbs and comparatives in the next. The page says the list is indicative only.
- [practitioner opinion] The pronunciation guides opened here describe "the accent of the Dutch news" and "standard Dutch as you'll commonly hear it in the Netherlands". Both say the soft *g* of the south and of Flanders is also standard, and both say this course's voice is the harder northern *g*. Teach that one. One sentence in the hard-sounds lesson: in Flanders and the south the *g* is softer, and you will be understood either way.

**What is not taught.** *gij* / *ge*. Belgian *zo'n* with a plural (*zo'n mensen* is non-standard; standard is *zulke mensen*). Headline style that drops the adjective *-e*. Filler particles (*toch*, *wel*, *nou*, *hoor*, *even*): the teacher quoted on iamexpat puts those at C1, and A1 does not need them.

**Places and money.** Amsterdam, Utrecht, Rotterdam, Den Haag, Groningen. Prices in euro and cent. Names that appear in sources opened here may be reused: the *Start.nl* preview uses Peter, Anne, Maria, Linde, Mark and Luc; the Dutch Fluency stress page uses Fatima, Ahmed, Yara, Bas, Lotte, Joris, Emma and Mei. Do not invent a "typical Dutch" name. The generator has a whole-word fix for *Anna* (`AH-nah`), so that name is safe on a card.

### 2.2 Register: *je* first, *u* when it matters

[curriculum convention] *Start.nl* chapter 1, in the preview that was opened: *u* for someone older, in a professional role, or in a high position; *je* for children, relatives, friends and people your own age; if you are not sure, use *u*; the other person can invite you to *je*; even Dutch speakers hesitate; *bedankt* avoids the choice.

**Taught first: *je* and *jij*.** Friends, classmates, family, and every conjugation table's "you" row. *jij* is what you say when the word is stressed (*jij werkt*, not *je werkt*, when "you" is the point). *je* is the unstressed form (`yuh`).

**u:**
- Introduced in `greetings`: *Dank u wel*, *Alstublieft*, *Hoe gaat het met u?*
- From `present` onward, one line in the verb table: *u* takes *-t* and **never** drops it. *Werk je?* but *Werkt u?*
- Shop, station, town hall and anyone clearly older than the learner: the learner says *u*. The other person may answer with *je*.

[curriculum convention] Oosterhoff, *Basic Dutch: A Grammar and Workbook*, 2nd ed. (Routledge, 2024; the preview that was opened), unit 3: *jij* / *je werkt*, but *werk je* when *je* follows the verb; *u werkt* whether *u* comes before or after. *hebben* and *zijn* follow the same split: *jij hebt* / *heb je*, *jij bent* / *ben je*, *u hebt* or *u heeft*, *u bent*.

### 2.3 One Flemish note, then stop

In `sounds`, after *g* and *ch*: "In Flanders and the south of the Netherlands this sound is softer. This course uses the harder sound of the northern news accent. Both are standard." Do not add a Flemish deck, a *gij* table, or a second voice.

### 2.4 Voice

`ttsLang` is `nl-NL`. The aid drops the *n* of an unstressed *-en* (*werken* → `WEHR-kuh`) because that is ordinary Netherlands speech. The voice may keep the *n*. Say so in lesson 1, so a learner who hears *werken* with an *n* does not think the card is wrong. Keeping the *n* is not an error.

## 3. Glossary

Writers use the English term in prose and the Dutch word in examples. The standing-rule keywords are the ones in the last column.

| English in the lesson | Dutch | Use this, not | Keyword if it is a standing-rule point |
|---|---|---|---|
| the (common gender) | de | "the masculine" | de-word, de/het, common gender |
| the (neuter) | het | "the neuter the" as a bare "het" | het-word, de/het, neuter |
| a, an | een | the number één | |
| one | één | een | |
| I, you | ik, je / jij | | |
| you (formal) | u | U in the middle of a sentence | |
| to be, to have | zijn, hebben | | |
| not | niet | | |
| no, not a | geen | | |
| verb in second place | (no everyday Dutch term at A1) | "V2" in learner prose | verb second, inversion |
| verb at the end | | | verb-final, at the end of the clause |
| separable verb | scheidbaar werkwoord, if a Dutch term is needed | | separable |
| diminutive | verkleinwoord | | |
| this, that (de-word) | deze, die | | de-word |
| this, that (het-word) | dit, dat | | het-word |

*de* and *het* are both "the". Gender is real, but the lesson says "de-word" and "het-word", because "masculine" and "feminine" are the wrong picture: both take *de*.

## 4. Error zones of English speakers, ranked

Ranked by how early they break a sentence and by how often the opened sources name them. The first two are the standing rule. The rest are taught in their own lessons and come back as mixed neighbours, not as the keyword test.

### 4.1 *de* / *het*, and the adjective *-e*

[practitioner opinion] The Boost Your Language guide: there is no reliable rule for *de* versus *het*; learn the noun with its article; about two thirds of nouns are *de*; plurals are *de*; diminutives in *-je* are *het*. The same page: the adjective takes *-e* except on a singular indefinite *het*-word (*een groot huis*, *het grote huis*, *een grote tafel*), and a predicate adjective takes no *-e* (*Het huis is groot*).

[curriculum convention] The Flemish government's language-advice page (opened; the rule is the same in the Netherlands): *-e* on plurals, on singular *de*-words, and on singular *het*-words after *het* / *dit* / *dat* / a possessive. No *-e* after *een* / *geen* / *zo'n* / *welk* / *elk*, and with no determiner, when the noun is a singular *het*-word. Adjectives in *-ig*, *-isch* or *-lijk* before a singular *het*-word can go either way in careful style. Teach the *-e* form as the one that is always acceptable, and do not drill the stylistic option.

[practitioner opinion] Learn Dutch Online, Bart de Pau: *Deze boek* is wrong; *boek* is a *het*-word, so *Dit boek*. iamexpat, quoting teacher Nienke (22 March 2023): beginners say *een rode pen* correctly and then put the same *-e* on *een rood boek*.

Wrong → right, for the lesson tip:

- *de huis* → *het huis*
- *een grote huis* → *een groot huis*
- *het groot huis* → *het grote huis*
- *Deze boek is nieuw* → *Dit boek is nieuw*
- *Het huis is grote* → *Het huis is groot*

### 4.2 Word order: verb-second, then verb-final, then the separable prefix

[research-backed] Hulstijn (1984 chapter; the 1982 dissertation is the full study). A sentence-correction test of 157 adult learners of Dutch: inversion mean 5.2 (SD 3.71), verb-final mean 4.0 (SD 3.85). From that pool, 32 learners were studied in more depth, 16 of them English-speaking (mean age 32, mean residence in the Netherlands 2 years 8 months). The English group was significantly worse at verb-final than the other 16, and not worse at inversion. In a story-retelling task the 32 were right about 83% of the time on inversion and about 47% on verb-final. The study is cross-sectional, not a teaching experiment. What it supports: verb-final is the harder of the two, and English speakers are a group it hits.

[practitioner opinion] Boost Your Language: *Morgen ik ga* is the English order; Dutch is *Morgen ga ik*. After *omdat*, *dat*, *als*, *terwijl* the verb goes to the end. The same page lists separable verbs (*opbellen*, *meenemen*, *aankomen*, *opstaan*) as a separate, equally regular failure. Learn Dutch Online: *Op maandag ik ga* → *Op maandag ga ik*; *omdat ik heb een vraag* → *omdat ik een vraag heb*; *Ik meeneem* → *Ik neem … mee*.

[practitioner opinion] iamexpat / Nienke: the subclause example she wants is *Ik ga naar huis omdat ik ziek ben*, not *omdat ik ben ziek*.

Wrong → right:

- *Morgen ik ga naar school* → *Morgen ga ik naar school*
- *omdat ik ben moe* → *omdat ik moe ben*
- *Ik opsta om zeven uur* → *Ik sta om zeven uur op*

Time-manner-place (*Ik ga morgen met de trein naar Utrecht*) is real, and it is not the standing rule. Teach it inside `inversion` as a note, not as a keyword.

### 4.3 *zijn* and *hebben* where English uses "to be"

[practitioner opinion] iamexpat / Nienke: asked *Hoe gaat het?*, English-speaking beginners answer *Ik ben goed*. The answer is *Het gaat goed* (or *Het gaat wel*, which *Start.nl* chapter 1 also uses).

[practitioner opinion] Boost Your Language: *Ik ben koud* describes a cold personality or a cold surface. Feeling cold is *Ik heb het koud*. Feeling hungry is *Ik heb honger*, not *Ik ben honger*. The same page: *Hoe laat is het?* is "what time is it", not a *wat* or *hoeveel* question. *Hoeveel* is for quantity (*Hoeveel kost het?*).

Wrong → right:

- *Ik ben goed* → *Het gaat goed*
- *Ik ben koud* → *Ik heb het koud*
- *Ik ben honger* → *Ik heb honger*
- *Wat tijd is het?* → *Hoe laat is het?*

### 4.4 *niet* and *geen*

[curriculum convention] *Start.nl* puts *geen* in chapter 3 and *niet* in chapter 5, and chapter 6 contrasts them. [practitioner opinion] The guides treat *geen* as the negator of a noun (*Ik heb geen fiets*) and *niet* as the negator of the rest (*Ik werk niet*, *niet groot*). This is important and it is **not** the standing rule: a sounds lesson and a numbers lesson cannot honestly hinge on it, and the validator has no exemption field. `geen-niet` owns it, and later lessons may use it as a mixed neighbour without the keywords.

### 4.5 The clock

[practitioner opinion] TaalTaal, "Telling the time", opened: *half drie* is 2:30, halfway to three, not 3:30. *kwart over drie* is 3:15. *kwart voor vier* is 3:45. *tien voor half drie* is 2:20. *vijf over half drie* is 2:35. Timetables often say *veertien uur dertig*. Teach *half* as "halfway to the next hour" in `time`, with one timetable sentence for recognition.

### 4.6 False friends

[practitioner opinion] The Dutch Online Academy false-friends page, and the Boost Your Language list, agree on the pairs an A1 learner actually meets. Teach these, not a long list:

| Dutch | A learner may think | It means | Say this instead for the English word |
|---|---|---|---|
| eventueel | eventually | possibly, if needed | uiteindelijk, or misschien |
| actueel | actually | current | eigenlijk; "actual" is echt |
| brutaal | brutal | cheeky | wreed, bruut |
| slim | slim, thin | clever | slank |
| de map | a map | a folder | de kaart, de plattegrond |
| de file | a computer file | a traffic jam | het bestand |
| de chef | a cook | a boss | de kok |
| de agenda | a meeting agenda only | also a diary | het dagboek for a private diary |

*Ik kom eventueel* does not promise that you will come. It means you might. The traps lesson uses that sentence.

### 4.7 Sounds

[practitioner opinion] The Dutch Online Academy and Learn Dutch, both opened in full, agree on the set English speakers miss first: *g* / *ch* (one sound in this accent, Scottish *loch*, not an English *g*), *ui* (no English equivalent), *eu* (rounded, no *y*-glide), *ij* / *ei* (wider than English "eye"), *oe* (the vowel of *food*, one sound), short *u* (front of the mouth, not *but* and not *book*), long vowels with no English glide (*naam* is not *name*, *been* is not *seen*). Final *b* and *d* sound like *p* and *t* (*hond* like *hont*) while the spelling stays *b* / *d* because the plural has the voiced sound (*honden*). *sch* is *s* plus that *ch*, never *sk* or *sh*. Word-final *-isch* is *-is* (*logisch*). These are lessons 1 and 2. They are not the standing rule.

### 4.8 The present-tense *-t*

[curriculum convention] Oosterhoff unit 3, opened: *ik* is the stem, *jij* / *u* / *hij* add *-t*, and *jij* / *je* drop that *-t* when they follow the verb. *u* never drops it. A stem that already ends in *-t* does not add another (*zet*). A stem in *-d* does add *-t*, and it still sounds like *t* (*houdt*). This is taught in `present` and recycled whenever a question puts *je* after the verb. It is not a standing-rule keyword: "verb ending" would fire on too many lines that are not the point.

## 5. Learners: who, why, what first

The picture is thin. No enrolment census for Dutch in the US was opened, and the Duolingo 2024 report that was opened does not support a claim that Dutch is one of that app's largest languages. Do not write one.

What was opened:

- [practitioner opinion] iamexpat (March 2023), one teacher in the Netherlands: her beginners are internationals, English is the language they arrive with, and the first public failure is *Hoe gaat het?* → *Ik ben goed*. She also names the adjective *-e* and *omdat*.
- [inference] The roadmap's own basis is an NT2 course (*Start.nl*) and a UK university extension course (Durham). Both are built for adults who live, or will live, where Dutch is spoken, plus adults studying it at a distance. Housing, appointments, the station, the shop and "how are you" come before essays.

**What to teach first, from that.** Greetings and *je* / *u*. *Het gaat goed*. Name, city, *Ik kom uit…*. Then *de* / *het* on every noun, before the learner meets a page of verbs, because the article is part of the word. Then a small present tense, verb-second, and the clock. Food and the train come before the perfect, which is the roadmap's own order and this profile keeps it.

**What to leave out of A1.** *toch*, *wel*, *nou*, *hoor*. The stylistic adjective without *-e*. Flemish. *zouden* beyond a recognition note if a dialogue needs *zou*. Two meanings of *voorkomen*: the generator's fix is the A1 stress of "to occur" (`VOOR-koh-muhn`). "To prevent" is stressed on *komen* and must not reuse that card.

## 6. Pronunciation aid (`pron`)

### 6.1 Decision

Three options were real:

| Option | What the learner sees | Why it lost or won |
|---|---|---|
| No aid | the Dutch spelling only | *g*, *ch*, *ui*, *eu*, *oe*, *ij*, *sch* and final *b* / *d* mislead on day one. BUILD-PLAN says "plain respelling only where spelling misleads". For Dutch that is the whole first week, so the aid is on every card, as it is for Spanish. |
| IPA | `/mɑn/`, `/ɣut/` | The app's readers are not phoneticians, and the other Latin courses use an English-letter crutch. |
| English-letter respelling, generated | `mahn`, `khoot` | One function, so two writers cannot spell the same word two ways. This is the choice. |

The aid is required (`pron: "required"`). A writer pastes the output of `node tools/target/nl/respell.js "…"`. Hand-written prons will fail review, because the pattern is strict and the generator is the source of the string.

**What lesson 1 must teach, because the letters cannot.**

- *ui* (`uy`) and *eu* (`euh`) need rounded lips. The letters are a reminder, not a picture.
- *p*, *t*, *k* have no English puff of air.
- *r* may be a tap, a throat *r*, or an English-like *r* after a vowel (the Gooise *r*). The aid just writes `r`. An English *r* at the start of a word is the one to avoid.
- *w* is not an English *w* and not a full *v*: the lip meets the teeth. The aid writes `w`. At the start of a word, *v* and *z* often have little voice in the north and west (*vis* close to *fis*). The aid still writes `v` and `z`. Either pronunciation is understood.
- Unstressed *-ig* is a weak *kh*. The aid keeps the `kh` (`twintig` → `TWIHN-tuhkh`) so the letter is not silent. Say that it is light.
- The *n* of *-en* is dropped in the aid and may be present in the `nl-NL` voice.

### 6.2 The key

One syllable, all lowercase. More than one syllable: exactly one syllable in CAPITALS, the stressed one. Words separated by single spaces. Hyphen between syllables.

| Dutch | Token | Roughly | Do not read it as |
|---|---|---|---|
| short a, closed (*man*) | ah | father, said short | cat |
| long aa, or open a (*maan*, *manen*) | aah | father, held, no glide | English "name" |
| short e (*bed*) | eh | bed | |
| long ee, or open e (*neem*, *nemen*) | ay | a steady "ay", no glide | English "say" with a glide, and not "see" |
| short i, or y (*vis*, *hobby*) | ih | sit | see |
| ie (*fiets*) | ee | see | |
| short o (*hond*) | aw | forest, no glide | go |
| long oo, or open o (*boom*, *wonen*) | oh | a steady "oh", no glide | food (that is *oe*) |
| short u (*bus*) | ue | rounded, tongue forward | but, book |
| long uu, or open u (*muur*, *nu*) | uu | ie with rounded lips | |
| oe (*boek*) | oo | food | "oh" plus a vowel |
| eu (*deur*) | euh | French *deux*, no y | |
| ui (*huis*) | uy | no English word; start open, then round | |
| ij, ei (*ijs*, *klein*) | igh | eye, but wider | |
| au, ou (*blauw*, *koud*) | ow | cow | go |
| unstressed e, and the e of *-en* | uh | about | |
| aai, ooi, oei | aahy, ohy, ooy | | |
| eeuw, ieuw | ayw, eew | *nieuw* is `neew` | |

Consonants that are not themselves: *g* and *ch* → `kh`; *sch* → `skh`; *j* → `y`; *sj* → `sh`; *nj* → `ny`; *tj* → `ty`; *ng* → `ng`; *c* before *e* or *i* → `s`, otherwise *c* and *q* → `k`. Final *b* → `p`, final *d* → `t`, and *d* before *t* is one *t* (*wordt* → `wawrt`). A doubled consonant is said once (*mannen* has one *n* sound).

Small words, said as they are said, not as their spelling: *de* `uh`, *je* `yuh`, *ze* `zuh`, *we* `wuh`, *me* `muh`, *een* (the article) `uhn`, *het* `uht`, *te* `tuh`, *er* `uhr`. **Writers write *één* for the number.** Bare *een* is the article and becomes `uhn`. *één* → `ayn`.

*'s* plus a space joins the next word: *'s morgens* → `SMAWR-khuhs`. *zo'n* is *zo* plus a reduced *een*: `ZOH-uhn`. *auto's* and *foto's* keep the vowel long and add *s*: `OW-tohs`.

### 6.3 `pronPattern`

Built by `pronPattern()` in `respell.js` and copied into `profile.json`. Do not hand-edit the JSON string. Shape: each syllable is consonants from the set `b d f h k l m n p r s t v w y z` plus the atoms `skh kh ng ny ty sh zh`, then exactly one vowel token from the table above, then more of those consonants. A word is one lowercase syllable, or one CAPITAL syllable plus more lowercase syllables, or lowercase syllables with exactly one CAPITAL syllable in it. The validator compiles it with the `u` flag. It was checked with that flag.

Raw Dutch fails it, which is the point: `man`, `goed`, `boek`, `de`, `water`, `werken`, `niet` and `lopen` are not legal prons. A one-syllable aid can look like a Dutch word only by accident; the examples below were checked and the spellings are not their own prons.

### 6.4 Twenty worked examples

Each line is `Dutch → pron`, from the generator, and each pron matches `pronPattern`.

| Dutch | pron | What it shows |
|---|---|---|
| man | mahn | short a |
| maan | maahn | long aa |
| manen | MAAH-nuh | open syllable, one *a* is long; *-en* drops *n* |
| mannen | MAH-nuh | doubled consonant keeps the vowel short, and is said once |
| hond | hawnt | short o; final *d* is *t* |
| honden | HAWN-duh | the *d* comes back before a vowel |
| goed | khoot | *g* is `kh`; final *d* is *t* |
| school | skhohl | *sch* is `skh`, long *oo* |
| lachen | LAAH-khuh | *ch* is the same `kh` |
| vriendelijk | VREEN-duh-luhk | *-lijk* is a schwa, and so is the unstressed *e* |
| vergeten | vuhr-KHAY-tuh | *ver-* unstressed; the *e* of *ge* is long, because it is stressed |
| opbellen | AWP-beh-luh | separable prefix stressed; *bellen* is not a *be-* verb |
| de | uh | the article is a schwa |
| een | uhn | the article, not the number |
| één | ayn | the number |
| auto's | OW-tohs | apostrophe, long *o*, plus *s* |
| zo'n | ZOH-uhn | *zo een*, two syllables, stress on *zo* |
| 's morgens | SMAWR-khuhs | *'s* joins; *g* is `kh`; *-ens* drops the *n* |
| logisch | LOH-khihs | *-isch* drops the *ch* |
| café | kaah-FAY | accent marks stress; *c* before *a* is `k` |

### 6.5 What the generator still gets wrong

Stress is a heuristic: first syllable, unless the first syllable is exactly *be*, *ge*, *ver*, *ont*, *her* or *er* (and the word is not *geven*, *beter*, *verder*, *heren*, *erger*, *geen*, *geel*, *veel* or *heel*), or a listed ending takes the stress (*-tie*, *-teit*, *-eren*, *-eel*, *-aal*, *-ent*, *-eur*, *-in*, *-ij*, and a few more in the file). *her-* meaning "again" (*herindelen*) should be stressed, and the heuristic does not know that. Compounds are stressed on the first part, which is right for *voetbal* and wrong for some greetings: Wiktionary gives *goedemorgen* as `/ˌɣu.dəˈmɔr.ɣə(n)/`, primary stress on *morgen*, and the aid says `KHOO-duh-mawr-khuh`. Teach the word; do not treat the capitals as a measurement.

Whole-word fixes, so these prons are intentional:

| Word | pron | Why it is listed |
|---|---|---|
| restaurant | rehs-toh-RAHNT | French, stress last |
| cadeau | kah-DOH | French, stress last |
| station | stah-SHAWN | French; short *o*, not English "shun" |
| telefoon | tay-luh-FOHN | stress last |
| garage | khah-RAH-zhuh | *g* stays a French *zh* in the last syllable |
| chauffeur | shoh-FEUHR | *ch* is *sh* |
| chef | shehf | *ch* is *sh* |
| informatie | ihn-fawr-MAAH-tsee | *-tie* is `tsee`, stress on the syllable before it |
| politie | poh-LEE-tsee | same |
| museum | mue-ZAY-uhm | approximate; the *u* is the rounded one |
| centrum | SEHN-truhm | *-um* pulls stress back |
| universiteit | ue-nee-vehr-see-TAYT | approximate; stress on *-teit* |
| kantoor | kahn-TOHR | stress last |
| eventueel | ay-vehn-tue-AYL | loanword; the rules made a schwa of the first syllable |
| uiteindelijk | UYT-ighn-duh-luhk | *uit* keeps its *t*; the rules had split it |
| alstublieft | ahl-stue-BLEEFT | too irregular to leave to the rules |
| amsterdam, rotterdam | ahm-stuhr-DAHM, roh-tuhr-DAHM | stress last |
| nederland | NAY-duhr-lahnt | the *e* is a schwa |
| voorkomen | VOOR-koh-muhn | "to occur" only. Do not use this pron for "to prevent" |
| anna | AH-nah | the final *a* is not a long open syllable |
| ochtend, 's ochtends | AWKH-tuhnt, SAWKH-tuhns | the *e* is a schwa |

Still approximate, and not given a special fix:

- *kopje* → `KAWP-yuh`, *broodje* → `BROHD-yuh`. There is no *t* in the spelling, so the aid cannot show the *ty* of *-tje*. *kaartje* and *beetje*, which are spelled with *tj*, come out `KAAHR-tyuh` and `BAY-tyuh`. Prefer those spellings when the diminutive itself is the lesson.
- *bibliotheek* → `BIH-blih-awt-hayk`. Stress should be on the last syllable. Do not put this pron on a card until it has a whole-word fix. The traps lesson can say *bibliotheek* in the body and skip the pron, or avoid the word.
- *hallo* → `HAH-loh`, stress on the first syllable. Many speakers stress the second. Either is understood; the card note can say so.
- *Goedemorgen* stress, as above.
- *r*, *w*, *v* and the lightness of *-ig* are not in the letters. §6.1 is the place they are taught.

## 7. Standing practice rule

**Rule: the article, and the verb's seat.** Every lesson's practice set keeps re-testing both, because both are already in the first real sentences and both are still failing a long way past A1.

Two strands, one keyword list:

- **(a) de / het.** The noun is taught with its article. That choice drives *deze* / *dit* and the adjective *-e* (*een groot huis* versus *een grote auto* versus *het grote huis*).
- **(b) Where the verb sits.** Verb-second and inversion in main clauses. The finite verb at the end after *omdat* / *dat*. A separable prefix at the end of the clause (*Ik sta om zeven uur op*).

**Why these two, and not *niet* / *geen*.**

- [research-backed] Verb-final is harder than inversion for adult learners, and harder still for English speakers (Hulstijn, §4.2). It has to be practised long before the lesson that introduces it, in small doses.
- [practitioner opinion] *de* / *het* has no rule a beginner can apply, and the adjective ending is the public error teachers name next (§4.1). Durham puts both in beginners step 1.
- [inference] The validator has no exemption. The sounds lesson must be able to hit the rule. It can, the way the Spanish course does with *el* / *la*: every noun in the sounds decks is stored with *de* or *het*, and two order items plus two type items ask for that article. *niet* / *geen* cannot be asked honestly while the learner is still on *man* and *maan*. It stays in `geen-niet` and returns as a neighbour.
- *zijn* / *hebben* calques are the first thing a learner says wrong in public (§4.3) and they are not in every lesson. `zijn-hebben` owns them.

**Count** (`minOrder: 2`, `minType: 2`): in every lesson, at least two `order` items and two `type` items hinge on strand (a) or strand (b), and their `why` uses a keyword. A 14-item set has three of each, so this is two of the three.

**What counts as hinging:**

- **`order`** hinges if the `why` matches and the tiles include a real choice: *de* versus *het*, *deze* versus *dit*, an adjective with *-e* versus without, a verb before the subject versus after, a verb in the middle versus at the end, or a separable prefix in the middle versus at the end.
- **`type`** hinges if the `why` matches and the answer is wrong when the article, the *-e*, the verb's place, or the prefix's place is wrong.

Do not put a keyword on a *niet* / *geen* item, a clock item, a false-friend item, or a sounds item. Those are neighbours.

**Lessons where the hinge is least obvious:**

- `vowels` and `sounds`: the deck's nouns. `order` "the man" → *de man* (not *het*); "the house" → *het huis* (not *de*). `type` the same, with the other article in `x`. The body can say, in one sentence, that *de* and *het* both mean "the" and that the card stores which one. `de-het` explains it.
- `numbers`: *De koffie kost twee euro* (de-word) and *Hoeveel kost de koffie?* is not enough on its own. Use *Twee euro kost de koffie* against *Twee euro de koffie kost*, and say "verb second".
- `time`: *Morgen ga ik naar school* against *Morgen ik ga*, "verb second". Plus *de afspraak* as a de-word. *half drie* stays in the set and does not use a keyword.
- `traps`: *een groot huis* ("het-word", "no -e") and *Morgen ga ik niet* ("verb second"). The false friend *eventueel* does not use a keyword.

**Keywords** (`standingRule.keywords`, flags `i`):

```
\bde\/het\b|\bhet-word\b|\bde-word\b|\bneuter\b|\bcommon gender\b|\badjective ending\b|\bno -e\b|\bverb second\b|\bverb-final\b|\binversion\b|\bseparable\b|\bat the end of the clause\b
```

Bare *de*, *het*, *end* and *plural* are not keywords. *inseparable* does not match *separable*.

**Tested** with `new RegExp(keywords, "i")`:

| Sample `why` | Result |
|---|---|
| het-word: huis takes no -e after een | match |
| de-word vrouw takes the adjective ending -e | match |
| common gender: de auto | match |
| neuter: het huis | match |
| de/het: memorize huis with het | match |
| adjective ending -e because it is a de-word | match |
| no -e after een on a het-word | match |
| verb second: morgen ga ik | match |
| verb-final after omdat | match |
| inversion: the verb comes before the subject | match |
| separable: op goes to the end | match |
| the prefix sits at the end of the clause | match |
| niet goes with the verb, geen with the noun | no match |
| half drie is half past two | no match |
| the short a in man is ah | no match |
| Flemish gij is not taught | no match |
| Ik ben goed is wrong; say het gaat goed | no match |
| plural nouns add -en or -s | no match |
| the word de is a schwa | no match |
| het is three o clock | no match |
| the end of the word drops n | no match |
| eenentwintig is one word | no match |
| eventueel means possibly | no match |
| u never drops the t | no match |

## 8. Lessons (final order)

The roadmap (`docs/roadmaps/nl.json`) has 27 items. Its own note already says that splitting the sounds, moving *zijn* / *hebben* and *de* / *het* forward of the Start.nl order, putting food before the perfect, and the titles are the roadmap author's judgment. This profile makes two further changes and keeps everything else.

**Changes:**

1. **`de-het` moves up**, from after `numbers` to immediately after `zijn-hebben` and before `present`. [curriculum convention] Durham puts *de* / *het* in beginners step 1, with the present, not after it. [inference] English speakers have one word for "the". If the present tense is taught on nouns that have no article yet, every later card has to be repaired. The article is part of the noun, so it comes first. The lesson still owns the People and family deck; the grammar is short and the words are concrete.
2. **`traps` is added**, after `geen-niet` and before `time`. It holds the calques and false friends of §4.3 and §4.6, which have no roadmap slot and which show up the moment someone answers *Hoe gaat het?* `roadmap` is `""`. This is the one added lesson. The course is then 28, which is the maximum. Do not add another.

Nothing is merged, renamed as a different grammar point, or dropped. Ids lose the `nl-` prefix. Titles below are the learner-facing titles; the roadmap sentence can stay in the writer's notes.

| # | id | Title | Roadmap | Deck |
|---|---|---|---|---|
| 1 | vowels | Vowels and spelling | nl-vowels | Sounds and spelling |
| 2 | sounds | The hard sounds | nl-sounds | Hard sounds |
| 3 | greetings | Greetings and how are you | nl-greetings | Greetings and courtesy |
| 4 | intro | Introducing yourself | nl-intro | About me |
| 5 | zijn-hebben | zijn and hebben | nl-zijn-hebben | Feelings and states |
| 6 | de-het | de and het | nl-de-het | People and family |
| 7 | present | The present tense | nl-present | Work and school |
| 8 | pronouns | Pronouns and possessives | nl-pronouns | People and family |
| 9 | numbers | Numbers and prices | nl-numbers | Numbers, time and prices |
| 10 | plural | Plurals | nl-plural | Home and routine |
| 11 | inversion | The verb in second place | nl-inversion | Questions and connectors |
| 12 | questions | Questions | nl-questions | Questions and connectors |
| 13 | geen-niet | niet and geen | nl-geen-niet | Traps for English speakers |
| 14 | family | Family | nl-family | People and family |
| 15 | traps | Traps for English speakers | | Traps for English speakers |
| 16 | time | The clock and the calendar | nl-time | Days, dates and weather |
| 17 | separable | Separable verbs | nl-separable | Home and routine |
| 18 | modals | kunnen, willen, mogen, moeten | nl-modals | Likes and free time |
| 19 | shopping | Shopping | nl-shopping | Shopping and clothes |
| 20 | diminutives | Diminutives | nl-diminutives | Food and drink |
| 21 | food | Ordering food and drink | nl-food | Food and drink |
| 22 | travel | Directions | nl-travel | Around town and directions |
| 23 | er | er is and er zijn | nl-er | Home and routine |
| 24 | deze-die | deze, dit, die, dat | nl-deze-die | Shopping and clothes |
| 25 | perfect | The perfect | nl-perfect | Travel and transport |
| 26 | adjectives | Adjective -e | nl-adjectives | Shopping and clothes |
| 27 | compare | Comparing | nl-compare | Shopping and clothes |
| 28 | omdat | omdat and dat | nl-omdat | Questions and connectors |

`de-het` before `present` is the only reorder. `family` stays where the roadmap put it, after negation, so the connectors *en*, *maar*, *of*, *want* still have a sentence to live in. Several lessons share a deck. That is deliberate: the deck is the word list, the lesson is the grammar.

## 9. Decks

17 decks, 5 groups. A card is `target | pron | meaning | note`. Nouns go on the card with *de* or *het*. The five sample rows under each deck were run through `respell.js` and match `pronPattern`. They are samples, not the whole deck. Writers add cards until `validate.js` is happy with the count; this stage does not build the decks.

**Groups**

- First steps: Sounds and spelling; Hard sounds; Greetings and courtesy; About me
- Everyday words: People and family; Numbers, time and prices; Days, dates and weather; Food and drink; Shopping and clothes; Home and routine
- Out and about: Around town and directions; Travel and transport; Work and school
- Conversation: Feelings and states; Likes and free time; Questions and connectors
- Watch out: Traps for English speakers

### Sounds and spelling

Short and long vowels, and the spelling that keeps them. Group: First steps.

| target | pron | meaning | note |
|---|---|---|---|
| de man | uh mahn | the man | short a, closed syllable |
| de maan | uh maahn | the moon | long aa |
| de manen | uh MAAH-nuh | the moons | one a in an open syllable is long |
| de fiets | uh feets | the bike | ie is the ee of "see" |
| wonen | WOH-nuh | to live | one o in an open syllable is long |

### Hard sounds

*g*, *ch*, *ui*, *eu*, *sch*, final devoicing. Group: First steps.

| target | pron | meaning | note |
|---|---|---|---|
| goed | khoot | good | g is kh, final d sounds like t |
| acht | ahkht | eight | ch is the same kh |
| het huis | uht huys | the house | ui; het-word |
| de deur | uh deuhr | the door | eu, lips rounded |
| de school | uh skhohl | the school | sch is s plus kh |

### Greetings and courtesy

Hello, goodbye, please, thanks, *je* and *u*. Group: First steps.

| target | pron | meaning | note |
|---|---|---|---|
| Hallo. | HAH-loh | Hello. | stress is often on the second syllable too |
| Goedemorgen. | KHOO-duh-mawr-khuh | Good morning. | the middle e is a schwa |
| Hoe gaat het? | hoo khaaht uht | How are you? | the answer is het gaat, not ik ben |
| Dank je wel. | dahnk yuh wehl | Thank you. | je, to a friend |
| Alstublieft. | ahl-stue-BLEEFT | Here you are. / Please. | u, to a stranger |

### About me

Name, city, where you are from. Group: First steps.

| target | pron | meaning | note |
|---|---|---|---|
| Ik heet Anna. | ihk hayt AH-nah | My name is Anna. | heet, not ben |
| Ik kom uit Nederland. | ihk kawm uyt NAY-duhr-lahnt | I come from the Netherlands. | |
| Ik woon in Utrecht. | ihk wohn ihn UU-trehkht | I live in Utrecht. | |
| Ik studeer. | ihk STUU-dayr | I study. | a role takes no article: Ik ben student |
| Ik spreek een beetje Nederlands. | ihk sprayk uhn BAY-tyuh NAY-duhr-lahnds | I speak a little Dutch. | een is the article |

### People and family

People, family, and the article that goes with them. Group: Everyday words. Lessons: `de-het`, `pronouns`, `family`.

| target | pron | meaning | note |
|---|---|---|---|
| de man | uh mahn | the man | de-word |
| de vrouw | uh vrow | the woman | de-word |
| het meisje | uht MIGH-shuh | the girl | a diminutive is a het-word |
| mijn moeder | mighn MOO-duhr | my mother | |
| een vriend | uhn vreent | a (male) friend | final d sounds like t |

### Numbers, time and prices

Numbers, euros, and "how late". Group: Everyday words.

| target | pron | meaning | note |
|---|---|---|---|
| drie | dree | three | |
| eenentwintig | AY-nuh-twihn-tuhkh | twenty-one | one word |
| Hoe laat is het? | hoo laaht ihs uht | What time is it? | not wat tijd |
| Het is half drie. | uht ihs hahlf dree | It is half past two. | halfway to three |
| twee euro | tway EUH-roh | two euros | |

### Days, dates and weather

Days, parts of the day, weather words as they get added. Group: Everyday words.

| target | pron | meaning | note |
|---|---|---|---|
| maandag | MAAHN-dahkh | Monday | no capital |
| vandaag | VAHN-daahkh | today | |
| 's ochtends | SAWKH-tuhns | in the mornings | space after 's, not a hyphen |
| Het is kwart over drie. | uht ihs kwahrt OH-vuhr dree | It is quarter past three. | |
| morgen | MAWR-khuh | tomorrow | also the word for morning |

### Food and drink

Ordering, and the little *-je*. Group: Everyday words. Lessons: `diminutives`, `food`.

| target | pron | meaning | note |
|---|---|---|---|
| een koffie | uhn KAW-fee | a coffee | |
| een broodje | uhn BROHD-yuh | a sandwich | the aid has no t; the spoken form is closer to ty |
| Mag ik de kaart? | mahkh ihk uh kaahrt | May I have the menu? | de kaart, not de map |
| Ik wil graag water. | ihk wihl khraahkh WAAH-tuhr | I'd like some water. | |
| de friet | uh freet | the chips | |

### Shopping and clothes

Prices, clothes, *this* and *that*, adjective *-e*. Group: Everyday words. Lessons: `shopping`, `deze-die`, `adjectives`, `compare`.

| target | pron | meaning | note |
|---|---|---|---|
| Wat kost dat? | waht kawst daht | How much is that? | |
| een groot huis | uhn khroht huys | a big house | het-word, no -e |
| het grote huis | uht KHROH-tuh huys | the big house | -e after het |
| de rode jas | uh ROH-duh yahs | the red coat | de-word, so -e |
| een euro | uhn EUH-roh | one euro | |

### Home and routine

The house, getting up, *er*. Group: Everyday words. Lessons: `plural`, `separable`, `er`.

| target | pron | meaning | note |
|---|---|---|---|
| Ik sta om zeven uur op. | ihk staah awm ZAY-vuh uur awp | I get up at seven. | op at the end |
| de kamer | uh KAAH-muhr | the room | |
| Er is een bed. | uhr ihs uhn beht | There is a bed. | |
| de keuken | uh KEUH-kuh | the kitchen | |
| opstaan | AWP-staahn | to get up | the prefix is stressed |

### Around town and directions

Left, right, straight on. Group: Out and about.

| target | pron | meaning | note |
|---|---|---|---|
| links | lihnks | left | |
| rechts | rehkhts | right | |
| rechtdoor | REHKHT-dohr | straight ahead | |
| Waar is het station? | waahr ihs uht stah-SHAWN | Where is the station? | |
| Ga rechtdoor. | khaah REHKHT-dohr | Go straight ahead. | |

### Travel and transport

Trains, tickets, and later the perfect. Group: Out and about.

| target | pron | meaning | note |
|---|---|---|---|
| de trein | uh trighn | the train | |
| het station | uht stah-SHAWN | the station | stress on the last syllable |
| een kaartje | uhn KAAHR-tyuh | a ticket | -tje is ty |
| Ik neem de trein. | ihk naym uh trighn | I'm taking the train. | |
| Van welk spoor? | vahn wehlk spohr | Which platform? | |

### Work and school

Work, study, the present tense. Group: Out and about.

| target | pron | meaning | note |
|---|---|---|---|
| Ik werk in Utrecht. | ihk wehrk ihn UU-trehkht | I work in Utrecht. | |
| Ik moet werken. | ihk moot WEHR-kuh | I have to work. | |
| de docent | uh doh-SEHNT | the teacher | c before e is s |
| het kantoor | uht kahn-TOHR | the office | stress last |
| student | stuu-DEHNT | student | |

### Feelings and states

*zijn*, *hebben*, and how you feel. Group: Conversation.

| target | pron | meaning | note |
|---|---|---|---|
| Het gaat goed. | uht khaaht khoot | I'm fine. | not ik ben goed |
| Het gaat wel. | uht khaaht wehl | I'm all right. | Start.nl also uses this |
| Ik ben moe. | ihk behn moo | I'm tired. | moe takes zijn |
| Ik heb honger. | ihk hehp HAWNG-uhr | I'm hungry. | hebben, not zijn |
| Ik heb het koud. | ihk hehp uht kowt | I'm cold. | not ik ben koud |

### Likes and free time

*willen*, *kunnen*, *moeten*, *mogen*. Group: Conversation.

| target | pron | meaning | note |
|---|---|---|---|
| Ik wil fietsen. | ihk wihl FEET-suh | I want to cycle. | |
| Ik wil graag fietsen. | ihk wihl khraahkh FEET-suh | I'd like to cycle. | |
| Dat is leuk. | daht ihs leuhk | That's nice. | |
| in het weekend | ihn uht WAY-kehnt | at the weekend | |
| een hobby | uhn HAW-bih | a hobby | |

### Questions and connectors

Questions, verb-second, *omdat*. Group: Conversation. Lessons: `inversion`, `questions`, `omdat`.

| target | pron | meaning | note |
|---|---|---|---|
| Wat? | waht | What? | |
| Waar woon je? | waahr wohn yuh | Where do you live? | je after the verb, so no -t |
| omdat | AWM-daht | because | the verb goes to the end |
| maar | maahr | but | |
| en | ehn | and | |

### Traps for English speakers

Calques and false friends. Group: Watch out. Lessons: `geen-niet`, `traps`.

| target | pron | meaning | note |
|---|---|---|---|
| eventueel | ay-vehn-tue-AYL | possibly, if needed | not "eventually" |
| uiteindelijk | UYT-ighn-duh-luhk | in the end, eventually | |
| slim | slihm | clever | not "thin" |
| Het gaat goed. | uht khaaht khoot | I'm fine. | the answer to hoe gaat het |
| een groot huis | uhn khroht huys | a big house | not een grote huis |

## 10. Typing and script

`targetScript` is `[A-Za-zÁÉÍÓÚáéíóúëïöËÏÖ]`. That covers the Dutch alphabet plus the accents a beginner writes. *ij* is *i* then *j*, not a separate key.

`accents` is `true`: the accent is part of the right answer, and a missing accent is "almost", not wrong. `keys` is `é ë ï`.

- *é* in *één* (the number) and in *café*. *één* versus *een* is a strict item when the lesson is the number, because the meanings differ, not because the engine needs a new rule.
- *ë* and *ï* mark a syllable break: *coördinatie*. The generator turns the diaeresis into a break and then respells (`koh-awr-dih-NAAH-tsee`).
- *è* (*crème*) is rare at A1. Do not put those words in the typed answers.

**Apostrophes.** The engine already keeps an apostrophe in the middle of a word and already treats a missing one as "almost". *auto's* typed as *autos*, and *zo'n* typed as *zon*, come back as almost. No engine change.

[curriculum convention] Onze Taal, opened: *'s avonds* has a space, not a hyphen. The same pattern is *'s morgens*, *'s ochtends*, *'s middags*, *'s nachts*, *'s zomers*, *'s winters*. At the start of a sentence the capital goes on the next word (*'s Avonds*). Place names with *'s-* take a hyphen (*'s-Hertogenbosch*, *'s-Gravenhage*). A straight apostrophe and a curly one are both accepted by the engine, because it folds the curly one to a straight one before it compares.

[curriculum convention] Inburgering.org, opened: *zo'n* is *zo een*, singular only, always with the apostrophe. *zon* without it is the sun. The plural is *zulke*. *zo'n grote auto*, *zo'n groot huis*: the adjective follows the *een* rule, because *zo'n* still contains *een*.

**Leading *'s*.** The engine strips an apostrophe at the edge of the answer. *'s morgens* typed as *s morgens* therefore matches. That is acceptable. Teach the spelling with the apostrophe; do not make a strict item out of the leading mark.

**Capitals and punctuation.** Ignored by the engine, as in the other courses. Days and months are lowercase in Dutch (*maandag*). The learner's capital *Maandag* still matches.

## 11. Gaps and unverified claims

- No count of how many English speakers study Dutch was opened. §5 does not invent one.
- Hulstijn's 32 learners were selected because they were in the middle of acquiring the two rules, and 16 of them were English-speaking. The 83% / 47% figures are that task, not a classroom. The 157-person means are a written correction test, not speech.
- The iamexpat and Learn Dutch Online and Boost Your Language items are each one teacher's or one school's experience. They agree with each other and with the textbooks on the same short list. They are not a corpus.
- The adjective page is the Flemish government's advice. The rule it states for *-e* is the one Netherlands courses teach as well. The page's note that Belgian headlines often drop *-e* is why this course does not teach headline style. A Netherlands-only official page for the same rule was not opened.
- *half drie* is cited from TaalTaal. A second timetable source was not opened. The "halfway to" explanation is the one that page gives.
- Stress in the aid is a rule of thumb plus a short exception list (§6.5). *goedemorgen*, *hallo*, *bibliotheek* and any *her-* that means "again" are the known weak spots.
- Whether the `nl-NL` voice drops the *n* of *-en* was not checked against a recording in this stage. The lesson should say the aid drops it and the voice may keep it.
- *kopje* and *broodje* are approximate (§6.5). Writers who need the diminutive sound should spell *-tje*.
- The present-tense *-t* rule is cited from a textbook preview (Oosterhoff), not from a free grammar page: the UCL page returned 401 when this stage tried to open it. The preview's unit 3 table was read.
- Food examples on the sample cards (*koffie*, *broodje*, *friet*, *water*) are ordinary and were not taken from a menu source. They are fine as deck words. A regional dish should wait until a source is opened.
- No claim is made about how often *u* is offered or refused in shops. The teaching line is the *Start.nl* line: when unsure, *u*.

## Sources

Pages and files actually opened.

- *Start.nl deel 1* preview (Verbruggen and Hoogvorst, 2nd revised ed., Coutinho 2017): https://www.nt2.nl/media/60/9789046905661_inkijk_start.nl_deel_1.pdf
- Durham University, Dutch language courses contents summary: https://www.durham.ac.uk/media/durham-university/research-/research-centres/centre-for-foreign-language-study/downloads/Dutch-language-courses-contents-summary.pdf
- Hulstijn, "Difficulties in the acquisition of two word order rules by adult learners of Dutch" (the chapter page on the University of Amsterdam repository): https://handle.uba.uva.nl/personal/pure/en/publications/difficulties-in-the-acquisition-of-two-word-order-rules-by-adult-learners-of-dutch(009a23f1-03e1-4f75-b1bc-e0e377d3d949).html
- Oosterhoff, *Basic Dutch: A Grammar and Workbook*, 2nd ed., Routledge, 2024. Preview opened; the book DOI printed in that preview is https://doi.org/10.4324/9781003223122
- iamexpat, "What's it like teaching Dutch to internationals?", 22 March 2023: https://www.iamexpat.nl/education/education-news/interview-whats-it-teaching-dutch-internationals
- Bart de Pau, "Mistakes when learning Dutch": https://www.learndutch.org/beginners/mistakes-when-learning-dutch/
- Boost Your Language, "Common mistakes English speakers make when learning Dutch": https://boost-your-language.com/blog/common-mistakes-english-speakers-learning-dutch.html
- The Dutch Online Academy, Dutch pronunciation: https://thedutchonlineacademy.com/en/dutch-pronunciation
- The Dutch Online Academy, false friends: https://thedutchonlineacademy.com/en/grammar/false-friends
- Learn Dutch, pronunciation guide: https://learn-dutch.com/blog/dutch-pronunciation-guide
- Dutch Fluency, word stress: https://www.dutchfluency.com/grammar/word-stress
- Taaladvies (Vlaanderen), adjective *-e*: https://www.vlaanderen.be/team-taaladvies/taaladviezen/bijvoeglijke-naamwoorden-verbuigen-verbuiging-met-of-zonder-e
- Onze Taal, *'s avonds*: https://onzetaal.nl/taalloket/s-avonds
- TaalTaal, telling the time: https://www.taaltaal.nl/knowledge/dutch/telling-the-time
- Inburgering.org, *zo'n*, *zulke*, *dergelijk*: https://inburgering.org/nl/grammar/zon-zulke-dergelijk
- Wiktionary, *goedemorgen* (stress): https://en.wiktionary.org/wiki/goedemorgen
- Roadmap: `source/docs/roadmaps/nl.json`
- Spanish profile used as the shape model: `source/docs/profiles/en-es.md`
- Matcher, not modified: `source/src/app.html` (apostrophe kept inside a word; a missing accent is "almost" when `accents` is true)
