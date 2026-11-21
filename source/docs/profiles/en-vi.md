# English speakers learning Vietnamese: course profile

Course `en-vi`: Vietnamese for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Vietnamese. Machine-readable twin: `tools/target/vi/profile.json`. It was generated from the same data as §8 and §9, so the two files agree. Pronunciation generator: `tools/target/vi/respell.js` (§6).

(`docs/profiles/vi.md` and `docs/profiles/vi.profile.json` belong to the reverse course, English for Vietnamese speakers. This profile does not use or change them. It does keep that profile's Vietnamese spelling conventions, NFC and the traditional tone-mark placement, so the two courses agree.)

**Evidence tags.**
- **[research-backed]**: an empirical study or dataset opened for this profile. The study is named. **(abstract only)** and **(other L1)** say how much of it was read and whether its learners were English speakers.
- **[curriculum convention]**: what syllabuses, textbooks, phrasebooks and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Vietnamese**. Every claim of that kind that a writer will copy into the course is listed for a native check in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant and voice:** Northern (Hanoi) Vietnamese, the roadmap's choice, with a `vi-VN` voice. Southern forms appear only in card notes (*má, ba, ngàn, cuốn, dạ, nha*), because many heritage learners hear them at home.
- **Register:** *tôi / bạn* is the textbook pair from lesson 5. *anh, chị, em* are taught in the same lesson as the real way to say "you" to someone. *cô, chú, ông, bà* (with *cháu*) come in `family`. *ạ, dạ, vâng* and *nhé* are polite add-ons, introduced in `pronouns` and used actively from `requests`.
- **Biggest traps (§4):** tones and marks; letter values (*d = z, đ = d, x = s, tr = ch*); the noun before its describer (*áo đỏ, nhà tôi, người Mỹ*); classifiers; *là* before adjectives; choosing the pronoun; English question order and intonation.
- **Standing rule (§7):** every set re-tests **(a) tone and vowel marks** and **(b) noun first, with its classifier**. The `why` lines carry fixed English keywords, and the keyword test was run on 40 sample lines.
- **Pronunciation aid (§6):** a generated English-letter respelling, one chunk per syllable, ending in one ASCII tone symbol: level has none, rising `/`, falling `_`, dipping `?`, broken `~`, heavy `.`. Examples: `seen chahw_`, `kahm? ern`, `fer?`, `vee-uht. nahm`. It is required on every card and example row. On 352 test words it made no errors against its own key (the author's judgment).
- **Lessons (§8):** 28 lessons. All 25 roadmap items are kept in roadmap order. Three are added: `classifiers`, `family` and `want-like`.
- **Decks (§9):** 18 decks in 5 groups, including "Tone pairs", "Traps for English speakers" and "Polite Vietnamese".
- **Typing (§10):** typing is the default. A missing mark counts as "almost", except on `!strict` items, where the mark is the point. The accent bar has `ă â ê ô ơ ư đ` plus five tone keys. Several engine changes are needed (§10.6).

## 2. Variant, register and voice

### 2.1 Variant: Northern (Hanoi) Vietnamese

- The roadmap names "Northern (Hanoi) Vietnamese", based on the VNU-ULIS Vietnamese programme, A1 to A2 ([ULIS, *Vietnamese Program A1–C2*](https://en.ulis.vnu.edu.vn/files/uploads/2025/01/Vietnamese-Program-A1-C2.pdf)) [curriculum convention]. The build plan keeps it.
- **Voice:** `ttsLang: "vi-VN"`. Spelling, vocabulary and the `pron` aid follow the Hanoi standard.
- **Why the North, although many US learners hear the South at home.** The University of Minnesota's new heritage courses note that Northern Vietnamese is the prestige form in print, while most Vietnamese spoken in the Twin Cities is Southern. For that reason those courses include all three regions ([UMN Language Center, 2025](https://cla.umn.edu/language-center/news-events/story/new-vietnamese-courses-heritage-learners-why-moment-matters)) [practitioner opinion].
  - This course keeps one variant for typing and the aid, because a learner cannot type or read two systems at A1 [inference].
  - Southern words and sounds go in card notes only. They are never an accepted answer, unless the item says "(southern)".
- **Main Southern differences (notes only).** The d / gi / r / v row is from [vncomp, *Regional differences*](https://vncomp.github.io/docs/alphabet/regionaldif) [practitioner opinion]. The rest is [inference] and is in the native-check list (§11).

| Feature | Hanoi (taught; the aid shows this) | South (card note only) |
|---|---|---|
| d, gi, r | all a z sound | d and gi like y; r an r-like sound |
| v | v | often like y |
| s / x | both s | s often sh-like, x = s |
| tr / ch | both ch | tr retroflex, ch = ch |
| hỏi / ngã tones | two different tones | merged (both dipping) |
| -n / -ng, -t / -c after some vowels | kept apart | often merged (*bạn* sounds like *bạng*) |
| -anh, -ach | `aing`, `aik` | closer to `ahn`, `aht` |
| words | bố, mẹ, nghìn, quyển, vâng, ốm (sick), lợn, bát, cốc | ba, má, ngàn, cuốn, dạ, bệnh, heo, chén, ly |
| softening particle | nhé, nhỉ | nha, hen |

**Vocabulary rule** [inference]: use the Hanoi word, and give the Southern one in the card `note` ("In the South: ly"). The one exception is *ly* (glass) beside *cốc*: both are common in Hanoi cafés, so both are accepted in typing where a glass is asked for.

### 2.2 Roadmap items changed by this variant

None. The variant is the roadmap's own. The changes in §8 come from the learners (§4, §5), not the variant.

### 2.3 Pronouns: who is "I" and who is "you"

Vietnamese has no neutral "you", and its "I" changes with the listener. Most "pronouns" are kinship words used in reciprocal pairs (*anh / em, chị / em, cô / cháu, chú / cháu, ông / cháu, bà / cháu*). *tôi* is "the only pronoun that can be used in polite speech" with anyone. *bạn* is for people of about your own age. To a stranger, use *anh* for a young or middle-aged man, *chị* or *cô* for a woman, and *ông / bà* for old people ([Wikipedia, *Vietnamese pronouns*, IPFS mirror](https://bafybeiaysi4s6lnjev27ln5icwm6tueaw2vdykrtjkwiphwekaywqhcjze.ipfs.ipfs.hypha.coop/wiki/Vietnamese_pronouns)) [curriculum convention]. *bạn* to an older person is the first of Kaiwa's "accidentally rude" mistakes, and *tôi* to elders and servers (*Cho tôi…*) is another ([Kaiwa, 2026](https://trykaiwa.com/blog/vietnamese-phrases-accidentally-rude-2026)) [practitioner opinion].

**Order in the course.**

| When | Taught actively (typed) | Recognition only |
|---|---|---|
| `pronouns` (lesson 5) | *tôi* (I), *bạn* (you, a peer); *anh* (a man a little older), *chị* (a woman a little older), *em* (anyone younger, either gender), with *em* as "I" when speaking to *anh / chị* | *cô, chú, ông, bà* named once in a table |
| `la`, `jobs` | third person *anh ấy, chị ấy, bạn ấy* (he, she); *chúng tôi* (we, without you) | *họ* (they), *chúng ta* (we, with you) |
| `family` (lesson 16) | *cô* (a woman of your parents' age; a female teacher), *chú* (a man of your parents' age), *ông, bà* (old people; grandparents), *cháu* (I, to them); *các bạn, các anh chị* (plural you) | *bác* (older than your parents), *thầy* (a male teacher), *con* (I, to your own parents) |
| `requests` and after | the right self-word in requests: *Cho em xin…*, *Cháu cảm ơn bà ạ* | *mình* (I, among close friends), *tớ / cậu* (young friends) |

Never taught: *tao / mày* (only between close friends, or hostile) [practitioner opinion, Kaiwa].

**Rules for writers** (these follow from §4.6 and TARGET-BRIEF's rule that prompts must lead to an accepted answer):
- **English "you" always needs a cue** in `ty` and `or` prompts, unless the lesson has fixed one:
  - (to a friend) → *bạn*
  - (to a man a little older) → *anh*
  - (to a woman a little older) → *chị*
  - (to someone younger) → *em*
  - (to a woman your parents' age) → *cô*
  - (to a man your parents' age) → *chú*
  - (to an old man) → *ông*; (to an old woman) → *bà*

  This is the en-it rule for *Lei*, applied to seven words.
- **English "I"** is *tôi* unless the prompt names the listener. When it does, list both the matching self-word and *tôi* in `a` (*Em cảm ơn chị* | *Tôi cảm ơn chị*), because *tôi* is never wrong, only distant. The model answer `a[0]` uses the self-word.
- **He / she:** *anh ấy* and *chị ấy* by default; *cô ấy* for a young woman is also common, so list it too. Never use *nó* for a person (it is for animals and children, and rude for adults).
- **Dialogues** follow the relationship.
  - Customer and stall-holder: *chị / em* or *anh / em*, depending on who is older.
  - Passenger and driver: *anh / em* or *chú / cháu*.
  - Student and teacher: *em / cô*.
  - A learner and an old neighbour: *cháu / bà*.
  - Two new acquaintances of the same age: *tôi / bạn*.
  - The card or row note says who is speaking to whom ("to a stall-holder a little older than you").
- **Names:** first name with the kinship word: *anh Minh, chị Lan, cô Hoa*. Never *ông Nguyễn* for "Mr. Nguyen" in speech: Vietnamese address people by the given name [inference].

### 2.4 Politeness particles

| Word | Use | When taught |
|---|---|---|
| *ạ* | Sentence-final, to someone older or senior: *Cảm ơn chị ạ*, *Cháu chào bà ạ* | `pronouns`, active from `requests` |
| *dạ* | Polite "yes?" when called, and polite opener of an answer (*Dạ, vâng ạ*); both regions, more in the South | `pronouns` (recognition), `requests` (active) |
| *vâng* | Polite "yes / OK" in the North (South: *dạ*) | `yes-no` |
| *nhé* | Softener: "OK?", "all right": *Đi nhé*, *Mai gặp nhé* (South: *nha*) | `requests`; seen in dialogues from `pronouns` |
| *ơi* | Calling someone: *Anh ơi!*, *Em ơi!* (a waiter, a driver) | `pronouns` |
| *xin* | Formal "please / may I": *Xin lỗi*, *Cho tôi xin…* | `pronouns` (*xin chào, xin lỗi*), `requests` |
| *mời* | Inviting, offering: *Mời anh ngồi* | `requests` |
| *nhỉ, à, hả* | Tag and surprise particles | recognition notes only |

[practitioner opinion: Kaiwa lists bare *Được* or *Ừ* to elders as rude, with *Dạ, được ạ* or *Vâng ạ* instead.] English never marks respect with a word like *ạ*, so the course models it in every exchange with an older person. Practice does not grade it, except in `requests`, where the prompt asks for politeness ("(politely, to an older woman)").

### 2.5 Greetings

- *Xin chào* is the safe textbook hello. People more often say *Chào* + kinship word (+ *ạ*): *Chào anh*, *Em chào chị ạ*.
- Time-of-day greetings (*Chào buổi sáng*) are translations of English, used in apps and media, not between neighbours [inference]. The app's `greet` uses them anyway, because the slot is time-based; §11 flags this.
- *Ăn cơm chưa?* ("Have you eaten?") is a greeting among familiars, not an invitation. It is in the Traps deck.

### 2.6 Voice of the English text

- Write plain, friendly US English with US spelling, as in en-es and en-it. A `why` is one sentence.
- Vietnamese inside English text: in lesson bodies, put it in `<b>`. In plain-text fields (`why`, `hint`, notes), write it bare. Always write it with all its marks. Never add English endings to Vietnamese words: write "two *con* words", not "*con*s".
- Name the tones in English (§3), with the Vietnamese name once in `tones`: "the rising tone (*sắc*)".
- Sample voice lines:
  1. "*má* and *mà* are different words: the rising tone is 'mom' (in the South), the falling tone is 'but'."
  2. "The describing word comes after the noun: *áo đỏ* is 'a red shirt'."
  3. "Nice work! Review these cards tomorrow so they stick."

### 2.7 Vietnamese text conventions

- **Unicode NFC** in every file (precomposed *ệ*, not *e* + two combining marks). The reverse-course profile tested that a decomposed string fails keyword matches. The validator's `pn` and the practice matcher normalise to NFC, but the deck-typing matcher does not (§10.6).
- **Tone-mark placement: traditional**, as in the reverse course: *hòa, khỏe, thủy, hóa đơn*, not *hoà, khoẻ, thuỷ*. It only matters for *oa, oe, uy* with no final consonant. Until the matcher canonicalises (§10.6), every `a` list must include the other placement when an answer contains one of those words (*Anh khỏe không?|Anh khoẻ không?*).
- **Capitals:** sentence start, names of people and places (*Hà Nội, Việt Nam, Minh*), and the country part of nationalities and languages (*người Mỹ, tiếng Việt, tiếng Anh*). Days and months are lowercase (*thứ hai, tháng ba*).
- **Names:** Vietnamese names are written family name first (*Nguyễn Văn Minh*), and people are called by the last part (*anh Minh*).

## 3. Glossary

These terms are [curriculum convention]: the names in English-language Vietnamese courses, phrasebooks and the grammar references opened here. Use each term exactly and always the same way.

| Term to use | Do not use | Note |
|---|---|---|
| syllable | word (for a syllable) | Vietnamese writes one syllable per space-separated unit; many words have two (*cà phê*). |
| tone; tone mark | accent (for tones) | **standing-rule keyword** "tone mark" (§7) |
| level tone (ngang), falling tone (huyền), rising tone (sắc), dipping tone (hỏi), broken tone (ngã), heavy tone (nặng) | first tone, tone 1 | The English names are **standing-rule keywords**. Give the Vietnamese name once, in `tones`. "Broken" = rising with a catch; "heavy" = low, short, with a catch. |
| vowel mark (the hat on â ê ô, the curve on ă, the hook on ơ ư) | accent, diacritic | **keyword** "vowel mark". "breve", "circumflex" and "horn" may appear once, as glosses. |
| crossed d (đ) | barred d, d with a stroke | **keyword** "crossed d" |
| first consonant; last consonant | initial, coda, onset | "stop ending" for -p, -t, -c, -ch (they take only the rising or heavy tone) |
| vowel pair (iê / ia, uô / ua, ươ / ưa) | diphthong, triphthong | "diphthong" once, as a gloss in `vowels` |
| kinship word; kinship pronoun | honorific | *anh, chị, em, cô, chú, ông, bà, cháu* |
| pronoun | | *tôi, bạn, chúng tôi, chúng ta, họ* |
| classifier | measure word, counter | "counter word" once, as a gloss. **keyword** |
| noun; adjective; verb | stative verb | Say "adjectives work like verbs: no *là*". "stative verb" may appear once, as a gloss. |
| describing word comes after the noun; noun first | post-modifier, head-initial | **keywords** "after the noun", "noun first" |
| possessive *của* (of) | genitive | |
| demonstrative (*này, kia, đó, ấy*) | | "this / that word" in bodies |
| time word (*đã, đang, sẽ, rồi, chưa*) | tense, tense marker, aspect | Vietnamese verbs never change; say "*đã* shows the action is done", never "past tense of …". |
| question word (*gì, ai, đâu, nào, bao nhiêu, mấy, tại sao*) | interrogative, wh-word | |
| question ending (*không, chưa, phải không, à*) | question particle | "particle" once, as a gloss |
| polite ending (*ạ*); softener (*nhé*) | honorific particle, sentence-final particle | |
| comparative (*hơn*); superlative (*nhất*) | | |
| negative (*không*, *không phải là*, *chưa*) | negation | |
| the North / Hanoi; the South / Saigon | dialect | "regional word" for vocabulary |
| calque ("word-for-word copy from English") | | gloss it at first use |
| false friend | false cognate | Mostly French loans (*ga, ô tô, xà phòng*) and English look-alikes (*to, bia, phim*). |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]:
1. Items with fetched learner data come first.
2. Then items that recur in nearly every sentence and can be checked in typed practice.
3. Then lexical and lesson-local traps.

First-hand error data for English-speaking learners of Vietnamese is thin. Two learner studies were found, both read as abstracts only. The grammar ranking leans on a study of Japanese learners and on teaching lists (§11).

1. **Tones, tone marks and vowel marks**
   - Wrong → right:
     - *Chị có bạn không?* (Do you have a friend?) meant as "Are you busy?" → *Chị có bận không?*
     - *ma* (ghost) for *má* (mom, South) or *mà* (but)
     - *Cảm on* → *Cảm ơn*; *ca phe* → *cà phê*; *pho* → *phở*
     - *Anh khỏe không?* said with an English rise on *không*, which makes it sound like a rising tone → keep *không* level and let the word ask the question
     - *mot* (typed) → *một*; *Viet Nam* → *Việt Nam*
   - [research-backed, abstract only] Blodgett et al. (2008) compared American adult learners with native speakers of Northern and Southern Vietnamese, using a carrier-sentence task and pitch normalisation. Learners had the most trouble with the low falling-rising tones (most likely *hỏi*, and the merged *hỏi / ngã* of the South [inference]). They also had trouble with where tones start and with voice quality, which is the catch in *ngã* and *nặng* ([UMN Experts record](https://experts.umn.edu/en/publications/a-comparison-of-native-speaker-and-american-adult-learner-vietnam/)).
   - [research-backed, abstract only] Nguyen & Macken (2008), *SSLA* 30(1), tested nine factors in American learners' tone production: task, position, distance from the native model, markedness, emphasis, neighbouring tones, initial voicing, postvocalic elements and vowel height. They conclude that universal phonetics, L1 structure and L2-specific rules all shape tone accuracy. The abstract gives no per-tone figures ([Cambridge](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/abs/factors-affecting-the-production-of-vietnamese-tones-a-study-of-american-learners/E8ED67A42317CDBC61D5E0DAD20C1E7F)).
   - [curriculum convention] Wikipedia notes that Vietnamese "can be typed without tone marks, which Vietnamese speakers can usually guess depending on context" ([*Vietnamese language and computers*](https://en.wikipedia.org/wiki/Vietnamese_language_and_computers)). So a toneless typed answer is readable, which is why §10 grades it "almost" rather than wrong.
   - Design consequence: this is strand (a) of the standing rule (§7). There is a Tone pairs deck. The aid ends every syllable with a tone symbol (§6), and mark-twin items are `!strict` (§10).

2. **Letter values that mislead (reading aloud)**
   - Wrong → right (said):
     - *đi* read as "dee" is right, but *da* read as "dah" → "zah" (Hanoi)
     - *xin* read as "zin" → "seen"
     - *trường* read with English tr → "chuu-uhng"
     - *nhà* read as "n-hah" → "nyah"
     - *phở* read as "foe" → "fer" (no r sound), with the dipping tone
     - *Nguyễn* read as "new-yen" → `ngwee-uhn~`
     - *tôi* read with an English, aspirated t → an unaspirated t (`dt`); *thích* has the puff of air (`t`)
     - *bánh* read as "bank" → `baing/` (Hanoi)
   - [curriculum convention] The Hanoi values (*d* and *r* = [z], *x* = [s], *tr* = *ch* = [c], *đ* = [ɗ], *th* = [tʰ] against *t* = [t]) are from Wikipedia's *Vietnamese phonology* (2007 snapshot, [mirror](https://wikipedia2007.classicistranieri.com/en/v/i/e/Vietnamese_phonology.html)). The Lonely Planet phrasebook respells *tôi* as "doy" and *từ* as "dùhr", writing the unaspirated t as d ([Lonely Planet *Vietnamese Phrasebook* preview](https://media.lonelyplanet.com/shop/pdfs/vietnamese-phrasebook-8-preview.pdf)).
   - Design consequence: the aid (§6) respells every letter that misleads. `alphabet` and `syllables` teach the values. They are tested through the aid in `mc` items, because practice items carry no pron.

3. **The noun comes first: describing words, owners and *này / kia* follow it**
   - Wrong → right:
     - *Mỹ người* → *người Mỹ*
     - *đỏ áo* → *áo đỏ*
     - *tôi nhà* → *nhà tôi*
     - *Lan's sách* / *Lan sách* → *sách của Lan*
     - *này sách* → *quyển sách này*
     - *Việt Nam món ăn* → *món ăn Việt Nam*
   - [research-backed, other L1] Bui My Hanh (2009) analysed more than 120 final exam papers of Japanese university learners of Vietnamese (Nagoya, 2005–2008). Word order was the most common error type, in noun phrases (*mua bưu thiếp mười hai tấm* → *mua mười hai tấm bưu thiếp*), verb phrases and questions ([*NUCB JLCC* 11(1)](https://www.nucba.ac.jp/themes/s_cic@cic@nucba/pdf/njlcc111/04hanh.pdf)). Japanese puts modifiers first, as English does for adjectives and possessors [inference]. No counts are given.
   - Design consequence: this is strand (b) of the standing rule (§7). Deck cards show nouns in short phrases (*áo đỏ, phở bò, nhà tôi*).

4. **Classifiers: missing, extra or wrong**
   - Wrong → right:
     - *hai mèo* → *hai con mèo*
     - *một sách* → *một quyển sách*
     - *cái mèo* → *con mèo*
     - *Tôi thích con gà* (said of chicken meat) → *Tôi thích thịt gà*
     - *sách này* → *quyển sách này* (both occur; the classifier is usual when pointing at one thing)
   - [research-backed, other L1] In Bui My Hanh (2009), classifiers were the second most common error. There were three kinds:
     - omission (*hai mũ* → *hai cái mũ*);
     - insertion where the noun is generic (*thịt con gà* → *thịt gà*);
     - the wrong classifier (*cái núi* → *ngọn núi*).
   - [curriculum convention] The roadmap has no classifier lesson. ULIS A1 lesson 7 lists "noun types" without naming classifiers (§11).
   - Design consequence: a lesson is added (`classifiers`), classifiers join strand (b), and cards show nouns with their classifier where one is natural (*con mèo, cái bàn, quyển sách*).

5. ***là* where English says "is"**
   - Wrong → right:
     - *Tôi là mệt* → *Tôi mệt*
     - *Cô ấy là đẹp* → *Cô ấy đẹp*
     - *Tôi không là sinh viên* → *Tôi không phải là sinh viên*
     - *Tôi là ở Hà Nội* → *Tôi ở Hà Nội*
     - *Tôi có 25 tuổi* / *Tôi là 25 tuổi* → *Tôi 25 tuổi* (written in words in the course: *hai mươi lăm*)
   - [curriculum convention] ULIS A1 lesson 4 lists the "adjective system" as a predicate in its own right (glossed "is" in the fetched summary), and *là* questions come separately in lessons 5 and 6. The errors themselves are [practitioner opinion / inference]; no learner count was opened.
   - Design consequence: `la` and `adjectives` teach "là joins two nouns; an adjective needs no là". The Traps deck carries the pairs.

6. **Choosing the pronoun (and the self-word)**
   - Wrong → right:
     - *Bạn có khỏe không?* to a 60-year-old → *Bác có khỏe không ạ?* / *Ông có khỏe không ạ?*
     - *Anh ơi!* to a teenage waiter → *Em ơi!*
     - *Cho tôi một ly cà phê* to an older stall-holder → *Cho em một ly cà phê ạ* (*tôi* is not wrong, but distant)
     - *bà* for a 35-year-old woman → *chị*
     - *nó* for a person → *anh ấy / chị ấy*
   - [practitioner opinion] Kaiwa's list of accidentally rude phrases: *bạn* to older people, *Anh ơi* to someone younger, *Cho tôi* to elders and servers, bare *Được / Ừ* to elders.
   - Design consequence: §2.3 rules, a `family` lesson, and pronoun choice as the preferred "mixed neighbour" in the last two items of each set.

7. **English question habits: intonation, and moving the question word**
   - Wrong → right:
     - *Bạn là sinh viên?* (rising voice) → *Bạn là sinh viên phải không?* / *Bạn có phải là sinh viên không?*
     - *Gì bạn muốn?* → *Bạn muốn gì?*
     - *Ở đâu bạn sống?* → *Bạn sống ở đâu?*
     - *Ai là anh ấy?* → *Anh ấy là ai?*
     - *Bạn có thích phở?* → *Bạn có thích phở không?*
   - [research-backed, other L1] Bui My Hanh (2009) gives question word order as one of the word-order error types (*Bao xa Hồ Hoàn Kiếm cách đây?* → *Hồ Hoàn Kiếm cách đây bao xa?*).

8. **Time words instead of verb forms; *chưa* and *rồi***
   - Wrong → right:
     - *Anh ăn cơm chưa?* — *Không.* → *Chưa.* (not yet) / *Rồi.* (already)
     - *Tôi đã đang học* → *Tôi đang học*
     - "I went" translated as a different verb form; Vietnamese never changes the verb: *Hôm qua tôi đi chợ* (*đã* is optional when a time word is there)
   - [curriculum convention] ULIS A2 lesson 1 pairs *biết* with "has + verb + yet?" (*đã … chưa*). The error is [inference].

9. **Yes and no**
   - Wrong → right:
     - *Có* as a polite "yes" to everything → *Vâng* / *Dạ* to agree; *Có* answers *có … không* questions about having or doing
     - *Không* to *… chưa?* → *Chưa*
     - *Phải* / *Không phải* answer *phải không?*
   - [inference] No source was opened.

10. **Numbers and money**
    - Wrong → right:
      - *hai mười* → *hai mươi* (the tone changes)
      - *hai mươi năm* (25) → *hai mươi lăm*
      - *hai mươi một* → *hai mươi mốt*
      - *năm mươi ngàn* is fine in the South; in Hanoi say *năm mươi nghìn*
      - "50k" said as "fifty" → *năm mươi nghìn* (prices count thousands)
    - [inference] Standard teaching points. No source was opened.

11. **False friends and calques**
    - Wrong → right:
      - *ga* for "gas" → *xăng* (*ga* = train station, from French *gare*)
      - *bánh mì* for "a banh mi only" → it also means plain bread
      - *chè* for "tea" in the South → *trà* (in Hanoi, *chè* is also tea; everywhere it is a sweet dessert soup)
      - *Tôi là nóng* (I'm hot) → *Tôi nóng* / *Tôi thấy nóng*
      - *Bạn như thế nào?* for "How are you?" → *Bạn khỏe không?*
      - *ông / bà* for "Mr. / Mrs." with anyone → *anh / chị* for adults under about 50
    - [inference] Teaching lore and the author's knowledge. A native check is needed (§11).

12. **Plurals marked where Vietnamese does not**
    - Wrong → right:
      - *Tôi có các bạn ở Mỹ* → *Tôi có nhiều bạn ở Mỹ*
      - *hai những con mèo* → *hai con mèo*
    - [inference] Vietnamese nouns do not change for number. *các / những* are used only for a definite or particular plural.

## 5. Learners: who, why, what first

**Who**
- [research-backed] About 2.2 million people in the US identified as Vietnamese in 2021–23 (2.3 million in the Census Bureau's 2023 estimate). About 40% were US-born. Of those aged 5 and older, 72% speak Vietnamese at home and 24% speak only English at home ([Pew Research Center, *Vietnamese in the U.S.*](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-vietnamese-in-the-u-s/), from the ACS). That is a large pool of heritage learners: US-born children of Vietnamese-speaking homes.
- [practitioner opinion] UMN describes heritage learners as people who can often speak and understand more than they can read or write. It also says most diaspora speech is Southern (§2.1).
- [inference] The groups, probably in this order of size:
  - **heritage learners** who want to talk to parents and grandparents, read the marks, and fill gaps in politeness and pronouns;
  - **travellers** (Hanoi, Hội An, Hạ Long, Sài Gòn) and food lovers;
  - **partners and in-laws** of Vietnamese speakers;
  - **people who work in Vietnam or with Vietnamese colleagues**, and veterans' families.
  True beginners are the norm among non-heritage learners. Heritage learners are false beginners in speaking, but often real beginners in the written marks.

**Why they study**
- No survey of US learners' motives for Vietnamese was opened (§11). [inference] Family and identity come first, then travel and food, then partners, then work.

**What they need first** [inference]
1. **Hearing and making tones, and reading the marks.** Nothing else works without them, so the four sound lessons come first, as in the roadmap and ULIS A1 lessons 1–3 [curriculum convention].
2. **Greeting the right person the right way:** *Chào anh / chị / em / cô / chú / ông / bà*, *Cảm ơn … ạ*. Heritage learners need this most, and travellers meet it on day one.
3. **Ordering food and paying:** *Cho tôi / em…*, *phở, bánh mì, cà phê*, numbers in *nghìn*, *Bao nhiêu tiền?* So `want-like` is added and `numbers` sits in stage 3.
4. **Talking about themselves and their family:** *Tôi là người Mỹ*, *Tôi tên là…*, family words. Heritage learners also need the Southern family words (*ba, má*) in notes.
5. **Little grammar terminology:** Vietnamese has no conjugation or agreement, so lessons are short on rules and long on word order, classifiers and particles.

**Check of the roadmap's order against ULIS A1–A2** [curriculum convention]
- ULIS A1 has sounds (lessons 1–3), greetings, pronouns and kinship (4), polite words and *là* questions (5), jobs and nationality (6), demonstratives, "what", adjectives and *rất / quá* (7), "who" (8), numbers, *có*, *của* and comparatives (9), then verbs with time words and location (10).
- ULIS A2 has *biết* and *đã … chưa* (1), motion verbs (3), prices and currency (4), directions, transport and *vì … nên* (6), time (7) and dates (8). Polite requests come at the end (10).
- The roadmap follows this almost item for item, so this profile keeps its order. Changes for US learners:
  - Classifiers get their own lesson after `numbers`, where counting forces them (§4.4).
  - `family` follows `cua` (*mẹ tôi*). It completes the pronoun system with *cô, chú, ông, bà, cháu* (§4.6).
  - `want-like` (*muốn, thích, cần*, *Cho tôi…*) comes after `verbs`, because ordering food is a first need for travellers (§5).

## 6. Pronunciation aid (`pron`)

**Evidence.**
- No study comparing respelling, IPA and no aid for English-speaking learners of Vietnamese was found. The choice is [inference], as in the earlier courses.
- [curriculum convention] The Lonely Planet *Vietnamese Phrasebook* uses an English-letter respelling with Vietnamese tone marks placed on it (*phở* "fẻr", *tôi* "doy", *từ* "dùhr", *gặp* "gụhp"). It writes the unaspirated t as d, ơ as "er" and ư as "uhr", with the r not said. This profile follows the same ideas for ơ and the t / th contrast, but puts the tone in an ASCII symbol so that the aid is typable.
- [research-backed, abstract only] Blodgett et al. (2008): voice quality and starting pitch are part of what learners miss. A respelling cannot show either, so the tone symbol names the tone, and the lesson teaches what it sounds like.

**Options weighed.**

| Option | For | Against |
|---|---|---|
| (a) English-letter respelling + one ASCII tone symbol per syllable, generated | Fixes exactly the letters that mislead (§4.2: *d, đ, x, gi, r, tr, nh, ng, ph, th, t, -nh, -ch*). Typable and regex-checkable. Same idea as the Lonely Planet respelling. Generated, so the lint can compare it. | The vowels ơ, ư, â, ă have no English equivalent, and the tokens `er`, `uu`, `uh`, `a` are conventions to learn. It cannot show voice quality (the catch in *ngã* and *nặng*). |
| (b) IPA | Exact, including tones (Chao numbers). | US adult self-learners cannot read it [inference]. |
| (c) Tone-contour line only (no respelling) | The spelling already encodes the sounds. | Day-one learners misread *d, x, tr, nh, gi* (§4.2), and nothing would correct them. |
| (d) Respelling with Vietnamese tone marks on it (Lonely Planet style) | The learner meets the same five marks. | Not typable, and the pattern could not tell a pron from raw Vietnamese. |

**Decision: (a).** `pron: "required"`.
- The aid is **generated by `tools/target/vi/respell.js`**, never hand-written. `node tools/target/vi/respell.js "<text>"` prints `<text> -> <pron>`, and the module exports `respell` (also `pattern`, `syllable`, `EXC`). The same Vietnamese always gives the same `pron`, which is what the lint checks.
- Vietnamese has **no word stress** to mark: every syllable has its own tone. So, unlike es and it, there are **no CAPITALS** in this aid.
- **Recommended engine default** (as in es and it): shown in the first two stages. Blurred (tap to reveal) from `numbers` on, and the learner can turn it back on. Never in practice items (PRACTICE-SPEC).

### 6.1 The key (exact format)

**Format**
- One chunk per Vietnamese syllable. Chunks are separated by single spaces, so the pron has as many chunks as the Vietnamese has syllables.
- Only lowercase ASCII letters, plus one hyphen inside a chunk for a vowel pair (`vee-uht.`), plus at most one tone symbol at the end of each chunk.
- No capitals, no punctuation, no digits. Write numbers as words.

**Tones** (the symbol goes at the end of the syllable's chunk)

| Tone (Vietnamese name) | Mark in spelling | Symbol in the aid | Hanoi sound | Example |
|---|---|---|---|---|
| level (ngang) | none | none | mid, flat | ma → `mah` (ghost) |
| falling (huyền) | à | `_` | low, falling gently | mà → `mah_` (but) |
| rising (sắc) | á | `/` | mid to high, rising | má → `mah/` (mom, South) |
| dipping (hỏi) | ả | `?` | falls low, may rise again | mả → `mah?` (grave) |
| broken (ngã) | ã | `~` | rises, with a catch in the middle | mã → `mah~` (horse; code) |
| heavy (nặng) | ạ | `.` | low, short, ends with a catch | mạ → `mah.` (rice seedling) |

Mnemonics: `/` goes up; `_` is low; `?` is the hook of the "question" (*hỏi* = ask); `~` is the same squiggle as the mark; `.` is the dot below. Hanoi contours from Wikipedia (2007 snapshot): ngang 33; huyền 21, breathy for some speakers; hỏi 313; ngã 35 or 315, creaky; sắc 35; nặng 32 or 31, glottalized. "If the syllable is closed [by p, t, c, ch] only … sắc and … nặng" are possible [curriculum convention]. The generator enforces this.

**First consonants**

| Vietnamese | Aid | Example |
|---|---|---|
| b, h, l, m, n, v | as written | ba → `bah` |
| c, k | k | cá → `kah/`; kim → `keem` |
| qu | kw | quà → `kwah_` |
| ch, tr | ch (Hanoi: tr = ch) | chợ → `cher.`; trà → `chah_` |
| d, gi, r | z (Hanoi) | da → `zah`; giá → `zah/`; rau → `zow` |
| gi with no other vowel | z + ee | gì → `zee_` |
| đ | d | đi → `dee` |
| t | dt (no puff of air: between d and t) | tôi → `dtohy` |
| th | t (with a puff, like English t) | thích → `tik/` |
| ph | f | phở → `fer?` |
| kh | kh (a soft throat sound, as in Scottish loch) | không → `khohng` |
| g, gh | g (softer in Vietnamese) | gà → `gah_`; ghế → `gey/` |
| ng, ngh | ng (also at the start of a word) | ngủ → `ngoo?`; nghe → `ngeh` |
| nh | ny (as in canyon) | nhà → `nyah_` |
| s, x | s | sáu → `sow/`; xe → `seh` |
| p (loanwords) | p | pin → `peen` |

**Vowels**

| Vietnamese | Aid | Sound | Example |
|---|---|---|---|
| a | ah | long, as in father | ba → `bah` |
| ă | a (always followed by a consonant in the aid) | short ah | ăn → `an` |
| â | uh (always followed by a consonant or glide) | short uh, as in cup | cần → `kuhn_` |
| e | eh | as in bed | xe → `seh` |
| ê | ey | as in hey, but steady | quê → `kwey` |
| i, y | ee | as in see | đi → `dee`; ý → `ee/` |
| o | aw | as in law | to → `dtaw` |
| ô | oh | as in go, but steady | cô → `koh` |
| ơ | er | as in her, with no r sound | phở → `fer?` |
| u | oo | as in food | bún → `boon/` |
| ư | uu | say oo with spread lips, as in a smile | tư → `dtuu` |
| iê, ia, yê, ya | ee-uh | one syllable that glides | bia → `bee-uh`; Việt → `vee-uht.` |
| uô, ua | oo-uh | one syllable | mua → `moo-uh`; muốn → `moo-uhn/` |
| ươ, ưa | uu-uh | one syllable | người → `nguu-uhy_`; sữa → `suu-uh~` |
| o, u as a glide (oa, oă, oe, uê, uy, uâ, uơ, and the u of qu) | w | | hoa → `hwah`; khỏe → `khweh?`; thuê → `twey`; tuần → `dtwuhn_` |

**Glide endings** (ai and ay, ao and au differ in length, and the difference changes the word: *tai* ear, *tay* hand)

| Spelling | Aid | Example | | Spelling | Aid | Example |
|---|---|---|---|---|---|---|
| ai | ahy | hai → `hahy` | | ay | ai | tay → `dtai` |
| ao | ahw | sao → `sahw` | | au | ow | sau → `sow` |
| âu | uhw | đâu → `duhw` | | ây | ay | đây → `day` |
| eo | ehw | kẹo → `kehw.` | | êu | eyw | nếu → `neyw/` |
| iu | eew | chịu → `cheew.` | | oi | awy | nói → `nawy/` |
| ôi | ohy | tôi → `dtohy` | | ơi | uhy | mời → `muhy_` |
| ui | ooy | vui → `vooy` | | ưi, ưu | uuy, uuw | hưu → `huuw` |
| iêu, yêu | ee-uhw | nhiều → `nyee-uhw_` | | uôi | oo-uhy | tuổi → `dtoo-uhy?` |
| ươi | uu-uhy | mười → `muu-uhy_` | | ươu | uu-uhw | rượu → `zuu-uhw.` |

**Last consonants**

| Spelling | Aid | Example |
|---|---|---|
| m, n, ng, p, t | as written (p, t not released) | cơm → `kerm`; ngon → `ngawn`; ông → `ohng` |
| c | k | học → `hawk.` |
| -anh, -ach | aing, aik (Hanoi) | anh → `aing`; sách → `saik/` |
| -ênh, -êch | eyng, eyk | bệnh → `beyng.`; ếch → `eyk/` |
| -inh, -ich | ing, ik | xinh → `sing`; thích → `tik/` |

**Exceptions:** `EXC` in `respell.js` holds words that are not Vietnamese syllables. It now has *ok, pizza, taxi, wifi* and the learner names *Emma, Jack*. Use English names only in English prompts, and add any other name to `EXC` before use.

### 6.2 `pronPattern`

The pattern is built by `respell.js`'s `pattern()` from the same tables the generator uses. It is a list of every possible chunk, not a set of lookaheads. Shape:

```
^(?:ONSET)?(?:(?:OPEN-RIME)[/_?~.]?|(?:STOP-RIME)[/.])(?: (?:ONSET)?(?:(?:OPEN-RIME)[/_?~.]?|(?:STOP-RIME)[/.]))*$
```

ONSET is `b|ch|d|dt|f|g|h|k|kh|l|m|n|ng|ny|p|s|t|v|z`. OPEN-RIME is every vowel, glide and nasal ending token, with or without a leading `w`. STOP-RIME is every token ending in `p`, `t` or `k`, which must carry `/` or `.`. The full string (2,562 characters) is below and in `profile.json`. Compile it with the `u` flag.

```
^(?:ch|dt|kh|ng|ny|b|d|f|g|h|k|l|m|n|p|s|t|v|z)?(?:(?:wee-uhng|woo-uhng|wuu-uhng|ee-uhng|wee-uhm|wee-uhn|oo-uhng|woo-uhm|woo-uhn|uu-uhng|wuu-uhm|wuu-uhn|wee-uhw|woo-uhy|wuu-uhy|wuu-uhw|ee-uhm|ee-uhn|wee-uh|oo-uhm|oo-uhn|woo-uh|uu-uhm|uu-uhn|wuu-uh|ee-uhw|oo-uhy|uu-uhy|uu-uhw|wahng|wuhng|wehng|weyng|weeng|wawng|wohng|werng|woong|wuung|ee-uh|oo-uh|uu-uh|waing|ahng|wahm|wahn|wang|uhng|wuhm|wuhn|ehng|wehm|wehn|eyng|weym|weyn|eeng|weem|ween|awng|wawm|wawn|ohng|wohm|wohn|erng|werm|wern|oong|woom|woon|uung|wuum|wuun|wahy|wahw|wuhw|wehw|weyw|weew|wawy|wohy|wuhy|wooy|wuuy|wuuw|aing|wing|ahm|ahn|wah|ang|wam|wan|uhm|uhn|ehm|ehn|weh|eym|eyn|wey|eem|een|wee|awm|awn|waw|ohm|ohn|woh|erm|ern|wer|oom|oon|woo|uum|uun|wuu|ahy|wai|ahw|wow|uhw|way|ehw|eyw|eew|awy|ohy|uhy|ooy|uuy|uuw|ing|ah|am|an|eh|ey|ee|aw|oh|er|oo|uu|ai|ow|ay)[/_?~.]?|(?:wee-uhp|wee-uht|wee-uhk|woo-uhp|woo-uht|woo-uhk|wuu-uhp|wuu-uht|wuu-uhk|ee-uhp|ee-uht|ee-uhk|oo-uhp|oo-uht|oo-uhk|uu-uhp|uu-uht|uu-uhk|wahp|waht|wahk|wuhp|wuht|wuhk|wehp|weht|wehk|weyp|weyt|weyk|weep|weet|week|wawp|wawt|wawk|wohp|woht|wohk|werp|wert|werk|woop|woot|wook|wuup|wuut|wuuk|waik|ahp|aht|ahk|wap|wat|wak|uhp|uht|uhk|ehp|eht|ehk|eyp|eyt|eyk|eep|eet|eek|awp|awt|awk|ohp|oht|ohk|erp|ert|erk|oop|oot|ook|uup|uut|uuk|aik|wik|ap|at|ak|ik)[/.])(?: (?:ch|dt|kh|ng|ny|b|d|f|g|h|k|l|m|n|p|s|t|v|z)?(?:(?:wee-uhng|woo-uhng|wuu-uhng|ee-uhng|wee-uhm|wee-uhn|oo-uhng|woo-uhm|woo-uhn|uu-uhng|wuu-uhm|wuu-uhn|wee-uhw|woo-uhy|wuu-uhy|wuu-uhw|ee-uhm|ee-uhn|wee-uh|oo-uhm|oo-uhn|woo-uh|uu-uhm|uu-uhn|wuu-uh|ee-uhw|oo-uhy|uu-uhy|uu-uhw|wahng|wuhng|wehng|weyng|weeng|wawng|wohng|werng|woong|wuung|ee-uh|oo-uh|uu-uh|waing|ahng|wahm|wahn|wang|uhng|wuhm|wuhn|ehng|wehm|wehn|eyng|weym|weyn|eeng|weem|ween|awng|wawm|wawn|ohng|wohm|wohn|erng|werm|wern|oong|woom|woon|uung|wuum|wuun|wahy|wahw|wuhw|wehw|weyw|weew|wawy|wohy|wuhy|wooy|wuuy|wuuw|aing|wing|ahm|ahn|wah|ang|wam|wan|uhm|uhn|ehm|ehn|weh|eym|eyn|wey|eem|een|wee|awm|awn|waw|ohm|ohn|woh|erm|ern|wer|oom|oon|woo|uum|uun|wuu|ahy|wai|ahw|wow|uhw|way|ehw|eyw|eew|awy|ohy|uhy|ooy|uuy|uuw|ing|ah|am|an|eh|ey|ee|aw|oh|er|oo|uu|ai|ow|ay)[/_?~.]?|(?:wee-uhp|wee-uht|wee-uhk|woo-uhp|woo-uht|woo-uhk|wuu-uhp|wuu-uht|wuu-uhk|ee-uhp|ee-uht|ee-uhk|oo-uhp|oo-uht|oo-uhk|uu-uhp|uu-uht|uu-uhk|wahp|waht|wahk|wuhp|wuht|wuhk|wehp|weht|wehk|weyp|weyt|weyk|weep|weet|week|wawp|wawt|wawk|wohp|woht|wohk|werp|wert|werk|woop|woot|wook|wuup|wuut|wuuk|waik|ahp|aht|ahk|wap|wat|wak|uhp|uht|uhk|ehp|eht|ehk|eyp|eyt|eyk|eep|eet|eek|awp|awt|awk|ohp|oht|ohk|erp|ert|erk|oop|oot|ook|uup|uut|uuk|aik|wik|ap|at|ak|ik)[/.]))*$
```

What it enforces:
- every chunk is a possible syllable of the key: no `c` outside `ch`, no `q`, `x`, `j`, `r` outside `er`, no `i` outside a glide token, no accented letters;
- a stop ending carries only the rising or heavy symbol;
- at most one tone symbol, only at the end of a chunk;
- lowercase only, single spaces.

Tested: it accepts all 21 worked examples, all 90 sample cards in §9 and every output of the 352-word measure. It rejects raw Vietnamese with marks (*Hà Nội*, *phở*) and most toneless raw spellings (*xin chao, ba, em, chao*). A few toneless spellings pass as they stand because their respelling is identical (*an* = *ăn*, *ai*, *ban*), so the pattern alone cannot prove that a pron was generated; the generator and the lint do.

### 6.3 Worked examples (all pass `pronPattern` and equal the generator's output)

| # | Vietnamese | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | Xin chào! | `seen chahw_` | Hello! | x = s; ao = ahw; falling tone |
| 2 | Cảm ơn. | `kahm? ern` | Thank you. | dipping tone; ơ = er (no r sound) |
| 3 | phở | `fer?` | pho (noodle soup) | ph = f; ơ = er; dipping tone |
| 4 | bánh mì | `baing/ mee_` | bread; banh mi | -anh = aing (Hanoi); rising and falling tones |
| 5 | Việt Nam | `vee-uht. nahm` | Vietnam | iê = ee-uh; final t takes the heavy tone here |
| 6 | Hà Nội | `hah_ nohy.` | Hanoi | ôi = ohy; falling, then heavy |
| 7 | người Mỹ | `nguu-uhy_ mee~` | American (person) | ng at the start; ươi = uu-uhy; broken tone |
| 8 | không | `khohng` | no; not | kh = kh (throat sound); ô = oh; level tone |
| 9 | được | `duu-uhk.` | can; OK | đ = d; ươ = uu-uh; final c = k |
| 10 | đi | `dee` | to go | đ = d |
| 11 | da | `zah` | skin | d = z (Hanoi) |
| 12 | Tôi là giáo viên. | `dtohy lah_ zahw/ vee-uhn` | I'm a teacher. | t = dt; gi = z; iê = ee-uh |
| 13 | nhà | `nyah_` | house | nh = ny |
| 14 | trường | `chuu-uhng_` | school | tr = ch (Hanoi) |
| 15 | gì | `zee_` | what | gi + no other vowel: zee |
| 16 | quyển sách | `kwee-uhn? saik/` | the book | qu = kw; -ach = aik |
| 17 | khỏe | `khweh?` | well; healthy | oe = weh (glide w); placement khoẻ gives the same |
| 18 | Nguyễn | `ngwee-uhn~` | Nguyen (family name) | ng + uyê = ngwee-uhn; broken tone |
| 19 | thích | `tik/` | to like | th = t (puff of air); -ich = ik |
| 20 | máy bay | `mai/ bai` | airplane | ay = ai (short); rising tone, then level |
| 21 | rượu | `zuu-uhw.` | alcohol; rice wine | r = z (Hanoi); ươu = uu-uhw |

### 6.4 The generator and how reliable it is

`tools/target/vi/respell.js` (about 120 lines, no dependencies).
- **Usage:** `node tools/target/vi/respell.js "Xin chào!"` → `Xin chào! -> seen chahw_`. Several arguments give several lines. `require('./respell.js').respell(text)` returns the string.
- **Input:** NFC or NFD, any tone-mark placement (*hòa / hoà*, *thủy / thuỷ* give the same output), any case. Punctuation is dropped.
- **It throws, with a message on stderr, for** a digit, a letter Vietnamese does not use (*f, j, w, z*), a spelling that is not a Vietnamese syllable (*xoong*, *Grab*), two tone marks, or a stop ending with a tone other than rising or heavy (*mat*, *hoc*). It throws rather than guesses: Vietnamese spelling is regular, so an unparsable syllable is a typo, a loanword or a name.
- **How it works:** it removes the tone mark (U+0301, U+0300, U+0309, U+0303, U+0323), splits the syllable into first consonant and rime, and maps each part through the tables in §6.1. It handles the spelling rules for *gi* (*gì, gìn, giết*), *qu*, *ngh / gh / k*, glide *o / u* (*hoa, thuê, tuần, khuya*), vowel pairs and *-nh / -ch*.
- **How reliable.** The generator has no guessing step, unlike the stress rules of es, it and pt, so the question is whether the key is right, not whether the generator applies it.
  - **The measure:** 352 different syllables and words, including all six tones on *a, ma, ba*, every first consonant, every glide and vowel pair, and the hard spellings (*khuya, khuỷu, giếng, gìn, quyển, nguyễn, thuyền, rượu*). All 352 parsed, all matched the pattern, and the author judged every output to follow the key (352/352). This is self-judged against the author's own key, not an independent measure.
  - **The spot check against sources:** 11 Hanoi forms from the Wikipedia 2007 snapshot, with this aid's output: *da* [zɐː] `zah`, *ra* [zɐː] `zah`, *số* [so] `soh/`, *xa* [sɐː] `sah`, *trắng* [cɐŋ] `chang/`, *chi* [ci] `chee`, *vợ* [vəː] `ver.`, *thác* [tʰɐːk] `tahk/`, *lính* [liŋ] `ling/`, *ung* [uŋ] `oong`, *đục* [ɗuk] `dook.`. All 11 agree. Then 5 Lonely Planet respellings: *phở* "fẻr" `fer?`, *tôi* "doy" `dtohy`, *thích* "tík" `tik/` agree; *từ* "dùhr" `dtuu_` and *gặp* "gụhp" `gap.` agree on the consonants and tone but use different vowel tokens (Lonely Planet writes ư as "uhr" and ă as "uh").
  - **Two token choices made for readability:** ơi is `uhy` and ây is `ay` (*mời* `muhy_`, *mấy* `may/`, *đây* `day`). An earlier draft wrote ơi as `ery`, but that spelled English words (*với* `very/`, *chơi* `chery`). As a result `uh` stands for â everywhere except in ơi, and ây does not show its â.
  - **Where it is approximate on purpose** (each goes in the sound lessons and card notes instead):
    - the catch (creaky voice) in *ngã* and *nặng*, and the breathy *huyền*: the symbol names the tone;
    - the lip closure in *-ong, -ông, -ung, -oc, -ôc, -uc* (Hanoi *học* ends with the lips closing): written `awng`, `ohk`;
    - unreleased final *p, t, c*, and the unaspirated *c / k*: written `p t k`;
    - *g* is a soft fricative, written `g`; *kh* is written `kh`;
    - length in *â* against *ơ* is shown by `uh` against `er`, not exactly.
- **Fixing an output:** never edit a `pron` by hand. A wrong output means the key or `EXC` needs changing: the lead edits `respell.js` and re-runs the rows. Note: `tools/target/repron.js` does not recognise these prons yet (§10.6).

### 6.5 What lesson 1 (`alphabet`) must teach, so the aid can be read

1. One chunk = one syllable. Vietnamese writes each syllable separately, so the chunks line up with the written syllables. There are no CAPITALS: no syllable is stressed over the others.
2. The tone symbol at the end of each chunk: none, `/`, `_`, `?`, `~`, `.`, with the six names. `tones` then drills them with audio.
3. The letters that lie to English readers: *d, gi, r* = `z`; *đ* = `d`; *x* = `s`; *tr, ch* = `ch`; *nh* = `ny`; *ng* at the start; *ph* = `f`; *th* = `t` (puff) against *t* = `dt` (no puff); *kh*.
4. The vowel tokens, with audio for each: `ah a uh eh ey ee aw oh er oo uu`, and that `er` has no r sound.
5. A hyphen inside a chunk is still one syllable (`vee-uht.`).
6. The aid is a crutch: listen first, and turn it off once the letter values are known.

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things:
- **(a) Tone marks and vowel marks.** The mark makes the word: *ma / má / mà / mả / mã / mạ*, *bàn / bán / bạn / bận*, *o / ô / ơ*, *u / ư*, *a / ă / â*, *d / đ*.
- **(b) Noun first, with its classifier.** The noun comes before its describing word, its owner and *này / kia / đó* (*áo đỏ, nhà tôi, sách của Lan, quyển sách này, người Mỹ*). A counted or pointed-at noun takes a classifier in front (*hai con mèo, cái bàn này*).

**Why these two.**
- Marks: tone is the error documented for American learners (Blodgett et al. 2008; Nguyen & Macken 2008, §4.1). It is in every syllable from lesson 1, so the rule can be met in all 28 sets, including the four sound lessons before any grammar. That matters because the JSON has no exemption field.
- Noun first and classifiers: the two most common grammar errors in the only learner error analysis found (Bui My Hanh 2009, other L1, §4.3–4.4). English puts adjectives and owners first and has no classifiers, so English speakers should transfer the same errors [inference]. Strand (b) gives the grammar lessons a hinge that is about structure, not spelling.
- **Not chosen:**
  - **Time words** (*đã / đang / sẽ*): optional in Vietnamese, so a wrong answer is hard to define.
  - **Pronoun choice:** it needs a cue in every prompt, and it is a register choice, not a form. It becomes the preferred "mixed neighbour" in the last two items instead (§8).

**Count** (`minOrder: 2`, `minType: 2`): in every lesson's practice set, at least **2 `or` items** and at least **2 `ty` items** must hinge on (a) or (b), and their `why` must name it with a keyword. A 14-item set has 3 `or` and 3 `ty` items (TARGET-BRIEF), so two of each three.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`or`, strand (a):** `x` holds a mark twin of a tile in `a`: the same base letters with a different tone mark, vowel mark or *d / đ* (*bán → bàn, bạn*; *cơm → com*; *đi → di*).
- **`or`, strand (b):** `a` puts a noun before its describer, owner or demonstrative, or a classifier before a counted noun, and `x` holds a wrong classifier or a tile that only fits the English order.
- **`ty`, strand (a):** the item is `'!strict'` (otherwise the engine accepts a toneless answer as "almost" and nothing is tested, §10), and `x` holds a mark twin of a word in `a[0]`.
- **`ty`, strand (b):** `a[0]` contains noun + describer / owner / *này*, or number + classifier + noun, and `x` holds the wrong classifier or the bare describer.
- **`fi` items** with a mark twin among the distractors must be `'!strict'` (the validator already demands this for accent-only differences).

Examples in the shorthand:

```
['or', 'Mom sells tables', 'Mẹ bán bàn', 'bạn ban', 'bán (rising tone) is to sell; bàn (falling tone) is a table.']
['or', 'two cats', 'hai con mèo', 'cái', 'Animals take the classifier con.']
['ty', 'the red shirt', 'cái áo đỏ|áo đỏ', 'áo · đỏ · the color comes last', 'đó', 'The color goes after the noun: áo đỏ.']
['ty', 'Are you busy? (to a woman a little older)', 'Chị có bận không?|Chị bận không?', 'bận · có … không', 'bạn bán', 'bận has the heavy tone: bạn is a friend.', '!strict']
```

**Lessons where the rule is hardest, with two hinges each** (or / ty):
- `alphabet` (tones are not taught yet, so only the crossed d and vowel marks, in words with no tone mark): or *Tôi đi chơi* (x: *di*); *Cô ăn* (x: *an*). ty "go out (for fun)" → *đi chơi* (x: *di*, strict); "I eat" → *Tôi ăn* (x: *an*, strict). why: "đ is the crossed d: đi." / "ă has a vowel mark: ăn, not an."
- `tones`: or *Mẹ bán bàn* (x: *bạn*); *Bạn bán cá* (x: *ca*). ty "Mom sells fish" → *Mẹ bán cá* (x: *ca bàn*, strict); "my friend" → *bạn tôi* (x: *bàn*, strict). why: "bán has the rising tone; bàn (falling tone) is a table."
- `syllables`: or *một cái bánh* (x: *mốt*): "Stop endings take only the rising tone or the heavy tone." ty "eight cats" → *tám con mèo* (x: *tàm*, strict; *con* and *mèo* given in the hint).
- `vowels`: or *Tôi uống sữa* (x: *sua*); *cơm gà* (x: *com*). ty "I drink milk" → *Tôi uống sữa* (x: *sửa*, strict); "rice with chicken" → *cơm gà* (x: *com*, strict). why: "ư and ơ carry vowel marks; the broken tone on sữa."
- `pronouns`: or *Chào chị* (x: *chi*); *Cảm ơn anh* (x: *on*). ty "Thank you (to a man a little older)" → *Cảm ơn anh|Cám ơn anh|Em cảm ơn anh|Em cám ơn anh* (x: *on*, strict).
- `numbers`: or *hai mươi lăm* (x: *mười*); ty "two cats" → *hai con mèo* (x: *cái*). why: "Twenty is hai mươi with the level tone." / "Animals take the classifier con."
- `verbs`, `chua`, `because`: use strand (b) through a described noun (*Hôm qua tôi mua áo đỏ*, x: *đó*, which is also a mark twin of *đỏ*) or strand (a) with a mark twin in a sentence (*Tôi chưa ăn*, x: *chua*: "chưa has the vowel mark: chua means sour").
- `requests`: or *Cho em một ly cà phê* (x: *ca*); ty "Two iced teas, please (to an older stall-holder)" → *Cho em hai cốc trà đá ạ|Cho em hai ly trà đá ạ|Cho tôi hai cốc trà đá ạ|Cho tôi hai ly trà đá ạ* (x: *tra*, strict). why: "trà has the falling tone mark."

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\b(?:level|rising|falling|dipping|broken|heavy) tone\b|\btone marks?\b|\bvowel marks?\b|\bcrossed d\b|\bclassifiers?\b|\b(?:after|before) the noun\b|\bnoun (?:comes )?first\b
```

Use them like this:
- For strand (a): a tone name + "tone" ("the rising tone"), "tone mark", "vowel mark", "crossed d".
- For strand (b): "classifier", "after the noun", "before the noun", "noun first" / "the noun comes first".

These are deliberately **not** keywords:
- bare "tone", so that "a polite tone" does not count;
- bare "mark", so that "question mark" does not count;
- "word order", so that lines about question words do not count by accident.

All keywords are ASCII, so an NFD `why` line cannot break them. Do not use them in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 40 of 40 as expected):

| Sample `why` | Result | Expected |
|---|---|---|
| má has the rising tone: it means mom. | match | should match |
| No tone mark: ma means ghost. | match | should match |
| bàn (falling tone) is a table; bán (rising tone) is to sell. | match | should match |
| ư has a vowel mark (the horn): tư, not tu. | match | should match |
| Heavy tone (dot below): bạn is friend. | match | should match |
| Dipping tone, the hook: phở. | match | should match |
| Broken tone: Mỹ, with the tilde. | match | should match |
| Level tone: no mark at all. | match | should match |
| đ is the crossed d: đi, not di. | match | should match |
| Animals take the classifier con: hai con mèo. | match | should match |
| Classifier before the noun: một quyển sách. | match | should match |
| The color goes after the noun: áo đỏ. | match | should match |
| này goes after the noun: cái bàn này. | match | should match |
| Noun first, then the owner: nhà tôi. | match | should match |
| The noun comes first: người Mỹ. | match | should match |
| Check the tone marks: cảm ơn. | match | should match |
| Five after mươi is lăm, with the level tone. | match | should match |
| Stop endings take only the rising tone or the heavy tone: một. | match | should match |
| The vowel marks change the vowel: o, ô, ơ. | match | should match |
| quyển is the classifier for books. | match | should match |
| Use a polite tone with older people. | no match | should not match |
| A question mark is not enough: add không. | no match | should not match |
| Question words stay where the answer goes. | no match | should not match |
| Use chị for a woman a little older than you. | no match | should not match |
| không goes before the verb. | no match | should not match |
| đã shows the action is finished. | no match | should not match |
| ạ at the end shows respect. | no match | should not match |
| No là before an adjective. | no match | should not match |
| The negative of là is không phải là. | no match | should not match |
| rất goes before the adjective. | no match | should not match |
| quá goes after the adjective. | no match | should not match |
| Answer chưa for not yet. | no match | should not match |
| In Hanoi, d sounds like z. | no match | should not match |
| Tone of voice matters in requests: add nhé. | no match | should not match |
| English intonation rises in questions; Vietnamese adds a word. | no match | should not match |
| Mark the plural with những or các only when needed. | no match | should not match |
| hơn means more than. | no match | should not match |
| vì gives the reason, nên gives the result. | no match | should not match |
| Use em ơi to call someone younger. | no match | should not match |
| Word order: subject, verb, object, as in English. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4 and §5):
- **Kept: all 25 items, in roadmap order.** Their ids lose the `vi-` prefix, and each appears exactly once in a `roadmap` field.
- **Renamed:** titles gain the forms English speakers miss or an English gloss: `la` "là: A is B, and không phải là"; `yes-no` "có … không, phải không"; `jobs` "người Mỹ, giáo viên"; `adjectives` "no là, rất and quá"; `biet` "biết, có thể, được: can and know how"; `chua` "yet? and rồi"; `requests` adds "cho … ạ". `alphabet`, `tones`, `syllables` and `vowels` get plain English titles.
- **Widened:**
  - `biet` also covers *có thể* and *được* ("can"), which ULIS A2 lesson 1 does not name, because "I can…" is the English frame and learners need all three.
  - `la` also teaches *không phải là* (§4.5).
- **Added (3):**
  - `classifiers` (after `numbers`): the classifier system (§4.4). The roadmap has no classifier item, and counting forces classifiers.
  - `family` (after `cua`): family words, and the same words as pronouns (*cô, chú, ông, bà, cháu*), completing §2.3 (§4.6).
  - `want-like` (after `verbs`): *muốn, thích, cần* and ordering with *Cho tôi…* (§5). It carries the Food and drink deck.
  - All three have an empty `roadmap` field.
- **Stages:** the roadmap's four, unchanged in name. Stage 3 grows from 6 to 9 lessons.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and tones** | | | |
| 1 | `alphabet` | Letters and sounds: reading Vietnamese | vi-alphabet | The 29 letters (no f, j, w, z except in loanwords); ă â ê ô ơ ư đ as separate letters; the letter values that differ from English (d, gi, r = z; đ = d; x = s; tr = ch; nh, ng, ph, th, t, kh); how to read the aid (§6.5). Trap: reading d, x, tr, nh as in English; treating đ and d as the same letter. | Letters and sounds |
| 2 | `tones` | The six tones and their marks | vi-tones | Level, falling, rising, dipping, broken and heavy, with marks, symbols and minimal sets (ma, má, mà, mả, mã, mạ; bàn, bán, bạn); English question intonation must not override the tone. Trap: dropping marks; the dipping and broken tones (Blodgett et al. 2008). | Tone pairs |
| 3 | `syllables` | Syllables: first and last sounds | vi-syllables | Syllable = first consonant + vowel + last consonant + tone; the spelling pairs c / k / q, g / gh, ng / ngh; last consonants m n ng p t c, and Hanoi -nh / -ch (anh = `aing`); stop endings take only the rising or heavy tone; ng at the start of a word (ngủ, Nguyễn). Trap: English "bank" for bánh; leaving out ng at the start. | Letters and sounds |
| 4 | `vowels` | Vowels: ă, â, ơ, ư and vowel pairs | vi-vowels | a / ă / â, o / ô / ơ, u / ư, e / ê; long and short (tai / tay, sao / sau); the vowel pairs iê, uô, ươ (Việt, muốn, người); glide o / u (hoa, thuê). Trap: o, ô, ơ said the same; ơ said with an English r. | Letters and sounds |
| | | **Stage 2: A1 · First sentences** | | | |
| 5 | `pronouns` | Greetings and kinship pronouns: anh, chị, em | vi-pronouns | Xin chào, Chào + kinship word, Cảm ơn, Xin lỗi, Tạm biệt; tôi / bạn; anh, chị, em and the matching self-word; Anh ơi / Em ơi; ạ and dạ (recognition); Anh khỏe không? Trap: bạn to an older person, tôi to everyone, one English "you" (§4.6). | Greetings and courtesy |
| 6 | `la` | là: A is B, and không phải là | vi-la | là joins two nouns (Tôi là sinh viên); không phải là for the negative; anh ấy, chị ấy; là is not used with adjectives (preview of `adjectives`). Trap: Tôi không là…, Tôi là mệt (§4.5). | Traps for English speakers |
| 7 | `yes-no` | Yes/no questions: có … không, phải không | vi-yes-no | có + verb or adjective + không?; … phải không? for checking; answers có / không, vâng / dạ, phải / không phải. Trap: a rising voice instead of a question ending; answering every question with có (§4.7, §4.9). | Questions and connectors |
| 8 | `jobs` | Jobs and nationality: người Mỹ, giáo viên | vi-jobs | người + country (người Mỹ, người Việt), tiếng + language (tiếng Anh), làm nghề gì?, jobs with là; chúng tôi. Trap: Mỹ người; tiếng and người mixed up (§4.3). | About me |
| 9 | `this-that` | này, kia, đây, đó: this and that | vi-this-that | Đây là… / Đó là… (this is, that is) against noun + này / kia / đó after the noun (cái bàn này); cái này, cái kia. Trap: này before the noun; Đây for "this book" (§4.3). | Classifiers and things |
| 10 | `adjectives` | Adjectives: no là, rất and quá | vi-adjectives | Adjectives work like verbs (Tôi mệt, Phở ngon); rất before, lắm and quá after (rất ngon, ngon lắm, ngon quá); adjective after the noun (áo đẹp); không + adjective. Trap: Tôi là mệt; đẹp áo (§4.3, §4.5). | Describing things |
| 11 | `who-what` | ai, gì: who and what | vi-who-what | ai and gì stay where the answer goes (Anh ấy là ai? Bạn muốn gì?); cái gì; tên là gì? Trap: moving the question word to the front, as in English (§4.7). | Questions and connectors |
| | | **Stage 3: A1 · Numbers and actions** | | | |
| 12 | `numbers` | Numbers 1–100: mấy, bao nhiêu | vi-numbers | một to mười, mươi (level tone) in the tens, mốt, lăm and tư after mươi, một trăm; mấy (small numbers, ages of children) and bao nhiêu; Bạn bao nhiêu tuổi? Trap: hai mười, hai mươi năm (§4.10). | Numbers and money |
| 13 | `classifiers` | Classifiers: con, cái, quyển, chiếc | (added) | Number + classifier + noun + này: con (animals), cái (most things), quyển (books), chiếc (vehicles, single items), người (people), cốc / ly (glasses), đôi (pairs); no classifier for generic or mass nouns (thịt gà, Tôi thích mèo). Trap: hai mèo, cái mèo, thịt con gà (§4.4). | Classifiers and things |
| 14 | `co` | có: have, and there is | vi-co | có = have and there is (Tôi có hai anh trai; Ở đây có nhà vệ sinh không?); không có; Chị có … không? in a shop. Trap: Tôi có 25 tuổi (calque); là for "there is" (§4.5). | Shopping and the market |
| 15 | `cua` | của: possession, and nhà tôi | vi-cua | noun + của + owner (sách của Lan); của dropped with family and close things (mẹ tôi, nhà tôi); của ai? (whose?). Trap: Lan's sách, tôi nhà (§4.3). | Family and kinship |
| 16 | `family` | Family words that are also pronouns | (added) | bố, mẹ, anh trai, chị gái, em trai / em gái, ông, bà, cô, chú, cháu; trai / gái after em; the same words as "you" and "I" (cô / cháu, ông / cháu); các bạn, các anh chị; Southern ba, má in notes. Trap: em for a younger sibling of either gender; bà for any woman (§4.6, §4.11). | Family and kinship |
| 17 | `compare` | hơn, bằng, nhất: comparing | vi-compare | adjective + hơn (lạnh hơn), bằng (as … as), nhất (most); the describing word stays after the noun (quán phở ngon nhất). Trap: hơn before the adjective; nhất before the noun (§4.3). | Describing things |
| 18 | `verbs` | Verbs and time words: đã, đang, sẽ | vi-verbs | Verbs never change; đã (done), đang (in progress), sẽ (will) before the verb; time words (hôm qua, bây giờ, ngày mai) make đã and sẽ optional; không before the verb. Trap: hunting for a past form; đã and đang together (§4.8). | Time, days and dates |
| 19 | `want-like` | muốn, thích, cần: wanting, liking, ordering | (added) | muốn + noun or verb, thích, cần; ordering with Cho tôi / Cho em + number + classifier + noun (Cho tôi hai bát phở); không muốn. Trap: Tôi muốn để ăn (want to = muốn, no extra word); tôi to an older stall-holder (§4.6). | Food and drink |
| 20 | `location` | ở, trên, dưới: where things are | vi-location | ở = be at, live at, and at (Tôi ở Hà Nội); trên, dưới, trong, ngoài, bên cạnh, trước, sau; X ở đâu? Trap: là ở; the place word placed before the noun in English order (trên bàn = on the table) (§4.5). | Around town and directions |
| | | **Stage 4: A2 · Getting things done** | | | |
| 21 | `biet` | biết, có thể, được: can and know how | vi-biet | biết + verb (know how: biết bơi), có thể + verb (can, possible), verb + được (able, allowed); không biết. Trap: có thể for every English "can" (a learned skill usually takes biết; permission takes được: Ở đây chụp ảnh được không?). | Work and study |
| 22 | `chua` | đã … chưa: yet? and rồi | vi-chua | Đã … chưa? / … chưa? (yet?); answers Rồi (already) and Chưa (not yet); chưa + verb (not yet); Ăn cơm chưa? as a greeting. Trap: answering Không; rồi left out (§4.8, §4.9). | Questions and connectors |
| 23 | `motion` | đi, đến, về: going and coming | vi-motion | đi (go), đến / tới (arrive, come to), về (go back, go home), lên / xuống (up, down), vào / ra (in, out); đi bằng + vehicle (đi bằng xe máy); đi Huế with no "to". Trap: đi for every English "go" (going home or back is về: Tôi về nhà); "by" copied as với instead of bằng. | Travel and transport |
| 24 | `prices` | Prices and shopping: bao nhiêu tiền? | vi-prices | Bao nhiêu tiền?; prices in nghìn (năm mươi nghìn) and trăm nghìn; đắt, rẻ, bớt; colors after the noun (áo màu đỏ). Trap: thousand counted the English way; đỏ áo (§4.3, §4.10). | Shopping and the market |
| 25 | `directions` | Directions and transport | vi-directions | rẽ trái, rẽ phải, đi thẳng, gần, xa, cách … bao xa; taking a taxi or motorbike taxi (Cho tôi đến…, Cho tôi xuống đây). Trap: question words moved to the front (Bao xa…?) (§4.7). | Around town and directions |
| 26 | `time` | Time, days and dates | vi-time | mấy giờ, giờ, phút, rưỡi (half past), sáng / chiều / tối; thứ hai to chủ nhật; ngày, tháng, năm, in that order (ngày mười lăm tháng chín); lúc + time. Trap: month before day; thứ hai read as "second" (§4.11). | Time, days and dates |
| 27 | `because` | vì … nên: because, so | vi-because | vì / tại vì (because), nên (so), tại sao? (why?); Vì trời mưa nên tôi ở nhà; bị for bad things that happen (bị ốm, bị đau). Trap: so left out where Vietnamese pairs vì with nên; tại sao answered without vì. | Health and help |
| 28 | `requests` | Polite requests: xin, mời, cho, nhé, ạ | vi-requests | Cho tôi / Cho em xin…, mời (inviting), làm ơn (please, to a stranger), nhé (softener), ạ (respect), Dạ / Vâng ạ; the right self-word to an older person. Trap: bare Cho tôi to elders; làm ơn overused; ạ to a friend (§4.6). | Polite Vietnamese |

Per-lesson notes for writers:
- Every lesson's practice set satisfies §7.
- The last two items of each set may mix in a neighbour from an earlier lesson. Preferred neighbours: pronoun choice (with a cue in the prompt, §2.3), *là* against no *là*, and a classifier.
- Items whose answer contains *oa, oe, uy* with a tone and no last consonant list both placements (§2.7).
- Prompts that need "you" carry a cue (§2.3). Typed answers accept the sentence with and without *có* where both are natural (*Chị có bận không?* | *Chị bận không?*), and with and without the subject where the context gives it.
- `requests` items that ask for politeness must say so in the prompt ("(politely, to an older woman)"), and then *ạ* is required. Elsewhere *ạ* is accepted but not required: list both.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards in total). Card shape: `target | pron | meaning | note`.
- `target`: Vietnamese with all its marks, NFC, with its classifier or in a short phrase where that is natural (*con mèo, áo đỏ*).
- `pron`: generated (§6).
- `meaning`: short American English.
- `note`: one English line, or empty. Southern forms, pronoun advice and traps go here.

**Groups, in order:**

| Group | Decks |
|---|---|
| First steps | Letters and sounds · Tone pairs · Greetings and courtesy · Family and kinship |
| Everyday words | Numbers and money · Classifiers and things · Food and drink · Shopping and the market · Time, days and dates |
| Out and about | Around town and directions · Travel and transport · Work and study · Health and help |
| Conversation | About me · Describing things · Questions and connectors |
| Watch out | Traps for English speakers · Polite Vietnamese |

**Deck rules for writers**
- **Tone pairs:** each card shows one member of a minimal set, and its note names the others (*bàn* — "Same letters as *bán* (to sell) and *bạn* (friend)"). Meanings must differ, so pick sets whose meanings are clearly different.
- Nouns in the everyday and out-and-about decks mostly appear with a classifier or in a describing phrase (*cái áo này, phở bò, áo màu đỏ*). This keeps strand (b) visible in review.
- Phrases with "you" say who is addressed, in the meaning or the note ("(to a woman a little older)").
- **Traps for English speakers** (about 18 cards):
  - about 6 *là* and calque cards (*Tôi mệt*, *Tôi không phải là…*, *Tôi ba mươi tuổi*, *Tôi thấy nóng*);
  - about 6 false friends and look-alikes (*ga, to, bánh mì, chè, ốm, xăng*);
  - about 6 pronoun and greeting traps (*bà, bạn*, *Ăn cơm chưa?*, *Anh ơi / Em ơi*).
- **Polite Vietnamese** (about 16 cards): *ạ, dạ, vâng, nhé, xin, mời, làm ơn*, *Cho em xin…*, *Cháu chào bà ạ*, *Dạ, không ạ* (a polite no).
- Everything in these two decks is [inference] plus Kaiwa's list, so it is in the §11 native-check list.

**Five sample cards per deck** (all `pron` values generated by `respell.js` and checked against `pronPattern`):

**1. Letters and sounds** (First steps). Words that show each letter value: d, đ, gi, r, x, tr, nh, ng, ph, th, kh, and the vowels ă â ê ô ơ ư. Lessons: `alphabet`, `syllables`, `vowels`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| đi | `dee` | to go | đ (crossed d) is an English d. Plain d is a z sound in Hanoi. |
| da | `zah` | skin | d sounds like z in Hanoi (like y in the South). |
| xe | `seh` | vehicle; motorbike | x sounds like s. |
| nhà | `nyah_` | house; home | nh is ny, as in canyon. |
| phở | `fer?` | pho (noodle soup) | ph is f. ơ is the vowel you may have heard as "fuh". |

**2. Tone pairs** (First steps). Same letters, different tone, different word: ma, má, mà; bàn, bán, bạn. Lessons: `tones`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| ma | `mah` | ghost | Level tone: no mark, flat and in the middle of your voice. |
| mà | `mah_` | but | Falling tone: start low and fall gently. |
| bàn | `bahn_` | table | Falling tone. Same letters as bán (to sell) and bạn (friend). |
| bán | `bahn/` | to sell | Rising tone: start in the middle and rise. |
| bạn | `bahn.` | friend; you (to a friend) | Heavy tone: low, short, with a catch in the throat. |

**3. Greetings and courtesy** (First steps). Hello, goodbye, thank you and sorry, said with the right kinship word. Lessons: `pronouns`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| Xin chào. | `seen chahw_` | Hello. | Safe with anyone. People more often say Chào + a kinship word: Chào anh. |
| Chào chị. | `chahw_ chee.` | Hello. (to a woman a little older) | chị: a woman older than you, but not your parents' age. |
| Cảm ơn. | `kahm? ern` | Thank you. | Also spelled cám ơn. Add the person: Cảm ơn anh. |
| Xin lỗi. | `seen lohy~` | Sorry. / Excuse me. |  |
| Tạm biệt. | `dtahm. bee-uht.` | Goodbye. | A little formal. Friends often say Chào + name, or Bye. |

**4. Family and kinship** (First steps). Family members, and the same words used for "you" and "I". Lessons: `cua`, `family`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| mẹ | `meh.` | mother | Hanoi word. In the South: má. |
| bố | `boh/` | father | Hanoi word. In the South: ba. |
| anh trai | `aing chahy` | older brother | anh alone also means "you" to a man a little older than you. |
| em gái | `ehm gahy/` | younger sister | em is any younger sibling; gái = female, trai = male. |
| ông bà | `ohng bah_` | grandparents | ông and bà also mean "you" to an old man and an old woman. |

**5. Numbers and money** (Everyday words). Numbers to 100 and up, and prices in đồng and nghìn. Lessons: `numbers`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| một | `moht.` | one |  |
| mười | `muu-uhy_` | ten | Falling tone. In twenty, thirty… it is mươi, with no mark: hai mươi. |
| hai mươi lăm | `hahy muu-uhy lam` | twenty-five | After mươi, five is lăm, not năm. |
| một trăm | `moht. cham` | one hundred |  |
| năm mươi nghìn đồng | `nam muu-uhy ngeen_ dohng_` | fifty thousand dong | Prices are counted in nghìn (thousands). The South says ngàn. |

**6. Classifiers and things** (Everyday words). Everyday things and animals with their classifier, and this and that. Lessons: `this-that`, `classifiers`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| con mèo | `kawn mehw_` | the cat | con is the classifier for animals. |
| cái bàn | `kahy/ bahn_` | the table | cái is the classifier for most objects. |
| quyển sách | `kwee-uhn? saik/` | the book | quyển for books. The South says cuốn. |
| chiếc xe máy | `chee-uhk/ seh mai/` | the motorbike | chiếc for vehicles and single items. cái xe máy is also fine. |
| cái này | `kahy/ nai_` | this one | Classifier + này: pointing at a thing. |

**7. Food and drink** (Everyday words). Phở, bánh mì, coffee, and ordering at a street stall or café. Lessons: `want-like`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| phở bò | `fer? baw_` | beef pho | Chicken pho: phở gà. The describing word comes after the noun. |
| bánh mì | `baing/ mee_` | bread; banh mi sandwich | In Vietnam, bánh mì means bread as well as the sandwich. |
| cà phê sữa đá | `kah_ fey suu-uh~ dah/` | iced coffee with condensed milk | Word by word: coffee, milk, ice. |
| trà đá | `chah_ dah/` | iced tea | Weak iced tea, the everyday street-stall drink. |
| Ngon quá! | `ngawn kwah/` | Delicious! | quá after an adjective: so, really. |

**8. Shopping and the market** (Everyday words). Do you have…?, colors, haggling and paying. Lessons: `co`, `prices`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| Chị có áo màu đỏ không? | `chee. kaw/ ahw/ mow_ daw? khohng` | Do you have a red shirt? (to a saleswoman) | có … không? = do you have …? màu đỏ comes after áo. |
| Bao nhiêu tiền? | `bahw nyee-uhw dtee-uhn_` | How much is it? |  |
| Đắt quá! | `dat/ kwah/` | That's too expensive! |  |
| Bớt một chút được không? | `bert/ moht. choot/ duu-uhk. khohng` | Can you take a little off? | Haggling in markets. Not in supermarkets. |
| áo dài | `ahw/ zahy_` | ao dai (long tunic) | Literally "long shirt": dài (long) comes after áo. |

**9. Time, days and dates** (Everyday words). Clock time, days, months, yesterday and tomorrow, and đã, đang, sẽ. Lessons: `verbs`, `time`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| hôm nay | `hohm nai` | today |  |
| hôm qua | `hohm kwah` | yesterday |  |
| ngày mai | `ngai_ mahy` | tomorrow |  |
| thứ hai | `tuu/ hahy` | Monday | Literally "second": the week counts from Sunday, chủ nhật. |
| Bây giờ là mấy giờ? | `bay zer_ lah_ may/ zer_` | What time is it now? |  |

**10. Around town and directions** (Out and about). Places in town, where things are, left, right and straight on. Lessons: `location`, `directions`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| Nhà vệ sinh ở đâu? | `nyah_ vey. sing er? duhw` | Where is the restroom? | ở đâu (where) goes at the end. |
| bên trái | `beyn chahy/` | on the left | On the right: bên phải. |
| đi thẳng | `dee tang?` | go straight |  |
| ngân hàng | `nguhn hahng_` | bank |  |
| gần đây | `guhn_ day` | near here |  |

**11. Travel and transport** (Out and about). Motorbike taxis, ride-hailing, buses, trains, tickets and hotels. Lessons: `motion`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| xe ôm | `seh ohm` | motorbike taxi | Literally "hug vehicle". |
| sân bay | `suhn bai` | airport |  |
| vé tàu | `veh/ dtow_` | train ticket | vé (ticket) first, then what kind. |
| khách sạn | `khaik/ sahn.` | hotel |  |
| Cho tôi xuống đây. | `chaw dtohy soo-uhng/ day` | Let me off here. | To a driver. |

**12. Work and study** (Out and about). Jobs, school, skills and what you can do. Lessons: `biet`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| giáo viên | `zahw/ vee-uhn` | teacher |  |
| sinh viên | `sing vee-uhn` | college student |  |
| Tôi làm việc ở ngân hàng. | `dtohy lahm_ vee-uhk. er? nguhn hahng_` | I work at a bank. |  |
| Tôi biết nói tiếng Anh. | `dtohy bee-uht/ nawy/ dtee-uhng/ aing` | I can speak English. | biết + verb: know how to. |
| công ty | `kohng dtee` | company |  |

**13. Health and help** (Out and about). Feeling sick, the pharmacy, and asking for help. Lessons: `because`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| Tôi bị ốm. | `dtohy bee. ohm/` | I'm sick. | Hanoi word. In the South, ốm means thin; sick is bệnh. |
| hiệu thuốc | `hee-uhw. too-uhk/` | pharmacy | The South says nhà thuốc. |
| Cứu tôi với! | `kuuw/ dtohy vuhy/` | Help me! |  |
| Tôi bị đau đầu. | `dtohy bee. dow duhw_` | I have a headache. | bị: for things that happen to you. |
| bác sĩ | `bahk/ see~` | doctor |  |

**14. About me** (Conversation). Name, nationality, age, job, and where you live. Lessons: `jobs`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| Tôi tên là Emma. | `dtohy dteyn lah_ ehm mah` | My name is Emma. | Also: Tên tôi là Emma. |
| Tôi là người Mỹ. | `dtohy lah_ nguu-uhy_ mee~` | I'm American. | người (person) first, then the country: người Mỹ. |
| Tôi sống ở Hà Nội. | `dtohy sohng/ er? hah_ nohy.` | I live in Hanoi. |  |
| Tôi học tiếng Việt. | `dtohy hawk. dtee-uhng/ vee-uht.` | I'm learning Vietnamese. |  |
| Tôi ba mươi tuổi. | `dtohy bah muu-uhy dtoo-uhy?` | I'm thirty. | No "have" and no là: Tôi + number + tuổi. |

**15. Describing things** (Conversation). Adjectives for people, places and things, and comparing them. Lessons: `adjectives`, `compare`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| đẹp | `dehp.` | beautiful; pretty |  |
| Cái áo này rất đẹp. | `kahy/ ahw/ nai_ zuht/ dehp.` | This shirt is very pretty. | No là before đẹp: adjectives work like verbs. |
| to | `dtaw` | big | Not the English word to. |
| nhỏ | `nyaw?` | small |  |
| Hà Nội lạnh hơn Sài Gòn. | `hah_ nohy. laing. hern sahy_ gawn_` | Hanoi is colder than Saigon. | adjective + hơn = more … than. |

**16. Questions and connectors** (Conversation). Question words, yes/no questions, and the words that join sentences. Lessons: `yes-no`, `who-what`, `chua`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| Cái gì? | `kahy/ zee_` | What? | In a sentence, gì stays where the answer goes: Anh muốn gì? |
| Ai? | `ahy` | Who? |  |
| Ở đâu? | `er? duhw` | Where? |  |
| Tại sao? | `dtahy. sahw` | Why? | Answer with vì (because). |
| nhưng | `nyuung` | but |  |

**17. Traps for English speakers** (Watch out). False friends, calques, and là where English says "is". Lessons: `la`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| Tôi mệt. | `dtohy meyt.` | I'm tired. | No là before an adjective: not Tôi là mệt. |
| Tôi không phải là giáo viên. | `dtohy khohng fahy? lah_ zahw/ vee-uhn` | I'm not a teacher. | The negative of là is không phải là, not không là. |
| ga | `gah` | train station | Not gas (gasoline is xăng). From French gare. |
| Ăn cơm chưa? | `an kerm chuu-uh` | Have you eaten? (a greeting) | A friendly hello, not an invitation. Answer Rồi or Chưa. |
| bà | `bah_` | grandmother; you (to an old woman) | Not Mrs. for any woman: to a woman your parents' age, say cô. |

**18. Polite Vietnamese** (Watch out). ạ, dạ, vâng, nhé, xin, mời: the small words that make you sound polite. Lessons: `requests`.

| Vietnamese | `pron` | Meaning | Note |
|---|---|---|---|
| Dạ. | `zah.` | Yes? / Yes. (polite) | Polite answer when someone older calls you or speaks to you. |
| Vâng. | `vuhng` | Yes. (polite, northern) | Agreeing politely. In the South: dạ. |
| Cảm ơn chị ạ. | `kahm? ern chee. ah.` | Thank you. (polite, to an older woman) | ạ at the end shows respect to someone older. |
| Mời anh vào. | `muhy_ aing vahw_` | Please come in. (to a man) | mời = invite: offering, not asking. |
| Anh ơi! | `aing uhy` | Excuse me! (calling a man) | To call a waiter or a driver. Someone younger: Em ơi! A woman: Chị ơi! |

**Localisation** (examples, dialogues, practice). Every item below was run through `respell.js`.
- **Names:**
  - Vietnamese: Lan, Minh, Hoa, Hùng, Mai, Tuấn, Linh, Nam, Hương, Đức, Thảo, Quang, Hà, Long. They are always used with a kinship word (*chị Lan, anh Minh*), and family names (*Nguyễn, Trần, Lê, Phạm*) appear only in full names.
  - English-speaking learner characters: Emma and Jack, in English prompts and in *Tôi tên là Emma*. Other English names need an `EXC` entry first. No celebrities.
- **Places:**
  - Vietnam: Hà Nội, Hồ Chí Minh / Sài Gòn (both used; Sài Gòn is common in speech), Đà Nẵng, Huế, Hội An, Hạ Long, Sa Pa, Nha Trang, Hồ Gươm / Hồ Hoàn Kiếm.
  - US places appear only in English prompts (*Tôi là người Mỹ* is enough).
- **Food:** phở (bò, gà), bún chả, bánh mì, cơm, nem rán (South: chả giò), nem cuốn / gỏi cuốn, bún bò Huế, cà phê (đen, sữa, đá), trà đá, chè, bia, nước, sinh tố.
- **Money:** đồng, counted in *nghìn* (South *ngàn*), written in words in Vietnamese strings (*năm mươi nghìn đồng*). Realistic Hanoi prices [inference]: a bowl of phở about 50–70 nghìn, a street coffee 20–40 nghìn, *trà đá* a few nghìn.
- **Measures and dates:** day, then month, then year (*ngày mười lăm tháng chín*); kilometres, kilograms, degrees Celsius; the 24-hour clock in timetables only.
- **Settings:** a street phở stall, a café with tiny plastic stools, a market, a motorbike taxi or ride-hailing car, a train to Huế, a hotel reception, a pharmacy, a family meal with *bà*, a phone call to relatives (for heritage learners).

## 10. Typing and script

### 10.1 Script

Latin letters with stacked marks: a vowel can carry a vowel mark and a tone mark at once (*ế, ộ, ữ, ặ*). The alphabet adds *ă â đ ê ô ơ ư*, and the five tone marks go on vowels. That makes 67 special lowercase letters: 60 vowels with a tone mark, *ă â ê ô ơ ư*, and *đ*.

`targetScript`: `[A-Za-zÀ-ÃÈ-ÊÌ-ÍÒ-ÕÙ-ÚÝà-ãè-êì-íò-õù-úýĂăĐđĨĩŨũƠơƯưẠ-ỹ]`. It covers ASCII letters, the Latin-1 vowels Vietnamese uses, *ă đ ĩ ũ ơ ư* and the Latin Extended Additional block U+1EA0–U+1EF9 (*ạ … ỹ*). It was tested with NFC strings; every Vietnamese string must contain one such character.

### 10.2 Accent bar (`keys`)

`keys` in `profile.json` is `ă â ê ô ơ ư đ` followed by the five combining tone marks U+0301 (rising), U+0300 (falling), U+0309 (dipping), U+0303 (broken), U+0323 (heavy). That is 12 keys, which wrap to two rows at phone width.
- **Why this scheme:** 67 precomposed letters are too many for a bar. Seven letters plus five tones cover every Vietnamese letter. This is also how Vietnamese keyboards work: Telex and VNI type the base letter and add marks after it ([Wikipedia, *Vietnamese language and computers*](https://en.wikipedia.org/wiki/Vietnamese_language_and_computers)).
- **What works with today's engine:** the bar inserts each key's text at the caret. A tone key inserts a bare combining mark, which renders on the letter before it. The matcher normalises to NFC, which composes it: *viê* + heavy key + *t* → *việt* (tested in node). So a learner who presses the tone key **straight after the vowel that carries the tone** gets a correct answer today.
- **What does not work yet** (requests 1–2 in §10.6):
  - the tone buttons show a floating mark with no label;
  - a tone pressed at the end of the syllable (*viêt* + heavy) lands on the wrong letter;
  - pressing a second tone stacks a second mark.

### 10.3 `accents: true` and strict items

As in es and it, the flag means:
- marks are part of the correct answer;
- an answer that differs only in marks is graded **"almost"** (accepted, with the correct form shown), never silently accepted.

The engine's `foldAcc` strips every combining mark and folds *đ* to *d*. So for Vietnamese, a learner who types *Cam on* for *Cảm ơn* gets "almost". That is the right default for a beginner without a Vietnamese keyboard: toneless Vietnamese is readable in context (§4.1), and the correction teaches the marks.

**Strict items** (`'!strict'`), where an answer with a wrong or missing mark is **wrong**:
- every standing-rule `ty` item of strand (a) (at least 2 per set in the sound lessons; §7);
- every `fi` item whose distractors include a mark twin (*bán / bàn / bạn*); the validator already requires this;
- every `mc` item whose options differ only by marks;
- items that teach a pair where the mark is the word: *mười / mươi*, *chưa / chua*, *đi / di*, *bận / bạn*.

**What the engine cannot do yet:** tell a **missing** mark (*ban*: the learner did not type it) from a **wrong** mark (*bàn* for *bạn*: a different word). Both fold to *ban*, so both are "almost" on non-strict items. Request 3 (§10.6) asks for "almost" on missing marks only.

### 10.4 Tiles or typing

**Typing is the norm for this course, and tiles are the fallback** (the existing "No Vietnamese keyboard? Use tiles" switch).
- **For typing:** Vietnamese uses the Latin alphabet, so every base letter is on an English keyboard. A missing mark is only "almost", and the bar adds marks in two taps. Both iOS and Android ship a Vietnamese keyboard (Telex / VNI) that a US learner can add, and that is what they will use to text in Vietnamese [inference].
- **For tiles:** typing marks on a phone is slow, and a learner may give up. The tile fallback still tests marks, because `x` holds mark twins (§7).
- **So:** typing is the default, with a one-time chooser on the first typed item in en-vi: add the phone's Vietnamese keyboard, use the accent bar, or use tiles (request 5). The engine has no per-course default today: `S.kbTiles` is one global preference. The chooser is therefore an engine request, not a profile field.

### 10.5 Unicode, placement and punctuation

- **NFC and NFD must match.** The practice matcher (`pracNorm`) and the validator (`pn`) normalise to NFC, so practice answers typed in NFD (some Windows and macOS input methods) match. The deck "type it" matcher and the dialogue-reply matcher (`normT`) do **not** normalise (request 4). Authors write NFC.
- **Tone placement:** the matcher treats *hòa* and *hoà* as different strings, and on a strict item a learner who types the other placement is marked wrong. Until request 6 is done, authors list both placements (§2.7).
- **Punctuation:** Vietnamese uses the same Latin punctuation as English, with no space before `? ! :`. The engine strips `. , ! ? ~` and quotes. Authors still write final punctuation in `a[0]`, card targets and examples. There is no apostrophe and no hyphen in modern Vietnamese spelling.
- **Case:** not checked. Authors capitalise sentence starts and proper names (§2.7).

**What a typed answer must include**
- every word Vietnamese requires: the classifier where counting or pointing needs it, *không* at the end of *có … không* questions, *phải* in *không phải là*, the question word in place;
- noun-first order (strand b);
- on strict items, every mark.

**What it need not include**
- marks, on non-strict items (graded "almost");
- the subject, where the prompt's context gives it; *có* in *có … không* where both forms are natural (list both);
- *ạ*, except in `requests` items that ask for politeness;
- final punctuation and capitals.

### 10.6 What the lead needs to do in the engine and pipeline

The engine has only taught Spanish, French, Italian, Portuguese and German so far. Vietnamese needs these changes. 1–6 matter for correctness; 7–13 are pipeline or nice-to-have.

1. **Accent-bar labels.** Let a key's label differ from the text it inserts. Show the tone keys as a dotted circle with the mark plus the tone name or aid symbol (for example "◌́ /" for rising). Today `accBar` uses `textContent` for both, so a bare combining mark shows as a floating accent. Suggested data shape: an optional `COURSE.keyLabels`, or a `label=text` syntax inside `keys`. Since `profile.json` must keep its exact shape, the lead decides where it lives.
2. **Smart tone keys (vi only).** A tone key should:
   - apply its tone to the syllable at or before the caret, on the vowel that the placement rule picks, whatever the caret position;
   - replace any tone already on that syllable (pressing the same key again removes it);
   - not stack marks.

   Placement rule (traditional, §2.7), applied in this order:
   - the i of gi and the u of qu do not count as vowels (*giá, quá, quý*);
   - a vowel with a vowel mark (ă â ê ô ơ ư; in ươ, the ơ) takes the tone (*Việt, người, tuổi*);
   - in a syllable with a last consonant, the last vowel takes it (*hoàn, tuần, thuyền*);
   - with three vowels, the middle one takes it (*ngoài, xoài, ngoại, khuỷu*);
   - with two vowels, the first takes it (*hòa, khỏe, thủy, mía, mùa, gửi, cái*). Under the "new" placement, oa, oe and uy are the only exception (*hoà, khoẻ, thuỷ*).

   Optional: vowel-mark keys that convert the previous vowel (a + ˘ → ă) instead of inserting a letter.
3. **"Almost" only for missing marks (vi).** Compare syllable by syllable. An answer is "almost" only if every syllable that differs is the answer's syllable with **all marks removed**, or with *đ* typed as *d*. A syllable typed with a different mark (*bàn* for *bạn*) is wrong. Today's `foldAcc` grades both as "almost". This also fixes the deck matcher, which accepts folded answers as correct with no "almost" note (`renderTypeQ` uses `accLoose` and `foldAcc` silently).
4. **NFC in `normT`.** Add `.normalize('NFC')` in `normT`, which the deck "type it" and dialogue-reply checks use. Without it, an NFD-typed answer fails there while it passes in practice.
5. **One-time keyboard chooser for en-vi** on the first typed item: phone keyboard (with how-to), accent bar, or tiles. Default: typing. (No per-course tiles default exists today; `S.kbTiles` is global.)
6. **Canonical tone placement in matching.** Before comparing, move the tone mark in two-vowel *oa, oe, uy* syllables with no last consonant to one placement, in both the answer and the input, so that *hòa = hoà*, *khỏe = khoẻ*, *thủy = thuỷ*. Leave three-vowel syllables (*ngoài, xoài*) and syllables with a last consonant (*hoàn*) alone. Until then, writers list both placements.
7. **Validator `fold` should fold *đ* to *d*,** as the engine's `foldAcc` already does. Otherwise a fill distractor that differs only by *d / đ* (*đi / di*) is not flagged as needing `!strict`, while the engine would grade it "almost".
8. **`repron.js` does not see vi prons.** Its regex `^[A-Za-z]+(?:[- ][A-Za-z]+)*$` rejects the tone symbols, so it would skip every vi row. It should use the course's `profile.pronPattern` instead.
9. **Pron display:** the aid contains `_ ? ~ . /`. Check that the lesson and card renderers show them raw (no Markdown-style italics from `_`, no trimming of a final `.` or `?`).
10. **Fonts and line height** for stacked marks (*ế, ộ, ữ*, capitals *Ế, Ộ*). Check that the app font covers U+1EA0–U+1EF9, and that the marks are not clipped on cards and tiles (build plan item 8).
11. **TTS voice:** `vi-VN` voices differ by device and may be Southern. The aid and the lessons are Northern, so the lead should check which voice the test devices use, and add a visible note if it is Southern.
12. **Optional: Telex input in answer boxes** for en-vi (typing *vieejt* gives *việt*), for desktop learners without a Vietnamese keyboard.
13. **Validator: strand (a) `ty` items must be strict.** A `ty` item whose `why` uses a strand (a) keyword (a tone name + "tone", "tone mark", "vowel mark", "crossed d") should be required to carry `!strict`. Nothing enforces this today, so a set could pass the standing rule while the engine grades toneless answers "almost".

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The respelling key (§6.1)**, especially the vowel tokens `a` (ă), `uh` (â), `er` (ơ), `uu` (ư), the glide pairs `ahy / ai` (ai / ay) and `ahw / ow` (ao / au), `uhy` for ơi and `ay` for ây, and Hanoi `aing / aik` for *-anh / -ach*. The generator applies the key without error, but whether the key is a good guide is the author's judgment plus 16 forms checked against Wikipedia and Lonely Planet.
2. **The pronoun and politeness rules** in §2.3–2.4 and the Polite Vietnamese and Traps decks: who is *anh* or *chú*, whether *tôi* to a stall-holder sounds distant, how much *ạ* to model, and *dạ* in the North.
3. **The `greet` strings:** *Chào buổi sáng / chiều / tối* are calques used in apps and media, and *Chúc ngủ ngon* is said at bedtime. Is it natural as a late-night greeting?
4. **Southern differences** in §2.1 (beyond d / gi / r / v) and the Southern words in card notes.
5. **The sample cards**, especially *Bớt một chút được không?*, *Cho tôi xuống đây*, *Cứu tôi với!*, *hiệu thuốc*, *Chị có áo màu đỏ không?*, *Mời anh vào*, *Ăn cơm chưa?* as a greeting, and *ốm* (sick in the North, thin in the South).
6. **The false friends** in §4.11 (*ga, chè, bánh mì, to*) and the realistic prices in §9.
7. **Tone-mark placement:** traditional (*hòa*) was chosen to match the reverse course. Native usage is mixed, and no style rule was opened.

**Evidence that could not be opened, or was read only in part**
- **Tone acquisition:** Nguyen & Macken 2008 and Blodgett et al. 2008 were read as abstracts only, with no per-tone figures or participant numbers. Bailey 2012 (East Texas A&M dissertation) was found, but it covers filtered prosody and musical ability, not tone-by-tone errors.
- **Grammar errors:** the one error analysis found (Bui My Hanh 2009) is of **Japanese** learners. No error analysis of English-speaking learners of Vietnamese was found. Classifier, word-order and *là* errors for English speakers are therefore inference plus that study. A University of Hawaiʻi item, *The acquisition of Vietnamese classifiers*, was blocked by a browser check.
- **Phonology:** Wikipedia's current *Vietnamese phonology* was not on the fetch allowlist. Hanoi values come from a 2007 snapshot of that article, which marks some spellings "not covered" (*gi, ph, q*). The Lonely Planet preview gave only the vowel table.
- **Pronouns:** read from an IPFS mirror of Wikipedia's *Vietnamese pronouns* and from Kaiwa's blog. No textbook statement on the order of teaching pronouns was opened.
- **Curriculum:** the ULIS A1–C2 programme was opened; "noun types" in A1 lesson 7 may mean classifiers, but the document does not say. The University of Hawaiʻi Press Vietnamese textbook PDF was blocked by a browser check. No US first-year Vietnamese syllabus was opened.

**Learners**
- No survey of why people in the US study Vietnamese was found. The MLA enrolment figure for Vietnamese was not opened. Pew gives heritage-population numbers, not learner numbers.
- The UMN article is a news story about one programme.

**The roadmap and the brief**
- The brief says to read "the `de` entry" of `packs/roadmaps.js`. That is taken to be a slip for the `vi` entry, which is what this profile uses.
- `classifiers`, `family` and `want-like` have an empty `roadmap` field. The roadmap has no classifier item, so the roadmap preview will not show the classifier lesson unless the lead adds one.

**Engine and pipeline** (for the lead): see §10.6, requests 1–13. The most important are smart tone keys and labels (1–2), "almost" only for missing marks (3), NFC in `normT` (4), canonical tone placement (6), and `repron.js` (8).

**Not verified at all**
- How well a learner reads this respelling. No study compares aid types for this pair.
- Whether the device `vi-VN` voices are Northern (request 11).

## Sources

Web pages opened and used for this profile (2026-11-18):
- [Nguyen, H. T. & Macken, M. A. (2008). Factors affecting the production of Vietnamese tones: a study of American learners. *Studies in Second Language Acquisition* 30(1), 49–77 (abstract)](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/abs/factors-affecting-the-production-of-vietnamese-tones-a-study-of-american-learners/E8ED67A42317CDBC61D5E0DAD20C1E7F)
- [Blodgett, A. et al. (2008). A comparison of native speaker and American adult learner Vietnamese lexical tones. Euronoise 2008 (abstract, University of Minnesota Experts record)](https://experts.umn.edu/en/publications/a-comparison-of-native-speaker-and-american-adult-learner-vietnam/)
- [Bailey, S. L. (2012). Musical ability and tonal languages (dissertation record, East Texas A&M University)](https://lair.etamu.edu/etd/102)
- [Bui My Hanh (2009). Japanese students' common grammar errors in writing Vietnamese. *NUCB Journal of Language, Culture and Communication* 11(1)](https://www.nucba.ac.jp/themes/s_cic@cic@nucba/pdf/njlcc111/04hanh.pdf)
- [ULIS, Vietnam National University, Hanoi: Vietnamese Program A1–C2](https://en.ulis.vnu.edu.vn/files/uploads/2025/01/Vietnamese-Program-A1-C2.pdf)
- [Pew Research Center: Vietnamese in the U.S. fact sheet (ACS 2021–23)](https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-vietnamese-in-the-u-s/)
- [University of Minnesota Language Center: New Vietnamese courses for heritage learners (2025)](https://cla.umn.edu/language-center/news-events/story/new-vietnamese-courses-heritage-learners-why-moment-matters)
- [Wikipedia: Vietnamese phonology (2007 snapshot, mirror)](https://wikipedia2007.classicistranieri.com/en/v/i/e/Vietnamese_phonology.html)
- [Wikibooks: Vietnamese/Tones](https://en.wikibooks.org/wiki/Vietnamese/Tones)
- [Wikipedia: Vietnamese language and computers](https://en.wikipedia.org/wiki/Vietnamese_language_and_computers)
- [Wikipedia: Vietnamese pronouns (IPFS mirror)](https://bafybeiaysi4s6lnjev27ln5icwm6tueaw2vdykrtjkwiphwekaywqhcjze.ipfs.ipfs.hypha.coop/wiki/Vietnamese_pronouns)
- [Lonely Planet Vietnamese Phrasebook, 8th ed., preview (pronunciation table)](https://media.lonelyplanet.com/shop/pdfs/vietnamese-phrasebook-8-preview.pdf)
- [vncomp: Regional differences (Vietnamese alphabet notes)](https://vncomp.github.io/docs/alphabet/regionaldif)
- [Kaiwa blog (2026): Vietnamese phrases that are accidentally rude (commercial blog)](https://trykaiwa.com/blog/vietnamese-phrases-accidentally-rude-2026)

Opened but not used (off topic: they cover Vietnamese speakers learning English): Ha Cam Tam 2005 (*VNU Journal of Science*); Nguyễn et al. 2025 (*Tạp chí Giáo dục*); Gear 1982 (UNI thesis).

Local project files read: `docs/briefs/target-profile-vi.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-it.md` and `tools/target/it/profile.json` (shape models), `tools/target/es/profile.json` and the head of `tools/target/es/respell.js`, `tools/target/pt/respell.js` (generator model), `packs/roadmaps.js` (entry `vi`), `tools/target/lib.js`, `gen.js`, `validate.js` and `repron.js`, the accent bar and matchers in `src/app.html` (`accBar`, `pracNorm`, `foldAcc`, `pracMatch`, `normT`, `renderTypeQ`), and the head of `docs/profiles/vi.md` (reverse course: register and spelling conventions only).
