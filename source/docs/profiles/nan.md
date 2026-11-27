# Taiwanese (Taigi) speakers learning English — course profile

Course `nan-en`. Audience: adult speakers of Taiwanese Hokkien (台語, Tâi-gí) in Taiwan who want the app to talk to them in Taigi. All explanations, prompts, `why`, `hint`, card meanings and notes, deck names and course interface overrides are in **written Taiwanese in the Ministry of Education (MOE) recommended Han characters** (owner's decision 2026-11-27; §2). The app code is `nan` (profile.json `native: "nan"`, pack `course-nan-en`, interface pack `i18n-nan`, which already exists: `tools/i18n/nan/NOTES.md` is the orthography authority this profile follows). The reverse course `en-nan` (`docs/profiles/en-nan.md`) is a different product and is not changed by anything here.

The scaffold is the **Cantonese-speakers' course** (`yue-en`, written Cantonese, Traditional characters), copied by `node tools/content/new_lang.js nan --from yue`, with parity still checked against `ko-en` (§1, §8). Every Cantonese string in `tools/content/nan/` is a placeholder to rewrite in Taigi: the arguments of a Chinese-speaker course carry over well, the words do not.

Evidence labels as in `yue.md`: **[research-backed]** (a study, named), **[curriculum convention]** (what Taiwan schools, dictionaries or the MOE do), **[practitioner opinion]** (this profile's inference). **native check** = rests on general knowledge, no fetched page. The author is not a native speaker of Taigi.

## 1. Summary

- **Register:** written Taigi in MOE characters, friendly tutor voice, **你** for the learner, short sentences; Taigi function words (毋 無 佇 欲 予 个 的 啥物 按怎 攏 閣 矣 咧 …) with the shared Taiwan Sino vocabulary for app nouns and grammar terms (設定, 名詞, 過去式). Same conventions as the live Taigi interface (`tools/i18n/nan/NOTES.md` §1, §3).
- **Readability first:** most Taigi speakers read Mandarin far more fluently than written Taigi (NOTES §4). Keep sentences short, prefer common MOE words, never use a rare character where a common Taigi word exists, and never fall back to the Mandarin word.
- **Scaffold from yue-en, parity vs ko-en.** `--from yue` gives Han-script text with the same Chinese-speaker arguments (no articles, no plural, no tense, final stops, n / l); `profile.reference` cannot be `yue` (lib.js accepts 2-letter references only), so the profile has no `reference` and parity compares with ko-en, with yue's deviations carried over (`deviations.json`). Checked: parity PASS on the scaffold.
- **English variety: American, and here it matches the school.** Taiwan teaches American English with KK phonetics; the yue course's British-school apparatus (British → American table, 「香港學校教 lift」 notes) is dropped.
- **Pronunciation aid: KK phonetic symbols** (Kenyon & Knott, as Taiwan junior-high and senior-high textbooks print them), made by a tool (`tools/content/nan/kk.js`) from the zh / yue IPA. All 1,021 scaffold spans were converted once. `pronPattern` forbids IPA-only symbols (ː, ɜ).
- **Standing rule:** `article-plural`, keywords **冠詞|複數** (Taiwan's school term 複數, not Hong Kong 眾數).
- **Curriculum:** the 42 yue-en lessons, with `hk-english` renamed **`tw-english`** (台式英語陷阱, after `smalltalk`) and `articles-3` kept (after `passive`). Rewrite `alphabet` notes, `pron` and `tw-english`; adapt everything else.
- **Foundation (standing rule):** the shared `alphabet` lesson (lesson 1, English letters and letter sounds), as every X-en course; the dispatcher adds `nan-en` to `FOUND` in `tools/tests/foundations.js`.
- **Interface:** the Taigi dictionary was written for a Korean course (韓語, 羅馬字, 한 in mode labels). `tools/content/nan/ui.json` (25 course overrides: 英語, 音標, 讀 英→台 …) fixes that inside the course pack; no interface writer is needed.

## 2. Variety, register and orthography

### 2.1 Variety and voice
- **Taigi of Taiwan, general (mixed) accent**, as the MOE dictionary 《教育部臺灣台語常用詞辭典》 and `en-nan.md` §2.1 define it. Where the MOE gives two forms, the main one is used.
- **Voice:** a friendly tutor talking to an adult. **你** only (no 您, which is Mandarin). The course may say **咱** (inclusive "we": you and I) in lessons — 「咱來看三个例」 — and **阮** only when the app speaks of itself (NOTES §1). Plural "you" is **恁**.
- **Requests:** plain imperative (「揀正確的答案」), 請 only in instructions where Taigi uses it.
- **Particles:** 矣 for a change or a finished step; 喔 / 啦 at most once in a lesson body, never in `why`. No internet slang.
- **Error marks:** ✗ / ✓ as in yue-en: `I very like it. ✗ → I really like it. ✓`.
- Three sample sentences in the voice:
  - 「台語無冠詞 (articles)，所以 a 佮 the 上捷漏掉，嘛上捷加傷濟。記三條規則就夠矣。」
  - 「台語講『我昨昏有去』，毋過英語無『有 + 動詞』這款講法：I went yesterday. 毋是 I have went.」
  - 「台語的『伊』毋分查埔查某，英語愛分：查埔是 he，查某是 she。」

### 2.2 The one orthography rule
**Write every Taigi word in the MOE recommended character (臺灣台語推薦用字, the dictionary headword); never write the Mandarin word with the same meaning, and never keep the Cantonese one.** This is NOTES §1 applied to course text. Sources: MOE dictionary (https://sutian.moe.edu.tw/), the 700-character recommended list (Wikipedia: Taiwan Taigi Recommended Characters), `en-nan.md` §2.2.

- **Never** (Mandarin): 不, 在, 要 (as "want"), 給, 個 (classifier), 這裡 / 那裡, 什麼, 怎麼, 很, 了 (aspect), 們, 他 / 她, 吃, 喝, 沒有, 嗎, 呢, 吧, 說, 誰, 東西. Allowed inside fixed Sino compounds: 不規則, 不可數, 不定詞, 不定冠詞, 個人, 現在式, 在地, 重要, 需要, 主要, 要緊, 其他, 說明, 了解, 了後.
- **Never** (Cantonese, the scaffold's language): 嘅 係 唔 冇 喺 咗 佢 哋 啲 嗰 嘢 咩 乜 噉 攞 搵 諗 睇 瞓 攰 畀 嚟 屋企 而家 尋日 聽日 鍾意 點解 邊度 邊個 幾時, Hong Kong words (的士, 港幣, 埋單, 串字, 大楷) and Hong Kong terms (眾數, 第三身). `node tools/content/nan/taigi_lint.js` finds them all (blocking) and lists Mandarin markers (warnings to read).
- **Characters outside the BMP:** none, except **𪜶** *in* (they / their) in the pronoun table of `object-have` and wherever "they" must be glossed, always followed once by its Tâi-lô: 「𪜶 (in)」. Elsewhere rephrase (伊兩个, 彼寡人, the noun itself). 𠢕早 and 𨑨迌 are avoided (font support unchecked; NOTES §1). The `nativeScript` regex is BMP-only, so a string must not consist of 𪜶 alone.
- **Tâi-lô** appears only (a) after 𪜶, (b) in `pron` and `alphabet` where a Taigi syllable is compared with an English sound (「Taigi 的 *b* 親像『肉』bah 的頭一个音」), in half-width parentheses, copied from the MOE dictionary. Never in meanings, `why` or prompts. No tone numbers.
- **Variants:** 台 (台語, 台灣; the MOE writes 臺灣 in titles, the interface uses 台), 裡 not 裏 (Taiwan form; the scaffold has Hong Kong 裏 and 着: change to 裡 / 著), 線 not 綫, 着 → 著, 床 / 溫 as Taiwan prints them.
- **Spacing and punctuation** (identical to the interface and to yue-en, so the scaffold needs no respacing): one half-width space between Han and Latin letters or digits (`be 動詞`, `第 3 課`, `5 萬箍`), none next to full-width punctuation. Full-width ，。？！：；（）、 in Taigi; 「」 for quotes, 『』 nested. English inside Taigi keeps half-width punctuation. Alternatives ` / `.
- **Numbers** in Taigi text: Arabic digits are fine in this course (unlike `en-nan` targets): `3 本冊`, `50,000 箍`. Money: 箍 (khoo, dollar), 新台幣 for NT$.

### 2.3 Reference list: 60 function words in their chosen characters
Copy these; do not invent another spelling. Tâi-lô from the MOE dictionary main reading (native check on any that a reviewer doubts).

| Taigi | Tâi-lô | meaning | Taigi | Tâi-lô | meaning |
|---|---|---|---|---|---|
| 是 | sī | be; yes | 毋是 | m̄-sī | is not; no |
| 毋 | m̄ | not (won't, don't want) | 無 | bô | not have; didn't; question tag |
| 袂 | bē | cannot; won't | 莫 | mài | don't (imperative) |
| 免 | bián | no need | 有 | ū | have; there is; did (affirm) |
| 佇 | tī | at, in; be at | 咧 | leh | in progress (-ing) |
| 矣 | --ah | change; done | 過 | kuè | experience (ever) |
| 欲 | beh | want to; going to | 會 | ē | will; can (be able) |
| 會曉 | ē-hiáu | know how to | 會使 | ē-sái | may; can (allowed) |
| 愛 | ài | must, need to; love | 著 | tio̍h | correct; must |
| 毋著 | m̄-tio̍h | wrong | 予 | hōo | give; let; by (passive) |
| 共 | kā | object marker; to / for | 佮 | kah | and; with |
| 嘛 | mā | also | 攏 | lóng | all |
| 閣 | koh | again; still, and also | 猶 | iáu | still; (not) yet |
| 已經 | í-king | already | 才 | tsiah | only then |
| 就 | tō | then, just | 真 | tsin | very |
| 誠 | tsiânn | quite, very | 較 | khah | more, -er |
| 上 | siōng | most, -est | 閣較 | koh-khah | even more |
| 啥物 / 啥 | siánn-mih / siánn | what | 啥人 | siánn-lâng | who |
| 佗位 | tó-uī | where | 當時 | tang-sî | when |
| 按怎 | án-tsuánn | how; why | 為啥物 | uī-siánn-mih | why |
| 偌濟 | guā-tsē | how many / much | 敢 | kám | yes/no question marker |
| 這 | tse / tsit | this | 彼 | he / hit | that |
| 遮 | tsia | here | 遐 | hia | there |
| 按呢 | án-ne | like this, so | 遮爾 / 遐爾 | tsiah-nī / hiah-nī | so (much) |
| 个 | ê | general classifier | 的 | ê | 's, of (possessive) |
| 伊 | i | he; she; it | 𪜶 | in | they; their (only with Tâi-lô) |
| 阮 | guán | we (not you) | 咱 | lán | we (you and I) |
| 恁 | lín | you (plural) | 家己 | ka-kī | oneself |
| 抑是 | iah-sī | or | 毋過 | m̄-koh | but |
| 因為 | in-uī | because | 所以 | sóo-í | so |
| 若 | nā | if | 就算 | tō-sǹg | even if |
| 進前 | tsìn-tsîng | before | 了後 | liáu-āu | after |
| 的時 | ê sî | when (… happens) | 定定 | tiānn-tiānn | often |
| 逐 | ta̍k | every | 一寡 | tsi̍t-kuá | some, a few |
| 干焦 | kan-na | only | 拄 | tú | just (now) |
| 這馬 | tsit-má | now | 昨昏 | tsa-hng | yesterday |
| 今仔日 | kin-á-ji̍t | today | 明仔載 | bîn-á-tsài | tomorrow |
| 物件 | mi̍h-kiānn | thing | 代誌 | tāi-tsì | matter, thing to do |
| 知影 | tsai-iánn | know (a fact) | 捌 | bat | know (a person); have ever |

### 2.4 Cantonese → Taigi swap table (for rewriting the scaffold)
The scaffold is written Cantonese. Do not convert word by word (the sentence often needs restructuring), but these are the usual equivalents:

| Cantonese in scaffold | Taigi | | Cantonese | Taigi |
|---|---|---|---|---|
| 嘅 | 的 | | 係 | 是 |
| 唔 | 毋 / 無 / 袂 (by sense) | | 冇 | 無 |
| 喺 | 佇 | | 咗 | 矣 / 有 (by sense) |
| 緊 (progressive) | 咧 / 佇咧 | | 過 | 過 |
| 佢 | 伊 | | 佢哋 | 𪜶 (in) or rephrase |
| 我哋 | 阮 / 咱 | | 你哋 | 恁 |
| 呢個 / 嗰個 | 這个 / 彼个 | | 呢度 / 嗰度 | 遮 / 遐 |
| 乜嘢 / 咩 | 啥物 / 啥 | | 邊個 | 啥人 |
| 邊度 | 佗位 | | 幾時 | 當時 / 啥物時陣 |
| 點 / 點樣 | 按怎 | | 點解 | 為啥物 |
| 幾多 | 偌濟 | | 好 (very) | 真 / 誠 |
| 仲 | 閣 / 猶 | | 都 (also) | 嘛 |
| 畀 | 予 | | 嚟 | 來 |
| 睇 | 看 | | 飲 | 啉 |
| 識 (know how / know someone) | 會曉 / 捌 | | 鍾意 | 佮意 / 愛 |
| 諗 | 想 | | 搵 | 揣 |
| 攞 | 提 | | 返 / 返屋企 | 轉去 / 轉去厝 |
| 瞓覺 | 睏 | | 攰 | 忝 |
| 屋企 | 厝 | | 而家 | 這馬 |
| 尋日 / 琴日 | 昨昏 | | 聽日 | 明仔載 |
| 噉 | 按呢 | | 咁 (so) | 遮爾 / 遐爾 |
| 啲 | 一寡 / 寡 | | 同 (and) | 佮 |
| 定 (or, in questions) | 抑是 | | 但係 | 毋過 |
| 如果 | 若 | | 啱 / 錯 | 著 / 毋著 |
| 唔該 / 多謝 | 勞力 / 多謝 | | 對唔住 | 歹勢 / 失禮 |
| 冇問題 | 無問題 | | 可以 / 得 | 會使 |
| 嘢 | 物件 / 代誌 | | 好彩 | 好運 |
| 港鐵 / 地鐵 | 捷運 | | 巴士 / 的士 | 公車 / 計程車 |
| 雪櫃 | 冰箱 | | 埋單 | 結帳 / 算數 |

### 2.5 Mixing English and terms
- **Grammar terms: Taiwan school term first, English in half-width parentheses the first time in a lesson:** 冠詞 (articles), 複數 (plural), 過去式 (past tense). Taiwan schools teach English grammar with these Mandarin-medium terms; read in Taigi they are the normal Sino vocabulary (NOTES §1 "vocabulary layer").
- English words stand bare in plain-text fields and in `<b>` in lesson HTML.
- Phoneme symbols in prose are KK between slashes: /θ/, /ð/, /v/, /ɛ/, /e/, /ɝ/ (never the IPA /e/ for *bed*: KK writes /ɛ/; /e/ is the vowel of *day*).

## 3. Glossary (use exactly these)

| English term | Term in this course | Note |
|---|---|---|
| English (language) | **英語** | Course name, prose. 英文 only in fixed compounds: 英文字母, 英文名 |
| Taigi / Mandarin | 台語 / 華語 | Never 閩南語, 國語 (NOTES §6) |
| Taiwan English, Chinglish | 台式英語 | Title word of `tw-english` |
| American / British English | 美式英語 / 英式英語 | |
| grammar | 文法 | |
| article; a / an; the | **冠詞**; 不定冠詞; 定冠詞 | Standing-rule keyword 冠詞. Prefer saying "a / an" and "the" |
| no article | 無加冠詞 | |
| noun; countable / uncountable | 名詞; 可數名詞 / 不可數名詞 | |
| singular / plural | 單數 / **複數** | Standing-rule keyword 複數 |
| classifier (Taigi) | 量詞 | Only for contrast: 「英語算名詞免量詞」 |
| pronoun; possessive | 代名詞; 所有格 | |
| subject / object | 主詞 / 受詞 | Taiwan pair (not 主語 / 賓語) |
| verb; be verb | 動詞; be 動詞 | |
| auxiliary; modal | 助動詞; 情態助動詞 | |
| third person singular | 第三人稱單數 | Not 第三身 (HK), not 三單 |
| subject–verb agreement | 主詞動詞一致 | |
| base form | 原形動詞 | Taiwan textbooks: 原形動詞 / 動詞原形 — use 原形動詞 |
| past form / past participle | 過去式 / 過去分詞 | |
| -ing form; gerund; infinitive | -ing 形式; 動名詞; 不定詞 (to + 原形動詞) | |
| regular / irregular verb | 規則動詞 / 不規則動詞 | |
| tense | 時態 | |
| present simple / continuous | 現在式 / 現在進行式 | |
| past simple / continuous | 過去式 / 過去進行式 | |
| future | 未來式 | Not 將來式 (HK) |
| present / past perfect | 現在完成式 / 過去完成式 | |
| passive / active | 被動語態 / 主動語態 | Taiwan textbooks; short form 被動 in `why` |
| conditional; 2nd / 3rd conditional | 條件句; 假設語氣 | |
| relative clause / pronoun | 關係子句 (形容詞子句) / 關係代名詞 | Gloss 形容詞子句 once |
| embedded question | 間接問句 | |
| reported speech | 間接引述 | |
| preposition; conjunction | 介系詞; 連接詞 | Not 介詞 (HK / Mainland) |
| adjective / adverb | 形容詞 / 副詞 | |
| comparative / superlative | 比較級 / 最高級 | |
| question word; negative | 疑問詞; 否定句 | |
| word order | 詞序 | |
| there is / are | there is / there are 句型 | |
| phrasal verb | 片語動詞 | |
| idiom; collocation | 慣用語; 搭配詞 | Deck 英語慣用語 |
| word (vocabulary item) | 單字 | Taiwan school word |
| spell / spelling | 拼 / 拼字 | Not 串字 (HK) |
| capital / small letter | 大寫 / 小寫 | Not 大楷 / 細楷 |
| pronunciation; phonetic symbols | 發音; **音標 (KK 音標)** | |
| phonics | 自然發音 | Only in `pron` / `alphabet` |
| stress; stress mark | 重音; 重音符號 ˈ | |
| vowel / consonant | 母音 / 子音 | Taiwan terms (NOTES uses them too); not 元音 / 輔音 |
| final consonant; consonant cluster | 尾音 (字尾的子音); 子音連綴 | Gloss once: 「兩三个子音相連」 |
| syllable; linking; weak form | 音節; 連音; 弱讀 | |
| lesson / practice / review / deck / card | 課 / 練習 / 複習 / 牌組 / 卡 | Interface terms (NOTES §3) |
| Got it / Again / Check | 會記得 / 閣一擺 / 檢查 | Button names lessons may cite |

## 4. Error zones (ranked)

Mostly shared with Mandarin and Cantonese speakers (all Taigi speakers in Taiwan are bilingual in Mandarin and learned English through it), plus what Taigi itself adds. Items marked Taigi are where this course's explanation differs from yue-en.

1. **Articles** — no articles in Taigi (or Mandarin); 一个 is not always *a*, a bare noun is not *the*; jobs take *a*. [practitioner opinion; general Chinese-L1 evidence, cf. yue.md §4 item 1]
2. **Plural and third-person -s, past -ed** — Taigi marks none; dropped in writing and again in speech, because Taigi syllables end only in a vowel, a nasal (-m -n -ng) or an unreleased -p -t -k / glottal -h. [Chen & Yang 2007 on Taiwanese learners: final consonants, epenthesis "booka", cluster vowel insertion; research-backed, full text]
3. **有 + verb = "did" (Taigi)** — 「我有去」 affirms a past event; it surfaces as *I have went / I have go yesterday* and *Did you…? — Yes, I have.* Taiwan Mandarin shares the pattern (我有去), so it is the strongest Taiwan-specific tense error. [practitioner opinion; native check]
4. **he / she / it from one pronoun 伊 (Taigi)** — 伊 covers all three in speech and writing (Mandarin at least writes 他 / 她). Expect *my mother… he*. [practitioner opinion]
5. **欲, 會, 予, 共 (Taigi)** — 欲 = *want* and *going to / about to* (*I want to rain* type slips are rare; *I want go* is common); 會 = *will* and *can* (*I will swim* for "I can swim"); 予 = *give*, *let* and the passive agent (*I was scolded by…* vs *I let him…*); 共 has no English form. [practitioner opinion]
6. **Adjectives without be** — 伊真媠 → *She very beautiful*; *very* with a verb (*I very like it*, from 我真佮意). [general Chinese-L1]
7. **有 = have and there is** — *Taipei has many people* for *There are many people in Taipei*; pseudo-relative *There are many people like…*. [general]
8. **Word order** — time and place before the verb (*I tomorrow go Taipei*); question words in statement order (*You go where?*); yes/no questions with 敢…? / …無? have no inversion. [general]
9. **One Taigi verb, several English verbs** — 看 = see / look at / watch / read (看冊!); 聽 = listen / hear; 講 = say / tell / speak / talk; 借 = lend / borrow; 提 = take / bring; 穿 / 戴 = wear; 開 / 關電火 = turn on / off the light; 食藥仔 = take medicine. [general; `tw-english`]
10. **Answering negative questions** — 「你毋去喔？」「著，我毋去」 → *Yes, I'm not going*. [general Chinese-L1]
11. **Pronunciation (Taigi-specific list; native check on each habit)**:
    - **f → h / hu**: native Taigi has no /f/ (風 hong); the stereotype of 台灣國語 (Taigi-accented Mandarin) is exactly ㄈ → ㄏ. *coffee*, *fine*, *phone*.
    - **v → b**: Taigi has a voiced /b/ (肉 bah) but no /v/: *very* → "berry", *vest* → "best".
    - **θ ð → s / t, d / l**: *three* → "sree / tree", *this* → "dis".
    - **ʃ ʒ → s / si**: Taigi /s/ before *i* is [ɕ], and there is no separate /ʃ/: *she* ~ *see*, *sheet* ~ *seat*.
    - **r → l / j**: no /r/ in Taigi: *rice* / *lice*, *right* / *light*; r in clusters (*pray* / *play*).
    - **n / l**: Taigi *l* and *n* behave as one sound (n before nasal vowels): *night* / *light*, *know* / *low*.
    - **Finals**: unreleased -p -t -k (Taigi has them, which helps hearing but not releasing); no final -b -d -g, -l, -s, -z, -f, -v: *bag* / *back*, *feel* → "fee-o", dropped -s / -ed; **epenthesis** in clusters (*street*, *desk*, *friends*).
    - **Japanese-era English loans in Taigi** carry inserted vowels and Japanese stress: 啤酒 *bì-lù* (beer), 卡車 *thoo-lá-khuh* (truck), 巴士 *bá-suh* (bus), 摩托車 *oo-tó-bái* (motorbike), 打火機 *lái-tà* (lighter), *hán-tóo* (handle). They make good `pron` / `tw-english` examples of "the English word has no extra vowel" (spellings native check).
    - **Mandarin-route habits** also present: -m → -n (*seem* / *seen*; less likely in Taigi, which has -m), -ing → -in, tense / lax vowels (*seat* / *sit*, *suit* / *soot*, *pull* / *pool*), *bed* / *bad*. [Yang 2012 (Taiwan Mandarin speakers): research-backed, full text; Chen & Yang 2007]
    - **Voiced b, g (Taigi advantage)**: Taigi contrasts voiced *b g* with *p k*, unlike Mandarin and Cantonese; English *bag* / *pack* initials are easy. Say so: it is encouraging and true.
    - **Stress and rhythm**: syllable-timed, every syllable full; word stress and weak forms (Chen & Yang 2007: suprasegmentals harder than segmentals for Taiwanese learners).
12. **Local words that are unclear abroad (Taigi / Taiwan)**: *add oil* (加油), *MRT* (fine in Taipei; *subway* in the US), *scooter* / *motorcycle* (機車 / 摩托車), *night market* (fine), calling a teacher *Teacher!* (老師 → *Mr. / Ms. Lin*), *people mountain people sea* (人山人海 → *very crowded*).

## 5. Learners
- Taigi-dominant adults who choose a Taigi interface: many are 40+, schooled in Mandarin, with English from junior high (or from grade 3 for younger ones) taught with **KK 音標** and later phonics, aimed at exams (會考, 學測, GEPT 全民英檢, TOEIC). [curriculum convention: KK remains the main pronunciation tool in Taiwan junior- and senior-high textbooks (prepedu.com KK guide)]
- Expect reading > speaking; weak listening; strong vocabulary recognition, weak production of endings. Keep explanations concrete and short; do not assume grammar-term fluency in English, but the Taiwan Chinese terms are familiar.
- Motivation: travel, grandchildren abroad, work with foreign clients, reviving school English.

## 6. Pronunciation aid policy (`pron`)

**KK phonetic symbols, tool-made.** Decision and reasons:
1. **KK is what Taiwan learners know.** Junior- and senior-high textbooks and Taiwan dictionaries print KK; IPA (dictionary /iː/, /eɪ/, /oʊ/) is what Cambridge / Oxford use and looks foreign to most Taiwanese learners. KK describes General American, exactly what the en-US voice says. [curriculum convention]
2. **Zhuyin was rejected:** it cannot write English finals, clusters or vowel contrasts, and would teach the very errors §4 lists.
3. **Tool-made:** `tools/content/nan/kk.js` converts the zh / yue IPA mechanically, so nan-en agrees with the reviewed transcriptions of the Chinese courses and `lint.js` stays consistent.

**Format (binding):**
- Between slashes, words separated by spaces, phrases may have `‖` for a pause: `/aɪm ˈgʊd ˈθæŋks ‖ ənd ˈju/`. Several forms: `/ˌfɪfˈtin/ /ˈfɪftɪ/`.
- Stress **ˈ** (primary) and **ˌ** (secondary), before the stressed syllable; every content word stressed (zh rule). Taiwan dictionaries often print the primary mark as **ˋ**; this course uses ˈ (as current KK guides and the zh / yue courses do) — the `pron` lesson shows once that ˋ in a dictionary is the same mark.
- KK symbols: vowels **i ɪ e ɛ æ ɑ ɔ o ʊ u ʌ ə ɝ ɚ aɪ aʊ ɔɪ**, no length marks; consonants as IPA (tʃ dʒ ʃ ʒ θ ð ŋ j r g); syllabic **ḷ** (*people* /ˈpipḷ/) and **ṇ** after t d s z (*button* /ˈbʌtṇ/, *listen* /ˈlɪsṇ/); after other consonants **ən** (*seven* /ˈsɛvən/, *station* /ˈsteʃən/). Final unstressed -y is **ɪ** (*happy* /ˈhæpɪ/). r-coloured: stressed **ɝ** (*bird* /ˈbɝd/), unstressed **ɚ** (*teacher* /ˈtitʃɚ/, *afternoon* /ˌæftɚˈnun/); ər before a vowel stays ər (*camera* /ˈkæmərə/).
- The conversion map (IPA → KK): iː→i, i→ɪ, uː→u, u→ʊ, e→ɛ, eɪ→e, oʊ→o, ɑː→ɑ, ɔː→ɔ, ɜːr→ɝ, ər→ɚ (not before a vowel), syllabic l / n as above, ɡ→g. Known limits: OALD /ɔːr/ becomes ɔr (KK dictionaries split *door* [dor] / *horse* [hɔrs]; ɔr is accepted), and "eɪ + ɪ" (*staying* /ˈsteɪŋ/) keeps ɪ.
- `pronPattern` (profile.json) allows only the KK set; ː and ɜ fail validation, so leftover IPA is caught.
- **For every new pron:** write the OALD North American IPA as zh-en would (zh PRON-RULES A–D) and run `node tools/content/nan/kk.js "/…/"`; paste the output. Never hand-write KK. `node tools/content/nan/kk.js --check` must print "no IPA-only spans left". **Never run `--files` again** (it was a one-time conversion).
- Prose symbols: the converter left single-letter spans such as /e/, /i/, /u/, /o/ in lesson prose untouched (they were IPA): writers check each and write the KK symbol (/ɛ/ for *bed*).
- Names: Taiwan /ˌtaɪˈwɑn/, Taipei /ˌtaɪˈpe/, Tainan /ˌtaɪˈnɑn/, Taichung /ˌtaɪˈtʃʊŋ/, Lin /ˈlɪn/, Jay Chou /ˌdʒe ˈtʃo/, Taiwanese /ˌtaɪwəˈniz/ (from OALD-style IPA through kk.js; voice unverified, §11). Record in `tools/content/nan/PRON-RULES.md`.
- The `pron` lesson teaches the key: one table "KK 音標 ↔ 字典的 IPA" (e / eɪ, o / oʊ, i / iː, ɝ ɚ / ɜːr ər, ḷ ṇ), replacing yue's British → American table.

## 7. Standing practice rule

`"standingRule": {"kind": "article-plural", "keywords": "冠詞|複數"}`. At least half of each set's `order` items and half of its `type` items hinge on an article or a plural / countability form, and their `why` contains **冠詞** or **複數**. The shared English items already satisfy the hit tests (parity cost zero); only the Taigi `why` must name the keyword. The scaffold's 41 validator failures are exactly the old keyword 眾數 and disappear when writers use 複數.

Sample `why` lines:
- 「dog 是可數名詞單數，頭前愛加冠詞 a。」
- 「two 後壁的名詞愛用複數：brothers。」
- 「information 是不可數名詞，無複數，嘛袂使加冠詞 a。」
- 「頭一擺提著用 a，第二擺用冠詞 the。」
- 「複數 keys 尾仔的 s 愛寫出來，嘛愛唸出來。」

Secondary (not in the regex): third person → 「主詞是 she，動詞愛用第三人稱單數 likes。」; tense → 「有 yesterday 嘛愛用過去式」; 「英語無『有 + 動詞』表示過去」.

## 8. Lessons (42, all from the yue scaffold)

Definitions: **adapt** = rewrite the Cantonese text into Taigi, keep the argument, re-aim any passage that argues from Cantonese (咗, 佢, 啲, 喺, Hong Kong school habits) to the Taigi fact in §4; **rewrite** = new text. No lesson is dropped; ids and order unchanged except `hk-english` → `tw-english`. Checks and practice English unchanged (parity), except the items in §9.2.

| lesson | how | Taigi angle |
|---|---|---|
| alphabet | **rewrite notes** | Foundation lesson 1 (letters, letter names, letter sounds, spelling aloud). Taiwan letter-name slips: V said with b, Z (Taiwan school says *zee*), G / J, R ("a-lu"), L, M, N, H, W with added vowels (native check). Use 拼 / 拼字, 大寫 / 小寫. Phonics = 自然發音 |
| pron | **rewrite** | §4 item 11 in intelligibility order: f / h, v / b, θ ð, ʃ / s, r / l, n / l, finals and clusters (no added vowel; loanword examples), tense / lax vowels, stress and weak forms; Taigi advantage b / g; KK ↔ IPA key table; drop British → American table |
| be | adapt | 伊真媠 has no 是: adjectives need *be*; no *be* + verb (*I am agree*) |
| it-there | adapt | 有 = *have* and *there is*; weather / time *it* (落雨矣 → *It's raining*) |
| articles | adapt | 一个 ≠ always *a*; bare noun ≠ *the*; jobs take *a* |
| plurals | adapt | Taigi has no plural (only 阮 / 𪜶 for people); after a number the noun still takes -s; say the -s (/s/ /z/ /ɪz/) |
| present | adapt | habit vs now; frequency adverbs |
| questions | adapt | 敢…? / …無? / …未? have no English form; do / does; *How do you say…?* |
| third-s | adapt | -s spoken and written; *has, does, goes* |
| prep | adapt | 佇 = in / on / at |
| countable | adapt | keep yue's list (information, advice, homework, luggage, furniture, equipment…) |
| object-have | adapt | **伊** = he / she / it, his / her; pronoun table with 𪜶 (in) |
| can-like | adapt | 會 = can and will; 會曉 = know how to; *I like it very much*, not *I very like it* |
| polite | adapt | *please*, *Could you…?*; 勞力 / 麻煩你 / 歹勢 / 失禮 against *thank you / excuse me / sorry* |
| continuous | adapt | 咧 / 佇咧 ≈ be + -ing; state verbs no -ing |
| past | adapt | **有 + 動詞 ≠ past**; 矣 ≠ past; say the -ed |
| irregular-past | adapt | vowel-change pairs as sound practice |
| the | adapt | Taiwan places: *the* MRT, Taipei 101 (no *the*), Taiwan, Yangmingshan |
| adjectives | adapt | 真 ≠ *very* + verb; no *more better*; *bored / boring* |
| going-to | adapt | 欲 = *want* and *going to*: *I'm going to…* for plans |
| tense | adapt | recap on Taigi markers 有, 矣, 過, 咧, 會, 欲 vs English forms |
| joining | adapt | 雖然…毋過 / 因為…所以: pick one in English |
| numbers | adapt | 萬 / 億 vs thousand / million; NT$ (箍) vs US dollars; Taiwan dates year / month / day vs US month / day; floors: Taiwan 1 樓 = US first floor (same; drop yue's G/F note); 119 / 110 vs 911 |
| smalltalk | adapt | 「食飽未？」 is a greeting in Taigi, a real question in English; safe topics; no salary, age, weight |
| **tw-english** | **rewrite** (replaces `hk-english`, after `smalltalk`) | 台式英語陷阱: one Taigi verb, several English verbs (§4 item 9); sentence shapes (*I very like*, *I have went*, *There are many people…*, *Although…but*, *Wait me*, *People mountain people sea*); local words (*add oil*, *MRT*, *scooter*, *Teacher!*); loanwords with extra vowels (bì-lù → beer). Tone: 「台式英語毋是錯，只是外國人無一定聽有」. Rebuild its English checks and practice freely (extra lesson, no parity partner), 12–16 items under the standing rule; deck 台式英語陷阱 |
| past-continuous | adapt | — |
| will | adapt | 會 / 欲 vs *will* / *going to* |
| perfect | adapt | 有…過 = *have ever*; finished time word → past simple |
| modals | adapt | 愛 / 著 = *must / have to*; 會使 = *may / can* |
| to-ing | adapt | *enjoy / mind / finish* + -ing; *look forward to* + -ing |
| articles-2 | adapt | — |
| first-conditional | adapt | 若…就 |
| relative | adapt | clause after the noun (Taigi puts it before, with 的) |
| phrasal | adapt | — |
| perfect-2 | adapt | *since / for*; *I've lived here since 2015* |
| narrative | adapt | — |
| conditionals | adapt | 若 alone does not change the verb; English does |
| passive | adapt | 予人 + verb = passive with agent; *be* + past participle; no passive of *happen* |
| articles-3 | adapt | keep (yue's B1 article review); replace DSE / IELTS with 學測 / 全民英檢 / TOEIC |
| reported | adapt | — |
| email | adapt | Taiwan office habits (辛苦矣 has no English formula; *Dear Mr. Lin*) |
| idioms | adapt | *add oil* line points to `tw-english` |

## 9. Decks, setting and localisation

### 9.1 Setting map (names and places in Taiwan)
| yue-en (Hong Kong) | nan-en (Taiwan) |
|---|---|
| Amy (Chan) | **Amy Lin** (English given name + common surname; Taiwanese often use English names) |
| Mr. Chan | **Mr. Lin** |
| Hong Kong (the learner's home) | **Taiwan** ("I'm from Taiwan.") |
| Kowloon ("I live in…", "I grew up in…") | **Taipei** (decks) / **Tainan** (phrasal#2) |
| Macau, Tokyo, Japan, Canada, Taipei (already neutral) | keep as they are (no English change) |
| Cantonese (the language) | **Taiwanese** ("Do you speak Taiwanese?", "Your Taiwanese is really good!") |
| Cantopop | **night markets** (be#check0: "I like night markets.") |
| Eason Chan (dialog) | **Jay Chou** |
| dim sum, Louis Cha | keep (both common in Taiwan) |
| HK$ / 港幣 | NT$ / 新台幣, Taigi 箍 |
| MTR, Octopus, PayMe | MRT (捷運), EasyCard (悠遊卡), LINE Pay / credit card |
| 999 | 119 (ambulance, fire), 110 (police) |
| Central, Mong Kok, the Peak | Ximending, Taipei 101, Yangmingshan, night markets (lesson-body examples only; check each on the voice) |
| egg tarts, milk tea | bubble tea, beef noodle soup, braised pork rice (examples only) |

### 9.2 English-side changes (parity-bound; all recorded in `deviations.json`)
Inherited from yue and kept as they are: every typed-answer widening (very / really, love, British spellings, *go back home*…) and every neutral localisation (Tokyo, Macau, Japan, Canada, Taipei, Louis Cha, dim sum). **Changed for nan (writers make exactly these):**
- `be#check0`: Cantopop → night markets in all four options (*I like night markets.*).
- `present#2`: Hong Kong → Taiwan in all four options.
- `prep#4`: Hong Kong → Taipei in all four options (*in the Taipei* distractor keeps the point).
- `phrasal#2`: Kowloon → Tainan in all four options.
- `numbers#9`: English unchanged (*fifty thousand dollars*); prompt 「5 萬箍（新台幣）」.
- Deck 1 自我介紹: *I'm from Taiwan.*, *I live in Taipei.* (card 0 *My name is Amy.* kept). Deck 2: *Do you speak Taiwanese?* Deck 9: *Have you been to Taiwan?* Deck 11: *Your Taiwanese is really good!* Deck 13: *Can I speak to Mr. Lin?* (card 0 kept). Deck 14: *I have a reservation under Lin.* Deck 15: *I need to contact my consulate.* kept (Taiwan's offices abroad act as consulates; native check). Deck 19: *Who's your favorite singer?* kept; DIALOG B line → *Definitely Jay Chou.*
- New KK prons for these via kk.js.

### 9.3 Deck names (FINAL; position = yue deck index + 1)
| # | **name** | notes |
|---|---|---|
| 1 | **相借問** | greetings (MOE 相借問 = 打招呼) |
| 2 | **自我介紹** | localise 2 cards (§9.2) |
| 3 | **求生英語 1** | localise 1 card |
| 4 | **求生英語 2** | payment note: EasyCard / LINE Pay / card |
| 5 | **問路佮交通** | MRT = 捷運; subway = 美國的地鐵; 公車, 計程車 |
| 6 | **餐廳點菜** | tipping in the US; *check* = 結帳; *to go* = 外帶 |
| 7 | **咖啡店佮便利商店** | 7-Eleven, 超商 |
| 8 | **買物件佮付錢** | |
| 9 | **數字、時間佮日期** | NT$, month-first US dates |
| 10 | **開講** | small talk (MOE 開講); localise 1 card |
| 11 | **心情佮反應** | |
| 12 | **呵咾佮好感** | localise 1 card |
| 13 | **工作佮電子批** | 電子批 = e-mail (interface term) |
| 14 | **電話佮簡訊縮寫** | localise 1 card; LOL / BTW against Taiwan chat habits (哈哈, LINE) |
| 15 | **旅行（機場佮飯店）** | localise 1 card |
| 16 | **病院佮緊急狀況** | 911 vs 119 / 110 |
| 17 | **片語動詞** | |
| 18 | **發音陷阱** | rewrite every note for Taigi (§4 item 11): replace yue's Cantonese pairs' notes; keep the cards; add notes for f / h (*fine* / *hi* not a card: note only), v / b (*very* / *berry*), *she* / *see* |
| 19 | **英語慣用語** | |
| 20 | **影劇佮俚語** | localise DIALOG line |
| 21 | **英文字母** | shared alphabet deck; rewrite notes for Taiwan letter-name habits |
| 22 | **台式英語陷阱** | was 港式英文陷阱; keep the verb-choice and calque cards, replace Hong Kong-only cards (shroff, chop, lai see, British / American pairs) with Taiwan ones (*add oil*, *MRT* / *subway*, *scooter*, *Teacher!* → *Mr. Lin*, *beer* (bì-lù), *I have went* ✗); deck card English is free (nan-only deck); ≥ 20 cards |
| 23 | **字尾發音** | keep cards; rewrite notes: Taigi has -p -t -k -h but no final -b -d -g -s -z -l |

## 10. Interface

- The course pack has `native: "nan"`, so the app uses the existing Taigi interface pack `i18n-nan` (NOTES §6: `LANGS.nan` exists with `t:1`; once a live course has `native:'nan'`, 台語 appears in the native-language picker).
- **Course overrides written:** `tools/content/nan/ui.json` (25 keys; gen.js emits them as the pack's `UI`): 韓語 → 英語, 羅馬字 → 音標, mode labels 讀 英→台 / 回想 台→英 / ⌨️ 拍字 英, Hangul → 英文字母, 🇰🇷 → 🇺🇸 in the share line, 去韓國旅行 → 出國旅行, 韓劇佮音樂 → 影集佮音樂. Keys taken from `tools/i18n/nan/ui.json` by the words Korean / Hangul / romanization; the lead confirms which further keys an English course shows.
- **For the lead (engine, not in scope):** `hLang('nan')` → `nan-Hant-TW` and an `html[lang^=nan]` Traditional font stack (NOTES §6 item 4); `Intl.DisplayNames(['nan'])` has no data, so language-name slots need the override map (en 英語, nan 台語) or English leaks into "type it in {x}"; `zh-TW` devices are still mapped to the Simplified pack (NOTES §6 item 1). `tools/i18n/nan/roadmap.json` has no English-roadmap titles (39 lesson titles fall back to English): CONTENT-A fills them.

## 11. Strings a native reader should check first

| # | String | Doubt |
|---|---|---|
| 1 | 英語 for "English" (course name and prose everywhere) | 英語 vs 英文 in everyday Taigi |
| 2 | 複數 / 冠詞 (standing keywords) | understood when read in Taigi? |
| 3 | 音標 / KK 音標 | the word older learners use |
| 4 | 有 + 動詞 explanation (past, tw-english) | is 「我有去」 felt as past affirmation by all speakers? |
| 5 | 伊 for he / she / it | natural to write 伊 for "it"? |
| 6 | 𪜶 (in) with Tâi-lô in object-have | font and readability |
| 7 | 咱 in lesson voice (咱來看…) | natural, or 阮 / no subject? |
| 8 | 相借問 (deck 1) | vs 打招呼 |
| 9 | 開講 (small talk deck) | right register? |
| 10 | 呵咾佮好感 (deck 12) | natural? |
| 11 | 電子批 (e-mail) | interface uses it; course follows |
| 12 | 病院佮緊急狀況 (deck 16) | 病院 vs 醫院 |
| 13 | 台式英語陷阱 (tw-english title) | understood? |
| 14 | 忝 for "tired" in card meanings | vs 真忝 / 足忝 |
| 15 | 佮意 vs 愛 for "like" | which reads more naturally in prompts |
| 16 | 「食飽未？」 as greeting contrast (smalltalk) | still current among younger speakers? |
| 17 | Letter-name habits in alphabet notes (V, R, L, Z) | real Taiwan habits? |
| 18 | Loanword spellings bì-lù, thoo-lá-khuh, oo-tó-bái, lái-tà | MOE spellings |
| 19 | 「台語無 f 音」 in pron | accepted (some speakers have f from Mandarin)? |
| 20 | 勞力 vs 多謝 in polite | when each is used |
| 21 | 箍 for dollars with Arabic digits (5 萬箍) | natural on screen? |
| 22 | 予人 + verb as passive gloss | natural? |

## 12. Gaps and unverified claims
- No Taigi-speaker study of English errors was found; §4 items 3–5, 9–12 rest on Taigi grammar (MOE dictionary, `en-nan.md`) and general knowledge (native check). Studies cited are of Taiwanese (Mandarin-speaking) learners.
- Taiwan dictionaries' stress mark ˋ vs ˈ: this course uses ˈ; not verified against current junior-high textbooks.
- KK conversion of OALD /ɔːr/ to ɔr (not or) and of *staying*-type words: accepted, not verified against a Taiwan dictionary per word.
- Voice: whether the en-US voice says Taipei, Tainan, Taichung, Jay Chou acceptably: listening check.
- Whether `i18n-nan` keys beyond the 25 overridden say Korean-specific things an English course shows (polite ↔ casual drill etc.): the lead checks in a real build.
- Readability of written Taigi for the actual audience (NOTES §4): if testers struggle, the interface swap list (揣 → 搜尋 …) applies to the course too.

## Sources
- MOE, 教育部臺灣台語常用詞辭典 (https://sutian.moe.edu.tw/) — headwords and main readings; via `en-nan.md` §2 and `tools/i18n/nan/NOTES.md`.
- Wikipedia: Taiwan Taigi Recommended Characters (https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters), via en-nan.md.
- PREP Edu, 「KK 音標完全教學」 (https://prepedu.com/zh-hant/blog/kk-phonetic-system-in-english), fetched 2026-11-27: KK vs IPA symbol differences (e / eɪ, o / oʊ, final -y ɪ, no length marks), ˈ ˌ stress, KK still the main tool in Taiwan junior- and senior-high textbooks.
- Chen, Shu-Chu & Yang, Ming-Nuan (2007). Effect of proficiency on Taiwanese EFL learners' pronunciation. *Language. Text. Society* 1(2): 26–42 (https://cyberleninka.ru/article/n/effect-of-proficiency-on-taiwanese-efl-learners-pronunciation), fetched: final-consonant epenthesis, cluster vowel insertion, tense / lax vowels, suprasegmentals hardest.
- Yang, James H. (2012). A socio-phonological analysis of Taiwan English from the perspective of World Englishes. *Taiwan Journal of Linguistics* 10(1): 115–142 (https://ah.lib.nccu.edu.tw/bitstream/140.119/100022/1/10%281%29-115-142.pdf), fetched: -m → -n, -ing → -in, /d/ for /ð/ (Mandarin-speaking participants; no Hokkien analysis).
- Local: `tools/i18n/nan/NOTES.md`, `tools/i18n/nan/ui.json`, `docs/profiles/en-nan.md` §2–3, §10.6, `docs/profiles/yue.md`, `tools/content/yue/*`, `docs/briefs/yue-*.md`.
