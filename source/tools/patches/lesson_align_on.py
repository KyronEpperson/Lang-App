#!/usr/bin/env python3
# SEC-1 roll-out: switch the section decks on for more courses. usage: python3 tools/patches/lesson_align_on.py <course id> ...   (adds to LS_ALIGN in src/app.html; safe to run again)
import io, os, re, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
P = os.path.join(ROOT, 'src', 'app.html'); s = io.open(P, encoding='utf8').read()
m = re.search(r"LS_ALIGN=\{([^}]*)\}", s); assert m and len(re.findall(r"LS_ALIGN=\{", s)) == 1
ids = re.findall(r"'([a-z-]+)':1", m.group(1))
for a in sys.argv[1:]:
    assert re.fullmatch(r"[a-z]{2,4}-[a-z]{2,4}", a), a
    if a not in ids: ids.append(a)
s = s[:m.start()] + "LS_ALIGN={" + ",".join("'%s':1" % i for i in ids) + "}" + s[m.end():]
io.open(P, 'w', encoding='utf8').write(s); print('LS_ALIGN:', ' '.join(ids))
