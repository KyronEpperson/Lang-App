#!/usr/bin/env python3
# SEC-1 harness guards: lessonSections accepts the aligned plan; sectionAlign checks it (every card of a section deck is taught in that section or an earlier one). Run once.
import io, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
P = os.path.join(ROOT, 'harness.js'); s = io.open(P, encoding='utf8').read()
assert 'sectionAlign' not in s, 'already applied'
a = "pl.all.length===D.length&&new Set(pl.all.map(x=>x.c)).size===D.length); });"
assert s.count(a) == 1
s = s.replace(a, "(LS_ALIGN[COURSE.id]?pl.all.length>=1&&new Set(pl.all.map(x=>x.c)).size===pl.all.length:pl.all.length===D.length&&new Set(pl.all.map(x=>x.c)).size===D.length)); });")
a = "      out.lessonSections=(()=>{"
assert s.count(a) == 1
G = r"""      out.sectionAlign=(()=>{ /* SEC-1: in an aligned course every card of a section's deck is taught in that section or an earlier one (its words are in the text, or a writer put it there), no card comes twice in a lesson, lesson-only decks stay out of the deck list and out of the review counts */ try{ if(!LS_ALIGN[COURSE.id]) return true; const X=COURSE.builtin?LS_SECS_KO:(COURSE.SECS||{}); let bad=0, n=0, hid=0;
        LESSONS.forEach(l=>{ if(l.id==='hangul'&&COURSE.target==='ko') return; const pl=lsPlan(l), raw=lsCut(l.body), seen=new Set(), x=X[l.id]||{}; if(!pl.pre){ bad++; return; } let txt='', adds=new Set();
          pl.parts.forEach((p,i)=>{ txt+=lsNorm(raw[i]); ((x[i]||{}).add||[]).forEach(a=>adds.add(lsNorm(Array.isArray(a)?a[0]:a).trim())); p.cards.forEach(y=>{ n++; const k=lsNorm(y.c[0]).trim(); if(seen.has(k)||!(DECKS[y.d]||[]).includes(y.c)||!(lsAt(k,txt)>=0||txt.includes(' '+k+' ')||adds.has(k))) bad++; seen.add(k); if(y.d[0]===LS_EX){ hid++; if(names.includes(y.d)||y.d!==LS_EX+l.id) bad++; } }); }); });
        const sv=S.cards, t=dayNum(); S.cards={}; S.cards[LS_EX+'x|y']={box:3,due:t,seen:1,lapses:0}; const f=forecast(7)[0]; S.cards=sv; return bad===0&&n>100&&hid>0&&f===0; }catch(e){ return 'threw '+e.message; } })();
"""
s = s.replace(a, G + a)
io.open(P, 'w', encoding='utf8').write(s); print('lesson_align_harness: applied')
