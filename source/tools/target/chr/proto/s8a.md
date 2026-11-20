
## 8. Lessons (final order)

**How much of the roadmap the verified material supports.** Each lesson needs at least 3 example rows, 3 check questions and 12–16 practice items (at least 4 `mc`, 3 `order`, 3 `fill`, 3 `type`), with Cherokee text in every `order` answer and `type` answer (`tools/target/validate.js`, read). With sign-by-sign tiles (§7) every lesson can meet the `order` minimum from lexicon words alone; the real limit is whether a lesson has **enough verified words for its topic** (about 10 or more, for 3 example rows and 12+ items without repeating).

| Roadmap item | Verdict | Verified material (count) |
|---|---|---|
| chr-sounds, chr-syllabary-1 … 4 | supported | 85 signs (Unicode names), 73 of them in lexicon words |
| chr-greetings | supported | 15 words and 2 Joyner sentences |
| chr-first-words | supported | 18 words |
| chr-classroom | **not supported: cut** | NHA's survival phrases are romanised only |
| chr-numbers | supported | 16 |
| chr-name | supported | 7 "called" forms, 12 names, 3 sentences |
| chr-pronouns | supported (absorbs chr-places) | 11 pronouns and place words |
| chr-questions | supported | 4 question words, 4 endings, 8 Joyner questions |
| chr-family | **not supported: cut** | no family word in a source opened |
| chr-numbers-big | supported without prices | 18; no money words |
| chr-see-he, chr-see-i-you | supported | 10 forms of "see", 15 Joyner sentences with them |
| chr-colours | supported without clothes | 20; no clothing words |
| chr-plurals | supported | 17 people words, plurals of things |
| chr-want | supported | 12 forms |
| chr-negation | supported | 25 negative forms (Joyner L18–20) |
| chr-have | supported | 16 forms (+ 12 negatives) |
| chr-food | **not supported: cut** | ᏄᎾ, ᏚᏯ only (moved to `animals`) |
| chr-animals | supported | 11 animals, 12 things, ᎢᏯᏂ |
| chr-copula | supported | 18 forms, 3 sentences |
| chr-time | **not supported: cut** | days fail the pairing check (§11); no clock words |
| chr-places | **merged into `pronouns`** | ᎠᏂ / ᎠᎭᏂ, ᎤᎿ, ᎾᎥ, ᎢᎾ (5) |
| chr-feelings | **not supported: cut** | nothing verified |

**The proposal: a 21-lesson course** (20 roadmap items kept, places merged), **18 decks, about 326 verified cards** (the pools below). The lead cuts the six items from the roadmap rather than pad them. They can come back when a source with syllabary and romanisation for them is opened (the Cherokee Nation's Consortium word list and *See, Say, Write* are the obvious ones, §11).

**Validator floors that the verified material does not reach on its own:**
- **Dialogues (40+):** only 34 of Joyner's sentences generate, and several are fragments. Forty dialogues need composed lines (words from the lexicon put together by writers). Either the lead lowers the floor for `chr` to what the sources support (request 7), or every composed line is marked `comp` and sent for a first-language check before release.
- **Examples (30+), patterns (15+):** reachable: 34 Joyner sentences and 300+ words; patterns can be the prefix sets (Set A see, Set B want, have solid / alive, Ꮭ + Ᏹ-, ᎠᏂ- / Ꮧ- plurals, the four endings, the copula forms).

**Changes from the roadmap** (all [inference] built on §4 and the sources):
- **Kept, in the roadmap's order:** 20 items; ids lose the `chr-` prefix.
- **Cut:** `classroom`, `family`, `food`, `time`, `feelings` (no verified words); `places` merged into `pronouns`.
- **Retitled to sourced forms:**
  - `greetings`: ᏙᎯᏊ and ᏛᎬᎪᎯ kept; the roadmap's forms are confirmed (Joyner L10).
  - `first-words`: ᎥᏝ / Ꮭ confirmed (Joyner L4).
  - `name`: Gado detsadoa? and Hatlv hinela? (NHA, romanised only) replaced by ᎦᏙ ᏕᏣᏙᎠ? (Joyner L13), which generates the same romanisation, *Gado detsadoa?*.
  - `pronouns`: ᎠᏴ "I. We." (Joyner); *nihina* (DAILP, romanised only) only in notes.
  - `questions`: ᎭᏢ *hatlv* dropped (no syllabary source); -Ꮝ / -ᏍᎪ confirmed by Joyner's sentences.
  - `numbers-big`: ᏍᎪᎯᏥᏆ confirmed, *sgohitsgwa* (Joyner L11); prices cut.
  - `colours`: clothes cut.
  - `negation`: Tla yigoliga (NHA, romanised only) replaced by Joyner's Ꮭ ᏱᎩ / Ꮭ ᏯᎩᎭ.
  - `have`: ᏣᎭ, ᎤᎭ, ᎠᎩᎧᎭ confirmed (Joyner L17).
  - `animals`: ᎠᏫ, ᏙᏯ, ᏩᏯ, ᎢᏯᏂ confirmed; it also takes the two food words and the things.
  - `copula`: ᎢᎩ, ᎨᏒᎩ confirmed; "now, earlier, every day" become ᎢᎩ / ᎢᎦ / ᎨᏐᎢ (Joyner's own labels).
- **The roadmap's romanisations were checked against the generator:** all the roadmap's syllabary + romanisation pairs that are in the lexicon agree (*osiyo*, *tohitsu*, *tohigwu*, *wado*, *dvgvgohi*, *vv*, *vtla*, *tla*, *howa*, *osda*, *tsalagi*, *sagwu*, *tali*, *tsoi*, *nvhgi*, *hisgi*, *sgohi*, *dagwadoa*, *ayv*, *nihi*, *gado*, *gago*, *sadu*, *sgohitsgwa*, *agowhtiha*, *anigowhtiha*, *tsigowhtiha*, *higowhtiha*, *gigagei*, *unega*, *gvhnagei*, *gasgilo*, *digasgilo*, *agwaduliha*, *tsaduliha*, *uduliha*, *unaduliha*, *tsaha*, *uha*, *agikaha*, *tuya*, *ahwi*, *doya*, *wahya*, *iyani*, *igi*, *gesvgi*), because the roadmap's author took them from Joyner too. Not confirmed: ᎭᏢ *hatlv*, -Ꮝ / -ᏍᎪ as separate items (confirmed only inside sentences), ᏣᎳᎩ ᎦᏬᏂᎯᏍᏗ (the roadmap's `self`: replaced by ᏣᎳᎩ in `profile.json`).

LESSONS

**Per-lesson notes for writers:**
- Every set satisfies §7: two `order` and two `type` hinges; in the script lessons by sign, from `see-he` on by prefix.
- **Every Cherokee string a writer uses must generate** (`node tools/target/chr/respell.js "…"`), which means every word is in `lexicon.txt`. **Prefer Joyner's sentences copied whole** (the table below) for example rows, dialogues and `order` items; a composed sentence (lexicon words put together by the writer) is marked `comp` in the writer's report and goes to the first-language check (§11).
- **Composing is limited to Joyner's own patterns:** noun(s) + verb (ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ), ᎯᎠ + noun (ᎯᎠ ᏧᏁᎦ ᏪᏌ), noun + ᎤᏲᎢ / ᎣᏍᏓ, Ꮭ … ᏱᎩ, a word + -Ꮝ / -ᏍᎪ / -Ꮷ / -Ꮚ. No new verb forms, no new prefixes on a word that is not in the lexicon.
- **The prefix is named in every `why` that turns on it** ("the prefix ᎠᏂ- …", "Set B …"). The only prefixes the course names alone are those Joyner names (Ꭴ-, ᎠᏂ-, Ꮧ-, Ꭰ-, Ᏹ-, Ꮿ-, Ᏻ-) and, from comparing his forms, Ꮵ- (I) and Ꭿ- (you) in Set A; Set B forms are taught whole (ᎠᏆᏚᎵᎭ, ᏣᏚᎵᎭ), with no prefix split off (§11).
- The last two items of each set may mix in a neighbour from an earlier lesson. **Preferred neighbours:** the question endings (-Ꮝ / -ᏍᎪ), ᎢᏯᏂ / ᎢᎦ, Ꮭ + Ᏹ-.
- Cue the prompt when two forms fit: "(a dog: alive)", "(several things)", "(to one person)".
- Lesson bodies are in English, with Cherokee in `<b>` and the romanisation in `<i>` at first mention; example rows `{{ex:Cherokee|pron|English}}` take the generated pron.
- **`sounds`** names the Eastern dialect once (§2.1), says what the romanised line does not show (§6.2), and links the Cherokee Nation Language Department. **The last lesson (`copula`)** ends with a short "keep going" paragraph pointing to the Cherokee Nation's free classes and materials.

**Joyner's sentences that generate** (34; for example rows, dialogues and `order` items; "(suffix)" = read with a derived ending, §2.5):

SENTENCES

## 9. Decks

**18 decks in 5 groups, 326 verified cards** (12–25 per deck; validator range 12–30). Card shape: `target | pron | meaning | note`.
- `target`: the syllabary, uppercase; sentences with spaces between words and `. , ? !`. **Every target must generate without a throw.**
- `pron`: generated (§6); for the sign cards of the four syllabary decks, `signValue` (§6.2). Never typed.
- `meaning`: short American English, from Joyner's gloss. Where Joyner's spelling has two meanings (ᎠᏆᏚᎵᎭ), give the one the deck teaches and name the other in the note.
- `note`: one English line, or empty; the place for Joyner's detailed string when the point is tone or length (copied from `lexicon.txt`).
- Within a deck no two cards share a meaning (validator): "deer" (ᎠᎭᏫ) and "deer, short form" (ᎠᏫ) if both are used.
- `Origin` in the samples: `sign` (a sign card), `word` (a lexicon line), `sent` (a Joyner sentence copied whole).

**Groups, in order:**

| Group | Decks |
|---|---|
| The syllabary | Syllabary: vowels, g/k and h · Syllabary: l, m, n and gw · Syllabary: s, d/t and dl/tl · Syllabary: ts, w and y |
| First steps | Greetings · First words · Names and introductions · Pronouns, questions and places |
| Numbers | Numbers 1 to 10 · Numbers to 100 |
| People, animals and things | People · Animals and things · Colours |
| Verbs as whole words | Seeing (Set A) · Wanting (Set B) · Having: solid and alive · Not, is and was · Traps for English speakers |

**Script decks work as ordinary decks** (no letter-drill machine needed): one card per sign, `target` the sign, `pron` its value, `meaning` "the sign for …", `note` a lexicon word that uses it (from the lexicon only; the 12 signs no word uses get a note on their row instead). Ᏽ is not a card (archaic).

**The verified pool per deck** (every target generates; writers choose from these and may add Joyner sentences from §8):

POOL

**Five sample cards per deck** (all `pron` values generated by `respell.js` or `signValue` and checked against `pronPattern`):

DECKS
**Localisation** (examples, dialogues, practice):
- **People:** Joyner's Cherokee name forms only (§2.3): ᎺᎵ, ᏣᏂ, ᏕᏫᏗ, ᏙᎹᏏ, ᏑᏌᏃ, ᎵᏂᏓ, ᎹᎦᎵ, ᎹᎦᏰᏘ, ᏆᏆᎠ, ᏣᎵ, ᎡᏂᏙᏂ, ᎠᎵᏌᏇᏘ; and his comic's ᏕᏫᏗ ᏥᏍᏚ (David Rabbit) with Ꮎ ᎠᏂᏦᎢ ᏲᎾ (those three bears). The learner speaks as the "I" of the verb. No celebrities; no other names in Cherokee strings.
- **Places:** none in Cherokee (no place name was verified). Oklahoma, Tahlequah, North Carolina appear in English only.
- **Animals and things:** dog, cat, deer, wolf, beaver, rabbit, squirrel, horse, bear; rock, tree, acorn, potato, beans, paper, table / chair, trap.
- **Money, food, time:** none (cut topics).
- **Greetings in `profile.json`** (`greet`; the app shows one by time of day, but **no time-of-day greeting was verified**, so all four are plain greetings): late night ᏛᎬᎪᎯ "I will see you again"; morning ᎣᏏᏲ "Hello"; afternoon ᏙᎯᏧ? "How are you? (Things are well, right?)"; evening ᏏᏲ "Hello".
