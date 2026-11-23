# zh-ko native half: cold review (2026-11-23)

I read every jsonl row in Chinese next to its Korean (target half) and its English, joined by id. That covers 641 cards, 149 dialogues, 74 examples, 47 patterns, 294 sentences, 99 checks, 462 practice items, 43 decks, 5 groups, 140 labels and 33 lesson rows. I also read all 33 lesson bodies. I checked every type-in and mc item against its accepted answers and its rejected forms (`a` / `x` / options). A script flagged every distractor that differs from the answer only in tense or politeness, and I checked whether the Chinese prompt carries a cue for each one.

Every edit is applied by id in `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/zhko-review/fix.py`. The script is idempotent: a second run applies 0 edits. The pre-review copy is in `…/zhko-review/base/`. Both are session scratch. I touched only `native/zh/ko/` (the jsonl files, `lessons/*.html` and this file). I left `work/`, `target/`, `src/app.html`, `ui.json` and `course.json` alone. **Do not run `mk_native.js zh --merge` again**: it rebuilds from `work/` and would undo this review.

`node tools/halves/validate.js zh ko` gives **errors: 0**. The two warnings left are the waived extra Hangul in `hangul.html` and the absent `trainer.json`. The two Hangul-count warnings (numbers.k3, numbers.05) are fixed. **Words remaining: 0 in the jsonl files and the lesson bodies.** The two in checks were the options `h` / `g` of hangul.k2, now 「h 音」/「g 音」. The 749 words still counted are `trainer.json` (663) and `ui.json` (86), which were out of scope. `assemble.js zh ko` succeeds and passes `node --check`.

## Rows changed per file

| File | Rows changed | Of which typography only |
|---|---|---|
| cards.jsonl | 26 | 2 |
| dialog.jsonl | 10 | – |
| sentences.jsonl | 8 | – |
| checks.jsonl | 25 | 20 (the space in `” =` removed) |
| practice.jsonl | 62 | 54 (same, plus 4 Han-free rows) |
| labels.jsonl | 7 | – |
| lessons.jsonl | 1 (numbers blurb) | – |
| decks, groups, examples, patterns | 0 | – |
| lessons/*.html | 9 files: hangul, sound-changes, meet, isseoyo, compare, plans, texting, titles, office | – |

**Deck labels and group names:** none changed. All 43 deck labels and 5 group names are natural, short and distinct, so all permanent keys are intact.

## Decisions

| Question | Decision | Applied to |
|---|---|---|
| 수고 = 受苦 | **Removed everywhere.** No dictionary page (stdict / Naver) could be opened. A namuwiki mirror lists 受苦, and the profile believes it, but the brief requires a dictionary check. w1 and w2 had already removed it, so this matches the majority. | office.html tip (now 「수고 这一家说法都相当于中文的“辛苦了”」); no row prints it |
| 안녕히 가세요 / 계세요 | Gloss: 「再见」 plus who leaves. 가세요 may say **慢走** (same meaning and same roles). **请留步 is not a gloss for 계세요** (it means "don't see me off"). It survives only as a hedged memory aid in meet.html. | c0245, c0570, s0017, s0018, g031, meet.03, meet.11, meet.html |
| 미세먼지 | Gloss **雾霾** (what Chinese speakers say on such days). The note says 「空气中的颗粒物，中文一般叫“雾霾”」. I dropped 细颗粒物, which is the Chinese term for PM2.5 (= 초미세먼지). | c0185 (g086 already said 雾霾) |
| 안녕하세요 in a work email | **您好**, matching the 您 of 연락드립니다 / 부탁드립니다 in the same email. Everyday 안녕하세요 stays 你好. | s0289, office.08 |
| 您 | Only where the Korean is honorific or humble (-시-, 드리다, 성함, 연세). All 35 occurrences fit (33 were checked as found, and 2 are the new 您好 rows). | – |
| 수고 family | 수고하셨습니다 「（今天）辛苦了（正式）」 to seniors · 수고하세요 「辛苦了（对还在工作的人说）」 · 수고했어(요) 「辛苦了（对同辈 / 下级）」 | c0550 note made consistent |
| 잘 부탁드립니다 | 请多关照 everywhere | already consistent |
| 계산해 주세요 | **请结账** (5 of 6 rows). The c0580 card note adds 「相当于中文的“买单”」. | c0580 |
| 콜 | 「就这么定了」 (card: 「好，就这么定了 / 算我一个」). 走起 is kept only for ㄱㄱ (고고). | g032, g063 |
| 대박 | 「太牛了 / 天哪」 (as g090 already said), so it no longer duplicates 설마 = 「不会吧……」. 아이고 is 「哎哟」 on both the card and the pause item. | c0631, pause expression.12 / .17 |
| 경찰서 | 警察局, not 派出所: Korean has its own 파출소 (派出所), so 派出所 is a false friend here. | c0099, g091 |
| Same Korean, same gloss | A script grouped every card, sentence, example, dialogue line and pause item by its Korean text. Variants that only add a context note were kept. Real splits were unified: 어디에서 왔어요? 「你是从哪儿来的？」, 미국에서 왔어요 「我是从美国来的」, 번호 좀 알려 줄래? 「……电话号码……」, 집에 잘 들어갔어? 「安全到家了吗？」, 저기요 「打扰一下（叫人时）」, 시간 있어요? 「你有空吗？」, 좋은 하루 보내세요 「祝你今天过得愉快」. | c0076, c0077, c0085, c0434, c0607, g071, pause polite.04 / expression.25 |
| Titles | 과장 = **经理**, 팀장 = 组长, 대리 = 资深职员（一般是第一级管理职，各公司不同）, 차장 / 부장 = 副总监 / 部门负责人, 사장 = 老板 / 总经理. office.html now warns that 代理 and 部长 are false friends. | office.html |
| Person names | **Latin letters**, as in the English (Kii, Minsu, Kim Minsu, Jieun, Lisa). 民秀 was a guessed hanja. Place names use their standard Chinese forms (首尔, 弘大, 江南, 明洞, 仁川, 汉江). | s0043, s0062, nouns.k3, nouns.07, nouns.10 |
| Terms | **松音 / 紧音 / 送气音** (the profile's glossary outranks the task's 平音; 平音 occurs nowhere). Also: 礼貌体 / 正式体 / 半语 · **요体** written solid, as the glossary does · 收音 · 汉字词 / 固有词 · 量词. A scan found no 平音, 韵尾, 终声, 格式体, 平语, 词根, 原形, 连读 or 激音. | – |
| "Formal" column in plans / meet tables | 正式体 is reserved for -습니다. The plans column (가시겠어요?, 있으세요?) becomes 「更客气（尊敬形）」. The meet column (반갑습니다 + 성함이 어떻게 되세요?) becomes 「正式 / 尊敬」. | plans.html, meet.html |
| Numbers rule | Hours use native numbers; minutes and money use Sino-Korean. The blurb said 「汉字词数字用来说……时间」, which contradicted this, and is now 「固有词数字用来数数、说年龄和几点；汉字词数字用来说钱、几分和日期」. The body, cards c0150 / c0151 / c0402 / c0405 / c0408, p033 / p034, numbers.k1 / k2 and numbers.03 / 06 / 10 / 11 / 13 / 14 all agree. | lessons.jsonl |
| ㅓ vs ㅡ (both anchored on 饿) | Kept the 饿 anchor. hangul.html, c0002, c0005 and c0058 now state the contrast outright: eo = jaw down, mouth wide; eu = teeth almost closed. | – |
| 天啊 → 天哪 | Kept as a labelled memory aid, now with the difference stated: Chinese n is heard in both syllables, while the Korean final moves over and is said once. This matches 「收音只读一次」. | c0049, sound-changes.html |
| Cantonese 入声 tip | Kept. 一 jat (-t), 十 sap (-p), 六 luk (-k), 三 saam (-m) are correct Jyutping finals, and Hakka and Southern Min also keep -p / -t / -k. | – |
| KakaoTalk / 微信 | Rewritten. 微信 does not show whether a message was read, and KakaoTalk does. The number counts the people who have **not** read yet, so 읽씹 is when the 1 has disappeared and no reply comes. The English and the old Chinese said "left on 1", which is backwards. | texting.html |
| Typography | No space between full-width punctuation and `=` (profile §3.1): 70 quiz prompts. A space between Chinese and Hangul / Latin: isseoyo.html, compare.html (A 比 B). Rows with no Han characters: pure Korean or symbols keep the English half-width punctuation (6 w2 rows were changed from 。 to .). Rows that carry romanization (가 = ga，악 = ak。) keep full-width, so they are not byte-identical to the English, which the validator would count as untranslated. Inside Chinese prose, lists use 、 (numbers.k1, the titles.html table). | – |
| `ui.json` | Untouched (out of scope). It still needs the 14 `uiKeys` plus the overrides listed in profile §3.5, because the zh interface pack says 英语 / 音标 for the target language. | – |

Other accuracy and clarity fixes:
* c0064 네 / 아니요 → 「是的 / 不」, because 不是 is reserved for 아니에요.
* c0066 and c0106: the 汉字 sentences were garbled («“洗手间”一词写作汉字是“化妆室”»). Both are rewritten.
* c0117 콘센트 etymology is now hedged (一般认为).
* c0216, c0217: 感气 and 镇痛剂 notes are reworded.
* Duplicate pause-set meanings removed: compliment.14 → 你真帅; expression.04 / .18 → 那当然 / 当然可以.
* g001 and s0023: 반갑습니다 = 很高兴认识你, matching the card.
* g015 and g141: 辣炒年糕, matching the card.
* g148: the vague 「下面有一个」 now says 弟弟或妹妹.
* story.02 gets the cue （昨天的事）, because 와요 is a present-tense distractor. It was the only tense-only distractor without a cue.
* requests.k2 prompt is rewritten (flagged by its writer).
* polite.12 tag: （礼貌，요体）.
* c0557: tag （尊敬）, as in the English.

## 汉字 printed in notes (checked against my knowledge of the standard hanja, not against a dictionary page)

These words appear with their hanja: 化妆室 화장실, 工夫 공부, 豫约 예약, 便宜店 편의점, 计算 계산, 气分 기분, 感气 감기, 镇痛剂 진통제, 宅配 택배, 契约 계약, 药局 약국, 食堂 식당, 料理 요리, 菜蔬 채소, 野菜 야채, 生鲜 생선, 生水 생수, 映画 영화, 信号灯 신호등, 直进 직진, 右回转 우회전, 舞台 무대, 会议 회의, 退勤 퇴근, 会食 회식, 夜勤 야근, 休暇 휴가, 联络 연락, 包装 포장, 点心 점심, 运转 운전, 先生 선생, 号线 호선, 核 핵. **New in this review, also from memory:** 代理 (대리) and 部长 (부장), named in office.html only as false friends. 受苦 was removed because it could not be confirmed on a dictionary page; by the same standard these two need the native or dictionary check (item 8 below).

## For a native speaker to check (max 20)

1. hangul.html, the reading guide: eo / eu from 饿 (open vs closed), si ≈ 西, ch ≈ q, ja ≈ a short jia, ㅎ 「像叹气」.
2. c0002 / c0005 / c0058: does the new eo / eu contrast keep the two vowels apart?
3. The 入声 tip: is it helpful, and does it mislead speakers of any dialect?
4. c0049 / sound-changes.html: is the 天啊 → 天哪 aid useful with its caveat, or should it go?
5. 안녕히 계세요: is 「再见（对留下的人说）」 natural enough, and is the hedged 请留步 aid in meet.html acceptable?
6. 미세먼지 = 雾霾: acceptable for Mainland readers?
7. texting.html: are 233 / QAQ / 呜呜 dated? (The table uses 哈哈, 嘿嘿 and 呜呜.) Is 「微信不显示对方读没读」 phrased well?
8. office.html titles and the new false-friend sentence (代理 / 部长 hanja): 대리 = 资深职员（一般是第一级管理职，各公司不同）, 차장 / 부장 = 副总监 / 部门负责人, 과장 = 经理. Would a Chinese office worker put it this way?
9. Work email: 您好 / 这次联系您 / 麻烦您确认一下 / Kii 敬上. Is this the right register?
10. The 수고 family glosses: all 辛苦了 with role notes. Is 수고하세요 = 辛苦了 natural when *you* are the one leaving?
11. 礼貌体 / 正式体 / 半语 / 尊敬形, and the new table headers 「正式 / 尊敬」 (meet) and 「更客气（尊敬形）」 (plans).
12. polite.html: 「客气得久一点没关系，反而让人觉得你讨人喜欢」.
13. nouns.html: 들 「跟“们”很像，也主要用在人身上」 follows the English; Korean uses 들 with things too.
14. numbers.html: the rule of thumb (measure word on a small number → native numbers, with the minutes and money exceptions). Clear?
15. c0245 계세요 = 「请（在这儿）待着 / 在（尊敬）」. Is it natural?
16. Pause labels: 你很有气质 (분위기 있어요), 有你在我就有底气 (든든해요), 一句好话能抵千两债.
17. Idiom glosses that add a Chinese chengyu: i15 自作自受, i14 进步神速，日积月累, i27 劝善惩恶.
18. c0471 콜 「来自英文 call（扑克里的“跟”）」, and 就这么定了 for 콜! in dialogues.
19. meet.html: Chinese names in Hangul 「一般按普通话发音转写，也有人用汉字的韩语读音」. Does this match practice (the NIKL rule was not opened)?
20. Deck labels 「生存短句」 (Survival phrases) and 「问在哪里」 (Asking around): natural as permanent names?
