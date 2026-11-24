#!/usr/bin/env python3
# 2.104.0 (QF-1): Review and Practice quiz flow.
#  - the key hints under Review name only keys that work on the screen shown (F flips a new card; no F on a question)
#  - the card is said after every answer, right or wrong, in Review and in the pick quiz (no longer tied to the Audio box)
#  - a wrong answer moves on sooner; the pick quiz of Practice moves on by itself like Review does
#  - Practice "Learn 5 at a time": no 80% gate and no "Save & exit"; the place is saved when a round's quiz ends
# usage: python3 tools/patches/quiz_flow.py [src/app.html]
import sys
p=sys.argv[1] if len(sys.argv)>1 else 'src/app.html'
s=open(p,encoding='utf8').read()
R=[
# --- Review: key hints
("""<div class="keys" data-adv="review"><kbd>F</kbd> flip · <kbd>←</kbd> again · <kbd>→</kbd> got it · <kbd>P</kbd> play · <kbd>1-4</kbd> quiz answer · <kbd>Enter</kbd> next</div>""",
 """<div class="keys" id="rvKeys" data-adv="review"><span data-k="teach"><kbd>F</kbd> flip · </span><kbd>P</kbd> play · <span data-k="q"><kbd>1-4</kbd> quiz answer · </span><kbd>Enter</kbd> next</div>"""),
("""let rvTouched=false; // only auto-scroll once the user has started answering (never on page open)
""",
 """let rvTouched=false; // only auto-scroll once the user has started answering (never on page open)
function rvKeys(st){ /* QF-1: the hints under Review name only the keys that work now. st: 'teach' (a new card: F flips it), 'q' (a question: 1-4 answer), '' (nothing to answer: no hints) */ const k=$('rvKeys'); if(!k) return; k.style.display=st?'':'none'; k.querySelectorAll('[data-k]').forEach(x=>{ x.hidden=x.dataset.k!==st; }); }
const ANS_SAY=250, ANS_NEXT_OK=1300, ANS_NEXT_NO=1400, ANS_NEXT_NOTE=1800; /* QF-1: after an answer the card is said (ms), then the next one comes: right, wrong, wrong with a note to read */
"""),
("""const teach=()=>{ stage='teach'; const SPK=""", """const teach=()=>{ stage='teach'; rvKeys('teach'); const SPK="""),
("""const ask=()=>{ stage='q'; const romT=isH?'':""", """const ask=()=>{ stage='q'; rvKeys('q'); const romT=isH?'':"""),
("""  const key=e=>{ if(e.target.closest('input,textarea,select')) return; if(stage==='teach'&&(e.key==='Enter'||e.key===' ')){""",
 """  const key=e=>{ if(e.target.closest('input,textarea,select')) return; if(stage==='teach'&&(e.key==='f'||e.key==='F')){ const h=container.querySelector('.rvhide'); if(h) h.click(); return; } if(stage==='teach'&&(e.key==='Enter'||e.key===' ')){"""),
("""    stage.innerHTML=`<div class="done"><div class="ko" data-noi18n>${PRAISE(2,'잘했어요!')}</div><div class="note" style="margin:0 auto">${msg}</div>""",
 """    rvKeys(''); stage.innerHTML=`<div class="done"><div class="ko" data-noi18n>${PRAISE(2,'잘했어요!')}</div><div class="note" style="margin:0 auto">${msg}</div>"""),
("""function renderBrowse(d){ const stage=$('cardsStage'); if(cleanup){cleanup();cleanup=null;}""",
 """function renderBrowse(d){ const stage=$('cardsStage'); if(cleanup){cleanup();cleanup=null;} rvKeys('');"""),
# --- Review: say the card after every answer, move on sooner after a miss
("""      if(S.auto!==false) setTimeout(()=>speak(c[0],container.querySelector('.fb .speak')),ok?250:500);""",
 """      setTimeout(()=>{ if(!fin) speak(c[0],container.querySelector('.fb .speak')); },ANS_SAY); /* QF-1: after every answer, right or wrong */"""),
("""        tm=setTimeout(finish, ok?1300:(c[3]?2600:2000)); setTimeout(()=>rvView(fbEl,true),60);""",
 """        tm=setTimeout(finish, ok?ANS_NEXT_OK:(c[3]?ANS_NEXT_NOTE:ANS_NEXT_NO)); setTimeout(()=>rvView(fbEl,true),60);"""),
# --- pick quiz (Practice, sessions, mock test): say the card, move on by itself
("""    ansFx(ok); award(ok?4:1);
    const n=container.querySelector('.next'); n.hidden=false; n.focus(); }));
  const keyNext=e=>{ if(e.target.closest('input,textarea')) return; if((e.key==='Enter'||e.key===' ')&&!container.querySelector('.next').hidden){ e.preventDefault(); container.querySelector('.next').click(); }""",
 """    ansFx(ok); award(ok?4:1);
    setTimeout(()=>{ if(!fin) speak(c[0],container.querySelector('[data-say]')); },ANS_SAY); /* QF-1: the card is said after every answer */
    const n=container.querySelector('.next');
    if(S.autoNext===false){ n.hidden=false; n.focus(); }
    else { tm=setTimeout(go, ok?ANS_NEXT_OK:(why?2600:ANS_NEXT_NO)); /* QF-1: moves on by itself like Review; a tap moves on at once, the speaker button or a link holds the card */
      container.addEventListener('click',ev=>{ if(ev.target.closest('.opt')) return; if(ev.target.closest('.speak,a,.qromT')){ clearTimeout(tm); n.hidden=false; return; } go(); }); } }));
  let tm=null, fin=false; const go=()=>{ if(fin||!locked) return; fin=true; clearTimeout(tm); document.removeEventListener('keydown',keyNext); onAnswer(ok); };
  const keyNext=e=>{ if(e.target.closest('input,textarea')) return; if((e.key==='Enter'||e.key===' ')&&locked){ e.preventDefault(); go(); return; }"""),
("""  container.querySelector('.next').addEventListener('click',()=>{ document.removeEventListener('keydown',keyNext); onAnswer(ok); });
  return ()=>document.removeEventListener('keydown',keyNext);
}""",
 """  container.querySelector('.next').addEventListener('click',ev=>{ ev.stopPropagation(); go(); });
  return ()=>{ fin=true; clearTimeout(tm); document.removeEventListener('keydown',keyNext); };
}"""),
# --- Practice, learn 5 at a time: no gate, no Save & exit, the place is saved when the quiz ends
("""    const fresh=pool.slice(pos,pos+5), learned=pool.slice(0,pos); let i=0;""",
 """    const base=pos, fresh=pool.slice(base,base+5), learned=pool.slice(0,base); let i=0; /* QF-1: base is where this round began; pos moves on as soon as its quiz ends */"""),
("""if(qi>=qs.length){ const pass=score/qs.length>=0.8; if(qSel.size===1) recordHist([...qSel][0],Math.round(score/qs.length*100));""",
 """if(qi>=qs.length){ const pct=Math.round(score/qs.length*100), again=pos!==base; if(qSel.size===1) recordHist([...qSel][0],pct); if(!again){ pos=base+fresh.length; S.learnPos[key]=pos; save(); } /* QF-1: no pass mark. The round counts whatever the score; missed cards come back through the judge and in the next rounds' mix */"""),
("""<div class="ko" data-noi18n>${PRAISE(pass?2:0,pass?'대박!':'다시 해 봐요')}</div><div class="en">${score} / ${qs.length} · ${Math.round(score/qs.length*100)}%</div><div class="note" style="margin:8px auto 0">Round ${Math.floor(pos/5)+1} of ${Math.ceil(pool.length/5)} · ${pass?'passed':'80% to pass'}</div></div><div class="controls" id="qBtns"></div>`;""",
 """<div class="ko" data-noi18n>${PRAISE(pct>=80?2:pct>=50?1:0,pct>=80?'대박!':pct>=50?'좋아요':'다시 해 봐요')}</div><div class="en">${score} / ${qs.length} · ${pct}%</div><div class="note" style="margin:8px auto 0">Round ${Math.floor(base/5)+1} of ${Math.ceil(pool.length/5)} · saved</div></div><div class="controls" id="qBtns"></div>`; if(pct>=80&&!again) fx3('celebrate',pct===100?'perfect':'quiz');"""),
("""            if(pass){ pos+=fresh.length; S.learnPos[key]=pos; save(); mk(pos>=pool.length?'Finish':'Next 5 cards','primary',teach,true); }
            else { mk('Review these 5 again','primary',()=>{ i=0; card(); }); mk('Retry quiz','miss',()=>{ qi=0; score=0; qstep(); }); }
            mk('Save & exit','ghost',backToSetup,true); return; }""",
 """            mk(pos>=pool.length?'Finish':'Next 5 cards','primary',teach,true);
            if(score<qs.length){ mk('Review these 5 again','ghost',()=>{ i=0; card(); }); mk('Retry quiz','ghost',()=>{ qi=0; score=0; qstep(); }); }
            return; }"""),
("""<span class="stat">Learn · card ${pos+i+1} of ${pool.length} · ${x.d}</span><button class="ghost" id="lExit">Save & exit</button></div><div class="bar" style="margin:8px 0 10px"><i style="width:${(pos+i)/pool.length*100}%"></i></div>""",
 """<span class="stat">Learn · card ${base+i+1} of ${pool.length} · ${x.d}</span></div><div class="bar" style="margin:8px 0 10px"><i style="width:${(base+i)/pool.length*100}%"></i></div>"""),
("""      $('lExit').onclick=()=>{ S.learnPos[key]=pos; save(); backToSetup(); };
""", ""),
# --- with "Save & exit" gone, the Practice tab is the way out of a running quiz: tapping it again goes back to the deck picker
("""document.addEventListener('click', e => {
  const sg=e.target.closest('.sgl');""",
 """document.addEventListener('click', e => {
  if(e.target.closest('#nav a[href="#practice"]')&&(location.hash||'')==='#practice'&&!$('quizRun').hidden){ if(cleanup){cleanup();cleanup=null;} backToSetup(); window.scrollTo(0,0); } /* QF-1: the Practice tab leaves a running quiz; the place was saved when the last round ended */
  const sg=e.target.closest('.sgl');"""),
]
for a,b in R:
    assert s.count(a)==1, 'not found exactly once: '+a[:90]
    s=s.replace(a,b)
open(p,'w',encoding='utf8').write(s)
print('quiz flow: %d edits'%len(R))
