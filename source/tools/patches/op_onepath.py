#!/usr/bin/env python3
# OP-1 (course report, solution 10): one path. A session's new cards come first from the decks of lessons the learner has finished, in lesson order, and only then from the deck path. en-es first (opOn). Safe to run twice.
import os,sys
R=os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); f=os.path.join(R,'src','app.html'); s=open(f,encoding='utf-8').read()
if 'function opOn(' in s: print('op_onepath: already applied'); sys.exit(0)
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (s.count(a),a[:80]); s=s.replace(a,b)
rep("  const cd=currentDeck(); return cd? DECKS[cd].filter(c=>isNew(cd,c)).slice(0,n).map(c=>({d:cd,c})) : []; }",
"  if(opOn()){ /* OP-1: decks of finished lessons first, in lesson order */ const out=[]; opDecks().forEach(d=>DECKS[d].forEach(c=>{ if(out.length<n&&isNew(d,c)) out.push({d,c}); })); if(out.length<n){ const cd2=currentDeck(); if(cd2) DECKS[cd2].forEach(c=>{ if(out.length<n&&isNew(cd2,c)&&!out.some(x=>x.d===cd2&&x.c===c)) out.push({d:cd2,c}); }); } return out; }\n  const cd=currentDeck(); return cd? DECKS[cd].filter(c=>isNew(cd,c)).slice(0,n).map(c=>({d:cd,c})) : []; }\nfunction opOn(){ const on={'en-es':1}; return !!(COURSE&&on[COURSE.id]); }\nfunction opDecks(){ /* the decks tied to lessons the learner has finished, in lesson order, each once */ const out=[]; LESSONS.forEach(l=>{ if(S.lessons[l.id]&&l.deck&&DECKS[l.deck]&&l.deck!==MYDECK&&out.indexOf(l.deck)<0) out.push(l.deck); }); return out; }")
open(f,'w',encoding='utf-8').write(s); print('op_onepath: applied')
