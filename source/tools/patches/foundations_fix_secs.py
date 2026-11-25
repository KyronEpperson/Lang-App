#!/usr/bin/env python3
# 2.121.0 shipped en-es, en-fr and en-de without their SECS block (the packs were regenerated and tools/sections/apply.js was not run).
# This script: ship.sh stops when a pack is out of date; hand-off and iterations notes. Run `node tools/sections/apply.js` before it. usage: python3 tools/patches/foundations_fix_secs.py <version>
import io, os, sys, re
V = sys.argv[1]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'tools', 'curriculum', 'ship.sh'); s = io.open(p, encoding='utf8').read()
a = "node tools/tests/lesson_sections.js > "
assert s.count(a) == 1 and 'sections/apply.js --check' not in s
s = s.replace(a, "node tools/sections/apply.js --check || { echo 'SECTION TABLES MISSING FROM A PACK: run node tools/sections/apply.js after regenerating a pack, then ./build.sh'; exit 1; }\n" + a)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'docs', 'HANDOFF.md'); s = io.open(p, encoding='utf8').read()
a = "  - Known, not fixed: en-am card"
assert s.count(a) == 1
s = s.replace(a, "  - **Regenerating a pack that has section tables:** after `node tools/target/gen.js <t>` (or any generator) run `node tools/sections/apply.js`, or the pack loses its `SECS` block. 2.121.0 shipped en-es, en-fr and en-de without it (their lessons from 2 on fell back to the engine's own matching); fixed in %s, and `ship.sh` now stops when `apply.js --check` finds a pack out of date.\n" % V + a)
s = re.sub(r"^## Released \(through [0-9.]+\)", "## Released (through %s)" % V, s, flags=re.M)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'docs', 'briefs', 'foundations-writer.md'); s = io.open(p, encoding='utf8').read()
a = "(To re-run the script after a fix:"
assert s.count(a) == 1
s = s.replace(a, "(The dispatcher runs `node tools/sections/apply.js` after your pack is regenerated in the build home; a pack with a section table loses it otherwise.)\n" + a)
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'iterations.md'); s = io.open(p, encoding='utf8').read()
s = s.rstrip('\n') + """

### FND-1 — fix (%s): section tables back in en-es, en-fr, en-de
My mistake in 2.121.0: the three packs were regenerated and `tools/sections/apply.js` was not run, so their `SECS` block (2.117.0) was gone. Found the same evening while reading the tools for the English courses. Restored; `ship.sh` now runs `apply.js --check` before the lesson tests.
""" % V
io.open(p, 'w', encoding='utf8').write(s)
print('secs fix notes for', V)
