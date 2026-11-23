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

## 4. What a Chinese speaker already knows

Each item says where the bridge holds, where it misleads, and how the course uses it. Korean facts come from the English half; Chinese facts are the author's [inference] unless a source is named.

### 4.1 汉字词: how big the bridge is, and what kind

- **Size.** "Sino-Korean represents approximately 57% of the Korean vocabulary", a figure from the NIKL *Standard Korean Language Dictionary*; other estimates range from about 30% to 70%. Sino-Korean words are "typically used in formal or literary contexts" ([Wikipedia, *Sino-Korean vocabulary*](https://en.wikipedia.org/wiki/Sino-Korean_vocabulary)) [curriculum convention]. A Xiamen master's thesis gives "60% 以上" ([郑贞美 2015](https://core.ac.uk/download/41431767.pdf), abstract only).
  - **These are dictionary headwords, not running text.** Everyday speech leans on native words: 있어요, 먹어요, 가요, 사람 and 친구 are all native or opaque. The profile therefore says 「词典里一半以上是汉字词」, never 「韩语 60% 跟中文一样」.
- **What kind of help.** Three classes matter to a learner [inference, following the categories in Liu & Jia 2016 and 李丹 2018]:
  1. **Same form, same meaning:** 학교 学校, 도서관 图书馆, 시간 时间. Instant recognition. In an HSK level-3 sample, 36.84% of the words (63) had the same form and meaning in Korean ([Liu & Jia 2016](https://www.atlantis-press.com/article/25846788.pdf)) [research-backed: word-list count].
  2. **Same characters, different or narrower meaning** (同形异义): 공부 工夫, 점심 点心, 생수 生水. 李丹 found about **750** two-syllable Korean–Chinese same-character words with different meanings in a 58,437-word Korean frequency list, about **12%** of them completely different ([李丹 2018](https://repository.sungshin.ac.kr/bitstream/2025.oak/7142/2/%ed%95%9c%c2%b7%ec%a4%91%20%ec%9d%b4%ec%9d%8c%ec%a0%88%20%eb%8f%99%ec%9e%90%ec%9d%b4%ec%9d%98%ec%96%b4%20%eb%8c%80%ec%a1%b0%20%ec%97%b0%ea%b5%ac.pdf), doctoral dissertation) [research-backed: lexical count]. See §5.6.
  3. **Korean (or Japanese-coined) words a Chinese reader can decode but would not say:** 공항 空港 (机场), 영화 映画 (电影), 사진 写真 (照片), 택배 宅配 (快递), 할인 割引 (打折), 월요일 月曜日 (星期一). Wikipedia notes that some Sino-Korean words are Korean-coined and that "Sino-Japanese loanwords" are shared only by Korean and Japanese ([Wikipedia](https://en.wikipedia.org/wiki/Sino-Korean_vocabulary)).
- **Reversed morpheme order** is a small fourth class: 채소 菜蔬 (蔬菜) is in the course (ko.c0306), and 소개 绍介 (介绍) and 언어 言语 (语言) are common outside it [inference].
- **Use it:** every Sino-Korean card note may carry its 汉字 (§9.4), the opening lesson teaches guessing (§8.1), and the false friends get their own deck (§8.2).

### 4.2 Twenty-five sound correspondences between Mandarin and Sino-Korean

**What is sourced.** Middle Chinese (MC) → Sino-Korean, from Wikipedia [curriculum convention]:
- "-m → m, -n → n, -ng → ŋ, -p → p, -k → k", and "words with the Middle Chinese coda /t/ have /l/ in Sino-Korean";
- the MC initial 日 (ɲ) was lost (→ ∅);
- dentals before /j/ were palatalised (田 *cen*);
- the comparison table on the Sino-Xenic page gives: 一 Mandarin *yī*, Cantonese *yāt*, Korean *il*; 六 *liù* / *luhk* / *lyuk*; 十 *shí* / *sahp* / *sip*.

([Wikipedia, *Sino-Korean vocabulary*](https://en.wikipedia.org/wiki/Sino-Korean_vocabulary); [*Sino-Xenic vocabularies*](https://en.wikipedia.org/wiki/Sino-Xenic_vocabularies)).

**What is not sourced.** The Mandarin side of each rule below is this profile's [inference]: modern Mandarin readings set against Sino-Korean readings. Every rule is a **tendency to guess with**, not a law. Examples are taken from words **already in the Korean half** wherever possible (ids in §4.3); words in *italics* are not in the half.

**Endings of the syllable (韵尾, plus one open-vowel rule)**

| # | Mandarin | Korean | Examples (Korean · 汉字 · pinyin) |
|---|---|---|---|
| 1 | -ng | -ㅇ (ng) | 운동 · 运动 · yùndòng; 공원 · 公园 · gōngyuán; 등산 · 登山 · dēngshān |
| 2 | -n | -ㄴ | 한국 · 韩国 · hán; 은행 · 银行 · yín; 도서관 · 图书馆 · guǎn; 천 · 千 · qiān |
| 3 | -n | **-ㅁ** (MC -m, merged into -n in Mandarin) | 삼 · 三 · sān; 점심 · 点心 · diǎn xīn; 감사 · 感谢 · gǎn; 음악 · 音乐 · yīn; 금요일 · 金 · jīn |
| 4 | open syllable (old 入声) | **-ㄱ** | 학교 · 学 · xué; 약국 · 药局 · yào jú; 독서 · 读 · dú; 백화점 · 百 · bǎi; 식당 · 食 · shí; 음악 · 乐 · yuè; 가족 · 族 · zú |
| 5 | open syllable (old 入声) | **-ㄹ** | 일 · 一 · yī; 칠 · 七 · qī; 팔 · 八 · bā; 월요일 · 月 / 日 · yuè / rì; 출구 · 出 · chū; 박물관 · 物 · wù; 발표 · 发 · fā; 화장실 · 室 · shì |
| 6 | open syllable (old 入声) | **-ㅂ** | 십 · 十 · shí; 입구 · 入 · rù; *연습 · 练习 · xí*; *대답 · 对答 · dá* |
| 7 | the 资 / 四 vowel after z / c / s (and some after zh / sh) | **-a**, no final | 여자 · 子 · zǐ; 전자레인지 · 子 · zǐ; 사 · 四 · sì; 사극 · 史 · shǐ (but 시 · 时 / 市 · shí / shì) |

**The dialect shortcut for rules 4–6.** Cantonese, Hakka, Min and some Wu speakers still have these stops: Cantonese 一 *yāt* → 일, 十 *sahp* → 십, 六 *luhk* → 육 (table above). A Mandarin-only speaker cannot hear which syllables were 入声, so the guess is "an open Mandarin syllable may end in ㄱ, ㄹ or ㅂ in Korean".

**Initials (声母)**

| # | Mandarin | Korean | Examples |
|---|---|---|---|
| 8 | j / q / x (one group) | **ㄱ / ㅎ** (from old velars) | 가족 · 家 · jiā; 교환 · 交 · jiāo; 학교 · 校 · xiào; 기분 · 气 · qì; 휴가 · 休 · xiū; 은행 · 行 · xíng → 행 |
| 9 | j / q / x (the other group) | **ㅈ / ㅊ / ㅅ** (from old sibilants) | 직진 · 进 · jìn; 천 · 千 · qiān; 신호등 · 信 · xìn; 선생님 · 先 · xiān; 점심 · 心 · xīn. (Peking opera's 尖团 distinction is exactly this split; mention it once, for learners who know it.) |
| 10 | zh / ch / sh and z / c / s | ㅈ / ㅊ / ㅅ | 주말 · 周 · zhōu; 출구 · 出 · chū; 생일 · 生 · shēng; 시장 · 市 · shì; 최고 · 最 · zuì; 층 · 层 · céng |
| 11 | **r-** | **silent ㅇ** (MC 日 lost) | 일요일 · 日 · rì; 집주인 · 人 · rén; 인정 · 认 · rèn; 입구 · 入 · rù |
| 12 | **w-** (from old m-) | **ㅁ** | 만 · 万 · wàn; 박물관 · 物 · wù; 무대 · 舞 · wǔ; *문제 · 问 · wèn* |
| 13 | other w- / y- / zero initials | silent ㅇ + vowel | 병원 · 院 · yuàn; 공원 · 园 · yuán; 한국어 · 语 · yǔ; 영어 · 英 · yīng; 영화 · 映 · yìng; 오 · 五 · wǔ |
| 14 | **f** | **ㅂ or ㅍ** (Korean has no f) | 반찬 · 饭 · fàn; 방송 · 放 · fàng; 분 · 分 · fēn; 행복 · 福 · fú; 관리비 · 费 · fèi; 발표 · 发 · fā |
| 15 | k and g | mostly **ㄱ**: Mandarin aspiration is not kept | 공항 · 空 · kōng; 출구 · 口 · kǒu; 공원 · 公 · gōng; 한국 · 国 · guó |
| 16 | d / t **before i** | **ㅈ / ㅊ** (palatalised) | 지하철역 · 地 / 铁 · dì / tiě; 전자레인지 · 电 · diàn; 백화점 · 店 · diàn; 정류장 · 停 · tíng |
| 17 | b / p | ㅂ or ㅍ (aspiration unpredictable) | 백 · 百 · bǎi; 보고서 · 报 · bào; 편의점 · 便 · biàn; 북 · 北 · běi |
| 18 | h (and x from old velars) | **ㅎ** | 한국 · 韩 · hán; 영화 · 画 · huà; 회의 · 会 · huì; 해산물 · 海 · hǎi; 호선 · 号 · hào |
| 19 | l | ㄹ, but at the **start of a word** ㄹ becomes ㄴ or silent | 요리 · 料理 · liào lǐ (word-initial 料 → 요, medial 理 → 리); 여행 · 旅 · lǚ; 내일 · 来 · lái; 연락 · 连络 · lián luò; 육 · 六 · liù |
| 20 | n before i / ü at the start of a word | silent ㅇ | 여자 · 女 · nǚ; 연세 · 年 · nián (but 2026년, after a number) |

**Vowels (韵母)**

| # | Mandarin | Korean | Examples |
|---|---|---|---|
| 21 | -ao / -iao | -o / -yo | 보고서 · 报告 · bào gào; 학교 · 校 · xiào → 교; 요리 · 料 · liào; 최고 · 高 · gāo |
| 22 | -a / -ai / -ei | **-ae** | 백 · 百 · bǎi; 해산물 · 海 · hǎi; 맥주 · 麦 · mài; 매일 · 每 · měi; 내일 · 来 · lái |
| 23 | -ing / -eng | -eong / -aeng / -eung | 영어 · 英 · yīng; 정류장 · 停 · tíng; 생일 · 生 · shēng; 은행 · 行 · xíng → 행; 등산 · 登 · dēng; 층 · 层 · céng |
| 24 | -an / -ian / -uan | -an / -eon / -wan / -won | 한 · 韩 · hán; 도서관 · 馆 · guǎn; 천 · 千 · qiān; 선 · 先 · xiān; 원 · 院 · yuàn; 전 · 电 · diàn |
| 25 | -ou / -iu | -u / -yu | 주말 · 周 · zhōu; 출구 · 口 · kǒu; 휴가 · 休 · xiū; 우유 · 牛 · niú; 맥주 · 酒 · jiǔ |

**How to teach these.** Not as a table to memorise. The opening lesson (§8.1) teaches four rules with the highest payoff: **1 + 2** (n / ng stay), **3** (-n may be -ㅁ), **4–6** (an open syllable may end in ㄱ / ㄹ / ㅂ) and **11–12** (r → silent, w → ㅁ). Then it shows how to guess: say the Mandarin, apply the rules, check the meaning against the context. Card notes may cite a rule by its content, never by number: 「入声字：学 → 학」.

### 4.3 Eighty cognates the learner recognises at once (all already in the course)

All 80 occur in the Korean half (card `ko.c…` or lesson sentence `ko.s…`). "≈" means recognisable, but Mainland Chinese uses another everyday word (given in brackets); the note should say so. **The 汉字 are [inference]** (written from the author's knowledge, simplified): 화장실 化粧室 and 점심 點心 were checked against a dictionary page, and 공부, 생수, 야채, 신문, 기차 against 李丹 2018. Two traps found while writing: 예약 is 豫約 (中文 预约) and 휴가 is 休暇 (中文 休假). So **check each 汉字 against 표준국어대사전 before it goes into a note** (§11).

| # | Korean (id) | 汉字 | | # | Korean (id) | 汉字 |
|---|---|---|---|---|---|---|
| 1 | 학교 (c0264) | 学校 | | 41 | 긴장 (c0190) | 紧张 |
| 2 | 학생 (s0038) | 学生 | | 42 | 피곤 (c0189) | 疲困 ≈ (疲劳) |
| 3 | 도서관 (c0261) | 图书馆 | | 43 | 감사 (c0062) | 感谢 |
| 4 | 박물관 (c0262) | 博物馆 | | 44 | 안녕 (c0061) | 安宁 ≈ (你好) |
| 5 | 은행 (c0267) | 银行 | | 45 | 축하 (s0026) | 祝贺 |
| 6 | 시장 (c0270) | 市场 | | 46 | 감기 (c0216) | 感气 ≈ (感冒) |
| 7 | 백화점 (c0271) | 百货店 ≈ (百货商店) | | 47 | 진통제 (c0217) | 镇痛剂 ≈ (止痛药) |
| 8 | 공원 (c0273) | 公园 | | 48 | 처방전 (c0219) | 处方笺 ≈ (处方) |
| 9 | 출구 (c0376) | 出口 | | 49 | 보험 (c0222) | 保险 |
| 10 | 입구 (c0376) | 入口 | | 50 | 소화제 (c0226) | 消化剂 ≈ (消化药) |
| 11 | 신호등 (c0375) | 信号灯 | | 51 | 병원 (c0265) | 病院 ≈ (医院) |
| 12 | 근처 (c0370) | 近处 ≈ (附近) | | 52 | 보증금 (c0228) | 保证金 ≈ (押金) |
| 13 | 층 (c0377) | 层 | | 53 | 관리비 (c0230) | 管理费 ≈ (物业费) |
| 14 | 동 / 서 / 남 / 북 (c0372) | 东西南北 | | 54 | 포함 (c0230) | 包含 |
| 15 | 지하철역 (c0588) | 地下铁驿 ≈ (地铁站) | | 55 | 계약서 (c0241) | 契约书 ≈ (合同) |
| 16 | 공항 (c0591) | 空港 ≈ (机场) | | 56 | 충전기 (c0116) | 充电器 |
| 17 | 남자 (c0616) | 男子 | | 57 | 예약 (c0097) | 豫约 ≈ (预约) |
| 18 | 여자 (c0616) | 女子 | | 58 | 교환 (c0126) | 交换 ≈ (换货) |
| 19 | 의사 (s0039) | 医师 ≈ (医生) | | 59 | 필요 (c0141) | 必要 ≈ (需要) |
| 20 | 가족 (c0613) | 家族 ≈ (家人) | | 60 | 이해 (c0089) | 理解 |
| 21 | 시간 (c0607) | 时间 | | 61 | 연락 (c0571) | 连络 ≈ (联系 / 联络) |
| 22 | 매일 (c0606) | 每日 ≈ (每天) | | 62 | 회의 (c0544) | 会议 |
| 23 | 주말 (s0104) | 周末 | | 63 | 보고서 (c0552) | 报告书 ≈ (报告) |
| 24 | 오전 (c0151) | 午前 ≈ (上午) | | 64 | 휴가 (c0555) | 休暇 ≈ (休假) |
| 25 | 오후 (c0150) | 午后 ≈ (下午) | | 65 | 신청 (c0555) | 申请 |
| 26 | 생일 (s0066) | 生日 | | 66 | 확인 (c0546) | 确认 |
| 27 | 월요일 (c0601) | 月曜日 ≈ (星期一) | | 67 | 직진 (c0379) | 直进 ≈ (直行) |
| 28 | 금요일 (c0602) | 金曜日 ≈ (星期五) | | 68 | 우회전 (c0380) | 右回转 ≈ (右转) |
| 29 | 운동 (c0278) | 运动 | | 69 | 맥주 (c0318) | 麦酒 ≈ (啤酒) |
| 30 | 독서 (c0279) | 读书 | | 70 | 소주 (c0319) | 烧酒 |
| 31 | 요리 (c0280) | 料理 ≈ (做饭) | | 71 | 우유 (c0314) | 牛乳 ≈ (牛奶) |
| 32 | 여행 (c0281) | 旅行 | | 72 | 계란 (c0307) | 鸡卵 ≈ (鸡蛋) |
| 33 | 음악 (c0282) | 音乐 | | 73 | 해산물 (c0309) | 海产物 ≈ (海鲜) |
| 34 | 등산 (c0289) | 登山 | | 74 | 건배 (c0582) | 干杯 |
| 35 | 산책 (c0332) | 散策 ≈ (散步) | | 75 | 무대 (c0500) | 舞台 |
| 36 | 수영 (c0333) | 水泳 ≈ (游泳) | | 76 | 가사 (c0507) | 歌词 |
| 37 | 청소 (c0340) | 清扫 ≈ (打扫) | | 77 | 최애 (c0496) | 最爱 |
| 38 | 만화 (c0350) | 漫画 | | 78 | 최고 (c0464) | 最高 ≈ (最棒) |
| 39 | 공포 (c0355) | 恐怖 | | 79 | 한국어 (s0019) | 韩国语 |
| 40 | 행복 (c0187) | 幸福 | | 80 | 영어 (c0091) | 英语 |

The fan deck adds three that Chinese internet slang shares with Korean: 응원봉 (c0502, 应援棒), 인정 (c0465, 认定) and 소확행 (c0523, 小确幸) [inference]. The brief's examples 준비 (准备) and 문제 (问题) are **not** in the card set: 준비 occurs only in dialogue ko.g103, and 문제 nowhere. They can be used in the §8.1 lesson only with a waiver, or as Chinese-only prose.

### 4.4 Grammar bridges

| Bridge | Chinese | Korean | Holds / misleads [inference] |
|---|---|---|---|
| No articles | 书 = a book / the book | 책 | **holds**; the English half's "no a or the" paragraph becomes one line. |
| No person agreement | 我 / 你 / 她去 | 가요 for everyone | **holds** (`verbbasics`). |
| Optional plural | 朋友们, mostly for people | 친구들, optional, mostly for people | **holds**, a close match. |
| Adjectives without 是 | 天气很好 (not 天气是好) | 날씨가 좋아요 (no 이에요) | **holds**: Korean 形容词 are predicates, as in Chinese 形容词谓语句. The English "adjectives are verbs" surprise is no surprise here. |
| 是 / 不是 | 我是学生 / 我不是学生 | 학생이에요 / 학생이 아니에요 | **holds** for A = B. **Misleads** when learners attach 이에요 to adjectives or places (§5.9). |
| Topic-first sentences (话题句) | 这本书我看过了；我嘛，是学生 | 저는 학생이에요 (은/는 = the topic) | **Holds as a starting point** for 은/는 (§5.1). Chinese marks the topic by position only; Korean adds a particle. |
| Question words stay in place | 这是什么？你去哪儿？ | 이거 뭐예요? 어디 가요? | **holds exactly**; the English half's warning "don't move the question word to the front" barely applies. |
| Yes/no questions | ……吗？ | rising intonation, no particle | **misleads slightly**: there is no 吗 in the 요-form. |
| Modifiers before the noun | 我喜欢的菜；大的包 | 제가 좋아하는 음식; 큰 가방 | **holds**: 的 ↔ the 定语词尾 -(으)ㄴ / -는. The English "Korean has no that / which / who" paragraph is unnecessary: Chinese has none either. |
| Possessive | 我的书, 我妈妈 (的 dropped) | 제 책, 우리 엄마 (의 dropped) | **holds**: 의 ≈ 的, often dropped; 우리 = 我们 used for "my" family is close to 我们家. |
| Time and place before the verb | 我昨天在咖啡馆学习 | 저는 어제 카페에서 공부해요 | **holds**: only the object moves (§5.8). |
| 比 comparison | 公交比出租车便宜 | 버스가 택시보다 싸요 | **holds in order** (A · B · adjective). The one difference: 比 comes before B, 보다 after it. 更 ≈ 더, 最 ≈ 제일. |
| Reason first | 因为很忙，所以没去 | 바빠서 안 갔어요 | **holds**: the cause comes first in both. |
| 想 + verb | 我想去 | 가고 싶어요 | **holds in meaning**; the position flips (after the stem). |
| 不 before the verb | 我不喝咖啡 | 커피를 안 마셔요 | **misleads** on position: 不 goes before the whole verb phrase (不喝咖啡), 안 goes right before the verb (§5.8). |
| 不能 / 不会 | 我不会游泳 | 수영 못해요 | **holds**: 못 ≈ 不会 / 不能; 안 ≈ 不 (by choice). |
| 可以…吗 / 不用 | 可以坐这儿吗？/ 不用去 | 여기 앉아도 돼요? / 안 가도 돼요 | **holds well**; 不用 is a better bridge for 안 -아도 돼요 than English "don't have to". |
| 得 / 必须 | 我得走了 | 가야 해요 | **holds**. |
| 吧 (suggestion) | 咱们走吧；喝咖啡吧？ | 가자; 커피 마실까요? | **holds**: 吧 ≈ -자 (casual) / -(으)ㄹ까요? (polite). |
| 们 / 我们 vs 咱们 | 咱们 includes the listener | 우리 covers both | small note only. |
| Demonstratives | 这 / 那 (two-way) | 이 / 그 / 저 (three-way) | **new**: 그 (near you) and 저 (far from both) both translate as 那. |
| 把 | 我把饭吃了 (object before verb) | 저는 밥을 먹었어요 | **a hook for SOV**: 把 already puts the object before the verb (§5.8). |

### 4.5 Numbers and counters: the biggest single bridge

- **Sino-Korean numbers are the Chinese numbers:** 일 一, 이 二, 삼 三, 사 四, 오 五, 육 六, 칠 七, 팔 八, 구 九, 십 十, 백 百, 천 千, **만 万**, 억 亿 [inference: the readings are in the English `numbers` lesson; the characters are standard].
  - **Large numbers group by 万 in both languages.** 50,000 won is 오만 원 = 五万韩元. The English half's ✗ row 오십천 원 is an English speaker's error. Keep the row and reframe it (§3.6).
  - Dates (십일월 십삼일 = 十一月十三日), minutes (삼십 분 = 三十分), floors (3층 = 三层 / 三楼), subway lines (2호선 = 2号线), exits (4번 출구 = 4号出口), years (2026년) and phone numbers are read as in Chinese, digit by digit or by place value [inference; the examples are cards ko.c0145–c0162].
- **The native set (하나, 둘, 셋 …) is the new thing.** Rule of thumb for Chinese speakers [inference]: **where Chinese puts a measure word on a small number (三个, 三杯, 三岁, 三点), Korean uses native numbers (세 개, 세 잔, 세 살, 세 시). Where Chinese reads digits (三月, 三号线, 三楼, 三十分, 三万块), Korean uses Sino-Korean.** The rule fails at minutes and money (三十分钟 → 삼십 분; 三万 → 삼만 원). State those two exceptions with it.
- **两 vs 二 is a near parallel:** Chinese switches to 两 before a measure word (两个, 两杯, 两点), Korean switches to 두 (두 개, 두 잔, 두 시). The parallel holds for things, cups, hours and ages, and breaks for money (两万 → 이만 원).
- **Counters = 量词, and several share characters** [inference]: 개 个, 명 名 (一名学生), 잔 盏, 병 瓶, 권 卷 (中文 本), 장 张, 번 番 (中文 次), 층 层, 분 分, 원 元 (written 圆 in older hanja). Native counters: 마리 (只 / 头), 살 (岁), 그릇 (碗), 켤레 (双).
- **Order misleads:** Chinese number + 量词 + noun (三杯咖啡); Korean noun + number + counter (커피 세 잔). See §5.10.

### 4.6 Respect and set phrases

- **您 vs 높임말.** Mandarin grammar has one respect form (您) and some polite vocabulary (贵姓, 请问). Korean puts respect into every verb ending and adds 尊敬形. The bridge is the vocabulary [inference]:
  - 성함 ≈ 贵姓 / 尊姓大名 (and 성 is 姓);
  - 연세가 어떻게 되세요? ≈ 您多大年纪了 / 您高寿 (연세 = 年岁);
  - 드시다 ≈ 用 (请用餐);
  - 계시다 ≈ 在 (for a respected person).
- **Set phrases with close equivalents** [inference]:
  - 수고하셨습니다 ≈ 辛苦了 (careful: the characters of 수고, 受苦, mean "to suffer" in Chinese; §5.6);
  - 잘 부탁드립니다 ≈ 请多关照 (부탁 = 付托 ≈ 拜托);
  - 건배 = 干杯;
  - 화이팅 ≈ 加油;
  - 먼저 퇴근하겠습니다 ≈ 我先下班了;
  - 사장님, 계산해 주세요 ≈ 老板，买单！
- **Titles:**
  - 씨 is 氏 [inference], far more everyday than Chinese 氏.
  - 오빠 / 형 / 언니 / 누나 ≈ 哥哥 / 姐姐, but chosen by the **speaker's** gender (§7, `titles`). Fans already say 欧巴.

## 5. Where Chinese misleads: error zones, ranked

**Ranking** [inference]: (1) items with error data on Chinese learners, by how often the papers rank them first; (2) items that occur in nearly every sentence; (3) structural traps with no measurement; (4) lesson-local traps. Many of the studies are Korean theses or KCI articles read **as abstracts only**; that is stated each time.

### 5.1 Particles: 은/는 vs 이/가, and 이/가 vs 을/를

- **Wrong → right:**
  - 커피가 좋아해요 → 커피를 좋아해요; 겨울이 좋아해요 → 겨울을 좋아해요 (Noh 2015's example);
  - 누구는 왔어요? → 누가 왔어요?; 제가 학생이에요 (as a plain self-introduction) → 저는 학생이에요;
  - 가방을 커요 → 가방이 커요;
  - particles dropped altogether in writing.
- **Evidence:**
  - [research-backed, abstract only] 백수진 (Keimyung University; year not shown on the page) reports that among Chinese learners' grammar errors "the fallacy rate of Korean particles '-은/는' and '-이/가' is highest", and lists 7 Chinese forms that correspond to 은/는 and 6 that correspond to 이/가 ([earticle](https://m.earticle.net/Article/A142170)).
  - [research-backed, abstract only] 황은미 (2019, Ewha MA) names 은/는, 을/를 and 이/가 as the particles "with high frequencies of errors" in Chinese learners' writing ([Ewha](https://dspace.ewha.ac.kr/handle/2015.oak/250687)).
  - [research-backed, abstract only] 장경희 (2019, a learner error-annotated corpus): substitution of **을/를** showed the highest error rate among the types, and "the ratio of errors due to L1 interference is the largest", attributed to Chinese subject order, Chinese syntax and Chinese-style expressions ([Kyobo](https://scholar.kyobobook.co.kr/article/detail/4010027267908)).
  - [research-backed, abstract only] 유지연 (2015, Ewha MA; 60 Chinese learners, 20 per level, and 20 Korean controls, 30-item cloze): 이/가 ↔ 을/를 substitutions were more frequent where the Korean and Chinese predicate types do not match. Proficiency made no significant overall difference; with psychological adjectives, advanced learners erred **more** ([Ewha](https://dspace.ewha.ac.kr/handle/2015.oak/213139)).
  - [research-backed, example only] 노병호 (2015; 1,398 sentences by second-year majors at Qiqihar University) excludes particles from its count but cites 겨울이 좋아해요 (→ 겨울을 좋아해요) as a typical particle error ([Noh 2015](https://koreascience.kr/article/JAKO201533678768669.pdf)).
  - [research-backed, abstract only] 박소영 (2008, Sungshin MA): advanced learners' particle omissions looked **deliberate**, an avoidance strategy ([Sungshin](https://repository.sungshin.ac.kr/handle/2025.oak/6134)).
- **Why** [inference]: Chinese has no case particles; word order and context do their work. 喜欢 takes an object (喜欢冬天), yet learners write 겨울이 좋아해요. A likely cause is 좋아요 / 좋다 ("is good", 이/가) beside 좋아해요 ("likes", 을/를), which the English half already contrasts.
- **Design consequence:**
  - `nouns` and `particles` explain 은/는 with **话题** (这本书嘛，我看过了) and 이/가 with **new information / the answer to 谁 / 什么** (谁来了？——朋友来了 = 누가 왔어요? 친구가 왔어요, ko.s0129).
  - `sov` and `want-like` drill 좋아해요 + 을/를 against 좋아요 + 이/가 explicitly.
  - Never write 「은/는 = 主语」: the English half's ✗ row 은 after a vowel stays, but the explanation must not equate topic with subject.

### 5.2 Final consonants (收音): dropped, or a vowel added

- **Wrong → right:**
  - 학교 said *ha-gyo* or *ha-ke-gyo*; 밥 said *ba* or *ba-pu*; 책 *chae* or *chae-ke*;
  - 한국어 said with a pause, *han-guk-eo*, instead of *hangugeo*;
  - after a final ㄴ, the ㄴ said twice when linking: 돈이 (ko.s0051) said *don-ni* instead of *do-ni* (the example is [inference]; the error type is from 가설매 2024);
  - 산 and 상 (n vs ng) merged by some speakers.
- **Evidence:**
  - [research-backed] In the arXiv five-L1 study (**349 Chinese learners**, most of them advanced; Chinese, Vietnamese, Japanese, Thai and English L1s), Chinese learners' accuracy on unreleased [k̚] was **58.87% vs an average of 74.95%**, and they **deleted [k̚] 22.79% of the time vs 7.32%** on average (p < .01); the paper links this to Chinese syllable structure. Shared across L1s: deletion of final [t̚] and /l/ ([arXiv 2306.10821](https://arxiv.org/html/2306.10821v1)).
  - [research-backed, abstract only] 유소영 & 강현화 (2018): Chinese learners' errors were most common **in final position (50%)** ([koreascience](https://koreascience.kr/article/JAKO201832547631780.page)).
  - [research-backed, abstract only] 후개만 (2023, Jeju MA; 10 southern and 10 northern learners):
    - finals ㅂ ㄷ ㄱ ㅁ ㄹ were unconsciously **omitted in sentences** while correct in isolated words;
    - a vowel (ㅣ, ㅡ, ㅏ) was **inserted** after ㅂ ㅍ ㅁ ㅊ;
    - the representative sounds were misremembered;
    - southern learners were more accurate than northern ones ([Jeju](https://oak.jejunu.ac.kr/handle/2020.oak/24487)).
  - [research-backed, abstract only] 가설매 (2024): adding an identical consonant when linking after final /ㄴ/ is "indeed frequent and largely unaffected by learners' region of origin or Korean proficiency level" ([Kyobo](https://scholar.kyobobook.co.kr/article/detail/4010070439534)).
- **Why** [inference]: Mandarin syllables end only in a vowel, -n or -ng. Speakers of Cantonese, Hakka and Min, which keep -p -t -k -m, have a ready model. That may be why southern learners did better, though 후개만's abstract does not say so.
- **Design consequence:** the reading guide (§6.1) gives finals their own block ("make the mouth shape, then stop; do not add a vowel; when linking, do not say the consonant twice"), with a southern-dialect bridge. The 받침 cards (ko.c0039–c0043) get notes built on it. **n vs ng** gets a line for southern speakers who merge -in / -ing and -an / -ang [inference; the merger is widely reported for southern Mandarin, but no source was opened].

### 5.3 在 → 에 or 에서

- **Wrong → right:** 카페에 공부해요 → 카페에서 공부해요 (在咖啡馆学习); 집에서 있어요 → 집에 있어요 (在家); 벽에서 글자를 쓴다 → 벽에 글자를 쓴다 (Wang's example); 인천공항에서 착륙하고 있다 → 인천공항에 착륙하고 있다.
- **Evidence:** [research-backed] Wang Yuan (2018), 26 intermediate Chinese learners, cloze and translation tasks: 에 and 에서 "broadly correspond to Chinese 在", but the match is incomplete. Up to 7 of 26 learners erred on a single item. Wang classifies the errors as meaning confusion, predicate combination, **literal translation from Chinese**, and noun semantics ([Wang 2018](https://koreascience.or.kr/article/JAKO201829757857259.pdf)). Small sample, by the author's own account.
- **Bridge** [inference]:
  - 在 + 有 / 住 / being somewhere → 에 (在家 → 집에 있어요);
  - 在 + an action → 에서 (在家休息 → 집에서 쉬어요);
  - 去 / 来 + place, which has **no 在** in Chinese, → 에 (去学校 → 학교에 가요);
  - 从 → 에서 (从美国来 → 미국에서 왔어요).

  This is a cleaner test for a Chinese speaker than the English half's "look at the verb", and `particles` is rebuilt around it.

### 5.4 Plain / tense / aspirated stops: pinyin's two-way b–p does not map

- **Wrong → right:**
  - 불 (fire), 뿔 (horn) and 풀 (grass) not kept apart;
  - plain ㄱ ㄷ ㅂ ㅈ said too tight, so 가요 sounds like 까요;
  - 커피 with too little breath.
- **Evidence:**
  - [research-backed] 강반 (Jiang Pan), 김지은 & 이충우 (2014), 18 Han Chinese learners from north-east and east China, word-initial stops:
    - tense stops were close to Korean values (early 20 ms VOT);
    - **plain stops were too short**, nearer to tense (ㄱ 39.86, ㄷ 44.00, ㅂ 48.34 ms), and the paper calls plain stops the most error-prone category;
    - aspirated stops were shorter than the Korean values the paper cites (ㅋ 70.17 vs about 106 ms);
    - length of study made almost no difference ([Jiang et al. 2014](https://koreascience.kr/article/JAKO201415640234323.pdf)).

    A follow-up with 10 Chinese women found no difference between sentences and paragraphs ([Jiang et al. 2015](https://koreascience.kr/article/JAKO201521159149294.page?lang=en)).
  - [research-backed] Across all five L1s in the arXiv study, Chinese included, tense and aspirated stops were replaced by plain ones (/tʰ/→/t/, /kʰ/→/k/, /p͈/→/p/) ([arXiv 2306.10821](https://arxiv.org/html/2306.10821v1)); 유소영 & 강현화 found plain / tense / aspirated errors high in every L1 ([abstract](https://koreascience.kr/article/JAKO201832547631780.page)).
  - [research-backed, native speakers only] In Seoul Korean the plain vs aspirated contrast is shifting from VOT to pitch: "the primary cue to a stop contrast in phrase-initial position is shifting from VOT to f0" ([Bang, Sonderegger, Kang, Clayards & Yoon, preprint](https://people.linguistics.mcgill.ca/~morgan/bangEtAl2017Preprint.pdf); 118 Seoul speakers), and "a merged VOT of aspirated and lax stops induces F0 to be the primary cue" ([Yu 2018](https://koreascience.kr/article/JAKO201810760742427.page), 28 speakers).
- **What this does and does not license.** The two Chinese-learner findings point in **different directions**: plain stops too tense in one study, tense and aspirated stops falling to plain in the other. So the profile makes **no equivalence claim** such as "pinyin b = ㅃ". It gives one instruction per series, as `ceb-ko` §5.1 does:
  - **送气音 ㅋ ㅌ ㅍ ㅊ:** stronger breath than pinyin k t p q; high pitch on the vowel.
  - **紧音 ㄲ ㄸ ㅃ ㅆ ㅉ:** tighten the throat, no breath at all, high pitch.
  - **松音 ㄱ ㄷ ㅂ ㅈ:** looser than pinyin g d b j, a little breath, **low pitch** on the vowel at the start of a word; voiced (like a soft g d b) between vowels.

  Using pitch as a cue for Chinese learners is [inference] built on the native-speaker research. It plays to a tone-language speaker's strength, but nothing opened tests it with learners.

### 5.5 Vowels: ㅗ / ㅜ, ㅠ → ㅛ, ㅓ

- **Wrong → right:** 우유 said like 오요; 사투리 heard as 사토리; 유 said like 요; 서울 *seo-ul* said *so-ul* or *se-ul*; RR *eo* read as two vowels.
- **Evidence:**
  - [research-backed] 윤지현, 김은경 & 성철재 (2015), 19 Mandarin-speaking learners vs 20 Koreans, a synthetic /오/–/우/ continuum: learners labelled 55.2% of stimuli /우/ (Koreans 41.3%), and their category boundary sat further toward /오/. Studies they cite:
    - 서승아 (2010), 35 learners: /오/–/우/ confusion was the most prominent, and 사투리 was heard as /사토리/ about 71% of the time;
    - 한정임 & 김주연 (2011): Chinese learners' 우 sounded like 오 to Korean listeners and was markedly less intelligible;
    - 박지연 (2010): /오/–/어/ confusion was the largest ([윤지현 et al. 2015](https://koreascience.kr/article/JAKO201503264232880.pdf)).
  - [research-backed] arXiv: /ju/ (ㅠ) realised as /jo/ (ㅛ) **23.50% vs 11.61%** on average ([arXiv 2306.10821](https://arxiv.org/html/2306.10821v1)).
  - [research-backed, abstract only] ㅓ was the commonest medial-position error for learners of every L1 (유소영 & 강현화 2018).
- **Why** [inference]:
  - Pinyin *o* after b p m f is [uo] (bo = buo), and pinyin *ou* is a diphthong, so Mandarin has no pure [o] to anchor ㅗ.
  - RR *yu* looks like pinyin *yu* = ü (§6). That may feed the ㅠ errors, but no study tests it.
- **ㅐ / ㅔ are not an error zone:** they sound the same in modern Seoul speech (ko.c0056). Say so and move on.
- **ㅡ** has no Mandarin counterpart, but no opened study ranks it high for Chinese learners. The guide gives it a mouth description, and it ranks below ㅗ/ㅜ here.

### 5.6 汉字词 false friends and semantic transfer

- **Evidence:**
  - [research-backed] In 노병호 (2015), substitution was **41.2% (170 of 413)** of lexical errors in Chinese majors' essays; one example is 신임 (信任) used where Korean prefers 신뢰 ([Noh 2015](https://koreascience.kr/article/JAKO201533678768669.pdf)).
  - [research-backed, abstract only] Wang Xiaolong (2018): Chinese learners "tend to assume" Korean and Chinese Sino-words share meaning and usage, and this produces translation errors ([Kyobo](https://scholar.kyobobook.co.kr/article/detail/4010026495784)).
  - [practitioner opinion] Liu & Jia: same-form-different-meaning words have a higher error rate on first use, and learners substitute where the Chinese meaning is narrower ([Liu & Jia 2016](https://www.atlantis-press.com/article/25846788.pdf)).
- **Tags in the table below:**
  - **(李丹)** or **(Liu & Jia)**: the meaning contrast is stated in that source;
  - **(brunch)**: the contrast is from a Korean essay page ([brunch.co.kr](https://brunch.co.kr/@paraphrasing/44)) [practitioner opinion];
  - **(words.hk)**: the Chinese meaning was checked in a dictionary;
  - everything else is [inference].
- **Which rows can go into notes:** the "In half" column gives the id. Rows marked "—" can appear only in Chinese prose, or after the lead adds them (§9.3).

| Korean | 汉字 | Korean meaning | Chinese meaning of the same characters | In half |
|---|---|---|---|---|
| 공부 | 工夫 | study, studying | time, effort (工夫 / 功夫) (李丹) | ko.c0328, s0014 |
| 점심 | 点心 | lunch | snack, dim sum (wiktionary: from 點心 "snack") | ko.c0600, s0230 |
| 생수 | 生水 | bottled water | **unboiled water** (李丹) | ko.c0317 |
| 야채 | 野菜 | vegetables | edible wild plants (李丹) | ko.c0306 |
| 계산 | 计算 | paying the bill (계산해 주세요) | to calculate | ko.c0580, s0184 |
| 화장실 | 化妆室 (化粧室) | toilet | dressing / make-up room | ko.c0276 |
| 편의점 | 便宜店 | convenience store (中文 便利店) | 便宜 = cheap | ko.c0268 |
| 사진 | 写真 | photo | glamour / portrait photo | ko.c0285 |
| 선생님 | 先生 + 님 | teacher | Mr., husband | ko.c0615 |
| 운전 | 运转 | driving (운전해야 돼요) | a machine running | ko.s0294 |
| 약속 | 约束 | appointment, plans, promise | to restrain | ko.s0203 |
| 수고 | 受苦 | effort, work (수고하셨습니다) | to suffer | ko.c0473, c0550 |
| 식당 | 食堂 | restaurant | canteen | ko.c0269 |
| 사장님 | 社长 + 님 | (shop) owner, boss | head of a newspaper / society | ko.s0195 |
| 영화 | 映画 | film (中文 电影) | (Japanese word; rare in Chinese) | ko.c0348 |
| 발표 | 发表 | presentation (발표해요) | to publish, to issue a statement | ko.c0558 |
| 기분 | 气分 | mood, feeling (中文 心情) | (not a Chinese word) | ko.c0186 |
| 생선 | 生鲜 | fish as food | fresh produce | ko.c0308 |
| 포장 | 包装 | takeaway (포장해 주세요; 中文 打包) | packaging | ko.c0581 |
| 내일 | 来日 | tomorrow (中文 明天) | days to come | ko.c0597 |
| 애인 | 爱人 | boyfriend / girlfriend | **spouse** (brunch) | — |
| 신문 | 新闻 | newspaper | news (李丹; Liu & Jia) | — |
| 기차 | 汽车 | train | **car** (李丹) | — |
| 방심 | 放心 | carelessness, letting one's guard down | to be at ease, not worry (words.hk) | — |
| 결실 | 结实 | fruition, results | sturdy (李丹, citing 강한식 2008) | — |
| 노파 | 老婆 | old woman | wife (李丹) | — |
| 처자 | 妻子 | wife and children | wife (李丹) | — |

### 5.7 Word spacing (分写)

- **Wrong → right:** 한국사람들 → 한국 사람들; 무슨일 → 무슨 일; 옛날 부터 → 옛날부터 (Wang 2019's examples); 한국어잘못해요 → 한국어 잘 못해요.
- **Evidence:** [research-backed] Wang Yuan (2019), 30 intermediate compositions by Chinese undergraduates: 148 spacing errors, of which **77.6% were joined where Korean spaces**, led by noun + noun 27 (18.2%), modifier + bound noun 18, modifier + noun 17 and main + auxiliary verb 13. 22.4% were spaced where Korean joins, chiefly particles (15) ([Wang 2019](https://koreascience.or.kr/article/JAKO201929757857423.pdf)).
- **Why** [inference]: Chinese writes without word spaces.
- **Design consequence:** card ko.c0060 ("words are spaced, particles attach") gets a Chinese note that names this exactly. `texting` and the type-in practice items accept the English half's answers as they are; `validate.js` does not change answers.

### 5.8 SOV, and where 안 goes (structural; unmeasured)

- **Wrong → right:**
  - 저는 먹어요 밥을 → 저는 밥을 먹어요 (the English half's ✗ row; the Chinese order is the same as the English);
  - 안 커피를 마셔요 → 커피를 안 마셔요 (from 不喝咖啡);
  - 안 공부해요 → 공부 안 해요.
- **Evidence:** none opened measures word-order errors by Chinese learners. 장경희 (2019) names "Chinese subject word order" among the causes of particle errors (§5.1), which is indirect. **Ranked here on structure alone** [inference]: Chinese is verb-medial, like English. Unlike English, it already puts time, place and manner before the verb (我昨天在家学习), so only the object (and 不's scope) has to move.
- **Bridge:**
  - 把 already puts the object before the verb (我把饭吃了). Mention it once in `sov` as a hook, not as an equivalence: 把 is marked and Korean SOV is the norm.
  - For 안, use 不 + a single verb: 「안 只管它后面那一个动词，像“不”紧贴在“喝”前面；宾语放在 안 前面」.

### 5.9 有 / 在 / 是 / 没 mapped onto 있어요 / 이에요 / 없어요 (unmeasured)

| Chinese | Korean | Trap [inference] |
|---|---|---|
| 我有猫 | 고양이가 있어요 | holds: 有 = 있어요 |
| 猫在家 | 고양이가 집에 있어요 | 在 is **also** 있어요, plus 에. Learners may look for a separate "在" verb, or write 집이에요 (the English half's note even shows casual 지금 학교예요; keep it marked as casual) |
| 这里有学校 | 여기에 학교가 있어요 | holds |
| 我是学生 | 학생이에요 | holds; the English half's ✗ 저는 고양이예요 (= "I am a cat") is a Chinese speaker's trap too if 有 and 是 get crossed |
| 我没有钱 | 돈이 없어요 | holds: 没有 = 없어요 |
| **我没去** | **안 갔어요** | **misleads**: 没 also negates the past; Korean uses 안 + past, never 없어요. Ranked high among the unmeasured traps because 没 is so frequent |
| 我没吃饭 | 안 먹었어요 / 못 먹었어요 | 没 covers both "didn't" (안) and "couldn't get to" (못) |
| 不是 | 아니에요 | holds; never 안 이에요 (the English half's ✗ row) |

### 5.10 Counters, native numbers for hours and age

- **Wrong → right:**
  - 세 잔 커피 → 커피 세 잔 (from 三杯咖啡);
  - 삼 시 → 세 시 (from 三点, read with 三 = 삼);
  - 이십오 살 → 스물다섯 살 (from 二十五岁);
  - 두 시 (2 o'clock) vs 두 시간 (two hours) confused, since 两点 / 两个小时 differ in Chinese, but by a different word;
  - 하나 개 → 한 개.
- [inference] from §4.5. Not measured. Ranked here because `numbers`, `counters` and `food` drill it.

### 5.11 Speech levels, 尊敬形 and "you"

- **Wrong → right:**
  - 반말 to an older stranger because "你 is fine with everyone" → 요-form;
  - 당신 for 你 / 您 → name + 씨 or a title;
  - 저는 가세요 → 저는 가요 (尊敬形 about oneself);
  - mixing levels in one sentence.
- **Evidence:** no error counts opened. 박성일 (2011) found that Chinese-edition textbooks disagree on honorific terms and speech-level classification (§2.3), so learners arrive with mixed labels.
- **Why** [inference]: Mandarin's only grammatical respect is 您, chosen per listener; Korean chooses an ending per sentence, plus 尊敬形 for the person doing the action. Chinese speakers may also map 您 onto 당신, which is wrong in almost every situation.

### 5.12 了 is not the past tense (unmeasured)

- **Wrong → right** [inference]:
  - 下雨了 ("it has started raining") → 비가 와요, not 비가 왔어요;
  - 我吃了饭再走 → 밥 먹고 갈게요 (not covered by this course; avoid it in examples);
  - 我以前是学生 (no 了) → 학생이었어요: the past must be marked even without 了.
- **Use it:** `past` says 「了 表示完成或变化，不等于过去时；韩语只要是过去的事就用 -았/었-，有没有“了”都一样」. Keep the English half's "Korean has one past tense" line, reframed around 了 and 过 (먹어 봤어요 for 过 is outside this course; do not add it).

### 5.13 Regional pronunciation traps (lesson-local)

- **n / l** (southwestern Mandarin and other regions merge them): 나 / 라 [inference for Korean; for English the merger is research-backed in `zh.md` §4]. Mark it as 「部分地区的同学」, never as a Chinese error.
- **Initial ㄹ read as pinyin r** (the retroflex 日): see §6.
- **Tones imposed on Korean syllables** [practitioner opinion, widely repeated; no study opened]: the guide says Korean has no tones and pitch belongs to the phrase.

## 6. Pronunciation aid: how a pinyin reader reads the romanization

**What the Korean half prints.** Every Korean line carries Revised Romanization (RR) in `rom`, shared by every course and not editable (spec §5).
- **Official rules** ([National Institute of Korean Language, RR rules](https://korean.go.kr/front_eng/roman/roman_01.do)) [curriculum convention]:
  - ㄱ ㄷ ㅂ are written *g d b* before a vowel and *k t p* before a consonant or at the end of a word;
  - ㄹ is *r* before a vowel and *l* elsewhere;
  - "ㅢ is transcribed as ui, although being pronounced as ㅣ";
  - sound changes are reflected (신라 → *Silla*, 좋고 → *joko*), but **tensing is not** (압구정 → *Apgujeong*);
  - hyphens may separate confusable syllables.
- **What a script check of the 935 `rom` strings in `target/ko/cards.jsonl` and `sentences.jsonl` found:**
  - *c* occurs only inside *ch*;
  - *q, x, z, f, zh, sh* never occur (*v* only in the card titles "vs");
  - the only hyphen is in *ti-em-ai* (TMI);
  - *eo* occurs 734 times, *ae* 267, *eu* 259, *si* 116, *ji* 70, *chi* 31, *yu* 12 and *ui* 12.

**Where a pinyin reader goes wrong** [inference; no opened source compares RR with pinyin]. The letters look like pinyin, and pinyin is the only romanization the learner has used since primary school. The traps:
- ***e*** read as 饿 [ɤ] (RR *e* is the ㅔ of 也);
- ***eo / eu / ae*** read as two syllables or as pinyin *ou / ai*;
- ***yu*** read as 鱼 (ü);
- ***ui*** read as *uei* (对 dui);
- ***si*** read as the buzzing 思 (RR *si* = 시 ≈ 西);
- ***ch*** read as the retroflex 吃 (RR *ch* ≈ 七 q);
- ***j*** before *a / o / u* read as the retroflex 知 or as z;
- ***r*** read as the retroflex 日;
- ***g d b j*** read as pinyin's tight unaspirated stops;
- ***h*** read as the rough velar 喝;
- final ***k t p m l*** dropped or given a vowel (§5.2);
- **tones** added.

**Placement.** The full guide goes in the `hangul` body, as its own `<h3>` section after the vowel and consonant tables; it needs the waiver of §3.6. The `sound-changes` body repeats the finals, linking and "no tones" parts. The three Hangul deck descriptions (`ko.d.hangul-vowels`, `ko.d.hangul-consonants`, `ko.d.hangul-advanced`) repeat their part in the same words. Card notes for single jamo (ko.c0001–c0060) use the same comparisons. **No English sound comparisons anywhere** ("as in father"): the anchor is pinyin and mouth shape.

### 6.1 The reading guide, in Chinese (ready to paste; every line [inference], native check §10)

> **罗马音怎么读：写给会拼音的你**
>
> 每句韩语下面的拉丁字母是罗马音，即韩国官方的拼写方案。它长得像拼音，但很多字母读法不一样。**不要按拼音读。**下面逐条对比。
>
> **元音**
> - **a**（ㅏ）：同拼音 a。
> - **eo**（ㅓ）：**一个元音**，不是 e + o。嘴张得像发 a，嘴唇不圆，舌头往后缩，接近“饿”的 e，但嘴张得更大。*seoul*（서울）= seo-ul，两个音节。
> - **o**（ㅗ）：嘴唇圆而小，是单纯的 o。不要像拼音 bo、po 那样带一个 u 的滑音。
> - **u**（ㅜ）：同拼音 wu 的 u，嘴唇更圆、更往前突。**o 和 u 一定要分开**：*uyu*（우유）不是“哦哟”。
> - **eu**（ㅡ）：**一个元音**。嘴唇向两边扁平，牙齿几乎合上，舌头往后缩。像“饿”的 e，但嘴闭得更小、嘴角往两边拉。
> - **i**（ㅣ）：同拼音 yi 的 i。注意：***si* 不是拼音的 si**，韩语 시 读起来接近拼音 **xi**（西）。
> - **e**（ㅔ）和 **ae**（ㅐ）：今天首尔话里读音相同，像“也 ye”里的 e。**不是“饿”的 e，也不是 ai。**
> - **ya / yo / ye**：同拼音 ya / yo / ye。**yeo**（ㅕ）：y + eo，一个音节。
> - ***yu*（ㅠ）不是拼音的 yu（鱼）**：读成 y + u，像“优”，嘴唇圆。不要读成 yo。
> - **wa**（ㅘ）：同拼音 wa。**wo**（ㅝ）：w + eo，比拼音 wo（我）嘴张得大、不圆。*mwo*（뭐）。
> - **wi**（ㅟ）：w + i，一个短音节，没有 wei 里的 e。
> - **oe**（ㅚ）、**we**（ㅞ）、**wae**（ㅙ）：今天都读 we，像“喂”，但结尾不要带 i。
> - ***ui*（ㅢ）不是拼音的 ui（对 dui）**：先发 eu，再快速滑到 i，一个音节。在词中间常读成 i，助词 의 常读成 e。
> - 两个元音字母连在一起，如果不是上面列出的组合，就是两个音节：*kapeeseo*（카페에서）= ka-pe-e-seo。
> - **韩语没有声调。**每个音节差不多一样高、一样长。句末上扬表示疑问，下降表示陈述。不要给音节加四声。
>
> **辅音：拼音分两类（b / p），韩语分三类**
> - **k、t、p、ch**（ㅋ ㅌ ㅍ ㅊ，**送气音**）：像拼音 k、t、p 一样送气，**而且气要更强**，元音的音调偏高。手放在嘴前，要感觉到明显的气流。
> - **kk、tt、pp、jj、ss**（ㄲ ㄸ ㅃ ㅉ ㅆ，**紧音**）：**不是长音，也不是两个辅音。**喉咙收紧，完全不送气，比拼音 g、d、b、j、s 更紧、更硬，元音的音调偏高。
> - **g、d、b、j**（ㄱ ㄷ ㅂ ㅈ，**松音**）：在词首，比拼音 g、d、b、j 更松，带一点点气，**元音的音调偏低**。在两个元音之间读得像浊音，很轻。不要读得太紧，否则会被听成紧音。
> - **j**（ㅈ）：接近拼音 j，后面是 a、o、u 也一样。*ja* 像很短的 jia，**不是翘舌的 zh，也不是 z**。
> - **ch**（ㅊ）：接近拼音 **q**，**不是翘舌的 ch**。*cha* 像很短的 qia，气要强。
> - **s**（ㅅ）：同拼音 s；在 i 和 y 前面接近拼音 x：*si* ≈ xi。
> - **h**（ㅎ）：比拼音 h 轻。拼音 h 是舌根摩擦（“喝”的粗糙感），韩语 ㅎ 是从喉咙轻轻呼气，像叹气。在两个元音之间常常几乎听不见。
> - ***r*（ㄹ，在两个元音之间）不是拼音的 r**：舌尖在上齿龈轻轻弹一下，像一个很快的 l。*saranghaeyo* 里没有翘舌音。
> - **l**（ㄹ，在音节末尾，或写成 ll）：清楚的 l，舌尖抵住上齿龈不放。不要卷舌，不要读成 er。*mul*（물，水）。
> - **m、n**：同拼音。**ng**：同拼音 ang 里的 ng，只出现在音节末尾。ㅇ 在音节开头不发音。
> - 拼音里有、罗马音里**不会出现**的：c（只出现在 ch 里）、q、x、z、zh、sh、f、ü。
>
> **收音（音节最后的辅音）**
> - 韩语的音节可以用 7 个音收尾：k、n、t、l、m、p、ng。普通话只有 n 和 ng，所以其他 5 个是新的。
> - **k、t、p**：摆好口型（舌根顶住上腭 / 舌尖顶住上齿龈 / 双唇闭上），然后**停住，不放气，也不加元音**。*bap*（밥）不是“巴普”，*hak*（학）不是“哈克”。会粤语、客家话或闽南话的同学：这就是你们的入声，比如粤语的“一 jat、十 sap、六 luk”。
> - **m**：双唇闭上收尾，像粤语的“三 saam”。*sam*（삼）。
> - **n 和 ng 要分清**：*san* ≠ *sang*。前后鼻音不分的同学要特别注意。
> - **l**：舌尖顶住不放。
>
> **四条规则**
> 1. **罗马音写的是发音**：감사합니다 写成 *gamsahamnida*。但紧音化不写出来：학교 写 *hakgyo*，实际读起来像“학꾜”。
> 2. **连起来读，不停顿**：收音移到下一个以 ㅇ 开头的音节上。*hangugeo* = han-gu-geo，不读 han-guk-eo。**收音只读一次**：돈이 读 do-ni，不读 don-ni。
> 3. 罗马音里的连字符只是为了分开字母，不是停顿。
> 4. **没有声调，没有重音**：一个词里每个音节一样重。

### 6.2 Notes for writers

- The jamo in brackets, the tense letters and the examples 우유, 돈이, 밥, 학 are for the `hangul` body only (waived). In deck descriptions and card notes, keep only the Hangul that the English row has.
- Pinyin anchors used: 饿 e, 也 ye, 优 you, 鱼 yu, 对 dui, 西 xi, 七 q, 知 zh, 喝 h, 日 r, 我 wo, 喂 wei. Cantonese anchors 一 *jat*, 十 *sap*, 六 *luk*, 三 *saam* are written in Jyutping, which matches the Wikipedia table's Yale forms *yāt*, *sahp*, *luhk*. The Jyutping spellings are [inference].
- Never write 「ㅂ = 拼音 b」 or 「ㅃ = 拼音 b」 (§5.4). Give the instruction, not an equation.
- ㅓ and ㅡ are both described relative to 饿 e, one with the mouth opened wide and one nearly closed. That keeps the reference point to a sound every learner can produce, but the native reviewer must confirm that it does not merge the two (§10, question 8).

## 7. Per-lesson notes (33 lessons, ids from `target/ko/lessons.jsonl`)

"Bridge / trap" is what the Chinese explanation is built on. "Rewrite" names the English-built passages that must be rewritten, not translated. This is in addition to the general rules of §3 and the `rw` flags that `mk_native.js zh` will put in the work files. All entries are [inference] unless a section above tags them.

| # | id | Bridge or trap for a Chinese speaker | Rewrite, do not translate |
|---|---|---|---|
| 1 | `hangul` | 韩文 is an alphabet, but its letters stack into **音节块** that look like 方块字: one block = one syllable, as one 汉字 = one syllable. Name 韩语 / 韩国语 / 朝鲜语 once. Insert the §6.1 guide. | The vowel table glosses "eo (uh), u (oo), i (ee), e (bed)" are English anchors: replace them with the pinyin anchors of §6.1. "Hangul is an alphabet, not a character system" → contrast with 汉字 directly (表音，不表意). Drop "Tap a letter to replay" unless the lead confirms the cells render. **Waiver needed** (§3.6). |
| 2 | `polite` | Mandarin has 您 and nothing in the verb; Korean has a level in every ending. One line for textbook users: 「教材里常先学 -습니다；日常最常用的是 요体」 (§2.3). | "Using polite speech too long just comes off as sweet" → natural Chinese (礼貌过头没关系). "Say it 3 ways" headers → 正式体 / 礼貌体 / 半语. The ✗ row 감사해요 to a shop owner stays. |
| 3 | `meet` | 몇 살이에요? ≈ 你多大了: Chinese ask age too, but Korean asks it to choose a speech level. 이에요/예요 = the "ends in a consonant?" test. | "A name follows its Hangul spelling … Mike = 마이크, Juan = 후안" → keep the Hangul (set-equality) and add, in Chinese, how Chinese names are written in Hangul (§9.2). Localised line: §9.3. |
| 4 | `sound-changes` | 连音 has a Chinese echo: 啊 becomes 哪 after -n (天哪) and 哇 after -u (好哇), a final sound sliding into the next syllable [inference; offer it as a memory aid only]. 鼻音化 is new. ㅎ 脱落 and ㄴ + ㄹ → ㄹㄹ are new. | "gamsa ham nida" / "hap-ni-da" respellings are English-style: use RR plus Chinese syllable breaks. **Drop** "open Read and try the 🔀 Sound changes drill". Add the "say the final only once" point (§5.2). |
| 5 | `nouns` | No articles, like Chinese; 들 ≈ 们 (optional, mostly people); 这 / 那 → **three** words 이 / 그 / 저; owner first, 의 ≈ 的. The **학 paragraph** ("학 means learning: 학교, 학생, 학원") is the zero-waiver home of the 汉字 bridge: 学校, 学生, 学院. | "Korean nouns are easier than English ones — no a or the, no gender" → 「跟中文一样，没有冠词，名词不变形」. "Looking for a word for 'the'" (✗ row) stays and is reframed as an English speaker's issue. 은/는 explained with 话题 (§5.1). |
| 6 | `isseoyo` | 有 and 在 both → 있어요; 没有 → 없어요; 是 → 이에요 (§5.9). | The whole opening "English uses 'is' for two jobs" and the English / Korean / Why table: rebuild on 是 / 有 / 在. Every Hangul example and ✗ row stays. |
| 7 | `pronouns-questions` | Question words stay in place, exactly as in Chinese (这是什么 = 이거 뭐예요). 당신 ≠ 你 / 您. 우리 ≈ 我们 (also 我们家 for "my"). 저 means both "I" and "that over there". | "Korean uses pronouns less than English" → 「比中文用得少：中文常说“你”，韩语尽量不说」. "Moving the question word to the front" ✗ row stays and is reframed as an English speaker's mistake that Chinese speakers rarely make. |
| 8 | `verbbasics` | No person agreement (same as Chinese); 形容词 as predicates (天气很好 = 날씨가 좋아요); 하다 verbs ≈ 名词 + 做 / 搞 (运动 → 운동하다), and many are 汉字词 + 하다 (공부하다, 운동하다, 요리하다). | "Describing verbs — English adjectives … no separate 'is'" → 「韩语形容词跟中文一样，不用“是”；不同的是，它要像动词一样变词尾」. |
| 9 | `verbs` | New: 元音和谐 (아요 / 어요). One form covers 我去 / 我在去 / 你去吗. | Nothing English-specific beyond glosses. |
| 10 | `past` | Korean has tense; Chinese 了 is aspect (§5.12). 没去 → 안 갔어요 (§5.9). | "'I ate', 'I have eaten' and 'I did eat' are all 먹었어요" → 「“吃了”“吃过了”“已经吃了”都是 먹었어요；没有“了”的过去也要用 -었-」. |
| 11 | `future` | 要 / 会 / 打算 → -(으)ㄹ 거예요; "probably" → 会……吧 / 应该. Present for a fixed near event, like 我明天去. | "pronounced with a tight k, like 'kkeoyeyo'" → 紧音 with §6.1 wording. |
| 12 | `sov` | Chinese is SVO like English, but time, place and manner already go before the verb; only the object moves. 把 is the hook (§5.8). 宾格助词 을/를. | Every "English is Subject-Verb-Object: I eat rice" sentence → Chinese: 「中文说“我吃饭”，韩语说“我饭吃”」. The ✗ row "English order" → 「中文语序」. |
| 13 | `particles` | 在 → 에 / 에서 by the §5.3 test; 去 + place → 에; 从 → 에서 (research-backed, Wang 2018). Topic vs subject: 话题 vs new information. | "English often translates both as 'at'" → 「中文都说“在”」. The "Quick test: look at the verb" stays, with the 在 test added. Mention once that textbooks call 은/는 补助词 / 添意助词. |
| 14 | `negation` | 不 ≈ 안 (choice); 没 ≈ 안 + past; 不是 ≈ 아니에요; 没有 ≈ 없어요. **Trap:** 不 goes before the whole verb phrase (不喝咖啡), 안 right before the verb. | The four ✗ rows stay; explain 안 커피를 마셔요 ✗ as the 不喝咖啡 habit. |
| 15 | `do-man` | 也 ≈ 도, 只 ≈ 만. **Trap:** 也 / 只 sit before the verb (我也去, 只喝咖啡); 도 / 만 stick to the noun (저도 가요, 커피만 마셔요). 也不 ≈ 도 + 안 (저도 안 가요 = 我也不去). | "도 + a negative means 'either'" → 「也不」. |
| 16 | `sentences` | The four shapes in Chinese order: 我是学生 / 咖啡好喝 / 喝咖啡 / 去咖啡馆、在咖啡馆学习. "Grow it" order (who · when · with whom · where · what · verb) is Chinese order except the object and the verb. | "English order" ✗ row → 「中文语序」. |
| 17 | `want-like` | 想 + verb ≈ -고 싶어요; 喜欢 + noun ≈ 을/를 좋아해요; 好 / 好喝 ≈ 이/가 좋아요. **Trap (research-backed):** 겨울이 좋아해요 ✗ (§5.1). "I want coffee" → 我要咖啡 ≈ 커피 주세요. | The want / like framing works; base the examples' logic on 想 / 喜欢 / 好. |
| 18 | `numbers` | §4.5: Sino-Korean = 一二三; grouping by 万 = 만; native numbers are the new thing; the measure-word rule of thumb; 两 ≈ 두. Zero-waiver home of the numeral bridge. | "Sino numbers build like English digits" → 「汉字词数字跟中文完全一样：십일 = 十一，이십오 = 二十五」. "Korean groups large numbers by 10,000 (만), not 1,000" → 「跟中文一样按“万”计」. ✗ 오십천 원 stays and is reframed (§3.6). |
| 19 | `food` | 개 个, 잔 盏 as 量词; 건배 = 干杯; 잘 먹겠습니다 has no Chinese equivalent (do not force 我开动了). 계산해 주세요 (s0184) ≈ 买单, false friend 计算 (§5.6). | "Four phrases cover 90%" stays. The table-manners lines: no Chinese comparison needed (pouring for others exists in Chinese drinking culture too; a short 「跟中国酒桌上差不多」 is fine). |
| 20 | `getting-around` | 地铁 exits are numbered in Chinese cities too; 출구 = 出口; 지하철역 = 地下铁驿 ≈ 地铁站. T-money ≈ 交通卡. | "Stations announce in Korean then English" stays (true in Korea). |
| 21 | `titles` | 씨 is 氏 but everyday; 선생님 ≠ 先生 (§5.6); 사장님 ≈ 老板; 오빠 / 형 / 언니 / 누나 ≈ 哥哥 / 姐姐, but chosen by **the speaker's gender**; fans know 欧巴. 고객님 ≈ 顾客 + 님. | Table column "(you female / you male)" → 「女生叫 / 男生叫」. |
| 22 | `plans` | 吧 ≈ -자 / -(으)ㄹ까요?; 要不要一起去？≈ 같이 갈래요?; meeting at a subway exit is familiar from Chinese cities. | "콜" note stays; the exit-number custom needs no US contrast. |
| 23 | `texting` | KakaoTalk ≈ 微信; ㅋㅋ ≈ 哈哈 / 233; ㅠㅠ ≈ 呜呜 / QAQ; 읽씹 ≈ 已读不回; ㅇㅋ ≈ OK. | KakaoTalk read-receipt paragraph: compare with 微信 (which has no read receipts) [inference: check, §10]. |
| 24 | `counters` | 量词 exist in both; several share characters (个 名 盏 瓶 卷 张 番 层). **Trap:** order 三杯咖啡 → 커피 세 잔 (§5.10). 两 ≈ 두. | "like 'two cups of coffee' … except it's mandatory" → 「跟中文的量词一样是必须的；但顺序不同：名词 + 数字 + 量词」. |
| 25 | `joining` | -고 ≈ 和 / 然后 / 而且; -지만 ≈ 但是 / 虽然…但是; -아서 ≈ 因为…所以 (reason first in both). **Trap:** 因为 can follow in Chinese (我没去，因为很忙); 서 never does. | "And, but, so" framing → Chinese connectors. 비싸서 맛있어요 ("tasty because expensive") ✗ explanation in Chinese. |
| 26 | `story` | 먼저 首先, 그리고 然后 / 而且, 그다음에 接着 / 然后, 그래서 所以, 그런데 可是 / 对了, 마지막으로 最后. 근데 ≈ 不过 (spoken). | Connector table glosses in Chinese. |
| 27 | `noun-modifiers` | 的 ↔ 定语词尾: 大的包 = 큰 가방; 我喜欢的菜 = 제가 좋아하는 음식 (strong bridge, §4.4). ㅂ and ㄹ irregulars are new. | "Korean has no 'that / which / who'; the whole description just sits in front of the noun" → 「跟中文的“……的”一样，修饰语全放在名词前面」. "English order" ✗ row → 中文 is the same as Korean here; reframe as an English-speaker note. |
| 28 | `compare` | A比B + 形容词 = A가 B보다 + 形容词 (same order); 更 ≈ 더; 最 ≈ 제일; 没那么 ≈ 덜. | "보다 looks like the verb 보다 (to see)" stays. No English-specific passage beyond glosses. |
| 29 | `cant` | 不 ≈ 안, 不会 / 不能 ≈ 못; 能 / 会 ≈ -(으)ㄹ 수 있어요; 不知道 ≈ 몰라요; 不太清楚 ≈ 잘 모르겠어요. | The spicy-food paragraph stays. |
| 30 | `have-to` | 得 / 必须 / 要 ≈ -아/어야 해요; **不用** ≈ 안 -아도 돼요 (a better bridge than English); 可以…吗 ≈ -아도 돼요?. | Cross-reference "the Asking politely lesson" → the Chinese title of lesson 32. |
| 31 | `honorific` | 您 is listener respect; -시- respects the person doing the action. Vocabulary bridges: 성함 ≈ 贵姓, 연세 ≈ 年纪 / 高寿, 드시다 ≈ 用, 계시다 ≈ 在 (§4.6). | "your partner's parents" stays; a Chinese framing (对象的父母) is fine. |
| 32 | `requests` | 좀 ≈ 一下 / 麻烦; 혹시 ≈ 请问 / 不知道……; -아 주시겠어요? ≈ 能不能请您……; -(으)면 안 돼요? ≈ ……可以吗 / 行不行. | Softener table glosses ('a bit', 'by any chance') → Chinese glosses. |
| 33 | `office` | 수고하셨습니다 ≈ 辛苦了 (but 受苦 is a false friend, §5.6); 잘 부탁드립니다 ≈ 请多关照; titles 部长 / 课长 / 代理 look Chinese but rank differently [inference]; 회식 ≈ 聚餐 / 团建; 먼저 퇴근하겠습니다 ≈ 我先下班了. | Title table "Roughly" column → Chinese company titles (经理, 主管, 部门负责人) with a warning that 대리 ≠ 代理 and 부장 ≠ 部长 (minister). |

## 8. Pair-layer proposals (proposals only)

**Format constraint** (as in `ceb-ko` §8). Spec v1 has no pair layer:
- the lesson list is the 33 en-ko ids (the roadmap matches on them);
- every target id needs a native row in **every** native half;
- trap cards would carry Korean, which lives only in the target half.

Both proposals therefore need a spec change (a per-pair `extra/` folder with its own target and native rows, assembled after the shared halves), or must be folded into existing lessons.

**Fallback without a spec change:**
- Put the opening lesson's content into the first section of `hangul` (prose plus the waiver), the 학 paragraph of `nouns`, and `numbers`.
- Put the trap notes on the `ko.c` cards that already exist (rows marked "c" below).
- The `ko.s` rows have only a `gloss`, so their trap notes go into the prose of the lesson that shows them.

### 8.1 Opening lesson 「你已经知道的」(What you already know)

Proposed id `zh-know`, placed before `hangul`, about 400 Chinese characters of prose, 6 checks, no other practice. It comes **before** Hangul, so its examples are shown as **罗马音 + 汉字** (*hakgyo* 学校). The learner meets the Hangul spelling in `hangul` and `nouns`.

1. **你已经认识几百个韩语词。** Five instant ones, as 罗马音 + 汉字: *hakgyo* 学校, *doseogwan* 图书馆, *sigan* 时间, *chulgu* 出口, *geonbae* 干杯. One sentence on scale: 「韩语词典里一半以上的词是汉字词」 (§4.1, with the "dictionary, not speech" caveat).
2. **怎么猜：先说普通话，再套四条规则。**
   - (a) n / ng 不变，有的 n 在韩语里是 m：*sam* 三, *eumak* 音乐.
   - (b) 普通话没有韵尾的字，韩语可能以 k / l / p 结尾：*hak* 学, *il* 一, *sip* 十. 会粤语的同学可以直接用粤语对照.
   - (c) r 开头的字在韩语里没有辅音：*il* 日, *in* 人.
   - (d) w 开头的字常变成 m：*man* 万, *mudae* 舞台.
3. **猜完要用上下文核对。** Three false friends as a warning: *gongbu* 工夫 = 学习, *jeomsim* 点心 = 午饭, *hwajangsil* 化妆室 = 厕所. 「长得像，意思不一定一样」.
4. **数字你已经会一半。** *il i sam sa o* = 一二三四五; *man* = 万, so 50,000 is *oman* 五万. The new half is the native numbers (*hana, dul, set*), used where Chinese adds a 量词 to a small number.
5. **语法里你已经会的。** No articles, no person agreement, adjectives without 是, question words stay in place, modifiers go before the noun (的), 比 keeps the same order.
6. **真正新的东西。** 助词 after every noun; the verb goes last; politeness inside every verb ending; 收音; three kinds of consonants; and the 罗马音 is not pinyin (preview of §6.1).
7. **Checks (6):** four guess-the-meaning items (罗马音 + four Chinese meanings, prose options), one false-friend item (*gongbu* = ?), one number item (*oman won* = ?).

### 8.2 Deck 「中文母语者的陷阱」(Traps for Chinese speakers): 20 sample cards

The Korean-half ids are given; "c" rows can carry a note today, "s" rows only a gloss. Rows 19–20 need the lead to add the Korean (§9.3). Meanings and notes are [inference].

| # | Korean (id) | Chinese meaning | Note |
|---|---|---|---|
| 1 | 공부해요 (ko.c0328, c) | 我学习 | 공부（工夫）＝学习，不是“工夫、功夫”。 |
| 2 | 아침 / 점심 / 저녁 (ko.c0600, c) | 早上 / 中午 / 晚上 | 점심（点心）是“中午、午饭”，不是点心。 |
| 3 | 생수 (ko.c0317, c) | 瓶装水 | 생수（生水）是能直接喝的瓶装水，不是没烧开的水。 |
| 4 | 야채 / 채소 (ko.c0306, c) | 蔬菜 | 야채（野菜）就是普通蔬菜；채소（菜蔬）的字序跟“蔬菜”相反。 |
| 5 | 계산해 주세요 (ko.c0580, c) | 买单 | 계산（计算）在饭馆里是“结账”。 |
| 6 | 화장실 (ko.c0276, c) | 洗手间 | 화장실（化妆室）是厕所，不是化妆间。 |
| 7 | 편의점 (ko.c0268, c) | 便利店 | 편의（便宜）是“方便”，跟价格无关。 |
| 8 | 사진 찍어요 (ko.c0343, c) | 我拍照 | 사진（写真）就是普通照片。 |
| 9 | 선생님 (ko.c0615, c) | 老师 | 선생（先生）+ 님 = 老师。中文的“先生”不能这样翻。 |
| 10 | 수고하셨습니다 (ko.c0550, c) | 辛苦了（正式） | 수고（受苦）在韩语里是“辛苦”，不是“受苦”。 |
| 11 | 식당 (ko.c0269, c) | 饭馆 | 식당（食堂）指一般的饭馆，不只是单位食堂。 |
| 12 | 포장해 주세요 (ko.c0581, c) | 请帮我打包 | 포장（包装）在饭馆里是“打包带走”。 |
| 13 | 저는 운전해야 돼서요 (ko.s0294, s) | 我得开车（所以不喝了） | 운전（运转）是“开车”。Note goes into `office` prose. |
| 14 | 미안, 그날은 약속 있어 (ko.s0203, s) | 不好意思，那天我有约了（半语） | 약속（约束）是“约好的事、约定”。Note goes into `plans` prose. |
| 15 | 안 갔어요 (ko.s0097, s) | 我没去 | “没去”是 안 + 过去时，不是 없어요。Note goes into `past` / `negation` prose. |
| 16 | 커피를 좋아해요 (ko.s0173, s) | 我喜欢咖啡 | 좋아해요 前面用 을/를；좋아요 前面用 이/가。Note goes into `want-like` prose. |
| 17 | 세 시 삼십 분 (ko.c0408, c) | 三点半 | 几点用固有词数字（세），几分用汉字词数字（삼십）。不说 삼 시。 |
| 18 | 커피 한 잔 (ko.c0579, c) | 一杯咖啡 | 顺序是“名词 + 数字 + 量词”：咖啡 一 杯。 |
| 19 | 애인 (**lead must add**) | 男朋友 / 女朋友 | 애인（爱人）不是配偶。 |
| 20 | 기차 (**lead must add**) | 火车 | 기차（汽车）是火车；中文的“汽车”韩语用另一个词。 |

Further candidates once the lead adds them: 신문 (报纸), 방심 (大意、掉以轻心), 결실 (成果).

## 9. Localisation

### 9.1 What stays

- Glosses translate what the Korean says. 미국에서 왔어요 is glossed 「我来自美国。」 or 「我是从美国来的。」 (question 12 in §10), never 「我来自中国」. *Kii*, 키이 and 오클라호마 stay.
- 영어 할 수 있어요? (ko.c0091, ko.g014) and 혹시 영어 메뉴 있어요? (ko.s0280, ko.p040, requests.02) are less natural for a Chinese learner, but they are still useful in Korea. Keep them and gloss them as they are.

### 9.2 Chinese equivalents in prose (no new Hangul without a waiver)

- Where the English prose says "put your own country / city", the Chinese prose names 中国, 北京, 上海, 成都, 广州 in Chinese characters.
- Example names in Chinese prose: 王芳, 李伟 (as in `zh.md`).
- Money comparisons: 人民币 / 元; won is 韩元.
- Apps: 微信 for KakaoTalk comparisons, 交通卡 for T-money.
- **Chinese names in Hangul** (for `meet`): there are two conventions [inference; **not verified on a 국립국어원 page**]:
  - transliteration from Mandarin under Korea's loanword orthography, as Korean news usage suggests (王芳 → 왕팡);
  - the Sino-Korean reading of the characters (王芳 → 왕방).

  The prose explains both in two sentences and recommends the Mandarin-based form as the default for a contemporary Chinese person, the one their Korean classmates will see in official documents. This needs the native reviewer and, ideally, the NIKL rule (§11).
- If a lesson body must show the Korean (중국에서 왔어요, 왕팡이에요), put `_waive` on that lesson's title row with a `_note`. `meet` is the only lesson where this is worth it.

### 9.3 Korean-half rows tied to the US, and what the lead must add

| id | Korean | Use |
|---|---|---|
| ko.c0077 | 미국에서 왔어요 | card |
| ko.g021 | 어디에서 왔어요? / 미국에서 왔어요. 오클라호마요. | dialogue |
| ko.s0012, ko.s0127 | 미국에서 왔어요 | `meet`, `particles` example rows |
| ko.p005 | 에서 · ex 집에서 쉬어요 · 미국에서 왔어요 | pattern |
| meet.06 | order: 미국에서 / 왔어요, distractor 미국 | practice |
| particles.03 | mc: 미국에서 왔어요 / 미국에 왔어요 / … | practice |
| ko.s0295, ko.s0289, ko.s0292, office.05, office.08 | Kii / 키이 | name only; fine for any learner |

**Proposed additions to the Korean half** (RR to be generated by the export; shown for reference only):

| Korean | RR (reference) | Gloss (en) | Where |
|---|---|---|---|
| 중국에서 왔어요 | junggugeseo wasseoyo | I'm from China | `ko.d.introductions`; `meet` example row |
| 저는 중국 사람이에요 | jeoneun jungguk saramieyo | I'm Chinese | `ko.d.introductions` |
| 중국어 할 수 있어요 | junggugeo hal su isseoyo | I can speak Chinese (중국어 is the app's own Korean name for zh in `LANGS`) | `ko.d.introductions` |
| 베이징에서 왔어요 / 상하이에서 왔어요 | beijingeseo wasseoyo / sanghaieseo wasseoyo | I'm from Beijing / Shanghai | `ko.d.introductions` |
| 100위안 | baek wian | 100 yuan | `ko.d.numbers-in-the-wild` |
| a dialogue variant of ko.g021 ending 중국에서 왔어요. 베이징이요. | | | `ko.d.introductions` |
| 애인, 기차, 신문, 방심 | aein, gicha, sinmun, bangsim | sweetheart, train, newspaper, carelessness | a false-friend deck (pair layer, §8.2) or `ko.d.places-buildings` / `ko.d.family-people` |

**Process** (as in `ceb-ko` §9.4): target rows are shared by every native half. The lead adds these to the built-in en-ko course (`src/app.html`), runs `export_ko.js` (new ids are appended; old ids stay) and checks `proof.js`. Then **every** native half (en, es, ceb, zh) needs rows for the new ids before `validate.js` passes. A zh-only addition is not possible in spec v1.

### 9.4 汉字 for Sino-Korean words in card notes: yes, simplified, on a short leash

**Decision.**
- **Which words.** Show the 汉字 in the card `note` (and in `why` lines where it helps) for **transparent cognates** (§4.3) and **false friends** (§5.6). Do not show them:
  - for opaque Sino-Korean words where the characters do not help (친구 亲旧, 지금 只今, 동생 同生, 죄송 罪悚);
  - for native words;
  - for loanwords.
- **Format.** `학생（学生）`: full-width parentheses, no space, inside the Chinese sentence.
- **Characters.** **Simplified** forms of the Korean hanja (学生, not 學生). Where the Korean hanja differs from the everyday Chinese word, add it: `예약（豫约，中文说“预约”）`, `휴가（休暇，中文说“休假”）`, `공항（空港，中文说“机场”）`.
- **Traditional forms** appear only in the target half's own `hanja` field on the 32 idioms (所願成就 …), which is Korean-side data, and in a note that is about the character itself (none is needed at this level).

**Why simplified, not traditional or both** [inference]:
1. The aim is recognition of the morpheme, and the learner recognises simplified forms fastest.
2. `zh.md` bans traditional characters in zh text. One exception would spread through 641 notes.
3. "學生/学生" doubles the length of every note for no gain at A1. A learner who later reads hanja in Korean newspapers or signs will meet traditional forms, but that is beyond this course.
4. The 汉字 never collide with the Hangul check (`HANGUL_RX`).

**Why on a short leash:** every printed hanja is a claim. The two found while writing (예약 豫約, 휴가 休暇) show that "write the Chinese word" is not the same as "write the Korean hanja". Writers must check each hanja against 표준국어대사전 (stdict.korean.go.kr) or Naver 한자사전 before it goes into a note, and when unsure, leave it out. The meaning is what matters.

## 10. Review plan: 20 questions for a native Mainland reviewer

Ideally the reviewer has studied Korean, or at least knows pinyin teaching well. Each item is a passage from this profile with a question that takes under a minute. Ask for "OK" or for the natural version.

1. Is 韩语 (not 韩国语) the right house word for app prose? Is 韩文 right for the script, and 罗马音 for the romanization line, or do learners say 罗马字 / 读音? (§3.1, §3.4)
2. Read the ten sample sentences in §3.3. Natural, concise textbook Chinese? Fix any word.
3. §3.4 glossary: are 话题助词 / 主格助词 / 宾格助词, 松音 / 紧音 / 送气音, 定语词尾, 正式体 / 礼貌体 / 半语 and 尊敬形 the terms you met (or would expect) in Chinese Korean textbooks? Which would you change?
4. Gloss tags （正式）（礼貌）（半语）（尊敬）: clear?
5. Typography: a half-width space between Chinese and Hangul (`助词 은/는 放在名词后面`), and `학생（学生）` with no space. Acceptable?
6. §6.1 vowels: do 饿 e (mouth wide) for ㅓ and 饿 e (mouth nearly closed) for ㅡ keep the two apart, or merge them?
7. §6.1: is 「*si* ≈ 西」 right for your ear? Is 「*ch* ≈ 七 q」? Is 「*ja* ≈ a short jia」?
8. §6.1 consonants: is 「送气更强 / 喉咙收紧 / 更松、音调偏低」 understandable as three instructions?
9. §6.1: is the 入声 tip (粤语 一 jat、十 sap、六 luk、三 saam) correct and helpful? Are there regions where it misleads?
10. §4.2: do rules 3 (-n ↔ -ㅁ), 8–9 (j/q/x split) and 19 (initial l → ㄴ / silent) feel usable, or too technical for card notes?
11. §4.3 and §5.6: are any of the "≈" Chinese words wrong for Mainland usage (押金, 物业费, 合同, 打包, 买单, 便利店)?
12. §9.1: for 미국에서 왔어요, which is more natural: 「我来自美国」 or 「我是从美国来的」?
13. §9.2: how should a Chinese learner write their own name in Hangul (왕팡 or 왕방)? What do Chinese students in Korea actually do?
14. §4.6: are 수고하셨습니다 ≈ 辛苦了 and 잘 부탁드립니다 ≈ 请多关照 the equivalents you would give?
15. §7 `texting`: 233 / QAQ / 呜呜 for ㅋㅋ / ㅠㅠ: current, or dated? Is it true that 微信 has no read receipts, so the 읽씹 note needs care?
16. §7 `office`: are 대리 ≠ 代理 and 부장 ≠ 部长 real confusions? Which Chinese company titles would you use for the "Roughly" column?
17. §5.12: is the explanation 「了 表示完成或变化，不等于过去时」 accurate and clear?
18. §4.5: is the rule of thumb (a measure word on a small number → native numbers) clear, with its two exceptions?
19. §2.3: in the textbook you used, did -습니다 come before the 요-form? How many pronunciation lessons came first?
20. §8.2 notes: natural? Any false friend you would add (from your own learning)?

## 11. Gaps and unverified claims

**No native check yet.** Every Chinese sentence, gloss, glossary choice and anchor word in §3.3, §3.4, §6.1, §7, §8 and §9 is [inference] by a non-native writer. §10 orders what to check first.

**Evidence read only as abstracts or landing pages**
- 백수진 (year and journal not shown), 황은미 2019, 장경희 2019, 유지연 2015, 박소영 2008: particle findings without the full counts.
- 유소영 & 강현화 2018: finals 50% for Chinese learners; the per-L1 sample sizes are not on the page.
- 후개만 2023, 가설매 2024: final-consonant findings, qualitative in the abstract; no percentages.
- Wang Xiaolong 2018, 박성일 2011, 郑贞美 2015: abstracts only.

**Studies with limits stated in the text:**
- Wang 2018 (26 learners; the author notes the small sample);
- Jiang et al. 2014 (18 learners, word-initial stops only, Korean baselines taken from earlier studies);
- the arXiv study (Chinese learners skewed advanced: 2 beginners, 56 intermediate, 291 advanced; the L1 is labelled only "Chinese", not "Mandarin").

**Claims with no study behind them (structural [inference]):** the SOV / 안-position trap (§5.8), 没 → 안 + past (§5.9), counters order and native hours / ages (§5.10), 了 (§5.12), tones imposed on Korean (§5.13), and the southern n / ng merger.

**Pitch as a cue for Chinese learners (§5.4).** It is research-backed for native Seoul speakers only (Bang et al.; Yu 2018). Using it as a learner instruction is untested. The Bang et al. paper was read as a preprint; the published version and year were not opened.

**Sound correspondences (§4.2).** Only the Middle Chinese → Sino-Korean facts are sourced (Wikipedia). The Mandarin side and the choice of 25 rules are this profile's own. Each rule has exceptions (快 → 쾌; aspiration unpredictable).

**Hanja.** Only 화장실 化粧室 ([hangulhanja.com](https://hangulhanja.com/en/words/화장실)), 점심 點心 ([Wiktionary](https://en.wiktionary.com/wiki/%EC%A0%90%EC%8B%AC)) and the 李丹 / Liu & Jia / brunch pairs (공부, 생수, 야채, 신문, 기차, 결실, 노파, 처자, 애인) were checked against an opened page. **All other 汉字 in §4.2, §4.3, §5.6 and §8 were written from the author's knowledge**, and two near-misses (예약 豫約, 휴가 休暇) show the risk. The Chinese meanings of 방심 / 放心 rest on [words.hk](https://words.hk/zidin/放心) (a Cantonese dictionary; the sense is shared with Mandarin [inference]).

**Pages that could not be opened or did not answer:**
- **Tables of contents of 《标准韩国语》, 《延世韩国语》 and 《首尔大学韩国语》:** five searches found none. The "pronunciation first, -습니다 first" convention in §2.3 is unverified. (One result, a discx.yuntu.io listing, turned out to be an English-language course based on Martin & Lee and is not cited.)
- **The Chinese grammar terms** (§3.4) come from the brief and the author's reading; no Chinese-language Korean textbook or grammar page was opened. A Chinese-language app blog that was opened (univext.com) uses 助词, 词尾, 谚文 and "正式 / 随意", not the textbook set; it is not cited as a source for the glossary.
- **Seoul tonogenesis on PubMed Central:** blocked by a captcha.
- **Two bilibili posts on ㅂ ㅃ ㅍ vs pinyin:** verification pages, no content.
- **A moegirl page on 韩语 / 朝鲜语 naming:** metadata only.
- **TOPIK takers by country (China):** the Asia Economy article redirected to an address outside the allowlist; the Korea Times 2023 piece has no country figures.
- **The NIKL rule on transcribing Chinese personal names** (§9.2): not opened.
- **K-pop / K-drama fan numbers and motives** in China, and the effect of post-2016 restrictions on Korean content: not researched.
- **91 schools offering 朝鲜语** (bendibao): the page does not say outright that the count is undergraduate only.

**Engine and format (for the lead):**
- `LANGS` has `zh` (`src/app.html`: `zh:{name:'Chinese',self:'中文',…,ko:'중국어'}`), and the zh interface pack exists. But the pack was written for zh-en, and its target-language strings say 英语 / 音标. `native/zh/ko/ui.json` must override at least the 14 `uiKeys` and the ~30 keys the es half overrides (§3.5), and it is worth checking what else in the zh pack names the target language.
- The zh pack renders "Polite ↔ casual" as 正式 ↔ 随意. That clashes with this profile's terms (正式体 is -습니다), so the override matters.
- `hangul` (and possibly `sound-changes` and `meet`) needs `_waive` for the reading guide and localisation (§3.6, §9.2).
- The pair layer (§8) and the Chinese rows (§9.3) need a spec change or an update to the built-in course. Neither is possible inside spec v1 for one language alone.
- Whether CSS `text-autospace` is on for `zh-Hans`: if it is, the typed half-width spaces of §3.1 double (as `zh.md` warns).

## Sources

Web pages opened and used for this profile (2026-11-23):
- [Wikipedia: Sino-Korean vocabulary](https://en.wikipedia.org/wiki/Sino-Korean_vocabulary)
- [Wikipedia: Sino-Xenic vocabularies](https://en.wikipedia.org/wiki/Sino-Xenic_vocabularies)
- [Wikipedia: Korean Chinese](https://en.wikipedia.org/wiki/Korean_Chinese)
- [National Institute of Korean Language: Romanization of Korean (rules)](https://korean.go.kr/front_eng/roman/roman_01.do)
- [Comparison of L2 Korean pronunciation error patterns from five L1 backgrounds by using automatic phonetic transcription (arXiv 2306.10821, 2023)](https://arxiv.org/html/2306.10821v1)
- [유소영 & 강현화 (2018). Analysis of Phonemic Errors of Korean Learners According to Language and Proficiency. *Language Facts and Perspectives* 44 (abstract page)](https://koreascience.kr/article/JAKO201832547631780.page)
- [강반, 김지은 & 이충우 (2014). 중국인 화자의 한국어 파열음 발음. *한국콘텐츠학회논문지* 14(3)](https://koreascience.kr/article/JAKO201415640234323.pdf)
- [Jiang, P., Kim, J.-E. & Lee, C.-W. (2015). Korean plain plosive produced by Chinese female speakers: Sentence vs. Paragraph. *Phonetics and Speech Sciences* 7(2) (abstract page)](https://koreascience.kr/article/JAKO201521159149294.page?lang=en)
- [Bang, H.-Y., Sonderegger, M., Kang, Y., Clayards, M. & Yoon, T.-J. The emergence, progress, and impact of sound change in progress in Seoul Korean (preprint)](https://people.linguistics.mcgill.ca/~morgan/bangEtAl2017Preprint.pdf)
- [Yu, H. J. (2018). Tonal development and voice quality in the stops of Seoul Korean. *Phonetics and Speech Sciences* 10(4) (abstract page)](https://koreascience.kr/article/JAKO201810760742427.page)
- [윤지현, 김은경 & 성철재 (2015). /오/-/우/ 합성모음 연속체에 대한 중국인 한국어 학습자의 청지각적 경계. *말소리와 음성과학* 7(4)](https://koreascience.kr/article/JAKO201503264232880.pdf)
- [후개만 (2023). 중국인 학습자의 남·북방 지역별 한국어 종성 발음 비교 연구. MA thesis, Jeju National University (abstract page)](https://oak.jejunu.ac.kr/handle/2020.oak/24487)
- [가설매 (2024). 중국인 학습자의 오류 분석: 한국어 /ㄴ/ 종성 환경에서의 연음 동일 자음 첨가. *Foreign Languages Education* 31(4) (abstract page)](https://scholar.kyobobook.co.kr/article/detail/4010070439534)
- [Wang Yuan (2018). 한국어 장소로서의 부사격조사 '-에, -에서' 교육 연구: 중국어 개사 '在'의 대응을 중심으로. *교육연구논총* 39(1)](https://koreascience.or.kr/article/JAKO201829757857259.pdf)
- [Wang Yuan (2019). 중국인 한국어 학습자의 글쓰기에 나타난 띄어쓰기 오류 양상 및 지도 방향. *한국교육논총* 40(1)](https://koreascience.or.kr/article/JAKO201929757857423.pdf)
- [노병호 (2015). 중국어 모어 화자의 한국어 학습자의 쓰기에 나타난 오류 분석: 어휘 오류를 중심으로. *한국융합학회논문지* 6(5)](https://koreascience.kr/article/JAKO201533678768669.pdf)
- [백수진. 중국인 학습자를 위한 한국어 조사 '이/가', '은/는'의 교육: 중국어와의 대응을 중심으로 (abstract page; year not shown)](https://m.earticle.net/Article/A142170)
- [황은미 (2019). 중국인 학습자의 한국어 쓰기 오류분석. MA thesis, Ewha Womans University (abstract page)](https://dspace.ewha.ac.kr/handle/2015.oak/250687)
- [장경희 (2019). 중국어권 학습자 주격 조사 '이/가'의 오류 연구. 『학습자중심교과교육연구』 19(12) (abstract page)](https://scholar.kyobobook.co.kr/article/detail/4010027267908)
- [유지연 (2015). 중국어권 한국어 학습자의 용언에 따른 '이/가', '을/를' 대치 오류 양상. MA thesis, Ewha Womans University (abstract page)](https://dspace.ewha.ac.kr/handle/2015.oak/213139)
- [박소영 (2008). 중국인 학습자의 한국어 조사 사용 오류 분석과 교수 방안. MA thesis, Sungshin Women's University (abstract page)](https://repository.sungshin.ac.kr/handle/2025.oak/6134)
- [Wang Xiaolong (2018). 중국인 한국어 학습자가 한자어를 쓸 때의 오류 분석 및 교육 방법. 『한국어 교육 연구』 8 (abstract page)](https://scholar.kyobobook.co.kr/article/detail/4010026495784)
- [李丹 (2018). 한·중 이음절 동자이의어 대조 연구. PhD dissertation, Sungshin Women's University](https://repository.sungshin.ac.kr/bitstream/2025.oak/7142/2/%ed%95%9c%c2%b7%ec%a4%91%20%ec%9d%b4%ec%9d%8c%ec%a0%88%20%eb%8f%99%ec%9e%90%ec%9d%b4%ec%9d%98%ec%96%b4%20%eb%8c%80%ec%a1%b0%20%ec%97%b0%ea%b5%ac.pdf)
- [Liu, Y. & Jia, M. (2016). Research on Korean Hanja and Teaching Chinese Vocabulary in CFL. ICASSR 2015, Atlantis Press](https://www.atlantis-press.com/article/25846788.pdf)
- [郑贞美 (2015). 汉语词汇与韩语汉字词对比分析. MA thesis, Xiamen University (abstract)](https://core.ac.uk/download/41431767.pdf)
- [박성일 (2011). 한국어교재에서 경어법 제시 방식에 대한 비교 분석: 중국어판 교재를 중심으로. 『한중인문학연구』 32 (abstract page)](https://www.earticle.net/Article/A141385)
- [문려화 & 유춘희. 초급 한국어 교재의 한자어에 대하여: 중국에서 쓰이는 한국어 정독 교재를 중심으로 (conference paper, PCCU)](https://cks.pccu.edu.tw/var/file/277/1277/img/1019/321262612.pdf)
- [hanbooks: Seoul University Korean 1A (unit titles)](https://www.hanbooks.com/seunko1asbo.html)
- [brunch.co.kr: 애인은 왜 국경을 넘으면 배우자가 될까](https://brunch.co.kr/@paraphrasing/44)
- [hangulhanja.com: 화장실](https://hangulhanja.com/en/words/화장실)
- [Wiktionary: 점심](https://en.wiktionary.com/wiki/%EC%A0%90%EC%8B%AC)
- [words.hk: 放心](https://words.hk/zidin/放心)
- [Korea Times (2025). Vietnam replaces China as largest source of int'l students at Korean universities](https://www.koreatimes.co.kr/southkorea/society/20251224/vietnam-replaces-china-as-largest-source-of-intl-students-at-korean-universities)
- [Korea Times (2023). Overseas availability of official Korean language test to double next year](https://www.koreatimes.co.kr/southkorea/society/20231011/overseas-availability-of-official-korean-language-test-to-double-next-year)
- [bendibao: 朝鲜语专业 开设院校](https://m.bendibao.com/edu/zhuanye/school.php?id=3972&xueli=benke)

Local project files read: `docs/HALVES-SPEC.md`; `docs/profiles/ceb-ko.md` (model: structure); `docs/profiles/en-es.md` (model: evidence tags, section list); `docs/profiles/zh.md` §1–4 (zh register, typography, glossary); `tools/i18n/zh/ui.json` (about 110 exact entries, the `Korean` key, the 14 `uiKeys`), `tools/i18n/zh/roadmap.json` (the 韩语 entry); `tools/halves/native/es/ko/ui.json` and `course.json`; `tools/halves/native/ceb/ko/course.json`; `tools/halves/lib.js` (`HANGUL_RX`), `tools/halves/validate.js`; `tools/halves/target/ko/{lessons,cards,sentences,dialog,examples,patterns,practice}.jsonl`, `course.json` (idioms, `hanja` field) and `trainer.json` (`uiKeys`); `tools/halves/native/en/ko/{lessons.jsonl,cards.jsonl,sentences.jsonl}` and all 33 `lessons/*.html`; the `LANGS` entry for `zh` in `src/app.html`.
