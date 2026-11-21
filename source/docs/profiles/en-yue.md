# English speakers learning Cantonese: course profile

Course `en-yue`: Cantonese for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Cantonese, written in traditional characters as Hong Kong people write the spoken language. Machine-readable twin: `tools/target/yue/profile.json`, written from the same data file as §8 and §9, so the two agree. Pronunciation generator: `tools/target/yue/respell.js` (§6). The folder keeps its `HOLD` file: the course stays out of releases until the lead removes it.

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile, named. **(abstract only)**, **(one learner)** and **(other L1)** say how much was read and whether the learners were English speakers.
- **[curriculum convention]**: what syllabuses, textbooks, romanisation standards and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Cantonese**. Every claim of that kind that writers will copy is in the native-check list (§11).

Untagged rules in §6 to §10 are design decisions, not findings.

**The evidence base is thin, and that is the main caveat.** No group study of English-speaking adult learners of Cantonese was found and opened. The learner data here is one fluent American learner (Matthews, on Mak & Matthews 2011), a tone-training study of Mandarin speakers (Zhang et al. 2018), and practitioner lists. Most of §4 is therefore [practitioner opinion] or [inference], and §11 lists what a native speaker should check first.

## 1. Summary

- **Which Cantonese?** Hong Kong Cantonese, written in **traditional characters**, with **Jyutping** (LSHK romanisation, tone numbers 1–6) as the pronunciation line, and a `zh-HK` voice. This is the roadmap's choice. Say it plainly in the course blurb and lesson 1: "This course teaches Cantonese as it is spoken in Hong Kong, written in traditional characters the way people write it in messages and ads, with Jyutping to show the sounds."
- **Register:** spoken Cantonese written as spoken (係, 唔, 冇, 嘅, 咗, 喺, 佢, 哋), never Standard Written Chinese. One rule (§2.2): **write what a Hong Kong person would say aloud.** Politeness comes from 唔該 / 多謝, particles (呀, 啦, 吖) and titles (陳生, 陳太, 陳老師), not from a polite "you".
- **Biggest traps (§4):** tones (3 / 6, 2 / 5, everything pulled to a high or English-intonation pitch); missing classifiers and 個 for everything; English order (time and place after the verb); 係 before adjectives; 唔 / 冇 / 未; bare sentences without particles; 唔該 / 多謝; Jyutping letters read as English (j, z, c, eo, oe, yu, final -p -t -k).
- **Standing rule (§7):** two strands. **(a) Tones**, tested with Jyutping tiles in the sound stage and one tone `mc` item in every later set. **(b) Cantonese order and classifiers**: time and place before the verb; number, 呢 / 嗰 or owner + classifier + noun (我本書 = my book). Keywords tested on 44 sample lines.
- **Pronunciation aid (§6):** Jyutping, lowercase, **one syllable per character with spaces between syllables** (*nei5 hou2*), entering tones written 1 / 3 / 6, changed tones (變音) written as said (*maa4 maa1*, *din6 waa2*), dictionary forms of the "lazy sounds" (*nei5*, *ngo5*). **Generated** by `respell.js` (about 1,100 entries; throws on unknown characters and on two-reading characters with no default).
- **Lessons and decks (§8, §9):** 27 lessons: all 25 roadmap items, `particles` moved forward to the end of stage 2, plus `family` and `routine`. 18 decks in 5 groups, including three ordinary script decks (Jyutping sounds, Tone twins, First characters) and "Traps for English speakers".
- **Typing (§10):** word tiles by default; typing optional, as Jyutping with tone numbers on an English keyboard (accepted through the generated pron of each answer) or as characters through a Cantonese keyboard. The pipeline cannot run on a three-letter code yet: engine and pipeline requests in priority order in §10.7, the first one blocking.

## 2. Variant, register and voice

### 2.1 Variant: Hong Kong Cantonese, traditional characters, Jyutping

- The roadmap names "Cantonese of Hong Kong, traditional characters with Jyutping romanization", basis Durham University Beginners Steps 1–2 plus PolyU's Elementary Cantonese opening [curriculum convention]. This profile keeps it.
- **Why Hong Kong:** it is the reference variety of nearly every course, dictionary and textbook for English speakers; PolyU's *Elementary Cantonese (Taught in English)* teaches Jyutping with *Cantonese for Everyone* (Jyutping version) ([PolyU CLC1163](https://www.polyu.edu.hk/clc/docdrive/subjects/CLC1163.pdf)) [curriculum convention]. Guangzhou Cantonese differs only in details at A1 (simplified characters, some words) [inference].
- **Why Jyutping, not Yale:** Jyutping is the LSHK standard ([LSHK, *Jyutping scheme*](https://lshk.org/jyutping-scheme/)) used by PolyU, Durham, and Cantonese keyboards; it needs only ASCII letters and digits, so learners type it on any keyboard. Yale is older and common in US textbooks (*Colloquial Cantonese*, Yale-based materials) and uses tone marks plus *h* [curriculum convention, from the Wikipedia comparison]. Heritage learners who met Yale: one note in `jyutping` on the main differences (Jyutping j = Yale y; z / c = Yale j / ch; eo / oe = Yale eu).
- **Overseas Cantonese:** many US heritage learners grew up with Taishanese-influenced or older Guangzhou-style Cantonese, or with Cantonese from Malaysia or Vietnam [inference]. The course teaches Hong Kong forms; a card note may mention a common overseas form only where the learner is likely to have heard it (§11).
- **Voice:** `ttsLang: "zh-HK"` (§2.8).

### 2.2 Written form: spoken Cantonese, as spoken (one rule)

**The rule: write what a Hong Kong person would say aloud, in the characters Hong Kong people use for it.** Never write Standard Written Chinese (書面語) forms that are read aloud only in news and formal speech.

| Spoken Cantonese (taught) | Standard Written Chinese (never a target) | Meaning |
|---|---|---|
| 係 hai6 | 是 | to be |
| 唔 m4 | 不 | not |
| 冇 mou5 | 沒有 | not have; didn't |
| 嘅 ge3 | 的 | possessive / describer link |
| 咗 zo2 | 了 | completed action |
| 喺 hai2 | 在 | at, in |
| 佢 keoi5, 佢哋 keoi5 dei6 | 他 / 她, 他們 | he / she, they |
| 我哋 ngo5 dei6 | 我們 | we |
| 睇 tai2 | 看 | look, watch |
| 嘢 je5 | 東西 | thing(s) |
| 乜嘢 / 咩 | 甚麼 | what |
| 邊度 | 哪裏 | where |
| 嚟 lei4 | 來 | come |
| 畀 bei2 | 給 | give |

- [curriculum convention] Durham's Step 1 grammar list is written in spoken Cantonese (我係, 喺, 唔, 咩嘢, 邊度, 咗, 嘅) ([Durham summary of contents](https://www.durham.ac.uk/media/durham-university/research-/research-centres/centre-for-foreign-language-study/Cantonese-Chinese-language-courses-summary-of-contents.pdf)). The roadmap uses 冇 and 唔使 where Durham writes 無 and 唔洗; this profile follows the roadmap.
- **Character choices for variant spellings** (the matcher accepts both, §10.3): 畀 (not 俾), 啲 (not D or 尐), 嘅 (not 既), 㗎 (not 架), 咗 (not 左), 喺 (not 系), 嚟 (not 黎), 冇 (not 無 in speech), 搵 (not 揾), 着 (wear; not 著). 入面 for "inside" (not 裏面 / 裡面).
- **SWC appears only as recognition**, in one `characters` note and in card notes: signs and menus are often in SWC (出口, 禁止吸煙) [inference]. Writers never mix the two in one sentence.
- **No Latin letters in Cantonese strings** (no 阿Sir, OK, Wi-Fi, D): the generator throws on them, the voice reads them badly, and tiles split them oddly. English code-mixing is taught in card notes (§2.7).

### 2.3 "You", titles and forms of address

- **你 nei5 is the only "you".** Cantonese has no everyday polite "you" (您 belongs to Mandarin; it may appear once in a Traps note) [inference]. Politeness comes from 唔該, particles, titles and indirect requests.
- **他 / 她 → 佢** for he, she and (rarely) it; the meaning column says which (§9).
- **Titles after the surname** [curriculum convention: Durham Step 1 lists 先生、太太、小姐、教授、醫生]:

| Term | Use in the course | Note |
|---|---|---|
| 陳先生 / 陳生 | Mr. Chan | 生 is the everyday short form. |
| 陳太太 / 陳太 | Mrs. Chan | 太 here is taai2 (changed tone). |
| 陳小姐 | Ms. / Miss Chan | Neutral in Hong Kong; also how staff address a young woman customer [inference]. |
| 陳老師 | teacher Chan | Students call teachers 老師, not by name. |
| 何醫生 | Dr. Ho (a physician) | |
| 師傅 si1 fu2 | a driver, cook or repair worker | Respectful and friendly [inference]. |
| 阿姨 / 叔叔 | an older woman / man (a friend's parent, a neighbour) | Recognition in `family`. |
| 阿 + name (阿明) | a friendly name form | Recognition only; tones of such names may change (§11). |

### 2.4 Politeness basics an A1 learner needs

| Cantonese | `pron` (generated) | Use | Lesson |
|---|---|---|---|
| 你好 | nei5 hou2 | hello (to strangers, on meeting; stiff with friends) | `greetings` |
| 早晨 | zou2 san4 | good morning (until about noon) | `greetings` |
| 唔該 | m4 goi1 | thanks for a service; please; excuse me (to get attention) | `greetings`, `food` |
| 多謝 | do1 ze6 | thank you for a gift, money or kind words | `greetings` |
| 唔使客氣 | m4 sai2 haak3 hei3 | you're welcome | `greetings` |
| 對唔住 | deoi3 m4 zyu6 | I'm sorry (a real apology) | `greetings` |
| 唔好意思 | m4 hou2 ji3 si3 | excuse me, sorry (small things) | `greetings` |
| 請問 | cing2 man6 | excuse me, may I ask | `questions`, `directions` |
| 拜拜 | baai1 baai3 | bye | `greetings` |
| 早抖 | zou2 dau2 | good night (go and rest) | `greetings` |

- [practitioner opinion] CantoneseClass101: 唔該 is the everyday thanks for service or help, and also "please" and "excuse me"; 多謝 is for gifts or money and deeper appreciation; 晒 strengthens both (唔該晒, 多謝晒); 唔使客氣 answers thanks ([CantoneseClass101, *m4 goi1 or do1 ze6*](https://www.cantoneseclass101.com/lesson/absolute-beginner-questions-answered-by-olivia-12-how-do-i-know-when-to-use-m4-goi1-and-when-to-use-do1-ze6)).
- [practitioner opinion] The same site warns against "too many words": learners add politeness words where a short sentence with a particle is natural ([CantoneseClass101, *Most common Cantonese mistakes*](https://www.cantoneseclass101.com/blog/2020/12/11/common-cantonese-mistakes)).
- **請 cing2** is for inviting (請坐, 請入嚟) and in 請問; it is not a general "please" at the start of a request. Requests use 唔該 + request, or request + 啦 / 吖 (§2.5).
- **No good-afternoon greeting** in everyday speech: 午安 exists but sounds bookish [inference]. The `greet` strings use 你好 for the afternoon and 食咗飯未呀？ (have you eaten?) for the evening.

### 2.5 Sentence-final particles: what an A1 learner needs

Particles carry attitude; a sentence without one can sound blunt or abrupt, and each particle has its own fixed tone, so English rising intonation on a question breaks it [practitioner opinion: CantoneseClass101 lists missing or misused particles as a common mistake and says leaving one out "can sound rude"]. [research-backed, other learners] In a corpus study of young children, Cantonese–English bilinguals acquired particles later and used fewer of them than monolingual and trilingual peers; the author links this to English having no counterpart ([Chang 2024, Columbia BA thesis](https://kasseychang.github.io/files/KasseyChang_thesis_finaldraft.pdf)). Children, not adults; the direction of the effect is what matters here.

| Particle | `pron` | Function taught | Level |
|---|---|---|---|
| 呀 | aa3 | softens questions and statements; the default friendly ending (你叫咩名呀？) | **active** from `intro` |
| 啦 | laa1 | requests, urging, agreeing (好啦, 快啲啦, 唔該你啦) | **active** in `particles` |
| 吖 | aa1 | offers and invitations (一齊去吖, 飲杯茶吖) | **active** in `particles`, `suggest` |
| 呢 | ne1 | asks the question back (你呢？); softens a question-word question | **active** from `questions` |
| 未 | mei6 | "yet?" question (食咗飯未呀？) | **active** in `zo` |
| 㗎 | gaa3 | asserts or explains (係㗎, 好貴㗎) | recognition |
| 咩 | me1 | surprised question (你唔知咩？) | recognition |
| 喎 | wo3 | noting something new or reported | recognition |
| 囉 | lo1 | "obviously, so" | recognition |
| 嘛 | maa3 | "you know, isn't it obvious" | recognition |
| 嗎 | maa3 | yes/no question; sounds formal or written in speech | recognition only; A唔A is taught instead |

Writer rules: every question in a dialogue ends with a particle unless it is a one-word echo; `ty` answers list the variant with and without 呀 where both are natural (§8 notes); the particle is its own tile.

### 2.6 Voice of the English text

- Plain, friendly US English, US spelling. A `why` is one sentence.
- Cantonese inside English text: in lesson bodies, `<b>` around the characters, then the Jyutping in `<i>` once at first mention in that lesson: `<b>唔該</b> <i>m4 goi1</i>`. In plain-text fields (`why`, `hint`, notes), write the characters bare; add Jyutping in brackets only when the point is the sound ("買 (maai5) is buy, 賣 (maai6) is sell").
- Tones are named by number: "tone 2", "tone 6", "tones 3 and 6" (§3). Never "the second tone" (that is Mandarin's naming and the numbers are what learners see).
- Never add English endings to Cantonese: "two classifiers", not "two 個s".
- Sample voice lines: (1) "買 (maai5) is tone 5 and 賣 (maai6) is tone 6: only the tone changes the deal." (2) "Time goes before the verb: 我聽日去, not 我去聽日." (3) "Nice work! Review these cards tomorrow so they stick."

### 2.7 English loanwords and code-mixing

[curriculum convention: reference work, the Wikipedia *Hong Kong Cantonese* article (IPFS mirror)] Everyday loanwords written in characters: 巴士 *baa1 si2* (bus), 的士 *dik1 si2* (taxi), 朱古力 *zyu1 gu1 lik1* (chocolate), 三文治 *saam1 man4 zi6* (sandwich), 士多啤梨 *si6 do1 be1 lei2* (strawberry), 菲林 *fei1 lam2* (film), 沙律 *saa1 leot2* (salad), 泊車 *paak3 ce1* (to park). The same article: Hong Kong speakers code-mix English words into Cantonese grammar (你sure唔sure呀？; 佢哋好friend), and English is hard to avoid for technical terms ([Wikipedia, *Hong Kong Cantonese*](https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.4everland.io/wiki/Hong_Kong_Cantonese.html)).

Course rules:
- Loanwords **with characters** are taught as normal words (巴士, 的士, 芝士, 多士, 朱古力, 三文治, 士多, 飛 "ticket" from "fare", 波 "ball", 咭 / 卡 "card", 拜拜 "bye-bye"). They make good encouragement in `jyutping` and the Traps deck ("you already know 巴士").
- Code-mixed **English words** (OK, sorry, check, share, file, sir, Wi-Fi) are taught only in card notes ("Many people just say OK here"), never as targets or answers (Latin letters, §2.2).
- 鬼佬 *gwai2 lou2* (Western man; literally "ghost guy") is a recognition note in the Traps deck: common, often friendly between friends, can offend; learners should not use it about others [inference].

### 2.8 Voice

- **Device voices** [inference, unverified on devices, §11]: Apple (iOS, macOS) ships a Cantonese voice tagged `zh-HK`; Windows has `zh-HK` voices; Chrome on desktop lists a Google Cantonese (Hong Kong) voice; Android's Google speech services offer Cantonese, reported in some browsers as `yue-HK` or `yue_HK` rather than `zh-HK`. Many Android phones have no Cantonese voice installed by default.
- **Azure (verified):** Azure neural voices exist for `zh-HK`: HiuGaai (announced July 2020), HiuMaan (female) and WanLung (male) (December 2020) ([Microsoft, *15 more languages*](https://techcommunity.microsoft.com/t5/azure-ai/neural-text-to-speech-extends-support-to-15-more-languages-with/ba-p/1505911); [Microsoft, *51 new voices*](https://techcommunity.microsoft.com/t5/azure-ai/azure-neural-text-to-speech-updates-51-new-voices-added-to-the/ba-p/1988418)). **Recorded clips are the dependable path:** the lead should generate an Azure clip for every card and example row (request 3, §10.7).
- **The real danger** is not silence but a **Mandarin voice reading Cantonese characters**: the app's `pickVoice` matches the exact tag, then any voice whose tag starts with the same two letters, so on a device with no Cantonese voice `zh-HK` falls back to a `zh-CN` or `zh-TW` voice and reads 我係美國人 in Mandarin. `ttsLang` is set to `zh-HK` because that is the tag Apple, Windows and Azure use; request 2 (§10.7) asks that a Cantonese course accept `zh-HK`, `yue-HK`, `yue_HK` and `yue`, and never fall back to another Chinese voice.
- **No voice at all:** the app shows its existing "no voice for this language" message, plus one line: "To hear Cantonese, add a Cantonese (Hong Kong) voice in your phone's speech settings." The Jyutping line stays the learner's guide; recorded clips, where built, play regardless.

## 3. Glossary

These terms are [curriculum convention]: the names used in English-language Cantonese references and courses (the LSHK Jyutping pages, Durham's summary of contents, the Wikipedia articles opened) and the convention of the sister course en-zh where Cantonese does not differ. Use each term exactly and always the same way.

| Term to use | Do not use | Note |
|---|---|---|
| character | letter, symbol | 字 |
| Jyutping | romanization (except once, as a gloss), Yale, pinyin | Always "Jyutping", capital J. |
| syllable | | One character = one syllable. |
| initial; final | onset, rime | "initial" = the consonant at the start (b, ng, gw, z, j); "final" = the rest (aa, eoi, ing, ap). |
| tone; tone number | accent, pitch accent | Tones are numbered: **tone 1 … tone 6** (standing-rule **keywords**). Describe once: tone 1 high level; tone 2 mid rising; tone 3 mid level; tone 4 low falling; tone 5 low rising; tone 6 low level. |
| tone twins | minimal pair | Words with the same letters and different tones (詩 si1 / 試 si3). **keyword** |
| entering syllable | checked tone, 入聲 | A syllable ending in -p, -t or -k; it takes tone 1, 3 or 6. "checked syllable" once, as a gloss. |
| changed tone | 變音, pinjam, tone sandhi | A word whose last syllable rises to tone 2 (or 1) in some words (電話 din6 waa2, 媽媽 maa4 maa1). **keyword** |
| lazy sounds | sloppy, wrong | 懶音: l for n (lei5 for 你), dropped ng- (o5 for 我), m5 for 五. Neutral, descriptive. |
| radical | component (except as a gloss) | 口 in 嘅 咗 啲 嘢 呢; 亻, 氵, 女 |
| stroke | | Recognition only. |
| spoken Cantonese; standard written Chinese | colloquial (as a put-down), Mandarin writing | §2.2. "SWC" only in this profile, not in lessons. |
| classifier | measure word, counter | 個 本 杯 張 隻. "measure word" once, as a gloss (learners who met Mandarin know that term). **keyword** |
| owner + classifier + noun | possessive classifier | 我本書 = my book. Explain, do not label. |
| noun; verb; adjective; adverb | stative verb | "adjectives work like verbs: no 係". |
| describer before the noun | modifier, attributive | **keyword** "before the noun" |
| time word; place word | temporal adverbial, locative | **keyword** "before the verb" for both |
| place word | localizer, position word | 入面, 上面, 隔籬, 對面 after a noun: 超市隔籬 |
| 嘅 (possession and describing) | genitive, attributive marker | "嘅 links the owner or describer to the noun" |
| particle | | "sentence-final particle" once, as a gloss, in `particles`. |
| question word | interrogative, wh-word | 咩, 邊個, 邊度, 幾時, 點解, 點, 幾多 |
| verb-not-verb question | A-not-A question | 去唔去？ 係唔係？ "A-not-A" once, as a gloss. |
| negative (唔, 冇, 未) | negation marker | |
| 咗 for a completed action; 緊 for an action in progress; 過 for experience | aspect marker, perfective, past tense | Never "past tense". Cantonese verbs never change. "aspect marker" once, as a gloss, in `zo`. |
| modal verb | auxiliary | 想, 要, 識, 會, 可以 |
| comparison with 過 | comparative construction | 佢高過我 |
| false friend; calque ("word-for-word copy") | false cognate | |
| loanword | | 巴士, 的士 |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items with learner data opened for this profile first (even thin data).
2. Then items present in nearly every sentence and checkable in tiles or typing.
3. Then lesson-local and vocabulary traps.

The learner data for English speakers of Cantonese is very thin (§11): one fluent American learner, a study of Mandarin speakers, and practitioner lists. Wrong forms are marked *.

1. **Tones: everything pulled to tone 1 or to English intonation; 3 / 6 and 2 / 5 mixed**
   - Wrong → right:
     - *maai6* (sell) for *maai5* (buy): *我想賣嘢 heard for 我想買嘢 ("I want to buy things")
     - 係 *hai6* (to be) said as 喺 *hai2* (at), and the reverse: two different words
     - 詩 / 史 / 試 / 時 / 市 / 事 (si1 … si6) all said alike
     - 四 *sei3* (four) said as 死 *sei2* (die): a famous unlucky slip
     - a question said with an English rise on the last syllable, which turns 呀 *aa3* or a tone 4 or 6 into a rise → keep the tones and let the particle ask
   - [research-backed, one learner] Matthews (HKU chapter, on Mak & Matthews 2011): a fluent American learner ("John") produced 401 target syllables with **50% tone accuracy**; tone 1 was the most frequent substitute for every other tone (tone 2 → tone 1 in 40% of tone 2 targets, tone 3 → tone 1 in 38%); tones 4 and 1 were least accurate (40%, 41%); low tones were replaced at phrase ends, high tones failed on function words such as 因為, 好似. The chapter cites Whelpton (1998, not opened) for the claim that learners confuse tones 3 / 6 and 4 / 6 ([Matthews, *How not to acquire tone*](https://repository.hku.hk/bitstream/10722/337165/1/content.pdf)).
   - [research-backed, other L1] Zhang, Peng, Li, Minett & Wang (2018), *Frontiers in Psychology* 9:1982: Mandarin-speaking learners heard Cantonese tone 3 as tone 6 in 56% of tokens and confused the two rising tones (2 and 5) in 32–39%; native listeners also confused 3 / 6 (47%) in that task; training raised identification from 62.6% to about 69% ([Zhang et al. 2018](https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01982/pdf)). Mandarin listeners, not English ones; it shows which pairs are acoustically close.
   - [curriculum convention: reference work, Wikipedia *Hong Kong Cantonese*] Tones 2 and 5 are merging for some younger Hong Kong speakers, so the voice and the learner's friends may not separate them clearly. The course still teaches both (they are distinct in dictionaries and in the voice).
   - Design consequence: strand (a) of the standing rule (§7); the Tone twins deck; one tone `mc` item in every set from lesson 3 on; Jyutping on every card and example.

2. **Missing classifiers, 個 for everything, and the classifier as "the" / "my"**
   - Wrong → right:
     - *三書 → 三本書
     - *呢書 → 呢本書 (this book)
     - *一個水 → 一杯水; *兩個鞋 → 一對鞋
     - *我嘅書喺邊？ is understood, but the natural form is 我本書喺邊度呀？ (my book: owner + classifier + noun)
     - *書喺枱面 for "the book is on the table" → 本書喺枱面 (a bare classifier makes "the")
   - [research-backed, abstract] *Bare classifiers and definiteness: a cross-linguistic investigation*, *Studies in Language* 35(1), 2011 (authors not shown on the page read): Cantonese uses the bare classifier + noun pattern for definite reference, part of a cross-linguistic pattern; it builds on Cheng & Sybesma (1999, not opened). This describes native usage, not learner errors: that English speakers omit the classifier or overuse 嘅 is [inference] from the structure (English has no classifiers) and from the Mandarin evidence in en-zh ([abstract](https://www.jbe-platform.com/content/journals/10.1075/sl.35.1.10sim)).
   - [curriculum convention] Durham Step 2 teaches "counting nouns and classifiers", 呢啲 / 嗰啲 / 啲.
   - Design consequence: strand (b); the `classifiers` lesson; nouns on cards appear with a number or 呢 + classifier where natural (三本書, 一杯咖啡); `ge` teaches 我本書 beside 我嘅書.

3. **English order: time, place and means after the verb**
   - Wrong → right:
     - *我去香港聽日。 → 我聽日去香港。
     - *我做嘢喺銀行。 → 我喺銀行做嘢。
     - *我返工搭地鐵。 → 我搭地鐵返工。
     - *我睇咗戲上個禮拜。 → 我上個禮拜睇咗戲。
   - [practitioner opinion] CantoneseClass101 lists "putting time adverbs at the end" and gives subject + time + verb + object (我上個禮拜睇戲).
   - Design consequence: strand (b); `hai2`, `time`, `routine`, `go-come`.

4. **English question order**
   - Wrong → right:
     - *邊度你住？ → 你住喺邊度呀？
     - *咩你想食？ → 你想食咩呀？
     - *邊喺我本書？ → 我本書喺邊度呀？ (CantoneseClass101's own example)
   - [practitioner opinion] CantoneseClass101: the question word goes where the answer goes, not first.
   - Design consequence: `questions`; `mc` distractors with the English order.

5. **係 before adjectives, and the missing 好**
   - Wrong → right:
     - *佢係高。 → 佢好高。
     - *我係攰。 → 我好攰。
     - *今日係熱。 → 今日好熱。
     - *我係三十歲。 → 我三十歲。 / 我今年三十歲。
   - [inference] Standard teaching point (as in Mandarin with 是 / 很); not found in the sources opened as a learner error list.
   - Design consequence: `hai` previews it, `describing` drills it; Traps deck cards.

6. **唔, 冇 and 未**
   - Wrong → right:
     - *我唔有錢。 → 我冇錢。
     - *我琴日唔去。 for "I didn't go yesterday" → 我琴日冇去。
     - *我唔去咗。 → 我冇去。
     - *我冇食 for "I haven't eaten yet" (with "yet" meant) → 我未食。
     - 唔係 for nouns (我唔係老師), 唔 for verbs and adjectives (我唔食, 唔貴)
   - [practitioner opinion] CantoneseClass101: 唔 for present, future and habits (我唔食), 冇 for the past (我冇食).
   - Design consequence: `m`, `jau-mou`, `zo`; the preferred "mixed neighbour" in the last two items of later sets.

7. **咗 and 過 mixed; 咗 used as a past tense**
   - Wrong → right:
     - 我去過香港 for "I went to Hong Kong (last week)" → 我上個禮拜去咗香港 (去過 = "I've been")
     - *我以前成日食咗點心。 → 我以前成日食點心。 (habits take no 咗)
     - *我琴日好攰咗。 → 我琴日好攰。
   - [practitioner opinion] CantoneseClass101 lists the 咗 / 過 mix-up.
   - Design consequence: `zo` and `gan-gwo` teach by contrast with English -ed and "have you ever".

8. **No particles, or particles with English intonation**
   - Wrong → right: *你叫咩名？ (correct but curt) → 你叫咩名呀？; *畀我 (bare command) → 唔該畀我啦 / 畀我啦; *一齊去？ for an invitation → 一齊去吖！
   - [practitioner opinion] CantoneseClass101, mistake 9; [research-backed, children] Chang (2024) on bilingual children (§2.5).
   - Design consequence: `particles` moved to the end of stage 2 (§8); dialogues model particles.

9. **唔該 and 多謝, and over-polite English calques**
   - Wrong → right:
     - 多謝 to a server for every dish → 唔該
     - *請畀我一杯茶 (請 as "please") → 唔該，一杯茶。 / 唔該畀杯茶我。
     - *你好嗎？ as a casual "Hi, how are you?" → 你好 alone, or 最近點呀？ (你好嗎 is understood but sounds translated) [inference]
     - *你好 to a friend → 早晨 / a name / 喂 / nothing [inference]
   - [practitioner opinion] CantoneseClass101 (§2.4).
   - Design consequence: `greetings`, Greetings and Traps decks.

10. **Jyutping letters read as English (reading aloud)**
    - Wrong → right (said): *j* as in "jam" → like English *y* (有 jau5); *z* as "z" → "dz" without a puff (早 zou2); *c* as "k" or "s" → "ts" with a puff (草 cou2); *ng-* skipped → like the end of "singing" (我 ngo5); *eo* / *oe* as two vowels → one rounded vowel (去 heoi3, 靴 hoe1); *yu* as "you" → "ee" with rounded lips (魚 jyu2); *aa* and *a* the same → long and short (三 saam1, 心 sam1); final *-p -t -k* released with a puff or a vowel → stop silently (十 sap6, 七 cat1, 六 luk6); *eu* / *au* confused; *m4* (唔) said "um" → hum with closed lips.
    - [practitioner opinion] CantoneseClass101 names j / y and c / z (aspiration) confusions.
    - Design consequence: the `jyutping` lesson and the Jyutping sounds deck.

11. **Numbers: 兩 / 二, 萬, and money words**
    - Wrong → right: *二個人 → 兩個人; *一百千 for 100,000 → 十萬 (Cantonese counts in 萬, 10,000); 一百五 is 150, not 105 (105 = 一百零五); "25 dollars" in speech → 二十五蚊 (元 is written, 蚊 is said); 十二月三號 (month before day).
    - [inference] standard teaching points; Durham Step 2 teaches prices and 幾多.

12. **False friends and calques**
    - Wrong → right:
      - 好 for "good" only → 好 is also "very": 好平 = very cheap, not "good cheap"
      - 我好 for "I'm good / fine" → 我幾好 / 好好 (both natural) [inference]
      - 食咗飯未呀？ is a greeting at mealtimes, not an invitation
      - 鬼佬 used by learners about others → avoid (§2.7)
      - 小姐 is fine in Hong Kong (unlike mainland Mandarin, where 小姐 can be loaded) [inference]
      - 飲茶 "drink tea" = a dim sum meal; 食飯 "eat rice" = have a meal
      - 返工 / 返學 "go back to work / school" = simply go to work / school
      - CantoneseClass101 says 佢好病 means "he's crazy" rather than "he's very sick"; this profile does not teach that claim (not confirmed; §11). Writers use 佢病咗 / 佢唔舒服 for "he's sick".
    - [inference] teaching lore and the author's knowledge; native check (§11).

13. **Characters: SWC forms and Mandarin habits**
    - Wrong → right: 他是美國人 (SWC, read in Cantonese only in formal reading) → 佢係美國人; 我在香港 → 我喺香港; 沒有 → 冇.
    - Heritage learners who studied Mandarin also transfer words: 吃 → 食, 看 → 睇, 說 → 講, 喝 → 飲, 東西 → 嘢 [inference].
    - Design consequence: §2.2; the matcher never accepts SWC forms.

## 5. Learners: who, why, what first

**Who**
- [research-backed] About 5 million people in the US are of Chinese origin (Pew, ACS 2021–23); of those aged 5 and older, **11% speak Cantonese at home**, 13% Mandarin, 41% "Chinese" unspecified, 31% only English; 42% were born in the US ([Pew Research Center, *Chinese in the U.S.*](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-chinese-in-the-u-s/markdown)). So at least about half a million US residents speak Cantonese at home, more inside the "Chinese" answer, and a large US-born group whose parents or grandparents do.
- [news report of ACS figures] In the nine-county Bay Area, about 157,000 people spoke Cantonese at home in 2023 against 127,000 for Mandarin; Cantonese's lead is shrinking. City College of San Francisco went from four Cantonese instructors to one, yet its course has a waitlist; learners include descendants of immigrants who grew up hearing Cantonese but not speaking it, and non-Chinese families ([SF Chronicle via Yahoo News, 2025](https://www.yahoo.com/news/articles/language-f-first-chinese-immigrants-120024188.html)).
- [news report, not data] About 20 US universities offer Cantonese (Stanford, Cornell, NYU, Ohio State, Hawaiʻi, Williams); Stanford cut its classes from three to two in 2020, a petition to keep Cantonese got more than 5,000 signatures, and a US$1 million endowment followed ([The Standard, *Quest to save Cantonese in US*](https://www.thestandard.com.hk/education/article/42197/Quest-to-save-Cantonese-in-US)).
- [inference] The groups, probably in this order of size:
  - **heritage learners** (by far the largest): US- and Canada-born children and grandchildren of Cantonese speakers, who understand kitchen Cantonese, speak little, and read no characters; some know Yale or no romanisation at all;
  - **partners and in-laws** of Cantonese speakers;
  - **travellers, Hong Kong film and food fans**, people moving to Hong Kong for work;
  - **community workers** (health, social services, law) in Chinatowns and Cantonese-speaking neighbourhoods;
  - learners who already know some Mandarin and want Cantonese.

**Why they study**
- [news reports above, anecdotal] Talking with parents and grandparents ("beyond basic questions to discussing emotions"), heritage and identity, research, and serving the community.
- No survey of US adult self-learners' motives for Cantonese was opened (§11). [inference] Family first, then partner, culture and travel, then work.

**What they need first** [inference]
1. **Hearing and saying tones, and reading Jyutping.** Without it nothing sticks, and heritage learners often understand words without knowing the tone they say. The four sound-and-script lessons come first, as in the roadmap and in PolyU's syllabus (Jyutping, phonetic symbols, syllable structure, tone variation and change, then expressions) [curriculum convention].
2. **Survival politeness:** 你好, 早晨, 唔該 vs 多謝, 唔好意思, 對唔住, 拜拜; names. In the roadmap as `greetings` (lesson 3).
3. **Talking about family**: grandparents on both sides (嫲嫲 / 公公 / 婆婆 / 爺爺), older and younger siblings, age. Heritage learners want this most; the roadmap has no family lesson, so `family` is added after `ge` (Durham Step 1 lists family members) [curriculum convention].
4. **Ordering food and paying**: dim sum and the cha chaan teng (茶餐廳, Hong Kong café), 唔該, classifiers in use, 蚊, 埋單. In the roadmap (`food`, `prices`).
5. **Particles early.** A heritage learner's Cantonese sounds rude without them, and they are what grandparents use. `particles` moves from the last lesson to the end of stage 2 (§8).
6. **Characters at recognition level.** Adults want to read menus, signs and family messages; the course aims at about 250 characters, including the spoken-Cantonese ones (§10.2). No handwriting.

**Check of the roadmap's order** [curriculum convention]
- Durham Beginners Step 1: introductions, personal details, nationalities, family, hobbies, Jyutping, numbers to 9,999, clothing; grammar 係, 喺, titles, verb-not-verb questions, 唔, 呀, 呢, 咩嘢, 邊度, 咗 / 未, the aspect markers 咗 過 緊 未, 一齊…吖, 嘅. Step 2: shopping, prices, bargaining, measure words, routines, time, ordering food (hotpot, street food, cha chaan teng, dim sum); grammar 有 / 無, classifiers, A 定 B, 幾時, 幾點, 幾耐, 幾多, 同埋, 太, 呢啲 / 嗰啲 / 啲, 啲 for comparison, 咁, auxiliaries 可以 鍾意 想 識 會 要 應該, 都 (Durham summary, above).
- CUHK's *Elementary Cantonese for Chinese Speakers* (CLCC1703): pronunciation, then self-introduction, campus, the canteen, shopping, entertainment, weather, home, the doctor ([CUHK course outline](https://vse.apru.org/wp-content/uploads/2024/10/Course-Outline_CLCC1703.pdf)). Same topic order, for Mandarin speakers.
- The roadmap follows Durham's grammar order, with the aspect markers later and directions from Durham's Elementary level. This profile keeps it, with the two additions and the move of `particles` (§8).

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [curriculum convention] Jyutping (LSHK): initials b p m f d t n l g k ng h gw kw w z c s j; finals built from the nuclei aa i u e o yu oe a eo with the codas p t k m n ng i u; syllabic m (唔) and ng (吳); tone numbers 1–6 written as ASCII digits at the end of each syllable (fu1 夫, fu2 虎, fu3 副, fu4 扶, fu5 婦, fu6 父); the finals *a* and *oet* were added in 2018 ([LSHK](https://lshk.org/jyutping-scheme/)).
- [curriculum convention] The three entering tones (syllables in -p, -t, -k) take the numbers 1, 3, 6, because they are in complementary distribution with the level tones; Cantonese Pinyin (not Jyutping) uses 7, 8, 9. Contours: 1 high level / high falling (55 / 53), 2 mid rising (35), 3 mid level (33), 4 low falling (21 / 11), 5 low rising (13), 6 low level (22). Examples are written syllable by syllable with spaces (*jyut6 jyu5*, *nei5 hou2*) ([Wikipedia, *Jyutping*, IPFS mirror](https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.4everland.io/wiki/Jyutping.html); [EdUHK Cantonese corpus, ch. 3](https://corpus.eduhk.hk/cantonese/eng/chapter3/3-0.html)).
- [curriculum convention] Changed tone (變音): a non-high tone on the last syllable of some compounds, reduplications and vocatives rises to tone 2 (in some vocatives to tone 1); it is tied to meaning, unlike automatic tone sandhi ([Wikipedia, *Changed tone*, IPFS mirror](https://ipfs.aleph.im/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Changed_tone.html)).
- [curriculum convention: reference work, Wikipedia *Hong Kong Cantonese*] The lazy sounds (n → l, ng- dropped, gw → g before o, -ng → -n and -k → -t, syllabic ng → m, tones 2 / 5 merging) are spreading, but serious broadcasts and education avoid them.

**Decision.** `pron: "required"`. The `pron` is Jyutping with tone numbers, **generated by `tools/target/yue/respell.js`**, never typed by hand. `node tools/target/yue/respell.js "<text>"` prints `<text> -> <pron>`; the module exports `respell` (and `pattern`, `warnings`, `W`, `SYL`). `node respell.js --pattern` prints `pronPattern`.

### 6.1 Why a generator, and how far it can be trusted

Jyutping cannot be read off characters one by one: about 30 common characters have two readings (行 haang4 / hong4 / hang4, 長 coeng4 / zoeng2, 樂 lok6 / ngok6, 重 cung5 / zung6, 覺 gok3 / gaau3, 上 soeng6 / soeng5, 便 bin6 / pin4, 聽 teng1 / ting1, 生 saang1 / sang1), and changed tones belong to words (話 waa6 alone, 電話 din6 waa2; 錢 cin2 in 幾多錢, cin4 in 金錢; 蛋 daan6, 雞蛋 gai1 daan2; 女 neoi5, 個女 go3 neoi2).

Hand-typed Jyutping policed by a regex and a "same characters, same pron" check was weighed and rejected for the same reasons as in en-zh: the regex cannot see a wrong tone or reading, and four writers would type four sets of changed tones. But Jyutping is easier to generate than pinyin, because **this profile writes one syllable per character with spaces between syllables**: word breaks never change the output, only readings do. So:

- **Longest match** over a built-in list of about 1,100 entries (single characters with their default reading, plus every word whose reading differs from its characters' defaults: changed tones, polyphones, and the course's names, places and foods).
- **It throws** on: any character not in the list; a Latin letter, Arabic digit or other non-Chinese character; a character with two common readings and **no default** (樂, 重, 覺, 數, 調, 相) standing outside a listed word; and a stretch where longest match from the left and from the right give **different Jyutping** (a different segmentation with the same reading is fine).
- **It warns** (stderr, not fatal) when a character whose default is often wrong in other words stands alone: 行 長 差 上 女 生 名 請 正 糖 魚 房 樓 便 蛋 下 位. The writer checks the message (it names both readings) and reports a missing word if needed.
- **呢** alone is read *ne1* (the particle) at the end of the text or before punctuation, otherwise *ni1* (this): 你呢？ *nei5 ne1?*, 呢個 *ni1 go3*.
- **Silent-error classes that remain:**
  - a **changed-tone word missing from the list**: it comes out in citation tones with no warning (if 雞蛋 were missing it would give *gai1 daan6* instead of *gai1 daan2*). The defaults were chosen as the most common A1 reading, and the list holds every changed-tone word in this profile;
  - a **two-reading character used alone in its non-default reading** without being in the warn set (會 alone is *wui5*, "will", right at A1; a writer using it for "meeting" alone gets a wrong pron);
  - **numbers in speech**: 二十 is generated *ji6 sap6*; many speakers say 廿 *jaa6* (二十五 → 廿五). Writers who want the spoken form write 廿 (§2.7 is silent on it; §9 card notes mention it).
- **Adding words:** writers never edit a pron. When the generator throws or warns, the writer reports the word; the lead adds a line to the list or to `tools/target/yue/lexicon.txt` (read if present, one `字詞 jyut6 ping3` per line or `;`-separated; one syllable per character, checked against the Jyutping syllable rule on load) and runs the repron step (request 8).

**How reliable** (self-measured; no native check yet, §11): every list entry passes the syllable rule on load and `pronPattern`; all 181 strings in this profile (4 greetings, the 20 examples, the 90 sample cards, 67 localisation items) generate with no throw and no warning. The readings are the author's own knowledge, not checked entry by entry against a dictionary (none could be downloaded); the list is the single most important thing for a native speaker to check, and it is in one place.

### 6.2 The key (exact format)

| Rule | Decision | Example |
|---|---|---|
| Unit | **one Jyutping syllable per character, one space between syllables** (not grouped by word: Jyutping's tone digits already mark syllable ends, and tiles show the words) | 我係美國人 → *ngo5 hai6 mei5 gwok3 jan4* |
| Case | **all lowercase**, names and places too (Jyutping has no capitalisation rule; LSHK and dictionaries write lowercase) | 香港 → *hoeng1 gong2* |
| Tones | digit **1–6** at the end of every syllable, never omitted, never superscript | 你好 → *nei5 hou2* |
| Entering syllables | -p, -t, -k syllables take **1, 3 or 6** (never 7, 8, 9); changed tones may give them 2 | 七 *cat1*, 八 *baat3*, 十 *sap6*; 郵局 *jau4 guk2* |
| Initials | b p m f d t n l g k ng h gw kw w z c s j | 我 *ngo5*, 貴 *gwai3* |
| Finals | aa aai aau aam aan aang aap aat aak; a ai au am an ang ap at ak; e ei eu em en eng ep et ek; i iu im in ing ip it ik; o oi ou on ong ot ok; u ui um un ung up ut uk; oe oeng oet oek; eoi eon eot; yu yun yut | 去 *heoi3*, 靴 *hoe1*, 書 *syu1* |
| Syllabic nasals | *m* and *ng* alone, with a tone | 唔 *m4*, 五 *ng5* |
| j before yu and i | written as LSHK writes it: *jyu*, *ji* | 魚 *jyu2*, 二 *ji6* |
| **Lazy sounds** | **dictionary form only**: n- not l-, ng- kept, gw- kept, -ng / -k kept, ng not m | 你 *nei5* (said lei5), 我 *ngo5* (o5), 五 *ng5* (m5), 國 *gwok3* (gok3) |
| **Changed tones** | **written as said**, per word, from the list | 媽媽 *maa4 maa1*; 電話 *din6 waa2*; 幾多錢 *gei2 do1 cin2*; 雞蛋 *gai1 daan2*; 陳太 *can4 taai2* |
| Two readings | the list decides by word; alone, the default or a throw (§6.1) | 銀行 *ngan4 hong4*; 行路 *haang4 lou6*; 聽日 *ting1 jat6* |
| Punctuation | 。，？！、：； become `. , ? ! , : ;` attached to the syllable before; quotes, brackets, 「」, … dropped | 唔該，一杯凍奶茶。 → *m4 goi1, jat1 bui1 dung3 naai5 caa4.* |
| Spaces in the input | ignored except as a hint for segmentation | 我 係 美國人 → *ngo5 hai6 mei5 gwok3 jan4* |

**Why dictionary forms but spoken changed tones.** Lazy sounds vary by speaker and are stigmatised in education; the voice (Azure and device voices) is built on standard forms [inference]; a learner who says *nei5* is understood everywhere, one who learns *lei5* only is not wrong but sounds casual. Changed tones are part of the word itself: 電話 is never said *din6 waa6*, so writing citation tones would teach something nobody says. This is the convention of dictionaries such as CantoDict and words.hk [inference, not opened; §11].

**Lazy sounds in lessons:** `jyutping` and `tones` say once that many Hong Kong speakers say *lei5* for 你, *o5* for 我 and *m5* for 五, and that the course writes the dictionary form; card notes on 你, 我, 五, 國 repeat it. The matcher accepts the lazy forms as "almost" (request 6).

**What the aid does not show** (taught in `jyutping` and notes): aspiration (b / p, d / t, g / k, z / c, gw / kw); the unreleased final -p -t -k; long aa vs short a; the high-falling variant of tone 1; the 2 / 5 merger.

### 6.3 `pronPattern`

Built by `respell.js`'s `pattern()` from the same syllable rule the list is checked against: optional initial + final + tone digit, or syllabic *m* / *ng* + tone digit; syllables separated by one space; an optional `, . ? ! : ;` directly after a syllable. ASCII only, so it works with and without the `u` flag.

```
^(?:(?:ng|gw|kw|b|p|m|f|d|t|n|l|g|k|h|w|z|c|s|j)?(?:aang|oeng|aai|aau|aam|aan|aap|aat|aak|ang|eng|ing|ong|ung|oet|oek|eoi|eon|eot|yun|yut|aa|ai|au|am|an|ap|at|ak|ei|eu|em|en|ep|et|ek|iu|im|in|ip|it|ik|oi|ou|on|ot|ok|ui|um|un|up|ut|uk|oe|yu|a|e|i|o|u)|m|ng)[1-6][,.?!:;]?(?: (?:(?:ng|gw|kw|b|p|m|f|d|t|n|l|g|k|h|w|z|c|s|j)?(?:aang|oeng|aai|aau|aam|aan|aap|aat|aak|ang|eng|ing|ong|ung|oet|oek|eoi|eon|eot|yun|yut|aa|ai|au|am|an|ap|at|ak|ei|eu|em|en|ep|et|ek|iu|im|in|ip|it|ik|oi|ou|on|ot|ok|ui|um|un|up|ut|uk|oe|yu|a|e|i|o|u)|m|ng)[1-6][,.?!:;]?)*$
```

What it enforces: only lowercase Jyutping letters and digits 1–6; a tone digit on every syllable; only LSHK initials and finals; single spaces; punctuation only directly after a syllable. It rejects characters, capitals (*Nei5*), missing tones (*nei hou*), joined syllables (*nei5hou2*), double spaces, a space before punctuation, tone 7–9, tone marks (*néi*) and Chinese punctuation. It accepts some impossible combinations (*yu5* without j, *bot6*): the generator, not the pattern, is the guarantee.

Tested in node with `new RegExp(p, 'u')` and without the flag: all 1,102 list entries (on load), the 181 profile strings, and the 20 examples below pass; the 10 negatives above fail.

### 6.4 Twenty worked examples (all generated and all pass `pronPattern`)

| # | Cantonese | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | 你好 | `nei5 hou2` | hello | one syllable per character, spaces between syllables |
| 2 | 你好！ | `nei5 hou2!` | Hello! | punctuation turned into ASCII and attached; no capitals |
| 3 | 唔該 | `m4 goi1` | thanks (for a service); excuse me | syllabic m: m4 |
| 4 | 五 | `ng5` | five | syllabic ng: ng5 (often said m5: lazy form, not written) |
| 5 | 我 | `ngo5` | I, me | dictionary ng- kept: ngo5 (often said o5) |
| 6 | 你 | `nei5` | you | dictionary n- kept: nei5 (often said lei5) |
| 7 | 三 | `saam1` | three | long aa: saam1 |
| 8 | 心 | `sam1` | heart | short a: sam1 |
| 9 | 十 | `sap6` | ten | entering syllable in -p takes tone 6 (low) |
| 10 | 七 | `cat1` | seven | entering syllable in -t takes tone 1 (high) |
| 11 | 八 | `baat3` | eight | entering syllable in -t takes tone 3 (mid) |
| 12 | 媽媽 | `maa4 maa1` | mom | changed tone written as said: maa4 maa1 |
| 13 | 電話 | `din6 waa2` | phone | changed tone: 話 is waa6 alone, waa2 here |
| 14 | 幾多錢？ | `gei2 do1 cin2?` | How much is it? | 錢 is cin2 in speech |
| 15 | 銀行 | `ngan4 hong4` | bank | 行 is hong4 in this word |
| 16 | 行路 | `haang4 lou6` | to walk | 行 alone or in 行路 is haang4 |
| 17 | 聽日 | `ting1 jat6` | tomorrow | 聽 is ting1 here, teng1 (listen) alone |
| 18 | 你呢？ | `nei5 ne1?` | And you? | 呢 at the end is the particle ne1 |
| 19 | 呢個 | `ni1 go3` | this one | 呢 before a classifier is ni1 (this) |
| 20 | 唔該，一杯凍奶茶。 | `m4 goi1, jat1 bui1 dung3 naai5 caa4.` | An iced milk tea, please. | comma kept; sentence |

### 6.5 Card front, and hiding the Jyutping

- **Card front:** the characters, large. Under them, the Jyutping line, **shown by default** for the whole A1 course: 27 lessons are not enough to read characters unaided, and the Jyutping is how the learner links sound, tone and character.
- **Hideable:** a per-course setting "Jyutping: always / tap to reveal / off" (request 11, §10.7). Suggested prompt after lesson 20: "Reading characters well? Try hiding the Jyutping." Heritage learners who read characters may switch it off from day one; heritage learners who speak but do not read should keep it on and use it for tones.
- **Lesson example rows** show the Jyutping under the Cantonese, with the same setting.
- **Practice items carry no pron** (PRACTICE-SPEC), with two exceptions for this course: sound-stage items whose answer *is* Jyutping, and the one tone `mc` item per set (§7).

### 6.6 What lesson 1 (`jyutping`) must teach so the aid can be read

1. One character = one syllable = one Jyutping chunk ending in a digit; the digit is the tone (lesson 2).
2. Initials that lie to English readers: j = y; z = "dz" (no puff), c = "ts" (puff); b / d / g without a puff, p / t / k with one; ng- at the start; gw, kw.
3. Finals: long aa vs short a; eo, oe, yu (rounded vowels English lacks); eu, oi, ui; final -p -t -k stopped, not released; -m -n -ng.
4. Syllabic m and ng: 唔 *m4*, 五 *ng5*.
5. Lazy sounds exist; the course writes the dictionary form (§6.2).
6. Yale in one line for heritage learners who met it.
7. The aid is a crutch: listen first, and hide it once the characters are familiar.

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things.
- **(a) Tones.** The tone makes the word: 詩 si1 / 史 si2 / 試 si3 / 時 si4 / 市 si5 / 事 si6; 買 maai5 / 賣 maai6; 係 hai6 / 喺 hai2; 四 sei3 / 死 sei2; plus changed tones in common words (電話 din6 waa2, 媽媽 maa4 maa1).
- **(b) Cantonese order and classifiers.** When, where and how go **before the verb** (我聽日喺屋企食飯; 我搭地鐵返工; 我都去); the owner or describer goes **before the noun** (我嘅朋友, 好靚嘅衫); a counted, pointed-at or owned noun takes a **classifier** (三本書, 呢杯茶, 我部手機 = my phone, 本書 = the book).

**Why these two.**
- Tones: the one area with learner data for an English speaker (Matthews: 50% tone accuracy even in a fluent American learner; tone 1 pulled in everywhere) and acoustic data on which pairs are close (Zhang et al. 2018, other L1), present in every syllable from lesson 1, so the four sound-stage lessons have a hinge before any grammar exists. The JSON has no exemption field, so the rule must be reachable in every set.
- Order and classifiers: the structural errors in almost every sentence from lesson 5 on (§4.2–4.4), and Cantonese uses the classifier more than Mandarin does (as "the" and "my", §4.2). Classifiers are a slot problem ("number / 呢 / owner + classifier + noun"), so they share the strand with order. This also mirrors en-zh, so reviewers and writers moving between the courses see the same shape.
- **Not chosen:**
  - **唔 / 冇 / 未:** a choice of word, and lesson-bound (it needs a time context). It is the preferred "mixed neighbour" in the last two items of later sets instead (§8).
  - **係 before adjectives:** lesson-local (`hai`, `describing`), and a Traps deck point.
  - **Particles:** hard to check mechanically (several are often acceptable), so they are taught and modelled, not counted.

**How strand (a) stays alive after the sound stage.** Practice items are in characters, which do not show tones. So:
- In the four sound-stage lessons (`jyutping`, `tones`, `greetings`, `characters`) the hinges are **Jyutping items**: `or` tiles are Jyutping syllables with a tone twin as the distractor; `ty` answers are typed Jyutping with tone numbers. (`greetings` may instead hinge on strand (b) with 我叫 / 一杯 items; see the hardest-lessons list.)
- **From lesson 3 on, every set's `mc` block includes at least one tone item**: "Which is the Jyutping of 買 (to buy)?" with options *maai5 / maai6 / maai4 / maai2*, or "Which word is *hai2* (at, in)?" with character options 喺 / 係 / 嚟 / 去. A writer rule, not a validator rule (`mc` items are not counted).
- PRACTICE-SPEC says "No romanization in practice items". For en-yue that is overridden in exactly these places: sound-stage items, and the tone `mc` item. Elsewhere practice stays in characters.
- `accents` is false (Jyutping has no marks), so the engine has no "almost" path for Jyutping today: a toneless or wrong-tone Jyutping answer is simply wrong. No `'!strict'` is needed. When request 6 is built, missing tones become "almost" and wrong tones stay wrong.

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least **2 `or` items** and **2 `ty` items** hinge on (a) or (b), and their `why` names it with a keyword. A 14-item set has 3 `or` and 3 `ty`, so two of each three.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`or`, strand (a):** the tiles are Jyutping, and `x` holds a tone twin of a tile in `a` (same letters, different digit: *hai6* → *hai2*; *maai5* → *maai6*).
- **`or`, strand (b):** `a` puts a time word, place phrase or means before the verb, a describer before the noun, or number / 呢 / 嗰 / owner + classifier before the noun; and `x` holds a tile that only fits the English order or a wrong classifier (個 where 本 is needed; 係 where 好 is needed counts only if the item is about order).
- **`ty`, strand (a):** the answer is Jyutping with tone numbers, and `x` holds a tone twin.
- **`ty`, strand (b):** `a[0]` contains time / place / means + verb, describer + noun, or number / 呢 / owner + classifier + noun; `x` holds a wrong classifier or a tile that rebuilds the English order. (The validator rejects an `x` word that can rebuild an accepted answer, so a misplaced-word distractor must not be a word of the answer: use a wrong classifier, 係 in the wrong function, or 嘅 where the classifier is needed.)

**Examples in the shorthand** (Cantonese practice tiles are spaced by word, §10.4):

```
['or', 'Hello (Jyutping)', 'nei5 hou2', 'nei2 hou5', 'nei5 has tone 5 and hou2 has tone 2.']
['ty', 'Type the Jyutping of 買 (to buy)', 'maai5', 'tone 5 · type the number after the letters', 'maai6', '買 is maai5 with tone 5; maai6 (tone 6) is to sell.']
['or', 'I am going to Hong Kong tomorrow', '我 聽日 去 香港', '咗', 'Time goes before the verb: 我聽日去香港.']
['or', 'three books', '三 本 書', '個', 'Books take the classifier 本.']
['ty', 'I work at a bank', '我 喺 銀行 做嘢|我喺銀行做嘢', '喺 · 銀行 · 做嘢 · where comes first', '係', 'Where it happens goes before the verb: 我喺銀行做嘢.']
['ty', 'my phone (no 嘅)', '我 部 手機|我部手機', '我 · 部 · 手機', '個 嘅', 'Owner + classifier + noun means my: 我部手機.']
```

(The second answer in each `ty` list is the unspaced twin, needed until request 4 is built, §10.7.)

**Lessons where the rule is hardest, with two hinges each** (or / ty):
- `jyutping` (tones only as notation): or *nei5 hou2* (x *nei2*); *m4 goi1* (x *m2*). ty "Type the Jyutping of 三 (three)" → *saam1* (x *saam3*); "of 我 (I)" → *ngo5* (x *ngo6*). why: "三 is saam1, tone 1: high and level."
- `tones`: or "I want to buy (Jyutping)" *ngo5 soeng2 maai5* (x *maai6*); or a two-syllable tone-twin set such as *si1 si3* (x *si4*). ty "Type the Jyutping of 賣 (to sell)" → *maai6* (x *maai5*). why: "賣 has tone 6: low and level."
- `greetings`: tone items with the greetings in Jyutping (*do1 ze6* x *do1 ze2*; *zou2 san4* x *zou2 san1*), or strand (b): "one milk tea, please" 唔該 一 杯 奶茶 (x 個), why "Milk tea in a cup takes the classifier 杯."
- `characters`: ty "Type the Jyutping of 好 (good)" → *hou2* (x *hou3*); or "a good person" 好 人 (x 係): "The describer goes before the noun: 好人."
- `hai`, `intro`, `m`: strand (b) through describer + noun (我朋友, 美國人), 都 before the verb (我都係學生), and place before the verb in 我住喺… (住喺 is the one verb + 喺 order: the place comes after 住; tell writers to hinge on something else in that item).
- `questions`, `particles`: time or place before the verb inside a question (你聽日去邊度呀？ 你喺邊度做嘢呀？), with the time word given in the hint.
- `numbers`, `prices`: number + classifier + noun (兩個人, x 二); 三十蚊.
- `zo`, `gan-gwo`, `go-come`, `suggest`: time before the verb (我琴日去咗街市), means before the verb (我搭小巴去), classifiers in objects (我買咗兩本書).

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\btones? [1-6]\b|\btone (?:twins?|pairs?|numbers?)\b|\bchanged tones?\b|\bclassifiers?\b|\bbefore the (?:verb|noun)\b
```

Use them like this:
- strand (a): "tone" + a digit ("tone 5", "tones 3 and 6"), "tone twin", "tone pair", "tone number", "changed tone";
- strand (b): "before the verb", "before the noun", "classifier".

These are deliberately **not** keywords: bare "tone" ("a polite tone"), "word order", "before a noun", "comes first", "measure word" (writers use "classifier"). All keywords are ASCII. Do not use them in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 44 of 44 as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| 買 (maai5) has tone 5; 賣 (maai6) has tone 6. | match | should match |
| Tone 1 is high and level: si1. | match | should match |
| Tone 2 rises from the middle: si2. | match | should match |
| Tone 3 is mid and level, tone 6 is low and level. | match | should match |
| Tone 4 falls low: si4. | match | should match |
| 係 is tone 6 and 喺 is tone 2: hai6, hai2. | match | should match |
| Tone twins: 詩 si1 and 試 si3 differ only in pitch. | match | should match |
| Check the tone number at the end: nei5, not nei2. | match | should match |
| Changed tone: 話 becomes waa2 in 電話. | match | should match |
| Entering syllables like sik1 take tones 1, 3 or 6. | match | should match |
| Books take the classifier 本: 三本書. | match | should match |
| A number needs a classifier before the noun: 兩個人. | match | should match |
| Owner + classifier + noun means my: 我本書. | match | should match |
| 呢 + classifier + noun: 呢杯茶. | match | should match |
| Classifiers: 張 for flat things like tickets. | match | should match |
| Time goes before the verb: 我聽日去. | match | should match |
| Place with 喺 goes before the verb: 我喺銀行做嘢. | match | should match |
| When and where both go before the verb: 我今日喺屋企食飯. | match | should match |
| 都 goes before the verb, not at the end like English too. | match | should match |
| The describer with 嘅 goes before the noun: 好靚嘅衫. | match | should match |
| How you travel goes before the verb: 搭地鐵返工. | match | should match |
| 兩, not 二, before a classifier. | match | should match |
| Use 唔該 for a service and 多謝 for a gift. | no match | should not match |
| 係 joins two nouns; adjectives take 好, not 係. | no match | should not match |
| 冇 is the negative of 有: never 唔有. | no match | should not match |
| 唔 is for habits and the future; 冇 for what did not happen. | no match | should not match |
| 未 means not yet. | no match | should not match |
| The question word stays where the answer goes. | no match | should not match |
| 咗 shows the action is done. | no match | should not match |
| Cantonese verbs never change for time. | no match | should not match |
| Use 定 in questions and 或者 in statements. | no match | should not match |
| Say it in a polite tone with 唔該. | no match | should not match |
| 啦 makes a request softer. | no match | should not match |
| 吖 turns it into an invitation. | no match | should not match |
| 呢 asks the same question back: 你呢？ | no match | should not match |
| j sounds like the y in yes. | no match | should not match |
| The verb comes after the subject. | no match | should not match |
| Tones matter. | no match | should not match |
| Answer with the verb, not with yes. | no match | should not match |
| Word order: subject, verb, object, as in English. | no match | should not match |
| 過 means you have done it before, not that you went. | no match | should not match |
| Adjectives work like verbs: no 係. | no match | should not match |
| Put 都 after the subject. | no match | should not match |
| We have 6 tones in total, not 9. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4 and §5):
- **Kept: all 25 items.** Ids lose the `yue-` prefix; each appears exactly once in a `roadmap` field.
- **Moved: `particles`** from the last lesson (25) to the end of stage 2 (lesson 15). Particles are in every dialogue from `intro` on, a bare sentence sounds curt (§4.8), and `food`, `ding-dou` and `suggest` need 啦 and 吖 to make polite requests and invitations. `suggest` stays last and reuses 吖.
- **Renamed** (titles gain the English-speaker point): `classifiers` "Classifiers: 個, 本, 杯, 張, and 'my' with 我本書"; `ge` "嘅: my, your, his (我嘅, 佢嘅)"; `hai2` "喺 (at, in), not 係: 我喺香港"; `jau-mou` "有 and 冇: have, and there is (never 唔有)"; `describing` "Describing and comparing: 好, 太, 幾, 過 (no 係)"; `zo` "咗: done; 冇 (didn't) and 未 (not yet)"; `gan-gwo` "緊 and 過: doing it now, and ever done it"; `greetings` "Hello, thanks and sorry: 唔該 and 多謝". Sound lessons keep plain titles.
- **Widened:** `classifiers` also teaches the bare classifier as "the" and owner + classifier as "my" (§4.2); `describing` also teaches comparison with 過 (Durham Step 2 lists 啲 for comparison); `zo` also teaches 冇 + verb for "didn't" (§4.6); `prices` also teaches 兩 / 二 in prices and 毫.
- **Added (2)**, each with an empty `roadmap` field:
  - `family` (lesson 12, after `ge`): family words on both sides, 屋企, age with 幾多歲 and no 係 (§5 need 3; Durham Step 1 has family members).
  - `routine` (lesson 19, after `time`): a day's routine in the fixed order who + when + where + how + verb (§4.3), with 返工 / 放工 / 食晏 / 沖涼 / 瞓覺; the roadmap has time words but no lesson that drills their place. It carries strand (b) of the standing rule.
- **Stages:** the roadmap's four, unchanged in name. Stage 2 grows from 9 to 11 lessons (`family`, `particles`); stage 3 from 6 to 7 (`routine`); stage 4 shrinks from 6 to 5.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Jyutping, tones and first characters** | | | |
| 1 | `jyutping` | Jyutping: initials and finals | yue-jyutping | One character = one syllable; initials (b / p, d / t, g / k without and with a puff; z = "dz", c = "ts", j = y; ng-, gw, kw) and finals (aa vs a, eo, oe, yu, eu; -p -t -k stopped; syllabic m and ng); lazy sounds named; Yale in one line; how to read the aid (§6.6). Trap: j, z, c, eo read as English; final p / t / k released with a puff. | Jyutping sounds |
| 2 | `tones` | The six tones, numbered 1 to 6 | yue-tones | Tone 1 high, 2 mid rising, 3 mid level, 4 low falling, 5 low rising, 6 low level; entering syllables take 1, 3, 6; tone twins 詩 史 試 時 市 事, 買 / 賣, 係 / 喺, 四 / 死; changed tones in one paragraph (媽媽, 電話); particles keep their own tones, so no English question rise. Trap: everything pulled to tone 1; 3 / 6 and 2 / 5 merged (§4.1). | Tone twins |
| 3 | `greetings` | Hello, thanks and sorry: 唔該 and 多謝 | yue-greetings | 你好, 早晨, 唔該 (service, please, excuse me) and 多謝 (gifts, kind words), 唔該晒 / 多謝晒, 唔使客氣, 對唔住 vs 唔好意思, 拜拜, 早抖; first classifier in passing: 唔該，一杯奶茶. Trap: 多謝 to a server; 你好 to friends; 你好嗎 as a casual "hi" (§4.9). | Greetings and courtesy |
| 4 | `characters` | First characters: strokes and radicals | yue-characters | Pictographs (人 口 日 月 山 水 木) and compounds (好, 明, 休, 林); radicals as hints; the 口 radical on spoken-Cantonese characters (嘅 咗 啲 嘢 呢 嚟 喺); traditional vs simplified in one line; SWC forms on signs (出口) for recognition; the 250-character goal (§10.2). Trap: expecting an alphabet; reading 口-radical characters as if they were Mandarin. | First characters |
| | | **Stage 2: First sentences** | | | |
| 5 | `hai` | 係 (to be) and the pronouns 我, 你, 佢 | yue-hai | Noun + 係 + noun (我係學生, 佢係老師); 唔係; 我 你 佢 + 哋 for the plural; 佢 = he, she or it; 係 never before an adjective (preview). Trap: 佢係攰; 他 (SWC) for 佢. | People and family |
| 6 | `intro` | Introducing yourself: 我叫…, 我係美國人 | yue-intro | 我叫安娜, 你叫咩名呀？, 我姓陳, 貴姓 (recognition), 我係美國人, 我住喺三藩市, 我識講少少廣東話; 呀 as the friendly question ending. Trap: question word first (咩你叫); *我名係… calque. | About me |
| 7 | `m` | 唔 (not) and yes/no questions: 係唔係, 好唔好 | yue-m | 唔 + verb or adjective; verb-not-verb questions (去唔去？ 係唔係？ 好唔好？), 係咪 as the short form (recognition); answers repeat the verb (係 / 唔係, 去 / 唔去): no word for yes and no; 嗎 recognition only. Trap: answering 係 to every question; 唔有 (preview of 冇). | Questions and particles |
| 8 | `questions` | Question words: 咩, 邊個, 邊度, 幾時, 點解 | yue-questions | The question word stays where the answer goes (你食咩呀？ 佢係邊個？ 你住喺邊度呀？ 你幾時去呀？ 點解？); 點 (how), 幾多; + 呀 or 呢. Trap: question word first (§4.4). | Questions and particles |
| 9 | `numbers` | Numbers: 一 to 十, 百, 千, 萬 | yue-numbers | 一 to 十, 十一 to 九十九 (廿 for 20s in speech, recognition), 百, 千, 萬, 零 in 一百零五; 兩 vs 二 (兩個, 二十); 萬 grouping (十萬 = 100,000); phone numbers digit by digit. Trap: 二個; 100,000 said with 千 (§4.11). | Numbers and money |
| 10 | `classifiers` | Classifiers: 個, 本, 杯, 張, and 'my' with 我本書 | yue-classifiers | Number / 呢 / 嗰 / 邊 / 幾 + classifier + noun; 個, 本, 杯, 張, 隻, 件, 條, 架, 部, 間; classifier + noun = "the" (本書喺邊度？); owner + classifier + noun = "my" (我部手機). Trap: 三書, 呢書, 個 for everything, 我嘅 everywhere (§4.2). | Classifiers |
| 11 | `ge` | 嘅: my, your, his (我嘅, 佢嘅) | yue-ge | Owner + 嘅 + noun (我嘅電話, 老師嘅書); 嘅 dropped with family and home (我媽媽, 我屋企); owner + classifier + noun as the everyday alternative; 呢本書係我嘅 (mine). Trap: English order (書我嘅); 's copied with 嘅 after the noun. | About me |
| 12 | `family` | Family and age | (added) | 爸爸 媽媽 哥哥 家姐 細佬 細妹; 爺爺 嫲嫲 (father's side), 公公 婆婆 (mother's side); 老公 老婆; 我屋企有四個人; 你幾多歲呀？ 我今年三十歲 (no 係); changed tones in family words (媽媽 maa4 maa1). Trap: no plain "brother", "sister" or "grandma"; 我係三十歲; 二個哥哥. | People and family |
| 13 | `hai2` | 喺 (at, in), not 係: 我喺香港 | yue-hai2 | Thing + 喺 + place (我喺香港, 洗手間喺邊度？); 喺 + place before the verb (我喺銀行做嘢); place words after the noun (屋企入面, 枱上面, 銀行隔籬, 超市對面); 住喺 as the one verb with the place after it. Trap: 我做嘢喺銀行; 係 (hai6) for 喺 (hai2): tone twins (§4.1, §4.3). | Around town and directions |
| 14 | `jau-mou` | 有 and 冇: have, and there is (never 唔有) | yue-jau-mou | 我有…, 我冇…; place + 有 + thing (附近有冇地鐵站呀？); 有冇 questions; 冇 is the only negative of 有. Trap: 唔有; English order "there is a bank nearby" → *有間銀行喺附近 (awkward); answering 係 to 有冇. | Traps for English speakers |
| 15 | `particles` | Sentence-final particles: 呀, 啦, 吖, 呢 | yue-particles (moved) | Why a bare sentence sounds curt; 呀 (soft questions and statements), 啦 (requests, agreeing: 好啦, 快啲啦), 吖 (offers and invitations), 呢 (你呢？, soft question-word questions); recognition: 㗎, 咩, 喎, 囉, 嘛 (§2.5); each particle has its own tone, no English rise. Trap: no particles; English question intonation on top (§4.8). | Questions and particles |
| | | **Stage 3: Getting things done** | | | |
| 16 | `prices` | Money and prices: 幾多錢？, 蚊, 平啲 | yue-prices | 幾多錢呀？; 蚊 (dollar, in speech), 毫 / 毫子 (ten cents), 港幣; 三十五蚊, 一百蚊; 平啲得唔得呀？; 八達通; 畀錢; 太貴喇. Trap: 元 in speech; dropping 蚊; 二十蚊 vs 廿蚊 (both, recognition). | Shopping |
| 17 | `food` | Ordering food and drink: 唔該, 要, 埋單 | yue-food | 唔該，我要一杯凍奶茶; 一籠蝦餃, 一碟炒飯, 一碗雲吞麵; 走冰, 少甜; 飲茶 (dim sum) and the 茶餐廳; 堂食定外賣？ (recognition); 唔該埋單！ Trap: dropping the classifier (要兩奶茶); 多謝 to the server; *請畀我 (§4.9). | Food and drink |
| 18 | `time` | Clock time and dates: 幾點？, 三點半, 星期一 | yue-time | 而家幾點呀？ 三點, 三點半, 三點十分 (三點兩個字 recognition: 字 = five minutes); 今日 聽日 琴日; 星期一 / 禮拜一; 十二月三號 (month before day); time words before the verb. Trap: time at the end (我去聽日); day before month (§4.3). | Time, days and dates |
| 19 | `routine` | My day: time and place before the verb | (added) | The fixed line who + when + where + how + verb + what (我聽日喺屋企食飯; 我朝早搭地鐵返工); 朝早, 晏晝, 夜晚; 返工, 放工, 食晏, 沖涼, 瞓覺; 每日, 成日, 有時. Trap: English order at the end of the sentence (§4.3). | Time, days and dates |
| 20 | `modals` | Want, can, like: 想, 可以, 識, 會, 鍾意, 要 | yue-modals | 想 (would like), 要 (want, need, will), 識 (know how: 我識講廣東話), 會 (will, likely), 可以 (may, can: allowed or possible), 鍾意 (like) + noun or verb, 應該 (should, recognition); 唔想, 唔識, 唔可以, 唔使 (no need). Trap: 可以 for a learned skill (我可以講廣東話 → 我識講). | Work and study |
| 21 | `ding-dou` | Choices and 'also': A 定 B？ and 都 | yue-ding-dou | 凍定熱呀？; 你去定唔去呀？; 定 in questions, 或者 in statements; 同 / 同埋 for "and" between nouns; 都 after the subject, before the verb (我都係, 我哋都去). Trap: 或者 in a question; 都 at the end like "too" (§4.3). | Food and drink |
| 22 | `describing` | Describing and comparing: 好, 太, 幾, 過 (no 係) | yue-describing | Adjectives with no 係 (佢好高: 好 is often just glue), 太貴, 幾好 (quite), 唔係幾好 (not very), 咁 (so), 麻麻哋 (so-so); comparing: adjective + 過 + noun (佢高過我), adjective + 啲 (平啲, 大啲); describer + 嘅 + noun (好靚嘅衫). Trap: 佢係高; 好 read as "good" (好平 = very cheap) (§4.5). | Describing things |
| | | **Stage 4: Actions in time and getting around** | | | |
| 23 | `zo` | 咗: done; 冇 (didn't) and 未 (not yet) | yue-zo | Verb + 咗 for a completed action (我食咗飯, 我買咗兩本書); 冇 + verb for didn't (我冇去); 未 for not yet (我未食), …咗未呀？ (你食咗飯未呀？); change of state (我感冒咗); no 咗 for past habits or states. Trap: 咗 as a past tense; 我唔去咗; 冇…咗 (§4.6, §4.7). | Health and help |
| 24 | `gan-gwo` | 緊 and 過: doing it now, and ever done it | yue-gan-gwo | Verb + 緊 for an action in progress (我食緊飯, 你做緊乜嘢呀？); verb + 過 for experience (你去過香港未呀？ 我去過); 未…過 (never yet), 冇…過 (never); 咗 vs 過. Trap: 去過 for "went"; 係 + verb for "I am eating" (§4.7). | Getting around |
| 25 | `go-come` | 去 and 嚟: going and coming; 搭車, 坐地鐵 | yue-go-come | 去 + place, 嚟 + place (嚟我屋企吖); 返 (go back: 返屋企, 返工, 返學); means before the verb (搭地鐵去中環, 坐巴士返工, 行路去); 上車 / 落車; 前面有落. Trap: means after the destination (*我去中環搭地鐵 means "go to Central to take the MTR") (§4.3). | Getting around |
| 26 | `directions` | Directions: 左邊, 右邊, 直行, 對面 | yue-directions | 請問…喺邊度呀？; 直行, 轉左, 轉右, 過馬路; 喺…對面 / 隔籬 / 前面 / 後面; 行幾分鐘; place word after its noun (銀行對面); 遠唔遠呀？ Trap: 對面銀行 for "across from the bank" (English order); 行 read hong4. | Around town and directions |
| 27 | `suggest` | Suggestions and invitations: 不如…？, 一齊…吖 | yue-suggest | 不如去飲茶吖？; 一齊食飯吖; answers 好吖 / 好啦 / 下次啦 (polite no); 得唔得呀？; 唔好 + verb (don't); 我哋 + verb + 啦 (let's). Trap: bare commands (去飲茶！) that sound bossy; no particle on an invitation. | Food and drink |

Per-lesson notes for writers:
- Every set satisfies §7: two `or` and two `ty` hinges, and from lesson 3 on one tone `mc` item.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: 唔 / 冇 / 未, 係 against 好, 係 against 喺, a classifier, 兩 / 二.
- Accepted answers list the natural variants: with and without the subject when the prompt's context gives it; with and without 呀 at the end of questions; 我嘅朋友 | 我朋友 where both are natural; 禮拜一 | 星期一; 二十 | 廿 in numbers; 畀 | 俾 is handled by the matcher (request 5), not by listing.
- Cue the prompt when several Cantonese words fit ("(use 識)", "(to a server)", "(a cup)").
- Lesson bodies are in English with the Cantonese in `<b>` and the Jyutping in `<i>` at first mention (§2.6). Example rows `{{ex:Cantonese|pron|English}}` take the generated pron.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards). Card shape: `target | pron | meaning | note`.
- `target`: Cantonese in traditional characters, no spaces, full-width punctuation for sentences; nouns with a number or 呢 + classifier where natural (三本書, 一杯咖啡).
- `pron`: generated (§6). Never typed.
- `meaning`: short American English.
- `note`: one English line, or empty. Tone notes, lazy-sound notes, code-mixing notes and traps go here.

**Groups, in order:**

| Group | Decks |
|---|---|
| Sounds and script | Jyutping sounds · Tone twins · First characters |
| First steps | Greetings and courtesy · People and family · About me |
| Everyday words | Numbers and money · Classifiers · Food and drink · Shopping · Time, days and dates |
| Out and about | Around town and directions · Getting around · Work and study · Health and help |
| Conversation | Describing things · Questions and particles · Traps for English speakers |

**Script decks work as ordinary decks** (no letter-drill machine needed, §10.1): every card's target is a real character or word the voice can read, the pron shows the Jyutping, and the note names the sound point. Rules:
- **Jyutping sounds** (about 18 cards): one character for each letter or sound that misleads: b / p (波 bo1, 婆 po4), d / t (打, 他), g / k (雞 gai1, 溪 kai1), z / c (早, 草), j (有, 魚), ng- (我), gw / kw (貴, 誇), aa / a (三 / 心), eo (去), oe (靴), yu (書), final -p -t -k (十, 七, 六), syllabic m / ng (唔, 五). Prefer characters the course uses later.
- **Tone twins** (about 18): each card is one member of a set; its note names the others. Sets: 詩 史 試 時 市 事; 買 賣; 係 喺 (careful: both are function words, so the meaning column says "to be" and "at, in"); 四 死; 九 夠 舊; 雞 計; 鬼 貴 跪; 交 餃 教; 分 粉 瞓 份; 夫 虎 富 扶 婦 父 (pick three). Avoid characters with two readings as targets (行, 長, 樂): the voice may pick the other one.
- **First characters** (about 18): pictographs and two-part compounds (人 口 日 月 山 水 火 木 林 明 好 休 大 小 中 上 下 門 雨 心 手 女 子), plus 2–3 cards on the 口 radical of Cantonese-only characters (口 note, 嘅, 咗). A lone radical is not a card (the voice cannot read it).
- **Traps for English speakers** (about 18): about 6 係 / 好 and calque cards (我好攰, 佢好高, 我三十歲, 好平 = very cheap); about 6 negation and number cards (我冇錢, 我冇去, 我未食, 兩個人, 十萬); about 6 politeness and false-friend cards (唔該 / 多謝 pair, 你食咗飯未呀？, 飲茶, 返工, 鬼佬 (note: avoid using it), 你好 to friends).
- Within a deck no two cards share a meaning (validator); in Tone twins and Jyutping sounds that is easy, because every character means something different.
- Everything in Traps and in the politeness notes is [inference] plus the practitioner sources in §2.4 and §4, so it is in the native-check list (§11).

**Five sample cards per deck** (all `pron` values generated by `respell.js` and checked against `pronPattern`):

**1. Jyutping sounds** (Sounds and script). One character per sound point: the Jyutping letters English readers misread (j, z, c, ng-, gw, aa / a, eo, oe, yu, final -p -t -k, syllabic m and ng). Lessons: `jyutping`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 有 | jau5 | to have | j sounds like English y: jau5 rhymes with 'how' after a y. |
| 早 | zou2 | early | z is like the ds in 'beds', with no puff of air. c (as in 草 cou2) has the puff. |
| 我 | ngo5 | I; me | ng- at the start, like the ng of 'singer'. Many young speakers say o5; learn ngo5. |
| 三 | saam1 | three | aa is long, as in 'father'. 心 sam1 (heart) has the short a. |
| 十 | sap6 | ten | Final p: close your lips and stop. No puff, no extra vowel. |

**2. Tone twins** (Sounds and script). Same letters, different tone, different word: 詩 史 試 時 市 事, 買 / 賣, 四 / 死, 係 / 喺. Lessons: `tones`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 詩 | si1 | poem | Tone 1: high and level. Its twins: 史 si2, 試 si3, 時 si4, 市 si5, 事 si6. |
| 試 | si3 | to try | Tone 3: mid and level, like speaking calmly. |
| 時 | si4 | time; hour | Tone 4: low and falling, the lowest tone. |
| 買 | maai5 | to buy | Tone 5: low, rising a little. Say it with tone 6 and you get 賣 (to sell). |
| 賣 | maai6 | to sell | Tone 6: low and level. Mix up 買 and 賣 and you swap buyer and seller. |

**3. First characters** (Sounds and script). Pictures and compounds to recognise: 人 口 日 月 山 水 木 林 明 好 休, and the 口 that marks spoken-Cantonese characters. Lessons: `characters`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 人 | jan4 | person | Two legs walking. |
| 口 | hau2 | mouth | As a radical on the left it often marks a spoken-Cantonese word: 嘅 咗 啲 嘢 呢. |
| 日 | jat6 | sun; day | Once a circle with a dot. 今日 = today. |
| 明 | ming4 | bright | 日 (sun) + 月 (moon). |
| 好 | hou2 | good | 女 (woman) + 子 (child). Also 'very': 好平 (very cheap). |

**4. Greetings and courtesy** (First steps). Hello, the two thank-yous 唔該 and 多謝, sorry, goodbye and good night. Lessons: `greetings`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 早晨！ | zou2 san4! | Good morning! | Until about noon. There is no everyday 'good afternoon'. |
| 唔該！ | m4 goi1! | Thanks! / Excuse me! (for a service) | For a service or a small favor, and to call a server. Literally 'it shouldn't be'. |
| 多謝！ | do1 ze6! | Thank you! (for a gift or kind words) | For gifts, money and compliments. To a server, say 唔該. |
| 唔好意思。 | m4 hou2 ji3 si3. | Excuse me. / Sorry. (small things) | Bumping into someone, being late. A real apology is 對唔住. |
| 拜拜！ | baai1 baai3! | Bye! | From English 'bye-bye', the usual goodbye. 再見 is more formal. |

**5. People and family** (First steps). Pronouns with 哋, family members on both sides, and friends. Lessons: `hai`, `family`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 佢哋 | keoi5 dei6 | they; them | 哋 makes a pronoun plural: 我哋 (we), 你哋 (you all). |
| 媽媽 | maa4 maa1 | mom | The second syllable rises to tone 1: maa4 maa1. |
| 家姐 | gaa1 ze1 | older sister | There is no plain 'sister': younger sister is 細妹. |
| 細佬 | sai3 lou2 | younger brother | Older brother: 哥哥. 細佬 is also 'little brother' in general. |
| 婆婆 | po4 po2 | grandma (mother's mother) | Your father's mother is 嫲嫲. |

**6. About me** (First steps). Name, nationality, where you live, languages, and small talk about yourself. Lessons: `intro`, `ge`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 我叫安娜。 | ngo5 giu3 on1 naa4. | My name is Anna. | 叫 = to be called. |
| 你叫咩名呀？ | nei5 giu3 me1 meng2 aa3? | What's your name? | The question word sits where the answer goes: 我叫安娜. |
| 我係美國人。 | ngo5 hai6 mei5 gwok3 jan4. | I'm American. | Country + 人 (person): 香港人, 中國人. |
| 我住喺三藩市。 | ngo5 zyu6 hai2 saam1 faan4 si5. | I live in San Francisco. | 三藩市 is the name Cantonese speakers use; 舊金山 is also heard. |
| 我識講少少廣東話。 | ngo5 sik1 gong2 siu2 siu2 gwong2 dung1 waa2. | I can speak a little Cantonese. | 識 = know how to. 少少 = a little. |

**7. Numbers and money** (Everyday words). Numbers to ten thousand and beyond, 兩 and 二, and prices in 蚊. Lessons: `numbers`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 兩個 | loeng5 go3 | two (of something) | 兩 before a classifier, never 二: 兩個人, 兩杯茶. |
| 十五 | sap6 ng5 | fifteen | Ten + five. Fifty is 五十. |
| 一百五 | jat1 baak3 ng5 | a hundred and fifty | Short for 一百五十. 105 is 一百零五. |
| 一萬 | jat1 maan6 | ten thousand | Cantonese counts in 萬 (10,000): 100,000 is 十萬. |
| 二十五蚊 | ji6 sap6 ng5 man1 | 25 dollars | 蚊 is 'dollar' in speech; 元 is the written word on price tags. |

**8. Classifiers** (Everyday words). Number, this / that or owner + classifier + noun: 個, 本, 杯, 張, 隻, 部, 架. Lessons: `classifiers`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 一個人 | jat1 go3 jan4 | one person; a person | 個 is the general classifier, but many nouns have their own. |
| 三本書 | saam1 bun2 syu1 | three books | 本 for books and magazines. Not 三書. |
| 兩張飛 | loeng5 zoeng1 fei1 | two tickets | 張 for flat things: tickets, tables, photos, paper. 飛 is 'ticket' (from English 'fare'). |
| 一隻貓 | jat1 zek3 maau1 | a cat | 隻 for most animals, and for one of a pair (一隻鞋). |
| 我部手機 | ngo5 bou6 sau2 gei1 | my phone | Owner + classifier + noun means 'my': no 嘅 needed. |

**9. Food and drink** (Everyday words). Dim sum, the cha chaan teng (Hong Kong café), drinks, and ordering and paying. Lessons: `food`, `ding-dou`, `suggest`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 飲茶 | jam2 caa4 | to have dim sum (yum cha) | Literally 'drink tea': a dim sum meal with tea. |
| 蝦餃 | haa1 gaau2 | shrimp dumplings | A dim sum classic: 一籠蝦餃 (a steamer of shrimp dumplings). |
| 凍奶茶 | dung3 naai5 caa4 | iced milk tea | Hong Kong milk tea, strong and creamy. Hot: 熱奶茶. |
| 唔該，走冰。 | m4 goi1, zau2 bing1. | No ice, please. | 走 = leave out. Less sweet: 少甜. |
| 唔該埋單！ | m4 goi1 maai4 daan1! | Check, please! | Say it to any server, or draw a little circle in the air. |

**10. Shopping** (Everyday words). Prices, sizes, a little bargaining, and paying by Octopus card. Lessons: `prices`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 幾多錢呀？ | gei2 do1 cin2 aa3? | How much is it? | 呀 makes it friendly. Answer: 三十蚊. |
| 平啲得唔得呀？ | peng4 di1 dak1 m4 dak1 aa3? | Could you make it a bit cheaper? | Fine at markets, not in malls or chain stores. |
| 有冇大碼呀？ | jau5 mou5 daai6 maa5 aa3? | Do you have it in a large? | Sizes: 細碼, 中碼, 大碼. |
| 我睇吓先。 | ngo5 tai2 haa5 sin1. | I'm just looking. | 先 at the end: 'first', i.e. for now. |
| 可唔可以用八達通呀？ | ho2 m4 ho2 ji5 jung6 baat3 daat6 tung1 aa3? | Can I pay with an Octopus card? | 八達通: the transit card that also pays in shops. |

**11. Time, days and dates** (Everyday words). Clock time, days of the week, dates, today and tomorrow, and parts of the day. Lessons: `time`, `routine`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 聽日 | ting1 jat6 | tomorrow | Time words go before the verb: 我聽日去. |
| 星期一 | sing1 kei4 jat1 | Monday | 星期 + number; Sunday is 星期日. 禮拜一 means the same. |
| 而家幾點呀？ | ji4 gaa1 gei2 dim2 aa3? | What time is it now? | 點 = o'clock: 三點 (three o'clock). |
| 三點半 | saam1 dim2 bun3 | half past three | 半 = half. |
| 十二月三號 | sap6 ji6 jyut6 saam1 hou6 | December 3 | Month first, then day: big to small. |

**12. Around town and directions** (Out and about). Where things are, left and right, across and next to, and asking the way. Lessons: `hai2`, `directions`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 洗手間喺邊度呀？ | sai2 sau2 gaan1 hai2 bin1 dou6 aa3? | Where's the restroom? | Thing + 喺 + 邊度. 廁所 is more direct. |
| 直行 | zik6 haang4 | go straight | 行 here is haang4 (walk). |
| 轉左 | zyun3 zo2 | turn left | Right: 轉右. |
| 銀行喺超市隔籬。 | ngan4 hong4 hai2 ciu1 si5 gaak3 lei4. | The bank is next to the supermarket. | The place word comes after its noun: 超市隔籬. |
| 附近有冇地鐵站呀？ | fu6 gan6 jau5 mou5 dei6 tit3 zaam6 aa3? | Is there an MTR station nearby? | Place first, then 有: 'nearby has…'. |

**13. Getting around** (Out and about). The MTR, buses and minibuses, taxis, ferries, the Octopus card and tickets. Lessons: `gan-gwo`, `go-come`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 港鐵 | gong2 tit3 | the MTR (Hong Kong subway) | Most people just say 地鐵. |
| 八達通 | baat3 daat6 tung1 | Octopus card | Tap it on the MTR, buses, ferries and in shops. |
| 唔該，去機場。 | m4 goi1, heoi3 gei1 coeng4. | To the airport, please. | To a taxi driver. You can call him 師傅. |
| 前面有落！ | cin4 min6 jau5 lok6! | Getting off ahead, please! | Shout it on a minibus so the driver stops. |
| 我搭地鐵返工。 | ngo5 daap3 dei6 tit3 faan1 gung1. | I take the MTR to work. | How you travel goes before the verb: 搭地鐵 + 返工. |

**14. Work and study** (Out and about). Jobs, school, learning Cantonese, and what you can and know how to do. Lessons: `modals`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 老師 | lou5 si1 | teacher | Also how you address a teacher: 陳老師, or just 老師. |
| 學生 | hok6 saang1 | student | University student: 大學生. |
| 返工 | faan1 gung1 | to go to work | 返 = go back: 返工, 返學, 返屋企. |
| 你做邊行㗎？ | nei5 zou6 bin1 hong4 gaa3? | What line of work are you in? | 行 here is hong4 (trade). 㗎 makes it a friendly question. |
| 我喺銀行做嘢。 | ngo5 hai2 ngan4 hong4 zou6 je5. | I work at a bank. | Where you work goes before the verb: 喺銀行 + 做嘢. |

**15. Health and help** (Out and about). Feeling sick, the pharmacy, the doctor, and asking for help. Lessons: `zo`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 我唔舒服。 | ngo5 m4 syu1 fuk6. | I don't feel well. | Where does it hurt? 你邊度唔舒服呀？ |
| 我頭痛。 | ngo5 tau4 tung3. | I have a headache. | Body part + 痛: 肚痛 (stomachache), 牙痛 (toothache). |
| 我感冒咗。 | ngo5 gam2 mou6 zo2. | I've caught a cold. | 咗 shows the change has happened. |
| 藥房 | joek6 fong4 | pharmacy | 藥 = medicine. |
| 救命呀！ | gau3 meng6 aa3! | Help! | For emergencies. For everyday help: 可唔可以幫吓我呀？ |

**16. Describing things** (Conversation). Adjectives for people, food, weather and prices, with 好, 太, 幾 and comparisons with 過. Lessons: `describing`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 好靚 | hou2 leng3 | very pretty; really nice | 靚 is pretty, good-looking, or just good (靚衫, nice clothes). |
| 好平 | hou2 peng4 | really cheap | No 係 before an adjective: 呢件衫好平. |
| 好好食 | hou2 hou2 sik6 | delicious | 好食 = good to eat; the first 好 means 'very'. |
| 佢高過我。 | keoi5 gou1 gwo3 ngo5. | She's taller than me. | Adjective + 過 + the other person. |
| 今日好熱。 | gam1 jat6 hou2 jit6. | It's hot today. | 好 is often just glue, not a strong 'very'. |

**17. Questions and particles** (Conversation). Question words, A-not-A questions, and the sentence-final particles 呀, 啦, 吖, 呢, 㗎. Lessons: `m`, `questions`, `particles`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 咩呀？ | me1 aa3? | What? | In a sentence it stays where the answer goes: 你食咩呀？ |
| 邊個呀？ | bin1 go3 aa3? | Who is it? | Also 'which one' before a noun: 邊個人. |
| 你呢？ | nei5 ne1? | And you? | 呢 asks the same question back. |
| 一齊去吖！ | jat1 cai4 heoi3 aa1! | Let's go together! | 吖 makes it an invitation. |
| 係㗎。 | hai6 gaa3. | That's right, it is. | 㗎 asserts or explains: 'it really is so'. |

**18. Traps for English speakers** (Conversation). False friends and calques: 係 with adjectives, 唔有, 二個, 咗 and 過, 唔該 or 多謝, and greetings that are not what they seem. Lessons: `jau-mou`.

| Cantonese | `pron` | Meaning | Note |
|---|---|---|---|
| 我好攰。 | ngo5 hou2 gui6. | I'm tired. | Not 我係攰: adjectives take 好, not 係. |
| 我冇錢。 | ngo5 mou5 cin2. | I don't have any money. | 冇 = not have. Never 唔有. |
| 我冇去。 | ngo5 mou5 heoi3. | I didn't go. | 冇 + verb for what did not happen; not 我唔去咗. |
| 兩個人 | loeng5 go3 jan4 | two people | 兩 before a classifier, never 二個人. |
| 你食咗飯未呀？ | nei5 sik6 zo2 faan6 mei6 aa3? | Have you eaten? (a greeting) | A friendly hello around mealtimes, not an invitation. |

**Localisation** (examples, dialogues, practice). Every item below was run through `respell.js`.
- **Names:**
  - Hong Kong names in characters (family name first): 陳大文 *can4 daai6 man4* (the Hong Kong "John Doe"), 黃美玲 *wong4 mei5 ling4*, 張志明 *zoeng1 zi3 ming4*, 何詠詩 *ho4 wing6 si1*, 林家明 *lam4 gaa1 ming4*, 梁淑儀 *loeng4 suk6 ji4*; with titles 陳生 *can4 saang1*, 陳太 *can4 taai2*, 黃生, 黃太, 李小姐 *lei5 siu2 ze2*, 黃老師 *wong4 lou5 si1*, 陳老師, 何醫生 *ho4 ji1 sang1*; friendly forms 阿明 *aa3 ming4*, 阿詩 *aa3 si1* (recognition; §11).
  - The American learner characters have Cantonese-character names, so no Latin letters enter Cantonese strings: 安娜 *on1 naa4* (Anna) and 馬克 *maa5 hak1* (Mark). In English prompts they are Anna and Mark. A card note says that in real life many Hong Kong people use English given names and write them in English. No celebrities.
- **Places:**
  - Hong Kong: 香港 *hoeng1 gong2*, 九龍 *gau2 lung4*, 新界 *san1 gaai3*, 中環 *zung1 waan4*, 旺角 *wong6 gok3*, 尖沙咀 *zim1 saa1 zeoi2*, 銅鑼灣 *tung4 lo4 waan1*, 灣仔 *waan1 zai2*, 西貢 *sai1 gung3*, 山頂 *saan1 deng2* (the Peak), 大嶼山 *daai6 jyu4 saan1* (Lantau); nearby 澳門 *ou3 mun2*, 深圳 *sam1 zan3*, 廣州 *gwong2 zau1*.
  - North America, where learners live: 三藩市 *saam1 faan4 si5* (San Francisco; also 舊金山), 紐約 *nau2 joek3*, 洛杉磯 *lok6 caam3 gei1*, 西雅圖 *sai1 ngaa5 tou4*, 溫哥華 *wan1 go1 waa4*, 多倫多 *do1 leon4 do1*, 唐人街 *tong4 jan4 gaai1* (Chinatown). Other US places stay in English prompts.
- **Food:** 點心, 蝦餃, 燒賣 *siu1 maai2*, 叉燒包, 腸粉 *coeng2 fan2*, 蛋撻, 菠蘿包, 雲吞麵, 魚蛋 *jyu4 daan2*, 乾炒牛河 *gon1 caau2 ngau4 ho2*, 西多士, 車仔麵, 火鍋 / 打邊爐; drinks 奶茶, 凍檸茶 *dung3 ning2 caa4*, 鴛鴦 (coffee + tea), 咖啡, 熱水; loanword foods 朱古力, 三文治, 士多啤梨, 芝士, 多士, 沙律 *saa1 leot2*, 曲奇, 布甸.
- **Money:** 港幣 (HKD); 蚊 in speech, 元 on signs, 毫 / 毫子 (ten cents); written in characters in Cantonese strings (三十五蚊). Plausible prices [inference, not checked]: a cha chaan teng milk tea 二十 to 三十蚊, a bowl of wonton noodles 四十 to 六十蚊, an MTR ride 五 to 二十幾蚊, a minibus ride 十幾蚊, the taxi flag fall about 三十蚊.
- **Paying:** 八達通 (Octopus card) for transport and shops, cash, cards; phone wallets in a note only (no brand names).
- **Measures and dates:** month before day (十二月三號); kilometres, kilograms and 斤 (catty, markets: recognition), degrees Celsius; 12-hour clock in speech (下晝三點).
- **Settings:** a cha chaan teng, a dim sum restaurant (酒樓 / 茶樓) with grandparents, a wet market (街市), a minibus, the MTR and the Star Ferry, a Chinatown bakery in San Francisco or New York, a family dinner, a phone call with 婆婆, an office in 中環, a pharmacy (藥房).
- **Greetings in `profile.json`** (`greet`): 晚安 *maan5 on1* (late night: "Good night (you're up late)"), 早晨 *zou2 san4* (morning), 你好 *nei5 hou2* (afternoon: Cantonese has no everyday good-afternoon), 食咗飯未呀？ *sik6 zo2 faan6 mei6 aa3?* (evening: "Have you eaten yet? (a friendly hello)").

## 10. Typing and script

### 10.1 The script stage (works with ordinary lessons and decks)

Stage 1 is four lessons and three decks, all ordinary: nothing depends on the Korean letter-drill machine.

| Lesson | Deck | What the learner can do after it |
|---|---|---|
| `jyutping` | Jyutping sounds | read any Jyutping syllable aloud roughly right; knows the letters that lie (j, z, c, ng-, eo, oe, yu, aa / a, final -p -t -k) |
| `tones` | Tone twins | hear and say the six tones on single syllables and in tone twins; knows entering syllables take 1, 3, 6 and that some words change tone |
| `greetings` | Greetings and courtesy | greet, thank (唔該 / 多謝) and apologise, reading the Jyutping |
| `characters` | First characters | recognise about 25 basic characters, see how compounds and radicals work, spot the 口 radical of spoken-Cantonese characters |

- Tone twins are drilled as normal cards: the front shows the character and its Jyutping, the voice says it, the meaning on the back differs for each tone. The deck typing quiz on Tone twins asks for the meaning, which forces the tone to be heard.
- **If the letter-drill machine is generalised** (request 12), the same decks gain drills: "hear a syllable, tap its tone (1–6)" (Tone twins), "hear a syllable, tap its initial" (Jyutping sounds). Nothing in the lessons changes.

### 10.2 Characters: how many, and how

- **Goal:** recognise about **250 characters** by the end of the course: the roughly 200 most frequent characters of the decks and lessons plus about 40 spoken-Cantonese characters. There is no Cantonese exam to anchor the number; it is set a little below en-zh's 300 because traditional characters have more strokes and heritage learners start from speech [inference]. The decks and examples will contain roughly 400 different characters; the learner is not expected to know them all.
- **Spoken-Cantonese characters the course expects** (all in the BMP or Extension A, all in the generator): 係 喺 唔 冇 嘅 咗 緊 佢 哋 啲 嘢 咩 乜 邊 嗰 呢 咁 噉 嚟 睇 瞓 攞 搵 畀 啱 靚 攰 嘈 揸 咪 呀 啦 吖 㗎 喎 囉 嘛 喇 咋 噃. **No Extension B characters** (such as 𠺢 or 𡃁): many fonts lack them, and `targetScript` and `pronAnswersScript` are BMP-only.
- **Recognition only.** No handwriting, no stroke-order drills. `characters` teaches strokes and radicals so learners can see the parts.
- **Introduction:** every card and example shows characters with Jyutping under them (§6.5); about 10–15 new characters per lesson; the First characters deck gives the pictograph and compound stories once.
- **Traditional vs simplified:** one line in `characters`. Simplified characters are never targets or accepted answers (Hong Kong uses traditional; a learner typing with a simplified keyboard gets "wrong"; see request 5 for an optional fold).

### 10.3 What a typed answer is

**Default: word tiles.** en-yue sets `tilesDefault: true`. In tiles mode `mc` and `order` are unchanged; `fill` becomes a 4-option tap; `type` becomes tiles built from `a[0]` split on spaces plus `x`, so **`a[0]` is always written with spaces between words** (§10.4).

**Typing is optional**, through the existing "use tiles" switch, in two ways:
- **Jyutping with tone numbers on an English keyboard** (the way most learners will type). `pronAnswers: true` makes `gen.js` run `respell` on every character answer of `fill` and `type` items and add the result to the accepted list (`我 喺 銀行 做嘢` → also accepts `ngo5 hai2 ngan4 hong4 zou6 je5`). The deck typing quiz accepts the card's `pron` (`romaAlmost: true` turns this on today). **Today the match is exact** after the engine's normal clean-up (lowercase, spaces collapsed): syllables must be separated by single spaces and every tone digit typed; a toneless answer is wrong, not "almost" (no `accents`). Request 6 relaxes this.
- **Characters through a Cantonese keyboard.** iOS ships Cantonese keyboards (phonetic, stroke, handwriting); Gboard and Windows have Cantonese input; many Hong Kong people type with Cangjie or handwriting [inference, §11]. The answer arrives with no spaces.

**What the matcher must do** (✓ = already done by today's engine, from `src/app.html`):
- ✓ full-width forms to ASCII (`fwFold`), lowercase, NFC; strip 。、！？，．～ and ASCII . , ! ? ~ and quotes (`pracNorm`). Not stripped: ：；「」（）: authors keep them out of answers.
- ✓ accept the generated Jyutping of each answer (`pronAnswers`), exactly.
- ✗ ignore spaces between Chinese characters (today only Hangul and the zh / ja / th branches do this): request 4. Until then every `ty` answer list carries the unspaced twin (`我 喺 銀行 做嘢|我喺銀行做嘢`).
- ✗ Jyutping normaliser: spaces between syllables ignored, case ignored, tone digits required; missing digits "almost", wrong digits wrong; lazy forms (l- for n-, missing ng-, m for syllabic ng) "almost"; ASCII punctuation ignored in the deck quiz too (request 6).
- ✗ variant characters treated as equal: 畀 = 俾, 啲 = 尐, 嘅 = 既 (in answers only), 㗎 = 架 (sentence-final), 搵 = 揾, 着 = 著, 裏 = 裡; 喺 / 係 and 冇 / 無 **not** folded (different words) (request 5). Until then writers list 俾 and 畀 forms where the answer has one; the other pairs are kept out of `ty` answers where possible.

**`targetScript`:** `[㐀-鿿豈-﫿1-6]`: CJK Unified Ideographs, Extension A and compatibility ideographs, plus the digits 1–6, so that Jyutping practice items in the sound stage (`or` tiles and `ty` answers such as *maai5*) count as Cantonese text in the validator. Every Jyutping string has a tone digit; English text does not match unless it contains a digit 1–6 (keep numerals out of Cantonese strings anyway: numbers are written in characters). Card targets must still be characters (writer rule; the validator cannot tell).

### 10.4 Tiles: segmentation and spacing

- **The author supplies the tiles, by word, with single spaces**: `我 係 美國人`, `三 本 書`, `我 聽日 去 香港`, `你 叫 咩 名 呀`. Tiles never come from splitting characters.
- **Word breaks** [inference, a writer convention since the generator does not segment output]: nationality and place words one tile (美國人, 香港, 三藩市); number / classifier / noun separate (一 / 杯 / 奶茶); 呢個 / 嗰個 / 邊個 one tile when "this one / that one / who", split when followed by a noun (呢 / 個 / 人); particles their own tiles (呀, 啦, 吖, 呢, 㗎, 咗, 緊, 過, 嘅); 哋 joined (我哋, 佢哋); fixed verb-object words one tile (食飯, 返工, 做嘢, 飲茶, 瞓覺, 沖涼), others split (飲 / 奶茶, 睇 / 書); 唔 its own tile except in fixed words (唔該, 唔使, 唔好意思, 唔舒服); verb-not-verb questions split (去 / 唔 / 去).
- **Tile count:** 2–6 tiles in `or` items (PRACTICE-SPEC), at most 9 words in a `ty` answer (validator).
- **Spaced text appears only in practice tiles and `ty` answers.** Card targets, example rows, dialogues, `mc` options and `fill` sentences have no spaces.
- **Punctuation:** none on tiles; `a[0]` of a `ty` item may end with 。or ？ (stripped); `fill` sentences and card sentences end with full-width 。？！.

### 10.5 Punctuation rules

- Full-width in Cantonese strings: 。，？！、：；and Hong Kong's corner quotes 「」 (not “”). The enumeration comma 、 between list items (蝦餃、燒賣、腸粉).
- No space before or after Cantonese punctuation; no ASCII punctuation inside Cantonese.
- English text keeps English punctuation, including notes that quote Cantonese ("Say 唔該 to the server.").
- The Jyutping line converts punctuation to ASCII (§6.2).

### 10.6 Fonts and line height

- **Characters:** a Hong Kong traditional font stack for target text: `"PingFang HK", "Noto Sans HK", "Noto Sans CJK HK", "Source Han Sans HK", "Microsoft JhengHei", "Noto Sans TC", sans-serif`, applied to `[lang|=zh-HK]` / `[lang=yue]` elements (cards, tiles, examples, answer inputs), with `lang="zh-HK"` on those elements (`yue` is valid BCP-47 but fewer browsers map it to a font) [inference]. Today the app sets a simplified-Chinese stack only on `html[lang^=zh]` (a Chinese interface), not on target spans inside the English interface (request 9). Without it, devices fall back to a system CJK font, and some characters (骨, 戶, 說, 曾) can appear with mainland, Taiwan or Japanese glyph shapes; 㗎 (Extension A) may show as a box on old Android fonts [inference].
- **Size and spacing:** card characters at least 2× body size (traditional characters are dense); line height 1.6–1.8 for Cantonese lines; tiles at least 44 px tall. The Jyutping line in the body font, slightly smaller, digits not superscript (LSHK: ASCII numerals).

### 10.7 What the lead needs to do in the engine and pipeline (priority order)

| # | Request | Why | What the course does if it is NOT built |
|---|---|---|---|
| 1 | **Three-letter target codes, everywhere.** `tools/target/lib.js` `check()` accepts only `/^[a-z]{2}$/`, so `gen.js`, `validate.js` and `repron.js` refuse `yue`; `link_roadmap.py` finds the next roadmap entry with `[a-z]{2}: \{`. In `src/app.html` the course id test `/^[a-z]{2}-[a-z]{2}$/` (in `validCourse`, `courseStubs`, `storedCourseStates`, the state loader, `wipeOtherCourses`, the sync import and the `META.course` check) rejects `en-yue` and its `la-s-en-yue` storage key. Change to `[a-z]{2,3}`. (`LANGS` already has `yue`.) | Nothing can be generated, validated, loaded or saved. | **Blocking.** Writers cannot run the validator; the pack would not load. There is no course without it. (`ceb` needs the same.) |
| 2 | **Cantonese voice matching:** for `yue`, accept a voice tagged `zh-HK`, `yue-HK`, `yue_HK`, `zh_HK` or `yue`, and **never fall back to another `zh` voice** (`pickVoice` falls back to any voice whose tag starts with the same two letters, which reads Cantonese in Mandarin). Show the "no voice" message plus "add a Cantonese (Hong Kong) voice". | A Mandarin voice teaching wrong sounds is worse than silence (§2.8). | `ttsLang` stays `zh-HK`: right on Apple, Windows and desktop Chrome with a Cantonese voice; **Mandarin audio on devices that have only Mandarin**. The lead must not ship without request 3 or this. |
| 3 | **Recorded clips (Azure `zh-HK-HiuMaanNeural` / `zh-HK-WanLungNeural`)** for every card target and example row, and dialogue lines if the pipeline does them. | Device Cantonese voices are missing on many Android phones; clips are verified to exist (§2.8). | Device voices only, with request 2's risk. |
| 4 | **Ignore spaces between Chinese characters when matching** for `yue` (`pracMatch`, `accSame`, `normT`), as the zh branch (`zhNorm`) already does; hide those spaces when a spaced `a[0]` is shown as the model answer. | Tiles need spaced answers; keyboards produce none. | Every `ty` answer list carries the unspaced twin (`我 喺 銀行 做嘢|我喺銀行做嘢`), `a[0]` spaced. The model answer shows with spaces. |
| 5 | **Variant-character folding** in the matcher for `yue`: 俾→畀, 尐→啲, 揾→搵, 著→着, 裡→裏; 既→嘅 and 架→㗎 only in typed answers (they are also real characters elsewhere). Optional: fold simplified to traditional for typed answers ("almost"). | Hong Kong writing varies; learners type what their keyboard offers. | Writers list 畀 and 俾 variants in answers; 嘅 / 㗎 / 啲 forms are spelled as in §2.2, and items avoid putting them at the point being tested. |
| 6 | **Jyutping normaliser** (an `isYue()` branch in `accSame`, `pracMatch` and the deck-quiz line that checks `romaAlmost`): lowercase; spaces between syllables and ASCII punctuation ignored; tone digits compared syllable by syllable; **missing digits "almost", wrong digits wrong**; lazy forms "almost" (l for n before a vowel, missing ng-, m5 for ng5); optional: Yale-style *y* for *j* "almost". | Learners type `nei5hou2`, `nei hou`, `lei5 hou2`; the deck quiz today also fails on the card pron's punctuation (`nei5 hou2!`). | Typed Jyutping must equal the generated pron exactly (single spaces, all digits); lesson 1 and the first typed item say "type a space after each tone number". Card prons with punctuation cannot be matched in the deck quiz unless typed with it. |
| 7 | **Turn on tiles by default** (already in `profile.json`: `tilesDefault: true`) and change the switch text to "Use tiles (no Cantonese keyboard)"; on the first typed item, a one-time note: "Type Jyutping with tone numbers (nei5 hou2), or add a Cantonese keyboard." | Most learners have no Cantonese keyboard. | (Setting exists.) Without the note, learners stay in tiles, which is fine. |
| 8 | **Validator runs `respell` on every card target, example row and dialogue line and compares with the stored `pron`** (fail on difference; generator warnings as WARN lines), and **`repron.js yue`** works (it compiles the profile pattern without the `u` flag; this pattern is ASCII, so that is safe). | The generator is the source of truth; this catches hand edits and stale rows after a list change. | The existing same-string check catches only cross-file drift; the lead re-runs the generator by hand after list changes. |
| 9 | **HK font stack and line height on Cantonese target text** (§10.6), `lang="zh-HK"` on card, tile, example and input elements. | Glyph variants; tofu for 㗎 on old fonts. | System fallback fonts; possible mixed glyph shapes. |
| 10 | **Voice check on test devices:** single characters with two readings (行, 長, 重, 樂) and particles (呀 aa3, 啦 laa1, 㗎 gaa3) as card targets: does the voice say them as the pron says? | The voice is the model. | Writers avoid two-reading characters as single-character targets (§9); particles appear inside sentences. |
| 11 | **Jyutping display setting:** "Jyutping: always / tap to reveal / off" for cards and example rows (§6.5); default "always". | Learners who read characters want to hide it. | Jyutping always shown. |
| 12 | **Generalise the letter-drill machine** to tone (1–6) and initial drills on the script decks (§10.1). | More listening practice for tones. | Tone twins and Jyutping sounds stay ordinary decks. |
| 13 | **PRACTICE-SPEC exception:** Jyutping is allowed in sound-stage practice items and in the one tone `mc` item per set (§7). No code change. | — | — |

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The generator's word list** in `tools/target/yue/respell.js` (about 1,100 entries): default readings of single characters, the changed-tone words (媽媽 *maa4 maa1*, 弟弟 *dai4 dai2*, 妹妹 *mui4 mui2*, 爺爺 *je4 je2*, 婆婆 *po4 po2*, 電話 *din6 waa2*, 廣東話 *gwong2 dung1 waa2*, 英文 *jing1 man2*, 今年 *gam1 nin2*, 雞蛋 *gai1 daan2*, 魚蛋 *jyu4 daan2*, 燒賣 *siu1 maai2*, 腸粉 *coeng2 fan2*, 凍檸茶 *dung3 ning2 caa4*, 師傅 *si1 fu2*, 陳太 *can4 taai2*, 屋企 *uk1 kei2*, 醫院 *ji1 jyun2*, 公園 *gung1 jyun2*, 澳門 *ou3 mun2*, 慢慢 *maan6 maan2*, 排隊 *paai4 deoi2*, 菲林 *fei1 lam2*, 沙律 *saa1 leot2*), and two-reading words (知道 *zi1 dou3*, 唔好意思 *m4 hou2 ji3 si3* against 意思 *ji3 si1*, 名字 *meng4 zi6*, 時間 *si4 gaan3*, 附近 *fu6 gan6*, 可樂 *ho2 lok6*). Written from the author's knowledge; no dictionary file could be downloaded, and CantoDict / words.hk were not opened entry by entry. The known silent-error classes are in §6.1.
2. **The changed-tone and lazy-sound conventions** (§6.2): changed tones written as said, lazy sounds never written. Believed to match CantoDict / words.hk practice; not verified.
3. **Six readings were spot-checked against online dictionaries** (jyutdictionary.com, jyutjyu.com, writtenchinese.com) after the list was written: 旺角 was wrong (*mong6* → *wong6 gok3*) and 去年 was wrong (*nin2* → *heoi3 nin4*), both fixed; 考試 *haau2 si5*, 明年 *ming4 nin2* (also *nin4*), 中文 *zung1 man4* (one dictionary has *man2*) and 名字 *meng4 zi6* were confirmed; 有名 was changed to *jau5 meng4*. Two errors in six spot checks means **the rest of the list needs a full native check**; nothing else was checked against a dictionary.
4. **One syllable per character with spaces**, all lowercase: a deliberate choice (the LSHK page sets no rule; the Wikipedia examples are spaced). A teacher may prefer word grouping.
5. **The politeness rules** (§2.3–2.5): 你好 being stiff with friends, 你好嗎 as a calque, no everyday good-afternoon, 小姐 being neutral in Hong Kong, 請 not used as a general "please", which particles to make active, 嗎 as formal.
6. **The `greet` strings:** 晚安, 早晨, 你好 (afternoon), 食咗飯未呀？ (evening).
7. **The sample cards and notes** in §9, especially 前面有落！, 平啲得唔得呀？, 我睇吓先, 你做邊行㗎？, 可唔可以用八達通呀？, 唔該，去機場, 好正, and the price ranges in the localisation list.
8. **The Traps list** (§4.12): 我好 / 我幾好, 鬼佬, 食咗飯未呀？ as a greeting; the CantoneseClass101 claim that 佢好病 means "he's crazy" is **not** taught.
9. **Names with 阿** (阿明, 阿詩): vocative names may take a changed tone in speech (§6, Wikipedia *Changed tone*); the list writes citation tones.
10. **Overseas forms** heritage learners may have heard (Taishanese-influenced words, older Guangzhou forms): not covered beyond a general note.

**Evidence that could not be opened, or was read only in part**
- **English-speaking learners:** no group study was found. Matthews' chapter covers one fluent American learner (Mak & Matthews 2011, not opened itself) and bilingual children; Whelpton (1998) on tone 3 / 6 and 4 / 6 confusions was seen only as a citation. Zhang et al. (2018) studied Mandarin speakers. Francis & Ciocca (2003, *JASA* 114(3)) was opened: it used American listeners but synthetic level tones with no confusion data, so it is not used.
- **Classifiers:** the *Studies in Language* 35(1) abstract shows no author names on the page read; Cheng & Sybesma (1999) was not opened. No study of L2 classifier errors in Cantonese was found.
- **Particles:** Chang (2024) is a BA thesis on young children; Mok, Yin, Setter & Nayan (Speech Prosody 2016) was opened but is about Cantonese speakers' English intonation and only mentions particles as background (not used).
- **Learners:** no survey of US adult Cantonese learners' motives was opened; enrolment numbers for Cantonese in the MLA census were not found (pinyin.info's MLA post has no Cantonese figures); a Frontiers 2024 study on Chinese heritage-language motivation (PMC11554449) was blocked by the fetch allowlist.
- **Voices:** Azure `zh-HK` voices are verified (two Microsoft posts). Device voice tags (`zh-HK` on Apple and Windows, `yue-HK` / `yue_HK` on Android) are the author's understanding, not verified: the Readium Web Speech page opened lists no Cantonese voices, and a json2video voice page was not on the allowlist.
- **Written Cantonese and grammar:** the Wikipedia *Written Cantonese* and *Cantonese grammar* mirrors were not on the fetch allowlist; §2.2 rests on Durham's spoken-form grammar list and the author's knowledge.
- **Course syllabi:** Durham's and PolyU's pages give topics, not lessons; CUHK's CLCC1703 is for Mandarin speakers and names no romanisation.

**The roadmap and the brief**
- The brief's base text says to read "the `de` entry"; the lead's instruction says to use the `yue` entry, which this profile does (from `docs/roadmaps/yue.json` and `packs/roadmaps.js`).
- `family` and `routine` have an empty `roadmap` field; the roadmap preview will not show them unless the lead adds items. `particles` keeps its roadmap id but moves from 25th to 15th.
- **Voice tag:** the roadmap's `voice` field says `yue-HK`; `profile.json` uses `ttsLang: "zh-HK"`, the tag Apple, Windows and Azure use (§2.8). A deliberate departure; request 2 makes both tags work.
- `profile.json` has four fields beyond the brief's shape, as en-zh has: `tilesDefault`, `pronAnswers`, `pronAnswersScript` (BMP CJK only, so Jyutping answers are not re-respelled) and `romaAlmost` (turns on the deck quiz's pron acceptance; harmless with `accents: false`).

**Engine and pipeline** (for the lead): §10.7, requests 1–13. Request 1 (three-letter codes in the pipeline and in `src/app.html`) blocks everything; then 2–3 (voice: never Mandarin; Azure clips), 4 (spaces), 5 (variant characters), 6 (Jyutping normaliser) and 8 (validator runs the generator).

**Not verified at all**
- Whether learners can type Jyutping with spaces and digits as the exact matcher demands (request 6).
- Whether `zh-HK` device voices read particles and two-reading characters as the pron says (request 10).
- That the app's fonts contain 㗎 and the other Extension A characters on older Android devices (request 9).

## Sources

Web pages opened and used for this profile (2026-11-19):
- [Matthews, S. *How not to acquire tone: cross-linguistic influence in prosody* (book chapter, HKU repository; reports Mak & Matthews 2011)](https://repository.hku.hk/bitstream/10722/337165/1/content.pdf)
- [Zhang, K., Peng, G., Li, Y., Minett, J. W. & Wang, W. S.-Y. (2018). The effect of speech variability on tonal language speakers' second language lexical tone learning. *Frontiers in Psychology* 9:1982](https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01982/pdf)
- [Francis, A. L. & Ciocca, V. (2003). Stimulus presentation order and the perception of lexical tones in Cantonese. *JASA* 114(3) (opened, not used)](https://repository.hku.hk/bitstream/10722/43531/1/93293.pdf)
- [*Bare classifiers and definiteness: a cross-linguistic investigation*. *Studies in Language* 35(1), 2011 (abstract)](https://www.jbe-platform.com/content/journals/10.1075/sl.35.1.10sim)
- [Chang, K. (2024). *A comparative study of sentence-final particles acquisition in monolingual, bilingual, and trilingual Cantonese-speaking children*. BA thesis, Columbia University](https://kasseychang.github.io/files/KasseyChang_thesis_finaldraft.pdf)
- [Mok, P., Yin, Y., Setter, J. & Nayan, N. M. (2016). Assessing knowledge of English intonation patterns by L2 speakers. Speech Prosody 2016 (opened, not used)](https://www.cuhk.edu.hk/lin/people/peggy/SP2016_MokYinSetterNayan.pdf)
- [CantoneseClass101: The most common Cantonese mistakes you make when learning (commercial blog)](https://www.cantoneseclass101.com/blog/2020/12/11/common-cantonese-mistakes)
- [CantoneseClass101: How do I know when to use m4 goi1 and when to use do1 ze6? (commercial lesson notes)](https://www.cantoneseclass101.com/lesson/absolute-beginner-questions-answered-by-olivia-12-how-do-i-know-when-to-use-m4-goi1-and-when-to-use-do1-ze6)
- [Linguistic Society of Hong Kong: Jyutping Cantonese romanization scheme](https://lshk.org/jyutping-scheme/)
- [Wikipedia: Jyutping (IPFS mirror)](https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.4everland.io/wiki/Jyutping.html)
- [Wikipedia: Hong Kong Cantonese (IPFS mirror)](https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.4everland.io/wiki/Hong_Kong_Cantonese.html)
- [Wikipedia: Changed tone (IPFS mirror)](https://ipfs.aleph.im/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Changed_tone.html)
- [EdUHK, Cantonese corpus, chapter 3: the six tones of Cantonese](https://corpus.eduhk.hk/cantonese/eng/chapter3/3-0.html)
- [Durham University, Centre for Foreign Language Study: Cantonese Chinese language courses, summary of contents](https://www.durham.ac.uk/media/durham-university/research-/research-centres/centre-for-foreign-language-study/Cantonese-Chinese-language-courses-summary-of-contents.pdf)
- [Hong Kong Polytechnic University: CLC1163 Elementary Cantonese (Taught in English), subject description](https://www.polyu.edu.hk/clc/docdrive/subjects/CLC1163.pdf)
- [CUHK Yale-China Chinese Language Academy: CLCC1703 Elementary Cantonese for Chinese Speakers, course outline](https://vse.apru.org/wp-content/uploads/2024/10/Course-Outline_CLCC1703.pdf)
- [Jyut Dictionary: 旺角](https://jyutdictionary.com/dictionary/entry/%E6%97%BA%E8%A7%92), [明年](https://jyutdictionary.com/dictionary/entry/%E6%98%8E%E5%B9%B4), [去年](https://jyutdictionary.com/dictionary/entry/%E5%8E%BB%E5%B9%B4), [出年](https://jyutdictionary.com/dictionary/entry/%E5%87%BA%E5%B9%B4), [香港考試局](https://jyutdictionary.com/dictionary/entry/%E9%A6%99%E6%B8%AF%E8%80%83%E8%A9%A6%E5%B1%80), [中文數字](https://jyutdictionary.com/dictionary/entry/%E4%B8%AD%E6%96%87%E6%95%B8%E5%AD%97) (reading spot checks)
- [jyutjyu.com: 中文](https://jyutjyu.com/zh-Hans/word/%E4%B8%AD%E6%96%87) and [名](https://jyutjyu.com/en/word/%E5%90%8D); [Written Chinese dictionary: 名字](https://dictionary.writtenchinese.com/worddetail/mingzi/743/3/2) (reading spot checks)
- [Microsoft Tech Community (2020): Neural text-to-speech extends support to 15 more languages (zh-HK HiuGaai)](https://techcommunity.microsoft.com/t5/azure-ai/neural-text-to-speech-extends-support-to-15-more-languages-with/ba-p/1505911)
- [Microsoft Tech Community (2020): Azure neural TTS updates, 51 new voices (zh-HK HiuMaan, WanLung)](https://techcommunity.microsoft.com/t5/azure-ai/azure-neural-text-to-speech-updates-51-new-voices-added-to-the/ba-p/1988418)
- [Pew Research Center: Chinese in the U.S. fact sheet (ACS 2021–23)](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-chinese-in-the-u-s/markdown)
- [The Standard (Hong Kong): Quest to save Cantonese in US](https://www.thestandard.com.hk/education/article/42197/Quest-to-save-Cantonese-in-US)
- [Yahoo News (San Francisco Chronicle): It's the language of S.F.'s first Chinese immigrants. Can it survive another generation?](https://www.yahoo.com/news/articles/language-f-first-chinese-immigrants-120024188.html)

Opened but not usable: Azure language-support page on docs.azure.cn (speech-to-text only); Readium *SpeechSynthesis in browsers and OSes* (no Cantonese voices listed); pinyin.info post on MLA counts (no Cantonese figures). Blocked by the fetch allowlist: json2video Azure voice pages, PMC11554449, the Wikipedia *Written Cantonese* and *Cantonese grammar* mirrors.

Local project files read: `docs/briefs/target-profile-yue.md`, `docs/roadmaps/yue.json`, the `yue` entry of `packs/roadmaps.js`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-zh.md` and `tools/target/zh/profile.json`, `respell.js` and `lexicon.txt` (nearest model), `tools/target/vi/profile.json` and the headings of `docs/profiles/en-vi.md` (shape), the tail of `tools/target/es/respell.js` (command-line shape), `tools/target/lib.js`, `gen.js`, `validate.js`, and in `src/app.html` the matchers and voice code (`fwFold`, `normT`, `pracNorm`, `accSame`, `romaLoose`, `pracMatch`, `kbT`, `pickVoice`, `validCourse` and the course-id checks). `docs/profiles/en-es.md` was not reread in full; en-zh, written to the same model, was used as the template.
