#!/usr/bin/env python3
# PM-4 (owner, 2026-11-25: with Hangul vowels picked, "when i clicked exam here it started testing me on things that were not hangul"):
# every way to practice uses the picked decks. The exam drew 25 cards from every open deck and Weak spots listed every deck; now
#  - the exam asks 25 questions from the picked decks only (a small deck is gone through more than once, reshuffled each time),
#  - Weak spots on the Practice screen takes the needs-practice cards of the picked decks (weakPicked); its count on the button follows.
#    A shortcut that presses the button for the learner (quick actions, the "Weakest today" tip) still falls back to every deck when the picked ones have fewer than 2,
#  - so both have Change deck while they run, like Learn and the blitz.
# usage: python3 tools/patches/practice_scope.py [src/app.html]   (each replacement must match exactly once)
import sys
p = sys.argv[1] if len(sys.argv) > 1 else 'src/app.html'
s = open(p, encoding='utf8').read()
def rep(old, new):
    global s
    assert s.count(old) == 1, (s.count(old), old[:100]); s = s.replace(old, new)
rep("$('examStart').onclick=()=>{ const pool=[]; names.filter(d=>deckUnlocked(d)&&DECKS[d].length>=4).forEach(d=>DECKS[d].forEach(c=>pool.push({d,c}))); if(pool.length<25){ toast('Unlock a few more decks first.'); return; } userTouched=true; runHalt(); runSet(null);\n  const qs=shuffle(pool).slice(0,25).map(",
    "$('examStart').onclick=()=>{ const pool=[]; [...qSel].forEach(d=>DECKS[d].forEach(c=>pool.push({d,c}))); if(pool.length<4){ toast('Pick a deck with at least 4 cards.'); return; } userTouched=true; runHalt(); runSet('exam'); /* PM-4: the exam asks the picked decks only */\n  const order=[]; while(order.length<25){ const lap=shuffle(pool.slice()); if(order.length&&lap.length>1&&lap[0].c===order[order.length-1].c) lap.push(lap.shift()); order.push(...lap); } /* 25 questions; a deck of fewer cards is gone through again in a new order, never the same card twice in a row */\n  const qs=order.slice(0,25).map(")
rep("function weakPool(){ return weakAll().slice(0,20); } /* one run takes the 20 most at risk */\n$('weakStart').onclick=()=>{ const pool=weakPool(); if(pool.length<2){",
    "function weakPool(){ return weakAll().slice(0,20); } /* one run takes the 20 most at risk */\nfunction weakPicked(){ return weakAll().filter(x=>qSel.has(x.d)); } /* PM-4: the needs-practice cards of the picked decks */\n$('weakStart').onclick=e=>{ let pool=weakPicked().slice(0,20), mine=true; if(pool.length<2&&!(e&&e.isTrusted)){ pool=weakPool(); mine=false; } /* a shortcut pressed the button: every deck */ if(pool.length<2){")
rep("fn:()=>$('weakStart').click()},{label:'Back',cls:'ghost',fn:backToSetup}])); };\nfunction refreshWeak(){ const n=weakAll().length;",
    "fn:()=>$('weakStart').click()},{label:'Back',cls:'ghost',fn:backToSetup}])); if(mine) runSet('weak'); };\nfunction refreshWeak(){ const n=weakPicked().length;")
rep("if(m==='blitz') $('blitzStart').click(); else learnLoop(); };",
    "if(m==='blitz') $('blitzStart').click(); else if(m==='exam') $('examStart').click(); else if(m==='weak'){ if(weakPicked().length<2){ toast('Not enough weak cards yet. Do a session first.'); backToSetup(); } else $('weakStart').click(); } else learnLoop(); };")
rep("Weak spots and the exam are not tied to the picked decks, so they have no bar. */", "Since PM-4 Weak spots and the exam use the picked decks too. */")
open(p, 'w', encoding='utf8').write(s)
print('practice_scope: ok')
