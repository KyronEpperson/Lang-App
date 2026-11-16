# zh-en cold review (ZH-REVIEWER), 2026-11-16

**Scope.** Everything under tools/content/zh except profile.json and the deviations files, plus the `t` fields of tools/i18n/zh/ui.json and tools/i18n/zh/roadmap.json. No generator, pack, src/app.html or other language was touched, and nothing was committed.

**Status.** Every check passes on scratch outputs:
- content: gen, validate, parity;
- interface: i18n gen, i18n validate;
- roadmap: `road.py check zh`.

All 9 JS files in the folder pass `node --check`. There is no Hangul anywhere under tools/content/zh. Both JSON files are valid. Diffing against the originals with `t` removed shows that only `t` changed (ui.json 30 values, roadmap.json 24; both counts include the parenthesis pass).

**Read in full:** all 41 lessons (bodies, checks, practice prompts, `why` and `hint`), all 430 cards, 86 dialogues, 54 examples, patterns, pause sets and idioms, 768 exact UI strings, 271 patterns and 425 roadmap titles.

## 1. What changed

### IPA: 32 transcriptions (13 token types)
Rules: **PRON-RULES.md**. Checker: `node tools/content/zh/pron_check.js all`. It now reports 0 phrase conflicts, 0 word conflicts outside the allowed weak/strong pairs, and 0 rule hits. Run against a copy of the original files, it reports 3 phrase conflicts, 11 word conflicts and 14 rule hits, so the zeros are real. The OALD forms cited here are from memory (profile §11: OALD was not fetched), and each rule follows the majority form already in the course.
- **Modals:** /kʊd ʃʊd wʊd/ → /kəd ʃəd wəd/ in 11 deck rows. The same sentence had two transcriptions, for example *Could you say that again?* as `/kʊd ju …/` (deck) and `/kəd ju …/` (lesson), and *You should see a doctor.*
- **Syllabic n / l** (OALD style), 11 rows: ˈsevən → ˈsevn, ɪˈlevən → ɪˈlevn, ˈsteɪʃən → ˈsteɪʃn, ˈpiːpəl → ˈpiːpl, ˈmedɪsən → ˈmedɪsn, ˈɪzənt → ˈɪznt, ˈdʌzənt → ˈdʌznt, ˈdɪdənt → ˈdɪdnt. *I'll take you to the station* and *Take this medicine…* now match their deck cards.
- **your / you're:** jər → jʊr (6 rows). jʊr was the majority form.
- **to before a vowel:** tə → tu in *I'd like to exchange this*, *I'm writing to ask…* and *I'd like to ask a question*, matching the existing *I'd like to order* /tu ˈɔːrdər/ (§6 table: "weak you, to before vowels").
- **Stranded preposition:** *Where are you from?* /ˈfrʌm/ → /frʌm/. Stranded monosyllables take their strong vowel without ˈ, like the existing *get off at* /æt/ and *look for* /fɔːr/.

### Teaching accuracy (12)
- **be lesson, tip.** The old test said "有动作用 do / does, 没有（状态…）用 be", which gives the wrong answer for *like, live, want*. Before: 「这句话里有没有动作？」 → after: 「句子里除了 be 动词，还有没有别的动词（like、live、work……）？」
- **countable body.** The body said "肯定句用 some，否定句和疑问句用 any", but the lesson's own items use *Can I have some water?* Added: 「但请求和提议虽然是疑问句，也用 some：Can I have some water? / Would you like some tea?」
- **to-ing heading.** 「-ing：正在做的事、喜欢做的事」 was wrong for *finish / mind* → 「-ing：enjoy、finish、mind 等动词后面」.
- **pron body.** 「英语却是每个词有一个音节读得又重…」 → 「英语的多音节词里却总有一个音节…」. Function words are unstressed, so not every word has one.
- **pron body.** 「可以关掉“显示音标”」 named a toggle that does not exist under that label. app.html renders the chip 「Aa 音标：开 / 关」 and the setting 「练习时显示音标」 → 「可以用“Aa 音标”开关或设置里的“练习时显示音标”把它关掉」.
- **adjectives check `why`.** 「短词加 -er，词尾的辅音字母要双写」 was stated as a general rule (cheap → cheaper) → 「big 是短词，加 -er；它以“一个元音字母 + 一个辅音字母”结尾，所以要双写 g：bigger」.
- **chinglish check 1.** The distractor *Can you turn on a light?* is acceptable English → *Can you turn open the light?* (zh-only lesson, not parity-bound).
- **Card note, What's up?** 「跟天上 (up) 没关系」 was leftover from the Korean course template → 「不是问“上面有什么”，而是熟人之间随口问“最近怎么样”」.
- **Card note, tree.** 「有点像“缺”的声母」 (q, alveolo-palatal) → 「有点像拼音 ch（“出”的声母）」.
- **Card note, I'm watching TV.** 「注意 TV 前不加冠词」 contradicted the neighbouring card *Turn off the TV.* It now explains that *watch TV* is a fixed phrase and that *the TV* means the set.
- **Dialogue 25.** 「你得坐 42 路，站在马路对面」 read as "stand across the street" → 「车站在马路对面」.
- **Pause set.** *You light up the room* 「有你在，气氛都亮了」 (a mixed metaphor) → 「你一来，整个屋子都亮了」.

### Accepted answers and prompts (10)
- **Answers added (zh-only lessons only; `a` is parity-bound everywhere else):**
  - chinglish 请开灯: + *turn the light on* word order (6 variants);
  - chinglish 我得去看病: + *go (and) see a doctor* (4);
  - chinglish 我很喜欢: + *I love it*;
  - articles-3 教育很重要: + *very / really / so important* (很 is usually bleached, but learners type *very*);
  - articles-3 我很早就睡了: + *very / really early*.
- **Chinese prompts tightened (parity-bound items):**
  - past ty 我看了一部电影 → 「…（用 watch）」 (*I saw a movie* was rejected);
  - plurals ty 我有两个姐姐 → 「我有两个姐妹」 (*older sisters*);
  - the mc and ty 车站在哪里？ → 「（附近那个）车站在哪里？」 (*Where's a station?* is not wrong for the bare prompt);
  - idioms ty 我会祝你好运的 → 「我会为你祈祷好运的（交叉手指）」 (the natural answer to 祝你好运 is *Good luck*).

### Terminology and style (42 in content)
- **Parentheses (27 in content, 17 in ui.json, 12 in roadmap.json).** Profile §2: full-width parentheses enclose Chinese and half-width enclose pure English or digits. Writers mixed the two, for example 「第三人称单数（he）」 next to 「脖子 (neck)」. The interface and roadmap used full-width throughout (「（+25 XP）」, 「（Perfekt）」). Every full-width pair with no Chinese inside is now half-width with the §2 spacing, across content, interface and roadmap: 「短语动词 (phrasal verb) 由…」, 「be 动词 (am)」, 「(I am like ✗)」, 「(have → has)」, 「两项都通过才算学完这节课 (+25 XP)」, 「最佳时段 {4}:00 ({5}%)」, 「现在完成时 (Perfekt)：…」. A scan with a no-CJK-inside test now finds 0 full-width pairs around non-Chinese text in all three. Pairs with Chinese inside stay full-width, for example 「（postpone、discover）」 and 「（对打喷嚏的人说）」.
- **Gloss alternatives (10).** §2 says ` / `. Lesson rows and two mc prompts used 「；」: 「背；后面」 → 「背 / 后面」, 「意思是“米；米饭”」 → 「意思是“米 / 米饭”」.
- **Same word, two translations.** 比萨 (a1) → 披萨 (as in lessons and practice); 电扇 (deck) → 风扇 (as in the pron lesson and practice).
- **-ing wording.** 「接动词 + ing」 → 「接动词的 -ing 形式」 (glossary: -ing 形式).
- **Lesson title.** 「who / that：修饰人和物」 → 「定语从句：用 who / that 修饰人和物」 (glossary term, as in the roadmap).
- **Checked and already uniform across the five writers:**
  - grammar terms: 实义动词 (32 uses, no 行为动词 / 普通动词), 第三人称单数（三单）, 不加冠词, 名词复数, 动词原形, 过去分词, 一般疑问句 / 特殊疑问句, there be 句型, 宾语从句 / 陈述语序, 虚拟语气, 现在完成进行时;
  - register: no 您 aimed at the learner (the 4 occurrences quote Chinese email formulae);
  - spacing: CJK–Latin spacing is clean (the only hits are the FINAL deck names 生存英语1/2).

### Interface (13 `t` values)
- **"Type" 类型 → 输入.** `app.html` reads the same key through `LL('Type')` for the quiz-mode chip, which showed 「⌨️ 类型 EN」. In the feedback form the key is only the radiogroup's aria-label (same finding as ja).
- **"🐞 Bug" → 「🐞 程序错误」.** Matching prose: 「为了修复 bug」 → 「为了修复程序错误」, 「bug、缺少的短语…」 → 「程序错误、缺少的短语…」. Neighbouring labels: 💡 建议 / 📝 内容纠错 / ❤️ 很喜欢.
- **"day streak" and "DAY STREAK": 「天连续打卡」 → 「连续打卡天数」.** Both are labels under a big number (a stat tile and the share-card canvas), like 「已学会的卡片」.
- **Idle-overlay idiom tag: 「四字成语」 → 「习语」.** The tag is attached to the course's IDIOMS, which are English idioms (*Break a leg*), so "four-character idiom" was false.
- **Level titles aligned with meta.js TITLES:** Student 学生 → 学员, Talker 健谈者 → 话匣子, Traveler 旅人 → 旅行者, Master 达人 → 大师. Beginner 入门, Local 本地通 and Pro 高手 already matched. Legacy Sprout / Senior / Sensei stay 萌芽 / 学长 / 宗师.
- **Other:** 「🎚️ 正式 ↔ 随意 练习 · 10」 → 「…随意练习 · 10」; Streak card 「打卡卡片」 → 「打卡分享卡」.
- **Checked, unchanged:**
  - bottom nav 今天 / 练习 / 复习 / 课程 / 阅读 / 进度 / 反馈;
  - glossary terms: 课后小测, 解析, 答对了 / 答错了, 再试一次, 提示, 卡组, 卡片, 连续打卡, 专项练习, 连词成句, 填空, 汉译英;
  - counters (「5 张卡片待复习」, 「{n} 节课」, 「{n} 道题」, 「{n} 个卡组」);
  - 课程 (Lessons) is kept apart from 语言课程 (Course).
  - Slot patterns render correctly with real values. The plan line 「第 {2} 课」 receives lesson numbers such as "1, 2", because the engine sends the numeric part of each title.

### Roadmap (12 titles)
- 「第一批句子 / 第一批词语 / 第一批汉字」 (translationese) → 「最基础的句子」, 「入门词语」, 「入门汉字」.
- 「A1 · 做事情」 / 「做事情」 → 「日常活动」.
- 「西班牙的西班牙语」 → 「西班牙本土西班牙语」 (likewise 法国本土法语 and 德国本土德语).
- 「A 是 B：不用“是”」 → 「“A 是 B”：不需要系动词」.

### Files
- New: PRON-RULES.md, pron_check.js (a checker, not part of the build), REVIEW.md.
- Edited: decks.js, extra.js, lessons.js, practice.js, meta.js (parentheses only), more/a1.js, more/a2.js, more/b1.js.

## 2. For a native speaker: the ten things I am least sure of
1. **「🐞 程序错误」** as the feedback category. Alternatives: 「问题反馈」, 「Bug」 (common in Chinese tech apps), 「出错了」.
2. **「输入」 as the feedback radiogroup aria-label.** It is a side effect of fixing the quiz chip. The right fix is an engine key split (§3).
3. **Half-width parentheses around English inside Chinese sentences** (「be 动词 (am)」, 「第三人称单数 (he)，…」). This follows profile §2 and is now uniform across content, interface and roadmap. Many Mainland publications and apps set 「（am）」, 「（+25 XP）」 full-width. If editors prefer that, reverse it in all three places.
4. **Weak modals and *your*.** /kəd ʃəd wəd/ and /jʊr/ everywhere, including slow, citation-like deck cards. Learners who know dictionary forms may expect /kʊd/.
5. **Stranded *from* unstressed** in *Where are you from?* /… frʌm/. In many American renditions the nucleus falls on *from*. The rule was chosen to match *get off at* /æt/.
6. **The level title 「话匣子」** (Talker): playful, maybe too colloquial next to 学员 / 大师.
7. **「连续打卡天数」** under the streak number. The alternative is 「天 · 连续打卡」.
8. **Prompt fixes:** 「我有两个姐妹」 (natural, but people more often say 姐姐 / 妹妹), 「（附近那个）车站在哪里？」, 「我会为你祈祷好运的（交叉手指）」.
9. **Card note, tree: "tr ≈ 拼音 ch".** A common classroom shortcut, but approximate.
10. **Literary renderings kept as written:** 「你一来，整个屋子都亮了」 (*You light up the room*), 「二百五十 (250)」 (二百五 is also a mild insult), 「求知若饥，虚心若愚」, 「（对打喷嚏的人说）保重」 (*Bless you*).

## 3. Found but not fixed (out of scope or parity-bound)
- **Type-in items that reject natural answers.** Widening `a` breaks parity, and the hints already steer:
  - it-there 今天很热: *It's very hot today*;
  - present 我喜欢猫: *I love cats*;
  - questions 你会说英语吗？: *Can you speak English*;
  - modals 你应该去看看医生: *You should go see a doctor*;
  - email 我明天休息: *I have a day off tomorrow* / *I'm taking tomorrow off*.
- **will ty 我去关门（用 will）** accepts *I'll get the door*, which means "I'll answer / open the door". It needs an `items` deviation to remove.
- **Distractors that are defensible English** (parity-bound): countable mc *Can I have ___ water?* (*a water* is normal restaurant English), and countable mc *Do you have any question?* (grammatical, though less usual).
- **deviations.json** carries `lessons:chinglish` and `lessons:articles-3`, which parity reports as unused (they are covered by `extraLessons`). This is pre-existing and was not edited.
- **Card targets still Korean-specific:** *Who's your bias?* (a K-pop term; the note explains it). Practice and checks keep Seoul, Busan, Jeju, Daegu, kimchi, Korea, won and Han Kang, as profile §9 directs; their Chinese prompts translate them literally.
- **UI keys that only an engine change can fix:**
  - "Type" serves both the quiz chip and the feedback radiogroup;
  - the idiom tag key and the level-up pattern key are legacy Korean-English keys (`t` only was edited);
  - the Hangul reading-drill strings ("(han). …", "Can you already read Hangul?") are translated loosely for English.
- **Roadmap basis line** 「CEFR A1–B1 顺序，针对韩语母语者调整」 is a faithful translation of the shared English roadmap, but it reads oddly to a Chinese user. That is the lead's call.
- **Profile §6** does not cover syllabic consonants, stranded prepositions or weak modals. PRON-RULES.md settles them, and the profile owner should sign off or fold them into §6.
