#!/usr/bin/env python3
# hand-off and iterations notes for a batch of spelling-patterns sections. usage: python3 tools/patches/spelling_docs.py <version> "<langs done in this batch>"
import io, os, sys, re
V, L = sys.argv[1], sys.argv[2]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'docs', 'HANDOFF.md'); s = io.open(p, encoding='utf8').read()
a = "  - Still to do, in order: English for X (26 courses;"
assert s.count(a) == 1
s = s.replace(a, "  - **English for X, step 2, spelling patterns (%s: %s):** a last section in the `alphabet` lesson: 8 to 12 letter groups chosen for the native language (silent e, ee, oo, igh, qu and so on; what `pron` teaches is only pointed to), a table, tiles with hand readings, and 10 word cards added through `tools/sections/<lang>-en/sections.json` (`alphabet`, section 4). One Opus writer per language with `docs/briefs/spelling-patterns-writer.md` (each in its own copy of the build home), one Opus cold review, the dispatcher applies the fixes to `tools/patches/spelling_<lang>.py`. Every reviewer asked for the same thing: name the everyday exceptions (have, give, come, book, bread, you, school); the brief should say so for the next batch. Order after each script: `node tools/content/gen.js <lang>`, `node tools/sections/apply.js`, `./build.sh`, `node tools/sections/check.js <lang>-en`. Languages still without the section: the rest of `tools/content/`.\n" % (V, L) + a)
s = re.sub(r"^## Released \(through [0-9.]+\)", "## Released (through %s)" % V, s, flags=re.M)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'iterations.md'); s = io.open(p, encoding='utf8').read()
s = s.rstrip('\n') + """

### FND-1 — English for X, spelling patterns (%s): %s
A last section in lesson 1: letter groups that read differently from the learner's own spelling, a table, flip tiles, 10 word cards. Writers and cold reviewers on Opus; all reviewers' must-fix items applied (mostly: rules stated without their everyday exceptions). Not read by a native speaker.
""" % (V, L)
io.open(p, 'w', encoding='utf8').write(s)
print('spelling docs for', V)
