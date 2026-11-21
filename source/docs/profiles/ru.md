# Russian speakers learning English — course profile

Course `ru-en`. Audience: adult Russian speakers, in Russia and abroad (Belarus, Kazakhstan, Israel, the post-2022 emigration and older diasporas). All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard Russian**; answers and examples are in English. The HTML language tag and the app code are both **`ru`** (profile.json `native: "ru"`, pack `course-ru-en`, interface pack `i18n-ru`).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`: 39 lessons, 20 decks, standing rule `article-plural`), like zh, vi and id, because Russian has no articles. `parity.js` compares ru-en's English side with ko-en's.

Evidence labels follow `reports/Grammar learning order research.md`:
- **[research-backed]**: a study or corpus, named, with its sample.
- **[curriculum convention]**: what Russian textbooks, exams, dictionaries, style guides or apps do.
- **[practitioner opinion]**: a teacher's, school's or blog's position, or this profile's own inference (said so where it is mine).

A study read only as an abstract, a summary or a landing page is marked as such. Every web figure was read through the fetch tool's summary of the page, not by reading the PDF directly (§11).

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`). Explanations use **ты**, sparingly, with impersonal forms first; buttons use the infinitive. School grammar terms (артикль, множественное число, исчисляемые), with tense names kept in English (*Present Simple*, *Present Perfect*).
- **Articles lead the measured errors:** 2.5 article errors per 100 words for Russian writers against a 1.5 average over nine L1s (Rozovskaya & Roth 2010). Omission (missing *the* 24% + missing *a* 18% = 42%) slightly outweighs overuse (extra *the* 31% + extra *a* 6% = 37%), though extra *the* is the largest single type. Teach adding *and* withholding articles, with equal weight.
- **Second: Present Perfect.** Russian students use it at about a third of the native rate and replace it with Past or Present Simple, also with *since/for* and definite-time adverbs (Perez-Guerra & Smirnova 2024, REALEC). The 2025 ЕГЭ report names the same error.
- **Plural -s, -ing and -ed are relative strengths** (Murakami & Alexopoulou 2016). The plural half of the standing rule is kept for parity and countability (*advices*, *informations*), not because of plural data.
- **Skill shape** (EF EPI 2025): reading 536, listening 502, writing 486, **speaking 462**. Speaking is the gap; weight audio and typed production.
- **Pronunciation aid: IPA, required, exactly as the Chinese course writes it** (`tools/content/zh/PRON-RULES.md` A–D binding), so most transcriptions can be copied from zh (356 of the 366 ko-en card targets, plus its 325 `{{ex}}` rows). Russian schools and dictionaries already print IPA transcription; Cyrillic respelling would encode the errors (в for /w/, з for /ð/, э for /æ/). Toggle «Показывать транскрипцию».
- **Standing rule: `article-plural`**, keywords `артикл|множественн|исчисляем` (flag `i`); zero parity cost.
- **Curriculum:** all 39 ids kept in order (10 keep, 29 reweight, no English-side changes). Add 2: `runglish` (end of A1; deck «Ложные друзья и кальки») and `articles-3` (B1, after `passive`, English side copied from ja's `articles-3`).
- **Interface:** count patterns have one translation, so use **label + colon** («Карточек: {1}») or number-neutral abbreviations («{1} мин»). Put language-name slots at the start of a sentence or after a colon. System fonts: the app's web fonts have no Cyrillic.

## 2. Variant, register and voice

**Variant: American English.**
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The pron aid must describe what learners hear.
2. Russian school textbooks and the popular dictionaries teach British pronunciation and print British transcription [curriculum convention; Skyeng explains that dictionaries show BrE and AmE variants side by side ([Skyeng](https://skyeng.ru/articles/transkriptsiya/)); the school claim was not checked against a textbook, §11]. §6 handles the mismatch the same way zh.md does: the familiar symbols, written with American values.
3. US spelling and vocabulary (color, apartment, subway, cell phone). Mention a British form only in a card `note`: «В британском английском — flat».

**Register: ты, used sparingly; impersonal forms first; never «Вы» with a capital** [practitioner opinion, decision].
- **What was found** [curriculum convention]:
  - The store descriptions of three learning apps address the reader as **вы**: Duolingo («Изучайте новые языки…», «Вам точно понравится!»), Lingualeo («Читайте тексты…», «ваш личный собеседник») and Lingopanda ([Duolingo](https://apps.apple.com/us/app/duolingo-%D1%83%D1%80%D0%BE%D0%BA%D0%B8-%D0%B8%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE/id570060128?l=ru), [Lingualeo](https://apps.apple.com/ru/app/480952151), [Lingopanda](https://apps.apple.com/ru/app/lingopanda-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%81-%D0%BD%D1%83%D0%BB%D1%8F/id1601635471)).
  - In-product character copy switches to **ты**: Duolingo's owl «позанимайся сегодня» ([Т—Ж](https://t-j.ru/why-be-afraid-of-duo/)); Lingualeo's LeoNews block «слово улетело в твой словарь»; Lingopanda's mascot «подшучивать над тобой».
  - A grammar explainer (Univext) writes its body in **вы** and its calls to action in **ты** («Начни урок…») ([Univext](https://univext.com/ru/blog/458/osnovy-angliyskoy-grammatiki-rukovodstvo-dlya-nachinayushchikh)).
  - One translation guide prescribes formal, capitalised «Вы» for professional UI ([Onetime Secret notes](https://docs.onetimesecret.com/ru/translations/language-notes)). Microsoft's 2011 change moved Russian UI from impersonal to personal address ("you can"), but the page that opened does not say ты or вы ([Microsoft terminology blog](https://learn.microsoft.com/en-us/archive/blogs/terminology/new-writing-style-in-russian-microsoft-products)).
  - So the brief's premise ("most learning apps use ты") is **not confirmed**: marketing copy uses вы, and the in-app tutor voice uses ты.
- **Decision: ты**, because this app *is* the in-app tutor voice: a daily, gamified, one-to-one habit, as ko-en (해요체 to a peer), zh (你) and id (*kamu*) chose. ты also gives shorter strings for the 8-character tab bar and toasts.
- **Mitigation for older adults:** use **impersonal and infinitive forms wherever they work**, so ты appears only where a sentence needs an addressee.
  - Rules: «Нужен артикль a», «Здесь — Present Perfect». Not «Тебе нужно поставить артикль».
  - Buttons: infinitive («Проверить», «Начать»), as Russian UI does ([Onetime Secret notes](https://docs.onetimesecret.com/ru/translations/language-notes)).
  - ты appears in instructions and praise: «Напиши по-английски», «Так держать!», «Ты всё повторил — до завтра!» (a sentence with a number uses the count rules in §10: «Дней подряд: 5. Так держать!»).
- **Never** «Вы» capitalised, mixed ты/вы on one screen, slang (норм, го, чекни), diminutives (урочек, карточечка), or more than one exclamation mark per screen.
- **Translations of example sentences:** *you* = **ты** between friends and in texting, **вы** in service, office, email and doctor scenes. That вы sits inside a translation, not addressed to the learner. *I'm …* translations use natural Russian: «Я студент», «Я учитель» (no «являюсь»).
- **Error marks:** **✗** wrong, **✓** right: `I'm teacher. ✗ → I'm a teacher. ✓`.

Three sample sentences in the voice:
- «В русском нет артиклей, поэтому a и the легко пропустить — или поставить лишний. Достаточно запомнить три правила.»
- «„Я живу здесь пять лет“ — это не Present Simple. Время ещё идёт, поэтому по-английски: I've lived here for five years.»
- «В настоящем времени русский обходится без связки: „Он студент“. В английском глагол to be обязателен: He's a student.»

**Typography and mixing English into Russian text (one rule, applied everywhere):**
- **Quotes.** Russian phrases go in «ёлочки»; nested quotes in „лапки“: «Скажи „спасибо“». In lesson HTML, English is bold `<b>` and never quoted. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare: `«Я люблю чай» по-английски?`, «После two — множественное число: books.».
- **Dash.** Em dash with spaces ( — ) between clauses and in «A — это B». Hyphen only inside words (-ing-форма, по-английски). En dash only in number ranges (2–4) with no spaces.
- **Ё.** Write **ё** everywhere (ещё, всё, Тренажёр, учёба): it removes ambiguity (всё / все) for learners and for any screen reader. One rule is easier to check than "where needed".
- **Spaces.** A no-break space (U+00A0) between a number and its unit or noun in static text («5 минут», «10 ₽» is not used: write «10 рублей»). Percent formatting is in §10. No space before `? ! : ;`.
- **Do not inflect English words with Russian endings:** no «апдейтнуть», «в Present Perfect'е», «фразовые верба». Write «в Present Perfect», «во времени Present Perfect», «фразовые глаголы».
- **Alternatives:** ` / ` with spaces, as in ko-en.
- **Capitals:** sentence case in every heading, title, deck name and button; Russian does not title-case.

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.
- **Convention found** [curriculum convention]: Russian explainers name English grammar with Russian school terms and keep **tense names in English**: «Артикли: a, an, the», «Множественное число», «нужен вспомогательный глагол do», «Present Simple против Present Continuous», «Неправильные глаголы», «Подлежащее, затем глагол, затем дополнение» ([Univext](https://univext.com/ru/blog/458/osnovy-angliyskoy-grammatiki-rukovodstvo-dlya-nachinayushchikh)). Univext also uses «неисчисляемые» («множественное число и неисчисляемые в общем смысле»). Skyeng's transcription explainer uses «транскрипция», «ударение», «долгота» ([Skyeng](https://skyeng.ru/articles/transkriptsiya/)).
- The "school" tags below (общий / специальный вопрос, согласование времён, вторая / третья форма) are general knowledge of Russian school usage, **not checked against a fetched textbook** (§11).
- **One term per concept.** The standing-rule regex depends on **артикль** (any case form), **множественное число** (any case form) and **исчисляемое / неисчисляемое** (§7). Do not write «мн. ч.», «плюрал» or «счётное».

| English term | Russian term (use this) | Note |
|---|---|---|
| article | **артикль** | Standing-rule keyword (stem *артикл*: артикль, артикля, артиклем, артикли). Never «артикул» (= SKU) |
| indefinite / definite article | неопределённый артикль (a / an) / определённый артикль (the) | In `why` prefer «артикль a», «артикль the» |
| zero article | без артикля (нулевой артикль) | School says «нулевой артикль»; in `why` write «без артикля» |
| noun | существительное | |
| countable / uncountable noun | **исчисляемое / неисчисляемое** существительное | Standing-rule keyword (stem *исчисляем*) |
| singular / plural | единственное / **множественное число** | Standing-rule keyword (stem *множественн*). Write it out in full |
| (Russian) case | падеж | Contrast only: «в английском нет падежей — их работу делают предлоги и порядок слов» |
| (Russian) aspect: perfective / imperfective | вид: совершенный / несовершенный | Contrast only (lessons `past`, `perfect`, `continuous`) |
| pronoun / personal pronoun | местоимение / личное местоимение | |
| subject / object | подлежащее / дополнение | School |
| predicate | сказуемое | School; use sparingly |
| subject / object pronoun (I / me) | личное местоимение в именительном / объектном падеже | Short: «I — кто делает, me — кого / кому» |
| possessive (my, his) | притяжательное местоимение | |
| possessive 's | притяжательный падеж ('s) | School |
| verb | глагол | |
| be | **глагол to be** | «глагол to be (am, is, are)» |
| linking verb | глагол-связка | Use in the `be` lesson: «В русском связка в настоящем времени пропадает» |
| auxiliary verb | вспомогательный глагол (do, does, did, have, will) | School |
| modal verb | модальный глагол | School |
| third-person singular -s | окончание -s (he / she / it) | Full form once: «окончание -s в третьем лице единственного числа»; afterwards «окончание -s» |
| base form | начальная форма (инфинитив без to) | |
| past form / past participle | вторая форма / третья форма (V2 / V3) | School: «три формы глагола» |
| regular / irregular verb | правильный / неправильный глагол | School |
| -ing form | -ing-форма | «окончание -ing» |
| tense | время (грамматическое время) | Write «время Present Perfect», never «тенс» |
| present simple | **Present Simple** | All tense names in English, as in Russian schools and explainers. Gloss once: «Present Simple (простое настоящее)» |
| present continuous | Present Continuous | |
| past simple / past continuous | Past Simple / Past Continuous | |
| future (will / going to) | will / be going to (Future Simple) | |
| present perfect (+ continuous) | **Present Perfect** (Present Perfect Continuous) | Gloss once: «Present Perfect (настоящее совершенное время)»; key lesson |
| past perfect | Past Perfect | |
| sequence of tenses | согласование времён | School term; used in `reported` |
| passive / active | страдательный залог (пассив) / действительный залог | School; «Passive Voice» in headings is also fine |
| conditional | условное предложение (первого / второго / третьего типа) | School names the types; lesson titles may say «If + Present Simple, will» |
| relative clause | придаточное определительное (с who / which / that) | Gloss once; then «придаточное с who» |
| reported speech | косвенная речь | School |
| infinitive / gerund | инфинитив / герундий | School |
| preposition / conjunction | предлог / союз | |
| adjective / adverb | прилагательное / наречие | |
| comparative / superlative | сравнительная / превосходная степень | School |
| question word | вопросительное слово | |
| yes/no question / wh-question | общий вопрос / специальный вопрос | School |
| indirect question | косвенный вопрос | «В косвенном вопросе — прямой порядок слов» |
| negative sentence / double negation | отрицательное предложение / двойное отрицание | |
| word order | порядок слов (прямой / обратный) | School |
| there is / are | оборот there is / there are | School |
| phrasal verb | фразовый глагол | |
| idiom / collocation | идиома / устойчивое сочетание | |
| false friend | ложный друг переводчика | Lesson `runglish` |
| calque | калька | |
| Runglish | рунглиш | Lesson title only |
| pronunciation | произношение | |
| transcription (IPA) | транскрипция | School and dictionary term |
| stress / stress mark | ударение / знак ударения (ˈ) | |
| long vowel / length mark | долгий гласный / знак долготы (ː) | |
| vowel / consonant | гласный / согласный | |
| voiced / voiceless | звонкий / глухой | School (Russian phonetics); «оглушение» = devoicing |
| vowel reduction / weak form | редукция / слабая форма | |
| linking | связная речь (слитное произношение) | |

UI terms are in §10.

## 4. Persistent error zones

Ranked by evidence strength × frequency × how often the point recurs across lessons; the ranking is this profile's inference. Format: error ✗ → correction ✓. **Every "Why" line (the contrast with Russian) and every example with no named source is [practitioner opinion]** unless its Evidence line names a study.

**Main fetched evidence:**
- [Rozovskaya & Roth 2010](https://cogcomp.seas.upenn.edu/papers/RozovskayaRo10a.pdf): 464 sentences, 10,844 words of essays by Russian-L1 writers, annotated alongside eight other L1s (Bulgarian, Chinese, Czech, French, German, Italian, Polish, Spanish; 62,925 words in all).
- [Murakami & Alexopoulou 2016](https://core.ac.uk/download/42340394.pdf): Cambridge Learner Corpus, Russian subcorpus of 775 scripts / 314,232 words from KET to CPE. The per-morpheme accuracy values are in a figure the fetch could not read; only the cluster placements in the text and Table 3 are used.
- [Perez-Guerra & Smirnova 2024](https://jle.hse.ru/article/download/16720/18643): REALEC (HSE undergraduates), 2,973 argumentative essays / ~833,000 words, against WriCLE (Spanish learners) and LOCNESS (native).
- [FIPI 2025](https://doc.fipi.ru/ege/analiticheskie-i-metodicheskie-materialy/2025/aya_mr_2025.pdf): the official methodological report on the 2025 ЕГЭ in English (more than 81,000 candidates). Only the first 100,000 of 150,414 characters were read.

1. **Articles: omission *and* overuse.**
   - *What goes wrong:* *a* is missing before singular count nouns (`I have car.`, `She is good doctor.`); *the* is missing with known or unique things (`Sun is hot.`, `Please review contract.`); *the* is added to generic nouns, names and countries (`The life is hard.`, `the France`); *a/the* chosen at random; этот / мой used where English wants *the*.
   - *Examples:* `I'm teacher. ✗ → I'm a teacher. ✓` / `Close door, please. ✗ → Close the door, please. ✓` / `The money is not everything. ✗ → Money isn't everything. ✓`
   - *Why:* Russian has no articles. Definiteness comes from word order (new information goes last: «В комнату вошла девушка» vs «Девушка вошла в комнату»), context and этот / один / какой-то.
   - *Evidence:*
     - [research-backed] Rozovskaya & Roth 2010: Russian writers made **2.5 article errors per 100 words** (271 errors), against a nine-L1 average of 1.5. By type: **extraneous *the* 31%**, missing *the* 24%, missing *a* 18%, a/the confusion 11%, confusion with a possessive or demonstrative 9%, extraneous *a* 6%. Small sample of written essays.
     - [research-backed] Murakami & Alexopoulou 2016: Russian learners rank low on articles, with Japanese, Korean and Turkish learners (the ABSENT group). Across all L1s, having or lacking articles is the largest L1 effect on any morpheme (pooled estimate 1.152 log-odds); no separate Russian-by-article estimate is given.
     - [curriculum convention] FIPI 2025 lists, among typical answer-form errors, writing *the* together with a superlative into the answer box (a task-format error, but it shows that article placement is still unsettled at school-leaving level).
     - The examples `the France` and `Please review contract` come from practitioner pages ([Verbling](https://www.verbling.com/articles/post/from-slavic-languages-to-english-the-com), [llexi](https://llexi.com/l1-errors/common-english-errors-russian-speakers/)).
   - **Content consequence:** unlike zh (where extra *the* is 48% of article errors), Russian errors split almost evenly: omission 42%, overuse 37%, a/the confusion 11%. Teach both directions with equal weight: *a* before singular count nouns and *the* for known things, **and** no article for generic plurals, uncountables and abstract nouns (§8 `articles`, `the`, `articles-2`, `articles-3`).
2. **Present Perfect vs Past Simple and Present Simple.**
   - *Examples:* `I live here for five years. ✗ → I've lived here for five years. ✓` / `I have seen him yesterday. ✗ → I saw him yesterday. ✓` / `Did you see my keys? (now, looking for them) → Have you seen my keys? ✓` / `I already sent it. → I've already sent it. ✓ (US English accepts both)`
   - *Why:* Russian has one past tense; aspect (сделал / делал), not tense, carries completion. A state that started in the past and continues uses the Russian present («живу пять лет»).
   - *Evidence:*
     - [research-backed] Perez-Guerra & Smirnova 2024: Russian students used the Present Perfect **115 times per 100,000 words against 322 for native students** (PP-to-verb ratio 0.007 vs 0.019), the lowest of the three groups. In a 500-example sample, the commonest error was PP where Past Simple was required, with definite past-time expressions. Where a PP was needed, Russian students substituted Past Simple in 52% and **Present Simple in 38%** of cases. With specific temporal adverbials, 23% of Russian contexts used another tense (Past Simple 61%, Present Simple 36%), against 4% for Spanish learners. In extended-now contexts (*for / since*), 26% used another tense.
     - [curriculum convention] FIPI 2025: many candidates used Past Simple instead of Present Perfect, often triggered by *years ago* elsewhere in the sentence; Present Perfect and the passive "remain difficult".
     - [practitioner opinion] [llexi](https://llexi.com/l1-errors/common-english-errors-russian-speakers/) (*I already sent → I have already sent*), [Verbling](https://www.verbling.com/articles/post/from-slavic-languages-to-english-the-com) (*Now I finished at the University…*).
   - **Content consequence:** the two errors pull opposite ways (PP with *yesterday*; Present Simple with *for five years*). `perfect` and `perfect-2` must teach both (§8).
3. **Prepositions and case calques.**
   - *Examples:* `depend from ✗ → depend on ✓` / `on the picture ✗ → in the picture ✓` / `I was waiting my friend ✗ → waiting for ✓` / `I called to my friend. ✗ → I called my friend. ✓` / `on the meeting ✗ → at the meeting ✓` / `I'm married with… ✗ → married to ✓`
   - *Why:* Russian marks these relations with case endings and its own preposition set: зависеть **от**, **на** картинке, ждать (+ accusative, no preposition), звонить **кому** (dative), **на** встрече.
   - *Evidence:*
     - [research-backed] Rozovskaya & Roth 2010: **2.3 preposition errors per 100 words** for Russian writers, against a 2.1 average.
     - [practitioner opinion] llexi (*depends from*, *on the meeting*), [Lifehacker](https://lifehacker.ru/20-mistakes-in-english/) (*on the picture*), [Talk.edu](https://blog.talk.edu/?p=26399) (*waiting my friend on the library*, *called to my friend*, *been in America*).
   - Teach the core set (`prep`) and verb + preposition chunks as vocabulary; not a standing rule.
4. **No *be* in the present (copula omission).**
   - *Examples:* `He student. ✗ → He's a student. ✓` / `She very busy. ✗ → She's very busy. ✓` / `Where you from? ✗ → Where are you from? ✓`
   - *Why:* Russian drops the present-tense copula («Он студент», «Она занята») and writes a dash at most.
   - *Evidence:* [practitioner opinion] Talk.edu (*I doctor*). OTHERS.md tagged it [inference]. **No Russian-L1 count was found** (§11). Expect it mainly at A1 and in fast speech; adults with school English rarely write it.
5. **Questions without *do* and with statement order; indirect questions with question order.**
   - *Examples:* `Where you live? ✗ → Where do you live? ✓` / `How old she is? ✗ → How old is she? ✓` / `You like coffee? ✗ (as a neutral question) → Do you like coffee? ✓` / `I don't know where does she live. ✗ → where she lives ✓`
   - *Why:* Russian forms yes/no questions by intonation alone («Ты любишь кофе?») and has no auxiliary.
   - *Evidence:* [practitioner opinion] Verbling (*How old she is?*); OTHERS.md [P, no source fetched] for *do*. No count.
6. **Uncountable nouns that are countable in Russian.**
   - *Examples:* `advices ✗ → advice / pieces of advice ✓` / `informations ✗ → information ✓` / `The news are bad. ✗ → The news is bad. ✓` / `The money are on the table. ✗ → The money is… ✓` / `a good weather ✗ → good weather ✓`
   - *Why:* совет, сведения, новости and деньги are countable or plural in Russian (советы, новости — plural; деньги — plural only).
   - *Evidence:* [practitioner opinion] Lifehacker (*advices*; also *knowledge, research, information, data*). The *news / money* agreement items are this profile's examples.
7. **Lexical transfer: false friends, calques, one Russian word for two English words ("Runglish").**
   - *Examples:*
     - false friends: `I'll buy it in the magazine. ✗ → in the store ✓` (магазин) / `He's very accurate (= tidy). ✗ → neat / tidy ✓` (аккуратный) / `She's an intelligent person (= cultured). → well-educated / cultured` (интеллигентный; *intelligent* = умный) / `my cabinet (= office) ✗ → my office ✓` (кабинет) / `a fabric (= factory) ✗ → a factory ✓` (фабрика) / `actual (= current) ✗ → current ✓` (актуальный) / `I'm normal. ✗ → I'm fine / OK. ✓` (нормально) / `brilliant ring ✗ → diamond ring ✓` (бриллиант) / `useful food ✗ → healthy food ✓` (полезная еда);
     - calques: `I feel myself well. ✗ → I feel well. ✓` (чувствую себя) / `Thanks God ✗ → Thank God ✓` / `speak English freely ✗ → fluently ✓` (свободно) / `I'm from Moscow city ✗ → from Moscow ✓`;
     - one word, two verbs: `say me ✗ → tell me ✓` (сказать) / `do a coffee ✗ → make coffee ✓` (делать) / `learn mathematics (at university) → study ✓` (учить) / `comfortable time ✗ → convenient time ✓` (удобный) / `possibility to study ✗ → opportunity ✓` (возможность);
     - gender: `My phone is old. He doesn't work. ✗ → It doesn't work. ✓` (телефон — он).
   - *Evidence:*
     - [research-backed] Kharlamova & Proskurina 2026 (RILEC, arXiv): REALEC-L1, the interference-annotated subset of REALEC, holds **6,086 sentences each with at least one L1-interference error**, tagged as copying expression (calques), synonyms (two English words for one Russian word), tense semantics, transliteration and word-form transmission ([arXiv](https://arxiv.org/html/2603.07366v1)). The paper gives **no per-category counts**, so it supports the categories, not a ranking.
     - [practitioner opinion] Lifehacker, 20 mistakes by Lilya Ledneva, 2016 (*feel myself, brilliant, normal, learn/study, freely, do/make, say/tell, possibility, comfortable/convenient, useful food, advices, Thanks God, he for objects, girlfriend, Moscow city*); Lifehacker false friends with comments (*intelligent*) ([Lifehacker](https://lifehacker.ru/lozhnye-druzya-perevodchika/)); llexi (*actual, normal, cabinet, chef, prospect*); Online Teachers UK (*make/do, comfortable/convenient, say/tell*) ([OTUK](https://onlineteachersuk.com/russian-mistakes-in-english-confusing-wor/?nonamp=1)).
     - *magazine, accurate, fabric* appear on none of the pages opened (Lifehacker names *magazine* without explaining it). They are standard Russian-teacher lore [practitioner opinion, no source opened].
8. **Word order carried over from free Russian order.**
   - *Examples:* `Very well understand I your problem. ✗ → I understand your problem very well. ✓` / `The guests will be tomorrow here. ✗ → The guests will be here tomorrow. ✓` / `In the room is a table. ✗ → There's a table in the room. ✓` / `I very like it. ✗ → I really like it. ✓`
   - *Why:* Russian word order shows topic and focus, not grammatical role; new information goes last («В комнате стол» puts стол last, so learners put *a table* last too).
   - *Evidence:* [practitioner opinion] llexi, Verbling, Lifehacker (*I very like you*). The *there is* item is this profile's example; no source opened (§11).
9. **Double negation.**
   - *Examples:* `I don't know nothing. ✗ → I don't know anything. / I know nothing. ✓` / `Nobody didn't come. ✗ → Nobody came. ✓`
   - *Why:* Russian requires negative concord («Я ничего не знаю», «Никто не пришёл»).
   - *Evidence:* [practitioner opinion], no source opened.
10. **Continuous forms: mostly fine, but stative verbs and "right now".**
    - *Examples:* `I study English now. ✗ (= at this moment) → I'm studying ✓` / `I'm understanding. ✗ → I understand. ✓`
    - *Evidence:* [research-backed] Murakami & Alexopoulou place progressive *-ing* in the highest accuracy cluster for Russian learners, unlike German and French learners. So this zone is **light**: reweight, do not expand. [practitioner opinion] Talk.edu (*I study English* for *I am studying*).
11. **Reported speech and sequence of tenses.**
    - *Examples:* `He said that he is tired. → He said (that) he was tired. ✓` / `She asked where do I live. ✗ → where I lived ✓`
    - *Why:* Russian keeps the tense of the original words («Он сказал, что устал / устаёт»).
    - *Evidence:* [practitioner opinion], no source opened. Russian schools teach it as «согласование времён», so learners know the name [curriculum convention, unverified].
12. **Pronunciation.** Each item is tagged separately.
    - **/iː/ vs /ɪ/ (and other vowel pairs).** `sheep / ship`, `leave / live`, `feet / fit`.
      - [research-backed, conference abstract] Kondaurova & Francis: 19 Russian and 12 American listeners identified *beat–bit* continua varying in spectral and duration steps. The Americans relied mainly on vowel quality; **the Russians relied entirely on duration** and showed no use of quality ([abstract](https://linguistics.northwestern.edu/about/events/past%20conferences/mcwop10/kondaurova.txt)). Both English vowels map onto Russian /i/.
      - Consequence: length marks (ː) in the transcription help, but the `pron` lesson must also say that *ship* is a different, more open vowel, not just a short *sheep*.
    - **/æ/ vs /e/** (`bad / bed`, `man / men`), **/ʌ/ vs /ɑː/** (`hut / heart`), **/ʊ/ vs /uː/** (`look / Luke`), and flattened diphthongs (*go*, *play* said as one vowel). [practitioner opinion] [Pronunciation Studio](https://pronunciationstudio.com/russian-speakers-english-pronunciation-errors/).
    - **TH → s / z (also t / d):** `think` → *sink*, `this` → *zis*. [practitioner opinion] Pronunciation Studio. [research-backed, qualitative] Kolesnichenko & Kapitan 2025 list interdentals among the pre-test deviations of 25 first-year Russian EFL students at B1–B2, with no rates ([JLE](https://jle.hse.ru/article/download/19916/22639)).
    - **/w/ → /v/:** `wine` → *vine*, `work` → *vork*, `Wednesday` → *Vednesday*. [practitioner opinion] Pronunciation Studio, llexi. [research-backed, qualitative] Kolesnichenko & Kapitan 2025 ([w]/[v] confusion).
    - **/h/ → /x/** (Russian х): `house`, `hello` with a scraping sound; /h/ also dropped in connected speech. [practitioner opinion] Pronunciation Studio.
    - **Final devoicing:** `bad` → *bat*, `dog` → *dock*, `love` → *luff*, `choose` → *chooce*. Russian devoices final obstruents («код» = кот).
      - [research-backed, qualitative] Kolesnichenko & Kapitan 2025 list final-consonant voicing among the deviations; no rates.
      - Background only (not L2 English evidence): Dmitrieva, Jongman & Sereno 2010 found Russian's own final devoicing acoustically incomplete in 11 speakers, and the vowel-length difference before voiced finals grew with English experience (r = .681) ([J. Phonetics](https://kuppl.ku.edu/sites/kuppl/files/documents/publications/Dmitrieva_Jongman_Sereno_phon_neutralization_JPhon_2010.pdf)). That supports teaching the **longer vowel before a voiced final** (*bad* longer than *bat*) as the cue to aim for.
    - **Unaspirated /p t k/** (sound like b d g to English ears), **dark l everywhere, trilled r, pronounced silent r** (*car* with a rolled r is fine in American English only if it is the approximant). [practitioner opinion] Pronunciation Studio.
    - **/ŋ/ → /n/ or /ŋg/:** `singing` → *singin* or *sing-ging*. [practitioner opinion], no source opened.
    - **Palatalisation** of consonants before front vowels (*tea*, *deal* with a soft т / д). [practitioner opinion], no source opened.
    - **No vowel reduction, word stress and flat intonation:** full vowels in *about, manner, sailor*; stress errors on cognates (*comfortable*, *development*, *photographer*); flat delivery with sudden pitch jumps. [practitioner opinion] Pronunciation Studio. The §6 rule of ˈ on every content word and weak forms for function words is aimed at this.
13. **Things that are *not* zones** (do not over-teach):
    - Plural -s and past -ed: [research-backed] Murakami & Alexopoulou place both in the highest clusters for Russian learners; Russian inflects for number and has an obvious past.
    - Possessive 's: ranks low across all L1s in Murakami & Alexopoulou, not specifically for Russians. Keep it in `object-have` / `plurals` body rows (`the room of my sister → my sister's room`).
    - r / l and f / p / v / b: Russian has these contrasts, so the ko-en pairs (rice / lice, fan / pan, vote / boat) are easy. The `pron` lesson keeps them only as quick wins (§8).

## 5. Learner starting point

- **School exposure.** A foreign language is compulsory in Russian schools from primary school to grade 11, and English is the usual choice [curriculum convention, general knowledge; the federal standard was not fetched, §11]. Adults aged 25–45 typically had 8–10 years of school English, often grammar-translation, and read far better than they speak [practitioner opinion].
- **Exams** [curriculum convention]:
  - **ЕГЭ** (school-leaving and university-entrance exam): English is an elective. FIPI reports **more than 81,000** candidates in the 2025 main period (84,700 in 2024; 85,800 in 2023), with an average test score of **64.1**, and about 3% below the minimum ([FIPI 2025](https://doc.fipi.ru/ege/analiticheskie-i-metodicheskie-materialy/2025/aya_mr_2025.pdf)). It lists Past Simple for Present Perfect and the passive among persistent difficulties (§4.2).
  - **ОГЭ** (end of grade 9): a foreign language is one elective among several [curriculum convention, not fetched].
  - **IELTS / TOEFL:** IDP paused IELTS entries in Russia, ETS suspended TOEFL testing in Russia and Belarus, and Pearson suspended sales from 5 March ([The PIE News](https://thepienews.com/english-language-testing-providers-pull-out-of-russia/); the article gives no year; news-search results date it to 2022). Learners who need a score for study, work or migration take it abroad or in another format. The current status in 2026 was not checked (§11). So: name IELTS relevance where true, but never assume the learner can sit it at home.
  - Familiar task formats: multiple choice, gap-fill with a word to transform (ЕГЭ grammar and vocabulary section), sentence translation. They map onto `mc`, `fill` and `type`.
- **Profile figures:**
  - [research-backed, test-taker data] **EF EPI 2025, Russia:** rank **49** (global average 488). Skill scores: **reading 536, listening 502, writing 486, speaking 462** ([fact sheet](https://www.ef.com/assetscdn/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-russia-english.pdf)).
    - The overall score was garbled in the fetched text ("52"). OTHERS.md gives 532, rank ≈44 from a secondary table; the two ranks disagree, so use the skill scores and rank 49 from EF's own sheet and treat the overall figure as unverified.
    - Cities: St Petersburg 555, Moscow 537, Kazan 532; lowest listed Tambov 398. Self-selected online test-takers; no sample size.
    - **Shape:** reading is highest and **speaking is lowest, 74 points apart**; listening sits in the middle (unlike zh, where listening is lowest).
- **Motivators** [practitioner opinion, no source opened]: ЕГЭ for school-leavers; **relocation** (work or study abroad since 2022); **IT work** with international teams and clients (meetings, email, documentation); travel; English-language media. The app's GOALS (travel / work / social / media) cover these; the work deck and `email` lesson matter more than in ko-en.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1, move fast.** Most adults are false beginners who recognise every A1 form and its school name. The value is in typed items and audio.
  2. **Speaking first.** Weight listening-then-say review, minimal pairs (ship / sheep, bad / bed, wine / vine, think / sink) and typed production.
  3. **Never gate on articles or Present Perfect.** Both stay error-prone at university level (Rozovskaya & Roth; Perez-Guerra & Smirnova use university essays).
  4. **Make the article and the tense carry the answer** in typed items (§7).
  5. **Relocation and IT flavour:** name the real use in lesson blurbs («пригодится на созвоне с командой», «частая ошибка в ЕГЭ») where true. Never promise score gains.

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners already know.** Russian learners meet English phonetic transcription in school and in every bilingual dictionary. Skyeng's explainer for Russian adults describes it as the International Phonetic Alphabet, written «внутри [квадратных] или /косых/ скобок», with ˈ and ˌ for stress, ː for length and separate BrE / AmE variants in dictionaries ([Skyeng](https://skyeng.ru/articles/transkriptsiya/)) [curriculum convention, one practitioner source].
  - That school textbooks (e.g. *Spotlight / Английский в фокусе*) print and drill IPA transcription is general knowledge, **not verified against a textbook** in this research (§11). A page found on the topic ([Мел](https://mel.fm/vopros--otvet/otvechayet-pedagog/9735104-zachem-detey-v-shkole-muchayut-transkriptsiyey-slov-ona-zhe-tolko-putayet)) turned out to be about transcribing *Russian* words in Russian lessons and is not used as evidence.
  - That adults still read IPA years after school is **assumed, not measured**, as for zh.
- **Cyrillic respelling** («сэнк ю», «уот») is common in phrasebooks and on self-study sites [practitioner opinion, no source opened]. It is rejected because Cyrillic **writes the Russian errors into the aid**:
  - /w/ and /v/ both become в (or у); /θ/ becomes с or ф, /ð/ becomes з or д;
  - /æ/ and /e/ both become э; /iː/ and /ɪ/ both become и, with length shown only by ad-hoc doubling;
  - /h/ becomes х — the exact /h/ → /x/ error;
  - word-final voiced consonants look natural to a Russian reader, who then devoices them by habit (Russian spelling «код» is read [кот]).
  - The Kondaurova & Francis result (Russians hear /iː/–/ɪ/ by length only, §4.12) argues for an aid that shows both a length mark *and* a different vowel symbol, which IPA does and Cyrillic cannot.
- **No study compares IPA, respelling and no aid** for Russian learners. The recommendation is inference [practitioner opinion].

**Recommendation: IPA in every `pron` field (profile.json `"pron": "required"`), written exactly as the Chinese course writes it.** It is shown by default and hidden with the toggle «Показывать транскрипцию».
- **Why copy zh, not invent a Russian variant:**
  1. Learners can read it (above), as zh learners can.
  2. **Reuse:** both courses are scaffolded from ko-en. Of ko-en's 366 card targets, **356 already have a zh IPA `pron`** (the other 10 are positions zh localised), and zh's lessons carry **325 `{{ex}}` rows**. Every unchanged English string copies its zh `pron` byte for byte. Only localised cards (§9), ru-only cards, the `runglish` lesson and any `articles-3` row not in zh need new transcriptions.
  - **Copy from zh, never from vi:** vi's IPA uses ɚ, ɝ and ‿, which this `pronPattern` rejects.
  3. **Consistency:** `lint.js` blocks the same English text with two different aids inside one pack; copying keeps ru internally consistent for free, and keeps the two IPA courses identical.
- **Binding rules:** `docs/profiles/zh.md` §6 rules 1–10 **as settled by `tools/content/zh/PRON-RULES.md` A–D** (symbols, syllabic consonants, weak and strong forms, stress, format). Where zh.md §6 and PRON-RULES.md differ (modals *could / should / would* weak, *your* = /jʊr/, stranded prepositions without ˈ, syllabic /l/ and /n/), **PRON-RULES.md wins**, because the 430 rows to be copied follow it.
- **The key** (the same as zh.md §6 rule 4 and PRON-RULES.md; repeated here so this profile is self-contained):
  - **Delimiters:** one pair of slashes `/…/`, words separated by one space, no punctuation, capitals or digits; ` ‖ ` between two sentences in one row; alternatives as two slashed groups. Never `|` and never `//`.
  - **Stress:** ˈ (U+02C8) before the stressed syllable of **every word except the closed function-word list** (articles, personal and possessive pronouns, *be*, auxiliary *do / have*, modals, prepositions, conjunctions, existential *there*), monosyllables included. ˌ only inside long words, in *-teen* numbers and letter-by-letter abbreviations. Every `pron` therefore contains ˈ.
  - **Vowels (American values in school symbols):** iː / ɪ, e / æ, ʌ / ə, uː / ʊ, ɑː (LOT: hot), ɔː (THOUGHT: talk, dog), oʊ (GOAT), ɜːr (NURSE), ər (lettER), ɪr / er / ʊr, ɑːr / ɔːr, eɪ aɪ ɔɪ aʊ; final unstressed -y = i.
  - **Consonants:** p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r w j. **ASCII g** (never U+0261 ɡ), **plain r** (never ɹ), no flap symbol, no ɚ / ɝ.
  - **Weak forms** by default (a /ə/, the /ðə/ or /ði/, to /tə/ or /tu/ before a vowel, for /fər/, of /əv/, and /ənd/, can /kən/, could /kəd/, are /ər/, was /wəz/, you /ju/, your /jʊr/); strong form and ˈ when stressed or alone (`Me too.` /ˈmiː ˈtuː/).
  - **Codas written in full:** -s as /s z ɪz/, -ed as /t d ɪd/, clusters, **voiced finals as voiced** (*bad* /ˈbæd/, *dogs* /ˈdɔːgz/). No inserted vowels.
  - **Numbers** as words; **abbreviations** letter by letter; **names** as the en-US voice says them (§9).
- **Symbol table** (OALD North American values in the school symbol set, as zh.md §6 rule 4):

  | Sound | Write | School (British) symbol learners know | Example |
  |---|---|---|---|
  | FLEECE / KIT | iː / ɪ | same | leave /ˈliːv/, live /ˈlɪv/ |
  | unstressed final -y; weak *you, to* before vowels | i / u | i / u | very /ˈveri/, movie /ˈmuːvi/ |
  | DRESS / TRAP | e / æ | same | bed /ˈbed/, bad /ˈbæd/ |
  | STRUT / schwa | ʌ / ə | same | cup /ˈkʌp/, about /əˈbaʊt/ |
  | GOOSE / FOOT | uː / ʊ | same | food /ˈfuːd/, book /ˈbʊk/ |
  | LOT (hot, stop) | ɑː | ɒ | hot /ˈhɑːt/ |
  | THOUGHT (talk, dog) | ɔː | ɔː | talk /ˈtɔːk/, dog /ˈdɔːg/ |
  | GOAT | oʊ | əʊ | go /ˈgoʊ/ |
  | NURSE / lettER | ɜːr / ər | ɜː / ə | bird /ˈbɜːrd/, water /ˈwɔːtər/ |
  | NEAR / SQUARE / CURE | ɪr / er / ʊr | ɪə / eə / ʊə | here /ˈhɪr/, there /ˈðer/ |
  | START / NORTH | ɑːr / ɔːr | ɑː / ɔː | car /ˈkɑːr/, door /ˈdɔːr/ |
  | FACE / PRICE / CHOICE / MOUTH | eɪ / aɪ / ɔɪ / aʊ | same | |
  | consonants | p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r w j | same | yes /ˈjes/ |
  | syllabic l / n at word end (PRON-RULES A4) | no ə: /ˈpiːpl/, /ˈsevn/, /ˈsteɪʃn/; ə kept after other consonants: /ˈoʊpən/ | | |

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

- **Russian-specific additions** (they change no zh form):
  1. **Brackets.** Russian textbooks and dictionaries usually print transcription in square brackets `[ ]`. The app uses slashes. The `pron` lesson says so once: «В словарях транскрипцию часто пишут в квадратных скобках [ ], здесь — между косыми чертами / /. Это одно и то же».
  2. **British → American conversion table** in the `pron` lesson body, as zh rule 5: əʊ → oʊ, ɒ → ɑː, ɪə → ɪr, eə → er, final r is pronounced. Russian learners meet British symbols at school.
  3. **Lesson-body notes on what the symbols mean for a Russian speaker** (prose, not in `pron`): θ ð «кончик языка между зубами, не с / з»; w «губы трубочкой, без касания зубов — не в»; h «просто выдох, не х»; æ «шире, чем э»; ː «долго, но ɪ — ещё и другой, более открытый звук»; voiced finals «не оглушай: bad ≠ bat, гласный перед звонким длиннее»; ŋ «задняя часть языка, без г на конце».
  4. **Homoglyph trap.** Writers on a Russian keyboard can type Cyrillic а е о р с у х or Latin-looking і instead of IPA letters. The `pronPattern` class contains no Cyrillic, so such a `pron` fails validation; writers should type IPA with a Latin layout or copy it.
- **Validator settings (profile.json):**
  - `"nativeScript": "[\\u0400-\\u04ff]"` — the Cyrillic block (А–я, Ё ё and all other Cyrillic letters). It finds 0 characters in `packs/course-ko-en.js`, so the "English must not contain native script" checks are safe.
  - `"pronScript": "ˈ"` — replaces the native-script test for `pron` only (PIPELINE §3), exactly as in `tools/content/zh/profile.json`. No ˈ occurs in `packs/course-ko-en.js`.
  - `"pronPattern"` — identical to zh's: `^(?=.*ˈ)/C+( C+)*/( /C+( C+)*/)*$` with `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]`. It rejects capitals, punctuation, `y c q x`, U+0261, Cyrillic homoglyphs, `//`, square brackets and a pron with no stress mark.
  - No `labels.cueTest` is needed: `nativeScript` is a real script, so cue injection (`more/_dsl.js`) and the "mc `q` / type `hint` is Russian" check use it directly. "Russian" means **at least one Cyrillic letter**:
    - `why`, `p` and full-form items without Cyrillic **fail validation** («Present Perfect + since.» fails; «Present Perfect, не Past Simple.» passes, because of «не»).
    - In the `more/` shorthand, an mc `q` or type `hint` with no Cyrillic does **not** fail: the DSL silently appends `labels.mcBlankCue` (« Что стоит на месте пропуска?») or `typeHintCue` (« — из этих слов»). That is right for a gap question and wrong for a translation or choice question, so writers must put the Russian frame in themselves: `«Я живу здесь пять лет» по-английски?`, «Какое время: Present Perfect или Past Simple?».
- **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote IPA in prose and tables (`<b>/θ/</b>`).

**Worked examples.** "zh" = copied byte for byte from `tools/content/zh/` (same English string); "new" = written for ru by the rules above. All rows pass `pronPattern` and contain ˈ and no Cyrillic (checked locally with the profile's regexes); `/ˈjes?/`, `/pen/`, `/ˈɡet/` (U+0261), `/ˈdоg/` (Cyrillic о), `[ˈjes]` and `//` are rejected.

| English | `pron` | Source | Rules / Russian trap shown |
|---|---|---|---|
| It's cold today. | /ɪts ˈkoʊld təˈdeɪ/ | zh | GOAT oʊ, not school əʊ |
| There's a cafe near here. | /ðerz ə kæˈfeɪ nɪr ˈhɪr/ | zh | existential *there* and *near* unmarked; ð not з |
| Can you close the door? | /kən ju ˈkloʊz ðə ˈdɔːr/ | zh | weak *can / you / the*; no `?`; final /z/ voiced |
| I have two brothers. | /aɪ ˈhæv ˈtuː ˈbrʌðərz/ | zh | main-verb *have* marked; plural /z/; æ |
| We watched a movie. | /wi ˈwɑːtʃt ə ˈmuːvi/ | zh | w not в; -ed = /t/ |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ | zh | ‖; ASCII g; voiced final g |
| Where do you live? | /ˈwer də ju ˈlɪv/ | zh | weak auxiliary *do* (the do-support lesson) |
| Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | zh | weak *to*, *you* |
| think / sink | /ˈθɪŋk/ · /ˈsɪŋk/ | zh | θ vs s |
| leave / live | /ˈliːv/ · /ˈlɪv/ | zh | length *and* quality (Kondaurova & Francis) |
| bad / bed | /ˈbæd/ · /ˈbed/ | zh | æ vs e |
| walk / work | /ˈwɔːk/ · /ˈwɜːrk/ | zh | w; THOUGHT vs NURSE |
| bad / bat | /ˈbæd/ · /ˈbæt/ | new | final voicing (оглушение) |
| ship / sheep | /ˈʃɪp/ · /ˈʃiːp/ | new | ɪ vs iː |
| wine / vine | /ˈwaɪn/ · /ˈvaɪn/ | new | w vs v |
| this | /ˈðɪs/ | zh | ð not з; demonstrative stressed |
| house | /ˈhaʊs/ | new | h not х |
| singing | /ˈsɪŋɪŋ/ | new | ŋ with no /g/ |
| comfortable | /ˈkʌmftərbl/ | new | stress trap (комфортабельный); syllabic l (PRON-RULES A4) |
| My name is Anna. | /maɪ ˈneɪm ɪz ˈænə/ | new | localised name (§9) |
| I'm from Moscow. | /aɪm frəm ˈmɑːskaʊ/ | new | weak *from*; English name of the city |
| Fifteen hundred rubles. | /ˌfɪfˈtiːn ˈhʌndrəd ˈruːblz/ | new | number as words; -teen ˌ; syllabic l |
| I've lived here since 2020. | /aɪv ˈlɪvd ˈhɪr sɪns ˈtwenti ˈtwenti/ | new | the Present Perfect trap; *since* unmarked |
| BTW | /ˌbiː tiː ˈdʌbəljuː/ | zh rule | abbreviation, ˌ |

- Before writing a "new" row, writers grep `tools/content/zh/` for the English string; if it exists there, copy that `pron` instead.
- Run `node tools/content/zh/pron_check.js`-style consistency checks on ru after writing (a ru copy of the checker, or the lead's lint).

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "артикл|множественн|исчисляем", "flags": "i" }`.
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **артикль**, **множественное число** or **исчисляемое / неисчисляемое**, in any case form.
- **Why stems, not words or `\b`:** Russian inflects (артикль, артикля, артиклем, артикли; множественное, множественного, во множественном числе). JavaScript's `\b` is ASCII-only, so it cannot anchor Cyrillic words; the stems are long enough not to need it. Flag `i` lets a sentence-initial «Артикль…» or «Множественное…» match (checked: JavaScript case-folds Cyrillic under `i`).
- **What the validator counts** (validate.js `article-plural`): `order` — the `why` names a keyword **and** `x` holds an article tile or a singular/plural twin of a tile in `a`; `type` — the `why` names a keyword **and** every variant in `a` contains an article, or `x` holds an article or a twin. Put the competitor tile in `x` (`a`, `the`, `book` / `books`).

**Sample `why` lines** (all tested locally against the regex; English bare, Russian quotes «»):
- «Перед профессией нужен артикль a: a teacher.» → hit
- «После two — множественное число: brothers.» → hit
- «Information — неисчисляемое: без артикля и без -s.» → hit
- «Второе упоминание — артикль the.» → hit
- «These — для множественного числа, this — для одного предмета.» → hit
- «Исчисляемое существительное в единственном числе требует a.» → hit
- «Артикль the: речь о конкретной вещи, которую оба знают.» → hit (sentence-initial capital, flag `i`)
- «В Present Simple с he добавляется -s.» → **no hit** (correct: not an article/plural point)
- «Здесь нужен артикул?» → **no hit** (артикул ≠ артикль)

**Writer rules (keep the count meaningful):**
- Write «множественное число» in full; never «мн. ч.» or «плюрал».
- **Never write «множественный выбор»** for multiple choice (it would match the stem). The UI term is «выбор ответа» (§10).
- Use the keywords only in `why` lines of items that really hinge on articles or plurals.
- Every `why`, `hint` and `q` needs Cyrillic (§6).

**Justification:**
- **Articles are the best-measured error for Russian writers.** 2.5 article errors per 100 words against a 1.5 nine-L1 average, with extra *the* the largest type (Rozovskaya & Roth 2010) [research-backed]; Russian learners in the low-accuracy article group of the CLC (Murakami & Alexopoulou 2016) [research-backed]; Russian has no articles.
- **The plural half rests on parity and countability, not on plural error data.** Murakami & Alexopoulou put plural -s in the high clusters for Russian learners [research-backed], so OTHERS.md proposed an article-only rule. But:
  - an `article` kind does not exist in validate.js and would need a new rule kind and a pipeline change;
  - the shared English `order` / `type` items were written to the Korean rule, so `article-plural` costs **zero deviations**; only the Russian `why` must name the keyword [practitioner opinion; consequence of PILOT-SPEC §1.6];
  - the countability errors that do occur (*advices, informations, the news are*, §4.6) count as hits through «исчисляемое / неисчисляемое», so the plural half still tests a real Russian problem.
- **Why not a tense rule** (`tense-aspect`, proposed in OTHERS.md, not implemented), given the Present Perfect evidence (§4.2)? It would need a new rule kind and changes to English items in up to 39 sets, each a deviation; and a tense hinge inside `articles` or `countable` would be artificial. Present Perfect gets its own lessons (`perfect`, `perfect-2`, `tense`, `narrative`), the secondary wording below, and is revisited with first-attempt logs.

**Secondary emphasis (not validated; do not add these to the regex):**
- An item that turns on tense names the tense and the reason: «Время ещё идёт (for five years) — Present Perfect.», «Есть yesterday — значит, Past Simple, не Present Perfect.»
- An item that turns on *be* names **глагол to be**: «В английском связка обязательна: She is busy.»
- An item that turns on *do* names **вспомогательный глагол do**: «В вопросе нужен вспомогательный глагол do.»
- An item with *he / it* for an object says «Для предметов — it, даже если по-русски „он“».

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in zh.md and id.md):**
- **keep** = a fresh Russian explanation from the Russian point of view; English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice; the *Russian explanation and lesson-body example rows* shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed** for the 39 shared lessons (see `pron` below for the one case considered).
- **add** = a new lesson with `deviations.json` `extraLessons` and profile.json `lessonOrder.after`. Its practice set must itself satisfy §7.

Ids and order are unchanged; nothing is replaced or dropped.

| lesson id | keep / reweight / add | note for Russian speakers |
|---|---|---|
| pron | reweight | Teach the transcription first: slashes vs the dictionary's [ ], ˈ = ударение, ː = долгота, British → American table (§6). Then the ru traps: θ / ð (not с / з), w (not в), h (not х), ɪ / iː (ship / sheep — length *and* quality), æ / e (bad / bed), voiced finals (bad / bat, bag / back: «не оглушай»), ŋ (no /g/), weak forms and stress. **Shared checks and practice stay as they are** (rice / lice, fan / pan, think / sink, vote / boat, right / light, three trees, bag, coffee, very light). Their `why` lines say plainly when a pair is easy for Russians («в русском тоже есть р и л — следи только, чтобы английский r не был раскатистым»; «ф и п ты различаешь — это разминка»), and spend the words on think, three and bag / back. *Considered, not proposed:* replacing two easy checks (fan / pan, vote / boat) with wine / vine and ship / sheep would cost two `items` deviations; the deck and body rows cover those pairs instead |
| be | reweight | Core lesson. Russian drops the present-tense связка: «Он студент» → He's a student (He student ✗); «Она занята» → She's busy. *be* + verb is the opposite error (I am agree ✗). Short answers *Yes, I am* need *be* too |
| it-there | reweight | «Холодно», «Уже поздно» have no subject in Russian → It's cold, It's late. «В комнате стол» / «Есть кафе рядом?» → There's a table in the room, Is there a cafe near here? (In the room is a table ✗): new information goes last in Russian, but English needs *there* first |
| articles | reweight | No артикли in Russian. a with jobs and "one of many" (I'm a teacher); один / какой-то ≈ a only sometimes; этот / тот ≠ always the. Preview both directions: Russian writers miss articles (42% of article errors) about as often as they add unneeded ones (37%) (Rozovskaya & Roth) |
| plurals | reweight | Light on -s (Russian marks plural; it is a relative strength). Focus on this / these, possessive 's (the room of my sister → my sister's room), *people* is plural, and pronouncing -s / -es as /s z ɪz/ with voiced /z/ (dogs ≠ docks) |
| present | reweight | Fixed SVO order vs free Russian order (Very well understand I ✗); adverb position (I very like it ✗ → I really like it); *don't* for negation (I not like ✗) |
| questions | reweight | Russian asks by intonation only («Ты любишь кофе?») → Do you like coffee?; question order after wh-words (How old she is? ✗ → How old is she?). Body note: indirect questions keep statement order (Tell me where she lives) |
| third-s | keep | Russian verbs agree with the subject too (он работает), so the idea is familiar; just make the -s audible and spelled |
| prep | reweight | Case calques: на картинке → in the picture, на встрече → at the meeting, в автобусе → on the bus, ждать кого-то → wait for, звонить кому-то → call someone (no *to*), зависеть от → depend on. at / in / on for time (в понедельник → on Monday, в 5 часов → at five) |
| countable | reweight | совет, новость, деньги, информация are countable or plural in Russian: advice, news, information, money are uncountable and singular (The news is…, Money is…). *a piece of* for one item |
| object-have | reweight | «У меня есть машина» → I have a car (By me is a car ✗). Objects are *it*, never *he / she* even when Russian says «он» / «она» (My phone… He doesn't work ✗) |
| can-like | reweight | I very like ✗ → I really like / I like it very much. like + -ing. Мне нравится (dative experiencer) → I like (subject first) |
| polite | reweight | Russian imperatives with «пожалуйста» sound fine in Russian but blunt in English: Give me a coffee ✗ → Could I have a coffee?. ты / вы vs English *you*: politeness lives in could / would. «Пожалуйста» in reply to thanks → You're welcome (not Please) |
| continuous | reweight | Light (-ing is a relative strength, Murakami & Alexopoulou). Russian imperfective ≈ both Present Simple and Continuous: «Я читаю» = I read / I'm reading. No -ing on state verbs (I'm understanding ✗) |
| past | reweight | Russian сделал and делал both → Past Simple in most contexts; aspect does not pick the tense. did + base form in questions and negatives. -ed is /t d ɪd/ and *played* ends in a voiced /d/ |
| irregular-past | keep | Russian schools drill «три формы глагола»; use that habit and spend the time on typed recall |
| the | reweight | Both directions, equal weight: second mention and shared knowledge take *the* (Close the door — the one we both see; Sun is hot ✗ → The sun), and generic nouns, abstract nouns and most country / city names take none (I like music; Life is…; in Russia — the France ✗). этот / тот ≠ always the |
| adjectives | reweight | more better ✗; enough after adjectives (smart enough, not enough smart); than + me / than I am; чем → than |
| going-to | keep | |
| tense | reweight | Recap with a table: Russian has three tenses and two aspects; English has more tenses. «Я читаю» → I read / I'm reading; «Я читал» → I read / I was reading / I've read. Time words do not choose the tense on their own |
| joining | keep | Body note only: «что» = *that* or *what* (everything what you need ✗ → everything that you need) |
| numbers | reweight | Decimal comma and space grouping (3,5; 1 000 000) vs English 3.5 and 1,000,000; dates DD.MM.YYYY vs US month/day; 24-hour time vs a.m. / p.m.; prices in rubles («five hundred rubles», no ₽ in English strings) |
| smalltalk | reweight | How are you? is a greeting, not a request for an honest report («Нормально» → Good, thanks; I'm normal ✗). Smiling and small talk with strangers are normal in the US. Avoid salary, age, politics and weight as openers. Deck localised (§9) |
| **runglish** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | |
| will | keep | Russian future «буду делать / сделаю» maps onto will, going to and the present continuous depending on intent; keep ko's contrast |
| perfect | reweight | Key lesson. Present Perfect has no Russian counterpart; teach it as "result or experience now" (Have you ever been…? I've lost my keys). Two traps, both measured: PP with a finished time (I have seen him yesterday ✗) and Past Simple / Present Simple where English wants PP (Perez-Guerra & Smirnova 2024; FIPI 2025). been to vs gone to |
| modals | reweight | должен = must / have to / should (three English verbs); надо / нужно → have to / need to; можно → can / may; не надо → don't have to (not mustn't) |
| to-ing | keep | Инфинитив / герундий are school terms |
| articles-2 | reweight | Generic plurals: «Кошки милые» → Cats are cute (not The cats…); unique *the* (the sun, the internet), which Russians often drop (Sun is hot ✗) |
| first-conditional | reweight | Russian uses the future after если / когда («Если пойдёт дождь», «Когда приеду») → If it rains / When I arrive (If it will rain ✗). The RILEC paper names *will* in conditionals as typical Russian interference (introduction only) |
| relative | reweight | который → who / which / that; Russian always puts a comma before который, English puts none in defining clauses (the man who lives next door); no pronoun repeated (the book which I read it ✗) |
| phrasal | keep | Фразовые глаголы |
| perfect-2 | reweight | «Я живу здесь пять лет» → I've lived here for five years (I live here for five years ✗ — Present Simple is the substitute in 38% of Russian cases, Perez-Guerra & Smirnova). for / since; How long have you…? |
| narrative | keep | |
| conditionals | reweight | Russian «бы» covers both present and past unreal: «Если бы я знал» = If I knew / If I had known. Teach the split by time, not by «бы» |
| passive | reweight | Russian uses -ся and impersonal plurals («Здесь говорят по-английски», «Дом строится») → English is spoken here, The house is being built. FIPI 2025 lists the passive (*is believed*) among persistent ЕГЭ difficulties |
| **articles-3** | **add** (after `passive`, before `reported`) | See below |
| reported | reweight | Согласование времён is a school term: He said he was tired (not is). Indirect questions keep statement order (She asked where I lived, not where do I live) |
| email | reweight | «Уважаемый Иван Петрович» → Dear Mr. Petrov / Hi Ivan; «С уважением» → Best regards; no name + patronymic in English; first names are normal in US work email. Shorter, warmer openings than Russian business letters |
| idioms | keep | Note calques that do not exist in English (It's not my cup of tea is fine; "to hang noodles on ears" is not) |

**Totals:** 39 existing lessons (23 A1, 9 A2, 7 B1): **10 keep** (third-s, irregular-past, going-to, joining, past-continuous, will, to-ing, phrasal, narrative, idioms) and **29 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions; A1 grows to 24 and B1 to 8. Every verdict is [practitioner opinion] grounded in §4; only articles (Rozovskaya & Roth, Murakami & Alexopoulou), Present Perfect (Perez-Guerra & Smirnova, FIPI), the passive (FIPI) and the light weighting of plurals and continuous (Murakami & Alexopoulou) have research or exam data behind them.

**Additions:**
- **`runglish`** — title «Рунглиш: ложные друзья и кальки», after `smalltalk` (end of A1), deck 21 «Ложные друзья и кальки» (§9).
  - *Content:*
    1. False friends: magazine / магазин → store, accurate / аккуратный → neat, intelligent / интеллигентный → cultured (intelligent = умный), cabinet / кабинет → office, fabric / фабрика → factory, actual / актуальный → current, brilliant / бриллиант → diamond, normal / нормально → fine.
    2. One Russian word, two English words: сказать → say / tell, делать → do / make, учить → learn / study / teach, удобный → comfortable / convenient, возможность → possibility / opportunity, полезный → useful / healthy.
    3. Calques: feel myself → feel, Thanks God → Thank God, speak freely → fluently, Moscow city → Moscow.
    4. Gender: objects are *it*.
  - *Practice that meets §7* (noun-phrase items with an article or number twin in `x`): `I bought it at the store` (x: `magazine`, `a`), `She works at a factory` (x: `fabric`, `the`), `Can I give you some advice?` (x: `advices`), `This is my office` vs `offices`, `Tell me the news` (x: `a`, `say`). Their `why` names артикль / множественное число / неисчисляемое alongside the vocabulary point.
  - *Reason:* §4.7. Lexical transfer is the one Russian-specific zone with corpus support for its categories (RILEC: 6,086 REALEC sentences with interference errors) and plenty of practitioner sources, and ko-en has no equivalent. It mirrors zh `chinglish`, id `indo-english`, ja `katakana-english` and es `false-friends`.
- **`articles-3`** — title «Артикли: итоговое повторение», blurb idea «Общее — без артикля, конкретное — с the, а исчисляемое в единственном числе — с a».
  - *Content:* both directions at B1. Zero article: generic plurals and uncountables (Cats sleep a lot; Time is money), abstract nouns (Life is short), zero-article fixed phrases (go to bed, go to work, at home, at work, by train, by bus). Article needed: *a / an* before a singular count noun with a description (an engineer who works in Moscow, an interesting article), *the* for a thing defined by a clause or phrase (The coffee you made was great), *the* with superlatives and ordinals (the best, the first) in the body.
  - *English side:* **copy ja's `articles-3` English side** (`tools/content/ja/more/b1.js`): its set tests omission (*an engineer who…*, *an interesting article*, *The coffee you made*) as well as overuse (*Time is money*, *Life is short*, *at work*, *go to bed*), which matches the Russian 42 / 37 split. zh's set was refocused on overuse (it swaps the *a / an* items for superlatives and *Education is important*), so it fits Russian less well. Copying an existing set keeps tested answers; rewrite only the Russian explanation, prompts and `why`. Optional (the lead's call): swap ja's `the coffee you made` mc for zh's `It's the best movie I've ever seen` to cover the superlative point FIPI mentions.
  - *Reason:* articles are the best-measured Russian error (2.5 per 100 words, §4.1), and Russian learners sit in the low-accuracy article cluster of the CLC (Murakami & Alexopoulou; the per-level values were not readable); ko-en stops articles at A2. The Present Perfect, the other measured zone, already has four lessons to reweight (`perfect`, `perfect-2`, `tense`, `narrative`), so a separate tense lesson would duplicate them.

**Considered, not added:**
- A Present Perfect lesson (`perfect-3`): covered by the reweights above; revisit with first-attempt logs.
- A `be` / copula lesson: the `be` lesson is already the first grammar lesson, and copula omission has no Russian-L1 count.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion]:

| ko-en | ru-en |
|---|---|
| Minji (and other Korean names) | **Anna** (main), **Max** (= Maxim); alternates Olga, Nina, Sasha, Boris. English-speaking characters keep English names |
| Seoul | **Moscow** |
| Busan | **Saint Petersburg**; alternates Kazan, Sochi. For non-Russia settings (one line per lesson at most): Minsk, Almaty, Tbilisi |
| Jeju / beach trips | Sochi, the Black Sea; abroad: Turkey, Thailand |
| Seoul National University | "a university in Moscow", generic; no real university name |
| kimchi, bibimbap | **pancakes (blini), dumplings (pelmeni), borscht, buckwheat**, tea with lemon |
| soju | non-alcoholic by default (tea, coffee, juice); no vodka jokes |
| K-pop, K-drama | genres, not artists: TV series, rock music, stand-up, video games |
| Gangnam | downtown, the city center |
| Chuseok, Korean holidays | **New Year** (the main holiday), Christmas (January 7 for many families), the May holidays, birthdays. No political or state holidays |
| 존댓말 / 반말 comparisons | ты / вы comparisons (`polite` only) |
| won (₩) | **rubles**: write `500 rubles` in English strings; never `₽` or `RUB` in English (TTS) |
| Korea / Korean (learner's own country and language: *I'm from Korea*, *Do you speak Korean?*) | **Russia / Russian** |

**Name and TTS rules:**
- **Personal names: only names the en-US voice says close to the Russian.** Anna, Max, Olga, Nina, Sasha, Boris and Vera are safe. Avoid Ivan (American TTS says EYE-van), Dmitry, Ksenia, Zhenya, Yulia, Kirill, Svetlana and anything with zh / kh / ts.
- **Surnames** only in `email` and work dialogues: Petrov, Smirnova (Mr. Petrov, Ms. Smirnova). Explain once that English has no patronymic and that *Mr. / Ms.* + surname replaces «имя + отчество».
- **Places:** only Moscow, Saint Petersburg, Kazan, Sochi (and the three alternates above), in their English spellings. Listen to each once on the engine's voice [not tested, §11].
- **Audience note:** many learners live outside Russia. Keep Russia-specific references to everyday life (food, New Year, rubles, Moscow), never to politics, the army or current events. Scenes abroad (airport, hotel, office) use the US setting of the shared English strings.

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (*Seoul, Busan, kimchi, K-pop*). **Leave the English unchanged** (parity) and translate the Russian side literally (Сеул, Пусан, кимчи, кей-поп); it reads as a learner talking about Korea. Do not file per-item deviations; if the lead wants them localised later, use one bulk deviation with the reason "localisation" (same rule as zh.md, id.md).

**Deck localisation vs parity:** any card whose English changes (*My name is Minji.* → *My name is Anna.*, *I live in Seoul.* → *I live in Moscow.*, *Korea* → *Russia*) needs a `decks` entry in `deviations.json`: one entry per deck, naming the cards and the reason «localisation per profile ru.md §9». Appended ru-only cards go in the same entry. Lesson bodies, DIALOG and EXAMPLES are not parity-checked and are localised freely. **Reuse zh where possible:** zh localised the same card positions (Li Wei, Beijing, yuan), so its deviation entries show exactly which positions change.

**Deck names (FINAL proposal).** Sentence case; «и» and commas as separators; parentheses for the travel deck; digits attached with a space («Самое нужное 1»). Rows 1–20 replace the Korean course's 20 decks in the same order. Row 21 is the ru-only deck, appended last in decks.js.

| # | Russian name | linked lesson or notes |
|---|---|---|
| 1 | **Приветствия** | greetings; no lesson links in ko-en |
| 2 | **Рассказ о себе** | articles, be, present, third-s, object-have, perfect-2 |
| 3 | **Самое нужное 1** | polite |
| 4 | **Самое нужное 2** | questions |
| 5 | **Дорога и транспорт** | the |
| 6 | **В ресторане** | countable |
| 7 | **Кафе и магазин у дома** | no lesson links; magazine / store note belongs in deck 21 |
| 8 | **Покупки и оплата** | plurals, adjectives, relative; prices in rubles for home scenes |
| 9 | **Числа, время и даты** | prep, numbers; decimal comma vs point, DD.MM vs US dates |
| 10 | **Светская беседа** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing; also `articles-3` (as zh) |
| 11 | **Эмоции и реакции** | joining, past-continuous, conditionals |
| 12 | **Комплименты и симпатия** | no lesson links |
| 13 | **Работа и деловые письма** | first-conditional, passive, email; IT / remote-team vocabulary (§9 below) |
| 14 | **Звонки и сокращения в чатах** | reported |
| 15 | **Путешествия (аэропорт и отель)** | perfect, articles-2 |
| 16 | **Врач и экстренные случаи** | modals |
| 17 | **Фразовые глаголы** | phrasal |
| 18 | **Произношение: ловушки** | pron; append ru pairs (below) |
| 19 | **Английские идиомы** | idioms |
| 20 | **Кино, сериалы и сленг** | narrative |
| 21 | **Ложные друзья и кальки** | runglish (ru-only, ≥ 20 cards; needs a `decks["count"]` deviation) |

**Deck content changes** [practitioner opinion unless noted]:
- **Add deck 21 «Ложные друзья и кальки»** (≥ 20 cards, linked to `runglish`). Each `note` says «ложный друг» or «калька» and gives the Russian source:
  - store (магазин; magazine = журнал), factory (фабрика; fabric = ткань), office (кабинет; cabinet = шкаф), neat / tidy (аккуратный; accurate = точный), smart (умный; intelligent ≠ интеллигентный), current (актуальный; actual = настоящий), diamond (бриллиант), fine (нормально);
  - tell me (сказать мне), make coffee (сделать кофе), study at university (учиться), convenient time (удобное время), opportunity (возможность), healthy food (полезная еда);
  - I feel well (чувствую себя), Thank God, speak fluently (свободно), friend vs girlfriend (подруга), in the picture (на картинке), depend on (зависеть от).
- **«Произношение: ловушки»:** keep the shared pairs; append ru pairs as new cards (not by changing shared targets): ship / sheep, wine / vine, west / vest, bad / bat, dog / dock, house (h), sing / singing (ŋ), think / sink is already there, comfortable (stress), development (stress).
- **«Работа и деловые письма»:** meeting / call, deadline, schedule, invoice, remote work, team, client; general office English that IT and relocated learners use daily, no programming jargon. Replace «Уважаемый…» / «С уважением» habits with Hi / Dear and Best regards.
- **«Путешествия»:** departures from Moscow Sheremetyevo or a generic "airport"; tipping (customary in the US, optional in Russia); visas as a neutral travel fact.
- **«Звонки и сокращения в чатах»:** keep the English (LOL, BTW); explain with Russian chat equivalents (ахаха, кстати, спс).
- **Meanings:** `nativeScript` is Cyrillic, so meanings only need a Cyrillic letter; no loanword-collision workaround is needed (unlike id). Still give real Russian glosses, not transliterations («ноутбук», not «лэптоп»; «электронная почта» or «имейл»).

## 10. Interface wording notes

These rules are [curriculum convention / practitioner opinion]. The Microsoft Russian style guide PDF could not be read (binary), so they rest on the sources in §2, one translation guide and local `Intl` checks (§11).

**Register:** ты, used sparingly (§2). Impersonal statements for states and results; ты for instructions and praise; never «Вы».
- Toasts and empty states: «Сохранено», «На сегодня всё повторено!», «Дней подряд: {1}. Так держать!» (count wording below).
- Errors: plain and blame-free: «Не удалось синхронизировать. Попробуй ещё раз».

**Buttons, menu items, chips:** infinitive, sentence case, no full stop, no «пожалуйста»: «Начать», «Продолжить», «Проверить», «Отправить», «Сохранить», «Отмена», «Назад», «Пропустить», «Ещё раз», «Далее», «Закрыть». CTAs ≤ 16 characters where possible («Начать урок», «Открыть уроки»). Ongoing states: «Синхронизация…», «Загрузка…».

**Practice instructions** (imperative to ты, one verb per item type): «Выбери правильный ответ», «Собери предложение», «Вставь пропущенное», «Напиши по-английски».

**Tab bar (7 tabs share 390px, each ≤ 8 characters).** The brief lists Today, Practice, Review, Lessons, Drills, Progress, Feedback; the bottom nav in keys.json uses **Read** where the brief says Drills ("Drills" is a separate short label). Both are given.

| English | Russian label | Chars | Fallback (≤ 7) |
|---|---|---|---|
| Today | Сегодня | 7 | — |
| Practice | Практика | **8** | Задания (7) |
| Review | Повтор | 6 | — |
| Lessons | Уроки | 5 | — |
| Read (nav) | Чтение | 6 | — |
| Drills (label) | Тренажёр | **8** | Тренинг (7) |
| Progress | Прогресс | **8** | Успехи (6) |
| Feedback | Отзыв | 5 | — |

- id.md's post-review note says an 8-letter label (*Kemajuan*) did not fit at 390px, and Cyrillic capitals and ж ш щ ы ю м are wide. **The lead must check «Практика» and «Прогресс» in a real layout**; if either overflows, use the fallback on the tab only and keep the full word everywhere else.
- «Повтор» (tab) and «повторение» (prose) are the same concept; «Повторить» is the button.

**Counts: one translation per pattern, so no plural forms in the template** (PHASE2-BRIEF, last section). Russian needs three forms (1 карточка / 2 карточки / 5 карточек; CLDR `one` 1, 21, 101; `few` 2–4, 22–24; `many` 0, 5–20, 25…; `other` 1.5 — checked locally with `Intl.PluralRules('ru')`, ICU 78.3), and an adjective or past-tense verb before the number must agree too. Three number-neutral devices only:
1. **Label in the genitive plural + colon + number:** «Карточек: {1}». Reads correctly at every number («Карточек: 1», «Карточек: 21», «Карточек: 5»). This is the standard Russian UI way to show counts [practitioner opinion; no style guide could be read].
2. **Neuter impersonal word + colon:** «Осталось: {1}», «Выучено: {1}», «Новых: {1}», «Закрыто: {1}», «Выбрано колод: {1}».
3. **An abbreviation that does not inflect:** «{1} мин», «{1} с», «{1} дн.», «{1} КБ», «{1} XP», «{1} %».
- Ordinal and "N of M" patterns need nothing special: «Карточка {1} из {2}», «Неделя {1} из {2}», «Раунд {1} из {2}», «Уровень {1}», «Урок {1}».
- **Never** write a noun right after the slot («{1} карточек», «{1} дня»), and never an agreeing word before it («{1} новых карточек», «Осталась {1}»).
- keys.json has separate singular and plural English templates (`{n} day` / `{n} days`, `{n} card` / `{n} cards`, `… in {n} day.` / `… in {n} days.`). **Give both the identical neutral wording**, because the "plural" one also fires at 21, 22, 101.
- Writers must render each count string at **1, 2, 5 and 21** before submitting.

Counted nouns and their label forms (use exactly):

| English in keys.json | Russian label form | Sample render |
|---|---|---|
| card(s) | Карточек: | «Карточек: 21» |
| cards due / due | К повторению: | «К повторению: 3» |
| deck(s) | Колод: | «Колод: 4 · карточек: 260» |
| day(s) | Дней: / (streak) Дней подряд: | «Дней подряд: 1» |
| week(s) | Недель: | «План готов. Недель: 6.» |
| lesson(s) | Уроков: | «Уроков пройдено: 5/39» |
| review(s) | Повторений: | «Повторений: 50 · верно: 85 %» |
| point(s) / pts | Очков: | «Очков: 120» |
| XP | {1} XP | «120 XP», «Опыт сегодня: 30 XP» |
| round(s) | Раундов: / Осталось раундов: | «Осталось раундов: 2» |
| row(s) | Строк: | «Строк: 12 · новых: 3» |
| item(s) | Заданий: | «Заданий: 14 · от выбора до ввода» |
| run(s) / tried | Попыток: | «Лучшая первая попытка 80 % · попыток: 3» |
| question(s) (`q`) | Вопросов: | «85 % · вопросов: 12» |
| quiz(zes) | Тестов: | «Тестов: 1 · последний 80 %» |
| answered | Ответов: | «Ответов: 20 · лучшая серия ×5» |
| ×missed | Ошибок: | «Ошибок: 3» |
| seen ×N | Показов: | «Показов: 4» |
| prediction(s) | Прогнозов: | «Прогнозов: 40 · …» |
| pattern(s) | Конструкций: | «📚 Справочник грамматики · конструкций: 24» |
| dialogue(s) | Диалогов: | |
| badge(s) | Значков: | «Недельных значков: 2» |
| new / new cards/day | Новых: / Новых в день: | «Новых в день: 10» |
| left | Осталось: | «Осталось: 7 · колод: 3» |
| learned | Выучено: | «Выучено: 40/260» |
| locked | Закрыто: | «🔒 Закрыто: 5» |
| selected | Выбрано колод: | «Выбрано колод: 2» |
| imported / added | Импортировано карточек: / Добавлено, в «Моих фразах»: | «Импортировано карточек: 15.» |
| planned more lessons | Запланировано ещё уроков: | |
| minutes / seconds / KB | {1} мин / {1} с / {1} КБ | «5 мин», «Отправить ещё раз ({1} с)» |
| "next due in N days" | через {1} дн. | «Сейчас повторять нечего. Следующие — через 3 дн.» |
| "~N days of new cards" | новых карточек примерно на {1} дн. | |

**Language-name slots.** The engine fills `{x}` with the dictionary form from `Intl.DisplayNames('ru')` («английский», checked locally) and **capitalises the first letter** (`langName` in `src/app.html`: `charAt(0).toLocaleUpperCase`), so the slot always arrives as «Английский». Rules:
- Put the slot **at the start of the sentence** («Английский: …») or **as the value after a colon in a label line** («Курс: Английский»). Both read naturally with a capital and need the nominative.
- **Never after a preposition or in an oblique case:** «на {1}», «по-{1}», «для {1}», «знаешь {1}» (a capital mid-sentence looks wrong even where the case happens to work).
- Never in parentheses mid-sentence (capital inside a sentence).

| keys.json template | Russian (renders as) |
|---|---|
| Change language · {x} | `Сменить язык · {1}` (→ Сменить язык · Английский) |
| Now learning {x} · progress saved per course | `Курс: {1} · прогресс сохраняется для каждого курса` |
| How much {x} do you know? | `{1}: какой у тебя уровень?` |
| What do you want {x} for? | `{1}: для чего он тебе?` |
| type it in {x} | `Язык ответа: {1}` |
| Type in {x}… | `Язык ответа: {1}…` |
| Type the {x}, or tap Check again to give up. | `Язык ответа: {1}. Напиши ответ или снова нажми «Проверить», чтобы сдаться.` |
| No {x} keyboard? Use tiles | `{1}: нет раскладки? Выбирай из плиток` |
| Learning {x} 5 minutes a day with Lang App {x} | `{1} — по 5 минут в день с Lang App {2}` |
| Learn {x}, 5 minutes a day | `{1} — по 5 минут в день` |

The interface writer may shorten these, but must keep the slot at the start or after a colon.

`profile.json` `name.ru` = **«Английский»** (capitalised): the course list in `src/app.html` shows the pack's `name[uiLang]` **standalone** as a row label, where a lower-case «английский» would look wrong. (The slot value comes from `Intl`, not from this field.)

**UI glossary (use exactly):**

| English UI term | Russian |
|---|---|
| lesson / lessons tab | урок / Уроки |
| practice (set) | практика (набор заданий: «Практика к уроку») |
| review (SRS) | повторение; tab «Повтор»; button «Повторить» |
| deck | колода |
| card | карточка |
| streak | серия; in counts «Дней подряд: {1}» |
| hint | подсказка |
| check (3-question lesson quiz) | мини-тест; button «Проверить» |
| correct / incorrect (feedback) | «Верно!» / «Неверно» |
| answer / explanation (`why`) | ответ / пояснение |
| try again | ещё раз |
| multiple choice | выбор ответа (**never «множественный выбор»**, §7) |
| word tiles (order) | собери предложение; tiles = плитки |
| gap-fill | вставь пропущенное (label «Пропуск») |
| typed sentence | напиши по-английски (label «Перевод») |
| drills | тренажёр |
| session | занятие («Начать занятие») |
| level / XP | уровень / XP (опыт) |
| pronunciation toggle | «Показывать транскрипцию» (replaces "romanization") |
| listen / play | «Прослушать» |
| due today | к повторению сегодня |
| progress | прогресс |
| feedback | отзыв; page «Отправить отзыв» |
| settings / sign in / sign out / sync | настройки / войти / выйти / синхронизация |

**Numbers, dates and time** (`Intl` with `ru-RU`, checked locally in Node, ICU 78.3; never hand-format):
- Numbers: «1 234 567,5» — **no-break space** (U+00A0) as group separator, also at four digits («1 234»); decimal comma.
- Percent: «85 %» with a no-break space, as `Intl` prints it. In hand-written templates write «{1} %» with U+00A0 so both agree.
- Currency: «500,00 ₽» from `Intl` in UI; never in English course strings (§9).
- Dates: long «17 ноября 2026 г.», short «17.11.2026», day + month «17 ноября», weekday «вт» / «вторник» (lower case; do not capitalise months or weekdays mid-sentence).
- Time: 24-hour «21:05».

**Fonts (engine, not content):** the app's web fonts do not cover Cyrillic: DM Sans (`--body`) supports Latin Extended only ([Fontsource](https://fontsource.org/fonts/dm-sans/about)); DM Mono is the same family [not checked]; Noto Sans KR (`--display`) would draw any Cyrillic it has in Korean-font metrics [not checked]. Mixing fonts inside one word is worse than a plain system font. Follow the vi precedent in `src/app.html`:
- `html[lang=ru]{--body:system-ui,-apple-system,'Segoe UI',Roboto,'Noto Sans','Helvetica Neue',Arial,sans-serif;--display:var(--body);--mono:ui-monospace,'SF Mono',Menlo,Consolas,'DejaVu Sans Mono','Roboto Mono',monospace}`.
- All of these system faces include Cyrillic, and the mono stack is the one the IPA courses use, so transcription and Russian stats render in one face [practitioner opinion; general knowledge, not checked on device].
- Russian words are long: the engine should allow `hyphens: auto` under `lang="ru"` for body text (not for buttons or tabs). Russian UI text runs about 15–25% longer than English (OTHERS.md, unverified); the i18n validator's 1.6× / 14-character warning will fire on some buttons, so check «Показывать транскрипцию» (a settings row, not a button) and «Отправить отзыв».

**Language name** in prose: «английский» / «английский язык», «русский» (lower case mid-sentence); `Intl.DisplayNames('ru')` gives «английский», «русский», which the engine capitalises in slots.

**Feedback marks:** ✓ «Верно!» / ✗ «Неверно». Always pair a mark with text.

## 11. Gaps and unverified claims

- **Blocked, unreadable or partial sources:**
  - Microsoft Russian localisation style guide: binary PDF, not read. So the ты decision, button forms, the count-label convention and typography rest on app store pages, one translation guide (Onetime Secret) and convention.
  - FIPI 2025 ЕГЭ report: first 100,000 of 150,414 characters read.
  - Murakami & Alexopoulou 2016: Russian per-morpheme accuracies are in Figure 3, which the fetch could not read; only cluster placements and the pooled article effect are used. Table 3 was "hard to parse" in the summary.
  - Google Fonts CSS for the app's fonts: not on the allowlist; DM Sans coverage comes from Fontsource only.
- **How sources were read:** every web figure was read through the fetch tool's summary, not the original PDF. Check key numbers (Rozovskaya & Roth Table; Perez-Guerra & Smirnova frequencies and substitution shares; EF skill scores; FIPI participant counts) before quoting them in app copy.
- **Small, qualitative or indirect evidence:**
  - Rozovskaya & Roth 2010: 10,844 words of Russian essays (small; written).
  - Kondaurova & Francis: 19 Russian listeners, perception only, read as a conference abstract.
  - Kolesnichenko & Kapitan 2025: 25 students, segmental deviations listed qualitatively, no rates.
  - Dmitrieva et al. 2010: Russian devoicing in Russian, not in L2 English; used as background only.
  - Kharlamova & Proskurina 2026: arXiv preprint; categories without counts; articles and the Present Perfect are explicitly outside its scope.
  - Perez-Guerra & Smirnova 2024: university argumentative essays; 29 errors in a 500-example sample.
- **No fetched Russian-L1 source** for: copula omission, questions without *do*, double negation, *there is / are* vs topic-last order, sequence of tenses, *he / she* for objects beyond one blog, /ŋ/, palatalisation, unaspirated stops beyond one practitioner page, *magazine / accurate / fabric* (lore only). All tagged [practitioner opinion]. Swan & Smith's "Russian speakers" chapter remains unread.
- **School and exam facts not verified from primary sources:** compulsory foreign language from primary school, the use of IPA transcription in school textbooks (*Spotlight*), the school terms «общий / специальный вопрос», «согласование времён», «три формы глагола», ОГЭ status. The Мел page found on transcription was about Russian-language lessons and is not used. That adults still read IPA is **assumed** — the whole §6 policy depends on it, as in zh; test it with the toggle-off rate or a one-question survey.
- **IELTS / TOEFL status:** the suspensions come from The PIE News, which gives no year (2022 is from search-result dates); whether any test is available inside Russia in 2026 was not checked.
- **Register:** the brief's premise that most adult learning apps use ты was not confirmed. Three store descriptions use вы; in-app mascot copy uses ты. The ты choice is a product decision (§2); a lead preferring вы can flip it, and the impersonal-first rule keeps that flip small (button infinitives and most labels do not change).
- **EF EPI:** self-selected online test; the 2025 overall score was garbled ("52") and the secondary table in OTHERS.md (532, rank ≈44) disagrees with the sheet's rank 49. A 2026-folder sheet exists and was not read.
- **Interface:** the 8-character labels «Практика», «Прогресс», «Тренажёр» are unmeasured at 390px; «Тренажёр», «Повтор», «колода» and «мини-тест» are proposals, not checked against major Russian apps. Whether system fonts render ‖ and IPA well on Windows and Android was not tested.
- **TTS names and places** (Anna, Max, Olga, Moscow, Kazan, Sochi, Petrov, Smirnova) were not tested on the engine's voice.
- **Pron aid:** no study compares IPA, Cyrillic respelling and no aid for Russian learners. Copying zh's IPA inherits zh's §11 caveats (OALD NAmE notation from memory; ˈ on every content word is a design choice).
- **Not researched:** Russian speakers in Ukraine, the Baltics or Central Asia whose other language may change transfer; Belarusian / Kazakh bilingual effects; adult self-study app usage data in Russia.

## Sources

- [Rozovskaya & Roth 2010, Annotating ESL errors: challenges and rewards (article and preposition error rates by L1, incl. Russian)](https://cogcomp.seas.upenn.edu/papers/RozovskayaRo10a.pdf)
- [Murakami & Alexopoulou 2016, L1 influence on the acquisition order of English grammatical morphemes (Cambridge Learner Corpus)](https://core.ac.uk/download/42340394.pdf)
- [Perez-Guerra & Smirnova 2024, L1 influence on the use of the English Present Perfect: Russian and Spanish learners' essays (Journal of Language and Education 10(1))](https://jle.hse.ru/article/download/16720/18643)
- [Kharlamova & Proskurina 2026, RILEC: Detection and generation of L1 Russian interference errors in English learner texts (arXiv 2603.07366)](https://arxiv.org/html/2603.07366v1)
- [FIPI 2025, Методические рекомендации по ЕГЭ по иностранным языкам (английский)](https://doc.fipi.ru/ege/analiticheskie-i-metodicheskie-materialy/2025/aya_mr_2025.pdf)
- [Kondaurova & Francis, Russian and English listeners' use of duration and spectral cues for the beat–bit contrast (MCWOP abstract)](https://linguistics.northwestern.edu/about/events/past%20conferences/mcwop10/kondaurova.txt)
- [Kolesnichenko & Kapitan 2025, Intelligent approaches to computer testing of perception and production skills of Russian EFL speakers (JLE 11(2))](https://jle.hse.ru/article/download/19916/22639)
- [Dmitrieva, Jongman & Sereno 2010, Phonological neutralization by native and non-native speakers: the case of Russian final devoicing (J. Phonetics)](https://kuppl.ku.edu/sites/kuppl/files/documents/publications/Dmitrieva_Jongman_Sereno_phon_neutralization_JPhon_2010.pdf)
- [EF EPI 2025 fact sheet, Russia](https://www.ef.com/assetscdn/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-russia-english.pdf)
- [The PIE News, English language testing providers pull out of Russia (2022)](https://thepienews.com/english-language-testing-providers-pull-out-of-russia/)
- [Pronunciation Studio, 10 English pronunciation errors by Russian speakers](https://pronunciationstudio.com/russian-speakers-english-pronunciation-errors/)
- [llexi, Common English errors by Russian speakers](https://llexi.com/l1-errors/common-english-errors-russian-speakers/)
- [Talk.edu, Most common grammar errors that Russian speakers make when speaking English](https://blog.talk.edu/?p=26399)
- [Verbling, From Slavic languages to English: the common difficulties](https://www.verbling.com/articles/post/from-slavic-languages-to-english-the-com)
- [Лайфхакер (Л. Леднёва, 2016), Русские и английский: 20 ошибок, которые выдадут вас за границей](https://lifehacker.ru/20-mistakes-in-english/)
- [Лайфхакер, Ложные друзья переводчика](https://lifehacker.ru/lozhnye-druzya-perevodchika/)
- [Online Teachers UK, Russian mistakes in English: confusing words](https://onlineteachersuk.com/russian-mistakes-in-english-confusing-wor/?nonamp=1)
- [Skyeng, Транскрипция английских слов (IPA, brackets, stress and length marks)](https://skyeng.ru/articles/transkriptsiya/)
- [Univext, Основы английской грамматики: руководство для начинающих (Russian grammar terms, tense names in English)](https://univext.com/ru/blog/458/osnovy-angliyskoy-grammatiki-rukovodstvo-dlya-nachinayushchikh)
- [Duolingo, App Store description in Russian (вы)](https://apps.apple.com/us/app/duolingo-%D1%83%D1%80%D0%BE%D0%BA%D0%B8-%D0%B8%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE/id570060128?l=ru)
- [Lingualeo, App Store description in Russian (вы; ты in LeoNews)](https://apps.apple.com/ru/app/480952151)
- [Lingopanda, App Store description in Russian (вы)](https://apps.apple.com/ru/app/lingopanda-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%81-%D0%BD%D1%83%D0%BB%D1%8F/id1601635471)
- [Т—Ж, Почему все боятся сову Duolingo (quotes the owl's ты copy)](https://t-j.ru/why-be-afraid-of-duo/)
- [Onetime Secret, Russian translation notes (вы, plural forms, infinitive buttons)](https://docs.onetimesecret.com/ru/translations/language-notes)
- [Microsoft terminology blog 2011, New writing style in Russian Microsoft products](https://learn.microsoft.com/en-us/archive/blogs/terminology/new-writing-style-in-russian-microsoft-products)
- [Fontsource, DM Sans (Latin Extended glyph set only)](https://fontsource.org/fonts/dm-sans/about)
- Opened but not used as evidence: [Мел, Зачем детей в школе мучают транскрипцией (about Russian-language lessons)](https://mel.fm/vopros--otvet/otvechayet-pedagog/9735104-zachem-detey-v-shkole-muchayut-transkriptsiyey-slov-ona-zhe-tolko-putayet).
- Local: `/home/claude/docs/profiles/zh.md`, `vi.md` (skimmed: headings, §10 tab-bar note, sources; the vi font precedent was read in `src/app.html`), `id.md` (incl. its post-review tab-bar note), `OTHERS.md` (Russian section; secondary EF figure), `/home/claude/reports/Grammar learning order research.md`, `/home/claude/docs/PILOT-SPEC.md`, `PIPELINE.md`, `PRACTICE-SPEC.md`, `PHASE2-BRIEF.md`; `/home/claude/tools/content/lib.js` (ORDER, `orderFor`, `nativeTester`), `validate.js` (`pronScript`, `article-plural`), `ko/` (lessons, `pron` checks and practice, decks), `zh/profile.json`, `zh/PRON-RULES.md`, `zh/decks.js` / `lessons.js` / `more/` (IPA copied for the worked examples; 356 of 366 ko card targets present, 325 `{{ex}}` rows), `ja/more/b1.js` and `zh/more/b1.js` (`articles-3` English sides compared), `id/profile.json`; `/home/claude/tools/i18n/keys.json` (count and language-name patterns, nav keys); `/home/claude/src/app.html` (fonts, `langName` capitalisation; read-only); `/home/claude/packs/course-ko-en.js` (0 Cyrillic characters, 0 ˈ). Local Node checks (ICU 78.3): `Intl.PluralRules('ru')`, `ru-RU` number / date / percent / currency formats, `Intl.DisplayNames('ru')`, the standing-rule regex on 12 sample lines, `pronPattern` on the worked examples, `orderFor` with this profile (41 lessons; `runglish` at 23, `articles-3` at 37).
