#!/usr/bin/env python3
# Character foundations, batch 1 (Arabic script): hand-off and iterations notes. usage: python3 tools/patches/foundations_docs_b1.py <version>
import io, os, sys
V = sys.argv[1]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'docs', 'HANDOFF.md'); s = io.open(p, encoding='utf8').read()
assert 'batch 1' not in s
a = "- **Next, only after the owner says so:** the other courses, by script family, in the Doc's order."
assert s.count(a) == 1
s = s.replace(a, """- **Roll-out (owner, 2026-11-25: "lets work in batches").** One release per batch, by script family, a short report after each, no go-ahead card between batches. Per course: one Opus writer on `docs/briefs/foundations-writer.md` (it writes `tools/patches/foundations_<t>.py`), one Opus cold review, the course added to `FOUND` in `tools/tests/foundations.js`. Lessons are never reordered and no card of an existing deck changes. Ask the coordinator for the turn before each push.
  - **Batch 1, %s: Arabic script, `en-ar` and `en-ur`.** en-ar, lessons 1 to 7: tiles for the 28 letters in two halves, each followed by its letter deck (Letters 2 now sits in the joining lesson); a chart of the four forms of all 28 letters; in-lesson decks "Joined words" (18) and "Sun and moon words" (8); the deck "Vowels and marks", which four lessons shared whole, is cut across them so each card is taught once. en-ur, the five script lessons: tiles for the 40 letters, each deck cut by section, a start / middle / end chart, in-lesson decks "The nasal ں" (6; ں had no card) and "Read joined words" (16). Reviews: 2 notes each, all applied.
  - Engine additions in batch 1: tile grids run right to left for `ar` and `ur`; an underscore inside a hand-set tile reading is a space. Test: a block of flashcards has at least 3 cards; a deck shared by several lessons may be cut across them, each card in exactly one lesson; `soundOnly` lessons need no chart.
  - Still to do, in order: Indian scripts (en-hi, en-bn, en-pa, en-te, en-kn); en-th, en-am, en-ru; en-zh, vi-zh, en-yue, en-nan; then Latin-script courses; then English for X.
- **Gaps a first check found:**""" % V)
s = s.replace("- **Gaps a first check found:** Gaps a first check found: ", "- **Gaps a first check found:** ")
import re
s = re.sub(r"^## Released \(through [0-9.]+\)", "## Released (through %s)" % V, s, flags=re.M)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'iterations.md'); s = io.open(p, encoding='utf8').read()
s = s.rstrip('\n') + """

### FND-1 — batch 1 (%s): Arabic script
Kii, asked whether to apply the Japanese pilot to all courses: "lets work in batches". en-ar and en-ur, one Opus writer each from the shared brief (`docs/briefs/foundations-writer.md`; 134k and 130k tokens, one round of changes each: blocks under 3 cards merged; the Arabic writer had counted the opening lines as a section of their own), one Opus cold review each (106k and 101k; 2 notes each, applied). What the writers decided: "putting together" is joining; Arabic keeps its second letter deck for the joining lesson; Urdu puts the joining chart in the last script lesson, when every letter is known. `tools/tests/foundations.js`: 42 checks. Not tested: native speakers, real phones, Nastaliq rendering on devices without the font.
""" % V
io.open(p, 'w', encoding='utf8').write(s)
print('batch 1 docs for', V)
