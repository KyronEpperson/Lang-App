#!/usr/bin/env python3
# LS-1: every lesson flows teach section -> that section's flashcards (five shown, then quizzed, to the end of the deck) -> next section -> ... -> a review of all the lesson's cards.
# Edits src/app.html by assertion-guarded replacement. Safe to run once; a second run stops on the first assertion.
# usage: python3 tools/patches/lesson_sections.py
import os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
F = os.path.join(ROOT, 'src', 'app.html')
s = open(F, encoding='utf8').read()

def rep(old, new, n=1):
    global s
    assert s.count(old) == n, (s.count(old), old[:90])
    s = s.replace(old, new)

# 1. styles
rep(""".lbody .ex{grid-template-columns:auto 1fr}""",
    """#lsRomBody>*,#lessonCheck,#miniDrill{scroll-margin-top:120px}.lsdeck{margin:18px 0;padding:12px 14px;border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:12px}.lsdeck .lsdh{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.lsdeck .lsdh .big{margin-left:auto;padding:8px 18px}.lsdeck .lsok{font:500 .68rem var(--mono);padding:3px 8px;border-radius:999px;background:var(--ok-soft);color:var(--ok)}.lsdeck .lsok[hidden]{display:none}.lsdeck .lsrun:not(:empty){margin-top:10px}.lsdeck.lsdone{border-left-color:var(--ok)}
.lbody .ex{grid-template-columns:auto 1fr}""")

# 2. the plan of a lesson and the runner of one deck
rep("""function lessonBody(l){""",
    r"""/* LESSON SECTIONS (LS-1). A lesson is its teaching sections (the body cut at each <h3>), each followed by its own flashcards; the lesson ends with a review of all of them.
   lsPlan(l) -> {parts:[{html,cards:[{d,c}]}], all:[{d,c}]}. The cards of the lesson's deck go to the section that teaches them (the card's words appear in that section); the rest are dealt out in deck order so that every section has cards. A section left with fewer than 3 hands them to a neighbour and has no deck of its own.
   Korean lesson 1 is set by hand: vowels -> the vowels deck, consonants -> the consonants deck, stacking -> LS_BLOCKS (syllable blocks made here from the letters; a deck that exists only inside the lesson). */
const LS_BLOCKS='가나다', LS_PLAN={};
function lsBlocksDeck(){ if(!DECKS[LS_BLOCKS]) DECKS[LS_BLOCKS]=['나','노','가','고','미','무','도','수','비','호','한','강','문','밥','손','달','산','길','곰','눈'].map(b=>{ const d=dec(b); return [b,romanize(b),L_IDX[d.l]+' + '+V_IDX[d.v]+(d.t?' + '+T_IDX[d.t]:''),'']; }); return LS_BLOCKS; }
function lsNorm(h){ return ' '+String(h||'').replace(/\{\{ex:([^|}]*)[^}]*\}\}/g,' $1 ').replace(/\{\{[^}]*\}\}/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z]+;/g,' ').toLowerCase().replace(/[.,!?¿¡。、！？;:"'’“”«»()\[\]…~·\/\-]/g,' ').replace(/\s+/g,' ')+' '; }
function lsScore(front,txt){ const f=lsNorm(front).trim(); if(!f) return 0; if(txt.includes(' '+f+' ')) return 2;
  if(/[฀-๿぀-ヿ㐀-鿿]/.test(f)){ if(txt.includes(f)) return 2; const g=[...f.replace(/ /g,'')]; if(g.length<2) return 0; let h=0; for(let i=0;i<g.length-1;i++){ if(txt.includes(g[i]+g[i+1])) h++; } return h/(g.length-1); }
  const w=f.split(' ').filter(x=>x.length>2); return w.length?w.filter(x=>txt.includes(' '+x+' ')).length/w.length:0; }
function lsPlan(l){ const key=COURSE.id+'|'+l.id; if(LS_PLAN[key]) return LS_PLAN[key];
  const raw=String(l.body||'').split(/(?=<h3[\s>])/), cnt=(x,re)=>(x.match(re)||[]).length, bal=x=>cnt(x,/<div[\s>]/g)===cnt(x,/<\/div>/g)&&cnt(x,/<table[\s>]/g)===cnt(x,/<\/table>/g);
  for(let i=0;i<raw.length-1;){ if(!bal(raw[i])){ raw[i]+=raw[i+1]; raw.splice(i+1,1); } else i++; } /* never cut inside a box or a table */
  if(raw.length>1&&!/^<h3[\s>]/.test(raw[0])){ raw[1]=raw[0]+raw[1]; raw.shift(); } /* the opening lines belong to the first section */
  const n=raw.length, D=DECKS[l.deck]||[]; let sets=raw.map(()=>[]);
  const V=ROLE('hangulVowels'), C=ROLE('hangulConsonants');
  if(l.id==='hangul'&&COURSE.target==='ko'&&n>=4&&V&&C){ sets[0]=DECKS[V].map(c=>({d:V,c})); sets[1]=DECKS[C].map(c=>({d:C,c})); const B=lsBlocksDeck(); sets[3]=DECKS[B].map(c=>({d:B,c})); }
  else { const txt=raw.map(lsNorm), rest=[]; D.forEach(c=>{ let b=-1, bs=0; txt.forEach((t,i)=>{ const v=lsScore(c[0],t); if(v>bs){ bs=v; b=i; } }); if(bs>=0.6) sets[b].push(c); else rest.push(c); });
    const tgt=Math.ceil(D.length/n); let i=0; rest.forEach(c=>{ while(i<n-1&&sets[i].length>=tgt) i++; sets[i].push(c); });
    for(let k=0;k<n;k++){ if(sets[k].length&&sets[k].length<3){ let j=-1; for(let m=k+1;m<n&&j<0;m++){ if(sets[m].length) j=m; } for(let m=k-1;m>=0&&j<0;m--){ if(sets[m].length) j=m; } if(j>=0){ sets[j]=sets[j].concat(sets[k]); sets[k]=[]; } } }
    sets=sets.map(x=>x.slice().sort((a,b)=>D.indexOf(a)-D.indexOf(b)).map(c=>({d:l.deck,c}))); }
  const parts=raw.map((h,i)=>({html:h,cards:sets[i]})); return LS_PLAN[key]={parts,all:parts.reduce((a,p)=>a.concat(p.cards),[])}; }
function lsPartHTML(h){ return COURSE.builtin?h:'<div class="lbody" data-noi18n>'+strokeTok(expandEx(h))+'</div>'; }
function lsKnown(x){ const st=cardState(x.d,x.c); return !!st&&st.box>=2; }
function lsDeckDone(id,k,cards){ const p=(S.lsec||{})[id]; return !!S.lessons[id]||(!!p&&p[k]>=cards.length)||cards.every(lsKnown); }
function lsSetPos(id,k,pos){ S.lsec=S.lsec||{}; const p=S.lsec[id]=S.lsec[id]||{}; p[k]=Math.max(+p[k]||0,pos); save(); }
function lsQuiz(box,qs,label,onEnd){ /* one round of questions inside a lesson; onEnd(score,total) */ let qi=0, score=0;
  const step=()=>{ if(cleanup){cleanup();cleanup=null;} if(qi>=qs.length){ onEnd(score,qs.length); return; }
    box.innerHTML=`<div class="row" style="flex-wrap:nowrap"><span class="stat"><span>${label}</span> <span data-noi18n>· ${qi+1}/${qs.length}</span></span><span class="stat" data-noi18n>${score} ✓</span></div><div class="bar" style="margin:8px 0 4px"><i style="width:${qi/qs.length*100}%"></i></div><div class="qbody"></div>`; box.querySelector('.qbody').dataset.ans=qs[qi].c[0];
    cleanup=renderQuizQ(box.querySelector('.qbody'),qs[qi].d,qs[qi].c,qs[qi].mode,ok=>{ if(ok) score++; qi++; step(); }); };
  step(); }
function lsMix(qs){ for(let t=0;t<20;t++){ qs=shuffle(qs); if(!qs.some((q,i)=>i&&q.c===qs[i-1].c)) break; } return qs; }
function lsRun(box,cards,pos0,onPos,onDone){ /* five shown as flip cards, then those five asked (twice each, with up to five earlier cards of this deck once), then the next five, to the end of the deck; no pass mark, the place is saved after each quiz */
  let pos=pos0>0&&pos0<cards.length?pos0:0; userTouched=true;
  const round=()=>{ if(cleanup){cleanup();cleanup=null;} if(pos>=cards.length){ box.innerHTML=''; onDone(); return; }
    const base=pos, fresh=cards.slice(pos,pos+rvBatchSize(cards.length-pos)), old=shuffle(cards.slice(0,pos)).slice(0,5); let show=fresh.slice();
    const card=()=>{ if(cleanup){cleanup();cleanup=null;} if(!show.length){ quiz(); return; } const x=show[0], at=pos+fresh.length-show.length;
      box.innerHTML=`<div class="stat" style="margin-bottom:8px">Card ${at+1} of ${cards.length}</div><div class="bar" style="margin:0 0 10px"><i style="width:${at/cards.length*100}%"></i></div><div class="mdCard"></div><p class="stat" style="text-align:center;margin-top:10px">Flip it, listen, then tap Got it once it sticks.</p>`;
      cleanup=renderFlashcard(box.querySelector('.mdCard'),x.d,x.c,ok=>{ if(ok!==null) grade(x.d,x.c,ok,isNew(x.d,x.c),'self'); show.shift(); if(ok===false&&fresh.length>1) show.push(x); card(); }); };
    const quiz=()=>{ const m2=koVoice?'listen':'recall', qs=[]; fresh.forEach(x=>{ qs.push({d:x.d,c:x.c,mode:'read'}); qs.push({d:x.d,c:x.c,mode:'recall'}); }); old.forEach(x=>qs.push({d:x.d,c:x.c,mode:pick(['read',m2])}));
      lsQuiz(box,lsMix(qs),'Quiz',(score,total)=>{ const pct=Math.round(score/total*100); if(pos===base){ pos=base+fresh.length; onPos(pos); } /* no pass mark (QF-1): the round counts whatever the score; missed cards come back in the next rounds, in the review and through the judge */
        box.innerHTML=`<div class="done" style="border:0;padding:16px"><div class="ko" data-noi18n>${PRAISE(pct>=80?2:pct>=50?1:0,pct>=80?'대박!':pct>=50?'좋아요':'다시 해 봐요')}</div><div class="en" data-noi18n>${score} / ${total}</div></div><div class="controls lsbtns"></div>`;
        const bx=box.querySelector('.lsbtns'), mk=(t,cls,fn,wide)=>{ const b=document.createElement('button'); b.type='button'; b.className='big '+cls; b.textContent=t; b.onclick=fn; if(wide) b.style.gridColumn='1/3'; bx.appendChild(b); };
        const left=cards.length-pos; mk(left<=0?'Finish':rvBatchSize(left)===5?'Next 5 cards':'Next','primary lsnext',round,true);
        if(score<total){ mk(fresh.length===5?'Review these 5 again':'Again','ghost',()=>{ show=fresh.slice(); card(); }); mk('Retry quiz','ghost',quiz); } }); };
    card(); };
  round(); }
function lessonBody(l){""")

# 3. the lesson page: sections with their decks, then the quick check, then the review
rep("""<div id="lsRomBody">${lessonBody(l)}</div>""",
    """<div id="lsRomBody">${plan.parts.map((p,k)=>lsPartHTML(p.html)+(p.cards.length?`<div class="lsdeck" data-k="${k}"><div class="lsdh"><b>Flashcards</b><span class="stat">${p.cards.length} cards</span><span class="lsok" hidden>✓ done</span><button class="big primary lsgo" type="button">Start</button></div><div class="lsrun"></div></div>`:'')).join('')}</div>""")
rep("""  $('lessonHome').hidden=true; const b=$('lessonBody'); b.hidden=false;
  b.innerHTML = `<div class="panel">""",
    """  $('lessonHome').hidden=true; const b=$('lessonBody'); b.hidden=false; const plan=lsPlan(l), lsLeft=()=>plan.parts.map((p,k)=>p.cards.length&&!lsDeckDone(id,k,p.cards)?k:-1).filter(k=>k>=0);
  b.innerHTML = `<div class="panel">""")
rep("""<div id="miniDrill" style="margin-top:16px"><p style="font-size:.9rem;color:var(--muted)">Then 5 cards from <b data-noi18n>${l.deck}</b>${S.lessons[id]?' (lesson already done)':' · lesson counts as done when both are passed (+25 XP)'}.</p><div class="controls" style="margin-top:0"><button class="big primary" id="miniStart">Mini drill: 5 cards</button>""",
    """<div id="miniDrill" style="margin-top:16px"><h3 style="margin-top:0">Review</h3><p style="font-size:.9rem;color:var(--muted)"><span>${plan.all.length} cards</span> <span>${S.lessons[id]?'(lesson already done)':'· lesson counts as done when both are passed (+25 XP)'}</span></p><p class="stat" id="lsCount" style="margin:0 0 8px"></p><div class="controls" style="margin-top:0"><button class="big primary" id="miniStart" style="grid-column:1/3">Start</button>""")
rep("""<a class="big hit" style="text-align:center;text-decoration:none;display:block" href="#browse-${slug(l.deck)}">📖 Browse ${l.deck}</a></div></div>${pracEntryHTML(id)}""",
    """</div></div>${pracEntryHTML(id)}""")
rep("""body.insertAdjacentHTML('beforeend','<button class="big primary" id="toDrill" type="button" style="width:100%;margin-top:10px">Mini drill: 5 cards</button>'); $('toDrill').onclick=()=>{ $('miniDrill').scrollIntoView({block:'start',behavior:'smooth'}); $('miniStart').click(); }; }""",
    """body.insertAdjacentHTML('beforeend','<button class="big primary" id="toDrill" type="button" style="width:100%;margin-top:10px">Review</button>'); $('toDrill').onclick=()=>{ $('miniDrill').scrollIntoView({block:'start',behavior:'smooth'}); $('miniStart').click(); }; }""")
rep("""  $('miniStart').onclick=()=>{ userTouched=true; const d=l.deck; let pool=DECKS[d].filter(c=>isDue(d,c)||isNew(d,c)); if(pool.length<5) pool=pool.concat(shuffle(DECKS[d].filter(c=>!pool.includes(c))).slice(0,5-pool.length)); pool=pool.slice(0,5); let i=0, got=0; const box=$('miniDrill');
    const step=()=>{ if(cleanup){cleanup();cleanup=null;} if(i>=pool.length){ S.drills=S.drills||{}; S.drills[id]=1; save(); maybeDone(); box.innerHTML=""",
    """  const lsMark=()=>{ b.querySelectorAll('.lsdeck').forEach(el=>{ const k=+el.dataset.k, cards=plan.parts[k].cards, done=lsDeckDone(id,k,cards), busy=!!el.querySelector('.lsrun').firstChild, pos=((S.lsec||{})[id]||{})[k]||0; el.classList.toggle('lsdone',done); el.querySelector('.lsok').hidden=!done; const go=el.querySelector('.lsgo'); go.hidden=busy; go.className='big lsgo '+(done?'ghost':'primary'); go.textContent=done?'Retry':'Start'; el.querySelector('.lsdh .stat').innerHTML=(!done&&pos>0&&pos<cards.length?'<span data-noi18n>'+pos+' / </span>':'')+'<span>'+cards.length+' cards</span>'; }); const c=$('lsCount'); if(c){ const tot=plan.parts.filter(p=>p.cards.length).length, left=lsLeft().length; c.innerHTML=tot&&!S.lessons[id]?'<span>Flashcards</span> <span data-noi18n>'+(tot-left)+'/'+tot+'</span>':''; } };
  b.querySelectorAll('.lsdeck').forEach(el=>{ const k=+el.dataset.k, cards=plan.parts[k].cards, run=el.querySelector('.lsrun'); el.querySelector('.lsgo').onclick=()=>{ const done=lsDeckDone(id,k,cards); el.querySelector('.lsgo').hidden=true; try{ el.scrollIntoView({block:'start',behavior:'smooth'}); }catch(e){}
      lsRun(run,cards,done?0:(((S.lsec||{})[id]||{})[k]||0),pos=>{ lsSetPos(id,k,pos); lsMark(); },()=>{ lsSetPos(id,k,cards.length); lsMark(); const nx=el.nextElementSibling||$('lessonCheck'); setTimeout(()=>{ try{ nx.scrollIntoView({block:'start',behavior:'smooth'}); }catch(e){} },300); }); }; });
  lsMark();
  $('miniStart').onclick=()=>{ userTouched=true; const d=l.deck, left=lsLeft(); if(left.length){ /* the review comes after the decks: go to the first one still open */ const el=b.querySelector('.lsdeck[data-k="'+left[0]+'"]'); try{ el.scrollIntoView({block:'start',behavior:'smooth'}); }catch(e){} if(!el.querySelector('.lsrun').firstChild) el.querySelector('.lsgo').click(); return; }
    const pool=plan.all.length?plan.all:DECKS[d].map(c=>({d,c})); let got=0; const box=$('miniDrill'), m2=koVoice?'listen':'recall';
    const ask=()=>lsQuiz(box,lsMix(pool.map(x=>({d:x.d,c:x.c,mode:pick(['read','recall',m2])}))),'Review',(score,total)=>{ got=score; fin(); }); /* no pass mark (QF-1) */
    const fin=()=>{ if(cleanup){cleanup();cleanup=null;} { S.drills=S.drills||{}; S.drills[id]=1; save(); maybeDone(); lsMark(); box.innerHTML=""")
rep("""{ const tc=$('toCheck'); if(tc) tc.onclick=()=>$('lessonCheck').scrollIntoView({block:'start',behavior:'smooth'}); } $('miniBack').onclick=()=>{openLesson=null;renderLessonHome();}; return; }
      box.innerHTML=`<div class="stat" style="margin-bottom:8px">Card ${i+1} of ${pool.length}</div><div class="mdCard"></div>`; const c=pool[i]; cleanup=renderFlashcard(box.querySelector('.mdCard'),d,c,ok=>{ if(ok!==null){ grade(d,c,ok,isNew(d,c),'self'); if(ok) got++; } i++; step(); }); };
    step(); };""",
    """{ const tc=$('toCheck'); if(tc) tc.onclick=()=>$('lessonCheck').scrollIntoView({block:'start',behavior:'smooth'}); } $('miniBack').onclick=()=>{openLesson=null;renderLessonHome();}; return; } };
    ask(); };""")

# 4. two devices: keep the furthest place in each deck of each lesson
rep("""m.drills=Object.assign({},a.drills,b.drills);""",
    """m.drills=Object.assign({},a.drills,b.drills); m.lsec={}; [a.lsec,b.lsec].forEach(o=>{ Object.keys(o&&typeof o==='object'?o:{}).forEach(id=>{ const t=m.lsec[id]=m.lsec[id]||{}; Object.keys(o[id]&&typeof o[id]==='object'?o[id]:{}).forEach(k=>{ t[k]=Math.max(+t[k]||0,+o[id][k]||0); }); }); });""")

open(F, 'w', encoding='utf8').write(s)
print('lesson_sections: src/app.html patched')
