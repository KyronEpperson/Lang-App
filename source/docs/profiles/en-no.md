# English speakers learning Norwegian: course profile

Course id `en-no`. Explanations, prompts and notes are in English. Answers, examples and card targets are Norwegian Bokmål. Closest finished course on this branch: German (`docs/profiles/en-de.md`). Swedish is not on this branch. `src/app.html` was not opened.

## 1. Summary

Teach Norwegian Bokmål with East Norwegian (Oslo) pronunciation, the variety NTNU's *Norwegian on the Web* (NoW) calls spoken Bokmål / Central Eastern Norwegian. Nynorsk and the dialects exist; they are named once and never drilled. English speakers already share a lot of vocabulary and a familiar word order, and the verb has one present form for every person. The lasting work is gender (three genders, the definite ending, adjective agreement, double definiteness) and verb second, including where *ikke* goes. The spelling hides length, the letter *o*, *kj* versus *skj*, and several silent letters, so every card and example carries a generated English-letter pronunciation. Pitch accent is real and is left to the audio. *du* is the only *you* the course asks learners to produce. Typed answers use *ei* and *-a* for feminine nouns and *-et* for the past of *snakke*-type verbs.

## 2. Variant, register and voice

### 2.1 Variant: Bokmål, East Norwegian

[curriculum convention] The roadmap's variant is "Norwegian Bokmål, standard East Norwegian pronunciation", voice `nb-NO`. NoW's introduction says there is no single spoken standard, and that the course uses forms close to Trondheim and Oslo and the Central Eastern Norwegian sound system, which it shortens to "spoken Bokmål". This course follows that choice and calls it East Norwegian. Oslo is the city in the examples.

[curriculum convention] Norway has two written standards, Bokmål and Nynorsk, and people speak dialects. That sentence belongs in `intro`, once. No deck, no exercise, and no alternate spelling is built for Nynorsk or for a dialect.

### 2.2 Spelling house rules

Untagged rules in this section are the course's decisions.

**Gender.** Bokmål can be written with three genders or with two (common gender + neuter). [curriculum convention] Språkrådet (2023), quoting the 1981 spelling reform: every traditional feminine noun may take *ei* or *en* in the indefinite, and *-a* or *-en* in the definite. NoW chapter 1 writes *ei jente, jenta* and notes that feminine nouns can take *en* instead of *ei*. Språkrådet also notes that a common Bokmål pattern is *ei jente – jenta* beside *en klokke – klokka*, and that many speakers who say *en klokke* still say *klokka*.

House rule, used in every example and every accepted typed answer:

- Masculine: *en bil, bilen*.
- Feminine: *ei bok, boka*. The indefinite *ei* keeps the gender visible, which is what NoW does.
- Neuter: *et hus, huset*.
- Common-gender *en bok / boken* is recognition only, one note in `gender` (signs, news, some speakers). It is not an accepted typed answer.

The indefinite adjective has no separate feminine form: *en stor bil, ei stor bok, et stort hus*. The exception taught with it is *liten → lita* (*ei lita bok*). Do not invent *ei stora bok*.

**Past tense.** [curriculum convention] NoW's past-tense tables use *-et* for the first group (*snakket, vasket, laget*) and *-te / -de / -dde* for the others (*kjøpte, spiste, bodde*). Typed answers use those spellings. A form such as *snakka* is mentioned once in `past` as something learners will hear and sometimes read; it is not an accepted typed answer. That limit on *snakka* is [inference]: this pass did not open a spelling-norm page that lists both endings.

**Capitals.** [practitioner opinion] Languages, nationalities, days and months are lower case: *norsk, januar, mandag* (norskgrammatikk.com). Capitals mark names of people and places, the start of a sentence, and the formal pronouns *De, Dem, Deres*. The word *i* ("in") is not a capital the way English *I* is. The matcher ignores capitals, so this is taught in multiple choice and never marked wrong in a typed answer.

### 2.3 Forms of "you"

[curriculum convention] Språkrådet (updated 1 January 2024): *De, Dem, Deres*, written with a capital, still exist when a writer wants extra politeness or distance. They are used much less than before. *De* can sound distant or brusque. Public bodies use *du*, and that *du* is unmarked, not impolite. *dere* (small *d*) is the plural "you", including when writing to an office.

House rule:

- *du* (object *deg*, possessive *din*) is the only singular "you" in typed answers, including to strangers, shop staff and a boss.
- *dere* is the plural, from `present` on. A prompt that means several people says "(to several people)".
- *De* is recognition only, one note in `greetings`. No formal cue on every prompt. This is the reverse of the German course, which teaches *Sie* first.

Examples address people the way NoW does: first names (*Anna, Kari, Lars*) and *du*, including to staff.

### 2.4 Voice of the English text

US English. "Apartment", "soccer" only if needed, "grade" not "mark". Glosses say "the car", "a book", "I'm cold". Grammar terms are the ones in §3, the same term every time.

### 2.5 Roadmap items this variant changes

- `gender` moves from stage 3 to immediately after `intro`, before `present`. NoW chapter 1 teaches *en / ei / et* with the first nouns. An English speaker who learns bare nouns keeps them.
- One lesson is added: `traps`. The Compliments deck is not a new lesson. It is the deck of the existing `food` lesson. The Food and drink deck is then the deck of `definite`. The Travel and transport deck is the deck of `modals`. See §8.

## 3. Glossary

Use these English terms, each as defined here.

| Term | Use it for | Do not also call it |
|---|---|---|
| masculine | *en*-nouns: *en bil, bilen* | en-word, except once as a nickname in `gender` |
| feminine | *ei*-nouns: *ei bok, boka* | common gender (that phrase is the recognition note only) |
| neuter | *et*-nouns: *et hus, huset* | "it-word" |
| indefinite article | *en, ei, et* | "a-word" |
| definite ending | *-en, -a, -et* on the noun | "the suffix" as the main name |
| double definiteness | *den store bilen*: *den / det / de* plus the ending | "double definite article" |
| verb second | the conjugated verb is the second element of a main-clause statement | V2 |
| second element | a phrase can be first: *I dag* is one element | "second word" |
| conjugated verb | the verb that carries the tense: *snakker, er, kan* | "finite verb" as the main name |
| infinitive | the *å* form: *å snakke* | "dictionary form" |
| present tense | the *-r* form, one form for every person: *jeg snakker, du snakker* | "present simple" |
| modal verb | *kan, vil, skal, må* (no *-r*) | "helping verb" for these four |
| past tense | *snakket, var, hadde, kjøpte* | preterite, Perfekt |
| object pronoun | *meg, deg, ham, henne, den, det* | "accusative" (Norwegian articles have no case) |
| reflexive verb | *sette seg, vaske seg* | |
| reflexive pronoun | *meg, deg, seg* in *jeg setter meg* | |
| possessive | *min, mi, mitt, mine* | |
| reflexive possessive | *sin, si, sitt, sine* when the owner is the subject | "one's" |
| question word | *hva, hvor, hvem, når, hvordan, hvorfor* | "wh-word" |
| yes/no question | the conjugated verb comes first: *Snakker du norsk?* | |
| pitch accent | the two word tones; audio only, never in the spelling aid | "tone" as a spelling mark |
| false friend | a word that looks like English and means something else | "cognate" for these |
| calque | a word-for-word copy of an English phrase | |

*en-word, ei-word, et-word* may appear once in `gender` as nicknames, then the lesson says masculine, feminine, neuter. The standing-rule regex still matches the nicknames, so a why-line may use either.

## 4. Error zones of English speakers, ranked

No English-L1 learner corpus was opened. The ranking is [inference] from three opened sources plus what is in every sentence: NoW's chapter order [curriculum convention], the 27-mistake teaching page at norskgrammatikk.com [practitioner opinion], and the false-friend table at elon.io [practitioner opinion]. Verb endings are a non-problem: one present form covers every person [curriculum convention, NoW]. That is good news in `present`, not a trap.

### 4.1 Gender, the definite ending, agreement, double definiteness

In every noun phrase. [practitioner opinion] *Jeg liker den store bil* → *den store bilen*. *Huset er stor* → *Huset er stort*. *Hun er en lærer* is grammatical and less usual; NoW and the mistakes page both prefer *Hun er lærer*, and *Hun er en god lærer* when an adjective is there. Trap inside the house rule: writing *en bok* where the course wants *ei bok*.

### 4.2 Verb second, and where *ikke* goes

[practitioner opinion] *I dag jeg jobber* → *I dag jobber jeg*. *Jeg alltid drikker kaffe* → *Jeg drikker alltid kaffe*. *Jeg snakker ikke* (after the verb); *I dag snakker jeg ikke*; *Jeg kan ikke komme* (*ikke* before the infinitive). "Second element", not "second word": *I dag* is one element.

### 4.3 No *do*

[practitioner opinion] *Gjør du snakker norsk?* → *Snakker du norsk?* *Jeg gjør ikke snakke* → *Jeg snakker ikke*. *gjøre* means "do something" (*Hva gjør du?*).

### 4.4 Pronunciation

[curriculum convention, NoW pronunciation] The alphabet does not show long versus short (*tak* `tah:k` roof, *takk* `tahk` thanks). Letter *o* is `oo` when long (*bok* `boo:k`) and usually `oh` when short (*komme* `KOHM-uh`). *u, y, ø, æ* have no English letter. *kj* is `hy` (the *h* of "huge"), *skj / sj / rs* are `sh`. Silent *d, g, h, t* in the sets in §6. Pitch distinguishes some pairs (*loven / låven* in NoW) and is not in the aid. Younger speakers often merge *kj* with *sj* [practitioner opinion, same mistakes page]; the aid keeps them apart, matching NoW's teaching pronunciation, and `consonants` says so for listening.

### 4.5 False friends

[practitioner opinion, elon.io] Each line is the Norwegian word, what it means, and the word to use for the English look-alike.

| Norwegian | Means | For the English word, say |
|---|---|---|
| gift | married, or poison | a present = *en gave* |
| eventuelt | possibly | eventually = *til slutt / etter hvert* |
| aktuell | current, relevant | actual = *faktisk* |
| spent | excited | spent (money) = *brukte* |
| rar | strange | rare = *sjelden* |
| snill | kind | |
| time | an hour, or an appointment | time in general = *tid* |
| fabrikk | a factory | fabric = *stoff* |
| full | full of a container; of a person, drunk | full of food = *mett* |
| sky | a cloud, or shy | the sky = *himmelen* |
| billig | cheap | a bill = *en regning* |
| barn | a child | a barn (building) = *en låve* |

Also [practitioner opinion, norskgrammatikk.com]: *rolig* means calm (*morsom* or *gøy* is fun); *flink* is "good at it", *god* is good quality; *vil* is "want", age is *bli* (*Jeg blir 30*), plans are *skal*. Two traps for learners who know Swedish or Danish, stated once in `traps` as [inference] from the author's knowledge and not from a page opened here: *semester* is a school term (*ferie* is a holiday); *frokost* is breakfast (*lunsj* is lunch).

### 4.6 Calques

[practitioner opinion] *Jeg er kald* → *Jeg fryser* (I'm cold). *Jeg er full* after dinner → *Jeg er mett*. *Jeg har å gå* → *Jeg må gå*. *Takk for å hjelpe* → *Takk for hjelpen* or *Takk for at du hjalp meg*. *Jeg vil være 30* → *Jeg blir 30*. *Jeg er hjem* → *Jeg er hjemme* (place); *Jeg går hjem* (direction). *Jeg tenker at filmen var bra* as an opinion → *Jeg synes*; *Jeg tror* is a guess; *tenke* is the act of thinking.

### 4.7 *sin* versus *hans*, and *den* versus *det*

[practitioner opinion] *Ola vasker bilen hans* means someone else's car. *Ola vasker bilen sin* means his own. *sin* is not the standing rule: it is not in every sentence. It is the neighbour item in `possessives`. *Hvor er boka? Den ligger på bordet* (*den* for masculine and feminine, *det* for neuter).

### 4.8 The clock, prepositions, capitals

[curriculum convention, NoW chapter 2] *halv to* is 13:30, *kvart over ett* is 13:15, *kvart på to* is 13:45, *ti på halv to* is 13:20. *halv tre* is 2:30. [practitioner opinion] Duration is *i to år*; "ago" is *for to år siden*; after *ikke*, a length of time is *på to år*. *tenke på*, not *tenke om*. Capitals: §2.2.

## 5. Learners: who, why, what first

[research-backed, census via Wikipedia] More than 4.5 million Americans reported Norwegian ancestry in the 2021 census. Home use of the language is small: 55,475 speakers in 2000, 39,524 in the 2005 American Community Survey, and 28,937 in the 2020 table on the same page. Heritage is a real motive, and few of those families still speak Norwegian at home. The Wikipedia "most can say hello" line is marked citation needed there; it is not used here.

Other motives are [inference]: a partner or family in Norway, travel, work or study, and the pleasure of a language that looks approachable. No survey of why US adults choose Norwegian was opened. The State Department training-hours page returned an error, so no hour figure is cited.

What they need first, in this order:

1. The sound of the aid (§6), or every later card is unreadable.
2. *Hei, takk, ha det*, and *du*.
3. *Jeg heter…, Jeg kommer fra…*, then *en / ei / et* on the first nouns (NoW chapter 1).
4. The one present form, then verb second the first time a sentence starts with *i dag*.
5. Numbers, *Hva koster det?*, and *halv tre* before a learner is in a shop or at a bus stop.

[curriculum convention] NoW chapters 1–5, confirmed on the NTNU table of contents: chapter 1 pronouns, present, three genders, questions, word order, numbers; chapter 2 object pronouns, modal + infinitive, definite nouns, days, time, directions; chapter 3 reflexives, adjectives, colours, ordinals; chapter 4 demonstratives, food, clothes; chapter 5 past tense. Present perfect, subordinate-clause word order, and *sin* sit in chapters 6–8 and are outside this course. Possessives are in the roadmap as course practice (NoW puts them in chapter 7); they stay, late. The roadmap split sounds into three lessons; this profile keeps that split because the aid needs an alphabet lesson, a length lesson, and a consonant lesson. Gender moves up (§2.5). Treating chapters 1–5 as A1 is the roadmap author's judgment, kept here.

## 6. Pronunciation aid (`pron`)

**Evidence.** No study comparing a respelling, IPA and no aid for this pair was opened. The choice is [inference], as in the German course. The sound facts are [curriculum convention] from NoW's pronunciation chapters (Hillestad, Husby, Øvregaard, Robbins): length, the extra values of *o, u, e*, diphthongs, silent letters, *kj / skj / rs / ng*, stress, and the statement that tones are not discussed in that introductory course and are not marked on individual words there.

**Options.**

| Option | For | Against |
|---|---|---|
| (a) English-letter respelling, generated | Readable on day one. Same shape as the Spanish and German tools, so the validator needs nothing new. Shows length, stress, *kj* versus *skj*, and the silent letters. | Cannot show pitch, the exact *u / y / ø*, the tapped *r*, or the retroflex place of *rt, rn, rl*. The letter *o* and some loan stresses need a word list. |
| (b) IPA | Exact, and it is what NoW prints. | A US adult self-learner cannot read it on day one [inference]. |
| (c) No aid | Bokmål spelling is regular. | It does not mark length, and *kj, o, u, y* and silent *d* are misread in the first lesson. |

**Decision: (a).** `pron: "required"`.

The aid is generated by `tools/target/no/respell.js`. `node tools/target/no/respell.js "<text>"` prints `<text> -> <pron>`. The module exports `respell` and `pronPattern`. Every pronunciation in this profile was printed by that command and matches `pronPattern()`. A writer never types a pronunciation. A wrong one is fixed by adding the word to `LEX` and re-running.

**How a word is analysed**, in this order:

1. `LEX`: names, the short function words, loan stress, and the words whose *o* or silent letter the rules get wrong.
2. A final *-et* on a word of four letters or more drops the *t* before analysis (*huset* → the vowel of *huse*). *det* and the article *et* are not stripped.
3. *eg* not before a vowel, and not *egg*, is the diphthong `ai` and the *g* is silent (*jeg, regn, tegne*).
4. Length: consonant letters after the vowel and before the next vowel. *skj, sj, kj, gj, tj, rs, rd, rn, rl* count as one. *ng* counts as two. Anything else counts as one letter each. Weight under 2 means long. A long vowel is marked with a colon. An unstressed vowel is never long (NoW: length belongs to the stressed syllable).
5. *e* before *r* in that gap becomes `ae`, except a final *-er* ending (*snakker, biler*) and the list *dere, deres, flere, fler, mere, periode, serie*.
6. Letter *o*: long is `oo` (*bok, to, tog*), short is `oh` (*komme, norsk*). `O_OH` forces the å-sound on a long *o* (*sove, love, lov, over*). `O_OO` forces `oo` on a short *o* (*ost, blomst, loft, kost, rom*).
7. Consonant values: *j* = `y`; *gj* and *g* before *i, y, ei* = `y`; *kj, tj*, and *k* before *i, y, ei, øy* = `hy`; *skj, sj*, *sk* before *i, y, ei, øy*, and *rs* = `sh`; *hv* = `v`; *hj* = `y`; *ng* and *nk* = `ng`; *ld, nd, rd* drop *d* at the end of a word and before another consonant, and keep *d* before a vowel (*mandag, ferdig*); word-final *d* after a vowel is silent (*med, god*); *dt* is `t` (*godt*). *rt, rn, rl* stay as those letters so the retroflex stays visible. *c* before *e, i, y, æ, ø* = `s`, otherwise `k`; *z* = `s`; *w* = `v`; *qu* = `kv`; *x* = `ks`. There is no final devoicing: *dag* stays `dah:g`.
8. Stress: the first syllable, except *-ere* (penultimate, three or more syllables), *-sjon / -sion* (final), *-ent* (final), *-ikk* (final), *-tet* (final, three or more syllables). A doubled consonant is written once and closes the short vowel (*komme* `KOHM-uh`, *ikke* `EEK-uh`).
9. A word of three or more syllables that kept the default stress and contains *c, w, z* or *x* prints `respell: check stress` on stderr. Stdout stays `<text> -> <pron>`. The warning does not catch *fotografi, avis, problem, Amerika*. Those go in `LEX` when a writer meets them.

**How reliable it is.** The expected strings are the author's reading of NoW's rules, not a recording [inference]. A native should spot-check (§11).

- **NoW's own examples** (61 words: *tak / takk / ta*, *vin / vinn / vind / vink*, *komme, jobbe, er, her, de, spise, telle, fortelle, studere, student, kald, bord, med, gjøre, hyggelig, hjelpe, hvor, flyet, det, stasjon, skjema, skinke, kurs, kjøpe, kino, kylling, tjue, gjerne, ærlig, norsk, lang, mange, bank, engelsk, lærer, hei, sau, øy, kai, hvordan, Norge, lege, legge, bilen, tog, god, godt, ost, rom, nummer, ja, og, ikke, huset*). 61 of 61 matched the key, and every output matched `pronPattern()`.
- **Twelve loans and names outside the suffix rules and outside `LEX`** (*fotografi, interesse, Amerika, Europa, restaurant, avis, problem, sjåfør, Kanada, ferdig, torsdag, lunken*). Seven are clearly wrong on stress or on the vowel (*fotografi, interesse, Amerika, Europa, restaurant, avis, problem*). Uncovered loans are not reliable. The A1 loans this course uses (*student, stasjon, hotell, apotek, telefon, billett, sjokolade, banan, minutter, prosent, fabrikk*) are in `LEX` or covered by a suffix, and those outputs are the ones in §6.3 and §9.
- **What this means.** On ordinary A1 words the aid is reliable enough to require. The risk is loan stress, a long *o* that is really the å-sound beyond `O_OH`, a short *u* said as *o* beyond `nummer, bukse, ung`, and *e + r* inside a loan (*Amerika*). Pitch, the exact *ue / ew / oe*, the tapped *r*, and the retroflex place are not shown on purpose.

**What the respelling does not show, on purpose:**

- Pitch. NoW's introductory pronunciation does not mark tones on single words. The audio teaches them. *loven* and *låven* are not a minimal pair in this course.
- The tapped *r*. It is written `r`. NoW compares it to a Scottish *r*.
- The retroflex place of *rt, rn, rl*. The letters stay so the learner can see the *r*. *rs* is `sh`, because NoW gives it the same /ʃ/ as *skj*.
- The reduced *-en* (*bilen* careful `BEE:-luhn`, everyday speech closer to one syllable). The aid shows the careful form. `consonants` mentions the reduced one.
- *r* plus *t, d, n, l, s* across a word boundary (*har tatt*). Not encoded. Mentioned in `consonants`.
- The *kj / sj* merger of many younger speakers. The aid keeps `hy` and `sh`.

**What lesson 1 (`alphabet`) must teach, so the aid can be read:**

1. CAPITALS mark the stressed syllable. Most words stress the first syllable. One-syllable words are all lowercase.
2. A colon means hold the vowel, with no English glide. *tak* `tah:k` is long; *takk* `tahk` is short.
3. The vowel tokens: `oo` versus `oh`, `ue` (the end of "new", tighter), `ew` (ee with rounded lips), `ae`, `oe`, `ah`, `eh`, `ee`.
4. `hy` is the *kj*-sound, not *k* and not *sh*. `sh` is *skj, sj, sk* before a front vowel, and *rs*. *j* is `y`.
5. *r* is a tap, written `r`. Pitch is only in the audio.

### 6.1 The key

Lowercase ASCII. Words separated by single spaces. Syllables inside a word separated by hyphens. In a word of two or more syllables, exactly one syllable is in CAPITALS. One-syllable words are lowercase. No Norwegian letters, no punctuation, no digits. Numbers are written as words. An abbreviation of two to five capitals is spelled with the Norwegian letter names (*NRK* `ehn-aer-KOH:`, *USA* `ue:-ehs-AH:`). A place name in all capitals is still the name if it is in `LEX` (*OSLO* `OOS-loo`); an unknown all-capital token is spelled as letters. A hyphenated word is done part by part, stressed on the first part (*e-post* `EH:-pohst`).

**Vowels**

| Norwegian | Aid | Example |
|---|---|---|
| a long / short | ah: / ah | ta `tah:`; takk `tahk` |
| e long / short | eh: / eh | tre `treh:`; penn `pehn` |
| e unstressed | uh | ikke `EEK-uh` |
| e before r (not a final -er) | ae | er `ae:r`; her `hae:r`; gjerne `YAE:-rnuh` |
| i long / short | ee: / ee | vin `vee:n`; vinn `veen` |
| o long | oo: | bok `boo:k`; tog `too:g`; to `too:` |
| o short | oh | komme `KOHM-uh`; norsk `nohshk` |
| o long, å-sound (list) | oh: | sove `SOH:-vuh`; lov `loh:v` |
| o short, oo-sound (list) | oo | ost `oost`; rom `roo:m` |
| u | ue: / ue | hus `hue:s`; full `fuel` |
| y | ew: / ew | ny `new:`; syk `sew:k` |
| æ | ae: / ae | være `VAE:-ruh`; ærlig `AE:-rlee` |
| ø | oe: / oe | kjøpe `HYOE:-puh`; grønn `groen` |
| å | oh: / oh | båt `boh:t`; må `moh:` |
| ei | ai | hei `hai`; jeg `yai` |
| ai | ay | kai `kay` |
| au | aeu | sau `saeu` |
| øy | oey | øy `oey`; gøy `goey` |
| oy, oi | oy | soya `SOY-ah` |

**Consonants that differ**

| Norwegian | Aid | Example |
|---|---|---|
| j | y | ja `yah:` |
| gj; g before i, y, ei | y | gjøre `YOE:-ruh`; gi; gift `yeeft`; gikk `yeek` |
| kj; k before i, y, ei, øy; tj | hy | kjøpe `HYOE:-puh`; kino `HYEE:-noo`; tjue `HYUE:-uh` |
| skj, sj; sk before i, y, ei, øy; rs | sh | skjema `SHEH:-mah`; ski `shee:`; kurs `kue:sh`; norsk `nohshk` |
| hv | v | hva `vah:`; hvor `voor` |
| hj | y | hjelpe `YEHL-puh` |
| ng; n before k | ng | lang `lahng`; mange `MAHNG-uh`; bank `bahngk` |
| word-final d after a vowel | silent | med `meh:`; god `goo:`; tid `tee:` |
| ld, nd at the end | l, n | kald `kahl`; land `lahn` |
| rd at the end | r, and the vowel stays long | bord `boo:r` |
| dt | t | godt `goht` |
| neuter -et | final t silent | huset `HUE:-suh`; flyet `FLEW:-uh` |
| -ig | final g silent | hyggelig `HEWG-uh-lee`; rolig `ROO:-lee` |
| double consonant | written once, vowel short | ikke `EEK-uh`; komme `KOHM-uh` |
| c, q, w, x, z | s or k; kv; v; ks; s | mostly loans |

Short function words forced short even with one following consonant: *og, til, vil, skal, han, hun, men, den, en, et, at, som, for, kan, man, nok, vel, kom*. *og* is also in `LEX` (`oh`). *de* is `dee:` and *det* is `deh:`, both in `LEX`, because the letter rules would say otherwise. *hjem, hvem, hva, hvor* are in `LEX`.

### 6.2 `pronPattern`

Printed by `pronPattern()` and by `node tools/target/no/respell.js --pattern`. Compiled with the `u` flag. A syllable is consonants, then a vowel token (`ah eh ee oo ue ew ae oe oh` or the diphthongs `aeu oey`, optional colon, or `ai ay oy uh` with no colon), then consonants. Consonant tokens are `sh hy ng ks` and `b d f g h k l m n p r s t v y`. A one-syllable word is lowercase. A longer word has exactly one uppercase syllable. Raw Norwegian fails it (*jeg, bok, takk, hus, båt, ikke* all fail). The pattern cannot catch a wrong but well-formed respelling; the generator is what keeps two writers on the same string.

```
^(?:(?:sh|hy|ng|ks|[bdfghklmnprstvy])*(?:(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh):?|(?:ai|ay|oy|uh))(?:sh|hy|ng|ks|[bdfghklmnprstvy])*|(?:(?:sh|hy|ng|ks|[bdfghklmnprstvy])*(?:(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh):?|(?:ai|ay|oy|uh))(?:sh|hy|ng|ks|[bdfghklmnprstvy])*-)+(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])*(?:(?:AEU|OEY|AH|EH|EE|OO|UE|EW|AE|OE|OH):?|(?:AI|AY|OY|UH))(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])*(?:-(?:sh|hy|ng|ks|[bdfghklmnprstvy])*(?:(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh):?|(?:ai|ay|oy|uh))(?:sh|hy|ng|ks|[bdfghklmnprstvy])*)*|(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])*(?:(?:AEU|OEY|AH|EH|EE|OO|UE|EW|AE|OE|OH):?|(?:AI|AY|OY|UH))(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])*(?:-(?:sh|hy|ng|ks|[bdfghklmnprstvy])*(?:(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh):?|(?:ai|ay|oy|uh))(?:sh|hy|ng|ks|[bdfghklmnprstvy])*)+)(?: (?:(?:sh|hy|ng|ks|[bdfghklmnprstvy])*(?:(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh):?|(?:ai|ay|oy|uh))(?:sh|hy|ng|ks|[bdfghklmnprstvy])*|(?:(?:sh|hy|ng|ks|[bdfghklmnprstvy])*(?:(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh):?|(?:ai|ay|oy|uh))(?:sh|hy|ng|ks|[bdfghklmnprstvy])*-)+(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])*(?:(?:AEU|OEY|AH|EH|EE|OO|UE|EW|AE|OE|OH):?|(?:AI|AY|OY|UH))(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])*(?:-(?:sh|hy|ng|ks|[bdfghklmnprstvy])*(?:(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh):?|(?:ai|ay|oy|uh))(?:sh|hy|ng|ks|[bdfghklmnprstvy])*)*|(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])*(?:(?:AEU|OEY|AH|EH|EE|OO|UE|EW|AE|OE|OH):?|(?:AI|AY|OY|UH))(?:SH|HY|NG|KS|[BDFGHKLMNPRSTVY])*(?:-(?:sh|hy|ng|ks|[bdfghklmnprstvy])*(?:(?:aeu|oey|ah|eh|ee|oo|ue|ew|ae|oe|oh):?|(?:ai|ay|oy|uh))(?:sh|hy|ng|ks|[bdfghklmnprstvy])*)+))*$
```

### 6.3 Worked examples

All of these were printed by the generator and match `pronPattern()`.

| # | Norwegian | `pron` | Meaning | Rule |
|---|---|---|---|---|
| 1 | Jeg heter Anna. | `yai HEH:-tuhr AHN-ah` | My name is Anna. | jeg = yai; unstressed -er = uhr |
| 2 | takk | `tahk` | thanks | short a before kk; one syllable, lowercase |
| 3 | tak | `tah:k` | roof, ceiling | long a; colon |
| 4 | bok | `boo:k` | a book | long o = oo |
| 5 | båt | `boh:t` | a boat | å = oh |
| 6 | kjøpe | `HYOE:-puh` | to buy | kj = hy; long ø; stress on the first syllable |
| 7 | norsk | `nohshk` | Norwegian | short o = oh; rs = sh |
| 8 | bord | `boo:r` | a table | rd at the end: d silent, vowel long |
| 9 | med | `meh:` | with | final d silent |
| 10 | huset | `HUE:-suh` | the house | neuter -et: t silent |
| 11 | spise | `SPEE:-suh` | to eat | long i; unstressed e = uh |
| 12 | ikke | `EEK-uh` | not | short i; the k closes the syllable |
| 13 | den store bilen | `dehn STOO:-ruh BEE:-luhn` | the big car | den short; stor long oo; careful -en |
| 14 | jeg snakker ikke norsk | `yai SNAHK-uhr EEK-uh nohshk` | I don't speak Norwegian | ikke after the verb |
| 15 | God morgen. | `goo: MOHR-guhn` | Good morning. | god: d silent, long oo |
| 16 | klokka halv tre | `KLOHK-ah hahlv treh:` | 2:30 | short o in klokka = oh; halv short |
| 17 | Takk for maten. | `tahk fohr MAH:-tuhn` | Thanks for the meal. | for is short oh |
| 18 | student | `stue-DEHNT` | a student | -ent stressed at the end |
| 19 | hei | `hai` | hi | ei = ai |
| 20 | gjerne | `YAE:-rnuh` | gladly | e + r = ae; rn kept |
| 21 | hyggelig | `HEWG-uh-lee` | nice | stem g said; final g of -ig silent |
| 22 | Hva koster det? | `vah: KOHS-tuhr deh:` | What does it cost? | hv = v; det in LEX |

### 6.4 The generator

`tools/target/no/respell.js`. No dependencies.

- **Usage:** `node tools/target/no/respell.js "Jeg heter Anna."` → `Jeg heter Anna. -> yai HEH:-tuhr AHN-ah`. Several arguments give several lines. `--pattern` prints the regex.
- A digit, or a word with no vowel, throws. Write numbers as words.
- **Fixing a wrong output:** add `word=re-SPELL-ing` to `LEX_SRC` (lowercase key, the stressed syllable in capitals). A short one-syllable word the length rule calls long goes in `SHORT`. A long *o* with the å-sound goes in `O_OH`. A short *o* with the oo-sound goes in `O_OO`. Then re-run. Inflected forms do not follow automatically: *stasjonen* is its own entry, because the *-en* hides the *-sjon* stress rule.

### 6.5 Words it gets wrong

Left wrong on purpose, or still wrong after `LEX`. Do not copy a pronunciation for these; add the word to `LEX` if a lesson needs it.

- **Loan stress** the suffix rules miss: *fotografi, interesse, Amerika, Europa, restaurant, avis, problem*. *Europa* is also split as *e + u* rather than the diphthong. *restaurant* treats *au* as the Norwegian diphthong `aeu`.
- **e + r inside a loan:** *Amerika, interesse* become `ae` in a syllable where the vowel is not æ.
- **ferdig** prints `FAE:-rdee` (long, because *rd* counts as one). NoW does not mark the length. Check before a lesson depends on it.
- **torsdag** prints `TOHSH-dahg` (short *oh*). The weekday vowels *torsdag, lørdag, søndag* were not in the 61-word NoW list. *mandag, tirsdag, onsdag, fredag* are the ones to prefer in examples; *tirsdag* and *onsdag* are in `LEX`.
- **One spelling, one pron.** *kost* is `koost` (the oo-list). *rom* is `roo:m`. A second reading needs a different sentence, not a second pronunciation.
- **Short u said as o** beyond *nummer, bukse, ung* (*lunken* prints `LUENG-kuhn`).
- **Definite loans** not in `LEX`. *stasjonen, studenten, studerer* are in `LEX`. A new one (*musikken, hotellet*) may fall back to first-syllable stress.
- **glad** is in `LEX` (`glah:d`) because the silent-final-d rule would drop a *d* that is said. Other final *d* words that are said (*glad* is the one this course needs) go in `LEX`.
- Pitch, reduced *-en*, cross-word retroflex, and the *kj / sj* merger: §6, not bugs.

## 7. Standing practice rule

**Rule: gender, and verb second.** Every practice set keeps re-testing two strands.

- **(a) Gender.** The article *en / ei / et*, the definite ending *-en / -a / -et*, adjective agreement (neuter *-t*, plural *-e*), and double definiteness (*den store bilen*).
- **(b) Verb second and *ikke*.** The conjugated verb is the second element of a statement and the first element of a yes/no question. *ikke* goes after that verb in a main clause (*Jeg snakker ikke; I dag snakker jeg ikke*) and before an infinitive (*Jeg kan ikke komme*).

**Why these two.** [inference] Both are in ordinary sentences from the first week (*ei bok*, *I dag jobber jeg*), so the rule can be met in every lesson. The opened teaching page puts verb second, *ikke*, articles, agreement and double definiteness at the top of its list [practitioner opinion]. NoW chapter 1 teaches genders and word order together [curriculum convention]. Verb person-endings are not the rule: there is only one present form.

**Not the standing rule:** *sin*, prepositions, false friends, the clock, pitch. They are lesson-local and come back as neighbour items.

**Keywords** (`standingRule.keywords`, flag `i`). A why-line matches when it uses one of these. `minOrder` 2 and `minType` 2: at least two order items and two type items per lesson.

```
\bmasculine\b|\bfeminine\b|\bneuter\b|\bgender\b|\bdefinite ending\b|\bdouble definite\b|\ben-word\b|\bei-word\b|\bet-word\b|\bverb second\b|\bsecond element\b|\bsecond place\b|\bverb comes first\b|\bverb first\b|\bafter the verb\b
```

Tested in node against this table. "yes" means the line matches.

| why-line | match? |
|---|---|
| bok is feminine: ei bok, boka. | yes |
| hus is neuter: et hus. | yes |
| Gender is part of the noun. | yes |
| The definite ending is on the noun: bilen. | yes |
| Double definite: den store bilen. | yes |
| Verb second: i dag first, then jobber. | yes |
| The verb is the second element. | yes |
| In a yes/no question the verb comes first. | yes |
| ikke goes after the verb. | yes |
| bil is masculine: en bil, bilen. | yes |
| This is an ei-word. | yes |
| Use du with strangers too. | no |
| God natt means you are going to bed. | no |
| halv tre is 2:30. | no |
| rolig means calm, not fun. | no |
| A present is en gave. | no |
| kj is a soft h. | no |
| Pitch is not in the spelling. | no |
| Nynorsk is the other written language. | no |
| The plural of barn is barn. | no |

`alphabet`, `vowels`, `consonants`, `greetings`, `numbers` and `traps` still owe the rule two order items and two type items. Build them as short sentences, and put the keyword in the why: *bok is feminine*, *Verb second: i dag jobber jeg*. A false-friend item counts only when the why also names the gender or the verb position (*en gave is feminine* does not match; *gave is feminine: ei gave* does, if the house rule's article is the one in the answer).

## 8. Lessons (final order)

**26 lessons** (25 roadmap + 1). Ids drop the `no-` prefix.

**Changes from the roadmap:**

- **Moved:** `gender` from stage 3 to the end of stage 1, before `present` (§2.5). The roadmap id `no-gender` is unchanged.
- **Added:** `traps`, roadmap field empty. It is the lesson that points at Traps for English speakers.
- **Compliments is not a new lesson.** The existing `food` lesson points at the Compliments deck. The Food and drink deck is pointed at from `definite` (definite endings on food nouns: *kaffen, brødet, maten*). The Travel and transport deck is pointed at from `modals` (*skal til Bergen, må ta bussen*).
- **Renamed** only to put the English trap in the title. The roadmap ids are the same.
- Stages stay the roadmap's four, with `gender` in stage 1 and `traps` after stage 4.

| # | id | Title | Roadmap item | Content, and the English-speaker trap | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and first words** | | | |
| 1 | `alphabet` | The alphabet: æ, ø, å | no-alphabet | The 29 letters and their names. æ, ø, å are letters, not accents. How to read the aid (§6): capitals, the colon, `oo` / `oh` / `ue` / `ew` / `ae` / `oe`, `hy` and `sh`. Trap: reading å as a, and æ as "ae". | Sounds and spelling |
| 2 | `vowels` | Long and short vowels | no-vowels | Colon = long. *tak / takk, vin / vinn*. Long *o* = `oo` (*bok*), short *o* = `oh` (*komme*). *u* and *y*. Trap: every vowel short, and *bok* read as English "bok". | Sounds and spelling |
| 3 | `consonants` | Consonants: kj, skj and silent letters | no-consonants | `hy` versus `sh`. Silent *h* in *hv, hj*. Silent *d* in *med, kald, bord*. *rs* = `sh` (*norsk*). The *kj / sj* merger is for listening only. Reduced *-en* and cross-word *r* are mentioned, not drilled. Trap: *kjøpe* with a *k*, and *norsk* with an *r* plus *s*. | Sounds and spelling |
| 4 | `greetings` | Greetings: hei, takk, ha det | no-greetings | *Hei, God morgen, God dag, God kveld, God natt, Ha det bra, Takk, Unnskyld, Vær så snill.* *du* for everyone. *De* once, recognition. *God natt* when going to bed, not when arriving. Trap: a formal *you* on every line. | Greetings and courtesy |
| 5 | `intro` | Introducing yourself | no-intro | *Jeg heter…, Jeg kommer fra…, Jeg bor i…, Jeg er student.* Nynorsk and dialects, one sentence. Jobs with no article for recognition (*Jeg er student*); the full rule is in `present`. Trap: *Jeg er en student* as the only pattern, and capital *Norsk*. | About me |
| 6 | `gender` | en, ei, et: three genders | no-gender | *en / ei / et* on every new noun. Feminine is *ei* + *-a* in answers. Common gender once, recognition. *ei stor bok*, not a feminine adjective. Moved here so the first nouns have an article. Trap: one article for everything, and *en bok* in a typed answer. | People and family |
| | | **Stage 2: First sentences** | | | |
| 7 | `present` | The present tense in -r | no-present | One form: infinitive + *-r* (*snakker*). *er, gjør*. Modals have no *-r* and wait for `modals`. *Hun er lærer.* Trap: a different ending for *han*, and *Jeg er en lærer* with no adjective. | Work and study |
| 8 | `word-order` | Verb second: I dag jobber jeg | no-word-order | The conjugated verb is the second element. *I dag jobber jeg.* *og* and *men* do not count. Trap: *I dag jeg jobber*. | Days, dates and weather |
| 9 | `questions` | Questions: hva, hvor, and yes/no | no-questions | *hva, hvor, hvem, når, hvordan, hvorfor*. Yes/no: verb first. No *gjør du…?* Trap: *Hvor du bor?* and *hva* for "who". | Questions and connectors |
| 10 | `negation` | ikke: where it goes | no-negation | *Jeg snakker ikke. I dag snakker jeg ikke. Jeg kan ikke komme.* *alltid* after the verb. Trap: *Jeg ikke snakker* and *Jeg alltid drikker*. | Feelings and states |
| 11 | `numbers` | Numbers and prices | no-numbers | 0–100 and the tens (*tjue, tretti, førti*). *Hva koster det?* Prices in *kroner*, in words. No invented price as a fact. Trap: English *twenty* order, and reading *tjue* as "t-you". | Numbers, time and prices |
| 12 | `object` | Object pronouns: meg, deg | no-object | *meg, deg, ham, henne, den, det, oss, dere*. *den* for masculine and feminine, *det* for neuter. Trap: *meg* for "I", and *det* for *boka*. | Health and emergencies |
| 13 | `modals` | Modal verbs: vil, kan, må, skal | no-modals | *kan, vil, skal, må* + infinitive at the end. *vil* = want. *Jeg blir 30. Jeg skal til Bergen. Jeg må ta bussen.* Trap: *vil* as English "will", and *har å*. | Travel and transport |
| 14 | `time` | Days and the clock: halv tre | no-time | Days lower case. *halv tre* = 2:30, *kvart over, kvart på, ti på halv*. *i dag, i går, i morgen*. Trap: *halv tre* read as 3:30. | Numbers, time and prices |
| 15 | `directions` | Asking the way | no-directions | *Unnskyld, hvor er…? til høyre, til venstre, rett fram.* *i* and *på* as chunks, not a preposition table. Trap: *på* and *i* swapped on the first places (*i Oslo, på stasjonen* as chunks only). | Around town and directions |
| | | **Stage 3: Things and places** | | | |
| 16 | `definite` | The definite ending | no-definite | *bilen, boka, huset*. The *-t* of *huset* is silent. Careful *-en*, with the reduced form mentioned. Food nouns so the Food deck has a home: *kaffen, brødet, maten*. Trap: a separate word *den* with no ending, and *huset* with a *t* in the aid. | Food and drink |
| 17 | `plural` | Plurals | no-plural | *-er, -r*, no ending (*barn*), definite plural *-ene*. Irregulars as items, not a table to memorise in the abstract. Trap: English *-s*, and *barns*. | People and family |
| 18 | `reflexive` | Reflexive verbs | no-reflexive | *Jeg setter meg. Han vasker seg.* The pronoun matches the subject. Trap: *Jeg setter seg*, and a missing pronoun. | Home and routine |
| 19 | `adjectives` | Adjective agreement | no-adjectives | *en stor bil, ei stor bok, et stort hus, store biler*. *Huset er stort.* *liten, lita, lite*. Adverb *-t* for recognition (*synger vakkert*). Trap: *Huset er stor*, and a feminine *-a* on the adjective. | Shopping and clothes |
| 20 | `home` | Home, colours and ordinals | no-home | Rooms, *rød, blå, grønn, gul, hvit*, *første, andre, tredje*. *hjemme* versus *hjem*. Trap: *Jeg er hjem* for "I'm at home". | Home and routine |
| 21 | `possessives` | Possessives: min, mi, mitt | no-possessives | *min, mi, mitt, mine* after the noun in the usual pattern (*boka mi*) and before it for recognition. *sin* when the owner is the subject, as the neighbour, not the standing rule. Genitive *-s* with no apostrophe (*Annas bil*). Avoid a typed *Lars' bok*. Trap: *hans* where *sin* changes the meaning. | People and family |
| 22 | `shopping` | Shopping: denne, dette, disse | no-shopping | *denne, dette, disse*. Clothes, size, *Jeg vil ha den.* Trap: *dette* with a masculine noun. | Shopping and clothes |
| 23 | `food` | Food, and what to say about it | no-food | *Kan jeg få…?* Everyday food. Then the compliment set: *Takk for maten, Det var kjempegodt, Du er så flink, Så snill du er, Vel bekomme.* This is the lesson that points at Compliments. Trap: *Jeg er full* for "I'm full of food", and *Takk for å hjelpe*. | Compliments |
| 24 | `double-def` | Double definiteness: den store bilen | no-double-def | *den* with masculine and feminine, *det* with neuter, *de* with plural, and the ending stays on the noun. Trap: *den store bil*. | Shopping and clothes |
| | | **Stage 4: Everyday life** | | | |
| 25 | `past` | The past tense | no-past | *snakket, kjøpte, spiste, var, hadde, gikk, dro, kom*. *-et* in typed answers. *snakka* once, as something you hear. Trap: an English *-ed* spelling, and *gikk* read with a hard *g* (the aid says `yeek`). | Likes and free time |
| 26 | `traps` | False friends | (added) | The §4.5 list in sentences. *semester* and *frokost* once, for learners who know Swedish or Danish. The added lesson, and the one that points at Traps for English speakers. Trap: the English meaning of the look-alike. | Traps for English speakers |

Per-lesson notes for writers:

- Every practice set satisfies §7. The last items may bring back a neighbour: *sin*, *hjemme / hjem*, *halv tre*, *Jeg fryser*.
- An item whose answer and a distractor differ only by *å / a* is `!strict` (§10). *æ* and *ø* do not fold.
- Prompts do not put a formal cue on *du*. "(to several people)" means *dere*.
- Prices are words. Do not invent a specific price as a fact.
- *Nynorsk* appears in `intro` only.

## 9. Decks

**18 decks in 5 groups.** About 16–18 cards each is the writer target. The five cards here are the level and the tone. Card shape: `target | pron | meaning | note`. Every noun that is taught as a noun goes with *en, ei* or *et* until `definite`, and with the ending after that. Every `pron` below was printed by `tools/target/no/respell.js`.

### First steps

**Sounds and spelling.** The alphabet, long and short vowels, and the letters English readers misread. Lessons: `alphabet`, `vowels`, `consonants`.

| target | pron | meaning |
|---|---|---|
| bok | `boo:k` | a book |
| båt | `boh:t` | a boat |
| takk | `tahk` | thanks |
| kjøpe | `HYOE:-puh` | to buy |
| skjema | `SHEH:-mah` | a form |

**Greetings and courtesy.** Hello, thanks, excuse me, and goodbye, with *du*. Lesson: `greetings`.

| target | pron | meaning |
|---|---|---|
| Hei! | `hai` | Hi! |
| Takk. | `tahk` | Thanks. |
| Ha det bra. | `hah: deh: brah:` | Bye. |
| God morgen. | `goo: MOHR-guhn` | Good morning. |
| Unnskyld. | `UEN-shewl` | Excuse me. |

**About me.** Name, where you are from, where you live, and what you do. Lesson: `intro`.

| target | pron | meaning |
|---|---|---|
| Jeg heter Anna. | `yai HEH:-tuhr AHN-ah` | My name is Anna. |
| Jeg kommer fra Oslo. | `yai KOHM-uhr frah: OOS-loo` | I'm from Oslo. |
| Jeg bor i Minneapolis. | `yai boo:r ee: mee-nee-AH-poh-lees` | I live in Minneapolis. |
| Jeg er student. | `yai ae:r stue-DEHNT` | I'm a student. |
| Hyggelig å hilse på deg. | `HEWG-uh-lee oh: HEEL-suh poh: dai` | Nice to meet you. |

**People and family.** People and family, each noun with *en, ei* or *et*. Lessons: `gender`, `plural`, `possessives`.

| target | pron | meaning |
|---|---|---|
| ei jente | `ai YEHN-tuh` | a girl |
| en gutt | `ehn guet` | a boy |
| et barn | `eht bah:rn` | a child |
| mora | `MOO:-rah` | the mother |
| faren | `FAH:-ruhn` | the father |

### Everyday words

**Numbers, time and prices.** Numbers, the clock, and prices in kroner. Lessons: `numbers`, `time`.

| target | pron | meaning |
|---|---|---|
| tjue | `HYUE:-uh` | twenty |
| Hva koster det? | `vah: KOHS-tuhr deh:` | What does it cost? |
| klokka halv tre | `KLOHK-ah hahlv treh:` | 2:30 |
| ti kroner | `tee: KROO:-nuhr` | ten kroner |
| en kaffe | `ehn KAHF-uh` | a coffee |

**Days, dates and weather.** Days, today and yesterday, and the weather. Lesson: `word-order`.

| target | pron | meaning |
|---|---|---|
| mandag | `MAHN-dahg` | Monday |
| tirsdag | `TEE:SH-dahg` | Tuesday |
| i dag | `ee: dah:g` | today |
| Det regner. | `deh: RAI-nuhr` | It's raining. |
| Det er kaldt. | `deh: ae:r kahlt` | It's cold. |

**Food and drink.** Food and drink, and the definite ending on those nouns. Lesson: `definite`.

| target | pron | meaning |
|---|---|---|
| brødet | `BROE:-duh` | the bread |
| Jeg vil ha melk. | `yai veel hah: mehlk` | I want milk. |
| ost | `oost` | cheese |
| Takk for maten. | `tahk fohr MAH:-tuhn` | Thanks for the meal. |
| Det var godt. | `deh: vah:r goht` | That was good. |

**Shopping and clothes.** Clothes, size and colour, and *den store bilen*. Lessons: `adjectives`, `shopping`, `double-def`.

| target | pron | meaning |
|---|---|---|
| en stor bil | `ehn stoo:r bee:l` | a big car |
| et stort hus | `eht stoo:rt hue:s` | a big house |
| den store bilen | `dehn STOO:-ruh BEE:-luhn` | the big car |
| Hva koster den? | `vah: KOHS-tuhr dehn` | What does that one cost? |
| en billett | `ehn beel-EHT` | a ticket |

**Home and routine.** Rooms, colours, ordinals, and a simple daily routine. Lessons: `reflexive`, `home`.

| target | pron | meaning |
|---|---|---|
| et hus | `eht hue:s` | a house |
| huset | `HUE:-suh` | the house |
| Jeg setter meg. | `yai SEHT-uhr mai` | I sit down. |
| første | `FOESH-tuh` | first |
| Det er rødt. | `deh: ae:r roet` | It is red. |

### Out and about

**Around town and directions.** Places in town and asking the way. Lesson: `directions`.

| target | pron | meaning |
|---|---|---|
| til høyre | `teel HOEY-ruh` | to the right |
| til venstre | `teel VEHN-struh` | to the left |
| rett fram | `reht frah:m` | straight ahead |
| Hvor er stasjonen? | `voor ae:r stah-SHOO:-nuhn` | Where is the station? |
| Hvor er toget? | `voor ae:r TOO:-guh` | Where is the train? |

**Travel and transport.** Buses, trains, tickets, and *skal* and *må*. Lesson: `modals`.

| target | pron | meaning |
|---|---|---|
| Jeg skal til Bergen. | `yai skahl teel BAER-guhn` | I'm going to Bergen. |
| Jeg må ta bussen. | `yai moh: tah: BUES-uhn` | I have to take the bus. |
| en billett | `ehn beel-EHT` | a ticket |
| toget | `TOO:-guh` | the train |
| Hvor er stasjonen? | `voor ae:r stah-SHOO:-nuhn` | Where is the station? |

**Health and emergencies.** Feeling ill, the pharmacy, and asking for help. Lesson: `object`.

| target | pron | meaning |
|---|---|---|
| Jeg fryser. | `yai FREW:-suhr` | I'm cold. |
| Jeg har vondt. | `yai hah:r vohnt` | It hurts. |
| et apotek | `eht ah-poo-TEH:K` | a pharmacy |
| Hjelp! | `yehlp` | Help! |
| Jeg er syk. | `yai ae:r sew:k` | I'm ill. |

**Work and study.** Jobs, study, and the one present-tense form. Lesson: `present`.

| target | pron | meaning |
|---|---|---|
| Jeg snakker norsk. | `yai SNAHK-uhr nohshk` | I speak Norwegian. |
| Jeg jobber. | `yai YOHB-uhr` | I work. |
| Hun er lærer. | `huen ae:r LAE:-ruhr` | She is a teacher. |
| Jeg studerer. | `yai stue-DEH:-ruhr` | I'm studying. |
| en student | `ehn stue-DEHNT` | a student |

### Conversation

**Feelings and states.** How you feel, and where *ikke* goes. Lesson: `negation`.

| target | pron | meaning |
|---|---|---|
| Jeg er trøtt. | `yai ae:r troet` | I'm tired. |
| Jeg har det bra. | `yai hah:r deh: brah:` | I'm fine. |
| Jeg snakker ikke norsk. | `yai SNAHK-uhr EEK-uh nohshk` | I don't speak Norwegian. |
| Jeg liker ikke kaffe. | `yai LEE:-kuhr EEK-uh KAHF-uh` | I don't like coffee. |
| Jeg er glad. | `yai ae:r glah:d` | I'm glad. |

**Likes and free time.** What you like and what you did. Lesson: `past`.

| target | pron | meaning |
|---|---|---|
| Jeg liker kaffe. | `yai LEE:-kuhr KAHF-uh` | I like coffee. |
| Jeg spiste brød. | `yai SPEES-tuh broe:` | I ate bread. |
| i går | `ee: goh:r` | yesterday |
| Jeg var hjemme. | `yai vah:r YEHM-uh` | I was at home. |
| Det var gøy. | `deh: vah:r goey` | That was fun. |

**Questions and connectors.** Question words, yes/no questions, and *og* and *men*. Lesson: `questions`.

| target | pron | meaning |
|---|---|---|
| Hva heter du? | `vah: HEH:-tuhr due:` | What's your name? |
| Hvor bor du? | `voor boo:r due:` | Where do you live? |
| Snakker du norsk? | `SNAHK-uhr due: nohshk` | Do you speak Norwegian? |
| og | `oh` | and |
| men | `mehn` | but |

### Watch out

**Traps for English speakers.** False friends and word-for-word copies from English. Lesson: `traps` (added).

| target | pron | meaning |
|---|---|---|
| en gave | `ehn GAH:-vuh` | a present |
| Jeg er mett. | `yai ae:r meht` | I'm full of food. |
| rolig | `ROO:-lee` | calm |
| eventuelt | `eh-vehn-tue-EHLT` | possibly |
| en time | `ehn TEE:-muh` | an hour, or an appointment |

**Compliments.** Kind things to say about food, work and people, and how to answer. Lesson: `food` (existing; this deck is not a second new lesson).

| target | pron | meaning |
|---|---|---|
| Takk for maten. | `tahk fohr MAH:-tuhn` | Thanks for the meal. |
| Det var kjempegodt. | `deh: vah:r HYEHM-puh-goht` | That was really good. |
| Du er så flink. | `due: ae:r soh: fleengk` | You're so good at this. |
| Så snill du er. | `soh: sneel due: ae:r` | How kind you are. |
| Vel bekomme. | `vehl buh-KOHM-uh` | The reply to Takk for maten. |

*Takk for maten* is the phrase said after eating, especially to the person who made the food [research-backed, Wiktionary, which also glosses the reply *vel bekomme*]. *flink* and *snill* are the opened teaching pages' words for praising what someone did and for kindness [practitioner opinion]. *Det var kjempegodt* is [inference] as a stronger form of NoW-style *Det var godt*; the generator's pronunciation is what writers copy, and a native should check the phrase (§11).

### Localisation

- **Cities in Norway:** Oslo (the pronunciation model), Bergen, Trondheim, Stavanger. Tromsø only if the *ø* is the point.
- **US cities:** Minneapolis (NoW already has a Lisa from Minneapolis), Seattle, Chicago. They appear in *Jeg bor i…* and in English prompts.
- **Names:** Kari, Lars, Anna, Ingrid, Erik, Nora, Ola. The NoW cast (Ken, Anna, Peter, Maria, Frank, Lisa) may appear. No celebrities.
- **Food:** *brød, rundstykke, kaffe, ost, brunost, laks, vafler, matpakke, kjøttkaker*. *brunost* is in `LEX` (`BRUE:-noost`).
- **Money:** *kroner*, written as words. Do not state a real price.
- **Clock and dates:** day–month order; *halv tre* as in §4.8; kilometers and Celsius if a unit is needed.

## 10. Typing and script

**Script.** Latin, plus *æ ø å* (capitals *Æ Ø Å*). `targetScript`: `[A-Za-zÆØÅæøå]`. Every Norwegian string contains at least one character from that class.

**Accent bar** (`keys`): `æ ø å`. `gen.js` writes `keys` into the pack. The German bar is the same mechanism (*ä ö ü ß*). No new font and no new script.

**`accents: false`.** *æ, ø, å* are letters of the alphabet, the way *ñ* is a letter in the Spanish course, not diacritics on *a* and *o*. A missing letter is wrong, not "almost".

What was checked, without opening `src/app.html`:

- The validator's `fold` (`tools/target/validate.js`) protects *ñ* and Cyrillic *й / ё*, then NFD-strips combining marks U+0300–U+036F. Run on that same function: `fold('æ')` stays `æ`, `fold('ø')` stays `ø`, and `fold('båt')` equals `fold('bat')` because *å* (U+00E5) decomposes to *a* + U+030A.
- The German profile describes the engine `foldAcc` as the same NFD strip, and says `accents: true` is what makes an umlaut-only difference "almost". The Russian profile says `accents: false` means the answer must match exactly, so that fold does not turn *й* into *и*. This course sets `accents: false` on that basis.

**App change, if the engine or the validator still folds *å*.** One change, in both places, on the model of *ñ*: before the NFD strip, protect *å* and *Å* so they are not reduced to *a* and *A*.

- **If it is not built:** `accents: false` is the setting that should already skip the almost-path, if the engine does what the Russian profile describes. The validator will still see *båt* and *bat* as an accent-only pair and demand `!strict` on a fill item. Writers mark meaning-changing *å* pairs `!strict` (*ta / tå, mal / mål, båt / bat*) and do not use an *å / a* distractor unless the *å* is the point. *æ* and *ø* already survive the fold. *ae, oe, aa* are not accepted for *æ, ø, å*. NoW mentions those pairs as a foreign-keyboard fallback; this course does not, for the same reason the German course does not accept *ae* for *ä*.

**Capitals.** The matcher ignores them. Model answers use the §2.2 rules. A typed answer is never failed for capitals.

**Apostrophes and hyphens.** The genitive is *-s* with no apostrophe (*Annas bil*). Do not ask learners to type a genitive of a name that already ends in *s*. Compounds are one word (*kjøpesenter*). A hyphen stays in *e-post* and *CD-spiller*. The German profile's note on the matcher, used here as the guide: a word-final apostrophe is dropped, and an apostrophe inside a word must match. This course simply does not put an apostrophe in a typed answer.

**Punctuation.** The engine strips the usual sentence marks. Model answers still end with a period or a question mark.

**What a typed answer must include**

- The article or the definite ending the lesson has reached, in the house-rule gender.
- Verb second, and *ikke* in the right place, once those lessons have been taught.
- *du* or *dere* as the prompt requires. *æ, ø, å* as spelled.

**What it need not include**

- Capitals, or a final period.
- *De*.
- *en* for a feminine noun, or *snakka* for *snakket*.
- Pitch, or a length mark. Those are not letters.

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first:

1. The respelling (§6), especially `LEX`, the *o* lists, and the outputs in §6.3 and §9. The 61/61 figure is the author's reading of NoW, not a recording.
2. Place-name vowels: *Oslo* `OOS-loo`, *Trondheim* `TROHN-haim`, *Stavanger* `stah-VAHNG-uhr`, *Bergen* `BAER-guhn`.
3. *ferdig, torsdag, lørdag, søndag*, and any final *d* that is actually pronounced besides *glad*.
4. The compliment line *Det var kjempegodt*, and *Vel bekomme* as the reply a host gives.
5. *snakka* as "mention once, do not accept". The *-et* forms are NoW's. The status of *-a* was not checked against a spelling-norm page.
6. Sample-card tone: *Jeg er student* with no article, *Hun er lærer*, *ti kroner*.

**Not opened, so not used as evidence**

- The State Department language-training page (the fetch returned an error). No hour figure.
- A Duolingo ranking or motive survey.
- Any English-L1 learner corpus. Section 4 is a teaching page plus NoW, not a frequency study.
- *src/app.html*. The *å* fold is from `tools/target/validate.js`, run in node, plus the German and Russian profiles' descriptions of `foldAcc`.

**Engine**

- The app change in §10 is the only one. The accent bar needs nothing beyond `keys`.
- `respell.js` warnings go to stderr. A writer who pipes stdout should not treat a warning as a row.
- Level titles and the brand word are placeholders (§ lead note).

## Sources

Pages opened for this profile:

- NTNU, *Norwegian on the Web*, table of contents, chapters 1–10: https://www.ntnu.edu/now/info/toc
- NTNU, *Pronunciation: collected texts from NoW chapters 1–10*, Hillestad, Husby, Øvregaard and Robbins (the pronunciation manuscript read for §6; alphabet, vowels, diphthongs, silent letters, clusters, stress, and the note that tones are not marked on single words in that introductory course)
- NTNU, NoW course material (the chapter text read for spoken Bokmål, *ei jente*, the time table *halv to* = 13.30, and the past-tense groups *snakket, kjøpte, spiste*)
- Språkrådet, *Grammatisk kjønn*, 6 March 2023: https://sprakradet.no/aktuelt/grammatisk-kjonn/
- Språkrådet, *Høflighetsformene De, Dem og Deres*, updated 1 January 2024: https://sprakradet.no/spraksporsmal-og-svar/hoflighetsformene-de-dem-og-deres/
- norskgrammatikk.com, *Common mistakes English speakers make in Norwegian*: https://norskgrammatikk.com/en/mistakes/
- elon.io, *False friends: English vs Norwegian*: https://elon.io/grammar/norwegian/errors/false-friends
- Wiktionary, *takk for maten*: https://en.wiktionary.org/wiki/takk_for_maten
- Wikipedia, *Norwegian Americans*: https://en.wikipedia.org/wiki/Norwegian_Americans

Local files read: `docs/briefs/target-profile-no.md`, `docs/roadmaps/no.json`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, the last section of `docs/PHASE2-BRIEF.md`, `docs/TARGET-BRIEF.md`, `docs/profiles/en-es.md`, `docs/profiles/en-de.md`, `docs/profiles/en-ru.md` (the `accents: false` paragraph), `tools/target/es/profile.json`, `tools/target/de/profile.json`, `tools/target/es/respell.js`, `tools/target/de/respell.js`, `tools/target/validate.js`, `tools/target/gen.js`. `src/app.html` was not opened.
