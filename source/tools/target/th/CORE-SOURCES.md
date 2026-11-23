# Core words, Flirting and Compliments for en-th: sources, choices, skips

Writer T, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (ten Core words decks), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments), `lexicon-add-T.txt`, this file and `POS-COVERAGE.md`. In `profile.json`, twelve deck entries were appended and nothing else was changed.

## 1. Two limits that shaped every deck

1. **No frequency ranks could be read, so every deck is ordered by the writer's judgement.** Each deck starts with the words a beginner meets most in everyday spoken Bangkok Thai. Section 2 lists every source that was tried.
2. **The pron tool's word list decided which words could be used.** `respell.js` only reads words in its built-in list (LEX, 714 entries) and throws on anything else. It reads no add-file. The brief's rule therefore applied: a word goes in only if `respell(target)` succeeds, and every other word is left out and listed (section 6).
   - Every pron was produced by `respell.js` inside the build script and pasted unchanged. `repron.js th` rewrote 0 lines on both runs.
   - As a side benefit, every EXAMPLES and DIALOG sentence was also run through `respell.js`. So each sentence uses only words in the course word list (rule 5), and the build failed on any that did not.

The word choice is therefore "the most useful words that LEX contains", not a list taken from a corpus.

## 2. Frequency sources tried (all on 2026-11-23)

| Source | What it is | Result |
|---|---|---|
| [geebee101 "newthai" frequency list v2](https://geebee101.github.io/newthai/freqlist.html) (also its [usage](https://geebee101.github.io/newthai/usage) page) | Thai school textbooks, about 3 million words (Champaiboon 2016, Chulalongkorn), adapted for English-speaking learners. CC BY-SA 4.0. | **Pages opened**, but they describe the list without showing it. The data is in a Google Sheet, which was refused (not on the fetch allowlist). A curl request for the page itself also got a proxy 403. **No ranks used.** |
| [Wiktionary:Frequency lists/Thai](https://www.wiktionary.com/wiki/Wiktionary:Frequency_lists/Thai) (wiktionary.com mirror) | An index of sources: Leipzig Corpora (CC BY 4.0), OpenSubtitles lists, SEAlang | **Opened.** It lists sources only and gives no ranks. en.wiktionary.org's `Wiktionary:Frequency_lists` returned "not found". |
| hermitdave FrequencyWords / Hugging Face mirror `th_50k.txt` | OpenSubtitles 2018 | Not reachable (allowlist), so not opened. Thai is written without spaces, so a list built by splitting subtitles on spaces may hold phrases rather than words; this was not checked. |
| [Thailand Starter Kit "Top 3000"](https://www.thailandstarterkit.com/learn-thai/top-3000-thai-vocabularies/) | A merged learner vocabulary list. No corpus is named and no licence is stated. | Opened. Not a frequency source, so **not used**. |
| Brainscape "Thai-Language.com top words" | A flashcard deck | Opened. It is in alphabetical order, so **not used**. |
| expatden.com Thai frequency list | unknown | Client error; nothing was retrieved. |

**What is ordered by judgement: everything.** No card in any deck has a source rank. Within each deck the order runs from the commonest to the rarest in the writer's judgement. These parts follow a fixed order instead:
- numbers run in counting order;
- days run in calendar order;
- the times of day run morning → night;
- in Flirting and Compliments, cards are grouped by layer and topic, not by frequency.

**Suggestion for the lead:** once a ranked list can be downloaded (the newthai sheet is CC BY-SA and built for learners, so it probably fits best), re-sort inside each deck. Only the order should move.

Every meaning, note, example and dialogue was written by the writer.

## 3. Class slots: kept, renamed, added, dropped

- **Top adjectives: kept.** Thai describing words are verbs (they take ไม่ and time words directly, and never take เป็น), but they form a clear class, so the deck stays. The profile `desc` and the note on เป็น say "no เป็น". Colors are here as bare words.
- **Top prepositions: kept.** Thai does have prepositions (ที่, ใน, บน, กับ, จาก, ถึง). The ข้าง… place words are in this deck too.
- **Top words** also holds the time words จะ, กำลัง and เคย, which the course glossary calls "time words", not tenses or adverbs. แล้ว, ยัง and เพิ่ง are in Top adverbs.
- **Added: Top classifiers** (rule 2: Thai needs a measure-word deck), with only the classifiers that are not yet cards.
- **Added: Top particles.** These are the sentence-final particles, which have no English class and are among the commonest words in speech.
- **Dropped: Top interjections.** Of the real Thai interjections (อุ๊ย, ว้าว, โอ๊ย, เย้, อ้าว, เอ๊ะ, โห, แหม, อืม, เฮ้ย, ตายแล้ว, เหรอ), **none** is in LEX, so the deck could not reach the validator's 12 cards. Filling it with phrases that are not interjections was rejected. Its planned cards are in section 7 and their readings are in `lexicon-add-T.txt`.

## 4. Where words with two homes went

- **Classifiers that are also nouns** (คน, จาน, ชาม, ขวด, แก้ว, ห้อง, ถ้วย, กล่อง) are in Top classifiers, with the noun meaning in the note. They are not in Top nouns.
- **หลัง** is in Top classifiers (houses), with "back, after" in the note. หลังจาก is in Top conjunctions.
- **ที่** is in Top prepositions (at), with "that, which" in the note. ที่หนึ่ง is in Top words.
- **ของ** is in Top prepositions (of). ของฉัน / ของผม / ของคุณ / ของเขา / ของเรา are in Top pronouns.
- **ให้** is in Top verbs (give), with "for" in the note. **ถึง** is in Top prepositions (to, until), with "arrive" in its example.
- **หรือ** is in Top conjunctions (or). หรือเปล่า and หรือยัง are in Top particles. **เปล่า** is in Top words (no).
- **ด้วย** and **หน่อย** are in Top particles. **ก่อน** is in Top adverbs. **เย็น** is in Top adjectives (cool), with "evening" in the note. ตอนเย็น is in Top words.
- **Flirting words** (หล่อ, น่ารัก, ใจดี, โสด, รัก, คิดถึง, สบายใจ, ปากหวาน) are only in Flirting, not in Top adjectives or Top verbs. เก่ง and หวาน are in Top adjectives.
- **นะครับ / นะคะ** were not made cards: they are only นะ + a polite particle. The นะ note gives both.
- **มัน (it)** is a card in Top pronouns, which goes beyond profile §2.3: the profile says มัน appears "only in a Traps card note". It is kept because the brief asks for the whole pronoun set, and its note says it is rude for people. **The lead should decide:** if the profile wins, delete that one line from `decks-t.js` and its EXAMPLES row from `extra-t.js`.

## 5. Words skipped because the course already teaches them

These were compared with every card target in `decks-a.js` and `decks-b.js`, ignoring punctuation and spaces.

| Deck | Skipped (already a card) | Where it is taught |
|---|---|---|
| Top nouns | แม่, เด็ก, มือ, ตา (eye), ใจ, เรือ, โต๊ะ | Vowels and tone marks |
| Top nouns | ข้าว, ไม้, ม้า, หมา, ป่า | Tones and vowel length |
| Top nouns | พ่อ, ลูก, เพื่อน, แฟน, ครอบครัว, สามี, ภรรยา, พี่สาว, พี่ชาย, น้องชาย, น้องสาว, ลุง | People and family |
| Top nouns | ตลาด, ซอย, วัด, โรงแรม, ไฟแดง, หัวมุม | Directions and places |
| Top nouns | รถไฟฟ้า, แท็กซี่, ตุ๊กตุ๊ก, รถเมล์, มอเตอร์ไซค์ | Getting around |
| Top nouns | ฝรั่ง, แอร์ | Traps for English speakers |
| Top verbs | ไป, ทำ, ได้, ขอ, เรียน | Vowels and tone marks |
| Top verbs | มา, ดู, ดุ, เข้า, หา | Tones and vowel length |
| Top verbs | ไหว้ | Greetings and politeness |
| Top adjectives | ดี | Vowels and tone marks |
| Top adjectives | สวย, ใหม่, ใกล้, ไกล, ขาว, ซวย | Tones and vowel length |
| Top adjectives | เหนื่อย, ดีใจ, เครียด, เบื่อ, เสียใจ, ไม่สบาย, ง่วงนอน (so ง่วง was left out as well) | Health and feelings |
| Top adjectives | ร้อน, เผ็ด, ฟิต, โอเวอร์, เกรงใจ | Traps for English speakers |
| Top adverbs | เหมือนกัน | Describing things |
| Top adverbs | วันนี้, พรุ่งนี้, เมื่อวาน, ทุกวัน | Time and days |
| Top pronouns | ผม, ฉัน, ดิฉัน, คุณ, พี่, พวกเขา | People and family |
| Top pronouns | เขา | Tones and vowel length |
| Top pronouns | เธอ, เรา | Vowels and tone marks |
| Top prepositions | none | |
| Top conjunctions | none | |
| Top words | ศูนย์, หนึ่ง, สอง, สาม, สี่, ห้า, เก้า, สิบ, สิบเอ็ด, ยี่สิบ | Numbers and money |
| Top words | วันจันทร์, วันเสาร์, เที่ยง, เที่ยงคืน | Time and days |
| Top words | ไม่, ไหม | Vowels and tone marks; Tones and vowel length |
| Top words | อันนี้, อันนั้น | Counting with classifiers |
| Top classifiers | ตัว | Vowels and tone marks |
| Top particles | ครับ, ค่ะ | Greetings and politeness |
| Top particles | จ๋า | Vowels and tone marks |
| Flirting | สวย (word layer), สวยมาก, น่ารักมาก | Tones and vowel length; Describing things |
| Compliments | อร่อยมาก, อาหารอร่อย | Food and drink; Traps for English speakers |

**Totals skipped as already taught:**
- Top nouns 37
- Top verbs 11
- Top adjectives 19 (ง่วง not counted)
- Top adverbs 5
- Top pronouns 9
- Top words 18
- Top classifiers 1
- Top particles 3
- Flirting 3
- Compliments 2

That is **108** in all.

**The pronoun system.** The core pronouns the brief asks for (ผม, ฉัน, คุณ, พี่, เรา, เขา) are already cards in People and family and the script decks, so they could not be repeated. Top pronouns completes the system around them:
- น้อง (to someone younger; also "I" to someone older);
- หนู (a young woman or child to an elder);
- ป้า (to an older woman);
- พวกเรา, พวกคุณ;
- มัน (rude for people);
- the possessives, with the male and female forms (ของผม / ของฉัน);
- นี่ / นั่น / โน่น, ใคร, อะไร, เอง, กัน, ทุกคน, บางคน, ใครก็ได้, อะไรก็ได้.

The notes say who says each one to whom.

## 6. Words left out because the pron tool cannot read them

None of these are in LEX. Their proposed readings are in `lexicon-add-T.txt` (all `unverified:model`). The romanization `syllable()` gives for each is shown in brackets.

| Would go in | Words |
|---|---|
| Top interjections (whole deck) | อุ๊ย (úi), ว้าว (wáao), เย้ (yée), อ้าว (âao), เอ๊ะ (é), โห (hǒo), โอ้โห (ôo-hǒo), แหม (mǎae), อืม (uuem), เฮ้ย (hóoei), ตายแล้ว (dtaai-láaeo), ระวัง (rá-wang), เหรอ (rǒoe), เยี่ยม (yîiam), ไชโย (chai-yoo); **โอ๊ย** (ouch): `syllable()` gives «yóo» instead of óoi. This looks like a respell.js bug with อ + โ-ย, so the word is not in the add-file. |
| Flirting, word layer | ยิ้ม smile (yím), เสียง voice (sǐiang), ตลก funny (dtà-lòk), ฉลาด clever (chà-làat), เสน่ห์ charm (sà-nèe), เท่ cool (thêe), หัวเราะ laugh (hǔua-ráw), สเปค "my type" (sà-bpèk). ผม (hair) is the same string as the existing card ผม (I), so it cannot be a second card. |
| Flirting phrases | คุยกับคุณแล้วสนุก (คุย), หล่อจัง / น่ารักจัง (จัง), ยิ้มสวย (ยิ้ม), ขอโทษนะ ไม่สะดวกจริงๆ (สะดวก), เป็นสเปคเลย (สเปค) |
| Compliments (plan Deck 1) | อร่อยจัง, ฝีมือดีมาก, เยี่ยมเลย, ไอเดียดีมาก, ขยันมาก, คุณตลกมาก, ฉลาดมาก, พูดชัดมาก, ขอบคุณที่ชมนะ, ชมเกินไปแล้ว. Where a LEX-only version keeps the same meaning, it was used instead: อร่อยทุกอย่าง, ยังต้องเรียนอีกเยอะ (for …ฝึก…), ลูกน่ารักมาก (for …จัง). |
| Top nouns | ความ, เสียง |
| Top adjectives | แก่ (old, of people), เท่ |
| Top adverbs | เดี๋ยว, ค่อย / ไม่ค่อย, ทีหลัง, ประมาณ, เกือบ, ตลอด, ทันที |
| Top pronouns | อื่น (คนอื่น, อย่างอื่น) |
| Top prepositions | ตั้งแต่, สำหรับ, เกี่ยวกับ, โดย |
| Top conjunctions | เมื่อ, ดังนั้น, ถึงแม้ว่า |
| Top particles | เหรอ, มั้ย, แหละ, ซิ |

## 7. Planned Top interjections deck (pending the lexicon)

Once the lead adds the readings in `lexicon-add-T.txt` to LEX (and fixes โอ๊ย), this deck can go in as written. Every card would need a DIALOG row.

| Thai | Meaning | Note |
|---|---|---|
| อุ๊ย | oops; oh! | Small surprise or slip; very common, especially from women. |
| โอ๊ย | ouch; ugh | Pain or exasperation. |
| ว้าว | wow | From English; young and casual. |
| โอ้โห | wow (impressed) | The everyday Thai "wow". |
| เย้ | yay | Joy, kids and friends. |
| อ้าว | huh? oh! (it's not as expected) | Mild surprise: อ้าว ปิดแล้ว. |
| เอ๊ะ | hm? wait… | Puzzled. |
| แหม | oh, come on (teasing) | Playful: แหม ปากหวาน. |
| อืม | mm-hm; hmm | Thinking or agreeing. |
| เฮ้ย | hey! whoa! | Casual, among friends only. |
| ตายแล้ว | oh my god (literally "dead already") | Shock; not rude. |
| จริงเหรอ | really? | The spoken form of จริงหรือ. |
| ระวัง | look out! careful! | Warning. |
| เยี่ยม | excellent! | Praise. |
| ไชโย | hooray | Cheering, a bit old-fashioned. |

## 8. Flirting and Compliments: what changed from `docs/plans/compliments-th.md`

- **Flirting** starts from plan Deck 2.
  - Kept (with proof they respell): วันนี้สวยมากเลย, วันนี้หล่อมากเลย, ใส่สีนี้แล้วดูดีมาก, อยู่กับคุณแล้วมีความสุข → อยู่กับคุณแล้วสบายใจ (ความสุข is not in LEX), เจอกันอีกได้ไหม, ไปกินกาแฟกันไหม, ขอไลน์หน่อยได้ไหม, เสาร์นี้ว่างไหม → วันเสาร์นี้ว่างไหม (bare เสาร์ is not in LEX), คิดถึงนะ, ชอบคุณนะ (now male and female cards), พูดแบบนี้… → พูดอย่างนี้… (แบบ is not in LEX), ได้สิ ไปกัน, both "I'm seeing someone" cards, ขอบคุณนะ แต่ไม่ดีกว่า.
  - Added: the word layer; ตาสวยมากเลย; น่ารัก… phrases; ผมรักคุณ / ฉันรักคุณ; โสด and มีแฟนหรือยัง (real Thai small talk); evening invitations; caring goodbyes (ฝันดีนะ, ถึงบ้านแล้วบอกด้วยนะ); ขอโทษนะ ไม่ว่างจริงๆ (in place of ไม่สะดวก) and เป็นเพื่อนกันดีกว่า as kind, clear noes.
  - **Indirectness:** Thai flirting is light and teasing. Replies such as ปากหวาน and พูดอย่างนี้กับทุกคนหรือเปล่า are what people really say, and the notes mark them as playful, not a no. A soft "not free" repeated is understood as a no; the note says so.
  - Male and female speaker forms: ผม/ฉัน cards come in pairs, with "(male speaker)" or "(female speaker)" in the meaning. Plain cards say "to a man / to a woman" and give the other form.
- **Compliments** starts from plan Deck 1. It has 29 cards: 14 kept or adapted from the plan, the rest added (work, effort, home, children, singing, dancing, handwriting). The modest Thai answers (ไม่หรอก, ยังไม่เก่งหรอก, ยังต้องเรียนอีกเยอะ, พูดได้นิดหน่อยเอง) and the accepting ones (ขอบคุณนะ, คุณก็เหมือนกัน) close the deck. Plain cards: the learner adds ครับ or ค่ะ, as the plan proposed.
