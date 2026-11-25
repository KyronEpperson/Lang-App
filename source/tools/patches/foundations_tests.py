#!/usr/bin/env python3
# Character foundations (FND-1): fits tools/tests/lesson_sections.js to lessons that name their sections, and adds tools/tests/foundations.js to ship.sh. Run once.
import io, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'tools', 'tests', 'lesson_sections.js'); s = io.open(p, encoding='utf8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:70]); s = s.replace(a, b)
assert 'FND-1' not in s
rep("if(!AL&&!hang){ const seen=new Map(); pl.all.forEach(x=>seen.set(x.c,(seen.get(x.c)||0)+1)); if(pl.all.length!==D.length||D.some(c=>seen.get(c)!==1)||pl.all.some(x=>x.d!==l.deck)) o.bad.push(l.id+': cards of the deck are not each in one section'); }",
    "if(!AL&&!hang){ const seen=new Map(), named=Array.isArray(l.sections); pl.all.forEach(x=>seen.set(x.c,(seen.get(x.c)||0)+1)); /* FND-1: a lesson that names its sections may add other decks and decks of its own; its own deck must still be there whole, and no card twice */ if(D.some(c=>seen.get(c)!==1)||[...seen.values()].some(v=>v!==1)||(!named&&(pl.all.length!==D.length||pl.all.some(x=>x.d!==l.deck)))) o.bad.push(l.id+': cards of the deck are not each in one section'); }")
rep("withC.forEach(x=>{ const ix=x.cards.map(y=>(DECKS[y.d]||[]).indexOf(y.c)); if(ix.some((v,i)=>v<0||(i&&v<ix[i-1]))) o.bad.push(l.id+': deck order'); });",
    "withC.forEach(x=>{ const ix=x.cards.map(y=>(DECKS[y.d]||[]).indexOf(y.c)); /* in deck order within each deck (a section may hold more than one) */ if(ix.some((v,i)=>v<0||(i&&x.cards[i].d===x.cards[i-1].d&&v<ix[i-1]))) o.bad.push(l.id+': deck order'); });")
rep("if(/\\{\\{(ex|strokes):/.test(root.innerHTML))", "if(/\\{\\{(ex|strokes|tiles):/.test(root.innerHTML))")
io.open(p, 'w', encoding='utf8').write(s)
p = os.path.join(ROOT, 'tools', 'curriculum', 'ship.sh'); s = io.open(p, encoding='utf8').read()
assert 'foundations.js' not in s
rep("node tools/tests/kograde.js > /tmp/claude-0/kograde.out", "node tools/tests/foundations.js > /tmp/claude-0/found.out 2>&1 || { echo 'FOUNDATIONS TEST FAIL'; grep '^FAIL' /tmp/claude-0/found.out | head -20; exit 1; }; echo \"foundations: $(tail -2 /tmp/claude-0/found.out | head -1)\"\nnode tools/tests/kograde.js > /tmp/claude-0/kograde.out")
io.open(p, 'w', encoding='utf8').write(s)
print('tests fitted')
