#!/usr/bin/env python3
# PM-3 (owner, 2026-11-25): the Exam button on Practice looks like a sheet of lined paper, in the same green as before:
# ruled lines every 9px and a red margin line on the leading side, drawn with gradients over the green of PM-2.
# usage: python3 tools/patches/practice_paper.py [src/app.html]   (run after practice_green.py)
import sys
p = sys.argv[1] if len(sys.argv) > 1 else 'src/app.html'
s = open(p, encoding='utf8').read()
old = '#examStart{background:color-mix(in srgb,var(--ok-soft) 78%,var(--ok))}'
assert s.count(old) == 1, s.count(old)
s = s.replace(old, '#examStart{background:linear-gradient(90deg,transparent 0 33px,color-mix(in srgb,#d2553f 65%,transparent) 33px 34.5px,transparent 34.5px),repeating-linear-gradient(180deg,transparent 0 8px,color-mix(in srgb,var(--ok) 24%,transparent) 8px 9px),color-mix(in srgb,var(--ok-soft) 78%,var(--ok));background-position:0 0,0 3px,0 0}[dir=rtl] #examStart{background-image:linear-gradient(270deg,transparent 0 33px,color-mix(in srgb,#d2553f 65%,transparent) 33px 34.5px,transparent 34.5px),repeating-linear-gradient(180deg,transparent 0 8px,color-mix(in srgb,var(--ok) 24%,transparent) 8px 9px)}')
open(p, 'w', encoding='utf8').write(s)
print('practice_paper: ok')
