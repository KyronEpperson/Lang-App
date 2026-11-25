#!/usr/bin/env python3
# PM-2 (owner, 2026-11-25): on Practice the Learn button is light green and the Exam button a slightly darker green.
# Both use the theme's green tokens (--ok-soft, --ok), so light and dark themes follow. usage: python3 tools/patches/practice_green.py [src/app.html]
import sys
p = sys.argv[1] if len(sys.argv) > 1 else 'src/app.html'
s = open(p, encoding='utf8').read()
def rep(old, new):
    global s
    assert s.count(old) == 1, (s.count(old), old[:90]); s = s.replace(old, new)
rep('id="examStart" style="grid-column:1/3;background:var(--ink);color:var(--bg)"', 'id="examStart" style="grid-column:1/3"')
rep('#runBar{display:flex;', '#learnStart,#examStart{color:color-mix(in srgb,var(--ok) 60%,var(--ink))}#learnStart{background:var(--ok-soft)}#examStart{background:color-mix(in srgb,var(--ok-soft) 78%,var(--ok))}\n#runBar{display:flex;')
open(p, 'w', encoding='utf8').write(s)
print('practice_green: ok')
