#!/usr/bin/env python3
# MEM-2 (release B of the card memory judge): the judge chooses which cards come back.
#   * mjRisk in the judge block: the chance that a card is forgotten by this time tomorrow
#   * the quiz after each new five in Practice takes at most 15 earlier cards (needs practice first, then the learning cards most at risk): at most 30 questions
#   * "Practice these first" becomes the main button once 10 cards of the picked decks wait for practice; new cards stay on offer
#   * Review brings due cards in the judge's order (two easy cards to warm up, needs practice, then the most at risk) and holds new cards back while 10 cards wait for practice
#   * Weak spots is the needs-practice list
#   * no chooser reads a box any more
#   * the help text of "Learn 5 at a time" on the Practice screen says the new rule
# usage: python3 tools/patches/mem_judge_b.py [src/app.html]      (apply after tools/patches/mem_judge.py, tools/patches/quiz_flow.py and tools/patches/quiz_missed.py: the round screen is the one of QF-1 (2.104.0) and its follow-ups (2.108.0), with no pass mark and with "Review missed")
import sys
p = sys.argv[1] if len(sys.argv) > 1 else 'src/app.html'
s = open(p, encoding='utf8').read()
assert 'MEM-JUDGE-START' in s, 'apply tools/patches/mem_judge.py first'
assert 'const base=pos, fresh=pool.slice(base,base+5)' in s, 'apply tools/patches/quiz_flow.py first'
assert 'let i=0, show=fresh, only=null;' in s, 'apply tools/patches/quiz_missed.py first'
assert 'function mjRisk(' not in s, 'already applied'

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

# ---------------------------------------------------------------- 1. the judge block: risk
rep("function mjBox(m){ return m.lw?1:",
    "function mjRisk(m,t,cal){ return 1-mjRecall(Math.max(0,t)+1,mjLen(m.st,cal)); } /* MEM-2: the chance that the card is forgotten by this time tomorrow if it is left alone. It orders Review, the quiz after each new five and the needs-practice list */\n"
    "function mjBox(m){ return m.lw?1:")

# ---------------------------------------------------------------- 2. the choosers, next to the judge's glue
GLUE = r'''/* MEM-2 glue: the judge chooses which cards come back (iterations.md, entry MEM-2). Nothing here reads a box. */
const MEM_HOLD=10, MEM_EARLIER=15; /* 10 cards waiting for practice: Review holds new cards back and Practice offers "Practice these first" · the quiz after each new five takes at most 15 earlier cards */
function memPick(s){ /* what the choosers need from one saved card: its judgement, its risk (mjRisk), whether it was already answered right today, and when it was last answered. null for a card never answered */
  const m=mjRead(s); if(!m) return null; const cal=memCal(), last=+s.last||0, t=Math.max(0,(Date.now()-last)/86400000); return {st:mjStatus(m,t,cal),risk:mjRisk(m,t,cal),done:!m.lw&&dayOf(last)===dayNum(),last}; }
function memRows(list){ /* list of {d,c} -> one row for each card that has been answered and is not suspended */ const out=[]; list.forEach((x,i)=>{ const s=cardState(x.d,x.c); if(!s||s.susp) return; const p=memPick(s); if(p) out.push({x,i,p}); }); return out; }
function memSort(rows){ /* first the cards that wait for practice (needs practice, not yet answered right today), then the learning cards not yet answered today, then the memorized ones, each group with the most at risk first. Last come the cards already answered right today, the one answered longest ago first: a sitting goes round its cards instead of repeating the same few, and a card missed today comes back until it is answered right, then takes its turn like the others */
  const T=p=>p.done?3:p.st==='practice'?0:p.st==='learning'?1:2; return rows.sort((a,b)=>T(a.p)-T(b.p)||(a.p.done?a.p.last-b.p.last:b.p.risk-a.p.risk)||a.i-b.i).map(r=>r.x); }
function memRank(list,only){ return memSort(memRows(list).filter(r=>!only||only.indexOf(r.p.st)>=0)); }
function memWaiting(decks){ /* the cards of these decks that need practice and have not been answered right today (not suspended, not buried for today), the most at risk first */
  const t=dayNum(), k='w|'+t+'|'+(decks===names?'*':decks.join('+')); if(memo[k]) return memo[k]; const l=[]; /* the key carries the day: "answered right today" ends at midnight even when nothing was saved since */ decks.forEach(d=>(DECKS[d]||[]).forEach(c=>{ const s=cardState(d,c); if(s&&s.bury!==t) l.push({d,c}); })); return memo[k]=memSort(memRows(l).filter(r=>r.p.st==='practice'&&!r.p.done)); }
function loopEarlier(pool,pos){ /* the quiz after each new five: at most 15 of the cards before them. The ones that wait for practice first, then the learning cards most at risk; if there is room, cards already answered right today. Memorized cards are left to Review */ return memRank(pool.slice(0,pos),['practice','learning']).slice(0,MEM_EARLIER); }
function loopQuiz(fresh,earlier){ /* the new cards asked three ways, each earlier card once, mixed, no card twice in a row: at most 30 questions */
  const order=qMode==='mixed'?['read',koVoice?'listen':'recall','recall']:[qMode,qMode,qMode]; let qs=[]; fresh.forEach(x=>order.forEach(m=>qs.push({d:x.d,c:x.c,mode:m}))); earlier.forEach(x=>qs.push({d:x.d,c:x.c,mode:order[Math.floor(Math.random()*order.length)]}));
  for(let tries=0;tries<200;tries++){ qs=shuffle(qs); if(!qs.some((q,i)=>i&&q.c===qs[i-1].c)) break; } /* 200 tries: with only the five new cards one try in nine has no repeat */ return qs; }
function practiceFirst(wait){ /* "Practice these first": the Weak spots quiz on the cards of the picked decks that wait for practice, the 20 most at risk; then on with the next five */
  const pool=wait.slice(0,20); runQuiz(pool,'Weak spots',(s,t)=>{ const again=memWaiting([...qSel]), hold=again.length>=MEM_HOLD, n=[...qSel].reduce((a,d)=>a+DECKS[d].length,0), more=((S.learnPos||{})[learnKey()]||0)<n, b=[]; /* still 10 waiting (more than 20 waited, or many were missed): the same main button again. "Next 5 cards" is offered whenever the picked decks have cards left to learn */
    if(hold) b.push({label:'Practice these first',cls:'primary',fn:()=>practiceFirst(again),wide:true}); if(more) b.push({label:'Next 5 cards',cls:hold?'hit':'primary',fn:learnLoop,wide:hold}); b.push({label:'Back',cls:b.length?'ghost':'primary',fn:backToSetup,wide:hold||!more});
    quizResult(s,t,'Weak spots · '+pool.length+' cards',b); }); }
'''
rep("function judge(d,c,ok,type){ /* the one place an answer changes a card.", GLUE + "function judge(d,c,ok,type){ /* the one place an answer changes a card.")

# ---------------------------------------------------------------- 3. Review: the order of due cards
between("function orderReviews(q){", "function dueQueue(){", r'''function orderReviews(q){ // MEM-2: two easy cards to warm up, then the cards that need practice, then the rest, each group with the most at risk first; no two cards of one deck in a row where the group allows it
  const jit=S.shuffle!==false?0.01:0, rows=q.map((x,i)=>{ const s=cardState(x.d,x.c), p=s?memPick(s):null; return {x,i,g:p&&p.st==='practice'?0:1,r:(p?p.risk:0.5)+(Math.random()-0.5)*jit}; }); /* with "Decks start shuffled" on, cards of about the same risk (learned together, say) change places from one build to the next, so a list is not answered by its order; a card with a 3-day memory still comes before one with a 30-day memory */
  const sorted=rows.sort((a,b)=>a.g-b.g||b.r-a.r||a.i-b.i), warm=sorted.splice(Math.max(0,sorted.length-2),2).reverse(); warm.forEach(y=>{ y.g=-1; }); const list=warm.concat(sorted);
  for(let i=1;i<list.length;i++){ if(list[i].x.d===list[i-1].x.d){ const j=list.findIndex((y,k)=>k>i&&y.g===list[i].g&&y.x.d!==list[i-1].x.d); if(j>i){ const [m]=list.splice(j,1); list.splice(i,0,m); } } }
  return list.map(y=>y.x); }
''', must=("overdue days", "s.box||1"))

rep("queue=rvBatchQueue(cardsMode==='due'?q.sort((a,b)=>(isDue(a.d,a.c)?0:1)-(isDue(b.d,b.c)?0:1)):q); qi=0;",
    "queue=rvBatchQueue(cardsMode==='due'?orderReviews(q.filter(x=>isDue(x.d,x.c))).concat(q.filter(x=>!isDue(x.d,x.c))):q); /* MEM-2: the due cards of a tag in the judge's order, then its new cards */ qi=0;")
rep("queue = d===ALLDUE ? dueQueue() : (cardsMode==='due' ? DECKS[d].filter(c=>isDue(d,c)) : DECKS[d].slice()).map(c=>({d,c})); if(S.shuffle!==false) queue=shuffle(queue); queue=rvBatchQueue(",
    "queue = d===ALLDUE ? dueQueue() : cardsMode==='due' ? orderReviews(DECKS[d].filter(c=>isDue(d,c)).map(c=>({d,c}))) : DECKS[d].map(c=>({d,c})); if(d!==ALLDUE&&cardsMode!=='due'&&S.shuffle!==false) queue=shuffle(queue); /* MEM-2: due cards come in the judge's order (orderReviews); only a whole deck (\"All\") is shuffled */ queue=rvBatchQueue(")

# ---------------------------------------------------------------- 4. Review: pace of new cards and extra practice
rep("function rvLoad(){ let n=0; Object.values(S.cards).forEach(c=>{ if(c&&!c.susp&&(c.box||0)<=1) n++; }); return n; }",
    "function rvLoad(){ let n=0; names.forEach(d=>DECKS[d].forEach(c=>{ const s=cardState(d,c); if(!s||s.susp) return; const m=mjRead(s); if(m&&m.lw) n++; })); return n; } /* MEM-2: the cards whose last answer was wrong, the fresh misses of this sitting, read from the judge */")
rep("if(rvLoad()>Math.max(1,rvLoadCap()-RV_BATCH)) return false; /* a new batch only once the last one is mostly learned */ return rvCount-rvLastNew>=(a>=0.9?3:5); }",
    "if(rvLoad()>Math.max(1,rvLoadCap()-RV_BATCH)) return false; /* a new batch only once the last one is mostly learned */ if(memWaiting(names).length>=MEM_HOLD) return false; /* MEM-2: and not while 10 cards wait for practice: those come first, as extra practice when they are not due */ return rvCount-rvLastNew>=(a>=0.9?3:5); }")
between("function rvExtras(n){", "function rvRefill(force){", r'''function rvExtras(n){ /* MEM-2: weakest first by the judge: the cards that wait for practice, then the ones most likely to be forgotten by tomorrow; every right answer in the sitting halves that risk, so today's cards come round about three times before a memorized card is brought up */ const ah=rvAhead(), rec=new Set(rvRecent.slice(-4)), pool=[]; names.forEach(d=>DECKS[d].forEach(c=>{ const st=cardState(d,c); if(!st||st.susp||st.bury===dayNum()) return; /* cards missed often (leeches) stay in this flow: they are the ones that need showing more */ const k=ck(d,c); if(ah.has(k)||rec.has(k)) return; const p=memPick(st)||{st:'new',risk:0.5,done:false}; pool.push({d,c,x:1,w:(p.st==='practice'&&!p.done?-1:0)-p.risk*Math.pow(0.5,rvSeen[k]||0)+Math.random()*0.004}); })); pool.sort((a,b)=>a.w-b.w); return pool.slice(0,n).map(x=>({d:x.d,c:x.c,x:1})); }
''', must=("(st.box||1)+1.5*(rvSeen[k]||0)",))
rep("pacing rule allows it; (3) extra practice on cards that are not due yet, weakest first.",
    "pacing rule allows it; (3) extra practice on cards that are not due yet, weakest first by the judge (MEM-2).")

# ---------------------------------------------------------------- 5. Weak spots = the needs-practice list
between("function weakPool(){", "$('weakStart').onclick=", r'''function weakAll(){ /* MEM-2: Weak spots is the needs-practice list (not suspended, not buried for today). The cards not yet answered right today come first, the most at risk first; overconfident ones go before the rest */
  const t=dayNum(), wk='weak|'+t; if(memo[wk]) return memo[wk]; const l=[]; names.forEach(d=>DECKS[d].forEach(c=>{ const s=cardState(d,c); if(s&&s.bury!==t) l.push({d,c}); })); const r=memRank(l,['practice']), ov=x=>(cardState(x.d,x.c)||{}).over?1:0; return memo[wk]=r.filter(ov).concat(r.filter(x=>!ov(x))); }
function weakPool(){ return weakAll().slice(0,20); } /* one run takes the 20 most at risk */
''', must=("s.box<=2",))
rep("function refreshWeak(){ const n=weakPool().length;", "function refreshWeak(){ const n=weakAll().length;")
rep("${Object.values(S.cards).filter(s=>s.over).length} overconfident cards go first in Weak spots",
    "${weakAll().filter(x=>(cardState(x.d,x.c)||{}).over).length} overconfident cards go first in Weak spots")

# ---------------------------------------------------------------- 6. Practice: the quiz after each new five, and "Practice these first"
rep("// Learn-5 loop: teach 5 -> quiz (new x3 + everything learned so far x1) -> next 5 ...",
    "// Learn-5 loop: teach 5 -> quiz (new x3 + at most 15 earlier cards x1, chosen by the judge: loopEarlier, loopQuiz) -> next 5 ...")
between("  const roundQuiz=(fresh, learned)=>{", "  const teach=()=>{ if(cleanup){cleanup();cleanup=null;}", "", must=("fresh x3 (mixed), learned x1", "for(let tries=0;tries<20;tries++)"))
rep("const base=pos, fresh=pool.slice(base,base+5), learned=pool.slice(0,base); let i=0, show=fresh, only=null;",
    "const base=pos, fresh=pool.slice(base,base+5), learned=loopEarlier(pool,base); /* MEM-2: the earlier cards this round's quiz brings back */ let i=0, show=fresh, only=null;")
rep("const mine=only, qs=mine?roundQuiz(mine,[]):roundQuiz(fresh,learned); let qi=0, score=0;", "const mine=only, qs=mine?loopQuiz(mine,[]):loopQuiz(fresh,learned); let qi=0, score=0;")
rep("            mk(pos>=pool.length?'Finish':'Next 5 cards','primary',teach,true);\n",
    "            const wait=pos<pool.length?memWaiting([...qSel]):[]; /* MEM-2: new cards are never blocked, but once 10 cards of the picked decks wait for practice the main button offers those first */\n"
    "            if(wait.length>=MEM_HOLD){ mk('Practice these first','primary',()=>practiceFirst(wait),true); mk('Next 5 cards','hit',teach,true); } else mk(pos>=pool.length?'Finish':'Next 5 cards','primary',teach,true);\n")
rep("$('learnStart').onclick=learnLoop;",
    "$('learnStart').onclick=learnLoop;\n"
    "$('firstStart').onclick=()=>{ const wait=memWaiting([...qSel]); if(wait.length<2){ quizChips(); return; } practiceFirst(wait); }; /* MEM-2 */")
rep('<button class="big primary" id="learnStart" style="grid-column:1/3">Learn 5 at a time</button>',
    '<button class="big primary" id="firstStart" style="grid-column:1/3" hidden>Practice these first</button><button class="big primary" id="learnStart" style="grid-column:1/3">Learn 5 at a time</button>')
rep("$('learnHint').textContent=pos>0&&pos<n?Math.ceil((n-pos)/5)+' rounds left':''; }",
    "$('learnHint').textContent=pos>0&&pos<n?Math.ceil((n-pos)/5)+' rounds left':''; const fs=$('firstStart'); fs.hidden=memWaiting([...qSel]).length<MEM_HOLD; $('learnStart').className='big '+(fs.hidden?'primary':'hit'); /* MEM-2: once 10 cards of the picked decks wait for practice, \"Practice these first\" is the main button; \"Learn 5 at a time\" stays next to it */ }")
# the help text under "More options" described the old rule ("mixed with everything so far"); the new sentence is a new interface key (tools/patches/mem_judge_b_i18n.json)
rep(": 5 new cards, quiz them, 5 more, quiz those mixed with everything so far, until the deck is done. <b>Test everything</b>",
    ": 5 new cards, quiz them, 5 more, quiz those mixed with up to 15 earlier cards you most need to practice, until the deck is done. <b>Test everything</b>")

open(p, 'w', encoding='utf8').write(s)
print('mem_judge_b applied:', p)
