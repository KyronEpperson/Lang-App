# Mandarin Chinese (Simplified) speakers learning Korean: pair profile

Course `zh-ko`: Korean for Mandarin speakers from Mainland China. It is assembled from the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards, frozen v1; see `docs/HALVES-SPEC.md`) and a native half `tools/halves/native/zh/ko/` written in Simplified Chinese. The Chinese writers follow this profile. It sets the house rules for the native half, describes what a Chinese speaker already brings (above all the 汉字词), ranks the traps, gives a pinyin-based reading guide for the romanization, and lists, lesson by lesson, what must be rewritten rather than translated.

**How this profile maps onto the brief.** It copies the section order of `docs/profiles/ceb-ko.md`:
- brief items 1–2 → §1–§3;
- item 3 (what a Chinese speaker already knows) → §4;
- items 4 and 6 (where Chinese misleads; ranked error zones) → §5, one ranked list in which the research-backed traps come first and the unmeasured structural traps (SOV, 没, counters) follow;
- item 5 (sounds, reading guide) → §6;
- item 7 (per-lesson notes) → §7;
- item 8 (pair layer) → §8;
- item 9 (localisation, 汉字 display) → §9;
- §10 is a review plan for a native Chinese reviewer;
- item 10 (gaps, sources) → §11 and Sources.

**Evidence tags** (as in `docs/profiles/en-es.md`):
- **[research-backed]**: an empirical study opened for this profile. The sample is named. Many Korean-language studies of Chinese learners could be opened **only as abstracts or landing pages**; those are marked "abstract only".
- **[curriculum convention]**: what syllabuses, dictionaries, official spelling rules, textbooks and courses do.
- **[practitioner opinion]**: a teacher's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning. **The Mandarin side of every sound correspondence (§4.2), every 汉字 form printed in this profile, and every sample Chinese sentence are [inference]** unless a source is named: the author is not a native Chinese speaker, and only a handful of hanja could be checked against a dictionary page (§11). §10 lists what a native reviewer must check first.

Untagged rules in §3, §6 to §9 are design decisions, not findings.

**How much is known.** Far more than for Cebuano. Chinese speakers are one of the most studied learner groups in Korean-as-a-foreign-language research, and the large Korean literature on Chinese learners' errors (중국인 학습자 오류 분석 / 偏误分析) covers particles, 에/에서, Sino-Korean words, spacing, stops, vowels and final consonants. The catch is access: most of it is Korean master's theses and KCI articles, and this profile could open several of them only as abstracts. The one large phonetic study (the arXiv five-L1 study, 2023) includes **349 Chinese learners**, mostly advanced. **Word-order (SOV) errors were not measured in anything opened**; that trap is ranked on structure alone (§5.8).

## 1. Summary

1. **Explanations:** concise textbook Simplified Chinese, the register of 《标准韩国语》/《延世韩国语》-style grammar notes but shorter. The learner is addressed as **你**, never 您. Typography and punctuation follow the app's zh house rules (`docs/profiles/zh.md` §2), and Hangul is spaced like Latin letters (§3.1).
2. **House terms (§3.4):** **韩语** for the language (as the zh interface already says), **韩文** for the script, **罗马音** for the romanization line. Grammar terms come from a closed glossary of the terms Chinese Korean textbooks use: 助词, 词尾, 收音, 松音 / 紧音 / 送气音, 连音, 汉字词 / 固有词 / 外来词, and 正式体 / 礼貌体 / 半语 / 尊敬形.
3. **The strongest bridge is the 汉字词 (§4.1–§4.3).** About 57% of the headwords in Korea's standard dictionary are Sino-Korean (Wikipedia, after the NIKL dictionary) [curriculum convention]. That figure counts dictionary entries, not running text. The course teaches the guessing skill: 25 sound rules (Mandarin -n ↔ Korean -n/-m; lost 入声 stops ↔ -ㄱ / -ㄹ / -ㅂ; r- ↔ silent ㅇ; w- ↔ ㅁ; f ↔ ㅂ/ㅍ …) and 80 cognates that are already in the course (학생, 도서관, 시간, 출구, 건배 …).
4. **Other bridges (§4.4):**
   - Sino-Korean numbers ARE 一二三, and Korean groups by **万 = 만**, so the 10,000 trap that English speakers have does not exist.
   - Question words stay in place (这是什么 = 이거 뭐예요).
   - Modifiers go before the noun (我喜欢的菜 = 제가 좋아하는 음식).
   - Comparison keeps the same order (A比B便宜 = A가 B보다 싸요).
   - Reason comes first (因为…所以 = -아서).
   - Neither language has articles or person agreement, plural 们 = optional 들, and adjectives work without 是.
   - Many set phrases have a close equivalent: 수고하셨습니다 ≈ 辛苦了, 잘 부탁드립니다 ≈ 请多关照, 건배 = 干杯.
5. **Strongest traps (§5), ranked by evidence:**
   1. 은/는 vs 이/가 and 이/가 vs 을/를 (several error studies);
   2. final consonants dropped or a vowel added (arXiv: [k̚] deleted 22.79% of the time vs 7.32% on average);
   3. 在 → 에 or 에서;
   4. the three-way plain / tense / aspirated stops, where pinyin's two-way b/p does not map;
   5. ㅗ/ㅜ, ㅠ → ㅛ;
   6. 汉字词 false friends (공부, 점심, 계산, 화장실, 편의점, 운전, 약속 …);
   7. word spacing, since Chinese writes without spaces;
   8. SOV order (unmeasured but structural; 把 is the hook);
   9. 有 / 在 / 没 mapped onto 있어요 / 없어요;
   10. hours and ages in native numbers.
6. **Romanization:** the Korean half prints Revised Romanization, and a pinyin reader misreads it systematically (e, eo, eu, yu, ui, ae, r, si, ch, j, final k/t/p). §6.1 is a full reading guide in Chinese, ready to paste into `hangul` (needs a waiver) and `sound-changes`.
7. **汉字 in card notes:** yes, for transparent cognates and false friends only, in **simplified** form, written `학생（学生）` (§9.4).
8. **Localisation:** the lead must add 중국에서 왔어요, 중국 사람이에요, 중국어 할 수 있어요, a city line and a yuan line to the Korean half (§9.3). The zh interface pack renders "Korean" as 英语 and "romanization" as 音标, so the zh-ko `ui.json` must override about 30 strings (§3.5).
9. **Confidence:** moderate. The evidence on particles, codas and stops is research-backed, partly from abstracts only. The sound rules, hanja forms, Chinese wording and the topic order of Chinese textbooks are unverified (§11).

## 2. Learners: who, why, what first

### 2.1 Who learns Korean from Mandarin

- **University students of Korean (朝鲜语 majors).** One Chinese education portal lists **91 schools** offering the undergraduate major 朝鲜语 ([bendibao](https://m.bendibao.com/edu/zhuanye/school.php?id=3972&xueli=benke)) [curriculum convention; the page's filter suggests undergraduate programs, but the page does not say so outright]. The official major name is 朝鲜语, while textbooks and learners say 韩国语 or 韩语 (§3.1). These learners use textbooks, take TOPIK, and arrive knowing the terms in §3.4.
- **Students going to Korea.** As of August 2025, Korea's Justice Ministry counted **86,179 Chinese students**. Vietnam (107,807) had just overtaken China as the largest group, out of 305,329 international students in total ([Korea Times 2025](https://www.koreatimes.co.kr/southkorea/society/20251224/vietnam-replaces-china-as-largest-source-of-intl-students-at-korean-universities)) [research-backed: official figures reported by the press]. They need survival Korean, housing and pharmacy vocabulary (all in this course) and the 요-form.
- **TOPIK takers.** Annual TOPIK takers passed **400,000** in 2023 ([Korea Times 2023](https://www.koreatimes.co.kr/southkorea/society/20231011/overseas-availability-of-official-korean-language-test-to-double-next-year)). No figure for China could be opened (§11).
- **K-pop and K-drama fans.** They arrive knowing fan words borrowed into Chinese internet slang (欧巴 for 오빠, 应援 for 응원, 最爱 / 本命 for 최애) [inference: no survey opened]. Their reasons and numbers were not researched, and whether the post-2016 restrictions on Korean content in China changed this group was not checked (§11).
- **Excluded as a target: 朝鲜族 heritage speakers.** Korean Chinese number about 1.7 million (a 2021 government count, as reported by Wikipedia; under 1 million now in Jilin per the 2020 census), live mainly in Yanbian, and list both Korean and Mandarin as their languages ([Wikipedia, *Korean Chinese*](https://en.wikipedia.org/wiki/Korean_Chinese)). Many already speak a Korean dialect at home. A course that teaches Hangul and 있어요 from zero is the wrong level for them, and their errors are of a different kind (dialect vs Seoul standard, not L1 transfer). The course does not mention them and does not adapt to them [inference]. A 朝鲜族 learner who only reads Mandarin can still use it.

### 2.2 What they need first [inference]

1. **Read Hangul and know that the romanization is not pinyin** (§6). A pinyin reader reads *e* as 饿, *yu* as 鱼 and *r* as the retroflex 日, and builds wrong sounds from day one.
2. **Guess 汉字词**, starting in lesson 1 (§8.1), because this is the advantage Chinese learners have over every other group. Teach false friends alongside the cognates, so that "it looks like Chinese" never becomes "it means the same".
3. **The particles 은/는, 이/가, 을/를, 에/에서.** Chinese has no case particles, and every error study opened puts them first (§5.1).
4. **The 요-form default and the respect system.** 您 is the only grammatical respect Mandarin has; Korean puts politeness into every verb.
5. **Final consonants.** Mandarin syllables end only in a vowel, -n or -ng; Korean has seven final sounds (§5.2).

### 2.3 How Korean is taught in China (conventions the learner may bring)

- **Textbooks in use.** A conference paper on Sino-Korean words in elementary textbooks used in China surveys 10 sets ([문려화 & 유춘희, PCCU conference](https://cks.pccu.edu.tw/var/file/277/1277/img/1019/321262612.pdf)) [curriculum convention]:
  - China-compiled: Peking University Press (《大学韩国语》), Minzu Press (《韩国语》), Liaoning Minzu Press (《标准韩国语教程》), Yanbian University Press and Shanghai Jiao Tong University Press;
  - Korea-compiled, used in Chinese editions: Seoul National University, Yonsei and Kyung Hee.
  The paper notes that the Korea-compiled books mostly stay under 700 words, fewer than the China-compiled ones.
- **Honorifics are presented differently from book to book.** A comparison of four Chinese-edition Korean textbooks found the main differences in "honorific terminology, grammar explanations, speech-level classification and exercises", and recommends unifying the terms and the sequencing ([박성일 2011](https://www.earticle.net/Article/A141385), abstract only) [research-backed, abstract only]. So no single Chinese term set is "the" standard. The glossary in §3.4 picks one set and holds it.
- **Topic order.** The author's understanding is that Chinese-compiled first-year books open with several pronunciation lessons (vowels, consonants, 收音, sound changes) before any dialogue, and that many introduce the formal **-ㅂ니다 / -습니다** before the 요-form [practitioner opinion / inference; **not verified**: five searches for the tables of contents of 《标准韩国语》, 《延世韩国语》 and 《首尔大学韩国语》 found none, and a Seoul University 1A listing shows unit titles only ([hanbooks](https://www.hanbooks.com/seunko1asbo.html))]. Two design consequences follow, and both hold whichever way the fact turns out:
  - A learner coming from a textbook may already say 감사합니다 / 학생입니다 and need to hear that the 요-form is the everyday default. `polite` says so in one sentence.
  - The app teaches pronunciation in two lessons (`hangul`, `sound-changes`), not six. The reading guide (§6) must therefore carry the load that textbook pronunciation chapters carry.

## 3. Register, typography and terms of the Chinese text

### 3.1 Register and house style

- **Register:** concise textbook Chinese (书面语, short sentences, no 呢 / 哦 / 啦 chat particles, no internet slang, at most one exclamation mark and only in praise). This matches the zh-en profile's voice (`docs/profiles/zh.md` §2) [curriculum convention there].
- **Address:** **你**, and drop it wherever the sentence works without it: 「想说“我有猫”，用 고양이가 있어요。」, not 「如果你想说……你要用……」.
- **Commands:** plain imperatives (记住, 注意, 比较一下, 读出来), with no 请 in explanations. 请 belongs only in glosses of Korean requests (주세요 → 请给我).
- **Typography (one rule, from `zh.md` §2, extended to Hangul):**
  - Full-width Chinese punctuation: ，。！？：；（）“”、.
  - **A half-width space between a Chinese character and any Hangul, Latin letter or digit, on both sides**: `助词 은/는 放在名词后面`, `第 3 课`, `罗马音 seoul`. No space next to full-width punctuation: `……要用 에서。`. `zh.md` sets this rule for Latin letters and digits; this profile applies the same rule to Hangul so writers learn one rule. The engine must not also turn on `text-autospace` for `zh-Hans`.
  - **汉字 after a Korean word: full-width parentheses, no space**: `학생（学生）`, `점심（点心）`.
  - Quote Chinese phrases with “ ” and leave Korean bare. In lesson HTML, Korean can be `<b>`.
  - ✗ for wrong and ✓ for right, as in the English half: `저는 먹어요 밥을 ✗ → 저는 밥을 먹어요 ✓`.
  - Alternatives are separated by ` / ` (half-width, spaced), as in the English half.
- **Simplified characters only** in prose (`zh.md` §2), including the 汉字 shown for Sino-Korean words (§9.4). The one place where traditional characters appear is the target half's own `hanja` field on the 32 idioms in `course.json` (所願成就, 一石二鳥 …). That field is Korean-side data and stays as it is.
- **Language names:**
  - **韩语** for the language. The zh interface already uses 韩语 for "Korean" (`tools/i18n/zh/ui.json`, key `Korean`) and 标准韩语（首尔）in the roadmap (`tools/i18n/zh/roadmap.json`). 韩国语 is the textbook form and 朝鲜语 the official name of the university major. Prose uses 韩语 throughout, and mentions the other two once, in `hangul`, so textbook users recognise them.
  - **韩文** (or 韩文字母 when the letters are meant) for Hangul. Not 谚文, the academic term, which the learner has rarely seen [inference].
  - **汉语 / 中文** for Chinese: 中文 when the learner's own language is meant (「中文说“我有猫”」), 汉语 only in 汉语拼音.
- **Course name** in `native/zh/ko/course.json`: `{"native":"zh","name":"韩语","brand":"한글"}`.

### 3.2 Glosses of Korean lines: one policy

- A gloss is natural, short Mainland Chinese for what the Korean line means in context. It is not a word-for-word crib: 밥 먹었어요? → 「吃饭了吗？」, not 「饭吃了吗？」.
- **Politeness is carried only by the tags** the English half already has, translated as follows and in no other way:
  - **（正式）** for -습니다;
  - **（礼貌）** for the 요-form;
  - **（半语）** for 반말;
  - **（尊敬）** for -시- and the special honorific verbs.

  A Chinese gloss has a tag exactly where the English gloss has one. Do not turn 你 into 您 to show politeness. Exception: where the Korean line itself is an honorific question to an elder (연세가 어떻게 되세요?), the natural Chinese 「您多大年纪了？」 may use 您, and the tag stays.
- Korean requests with 주세요 / -아 주세요 are glossed with 请 or ……一下 where natural: 천천히 말해 주세요 → 「请说慢一点。」.
- Names, places and "the US" stay as in the English gloss (§9.1).
- Quantities in glosses use Chinese measure words naturally (커피 두 잔 → 「两杯咖啡」), even where the Korean counter differs (§4.4).

### 3.3 Ten sample sentences of explanation prose (all [inference], for the native check)

1. 韩语的动词永远放在句子最后：저는 밥을 먹어요（我饭吃）。
2. 中文没有助词，韩语每个名词后面都可以带一个助词，标明它在句子里的作用。
3. 拿不准的时候就用 요。礼貌过头没关系，没礼貌会得罪人。
4. 은/는 像中文的话题：“这本书嘛，我看过了”。이/가 指出“是谁 / 是什么”，常用来回答“谁”的问题。
5. 中文的“有”和“在”，韩语都用 있어요：고양이가 있어요（有猫），고양이가 집에 있어요（猫在家）。
6. 疑问词不用挪到句首，跟中文一样放在答案的位置：이거 뭐예요？（这是什么？）
7. 학교（学校）、학생（学生）、도서관（图书馆）：这些是汉字词，读音跟中文有规律地对应。
8. 看起来像中文，意思不一定一样：공부（工夫）在韩语里是“学习”。
9. ㅋ、ㅌ、ㅍ、ㅊ 要送气，比拼音的 k、t、p、q 还要强；手放在嘴前，能感觉到气流。
10. 很好！明天再复习一遍这些卡片，就不容易忘了。

(The Hangul in these samples is illustrative. In real rows, the Hangul set must equal the English row's (§3.6). 汉字 in parentheses do not count, because the validator's Hangul pattern covers only Hangul code points (`HANGUL_RX` in `tools/halves/lib.js`).)

### 3.4 Glossary: one term per idea (closed list)

The terms below are the ones Chinese-language Korean textbooks commonly use, as listed in the brief and from the author's reading [curriculum convention, **not verified against a fetched textbook**; §11]. Where textbooks differ (§2.3), the clearest term was chosen.

| Idea | Term to use, exactly | Do not use | Gloss at first use (once per lesson at most) |
|---|---|---|---|
| Korean 은/는, 이/가, 을/를, 에, 도 … | **助词** | 小品词, 格标记, 后置词 | 贴在名词后面、表示它在句中作用的小词 |
| 은/는 | **话题助词** | 主题助词, 添意助词, 补助词 (textbook terms: mention once in `particles`) | 表示“说到……” |
| 이/가 | **主格助词** | 主语助词 | |
| 을/를 | **宾格助词** | 目的格助词 | |
| 에 / 에서 | **助词 에 / 助词 에서** (no class name) | 位格助词, 处所格 | |
| subject / object / predicate | **主语 / 宾语 / 谓语** | | |
| topic (Chinese and Korean) | **话题** | 主题 | 句子要说的那个东西 |
| noun / pronoun / numeral | **名词 / 代词 / 数词** | | |
| 体言 (noun-like words) | **体词** (only in `nouns`, once) | | 名词、代词、数词的统称 |
| verb + adjective (predicates) | **谓词** (only in `verbbasics`, once) | 用言 | 动词和形容词的统称 |
| 먹다, 가다 | **动词** | 行为动词 | |
| 크다, 좋다 | **形容词**, always with the note that Korean adjectives conjugate like verbs | 描述动词, 状态动词 | 韩语形容词像动词一样变形 |
| 공부하다 | **하다 动词** | | |
| 이에요 / 예요 | no term; say **“是”的说法 이에요/예요** | 指定词, 叙述格助词 | |
| 가 in 가다 | **词干** | 词根 | |
| 가다 | **基本形** | 原形, 不定式, 词典形 | |
| -아요, -았어요, -고 | **词尾** | 后缀, 语尾 | |
| final ending / linking ending | **终结词尾 / 连接词尾** (only in `joining`) | | |
| -(으)ㄴ / -는 before a noun | **定语词尾** (with **冠形词尾** once, as the textbook name) | 关系从句 | |
| 아/어 choice | **元音和谐**: **阳性元音** ㅏ ㅗ, **阴性元音** the rest | | |
| speech levels | **正式体** (-습니다) / **礼貌体** (요体) / **半语** (반말) | 格式体, 非格式体, 敬语 (as a level name) | |
| the 요-form | **요体** | 해요体 (once, as the textbook name) | |
| the respect system as a whole | **敬语** (umbrella only) | | |
| -(으)시-, 드시다 | **尊敬形** | 敬语 (for this) | 尊敬句子里做动作的人 |
| 씨, 님, 오빠 | **称呼** | 敬称 | |
| 개, 명, 잔 | **量词** | 单位名词, 分类词 | |
| 하나, 둘 / 일, 이 | **固有词数字 / 汉字词数字** | 韩文数字, 中文数字 | |
| Sino-Korean / native / loan words | **汉字词 / 固有词 / 外来词** | 汉源词, 本土词 | |
| ㅏ / ㄱ | **元音 / 辅音** | 母音, 子音 | |
| 받침 | **收音** | 韵尾, 终声, 尾音 | 音节最后的辅音 |
| one Hangul block | **音节块** | 字母块, 方块字 | 一个音节块 = 一个音节 |
| ㄱ ㄷ ㅂ ㅈ / ㄲ ㄸ ㅃ ㅉ ㅆ / ㅋ ㅌ ㅍ ㅊ | **松音 / 紧音 / 送气音** | 平音 (once, as an alternative name), 激音, 硬音 | 松：轻、不紧；紧：喉咙收紧、不送气；送气：有强气流 |
| 연음 | **连音** | 连读 | 收音移到下一个音节开头 |
| 비음화 | **鼻音化** | 同化 | |
| 경음화 / 격음화 | **紧音化 / 送气音化** | 硬音化, 激音化 | |
| ㅎ dropping | **ㅎ 脱落** | | |
| ㄴ + ㄹ → ㄹㄹ | **流音化** | 边音化 | |
| sound changes generally | **音变** | 音韵变化 | |
| the Latin line | **罗马音** | 音标, 拼音, 罗马字, 读音 | 韩国官方的拉丁字母拼写 |
| pinyin | **拼音** | | |
| Mandarin tone | **声调** | | |
| rising / falling voice | **语调** | | |
| word order | **语序**; SOV = **主语—宾语—动词** (never 主宾谓 alone) | | |
| question word | **疑问词** | 特殊疑问词 | |
| negative | **否定** | | |
| past / future | **过去时 / 将来时** | 完成体, 未来时 | |
| connector (그리고, 그래서) | **连接词** | 接续副词 | |
| softener (좀, 혹시) | **缓和语气的词** | | |
| plural | **复数** | | |
| possessive (의, 제) | **所属** (“……的”) | 属格 | |
| spacing between words | **分写** (“隔写”) | 空格法 | 韩语词和词之间要空格 |
| false friend | **同形异义词** (in notes: **“形同义不同”**) | 假朋友 | |

### 3.5 Interface names and the `ui.json` overrides

**Tab and button names.** The app has a Chinese interface pack (`tools/i18n/zh/ui.json`, 784 exact keys). Prose names tabs exactly as on screen: **今天, 课程, 练习, 复习, 进度** (keys Today, Lessons, Practice, Review, Progress), plus 卡片 and 卡组 for card and deck. The "Read" tab is shown as 阅读; prose never names it, because this course has no drills (all features off, spec §7). The English `sound-changes` line "open Read and try the 🔀 Sound changes drill" is **dropped**. The `hangul` line "Tap a letter to replay" stays only once the lead confirms that the stroke cells render (spec §8.1).

**The zh pack was written for zh-en, so it renders the Korean course wrongly.** Its strings that refer to the target language say 英语 and call the pronunciation line 音标 / 读音. Examples from the file:
- `Korean (required)` → 英语（必填）
- `type it in Hangul` → 用英语输入
- `Hangul drill` → 阅读练习
- `Romanization` → 读音
- `Polite ↔ casual` → 正式 ↔ 随意

Spec §8.2 merges `COURSE.UI` over the pack. So `native/zh/ko/ui.json` must override, at least:
- **the 14 `uiKeys`** in `target/ko/trainer.json`;
- **every key the es half overrides** (`tools/halves/native/es/ko/ui.json`, about 30 keys: Korean starter, Korean (required), Read 한→en, Recall en→한, ⌨️ Type 한, Can you already read Hangul?, What do you want Korean for?, Type the Korean …).

Use the terms of §3.4: 韩语, 韩文, 罗马音, 礼貌 ↔ 半语. Proposed renderings [inference]:
- `Korean (required)` → 韩语（必填）
- `Romanization (auto if blank)` → 罗马音（留空则自动生成）
- `Hide romanization` → 隐藏罗马音
- `Aa romanization: on` → Aa 罗马音：开
- `type it in Hangul` → 用韩文输入
- `Hangul drill` → 韩文认读练习
- `Read 한→en` → 阅读 한→中
- `Recall en→한` → 回想 中→한
- `⌨️ Type 한` → ⌨️ 输入韩文
- `🎚️ Polite ↔ casual` → 🎚️ 礼貌 ↔ 半语
- `Search a pattern, e.g. 에서 or 'want'` → 搜索句型，例如 에서 或“想”
- `Korean starter` → 韩语入门

`validate.js` counts missing `uiKeys` lines under "words remaining".

### 3.6 Constraints from the halves format that shape the writing

- **Hangul set-equality** (spec §6): every native string must contain exactly the English string's set of Hangul runs.
  - 汉字 added in a note (`학생（学生）`) are fine, because `HANGUL_RX` matches Hangul code points only (`tools/halves/lib.js`).
  - A note **cannot quote a second Korean word** that the English note does not have. A false-friend note may say 「中文的“汽车”在韩语里是 자동차」 only if 자동차 is already in that English note. Otherwise write the Chinese only: 「中文的“汽车”，韩语用另一个词」.
  - The reading guide in `hangul` uses ㄹ, the tense letters and extra examples, so **`hangul` needs `"_waive":["hangul"]`** with a `_note` on its `lessons.jsonl` title row, as the es half did. Write the `sound-changes` part with Latin letters only, or waive it too.
- **Set-equality works both ways:** a rewrite may not drop the English row's Hangul either. When a passage is rebuilt around Chinese (`isseoyo`, `numbers`, `sov`, `particles`), every Korean word and every ✗/✓ example in the English body must still appear. **The ✗ rows stay even when they are not a Chinese speaker's mistake.** Example: `numbers` lists 오십천 원 ✗. A Chinese speaker, who says 五万, would never write it. Keep the row and reframe it: 「英语母语者常错成 오십천 원；你按中文的“五万”说 오만 원 就对了。」
- **Deck labels** are progress keys. Translate them once, keep them unique, never use "My phrases", and do not start a label with the English word "Hangul" or "Pronunciation" (README rule 4). Write 「韩文元音」, not 「Hangul 元音」.
- Dialogue glosses keep the single ` / `. Blanks `__` stay. No braces in glosses. `q p why hint` ≤ 400 characters.
- In lesson bodies never write a space + `on` + letters + `=` (the cleaner cuts it). In Chinese prose this bites only in romanization comparisons like `on=`. Write `on：`.

<!-- §4 -->
