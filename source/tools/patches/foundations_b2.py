#!/usr/bin/env python3
# FND-1 batch 2: a flip tile also finds its reading on a card of a deck that lives inside a lesson (sections: {name, cards}); those cards come first, so a letter card wins over a word card with the same front in a later deck.
import io
P='/home/claude/src/app.html'
s=io.open(P,encoding='utf-8').read()
a="""const R={}; Object.keys(DECKS).forEach(d=>{ (DECKS[d]||[]).forEach(c=>{ if(Array.isArray(c)&&typeof c[0]==='string'&&typeof c[1]==='string'&&c[1]&&R[c[0]]===undefined) R[c[0]]=c[1]; }); }); TILE_RD_ID=COURSE.id; return TILE_RD=R; }"""
b="""const R={}, put=c=>{ if(Array.isArray(c)&&typeof c[0]==='string'&&typeof c[1]==='string'&&c[1]&&R[c[0]]===undefined) R[c[0]]=c[1]; }, inl=x=>{ if(!x) return; if(Array.isArray(x)) return x.forEach(inl); if(Array.isArray(x.cards)) x.cards.forEach(put); }; (typeof LESSONS!=='undefined'?LESSONS:[]).forEach(l=>{ if(Array.isArray(l.sections)) l.sections.forEach(inl); }); Object.keys(DECKS).forEach(d=>{ (DECKS[d]||[]).forEach(put); }); TILE_RD_ID=COURSE.id; return TILE_RD=R; }"""
assert s.count(a)==1, 'tileReads not as expected (already applied?)'
io.open(P,'w',encoding='utf-8').write(s.replace(a,b))
print('foundations_b2: ok')
