# Core words, Flirting and Compliments (en-zh): sources, choices and skips

Writer CORE-ZH, 2026-11-23. Files: `decks-t.js` + `extra-t.js` (eleven Core words decks), `decks-f.js` + `extra-f.js` (Flirting), `decks-c.js` + `extra-c.js` (Compliments, started from the `.draft` files), `lexicon-add-T.txt`, this file and `POS-COVERAGE.md`. Thirteen deck entries were appended to `profile.json`.

| Deck | Cards | EXAMPLES | DIALOG |
|---|---|---|---|
| Top nouns | 111 | 0 | 0 |
| Top verbs | 88 | 55 | 0 |
| Top adjectives | 67 | 41 | 0 |
| Top adverbs | 40 | 31 | 0 |
| Top pronouns | 30 | 30 | 0 |
| Top prepositions (coverbs) | 26 | 19 | 0 |
| Top conjunctions | 15 | 15 | 0 |
| Top interjections | 17 | 0 | 17 |
| Top words | 54 | 6 | 0 |
| Top measure words | 18 | 18 | 0 |
| Top particles | 12 | 12 | 0 |
| Flirting | 62 (19 words, 21 phrases, 22 moves and replies) | 4 | 20 |
| Compliments | 25 | 4 | 11 |

Every meaning, note, example and dialogue was written by the writer. No card text was copied from a source.

## 1. Frequency sources actually opened

**Read this first: only the top of each deck is in source order.** Only two top-100 tables could be read. Cards with a rank come first, in rank order; everything after them is ordered by the writer's judgement, leaning towards spoken mainland Mandarin at HSK 1–3 level.

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| Mindomax, [Chinese words](https://www.mindomax.com/chinese-words), ranked table | The page says 18.3 million words of simplified Chinese: 13.4 million from film and TV subtitles (OpenSubtitles 2018, OPUS) and Tatoeba sentences, 4.9 million from news and Wikipedia (Leipzig Corpora Collection). Top 100 words only. | No licence stated ("© Mindomax 2026"). Only the ranks were used. | **Main sort key** (written M below). It includes the particles. Its news share over-ranks a few words (疫情, 发展, 将, 与, 并: none used). |
| Adsonant, [1,000 Most Common Chinese Words](https://adsonant-marketing.pages.dev/resources/chinese/1000-most-common-words) | The page says "a collection of more than 22 million movie subtitles sourced from opus.nlpl.eu". Only the top 100 are shown; the full list is a CSV that could not be opened. | No licence stated. Only the ranks were used. | **Second key** (A), for words not in the Mindomax top 100. It has no 的, 了, 吗, so it was never used for particles. |

**Sort rule:** M rank; if none, A rank + 0.5; if neither, the writer's judgement, after every ranked card.

**Cards with a source rank** (all others are ordered by judgement):
- **Top nouns:** 工作 M53, 中国 M58, 先生 A72, 问题 M76, 时候 A77, 事 M86, 孩子 A91. Judgement from 事情 on.
- **Top verbs:** 要 M15, 说 M18, 会 M25, 知道 M30, 来 M35, 让 M37, 想 M38, 可以 M44, 做 M46, 等 M51, 能 M59, 听 A61, 走 M66, 觉得 A66, 喜欢 A69, 找 A70, 应该 A73, 请 A74, 叫 A78, 死 A82, 帮 A86, 需要 M93, 开始 A98, 带 A100. Judgement from 认识 on. (等 M51 probably counts "etc." in news text as well as "wait".)
- **Top adjectives:** 快 A56, 新 M83, 多 M87, 一样 A97. Judgement from 少 on.
- **Top adverbs:** 不 M10, 就 M13, 也 M14, 都 M16, 很 M29, 还 M45, 别 A47, 真的 A53, 现在 M60, 太 A67, 没 M69, 真 A80, 已经 M82, 才 A84, 一起 A85, 只 A88, 一下 A89, 再 M92, 最 A94, 可能 M97, 更 M98. Judgement from 非常 on.
- **Top pronouns:** 我 M2, 你 M3, 他 M7, 这 M21, 她 M23, 那 M39, 自己 M49, 你们 M57, 它 M68, 这里 M81. Judgement from 您 on.
- **Top prepositions (coverbs):** 在 M6, 把 M32, 为 M33, 到 M36, 被 M42, 给 M43, 从 M63, 跟 M71, 后 M79, 用 M100. Judgement from 往 on. (为 M33 is inflated by news use of 为 wéi "as"; the card teaches wèi "for".)
- **Top conjunctions:** 和 M9, 如果 M70, 还有 A79. Judgement from 还是 on.
- **Top interjections:** all judgement. None is in either table.
- **Top words:** 一个 M24, 没有 M31, 不是 M47, 年 M48, 怎么 M78. Judgement from 多少 on; numbers in counting order, days in week order, seasons in calendar order.
- **Top measure words:** all judgement (个, M64, is already taught).
- **Top particles:** 的 M1, 了 M4, 吗 M12, 吧 M27, 啊 M54, 着 M56, 过 M72, 呢 M73, 得 M74. Judgement for 们, 是…的, …的话.
- **Flirting, Compliments:** no frequency order; layers and topics as the brief says.

**Could not be read** (all tried 2026-11-23): en.wiktionary.org `Appendix:Mandarin_Frequency_lists` (not on the fetch allowlist); wiktionary.com `Wiktionary:Frequency_lists/Mandarin` (opened: links only, no ranks); raw.githubusercontent.com and cdn.jsdelivr.net (hermitdave FrequencyWords zh_cn, OpenSubtitles 2018, CC BY-SA 4.0: proxy 403); corpus.leeds.ac.uk (`internet-zh.num`, `lcmc.num`: host not resolvable); lingua.mtsu.edu (Jun Da's lists: 403); PubMed Central table of the SUBTLEX-CH paper (captcha page); PyPI and npm (no network), so jieba's frequency dictionary could not be used either.

**Suggestion for the lead:** re-rank the judgement tails against SUBTLEX-CH or the OpenSubtitles zh_cn list on a machine that can download one. Only the order inside each deck should move.

## 2. Class slots fitted to Mandarin (brief rule 2)

- **Top prepositions → `Top prepositions (coverbs)`.** Chinese "prepositions" are verbs used before the main verb (在家吃饭, 给你打电话, 跟我来). The deck holds the coverbs (在, 把, 为, 到, 被, 给, 从, 跟, 用, 往, 离, 比) and the location words that do the work of English "in, on, under, next to" after a noun (里, 上边, 旁边, 对面 …), because 在 + noun + location word is how Chinese says "in / on / under". 后 and 前 are the short forms used after a time word (三天后, 三年前).
- **Top adjectives** keeps its name, as the profile glossary asks ("adjectives work like verbs: no 是"). The first card's note, several notes and a PATTERNS row (___很___。) carry the 很 rule.
- **Top verbs:** notes give the common complements where they matter: 听懂 / 听不懂, 看见, 吃完 / 做完 / 写完, 回来 / 回去, 进来, 出去, 学会, 找 (找到 is held: see §6).
- **Top pronouns** includes 您 and 咱们, the place demonstratives 这儿 / 那儿 / 这里 / 那里 / 哪儿 / 哪里 (Chinese grammar counts them as pronouns), and the possessives 我的 / 你的 / 他的 / 她的 / 我们的 / 谁的 (pronoun + 的 is the Chinese possessive).
- **Added `Top measure words`** (brief rule 2): 18 measure words the course does not teach yet, each with what it counts.
- **Added `Top particles`** (asked by the launch message): 的, 了, 吗, 吧, 啊, 着, 过, 呢, 得, plus 们 (the plural suffix for people), 是…的 and …的话. 地 is held (§6).
- **Top words:** Chinese has no articles; the "a / one" slot is 一个. It has no single yes / no either: 不是 and 没有 are the two "no" answers, and 是的 was left out (it would clash with the 是…的 card, and Chinese answers by repeating the verb).
- **Top interjections:** most true interjections (哇, 哎呀, 哦, 嗯, 唉, 哈哈) are not in the pron tool's word list and are held (§6). The 17 cards are the exclamations people really use that the tool can spell: 喂, 我的天, 加油, 算了, 好了, 好吧, 对了, 是吗, 真的吗, 不会吧, 可惜, 没问题, 好的, 行, 不行, 快点儿, 慢点儿. 啊 went to Top particles, where its use is far more frequent.
- **Deck order in `profile.json`:** the nine fixed decks first, then Top measure words and Top particles, then Compliments and Flirting in the `Conversation` group.

## 3. Where words with two homes went

- 在, 给, 到, 用 → coverbs (their most frequent use), with the verb meaning in the note.
- 工作 → Top nouns ("work; job"), verb use in the note. 等 → Top verbs ("to wait"), "etc." in the note.
- 现在 → Top adverbs; the other time words (今天, 以后, 早上 …) → Top words, as the brief puts days and times there.
- 多, 一样 → Top adjectives; 很多 → Top words (a determiner before nouns).
- 不, 没 → Top adverbs (Chinese grammar's class); 不是, 没有 → Top words as the two "no" answers.
- Flirting single words were kept out of Top adjectives and Top nouns: 漂亮, 美, 帅, 好看, 可爱, 聪明, 有意思, 好听, 特别, 年轻, 高, 甜, 开心, 眼睛, 头发, 笑, 有空, 男朋友, 女朋友. 喜欢 and 爱 stayed in Top verbs; Flirting uses them only inside phrases.
- Compliments and Flirting do not share a phrase: 你真聪明！ is in Compliments, so Flirting uses 你又聪明又漂亮。; 哪里哪里 is in Compliments, so Flirting uses 哪有！ and 你的嘴真甜。.

## 4. Words skipped because the course already teaches them as cards

Checked by script against every card target in `decks-a.js`, `decks-b.js` and the Compliments draft, ignoring 。！？，… marks. The build found 0 exact clashes because these were left out while writing:

| Deck | Left out | Already a card in |
|---|---|---|
| Top nouns | 人, 口, 木, 山, 月, 女, 子, 门, 雨, 火, 水 | First characters |
| Top nouns | 天, 狗, 鸡, 字, 菜, 日 | Pinyin sounds |
| Top nouns | 汤, 糖, 烟, 盐, 眼, 马 | Tone pairs |
| Top nouns | 朋友, 爸爸, 妈妈, 哥哥, 姐姐, 弟弟, 妹妹, 爷爷, 奶奶, 儿子, 女儿, 阿姨 | People and family |
| Top nouns | 老师, 学生, 同事, 公司, 经理, 图书馆 | Work and study |
| Top nouns | 东西, 老外, 小姐 | Traps for English speakers |
| Top nouns | 饺子, 包子, 米饭, 火锅, 绿茶 | Food and drink |
| Top nouns | 出租车, 地铁, 公交车, 自行车, 火车站, 护照, 行李 | Travel and transport |
| Top nouns | 药店 | Health and help |
| Top nouns | 红绿灯, 右边 | Around town and directions |
| Top verbs | 是, 吃, 喝, 去, 看, 怕, 谢 | Pinyin sounds |
| Top verbs | 买, 卖, 问, 有, 起, 吻, 骂 | Tone pairs |
| Top verbs | 休 | First characters |
| Top adjectives | 好 | First characters |
| Top adjectives | 大, 小 | Describing things |
| Top adjectives | 绿; 对 (right, correct) | Pinyin sounds |
| Top adverbs | 又 | Tone pairs |
| Top pronouns | 我们, 他们 | People and family |
| Top pronouns | 这个, 那个 | Measure words |
| Top pronouns | 什么, 谁, 哪个 (as 什么？ 谁？ 哪个？) | Questions and connectors |
| Top prepositions (coverbs) | 对 (as "to, toward") | Pinyin sounds (对 = right) |
| Top prepositions (coverbs) | 上, 下 | First characters |
| Top conjunctions | 但是, 因为, 所以 | Questions and connectors |
| Top interjections | 太好了 | Describing things |
| Top interjections | 小心, 救命 | Health and help |
| Top interjections | 没事, 对不起, 没关系, 不好意思, 谢谢, 再见 | Greetings and courtesy |
| Top words | 零, 一, 二, 两, 三, 十, 十五, 二十, 一百, 一千, 一万 | Numbers and money |
| Top words | 七 | Tone pairs |
| Top words | 八 | Pinyin sounds |
| Top words | 明天, 昨天, 周末, 星期一 | Time, days and dates |
| Top words | 为什么, 怎么样, 什么时候 | Questions and connectors |
| Top measure words | 个, 本, 杯, 张, 只, 条, 件, 双, 瓶, 辆, 位, 家 (taught as measure words) | Measure words (lesson `measure` and deck) |
| Top measure words | 块, 毛 | Numbers and money |
| Top measure words | 岁 | Pinyin sounds |
| Top measure words | 口 | First characters |
| Flirting | 他很帅, 她很漂亮, 真好看 exist as phrases, so only the bare words and new phrases were added | Describing things |

**Totals skipped as already taught:** nouns 59, verbs 15, adjectives 5, adverbs 1, pronouns 7, coverbs 3, conjunctions 3, interjections 9, words 20, measure words 16. Total 138.

## 5. Compliments: what changed from the draft

Kept from `decks-c.js.draft` unchanged: 真香！, 你做的菜真好吃！, 做得很好！, 你真厉害！, 你人真好。, 你家真漂亮！, 你穿这件真好看！, 你中文说得真好！, 哪里哪里。, 还差得远呢。 (and their dialogues).

**Dropped, because the pron tool cannot spell them** (the draft says its prons used `lexicon-add-C.txt`, but `respell.js` does not read that file; see §6): 好主意！, 你真幽默！, 你真努力！, 你的发音很标准。, 过奖了。, with their dialogue and example rows. Replaced by tool-safe cards on the same topics: 你学习真认真！ (effort), 你真有意思！ (humor), 你的声调很好。 (pronunciation).

Added from the plan (`docs/plans/compliments-zh.md`, Deck 1) and beyond: 太好吃了！, 这个茶真好喝！, 你真聪明！, 你家真大！, 你孩子真可爱！, 这张照片真好看！, 你的字写得真漂亮！, 你唱歌真好听！, 我说得还不好。, 还可以吧。, 我还要多学习。, 真的吗？谢谢！. The draft pattern 你真热情！ became 你真好！ (热情 is not in the tool).

## 6. Pron tool: what it could not do

Every pron was generated by `require('tools/target/zh/respell.js')` in a build script and pasted unchanged; `repron.js zh` rewrote 0 of 1,124 prons on both runs. All 565 new-file prons were read by eye; none looked wrong.

**The tool does not read lexicon-add files.** `respell.js` loads only its built-in list and `lexicon.txt`; there is no code for `lexicon-add-*.txt` (unlike nan, bn and chr). Following the brief, every word it does not know was **left out of the decks** and is listed in `lexicon-add-T.txt` (each entry `unverified:model`) for the lead to merge into `lexicon.txt`. The existing `lexicon-add-C.txt` has the same problem: none of its six words is read today. A test that loaded `lexicon-add-T.txt` into the tool's word map (in a scratch process only) showed every entry parses and gives the expected pinyin.

**Cards held until the lead merges the add files** (after merging, these can be appended and re-pronned with `repron.js`):
- Top particles: 地 (links a describer to a verb, 慢慢地走), 嘛 (it's obvious!), 呀 and 啦 (also need a pronPattern change: bare *ya* and *la* fail the pattern's neutral-tone list).
- Top interjections: 哇 (wow), 哎呀 (oh no; oops), 哎 (hey), 唉 (sigh), 哦 (oh, I see), 哈哈 (haha), 天哪 (good heavens; the tool now reads it *tiān nǎ*, so it needs the phrase entry), 糟糕 (oh no!), 恭喜 (congratulations), 辛苦了 (thanks for your hard work), 讨厌！ (playful "oh, you!"). 嗯 (mm-hm) cannot be written: *ǹg* does not fit the pronPattern.
- Top conjunctions: 虽然…但是, 不但…而且, 而且, 但, 要是, 只要. Coverbs: 为了, 关于.
- Top verbs: 告诉 (to tell; Adsonant rank 52), 看到, 找到, 感觉, 加 (加微信).
- Top pronouns: 别人, 有的, 这样, 那样, 这么, 所有.
- Top measure words: 首 (songs), 句 (sentences), 封 (letters), 座 (mountains, buildings), 顿 (meals), 场 (games, films).
- Flirting: 声音 / 你的声音真好听。, 气质 / 你很有气质。 (the favorite compliment with no English twin: poise, class), 温柔 (gentle), 善良 (kind-hearted), 我可以加你微信吗？, 约会 (a date), 过奖了。, 不好意思，我对你没有那种感觉。.
- Compliments: the five dropped draft cards above, plus 你真棒！, 你很热情。, 谢谢夸奖！, 辛苦了！, 没有没有。, 一般一般。, 你唱歌唱得真好听！.

**Other tool limits met:**
- 一般一般 comes out *yìbān yibān* (the 一 rule treats the second 一 like 看一看). Left out; `lexicon-add-T.txt` has a phrase entry that fixes it.
- 没有没有 and 我们下次再见面 throw "two possible word breaks". Left out or reworded (我们下次再一起出去，好吗？).
- 唱 and 空 alone are unknown (only 唱歌 and 有空 are listed): 你唱歌唱得真好听 became 你唱歌真好听；我周末没空 became 我周末很忙.
- Spelling choices of the existing lexicon that a native checker may query (not wrong): 真的 *zhēn de*, 那里 / 哪里 *nàlǐ / nǎlǐ*, 早点儿 *zǎo diǎnr*, 打算 *dǎsuan*, 出去 *chūqù*.

## 7. Flirting deck: how Mandarin speakers flirt

Open, verbal flirting is milder and more indirect than in English. Interest is shown through **care** (你吃饭了吗？, 早点儿休息。, 我送你回家吧。), by **asking for WeChat** (你有微信吗？ → 我扫你吧。) and by **asking someone to a meal**, and a direct 我喜欢你 is a real confession (表白), much stronger than English "I like you". Compliments are usually **brushed off**, playfully or modestly: 哪有！, 你真会说话！, 你的嘴真甜。 (哪里哪里 is in Compliments). 美女 / 帅哥 as forms of address are left out, as in the plan and the profile (service-sector slang). Saying no: two clear, kind refusals (谢谢，我们还是做朋友吧。, 不好意思，我现在不想找男朋友。) plus 谢谢，不过我有男朋友了。; the card 我周末很忙。 notes that repeated excuses are the indirect no and that a clear no is kinder. Dialogues: 20, including a gracious no (我有点儿喜欢你。 → 谢谢你，不过我们还是做朋友吧。) and a yes (我喜欢你。 → 我也喜欢你。).
