#!/usr/bin/env python3
# Character foundations, batch 3 (most-used languages first): hand-off and iterations notes. usage: python3 tools/patches/foundations_docs_b3.py <version>
import io, os, sys, re
V = sys.argv[1]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'docs', 'HANDOFF.md'); s = io.open(p, encoding='utf8').read()
assert 'most-used languages first' not in s
a = "  - Still to do, in order: en-th, en-am, en-ru;"
assert s.count(a) == 1
i = s.index(a); j = s.index('\n', i)
s = s[:i] + """  - **Owner's rule, 2026-11-25: "lets start with the most used languages when we make updates".** Every roll-out goes to the most-used languages first, not by script family. No usage numbers were read; the order is by learners worldwide: English (the English-for-X courses), Spanish, French, Japanese, German, Mandarin, Italian, Korean, Russian, Portuguese, then the rest.
  - **Batch 3, %s: `en-es`, `en-fr`, `en-de`, `en-zh`, and `en-ru`, `en-th`, `en-am` (those three were written before the rule).** Latin-script courses (es, fr, de): ONE lesson, `sounds`; it teaches what differs from English (letters with another sound, accents, letter groups), all letters on tiles, small in-lesson decks of spellings and a deck "Read whole words"; no letter cards for the ABC. In these three courses lesson 1 now names its own `sections`, so section matching (SEC-1, `lsAlign`) skips that one lesson. en-zh, lessons 1 to 4: tiles for the 21 initials, the finals, the tones and 15 radicals; in-lesson decks "Pinyin syllables", "Two-syllable words", "Radicals", "Characters from parts"; "Tone pairs" is cut across `tones` and `tone-change`. en-ru, lessons 1 to 3: a card and a tile for each of the 33 letters, a word deck per lesson (`stress` untouched: its deck is phrases). en-th: the script lessons are 5, 6, 8 and 11 and stay there; tiles for the 44 consonants by class with their names, vowels on อ, the tone marks; cards for the 7 consonants that had none; word decks that add finals, then tone marks; `tones` and `sounds` share their deck, cut between them. en-am, lessons 1 to 5: tiles for the 34 first-order letters and whole rows, a word deck after each block of rows. Reviews: es 2 notes, fr 3, de 3, zh 5, ru 3, th 10, am 1, applied except: fr ç stays tile-only.
  - Engine addition in batch 3 (`tools/patches/foundations_b3.py`): a tile reading longer than 6 characters is set smaller and may wrap. Test (`FOUND`): `anywhere` (script lessons not first), `frontStarts` (a letter card's front starts with the letter), and a Latin alphabet listed as `tilesOnly`.
  - Known, not fixed: en-am card ኸ reads "he" while the lesson text says its first order has the a vowel (older than this work). Writers count the text before the first `<h3>` as a section of its own again and again: the test catches it; drop the first entry.
  - Still to do, in order: English for X (26 courses; `tools/halves` and `tools/content` do not pass `sections` yet), biggest native languages first; en-it, en-pt, en-ptpt, en-espr and the other Latin-script courses; en-yue, en-nan, vi-zh, en-vi, en-hmn.""" % V + s[j:]
s = re.sub(r"^## Released \(through [0-9.]+\)", "## Released (through %s)" % V, s, flags=re.M)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'iterations.md'); s = io.open(p, encoding='utf8').read()
s = s.rstrip('\n') + """

### FND-1 — batch 3 (%s): most-used languages first
Kii: "lets start with the most used languages when we make updates". Order changed from script families to use: en-es, en-fr, en-de, en-zh, with en-ru, en-th, en-am that were already written. One Opus writer each (116k to 171k tokens; French sent back once to drop a 26-card deck of letter names from lesson 1), one Opus cold review each (86k to 117k). Found by the test: three writers counted the opening lines as a section. Found by eye: Thai letter names ran out of their tiles (fixed in the engine). `tools/tests/foundations.js`: 194 checks. Not tested: native speakers, real phones.
""" % V
io.open(p, 'w', encoding='utf8').write(s)
print('batch 3 docs for', V)
