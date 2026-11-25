#!/usr/bin/env python3
# Character foundations, batch 2 (Indian scripts): hand-off and iterations notes. usage: python3 tools/patches/foundations_docs_b2.py <version>
import io, os, sys, re
V = sys.argv[1]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'docs', 'HANDOFF.md'); s = io.open(p, encoding='utf8').read()
assert 'Indian scripts, `en-hi`' not in s
a = "  - Still to do, in order: Indian scripts (en-hi, en-bn, en-pa, en-te, en-kn); en-th, en-am, en-ru;"
assert s.count(a) == 1
s = s.replace(a, """  - **Batch 2, %s: Indian scripts, `en-hi`, `en-bn`, `en-pa`, `en-te`, `en-kn`.** In each: the script lessons (4 or 5) get named sections, tiles for every letter row by row beside the grid chart, each deck cut by section, and in-lesson decks of real words that use only what has been taught (consonant plus vowel sign first, conjuncts and nasal marks in the last script lesson). Letters that had no card now have one in an in-lesson deck: hi ष ढ़ ङ ञ, the nuqta letters and क्ष त्र ज्ञ श्र; bn 20 consonants and ং ঃ ঁ ৎ; pa ੳ ੲ ਙ ਞ ਢ ਬ ਮ ਯ ਰ ਲ ਵ and the six dotted letters; te and kn ఋ ఙ ఞ ష / ಋ ಙ ಞ ಷ. en-pa `nasal` now teaches the dotted letters first. Reviews: 1 to 4 notes each, applied, except two placement notes (hi: the word cards घी and चाचा stay in the last block of lesson 2, because a deck is cut in deck order; bn: ঢ's card stays beside ঢ়).
  - Engine addition in batch 2 (`tools/patches/foundations_b2.py`): a tile also finds its reading on a card of an in-lesson deck.
  - Writers and reviewers worked in a copy of `source/` (`/home/work2`) so the build home stayed free for the release before.
  - Still to do, in order: en-th, en-am, en-ru;""" % V)
s = re.sub(r"^## Released \(through [0-9.]+\)", "## Released (through %s)" % V, s, flags=re.M)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'iterations.md'); s = io.open(p, encoding='utf8').read()
s = s.rstrip('\n') + """

### FND-1 — batch 2 (%s): Indian scripts
en-hi, en-bn, en-pa, en-te, en-kn. One Opus writer each from the shared brief (126k to 159k tokens, no second round), one Opus cold review each (92k to 106k; hi 2 notes, bn 4, pa 3, te 1, kn 3). The earlier count of letters without a card was low: Bengali lacked 20 consonants and the four marks, Punjabi 11 letters. Found by the test, not the reviews: tiles did not read from in-lesson decks (fixed in the engine). `tools/tests/foundations.js`: 110 checks. Not tested: native speakers, real phones; the build machine has no good Telugu or Kannada font, so those two were not judged by eye.
""" % V
io.open(p, 'w', encoding='utf8').write(s)
print('batch 2 docs for', V)
