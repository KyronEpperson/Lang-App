#!/usr/bin/env python3
# MEM-3 (release C of the card memory judge): sharper evidence.
#   * answer speed counts: a right answer that took much longer than the learner's own usual time for that kind of question lengthens the memory less (mjSpeed)
#   * a recall question before Memorized: a card is called memorized only after it was answered from memory with no options to pick from (typed, or the new
#     recall question), on a later day than the answer before. Review and the quizzes ask the recall question in place of the pick that would otherwise have made
#     the card memorized (mjAsk, renderRecallQ). A miss takes the mark away again. Cards from before this release keep their judgement (rc 2).
#   * Progress shows the judge's forecast against the result for the answers after a break
#   * the answer log gets a tenth field (the weight the answer's speed got) and every question starts the clock, not only flip cards
#   * the flashcards inside a lesson bring back the five earlier cards the judge would practise first, not five at random
# usage: python3 tools/patches/mem_judge_c.py [src/app.html]      (apply after tools/patches/mem_judge_b.py)
import sys
p = sys.argv[1] if len(sys.argv) > 1 else 'src/app.html'
s = open(p, encoding='utf8').read()
assert 'function mjRisk(' in s, 'apply tools/patches/mem_judge_b.py first'
assert 'function mjAsk(' not in s, 'already applied'

def rep(a, b, n=1):
    global s
    assert s.count(a) == n, 'expected %d, found %d: %s' % (n, s.count(a), a[:90])
    s = s.replace(a, b)

# ---------------------------------------------------------------- 1. the judge block
rep("   A card's memory m = {st, df, rr, nd, lw}. st: memory length in days",
    "   A card's memory m = {st, df, rr, nd, lw, rc}. st: memory length in days")
rep("lw: 1 while the last answer was wrong.\n",
    "lw: 1 while the last answer was wrong.\n"
    "   rc (MEM-3): 1 once the card was answered from memory with no options to pick from (typed, or the recall question) on a later day than the answer before; 0 until then and again after a miss;\n"
    "   2 on a card saved before MEM-3, which keeps the judgement it had. Only a card with the mark is called memorized. sp (MEM-3): the weight of a right answer by its speed, 1 unless it was slow.\n")
rep("const MJ_TYPES={type:{g:0,w:1,s0:1.5},pick:{g:0.25,w:0.8,s0:1},self:{g:0,w:0.5,s0:0.5}}; /* g: chance of a lucky right answer · w: weight of a right answer · s0: memory length after a first right answer */",
    "const MJ_TYPES={type:{g:0,w:1,s0:1.5,rc:1},pick:{g:0.25,w:0.8,s0:1},self:{g:0,w:0.5,s0:0.5},rec:{g:0,w:0.9,s0:1.25,rc:1}}; /* g: chance of a lucky right answer · w: weight of a right answer · s0: memory length after a first right answer · rc: answered from memory, no options shown (rec is the recall question: the learner says the word, looks, and says whether it was right) */")
rep("minGap:0.5,eta:0.08,", "minGap:0.5,slowAt:2,slowTo:5,slowW:0.6,eta:0.08,")
rep("MJ_TCODE={pick:0,type:1,self:2}", "MJ_TCODE={pick:0,type:1,self:2,rec:3}")
rep("function mjUpdate(m,ok,t,same,type,cal){ const T=MJ_TYPES[type]||MJ_TYPES.pick; if(!m) return {st:ok?T.s0:MJ.s0bad,df:mjD0(ok?3:1),rr:ok?1:0,nd:1,lw:ok?0:1,lapse:ok?0:1};\n"
    "  const R=mjRecall(t,mjLen(m.st,cal)); let st, df=m.df, rr=m.rr, nd=m.nd, lapse=0;\n"
    "  if(ok){ const k=R/(R+(1-R)*T.g), inc=Math.exp(MJ_W[8])*(11-m.df)*Math.pow(m.st,-MJ_W[9])*(Math.exp(MJ_W[10]*(1-R))-1); st=m.st*Math.min(MJ.maxGain,1+T.w*k*inc);\n",
    "function mjSpeed(ms,ref){ if(!(ms>0)||!(ref>0)) return 1; const r=ms/ref; return r<=MJ.slowAt?1:r>=MJ.slowTo?MJ.slowW:1-(1-MJ.slowW)*(r-MJ.slowAt)/(MJ.slowTo-MJ.slowAt); } /* MEM-3: the weight of a right answer by its speed. ms: time to answer · ref: the learner's usual time for that kind of question. Up to twice the usual time counts in full; from there it falls to 0.6 at 5 times and stays there. Never above 1: a quick answer earns no more than before */\n"
    "function mjRc(m,cal){ return m.rc===2?mjLen(m.st,cal)>=MJ.tMem:m.rc===1; } /* MEM-3: does the card carry the recall mark. A card from before MEM-3 (rc 2) counts as marked while its memory is long enough for memorized, so nothing a learner had is taken away */\n"
    "function mjUpdate(m,ok,t,same,type,cal,sp){ const T=MJ_TYPES[type]||MJ_TYPES.pick; if(!m) return {st:ok?T.s0:MJ.s0bad,df:mjD0(ok?3:1),rr:ok?1:0,nd:1,lw:ok?0:1,rc:0,lapse:ok?0:1};\n"
    "  const R=mjRecall(t,mjLen(m.st,cal)); let st, df=m.df, rr=m.rr, nd=m.nd, lapse=0, rc=mjRc(m,cal)?1:0;\n"
    "  if(ok){ const k=R/(R+(1-R)*T.g), inc=Math.exp(MJ_W[8])*(11-m.df)*Math.pow(m.st,-MJ_W[9])*(Math.exp(MJ_W[10]*(1-R))-1); st=m.st*Math.min(MJ.maxGain,1+T.w*(sp>0&&sp<1?sp:1)*k*inc); if(T.rc&&!same) rc=1; /* recalled after a night at least: the card may now be called memorized */\n")
rep("st=Math.min(m.st,sf,MJ.lapseCap); if(!same||(m.rr&1)){ df=mjDNext(m.df,1); lapse=1; } /* one lapse a day at most */ }",
    "st=Math.min(m.st,sf,MJ.lapseCap); rc=0; /* a miss takes the recall mark away: the way back to memorized is through a recall question again */ if(!same||(m.rr&1)){ df=mjDNext(m.df,1); lapse=1; } /* one lapse a day at most */ }")
rep("  return {st:mjClamp(st,MJ.minSt,MJ.maxSt),df,rr,nd,lw:ok?0:1,lapse}; }",
    "  return {st:mjClamp(st,MJ.minSt,MJ.maxSt),df,rr,nd,lw:ok?0:1,rc,lapse}; }")
rep("function mjStatus(m,t,cal){ return !m?'new':mjWhy(m,t,cal)?'practice':mjLen(m.st,cal)>=MJ.tMem?'memorized':'learning'; }",
    "function mjStatus(m,t,cal){ return !m?'new':mjWhy(m,t,cal)?'practice':mjLen(m.st,cal)>=MJ.tMem&&mjRc(m,cal)?'memorized':'learning'; } /* MEM-3: memorized needs the recall mark as well as the length */\n"
    "function mjAsk(m,t,same,cal){ return !!m&&!same&&!mjRc(m,cal)&&mjLen(mjUpdate(m,true,t,false,'pick',cal).st,cal)>=MJ.tMem; } /* MEM-3: should this card's next question be a recall question in place of a pick. Yes when the card has no recall mark, was not answered today, and a right pick now would make its memory long enough for memorized (or it already is). A right recall answer counts for more than a right pick, so it gets there too */")
rep("return box<2?{st:MJ_BOXDAYS[1],df,rr:2,nd:2,lw:1}:{st:MJ_BOXDAYS[box],df,rr:3,nd:2,lw:0}; }",
    "return box<2?{st:MJ_BOXDAYS[1],df,rr:2,nd:2,lw:1,rc:2}:{st:MJ_BOXDAYS[box],df,rr:3,nd:2,lw:0,rc:2}; }")
rep("df:mjDNext(m.df,1),rr:(m.rr<<1)&15,nd:Math.min(4,m.nd+1),lw:1}; }",
    "df:mjDNext(m.df,1),rr:(m.rr<<1)&15,nd:Math.min(4,m.nd+1),lw:1,rc:0}; }")
rep("  return {st:Math.max(m.st,MJ_BOXDAYS[box]),df:m.df,rr:((m.rr<<1)|1)&15,nd:Math.min(4,m.nd+1),lw:0}; }",
    "  return {st:Math.max(m.st,MJ_BOXDAYS[box]),df:m.df,rr:((m.rr<<1)|1)&15,nd:Math.min(4,m.nd+1),lw:0,rc:m.rc}; }")
rep("nd:Math.max(1,(s.h>>4)&7),lw:(s.h>>7)&1}; return s.mb===s.box?m:mjSync(m,s.box); }",
    "nd:Math.max(1,(s.h>>4)&7),lw:(s.h>>7)&1,rc:s.rc===1?1:s.rc===0?0:2}; return s.mb===s.box?m:mjSync(m,s.box); }")
rep("s.h=(m.rr&15)|(Math.min(4,m.nd)<<4)|(m.lw?128:0); s.box=s.mb=mjBox({st:s.st,lw:m.lw}); return s; }",
    "s.h=(m.rr&15)|(Math.min(4,m.nd)<<4)|(m.lw?128:0); if(m.rc===2) delete s.rc; else s.rc=m.rc?1:0; s.box=s.mb=mjBox({st:s.st,lw:m.lw}); return s; }")

# ---------------------------------------------------------------- 2. glue: the judgement on screen, the clock, the answer log
rep("return {st:why?'practice':len>=MJ.tMem?'memorized':'learning',why,len,ago:",
    "return {st:why?'practice':len>=MJ.tMem&&mjRc(m,cal)?'memorized':'learning',why,len,ago:")
rep("function judge(d,c,ok,type){ /* the one place an answer changes a card. type: 'pick' (chosen from four), 'type' (typed) or 'self' (\"Got it\" on a flip card). Returns the answer-log row */\n"
    "  memoClear(); type=MJ_TYPES[type]?type:'pick'; const k=ck(d,c),",
    "/* MEM-3 glue: sharper evidence (iterations.md, entry MEM-3). Answer speed, the recall question, and the pick of earlier cards inside a lesson. */\n"
    "const MEM_REF0={pick:4000,type:9000,self:4000,rec:5000}; /* usual time to answer, in ms, until the learner's own answers say otherwise */\n"
    "let askType=null; /* set while a recall question hands its answer to a caller that grades with grade(): judge() then counts it as 'rec' */\n"
    "function memRef(type){ /* the learner's usual time for this kind of question: the middle one of their last 50 right answers of that kind (rows logged since MEM-3, which time every question; 12 at least) */\n"
    "  const k='r|'+type; if(memo[k]) return memo[k]; const c=MJ_TCODE[type], a=(S.rlog||[]).filter(x=>x.length>9&&x[5]===c&&x[2]&&x[3]>0&&x[3]<60000).slice(-50).map(x=>x[3]).sort((p,q)=>p-q); return memo[k]=a.length>=12?a[a.length>>1]:MEM_REF0[type]; }\n"
    "function memAsk(d,c){ /* should the next question about this card be a recall question (mjAsk) */ const s=cardState(d,c), m=mjRead(s); if(!m||s.susp) return false; const last=+s.last||0; return mjAsk(m,Math.max(0,(Date.now()-last)/86400000),dayOf(last)===dayNum(),memCal()); }\n"
    "function lsEarlier(cards,pos){ /* the earlier cards a lesson's quiz brings back: the five the judge would practise first (waiting for practice, then learning by risk, then memorized), filled up at random when fewer have been answered */\n"
    "  const pre=cards.slice(0,pos), top=memRank(pre).slice(0,5); return top.length<5?top.concat(shuffle(pre.filter(x=>top.indexOf(x)<0)).slice(0,5-top.length)):top; }\n"
    "function renderRecallQ(container,d,c,onAnswer,rv){ /* the recall question: the meaning, no options. The learner says the word, taps \"Show answer\", and says whether it was right. rv: inside Review or a session, where the caller grades; elsewhere it grades like the other quiz questions. The time that counts is the time to \"Show answer\" */\n"
    "  const isH=isScriptDeck(d)||soundCard(d,c), say=c[0].replace(/\"/g,'&quot;'), t0=Date.now(); let think=0, shown=false, fin=false; cardShownAt=t0;\n"
    "  container.innerHTML=`<div class=\"rvq rcq\"><div class=\"stat\" style=\"text-align:center\">${d}</div><div class=\"q small\">${isH?'<span style=\"font-family:var(--mono);color:var(--accent)\">'+c[1]+'</span><div class=\"stat\" style=\"margin-top:4px\">'+c[2]+'</div>':c[2]}</div><p class=\"stat rchint\" style=\"text-align:center;margin:10px 0 0\">No choices this time. Say it from memory, then check.</p><button class=\"big primary rcshow\" type=\"button\" style=\"width:100%;margin-top:14px\">Show answer</button><div class=\"rcans\" hidden></div></div>`;\n"
    "  const show=()=>{ if(shown||fin) return; shown=true; think=Date.now()-t0; container.querySelector('.rcshow').hidden=true; container.querySelector('.rchint').hidden=true; const a=container.querySelector('.rcans'); /* the answer and its speaker button enter the page only now, so no key can play it early */\n"
    "    a.innerHTML=`<div class=\"rvans\" style=\"text-align:center\"><span class=\"ko\" style=\"font-size:1.5rem\">${c[0]}</span> <button class=\"speak\" data-say=\"${say}\" type=\"button\" style=\"padding:4px 9px\">🔊</button><div class=\"stat\">${isH?'':c[1]+' · '}${c[2]}</div></div><div class=\"controls\" style=\"margin-top:12px\"><button class=\"big miss\" type=\"button\" data-rc=\"0\">Again</button><button class=\"big hit\" type=\"button\" data-rc=\"1\">Got it</button></div>`; a.hidden=false;\n"
    "    a.querySelectorAll('[data-rc]').forEach(b=>{ b.onclick=()=>done(b.dataset.rc==='1'); }); setTimeout(()=>{ if(!fin) speak(c[0],a.querySelector('.speak')); },ANS_SAY); if(rv&&rvTouched) setTimeout(()=>rvView(a,true),60); };\n"
    "  const done=ok=>{ if(fin||!shown) return; fin=true; document.removeEventListener('keydown',key); cardShownAt=Date.now()-think;\n"
    "    if(rv){ rvTouched=true; askType='rec'; try{ onAnswer(ok); } finally{ askType=null; } }\n"
    "    else { const st=S.quiz[d]||{r:0,t:0}; st.t++; if(ok) st.r++; S.quiz[d]=st; quizGrade(d,c,ok,'rec'); ansFx(ok); award(ok?5:1); onAnswer(ok); } };\n"
    "  const key=e=>{ if(e.target.closest('input,textarea,select')) return; if(!shown&&(e.key==='Enter'||e.key===' ')){ e.preventDefault(); show(); return; } if(shown&&e.key==='ArrowRight') done(true); if(shown&&e.key==='ArrowLeft') done(false); };\n"
    "  document.addEventListener('keydown',key); container.querySelector('.rcshow').onclick=show;\n"
    "  return ()=>{ fin=true; document.removeEventListener('keydown',key); }; }\n"
    "function judge(d,c,ok,type){ /* the one place an answer changes a card. type: 'pick' (chosen from four), 'type' (typed), 'self' (\"Got it\" on a flip card) or 'rec' (the recall question). Returns the answer-log row */\n"
    "  if(askType) type=askType; type=MJ_TYPES[type]?type:'pick'; const ms=cardShownAt?Date.now()-cardShownAt:0, sp=ok&&ms<60000?mjSpeed(ms,memRef(type)):1; cardShownAt=0; /* MEM-3: a slow right answer counts for less. No time (a question that set no clock) or a minute and more (the learner walked away) says nothing */\n"
    "  memoClear(); const k=ck(d,c),")
rep("const row=[now, s.box||0, ok?1:0, cardShownAt?Math.min(60000,now-cardShownAt):0, new Date().getHours(), MJ_TCODE[type], m?+t.toFixed(2):-1, m?+mjForecast(m,t,type,cal).toFixed(2):-1, MJ_STATES.indexOf(mjStatus(m,t,cal))]; /* time, box before, right, ms to answer, hour, question type, days since last answer, forecast, judgement before */",
    "const row=[now, s.box||0, ok?1:0, Math.min(60000,ms), new Date().getHours(), MJ_TCODE[type], m?+t.toFixed(2):-1, m?+mjForecast(m,t,type,cal).toFixed(2):-1, MJ_STATES.indexOf(mjStatus(m,t,cal)), Math.round(sp*100)]; /* time, box before, right, ms to answer, hour, question type (3: recall), days since last answer, forecast, judgement before, weight by speed in % (MEM-3; a row with this field timed its question) */")
rep("const n=mjUpdate(m,ok,t,same,type,cal); s.seen=(+s.seen||0)+1;", "const n=mjUpdate(m,ok,t,same,type,cal,sp); s.seen=(+s.seen||0)+1;")

# ---------------------------------------------------------------- 3. every question starts the clock; the recall question takes the place of a pick
rep("function renderTypeQ(container, d, c, onAnswer){\n", "function renderTypeQ(container, d, c, onAnswer){ cardShownAt=Date.now();\n")
rep("function renderQuizQ(container, d, c, mode, onAnswer){\n  if(mode==='type') return renderTypeQ(container, d, c, onAnswer);\n",
    "function renderQuizQ(container, d, c, mode, onAnswer, plain){ /* plain: never the recall question (the exam and the blitz ask every card the same way) */\n  if(mode==='type') return renderTypeQ(container, d, c, onAnswer);\n  if(!plain&&memAsk(d,c)) return renderRecallQ(container, d, c, onAnswer); /* MEM-3: a recall question in place of the pick that would make this card memorized */\n  cardShownAt=Date.now();\n")
rep("  const ask=()=>{ stage='q'; rvKeys('q'); const romT=isH?'':",
    "  let rcClean=null; const ask=()=>{ if(memAsk(d,c)){ stage='rc'; rvKeys(''); rcClean=renderRecallQ(container,d,c,onAnswer,1); return; } /* MEM-3 */ cardShownAt=Date.now(); stage='q'; rvKeys('q'); const romT=isH?'':")
rep("teach(); else ask(); return ()=>{ document.removeEventListener('keydown',key); clearTimeout(tm); fin=true; }; }",
    "teach(); else ask(); return ()=>{ document.removeEventListener('keydown',key); clearTimeout(tm); fin=true; if(rcClean) rcClean(); }; }")

# the exam and the blitz stay plain
rep("cleanup=renderQuizQ(body,q.d,q.c,q.mode,ok=>{ results.push({...q,ok}); i++; step(); });",
    "cleanup=renderQuizQ(body,q.d,q.c,q.mode,ok=>{ results.push({...q,ok}); i++; step(); },1);")
i = s.index("cleanup=renderQuizQ(run.querySelector('.qbody'),x.d,x.c,'read',ok=>{ answered++;"); j = s.index('\n', i)
line = s[i:j]; k = line.rindex('});'); assert line.count("renderQuizQ(") == 1
# the blitz call ends with the callback's "})"; find the call's closing parenthesis by counting
depth = 0; end = None
for pos in range(line.index('renderQuizQ(') + len('renderQuizQ'), len(line)):
    ch = line[pos]
    if ch == '(': depth += 1
    elif ch == ')':
        depth -= 1
        if depth == 0: end = pos; break
assert end is not None
s = s[:i] + line[:end] + ',1' + line[end:] + s[j:]

# ---------------------------------------------------------------- 4. the flashcards inside a lesson
rep("old=shuffle(cards.slice(0,pos)).slice(0,5); let show=fresh.slice();", "old=lsEarlier(cards,pos); let show=fresh.slice();")
rep("then those five asked (twice each, with up to five earlier cards of this deck once)", "then those five asked (twice each, with up to five earlier cards of this deck once: the ones the judge would practise first, MEM-3)")

# ---------------------------------------------------------------- 5. Progress: forecast against result
rep("Memorized cards should stay near 9 in 10.</p>`; })();",
    "Memorized cards should stay near 9 in 10.</p>${fc.length>=10?`<p class=\"stat mjfc\" style=\"margin:6px 0 0\">Forecast for your last ${fc.length} answers after a break: ${Math.round(fc.reduce((n,x)=>n+x[7],0)/fc.length*100)}% right. Result: ${Math.round(fc.filter(x=>x[2]).length/fc.length*100)}%.</p>`:''}`; })();")
rep("    const overall=L.filter(x=>x[2]).length/L.length;\n",
    "    const overall=L.filter(x=>x[2]).length/L.length, fc=L.filter(x=>x.length>8&&x[6]>=MJ.minGap&&x[7]>=0); /* MEM-3: the answers the judge had a forecast for, after half a day or more */\n")

open(p, 'w', encoding='utf8').write(s)
print('MEM-3 applied to', p)
