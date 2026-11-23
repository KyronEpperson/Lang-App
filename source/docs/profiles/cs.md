# Czech speakers learning English — course profile

Course `cs-en`. Audience: Czech-speaking adults and older teenagers. All explanations, prompts, `why`, `hint`, meanings, deck names and interface are in standard written Czech (spisovná čeština, cs-CZ), natural and not stiff; answers and examples are in English. The machine-readable twin is `docs/profiles/cs.profile.json` (to be copied to `tools/content/cs/profile.json`).

**Evidence labels** (as in zh.md, vi.md, id.md, ru.md):
- **[research-backed]** = a study or corpus, named, with its sample, opened for this profile.
- **[curriculum convention]** = what Czech schools, exam bodies, the Czech Language Institute (ÚJČ), style guides or Czech learning sites do, from a page that was opened.
- **[practitioner opinion]** = a teacher's or author's page with no count behind it, or this profile's own inference (marked "inference" where it is mine).
- **[native check]** = Czech wording or a usage claim that a native speaker must confirm before it ships.

The Czech evidence base is thin and skewed: the two solid studies are of **advanced** university students (C1–C2 speech) and of **strongly accented** speakers. Nothing counted was found for beginners. Treat rankings as indicative.

The reverse course's profile (`docs/profiles/en-cs.md`, English speakers learning Czech) was read; its sourced contrastive facts are reused where marked "en-cs.md".

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`). Explanations address the learner as **ty** (lower case), friendly and plain; buttons use the **infinitive**; instructions use the ty imperative. Czech school grammar terms first, the English name once in brackets: «předpřítomný čas (Present Perfect)».
- **Best-measured error: the Present Perfect.** In 50 advanced Czech speakers (LINDSEI_CZ), tense choice is 69% of verb errors, and the Present Perfect, wrongly used or wrongly missing, is in 73% of the tense-choice errors (Gráf 2017). Czech has one past tense and expresses "for three years now" with the present.
- **Articles** are the other large zone (Czech has none), but the Czech article studies could not be opened (§11); the claim rests on teachers' pages. Plural -s is not a Czech problem: Czech marks plural.
- **Pronunciation** (10 strongly accented speakers, Skarnitzl & Rumlová 2019): stress moved to the first syllable in about 50% of the words tested, schwa given a spelling vowel in 63%, /ŋ/ wrong in nearly 75% (*singing* → [sɪŋgɪŋk]), /ð/ → [d] in 58%, /æ/ said as Czech [ɛ], almost no linking, flat intonation. /w/ – /v/ was right in over 70%.
- **Skill shape** (EF EPI 2025): reading 598, listening 579, writing 537, **speaking 498**. Speaking is the gap.
- **Pronunciation aid: IPA, required, exactly as the Chinese course writes it** (`tools/content/zh/PRON-RULES.md` A–D binding; `pronPattern` identical to zh; `pronScript` ˈ). 382 of the 392 ko-en card targets already have a zh transcription that copies byte for byte. A Czech respelling would write the Czech errors into the aid.
- **Standing rule: `article-plural`**, keywords `člen(?!k|ov|stv|sk|it|ěn)|množn|počitateln` (flag `i`); zero parity cost.
- **Script:** Latin, so `nativeScript: null` (a diacritic test would fail «pes», «auto», «ano»). `labels.cueTest` = Czech diacritics or a short list of diacritic-free Czech frame words.
- **Curriculum:** all 40 shared ids kept in order (7 keep, 33 reweight, no English-side change). Add 2: `czenglish` (end of A1; deck «Falešní přátelé a čechismy») and `perfect-3` (B1, after `perfect-2`).
- **Interface:** Czech needs three forms after numbers (1 kartička / 2–4 kartičky / 5 kartiček), so count patterns use **label + colon + number** («Kartičky: {1}»); messages to the learner avoid the past tense and adjectives that show gender.

## 2. Variant, register and voice

**Variant: American English** [practitioner opinion, decision]:
1. `ko-en` uses `ttsLang: "en-US"`, and the shared English strings are frozen (PILOT-SPEC; parity).
2. Czech schools mostly use British textbooks and British transcription symbols. This is general knowledge, **not verified on an opened page** (§11). So the course says once, in `pron`, how the American symbols differ (§6), and gives British forms only as a card `note` («Britsky: *flat*, *lift*, *holiday*»), never as an accepted answer.
3. US spelling in every English string (*color*, *center*, *traveling*).

**Form of address: ty, lower case.** This is the brief's decision, not a finding:
- Both style guides that were opened recommend the plural form. Microsoft's Czech guide: use the second-person plural "whenever possible" and do not use tykání "unless it's appropriate for the context" ([Microsoft Czech Style Guide](https://download.microsoft.com/download/7/b/5/7b57e4a1-d299-4238-9997-f3ac51d6f763/ces-cze-StyleGuide.pdf)). Mozilla's Czech guide: "use the second person plural (vy - vykání)" ([Mozilla](https://mozilla-l10n.github.io/styleguides/cs/general.html)) [curriculum convention].
- The two Czech learning sites that were opened also use vykání («Přihlaste se», «Nevíte si rady?» on [Umíme anglicky](https://www.umimeanglicky.cz/); «Víte, že…» on [Help for English](https://www.helpforenglish.cz/vyslovnost)) [curriculum convention].
- **No opened page shows a Czech app that uses ty.** That modern consumer and language apps address Czech users with ty is the brief's premise and widely observed, but it is unverified here [native check, §11].
- Rules that follow from choosing ty:
  - Lower-case **ty, tě, ti, tvůj**. The capital «Ty» belongs to letters, not interfaces.
  - Never mix: no «vy», «váš», «prosíme vás» anywhere in the interface or the course.
  - Ty exposes gender in the past tense and in adjectives («udělal jsi / udělala jsi»). §10 gives the gender-neutral constructions; they are binding for every string addressed to the learner.
  - The app speaks as **my** only where a subject is needed («Poslali jsme ti e-mail»); otherwise impersonal («Uloženo», «Hotovo»). Mozilla's guide advises against a first-person singular program voice («Stahuje se…», not «Stahuji…»).

**Register for explanations:** standard Czech, short sentences, no school-book stiffness and no slang.
- Standard forms only: «bych», «bys», «jsme» (not «bysme», «seš»); «tento / ten», not «tenhle» in rules; no obecná čeština endings («dobrej», «s klukama»).
- Prefer verbs to nouns: «Když mluvíš o zvyku, použij přítomný čas prostý», not «Při vyjádření zvyku dochází k užití…».
- Say what the Czech sentence does, then what English does: «Česky stačí „Prší“. Anglicky potřebuješ podmět: „It's raining.“»
- Mark errors with ✗ and corrections with ✓: `I live here five years. ✗ → I've lived here for five years. ✓`.
- **Translations of example sentences:** *you* is «ty» between friends and «vy» in service, work and email scenes (that «vy» is inside a translation, not addressed to the learner). *I* sentences with a past tense or an adjective follow the speaker of the dialogue; a card with no speaker gives both forms once, short form second: «Jsem unavený / unavená.» Never «unavený/á» or «udělal(a)».

Three sample sentences in the voice [native check]:
- «Čeština členy nemá, proto se na „a“ a „the“ zapomíná nejčastěji. Stačí si zapamatovat tři pravidla.»
- «Česky řekneš „Bydlím tady pět let“ v přítomném čase. Angličtina tu chce předpřítomný čas: „I've lived here for five years.“»
- «Na konci slova čeština znělost ruší: „led“ zní jako „let“. Angličtina ne: „bad“ a „bat“ jsou dvě různá slova.»

**Typography (binding; sources: ÚJČ Internetová jazyková příručka)** [curriculum convention]:
- **Quotation marks «„ “»** (U+201E, U+201C), the "99 66" shape the ÚJČ recommends; nested «‚ ‘» (U+201A, U+2018). Never straight `"` or English “ ” in Czech text. The closing mark follows the sentence's own punctuation when a whole sentence is quoted ([ÚJČ, Uvozovky](https://prirucka.ujc.cas.cz/?id=162)).
- **No-break space (U+00A0)** after the one-letter prepositions **k, s, v, z, o, u** and the conjunctions **a, i**, between a number and its unit or sign («85 %», «250 Kč», «5 min»), and between day and month in a date ([ÚJČ, Zalomení řádků](https://prirucka.ujc.cas.cz/?id=880)). Where it is typed:
  - `tools/i18n/cs/ui.json`: always, in every string that can wrap.
  - Lesson titles, blurbs and card notes: always.
  - Long lesson prose: typed where the writer can; an engine-side pass for `lang="cs"` that replaces the space after a one-letter word would be safer (engine note, §10).
  - **Never** in deck names (they are object keys), never in English strings, `a` answers or tiles.
  - In this document a no-break space is printed as an ordinary space.
- **Dash:** an en dash with spaces « – » for an aside or a gloss, never « — » or a hyphen.
- **Percent and units:** «85 %» with a space; no space only in the adjective «20% sleva» / «20procentní» ([ÚJČ, Značky, čísla a číslice](https://prirucka.ujc.cas.cz/?id=785)).
- **Capitals:** sentence case in titles, deck names, buttons and headings («Čísla, čas a datum»). Mozilla's guide: capitalise the first word only; "Title case does not look natural for the Czech language". Weekdays, months and language names are lower case («pondělí», «listopad», «angličtina», «anglicky») [general Czech spelling; native check].
- Alternatives are separated by ` / ` (spaced), as in ko-en.
- **In this document only**, « » mark quoted Czech text so that the Czech marks „ “ inside stay visible. « » never appear in course or interface strings.

**Mixing English into Czech text:**
- **Lesson HTML bodies:** English words and sentences in `<b>` (as ko-en does). `<em>` only for a Czech word being discussed («sloveso *být*»).
- **Plain-text fields** (`why`, `hint`, `p`, `q`, card `note`): English goes inside Czech quotation marks: «Před povoláním je člen „a“: „a teacher“.» This matters more in Czech than elsewhere, because a bare English *a* reads as the Czech conjunction «a», and *to*, *on*, *my*, *ten*, *pro*, *do* are Czech words too. A Czech phrase quoted inside takes «‚ ‘».
- **Do not decline English words** in rules: «tvar slovesa „go“», not «goučko», «v present perfectu». Tense names are Czech (§3).
- An English sentence that is the whole object of a `q` may stand bare after the Czech frame: `Kde je chyba? She go to school every day.`

## 3. Glossary

**Convention found** [curriculum convention]:
- Czech sites for learners use Czech grammatical terms: «člen určitý (THE)», «člen neurčitý (A, AN)», «počitatelná / nepočitatelná podstatná jména», «jednotné / množné číslo», «přivlastňovací a ukazovací zájmena», «předložky», «modální slovesa», «podmět» ([Landigo, Členy v angličtině](https://www.landigo.cz/anglictina-online/zacatecnici-plus-a1/cleny-v-anglictine)).
- Others label topics in English («To be in present simple», «Present continuous» on [Umíme anglicky](https://www.umimeanglicky.cz/)).
- Exercise names in Czech: «Výběr z možností», «Stavba vět», «Doplňování textu», «Vpisování», «Poslech vět» (Umíme anglicky).

**Rule:**
- **Czech term first; the English name once in brackets** at first mention in a lesson body: «předpřítomný čas (Present Perfect)», then «předpřítomný čas». Learners met both at school.
- **One term per concept**, exactly as below. The standing-rule regex depends on **člen**, **množné číslo** and **počitatelné / nepočitatelné** (§7).
- The Czech tense names below are the school terms as this profile knows them; they were **not** on an opened page [native check].

| English term | Czech term (use this) | Note |
|---|---|---|
| article | **člen** | Standing-rule keyword. «člen („a“, „an“, „the“)». Never use «člen» for "member" in a `why` (§7) |
| indefinite / definite article | neurčitý člen / určitý člen | Landigo |
| zero article | bez členu | «tady bez členu»; not «nulový člen» in practice |
| noun | podstatné jméno | |
| countable / uncountable | **počitatelné / nepočitatelné** (podstatné jméno) | Standing-rule keyword |
| singular / plural | jednotné číslo / **množné číslo** | Standing-rule keyword. Never «plurál», never «mn. č.» |
| pronoun | zájmeno | osobní, přivlastňovací, ukazovací |
| subject / object | podmět / předmět | |
| verb | sloveso | |
| to be | sloveso „to be“ (být) | |
| auxiliary (do / does / did, have) | pomocné sloveso | |
| modal | způsobové sloveso | «modální sloveso» also exists (Landigo); use «způsobové» |
| base form / past form / past participle | základní tvar / minulý tvar / příčestí minulé | Short: «1., 2. a 3. tvar» for irregular verbs [native check] |
| third-person -s | -s ve 3. osobě jednotného čísla | Short: «-s ve třetí osobě» |
| regular / irregular verb | pravidelné / nepravidelné sloveso | |
| -ing form | tvar s -ing | |
| gerund / to-infinitive | gerundium (tvar s -ing) / infinitiv s „to“ | |
| tense | čas | |
| aspect (Czech) | vid (dokonavý / nedokonavý) | Contrast only: «Český vid není anglický průběhový čas» |
| present simple | přítomný čas prostý (Present Simple) | |
| present continuous | přítomný čas průběhový (Present Continuous) | |
| past simple / past continuous | minulý čas prostý / průběhový (Past Simple / Past Continuous) | |
| future (will / going to) | budoucí čas s „will“ / vazba „be going to“ | |
| present perfect (+ continuous) | **předpřítomný čas** (Present Perfect), průběhový | |
| past perfect | předminulý čas (Past Perfect) | |
| passive / active | trpný rod / činný rod | |
| conditional | podmínková věta; první, druhý, třetí kondicionál | |
| relative clause / pronoun | vztažná věta / vztažné zájmeno | Link to «který» |
| reported / direct speech | nepřímá řeč / přímá řeč | «souslednost časů» for backshift |
| preposition / conjunction | předložka / spojka | |
| adjective / adverb | přídavné jméno / příslovce | |
| comparative / superlative | 2. stupeň / 3. stupeň (komparativ / superlativ) | |
| question word | tázací slovo | |
| positive / negative / question | kladná věta / zápor / otázka | |
| double negative | dvojí zápor | «V angličtině stačí jeden zápor» |
| word order | slovosled | |
| contraction | stažený tvar („I'm“, „don't“) | |
| phrasal verb | frázové sloveso | |
| idiom | idiom / ustálené spojení | |
| false friend | falešný přítel (pl. falešní přátelé) | Hladký's dictionary title «Zrádná slova v angličtině» is the other known label (not opened) |
| calque from Czech | čechismus | Sparling's subtitle: «jak se vyhnout čechismům v angličtině» (Wikipedia, Czenglish) |
| pronunciation / transcription | výslovnost / přepis výslovnosti | Toggle «Zobrazovat výslovnost» |
| stress | přízvuk | «ˈ stojí před přízvučnou slabikou» |
| syllable | slabika | |
| vowel / consonant | samohláska / souhláska | znělá / neznělá souhláska |
| linking | vázání slov | |

Interface terms are in §10.

## 4. Persistent error zones

**Ranking:** evidence strength × how often the point recurs across lessons. The ranking is this profile's inference. Format: error ✗ → correction ✓. A "Why" line is general contrastive description [practitioner opinion] unless a source is named. "Theirs" = quoted from the named source.

**Main opened evidence:**
- [Gráf 2017](https://karolinum.cz/data/clanek/3828/Phil_1_2017_08_Graf.pdf), *Verb Errors in Advanced Spoken English* (AUC Philologica): 50 Czech students of English philology, C1–C2, interviews of the spoken corpus LINDSEI_CZ (about 125,000 tokens). 1,301 errors in the whole corpus, 250 of them verb errors. **Advanced speech only.** The paper's own counts do not fully reconcile: Table 2 gives 173 tense errors "including tense agreement", while the per-tense percentages (37 = 28.46%, 58 = 44.61%) are computed on 130.
- [Skarnitzl & Rumlová 2019](https://karolinum.cz/data/clanek/7247/Phil_2019_2_0109.pdf), *Phonetic aspects of strongly-accented Czech speakers of English* (AUC Philologica): **10 women chosen for a strong accent**, each reading a BBC news text of about 4 minutes; auditory scoring of 58–361 items per feature. Not a sample of typical learners.
- Teachers' pages (no counts): EnglishCurrent, Expats.cz, OnTESOL, Verbling, Radio Prague's interview with Don Sparling, the Wikipedia article *Czenglish*.

1. **Present Perfect against Past Simple and Present Simple.**
   - *Examples (all theirs, Gráf):* `I teach the girl for about three years already. ✗ → I have been teaching ✓` / `It's open for just a few years. ✗ → It's been open ✓` / `I've seen it on my birthday. ✗ → I saw it ✓` / `In the past year I changed a lot. ✗ → I have changed ✓` / `All his art collection is gone, it was stolen. ✗ → it has been stolen ✓`
   - *Why:* Czech has one past tense and no perfect. Duration up to now is said with the **present** («Učím ji tři roky»), a past event with a present result with the **past** («Ukradli mu to»). Gráf names both transfers.
   - *Evidence:* [research-backed] Gráf 2017.
     - Tense errors are 173 of 250 verb errors (69.2%), made by 42 of 50 speakers.
     - Present Perfect used wrongly 37 times (20 speakers), and missing 58 times (28 speakers); 34 of 50 speakers made at least one of the two. It is involved in 73% of the tense-choice errors.
     - Missing Present Perfect for a past event with a present result: 31 cases, 18 speakers. Present for "duration until now", and Past Simple after *since*: named as L1 transfer.
     - **Over-use is teaching-induced.** Gráf traces wrong Present Perfects to "triggers" drilled in class: *see, visit, meet*, *just*, *for a year*, a sense of experience. So the course must drill "when not" as much as "when".
   - Teachers agree at lower levels ([OnTESOL](https://ontesol.com/blog/teaching-english-abroad/czech-republic/teaching-grammar-to-czechs-language-difficulties/)) [practitioner opinion].
2. **Articles: missing, extra, or *some* for *a*.**
   - *Examples:* `Reason why I am leaving the college… ✗ → The reason ✓` (Expats.cz) / `I am sending you also activity of week 1. ✗ → I'm also sending you the activity for week 1. ✓` (Expats.cz) / `I live in the Prague in Czech Republic. ✗ → in Prague in the Czech Republic ✓` (EnglishCurrent) / `I will give some presentation. ✗ → a presentation ✓` (EnglishCurrent) / `He lives in so nice apartment. ✗ → such a nice apartment ✓` (EnglishCurrent)
   - *Why:* Czech has no articles. «nějaký» and «jeden» overlap with *a* only partly; «ten» with *the* only partly.
   - *Evidence:*
     - [practitioner opinion] [EnglishCurrent](https://www.englishcurrent.com/grammar/common-english-mistakes-czech-people/), [Expats.cz](https://www.expats.cz/czech-news/article/teacher-feature-biggest-mistake-czech-students-make), OnTESOL, [Verbling](https://www.verbling.com/articles/post/from-slavic-languages-to-english-the-com) (`the France ✗`), and [Wikipedia, *Czenglish*](https://en.wikipedia.org/wiki/Czenglish) (missing definite articles; *some* for the indefinite article).
     - **No counted Czech article study was opened.** Two Charles University theses on LINDSEI_CZ exist; their record pages timed out. A search-engine summary of the first reports 265 article errors in 50 interviews, mostly omission, worst for non-generic indefinite reference, with *the* over-used in generic reference. That summary is **unverified** and is not in Sources (§11).
     - The cross-L1 finding that article-less first languages keep article accuracy low to advanced level is for Russian, Japanese, Korean and Turkish (Murakami & Alexopoulou 2016, cited via ru.md, not re-opened; no Czech group is mentioned there). For Czech it is [practitioner opinion].
3. **Word order: questions, indirect questions, adverbs.**
   - *Examples:* `She was tired? ✗ → Was she tired? ✓` (OnTESOL) / `When is somebody homeless, I understand. ✗ → When somebody is homeless ✓` (OnTESOL) / `How old she is? ✗ → How old is she? ✓` (Verbling) / `I don't know what is his job. ✗ → what his job is ✓` (EnglishCurrent) / `The guests will be tomorrow here. ✗ → will be here tomorrow ✓` (Verbling) / `How is this thing called in English? ✗ → What is it called ✓` (Sparling, Radio Prague)
   - *Why:* Czech word order is free and marks emphasis; yes/no questions need no auxiliary; the clitic «je / jsem / se» sits in second position (en-cs.md §4.14, Tahal), so *be* drifts to second place in English too (OnTESOL).
   - *Evidence:*
     - [research-backed, small] [Tauchmanová 2021](https://europeanproceedings.com/article/10.15405/epiceepsy.21101.15): 16 Czech pre-service English teachers turned seven direct questions into indirect ones; **8 of 16 made errors**, mostly by keeping the *do* operator or the question order; all 16 were right with modals.
     - [practitioner opinion] the pages above. Sparling calls *How is it called?* "almost ineradicable" ([Radio Prague](https://english.radio.cz/english-or-czenglish-8058422)).
     - `I very like it ✗ → I really like it ✓` is [practitioner opinion, inference]; no source opened.
4. **Continuous forms for habits; Czech aspect read as English aspect.**
   - *Examples (OnTESOL):* `I'm usually having dinner at 7 pm. ✗ → I usually have ✓` / `When I was young, I was playing hockey every day. ✗ → I played ✓`
   - *Why:* the Czech imperfective («hrál jsem») covers both a habit and an action in progress.
   - *Evidence:* **the sources disagree.** [practitioner opinion] OnTESOL says the error "persists even among the most advanced ESL students", and EnglishCurrent lists over-use of the present continuous first. [research-backed] Gráf found only four of 50 advanced speakers erring in aspect, and aspect at 3.2% of tense errors against 30.3% in the German LINDSEI subcorpus. Read: common at lower levels, gone by C1. Weight it in A1–A2 lessons, not in B1.
5. **Conditionals and time clauses: *will* after *if*, *would* in both halves.**
   - *Examples:* `If I will have time, I will write you an email. ✗ → If I have time ✓` (OnTESOL) / `I'd like to, if I'll be admitted. ✗ → if I am admitted ✓` (theirs, Gráf)
   - *Why:* Czech uses the future after «jestli / když / až» («jestli budu přijat», Gráf) and «by» in both clauses of «kdyby» sentences.
   - *Evidence:* [research-backed] Gráf: errors in the conditional are the second-largest verb group, 24 of 250 (9.6%), 14 of 50 speakers; *will* after *if* by two speakers. The «by … by» transfer is [practitioner opinion, inference].
6. **Past Perfect and tense agreement.**
   - *Examples (theirs, Gráf):* `There had to be plenty of water because we experienced some problems with water. ✗ → had experienced ✓` / `I tried to travel as much as I could because I've never been to Ireland before. ✗ → I had never been ✓`
   - *Why:* Czech has no pluperfect in use and no backshift («Řekl, že je unavený»).
   - *Evidence:* [research-backed] Gráf: Past Perfect missing where preferable in 24 cases (14 speakers); tense-agreement errors are counted inside the 173.
7. **Prepositions and verb patterns copied from Czech.**
   - *Examples:* `Welcome in the Czech Republic. ✗ → Welcome to ✓` / `The book is from Dick Francis. ✗ → by ✓` / `a sense for humor ✗ → a sense of humor ✓` (all Sparling, Radio Prague) / `I take care about my grandmother. ✗ → take care of ✓` / `I studied the University of Economics. ✗ → studied at ✓` (EnglishCurrent) / `I'm counting with you. ✗ → I'm counting on you ✓` (Expats.cz)
   - *Why:* Czech prepositions plus case («počítat s», «smysl pro», «kniha od») are translated one to one.
   - *Evidence:* [practitioner opinion] the three pages; Wikipedia lists "inappropriate prepositions". No count.
8. **Dummy subjects: *it* and *there*; dropped pronouns.**
   - *Examples:* `They are 10 chairs here. ✗ → There are ✓` / `It's a lot of rain here. ✗ → There's ✓` (OnTESOL) / `There is comfortable. ✗ → It is comfortable there. ✓` (EnglishCurrent) / `Is raining. ✗ → It's raining. ✓` (inference)
   - *Why:* Czech drops subject pronouns («Prší», «Jsem unavený») and has no dummy subject; «tady je / jsou» is not *there is*.
   - *Evidence:* [practitioner opinion]. The dropped-pronoun example is inference.
9. **Lexical transfer: false friends and calques (Czenglish).**
   - *Examples:* `The Beneš decrees are very actual these days. ✗ → topical / a current issue ✓` (Sparling) / `I went to the doctor for control. ✗ → for a check-up ✓` / `concrete details ✗ → specific details ✓` (Expats.cz) / `I learned him English. ✗ → I taught him ✓` / `I told I will be back. ✗ → I said / I told her ✓` / `Can I have a question? ✗ → Can I ask a question? ✓` / `Skiing was really funny. ✗ → fun ✓` / `everything what is necessary ✗ → everything that ✓` / `no way how to escape ✗ → no way to escape ✓` / `He is 22 years. ✗ → He is 22 (years old). ✓` (all EnglishCurrent) / `basic school ✗ → elementary school ✓` / `Brewed in Czech ✗` (Wikipedia)
   - *Evidence:* [practitioner opinion] throughout. Sparling says such errors are decreasing with exposure (Radio Prague, 2002). The meanings of the Czech words were checked in the ÚJČ dictionaries where §9 says so. The standard book, Sparling's *English or Czenglish?* (1991), was not opened.
10. **Pronunciation.** All figures: Skarnitzl & Rumlová 2019, 10 strongly accented speakers [research-backed], unless marked.
    - **Stress on the first syllable.** Words stressed elsewhere were stressed on the first syllable "in about 50% of the cases, regardless of word length" (342 items). Czech stress is fixed on the first syllable. Second syllables also tend to be higher in pitch than the stressed one.
    - **Schwa and weak forms.** Only 37% of schwas had schwa quality; the rest got a spelling vowel: [e] in *system*, *company*, *across*; [o] in *completely*, *official*; [a] in *India*, *data*. Earlier studies cited there: Czech schwas are too prominent, and weak forms (*and, for, that, were*) are too long.
    - **/æ/ and the open vowels.** Of 113 /æ/ items, one was target-like; the vowel is said as Czech [ɛ], so *bad* and *bed* differ only in length ([bɛːd] / [bɛd]; Šimáčková 2003, cited there).
    - **/ŋ/.** Wrong in nearly 75% of 94 items, mostly [ŋ] plus [k] or [g]: *singing* → [sɪŋgɪŋk]. In Czech [ŋ] exists only before k and g («banka»).
    - **TH.** /ð/ was right in 33% and replaced by [d] in 58% of 159 items, most in *the, this, than*. /θ/ varied by speaker: three speakers always right, three replacing over 75%, usually with [t]; [s] at word ends (*month, both*); [f] once.
    - **/w/ and /v/.** Both right in over 70%; half the speakers had no problem. Errors run both ways (*which* → [vɪtʃ], *very* → [werɪ]); /w/ was worse in content words (*world, twenty*). Teachers still report *vork, vish, vhen* (Expats.cz) and list V/W (EnglishCurrent) [practitioner opinion].
    - **Final voiced consonants.** Czech neutralises voicing at the end of a word («spát» = «spád», the paper; «led» = «let», en-cs.md). English keeps *dog* and *dock* apart mainly by vowel length, which strongly accented Czech speakers "did not exploit" (Skarnitzl & Šturm 2016, cited there). Wikipedia: *big* → [bɪk].
    - **Voicing across words.** About 40% of word-final voiceless consonants were voiced before a voiced sound (*West Bank* → [wezd beŋk]); see also [Skarnitzl & Šturm 2014](https://czasopisma.uni.lodz.pl/research/article/view/6784) (abstract page only).
    - **No linking, flat melody.** Most speakers rarely linked (one never, in 26 chances; the best in 46%); a glottal stop separates words. Pitch range about 4 semitones, narrower than native speakers'.
    - **Aspiration.** p, t, k aspirated in 53% of word-initial stressed syllables and 23% of later ones.
    - **R is not the problem.** Seven of ten mostly used an approximant; the trilled r was rare. The R/L pairs of the shared deck are easy for Czechs.
    - **Spelling pronunciation.** `bought` → "bawft" (Expats.cz) [practitioner opinion]; silent letters and *-ed* said as a syllable are [inference].
11. **Countability and number.**
    - *Examples:* `One of my colleague is from Canada. ✗ → One of my colleagues ✓` (EnglishCurrent) / `informations`, `advices`, `The news are…`, `Money are…`, `hairs` (inference)
    - *Why:* «informace», «rady», «zprávy», «peníze», «vlasy» are countable or plural in Czech; «hodně / mnoho» covers *many* and *much*.
    - *Evidence:* [practitioner opinion]; only the first example has a source. Plural -s itself is not reported as a Czech problem anywhere; Gráf has 14 verb-number errors (5.6% of verb errors) at C1.
12. **Double negatives.**
    - *Examples:* `I didn't see nobody. ✗ → I didn't see anybody. ✓` / `Nobody doesn't know. ✗ → Nobody knows. ✓`
    - *Why:* Czech requires negative concord («Nikdo nic neviděl»).
    - *Evidence:* **none opened.** [practitioner opinion, inference]. The brief lists it; teach it lightly in `present` and `questions` and do not claim a frequency.
13. **Adjective or adverb, -ed or -ing, *so* or *such*.**
    - *Examples (EnglishCurrent):* `That side of town is danger. ✗ → dangerous ✓` / `very beautiful and safety ✗ → safe ✓` / `so good idea ✗ → such a good idea ✓`
    - *Evidence:* [practitioner opinion].
14. **Pronouns for things; *svůj*; reflexives.**
    - *Examples (inference):* `My phone? He doesn't work. ✗ → It ✓` / `I like the my job` or missing possessive for «svou práci» → `I like my job ✓` / `I feel myself well. ✗ → I feel well ✓`
    - *Why:* Czech nouns have gender; «svůj» stands for every person; «se / si» verbs are not English reflexives.
    - *Evidence:* [practitioner opinion, inference]; no source opened.
15. **Writing conventions.** Comma before *that* and *because* (Czech always writes one before «že», «protože»), lower-case *monday, english, czech*, decimal comma, «23. 11.» read as month 23. [practitioner opinion, inference]; no source opened.

## 5. Learner starting point

- **School exposure** [curriculum convention; [Eurydice, Czechia](https://eurydice.eacea.ec.europa.eu/cs/eurypedia/czechia/vyucovani-uceni-v-zakladnim-vzdelavani)]:
  - A foreign language is compulsory from grade 3, at least 3 hours a week: «Cizí jazyk se povinně vyučuje od 3. ročníku s minimální dotací 3 hodiny týdně». Schools may start in grade 1. The first foreign language need not be English by law, though the older framework said English should be offered first.
  - Target at the end of basic school: **A2** in the first foreign language, A1 in the second (taught from grade 8 at the latest).
  - A revised framework makes teaching by the new programme compulsory in grades 1 and 6 from 2027/28 and in all grades from 2032/33 (the page's header gives 2028/29; the discrepancy is on the page).
  - **Maturita:** the state exam in English targets **B1**: «jazykovou referenční úroveň B1» ([CERMAT, Katalog požadavků, anglický jazyk](https://maturita.cermat.gov.cz/files/files/AJ_Katalog_pozadavku_MZ-17-18_opr_2.pdf); the 2017/18 edition was the one opened).
- **Profile figures** [research-backed, test-taker data]:
  - **EF EPI 2025, Czechia:** rank 23, score **582** (global average 488). Skills: **reading 598, listening 579, writing 537, speaking 498** ([fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-czech-republic-english.pdf)).
  - Regions: South Moravian highest, Prague 587, Hradec Králové 550. Cities: Brno 620, Prague 576.
  - Self-selected online test-takers; no sample size on the sheet. The band label was not readable in the extracted text.
  - **Shape:** reading is 100 points above speaking. Receptive skills are strong; production, above all speech, trails.
- **Who the adult learner is** [practitioner opinion, inference]:
  - Under about 45: at least nine years of school English, usually A2–B1 on paper, reads and understands well, is hesitant in speech, and carries fossilised Czenglish.
  - Older adults often had Russian or German at school before 1990 and may be real beginners. General knowledge; no source opened.
- **Exam culture** [curriculum convention / general knowledge]: maturita (B1: listening, reading and language use in a multiple-choice "didaktický test", a written paper, an oral exam) and Cambridge exams. Four-option multiple choice and gap-fill are familiar formats and map onto the practice set. Cambridge's popularity was not verified.
- **Implications for the app** [practitioner opinion]:
  1. **Start at A1, expect false beginners.** The value is in typed production and audio, not in recognition.
  2. **Speaking is the gap:** keep the transcription visible, mark stress on every content word, and make the learner say the weak forms.
  3. **Name grammar the school way** (§3); it shortens every explanation.
  4. **Un-teach as well as teach.** Gráf's triggers and Sparling's calques are habits. `czenglish` and `perfect-3` (§8) exist for that.
  5. **Do not over-drill what Czechs have:** r and l, plural as an idea, subject–verb agreement as an idea, the copula.

## 6. Pronunciation aid policy

**Evidence and practice**
- **What the errors are** (§4.10): misplaced stress (about 50%), full vowels for schwa (63%), /æ/ as [ɛ], /ŋ/ + [k/g] (nearly 75%), /ð/ → [d] (58%), final devoicing, no linking. Five of these seven are things **an aid can show**: stress, schwa, æ, ŋ, and a voiced final letter.
- **What learners can already read.** Czech learning sites print English sounds in IPA between slashes: article titles on Help for English include «Výslovnost: měkké /i/ a tvrdé /ɪ/», «THINK or SINK: Výslovnost hlásek ð / θ», «Výslovnost /v/ a /w/» ([Help for English, Výslovnost](https://www.helpforenglish.cz/vyslovnost), index page only) [curriculum convention, one source].
  - That school textbooks and Czech–English dictionaries print IPA-based transcription is general knowledge, **not verified on an opened page** (§11). That adults still read it years after school is assumed, not measured, as for zh and ru.
  - Some Czech dictionaries and older textbooks use a Czech-letter variant inside square brackets, with **š, č, ž, dž** for ʃ, tʃ, ʒ, dʒ. This is from memory, not from an opened page [native check]. The `pron` lesson must bridge it (below).
- **Czech respelling** («[ajm fajn]», «[senk jú]») is rejected because Czech letters **write the Czech errors into the aid**:
  - /w/ becomes «v» or «u»; /θ/ becomes «s», «t» or «f»; /ð/ becomes «d» or «z»: exactly the substitutions measured by Skarnitzl & Rumlová.
  - /æ/ and /e/ both become «e»; schwa becomes «e» or the spelling vowel.
  - Czech has length marks (á, í, ú), so /iː/ – /ɪ/ would look solved, but the pair differs in quality too, and «í» invites a Czech [iː] for both.
  - A final «d», «g», «z», «v» is read devoiced by habit («led» = [let]), so *bad* written «bed» or «bæd» in Czech letters still comes out as *bat*.
  - Czech spelling has no way to mark stress, and Czech readers put it on the first syllable. The largest prosodic error would be invisible.
- **No study compares IPA, respelling and no aid** for Czech learners. The recommendation is inference [practitioner opinion].

**Recommendation: IPA in every `pron` field (profile.json `"pron": "required"`), written exactly as the Chinese course writes it.** Shown by default; hidden with the toggle «Zobrazovat výslovnost».
- **Why copy zh, as ru did:**
  1. Learners can read it (above).
  2. **Reuse.** `cs` is scaffolded from ko-en. **382 of ko-en's 392 card targets already have a zh IPA `pron`** (counted locally in `packs/`; the other 10 are positions zh localised), and zh's lessons carry the `{{ex}}` rows. Every unchanged English string copies its zh `pron` byte for byte. Only localised cards (§9), cs-only cards and the two cs-only lessons need new transcriptions; several of those (ship / sheep, wine / vine, west / vest, bad / bat, dog / dock, sing / singing, comfortable, development) already exist in ru.
  3. **Copy from zh or ru, never from vi:** vi's IPA uses ɚ, ɝ and ‿, which this `pronPattern` rejects.
  4. **Consistency.** `lint.js` blocks the same English text with two different aids in one pack; copying keeps cs consistent for free.
- **Binding rules:** `docs/profiles/zh.md` §6 as settled by **`tools/content/zh/PRON-RULES.md` A–D** (symbols, syllabic consonants, weak and strong forms, stress, format). Where they differ, PRON-RULES.md wins. The content lead should copy that file to `tools/content/cs/PRON-RULES.md` and add the Czech rows below.
- **The key** (same as zh and ru; repeated so this profile stands alone):
  - **Delimiters:** one pair of slashes `/…/`; words separated by one space; no punctuation, capitals or digits; ` ‖ ` between two sentences in one row; alternatives as two slashed groups. Never `[ ]`, `|` or `//`.
  - **Stress:** ˈ (U+02C8) before the stressed syllable of **every word except the closed function-word list** (articles, personal and possessive pronouns, *be*, auxiliary *do / have*, modals, prepositions, conjunctions, existential *there*), one-syllable words included. ˌ only inside long words, in *-teen* numbers and letter-by-letter abbreviations. Every `pron` therefore contains ˈ.
  - **Vowels (American values in the school symbol set):** iː / ɪ, e / æ, ʌ / ə, uː / ʊ, ɑː (hot), ɔː (talk, dog), oʊ (go), ɜːr (bird), ər (water), ɪr / er / ʊr, ɑːr / ɔːr, eɪ aɪ ɔɪ aʊ; final unstressed -y = i.
  - **Consonants:** p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r w j. ASCII **g** (never U+0261), plain **r**, no flap symbol, no ɚ / ɝ.
  - **Weak forms by default** (a /ə/, the /ðə/ or /ði/, to /tə/, for /fər/, of /əv/, and /ənd/, can /kən/, could /kəd/, are /ər/, was /wəz/, you /ju/, your /jʊr/); strong form and ˈ when stressed or alone.
  - **Codas in full:** -s as /s z ɪz/, -ed as /t d ɪd/, clusters, **voiced finals as voiced** (*bad* /ˈbæd/, *dogs* /ˈdɔːgz/). No inserted vowels. Syllabic l and n as in PRON-RULES A4 (*people* /ˈpiːpl/, *student* /ˈstuːdnt/).
  - **Numbers** as words, **abbreviations** letter by letter, **names** as the en-US voice says them (§9).

- **Symbol table** (what a Czech reader needs told):

  | Sound | Write | What the lesson says in Czech (prose, not in `pron`) |
  |---|---|---|
  | FLEECE / KIT | iː / ɪ | «ɪ není krátké í: je otevřenější, skoro k „e“» |
  | DRESS / TRAP | e / æ | «æ: otevři ústa víc než u českého „e“; „bad“ není „bed“» |
  | STRUT / schwa | ʌ / ə | «ə je slabé, krátké a nikdy nemá přízvuk. Nečti psané písmeno» |
  | GOOSE / FOOT | uː / ʊ | |
  | LOT / THOUGHT | ɑː / ɔː | British school symbol for LOT is ɒ |
  | GOAT | oʊ | British school symbol is əʊ |
  | NURSE / lettER | ɜːr / ər | «r se v americké angličtině vyslovuje vždy» |
  | FACE PRICE CHOICE MOUTH | eɪ aɪ ɔɪ aʊ | |
  | θ / ð | θ / ð | «špička jazyka mezi zuby; ne „t / s / f“ a ne „d / z“» |
  | w / v | w / v | «w: rty do kroužku, zuby se rtu nedotknou. v: horní zuby na spodním rtu» |
  | ŋ | ŋ | «jako „n“ ve slově „banka“, ale bez „k“ a bez „g“ na konci: sing /ˈsɪŋ/» |
  | ʃ tʃ ʒ dʒ j | ʃ tʃ ʒ dʒ j | «ʃ = š, tʃ = č, ʒ = ž, dʒ = dž, j = české j» |
  | h | h | «neznělé, jen výdech; ne české znělé „h“ a ne „ch“» [native check] |
  | voiced finals | b d g v z ʒ dʒ ð | «Na konci slova zůstává znělost: bad ≠ bat. Samohláska před znělou souhláskou je delší» |
  | stress | ˈ | «Přízvuk není vždy na první slabice: hotel /hoʊˈtel/» |

- **Czech-specific additions** (they change no zh form):
  1. **Brackets and letters.** The `pron` lesson says once: «Ve slovnících bývá výslovnost v hranatých závorkách [ ] a někdy s českými písmeny š, č, ž. Tady je mezi lomítky / / a s mezinárodními znaky. Je to totéž.» [native check]
  2. **British → American table** in the `pron` lesson body: əʊ → oʊ, ɒ → ɑː, ɪə → ɪr, eə → er, ɑː (bath) → æ, final r is pronounced.
  3. **Stress first.** The Czech `pron` lesson opens with ˈ, not with consonants: the stress error is the most frequent measured one and the one Czech spelling cannot show. Pairs: *hotel*, *event*, *Japan*, *development*, *comfortable* (three syllables), *vegetable* (three syllables).
  4. **Homoglyph and keyboard trap.** A writer on a Czech keyboard may type š, č, ž or á. The `pronPattern` class has no Czech letters, so `/ˈšɪp/` fails validation.
- **Validator settings (profile.json):**
  - `"nativeScript": null` — see below.
  - `"pronScript": "ˈ"` — replaces the "differs from English" test for `pron` with "contains ˈ and differs from the English", exactly as in `tools/content/zh/profile.json`. No ˈ occurs in `packs/course-ko-en.js` (0 of 2,794 non-Korean strings, checked locally).
  - `"pronPattern"` — identical to zh's: `^(?=.*ˈ)/C+(?: C+)*/(?: /C+(?: C+)*/)*$` with `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]`. It rejects capitals, punctuation, `y c q x`, U+0261, Czech letters, `[ ]`, `//` and a pron with no stress mark. It cannot reject a well-formed British form (`/ˈgəʊ/`) or a wrong vowel; those are for review and a cs copy of `pron_check.js`.
- **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote IPA in prose and tables (`<b>/θ/</b>`).

**`nativeScript`: null. Why not a diacritic regex.**
- PIPELINE §3 offers two modes. With a regex, "is in the native language" means "contains a character of the script", and English strings must contain none. With `null`, a native string must be non-empty and **differ from its English counterpart**.
- Czech and English share the Latin script. A regex of the Czech diacritics `[áčďéěíňóřšťúůýž…]` would wrongly fail every correct Czech string that happens to have none: «pes», «auto», «voda», «ano», «ne», «ahoj», «dnes», «sto korun», «Mluv pomalu». It would also flag English: `packs/course-ko-en.js` contains *café* (1 string), and *résumé* or *fiancé* may come.
- Vietnamese and Indonesian, the two finished ko-based Latin-script courses, both use `null`. Vietnamese then sets `labels.cueTest` to its diacritic class (almost every Vietnamese phrase has one); Indonesian, which has no diacritics, uses a word list.
- **Czech sits between them, so `cueTest` combines both:** a Czech diacritic **or** one of 16 diacritic-free Czech frame words (*anglicky, slovo, slova, tvar, vyber, oprav, chyba, nebo, jak, kde, kdy, bez, podle, sloveso, jeden, jedna*, first letter either case). Tested locally: 0 hits on the 2,794 non-Korean strings of the ko-en pack except the *café* sentence, which is a typed-answer variant, not an mc question or a hint. It is compiled without the `u` flag (as `_dsl.js` and `validate.js` do); all characters are in the BMP and `\b` is only used around ASCII words.
- Consequences of `null` for writers:
  - A card meaning, `{{ex}}` meaning, gloss or `p` **identical to its English** fails (case- and punctuation-insensitive). §9 lists the loanwords that collide.
  - `why`, titles and blurbs only have to be non-empty; nothing checks that they are Czech. Review must.
  - `cueTest` makes Czech text compulsory in every mc `q` and type `hint` (§7).

**Worked examples.** "zh" / "ru" = copied byte for byte from that pack (same English string); "new" = written for cs by the rules above. All 38 transcriptions pass `pronPattern`, contain ˈ and differ from the English (checked with the profile's regexes in Node; output in the final report). Pairs are two cards; each side was tested alone.

| English | `pron` | Source | Rules / Czech trap shown |
|---|---|---|---|
| Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | zh | weak *to*, *you*; no full stop |
| Where are you from? | /ˈwer ər ju frʌm/ | zh | w not v; stranded *from* strong, no ˈ |
| I'm a student. | /aɪm ə ˈstuːdnt/ | zh | weak *a*; syllabic n, not «-dent» |
| Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | zh | weak modal; r pronounced |
| Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | zh | ð not d; tʃ = č; final /z/ stays voiced |
| Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | zh | θ; ŋ with no k |
| How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | zh | weak *have*; -ed = /d/; the Present Perfect trap |
| think / sink | /ˈθɪŋk/ · /ˈsɪŋk/ | zh | θ vs s |
| three / tree | /ˈθriː/ · /ˈtriː/ | zh | θ vs t (the usual Czech substitute) |
| walk / work | /ˈwɔːk/ · /ˈwɜːrk/ | zh | w; THOUGHT vs NURSE |
| wine / vine | /ˈwaɪn/ · /ˈvaɪn/ | ru | w vs v |
| west / vest | /ˈwest/ · /ˈvest/ | ru | w vs v |
| bad / bed | /ˈbæd/ · /ˈbed/ | zh | æ vs e: quality, not only length |
| bag / back | /ˈbæg/ · /ˈbæk/ | new | final voicing |
| dog / dock | /ˈdɔːg/ · /ˈdɑːk/ | ru | final voicing; ASCII g |
| sing / singing | /ˈsɪŋ/ · /ˈsɪŋɪŋ/ | ru | ŋ with no g or k |
| very | /ˈveri/ | zh | v, not w |
| hotel | /hoʊˈtel/ | new | stress not on the first syllable |
| event | /ɪˈvent/ | new | stress; Czech «event» is stressed first |
| comfortable | /ˈkʌmftərbl/ | ru | three syllables; syllabic l |
| vegetable | /ˈvedʒtəbl/ | new | three syllables, no «-tejbl» |
| development | /dɪˈveləpmənt/ | ru | stress on the second syllable; schwas |
| Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | zh | -teen ˌ; weak *or* |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ | zh | ‖ between sentences; a → the |
| My name is Lenka. | /maɪ ˈneɪm ɪz ˈleŋkə/ | new | localised name (§9); ŋ before k as in Czech |
| I'm from the Czech Republic. | /aɪm frəm ðə ˈtʃek rɪˈpʌblɪk/ | new | *the* with the country name; stress on -pub- |
| I live in Prague. | /aɪ ˈlɪv ɪn ˈprɑːg/ | new | English name of the city; final /g/ voiced |
| Two hundred fifty crowns. | /ˈtuː ˈhʌndrəd ˈfɪfti ˈkraʊnz/ | new | number as words; plural /z/ |
| I've lived here for five years. | /aɪv ˈlɪvd ˈhɪr fər ˈfaɪv ˈjɪrz/ | new | weak *for*; j = Czech j |

- Before writing a "new" row, grep `tools/content/zh/` and `tools/content/ru/` for the English string; if it is there, copy that `pron`.
- The American vowel in *Prague* (/ɑː/) and the en-US voice's reading of the Czech names in §9 were not checked against audio [§11].

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "člen(?!k|ov|stv|sk|it|ěn)|množn|počitateln", "flags": "i" }`.
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **člen** (any case: členu, členem, členy), **množné číslo** (množného, v množném čísle) or **počitatelné / nepočitatelné**.
- **Why stems and a lookahead, not `\b`:** Czech inflects, and JavaScript's `\b` is ASCII-only, so it cannot sit next to «č». The lookahead keeps the "member" family out: «členka», «členové», «členství», «členský», «členit», «rozčlenění» do not match. Flag `i` lets a sentence-initial «Člen…» or «Množné…» match (checked: JavaScript case-folds Č under `i`).
- **What the validator counts** (validate.js `article-plural`): `order` — the `why` names a keyword **and** `x` holds an article tile or a singular/plural twin of a tile in `a`; `type` — the `why` names a keyword **and** every variant in `a` contains an article, or `x` holds an article or a twin. Put the competitor tile in `x` (`a`, `the`, `book` / `books`).

**Sample `why` lines** (all tested locally against the regex; English in Czech quotation marks) [native check on wording]:
- «Před povoláním je neurčitý člen „a“: „a teacher“.» → hit
- «Po „two“ musí být množné číslo: „two brothers“.» → hit
- «„Information“ je nepočitatelné: bez členu a bez -s.» → hit
- «Druhá zmínka, proto určitý člen „the“.» → hit
- «Množné číslo si žádá „these“, ne „this“.» → hit
- «Počitatelné podstatné jméno v jednotném čísle potřebuje „a“.» → hit
- «Obecně o kočkách: množné číslo bez členu, „Cats are cute“.» → hit
- «Člen „the“: mluvíme o věci, kterou oba známe.» → hit (sentence-initial capital, flag `i`)
- «Ve třetí osobě přidej -s: „she works“.» → **no hit** (correct: not an article or plural point)
- «Je tu „yesterday“, proto minulý čas prostý, ne předpřítomný.» → **no hit**
- «Velké množství vyjádříš pomocí „a lot of“.» → **no hit** («množství» is not «množn-»)
- «Je to členka našeho týmu.» → **no hit**

**Writer rules (keep the count meaningful):**
- **Never write «člen» for a person** in a `why` («člen rodiny», «člen týmu» match the regex). Write «někdo z rodiny», «kolega z týmu».
- Write «množné číslo» in full; never «mn. č.», «plurál» or «množina».
- Use the keywords only in `why` lines of items that really hinge on articles or plurals.
- Multiple choice is «výběr z možností» (§10); it contains no keyword stem.

**Justification:**
- **Parity cost is zero.** The shared English `order` / `type` items were written to the Korean rule; only the Czech `why` must name the keyword. Any other kind would force deviations in up to 40 sets [practitioner opinion; consequence of the frozen English side].
- **Articles are a real Czech gap.** Czech has none; every teacher's page opened lists them (§4.2). The counted Czech evidence could not be opened, so this is weaker than for Russian.
- **The plural half rests on parity and countability, not on plural errors.** Czech marks plural, and no source reports plural -s as a Czech problem. The half still tests real Czech errors through «počitatelné / nepočitatelné»: *informations*, *advices*, *one of my colleague*, *the news are* (§4.11), and it makes the learner pronounce a voiced /z/.
- **Why not a tense rule**, given that the Present Perfect is the best-measured Czech error (§4.1)? A `tense-aspect` kind (proposed in OTHERS.md, not implemented) would need a new validator kind and changes to English items in up to 40 sets, each a deviation; and a tense hinge inside `articles` or `countable` would be artificial. The Present Perfect gets `perfect`, `perfect-2`, the new `perfect-3`, `tense` and `narrative`, plus the secondary wording below. Revisit with first-attempt logs.

**Secondary emphasis (not validated; do not add these to the regex):**
- An item that turns on tense names the tense and the reason: «Trvá to dodnes („for five years“), proto předpřítomný čas.» / «Je tu „yesterday“, proto minulý čas prostý.»
- An item that turns on word order says **slovosled**: «V otázce stojí pomocné sloveso před podmětem.» / «V nepřímé otázce je slovosled jako v oznamovací větě.»
- An item that turns on a dummy subject says **podmět**: «Anglická věta potřebuje podmět: „It's raining.“»
- An item that turns on negation says **jeden zápor**: «V angličtině stačí jeden zápor: „I didn't see anybody.“»

**Prompt frames (`labels.cueTest`).** Every practice mc `q` and type `hint` must contain a Czech diacritic or one of the 16 listed words. If an mc `q` written in the `more/` shorthand contains neither, the DSL **silently appends** « Co patří na vynechané místo?», which is wrong for a translation or choice question; a bare type `hint` gets « – použij tato slova».
- In ko-en, many mc questions use the bare frame `'<Korean sentence>' =`. In Czech, **always write the frame**: `Jak se anglicky řekne „Mám hlad“?`. A short Czech phrase alone may have no diacritic («Pes», «Ahoj», «Dobrou noc») and would get the blank cue appended.
- Other frames, all tested to match:
  - meaning: «Jak se anglicky řekne „pes“?» / «Co znamená „eventually“?»
  - forms: «Minulý tvar slovesa „go“?» / «Množné číslo slova „box“?»
  - find the error: «Kde je chyba? She go to school every day.»
  - choose: «Vyber správnou větu.» / «Která věta je správně?»
  - gap: `I ___ a student.` alone is fine: the DSL appends the blank cue, which is right here.
- **Type hints:** the tiles or key words, then « – » and a short Czech note: «three · tree – tři, takže množné číslo», «teacher – člen před povoláním». A hint of English words only gets « – použij tato slova», which is acceptable.
- Do not add words to the list that are also English or could appear in English strings (*pro, to, do, on, my, ten, list, most, pan, sad*). Rerun the 0-hit check after any change.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in zh.md, id.md, ru.md):**
- **keep** = a fresh Czech explanation from the Czech point of view; English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice; the *Czech explanation and lesson-body example rows* shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed** for the shared lessons.
- **add** = a new lesson with `deviations.json` `extraLessons` and profile.json `lessonOrder.after`. Its practice set must itself satisfy §7.

The shared order in `tools/content/lib.js` has **40** ids: the brief's 39 plus `alphabet`, which was added to every course later. Ids and order are unchanged; nothing is replaced or dropped.

| lesson id | keep / reweight / add | note for Czech speakers |
|---|---|---|
| alphabet | reweight | Same letters, different names. Czech «á, bé, cé, dé, é…» against English: **A** /eɪ/, **E** /iː/ (sounds like Czech «í»), **I** /aɪ/, **C** /siː/ not «cé», **G** /dʒiː/ vs **J** /dʒeɪ/ (not «gé» and «jé»), **H** /eɪtʃ/, **Q** /kjuː/, **R** /ɑːr/, **U** /juː/, **V** /viː/ vs **W** /ˈdʌbljuː/ («dvojité vé»), **Y** /waɪ/ not «ypsilon», **Z** /ziː/ not «zet». Spelling a Czech name aloud: say the plain letter and drop the mark (*Novák* → N-O-V-A-K) [native check] |
| pron | reweight | Teach the transcription first: slashes, ˈ, ː, ə, the š / č / ž bridge and the British → American table (§6). Then the Czech traps in measured order: **stress** (hotel, event), **schwa and weak forms**, **æ vs e** (bad / bed), **ŋ** (sing, not «sink»), **ð / θ** (this, think), **w / v** (wine / vine), **voiced finals** (bag / back, dogs), linking. Shared checks and practice stay (rice / lice, fan / pan, think / sink, vote / boat, right / light, three trees, bag, coffee). Their `why` says plainly when a pair is easy («r a l čeština rozlišuje, tohle je rozcvička»; Skarnitzl & Rumlová found the trilled r rare) and spends the words on think, three, bag and very / berry |
| be | reweight | Czech has «být» and uses it, so the copula idea is free. The Czech traps are different: the **subject pronoun** is dropped in Czech («Jsem unavený» → I'm tired, not `Am tired`); a **job needs *a*** («Jsem učitel» → I'm a teacher); **age** uses *be* with no «let» («Je mi 22» → I'm 22; `He is 22 years ✗`, EnglishCurrent); and *be* does not move to second place (`When is somebody homeless ✗`, OnTESOL) |
| it-there | reweight | «Prší», «Je pozdě», «Je zima» have no subject → It's raining, It's late, It's cold. «Na stole je kniha» → There's a book on the table. `They are 10 chairs here ✗`, `It's a lot of rain ✗` (OnTESOL), `There is comfortable ✗` (EnglishCurrent) |
| articles | reweight | No články in Czech. *a* for one of many and for jobs; «nějaký» is not *a* (`some presentation ✗`); «ten» is not always *the*. Say outright that this is a long project, and that the app re-tests it in every set |
| plurals | reweight | Light on the idea (Czech has plural). Spend the time on: **this / these**, pronouncing -s as /s z ɪz/ with a **voiced /z/** (dogs ≠ docks), *one of my colleagues*, *people* is plural, and words that are plural only in Czech («dveře» → a door, «hodinky» → a watch) |
| present | reweight | Fixed subject–verb–object order against free Czech order. Negation with *don't*, not a prefix («nemám» → I don't have). **One negative only** (§4.12). Habit = simple form even if the Czech verb is nedokonavé: `I'm usually having dinner at 7 ✗` (OnTESOL) |
| questions | reweight | Czech asks by intonation or by order with no auxiliary («Máš rád kávu?») → Do you like coffee? Inversion after question words (`How old she is? ✗`). «Jak se to jmenuje?» → **What** is it called? (Sparling). Body note: an indirect question keeps statement order (Tell me where she lives) |
| third-s | keep | Czech verbs agree in every person, so the idea is familiar; make the -s audible and voiced where it should be |
| prep | reweight | Case-plus-preposition calques: «v pondělí» → on Monday, «v pět hodin» → at five, «o víkendu» → on the weekend, «na obrázku» → in the picture, «jet autobusem» → go by bus, «čekat na» → wait for, «poslouchat hudbu» → listen to music. Sparling's three: welcome **to**, a book **by**, a sense **of** humor |
| countable | reweight | «informace», «rady», «zprávy», «peníze», «nábytek», «vlasy»: information, advice, news, money, furniture, hair are uncountable and singular (The news is…, Money is…). «hodně / mnoho» = many **and** much. *a piece of* for one item |
| object-have | reweight | «Mám auto» maps straight onto I have a car. The traps: **things are *it*** even when Czech says «on» or «ona»; **«svůj»** becomes my / your / his / her by the subject («Má rád svou práci» → He likes his job); «se / si» verbs are not *myself* (`I feel myself ✗`) |
| can-like | reweight | «umět» and «moct» are both *can*. «Líbí se mi to» → I like it (the person becomes the subject); «rád plavu» → I like swimming; «chtěl bych» → I'd like. `I very like ✗ → I really like` |
| polite | reweight | English has one *you*; politeness moves into could / would. Czech imperative + «prosím» sounds blunt in English: `Give me a coffee, please ✗ → Could I have a coffee, please?`. «Prosím» has four English forms: please, you're welcome, here you are, pardon? Titles («pane inženýre», «paní doktorko») → Mr. / Ms. + surname or the first name |
| continuous | reweight | «Český nedokonavý vid není anglický průběhový čas.» «Hraju tenis» = I play tennis (habit) or I'm playing tennis (now). No -ing on state verbs (know, like, want). Weight this at A1–A2: the sources disagree on how long it lasts (§4.4) |
| past | reweight | Czech has one past («dělal jsem», «udělal jsem»): aspect does not choose the English tense. *did* + base form in questions and negatives. Czech «jsem» is not *am*: `I am went ✗`. -ed is /t d ɪd/, and *played* ends in a voiced /d/ |
| irregular-past | keep | The three forms are a school drill; use the habit and spend the time on typed recall |
| the | reweight | Both directions: second mention and shared knowledge take *the* (`Reason why… ✗ → The reason`, Expats.cz); generic nouns, most countries and all cities take none (`the Prague ✗`, `the France ✗`) but **the Czech Republic**, the United States. «ten» ≠ always *the* |
| adjectives | reweight | `more better ✗`; «než» → than; «stejně … jako» → as … as. **so + adjective, such a + adjective + noun** (`so nice apartment ✗`, EnglishCurrent). Adjective vs noun: dangerous / danger, safe / safety. bored / boring («nudím se» / «je to nuda») |
| going-to | keep | Czech «budu dělat / udělám» and the present for plans («Zítra jedu do Brna») map onto going to and the present continuous; keep ko's contrast |
| tense | reweight | Recap table: Czech has three tenses and two aspects; English spreads the same ground over more forms. «Čtu» → I read / I'm reading; «Četl jsem» → I read / I was reading / I've read. Previews `perfect-3` |
| joining | keep | Body note: no comma before *that* and *because* (Czech always writes one before «že» and «protože»); *although* without *but* |
| numbers | reweight | Decimal comma and space grouping (3,5; 1 000 000) against 3.5 and 1,000,000. Dates: «23. 11.» against November 23 / 11/23. 24-hour time against a.m. / p.m. **«půl páté» is 4:30**, not "half five"; «čtvrt na pět» is 4:15. «miliarda» = billion; Czech «bilion» = trillion. Prices in crowns (§9) |
| smalltalk | reweight | *How are you?* is a greeting: answer Good, thanks, not a health report and not «Ale jo, jde to». Light topics in the US: weekend, food, travel, sports. Avoid salary, age, politics and complaints as openers [practitioner opinion, inference]. Deck localised (§9) |
| **czenglish** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | reweight | *was doing* is a background to another past event, not every Czech nedokonavý past: `When I was young, I was playing hockey every day ✗ → I played` (OnTESOL) |
| will | keep | «budu» + infinitive ≈ will; preview: no *will* after if / when |
| perfect | reweight | Key lesson. No Czech counterpart. Teach experience and result now (Have you ever…? I've lost my keys), then at once the fence: **a finished time takes the past simple** (`I've seen it on my birthday ✗`, Gráf). Do not present *just / ever / for* as automatic triggers; Gráf shows that habit causes errors |
| modals | reweight | **«nemusíš» = you don't have to; «nesmíš» = you mustn't.** «muset» → must / have to; «mít» («máš to udělat») → should / be supposed to; «moct» → can / may; «možná» → maybe / might [practitioner opinion, inference] |
| to-ing | reweight | «Chci, abys přišel» → I want **you to come** (not `I want that you come`); «těším se na» → look forward to + -ing; «rád» + verb → like + -ing [inference] |
| articles-2 | reweight | Generic plurals with no article: «Kočky jsou roztomilé» → Cats are cute (not `The cats`); the searched thesis summary points to over-use of *the* in generic reference (unverified, §11). Unique *the*: the sun, the internet |
| first-conditional | reweight | Czech uses the future after «jestli / když / až» → If I have time, When I arrive. `If I will have time ✗` (OnTESOL; Gráf's «jestli budu přijat» example) |
| relative | reweight | «který» → who / which / that. Czech always writes a comma before «který»; English writes none in a defining clause. **«všechno, co» → everything (that)**, never `everything what`; «způsob, jak» → a way to (EnglishCurrent). No pronoun repeated |
| phrasal | keep | Bridge [inference]: Czech changes the verb with a prefix («vy-jít», «při-jít», «ode-jít»), English with a particle (go out, come in, go away) |
| perfect-2 | reweight | «Bydlím tady pět let» → I've lived here for five years; «Učím ji tři roky» → I've been teaching her for three years (Gráf's example). «od roku 2020» → since 2020; «už» is not always *already*. How long have you…? |
| **perfect-3** | **add** (after `perfect-2`, before `narrative`) | See below |
| narrative | reweight | Czech tells a whole story in one past tense. English steps back with the past perfect when the order matters: Gráf found it missing 24 times in 50 advanced speakers |
| conditionals | reweight | Czech puts «by» in both halves («Kdybych věděl, řekl bych»): English keeps *would* out of the if-clause (If I knew, I would say). Conditional errors are the second-largest verb group in Gráf (9.6%) |
| passive | reweight | Czech prefers «se» and "they" («Tady se mluví anglicky», «Postavili to v roce 1990») → English is spoken here, It was built in 1990. «Narodil jsem se» → I was born. Result now → has been (`it was stolen ✗ → it has been stolen`, Gráf) |
| reported | reweight | Czech keeps the original tense («Řekl, že je unavený») → He said he was tired («souslednost časů»). say / tell (`I told I will be back ✗`, EnglishCurrent). Indirect questions keep statement order and lose *do*: half of 16 future teachers erred (Tauchmanová 2021) |
| email | reweight | «Dobrý den,» / «Vážený pane Nováku,» → Hello, / Dear Mr. Novak, (no vocative, no academic titles: «Ing.», «Mgr.» are not used in English). «S pozdravem» → Best regards. «V příloze zasílám» → I'm attaching / Please find attached. First names are normal in US work email |
| idioms | keep | Note Czech calques that do not exist in English; give the English idiom, not a word-for-word version [native check on the Czech equivalents chosen] |

**Totals:** 40 shared lessons (24 A1 with `alphabet`, 9 A2, 7 B1): **7 keep** (third-s, irregular-past, going-to, joining, will, phrasal, idioms) and **33 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions; A1 grows to 25 and B1 to 8. Every verdict is [practitioner opinion] grounded in §4; only the Present Perfect, past perfect, conditional, aspect (Gráf), indirect questions (Tauchmanová) and pronunciation (Skarnitzl & Rumlová) have counted Czech data behind them.

**Additions:**
- **`czenglish`** — title «Czenglish: falešní přátelé a čechismy», after `smalltalk` (end of A1), deck 22 «Falešní přátelé a čechismy» (§9).
  - *Content:*
    1. False friends: actual / «aktuální» → current; eventually / «eventuálně» → possibly; sympathetic / «sympatický» → nice; control / «kontrolovat» → check; concrete / «konkrétní» → specific; gymnasium / «gymnázium» → high school; novel / «novela»; billion / «bilion».
    2. One Czech word, two English words: «učit (se)» → teach / learn; «říct» → say / tell; «půjčit / půjčit si» → lend / borrow [native check]; «dělat» → do / make; «zábavný» → fun / funny.
    3. Calques: `How is it called? → What is it called?`, `Can I have a question? → Can I ask a question?`, `He is 22 years → He's 22`, `everything what → everything that`, `basic school → elementary school`, `I'm from Czech → I'm from the Czech Republic`.
  - *Practice that meets §7* (noun-phrase items with an article or number twin in `x`): `I'm from the Czech Republic` (x: `a`, `in`), `Can I ask a question?` (x: `have`, `the`), `I went to the doctor for a check-up` (x: `control`, `the`), `She gave me some advice` (x: `advices`, `an`), `He goes to high school` (x: `gymnasium`, `a`). Their `why` names člen / množné číslo / nepočitatelné alongside the vocabulary point.
  - *Reason:* §4.9. Lexical transfer is the Czech zone with a named tradition (Sparling's *English or Czenglish?*, Hladký's dictionary) and it has no ko-en equivalent. It mirrors zh `chinglish`, id `indo-english`, ru `runglish`, ja `katakana-english` and es `false-friends`.
- **`perfect-3`** — title «Předpřítomný, nebo minulý čas? Jeden český čas, dva anglické», after `perfect-2` (B1), deck 2 «Představování» (as `perfect-2`) or deck 10.
  - *Content:* three Czech-to-English decisions, each with its fence.
    1. **Czech present + duration → Present Perfect:** «Bydlím tady pět let», «Učím ji tři roky», «Je to otevřené jen pár let» → I've lived…, I've been teaching…, It's been open…
    2. **Czech past + result now → Present Perfect:** «Ukradli mi kolo» (and it is still gone) → My bike has been stolen; «Hodně jsem se za poslední rok změnil» → I've changed a lot in the past year.
    3. **Czech past + a finished time or a story → Past Simple, whatever the "trigger" word:** `I've seen it on my birthday ✗ → I saw it`; `I've visited Lisbon this summer ✗ (summer is over) → I visited`; `It's just been wonderful ✗ (in a past story) → It was just wonderful`. *ever, just, for, see, visit, meet* do not choose the tense; the time frame does.
    4. One line on American usage: *I just ate* is normal in the US (Gráf notes it); both forms are accepted where the shared items allow.
  - *Practice that meets §7:* tense items whose noun phrase also carries an article or number twin, so that half the order and type items are honest double hinges: `I've lived here for five years` (x: `year`, `live`), `I saw a great movie yesterday` (x: `the`, `seen`), `I've lost my keys` (x: `key`, `lost`), `She has been a teacher since 2020` (x: `the`, `is`), `We visited two museums last summer` (x: `museum`, `have`). The `why` names both: «Trvá to dodnes, proto předpřítomný čas; po „five“ je množné číslo.»
  - *English side:* **new** (no existing course has this set). It needs the same review as any new English content, and its mc and fill items carry the tense point alone.
  - *Reason:* §4.1. It is the best-measured Czech error (73% of tense-choice errors among C1–C2 speakers; 34 of 50 speakers), it comes in both directions, and Gráf traces the over-use to how the tense is taught, which a lesson built on Czech sentences can correct. Articles already have three shared lessons and the standing rule in every set.
  - *Fallback if the lead wants no new English:* add **`articles-3`** instead (after `passive`, English side copied from ko's own `articles-3`, as zh and ru did), and move the content of `perfect-3` into the lesson bodies of `perfect-2` and `narrative`. Then `lessonOrder.after` becomes `{"czenglish": "smalltalk", "articles-3": "passive"}`.

**Considered, not added:**
- A word-order lesson (questions and indirect questions): covered by reweights in `questions`, `relative` and `reported`; the evidence is 16 students.
- A pronunciation lesson on stress and schwa: `pron` is reweighted to open with them, and deck 18 gets the cs pairs.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion]:

| ko-en | cs-en |
|---|---|
| Minji (and other Korean names) | **Lenka** (main), **Martin**; alternates Anna, Monika, Nina, Adam, David, Marek, Filip, Viktor. English-speaking characters keep English names |
| Seoul | **Prague** (never *Praha* in an English string) |
| Busan | **Brno**; alternates Ostrava, Pilsen (the English name of Plzeň) |
| Jeju / beach trips | the mountains, a cottage weekend; abroad: Croatia, Italy |
| Seoul National University | "a university in Prague" / "in Brno", generic; no real university name |
| kimchi, bibimbap | **goulash, dumplings, schnitzel, fried cheese, potato pancakes, potato salad**; drinks: coffee, tea, lemonade, beer where a bar scene needs it |
| soju | beer or wine in a restaurant scene, soft drinks elsewhere; no drinking jokes |
| K-pop, K-drama | genres, not artists: a series, a concert, ice hockey, football (*soccer* in US English, said once) |
| Gangnam | downtown, the city center, the Old Town |
| Chuseok, Korean holidays | **Christmas** (Christmas Eve is the main day), Easter, New Year's Eve, name days, summer at the cottage. No political or state holidays |
| 존댓말 / 반말 comparisons | ty / vy comparisons (`polite` only) |
| won (₩) | **crowns**: write `250 crowns` in English strings; never `Kč` or `CZK` in English (TTS) |
| Korea / Korean (the learner's own country and language) | **the Czech Republic** / **Czech** (*I'm from the Czech Republic.*, *Do you speak Czech?*). *Czechia* is mentioned once in a note as the short name |

**Name and TTS rules** [practitioner opinion; none tested on the engine's voice, §11]:
- **Only names without diacritics that an American voice reads close to the Czech.** Lenka, Martin, Anna, Monika, Nina, Adam, David, Marek, Filip and Viktor are expected to be safe.
- **Avoid:** Jan and Jana (read as English *Jan*, /dʒ/), Jiří, Jakub, Petr, Tomáš, Lukáš, Ondřej, Kateřina, Tereza, Lucie, Zdeněk, and anything with ř, ch, j or a háček.
- **English strings carry no Czech diacritics:** *Novak*, *Pilsen*, not *Novák*, *Plzeň*. A learner typing an English answer should not need the Czech keyboard, and the voice mishandles the marks.
- **Surnames** only in `email` and work dialogues: Mr. Novak, Ms. Novakova. Say once that English does not change the surname for women and that many Czech women keep «-ová» abroad anyway [native check on how to phrase this].
- **Places:** Prague, Brno, Ostrava, Pilsen only.
- Scenes abroad (airport, hotel, office) keep the US setting of the shared English strings.

**Crowns and numbers** (numbers lesson, shopping deck):
- Everyday prices are in tens and hundreds: a coffee 65 crowns, a lunch 190 crowns, a monthly pass 550 crowns [illustrative, not sourced].
- Czech writes 1 250,50 Kč; English writes 1,250.50. «miliarda» = billion; Czech «bilion» = trillion.
- The reverse course writes koruna prices as words (en-cs.md §1). Here the unit is the English word *crowns*; *koruna* is given once in a note as the official name.
- English strings never use Czech separators, «Kč», or «23. 11.».

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (*Seoul, Busan, kimchi, K-pop*). **Leave the English unchanged** (parity) and translate the Czech side literally («Soul», «Pusan», «kimči», «K-pop»); it reads as a learner talking about Korea. Do not file per-item deviations; if the lead wants them localised later, use one bulk deviation with the reason "localisation" (same rule as zh.md, id.md, ru.md).

**Deck localisation vs parity:** any card whose English changes (*My name is Minji.* → *My name is Lenka.*, *I live in Seoul.* → *I live in Prague.*, *Korea* → *the Czech Republic*) needs a `decks` entry in `deviations.json`: one entry per deck, naming the cards and the reason «localisation per profile cs.md §9». Appended cs-only cards go in the same entry. **Reuse zh and ru:** they localised the same card positions, so their deviation entries show exactly which positions change. Lesson bodies, DIALOG and EXAMPLES are not parity-checked and are localised freely.

**Meanings that equal the English (`nativeScript: null`).** A card meaning, `{{ex}}` meaning, gloss or `p` identical to its English counterpart fails (case- and punctuation-insensitive; diacritics count as a difference, so «rádio», «problém», «banán», «tenis» are safe).
- Czech has many unchanged loanwords. Use the Czech word where one exists, or a fuller gloss:
  - *hotel* → «hotel (ubytování)»; *menu* → «jídelní lístek»; *taxi* → «taxík»; *film* → «film (v kině)»; *video* → «video (nahrávka)»; *internet* → «internet (síť)»; *bar* → «bar (podnik)»; *park* → «park (ve městě)»; *test* → «test (zkouška)»; *student* → «student / studentka»; *sport* → «sport (pohyb)»; *pizza* → «pizza (jídlo)»; *hobby* → «koníček»; *laptop* → «notebook»; *e-mail* → «e-mail» already differs from *email* but equals *e-mail*: write «e-mailová zpráva»; *OK* → «dobře»; *super* → «skvělé».
- Interjections and names: *Hi!* → «Ahoj!», *Bye!* → «Čau! / Ahoj!». A proper noun alone needs a gloss («Brno (město)») or should not be a card.

**False friends and calques** (for the `czenglish` lesson and deck 22; at least 20 cards; each `note` says «falešný přítel» or «čechismus» and gives the Czech source). "ÚJČ" = the Czech meaning was read in the dictionaries shown by the Internetová jazyková příručka.

| Czech use | Correct English | Source |
|---|---|---|
| «aktuální» → *actual* ✗ | current, topical (*actual* = skutečný) | Sparling, Radio Prague; Czech meaning en-cs.md (ÚJČ); English meaning Cambridge blog |
| «eventuálně» → *eventually* ✗ | possibly, or (*eventually* = nakonec) | ÚJČ: «třeba, možná, nebo, popřípadě»; Cambridge blog |
| «sympatický» → *sympathetic* ✗ | nice, likeable (*sympathetic* = soucitný) | ÚJČ: «budící sympatie»; Cambridge blog; Grip on English |
| «kontrola», «kontrolovat» → *control* ✗ | a check-up, to check | Expats.cz; EnglishCurrent |
| «konkrétní» → *concrete* ✗ | specific | Expats.cz |
| «gymnázium» → *gymnasium* ✗ | high school (*gymnasium* = tělocvična) | ÚJČ: «střední škola…»; Grip on English; EnglishCurrent |
| «novela» → *novel* ✗ | a novella (*novel* = román) | Grip on English |
| «bilion» → *billion* ✗ | trillion (*billion* = miliarda) | Grip on English (its wording is muddled); EnglishCurrent |
| «notebook» (počítač) | a laptop (*notebook* = sešit, blok) | Grip on English |
| «akorát» → *accurate* ✗ | just right, just enough | Expats.cz |
| «puntičkářský» → *punctual* ✗ | meticulous (*punctual* = dochvilný) | EnglishCurrent |
| «dres» → *dress* ✗ | a jersey, a uniform (*dress* = šaty) | EnglishCurrent |
| «základní škola» → *basic school* ✗ | elementary school | Wikipedia, Czenglish |
| «Jak se to jmenuje?» → *How is it called?* ✗ | What is it called? | Sparling, Radio Prague |
| «Můžu mít otázku?» → *Can I have a question?* ✗ | Can I ask a question? | EnglishCurrent |
| «naučit někoho» → *learn him* ✗ | teach him | EnglishCurrent |
| «říct» → *I told that…* ✗ | I said that… / I told her… | EnglishCurrent |
| «Je mu 22 let» → *He is 22 years* ✗ | He is 22 (years old) | EnglishCurrent |
| «všechno, co» → *everything what* ✗ | everything (that) | EnglishCurrent |
| «zábavný» → *funny* ✗ (for enjoyable) | fun (*funny* = směšný, vtipný) | EnglishCurrent |
| «Vítejte v…» → *Welcome in* ✗ | Welcome to | Sparling, Radio Prague |
| «kniha od» → *a book from* ✗ | a book by | Sparling, Radio Prague |
| «počítat s někým» → *count with* ✗ | count on | Expats.cz |
| «fabrika» → *fabric* ✗ | factory (*fabric* = látka) | English meaning Cambridge blog; the Czech word is from memory [native check] |
| «šéf» → *chef* ✗; «brigáda» → *brigade* ✗; «ambulance» (ordinace) → *ambulance* ✗; «evidence» (záznamy) → *evidence* ✗; «recept» → *recipe* / *prescription*; «host» → *host* ✗ (guest) | boss; a summer job; an outpatient clinic (*ambulance* = sanitka); records (*evidence* = důkaz); recipe for cooking, prescription from a doctor; guest | **No page opened** except «host» (en-cs.md, ÚJČ). From memory; every one needs a [native check] and a dictionary check before it becomes a card |

**Deck names (FINAL).** Sentence case; «a» and commas as separators; brackets for the travel deck; a digit after a space («Základní fráze 1»). No one-letter prepositions, so no no-break space is needed inside a key; the «a» in a name is followed by an ordinary space on purpose (§2). Rows 1–20 replace the Korean course's 20 decks in the same order; row 21 is the shared alphabet deck; row 22 is the cs-only deck, appended last in `decks.js`. All names [native check].

| # | Czech name | linked lesson or notes |
|---|---|---|
| 1 | **Pozdravy** | greetings; no lesson links in ko-en |
| 2 | **Představování** | be, articles, present, third-s, object-have, perfect-2; also `perfect-3` |
| 3 | **Základní fráze 1** | polite |
| 4 | **Základní fráze 2** | questions |
| 5 | **Cesta a doprava** | the |
| 6 | **Restaurace** | countable |
| 7 | **Kavárna a obchod** | no lesson links (ko: café and convenience store) |
| 8 | **Nakupování a placení** | plurals, adjectives, relative; prices in crowns for home scenes |
| 9 | **Čísla, čas a datum** | prep, numbers; decimal comma vs point, «půl páté», day-month vs month-day |
| 10 | **Nezávazná konverzace** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing |
| 11 | **Pocity a reakce** | joining, past-continuous, conditionals |
| 12 | **Komplimenty a sympatie** | no lesson links |
| 13 | **Práce a e-maily** | first-conditional, passive, email |
| 14 | **Telefon a chatové zkratky** | reported |
| 15 | **Cestování (letiště a hotel)** | perfect, articles-2 |
| 16 | **Lékař a nouzové situace** | modals |
| 17 | **Frázová slovesa** | phrasal |
| 18 | **Pozor na výslovnost** | pron; append cs pairs (below) |
| 19 | **Anglické idiomy** | idioms |
| 20 | **Filmy, seriály a slang** | narrative |
| 21 | **Abeceda** | alphabet (shared deck, 26 cards) |
| 22 | **Falešní přátelé a čechismy** | czenglish (cs-only, ≥ 20 cards; needs a `decks` deviation) |

**Deck content changes** [practitioner opinion unless noted]:
- **Add deck 22** from the table above.
- **«Pozor na výslovnost»:** keep the shared pairs; append cs cards (not by changing shared targets): hotel, event, development, comfortable, vegetable (stress and syllables); sing / singing (ŋ); wine / vine, west / vest; bad / bed, bad / bat, bag / back, dog / dock; ship / sheep; this / these. ru already has transcriptions for most (§6).
- **«Práce a e-maily»:** meeting, deadline, schedule, invoice, remote work, colleague; replace «Dobrý den» / «S pozdravem» habits with Hi / Dear and Best regards; *home office* is Czech English for *working from home* [native check; no source opened].
- **«Cestování»:** departures from Prague; tipping (customary in the US, modest at home).
- **«Telefon a chatové zkratky»:** keep the English (LOL, BTW); explain with Czech chat habits («jj», «nz», «mmt») [native check].
- **«Čísla, čas a datum»:** a card for 4:30 with the note «půl páté, ne „half five“».

## 10. Interface wording notes

These rules rest on the two style guides and the ÚJČ pages opened (§2), one Czech learning site, and local `Intl` checks (Node, ICU 78.2). The style guides are written for vykání; everything specific to ty is this profile's adaptation [native check].

**Register:** ty, lower case (§2). Impersonal statements for states and results; ty for instructions and encouragement; never «vy».
- Toasts and empty states: «Uloženo», «Na dnešek máš hotovo!», «Dny v řadě: {1}. Jen tak dál!»
- Errors, plain and blame-free: «Synchronizace se nepovedla. Zkus to znovu.»

**Buttons, menu items, chips: the infinitive.** Sentence case, no full stop, no «prosím»: «Začít», «Pokračovat», «Zkontrolovat», «Odeslat», «Uložit», «Zrušit», «Zpět», «Přeskočit», «Znovu», «Další», «Zavřít».
- *Why the infinitive and not the ty imperative («Pokračuj»):* Mozilla's Czech guide says "In short actions and button labels use infinitive constructions" and "Avoid using imperative!"; Umíme anglicky labels its buttons «Odeslat», «Zavřít» [curriculum convention]. The infinitive is also free of person, number and gender, so a button never has to agree with anything.
- **Practice instructions and prompts: the ty imperative**, one verb per item type: «Vyber správnou odpověď», «Seřaď slova», «Doplň chybějící slovo», «Napiš anglicky». An instruction talks to the learner; a button names an action.
- Ongoing states: «Synchronizace…», «Načítání…» (nouns, not «Synchronizuji…»).

**Gender-neutral messages (binding).** With ty, the past tense, the conditional and most adjectives show the learner's gender. The interface never guesses and never writes «udělal/a» or «udělal(a)».

| Do not write | Write | Device |
|---|---|---|
| «Odpověděl jsi správně.» | «Správně!» / «Správná odpověď.» | drop the verb |
| «Dokončil jsi lekci.» | «Lekce je hotová.» / «Máš hotovo!» | make the thing the subject; present tense |
| «Naučil ses 5 kartiček.» | «Naučeno: 5» | impersonal label + number |
| «Jsi si jistý?» | «Opravdu smazat?» | infinitive question |
| «Jsi připravený?» | «Jdeme na to?» / «Můžeme začít?» | first-person plural |
| «Byl jsi tu naposledy včera.» | «Poslední návštěva: včera» | noun label |
| «Vynechal jsi den.» | «Včera bez tréninku.» | verbless |
| «Rád tě zase vidím.» | «Vítej zpět!» | imperative |
| «Kdybys chtěl…» / «Chtěl bys…?» | «Chceš…?» | present, not conditional |
| «sám» / «sama» | «bez nápovědy» | rephrase |

- Safe by nature: the present tense («máš», «zvládáš», «umíš»), the imperative («zkus», «vyber», «pokračuj»), the future («zvládneš to»), neuter impersonals («uloženo», «hotovo», «odesláno»), and participles that agree with a **thing** («Lekce je dokončena», «Balíček byl přidán»).
- The app as «my» in the past is fine: «Poslali jsme ti e-mail.»
- Microsoft's guide makes the same moves for Czech: present tense instead of a gendered past («%1 vás zve na párty», not «pozval(a)»), and rephrasing («Ano, jsou to moje změny.»).

**Tab bar (7 tabs share 390px, each ≤ 8 characters).** The brief lists Today, Practice, Review, Lessons, Drills, Progress, Feedback; the bottom nav in keys.json uses **Read** where the brief says Drills. Both are given.

| English | Czech label | Chars | Fallback |
|---|---|---|---|
| Today | Dnes | 4 | — |
| Practice | Cvičení | 7 | — |
| Review | Opakovat | **8** | Opakuj (6) |
| Lessons | Lekce | 5 | — |
| Read (nav) | Čtení | 5 | — |
| Drills (label) | Trénink | 7 | Dril (4) |
| Progress | Pokrok | 6 | — |
| Feedback | Názor | 5 | Ohlasy (6) |

- «Opakovat» is the infinitive, as on buttons; the noun «opakování» (9) does not fit. The lead must check it in a real layout (id's 8-letter «Kemajuan» did not fit).
- «Názor» for Feedback is a proposal; the page title is «Napiš nám svůj názor». «Zpětná vazba» is the exact term and is too long for a tab [native check].

**Counts: one translation per pattern, so no plural forms in the template** (PHASE2-BRIEF, last section).
- Czech needs three forms: 1 kartička / 2–4 kartičky / 5+ kartiček; decimals take a fourth (1,5 kartičky). CLDR for `cs`: `one` 1; `few` 2–4; `many` decimals; `other` 0, 5–20, 21, 22… (checked locally with `Intl.PluralRules('cs')`). An adjective or verb next to the number must agree too («1 nová kartička», «5 nových kartiček», «zbývá 1», «zbývají 3»).
- **The number-neutral shape is label, colon, number.** Five devices only:
  1. **Plural noun as a label + colon:** «Kartičky: {1}», «Lekce: {1}», «Balíčky: {1}», «Body: {1}». It is a table heading, not a phrase, so it reads correctly at 1, 2, 5 and 21.
  2. **«Počet» + genitive plural + colon** where a sentence is needed: «Počet importovaných kartiček: {1}.», «Počet dní do dalšího opakování: {1}.»
  3. **Verbless or impersonal label + colon:** «K opakování: {1}», «Zbývá: {1}», «Naučeno: {1}», «Nové: {1}», «Vybráno: {1}», «Chyby: {1}».
  4. **A unit that does not inflect:** «{1} min», «{1} s», «{1} XP», «{1} %», «{1} kB», «×{1}» (no-break space before the unit).
  5. **Position and "N of M":** «Kartička {1} z {2}», «Týden {1} z {2}», «Kolo {1} z {2}», «Úroveň {1}», «Lekce {1}» (no-break space after «z»).
- **Never** a noun right after the slot («{1} kartiček», «{1} dní»), never an agreeing word next to it («{1} nových», «Zbývají {1}»), never a compound («{1}denní série»).
- keys.json has separate singular and plural English templates (`{n} day` / `{n} days`, `{n} card` / `{n} cards`). **Give both the identical neutral wording.**
- Writers must render each count string at **1, 2, 5 and 21** before submitting.

| English in keys.json | Czech | Sample render |
|---|---|---|
| {n} card(s) | Kartičky: {1} | «Kartičky: 1», «Kartičky: 21» |
| {n} cards due / {n} due | K opakování: {1} | «K opakování: 3» |
| {n} decks · {n} cards | Balíčky: {1} · kartičky: {2} | «Balíčky: 4 · kartičky: 260» |
| {n} day(s) | Dny: {1}; streak: Dny v řadě: {1} | «Dny v řadě: 1» |
| · week {n} of {n} | · Týden {1} z {2} | |
| {n} points / pts | Body: {1} | «Body: 120» |
| {n} XP total | Celkem: {1} XP | |
| {n} XP to Level {n} | Do úrovně {2}: {1} XP | |
| {n} left | Zbývá: {1} | «Zbývá: 7» |
| {n}/{n} learned | Naučeno: {1}/{2} | |
| {n} cards learned | Naučené kartičky: {1} | |
| {n} rounds left | Zbývající kola: {1} | |
| {n} decks selected | Vybrané balíčky: {1} | |
| {n}× missed | Chyby: {1} | |
| {n}% · {n} q | {1} % · otázky: {2} | |
| {n} quiz(zes) · last {n}% | Kvízy: {1} · poslední {2} % | |
| {n} answered · best combo ×{n} | Odpovědi: {1} · nejdelší série ×{2} | |
| {n} rows · {n} new | Řádky: {1} · nové: {2} | |
| Imported {n} cards. | Počet importovaných kartiček: {1}. | |
| Last {n} reviews · {n}% correct | Poslední opakování: {1} · správně: {2} % | label reads as "last reviews" at any number |
| {n}s / Resend email ({n}s) | {1} s / Odeslat e-mail znovu ({1} s) | |
| Next ones come due in {n} day(s). | Počet dní do dalšího opakování: {1}. | |
| 🛡️ … {n} left. | 🛡️ … Zbývá: {1}. | |

**Language-name slots.** The engine fills `{x}` with the dictionary form from `Intl.DisplayNames('cs')` («angličtina», checked locally) and capitalises the first letter (`langName` in `src/app.html`), so the slot arrives as «Angličtina», nominative. Czech declines it («v angličtině», «angličtinu», «s angličtinou»), so:
- Put the slot **at the start of the sentence** or **after a colon as a value**. Both take the nominative and a capital.
- **Never** after a preposition or as an object («v {1}», «umíš {1}», «pro {1}»), never mid-sentence in brackets.
- «anglicky» (the adverb) is not available from the slot; reword.

| keys.json template | Czech (renders as) |
|---|---|
| Change language · {x} | `Změnit jazyk · {1}` (→ Změnit jazyk · Angličtina) |
| Now learning {x} · progress saved per course | `Kurz: {1} · pokrok se ukládá pro každý kurz zvlášť` |
| How much {x} do you know? | `{1}: jak jsi na tom?` |
| What do you want {x} for? | `{1}: k čemu ji potřebuješ?` (feminine «ji» is right for every Czech language name in -ina; [native check] if other targets are ever shown) |
| type it in {x} | `Jazyk odpovědi: {1}` |
| Type in {x}… | `Jazyk odpovědi: {1}…` |
| Type the {x}, or tap Check again to give up. | `Jazyk odpovědi: {1}. Napiš odpověď, nebo znovu klepni na „Zkontrolovat“ a vzdej to.` |
| No {x} keyboard? Use tiles | `{1}: chybí ti klávesnice? Použij dlaždice` |
| Learn {x}, 5 minutes a day | `{1} – 5 minut denně` |
| Learning {x} 5 minutes a day with Lang App {x} | `{1} – 5 minut denně s Lang App {2}` |

`profile.json` `name.cs` = **«Angličtina»** (capitalised): the course list shows the pack's name standalone as a row label, as in ru.

**UI glossary (use exactly)** [native check]:

| English UI term | Czech |
|---|---|
| lesson / lessons tab | lekce / Lekce |
| practice (set) | cvičení («Cvičení k lekci») |
| review (SRS) | opakování; tab «Opakovat»; button «Opakovat» |
| deck | balíček |
| card / flashcard | kartička |
| streak | série; in counts «Dny v řadě: {1}» |
| hint | nápověda |
| check (3-question lesson quiz) | kvíz; button «Zkontrolovat» |
| correct / incorrect (feedback) | «Správně!» / «Tentokrát ne» (softer than «Špatně») |
| answer / explanation (`why`) | odpověď / vysvětlení |
| try again | «Zkusit znovu» |
| multiple choice | výběr z možností (Umíme anglicky's term) |
| word tiles (order) | «Seřaď slova»; tiles = dlaždice |
| gap-fill | «Doplň chybějící slovo» (label «Doplňování») |
| typed sentence | «Napiš anglicky» (label «Psaní») |
| drills | trénink |
| session | lekce is taken, so «trénink» / «Začít» |
| level / XP | úroveň / XP |
| pronunciation toggle | «Zobrazovat výslovnost» (replaces "romanization") |
| listen / play | «Přehrát» |
| due today | k opakování dnes |
| progress | pokrok |
| feedback | názor; page «Napiš nám svůj názor» |
| settings / sign in / sign out / sync | nastavení / přihlásit se / odhlásit se / synchronizace |

**Numbers, dates and time** (`Intl` with `cs-CZ`, checked locally; never hand-format):
- Numbers: «1 234 567,5» — no-break space as the group separator, also at four digits («1 234»); decimal comma.
- Percent: «85 %» with a no-break space, as `Intl` prints it and as the ÚJČ prescribes. In hand-written templates write «{1} %» with U+00A0.
- Currency: «250,00 Kč» from `Intl` in the interface; never in English course strings (§9).
- Dates: long «23. listopadu 2026», numeric «23. 11. 2026» with spaces after the dots, as the ÚJČ prescribes ([Kalendářní datum](https://prirucka.ujc.cas.cz/?id=810)); use `{day:'numeric', month:'numeric', year:'numeric'}`, because `dateStyle:'short'` prints «23.11.26». Weekday and month names are lower case («pondělí 23. listopadu»).
- Time: 24-hour «21:05», as `Intl` prints it. Mozilla's guide shows a point («7.30»); the ÚJČ page opened does not cover time. Keep `Intl`'s colon [native check].

**Engine notes (not content):**
- **Fonts.** DM Sans covers Latin Extended (per ru.md), which should include ě š č ř ž ů ď ť ň; Noto Sans KR (`--display`) may not, which would mix two fonts inside one Czech word. Neither was checked on a device. If headings show mixed glyphs, add `html[lang=cs]{--display:var(--body)}` as th and hi do, and give IPA the mono stack that `de` and `ru` use.
- **No-break spaces.** A render-time pass for `lang="cs"` that turns the space after a one-letter word (k, s, v, z, o, u, a, i) into U+00A0 would enforce the Czech rule in long lesson prose without asking writers to type it.
- Czech runs slightly longer than English; the i18n validator's 1.6× / 14-character warning will fire on some buttons. Check «Zkontrolovat» (12) and «Zobrazovat výslovnost» (a settings row).

**Feedback marks:** ✓ «Správně!» / ✗ «Tentokrát ne». Always pair a mark with text.

## 11. Gaps and unverified claims

- **Missing input:** `reports/Grammar learning order research.md` does not exist in this worktree. It was skipped; the evidence labels follow the finished profiles instead. `docs/profiles/OTHERS.md` has no Czech section.
- **Sources that could not be opened** (none is in Sources; anything said about them above is marked unverified):
  - Two Charles University theses on article errors in LINDSEI_CZ (dspace.cuni.cz: timeouts and HTTP 429). Only a search-engine summary was seen (265 article errors in 50 interviews; omission dominant; non-generic indefinite reference worst; *the* over-used generically; a 2024 thesis on 25 Czech teachers with 100 errors). **Article errors therefore have no opened counted Czech source.**
  - Gráf & Huang 2022 on persistent errors of Czech and Taiwanese speakers at B2 and C1 (HTTP 403 / 405).
  - Dušková 1969, *On sources of errors in foreign language learning* (IRAL): the classic Czech error analysis; only its citation was seen.
  - Sparling, *English or Czenglish?* and Hladký, *Zrádná slova v angličtině*: not opened; Sparling is quoted through a 2002 radio interview. The Masaryk University "Czech – Czenglish – English" lists returned nothing readable.
  - Theses on Czech word-order and tense errors (theses.cz) and a Czech thesis on false friends (HTTP 503).
  - Murakami & Alexopoulou 2016 was not re-opened; it is cited through ru.md and has no Czech group as far as ru.md reports.
- **Evidence is skewed to the top and to speech.** Gráf's speakers are C1–C2 philology students; Skarnitzl & Rumlová's are ten women chosen for a strong accent reading news texts. Nothing counted was found for beginners, for writing, or for adults outside university. The paper counts in Gráf do not fully reconcile (173 vs 130 tense errors).
- **Disagreement:** teachers call the over-used continuous a top, persistent Czech error; Gráf finds aspect errors rare at C1 (§4.4).
- **No opened source for:** double negatives, *I very like*, dropped subject pronouns, *he / she* for things, «svůj», reflexives, comma before *that*, capital letters, *informations / advices*, «nemusíš / nesmíš», *I want that you come*, the «by … by» conditional, final *-ed* said as a syllable, the unsourced false friends in the last table row, and Czech smalltalk habits. All are [practitioner opinion, inference].
- **Register:** ty is the brief's decision. Both style guides and both Czech learning sites that were opened use vykání; no Czech app using ty was opened. The gender-neutral constructions in §10 are this profile's own and need a native review.
- **Czech wording:** every Czech sentence, term, deck name, tab label and glossary entry here was written without a native reviewer. Highest-risk items: the tab labels «Opakovat» and «Názor», «Tentokrát ne», «kartička» vs «karta», «balíček», «Nezávazná konverzace» for small talk, «Kavárna a obchod», the school names of the tenses, and the three sample sentences in §2.
- **Pronunciation aid:**
  - No study compares IPA, respelling and no aid for Czech learners.
  - That Czech schoolbooks and dictionaries print IPA, and that some use š / č / ž in brackets, is from memory, not from an opened page. One site's index page (Help for English) shows IPA between slashes.
  - The en-US voice's reading of *Lenka, Marek, Filip, Viktor, Monika, Brno, Ostrava, Pilsen, Prague, Novak, Novakova* was not tested; the transcriptions /ˈleŋkə/ and /ˈprɑːg/ are this profile's.
  - Czech /h/ as voiced and the note against «ch» are general phonetics, not from an opened page.
- **Learner profile:** EF EPI is a self-selected online test; the 2025 sheet gives rank 23 and 582, while search summaries showed other figures for other editions. The CERMAT catalogue opened is the 2017/18 edition; the current one was not checked. School-textbook brands, Cambridge exam popularity and the Russian-at-school generation are general knowledge.
- **Typography:** the time format (colon vs point), lower-case language names and the en dash rule were not on an opened ÚJČ page. No-break spaces after one-letter words are required by the ÚJČ for typesetting; whether the engine or the writers supply them is the lead's call.
- **Interface:** the count labels were reasoned, not rendered in the app; nominative-plural labels («Kartičky: 1») are grammatical as headings but a native speaker may prefer «Počet kartiček: 1» everywhere. The 390px tab widths come from other profiles' measurements, not a fresh render. Font coverage was not checked.
- **`perfect-3` needs new English content**, the only place this profile asks for any. If that is unwelcome, use the `articles-3` fallback (§8).
- **`cueTest` coverage:** 0 false hits on 2,794 strings of the ko-en pack (one *café* sentence aside) and 14 sample frames. Writers' real prompts may still contain neither a diacritic nor a listed word; the DSL then appends the blank cue silently, and review must catch it.
- **Not researched:** Slovak speakers (who could use this course with small wording changes), Moravian and Silesian differences in pronunciation transfer, Czech learners' listening errors, and any app or self-study research with Czech adults.

## Sources

Pages opened for this profile.

- [Gráf 2017, Verb Errors in Advanced Spoken English (AUC Philologica 1/2017, full text)](https://karolinum.cz/data/clanek/3828/Phil_1_2017_08_Graf.pdf) and its [journal page](https://karolinum.cz/en/journal/auc-philologica/year-2017/issue-1/article-3828)
- [Skarnitzl & Rumlová 2019, Phonetic aspects of strongly-accented Czech speakers of English (AUC Philologica 2/2019, full text)](https://karolinum.cz/data/clanek/7247/Phil_2019_2_0109.pdf)
- [Skarnitzl & Šturm 2014, Assimilation of Voicing in Czech Speakers of English (Research in Language, abstract page)](https://czasopisma.uni.lodz.pl/research/article/view/6784)
- [Tauchmanová 2021, The Teaching and Learning of English Indirect Questions: Perceptions of Czech Native Speakers (ICEEPSY)](https://europeanproceedings.com/article/10.15405/epiceepsy.21101.15)
- [EF EPI 2025 fact sheet, Czech Republic](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-czech-republic-english.pdf)
- [Eurydice, Czechia: Vyučování a učení v základním vzdělávání](https://eurydice.eacea.ec.europa.eu/cs/eurypedia/czechia/vyucovani-uceni-v-zakladnim-vzdelavani)
- [CERMAT, Katalog požadavků zkoušek společné části maturitní zkoušky, anglický jazyk (2017/18 edition)](https://maturita.cermat.gov.cz/files/files/AJ_Katalog_pozadavku_MZ-17-18_opr_2.pdf)
- [Wikipedia, Czenglish](https://en.wikipedia.org/wiki/Czenglish)
- [Horáková 2002, English or "Czenglish"? (Radio Prague International, interview with Don Sparling)](https://english.radio.cz/english-or-czenglish-8058422)
- [Barton, Common English mistakes made by Czech people (EnglishCurrent)](https://www.englishcurrent.com/grammar/common-english-mistakes-czech-people/)
- [Expats.cz 2018, Teacher Feature: What Is the Biggest Mistake Your Czech Students Make?](https://www.expats.cz/czech-news/article/teacher-feature-biggest-mistake-czech-students-make)
- [Silva 2022, Teaching grammar to Czechs: language difficulties (OnTESOL)](https://ontesol.com/blog/teaching-english-abroad/czech-republic/teaching-grammar-to-czechs-language-difficulties/)
- [Verbling 2020, From Slavic languages to English: the common difficulties](https://www.verbling.com/articles/post/from-slavic-languages-to-english-the-com)
- [Walter 2019, Library or bookshop? Fabric or factory? Avoiding common false friends (Cambridge Dictionary blog)](https://dictionaryblog.cambridge.org/2019/02/06/library-or-bookshop-fabric-or-factory-avoiding-common-false-friends/)
- [Get a Grip on English 2013, False friends](https://griponenglish.blogspot.com/2013/11/false-friends.html)
- ÚJČ AV ČR, Internetová jazyková příručka: [Uvozovky](https://prirucka.ujc.cas.cz/?id=162), [Zalomení řádků a nevhodné výrazy na jejich konci](https://prirucka.ujc.cas.cz/?id=880), [Značky, čísla a číslice](https://prirucka.ujc.cas.cz/?id=785), [Kalendářní datum a místo původu](https://prirucka.ujc.cas.cz/?id=810); entries [eventuální](https://prirucka.ujc.cas.cz/?slovo=eventuální), [sympatický](https://prirucka.ujc.cas.cz/?slovo=sympatický), [gymnázium](https://prirucka.ujc.cas.cz/?slovo=gymnázium)
- [Mozilla, Czech localization style guide](https://mozilla-l10n.github.io/styleguides/cs/general.html)
- [Microsoft, Czech Localization Style Guide (PDF)](https://download.microsoft.com/download/7/b/5/7b57e4a1-d299-4238-9997-f3ac51d6f763/ces-cze-StyleGuide.pdf), found through [Microsoft Localization Style Guides](https://learn.microsoft.com/cs-cz/globalization/reference/microsoft-style-guides)
- [Umíme anglicky (home page: interface wording, exercise names)](https://www.umimeanglicky.cz/)
- [Help for English, Výslovnost (index page: article titles with IPA)](https://www.helpforenglish.cz/vyslovnost)
- [Landigo, Členy v angličtině (A1) (first 100,000 characters)](https://www.landigo.cz/anglictina-online/zacatecnici-plus-a1/cleny-v-anglictine)
- Local: `docs/briefs/profile-ko-based.md`; `docs/profiles/id.md`, `ru.md`, `en-cs.md` (read in full or in the sections used), `zh.md` and `vi.md` (structure and profile JSON), `OTHERS.md` (no Czech section); `docs/PIPELINE.md` §3; `docs/PHASE2-BRIEF.md` (last section); `tools/content/lib.js`, `validate.js`, `more/_dsl.js` (how `nativeScript`, `pronScript`, `pronPattern`, `cueTest` and the standing rule are applied); `tools/content/zh/PRON-RULES.md`; `tools/content/{zh,id,vi,ru,ko}/profile.json`; `tools/i18n/keys.json` and `tools/i18n/ru/ui.json` (count and language-name templates); `packs/course-{ko,zh,ru,id,vi}-en.js` (deck order, lesson–deck links, transcription reuse count, `cueTest` 0-hit check). `Intl` checks in local Node (ICU 78.2) for `cs` plural rules, display names and `cs-CZ` formats.
