#!/usr/bin/env python3
# SEC-1: a section's flashcards are what that section teaches (owner: "lets fix the cards by sections").
# Before: the cards of the lesson's topic deck were dealt across the sections in deck order (28% lined up).
# Now, in the courses listed in LS_ALIGN: a section's deck = its own example lines + the cards of the course whose words it teaches
# (+ the course's SECS table: cards a writer added or took out). Nothing comes from a later section. Other courses keep the old rule.
# Edits src/app.html by assertion-guarded replacement. Run once.
import io, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
P = os.path.join(ROOT, 'src', 'app.html')
s = io.open(P, encoding='utf8').read()
assert 'LS_ALIGN' not in s, 'already applied'
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, ('expected %d, found %d: ' % (n, s.count(a))) + a[:90]
    s = s.replace(a, b)

NEW = r'''/* SEC-1: section decks made from what the section teaches. LS_ALIGN lists the courses that use it (one course first, by the owner's rule); the others keep the dealing in lsPlan.
   A section's cards, in the order the section shows them: its example lines (the real card when a deck has that line, else a card of the lesson's own hidden deck LS_EX+id), the cards of the lesson's deck whose words it uses, and cards of any deck that it shows as a term (bold or a table cell). Then COURSE.SECS[lessonId][section] = {add:[front | [front,reading,meaning,note]], drop:[front]} from a writer. A card is used once in a lesson, in the first section that teaches it. A section left with fewer than 3 passes them on to the next deck (never back). */
const LS_EX='§', LS_ALIGN={'en-ko':1}, LS_SECS_KO=/*SECS:en-ko*/{}/*SECS-END*/; /* the built-in course's writer table, put here by tools/sections/apply.js */
function lsHid(k){ return k[0]===LS_EX||k.indexOf(LS_BLOCKS+'|')===0; } /* a saved card of a deck that exists only inside a lesson: not a review */
function lsCut(body){ const raw=String(body||'').split(/(?=<h3[\s>])/), cnt=(x,re)=>(x.match(re)||[]).length, bal=x=>cnt(x,/<div[\s>]/g)===cnt(x,/<\/div>/g)&&cnt(x,/<table[\s>]/g)===cnt(x,/<\/table>/g);
  for(let i=0;i<raw.length-1;){ if(!bal(raw[i])){ raw[i]+=raw[i+1]; raw.splice(i+1,1); } else i++; } /* never cut inside a box or a table */
  if(raw.length>1&&!/^<h3[\s>]/.test(raw[0])){ raw[1]=raw[0]+raw[1]; raw.shift(); } /* the opening lines belong to the first section */
  return raw; }
function lsText(x){ return String(x||'').replace(/<[^>]+>/g,'').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').trim(); }
function lsExs(h){ const o=[]; String(h).replace(/\{\{ex:([^}]*)\}\}|<div class="ex">[\s\S]*?<span class="k">([\s\S]*?)<\/span><span class="r">([\s\S]*?)<\/span><span class="m">([\s\S]*?)<\/span><\/div>/g,(m,t,k,r,g)=>{ if(k===undefined){ const p=String(t).split('|'); o.push([p[0].trim(),(p[1]||'').trim(),p.slice(2).join('|').trim()]); } else o.push([lsText(k),lsText(r),lsText(g)]); return m; }); return o.filter(x=>x[0]&&x[2]); }
function lsItems(h){ const o=[]; String(h).replace(/<b>([^<]+)<\/b>|<td class="k">([^<]+)<\/td>/g,(m,a,b)=>{ const k=lsNorm(a||b).trim(); if(k) o.push(k); return m; }); return o; }
function lsAt(k,txt){ /* where the section's text uses these words (k and txt from lsNorm), -1 when it does not */ let p=txt.indexOf(' '+k+' '); if(p>=0) return p;
  if(/[฀-๿぀-ヿ㐀-鿿]/.test(k)){ const t=k.replace(/ /g,''); return t.length>=2?txt.replace(/ /g,'').indexOf(t):-1; }
  if(/^[가-힣]{2,}$/.test(k)){ const m=txt.match(new RegExp(' '+k+'(은|는|이|가|을|를|에|의|도|로|와|과|만|에서|으로|이에요|예요|입니다) ')); if(m) return m.index; }
  const w=k.split(' ').filter(x=>x.length>2); if(w.length<2) return -1; let lo=1e9; for(const x of w){ const q=txt.indexOf(' '+x+' '); if(q<0) return -1; lo=Math.min(lo,q); } return lo; }
function lsIdx(){ if(lsIdx.D===DECKS) return lsIdx.M; const M=new Map(); names.forEach(d=>{ if(d===MYDECK||d===LS_BLOCKS||d[0]===LS_EX) return; (DECKS[d]||[]).forEach(c=>{ const k=lsNorm(c[0]).trim(); if(k&&!M.has(k)) M.set(k,{d,c}); }); }); lsIdx.D=DECKS; lsIdx.M=M; return M; }
function lsAlign(l,raw){ if(!LS_ALIGN[COURSE.id]||Array.isArray(l.sections)) return null; /* a lesson whose sections are set by hand keeps them */
  const R=((typeof NAME_RAW!=='undefined'&&NAME_RAW&&NAME_RAW.LESSONS)||[]).find(x=>x&&x.id===l.id), rr=R&&R!==l?lsCut(R.body):raw, src=rr.length===raw.length?rr:raw; /* the text before the learner's name is put in */
  const M=lsIdx(), own=new Map(), hn=LS_EX+l.id, H=[], used=new Set(), X=((COURSE.builtin?LS_SECS_KO:COURSE.SECS)||{})[l.id]||{}, n=raw.length;
  (DECKS[l.deck]||[]).forEach(c=>{ const k=lsNorm(c[0]).trim(); if(k&&!own.has(k)) own.set(k,{d:l.deck,c}); });
  const EXL=new Map(); src.forEach(h=>lsExs(h).forEach(e=>{ if(e[0].indexOf(NAME_TOK)<0){ const k=lsNorm(e[0]).trim(); if(k&&!EXL.has(k)) EXL.set(k,e); } }));
  const res=new Map(); Object.keys(X).forEach(i=>((X[i]||{}).add||[]).forEach(a=>{ if(typeof a==='string'){ const k=lsNorm(a).trim(); if(!res.has(k)) res.set(k,+i); } })); /* a card the writer names for a section waits for that section */
  const real=k=>own.get(k)||M.get(k), hid=a=>{ const c=[String(a[0]),String(a[1]||'')||(COURSE.target==='ko'?romanize(String(a[0])):''),String(a[2]),String(a[3]||'')]; H.push(c); return {d:hn,c}; };
  let sets=src.map((h,i)=>{ const txt=lsNorm(h), s=[], x=X[i]||{}, drop=new Set((x.drop||[]).map(f=>lsNorm(f).trim()));
    const put=(k,mk,pos,w)=>{ if(!k||used.has(k)||(!w&&(drop.has(k)||(res.has(k)&&res.get(k)!==i)))) return; /* w: the writer's own card, which a drop in the same section does not remove */ used.add(k); s.push({x:mk(),pos}); };
    lsExs(h).forEach(e=>{ if(e[0].indexOf(NAME_TOK)>=0) return; const k=lsNorm(e[0]).trim(), r=real(k); put(k,()=>r||hid(e),Math.max(0,lsAt(k,txt))); });
    own.forEach((v,k)=>{ const p=lsAt(k,txt); if(p>=0) put(k,()=>v,p); });
    lsItems(h).forEach(k=>{ const r=M.get(k); if(r&&k.replace(/ /g,'').length>1&&!isLetterDeck(r.d)) put(k,()=>r,Math.max(0,lsAt(k,txt))); }); /* a one-letter term is too often another word (그 that / he) */
    s.sort((a,b)=>a.pos-b.pos);
    (x.add||[]).forEach(a=>{ if(typeof a==='string'){ const k=lsNorm(a).trim(), r=real(k); if(r) put(k,()=>r,1e9,1); else if(EXL.has(k)) put(k,()=>hid(EXL.get(k)),1e9,1); /* or an example line of another section of this lesson */ } else if(Array.isArray(a)&&a[0]&&a[2]) put(lsNorm(a[0]).trim(),()=>hid(a),1e9,1); }); /* a string names an existing card; an array is always a new lesson-only card, also when a deck has a card with that front (the writer gives it the meaning this section teaches) */
    return s.map(y=>y.x); });
  if(sets.reduce((a,x)=>a+x.length,0)<3) return null; const pre=sets.map(x=>x.length); /* before any section passes its cards on: what tools/sections reads */
  for(let k=0;k<n;k++){ if(sets[k].length&&sets[k].length<3){ let j=-1; for(let m=k+1;m<n&&j<0;m++){ if(sets[m].length) j=m; } if(j>=0){ sets[j]=sets[k].concat(sets[j]); sets[k]=[]; } } } /* the last deck of a lesson may be short: its cards are never moved back in front of the section that teaches them */
  return {sets,hn,H,pre}; }
'''
rep("function lsPlan(l){ const key=COURSE.id+'|'+l.id; if(LS_PLAN[key]) return LS_PLAN[key];\n",
    NEW + "function lsPlan(l){ const key=COURSE.id+'|'+l.id; if(LS_PLAN[key]){ const p=LS_PLAN[key]; if(p.H&&p.H.length&&DECKS[p.hn]!==p.H) DECKS[p.hn]=p.H; return p; }\n")
rep("""  const raw=String(l.body||'').split(/(?=<h3[\\s>])/), cnt=(x,re)=>(x.match(re)||[]).length, bal=x=>cnt(x,/<div[\\s>]/g)===cnt(x,/<\\/div>/g)&&cnt(x,/<table[\\s>]/g)===cnt(x,/<\\/table>/g);
  for(let i=0;i<raw.length-1;){ if(!bal(raw[i])){ raw[i]+=raw[i+1]; raw.splice(i+1,1); } else i++; } /* never cut inside a box or a table */
  if(raw.length>1&&!/^<h3[\\s>]/.test(raw[0])){ raw[1]=raw[0]+raw[1]; raw.shift(); } /* the opening lines belong to the first section */
  const n=raw.length, D=DECKS[l.deck]||[]; let sets=raw.map(()=>[]);""",
    "  const raw=lsCut(l.body), n=raw.length, D=DECKS[l.deck]||[]; let sets=raw.map(()=>[]), al=null;")
rep("  else { const txt=raw.map(lsNorm), rest=[]; D.forEach(", "  else if((al=lsAlign(l,raw))){ sets=al.sets; if(al.H.length) DECKS[al.hn]=al.H; }\n  else { const txt=raw.map(lsNorm), rest=[]; D.forEach(")
rep("return LS_PLAN[key]={parts,all:parts.reduce((a,p)=>a.concat(p.cards),[])}; }", "return LS_PLAN[key]={parts,all:parts.reduce((a,p)=>a.concat(p.cards),[]),hn:al?al.hn:'',H:al?al.H:null,pre:al?al.pre:null}; }")
# cards of lesson-only decks are not reviews: keep them out of "Reviews coming up", the next-due line and the share card
rep("function forecast(days){ const f=new Array(days).fill(0); const t=dayNum(); Object.values(S.cards).forEach(s=>{ if(s.leech||s.susp) return;",
    "function forecast(days){ const f=new Array(days).fill(0); const t=dayNum(); Object.entries(S.cards).forEach(([ky,s])=>{ if(s.leech||s.susp||lsHid(ky)) return;")
rep("const nextDue=(()=>{ let m=Infinity; Object.values(S.cards).forEach(s=>{ if(s.due>dayNum()) m=Math.min(m,s.due); });",
    "const nextDue=(()=>{ let m=Infinity; Object.entries(S.cards).forEach(([ky,s])=>{ if(s.due>dayNum()&&!lsHid(ky)) m=Math.min(m,s.due); });")
rep("const known=Object.values(S.cards).filter(s=>s.box>=2).length;", "const known=Object.entries(S.cards).filter(([ky,s])=>s.box>=2&&!lsHid(ky)).length;")
io.open(P, 'w', encoding='utf8').write(s)
print('lesson_align: applied')
