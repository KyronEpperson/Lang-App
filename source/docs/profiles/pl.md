# Polish speakers learning English — course profile

Course `pl-en`. Audience: adult Polish speakers, in Poland and abroad. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard Polish as written in Poland (pl-PL)**; answers and examples are in English. The HTML language tag and the app code are both **`pl`** (profile.json `native: "pl"`, pack `course-pl-en`, interface pack `i18n-pl`).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`, standing rule `article-plural`), like zh, vi, id, th and ru, because Polish has no articles. `parity.js` compares pl-en's English side with ko-en's. The closest finished course is Russian (`docs/profiles/ru.md`): another article-less Slavic language. This profile reuses ru.md's structure and its pipeline findings, and none of its Russian explanations: several Russian zones are **not** Polish zones (Polish keeps the verb *być* in the present; Polish article errors lean the other way), and they are marked below.

**The brief says 39 lessons and 20 decks. The repository now has 40 shared lesson ids and 21 shared decks:** `tools/content/lib.js` `ORDER` starts with `alphabet` (fixed English side, `docs/briefs/alphabet-spec.md`), and its deck is deck 21. §8 covers all 40 ids; §9 lists 22 decks (20 + alphabet + one pl-only deck).

Evidence labels (the same three as zh.md, vi.md, id.md and ru.md; the file `reports/Grammar learning order research.md` they come from does not exist in this checkout, §11):
- **[research-backed]**: a study or corpus, named, with its sample.
- **[curriculum convention]**: what Polish textbooks, exams, dictionaries, style guides or apps do.
- **[practitioner opinion]**: a teacher's, school's or blog's position, or this profile's own inference (said so where it is mine).

How sources were read: HTML pages through the fetch tool's summary. PDFs came back as binary, so their text layer was extracted locally with a small script and read directly; in three of them some glyphs were lost (noted per source in §11). A claim with "no source opened" is general knowledge or my inference, and is marked for a native-speaker check.

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`). Explanations use **ty** through verb endings, with the pronoun left out; buttons use the **imperative** (*Sprawdź*, *Dalej*), as Polish software does. School grammar terms (*przedimek*, *liczba mnoga*, *rzeczownik policzalny*), with tense names kept in English (*Present Simple*, *Present Perfect*).
- **Articles: omission leads.** Polish writers made 1.5 article errors per 100 words, with **missing *the* 37% + missing *a* 18% = 55%** against extra *the* 17% + extra *a* 8% = 25% (Rozovskaya & Roth 2010, 4,642 words). This is the reverse of the Russian and Chinese pattern (extra *the* first). Teach *putting articles in* first, withholding second.
- **Prepositions are as frequent as articles** in the same data (1.7 per 100 words; 16.3% of all corrections against 15.1% for articles). Case calques (*on the picture*, *in Monday*, *from five years*) get weight in `prep`, `perfect-2` and the pl-only lesson.
- **Present Perfect, word order and conditionals** have no Polish-L1 counts in anything opened; they rest on teacher sources (§4). Plural -s is not a zone (noun number is 1.3% of corrections).
- **Skill shape** (EF EPI country page): rank 15, score 587; reading 614, listening 562, writing 518, **speaking 503**. A strong base with a production gap: move fast, weight typed and spoken items.
- **Pronunciation aid: IPA, required, exactly as the Chinese course writes it** (`tools/content/zh/PRON-RULES.md` A–D binding), so most transcriptions are copied from zh. Polish letters would encode the errors (final devoicing, one *a* for /æ ʌ ɑː/, no /θ ð/). Toggle „Pokaż transkrypcję".
- **Validator:** `nativeScript: null` (Polish is Latin-script and many correct Polish strings carry no diacritic), `pronScript: "ˈ"`, and `labels.cueTest` = the nine Polish letters **or** a list of ASCII-only Polish cue words.
- **Standing rule: `article-plural`**, keywords `przedim|mnog|policzaln` (flag `i`); zero parity cost.
- **Curriculum:** all 40 shared ids kept in order (8 keep, 32 reweight, no English-side change). Add 2: `ponglish` (after `smalltalk`; deck „Fałszywi przyjaciele i kalki") and `articles-3` (after `passive`).
- **Interface:** counts use **label + colon + number** („Fiszki: {1}") because Polish needs three forms (1 fiszka / 2 fiszki / 5 fiszek); messages to the learner avoid every gendered form (*zrobiłeś / zrobiłaś*, *gotowy / gotowa*).

## 2. Variant, register and voice

**Variant: American English.**
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The pron aid must describe what learners hear.
2. Polish teaching has traditionally used British pronunciation: Szpyra-Kozłowska writes of "nonrhotic accents such as RP, generally taught in Poland" ([Szpyra-Kozłowska 2011](https://czasopisma.uni.lodz.pl/research/article/download/7918/7806/20165)) [curriculum convention, stated in a research paper]. Polish Wiktionary prints both, labelled *bryt.* and *amer.* ([pl.wiktionary](https://pl.wiktionary.org/wiki/comfortable)). §6 handles the mismatch as zh.md and ru.md do: the familiar symbols, written with American values, and a British → American table in the `pron` lesson.
3. US spelling and vocabulary (color, apartment, subway, cell phone, on the weekend). Mention a British form only in a card `note`: „W brytyjskim angielskim: flat".

**Register: ty, carried by the verb ending; the pronoun is left out; nothing gendered** [curriculum convention + decision].
- **What was found** [curriculum convention]:
  - Duolingo's Polish App Store description addresses the reader as **ty**: „możesz uczyć się ponad 40 języków", „Ćwicz mówienie, czytanie, słuchanie i pisanie", „pomoże Ci" ([Duolingo, App Store PL](https://apps.apple.com/pl/app/duolingo-nauka-j%C4%99zyk%C3%B3w/id570060128?l=pl)). Its release notes mix in *wy* („Wasze doświadczenia") next to a ty imperative („obserwuj nas").
  - The grammar site ang.pl writes its calls to action in ty („Sprawdź w ćwiczeniach swoją znajomość…", „Jak oceniasz nasz artykuł?") and its rules in the inclusive **my** form („Przedimek nieokreślony wstawiamy przed rzeczownikiem…", „Czasu Past Perfect Continuous używamy do…") ([ang.pl, przedimki](https://www.ang.pl/gramatyka/przedimki), [ang.pl, czasy](https://ang.pl/gramatyka/czasy-angielskie)).
  - Microsoft's Polish style guide: when the program tells the user what to do, use **second-person verb forms and skip the pronoun** ("the pronoun is skipped, and the second-person verb form is used"); avoid third-person references to "the user"; and write "without masculine or feminine verb forms", which "often involves switching to present tense or using passive voice" ([Microsoft Polish style guide](https://download.microsoft.com/download/b/d/c/bdc253ac-dbf3-4261-86a2-ffedfa718425/pol-pol-StyleGuide.pdf)).
  - So the brief's premise (modern Polish apps use ty) is confirmed for one learning app and one grammar site, and Microsoft's guide supports second-person address. Other learning apps were not opened (§11).
- **Decision.**
  - **Instructions and praise: second person singular, pronoun dropped.** „Wybierz poprawną odpowiedź", „Napisz po angielsku", „Tak trzymaj!". A sentence with a number follows the count rules in §10: „Dni z rzędu: 5. Tak trzymaj!", not „Masz już 5 dni z rzędu".
  - **Rules: the inclusive *my* form or an impersonal statement**, as Polish grammar explainers do: „Przed zawodem stawiamy a", „Tu potrzebny jest Present Perfect". Not „Musisz postawić przedimek".
  - **Buttons, menu items and chips: imperative, second person singular**, sentence case, no full stop: „Zacznij", „Dalej", „Sprawdź", „Zapisz", „Anuluj". The Microsoft guide's own examples are imperatives („Anuluj" for Cancel, „Spróbuj ponownie" for Try Again, „Wybierz" for Select) [curriculum convention]. The infinitive (*Sprawdzić*, *Zapisać*) is the Russian UI habit and reads as a translation in Polish [practitioner opinion, mine; native check]. Nouns are fine for navigation („Ustawienia", „Lekcje") and ongoing states take a noun or „…": „Synchronizacja…", „Wczytywanie…".
  - **The pronoun, when a sentence cannot do without it:** capitalised (*Ty, Ci, Cię, Twój*) when it addresses the learner, as the Microsoft guide prescribes ("should always start with a capital letter") and as Duolingo's store text does („pomoże Ci", „Twoje"). Prefer *swój* („Sprawdź swoje postępy"), which the same guide recommends and which needs no capital. This is the least certain register choice: many Polish products write lower-case *twój* in the interface. A native reviewer should confirm it before the interface is written (§11).
  - **Never** *Pan / Pani* to the learner, *wy*, mixed ty / *Państwo* on one screen, slang (*spoko*, *nara*, *ogarniasz*), diminutives (*lekcyjka*, *fiszeczka*), or more than one exclamation mark per screen.
- **Grammatical gender (critical, details in §10).** Polish marks the addressee's gender in the past tense (*zrobiłeś / zrobiłaś*), in the compound future (*będziesz robił / robiła*), in the conditional (*mógłbyś / mogłabyś*) and in predicate adjectives (*gotowy / gotowa*, *pewien / pewna*). **No string addressed to the learner may contain any of these**, and no slash or bracket forms (*zrobiłeś/aś*, *gotowy(-a)*). Use the present tense, the imperative, a noun phrase or an impersonal *-no / -to* form.
- **Translations of example sentences:**
  - *you* = **ty** between friends and in texting; **pan / pani + third-person verb** in service, office, email and doctor scenes („Czy może pan powtórzyć?"). That *pan* sits inside a translation and is lower-case (PWN, reused from en-pl.md §2.3); it is not addressed to the learner.
  - A first-person past sentence forces a gender in Polish (*I was tired* → „Byłem zmęczony" / „Byłam zmęczona"). **Pick one per sentence and alternate**, so that about half the first-person speakers are women; follow the name when the speaker is named. Never write both with a slash: ` / ` is the course's separator for alternatives and for dialogue lines "A / B".
- **Error marks:** **✗** wrong, **✓** right: `I'm teacher. ✗ → I'm a teacher. ✓`.

Three sample sentences in the voice:
- „W polskim nie ma przedimków, dlatego a i the łatwo pominąć. Wystarczą trzy zasady."
- „Zdanie „Mieszkam tu od pięciu lat” to po angielsku nie Present Simple. Ten okres wciąż trwa, więc mówimy: I've lived here for five years."
- „Po polsku wystarczy „Jest zimno”. Angielskie zdanie musi mieć podmiot: It's cold."

**Typography and mixing English into Polish text (one rule, applied everywhere):**
- **Quotes.** Polish phrases go in **„ ”** (U+201E opening, U+201D closing), the form PWN gives as the usual one in print; a quote inside a quote takes **« »** ([PWN, zasady pisowni: cudzysłów](https://sjp.pwn.pl/zasady/Cudzyslow;629866.html)). The full stop goes **outside** the closing quote (Microsoft guide). In lesson HTML, English is bold `<b>` and never quoted. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare: `„Lubię herbatę” po angielsku?`, „Po two — liczba mnoga: books.". Never ASCII `"` around Polish, and never the English pair “ ”.
- **Dash.** Em dash with spaces ( — ) between clauses and in „A — to B"; this also matches the engine's hint separator. En dash without spaces only in ranges (2–4, s. 236–238). Hyphen only inside words (*e-mail*, *po angielsku* has none; *forma -ing*). The Microsoft guide assigns the same roles: en dash for ranges, em dash for an isolated element.
- **No-break space (U+00A0).** Polish typesetting does not leave a one-letter word at the end of a line. The Microsoft guide: a no-break space is used "to avoid leaving one-letter words such as *w*, *z*, and *i* at the end of the line", between a number and its unit („60 ml"), and as the thousands separator („20 000").
  - **Required** in every interface string, lesson title, blurb, deck name and deck description: after *a, i, o, u, w, z* and between a number and its unit or noun („5 minut", „o 17:00").
  - **Optional** in lesson bodies and practice prompts; the engine should set `text-wrap: pretty` for `lang="pl"` body text instead (engine note, §10). Do not put U+00A0 inside a standing-rule keyword phrase or a cue word: write „liczba mnoga" and „po angielsku" with a normal space (the regexes match *mnog* and *angielsku* alone, so a no-break space there would still pass, but keep it simple).
- **Unicode NFC is mandatory.** Write precomposed letters (ó = U+00F3, not o + U+0301). `labels.cueTest` lists the nine precomposed letters; a decomposed string would not match it.
- **Do not inflect English words with Polish endings** in explanations: no „w Present Perfekcie", „phrasale", „apdejtować". Write „w czasie Present Perfect", „czasowniki frazowe". An apostrophe ending is acceptable only where Polish spelling requires it for a name („u Mike'a").
- **Alternatives:** ` / ` with spaces, as in ko-en.
- **Capitals:** sentence case in every heading, title, deck name and button. Polish does not title-case, and writes weekdays, months and language names in lower case (*poniedziałek*, *listopad*, *angielski*) (Microsoft guide, 4.1.4).

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.
- **Convention found** [curriculum convention]: Polish explainers name English grammar with Polish school terms and keep **tense names in English**. ang.pl's tense index lists only *Present Simple, Present Continuous, Present Perfect, Present Perfect Continuous, Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous, Future Simple…*, with no Polish equivalents, and writes „Czas Past Perfect opisuje…" ([ang.pl, czasy](https://ang.pl/gramatyka/czasy-angielskie)). Its table of contents uses „Przedimki", „policzalne i niepoliczalne", „liczba mnoga", „Strona bierna", „Mowa zależna", „Okresy warunkowe", „Czasowniki nieregularne", „Czasowniki frazowe - Phrasal Verbs", „modalne i półmodalne", „Przyimki", „Bezokolicznik", „rzeczownik odczasownikowy - gerund", „stopniowanie", and the English headings „Relative clauses" and „Question tags" ([ang.pl, spis treści](https://ang.pl/gramatyka/spis-tresci)). Its article page uses „przedimek nieokreślony", „przedimek określony", „przedimek zerowy", „rzeczownik w liczbie pojedynczej" ([ang.pl, przedimki](https://www.ang.pl/gramatyka/przedimki)).
- **przedimek, not rodzajnik.** Polish Wikipedia defines *przedimek* as the part of speech before a noun, calls *rodzajnik* a variety of it that also marks gender, and uses *przedimek nieokreślony / określony / zerowy* for English *a / an*, *the* and no article ([pl.wikipedia, Przedimek](https://pl.wikipedia.org/wiki/Przedimek)). Learners who had German or French at school may say *rodzajnik*; the course never does, and the standing-rule regex does not match it (§7).
- Terms tagged "school" below with no link (*dopełniacz saksoński*, *druga / trzecia forma*, *następstwo czasów*, *pytanie ogólne / szczegółowe*) are general knowledge of Polish school usage, **not checked against a fetched textbook** (§11).
- **One term per concept.** The standing-rule regex depends on **przedimek** (any case form), **liczba mnoga** (any case form) and **policzalny / niepoliczalny** (§7). Do not write „l. mn.", „plural" or „rodzajnik".

| English term | Polish term (use this) | Note |
|---|---|---|
| article | **przedimek** | Standing-rule keyword (stem *przedim*: przedimek, przedimka, przedimkiem, przedimki, przedimków). Never „rodzajnik" |
| indefinite / definite article | przedimek nieokreślony (a / an) / przedimek określony (the) | In `why` prefer „przedimek a", „przedimek the" |
| zero article | bez przedimka (przedimek zerowy) | ang.pl says „przedimek zerowy"; in `why` write „bez przedimka" (it still matches the stem) |
| noun | rzeczownik | |
| countable / uncountable noun | rzeczownik **policzalny / niepoliczalny** | Standing-rule keyword (stem *policzaln*) |
| singular / plural | liczba pojedyncza / **liczba mnoga** | Standing-rule keyword (stem *mnog*: mnoga, mnogiej, mnogą). Write it out in full |
| (Polish) case | przypadek | Contrast only: „w angielskim nie ma przypadków — ich pracę wykonują przyimki i szyk wyrazów" |
| (Polish) aspect: perfective / imperfective | aspekt: dokonany / niedokonany | Contrast only (lessons `past`, `perfect`, `continuous`, `tense`) |
| pronoun / personal pronoun | zaimek / zaimek osobowy | |
| subject / object | podmiot / dopełnienie | School |
| predicate | orzeczenie | School; use sparingly |
| subject / object pronoun (I / me) | zaimek osobowy w funkcji podmiotu / dopełnienia | Short: „I — kto robi, me — kogo / komu" |
| possessive (my, his) | zaimek dzierżawczy | Contrast: *swój* has no single English equivalent |
| possessive 's | dopełniacz saksoński ('s) | School |
| verb | czasownik | |
| be | **czasownik to be** | „czasownik to be (am, is, are)"; Polish *być* |
| auxiliary verb | czasownik posiłkowy (do, does, did, have, will) | School; „operator" is not used |
| modal verb | czasownik modalny | ang.pl |
| third-person singular -s | końcówka -s (he / she / it) | Full form once: „końcówka -s w trzeciej osobie liczby pojedynczej". Note: „liczby pojedynczej" does not match the standing-rule stems |
| base form | forma podstawowa (bezokolicznik bez to) | |
| past form / past participle | druga forma / trzecia forma czasownika | School: „trzy formy czasownika"; gloss once „trzecia forma (past participle)" |
| regular / irregular verb | czasownik regularny / nieregularny | ang.pl |
| -ing form | forma -ing | „końcówka -ing"; *gerund* only in `to-ing` |
| tense | czas (gramatyczny) | Write „czas Present Perfect", never „tens" |
| present simple | **Present Simple** | All tense names in English, as ang.pl does. Gloss once: „Present Simple (czas teraźniejszy prosty)" |
| present continuous | Present Continuous | |
| past simple / past continuous | Past Simple / Past Continuous | |
| future (will / going to) | will / be going to (Future Simple) | |
| present perfect (+ continuous) | **Present Perfect** (Present Perfect Continuous) | Gloss once: „Present Perfect — czas, którego w polskim nie ma"; key lesson |
| past perfect | Past Perfect | |
| sequence of tenses | następstwo czasów | School term; used in `reported` |
| passive / active | strona bierna / strona czynna | ang.pl |
| conditional | okres warunkowy (pierwszy / drugi / trzeci) | ang.pl: „Okresy warunkowe"; titles may say „If + Present Simple, will" |
| relative clause | zdanie względne (z who / which / that) | ang.pl keeps the English heading; gloss once, then „zdanie z who" |
| reported speech | mowa zależna | ang.pl |
| infinitive / gerund | bezokolicznik / forma -ing (gerund) | |
| preposition / conjunction | przyimek / spójnik | |
| adjective / adverb | przymiotnik / przysłówek | |
| comparative / superlative | stopień wyższy / stopień najwyższy | „stopniowanie przymiotników" |
| question word | słowo pytające | |
| yes/no question / wh-question | pytanie ogólne (tak / nie) / pytanie szczegółowe | School |
| indirect question | pytanie pośrednie | „W pytaniu pośrednim szyk jest jak w zdaniu twierdzącym" |
| negative sentence / double negation | przeczenie / podwójne przeczenie | |
| word order / inversion | szyk wyrazów / inwersja | |
| there is / are | konstrukcja there is / there are | |
| phrasal verb | czasownik frazowy | ang.pl; first mention „czasownik frazowy (phrasal verb)" |
| idiom / collocation | idiom / kolokacja (stałe połączenie wyrazów) | |
| false friend | fałszywy przyjaciel | lingology.pl: „fałszywi przyjaciele"; lesson `ponglish` |
| calque | kalka (z polskiego) | |
| Ponglish | ponglish | Lesson title only |
| pronunciation | wymowa | pl.wiktionary: „wymowa" |
| transcription (IPA) | transkrypcja (fonetyczna) | |
| stress / stress mark | akcent / znak akcentu (ˈ) | |
| long vowel / length mark | samogłoska długa / znak długości (ː) | |
| vowel / consonant | samogłoska / spółgłoska | |
| voiced / voiceless | dźwięczna / bezdźwięczna | „ubezdźwięcznienie na końcu wyrazu" = final devoicing |
| vowel reduction / weak form | redukcja samogłoski / forma słaba | |
| linking | łączenie wyrazów | |

UI terms are in §10.

## 4. Persistent error zones

Ranked by evidence strength × frequency × how often the point recurs across lessons; the ranking is this profile's inference. Format: error ✗ → correction ✓. **Every "Why" line (the contrast with Polish) and every example with no named source is [practitioner opinion]** unless its Evidence line names a study.

**Main fetched evidence:**
- [Rozovskaya & Roth 2010](https://cogcomp.seas.upenn.edu/papers/RozovskayaRo10a.pdf): essays by advanced learners of nine L1s (Bulgarian, Chinese, Czech, French, German, Italian, Polish, Russian, Spanish), 2,645 sentences / 62,925 words, corrected by native speakers. **Polish subcorpus: 198 sentences, 4,642 words, 10.1 corrections per 100 words.** Tables 3, 4 and 5 were read directly. The sample is small and written, and the authors hand-picked extra sentences with preposition errors, which inflates that category.
- [Szpyra-Kozłowska 2011](https://czasopisma.uni.lodz.pl/research/article/download/7918/7806/20165), *Mispronounced lexical items in Polish English of advanced learners*: 20 fourth-year English Department students in Lublin read sentences with 80 words chosen as hard for Poles (1,600 tokens). Some category labels were lost in text extraction (§11).
- [Bakkouche & Post 2025](https://www.isca-archive.org/interspeech_2025/bakkouche25b_interspeech.pdf) (Interspeech): 33 intermediate and 32 advanced Polish learners **living in the UK** (mean length of residence about 9–10 years) and 25 native speakers; forced-choice identification of minimal pairs (*sheep / ship*, *bed / bad*) and a production task.
- [Świątek & Pluszczyk](https://ojs.academicon.pl/jezykoznawstwo/article/download/6864/9119?inline=1), *The analysis of second language learners' difficulties: the case of Polish learners of English* (journal *Językoznawstwo*; year not shown in the fetched text, references accessed in 2023): error examples from written and spoken PELCRA learner data and conversation classes, **with no counts**. Cited below as S&P. It supports that an error occurs, not how often.
- Teacher pages, each [practitioner opinion]: [The TEFL Academy](https://www.theteflacademy.com/blog/common-problems-for-polish-learners-of-english/) (K. Colquhoun, 2023), [Expats Poland](https://www.expatspoland.com/?p=215) (2021, author not named), [Pronunciation Studio](https://pronunciationstudio.com/polish-speakers-english-pronunciation-errors/) (J. Hudson, 2013), [lingology.pl](https://www.lingology.pl/blog/falszywi-przyjaciele-polsko-angielscy) (J. Smolczewski, 2026).

1. **Articles: omission first, then overuse.**
   - *What goes wrong:* *the* is missing with known or unique things (`Close door, please.`, `Sun is hot.`); *a* is missing before singular count nouns (`I have car.`, `When I was boy…`); *the* is added to names and generic nouns (`I went to the Gdańsk.`); *a / an* chosen by spelling (`an young man`); *ten / ta / to* used where English wants *the*.
   - *Examples:* `I'm teacher. ✗ → I'm a teacher. ✓` / `Can you open window? ✗ → Can you open the window? ✓` / `I went to the Gdańsk. ✗ → I went to Gdańsk. ✓` / `an young man ✗ → a young man ✓`
   - *Why:* Polish has no articles. Definiteness comes from word order (new information goes last: „Do sklepu wszedł mężczyzna" vs „Mężczyzna wszedł do sklepu"), context and *ten / jakiś / pewien*. Polish Wikipedia says the same in one line: articles are left out in Polish translations because Polish lacks this part of speech, and demonstratives and word order do some of the work ([pl.wikipedia](https://pl.wikipedia.org/wiki/Przedimek)).
   - *Evidence:*
     - [research-backed] Rozovskaya & Roth 2010, Table 4: Polish writers made **71 article errors, 1.5 per 100 words** (the nine-L1 average is also 1.5; Russian 2.5, Czech 2.1, German 0.5, French 0.4). By type: **missing *the* 37%**, **missing *a* 18%**, extraneous *the* 17%, extraneous *a* 8%, a / the confusion 11%, multiple labels 4%, confusion with a possessive or demonstrative 4%.
     - Same paper, Table 3: articles are **15.1%** of all corrections in the Polish subcorpus (12.5% over all L1s).
     - The paper's own comment: speakers of German, French and Italian are "three to four times less likely to make an article mistake than the speakers of Chinese and all of the Slavic languages".
     - [research-backed, qualitative] S&P give `I went to the Gdańsk`, `I visited the Sierpc` (overuse), `When I was…boy` (underuse) and `an young man`.
     - [practitioner opinion] The TEFL Academy: Polish speakers "will often leave them out".
     - Two article studies of Polish learners were found and **could not be opened** (Ekiert 2004; Świątek 2010), so nothing here says which article contexts are hardest (§11).
   - **Content consequence:** Polish errors lean toward **omission (55%)** over overuse (25%). That is the reverse of Russian (omission 42%, overuse 37%, with extra *the* the largest single type) and of Chinese (extra *the* 48%) in the same table. So the Polish lessons spend their first and longest part on *putting the article in* (*a* before a singular count noun, *the* for the known thing), and a shorter second part on withholding it (names, generic plurals, uncountables) (§8 `articles`, `the`, `articles-2`, `articles-3`). The sample is 71 errors; treat the split as a direction, not a measurement.
2. **Prepositions and case calques.**
   - *Examples:* `on the picture ✗ → in the picture ✓` (na zdjęciu) / `in Monday ✗ → on Monday ✓` (w poniedziałek) / `He is in the bus. ✗ → He's on the bus. ✓` (w autobusie) / `I went to home. ✗ → I went home. ✓` (do domu) / `I play on guitar. ✗ → I play the guitar. ✓` (gram na gitarze) / `I speak English on the lesson. ✗ → …in class. ✓` (na lekcji) / `in the age of 25 ✗ → at the age of 25 ✓` (w wieku) / `I work here from five years. ✗ → I've worked here for five years. ✓` (od pięciu lat)
   - *Why:* Polish marks these relations with seven cases and its own preposition set; *na*, *w*, *do* and *od* each split into several English prepositions, and some Polish verbs take a bare case where English needs a preposition (*słuchać muzyki* → listen **to** music; *czekać na* → wait **for**).
   - *Evidence:*
     - [research-backed] Rozovskaya & Roth 2010, Table 5: **77 preposition errors, 1.7 per 100 words** for Polish writers (average 2.1; Russian 2.3). By type: wrong preposition 49%, extra preposition 18%, missing preposition 16%, acceptable but improvable 17%. Table 3: prepositions are **16.3%** of all corrections in the Polish subcorpus, slightly more than articles (15.1%). The authors note that sentences with preposition errors were deliberately selected, so the share is inflated.
     - [research-backed, qualitative] S&P: `I went to home`, `I play on guitar`, `I speak English on the lesson`.
     - [practitioner opinion] Expats Poland: `in the age of 25`, `On age 20`, `I work here from five years`.
     - `in Monday` and `in the bus` were read in a Polish university article whose PDF was only partly readable; its authors and title were not recovered, so it is not in the source list (§11). `on the picture`, `depend from` and `wait on` have no opened source.
   - Teach the core set (`prep`) and verb + preposition chunks as vocabulary; not a standing rule.
3. **Present Perfect vs Past Simple and Present Simple.**
   - *Examples:* `I live here since five years. ✗ → I've lived here for five years. ✓` / `I haven't seen her yesterday. ✗ → I didn't see her yesterday. ✓` / `Have you been to the USA yet? — No, I didn't. ✗ → No, I haven't. ✓` / `How long you are in Poland? ✗ → How long have you been in Poland? ✓`
   - *Why:* Polish has one past tense and marks completion with aspect (*zrobiłem / robiłem*), not with tense. A state that began in the past and continues takes the Polish **present** with *od* („Mieszkam tu od pięciu lat"), and *od* covers *since*, *for* and *from*.
   - *Evidence:*
     - [practitioner opinion] The TEFL Academy: "There are no perfect tenses in Polish"; speakers use the past or present simple instead; `How long you are in Poland?`.
     - [practitioner opinion] Expats Poland: `I live here since five years`, `I work here from five years`.
     - [research-backed, qualitative] S&P: `I haven't seen her yesterday`; `Have you been to the USA yet? No, I didn't.`
     - [research-backed] Rozovskaya & Roth 2010, Table 3: verb-form corrections (tense and inflection together) are **4.0%** of Polish corrections, below the 5.2% average. That is a ceiling for tense errors in advanced essays, and it is low.
     - **No Polish-L1 count of Present Perfect errors was found.** One questionnaire study on how Polish learners perceive the universal perfect (Rosario 2022) was located and could not be opened (§11).
   - **Content consequence:** the two errors pull opposite ways (Present Perfect with *yesterday*; Present Simple with *od pięciu lat*). `perfect` and `perfect-2` teach both, and `perfect-2` treats *od → since / for* as its main point.
4. **Lexical transfer: false friends, one Polish word for two English words, calques ("Ponglish").**
   - *Examples:*
     - false friends: `my actual job ✗ → my current job ✓` (aktualny) / `Eventually we can meet on Friday. ✗ → We could possibly meet on Friday. ✓` (ewentualnie) / `She's very sympathetic. (= nice) ✗ → She's very nice. ✓` (sympatyczny) / `a high pension (= pay) ✗ → a high salary ✓` (pensja) / `I need a receipt from the doctor. ✗ → …a prescription… ✓` (recepta) / `He works in a fabric. ✗ → …in a factory. ✓` (fabryka) / `I bought a new dress for the gym. ✗ → …a new tracksuit… ✓` (dres) / `It's in the magazine. (= storage) ✗ → …in the warehouse. ✓` (magazyn) / `a salad (= the leaves) → lettuce ✓` (sałata);
     - one word, two verbs: `do a mistake ✗ → make a mistake ✓` (robić) / `Can you borrow me a pen? ✗ → Can you lend me a pen? ✓` (pożyczyć) / *uczyć się* → learn or study, *uczyć* → teach;
     - calques: `I have 20 years. ✗ → I'm 20 (years old). ✓` (mam 20 lat) / `today morning ✗ → this morning ✓` (dziś rano) / `I'm interesting in history. ✗ → I'm interested in… ✓` / `I am boring. (= bored) ✗ → I'm bored. ✓` / `Thank you from the mountain. ✗ → Thanks in advance. ✓` (z góry dziękuję) / `I will finish 30 next month. ✗ → I'll turn 30… ✓` (skończę 30 lat).
   - *Evidence:*
     - [practitioner opinion] lingology.pl lists 20 pairs: *aktualny, ewentualnie, aktualnie, kompleksowy, konsekwentny, pensja, promocja, recepta, obligacja, reklamacja, sympatyczny, patetyczny, ordynarny, lunatyk, brat, fabryka, prezerwatywa, dres, sałata, magazyn* (also the source for en-pl.md §4.6). One teacher's selection, not a study.
     - [practitioner opinion] The TEFL Academy repeats four of them (*ewentualnie, aktualny, fabryka, sympatyczny*).
     - [practitioner opinion] Expats Poland: `I have 20 years`, `do mistakes`, `today morning`, `Can you borrow me your pen?`, `I am boring`, `I will finish 30`, learn / study / teach.
     - [research-backed, qualitative] S&P: `Can you borrow me some money?`, `I'm interesting in…`, `Thank you from the mountain`.
     - [curriculum convention] English Wikipedia's *Poglish* article names the mix (Poglish, Polglish, Ponglish; Polish *polglisz*), counts false friends and calques as part of it, and gives „szoping" [ˈʂɔpiŋk] as a phonetic borrowing ([Wikipedia](https://en.wikipedia.org/wiki/Poglish)).
     - `make a photo` (zrobić zdjęcie), `How does it look like?` (Jak to wygląda?), `I feel myself well` (czuję się), `say me` (powiedz mi), *wygodny* → comfortable / convenient, and the false friends *data, szef, hazard, lektura, paragon, genialny, ekstra, dywan* are standard teacher lore with **no source opened** (§11).
5. **Word order: statement order in questions, free Polish order in statements.**
   - *Examples:* `How long you are in Poland? ✗ → How long have you been in Poland? ✓` / `You like coffee? ✗ (as a neutral question) → Do you like coffee? ✓` / `To shop entered man. ✗ → A man entered the shop. ✓` / `I was yesterday at home. ✗ → I was at home yesterday. ✓` / `I very like it. ✗ → I really like it. ✓` / `I don't know where does she live. ✗ → …where she lives. ✓`
   - *Why:* Polish forms yes/no questions with *czy* or intonation alone and keeps statement order after question words; it has no auxiliary *do*. In statements, order shows what is new, not who does what (the cases do that).
   - *Evidence:* [practitioner opinion] The TEFL Academy (questions without inversion); Expats Poland (`I was yesterday at home`; a reader's `and after turned up three policemen at his door`). [research-backed, qualitative] S&P (`To shop/store entered man` for „Do sklepu wszedł mężczyzna"). [research-backed] Rozovskaya & Roth: word-order corrections are 2.3% of Polish corrections (average 2.2%), so in advanced writing this is a small category. The *very like* and indirect-question items have no opened source.
6. **Subject left out; *it* and *there*.**
   - *Examples:* `Is cold. ✗ → It's cold. ✓` / `Am tired. ✗ → I'm tired. ✓` / `Is a problem. ✗ → There's a problem. ✓` / `On the table is a book. ✗ → There's a book on the table. ✓`
   - *Why:* Polish drops subject pronouns (the verb ending shows the person: „Jestem zmęczony") and has subjectless sentences („Jest zimno", „Pada"). „Na stole jest książka" puts the new thing last, so learners put it last in English too.
   - *Evidence:* [practitioner opinion, mine], **no source opened**. It replaces the Russian "no *be* in the present" zone: Polish keeps the copula („On jest studentem", „To jest Marek"; en-pl.md §4.7), so `He student` is **not** a typical Polish error and the `be` lesson must not teach it as one.
7. **Uncountable nouns that are countable or plural in Polish.**
   - *Examples:* `advices ✗ → advice ✓` / `informations ✗ → information ✓` / `furnitures ✗ → furniture ✓` / `I don't have much friends. ✗ → …many friends. ✓` / `The news are bad. ✗ → The news is bad. ✓` / `The money are on the table. ✗ → The money is… ✓`
   - *Why:* *rady, informacje, meble, wiadomości* are ordinary plurals in Polish, *pieniądze* is plural only, and *dużo* covers both *much* and *many*.
   - *Evidence:* [practitioner opinion] The TEFL Academy (*advices, informations, furnitures*); Expats Poland (*much friends*). The *news / money* agreement items are this profile's examples. [research-backed] Noun-number corrections are only **1.3%** of Polish corrections in Rozovskaya & Roth (average 3.0%): plural *-s* itself is not the problem, countability is.
8. **Conditionals and time clauses with *will*.**
   - *Examples:* `If I will see him, I'll tell him. ✗ → If I see him, I'll tell him. ✓` / `When I will arrive, I'll call you. ✗ → When I arrive… ✓`
   - *Why:* Polish uses the future after *jeśli* and *kiedy* („Jeśli go zobaczę, powiem mu").
   - *Evidence:* [practitioner opinion] The TEFL Academy (the first example). No count.
9. **Modal verbs treated like ordinary verbs.**
   - *Examples:* `Do you must work on Sundays? ✗ → Do you have to work on Sundays? ✓` / `Will you can help me? ✗ → Will you be able to help me? ✓` / `I musted be at school yesterday. ✗ → I had to be… ✓` / `I must to go now. ✗ → I must go now. ✓` / `You mustn't come. (= nie musisz) ✗ → You don't have to come. ✓`
   - *Why:* *musieć* and *móc* are full verbs in Polish, with every tense and an infinitive after them; and „nie musisz" looks like *mustn't* but means the opposite of a ban.
   - *Evidence:* [research-backed, qualitative] S&P (the first three). [practitioner opinion] Expats Poland (`I must to go now`). The *mustn't* item is standard lore, no source opened.
10. **Punctuation: Polish commas.**
    - *Examples:* `I think, that he is right. ✗ → I think that he is right. ✓` / `The man, who lives next door, is a doctor. (defining) ✗ → The man who lives next door is a doctor. ✓`
    - *Why:* Polish puts a comma before every *że*, *który*, *żeby*, *bo*; English does not before *that* or a defining *who*.
    - *Evidence:* [research-backed] Punctuation is the **largest category of all corrections in the Polish subcorpus, 45.2%** (Rozovskaya & Roth, Table 3; average 22.5%). The paper does not say which punctuation marks; the comma explanation is **my inference** and the examples are mine. Low cost to teach: one body note in `joining` and `relative`, one in `email`.
11. **Double negation.**
    - *Examples:* `I don't know nothing. ✗ → I don't know anything. ✓` / `Nobody didn't come. ✗ → Nobody came. ✓`
    - *Why:* Polish requires it („Nic nie wiem", „Nikt nie przyszedł").
    - *Evidence:* [practitioner opinion], no source opened.
12. **Continuous forms and state verbs.**
    - *Examples:* `I read a book now. ✗ (= at this moment) → I'm reading a book. ✓` / `I'm knowing him. ✗ → I know him. ✓`
    - *Why:* the Polish present („Czytam") covers both *I read* and *I'm reading*; the imperfective aspect is not the continuous.
    - *Evidence:* [practitioner opinion], no source opened. Light zone: reweight, do not expand.
13. **Reported speech and sequence of tenses; *he / she* for things.**
    - *Examples:* `He said that he is tired. → He said (that) he was tired. ✓` / `She asked where do I live. ✗ → …where I lived. ✓` / `My phone is old. He doesn't work. ✗ → It doesn't work. ✓` (telefon — on)
    - *Evidence:* [practitioner opinion], no source opened.
14. **Pronunciation.** Each item is tagged separately.
    - **Whole words stored wrong, mostly from spelling.**
      - [research-backed] Szpyra-Kozłowska 2011: of 1,600 tokens read by 20 advanced students, **only 655 (41%) were pronounced correctly**; individual students ranged from 22.6% to 70%. Correct responses by category: words with an interdental next to a consonant other than /s/ 70% (*monthly, birthday*), several liquids 66% (*particularly* and *regularly* far lower), **stress 52%** (*caricature*), long words 51%, **spelling-induced errors 40%** (*hideous, haven, thoroughly, Graham*), irregular alternations 33.5% (*courteous, managerial*), a category whose label was lost in extraction and whose hardest items are Polish cognates (*algebra, gigantic, Disney*) **24%**, interdental + /s/ clusters 12% (*strengths, lengths*), **two high front vowels in a row 7.5%** (*cheating, ceiling, greedy, repeating*).
      - The paper's explanation of the spelling category: Polish letter-to-sound habits applied to English (silent letters pronounced in *nestle*, *tomb*), English rules over-applied (*steak* like *meat*; *surface* and *palace* like *face*), and words that look the same in both languages (*chaos, model, atom, safari, marketing*; names such as *Nepal*, *Adam*, *Clinton*). "As Polish learners have more access to written rather than to spoken English, spelling exerts a powerful effect."
      - [research-backed, qualitative] S&P: *surface* and *comfortable* said with /eɪ/, as in *face* and *table*.
      - Consequence: the aid must show the whole word, the audio must be easy to replay, and the `pron` lesson and deck 18 need cognate traps, not only minimal pairs.
    - **Word stress.** Polish stress is on the second-to-last syllable (Council for the Polish Language booklet, as cited in en-pl.md §2.1). Szpyra-Kozłowska: learners "typically employ Polish penultimate stress", and also misplace it elsewhere. Typical traps (mine, no source): *hotel* (Polish HO-tel), *camera*, *comfortable*, *vegetable*, *interesting*, *Japan*. The §6 rule of ˈ in every word is aimed at this.
    - **/æ/ vs /e/, and /iː/ vs /ɪ/.**
      - [research-backed] Bakkouche & Post 2025, identification accuracy: /æ/ 68.3% (intermediate) and 77.2% (advanced); /e/ 70.1% and 81.4%; /iː/ 74.2% and 83.5%; /ɪ/ 76.8% and 87.6%. *Bed / bad* stayed the hardest contrast in perception and production; *sheep / ship* was easier and closer to native in the advanced group. The authors' account: Polish has six vowels (/i, ɨ, ɛ, a, ɔ, u/) and learners map English vowels onto them.
      - These learners had lived in the UK for years; learners in Poland will be at or below the intermediate figures.
      - Consequence: *bad / bed*, *man / men* deserve at least as much room as *ship / sheep*, which every textbook already drills.
    - **/æ/, /ʌ/ and /ɑː/ all become Polish *a*** (*hat, hut, heart*). [practitioner opinion] Pronunciation Studio.
    - **TH → f / t / s and d / z.** `think` → *fink* or *tink*, `this` → *dis*, `three` → *tree*. [practitioner opinion] Pronunciation Studio (/f/ and /d/), Expats Poland (f, d, t), The TEFL Academy (/θ/ absent in Polish). [research-backed, qualitative] S&P (*through* with f or s). Szpyra-Kozłowska calls the interdentals "among the most difficult sounds" and shows the cluster effect above.
    - **Final devoicing.** `bed` → *bet*, `cab` → *cap*, `rag` → *rack*, `love` → *luff*. Polish devoices word-final obstruents (Council booklet and Wikipedia *Polish phonology*, as cited in en-pl.md §6.4). [practitioner opinion] Pronunciation Studio. Szpyra-Kozłowska lists "Word-Final Obstruent Devoicing and Voice Assimilation" among Polish rules wrongly applied to English, without a rate.
    - **-ing as /ɪŋk/ or /ɪn/.** `singing` → *singink*. [practitioner opinion] Pronunciation Studio; The TEFL Academy (/ŋ/). The Wikipedia example „szoping" [ˈʂɔpiŋk] shows the Polish habit in a loanword.
    - **The letter w read as /v/.** `wine` → *vine*, `work` → *vork*; the reverse over-correction (*very* → *wery*) also occurs. [practitioner opinion] Expats Poland. Polish has both sounds: **/w/ is the Polish letter ł and /v/ is the Polish letter w**, so this is a spelling problem, not a new sound [my inference; native check]. It is the cheapest fix in the list: „angielskie w = polskie ł".
    - **Trilled r; r pronounced in every position** (fine in American English if it is not trilled). [practitioner opinion] Pronunciation Studio, The TEFL Academy.
    - **Unaspirated /p t k/** (*park, time, came*), **no linking** between a final consonant and a following vowel, **one strong form for *are*** and other function words, **diphthong /oʊ/** (*go, so, don't*) flattened or split, and the many values of the letter *o*. [practitioner opinion] Pronunciation Studio.
    - **/h/ as Polish *ch* [x]; -ed said as a separate syllable** (*ask-ed*). [practitioner opinion]: the first has no source opened; the second is a reader's comment on Expats Poland.
    - **No vowel reduction.** Polish has no schwa and gives every syllable a full vowel (*about, banana, comfortable*). [practitioner opinion] Expats Poland ("over-pronouncing syllables"). The weak forms in §6 are aimed at this.
15. **Things that are *not* zones** (do not over-teach):
    - **Copula *be* in the present:** Polish has it (see zone 6). Keep the `be` lesson, but argue from the dropped subject and the instrumental case („Jest nauczycielem" → He's **a** teacher), not from a missing verb.
    - **Plural -s:** 1.3% of corrections (zone 7). Polish marks number on every noun.
    - **Verb agreement as an idea:** Polish verbs agree with the subject in person and number, so third-person *-s* needs practice, not explanation.
    - **r / l, f / p, v / b:** Polish has all six sounds, so the ko-en pairs (*rice / lice, fan / pan, vote / boat*) are quick wins (§8 `pron`).

## 5. Learner starting point

- **School exposure** [curriculum convention]:
  - A modern foreign language is part of compulsory integrated teaching in grades I–III and has 3 hours a week in each of grades IV–VIII; a second foreign language starts in grade VII ([Eurydice, Poland](https://eurydice.eacea.ec.europa.eu/eurypedia/poland/teaching-and-learning-single-structure-education)).
  - Eurostat: in 2024 "all or nearly all (99% to 100%)" primary pupils in Poland were learning English (EU: 82.5%) ([Eurostat](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Foreign_language_learning_statistics)).
  - So adults under about 40 typically had English through most of their schooling; older adults often had Russian or German first [practitioner opinion, no source opened]. Expats Poland observes that calques such as `I have 20 years` are most persistent among people over 40.
- **Exams** [curriculum convention]:
  - **Matura** (school-leaving exam): English is the modern foreign language that most candidates have chosen for years (that a foreign language is a compulsory matura subject is general knowledge, not checked). In 2025 more than 255,000 people sat the matura; the English basic-level average was **78%**, 93% passed it, and the extended-level average was 64% ([Wprost, 8 July 2025, reporting CKE data](https://www.wprost.pl/12066565)). CKE's own report was not opened (§11).
  - **Egzamin ósmoklasisty** (end of primary school) is an external exam (Eurydice); its foreign-language part and its figures were not checked.
  - Familiar task formats [not verified against a paper]: multiple choice, gap-fill, sentence transformation, short written forms (email, blog post). They map onto `mc`, `fill` and `type`.
- **Profile figures:**
  - [research-backed, test-taker data] **EF EPI, Poland:** score **587**, rank **15**, down 13 points on the previous edition; global average 485. Skill scores: **reading 614, listening 562, writing 518, speaking 503** ([EF EPI, Poland](https://www.ef.com/wwen/epi/regions/europe/poland/)). The fetched page text did not show the edition year or the proficiency band; the 2025 fact-sheet PDF is an image and could not be read (§11).
    - Cities: Lublin 610, Krakow 608, Poznan 602, Gdańsk 596, Wroclaw 594, Katowice 594, Warsaw 591; lowest listed Białystok 576. The regional spread is small (Lesser Poland 604 to Lubusz 575).
    - By job: teachers 633, customer service 624, strategy and project management 611, IT 610, students 610; technicians and maintenance 534.
    - **Shape:** reading is highest and **speaking is lowest, 111 points apart**; writing is second lowest. Self-selected online test-takers; no sample size.
- **Motivators** [practitioner opinion, no source opened]: work with international teams and clients (IT, shared-service and outsourcing centres, logistics), work or family in the UK, Ireland, Germany or the Netherlands, travel, the matura, English-language media and games. The app's GOALS (travel / work / social / media) cover these; the work deck and the `email` lesson matter more than in ko-en.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1, move fast.** Most adults are false beginners or better: they recognise every A1 form and its school name. The value is in typed items, audio and the Polish-specific traps, not in first explanations.
  2. **Production first.** Weight listen-then-say review, typed sentences and minimal pairs (*bad / bed, bad / bat, think / sink, sing / sink, wine / vine*).
  3. **Never gate on articles or prepositions.** Both are still the two largest grammar categories in advanced essays (Rozovskaya & Roth).
  4. **Make the article carry the answer** in typed items (§7), with the missing-article distractor first.
  5. **Fight the spelling.** Card notes for cognates say where the stress falls and which letter is silent (Szpyra-Kozłowska).
  6. Name real uses in blurbs („przyda się na spotkaniu z zespołem", „częsty błąd na maturze") only where true. Never promise exam scores.

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners already know.** Polish dictionaries show English pronunciation in IPA: Polish Wiktionary prints, under „wymowa", `bryt. IPA: /ˈkʌmf.tə.bəl/` and `amer. IPA: /ˈkʌm.fɚ.tə.bəl/`, in slashes ([pl.wiktionary](https://pl.wiktionary.org/wiki/comfortable)) [curriculum convention, one source].
  - That Polish school textbooks print and drill IPA is general knowledge, **not verified against a textbook** (§11). That adults still read it years after school is **assumed, not measured**, as in zh.md and ru.md. The toggle-off rate will show it.
- **Polish-letter respelling** („łot's jor nejm", „senk ju") is what phrasebooks and informal notes use [practitioner opinion, no source opened]. It has one real advantage: Polish spelling already has letters for most English consonants (*sz, cz, dż, ż, j*, and **ł for /w/**). It is rejected because it **writes the Polish errors into the aid**:
  - a Polish reader devoices a final *b, d, g, w, z, ż* by rule, so „bed" in Polish letters is read [bet] — the exact error in §4.14;
  - /æ/, /ʌ/ and /ɑː/ all become *a*, and /æ/ – /e/ is the contrast Polish learners identify worst (Bakkouche & Post 2025);
  - /θ/ and /ð/ have no letter, so they become *f, t, s* and *d, z*;
  - /ɪ/ and /iː/ become *y* and *i* (usable) or both *i*; length cannot be shown; there is no letter for schwa, so every syllable gets a full vowel;
  - „-ing" written *-ing* is read [iŋk];
  - stress has no mark in Polish spelling, and Polish readers put it on the second-to-last syllable.
  - Szpyra-Kozłowska's finding that spelling is the main source of wrong word shapes argues for an aid that does **not** look like spelling in either language.
- **No study compares IPA, respelling and no aid** for Polish learners. The recommendation is inference [practitioner opinion].

**Recommendation: IPA in every `pron` field (profile.json `"pron": "required"`), written exactly as the Chinese course writes it.** It is shown by default and hidden with the toggle „Pokaż transkrypcję".
- **Why copy zh, not invent a Polish variant:**
  1. Learners can read it (above), as zh and ru learners can.
  2. **Reuse:** all three courses are scaffolded from ko-en, so every unchanged English string copies its zh (or ru) `pron` byte for byte: ru.md counted 356 of the 366 ko-en card targets and 325 `{{ex}}` rows already transcribed in zh, and ru added the `alphabet` deck and its own appended cards since. Only localised cards (§9), pl-only cards, the `ponglish` lesson and new body rows need new transcriptions.
  - **Copy from zh or ru, never from vi:** vi's IPA uses ɚ, ɝ and ‿, which this `pronPattern` rejects. Dictionary IPA pasted from Wiktionary also fails (syllable dots, ɚ): convert it to the key.
  3. **Consistency:** `lint.js` blocks the same English text with two different aids inside one pack.
- **Binding rules:** `docs/profiles/zh.md` §6 rules **as settled by `tools/content/zh/PRON-RULES.md` A–D** (symbols, syllabic consonants, weak and strong forms, stress, format). Where zh.md §6 and PRON-RULES.md differ, **PRON-RULES.md wins**, because the rows to be copied follow it.
- **The key** (repeated here so this profile is self-contained):
  - **Delimiters:** one pair of slashes `/…/`, words separated by one space, no punctuation, capitals, digits or syllable dots; ` ‖ ` between two sentences in one row; alternatives as two slashed groups. Never `|`, `[ ]` or `//`.
  - **Stress:** ˈ (U+02C8) before the stressed syllable of **every word except the closed function-word list** (articles, personal and possessive pronouns, *be*, auxiliary *do / have*, modals, prepositions, conjunctions, existential *there*), monosyllables included. ˌ only inside long words, in *-teen* numbers and letter-by-letter abbreviations. Every `pron` therefore contains ˈ.
  - **Vowels (American values in school symbols):** iː / ɪ, e / æ, ʌ / ə, uː / ʊ, ɑː (LOT: hot), ɔː (THOUGHT: talk, dog), oʊ (GOAT), ɜːr (NURSE), ər (lettER), ɪr / er / ʊr, ɑːr / ɔːr, eɪ aɪ ɔɪ aʊ; final unstressed -y = i.
  - **Consonants:** p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r w j. **ASCII g** (never U+0261 ɡ), **plain r** (never ɹ), no flap symbol, no ɚ / ɝ.
  - **Weak forms** by default (a /ə/, the /ðə/ or /ði/, to /tə/ or /tu/ before a vowel, for /fər/, of /əv/, and /ənd/, can /kən/, could /kəd/, are /ər/, was /wəz/, you /ju/, your /jʊr/); strong form and ˈ when stressed or alone (`Me too.` /ˈmiː ˈtuː/).
  - **Codas written in full:** -s as /s z ɪz/, -ed as /t d ɪd/, clusters, **voiced finals as voiced** (*bad* /ˈbæd/, *dogs* /ˈdɔːgz/). No inserted vowels.
  - **Numbers** as words; **abbreviations** letter by letter; **names** as the en-US voice says them (§9).
- **Symbol table**, with the note a Polish reader needs (the notes go in the `pron` lesson body, never in a `pron` field):

  | Sound | Write | British symbol learners may know | Example | Note for Polish speakers (lesson prose) |
  |---|---|---|---|---|
  | FLEECE / KIT | iː / ɪ | same | leave /ˈliːv/, live /ˈlɪv/ | iː — długie polskie *i*; ɪ — krótkie, bliskie polskiemu *y* [native check] |
  | unstressed final -y; weak *you, to* before vowels | i / u | i / u | very /ˈveri/ | |
  | DRESS / TRAP | e / æ | same | bed /ˈbed/, bad /ˈbæd/ | æ — szerzej niż *e*, między *e* i *a*; najtrudniejsza para |
  | STRUT / schwa | ʌ / ə | same | cup /ˈkʌp/, about /əˈbaʊt/ | ʌ — krótkie, zbliżone do *a*; ə — słaba, niewyraźna samogłoska, nigdy pod akcentem |
  | GOOSE / FOOT | uː / ʊ | same | food /ˈfuːd/, book /ˈbʊk/ | |
  | LOT (hot, stop) | ɑː | ɒ | hot /ˈhɑːt/ | amerykańskie *o* brzmi jak długie *a* |
  | THOUGHT (talk, dog) | ɔː | ɔː | talk /ˈtɔːk/, dog /ˈdɔːg/ | |
  | GOAT | oʊ | əʊ | go /ˈgoʊ/ | dwugłoska: *o* przechodzi w krótkie *u*, nie samo *o* |
  | NURSE / lettER | ɜːr / ər | ɜː / ə | bird /ˈbɜːrd/, water /ˈwɔːtər/ | r słychać, ale język nie drga |
  | NEAR / SQUARE / CURE | ɪr / er / ʊr | ɪə / eə / ʊə | here /ˈhɪr/, there /ˈðer/ | |
  | START / NORTH | ɑːr / ɔːr | ɑː / ɔː | car /ˈkɑːr/, door /ˈdɔːr/ | |
  | FACE / PRICE / CHOICE / MOUTH | eɪ / aɪ / ɔɪ / aʊ | same | | jak polskie *ej, aj, oj, au* |
  | th | θ / ð | same | think /ˈθɪŋk/, this /ˈðɪs/ | czubek języka między zębami; θ to nie *f, t, s*, ð to nie *d, z* |
  | w / v | w / v | same | wine /ˈwaɪn/, vine /ˈvaɪn/ | **symbol w = polskie *ł*; symbol v = polskie *w*** |
  | j / dʒ | j / dʒ | same | yes /ˈjes/, job /ˈdʒɑːb/ | symbol j = polskie *j*; angielska litera *j* to dʒ (jak *dż*) |
  | ʃ ʒ tʃ dʒ | same | same | she /ʃi/, watch /ˈwɑːtʃ/ | bliskie *sz, ż, cz, dż*, nieco miękciej |
  | ŋ | ŋ | same | sing /ˈsɪŋ/ | jak *n* w słowie „bank”, ale bez *k* na końcu |
  | h | h | same | house /ˈhaʊs/ | sam wydech, lżej niż polskie *ch* |
  | r | r | r | right /ˈraɪt/ | bez drgania czubka języka |
  | other consonants | p b t d k g f s z m n l | same | | *p, t, k* na początku wyrazu z lekkim przydechem |
  | syllabic l / n at word end (PRON-RULES A4) | no ə: /ˈpiːpl/, /ˈsevn/, /ˈsteɪʃn/; ə kept after other consonants: /ˈoʊpən/ | | | |

- **Weak and strong forms** (PRON-RULES B, binding):

  | word | unstressed (default) | strong (alone, contrast, stranded) |
  |---|---|---|
  | a / an / the | ə / ən / ðə (ði before a vowel sound) | — |
  | to | tə; tu before a vowel | tuː |
  | for / from / at / of | fər / frəm / ət / əv | fɔːr / frʌm / æt (stranded: no ˈ on monosyllables) |
  | and / or / but | ənd / ər / bət | — |
  | can / could / should / would | kən / kəd / ʃəd / wəd | — |
  | do / does / did / have / has / had (auxiliary) | də / dəz / dɪd / həv / həz / həd | ˈduː, ˈhæv … as main verbs |
  | have to / has to | ˈhæf tə / ˈhæs tə | |
  | you / your / you're | ju / jʊr / jʊr | ˈjuː |
  | me / he / she / we | mi / hi / ʃi / wi | ˈmiː |
  | that (relative / demonstrative) | ðət | ˈðæt |
  | there (existential / adverb) | ðer | ˈðer |
  | so (conjunction / adverb) | soʊ | ˈsoʊ |

  Phrasal-verb particles take ˈ (pick up /ˈpɪk ˈʌp/); ˌ only inside long words, in -teen numbers, in TV /ˌtiː ˈviː/ and in letter-by-letter abbreviations.

- **Polish-specific additions** (they change no zh form):
  1. **Three symbols that look like Polish letters and mean something else:** w (= *ł*), v (= *w*), j (= *j*, while the English letter *j* is dʒ). The `pron` lesson teaches these three first: they remove the *wine / vine* error and stop „jes" readings of *yes*.
  2. **British → American conversion table** in the `pron` lesson body, as zh rule 5: əʊ → oʊ, ɒ → ɑː, ɪə → ɪr, eə → er, final r is pronounced. Polish teaching has mostly used British models (§2).
  3. **Voiced finals.** One sentence in the lesson and in deck 18 notes: „Na końcu wyrazu nie ubezdźwięczniaj: bad to nie bat. Samogłoska przed dźwięczną spółgłoską jest dłuższa." The length cue is taken from ru.md §4.12 (Dmitrieva et al. 2010, a Russian study) and is **not verified for Polish speakers**.
  4. **Stress is marked in every word**, so a Polish reader sees at once that it is not always on the second-to-last syllable: hotel /hoʊˈtel/, comfortable /ˈkʌmftərbl/, vegetable /ˈvedʒtəbl/.
  5. **Polish letters never appear in a `pron`.** The `pronPattern` class has no ą ć ę ł ń ó ś ź ż and no y, c, q or x, so a hybrid such as /ˈłot/ or /ˈyes/ fails validation.
- **Validator settings (profile.json), with the `nativeScript` decision:**
  - **`"nativeScript": null`.** Polish is written in the Latin script, so there are two candidates.
    - *A regex of the nine Polish letters* (`[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]`) would turn "is in the native language" into "contains a Polish diacritic" for **every** native string: card meanings and notes, `{{ex}}` meanings, titles, blurbs, check questions, `why`, `p`, hints, glosses, deck names. Too many correct Polish strings have none: „tak", „nie", „kawa", „dom", „kot", „Jestem z Polski", „Mam psa", „To moja siostra", „Bez przedimka". Writers would have to bend natural translations to pass. It would also fail any English string with a Polish name in its Polish spelling (a „Łódź" card).
    - *`null`* makes the validator require a non-empty string that differs from its English counterpart (PIPELINE §3). That is the right test for a same-script language, and it is what id, vi and es use. Its known cost is the cognate rule (§9: „hotel" must be glossed) and a weaker check on strings with no counterpart, which `cueTest` repairs for prompts.
    - vi chose `null` because IPA could not pass a native-script test; since then `pronScript` exists, so that reason no longer applies. The reason here is the first one: a diacritics test is wrong for Polish.
  - **`"pronScript": "ˈ"`**, as zh, ru and th: a `pron` must contain a stress mark and differ from the English. With `nativeScript: null` this is nearly redundant with the pattern's look-ahead; it is kept so the three IPA profiles declare the same thing.
  - **`"pronPattern"`** — identical to zh's and ru's: `^(?=.*ˈ)/C+( C+)*/( /C+( C+)*/)*$` with `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]`. It rejects capitals, punctuation, syllable dots, `y c q x`, U+0261, ɚ, Polish letters, `//`, square brackets and a pron with no stress mark.
  - **`labels.cueTest`** — needed, because without it and without a script the validator only checks that an mc `q` or a type `hint` is non-empty, and the DSL injects nothing, so the bare-English prompts inherited from ko-en (32 mc questions and 23 type hints, PIPELINE §3) would pass untranslated.
    - vi solved this with a diacritics class (nearly every Vietnamese word has one); id with a word list (Indonesian has no diacritics). Polish sits between: most sentences have a diacritic, many short prompts do not („Wybierz poprawne zdanie.", „Present Perfect czy Past Simple?").
    - **Decision: both.** `cueTest` = the nine Polish letters in both cases **or** one of about 100 ASCII-only Polish words that are not English words (*czy, jak, jaki, kto, gdzie, kiedy, dlaczego, ile, nie, tak, jest, lub, albo, przed, bez, dla, angielsku, zdanie, forma, wyraz, wybierz, wpisz, napisz, przedimek, liczba, mnoga, czas, czasownik, rzeczownik, pytanie, poprawne, pasuje, znaczy, tylko, jeden, dwa, trzy, teraz, wczoraj, zawsze, nigdy, tych, mam, masz, wiele, kilka…*; the full list is in `pl.profile.json`). Each word is written with both initial cases, because the DSL and the validator compile `cueTest` without flags. Left out on purpose because they are also English words or tiles: *to, a, i, on, do, no, ten, my, we, pan, ale, bo, tu, co, ja, ma, sam*.
    - Tested locally: **0 matches in 4,346 strings of `packs/course-ko-en.js`** (every string, Korean removed) and 0 in the English targets, options, answers and tiles of the ru, id, zh and de packs; all sample Polish prompt frames listed below match; „Kot =", „I __ a student." and „coffee · like" do not, so they get the cue appended (mc) or fail (if written in full form). See the check output in §11.
    - Both cue strings match: « Co pasuje w lukę?» (ę) and « — z tych wyrazów» (*tych*, ó).
  - **What this means for writers:**
    - An mc `q` or type `hint` with no Polish letter and no cue word gets the cue appended **silently** in the `more/` shorthand. That is right for a gap question and wrong for a translation question. In ko-en, 107 mc questions use the frame `'<sentence>' =` (id.md §7). In Polish, **always write `„<zdanie>” po angielsku?`**, never `„<zdanie>” =`: „Kot" and „Mam dom" contain no cue.
    - Other frames, all tested to match: „Jak powiedzieć po angielsku „…”?", „Wybierz poprawne zdanie.", „Która forma jest poprawna?", „Present Perfect czy Past Simple?", „Forma liczby mnogiej od box?", „Co tu nie pasuje? She go to school."
    - Type hints: key words, then « — » and a short Polish note with a cue: „teacher — przedimek przed zawodem", „three · tree — trzy, czyli liczba mnoga". Otherwise the DSL appends « — z tych wyrazów», which is acceptable.
    - `why`, `p`, titles and blurbs are only checked for being non-empty (or different from the English). **Nothing stops an English `why`.** Reviewers must read them; the standing-rule keywords catch only the article and plural items.
- **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote IPA in prose and tables (`<b>/θ/</b>`).

**Worked examples.** "zh" / "ru" = copied byte for byte from `tools/content/zh/` or `tools/content/ru/` (same English string, found by grep); "new" = written for pl by the rules above. All rows pass `pronPattern` and `pronScript` (run in Node, output in §11); `/ˈjes?/`, `/pen/`, `/ˈɡet/` (U+0261), `[ˈjes]`, `//`, `/ˈłot/`, `/ˈyes/`, `/ˈkʌm.ftər.bl/` and `/ˈwɔːtɚ/` are rejected.

| English | `pron` | Source | Rules / Polish trap shown |
|---|---|---|---|
| It's cold today. | /ɪts ˈkoʊld təˈdeɪ/ | zh | GOAT oʊ, not school əʊ; a subject where Polish has none |
| Can you close the door? | /kən ju ˈkloʊz ðə ˈdɔːr/ | zh | weak *can / you / the*; no `?`; final /z/ stays voiced |
| I have two brothers. | /aɪ ˈhæv ˈtuː ˈbrʌðərz/ | zh | æ; ð not d; plural /z/ |
| Where do you live? | /ˈwer də ju ˈlɪv/ | zh | w = *ł*; weak auxiliary *do*; final /v/ voiced |
| Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | zh | weak *to*, *you* |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ | zh | ‖; ASCII g; voiced final g, not „dok" |
| think / sink | /ˈθɪŋk/ · /ˈsɪŋk/ | zh | θ vs s |
| bad / bat / bed | /ˈbæd/ · /ˈbæt/ · /ˈbed/ | zh, ru | final voicing; æ vs e (the hardest pair) |
| ship / sheep | /ˈʃɪp/ · /ˈʃiːp/ | ru | ɪ vs iː |
| wine / vine | /ˈwaɪn/ · /ˈvaɪn/ | ru | w = *ł*, v = *w* |
| hotel | /hoʊˈtel/ | zh | stress on the last syllable, not HO-tel |
| comfortable | /ˈkʌmftərbl/ | ru | stress and spelling trap (not „table"); syllabic l |
| vegetable | /ˈvedʒtəbl/ | new | three syllables, no /eɪ/ |
| singing | /ˈsɪŋɪŋ/ | ru | ŋ with no /k/ |
| asked | /ˈæskt/ | new | -ed = /t/, one syllable |
| a piece of advice | /ə ˈpiːs əv ədˈvaɪs/ | zh | uncountable; weak *a*, *of* |
| My name is Anna. | /maɪ ˈneɪm ɪz ˈænə/ | ru | localised name (§9) |
| I'm from Poland. | /aɪm frəm ˈpoʊlənd/ | new | weak *from* |
| I live in Warsaw. | /aɪ ˈlɪv ɪn ˈwɔːrsɔː/ | new | English name of the city; w = *ł* twice |
| Do you speak Polish? | /də ju ˈspiːk ˈpoʊlɪʃ/ | new | weak *do*, *you* |
| Can I speak to Mr. Nowak? | /kən aɪ ˈspiːk tə ˈmɪstər ˈnoʊvæk/ | new | surname as the en-US voice says it [not tested, §11] |
| Fifty zloty. | /ˈfɪfti ˈzlɔːti/ | new | currency as a word [dictionary form from memory, §11] |
| I've worked here since 2020. | /aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/ | zh | the *od* trap; number as words; *since* unmarked |
| BTW | /ˌbiː tiː ˈdʌbəljuː/ | zh rule | abbreviation, ˌ; W = „double u" |

- Before writing a "new" row, writers grep `tools/content/zh/` and `tools/content/ru/` for the English string; if it exists there, copy that `pron`.
- After writing, run a pl copy of `tools/content/zh/pron_check.js` (or the lead's lint) for consistency.

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "przedim|mnog|policzaln", "flags": "i" }`.
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **przedimek**, **liczba mnoga** or **policzalny / niepoliczalny**, in any case form.
- **Why stems:** Polish inflects (przedimek, przedimka, przedimkiem, przedimki, przedimków; liczba mnoga, liczby mnogiej, w liczbie mnogiej, liczbę mnogą; policzalny, niepoliczalne, policzalnych). The three stems are ASCII, so they need no `\b` and no Unicode handling; flag `i` lets a sentence-initial „Przedimek…" or „Liczba mnoga…" match.
- **„bez przedimka" counts**, which is intended: withholding the article is half of the skill.
- **What the validator counts** (validate.js `article-plural`): `order` — the `why` names a keyword **and** `x` holds an article tile or a singular / plural twin of a tile in `a`; `type` — the `why` names a keyword **and** every variant in `a` contains an article, or `x` holds an article or a twin. Put the competitor tile in `x` (`a`, `the`, `book` / `books`).

**Sample `why` lines** (all run against the regex in Node, output in §11; English bare, Polish quotes „ ”):
- „Przed nazwą zawodu potrzebny jest przedimek a: a teacher." → hit
- „Po two — liczba mnoga: brothers." → hit
- „Information jest niepoliczalne: bez a i bez -s." → hit
- „Druga wzmianka o tej samej rzeczy — przedimek the." → hit
- „These łączy się z liczbą mnogą, this — z jedną rzeczą." → hit (*mnogą*)
- „Rzeczownik policzalny w liczbie pojedynczej wymaga a." → hit
- „Przedimek the: chodzi o konkretną rzecz, którą obie osoby znają." → hit (sentence-initial capital, flag `i`)
- „Liczba mnoga bez przedimka: mówimy ogólnie o kotach." → hit
- „Bez przedimka: nazwy miast nie mają the." → hit
- „W Present Simple po he dodajemy -s." → **no hit** (correct: not an article or plural point)
- „Po did czasownik wraca do formy podstawowej." → **no hit**
- „Tu potrzebny jest rodzajnik?" → **no hit** (the course term is *przedimek*)

**Writer rules (keep the count meaningful):**
- Write „liczba mnoga" in full; never „l. mn." or „plural". Write „przedimek", never „rodzajnik" or „article".
- Use the keywords only in `why` lines of items that really hinge on articles or plurals. „Liczba pojedyncza" and „wybór odpowiedzi" do not match the stems, so they are safe anywhere.
- Because Polish errors are mostly omissions (§4.1), prefer `why` lines that say what must be **added**: „Policzalny rzeczownik w liczbie pojedynczej nie może stać sam: potrzebny przedimek a."
- Every mc `q` and type `hint` needs a Polish letter or a cue word (§6).

**Justification:**
- **Articles are the best-measured grammar error for Polish writers:** 15.1% of all corrections and 1.5 errors per 100 words, three to four times the rate of German, French and Italian writers (Rozovskaya & Roth 2010) [research-backed]; Polish has no articles.
- **The plural half rests on parity and countability, not on plural error data.** Noun-number corrections are 1.3% for Polish writers [research-backed]. But:
  - the shared English `order` / `type` items were written to the Korean rule, so `article-plural` costs **zero deviations**; only the Polish `why` must name the keyword [consequence of PILOT-SPEC §1.6];
  - the countability errors that do occur (*advices, informations, much friends*, §4.7) count as hits through „policzalny / niepoliczalny", so the plural half still tests a real Polish problem.
- **Why not a preposition rule**, given that prepositions are as frequent as articles (§4.2)? No such rule kind exists in validate.js; the shared items do not hinge on prepositions, so it would mean changing English items in most sets, each a deviation; and preposition choice is lexical (learned phrase by phrase), which suits decks and one lesson better than a rule in every set.
- **Why not a tense rule** (`tense-aspect`, proposed in OTHERS.md for other languages, not implemented)? The same cost, and no Polish-L1 count behind it (§4.3).

**Secondary emphasis (not validated; do not add these to the regex):**
- An item that turns on a preposition names **przyimek** and the Polish source: „W poniedziałek to po angielsku on Monday — przyimek on przy dniach."
- An item that turns on tense names the tense and the reason: „Ten okres jeszcze trwa (for five years) — Present Perfect.", „Jest yesterday, więc Past Simple, nie Present Perfect."
- An item that turns on a missing subject says so: „Angielskie zdanie musi mieć podmiot: It's cold."
- An item that turns on *do* names **czasownik posiłkowy do**: „W pytaniu potrzebny jest czasownik posiłkowy do."
- An item with *he / she* for an object says „O rzeczach mówimy it, nawet jeśli po polsku to „on” albo „ona”."

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in zh.md, id.md and ru.md):**
- **keep** = a fresh Polish explanation from the Polish point of view; English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice; the *Polish explanation and lesson-body example rows* shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed** for the 40 shared lessons.
- **add** = a new lesson with `deviations.json` `extraLessons` and profile.json `lessonOrder.after`. Its practice set must itself satisfy §7.

Ids and order are unchanged; nothing is replaced or dropped. The table has the 40 ids of `lib.js` `ORDER` (the brief's 39 plus `alphabet`) and the two additions in their places.

| lesson id | keep / reweight / add | note for Polish speakers |
|---|---|---|
| alphabet | reweight | Fixed English side (`docs/briefs/alphabet-spec.md`). Polish letter **names** differ from English ones almost everywhere: A is /eɪ/ (not „a"), **E is /iː/ and I is /aɪ/** (the classic mix-up when spelling a name), G /dʒiː/ vs J /dʒeɪ/ (Polish „gie", „jot"), H /eɪtʃ/ („ha"), K /keɪ/, Q /kjuː/ („ku"), R /ɑːr/, **V /viː/ („fał") vs W „double u" („wu")**, Y /waɪ/ („igrek"), Z /ziː/ („zet"). One body note: Polish letters ą ć ę ł ń ó ś ź ż have no English names, so spell a Polish name with the plain letter (Łukasz → L-U-K-A-S-Z) [practitioner opinion, mine] |
| pron | reweight | Teach the transcription first: slashes, ˈ = akcent, ː = długość, British → American table, and the three look-alike symbols **w = ł, v = w, j = j** (§6). Then the Polish traps in order of evidence: whole-word stress and spelling traps (hotel, comfortable, vegetable), æ / e (bad / bed), voiced finals (bad / bat, bag / back: „nie ubezdźwięczniaj"), θ / ð, ɪ / iː, -ing without /k/, weak forms. **Shared checks and practice stay as they are** (rice / lice, fan / pan, think / sink, vote / boat, right / light, three trees, bag, coffee, very light, and the stress of *hotel*). Their `why` lines say plainly when a pair is easy for Poles („r i l rozróżniasz bez trudu — pilnuj tylko, żeby angielskie r nie drgało"; „f i p, v i b to dla Polaków rozgrzewka") and spend the words on think, three, bag / back and ho-TEL. The third check (where is the stress in *hotel*?) is a gift for this course: Polish says HO-tel |
| be | reweight | **Not** a missing-verb lesson: Polish has *być* („On jest studentem"). Three Polish points instead: the subject cannot be dropped („Jestem zmęczony" → I'm tired; Am tired ✗); the instrumental after *być* becomes an article („Jest nauczycielem" → He's **a** teacher); age takes *be*, not *have* („Mam 20 lat" → I'm 20; I have 20 years ✗). *be* + verb (I am agree ✗ for „zgadzam się") as a body note |
| it-there | reweight | Subjectless Polish sentences need *it*: „Jest zimno", „Pada", „Jest późno" → It's cold, It's raining, It's late. „Na stole jest książka" / „Jest tu jakaś kawiarnia?" → There's a book on the table, Is there a cafe near here? (On the table is a book ✗): Polish puts the new thing last, English starts with *there* |
| articles | reweight | No przedimki in Polish, and Polish writers mostly **leave them out** (missing *the* 37% + missing *a* 18% of article errors, Rozovskaya & Roth). Lead with: a singular countable noun never stands alone (I have car ✗); *a* with jobs (I'm a teacher); *a / an* follows the sound (an young man ✗). *jakiś / pewien* ≈ *a* only sometimes; *ten* is not always *the* |
| plurals | reweight | Light on -s (Polish marks plural; noun number is 1.3% of corrections). Spend the time on this / these (ð, and ɪ vs iː), dopełniacz saksoński (the room of my sister → my sister's room), *people* and *children*, and saying -s as /s z ɪz/ with a voiced /z/ (dogs is not „doks") |
| present | reweight | Fixed subject–verb–object order vs free Polish order; the subject must be there („Lubię kawę" → **I** like coffee); adverb position (I was yesterday at home ✗); *don't / doesn't* for „nie" (I not like ✗) |
| questions | reweight | Polish asks with *czy* or with intonation and has no auxiliary. Bridge: where Polish puts *czy* at the front, English puts *do / does / is / can* there („Czy lubisz kawę?" → Do you like coffee?). After a question word the auxiliary still comes before the subject (How long you are in Poland? ✗ — The TEFL Academy). Body note: indirect questions go back to statement order (Tell me where she lives) |
| third-s | keep | Polish verbs agree with the subject (on pracuje), so the idea is familiar; make the -s audible and spelled. No do / does with modals (preview of `modals`) |
| prep | reweight | A main zone (1.7 errors per 100 words). Organise by Polish preposition: **w** → in / on / at (w poniedziałek → on Monday, w autobusie → on the bus, w domu → at home, w wieku 20 lat → at the age of 20); **na** → in / at / on (na zdjęciu → in the picture, na lekcji → in class, na spotkaniu → at the meeting); **do** → to or nothing (do domu → home); verbs: grać na gitarze → play the guitar, słuchać muzyki → listen to music, czekać na → wait for, zależeć od → depend on |
| countable | reweight | *rada, informacja, mebel, wiadomość* have plurals in Polish and *pieniądze* is plural only: advice, information, furniture, news, money are uncountable and singular (The news is…, Money is…). *dużo* = much / many. *a piece of* for one item |
| object-have | reweight | „Mam samochód" → I have a car (close to Polish; watch the article). Things are *it*, never *he / she* (telefon — on ✗). *swój* has no single equivalent: my / your / his / her by the subject. Age and hunger take *be* (I'm hungry) |
| can-like | reweight | „Bardzo lubię" → I really like / I like it very much (I very like ✗). „Podoba mi się" → I like (subject first). *umiem / mogę / potrafię* → can. like + -ing |
| polite | reweight | „Poproszę kawę" → Could I have a coffee? / I'd like a coffee (Give me a coffee ✗ sounds blunt). Polish politeness lives in *pan / pani*; English has one *you* and puts politeness in could / would / please. **„Proszę" has four English answers:** please (asking), here you are (handing over), you're welcome (after thanks), sorry? (not hearing) [practitioner opinion, mine; native check] |
| continuous | reweight | Light. „Czytam" = I read / I'm reading: the Polish present covers both, and the niedokonany aspect is not the continuous. No -ing on state verbs (I'm knowing ✗) |
| past | reweight | *zrobiłem* and *robiłem* both become Past Simple in most contexts; aspect does not pick the tense. English past forms do not show the speaker's gender (byłem / byłam → I was). did + base form (Did you went ✗). -ed is /t d ɪd/, never a separate „-ed" syllable (asked /ˈæskt/), and *played* ends in a voiced /d/ |
| irregular-past | keep | Polish schools drill „czasowniki nieregularne" in three forms [not verified]; use that habit and spend the time on typed recall |
| the | reweight | Omission first: second mention, shared knowledge and unique things take *the* (Close the door; The sun is hot — Sun is hot ✗). Then the shorter half: no *the* with most city and country names (I went to the Gdańsk ✗, an S&P example) or with generic nouns (I like music). *ten / ta / to* is not always *the* |
| adjectives | reweight | more better ✗; „lepszy **ode** mnie" → better **than** me (better from me ✗) [mine]; enough after the adjective (old enough); *-ed / -ing* adjectives (I'm interested ≠ I'm interesting; I'm bored ≠ I'm boring — S&P, Expats Poland) |
| going-to | keep | |
| tense | reweight | Recap with a table: Polish has three tenses and two aspects; English spreads the same ground over more tenses. „Czytam" → I read / I'm reading; „Czytałem" → I read / I was reading / I've read; „Przeczytałem" → I read / I've read. Time words do not choose the tense on their own |
| joining | reweight | Polish puts a comma before *że, bo, żeby, który*; English does not before *that* or *because* (I think, that… ✗). Punctuation is the largest correction category for Polish writers (45.2%; the comma explanation is my inference, §4.10). *co* vs *that*: everything what you need ✗ → everything (that) you need |
| numbers | reweight | Decimal comma and space grouping (3,5; 12 345) vs English 3.5 and 12,345; dates 23.11.2026 vs US 11/23/2026; 24-hour time vs a.m. / p.m.; **miliard = billion, bilion = trillion** (false friend) [mine]; prices in zloty for home scenes («fifty zloty», no „zł" in English strings) |
| smalltalk | reweight | *How are you?* is a greeting: answer Good, thanks — not a health report, and not the Polish habit of an honest complaint („Stara bieda") [practitioner opinion, no source opened]. Small talk with strangers is normal in the US. Avoid salary, age, politics and religion as openers. Deck localised (§9) |
| **ponglish** | **add** (after `smalltalk`) | See below |
| past-continuous | keep | The niedokonany past („czytałem, kiedy…") is the nearest Polish feel for the background action |
| will | reweight | Polish has two futures by aspect (*będę robić / zrobię*); neither maps onto *will* vs *going to*, which split by decision and plan. No *will* after *if / when* (preview of `first-conditional`) |
| perfect | reweight | Key lesson. No Polish counterpart; teach it as "result or experience now" (Have you ever been…? I've lost my keys). Traps from the sources: Present Perfect with a finished time (I haven't seen her yesterday ✗) and the wrong short answer (Have you been…? — No, I didn't ✗) (S&P). been to vs gone to. Card note where true: American English also accepts Past Simple with *already / just* |
| modals | reweight | *musieć* and *móc* are ordinary verbs in Polish; English modals take no *to*, no *do*, no *will*, no *-ed* (I must to go ✗, Do you must ✗, Will you can ✗, I musted ✗ — S&P, Expats Poland). **„Nie musisz" = you don't have to; *mustn't* = „nie wolno ci"**. *powinienem* → should |
| to-ing | keep | Body note: „Chcę, żebyś przyszedł" → I want you to come (I want that you come ✗) [mine] |
| articles-2 | reweight | Generic plurals without *the* („Koty są miłe" → Cats are cute); unique *the* (the sun, the internet), which Polish speakers drop |
| first-conditional | reweight | Polish uses the future after *jeśli* and *kiedy* („Jeśli go zobaczę…") → If I see him, I'll tell him (If I will see him ✗ — The TEFL Academy). Same for *when, before, after, until* |
| relative | reweight | *który* → who / which / that; Polish always puts a comma before *który*, English puts none in a defining clause (the man who lives next door); no pronoun repeated (the book which I read it ✗); *co* → that / what |
| phrasal | keep | „Czasowniki frazowe". Polish learners tend to pick the one-word Latinate verb (*extinguish* for *put out* — Expats Poland); say that the phrasal verb is the everyday choice |
| perfect-2 | reweight | „Mieszkam tu od pięciu lat" → I've lived here for five years (I live here since five years ✗, I work here from five years ✗ — Expats Poland). **od = since (a point) / for (a period)**; never *from*. How long have you…? (How long you are in Poland? ✗) |
| narrative | keep | |
| conditionals | reweight | Polish *gdybym* covers present and past unreal: „Gdybym wiedział" = If I knew / If I had known. Teach the split by time. No *would* in the if-clause |
| passive | reweight | Polish prefers *się* and the impersonal *-no / -to* („Mówi się, że…", „Zbudowano most") → It is said that…, A bridge was built. *by* = „przez" |
| **articles-3** | **add** (after `passive`, before `reported`) | See below |
| reported | reweight | Polish keeps the original tense („Powiedział, że jest zmęczony"): He said he was tired. Następstwo czasów. *czy* → if / whether (She asked if I was ready). Indirect questions keep statement order |
| email | reweight | „Szanowna Pani" / „Szanowni Państwo" → Dear Ms. Nowak / Hi Anna; „Z poważaniem" → Best regards; „W załączeniu przesyłam" → Please find attached / I've attached. **No title + first name** („Pani Anno" → not Mrs. Anna: use Anna or Ms. Nowak) [mine; native check]. First names are normal in US work email. No comma before *that*. Business false friends from lingology.pl: aktualny, ewentualnie, pensja, reklamacja, promocja |
| idioms | keep | Note calques that do not exist in English („z góry dziękuję" → Thanks in advance, not *Thank you from the mountain* — S&P) |

**Totals:** 40 shared lessons: **8 keep** (third-s, irregular-past, going-to, past-continuous, to-ing, phrasal, narrative, idioms) and **32 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions (42 lessons, as in ko, zh, ru and id). Every verdict is [practitioner opinion] grounded in §4; only articles, prepositions, plurals and punctuation (Rozovskaya & Roth) and the `pron` weighting (Szpyra-Kozłowska; Bakkouche & Post) have research data behind them.

**Additions:**
- **`ponglish`** — title „Ponglish: fałszywi przyjaciele i kalki", after `smalltalk`, deck 22 „Fałszywi przyjaciele i kalki" (§9). The id follows konglish / chinglish / runglish; *Ponglish* is one of the attested names (Wikipedia *Poglish*).
  - *Content:*
    1. False friends (lingology.pl): aktualny → current (actual = rzeczywisty), ewentualnie → possibly (eventually = w końcu), sympatyczny → nice (sympathetic = współczujący), pensja → salary (pension = emerytura), recepta → prescription (receipt = paragon), fabryka → factory (fabric = tkanina), dres → tracksuit (dress = sukienka), magazyn → warehouse (magazine = czasopismo), sałata → lettuce (salad = sałatka), ordynarny → rude (ordinary = zwyczajny).
    2. One Polish word, two English words: robić → do / make (make a mistake), pożyczyć → borrow / lend, uczyć się → learn / study (and uczyć → teach).
    3. Calques: Mam 20 lat → I'm 20; dziś rano → this morning; z góry dziękuję → thanks in advance; I'm interested / bored (not interesting / boring).
    4. Things are *it*.
  - *English side:* **start from ru's `runglish` set** (`tools/content/ru/more/`), because several traps are shared and those items already have tested answers and transcriptions: *She works at a factory* (x: `fabric`, `the`), *Can I give you some advice?* (x: `advices`, `a`), *I need some advice*, *I'll make coffee* / *do*, *My phone is old. It doesn't work.* Replace the Russian-only items (magazine = store, accurate, cabinet, feel myself, say / tell) with Polish ones: *I need a prescription* (x: `receipt`, `the`), *He works in a warehouse* (x: `magazine`, `the`), *My current job is great* (x: `actual`), *Can you lend me a pen?* (x: `borrow`, `the`), *I'm twenty years old* (x: `have`), *I'm interested in history*.
  - *Practice that meets §7:* the noun-phrase items above carry an article or number twin in `x`, and their `why` names przedimek / liczba mnoga / niepoliczalny alongside the vocabulary point („Recepta to a prescription — policzalny rzeczownik, więc z przedimkiem a.").
  - *Reason:* §4.4. Lexical transfer is the zone with the most Polish-specific sources, and ko-en has no equivalent. It mirrors zh `chinglish`, ru `runglish`, id `indo-english`, ja `katakana-english` and es `false-friends`.
- **`articles-3`** — title „Przedimki: powtórka i podsumowanie", blurb idea „Jedna rzecz policzalna — z a. Znana obu osobom — z the. Mówimy ogólnie — bez przedimka".
  - *Content, in this order (omission first, §4.1):* (1) *a / an* before a singular count noun even with a description (an engineer who works in Warsaw, an interesting article); (2) *the* for a thing defined by a clause or phrase (The coffee you made was great), with superlatives and ordinals (the best, the first) and for the one in the room (Can you open the window?); (3) no article: generic plurals and uncountables (Cats sleep a lot; Time is money), abstract nouns (Life is short), names of cities and countries, and fixed phrases (go to bed, go to work, at home, at work, by train).
  - *English side:* **copy ru's `articles-3` English side** (itself ja's set with one localisation), changing *Moscow* → *Warsaw* in one mc item. It tests omission (*an engineer who…*, *an interesting article*, *The coffee you made*) as well as overuse (*Time is money*, *Life is short*, *at work*, *go to bed*). Its balance leans to overuse (about 9 of 14 items), the opposite of the Polish data. **Optional, the lead's call:** swap two zero-article items for omission items (for example fill `Can you open __ window?` → `the`, and type *I have a car* with x `the`), recorded in the same lesson-level deviation. The lesson **body** leads with omission either way.
  - *Linked deck:* 10 (as ru and zh) or 2 (as ko); no pl reason to prefer either.
  - *Reason:* articles are the best-measured grammar error (15.1% of corrections, 1.5 per 100 words), and ko-en's shared articles lessons stop at A2. A second candidate, a prepositions review, was weighed and not chosen: see below.

**Considered, not added (the limit is two):**
- **A prepositions review at B1** (`prep-2`): prepositions are as frequent as articles in the data (§4.2). Not added because the errors are lexical; they are covered by reweighting `prep` and `perfect-2`, by `ponglish`, and by card notes. If first-attempt logs show preposition items failing more than article items, swap this in for `articles-3`.
- **A Present Perfect / time-marker lesson** (id's and th's `time-markers`): no Polish-L1 count (§4.3), and four shared lessons already cover it (`perfect`, `perfect-2`, `tense`, `narrative`).
- **A word-order lesson:** covered by `present`, `questions`, `it-there`, `reported`.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion]:

| ko-en | pl-en |
|---|---|
| Minji (and other Korean names) | **Anna** (main), **Adam**; alternates Maria, Monika, Natalia, Marta, Daniel, Robert, Tomek. English-speaking characters keep English names |
| Seoul | **Warsaw** |
| Busan | **Krakow**; alternate Gdansk |
| Jeju / beach trips | the Baltic Sea, the mountains (Zakopane); abroad: Croatia, Italy, Greece, Spain |
| Seoul National University | "a university in Warsaw", generic; no real university name |
| kimchi, bibimbap | **pierogi (dumplings)**, tomato soup, pork cutlet, potato pancakes, cheesecake, apple pie; tea |
| soju | non-alcoholic by default (tea, coffee, juice); no vodka jokes |
| K-pop, K-drama | genres, not artists: TV series, rock music, stand-up, video games |
| Gangnam | downtown, the city center, the old town |
| Chuseok, Korean holidays | Christmas Eve (the main family evening), Easter, the long weekend in May, a name day (*imieniny*) as a cultural note. No political or state holidays |
| 존댓말 / 반말 comparisons | ty vs pan / pani comparisons (`polite` and `email` only) |
| won (₩) | **zloty**: write `50 zloty` in English strings (the same word for singular and plural); never „zł" or „PLN" in English (TTS). US scenes keep dollars |
| Korea / Korean (learner's own country and language) | **Poland / Polish** |

**Name and TTS rules:**
- **Personal names: only names spelled the same in both languages that the en-US voice says close to the Polish.** Anna, Adam, Maria, Monika, Natalia, Marta, Daniel, Robert are safe choices on paper. Avoid names the voice will anglicise or mangle: Jan (read as the English *Jan*), Jacek, Ewa, Kasia, Piotr, Wojciech, Grzegorz, Krzysztof, Agnieszka, Małgorzata, Zbigniew, and anything with a Polish diacritic. None was tested on the engine's voice (§11).
- **Surnames** only in `email`, phone and hotel cards: **Nowak** (the same for a man and a woman: Mr. Nowak, Ms. Nowak). If a second one is needed, Kowalski / Kowalska, with one note that English keeps whichever form is in the passport.
- **Places in English strings: English spellings without diacritics** — Warsaw, Krakow, Gdansk, Poland. Avoid Wroclaw, Lodz, Poznan and Szczecin in audio rows: the en-US voice will not say them as a Pole expects [not tested]. In **Polish** text write Warszawa, Kraków, Gdańsk.
- **Audience note:** many learners live outside Poland (the UK, Ireland, Germany). Keep Poland-specific references to everyday life (food, Christmas Eve, zloty, Warsaw), never to politics, religion as a debate, or current events. Scenes abroad (airport, hotel, office) use the US setting of the shared English strings.

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS (*K-pop, Seoul, Jeju* in `be`, `will`, `perfect`) and in 24 PRACTICE items. **Leave the English unchanged** (parity) and translate the Polish side literally (Seul, Czedżu, K-pop); it reads as a learner talking about Korea. Do not file per-item deviations; if the lead wants them localised later, use one bulk deviation with the reason "localisation" (same rule as zh.md, id.md, ru.md).

**Deck localisation vs parity:** ten shared card targets name Korea or a Korean person. Each change needs a `decks` entry in `deviations.json`: one entry per deck, naming the cards and the reason „localisation per profile pl.md §9". They are the same ten positions ru and id changed:

| deck | ko-en card | pl-en card |
|---|---|---|
| 2 | My name is Minji. | My name is Anna. |
| 2 | I'm from Korea. | I'm from Poland. |
| 2 | I live in Seoul. | I live in Warsaw. |
| 3 | Do you speak Korean? | Do you speak Polish? |
| 10 | Have you been to Korea? | Have you been to Poland? |
| 12 | Your Korean is really good! | Your Polish is really good! |
| 14 | Hello, this is Minji. | Hello, this is Anna. |
| 14 | Can I speak to Mr. Kim? | Can I speak to Mr. Nowak? |
| 15 | I have a reservation under Kim. | I have a reservation under Nowak. |
| 16 | I need to contact the Korean embassy. | I need to contact the Polish embassy. |

*My name is Anna.* and *Hello, this is Anna.* already exist in ru with a `pron`; copy it. Appended pl-only cards go in the same entries. Lesson bodies, DIALOG and EXAMPLES are not parity-checked and are localised freely.

**Meanings that equal the English (Latin-script validator, `nativeScript: null`):** a card meaning, `{{ex}}` meaning, gloss or `p` identical to its English counterpart fails (case- and punctuation-insensitive).
- Polish shares many words with English letter for letter. In the shared decks the certain case is **hotel** (deck 18): write „hotel (akcent na „tel”)" or „hotel, miejsce noclegu". *LOL, OMG, FYI, ASAP* need a real gloss («śmieję się w głos», «o mój Boże», «do twojej wiadomości», «jak najszybciej»), not the same letters. *McDonald's* needs a gloss («sieć restauracji McDonald's»).
- Others that will come up in bodies and examples: *menu, radio, problem, student, bank, park, sport, film, weekend, laptop, internet, test, plan, start, bar, golf, jazz, blog, hobby, super, OK*. Write a fuller gloss («menu (karta dań)», «student (na uczelni)», «OK, dobrze») or the Polish spelling where one exists (*e-mail* differs from *email* by its hyphen and passes; *komputer, taksówka, kawa, tenis* differ anyway).
- Do not "fix" a collision by adding a full stop or changing case: the comparison ignores both.
- The `alphabet` cards: meaning «litera A a», as the spec asks; it differs from the target «A» and passes.

**Deck names (FINAL proposal).** Sentence case; „i" and commas as separators; parentheses for the travel deck; a digit attached with a space („Niezbędnik 1"). Rows 1–20 replace the Korean course's 20 decks in the same order; row 21 is the shared `alphabet` deck, which must be the 21st deck (`alphabet_check.js`); row 22 is the pl-only deck, appended last in decks.js.

| # | Polish name | linked lesson or notes |
|---|---|---|
| 1 | **Powitania** | greetings; no lesson links in ko-en |
| 2 | **O sobie** | be, articles, present, third-s, object-have, perfect-2 (and articles-3 if the lead follows ko) |
| 3 | **Niezbędnik 1** | polite |
| 4 | **Niezbędnik 2** | questions |
| 5 | **Droga i transport** | the |
| 6 | **W restauracji** | countable |
| 7 | **Kawiarnia i sklep** | no lesson links |
| 8 | **Zakupy i płatności** | plurals, adjectives, relative; prices in zloty for home scenes |
| 9 | **Liczby, godziny i daty** | prep, numbers; decimal comma vs point, 23.11 vs US dates |
| 10 | **Pogawędki** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing; also articles-3 (as ru and zh) |
| 11 | **Emocje i reakcje** | joining, past-continuous, conditionals |
| 12 | **Komplementy i sympatia** | no lesson links |
| 13 | **Praca i e-maile** | first-conditional, passive, email |
| 14 | **Telefon i skróty z czatu** | reported |
| 15 | **Podróże (lotnisko i hotel)** | perfect, articles-2 |
| 16 | **Lekarz i nagłe wypadki** | modals |
| 17 | **Czasowniki frazowe** | phrasal |
| 18 | **Wymowa: pułapki** | pron; append pl cards (below) |
| 19 | **Angielskie idiomy** | idioms |
| 20 | **Filmy, seriale i slang** | narrative |
| 21 | **Alfabet** | alphabet (shared; 26 cards, fixed targets A–Z) |
| 22 | **Fałszywi przyjaciele i kalki** | ponglish (pl-only, ≥ 20 cards; needs a `decks` count deviation) |

**Deck content changes** [practitioner opinion unless noted]:
- **Add deck 22 „Fałszywi przyjaciele i kalki"** (≥ 20 cards, linked to `ponglish`). Each `note` says „fałszywy przyjaciel" or „kalka z polskiego" and gives the Polish source:
  - current (aktualny; actual = rzeczywisty), possibly (ewentualnie; eventually = w końcu), nice (sympatyczny; sympathetic = współczujący), salary (pensja; pension = emerytura), prescription (recepta), receipt (paragon), factory (fabryka; fabric = tkanina), tracksuit (dres; dress = sukienka), warehouse (magazyn; magazine = czasopismo), lettuce (sałata; salad = sałatka), special offer (promocja; promotion = awans), complaint (reklamacja), rude (ordynarny; ordinary = zwyczajny), consistent (konsekwentny), comprehensive (kompleksowy) — all from lingology.pl;
  - make a mistake (robić błąd), Can you lend me a pen? (pożyczyć), I'm twenty years old. (mam 20 lat), this morning (dziś rano), at the age of twenty (w wieku), I'm interested in history., I'm bored., Thanks in advance. (z góry dziękuję) — Expats Poland, S&P;
  - candidates with **no source opened** (a native reviewer should confirm before use): take a photo (zrobić zdjęcie), What does it look like? (Jak to wygląda?), I feel good. (czuję się), date (data; data = dane), boss (szef; chef = szef kuchni), billion (miliard).
  - *prezerwatywa / preservative* and *lunatyk / lunatic* stay out of the deck (as in en-pl.md).
- **„Wymowa: pułapki":** keep the 26 shared cards; append pl cards as new cards (not by changing shared targets), each with a note that names the trap: **bad / bed / bat** (æ vs e, voiced final), dog / dock, ship / sheep, hat / hut (not Polish *a* twice), wine / vine („w = ł"), sing / singing (no /k/), asked (-ed = /t/), comfortable, vegetable, camera (stress on the first syllable). *think / sink*, *leave / live*, *walk / work* and *hotel* are already there. ru's appended cards (ship, sheep, wine, vine, bad, bat, dog, dock, sing, singing, comfortable) supply the `pron` for eleven of these.
- **„Praca i e-maile":** meeting / call, deadline, schedule, invoice, remote work, team, client; general office English. Replace „Szanowni Państwo" / „Z poważaniem" habits with Hi / Dear and Best regards.
- **„Podróże":** a generic "airport"; tipping (customary in the US); no visa talk as a political topic.
- **„Telefon i skróty z czatu":** keep the English (LOL, BTW); explain with Polish chat equivalents (haha, btw is also used in Polish chats, „nwm" for IDK, „zw" for BRB) [mine; native check].
- **Card notes written for Korean speakers must be rewritten, not translated** (PHASE2-BRIEF, recurring problems): notes about sounds Korean lacks (f, v, r / l), Hangul, Konglish. For Polish the notes are about spelling-reading, stress, devoicing and false friends.

## 10. Interface wording notes

For the interface translator (`tools/i18n/`). Everything here is [practitioner opinion] unless a source is named; the Polish wordings are proposals for a native check (§11).

**Voice.** As §2: informal *ty* shown by the verb ending, pronoun dropped; **imperative on buttons and instructions** („Zacznij", „Sprawdź", „Wybierz odpowiedź"), not the infinitive („Zacząć") and not the formal „Proszę wybrać". The Microsoft Polish style guide addresses the user in the second person and skips the pronoun, and its own button examples are imperatives (Anuluj, Spróbuj ponownie, Wybierz) ([Microsoft](https://download.microsoft.com/download/b/d/c/bdc253ac-dbf3-4261-86a2-ffedfa718425/pol-pol-StyleGuide.pdf)); Duolingo's Polish store page does the same („Ćwicz", „możesz uczyć się") ([App Store](https://apps.apple.com/pl/app/duolingo-nauka-j%C4%99zyk%C3%B3w/id570060128?l=pl)). Sentence case everywhere; no full stop on buttons, labels and headings.

**Tab labels (each ≤ 8 characters, counted in Node):**

| English | Polish | length | fallback | note |
|---|---|---|---|---|
| Today | **Dziś** | 4 | | |
| Practice | **Trening** | 7 | Ćwicz (5) | „Ćwiczenia" is 9 and does not fit |
| Review | **Powtórki** | 8 | Fiszki (6) | at the limit; check on a 320 px screen |
| Lessons | **Lekcje** | 6 | | |
| Read (current nav key) | **Czytanie** | 8 | Czytaj (6) | |
| Drills | **Wprawki** | 7 | Trening, if Practice takes „Ćwicz" | least certain label; native check |
| Progress | **Postępy** | 7 | | |
| Feedback | **Opinie** | 6 | | |

**Core glossary (use one word per concept, everywhere):**

| English | Polish | note |
|---|---|---|
| lesson / practice / review | lekcja / ćwiczenia / powtórka (pl. powtórki) | |
| deck / card | talia / fiszka | „fiszka" is the usual word for a flashcard; „talia" for a set is a calque of *deck* and needs a native check (alternative: „zestaw") |
| streak | „Dni z rzędu" | no single noun in common use; „seria" as a short label |
| hint / explanation / answer | podpowiedź / wyjaśnienie / odpowiedź | |
| correct / wrong | „Dobrze!" / „Niepoprawnie" | adverbs, so no gender |
| multiple choice / word order / fill the gap / type | wybór odpowiedzi / ułóż zdanie / uzupełnij lukę / napisz po angielsku | tiles = kafelki |
| quick check | szybki test | |
| level / goal / session | poziom / cel / sesja | XP stays „XP"; points = „pkt" (no full stop) |
| transcription toggle | „Pokaż transkrypcję" | §6 |
| listen | „Posłuchaj" | |
| due today | „Do powtórki dziś" | |
| settings / sign in / sign out / sync | ustawienia / „Zaloguj się" / „Wyloguj się" / synchronizacja | |
| buttons | Zacznij, Dalej, Sprawdź, Wyślij, Zapisz, Anuluj, Wstecz, Pomiń, Jeszcze raz, Zamknij, Kontynuuj | |
| feedback | opinia; „Wyślij opinię" | |

**Counts: one wording for every number.**
- Polish has three noun forms after a number: **1** fiszka; **2–4** (and 22–24, 32–34… but not 12–14) fiszki; **5–21**, 25–31… and 0 fiszek. Fractions take a fourth (1,5 fiszki). Node's `Intl.PluralRules('pl')` on this machine gives 1 = one, 2–4 and 22 = few, 0, 5, 12, 21 and 25 = many, 1.5 = other.
- The engine has **one translation per count pattern** and picks the English "singular" template with `n > 1 ? 's' : ''`, so the "singular" string is shown for 0 and 1 and the "plural" string for everything else. No Polish noun form is right for 2, 5 and 22 at once.
- **Rule: label in the nominative plural, colon, number.** The noun never follows the number, and no verb or adjective agrees with it. Give the singular and the plural template **the same wording**.

  | English pattern | Polish | never |
  |---|---|---|
  | {1} cards | Fiszki: {1} | {1} fiszek |
  | {1} due | Do powtórki: {1} | |
  | {1} decks | Talie: {1} | |
  | {1}-day streak | Dni z rzędu: {1} | {1} dni z rzędu (wrong at 1) |
  | {1} weeks | Liczba tygodni: {1} | |
  | {1}/{2} lessons done | Ukończone lekcje: {1}/{2} | Ukończono {1} lekcji |
  | {1} reviews | Powtórki: {1} | |
  | {1} points / {1} XP | {1} pkt / {1} XP | abbreviations do not inflect |
  | {1} rounds left | Rundy do końca: {1} | Zostało {1} rund (verb agrees) |
  | {1} questions | Pytania: {1} | |
  | {1} tests · last {2}% | Testy: {1} · ostatni: {2}% | |
  | {1} mistakes | Błędy: {1} | |
  | {1} new / {1} new per day | Nowe: {1} / Nowe dziennie: {1} | |
  | {1} left | Pozostało: {1} | Pozostały {1} |
  | {1}/{2} mastered | Opanowane: {1}/{2} | |
  | {1} decks selected | Wybrane talie: {1} | |
  | {1} min / s / KB | {1} min / {1} s / {1} KB | „min" without a full stop |
  | next review in {1} days | Dni do następnej powtórki: {1} | za {1} dni |
  | Card {1} of {2} | Fiszka {1} z {2} | ordinal use: the noun comes first and stays singular |

- Checked by reading each at 1, 2, 5 and 22: „Fiszki: 1", „Fiszki: 2", „Fiszki: 5", „Fiszki: 22" are all grammatical. „Fiszki: 1" is slightly stiff and still correct; that is the price of one string.
- Where a sentence is unavoidable, move the number to the end after a colon: „Tak trzymaj! Dni z rzędu: {1}".
- Percent: „85%" with no space (as `Intl.NumberFormat('pl-PL')` prints it here).

**Language names in slots.**
- The engine fills `{x}` with `Intl.DisplayNames` output and capitalises the first letter, so the slot arrives as **„Angielski"** (Node gives „angielski", „polski"). Polish writes language names in lower case inside a sentence, and the slot is always the masculine nominative adjective.
- **Rule: put the slot at the start of the string or after a colon or „·", where a capital is normal and the nominative is correct. Never after a preposition and never where another case is needed** („po {x}", „z {x}", „kurs {x}", „ucz się {x}" all break: *po angielsku, z angielskiego, kurs angielskiego, ucz się angielskiego*).

  | English pattern | Polish |
  |---|---|
  | Switch language · {1} | Zmień język · {1} |
  | {1} course · progress is saved per course | Kurs: {1} · postępy zapisują się osobno dla każdego kursu |
  | What's your {1} level? | {1}: jaki masz poziom? |
  | Why are you learning {1}? | {1}: jaki masz cel? |
  | Answers in {1} | Język odpowiedzi: {1} |
  | No {1} keyboard? Use the tiles | {1}: brak klawiatury? Użyj kafelków |
  | Learn {1} in 5 minutes a day with Lang App {2} | {1} — 5 minut dziennie z Lang App {2} |

- In fixed strings with no slot, write the name in its proper case and lower case: „Napisz po angielsku", „kurs angielskiego".

**Gender-neutral messages.** Polish past-tense and conditional verbs and many adjectives show the gender of the person addressed (zrobiłeś / zrobiłaś, gotowy / gotowa). The app does not know the learner's gender, so **no interface string may contain a second-person past tense, a conditional, or an adjective or participle describing the learner.** The Microsoft guide gives the same advice (use the present tense, impersonal or noun forms).

| avoid | write |
|---|---|
| Zrobiłeś to! / Ukończyłeś lekcję | Udało się! / Lekcja ukończona |
| Jesteś pewien? / Jesteś pewna? | Na pewno? |
| Jesteś gotowy? | Zaczynamy? / Wszystko gotowe |
| Popełniłeś 3 błędy | Błędy: 3 |
| Zdobyłeś odznakę | Nowa odznaka! |
| Jesteś zalogowany jako… | Zalogowano jako… |
| Zapomniałeś hasła? | Nie pamiętasz hasła? |
| Byłeś blisko | Prawie! / Było blisko |
| Pobiłeś rekord | Nowy rekord! |
| będziesz mógł / mógłbyś | „będziesz” + infinitive (będziesz widzieć), or „możesz” |
| Witaj z powrotem, zmęczony? | present tense and nouns only |

- The impersonal *-no / -to* forms (Zalogowano, Zapisano, Wysłano) are the standard neutral device.
- Never use slashes or brackets („zrobiłeś/aś", „gotowy(-a)") and no experimental neutral forms.
- **Level titles** (the engine's TITLES list) must also be gender-neutral: nouns for a stage, not for a person. Proposals: „Pierwsze kroki", „Szkolna ławka", „W podróży", „Jak u siebie", „Klasa mistrzowska". Avoid „Początkujący / Początkująca", „Uczeń / Uczennica", „Mistrz / Mistrzyni". Native check.
- In course content (not interface), a translated first-person past sentence needs one gender: use the speaker's if the scene names one, otherwise alternate between sets (§2).

**Typography in interface strings** (§2 in full):
- quotes „ ” (U+201E, U+201D); English examples inside Polish text need no quotes when they are in bold or in a different style;
- **no-break space U+00A0** after a one-letter word (w, z, i, a, o, u) and between a number and its unit or noun („5 minut", „w domu") in every interface string, title, blurb and deck name, so the letter never ends a line (Microsoft guide; a standard Polish typesetting rule);
- em dash with spaces for a break („Angielski — 5 minut dziennie"), en dash without spaces for ranges („5–10 minut");
- numbers and dates from `Intl` with `pl-PL`: „12 345" (U+00A0; no separator in four-digit numbers: „1234"), decimal comma „3,5", „23 listopada 2026", „23.11.2026", 24-hour time „21:05". Months, weekdays and language names in lower case.
- NFC only: ó, ą, ę as single code points (a decomposed letter would also miss the `cueTest` class).

**Engine notes for the lead (nothing here was edited by this profile):**
- `src/app.html` has a rule that gives IPA courses a fallback font stack (`html[lang=pt],html[lang=fr],html[lang=it],html[lang=de]{--mono:…}`); **`html[lang=pl]` should be added** so IPA symbols render in the same face.
- The interface font (DM Sans) covers Latin Extended-A, so ą ę ł ś ż render without a fallback [as noted for earlier Latin-script courses; not re-tested here].
- Polish words are long („Niepoprawnie", „Wyjaśnienie", „synchronizacja"): check buttons and the tab bar at 320 px; `text-wrap: pretty` or `balance` on headings helps with one-letter words if a U+00A0 is missed.
- If the engine ever gains real plural selection (`Intl.PluralRules`), Polish needs four slots (one, few, many, other); until then the colon rule above stands.

## 11. Gaps and unverified claims

**Brief items that could not be followed as written**
- **`/home/claude/reports/Grammar learning order research.md` does not exist** in this project (checked under the project root). It was skipped; nothing in this profile comes from it.
- **`docs/profiles/OTHERS.md` has no Polish section**, so there was no earlier Polish outline to reconcile with.
- The brief speaks of 39 shared lessons and 20 decks; the repo's `tools/content/lib.js` has **40** shared ids (with `alphabet`) and ko has 21 decks. This profile follows the repo.

**Evidence gaps**
- **No Polish-L1 error counts** were found for: Present Perfect vs Past Simple, continuous forms, word order and questions, conditionals, modals, double negation, dropped subjects, reported speech. Zones 3, 5, 6 and 8–13 in §4 rest on teacher pages, on qualitative examples (Świątek & Pluszczyk), or on contrastive inference alone. Their ranking is a judgement.
- **Rozovskaya & Roth 2010 is a small sample for Polish:** 198 sentences, 4,642 words, 71 article errors and 77 preposition errors, advanced ICLE essays, with extra preposition-error sentences hand-picked. The omission / overuse split (55% / 25%) that drives §8 is a direction, not a measurement. Polish is not known to be among the L1s of the larger article studies used in other profiles (Murakami & Alexopoulou 2016 was not re-opened).
- **Szpyra-Kozłowska 2011** was read from a PDF text layer that lost some glyphs: one category label (the 24% group: *algebra, gigantic, Disney*) and all phonetic symbols. The percentages and example words are as extracted. The journal name (*Research in Language*) is inferred from the DOI and the host site.
- **Bakkouche & Post 2025** tested Polish speakers living in the UK for about a decade, on Southern British vowels. Their figures are an upper bound for learners in Poland, and the course teaches American vowels.
- **Świątek & Pluszczyk:** publication year not shown in the fetched text; no counts.
- **EF EPI:** the edition year and band were not in the fetched page text; the 2025 fact sheet is an image-only PDF. Scores are from self-selected test-takers.
- **Matura figures** come from a news report of CKE data (Wprost), not from CKE's report. The egzamin ósmoklasisty was not checked. Exam task formats are from general knowledge.
- **Microsoft Polish style guide:** read from a PDF text layer that dropped every word with a Polish diacritic, so its rules are reported from the English prose and its Polish examples only where they survived.
- **Not opened** (blocked, timed out or unreadable), so not used as evidence: Ekiert 2004 (article acquisition by Polish learners; 403), Świątek 2010 (articles; timeout), Rosario 2022 (present perfect perception; 403), a pilot study on CEJSH (403), an Adam Mickiewicz University journal article with `in the bus` / `in Monday` examples (PDF unreadable, authors not recovered), proz.com (403), diki.pl (403), an OKE exam report (404), the EF fact sheet (image), Mozilla's Polish style guide (404). Swan & Smith's *Learner English* chapter on Polish speakers was not available.
- **Reused from `docs/profiles/en-pl.md` without re-opening:** penultimate stress and final devoicing (Council for the Polish Language booklet; Wikipedia *Polish phonology*), lowercase *pan / pani* (PWN). The copula and case examples also follow en-pl.md.

**Claims that need a native Polish speaker**
1. **Capitalised „Ty / Twój / Ci"** in the rare interface strings that need the pronoun (§2): the Microsoft guide and Duolingo capitalise; many current apps do not. Least certain register decision.
2. **Imperative on buttons** (vs infinitive or noun): supported by two sources, but a product-wide Polish convention was not surveyed.
3. **Tab labels and glossary:** „Wprawki", „Trening", „Powtórki" (8 characters, tight), „talia" for deck, „seria", the level titles.
4. The pronunciation tips in the §6 table: **/ɪ/ ≈ Polish *y***, „symbol w = polskie ł", /h/ lighter than *ch*, „bank" for ŋ, the vowel-length cue before voiced finals (taken from a Russian study).
5. The direction and frequency of **w / v** errors, and whether *wery* over-correction is common.
6. **„Proszę" → four English answers**, „nie musisz" vs *mustn't*, „Pani Anno" → not *Mrs. Anna*, the *How are you?* / complaining note, chat abbreviations („nwm", „zw").
7. **False friends and calques with no opened source:** make a photo, How does it look like?, feel myself, say me, data / date, szef / chef, hazard, lektura, paragon, genialny, miliard / billion, better from me, I want that you…, everything what.
8. Every Polish example sentence, `why` sample and interface string in this profile was written by a non-native author. They were checked only mechanically (regex, length).
9. **Names:** that Anna, Adam, Maria, Monika, Natalia, Marta, Daniel, Robert are neutral, current and unmarked for age or region.

**Not tested**
- **TTS:** no string was played on the en-US voice. Open: *Nowak* (transcribed /ˈnoʊvæk/), *zloty* (/ˈzlɔːti/, from memory of the dictionary form), *Warsaw*, *Krakow*, *Gdansk*, *pierogi*, and the names above. Fix the `pron` to what the voice says, or replace the word.
- **IPA literacy** of adult Polish learners is assumed; that school textbooks teach it was not verified.
- `cueTest` was tested against the ko, ru, id, zh and de packs for false English matches (none), not against Polish content, which does not exist yet. A Polish prompt with no diacritic and no listed word gets the cue appended; extend the word list when the writers meet one.
- The `articles-3` and `ponglish` English sides are proposals; no item was run through `validate.js`.
- Nothing was built: `build.sh` was not run, and no file other than the two deliverables was changed.

**Node check** (profile JSON, regexes, worked `pron` rows, `why` samples, cue frames, plural categories, tab lengths), run on 2026-11-23. The per-row PASS / rejected / hit lines are condensed to counts here; the plural, Intl and tab-length lines are verbatim:

```
JSON ok; keys: native, nativeNameEn, name, ttsLang, nativeScript, pron, pronPattern, pronScript, standingRule, labels, lessonOrder
native === "pl": true | nativeScript: null
regexes compile: pronPattern(u), pronScript(u), labels.cueTest(no flags), standingRule.keywords(i)
PASS x30: every worked pron row in §6 (incl. vegetable, asked, Poland, Warsaw, Polish, Nowak, zloty, BTW, fifteen / fifty)
rejected x11: /ˈjes?/ /pen/ /ˈɡet/ [ˈjes] // /ˈłot/ /ˈyes/ /ˈkʌm.ftər.bl/ /ˈwɔːtɚ/ ˈθɪŋk /ˈSɪŋk/
why samples: 9 hit (as expected), 4 no hit (as expected)
cue frames: 10 cue (as expected), 4 no cue (as expected)
plural: 0=many 1=one 2=few 4=few 5=many 12=many 21=many 22=few 25=many 1.5=other
Intl language name: angielski
tab lengths: Dziś=4 Trening=7 Powtórki=8 Lekcje=6 Czytanie=8 Wprawki=7 Postępy=7 Opinie=6 Fiszki=6 Ćwicz=5 Czytaj=6 | all ≤ 8: true
ALL CHECKS PASSED
```

## Sources

Every link below was opened for this profile. PDFs were read from their text layer, with the losses noted in §11.

**Research**
- Rozovskaya, A. & Roth, D. (2010). *Annotating ESL Errors: Challenges and Rewards.* NAACL-HLT Workshop on Innovative Use of NLP for Building Educational Applications. https://cogcomp.seas.upenn.edu/papers/RozovskayaRo10a.pdf
- Szpyra-Kozłowska, J. (2011). *Mispronounced lexical items in Polish English of advanced learners.* DOI 10.2478/v10015-011-0042-9. https://czasopisma.uni.lodz.pl/research/article/download/7918/7806/20165
- Bakkouche, L. & Post, B. (2025). Interspeech 2025 paper on the perception and production of English vowel contrasts by Polish learners. DOI 10.21437/Interspeech.2025-954. https://www.isca-archive.org/interspeech_2025/bakkouche25b_interspeech.pdf
- Świątek, A. & Pluszczyk, A. *The analysis of second language learners' difficulties: the case of Polish learners of English.* Językoznawstwo. https://ojs.academicon.pl/jezykoznawstwo/article/download/6864/9119?inline=1

**Statistics and education system**
- EF English Proficiency Index, Poland. https://www.ef.com/wwen/epi/regions/europe/poland/
- Eurydice, Poland: teaching and learning in single-structure education. https://eurydice.eacea.ec.europa.eu/eurypedia/poland/teaching-and-learning-single-structure-education
- Eurostat, Foreign language learning statistics. https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Foreign_language_learning_statistics
- Wprost, 8 July 2025, matura 2025 results. https://www.wprost.pl/12066565

**Teacher and practitioner pages**
- Colquhoun, K., The TEFL Academy (updated 30 June 2023), *Common problems for Polish learners of English.* https://www.theteflacademy.com/blog/common-problems-for-polish-learners-of-english/
- Expats Poland (28 November 2021), common mistakes Poles make in English. https://www.expatspoland.com/?p=215
- Hudson, J., Pronunciation Studio (2013), *Polish speakers' English pronunciation errors.* https://pronunciationstudio.com/polish-speakers-english-pronunciation-errors/
- Smolczewski, J., lingology.pl, Polish–English false friends. https://www.lingology.pl/blog/falszywi-przyjaciele-polsko-angielscy
- Wikipedia, *Poglish.* https://en.wikipedia.org/wiki/Poglish

**Polish terminology, style and typography**
- ang.pl grammar pages: https://www.ang.pl/gramatyka , https://www.ang.pl/gramatyka/przedimki , https://www.ang.pl/gramatyka/czasy-angielskie , https://www.ang.pl/gramatyka/spis-tresci
- Polish Wikipedia, *Przedimek.* https://pl.wikipedia.org/wiki/Przedimek
- Polish Wiktionary, *comfortable.* https://pl.wiktionary.org/wiki/comfortable
- PWN, Zasady pisowni i interpunkcji: Cudzysłów. https://sjp.pwn.pl/zasady/Cudzyslow;629866.html
- Microsoft Polish Style Guide. https://download.microsoft.com/download/b/d/c/bdc253ac-dbf3-4261-86a2-ffedfa718425/pol-pol-StyleGuide.pdf
- Duolingo, Polish App Store page. https://apps.apple.com/pl/app/duolingo-nauka-j%C4%99zyk%C3%B3w/id570060128?l=pl

**Opened but not usable as evidence** (see §11): the Adam Mickiewicz University journal article (PDF unreadable); the EF EPI 2025 fact sheet (image only). Requests that failed outright (403, 404, timeout) are listed in §11 and are not sources.

**Local files:** `docs/briefs/profile-ko-based.md`, `docs/PIPELINE.md`, `PILOT-SPEC.md`, `PRACTICE-SPEC.md`, `PHASE2-BRIEF.md`, `docs/briefs/alphabet-spec.md`, `tools/content/zh/PRON-RULES.md`, `docs/profiles/ru.md`, `zh.md`, `id.md`, `vi.md`, `en-pl.md`, `OTHERS.md`, `tools/content/lib.js`, `tools/content/validate.js`, `tools/i18n/keys.json`, `src/app.html` (read only), and the ko, zh, ru, id and de course packs and sources.
