#!/usr/bin/env python3
# Character foundations (FND-1): what Korean lesson 1 has by hand becomes available to every course.
# Owner: "learning the characters of a language is foundational can we make sure the other languages have similar structures that fits for them".
#  1. A lesson may carry `sections`: one entry per teaching section (the body cut at each <h3>, as lsPlan cuts it), naming that section's flashcards:
#       null                          no flashcards after this section
#       "Deck name"                   the whole deck
#       {deck:"Deck name", n:[a,b]}   cards a..b-1 of that deck
#       {name:"Label", cards:[[front,reading,meaning,note],...]}   a deck that lives only inside the lesson (like Korean's 가나다)
#       [spec, spec]                  several of the above, in order
#     A lesson without `sections` is planned as before.
#  2. {{tiles:あ い う え お}} in a pack lesson draws flip tiles for any script: the letter, tap for its reading and sound, tap again for the letter.
#     A tile's reading is the reading of the card with that front; "x=reading" sets it by hand; "_" leaves a gap in the grid.
# Run once on src/app.html; every replacement is asserted.
import io, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
P = os.path.join(ROOT, 'src', 'app.html')
s = io.open(P, encoding='utf8').read()
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (s.count(a), a[:80])
    s = s.replace(a, b)
assert 'FND-1' not in s, 'already applied'

# css: the front of a letter tile, and a five-column grid (kana rows, vowel rows)
rep(".sgl.flip .stroke{display:none}.sgl.flip .sgb{display:flex}.sgl .stroke svg,.sgl .sgb{animation:sgflip .22s ease}",
    ".sgl.flip .stroke{display:none}.sgl.flip .sgb{display:flex}.sgl .stroke svg,.sgl .sgb{animation:sgflip .22s ease}\n"
    ".tiles-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin:8px 0}.sgl .sgf{display:flex;aspect-ratio:1;box-sizing:border-box;align-items:center;justify-content:center;background:var(--bg);border-radius:10px;border:1px solid var(--line);font-size:1.9rem;font-weight:700;line-height:1;animation:sgflip .22s ease}.sgl.flip .sgf{display:none}.tiles-grid .sgl .sgb .rom{font-size:1.15rem}")
rep("@media (prefers-reduced-motion:reduce){.sgl .stroke svg,.sgl .sgb{animation:none}}",
    "@media (prefers-reduced-motion:reduce){.sgl .stroke svg,.sgl .sgb,.sgl .sgf{animation:none}}")

# tiles token
rep("function strokeTok(h){ return COURSE.target!=='ko'?h:String(h).replace(/\\{\\{strokes:([^}]*)\\}\\}/g,(m,ch)=>STROKES[ch]?sglTile(ch):''); }",
    "function strokeTok(h){ h=tilesTok(h); return COURSE.target!=='ko'?h:String(h).replace(/\\{\\{strokes:([^}]*)\\}\\}/g,(m,ch)=>STROKES[ch]?sglTile(ch):''); }\n"
    "/* FND-1. {{tiles:あ い う}} in a pack lesson: flip tiles for any script. Front: the letter. Tap: its reading, and the letter is said. \"x=reading\" sets the reading by hand, otherwise it is the reading of the card with that front; \"_\" is a gap. */\n"
    "let TILE_RD=null, TILE_RD_ID='';\n"
    "function tileReads(){ if(TILE_RD&&TILE_RD_ID===COURSE.id) return TILE_RD; const R={}; Object.keys(DECKS).forEach(d=>{ (DECKS[d]||[]).forEach(c=>{ if(Array.isArray(c)&&typeof c[0]==='string'&&typeof c[1]==='string'&&c[1]&&R[c[0]]===undefined) R[c[0]]=c[1]; }); }); TILE_RD_ID=COURSE.id; return TILE_RD=R; }\n"
    "function tilesTok(h){ if(String(h).indexOf('{{tiles:')<0) return h; const R=tileReads(); return String(h).replace(/\\{\\{tiles:([^}]*)\\}\\}/g,(m,inner)=>'<div class=\"tiles-grid\">'+inner.split(/\\s+/).filter(Boolean).map(t=>{ if(t==='_') return '<div></div>'; const i=t.indexOf('='), g=escT(i>0?t.slice(0,i):t), r=escT(i>0?t.slice(i+1):(R[t]||'')); return '<div class=\"sgl\" data-sound=\"'+g+'\" role=\"button\" aria-label=\"'+g+'\" data-noi18n><div class=\"sgf\">'+g+'</div>'+(r?'<div class=\"sgb\"><span class=\"rom\">'+r+'</span></div>':'')+'</div>'; }).join('')+'</div>'); }")

# sections named by the lesson
rep("const LS_BLOCKS='가나다', LS_PLAN={};",
    "const LS_BLOCKS='가나다', LS_PLAN={};\n"
    "/* FND-1. lsSecCards(spec): the flashcards a lesson names for one section (see tools/patches/foundations.py for the forms). A deck written inside the lesson is added to DECKS under its label, never to PATH or names, so Review, Progress and deck counts do not see it. */\n"
    "function lsSecCards(spec){ if(!spec) return []; if(Array.isArray(spec)) return spec.reduce((a,x)=>a.concat(lsSecCards(x)),[]); if(typeof spec==='string') spec={deck:spec}; if(typeof spec!=='object') return [];\n"
    "  if(typeof spec.name==='string'&&Array.isArray(spec.cards)){ if(names.indexOf(spec.name)>=0) return []; if(!DECKS[spec.name]) DECKS[spec.name]=spec.cards.filter(c=>Array.isArray(c)&&c.length>=3).map(c=>c.slice(0,4).map(x=>String(x==null?'':x))); return DECKS[spec.name].map(c=>({d:spec.name,c})); }\n"
    "  const D=DECKS[spec.deck]; if(!D||names.indexOf(spec.deck)<0) return []; const n=Array.isArray(spec.n)?spec.n:[0,D.length]; return D.slice(Math.max(0,n[0]|0),Math.min(D.length,n[1]|0)).map(c=>({d:spec.deck,c})); }")
rep("if(p.H&&p.H.length&&DECKS[p.hn]!==p.H) DECKS[p.hn]=p.H; return p; }",
    "if(p.H&&p.H.length&&DECKS[p.hn]!==p.H) DECKS[p.hn]=p.H; { const miss={}; if(Array.isArray(l.sections)) p.all.forEach(x=>{ if(!DECKS[x.d]||miss[x.d]){ miss[x.d]=1; (DECKS[x.d]=DECKS[x.d]||[]).push(x.c); } }); } return p; }")
rep("  if(l.id==='hangul'&&COURSE.target==='ko'&&n>=4&&V&&C){",
    "  if(Array.isArray(l.sections)&&!COURSE.builtin){ const seen=new Set(); sets=raw.map((x,i)=>lsSecCards(l.sections[i]).filter(y=>{ const k=y.d+'|'+y.c[0]; if(seen.has(k)) return false; seen.add(k); return true; })); }\n"
    "  else if(l.id==='hangul'&&COURSE.target==='ko'&&n>=4&&V&&C){")
io.open(P, 'w', encoding='utf8').write(s)
print('foundations.py: applied to', P)
