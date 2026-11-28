#!/usr/bin/env python3
# FL-1 (course report, solution 11): speed round. Inserts tools/patches/fl/fl.js and its hooks into src/app.html. Needs lp_pilot.py and sd_sounds.py first. Safe to run twice.
import os,sys
R=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); f=os.path.join(R,'src','app.html'); s=open(f,encoding='utf-8').read()
if 'function flOn(' in s: print('fl_speed: already applied'); sys.exit(0)
assert 'function lpOn(' in s and 'function sdFor(' in s
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (s.count(a),a[:80]); s=s.replace(a,b)
js=open(os.path.join(R,'tools','patches','fl','fl.js'),encoding='utf-8').read().strip()
assert '//' not in js and '</script' not in js
rep('function pracBadge(id){', js+'\nfunction pracBadge(id){')
rep("</button>`+lpCpRow(i+1); }).join('');", "</button>`+lpCpRow(i+1)+flRow(i+1); }).join('');")
rep("s.practice=pr; {", "s.practice=pr; if(s.flu!=null){ const v=s.flu; if(v&&typeof v==='object'&&!Array.isArray(v)&&num(v.best,36e5)>0) s.flu={n:Math.round(num(v.n,1e6)),best:Math.round(num(v.best,36e5)),ts:Math.round(num(v.ts,9e15))}; else delete s.flu; } {")
rep("m.story=sm; }", "m.story=sm; } { const fa=ob(a.flu), fb=ob(b.flu); if(fa||fb){ const bs=[fa&&nx(fa.best),fb&&nx(fb.best)].filter(x=>x>0); if(bs.length) m.flu={n:Math.max(nx(fa&&fa.n),nx(fb&&fb.n)),best:Math.min.apply(null,bs),ts:Math.max(nx(fa&&fa.ts),nx(fb&&fb.ts))}; else delete m.flu; } }")
rep(".st-run .st-title{", ".lesson-btn.fl-row{border-style:dashed}\n.fl-time{display:flex;justify-content:center;align-items:baseline;gap:12px;margin:6px 0}\n.fl-clock{font:600 1.6rem var(--mono)}\n.fl-clock.over{color:var(--accent)}\n.fl-bar{height:6px;border-radius:3px;background:var(--line);overflow:hidden;margin:0 0 10px}\n.fl-bar i{display:block;height:100%;width:0;background:var(--ok);transition:width .2s linear}\n.fl-q{margin:10px 0}\n.fl-built{min-height:2.6em;border-bottom:2px solid var(--line);padding:6px 4px;font-size:1.2rem;line-height:1.5;text-align:center;margin:0 0 14px}\n.fl-tiles{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}\n.fl-tiles .fl-tile{min-height:48px;padding:8px 14px;font-size:1.05rem;width:auto}\n.st-run .st-title{")
open(f,'w',encoding='utf-8').write(s); print('fl_speed: applied')
