# en-zh cold review (EN-ZH-REVIEWER, 2026-11-19)

Saved batch by batch. Categories: WL = wrong language, WT = wrong teaching, PR = practice, PN = pron, WD = wording/English.

## Batch 0: pinyin generator and character set

**Method.** Script (`scratchpad/p3/words.js`) segments every Han run in every deck, dialogue, example, pattern, lesson body, check and practice item with the tool's own longest-match word list and prints each distinct word with its pinyin: 544 words, read in full. A second script lists every pair of adjacent one-character tokens (where a compound may be missing from the list), and a third re-generates every stored pron (483) and every typed/fill answer's pinyin (237) and compares.

**Findings.**
- All 483 stored prons equal the tool's output (0 mismatches before edits). All 237 practice answers generate without errors or warnings.
- Words checked for tone, neutral tone and reading, from my own knowledge of Mandarin (no dictionary site was reachable from this session: raw dictionary pages and MDBG are blocked; one web search confirmed 出差 chūchāi and showed dictionaries give 进来 as jìnlái, the lead's neutral jìnlai being the usual spoken form after a verb). All correct as listed: 东西 dōngxi, 朋友 péngyou, 认识 rènshi, 医生 yīshēng, 学生 xuésheng, 漂亮 piàoliang, 喜欢 xǐhuan, 时候 shíhou, 休息 xiūxi, 衣服 yīfu, 名字 míngzi, 关系 guānxi, 便宜 piányi, 银行 yínháng, 行李 xíngli, 还是 háishi, 热闹 rènao, 豆腐 dòufu, 咳嗽 késou, 师傅 shīfu, 护士 hùshi, 麻烦 máfan, 眼睛 yǎnjing, 肚子 dùzi, 行 xíng, 得 de (only in 说得很好), 只 zhī after numbers / 这 / 那, 还 hái (never huán in the course), 都 dōu (成都 Chéngdū as a unit), 觉 jiào in 睡觉, 一 / 不 sandhi in all 90 prons that contain them (yí ge, yì bēi, yíwàn, yìbǎi, bú shì, bù hǎo, shì bu shì, xǐ bu xǐhuan, dìyī, xīngqīyī, bā diǎn yí kè), apostrophes (Xī'ān, Tiān'ānmén, nǚ'ér, wǎn'ān, shí'èryuè). The lead's additions (进来 jìnlai, 别的 biéde, 家里 jiāli, 学生们, 它们, 大人 dàren, 森林, 钟, 好久不见, 父亲 fùqin, 母亲 mǔqin, 年纪, 差 chà, 关系, 哪国人) are all right.
- The rest of the 1,008-entry built-in list was also scanned (unused entries included): no wrong tone found. Entries that are dictionary-variable rather than wrong: 知道 zhīdào (zhīdao also heard), 打算 dǎsuan (dictionaries: dǎsuàn), 这里 / 哪里 zhèlǐ / nǎlǐ (spoken nǎli), 里 lǐ after nouns (房间里 fángjiān lǐ, spoken often li).
- **Wrong (fixed in lexicon.txt):** 出差 came out chū chà (correct chūchāi); 位子 came out wèi zǐ (correct wèizi). Neither string carried a stored pron (a card note and a dialogue line), so no pron changed, but the tool is now right for them.
- **Characters:** every Han character in the course was tested against GB2312 (the mainland simplified set). The only characters outside it are the deliberate traditional forms in notes (門, 計程車, 公車, 腳踏車), each labelled as traditional / Taiwan. No traditional form in any card, example, dialogue or practice item.

## Batch 1: decks-a.js, decks-b.js, extra-a.js, extra-b.js (read in full)

| File | WL | WT | PR | PN | WD |
|---|---|---|---|---|---|
| decks-a.js | 0 | 2 | 0 | 0 | 3 |
| decks-b.js | 0 | 2 | 0 | 0 | 0 |
| extra-a.js | 0 | 0 | 0 | 0 | 1 |
| extra-b.js | 0 | 0 | 0 | 0 | 0 |

- decks-a WD (not wrong Chinese: both are fine): card 我学习中文。 restored to 我学中文。 as the lead asked (the tool's output Wǒ xué Zhōngwén. is right; its warning about 学 is only a word-break warning). Note now says 学习 also works. extra-a example key and sentence changed to match (我学中文，我朋友学英文。).
- decks-a WT: 我住在纽约 note said 住 is "the exception"; several verbs take 在 after them (住在, 坐在, 放在). Now: "With 住, 在 + place comes after the verb; with most verbs it goes before."
- decks-a WT: 多少钱？ note implied 几 for prices; now "多少 asks for any amount; 几 is only for small numbers…".
- decks-a WD: 五毛 glossed "fifty cents" → "half a yuan (five mao)", note adds 角 on price tags.
- decks-a WD: 认识你很高兴 note adds that 很高兴认识你 is just as common (writer doubt: both orders are natural).
- decks-b WT: 坐飞机 note said 坐 is for "any vehicle"; bikes take 骑 (taught in the same deck).
- decks-b WT: 这件衣服多少钱 note "件 for clothes… not 这衣服": 件 is for tops and jackets (pants are 条, as decks-a says), and 这衣服 is heard in speech; note now "件 is the measure word for tops and jackets".
- Writer doubts settled as fine, no change: 来一个宫保鸡丁 (个 is the everyday choice; 份 also fine), 没事 as a reply to thanks (common), 你今年多大？ to an adult peer, 五毛 / 三块五, 八折 = 20% off, 110 police / 120 ambulance, 小姐 and 老外 notes, 吃了吗 note.

## Batch 2: lessons-1.js (10 lessons, read in full)

| WL | WT | PR | PN | WD |
|---|---|---|---|---|
| 0 | 3 | 1 | 0 | 3 |

- WT `tone-change` body and mc #5 why: "一 keeps its first tone … when it is part of a bigger number" contradicts 一百 yìbǎi / 一千 yìqiān (taught in Numbers). Now: at the end of a bigger number (十一 shíyī), in dates, after 第.
- WT `pronouns` body: "们 can go on some nouns for people when you speak to a group" was too narrow (学生们 is not only an address form). Now "(学生们, the students), but never after a number".
- WT `ma` mc #3: distractor 是。 as a reply to 你忙吗？ replaced by 我忙是。 (clearly wrong; a stressed 是忙 is possible); why no longer claims 是 "answers only questions with 是" (是啊 is a common colloquial "yeah"). The tip still models 很忙 over a bare 是 (doubt listed).
- PR `shi` fi #2 (他__是老师): distractor 也 gave a correct sentence (他也是老师); replaced by 了.
- PR checked by eye, plus a script that flags `or` items with separate subject and time tiles or a conjunction (all flagged items carry a "start with …" cue): every `or` item has exactly one order with its tiles; every set from lesson 5 has a tone `mc`; tone-point `fi` / `ty` pinyin items are `!strict`; every "you" prompt either cues the listener or accepts 你 and 您.
- WD `adj`: the h3 "Before a noun" sat over a paragraph about 很; split into "More about 很" and "Before a noun".
- WD `question-words`: the answer-swap paragraph sat under "How many: 几"; moved above it. Body pinyin nǎ guó rén → nǎguórén (same as the card and the example row).
- Hand-typed pinyin in bodies (191 `<b>…</b> <i>…</i>` pairs in all three lesson files) was diffed against the tool by script: all match.

## Batch 3: lessons-2.js (9 lessons, read in full)

| WL | WT | PR | PN | WD |
|---|---|---|---|---|
| 0 | 3 | 5 | 0 | 0 |

- WT `de` body: "Never 白色狗" is false as a rule (白色衬衫, 红色汽车 are normal); now "usually take 的 too", 白狗 kept as the short form.
- WT `you` tip: 有一本书在桌子上 is heard and grammatical, only clumsy; tip now says so and still teaches 桌子上有一本书.
- WT `family` body: "no plain word for brother or sister" now notes 兄弟姐妹 (a card in the same deck).
- PR `you` mc #4: two "wrong" options were acceptable Chinese (有一本书在桌子上; 桌子上是有一本书, emphatic). Replaced by 一本书在桌子上有。 and 桌子有上一本书。 (not 书一本, which is a normal list / inventory form). Same reason: `measure` mc #2 书三本 → 本三书.
- PR `measure` mc #2: distractor 这个票 is heard in northern speech; replaced by 张这票.
- PR `food` or #3: distractor 小姐 built 小姐买单, which is correct Chinese (only discouraged in the mainland); replaced by 老师.
- PR `time` ty #3: added 两点钟 answers (profile §8 asks for 两点 and 两点钟).
- Kept, listed as doubts: 三个书 and 一个鞋 as wrong options (standard teaching; 一个鞋 can only mean one shoe); 你几岁？ marked wrong for a colleague (socially wrong, not ungrammatical; the prompt gives the context).

## Batch 4: lessons-3.js (9 lessons, read in full)

| WL | WT | PR | PN | WD |
|---|---|---|---|---|
| 0 | 4 | 19 | 0 | 0 |

- WT `word-order` body and mc #4 why: "One verb breaks the rule … 住 is the exception" (also 坐在, 放在…); now "A few verbs break the rule; 住 is the one you have already met". Matches the decks-a 我住在纽约 note.
- WT `want-can` tip: 我能说中文 is grammatical and heard; tip now says 会 is what speakers normally use for a learned language. or #3 distractor 能 built a correct sentence (我能说一点儿中文); replaced by 是.
- WT `and-or` tip: 或者 in a choice question is heard in casual speech; tip now teaches 还是 as the standard. Wrong options that were only "less standard" replaced by clearly wrong ones: check #2 and mc #3 (or 还是…吗), fi #1 distractor 或者 → 是, ty #2 fallback 或者 → 和.
- WT `progress` check #1: option 我是在吃。 is a possible emphatic sentence; replaced by 我吃在饭。.
- PR `and-or` or #2 (我 星期六 或者 星期天 去) and or #3 (你 要 这个 还是 那个) each had two correct orders (the two choices swap). Tiles merged: 我 | 星期六 | 或者星期天 | 去 (distractor 还是星期天); 你 | 要 | 这个 | 还是那个 (distractor 和那个).
- PR fill distractors that made a correct sentence with another meaning, replaced: `progress` fi #3 去 (妈妈去厨房打电话) → 很; `ye-dou` fi #2 也 (我们也是学生) → 的, fi #3 也 (我也没吃饭) → 太; `ba-bie` fi #1 了 (我们走了) → 是, fi #3 别 (别坐) → 吗.
- PR missing accepted answers added: `want-can` fi #1 能 (你能进来, permission), ty #1 我想喝两杯咖啡 and 来两杯咖啡; `le` fi #2 没有; `word-order` ty #3 星期一我们两点上课 and 两点钟.
- PR `a-not-a` ty #3: "your older brother" had no listener cue and only 你 answers; prompt now says "(to a friend, …)". `le` or #2: the 了 tile could also go last (我买三个苹果了); merged to 买了. `word-order` ty #1: added 我在银行上班 (accepted in the identical `zai` item).
- `serial` read in full: no change needed.

## Final checks

- `node tools/target/repron.js zh`: 559 prons read, 0 rewritten (every stored pron equals the tool's output, including the edited 我学中文。 card).
- `node --check` passes on every JS file in tools/target/zh/.
- `gen.js zh` (scratch copy and packs/course-en-zh.js, re-run after the last fixes): 28 of 28 lessons, 18 decks, 321 cards. `validate.js zh`: PASS: all checks OK (392 practice items, 79 dialogues, 52 examples, 18 patterns).
- After the edits, every typed/fill answer (now 244) still generates pinyin with no error or warning.

## Ten things a native speaker should check first

1. `ma`: is a bare 是。 really an unnatural answer to 你忙吗？ (the tip teaches 很忙; 是啊 is a colloquial "yeah").
2. `and-or` tip: how acceptable 你要茶或者咖啡？ is in casual speech (now "heard, but 还是 is standard").
3. `want-can` tip: 我能说中文 vs 我会说中文 (now "能 is heard, 会 is normal").
4. `measure` mc: 三个书, 一个鞋, 这票 kept as wrong options.
5. `you` tip: 有一本书在桌子上 described as "heard, but clumsy".
6. `family` check #3: 你几岁？ marked wrong for an adult colleague (socially, not grammatically).
7. Neutral tones and readings that dictionaries vary on: 进来 jìnlai (dictionaries jìnlái), 知道 zhīdào, 打算 dǎsuan, 房间里 fángjiān lǐ (spoken li), 这里 zhèlǐ, 还是 háishi.
8. `le` body: "when the object has no number, put 了 at the end" and the 我买了三个苹果 / 我吃饭了 examples.
9. 是 before an adjective or verb is treated as wrong throughout (他是很高, 我是忙, 天气是热了, 我是吃饭) although a stressed 是 ("I AM busy") exists.
10. Notes: 来一个宫保鸡丁 (个 or 份), 没事 as a reply to thanks, 吃了吗 as a greeting, 老外 "usually friendly", 小姐 to be avoided in the mainland.

## Summary

- Wrong Chinese in cards, examples, dialogues and patterns: 0 found. Wrong pinyin from the tool: 2 (出差, 位子), neither in a stored pron; fixed in lexicon.txt. Stored prons rewritten: 0.
- Read in full: all decks, extras, lesson bodies, checks and practice items; the brief, TARGET-REVIEW.md, PRACTICE-SPEC.md, PHASE2-BRIEF.md (last section), profile §2, §3, §4.12–13, §6.2, §7, §8, §10.3–10.5, §11. Scanned only: the built-in word list entries the course does not use. Not read: profile §1, §4.1–4.11, §5, §6.1, §6.3–6.6, §9, §10.1–10.2, §10.6–10.7.

## Compliments deck (added later)

Files: decks-c.js (deck "Compliments", 15 cards), extra-c.js (11 dialogues, 4 examples, 2 patterns), lexicon-add-C.txt. Load check passes. Every pron is the tool's output, made with lexicon-add-C.txt applied; every pron passes pronPattern.

- **Lexicon merge needed before repron:** respell.js reads only lexicon.txt. Merge lexicon-add-C.txt first: 主意 zhu3yi5, 幽默 you1mo4, 发音 fa1yin1, 标准 biao1zhun3, 过奖 guo4jiang3, 努力 nu3li4. Without it, five cards throw "unknown word".
- **Native check first:**
  1. 哪里哪里 is written Nǎlǐ nǎlǐ (the tool's 哪里 = na3li3). In speech it is usually nǎli nǎli; decide whether to add a lexicon line.
  2. 好主意 is given as zhǔyi. Northern speech often says zhúyi.
  3. 真香！ as a food compliment: it is also a meme for eating your words. Is the card still the natural "it smells amazing"?
  4. The reply notes say 哪里哪里 / 过奖了 / 还差得远呢 are the traditional modest replies and that young people often just say 谢谢. Is that balance right?
  5. 做得很好！ is noted as teacher or boss to a junior. Check that this is how it reads.
  6. 你真幽默 vs 你真好笑: the note says 好笑 can mean "ridiculous". Confirm that.
  7. 你穿这件真好看！ as the everyday "that looks great on you".
- **Politeness:** cards use 你. The cooking card note gives 您做的菜真好吃！ for an older host, and the 过奖了 dialogue uses 您 to a teacher. No gender forms in Chinese.
