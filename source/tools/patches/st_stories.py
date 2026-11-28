#!/usr/bin/env python3
# ST-1 (course report, solution 6): graded story after a lesson. Inserts tools/patches/st/st.js and its hooks into src/app.html. Assertion-guarded, safe to run twice.
import os,sys
R=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); f=os.path.join(R,'src','app.html'); s=open(f,encoding='utf-8').read()
if 'function stFor(' in s: print('st_stories: already applied'); sys.exit(0)
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (s.count(a),a[:80]); s=s.replace(a,b)
js=open(os.path.join(R,'tools','patches','st','st.js'),encoding='utf-8').read().strip()
assert '//' not in js.replace('https://','') and '</script' not in js
rep('function pracBadge(id){', js+'\nfunction pracBadge(id){')
rep('${pracEntryHTML(id)}<div id="lsNext"', '${pracEntryHTML(id)}${stEntryHTML(id)}<div id="lsNext"')
rep("lsRom(b.querySelector('h2'),id); lsRom($('lsRomBody'),id);", "{ const sb=$('stStart'); if(sb) sb.onclick=()=>stOpen(id); } lsRom(b.querySelector('h2'),id); lsRom($('lsRomBody'),id);")
rep("s.practice=pr; s.kbTiles=!!s.kbTiles;", "s.practice=pr; { const so={}, src3=(s.story&&typeof s.story==='object'&&!Array.isArray(s.story))?s.story:{}; Object.keys(src3).slice(0,1000).forEach(k=>{ const v=src3[k]; if(k==='__proto__'||k==='constructor'||k==='prototype'||k.length>64||!v||typeof v!=='object'||Array.isArray(v)) return; so[k]={n:Math.round(num(v.n,1e6)),r:Math.round(num(v.r,9)),ts:Math.round(num(v.ts,9e15))}; }); s.story=so; } s.kbTiles=!!s.kbTiles;")
rep("m.practice=pm; {", "m.practice=pm; { const SA=ob(a.story)||{}, SB=ob(b.story)||{}, sm={}; new Set([...Object.keys(SA),...Object.keys(SB)]).forEach(k=>{ if(k==='__proto__'||k==='constructor'||k==='prototype') return; const x=ob(SA[k]), y=ob(SB[k]); if(!x&&!y) return; sm[k]={n:Math.max(nx(x&&x.n),nx(y&&y.n)),r:Math.max(nx(x&&x.r),nx(y&&y.r)),ts:Math.max(nx(x&&x.ts),nx(y&&y.ts))}; }); m.story=sm; } {")
rep(".prac-entry .stat{margin:6px 0 0;text-align:center;max-width:none}", ".prac-entry .stat{margin:6px 0 0;text-align:center;max-width:none}\n.st-run .st-title{font-size:1.35rem;margin:10px 0 0}\n.st-run .st-tr{margin:2px 0 10px}\n.st-run .st-how{color:var(--muted);margin:0 0 12px}\n.st-ctl{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 14px}\n.st-ctl button{min-height:44px}\n.st-ctl button[aria-pressed=\"true\"]{border-color:var(--accent);color:var(--accent)}\n.st-dots{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 18px}\n.st-dot{width:14px;height:14px;border-radius:50%;background:var(--line);display:block}\n.st-dot.on{background:var(--accent);transform:scale(1.25)}\n.st-text{display:grid;gap:4px;margin:0 0 16px}\n.st-text .st-line{padding:8px 10px;border-radius:10px;cursor:pointer;border-left:3px solid transparent}\n.st-text .st-line.on{border-left-color:var(--accent);background:var(--panel2,rgba(127,127,127,.1))}\n.st-text .st-who{display:block;font:500 .68rem var(--mono);color:var(--muted);text-transform:uppercase;letter-spacing:.04em}\n.st-text .k{display:block;font-size:1.12rem;line-height:1.45}\n.st-text .m{display:block;color:var(--muted);font-size:.9rem;margin-top:2px}\n.st-run .st-toread,.st-run .st-toq{width:100%;min-height:48px}")
open(f,'w',encoding='utf-8').write(s); print('st_stories: applied')
