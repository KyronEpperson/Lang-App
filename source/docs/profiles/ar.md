# Arabic speakers learning English — course profile

Course `ar-en`. Audience: Arabic-speaking adults and older teenagers across the Gulf, the Levant, Iraq, Egypt and Sudan, and the Maghreb, plus Arabic speakers abroad. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **Modern Standard Arabic (الفصحى المعاصرة), in Arabic script, right to left**. Answers and examples are in English. The HTML language tag is `ar` and the document direction is `rtl` (the engine already sets `dir` from `RTL_LANGS` and has `html[dir=rtl]` rules, §10). profile.json has `native: "ar"`, the pack is `course-ar-en` and the interface pack is `i18n-ar`. The course is built from the Korean-speakers' course (`ko-en`), like zh, vi, id, hi, th and ru.

**Evidence labels** follow `reports/Grammar learning order research.md`:
- **[research-backed]**: a study or dataset opened for this profile, named, with its sample. "Abstract only", "catalogue record only" or "secondhand" is stated when the full paper was not read.
- **[curriculum convention]**: what Arabic-language English textbooks, prep sites, exam bodies, ministries or localisation style guides do.
- **[practitioner opinion]**: a teacher's, school's or author's stated view with no data behind it, or this profile's own inference (marked "inference").

Untagged rules in §6–§10 are design decisions, not findings. Every web figure was read through the fetch tool's summary of the page, not by reading PDFs directly; check key numbers against the originals before quoting them in app copy.

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`). Explanations in neutral Modern Standard Arabic, right to left, no dialect words. **No gendered address:** lesson bodies use the textbook «نحن» («نستخدم a قبل…»), buttons and instructions use verbal nouns («بدء الجلسة», «التحقق», «اختيار الإجابة الصحيحة»). Grammar terms are the Arabic school ones (أداة التعريف، أداة التنكير، صيغة الجمع، المضارع التام).
- **Top measured errors** (four counted studies: three Saudi, one Libyan; plus a qualitative Jordanian one): spelling (12–34.5%), capitals and punctuation, agreement (16.2%), tense (6–58%), prepositions (up to 23%) and articles (7.5–20%). The two Arabic signatures, **missing *a / an* with *the* on general nouns** and ***be* left out (*He tall*) or put in (*She is study*)**, follow from Arabic structure; *be* has examples but no count anywhere.
- **Pronunciation:** /p/ → /b/ (*bark my car*), /v/ → /f/, vowels inserted into clusters (measured: final CCC 67% errors, mostly epenthesis), *bit / bet* (hard) rather than *ship / sheep* (easy, since Arabic has long vowels), ŋ, silent letters.
- **Pronunciation aid: IPA, required, exactly as the Chinese course writes it**; most transcriptions copy from `tools/content/zh/` under `PRON-RULES.md`. An Arabic-script respelling cannot write /p v/ or short vowels and would encode the main errors.
- **Standing rule: `article-plural`**, keywords `أداة التعريف|أداة التنكير|أداتا التنكير|أداتي التنكير|أداة تعريف|أداة تنكير|صيغة الجمع|معدود` (bare «جمع» excluded: الجمعة). Zero parity cost. *be* is re-tested through `why` wording, lesson-body rows and the ar-only `be-2`.
- **Curriculum:** all 39 ids kept, none with English-side changes (the shared `pron` checks already test *fan / pan*, *vote / boat*). Two additions: `be-2` (after `tense`) and `arabic-traps` (after `smalltalk`, with deck 21 «فخاخ الترجمة الحرفية»).
- **Learners:** EF EPI 2025 fact sheets: Saudi Arabia 404, Iraq 406, Egypt 458 (global 488); the Levant, Maghreb and UAE score higher. **Writing is the weakest skill everywhere** (Saudi 295), so typed items matter most.
- **Interface:** every count pattern is number-neutral, «البطاقات: {1}» (Arabic has six plural categories). Western digits, Gregorian dates with `Intl` month names («18 نوفمبر 2026»), no direction marks, tatweel or harakat, and no English full stop at the end of an Arabic line (rendered: it jumps to the left); the slot «الإنجليزية» sits after a colon, at the start, after «اللغة» or after a free-standing preposition.

## 2. Variant, register and voice

**Variant: American English** [practitioner opinion, decision].
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The IPA key in §6 is the zh key, which uses American values.
2. Arabic-speaking learners meet both varieties. Saudi, Gulf and Egyptian school English and IELTS preparation are often British-flavoured, while media, games and much workplace English are American [practitioner opinion].
3. Mention a British form only in a card `note` («في الإنجليزية البريطانية: flat»), never as an accepted answer.

**Register: neutral Modern Standard Arabic, clear and friendly, no dialect** [practitioner opinion, decision; partly curriculum convention].
- MSA is the only written standard shared by all Arab countries; Onetime Secret's Arabic translator guide calls it "Professional language suitable for all Arabic-speaking regions" ([Onetime Secret](https://docs.onetimesecret.com/ar/translations/for-translators/)) [curriculum convention].
- **Prefer words that are MSA in every region.** Avoid words that are MSA but read as one country's usage when a neutral one exists: «الهاتف المحمول» or «الجوال / الموبايل» → use **«الهاتف»**; «تلفاز / تلفزيون» → «التلفاز»; month names follow §10. Never dialect forms (مش، عايز، شو، ليش، بدّي، واجد، برشا) in app text; a lesson body may quote one only to name it as dialect.
- **Short, plain sentences.** MSA textbook prose easily becomes heavy (long إضافة chains, «إنّ» openings, «حيث» as an all-purpose connector). Lesson bodies use short sentences, one idea each, and everyday vocabulary [practitioner opinion].
- **No gendered address to the learner** (decision; full rules in §10). Arabic second-person verbs, imperatives and adjectives are gendered (اختر / اختاري, أنت مستعد / مستعدة). The app does not know the learner's gender, so:
  - **Lesson bodies and `why` lines speak in the first person plural, the textbook "we"**: «نستخدم a قبل…», «نقول في الإنجليزية: …», «لا نضع is قبل فعل آخر». Arabic grammar explanations use this voice routinely, e.g. «نستخدم صيغة المضارع للتعبير عن عادات أو حقائق ثابتة» ([St-Takla, verb to be](https://st-takla.org/learn-languages/english/grammar-rules/verb-to-be.html)) [curriculum convention].
  - **Buttons, labels and instructions use verbal nouns (المصدر)**: «بدء الجلسة», «التحقق», «حفظ», «اختيار الإجابة الصحيحة». Proton's Arabic guidance: "For neutral or instructional content, use the infinitive form", and "When possible, avoid the use of masculine singular form to refer to someone whose gender is unknown" ([Proton](https://localize.proton.me/t/guidance-for-arabic/3339)) [curriculum convention].
  - **Counter-view, recorded:** EF's Arabic grammar pages address the reader with the masculine imperative («استخدِم an مع الكلمات التي تبدأ بحرف متحرك…», [EF](https://www.ef.com/wwar/english-help/english-grammar/indefinite-articles/)), which is what most Arabic apps do, and Arabeyes' standard keeps the imperative where "the system is the one expecting the user to provide input" ([Arabeyes standards §3.3](https://arabeyes.org/download/documents/misc/doc_standards-en/standards.html)). This profile chooses verbal nouns because they are equally idiomatic in Arabic UI («إرسال», «إلغاء» in Onetime Secret's button table), and they exclude no one.
  - **Plural address rejected** («اختاروا», «أنتم مستعدون»): it reads as speaking to a group in a one-person app, and the masculine plural is itself the masculine default for mixed groups (Proton: "Apply the masculine form when … [it] refers to multiple nouns"), so it hides the problem rather than solving it.
- **The app refers to itself** only on the feedback page, with «نحن» forms («يسعدنا سماع رأيك»), which are gender-neutral.
- **Inside translations** (card meanings, `{{ex}}` meanings, dialogue translations, practice `p`) the Arabic follows the English sentence, not the learner:
  - Unvocalised Arabic hides gender in many second-person forms: «كيف حالك؟», «شكرا لك», «هل رأيت الفيلم؟» are the same letters for both genders. Use such forms freely.
  - Where spelling differs (imperatives اذهب / اذهبي, present-tense تذهب / تذهبين, adjectives طالب / طالبة), follow the gender in the English context (*my sister* → feminine). With no context, **use the masculine form, as Arabic grammar's default for an unknown referent**. This is a translation choice, not an address to the learner, and a `note` may add «(وللمؤنث: …)» where the card teaches a phrase said to a woman.
  - *I* → «أنا», *he* → «هو», *she* → «هي», *they* → «هم» (or «هن» when the English context is all female). *you* (plural) → «أنتم».
  - Politeness: *please* → «من فضلك» (letters identical for both genders); *Thank you* → «شكرا» or «شكرا لك».

Three sample sentences in the voice:
- «في العربية نقول "هو طويل" بلا فعل، أما في الإنجليزية فلا بد من is: He is tall.»
- «العربية فيها أداة التعريف "ال" فقط، وليس فيها أداة تنكير مثل a، لذلك ننسى a كثيرا قبل المفرد: I'm a teacher.»
- «الكلام العام بلا أداة تعريف في الإنجليزية، حتى لو قلنا في العربية "التعليم مهم": Education is important.»

**Mixing English, IPA and digits into Arabic text: one rule set, applied everywhere** (bidirectional details in §10).
- **English inside Arabic stands bare**, separated by a normal space on both sides: «نضيف s إلى الفعل», «بعد two نستخدم صيغة الجمع». In lesson HTML, English examples are wrapped in `<b>` (the engine isolates `.lbody b` with `unicode-bidi: plaintext`); in plain-text fields (`q`, `p`, `why`, `hint`, card `note`) English is bare and the bidi algorithm orders it.
- **No invisible direction marks.** Never type U+200E (LRM), U+200F (RLM), U+061C (ALM), U+202A–U+202E or U+2066–U+2069 in content or UI strings. The engine isolates English, IPA and answer tiles itself (§10). Marks break keyword matching, deck-name lookups and the "same English" checks, and they are invisible to reviewers.
- **Arabic punctuation in Arabic text:** comma «،» (U+060C), question mark «؟» (U+061F), semicolon «؛» (U+061B). English text keeps its own punctuation (`I'm a student.`).
- **Quoting Arabic** phrases: double quotes "…" or guillemets «…», one system throughout the course (this profile uses "…" inside Arabic content, so «» stays free for the UI's own quoting of English button names, §10).
- **Error marks:** ✗ for wrong, ✓ for right. **No arrows** in Arabic text: → points backwards for a right-to-left reader and ← looks wrong next to left-to-right English. Write `I'm teacher ✗` then «والصواب:» `I'm a teacher ✓`, or put the two forms on separate lines or table rows.
- **Alternatives** are separated by ` / ` (spaced), as in ko-en.
- **Digits:** Western digits (0–9) everywhere, never Arabic-Indic (٠١٢٣) (§10 gives the reasoning and the counter-evidence).
- **Encoding:** NFC; hamza always written (أداة, not اداة; إلى, not الى); ة and ه kept distinct; final ي and ى kept distinct (على, في); no tatweel (ـ); no harakat or tanween (شكرا, جدا, أيضا), except where a lesson body needs them to show a sound (§10).

## 3. Glossary

Use these terms **exactly and consistently** in lesson bodies, `why`, `hint`, deck names and the UI. "Fetched" means the term was seen on a fetched Arabic page: EF's Arabic grammar pages on [indefinite articles](https://www.ef.com/wwar/english-help/english-grammar/indefinite-articles/), the [definite article](https://www.ef.com/wwar/english-help/english-grammar/definite-article/) and [countable nouns](https://www.ef.com/sa/english-help/english-grammar/countable-and-uncountable-nouns/); [Mawdoo3 on the present perfect](https://mawdoo3.com/شرح_زمن_المضارع_التام); [St-Takla on verb to be](https://st-takla.org/learn-languages/english/grammar-rules/verb-to-be.html); and [Univext's list of common errors](https://univext.com/ar/blog/452/akhta-injliziya-shaya). Those are prep and reference sites, not ministry textbooks. Unmarked terms are [curriculum convention] from common Arab ELT usage and were not verified on a fetched page (§11).

**Rule:** name grammar in Arabic, with the English label in parentheses on first mention in a lesson body: «المضارع التام (Present Perfect)». Afterwards use the Arabic term alone. Tense names are Arabic (المضارع البسيط), as on every fetched page; the English names stay only as the first-mention gloss.

**Standing-rule keywords are marked** (§7). Write them exactly as shown: with hamza, ة, no harakat, no tatweel, no prefix glued inside the phrase.

| English term | Arabic term (use this) | Note |
|---|---|---|
| article (English) | **أداة التعريف the / أداتا التنكير a و an** | There is no common single Arabic word for "article" that covers both; name the article: «أداة التعريف the», «أداة التنكير a». Fetched: «أداة التعريف», «أدوات التنكير», «أداتيّ التنكير». **Keywords «أداة التعريف», «أداة التنكير», «أداتا التنكير», «أداتي التنكير», «أداة تعريف», «أداة تنكير»** |
| definite article | **أداة التعريف** (the) | Fetched (EF: «وهي أداة التعريف الوحيدة في اللغة») |
| indefinite article | **أداة التنكير** (a / an); dual «أداتا التنكير» (nominative), «أداتي التنكير» (oblique) | Fetched as «أدوات التنكير» (EF heading). Prefer the singular with the word itself: «أداة التنكير a» |
| zero article | بلا أداة تعريف / بلا أداة تنكير | «هنا لا نستخدم أداة تعريف»; contains a keyword on purpose |
| Arabic's own article | **أل التعريف** | Arabic grammar term. Use it only for Arabic; it is deliberately **not** a keyword, so a sentence about Arabic does not count as an English-article point |
| noun | الاسم / الأسماء | Fetched |
| countable / uncountable noun | **اسم معدود / اسم غير معدود** (plural الأسماء المعدودة / غير المعدودة) | Fetched (EF). **Keyword «معدود»** (matches both) |
| singular / plural | المفرد / الجمع | Fetched |
| plural form (of the noun) | **صيغة الجمع** | Fetched (EF: «صيغة الجمع»). **Keyword.** Write «صيغة الجمع» whenever the point is the noun's -s; never bare «جمع» in a `why` (§7) |
| dual (Arabic) | المثنى | Only to contrast: «الإنجليزية ليس فيها مثنى: two books» |
| pronoun / subject pronoun | الضمير / ضمير الفاعل | |
| resumptive pronoun (Arabic) | الضمير العائد | Arabic grammar term; lesson `relative`: «لا نكرر الضمير العائد في الإنجليزية» |
| subject / object | الفاعل / المفعول به | Fetched (Mawdoo3, Univext). In English grammar the subject of *be* is still «الفاعل» in learner materials; do not use «المبتدأ» except when explaining Arabic nominal sentences |
| nominal sentence (Arabic) | الجملة الاسمية | Lesson `be`: «في الجملة الاسمية العربية لا يوجد فعل» |
| possessive ('s, my) | الملكية / 's | write «للملكية نضيف 's» |
| verb | الفعل | |
| be (am / is / are) | **فعل الكينونة (be)** | Fetched as «فعل ”يكون“» (St-Takla); «فعل الكينونة» is the common ELT term. Secondary-emphasis wording (§7) |
| auxiliary (do / does / did) | الفعل المساعد | |
| modal verb | **الأفعال الناقصة (can, must, should)** | Arabic ELT names vary (أفعال ناقصة, أفعال شكلية, أفعال مساعدة ناقصة); gloss once with the English words and then name the verb itself («can و must…») |
| third-person singular | **الفاعل المفرد الغائب (he / she / it)** | Fetched form: «حرف -s الخاص بالغائب» (Univext). Short form in `why`: «مع he و she و it نضيف s» |
| base form / past / past participle | **التصريف الأول / الثاني / الثالث** | «التصريف الثالث» fetched (Mawdoo3); the first two are the same school series [curriculum convention, not verified] |
| regular / irregular verb | فعل منتظم / فعل شاذ | «شاذ» is the common school word; «غير منتظم» is accepted in body text |
| -ing form | صيغة -ing | |
| gerund / infinitive | اسم الفعل بصيغة -ing (gerund) / المصدر مع to | Gloss once |
| tense | الزمن | |
| present simple | **المضارع البسيط** | Fetched (Univext) |
| present continuous | المضارع المستمر | |
| past simple | **الماضي البسيط** | Fetched (Univext) |
| past continuous | الماضي المستمر | |
| future | المستقبل (will / be going to) | Name the form too |
| present perfect (+ continuous) | **المضارع التام** (المستمر) | Fetched (Mawdoo3, Univext); «المضارع التام المستمر» in a university lecture title (search result only) |
| past perfect | الماضي التام | |
| time expression | كلمة الوقت / ظرف الزمان | yesterday, now, already |
| passive / active | المبني للمجهول / المبني للمعلوم | Arabic grammar terms, familiar from school Arabic |
| conditional | الجملة الشرطية (if) – النوع الأول / الثاني / الثالث | |
| relative clause / pronoun | جملة الصلة / الاسم الموصول (who, which, that) | Arabic grammar terms (الذي، التي) map well |
| reported speech | الكلام المنقول (Reported speech) | |
| preposition | **حرف الجر** | Fetched (Univext: «حروف الجر») |
| conjunction | حرف العطف / أداة ربط | Never «أداة» alone |
| adjective / adverb | الصفة / الظرف | «الصفات» fetched |
| comparative / superlative | صيغة المقارنة / صيغة التفضيل | |
| question word | **كلمة الاستفهام** (what, where) | **Not** «أداة الاستفهام»: it would put «أداة» next to article keywords; the keywords are full phrases, so it does not match, but keep terms distinct for readers |
| yes/no question / negative | سؤال بنعم أو لا / النفي | «نفي» fetched (St-Takla) |
| word order | ترتيب الكلمات | |
| contraction | الاختصار (I'm, don't) | |
| phrasal verb | الفعل المركب (phrasal verb) | Deck 17 name |
| idiom / collocation | التعبير الاصطلاحي / المتلازمات اللفظية | «المتلازمات اللفظية» fetched (Univext) |
| false friend / literal translation | الكلمات المخادعة / الترجمة الحرفية | «الكلمات المخادعة» fetched (Univext). Lesson `arabic-traps` |
| pronunciation | النطق | |
| IPA transcription | الكتابة الصوتية (IPA); UI: «النطق» | The toggle reads «إظهار النطق (IPA)» (§10) |
| stress | النبر | ˈ = «علامة النبر» |
| vowel / consonant sound | صوت متحرك (صائت) / صوت ساكن (صامت) | EF uses «حرف متحرك / حرف ساكن» for **letters**; this course says «صوت» when it means the sound (*an hour*: the letter h, but a vowel sound) |
| long / short vowel | حركة طويلة / حركة قصيرة | Arabic learners know long vs short vowels (ا و ي vs َ ُ ِ) |
| silent letter | حرف لا ينطق | No damma on ينطق (§2 encoding) |
| consonant cluster | تتابع الأصوات الساكنة | «ثلاثة أصوات ساكنة متتالية: str» |
| linking | الوصل بين الكلمات | |
| capital letter | الحرف الكبير | Arabic has no case; lesson bodies say so once (§4.10) |

Interface terms are in §10.

## 4. Persistent error zones

**Ranking.** Items with fetched production data come first, ordered by how many independent studies show them and by how much they matter for this course's content (articles and *be* are taught in every set; spelling and capitals are not). The ranking is [practitioner opinion, inference]. **Correction to OTHERS.md:** in the counted tables opened for this profile, the largest categories are **spelling, capitalisation, punctuation, tense, prepositions and agreement**; articles are 7.5–20% of errors, and **copula omission has no count in any source opened** (it is folded into "fragments" or "subject/verb omission"). The standing-rule choice (§7) is therefore justified by parity, by the generic-*the* and countability evidence and by Arabic structure, not by rank. Example format: error ✗ then correction ✓. **Every "Why" line (the contrast with Arabic) and every example without a named source is [practitioner opinion].** "Theirs" marks an example quoted from the named study.

**Main fetched evidence** (small, single-institution samples, mostly Saudi; treat percentages as indicative and note that each study uses its own categories):
- [Alolaywi 2023](https://jrlt.ksu.edu.sa/sites/jrlt.ksu.edu.sa/files/users/user975/Vol%203-1%20(3%20Error%20Analysis%20of%20Written%20English%20Essays).pdf), *Journal of Research in Language & Translation* 3(1): 50 female English-department undergraduates, Qassim University, final-exam essays; **333 errors**: spelling 115 (34.5%), subject–verb agreement 54 (16.2%), capitalisation 47 (14.1%), sentence fragments 37 (11.1%), verb tense 34 (10.2%), articles 25 (7.5%), punctuation 21 (6.3%).
- [Hussain 2019](https://clt.kku.edu.sa/sites/clt.kku.edu.sa/files/inline-files/An-Analysis-of-Undergraduate-Saudi-EFL-Female-Students-Errors-in-Written-English-Essays_0.pdf), *AWEJ* Special Issue (EFL in Saudi Arabia): female undergraduates, King Khalid University, five-paragraph exam essays (the paper gives both 130 and 40 writers); **419 errors**: spelling 28.9%, punctuation 12.2%, capitalisation 10.5%, prepositions 8.8%, articles 8.1%, agreement 6.7%, tense 6.2%, sentence structure 5.7%, subject/verb omission 5.5%, singular/plural 2.4%, word order 1.7%, relative clauses 1.2%.
- [Issa et al. 2025](https://tpls.academypublication.com/index.php/tpls/article/download/9833/9819/38851), *TPLS* 15(3): 30 male first-year students, Prince Sattam University, timed compositions; **1,214 errors**: verb tense 700 (58%), articles 249 (20%), word order 143 (12%), agreement 122 (10%). Only four categories were coded, and the paper is inconsistent about its instrument; the tense share is not comparable with the others.
- [Megaiab 2020](https://journals.tu.edu.ly/tujsh/index.php/JSHS/article/download/166/154/343), *Tobruk University Journal of Social & Human Sciences* 14: 50 adult learners (the abstract says 95) in intensive courses in Libya, a six-part diagnostic test; **2,354 errors**: prepositions 23%, capitalisation 22%, punctuation 17%, singular/plural 16%, spelling 12%, tenses 10%. The only Maghreb-adjacent count found.
- [Darwish 2016](https://core.ac.uk/download/234693218.pdf), *Journal of Literature, Languages and Linguistics* 21: 32 tenth-graders in Zarqa, Jordan, one paragraph each. **Qualitative, no counts**, but the only Levantine sample, with examples for most categories below.

1. **Articles: *a / an* left out, *the* added to general and abstract nouns**
   - *Examples:* `She is wonderful girl. ✗ → She is a wonderful girl. ✓` (theirs, Alolaywi) / `I am teacher. ✗ → I am a teacher. ✓` (Univext) / `The pollution is a very dangerous problem. ✗ → Pollution is… ✓` (theirs, Darwish) / `The information is valuable. ✗ → Information is valuable. ✓` (llexi) / `The men are stronger than the women. ✗ → Men are stronger than women. ✓` (proz forum) / `I bought the pair of shoes. ✗ → a pair ✓` (theirs, Issa et al.) / `On other hand ✗ → On the other hand ✓` (theirs, Hussain)
   - *Why:* Arabic marks definiteness with أل التعريف and has **no indefinite article**: «رجل» is already "a man". So *a / an* has nothing to transfer from. Arabic also puts أل on generic and abstract nouns («التعليم مهم», «الرجال أقوى من النساء»), so learners add *the* where English uses no article. Arabic's nunation (تنوين) marks indefiniteness on paper only in vowelled text, which learners do not read daily.
   - *Evidence:*
     - [research-backed] Articles were 25 of 333 errors (7.5%) in Alolaywi 2023, 8.1% in Hussain 2019 and 249 of 1,214 (20%) in Issa et al. 2025.
     - [research-backed, summary only] Crompton (American University of Sharjah), on a corpus of tertiary L1-Arabic writing: "the most common errors involve misuse of the definite article for generic reference", attributed to L1 transfer ([Asian EFL Journal page](https://asian-efl-journal.com/monthly-editions-new/article-errors-in-the-english-writing-of-advanced-l1-arabic-learners-the-role-of-transfer/index.htm); year and figures not on the page read).
     - [research-backed, secondhand] Alhaisoni et al. (2017) found **64.1% omission and 27.5% insertion** among article errors of Saudi learners, as reported in the review section of [*The interaction between Nunation and English definiteness* (Humanities & Social Sciences Communications, 2023)](https://www.nature.com/articles/s41599-023-02280-y). That paper's own test (48 Saudi secondary students, a 24-item multiple-choice task in definite contexts) found Najdi speakers' errors "mainly in using the non-target indefinite article a"; its tables were not readable.
   - **Reading:** both directions are real. Omission of *a / an* before singular count nouns (jobs, descriptions) and *the* on generic nouns are the two Arabic signatures, and §8 weights `articles` towards *a / an* and `the` / `articles-2` towards "general = no article".
2. ***be*: left out in nominal sentences, put in before main verbs**
   - *Examples (omission):* `She athletic and healthy. ✗ → She is athletic and healthy. ✓` (theirs, Alolaywi, coded as a fragment) / `Everyone happy. ✗ → Everyone was happy. ✓` (theirs, Hussain, coded as subject/verb omission) / `The report ready. ✗ → The report is ready. ✓` (llexi) / `he happy today ✗` / `I going the bank now! ✗ → I'm going to the bank now. ✓` (both Wimbledon School)
   - *Examples (insertion):* `She is study. ✗ → She studies. ✓`, `I am wish everybody… ✗ → I wish… ✓`, `She is help me. ✗ → She helps me. ✓` (all theirs, Alolaywi) / `I am agree with you. ✗ → I agree with you. ✓` (Univext) / `It is cost money. ✗ → It costs money. ✓` (Al-Buainain, via OTHERS.md)
   - *Why:* the Arabic nominal sentence has no verb in the present: «هي طالبة», «الجو حار», «أنا في البيت». Learners carry that over (omission). The past and future do have كان / سيكون, so omission is mostly a present-tense problem. Insertion is the mirror image: *is / am* is reanalysed as a present-tense or "statement" marker and put before a main verb.
   - *Evidence:* [research-backed, abstract only, via OTHERS.md] 100 Saudi university students omitted *be*, intermediates more than advanced learners ([Alshayban 2012](https://mountainscholar.org/items/e8695078-a867-43e2-a142-b13667963cc8/full); the full text could not be fetched, §11). [research-backed, examples only] Alolaywi and Hussain show both directions in essays but code them under other headings, so **no rate exists**. [practitioner opinion] proz forum: «أنا علي» → *I ?? Ali*.
   - **Content consequence:** the `be` lesson is the first grammar lesson and is reweighted around both directions; the ar-only `be-2` lesson (§8) brings it back after the past and continuous tenses; §7 tells writers how to keep re-testing *be* inside `why` lines.
3. **Tense and aspect: present perfect, past perfect, progressive**
   - *Examples:* `after I took the medicine ✗ → after I had taken the medicine ✓` / `It always is snowing here in January. ✗ → It always snows… ✓` (both theirs, Issa et al.) / `when we arrive in Istanbul ✗ → when we arrived ✓` (theirs, Hussain) / `I have seen him yesterday. ✗ → I saw him yesterday. ✓` / `I live here since three years. ✗ → I have lived here for three years. ✓` (both Univext) / `They buyed a car. ✗ → bought ✓` (theirs, Megaiab)
   - *Why:* Arabic has two verb forms, الماضي and المضارع, with aspect and time carried by قد, كان, the prefix س / سوف and context. «أسكن هنا منذ ثلاث سنوات» uses the present, so English *have lived* has no model; «قد فعلت» is close to the present perfect only in some uses [practitioner opinion].
   - *Evidence:* [research-backed] Tense was 34 of 333 (10.2%, Alolaywi), 6.2% (Hussain), 10% (Megaiab) and 700 of 1,214 (58%, Issa et al.; perfect and progressive forms dominate their sub-table).
4. **Subject–verb agreement and third-person -s**
   - *Examples:* `She have a long hair. ✗ → She has long hair. ✓` (theirs, Alolaywi) / `My sisters gives me a gift. ✗ → give ✓` (theirs, Hussain) / `Physics seek to understand… ✗ → seeks ✓` (theirs, Issa et al.) / `He go to work at eight. ✗ → He goes… ✓`, `People is very friendly here. ✗ → People are… ✓`, `Everybody are ready. ✗ → Everybody is… ✓` (Univext)
   - *Why:* Arabic verbs agree richly (يذهب / تذهب / يذهبون), so agreement as an idea is familiar. The trouble is English's single, unpredictable -s, and Arabic agreement rules that do not map (a verb before its subject stays singular in MSA; non-human plurals take feminine singular agreement: «الكتب مفيدة») [practitioner opinion].
   - *Evidence:* [research-backed] 54 of 333 (16.2%, the **second** largest category, Alolaywi); 6.7% (Hussain); 122 of 1,214 (10%, Issa et al.).
5. **Prepositions**
   - *Examples:* `He is interested on mathematics. ✗ → in ✓`, `It gets cold in night. ✗ → at night ✓` (both theirs, Megaiab) / `We go out in night. ✗ → at night ✓` (theirs, Hussain) / `We are not ready to the problem. ✗ → for ✓` (theirs, Darwish) / `in the bus ✗ → on the bus ✓`, `in Monday ✗ → on Monday ✓` (llexi) / `depends of ✗ → on`, `married with ✗ → to`, `arrived to London ✗ → in`, `Listen the radio ✗ → Listen to`, `Discuss about the plan ✗ → Discuss the plan` (Univext)
   - *Why:* في covers *in / on / at*; Arabic verbs take their own prepositions («متزوج من», «يعتمد على», «يناقش» with no preposition but «يتحدث عن»), and learners translate them.
   - *Evidence:* [research-backed] 23%, the **largest** category in the Libyan sample (Megaiab); 8.8%, 4th, in Hussain. Teach the core set; no standing rule.
6. **Spelling: vowels, silent letters, b/p**
   - *Examples:* `clase ✗ → close` (theirs, Alolaywi) / `Bealiful ✗ → Beautiful` (theirs, Hussain) / `Com, Dat, Sit ✗ → Come, Date, Site` (theirs, Megaiab: final silent *e* dropped) / `tiime, lanauge, spak, cinmea, blease ✗` (Wimbledon School)
   - *Why:* Arabic writes long vowels and leaves short vowels out, and it is spelled almost as it is said. English vowel spelling is neither. Learners "write what they pronounce" (Megaiab), so *b* for *p* in speech becomes *b* on paper.
   - *Evidence:* [research-backed] spelling is the **largest** category in both Qassim (34.5%) and Abha (28.9%) samples and 12% in Libya. [research-backed, abstract page] 122 preparatory-year students at Ha'il: omission was the most frequent spelling error type, and "the majority of learners' spelling errors were related to a wrong use of vowels and pronunciation" ([Alhaisoni, Al-Zuoud & Gaudel 2015](https://ideas.repec.org/a/ibn/eltjnl/v8y2015i3p185.html)).
   - **Content consequence:** typed items (fill, type) matter more than for any earlier course; IPA shows the vowels the spelling hides (§6).
7. **Capital letters, punctuation and sentences chained with *and***
   - *Examples:* `I traveled to makkah. ✗ → Makkah ✓` (theirs, Hussain) / `spanish, dubai ✗` (theirs, Alolaywi) / `in jordan we have environmental pollution ✗` (theirs, Darwish) / `It makes the environment polluted and it pollutes the area and the food we eat and the water we drink. ✗` (theirs, Darwish) / `I mix the flour and sugar, oil and eggs ✗ → the flour, sugar, oil, and eggs ✓` (theirs, Hussain)
   - *Why:* Arabic script has **no capital letters**. Arabic prose links clauses with و and ف and uses long sentences that English splits; the Arabic comma is used more freely.
   - *Evidence:* [research-backed] capitalisation 14.1% + punctuation 6.3% (Alolaywi); punctuation 12.2% + capitalisation 10.5% (Hussain); capitalisation 22% + punctuation 17% (Megaiab). Chaining with *and* is described by Darwish but not counted.
   - **Content consequence:** the engine strips punctuation and lower-cases English answers before comparing (PRACTICE-SPEC), so practice cannot test capitals. Lesson bodies state the rule once (`be`, `email`: *I*, names, days, months, countries, languages) and the `email` lesson teaches sentence splitting.
8. **Countability and plurals**
   - *Examples:* `I need some informations. ✗`, `He gave me two advices. ✗ → two pieces of advice ✓` (Univext) / `You can find informations. ✗` and `I went to others places. ✗ → other places ✓` (theirs, Darwish) / `He is a students. ✗` (proz forum) / `over 8 month ✗ → months` (Wimbledon School)
   - *Why:* معلومات and نصائح are ordinary plurals in Arabic. Arabic adjectives agree in number («أماكن أخرى»), so *others places* follows Arabic. Arabic counts 3–10 with a plural noun but 11–99 with a **singular** («أحد عشر شهرا»), so *eleven month* is a predicted Arabic error [practitioner opinion, inference].
   - *Evidence:* [research-backed] singular/plural 16% (Megaiab), 2.4% (Hussain).
9. **Word order: adjective after the noun, adverb placement, *I and my friend***
   - *Examples:* `some information interesting ✗ → some interesting information ✓` (theirs, Issa et al.) / `I have a party big. ✗ → a big party ✓` (theirs, Hussain) / `Here are three rules very helpful. ✗`, `Every person almost has an idea. ✗` (theirs, Darwish) / `I and my friend went shopping. ✗ → My friend and I… ✓` (proz forum)
   - *Why:* Arabic adjectives follow the noun («بيت كبير»), and Arabic puts «أنا» first in pairs without the politeness rule English has.
   - *Evidence:* [research-backed] 143 of 1,214 (12%, Issa et al.); 7 of 419 (1.7%, Hussain).
10. **Relative clauses: repeated pronoun, *which* for people**
    - *Examples:* `This is the girl which I told you about her yesterday. ✗ → the girl (who) I told you about yesterday ✓` (proz forum) / `the man who I saw him ✗ → the man (who) I saw ✓` (OTHERS.md)
    - *Why:* Arabic relative clauses keep a الضمير العائد pointing back to the noun («الرجل الذي رأيته»), and الذي / التي cover people and things alike.
    - *Evidence:* [research-backed] relative clauses were 5 of 419 errors (1.2%, Hussain). A 2014 UK master's thesis studies resumptive pronouns in Arabs' English relative clauses ([Alosaimi 2014](https://drepo.sdl.edu.sa/items/a2b5b63f-6a5f-4cfc-b610-24d0c902d837/full); **catalogue record only**, no figures read). The resumptive-pronoun error is otherwise [practitioner opinion].
11. **Questions: no inversion, no *do*; embedded questions inverted**
    - *Examples:* `When I can call you? ✗ → When can I call you? ✓`, `You are married? ✗ → Are you married? ✓` (proz forum) / `Do you know where is the station? ✗ → …where the station is? ✓` (Univext)
    - *Why:* Arabic yes/no questions add هل or use intonation on statement order («هل تحب القهوة؟»), and question words do not trigger any change in the verb.
    - *Evidence:* [practitioner opinion] only; no count found.
12. **Literal translation and word choice**
    - *Examples:* «عمري 25 سنة» `I have 25 years. ✗ → I'm 25 (years old). ✓` / «أنا موافق» `I am agree. ✗ → I agree. ✓` / «أعمل واجبي» `I must make my homework. ✗ → do my homework ✓` / «ارتكبت خطأ» `She did a mistake. ✗ → made a mistake ✓` / «أشعر بالملل» `I am boring in this class. ✗ → I'm bored… ✓` / «اشرح لي» `Can you explain me this rule? ✗ → explain this rule to me ✓` / *actually* used for «حاليا» (all Univext) / `Nature is a merit of God. ✗`, `We fell in the fault. ✗` (theirs, Darwish) / *kabeer* = big and old, so *very big* for "very old" (proz forum) / «افتح النور» `open the light ✗ → turn on the light ✓`, «اعمل حفلة» `make a party ✗ → have / throw a party ✓` [practitioner opinion, **no fetched source**, §11]
    - *Evidence:* [practitioner opinion] (Univext; proz forum); Darwish names lexical and semantic transfer but gives no counts. Hussain's word-choice category is 0.7%. This zone is the basis of the ar-only `arabic-traps` lesson (§8).
13. **Pronunciation.** Each item is tagged separately.
    - **/p/ → /b/ (the signature).** Arabic has no /p/ (and writes *Pepsi* as بيبسي). `Can I bark my car here, blease? ✗` (Wimbledon School); *park / bark*, *pull / bull* (llexi); *Bepsi* (proz forum) [practitioner opinion]. [research-backed, abstract page] In 40 Saudi female students (lower-intermediate and intermediate), the highest error percentages were for "/ʒ/, /ŋ/, /p/, /ɹ/ and /ʧ/", plus the /t/ and /d/ of past *-ed* and three- and four-consonant clusters ([Alzinaidi & Abdel Latif 2019](https://awej.org/diagnosing-saudi-students-english-consonant-pronunciation-errors/), *AWEJ* 10(4); per-sound figures not on the page read).
    - **/v/ → /f/.** Arabic has no /v/ (فيديو for *video*) [practitioner opinion: OTHERS.md, TEFL Academy; proz forum].
    - **Consonant clusters broken with a vowel.** [research-backed] 30 Najran University freshmen reading clusters: errors on 11.6% of initial CC, 38.7% of initial CCC, 45.4% of final CC, 67.1% of final CCC and 77.3% of final CCCC responses; **epenthesis was the main repair** everywhere except four-consonant codas, where deletion led. Theirs: *street* → /sitr-/, *split* → /isp-/, *robbed* → /-bid/, *attempts* → /-mpits/ ([Al-Yami & Al-Athwary 2021](https://tpls.academypublication.com/index.php/tpls/article/download/1609/1308/5420), *TPLS* 11(10)). *estrategy*, *esteve* (proz forum). Arabic syllables never start with two consonants.
    - **Vowels: *bit / bet* hard, *ship / sheep* easy.** [research-backed] 119 Arabic speakers in England (Jordanian, Libyan, Sudanese) were least sensitive to **DRESS–KIT (*bet / bit*)**, LOT–STRUT, STRUT–TRAP and similar pairs, and most sensitive to **KIT–FLEECE (*ship / sheep*)**, which was in the low-difficulty set ([Allehyani, Smith & Cohen, ICPhS 2023](https://guarant.cz/icphs2023/580.pdf); perception only). [research-backed, abstract] 26 Saudi learners identified consonants better than vowels, and "even highly experienced learners continued to find vowels with no direct Arabic counterpart difficult" ([Evans & Alshangiti 2018](https://discovery-pp.ucl.ac.uk/id/eprint/10044993), *J. Phonetics* 68). **Correction to the brief's list:** Arabic has a long/short contrast (ِ vs ي), so *ship / sheep* is not the main vowel problem; *bit / bet*, *cut / cat / cot* are.
    - **/ŋ/ said as /ŋg/ or /n/** (*singing* with a /g/) [research-backed, abstract only: among the five highest-error sounds in Alzinaidi & Abdel Latif].
    - **Silent letters pronounced, spelling pronunciations** (*Wednesday*, *listen*, *knife*) [practitioner opinion: OTHERS.md / TEFL Academy]. The written-English mirror image is the dropped silent *e* in item 6.
    - **/θ ð/** exist in MSA (ث ذ) and in Gulf and Iraqi speech, but urban Egyptian and Levantine speech turns them into /t d/ or /s z/, so *think / sink* is a regional problem, not a pan-Arab one [practitioner opinion, inference; the Arabic self-study guide by Shawahin says *th* is "sometimes like ث and sometimes like ذ", [saaid.org](https://saaid.org/book/22/16503.pdf)].
    - **/r/** is a tap or trill in Arabic; learners use it for English /r/ and pronounce written *r* after vowels (*car*, *water*) [practitioner opinion; /ɹ/ is among the high-error sounds in Alzinaidi & Abdel Latif]. With American English as the variant, the written-*r* habit happens to fit.
    - **Word stress and rhythm:** Arabic stress is predictable from syllable weight, so English lexical stress (*PHOtograph / phoTOGraphy*) and weak forms need explicit marking [practitioner opinion]. [research-backed] In Allehyani et al., vowel and stress-placement discrimination correlated (ρ = .363), which supports teaching vowels and ˈ together.

## 5. Learner starting point

**Proficiency: there is no "Arabic speaker" figure, only countries, and they differ a lot.**
- [research-backed, self-selected online test-takers] **EF EPI 2025 fact sheets** (global average 488):

| Country | Overall | Reading | Listening | Speaking | Writing | Source |
|---|---|---|---|---|---|---|
| Saudi Arabia | **404** | 403 | 418 | 400 | **295** | [EF fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-saudi-arabia-english.pdf) |
| Egypt | **458** | 469 | 451 | 453 | 403 | [EF fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-egypt-english.pdf) |
| Iraq | **406** | 404 | 404 | 418 | 336 | [EF fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-iraq-english.pdf) |

  - The ranks printed in the fetched text ("#5" for Saudi Arabia, "#3" for Iraq) are garbled and are not used; Egypt's is given as #89. Bands were not stated on the sheets. The Saudi writing score (295) is far below the other skills; it was read from the sheet's text and should be checked against the PDF before it is quoted.
  - Within countries: Saudi cities range from Khobar 445, Riyadh 440 and Jeddah 427 down to Najran 320; Egypt from Alexandria 480 and Cairo 478 down to Sohag 389.
- [research-backed, secondary table] **World Population Review**, labelled "EF EPI 2025": UAE 489, Lebanon 492, Tunisia 496, Morocco 479, Qatar 480, Syria 473, Algeria 471, Kuwait 456, Sudan 432, Jordan 431, Oman 421, Libya 405, Yemen 394 (Saudi Arabia 417, Egypt 465, Iraq 414) ([WPR](https://worldpopulationreview.com/country-rankings/english-proficiency-by-country)). **Its Saudi, Egyptian and Iraqi figures are each 7–13 points above the 2025 fact sheets, so this table is probably the 2024 edition or a mix**, as th.md found for Thailand. **Correction to OTHERS.md**, which quotes Saudi Arabia 417 and Egypt 465 as 2025. The WPR figures are used here only to show the spread: the Levant, Maghreb and UAE score "Low" (≈ 470–495), while Saudi Arabia, Iraq, Libya, Oman, Jordan and Yemen are "Very low".
- **Writing is the weakest skill in every fact sheet read** (Saudi Arabia 295, Iraq 336, Egypt 403), as for Thailand. Together with §4.6–4.7 (spelling, capitals, punctuation as the largest error categories), this points the course at typed production.

**School, exams and goals** [curriculum convention unless tagged]
- **Saudi Arabia:** "In 2021, the Saudi Ministry of Education introduced English language teaching in the first grade of primary schools"; teacher shortage and "limited time allocated to teaching English" are the reported challenges ([Alzahrani 2025, *TPLS* 15(7)](https://tpls.academypublication.com/index.php/tpls/article/view/10567)) [research-backed, abstract]. University students meet a preparatory year with intensive English (the setting of Alhaisoni et al. 2015 and Hussain 2019).
- **STEP** (Standardized Test of English Proficiency), run by the National Center for Assessment (Qiyas) under ETEC: reading 40%, grammar structures 40%, listening 20%; used for university admission, exemption from preparatory English, graduate entry, teacher licensing and some jobs ([open-exam-prep summary](https://open-exam-prep.com/study-guides/sa-etec-step-english/introduction/step-exam-facts-and-what-it-measures)) [curriculum convention, third-party page]. Its 40% grammar weight is a selling point for explicit grammar lessons.
- **IELTS** is the international exam learners name for study abroad, scholarships and migration across the region [practitioner opinion; the IELTS results-by-first-language spreadsheet could not be fetched, §11].
- **Region matters** [practitioner opinion; not verified on fetched pages, §11]:
  - **Gulf:** English is the working language of business, aviation, hospitals and much of higher education; large expatriate workforces make English the everyday lingua franca in shops and offices (UAE, Qatar, Kuwait, Bahrain).
  - **Egypt and the Levant:** English is a school subject from primary school, with private and language schools teaching more; tourism, call centres and IT outsourcing reward spoken English.
  - **Maghreb:** French is the first foreign language and English comes later, so learners bring French spelling and false friends (*actually*, *library*) as well as Arabic; dialect (الدارجة) differs most from MSA here.
  - **Diglossia everywhere:** learners speak a dialect and read MSA. App text in MSA is normal (it is the written standard), but dialect-only words would confuse learners from other countries (§2).
- **Familiar formats:** multiple choice and grammar gap-fills dominate school tests and STEP; word tiles and typed sentences will be newer [practitioner opinion].

**Implications for the app** [practitioner opinion, inference]
1. **A wide spread of levels.** Gulf learners with "Very low" scores need the full A1 pace of ko-en; Levantine and UAE learners will move faster. Keep ko-en's pace and lesson length; do not compress as zh does.
2. **Writing is weakest:** weight typed items (fill, type), keep `why` lines short and concrete, and show spelling through IPA (vowels) and through the `arabic-traps` deck (silent letters).
3. **Grammar labels are expected.** STEP and school English are grammar-heavy, and Arabic speakers are used to explicit grammar terms from school Arabic (فاعل، مفعول به، مبني للمجهول). Use the Arabic terms in §3 confidently.
4. **Work and study English sells:** office, hospital, airport and university scenes; IELTS-style topics in B1 examples. Never promise score gains.
5. **Do not gate on articles, *be* or tense.** All three persist in university writing (§4).

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners meet:** Arabic phrasebooks and social-media lessons often write English in Arabic letters («هاو آر يو») [practitioner opinion; no fetched example, §11]. Arabic ELT self-study material for graduates includes an IPA table ([Shawahin, saaid.org](https://saaid.org/book/22/16503.pdf), chapter "مدخل إلى الصوتيات") [curriculum convention, table of contents only]. How many adult learners read IPA is **not measured**.
- **Why an Arabic-script respelling would reinforce exactly the Arabic errors** [practitioner opinion, inference from §4.13]:
  1. **No letters for /p/ and /v/ in standard Arabic script.** A respelling writes *park* with ب and *very* with ف (or with the non-standard پ ڤ, which many learners do not know and some fonts lack). The respelling would encode /p/ → /b/ and /v/ → /f/, the two signature errors.
  2. **Short vowels are not written.** Unvowelled Arabic cannot show *bit / bet / bat / but*, the hardest contrasts (§4.13); vowelled Arabic has only three short vowels (َ ُ ِ), so it still cannot.
  3. **Clusters invite epenthesis.** Arabic orthography has no way to show an initial cluster without an alif or a vowel sign, and reading «ستريت» invites /sitri:t/, the measured repair (Al-Yami & Al-Athwary 2021).
  4. **Direction.** A respelling inside an `{{ex}}` row puts a right-to-left string between an English sentence and its Arabic meaning, which makes the row harder to read; IPA is left-to-right like the English it describes.
- **No study compares IPA, Arabic-script respelling and no aid for Arabic learners.** The decision below is inference [practitioner opinion].

**Decision: IPA in every `pron` field (`"pron": "required"`), written exactly as the Chinese course writes it.** It is shown by default and hidden with the toggle «إظهار النطق (IPA)». The `pron` lesson teaches the key on one screen (below).
- **Can Arabic-speaking learners use it? Yes, with the key.** IPA is Latin-based and left-to-right, so it reads in the same direction and alphabet as the English above it; most symbols are ordinary letters, and the rest (θ ð ʃ ʒ ŋ ə ɪ ʊ æ ʌ ɑ ɔ ɜ ˈ ː) are taught in the key with Arabic letter anchors where Arabic has the sound (ث ذ ش خ…). The p / b and f / v symbols are the Latin letters themselves, so the aid *shows* the contrast Arabic script cannot.
- **Why exactly zh's notation:** the shared English strings are identical, so most transcriptions can be **copied from `tools/content/zh/`** (decks.js, extra.js, lessons.js, more/*.js). The rules are settled and checked by `tools/content/zh/pron_check.js`. Copy `tools/content/zh/PRON-RULES.md` and `pron_check.js` into `tools/content/ar/` (the lead's step); they are binding for ar-en as written. Where zh.md §6 and PRON-RULES.md differ, **PRON-RULES.md wins** (e.g. syllabic *student* /ˈstuːdnt/).
- **Why not `optional` or `none`** (OTHERS.md's suggestion): the aid is how learners see the vowels that English spelling hides and Arabic spelling would drop, and an empty pron needs untested engine rendering (PIPELINE §3).
- **Why not a hybrid** (IPA plus an Arabic hint in the same field): the pattern forbids it, the lint requires one aid per English text, and the hint would reintroduce b for p. Arabic approximations belong in the `pron` lesson body and card `note`s only.

**Rules for the `pron` field** (summary; the full text is zh.md §6 rules 1–10 plus PRON-RULES.md):
1. **Format.** One pair of slashes per row, words separated by one space, no punctuation, capitals or digits. Two sentences in one row are separated by ` ‖ ` (U+2016). Alternatives are two slashed groups separated by one space: `/ˈpɑːrk/ /ˈbɑːrk/`. Never `//`. **No direction marks** anywhere in the field (the engine isolates `.pron` as left-to-right; a stray LRM or RLM fails `pronPattern`, tested).
2. **Stress.** The closed function-word list stays unmarked; **every other word gets ˈ, monosyllables included**: `/ˈjes/`, `/aɪ ˈlaɪk ˈtiː/`. A stressed function word takes its strong form and ˈ (`Me too.` /ˈmiː ˈtuː/). Phrasal-verb particles take ˈ. ˌ appears only in long words, -teen numbers and letter-by-letter abbreviations.
3. **Notation: OALD North American values in the school symbol set**: iː ɪ e æ ʌ ə ɑː ɔː uː ʊ ɜːr ər, eɪ aɪ ɔɪ aʊ oʊ, ɪr er ʊr ɑːr ɔːr, unstressed final i / u. ASCII `g`, plain `r`, no flap symbol, no ɚ ɝ ɡ ɹ.
4. **Weak forms** as in PRON-RULES.md §B (a /ə/, the /ðə/ or /ði/, to /tə/, can /kən/, you /ju/, your /jʊr/…).
5. **Codas and clusters always in full, with no inserted vowel** — the rule that matters most for Arabic, with p / v: `street` /ˈstriːt/, `asked` /ˈæskt/, `spring` /ˈsprɪŋ/. -s as /s z ɪz/, -ed as /t d ɪd/.
6. **Numbers, names, abbreviations:** numbers as words; abbreviations letter by letter; Arab names and places **as the en-US voice says them** (approximations; the content agent listens to each once, §11): Sara /ˈserə/, Omar /ˈoʊmɑːr/, Dubai /ˌduːˈbaɪ/ (zh's *Shanghai* /ˌʃæŋˈhaɪ/ pattern: no unstressed long vowel without ˌ), Cairo /ˈkaɪroʊ/, dirhams /ˈdɪrhæmz/.
7. **No aid in practice items** (PRACTICE-SPEC). IPA appears in cards, idioms and `{{ex:}}` rows. Lesson bodies, `why` and notes may name a sound («الصوت /p/»), but never two adjacent slashes: write «/p/ و /b/» with spaces.

**The key for the `pron` lesson** (IPA symbol → Arabic anchor → example). The Arabic column is a teaching aid for the lesson body only; it never goes into a `pron` field. «غير موجود في العربية» marks sounds Arabic lacks, where the Arabic letter learners reach for is the error.

| IPA | Arabic anchor (lesson prose only) | Example |
|---|---|---|
| p / b | غير موجود في العربية: الشفتان مثل ب لكن بلا اهتزاز في الحلق ومع دفعة هواء / ب | park /ˈpɑːrk/, bark /ˈbɑːrk/ |
| f / v | ف / غير موجود في العربية: مثل ف مع اهتزاز في الحلق | fan /ˈfæn/, very /ˈveri/ |
| t d k g | ت د ك / مثل ج المصرية | ten /ˈten/, good /ˈgʊd/ |
| θ / ð | ث / ذ (لا ت ولا س، ولا د ولا ز) | think /ˈθɪŋk/, this /ˈðɪs/ |
| s z ʃ | س ز ش | sun /ˈsʌn/, zoo /ˈzuː/, ship /ˈʃɪp/ |
| ʒ | غير موجود في الفصحى: مثل ج الشامية | usually /ˈjuːʒuəli/ |
| tʃ / dʒ | غير موجود في الفصحى: ت + ش في صوت واحد / ج الفصحى | check /ˈtʃek/, job /ˈdʒɑːb/ |
| m n ŋ | م ن / ن من آخر الحلق، بلا g بعدها | sing /ˈsɪŋ/, singing /ˈsɪŋɪŋ/ |
| l / r | ل / ر الأمريكية: يلتف اللسان ولا يضرب | light /ˈlaɪt/, right /ˈraɪt/ |
| h w j | ه و ي | hat /ˈhæt/, wet /ˈwet/, yes /ˈjes/ |
| iː / ɪ | كسرة طويلة (ي) / كسرة قصيرة أقرب إلى e | sheep /ˈʃiːp/, ship /ˈʃɪp/ |
| e / æ | فتحة ممالة إلى الكسر / فتحة مفتوحة جدا | bet /ˈbet/, bat /ˈbæt/ |
| ʌ / ə | فتحة قصيرة في وسط الفم / صوت خفيف جدا في المقطع غير المنبور | cup /ˈkʌp/, about /əˈbaʊt/ |
| ɑː / ɔː | ألف طويلة مفخمة / بين الألف والواو | hot /ˈhɑːt/, talk /ˈtɔːk/ |
| uː / ʊ | ضمة طويلة (و) / ضمة قصيرة | food /ˈfuːd/, book /ˈbʊk/ |
| ɜːr / ər | صوت بين الفتحة والكسرة مع r / مثله خفيف | bird /ˈbɜːrd/, water /ˈwɔːtər/ |
| eɪ aɪ ɔɪ aʊ oʊ | اي، آي، أوي، آو، أو | day, my, boy, now, go /ˈgoʊ/ |
| ː | علامة الحركة الطويلة | sheep /ˈʃiːp/ |
| ˈ | علامة النبر: المقطع بعدها أقوى وأطول | about /əˈbaʊt/ |

Note for the lesson body (not a pron field): the anchor «مثل ج المصرية» (for /g/) and «مثل ج الشامية» (for /ʒ/) are regional; give both a description and an English example so every learner can use the row.

**Validator** (profile.json, all tested in `node` from the parsed `ar.profile.json`):
- `nativeScript`: `[ء-غف-يٱ-ۓ]` = the Arabic letters (hamza to غ, ف to ي) plus the extended letters (ٱ … ۓ, which include پ ڤ گ ک ی). It **excludes** tatweel (U+0640), harakat and tanween (U+064B–U+065F), Arabic-Indic digits (U+0660–U+0669), «،؛؟» (U+060C, U+061B, U+061F), «٪ ٫ ٬», the direction mark ALM, and the presentation forms (U+FB50–U+FDFF, U+FE70–U+FEFF). Tested: «البطاقات», «ة», «ء», «آ», «ڤيديو» match; «٣», «ـ», a lone fatha, «،؟؛», «ﻷ» (U+FEF7), «ﭑ» (U+FB51), "Hello 123 %" and an RLM do not. The ko-en pack has **0** characters in this class and 0 in the Arabic, Arabic-Indic or presentation-form blocks.
  - Why exclude digits and presentation forms: an English string must never contain them, and a meaning must contain a real letter, not only «٣» or a pasted presentation-form glyph (which also breaks search and keyword matching; §10 requires NFC text typed as normal letters).
- `pronScript`: `ˈ`, as zh. Every pron contains ˈ (rule 2), and it must also differ from the English.
- `pronPattern`: copied **byte for byte** from `tools/content/zh/profile.json`: `^(?=.*ˈ)/C+( C+)*/( /C+( C+)*/)*$` with `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]`. Tested to reject `/pen/` (no stress), an unclosed second group, `/ˈɡet/` (U+0261), `/ˈjes?/`, `//`, a double space between groups and a trailing LRM.
- `labels.cueTest` is the same Arabic-letter class, so cue injection and the "mc `q` / type `hint` has Arabic" check mean real Arabic.

**Worked examples.** Rows marked "zh" are copied verbatim from `tools/content/zh/` and use shared ko-en English. Rows marked "new" are ar-only additions for the `pron` lesson, `be-2`, `arabic-traps` or decks. All 30 pass `pronPattern` and `pronScript`, differ from the English and contain no Arabic (tested).

| English | `pron` | Rules shown |
|---|---|---|
| Hello. | /həˈloʊ/ | zh; GOAT oʊ, stress inside the word |
| Thank you. | /ˈθæŋk ju/ | zh; θ = ث, weak *you* |
| I'm a student. | /aɪm ə ˈstuːdnt/ | zh; PRON-RULES A4 syllabic n; cluster /st/ with no vowel before it |
| Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | zh; p and b in one sentence; no `?` |
| Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | zh; weak *can*, ð |
| How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | zh; ʌ, tʃ |
| fan / pan | /ˈfæn/ · /ˈpæn/ | zh; the shared `pron` check pair: f vs p |
| vote / boat | /ˈvoʊt/ · /ˈboʊt/ | zh; the shared check pair: v vs b |
| very / berry | /ˈveri/ · /ˈberi/ | zh; v vs b |
| coffee / copy | /ˈkɔːfi/ · /ˈkɑːpi/ | zh; f vs p inside a word |
| Turn on the light. | /ˈtɜːrn ˈɑːn ðə ˈlaɪt/ | zh; replaces Arabic *open the light*; particle stressed |
| I'm bored. | /aɪm ˈbɔːrd/ | zh; the *bored / boring* card |
| Where are you from? | /ˈwer ər ju frʌm/ | zh; PRON-RULES C3 stranded preposition |
| I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | zh; replaces *I have 25 years*; number as words |
| Education is important. | /ˌedʒuˈkeɪʃn ɪz ɪmˈpɔːrtnt/ | zh; generic noun, no *the* |
| I agree. | /aɪ əˈgriː/ | zh; replaces *I am agree* |
| five people | /ˈfaɪv ˈpiːpl/ | zh; p twice, syllabic l |
| some information | /ˈsʌm ˌɪnfərˈmeɪʃn/ | zh; uncountable, no -s |
| See you on Friday. | /ˈsiː ju ɑːn ˈfraɪdeɪ/ | zh; *on* + day, unstressed |
| park / bark | /ˈpɑːrk/ /ˈbɑːrk/ | new; deck 18; alternatives written as two groups |
| ship / sheep | /ˈʃɪp/ /ˈʃiːp/ | new; the easy pair for Arabic (length) |
| bit / bet | /ˈbɪt/ /ˈbet/ | new; the hard pair (Allehyani et al.) |
| Can I park here? | /kən aɪ ˈpɑːrk ˈhɪr/ | new; the Wimbledon *bark* example |
| It costs ten dollars. | /ɪt ˈkɔːsts ˈten ˈdɑːlərz/ | new; `be-2` (*it is cost* ✗); coda /sts/ |
| She's a doctor. | /ʃiz ə ˈdɑːktər/ | new; `be-2`, contracted *is* |
| I'm having a party on Friday. | /aɪm ˈhævɪŋ ə ˈpɑːrti ɑːn ˈfraɪdeɪ/ | new; `arabic-traps` (*make a party* ✗) |
| singing | /ˈsɪŋɪŋ/ | new; ŋ with no g |
| Wednesday / listen | /ˈwenzdeɪ/ · /ˈlɪsn/ | new; silent letters (d, t) not written |
| spring / asked | /ˈsprɪŋ/ · /ˈæskt/ | new; clusters with no inserted vowel |
| My name is Sara. / I live in Dubai. / Fifty dirhams. | /maɪ ˈneɪm ɪz ˈserə/ · /aɪ ˈlɪv ɪn ˌduːˈbaɪ/ · /ˈfɪfti ˈdɪrhæmz/ | new; localised names, place and currency (§9) |

(The "·" separates separate rows shown together here; it never appears in a `pron` field.)

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "أداة التعريف|أداة التنكير|أداتا التنكير|أداتي التنكير|أداة تعريف|أداة تنكير|صيغة الجمع|معدود" }`. No `flags` (Arabic has no case).
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- **What the validator counts** (validate.js `article-plural`): `order` — the `why` matches a keyword **and** `x` holds an article tile or a singular/plural twin of a tile in `a`; `type` — the `why` matches **and** every variant in `a` contains an article, or `x` holds an article or a twin. Put the competing tile in `x` (`a`, `the`, `book` / `books`).

**Why these keywords, and why phrases rather than single words:**
- **Arabic glues prefixes and articles onto words** (و، ف، ب، ل، ال), and the validator compiles `keywords` without the `u` flag and without normalisation. So each keyword is a phrase or stem that survives the common prefixes: «بأداة التعريف», «وأداة التنكير», «بصيغة الجمع», «الأسماء المعدودة», «غير معدود» all match.
- **Bare «جمع» and «المفرد» are excluded on purpose.** «جمع» is inside «الجمعة» (Friday, taught in `prep` and `numbers`) and «يجمع», and agreement lines say «الفاعل they جمع». «المفرد» is the third-person -s term («الفاعل المفرد الغائب»), the secondary emphasis. Bare keywords would let those lines count.
- **Bare «أداة» is excluded** because it also appears in «أداة ربط» and in the question-word term some writers will use; §3 names the question word «كلمة الاستفهام» anyway.
- **«أل التعريف» (Arabic's own article) is not a keyword**, so a line that only explains Arabic does not count as an English-article point.
- Both «أداة التعريف» and «أداة تعريف» (and the التنكير pair) are listed because «بلا أداة تعريف» (zero article) has no ال. The dual forms «أداتا / أداتي التنكير» are listed for lines naming *a* and *an* together.

**Writer rules (keep the count meaningful and the match reliable):**
- Write the keyword phrases exactly: **hamza on أداة / أداتا / أداتي** (never «اداة»), **ة not ه**, no harakat, no tatweel, no direction marks, no line break inside the phrase. All text NFC. A keyword typed without hamza silently fails.
- Name the plural point as **«صيغة الجمع»** and countability as **«معدود» / «غير معدود»**; never «جمع» alone, «بالجمع» or «اسم جمع» for an article/plural hinge.
- Use the keywords only in `why` lines of items that really hinge on articles or plurals.
- Every `q`, `p`, `why` and `hint` needs an Arabic letter, and every mc `q` must **begin** with Arabic text (rendering rule, below).

**Sample `why` lines** (plain text, English bare; all tested in `node` against the regex):
- «teacher اسم معدود مفرد، فيحتاج أداة التنكير a» → hit
- «بعد two نستخدم صيغة الجمع: books» → hit
- «information اسم غير معدود: بلا s وبلا أداة تنكير» → hit
- «ذكر الكلب للمرة الثانية، فنستخدم أداة التعريف the» → hit
- «these مع صيغة الجمع، و this مع شيء واحد» → hit
- «الكلام عن القطط عموما: صيغة الجمع بلا أداة تعريف: Cats sleep a lot» → hit
- «التعليم بمعناه العام لا يأخذ أداة التعريف في الإنجليزية: Education is important» → hit
- «a و an أداتا التنكير: an قبل صوت متحرك» → hit

Lines that correctly do **not** match (tested): «نقول on Friday: يوم الجمعة», «مجموعة البطاقات هذه للمبتدئين», «جميع الأفعال هنا منتظمة», «where أداة استفهام تأتي في أول السؤال», «الفاعل he مفرد غائب، فنضيف s للفعل: works», «الفاعل they جمع، فلا نضيف s: they work», «لا نضع فعل الكينونة قبل فعل آخر: She works», «مع yesterday نستخدم الماضي البسيط: went», «في العربية أل التعريف تدخل على الأسماء العامة», «اجتماع العمل يوم الاثنين», «يجمع الطلاب الكتب».

**Justification:**
- **Articles are a structural gap and recur in every count** (7.5% Alolaywi, 8.1% Hussain, 20% Issa et al.), with the generic-*the* pattern singled out by Crompton and every practitioner source, and *a / an* omission dominant in Alhaisoni et al. (secondhand) [research-backed, §4.1]. Arabic has no indefinite article and a definite article that covers generic reference.
- **The plural half rests on parity and countability, not on plural rates.** Arabic marks plural (and dual), so plain -s is not the problem; but *informations, advices, people is, others places* are (§4.8; singular/plural 16% in Megaiab), and «معدود» lines count.
- **Zero parity cost.** The shared `order` and `type` items were written to the Korean rule, so only the Arabic `why` must name the point [practitioner opinion; consequence of PILOT-SPEC §1.6]. zh, vi, id, hi, th and ru reached the same conclusion.
- **Why not an `article-copula` kind** (OTHERS.md's proposal)? It does not exist in validate.js, and the brief rules it out. *be* hinges are also hard to detect from `x` / `a` alone (an *is* in `x` is as likely to be a correct-answer twin as a distractor), so a heuristic would miscount.
- **Why not `verb-core`?** It is built around do-support and inversion (es); it would need item changes in up to 39 sets, and tense, the largest single count (Issa et al.), is lesson-specific.

**How writers keep re-testing *be* (not validated; do not add these words to `keywords`):**
Parity freezes the shared `o` / `a` / `x`, so *be* cannot be added to the 39 shared sets. It lives in four places instead:
1. **In the Arabic `why` of shared items that already contain *be*.** Many ko-en items have *is / are / was / were* in the answer (*This is a banana*, *I'm a student*, *The keys are on the table*). Where an item counts for the rule, keep the keyword and add the *be* point in the same line: «اسم المهنة يحتاج أداة التنكير a، والجملة تحتاج فعل الكينونة is». Where *be* is the only point, write it alone with **«فعل الكينونة»**: «الإنجليزية لا تحذف فعل الكينونة كما تفعل الجملة الاسمية العربية: She is tired».
2. **In `why` lines of items with a main verb**, name the opposite error once per set where it fits: «لا نضع is قبل فعل آخر: She works».
3. **In lesson-body rows** (not parity-bound): every lesson whose body has an adjective, a place or a noun after the subject shows the *be* sentence and, once per lesson at most, the ✗ form without *be*.
4. **In the ar-only `be-2` lesson** (§8), whose set mixes *be* with the standing rule.
- Writers are encouraged to make the `type` hint name *be* when it matters: «doctor · a — لا تنس is» is gendered (تنس is masculine), so write «doctor · a — مع فعل الكينونة».

**Other secondary emphases (not validated):**
- Third-person -s: «مع he و she و it نضيف s إلى الفعل: works» (named with «الفاعل المفرد الغائب» on first use).
- Tense: name the tense and the time word: «مع yesterday نستخدم الماضي البسيط: went»; «المدة ما زالت مستمرة (for five years)، فنستخدم المضارع التام».
- Relative clauses: «لا نكرر الضمير العائد: the man I saw».

**Prompt frames and rendering (`labels`).** The engine renders `.prac-q`, `.q`, `.opt`, chips and table cells with `unicode-bidi: plaintext`, so **each paragraph takes its direction from its first strong letter** (§10). An mc `q` that starts with English renders left to right, with the Arabic cue on the wrong side. Hence:
- **Every mc `q` (and check question) begins with an Arabic word, and the English after it has no final punctuation** (rendered in Chromium under `dir="rtl"`: «الكلمة المناسبة للفراغ: I __ a student.» shows the full stop at the far left, before *I*). For a gap question: «الكلمة المناسبة للفراغ: I __ a student» For a meaning question: «بالإنجليزية: "أنا معلم"» or «معنى "مروحة" بالإنجليزية:». Forms: «التصريف الثاني من go:», «صيغة الجمع من box:». Find the error: «الجملة الخاطئة:». Choose: «الجملة الصحيحة:».
- **ko-en has 32 bare-English mc questions and 23 bare-English type hints** that rely on cue injection (PIPELINE §3). The DSL *appends* the cue, which would put the Arabic at the end of an LTR paragraph. **Writers must rewrite the 32 questions with an Arabic-first frame, and give the 23 hints an Arabic note after « — »** (only the Arabic side changes, so no deviation is needed). The appended cues below are a fallback, not the intended form.
- `labels.mcBlankCue`: **« ما الكلمة المناسبة للفراغ؟»** (a question, no second-person verb).
- `labels.typeHintCue`: **« — باستخدام هذه الكلمات»** (a verbal-noun phrase; the ko-style imperative «استخدم» is masculine and is not used).
- Type hints follow ko: key words separated by « · », then « — » and a short Arabic note in neutral wording: «two · book — بعد two صيغة الجمع». The engine shows a hint only after a wrong first attempt, inside the feedback line after the translated «Hint:» label (`src/app.html`, `.prac-hint` span, not isolated), so the line's direction comes from the Arabic before it and the hint itself **may** start with English. It must still contain an Arabic letter (validator).

## 8. Curriculum deviations from the Korean-speaker course

**Definitions** (as in zh, vi, id, th and ru):
- **keep** = a fresh Arabic explanation from the Arabic point of view, with English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice. The Arabic explanation and the **lesson-body** example rows shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed for the 39 shared lessons.** The `pron` checks already test p / b (*fan / pan*) and v / b (*vote / boat*), the two Arabic signatures, so even `pron` needs no change.
- **add** = a new lesson, with an entry in `deviations.json` `extraLessons` and in `profile.json` `lessonOrder.after`. Its practice set must itself satisfy the standing rule (§7).

Ids and order are unchanged; nothing is replaced or dropped. The two additions slot in after `tense` and after `smalltalk`.

| lesson id | keep / reweight / add | note for Arabic speakers |
|---|---|---|
| pron | reweight | Teach the IPA key (§6) on one screen, ˈ = «علامة النبر», ː = «حركة طويلة». Arabic set, signatures first: **p ≠ b** (*park / bark*, *pull / bull*, *pen / Ben*), **v ≠ f** (*very / ferry*, *van / fan*), clusters with no inserted vowel (*street*, *spring*, *asked*), ŋ with no g (*singing*), **e / ɪ** (*bet / bit*) and **æ / ʌ / ɑː** (*cat / cut / cot*) as the hard vowels, *ship / sheep* as the easy one (Arabic has long and short vowels). The shared checks fit unusually well: *fan / pan* and *vote / boat* are the core Arabic pairs, and their `why` lines say so («هذا أهم فرق للمتحدثين بالعربية»). *rice / lice* and *right / light* are easy (Arabic ر and ل are distinct; say so in one line and point out the American r). *think / sink*: ث exists in Arabic, but many dialects say س or ت, so the `why` names ث. Body rows add the extra pairs |
| be | reweight | **Core lesson.** The Arabic nominal sentence has no verb: «هو طويل» → He is tall (`He tall ✗`), «أنا في البيت» → I'm at home. Teach am / is / are as obligatory with adjectives, nouns and places. The mirror error, measured in essays: no *be* before another verb (`She is study ✗`, `I am agree ✗`); ask "is there another verb besides *be*?" (PHASE2-BRIEF). One line on capitals: *I* is always capital, Arabic has no capitals |
| it-there | reweight | «الجو حار» / «إنها تمطر» → It's hot / It's raining: English needs the dummy *it* where Arabic has none. «يوجد / هناك» → there is / there are: a good match, but agreement matters (There are many people) |
| articles | reweight | Arabic has أل التعريف but **no أداة تنكير**: «رجل» already means *a man*. So *a / an* is the new idea; spend most of the lesson on it (jobs, "one of many", first mention): `I am teacher ✗ → I'm a teacher` (Univext); `She is wonderful girl ✗` (Alolaywi). Preview the second trap: Arabic «ال» on general nouns ≠ English *the* |
| plurals | reweight | Light on -s (Arabic marks plural). Focus: the dual has no English form (two books), irregular plurals feel familiar (جمع التكسير ↔ child / children, man / men), adjectives do **not** take -s (`others places ✗`, Darwish), and -s / -es said as /s z ɪz/ without an added vowel |
| present | reweight | SVO is natural in modern Arabic writing; say so. Spend the time on `She is study ✗` (*be* + verb, Alolaywi) and frequency adverbs before the main verb |
| questions | reweight | هل + statement order → Do / Does + subject + verb (`You like coffee? ✗`); wh-questions invert (`When I can call you? ✗ → When can I call you?`). Body note: embedded questions keep statement order (`Do you know where is the station? ✗`, Univext) |
| third-s | reweight | Arabic verbs agree (يذهب / تذهب), so the idea is familiar, but agreement is the second-largest category in Alolaywi (16.2%): one -s, only for he / she / it, and *people* is plural (`People is ✗`) |
| prep | reweight | في = in / on / at: on Monday, at night (`in night ✗`, Megaiab), on the bus (`in the bus ✗`); verb + preposition pairs that differ from Arabic (depend **on** ← يعتمد على works; married **to** ← متزوج من does not; listen **to**; discuss with no preposition) |
| countable | reweight | معلومات, نصائح, أثاث, واجبات are plurals in Arabic: information, advice, furniture, homework take no -s (`informations ✗`, `two advices ✗`, Univext). *a piece of*. many / much |
| object-have | reweight | «عندي سيارة» → I have a car. Possessive 's for «كتاب حامد» → Hamid's book (`Hamid book ✗`, proz forum), «اجتماع اليوم» → today's meeting. Objects are *it*, even when the Arabic noun is feminine (`My car… She is old ✗ → It's old`; NLS Norwegian gives `her book ✗`) |
| can-like | reweight | can + base form. «أحب كرة القدم كثيرا» → I really like football / I like football very much (`I like very much football ✗`). like + -ing |
| polite | reweight | لو سمحت / من فضلك ≈ *please*, but a bare imperative with *please* still sounds blunt in English: Could I have…? / Would you…? «إن شاء الله» is not a promise in English; *I hope so* / *hopefully* |
| continuous | reweight | be + -ing; *be* is obligatory (`I going the bank now ✗`, Wimbledon School). No -ing on state verbs (`I'm knowing ✗`) |
| past | reweight | The Arabic past (فعل ماض) is a good match, so the concept is easy; the work is form: did + base form (`didn't went ✗`), was / were not dropped, and **-ed said without an extra vowel**: /t d ɪd/ (Alzinaidi & Abdel Latif found -ed among the highest-error items), shown in the IPA |
| irregular-past | keep | Drill typed recall; warn against `buyed ✗` (Megaiab) |
| the | reweight | **Key Arabic lesson.** «الحياة صعبة», «التعليم مهم», «أحب القهوة» carry «ال», but English general nouns take **no** article: Life is hard, Education is important, I like coffee (`The pollution is… ✗`, Darwish; Crompton). *the* only for the specific one both people know |
| adjectives | reweight | Adjective **before** the noun: «بيت كبير» → a big house (`a party big ✗`, Hussain; `some information interesting ✗`, Issa et al.). Adjectives never take -s. Arabic أفعل → -er / more…, `more bigger ✗` |
| going-to | keep | The prefix س and سوف cover both *will* and *going to*; keep ko's contrast |
| tense | reweight | Recap built on the contrast: Arabic has two verb forms (ماض، مضارع) plus كان / قد / س and سوف; English has more tenses, and the time word does not replace the form. Preview `be-2` |
| **be-2** | **add** (after `tense`, A1) | See "Additions" below |
| joining | reweight | Arabic chains clauses with و (`…and it pollutes… and the food… and the water ✗`, Darwish): teach *because*, *so*, *but*, *when* and the full stop as the four ways to split. «رغم أن… إلا أن» → *although* **or** *but*, not both (`Although…, but ✗`) [practitioner opinion]. Body examples only |
| numbers | reweight | **Arabic says units before tens**: «خمسة وعشرون» → twenty-five (not *five and twenty*). After 11–99 Arabic uses a **singular** noun («أحد عشر شهرا»), English a plural (eleven months). English uses only 0–9 digits (many learners use ٠–٩ daily). Dates: day/month in Arab countries vs month/day in US English; the Hijri calendar does not appear in English dates. Prices in dirhams (§9). 13 vs 30 by stress |
| smalltalk | reweight | Greeting rituals («السلام عليكم», «كيف الأهل؟», long exchanges of «الحمد لله») → short *How are you? — Good, thanks*. Safe topics: weather, food, travel, work, the weekend; avoid religion, politics, salary and marriage as openers with strangers. Compliments on children and food are fine. Deck localised (§9) |
| **arabic-traps** | **add** (after `smalltalk`, end of A1) | See "Additions" below |
| past-continuous | keep | كان + مضارع («كنت أدرس») maps well onto was / were + -ing; say so |
| will | keep | سوف ≈ will for decisions, offers and promises |
| perfect | reweight | **Key lesson.** No Arabic counterpart («قد فعلت» is close only for "just done"). Teach "experience or result now" (Have you ever…? I've lost my keys). Trap: PP with a finished time (`I have seen him yesterday ✗`, Univext). been to vs gone to |
| modals | reweight | يجب = must / have to / should (three English verbs); ممكن = can / may / maybe (overused *maybe*); «لا يجب» = *mustn't* or *shouldn't*, never *don't have to* |
| to-ing | reweight | أن + مضارع → to + base form («أريد أن أذهب» → I want to go; `I want go ✗`, `I want that I go ✗`). Keep the PHASE2 -ing heading fix (*finish*, *mind*) |
| articles-2 | reweight | Continue the generic focus: «القطط لطيفة» → Cats are cute (not The cats…); unique *the* (the sun, the internet) is where Arabic and English agree |
| first-conditional | reweight | Arabic often uses the **past** after إذا («إذا جئت غدا»): English uses the present after *if* (If you come tomorrow; `If you came tomorrow ✗`, `If you will come ✗`) [practitioner opinion, inference] |
| relative | reweight | **The resumptive pronoun**: «الرجل الذي رأيته» → the man (who) I saw (`the man who I saw him ✗`; `the girl which I told you about her ✗`, proz forum). who for people, which for things (الذي / التي cover both). No comma before defining *who* |
| phrasal | keep | الأفعال المركبة; Arabic has no equivalent, so keep ko's list |
| perfect-2 | reweight | «أسكن هنا منذ ثلاث سنوات» → I've lived here for three years (`I live here since three years ✗`, Univext). منذ = for **or** since |
| narrative | reweight | Past perfect for the earlier event (`after I took the medicine ✗ → had taken`, Issa et al.); split long *and* chains into sentences |
| conditionals | keep | لو → second and third conditional; label as الجملة الشرطية النوع الثاني / الثالث |
| passive | reweight | المبني للمجهول exists but modern Arabic prefers active forms and impersonal plurals («يقولون…»). English passive needs *be* + V3 with the tense: `The house built in 1990 ✗ → was built` (copula omission again) |
| reported | keep | Arabic does not backshift; teach the shift as English-only |
| email | reweight | «تحية طيبة وبعد» / «السيد المحترم» / «وتفضلوا بقبول فائق الاحترام» → Dear / Hi + name, Best regards. **Capital letters** (names, days, months, *I*; Arabic has none) and **short sentences** (split *and* chains) are the two written habits to fix. Names: Mr. / Ms. + surname for formal mail, first name otherwise; titles such as *Dr. Ahmad* with a first name are an Arab habit (proz forum) |
| idioms | keep | Note calques that do not exist in English |

**Totals:** 39 existing lessons (23 A1, 9 A2, 7 B1): **8 keep** (irregular-past, going-to, past-continuous, will, phrasal, conditionals, reported, idioms) and **31 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions; A1 grows to 25. Every verdict is [practitioner opinion] grounded in §4; only articles, *be* (examples only), tense / perfect, agreement, prepositions, countability and word order have fetched Arabic data behind the emphasis.

**Additions**

1. **`be-2`: «فعل الكينونة: متى يلزم ومتى لا يلزم»** (after `tense`, last third of A1; deck «التعريف بالنفس», deck 2).
   - *Reason:* *be* is the Arabic gap the standing rule cannot test (§7): the nominal sentence has no verb, so learners omit *be*, and they insert it before main verbs in the other direction (§4.2: Alshayban 2012; Alolaywi and Hussain examples). The `be` lesson comes second in the course, before the learner has any past tense or continuous; ko-en never returns to *be* as a topic. After `tense`, every form *be-2* contrasts (is / was, is + -ing, *does* vs *is*) has been taught. **This is the grammar gap that most needs its own lesson.**
   - *Content outline:*
     1. Where Arabic has no verb, English has *be*: adjectives (She is tired), nouns (He's a doctor), places (They're at home), ages (I'm 25), and in the past (was / were, where Arabic has كان).
     2. Where English has a main verb, there is **no** *be*: She works / She is working, never `She is work ✗`; It costs ten dollars (`It is cost ✗`); I agree (`I am agree ✗`).
     3. The test (PHASE2-BRIEF): "is there another verb besides *be*?" Yes → no *be* (or *be* + -ing). No → *be* is required.
     4. Questions and negatives: Is she…? / Does she…?; isn't vs doesn't.
     5. A table of Arabic sentences (جملة اسمية / جملة فعلية) with their English forms.
   - *Practice that meets §7* (5 mc → 4 order → 3 fill → 4 type = 16 items; English is A1 vocabulary; `x` and keywords as tested in §7):
     - mc «بالإنجليزية: "هي طالبة"» o: `She's a student.` / `She student.` / `She a student.` / `She is student.` — why «الجملة تحتاج فعل الكينونة is وأداة التنكير a»
     - mc «بالإنجليزية: "الجو حار اليوم"» o: `It's hot today.` / `It hot today.` / `Hot today.` / `Is hot today.` — why «لا جملة بلا فعل في الإنجليزية: It is»
     - mc «بالإنجليزية: "الكتاب يكلف عشرة دولارات"» o: `The book costs ten dollars.` / `The book is cost ten dollars.` / `The book is costs ten dollars.` / `The book costing ten dollars.` — why «costs فعل، فلا نضع قبله is»
     - mc «بالإنجليزية: "أنا موافق"» o: `I agree.` / `I am agree.` / `I agrees.` / `I agreeing.` — why «agree فعل في الإنجليزية، لا صفة» (not `I'm agree`, which is the same error as `I am agree` in another spelling)
     - mc «بالإنجليزية: "كانوا في البيت أمس"» o: `They were at home yesterday.` / `They at home yesterday.` / `They was at home yesterday.` / `They are at home yesterday.` — why «في الماضي were مع they»
     - order p «أخي طبيب», a `My brother is a doctor`, x `the` — why «اسم المهنة يحتاج أداة التنكير a، والجملة تحتاج فعل الكينونة is» (hit)
     - order p «المفاتيح على الطاولة», a `The keys are on the table`, x `key` — why «المفاتيح أكثر من واحد: صيغة الجمع keys، ومعها are» (hit)
     - order p «هي تعمل في مستشفى», a `She works at a hospital`, x `is the` — why «works فعل، فلا is قبله، والمستشفى غير محدد: أداة التنكير a» (hit)
     - order p «كان الفيلم مملا», a `The movie was boring`, x `bored` — why «الفيلم هو الممل: boring، و was ضرورية في الماضي» (no hit; 3 of 4 is enough)
     - fill q `My parents __ teachers.` p «والداي معلمان» a `are` o `is` / `am` / `be` — why «my parents = they، ومعها are»
     - fill q `It __ ten dollars.` p «ثمنه عشرة دولارات» a `costs` o `is cost` / `is costs` / `costing` — why «costs فعل يكفي وحده» (not `cost`, which is a correct past tense)
     - fill q `Where __ you yesterday?` p «أين كنت أمس؟» a `were` o `was` / `are` / `did` — why «سؤال عن الماضي مع you: were»
     - type p «أنا مهندس», a `I'm an engineer` | `I am an engineer`, hint «engineer — المهنة مع أداة التنكير», x `a` — why «engineer يبدأ بصوت متحرك: أداة التنكير an، ومعها am» (hit)
     - type p «الأطفال في المدرسة», a `The children are at school` | `The kids are at school` | `The children are in school` | `The kids are in school`, hint «children · school — مع فعل الكينونة», x `is` — why «الأطفال المعروفون: أداة التعريف the، و are مع الفاعل الجمع» (hit)
     - type p «هو لا يحب القهوة», a `He doesn't like coffee` | `He does not like coffee`, hint «like · coffee — النفي مع does», x `isn't` — why «like فعل، فننفي باستخدام doesn't وليس isn't» (no hit)
     - type p «كانت الغرفة نظيفة», a `The room was clean`, hint «room · clean — في الماضي», x `is` — why «الغرفة معروفة: أداة التعريف the، وفعل الكينونة في الماضي was» (hit)
     - Count: order 3 / 4 hits, type 3 / 4 hits (need 2 and 2). The content agent checks the vocabulary against earlier lessons and the mc options against PRACTICE-SPEC (4 distinct options, `o[0]` correct).
   - *Parity:* new lesson id only; it links an existing deck.
2. **`arabic-traps`: «فخاخ الترجمة الحرفية من العربية»** (after `smalltalk`, end of A1; new deck 21 «فخاخ الترجمة الحرفية», §9).
   - *Reason:* lexical and collocation transfer runs through every practitioner source and through Darwish's lexical and semantic categories (§4.12), and no ko-en lesson covers it. It mirrors zh `chinglish`, th `tinglish`, ru `runglish`, id `indo-english`, ja `katakana-english` and es `false-friends`.
   - *Content outline:*
     1. Verbs translated word for word: «افتح / أغلق النور» → *turn on / off the light*; «اعمل حفلة» → *have / throw a party*; «أعمل واجبي» → *do my homework*; «ارتكب خطأ» → *make a mistake*; «يأخذ صورة» → *take a picture* (here English agrees).
     2. Age and states: «عمري 25 سنة» → *I'm 25* (not *I have 25 years*); «أنا موافق» → *I agree*; «أشعر بالملل» → *I'm bored* vs *It's boring*.
     3. Verb + preposition calques: *explain it to me* (not *explain me*), *listen to*, *discuss the plan*, *married to*, *depend on*.
     4. False friends and lookalikes: *actually* ≠ «حاليا» (= *currently*), *library* ≠ bookshop, *sensible* ≠ «حساس» (= *sensitive*), *assist* ≠ «يحضر» (= *attend*) (Univext's list).
     5. Uncountables that are plural in Arabic: *information*, *advice*, *news*, *furniture*.
   - *Practice that meets §7* (noun-phrase items with an article or number twin in `x`; tested against the regex):
     - order p «أطفئ النور», a `Turn off the light`, x `a` — why «النور المعروف للطرفين: أداة التعريف the، والفعل turn off وليس close»
     - order p «عمري عشرون عاما», a `I'm twenty years old`, x `year` — why «بعد twenty صيغة الجمع years، ونقول I'm وليس I have»
     - type p «لنقم حفلة!», a `Let's have a party` | `Let's throw a party`, hint «party — مع have وليس make», x `make` — why «حفلة واحدة غير محددة: أداة التنكير a، ونقول have a party وليس make» (every variant has *a* and stays within PRACTICE-SPEC's 2–5 words)
     - type p «أحتاج بعض المعلومات», a `I need some information`, x `informations` — why «information اسم غير معدود: بلا s»
   - *Parity:* new lesson id plus a new deck (`extraLessons` and a `decks["count"]` deviation).

**Considered and not added:**
- **`articles-3`** (zh, ja and ru added it after `passive`, and its English side could be copied from ja with *Tokyo* localised): the generic-*the* trap is real for Arabic, but the standing rule already re-tests articles in all 41 sets, and `articles`, `the` and `articles-2` are reweighted towards exactly the Arabic patterns (*a / an* omission, generic *the*). *be* has no such safety net, so `be-2` is the better use of the slot. `articles-3` is the first candidate if the lead allows a third addition.
- **A writing-mechanics lesson** (capitals, punctuation, run-ons): the largest counted categories (§4.6–4.7), but the engine cannot test capitals or punctuation in typed answers (PRACTICE-SPEC normalises them away). Covered in lesson bodies (`be`, `joining`, `email`).
- **A relative-clause lesson**: `relative` is reweighted around the resumptive pronoun; the evidence is one count (1.2%) and practitioner examples.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion]. The audience spans some twenty countries, so the home setting is **pan-Arab and rotates**; no single country is "the learner's country".

| ko-en | ar-en (English side) | Arabic side |
|---|---|---|
| Minji (and other Korean names) | **Sara** (main) and **Omar**; alternates Lina, Adam, Nadia, Karim, Rami, Maya, Ali | سارة، عمر، لينا، آدم، نادية، كريم، رامي، مايا، علي |
| Mr. Kim / formal names | Mr. Haddad, Ms. Mansour in work scenes | السيد حداد، السيدة منصور |
| Seoul | **Dubai** | دبي |
| Busan | **Cairo**; alternates Riyadh, Amman, Casablanca, Beirut, Doha, Jeddah, Muscat | القاهرة، الرياض، عمّان (the one place name that keeps its shadda: unvowelled «عمان» also reads as Oman)، الدار البيضاء، بيروت، الدوحة، جدة، مسقط |
| Jeju / beach trips | the Red Sea, Aqaba, Sharm El Sheikh, Agadir; abroad: Istanbul, London | البحر الأحمر، العقبة، شرم الشيخ، أغادير |
| Seoul National University | "a university in Cairo" (generic; no real university name) | |
| kimchi, bibimbap | **falafel, hummus, shawarma, kabsa, koshari, couscous**, dates, Arabic coffee, kunafa | فلافل، حمص، شاورما، كبسة، كشري، كسكس، تمر، قهوة عربية، كنافة |
| soju, beer | non-alcoholic by default (tea, coffee, juice, mint tea); **no alcohol or pork** in examples | |
| K-pop, K-drama | Arabic music, TV series, football, video games (genres, never artists or clubs) | الموسيقى العربية، المسلسلات، كرة القدم |
| Gangnam | downtown, the old city, the mall | وسط المدينة، المدينة القديمة، المول |
| Chuseok, Korean holidays | **Eid** (Eid al-Fitr, Eid al-Adha), **Ramadan** as a neutral cultural fact (iftar with family), New Year, birthdays, weddings. No national days | العيد، رمضان |
| 존댓말 / 반말 | أنت / حضرتك and title-plus-name comparisons (`polite` only) | |
| won (₩) | **dirhams** (UAE, Morocco) for home scenes: write `fifty dirhams`, `50 dirhams`; dollars for scenes abroad; never `AED`, `د.إ` or `$` + number for dirhams in English strings (TTS) | 50 درهما |
| Korea / Korean (the learner's own country and language) | **Egypt / Jordan / Saudi Arabia… (rotate)** for *I'm from…*; **Arabic** for the language | مصر، الأردن، السعودية؛ العربية |

**Name and TTS rules:**
- **Personal names: only names the en-US voice reads close to the Arabic.** Sara, Omar, Lina, Adam, Nadia, Karim, Rami, Maya, Ali and Laila read well [practitioner opinion; listen once on the engine's voice, §11]. Avoid names with ح خ ع غ ق and long vowels that English spelling garbles (Muhammad is spelled many ways; Khaled, Abdulrahman, Ghada, Aisha are risky). One woman and one man as main characters, so translations show both genders (§2).
- **Places:** only the cities in the table, in their established English spellings. *Riyadh* and *Doha* need a listening check.
- **Food words** stay in their common English spelling (*falafel*, *hummus*, *shawarma*); gloss once where English speakers may not know them (*kabsa* = spiced rice with meat, *koshari* = rice, lentils and pasta).
- **Religion and politics:** religious references only as everyday culture (Eid greetings, Ramadan hours, Friday as a weekend day in much of the region); never doctrine, never politics or conflict. «إن شاء الله» appears in `polite` and the deck notes as a phrase to translate, not to comment on.
- **Weekend:** Friday–Saturday in most Gulf states and Egypt, Saturday–Sunday in the UAE (since 2022) and the Maghreb [practitioner opinion; not verified, §11]. English examples say *on the weekend* without naming days, so every learner reads them as true.

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (Seoul, Busan, kimchi, K-pop, Minji). **Leave those English strings unchanged** (parity) and translate the Arabic side literally («سول», «بوسان», «كيمتشي», «الكيبوب»). It reads as an Arab learner talking about Korea, which is natural: Korean pop culture is popular across the region [practitioner opinion]. Do not file per-item deviations; if the lead wants them localised later, use one bulk deviation with the reason "localisation".

**Deck localisation vs parity:** parity compares English deck targets per position. Every card whose English changes (*My name is Minji.* → *My name is Sara.*, *I live in Seoul.* → *I live in Dubai.*, *I'm from Korea.* → *I'm from Egypt.*, *Do you speak Korean?* → *Do you speak Arabic?*, *Your Korean is really good!* → *Your Arabic is really good!*) needs a `decks["<deck name>"]` entry listing the card indexes, with the reason «localisation per profile ar.md §9», as ja, zh, th and ru did. **Reuse zh's and ru's entries** to see which positions change. DIALOG and EXAMPLES keyed by those targets must be re-keyed. Appended ar-only cards go in the same entry.

**Meanings with `nativeScript` set:** a meaning, note or gloss must contain an Arabic letter. Loanwords are written in Arabic script («تاكسي», «فندق», «قائمة الطعام», «بيتزا»), never left in Latin letters («taxi» fails). Write prices as «50 درهما» (Western digits, §10). Brand terms (XP, OK) need an Arabic word beside them («نقاط الخبرة XP», «حسنا»).

**Deck names (FINAL).** Rows 1–20 replace the Korean course's 20 decks in the same order (the third column glosses each position in English and lists the lessons that link to it); row 21 is the ar-only deck, appended last. Names use «و» between items (the Arabic way of listing, instead of ko's «·»), parentheses for the travel deck, Western digits with a space («عبارات أساسية 1»). They contain no tatweel, no harakat and no invisible characters (deck names are lookup keys), and every name is NFC.

| # | Arabic name | linked lesson or notes |
|---|---|---|
| 1 | **التحيات** | Greetings; no lesson links in ko-en |
| 2 | **التعريف بالنفس** | Self-introduction; linked from `articles`, `be`, `present`, `third-s`, `object-have`, `perfect-2`, and the ar-only `be-2` |
| 3 | **عبارات أساسية 1** | Survival English 1; linked from `polite` |
| 4 | **عبارات أساسية 2** | Survival English 2; linked from `questions` |
| 5 | **الاتجاهات والمواصلات** | Directions and transport; linked from `the`. Localise to metro, taxi, a ride-hailing app (generic) |
| 6 | **الطلب في المطعم** | Ordering at a restaurant; linked from `countable`. Add *Can I get the check?* and *No ice, please* |
| 7 | **المقهى والبقالة** | Café and convenience store; no lesson links |
| 8 | **التسوق والدفع** | Shopping and paying; linked from `plurals`, `adjectives`, `relative`. Prices in dirhams at home, dollars abroad |
| 9 | **الأرقام والوقت والتاريخ** | Numbers, time and dates; linked from `prep`, `numbers`. Notes: units-before-tens in Arabic, day/month order |
| 10 | **دردشة يومية** | Small talk; linked from `it-there`, `can-like`, `continuous`, `past`, `irregular-past`, `going-to`, `tense`, `smalltalk`, `will`, `to-ing` |
| 11 | **المشاعر وردود الفعل** | Feelings and reactions; linked from `joining`, `past-continuous`, `conditionals`. Notes flag *bored / boring* |
| 12 | **المجاملات والإعجاب** | Compliments and liking; no lesson links |
| 13 | **العمل والبريد الإلكتروني** | Work and email; linked from `first-conditional`, `passive`, `email`. Office, hospital and airline English |
| 14 | **الهاتف واختصارات الرسائل** | Phone and text abbreviations; linked from `reported` |
| 15 | **السفر (المطار والفندق)** | Travel (airport and hotel); linked from `perfect`, `articles-2` |
| 16 | **المستشفى والطوارئ** | Hospital and emergencies; linked from `modals` |
| 17 | **الأفعال المركبة** | Phrasal verbs; linked from `phrasal` |
| 18 | **فخاخ النطق** | Pronunciation traps; linked from `pron`. Keep the shared pairs; append the Arabic pairs below |
| 19 | **التعابير الاصطلاحية** | English idioms; linked from `idioms` |
| 20 | **الأفلام والمسلسلات والعامية** | Movies, series and slang; linked from `narrative` |
| 21 | **فخاخ الترجمة الحرفية** | ar-only, linked from `arabic-traps`; ≥ 20 cards; needs a `decks["count"]` deviation |

**Deck content changes** [practitioner opinion unless noted]:
- **Deck 21 «فخاخ الترجمة الحرفية»** (≥ 20 cards; each `note` starts «ترجمة حرفية:» or «كلمة مخادعة:» and names the Arabic source): *Turn on the light.* / *Turn off the light.* (افتح / أغلق النور), *I'm 25 years old.* (عمري…), *I agree with you.* (أنا موافق), *I'm having a party.* (أعمل حفلة), *I need to do my homework.* (أعمل واجبي), *I made a mistake.* (ارتكبت خطأ), *I'm bored.* / *This class is boring.*, *Can you explain it to me?* (اشرح لي), *I'm listening to music.*, *Let's discuss the plan.* (نناقش في الخطة), *She's married to a doctor.* (متزوجة من), *It depends on you.* (يعتمد عليك), *I need some information.* (معلومات), *Can I give you some advice?* (نصائح), *Actually, I'm busy.* (actually ≠ حاليا), *I study at the library.* (library ≠ مكتبة لبيع الكتب), *My friend and I went shopping.* (أنا وصديقي), *What's your name?* (no *What your name?*), *Take care.* (مع السلامة), *Hopefully.* / *I hope so.* (إن شاء الله), *Excuse me.* (لو سمحت).
- **Deck 18 «فخاخ النطق»:** keep the ko cards (their IPA changes, not the English). Append Arabic pairs: *park / bark*, *pull / bull*, *pen / Ben*, *pie / buy*, *very / ferry*, *van / fan*, *bit / bet*, *cat / cut*, *street*, *spring*, *asked*, *singing*, *Wednesday*, *listen*. Each appended card needs the deck's `decks` entry (ja precedent).
- **Small talk:** *How was your weekend?*, weather in summer heat, family questions only in friendly scenes; notes explain that long greeting exchanges shrink to *Hi, how are you?* in English.
- **Travel:** departures from Dubai, Cairo or Riyadh (generic airport scenes); immigration and hotel check-in; tipping (expected in the US, customary but smaller in much of the region).
- **Work and email:** meeting, deadline, schedule, invoice, shift, patient, flight; the formal Arabic openings and closings replaced as in §8 `email`.
- **Phone and text abbreviations:** keep the English (LOL, BTW). Explain with Arabic chat habits in notes (ههههه ≈ LOL; Arabizi with digits such as 3 and 7 for ع and ح is not English and does not belong in English messages).
- **Food and shopping:** dirhams at home, dollars abroad; *No sugar, please*, *Can I get this to go?*.

## 10. Interface wording notes

[Curriculum convention from Proton's Arabic guidance, the Onetime Secret translator guide, Arabeyes' standards and the W3C Arabic layout note; otherwise practitioner opinion. The Microsoft Arabic style guide could not be read (§11). Engine facts were read in `src/app.html`.]

**What the engine already does for Arabic** (read in `src/app.html`; the interface writer relies on it and must not imitate it with characters):
- `document.documentElement.dir` comes from `uiDir()` and `RTL_LANGS`, so the whole layout mirrors under `dir="rtl"` through logical properties.
- English and IPA stay left to right: `.face .ko`, `.ex .k` / `.ex .r`, `.pron`, `[lang=en]`, the answer tiles (`.tiles`, `.pool`, `.built`, `.prac-built`, `.prac-pool`) and `kbd` get `direction: ltr; unicode-bidi: isolate`.
- Cells and options that may hold either language take their direction from their first strong letter: `.tbl td/th`, `.opt`, `.prac-q`, `.q`, `.qbody`, `.chip`, `.rvq`, `.rvans` get `unicode-bidi: plaintext`; so do `<b>` / `<strong>` in lesson bodies, tips, notes, `why` and feedback.
- The answer input is `direction: ltr` (its Arabic placeholder is right to left).
- `html[lang=ar]` sets an Arabic font stack, `line-height: 1.75` (body) and `1.8` (paragraphs), `nav a { overflow: visible; line-height: 1.5 }` and `* { letter-spacing: 0 !important }`.

**Register** (§2): verbal nouns for actions, impersonal or «نحن» sentences for states and the app, no gendered second person in UI chrome.
- **Buttons, tabs, menu items, chips: a verbal noun (المصدر) or a noun, no punctuation, no «من فضلك»:** «بدء», «متابعة», «التحقق», «إرسال», «حفظ», «إلغاء», «رجوع», «تخطي», «إعادة المحاولة», «عرض الإجابة», «التالي», «إغلاق», «بدء الدرس», «فتح الدروس», «بدء الجلسة». Proton: "For neutral or instructional content, use the infinitive form" ([Proton](https://localize.proton.me/t/guidance-for-arabic/3339)); Onetime Secret's table: "submit | إرسال", "cancel | إلغاء". Keep CTAs ≤ 14 characters where possible.
- **Practice instructions** (one per item type, as headings rather than commands): «اختيار الإجابة الصحيحة», «ترتيب الكلمات», «ملء الفراغ», «الكتابة بالإنجليزية». Never «اختر / اختاري», «رتب», «اكتب».
- **Ongoing states:** «جار الحفظ…», «جار التحميل…», «جار المزامنة…» (Proton's «جارٍ» pattern, written without tanween).
- **Feedback lines are about the answer, not the person:** «إجابة صحيحة!», «ليست صحيحة بعد», «إجابة ممتازة!», «عمل رائع!», «اكتملت مراجعة اليوم!». **Never «أحسنت»** (masculine; «أحسنتِ» needs a diacritic to be feminine) or «أنت رائع / رائعة». Errors say what happened and what to do, blame-free: «تعذرت المزامنة. إعادة المحاولة لاحقا ممكنة.» or «تعذرت المزامنة» plus a «إعادة المحاولة» button.
- **When a sentence must address the learner,** use forms whose letters are the same for both genders: past-tense verbs and attached pronouns («أكملت 5 دروس» is gender-neutral unvowelled; «تقدمك», «حسابك», «هدفك»), or the passive / impersonal («يمكن تغيير الهدف من الإعدادات»). Avoid present-tense second-person verbs (تستطيع / تستطيعين) and second-person adjectives.
- Exclamation marks only for praise and milestones.

**Bottom nav (7 tabs; each one short word, ≤ 8 characters counted as code points; measured with `[...s].length` and `Intl.Segmenter`).**

| English | Arabic label | Code points | Note |
|---|---|---|---|
| Today | اليوم | 5 | |
| Practice | تمارين | 6 | Lesson practice sets; bare plural noun |
| Review | مراجعة | 6 | SRS review (verbal noun) |
| Lessons | الدروس | 6 | With ال: bare «دروس» reads like a heading fragment |
| Drills | مهارات | 6 | "Skills": the reading, listening, building and role-play drills; chosen so it does not repeat «تمارين» / «تدريب» (vi chose *Kỹ năng*, th «ทักษะ», for the same reason) |
| Progress | التقدم | 6 | With ال: bare «تقدم» also reads as the verb "advance(s)" |
| Feedback | ملاحظات | 7 | Longest label; page title «إرسال ملاحظات» |

If the bar still shows **Read** instead of Drills, use «قراءة» (5). Arabic tab labels are visually narrower than their code-point count suggests (cursive joining), but the lead checks «ملاحظات» in the real layout; the engine's `nav a { overflow: visible; line-height: 1.5 }` keeps dots and descenders from being clipped.

**(a) Counts: one translation per pattern, so every count pattern must be number-neutral.**
- Arabic has six plural categories: `Intl.PluralRules('ar')` gives zero (0), one (1), two (2), few (3–10, 103…), many (11–99, 111…) and other (100–102, 1000…) (checked locally, ICU 78.3). The noun after a number changes with each: بطاقة واحدة، بطاقتان، 3 بطاقات، 11 بطاقة، 100 بطاقة; number words even take the opposite gender for 3–10. The engine has **one string per count pattern** and fills `{1}` with a number, so any noun or agreeing word next to the slot is wrong for most numbers.
- **The only allowed devices:**
  1. **Plural label + colon + number**: «البطاقات: {1}», «الأيام المتتالية: {1}». The label is a definite plural noun naming the category, so it reads correctly for every number (rendered at 0, 1, 2, 3, 11 and 100: «البطاقات: 0 / 1 / 2 / 3 / 11 / 100»).
  2. **A participle or verbal-noun label** for states: «المتبقي: {1}», «المستحق الآن: {1}», «المحفوظ: {1}», «المقفل: {1}».
  3. **A fixed abbreviation or Latin unit after the number**: «{1} د» (minutes), «{1} ث» (seconds), «{1} XP», «{1} KB», «{1}%».
  4. **Ordinal and "N of M" patterns**, where the noun comes first and does not agree with the number: «البطاقة {1} من {2}», «الأسبوع {1} من {2}», «الجولة {1} من {2}», «المستوى {1}», «الدرس {1}».
- **Forbidden:** a noun right after the slot («{1} بطاقات», «{1} يوم», «{1} أيام»); a dual or «واحد / واحدة» in a template; an adjective or verb that agrees with the count («{1} بطاقات جديدة», «تبقت {1}», «بقي {1} يوما»); number words; Arabic-Indic digits typed into templates; placing two counts in one clause that need agreement («{1} من أصل {2} بطاقة»).
- **Literal numbers that never change** (the "5" in *Learn 5 at a time*, the "3" in *pass {n}/3*) are not slots: write them with correct grammar («5 بطاقات في كل مرة»).
- keys.json has separate singular and plural English templates (`{n} day` / `{n} days`, `{n} card` / `{n} cards`, `… in {n} day.` / `… in {n} days.`, `· {n} card from mastery` / `· {n} cards from mastery`, `{n} weekly badge` / `badges`). **Give each pair the identical neutral wording**; the "singular" one fires at 1, the "plural" one at 0, 2, 3, 11 and 100 alike.
- Writers render every count string at **0, 1, 2, 3, 11 and 100** before submitting.

Counted nouns and their labels (use exactly):

| English in keys.json | Arabic label | Sample render |
|---|---|---|
| card(s); cards learned / mastered | **البطاقات:** / البطاقات المحفوظة: / البطاقات المتقنة: | «البطاقات: 21» |
| due, cards due, due now | **المستحق للمراجعة:** / المستحق الآن: | «المستحق للمراجعة: 3» |
| deck(s); decks selected | **المجموعات:** / المجموعات المختارة: | «المجموعات: 4 · البطاقات: 260» |
| day(s); streak; active days | **الأيام:** / **الأيام المتتالية:** / أيام النشاط: | «الأيام المتتالية: 1» |
| week(s); active weeks | **الأسابيع:** / أسابيع النشاط: | «تم وضع الخطة. الأسابيع: 6.» |
| lesson(s); lessons done; planned | **الدروس:** / الدروس المكتملة: / الدروس المخططة: | «الدروس المكتملة: 5/39» |
| min; s | **{1} د** / **{1} ث** | «5 د», «إعادة إرسال الرسالة ({1} ث)» |
| word(s) | **الكلمات:** | «الكلمات: 12» |
| point(s), pts | **النقاط:** | «النقاط: 120» |
| mistake(s), × missed | **الأخطاء:** | «الأخطاء: 3» |
| XP; XP today | **{1} XP** / نقاط الخبرة اليوم: {1} | «120 XP» |
| review(s) | **المراجعات:** | «آخر المراجعات: 50 · الصحيح: 85%» |
| question(s) (`q`), item(s), answered | **الأسئلة:** / **التمارين:** / الإجابات: | «التمارين: 14 · من الاختيار إلى الكتابة» |
| run(s), tried | **المحاولات:** | «أفضل محاولة أولى 80% · المحاولات: 3» |
| quiz(zes) | **الاختبارات:** | «الاختبارات: 1 · آخر نتيجة 80%» |
| round(s) left | **الجولات المتبقية:** | «الجولات المتبقية: 2» |
| row(s) (import), new, already in deck | **الصفوف:** / الجديد: / الموجود مسبقا: | «الصفوف: 12 · الجديد: 3» |
| seen ×N | **مرات العرض:** | «مرات العرض: 4» |
| prediction(s) | **التوقعات:** | |
| pattern(s) (grammar index) | **القواعد:** | «📚 فهرس القواعد · القواعد: 24» |
| dialogue(s) | **الحوارات:** | |
| weekly badge(s) | **الشارات الأسبوعية:** | «الشارات الأسبوعية: 2» |
| new cards/day | **البطاقات الجديدة يوميا:** | «البطاقات الجديدة يوميا: 10» |
| left (cards) | **المتبقي:** | «المتبقي: 7 · المجموعات: 3» |
| locked | **المقفل:** | «🔒 المقفل: 5» |
| streak shield left | **الدروع المتبقية:** | |
| imported / merged | البطاقات المستوردة: / بطاقات التقدم الجديدة: | «تم الاستيراد. البطاقات المستوردة: 15.» |
| "next due in N days" | الأيام المتبقية: | «لا توجد بطاقات مستحقة الآن. الأيام المتبقية حتى الموعد التالي: 3.» |
| "~N days of new cards" | الأيام التقريبية للبطاقات الجديدة: | |
| `{n}% correct` | الصحيح: {1}% | «الصحيح: 85%» |

**(b) Digits and dates.**
- **Western digits (0–9) everywhere**, in content, UI strings and engine output. **Never Arabic-Indic digits (٠–٩)** in templates or content, and no Eastern Arabic-Indic (۰–۹).
  - *Why:* the course teaches English, where 0–9 is the only system; prices, times and years in the English rows use 0–9, and mixing ٣ in the Arabic with 3 in the English on one card is confusing. Western digits are standard in the Maghreb and the UAE and familiar everywhere through phones and prices; CLDR's generic `ar` locale now defaults to Latin digits (`Intl.NumberFormat('ar')` gives «1,234,567.5», checked locally).
  - **Counter-evidence, recorded:** the W3C layout note says Arabic-Indic digits are used in "Eastern Arabic-speaking countries; e.g. Egypt, Saudi Arabia, Iraq" and European digits in the Maghreb ([W3C alreq](https://www.w3.org/TR/alreq/)), and `Intl` with `ar-EG` or `ar-SA` prints «١٨ نوفمبر ٢٠٢٦» (checked). The choice is a design decision for a language course; the lead can revisit it per region later.
- **Engine locale: `ar-u-nu-latn`** (or plain `ar`) for every `Intl` call; never `ar-EG` / `ar-SA` / the browser locale, which switch to Arabic-Indic digits. **Never the Hijri calendar by default** (`-u-ca-islamic*`): Gregorian dates match the English rows and the `numbers` lesson. (Plain `ar` already resolves to `calendar: gregory`, checked.)
- **Formats** (`Intl.DateTimeFormat('ar-u-nu-latn')`, checked locally):
  - long date «18 نوفمبر 2026»; day + month «18 نوفمبر»; weekday + date «الأربعاء، 18 نوفمبر»; short date «18/11/2026» (day/month/year, the Arab order; Proton also prescribes dd/mm/yy);
  - time «2:05 م» (12-hour with ص / م, as `Intl` prints; Proton: "Use 12-hour format followed by صباحًا or مساءً");
  - numbers «1,234,567.5»; percent «85%».
  - Month names are the transliterated set `Intl` uses (يناير … ديسمبر), standard in Egypt, the Gulf and much of North Africa; Levantine and Iraqi users also read them. Never hand-write month names in UI strings. The `numbers` lesson body may give both: «نوفمبر (تشرين الثاني)». Morocco's own forms (نونبر) are not used.
- **`Intl` inserts direction marks itself** (the short date contains U+200F after each number; the percent format puts U+200E on both sides of «%»). That is engine output and is fine. **Writers never type such marks** in templates or content, and hand-written templates use plain «{1}%» with no space.
- **Decimals** (only `{f}s per card`): the engine's `Intl` output («2.5»). Proton prefers a decimal comma; with Western digits the point is the CLDR `ar` default, and the app shows decimals in one stat only.
- **Ranges:** «من 5 إلى 10», not «5–10» (Proton: "use "من … إلى" or "ما بين … و""). **Fractions** «5/39» are fine: digits joined by «/» stay one left-to-right number in Arabic text.
- **Currency** in UI from `Intl` only; in content write «50 درهما» and in English strings `50 dirhams` (§9).

**(c) Bidirectional text.**
- **English words, IPA and numbers inside Arabic sentences:** write them bare, with one normal space on each side. The engine isolates English examples (`<b>` in lesson bodies, `.ex`, `.pron`, tiles, `[lang=en]`); in plain-text fields the Unicode bidi algorithm orders them. **Writers never add invisible direction marks** (LRM, RLM, ALM, embeddings, isolates). If a line renders badly, reword it.
- **Rendered check** (Chromium via Playwright, a scratch page with `dir="rtl"` and the engine's `.prac-q { unicode-bidi: plaintext }`): «نقول في الإنجليزية: I agree», «هل نستخدم a؟», «الدروس المكتملة: 5/39», «إعادة إرسال الرسالة (30 ث)» and a `why` that starts with an English word («teacher اسم معدود…») all lay out correctly. These did not: «…للفراغ: I __ a student.» and «البطاقة: Hello.» (the English full stop jumps to the far left), «+50 XP» (shows as *XP 50+*), «XP: 120» (the Latin label lands on the wrong side of the colon) and «85%» (shows as *%85*). «البطاقة: <bdi>Hello.</bdi>» was correct.
- **Order inside a line:** put the Arabic first and the English after it («نقول في الإنجليزية: I agree»), or embed short English words mid-sentence («نضيف s إلى الفعل»). **No English full stop, question mark or exclamation mark at the end of an Arabic line**: drop it (answers are compared without it anyway) or continue the sentence in Arabic. Arabic punctuation after a final English word is fine («…قبل a؟» renders correctly).
- **Latin units and signs:** «{1} XP» and «{1} KB» show the unit to the left of the number, which reads correctly right to left (number, then unit); keep them. Never put a Latin word before a colon («XP: {1}» → «نقاط الخبرة: {1}»), and never start a translated string with «+» before a number («+50 XP» → «مكافأة: 50 XP»); the engine's own `#hdrStat` and stats are isolated and may keep «+50 XP».
- **Punctuation:** «،» «؛» «؟» after Arabic words; «:» (ASCII colon, standard in Arabic) before an English example; English examples keep their own English punctuation inside the isolated span. No space before «:» «،» «؛» «؟»; one space after.
- **Slots that will hold a Latin string** (`{x}` with an English card target, a deck or name typed by the user, an e-mail address): put the slot **at the end after a colon** («البطاقة: {1}») or **at the start** before a colon («{1} · تم الإتقان»), never between two Arabic words and never directly before Arabic punctuation. Even at the end, a value with its own full stop («Hello.») renders with the stop on the wrong side (rendered check above). **Ask the engine owner to wrap every interpolated slot in `<bdi>`**, which fixed it in the rendered check and makes any position safe (§11).
- **Percent:** write «{1}%» with no space and no marks. In an Arabic line it renders as *%85* (rendered check), which is the Arabic convention W3C describes (the sign "on the left after the number"); `Intl`'s `ar-u-nu-latn` output instead forces *85%* with marks. Both read correctly; the engine owner may isolate percentages for consistency (§11). Signed numbers: see Latin units above.
- **Error marks and arrows:** see §2 (✗ / ✓ with «والصواب:», no arrows).
- **Mirroring:** the layout mirrors, but **icons with meaning do not**: ✓ ✗ 🔊 ▶ (play) stay as they are; chevrons and back arrows mirror (engine CSS, not content).

**(d) Characters.**
- **No tatweel (ـ, U+0640)** anywhere, including deck names and headings. W3C warns that "excessive use of kashida… results in uneven color"; tatweel also breaks search and keyword matching.
- **No harakat, tanween or shadda** in UI text and content («شكرا», «جدا», «جار التحميل»), with two exceptions: a lesson body that teaches a sound may vowel a word (e.g. «بِت / بَت» to show *bit / bet*), and a word whose meaning changes without them may carry the one needed mark (Arabeyes §3.2: harakat are added "if the omission or addition of a haraka can change the meaning of the word"; e.g. «عمّان», the city, vs «عمان», Oman). Never in deck names, keywords or tab labels.
- **NFC** for all text; Arabic letters typed as normal letters (U+0621–U+064A), **never presentation forms** (U+FB50–U+FDFF, U+FE70–U+FEFF; e.g. the ligature ﻻ must be typed as لا). Use Arabic ي (U+064A) and ك (U+0643), never the Persian ی (U+06CC) or ک (U+06A9), which look the same in some fonts but fail search (nativeScript accepts them so a stray one does not fail validation; reviewers grep for them).
- Hamza written, ة / ه and ي / ى kept distinct (§2).

**(e) Fonts and spacing (engine; already in place).**
- **System Arabic fonts only.** The current stack (`'DM Sans','Geeza Pro','SF Arabic','Segoe UI','Noto Naskh Arabic','Noto Sans Arabic','Tahoma',system-ui,sans-serif`) draws English and digits in DM Sans and Arabic in the platform font (Apple: Geeza Pro / SF Arabic; Windows: Segoe UI; Android: Noto) [practitioner opinion; platform defaults not verified on a fetched page]. No web font is needed.
- **Taller line height:** W3C: "Arabic ascenders and descenders extend much further than those of the Latin script." The engine's 1.75 / 1.8 is right; one-line labels and chips need vertical padding, and no fixed-height box with `overflow: hidden` may hold Arabic text.
- **Letter-spacing must be zero** (the engine forces it). Spacing between joined letters breaks the cursive connection; W3C: "Moving two joined characters closer to or further from each other creates undesirable results." Uppercase transforms in the engine CSS have no effect on Arabic, so small-caps labels simply appear in normal letters.
- **IPA** stays in the monospace `.pron` font (Latin); check ˈ, ‖, ʃ, ŋ and θ on device.

**Language-name slots.** profile.json `name.ar` is **«الإنجليزية»**, and `Intl.DisplayNames('ar').of('en')` returns the same «الإنجليزية» (checked locally), so the slot always holds the definite, feminine form. Every Arabic language name from `Intl` has that shape (الكورية، اليابانية، الإسبانية، العربية…, checked), so templates that work for one work for all.
- **Where it can sit:** at the start before a colon («{1}: …»); after a colon («الدورة الحالية: {1}»); as an adjective after «اللغة» («اللغة {1}» → «اللغة الإنجليزية»); after a free-standing preposition («في {1}», «من {1}», «إلى {1}», «عن {1}»).
- **Where it cannot:** after an attached prefix («ب{1}», «ل{1}», «و{1}», «ك{1}»: «ل» + «الإنجليزية» must be «للإنجليزية», which a slot cannot produce); as the first term of a construct («{1} الأساسية» is fine as an adjective phrase, but «كتب {1}» is not); after another ال; and with masculine agreement anywhere (any word that agrees with the slot is feminine singular: «{1}: ما هدفك من تعلمها؟»).

| keys.json template | Arabic (renders as) |
|---|---|
| Change language · {x} | `تغيير اللغة · {1}` (→ تغيير اللغة · الإنجليزية) |
| Now learning {x} · progress saved per course | `الدورة الحالية: {1} · يحفظ التقدم لكل دورة` |
| How much {x} do you know? | `مستواك في {1}؟` |
| What do you want {x} for? | `{1}: ما هدفك من تعلمها؟` |
| type it in {x} | `لغة الإجابة: {1}` |
| Type in {x}… | `الكتابة باللغة {1}…` |
| Type the {x}, or tap Check again to give up. | `لغة الإجابة: {1}. لعرض الإجابة: الضغط على «التحقق» مرة أخرى.` |
| No {x} keyboard? Use tiles | `لا توجد لوحة مفاتيح للغة {1}؟ الإجابة بقطع الكلمات` |
| Learning {x} 5 minutes a day with Lang App {x} | `تعلم اللغة {1} 5 دقائق يوميا مع Lang App {2}` |
| Learn {x}, 5 minutes a day | `اللغة {1}: 5 دقائق يوميا` |

The interface writer may shorten these, but must keep the slot in one of the allowed positions. Mid-sentence in content, always write «الإنجليزية» and «العربية» in full (never «الانجليزية» without hamza, never «الإنكليزية», which is Levantine and Iraqi usage).

**UI glossary** (use exactly; must match §3):

| English | Arabic |
|---|---|
| lesson / lessons tab | درس / الدروس |
| practice (set) / tab | تمارين الدرس / تمارين |
| review (SRS) / tab / button | مراجعة / مراجعة / «بدء المراجعة» |
| due (cards) | مستحقة للمراجعة |
| deck | مجموعة بطاقات (short: مجموعة) |
| card | بطاقة |
| streak | أيام متتالية («الأيام المتتالية: 5») |
| hint | تلميح |
| check (3-question lesson quiz) / button | اختبار الدرس / «التحقق» |
| correct / incorrect | «إجابة صحيحة!» / «ليست صحيحة بعد» (avoid a bare «خطأ») |
| answer / explanation (`why`) | الإجابة / الشرح |
| try again | إعادة المحاولة |
| skip | تخطي |
| multiple choice / word tiles / gap-fill / typed sentence | اختيار من متعدد / ترتيب الكلمات (tiles = قطع الكلمات) / ملء الفراغ / كتابة الجملة |
| drills | المهارات (tab «مهارات») |
| session | جلسة («بدء الجلسة») |
| level / XP | المستوى / نقاط الخبرة (XP) |
| show pronunciation (toggle) | «إظهار النطق (IPA)» (a settings row, not a button) |
| listen / play audio | استماع |
| progress | التقدم |
| feedback | ملاحظات; page «إرسال ملاحظات» |
| settings / sign in / sign out / sync / backup | الإعدادات / تسجيل الدخول / تسجيل الخروج / المزامنة / النسخ الاحتياطي |

**i18n validator:** with `nativeScript` set, it does not warn about translations identical to English; XP, KB and Lang App stay in Latin letters by design. Arabic labels are usually short, so the "> 1.6 × English and > 14 characters" warning should fire only on sentences; check «إظهار النطق (IPA)» and «إرسال ملاحظات».

## 11. Gaps and unverified claims

- **Blocked, empty or unusable sources** (not in Sources):
  - **Alshayban 2012 full text** (copula omission, 100 Saudi students): the repository download redirected to a host that was not on the allowlist. The abstract-level claim is cited through OTHERS.md, so **no copula-omission rate is available**.
  - **IELTS test-taker performance by first language** (2024–2025 spreadsheet): not on the allowlist. So no Arabic-L1 IELTS means are given.
  - **Microsoft Arabic (Saudi) style guide** (download.microsoft.com PDF): returned as binary. The register, button and date rules rest on Proton, Onetime Secret, Arabeyes and W3C instead.
  - **Mozilla l10n style guide "ar"**: the page's content is Swahili mislabelled as Arabic; not used.
  - Alhaisoni et al.'s article-error paper (zendy, typeset/scispace): empty or not on the allowlist; its 64.1% / 27.5% split is cited **secondhand** from the 2023 Nunation paper.
  - A Saudi article-error paper on ProQuest: the excerpt gave only the error typology, no figures or authors.
  - The Arab News report on English from Grade 1: not on the allowlist (the 2021 date comes from Alzahrani 2025's abstract).
  - Core.ac.uk page on positional /p, b/ variability: failed to load.
  - Zenodo PDF on Arabic interference (records 7488325): binary.
  - The ICPhS 2023 paper does not print its year; 2023 is inferred from the conference URL.
- **Summary-only or partial evidence:**
  - Crompton (generic *the*): the page summary had no year, journal, sample or figures.
  - Alosaimi 2014 (resumptive pronouns): catalogue record only.
  - Alzinaidi & Abdel Latif 2019 (consonants): abstract only; no per-sound percentages.
  - Evans & Alshangiti 2018 (vowels): abstract only; the hardest contrasts are taken from Allehyani et al.
  - Alhaisoni, Al-Zuoud & Gaudel 2015 (spelling): abstract page; no percentages.
  - Alzahrani 2025 (Saudi Grade 1 English): abstract only.
  - The STEP description is from a third-party prep site, not ETEC.
- **Small, skewed or inconsistent samples:**
  - Of the five error studies, four have counts: three Saudi (each single-university and single-sex) and one Libyan (Megaiab, the only North African count); Darwish is the only Levantine sample and is qualitative. **No Egyptian, Iraqi or Gulf-outside-Saudi error count was found.**
  - Hussain 2019 states 130 and 40 writers in different places; Megaiab 2020 states 50 and 95; Issa et al. 2025 are inconsistent about the instrument and code only four categories (their 58% tense share is not comparable).
  - Each study uses its own categories, so ranks across studies are indicative only.
- **No fetched source for:**
  - *open the light*, *make a party*, *I like very much football*, *I want that I go*, *Although…, but*, *If you came tomorrow* (إذا + past) and *Maybe* overuse (objects given a gendered pronoun have only NLS Norwegian's *her book*, on a page with factual errors);
  - Arabic-script respellings of English in phrasebooks (no example page was found);
  - regional facts in §5 and §9: English as a Gulf lingua franca, French first in the Maghreb, weekend days by country, tipping customs;
  - the TTS quality of Arab names and the cities in §9 (Riyadh, Doha especially).
  - All are [practitioner opinion].
- **Pronunciation:**
  - No production study of *bit / bet* or *cut / cat* by Arabic speakers was read; the vowel weighting rests on one perception study (Allehyani et al., speakers living in England).
  - /θ ð/ by region (MSA and Gulf keep them; Egyptian and Levantine urban speech does not) is general linguistic knowledge, not a fetched finding.
  - The Arabic anchors in the §6 key, especially «مثل ج المصرية» for /g/ and «مثل ج الشامية» for /ʒ/, are this profile's design; a native reviewer from each region should check them.
- **Pronunciation aid:**
  - No study compares IPA, Arabic-script respelling and no aid for Arabic learners.
  - **How many adult learners read IPA is unmeasured.** Test it with first users (toggle-off rate, a one-question survey).
  - The English pronunciations of Arab names and places (/ˈoʊmɑːr/, /ˌduːˈbaɪ/) are approximations to check against the engine's voice.
- **Learner context:**
  - EF EPI is a self-selected online test. Only three 2025 fact sheets (Saudi Arabia, Egypt, Iraq) were read; the ranks printed for Saudi Arabia (#5) and Iraq (#3) are garbled; the Saudi writing score (295) should be checked against the PDF.
  - World Population Review's "2025" figures are 7–13 points higher than the fact sheets for the same countries and are probably 2024 values.
  - School starting ages and weekly hours outside Saudi Arabia, and university English requirements, were not verified.
- **Glossary:** «التصريف الأول / الثاني», «فعل شاذ», «الأفعال الناقصة», «جملة الصلة», «صيغة المقارنة / التفضيل», «تتابع الأصوات الساكنة» and the UI terms (مجموعة بطاقات، الأيام المتتالية، مهارات، ملاحظات، إظهار النطق) are from general usage and were not checked against ministry textbooks or major Arabic apps.
- **Interface:**
  - **Digits:** Western digits are a design decision against W3C's statement that Egypt, Saudi Arabia and Iraq use Arabic-Indic digits. Revisit with user feedback; a per-region setting would need engine work.
  - The abbreviations «د» (minutes) and «ث» (seconds) are common in Arabic apps but were not verified in a style guide; if reviewers object, use the label forms «المدة بالدقائق: {1}».
  - **Slot isolation:** whether the engine wraps interpolated `{x}` / `{s}` values in `<bdi>` was not checked; until it does, Latin-holding slots must sit at the start or end (§10 c).
  - The rendered bidi check (§10 c) used a scratch page with the engine's rules, not the app itself. An Arabic `why` that **starts** with an English word («teacher اسم معدود…») laid out correctly because it inherits `dir="rtl"`; it would flip to left to right if its container ever got `unicode-bidi: plaintext`. The e2e pass should screenshot one such line, one mc question and one count string in the real app.
  - **Percent display:** hand-written «{1}%» shows as *%85*, `Intl` output as *85%*. Both are readable; isolating percentages in the engine would make them consistent.
  - The 390px fit of «ملاحظات» and of the longest buttons was not rendered.
  - Whether the i18n validator accepts Arabic punctuation and «» inside translations was not checked (it should; nothing in it is script-specific).
- **Standing rule:** an `article-copula` kind would fit Arabic best; it is not implemented and would be hard to detect from `x` / `a` (§7). `be-2` and the `why` wording are the substitute.
- **Not researched:** Sudanese, Yemeni and Mauritanian learners; heritage Arabic speakers in Europe and North America; Arabic speakers' use of self-study apps; the effect of French on Maghrebi learners' English beyond false friends.

## Sources

Web pages opened and used:
- [Alolaywi 2023, Error analysis of written English essays: undergraduate students in an English program in Saudi Arabia (JRLT 3(1))](https://jrlt.ksu.edu.sa/sites/jrlt.ksu.edu.sa/files/users/user975/Vol%203-1%20(3%20Error%20Analysis%20of%20Written%20English%20Essays).pdf)
- [Hussain 2019, An analysis of undergraduate Saudi EFL female students' errors in written English essays (AWEJ Special Issue)](https://clt.kku.edu.sa/sites/clt.kku.edu.sa/files/inline-files/An-Analysis-of-Undergraduate-Saudi-EFL-Female-Students-Errors-in-Written-English-Essays_0.pdf)
- [Issa, Dorgham, Alshraah, bin Juwair & Aldaghri 2025, Investigating the morphosyntactic errors of Saudi EFL students (TPLS 15(3))](https://tpls.academypublication.com/index.php/tpls/article/download/9833/9819/38851)
- [Megaiab 2020, Common errors in English grammar made by Arab learners: analysis and solutions (Tobruk University Journal 14)](https://journals.tu.edu.ly/tujsh/index.php/JSHS/article/download/166/154/343)
- [Darwish 2016, Error analysis: a case study of high basic stage students in Zarqa, Jordan (JLLL 21)](https://core.ac.uk/download/234693218.pdf)
- [Crompton, Article errors in the English writing of advanced L1 Arabic learners: the role of transfer (Asian EFL Journal page, summary only)](https://asian-efl-journal.com/monthly-editions-new/article-errors-in-the-english-writing-of-advanced-l1-arabic-learners-the-role-of-transfer/index.htm)
- [The interaction between Nunation and English definiteness: the case of L1 Najdi and Hijazi speakers (Humanities & Social Sciences Communications, 2023)](https://www.nature.com/articles/s41599-023-02280-y)
- [Alosaimi 2014, An empirical study of resumptive pronouns in Arabs' acquisition of English restrictive relative clauses (catalogue record)](https://drepo.sdl.edu.sa/items/a2b5b63f-6a5f-4cfc-b610-24d0c902d837/full)
- [Alhaisoni, Al-Zuoud & Gaudel 2015, Analysis of spelling errors of Saudi beginner learners of English (ELT 8(3); IDEAS abstract page)](https://ideas.repec.org/a/ibn/eltjnl/v8y2015i3p185.html)
- [Alzinaidi & Abdel Latif 2019, Diagnosing Saudi students' English consonant pronunciation errors (AWEJ 10(4))](https://awej.org/diagnosing-saudi-students-english-consonant-pronunciation-errors/)
- [Al-Yami & Al-Athwary 2021, Phonological analysis of errors in the consonant cluster system encountered by Saudi EFL learners (TPLS 11(10))](https://tpls.academypublication.com/index.php/tpls/article/download/1609/1308/5420)
- [Evans & Alshangiti 2018, The perception and production of British English vowels and consonants by Arabic learners of English (J. Phonetics 68; UCL record)](https://discovery-pp.ucl.ac.uk/id/eprint/10044993)
- [Allehyani, Smith & Cohen, Does learning English vowels aid the perception of English stress for learners with small vowel inventory background? (ICPhS 2023)](https://guarant.cz/icphs2023/580.pdf)
- [Alzahrani 2025, The implementation of English for primary school first graders in the Saudi education system (TPLS 15(7), abstract page)](https://tpls.academypublication.com/index.php/tpls/article/view/10567)
- [EF EPI 2025 fact sheet, Saudi Arabia](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-saudi-arabia-english.pdf)
- [EF EPI 2025 fact sheet, Egypt](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-egypt-english.pdf)
- [EF EPI 2025 fact sheet, Iraq](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-iraq-english.pdf)
- [World Population Review, English proficiency by country](https://worldpopulationreview.com/country-rankings/english-proficiency-by-country)
- [Open Exam Prep, STEP exam facts and what it measures](https://open-exam-prep.com/study-guides/sa-etec-step-english/introduction/step-exam-facts-and-what-it-measures)
- [Univext, common English mistakes Arabic speakers make (Arabic)](https://univext.com/ar/blog/452/akhta-injliziya-shaya)
- [llexi, Common English errors by Arabic speakers](https://llexi.com/l1-errors/common-english-errors-arabic-speakers/)
- [Wimbledon School of English, Common English language mistakes made by Arabic speakers](https://www.wimbledon-school.ac.uk/blog/common-english-language-mistakes-made-by-arabic-speakers/)
- [ProZ forum, Arabic speakers speaking English: common mistakes](https://lit.proz.com/forum/arabic/73236-arabic_speakers_speaking_english_common_mistakes.html)
- [NLS Norwegian, Common English mistakes by Arabic speakers (vowel pairs only; the page has factual errors)](https://nlsnorwegian.no/?p=18919)
- [EF Arabic grammar: أدوات التنكير (indefinite articles)](https://www.ef.com/wwar/english-help/english-grammar/indefinite-articles/)
- [EF Arabic grammar: أداة التعريف (definite article)](https://www.ef.com/wwar/english-help/english-grammar/definite-article/)
- [EF Arabic grammar: الأسماء المعدودة وغير المعدودة (countable and uncountable nouns)](https://www.ef.com/sa/english-help/english-grammar/countable-and-uncountable-nouns/)
- [Mawdoo3, شرح زمن المضارع التام (present perfect)](https://mawdoo3.com/شرح_زمن_المضارع_التام)
- [St-Takla, Verb to BE فعل يكون](https://st-takla.org/learn-languages/english/grammar-rules/verb-to-be.html)
- [Shawahin, كيف تنمي مهاراتك اللغوية ذاتيا (self-study guide, saaid.org)](https://saaid.org/book/22/16503.pdf)
- [Proton localisation, Guidance for Arabic](https://localize.proton.me/t/guidance-for-arabic/3339)
- [Onetime Secret, دليل الترجمة للعربية (translator guide)](https://docs.onetimesecret.com/ar/translations/for-translators/)
- [Arabeyes, Standards (Arabic localisation)](https://arabeyes.org/download/documents/misc/doc_standards-en/standards.html)
- [W3C, Arabic & Persian Layout Requirements](https://www.w3.org/TR/alreq/)

Local files read: `/home/claude/docs/profiles/th.md` (in full, the main model), `ru.md` (§7–§10 in full; section list), `zh.md` (§6 rules 1–10 and worked examples; the end of the §8 table and additions), `vi.md` (opening of §7) and `id.md` (opening of §10) — vi and id were consulted only for structure and register patterns, not read in full; `OTHERS.md` (front matter, Arabic section, cross-language table and gaps lines on Arabic); `/home/claude/reports/Grammar learning order research.md` (the evidence-label definitions only); `/home/claude/docs/PILOT-SPEC.md`, `PIPELINE.md`, `PRACTICE-SPEC.md`, `PHASE2-BRIEF.md`; `/home/claude/tools/content/lib.js` (ORDER, `nativeTester`), `validate.js` (`article-plural` hit rules, helpers, id format), `mk_briefs_ko.py` (deck-table regex), `ko/decks.js` (deck names), `ko/lessons.js` (tables, `{{ex}}` rows), `zh/profile.json`, `zh/PRON-RULES.md`, zh deck and lesson IPA rows, `zh/more/b1.js` and `ja/more/b1.js` (`articles-3`), `id/profile.json`, `ru` deviations; `/home/claude/tools/i18n/keys.json` (count and language-name templates, nav keys); `/home/claude/src/app.html` (`RTL_LANGS` = ar, he, fa, ur; `uiDir`, `html[dir=rtl]` and `html[lang=ar]` CSS, hint rendering); `/home/claude/packs/course-ko-en.js` (0 Arabic-block characters) and its `pron` practice set. Local checks: a Playwright (Chromium) render of fifteen Arabic/English test lines under `dir="rtl"` (§10 c); `Intl` with ICU 78.3 for `ar` plural rules, `DisplayNames`, dates, numbers, percent and `Segmenter`; the regexes in `ar.profile.json` run in `node` against the samples in §6 and §7 and the validator's own `article-plural` helpers.
