#!/usr/bin/env python3
# 2.108.0 (QF-1 follow-up): the Practice round result always offers "Review these 5 again" and "Retry quiz", and adds "Review missed":
# the cards answered wrong more than 25% of the times they were asked in the quiz just finished are shown again as flip cards, then quizzed on their own (3 questions each).
import sys
p=sys.argv[1] if len(sys.argv)>1 else 'src/app.html'
s=open(p,encoding='utf8').read()
R=[
("""const base=pos, fresh=pool.slice(base,base+5), learned=pool.slice(0,base); let i=0;""",
 """const base=pos, fresh=pool.slice(base,base+5), learned=pool.slice(0,base); let i=0, show=fresh, only=null; /* show: the cards on the flip-card screens; only: set while "Review missed" runs, the quiz then asks just those */"""),
("""      if(i>=fresh.length){ const qs=roundQuiz(fresh,learned); let qi=0, score=0;""",
 """      if(i>=show.length){ const mine=only, qs=mine?roundQuiz(mine,[]):roundQuiz(fresh,learned); let qi=0, score=0; const tally=new Map(); /* card -> [times asked, times wrong] in this quiz */"""),
("""const pct=Math.round(score/qs.length*100), again=pos!==base; if(qSel.size===1) recordHist([...qSel][0],pct);""",
 """const pct=Math.round(score/qs.length*100), again=pos!==base; if(qSel.size===1&&!mine) recordHist([...qSel][0],pct); const missed=pool.filter(x=>{ const t=tally.get(x.c); return t&&t[1]/t[0]>MISS_SHARE; });"""),
("""            if(score<qs.length){ mk('Review these 5 again','ghost',()=>{ i=0; card(); }); mk('Retry quiz','ghost',()=>{ qi=0; score=0; qstep(); }); }
            return; }""",
 """            mk('Review these 5 again','ghost',()=>{ show=fresh; only=null; i=0; card(); }); mk('Retry quiz','ghost',()=>{ qi=0; score=0; tally.clear(); qstep(); });
            if(missed.length) mk('Review missed','ghost',()=>{ show=missed; only=missed; i=0; card(); },true);
            return; }"""),
("""<span class="stat" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Quiz · ${qi+1}/${qs.length} · ${learned.length?'new 5 + '+learned.length+' learned':'new 5'} · ${qs[qi].mode}</span>""",
 """${mine?`<span class="stat" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><span>Review missed</span><span data-noi18n> · ${qi+1}/${qs.length}</span></span>`:`<span class="stat" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Quiz · ${qi+1}/${qs.length} · ${learned.length?'new 5 + '+learned.length+' learned':'new 5'} · ${qs[qi].mode}</span>`}"""),
("""qs[qi].mode,ok=>{ if(ok) score++; qi++; qstep(); }); };
        qstep(); return; }
      const x=fresh[i]; run.innerHTML=`<div class="row"><span class="stat">Learn · card ${base+i+1} of ${pool.length} · ${x.d}</span></div><div class="bar" style="margin:8px 0 10px"><i style="width:${(base+i)/pool.length*100}%"></i></div>""",
 """qs[qi].mode,ok=>{ const t=tally.get(qs[qi].c)||[0,0]; t[0]++; if(!ok) t[1]++; tally.set(qs[qi].c,t); if(ok) score++; qi++; qstep(); }); };
        qstep(); return; }
      const x=show[i], at=pool.indexOf(x); run.innerHTML=`<div class="row"><span class="stat">Learn · card ${at+1} of ${pool.length} · ${x.d}</span></div><div class="bar" style="margin:8px 0 10px"><i style="width:${at/pool.length*100}%"></i></div>"""),
("""const ANS_SAY=250,""", """const MISS_SHARE=0.25; /* "Review missed" takes the cards answered wrong in more than this share of their questions in the quiz just finished */
const ANS_SAY=250,"""),
]
for a,b in R:
    assert s.count(a)==1, 'not found exactly once: '+a[:90]
    s=s.replace(a,b)
open(p,'w',encoding='utf8').write(s)
print('review missed: %d edits'%len(R))
