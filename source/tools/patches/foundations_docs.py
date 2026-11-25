#!/usr/bin/env python3
# Character foundations (FND-1): hand-off section and iterations entry. usage: python3 tools/patches/foundations_docs.py <version>
import io, os, sys
V = sys.argv[1]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'docs', 'HANDOFF.md'); s = io.open(p, encoding='utf8').read()
assert 'FND-1' not in s
rule = "- Replies: brief, bullets, direct. Visuals as PNG."
assert s.count(rule) == 1
s = s.replace(rule, "- Fixes and improvements (2026-11-25): plan and make them without asking first; tell the owner the problem and the fix; apply it to ONE course, release, then ask whether to apply it to all courses.\n- Every course opens with a foundation that teaches its writing system the way Korean lesson 1 does, fitted to the script (2026-11-25; see \"Character foundations\").\n" + rule)
rel = "\n## Lesson sections (LS-1"
assert s.count(rel) == 1
s = s.replace(rel, """
%s (2026-11-25): **character foundations, pilot on Japanese for English speakers (`en-ja`)** (owner: "learning the characters of a language is foundational can we make sure the other languages have similar structures that fits for them"). The engine piece is for every course; only en-ja uses it so far. Details in the section "Character foundations" below; prompt and results in `iterations.md`, entry FND-1.

## Character foundations (FND-1, %s)

Plan for all 71 courses and the rewritten prompt: the Doc "Character foundations for every course: prompt and plan" (https://claude.ai/artifact/2Z8DGGABuc866QNjVyBxAk). **Only en-ja is built. The owner is asked before any other course gets it.**

- **The pattern.** How the script works; then each kind of piece as a teaching section with a chart or flip tiles and its own deck; then a step that puts pieces together, with a deck of real words that lives inside the lesson (Korean's stacking); then the review the engine already runs.
- **Engine, for any pack course** (`src/app.html`, edit script `tools/patches/foundations.py`, which lists the forms):
  - A lesson may carry `sections`, one entry per section as `lsPlan` cuts the body: `null`, `"Deck name"`, `{deck, n:[a,b]}`, `{name, cards:[[front, reading, meaning, note]]}` (a deck that lives only in the lesson), or a list of those. `lsSecCards` reads it; hand-set sections win over guessing and over `lsAlign` (2.112.0). An in-lesson deck is in `DECKS` under its label and never in `PATH` / `names`, like `가나다`.
  - `{{tiles:あ い う}}` draws flip tiles: the letter; tap for its reading and sound; tap again for the letter. The reading is that of the card with the same front, or `x=reading`; `_` is a gap. Five columns (`.tiles-grid`). Stroke drawings stay Hangul-only.
  - `tools/target/gen.js` passes `sections` through. The other generators (`tools/halves`, `tools/content`) do not yet.
- **en-ja** (`tools/patches/foundations_ja.py` edits `tools/target/ja/lessons-1.js` and `lessons-2.js`; then `node tools/target/gen.js ja && node tools/lessonread/apply.js en-ja`):
  - Lesson 1: the first four rows then the Hiragana 1 deck (20); the other six rows then Hiragana 2 (26), which no lesson used before; "Read your first words" then 20 words in basic hiragana.
  - Lesson 2: a new first section on the dotted letters then the first 23 cards of Hiragana 3; "Count beats" then its last 5 cards plus 15 words with small letters, っ, long vowels and ん.
  - Lesson 3: the first four katakana rows then Katakana 1 (20); the other six then the 26 letters of Katakana 2, also unused before; loanwords then its last 4 cards plus 16 words.
  - Lesson 13 (first kanji): a new opening section on how kanji are built, then the deck cut by hand into numbers (14), days and time (10), people (6).
  - 117 flip tiles. No card of an existing deck was changed, so saved progress is untouched.
  - Kanji stay at lesson 13, not in the first block as the plan said: that lesson's examples need the numbers, days and verbs of lessons 4 to 12.
- **Tests.** `node tools/tests/foundations.js` in `ship.sh` (about 2 minutes): every lesson with `sections` is well formed; in en-ja each of the 115 kana (46 + 46 + 23 dotted) is on a card and a tile in lessons 1 to 3, ぢ and づ on tiles; every tile has a reading and flips; a new learner is walked through lessons 1 to 3 to the end. It failed on both mistakes planted (a tile removed, a slice one card short). To add a course, add it to `FOUND` there. `tools/tests/lesson_sections.js` accepts other decks in a lesson that names its sections.
- **Review.** One Opus cold review of the new text and the 51 new cards: 5 notes, 4 applied (two card notes, a sentence moved out of a tip, an example without ー under the first katakana grid). Left: katakana long i is written ī (takushī) as the lesson already did, while hiragana long i is ii.
- **Not tested / not done.** Native-speaker review, real phones, recorded audio for the new words (they use the device voice until `gen_elevenlabs.js ja` is run). The dotted katakana have tiles in no lesson and no cards. Lessons 1 and 3 now hold 66 cards each; the list still says "~5 min".
- **Next, only after the owner says so:** the other courses, by script family, in the Doc's order. Gaps a first check found: letters with no card in en-bn (about 13), en-pa (up to 6), en-hi 3, en-te 4, en-kn 4, en-th 7; Thai script starts at lesson 5; the alphabet deck of the English courses is 21st in the deck list.
""" % (V, V) + rel)
s = s.replace("## Released (through 2.1", "## Released (through 2.1", 1)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'iterations.md'); s = io.open(p, encoding='utf8').read()
assert 'FND-1' not in s
s = s.rstrip('\n') + """

## FND-1 — prompt
Kii: "learning the characters of a language is foundational can we make sure the other languages have similar structures that fits for them. have fable rewrite the prompt to plan and make sure all language courses follow similar structure that fits each language". Rewritten: a learner who cannot read the target language must be able to read and sound out any word before the course asks for phrases; every course opens with a foundation to the standard of Korean lesson 1 (a teaching section with a chart, its deck, the next section, its deck, a step that puts the pieces together with its own deck, a review), fitted to its script and never copied from Korean; every letter of the standard set on a card; engine work first and once. The full brief and the plan for all 71 courses are in the Doc linked from `docs/HANDOFF.md`. Then, the same day: "have fable plan and optimize models to fix / enhance without asking my opinion first... apply it to a single course and then ask if it should be applied to all courses", so the engine piece and one course were built without a go-ahead card.

### FND-1 — results (%s)
Engine: a lesson names the flashcards of each section (`sections`), decks can live inside a lesson, and `{{tiles:…}}` draws flip tiles for any script. Pilot: en-ja, lessons 1 to 3 and 13; 51 new cards in three in-lesson decks, 117 tiles, the two kana decks no lesson used are now taught. What the survey found: no course lacks script lessons; what they lack is the structure around them (charts, tiles, a combining deck, hand-set sections, a few letters). Differs from the plan: kanji stay at lesson 13. Tests: `tools/tests/foundations.js` (12 checks; two planted mistakes caught). Models: engine, lesson text and cards written in the main chat; one Opus cold review (91k tokens, 5 notes, 4 applied). Not tested: native speakers, real phones, recorded audio for the new words.
""" % V
io.open(p, 'w', encoding='utf8').write(s)
print('docs updated for', V)
