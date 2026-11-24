#!/usr/bin/env python3
# stroke drawings carry no numbers; the order shows in the drawing animation (assertion-guarded edit to src/app.html)
import io
P='/home/claude/src/app.html'; s=io.open(P,encoding='utf8').read()
a=s.index("${(()=>{ const seen=[]; return s.map((d,i)=>{"); b=s.index("</svg>",a)
assert s.count("${(()=>{ const seen=[]; return s.map((d,i)=>{")==1 and b-a<1500
s=s[:a]+s[b:]
x=".stroke circle{fill:var(--ink)}.stroke text{font:700 8px var(--mono);fill:var(--bg);text-anchor:middle;dominant-baseline:central}\n"
assert s.count(x)==1; s=s.replace(x,"")
io.open(P,'w',encoding='utf8').write(s)
P='/home/claude/harness.js'; h=io.open(P,encoding='utf8').read()
x="x.querySelectorAll('circle').length===x.querySelectorAll('path').length"; assert h.count(x)==1
h=h.replace(x,"x.querySelectorAll('path').length>0&&x.querySelectorAll('circle,text').length===0"); io.open(P,'w',encoding='utf8').write(h)
P='/home/claude/docs/HANDOFF.md'; d=io.open(P,encoding='utf8').read()
x="Same gap, not fixed (audit 2026-11-24):"; assert d.count(x)==1
d=d.replace(x,"VERSION (2026-11-24): **stroke drawings have no numbers** (owner: \"actually remove the numbers\"), on the lesson tiles and the letter card backs (`strokeSVG`); the order shows in the drawing animation. Trainer recording re-recorded (24 card backs, stroke drawings only). Edit script: `tools/patches/stroke_nonum.py`.\n\n"+x)
io.open(P,'w',encoding='utf8').write(d)
