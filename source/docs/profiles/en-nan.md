# English speakers learning Taiwanese Hokkien (Taigi): course profile

Course `en-nan`: Taiwanese Hokkien (台語 Tâi-gí) for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Taigi, written in the Ministry of Education (MOE) recommended characters, with a Tâi-lô line under every card and example. Machine-readable twin: `tools/target/nan/profile.json`, written from the same data file as §8 and §9 (scratch `nanP/data.js`), so the two agree. Pronunciation generator: `tools/target/nan/respell.js` with its source-tagged word list `tools/target/nan/lexicon.txt` (§6). The folder has a `HOLD` file: the course stays out of releases until the lead removes it.

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile, named. **(abstract only)** and **(other learners)** say how much was read and who was studied.
- **[curriculum convention]**: what dictionaries, romanisation standards, syllabuses and courses do. The MOE dictionary is the main one.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Taigi**. Every claim of that kind that writers will copy is in the native-check list (§11).

Untagged rules in §6 to §10 are design decisions, not findings.

**Two caveats come first.**
1. **The evidence on learners is thin.** No study of English-speaking adults learning Taigi was found. The learner data is one perception study of American English listeners hearing Taigi tones (Sun & Huang 2012) and one survey of Taiwanese Americans (Lin 2024). So most of §4 is [inference] built on the grammar, and §11 lists what a native speaker should check first.
2. **Every Taigi word in this profile was copied from a source that was opened.** Each character and its Tâi-lô reading comes from the MOE dictionary 教育部臺灣台語常用詞辭典 (sutian.moe.edu.tw) in nearly every case, or from Wiktionary or Bite-size Taiwanese. `lexicon.txt` names the page for every line. Words that could not be checked are left out and listed in §11. The few sentences put together from checked words, rather than copied whole, are marked `comp` in §9 and are also in §11.

## 1. Summary

- **Which Taigi?** The Taiwanese Hokkien of Taiwan, in the mainstream mixed (general) accent. That is the main reading of the MOE dictionary, based on the Kaohsiung accent (§2.1). It is written in the **MOE recommended characters** (traditional; 毋, 佇, 欲, 予, 媠, 个), with **Tâi-lô** as the pronunciation line. Hokkien as spoken in Fujian, Singapore, Penang and the Philippines differs and is not taught. **Taiwan Mandarin (華語) is a different language.** The course blurb says: "This course teaches Taiwanese (Taigi) as it is spoken in Taiwan today, written in the Ministry of Education's characters, with Tâi-lô romanisation to show every sound and tone. It is not Mandarin."
- **Text only:** no usable Taigi text-to-speech voice exists (§2.6). Like the Cebuano course, **no item may depend on hearing**. `voiceMatch` is `^nan(-|_|$)`, so the app stays silent rather than reading the characters in Mandarin. The sound lessons describe sounds in words and by comparison with English. The MOE dictionary's own recordings are released under CC BY-ND 3.0 TW and could be used later (§2.6, request 4).
- **Tones:** the pron line prints **citation tones**, as the MOE dictionary does ("本辭典的聲調攏標本調，無標變調"). The learner is taught the sandhi circle in two lessons (`sandhi`, `sandhi-2`). The course does not mark sandhi tones or parse tone groups (§6.5).
- **Pron generation:** `respell.js` does a longest match over `lexicon.txt`, which has **423 entries, each copied from an opened page with its source id** (405 from MOE dictionary pages, 18 from Wiktionary, Wikipedia and Bite-size Taiwanese; §6.1). It also applies a small context table (無 / 未 / 袂 / 咧 / 過 at the end of a question become neutral; 這 / 彼 become tse or tsit, he or hit; 上 means "most" before an adjective; numbers and phone numbers are handled; §6.3). It throws on anything it does not know. It reproduces all 86 MOE example sentences and phrases collected, exactly, spaces and `--` included (§6.4). The first full run found 5 silent differences and 7 throws; they were fixed with three context rules and nine entries read off the same sentences. This is a regression test of the rules, not an independent check: the lexicon was built from the same pages.
- **Biggest traps (§4):** tones and sandhi; 是 before adjectives (伊真媠, not *伊是媠); the four negatives 毋 / 無 / 袂 / 莫; classifiers and 兩 / 二; time and place before the verb; Mandarin words and characters (不, 在, 要, 吃) in place of Taigi ones (毋, 佇, 欲, 食); the two number sets; Tâi-lô letters read as English.
- **Standing rule (§7):** two strands. **(a) Tones and sandhi**: Tâi-lô items in the sound stage, and one tone `mc` item per later set. **(b) Taigi order and classifiers**: time and place before the verb, and number or 這 / 彼 + classifier + noun. The keywords were tested on 32 sample lines.
- **Lessons and decks (§8, §9):** all 27 roadmap items are kept in their order, with titles rewritten in MOE forms. There are 18 decks in 5 groups, with 90 sample cards, every pron generated.
- **Answers (§10):** word tiles by default. Typing is optional, either in characters or in Tâi-lô with marks or tone numbers (*tsit8*, *lang5*); toneless answers count as "almost", and POJ spellings are accepted. The engine needs an `isNan` matcher like `isYue`. It is specified with 46 test cases (§10.3), and the full build list is §10.7.

## 2. Variant, register and voice

### 2.1 Variant: Taiwanese Hokkien, general accent, MOE characters, Tâi-lô

- **Variety.** The roadmap names "Taiwanese Hokkien of Taiwan, the mainstream mixed (general) accent that leans to Kaohsiung / Tainan and is the main reading of the MOE dictionary". This profile keeps it.
  - [curriculum convention] The MOE dictionary's audio page says the pronunciation follows "辭典的主音讀佮通行腔" (the dictionary's main reading and the common accent). It says the main reading is based on the **Kaohsiung accent, leaning Zhangzhou (偏漳)**, and that variant readings and dialect differences are not recorded ([MOE, 音檔說明](https://sutian.moe.edu.tw/und-hani/piantsip/imtong-suatbing/)).
  - [curriculum convention] Each entry has a table of eight to ten local accents (Lukang, Sanxia, Taipei, Yilan, Tainan, Kaohsiung, Kinmen, Magong, Hsinchu, Taichung). For example:
    - 佇 is *tī* in Tainan, Kaohsiung, Yilan and Taichung, but *tū* in Taipei.
    - 魚 is *hî* in Tainan and Kaohsiung, but *hû* in Taipei.
    - 欲 is *beh* in Taipei, Tainan and Kaohsiung, but *bueh* in Yilan.
  - (Sources: [佇](https://sutian.moe.edu.tw/zh-hant/su/2858/), [魚](https://sutian.moe.edu.tw/zh-hant/su/8084/), [欲](https://sutian.moe.edu.tw/zh-hant/su/7469/).)
- **Rule for writers and for `lexicon.txt`:** where the MOE dictionary lists several readings ("bē/buē", "huè/hè", "hué-tshia/hé-tshia"), **the first, main reading is the course reading**. A card note may name the Taipei form where a learner is likely to hear it (魚 *hû*, 佇 *tū*).
- **Not taught:**
  - Hokkien of Fujian (Amoy, Quanzhou, Zhangzhou), Singapore, Penang, Malaysia, Indonesia and the Philippines. These differ in words, in tones and in loanwords (Malay and English in Penang and Singapore, for instance) [inference].
  - Taiwan Mandarin. Many learners, and many Taiwanese speakers, mix Mandarin words into Taigi; the course teaches the Taigi word and names the Mandarin one only in Traps notes (§4.7).
- **Why Tâi-lô, not POJ.**
  - [curriculum convention] Tâi-lô (臺灣台語羅馬字拼音方案) is the MOE's official romanisation since the 2006 announcement. The MOE manual (2024 revision) makes the traditional church tone marks the official form and allows tone numbers when marks are inconvenient ("以傳統白話字調號標示法為正式方案，使用不便時得以數字標示法替代"). It makes *oo* the official form with *o͘* as the traditional one, and *-nn* official with superscript *ⁿ* as traditional ([MOE, 臺灣台語羅馬字拼音方案使用手冊](https://language.moe.gov.tw/files/people_files/tshiutsheh_1130826.pdf)).
  - The MOE dictionary is written in Tâi-lô, so every word in the course can be looked up there.
  - POJ (Pe̍h-ōe-jī) readers can follow Tâi-lô after one note (`initials`): ts / tsh = POJ ch / chh, oo = o͘, nn = ⁿ, ua / ue = oa / oe, ing / ik = eng / ek. The matcher accepts POJ spellings (§10.3).
- **Voice:** `ttsLang: "nan-TW"`, with no voice expected (§2.6).

### 2.2 Writing: the MOE recommended characters (one rule)

**The rule: write each Taigi word in the characters the MOE dictionary gives as its headword, and never in the Mandarin word that means the same.**

| MOE Taigi (taught) | Tâi-lô | Mandarin (never a target) | Meaning |
|---|---|---|---|
| 毋 | m̄ | 不 | not (won't, isn't) |
| 無 | bô | 沒有 | not have; didn't |
| 佇 | tī | 在 | at, in |
| 欲 | beh | 要 | want to; about to |
| 予 | hōo | 給 | give; let |
| 伊 | i | 他 / 她 | he, she |
| 𪜶 | in | 他們 | they |
| 阮 / 咱 | guán / lán | 我們 / 咱們 | we (without you / with you) |
| 个 | ê | 個 | general classifier |
| 食 | tsia̍h | 吃 | eat |
| 啉 | lim | 喝 | drink |
| 媠 | suí | 漂亮 | beautiful |
| 物件 | mi̍h-kiānn | 東西 | thing |
| 厝 | tshù | 家, 房子 | house, home |
| 冊 | tsheh | 書 | book |
| 遮 / 遐 | tsia / hia | 這裡 / 那裡 | here / there |

- [curriculum convention] All of these are MOE headwords or are listed in the MOE category indexes for pronouns and adverbs (lexicon sources `h98`, `h102`, `s:…`). The roadmap's script note and Wikipedia's page on the 700-character list both give 伊 i, 予 hōo, 毋 m̄, 媠 suí, 啉 lim and 遐 hia among the recommended characters ([Wikipedia, *Taiwan Taigi Recommended Characters*](https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters)).
- **Character variants a keyboard may produce** (the matcher treats them as the same, §10.3):
  - 台 / 臺 (the MOE writes 臺灣 but 臺灣台語);
  - 裡 / 裏;
  - 個 → 个 (Taiwanese keyboards offer 個 first) [inference];
  - 冊 / 册;
  - 著 / 着.
- **Never folded:** 不 for 毋, 在 for 佇, 要 for 欲, 吃 for 食. These are Mandarin words, not variant shapes (§4.7).
- **Three characters outside the Basic Multilingual Plane are allowed**, because the MOE uses them for core words with no alternative: 𪜶 *in* (they), 𠢕 in 𠢕早 *gâu-tsá* (good morning), and 𨑨 in 𨑨迌 *tshit-thô* (have fun). Nothing else outside the BMP is allowed; the generator refuses it (`NONBMP` in `respell.js`). Their font support must be checked (request 8, §11).
- **No Latin letters, no Arabic digits in Taigi strings.** The generator throws on them; numbers are written in characters.

### 2.3 "You", titles and forms of address

- **你 *lí* is the only "you"**, and **恁 *lín*** is "you all". There is no polite "you" (Mandarin's 您 is not Taigi) [inference].
- **We:**
  - 咱 *lán* means you and me (inclusive);
  - 阮 *guán* means we but not you (exclusive).

  Both are MOE pronouns (`h98`). English has one "we", so this is a Traps point (§4.6).
- **他 / 她 → 伊 *i*** for he and she; the meaning column says which. **They: 𪜶 *in***, which is also "his, her, their" ([MOE 𪜶](https://sutian.moe.edu.tw/und-hani/su/13567/): 𪜶兩个感情真好 / 𪜶某真媠).
- **Titles after the surname.** Surnames are read in their own (mostly literary) readings: 林 *Lîm*, 陳 *Tân*, 王 *Ông*, 李 *Lí* ([MOE 百家姓](https://sutian.moe.edu.tw/zh-hant/huliok/186/?iahbe=2); [林](https://sutian.moe.edu.tw/zh-hant/su/21888/), [王](https://sutian.moe.edu.tw/zh-hant/su/21827/), [李](https://sutian.moe.edu.tw/zh-hant/su/21867/)).

| Term | Generated pron | Use in the course |
|---|---|---|
| 林老師 | Lîm lāu-su | teacher Lîm (students call teachers 老師) |
| 頭家 | thâu-ke | the boss; the stall owner at the market (MOE: also "husband") |
| 阿伯 | a-peh | an older man (father's older brother; also a polite word to an older man: 阿伯𠢕早, from the MOE entry 𠢕早) |
| 阿姨 | a-î | an older woman; mother's sister |
| 阿公 / 阿媽 | a-kong / a-má | grandpa / grandma |

- Mr. / Mrs. / Miss titles (先生, 太太, 小姐) were **not verified** and are left out (§11).

### 2.4 Politeness basics an A1 learner needs

| Taigi | Generated pron | Use | Source |
|---|---|---|---|
| 𠢕早！ | Gâu-tsá! | good morning ("阿伯𠢕早") | [MOE 𠢕早](https://sutian.moe.edu.tw/zh-hant/su/13473/) |
| 你食飽未？ | Lí tsia̍h-pá--buē? | have you eaten? (a greeting) | [MOE 未](https://sutian.moe.edu.tw/zh-hant/su/1653/) |
| 多謝你！ | To-siā--lí! | thank you | [MOE 多謝](https://sutian.moe.edu.tw/und-hani/su/2415/) |
| 勞力 | lóo-la̍t | thanks (for help); the MOE lists it as a near-synonym of 多謝 | [MOE 多謝](https://sutian.moe.edu.tw/und-hani/su/2415/) |
| 歹勢 | pháinn-sè | sorry; excuse me (small things, embarrassment) | [MOE search 歹勢](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E6%AD%B9%E5%8B%A2) |
| 失禮 | sit-lé | I apologise (真失禮，這攏是我的毋著) | [MOE 失禮](https://sutian.moe.edu.tw/zh-hant/su/1826/) |
| 請你多多指教。 | Tshiánn lí to-to tsí-kàu. | nice to meet you (set phrase on meeting) | [MOE 請](https://sutian.moe.edu.tw/zh-hant/su/11380/) |
| 再會 | tsài-huē | goodbye | [MOE 再會](https://sutian.moe.edu.tw/zh-hant/su/2232/) |
| 無要緊 | bô iàu-kín | it doesn't matter; no problem | [MOE 副詞](https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100) |

- **你好 *lí hó*** is built from two checked words, and the roadmap uses it. Whether it is a natural Taigi greeting or a Mandarin calque is not verified; it appears only in `greet` and in one `greetings` note, with 𠢕早 and 食飽未 taught as the native greetings (§11).
- **The difference between 歹勢 and 失禮**, and 勞力 as the thanks for a favour, come from the MOE senses. How they are used day to day is [inference] and needs a native check.
- **請 *tshiánn*** is for inviting, requests and treating someone (MOE senses: 請你有閒來阮遐𨑨迌; 今仔日我請恁). It starts polite requests (請閣講一擺) [inference for that use].

### 2.5 Particles an A1 learner needs

| Particle | Pron | Function taught | Level, and MOE source |
|---|---|---|---|
| 無 (at the end) | --bô | yes/no question ("…or not?"): 你欲去無？ *Lí beh khì--bô?* | active from `u-bo` ([欲](https://sutian.moe.edu.tw/zh-hant/su/7469/)) |
| 未 (at the end) | --buē | "yet?": 你食飽未？ | active from `greetings` ([未](https://sutian.moe.edu.tw/zh-hant/su/1653/)) |
| 袂 (at the end) | --bē | "can / will … or not?": 這條歌你會曉唱袂？ | recognition in `can` ([會曉](https://sutian.moe.edu.tw/zh-hant/su/9626/)) |
| 敢 (before the verb) | kám | yes/no question: 這敢是你的？ *Tse kám-sī lí ê?* | active from `u-bo` ([敢](https://sutian.moe.edu.tw/zh-hant/su/8414/)) |
| 是毋是 | sī m̄ sī | "is it or isn't it?" | active in `si` ([是](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E6%98%AF&iahbe=1&pitsoo=50)) |
| 矣 | --ah | a change has happened, "now": 今仔日伊閣來矣 | active in `aspect` ([閣](https://sutian.moe.edu.tw/zh-hant/su/10907/)) |
| 咧 (at the end) | --leh | "and you?": 我欲食炒飯，你咧？ | active in `questions` ([咧](https://sutian.moe.edu.tw/zh-hant/su/4770/)) |
| 啦 | --lah | softens or urges: 免啦！ 莫買啦！ | recognition ([免](https://sutian.moe.edu.tw/zh-hant/su/2872/), [貴](https://sutian.moe.edu.tw/zh-hant/su/9035/)) |
| 乎 | --honnh | asks for agreement | recognition only (h99) |

- Writer rules:
  - question particles are their own tile;
  - a yes/no question ends in 無, 未 or 袂, or has 敢 before the verb, **never an English rising pitch alone** [inference];
  - the neutral tone of the particle is generated (§6.3).

### 2.6 Voice: none, so the course is text-only

- **Verified absences** (from the roadmap's `src`, rechecked by name in this profile's searches):
  - Azure Speech lists Taiwanese Mandarin (`zh-TW`) and no Taigi (`nan`) voice;
  - Google's Gemini-TTS lists `cmn-CN` and `cmn-TW` only;
  - Apple VoiceOver has Cantonese and Mandarin (mainland, Taiwan) and no Hokkien.

  The only Taigi text-to-speech found is a standalone phone app (台語AI TTS) with no stated API. The MOE has released a speech corpus and models, not a speech service. Android voices were not checked.
- **Design consequence** (as `en-ceb`, §2 of `docs/profiles/en-ceb.md`):
  - no item may depend on hearing; no listening-only `mc`; tone items work from the written marks;
  - the sound lessons describe each sound in words, by English comparison ("p as in *spin*, ph as in *pin*") and with the pitch numbers of a community wiki (§4.1, §11);
  - the pron line is shown by default for the whole course (§6.6).
- **`voiceMatch: "^nan(-|_|$)"`** (the engine's existing field, built for `yue` and `ceb`; `pickVoice` in `src/app.html`). Only a voice whose tag starts with `nan` can be chosen. **A `zh-TW` or `cmn-TW` voice must never be used**: it would read 我毋是 in Mandarin as *wǒ wú shì*. With no match the app shows its "No voice for this language" toast once; request 2 changes the text to "No Taiwanese voice exists yet: read the Tâi-lô line under each card."
- **MOE audio, later (verified terms):** the dictionary has recordings of every **headword and example sentence**, read by four named speakers in the main reading ([音檔說明](https://sutian.moe.edu.tw/und-hani/piantsip/imtong-suatbing/)). Its text and audio are released under **Creative Commons Attribution-NoDerivatives 3.0 Taiwan** (創用CC姓名標示-禁止改作 3.0 臺灣). They can be used without asking, as long as the licence is followed, and they can be downloaded from the 相關資源 page ([版權聲明](https://sutian.moe.edu.tw/und-hani/piantsip/pankhuan-singbing/)).
  - **What this allows:** the course could play the MOE clip for a card whose target is exactly an MOE headword or example sentence, credited and unchanged. No cutting, joining or speed change, since "no derivatives" rules those out.
  - **So prefer MOE headwords and MOE example sentences verbatim** as card targets and example rows. §9 already does: 80 of 90 sample cards are MOE headwords or MOE sentences (`word` / `moe`).
  - Whether re-encoding a file to another format counts as a derivative, and whether the app may bundle the files, is a question for the lead (request 4, §11).
- **The roadmap's `voice: "nan-TW"`** is kept as `ttsLang`. It matches nothing on today's devices and is harmless.

### 2.7 Voice of the English text

- Plain, friendly US English. A `why` is one sentence.
- **Taigi inside English text:**
  - In lesson bodies, put the characters in `<b>` and the Tâi-lô in `<i>` once, at first mention in that lesson: `<b>多謝</b> <i>to-siā</i>`.
  - In plain-text fields, write the characters bare, and add the Tâi-lô in brackets only when the point is the sound ("卵 (nn̄g) sounds just like 兩 (nn̄g)").
- **Any Tâi-lô quoted in English text must be copied from the generator's output**, never typed (validator request 6 checks quoted Tâi-lô against the generator).
- **Tones are named by number:** "tone 2", "tone 8". Marks are described as "acute", "grave", "circumflex", "macron", "short vertical line" (§3).
- Sample voice lines:
  1. "No 是 before an adjective: 伊真媠, she's very pretty."
  2. "Tone sandhi: hué has tone 2 but is said in tone 1 before tshia."
  3. "Nice work! Review these cards tomorrow so they stick."

## 3. Glossary

These are the terms used in English-language Taigi materials and in the MOE manual's own categories (聲母 initial, 韻母 final, 聲調 tone, 本調 citation tone, 變調 sandhi tone, 輕聲 neutral tone, 文讀 / 白讀 literary / colloquial) [curriculum convention], plus the sister courses' wording where Taigi does not differ. Use each term exactly and always the same way.

| Term to use | Do not use | Note |
|---|---|---|
| Taigi; Taiwanese | Taiwanese Hokkien (except in the course name and lesson 1), Minnan, Hoklo, dialect | "Taiwanese" alone can mean Mandarin to some readers; lesson 1 says once that the course says "Taigi" and "Taiwanese" for this language. |
| character | letter, symbol | 字 |
| Tâi-lô | romanization (except once, as a gloss), pinyin, POJ (except in the POJ note) | Always with the circumflex. |
| syllable | | One character = one syllable. |
| initial; final | onset, rime | initial = p, ph, ts, tsh, b, g, j…; final = a, ann, ing, ap, ooh… |
| aspirated / unaspirated ("with a puff of air" / "without") | voiceless, fortis | p / ph, t / th, k / kh, ts / tsh. |
| nasal vowel | nasalized | Written *nn*: sann, thinn. |
| checked syllable | entering tone, 入聲 | A syllable ending in -p, -t, -k or -h. Tones 4 and 8 only. |
| tone; tone number; tone mark | accent, pitch accent | **tone 1 … tone 8** (tone 6 does not exist in the general accent). **keywords** |
| citation tone | 本調, base tone (except as a gloss) | The tone the Tâi-lô shows. |
| tone sandhi; sandhi tone | tone change (except as a gloss), 變調 | The tone a syllable takes when it is not last in its group. **keyword** "sandhi" |
| tone group | phonological phrase | The stretch whose last syllable keeps its citation tone (§6.5). |
| neutral tone | light tone, 輕聲 (except as a gloss) | The syllable after `--`. **keyword** |
| literary reading / colloquial reading | reading / speaking pronunciation | 一 it / tsi̍t. |
| classifier | measure word (except once, as a gloss), counter | 个 本 隻 碗 杯 擺. **keyword** |
| adjective | stative verb | "No 是 before an adjective." |
| time word; place word | adverbial, locative | **keywords** "before the verb" |
| question word | wh-word, interrogative | 啥物 啥人 佗位 當時 按怎 偌濟 |
| negative | negator | 毋, 無, 袂, 莫, 免 |
| particle | | Sentence-final 無 未 咧 矣 啦. |
| 咧 for an action in progress; 矣 for a change; 有 + verb + 過 for experience | aspect marker, past tense | Never "past tense": Taigi verbs never change. |
| inclusive *we* / exclusive *we* | | 咱 / 阮. |
| false friend; calque | | |

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items with any learner data first.
2. Then items present in nearly every sentence and checkable in tiles or typing.
3. Then lesson-local and vocabulary traps.

Wrong forms are marked *. The wrong forms below are the author's constructions, built to show the point [inference]. Every right form is a sentence copied from the MOE dictionary or generated from checked words (§9, `moe` / `comp`).

1. **Tones: tone 2 heard as a rise, tone height over contour, and sandhi ignored**
   - Wrong → right:
     - *hô* or *hó* said with an English question rise → 好 *hó*. Tone 2 is a high **fall** (pitch 51), although the community wiki opened names it "rising".
     - 獅 *sai* / 豹 *pà* / 鱉 *pih* / 猴 *kâu* / 象 *tshiūnn* / 鹿 *lo̍k* said all alike.
     - 火車 said *hué-tshia* with the citation tone 2 on *hué* → said in tone 1 (2 → 1), while the spelling keeps tone 2.
     - 多謝你 said with a full tone on 你 → *To-siā--lí*: 你 is neutral.
   - [research-backed] Sun & Huang (2012), *Journal of East Asian Linguistics* 21(3): American English listeners and Taiwanese listeners did AX discrimination on two Taiwanese tone continua (T55–T33, T55–T51). The Taiwanese listeners were more accurate and had a peak of discrimination on the level–falling continuum that the English listeners lacked. The authors conclude that non-tone listeners rely on **pitch height**, tone listeners on **contour** ([Sun & Huang 2012, abstract](https://link.springer.com/doi/10.1007/s10831-012-9092-9)). The listeners were not learners. The point taken: English speakers will hear 獅 *sai* (55) and 虎 *hóo* (51) as both "high".
   - [curriculum convention] Pitch values: tone 1 55, tone 2 51, tone 3 31, tone 4 3ʔ, tone 5 24, tone 7 33, tone 8 5ʔ; tone 6 "not widely used" ([taioaan.org, *Tones of Taiwanese*](https://taioaan.org/wiki/index.php/Tones_of_Taiwanese)).
   - [curriculum convention] Sandhi: "within a phonological phrase, all its non-neutral-tone syllables save for the last undergo tone sandhi". Tone 1 → 7, 7 → 3, 3 → 2, 2 → 1. Tone 5 → 7 or 3 by dialect. Checked syllables in -p -t -k swap high and low; those in -h drop the -h and become tone 2 or 3 ([Wikipedia, *Tone sandhi*](https://en.wikipedia.org/wiki/Tone_sandhi)). For tone 5, a Taigi teacher quoted by PTS (2025): in 鳳凰風颱, 凰 (tone 5) becomes tone 3 in Taipei (Quanzhou-leaning) and tone 7 in the south (Zhangzhou-leaning) ([PTS / PNN, 2025-11-11](https://news.pts.org.tw/article/780782)). The MOE sandhi table marks the two tone 5 outputs (漳) and (泉) ([MOE, 臺羅標注說明](https://sutian.moe.edu.tw/und-hani/piantsip/tailo-phiautsu-suatbing/)).
   - Design consequence:
     - strand (a) of the standing rule;
     - the Seven tones and Tone sandhi in action decks;
     - two sandhi lessons before any sentence lesson, as in the roadmap.

2. **是 before adjectives**
   - Wrong → right:
     - *𪜶某是媠。 → 𪜶某真媠。 *In bóo tsin suí.* (MOE 𪜶)
     - *今仔日是熱。 → 今仔日真熱。 *Kin-á-ji̍t tsin jua̍h.* (MOE 熱)
   - [inference] Standard teaching point, shared with Mandarin and Cantonese. Not found as a learner-error statistic.
   - Design consequence: `si` previews it; `describing` drills it; it is the first Traps card.

3. **The four negatives: 毋, 無, 袂, 莫 (and 免)**
   - Wrong → right:
     - *我毋有… → 我無… (無 is the negative of 有)
     - "I didn't eat breakfast": *我毋食早起 → 我無食早起。 *Guá bô tsia̍h tsá-khí.* (MOE 早起)
     - "I can't / don't know how": *我毋會曉 → 我袂曉 *bē-hiáu* (MOE 袂)
     - "Don't buy it!": *毋買 → 莫買啦！ *mài bé--lah* (MOE 貴)
     - "No need": *毋使 → 免啦！ *Bián--lah!* / 毋免 *m̄-bián* (MOE 免)
     - "I don't want it": 我無愛 *bô ài* ("don't want") versus 毋 (refuse) (MOE 愛: 我無愛無老實的人)
   - [inference] English has one "not". Taigi divides it by meaning:
     - 毋 (won't, isn't);
     - 無 (doesn't have, didn't);
     - 袂 (can't, won't happen);
     - 莫 (don't!);
     - 免 (no need).

     The roadmap lists "four words for not" among its hardest points.
   - Design consequence:
     - `negation` (lesson 26) gathers them;
     - each is taught where it first appears (毋是 in `si`, 無 in `u-bo`, 袂 in `can`);
     - **the preferred mixed neighbour** in the last two items of every later set.

4. **Classifiers and 兩 / 二**
   - Wrong → right:
     - *一人 → 一个人 *tsi̍t ê lâng*
     - *二本冊 → 兩本冊 *nn̄g pún tsheh* (the generator throws on 二 + classifier)
     - *三飯 → 三碗飯 *sann uánn pn̄g* (MOE 碗)
     - *這冊 → 這本冊 *tsit pún tsheh* (這 + classifier is *tsit*; the generator throws on 這 + bare noun)
   - [inference] from the structure; [curriculum convention] the NTU syllabus has "quantities and measure words" as its lesson 5 (roadmap `basis`).
   - Design consequence: strand (b); `classifiers`; nouns on cards appear with number + classifier where natural.

5. **English order: time, place and means after the verb**
   - Wrong → right:
     - *我食飯佇厝裡 → 伊這馬佇厝裡咧睏 (model: 佇 + place before the verb; MOE 佇)
     - *伊去公園運動逐工早起 → 伊逐工早起攏會去公園運動。 (MOE 早起)
   - [inference] as in Mandarin and Cantonese (en-zh, en-yue §4.3).
   - Design consequence: strand (b); `place`, `time`, `go-come`.

6. **Inclusive and exclusive "we"; 𪜶 and 伊**
   - Wrong → right:
     - inviting someone with 阮 ("we, not you") → 咱來去踅夜市。 *Lán lâi-khì se̍h iā-tshī.* (MOE 夜市)
     - saying 伊 for "they" → 𪜶
   - [inference]. Design consequence: `si`; the People and family deck.

7. **Mandarin in place of Taigi (heritage learners and anyone who knows Mandarin)**
   - Wrong → right:
     - 不 → 毋; 在 → 佇; 要 → 欲; 吃 → 食; 喝 → 啉; 他 → 伊; 東西 → 物件; 很 → 真
     - reading MOE characters in Mandarin (毋 as *wú*, 佇 as *zhù*)
     - typing with a Mandarin keyboard and accepting its first character
   - [news report, anecdotal] Taiwanese Americans grow up with Mandarin far more than with Taigi: in Lin's survey, 6.1% of 33 participants called themselves native speakers of Taiwanese Southern Min ([Lin 2024, EULC5 slides](https://emlinking.github.io/files/eulc_slides.pdf)).
   - Design consequence:
     - the matcher never folds Mandarin words to Taigi (§10.3);
     - Traps cards;
     - `characters` names the Mandarin false friends once.

8. **Two number sets**
   - Wrong → right:
     - a phone number read with counting numbers (*sann, gōo*) → literary digits *sam, ngóo*: 空九八三 *Khòng-kiú-pat-sam*
     - *一个 it ê → *tsi̍t ê*
   - [practitioner opinion] Bite-size Taiwanese: literary readings are for reading off digits (phone and lottery numbers); tsi̍t and nn̄g only for counting things ([Bite-size Taiwanese, ep. 14](https://bitesizetaiwanese.com/ep14-what-is-your-phone-number)). [curriculum convention] The MOE lists both readings of each digit (`h100`). 拜一 *pài-it* and 廿一 *jia̍p-it* show literary 一 after a number word.
   - Design consequence: `numbers`; the generator reads digit strings with 空 in the literary set (§6.3).

9. **Tâi-lô letters read as English**
   - Wrong → right (said):
     - *ts* as in "its" is right, but *tsh* needs a puff;
     - *j* as English "j" → a voiced "dz" (熱 *jua̍h*) [inference];
     - *oo* and *o* confused → 虎 *hóo* ("aw") versus 好 *hó*;
     - *nn* read as a consonant → a nasal vowel (三 *sann*);
     - final *-h* ignored or said as "h" → a catch (肉 *bah*);
     - final *-p -t -k* released → unreleased (十 *tsa̍p*, 七 *tshit*, 鹿 *lo̍k*);
     - *p / t / k* with a puff → no puff (飽 *pá*);
     - *b, g* devoiced → voiced (肉 *bah*, 牛 *gû*);
     - *m̄* (毋) read "em" → a hummed m.
   - [inference]. Design consequence: `initials`, `finals`, the Tâi-lô sounds deck.

10. **The neutral tone ignored or misread**
    - Wrong → right: 你食飽未 with a full tone on 未 → *tsia̍h-pá--buē*; 多謝你 → *To-siā--lí*.
    - [curriculum convention] `--` marks the neutral tone; the syllable before it keeps its citation tone (MOE 臺羅標注說明, above).
    - Design consequence: `sandhi-2`.

11. **有 before a verb, and 過**
    - Wrong → right: "I've been there" → 我有去過。 *Guá ū khì--kuè.* (MOE 過). Learners drop 有, or use 有 only for "have".
    - [inference]. Design consequence: `u-bo`, `aspect`.

12. **False friends and greetings**
    - Wrong → right:
      - 你食飽未？ is a greeting, not an invitation;
      - 歹勢 for small things versus 失禮 for a real apology;
      - 好 is also "very" only in some words;
      - 卵 *nn̄g* (egg) and 兩 *nn̄g* (two) are the same sound;
      - 頭家 is "boss" and also "husband" (MOE);
      - 冊 is book (書 is literary).
    - [inference, with MOE senses]. Design consequence: Traps deck; `greetings`, `market`.

## 5. Learners: who, why, what first

**Who**
- [news report, opinion piece] Global Taiwan Institute (Cheng, 2025): Taigi use in Taiwan "declined sharply" after 1945, and during martial law (1949–1987) parents stopped teaching it to protect children. Overseas Taiwanese in the United States kept it visible (publications, Taigi church sermons), and American-born children learn it "to understand their identity". A Taigi language school runs in San Jose, California ([Global Taiwan Brief 10(18), 2025](https://globaltaiwan.org/2025/10/saving-tai-gi/)).
- [research-backed, small survey] Lin (2024): of 33 Taiwanese Americans surveyed, 6.1% were native speakers of Taiwanese Southern Min. Transmission to the second generation is weaker than for Mandarin ("I literally don't know anyone who is second gen and fluent in Taiwanese") ([Lin 2024](https://emlinking.github.io/files/eulc_slides.pdf)).
- [inference] The groups, probably in this order of size:
  - **heritage learners:** children and grandchildren of Taiwanese immigrants who heard Taigi from grandparents. They often speak or read Mandarin, so characters are familiar but Mandarin habits interfere (§4.7);
  - **partners and in-laws** of Taiwanese families;
  - **people moving to Taiwan**, especially to the south, where Taigi is heard more [inference];
  - **language enthusiasts** and Hokkien speakers from Southeast Asia who want the Taiwanese standard.

**Why**: family first (talking with grandparents), then identity, then life in Taiwan [inference; the Global Taiwan Brief names identity]. No survey of motives was opened (§11).

**What they need first** [inference]
1. **Reading Tâi-lô with tones, and knowing that sandhi exists.** Every later card depends on it. Five sound lessons come first, as in the roadmap.
2. **Greetings** that grandparents use: 𠢕早, 食飽未？, 多謝, 歹勢, 再會.
3. **Family words** (`family`, stage 2).
4. **The negatives and 是 without adjectives**, because they appear in every conversation (§4.2, §4.3).
5. **The night market and the market** (stage 4), the roadmap's food topics.
6. **Characters at recognition level only.** Heritage learners who read Mandarin can recognise most characters; the others rely on Tâi-lô. The course expects recognition of about 200 characters (§10.2).

**Check of the roadmap's order** [curriculum convention, as reported in the roadmap `src`]: NTU's Basic Taiwanese (PTCSL7915) puts pronunciation items week by week beside topics (classroom language, self-introduction, phone numbers, introducing others, measure words, shopping, directions, dates). The follow-on course adds market and food topics; NTHU's course teaches Tâi-lô, tones, sandhi and literary / colloquial readings. The NTU and NTHU pages were not reopened for this profile. The roadmap's order is kept unchanged (§8).

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [curriculum convention] MOE manual (2024):
  - The syllables of a word are joined, with a hyphen; words are written apart, with a space.
  - The neutral-tone mark `--` goes between the stressed syllable and the neutral one. The syllable before it keeps its citation tone, and a neutral-tone word still shows its own tone mark.
  - Tone marks are the official form; tone numbers (tong1 tong2 tong3 tok4 tong5 tong7 tok8) are the fallback.
  - The official forms are *oo* and *-nn* ([manual](https://language.moe.gov.tw/files/people_files/tshiutsheh_1130826.pdf)).
- [curriculum convention] MOE dictionary, 臺羅標注說明:
  - "本辭典的聲調攏標本調，無標變調": every tone is shown in its citation form, and sandhi is never marked.
  - Function words with no fixed tone are written with `-h` after `--`: *--lah*, *--ah* ([page](https://sutian.moe.edu.tw/und-hani/piantsip/tailo-phiautsu-suatbing/)).
- [curriculum convention] The MOE writes some common sequences as two words: 毋是 *m̄ sī*, 彼个 *hit ê*, 敢有 *kám ū*, 無愛 *bô ài*, 一擺 *tsi̍t pái*, 上好 *siōng hó*. Its example sentences start with a capital letter (*Lí tsia̍h-pá--buē?*), and proper nouns are capitalised (*Tâi-pak*, *Bí-kok-thôo-tāu*) (lexicon sources).

**Decision.** `pron: "required"`. The pron is Tâi-lô with tone marks, **generated by `tools/target/nan/respell.js`**, never typed by hand.
- Command line: `node tools/target/nan/respell.js "<text>"` prints `<text> -> <pron>`. `--pattern` prints `pronPattern`; `--check` loads and checks the lexicon and prints entry counts by source.
- The module exports `respell`, `pattern`, `warnings`, `W` (the lexicon), `SRC` (its sources), `sylOK` and `readingOK`.

### 6.1 Why a generator, and the lexicon

Tâi-lô cannot be read off characters one by one:
- many characters have a literary and a colloquial reading (一 *it* / *tsi̍t*, 大 *tāi* / *tuā*, 下 *hā* / *ē*, 上 *siōng* / *tsiūnn*);
- particles become neutral at the end of a question (無 *bô* → *--bô*);
- 這 and 彼 change with what follows;
- the MOE's word breaks (hyphen or space) belong to each word.

Hand-typed Tâi-lô would also bring the author's memory into the course, which this brief forbids. So:
- **`lexicon.txt` holds every word the course may use: 423 entries.** The format is `characters<TAB>tâi-lô<TAB>source id`. Each line was copied from a page that was opened, and the file header lists every source id with its URL. By source:

  | Source | Entries |
  |---|---|
  | MOE entry pages (`s:N`, headword and examples) | 215 |
  | MOE category and appendix indexes (`h29`, `h55`, `h61`, `h98`, `h99`, `h100`, `h102`, `h207`, `h186`) | 120 |
  | MOE headword searches (`t:X`) | 62 |
  | MOE character index for 臺 (`tai5`) | 8 |
  | Wiktionary, the eight-animal tone mnemonic (`wk8`) | 8 |
  | Wikipedia, the MOE 700-character list sample (`wp700`) | 6 |
  | Wiktionary, 臺語 (`wkTG`) | 2 |
  | Bite-size Taiwanese, ep. 14 (`bst14`) | 2 |

  Two entries are **derived** rather than copied: 禮拜一 *lé-pài-it* and 禮拜六 *lé-pài-la̍k*, built from the MOE headwords 禮拜 *lé-pài*, 拜一 *pài-it* and 拜六 *pài-la̍k*. They are marked `t:禮拜+derived` and listed in §11.
- **Where the MOE lists accent variants, the first (main) reading is kept** (袂 *bē*, not *buē*; 歲 *huè*, not *hè*; 火車 *hué-tshia*, not *hé-tshia*).
- **Checked on load:**
  - every syllable passes the Tâi-lô syllable rule (initials and finals from the MOE manual);
  - one tone mark at most;
  - the tone-8 mark only on -p, -t, -k or -h syllables, and the tone 2, 3, 5 and 7 marks never on them;
  - one syllable per character;
  - BMP Han characters only, plus the three allowed outside it (§2.2).
- **Longest match** over the lexicon, from the left and from the right. A different segmentation with the same reading is fine; a different reading throws.
- **It throws** on:
  - any character or word not in the lexicon;
  - a Latin letter or Arabic digit;
  - 這 or 彼 before a word it cannot place (§6.3);
  - 二 directly before a classifier (write 兩).
- **It warns** (stderr, not fatal) when 大, 下, 行 or 上 stands alone, since each has a second reading in other words.
- **Adding words:** writers never edit a pron. When the generator throws, the writer reports the word. **The lead adds a line only from the MOE dictionary or another opened source, with its source id.** If no source has it, the word stays out (§11). The lead then reruns the repron step (request 6).

### 6.2 The key (exact format)

| Rule | Decision | Example (generated) |
|---|---|---|
| Unit | the MOE word: syllables of a word joined by **hyphens**, words separated by **one space**, exactly as the lexicon entry (the MOE headword) has them | 食飽 → *tsia̍h-pá*; 毋是 → *m̄ sī* |
| Tones | **citation tones only**, never sandhi; marks: tone 2 acute *á*, 3 grave *à*, 5 circumflex *â*, 7 macron *ā*, 8 short vertical line *a̍*; **tones 1 and 4 have no mark** (4 is a syllable ending in -p -t -k -h) | 獅虎豹鱉猴狗象鹿 → *sai hóo pà pih kâu káu tshiūnn lo̍k* |
| Neutral tone | `--` before the neutral syllable, which keeps its own mark; also at the start of a particle | *To-siā--lí*, *--ah* |
| Letters | MOE forms: *ts tsh*, *oo*, *nn*, *ua ue*, *ing ik*, final *-h* | 厝 *tshù*, 虎 *hóo*, 三 *sann*, 肉 *bah* |
| Syllabic nasals | *m*, *ng* with the mark on the m or the n | 毋 *m̄*, 卵 *nn̄g* |
| Capitals | the first letter of a text that ends in 。？！ (a sentence), as in the MOE examples; proper nouns as the lexicon has them; nothing else | 你食飽未？ → *Lí tsia̍h-pá--buē?*; 臺北 → *Tâi-pak* |
| Accent | the MOE main reading (first listed) | 魚 *hî* (Taipei *hû*) |
| Numbers | a compound number is one hyphenated word; a new word starts at 空 | 十二 → *tsa̍p-jī*; 三百箍 → *sann-pah khoo*; 一百空一 → *tsi̍t-pah khòng-it* |
| Digit strings | a run of number characters containing 空 (a phone number), and any other run of 3+ digits in the same text: literary digits, one hyphenated word per group | 空九八三，五五七八。 → *Khòng-kiú-pat-sam, ngóo-ngóo-tshit-pat.* |
| Punctuation | 。，？！、：； → `. , ? ! , : ;` attached to the word before; quotes, brackets, 「」, … dropped | 頭家，弓蕉一斤偌濟錢？ → *Thâu-ke, king-tsio tsi̍t kin guā-tsē tsînn?* |
| Spaces in the input | ignored except as a segmentation hint | 我 是 學生 → *guá sī ha̍k-sing* |
| Unicode | output NFC; *a̍*, *m̄*, *n̄* have no precomposed form, so they stay as letter + combining mark | |

**What the aid does not show** (taught in `initials`, `finals`, `sandhi` and notes): sandhi tones; the pitch of each tone; aspiration as sound (only as the letter *h*); the release of -p -t -k.

### 6.3 Context rules (the homograph table)

| Characters | Rule | Example (generated = MOE) |
|---|---|---|
| 無 未 袂 | after a word and right before ？: neutral *--bô*, *--buē*, *--bē*; otherwise *bô*, *buē*, *bē* | 你欲去無？ *Lí beh khì--bô?*; 我無食早起。 *Guá bô tsia̍h tsá-khí.* |
| 咧 | after a word at the end (before punctuation): *--leh*; after 坐 (the only verb so far with an MOE example): *leh*; otherwise *teh* | 你咧？ *lí--leh?*; 坐咧看 *tsē leh khuànn*; 伊咧讀冊。 *I teh tha̍k-tsheh.* |
| 的 | at the end after a word that is not a pronoun: *--ê*; otherwise *ê* | 我足愛睏的。 *Guá tsiok ài-khùn--ê.*; 這敢是你的？ *Tse kám-sī lí ê?* |
| 過 | after a word at the end, or before a final 無？: *--kuè* | 我有去過。 *Guá ū khì--kuè.*; 有聽過無？ *ū thiann--kuè--bô?* |
| 這 / 彼 | before 是 敢 攏 嘛 也 就 遮 真 足 誠 較 傷 有 無 毋 袂 會 欲 佇, or at the end: *tse* / *he*; before a classifier, a number or 馬 / 陣: *tsit* / *hit*; otherwise **throw** | 這敢是你的？ *Tse kám-sī lí ê?*; 這塊桌仔 *Tsit tè toh-á* |
| 上 | before an adjective in the list (好 貴 俗 大 細 熱 寒 媠 濟 遠 近 好食 好看 慢): *siōng* "most"; otherwise *tsiūnn* (MOE main reading: climb, board) | 上好 *siōng hó*; 上車 *tsiūnn-tshia* |
| 一 二 | after another number word: literary *it*, *jī* | 十二 *tsa̍p-jī*; 廿一 *jia̍p-it* |
| 二 + classifier | throw: write 兩 | |
| 遮 / 遐 | *tsia* / *hia* "here / there"; *tsiah* / *hiah* "so" before an adjective in the 上 list or before 𠢕… | 這遮貴，莫買啦！ *Tse tsiah kuì, mài bé--lah!*; 你今仔日哪會遐𠢕早？ *… ná ē hiah gâu-tsá?* |

Readings that belong to words are in the lexicon, not in rules:
- 大學 *tāi-ha̍k* (literary 大);
- 下班 *hā-pan* (literary 下);
- 厝裡 *tshù--lí*;
- 多謝你 *to-siā--lí*;
- 請恁 *tshiánn--lín*;
- 一擺 *tsi̍t pái*;
- 過人 *kuè--lâng*;
- 上好是 *siōng-hó sī* (the adverb "had better"; the adjective "best" is the headword 上好 *siōng hó*).

Segmentation: when longest match from one side stalls on a character that the other side covers inside a longer word (第一擺: 第一 / 擺), the side that succeeds is used.

**Silent-error classes that remain** (no throw, no warning):
- a word whose literary reading is needed but which is not listed. Example: 人 is *lâng* everywhere; a literary word with 人 *jîn* would come out wrong if it were added without its own entry;
- a neutral tone that the MOE writes in a word or position the lexicon lacks. Example: a place word after a noun, like 厝裡;
- 過 before an object (你有去過臺灣無？) comes out *khì kuè Tâi-uân--bô*. The MOE spacing here is unverified, so writers put 過 at the end (§11);
- a phrase composed from two entries gets a space where the MOE might write a hyphen (我是美國人 → *Guá sī Bí-kok lâng*; the MOE may write *Bí-kok-lâng*). The matcher ignores spaces and hyphens, so only the display is at stake (§11).

### 6.4 `pronPattern`, tests and twenty worked examples

`pronPattern` is built by `pattern()`. It allows:
- letters (ASCII and Latin-1 / Latin Extended-A, plus Ǹ ǹ Ḿ ḿ), each optionally followed by one combining tone mark (U+0300, 0301, 0302, 0304, 030D);
- syllables joined by `-` or `--`;
- words separated by single spaces;
- a leading `--`;
- one ASCII punctuation mark after a word.

It is BMP-only, so it works with and without the `u` flag (`validate.js` compiles it with `u`, `repron.js` without).

```
^(?:--)?(?:[A-Za-zÀ-ÿĀ-žǸǹḾḿ](?:[̀́̂̄̍])?)+(?:(?:-|--)(?:[A-Za-zÀ-ÿĀ-žǸǹḾḿ](?:[̀́̂̄̍])?)+)*[,.?!:;]?(?: (?:--)?(?:[A-Za-zÀ-ÿĀ-žǸǹḾḿ](?:[̀́̂̄̍])?)+(?:(?:-|--)(?:[A-Za-zÀ-ÿĀ-žǸǹḾḿ](?:[̀́̂̄̍])?)+)*[,.?!:;]?)*$
```

- It rejects: characters, double spaces, a space before punctuation, Chinese punctuation, tone numbers (*li2*), underscores, a trailing hyphen.
- It accepts impossible syllables (it does not know Tâi-lô). **The generator's syllable rule is the guarantee.**
- **Tested** (node, with and without `u`): all lexicon readings, the 86 MOE sentences and the 90 sample cards pass; 8 of 8 negatives fail.
- **Against the MOE:** every example sentence and phrase met on the MOE entry pages opened (85, plus one from Bite-size Taiwanese) is reproduced character for character, including spaces, `--`, capitals and punctuation (scratch `nanP/moe_sentences.tsv`, `mocheck.js`).
  - The first run of the full set gave 74 of 86. The 5 silent differences were 的 at the end, 咧 after 坐, 遐 before 𠢕早, 過人, and 上好 as an adverb. The 7 throws were words not yet listed.
  - All were fixed with the rules in §6.3 or with entries read off the same MOE sentences.
  - **Since the lexicon comes from the same pages, this is a regression test, not an independent check.**

| # | Taigi | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | 我 | `guá` | I | tone 2 acute |
| 2 | 飽 | `pá` | full (after eating) | unaspirated p |
| 3 | 歹勢 | `pháinn-sè` | sorry | ph, nasal *nn*, hyphen inside a word |
| 4 | 食 | `tsia̍h` | eat | tone 8 on a checked syllable |
| 5 | 毋是 | `m̄ sī` | isn't | syllabic m; MOE writes two words |
| 6 | 彼个 | `hit ê` | that one | 彼 before a classifier = *hit* |
| 7 | 你食飽未？ | `Lí tsia̍h-pá--buē?` | Have you eaten? | sentence capital; 未 neutral before ？ |
| 8 | 多謝你！ | `To-siā--lí!` | Thank you! | listed neutral tone |
| 9 | 伊咧讀冊。 | `I teh tha̍k-tsheh.` | He's studying. | 咧 before a verb = *teh* |
| 10 | 我欲食炒飯，你咧？ | `Guá beh tsia̍h tshá-pn̄g, lí--leh?` | I'll have fried rice, and you? | 咧 at the end = *--leh*; comma kept |
| 11 | 這敢是你的？ | `Tse kám-sī lí ê?` | Is this yours? | 這 before 敢 = *tse* |
| 12 | 這本冊 | `tsit pún tsheh` | this book | 這 before a classifier = *tsit* |
| 13 | 我有去過。 | `Guá ū khì--kuè.` | I've been there. | 過 at the end = *--kuè* |
| 14 | 今仔日伊閣來矣。 | `Kin-á-ji̍t i koh lâi--ah.` | He came again today. | 矣 = *--ah* |
| 15 | 臺北上熱。 | `Tâi-pak siōng jua̍h.` | Taipei is the hottest. | proper noun; 上 before an adjective = *siōng* (comp) |
| 16 | 十二點 | `tsa̍p-jī tiám` | twelve o'clock | number word hyphenated; 二 after 十 |
| 17 | 兩碗麵 | `nn̄g uánn mī` | two bowls of noodles | 兩 before a classifier |
| 18 | 空九八三，五五七八。 | `Khòng-kiú-pat-sam, ngóo-ngóo-tshit-pat.` | (a phone number) | literary digits |
| 19 | 阿伯𠢕早。 | `A-peh gâu-tsá.` | Good morning, sir. | character outside the BMP |
| 20 | 雞卵 | `ke-nn̄g` | chicken egg | syllabic ng with a mark |

### 6.5 Tones and sandhi: what the learner is told, and what the course does not attempt

**Printed: citation tones**, as the MOE dictionary and every textbook print them. Printing sandhi tones would need tone-group parsing: where a group ends depends on syntax (subject, verb, object, particles, neutral syllables). No tool for that was found, and a wrong mark would be worse than a consistent rule the learner applies.

**What the learner is told** (`sandhi`, then `sandhi-2`):
1. "The marks show each syllable's own tone. In speech, **every syllable except the last one of a group changes to its sandhi tone**; the last one keeps the tone you see."
2. The circle for open syllables: **1 → 7, 7 → 3, 3 → 2, 2 → 1**, and **5 → 7** (southern and general accent, the course's accent; Taipei speakers say 5 → 3) [curriculum convention: Wikipedia *Tone sandhi*; PTS 2025].
3. Checked syllables: in -p -t -k, 4 and 8 swap (high ↔ low); in -h, the -h disappears and 4 → 2, 8 → 3 [curriculum convention: Wikipedia *Tone sandhi*, which gives "tone 2 or 3". **Which tone goes to which was not stated on the page read**; the lesson must be checked by a native teacher before it ships (§11)].
4. "A group usually ends at the end of a word, before a pause, and before a neutral-tone syllable (after `--`). Short words like 我, 你 at the end of a phrase keep their tone." [inference: the general principle is from the MOE / PTS line "一个詞干焦最後一字讀本調"; where groups end inside sentences is simplified here].
5. The neutral tone: after `--` the syllable is said light and low; the syllable before it keeps its citation tone [curriculum convention: MOE 臺羅標注說明].
6. 仔 *á*: words with 仔 have their own pattern before it (the NTU syllabus teaches "sandhi before -á", per the roadmap). **Not taught in detail**: no source was opened that states the rule (§11). The lesson says only that the syllable before 仔 changes in its own way.

**What the course does not attempt:** marking sandhi tones; deciding group ends inside sentences; testing sandhi on whole sentences. Sandhi is practised only on two-syllable words, in the Tone sandhi in action deck and in `mc` items like "In 火車, which tone is hué said in?" (answer: tone 1). No item depends on hearing.

### 6.6 Card front, and hiding the Tâi-lô

- **Card front:** the characters, large, with the Tâi-lô line under them, **shown by default for the whole course**. There is no voice, so Tâi-lô is the only guide to the sound (as in `en-ceb`).
- **Hideable** later through a per-course setting "Tâi-lô: always / tap to reveal / off" (request 10). It stays on by default.
- **Lesson example rows** show the Tâi-lô under the Taigi.
- **Practice items carry no pron** (PRACTICE-SPEC), with two exceptions:
  - sound-stage items whose answer *is* Tâi-lô;
  - the one tone `mc` item per set (§7).

### 6.7 What lessons 1–2 must teach so the aid can be read

1. One character = one syllable. Hyphens join a word's syllables, and spaces separate words.
2. Initials: p / ph, t / th, k / kh, ts / tsh (with and without a puff); b, g, j are voiced; ng- at the start; h, s, l, m, n.
3. Finals: o and oo; a, e, i, u; the nasal vowels in -nn; -m -n -ng; the stops -p -t -k unreleased and -h as a catch; syllabic m and ng.
4. The seven tones come next, in lesson 3, with the eight-animal mnemonic.
5. POJ in one paragraph, for heritage learners who met church romanisation.
6. Typing: tone numbers 1–8 after each syllable (*tsit8*, *lang5*) are fine (§10.3).

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things.
- **(a) Tones and sandhi.** The tone mark makes the word (獅 *sai* / 豹 *pà* / 猴 *kâu*; 好 *hó* / 虎 *hóo* differ in vowel, not tone), and the first syllable of a word is said in its sandhi tone (火車: *hué* said in tone 1).
- **(b) Taigi order and classifiers.** When and where come **before the verb** (伊這馬佇厝裡咧睏; 伊逐工早起攏會去公園運動). A counted or pointed-at noun takes a **classifier** (一个人, 三碗飯, 這本冊), with 兩, never 二.

**Why these two.**
- **Tones:** the only area with any data on English listeners (Sun & Huang 2012). They are present in every syllable from lesson 1, and sandhi changes nearly every syllable but the last. So the five sound lessons have a hinge before any grammar exists.
- **Order and classifiers:** the structural errors in almost every sentence from lesson 9 on (§4.4, §4.5), checkable mechanically. This also mirrors en-zh and en-yue, so reviewers moving between the Chinese-script courses see the same shape.
- **Not chosen:**
  - **The four negatives:** a choice of word, and lesson-bound. They are the preferred mixed neighbour in the last two items of every later set instead (§8).
  - **是 before adjectives:** lesson-local (`si`, `describing`) and a Traps point.
  - **Particles:** several are often acceptable.

**How strand (a) stays alive after the sound stage.** Practice items are in characters, which show no tones. So:
- In the five sound lessons the tone hinges are **Tâi-lô `ty` items** with a **tone pair** as the distractor (*kâu* / *káu*, *pà* / *pá*), and Tâi-lô `or` tiles once request 7 is built (see below).
- **From `greetings` on, every set's `mc` block includes at least one tone or sandhi item**, for example:
  - "Which is the Tâi-lô of 獅 (lion)?": *sai / sài / sâi / sāi*;
  - "In 公園, which tone is kong said in?": tone 7 / tone 1 / tone 3 / tone 2.

  This is a writer rule, not a validator rule (`mc` items are not counted).
- **What the validator accepts today** (`validate.js`, read):
  - `type` answers pass if they match `targetScript` **or** (with `pronAnswers`) `pronPattern`. So a Tâi-lô answer with marks (*sai*, *kâu*) is accepted as it stands. A tone-number form (*sai1*) is not, so writers do not list it: the matcher accepts tone numbers (request 1).
  - `order` items must have Taigi text in the joined answer tiles (`targetScript`), so **Tâi-lô-only tile items fail** until request 7 is built.
  - Until then, the sound lessons' `or` hinges use strand (b) with characters (一 个 人 x 二; 三 碗 飯 x 个), cued in English, and strand (a) is carried by `ty` and `mc` items.

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least 2 `or` items and 2 `ty` items hinge on (a) or (b), and their `why` names it with a keyword.

**What counts as hinging** (mechanical):
- **`or`, strand (a):** the tiles are Tâi-lô and `x` holds a tone pair of a tile (same letters, different tone).
- **`or`, strand (b):** `a` puts time or place before the verb, or number / 這 / 彼 + classifier before the noun; `x` holds a tile that only fits English order or a wrong classifier, or 二 where 兩 is needed.
- **`ty`, strand (a):** the answer is Tâi-lô, and `x` holds a tone pair.
- **`ty`, strand (b):** `a[0]` contains time or place + verb, or number / 這 + classifier + noun. `x` holds a wrong classifier or 二 (never a word of the answer).

**Examples in the shorthand** (practice tiles are spaced by word, §10.4):

```
['ty', 'Type 猴 (monkey) in Tâi-lô', 'kâu', 'tone 5: the circumflex, or type kau5', 'káu', 'Tone 5 has the circumflex: kâu. káu with tone 2 is dog.']
['ty', 'Type 獅 (lion) in Tâi-lô', 'sai', 'tone 1 has no mark', 'sāi', 'Tone 1 has no mark: sai.']
['or', 'park (Tâi-lô; needs request 7)', 'kong hn̂g', 'hn̄g', 'Tone 5 on hn̂g: the circumflex. hn̄g with tone 7 is far.']
['or', 'two books', '兩 本 冊', '二', 'Before a classifier, two is 兩: 兩本冊.']
['or', 'He is sleeping at home now.', '伊 這馬 佇 厝裡 咧 睏', '佇厝', 'Place with 佇 goes before the verb: 佇厝裡咧睏.']
['ty', 'three bowls of rice', '三 碗 飯|三碗飯', '三 · 碗 · 飯', '个', 'Rice by the bowl takes the classifier 碗.']
```

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\btones? [1-8]\b|\btone (?:marks?|numbers?|pairs?)\b|\b(?:tone )?sandhi\b|\bneutral tone\b|\bclassifiers?\b|\bbefore the (?:verb|noun)\b
```

- **Not keywords:** bare "tone", "word order", "comes first", "measure word".
- **Writers do not use "before the verb" in lines about 敢**, which is not an order hinge; they write "敢 goes after the subject".

**Tested** (node, 32 of 32 as expected; scratch `nanP/tests.js`):
- **Match (16):**
  - 獅 (sai) is tone 1: high and level.
  - Tone 5 rises: kâu.
  - Tones 2 and 3 have different marks.
  - Check the tone mark: lô, not lō.
  - Type the tone number after the syllable: lang5.
  - Tone sandhi: hué is said in tone 1 before tshia.
  - In sandhi, tone 5 becomes tone 7 in the south.
  - Neutral tone after --: say lí light and low.
  - Books take the classifier 本: 兩本冊.
  - A number needs a classifier before the noun: 一个人.
  - 這 + classifier + noun: 這本冊.
  - Time goes before the verb: 我明仔載去.
  - Place with 佇 goes before the verb: 我佇厝裡食飯.
  - The describer with 的 goes before the noun.
  - Tone pairs: 獅 sai and 豹 pà.
  - Tone 8 has a short vertical line above the vowel.
- **No match (16):**
  - Use 多謝 for thanks.
  - No 是 before an adjective: 伊真媠.
  - 無 is the negative of 有.
  - 毋 is for refusing; 袂 for cannot.
  - 莫 means don't.
  - The question word stays where the answer goes.
  - 矣 shows the change has happened.
  - 咧 before a verb: in progress.
  - Say it in a polite tone.
  - Tones matter.
  - Word order: subject, verb, object.
  - 敢 goes after the subject to ask.
  - ts is like the ts in cats.
  - nn makes the vowel nasal.
  - We have 7 tones in all.
  - 兩, not 二, for two things.

**Lessons where the rule is hardest:**
- `initials` / `finals` (no tones yet): hinge on tone marks as spelling (*sai* x *sài*), or classifiers in 一个人.
- `characters`: 這 + classifier (這本冊 x 這冊).
- `greetings`: tone pairs in the greeting words, or 一擺 in 請閣講一擺.
- `numbers`, `prices`: 兩 + classifier (x 二).
- `aspect`, `go-come`, `time`, `place`: time and place before the verb.

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4 and §5):
- **Kept: all 27 items, in the roadmap's order.** Ids lose the `nan-` prefix, and each appears exactly once in a `roadmap` field. The order already puts the five sound lessons first and the negatives late, which suits this course.
- **No lessons added.** The roadmap already has `family`, `classroom` and two sandhi lessons, the things the sister courses had to add.
- **Retitled to MOE forms and checked words.** Every Taigi string in a title goes through the generator.
  - `greetings`: 你好 is replaced by 𠢕早 (the MOE greeting; 你好 is unverified as native, §2.4).
  - `intro`: 你叫啥物名 becomes 你號做啥物名？ (the MOE example), and 我是美國人 becomes 我是學生.
  - `classifiers`: 一個 becomes 一个 (MOE 个).
  - `time`: 幾月幾號 is replaced by 禮拜日 (幾月幾號 unverified).
  - `aspect`: 咧 *leh* / 矣 *ah* become 咧 *teh* / 矣 *--ah* (MOE).
- **Content notes moved:** `describing` also carries the "no 是 with adjectives" drill (§4.2). `aspect` also teaches 有 + verb + 過 at the end (§6.3).

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Tâi-lô, tones and first words** | | | |
| 1 | `initials` | Tâi-lô consonants: p and ph, ts and tsh, and the voiced b, g, j | nan-initials | One character = one syllable; the initials p ph b m, t th n l, k kh g ng h, ts tsh s j; aspiration described in words (spin / pin); voiced b g j; POJ in one paragraph; how to type tone numbers. Trap: reading Tâi-lô as English (§4.9). Each sound shown in a checked word: 飽 pá, 天 thinn, 牛 gû, 肉 bah, 厝 tshù. | Tâi-lô sounds |
| 2 | `finals` | Vowels and endings: o and oo, nasal nn, and the stops -p -t -k -h | nan-finals | o / oo (好 hó / 虎 hóo), nasal vowels (三 sann, 天 thinn), -m -n -ng, unreleased -p -t -k (十 tsa̍p, 七 tshit, 鹿 lo̍k), -h as a catch (肉 bah, 鱉 pih), syllabic m and ng (毋 m̄, 卵 nn̄g). Trap: nn read as n; final consonants released. | Tâi-lô sounds |
| 3 | `tones` | The seven tones and their marks | nan-tones | Tones 1 2 3 4 5 7 8 with marks and pitch numbers (55, 51, 31, 3ʔ, 24, 33, 5ʔ; taioaan.org, §11); the mnemonic 獅虎豹鱉猴狗象鹿; no tone 6 in the general accent; checked syllables take 4 or 8 only. Trap: tone 2 heard as an English rise; contour ignored (§4.1). | Seven tones |
| 4 | `sandhi` | Tone sandhi 1: every syllable but the last changes | nan-sandhi | The tone group; 1 → 7, 7 → 3, 3 → 2, 2 → 1, 5 → 7 (Taipei 5 → 3); the spelling keeps citation tones; practice on two-syllable words (火車, 公園, 菜單, 牛肉, 大人). Trap: reading marks literally in phrases. | Tone sandhi in action |
| 5 | `sandhi-2` | Tone sandhi 2: checked syllables, 仔, and the neutral tone after -- | nan-sandhi-2 | -p -t -k: 4 ↔ 8; -h syllables lose the -h (details for native check, §6.5); the neutral tone after -- (多謝你, 你食飽未？); 仔 named only. Trap: full tone on 你 in 多謝你. | Tone sandhi in action |
| 6 | `greetings` | Greetings: 𠢕早, 食飽未？, 多謝, 歹勢, 再會 | nan-greetings | 𠢕早, 你食飽未？ (a greeting, not an invitation), 多謝 / 勞力, 歹勢 / 失禮, 再會, 請你多多指教; 你好 recognition. Trap: 食飽未 taken as an invitation; 歹勢 for a serious apology (§4.12). | Greetings and courtesy |
| 7 | `characters` | Reading Taigi characters: 毋, 佇, 遮, 欲, 予 | nan-characters | The MOE recommended characters; Taigi-only ones (毋 佇 遮 欲 予 媠 囝 睏 啉 厝); the Mandarin false friends 不 在 要 吃 named once; traditional characters; the three characters outside the BMP. Trap: reading the characters in Mandarin (§4.7). | Taigi characters |
| | | **Stage 2: First sentences** | | | |
| 8 | `classroom` | Classroom phrases: 請閣講一擺, 慢慢仔講 | nan-classroom | 請閣講一擺, 慢慢仔講, 我毋知 / 我毋知影, 老師, 學生. The roadmap's 我聽無 and 按怎講 are left out: unverified (§11). Trap: 請 used as a general "please". | In class |
| 9 | `si` | 是 and 毋是; 我, 你, 伊, and two words for we: 阮 and 咱 | nan-si | Noun + 是 + noun (我是學生); 毋是 (MOE: two words, m̄ sī); 是毋是; pronouns 我 你 伊, 阮 / 咱 / 恁 / 𪜶; no 是 before adjectives (preview). Trap: 是 before an adjective; 阮 for an invitation (§4.2, §4.6). | People and family |
| 10 | `intro` | Introducing yourself: 你號做啥物名？ 我是學生 | nan-intro | 你號做啥物名？, 貴姓？, 我姓林, 我是學生, 我蹛佇臺北, 我是美國人 (composed, §11). Trap: question word first; English order with 佇. | About me |
| 11 | `questions` | Question words: 啥物, 啥人, 佗位, 當時, 按怎 | nan-questions | The question word stays where the answer goes (你欲食啥物？ composed; 你號做啥物名？ MOE); 偌濟; 你咧？ Trap: question word first (§4.5). | Questions and particles |
| 12 | `numbers` | Two sets of numbers: counting, and reading digits | nan-numbers | Counting 一 to 十 (tsi̍t … tsa̍p), 百 千 萬; 兩 before a classifier; literary digits for phone numbers (空九八三); 你的電話幾號？ Trap: 二 before a classifier; counting numbers in a phone number (§4.8). | Numbers and money |
| 13 | `family` | Family: 阿爸, 阿母, 阿公, 阿媽, 阿兄 | nan-family | 阿爸 阿母 阿公 阿媽 阿兄 阿姊 小弟, 外公 外媽, 囝, 後生, 翁某, 牽手; 𪜶 (they, their). The roadmap's 小妹 is unverified. Trap: Mandarin 媽媽 / 爸爸. | People and family |
| 14 | `u-bo` | 有 and 無: have, there is, and questions with 無 and 敢 | nan-u-bo | 有 / 無 for having and there is; …無？ (--bô) and 敢 questions; 敢有; 有 + verb (我有去過, preview). Trap: 毋有; a rising pitch for a question with no particle. | Questions and particles |
| | | **Stage 3: Numbers, shopping and places** | | | |
| 15 | `classifiers` | Classifiers: 一个人, 兩本冊, 三碗飯; 這 and 彼 | nan-classifiers | Number / 這 / 彼 + classifier + noun; 个 本 隻 碗 杯 張 擺 件; 這 tsit / tse and 彼 hit / he. Trap: 一人, 這冊, 二本冊 (§4.4). | Classifiers |
| 16 | `prices` | Money and prices: 偌濟錢？, 箍, 傷貴 | nan-prices | 偌濟錢？, 箍 (三百箍), 貴 / 俗, 傷 + adjective (傷鹹, 傷貴), 這遮貴，莫買啦！ Trap: 二 before 箍; 是 before 貴. | Numbers and money |
| 17 | `want` | Want and need: 欲, 愛, 想欲 | nan-want | 欲 + verb (want to, about to: 欲落雨矣); 愛 (like, want, must: 你行路愛小心); 想欲 (would like: 我想欲去便所); 無愛 (don't want). Trap: Mandarin 要; 毋 for "don't want" (§4.3). | Night market food |
| 18 | `place` | Where things are: 佇, 遮 and 遐, 頂懸, 下跤 | nan-place | Thing + 佇 + place (伊佇厝裡); 佇 + place before the verb; place words after the noun (椅仔下跤); 遮 / 遐; 頂懸, 下跤, 內面, 頭前, 後壁. Trap: place after the verb (§4.5). | Places and directions |
| 19 | `directions` | Directions: 正手, 倒手, 直直行, 斡 | nan-directions | 正手 / 倒手, 正爿, 直直, 行, 斡, 路口, 到 (頭前路口斡正爿就到矣). Trap: English order for "turn right at the corner". | Places and directions |
| 20 | `go-come` | Going and coming: 去, 來, 坐車, 捷運 | nan-go-come | 去 / 來 / 來去 (咱來去踅夜市), 坐 + vehicle before the verb, 捷運, 火車, 計程車, 高鐵, 臺鐵, 上車, 行路. Trap: means of transport after the destination. | Getting around |
| 21 | `time` | Time and days: 幾點？, 今仔日, 禮拜日 | nan-time | 幾點？, 十二點, 點鐘, 分鐘; 今仔日, 明仔載, 昨昏; 早起, 中晝, 下晡, 暗時; 禮拜, 禮拜日 (禮拜一 derived, §11). Trap: time at the end of the sentence (§4.5). | Time and days |
| | | **Stage 4: Food and daily life** | | | |
| 22 | `food` | At the night market: 頭家, 一碗麵, 好食 | nan-food | 夜市, 頭家, 一碗麵, 滷肉飯 / 肉燥飯, 肉圓, 好食 / 歹食, 菜單, 茶, 水. Trap: no classifier (一麵); 是好食. | Night market food |
| 23 | `market` | At the market: 菜, 肉, 卵, 魚, and asking how much | nan-market | 菜市仔, 菜, 肉, 卵 / 雞卵, 魚, 水果, 弓蕉, 一斤, 偌濟錢？, 俗 / 貴 (彼擔賣的水果較俗). Trap: 卵 and 兩 sound alike; 是 before 俗. | At the market |
| 24 | `describing` | Describing and comparing: 真, 誠, 足; 比…較, 上 | nan-describing | 真 / 誠 / 足 + adjective, no 是 (今仔日真熱); A 比 B 較 + adjective (伊的糖仔比我較濟; 明仔載會比今仔日較寒); 上 + adjective (上好); 傷. Trap: 是 before adjectives; English "than" order (§4.2). | Describing and comparing |
| 25 | `can` | Can and may: 會 and 袂, 會使, 會曉 | nan-can | 會 / 袂 (can, will: 伊會來); 會曉 / 袂曉 (know how); 會使 / 袂使 (may); 會當 / 袂當; questions with 袂 at the end (這條歌你會曉唱袂？). Trap: 毋會曉 for 袂曉; 會 for a learned skill without 曉. | Traps for English speakers |
| 26 | `negation` | Four words for not: 毋, 無, 袂, 莫 | nan-negation | 毋 (won't, isn't), 無 (doesn't have, didn't), 袂 (can't, won't happen), 莫 (don't!), 免 / 毋免 (no need) side by side; 無愛 vs 毋. Trap: one English "not" for all five (§4.3). | Traps for English speakers |
| 27 | `aspect` | Actions in time: 咧 (in progress), 矣 (done), 有…過 (ever) | nan-aspect | 咧 + verb (伊咧讀冊), 矣 at the end (今仔日伊閣來矣, 欲落雨矣), 有 + verb + 過 at the end (我有去過), 猶未 (not yet: 我猶未食飯). Trap: 矣 used as a past tense; 過 before an object (§6.3). | Describing and comparing |

Per-lesson notes for writers:
- Every set satisfies §7: two `or` and two `ty` hinges, and from `greetings` on one tone or sandhi `mc` item.
- The last two items of each set may mix in a neighbour from an earlier lesson. **Preferred neighbours: the negatives 毋 / 無 / 袂 / 莫**, 是 against 真, 兩 against 二, a classifier.
- Accepted answers list the natural variants: with and without the subject when the prompt gives it; 毋知 / 毋知影; 真 / 誠 / 足 where the prompt allows. The matcher, not the list, handles 臺 / 台 and 个 / 個.
- **Every Taigi word a writer uses must be in `lexicon.txt`** (the generator throws otherwise). Prefer MOE example sentences verbatim (`moe`), because they are verified and could later play MOE audio (§2.6). A composed sentence uses only checked words and is listed in the writer's report for a native check.
- Cue the prompt when several Taigi words fit ("(use 袂)", "(to the stall owner)", "(by the bowl)").
- Lesson bodies are in English, with Taigi in `<b>` and Tâi-lô in `<i>` at first mention. Example rows `{{ex:Taigi|pron|English}}` take the generated pron.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards). Card shape: `target | pron | meaning | note`.
- `target`: Taigi in MOE characters, no spaces, full-width punctuation for sentences. Nouns appear with a number + classifier where natural. **Every target must generate without a throw**, which means every word is in `lexicon.txt` (§6.1).
- `pron`: generated (§6). Never typed.
- `meaning`: short American English.
- `note`: one English line, or empty. Tone notes, Taipei forms, Mandarin false friends and traps go here.
- **Prefer MOE headwords and MOE example sentences verbatim** (audio later, §2.6). The `Origin` column below shows which samples are which:
  - `word` = a lexicon headword;
  - `moe` = an MOE example sentence or phrase copied whole;
  - `comp` = composed from checked words (in §11 for a native check).

**Groups, in order:**

| Group | Decks |
|---|---|
| Sounds and script | Tâi-lô sounds · Seven tones · Tone sandhi in action · Taigi characters |
| First steps | Greetings and courtesy · People and family · About me · In class |
| Everyday words | Numbers and money · Classifiers · Night market food · At the market · Time and days |
| Out and about | Places and directions · Getting around |
| Conversation | Questions and particles · Describing and comparing · Traps for English speakers |

**Script decks work as ordinary decks** (no letter-drill machine needed, §10.1):
- every target is a real word;
- the pron shows the Tâi-lô, and the note names the sound point;
- with no voice, the note's English comparison carries the sound.

Rules for writers:
- **Tâi-lô sounds** (about 18): one word per misleading letter or ending (p / ph, t / th, k / kh, ts / tsh, b, g, j, o / oo, nn, -m -n -ng, -p -t -k, -h, syllabic m / ng). Use only words in the lexicon (飽 天 牛 虎 好 肉 厝 熱 三 十 七 鹿 鱉 毋 卵 茶 去 獅).
- **Seven tones** (about 16): the eight animals (獅 虎 豹 鱉 猴 狗 象 鹿) plus tone pairs from the lexicon (豹 pà / 飽 pá; 猴 kâu / 狗 káu). One note per card names the tone, the mark and the pitch.
- **Tone sandhi in action** (about 16): two-syllable lexicon words, each note naming the first syllable's sandhi tone. Use only the open-syllable rules (§6.5 points 2 and 4) until a native teacher has checked the checked-syllable rule (§11).
- **Taigi characters** (about 16): MOE recommended characters for native words (毋 佇 欲 予 媠 囝 睏 啉 厝 遮 遐 个 𪜶 冊 食 蹛). One card may name the Mandarin false friend in its note.
- **Traps for English speakers** (about 18):
  - about 6 cards on 是 and adjectives (𪜶某真媠, 今仔日真熱);
  - about 6 on negatives (毋是, 我無愛, 莫買啦, 免啦, 我袂曉);
  - about 6 on sound-alikes and false friends (卵 / 兩, 食飽未 as a greeting, 頭家 = boss and husband, 冊 = book).
- Within a deck no two cards share a meaning (validator).

**Five sample cards per deck** (all `pron` values generated by `respell.js` and checked against `pronPattern`):

**1. Tâi-lô sounds** (Sounds and script). One word for each Tâi-lô letter or ending that misleads English readers: ph, th, kh, tsh, b, g, j, oo, nn, and the stops -p -t -k -h. Lessons: `initials`, `finals`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 飽 | pá | full (after eating) | p has no puff of air, like the p in "spin". With a puff it would be ph. | word |
| 天 | thinn | sky | th is t with a puff of air. The nn after the vowel is not a letter n: it makes the vowel nasal. | word |
| 牛 | gû | cow; ox | g is a real g, as in "go". Tone 5: a rise from low to middle. | word |
| 虎 | hóo | tiger | oo sounds like the "aw" in "law". 好 hó (good) has the other o, said with tighter lips. | word |
| 肉 | bah | meat | b is a voiced b. The h at the end is a catch in the throat: stop the vowel short. | word |

**2. Seven tones** (Sounds and script). The tone mnemonic 獅虎豹鱉猴狗象鹿 (sai hóo pà pih kâu káu tshiūnn lo̍k): one animal per tone, with its mark. Lessons: `tones`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 獅 | sai | lion | Tone 1, no mark: high and level. | word |
| 豹 | pà | leopard | Tone 3, grave mark (à): low and falling. | word |
| 鱉 | pih | soft-shelled turtle | Tone 4, no mark, and the word ends in -h: short and cut off, lower than tone 8. | word |
| 猴 | kâu | monkey | Tone 5, circumflex (â): rising. | word |
| 鹿 | lo̍k | deer | Tone 8, a short vertical line above the vowel (o̍): short and high, ending in -p -t -k or -h. | word |

**3. Tone sandhi in action** (Sounds and script). Two-syllable words whose first syllable is said in its sandhi tone, while the last keeps the tone you see. Lessons: `sandhi`, `sandhi-2`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 火車 | hué-tshia | train | hué has tone 2, but before tshia it is said in tone 1 (2 → 1). The Tâi-lô still shows tone 2. | word |
| 公園 | kong-hn̂g | park | kong is tone 1 and is said in tone 7 here (1 → 7): middle and level. | word |
| 菜單 | tshài-tuann | menu | tshài is tone 3 and is said in tone 2 here (3 → 2). | word |
| 牛肉 | gû-bah | beef | gû is tone 5. In southern and general Taiwanese it is said in tone 7 here (5 → 7); in Taipei, tone 3. | word |
| 大人 | tuā-lâng | adult | tuā is tone 7 and is said in tone 3 here (7 → 3). The last syllable, lâng, keeps its tone. | word |

**4. Taigi characters** (Sounds and script). Characters that Taiwanese writes and Mandarin does not use this way: 毋, 佇, 欲, 予, 媠, 囝, 厝, 睏, 啉. Lessons: `characters`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 毋 | m̄ | not (won't, isn't) | The negative of 是 and of willing: 毋是 (isn't). The m is a whole syllable, tone 7. | word |
| 佇 | tī | at; in | Where something is or happens: 伊佇厝裡 (she's at home). | word |
| 欲 | beh | want to; be about to | 欲 + verb: 我欲去 (I'm going to go). | word |
| 予 | hōo | give; let | Also marks who something is done to or for. | word |
| 媠 | suí | beautiful; pretty | An MOE recommended character for a native Taigi word. No 是 before it: 伊真媠. | word |

**5. Greetings and courtesy** (First steps). Good morning, have you eaten?, thank you, sorry and goodbye. Lessons: `greetings`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 𠢕早！ | Gâu-tsá! | Good morning! | The MOE dictionary's greeting: 阿伯𠢕早 (Good morning, uncle). 𠢕 is a rare character; check that it shows on your phone. | word |
| 你食飽未？ | Lí tsia̍h-pá--buē? | Have you eaten? (a friendly hello) | A greeting, not an invitation. Answer 食飽矣 (I have) or just smile and ask back. | moe |
| 多謝你！ | To-siā--lí! | Thank you! | 你 here has the neutral tone (--lí): say it light and low. | moe |
| 歹勢。 | Pháinn-sè. | Sorry. / Excuse me. | For small things: bumping into someone, asking a favor. A real apology is 失禮. | word |
| 再會！ | Tsài-huē! | Goodbye! | Literally "meet again". | word |

**6. People and family** (First steps). Pronouns (我, 你, 伊, 阮, 咱, 恁, 𪜶) and the family words a grandchild needs. Lessons: `si`, `family`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 阿爸 | a-pah | dad | a- is a friendly prefix on family words: 阿母, 阿公, 阿媽, 阿兄. | word |
| 阿母 | a-bú | mom | Not 媽媽: that is Mandarin. | word |
| 阿公 | a-kong | grandpa | Your mother's father can also be 外公. | word |
| 阿媽 | a-má | grandma | Your mother's mother can also be 外媽. | word |
| 咱 | lán | we (you included) | You and me together. 阮 is "we, but not you". | word |

**7. About me** (First steps). Name, surname, being a student, where you live. Lessons: `intro`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 你號做啥物名？ | Lí hō-tsò siánn-mih miâ? | What's your name? | The question word stays where the answer goes: 我號做… | moe |
| 貴姓？ | Kuì-sènn? | What's your surname? (polite) | Answer 我姓林 (my surname is Lîm). | word |
| 我姓林。 | Guá sènn Lîm. | My surname is Lîm. | Surnames are read in their own way: 林 Lîm, 陳 Tân, 王 Ông. | comp |
| 我是學生。 | Guá sī ha̍k-sing. | I'm a student. | 是 joins two nouns. With adjectives there is no 是. | comp |
| 我蹛佇臺北。 | Guá tuà tī Tâi-pak. | I live in Taipei. | 蹛 (live) + 佇 (at) + place. | comp |

**8. In class** (First steps). Asking the teacher to repeat, to slow down, and saying you don't know. Lessons: `classroom`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 請閣講一擺。 | Tshiánn koh kóng tsi̍t pái. | Please say it again. | 閣 = again; 一擺 = one time. 請 is for invitations and polite requests. | comp |
| 慢慢仔講。 | Bān-bān-á kóng. | Speak slowly, please. | 慢慢仔 = slowly. | comp |
| 我毋知。 | Guá m̄ tsai. | I don't know. | 毋 + 知: you don't know (or won't say). 我毋知影 is the same. | comp |
| 老師 | lāu-su | teacher | Students call a teacher 老師, with the surname in front: 林老師. | word |
| 請你多多指教。 | Tshiánn lí to-to tsí-kàu. | Nice to meet you. (please teach me well) | A set phrase when you meet someone. | moe |

**9. Numbers and money** (Everyday words). Counting numbers, the literary numbers for digits, and prices in 箍. Lessons: `numbers`, `prices`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 一 | tsi̍t | one | Counting: tsi̍t. Reading a phone number: it. | word |
| 兩 | nn̄g | two (of something) | Before a classifier, always 兩: 兩本冊. 二 is for 十二, 二十 and digits. | word |
| 十二 | tsa̍p-jī | twelve | Number words join with hyphens in Tâi-lô: tsa̍p-jī. | word |
| 三百箍 | sann-pah khoo | 300 dollars | 箍 is the spoken word for a Taiwan dollar. | moe |
| 偌濟錢？ | Guā-tsē tsînn? | How much is it? | Literally "how much money". | word |

**10. Classifiers** (Everyday words). Number or this / that + classifier + noun: 个, 本, 隻, 碗, 杯, 擺. Lessons: `classifiers`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 一个人 | tsi̍t ê lâng | one person | 个 is the general classifier. | comp |
| 兩本冊 | nn̄g pún tsheh | two books | 本 for books. 冊 is the Taigi word for book. | comp |
| 三碗飯 | sann uánn pn̄g | three bowls of rice | 碗 counts bowlfuls. | moe |
| 一隻狗 | tsi̍t tsiah káu | a dog | 隻 for most animals. | comp |
| 一擺 | tsi̍t pái | once; one time | 擺 counts times: 閣講一擺 (say it once more). | word |

**11. Night market food** (Everyday words). The night market, its stalls and its food. Lessons: `want`, `food`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 夜市 | iā-tshī | night market | 咱來去踅夜市 (let's go and stroll the night market). | word |
| 滷肉飯 | lóo-bah-pn̄g | braised pork rice | In the south this name can mean rice with a slab of braised pork; the minced kind is 肉燥飯. | word |
| 肉圓 | bah-uân | Taiwanese meat dumpling | A night-market classic. | word |
| 頭家 | thâu-ke | boss; owner (of a stall) | What you call the stall owner: 頭家，一碗麵！ | word |
| 好食 | hó-tsia̍h | tasty; delicious | Literally "good to eat". The opposite is 歹食. | word |

**12. At the market** (Everyday words). The traditional market: vegetables, meat, eggs, fish and fruit, and haggling over price. Lessons: `market`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 菜市仔 | tshài-tshī-á | traditional market | The morning market for vegetables, meat and fish. | word |
| 雞卵 | ke-nn̄g | chicken egg | 卵 (egg) sounds just like 兩 (two): nn̄g. | word |
| 魚 | hî | fish | Taipei speakers say hû; the course follows the general accent, hî. | word |
| 水果 | tsuí-kó | fruit |  | word |
| 彼擔賣的水果較俗。 | Hit tànn bē ê tsuí-kó khah sio̍k. | The fruit at that stall is cheaper. | 俗 = cheap. 較 = more: no need for "than" when it is clear. | moe |

**13. Time and days** (Everyday words). Today, tomorrow, yesterday, parts of the day, the week and the clock. Lessons: `time`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 今仔日 | kin-á-ji̍t | today | Time words go before the verb: 今仔日伊閣來矣. | word |
| 明仔載 | bîn-á-tsài | tomorrow |  | word |
| 昨昏 | tsa-hng | yesterday |  | word |
| 早起 | tsá-khí | morning; breakfast | 我無食早起 = I didn't eat breakfast. | word |
| 禮拜日 | lé-pài-ji̍t | Sunday | 禮拜 = week. The days are 禮拜 + a number. | word |

**14. Places and directions** (Out and about). In front, behind, above, below, left, right, and turning. Lessons: `place`, `directions`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 頭前 | thâu-tsîng | in front; ahead | 你行頭前 (you walk in front). | word |
| 後壁 | āu-piah | behind; at the back |  | word |
| 正手 | tsiànn-tshiú | right hand; right | 正爿 = the right side. | word |
| 倒手 | tò-tshiú | left hand; left |  | word |
| 頭前路口斡正爿就到矣。 | Thâu-tsîng lōo-kháu uat tsiànn-pîng tō kàu--ah. | Turn right at the intersection ahead and you're there. | 斡 = turn. 矣 at the end: the change has happened. | moe |

**15. Getting around** (Out and about). MRT, trains, taxis, walking, getting on. Lessons: `go-come`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 捷運 | tsia̍t-ūn | MRT; metro | Taipei and Kaohsiung both have one. | word |
| 火車 | hué-tshia | train | 臺鐵 (the railway) and 高鐵 (high-speed rail). | word |
| 計程車 | kè-thîng-tshia | taxi |  | word |
| 行路 | kiânn-lōo | walk; go on foot |  | word |
| 上車 | tsiūnn-tshia | get on (a bus, train, car) |  | word |

**16. Questions and particles** (Conversation). Question words and the yes/no questions with 無, 未, 敢 and 是毋是. Lessons: `questions`, `u-bo`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 啥物 | siánn-mih | what | Stays where the answer goes: 你欲食啥物？ | word |
| 佗位 | tó-uī | where |  | word |
| 當時 | tang-sî | when |  | word |
| 你欲去無？ | Lí beh khì--bô? | Do you want to go? | A question with 無 at the end, said light: --bô. | moe |
| 這敢是你的？ | Tse kám-sī lí ê? | Is this yours? | 敢 before the verb turns a sentence into a yes/no question. | moe |

**17. Describing and comparing** (Conversation). Very, too, more, most; and actions in progress or done. Lessons: `describing`, `aspect`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 今仔日真熱。 | Kin-á-ji̍t tsin jua̍h. | It's hot today. | No 是 before an adjective: 真 (very) does the job. | moe |
| 伊的糖仔比我較濟。 | I ê thn̂g-á pí guá khah tsē. | He has more candy than me. | A + 比 + B + 較 + adjective. | moe |
| 上好 | siōng hó | best | 上 (most) + adjective. | word |
| 傷鹹 | siunn kiâm | too salty | 傷 = too. | moe |
| 伊咧讀冊。 | I teh tha̍k-tsheh. | He's studying. | 咧 before a verb: the action is going on now. | moe |

**18. Traps for English speakers** (Conversation). No "to be" with adjectives, the four negatives, 會 and 袂, sound-alikes and false friends. Lessons: `can`, `negation`.

| Taigi | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| 𪜶某真媠。 | In bóo tsin suí. | His wife is beautiful. | No 是: 真 + adjective. *𪜶某是媠 is wrong. | moe |
| 毋是 | m̄ sī | isn't; not (to be) | The negative of 是. For having, the negative is 無; for can't, 袂. | word |
| 我無愛。 | Guá bô ài. | I don't want it. | 無愛 = don't want. 毋 would mean "I refuse". | comp |
| 我有去過。 | Guá ū khì--kuè. | I've been there. | 有 + verb + 過 = have ever done it. | moe |
| 卵 | nn̄g | egg | Same sound as 兩 (two): nn̄g. Context decides. | word |

**Localisation** (examples, dialogues, practice). Every item below was run through `respell.js`; every word is in the lexicon.
- **People** (no Latin letters in Taigi strings):
  - teachers by surname: 林老師 *Lîm lāu-su*, 王老師 *Ông lāu-su*, 陳老師 *Tân lāu-su*, 李老師 *Lí lāu-su*;
  - a friend: 阿美仔 *A-bí--á* (the name in an MOE example sentence);
  - family: 阿公, 阿媽, 阿爸, 阿母, 阿兄, 阿姊, 小弟;
  - at the stall: 頭家 *thâu-ke*; an older man: 阿伯 *a-peh*; an older woman: 阿姨 *a-î*.

  The learner speaks as 我. In English prompts the learner may be "Anna" or "Mark", but these names never appear in Taigi strings (their Taigi forms are unverified). No celebrities.
- **Places:** 臺灣 *Tâi-uân*, 臺北 *Tâi-pak*, 臺南 *Tâi-lâm*, 臺中 *Tâi-tiong*. US places stay in the English prompts. **高雄 (Kaohsiung) is not in the lexicon (unverified)**, so it appears in English only until added.
- **Transport:** 捷運 *tsia̍t-ūn*, 火車 *hué-tshia*, 臺鐵 *Tâi-thih*, 高鐵 *Ko-thih*, 計程車 *kè-thîng-tshia*.
- **Food and drink:** 滷肉飯 *lóo-bah-pn̄g* (in the south, 肉燥飯 *bah-sò-pn̄g* is the minced-pork kind: MOE sense note), 肉圓 *bah-uân*, 炒飯 *tshá-pn̄g*, 麵 *mī*, 牛肉 *gû-bah*, 雞卵 *ke-nn̄g*, 魚 *hî*, 水果 *tsuí-kó*, 弓蕉 *king-tsio*, 茶 *tê*, 烏龍茶 *oo-liông-tê*, 水 *tsuí*, 牛奶 *gû-ling*.
- **Money:** 箍 *khoo* (one New Taiwan dollar, in speech). Prices are round numbers of 箍 (三百箍, 一百空一箍 for a joke price) [inference: no price survey was done; writers keep prices plausible and round].
- **Settings:** the night market (夜市), the morning market (菜市仔), a family dinner at home (厝), the MRT, the park (公園), a classroom with 林老師.
- **Greetings in `profile.json`** (`greet`):
  - late night: 早睏 *tsá-khùn*, "Get some sleep (good night)". The MOE sense is "go to bed early"; its use as a good-night wish is [inference], §11;
  - morning: 𠢕早 *gâu-tsá*, "Good morning";
  - afternoon: 你好 *lí hó*, "Hello". Unverified as a native greeting, §2.4;
  - evening: 你食飽未？ *Lí tsia̍h-pá--buē?*, "Have you eaten? (a friendly hello)".

## 10. Typing and script

### 10.1 The script stage (works with ordinary lessons and decks)

Stage 1 is seven lessons and four decks, all ordinary; nothing depends on the Korean letter-drill machine.

| Lesson | Deck | What the learner can do after it |
|---|---|---|
| `initials`, `finals` | Tâi-lô sounds | read any Tâi-lô syllable roughly right; knows the letters that lie (ph / p, tsh / ts, j, oo / o, nn, -h, -p -t -k) |
| `tones` | Seven tones | name the tone of any marked syllable and describe its pitch |
| `sandhi`, `sandhi-2` | Tone sandhi in action | say which tone the first syllable of a two-syllable word takes; knows `--` |
| `greetings` | Greetings and courtesy | greet, thank, apologise, say goodbye, reading the Tâi-lô |
| `characters` | Taigi characters | recognise the Taigi-only characters and avoid the Mandarin false friends |

With no voice, every drill is visual: mark → tone number, tone number → mark, word → sandhi tone of its first syllable. If the letter-drill machine is generalised (request 11), the same decks can gain "tap the tone of this syllable" drills, with no audio needed.

### 10.2 Characters: how many, and how

- **Goal:** recognise about **200 characters** by the end, roughly the distinct characters of the lexicon's core words. Fewer than en-zh's 300, because the Tâi-lô line is the learner's main guide and heritage learners who read Mandarin already know most shapes [inference].
- **Taigi-specific characters expected** (all in the lexicon): 毋 佇 欲 予 媠 囝 睏 啉 厝 遮 遐 个 阮 咱 恁 𪜶 蹛 踅 囥 綴 斡 偌 矣 咧 佮 𠢕 𨑨 迌.
- **Recognition only.** No handwriting, no stroke order.
- **Traditional characters, MOE forms only.** Simplified characters are never targets or accepted answers.

### 10.3 What a typed answer is, and what the matcher must do

**Default: word tiles** (`tilesDefault: true`). `a[0]` is always written with spaces between tiles (§10.4).

**Typing is optional**, in two ways:
- **Tâi-lô on an English keyboard**, the way people type it: tone numbers after each syllable (*tsit8*, *lang5*), or marks if the keyboard has them.
  - `pronAnswers: true` makes `gen.js` add the generated Tâi-lô of every character answer of `fill` and `type` items. `pronAnswersKeepSpaces` keeps the tile spaces, so the MOE word breaks survive.
  - The deck typing quiz accepts the card's pron (`romaAlmost: true`).
- **Characters through a Chinese keyboard** (a Zhuyin or pinyin keyboard set to traditional, or handwriting). Most learners will get Mandarin-oriented candidates, hence the variant folds below [inference].

**How typed Tâi-lô matches** (the `nan` rules; tested prototype in scratch `nanP/match.js`, 46 of 46 cases):
1. Case, spaces, hyphens and `--` do not count; punctuation is stripped (as `pracNorm` already does).
2. Each syllable is compared as **letters + tone number**:
   - a typed digit 1–8 after a syllable is its tone;
   - a mark gives its tone (á 2, à 3, â 5, ā 7, a̍ 8);
   - **a syllable with no mark and no digit is tone 1 if open, tone 4 if it ends in -p -t -k -h**, as Tâi-lô writes them.
3. **POJ spellings are the same answer:**
   - ch / chh = ts / tsh;
   - o͘ = oo;
   - ⁿ = nn;
   - oa / oe = ua / ue;
   - eng / ek = ing / ik.
4. **"Almost":** the letters are right but **no tone information was typed anywhere** (no digit, no mark). Exception: if every syllable of the answer is tone 1 or 4, a toneless answer is simply right (sai = sai).
5. **Wrong:**
   - any tone that differs once the learner typed tones somewhere (a toneless syllable in such an answer counts as tone 1 / 4);
   - a missing or extra letter (*tsia* for *tsia̍h*, *sa* for *sann*, *ho* for *hóo*);
   - half an answer.
6. **Characters:** spaces and punctuation ignored.
   - Folds: 台 = 臺, 裏 = 裡, 個 = 个, 册 = 冊, 着 = 著.
   - Also the MOE's own listed variants: 𣍐 = 袂 (on the MOE 袂 page), and 魯肉飯 = 滷肉飯 (on the 滷肉飯 page, a whole-word fold).
   - **啥** is itself the MOE character (`h98`), so there is nothing to fold. Mandarin 什麼 is not folded to it.
   - **Never folded:** 不 / 毋, 在 / 佇, 要 / 欲, 吃 / 食 (Mandarin words).
7. **A Tâi-lô answer against a character answer** is not the matcher's job: it works through the generated pron in the answer list (`pronAnswers`).

**Test table** (expected results; the prototype gives all of them):

| Typed | Answer | Result | What it shows |
|---|---|---|---|
| `Lí tsia̍h-pá--buē?` | `Lí tsia̍h-pá--buē?` | right | exact copy |
| `li2 tsiah8 pa2 bue7` | `Lí tsia̍h-pá--buē?` | right | tone numbers, no hyphens, no -- |
| `li2 tsiah8-pa2--bue7` | `Lí tsia̍h-pá--buē?` | right | tone numbers with hyphens |
| `lí tsia̍h pá buē` | `Lí tsia̍h-pá--buē?` | right | marks, hyphens left out |
| `li tsiah pa bue` | `Lí tsia̍h-pá--buē?` | almost | no tones at all |
| `li2 tsiah8 pa2 bue3` | `Lí tsia̍h-pá--buē?` | wrong | one wrong tone number |
| `lí tsia̍h pà buē` | `Lí tsia̍h-pá--buē?` | wrong | one wrong mark |
| `lí tsiah pá buē` | `Lí tsia̍h-pá--buē?` | wrong | tones typed, tone-8 mark missing on one syllable: read as tone 4, wrong |
| `li tsia pa bue` | `Lí tsia̍h-pá--buē?` | wrong | final -h left out: a different syllable |
| `lang5` | `lâng` | right | tone number for the circumflex |
| `lang` | `lâng` | almost | toneless |
| `lang7` | `lâng` | wrong | wrong tone |
| `sai` | `sai` | right | tone 1 is unmarked: typed without a mark is exact |
| `sai1` | `sai` | right | tone 1 typed as a number |
| `pih` | `pih` | right | tone 4 is unmarked |
| `pih4` | `pih` | right | tone 4 as a number |
| `pih8` | `pih` | wrong | tone 8 for tone 4 |
| `kau` | `kâu` | almost | toneless monosyllable (could be tone 1 kau: still "almost") |
| `sai hoo pa pih` | `sai hóo pà pih` | almost | toneless string whose answer has some marks |
| `sai hóo pa pih` | `sai hóo pà pih` | wrong | tones typed on one syllable: pa read as tone 1, wrong |
| `tsi̍t` | `tsi̍t` | right | exact |
| `tsit8` | `tsi̍t` | right | tone 8 as a number |
| `chit8` | `tsi̍t` | right | POJ ch for ts |
| `chi̍t` | `tsi̍t` | right | POJ spelling with mark |
| `chhù` | `tshù` | right | POJ chh for tsh |
| `hó͘` | `hóo` | right | POJ o͘ for oo |
| `ho2` | `hóo` | wrong | o for oo is another vowel (好 hó / 虎 hóo) |
| `saⁿ` | `sann` | right | POJ ⁿ for nn |
| `sa` | `sann` | wrong | nasal left out |
| `tsài-hoē` | `tsài-huē` | right | POJ oe for ue |
| `chiàⁿ-peng5` | `tsiànn-pîng` | right | POJ ⁿ and eng with a tone number |
| `tek8-piat8` | `ti̍k-pia̍t` | right | POJ ek with a tone number |
| `ke-nng7` | `ke-nn̄g` | right | syllabic ng with a number |
| `ke nn̄g` | `ke-nn̄g` | right | space for hyphen |
| `To-siā--lí` | `To-siā--lí!` | right | neutral-tone -- kept |
| `to7-sia7-li2` | `To-siā--lí!` | wrong | tone 7 typed on to (tone 1): wrong |
| `TO-SIĀ--LÍ` | `To-siā--lí!` | right | capitals ignored |
| `khòng-kiú-pat-sam` | `Khòng-kiú-pat-sam, ngóo-ngóo-tshit-pat.` | wrong | half an answer is wrong |
| `你食飽未` | `你食飽未？` | right | characters, punctuation left out |
| `我 是 學生` | `我是學生。` | right | spaces between characters ignored |
| `台北` | `臺北` | right | variant 台 = 臺 |
| `一個人` | `一个人` | right | keyboard 個 = MOE 个 |
| `厝裏` | `厝裡` | right | variant 裏 = 裡 |
| `我不是學生` | `我毋是學生` | wrong | Mandarin 不 is never folded to 毋 |
| `我在臺北` | `我佇臺北` | wrong | Mandarin 在 is never folded to 佇 |
| `guá sī ha̍k-sing` | `我是學生` | wrong | Tâi-lô against a character answer: needs the generated pron in the answer list (pronAnswers), not the matcher |

**What the engine has today** (read in `src/app.html`), and what a `nan` version needs:
- **Built for `yue`:**
  - `isYue()`;
  - `YUE_VAR` (variant characters);
  - `yueNorm` (lowercase, spaces removed, variants folded), used in `accSame`;
  - `yueSlip` (Jyutping: letters must match; a missing tone digit counts as a miss; a wrong digit makes it false; true only if at least one digit is missing), used in `pracMatch`'s `accLoose()` block and in the deck-quiz chain (`isYue()?yueSlip(a,x):…`).
  - Also built: `voiceMatch` in `pickVoice`; `tilesDefault`; `pronAnswers` / `pronAnswersKeepSpaces` / `pronAnswersScript` in `gen.js`; `romaAlmost`; `romaDistract` with the `xr` list, which takes "almost" credit away when the typed letters match a distractor (so toneless *kau* is wrong when the item's distractor is *káu*).
- **Needed for `nan`:**
  - `isNan()`, `NAN_VAR`, `nanKey` (§10.3 rules 1–3 and 6) used in `accSame`;
  - `nanSlip` (rule 4) used at the same two places as `yueSlip`, **before** the generic `COURSE.romaAlmost` → `romaLoose` fallback and the `foldAcc` path. Otherwise a wrong mark is folded away and counted "almost".
- **Three differences from `yueSlip`:**
  1. Tone information comes from marks **or** digits.
  2. Unmarked syllables mean tone 1 or 4, so "toneless" is decided for the **whole answer**, not per syllable.
  3. **Syllables are found by the separators** (space, `-`, `--`). The deck quiz first runs the card pron through `normT`, which deletes hyphens (`[;:"“”()\-–—]`). For `nan`, `normT` must turn hyphens into spaces instead, or `nanKey` cannot split *tsia̍h-pá--buē* (request 1).
- `accents: true` is set so that `accLoose()` lets the almost path run. `keys` is empty: tone numbers need no keyboard. A tone key bar like Vietnamese's is optional (request 12).

**`targetScript`:** `[㐀-鿿豈-﫿]` (BMP CJK, Extension A and compatibility ideographs). Strings containing 𪜶, 𠢕 or 𨑨 always also contain BMP characters in practice, so a BMP class is enough, and it compiles with and without `u`. Tâi-lô-only practice items in the sound lessons do not match it; see §7 and request 7.

### 10.4 Tiles: segmentation and spacing

- **The author supplies the tiles, one word per tile, with single spaces.** A word is an MOE headword as it stands in the lexicon:
  - hyphenated words are one tile (今仔日, 讀冊, 食飽);
  - **words the MOE writes apart are separate tiles** (毋 / 是, 彼 / 个, 敢 / 有, 無 / 愛, 一 / 擺).
- Number / classifier / noun are separate (三 / 碗 / 飯); particles are their own tiles (無, 未, 咧, 矣, 啦); 這 and 彼 are their own tiles.
- 2–6 tiles in `or` items; at most 9 words in a `ty` answer.
- Spaced text appears only in practice tiles and `ty` answers. Card targets, example rows, `mc` options and `fill` sentences have no spaces.
- **Until request 3 is built**, every `ty` answer list carries the unspaced twin (`三 碗 飯|三碗飯`).

### 10.5 Punctuation

- Full-width in Taigi strings: 。，？！、：；. Quotation marks 「」.
- No ASCII punctuation inside Taigi; no space before or after punctuation.
- The Tâi-lô line converts punctuation to ASCII (§6.2).

### 10.6 Fonts and line height

- **Characters:** a Taiwan traditional font stack for target text: `"PingFang TC", "Noto Sans TC", "Noto Sans CJK TC", "Source Han Sans TC", "Microsoft JhengHei", sans-serif`, on elements with `lang="nan-Hant-TW"` (or `zh-Hant-TW` if browsers map `nan` badly) [inference].
  - Today the app has a CJK stack only for a Chinese **interface** (`html[lang^=zh]`, simplified fonts first), not for target spans in an English interface (request 8).
  - **The three characters outside the BMP (𪜶 𠢕 𨑨) must be checked** on iOS, Android and Windows. If a platform shows a box, either bundle a subset font or drop those words (they are in the lexicon, not hard-coded in the course logic) (§11).
- **Tâi-lô line:**
  - in a Latin font that places combining marks well, since *a̍*, *m̄* and *n̄* are base letter + combining mark (Noto Sans, or system UI fonts) [inference];
  - line height at least 1.6, so the tone-8 line and the macron do not touch the line above.
- Card characters at least 2× body size; tiles at least 44 px tall.

### 10.7 What the lead needs to build, in priority order (before writers start: 1–6)

Checked against the current `src/app.html`, `tools/target/gen.js`, `validate.js`, `repron.js`, `lib.js` and `tools/audio/voices.json`.

| # | Request | Status today | Why | What the course does if it is NOT built |
|---|---|---|---|---|
| 1 | **Taigi matcher** (`isNan`, `NAN_VAR`, `nanKey` in `accSame`; `nanSlip` in `pracMatch`'s almost block and the deck-quiz chain, before `romaLoose` / `foldAcc`; for `nan`, `normT` turns hyphens into spaces). Spec and 46 test cases in §10.3. | Built for `yue` only (`yueNorm`, `yueSlip`) | Learners type *tsit8*, *lang5*, *chit8* and toneless *lang* | **Worse than strict.** With `romaAlmost: true` and no `nan` branch, `pracMatch` and the deck quiz fall through to `romaLoose`, which strips every tone mark and a word-final *h* after a vowel. So a **wrong tone or a dropped -h counts as "almost"**, tone numbers are wrong, POJ is wrong, and 個 / 台 are wrong. Without request 1, set `romaAlmost: false` and `accents: false` before release, so that typed Tâi-lô must match exactly (tiles by default keep typing rare). |
| 2 | **No-voice handling for `nan`:** `voiceMatch: "^nan(-|_|$)"` is set; change the toast text to "No Taiwanese voice exists yet: read the Tâi-lô under each card." | `voiceMatch` built (`pickVoice`); generic toast | A Mandarin voice must never read Taigi characters | Generic toast; silence (correct, just less helpful) |
| 3 | **Spaces between Chinese characters do not count** for `nan`, and the spaced `a[0]` is shown without spaces as the model answer. | Done inside `yueNorm` for `yue`; `nanKey` (request 1) does it | Tiles need spaced answers; keyboards produce none | Every `ty` answer carries an unspaced twin (§10.4) |
| 4 | **MOE audio** (CC BY-ND 3.0 TW): decide whether the app may bundle and play unmodified MOE clips for card targets and example rows that are exactly an MOE headword or example sentence, credited; check whether re-encoding counts as a derivative; download from 相關資源. Add a `nan` entry to the clip pipeline only for those strings. | No `nan` in `voices.json`; no MOE clips | It is the only native audio available (§2.6) | Text only (designed for it) |
| 5 | **Validator runs `respell` on every card target, example row and dialogue line and compares with the stored pron** (fail on difference; print warnings); **also checks every Tâi-lô quoted in English text** (a `why`, a note) against the generator. `repron.js nan` works (the pattern is BMP-only, safe without `u`). | `validate.js` checks `pronPattern` and same-string consistency only | The generator and its sourced lexicon are the truth; hand-typed Tâi-lô brings memory in | The lead reruns `node tools/target/repron.js nan` after every lexicon change, and reviewers check quoted Tâi-lô by hand |
| 6 | **Writers' word gate:** a report listing every Taigi word in the pack that is missing from `lexicon.txt` (the generator throws on it today). | The throw exists; no summary | Writers must not invent words | Writers run `respell.js` on their strings |
| 7 | **`targetScript` exemption for Tâi-lô `order` items in the five sound lessons** (`initials` … `sandhi-2`): accept joined tiles matching `pronPattern` as Taigi text, as `type` answers already are. | `type` answers: `targetScript` or `pronPattern` (built); `order` tiles: `targetScript` only | Sound-lesson tone hinges in tiles are Tâi-lô (§7) | Sound-lesson `or` hinges use strand (b) with characters; tone hinges are `ty` and `mc` only |
| 8 | **Fonts:** a Taiwan traditional stack and `lang` on target elements (§10.6); verify 𪜶 𠢕 𨑨 on the three platforms; Tâi-lô line height. | Not built (only a simplified stack for a Chinese interface) | Glyph shapes; boxes for characters outside the BMP; clipped tone marks | System fallback; possible boxes for the three characters |
| 9 | **PRACTICE-SPEC exception:** Tâi-lô allowed in sound-stage items and in the one tone `mc` item per set. No code change. | — | §7 | — |
| 10 | **Tâi-lô display setting** "always / tap to reveal / off", default always. | Partly: "Blur pronunciation hints in Browse" (`S.hideRom`) | Readers may want to hide it later | Always shown outside Browse |
| 11 | **Generalise the letter-drill machine** to visual tone drills (mark ↔ number; sandhi tone of the first syllable). | Korean only | More tone practice without audio | Ordinary decks |
| 12 | **Optional tone keys** (as Vietnamese's smart tone keys: a key applies a tone mark to the syllable under the caret, with Tâi-lô placement rules). | Built for `vi` and `zh` only | Some learners prefer marks to digits | Tone numbers (accepted by request 1) |

Checked and **not** needed:
- three-letter codes (`lib.js` `check()` and the app's course-id tests accept `[a-z]{2,3}`; `LANGS` has `nan`);
- `HOLD` keeps the course out of releases;
- `pronAnswers` with spaces kept;
- the hyphen-as-space "almost" path (never reached: `nanKey` ignores hyphens first).

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order.

1. **The lexicon against the MOE's own data.** All 423 readings were copied from MOE pages (and 18 from Wiktionary, Wikipedia and Bite-size Taiwanese) **through a web tool that returns each page as a summary**. Three fetches returned a different page from the one asked for; their rows were used only where the page's own headword or search term matched. A summary can drop or misplace a tone mark.
   - **Before writers start, the lead should diff `lexicon.txt` against the MOE's downloadable data** (相關資源 page, CC BY-ND 3.0 TW).
   - It is one table; a script can compare headword and first reading line by line.
2. **The ten composed sample cards** (`comp` in §9), checked for naturalness and MOE word breaks:
   - 我姓林。
   - 我是學生。
   - 我蹛佇臺北。
   - 請閣講一擺。
   - 慢慢仔講。
   - 我毋知。
   - 一个人
   - 兩本冊
   - 一隻狗
   - 我無愛。

   Also the composed strings in §4, §6.4 and §8: 我是美國人 (generated *Bí-kok lâng*; the MOE may write *Bí-kok-lâng*), 你欲食啥物？, 臺北上熱, 伊真媠, 我袂曉, 坐捷運 *tsē tsia̍t-ūn*, 傷貴 *siunn kuì*, 一碗麵, 直直行 *ti̍t-ti̍t kiânn*, 三十五箍 *sann-tsa̍p-gōo khoo*.
3. **Sandhi details** (§6.5): which tone a checked -h syllable takes (the page read says "tone 2 or 3" without the pairing; the lesson plan assumes 4 → 2, 8 → 3); the sandhi before 仔; where tone groups end inside sentences. **`sandhi-2` must not ship before a teacher checks it.**
4. **Two derived lexicon entries:** 禮拜一 *lé-pài-it*, 禮拜六 *lé-pài-la̍k* (from 禮拜 + the MOE clipped forms 拜一 / 拜六). The other weekdays are not in the lexicon.
5. **Greetings and politeness:**
   - 你好 as a natural Taigi greeting;
   - 早睏 as "good night" (MOE: "go to bed early");
   - 歹勢 against 失禮;
   - 勞力 as everyday thanks;
   - 請 at the start of requests;
   - the `greet` strings.
6. **Readings left out because no opened source had them** (the roadmap or the author's memory had them; they must be added only from the MOE):
   - 聽無 and 按怎講 (`classroom`);
   - 小妹 (`family`);
   - 幾月幾號 (`time`);
   - 先生, 太太, 小姐;
   - 高雄;
   - 銀行 (行 *hâng*);
   - 華語, 英語;
   - 二十 (and 廿 in speech) beyond 廿 / 廿一;
   - weekdays 二 to 五;
   - 蚵仔煎, 擔仔麵, 珍珠奶茶;
   - Taigi forms of English names (Anna, Mark);
   - any literary 人 *jîn* word.
7. **The Taipei forms** named in notes (魚 *hû*, 佇 *tū*) come from the MOE accent tables, which list more accents than a note can. Writers should not add other accent claims.
8. **Sound descriptions** in the sound lessons and the Tâi-lô sounds deck (aspiration by English comparison, j as a voiced "dz", o against oo, -h as a catch) are [inference]. The pitch numbers come from a community wiki ([taioaan.org](https://taioaan.org/wiki/index.php/Tones_of_Taiwanese)), not the MOE.
9. **Phone numbers:**
   - that literary digits are used is from Bite-size Taiwanese (practitioner);
   - writing each group as one hyphenated word follows that site, not the MOE;
   - carrying the literary reading to the other digit groups of the same text is the generator's rule [inference].
10. **過 before an object** (你有去過臺灣無？): the generator writes *khì kuè Tâi-uân--bô*; the MOE form is unverified. Writers put 過 at the end until it is checked.
11. **Fonts** for 𪜶 𠢕 𨑨 on iOS, Android and Windows (request 8).
12. **MOE audio licensing**: whether bundling and re-encoding MOE clips is allowed under BY-ND (request 4).
13. **The Traps list and the false friends** (§4.12): 頭家 also "husband" is from the MOE; the rest is [inference].

**Evidence that could not be opened, or was read only in part**
- **Learners:** no study of English-speaking adults learning Taigi was found.
  - Sun & Huang (2012) studied listeners, not learners; only the abstract was read.
  - Lin (2024) is a 33-person survey presented as conference slides.
  - The Global Taiwan Brief is an opinion piece.
  - No survey of US learners' motives was found.
- **Course syllabi:** the NTU and NTHU syllabi listed in the roadmap were not reopened; the roadmap's account of them is used.
- **Voices:** the absences rest on the roadmap's checks (Azure speech-to-text tables, Gemini-TTS, VoiceOver). Android was not checked.
- **MOE pages:** category indexes (`hunlui`) could be read only on the pages a search returned (page 1, and some later pages at 100 rows). The rest of each category was not reachable, which is why some common words are missing (item 6).
- **Wiktionary 美國** had no Hokkien reading; 美國 *Bí-kok* comes from the MOE headword 美國塗豆 *Bí-kok-thôo-tāu*.

**The roadmap and the brief**
- All 27 roadmap ids are kept; no lessons were added.
- Titles were rewritten in MOE forms, because the roadmap's Tâi-lô was from memory (its own note says so). For example, 咧 *teh* and 矣 *--ah*, not *leh* / *ah*.
- The roadmap's "你好 lí hó" greeting lesson now leads with 𠢕早.
- `profile.json` has the extra fields en-yue has: `tilesDefault`, `pronAnswers`, `pronAnswersScript`, `pronAnswersKeepSpaces`, `romaAlmost`, `voiceMatch`.
- `accents: true` turns on the almost path.

**Engine and pipeline** (for the lead): §10.7, requests 1–12. Before writers start, build:
- 1 (matcher);
- 5 (validator runs the generator);
- 6 (word gate);
- 7 (`targetScript` exemption).

Then do the lexicon diff of item 1.

## Sources

Web pages opened and used (2026-11-19):
- MOE dictionary, 教育部臺灣台語常用詞辭典, editorial pages:
  - [臺羅標注說明](https://sutian.moe.edu.tw/und-hani/piantsip/tailo-phiautsu-suatbing/)
  - [音檔說明](https://sutian.moe.edu.tw/und-hani/piantsip/imtong-suatbing/)
  - [版權聲明](https://sutian.moe.edu.tw/und-hani/piantsip/pankhuan-singbing/)
  - [Introduction](https://sutian.moe.edu.tw/zh-hant/introduction/)
  - [分類索引](https://sutian.moe.edu.tw/und-hani/hunlui/)
  - [附錄](https://sutian.moe.edu.tw/und-hani/huliok/)
- MOE dictionary, category and appendix indexes:
  - [稱謂輩分](https://sutian.moe.edu.tw/zh-hant/hunlui/29/?iahbe=1&pitsoo=100)
  - [飲食物具](https://sutian.moe.edu.tw/und-hani/hunlui/55/)
  - [交際應酬](https://sutian.moe.edu.tw/zh-hant/hunlui/61/?iahbe=1&pitsoo=100)
  - [代名詞](https://sutian.moe.edu.tw/zh-hant/hunlui/98/?iahbe=1&pitsoo=100)
  - [助詞、嘆詞](https://sutian.moe.edu.tw/zh-hant/hunlui/99/)
  - 數詞、量詞, pages [1](https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=1&pitsoo=100), [2](https://sutian.moe.edu.tw/und-hani/hunlui/100/?iahbe=2&pitsoo=100) and [3](https://sutian.moe.edu.tw/zh-hant/hunlui/100/?iahbe=3&pitsoo=100)
  - 副詞, pages [1](https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=1&pitsoo=100) and [4](https://sutian.moe.edu.tw/zh-hant/hunlui/102/?iahbe=4&pitsoo=100)
  - [疑問詞](https://sutian.moe.edu.tw/zh-hant/hunlui/207/)
  - [百家姓 十一畫](https://sutian.moe.edu.tw/zh-hant/huliok/186/?iahbe=2)
  - [character index 臺 tâi](https://sutian.moe.edu.tw/zh-hant/siannuntiau/tiau/5/ai/tai5/%E8%87%BA/)
  - [sound index an, tone 2](https://sutian.moe.edu.tw/und-hani/siannuntiau/un/an/2/)
- MOE dictionary, headword searches (`tshiau`):
  - [是](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E6%98%AF&iahbe=1&pitsoo=50)
  - [毋](https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=%E6%AF%8B&iahbe=1&pitsoo=50)
  - [有](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E6%9C%89&iahbe=1&pitsoo=100)
  - [無](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E7%84%A1)
  - [歹勢](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E6%AD%B9%E5%8B%A2)
  - [早](https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=%E6%97%A9&iahbe=1&pitsoo=50)
  - [台](https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=%E5%8F%B0)
  - [美國塗豆](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E7%BE%8E%E5%9C%8B%E5%A1%97%E8%B1%86)
  - [lâng, page 2](https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=l%C3%A2ng&iahbe=2&pitsoo=50)
  - [禮拜](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E7%A6%AE%E6%8B%9C)
  - [牛](https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=%E7%89%9B&iahbe=1&pitsoo=100)
  - [食, page 5](https://sutian.moe.edu.tw/zh-hant/tshiau/?lui=tai_su&tsha=%E9%A3%9F&iahbe=5)
  - [飽](https://sutian.moe.edu.tw/und-hani/tshiau/?lui=tai_su&tsha=%E9%A3%BD) (seen through a substituted fetch whose page reported the search term 飽)
- MOE dictionary, entries (`https://sutian.moe.edu.tw/zh-hant/su/N/`, some under `/und-hani/`), N = 164, 165, 188, 306, 432, 477, 501, 713, 814, 1006, 1242, 1653, 1679, 1826, 2099, 2117, 2232, 2415, 2517, 2530, 2595, 2699, 2858, 2872, 2953, 3394, 3766, 3767, 3773, 4408, 4690, 4770, 4771, 4968, 5016, 5727, 6537, 6632, 6998, 7397, 7469, 7720, 8082, 8084, 8287, 8414, 8962, 9035, 9290, 9427, 9565, 9598, 9626, 9775, 10139, 10149, 10532, 10581, 10857, 10907, 11204, 11380, 11618, 11988, 12058, 12062, 12482, 13053, 13225, 13473, 13522, 13567, 14370, 20879, 21827, 21867, 21888. For example: [未 1653](https://sutian.moe.edu.tw/zh-hant/su/1653/), [欲 7469](https://sutian.moe.edu.tw/zh-hant/su/7469/), [𪜶 13567](https://sutian.moe.edu.tw/und-hani/su/13567/).
- [MOE, 臺灣台語羅馬字拼音方案使用手冊 (2024)](https://language.moe.gov.tw/files/people_files/tshiutsheh_1130826.pdf)
- [Wikipedia: Taiwan Taigi Recommended Characters](https://en.wikipedia.org/wiki/Taiwan_Taigi_Recommended_Characters)
- [Wikipedia: Tone sandhi (Taiwanese Hokkien section)](https://en.wikipedia.org/wiki/Tone_sandhi)
- [Wiktionary: 獅虎豹鱉猴狗象鹿](https://en.wiktionary.com/wiki/%E7%8D%85%E8%99%8E%E8%B1%B9%E9%B1%89%E7%8C%B4%E7%8B%97%E8%B1%A1%E9%B9%BF)
- [Wiktionary via Wikiwand: 臺語](https://www.wikiwand.com/en/dictionary/%E8%87%BA%E8%AA%9E)
- [Wiktionary: 美國 (no Hokkien reading; not used)](https://en.wiktionary.com/wiki/%E7%BE%8E%E5%9C%8B)
- [taioaan.org: Tones of Taiwanese](https://taioaan.org/wiki/index.php/Tones_of_Taiwanese)
- [Bite-size Taiwanese, ep. 14: What is your phone number?](https://bitesizetaiwanese.com/ep14-what-is-your-phone-number)
- [PTS / PNN (2025-11-11): 「鳳凰風颱」台語按怎讀？](https://news.pts.org.tw/article/780782)
- [Sun, K.-C. & Huang, T. (2012). A cross-linguistic study of Taiwanese tone perception by Taiwanese and English listeners. *Journal of East Asian Linguistics* 21(3) (abstract)](https://link.springer.com/doi/10.1007/s10831-012-9092-9)
- [Lin, E. (2024). Toward a sociolinguistic profile of Taiwanese Americans. EULC5 slides](https://emlinking.github.io/files/eulc_slides.pdf)
- [Cheng, C. (2025). Saving Tâi-gí: Taiwan's largest heritage language. *Global Taiwan Brief* 10(18)](https://globaltaiwan.org/2025/10/saving-tai-gi/)

Local project files read:
- `docs/briefs/target-profile-nan.md` and `docs/briefs/target-profile-yue.md`;
- `docs/roadmaps/nan.json`;
- the model results `docs/profiles/en-yue.md`, `tools/target/yue/profile.json`, `respell.js`, `lexicon.txt` and `REVIEW.md` (head);
- `docs/profiles/en-te.md` §10.8 and §11 (request-table shape);
- `docs/profiles/en-ceb.md` (no-voice passages);
- `tools/target/ceb/profile.json`, `lib.js`, `gen.js`, `validate.js` and `repron.js` (heads);
- `tools/audio/voices.json`;
- in `src/app.html`: `pickVoice`, `speak`, `fwFold`, `normT`, `pracNorm`, `foldAcc`, `accSame`, `isYue` / `YUE_VAR` / `yueNorm` / `yueSlip`, `pracMatch`, `romaDistract`, `kbT`, `accLoose`, the deck-quiz match line, `validCourse`, `LANGS` and the CJK font rule.

The base brief's other reading list (BUILD-PLAN-EN, PRACTICE-SPEC, PHASE2-BRIEF, en-es, TARGET-BRIEF) was not reread for this profile; en-yue, written to it, was used as the template.
