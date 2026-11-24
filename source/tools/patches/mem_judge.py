#!/usr/bin/env python3
# MEM-1 (release A): the card memory judge.
#   * one block of pure functions (MEM-JUDGE-START .. MEM-JUDGE-END) that tools/tests/memjudge.js runs as it stands
#   * judge(): the one place an answer changes a card; grade(), gradeEarly() and the pick / listen / typed quizzes all call it
#   * saved progress is read through mjRead(): a card saved by an older version gets its memory length from its box
#   * box and due are still written, so a device on an older version keeps working
#   * New / Learning / Memorized / Needs practice on flashcards, deck badges, Browse, Today and Progress
# usage: python3 tools/patches/mem_judge.py [src/app.html]
import sys
p = sys.argv[1] if len(sys.argv) > 1 else 'src/app.html'
s = open(p, encoding='utf8').read()
assert 'MEM-JUDGE-START' not in s, 'already applied'

def rep(a, b, n=1):
    global s
    assert s.count(a) == n, 'expected %d, found %d: %s' % (n, s.count(a), a[:90])
    s = s.replace(a, b)

def between(a, z, new, must=()):
    """replace everything from the start of anchor a up to (not including) anchor z"""
    global s
    assert s.count(a) == 1, 'start anchor %d times: %s' % (s.count(a), a[:80])
    i = s.index(a); j = s.index(z, i)
    old = s[i:j]
    for m in must:
        assert m in old, 'expected in the replaced text: ' + m
    s = s[:i] + new + s[j:]

# ---------------------------------------------------------------- 1. the judge: pure functions
BLOCK = r'''/* MEM-JUDGE-START · MEM-1, the card memory judge. Pure functions: no S, no DOM, no clock. tools/tests/memjudge.js runs this block as it stands, so keep it self-contained.
   A card's memory m = {st, df, rr, nd, lw}. st: memory length in days (the gap after which recall falls to 9 in 10). df: difficulty, 1 to 10.
   rr: the last four days the card was answered, bit 0 the most recent, a set bit meaning no miss that day. nd: days answered so far (stops at 4). lw: 1 while the last answer was wrong.
   Time comes in as t (days since the last answer) and same (that answer was on the same calendar day). The forgetting curve and the growth and loss rules are the published FSRS
   formulas with their published default weights; the question types, the lucky-pick correction, the limit of 4 times per answer, the day-based slips and the two personal numbers
   (cal = {q, g}: memory length used = q * st^g) are this app's own. docs/HANDOFF.md has the summary; the plan and the simulation are in iterations.md, entry MEM-1.
   Credit: the 17 weights in MJ_W, the curve constants MJ_F and MJ_C and the formulas they feed come from FSRS-5 as published by Open Spaced Repetition (the fsrs package 4.1.2, github.com/open-spaced-repetition/py-fsrs). Its licence, which asks to be kept with the code:
   MIT License Copyright (c) 2022 Open Spaced Repetition Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
const MJ_W=[0.40255,1.18385,3.173,15.69105,7.1949,0.5345,1.4604,0.0046,1.54575,0.1192,1.01925,1.9395,0.11,0.29605,2.2698,0.2315,2.9898], MJ_F=19/81, MJ_C=-0.5;
const MJ_TYPES={type:{g:0,w:1,s0:1.5},pick:{g:0.25,w:0.8,s0:1},self:{g:0,w:0.5,s0:0.5}}; /* g: chance of a lucky right answer · w: weight of a right answer · s0: memory length after a first right answer */
const MJ={s0bad:0.3,tMem:7,kOver:2,minSt:0.1,maxSt:3650,maxGain:4,lapseCap:4,maxIvl:365,minGap:0.5,eta:0.08,etaG:0.006,qMin:0.05,qMax:3,gMin:0.5,gMax:1.3};
const MJ_CAL0={q:1,g:1}, MJ_BOXDAYS=[0.3,0.3,1,3,7,14,30], MJ_TCODE={pick:0,type:1,self:2}, MJ_STATES=['new','learning','memorized','practice'];
function mjClamp(x,a,b){ return Math.min(b,Math.max(a,x)); }
function mjRecall(t,L){ return Math.pow(1+MJ_F*Math.max(0,t)/L,MJ_C); }
function mjLen(st,cal){ cal=cal||MJ_CAL0; return cal.q*(st>1?Math.pow(st,cal.g):st); }
function mjD0(g){ return mjClamp(MJ_W[4]-Math.exp(MJ_W[5]*(g-1))+1,1,10); }
function mjDNext(d,g){ return mjClamp(MJ_W[7]*mjD0(4)+(1-MJ_W[7])*(d+(-MJ_W[6]*(g-3))*((10-d)/9)),1,10); }
function mjForecast(m,t,type,cal){ const T=MJ_TYPES[type]||MJ_TYPES.pick, R=mjRecall(t,mjLen(m.st,cal)); return R+(1-R)*T.g; } /* chance of a right answer, a lucky pick included */
function mjCalStep(m,ok,t,type,cal){ cal=cal||MJ_CAL0; if(t<MJ.minGap) return cal; const T=MJ_TYPES[type]||MJ_TYPES.pick, x=MJ_F*t/mjLen(m.st,cal), R=Math.pow(1+x,MJ_C), P=R+(1-R)*T.g;
  const gq=((ok?1:0)-P)/Math.max(0.05,P*(1-P))*(1-T.g)*0.5*x*Math.pow(1+x,MJ_C-1);
  return {q:mjClamp(cal.q*Math.exp(mjClamp(MJ.eta*gq,-0.15,0.15)),MJ.qMin,MJ.qMax), g:m.st>1?mjClamp(cal.g+mjClamp(MJ.etaG*gq*Math.log(m.st),-0.08,0.08),MJ.gMin,MJ.gMax):cal.g}; }
function mjUpdate(m,ok,t,same,type,cal){ const T=MJ_TYPES[type]||MJ_TYPES.pick; if(!m) return {st:ok?T.s0:MJ.s0bad,df:mjD0(ok?3:1),rr:ok?1:0,nd:1,lw:ok?0:1,lapse:ok?0:1};
  const R=mjRecall(t,mjLen(m.st,cal)); let st, df=m.df, rr=m.rr, nd=m.nd, lapse=0;
  if(ok){ const k=R/(R+(1-R)*T.g), inc=Math.exp(MJ_W[8])*(11-m.df)*Math.pow(m.st,-MJ_W[9])*(Math.exp(MJ_W[10]*(1-R))-1); st=m.st*Math.min(MJ.maxGain,1+T.w*k*inc);
    if(!same) df=mjDNext(m.df,3); else if(m.nd===1&&(m.rr&1)) st=Math.max(st,T.s0); /* a card's first day counts its strongest right answer, so "Got it" followed by a right pick starts where a first right pick does */ }
  else { const sf=MJ_W[11]*Math.pow(m.df,-MJ_W[12])*(Math.pow(m.st+1,MJ_W[13])-1)*Math.exp(MJ_W[14]*(1-R)); st=Math.min(m.st,sf,MJ.lapseCap); if(!same||(m.rr&1)){ df=mjDNext(m.df,1); lapse=1; } /* one lapse a day at most */ }
  if(same){ if(!ok) rr=rr&~1; } else { rr=((rr<<1)|(ok?1:0))&15; nd=Math.min(4,nd+1); } /* a miss is cleared only by a right answer on a later day */
  return {st:mjClamp(st,MJ.minSt,MJ.maxSt),df,rr,nd,lw:ok?0:1,lapse}; }
function mjOpen(m){ return !(m.rr&1); }
function mjWrongDays(m){ const k=Math.min(4,m.nd); let w=0; for(let i=0;i<k;i++) if(!((m.rr>>i)&1)) w++; return w; }
function mjWhy(m,t,cal){ return !m?'':mjOpen(m)?'miss':mjWrongDays(m)>=2?'days':t>MJ.kOver*mjLen(m.st,cal)?'old':''; } /* why a card needs practice: missed last time · missed on 2 of its last 4 days · unseen for more than twice its memory length */
function mjStatus(m,t,cal){ return !m?'new':mjWhy(m,t,cal)?'practice':mjLen(m.st,cal)>=MJ.tMem?'memorized':'learning'; }
function mjDueIn(m,cal){ return mjOpen(m)?1:Math.min(MJ.maxIvl,Math.max(1,Math.round(mjLen(m.st,cal)))); } /* days from the day of the last answer to the next review */
function mjBox(m){ return m.lw?1:m.st<3?2:m.st<7?3:m.st<14?4:m.st<30?5:6; } /* the box an older version of the app would expect: 1 after a miss, else by memory length */
function mjFromBox(box,lapses){ box=mjClamp(Math.round(+box)||1,1,6); let df=mjD0(3); for(let i=Math.min(3,+lapses||0);i>0;i--) df=mjDNext(df,1); return box<2?{st:MJ_BOXDAYS[1],df,rr:2,nd:2,lw:1}:{st:MJ_BOXDAYS[box],df,rr:3,nd:2,lw:0}; } /* a card saved before the judge: 1, 3, 7, 14 or 30 days by box */
function mjSync(m,box){ box=mjClamp(Math.round(+box)||1,1,6); /* an older version graded the card after the judge last wrote it: a miss there (box 1) cuts the memory as a miss here would, a right answer lifts it to at least that box's length */
  if(box<2){ const sf=MJ_W[11]*Math.pow(m.df,-MJ_W[12])*(Math.pow(m.st+1,MJ_W[13])-1)*Math.exp(MJ_W[14]*0.1); return {st:mjClamp(Math.min(m.st,sf,MJ.lapseCap),MJ.minSt,MJ.maxSt),df:mjDNext(m.df,1),rr:(m.rr<<1)&15,nd:Math.min(4,m.nd+1),lw:1}; }
  return {st:Math.max(m.st,MJ_BOXDAYS[box]),df:m.df,rr:((m.rr<<1)|1)&15,nd:Math.min(4,m.nd+1),lw:0}; }
function mjRead(s){ if(!s||!(s.seen>0||s.box>=2)) return null; /* never answered (a buried, suspended or just-added card has seen 0) */ if(!(s.st>0)||typeof s.h!=='number') return mjFromBox(s.box,s.lapses);
  const m={st:mjClamp(+s.st,MJ.minSt,MJ.maxSt),df:mjClamp(+s.df||mjD0(3),1,10),rr:s.h&15,nd:Math.max(1,(s.h>>4)&7),lw:(s.h>>7)&1}; return s.mb===s.box?m:mjSync(m,s.box); }
function mjWrite(s,m){ s.st=+m.st.toPrecision(3); s.df=+m.df.toFixed(2); s.h=(m.rr&15)|(Math.min(4,m.nd)<<4)|(m.lw?128:0); s.box=s.mb=mjBox({st:s.st,lw:m.lw}); return s; } /* mb remembers the box the judge wrote, so a later change of box by an older version shows */
/* MEM-JUDGE-END */
'''
rep("const fresh = () => ({ cards:{},", BLOCK + "const fresh = () => ({ cards:{},")

# ---------------------------------------------------------------- 2. glue: the judge applied to saved cards
GLUE = r'''function isNew(d,c){ return !cardState(d,c); }
/* MEM-1 glue. Older versions of the app only know box, due, seen, lapses and last, so judge() still writes those. */
const MEM_T0=Date.UTC(2026,10,25), MEM_WORD={new:'new',learning:'learning',memorized:'memorized',practice:'needs practice'}, MEM_WHY={miss:'missed last time',days:'missed on 2 of its last 4 days',old:'not seen for too long'}, MEM_COL={new:'var(--line)',learning:'var(--muted)',memorized:'var(--ok)',practice:'var(--warn)'}; /* never the accent: a learner can set that to green or blue */
function dayOf(ms){ return Math.floor((ms-new Date(ms).getTimezoneOffset()*60000)/86400000); }
function memCal(){ const c=S.mem; return c&&c.q>0&&c.g>0?c:MJ_CAL0; }
function memInfo(s){ const m=mjRead(s); if(!m) return {st:'new',why:'',len:0,ago:0}; const cal=memCal(), last=+s.last||0, why=mjWhy(m,Math.max(0,(Date.now()-last)/86400000),cal), len=mjLen(m.st,cal); return {st:why?'practice':len>=MJ.tMem?'memorized':'learning',why,len,ago:Math.max(0,dayNum()-dayOf(last))}; }
function memCounts(d){ const k='m|'+d; if(memo[k]) return memo[k]; const o={new:0,learning:0,memorized:0,practice:0}; (DECKS[d]||[]).forEach(c=>{ o[memInfo(cardState(d,c)).st]++; }); return memo[k]=o; }
function memTotals(){ const o={new:0,learning:0,memorized:0,practice:0}; names.forEach(d=>{ const c=memCounts(d); MJ_STATES.forEach(k=>{ o[k]+=c[k]; }); }); return o; }
function memLine(mi){ if(mi.st==='new') return ''; const L=Math.round(mi.len); return '<div class="n mj"><span>'+MEM_WORD[mi.st]+'</span>'+(mi.why?' · <span>'+MEM_WHY[mi.why]+'</span>':'')+' · <span>'+(L<2?'memory lasts under 2 days':'memory lasts about '+L+' days')+'</span> · <span>'+(mi.ago<1?'seen today':mi.ago===1?'seen yesterday':'seen '+mi.ago+' days ago')+'</span></div>'; }
function memLegend(d){ const mc=memCounts(d); return ['learning','memorized','practice'].map(k=>'<i class="dot" style="background:'+MEM_COL[k]+'"></i> <span>'+MEM_WORD[k]+'</span> '+mc[k]).join(' '); }
function memNoteDue(){ return S.memNote!==1&&Object.values(S.cards).some(s=>s&&s.seen>0&&!(s.st>0)&&(+s.last||0)<MEM_T0); } /* progress saved before the judge is still here: Progress explains once why counts may have dropped */
function judge(d,c,ok,type){ /* the one place an answer changes a card. type: 'pick' (chosen from four), 'type' (typed) or 'self' ("Got it" on a flip card). Returns the answer-log row */
  memoClear(); type=MJ_TYPES[type]?type:'pick'; const k=ck(d,c), now=Date.now(), today=dayNum(), s=S.cards[k]||{box:0,due:today,seen:0,lapses:0,last:0};
  const m=mjRead(s), last=+s.last||0, t=m?Math.max(0,(now-last)/86400000):0, same=!!m&&dayOf(last)===today, own=!!m&&s.st>0&&s.mb===s.box; let cal=memCal();
  const row=[now, s.box||0, ok?1:0, cardShownAt?Math.min(60000,now-cardShownAt):0, new Date().getHours(), MJ_TCODE[type], m?+t.toFixed(2):-1, m?+mjForecast(m,t,type,cal).toFixed(2):-1, MJ_STATES.indexOf(mjStatus(m,t,cal))]; /* time, box before, right, ms to answer, hour, question type, days since last answer, forecast, judgement before */
  S.rlog=S.rlog||[]; S.rlog.push(row); if(S.rlog.length>500) S.rlog.splice(0,S.rlog.length-500);
  if(own&&t>=MJ.minGap){ const c2=mjCalStep(m,ok,t,type,cal); cal=S.mem={q:+c2.q.toFixed(4),g:+c2.g.toFixed(4),n:((S.mem&&+S.mem.n)||0)+1}; } /* the judge checks its own forecasts: only on cards it has graded before, and only after a real gap */
  const n=mjUpdate(m,ok,t,same,type,cal); s.seen=(+s.seen||0)+1; s.last=now; if(n.lapse) s.lapses=(+s.lapses||0)+1; mjWrite(s,n);
  s.due=ok?today+mjDueIn(n,cal):today; /* a miss stays due today, so the sitting brings it back; answered right it returns tomorrow, and only a right answer on a later day clears it */
  if(!ok&&s.lapses>=4&&!s.unleech&&!s.leech){ s.leech=1; toast('🩹 Marked as a leech and parked from sessions. Manage it in Progress.'); } /* lapses count once a day, so this means missed on 4 different days */
  S.cards[k]=s; return row; }
function quizGrade(d,c,ok,type){ judge(d,c,ok,type); if(ok){ checkMastery(d); checkCerts(); } } /* the pick, listen and typed quizzes: same judge as Review, their own XP */
'''
rep("function isNew(d,c){ return !cardState(d,c); }\n", GLUE)

# ---------------------------------------------------------------- 3. grading paths
rep("return DECKS[d].filter(c=>{const s=cardState(d,c); return s&&s.box>=4;}).length; }", "return memCounts(d).memorized; } /* MEM-1: a deck's trophy and mastery % count the cards judged Memorized */")
between("function grade(d,c,ok,isNewCard){", "let undoT=null;", r'''function grade(d,c,ok,isNewCard,type){ /* Review, sessions and flip cards. type as in judge(); a flip card passes 'self' */
  memoClear(); const k=ck(d,c); lastGrade={k, prev:S.cards[k]?JSON.parse(JSON.stringify(S.cards[k])):null, xp:S.xp, day:S.days[dkey()]||0, mem:S.mem?Object.assign({},S.mem):null};
  if(!S.cards[k]){ S.newLog=S.newLog||{}; S.newLog[dkey()]=(S.newLog[dkey()]||0)+1; }
  lastGrade.row=judge(d,c,ok,type);
  if(fxMute>Date.now()) fxMute=0; else ansFx(ok); award(ok?(isNewCard?4:3):1); if(ok){ checkMastery(d); checkCerts(); }
}
function undoGrade(){ if(!lastGrade) return false; const g=lastGrade; lastGrade=null; if(g.prev) S.cards[g.k]=g.prev; else delete S.cards[g.k]; if(g.mem) S.mem=g.mem; else delete S.mem; if(g.row&&S.rlog&&S.rlog[S.rlog.length-1]===g.row) S.rlog.pop(); S.xp=g.xp; S.days[dkey()]=g.day; save(); hdr(); return true; }
''', must=("s.box=Math.min(6,(s.box||1)+1)", "S.imult=adaptIntervals(S.rlog,S.imult)", "function undoGrade(){"))
rep("const cs=cardState(d,c); if(!ok){ if(cs){ cs.box=1; cs.due=dayNum(); cs.lapses++; cs.last=Date.now(); } else S.cards[ck(d,c)]={box:1,due:dayNum(),seen:1,lapses:1,last:Date.now()}; } else if(!cs){ S.cards[ck(d,c)]={box:2,due:dayNum()+INTERVALS[2],seen:1,lapses:0,last:Date.now()}; }\n    ansFx(ok); award(ok?5:1);",
    "quizGrade(d,c,ok,'type');\n    ansFx(ok); award(ok?5:1);")
rep("    // feed SRS: wrong -> back to box 1 (due now); right on an unseen card -> create it so Review tracks it\n    const cs=cardState(d,c); if(!ok){ if(cs){ cs.box=1; cs.due=dayNum(); cs.lapses++; cs.last=Date.now(); } else S.cards[ck(d,c)]={box:1,due:dayNum(),seen:1,lapses:1,last:Date.now()}; }\n    else if(!cs){ S.cards[ck(d,c)]={box:2,due:dayNum()+INTERVALS[2],seen:1,lapses:0,last:Date.now()}; }\n",
    "    quizGrade(d,c,ok,'pick'); /* MEM-1: a quiz answer counts like a Review answer, right or wrong */\n")
between("function gradeEarly(d,c){", "function rvStep(ok){", r'''function gradeEarly(d,c){ /* right answer on a card that was not due: 1 XP. The judge counts it like any answer, which is next to nothing when the card was seen moments ago */ memoClear(); const k=ck(d,c), st=S.cards[k]; lastGrade={k, prev:st?JSON.parse(JSON.stringify(st)):null, xp:S.xp, day:S.days[dkey()]||0, mem:S.mem?Object.assign({},S.mem):null}; lastGrade.row=judge(d,c,true,'pick'); if(fxMute>Date.now()) fxMute=0; else ansFx(true); award(1); checkMastery(d); checkCerts(); }
''', must=("st.seen++; st.last=Date.now();",))
rep("grade(d,c,ok,isNew(d,c)); if(ok) got++;", "grade(d,c,ok,isNew(d,c),'self'); if(ok) got++;")
rep("grade(x.d,x.c,ok,isNew(x.d,x.c));", "grade(x.d,x.c,ok,isNew(x.d,x.c),'self');", 2)
rep("   A right answer on a card that is not due leaves its schedule alone (so extra practice cannot inflate boxes); a wrong\n   answer always sends the card back to box 1.",
    "   A right answer on a card that is not due goes to the judge like any other (MEM-1): it adds next to nothing when the card was\n   seen moments ago, so extra practice cannot inflate a card. A wrong answer always marks the card as needing practice.")

# ---------------------------------------------------------------- 4. sync merge, saved-state checks, reset
rep("m.mastered=Object.assign({},a.mastered,b.mastered);", "m.mastered=Object.assign({},a.mastered,b.mastered); { const A=a.mem, B=b.mem, pk=(A&&B)?((+B.n||0)>(+A.n||0)?B:A):(A||B); if(pk) m.mem=pk; else delete m.mem; m.memNote=(a.memNote||b.memNote)?1:0; } /* MEM-1: the personal numbers with more answers behind them win */")
rep("s.practice=pr; s.kbTiles=!!s.kbTiles; }\n  return s; }", "s.practice=pr; s.kbTiles=!!s.kbTiles; }\n  if(s.mem!=null){ const q=+s.mem.q, g=+s.mem.g; if(isFinite(q)&&isFinite(g)&&q>0&&g>0) s.mem={q:Math.min(3,Math.max(0.05,q)),g:Math.min(1.3,Math.max(0.5,g)),n:Math.max(0,Math.round(+s.mem.n)||0)}; else delete s.mem; } /* MEM-1 personal numbers */\n  return s; }")
rep("$('intReset').onclick=()=>{ S.imult={}; applyIntervals();", "$('intReset').onclick=()=>{ S.imult={}; delete S.mem; applyIntervals();")

# ---------------------------------------------------------------- 5. the words on screen
rep("const s=cardState(d,c); const boxTxt = s ? (s.leech?'🩹 leech · ':'')+'box '+s.box : 'new';",
    "const s=cardState(d,c); const boxTxt=(s&&s.leech?'<span data-noi18n>🩹 </span>':'')+'<span>'+MEM_WORD[memInfo(s).st]+'</span>';")
# deck badge: compact (coloured dots + counts) on chips and Progress rows, words on the picked-deck line, plain in Browse (the legend there carries the counts)
between("function deckStats(d){", "function deckChips(container, isOn, onPick, opts={}){", r'''function deckStats(d){ const t=DECKS[d]?DECKS[d].length:0, mc=memCounts(d); return {t, learned:learned(d), mastered:Math.round(masteryPct(d)*100), mem:mc.memorized, prac:mc.practice, due:DECKS[d]?DECKS[d].filter(c=>isDue(d,c)).length:0, locked:!deckUnlocked(d)}; }
function deckBadgeIn(d,mode){ /* mode 0: dots and counts · 1: the words · 2: no memory counts */ const s=deckStats(d), seg=(n,k)=>!n||mode===2?'':mode===1?' · <span>'+MEM_WORD[k]+'</span> '+n:' <i class="dot" role="img" style="background:'+MEM_COL[k]+'" title="'+MEM_WORD[k]+'" aria-label="'+MEM_WORD[k]+'"></i>'+n; return s.learned+'/'+s.t+seg(s.mem,'memorized')+seg(s.prac,'practice')+(s.due?' · <span>'+s.due+' due</span>':''); }
function deckBadge(d,mode){ return `<span class="n" data-badge="${d.replace(/"/g,'&quot;')}">${deckBadgeIn(d,mode||0)}</span>`; }
''', must=("s.mastered?' · '+s.mastered+'%':''",))
rep("deckBadge(deck).replace(/<[^>]+>/g,'')+' · '+groupOf(deck)", "deckBadgeIn(deck,1)+' · <span data-noi18n>'+groupOf(deck)+'</span>'")
# Browse
rep("const s=cardState(d,c); const col=!s?'var(--line)':s.susp?'transparent':s.box>=6?'var(--ok)':s.box>=3?'var(--warn)':'var(--accent)'; return `<div class=\"brow\"><i style=\"background:${col};${s&&s.susp?'border:2px solid var(--muted)':''}\" title=\"${s?(s.susp?'suspended · ':'')+'box '+s.box:'new'}\"></i><div data-noi18n>",
    "const s=cardState(d,c), mi=memInfo(s); const col=s&&s.susp?'transparent':MEM_COL[mi.st]; return `<div class=\"brow\"><i style=\"background:${col};${s&&s.susp?'border:2px solid var(--muted)':''}\" title=\"${MEM_WORD[mi.st]}\"></i><div><div data-noi18n>")
rep(":''}</div><span style=\"display:flex;gap:4px\"><button class=\"ghost\" data-say=\"${c[0].replace(/\"/g,'&quot;')}\" style=\"padding:6px 9px\" aria-label=\"Listen to ${c[1].replace(/\"/g,'&quot;')}\">🔊</button>${d===MYDECK?",
    ":''}</div>${memLine(mi)}</div><span style=\"display:flex;gap:4px\"><button class=\"ghost\" data-say=\"${c[0].replace(/\"/g,'&quot;')}\" style=\"padding:6px 9px\" aria-label=\"Listen to ${c[1].replace(/\"/g,'&quot;')}\">🔊</button>${d===MYDECK?")
rep("<b>${d} <span class=\"stat\">· ${deckBadge(d)}${(S.mastered||{})[d]?' 🏆':''}</span></b>${spark}<span class=\"stat\">${learned(d)}/${DECKS[d].length} learned · <i class=\"dot\" style=\"background:var(--accent)\"></i> learning <i class=\"dot\" style=\"background:var(--warn)\"></i> box 3+ <i class=\"dot\" style=\"background:var(--ok)\"></i> mastered</span>",
    "<b>${d} <span class=\"stat\">· ${deckBadge(d,2)}${(S.mastered||{})[d]?' 🏆':''}</span></b>${spark}<span class=\"stat\">${memLegend(d)}</span>")
# Today
rep("<span><b>${Object.values(S.cards).filter(s=>s.box>=2).length}</b> learned</span>", "<span><b>${memTotals().memorized}</b> memorized</span>")
# Progress: tile, chart, explanation, analytics, deck rows
rep("<b id=\"pKnown\">0</b><span>cards learned</span>", "<b id=\"pKnown\">0</b><span>memorized</span>")
rep("<div class=\"panel\" data-adv=\"progress\" style=\"margin-top:12px\"><h3 style=\"margin-top:0\">Cards by box</h3><div class=\"boxes\" id=\"boxes\"></div><p class=\"stat\" style=\"margin:8px 0 0\" id=\"intTable\"></p><div class=\"row\" style=\"margin-top:6px\"><span class=\"stat\">Intervals adapt to your retention (±) · </span><button",
    "<div class=\"panel\" style=\"margin-top:12px\"><h3 style=\"margin-top:0\">Cards by memory</h3><div id=\"memNote\"></div><div class=\"boxes\" id=\"boxes\" style=\"grid-template-columns:repeat(3,1fr);height:auto\"></div><p class=\"stat\" style=\"margin:6px 0 0\" id=\"memNew\"></p><p class=\"stat\" style=\"margin:8px 0 0\" id=\"intTable\"></p><div class=\"row\" data-adv=\"progress\" style=\"margin-top:6px\"><span class=\"stat\">Intervals adapt to your retention (±) · <span id=\"memCal\" data-noi18n></span></span><button")
rep(", known=Object.values(S.cards).filter(s=>s.box>=2).length;\n  $('pStreak')", ", known=memTotals().memorized;\n  $('pStreak')")
rep("Review a few cards and this fills in: retention by box, speed, and your best hour.", "Review a few cards and this fills in: how often you are right, your speed, and your best hour.")
rep("const byBox=[1,2,3,4,5,6].map(b=>{ const r=L.filter(x=>x[1]===b); return {b,n:r.length,acc:r.length?r.filter(x=>x[2]).length/r.length:null}; });",
    "const stOf=x=>x.length>8?x[8]:x[1]<1?0:x[1]<2?3:x[1]<4?1:2; /* answers logged before MEM-1 carry a box, not a judgement */ const byMem=[0,1,2,3].map(b=>{ const r=L.filter(x=>stOf(x)===b); return {b,n:r.length,acc:r.length?r.filter(x=>x[2]).length/r.length:null}; });")
rep("<div class=\"ret\">${byBox.map(x=>`<div title=\"box ${x.b}: ${x.n} reviews\"><i style=\"height:${x.acc===null?2:Math.max(2,x.acc*50)}px;opacity:${x.acc===null?.25:1}\"></i><b>${x.acc===null?'–':Math.round(x.acc*100)+'%'}</b><span>box ${x.b}</span></div>`).join('')}</div><p class=\"stat\" style=\"margin:6px 0 0\">Retention when a card comes back from each box. Higher boxes should stay high; a dip means the interval there is too long for you.</p>",
    "<div class=\"ret\" style=\"grid-template-columns:repeat(4,1fr);height:auto\">${byMem.map(x=>`<div title=\"${x.n}\"><i style=\"height:${x.acc===null?2:Math.max(2,x.acc*50)}px;opacity:${x.acc===null?.25:1};background:${MEM_COL[MJ_STATES[x.b]]}\"></i><b>${x.acc===null?'–':Math.round(x.acc*100)+'%'}</b><span style=\"min-height:2.3em;line-height:1.15;text-align:center\">${MEM_WORD[MJ_STATES[x.b]]}</span></div>`).join('')}</div><p class=\"stat\" style=\"margin:6px 0 0\">How often you were right, by how the card was judged just before you answered. Memorized cards should stay near 9 in 10.</p>")
between("  const rtlInt=uiDir()==='rtl';", "  { checkCerts(); const cs=$('certs');", r'''  { const mt=memTotals(), mk=['learning','memorized','practice'], mx=Math.max(1,...mk.map(k=>mt[k])); /* MEM-1: cards by judgement, the same words as everywhere else. New cards are a count, not a bar: early on they would flatten the other three */
    $('boxes').innerHTML=mk.map(k=>`<div style="height:auto"><b>${mt[k]}</b><i style="height:${Math.max(2,mt[k]/mx*58)}px;background:${MEM_COL[k]}"></i><span style="min-height:2.3em;line-height:1.15;text-align:center">${MEM_WORD[k]}</span></div>`).join('');
    $('memNew').textContent=mt.new?mt.new+' new':'';
    $('intTable').textContent='Memorized: the app expects you to still know the card a week after your last review. Needs practice: you missed it recently, or it has gone unseen for too long. Learning is everything in between.';
    $('memCal').textContent=S.mem&&S.mem.q>0?'×'+(+S.mem.q).toFixed(2)+' · ':'';
    const nb=$('memNote'); nb.innerHTML=memNoteDue()?'<p class="stat" style="margin:0 0 10px;color:var(--ink)"><span>Cards are now judged by how long you remember them. Cards you have not seen for a long time show as needs practice until you answer them again.</span> <button class="ghost" id="memNoteOk" type="button" style="padding:3px 8px;font-size:.72rem">Hide</button></p>':''; const nk=$('memNoteOk'); if(nk) nk.onclick=()=>{ S.memNote=1; save(); renderProgress(); }; }
''', must=("' · 6 = mastered'", "'box '+i"))
between("  $('pDecks').innerHTML = GROUPS.map(", "  const ex=S.exams||[];", r'''  $('pDecks').innerHTML = GROUPS.map(g=>`<div class="grp" style="margin:10px 0 2px">${g[0]}</div>`+g[1].map(n=>{ const t=DECKS[n].length, mc=memCounts(n), w=x=>(t?x/t*100:0); return `<div class="prow"><span>${deckUnlocked(n)?'':'🔒 '}${n}${(S.mastered||{})[n]?' 🏆':''}</span><small>${deckBadge(n)}</small><div class="bar" style="display:flex"><i style="width:${w(mc.memorized)}%;background:${MEM_COL.memorized}"></i><i style="width:${w(mc.learning)}%;background:${MEM_COL.learning}"></i><i style="width:${w(mc.practice)}%;background:${MEM_COL.practice}"></i></div></div>`; }).join('')).join('');
''', must=("s.box>=5",))

# deck chips: the badge now carries up to two more counts, so a chip with a long deck name wraps its name instead of running off a phone screen (seen under the Hmong interface)
rep(".decks{display:flex;flex-wrap:wrap;gap:8px;width:100%;align-items:center}", ".decks{display:flex;flex-wrap:wrap;gap:8px;width:100%;align-items:center}.decks .chip{max-width:100%;text-align:start}.decks .chip .n{white-space:nowrap}")

open(p, 'w', encoding='utf8').write(s)
print('mem_judge applied:', p)
