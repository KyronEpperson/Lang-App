# Hong Kong Cantonese speakers learning English — course profile

Course `yue-en`. Audience: Cantonese-speaking adults in Hong Kong (the text is also readable in Macau and by overseas readers of Traditional Chinese). All explanations, prompts, `why`, `hint`, deck names and interface text are in **Traditional Chinese as Hong Kong readers read it: Hong Kong written Chinese (書面語) with Hong Kong vocabulary** (§2). The interface/HTML language tag should be **`zh-Hant-HK`**; the app's language code stays `yue` (profile.json `native: "yue"`, pack `course-yue-en`, interface pack `i18n-yue`). The reverse course `en-yue` (Cantonese for English speakers, `docs/profiles/en-yue.md`) is a different product and is not changed by anything here.

The closest finished course is `zh-en` (Mandarin speakers, Simplified). This profile says, lesson by lesson (§8) and deck by deck (§9), what can be **converted** from the zh course's Chinese text and what must be **rewritten** because Cantonese speakers' errors differ.

Evidence labels (the file `reports/Grammar learning order research.md` that defines them is not in this worktree; the labels are used as in `zh.md`, `vi.md` and `id.md`):
- **[research-backed]**: a study or corpus, named.
- **[curriculum convention]**: what Hong Kong syllabuses, exams, teacher-training material, dictionaries or large vendors' Hong Kong localisations do.
- **[practitioner opinion]**: a teacher's or guide's position, or this profile's own inference.

A study read only as an abstract, a record page or a search-result snippet, or cited second-hand, is marked as such. Anything about Cantonese or Hong Kong usage that rests on general knowledge and no fetched page is marked **native check**.

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`) for learners who were taught British English; card notes name the British form they know (§2). Explanations use **你** in Hong Kong written Chinese (書面語); spoken Cantonese (係, 唔, 嘅, 咗, 佢) appears only inside 「」 as a quoted example.
- **Articles are the best-documented grammar error:** in 387 Hong Kong learners' free writing, leaving articles out and adding them wrongly were both common at every level, and generic reference was the hardest context (Chan 2022).
- **Endings come next, and they fail twice:** Cantonese marks no tense, number or agreement, and its syllables end only in a vowel, a nasal or an unreleased p / t / k. So -s and -ed are dropped in grammar and again in pronunciation (*cats* → "cass", *cards* → "carts").
- **Pronunciation is where this course differs most from zh-en:** n / l, TH → f / d, v → w / f, z → s, r / l in clusters (*place* → "pace"), unreleased or devoiced final stops, final-cluster deletion, long / short vowels, and no weak syllables. Mandarin's added vowel (*bed* → *beda*) is not the main pattern.
- **Learners are stronger than the Mainland average and speaking is the weakest skill** (EF EPI 2025: 538 overall; reading 550, speaking 494). Move fast, weight audio and typed production.
- **Pronunciation aid: IPA exactly as zh-en writes it** (same key, same `pronPattern`, `pronScript: "ˈ"`), so transcriptions can be copied. Hong Kong dictionaries use the same British-based symbols; many learners were taught phonics and not IPA, so the `pron` lesson teaches the key.
- **Standing rule: same as Korean** (`article-plural`), keywords `冠詞|眾數`, zero parity cost.
- **Curriculum:** all 40 shared ids kept in order (39 + `alphabet`); 29 reweighted in the explanation only, 11 kept; 2 added: `hk-english` (after `smalltalk`) and `articles-3` (after `passive`, converted from zh). No change to shared check or practice strings.
- **Conversion from zh-en:** about three quarters of the Chinese text converts (Simplified → Hong Kong Traditional, Hong Kong wording, term map). Rewrite: `alphabet` (no pinyin), `pron`, the pronunciation deck's own pairs, `hk-english` and every passage that argues from 了, *tā*, 们 or "some regions".
- **Evidence is thin for** he / she with 佢, "there has", Hong Kong letter names, IPA literacy and every interface term not seen on a fetched Hong Kong page (§11).

## 2. Variant, register and voice

**Variant: American English, taught to learners who learned British English.**
1. `ko-en` uses `ttsLang: "en-US"` and PILOT-SPEC §1.6 freezes the shared English strings, so the course teaches American English. The pron aid must describe what the voice says.
2. Hong Kong schooling is British-based. British spelling dominates in education and official use, and British words are the everyday ones (*lift*, *rubbish bin*, *mobile phone*) [curriculum convention, [Wikipedia: Hong Kong English](https://en.wikipedia.org/wiki/Hong_Kong_English)]. The traditional accent model is non-rhotic, but many young speakers now pronounce coda /r/ under American influence (Chan 2013, cited there; not read).
3. Hong Kong's own assessment does not require either accent. An Education Bureau teacher-development handout says of the HKDSE and the Learning Progression Framework that "accurately" does not mean "according to British or US norms" [curriculum convention, [EDB 2024–25 handout](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/eng-edu/professional-development-programmes/2425/Enriching%20Knowledge%20Series%20(3)_Improving%20English%20Pronunciation%20and%20Speaking%20Skills_2024-25.pdf)]. One marking scheme accepting both spellings was reported in a search result but no HKEAA page stating a policy was opened (§11).
4. **How this course handles the mismatch (one policy, used everywhere):**
   - **The English is American** (color, apartment, subway, restroom, movie, soccer, cell phone, check, "to go"). Never rewrite a shared string into British English.
   - **British forms are never called wrong.** Where the learner's school word differs, the card `note` gives it once: 「香港學校教的是 lift；美國說 elevator」. The `hk-english` lesson has one table of these pairs (§8).
   - **Typed answers:** the shared accepted lists already include British spellings where they matter (`The meeting was cancelled`, `I should have got a taxi`; checked in `packs/course-ko-en.js`). No English change is needed.
   - **Typed vocabulary:** eleven shared `type` items expect *movie*, *bathroom / restroom* or *dollars* (`it-there#12`, `questions#12`, `continuous#12`, `past#12`, `going-to#11`, `numbers#12`, `smalltalk#13`, `past-continuous#12`, `relative#13`, `narrative#11`, `reported#13`; counted in `packs/course-ko-en.js`), and none accepts *film* or *toilet*. A Hong Kong learner may type *film* or *toilet*. Write the Chinese prompt so that it leads to the accepted answer: 「我看了一齣電影（用 movie）」, 「洗手間在哪裏？（美式：restroom）」 (PHASE2-BRIEF, "prompts must lead to an accepted answer"). Do not change the accepted lists.
   - **Sounds:** the `pron` lesson shows the British → American changes once (§6 rule 5): r is pronounced, *hot* has /ɑː/, *go* has /oʊ/, *can't* and *class* have /æ/, *t* between vowels sounds like a light d, Z is "zee".
   - **Usage a Hong Kong learner will meet in the US:** first floor = 地下 (G/F), dates are month / day, temperatures are in Fahrenheit, 911 not 999 (§8 `numbers`, §9).

> **Superseded 2026-11-23 (owner's ruling):** the course for Cantonese speakers is written in **written Cantonese** (書面粵語: Hong Kong, Traditional characters, 嘅 係 唔 冇 喺 咗 佢 …), not 書面語. This overrides the rule below and "ONE written register" in docs/briefs/yue-lead.md. Brief: docs/briefs/yue-en-cantonese-rewrite.md; the rewrite and its finishing pass are logged in tools/content/yue/REVIEW.md ("Rewrite into written Cantonese, 2026-11-23"). Deck names with 與 were renamed to 同 in the same pass (§9 table updated). The text below is kept as the original research.

**Written register: Hong Kong written Chinese (書面語). One rule.**

> **The app speaks in Hong Kong written Chinese. Spoken Cantonese is quoted, never used as the app's own voice.**

- Every sentence the app says is 書面語 in Traditional characters with Hong Kong vocabulary: 是、不、的、了、在、他 / 她、沒有、這 / 那、甚麼、哪裏. This covers lesson bodies, `why`, `hint`, prompts, card meanings and notes, dialogue translations, deck names and the interface.
- Spoken Cantonese (口語: 係、唔、嘅、咗、喺、佢、冇、嘢、啲) appears **only inside 「」, as a quoted example of what the learner says aloud**, when a lesson contrasts English with Cantonese: 「廣東話說「我食咗飯」，但「咗」不等於過去式。」. After a quote, the sentence returns to 書面語.
- Card meanings and practice prompts are translations, not contrasts, so they are 書面語: `I'm hungry.` → 我肚子餓了, not 我肚餓喇. Hong Kong readers read such text aloud in Cantonese pronunciation without effort, as they do with film subtitles [practitioner opinion; no source fetched, native check].

**Why 書面語 and not written colloquial Cantonese:**
1. **It is what Hong Kong readers are schooled in and what formal and commercial text uses.** Official and formal writing in Hong Kong is written vernacular Chinese in Traditional characters, locally called 書面語 and read with Cantonese pronunciation; written Cantonese has grown in media and entertainment, but some educators consider it non-standard ([Wikipedia: Languages of Hong Kong](https://en.wikipedia.org/wiki/Languages_of_Hong_Kong)) [curriculum convention]. Written Cantonese is used "mainly in informal and colloquial contexts" (tabloids, advertising, chat, social media), and "there is still significant disagreement about which characters are correct" ([Wikipedia: Written Cantonese](https://en.wikipedia.org/wiki/Written_Cantonese)).
2. **Hong Kong localisations of large products and the exam authority write 書面語.** Apple's Hong Kong support pages ("如要查看……請前往裝置上的 Apple 帳户設定，或者登入網頁。") and the HKEAA's Chinese pages (which even use 閣下) are formal written Chinese ([Apple HK](https://support.apple.com/zh-hk/102571), [HKEAA](https://www.hkeaa.edu.hk/tc/hkdse/assessment/subject_information/category_a_subjects/hkdse_subj.html?A1&1&2_25)) [curriculum convention].
3. **What Hong Kong learning businesses do is mixed.** One tutoring centre's course page addresses the reader as 你 and mixes 書面語 with 嘅、唔、喺 and with English grammar terms ("專攻 Tense 轉換陷阱，確保考試唔會喺最細微……") ([LearnSmart](https://learnsmart.edu.hk/course/junior-grammar-tutorial)) [curriculum convention; one page, marketing copy]. That is advertising voice. No Hong Kong English-learning app with Cantonese-language explanations was found by web search (§11).
4. **The existing `yue` material in this repo is the opposite case and does not transfer.** `docs/profiles/en-yue.md` §2.2 and `tools/target/yue/` write spoken Cantonese as spoken, because there Cantonese is the *target* and the rule is "write what a Hong Kong person would say aloud". Here Chinese is the *explanation* language. The two courses share characters and fonts, not register.
5. **It makes the zh-en conversion possible.** zh-en's explanations are Mainland written Chinese; 書面語 differs from it in script and vocabulary, not grammar. A colloquial course would be a full rewrite and would need a native Cantonese writer for every line.
6. **Cost:** 書面語 is a little less warm than the tutoring-centre voice. The quoted Cantonese examples, 你, short sentences and Hong Kong vocabulary carry the warmth.

**Register: 你, friendly and plain; never 您 or 閣下** [practitioner opinion; the LearnSmart page uses 你].
- Drop 你 wherever the sentence works without it. No 親, no internet slang, one exclamation mark at most and only in praise.
- **Grammar terms: Chinese term first, with the English term in half-width parentheses the first time it appears in a lesson:** 冠詞 (articles), 眾數 (plural), 過去式 (past tense). Hong Kong schools teach English grammar in English, and Hong Kong pages mix the English terms into Chinese text (LearnSmart: "Tense", "Passive Voice", "Part of Speech"), so many learners know *plural* better than its Chinese name [curriculum convention, one page; native check].
- **Error marks:** ✗ wrong, ✓ right, as in zh-en: `I very like it. ✗ → I really like it. ✓`.

Three sample sentences in the voice:
- 「中文沒有冠詞 (articles)，所以 a 和 the 最容易漏掉，也最容易亂加。記住三條規則就夠了。」
- 「廣東話說「我琴日睇咗一齣戲」，但「咗」不等於過去式。英文要靠動詞變形：I watched a movie yesterday.」
- 「說話時「他」和「她」都是「佢」，所以 he 和 she 很容易說錯。指女性一定用 she / her。」

**Mixing English and digits into Chinese text (same rule as zh-en, so converted text needs no respacing)**
- **Spacing.** A half-width space between a Chinese character and any Latin letter or digit, on both sides: `be 動詞`, `第 3 課`, `連續 5 日`, `加冠詞 a 就對了`. No space next to full-width punctuation. Apple's Hong Kong pages space the same way ("Apple 帳户", "開啟「設定」app") [curriculum convention]. The engine must not also turn on `text-autospace` for this language, or the gap doubles.
- **Exception:** dates and times from `Intl` stay exactly as printed (§10).
- **Punctuation.** Full-width ，。！？：；（）、 in Chinese text; English inside it keeps half-width punctuation.
- **Quoting: 「」, nested 『』.** This is the one punctuation change from zh-en, which uses “ ” and ‘ ’. Apple's Hong Kong pages use 「」 [curriculum convention]. English stands bare in plain-text fields and is bolded with `<b>` in lesson HTML.
- Alternatives are separated with ` / ` (half-width, spaced), as in ko-en.
- **No Simplified characters and no Mainland or Taiwan wording** (the tables in §9 and §10 list the swaps: 軟件 not 軟體 / 软件; 的士 not 計程車 / 出租车; 甚麼 not 什麼; 裏 not 裡).

**Converting zh-en text (method for every file)** [practitioner opinion]:
1. Convert characters with OpenCC's Simplified → Traditional (Hong Kong standard) configuration (`s2hk`), which gives Hong Kong character forms such as 裏 and 着 (general knowledge of the tool; it is not installed here and was not run, §11).
2. Apply the term map (§3) and the vocabulary map (§9, §10). Replace “ ” with 「」.
3. Replace Mainland function words that a character converter leaves in place: 哪儿 → 哪裏, 这儿 → 這裏, 一点儿 → 一點, 什么 → 甚麼, 挺好 → 很好, 咱们 → 我們.
4. Rewrite every passage that argues from Mandarin (§8 conversion table).
5. A native Hong Kong editor reads everything once. A converter cannot judge wording.

## 3. Glossary

Use these terms everywhere. The "zh-en" column is the term the zh course uses, for the term map. **Source status:** only 文法、時態、語法、詞性 were seen on a fetched Hong Kong page (LearnSmart). The other Hong Kong terms are from general knowledge of Hong Kong school and dictionary usage and need a **native check** before the content agents start; the two standing-rule keywords are flagged again in §7 and §11.

| English term | Hong Kong term (use this) | zh-en term | Note |
|---|---|---|---|
| grammar | 文法 | 语法 | 文法 is the everyday Hong Kong word (LearnSmart) |
| article | 冠詞 | 冠词 | Standing-rule keyword |
| indefinite / definite article | 不定冠詞 / 定冠詞 | 不定冠词 / 定冠词 | Prefer "a / an" and "the" |
| zero article | 不加冠詞 | 零冠词 | |
| noun | 名詞 | 名词 | |
| countable / uncountable noun | 可數名詞 / 不可數名詞 | 可数 / 不可数名词 | |
| singular / plural | 單數 / **眾數** | 单数 / 复数 | Standing-rule keyword 眾數. Native check: 複數 is the Taiwan / dictionary term and is also understood |
| classifier (Chinese) | 量詞 | 量词 | Only for contrast: 「英文數名詞不用量詞」 |
| pronoun | 代名詞 | 代词 | |
| subject / object | 主語 / 賓語 | 主语 / 宾语 | Native check (主詞 / 受詞 is the Taiwan pair) |
| complement after be | 補語 | 表语 | Gloss once: 「be 動詞後面的形容詞或名詞」 |
| possessive (my, his) | 所有格代名詞 | 物主代词 | In `why`: 「所有格」 |
| verb / be verb | 動詞 / be 動詞 | 动词 / be 动词 | |
| auxiliary / modal verb | 助動詞 / 情態助動詞 | 助动词 / 情态动词 | |
| third-person singular -s | 第三身單數 | 第三人称单数（三单） | 第三身 is the Hong Kong word; do not use 三单 |
| subject–verb agreement | 主謂一致 (subject-verb agreement) | 主谓一致 | Always give the English term; learners know it as "agreement" |
| base form | 動詞原形 | 动词原形 | |
| past form / past participle | 過去式 / 過去分詞 | 过去式 / 过去分词 | |
| -ing form | -ing 形式 | 现在分词 / 动名词 | |
| regular / irregular verb | 規則動詞 / 不規則動詞 | 规则 / 不规则动词 | |
| tense | 時態 (tense) | 时态 | |
| present simple | 現在式 (present tense) | 一般现在时 | Hong Kong tense names end in 式, not 时 |
| present continuous | 現在進行式 | 现在进行时 | |
| past simple | 過去式 (past tense) | 一般过去时 | |
| past continuous | 過去進行式 | 过去进行时 | |
| future (will / going to) | 將來式 | 一般将来时 | |
| present perfect | 現在完成式 | 现在完成时 | |
| past perfect | 過去完成式 | 过去完成时 | |
| passive / active | 被動式 (passive voice) / 主動式 | 被动语态 / 主动语态 | |
| conditional sentence | 條件句 (conditionals) | 条件句 | Types by number: 「第一類條件句」 |
| second / third conditional | 假設語氣 | 虚拟语气 | |
| relative clause / relative pronoun | 關係子句 / 關係代名詞 | 定语从句 / 关系代词 | |
| embedded question | 間接問句 | 宾语从句 | |
| infinitive / gerund | 不定詞 (to + 動詞) / 動名詞 | 不定式 / 动名词 | |
| preposition / conjunction | 介詞 / 連接詞 | 介词 / 连词 | |
| adjective / adverb | 形容詞 / 副詞 | 形容词 / 副词 | |
| comparative / superlative | 比較級 / 最高級 | 比较级 / 最高级 | |
| question word | 疑問詞 | 疑问词 | |
| negative sentence | 否定句 | 否定句 | |
| word order | 語序 | 语序 | |
| there is / are | there is / there are 句式 | there be 句型 | "there be" is a Mainland classroom name |
| direct / reported speech | 直接引述 / 間接引述 (reported speech) | 直接引语 / 间接引语 | |
| phrasal verb | 片語動詞 (phrasal verbs) | 短语动词 | |
| idiom | 習語 | 习语 | |
| collocation | 搭配 | 固定搭配 | |
| Hong Kong English / Chinglish | 港式英文 | 中式英语 | Title word of `hk-english` |
| English (the language) | **英文** | 英语 | One word everywhere, including deck names and the course name |
| Cantonese / written Chinese | 廣東話 / 書面語 | 中文 | Say 中文 when the point holds for both |
| British / American English | 英式英文 / 美式英文 | 英式 / 美式英语 | |
| pronunciation | 發音 | 发音 | |
| phonetic transcription / IPA | 音標（國際音標） | 音标 | Never 拼音: in Hong Kong 英文拼音 means phonics |
| phonics | 拼音 (phonics) | — | Only in the `pron` lesson, to say IPA is not phonics |
| stress | 重音 | 重音 | ˈ = 重音符號 |
| rhythm / linking / weak form | 節奏 / 連讀 / 弱讀 | 节奏 / 连读 / 弱读 | |
| vowel / consonant | 元音 / 輔音 | 元音 / 辅音 | |
| final consonant / ending | 字尾輔音 / 字尾 | 词尾辅音 | |
| consonant cluster | 輔音連綴 | 辅音连缀 | Gloss once: 「兩三個輔音連在一起」 |
| syllable | 音節 | 音节 | |
| word (vocabulary item) | 生字 / 字詞 | 单词 | 生字 for items learned; 字詞 in neutral statements |
| lesson | 課（第 N 課）; nav: 課程 | 课 / 课程 | UI |
| practice | 練習 | 练习 | UI |
| review (SRS) | **溫習** | 复习 | UI. 溫習 is the Hong Kong school word |
| deck / card | 卡組 / 卡片 | 卡组 / 卡片 | UI |
| streak | 連續 N 日 | 连续打卡 | UI. 打卡 in Hong Kong means posting a check-in photo |
| hint | 提示 | 提示 | UI |
| check (lesson quiz) | 小測 | 小测 | UI. 小測 is a Hong Kong school word |
| correct / incorrect | 答對了 / 答錯了 | 答对了 / 答错了 | UI |
| answer / explanation | 答案 / 解說 | 答案 / 解析 | `why` is shown under 解說 |
| try again | 再試一次 | 再试一次 | UI |
| multiple choice | 選擇題 | 选择题 | |
| word tiles (order) | 重組句子 | 连词成句 | Hong Kong exercise name |
| gap-fill | 填充題 | 填空题 | Hong Kong exercise name |
| typed sentence | 中譯英 | 汉译英 | |
| drills | 操練 | 专项练习 | UI |
| level / XP | 等級 / 經驗值（XP） | 等级 / 经验值 | |
| pronunciation toggle | 顯示音標 | 显示音标 | |
| progress / feedback | 進度 / 意見 | 进度 / 反馈 | 反饋 reads as Mainland |
| settings / sign in / sign out / sync | 設定 / 登入 / 登出 / 同步 | 设置 / 登录 / 退出登录 / 同步 | Seen on Apple HK pages |

## 4. Persistent error zones

Ranked by evidence strength times frequency. Example format: error ✗ → correction ✓. **Every "Why" line (the contrast with Cantonese) and every example sentence is [practitioner opinion] unless its Evidence line names a study or a quoted source.** Cantonese examples are written as spoken, with a written-Chinese gloss where the two differ.

Two cautions:
- Most Hong Kong evidence is by one research group (Alice Chan, City University of Hong Kong) and was read here as abstracts. Chan's 2010 *TESOL Quarterly* taxonomy (387 learners) was seen only as a search-result snippet, so it is cited in §11, not below.
- "Hong Kong English" is also described as a variety with its own norms. This profile treats a feature as an **error** when it breaks standard grammar or is known to hurt intelligibility, and as **acceptable local English** otherwise (item 15).

1. **Articles: omission and over-use.**
   - *What goes wrong:* *a* missing before singular count nouns; *the* missing or added; generic statements are the worst context.
   - *Examples:* `AIDS is serious problem in many African countries. ✗ → a serious problem ✓` (quoted from [CityU ELSS 2](https://www.lc.cityu.edu.hk/ELSS/Resource/cce2/index.htm)) / `I like the music. (in general) ✗ → I like music. ✓` / `She is teacher. ✗ → She's a teacher. ✓`
   - *Why:* Chinese has no articles. Cantonese shows definiteness with 呢 / 嗰 + classifier or with a bare classifier (「本書」 = the book), and 一個 is only sometimes *a*.
   - *Evidence:* [research-backed, record page with abstract only] **Chan 2022** (*IRAL* 60(2)): 387 Hong Kong Cantonese learners (65 university, 322 secondary), two free-writing tasks, over 600 texts. Over-extension and under-extension were both common; co-occurrence errors were nearly absent; the same error types appeared at all proficiency levels; intended **generic reference** caused the most problems; object position may be the hardest ([CityU record](https://scholars.cityu.edu.hk/en/publications/typology-and-contexts-of-article-errors-investigation-into-the-us/)). No counts were read.
   - **Content consequence:** teach *when not to use the* as hard as *when to use a*, at every level; keep a B1 article lesson (`articles-3`, §8).
2. **Noun and verb endings: plural -s, third-person -s, past -ed.**
   - *Examples:* `in the last few year ✗ → in the last few years ✓` (CityU ELSS 2) / `He like the boy better. ✗ → He likes ✓` / `I don't learn it at secondary school. (past) ✗ → I didn't learn ✓` (both after Platt 1982, quoted in the chapter summary below) / `more better ✗ → better ✓`
   - *Why:* Cantonese has no tense inflection on verbs and no number or gender inflection on nouns. Time is shown by adverbs and by aspect markers (咗, 過, 緊, 住); number by a numeral + classifier (三本書) or 啲. 哋 makes plurals only of pronouns (我哋).
   - *Evidence:*
     - [research-backed, chapter summary only] **Setter, Wong & Chan 2010**, *Hong Kong English*, ch. 4: third-person -s is often omitted, plural -s is used inconsistently even inside one noun phrase, past events are reported without past marking, and double marking (*more better*) occurs ([Cambridge summary](https://www.cambridge.org/core/books/hong-kong-english/morphosyntax/01521A0A01017207135FA0E1EC6E650D)).
     - [curriculum convention] The Education Bureau's 2024–25 teacher handout (written by A. Sewell, Lingnan University) says the "(apparent) lack of grammatical morphemes is often noticed by examiners", and explains it phonetically: the final consonant of the stem is deleted or devoiced and left **unreleased, not deleted** (*cats* as "cass", *cards* as "carts"); *cold* → "code", *list* → "lis"; and the opposite over-correction *enjoy* → "enjoyded" ([EDB handout](https://www.edb.gov.hk/attachment/en/curriculum-development/kla/eng-edu/professional-development-programmes/2425/Enriching%20Knowledge%20Series%20(3)_Improving%20English%20Pronunciation%20and%20Speaking%20Skills_2024-25.pdf)).
     - Budge 1989 on variable plural marking is known here only second-hand (§11).
   - **Reading:** learners know the rules from school. The ending is lost in speech first, then in fast typing. Practice must make the -s or -ed carry the answer, and the audio and IPA must show it.
3. **Tense choice.**
   - *Examples:* `Hong Kong becomes a world class financial centre. ✗ → has become ✓` (quoted from [CityU ELSS 1](https://www.lc.cityu.edu.hk/ELSS/Resource/cce1/index.htm)) / `I have seen him yesterday. ✗ → I saw him yesterday. ✓` / `I live here since 2015. ✗ → I've lived here since 2015. ✓`
   - *Why:* 咗 marks completion, not past time (「我聽日食咗飯先走」 is about tomorrow), and 過 marks experience. Neither maps one-to-one onto a tense, and a time word is enough in Cantonese.
   - *Evidence:* the CityU example is [curriculum convention]; the 咗 / 過 account is [practitioner opinion].
4. **Pronunciation.** Each item is tagged separately. Main sources: Chan & Li 2000 (contrastive analysis; read as the abstract and as [EdUHK's summary page](https://dses.eduhk.hk/?p=371)); Meng, Zee & Lee 2007 (contrastive analysis with examples from university students, no counts; [CUHK report](https://www1.se.cuhk.edu.hk/~hccl/publications/pub/Meng-Tech-Report-Feb2007.pdf), text layer read); the EDB handout above; and the feature list in [Wikipedia: Hong Kong English](https://en.wikipedia.org/wiki/Hong_Kong_English) with the studies it cites (not read themselves).
   - **/n/ and /l/.** `night` / `light`, `name` → "lame", `nine` → "line".
     - Cantonese itself merges initial n into l in everyday speech (你 *nei* → *lei*), which is accepted there; in English it is "perceived as a prominent mispronunciation" (Meng et al.) [research-backed, contrastive]. Final /n/ is often dropped after a diphthong (`nine` → [naɪ]) (EdUHK page).
     - This is a **general Hong Kong feature**, not a regional one. zh-en's wording 「部分地区的同学」 must not be carried over.
   - **Final consonants.** Final /b d g/ come out as unreleased /p t k/ (`bag` ≈ `back`, `feed` ≈ `feet`, `rope` / `robe`); final stops are not released at all (as in 六 *luk*).
     - [research-backed, abstract only] **Chan 2007** (*Canadian Journal of Linguistics* 52(3)): 12 Cantonese learners, four speech tasks. Non-target production was highest for word-final **voiced obstruents**; final **laterals** were worse than voiceless obstruents ([abstract](https://www.cambridge.org/core/journals/canadian-journal-of-linguistics-revue-canadienne-de-linguistique/article/acquisition-of-english-wordfinal-consonants-by-cantonese-esl-learners-in-hong-kong/3EAA59C97D7E00302410C9C82E94F752)). No rates read.
     - [curriculum convention] The EDB handout names "not voicing voiced final consonants" and "not releasing final consonants (as in Cantonese)" as the main consonant problems, and says consonant errors are thought to affect intelligibility more than vowel errors.
     - Cantonese syllables end only in a vowel, a glide, /m n ŋ/ or a glottalised /p t k/; there is no diphthong + stop or nasal (Setter, Ryder & Mok 2015, introduction, [paper](https://www.cuhk.edu.hk/lin/people/peggy/ICPHS2015SetterRyderMok.pdf)). So after a diphthong the coda is dropped or the diphthong is shortened: `fake` → "fek", `claim` → "clem", `game` → "gem" (EDB handout); `like` → [laɪ], `time`.
   - **Consonant clusters.** Final clusters lose a consonant (`cold` → "code", `list` → "lis", `ask` → "as", `think`, `camp`); initial clusters lose or swap /l r/ (`place` → "pace", `present` → "pesent", `bring` → "bling", `slabs` → "snabs").
     - [curriculum convention] The EDB handout calls initial-cluster deletion and substitution of /l/ and /r/ "a serious problem for intelligibility".
     - [research-backed, second-hand] Coronal /t d/ deletion in about 76% of tokens (Hansen Edwards 2016, via Wikipedia; not read).
     - Meng et al. also report a vowel added after a final cluster or affricate (`kissed`, `charge`), and Wikipedia lists `Joyce` → "Joysee" as rare or obsolete among younger speakers. Epenthesis is the minor pattern here; in zh-en it is the major one.
   - **TH.** /θ/ → [f] (`three` → "free", `think` → "fink"); /ð/ → [d] (`this` → "dis", `there` → "dare") (Meng et al.; EDB handout; Hung 2012 and Sewell 2009 via Wikipedia). Mandarin speakers' *sink* / *zis* is not the Hong Kong pattern.
   - **/v/.** → [w] at the start of a word (`very` → "wery", `vest` / `west`, `van`), → [f] at the end (`five` → "fife", `live`) (EDB handout; Meng et al.; Hung 2007 and Bolton 2000 via Wikipedia).
   - **/z/ → [s]; /ʃ/ and /s/ mixed; /tʃ dʒ/ as [ts dz].** `zip` / `sip`, `design` sounding like `decide`, `show` / `so`, `change` (EdUHK page; Meng et al.; EDB handout).
     - [research-backed, abstract only] **Hung 2000** (*World Englishes* 19(3); 15 undergraduates, spectrographic analysis): Hong Kong English has no voicing contrast in fricatives and no length / tenseness contrast in vowels ([HKBU record](https://scholars.hkbu.edu.hk/en/publications/towards-a-phonology-of-hong-kong-english/)).
   - **/r/.** Initial /r/ → [w] or [l] (`rate` → "wait", `ride`) (Meng et al.; EdUHK page). In clusters see above.
   - **Final /l/.** Becomes a vowel (`will` → [wɪu], `bill` → "biu", `feel` may sound like `view`) or disappears after a back rounded vowel (`school`, `wall`). The EDB handout calls it "not usually a problem".
   - **Vowels.** /iː/–/ɪ/ (`leave` / `live`, `sit` → "seat"), /uː/–/ʊ/ (`full` / `fool`), /æ/–/e/ (`bad` / `bed`, `had` → "head"), /ɔː/–/ɒ/ (EdUHK page; Meng et al.; EDB handout; Hung 2000 for the missing length contrast).
   - **Stress, schwa and rhythm.** Unstressed syllables keep full vowels (`about` → "ah-bout", `ago`); function words are not weakened; every syllable gets similar weight.
     - "In Cantonese, there is no weak form for any syllable" (EdUHK page, after Chan & Li 2000, whose abstract calls the resulting accent "flat and boring", [PolyU record](https://research.polyu.edu.hk/en/publications/english-and-cantonese-phonology-in-contrast-explaining-cantonese-/)).
     - [research-backed, second-hand] Setter 2006 (*TESOL Quarterly* 40(4); 4,404 Hong Kong English syllables against 1,847 British): weaker vowel reduction and a smaller stressed / unstressed duration contrast, as summarised by Wikipedia. The repository page was blocked (§11).
     - Wikipedia also lists local stress patterns (`chocolate` with three full syllables, `-ative` as /ˈeɪtɪv/) and dropped unstressed syllables (`difference`, `temperature`).
   - **Silent letters** read aloud (`would`, `campaign`, `honest`, `half`, `lamb`, `sword`; EDB handout).
   - **Intelligibility ranking** [practitioner opinion, after the EDB handout's use of Chan & Li 2000 and Jenkins 2000]: teach first n / l, cluster /l r/, final voicing and cluster endings (they carry grammar), and vowel length; then v and z; then TH and final /l/, which rarely block understanding.
5. **he / she / it and his / her (speech).**
   - *Example:* `My sister is a nurse. He works at night. ✗ → She works at night. ✓`
   - *Why:* spoken Cantonese has one third-person pronoun, 佢, and one possessive, 佢嘅. Written Chinese separates 他 / 她 / 牠 / 它, so the learner knows the distinction on paper and loses it in speech.
   - *Evidence:* **no Hong Kong study was found.** A slide summary of Setter et al. 2010 seen only in a search result mentions "levelling between gendered pronouns". The Mandarin studies in `zh.md` §4.5 (same mechanism: one spoken form) are the nearest support. [practitioner opinion]
6. **Existential and topic-first sentences.**
   - *Examples:* `There are many people have eye problems. ✗ → There are many people who have eye problems. / Many people have eye problems. ✓` (quoted from CityU ELSS 2) / `There has a bank near here. ✗ → There's a bank near here. ✓` / `Hong Kong has many tall buildings` is fine, but `In Hong Kong has many tall buildings. ✗` / `Today very hot. ✗ → It's very hot today. ✓`
   - *Why:* 有 means both *have* and *there is* (「呢度有間銀行」). Cantonese sentences are topic + comment, the subject can be dropped once it is known, and weather and time need no subject (「落雨」, 「好熱」).
   - *Evidence:* [research-backed, abstract only] **Chan 2004** (*Modern Language Journal* 88(1); 710 Hong Kong learners; interviews, translation, grammaticality judgements) names five transfer-driven problems: control of the copula, placement of adverbs, **the "there be" structure for existential meaning**, relative clauses, and verb transitivity. Many learners said they think in Chinese first; transfer was strongest for complex structures and at lower proficiency ([CityU record](https://scholars.cityu.edu.hk/en/publications/syntactic-transfer-evidence-from-the-interlanguage-of-hong-kong-c/)). The literal form *there has* was **not seen in a fetched source** (§11). Dropped subjects: [practitioner opinion].
7. **Adverb placement: *very* + verb.**
   - *Examples:* `I very like it. ✗ → I really like it. / I like it very much. ✓` / `I yesterday went to Central. ✗ → I went to Central yesterday. ✓`
   - *Why:* 好 goes before the verb (「我好鍾意」) and time words go before the verb.
   - *Evidence:* Chan 2004 (placement of adverbs; abstract only). An examiners' report quoted in the press gives *I very enjoy it*; that page could not be opened (§11).
8. ***be*: missing, or added to a verb.**
   - *Examples (all quoted from CityU ELSS 1 and 2):* `People must aware their rights. ✗ → must be aware of ✓` / `Some teenagers are lack of study skills. ✗ → lack study skills ✓` / `The research conducted several times. ✗ → was conducted ✓` / `The Staff Association against the proposal. ✗ → voted against ✓`
   - *Why:* Cantonese adjectives are predicates without 係 (「佢好高」), and one word can be noun, verb or adjective.
   - *Evidence:* Chan 2004 (copula; abstract only); CityU pages [curriculum convention].
9. **Countability.**
   - *Examples (CityU ELSS):* `a great deal of researches ✗ → research ✓` / `many vocabularies ✗ → a lot of vocabulary ✓` / `Information … are available ✗ → is available ✓`. Also *staffs*, *equipments*, *furnitures*, *advices*.
   - *Why:* every Chinese noun is counted through a classifier, so nothing marks a noun as uncountable.
10. **Verbs and their prepositions (transitivity).**
    - *Examples (CityU ELSS):* `adapt university life ✗ → adapt to ✓` / `applied a post ✗ → applied for ✓` / `discriminated black people ✗ → discriminated against ✓` / `emphasize on ✗ → emphasize ✓`. Also *discuss about*, *listen music*, *wait me*.
    - *Evidence:* Chan 2004 (verb transitivity; abstract only).
11. **Relative clauses.**
    - *Examples:* pseudo-relatives (item 6); `Fiona Wilson, she is the manager, believes… ✗` (CityU ELSS 2); avoidance.
    - *Why:* Cantonese puts the clause before the noun with 嘅 (「我琴日買嗰本書」) and has no relative pronoun.
    - *Evidence:* Chan 2004 ("failure to use relative clauses"; abstract only).
12. **Paired connectors and run-on sentences.**
    - *Examples (CityU ELSS 2):* `Although many countries are experiencing turmoil, but peace talks will soon occur. ✗ → drop but ✓`; two sentences joined by a comma.
    - *Why:* 雖然……但係, 因為……所以 come in pairs.
13. ***easy* / *difficult* with a person as subject.**
    - *Examples (CityU ELSS 1, which calls this "a direct translation from Cantonese"):* `I am difficult to learn English grammar. ✗ → It is difficult for me to learn English grammar. ✓` / `Some learners are easy to make mistakes. ✗`
14. **Word class.** `will analysis ✗ → analyze ✓`, `need to choice ✗ → choose ✓`, `concern the issue ✗ → are concerned about ✓` (CityU ELSS 1).
15. **Hong Kong English: what to accept and what to correct** [practitioner opinion, built on the sources named].

    | Feature | Treat as | What the course says |
    |---|---|---|
    | British spelling and words (*colour*, *lift*, *flat*, *toilet*) | Correct English | Never an error. Card notes give the American word |
    | Local words with no English equivalent (*dim sum*, *lai see*, *yum cha*, *typhoon signal*, *MTR*, *Octopus card*) | Correct English | Use them; add two words of explanation for outsiders |
    | Older local words (*shroff*, *godown*, *nullah*, *chop* = stamp, *jetso*) ([Wikipedia](https://en.wikipedia.org/wiki/Hong_Kong_English)) | Local English | Fine in Hong Kong; say *cashier / payment office*, *warehouse*, *stamp*, *deal* abroad |
    | *Add oil!* (in the OED since October 2018, "orig. and chiefly Hong Kong English"; [Language Log](https://languagelog.ldc.upenn.edu/nll/?p=40346), [Wikipedia: Add oil](https://en.wikipedia.org/wiki/Add_oil)) | Local English | Fine among Hongkongers. To others say *Good luck!* / *You can do it!* / *Go for it!* |
    | Sentence-final particles in English (*OK la*, *sorry ar*, *no need lor*) | Chat style | Fine in messages between Hongkongers. Leave them out in exams, at work and with non-Cantonese speakers |
    | A light accent: non-rhotic r, vocalised final l, TH as f / d | Acceptable accent | Taught, never marked as failure; the target is being understood |
    | n / l, dropped endings, cluster /l r/, vowel length | Error (intelligibility) | Taught first (item 4) |
    | *I very like*, *there has*, missing -s / -ed / article, *staffs*, *discuss about* | Error (grammar) | Corrected |
    | Calques: *open / close the light*, *eat medicine*, *I go first*, *wait me*, *How to say…?* | Error (wording) | `hk-english` lesson (§8) |

## 5. Learner starting point

- **Who.** In the 2021 census, 88.2% of the population aged 5 and over had Cantonese as their usual language and 58.7% could speak English ([Wikipedia: Languages of Hong Kong](https://en.wikipedia.org/wiki/Languages_of_Hong_Kong)) [research-backed, census via Wikipedia].
- **School exposure and exams** [curriculum convention unless tagged]:
  - English is a core subject through secondary school. The HKDSE requires English Language as one of four core subjects; results run from Level 1 to 5**; the common university threshold "3322" needs Level 3 in English; 50,803 candidates sat the 2024 exam ([Wikipedia: HKDSE](https://en.wikipedia.org/wiki/Hong_Kong_Diploma_of_Secondary_Education)).
  - That English starts in kindergarten or Primary 1, that the DSE papers are reading, writing, listening and speaking, and that IELTS is the usual adult exam are general knowledge, not fetched (§11).
  - Primary schools teach **phonics** (the Education Bureau runs phonics programmes and kits for primary teachers; seen as search-result titles and one unreadable PDF, §11). Teacher training uses British-based IPA charts (the EDB handout uses Underhill's phonemic chart and Cambridge Dictionary transcriptions).
- **Profile figures:**
  - [research-backed, test-taker data] **EF EPI 2025, Hong Kong:** overall **538**, rank 39 (global average 488). **Reading 550, listening 526, writing 527, speaking 494** ([fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-hong-kong-english.pdf); numbers read from the PDF's text layer).
  - [research-backed, test-taker data] The newer EF page (2026 fact-sheet folder; edition year not stated) gives 536, rank 34 (global average 485), **reading 562, listening 501, writing 477, speaking 470**; Kowloon 549, Hong Kong Island 542, New Territories 522 ([EF page](https://www.ef.com/wwen/epi/regions/asia/hong-kong/)).
  - Both show the same shape: **reading highest, speaking lowest**, 56–92 points apart. For zh-en the lowest skill was listening; for Hong Kong it is speaking.
  - Hong Kong's score is about 70 points above the Mainland figure used in `zh.md` (464).
  - EF test-takers choose themselves and no sample size is given.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1 but move faster than zh-en.** Learners recognise every A1 form and usually its English name. The value is in typed production, audio and the Cantonese-specific traps.
  2. **Speaking is the gap.** Audio on every row, IPA with stress next to it, minimal pairs for the item 4 contrasts, and say-it-aloud drills.
  3. **Do not gate on articles, -s or tense.** They stay error-prone at university (Chan 2022).
  4. **Respect what learners already do well.** Many use English at work every day. Tell them what is local, what is British and what is wrong (item 15), and never treat Hong Kong English as broken English.
  5. **Exam-flavoured motivation works** where true (「DSE 說話卷和 IELTS Speaking 都會扣分的地方」). Never promise score gains.

## 6. Pronunciation aid policy

**Decision: IPA, written exactly as zh-en writes it.** profile.json: `"pron": "required"`, the same `pronPattern`, `pronScript: "ˈ"`. `tools/content/zh/PRON-RULES.md` applies unchanged, so every transcription of a shared English string can be copied from `packs/course-zh-en.js` character for character.

**Why IPA, and why zh-en's version of it:**
- **A Cantonese respelling would teach the errors in §4.** Characters or Jyutping can only spell Cantonese syllables: stops at the end come out unreleased, clusters get broken up or lose a consonant, and n / l, v, z, θ and r have no spelling at all. `cold` written with characters is exactly "code" or "co-lo-du" [practitioner opinion, from the syllable facts in Meng et al. 2007 and Setter et al. 2015]. Jyutping is also not a school subject for most adults (general knowledge; native check).
- **Hong Kong learners' own reference material uses British-based IPA** [curriculum convention]: the Education Bureau handout transcribes with it (/dɒgz/, /wɔːkt/) and points teachers to the Cambridge Dictionary and to Underhill's phonemic chart; the EdUHK page uses the same symbols (/əˈbaʊt/, /əv/). zh-en's key keeps those school symbols and gives them American values, which is the right bridge for a British-taught learner hearing an American voice.
- **IPA shows what a respelling cannot:** final consonants in full, clusters with no added vowel, the length mark ː for the long / short pairs, and ˈ for stress.
- **Identical rules mean identical data.** The zh pack already carries a validated transcription for every shared row and card.

**Caveat: Hong Kong learners cannot be assumed to read IPA** [research-backed, small; record page with abstract only].
- **Oh 2010** (City University of Hong Kong; 20 students in a pre-test / post-test design): the group trained in IPA improved significantly on difficult words; the untrained group, given the same transcriptions, improved only on silent-letter words ([CityU record](https://scholars.cityu.edu.hk/en/publications/the-ipa-training-on-the-pronunciation-of-difficult-english-words-/)). So showing IPA is not enough; the symbols must be taught.
- Hong Kong primary schools teach phonics, not IPA (search-level evidence, §11).
- **Consequences:**
  1. The `pron` lesson opens with a **symbol key** (the table in rule 4 below), each symbol with an English key word and audio, and says 「音標不是拼音 (phonics)，一個符號只有一個讀法」.
  2. Audio is always next to the IPA. The toggle is 「顯示音標」 and stays on by default.
  3. The `alphabet` lesson uses IPA for the letter names, so the learner meets twenty-odd symbols on known material first.

**Rules (the same as zh.md §6; restated so this file stands alone)**

1. **Format.**
   - One pair of slashes around the whole string, words separated by single spaces: `/ɪts ˈkoʊld təˈdeɪ/`.
   - No punctuation, capitals or digits inside the slashes. Two sentences in one field are separated by ` ‖ ` (with spaces).
   - Two alternatives are two slashed groups separated by one space: `/ˈnaɪt/ /ˈlaɪt/`.
   - Every string contains at least one ˈ.
2. **Stress: ˈ on every content word, including one-syllable words. Function words carry none.**
   - Content words: nouns, main verbs, adjectives, adverbs, numerals, question words, demonstratives, negatives (*not*, *don't*, *can't*), and the particle of a phrasal verb.
   - Unmarked function words: articles, personal and possessive pronouns, *be*, auxiliary *do / have*, modals, prepositions, conjunctions, existential *there*.
   - A function word that is stressed (short answers, contrast, sentence-final *too*) takes its strong form and ˈ.
   - Secondary stress ˌ only where the dictionary shows it, and for letter-by-letter abbreviations.
   - **This rule matters more for Cantonese speakers than for any group so far:** it puts the uneven English rhythm on the page for learners whose language gives every syllable full weight (§4 item 4).
3. **Values: American, from the Oxford Advanced Learner's Dictionary's NAmE entry, in the school symbol set.**
   - Vowels: iː ɪ e æ ʌ ə uː ʊ; ɑː for *hot / father*; ɔː for *law / walk / dog*; oʊ; ɜːr (*bird*), ər (*teacher*), ɪr, er, ʊr, ɑːr, ɔːr; eɪ aɪ ɔɪ aʊ. Final -y is i (`/ˈhæpi/`).
   - Consonants: ASCII g (not ɡ), plain r, tʃ dʒ θ ð ʃ ʒ ŋ. No flap symbol: `water` is `/ˈwɔːtər/` and the lesson explains the American t in words.
   - Weak forms: a /ə/, the /ðə/ (/ði/ before a vowel), to /tə/ (/tu/ before a vowel), for /fər/, of /əv/, and /ənd/, can /kən/, are /ər/, was /wəz/, at /ət/, you /ju/, your /jʊr/, he /hi/, she /ʃi/, we /wi/, me /mi/, do /də/.
   - Syllabic l and n are written without ə (`people` /ˈpiːpl/, `station` /ˈsteɪʃn/, `seven` /ˈsevn/), as in the zh pack.
   - Numbers are transcribed as the words the voice says; abbreviations letter by letter.
4. **Symbol key for the `pron` lesson** (only these symbols may appear in a pron field; the `pronPattern` class is exactly this set plus the letters a–z it uses):

   | Symbol | Key word | Symbol | Key word |
   |---|---|---|---|
   | iː | see | ɪ | sit |
   | uː | food | ʊ | foot |
   | e | bed | æ | bad |
   | ʌ | cup | ə | **a**bout |
   | ɑː | hot, father | ɔː | law, walk |
   | ɜːr | bird | ər | teach**er** |
   | eɪ | day | oʊ | go |
   | aɪ | my | aʊ | now |
   | ɔɪ | boy | ŋ | si**ng** |
   | θ | **th**ink | ð | **th**is |
   | ʃ | **sh**e | ʒ | u**s**ually |
   | tʃ | **ch**air | dʒ | **j**ob |
   | ˈ | main stress, before the syllable | ː | long vowel |

5. **British → American, shown once in the `pron` lesson, in running text only.** British values must never be put in a pron field or an `{{ex:…}}` row; write them in a plain HTML table. The validator catches only ɒ (it is not in `pronPattern`); əʊ, ɪə, eə and ʊə are built from allowed symbols and would pass, so this is a rule for the writer.

   | You learned (British) | This course (American) | Example |
   |---|---|---|
   | /ɒ/ | /ɑː/ | hot, job, coffee → /ˈhɑːt/, /ˈdʒɑːb/, /ˈkɔːfi/ |
   | /əʊ/ | /oʊ/ | go, home |
   | /ɑː/ in *can't, class, ask* | /æ/ | /ˈkænt/, /ˈklæs/, /ˈæsk/ |
   | /ɪə/, /eə/, /ʊə/ | /ɪr/, /er/, /ʊr/ | here, where, tour |
   | no r after a vowel | r is pronounced | car /ˈkɑːr/, teacher /ˈtiːtʃər/, work /ˈwɜːrk/ |
   | clear t | t between vowels sounds like a light d | water, better, city (the IPA still shows t) |
   | Z = "zed" | Z = "zee" | /ˈziː/ |

   Tell the learner that the British values are equally correct and that the voice in this app is American.

**Worked examples** (rows 1–12 and 19–22 are copied from `packs/course-zh-en.js`; rows 13–18 are new and follow the same rules; all pass `pronPattern`, see the check output at the end of §11):

| # | English | pron |
|---|---|---|
| 1 | It's cold today. | `/ɪts ˈkoʊld təˈdeɪ/` |
| 2 | There's a cafe near here. | `/ðerz ə kæˈfeɪ nɪr ˈhɪr/` |
| 3 | I have two brothers. | `/aɪ ˈhæv ˈtuː ˈbrʌðərz/` |
| 4 | We watched a movie. | `/wi ˈwɑːtʃt ə ˈmuːvi/` |
| 5 | My sister is a nurse. She works at night. | `/maɪ ˈsɪstər ɪz ə ˈnɜːrs ‖ ʃi ˈwɜːrks ət ˈnaɪt/` |
| 6 | I worked yesterday. | `/aɪ ˈwɜːrkt ˈjestərdeɪ/` |
| 7 | These are my keys. | `/ˈðiːz ər maɪ ˈkiːz/` |
| 8 | three books | `/ˈθriː ˈbʊks/` |
| 9 | Where's the restroom? | `/ˈwerz ðə ˈrestruːm/` |
| 10 | Thank you. | `/ˈθæŋk ju/` |
| 11 | Call 911! | `/ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/` |
| 12 | Take this medicine twice a day. | `/ˈteɪk ˈðɪs ˈmedɪsn ˈtwaɪs ə ˈdeɪ/` |
| 13 | three / free | `/ˈθriː/ /ˈfriː/` |
| 14 | cold / code | `/ˈkoʊld/ /ˈkoʊd/` |
| 15 | place / pace | `/ˈpleɪs/ /ˈpeɪs/` |
| 16 | bag / back | `/ˈbæg/ /ˈbæk/` |
| 17 | zip / sip | `/ˈzɪp/ /ˈsɪp/` |
| 18 | I'm from Hong Kong. | `/aɪm frəm ˌhɑːŋ ˈkɑːŋ/` (stress and vowels to be confirmed against the voice, §11) |
| 19 | night / light | `/ˈnaɪt/ /ˈlaɪt/` |
| 20 | very / wary | `/ˈveri/ /ˈweri/` |
| 21 | leave / live | `/ˈliːv/ /ˈlɪv/` |
| 22 | friends; asked | `/ˈfrendz/`; `/ˈæskt/` |

**In explanations** (not in pron fields), the Chinese text may describe a sound in words: 「字尾的 d 要輕輕讀出來，不要吞掉」, 「n 的時候氣從鼻出，l 的時候氣從舌頭兩邊出」. Do not respell English with Chinese characters or Jyutping, with one exception: an error may be shown as the learner hears it, in quotation marks and Latin letters (「place 讀成 "pace"」).

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "冠詞|眾數" }`.
- At least half of each practice set's `order` items and half of its `type` items must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **冠詞** or **眾數**.

Sample `why` lines:
- 「dog 是可數名詞單數，前面要加冠詞 a。」
- 「two 後面的名詞要用眾數：brothers。」
- 「information 是不可數名詞，沒有眾數，也不加冠詞 a。」
- 「這裏是泛指，不加冠詞：Money is important.」 (generic: no article)
- 「第一次提到用 a，再提到時用冠詞 the。」
- 「眾數 keys 的字尾 s 要寫出來，也要讀出來。」

**Justification:**
- **Articles are the best-documented grammar error of Hong Kong learners.** Chan 2022: 387 learners, over 600 texts, omission and over-use both common at every proficiency level, generic reference worst [research-backed, abstract only] (§4 item 1).
- **Plural -s is lost twice.** Cantonese marks number with a numeral and classifier or not at all, and a final consonant + s is a cluster Cantonese speakers simplify (*cats* → "cass"); examiners notice the missing morphemes (Setter et al. 2010, chapter summary; EDB handout) (§4 item 2). The rule makes the learner type and tile the -s in every set.
- **Parity cost is zero.** The shared English `order` and `type` items were written to the Korean rule, so they already satisfy its `hit` tests. Only the Chinese `why` must name 冠詞 / 眾數 [practitioner opinion; consequence of PILOT-SPEC §1.6].
- **Why not a tense or third-person rule?** Verb endings are as weak as noun endings here (§4 item 2), but a `verb-core` rule would need English items changed in most of the 39 sets, each one a parity deviation, and a tense hinge in `articles` or `countable` would be artificial. Tense and -s get the secondary wording below and their own lessons.

**Keyword choice: 眾數, not 複數.**
- 眾數 is, to my knowledge, what Hong Kong schools call the plural (Mainland 复数, Taiwan 複數). This rests on general knowledge and **needs a native check before the content agents start** (§11).
- It is also a useful conversion guard: a `why` line converted from zh-en by character conversion alone would read 複數 and fail the validator, which forces the term map to be applied.
- If the native reviewer prefers 複數, change the one regex to `冠詞|複數` (or `冠詞|眾數|複數`) and the glossary row; nothing else depends on it.

**Secondary emphasis (not validated; do not add these to the regex):**
- If an item also turns on third-person -s, its `why` names **第三身單數**: 「主語是 she，動詞用第三身單數 likes。」
- If it turns on tense, the `why` names the tense (**過去式**, **現在完成式**) and says that the time word does not replace the verb form: 「有 yesterday 也要用過去式。」
- If a distractor tile is *his* against *her*, the `why` says 「指女性用 her」.
- If the answer ends in a cluster (-ts, -ks, -dz, -st, -kt), the `why` may add 「字尾要讀出來」. This is the Cantonese-specific addition.
- Use the standing keywords only in `why` lines of items that really hinge on articles or plurals, so the validator count stays meaningful.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions:**
- **keep** = a fresh Chinese explanation from the learner's point of view, with English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice, but the *Chinese explanation and lesson-body example rows* shift emphasis as noted. Lesson-body examples are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed. **Nothing below changes a check or practice string.**
- **add** = a new lesson. It needs `deviations.json` `extraLessons` plus `lessonOrder.after`.

There is no replace and no drop. Ids and order are unchanged; the two additions slot in at the stated points. Totals: 11 keep, 29 reweight, 2 add (42 lessons, the same count as zh-en).

**The "from zh-en" column** says how the Chinese text is produced:
- **convert** = character conversion + term map + Hong Kong vocabulary + a native read (§2 method). The zh text has no Mandarin-specific argument.
- **convert + patch** = convert, then rewrite the passages named. The passage counts come from a scan of `packs/course-zh-en.js` for 拼音, 普通话, 汉语, *tā*, quoted 了 / 们, 部分地区, yuan, Mainland place names and 您; lessons marked † were also read in full.
- **rewrite** = write new; the zh text argues from Mandarin throughout.

| lesson id | keep / reweight / add | note for Cantonese speakers | from zh-en |
|---|---|---|---|
| alphabet | reweight | No pinyin. Letter names against the Hong Kong habits (native check, §11): Z = zee (school: zed); H, F, L, M, N, S, X, R, W said with an extra vowel or as two syllables; G / J, V / W. IPA for each name, which doubles as the first symbol practice | **rewrite**† (12 pinyin references, 7 passages) |
| pron | reweight | The Cantonese list (§4 item 4) in intelligibility order: n / l; r / l in clusters; final b d g and unreleased stops; final clusters (-ts, -ks, -st, -ld, -nd, -kt); v; z; TH; long / short vowels and æ / e; diphthong + consonant (*time, like, game*); final l; stress and weak forms. Symbol key (§6 rule 4) and the British → American table (§6 rule 5) | **rewrite**† (keep only the format of the example rows) |
| be | reweight | Adjectives need *be* (「佢好高」 has no 係); no *be* + bare verb (*are lack of*, *I am agree*); *be* is never dropped in questions | convert + patch (Beijing / Shanghai rows → Hong Kong) |
| it-there | reweight | 有 = *have* and *there is*: no *There has…*, no *In Hong Kong has…*; weather and time need *it*; pseudo-relative *There are many people have…* gets one row | convert + patch† (add the 有 paragraph and the pseudo-relative row) |
| articles | reweight | Core lesson. 「一個」 is not always *a*; the bare classifier (「本書」) is not *the*; jobs take *a* (*She's a teacher*) | convert |
| plurals | reweight | 啲 and 哋 are not -s; after a number the noun still takes -s; **say the -s**: /s/ after p t k f, /z/ elsewhere, /ɪz/ after s z ʃ tʃ dʒ, with audio. Final cluster practice (books, cats, friends) | convert + patch† (2 passages on 们 / 量词 → 哋 / 啲 / 量詞; add the spoken -s block) |
| present | reweight | Habit vs now; adverbs of frequency go after *be* and before other verbs (*I always go*, not *I go always* / *Always I go*) | convert |
| questions | reweight | *do / does* support; no statement order with a question word (*Where you go?*); 呀 / 嗎 / 呢 have no English form; *How to say…?* → *How do you say…?* | convert |
| third-s | reweight | The Hong Kong case for -s is spoken as much as written: *he like* is heard as a grammar error by examiners (EDB handout). Three sounds of -s again; *has*, *does*, *goes* | convert + patch (add the spoken block) |
| prep | reweight | 喺 covers in / on / at; no preposition after *discuss, emphasize, enter, marry*; one needed after *listen, wait, apply, arrive* | convert |
| countable | reweight | Fixed list of Hong Kong favourites: *staff, vocabulary, research, information, equipment, furniture, advice, luggage, homework* never take -s | convert (zh list already has most; add *staff, vocabulary, research*) |
| object-have | reweight | 「佢」 is he, she and it in speech; written 他 / 她 shows the learner already knows the difference. he / she / it and his / her drills in the body rows | convert + patch† (1 passage: replace the *tā* homophone argument with 佢) |
| can-like | keep | Add one row: *I like it very much*, not *I very like it* (the full treatment is in `adjectives` and `hk-english`) | convert |
| polite | keep | *Could you…?*, *please*; 唔該 is both *please*, *thanks* and *excuse me* | convert + patch (您 → drop; add 唔該) |
| continuous | reweight | 緊 ≈ be + -ing, but state verbs (*know, like, want, have* = own) do not take -ing | convert + patch (add 緊) |
| past | reweight | 「咗」 ≠ past tense (it can refer to tomorrow). **Say the -ed**: /t/, /d/, /ɪd/ with audio; *walked* is one syllable, and no "enjoyded" | convert + patch† (2 passages: 了 → 咗; add the spoken -ed block) |
| irregular-past | reweight | Vowel-change pairs double as pronunciation practice (*sit / sat, leave / left, feel / felt*) | convert (Shanghai row → Hong Kong) |
| the | reweight | When **not** to use *the*: generic plurals and uncountables (*I like music*, *Dogs are friendly*); most place names; *the* MTR, *the* Peak, but Central, Mong Kok, Hong Kong | convert + patch (place examples) |
| adjectives | reweight | 好 ≠ *very* before a verb: *I really like it* / *I like it very much*; no *more better*; -ed / -ing adjectives (*bored / boring*) | convert + patch (add *very* + verb and *more better*) |
| going-to | keep | — | convert |
| tense | reweight | Recap built on the Cantonese markers: 咗, 過, 緊, 會 against the English forms; time words do not replace verb forms | convert + patch† (2 passages: 了 / 过 / 在 → 咗 / 過 / 緊) |
| joining | reweight | *Although…, but…* and *Because…, so…*: pick one; a comma cannot join two sentences | convert |
| numbers | reweight | 萬 and 億 vs thousand / million; **Hong Kong dollars** vs US dollars; dates month-first in the US; floors: Hong Kong G/F = American first floor; -teen / -ty by stress | convert + patch† (yuan → dollars; add floors and dates) |
| smalltalk | reweight | 「食咗飯未？」 is not a greeting in English; safe topics; no questions on salary, rent, age or weight | convert + patch† (3 passages) |
| hk-english | **add** (after `smalltalk`, end of A1) | 港式英文陷阱. See the outline below | **rewrite**, reusing about half of zh `chinglish`† |
| past-continuous | keep | — | convert |
| will | keep | — | convert |
| perfect | reweight | 過 = experience (*Have you ever…?*); a finished time word (*yesterday, last year*) takes the past simple, not the perfect | convert + patch (2 passages; Beijing rows) |
| modals | keep | — | convert |
| to-ing | reweight | *suggest / enjoy / mind* + -ing; no *suggest me to*; *look forward to* + -ing (a classic Hong Kong email error; native check) | convert |
| articles-2 | reweight | Second pass: *the* with a known or unique thing; no article with meals, languages, most countries; *the* + superlative | convert (place examples) |
| first-conditional | keep | — | convert |
| relative | reweight | English puts the clause after the noun and needs *who / that* as subject: *There are many people **who** have…*; no pronoun repeated after the clause (*The man who I met ~~him~~*) | convert + patch (add both points) |
| phrasal | keep | — | convert |
| perfect-2 | reweight | *since / for*; *have been to* vs *have gone to*; *I've lived here since 2015*, not *I live here since* | convert + patch (1 passage; Beijing row) |
| narrative | keep | — | convert + patch (2 quoted 了 passages) |
| conditionals | reweight | Chinese shows unreal conditions with 如果 only; the English verb must change (*If I had…, I would…*) | convert + patch (1 passage) |
| passive | reweight | *be* + past participle: no missing *be* (*The research conducted…*); no passive of *happen, occur, exist*; 被 is not needed for every passive | convert + patch (1 passage) |
| articles-3 | **add** (after `passive`, before `reported`) | Articles at B1. See the outline below | **convert** from zh `articles-3`† (1 passage: 四六级 → DSE / IELTS) |
| reported | keep | — | convert |
| email | reweight | Hong Kong work email: *Dear Mr. Chan* (surname), no *Dear Sir* to a named person, no *Please kindly*, no *Noted with thanks* outside Hong Kong, no *revert* = reply; *I look forward to hearing from you* | convert + patch† (2 passages: 您好 / 辛苦了 → Hong Kong habits; names) |
| idioms | keep | *Add oil* gets one line here, pointing to `hk-english` | convert |

**Summary of the conversion:** rewrite 3 (`alphabet`, `pron`, `hk-english`), convert + patch 20, convert 19. By length of the zh lesson text, the three rewrites are about 15% and the patched passages are a few sentences each, so roughly three quarters or more of the lesson text is conversion [estimate from the scan, not a line count of finished work]. CHECKS, PRACTICE prompts and `why` lines of every lesson convert, with the term map applied (`复数` → 眾數 matters for the validator).

**The two added lessons**

1. **`hk-english`, 「港式英文陷阱」, after `smalltalk`.** It takes the slot of ko-en's `konglish` and zh-en's `chinglish`. Outline:
   - **One Chinese verb, several English verbs** (convertible from zh `chinglish`, with Cantonese glosses): 開 / 熄 → *turn on / turn off* (not *open / close the light*); 睇 → *look at / see / watch / read*; 帶 / 攞 → *bring / take*; 借 → *lend / borrow*; 講 → *say / tell / speak / talk*; 食藥 → *take medicine*.
   - **Sentence shapes carried over from Cantonese** (new): *I very like it*; *There are many people have…*; *I am difficult to…* → *It is difficult for me to…*; *Although…, but…*; *I go first* → *I'm leaving now*; *Wait me* → *Wait for me*.
   - **Words that are fine at home and unclear abroad** (new; §4 item 15): *add oil*, *lai see*, *shroff*, *chop*; final particles in chat.
   - **British at school, American here** (new): one table: lift / elevator, flat / apartment, toilet / restroom, football / soccer, film / movie, mobile / cell phone, queue / line, rubbish / trash, bill / check, ground floor / first floor, holiday / vacation.
   - **Tone:** 「港式英文不是錯，只是外地人未必明白」. Errors of grammar are marked ✗; local words are marked 「本地用法」.
   - **Reason:** every finished course has a lesson in this slot, and the Hong Kong list differs from the Mainland one (sources in §4 items 6, 7, 12, 13, 15).
   - Needs 14 CHECKS and a PRACTICE set written to the `article-plural` rule like every other lesson; the English is new and has no parity partner.
2. **`articles-3`, after `passive`.** Same id and position as ko-en's and zh-en's own lesson (ko `ownLessons` includes `articles-3`, so parity ignores it).
   - Content: generic *the* vs no article (*The internet* / *Dogs*), abstract nouns (*life*, *society*, *nature*), institutions (*go to school* / *go to the school*), *the* + adjective (*the elderly*), article + countability review.
   - **Reason:** Chan 2022 found article errors at all proficiency levels, with generic reference the hardest context (§4 item 1).
   - Convert the zh lesson, its checks and its practice; replace the one exam reference.

**Considered, not added:**
- **`final-sounds`** (vi-en's own lesson for final consonants). It is the strongest candidate for a third lesson, and the brief allows two. Its content is spread instead over the `pron` rewrite, the spoken -s / -ed blocks in `plurals`, `third-s` and `past`, and the new deck 「字尾發音」 (§9). If first-attempt logs show endings still dropped, swap it in for `articles-3`.
- A separate he / she lesson: `object-have` body rows plus the secondary `why` cover it, and the evidence is thin (§4 item 5).
- A tense-markers lesson (咗 / 過 / 緊): the `tense` recap covers it.
- zh-en's deck 「数量表达」 (measure words): not adopted; see §9.

**English-side changes: none required.**
- No shared check or practice string changes. `deviations.json` needs only `extraLessons: ["hk-english", "articles-3"]`, the deck count, the two new decks and the localised cards in §9.
- **Optional, one item:** `passive#12` accepts `The meeting was canceled`, `The meeting was cancelled` and `The meeting got canceled`. Adding `The meeting got cancelled` would complete the set for British spellers. It is an English-side change for every course, so it is a request to the lead, not part of this course.

## 9. Vocabulary and cultural notes

Localisation choices are [practitioner opinion]. English strings in decks and dialogues change only where the table says so; each changed card needs a per-deck deviation entry, as zh-en and ja-en did.

| ko-en | yue-en |
|---|---|
| Minji | **Amy Chan** (main); alternatives Jason Wong, Kelvin Lee, Winnie Lam, Mr. Cheung. English given name + Cantonese surname, as many Hongkongers introduce themselves (general knowledge; native check) |
| Mr. Kim | **Mr. Chan** |
| Korea / Korean (nationality) | **Hong Kong** / "I'm from Hong Kong." |
| Seoul | **Hong Kong**; for "I live in…": **Kowloon** |
| Busan, Jeju | Macau, Guangzhou, Shenzhen; outlying trips: Lantau, Cheung Chau |
| Do you speak Korean? | **Do you speak Cantonese?** |
| Your Korean is really good! | **Your Cantonese is really good!** |
| Have you been to Korea? | **Have you been to Hong Kong?** |
| the Korean embassy | **my consulate** ("I need to contact my consulate."). Which consulate a Hong Kong traveller turns to depends on the passport held; the neutral wording avoids the question. zh-en uses "the Chinese embassy". Lead to decide |
| kimchi, bibimbap | dim sum, wonton noodles, milk tea, egg tarts, barbecued pork (char siu) |
| K-pop, K-drama | Cantopop, Hong Kong movies; name genres, not artists |
| Gangnam | Central, Mong Kok, Tsim Sha Tsui (check each on the voice) |
| Chuseok, Korean holidays | Lunar New Year, Mid-Autumn Festival, Ching Ming, typhoon days |
| 존댓말 / 반말 comparisons | no 你 / 您 contrast in Cantonese; compare 唔該 / 多謝 (two kinds of *thank you*) instead |
| won (₩) | **Hong Kong dollars**: write `30 dollars` in Hong Kong scenes and `HK$30` only in a note; "US dollars" where the difference matters |
| subway, T-money | the MTR, an Octopus card (notes only: abroad say *subway* / *transit card*) |

**Name and TTS rules:**
- **Surnames the en-US voice can say:** Chan, Wong, Lee, Lam, Cheung, Lau, Ho, Yip. **Avoid** Ng, Tsz-, Hui, Kwok, Tse, Yeung and romanised given names such as Tsz Ching or Hiu Tung: an American voice will not say them recognisably [practitioner opinion; not tested, §11].
- **Places:** Hong Kong, Kowloon, Central, Macau and Lantau are safe guesses; Mong Kok, Tsim Sha Tsui, Sha Tin and Cheung Chau must be heard once on the engine's voice before use.
- **Name order:** given name first with an English name (Amy Chan); address as "Mr. Chan" / "Ms. Wong". Teach in `email` that the surname follows the title.

**Checks and practice:** Korean proper nouns occur in shared English strings (counted in `packs/course-ko-en.js` practice: Kimchi 13, Jeju 11, Seoul 9, Korea 9, Busan 5, won 4, Korean 2).
- **Rule (same as zh and ja):** leave those English strings unchanged (parity) and translate the Chinese side literally: 首爾, 釜山, 濟州, 泡菜, 韓國, 韓圜 (native check: 韓元 is also used).
- Do **not** file per-item deviations.

**Decks.** The scaffold from ko-en contains 21 decks (20 topic decks + the shared alphabet deck, counted in `tools/content/ko/decks.js`). This course adds 2, for 23. Rows 1–21 follow ko-en's deck order. The names are final proposals, each ≤ 10 characters, and need one native read (§11). "From zh-en" says how the cards' Chinese (meaning, note) is produced; the English and the IPA are copied in every case except the cards listed.

| # | Name | Linked lesson or notes |
|---|---|---|
| 1 | **打招呼** | Convert (zh 「问候」). 打招呼 is the everyday Hong Kong word |
| 2 | **自我介紹** | Convert + localise 3 cards: `My name is Amy.`, `I'm from Hong Kong.`, `I live in Kowloon.` (new IPA for these) |
| 3 | **求生英文 1** | Convert + localise 1 card: `Do you speak Cantonese?` |
| 4 | **求生英文 2** | Convert + patch 1 note (WeChat / Alipay → Octopus / PayMe / card) |
| 5 | **問路同交通** | Convert + patch notes: yuan → dollars; 地鐵 → 港鐵; subway = 美國的地鐵; 的士, 巴士 |
| 6 | **餐廳點餐** | Convert + patch 1 note. Notes: tipping in the US; "check" = 埋單; "to go" = 外賣 / 拎走 |
| 7 | **咖啡店同便利店** | Convert |
| 8 | **購物同付款** | Convert + patch 1 note (mobile payment). 付款 for zh 结账 |
| 9 | **數字、時間同日期** | Linked to `numbers`. Convert + patch 1 note (yuan → dollars); add notes on month-first dates and floor numbering |
| 10 | **閒談** | Linked to `smalltalk`. Convert + localise 1 card: `Have you been to Hong Kong?` |
| 11 | **情緒同反應** | Convert |
| 12 | **讚美同好感** | Convert + localise 1 card: `Your Cantonese is really good!` |
| 13 | **工作同電郵** | Linked to `email`. Convert + patch 1 note (您). 電郵, not 邮件 |
| 14 | **電話同短訊縮寫** | Convert + localise 2 cards: `Hello, this is Amy.`, `Can I speak to Mr. Chan?` Explain LOL, BTW with Hong Kong chat habits (哈哈, 順便講) |
| 15 | **旅行（機場同酒店）** | Convert + localise 1 card: `I have a reservation under Chan.` (zh has 5 mentions of 李 to replace) |
| 16 | **醫院同緊急情況** | Convert + localise 1 card (consulate, table above). Note: 911 in the US, 999 in Hong Kong |
| 17 | **片語動詞** | Linked to `phrasal`. Convert |
| 18 | **發音易錯** | Linked to `pron`. **Rewrite the notes of all 44 zh cards and replace zh-en's own appended pairs.** Keep the shared ko-en cards (English + IPA). Cantonese pairs: night / light, know / low, three / free, they / day, very / wary, vest / west, zip / sip, show / so, rice / lice, leave / live, full / fool, bad / bed, walk / work. The zh notes argue from pinyin, 普通话 and 「部分地区」 (3 times) and do not transfer |
| 19 | **英文習語** | Linked to `idioms`. Convert |
| 20 | **影視同俚語** | Convert. 影片, 劇集 for Mainland 视频, 电视剧 |
| 21 | **英文字母** | Shared alphabet deck, linked to `alphabet`. **Rewrite the notes** (zh has 11 pinyin references); letters and IPA copy |
| 22 | **港式英文陷阱** | yue-only. Linked to `hk-english`. ≥ 20 cards. About half convert from zh 「中式英语陷阱」 (26 cards: turn on / off the light, take / bring, lend / borrow, read a book, watch TV, take medicine, I really like it, Although…); the rest are new (It's difficult for me to…, wait for me, I'm leaving now, Good luck! for 加油, cashier for shroff, stamp for chop, the British / American pairs). Each note says 「港式英文」, 「一字多義」 or 「英式 / 美式」 |
| 23 | **字尾發音** | yue-only. Linked to `plurals`, `third-s`, `past` (and `pron`). ≥ 20 cards, all new notes: final voicing (bag / back, feed / feet, rope / robe, leave / leaf), clusters (cold / code, list, friends, asked, months, cats, cards, walked, wanted), diphthong + consonant (time, like, game, nine / line), initial clusters (place / pace, bring, present). English + IPA for friends, asked, months, bed / bet exist in the zh pack |

- **Not adopted: zh-en's 「数量表达」** (20 cards on measure phrases). It converts cleanly (one 李 to replace) if the lead wants a 24th deck; its content is otherwise covered by `countable`.
- **Deviation entries needed:** deck count (21 → 23), the two new decks, and the 10 localised cards above (decks 2, 3, 10, 12, 14, 15, 16).

**Groups, level titles and goals** (convert from zh-en; native check on tone):
- GROUPS: 起步 / 旅行與日常 / 交流與人際 / 職場 / 說得更地道. Put 字尾發音 and 港式英文陷阱 in the last group with 發音易錯.
- TITLES (levels 1, 3, 5, 8, 12, 16, 20): 新手, 學員, 健談, 旅行者, 本地通, 高手, 大師.
- GOALS: 旅行, 職場與工作, 交友與約會, 影視與音樂.

**Hong Kong vocabulary for translations and notes** (Mainland word in zh-en → Hong Kong word; general knowledge of Hong Kong usage unless marked as seen on a fetched page; native check on the whole list):

| zh-en | yue-en | zh-en | yue-en |
|---|---|---|---|
| 出租车 | 的士 | 公交车 | 巴士 |
| 地铁 | 地鐵 / 港鐵 | 自行车 | 單車 |
| 电梯 | 升降機 (口語 「𨋢」, not used: outside `nativeScript`) | 洗手间 | 洗手間 |
| 服务员 | 侍應 | 打包 | 外賣 / 拎走 |
| 结账 | 埋單 / 付款 | 信用卡 | 信用卡 |
| 手机 | 手提電話 / 手機 | 短信 | 短訊 |
| 视频 | 影片 (Apple HK) | 电影 | 電影 |
| 冰箱 | 雪櫃 | 空调 | 冷氣 |
| 土豆 | 薯仔 | 西红柿 | 番茄 |
| 草莓 | 士多啤梨 | 巧克力 | 朱古力 |
| 三明治 | 三文治 | 奶酪 | 芝士 |
| 饼干 | 餅乾 | 冰淇淋 | 雪糕 |
| 周末 | 週末 | 星期天 | 星期日 |
| 幼儿园 | 幼稚園 | 大学生 | 大學生 |
| 警察 | 警察 | 医生 | 醫生 |
| 上班 / 下班 | 上班 / 下班 (口語 返工 / 放工, quoted only) | 加班 | 加班 (口語 OT) |
| 公司 | 公司 | 简历 | 履歷 |
| 邮件 | 電郵 (Apple HK) | 打印 | 列印 |
| 网上 | 網上 | 软件 | 軟件 (Apple HK; never 軟體) |
| 这儿 / 哪儿 | 這裏 / 哪裏 | 什么 | 甚麼 |

**Cultural notes for card and lesson notes:**
- **Travel:** departure from Hong Kong International Airport. Tipping: a service charge at home, 15–20% expected in the US. Fahrenheit, miles, month-first dates, floors numbered from 1.
- **Work and email:** Hong Kong office English is British-based and formal (*Dear Sir / Madam*, *Yours faithfully*, *Please be informed that*); American email is shorter and first-name. Present both as correct in their place.
- **Small talk:** weather, weekend, food, travel. Notes warn against salary, rent, age and weight questions.
- **Phone and text:** keep the English abbreviations; mention that romanised Cantonese particles (*la, lor, ar*) are local chat style.
- **Money:** Hong Kong scenes in dollars; US scenes unchanged.
- **Exams:** mention DSE and IELTS by name where an exam example is needed (not 高考 / 四六级).

## 10. Interface wording notes

These rules are [curriculum convention] where a term was seen on Apple's Hong Kong pages (marked ●) and [practitioner opinion; native check] elsewhere. No Hong Kong style guide was fetched (§11).

**Starting point: `tools/i18n/zh/ui.json` (Simplified, Mainland wording; 784 exact strings, 274 patterns).** Produce `tools/i18n/yue/ui.json` from it with the same method as the course text (§2): character conversion, then the wording table below, then a native read. Character conversion alone leaves about fifty Mainland words in place.

**Wording that changes** (count = occurrences in `tools/i18n/zh/ui.json`):

| zh (Mainland) | count | yue (Hong Kong) | zh (Mainland) | count | yue (Hong Kong) |
|---|---|---|---|---|---|
| 登录 | 19 | **登入** ● | 退出登录 | — | **登出** ● |
| 设置 | 6 | **設定** ● | 账号 | 13 | **帳戶** (Apple HK prints 帳户 ●; pick one, native check) |
| 邮箱 / 邮件 | 21 | **電郵** ● | 验证码 | 10 | 驗證碼 |
| 链接 | 10 | **連結** ● | 点击 | 16 | **點按** / 按一下 ● |
| 保存 | 32 | **儲存** ● | 文件 | 4 | **檔案** |
| 搜索 | 9 | **搜尋** ● | 复制 / 粘贴 | 14 | **複製 / 貼上** |
| 数据 | 19 | **資料** ● (數據 for statistics) | 设备 | 30 | **裝置** ● |
| 浏览器 | 8 | 瀏覽器 ● | 备份 | 5 | 備份 |
| 导出 / 导入 | 21 | **匯出 / 匯入** | 默认 | 1 | **預設** ● |
| 网络 | 1 | **網絡** ● (not 網路) | 屏幕 | 1 | **螢幕** ● |
| 菜单 | 1 | **選單** | 隐私 | 2 | **私隱** ● |
| 添加 | 16 | **加入** / 新增 | 撤销 | 4 | **還原** |
| 恢复 | 5 | **還原** / 回復 | 重置 | 2 | **重設** |
| 刷新 | 5 | **重新整理** | 加载 | 3 | **載入** |
| 存储 | 4 | **儲存空間** | 分享 | 12 | 分享 ● |
| 音频 | 5 | **聲音** / 錄音 | 同步 | 13 | 同步 ● |
| 复习 | — | **溫習** | 反馈 | 21 | **意見** |
| 打卡 | 15 | **連續 N 日** (no 打卡) | 小测 | 8 | 小測 |
| 卡组 | 36 | 卡組 | 卡片 | 105 | 卡片 |
| 音标 | 18 | 音標 | 进度 | 44 | 進度 |
| 周 (week) | 23 | **星期** (週 only in `Intl` output) | 天 (days) | — | **日** |
| 英语 | 22 | **英文** | 单词 | 11 | **生字** / 字詞 |
| 语法 | 4 | **文法** | 听力 | 18 | **聆聽** |
| 题 / 道题 | 26 | 題 / 條題目 → 「{n} 題」 | 节课 | 11 | 「{n} 課」 |
| 软件 / 应用 | — | **軟件** / App ● (never 軟體, 應用程式 is acceptable) | 信息 | — | **訊息** (message) ● / **資料** (information) ● |
| 视频 | — | **影片** ● | 用户 | — | 用戶 (Apple HK prints 用户 ●) |

- **Register:** 你, used sparingly; plain declaratives ending in 。 or, for praise, ！: 「已儲存。」, 「今日的溫習完成了！」.
- **Buttons, tabs and menu items:** verb or verb-object, 2–4 characters, no punctuation and no 請: 開始, 繼續, 檢查, 提交, 下一題, 再試一次, 儲存, 取消, 返回, 略過.
  - Primary CTA: 「開始學習」, 「查看課程」. Keep CTAs ≤ 6 characters.
  - Ongoing states: 正在…… (正在同步).
- **Counters.** Cantonese and written Chinese have **no plural forms**: CLDR gives the single category `other` (checked in Node: `new Intl.PluralRules('yue')` and `('zh-HK')` both return only `other`). **One translation per count pattern**; supply the identical string at 1 and 2 for the plural-sensitive check. A classifier is required after the number.

  | English pattern | Hong Kong pattern | At 1 / at 2 |
  |---|---|---|
  | `{n} cards due` | 「{n} 張卡片待溫習」 | 1 張 / 2 張 |
  | `{n} cards` | 「{n} 張卡片」 | |
  | `{n} lessons` | 「{n} 課」 | 1 課 / 2 課 |
  | `Lesson {n}` | 「第 {n} 課」 | |
  | `{n} days` | 「{n} 日」 | |
  | `{n}-day streak` | 「連續 {n} 日」 | |
  | `{n} words` | 「{n} 個生字」 | |
  | `{n} questions / items` | 「{n} 題」 | |
  | `{n} decks` | 「{n} 個卡組」 | |
  | `{n} minutes` | 「{n} 分鐘」 | |
  | `{n} XP` | 「{n} XP」 | |
  | `Level {n}` | 「第 {n} 級」 | |
  | `{n}% correct` | 「答對 {n}%」 | |

  - **No 兩 in templates:** with a digit slot, 2 stays 「2 張」.
  - Do not add 們, 哋 or 啲.
- **Language names in slots.** Chinese has no case or agreement, so a language name can stand anywhere in a sentence in its dictionary form: 「用{lang}解釋」, 「學{lang}」. Names: **英文** (the target), **廣東話** (this interface's own name; `LANGS.yue` in `src/app.html` already says 廣東話), 韓文, 日文, 普通話.
  - `Intl.DisplayNames(['yue'])` gives 英文 / 粵語 / 韓文; `['zh-Hant-HK']` gives 英文 / 廣東話 / 韓文 (run in Node here). Use the `zh-Hant-HK` output so the name matches `LANGS.yue`.
- **Numbers and dates** (output of Node's `Intl` here):
  - Half-width digits with comma thousands: `1,234.5`. Percent `85%`, no space.
  - **Use locale `zh-HK` (or `zh-Hant-HK`), not `yue`.** `zh-HK` prints `2026年11月23日`, short `11月23日`, weekday `週一`, time `下午9:05`. Locale `yue` prints the colloquial `下晝9:05` and `星期一`, which breaks the written-register rule of §2.
  - 12-hour time with 上午 / 下午 is the `zh-HK` default and is what Hong Kong readers expect; do not force 24-hour.
- **Width:** CJK characters are full-width. Never half-width punctuation in Chinese sentences, never full-width Latin letters or digits.
- **Bottom nav** (two characters each; limit 8):

  | English | Hong Kong label | Full-width chars | zh-en label |
  |---|---|---|---|
  | Today | 今日 | 2 | 今天 |
  | Practice | 練習 | 2 | 练习 |
  | Review | 溫習 | 2 | 复习 |
  | Lessons | 課程 | 2 | 课程 |
  | Drills | 操練 | 2 | 专项练习 |
  | Read | 閱讀 | 2 | 阅读 |
  | Progress | 進度 | 2 | 进度 |
  | Feedback | 意見 | 2 | 反馈 |

  - 操練 is the Hong Kong school word for drilling (as in 操練試卷; native check). If it reads as too exam-like, use 特訓.
  - Use 學習進度 / 意見回饋 only as page titles.
- **UI glossary (use exactly):**

  | English UI term | Hong Kong Chinese |
  |---|---|
  | lesson / lessons tab | 課 / 課程 |
  | practice | 練習 |
  | review | 溫習 |
  | drills | 操練 |
  | deck | 卡組 |
  | card | 卡片 |
  | streak | 連續 {n} 日 |
  | check (lesson quiz) | 課後小測 |
  | hint | 提示 |
  | explanation (`why`) | 解說 |
  | correct / wrong | 答對了 / 答錯了 |
  | try again | 再試一次 |
  | next / skip | 下一題 / 略過 |
  | show pronunciation | 顯示音標 |
  | listen / play audio | 播放 |
  | due today | 今日待溫習 |
  | level / XP | 等級 / 經驗值 |
  | progress | 進度 |
  | feedback | 意見 |
  | settings | 設定 |
  | sign in / sign out | 登入 / 登出 |
  | account / password / email | 帳戶 / 密碼 / 電郵 |
  | save / cancel / delete | 儲存 / 取消 / 刪除 |
  | export / import / backup | 匯出 / 匯入 / 備份 |
  | sync | 同步 |
  | loading… | 載入中… |

- **Feedback marks:** ✓ 答對了 / ✗ 答錯了. Always pair a mark with text.
- **`nativeScript` (Han):** `[㐀-䶿一-鿿]`, the same as zh. It covers every character this profile uses, including the Cantonese characters in quoted examples (係 唔 嘅 咗 喺 佢 冇 嘢 啲 哋 緊 睇 攞 畀). It does not cover supplementary-plane characters (𨋢, 𠮶, 𡃁); **do not use those** (write 升降機, 嗰). `labels.cueTest` is compiled without the `u` flag (`more/_dsl.js`), so the BMP-only class is required there in any case.

**Engine and pipeline notes for the lead (nothing here was changed):**
- **HTML language and fonts.** `hLang()` in `src/app.html` maps only `zh` → `zh-Hans` and `ptpt` → `pt-PT`, so this interface would get `lang="yue"`. The CSS rule `html[lang^=zh]` sets a Simplified font stack (PingFang SC …). Needed: map `yue` → `zh-Hant-HK`, and give it a Hong Kong stack ("PingFang HK", "Noto Sans HK", "Microsoft JhengHei", sans-serif), as `docs/profiles/en-yue.md` §10 already asks for the target side. Without it, some characters render with Mainland glyph shapes.
- **Date locale.** `dLoc()` returns the interface language, so dates would be formatted with `yue` (colloquial 下晝). Map `yue` → `zh-HK` there.
- **Three-letter code.** `yue` is the first three-letter code for a `<lang>-en` content course (`ceb` exists only as an interface dictionary and as halves of other courses). Read, not run:
  - **Accept `yue`:** `tools/content/lib.js` (`LANG_RE = /^[a-z]{2,3}(-[A-Za-z0-9]{2,8})?$/`, used by `checkLang`), and through it `new_lang.js`, `gen.js`, `parity.js` and `validate.js`; also `tools/i18n/i18nlib.py`, `tools/i18n/validate.js`, `tools/i18n/new_lang.py`, `link_roadmap.py --check`, `e2e_en.js`.
  - **Reject it:** `tools/content/lint.js` (`/^[a-z]{2}$/`) and `tools/i18n/road.py` (asserts `[a-z]{2}`), as the task note says.
  - **profile.json field rule that a three-letter code breaks:** `reference` must match `/^[a-z]{2}$/` (`lib.js` `loadProfile`). It does not affect this course (the reference stays `ko`, the default), but no later course could name `yue` as its reference.
  - **PIPELINE.md §3** still says "2-letter code"; the text is out of date against `LANG_RE`.
  - `merge_deviations.py` hard-codes `/home/claude/tools/content/%s/`; it works with any code length but only at that path.
  - **Name collisions: none.** `packs/course-en-yue.js`, `tools/target/yue/` and `docs/profiles/en-yue.md` belong to the reverse course; this course writes `tools/content/yue/`, `packs/course-yue-en.js`, `tools/i18n/yue/` and `packs/i18n-yue.js`. Check that no script globs `*yue*`.

## 11. Gaps and unverified claims

**Files the brief names that are not here**
- `reports/Grammar learning order research.md` does not exist in this worktree. It was skipped; the evidence labels follow the usage in `zh.md`, `vi.md` and `id.md`.
- `docs/profiles/OTHERS.md` has no Cantonese section (it covers zh, fr, de, pt, it, vi, th, id, hi, ar, ru), so there was no earlier summary to check against.

**Needs a native Hong Kong reader before the content agents start**
1. **The standing-rule keyword 眾數** (vs 複數), and the glossary rows marked native check: 主語 / 賓語, 第三身單數, the 式 tense names, 關係子句, 片語動詞, 生字.
2. **The written-register rule in practice:** whether 書面語 translations of everyday lines (我肚子餓了, 洗手間在哪裏？) read naturally to a Hong Kong adult in a phone app, or whether card meanings should be colloquial. The rule in §2 is a decision from conventions, not from user testing.
3. **Deck names, group names and level titles** (§9), and the tab label 操練.
4. **The whole Hong Kong vocabulary table** in §9 and every interface term in §10 not marked ●.
5. **Hong Kong letter-name habits** for the `alphabet` lesson. No source was fetched; do not write the lesson from this profile alone.
6. **帳戶 / 帳户 and 用戶 / 用户:** Apple's Hong Kong pages print the 户 form; many Hong Kong sites print 戶. Pick one.
7. **Email habits** named in §8 `email` (*Please kindly*, *Noted with thanks*, *revert*) and `to-ing` (*look forward to* + base verb): general knowledge, no source fetched.

**Claims with weak or no evidence**
- **he / she confusion with 佢** (§4 item 5): no Hong Kong study found; one search-result summary of Setter et al. 2010 mentions pronoun gender levelling. Treated as [practitioner opinion].
- **"There has"** (§4 item 6): the literal form was not seen in any fetched source. Chan 2004 names the "there be" structure as a problem and the CityU page gives the pseudo-relative.
- **"I very like"** (§4 item 7): Chan 2004 names adverb placement; the examiners' example *I very enjoy it* was reported by the *South China Morning Post* (2015), whose page returned 403.
- **Dropped subjects and topic-first sentences:** typological reasoning only.
- **All "Why" lines in §4** about Cantonese grammar (咗, 過, 緊, 啲, 哋, bare classifiers) are from general knowledge of Cantonese and from `docs/profiles/en-yue.md`; a Cantonese linguist or native teacher should read them.
- **IPA literacy in Hong Kong:** one small study (Oh 2010, 20 students, abstract only). That primary schools teach phonics and not IPA rests on search-result titles of Education Bureau material; the 2017 *Teaching Phonics at Primary Level* PDF and the 2017 curriculum guide could not be read.
- **Jyutping is not taught in schools; film subtitles are in 書面語; English starts in kindergarten; IELTS is the usual adult exam:** general knowledge, no source fetched.
- **HKEAA policy on British and American spelling:** not found on an HKEAA page.
- **EF EPI:** self-selected test-takers; the second set of figures comes from a page whose edition year is not stated.
- **Conversion estimate** ("about three quarters"): from a keyword scan of the zh pack and a full read of 11 lessons, not from converting the text. OpenCC was not run (not installed here); the list of Mainland function words in §2 is not exhaustive.
- **TTS:** no name, place or food word was listened to on the en-US voice. The pron for *Hong Kong* in §6 row 18 is unconfirmed. Cantonese surnames and place names are the main risk.
- **No Hong Kong English-learning app with Cantonese explanations was found** to copy conventions from (web search only; Duolingo's Cantonese course teaches Cantonese to Mandarin speakers, per a search result).

**Studies read only in part**
- Abstract or record page only: Chan 2004, Chan 2007, Chan 2022, Chan & Li 2000, Hung 2000, Oh 2010, Sewell 2010 (PhD abstract), Setter, Wong & Chan 2010 (chapter summary page).
- Text layer extracted from the PDF with a script, not a clean read: Meng, Zee & Lee 2007; the EDB 2024–25 handout (slides; word spacing lost in places); EF 2025 fact sheet; Setter, Ryder & Mok 2015 (introduction only).
- Second-hand through Wikipedia or another page: Hung 2007 and 2012, Bolton 2000, Chan 2013, Hansen Edwards 2016, Setter 2006, Sewell 2009 and 2017, Luke & Richards 1982, Platt 1982, Deterding, Wong & Kirkpatrick 2008, Jenkins 2000, Budge 1989.
- **Could not be opened** (blocked, too large or not found): Chan 2010 in *TESOL Quarterly* (only a search-result abstract: 387 learners, a taxonomy of written errors); Deterding, Wong & Kirkpatrick 2008 (Griffith repository, 403); Gisborne 2009 (403); Setter 2006 (repository blocked); Chan 2022 full text (De Gruyter, 405); two *South China Morning Post* articles (403); Cambridge Dictionary's Traditional Chinese pages (403); Yuen 2017 (Glasgow thesis, PDF not extractable); HKUST and PolyU pronunciation pages (404 or not relevant); the Education Bureau's 2017 curriculum guide (too large) and phonics booklet.

**Things to measure after launch**
- First-attempt accuracy on article items against plural and tense items, to test the standing-rule choice.
- Whether learners type *film* / *toilet* into the eleven typed items in §2.
- Whether the IPA toggle is left on.

**Check run for this profile** (Node, on `docs/profiles/yue.profile.json`):

```
JSON ok; native=yue, name.yue=英文
pronPattern identical to zh: true; same keys as zh: true
regexes compile: nativeScript, pronPattern, pronScript, keywords, cueTest
PASS /ɪts ˈkoʊld təˈdeɪ/
PASS /ðerz ə kæˈfeɪ nɪr ˈhɪr/
PASS /aɪ ˈhæv ˈtuː ˈbrʌðərz/
PASS /wi ˈwɑːtʃt ə ˈmuːvi/
PASS /maɪ ˈsɪstər ɪz ə ˈnɜːrs ‖ ʃi ˈwɜːrks ət ˈnaɪt/
PASS /aɪ ˈwɜːrkt ˈjestərdeɪ/
PASS /ˈðiːz ər maɪ ˈkiːz/
PASS /ˈθriː ˈbʊks/
PASS /ˈwerz ðə ˈrestruːm/
PASS /ˈθæŋk ju/
PASS /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/
PASS /ˈteɪk ˈðɪs ˈmedɪsn ˈtwaɪs ə ˈdeɪ/
PASS /ˈθriː/ /ˈfriː/
PASS /ˈkoʊld/ /ˈkoʊd/
PASS /ˈpleɪs/ /ˈpeɪs/
PASS /ˈbæg/ /ˈbæk/
PASS /ˈzɪp/ /ˈsɪp/
PASS /aɪm frəm ˌhɑːŋ ˈkɑːŋ/
PASS /ˈnaɪt/ /ˈlaɪt/
PASS /ˈveri/ /ˈweri/
PASS /ˈliːv/ /ˈlɪv/
PASS /ˈfrendz/
PASS /ˈæskt/
pron examples: 23, failed: 0
why lines matching keywords: 6/6
cue labels match cueTest: true
British symbols rejected: /ˈhɒt/ FAIL, /ˈgəʊ/ PASS (ɒ must fail; əʊ passes the character class, so rule 5 is a writing rule)
tab labels: 今日(2) 練習(2) 溫習(2) 課程(2) 操練(2) 閱讀(2) 進度(2) 意見(2); all nativeScript: true
deck rows: 23 -> 1:打招呼 2:自我介紹 3:求生英文 1 4:求生英文 2 5:問路同交通 6:餐廳點餐 7:咖啡店同便利店 8:購物同付款 9:數字、時間同日期 10:閒談 11:情緒同反應 12:讚美同好感 13:工作同電郵 14:電話同短訊縮寫 15:旅行（機場同酒店） 16:醫院同緊急情況 17:片語動詞 18:發音易錯 19:英文習語 20:影視同俚語 21:英文字母 22:港式英文陷阱 23:字尾發音
supplementary-plane chars in yue.md (only as the named exclusions): 𨋢 𠮶 𡃁
```

## Sources

Every item was opened in this session. What was read is stated; blocked items are in §11, not here.

**Research (Hong Kong learners)**
- Chan, A. Y. W. (2022). Typology and contexts of article errors: investigation into the use of English articles by Hong Kong Cantonese ESL learners. *IRAL* 60(2), 197–227. Record page with abstract: https://scholars.cityu.edu.hk/en/publications/typology-and-contexts-of-article-errors-investigation-into-the-us/
- Chan, A. Y. W. (2004). Syntactic transfer: evidence from the interlanguage of Hong Kong Chinese ESL learners. *Modern Language Journal* 88(1), 56–74. Record page with abstract: https://scholars.cityu.edu.hk/en/publications/syntactic-transfer-evidence-from-the-interlanguage-of-hong-kong-c/
- Chan, A. Y. W. (2007). The acquisition of English word-final consonants by Cantonese ESL learners in Hong Kong. *Canadian Journal of Linguistics* 52(3), 231–253. Abstract: https://www.cambridge.org/core/journals/canadian-journal-of-linguistics-revue-canadienne-de-linguistique/article/acquisition-of-english-wordfinal-consonants-by-cantonese-esl-learners-in-hong-kong/3EAA59C97D7E00302410C9C82E94F752
- Chan, A. Y. W. & Li, D. C. S. (2000). English and Cantonese phonology in contrast: explaining Cantonese ESL learners' English pronunciation problems. *Language, Culture and Curriculum* 13(1), 67–85. Record page with abstract: https://research.polyu.edu.hk/en/publications/english-and-cantonese-phonology-in-contrast-explaining-cantonese-/
- Hung, T. T. N. (2000). Towards a phonology of Hong Kong English. *World Englishes* 19(3), 337–356. Record page with abstract: https://scholars.hkbu.edu.hk/en/publications/towards-a-phonology-of-hong-kong-english/
- Meng, H., Zee, E. & Lee, W. S. (2007). *A contrastive phonetic study between Cantonese and English to predict salient mispronunciations by Cantonese learners of English*. Technical report SEEM2007-1500, Chinese University of Hong Kong. PDF text layer: https://www1.se.cuhk.edu.hk/~hccl/publications/pub/Meng-Tech-Report-Feb2007.pdf
- Oh, S. Y. (2010). The IPA training on the pronunciation of difficult English words for Cantonese speakers. Record page with abstract: https://scholars.cityu.edu.hk/en/publications/the-ipa-training-on-the-pronunciation-of-difficult-english-words-/
- Setter, J., Ryder, C. & Mok, P. (2015). Phonology in new varieties of English: Hong Kong English diphthongs. *ICPhS 2015*. Introduction, PDF text layer: https://www.cuhk.edu.hk/lin/people/peggy/ICPHS2015SetterRyderMok.pdf
- Setter, J., Wong, C. S. P. & Chan, B. H. S. (2010). Morphosyntax. In *Hong Kong English*, 43–67. Edinburgh University Press. Chapter summary page: https://www.cambridge.org/core/books/hong-kong-english/morphosyntax/01521A0A01017207135FA0E1EC6E650D
- Sewell, A. J. (2010). *Phonological features of Hong Kong English: patterns of variation and effects on local acceptability*. PhD thesis, Lingnan University. Abstract: https://commons.ln.edu.hk/eng_etd/1

**Hong Kong teaching and reference material**
- Education Bureau, Professional Development Programme 2024–25, "Enriching Knowledge Series (3): Improving English Pronunciation and Speaking Skills" (handout by A. Sewell). PDF text layer: https://www.edb.gov.hk/attachment/en/curriculum-development/kla/eng-edu/professional-development-programmes/2425/Enriching%20Knowledge%20Series%20(3)_Improving%20English%20Pronunciation%20and%20Speaking%20Skills_2024-25.pdf
- The Education University of Hong Kong, "Pronunciation problems encountered by Cantonese speakers" (after Chan & Li 2000): https://dses.eduhk.hk/?p=371
- The Education University of Hong Kong, corpus site, "Background of China English and Hong Kong English": https://corpus.eduhk.hk/english_pronunciation/index.php/background-of-china-english-and-hong-kong-english/
- City University of Hong Kong ELSS / UGC ICOSA project, "Correcting common errors (found in HK learners' writing)" 1 and 2: https://www.lc.cityu.edu.hk/ELSS/Resource/cce1/index.htm , https://www.lc.cityu.edu.hk/ELSS/Resource/cce2/index.htm
- Hong Kong Examinations and Assessment Authority, HKDSE English Language subject page (Chinese): https://www.hkeaa.edu.hk/tc/hkdse/assessment/subject_information/category_a_subjects/hkdse_subj.html?A1&1&2_25
- LearnSmart (tutoring centre), junior grammar course page: https://learnsmart.edu.hk/course/junior-grammar-tutorial

**Proficiency data**
- EF EPI 2025 fact sheet, Hong Kong (PDF text layer): https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-hong-kong-english.pdf
- EF EPI, Hong Kong region page: https://www.ef.com/wwen/epi/regions/asia/hong-kong/

**Background pages**
- Wikipedia, "Hong Kong English": https://en.wikipedia.org/wiki/Hong_Kong_English
- Wikipedia, "Written Cantonese": https://en.wikipedia.org/wiki/Written_Cantonese
- Wikipedia, "Languages of Hong Kong": https://en.wikipedia.org/wiki/Languages_of_Hong_Kong
- Wikipedia, "Hong Kong Diploma of Secondary Education": https://en.wikipedia.org/wiki/Hong_Kong_Diploma_of_Secondary_Education
- Wikipedia, "Add oil": https://en.wikipedia.org/wiki/Add_oil
- Language Log, "Add oil" (18 October 2018): https://languagelog.ldc.upenn.edu/nll/?p=40346

**Hong Kong interface wording**
- Apple Support (Hong Kong), iPhone User Guide page: https://support.apple.com/zh-hk/guide/iphone/iph3e2e455f/ios
- Apple Support (Hong Kong), "管理「使用 Apple 登入」的 app": https://support.apple.com/zh-hk/102571
- Apple (Hong Kong), privacy page: https://www.apple.com/hk/privacy/

**Project files read**
- `docs/briefs/profile-ko-based.md`, `docs/PIPELINE.md`, `PILOT-SPEC.md`, `PRACTICE-SPEC.md`, `PHASE2-BRIEF.md`
- `docs/profiles/zh.md`, `docs/profiles/vi.md` (§9), `docs/profiles/id.md` (§7–8), `docs/profiles/OTHERS.md`, `docs/profiles/en-yue.md` (§1–2, §10)
- `tools/content/zh/profile.json`, `tools/content/zh/PRON-RULES.md`, `tools/content/zh/DECKNAMES.md`, `tools/content/zh/deviations.json`, `tools/content/ko/profile.json`, `tools/content/ko/decks.js`
- `tools/content/lib.js`, `new_lang.js`, `gen.js`, `validate.js`, `parity.js`, `lint.js`, `more/_dsl.js`; `tools/i18n/road.py`, `i18nlib.py`, `validate.js`, `new_lang.py`, `tools/i18n/zh/ui.json`
- `packs/course-zh-en.js`, `packs/course-ko-en.js`, `src/app.html` (language, font and date helpers)
