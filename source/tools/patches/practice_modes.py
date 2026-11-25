#!/usr/bin/env python3
# PM-1 (owner, 2026-11-25): Practice shows four ways to practice (Learn, Weak spots, 2-minute blitz, Exam) and nothing else.
#  - "Test everything" is gone; the labels no longer carry card counts ("Learn 5 at a time · 12 cards", "Exam · 25").
#  - What sat behind "More options" on Practice (question type, romanization switch, Polite <-> casual drill) is in the Settings sheet
#    behind the header gear, shown when Practice is the open page. The hashtag chips are always on the page.
#  - The deck picker (Practice and Review) is two dropdowns: Category, then Deck filtered by the category (deckSelects replaces deckChips).
#  - A "Change deck" bar sits above a running Learn or blitz round (#runBar / runDeckSheet); picking restarts that mode on the new decks.
#  - "Just learn (no quizzes)" (#justLearn, S.justLearn): Learn shows the cards five at a time and skips the quiz.
#  - The en-ko deck "Dating deeper" is "Intimate"; saved progress moves over in sanitizeState.
# usage: python3 tools/patches/practice_modes.py [src/app.html]   (each replacement must match exactly once)
import sys, re
p = sys.argv[1] if len(sys.argv) > 1 else 'src/app.html'
s = open(p, encoding='utf8').read()

def rep(old, new, n=1):
    global s
    assert s.count(old) == n, (s.count(old), old[:100])
    s = s.replace(old, new)

def span(a, b, new):
    """replace from the start of marker a through the end of the first marker b after it (a must be unique)"""
    global s
    assert s.count(a) == 1, (s.count(a), a[:100])
    i = s.index(a); j = s.find(b, i)
    assert j > i, b[:100]
    s = s[:i] + new + s[j + len(b):]

# ---- 1. deck rename (built-in en-ko tables) and the move of saved progress ----
rep('"Dating deeper"', '"Intimate"', 4)
rep("delete s.mem; } /* MEM-1 personal numbers */\n  return s; }",
    "delete s.mem; } /* MEM-1 personal numbers */\n"
    "  { const R={'Dating deeper':'Intimate'}, ren=k=>k.split('+').map(x=>R[x]||x).sort().join('+'), obj=o=>o&&typeof o==='object'&&!Array.isArray(o); /* PM-1: renamed decks keep their progress (cards, scores, Learn position, blitz best) */\n"
    "    if(obj(s.cards)) Object.keys(s.cards).forEach(k=>{ const i=k.indexOf('|'), d=k.slice(0,i); if(i>0&&Object.prototype.hasOwnProperty.call(R,d)){ const nk=R[d]+k.slice(i); if(s.cards[nk]===undefined) s.cards[nk]=s.cards[k]; delete s.cards[k]; } });\n"
    "    ['hist','quiz','mastered'].forEach(f=>{ const o=s[f]; if(obj(o)) Object.keys(R).forEach(d=>{ if(Object.prototype.hasOwnProperty.call(o,d)){ if(o[R[d]]===undefined) o[R[d]]=o[d]; delete o[d]; } }); });\n"
    "    ['learnPos','blitz'].forEach(f=>{ const o=s[f]; if(obj(o)) Object.keys(o).forEach(k=>{ const nk=ren(k); if(nk!==k){ if(o[nk]===undefined) o[nk]=o[k]; delete o[k]; } }); }); }\n"
    "  return s; }")
rep("'quizRom','fbMine'", "'quizRom','justLearn','fbMine'")

# ---- 2. Practice start screen: four buttons, hashtags always shown, no More options ----
m = re.search(r'<div class="modes" id="quizModes" data-adv="practice">(.*?)</div>\n', s); assert m
MODES = m.group(1)
m = re.search(r'<button class="ghost" id="regStart" data-adv="practice" style="margin-top:10px">(.*?)</button>', s); assert m
REG = m.group(1)
span('      <p data-adv="practice" style="color:var(--muted);font-size:.9rem"><b>Learn 5 at a time</b>',
     '<div class="advrow"><button type="button" class="chip advbtn" data-advbtn="practice" aria-expanded="false">⚙ More options</button></div>',
     '      <h3>Deck</h3><div class="modes" id="tagPick" style="margin-bottom:8px"></div><div class="pickhead" id="pickHeadP"></div><div class="decks" id="quizDecks"></div>\n'
     '      <div class="controls" style="margin-top:18px"><button class="big primary" id="firstStart" style="grid-column:1/3" hidden>Practice these first</button><button class="big primary" id="learnStart" style="grid-column:1/3">Learn</button><button class="big miss" id="weakStart">Weak spots</button><button class="big" id="blitzStart" style="background:var(--warn-soft);color:var(--warn)">⚡ 2-minute blitz</button><button class="big" id="examStart" style="grid-column:1/3;background:var(--ink);color:var(--bg)">📝 Exam</button></div><p class="stat" id="learnHint" style="margin-top:8px;text-align:center"></p><label class="auto" style="justify-content:center;margin-top:6px"><input type="checkbox" id="justLearn"> Just learn (no quizzes)</label>')
rep('    <div id="quizRun" class="panel" hidden></div>',
    '    <div id="runBar" hidden><button class="ghost" type="button" id="runBack">← Back</button><span class="stat" id="runDeckN"></span><button class="ghost" type="button" id="runDeck">Change deck ▾</button></div>\n'
    '    <div id="quizRun" class="panel" hidden></div>')

# ---- 3. Settings sheet: the Practice options ----
rep('quiz answer · </span><kbd>Enter</kbd> next</div>\n    </div>\n',
    'quiz answer · </span><kbd>Enter</kbd> next</div>\n    </div>\n'
    '    <div id="setPractice" style="display:grid;gap:12px">\n'
    '      <h3 style="margin:0">Mode</h3>\n'
    '      <div class="modes" id="quizModes" style="width:auto">' + MODES + '</div>\n'
    '      <label class="auto"><input type="checkbox" id="quizRom"> Show romanization in practice</label>\n'
    '      <button class="ghost" id="regStart">' + REG + '</button>\n'
    '    </div>\n')
rep("$('setDeck').style.display=$('v-cards').hidden?'none':'grid';",
    "$('setDeck').style.display=$('v-cards').hidden?'none':'grid'; $('setPractice').style.display=$('v-quiz').hidden?'none':'grid';")
rep("e.target.closest('#cmDue,#cmAll,#cmBrowse,#shuffle,#reset')", "e.target.closest('#cmDue,#cmAll,#cmBrowse,#shuffle,#reset,#regStart')")
rep('select.ghost{color:var(--ink);background:var(--paper)}',
    'select.ghost{color:var(--ink);background:var(--paper)}\n'
    'select.dsel{flex:1 1 150px;min-width:0;max-width:100%;padding:10px 12px;border-radius:10px;font-size:.92rem;min-height:44px}\n'
    '#runBar{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px}#runBar[hidden]{display:none!important}#runDeckN{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}#runDeckN{flex:1 1 auto;text-align:center}#runDeck,#runBack{white-space:nowrap;flex:none}#runDeck[hidden]{display:none!important}')
rep('body.simple:not(.adv-practice) #quizStart{grid-column:1/3}', '')

# ---- 4. the picker: two dropdowns ----
span('function deckChips(container, isOn, onPick, opts={}){', "container.appendChild(unlockBtn(opts.refresh)); } }",
     "/* PM-1: the deck picker is two dropdowns. Category filters the Deck list; a locked deck is listed but cannot be picked. cur: the decks picked now. opts.first: [value,label,selected] rows on top of the Deck list; opts.all: offer \"All decks in this category\" (onPick then gets the list of its open decks). The category shown is kept per picker in pickCat until a deck is picked. */\n"
     "const pickCat={};\n"
     "function deckSelects(container, key, cur, onPick, opts={}){ container.innerHTML='';\n"
     "  const groups=GROUPS.map(g=>[g[0],g[1].filter(n=>DECKS[n])]).filter(g=>g[1].length);\n"
     "  let cat=pickCat[key]; if(cat===undefined||(cat&&!groups.some(g=>g[0]===cat))){ const own=cur.length?groups.find(g=>cur.every(d=>g[1].includes(d))):null; cat=own?own[0]:''; }\n"
     "  const mk=label=>{ const el=document.createElement('select'); el.className='ghost dsel'; el.setAttribute('aria-label',label); return el; };\n"
     "  const opt=(el,v,t,o)=>{ const e=document.createElement('option'); e.value=v; e.textContent=t; if(o.raw) e.setAttribute('data-noi18n',''); if(o.off) e.disabled=true; if(o.on) e.selected=true; el.appendChild(e); return e; };\n"
     "  const cs=mk('Category'); cs.dataset.pick='cat'; opt(cs,'','All categories',{on:cat===''}); groups.forEach(g=>opt(cs,g[0],g[0],{raw:true,on:g[0]===cat}));\n"
     "  cs.onchange=()=>{ pickCat[key]=cs.value; deckSelects(container,key,cur,onPick,opts); const d=container.querySelector('select[data-pick=\"deck\"]'); if(d){ try{ d.focus({preventScroll:true}); }catch(e){} } };\n"
     "  const ds=mk('Deck'); ds.dataset.pick='deck'; const list=groups.filter(g=>!cat||g[0]===cat).flatMap(g=>g[1]), open=list.filter(deckUnlocked); let picked=false;\n"
     "  (opts.first||[]).forEach(f=>{ opt(ds,f[0],f[1],{on:!!f[2]}); if(f[2]) picked=true; });\n"
     "  if(opts.all&&cat){ const on=!picked&&cur.length>1&&cur.length===open.length&&open.every(d=>cur.includes(d)); opt(ds,'*all*','All decks in this category',{off:!open.length,on}); if(on) picked=true; }\n"
     "  list.forEach(n=>{ const un=deckUnlocked(n), on=!picked&&cur.length===1&&cur[0]===n; opt(ds,n,(un?'':'🔒 ')+n,{raw:true,off:!un,on}); if(on) picked=true; });\n"
     "  if(!picked){ const ph=opt(ds,'','Deck',{off:true}); ph.hidden=true; ds.prepend(ph); ph.selected=true; }\n"
     "  ds.onchange=()=>{ const v=ds.value; if(!v) return; delete pickCat[key]; onPick(v==='*all*'?open.slice():v); };\n"
     "  container.appendChild(cs); container.appendChild(ds);\n"
     "  if(names.some(n=>DECKS[n]&&!deckUnlocked(n))) container.appendChild(unlockBtn(opts.refresh)); }\n"
     "function tagChips(tp,onTag){ Object.keys(TAGS).forEach(t=>{ const b=document.createElement('button'); b.className='chip'; b.type='button'; b.style.fontSize='.72rem'; b.textContent=tagL(t); b.onclick=()=>onTag(t); tp.appendChild(b); }); }\n"
     "function tagSet(t){ let l=tagDecks(t).filter(deckUnlocked); if(!l.length){ S.free=true; l=tagDecks(t); } return l; }")
span("function chips(){ if(deck!==ALLDUE", "$('decks').prepend(tagRow); $('decks').prepend(b); $('decks').prepend(hd);",
     "function chips(){ if(deck!==ALLDUE&&!/^\\*tag\\*:/.test(deck)&&!DECKS[deck]) deck=names[0]; const n=dueCount();\n"
     "  deckSelects($('decks'),'review',DECKS[deck]?[deck]:[],v=>{ deck=v; S.pickOpen.review=false; save(); chips(); buildCards(); },{first:[[ALLDUE,'⏰ All due',deck===ALLDUE]], refresh:()=>{ chips(); buildCards(); }});\n"
     "  const tagRow=document.createElement('div'); tagRow.style.cssText='display:flex;flex-wrap:wrap;gap:6px;flex:0 0 100%'; Object.keys(TAGS).forEach(t=>{ const tb=document.createElement('button'); tb.className='chip'; tb.type='button'; tb.style.fontSize='.72rem'; const n=tagDecks(t).reduce((s,d)=>s+DECKS[d].filter(c=>isDue(d,c)).length,0); tb.innerHTML=escT(tagL(t))+(n?'<span class=\"n\">'+n+' due</span>':''); tb.setAttribute('aria-pressed',deck==='*tag*:'+t); tb.onclick=()=>{ deck='*tag*:'+t; delete pickCat.review; S.pickOpen.review=false; save(); chips(); buildCards(); }; tagRow.appendChild(tb); });\n"
     "  $('decks').prepend(tagRow);")
span("function quizChips(){", '"Learn 5 at a time" stays next to it */ }',
     "function quizChips(){ const tp=$('tagPick'); if(tp&&!tp.children.length) tagChips(tp,t=>{ qSel=new Set(tagSet(t)); quizTouched=true; delete pickCat.practice; S.pickOpen.practice=false; save(); quizChips(); toast(tagL(t)+' · '+qSel.size+' decks selected.'); });\n"
     "  qSel=new Set([...qSel].filter(d=>DECKS[d])); if(!qSel.size) qSel=new Set([ROLE('survival')||(names.find(d=>d!==MYDECK&&DECKS[d].length)||names[0])]); /* pack courses booted directly have no Survival phrases deck */ refreshWeak(); deckSelects($('quizDecks'),'practice',[...qSel],v=>{ quizTouched=true; qSel=new Set(Array.isArray(v)?v:[v]); S.pickOpen.practice=false; save(); quizChips(); },{all:true, refresh:quizChips});\n"
     "  const sel=[...qSel], n=sel.reduce((s,x)=>s+DECKS[x].length,0); pickHead('pickHeadP', sel.length>2?sel.length+' decks selected':sel.join(' + '), sel.length>1?sel.length+' decks · '+n+' cards':n+' cards', 'quizDecks','practice',quizChips); if(sel.length===1){ const hd=$('pickHeadP'); const intro=document.createElement('div'); intro.innerHTML=deckIntro(sel[0]); intro.style.cssText='flex:0 0 100%'; hd.style.flexWrap='wrap'; hd.appendChild(intro.firstChild); }\n"
     "  const pos=(S.learnPos||{})[learnKey()]||0; $('learnStart').textContent='Learn'; $('learnHint').textContent=pos>0&&pos<n?Math.ceil((n-pos)/5)+' rounds left':''; const fs=$('firstStart'); fs.hidden=memWaiting([...qSel]).length<MEM_HOLD; $('learnStart').className='big '+(fs.hidden?'primary':'hit'); /* MEM-2: once 10 cards of the picked decks wait for practice, \"Practice these first\" is the main button; Learn stays next to it */ const jl=$('justLearn'); if(jl) jl.checked=!!S.justLearn; runBarSync(); }")

# ---- 5. Learn: no "Test everything", the just-learn switch, Change deck while it runs ----
rep("<div class=\"controls\"><button class=\"big primary\" id=\"lFull\">Test everything × 3</button><button class=\"big hit\" id=\"lNext\">Pick next deck</button></div>`; $('lFull').onclick=()=>$('quizStart').click(); ",
    "<div class=\"controls\"><button class=\"big primary\" id=\"lNext\" style=\"grid-column:1/3\">Pick next deck</button></div>`; ")
rep("  const run=$('quizRun'); $('quizSetup').hidden=true; run.hidden=false; userTouched=true;\n  const teach=",
    "  const run=$('quizRun'); $('quizSetup').hidden=true; run.hidden=false; userTouched=true; runHalt(); runSet('learn');\n  const teach=")
rep("      if(i>=show.length){ const mine=only, qs=",
    "      if(i>=show.length&&S.justLearn&&!only){ /* PM-1: \"Just learn\" is on: no quiz. The five count as soon as they have been shown */ if(pos===base){ pos=base+fresh.length; S.learnPos[key]=pos; save(); }\n"
    "        run.innerHTML=`<div class=\"done\" style=\"border:0;padding:20px\"><div class=\"ko\" data-noi18n>${PRAISE(1,'좋아요')}</div><div class=\"note\" style=\"margin:8px auto 0\">Round ${Math.floor(base/5)+1} of ${Math.ceil(pool.length/5)} · saved</div></div><div class=\"controls\" id=\"qBtns\"></div>`;\n"
    "        const bx=$('qBtns'), mk=(l,cls,fn)=>{ const b=document.createElement('button'); b.className='big '+cls; b.textContent=l; b.onclick=fn; b.style.gridColumn='1/3'; bx.appendChild(b); }; mk(pos>=pool.length?'Finish':'Next 5 cards','primary',teach); mk('Review these 5 again','ghost',()=>{ show=fresh; i=0; card(); }); return; }\n"
    "      if(i>=show.length){ const mine=only, qs=")
rep("let cleanup=null;", "let cleanup=null;\nlet runMode=null, runStop=null; /* PM-1: the Practice mode that is running and can change deck ('learn' or 'blitz'), and how to stop its timer */")
rep("function runQuiz(pool, label, onDone){\n  userTouched=true;", "function runQuiz(pool, label, onDone){\n  userTouched=true; runHalt(); runSet(null);")
rep("toast('Unlock a few more decks first.'); return; } userTouched=true;", "toast('Unlock a few more decks first.'); return; } userTouched=true; runHalt(); runSet(null);")
rep("$('regStart').onclick=()=>{ userTouched=true;", "$('regStart').onclick=()=>{ userTouched=true; runHalt(); runSet(null);")
rep("  const run=$('quizRun'); $('quizSetup').hidden=true; run.hidden=false; const key=learnKey(); let left=120,",
    "  runHalt(); runSet('blitz'); const run=$('quizRun'); $('quizSetup').hidden=true; run.hidden=false; const key=learnKey(); let left=120,")
rep("document.addEventListener('visibilitychange',vis);\n  const finish=()=>{ clearInterval(timer); document.removeEventListener('visibilitychange',vis);",
    "document.addEventListener('visibilitychange',vis); runStop=()=>{ clearInterval(timer); document.removeEventListener('visibilitychange',vis); };\n  const finish=()=>{ runStop=null; clearInterval(timer); document.removeEventListener('visibilitychange',vis);")
rep("function backToSetup(){ $('quizRun').hidden=true;", "function backToSetup(){ runHalt(); runMode=null; $('quizRun').hidden=true;")
rep("  if(cleanup){ cleanup(); cleanup=null; }\n  if('speechSynthesis' in window) speechSynthesis.cancel();\n  if(h==='today') renderToday();",
    "  runHalt(); if(cleanup){ cleanup(); cleanup=null; }\n  if('speechSynthesis' in window) speechSynthesis.cancel();\n  if(h==='today') renderToday();")
span("$('quizStart').onclick = () => {", "runQuiz(qPool,label,(s,t)=>quizResult(s,t,label+' · '+qMode,mixButtons())); };", "")
rep("$('learnStart').onclick=learnLoop;",
    "$('learnStart').onclick=learnLoop;\n"
    "/* PM-1: Change deck while Learn or the blitz runs. The bar above the round shows the decks in play; the sheet holds the hashtags and the two dropdowns; a pick restarts the same mode on the new decks (Learn positions are saved per deck, so nothing is lost). Weak spots and the exam are not tied to the picked decks, so they have no bar. */\n"
    "function runHalt(){ if(runStop){ const f=runStop; runStop=null; f(); } }\n"
    "function runSet(m){ runMode=m; runBarSync(); }\n"
    "function runBarSync(){ const b=$('runBar'); if(!b) return; b.hidden=$('quizRun').hidden; $('runDeck').hidden=!runMode; const l=[...qSel]; $('runDeckN').textContent=!runMode?'':l.length>2?l.length+' decks selected':l.join(' + '); } /* the bar is on every round and result screen: Back always (owner: where there is no Change deck there should be a back button), the decks and Change deck only in Learn and blitz */\n"
    "function runDeckSheet(){ closeSheet(); const sh=document.createElement('div'); sh.className='sheet'; sh.id='runSheet'; sh.setAttribute('role','dialog'); sh.setAttribute('aria-modal','true'); sh.setAttribute('aria-label','Deck');\n"
    "  sh.innerHTML=`<div class=\"sheet-in\" style=\"gap:10px\"><div class=\"row\" style=\"flex-wrap:nowrap\"><h3 style=\"margin:0\">Deck</h3><button class=\"ghost\" type=\"button\" data-x aria-label=\"Close\" style=\"padding:4px 10px\">✕</button></div><div class=\"modes\" data-tags style=\"width:auto\"></div><div class=\"decks\" data-sel></div></div>`;\n"
    "  const go=l=>{ if(l.reduce((a,d)=>a+DECKS[d].length,0)<4){ toast('Pick a deck with at least 4 cards.'); return; } const m=runMode; qSel=new Set(l); quizTouched=true; delete pickCat.practice; closeSheet(); runHalt(); if(cleanup){ cleanup(); cleanup=null; } if(m==='blitz') $('blitzStart').click(); else learnLoop(); };\n"
    "  tagChips(sh.querySelector('[data-tags]'),t=>go(tagSet(t))); const draw=()=>deckSelects(sh.querySelector('[data-sel]'),'run',[...qSel],v=>go(Array.isArray(v)?v:[v]),{all:true, refresh:draw}); delete pickCat.run; draw();\n"
    "  document.body.appendChild(sh); sh.addEventListener('click',e=>{ if(e.target===sh||e.target.closest('[data-x]')) closeSheet(); }); setTimeout(()=>{ const d=sh.querySelector('select'); if(d){ try{ d.focus({preventScroll:true}); }catch(e){} } },30); }\n"
    "$('runDeck').onclick=runDeckSheet; $('runBack').onclick=()=>{ closeSheet(); if(cleanup){ cleanup(); cleanup=null; } if('speechSynthesis' in window) speechSynthesis.cancel(); backToSetup(); };\n"
    "document.addEventListener('keydown',e=>{ const sh=$('runSheet'); if(!sh) return; if(e.key==='Escape'){ e.preventDefault(); e.stopPropagation(); closeSheet(); return; } if(e.key!=='Tab'&&!e.ctrlKey&&!e.metaKey&&!e.altKey) e.stopPropagation(); },true); /* keys do not reach the round while the sheet is open */\n"
    "new MutationObserver(runBarSync).observe($('quizRun'),{attributes:true,attributeFilter:['hidden']});\n"
    "$('justLearn').addEventListener('change',e=>{ S.justLearn=!!e.target.checked; save(); });")

open(p, 'w', encoding='utf8').write(s)
print('practice_modes: ok')
