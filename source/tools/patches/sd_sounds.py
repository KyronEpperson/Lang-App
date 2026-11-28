#!/usr/bin/env python3
# SD-1 (course report, solution 9): sound training. Inserts tools/patches/sd/sd.js and its hooks into src/app.html. Needs st_stories.py first (it reuses the story's saved-state code). Safe to run twice.
import os,sys
R=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); f=os.path.join(R,'src','app.html'); s=open(f,encoding='utf-8').read()
if 'function sdFor(' in s: print('sd_sounds: already applied'); sys.exit(0)
assert 'function stFor(' in s
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (s.count(a),a[:80]); s=s.replace(a,b)
js=open(os.path.join(R,'tools','patches','sd','sd.js'),encoding='utf-8').read().strip()
assert '//' not in js and '</script' not in js
rep('function pracBadge(id){', js+'\nfunction pracBadge(id){')
rep('${pracEntryHTML(id)}${stEntryHTML(id)}', '${pracEntryHTML(id)}${sdEntryHTML(id)}${stEntryHTML(id)}')
rep("{ const sb=$('stStart'); if(sb) sb.onclick=()=>stOpen(id); }", "{ const sb=$('stStart'); if(sb) sb.onclick=()=>stOpen(id); } { const db=$('sdStart'); if(db) db.onclick=()=>sdOpen(id); }")
# saved state: S.snd has the story's shape {n,r,ts}; r is a score out of 10
rep("so[k]={n:Math.round(num(v.n,1e6)),r:Math.round(num(v.r,9)),ts:Math.round(num(v.ts,9e15))}; }); s.story=so; }", "so[k]={n:Math.round(num(v.n,1e6)),r:Math.round(num(v.r,9)),ts:Math.round(num(v.ts,9e15))}; }); s.story=so; } { const so={}, src3=(s.snd&&typeof s.snd==='object'&&!Array.isArray(s.snd))?s.snd:{}; Object.keys(src3).slice(0,1000).forEach(k=>{ const v=src3[k]; if(k==='__proto__'||k==='constructor'||k==='prototype'||k.length>64||!v||typeof v!=='object'||Array.isArray(v)) return; so[k]={n:Math.round(num(v.n,1e6)),r:Math.round(num(v.r,10)),ts:Math.round(num(v.ts,9e15))}; }); s.snd=so; }")
rep("m.story=sm; }", "m.story=sm; } { const SA=ob(a.snd)||{}, SB=ob(b.snd)||{}, sm={}; new Set([...Object.keys(SA),...Object.keys(SB)]).forEach(k=>{ if(k==='__proto__'||k==='constructor'||k==='prototype') return; const x=ob(SA[k]), y=ob(SB[k]); if(!x&&!y) return; sm[k]={n:Math.max(nx(x&&x.n),nx(y&&y.n)),r:Math.max(nx(x&&x.r),nx(y&&y.r)),ts:Math.max(nx(x&&x.ts),nx(y&&y.ts))}; }); m.snd=sm; }")
rep(".st-run .st-title{", ".sd-mid{text-align:center;margin:4px 0 14px}\n.sd-mid .speak{min-height:48px;font-size:.95rem;padding:8px 18px}\n.sd-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.sd-opts .opt{min-height:84px;text-align:center;display:grid;align-content:center;gap:4px}\n.sd-opts .k{font-size:1.5rem;font-weight:600}\n.sd-opts .m{font-size:.8rem;color:var(--muted)}\n.sd-cmp{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:8px}\n.sd-cmp .speak{min-height:40px}\n.sd-rows{display:grid;gap:4px;margin:12px auto;max-width:300px}\n.sd-row{display:flex;justify-content:space-between;gap:12px;border-bottom:1px solid var(--line);padding:4px 0}\n.st-run .st-title{",1)
open(f,'w',encoding='utf-8').write(s); print('sd_sounds: applied')
