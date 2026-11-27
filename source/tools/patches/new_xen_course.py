#!/usr/bin/env python3
# Register a new English-for-X course (<x>-en) with the release tests. usage: python3 tools/patches/new_xen_course.py <x> ...   (safe to run again)
# 1. adds <x> to the X-en list in tools/tests/foundations.js (lesson 1 `alphabet` is its writing-system foundation)
# 2. switches the section decks on (LS_ALIGN in src/app.html) through lesson_align_on.py
import io, os, re, subprocess, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
P = os.path.join(ROOT, 'tools', 'tests', 'foundations.js'); s = io.open(P, encoding='utf8').read()
m = re.search(r"'((?:[a-z]{2,4} )+[a-z]{2,4})'\.split\(' '\)\.forEach\(t=>\{ FOUND\[t\+'-en'\]", s); assert m and s.count(m.group(0)) == 1
ids = m.group(1).split(' ')
for x in sys.argv[1:]:
    assert re.fullmatch(r'[a-z]{2,4}', x), x
    if x not in ids: ids.append(x)
ids.sort()
s = s[:m.start(1)] + ' '.join(ids) + s[m.end(1):]; io.open(P, 'w', encoding='utf8').write(s); print('FOUND X-en:', ' '.join(ids))
subprocess.check_call([sys.executable, os.path.join(ROOT, 'tools', 'patches', 'lesson_align_on.py')] + [x + '-en' for x in sys.argv[1:]])
