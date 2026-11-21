# English speakers learning Thai: course profile

Course `en-th`: Thai for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Thai script. Machine-readable twin: `tools/target/th/profile.json`, written from the same data as §8 and §9. Pronunciation generator: `tools/target/th/respell.js` (§6). The course folder keeps its `HOLD` file until the lead releases it.

(`docs/profiles/th.md` and `docs/profiles/th.profile.json` belong to the reverse course, English for Thai speakers. This profile does not use or change them.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile, named. **(perception, naive listeners)** says what the study measured. **(cited in X)** means the study was seen only in another paper's description.
- **[curriculum convention]**: what syllabuses, textbooks, standards and courses do.
- **[practitioner opinion]**: a school's, publisher's, blog's or teacher's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Thai**. Every such claim that writers will copy into the course is in the native-check list (§11).

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Which Thai?** Standard Central Thai as spoken in Bangkok, `th-TH` voice, Thai script on every card with a tone-marked romanization under it (§2.1).
- **Speaker's gender:** both sets taught (ครับ; ค่ะ / คะ; ผม; ฉัน / ดิฉัน); prompts say "(male speaker)" or "(female speaker)", answers accept the cued set with and without the particle; คุณ is the default "you", พี่ / น้อง as kinship "you" (§2.2–2.3).
- **Biggest traps (§4):** tones (mid vs low is the hardest pair, Wayland & Li 2008) and vowel length; plain ป ต ก heard as b d g and aspirated in speech (Pater 2003); เป็น before describing words; describers, owners, นี้ and classifiers after the noun; English question order; ใช่ for every "yes"; ค่ะ in questions.
- **Standing rule (§7):** two strands: **(a) tone and vowel length** (twins as distractors; romanization items in the sound stage; one tone `mc` per set) and **(b) Thai order around the noun** (describer, owner, นี้ and number + classifier after the noun). Keywords tested on 40 sample lines.
- **Pronunciation aid (§6):** a learner romanization in the ThaiPod101 family (*bp dt g j* / *ph th kh ch*, doubled long vowels, *ue oe ae aw*, tone diacritics, hyphens between syllables), **generated** by `respell.js` from a ~710-word list of Thai readings plus the full tone rules; it throws on unknown words and on tied word breaks. Checked against 75 romanized words in the sources (all agree after 4 length fixes).
- **Lessons and decks (§8, §9):** 26 lessons: all 24 roadmap items, the six reading lessons spread between speaking lessons, `classifiers` moved up to lesson 10, plus `this-that` and `requests`. 18 decks in 5 groups, four of them script decks that work as ordinary decks, and "Traps for English speakers".
- **Typing (§10):** word tiles by default; typing optional, in Thai (Thai keyboard) or in romanization (`pronAnswers` on, author's spaces kept, marks optional as "almost" via `romaAlmost`; tone items `'!strict'`); accent bar = the 20 tone vowels. 13 engine requests, the first four: spaces in Thai answers, pron under tiles, Thai fonts and line height, the validator running the generator.
- **Biggest gaps (§11):** no production data for English speakers of Thai; the word list's readings (above all hidden vowel length) and the politeness rules need a native check.

## 2. Variant, register and voice

### 2.1 Variant: Standard Central Thai (Bangkok)

- The roadmap names "Central (Bangkok) Thai"; the build plan keeps it. This is the standard written and broadcast language, the language of schools and of every beginner course looked at [curriculum convention].
- **Voice:** `ttsLang: "th-TH"`.
- **Say it plainly to users** (course blurb and lesson 1): "This course teaches standard Thai as spoken in Bangkok and understood everywhere in Thailand. The north, the northeast (Isan) and the south have their own dialects; you will hear them, and everyone there also understands standard Thai."
- **Spoken features heard but not taught as targets** [practitioner opinion, Duke Language School 2026]: ร said like ล in casual speech (รัก heard as *lák*), the r dropped in clusters (ครับ heard as *kháp*, พร้อม as *phɔ́ɔm*). The course writes and romanizes the careful form; one card note in Greetings and politeness and one tip in `sounds` say what learners will hear.
- **Colloquial tone shifts** [inference]: ไหม, ฉัน, เขา are spelled with a rising tone and are often said with a high tone in speech (*mái*, *chán*, *kháo*). The romanization follows the spelling (*mǎi*, *chǎn*, *khǎo*, as Duke Language School writes *mǎi*); a card note on each says what is heard. Reason: the generator and the script lessons agree, and the learner meets the spelled tone in every dictionary.

### 2.2 The speaker's gender: ครับ / ค่ะ / คะ, ผม / ฉัน / ดิฉัน

Thai marks the speaker's gender in the polite particle and in "I". [practitioner opinion, Sublearn; ThaiPod101; Listen & Learn]: male speakers end statements and questions with ครับ (*khráp*); female speakers end statements with ค่ะ (*khâ*, falling) and questions with คะ (*khá*, high). Sublearn's FAQ says a non-binary speaker can "choose the one that feels most comfortable".

**Decision: teach both sets, cue the gender in prompts, accept what the cue allows.**
- **Lessons** present both sets side by side from `greetings` on, and say once: "Pick the set that matches how you want to be heard. Thai has no neutral polite particle; leaving it off sounds casual." [inference]
- **"I":** ผม (*phǒm*) for male speakers; ฉัน (*chǎn*) for female speakers in everyday speech; ดิฉัน (*dì-chǎn*) as the formal female form (taught, accepted in answers, used in formal dialogues only). Thai often drops "I" and "you" altogether; answers without the pronoun are always accepted when natural (§4.13).
- **Prompts:** any `or` or `ty` prompt whose answer contains a particle or a gendered "I" carries a cue: "(male speaker)" or "(female speaker)". Writers alternate the cue across a set (about half each). A prompt with no cue must have an answer with neither particle nor gendered pronoun.
- **Accepted answers:** list the cued form with the particle **and** without it (`ขอบคุณครับ|ขอบคุณ`), and with and without the pronoun where natural. Never list the other gender's particle for a cued prompt.
- **`a[0]` follows the cue** (tiles are built from `a[0]`).
- **Distractors:** the other gender's particle may be a distractor only when the prompt is cued (it is then wrong). For a female question, ค่ะ is a good distractor for คะ (statement vs question).
- **Deck cards:** gendered phrases appear as two cards when both are taught (ขอบคุณครับ "thank you (male speaker)", ขอบคุณค่ะ "thank you (female speaker)"), because deck meanings must differ. Where one card is enough, the card is the plain form (ขอบคุณ) and the note says "add ครับ or ค่ะ".
- **Dialogues:** every dialogue has fixed speakers; the English gloss names them when it matters ("Man: … / Woman: …"). Mix male and female speakers across the course.

**What the lead must decide** (request 10, §10.8): a learner setting "My polite words: ครับ (male) / ค่ะ (female) / show both" stored per learner, which (a) picks the model answer shown after a cued item, (b) could later filter cards. Until it exists, cues in prompts carry the whole load and both card versions stay in the decks.

### 2.3 "You", "he", "she": คุณ and kinship terms

- **คุณ** (*khun*) is the default polite "you" in prompts and dialogues between adults who are not close, and the title before a first name (คุณสมชาย). The pron line writes *khun*, which matches the familiar English spelling "Khun".
- **Kinship terms as "you" and "I"** [inference; standard teaching point]: พี่ (*phîi*, older sibling) for someone a bit older, น้อง (*náawng*, younger sibling) for someone younger, including staff who look younger (calling a server: น้องครับ / น้องคะ). A speaker can also call themself พี่ or น้อง. Taught in `pronouns`, recognition in `family`; used in dialogues among friends and in restaurants. ลุง (uncle) and ป้า (aunt) for older vendors are recognition only (card notes).
- **He / she:** เขา (*khǎo*) for both, the default. เธอ (*thooe*) "she" or casual "you" is recognition only. มัน ("it", rude for people) appears only in a Traps card note. Very informal and rude pronouns (กู, มึง) are never taught.
- **Writer rule:** a prompt with "you" says who is addressed when it matters: "(to an older colleague)" → พี่ or คุณ; "(to a server)" → น้อง or nothing. Without a cue, accept คุณ and the dropped pronoun.

### 2.4 Politeness basics an A1 learner needs

| Thai | Pron (generated) | Use | Lesson |
|---|---|---|---|
| สวัสดีครับ / สวัสดีค่ะ | sà-wàt-dii khráp / sà-wàt-dii khâ | hello and goodbye, any time of day | `greetings` |
| ขอบคุณครับ / ขอบคุณค่ะ | khàawp-khun khráp / khàawp-khun khâ | thank you | `greetings` |
| ขอโทษครับ / ขอโทษค่ะ | khǎaw-thôot khráp / khǎaw-thôot khâ | sorry; excuse me (to get attention) | `greetings` |
| ไม่เป็นไร | mâi-bpen-rai | it's OK, never mind, you're welcome | `greetings` |
| ยินดีที่ได้รู้จัก | yin-dii thîi dâai rúu-jàk | nice to meet you | `greetings` |
| สบายดีไหม | sà-baai dii mǎi | how are you (a real question, not "hi") | `greetings` |
| ครับ / ค่ะ | khráp / khâ | yes (polite agreement) | `greetings`, `mai` |
| ขอ … หน่อย | khǎaw … nàwi | could I have …, please | `requests` |
| ช่วย … หน่อยได้ไหม | chûuai … nàwi dâai mǎi | could you …, please | `requests` |

Card notes and the `greetings` body add: the **wai** (ไหว้, palms together) answers a wai from an adult; nobody expects a foreigner to start one with service staff [inference]; ไม่เป็นไร is also the usual answer to ขอบคุณ, so English "you're welcome" has no single Thai match [inference]; ลาก่อน ("farewell") is bookish, and people say สวัสดี or ไปก่อนนะ when leaving [inference].

### 2.5 Voice of the English text

- Plain, friendly US English, US spelling ("romanization", "color"). A `why` is one sentence.
- Thai inside English text: in lesson bodies, `<b>` around the Thai, then the romanization in `<i>` at first mention in that lesson: `<b>ไม่</b> <i>mâi</i>`. In plain-text fields (`why`, `hint`, notes) write the Thai bare; add the romanization in brackets when the point is the sound ("ใกล้ (glâi, falling tone) is near").
- Tones are named by their English names: mid, low, falling, high, rising (§3). Never "tone 1".
- Never add English endings to Thai words ("two classifiers", not "two ตัวs").
- Sample voice lines: "ไกล (glai) with a mid tone is far; ใกล้ (glâi) with a falling tone is near." · "The classifier comes after the number: หนังสือสองเล่ม, two books." · "Nice work! Review these cards tomorrow so they stick."

### 2.6 Thai text conventions (every file)

- Thai script only in Thai fields; no romanization, no Latin letters (write เซเว่น, not 7-Eleven), no Thai digits (๑๒๓); prices and times may use Arabic digits (50 บาท), which the generator reads (§6).
- **No spaces between words** in card targets, example rows, dialogues, `mc` options and `fill` sentences. A space only where Thai puts one: between phrases or sentences (สวัสดีครับ ยินดีที่ได้รู้จัก). ๆ is attached to its word with no space (เด็กๆ), §10.6.
- **Spaced text only in practice tiles and `ty` answers** (§10.4), with the word breaks of the generator's word list.
- **No ASCII punctuation in Thai strings** except a final `?` is tolerated and ignored by the generator; Thai marks questions with particles. ๆ (repeat) is allowed; ฯ only in กรุงเทพฯ.
- **No zero-width spaces** (U+200B), which pasted Thai often contains: the validator fails on them.
- Unicode order: consonant, then a below or above vowel, then the tone mark, then a following vowel (ที่, น้ำ = น + ้ + ำ). Type, do not paste from PDFs (§10.6).

## 3. Glossary

[curriculum convention]: the terms used in English-language Thai courses and the script guides opened here (Veradej's script guidebook, ThaiPod101, Duke Language School, Sublearn). Use each term exactly and always the same way.

| Term to use | Do not use | Note |
|---|---|---|
| Thai script; letter; consonant; vowel | alphabet (except once: "the Thai alphabet has 44 consonants") | |
| romanization | transliteration, phonetics, pron | The pron line. "romanization" in English text, US spelling. |
| tone; tone name: mid, low, falling, high, rising | tone 1–5, level tone | **standing-rule keywords** "mid tone", "low tone", "falling tone", "high tone", "rising tone" |
| tone mark | accent, diacritic | The four Thai marks; names once as glosses: ไม้เอก (mai ek), ไม้โท (mai tho), ไม้ตรี (mai tri), ไม้จัตวา (mai chattawa). **keyword** |
| tone rule | | "the tone rules" = class + live/dead + length + mark. **keyword** "tone rule(s)" |
| consonant class: mid-class, high-class, low-class consonant | middle consonant, aksorn klang (except once as a gloss) | Hyphenated adjective form: "a high-class consonant". |
| live syllable; dead syllable | open/closed (for this) | live = ends in a long vowel or m, n, ng, w, y; dead = ends in a short vowel or k, t, p. |
| long vowel; short vowel; vowel length | | **keywords** |
| aspirated (with a puff of air); unaspirated (no puff) | hard / soft | |
| final consonant; final sound | coda, ending | "Only eight final sounds: k, t, p, m, n, ng, w, y." |
| leading consonant (leading ห, leading อ) | ho nam, silent h | ห before a low-class letter makes it high-class: หมา. |
| consonant cluster | blend | กร, กล, คร, ปล, พร… |
| hidden vowel | inherent vowel, implicit vowel | the *a* or *o* that is said but not written (สบาย, คน). |
| silence mark (ตัวการันต์ ์) | thanthakhat, karan (except once as a gloss) | |
| repeat mark ๆ | mai yamok (once, as a gloss) | |
| classifier | counter, measure word | "classifier" always. **keyword** |
| describer (adjective) after the noun | modifier, attributive | **keyword** "after the noun" |
| polite particle | ending, honorific | ครับ, ค่ะ, คะ. |
| question particle | | ไหม, หรือ, หรือเปล่า, หรือยัง. |
| question word | wh-word, interrogative | อะไร, ใคร, ที่ไหน, เมื่อไร, เท่าไร, ทำไม, อย่างไร. |
| time word | tense, past tense, aspect | แล้ว, กำลัง, จะ, เคย: "Thai verbs never change; time words do the work." |
| describing verb | stative verb, adjective (alone) | "Thai describing words work like verbs: no เป็น". |
| kinship term | honorific | พี่, น้อง, ลุง, ป้า as "you" and "I". |
| false friend; word-for-word copy | false cognate, calque (except once) | |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]: items with learner data opened for this profile first; then items that occur in nearly every sentence and can be checked in tiled or typed practice; then lesson-local and vocabulary traps.

**What the evidence is.** The three studies opened are all **perception** studies (listening, mostly naive listeners). No study of English speakers' Thai **production** errors, and no learner corpus, was found. Everything about grammar errors is [practitioner opinion] from commercial course blogs plus [inference]. §11 says this again.

1. **Tones**
   - Wrong → right:
     - ใกล้ (*glâi*, near) said as ไกล (*glai*, far): ร้านอยู่ไกล heard for ร้านอยู่ใกล้
     - ข้าว (*khâao*, rice) / ขาว (*khǎao*, white) / เขา (*khǎo*, he, she) said alike
     - ไม่ (*mâi*, not) / ไม้ (*mái*, wood) / ใหม่ (*mài*, new) / ไหม (*mǎi*, question) said alike (Listen & Learn, mistake 6)
     - สวย (*sǔuai*, pretty) said with a mid tone, which is ซวย (*suuai*, unlucky) [inference; a classic teaching example]
     - an English question rise laid over the last syllable (ไปไหมคะ said with English intonation) → keep each tone; the particle asks [practitioner opinion, Clozemaster]
   - [research-backed, perception, naive listeners] Wayland & Li (2008), *Journal of Phonetics* 36: naive American English listeners discriminated Thai **mid vs low** at 58–61% before training, the lowest scores in the study; the paper reports that Burnham & Francis (1997) found mid–low the second hardest pair for naive Australian English listeners and that Wayland & Guion (2003) found experienced American learners better at mid–low than naive ones (both cited in Wayland & Li).
   - [research-backed, perception, naive listeners] Kaan, Wayland, Bao & Barkley (2007), *Brain Research* 1148: 10 American English speakers showed a clear brain response to the low tone against the mid tone, but little or none to the **high** tone before two days of training; after training it grew. Behavioral identification of the trained low tone was near ceiling.
   - Design consequence: strand (a) of the standing rule (§7); the Tones and vowel length deck; the pron line with tone marks on every card and example row; one tone `mc` item in every set.

2. **Vowel length**
   - Wrong → right: ดู (*duu*, look) said short = ดุ (*dù*, scold) (ThaiPod101, mistake 2); ขาด (*khàat*, torn) / ขัด (*khàt*, scrub) and ราก (*râak*, root) / รัก (*rák*, love) (Duke Language School); เข้า (*khâo*, enter) / ข้าว (*khâao*, rice); น้ำ said short (it is *náam*).
   - [practitioner opinion] ThaiPod101 and Duke list length as a meaning-changing error. No study of English speakers' Thai length errors was opened.
   - Design consequence: long vowels are doubled in the pron line (§6); length twins count as strand (a) hinges (§7).

3. **Aspiration and the plain stops ป ต ก จ**
   - Wrong → right: ไป (*bpai*, go) said with an English puff = พาย-like *phai*; ไก่ (*gài*, chicken) / ไข่ (*khài*, egg); ปา (*bpaa*, throw) / พา (*phaa*, take along) (Listen & Learn, Duke); ตา (*dtaa*) / ทา (*thaa*); ph read as f (ภูเก็ต *phuu-gèt*, not "fuket"), th read as in "think" (ทหาร).
   - [research-backed, perception] Pater (2003), *Second Language Research* 19(3): English listeners discriminated Thai aspiration contrasts better than voicing contrasts (0.84 vs 0.71 in the sound-only task), and labelled Thai plain (unaspirated) labials as **voiced** 78–84% of the time (plain alveolars about 40%). English ears hear ป as something near b.
   - Design consequence: the pron line writes the plain stops **bp, dt, g, j** and the aspirated ones **ph, th, kh, ch** (§6), and `sounds` drills the pairs.

4. **Final consonants and initial ng**
   - Wrong → right: final stops released with a burst (นก *nók*, บาท *bàat*: hold the closure); final ร and ล said as r and l (อาหาร is *aa-hǎan*; ฟุตบอล ends in n) [inference]; ง at the start of a word said as n or g (งาน *ngaan*, งู *nguu*) (Duke).
   - [practitioner opinion] Duke Language School;
   - Design consequence: `sounds` and `finals`; the Consonants: low class deck note on ง.

5. **เป็น where Thai has no verb "to be"**
   - Wrong → right: ผมเป็นหิว → ผมหิว (I'm hungry); อาหารเป็นอร่อย → อาหารอร่อย; ผมเป็นที่บ้าน → ผมอยู่ที่บ้าน (I'm at home); ผมไม่เป็นครู → ผมไม่ใช่ครู (I'm not a teacher) [inference; standard teaching point, cf. Ling "adjectives follow the noun", Listen & Learn mistake 1].
   - Design consequence: the `pen` lesson; a Traps deck card; the preferred "mixed neighbour" in later sets.

6. **Describers, owners and "this / that" go after the noun**
   - Wrong → right: สีขาวดอกไม้ → ดอกไม้สีขาว (ThaiPod101, mistake 7); ใหญ่บ้าน → บ้านใหญ่; ผมของบ้าน → บ้านของผม / บ้านผม; นี้หนังสือ → หนังสือเล่มนี้; มากสวย → สวยมาก.
   - [practitioner opinion] ThaiPod101 mistake 7; Ling ("adjectives follow the noun… adverbs follow the verb"); Listen & Learn mistake 5.
   - Design consequence: strand (b) of the standing rule (§7); the `this-that` and `compare` lessons.

7. **Classifiers**
   - Wrong → right: สองหนังสือ → หนังสือสองเล่ม; สามแมว → แมวสามตัว (Listen & Learn, mistake 3; Ling); กาแฟสอง → กาแฟสองแก้ว; สองคนเพื่อน → เพื่อนสองคน; เสื้อนี้ → เสื้อตัวนี้ (natural with the classifier) [inference].
   - Design consequence: strand (b); the `classifiers` lesson and deck; counted nouns on cards appear with their classifier.

8. **Questions in English order**
   - Wrong → right: อะไรคุณกิน → คุณกินอะไร (Listen & Learn, mistake 5); ที่ไหนห้องน้ำ → ห้องน้ำอยู่ที่ไหน; คุณไปที่ไหนไหม → คุณไปไหน (no ไหม with a question word); a statement said with a rising voice → add ไหม.
   - Design consequence: `mai`, `question-words`.

9. **Yes and no**
   - Wrong → right: ชอบไหม answered ใช่ → ชอบ / ไม่ชอบ; ไปได้ไหม answered ใช่ → ได้ / ไม่ได้; กินข้าวหรือยัง answered ใช่ → กินแล้ว / ยัง [inference; standard teaching point].
   - Design consequence: `mai` teaches "answer with the verb"; ใช่ only for "is it …?".

10. **Polite particles and the speaker's gender**
    - Wrong → right: ไปไหมค่ะ (female question) → ไปไหมคะ (ThaiPod101 mistake 4; Sublearn); a male learner copying a female teacher's ค่ะ → ครับ; particles dropped with strangers → keep them; ครับ on every phrase in a long turn → once at the end is enough (Ling warns that overuse "can make the politeness feel unnatural") [practitioner opinion].
    - Design consequence: §2.2; `greetings` and `pronouns`.

11. **Tense habits**
    - Wrong → right: a learner looking for a past form of ไป (Listen & Learn, mistake 1) → เมื่อวานผมไปตลาด, the verb unchanged; แล้ว on every past verb → only for "already / done" [inference]; ได้ + verb for "can" (ได้พูด = got to speak) → พูดได้ [inference].
    - Design consequence: `time-words`, `can-want`.

12. **Pronouns repeated**
    - Wrong → right: ผม and คุณ in every clause → dropped once clear (ไปไหน, กินแล้ว) (Listen & Learn, mistake 2); คุณ to an older friend or a server where พี่ or น้อง is natural [inference].
    - Design consequence: accepted answers list the pronoun-less form; `pronouns` teaches kinship terms.

13. **False friends and word-for-word copies** [practitioner opinion, ThaiPod101 mistake 5, for ฟิต and โอเวอร์; the rest inference]
    - ฟิต = too tight, not "healthy" (กางเกงตัวนี้ฟิต); โอเวอร์ = exaggerated, over the top; แอร์ = air conditioning (or a flight attendant); ฝรั่ง = Westerner and guava, a neutral word; ร้อน is hot to the touch, spicy is เผ็ด; "I'm full" is อิ่ม, not เต็ม; "you're welcome" is ไม่เป็นไร or nothing, not a word-for-word copy; สบายดีไหม is a real question, while ไปไหน and กินข้าวหรือยัง are everyday greetings; กรุณา ("please") belongs on signs, speech uses ขอ / ช่วย … หน่อย.
    - Design consequence: the Traps for English speakers deck.

14. **Reading the script** [inference; ThaiPod101 mistake 3 for tone marks]
    - Reading เ before the consonant (เด read "ee-d"); reading ่ as "low tone" everywhere (ไม่ is falling); reading ห in หมา as h; sounding out silent letters (เบียร์, จริง); expecting spaces between words.
    - Design consequence: the script lessons (§10.1).

## 5. Learners: who, why, what first

**Who**
- [research-backed] About 340,000 people in the US identified as Thai in 2023 (alone or in combination); the Thai-alone population is about 195,000, 74% of them immigrants. Of Thai-alone Americans aged 5+, 27% speak only English at home and 68% speak Thai (Pew Research Center, ACS 2021–23). The US-born, English-dominant group (about 50,000 Thai-alone US-born) is a small heritage pool.
- [research-backed, weak] About one million US visitors a year: TAT reported the first 1-million year in 2017; a 2025 trade article gives 1.03 million for 2024 without a source.
- [curriculum convention, third-party copy] FSI lists Thai in Category III, "hard languages", about 44 weeks (1,100 class hours), above Spanish (Category I) and below Chinese, Japanese and Korean.
- [inference] Groups, probably in this order of size for a self-study app:
  - **travellers** planning or repeating a trip (food, taxis, markets, politeness);
  - **partners, spouses and in-laws** of Thai speakers (family words, feelings, kinship terms, reading LINE messages);
  - **expats, retirees and remote workers** living in Thailand (numbers, directions, shopping, health, reading signs);
  - **heritage learners** with a Thai parent who understand some speech and want to read;
  - **culture fans** (Thai food, Muay Thai, Buddhism, Thai TV series);
  - students, Peace Corps, NGO and military learners, who usually also have a class.

**Why they study**
- No survey of US adult Thai learners' motives was found [gap, §11]. TAT's own marketing to Americans targets honeymooners, luxury travel, food, Muay Thai and wellness (TAT 2017) [practitioner opinion].

**What they need first** [inference]
1. **Hearing and saying tones and vowel length, and reading the romanization.** Without it nothing else sticks; the two sound lessons come first, as in the roadmap.
2. **Survival politeness and numbers:** สวัสดี, ขอบคุณ, ขอโทษ, ไม่เป็นไร with ครับ / ค่ะ, prices and เท่าไร. The roadmap puts these in lessons 3–4; kept.
3. **Enough script to read a card.** Adults expect to read menus and signs, and every card shows Thai script. The roadmap's six reading lessons are kept but **spread out** (§8, §10.1): two right after survival, the other four between the first grammar lessons, as both syllabuses opened do (UMN/ISDSI teaches literacy in weeks 3–8 alongside topics; CUHK adds consonants and vowels in every unit and teaches the tone rules class by class).
4. **Ordering food, getting around, shopping** (food, classifiers, directions, shopping), then family and feelings for partners and expats.
5. **Little grammar jargon.** No conjugation, no agreement, no articles: lessons are short on rules and long on word order, classifiers, particles and time words.

**Check of the roadmap's order** [curriculum convention]
- UMN/ISDSI Beginning Thai I: greetings, money and numbers, food in weeks 1–2; literacy (numbers, vowels, consonants, endings, tone marks) from week 3; clusters and leading consonants week 4–5; special vowel rules week 6–7; word and sentence formation week 8; topics in parallel: comparison, direction, family, daily activities, feelings, occupation, time, health, shopping (clothes and colors), transportation. The roadmap follows it closely.
- CUHK THAI1000: greetings, polite particles and pronouns first; nationality, "to be", question words; numbers; verbs, conjunctions, polite requests; tenses and time frames; directions; transport; shopping with classifiers and comparatives; food. Script in every unit: 10 consonants and 4 vowels per unit, then tone rules for mid, high and low classes in that order.
- Missing from the roadmap and added here: demonstratives and possession (`this-that`; the CUHK unit 2 "whose"), and polite requests (`requests`; CUHK unit 4 "May I…?").

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [curriculum convention] RTGS, the official system on road signs, "ignores tone and vowel length" and merges some vowels (ThaiPod101, *Types of Thai romanization*); language books "often use their own proprietary systems" (Wikipedia, *Romanization of Thai*, via a mirror). There is no shared learner standard.
- [practitioner opinion] Learner systems with tones that were opened: ThaiPod101 writes the plain stops **bp, dt, g, j**, the aspirated ones **ph, th, kh, ch**, long vowels doubled (*khaa*, *nguu*, *sǎawng*, *châawp*, *bpuuen*, *ruuea*), tones as diacritics on the vowel (mid none, low à, falling â, high á, rising ǎ) and hyphens between syllables (*sà-wàt-dii*, *dì-chǎn*); its alphabet page names the letters *gaaw*, *dtaaw*, *bpaaw*, *khaaw*, *thaaw*, *phaaw*. Duke Language School uses the same consonants and tone marks with some IPA vowels (*ɔɔ*, *ɛɛ*, *ʉʉ*). Clozemaster notes that other systems use *bp*, *dt* and *g* for the plain stops.
- [research-backed, perception] Pater (2003): English listeners label Thai plain *p* as voiced most of the time, so *bp* ("between b and p", ThaiPod101's own gloss) matches what they hear; an English reader who sees plain *p* or *t* would add a puff of air.
- Paiboon's own key was not read (the book copy failed). Its romanization as quoted on Wiktionary entries (*dtɔ̂ng*, *pǒn-lá-máai*, *táao*, *à-rɔ̀i*) writes ต as *dt* but the aspirated stops without *h* (*p*, *t*) and uses IPA vowels; this profile does not follow Paiboon.

**Decision.** `pron: "required"`. The pron is a learner romanization in the ThaiPod101 family (§6.2), **generated by `tools/target/th/respell.js`, never typed by hand**. `node tools/target/th/respell.js "<text>"` prints `<text> -> <pron>`; the module exports `respell` (and `pattern`, `syllable`, `numWords`, `entries`). Reasons for this key over the alternatives:
- **ASCII letters plus precomposed tone vowels** (à á â ǎ, è é ê ě, ì í î ǐ, ò ó ô ǒ, ù ú û ǔ): every glyph exists precomposed in NFC and in ordinary fonts, the accent bar can type it, and the app's accent folding (`foldAcc` strips U+0300–036F) turns a toneless typed answer into "almost". IPA-style ɛ ɔ ʉ ə have no precomposed toned forms, do not fold, and are not on an English keyboard.
- **kh / th / ph** match the spellings learners already know (Thai, Khun, Phuket, Khao San, pad thai); **bp / dt / g / j** mark the plain stops that English readers would otherwise aspirate.
- **Doubled long vowels** make length visible on every syllable (error zone 2).

### 6.1 Why a generator, and how far it can be trusted

Thai tone is computed from the spelling (consonant class, live or dead syllable, vowel length, tone mark), which a program does reliably. What a program cannot do from the spelling alone is:
- **find the words** (Thai has no spaces);
- **find the syllables** inside a word: hidden vowels (สบาย *sà-baai*, ถนน *thà-nǒn*), leading consonants (ตลาด *dtà-làat*, ขนม *khà-nǒm*), true clusters against two syllables;
- **know the irregular words**: silent ร (จริง), ทร said s (ทราบ), long vowels spelled short (น้ำ, ได้, เก้า, เช้า), short vowels spelled long or unmarked (ต้อง, ห้อง, เงิน, เล่น, เล่ม, เช่น), and loanwords.

So the generator is **rules plus a word list**, the option the brief names:
- **The word list** (`LEX` in `respell.js`, about 710 entries) gives every word with its **reading**: the word respelled as regular Thai syllables separated by "-", as Thai dictionaries do ("อ่านว่า") and as Wiktionary's Thai phonemic respelling does (นั่งเล่น = นั่ง-เล็่น; เช่น = เช็่น; อร่อย = อะ-หร็่อย; ไหว้ = ว่าย): สบาย=สะ-บาย, ตลาด=ตะ-หลาด, จริง=จิง, น้ำ=น้าม, ต้อง=ต็้อง. A one-syllable regular word is listed bare. The readings are in Thai, so **a native speaker can check the whole list without learning the romanization**.
- **The rules** (`syllable()`) read each regular syllable: onset (with ห and อ leaders and the clusters กร กล กว ขร ขล ขว คร คล คว ตร ปร ปล ผล พร พล บร บล ดร ฟร ฟล), vowel shape (all 40 forms of §6.2), final, and tone mark, and compute the tone with the standard table (mid class: live mid, dead low; high class: live rising, dead low; low class: live mid, dead short high, dead long falling; ่ low, or falling on low class; ้ falling, or high on low class; ๊ and ๋ high and rising on mid class only). It throws on anything it cannot read as one syllable, on two tone marks, and on ๊ / ๋ over a non-mid letter. `--check` reads every entry and tests every output against `pronPattern`.
- **Word breaks:** maximal matching over the list (the cut with the fewest words). If two different cuts tie, it **throws** and names both (ตากลม: ตา / กลม or ตาก / ลม); text not in the list **throws** «…». A space in the input forces a break.
- **Digits** (50, 1,250) are read as one Thai number word (*hâa-sìp*, *nùeng-phan-sǎawng-ráawi-hâa-sìp*): thousands commas are allowed, 1 in the units place after tens is เอ็ด, 2 in the tens place is ยี่, ล้าน groups millions. A decimal point or a clock time written with digits (3.5, 10:30) throws: write those in Thai words. Number words join into one pron word only when they touch in the input (สองสาม *sǎawng-sǎam*; "2 3" stays two words). **ๆ** repeats the word before it with a hyphen (เด็กๆ *dèk-dèk*). **ฯ** is dropped (กรุงเทพฯ *grung-thêep*). **A lone consonant between spaces** is read as its letter name (ก ไก่ *gaaw gài*; ข *khǎaw*), for the letter cards (§9). Latin letters throw.
- **Spelling vs speech policy:** the pron follows the **careful standard pronunciation** given by dictionaries: irregular length is respelled (น้ำ *náam*, ได้ *dâai*, ไม้ *máai*, ไหว้ *wâai*, ต้อง *dtâwng*, ห้อง *hâwng*, เงิน *ngoen*, อร่อย *à-ràwi*, หน่อย *nàwi*), but **colloquial tone shifts are not** (ไหม *mǎi*, ฉัน *chǎn*, เขา *khǎo*, though often said *mái*, *chán*, *kháo*), and r stays r (ครับ *khráp*). Card notes say what is heard.

**What it cannot know (the silent-error classes that remain):**
1. **A wrong reading in the list.** The rules are mechanical; a reading typed wrong (a missing ็, a wrong leading consonant) gives a wrong pron with no warning. This is the single most important thing for a native speaker to check (§11), and it is in one place, in Thai.
2. **A missing compound whose parts are listed** comes out as two words (ร้าน + อาหาร if ร้านอาหาร were missing). The tones are still right; only the word break (one tile or two) differs.
3. **Homographs.** One reading per spelling. สระ is not listed (pool *sà* / vowel *sà-rà*); เพลา, แหน and similar are not A1. A writer who needs one reports it; the lead lists the phrase (สระน้ำ).
4. **A listed compound can swallow a real word break**: ที่อยู่ (address) is listed, so ผมอยู่ที่… is fine but a sentence where ที่ and อยู่ belong to different phrases would come out as *thîi-yùu* (one word). Tones stay right; the tile split differs. A writer who sees it puts a space in the input.
5. **Number merging:** two number words written side by side (สองสาม "two or three") join into one word.

**Adding words:** writers never edit a pron. When the generator throws, the writer reports the word; the lead adds `word=reading` to `LEX` and runs `node tools/target/th/respell.js --check`, then `node tools/target/repron.js th` to refresh stored prons.

**How reliable** (self-measured; no native check yet, §11):
- 713 entries, all read by the rules; all outputs match `pronPattern` with and without the `u` flag.
- **External check:** the tones and vowel lengths of 75 words and phrases romanized in the sources opened (Duke Language School 36, Listen & Learn 15, ThaiPod101 6, Ling 5, Wiktionary 13) were compared by hand with the generator's output. **Before fixes, 4 disagreed**, all on hidden vowel length: เล่ม (short), ไม้ (Duke *máai*, long), อร่อย and หน่อย (Wiktionary: short). After respelling them (§6.1 readings), all 75 agree on tone and length. Vowel spellings differ between systems, as expected; Duke does not double the diphthongs (*glûai* for *glûuai*). ThaiPod101 writes *sǎawng*, *châawp*, *chûue* and *dì-chǎn*, and the generator gives exactly those strings. Wiktionary also confirmed ห้อง and ต้อง short, ร้อย, น้อย, เท้า and ไหว้ long, ใต้ long (with a short variant).
- **Sentence sweep:** every Thai run in §4, §7 and §8 of this profile (478 runs) was fed to the generator. 411 generate. The 67 throws are fragments that are not words (a lone vowel sign or tone mark, a reading such as ต็้อง, a list of cluster letters) or deliberate (ตากลม, สระ, เพลา, แหน). Before the run, 14 real words were missing (พาย, ฟุตบอล, กรุณา, พร้อม, แข็ง, โรง, สวน, ข่าว, พวก and the four tone-mark names); they were added. Writers will still hit missing words: about one per new lesson topic is a fair expectation [inference].
- The 90 sample cards, 20 worked examples and 4 greetings of this profile all generate without a throw.

### 6.2 The key (exact format)

**Consonants** (initial / final). The final column is the only sound a letter can have at the end of a syllable.

| Sound | Initial letters | Final letters | Note for English readers |
|---|---|---|---|
| g | ก | — | no puff: between g and k |
| kh | ข ฃ ค ฅ ฆ | — | a k with a puff, as in "kite" |
| ng | ง | ง | also at the start of a word: งู *nguu* |
| j | จ | — | no puff: between j and ch |
| ch | ฉ ช ฌ | — | as in "chair" |
| s | ซ ศ ษ ส | — | |
| y | ญ ย | — | |
| d | ฎ ด | — | |
| dt | ฏ ต | — | no puff: between d and t |
| th | ฐ ฑ ฒ ถ ท ธ | — | a t with a puff, as in "top"; never as in "think" |
| n | ณ น | ญ ณ น ร ล ฬ → n | |
| b | บ | — | |
| bp | ป | — | no puff: between b and p |
| ph | ผ พ ภ | — | a p with a puff, as in "pie"; never f |
| f | ฝ ฟ | — | |
| m | ม | ม | |
| r | ร | (→ n) | a tapped r |
| l | ล ฬ | (→ n) | |
| w | ว | (glide, see vowels) | |
| h | ห ฮ | — | |
| (none) | อ | — | a vowel-initial syllable: อาหาร *aa-hǎan* |
| k | — | ก ข ค ฆ | held, not released |
| t | — | จ ช ซ ฎ ฏ ฐ ฑ ฒ ด ต ถ ท ธ ศ ษ ส | held, not released |
| p | — | บ ป พ ฟ ภ | held, not released |

Clusters: *gr gl gw khr khl khw dtr bpr bpl phr phl br bl dr fr fl* (ครับ *khráp*, ใกล้ *glâi*, ขวา *khwǎa*, ตรง *dtrong*, ปลา *bplaa*, พริก *phrík*).

**Vowels.** Long = the first vowel letter doubled. The tone mark goes on the **first vowel letter** of the syllable.

| Short | Long | Thai shapes (short / long) | Example |
|---|---|---|---|
| a | aa | -ะ, -ั- / -า | จะ *jà*; มา *maa* |
| i | ii | -ิ / -ี | ปิด *bpìt*; ดี *dii* |
| ue | uue | -ึ / -ือ, -ื- | หนึ่ง *nùeng*; มือ *muue* |
| u | uu | -ุ / -ู | ดุ *dù*; ดู *duu* |
| e | ee | เ-ะ, เ-็- / เ- | เด็ก *dèk*; เวลา *wee-laa* |
| ae | aae | แ-ะ, แ-็- / แ- | แข็ง *khǎeng*; แม่ *mâae* |
| o | oo | โ-ะ, (hidden) / โ- | คน *khon*; โต๊ะ *dtó*; โรง *roong* |
| aw | aaw | เ-าะ, -็อ- / -อ | เกาะ *gàw*; ขอ *khǎaw* |
| oe | ooe | เ-อะ / เ-อ, เ-ิ- | เยอะ *yóe*; เธอ *thooe*; เดิน *dooen* |
| ia | iia | เ-ียะ / เ-ีย | เรียน *riian* |
| uea | uuea | เ-ือะ / เ-ือ | เรือ *ruuea* |
| ua | uua | -ัวะ / -ัว, -ว- | ตัว *dtuua*; สวน *sǔuan* |

Vowels ending in a glide (always live, never followed by a final): *ai* (ไ- ใ- -ัย), *aai* (-าย), *ao* (เ-า), *aao* (-าว), *am* (-ำ), *iu* (-ิว), *ui* (-ุย), *ooi* (โ-ย), *aawi* (-อย), *uuai* (-วย), *uueai* (เ-ือย), *ooei* (เ-ย), *awi* (short -อย said short: อร่อย *à-ràwi*), *eo* (เ-็ว), *eeo* (เ-ว), *aeo* (แ-็ว), *aaeo* (แ-ว), *iiao* (เ-ียว). Final ย is written *i*, final ว *o* (after a, e, ae, ia) or *u* (after i).

**Tones** (on the first vowel letter): mid unmarked *maa*; low grave *màa*; falling circumflex *mâa*; high acute *máa*; rising caron *mǎa*.

**Format**
- One pron **word** per Thai word of the generator's list, separated by **one space**; syllables inside a word joined by **hyphens** (*sà-wàt-dii khráp*). Each pron word is one tile in practice (§10.4).
- **Lowercase only**, including names (*sǒm-chaai*, *grung-thêep*). **No punctuation** (Thai strings carry none; a final ? in the Thai is ignored).
- NFC; precomposed tone vowels only. No glottal-stop symbol (a short open syllable is just short: *jà*).

### 6.3 `pronPattern`

Built by `respell.js --pattern` from the same tables: an optional onset or cluster, then either a plain vowel with its optional tone mark on the first letter and an optional final (ng m n k t p), or a glide vowel with no final; syllables joined by "-", words by one space. Full string (2,164 characters; in `profile.json`; works with and without the `u` flag, so `validate.js` and `repron.js` can both use it):

```
^(?:khr|dtr|bpr|phr|khl|bpl|phl|khw|gr|br|dr|fr|gl|bl|fl|gw|kh|ch|th|ph|ng|bp|dt|g|j|s|y|d|n|b|f|m|r|l|w|h)?(?:(?:[uùûúǔ]uea|[uùûúǔ]ue|[aàâáǎ]ae|[aàâáǎ]aw|[oòôóǒ]oe|[iìîíǐ]ia|[uùûúǔ]ea|[uùûúǔ]ua|[aàâáǎ]a|[iìîíǐ]i|[uùûúǔ]e|[uùûúǔ]u|[eèêéě]e|[aàâáǎ]e|[oòôóǒ]o|[aàâáǎ]w|[oòôóǒ]e|[iìîíǐ]a|[uùûúǔ]a|[aàâáǎ]|[iìîíǐ]|[uùûúǔ]|[eèêéě]|[oòôóǒ])(?:ng|m|n|k|t|p)?|(?:[uùûúǔ]ueai|[aàâáǎ]awi|[uùûúǔ]uai|[oòôóǒ]oei|[aàâáǎ]aeo|[iìîíǐ]iao|[aàâáǎ]ai|[aàâáǎ]ao|[oòôóǒ]oi|[aàâáǎ]wi|[eèêéě]eo|[aàâáǎ]eo|[aàâáǎ]m|[aàâáǎ]i|[aàâáǎ]o|[iìîíǐ]u|[uùûúǔ]i|[eèêéě]o))(?:-(?:khr|dtr|bpr|phr|khl|bpl|phl|khw|gr|br|dr|fr|gl|bl|fl|gw|kh|ch|th|ph|ng|bp|dt|g|j|s|y|d|n|b|f|m|r|l|w|h)?(?:(?:[uùûúǔ]uea|[uùûúǔ]ue|[aàâáǎ]ae|[aàâáǎ]aw|[oòôóǒ]oe|[iìîíǐ]ia|[uùûúǔ]ea|[uùûúǔ]ua|[aàâáǎ]a|[iìîíǐ]i|[uùûúǔ]e|[uùûúǔ]u|[eèêéě]e|[aàâáǎ]e|[oòôóǒ]o|[aàâáǎ]w|[oòôóǒ]e|[iìîíǐ]a|[uùûúǔ]a|[aàâáǎ]|[iìîíǐ]|[uùûúǔ]|[eèêéě]|[oòôóǒ])(?:ng|m|n|k|t|p)?|(?:[uùûúǔ]ueai|[aàâáǎ]awi|[uùûúǔ]uai|[oòôóǒ]oei|[aàâáǎ]aeo|[iìîíǐ]iao|[aàâáǎ]ai|[aàâáǎ]ao|[oòôóǒ]oi|[aàâáǎ]wi|[eèêéě]eo|[aàâáǎ]eo|[aàâáǎ]m|[aàâáǎ]i|[aàâáǎ]o|[iìîíǐ]u|[uùûúǔ]i|[eèêéě]o)))*(?: (?:khr|dtr|bpr|phr|khl|bpl|phl|khw|gr|br|dr|fr|gl|bl|fl|gw|kh|ch|th|ph|ng|bp|dt|g|j|s|y|d|n|b|f|m|r|l|w|h)?(?:(?:[uùûúǔ]uea|[uùûúǔ]ue|[aàâáǎ]ae|[aàâáǎ]aw|[oòôóǒ]oe|[iìîíǐ]ia|[uùûúǔ]ea|[uùûúǔ]ua|[aàâáǎ]a|[iìîíǐ]i|[uùûúǔ]e|[uùûúǔ]u|[eèêéě]e|[aàâáǎ]e|[oòôóǒ]o|[aàâáǎ]w|[oòôóǒ]e|[iìîíǐ]a|[uùûúǔ]a|[aàâáǎ]|[iìîíǐ]|[uùûúǔ]|[eèêéě]|[oòôóǒ])(?:ng|m|n|k|t|p)?|(?:[uùûúǔ]ueai|[aàâáǎ]awi|[uùûúǔ]uai|[oòôóǒ]oei|[aàâáǎ]aeo|[iìîíǐ]iao|[aàâáǎ]ai|[aàâáǎ]ao|[oòôóǒ]oi|[aàâáǎ]wi|[eèêéě]eo|[aàâáǎ]eo|[aàâáǎ]m|[aàâáǎ]i|[aàâáǎ]o|[iìîíǐ]u|[uùûúǔ]i|[eèêéě]o))(?:-(?:khr|dtr|bpr|phr|khl|bpl|phl|khw|gr|br|dr|fr|gl|bl|fl|gw|kh|ch|th|ph|ng|bp|dt|g|j|s|y|d|n|b|f|m|r|l|w|h)?(?:(?:[uùûúǔ]uea|[uùûúǔ]ue|[aàâáǎ]ae|[aàâáǎ]aw|[oòôóǒ]oe|[iìîíǐ]ia|[uùûúǔ]ea|[uùûúǔ]ua|[aàâáǎ]a|[iìîíǐ]i|[uùûúǔ]e|[uùûúǔ]u|[eèêéě]e|[aàâáǎ]e|[oòôóǒ]o|[aàâáǎ]w|[oòôóǒ]e|[iìîíǐ]a|[uùûúǔ]a|[aàâáǎ]|[iìîíǐ]|[uùûúǔ]|[eèêéě]|[oòôóǒ])(?:ng|m|n|k|t|p)?|(?:[uùûúǔ]ueai|[aàâáǎ]awi|[uùûúǔ]uai|[oòôóǒ]oei|[aàâáǎ]aeo|[iìîíǐ]iao|[aàâáǎ]ai|[aàâáǎ]ao|[oòôóǒ]oi|[aàâáǎ]wi|[eèêéě]eo|[aàâáǎ]eo|[aàâáǎ]m|[aàâáǎ]i|[aàâáǎ]o|[iìîíǐ]u|[uùûúǔ]i|[eèêéě]o)))*)*$
```

What it enforces: only the letters of the key and the 20 tone vowels; at most one tone mark per syllable, on its first vowel letter; *bp*, *dt*, *g* and the aspirated digraphs as the only stop onsets (a bare *t*, *p* or *k* can only be a final); no final after a glide vowel; single spaces and hyphens; lowercase; no punctuation. It rejects Paiboon-style *tai*, IPA vowels (*sɛ̀ɛ*), tone numbers (*ni3*), RTGS *sawasdee*, capitals, double spaces and commas. It **cannot** tell a mid tone from a forgotten mark (mid is unmarked) and cannot see a wrong tone or a wrong word break: the generator, not the pattern, is the guarantee (request 4, §10.8).

Tested: all 713 list entries, the 90 sample cards, the 20 examples and the greetings pass; the negatives above fail.

### 6.4 Twenty worked examples (all generated and all pass `pronPattern`)

| # | Thai | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | สวัสดีครับ | `sà-wàt-dii khráp` | hello (male speaker) | hidden a in สะ and leading ห in หวัด (low, low, mid); one word per Thai word; ครับ high |
| 2 | ขอบคุณค่ะ | `khàawp-khun khâ` | thank you (female speaker) | long aaw written aaw; ค่ะ falling |
| 3 | ไม่เป็นไร | `mâi-bpen-rai` | it's OK | a fixed expression is one word, syllables hyphenated |
| 4 | ข้าว | `khâao` | rice | falling tone; long aa + w = aao |
| 5 | ขาว | `khǎao` | white | high-class live syllable: rising tone |
| 6 | เขา | `khǎo` | he, she | short ao; rising |
| 7 | ใกล้ | `glâi` | near | cluster gl; ้ on a mid-class letter: falling |
| 8 | ไกล | `glai` | far | no mark, live: mid tone, no tone mark in the romanization |
| 9 | ตลาด | `dtà-làat` | market | hidden vowel; ล takes the class of ต: low |
| 10 | ขนม | `khà-nǒm` | snack, dessert | นม takes the class of ข: rising |
| 11 | หนังสือสองเล่ม | `nǎng-sǔue sǎawng lêm` | two books | three words; เล่ม said short (lêm) |
| 12 | น้ำ | `náam` | water | spelled short, said long: náam |
| 13 | ได้ | `dâai` | can; to get | spelled ไ, said long: dâai |
| 14 | จริง | `jing` | true, real | silent ร |
| 15 | ทราบ | `sâap` | to know (formal) | ทร said s |
| 16 | อร่อย | `à-ràwi` | delicious | written -อย, said short (Wiktionary): short aw + y glide = awi |
| 17 | เปรี้ยว | `bprîiao` | sour | cluster bpr; iia + w glide = iiao |
| 18 | ราคา 250 บาท | `raa-khaa sǎawng-ráawi-hâa-sìp bàat` | 250 baht | Arabic digits read as one Thai number word |
| 19 | เด็กๆ | `dèk-dèk` | children | ๆ repeats the word, joined by a hyphen |
| 20 | ก ไก่ | `gaaw gài` | the letter ก | a lone consonant is read as its letter name |

### 6.5 Card front, and hiding the romanization

- **Card front:** the Thai script, large (§10.7), and under it the pron line, **shown by default for the whole A1 course**. 26 lessons are not enough to read Thai fluently; the pron is how the learner links sound, tone and spelling.
- **Hideable**: the app already has "Show pronunciation hints in practice" and "Blur pronunciation hints in Browse" (request 9, §10.8, checks that they cover en-th cards and example rows). Suggested prompt after `special` (lesson 16): "Reading Thai well? Try hiding the romanization." Learners who read Thai can switch it off from day one.
- **Lesson example rows** show the pron under the Thai, with the same setting.
- **Practice items carry no pron** (PRACTICE-SPEC), with two exceptions for this course: sound-stage items whose answer *is* romanization (§7), and the one tone `mc` item per set.

### 6.6 What the first lessons must teach so the aid can be read, and later dropped

`tones` and `sounds` (before any script):
1. The five tone marks of the romanization (mid has none) and how each tone sounds; the doubled vowel means long.
2. The letters that lie to English readers: *bp*, *dt*, *g*, *j* (no puff) against *ph*, *th*, *kh*, *ch* (puff); *ph* is never f and *th* never as in "think"; *ng* at the start; *ue*, *oe*, *ae*, *aw*; finals held.
3. Hyphens join syllables of one word; spaces separate words (and tiles).
4. The aid is a crutch: listen first.

The script lessons (§10.1) then map every symbol of the key back to Thai letters, so that by `special` the learner can read a word's tone from the script; that is when the hide prompt appears.

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things.
- **(a) Tone and vowel length.** The tone and the length make the word: ใกล้ *glâi* / ไกล *glai*; ข้าว *khâao* / ขาว *khǎao* / เขา *khǎo*; มา / ม้า / หมา; ไม่ / ไม้ / ใหม่ / ไหม; ห้า / หา; เก้า / เก่า; ดู / ดุ; เข้า / ข้าว; ค่ะ / คะ.
- **(b) Thai order around the noun.** What describes, owns, points at or counts a noun comes **after** it: บ้านใหญ่, รถสีแดง, เพื่อนผม, บ้านของผม, เสื้อตัวนี้, and noun + number + **classifier** (หนังสือสองเล่ม, แมวสามตัว, กาแฟสองแก้ว).

**Why these two.**
- (a): the only error zone with learner data (Wayland & Li 2008; Kaan et al. 2007; Pater 2003 for the consonant side), present in every syllable from lesson 1, and the only strand that can be tested in the sound and script lessons, before there is any grammar. Thai script *shows* tone and length (unlike Chinese characters), so after the sound stage strand (a) can be tested in Thai-script items too, with a tone or length twin as the distractor.
- (b): adjective, possessor, demonstrative and classifier order are the grammar errors every practitioner source lists (ThaiPod101 7, Ling, Listen & Learn 3 and 5), and they occur in almost every noun phrase from `pronouns` on. Classifiers are a slot-and-order problem (noun + number + classifier + นี้), so they sit in the same strand.
- **Not chosen:**
  - **The polite particle:** frequent, but it is a gender choice, not an error pattern, and making it a hinge would force a gender cue into four items of every set. It is a writer rule instead (§2.2), and ค่ะ / คะ counts as strand (a) because the difference is a tone.
  - **Question words in place and ไหม at the end:** lesson-bound (`mai`, `question-words`); they are the preferred "mixed neighbour" in the last two items of later sets.
  - **เป็น with describing words:** lesson-local (`pen`), and a Traps deck card.

**How strand (a) works in each part of the course.**
- **`tones`, `sounds` (no script yet):** hinges are **romanization items**: `or` tiles are romanized words with a tone or length twin as the distractor; `ty` answers are typed romanization with tone marks (accent bar), marked `'!strict'`. The tiles of a romanized `or` answer must contain at least one tone mark (an all-mid answer such as *glai* fails `targetScript`, §10.5): pair it with a marked word (*glai mâak*). A romanized `ty` answer may be all mid (the validator accepts it through `pronPattern`), but a tone item should have a marked answer anyway.
- **Script lessons and later:** Thai-script items whose distractor is a tone or length twin (x ใกล้ for ไกล; x เก่า for เก้า; x คะ for ค่ะ).
- **From `greetings` on, every set's `mc` block includes at least one tone item**: "Which is the romanization of ใกล้ (near)?" (*glâi* / *glai* / *glài* / *gláai*), or "Which word is *khǎao* (white)?" (ขาว / ข้าว / เขา / ข่าว). A writer rule, not a validator rule (`mc` items are not counted).
- PRACTICE-SPEC says "No romanization in practice items". For en-th that is overridden in exactly these places: the two sound lessons, romanization `or` / `ty` items in the script lessons, and the tone `mc` item. Elsewhere practice stays in Thai script.

**Count** (`minOrder: 2`, `minType: 2`): in every set at least **2 `or` items** and **2 `ty` items** hinge on (a) or (b), and their `why` names it with a keyword.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`or`, strand (a):** `x` holds a tone or length twin of a tile in `a` (same consonants and vowel quality, different tone mark or length: ใกล้ / ไกล, เข้า / ข้าว, ค่ะ / คะ, *máa* / *mǎa*).
- **`or`, strand (b):** `a` puts a describer, owner, นี้ / นั้น or number + classifier after the noun, and `x` holds a wrong classifier (คน where ตัว is needed), นี่ where นี้ is needed, ของ where the item drops it, or a tile that only fits English order.
- **`ty`, strand (a):** `x` holds a tone or length twin; romanization answers are `'!strict'` (otherwise a wrong or missing tone is "almost", §10.3).
- **`ty`, strand (b):** `a[0]` contains noun + describer, noun + owner, noun + classifier + นี้ / นั้น, or noun + number + classifier, and `x` holds a wrong classifier or นี่ / ของ as above. (The validator rejects an `x` word that can rebuild an accepted answer, so a misplaced word of the answer cannot be the distractor.)
- **`fi` items** whose distractors are tone twins in romanization are `'!strict'`.

**Examples in the shorthand** (Thai tiles spaced by word, §10.4):

```
['or', 'very far (romanization)', 'glai mâak', 'glâi', 'ไกล (glai) has a mid tone; glâi with a falling tone means near.']
['ty', 'Type the romanization of ม้า (horse)', 'máa', 'high tone · use the accent bar', 'mǎa', 'ม้า (máa) has a high tone; หมา (mǎa) with a rising tone is a dog.', '!strict']
['or', 'Thank you (female speaker)', 'ขอบคุณ ค่ะ', 'คะ', 'In a statement ค่ะ has a falling tone; คะ with a high tone is for questions.']
['ty', 'Is it spicy? (female speaker)', 'เผ็ด ไหม คะ|เผ็ดไหมคะ|เผ็ด ไหม|เผ็ดไหม', 'เผ็ด · ไหม · end with the female question particle', 'ค่ะ', 'A question ends in คะ, with a high tone.']
['or', 'five baht', 'ห้า บาท', 'หา', 'ห้า (hâa, five) has a falling tone; หา (hǎa) with a rising tone means to look for.']
['ty', 'nine baht', 'เก้า บาท|เก้าบาท', 'เก้า · บาท', 'เก่า', 'เก้า (gâao) has a falling tone and a long vowel; เก่า (gào) means old.']
['or', 'three cats', 'แมว สาม ตัว', 'คน', 'Animals take the classifier ตัว, after the number.']
['ty', 'this shirt', 'เสื้อ ตัว นี้|เสื้อตัวนี้', 'เสื้อ · ตัว · นี้', 'นี่', 'The classifier and นี้ come after the noun: เสื้อตัวนี้.']
['ty', 'a new book', 'หนังสือ ใหม่|หนังสือใหม่', 'หนังสือ · ใหม่', 'ไม่', 'ใหม่ (mài, low tone) means new, and it comes after the noun.']
```

(The second answer in each Thai `ty` list is the unspaced twin, needed until request 1 is built, §10.8.)

**Lessons where the rule is hardest, with two hinges each** (or / ty):
- `tones`: or "very far (romanization)" → *glai mâak* (x *glâi*); "rice and water (romanization)" → *khâao náam* (x *khǎao*). ty "Type the romanization of ม้า (horse)" → *máa* (x *mǎa*, strict); "… of ใกล้ (near)" → *glâi* (x *glai*, strict).
- `sounds`: or "look at the child (romanization)" → *duu dèk* (x *dù*); "not far" → *mâi glai* (x *glâi*). ty "Type the romanization of ข้าว (rice)" → *khâao* (x *khǎao*, strict); "Type the romanization of ดุ (to scold)" → *dù* (x *duu*, strict). why: "ดู (duu) has a long vowel; ดุ (dù) is short."
- `greetings`: ค่ะ / คะ items above; ty "Hello (male speaker)" carries no hinge, so use "Thank you (female speaker)" → ขอบคุณ ค่ะ (x คะ).
- `numbers`: ห้า / หา and เก้า / เก่า items above; สอง *sǎawng* (rising) in `mc`.
- `consonants`: romanization items: or "long legs (romanization)" → *khǎa yaao* (x *khaa*), why "ข is a high-class consonant, so ขา has a rising tone."; ty "Type the romanization of ขา (leg)" → *khǎa* (x *khaa*, strict).
- `vowels`: or "enter the house" → เข้า บ้าน (x ข้าว), why "เข้า (khâo) has a short vowel; ข้าว, with a long vowel, is rice."; ty "eat rice" → กิน ข้าว (x เข้า).
- `pronouns`: strand (b) with owners: or "my friend (male speaker)" → เพื่อน ผม (x ฉัน), why "The owner comes after the noun: เพื่อนผม."; ty "my older sister (female speaker)" → พี่สาว ฉัน|พี่สาวฉัน|พี่สาว ของ ฉัน|พี่สาวของฉัน (x ผม).
- `finals`: or "I love you (romanization)" → *rák khun* (x *râak*), why "รัก (rák) has a short vowel and a high tone; ราก (râak) is a root."; or "near the market" → ใกล้ ตลาด (x ไกล). ty "Type the romanization of จาก (from)" → *jàak* (x *jaak*, strict), why "A dead syllable on a mid-class letter takes a low tone."; ty "Type the romanization of ราก (root)" → *râak* (x *rák*, strict).
- `tone-marks`: or "not a horse" → ไม่ ใช่ ม้า (x หมา); ty "a new book" (above).
- `clusters`: or "near the market" → ใกล้ ตลาด (x ไกล); ty "It's not far." → ไม่ ไกล|ไม่ไกล (x ใกล้).
- `special`: or "two bottles of water" → น้ำ สอง ขวด (x ขวบ), why "Bottles take the classifier ขวด; ขวบ counts a child's years."; ty "two glasses of water" → น้ำ สอง แก้ว|น้ำสองแก้ว (x ขวด), why "Glasses take the classifier แก้ว, after the number." The tone of น้ำ (náam: long vowel, high tone, spelled short) goes in the tone `mc` item.
- From `this-that` on, strand (b) is the easy hinge in every set (classifier, นี้, describer after the noun); keep one strand (a) item per set where the vocabulary allows.

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\b(?:mid|low|falling|high|rising) tones?\b|\btone (?:marks?|rules?)\b|\b(?:long|short) vowels?\b|\bvowel length\b|\bclassifiers?\b|\bafter the noun\b
```

Use them like this: strand (a): a tone name + "tone" ("a falling tone"), "tone mark", "tone rules", "long vowel", "short vowel", "vowel length"; strand (b): "after the noun", "classifier". These are deliberately **not** keywords: bare "tone" ("a polite tone"), "high-class" (a class is not a tone), "long answer", "word order", "at the end" (it would count ไหม and particle lines). All keywords are ASCII. Do not use them in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 40 of 40 as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| ไกล (glai) has a mid tone; ใกล้ (glâi) with a falling tone means near. | match | should match |
| ม้า (máa) has a high tone; หมา (mǎa) with a rising tone is a dog. | match | should match |
| ข้าว (khâao) has a falling tone and a long vowel; ขาว (khǎao) is white. | match | should match |
| ข is a high-class consonant, so ขา has a rising tone. | match | should match |
| A dead syllable on a mid-class letter takes a low tone: จาก (jàak). | match | should match |
| ไม้เอก on a low-class letter gives a falling tone: ไม่ (mâi). | match | should match |
| The tone mark ้ on ม gives a high tone: ม้า. | match | should match |
| The tone rules: low class + dead syllable + long vowel = falling tone. | match | should match |
| ดู (duu) has a long vowel; ดุ (dù), with a short vowel, means to scold. | match | should match |
| เข้า has a short vowel (khâo); ข้าว has a long one. | match | should match |
| Vowel length changes the word: ขาด (khàat) is torn, ขัด (khàt) is to scrub. | match | should match |
| In a statement ค่ะ has a falling tone; คะ with a high tone is for questions. | match | should match |
| A question ends in คะ, with a high tone. | match | should match |
| Books take the classifier เล่ม: หนังสือสองเล่ม. | match | should match |
| Noun, number, classifier: แมวสามตัว. | match | should match |
| The describer comes after the noun: บ้านใหญ่. | match | should match |
| นี้ and the classifier come after the noun: เสื้อตัวนี้. | match | should match |
| The owner comes after the noun: เพื่อนผม. | match | should match |
| Colors come after the noun, with สี: รถสีแดง. | match | should match |
| Use the classifier คน for people: คนไทยห้าคน. | match | should match |
| Rising tones dip and then rise: หมา, ขา, สอง. | match | should match |
| ห้า (hâa, five) has a falling tone; หา (hǎa) means to look for. | match | should match |
| Use ครับ if you speak as a man, ค่ะ if you speak as a woman. | no match | should not match |
| ไหม at the end turns a statement into a yes/no question. | no match | should not match |
| The question word stays where the answer goes: คุณกินอะไร. | no match | should not match |
| No เป็น before a describing word: ผมหิว. | no match | should not match |
| เป็น goes before a job: ผมเป็นครู. | no match | should not match |
| อยู่ is for where something is. | no match | should not match |
| Answer with the verb, not with ใช่. | no match | should not match |
| Thai verbs never change; แล้ว shows it is done. | no match | should not match |
| Say it in a polite tone with ครับ or ค่ะ. | no match | should not match |
| ข is a high-class consonant. | no match | should not match |
| Give a short answer: ได้ or ไม่ได้. | no match | should not match |
| A long answer is fine too. | no match | should not match |
| ไป needs no word for "to": ไปตลาด. | no match | should not match |
| จะ goes before the verb for the future. | no match | should not match |
| The tone of voice matters less than the particle. | no match | should not match |
| ขอ + thing + หน่อย is a polite request. | no match | should not match |
| ห before น makes it a high-class letter. | no match | should not match |
| Put ไม่ before the verb: ไม่ชอบ. | no match | should not match |


## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4 and §5, plus the two syllabuses):
- **Kept: all 24 items.** Ids lose the `th-` prefix; each appears exactly once in a `roadmap` field.
- **Reordered: the six reading lessons are spread out** instead of forming one block of lessons 5–10. `consonants` and `vowels` come right after the survival lessons (so cards can be decoded early); `finals`, `tone-marks`, `clusters` and `special` alternate with the first grammar lessons. Both syllabuses run literacy alongside speaking topics (UMN/ISDSI weeks 3–8; CUHK every unit), and six script lessons in a row is the steepest wall any course in this app would have. The roadmap's stages are kept in name but regrouped: stage 2 is "Reading Thai, with first sentences".
- **Reordered: `classifiers` moves up** from the "First sentences" stage to lesson 10, right after `pen`, because `this-that` (เสื้อตัวนี้, อันนี้), `question-words` (กี่ + classifier), `special` (reading menu lines) and `food` all need classifiers. CUHK also teaches simple classifiers with shopping, before food.
- **Renamed** (titles gain the English-speaker point or a gloss): `greetings` "Hello, thank you, sorry: ครับ and ค่ะ"; `pen` "เป็น, คือ, อยู่: is, and is at"; `mai` "ไม่ and ไหม: not, and yes/no questions"; `question-words` "Question words stay in place"; `special` "Special spellings and reading sentences"; `food` "Ordering food and drink"; `can-want` "ได้ and อยาก: can and want"; `time-words` "Time words: แล้ว, กำลัง, จะ". The rest keep the roadmap title.
- **Widened:** `pronouns` also teaches the owner after the noun (เพื่อนผม) and kinship terms as "you" (§2.3); `numbers` also reads Arabic digits on price tags; `finals` carries the tone rules without tone marks for all three classes (the roadmap's "live and dead syllables" is exactly that); `can-want` adds ต้อง (must); `time-words` adds เคย and ยัง / หรือยัง; `feelings` adds เป็น with illnesses and the pharmacy.
- **Added (2)**, each with an empty `roadmap` field:
  - `this-that` (after `tone-marks`, two lessons after `classifiers`): นี่ / นี้ / นั่น / นั้น / โน่น / โน้น and ของ. Demonstratives and possession are in neither the roadmap nor its grammar items, yet อันนี้, เสื้อตัวนี้ and ของใคร are needed for shopping and food, and they carry strand (b) of the standing rule.
  - `requests` (after `can-want`): ขอ … หน่อย, ช่วย … หน่อย (ได้ไหม), นะ, ด้วย, อย่า, เชิญ. Travellers and partners need polite requests early; the CUHK course has a "May I…?" unit.
- **Not added:** a separate tones-in-script lesson (`finals` and `tone-marks` cover it), a dialects lesson (one paragraph in lesson 1).

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and survival** (lessons 1–4) | | | |
| 1 | `tones` | The five tones | th-tones | Mid, low, falling, high and rising on one syllable (มา ม้า หมา; ใกล้ / ไกล; ข้าว / ขาว / เขา); how the romanization marks them; a question keeps its tones. Trap: everything said flat, mid and low confused (Wayland & Li 2008), an English rise laid over ไหม and คะ. | Tones and vowel length |
| 2 | `sounds` | Sounds: aspiration, long and short vowels | th-sounds | Unaspirated g, dt, bp, j against aspirated kh, th, ph, ch (ไก่ / ไข่, ปา / พา, ตา / ทา); ng at the start of a word (งาน, งู); the vowels ue, oe, ae, aw; long against short (ดู / ดุ, ขาด / ขัด); finals held, not released (นก, บาท). Trap: an English puff on ป and ต, ph read as f, th as in "think" (Pater 2003). | Tones and vowel length |
| 3 | `greetings` | Hello, thank you, sorry: ครับ and ค่ะ | th-greetings | สวัสดี, ขอบคุณ, ขอโทษ, ไม่เป็นไร, ยินดีที่ได้รู้จัก, สบายดีไหม; ครับ for male speakers, ค่ะ (statements) and คะ (questions) for female speakers; the wai; คุณ + first name. Trap: ค่ะ in a question, a man saying ค่ะ, "you're welcome" copied word for word. | Greetings and politeness |
| 4 | `numbers` | Numbers and money | th-numbers | 0–10, 11–99 (สิบเอ็ด, ยี่สิบ, ยี่สิบเอ็ด), ร้อย, พัน, หมื่น, แสน, ล้าน; prices in บาท and เท่าไร; Arabic digits on price tags, read in Thai. Trap: สองสิบ for 20, หนึ่ง for the 1 in 21, the tones of สอง สาม สี่ ห้า เก้า. | Numbers and money |
| | | **Stage 2: Reading Thai, with first sentences** (lessons 5–16) | | | |
| 5 | `consonants` | Consonants and the three classes | th-consonants | How the script works (consonant first, vowels around it, no spaces); letter names (ก ไก่); about 30 common consonants in three classes (mid ก จ ด ต บ ป อ; high ข ฉ ถ ผ ฝ ส ห; low ค ง ช ซ ท น พ ฟ ม ย ร ล ว); same sound, different class (ข / ค, ส / ซ, ถ / ท, ผ / พ); rare letters shown for recognition only. Trap: expecting one letter per sound; trying to learn all 44 at once. | Consonants: mid and high class |
| 6 | `vowels` | Vowels and where they sit | th-vowels | Vowels before (เ แ โ ใ ไ), after (า), above (ิ ี ึ ื ั) and below (ุ ู) the consonant, and around it (เ-ือ, เ-ีย, -ัว); long and short pairs; อ as a silent carrier; เ is written first but said after the consonant. Trap: reading เ before the consonant; ignoring length. | Vowels and tone marks |
| 7 | `pronouns` | Pronouns and polite particles | th-pronouns | ผม / ฉัน / ดิฉัน, คุณ, เขา, เรา, พวก…; พี่ and น้อง as "you" and "I"; dropping pronouns once the topic is clear; ครับ, ค่ะ, คะ, นะ at the end; the owner after the noun (เพื่อนผม). Trap: ผม and คุณ in every sentence; a male speaker with ฉัน or ค่ะ; ผมเพื่อน for "my friend". | People and family |
| 8 | `finals` | Final consonants: live and dead syllables | th-finals | Eight final sounds (k, t, p, m, n, ng, w, y) written with many letters (บาท, รถ, ลูก, อาหาร); live and dead syllables; the tone rules with no tone mark for each class (มา mid, ขา rising, จาก low, รัก high, ราก falling). Trap: released final stops; final ร and ล read as r and l (อาหาร is aa-hǎan). | Consonants: low class |
| 9 | `pen` | เป็น, คือ, อยู่: is, and is at | th-pen | เป็น + job, role or nationality (ผมเป็นครู), คือ to identify or define (นี่คือ…), อยู่ for where (ห้องน้ำอยู่ที่ไหน); no "is" before describing words (อาหารอร่อย); ไม่ใช่ to deny a noun. Trap: ผมเป็นหิว, ผมเป็นที่บ้าน, ไม่เป็นครู for "not a teacher". | About me |
| 10 | `classifiers` | Classifiers: counting things | th-classifiers | Noun + number + classifier (หนังสือสองเล่ม, แมวสามตัว, คนห้าคน); คน, ตัว, อัน, เล่ม, ใบ, คัน, แก้ว, ขวด, จาน, ชิ้น; กี่ + classifier; noun + classifier + นี้; อัน when unsure. Trap: สองหนังสือ (English order, no classifier). | Counting with classifiers |
| 11 | `tone-marks` | Tone marks and the tone rules | th-tone-marks | ไม้เอก ่ and ไม้โท ้ on each class (ไข่ low, ไม่ falling; ข้าว falling, ม้า high), ไม้ตรี ๊ and ไม้จัตวา ๋ on mid-class letters only (โต๊ะ, ก๋วยเตี๋ยว); the whole tone chart; reading new words aloud. Trap: "่ means low tone" (on a low-class letter it gives a falling tone; ThaiPod101 mistake 3). | Vowels and tone marks |
| 12 | `this-that` | นี้, นั้น, ของ: this, that and whose | (added) | นี่ / นั่น / โน่น alone ("this is…"); noun + classifier + นี้ / นั้น / โน้น (เสื้อตัวนี้, อันนี้); ของ for owners (บ้านของผม, บ้านผม); ของใคร. Trap: English order (นี้เสื้อ, ผมของบ้าน); นี่ and นี้ mixed up. | Describing things |
| 13 | `mai` | ไม่ and ไหม: not, and yes/no questions | th-mai | ไม่ + verb or describing word (ไม่ชอบ, ไม่เผ็ด); ไหม at the end for yes/no questions; answering with the verb (ชอบ / ไม่ชอบ), ใช่ / ไม่ใช่ only for "is it…?"; หรือเปล่า; ไม่ / ไหม / ใหม่ / ไม้ by tone. Trap: ใช่ as "yes" to everything; a rising voice instead of ไหม; ไม่ after the verb. | Traps for English speakers |
| 14 | `clusters` | Clusters and leading consonants | th-clusters | True clusters (ครับ, ใคร, ปลา, กล้วย, ตรง, ขวา); leading ห (หมา, หนึ่ง, ไหน, ใหญ่) and leading อ (อยู่, อยาก, อย่า, อย่าง); hidden vowels (สบาย, ตลาด, ขนม, ถนน). Trap: saying the h of หมา; the wrong tone on the second syllable of ตลาด and ขนม. | Directions and places |
| 15 | `question-words` | Question words stay in place | th-question-words | อะไร, ใคร, ที่ไหน, เมื่อไร, เท่าไร, ทำไม, ยังไง, กี่ + classifier, อันไหน; the question word sits where the answer goes (คุณกินอะไร); no ไหม with a question word. Trap: อะไรคุณกิน; ไหม added after ที่ไหน. | Questions and requests |
| 16 | `special` | Special spellings and reading sentences | th-special | Silent letters under ์ (เบียร์, ไมค์); ทร said s (ทราบ) and silent ร (จริง); long vowels the spelling hides (น้ำ, ได้, เก้า) and short ones (เล่น, ต้อง, เงิน); ๆ and ฯ; reading a menu line with no spaces from words you know; the space between phrases. Trap: sounding out every letter; hunting for word breaks letter by letter. | Food and drink |
| | | **Stage 3: First sentences** (lessons 17–19) | | | |
| 17 | `food` | Ordering food and drink | th-food | ขอ… / เอา…; dishes (ข้าวผัด, ผัดไทย, ส้มตำ, ต้มยำ), tastes (เผ็ด, เปรี้ยว, หวาน, เค็ม), ไม่เผ็ด / เผ็ดนิดหน่อย; calling staff (น้องครับ / น้องคะ, ขอโทษครับ / ค่ะ); เช็คบิลด้วย, ห่อกลับบ้าน; drinks with classifiers (กาแฟสองแก้ว). Trap: ร้อน for spicy; กาแฟสอง with no classifier. | Food and drink |
| 18 | `family` | Family and jobs | th-family | พ่อ แม่ พี่ น้อง ลูก สามี ภรรยา แฟน; older and younger siblings (พี่ชาย, น้องสาว), มีพี่น้องกี่คน; jobs with เป็น or ทำงานที่…; age with อายุ (อายุสามสิบปี). Trap: no plain "brother" or "sister" without age; เป็น before อายุ. | People and family |
| 19 | `compare` | Describing and comparing: กว่า, ที่สุด | th-compare | Describer after the noun (บ้านใหญ่, รถสีแดง); มาก after it (สวยมาก); กว่า (แพงกว่า), ที่สุด, เท่ากัน, เหมือนกัน; no "more" word before the describer. Trap: ใหญ่บ้าน, มากสวย, มากกว่าแพง. | Describing things |
| | | **Stage 4: Everyday life** (lessons 20–26) | | | |
| 20 | `time` | Telling time and daily routine | th-time | The Thai clock (ตีหนึ่ง, หกโมงเช้า, เที่ยง, บ่ายสองโมง, หนึ่งทุ่ม, เที่ยงคืน) and 24-hour นาฬิกา for recognition; days of the week; routines (ผมตื่นหกโมงเช้า). Trap: English 12-hour counting (2 p.m. is บ่ายสองโมง, 7 p.m. is หนึ่งทุ่ม). | Time and days |
| 21 | `time-words` | Time words: แล้ว, กำลัง, จะ | th-time-words | Verbs never change; จะ before the verb for later, กำลัง (… อยู่) for now, แล้ว at the end for done; เคย for "ever"; ยัง, ยังไม่, หรือยัง. Trap: a "past" word on every past verb; answering กินข้าวหรือยัง with ใช่. | Time and days |
| 22 | `can-want` | ได้ and อยาก: can and want | th-can-want | อยาก + verb (อยากไปทะเล), อยากได้ + thing; verb + ได้ for can (พูดภาษาไทยได้), ไม่ได้ for can't; ได้ไหม to ask; ต้อง for must. Trap: ได้ before the verb for "can" (ได้ไป means "got to go"); อยาก + noun with no verb. | Getting around |
| 23 | `requests` | Asking politely: ขอ, ช่วย, หน่อย | (added) | ขอ + thing (+ หน่อย) for "may I have"; ช่วย + verb + หน่อย (ได้ไหม) for "could you"; softeners นะ and ด้วย; อย่า for "don't"; เชิญ for "go ahead". Trap: a bare verb as an order sounds blunt; "please" as one word (กรุณา belongs on signs). | Questions and requests |
| 24 | `directions` | Directions, places and transport | th-directions | … อยู่ที่ไหน; ซ้าย, ขวา, ตรงไป, เลี้ยว, ข้างหน้า, ตรงข้าม, ใกล้ / ไกล; taxi, tuk-tuk and BTS phrases (ไป…, จอดตรงนี้, เปิดมิเตอร์ได้ไหม); no "to" after ไป (ไปตลาด). Trap: ใกล้ and ไกล by tone; ที่ไหนห้องน้ำ. | Directions and places |
| 25 | `shopping` | Shopping: clothes and colors | th-shopping | ราคาเท่าไร, ลดได้ไหม, ลองได้ไหม; clothes with their classifiers (เสื้อตัวนี้, รองเท้าคู่นี้); colors after the noun (เสื้อสีแดง); แพงไป, ใหญ่ไป; paying (เงินสด, สแกนได้ไหม). Trap: สีแดงเสื้อ; ฟิต for "fits well". | Shopping and colors |
| 26 | `feelings` | Feelings and health | th-feelings | Feelings as describing verbs with no เป็น (ผมเหนื่อย, ฉันดีใจ); ไม่สบาย, ปวด + body part, เจ็บ, เป็นหวัด / เป็นไข้ (เป็น with illnesses); แพ้…; at the pharmacy (ร้านขายยา, มียา…ไหม). Trap: ผมเป็นเหนื่อย, though เป็นหวัด is right; ร้อน for a fever. | Health and feelings |

Stages: 1 "Sounds and survival" = lessons 1–4; 2 "Reading Thai, with first sentences" = lessons 5–16; 3 "First sentences" = lessons 17–19 (food, family, compare); 4 "Everyday life" = lessons 20–26.

Per-lesson notes for writers:
- Every set satisfies §7: two `or` and two `ty` hinges, and from `greetings` on one tone `mc` item.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: เป็น against no เป็น, ไม่ against ไหม, a classifier, ค่ะ against คะ, a question word in place.
- `ty` and `or` prompts with a gendered particle or "I" carry "(male speaker)" or "(female speaker)" (§2.2); prompts with "you" follow §2.3.
- Accepted answers list: with and without the particle (for the cued gender), with and without the pronoun where natural, with and without ของ (บ้านผม | บ้านของผม), เท่าไร and เท่าไหร่, and the unspaced twin of every spaced Thai answer (§10.4).
- Lesson bodies are in English with the Thai in `<b>` and the pron in `<i>` at first mention (§2.5). Example rows `{{ex:Thai|pron|English}}` take the generated pron.
- Script lessons (`consonants`, `vowels`, `finals`, `tone-marks`, `clusters`, `special`) teach with tables (`<div class="tbl">`, `class="k"` on Thai cells) and example rows of real words; every new letter or vowel shape appears in at least one example row so the voice says it.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards). Card shape: `target | pron | meaning | note`.
- `target`: Thai script, no spaces inside phrases (a space only between phrases); counted nouns with their classifier where natural (กาแฟสองแก้ว).
- `pron`: generated (§6). Never typed.
- `meaning`: short American English. Gendered phrases say "(male speaker)" / "(female speaker)".
- `note`: one English line, or empty for at most a quarter of a deck. Tone twins, traps, spoken forms (*mái* for ไหม) and what a phrase is for go here.

**Groups, in order:**

| Group | Decks |
|---|---|
| Sounds and script | Tones and vowel length · Consonants: mid and high class · Consonants: low class · Vowels and tone marks |
| First steps | Greetings and politeness · People and family · About me · Numbers and money |
| Everyday words | Counting with classifiers · Food and drink · Describing things · Time and days |
| Out and about | Directions and places · Getting around · Shopping and colors · Health and feelings |
| Conversation | Questions and requests · Traps for English speakers |

**Script decks work as ordinary decks** (no letter-drill machine needed, §10.1):
- **Tones and vowel length** (about 18): each card is one member of a tone or length set, and its note names the others; meanings must differ clearly. Sets: มา ม้า หมา; ไม่ ไม้ ใหม่ ไหม; ข้าว ขาว เขา; ใกล้ ไกล; ไก่ ไข่ (aspiration, same tone); เสือ เสื้อ เสื่อ; ป่า ป้า; ห้า หา; ดู ดุ; เข้า ข้าว (length); สวย ซวย.
- **Consonants: mid and high class** (about 17) and **Consonants: low class** (about 18): the target is the letter, a space, and its traditional name word (ก ไก่, ข ไข่, ค ควาย); the generator reads the lone letter as its name (*gaaw gài*). Mid: ก จ ด ต บ ป อ (plus ฎ ฏ in the lesson table only). High: ข ฉ ฐ ถ ผ ฝ ศ ษ ส ห. Low: ค ง ช ซ ญ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฮ (ฆ ฌ ฑ ฒ ฬ in the lesson table only; ฃ ฅ are obsolete and only named). Meanings: "letter g, as in gài (chicken)"; the note gives the class and the English-reader trap.
- **Vowels and tone marks** (about 18): one real word per vowel shape (ตา, ดี, ดู, มือ, เด็ก, แม่, โต๊ะ, ขอ, เธอ, เรียน, เรือ, ตัว, ไป, ใจ, ทำ, เขา, จะ) and per tone mark (ไม่, ได้, โต๊ะ, จ๋า); a lone vowel symbol is never a card (the voice cannot read it).
- **Traps for English speakers** (about 18): about 6 "no เป็น" and word-order cards (ผมหิว, อาหารอร่อย, บ้านผม, เสื้อตัวนี้); about 6 false friends (ฝรั่ง, ฟิต, โอเวอร์, แอร์, อิ่มแล้ว, เผ็ด); about 6 politeness and greeting traps (ไปไหน, กินข้าวหรือยัง, ไม่เป็นไร, ค่ะ / คะ, น้องครับ to call a server, เกรงใจ with a note).
- Within a deck no two cards share a meaning (validator).
- A phrase card's target is what the voice reads: no English, no brackets, no slashes.
- Everything in Traps and in the politeness notes is [inference] plus the practitioner sources in §4, so it is in the native-check list (§11).

**Localisation.**
- **Names:** Thai learner characters with common first names and nicknames: สมชาย, มาลี, สมศรี, วิชัย, นิด, ต้น, ฝน, แก้ว, นก. The English-speaking learner characters have short names that Thai spells simply: ไมค์ (Mike), แอนนา (Anna), จอห์น (John), เจน (Jane), เดวิด (David). People are addressed as คุณ + first name (คุณสมชาย), never by surname.
- **Places:** กรุงเทพฯ, เชียงใหม่, ภูเก็ต, พัทยา, อยุธยา; Bangkok areas สุขุมวิท, สีลม, สยาม, ข้าวสาร; the BTS (รถไฟฟ้า, บีทีเอส), เซเว่น. The learner is from อเมริกา (คนอเมริกัน); avoid US city names in Thai script (their Thai tones are irregular and not in the word list).
- **Food:** ผัดไทย, ส้มตำ, ต้มยำกุ้ง, ข้าวผัด, ข้าวมันไก่, ผัดกะเพรา, แกงเขียวหวาน, ก๋วยเตี๋ยว, ข้าวเหนียวมะม่วง, ชาเย็น, กาแฟเย็น, น้ำเปล่า, มะม่วง, ทุเรียน (add to the list if used).
- **Money:** baht, written with Arabic digits on price tags (50 บาท, 1,200 บาท) and said in Thai; realistic prices: street dish 50–80 บาท, coffee 60–90 บาท, taxi flag fall 35 บาท, BTS 17–62 บาท [inference; check, §11]. QR payment (สแกน, คิวอาร์) as the everyday way to pay.
- **Apps and daily life:** LINE (ไลน์), Wi-Fi (ไวไฟ), 7-Eleven (เซเว่น), Grab may appear only in English notes (no Latin letters in Thai strings).

**Five sample cards per deck** (all `pron` values generated by `respell.js` and checked against `pronPattern`):

**1. Tones and vowel length** (Sounds and script). Sets of words that differ only in tone or vowel length: มา / ม้า / หมา, ใกล้ / ไกล, ข้าว / ขาว / เขา. Lessons: `tones`, `sounds`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| มา | maa | to come | Mid tone: level, in the middle of your voice. |
| ม้า | máa | horse | High tone. มา, ม้า and หมา differ only in tone. |
| หมา | mǎa | dog | Rising tone: dips, then rises. Everyday word; สุนัข is formal. |
| ใกล้ | glâi | near | Falling tone. ไกล (glai, mid tone) means far. |
| ข้าว | khâao | rice | Falling tone, long vowel. ขาว (khǎao) is white, เขา (khǎo) is he or she. |

**2. Consonants: mid and high class** (Sounds and script). The mid-class and high-class letters, each with its traditional name word (ก ไก่, ข ไข่). Lessons: `consonants`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ก ไก่ | gaaw gài | letter g, as in gài (chicken) | Mid class. No puff of air: between g and k. |
| ต เต่า | dtaaw dtào | letter dt, as in dtào (turtle) | Mid class. Between d and t, no puff. |
| ป ปลา | bpaaw bplaa | letter bp, as in bplaa (fish) | Mid class. Between b and p, no puff. |
| ข ไข่ | khǎaw khài | letter kh, as in khài (egg) | High class. A k with a puff of air, as in "kite". |
| ส เสือ | sǎaw sǔuea | letter s, as in sǔuea (tiger) | High class. The everyday s letter. |

**3. Consonants: low class** (Sounds and script). The common low-class letters with their name words, and the sounds they share with high-class letters. Lessons: `finals`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ค ควาย | khaaw khwaai | letter kh, as in khwaai (buffalo) | Low class: same sound as ข, different tone rules. |
| ง งู | ngaaw nguu | letter ng, as in nguu (snake) | Thai words can start with ng: say "singing" without the "si". |
| ท ทหาร | thaaw thá-hǎan | letter th, as in thá-hǎan (soldier) | A t with a puff, as in "top"; never the th of "think". |
| พ พาน | phaaw phaan | letter ph, as in phaan (offering tray) | A p with a puff, as in "pie"; never f. |
| ม ม้า | maaw máa | letter m, as in máa (horse) | Low class; also a final m. |

**4. Vowels and tone marks** (Sounds and script). One short word for each vowel shape and each tone mark. Lessons: `vowels`, `tone-marks`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ตา | dtaa | eye | Long aa, written after the consonant. Also "grandfather" (mother's father). |
| เด็ก | dèk | child | Short e: เ before the consonant and ็ above it. |
| เรือ | ruuea | boat | The vowel uuea wraps the consonant: เ before, ื and อ after. |
| ไม่ | mâi | not | ไม้เอก ่ on a low-class letter gives a falling tone. |
| โต๊ะ | dtó | table | ไม้ตรี ๊ appears only on mid-class letters: high tone. |

**5. Greetings and politeness** (First steps). Hello, thank you, sorry and the polite particles, for male and female speakers. Lessons: `greetings`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| สวัสดีครับ | sà-wàt-dii khráp | hello (male speaker) | Also goodbye. Add a wai when an adult greets you with one. |
| สวัสดีค่ะ | sà-wàt-dii khâ | hello (female speaker) | ค่ะ has a falling tone in statements. |
| ขอบคุณครับ | khàawp-khun khráp | thank you (male speaker) | A woman says ขอบคุณค่ะ. |
| ขอโทษค่ะ | khǎaw-thôot khâ | sorry; excuse me (female speaker) | Also to get someone's attention. A man says ขอโทษครับ. |
| ไม่เป็นไร | mâi-bpen-rai | it's OK; never mind | The usual answer to ขอบคุณ and to ขอโทษ. |

**6. People and family** (First steps). Pronouns, kinship terms as "you" and "I", and family words. Lessons: `pronouns`, `family`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| พี่สาว | phîi-sǎao | older sister | Thai names siblings by age: พี่ older, น้อง younger. |
| น้องชาย | náawng-chaai | younger brother | There is no plain word for "brother". |
| เพื่อน | phûuean | friend | เพื่อนผม / เพื่อนฉัน: my friend (the owner comes after). |
| แฟน | faaen | boyfriend or girlfriend; partner | From English "fan". Often used for a spouse in casual speech. |
| ครอบครัว | khrâawp-khruua | family |  |

**7. About me** (First steps). Name, country, job, languages: introducing yourself with ชื่อ, เป็น and มาจาก. Lessons: `pen`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ผมชื่อไมค์ | phǒm chûue mai | My name is Mike. (male speaker) | ชื่อ works as a verb here: no เป็น. |
| ฉันมาจากอเมริกา | chǎn maa jàak à-mee-rí-gaa | I'm from America. (female speaker) | มาจาก = come from. |
| ผมเป็นคนอเมริกัน | phǒm bpen khon à-mee-rí-gan | I'm American. (male speaker) | คน + nationality word: a person from there. |
| ฉันเป็นครู | chǎn bpen khruu | I'm a teacher. (female speaker) | เป็น before a job or role. |
| พูดภาษาไทยได้นิดหน่อย | phûut phaa-sǎa thai dâai nít-nàwi | I can speak a little Thai. | No "I": Thai drops it when it is clear. |

**8. Numbers and money** (First steps). Numbers to a million and prices in baht. Lessons: `numbers`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| หนึ่ง | nùeng | one | Low tone. At the end of 21, 31… it becomes เอ็ด. |
| สอง | sǎawng | two | Rising tone. |
| ยี่สิบ | yîi-sìp | twenty | Not สองสิบ. |
| ยี่สิบเอ็ด | yîi-sìp-èt | twenty-one | The 1 at the end of a bigger number is เอ็ด. |
| ห้าสิบบาท | hâa-sìp bàat | fifty baht | Price tags show 50 บาท; say it in Thai. |

**9. Counting with classifiers** (Everyday words). Noun + number + classifier for people, animals, books, cups, bottles and more. Lessons: `classifiers`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| หนังสือสองเล่ม | nǎng-sǔue sǎawng lêm | two books | Noun, number, classifier: เล่ม counts books. |
| แมวสามตัว | maaeo sǎam dtuua | three cats | ตัว counts animals, and also shirts, tables and chairs. |
| กาแฟสองแก้ว | gaa-faae sǎawng gâaeo | two glasses of coffee | แก้ว = a glass. |
| คนไทยห้าคน | khon thai hâa khon | five Thai people | คน is both "person" and its classifier. |
| อันนี้ | an níi | this one | อัน counts small things; use it when you don't know the classifier. |

**10. Food and drink** (Everyday words). Dishes, tastes and the phrases for ordering and paying. Lessons: `special`, `food`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ข้าวผัดกุ้ง | khâao-phàt gûng | shrimp fried rice | The main word comes first: rice, fried, shrimp. |
| ไม่เผ็ด | mâi phèt | not spicy | When ordering: ไม่เผ็ดนะครับ / ไม่เผ็ดนะคะ. |
| น้ำเปล่า | náam-bplàao | plain water | น้ำ alone is water or any drink. |
| อร่อยมาก | à-ràwi mâak | very tasty | มาก comes after the word it makes stronger. |
| เช็คบิลด้วย | chék-bin dûuai | check, please | ด้วย makes the request softer. |

**11. Describing things** (Everyday words). Describing words after the noun, colors, this and that, and comparisons. Lessons: `this-that`, `compare`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| บ้านใหญ่ | bâan yài | a big house | The describer comes after the noun. |
| รถสีแดง | rót sǐi daaeng | a red car | สี (color) + color word, after the noun. |
| เสื้อตัวนี้ | sûuea dtuua níi | this shirt | Noun + classifier + นี้. |
| สวยมาก | sǔuai mâak | very beautiful |  |
| แพงกว่า | phaaeng gwàa | more expensive | กว่า after the describer: more … than. |

**12. Time and days** (Everyday words). Days, parts of the day, the Thai clock and time words. Lessons: `time`, `time-words`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| วันนี้ | wan-níi | today |  |
| พรุ่งนี้ | phrûng-níi | tomorrow |  |
| เมื่อวาน | mûuea-waan | yesterday |  |
| บ่ายสองโมง | bàai sǎawng moong | 2 p.m. | Afternoon hours count from บ่ายโมง (1 p.m.). |
| วันเสาร์ | wan-sǎo | Saturday |  |

**13. Directions and places** (Out and about). Places in town and the words for left, right, near and far. Lessons: `clusters`, `directions`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ห้องน้ำอยู่ที่ไหน | hâwng-náam yùu thîi-nǎi | Where is the bathroom? | ที่ไหน stays at the end, where the answer goes. |
| เลี้ยวซ้าย | líiao sáai | turn left |  |
| ตรงไป | dtrong bpai | go straight |  |
| ใกล้ไหม | glâi mǎi | Is it near? | ใกล้ has a falling tone; ไกล (far) a mid tone. |
| ตลาด | dtà-làat | market | Read ตะ-หลาด: the hidden vowel and the leading ต give ลาด a low tone. |

**14. Getting around** (Out and about). Taxis, tuk-tuks, the BTS and tickets. Lessons: `can-want`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ไปสนามบิน | bpai sà-nǎam-bin | to the airport | To a driver: ไป + place (+ ครับ / ค่ะ). No word for "to". |
| เปิดมิเตอร์ได้ไหม | bpòoet mí-dtooe dâai mǎi | Can you use the meter? |  |
| จอดตรงนี้ | jàawt dtrong-níi | stop here | Add ครับ / ค่ะ, or นะครับ / นะคะ. |
| รถไฟฟ้า | rót-fai-fáa | Skytrain (BTS) | บีทีเอส is also common. |
| ตั๋วหนึ่งใบ | dtǔua nùeng bai | one ticket | ใบ counts tickets. |

**15. Shopping and colors** (Out and about). Prices, bargaining politely, clothes and colors. Lessons: `shopping`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ราคาเท่าไร | raa-khaa thâo-rai | How much is it? | Often said เท่าไหร่ (thâo-rài). |
| ลดได้ไหม | lót dâai mǎi | Can you lower the price? | Polite bargaining at markets, not in malls. |
| ลองได้ไหม | laawng dâai mǎi | Can I try it on? |  |
| แพงไป | phaaeng bpai | too expensive | ไป after a describer: too much. |
| สีดำ | sǐi dam | black | Colors take สี: เสื้อสีดำ, a black shirt. |

**16. Health and feelings** (Out and about). How you feel, what hurts, and the pharmacy. Lessons: `feelings`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ปวดหัว | bpùuat-hǔua | headache; my head hurts | ปวด + body part. No "have". |
| ไม่สบาย | mâi-sà-baai | sick, unwell | Literally "not comfortable". |
| เหนื่อย | nùueai | tired | No เป็น: ผมเหนื่อย, ฉันเหนื่อย. |
| ร้านขายยาอยู่ที่ไหน | ráan-khǎai-yaa yùu thîi-nǎi | Where is a pharmacy? |  |
| ดีใจ | dii-jai | glad, happy |  |

**17. Questions and requests** (Conversation). Question words, yes/no questions and polite requests with ขอ and ช่วย. Lessons: `question-words`, `requests`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ไปไหน | bpai nǎi | Where are you going? | A friendly greeting among acquaintances, not nosy. |
| กินข้าวหรือยัง | gin khâao rǔue-yang | Have you eaten yet? | Also a friendly greeting. Answer กินแล้ว or ยัง. |
| ขอน้ำหน่อย | khǎaw náam nàwi | Could I have some water? | ขอ + thing + หน่อย. |
| ช่วยพูดช้าๆหน่อย | chûuai phûut cháa-cháa nàwi | Could you speak slowly, please? | ช่วย + verb + หน่อย. |
| พูดภาษาอังกฤษได้ไหม | phûut phaa-sǎa ang-grìt dâai mǎi | Do you speak English? |  |

**18. Traps for English speakers** (Conversation). False friends and word-for-word copies: เป็น with describing words, ฝรั่ง, ฟิต, อิ่ม, เผ็ด. Lessons: `mai`.

| Thai | `pron` | Meaning | Note |
|---|---|---|---|
| ผมหิว | phǒm hǐu | I'm hungry. (male speaker) | No เป็น before a describing word: not ผมเป็นหิว. |
| ฝรั่ง | fà-ràng | Westerner; guava | A neutral word for white Westerners; also the fruit. |
| ฟิต | fít | tight (clothes) | Not "healthy": กางเกงฟิต means the pants are too tight. |
| อิ่มแล้ว | ìm láaeo | I'm full | Not เต็ม, which is a full glass or bus. |
| เผ็ด | phèt | spicy | ร้อน is hot to the touch; spicy food is เผ็ด. |

## 10. Typing and script

### 10.1 The script stage (works with ordinary lessons and decks)

Six lessons and four decks, all ordinary: nothing depends on the Korean letter-drill machine. They are spread over lessons 5–16 (§8).

| Lesson (#) | Deck | What the learner can do after it |
|---|---|---|
| `consonants` (5) | Consonants: mid and high class | name and sound about 30 common consonants; knows the three classes and the pairs that share a sound (ข / ค, ส / ซ, ถ / ท, ผ / พ, ฝ / ฟ) |
| `vowels` (6) | Vowels and tone marks | find the vowel in a syllable wherever it sits (before, after, above, below, around) and say it long or short; read open syllables like ตา, ดี, ไป, เขา |
| `finals` (8) | Consonants: low class | read a closed syllable (บาท, รถ, คน, อาหาร), tell live from dead, and give the tone of any syllable **without** a tone mark |
| `tone-marks` (11) | Vowels and tone marks | give the tone of any syllable **with** a tone mark (ไม่, ข้าว, ม้า, โต๊ะ, ก๋วยเตี๋ยว) using the chart |
| `clusters` (14) | Directions and places | read true clusters, leading ห and อ, and hidden vowels (ครับ, หมา, อยู่, สบาย, ตลาด) |
| `special` (16) | Food and drink | read silent letters, the common irregular words, ๆ and ฯ, and a short menu or sign line with no spaces |

- **Recognition at A1, not handwriting.** The goal is to **read** every common letter and vowel shape, the four tone marks, and work out the tone of a simple word with the chart. No handwriting (the app has no handwriting input), no stroke order. Typing Thai is optional (§10.3).
- **How many letters:** 35 common consonants are taught actively; ฆ ฌ ฎ ฏ ฑ ฒ ฬ appear in the lesson tables for recognition (they occur in a few common words: ระฆัง, กฎ); ฃ ฅ are named as obsolete. All vowel shapes of §6.2 except the rare short diphthongs.
- **Tone rules order:** mid class first (in `consonants` and `vowels`: live = mid, dead = low), then high and low with live and dead syllables (`finals`), then the marks (`tone-marks`): the class-by-class order of the CUHK course.
- **The tone chart** (in `finals` and `tone-marks`, as a `tbl`): rows = mid / high / low (short) / low (long); columns = live no mark, dead no mark, ่, ้, ๊, ๋.
- **Letter decks as ordinary decks:** the target is the letter plus its name word (ก ไก่); the voice reads it, the pron shows *gaaw gài*, the meaning says "letter g, as in gài (chicken)". The deck typing quiz accepts the card's romanization as well as the Thai (`romaAlmost`), so it works with no Thai keyboard.
- **If the letter-drill machine is generalised** (request 12, §10.8), the same decks gain drills: "see a letter, tap its class", "hear a syllable, tap its tone", "see a word, tap its tone". Nothing in the lessons changes.

### 10.2 Reading order of a Thai syllable (what the lessons must say)

1. Find the consonant (the onset); a vowel written before it (เ แ โ ใ ไ) is still said after it.
2. Read the vowel around it and decide long or short.
3. Read the final, if any: only k, t, p, m, n, ng, w, y.
4. Decide live or dead, then the class, then the tone mark: that gives the tone.
5. Words run together; spaces separate phrases. Find known words first (`special`).

### 10.3 What a typed answer is

**Default: word tiles.** `profile.json` sets `tilesDefault: true` (the engine reads it, as for zh and ja). In tiles mode `mc` and `order` are unchanged; `fill` becomes a 4-option tap; `type` becomes tiles built from `a[0]` split on spaces plus `x`, so **`a[0]` is always written with spaces between words** (§10.4).

**Typing is optional**, through the existing "use tiles" switch:
- **Thai through a Thai keyboard.** iOS and Android ship a Thai keyboard (the standard Kedmanee layout); Windows and macOS have one too [inference]. Learners who add it type Thai directly. It arrives with no spaces.
- **Romanization for a Thai answer** (typing *khàawp-khun khráp* for ขอบคุณครับ): **on**. `profile.json` sets `pronAnswers: true`, `pronAnswersKeepSpaces: true` and `pronAnswersScript: "[\u0E01-\u0E4E]"`, the pipeline that the Hindi and Arabic courses use: `gen.js` runs `respell` on every accepted Thai answer of `type` and `fill` items, **keeping the author's spaces as word breaks**, and adds the result to the accepted answers; `validate.js` accepts a type answer that matches `pronPattern` (so an all-mid romanization such as *khon thai* passes). `romaAlmost: true` makes a romanized answer typed without tone marks (or with a long vowel typed short) "almost", and lets the deck typing quiz accept the card's pron.
- **Romanization items** (the sound lessons, romanization items in the script lessons, tone `fill` items): the accent bar types the toned vowels. Because a wrong tone mark also folds to "almost" under `romaAlmost`, every tone item is `'!strict'`.
- **The accent bar (`keys`)** is set to the 20 precomposed tone vowels (à â á ǎ è ê é ě ì î í ǐ ò ô ó ǒ ù û ú ǔ): each key inserts the whole vowel, so the learner types the vowel from the bar instead of the plain letter. The four combining tone marks would be shorter, but today a combining key is placed by the Vietnamese rule (`viSetTone`), which puts the mark on the second letter of a doubled vowel (*khaǎo*, *jaák*). When request 7 is built, `keys` becomes `"̀ ̂ ́ ̌"` (U+0300, U+0302, U+0301, U+030C).

**What the matcher does for Thai today** (checked in `src/app.html`; ✓ done, ✗ missing):
- ✓ NFC, trims, collapses spaces, strips . , ! ? ~ and quotes (`pracNorm`); NFC also fixes the order of a below vowel and a tone mark (ุ before ่).
- ✓ Thai tone marks are not in U+0300–036F, so a Thai answer with a wrong tone mark is wrong, not "almost"; `romaAlmost` applies its loose comparison only to answers outside the Thai range.
- ✓ romanized answers accepted (via the generated answers), marks optional as "almost" (`romaLoose`), and the deck typing quiz accepts the card's pron (`romaAlmost`).
- ✗ spaces between Thai words count (only Hangul, Japanese and Chinese ignore them): request 1. Until then every `ty` list carries the unspaced twin.
- ✗ a wrong romanization tone counts as "almost", like a missing one (`romaLoose` strips all marks): request 6. Until then tone items are `'!strict'`.
- ✗ tone keys placed for Thai: request 7.

### 10.4 Tiles: segmentation and spacing

- **The author supplies the tiles, by word, with single spaces**: `ขอบคุณ ครับ`, `ห้องน้ำ อยู่ ที่ไหน`, `หนังสือ สอง เล่ม`, `เสื้อ ตัว นี้`. Tiles never come from splitting Thai text.
- **Word breaks = the generator's words.** A writer who is unsure runs `node tools/target/th/respell.js "<Thai>"`: each space-separated pron word is one tile. In practice: particles are their own tiles (ครับ, ค่ะ, คะ, นะ, ไหม); classifiers and นี้ / นั้น are their own tiles; a number is one tile (ห้าสิบ); listed compounds are one tile (ห้องน้ำ, ร้านอาหาร, ขอบคุณ, ทำงาน); question words from the list are one tile (ที่ไหน, อะไร, เท่าไร); fixed expressions are one tile (ไม่เป็นไร).
- **Tile count:** 2–6 tiles in `or` items (PRACTICE-SPEC), at most 9 words in a `ty` answer (validator).
- **Spaced text appears only in practice tiles and `ty` answers.** Card targets, example rows, dialogues, `mc` options and `fill` sentences are written as Thai is written: no spaces inside a phrase.
- **No phrase spaces inside a tile.** `lib.tiles` splits on spaces, so a tile can never contain a real Thai phrase space; keep `or` and `ty` answers to one phrase.
- **`fill` items:** the `__` replaces one whole tile-word (เสื้อตัว__ for นี้), never part of a word.

### 10.5 `targetScript`

`[\u0E01-\u0E3A\u0E40-\u0E4Eàáâǎèéêěìíîǐòóôǒùúûǔ]` (in `profile.json` with JSON-escaped backslashes): Thai consonants, vowels and marks (U+0E01–0E3A, 0E40–0E4E; not the Thai digits ๐–๙ or ฿), plus the 20 tone-marked vowels of the romanization, so that romanization items in the sound and script lessons count as Thai text. Consequences:
- A romanized `or` answer must contain at least one tone mark (*glai mâak*, not *glai*): an all-mid romanization fails (§7). `ty` answers are also accepted when they match `pronPattern` (`pronAnswers` is on), so an all-mid typed romanization passes.
- English text does not match unless it has one of those accented vowels (*café*: keep such words out of answers).
- Card targets must still be Thai script (writer rule; the validator cannot tell a romanized card target from a Thai one).

### 10.6 Unicode, punctuation and spacing rules

- **Storage order:** leading vowel (เ แ โ ใ ไ) first, then the consonant, then a below or above vowel, then the tone mark, then a following vowel (ที่ = ท ี ่; น้ำ = น ้ ำ; เมื่อ = เ ม ื ่ อ). "Phinthu, then vowel, then tone" is the order Thai input expects; Unicode treats below vowels (class 103) and tone marks (class 107) as reorderable, so NFC puts ุ / ู before the tone mark (Unicode L2/18-216). Writers type, never paste from PDFs (which often store sara am or tone marks in legacy orders), and the validator's invisible-character check catches pasted U+200B.
- **Spaces:** none between words; one space between phrases or sentences, where English would put a comma or full stop (สวัสดีครับ ยินดีที่ได้รู้จัก). The W3C Thai layout note: "Spaces separate phrases, rather than words."
- **Punctuation:** no full stops or commas in Thai strings; questions are marked by particles, not "?" (a final ? is tolerated and ignored by the generator and the matcher). ๆ is attached to its word with no space (เด็กๆ, ช้าๆ), so that it stays in one tile (the Royal Institute's style puts spaces around ๆ [inference]; the course chooses the informal attached form for tiles). ฯ only in กรุงเทพฯ.
- **Numbers:** Arabic digits for prices and times on signs (50 บาท); never Thai digits; written-out numbers in lesson examples about numbers.
- **English text** keeps English punctuation, including notes that quote Thai ("Say ไม่เป็นไร to anyone.").

### 10.7 Fonts and line height

- **Thai font stack** for target text (`[lang=th]`: cards, tiles, examples, answer inputs): a **looped** font first, because the course teaches the traditional looped letter shapes that signs, menus and books use: `"Noto Sans Thai Looped", "Thonburi", "Leelawadee UI", "Noto Sans Thai", sans-serif`. Modern loopless UI fonts make ก, ด, ต and ถ harder to tell apart for a beginner [inference; fontpad.co.uk describes Noto Sans Looped Thai as designed for the looped style].
- **Line height:** Thai stacks an above vowel and a tone mark over a consonant (น้ำ, ที่, เปรี้ยว, ปู่ with a below vowel), so a line needs more room above and below than Latin text: line height 1.8 or more for Thai lines, no `overflow: hidden` on card fronts and tiles, tiles at least 48 px tall. Clipped tone marks change the word, so this is a correctness issue, not cosmetics.
- **Size:** card Thai at least 2× body size; letter cards (ก ไก่) larger.
- **Pron font:** the body font must contain ǎ ě ǐ ǒ ǔ (U+01CE–U+01D4); check, or the caron vowels fall back to another font mid-word.

### 10.8 What the lead needs to do in the engine and pipeline (priority order)

| # | Request | Kind | Why | What the course does if it is NOT built |
|---|---|---|---|---|
| 1 | **Ignore spaces between Thai characters when matching** (`pracMatch`): add `[\u0E00-\u0E7F]` to the rule that Hangul, Japanese and Chinese use; hide those spaces when a spaced `a[0]` is shown as the model answer. | extend the ko / ja / zh code to th | Tiles need spaced answers; Thai keyboards produce none. | Every `ty` list carries the unspaced twin (`ขอบคุณ ครับ|ขอบคุณครับ`); the model answer shows with spaces. |
| 2 | **Pron under tiles and `mc` options:** `gen.js` runs `respell` on each tile and option and stores it; the engine shows it in a small line under the tile, governed by the existing "pronunciation hints in practice" setting. | new | Practice is in Thai script from lesson 3, but the learner reads the script only from about lesson 11. | Tiles show Thai only. Writer rule: in lessons before `special`, every `ty` hint gives each Thai key word with its pron in brackets (`ขอบคุณ (khàawp-khun) · ครับ (khráp)`), and every tile word appears in an example row of the lesson. |
| 3 | **Thai font stack, looped font and line height on `[lang=th]`** (§10.7); `lang="th"` on card, tile, example and input elements. | extend the per-script font rules to th | Clipped tone marks change words; looped shapes are what learners must read. | System Thai fonts (often loopless); a risk of clipped marks at tight line heights. |
| 4 | **Validator runs `respell` on every card target and example row and compares with the stored `pron`** (FAIL on difference; a throw is a FAIL naming the word). | new (zh asked for the same) | The generator is the source of truth; this catches hand edits and stale rows. | Writers paste the generator's output; the lead runs `repron.js th` after every word-list change; the existing same-string check catches only cross-file drift. |
| 5 | **Keyboard note:** switch text "Use tiles (no Thai keyboard)"; on the first typed item a one-time note: "To type Thai, add the Thai keyboard, or type the romanization." | extend (zh / ja wording) | Learners do not know romanization is accepted. | Tiles stay the default (`tilesDefault` already works); few learners will try typing. |
| 6 | **"Almost" only for missing tone marks** in romanization, not for wrong ones (as `zhMissingOnly` does for pinyin), for courses with `romaAlmost`. | extend the zh code | *mǎa* (dog) for *máa* (horse) is a different word. | Every tone-bearing romanization `ty` and `fi` item is `'!strict'` (§7). |
| 7 | **Tone keys placed for Thai romanization:** a combining tone key puts the mark on the first vowel letter of the syllable before the caret (a syllable is the run between spaces or hyphens), replaces an existing mark, never stacks. | extend the vi / zh tone-key code | Today non-zh courses use the Vietnamese placement, wrong for doubled vowels. | `keys` stays the 20 precomposed tone vowels (longer bar, but correct). |
| 8 | **Voice check on the test devices:** does the `th-TH` voice read a lone consonant as its name (ก → กอ), ไหม, ๆ, Arabic digits (1,250) and ฯ as expected? | check | The voice is the model; letter cards depend on it. | If lone letters are read badly, letter-card targets become the spelled name (กอ ไก่) and the lead adds those names to the word list. |
| 9 | **Pronunciation display:** confirm that the existing "Show pronunciation hints in practice" and "Blur pronunciation hints in Browse" settings cover en-th cards and lesson example rows; add a lesson-row toggle if they do not. | check / extend | Learners who read Thai want to hide it (§6.5). | Romanization always shown in lessons. |
| 10 | **Learner setting "My polite words: ครับ / ค่ะ / show both"** (§2.2), used to pick the model answer of cued items and, later, to filter gendered cards. | new | Half the gendered content is for the other speaker. | Prompt cues carry the load; both card versions stay in the decks. |
| 11 | **Optional trailing particle:** accept an answer that equals an accepted answer plus a trailing นะ, ครับ, ค่ะ or คะ when the item is not cued for gender. | new | Learners add politeness, which is never wrong. | Writers list the variants (§8 notes). |
| 12 | **Generalise the letter-drill machine** to class and tone drills on the script decks (§10.1). | extend (ko) | More reading and listening practice. | The four script decks stay ordinary decks. |
| 13 | **No-code notes:** the PRACTICE-SPEC exception for romanization in the places listed in §7; `this-that` and `requests` have an empty `roadmap` field, so the roadmap preview will not show them unless the lead adds items; the course keeps its `HOLD` file until release. | — | — | — |

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The readings in the generator's word list** (`LEX` in `tools/target/th/respell.js`, about 710 entries, written in Thai): hidden vowels, leading consonants, silent letters, and above all **vowel length** where the spelling hides it. Checked against Wiktionary: ต้อง, ห้อง, เงิน, เล่น, เช่น, อร่อย, หน่อย (short); ไม้, ไหว้, ใต้, น้อย, ร้อย, เท้า, น้ำ (long). **Not checked** (the author's choice): short เล่ม, เต้น, เก่ง, เส้น, แต่งงาน, เพิ่ง, บ่อย, กล่อง, แผ่น, ส้อม, เซเว่น; long ได้, เก้า, เช้า, รองเท้า, เปล่า, ก็ (*gâaw*); and the words left as spelled where speech may differ: ให้, ใช้, ใส่, ใหม่, ไม่, ไข่, เข้า, เล่า, เก่า, เท่า, ท้อง, ห่อ, ต้อน. The tone rules themselves are standard and mechanical; a wrong reading is the only way to get a wrong tone.
2. **The spelling-vs-speech policy** (§2.1, §6.1): dictionary tones for ไหม, ฉัน, เขา (spoken high), careful r in ครับ. A native teacher may prefer the spoken *mái*.
3. **The romanization key's vowel spellings** beyond what ThaiPod101 shows (*aaw*, *uue*, *uuea* attested; *ae / aae*, *oe / ooe*, *iia*, *uua*, the glide spellings *aawi*, *ooei*, *uueai* and final ย = *i*, ว = *o / u* are this profile's own extension of that family). A learner using another book will see *ɛɛ*, *ɔɔ*, *ʉʉ*, *əə*, or Paiboon's *p* / *t* for the aspirated stops. Paiboon's own key was never read; its forms quoted on Wiktionary use *p* / *t* for the aspirated stops.
4. **The gender policy** (§2.2): ฉัน as the everyday female "I" with ดิฉัน formal; the claim that Thai has no neutral polite particle; คะ / ค่ะ usage.
5. **Politeness and address** (§2.3, §2.4): น้อง to call a server, พี่ / น้อง as "you", the wai note, ไม่เป็นไร as "you're welcome", ลาก่อน as bookish.
6. **The `greet` strings:** ฝันดีนะ (late night), อรุณสวัสดิ์, สวัสดีตอนบ่าย, สวัสดีตอนเย็น. The last three are used in announcements and apps but are partly translations of English greetings; most Thais say สวัสดี at any hour [inference].
7. **The sample cards and notes** in §9, especially เช็คบิลด้วย, ลดได้ไหม (and the note that bargaining is for markets), เปิดมิเตอร์ได้ไหม, ไปไหน and กินข้าวหรือยัง as greetings, ฝรั่ง as neutral, ฟิต and โอเวอร์, the prices in §9 localisation.
8. **Error zones without learner data** (§4.5–4.14): all practitioner or inference.

**Evidence that could not be opened, or was read only in part**
- **No production study.** All three studies opened (Wayland & Li 2008; Kaan et al. 2007; Pater 2003) measure perception, mostly by naive listeners; no study of what English-speaking *learners* of Thai say wrong, and no learner corpus, was found. Wayland & Guion (2003), *Applied Psycholinguistics*, and Burnham & Francis (1997) were seen only as described in Wayland & Li; the Cambridge page was not on the fetch allowlist. Curtin, Goad & Pater (1998) was seen only as cited in Pater (2003).
- **Vowel length:** practitioner sources only (ThaiPod101, Duke); no study opened.
- **Grammar errors:** commercial blogs (ThaiPod101, Listen & Learn, Ling) give mostly the right form, rarely the learner's wrong form; the wrong forms in §4 are reconstructed [inference]. Ling's tone-mark table mislabels ็ as a tone mark, so only its romanized examples were used.
- **Learners:** no survey of US adult Thai learners' motives; no MLA enrollment figure for Thai was read; the FSI category comes from a third-party copy; the 2024 visitor figure (1.03 million) is unsourced in the article that gives it.
- **Romanization:** Paiboon's key (the epdf copy failed); Wikipedia's article on Thai romanization was read through a mirror and says nothing about learner systems beyond "proprietary systems".
- **Typesetting:** the W3C Thai layout note gives no rules on line height or punctuation (those sections link elsewhere); the Unicode core spec chapter was not on the allowlist; the Royal Institute's spacing rule for ๆ was not opened.

**The roadmap and the brief**
- The brief's base text says to read "the `de` entry"; the lead's instruction says to use the `th` entry, which this profile does.
- `this-that` and `requests` have an empty `roadmap` field (request 13).
- `profile.json` adds five fields beyond the brief's shape, as the zh, ja, hi and ar profiles do: `tilesDefault: true`, `pronAnswers: true`, `pronAnswersKeepSpaces: true`, `pronAnswersScript` (the Thai range) and `romaAlmost: true`. These pipeline fields appeared in `gen.js` and `validate.js` while this profile was being written (for Hindi and Arabic); the profile was changed to use them.

**Engine and pipeline** (for the lead): §10.8, requests 1–13. The most important are 1 (spaces in Thai answers), 2 (pron under tiles), 3 (fonts and line height), 4 (validator runs the generator) and 6 (wrong tones not "almost").

**Not verified at all**
- Whether the `th-TH` device voices read lone letters, ไหม, ๆ and digits as intended (request 8).
- Whether learners can use generated romanization with spelling tones for ไหม / ฉัน / เขา while hearing high tones from native speakers.
- That the app's fonts contain the caron vowels and a looped Thai face (request 3).


## Sources

Web pages opened and used for this profile (2026-11-19):
- [Wayland, R. P. & Li, B. (2008). Effects of two training procedures in cross-language perception of tones. *Journal of Phonetics* 36, 250–267 (perception, naive listeners; cites Wayland & Guion 2003 and Burnham & Francis 1997)](https://slam.lin.ufl.edu/wp-content/uploads/sites/106/2020/03/paper15.pdf)
- [Kaan, E., Wayland, R., Bao, M. & Barkley, C. M. (2007). Effects of native language and training on lexical tone perception: an event-related potential study. *Brain Research* 1148, 113–122 (perception, naive listeners)](https://slam.lin.ufl.edu/wp-content/uploads/sites/106/2020/03/paper16.pdf)
- [Pater, J. (2003). The perceptual acquisition of Thai phonology by English speakers: task and stimulus effects. *Second Language Research* 19(3) (perception)](https://core.ac.uk/download/357537436.pdf)
- [ThaiPod101: The top 10 common Thai mistakes for learners to avoid (commercial blog)](https://www.thaipod101.com/blog/?p=3560)
- [ThaiPod101: All About #4, Thai pronunciation made easy (romanization key, commercial)](https://www.thaipod101.com/lesson/all-about-4-thai-pronunciation-made-easy?lp=98)
- [ThaiPod101: Thai alphabet (consonant names in its romanization, commercial)](https://www.thaipod101.com/thai-alphabet/)
- [ThaiPod101: What types of Thai romanization are there? (commercial)](https://www.thaipod101.com/lesson/thai-teachers-answer-your-questions-12-what-types-of-thai-romanization-are-there)
- [Listen & Learn: Common Thai grammar mistakes beginners make (commercial blog)](https://www.listenandlearn.org/blog/?p=6749)
- [Ling: Common Thai grammar mistakes (commercial blog; its tone-mark table mislabels ็ as a tone mark)](https://ling-app.com/blog/common-thai-grammar-mistakes/)
- [Duke Language School (2026): Thai pronunciation for beginners (commercial blog)](https://dukelanguage.com/2026/06/thai-pronunciation-for-beginners/)
- [Sublearn: Polite particles ครับ / ค่ะ (commercial)](https://sublearn.com/learn/th/grammar/polite-particles-khrapka)
- [Clozemaster: How to read and say Thai (RTGS-based guide; notes that other systems use bp, dt, g)](https://www.clozemaster.com/travel-phrases/thai/pronunciation)
- [University of Minnesota / ISDSI: Beginning Thai I syllabus](https://umabroad.prd.umn.edu/sites/umabroad.umn.edu/files/documents/thai-1001-syllabus-beg-thai-1.pdf)
- [Chinese University of Hong Kong: THAI1000 course outline](https://ling.cuhk.edu.hk/files/ml_course_outlines/2526_2/THAI1000.pdf)
- [Thai script guidebook (Veradej; author and year not shown on the file)](https://expatden.com/wlt/downloads/Thai-script-guidebook-Veradej.pdf)
- [Pew Research Center (2025): Facts about Thai in the U.S. (ACS 2021–23)](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-thai-in-the-u-s/markdown)
- [FSI language difficulty list (third-party copy of "FSI's Experience with Language Learning")](https://hezhigang.github.io/2020/12/10/language-difficulty-ranking-for-english-speaker)
- [Tourism Authority of Thailand (2017): American visitors to Thailand hit 1 million for the first time](https://www.tatnews.org/2017/12/american-visitors-thailand-hit-1-million-first-time/)
- [Aviation A2Z (2025): US tourist arrivals to reach 1.1 million in 2025 (2024 figure unsourced)](https://aviationa2z.com/index.php/2025/10/28/us-tourist-arrivals-to-reach-1-1-million-in-2025-in-thailand/)
- [Fontpad: Noto Sans Looped Thai & Lao (designers' page)](https://www.fontpad.co.uk/customfonts/noto-sans-looped/)
- [Wiktionary (2023 Kiwix mirror): เงิน, นั่งเล่น, เช่น (Paiboon, IPA and phonemic respelling with ็ for short vowels)](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99) and [นั่งเล่น](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99) and [เช่น](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%99)
- Wiktionary (2023 Kiwix mirror), further entries checked for vowel length: [อร่อย](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B8%AD%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%A2), [หน่อย](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%AD%E0%B8%A2), [ผลไม้](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89), [น้อย](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2), [ห้องน้ำ](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3), [ร้อย](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/A/%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2), [ไหว้](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89), [ใต้เท้า](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E0%B9%83%E0%B8%95%E0%B9%89%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2)
- [Wiktionary: ต้อง (Paiboon dtɔ̂ng, short vowel)](https://www.wiktionary.com/wiki/%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87)
- [Wikipedia: Romanization of Thai (mirror; "language learning books often use their own proprietary systems")](https://akarinohon.com/text/taketori.cgi/en.m.wikipedia.org/wiki/Romanization_of_Thai)
- [W3C (2024): Thai Layout Requirements, draft note](https://www.w3.org/TR/2024/DNOTE-thai-lreq-20240705/)
- [Unicode L2/18-216: Thai mark order and normalization](https://www.unicode.org/L2/L2018/18216-thai-order.pdf)

Opened but not usable: Cambridge page for Wayland & Guion (2003) (not on the fetch allowlist); GWU paper on Mandarin tone perception (about Thai and English speakers learning Mandarin, not Thai); epdf copy of Paiboon's *Improving Your Thai Pronunciation* (site error, so Paiboon's own key was never read); the Unicode core spec chapter 16 (not on the allowlist); a web-archive copy of the State Department FSI page (no text); doc.surf on Thai romanization (no learner systems described); en.wiktionary.org for ห้อง (site error) and other www.wiktionary.com entries (not on the allowlist).

Local project files read: `docs/briefs/target-profile-th.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-zh.md` (shape model, most sections), `tools/target/zh/profile.json`, `tools/target/ja/profile.json`, the heads of `tools/target/zh/respell.js` and `tools/target/es/respell.js`, `tools/target/lib.js`, `gen.js`, `validate.js`, `repron.js`, `packs/roadmaps.js` (entry `th`), the answer matcher in `src/app.html` (`pracNorm`, `foldAcc`, `accMissingOnly`, `pracMatch`, `kbT`), and the head of `docs/profiles/th.md` (reverse course; not used), and, at the end, the newer `gen.js` / `validate.js` and the `hi` / `ar` profile fields (`pronAnswersKeepSpaces`, `romaAlmost`) that appeared during the work. `docs/profiles/en-es.md` and the body of `en-ja.md` were not read; `en-zh.md` served as the shape model.
