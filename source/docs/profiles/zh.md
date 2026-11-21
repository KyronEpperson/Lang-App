# Mandarin Chinese speakers learning English — course profile

Course `zh-en`. Audience: Mandarin-speaking adults in Mainland China. All explanations, prompts, `why`, `hint`, deck names and interface text are in **Simplified Chinese**. The interface/HTML language tag is **`zh-Hans`**; the app's language code stays `zh` (profile.json `native: "zh"`, pack `course-zh-en`, interface pack `i18n-zh`). Traditional Chinese (Taiwan, Hong Kong) would be a separate pack and is out of scope.

Evidence labels follow `reports/Grammar learning order research.md`:
- **[research-backed]**: a study or corpus, named.
- **[curriculum convention]**: what Chinese textbooks, syllabuses, exams or style guides do.
- **[practitioner opinion]**: a teacher's or guide's position, or this profile's own inference.

A study read only as an abstract or a landing page, or cited second-hand, is marked as such.

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`); explanations use **你**, never 您, plus the school grammar terms (冠词, 第三人称单数, 一般过去时, there be 句型).
- **Articles lead the grammar errors:** a CLEC sample shows 1.9 article errors per 100 words, and the commonest is an **extra *the*** (48%). So teach "when not to use *the*" as hard as "when to add *a*".
- **Next come verb tense/form and -s morphology** (plural, third-person). Mandarin inflects neither, and speakers also drop final consonants.
- **Learners are exam-trained false beginners** (中考 / 高考 / CET-4/6), and **listening is the weakest skill** (EF EPI 2025: reading 492, listening 436). Move fast and weight audio and typed production.
- **Pronunciation aid: IPA, required,** as American values in the school symbol set: slashes, ˈ on every content word (monosyllables too), and weak forms. The toggle 「显示音标」 hides it.
- **The IPA policy needs a validator workaround:** `nativeScript` includes ˈ (U+02C8), so IPA passes the native-script check (§6 rule 9). A `pronScript` pipeline flag would be cleaner (the lead's call).
- **Standing rule: same as Korean** (`article-plural`, keywords `冠词|复数`), at zero parity cost. Third-person -s and tense get secondary `why` wording, which the validator does not check.
- **Curriculum:** all 39 ids kept in order, 27 reweighted (explanation and body rows only), and 2 added: `chinglish` (end of A1) and `articles-3` (B1). None dropped.
- **Localisation:** personal names the en-US voice can say (Li Wei, Wang Fang), Beijing / Shanghai / Chengdu, and yuan. New deck 「中式英语陷阱」.
- **Evidence is thin for** he/she, topic-prominence, Chinglish collocations, /θ v r/ and stress. No study compares IPA with other aids (§11).

## 2. Variant, register and voice

**Variant: American English.**
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The pron aid must describe what learners actually hear.
2. Mainland school pronunciation teaching is British-based: middle-school textbooks use the Daniel Jones (EPD 14th ed., 1977) symbol set [curriculum convention, reported by [tingclass](https://www.tingclass.net/show-240-250251-1.html); not checked against a textbook]. But US English dominates media, apps and the TOEFL / study-abroad track. §6 handles the mismatch by keeping the familiar symbols and writing American values with them.
3. Use US spelling and vocabulary (color, apartment, subway, cell phone). Mention a British form only in a card `note`: 「英式英语说 flat」. Learners preparing for IELTS will meet British forms, and a note is enough.

**Register: 你, friendly and concise; never 您 aimed at the learner** [curriculum convention / practitioner opinion].
- Consumer learning apps on the Mainland address the user as 你. 您 reads as customer service and adds distance in a daily self-study habit. Proton's Simplified Chinese localisation guidance warns against repeated 您 even in formal contexts ([Proton](https://localize.proton.me/t/guidance-for-chinese-simplified/3424)).
- Drop 你 wherever the sentence works without it: 「想说“我结婚了”，要用 I'm married.」, not 「如果你想说……你要用……」.
- No internet slang or 亲/宝子-style intimacy. Use one exclamation mark at most, and only in praise. Use plain declaratives for rules.
- Use school grammar terms (§3) and gloss the less common ones once: 「表语（be 动词后面的形容词或名词）」.
- **Error marks:** use **✗** for wrong and **✓** for right, the Chinese marking convention (teachers mark √ / ×): `I'm teacher. ✗ → I'm a teacher. ✓`.

Three sample sentences in the voice:
- 「中文没有冠词，所以 a 和 the 最容易漏掉，也最容易乱加。记住三条规则就够了。」
- 「“我昨天看了一部电影”里的“了”不等于过去时。英语要靠动词变形：I watched a movie yesterday.」
- 「主语是 he / she / it 时，动词要加 -s，这就是课本里的“第三人称单数”。说的时候也要把 s 读出来。」

**Mixing English and digits into Chinese text: one rule, applied everywhere**
- **Spacing.** Put a half-width space between a Chinese character and any Latin letter or digit, on both sides: `be 动词`, `第 3 课`, `连续 5 天`, `加冠词 a 就对了`, `I'm married. 是正确说法`. Put no space next to full-width punctuation: `……要加冠词 a。` (space before *a*, none before 。).
  - This matches common Mainland localisation practice; Proton asks for "a half-width space between Chinese characters and English characters" ([Proton](https://localize.proton.me/t/guidance-for-chinese-simplified/3424)).
  - W3C advises leaving the gap to CSS (`text-autospace`) instead. The ja profile followed that advice for digits. For zh, the typed space wins because one rule is easier for writers and validators. **The engine must therefore not also turn on `text-autospace`** for `zh-Hans`, or the gap doubles.
- **Exception: dates and times from `Intl`** (`2026年11月16日`, `21:05`) stay exactly as `Intl.DateTimeFormat('zh-CN')` prints them, with no spaces.
- **Punctuation.** Chinese text uses full-width punctuation: ，。！？：；（）“”‘’、. English inside it keeps its own half-width punctuation: `I'm a student.`. Full-width parentheses enclose Chinese; half-width parentheses enclose pure English or digits ([Proton](https://localize.proton.me/t/guidance-for-chinese-simplified/3424)).
- **Quoting.** Quote Chinese phrases with “ ” and nested quotes with ‘ ’. Leave English bare:
  - In lesson HTML, bold it with `<b>`.
  - In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare: `“我每天吃米饭”=` / `I eat rice every day. 是什么意思？`.
- Separate alternatives with ` / ` (half-width, spaced), as in ko-en.
- **No traditional characters** (e.g. 這, 說, 學). Use Mainland vocabulary: 软件, not 軟體; 视频, not 影片; 信息, not 資訊.

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.
- "School" means learners met the term in junior or senior high school English.
- The 2022 compulsory-education syllabus names 一般现在时, 现在进行时, 一般过去时, 一般将来时 and 主谓一致 by level [curriculum convention, [syllabus mind map](https://mm.edrawsoft.cn/template/357394)].
- The other "school" tags come from common textbook usage and were not verified against a fetched syllabus (§11).

| English term | Chinese term (use this) | Note |
|---|---|---|
| article | 冠词 | School. Standing-rule keyword |
| indefinite article (a / an) | 不定冠词 | School; in explanations prefer "a / an" |
| definite article (the) | 定冠词 | School; prefer "the" |
| zero article | 零冠词（不加冠词） | School says 零冠词; in `why` prefer 不加冠词 |
| noun | 名词 | School |
| countable / uncountable noun | 可数名词 / 不可数名词 | School |
| singular / plural | 单数 / 复数（名词复数） | School. Standing-rule keyword 复数 |
| measure word / classifier (Chinese) | 量词 | Used only to contrast with English: 「英语数名词不用量词」 |
| pronoun / personal pronoun | 代词 / 人称代词 | School |
| subject / object / predicate | 主语 / 宾语 / 谓语 | School |
| complement after be | 表语 | School; gloss once |
| subject / object case (I / me) | 主格 / 宾格 | School |
| possessive (my, his) | 形容词性物主代词 | School; in `why` just 物主代词 |
| possessive 's | 名词所有格（'s） | School |
| verb | 动词 | School |
| be verb | be 动词 | School |
| linking verb | 系动词 | School; use sparingly |
| auxiliary / modal verb | 助动词 / 情态动词 | School |
| third-person singular -s | 第三人称单数（三单） | School; learners say 三单 |
| subject–verb agreement | 主谓一致 | School (2022 syllabus, level 3) |
| base form | 动词原形 | School |
| past form / past participle | 过去式 / 过去分词 | School |
| -ing form | 现在分词 / 动名词 | School; say “-ing 形式” when the function is not the point |
| regular / irregular verb | 规则动词 / 不规则动词 | School |
| tense | 时态 | School |
| present simple | 一般现在时 | School (syllabus level 1) |
| present continuous | 现在进行时 | School (level 1) |
| past simple | 一般过去时 | School (level 2) |
| past continuous | 过去进行时 | School |
| future (will / going to) | 一般将来时（will / be going to） | School (level 2) |
| present perfect | 现在完成时 | School |
| present perfect continuous | 现在完成进行时 | School (senior high) |
| past perfect | 过去完成时 | School |
| passive / active | 被动语态 / 主动语态 | School |
| conditional sentence | 条件句（if 引导的条件状语从句） | School |
| first conditional | 真实条件句 | Lesson title: 「如果……（真实条件）」 |
| second / third conditional | 虚拟语气（与现在事实相反 / 与过去事实相反） | School term 虚拟语气 |
| relative clause / relative pronoun | 定语从句 / 关系代词 | School; 先行词 = antecedent |
| object clause, embedded question | 宾语从句 | School: 「宾语从句用陈述语序」 |
| infinitive / gerund | 动词不定式 / 动名词 | School |
| preposition / conjunction | 介词 / 连词 | School |
| adjective / adverb | 形容词 / 副词 | School |
| comparative / superlative | 比较级 / 最高级 | School |
| question word | 疑问词（特殊疑问词） | School |
| yes/no question / wh-question | 一般疑问句 / 特殊疑问句 | School |
| negative sentence | 否定句 | School |
| statement word order | 陈述语序 | School |
| word order | 语序 | School |
| there is / are | there be 句型 | School name; use it |
| direct / reported speech | 直接引语 / 间接引语 | School |
| phrasal verb | 短语动词 | School |
| idiom | 习语（地道表达） | |
| collocation | 固定搭配 | School |
| Chinglish | 中式英语 | |
| pronunciation | 发音 | |
| phonetic transcription / IPA | 音标（国际音标） | School |
| stress | 重音（重读） | ˈ = 重音符号 |
| rhythm / linking / weak form | 节奏 / 连读 / 弱读 | School (连读, 弱读) |
| vowel / consonant | 元音 / 辅音 | School |
| final consonant | 词尾辅音 | |
| consonant cluster | 辅音连缀 | School |
| lesson | 课（第 N 课）; nav: 课程 | UI |
| practice (set) | 练习 | UI |
| review (SRS) | 复习 | UI |
| deck | 卡组 | UI. Anki's Chinese UI says 牌组 (not verified, §11); 卡组 is clearer outside Anki |
| card | 卡片 | UI |
| streak | 连续打卡（连续 N 天） | UI; 打卡 is the native habit word |
| hint | 提示 | UI |
| check (3-question lesson check) | 小测 | UI: 「课后小测」 |
| correct / incorrect | 正确 / 错误; feedback 「答对了」/「答错了」 | UI |
| answer / explanation | 答案 / 解析 | `why` is shown under 解析 (exam-book convention 答案解析) |
| try again | 再试一次 | UI |
| multiple choice | 选择题 | School exam format |
| word tiles (order) | 连词成句 | School exam format |
| gap-fill | 填空题 | School exam format |
| typed sentence | 汉译英 | Exam format; the prompt is Chinese and the learner types English |
| drills | 专项练习 | UI |
| session | 学习 | 「开始学习」 |
| level / XP | 等级 / 经验值（XP） | |
| pronunciation hint toggle | 显示音标 | Replaces "romanization" |
| progress | 进度 | Nav label (§10) |
| feedback | 反馈 | Nav label (§10) |
| settings / sign in / sync | 设置 / 登录 / 同步 | |

## 4. Persistent error zones

Ranked by evidence strength times frequency. Example format: error ✗ → correction ✓. **Every "Why" line (the contrast with Chinese) and every example sentence is [practitioner opinion] unless its Evidence line names a study.**

Note: Murakami & Alexopoulou 2016, the main source for ja and es, **does not include Chinese learners**. Its L1s are "Japanese, Korean, Spanish, Russian, Turkish, German and French" ([core.ac.uk](https://core.ac.uk/download/42340394.pdf)). Nothing below borrows its rankings.

1. **Articles: omission *and* overuse of *the*.**
   - *What goes wrong:* *a* is missing before singular count nouns (`She's good teacher.`). *the* is added to generic and first-mention nouns (`The life is hard.`, `I like the music.`). 一个 is mapped onto *a* and 这 / 那 onto *the*.
   - *Examples:* `I am in supermarket. ✗ → I'm in the supermarket. ✓` / `I would like to buy the phone. (any phone) ✗ → a phone ✓` / `The money is important. ✗ → Money is important. ✓`
   - *Why:* Mandarin has no articles. Definiteness comes from word order, context and demonstratives.
   - *Evidence:*
     - [research-backed] **Rozovskaya & Roth 2010** annotated 468 CLEC sentences (9,327 words) from Chinese writers. They found **1.9 article errors per 100 words**, against an average of 1.5 across nine L1s and 0.4–0.6 for French, German and Italian. By type: **extraneous *the* 48%**, missing *the* 20%, missing *a* 12%, a/the confusion 7% ([paper](https://cogcomp.seas.upenn.edu/papers/RozovskayaRo10a.pdf)). Small sample, written essays.
     - [research-backed, landing page only] Edmunds 2013 (CEECUS corpus): "generic and non-referential indefinite noun phrases are more likely than others to induce errors of *the*-overuse" ([Emory ETD](https://etd.library.emory.edu/concern/etds/9593tv212?locale=zh)). No counts read.
     - [research-backed, weak] Ou et al. 2021: a questionnaire with 145 respondents (the sample is reported inconsistently) concluded omission was the most frequent type ([Atlantis Press](https://www.atlantis-press.com/article/125961494.pdf)). It measured acceptability judgements, not production.
     - [practitioner opinion] [SJSU guide](https://gcp-web.sjsu.edu/wac/docs/MandarinEnglishGuide.pdf), [italki](https://www.italki.com/article/456/6-common-mistakes-chinese-speakers-make-when-learning-english).
   - **Content consequence:** unlike ja, teach *when not to use the* as hard as *when to use a*. Generic plurals and uncountables take no article (§8 `the`, `articles-2`, `articles-3`).
2. **Verb tense and verb form.**
   - *Examples:* `She run yesterday. ✗ → She ran yesterday. ✓` / `I have finished it yesterday. ✗ → I finished it yesterday. ✓` / `I live here since 2020. ✗ → I've lived here since 2020. ✓`
   - *Why:* Mandarin verbs do not inflect. Time comes from adverbs (昨天), and aspect from particles (了, 过, 着, 在). 了 marks completion, not past, so learners treat the time word as sufficient and drop -ed, or map 了 onto *have done*.
   - *Evidence:*
     - [research-backed, abstract only] Zhao & Liu 2008 retrieved **989 tense errors** from CLEC subcorpora St5/St6. Simple past, simple present and present perfect were "the most problematic tenses", and verb salience and temporal adverbials affected past-tense use ([UCCTS abstract](https://www.lancaster.ac.uk/fass/projects/corpus/UCCTS2008Proceedings/abstracts/Zhao_and_Liu.pdf)).
     - [research-backed, second-hand] Liu 2012 (CLEC; verb errors "head the list"), via OTHERS.md, abstract only.
     - [research-backed] In the TEM-4 spoken subcorpus of SWECCL 2.0, tense was 40 of 110 errors in existential sentences (Zhang 2016, below).
     - The 了 explanation is [practitioner opinion].
3. **-s morphology: plural -s and third-person -s (and possessive 's).**
   - *Examples:* `I have two brother. ✗ → two brothers ✓` / `He like swimming. ✗ → He likes swimming. ✓` / `my father car ✗ → my father's car ✓`
   - *Why:* Mandarin has no inflection, and numbers take a measure word, not a plural (三本书). 们 is optional and only for people. Final /s z/ are also hard to pronounce (item 4), so spoken -s disappears twice over.
   - *Evidence:*
     - [research-backed, small] Yakovleva 2013 surveyed 90 Taiwanese English majors about why they omit -s. Of 86 usable answers: "forgot" 50%, "not used to inflection" 20.9%, "unsure how to pronounce it" 11.6%, and "did not know the rule" only 7%. Only 4 students said they did not make the error ([Vestnik PGU](https://cyberleninka.ru/article/n/don-t-omit-s-a-common-grammatical-error-of-chinese-speakers-of-english)). Self-report data, Taiwanese rather than Mainland learners, and no split by -s type.
     - [practitioner opinion] [SJSU guide](https://gcp-web.sjsu.edu/wac/docs/MandarinEnglishGuide.pdf) for plurals and agreement. [TEFL Academy](https://www.theteflacademy.com/blog/pronunciation-challenges-chinese-learners-of-english/) links dropped final /s/ to "I have three cat".
   - **Reading:** learners *know* 三单 and plural rules from school and drop them in speech and fast typing. Practice must make the -s carry the answer.
4. **Pronunciation.** Each item is tagged separately.
   - **Final consonants and clusters (codas).** Final stops are deleted or get a vowel added (`bed` → /bedə/ or /be/). Final voiced stops are devoiced (`bed` ≈ `bet`). Clusters are cut (`friends` → *frens*, `asked` → *as*).
     - [research-backed, small] Broselow, Chen & Wang 1998 studied 10 Mandarin speakers with 6–7 years of EFL ([paper](https://linguistics.stonybrook.edu/commcms/linguistics/faculty/ellen.broselow/files/broselow%20chen%20and%20wang.pdf)).
       - 81% of final voiceless and 98% of final voiced stops were wrong: deletion 46% / 43%, epenthesis 36% / 36%, and devoicing 19% of voiced stops.
       - 72% of one-syllable inputs came out with two syllables.
     - [research-backed, abstract only] Hansen 2001 (*Applied Linguistics* 22(3); 3 speakers) studied coda accuracy by coda length ([record](https://searchworks.jioinstitute.edu.in/articles/eric__EJ631088)).
     - The cluster examples are [practitioner opinion] ([TEFL Academy](https://www.theteflacademy.com/blog/pronunciation-challenges-chinese-learners-of-english/)).
     - Mandarin syllables end only in a vowel, /n/ or /ŋ/ [practitioner opinion; typology, no source fetched].
   - **/n/ vs /l/ (regional).** `night` / `light`, `know` / `low`.
     - [research-backed, abstract level] Zhang & Levis 2021: **18 of 25** Southwestern Mandarin speakers could not produce English [n] and [l] consistently, and initial [l] was worse than [n] ([Frontiers](https://public-pages-files-2025.frontiersin.org/journals/communication/articles/10.3389/fcomm.2021.639390/text)). The dialect group has over 270 million speakers, and Cantonese shares the merger.
     - [research-backed, abstract] Zhang & Levis 2020: the same population most often *deleted* word-final /n/ and /l/, with a strong loss of intelligibility ([Iowa State](https://dr.lib.iastate.edu/entities/publication/062840da-b0de-4d8f-b2c8-50c208592565/full)).
     - Content rule: present n/l pairs as "important for some regions" (「部分地区的同学容易混淆」), never as a universal Chinese error.
   - **/iː/ vs /ɪ/ and other vowel contrasts.** `leave` / `live`, `sheep` / `ship`; `bad` / `bed`, `snack` / `snake`.
     - [research-backed] Yuan & Archibald 2019: duration-manipulated training improved /i/–/ɪ/ perception in 56 Chinese adults (p = .003) ([New Sounds 2019](https://onlineacademiccommunity.uvic.ca/johnarch/wp-content/uploads/sites/1299/2019/08/YuanArchNewSounds.pdf)). This supports minimal-pair listening practice.
     - The vowel examples are [practitioner opinion] ([TEFL Academy](https://www.theteflacademy.com/blog/pronunciation-challenges-chinese-learners-of-english/)).
   - **TH.** `think` → *sink* / *tink*, `three` → *sree*, `this` → *zis* / *dis*. [practitioner opinion] TEFL Academy calls it "the most common mistake". Chinese has no interdental fricatives.
   - **/v/ vs /w/.** `very` → *wery*, `vest` / `west`. [practitioner opinion] (TEFL Academy pronunciation page, via OTHERS.md).
   - **/r/ and /l/, /h/.** Some speakers mix r/l (`rice` / `lice`); /h/ is dropped or added (`ouse`, `hegg`). [practitioner opinion] (TEFL Academy).
   - **Silent letters** read aloud (`island` with an s). [practitioner opinion] (TEFL Academy).
   - **Stress and rhythm.** Every syllable gets equal weight, function words are not reduced, and the delivery sounds "flat and robotic". [practitioner opinion] (TEFL Academy). No rhythm study could be opened (§11). The §6 rule of putting ˈ on every content word is aimed at this.
5. **he / she and his / her mix-ups (speech).**
   - *Example:* `I met a new friend. His name is Mary. ✗ → Her name is Mary. ✓`
   - *Why:* 他 / 她 / 它 are all pronounced *tā*; the difference exists only in writing.
   - *Evidence:*
     - [research-backed, landing page only] Li et al. 2026 (*J. Psycholinguistic Research* 55(3)): in story retelling by proficient Chinese speakers, gender was "computed at the conceptual level but not accurately carried through to output". Pictures did not help ([Macquarie](https://researchers.mq.edu.au/en/publications/she-or-he-source-of-errors-in-l2-production-of-3rd-person-singula/)). No rates read.
     - [research-backed, abstract only] *IJEL* 11(1) 2021: he/she mixing is "serious" in English majors' speech, especially *he* used for *she* ([abstract](https://www.sciencegate.app/document/10.5539/ijel.v11n1p166)).
     - [practitioner opinion] SJSU, italki.
   - Mainly a *speaking* error. Practice tiles can still test it with a his/her distractor (§7 secondary).
6. **Topic-prominence: *there have*, pseudo-relatives, topic-first sentences.**
   - *Examples:* `There have many people in the park. ✗ → There are many people in the park. ✓` / `There are many students study in the classroom. ✗ → Many students are studying in the classroom. / There are many students studying… ✓` / `In the park has many people. ✗`
   - *Why:* 有 means both *have* and *there is*. Chinese allows topic + comment (公园里有很多人) and the pivotal construction 有很多学生在教室学习.
   - *Evidence:*
     - [research-backed] Zhang 2016 (SWECCL 2.0 TEM-4 / TEM-8 oral subcorpora against COCA spoken) ([paper](https://core.ac.uk/download/266996656.pdf)):
       - learners overused existential sentences: 3,982 and 3,535 per million against 3,040;
       - "there + have" misuse appeared 15 times in TEM-4 and 5 in TEM-8 (the table is partly garbled);
       - pseudo-relatives appeared 11 and 9 times.
     - The topic-prominence explanation follows Yip 1995 (cited there).
7. **Countability.**
   - *Examples:* `many furnitures ✗ → much furniture / many pieces of furniture ✓` / `an information ✗ → some information ✓` / `two advices ✗ → two pieces of advice ✓`
   - *Why:* every Chinese noun is counted the same way, through a measure word (一条信息, 一件家具), so nothing marks a noun as uncountable.
   - *Evidence:* [practitioner opinion] (SJSU, italki).
8. **One Chinese verb, several English verbs (Chinglish collocations).**
   - *Examples:*
     - 开灯 `open the light ✗ → turn on the light ✓`
     - 带 `I'll bring you to the beach ✗ → take you ✓`
     - 看书 `see a book ✗ → read a book ✓`
     - 玩手机 `play the phone ✗ → be on my phone ✓`
     - 学习知识 `learn knowledge ✗ → gain / acquire knowledge ✓`
     - 借 `Can you borrow me a pen? ✗ → lend me ✓`
   - *Evidence:* [practitioner opinion] SJSU (开 and 带), italki ("fire kites"). The rest is this profile's list.
9. **Paired connectors.**
   - *Examples:* `Although it rained, but we went. ✗ → Although it rained, we went. / It rained, but we went. ✓` / `Because I was tired, so I slept. ✗`
   - *Why:* 虽然……但是 and 因为……所以 come in pairs.
   - *Evidence:* [practitioner opinion] (SJSU).
10. **Word order: adverbials and embedded questions.**
    - *Examples:* `I very like it. ✗ → I really like it. / I like it very much. ✓` / `I yesterday went to Beijing. ✗ → I went to Beijing yesterday. ✓` / `You go where? ✗ → Where are you going? ✓` / `I don't know where does she live. ✗ → where she lives ✓`
    - *Why:* Chinese adverbials (time, place, degree) come before the verb (我很喜欢; 我昨天去了北京). Wh-words stay in place (你去哪儿?).
    - *Evidence:* embedded question order is [practitioner opinion] (italki). The rest is [practitioner opinion] with no fetched source.
11. **Relative clauses: avoidance and 的-order.**
    - *Examples:* `the I bought yesterday book ✗`; more often avoidance (two short sentences) or pseudo-relatives (item 6). `I have a friend lives in Chengdu. ✗ → I have a friend who lives in Chengdu. ✓`
    - *Why:* Chinese relative clauses come before the noun with 的 (我昨天买的书) and have no relative pronoun.
    - *Evidence:* [research-backed, abstract only] Schachter 1974 (*Language Learning* 24(2)) argued that Chinese and Japanese learners find English relative clauses harder and *avoid* them, which is why error counts under-state the difficulty ([abstract](https://scilit.com/publications/9b10d51d12da0642029e6afa405188f9)). Its figures were not read.
12. **Adjective predicates without *be*; *be* plus a verb.**
    - *Examples:* `She very beautiful. ✗ → She's very beautiful. ✓` (她很漂亮 has no 是) / `I am agree. ✗ → I agree. ✓` / `He is come from Shanghai. ✗ → He comes from Shanghai. / He's from Shanghai. ✓`
    - *Evidence:* [practitioner opinion]; no source fetched. This is a standard junior-high warning [curriculum convention, unverified].
13. **Prepositions.**
    - *Examples:* `in the bus ✗ → on the bus ✓` / `a job in Google ✗ → at Google ✓` / `discuss about ✗ → discuss ✓`
    - *Why:* 在…上 / 在…里 do not map onto on / in / at.
    - *Evidence:* [practitioner opinion] (SJSU). Teach the core set and verb chunks; do not make them a standing rule.
14. **Answering negative questions; notional passives.**
    - *Examples:* `You don't like him, do you? — Yes, I don't. ✗ → No, I don't. ✓` / `This problem must solve now. ✗ → This problem must be solved now. ✓` (意义被动, notional passive)
    - *Evidence:* the yes/no item is [practitioner opinion] (SJSU). The notional passive is [practitioner opinion] with no source fetched.

## 5. Learner starting point

- **School exposure.** English starts in primary school (grade 3 in the 2022 syllabus's level 1, 3–4年级) and runs through grade 12. The syllabus introduces 一般现在时 / 现在进行时 at level 1 and 一般过去时 / 一般将来时 at level 2 ([mind map of the 2022 syllabus](https://mm.edrawsoft.cn/template/357394)) [curriculum convention]. Adults aged 25–40 typically started in grade 3 or junior high [practitioner opinion].
- **Exam culture** [curriculum convention unless tagged]:
  - **中考** (end of junior high) and **高考** (English is one of the three core subjects).
  - **CET-4 / CET-6** for university students: held twice a year since the 1980s, out of 710 points, with 425 commonly treated as passing ([Xinhua / Beijing Daily, Oct 2025](https://www.news.cn/edu/20251015/ee59d4d6b8214fdbadb5487b5be31d1d/c.html)) [curriculum convention; news report].
  - **考研英语** (graduate entrance) and **IELTS / TOEFL** for study abroad.
  - Familiar formats: 选择题, 完形填空, 连词成句, 填空题 and 汉译英. They map one-to-one onto the practice item types; label them that way (§3).
- **Profile figures:**
  - [research-backed, test-taker data] **EF EPI 2025, China:** overall 464, rank 86 (global average 488). **Reading 492, listening 436, speaking 448, writing 455** ([fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-china-english.pdf)).
    - Regions range from Guizhou 429 and Henan 433 to Zhejiang 506. Shanghai is 508 and Chengdu 472.
    - No sample size is given, and EF test-takers are self-selected.
  - [research-backed, test-taker data] A newer EF sheet (in the 2026 folder; the page does not state the edition year) gives overall 466, rank 75 (global average 485), with **reading 510, listening 425**, writing 485 and speaking 457 ([fact sheet](https://www.ef.com/assetscdn/cefcom-epi-site/fact-sheets/2026/ef-epi-fact-sheet-china-english.pdf)).
  - Both sheets show the same shape: **reading is highest and listening is lowest**, 56–85 points apart. Reading leads in ja and es too, but there speaking is the weakest skill; for zh it is listening.
  - OTHERS.md gave China 455 / rank ≈91 from a secondary table. EF's own sheet says 464 / 86; use EF's figure.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1 but move fast.** Learners recognise every A1 form and its school name. The value is in the typed items and in audio.
  2. **Audio first.** Listening is the weakest skill. Keep audio on every row, put IPA with stress next to it (§6), use minimal pairs for codas, TH, v/w and n/l, and run listening-first review.
  3. **Recognition is not the goal.** Exam training makes mc items easy. Weight typed production, and make the -s and article in each answer decide whether it is correct (§7).
  4. **Do not gate on articles, -s or tense.** They stay error-prone at university level (Rozovskaya & Roth: university essays).
  5. **Exam-flavoured motivation works:** name CET / IELTS relevance in lesson blurbs where it is true (e.g. 「四六级作文常见错误」). Never promise score gains.

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners already know.** Mainland middle-school textbooks teach the 48-symbol "国际音标" in the Daniel Jones notation (EPD 14th ed.), and dictionaries transcribe in IPA based on Jones ([tingclass](https://www.tingclass.net/show-240-250251-1.html)) [curriculum convention, second-hand]. KK notation is the Taiwan/US-teaching system and not the Mainland default ([CSDN](https://blog.csdn.net/chengyq116/article/details/109459756)). Mainland dictionary apps (Youdao, 海词) show IPA for both British and American pronunciation (CSDN, on 海词) [practitioner opinion; the Youdao page could not be fetched].
- **Learners can read IPA; Japanese and Spanish learners cannot.** This is the key difference from ja/es: the aid can use an existing skill instead of inventing a respelling. [practitioner opinion: inferred from the school-textbook and dictionary sources above. That adults still read IPA years after school is **assumed, not measured**, and the 2022 syllabus's wording on 音标 could not be found (§11).]
- **Against character "sound-alike" spellings** (谐音, e.g. 三克油 for *thank you*): characters cannot write final consonants or clusters. Each one adds a full syllable, which encodes exactly the epenthesis error that Broselow et al. measured (72% of monosyllables became two syllables). Teachers widely mock them [practitioner opinion; no source fetched].
- **Against pinyin respelling:** pinyin has no letters for /θ ð v æ ɪ ʊ/ or for final stops, and learners would read it with Mandarin values [practitioner opinion].
- **No study compares IPA, respelling and no aid** for Chinese learners. The recommendation below is inference [practitioner opinion].

**Recommendation: IPA in every `pron` field (profile.json `"pron": "required"`), American values written in the school symbol set, with stress marks on content words. It is shown by default and can be hidden with 「显示音标」.**

**Rules for the `pron` field:**
1. **Delimiters and spacing.**
   - Wrap the whole transcription in one pair of slashes `/…/`, as textbooks print 音标.
   - Separate words with one space.
   - No other punctuation: no `? ! . ,`, no capitals, no digits.
   - Separate two sentences inside one card with ` ‖ ` (U+2016, the IPA major-group bar). **Never `|`**, which is the field separator in `decks.js` and in `{{ex:…|…|…}}`.
2. **Alternatives.** Rare, since English targets in decks contain no `/`. Write two slashed groups separated by one space: `/ˈhaɪ/ /ˈheɪ/`. Never write `//`: the pack check rejects the string anywhere.
3. **Stress (the key rule). Mechanical test: a closed list of function words stays unmarked; every other word gets ˈ.**
   - **Function words (no ˈ):**
     - articles: *a, an, the*;
     - personal, object and possessive pronouns: *I, me, my, you, your, he, him, his, she, her, it, its, we, us, our, they, them, their*;
     - *be* in every use, and *do / have* used as auxiliaries;
     - modals: *can, could, will, would, shall, should, may, might, must*;
     - prepositions (*in, on, at, to, for, of, from, with, near, by, about, …*) and conjunctions (*and, but, or, so* as conjunction, *if, because, that*);
     - existential *there*.
   - **Every other word** gets **ˈ** (U+02C8) before its stressed syllable, monosyllables included: nouns, main verbs (including *have* as "own"), adjectives, adverbs (*here, so, too, very, today*), numbers, *not / no / n't* forms, question words, demonstratives and names. Examples: `/ˈjes/`, `/aɪ ˈlaɪk ˈtiː/`, `/aɪ ˈhæv ə ˈdɔːg/`.
   - **Exception:** a function word gets its strong form and ˈ when it stands alone or carries contrast (`Me too.` → `/ˈmiː ˈtuː/`, `And you?` → `/ənd ˈjuː/`).
   - Every `pron` therefore contains at least one ˈ, which the validator relies on.
   - Use **ˌ** (secondary stress) only inside long words and for letter-by-letter abbreviations: `/ˌel oʊ ˈel/`.
   - Why ˈ on monosyllables (non-standard in dictionaries): it shows the stress-timed rhythm that equal-syllable delivery misses (§4.4). ˈ is also the native-script marker the validator needs (rule 9).
4. **Notation: the OALD North American transcription** (the 牛津高阶 dictionary that many learners own) [curriculum convention; OALD not fetched, §11]. It uses the school symbols with American values:

   | Sound | Write | School (British) symbol learners know | Example |
   |---|---|---|---|
   | FLEECE / KIT | iː / ɪ | same | leave /ˈliːv/, live /ˈlɪv/ |
   | unstressed final -y; weak *you, to* before vowels | i / u (no ː) | i / u | very /ˈveri/, movie /ˈmuːvi/, you /ju/ |
   | DRESS / TRAP | e / æ | same | bed /ˈbed/, bad /ˈbæd/ |
   | STRUT / schwa | ʌ / ə | same | cup /ˈkʌp/, about /əˈbaʊt/ |
   | GOOSE / FOOT | uː / ʊ | same | food /ˈfuːd/, book /ˈbʊk/ |
   | LOT (hot, stop) | ɑː | ɒ | hot /ˈhɑːt/ |
   | THOUGHT (talk, dog) | ɔː | ɔː | talk /ˈtɔːk/, dog /ˈdɔːg/ |
   | GOAT | oʊ | əʊ | go /ˈgoʊ/ |
   | NURSE | ɜːr | ɜː | bird /ˈbɜːrd/ |
   | lettER | ər | ə | water /ˈwɔːtər/ |
   | NEAR / SQUARE / CURE | ɪr / er / ʊr | ɪə / eə / ʊə | here /ˈhɪr/, there /ˈðer/ |
   | START / NORTH | ɑːr / ɔːr | ɑː / ɔː | car /ˈkɑːr/, door /ˈdɔːr/ |
   | FACE / PRICE / CHOICE / MOUTH | eɪ / aɪ / ɔɪ / aʊ | same | |
   | consonants | p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r w j | same | yes /ˈjes/, very /ˈveri/ |

   - **Use ASCII `g`**, not U+0261 ɡ: they look identical, and one form keeps searches and the regex simple.
   - **Use plain `r`**, not ɹ.
   - **No flap symbol:** write *water* `/ˈwɔːtər/`. The audio carries the American flap, and the pron lesson explains it (「美音里两个元音之间的 t 常读得像轻 d」).
   - **No ɚ / ɝ (KK):** write `ər` / `ɜːr`.
5. **The pron lesson's conversion table.** The `pron` lesson body shows the British→American column changes above once (əʊ→oʊ, ɒ→ɑː, ɪə→ɪr, eə→er; final r is pronounced). Then learners read the cards without surprises.
6. **Weak forms for function words** (OALD weak forms): *a* /ə/, *an* /ən/, *the* /ðə/ (before a vowel /ði/), *to* /tə/, *for* /fər/, *of* /əv/, *and* /ənd/, *can* /kən/, *are* /ər/, *was* /wəz/, *at* /ət/, *you* /ju/, *me* /mi/, *he* /hi/, *she* /ʃi/, *we* /wi/, *do* /də/. Unstressed long vowels lose ː. A function word that is stressed in context (`Me too.`, `And you?`) takes its strong form and ˈ: `/ˈmiː ˈtuː/`, `/ənd ˈjuː/`.
7. **Codas are always written in full**, including -s, -ed and clusters: `worked` /ˈwɜːrkt/, `friends` /ˈfrendz/, `asked` /ˈæskt/. Write no inserted vowels. Write plural and third-person -s as heard (/s/, /z/, /ɪz/), and -ed as /t/, /d/, /ɪd/.
8. **Numbers, names and abbreviations.**
   - Numbers are written as words, in their citation stress: `Fifteen dollars` → `/ˌfɪfˈtiːn ˈdɑːlərz/`.
   - Abbreviations are spelled letter by letter: `BTW` → `/ˌbiː tiː ˈdʌbəljuː/`.
   - Chinese names are written as the en-US voice says them: `Li Wei` → `/ˈliː ˈweɪ/` (see the TTS rule in §9).
9. **Validator.**
   - `pron` must match `pronPattern` (profile.json): `^(?=.*ˈ)/C+( C+)*/( /C+( C+)*/)*$`, where `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]`. That is lower-case ASCII except c q x y, plus the IPA set, the length mark, the stress marks and ‖.
   - The pattern rejects English spelling slips (`/ˈyes/`), capitals, punctuation, stray spaces, `//` and a pron with no stress mark.
   - **Workaround needed:** with `nativeScript` set, `validate.js` line 51 requires every non-empty `pron` to contain a native-script character. IPA has none, so the profile sets `nativeScript` to `[㐀-䶿一-鿿ˈ]`: CJK Ext-A, CJK Unified, **plus ˈ**.
     - Why this is safe: ˈ occurs in no English string of `course-ko-en.js`, `course-ja-en.js` or `course-es-en.js` (grep count 0). So the "English must not contain native script" checks are unaffected, and ˈ never appears in a Chinese meaning by itself.
     - `labels.cueTest` is set to the CJK-only class, so cue injection and the "mc `q` / type `hint` has Chinese" check still mean real Chinese.
     - Verified locally by loading `nativeTester` with this profile. All the worked examples below pass, plus all-ASCII words (`/ˈpen/`, `/ˈbed/`, `/ˈget/`), function-word-only utterances, abbreviations, prices and two-sentence cards. `/pen/`, `/ˈyes/`, `/ˈjes?/`, `//` and `/ˈɡet/` (U+0261) are rejected.
     - **Cleaner alternative (lead's call):** a pipeline profile field such as `pronScript` that replaces `isNative` for `pron`. With it, `nativeScript` returns to CJK only and `pronPattern` stays as is.
10. **Practice items carry no aid** (PRACTICE-SPEC: "No romanization in practice items"). IPA appears only on cards and `{{ex:}}` rows. Lesson bodies may also use IPA inside tables and prose (e.g. `<b>/θ/</b>`) when they explain sounds.

**Worked examples** (the first eight English sentences are from `packs/course-ko-en.js`):

| English | `pron` | Rules shown |
|---|---|---|
| It's cold today. | /ɪts ˈkoʊld təˈdeɪ/ | 4 GOAT oʊ (not school əʊ), 3, 6 |
| There's a cafe near here. | /ðerz ə kæˈfeɪ nɪr ˈhɪr/ | 3 existential *there* and preposition *near* unmarked, adverb *here* marked; 4 r-vowels |
| I think so, too. | /aɪ ˈθɪŋk ˈsoʊ ˈtuː/ | θ, 3 adverbs *so / too* marked |
| Can you close the door? | /kən ju ˈkloʊz ðə ˈdɔːr/ | 6 weak *can / you / the*, 1 no `?`, 4 START/NORTH r |
| I have two brothers. | /aɪ ˈhæv ˈtuː ˈbrʌðərz/ | 3 main-verb *have* marked, 7 plural /z/ written, ð, ər |
| We watched a movie. | /wi ˈwɑːtʃt ə ˈmuːvi/ | 7 -ed = /t/, 4 LOT = ɑː |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ | 1 ‖ between sentences, 4 ASCII g |
| Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | 8 number as words, 7 cluster /lv/ |
| Yes. | /ˈjes/ | 3 stress on a monosyllable (also keeps all-ASCII words valid) |
| Me too. | /ˈmiː ˈtuː/ | 6 stressed function word takes its strong form |
| think / sink (pron deck) | /ˈθɪŋk/ · card 2: /ˈsɪŋk/ | IPA already separates the pair; no ko-style `(th)` tag |
| very / wary | /ˈveri/ · /ˈweri/ | v/w pair (§4.4) |
| night / light | /ˈnaɪt/ · /ˈlaɪt/ | n/l pair for Southwestern / Southern speakers |
| bed / bet | /ˈbed/ · /ˈbet/ | final voicing (Broselow et al.: voiced stops devoiced) |
| BTW | /ˌbiː tiː ˈdʌbəljuː/ | 8 abbreviation, ˌ secondary stress |
| My name is Li Wei. | /maɪ ˈneɪm ɪz ˈliː ˈweɪ/ | 8 Chinese name as the voice says it |

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "冠词|复数" }`.
- At least half of each practice set's `order` items and half of its `type` items must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **冠词** or **复数**.

Sample `why` lines:
- 「dog 是可数名词单数，前面要加冠词 a。」
- 「two 后面的名词要用复数：brothers。」
- 「information 是不可数名词，没有复数，也不加冠词 a。」
- 「这里是泛指，不加冠词：Money is important.」 (generic: no article)
- 「第一次提到用 a，再次提到用冠词 the。」

**Justification:**
- **Articles are the best-measured grammatical error for Chinese writers.** Rozovskaya & Roth 2010 found 1.9 article errors per 100 words, above the cross-L1 average and three to four times the rate of German, French and Italian writers. *the*-overuse is the largest share [research-backed]. Mandarin has no articles (§4.1).
- **Plural -s is unmeasured but structurally certain, and doubly at risk.** Mandarin marks number with measure words or not at all, and final /s z/ are among the codas Chinese speakers delete. Self-report data put "forgot the -s" at 50% [research-backed, small: Yakovleva 2013]. The plural half of the rule rests on typology plus that survey; no Chinese-L1 production count was found (§11).
- **Parity cost is zero.** The shared English `order` and `type` items were written to the Korean rule, so they already satisfy its `hit` tests. Only the Chinese `why` must name 冠词 / 复数 [practitioner opinion; consequence of PILOT-SPEC §1.6].
- **Why not `verb-core` or a tense rule,** given that CLEC ranks verb and tense errors first (Zhao & Liu 2008; Liu 2012, both abstract only)?
  - The `verb-core` heuristic would need many English items changed in all 39 sets. Each change is a parity deviation.
  - Tense is lesson-specific: a tense hinge in `articles` or `countable` would be artificial.
  - Tense and -s get the secondary wording below and their own lessons (`third-s`, `past`, `tense`, `perfect`, `perfect-2`). Revisit with first-attempt logs.

**Secondary emphasis (not validated; do not add these to the regex):**
- If an item also turns on third-person -s, its `why` names **第三人称单数** (or 三单): 「主语是 she，动词用第三人称单数 likes。」
- If it turns on tense, the `why` names the tense (**一般过去时**, **现在完成时**) and says that the time word does not replace the verb form: 「有 yesterday 也要用过去式。」
- If a distractor tile is *his* against *her*, the `why` says 「指女性用 her」.
- Use the standing keywords only in `why` lines of items that really hinge on articles or plurals, so the validator count stays meaningful.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions:**
- **keep** = a fresh Chinese explanation from the Chinese point of view, with English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice, but the *Chinese explanation and lesson-body example rows* shift emphasis as noted. Lesson-body examples are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed. **Anything below that would change a check or practice string needs a `deviations.json` `items` entry. None is proposed.**
- **add** = a new lesson. It needs `deviations.json` `extraLessons` plus `lessonOrder.after`.

There is no replace and no drop. Ids and order are unchanged; the two additions slot in at the stated points.

| lesson id | keep / reweight / add | note for Chinese speakers |
|---|---|---|
| pron | reweight | Teach the IPA conventions first: American values vs the school British symbols (§6 rule 5); ˈ = 重读; weak forms. Then the zh traps: codas with no added vowel and voiced finals kept (bed / bet, card / car), clusters (friends, asked), TH (think / sink, three / tree), v / w (very / wary), /iː/–/ɪ/ (leave / live), /æ/–/e/ (bad / bed), n / l flagged as regional, r / l, and stress / rhythm. The shared items (rice / lice, think / sink, vote / boat, right / light) all fit; the `why` lines explain them from Mandarin |
| be | reweight | Two traps: an adjective predicate needs *be* (她很漂亮 → She's very beautiful, not She very beautiful), and *be* + verb is wrong (I am agree ✗, He is come from ✗) |
| it-there | reweight | 有 = there is / are, not have: There have many people ✗. Dummy *it* for weather and time (今天很热 → It's very hot today). Mention topic-first sentences (In the park has… ✗) |
| articles | reweight | No 冠词 in Chinese. 一个 ≠ always *a*; *a* before jobs (She's a teacher). Preview: do not add *the* "to be safe" (extra *the* = 48% of article errors) |
| plurals | reweight | Measure words vs plural -s: 三本书 → three books (no 本, but -s). 们 ≠ -s (we don't say "studentmen"); *people* is already plural. Pronounce the -s (§6 rule 7) |
| present | reweight | SVO matches Chinese; the trap is adverbial position (I every day get up at 7 ✗) and frequency adverbs (always, usually before the main verb) |
| questions | reweight | Wh-word goes first (You go where? ✗ → Where are you going?). *do* support. Body note: answering negative questions (Don't you like it? — No, I don't = 对，我不喜欢) |
| third-s | keep | Call it 第三人称单数（三单）. Say outright that knowing the rule ≠ saying the s; drill /s z ɪz/ pronunciation |
| prep | reweight | 在 covers in / on / at; on the bus (not in), at Google, at home, on Monday |
| countable | reweight | Chinese counts everything through measure words, so nothing signals "uncountable": information, advice, furniture, homework, news, luggage, equipment. *a piece of* is the English measure word, used only for uncountables |
| object-have | reweight | **he / she / his / her** (all *tā*) in body rows and the explanation: "I met Mary. His… ✗ → Her…". Body-only; no check changes |
| can-like | reweight | 我很喜欢 → I really like / I like it very much (I very like ✗). like + -ing |
| polite | reweight | 请 + imperative ≠ polite English: Please give me a coffee sounds bossy → Could I have…? English has no 你 / 您 distinction; politeness lives in could / would |
| continuous | reweight | 在 / 正在 ≈ be + -ing, but stative verbs do not take it (I'm knowing ✗). Never drop *be* (I working ✗) |
| past | reweight | 了 ≠ past tense; a time word does not replace -ed (I yesterday go ✗). -ed pronunciation /t d ɪd/: final consonants carry the grammar |
| irregular-past | keep | Recognition is strong from school lists; spend time on typed recall |
| the | reweight | Main zh article lesson on *the*-overuse: generic nouns and first mention take no *the* (I like music, The life is… ✗). 这 / 那 ≠ the |
| adjectives | reweight | No 的 in English (a beautiful girl); more better ✗; 比-sentences → taller than me |
| going-to | keep | |
| tense | reweight | Recap with a mapping table of 了 / 过 / 着 / 在 / 将 → English tenses, showing that it is *not* one to one. Time words do not replace verb forms |
| joining | reweight | 虽然……但是 / 因为……所以 → use one connector, not both (Although…, but ✗). Body examples only |
| numbers | reweight | 万 / 亿 → ten thousand / a hundred million (conversion table). 两 vs 二 does not exist in English. Dates: US month/day vs 年月日. Prices: "30 yuan" |
| smalltalk | reweight | 吃了吗 is not a greeting in English. Avoid salary, age, marital status and weight comments as openers. Deck localised (§9) |
| chinglish | **add** (after `smalltalk`, end of A1) | 中式英语陷阱. (1) One Chinese verb, several English verbs: 开 open / turn on, 看 look / see / watch / read, 带 take / bring, 借 borrow / lend, 学 learn / study, 说 say / tell / speak / talk. (2) Calques: play phone, learn knowledge, people mountain people sea. (3) Paired connectors (forward reference to `joining`). (4) *very* + verb. Deck 「中式英语陷阱」 (§9). **Standing rule:** build the order and type items on noun phrases. Examples: *turn on the light* with an `a` distractor; *read a book* against `books`; *take medicine* (no article, 不可数) against `a`; *lend me a pen* against `the`. Their `why` then names 冠词 / 复数 alongside the verb point. Reason: §4.8–4.10; no ko-en equivalent; it mirrors ja `katakana-english` and es `false-friends` |
| past-continuous | keep | |
| will | keep | 会 = will (prediction) and can (ability): flag the double meaning |
| perfect | reweight | 过 ≈ ever / experience (我去过北京 → I've been to Beijing); 了 ≠ have done. been to vs gone to |
| modals | reweight | 应该 → should; must vs have to; 会 / 能 / 可以 → can / be able to / may |
| to-ing | keep | 不定式 / 动名词 are school terms |
| articles-2 | reweight | Generic plurals and uncountables take no article (Dogs are loyal, Coffee is expensive). Unique *the* (the sun) as a short recap. Continue the *the*-overuse focus |
| first-conditional | keep | 如果明天下雨 → If it rains tomorrow (not will rain) |
| relative | reweight | Chinese puts 的-clauses before the noun with no pronoun; English puts them after, with who / that. Warn against pseudo-relatives (There are many people stay… ✗) and expect avoidance |
| phrasal | keep | 短语动词 |
| perfect-2 | reweight | 我从 2020 年起住在这里 → I've lived here since 2020 (I live here since ✗). for / since |
| narrative | keep | |
| conditionals | keep | Label as 虚拟语气 (school term) |
| passive | reweight | 被 is mostly adversative in Chinese, and Chinese uses notional passives (问题解决了). So: This problem must solve ✗ → must be solved; The book sells well is fine |
| articles-3 | **add** (after `passive`, before `reported`) | Articles revisited at B1: generic *the* vs zero (The internet / Dogs), abstract nouns (Life, Education), fixed zero-article phrases (go to bed, by train, at work, at night, in class), and *the* with superlatives and ordinals. Reason: Chinese writers' article error rate stays high in university essays and is dominated by extra *the* (§4.1); ko-en stops at A2. Same id as ja's addition, so content structure can be shared |
| reported | keep | 间接引语 / 宾语从句用陈述语序: I don't know where does she live ✗ |
| email | reweight | Chinese business formulae (您好, 辛苦了, 敬请回复, 祝好) → Hi / Dear, Thanks for…, Best regards. Name order: Li Wei → "Dear Mr. Li" (surname first in Chinese names). No 敬语 inflation |
| idioms | keep | Note accepted Chinese-origin English (long time no see, lose face) vs calques (good good study ✗) |

**Totals:** 39 existing lessons (23 A1, 9 A2, 7 B1): **12 keep** (third-s, irregular-past, going-to, past-continuous, will, to-ing, first-conditional, phrasal, narrative, conditionals, reported, idioms) and **27 reweight**. None dropped. Plus 2 additions, the only lesson parity exceptions.

Every reweight is [practitioner opinion] grounded in the §4 contrasts. Of them, only articles / *the* (Rozovskaya & Roth), tense (Zhao & Liu) and *there have* / relatives (Zhang 2016) have research behind the emphasis.

**Considered, not added:**
- A separate he/she lesson: the body rows of `object-have` plus a secondary `why` cover it.
- A tense-markers lesson: the `tense` recap covers it.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion]:

| ko-en | zh-en |
|---|---|
| Minji | **Li Wei** (main); alternatives Wang Fang, Liu Yang, Chen Jie, Lin Na |
| Seoul | **Beijing** |
| Busan | **Shanghai**; alternates Chengdu, Shenzhen, Guangzhou, Hangzhou |
| Seoul National University | "a university in Beijing", generic; no real university name |
| kimchi, bibimbap | dumplings, hot pot, noodles, Peking duck, bubble tea |
| K-pop, K-drama | C-pop, Chinese dramas, short videos; name genres, not artists or platforms |
| Gangnam | downtown / the Bund (Shanghai) |
| Chuseok, Korean holidays | Spring Festival (Chinese New Year), Mid-Autumn Festival, National Day holiday (Golden Week) |
| 존댓말 / 반말 comparisons | 你 / 您 comparisons |
| won (₩) | **yuan**. Write `30 yuan` in English strings, and avoid `¥`, which also means yen. Use RMB only in work and email contexts |

**Name and TTS rules:**
- **Personal names: pinyin only if the en-US voice can say them.** Avoid initials q, x, zh, c, z and finals like -ü, -ian in *personal names*: Xu, Qian, Zhang, Zhou, Cao, Xiao. American TTS mispronounces them, and the learner then hears a familiar name wrong. Li, Wang, Liu, Chen, Lin, Wei, Fang, Yang and Na read acceptably.
- **Places:** use only the major cities listed in the table above. Their English names are well established and likely in TTS lexicons, even with zh / x spellings (Shenzhen, Guangzhou, Hangzhou). Avoid lesser-known places. Listen to each place name once on the engine's voice [practitioner opinion; not tested, §11].
- **Name order:** Chinese surname first ("Li Wei" = surname Li). Address as "Mr. Li" / "Ms. Wang". Teach this explicitly in `email` and in a card note. Do not give characters English nicknames by default; one note may mention that many Chinese professionals use an English name.

**Checks and practice:** Korean proper nouns occur in shared English strings in CHECKS and about 15 PRACTICE items (Seoul, Busan, kimchi, K-pop).
- **Rule (same as ja):** leave those English strings unchanged (parity), and translate the Chinese side literally (首尔, 釜山, 泡菜, 韩国流行音乐).
- Do **not** file per-item deviations. If the lead wants them localised later, use one bulk deviation with the reason "localisation".

**Deck changes:** each new deck changes the deck count and needs a `decks["count"]` deviation. Each localised card needs a per-deck deviation, as ja did.
- **Add 「中式英语陷阱」** (≥ 20 cards; linked to `chinglish`). Each `note` says 「中式英语」 or 「一词多义」 and gives the Chinese source:
  - turn on / off the light (开灯 / 关灯), take vs bring (带), lend vs borrow (借), read a book (看书), watch TV (看电视);
  - be on my phone (玩手机), gain knowledge (学习知识), do sports / play sports (运动), take medicine (吃药), give a presentation (做报告);
  - make progress (取得进步), raise a question (提问题), see a doctor (看病), It's crowded (人山人海), Long time no see ✓ (accepted, in a note);
  - I really like it (我很喜欢), Although…, (no but), on the bus (在公交车上).
- **Optional: add 「数量表达」 (measure words vs English plurals,** ≥ 16 cards; linked to `countable`). Two halves:
  - **English uses no measure word with count nouns:** three books (三本书), two cats, a car.
  - **English needs a measure phrase only with uncountables:** a piece of advice, two pieces of furniture, a cup of coffee, a bottle of water, a slice of bread, a loaf of bread, an item of news, a pair of shoes.
  - Build it only if the lead accepts a second count deviation. Otherwise fold its cards into 「购物·结账」 and the `countable` body.
- **Pronunciation deck 「发音易错」:** keep the shared pairs. Append zh pairs:
  - final voicing: bed / bet, card / car, cap / cab;
  - TH: three / tree, think / sink, mouth / mouse;
  - v / w: very / wary, vest / west;
  - n / l: night / light, know / low, with a regional note;
  - vowels: leave / live, bad / bed;
  - clusters: friends, asked, months.
- **Travel:** departure from Beijing Capital Airport or Shanghai Pudong. Tipping: none in China, expected in the US. "to go" for 打包; mobile payment → "Can I pay by card?" (WeChat / Alipay are rarely accepted abroad).
- **Work and email:** CET/IELTS-adjacent vocabulary (meeting, deadline, schedule, invoice). Replace 您好 / 辛苦了 / 祝好 with natural openings and closings. Mr. Li, not Mr. Wei.
- **Small talk:** weather, weekend, food, travel and work. Card notes warn against salary, age, marriage and weight questions, and against "Have you eaten?" as a greeting.
- **Phone and text abbreviations:** keep the English (LOL, BTW). Explain with Chinese equivalents (哈哈哈, 顺便说一句).
- **Food and shopping:** prices in yuan for scenes in China, and dollars for scenes abroad (the US setting of the shared English strings stays).

## 10. Interface wording notes

These rules are [curriculum convention / practitioner opinion]. The Microsoft zh-CN style guide was not read (§11); Proton's guidance is the one fetched reference.

- **Register:** 你, used sparingly. Sentences (toasts, empty states, dialogs) are plain declaratives ending in 。 or, for praise, ！: 「已保存。」, 「今天的复习完成了！」.
- **Buttons, tabs and menu items:** verb or verb-object, 2–4 characters, no punctuation and no 请: 开始, 继续, 检查, 提交, 下一题, 再试一次, 保存, 取消, 返回, 跳过.
  - Primary CTA: 「开始学习」, 「查看课程」.
  - Keep CTAs ≤ 6 characters.
  - Use 正在…… for ongoing states (正在同步) ([Proton](https://localize.proton.me/t/guidance-for-chinese-simplified/3424)).
- **Counters** (Chinese has only the plural category `other`; still supply identical forms at 1 and 2 for the plural-sensitive check; measure words are required):

  | English pattern | Chinese pattern | At 1 / at 2 |
  |---|---|---|
  | `{n} cards due` | 「{n} 张卡片待复习」 | 1 张 / 2 张 |
  | `{n} cards` | 「{n} 张卡片」 | |
  | `{n} lessons` | 「{n} 节课」 | 1 节课 / 2 节课 |
  | `Lesson {n}` | 「第 {n} 课」 | |
  | `{n} days` | 「{n} 天」 | |
  | `{n}-day streak` | 「连续打卡 {n} 天」 (short: 「连续 {n} 天」) | |
  | `{n} words` | 「{n} 个单词」 | |
  | `{n} questions / items` | 「{n} 道题」 | |
  | `{n} decks` | 「{n} 个卡组」 | |
  | `{n} minutes` | 「{n} 分钟」 | |
  | `{n} XP` | 「{n} XP」 (or 「{n} 经验值」 where space allows) | |
  | `Level {n}` | 「{n} 级」 / 「等级 {n}」 | |
  | `{n}% correct` | 「正确率 {n}%」 | |

  - **No 两 in templates:** with a digit slot, 2 stays 「2 张」, not 「两张」.
  - Note: 「2 张卡片」 means "two cards". Do not add 们 or any plural mark.
- **Numbers and dates:**
  - Half-width digits with comma thousands (1,234).
  - Dates and times exactly as `Intl` prints them with `zh-CN`: `2026年11月16日`, short `11月16日`, weekday `周一`, 24-hour time `21:05`.
  - Percent `85%`, no space.
- **Width:** CJK characters are full-width (about 1 em). Never use half-width punctuation in Chinese sentences, and never full-width Latin letters or digits.
- **Line breaking (engine, not content):** `lang="zh-Hans"` on the root, CJK font stack (PingFang SC, Microsoft YaHei, Noto Sans SC / Source Han Sans SC), `line-break: strict` so that 。、） never start a line.
- **Bottom nav (Today / Practice / Review / Lessons / Read / Progress / Feedback):**

  | English | Chinese label | Full-width chars |
  |---|---|---|
  | Today | 今天 | 2 |
  | Practice | 练习 | 2 |
  | Review | 复习 | 2 |
  | Lessons | 课程 | 2 |
  | Read | 阅读 | 2 |
  | Progress | 进度 | 2 |
  | Feedback | 反馈 | 2 |

  - Fit: ja measured about 50px of label width per tab at 390px with 10–11px glyphs, so 2 characters (about 22px) fit with room to spare.
  - Avoid 学习进度 / 意见反馈 (4 characters) in the nav; use them as page titles.
  - 练习 / 复习 match ko-en's 연습 / 복습 and ja's 練習 / 復習.
- **UI glossary (use exactly):**

  | English UI term | Chinese |
  |---|---|
  | lesson / lessons tab | 课 / 课程 |
  | practice | 练习 |
  | review | 复习 |
  | deck | 卡组 |
  | card | 卡片 |
  | streak | 连续打卡 |
  | check (lesson quiz) | 课后小测 |
  | hint | 提示 |
  | explanation (`why`) | 解析 |
  | correct / wrong | 答对了 / 答错了 |
  | try again | 再试一次 |
  | show pronunciation | 显示音标 |
  | listen / play audio | 播放 |
  | due today | 今日待复习 |
  | level / XP | 等级 / 经验值 |
  | progress | 进度 |
  | feedback | 反馈 |
  | settings | 设置 |
  | sign in / sign out | 登录 / 退出登录 |
  | sync | 同步 |

- **Language name:** 中文 (from `Intl.DisplayNames('zh-Hans').of('zh')`); the target language is 英语.
- **Feedback marks:** ✓ 答对了 / ✗ 答错了. Always pair a mark with text, and never show a red ✗ alone on the user's own answer.

## 11. Gaps and unverified claims

- **Blocked or unreadable sources:**
  - Iowa State PSLLT article page (bot protection), MSU thesis on /θ/ (access-limited), Hawaii rhythm thesis (Cloudflare), the Frontiers n/l EPUB (binary; the HTML text version was read), the Sailfish OS Chinese style guide (not on the allowlist), and Youdao dictionary (not on the allowlist).
  - **The Microsoft zh-CN style guide was not read.** The Microsoft Learn brand-voice page opened, but its body is in English and says nothing on 你 / 您.
  - So the 你 decision, button forms and the spacing rule rest on convention plus the Proton guidance only.
- **How sources were read:** every web figure in this profile was read through the fetch tool's summary of the page or PDF, not by reading the PDF directly. Treat the numbers as transcribed second-hand, and check key figures (Rozovskaya & Roth Table 4; Broselow et al. Table 1; EF skill scores) against the originals before quoting them in app copy.
- **School IPA:**
  - A search for the 2022 compulsory-education syllabus's wording on 音标 / 国际音标 found only secondary pages (a NetEase post, a mind map that covers grammar only, and a wrong PDF).
  - So the claim that school teaches 48 IPA symbols in Jones notation rests on one undated tutoring page.
  - That adult learners still read IPA is an **assumption**, and the whole §6 policy depends on it. Test it with the first users, e.g. a one-question survey or the toggle-off rate.
- **Abstract-only, landing-page or second-hand evidence:**
  - Zhao & Liu 2008 (abstract), Liu 2012 (via OTHERS.md), Edmunds 2013 (landing page, no counts), Li et al. 2026 and the *IJEL* 2021 he/she survey (no rates), Schachter 1974 (abstract; figures not read), Hansen 2001 (record only), and Zhang & Levis 2020 / 2021 (abstract-level; no percentages).
  - The tingclass page's claim about Jones notation in textbooks is second-hand and undated.
- **Small or skewed samples:**
  - Rozovskaya & Roth: 9,327 words of Chinese essays.
  - Broselow et al.: 10 speakers, nonce words.
  - Yakovleva: Taiwanese self-report, not Mainland production.
  - Ou et al.: an inconsistent sample of acceptability judgements.
  - Zhang 2016: one table partly garbled in extraction.
- **No fetched Chinese-L1 production count** for plural -s, third-person -s, countability, he/she rates, paired connectors, Chinglish collocations, adverb placement, *be* + verb, notional passive, prepositions, or yes/no answers. All are [practitioner opinion]; Swan & Smith's "Chinese speakers" chapter remains unread.
- **Pronunciation:** no fetched study for TH, v/w, r/l, /h/, silent letters, stress or rhythm in Chinese speakers. All are [practitioner opinion] (TEFL Academy). Only codas (Broselow et al.), n/l (Zhang & Levis) and /i/–/ɪ/ training (Yuan & Archibald) are research-backed.
- **Pron aid:**
  - No study compares IPA, respelling and no aid.
  - OALD's NAmE notation was not fetched; the symbol table in §6 is from general knowledge of OALD conventions.
  - Writing ˈ on every content word, monosyllables included, is this profile's design.
  - The **validator workaround** (ˈ inside `nativeScript`) is a deliberate hack; the lead may prefer a `pronScript` flag (§6 rule 9).
  - Whether the engine renders `‖` and IPA glyphs well in the chosen CJK font stack is untested.
- **Glossary and UI:**
  - The 2022 syllabus was seen only through a third-party mind map (tense names, 主谓一致).
  - Other "school" terms (零冠词, 表语, 虚拟语气, there be 句型, 连词成句) are from general knowledge.
  - Anki's 牌组 is from memory.
  - 「连续打卡」 for streak is a convention choice, not a fetched norm.
- **TTS names:** the claim about which pinyin names en-US voices handle was not tested with the engine's voice. The content agent should listen to each name once.
- **Learner figures:**
  - EF EPI is a self-selected online test with no sample size given.
  - The 2026-folder sheet does not state its edition year.
  - Several city values on the 2025 sheet were garbled (Beijing, Hangzhou) and are not used.
  - CET candidate numbers, gaokao details and IELTS/TOEFL volumes were not fetched.
- **Not researched:** Mainland adults' use of self-study apps, regional accent effects beyond n/l, and Cantonese-L1 learners, who are out of scope.

## Sources

- [Rozovskaya & Roth 2010, Annotating ESL errors: challenges and rewards (CLEC article error rates by L1)](https://cogcomp.seas.upenn.edu/papers/RozovskayaRo10a.pdf)
- [Murakami & Alexopoulou 2016 (checked: Chinese is not among the seven L1s)](https://core.ac.uk/download/42340394.pdf)
- [Ou, Zhang, Zou & Hu 2021, article acquisition questionnaire (Atlantis Press, ASSEHR 582)](https://www.atlantis-press.com/article/125961494.pdf)
- [Edmunds 2013, Chinese ESL learners' overuse of the definite article (Emory ETD landing page)](https://etd.library.emory.edu/concern/etds/9593tv212?locale=zh)
- [Zhao & Liu 2008, CLEC tense errors (UCCTS abstract)](https://www.lancaster.ac.uk/fass/projects/corpus/UCCTS2008Proceedings/abstracts/Zhao_and_Liu.pdf)
- [Yakovleva 2013, Don't omit -s! (Vestnik Permskogo Universiteta)](https://cyberleninka.ru/article/n/don-t-omit-s-a-common-grammatical-error-of-chinese-speakers-of-english)
- [Zhang 2016, existential constructions in SWECCL 2.0 (JLTR 7(4))](https://core.ac.uk/download/266996656.pdf)
- [Li et al. 2026, She or he? (J. Psycholinguistic Research, Macquarie record)](https://researchers.mq.edu.au/en/publications/she-or-he-source-of-errors-in-l2-production-of-3rd-person-singula/)
- [Survey of mixed use of he/she by Chinese English-major freshmen (IJEL 11(1), abstract)](https://www.sciencegate.app/document/10.5539/ijel.v11n1p166)
- [Schachter 1974, An error in error analysis (abstract)](https://scilit.com/publications/9b10d51d12da0642029e6afa405188f9)
- [Broselow, Chen & Wang 1998, The emergence of the unmarked in second language phonology](https://linguistics.stonybrook.edu/commcms/linguistics/faculty/ellen.broselow/files/broselow%20chen%20and%20wang.pdf)
- [Hansen 2001, English syllable codas by Mandarin speakers (ERIC record)](https://searchworks.jioinstitute.edu.in/articles/eric__EJ631088)
- [Zhang & Levis 2021, The Southwestern Mandarin /n/-/l/ merger (Frontiers in Communication)](https://public-pages-files-2025.frontiersin.org/journals/communication/articles/10.3389/fcomm.2021.639390/text)
- [Zhang & Levis 2020, Southwestern Mandarin speakers' production of English word-final /l/ and /n/ (Iowa State)](https://dr.lib.iastate.edu/entities/publication/062840da-b0de-4d8f-b2c8-50c208592565/full)
- [Yuan & Archibald 2019, /i/–/ɪ/ perception training (New Sounds 2019)](https://onlineacademiccommunity.uvic.ca/johnarch/wp-content/uploads/sites/1299/2019/08/YuanArchNewSounds.pdf)
- [SJSU Writing Across the Curriculum, Mandarin–English guide](https://gcp-web.sjsu.edu/wac/docs/MandarinEnglishGuide.pdf)
- [The TEFL Academy, Pronunciation challenges for Chinese learners of English](https://www.theteflacademy.com/blog/pronunciation-challenges-chinese-learners-of-english/)
- [italki, 6 common mistakes Chinese speakers make when learning English](https://www.italki.com/article/456/6-common-mistakes-chinese-speakers-make-when-learning-english)
- [EF EPI 2025 fact sheet, China](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-china-english.pdf)
- [EF EPI fact sheet, China (2026 folder)](https://www.ef.com/assetscdn/cefcom-epi-site/fact-sheets/2026/ef-epi-fact-sheet-china-english.pdf)
- [Xinhua / Beijing Daily 2025, CET-4/6 registration and scoring](https://www.news.cn/edu/20251015/ee59d4d6b8214fdbadb5487b5be31d1d/c.html)
- [tingclass, 初学者选择哪种音标学习 (Jones EPD notation in Mainland textbooks)](https://www.tingclass.net/show-240-250251-1.html)
- [CSDN, 国际音标与美式英语 KK 音标 (KK vs IPA, length marks, 海词)](https://blog.csdn.net/chengyq116/article/details/109459756)
- [2022 compulsory-education English syllabus, grammar requirements (mind map)](https://mm.edrawsoft.cn/template/357394)
- [Proton localisation, Guidance for Chinese Simplified](https://localize.proton.me/t/guidance-for-chinese-simplified/3424)
- Local: `/home/claude/docs/profiles/ja.md`, `es.md`, `OTHERS.md` (Mandarin section; Liu 2012 cited from it), `/home/claude/reports/Grammar learning order research.md`, `/home/claude/docs/PILOT-SPEC.md`, `PIPELINE.md`, `PRACTICE-SPEC.md`, `/home/claude/tools/content/lib.js` (ORDER), `validate.js` (pron policy, `//` check, `article-plural`), `ko/decks.js`, `ja/` and `es/profile.json`, and `packs/course-ko-en.js` (example sentences; ˈ count 0).
