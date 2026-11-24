#!/usr/bin/env python3
# 2.104.0: guard `todaySimple` in harness.js (Today page: session sizes fit their time, only the phrase of the day and the option buttons under the session card).
import sys
p = sys.argv[1] if len(sys.argv) > 1 else 'harness.js'
s = open(p, encoding='utf8').read()
if 'out.todaySimple=' in s: print('guard already there'); sys.exit(0)
a = "      out.idleDesktop=(()=>{"
assert s.count(a) == 1
g = r"""      out.todaySimple=(()=>{ /* session plans fit their stated time at about 12 s a step (a new card is two steps); standard holds one batch of five new cards, long two; quick is reviews, and teaches five new cards instead of its quiz only when fewer than 3 are due; under the session card only the phrase of the day and the four option buttons are drawn; the review counts carry their heading */ const L0=S.sessLen, C0=S.cards, O0=S.onboard, se0=sess; const steps=z=>Object.keys(z).reduce((n,k)=>n+z[k]*(k==='fresh'?2:1),0); try{ sess=null; S.onboard=S.onboard||{skipped:1}; S.cards={}; memoClear(); S.sessLen='quick'; const q0=sessSize(); const some=[]; names.some(d=>{ DECKS[d].some(c=>{ some.push([d,c]); return some.length>=3; }); return some.length>=3; }); some.forEach(x=>{ S.cards[ck(x[0],x[1])]={box:1,due:dayNum(),seen:1,lapses:0,last:Date.now()}; }); memoClear(); const q3=sessSize(); S.sessLen='standard'; const st=sessSize(); S.sessLen='long'; const lg=sessSize(); S.sessLen='standard'; renderToday(); const h=document.getElementById('todayHome'); const grid=[...h.querySelectorAll('.secgrid > *')]; const page=!h.querySelector('#planNew,#studyAt,#icsBtn')&&grid.length<=1&&grid.every(x=>x.classList.contains('potd'))&&h.querySelectorAll('.quick a').length===4&&!!h.querySelector('.hero .meta .mlab')&&h.querySelectorAll('.plan > div').length>=3; return page&&q0.fresh===5&&q0.quiz===0&&q3.fresh===0&&q3.quiz>0&&steps(Object.assign({},q0,{due:2}))<=12&&steps(q3)<=12&&st.fresh===5&&steps(st)<=26&&lg.fresh===10&&steps(lg)<=54; }catch(e){ return false; } finally{ S.sessLen=L0; S.cards=C0; S.onboard=O0; sess=se0; memoClear(); try{ renderToday(); }catch(e){} } })();
"""
s = s.replace(a, g + a)
open(p, 'w', encoding='utf8').write(s)
print('guard todaySimple added')
