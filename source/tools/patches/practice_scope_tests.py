#!/usr/bin/env python3
# PM-4: harness guard memWeakSpots now picks the decks it counts (the Weak spots button follows the picked decks). Run from the build home.
h = open('harness.js', encoding='utf8').read()
for old, new in [
 ("memTotals().practice===5; refreshWeak(); const b=document.getElementById('weakStart'),", "memTotals().practice===5; const qKeep=qSel; qSel=new Set([A]); refreshWeak(); const b=document.getElementById('weakStart'),"),
 ("nm(weakPool().slice(0,1))==='A1'; refreshWeak(); const r5=b.textContent==='Weak spots · 28';", "nm(weakPool().slice(0,1))==='A1'; refreshWeak(); const r5a=b.textContent==='Weak spots · 3'; /* PM-4: only the picked deck counts */ qSel=new Set([A,B]); refreshWeak(); const r5=r5a&&b.textContent==='Weak spots · 28'&&weakPicked().length===28; qSel=qKeep;"),
]:
    assert h.count(old) == 1, (h.count(old), old[:80]); h = h.replace(old, new)
open('harness.js', 'w', encoding='utf8').write(h)
print('practice_scope_tests: ok')
