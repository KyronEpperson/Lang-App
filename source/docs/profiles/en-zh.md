# English speakers learning Chinese: course profile

Course `en-zh`: Mandarin Chinese for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Chinese (simplified characters). Machine-readable twin: `tools/target/zh/profile.json`, written from the same data as §8 and §9, so the two files agree. Pronunciation generator: `tools/target/zh/respell.js` (§6).

(`docs/profiles/zh.md` and `docs/profiles/zh.profile.json` belong to the reverse course, English for Chinese speakers. This profile does not use or change them.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile. The study is named. **(abstract only)** and **(other L1)** say how much was read and whether the learners were English speakers.
- **[curriculum convention]**: what syllabuses, textbooks, orthography rules, exams and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Mandarin**. Every claim of that kind that writers will copy into the course is in the native-check list (§11).

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Which Chinese?** Mandarin (Putonghua, 普通话) as spoken in mainland China, written in **simplified characters**, with **Hanyu Pinyin with tone marks** as the pronunciation line, and a `zh-CN` voice. This is the roadmap's choice. Taiwan forms (traditional characters, 计程车, 脚踏车) appear only in card notes.
- **Register:** 你 is the default "you". 您 is taught in lesson 5 (`greetings`) for older people, customers and strangers in service settings, and is used in every exchange with such a person. Address terms: 先生, 女士, 老师, 师傅, 服务员; never 小姐 to call a server.
- **Biggest traps (§4):** tones; word order (time and place before the verb, describer before the noun); measure words (missing, or 个 for everything); 是 before adjectives; 不 / 没; 了 for every past action; English question order; 二 / 两.
- **Standing rule (§7):** two strands. **(a) Tones**, tested with pinyin items in the sound stage and with one tone `mc` item in every later set. **(b) Chinese order**: when and where before the verb, the describer before the noun, and number or 这 / 那 + measure word + noun. Keywords tested on 45 sample lines.
- **Pronunciation aid (§6):** Hanyu Pinyin with tone marks, **generated** by `respell.js` from a built-in word list (longest match, about 1,000 words). Written by word (*Měiguórén*, *péngyou*), apostrophe before a, o, e (*Xī'ān*), neutral tone unmarked, **spoken tone for 一 and 不** (*yí ge*, *bú shì*), **dictionary tone for third-tone pairs** (*nǐ hǎo*). It throws on any character outside its list and on ambiguous word breaks, and warns where a compound may be missing.
- **Lessons and decks (§8, §9):** 28 lessons: all 25 roadmap items in roadmap order, plus `greetings`, `food`, `family`. 18 decks in 5 groups, including three script decks (Pinyin sounds, Tone pairs, First characters) that are ordinary decks, and "Traps for English speakers".
- **Typing (§10):** word tiles by default. Typing is optional, in characters through the phone's Chinese keyboard; pinyin typing works today only in sound-stage items (accent bar with tone keys). Engine requests in priority order in §10.7.

## 2. Variant, register and voice

### 2.1 Variant: mainland Mandarin, simplified characters

- The roadmap names "Mandarin, simplified characters", on an HSK 1–2 basis [curriculum convention]. The build plan keeps it.
- **Voice:** `ttsLang: "zh-CN"`.
- **Say it plainly to users** (in the course blurb and lesson 1): "This course teaches Mandarin Chinese, the standard language of mainland China, written in simplified characters with pinyin. Taiwan uses the same spoken language with traditional characters and some different words. Cantonese is a different language."
- **Why mainland:** HSK, the exam most adult learners meet, is a mainland exam and uses simplified characters (§5). Most US college programmes teach simplified characters with pinyin [inference]. Pinyin is used on both sides of the strait ([Wikipedia, *Taiwanese Mandarin*, IPFS mirror](https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.4everland.io/wiki/Taiwanese_Mandarin.html)) [curriculum convention].

**Main Taiwan differences (card notes only, never accepted answers).** From the same Wikipedia article [curriculum convention] unless tagged.

| Feature | Mainland (taught) | Taiwan (note only) |
|---|---|---|
| Script | simplified (说, 门, 车) | traditional (說, 門, 車) |
| taxi | 出租车 chūzūchē | 計程車 jìchéngchē (出租車 = a rental car) |
| bicycle | 自行车 zìxíngchē | 腳踏車 jiǎotàchē |
| potato | 土豆 tǔdòu | 馬鈴薯 (土豆 = peanut) |
| software | 软件 ruǎnjiàn | 軟體 ruǎntǐ |
| garbage | 垃圾 lājī | 垃圾 lèsè |
| 和 (and) | hé | hé or hàn |
| erhua (哪儿, 一点儿) | used, especially in the north | rare: 哪裡, 一點 |
| neutral tone | frequent (东西 dōngxi) | less frequent |
| zh ch sh | retroflex | often like z c s in casual speech |
| ok / softeners | 好的, 行 | 好啊, 好喔 [inference] |

**Vocabulary rule:** use the mainland word; give the Taiwan word in the card `note` ("In Taiwan: 計程車 jìchéngchē"). Write the Taiwan word in traditional characters in notes (the note is English text with a gloss; it is never read by the voice).

### 2.2 Roadmap items changed by this variant

None. The variant is the roadmap's own. The changes in §8 come from the learners (§4, §5).

### 2.3 你 and 您

- **你** is the default in every prompt, example and dialogue between peers, friends, classmates and colleagues of similar age.
- **您** is taught in `greetings` (lesson 5) as the polite "you" for: older people (a friend's parents, an older neighbour), a teacher, and a customer or guest addressed by staff (*您好，您要什么？*). It is used actively from then on in those relationships. Plural: 你们 only (*您们* is not taught) [inference].
- Mainland practice: 您 is common in the north and in service language, less common in the south among equals [inference; §11]. Overusing 您 with a peer sounds stiff, never rude, so typed answers accept 你 and 您 wherever the prompt does not cue the listener.

**Rules for writers**
- A `ty` or `or` prompt whose answer contains "you" says who is addressed when it matters: "(to a friend)" → 你; "(politely, to an older person)" / "(to a customer)" → 您. Without a cue, list both 你 and 您 answers.
- He / she: 他 / 她 (both *tā*). It: 它 is taught for recognition only. The pinyin cannot tell them apart; the meaning column does.
- **Dialogue roles:** customer and server: server uses 您, customer uses 你 or nothing; student and teacher: 老师 + 您; two new acquaintances of the same age: 你.

### 2.4 Forms of address

[practitioner opinion] from *The World of Chinese* ("Talking to strangers", 2018) and DigMandarin ("How to address people properly"):

| Term | Use in the course | Note |
|---|---|---|
| 先生 xiānsheng | "Mr." after a surname (王先生); "sir" to a male customer | Also "husband" in some contexts (card note). |
| 女士 nǚshì | "Ms." after a surname (李女士); "madam" in formal service | Formal; safe. |
| 老师 lǎoshī | a teacher (王老师, 老师好); also a respectful address for professionals | Learners call their teacher 老师, not by name. |
| 师傅 shīfu | a taxi or bus driver, a repair worker, a cook | "almost exclusively" men in blue-collar jobs (TWOC). |
| 服务员 fúwùyuán | calling a server in a restaurant | Neutral and current; direct but standard. |
| 老板 lǎobǎn | the owner of a small shop or stall | Friendly in markets (DigMandarin). Recognition only. |
| 阿姨 āyí / 叔叔 shūshu | a woman / man your parents' age (to a friend's parents; a cleaner) | Recognition in `family`. |
| 小姐 xiǎojiě | **not taught to call anyone.** In the Traps deck only | TWOC: it now carries a sex-work connotation in the mainland; fine in Taiwan. |
| 美女 / 帅哥 | not taught (recognition note in Traps) | Service-sector, informal (TWOC). |

Names: surname first (王明 Wáng Míng). People call friends by full name or given name; colleagues 小王 / 老王 (recognition only) [inference].

### 2.5 Politeness basics an A1 learner needs

| Chinese | Pinyin (generated) | Use | Lesson |
|---|---|---|---|
| 你好 / 您好 | nǐ hǎo / nín hǎo | hello | `greetings` |
| 请 | qǐng | please (inviting: 请进, 请坐; asking: 请问) | `greetings`, `ba-bie` |
| 请问 | qǐngwèn | excuse me, may I ask | `greetings`, `question-words` |
| 谢谢 | xièxie | thank you | `greetings` |
| 不客气 | bú kèqi | you're welcome | `greetings` |
| 对不起 | duìbuqǐ | sorry (an apology) | `greetings` |
| 没关系 | méi guānxi | that's OK, no problem | `greetings` |
| 不好意思 | bù hǎoyìsi | excuse me / sorry (a small inconvenience) | `greetings` |
| 麻烦你 | máfan nǐ | could you…, sorry to trouble you | `ba-bie` |
| 再见 | zàijiàn | goodbye | `greetings` |

[inference] Chinese uses 谢谢 and 请 less often than English uses thank you and please among family and close friends; overusing them with friends can sound distant. One card note says this; practice never penalises politeness.

### 2.6 Voice of the English text

- Plain, friendly US English, US spelling. A `why` is one sentence.
- Chinese inside English text: in lesson bodies, `<b>` around the characters, then the pinyin in `<i>` once at first mention in that lesson: `<b>很</b> <i>hěn</i>`. In plain-text fields (`why`, `hint`, notes), write the characters bare; add pinyin in brackets only when the point is the sound ("买 (mǎi, third tone) is buy").
- Never add English endings to Chinese: "two measure words", not "two 个s".
- Tones are named by number in English: "the third tone", "the neutral tone" (§3).
- Sample voice lines:
  1. "买 (mǎi) is buy and 卖 (mài) is sell: only the tone changes."
  2. "Time goes before the verb: 我明天去, not 我去明天."
  3. "Nice work! Review these cards tomorrow so they stick."

### 2.7 Chinese text conventions

- **Simplified characters only**, Unicode, no spaces between characters in card targets, example rows, dialogues, `mc` options and `fill` sentences.
- **Practice tiles are spaced by word** (§10.4): `or` answers and distractors and `ty` answers are written with one space between words (*我 是 美国人*). This is the author's segmentation, and it must match the generator's word list where possible.
- **Full-width Chinese punctuation** in Chinese strings: 。，？！、：“”. No ASCII punctuation inside Chinese text, no space after Chinese punctuation.
- **Numbers in characters** (三点, 二十五块), never Arabic digits, so the voice and the pinyin agree. **No years** at A1 (they need 〇 and digit-by-digit reading, which the generator does not handle).
- **"A little" is always 一点儿 or 有点儿**, never bare 一点: the generator reads bare 一点 as "one o'clock" (*yī diǎn*).
- **No Latin letters** in Chinese strings (no "WiFi", no "Emma"): the learner characters have Chinese names (§9).
- **Proper names** in pinyin are capitalised by the generator.

## 3. Glossary

These terms are [curriculum convention]: the names used in English-language Chinese grammar references opened here, mainly the Chinese Grammar Wiki (AllSet Learning) and the Oxford CTCFL grammar list. Use each term exactly and always the same way.

| Term to use | Do not use | Note |
|---|---|---|
| character | letter, symbol | 字 |
| pinyin | romanization (except once, as a gloss) | Always "pinyin", lowercase in running text. |
| syllable | | One character = one syllable (except 儿 in erhua). |
| initial; final | onset, rime | "initial" = the consonant at the start (b, zh, x); "final" = the rest (ang, iao, ü). |
| tone; tone mark | accent (for tones) | **standing-rule keyword** "tone mark" |
| first tone, second tone, third tone, fourth tone, neutral tone | tone 1, high-level tone, light tone | Number names are **keywords**. Describe once: high and level; rising; low (dipping); falling; short and light. |
| tone change | tone sandhi | "tone sandhi" once, as a gloss in `tone-change`. **keyword** |
| tone pair | | Two syllables' tones together (third + fourth). **keyword** |
| radical | component (except as a gloss) | the part of a character that hints at meaning (氵 water, 口 mouth) |
| stroke | | Recognition only; no stroke-order drills. |
| measure word | classifier, counter | "classifier" once, as a gloss. **keyword** |
| noun; verb; adjective; adverb | stative verb | Say "adjectives work like verbs: no 是". "stative verb" may appear once as a gloss. |
| describer before the noun | modifier, attributive | **keyword** "before the noun" |
| time word; place word | temporal adverbial, locative | **keyword** "before the verb" for both |
| location word | position word, localizer | 上, 里, 下, 前, 后, 旁边 after a noun: 桌子上 |
| 的 (possession and describing) | genitive, attributive marker | "的 links the describer to the noun" |
| particle | | 吗, 呢, 吧, 了, 的. "sentence-final particle" once, as a gloss. |
| question word | interrogative, wh-word | 什么, 谁, 哪儿, 几, 多少, 怎么 |
| yes/no question with 吗 | | |
| verb-not-verb question | A-not-A question | "A-not-A" once, as a gloss. |
| negative (不, 没) | negation marker | |
| 了 for a completed action; 了 for a change | aspect, perfective, past tense | Never "past tense of …". Chinese verbs never change. |
| two verbs in a row | serial verb construction | "serial verb" once, as a gloss. |
| modal verb | auxiliary | 想, 要, 会, 能, 可以 |
| verb-object word | separable verb | 吃饭, 睡觉; "separable verb" once, in `le`. |
| subject | topic | Do not teach topic-comment at A1. |
| false friend; calque ("word-for-word copy") | false cognate | |
| erhua (the 儿 ending) | rhotacization | "erhua" with a gloss once in `pinyin`. |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items with learner data opened for this profile come first.
2. Then items that occur in nearly every sentence and can be checked in typed or tiled practice.
3. Then lesson-local and vocabulary traps.

Learner data for English speakers of Chinese is better than for most pairs here, but much of it was read as abstracts only (§11).

1. **Tones**
   - Wrong → right:
     - *mǎi* (buy) said as *mài* (sell): 我想卖一杯咖啡 heard for 我想买一杯咖啡
     - *wèn* (ask) said as *wěn* (kiss): 我可以吻你吗？ for 我可以问你吗？
     - 汤 *tāng* (soup) said as 糖 *táng* (sugar)
     - every syllable said flat and level, or the fourth tone not falling all the way
     - a question said with English rising intonation on the last syllable, which turns 吗 or a fourth tone into a rise → keep the tone and let 吗 ask
   - [research-backed, abstract only] Yang (2016), *Chinese as a Second Language Research* 5(1): in scripted conversations of American English learners, the third (low) tone and the second (rising) tone were the most frequent replacements for other tones; low-tone errors came mostly in mid-phrase and rising-tone errors at the start of a phrase; learners over-applied third-tone sandhi where it does not belong. The author links the errors to English intonation laid over the tones.
   - [research-backed, abstract only] *Toward a sequential approach for tonal error analysis* (JCLTA 32(1), 1997; author not shown on the page opened): American adult learners produced level tones where Mandarin has none, and contour tones that did not reach their full pitch range; production did not correlate with perception scores.
   - Design consequence: strand (a) of the standing rule (§7); a Tone pairs deck; one tone `mc` item in every set from lesson 5 on; the pinyin line on every card and example.

2. **Word order: time and place before the verb**
   - Wrong → right:
     - 我去北京明天。 → 我明天去北京。
     - 我工作在银行。 → 我在银行工作。
     - 我吃面条在那个饭馆。 → 我在那个饭馆吃面条。 (DigMandarin, mistake 13)
     - 我们去学校和他。 → 我和他去学校。 (DigMandarin, mistake 12)
     - 我坐地铁去上班 is right; *我去上班坐地铁* puts "by subway" after the verb as English does.
   - [research-backed, abstract only] Peng (2021), PhD thesis, University of Leeds: English-speaking learners at three levels found the verb-complement structure hardest, then the attributive-headword (describer + noun) and adverbial-headword (adverbial + verb) structures; subject-verb and verb-object order were easy.
   - [practitioner opinion] Yoyo Chinese ranks "time and location" as the first of its "top 10 mistakes made by English speakers": time, place, manner and "by subway" all go before the verb; the bigger unit comes first (year, month, day; country, city, street).
   - Design consequence: strand (b) of the standing rule (§7); the `word-order` lesson; deck cards show whole sentences with time or place.

3. **The describer goes before the noun (with or without 的)**
   - Wrong → right:
     - 朋友我的 → 我的朋友
     - 书我老师的 ("the book of my teacher") → 我老师的书
     - 一个人很好 for "a good person" → 一个好人
     - 我昨天买的书 for "the book I bought yesterday" (English puts the clause after the noun; Chinese before)
     - 白色狗 → 白狗 / 白色的狗 (DigMandarin, mistake 5)
   - [research-backed, abstract only] Peng (2021): attributive-headword order is the second hardest of five structures.
   - Design consequence: strand (b); the `de` lesson.

4. **Measure words: missing, or 个 for everything**
   - Wrong → right:
     - 三书 → 三本书
     - 这书 → 这本书
     - 一个水 → 一杯水; 两个鞋 → 一双鞋 (DigMandarin, mistake 6)
     - 五个学生们 → 五个学生 (DigMandarin, mistake 7)
     - 二个人 → 两个人 (DigMandarin, mistake 8)
   - [research-backed] Rosmawati (2015), *Researching and Teaching Chinese as a Foreign Language* 1(1), a case study of two learners' essays: both used the general measure word 个 more than native speakers did; their accuracy with specific measure words was high. Learners' L1 not stated on the page opened. It cites Polio (1994), *JCLTA* 29(3), on non-native classifier use, which was not opened.
   - Design consequence: strand (b); the `measure` lesson; nouns on cards appear with their measure word (一本书, 一杯茶).

5. **是 before adjectives, and the missing 很**
   - Wrong → right:
     - 他是高。 → 他很高。 (DigMandarin, mistake 2)
     - 他是很有钱。 → 他很有钱。 (Chinese Grammar Wiki, 是 A1)
     - 我是累。 → 我很累。 / 我累了。
     - 我很是学生。 → 我是学生。
   - [curriculum convention] The Chinese Grammar Wiki: 是 "cannot be used to link a noun and an adjective"; use 很.
   - Design consequence: the `adj` lesson; Traps deck cards.

6. **不 and 没**
   - Wrong → right:
     - 他没喜欢吃香蕉。 → 他不喜欢吃香蕉。 (DigMandarin, mistake 4)
     - 我不有钱。 → 我没有钱。 / 我没钱。
     - 我昨天不去。 → 我昨天没去。
     - 我没去了。 → 我没去。
   - [practitioner opinion] DigMandarin lists the 不 / 没 mix-up among the top five; Yoyo Chinese's mistake 9 covers negating past actions.
   - Design consequence: the `bu-mei` lesson; it is the preferred "mixed neighbour" in the last two items of later sets.

7. **了 for every past action**
   - Wrong → right:
     - 他以前常常在早上学了中文。 → 他以前常常在早上学中文。 (DigMandarin, mistake 18)
     - 我昨天很忙了。 → 我昨天很忙。
     - 我昨天去商店了买东西 is clumsy → 我昨天去商店买东西了。
   - [practitioner opinion] DigMandarin, mistake 18. Chinese verbs never change for time; 了 marks a completed action or a change, not "the past".
   - Design consequence: `le` teaches what 了 does by contrast with English -ed; habits and states in the past take no 了.

8. **English question habits**
   - Wrong → right:
     - 什么你想吃？ → 你想吃什么？
     - 哪儿你住？ → 你住哪儿？ / 你住在哪儿？
     - 你有没有汉语书吗？ → 你有没有汉语书？ (DigMandarin, mistake 3)
     - 你是老师？ (rising voice only) is possible but marked → 你是老师吗？
   - [practitioner opinion] Yoyo Chinese: questions mirror their answers ("You where work?" matches "I at IBM work").
   - Design consequence: `ma`, `question-words`, `a-not-a`.

9. **和 to join sentences, and "and" / "or"**
   - Wrong → right:
     - 我住在北京和我有一只狗。 → 我住在北京，我有一只狗。 (DigMandarin, mistake 1)
     - 你要茶或者咖啡？ (a question) → 你要茶还是咖啡？
     - 我喜欢唱歌和跳舞 is fine; 我很累和想睡觉 → 我很累，想睡觉。
   - Design consequence: `and-or`.

10. **Numbers, 二 / 两, money and dates**
    - Wrong → right:
      - 二点 → 两点 (DigMandarin, mistake 8)
      - 十二月三号 is right; *三号十二月* (day first) → month before day, big to small: 十二月三号
      - 一百五 is "150", not "105" (105 = 一百零五)
      - "fifteen dollars" in speech → 十五块 (块 in speech, 元 in writing)
    - [inference] standard teaching points.

11. **Punctuation and spacing in writing**
    - Wrong → right: 我们是日本人. → 我们是日本人。 (DigMandarin, mistake 20); 牛奶，水果，蔬菜 → 牛奶、水果、蔬菜; spaces between characters → none.
    - Design consequence: authors use full-width punctuation (§2.7); the matcher ignores punctuation (§10).

12. **False friends and calques**
    - Wrong → right:
      - 我很好 for "I'm good (at it)" → 我很好 means "I'm fine"; "good at" is 很会 / 很厉害
      - 小姐 to call a server → 服务员
      - 我是饿 / 我很饿了 for "I'm hungry" → 我饿了 / 我很饿
      - 你好吗？ as a casual "Hi, how are you?" → 你好 alone, or 最近怎么样？ (你好吗 is a real question about wellbeing) [inference]
      - 吃了吗？ is a greeting among familiars, not an invitation
      - 我要 for "I want" is right, but 我要 to a waiter can sound blunt to some → 我想要… / 请给我… are softer [inference]
      - 东西 (dōngxi, thing) vs 东西 (dōngxī, east and west)
      - 老 = old, but 老师 is not "old teacher", and 老外 is a colloquial word for foreigner
    - [inference] teaching lore and the author's knowledge; native check needed (§11).

13. **Pronunciation of pinyin letters (reading aloud)**
    - Wrong → right (said): *q* as in "queen" → like "ch" in "cheese" (qù); *x* as "ks" → like "sh" with a smile (xiè); *c* as "k" → "ts" (cài); *zh* as "z" → "j" with the tongue curled (zhōng); *r* in *rì* as English r → closer to the s in "measure"; *e* in *hē* as "eh" → "uh"; *ü* as "oo" → "ee" with rounded lips (lǜ); *-i* after z c s zh ch sh r as "ee" → a buzzing vowel (sì, shì); *ian* as "ee-ahn" → "yen" (tiān); *ui* → "way" (duì); *iu* → "yo" (liù); *un* after j q x y = *ün*.
    - [inference] standard teaching points; the generator cannot show them, so the `pinyin` lesson and the Pinyin sounds deck notes do.

## 5. Learners: who, why, what first

**Who**
- [research-backed] About 5 million people in the US are of Chinese origin (Pew, ACS 2021–23; 5.5 million in the Census Bureau's 2023 estimate). About 42% were born in the US. Of those aged 5 and older, 31% speak only English at home; 41% speak "Chinese", 13% Mandarin and 11% Cantonese at home ([Pew Research Center, *Chinese in the U.S.*](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-chinese-in-the-u-s/markdown)). That is a large pool of heritage learners, including Cantonese-heritage families whose children may want Mandarin.
- [research-backed] US postsecondary Chinese enrolments fell 14.3% from 2016 to 2021 (MLA census, reported by [pinyin.info, 2023](https://pinyin.info/news/2023/us-postsecondary-enrollments-in-chinese-trending-down/)); four-year schools −12.5%, two-year schools −23.9%. Chinese is still one of the larger college languages [inference; the totals were in charts that were not read].
- [research-backed] Of 246 US colleges that answered a national survey, 51 (about 21%) offered separate Chinese heritage-language courses (Luo, Li & Li 2019, *Foreign Language Annals* 52(1), [record](https://digitalcommons.lmu.edu/modernlang_fac/36)). Heritage learners are common enough to need their own track.
- [inference] The groups, probably in this order of size:
  - **heritage learners** (Mandarin or Cantonese homes) who understand some speech but cannot read, and want to talk to grandparents;
  - **career and study learners** (business, tech, international relations, students preparing for HSK or a semester in China);
  - **travellers and culture fans** (food, films, C-dramas, history);
  - **partners and in-laws** of Chinese speakers.

**Why they study**
- No survey of US adult self-learners' motives was opened. A University of Hawaiʻi thesis on motivation of US foreign- and heritage-language Mandarin learners was found, but a browser check blocked it (§11). [inference] Family and identity, career, travel and culture.

**What they need first** [inference]
1. **Hearing and saying tones, and reading pinyin.** Without it nothing else sticks, so the four sound-and-script lessons come first, as in the roadmap and in every beginner course looked at.
2. **Survival politeness:** 你好 / 您好, 谢谢, 不客气, 对不起, 没关系, 请问, 再见, names (我叫…, 您贵姓?). The roadmap has no greetings lesson, so `greetings` is added before `pronouns`.
3. **Ordering food and paying:** 我要…, 一碗面, 一杯咖啡, 多少钱?, 块. `numbers` and `measure` exist; `food` is added after them so the measure words are used at once.
4. **Talking about themselves and their family:** nationality, job, age, family members and 几口人. `family` is added after `measure` (家里有几口人？ 我有一个哥哥).
5. **Characters at recognition level.** Adults expect to read signs and menus; the course aims at recognition of about 300 characters (the HSK 3.0 Band 1 character count) and no handwriting (§10.2).
6. **Little grammar jargon.** No conjugation, no agreement: lessons are short on rules and long on word order, measure words and particles.

**Check of the roadmap's order** [curriculum convention]
- HSK 3.0 Band 1 lists 269 syllables, 300 characters, 48 grammar points and 100 handwritten characters; its word list was reported as cut from 500 to 300 words in the 2026 update, and the page is inconsistent about it ([China Education Center, *New HSK 3.0 Band 1*](https://www.chinaeducenter.com/en/hsk/newhskband1.php)).
- The Oxford CTCFL grammar list (University of Oxford, sample lessons) starts with stative verbs (adjectives), possessive 的, 在, 是, co-verbs, 吧, modal verbs, choice questions (还是), measure words, 呢, time, and dates, then position words, 了 and 过 later ([CTCFL grammar list](https://www.ctcfl.ox.ac.uk/materials_sample_lessons_1_grammarlist/)).
- The roadmap follows the same core: sounds, 是 / 很, questions, negation, 的, 有, numbers and measure words, time, 在 and word order, then modal verbs, 了, progressive, serial verbs, A-not-A, adverbs, 吧 / 别, 和 / 还是. This profile keeps its order and adds three lessons (above).

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [curriculum convention] Hanyu Pinyin is the romanisation used by the PRC, by HSK, and by nearly every course for English speakers; Taiwan also uses it officially (§2.1). There is no serious alternative for a mainland course.
- [curriculum convention] The official orthography (*Basic Rules of Hanyu Pinyin Orthography*, [pinyin.info translation](https://pinyin.info/readings/zyg/rules.html)): words are written as units; numbers and measure words are separated (*liǎng ge rén*); whole numbers 11–99 are written together (*shíwǔ*), 百 / 千 / 万 join the number before them; a sentence starts with a capital; proper nouns are capitalised (*Běijīng Dàxué*), surname and given name separately (*Wáng Míng*); verbs and objects are separated unless they form one concept (*chīfàn*, *shuìjiào*); "only original tones are marked, and tone sandhi is not indicated" (rule 11.1); action verbs join 了 / 着 / 过 (*kànle*); sentence-final 了 is separate.
- [practitioner opinion] The Chinese Grammar Wiki: tone changes "are not written in the pinyin"; some sources (Wenlin) mark them, which can help beginners ([AllSet, *Tone change rules*](https://resources.allsetlearning.com/chinese/pronunciation/Tone_change_rules)). YellowBridge: textbooks "may or may not incorporate the tone sandhi into the pinyin"; dictionaries show the unmodified tone ([YellowBridge, *Tone sandhi*](https://www.yellowbridge.com/chinese/mandarin-tone-sandhi.php)).
- [research-backed, abstract only] Yang (2016): American learners over-apply third-tone sandhi (§4.1). So the aid should not invite more third-tone changing.

**Decision.** `pron: "required"`. The `pron` is Hanyu Pinyin with tone marks, **generated by `tools/target/zh/respell.js`**, never typed by hand. `node tools/target/zh/respell.js "<text>"` prints `<text> -> <pron>`; the module exports `respell` (and `pattern`, `warnings`, `W`).

### 6.1 Why a generator, and why it can be trusted only as far as its word list

Pinyin cannot be computed from characters alone: word breaks are not written, many characters have several readings (行 xíng / háng, 还 hái / huán, 长 cháng / zhǎng, 得 de / dé / děi, 了 le / liǎo, 觉 jué / jiào, 乐 lè / yuè, 便 biàn / pián, 只 zhǐ / zhī), and neutral tones belong to words (朋友 *péngyou*, 东西 *dōngxi* "thing" against *dōngxī* "east and west").

Hand-typed pinyin, policed only by a regex and a "same characters, same pinyin" check, was weighed and rejected:
- the regex cannot see a wrong tone, a wrong reading or a wrong word break;
- a character-level consistency check breaks on exactly the cases that matter (一 and 不 change with the next syllable; 行 differs between 银行 and 不行; neutral tones differ by word);
- four writers would make four sets of spacing choices (*Měiguórén* / *Měiguó rén*), and the lint compares only whole strings.

So the profile uses **a generator with a word list** (the option the brief names):
- **Longest match** over a built-in list of about 1,000 words and single-character words (HSK 1–2 core, the course themes, names, places and every sample in this profile).
- **It throws on what it does not know:** any character that is not in the list, alone or inside a listed word, stops the generator with «…» and a message. A Latin letter, an Arabic digit or 〇 also throws (write numbers in characters; no years).
- **It throws on ambiguous word breaks:** it segments by longest match from the left and from the right; if the two disagree (有名字吗: 有名 / 字 or 有 / 名字), it stops and names both. The lead settles it by adding the longer phrase with its pinyin (没有钱 *méiyǒu qián* was added this way).
- **It warns** (stderr, «…», not fatal) when a doubled character is split (*màn màn*) or when a character that is rarely a word on its own (国, 外, 最, 电, 学, 站…) stands alone next to another one-character word. That is where a missing compound would give a silent wrong word break.
- **Several readings:** a character alone takes one default reading (还 hái, 行 xíng, 长 cháng, 得 de, 了 le, 好 hǎo, 都 dōu, 只 zhǐ, 过 guo, 着 zhe); its other readings exist only inside listed words (还是 *háishi*, 银行 *yínháng*, 长大, 了解, 爱好 *àihào*, 首都). 觉, 乐, 便, 地, 假 have no default: alone they throw. 只 after a number or 这 / 那 / 几 is the measure word *zhī* (*yì zhī māo*).
- **What it cannot know (the remaining silent-error classes):**
  - a compound missing from the list whose parts are listed one-character words: it comes out split (外 + 国 gave *wài guó* until 外国 was added). The warning catches most of these, not all;
  - a character with several readings used alone in its non-default reading, or inside a compound missing from the list: 长大 gave *cháng dà*, 不过 *bù guo*, 过年 *guo nián*, 还钱 *hái qián* until those words were added. The default is right for A1 usage (还 = still, 行 = OK, 得 = the complement *de*), but a writer who uses 还 for "give back" or 得 for "must" (*děi*, not taught) gets a wrong pron with no warning;
  - bare 一点 meaning "a little" (read *yī diǎn*, one o'clock): hence the writer rule in §2.7.
  The lead adds the word; the validator request in §10.7 (8) makes later list fixes reach every stored row.
- **Adding words:** writers never edit a pron. When the generator throws or warns, the writer reports the word; the lead adds a line to the list in `respell.js` (or to an optional `tools/target/zh/lexicon.txt`, read if present, one `汉字 pin1yin1` per line or `;`-separated) and runs `node tools/target/repron.js zh`.

**How reliable** (self-measured; no native check yet, §11):
- 1,008 entries; every entry's output matches `pronPattern`; no entry conflicts with another.
- An 88-sentence test set of typical A1 sentences written before checking the list: 0 throws; on the first run 5 sentences had a silent error (word breaks *wài guó*, *zuì jìn*, *màn màn*, *huǒchē piào*, and *xìng wáng* uncapitalised). All 5 were fixed by adding words, and the warning rule was added to catch that class. A review then found the polyphone class above (长大, 不过, 过年, 还钱, 了解, 首都 were missing) and two forward-match overlaps (很多大学生 matched 多大; 有名字 matched 有名); the words were added and the two-direction check now throws on such overlaps. After the fixes: 88 of 88 test sentences and all 117 sample strings pass with no warning and no throw.
- The list's tones and neutral tones are the author's own knowledge, checked against nothing but the sources above. It is the single most important thing for a native speaker to check, and it is in one place.

### 6.2 The key (exact format)

| Rule | Decision | Example |
|---|---|---|
| Unit | **one pinyin word per Chinese word**, words separated by one space | 我是美国人 → *wǒ shì Měiguórén* |
| Word breaks | the generator's list decides. Nationality words are one word (*Měiguórén*, matching the tile 美国人); 这个 / 那个 / 哪个 one word (*zhège*); number + measure word + noun separate (*yí ge rén*); verb-object words that are one idea joined (*chīfàn*, *shuìjiào*, *shàngbān*), others separate (*hē chá*, *kàn shū*); location words separate (*zhuōzi shàng*) | 一杯咖啡 → *yì bēi kāfēi* |
| Particles | 的 吗 呢 吧 了 着 过 得 are **separate words** (*chī le*, *wǒ de*), unlike the official *chīle*: each one is a separate tile in practice, and the learner sees the particle | 我吃了。 → *Wǒ chī le.* |
| Numbers | one word per number up to 99; split after 百 / 千 / 万 and around 零; 第 joins its number | 二十五 → *èrshíwǔ*; 一百零五 → *yìbǎi líng wǔ*; 第二 → *dì'èr* |
| Capitals | proper names always (*Běijīng*, *Wáng Míng*, *Zhōngwén*); the first letter of a **sentence**, i.e. a text that ends in 。？！ | 你好！ → *Nǐ hǎo!*; 你好 → *nǐ hǎo* |
| Punctuation | 。？！，、：； become `. ? ! , , : ;` attached to the word before; quotes and brackets dropped | 服务员，买单！ → *Fúwùyuán, mǎidān!* |
| Apostrophe | ASCII `'` before a syllable that starts with a, o or e inside a word | 西安 → *Xī'ān*; 女儿 → *nǚ'ér*; 可爱 → *kě'ài* |
| ü | written **ü** (with its tone: *lǜ*, *nǚ*); after j, q, x, y it is written u (*qù*, *xué*, *yú*) as in standard pinyin | 绿茶 → *lǜchá*; 去 → *qù* |
| Tone marks | on a or e if present; on o in ou; otherwise on the last vowel (*duì*, *liù*) | 对 → *duì*; 六 → *liù* |
| Neutral tone | no mark; the list says which syllables are neutral | 谢谢 → *xièxie*; 朋友 → *péngyou* |
| Erhua | written with the r on the syllable: 哪儿 *nǎr*, 一点儿 *yìdiǎnr*, 玩儿 *wánr*; 儿 alone is *ér* only in words (儿子 *érzi*) | 这儿 → *zhèr* |
| **Tone changes: the one rule** | **一 and 不 are written with the tone you say; every other syllable keeps its dictionary tone, including third tone before third tone.** | 不是 *bú shì*; 不好 *bù hǎo*; 一个 *yí ge*; 一起 *yìqǐ*; 你好 *nǐ hǎo* (said *ní hǎo*) |

**The 一 and 不 details** (all applied by the generator):
- 不 before a fourth tone → *bú* (*bú shì*, *bú kèqi*, *bú yào*). In a verb-not-verb question it is neutral (*shì bu shì*, *qù bu qù*, *xǐhuan bu xǐhuan*). In listed words it can be neutral (*duìbuqǐ*, *chàbuduō*, *tīng bu dǒng*).
- 一 before a fourth tone → *yí* (*yí ge*, *yíxià*, *yíwàn*); before a first, second or third tone → *yì* (*yì bēi*, *yì zhāng*, *yìqǐ*, *yìbǎi*). It stays *yī* alone, in counting (*yī, èr, sān*), after another number (*shíyī*), after 第 (*dìyī*), in dates (*yīyuè yī hào*) and in 一点 "one o'clock" (*yī diǎn*). Between a doubled verb it is neutral (*kàn yi kàn*).
- 个 is written neutral (*ge*) but counts as fourth tone for the rule: *yí ge*. (The Chinese Grammar Wiki writes *gè*; this course writes *ge*, as said.)

**Why spoken 一 / 不 but dictionary third tone:** 一 and 不 change by rules with exceptions (ordinals, dates, counting) that a beginner cannot see from the characters, and they are among the first words learned; the voice says them changed, so the aid should agree with the voice. Third-tone sandhi is one rule with no exceptions, taught in `tone-change`, and writing it would hide the dictionary tone of very common words (你, 我, 好, 很) and invite the over-application Yang (2016) found. This is the convention of many US textbooks [curriculum convention, reported by YellowBridge as varying; not checked against a textbook, §11].

**What the aid does not show** (taught in `pinyin` and card notes): aspiration (b / p, d / t, g / k, z / c, zh / ch, j / q); the buzzing vowel of *zi ci si zhi chi shi ri*; *e* = "uh"; *ian* = "yen"; *ui* = "way"; *iu* = "yo"; *un* after j q x y = *ün*; the half third tone (low, not dipping) before other tones.

### 6.3 `pronPattern`

Built by `respell.js`'s `pattern()` from the same tables (initial + final with the tone mark on the right vowel, optional erhua *r*, apostrophe before a, o, e inside a word, capital letter only at the start of a word). Shape:

```
^(?=…a tone mark somewhere…|single neutral particle)WORD[,.?!:;]?(?: WORD[,.?!:;]?)*$
WORD = FIRST-SYLLABLE (may be capitalised) + NEXT-SYLLABLE* (lowercase; vowel-initial ones need the apostrophe)
```

Full string (2,998 characters; in `profile.json`; works with and without the `u` flag, so both `validate.js` and `repron.js` can use it):

```
^(?=[^\n]*[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜĀÁǍÀĒÉĚÈŌÓǑÒ]|(?:ma|ne|ba|le|de|a|zhe|guo|men|ge)[.?!]?$)(?:(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])(?:i[aāáǎà]ng|i[oōóǒò]ng|u[aāáǎà]ng|[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|i[aāáǎà]o|i[aāáǎà]n|[iīíǐì]ng|u[aāáǎà]i|u[aāáǎà]n|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|i[aāáǎà]|i[eēéěè]|i[uūúǔù]|[iīíǐì]n|u[aāáǎà]|u[oōóǒò]|u[iīíǐì]|[uūúǔù]n|ü[eēéěè]|u[eēéěè]|[aāáǎà]|[oōóǒò]|[eēéěè]|[iīíǐì]|[uūúǔù]|[üǖǘǚǜ])r?|(?:Zh|Ch|Sh|[BPMFDTNLGKHJQXRZCSYW])(?:i[aāáǎà]ng|i[oōóǒò]ng|u[aāáǎà]ng|[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|i[aāáǎà]o|i[aāáǎà]n|[iīíǐì]ng|u[aāáǎà]i|u[aāáǎà]n|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|i[aāáǎà]|i[eēéěè]|i[uūúǔù]|[iīíǐì]n|u[aāáǎà]|u[oōóǒò]|u[iīíǐì]|[uūúǔù]n|ü[eēéěè]|u[eēéěè]|[aāáǎà]|[oōóǒò]|[eēéěè]|[iīíǐì]|[uūúǔù]|[üǖǘǚǜ])r?|(?:[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|[aāáǎà]|[oōóǒò]|[eēéěè])r?|(?:[AĀÁǍÀ]ng|[EĒÉĚÈ]ng|[OŌÓǑÒ]ng|[AĀÁǍÀ]i|[EĒÉĚÈ]i|[AĀÁǍÀ]o|[OŌÓǑÒ]u|[AĀÁǍÀ]n|[EĒÉĚÈ]n|[EĒÉĚÈ]r|[AĀÁǍÀ]|[OŌÓǑÒ]|[EĒÉĚÈ])r?)(?:(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])(?:i[aāáǎà]ng|i[oōóǒò]ng|u[aāáǎà]ng|[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|i[aāáǎà]o|i[aāáǎà]n|[iīíǐì]ng|u[aāáǎà]i|u[aāáǎà]n|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|i[aāáǎà]|i[eēéěè]|i[uūúǔù]|[iīíǐì]n|u[aāáǎà]|u[oōóǒò]|u[iīíǐì]|[uūúǔù]n|ü[eēéěè]|u[eēéěè]|[aāáǎà]|[oōóǒò]|[eēéěè]|[iīíǐì]|[uūúǔù]|[üǖǘǚǜ])r?|'(?:[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|[aāáǎà]|[oōóǒò]|[eēéěè])r?)*[,.?!:;]?(?: (?:(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])(?:i[aāáǎà]ng|i[oōóǒò]ng|u[aāáǎà]ng|[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|i[aāáǎà]o|i[aāáǎà]n|[iīíǐì]ng|u[aāáǎà]i|u[aāáǎà]n|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|i[aāáǎà]|i[eēéěè]|i[uūúǔù]|[iīíǐì]n|u[aāáǎà]|u[oōóǒò]|u[iīíǐì]|[uūúǔù]n|ü[eēéěè]|u[eēéěè]|[aāáǎà]|[oōóǒò]|[eēéěè]|[iīíǐì]|[uūúǔù]|[üǖǘǚǜ])r?|(?:Zh|Ch|Sh|[BPMFDTNLGKHJQXRZCSYW])(?:i[aāáǎà]ng|i[oōóǒò]ng|u[aāáǎà]ng|[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|i[aāáǎà]o|i[aāáǎà]n|[iīíǐì]ng|u[aāáǎà]i|u[aāáǎà]n|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|i[aāáǎà]|i[eēéěè]|i[uūúǔù]|[iīíǐì]n|u[aāáǎà]|u[oōóǒò]|u[iīíǐì]|[uūúǔù]n|ü[eēéěè]|u[eēéěè]|[aāáǎà]|[oōóǒò]|[eēéěè]|[iīíǐì]|[uūúǔù]|[üǖǘǚǜ])r?|(?:[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|[aāáǎà]|[oōóǒò]|[eēéěè])r?|(?:[AĀÁǍÀ]ng|[EĒÉĚÈ]ng|[OŌÓǑÒ]ng|[AĀÁǍÀ]i|[EĒÉĚÈ]i|[AĀÁǍÀ]o|[OŌÓǑÒ]u|[AĀÁǍÀ]n|[EĒÉĚÈ]n|[EĒÉĚÈ]r|[AĀÁǍÀ]|[OŌÓǑÒ]|[EĒÉĚÈ])r?)(?:(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])(?:i[aāáǎà]ng|i[oōóǒò]ng|u[aāáǎà]ng|[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|i[aāáǎà]o|i[aāáǎà]n|[iīíǐì]ng|u[aāáǎà]i|u[aāáǎà]n|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|i[aāáǎà]|i[eēéěè]|i[uūúǔù]|[iīíǐì]n|u[aāáǎà]|u[oōóǒò]|u[iīíǐì]|[uūúǔù]n|ü[eēéěè]|u[eēéěè]|[aāáǎà]|[oōóǒò]|[eēéěè]|[iīíǐì]|[uūúǔù]|[üǖǘǚǜ])r?|'(?:[aāáǎà]ng|[eēéěè]ng|[oōóǒò]ng|[aāáǎà]i|[eēéěè]i|[aāáǎà]o|[oōóǒò]u|[aāáǎà]n|[eēéěè]n|[eēéěè]r|[aāáǎà]|[oōóǒò]|[eēéěè])r?)*[,.?!:;]?)*$
```

What it enforces: only pinyin letters, ü and the tone-marked vowels; tone mark on the right vowel of each final; at most one mark per syllable; single spaces; punctuation only directly after a word; capitals only at the start of a word; an apostrophe only before a vowel-initial syllable; at least one tone mark in the line unless the line is a single neutral particle (*ma*, *ne*, *ba*, *le*, *de*, *ge*…). It rejects characters, tone numbers (*ni3 hao3*), toneless pinyin of more than one particle (*ni hao*), double spaces, Chinese punctuation, and *Xīān* without the apostrophe. It accepts *nǐhǎo* (it cannot know word breaks) and some impossible syllables (*bü*): the generator, not the pattern, is the guarantee.

Tested: all 1,008 list entries, the 117 sample strings of this profile and the 88-sentence test set pass; the negatives above fail.

### 6.4 Twenty worked examples (all generated and all pass `pronPattern`)

| # | Chinese | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | 你好 | `nǐ hǎo` | hello | two words; third tone + third tone written as dictionary tones |
| 2 | 你好！ | `Nǐ hǎo!` | Hello! | a sentence: capital and punctuation |
| 3 | 谢谢 | `xièxie` | thank you | neutral tone unmarked |
| 4 | 我是美国人。 | `Wǒ shì Měiguórén.` | I'm American. | nationality word as one word, capitalised |
| 5 | 不客气 | `bú kèqi` | you're welcome | 不 before a fourth tone → bú |
| 6 | 不好 | `bù hǎo` | not good | 不 before a third tone stays bù |
| 7 | 一个人 | `yí ge rén` | one person | 一 before 个 (fourth) → yí; measure word separate |
| 8 | 一杯咖啡 | `yì bēi kāfēi` | a cup of coffee | 一 before a first tone → yì |
| 9 | 一月一号 | `yīyuè yī hào` | January 1 | 一 in dates stays yī |
| 10 | 第一 | `dìyī` | first | after 第 it stays yī; 第 joins the number |
| 11 | 二十五块 | `èrshíwǔ kuài` | 25 yuan | 11–99 written as one word |
| 12 | 西安 | `Xī'ān` | Xi'an | apostrophe before a |
| 13 | 女儿 | `nǚ'ér` | daughter | ü with a tone mark; apostrophe before e |
| 14 | 去 | `qù` | to go | u after q is ü, written u |
| 15 | 哪儿 | `nǎr` | where | erhua: r on the syllable |
| 16 | 是不是 | `shì bu shì` | is it or not | 不 in verb-not-verb is neutral |
| 17 | 看一看 | `kàn yi kàn` | take a look | 一 between a doubled verb is neutral |
| 18 | 银行 | `yínháng` | bank | 行 read háng inside this word (alone: xíng) |
| 19 | 一只猫 | `yì zhī māo` | a cat | 只 after a number is the measure word zhī |
| 20 | 服务员，买单！ | `Fúwùyuán, mǎidān!` | Check, please! | comma kept; sentence capital |

### 6.5 Card front, and hiding the pinyin

- **Card front:** the characters, large. Under them, the pinyin line, **shown by default** for the whole A1 course: 25 lessons are not enough to read characters unaided, and the pinyin is how the learner links sound, tone and character.
- **Hideable:** a per-course setting "Pinyin: always / tap to reveal / off" (engine request 9, §10.7). Suggested prompt after lesson 20: "Reading characters well? Try hiding the pinyin." Heritage learners who read characters may switch it off from day one.
- **Lesson example rows** show the pinyin under the Chinese, with the same setting.
- **Practice items carry no pron** (PRACTICE-SPEC), with one exception for this course: sound-stage items whose answer *is* pinyin (§7, §10).

### 6.6 What lesson 1 (`pinyin`) must teach so the aid can be read

1. One character = one syllable; pinyin groups syllables into words, so *Měiguórén* is three characters.
2. Initials, with the letters that lie to English readers: b / p, d / t, g / k (no puff / puff), j q x, zh ch sh r, z c s.
3. Finals, with *e*, *ü*, *-i* after z c s zh ch sh r, *ian*, *ui*, *iu*, *un*; ü written u after j q x y.
4. The four tone marks and no mark (neutral); `tones` drills them with audio.
5. The apostrophe (*Xī'ān* is two syllables, *xiān* is one).
6. The aid is a crutch: listen first, and hide it once characters are familiar.

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things.
- **(a) Tones.** The tone makes the word: 妈 mā / 麻 má / 马 mǎ / 骂 mà; 买 mǎi / 卖 mài; 汤 tāng / 糖 táng; 问 wèn / 吻 wěn; plus the 一 / 不 changes.
- **(b) Chinese order.** When, where and adverbs (也, 都, 还, 不, 很) go **before the verb** (我明天在家吃饭; 我也去); the describer, owner or 的-phrase goes **before the noun** (我的朋友, 好朋友, 中文老师, 我昨天买的书); a counted or pointed-at noun takes a **measure word** between the number or 这 / 那 and the noun (三本书, 这杯茶, 两个人).

**Why these two.**
- Tones: the error documented for American learners (Yang 2016; JCLTA 1997, §4.1), present in every syllable from lesson 1, so it gives the four sound-stage lessons a hinge before any grammar exists. The JSON has no exemption field, so the rule must be reachable in every set.
- Order and measure words: the two most frequent structural errors of English speakers (§4.2–4.4; Peng 2021 on adverbial-headword and attributive-headword order; Rosmawati 2015 and DigMandarin on 个), and they occur in almost every sentence from lesson 5 on. Measure words are a placement-and-slot problem ("number + measure word + noun"), so they sit in the same strand as order.
- **Not chosen:**
  - **不 vs 没:** a choice of word, and lesson-bound (it needs a time context). It is the preferred "mixed neighbour" in the last two items of later sets instead (§8).
  - **是 before adjectives:** lesson-local (`adj`), and it becomes a Traps deck point.
  - **Tones alone:** character-only items cannot show a tone, so after the sound stage strand (a) could not be tested in `or` and `ty` items without filling every set with pinyin.

**How strand (a) stays alive after the sound stage.** Practice items are in characters, which do not show tones. So:
- In the four sound-stage lessons (`pinyin`, `tones`, `tone-change`, `characters`) the hinges are **pinyin items**: `or` tiles are pinyin syllables or words with a tone twin as the distractor; `ty` answers are typed pinyin with tone marks (accent bar, §10.3), marked `'!strict'`.
- **From lesson 5 on, every set's `mc` block includes at least one tone item**: "Which is the pinyin of 买 (to buy)?" with options *mǎi / mài / mái / māi*, or "Which word is *mài* (to sell)?" with character options. This is a writer rule, not a validator rule (`mc` items are not counted).
- PRACTICE-SPEC says "No romanization in practice items". For en-zh that is overridden in exactly these places: sound-stage items, and the tone `mc` item. Elsewhere practice stays in characters.

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least **2 `or` items** and **2 `ty` items** hinge on (a) or (b), and their `why` names it with a keyword. A 14-item set has 3 `or` and 3 `ty`, so two of each three.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`or`, strand (a):** the tiles are pinyin, and `x` holds a tone twin of a tile in `a` (same letters, different mark: *hǎo* → *hào*; *mǎi* → *mài*).
- **`or`, strand (b):** `a` puts a time word, place phrase or adverb before the verb, a describer before the noun, or number / 这 / 那 + measure word before the noun; and `x` holds a tile that only fits the English order or a wrong measure word (个 where 本 is needed; an extra 是 before an adjective counts only if the item is about 很 + adjective order, not by itself).
- **`ty`, strand (a):** the answer is pinyin with tone marks, the item is `'!strict'` (otherwise a toneless answer is "almost" and nothing is tested), and `x` holds a tone twin.
- **`ty`, strand (b):** `a[0]` contains time / place / adverb + verb, describer + noun, or number / 这 + measure word + noun; `x` holds the wrong measure word or a tile that rebuilds the English order. (The validator rejects an `x` word that can rebuild an accepted answer, so a misplaced-word distractor must not be a word of the answer: use a wrong measure word, 是, 在 in the wrong function, or an English-order filler such as 了.)
- **`fi` items** whose distractors are tone twins (pinyin fills) are `'!strict'`.

**Examples in the shorthand** (Chinese practice tiles are spaced by word, §10.4):

```
['or', 'Hello (pinyin)', 'nǐ hǎo', 'ní hào', 'nǐ has the third tone mark, and so does hǎo.']
['ty', 'Type the pinyin of 买 (to buy)', 'mǎi', 'third tone · use the accent bar', 'mài', '买 is mǎi with the third tone; mài (fourth tone) is to sell.', '!strict']
['or', 'I am going to Beijing tomorrow', '我 明天 去 北京', '了', 'Time goes before the verb: 我明天去北京.']
['or', 'three books', '三 本 书', '个', 'Books take the measure word 本.']
['ty', 'I work at a bank', '我 在 银行 工作|我在银行工作', '在 · 银行 · 工作 · where comes first', '是', 'Where it happens goes before the verb: 我在银行工作.']
['ty', 'two cups of tea', '两 杯 茶|两杯茶', '两 · 杯 · 茶', '个 二', 'Tea in a cup takes the measure word 杯; two before a measure word is 两.']
```

(The second answer in each `ty` list is the unspaced twin, needed until engine request 1 is built, §10.7.)

**Lessons where the rule is hardest, with two hinges each** (or / ty):
- `pinyin` (the four marks are introduced only as reading notation): or *nǐ hǎo* (x *ní*); *xièxie* (x *xiéxie*). ty "Type the pinyin of 你 (you)" → *nǐ* (x *ní*, strict); "Type the pinyin of 八 (eight)" → *bā* (x *bá*, strict). why: "nǐ has the third tone mark." / "八 is bā with the first tone: high and level."
- `tones`: or *mǎi* / *mài* sets: "to buy a horse (pinyin)" → *mǎi mǎ* (x *mài*); ty "Type the pinyin of 卖 (to sell)" → *mài* (x *mǎi*, strict). why: "卖 has the fourth tone: it falls."
- `tone-change`: or *bú shì* (x *bù*); *yí ge* (x *yī*). ty "Type the pinyin of 不客气" → *bú kèqi* (x *bù*, strict); "one person (characters)" → 一 个 人 (x 二) with why "A number needs a measure word before the noun: 一个人." — the first strand (b) item of the course.
- `characters`: ty "Type the pinyin of 好 (good)" → *hǎo* (x *hào*, strict); or "a good person" → 好 人 (x 是): "The describer goes before the noun: 好人."
- `greetings`: tone items with the greetings in pinyin (*nín hǎo* x *nīn*; *zàijiàn* x *zǎijiàn*), or strand (b) with 您贵姓 / 我叫 (no order hinge: avoid) → use "my Chinese teacher" 我 的 中文 老师 (x 是): "The describer goes before the noun."
- `pronouns`, `shi`: strand (b) through describer + noun (我朋友, 美国学生, 中文老师) and 也 before the verb (他也是学生).
- `ma`, `question-words`: time or place before the verb inside the question (你明天去吗？ 你在哪儿工作？), with the time word given in the hint.
- `numbers`: number + measure word + noun (两个人, x 二); 二十五块.
- `le`, `progress`, `serial`, `ba-bie`, `and-or`: time before the verb (我昨天去了超市; 我们明天去吧), place before the verb (他在家看电视), measure words in objects (我买了三个苹果).

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\b(?:first|second|third|fourth|neutral) tones?\b|\btone (?:marks?|pairs?|changes?)\b|\bmeasure words?\b|\bbefore the (?:verb|noun)\b
```

Use them like this:
- strand (a): a tone number + "tone" ("the third tone"), "tone mark", "tone pair", "tone change";
- strand (b): "before the verb", "before the noun", "measure word".

These are deliberately **not** keywords: bare "tone" ("a polite tone"), "word order" (it would count lines about question words), "before a noun" (so "是 goes before a noun" does not count), "comes first". All keywords are ASCII. Do not use them in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 45 of 45 as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| 买 (mǎi) has the third tone; 卖 (mài) has the fourth tone. | match | should match |
| nǐ has the third tone mark: nǐ hǎo. | match | should match |
| First tone: high and level, mā. | match | should match |
| Second tone rises, like a question in English: má. | match | should match |
| The neutral tone has no mark: xièxie. | match | should match |
| Fourth tone falls all the way down: shì. | match | should match |
| Tone change: 不 before a fourth tone is bú. | match | should match |
| Tone pair: third plus fourth, as in 很快. | match | should match |
| Check the tone mark on the a: hǎo. | match | should match |
| 一 before 个 takes the second tone: yí ge. | match | should match |
| Time goes before the verb: 我明天去. | match | should match |
| Place with 在 goes before the verb: 我在银行工作. | match | should match |
| Books take the measure word 本: 三本书. | match | should match |
| A number needs a measure word before the noun: 两个人. | match | should match |
| The describer goes before the noun: 我的朋友. | match | should match |
| 这 + measure word + noun: 这本书. | match | should match |
| Use 杯 as the measure word for a cup of something. | match | should match |
| Where it happens comes before the verb, not at the end. | match | should match |
| 的 links the describer, which comes before the noun. | match | should match |
| When and where both go before the verb: 我今天在家吃饭. | match | should match |
| Measure words: 张 for flat things like tickets. | match | should match |
| 两, not 二, before a measure word. | match | should match |
| 也 goes before the verb, not at the end like English too. | match | should match |
| Use 您 to be polite to an older person. | no match | should not match |
| 是 joins two nouns; adjectives take 很, not 是. | no match | should not match |
| 没 negates 有: 没有. | no match | should not match |
| 不 is for habits and the future; 没 for what did not happen. | no match | should not match |
| 吗 at the end turns a statement into a question. | no match | should not match |
| The question word stays where the answer goes. | no match | should not match |
| 了 shows the action is done. | no match | should not match |
| Chinese verbs never change for time. | no match | should not match |
| 和 joins nouns, not sentences. | no match | should not match |
| Use 还是 in questions, 或者 in statements. | no match | should not match |
| Say it in a polite tone with 请. | no match | should not match |
| Adjectives work like verbs: no 是. | no match | should not match |
| Word order: subject, verb, object, as in English. | no match | should not match |
| 呢 asks the same question back: 你呢? | no match | should not match |
| 吧 makes a suggestion: let's. | no match | should not match |
| 别 means don't. | no match | should not match |
| q sounds like the ch in cheese. | no match | should not match |
| The verb comes after the subject. | no match | should not match |
| Put 都 after the subject. | no match | should not match |
| Tones matter. | no match | should not match |
| 是 goes before a noun, never before an adjective. | no match | should not match |
| Answer with the verb, not with yes. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4 and §5):
- **Kept: all 25 items, in roadmap order.** Ids lose the `zh-` prefix; each appears exactly once in a `roadmap` field.
- **Renamed** (titles gain the English-speaker point or a gloss): `adj` "Adjectives with 很 (no 是)"; `bu-mei` "Negation: 不 and 没 (not, didn't)"; `progress` "在 and 正在: doing it right now"; `le` "了: done, and changed (not a past tense)"; `word-order` keeps its title; `a-not-a` "Verb-not-verb questions: 去不去"; `ye-dou` "也, 都, 还: also, all, still"; `ba-bie` "吧 and 别: let's, and don't"; `and-or` "和 and 还是: and, or". Sound lessons keep plain English titles.
- **Widened:**
  - `progress` also teaches plain 在 + verb (the common spoken form) beside 正在, because 在 is the same character learners met as "at" in `zai`.
  - `numbers` also teaches 二 / 两 and 块 / 元 / 毛 (§4.10).
  - `ba-bie` also teaches 请 and 麻烦你 for requests (§2.5), because "please" frames are what learners reach for when they want to soften a command.
- **Added (3)**, each with an empty `roadmap` field:
  - `greetings` (lesson 5, before `pronouns`): survival politeness, 您, names and forms of address (§2.3–2.5, §5 need 2). The roadmap starts grammar with no hello.
  - `food` (after `measure`): ordering and paying, where measure words are used at once (§5 need 3).
  - `family` (after `food`): family words, 几口人, age with 几岁 / 多大 (§5 need 4; heritage learners).
- **Stages:** the roadmap's four, unchanged in name. Stage 2 grows from 8 to 9 lessons; stage 3 from 5 to 7.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and script** | | | |
| 1 | `pinyin` | Pinyin: initials and finals | zh-pinyin | One character = one syllable; initials (b / p, d / t, g / k with and without a puff of air; j q x; zh ch sh r; z c s) and finals (e, ü, -i after z c s zh ch sh r, ian, ui, iu); ü written u after j q x y; how to read the aid, including the four tone marks as notation (§6.6). Trap: q, x, c, zh, e, ü read as in English. | Pinyin sounds |
| 2 | `tones` | Four tones and the neutral tone | zh-tones | High-level, rising, low-dipping, falling, and neutral; minimal sets 妈 麻 马 骂, 买 / 卖, 汤 / 糖; tone pairs (third + fourth: 很快); English question intonation must not override a tone. Trap: level tones everywhere and contours that do not reach full range (§4.1). | Tone pairs |
| 3 | `tone-change` | Tone changes: 不, 一, third tone | zh-tone-change | 不 → bú before a fourth tone; 一 → yí / yì, yī in counting and dates; third + third said second + third (你好 said ní hǎo but written nǐ hǎo, §6.2); the half third tone. First measure word in passing: 一个人 (yí ge rén). Trap: forgetting bú / yí; over-applying third-tone change (Yang 2016). | Tone pairs |
| 4 | `characters` | How characters work: strokes and radicals | zh-characters | Characters as meaning + sound; pictographs (人 口 木 山 日 月) and compounds (好 = 女 + 子, 明 = 日 + 月, 休, 林); radicals as hints (氵 water, 口 mouth, 亻 person, 女); stroke basics at recognition level only; simplified vs traditional in one line; the 300-character goal (§10.2). Trap: expecting an alphabet; trying to sound out radicals. | First characters |
| | | **Stage 2: First sentences** | | | |
| 5 | `greetings` | Hello, thank you, sorry: Chinese courtesy | (added) | 你好 / 您好, 谢谢 / 不客气, 对不起 / 没关系, 不好意思, 请问, 再见; 我叫…, 您贵姓？ 我姓…; 老师, 先生, 女士, 师傅, 服务员 (§2.4); when 您 (§2.3). Trap: 小姐 to call a server; 你好吗 as a casual "hi". | Greetings and courtesy |
| 6 | `pronouns` | Pronouns and 们 | zh-pronouns | 我 你 您 他 她 它; 们 for plural people (我们, 他们); no 们 after numbers (五个学生, not 学生们); 我朋友 / 我的朋友 for close relations. Trap: 他 / 她 sound the same (tā): the speaker says, not hears, the gender; 学生们 with a number (§4.4). | People and family |
| 7 | `shi` | 是: A is B | zh-shi | Noun + 是 + noun (我是美国人, 她是老师); 不是 (bú shì); nationality words (美国人, 中国人) and languages (中文, 英文); 是 never with adjectives (preview). Trap: 是 before an adjective; 我是二十五岁 (age takes no 是). | About me |
| 8 | `adj` | Adjectives with 很 (no 是) | zh-adj | Adjectives work like verbs: 我很忙, 他很高; 很 is often just glue, not "very"; 不 + adjective (不忙); 太…了 (太贵了); describer before the noun (好朋友, 很好的朋友). Trap: 他是高, 我是累 (§4.5). | Describing things |
| 9 | `ma` | Questions with 吗 and 呢 | zh-ma | Statement + 吗? (你是老师吗？); answers repeat the verb (是 / 不是, 忙 / 不忙), no word for yes and no; 你呢？ to ask back. Trap: rising English intonation instead of 吗; answering 是 to every question (§4.8). | Questions and connectors |
| 10 | `question-words` | Question words: 什么, 谁, 哪儿, 几 | zh-question-words | The question word stays where the answer goes (你叫什么名字？ 他是谁？ 你住哪儿？ 你有几个…？); 哪国人; no 吗 with a question word. Trap: 什么你想吃？; adding 吗 (§4.8). | Questions and connectors |
| 11 | `bu-mei` | Negation: 不 and 没 (not, didn't) | zh-bu-mei | 不 for states, habits, wishes and the future (我不喝酒, 我明天不去); 没 for 有 (没有) and for what did not happen (我昨天没去); no 了 after 没. Trap: 我不有, 他没喜欢, 我没去了 (§4.6). | Traps for English speakers |
| 12 | `de` | 的: possession and describing | zh-de | Owner + 的 + noun (我的书, 老师的手机); describer + 的 + noun (红色的车, 很贵的衣服); 的 dropped with family and close ties (我妈妈) and in fixed pairs (中国菜, 好朋友). Trap: English order (朋友我的, the book of my teacher); 白色狗 (§4.3). | Describing things |
| 13 | `you` | 有: have and there is | zh-you | 我有…; place + 有 + thing (桌子上有一本书, 附近有银行吗？); 没有; 有 vs 在 (preview of `zai`). Trap: 我不有; English order "there is a book on the table" → 有一本书在桌子 (§4 DigMandarin 16). | Shopping |
| | | **Stage 3: Numbers, time and place** | | | |
| 14 | `numbers` | Numbers and money | zh-numbers | 一 to 十, 十一 to 九十九, 一百, 零 in 一百零五; 二 vs 两 (两个, 两点); money: 块 / 元, 毛, 多少钱？, 二十五块; 几 for small numbers. Trap: 二个; 一百五 heard as 105 (§4.10). | Numbers and money |
| 15 | `measure` | Measure words: 个, 本, 杯 | zh-measure | Number / 这 / 那 / 哪 / 几 + measure word + noun; 个 (people, most things), 本 (books), 杯 (cups), 张 (tickets, tables, flat things), 件 (clothes), 只 (animals), 双 (pairs), 瓶, 碗; 这个 / 那个 alone as "this one". Trap: 三书, 这书, 个 for everything (§4.4; Rosmawati 2015). | Measure words |
| 16 | `food` | Ordering food and drinks | (added) | 我要… / 来一个… / 请给我…; 一碗面条, 两杯奶茶; 不要辣的, 微辣; 服务员！ 买单！ 打包; 好吃, 好喝. Trap: dropping the measure word (我要两奶茶); 小姐 to call the server; 我要 sounding blunt (§4.12). | Food and drink |
| 17 | `family` | Family and age | (added) | 爸爸 妈妈 哥哥 姐姐 弟弟 妹妹; 我家有四口人 (口 counts family members); 你几岁？ (children) / 你多大？ (adults) / 您多大年纪？ (recognition); 我有一个哥哥; 我妈妈 without 的. Trap: 二个哥哥; older and younger siblings are different words, there is no plain "brother". | People and family |
| 18 | `time` | Time and dates | zh-time | 现在几点？ 三点半, 两点十分, 差五分三点 (recognition); 今天 明天 昨天; 星期一 to 星期天; 年 月 号, big to small (十二月三号); time words before the verb (我明天去). Trap: day before month; time at the end of the sentence (§4.2, §4.10). | Time, days and dates |
| 19 | `zai` | 在: at, in, and location words | zh-zai | Thing + 在 + place (银行在哪儿？ 我在家); place + location word (桌子上, 房间里, 银行旁边, 超市对面); 在 + place before the verb (我在银行工作). Trap: 我工作在银行; 在桌子 without 上 (§4.2). | Around town and directions |
| 20 | `word-order` | Word order: who · when · where · verb | zh-word-order | The fixed line: who + when + where + how + verb + what (我明天在家吃饭; 我坐地铁去上班); big before small (十二月三号; 中国北京); time may also go first (明天我去). Trap: English order at the end of the sentence (§4.2; Peng 2021; Yoyo). | Time, days and dates |
| | | **Stage 4: Doing things** | | | |
| 21 | `want-can` | 想, 要, 会, 能: want and can | zh-want-can | 想 (would like, feel like), 要 (want, will, need to); 会 (know how to, learned: 我会说中文), 能 (able to, allowed: 你能来吗？), 可以 (may); 不想 / 不会 / 不能. Trap: 能 for a learned skill (DigMandarin 10); 我要 as a blunt order to a person. | Work and study |
| 22 | `le` | 了: done, and changed (not a past tense) | zh-le | Verb + 了 for a completed action (我买了三个苹果); sentence + 了 for a change (天气冷了, 我饿了); no 了 for past habits and states (我以前常常…); 没 + verb, no 了. Trap: 了 on every past verb (DigMandarin 18); 了 as "past tense" (§4.7). | Travel and transport |
| 23 | `progress` | 在 and 正在: doing it right now | zh-progress | 在 / 正在 + verb (+ 呢) for an action in progress (他在看电视, 我正在吃饭呢); 你在做什么？; not with 是. Trap: 我是吃 for "I am eating"; English -ing copied with 是 (§4.5). | Work and study |
| 24 | `serial` | Two verbs in a row: 去 + verb | zh-serial | 去 / 来 + place + verb (我去超市买东西); means + verb (坐地铁去, 骑自行车来); no "to" or "in order to" word. Trap: 我去买东西在超市; 为了 or 去 to for "to" (§4.2). | Around town and directions |
| 25 | `a-not-a` | Verb-not-verb questions: 去不去 | zh-a-not-a | 去不去？ 是不是？ 有没有？ 喜不喜欢 / 喜欢不喜欢; neutral 不 (qù bu qù); never with 吗. Trap: 你有没有书吗？ (DigMandarin 3). | Questions and connectors |
| 26 | `ye-dou` | 也, 都, 还: also, all, still | zh-ye-dou | 也 and 都 after the subject, before the verb (我也去; 我们都是美国人; 我们也都…); 还 (still, also: 我还没吃饭; 还要别的吗？). Trap: 也 at the end like "too"; 都 before the subject (都我们) (§4.2). | About me |
| 27 | `ba-bie` | 吧 and 别: let's, and don't | zh-ba-bie | Sentence + 吧 for a suggestion or a soft order (我们走吧, 你试试吧); 别 + verb (别担心, 别走); 不要 + verb; 请 + verb (请坐, 请进), 麻烦你…. Trap: bare commands that sound rude; 别 and 吧 mixed (别走吧 is fine; 吧别 is not). | Health and help |
| 28 | `and-or` | 和 and 还是: and, or | zh-and-or | 和 joins nouns (我和我朋友; 茶和咖啡), not sentences; 还是 in questions (茶还是咖啡？), 或者 in statements (星期六或者星期天); 我和他一起去. Trap: 和 between clauses (DigMandarin 1); 或者 in a question (§4.9). | Food and drink |

Per-lesson notes for writers:
- Every set satisfies §7: two `or` and two `ty` hinges, and from lesson 5 on one tone `mc` item.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: 不 / 没, 是 against 很, a measure word, 两 / 二.
- `ty` prompts that say "you" follow §2.3: cue the listener or list 你 and 您.
- Accepted answers list the natural variants: with and without 的 where both are natural (我朋友 | 我的朋友), with and without the subject when the prompt's context gives it, 在 and 正在 in `progress`, 两点 and 两点钟.
- Lesson bodies are in English with the Chinese in `<b>` and the pinyin in `<i>` at first mention (§2.6). Example rows `{{ex:Chinese|pron|English}}` take the generated pron.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards). Card shape: `target | pron | meaning | note`.
- `target`: Chinese in simplified characters, no spaces, full-width punctuation for sentences; nouns with their measure word where natural (一本书, 一杯茶).
- `pron`: generated (§6). Never typed.
- `meaning`: short American English.
- `note`: one English line, or empty. Taiwan forms, tone notes and traps go here.

**Groups, in order:**

| Group | Decks |
|---|---|
| Sounds and script | Pinyin sounds · Tone pairs · First characters |
| First steps | Greetings and courtesy · People and family · About me |
| Everyday words | Numbers and money · Measure words · Food and drink · Shopping · Time, days and dates |
| Out and about | Around town and directions · Travel and transport · Work and study · Health and help |
| Conversation | Describing things · Questions and connectors · Traps for English speakers |

**Script decks work as ordinary decks** (no letter-drill machine needed, §10.1): every card's target is a real character or word the voice can read, the pron shows the pinyin, and the note names the sound point. Rules:
- **Pinyin sounds** (about 18 cards): one character for each initial or final that misleads (b, p, d, t, g, k, j, q, x, zh, ch, sh, r, z, c, s, e, ü, -i). Prefer characters the course uses later (八, 去, 四, 是, 日, 绿, 女, 鱼, 热, 喝, 菜, 字, 吃, 谢, 七, 中, 二, 六).
- **Tone pairs** (about 18): each card is one member of a set, and its note names the others. Meanings must differ clearly. Sets: 妈 麻 马 骂; 买 卖; 汤 糖; 问 吻 (the classic "ask / kiss" trap); 八 拔 把 爸; 七 起 气; 烟 盐 眼; 书 熟; 有 又; 笑 小; 十 四 (sh / s); 晴 请. Avoid single characters with several readings (行, 长, 还) as targets: the voice may pick the other one.
- **First characters** (about 18): pictographs and two-part compounds whose story helps (人 口 木 林 山 日 月 明 女 子 好 休 大 小 中 上 下 门 雨 火 水 心 手). Notes name the parts; radicals are named in notes only (a lone radical such as 氵 is not a card: the voice cannot read it).
- **Traps for English speakers** (about 18): about 6 是 / 很 and calque cards (我很高兴, 我很累, 我二十五岁, 我饿了); about 6 negation and number cards (我没去, 我不喝酒, 两个人, 两点); about 6 politeness and false-friend cards (服务员, 吃了吗？, 你好 vs 你好吗？, 小姐 (note: not for calling anyone), 东西 dōngxi "thing", 老外).
- Phrases with "you" say who is addressed when it matters, in the meaning ("(polite)", "(to a driver)").
- Within a deck no two cards share a meaning (validator); in Tone pairs and Pinyin sounds that is easy, because every character means something different.
- Everything in Traps and in the politeness notes is [inference] plus the practitioner sources in §2.4 and §4, so it is in the native-check list (§11).

**Five sample cards per deck** (all `pron` values generated by `respell.js` and checked against `pronPattern`):

**1. Pinyin sounds** (Sounds and script). One character per sound point: the initials and finals that English readers misread (b / p, j q x, zh ch sh r, z c s, e, ü, -i). Lessons: `pinyin`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 八 | bā | eight | b has no puff of air. To English ears it can sound halfway between b and p. |
| 怕 | pà | to be afraid | p has a strong puff of air, as in English "pie". |
| 去 | qù | to go | q sounds like the ch in "cheese". After q, u is really ü. |
| 绿 | lǜ | green | ü: say "ee" and round your lips. Written with the dots after l and n. |
| 日 | rì | sun; day | r here is like the s in "measure"; the vowel just buzzes. Not "ree". |

**2. Tone pairs** (Sounds and script). Same syllable, different tone, different word: 妈 麻 马 骂, 买 / 卖, 汤 / 糖, 问 / 吻. Lessons: `tones`, `tone-change`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 妈 | mā | mom (as in 妈妈) | First tone: high and level, as if singing one note. |
| 马 | mǎ | horse | Third tone: low. Said alone it dips and rises; before another tone it stays low. |
| 骂 | mà | to scold | Fourth tone: falls sharply, like a firm "No!" |
| 买 | mǎi | to buy | Third tone. Same letters as 卖 (mài, to sell): the tone changes the deal. |
| 卖 | mài | to sell | Fourth tone: it falls. Mix up 买 and 卖 and you swap buyer and seller. |

**3. First characters** (Sounds and script). Pictures and compounds to recognise: 人 口 木 山 日 月 女 子 好 明 休 林. Lessons: `characters`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 人 | rén | person | Looks like a person walking: two legs. |
| 口 | kǒu | mouth | Also the measure word for family members: 四口人. |
| 木 | mù | tree; wood | Two trees make 林 (woods), three make 森 (forest). |
| 好 | hǎo | good | 女 (woman) + 子 (child). |
| 明 | míng | bright | 日 (sun) + 月 (moon). In 明天 it means "next" (tomorrow). |

**4. Greetings and courtesy** (First steps). Hello, thank you, sorry, goodbye, and the polite 您. Lessons: `greetings`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 你好！ | Nǐ hǎo! | Hello! | Safe with anyone. To an older person or a customer: 您好！ |
| 您好！ | Nín hǎo! | Hello! (polite) | 您 is the polite "you": for older people, teachers and customers. |
| 谢谢！ | Xièxie! | Thank you! | Among family and close friends Chinese says thank you less than English does. |
| 不客气。 | Bú kèqi. | You're welcome. | Literally "don't be polite". bú, because 客 has the fourth tone. |
| 没关系。 | Méi guānxi. | That's OK. / No problem. | The answer to 对不起 (sorry). |

**5. People and family** (First steps). Pronouns, family members and friends, and how to count a family. Lessons: `pronouns`, `family`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 妈妈 | māma | mom | The second 妈 has the neutral tone: māma. |
| 哥哥 | gēge | older brother | There is no word for just "brother": older is 哥哥, younger is 弟弟. |
| 妹妹 | mèimei | younger sister | Older sister: 姐姐. |
| 朋友 | péngyou | friend | 我朋友 and 我的朋友 both mean "my friend". |
| 我家有四口人。 | Wǒ jiā yǒu sì kǒu rén. | There are four people in my family. | 口 is the measure word for family members. |

**6. About me** (First steps). Name, nationality, age, where you live and what you study. Lessons: `shi`, `ye-dou`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 我叫安娜。 | Wǒ jiào Ānnà. | My name is Anna. | 叫 = to be called. Chinese names put the family name first. |
| 我是美国人。 | Wǒ shì Měiguórén. | I'm American. | Country + 人 (person): 美国人, 中国人. |
| 我住在纽约。 | Wǒ zhù zài Niǔyuē. | I live in New York. | 在 + place comes after 住 (live): this verb is the exception. |
| 我今年二十五岁。 | Wǒ jīnnián èrshíwǔ suì. | I'm 25 this year. | No 是 and no "years old" verb: just the number + 岁. |
| 您贵姓？ | Nín guìxìng? | What's your surname? (polite) | Answer 我姓王 (my surname is Wang), not 我贵姓. |

**7. Numbers and money** (Everyday words). Numbers to 100 and beyond, 二 and 两, prices in 块. Lessons: `numbers`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 两 | liǎng | two (before a measure word) | 两个人, 两杯茶. Counting and in bigger numbers: 二 (十二, 二十). |
| 十五 | shíwǔ | fifteen | Ten + five. Fifty is 五十: five tens. |
| 一百 | yìbǎi | one hundred | 一百五 is 150, short for 一百五十. 105 is 一百零五. |
| 多少钱？ | Duōshao qián? | How much is it? | Use 几 for small numbers you expect to be under ten. |
| 二十五块 | èrshíwǔ kuài | 25 yuan | 块 in speech, 元 on price tags. |

**8. Measure words** (Everyday words). Number or this / that + measure word + noun: 个, 本, 杯, 张, 件, 只, 双. Lessons: `measure`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 一个人 | yí ge rén | one person; a person | 个 is the all-purpose measure word, but many nouns have their own. |
| 三本书 | sān běn shū | three books | 本 for books and notebooks. Not 三书. |
| 一杯咖啡 | yì bēi kāfēi | a cup of coffee | 杯 for cups and glasses: 一杯水, 两杯茶. |
| 两张票 | liǎng zhāng piào | two tickets | 张 for flat things: tickets, tables, photos, paper. |
| 一只猫 | yì zhī māo | a cat | 只 (zhī) for most animals. The same character read zhǐ means "only". |

**9. Food and drink** (Everyday words). Dumplings, noodles, tea and coffee, and ordering and paying in a restaurant. Lessons: `food`, `and-or`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 饺子 | jiǎozi | dumplings | Northern family food, eaten at Chinese New Year. |
| 一碗面条 | yì wǎn miàntiáo | a bowl of noodles | 碗 (bowl) is the measure word. |
| 我要一杯奶茶。 | Wǒ yào yì bēi nǎichá. | I'd like a milk tea. | 我要 is normal when ordering; 请给我 is softer. |
| 不要辣的。 | Bú yào là de. | Not spicy, please. | Literally "don't want the spicy kind". A little spicy: 微辣. |
| 服务员，买单！ | Fúwùyuán, mǎidān! | Check, please! | Call the server 服务员, never 小姐. |

**10. Shopping** (Everyday words). Prices, sizes, haggling a little, and paying by phone. Lessons: `you`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 太贵了！ | Tài guì le! | That's too expensive! | 太 + adjective + 了: too. |
| 便宜一点儿吧。 | Piányi yìdiǎnr ba. | Could you make it a bit cheaper? | Fine in markets, not in malls or supermarkets. |
| 可以扫码吗？ | Kěyǐ sǎomǎ ma? | Can I pay by scanning a code? | Most shops in China are paid by phone: you scan the shop's code. |
| 有大号的吗？ | Yǒu dàhào de ma? | Do you have it in a large? | Sizes: 大号, 中号, 小号. |
| 我看看。 | Wǒ kànkan. | I'm just looking. | Literally "I'll look a little": a doubled verb softens it. |

**11. Time, days and dates** (Everyday words). Clock time, days of the week, dates, today and tomorrow. Lessons: `time`, `word-order`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 明天 | míngtiān | tomorrow | Time words go before the verb: 我明天去. |
| 星期一 | xīngqīyī | Monday | Weekday = 星期 + number; Sunday is 星期天 or 星期日. |
| 现在几点？ | Xiànzài jǐ diǎn? | What time is it now? | 点 = o'clock. Two o'clock is 两点, not 二点. |
| 三点半 | sān diǎn bàn | half past three | 半 = half. |
| 十二月三号 | shí'èryuè sān hào | December 3 | Month first, then day: big to small. In writing 日 often replaces 号. |

**12. Around town and directions** (Out and about). Where things are, left and right, and asking the way. Lessons: `zai`, `serial`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 洗手间在哪儿？ | Xǐshǒujiān zài nǎr? | Where's the restroom? | Thing + 在 + 哪儿. Also 厕所 (more direct). |
| 往前走 | wǎng qián zǒu | go straight ahead | Also 一直走. |
| 左拐 | zuǒ guǎi | turn left | Right: 右拐. |
| 银行在超市旁边。 | Yínháng zài chāoshì pángbiān. | The bank is next to the supermarket. | The place word comes after its noun: 超市旁边. |
| 附近有地铁站吗？ | Fùjìn yǒu dìtiězhàn ma? | Is there a subway station nearby? | Place first, then 有: "nearby has…". |

**13. Travel and transport** (Out and about). Taxis, the subway, high-speed trains, tickets and hotels. Lessons: `le`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 出租车 | chūzūchē | taxi | In Taiwan: 計程車. Most people now book rides on an app. |
| 地铁 | dìtiě | subway | Pay with your phone or a transit card. |
| 师傅，去机场。 | Shīfu, qù jīchǎng. | To the airport, please. (to a driver) | 师傅 is the polite way to address a driver. |
| 我坐高铁去上海。 | Wǒ zuò gāotiě qù Shànghǎi. | I'm taking the high-speed train to Shanghai. | How you travel goes before 去: 坐高铁去. |
| 一张去西安的票 | yì zhāng qù Xī'ān de piào | a ticket to Xi'an | The destination describes the ticket, so it comes before 票 with 的. |

**14. Work and study** (Out and about). Jobs, school, learning Chinese, and what you can do. Lessons: `want-can`, `progress`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 老师 | lǎoshī | teacher | Also how you address your teacher: 王老师, or just 老师. |
| 学生 | xuésheng | student | College student: 大学生. |
| 我在银行工作。 | Wǒ zài yínháng gōngzuò. | I work at a bank. | Where you work goes before 工作. |
| 你做什么工作？ | Nǐ zuò shénme gōngzuò? | What do you do (for work)? | Literally "you do what work?" |
| 我会说一点儿中文。 | Wǒ huì shuō yìdiǎnr Zhōngwén. | I can speak a little Chinese. | 会 for a skill you learned. |

**15. Health and help** (Out and about). Feeling sick, the pharmacy, the doctor, and asking for help. Lessons: `ba-bie`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 我不舒服。 | Wǒ bù shūfu. | I don't feel well. | Where does it hurt? 你哪儿不舒服？ |
| 我头疼。 | Wǒ tóuténg. | I have a headache. | Body part + 疼: 肚子疼 (stomachache). |
| 我感冒了。 | Wǒ gǎnmào le. | I have a cold. | 了 here shows a change: I've caught a cold. |
| 药店 | yàodiàn | pharmacy | 药 = medicine. |
| 救命！ | Jiùmìng! | Help! | For emergencies only. For everyday help: 请帮我一下. |

**16. Describing things** (Conversation). Adjectives for people, food, weather and things, with 很 and 太. Lessons: `adj`, `de`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 大 | dà | big | Also "old" for age: 你多大？ (how old are you?) |
| 小 | xiǎo | small; young | 小王: a friendly way to call a younger person named Wang. |
| 这个很好吃。 | Zhège hěn hǎochī. | This is delicious. | 好吃 = good to eat; 好喝 = good to drink. |
| 今天很冷。 | Jīntiān hěn lěng. | It's cold today. | No 是 before an adjective; 很 is often just glue, not "very". |
| 她很高。 | Tā hěn gāo. | She's tall. | Not 她是高. |

**17. Questions and connectors** (Conversation). Question words, 吗 and 呢, verb-not-verb, and the words that join ideas. Lessons: `ma`, `question-words`, `a-not-a`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 什么？ | Shénme? | What? | In a sentence it stays where the answer goes: 你吃什么？ |
| 谁？ | Shéi? | Who? | Also said shuí. |
| 你呢？ | Nǐ ne? | And you? | Asks the same question back. |
| 茶还是咖啡？ | Chá háishi kāfēi? | Tea or coffee? | 还是 for "or" in a question. |
| 但是 | dànshì | but | Often paired with 虽然 (although) later on; at A1 it stands alone. |

**18. Traps for English speakers** (Conversation). False friends, calques, 是 with adjectives, 不 and 没, 二 and 两, and polite-sounding mistakes. Lessons: `bu-mei`.

| Chinese | `pron` | Meaning | Note |
|---|---|---|---|
| 我很高兴。 | Wǒ hěn gāoxìng. | I'm happy. / I'm glad. | Not 我是高兴: adjectives take 很, not 是. |
| 我没去。 | Wǒ méi qù. | I didn't go. | 没 for what did not happen, with no 了: not 我没去了. (我不去了 means "I'm not going any more".) |
| 两个人 | liǎng ge rén | two people | 两 before a measure word, never 二个人. |
| 服务员！ | Fúwùyuán! | Excuse me! (calling a server) | Not 小姐, which now suggests a sex worker in the mainland. |
| 吃了吗？ | Chī le ma? | Have you eaten? (a greeting) | A friendly hello among people who know each other, not an invitation. |

**Localisation** (examples, dialogues, practice). Every item below was run through `respell.js`.
- **Names:**
  - Chinese characters (family name first): 王明 *Wáng Míng*, 李娜 *Lǐ Nà*, 张伟 *Zhāng Wěi*, 刘洋 *Liú Yáng*, 陈静 *Chén Jìng*, 赵丽 *Zhào Lì*; friendly forms 小王 *Xiǎo Wáng*, 小李, 小张, 小陈; with titles 王老师 *Wáng lǎoshī*, 王先生 *Wáng xiānsheng*, 李女士 *Lǐ nǚshì*, 陈医生, 王阿姨, 李叔叔.
  - The American learner characters have Chinese names, so no Latin letters enter Chinese strings: 安娜 *Ānnà* (Anna) and 马克 *Mǎkè* (Mark). In English prompts they are Anna and Mark. No celebrities.
- **Places:**
  - China: 北京 *Běijīng*, 上海 *Shànghǎi*, 西安 *Xī'ān*, 成都 *Chéngdū*, 广州 *Guǎngzhōu*, 深圳, 杭州 *Hángzhōu*, 南京, 香港 *Xiānggǎng* (note: Cantonese is spoken there); sights 长城 *Chángchéng*, 故宫 *Gùgōng*, 天安门 *Tiān'ānmén*, 外滩 *Wàitān*, 兵马俑 *Bīngmǎyǒng*.
  - US places in Chinese where a learner says where they live: 纽约 *Niǔyuē*, 旧金山 *Jiùjīnshān*, 洛杉矶 *Luòshānjī*, 芝加哥, 西雅图. Otherwise US places stay in English prompts.
- **Food:** 饺子, 包子, 小笼包, 面条, 米饭, 炒饭, 火锅, 北京烤鸭, 麻婆豆腐, 宫保鸡丁, 豆浆, 茶 (绿茶, 红茶), 奶茶, 咖啡, 啤酒, 水 (冰水 is not standard in restaurants: card note).
- **Money:** 人民币; 块 in speech, 元 in writing and on signs, 毛 (ten cents, recognition). Written in characters in Chinese strings (二十五块). Plausible prices [inference]: a bowl of noodles 十五 to 三十块, a coffee 二十 to 三十五块, a subway ride 三 to 五块, a taxi start 十几块.
- **Paying:** scanning a code (扫码) with a phone; no app or brand names in cards (微信 appears only as "WeChat" in a note, if at all).
- **Measures and dates:** year, month, day (big to small); kilometres (公里), kilograms and 斤 (half a kilo, markets); degrees Celsius; the 24-hour clock only for timetables.
- **Settings:** a noodle shop, a dumpling stall, a café, a market, a supermarket, a taxi or ride app, the subway, a high-speed train to Xi'an, a hotel front desk, a pharmacy, a university class with 王老师, a family dinner with grandparents (for heritage learners).

## 10. Typing and script

### 10.1 The script stage (works with ordinary lessons and decks)

Stage 1 is four lessons and three decks, all ordinary: nothing depends on the Korean letter-drill machine.

| Lesson | Deck | What the learner can do after it |
|---|---|---|
| `pinyin` | Pinyin sounds | read any pinyin syllable aloud roughly right; knows the letters that lie (q x c zh e ü -i) |
| `tones` | Tone pairs | hear and say the four tones and the neutral tone on single syllables and on two-syllable pairs |
| `tone-change` | Tone pairs | say 不 and 一 with the right tone, and third + third as second + third |
| `characters` | First characters | recognise about 25 basic characters and see how compounds and radicals work |

- Tone pairs are drilled as normal cards: the front shows the character and its pinyin, the voice says it, the meaning on the back differs for each tone. The deck typing quiz on Tone pairs asks for the meaning (English), which already forces the tone to be heard.
- **If the letter-drill machine is generalised** (request 10, §10.7), the same three decks gain drills: "hear a syllable, tap its tone" (Tone pairs), "hear a syllable, tap its initial" (Pinyin sounds). Nothing in the lessons changes.

### 10.2 Characters: how many, and how

- **Goal:** recognise about **300 characters** by the end of the course, the HSK 3.0 Band 1 character count (§5). The decks and examples will contain roughly 350–450 different characters; the learner is not expected to know them all.
- **Recognition only.** No handwriting, no stroke-order drills (HSK 3.0 Band 1 asks for 100 handwritten characters; this app has no handwriting input). `characters` teaches strokes and radicals so that learners can see the parts and look characters up, not to write them.
- **Introduction:** every card and example shows characters with pinyin under them (§6.5). New characters arrive with the vocabulary (about 10–15 per lesson); the First characters deck gives the pictograph and compound stories once.
- **Simplified vs traditional:** one line in `characters`, and Taiwan forms in card notes (§2.1). Traditional characters are never targets or accepted answers.

### 10.3 What a typed answer is

**Default: word tiles.** en-zh uses the existing per-course "tiles by default" setting (on). In tiles mode:
- `mc` and `order` are unchanged;
- `fill` becomes a 4-option tap (the answer + 3 distractors);
- `type` becomes tiles built from `a[0]` split on spaces plus `x`, so **`a[0]` is always written with spaces between words** (§10.4).

**Typing is optional**, through the existing "use tiles" switch:
- **Characters through a Chinese keyboard.** iOS and Android ship a "Chinese (Simplified) – Pinyin" keyboard; Windows and macOS ship pinyin input methods [inference]. The learner types pinyin and picks characters. This is the normal way Chinese is typed, and it also trains character recognition. The answer arrives with no spaces.
- **Pinyin on an English keyboard.** Today this works only where the answer *is* pinyin (sound-stage items and pinyin `fill` / `ty` items): the accent bar (`keys`: `ü` plus the four combining tone marks U+0304, U+0301, U+030C, U+0300) inserts a mark after the vowel; NFC composes it (a + ˇ → ǎ; ü + ˇ → ǚ; checked in node). With `accents: true`, an answer that differs only in tone marks (or ü typed as u) is "almost", unless the item is `'!strict'`. Tone numbers (*ni3 hao3*) are not understood yet (request 4).
- **Pinyin for a character answer** (typing *wo shi meiguoren* for 我是美国人) is not possible yet: practice items carry no pinyin. Request 3 asks the pipeline to attach the generated pinyin of every accepted answer, and the matcher to accept it (tone numbers, tone marks, or toneless as "almost").

**What the matcher must do** (✓ = already done by today's engine, checked in `src/app.html`):
- ✓ full-width forms to ASCII (`fwFold`), lowercase, NFC;
- ✓ strip 。、！？，．～ and ASCII . , ! ? ~ and quotes (`pracNorm`). Not stripped: ：；《》（）: authors keep them out of answers;
- ✗ ignore spaces between Chinese characters (today only Hangul gets this): request 1. Until then every `ty` answer list carries the unspaced twin (`我 是 美国人|我是美国人`);
- ✗ pinyin normalisation: tone numbers ↔ tone marks, `v` and `u:` → ü, apostrophes and spaces ignored, capitals ignored (request 4);
- ✗ "almost" only when tone marks are missing, not when a different tone is typed (*mài* for *mǎi* is a different word): request 5. Until then tone items are `'!strict'`;
- ✗ accept a pinyin answer where a character answer is expected (request 3).

**`targetScript`:** `[㐀-鿿豈-﫿āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]`: CJK Unified Ideographs, Extension A and compatibility ideographs, plus the tone-marked pinyin vowels, so that pinyin practice items in the sound stage count as Chinese text. A toneless pinyin string does not match (so a pinyin answer must carry at least one mark), and English text does not match unless it has an accented vowel (*café*: keep such words out of answers). Card targets must still be characters (writer rule; the validator cannot tell).

### 10.4 Tiles: segmentation and spacing

- **The author supplies the tiles, by word, with single spaces**: `我 是 美国人`, `三 本 书`, `我 明天 去 北京`, `你 叫 什么 名字`. Tiles never come from splitting characters.
- **Same word breaks as the generator's word list** (§6.2), so the tiles and the pinyin words line up: nationality words one tile (美国人), number / measure word / noun three tiles (一 / 杯 / 咖啡), particles their own tiles (了, 的, 吗, 呢, 吧), 这个 one tile, verb-object words that are one idea one tile (吃饭, 睡觉). A writer who is unsure runs the generator: each pinyin word is one tile.
- **Tile count:** 2–6 tiles in `or` items (PRACTICE-SPEC), at most 9 words in a `ty` answer (validator).
- **Spaced text appears only in practice tiles and `ty` answers.** Card targets, example rows, dialogues, `mc` options and `fill` sentences have no spaces.
- **Punctuation:** none on tiles; `a[0]` of a `ty` item may end with 。or ？ (the matcher strips it); `fill` sentences and card sentences end with full-width 。？！.

### 10.5 Punctuation rules

- Full-width in Chinese strings: 。，？！、：；“”《》. The enumeration comma 、 between list items (牛奶、水果、茶).
- No space before or after Chinese punctuation; no ASCII punctuation inside Chinese.
- English text keeps English punctuation, including inside notes that quote Chinese ("Say 你好 to anyone.").
- The pinyin line converts punctuation to ASCII (§6.2).

### 10.6 Fonts and line height

- **Characters:** a system CJK stack for target text: `"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Noto Sans CJK SC", "Source Han Sans SC", sans-serif`, applied to `[lang=zh]` elements (cards, tiles, examples, answer inputs). Today the app sets a zh stack only on `html[lang^=zh]` (the Chinese interface), not on target-language spans in an English interface (request 7). Without it, devices fall back to a system CJK font anyway, but the Japanese-style glyph variant can appear on some Android and Windows setups when the element has no `lang="zh-CN"` [inference].
- **Size and spacing:** card characters at least 2× the body size; line height 1.6–1.8 for Chinese lines and for pinyin with tone marks (the marks sit above the x-height and clip in tight boxes); tiles at least 44 px tall.
- **Pinyin font:** must contain ǎ ě ǐ ǒ ǔ ǖ ǘ ǚ ǜ (U+01CE–U+01DC). Check that the body font has them, or the caron vowels fall back to another font mid-word.

### 10.7 What the lead needs to do in the engine and pipeline (priority order)

| # | Request | Why | What the course does if it is NOT built |
|---|---|---|---|
| 1 | **Ignore spaces between Chinese characters when matching** (`pracMatch` and `normT`): extend today's Hangul rule (`/[ㄱ-ㆎ가-힣]/` … `replace(/\s+/g,'')`) to CJK ideographs. Also hide those spaces when a spaced `a[0]` is shown as the model answer. | Tiles need spaced answers; keyboards produce none. | Every `ty` answer list carries the unspaced twin (`我 是 美国人|我是美国人`), `a[0]` spaced. The model answer shows with spaces (readable). |
| 2 | **Turn on "tiles by default" for en-zh**, and change the switch text to "Use tiles (no Chinese keyboard)"; on the first typed item, a one-time note: "To type Chinese, add the Chinese (Simplified) – Pinyin keyboard." | Most learners have no Chinese keyboard at the start. | (Setting already exists.) Without the note, learners stay in tiles, which is fine. |
| 3 | **Pinyin answers for character items:** `gen.js` runs `respell` on every accepted answer of `fill` and `type` items and stores the results (e.g. `py: [...]`); the matcher accepts them through request 4's normaliser, toneless as "almost". Also the **deck typing quiz** accepts the card's `pron`. | Lets learners without a Chinese keyboard type. | Typing means characters through a keyboard; pinyin typing only in sound-stage items. The deck typing quiz asks for the meaning, or needs a Chinese keyboard. |
| 4 | **Pinyin normaliser in the matcher:** tone numbers ↔ marks (*ni3 hao3* = *nǐ hǎo*; 5 or no digit = neutral), `v` / `u:` → ü, apostrophes, spaces and capitals ignored. | US learners commonly type tone numbers. | Pinyin items accept only marked pinyin (accent bar); writers cannot list *ni3 hao3* variants (they fail `targetScript`). |
| 5 | **"Almost" only for missing tone marks** in pinyin (extend `accMissingOnly`, now vi-only, to zh). | *mài* for *mǎi* is a different word. | All tone-bearing pinyin `ty` and `fi` items are `'!strict'` (§7); non-strict pinyin items accept a wrong tone as "almost". |
| 6 | **Smart tone keys for pinyin:** a tone key puts the mark on the right vowel of the syllable before the caret (a / e, else o in ou, else the last vowel), replaces an existing mark, and never stacks; labels "ā 1", "á 2", "ǎ 3", "à 4". | Today a mark lands on whatever letter precedes the caret. | `pinyin` teaches "press the tone key right after the vowel that carries the mark". |
| 7 | **CJK font stack and line height on `[lang=zh]` target text** (§10.6); `lang="zh-CN"` on card, tile, example and input elements. | Glyph variants, clipped tone marks. | System fallback fonts; possible mixed glyphs on some devices. |
| 8 | **Validator: run `respell` on every card target and example row and compare with the stored `pron`** (fail on difference); treat generator warnings as WARN lines. | The generator is the source of truth; this catches hand edits and stale rows. | `repron.js zh` after every word-list change; the existing same-string check catches cross-file drift only. |
| 9 | **Pinyin display setting:** "Pinyin: always / tap to reveal / off" for cards and example rows (§6.5); default "always". | Learners who read characters want to hide it. | Pinyin always shown. |
| 10 | **Generalise the letter-drill machine** to tone and initial drills on the script decks (§10.1). | More listening practice for tones. | Tone pairs and Pinyin sounds stay ordinary decks. |
| 11 | **Voice check:** single characters with several readings (行, 长, 还, 了) can be read with the wrong one by `zh-CN` voices; the lead should listen to the script decks on the test devices. | The voice is the model. | Writers avoid polyphonic single characters as card targets (§9). |
| 12 | **`repron.js`:** works today with this course's `pronPattern` (it already uses the profile pattern), but compiles it without the `u` flag; the pattern was built to work both ways. Its word-count guard skips a row whose word count changes; after a word-list change that merges words (*wài guó* → *wàiguó*), those rows need `repron` with the guard relaxed. | Keeps stored prons equal to the generator. | Lead fixes such rows by hand from the generator's output. |
| 13 | **PRACTICE-SPEC exception:** pinyin is allowed in sound-stage practice items and in the one tone `mc` item per set (§7). No code change; the spec and the reviewer should know. | — | — |

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The generator's word list** in `tools/target/zh/respell.js` (about 1,000 entries): tones, neutral tones (朋友 *péngyou*, 认识 *rènshi*, 休息 *xiūxi*, 知道 *zhīdào*, 学生 *xuésheng*, 医生 *yīshēng*, 这里 *zhèlǐ*), word breaks (*Měiguórén*, *zhège*, *méi guānxi*, *bú kèqi*, *tóuténg*, *dìtiězhàn*), and the default readings of characters with several sounds (§6.1). It was written from the author's knowledge; no dictionary file was available offline, and none was opened entry by entry. Three silent-error classes remain by design (§6.1): a missing compound whose parts are listed, a polyphone used alone in its non-default reading, and bare 一点 for "a little".
2. **The tone-change convention** (§6.2): spoken 一 / 不, dictionary third tone, *ge* neutral after numbers. Several US textbooks are believed to do this, but no textbook page was opened; YellowBridge only says practice varies.
3. **Particles as separate pinyin words** (*chī le*), against the official rule 3.1 (*chīle*). A deliberate choice to match the tiles; a native teacher may prefer the official form.
4. **The politeness and address rules** (§2.3–2.5): how much 您 to model, 您 in the south, 我要 sounding blunt, 谢谢 among friends, 小姐 and 美女 / 帅哥.
5. **The `greet` strings:** 晚安 (late night), 早上好, 下午好, 晚上好. 下午好 and 晚上好 are textbook-correct but rarer in speech than 你好 [inference].
6. **The sample cards and notes** in §9, especially 便宜一点儿吧, 可以扫码吗？, 不要辣的, 我看看, 师傅，去机场, 一张去西安的票, 我住在纽约 (with the note on 住在), and the realistic prices.
7. **The Traps list** (§4.12): 你好吗 as a real question, 吃了吗 as a greeting, 我很好 for "I'm good", 老外.
8. **Taiwan differences** in §2.1 beyond the Wikipedia rows (好啊 / 好喔).

**Evidence that could not be opened, or was read only in part**
- **Tones:** Yang (2016) and the JCLTA 1997 tone-error paper were read as abstracts only; the 1997 page shows no author. No per-tone percentages were available.
- **Word order:** Peng (2021) was read for its abstract and participant description only (the result tables were beyond what was fetched). Jiang's chapter on word-order acquisition was a landing page describing Singapore primary-school learners; no findings were read.
- **Measure words:** Rosmawati (2015) is a two-learner case study whose learners' L1 is not stated; Polio (1994), the classic study of non-native classifier use, was seen only in a reference list. Huang & Chen (2014) was opened but is about memory, not learner errors, and is not used.
- **Common mistakes:** DigMandarin and Yoyo Chinese are commercial blogs [practitioner opinion]; the Chinese Grammar Wiki page was read from a mirror of its source text.
- **Learners:** the MLA totals for Chinese were in charts that were not read (only percentage changes); the University of Hawaiʻi thesis on US Mandarin learners' motivation was blocked by a browser check; Luo, Li & Li (2019) was read as a record (institution counts, not learner shares).
- **HSK 3.0:** the Band 1 page gives 269 syllables, 300 characters, 48 grammar points and 100 handwritten characters, but is inconsistent about the word count (500 or 300); Band 2 figures were not found.
- **Wikipedia's own Pinyin and Chinese-in-the-US pages** were not on the fetch allowlist; pinyin rules come from the pinyin.info translation of the official orthography, which does not cover the apostrophe rule or 一 / 不 marking.

**The roadmap and the brief**
- The brief's base text says to read "the `de` entry"; the lead's instruction says to use the `zh` entry, which this profile does.
- The brief's example "Zhōngguó rén" is written here as one word, *Zhōngguórén*, to match dictionaries and the brief's own tile example 我 / 是 / 美国人 (§6.2).
- `greetings`, `food` and `family` have an empty `roadmap` field; the roadmap preview will not show them unless the lead adds items.

**Engine and pipeline** (for the lead): §10.7, requests 1–13. The most important are 1 (spaces in Chinese answers), 2 (tiles by default and the keyboard note), 3–4 (pinyin answers and the normaliser), 5 (strict tones) and 8 (validator runs the generator).

**Not verified at all**
- How well learners use generated pinyin with spoken 一 / 不; no study compares pinyin conventions for learners.
- Whether `zh-CN` device voices read single polyphonic characters as intended (request 11).
- That the app's fonts contain the caron vowels (request 7).

## Sources

Web pages opened and used for this profile (2026-11-19):
- [Yang, C. (2016). Tone errors in scripted conversations of L2 Mandarin Chinese. *Chinese as a Second Language Research* 5(1), 63–86 (abstract)](https://www.degruyterbrill.com/document/doi/10.1515/caslar-2016-0003/html)
- [Toward a sequential approach for tonal error analysis. *Journal of the Chinese Language Teachers Association* 32(1), 21–39, 1997 (abstract page; author not shown)](https://websites.umich.edu/~chenq/tones.html)
- [Peng, Y. (2021). Study of English-speaking learners' acquisition of Chinese word order. PhD thesis, University of Leeds (record)](https://etheses.whiterose.ac.uk/id/eprint/30027/) and [full text PDF (abstract and method read)](https://etheses.whiterose.ac.uk/id/eprint/30027/1/Peng_YY_School%20of%20Languages%2C%20Cultures%20and%20Societies_PhD_2021.pdf)
- [Jiang, W. The acquisition of word order in Chinese as a foreign language (book chapter, Routledge; landing page)](https://www.taylorfrancis.com/chapters/edit/10.4324/9781315660264-8/acquisition-word-order-chinese-foreign-language-wenying-jiang)
- [Rosmawati (2015). Investigating second language learners' usage of Mandarin numeral classifiers: a case-based study. *Researching and Teaching Chinese as a Foreign Language* 1(1)](https://api.equinoxpub.com/articles/26456)
- [Huang, S. & Chen, J.-Y. (2014). The effects of numeral classifiers and taxonomic categories on Chinese and English speakers' recall of nouns. *Journal of East Asian Linguistics* 23(1) (opened, not used)](https://link.springer.com/article/10.1007/s10831-013-9108-0)
- [Chinese Grammar Wiki (AllSet Learning): 是 with nouns, A1 (mirror of the source text)](https://git.yojik.eu/eric/ChineseGrammarWiki/raw/master/MD/A1/32.mw)
- [Chinese Grammar Wiki: measure word 个, A1 (mirror of the source text)](https://git.yojik.eu/eric/ChineseGrammarWiki/raw/master/MD/A1/7.mw.md)
- [AllSet Learning Chinese Pronunciation Wiki: Tone change rules](https://resources.allsetlearning.com/chinese/pronunciation/Tone_change_rules)
- [YellowBridge: Mandarin tone sandhi](https://www.yellowbridge.com/chinese/mandarin-tone-sandhi.php)
- [Basic Rules of Hanyu Pinyin Orthography (pinyin.info translation)](https://pinyin.info/readings/zyg/rules.html)
- [DigMandarin: Top 20 common mistakes Chinese learners make (commercial blog)](https://www.digmandarin.com/top-20-common-mistakes-chinese-learners-make.html)
- [Yoyo Chinese: Top 10 most common Chinese mistakes made by English speakers, #10 time and location (commercial blog)](https://yoyochinese.com/blog/learn-Mandarin-Chinese-top-10-chinese-mistakes-made-by-English-speakers-grammar-time-location)
- [The World of Chinese (2018): Talking to strangers](https://www.theworldofchinese.com/2018/02/talking-to-strangers/)
- [DigMandarin: How to address people properly you meet in China (commercial blog)](https://www.digmandarin.com/how-to-address-people-properly-you-meet-in-china.html)
- [Wikipedia: Taiwanese Mandarin (IPFS mirror)](https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.4everland.io/wiki/Taiwanese_Mandarin.html)
- [China Education Center: New HSK 3.0 Band 1](https://www.chinaeducenter.com/en/hsk/newhskband1.php)
- [University of Oxford, CTCFL: grammar list of the sample lessons](https://www.ctcfl.ox.ac.uk/materials_sample_lessons_1_grammarlist/)
- [Pew Research Center: Chinese in the U.S. fact sheet (ACS 2021–23)](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-chinese-in-the-u-s/markdown)
- [pinyin.info (2023): US postsecondary enrollments in Chinese trending down (MLA 2016–2021)](https://pinyin.info/news/2023/us-postsecondary-enrollments-in-chinese-trending-down/)
- [Luo, H., Li, Y. & Li, M.-Y. (2019). Heritage language education in the United States: a national survey of college-level Chinese language programs. *Foreign Language Annals* 52(1) (record)](https://digitalcommons.lmu.edu/modernlang_fac/36)

Opened but not usable: Language Log post on MLA trends (no Chinese figures in text); University of Hawaiʻi ScholarSpace thesis on Mandarin learner motivation (browser check); ChinesePod forum thread on tone marking (redirect, not followed); Columbia first-year Chinese tone page (menu only).

Local project files read: `docs/briefs/target-profile-zh.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-vi.md` and `tools/target/vi/profile.json` (shape models), the head of `tools/target/es/respell.js` (command-line shape), `packs/roadmaps.js` (entry `zh`), `tools/target/lib.js`, `gen.js`, `validate.js` and `repron.js`, the matchers and accent bar in `src/app.html` (`fwFold`, `normT`, `accBar`, `pracNorm`, `foldAcc`, `accMissingOnly`, `pracMatch`, `pracMode`, the tile builder), and the head of `docs/profiles/zh.md` (reverse course; not used).
