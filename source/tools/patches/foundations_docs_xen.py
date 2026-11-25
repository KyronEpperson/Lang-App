#!/usr/bin/env python3
# hand-off and iterations notes for the letter tiles in the 26 English courses. usage: python3 tools/patches/foundations_docs_xen.py <version>
import io, os, sys, re
V = sys.argv[1]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'docs', 'HANDOFF.md'); s = io.open(p, encoding='utf8').read()
a = "  - Still to do, in order: English for X (26 courses;"
assert s.count(a) == 1
s = s.replace(a, "  - **English for X, step 1 (%s):** the `alphabet` lesson of all 26 courses has flip tiles for A to Z under the table of letter names (`tools/patches/foundations_xen_tiles.py` edits `tools/content/<lang>/lessons.js`; `tools/content/validate.js` accepts `{{tiles:}}`). A tile's reading is the letter card's reading. The 26 courses are in `FOUND` as `light` (cards, tiles, order and the flip are checked; the lesson is driven by `tools/content/e2e_en.js`, not again here). After `node tools/content/gen.js <lang>` run `node tools/sections/apply.js`. Step 2, not done: a spelling-patterns section (sh, ch, th, silent e and so on) per native language, by a writer.\n" % V + a)
s = re.sub(r"^## Released \(through [0-9.]+\)", "## Released (through %s)" % V, s, flags=re.M)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'iterations.md'); s = io.open(p, encoding='utf8').read()
s = s.rstrip('\n') + """

### FND-1 — English for X, letter tiles (%s)
All 26 English courses: 26 flip tiles under the letter-name table of lesson 1. No writer needed (the readings are the existing letter cards). `foundations.js` covers the 26 in light mode; 44 courses to 18 in `PENDING`. Checked by eye: es-en, ja-en, ar-en. Not done: spelling patterns.
""" % V
io.open(p, 'w', encoding='utf8').write(s)
print('xen docs for', V)
