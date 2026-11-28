/* LP-1 (course report "Do the courses teach the language?", solutions 1 to 5): the learn-loop pilot. On only for the courses in LP_ON; every other course behaves as before. docs/briefs/learn-loop-pilot.md */
function lpOn(){ return !!(COURSE&&!COURSE.builtin&&LP_ON[COURSE.id]); }
function lpHear(){ return !!(COURSE&&!COURSE.noAudio&&(koVoice||(CLIPS&&CLIPS.size))); } /* a voice or recorded clips: listening questions are possible */
function lpPracNeeded(id){ return lpOn()&&pracItems(id).length>0&&!(((S.practice||{})[id]||{}).n>0); } /* solution 1: the practice set is part of finishing a lesson (no pass mark: one finished run) */
function lsFinish(id){ if(S.lessons[id]||!(S.checks||{})[id]||!(S.drills||{})[id]||lpPracNeeded(id)) return false; S.lessons[id]=1; award(25); toast('Lesson done. +25 XP'); fx3('celebrate','lesson'); save(); return true; }
function lpLead(id){ const e=$('pracEntry'); if(!e||!lpOn()) return; const need=!S.lessons[id]&&!!(S.checks||{})[id]&&!!(S.drills||{})[id]&&lpPracNeeded(id); e.classList.toggle('lp-need',need); const b=$('pracStart'); if(b) b.className='big '+(need?'primary':'hit'); }
function quizRomOn(){ return S.quizRom===false?false:S.quizRom===true?true:!(lpOn()&&LESSONS.length>0&&!!S.lessons[LESSONS[0].id]); } /* solution 5: once the sounds lesson is done the pronunciation line is off in quizzes unless the learner turned it on; lessons and new cards keep it */
function lpWords(c){ return String(c[0]).trim().split(/\s+/).filter(Boolean); }
function lpMake(d,c){ const f=String(c[0]); return lpOn()&&!isLetterDeck(d)&&!isScriptDeck(d)&&!soundCard(d,c)&&!!c[2]&&f.replace(/\s/g,'').length>=2&&!/[\/…_()]/.test(f); } /* a card that can be asked by making it: tiles or typing */
function lpCore(w){ return String(w).replace(/^[¿¡"“«(]+/,'').replace(/[.,;:!?"”»)…]+$/,''); }
function lpSentStage(d,c){ /* solution 2: tiles first, then a gap, then typed, as the judge's memory of the sentence grows */ if(lpWords(c).length<3) return ''; const m=mjRead(cardState(d,c)); return !m||m.st<2?'tiles':m.st<7?'gap':'input'; }
function lpSentLeft(){ const t=S.lpDay; return Math.max(0,LP_SENT_DAY-(t&&t.d===dkey()?(+t.n||0):0)); }
function lpSentDue(max){ /* lesson-only cards (hidden decks) the learner has met and that are due: they share the day's review with a cap of their own */ if(!lpOn()) return []; const q=[], seen={};
  LESSONS.forEach(l=>{ if(!(S.lsec||{})[l.id]&&!S.lessons[l.id]&&!(S.drills||{})[l.id]) return; lsPlan(l).all.forEach(x=>{ const k=ck(x.d,x.c), s=S.cards[k]; if(!s||seen[k]||!lsHid(k)||s.leech||!isDue(x.d,x.c)) return; seen[k]=1; q.push({d:x.d,c:x.c}); }); });
  return orderReviews(q).slice(0,Math.min(max==null?LP_SENT_DAY:max,lpSentLeft())).map(x=>({d:x.d,c:x.c,sent:1})); }
function renderMakeQ(container,d,c,onAnswer,opt){ /* a card asked by making it. Modes: tiles (words in order), letters (one word from its letters), input (typed), gap (one word of the sentence missing). opt.stage picks the mode, opt.listen asks from the sound alone, opt.sent counts toward the day's sentence reviews. It grades the card itself (quizGrade) */
  opt=opt||{}; cardShownAt=Date.now(); const front=String(c[0]).trim(), words=lpWords(c), say=front.replace(/"/g,'&quot;');
  const other=[]; { const have=new Set(words.map(w=>normT(lpCore(w)))), pool=[]; (DECKS[d]||[]).forEach(x=>{ if(x!==c) lpWords(x).forEach(w=>pool.push(w)); }); if(pool.length<8) names.forEach(n=>{ if(pool.length<60&&n!==d) DECKS[n].slice(0,12).forEach(x=>lpWords(x).forEach(w=>pool.push(w))); }); shuffle(pool).forEach(w=>{ const k=normT(lpCore(w)); if(other.length<3&&k&&!have.has(k)&&!/[\/…_()]/.test(w)){ have.add(k); other.push(w); } }); }
  let mode=opt.stage||''; if(mode==='gap'&&words.length<3) mode=''; if(mode==='tiles'&&words.length<2) mode=''; if(mode==='input'&&kbT()) mode='';
  if(!mode) mode=words.length>=3?'tiles':kbT()?(words.length>=2?'tiles':'letters'):'input';
  let gi=-1, gap=''; if(mode==='gap'){ const idx=words.map((w,i)=>i).filter(i=>lpCore(words[i]).length>=3); const late=idx.filter(i=>i>0); gi=late.length?pick(late):idx.length?idx[0]:-1; if(gi<0) mode='tiles'; else gap=lpCore(words[gi]); }
  const gpick=mode==='gap'&&kbT(), gopts=gpick?shuffle([gap].concat(other.map(lpCore).filter(x=>x&&normT(x)!==normT(gap)).slice(0,3))):[];
  let tiles=[]; if(mode==='tiles') tiles=words.concat(other.slice(0,words.length>=5?2:1)); else if(mode==='letters'){ const L=[...front], ex=[...other.join('')].filter(ch=>/\S/.test(ch)&&L.indexOf(ch)<0).slice(0,2); tiles=L.concat(ex); }
  if(tiles.length){ for(let n=0;n<8;n++){ shuffle(tiles); if(tiles.slice(0,mode==='tiles'?words.length:[...front].length).join(mode==='tiles'?' ':'')!==(mode==='tiles'?words.join(' '):front)) break; } }
  const chosen=[]; let locked=false, ok=false, fin=false, tm=null, val='';
  const head=opt.listen?`<div style="text-align:center;padding:10px 0"><button class="speak qlisten" data-say="${say}" type="button" style="font-size:1.1rem;padding:12px 22px">🔊 Replay</button><div class="stat" style="margin-top:6px">${pesc(LL('Listen, then build what you heard'))}</div></div>`
    :mode==='gap'?`<div class="q small pc" lang="${COURSE.target}">${words.map((w,i)=>i===gi?pesc(w).replace(pesc(gap),'<span class="prac-gap lp-gap">&nbsp;</span>'):pesc(w)).join(' ')}</div><div class="stat" style="text-align:center;margin-top:6px">${c[2]}</div>`
    :`<div class="q small">${c[2]}</div>`;
  const kind=mode==='tiles'?LL('Put the words in order'):mode==='letters'?LL('Spell it'):mode==='gap'?LL('Fill the gap'):LL('Type it in '+tgtName(),tgtName()+'로 입력하세요');
  const draw=()=>{ let body='';
    if(mode==='tiles'||mode==='letters'){ const used=new Set(chosen); body=`<div class="built lp-built">${chosen.map((k,n)=>`<button class="chip" data-un="${n}" type="button" ${locked?'disabled':''}>${pesc(tiles[k])}</button>`).join('')||'<span class="stat">…</span>'}</div><div class="pool lp-pool">${tiles.map((w,k)=>used.has(k)?'':`<button class="chip" data-w="${k}" type="button" ${locked?'disabled':''}>${pesc(w)}</button>`).join('')}</div>`; }
    else if(gpick) body=`<div class="opts">${gopts.map((o,k)=>`<button class="opt" data-g="${k}" type="button" ${locked?'disabled':''}>${pesc(o)}</button>`).join('')}</div>`;
    else body=`<form class="lp-form" style="margin-top:12px;display:grid;grid-template-columns:1fr auto;gap:8px"><input class="ans" lang="${COURSE.target}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="go" value="${pesc(val)}" ${locked?'disabled':''}><button class="big primary" type="submit" style="padding:0 18px" ${locked?'disabled':''}>Check</button></form>`;
    container.innerHTML=`<div class="lpq" data-mode="${mode}">${head}<div class="stat lp-kind" style="text-align:center;margin-top:6px">${pesc(kind)}</div>${body}<div class="fb"></div><div class="row lp-row" style="margin-top:10px"><button class="ghost lp-show" type="button" ${locked?'hidden':''}>${pesc(LL('Show answer'))}</button>${mode==='tiles'||mode==='letters'?`<button class="big primary lp-chk" type="button" style="padding:10px 16px" ${chosen.length&&!locked?'':'disabled'}>Check</button>`:''}</div><button class="big primary next" style="width:100%;margin-top:12px" hidden>Next</button></div>`;
    const f=container.querySelector('.lp-form'); if(f){ f.addEventListener('submit',e=>{ e.preventDefault(); if(locked) return; const v=f.querySelector('.ans').value; if(!v.trim()) return; val=v; done(pracMatch(v,[mode==='gap'?gap:front])); }); if(!locked) setTimeout(()=>{ try{ f.querySelector('.ans').focus({preventScroll:true}); }catch(e){} },50); } };
  const done=right=>{ if(locked) return; locked=true; ok=!!right; draw(); const inp=container.querySelector('.ans'); if(inp) inp.className='ans '+(ok?'right':'wrong');
    container.querySelector('.fb').innerHTML=(ok?'<b style="color:var(--ok)">'+okW(1)+'</b> '+c[0]+' · '+c[1]:'<b data-noi18n>'+c[0]+'</b> = '+c[2]+' · '+c[1])+` <button class="speak" data-say="${say}" type="button" style="padding:2px 8px;font-size:.7rem">🔊</button>`;
    quizGrade(d,c,ok,gpick?'pick':'type'); if(opt.sent){ const t=S.lpDay&&S.lpDay.d===dkey()?S.lpDay:{d:dkey(),n:0}; t.n=(+t.n||0)+1; S.lpDay=t; } ansFx(ok); award(ok?5:1); save();
    setTimeout(()=>{ if(!fin) speak(c[0],container.querySelector('.fb .speak')); },ANS_SAY);
    const n=container.querySelector('.next'); if(S.autoNext===false){ n.hidden=false; try{ n.focus({preventScroll:true}); }catch(e){} } else tm=setTimeout(go,ok?ANS_NEXT_OK+600:2800); };
  const go=()=>{ if(fin||!locked) return; fin=true; clearTimeout(tm); document.removeEventListener('keydown',key); onAnswer(ok); };
  const key=e=>{ if(locked&&(e.key==='Enter'||e.key===' ')){ e.preventDefault(); go(); } };
  container.onclick=e=>{ const t=e.target.closest('button'); if(locked){ if(t&&t.classList.contains('speak')){ clearTimeout(tm); container.querySelector('.next').hidden=false; return; } if(e.target.closest('.lpq')) go(); return; } if(!t) return;
    if(t.dataset.w!=null){ chosen.push(+t.dataset.w); draw(); } else if(t.dataset.un!=null){ chosen.splice(+t.dataset.un,1); draw(); }
    else if(t.dataset.g!=null){ done(normT(gopts[+t.dataset.g])===normT(gap)); }
    else if(t.classList.contains('lp-chk')){ const txt=chosen.map(k=>tiles[k]).join(mode==='tiles'?' ':''); done(normT(txt)===normT(front)); }
    else if(t.classList.contains('lp-show')){ done(false); } };
  draw(); document.addEventListener('keydown',key); if(opt.listen) setTimeout(()=>{ const b=container.querySelector('.qlisten'); if(b&&!fin) speak(c[0],b); },150);
  return ()=>{ fin=true; clearTimeout(tm); document.removeEventListener('keydown',key); container.onclick=null; }; }
/* solution 4: a mixed checkpoint after every LP_CP lessons, drawn from the practice sets so far and weighted to what was missed */
function lpCps(){ if(!lpOn()) return []; const N=LESSONS.length, o=[]; for(let i=LP_CP;i<=N;i+=LP_CP) o.push(i); const last=o.length?o[o.length-1]:0; if(o.length&&N-last>0&&N-last<3) o[o.length-1]=N; else if(N-last>=3) o.push(N); return o; }
function lpCpTitle(n){ return LL('Checkpoint · lessons 1 to '+n); }
function lpCpOpenOk(n){ return n>0&&n<=LESSONS.length&&(!!S.lessons[LESSONS[n-1].id]||!!S.free); }
function lpCanDo(n,m){ /* a reply in a situation, built from the dialogues of the decks these lessons teach */ const decks={}; LESSONS.slice(0,n).forEach(l=>{ decks[l.deck]=1; }); const all=Object.keys(DIALOG), out=[];
  const keys=shuffle(all.filter(k=>{ const b=String(DIALOG[k][1]||'').trim().split(/\s+/); return b.length>=2&&b.length<=7&&decks[dialogDeck(k)]; }));
  keys.slice(0,m).forEach(k=>{ const a=DIALOG[k][0], b=DIALOG[k][1], t=String(DIALOG[k][2]||'').split(' / '), words=String(b).trim().split(/\s+/), have=new Set(words), x=[];
    shuffle(all.slice()).some(o=>{ String(DIALOG[o][1]||'').split(/\s+/).forEach(w=>{ if(w&&!have.has(w)&&x.length<2){ have.add(w); x.push(w); } }); return x.length>=2; });
    out.push({t:'order',cando:1,p:LL('Someone says: ')+(tlOn()?'‹'+a+'›':'“'+a+'”')+(t[0]?' ('+t[0]+')':'')+'. '+LL('Reply: ')+(t[1]||''),a:words,x,why:''}); }); return out; }
function lpCpItems(n){ const pool=[], want={mc:5,order:5,fill:4,type:4}, got={mc:0,order:0,fill:0,type:0}, per={}, cap=Math.max(3,Math.ceil(18/n)+1), out=[];
  LESSONS.slice(0,n).forEach((l,i)=>{ const miss=(S.pmiss||{})[l.id]||[]; pracItems(l.id).forEach((it,k)=>{ const w=(miss.indexOf(k)>=0?3:1)*(i>=n-LP_CP?1.5:1); pool.push({it,les:l.id,k,r:Math.pow(Math.random(),1/w)}); }); });
  pool.sort((a,b)=>b.r-a.r).forEach(x=>{ const t=x.it.t; if(!(t in want)||got[t]>=want[t]||(per[x.les]||0)>=cap) return; got[t]++; per[x.les]=(per[x.les]||0)+1; out.push(Object.assign({},x.it,{les:x.les,ki:x.k})); });
  const rank={mc:0,order:1,fill:2,type:3}; out.sort((a,b)=>rank[a.t]-rank[b.t]); return out.concat(lpCanDo(n,2)); }
function lpCpOpen(n){ if(!lpCpOpenOk(n)) return false; const items=lpCpItems(n); if(!items.length) return false; if(cleanup){ try{ cleanup(); }catch(e){} cleanup=null; } closeSheet(); openLesson=null;
  PR={id:'cp:'+n,cp:n,items,i:0,tries:0,done:false,first:[],st:null,saved:false}; $('lessonHome').hidden=true; const b=$('lessonBody'); b.hidden=false;
  b.innerHTML='<div class="panel prac" id="pracRun" data-noi18n></div>'; const box=$('pracRun'); box.addEventListener('click',pracClick); window.scrollTo(0,0); pracItem(); return true; }
function lpCpRow(n){ if(lpCps().indexOf(n)<0) return ''; const st=(S.practice||{})['cp:'+n], un=lpCpOpenOk(n); return `<button class="lesson-btn lp-cp" type="button" data-cp="${n}" ${un?'':'disabled'}><span data-noi18n><b>${pesc(lpCpTitle(n))}</b><span>${pesc(LL('About 20 mixed questions from the lessons so far. No pass mark.'))}</span></span><span class="pill ${st?'done':''}">${st?'✓ '+Math.round((+st.last||0)*100)+'%':un?'~8 min':'🔒'}</span></button>`; }
function lpCpCta(id){ const n=LESSONS.findIndex(x=>x.id===id)+1; if(n<1||lpCps().indexOf(n)<0||!S.lessons[id]||(S.practice||{})['cp:'+n]) return ''; return `<div class="ls-next lp-cta" data-noi18n><div class="stat" style="margin-bottom:8px">${pesc(LL('Checkpoint · mixed practice, no pass mark'))}</div><button class="big primary" type="button" data-cp="${n}" style="width:100%">${pesc(lpCpTitle(n))}</button></div>`; }
function lpLesLink(id){ const l=LESSONS.find(x=>x.id===id); return l?`<button class="ghost prac-les" type="button" data-les="${pesc(id)}">${pesc(LL('Lesson'))} · <span class="pc">${escT(lessonName(l))}</span></button>`:''; }
function lpPracSaved(){ /* after a finished practice run: remember which items were missed on the first try (the checkpoint weights them), and finish the lesson if this was its last step */ if(!PR) return; S.pmiss=S.pmiss||{};
  if(PR.cp){ PR.items.forEach((it,i)=>{ if(!it.les||it.ki==null) return; const a=(S.pmiss[it.les]||[]).filter(k=>k!==it.ki); if(!PR.first[i]) a.push(it.ki); S.pmiss[it.les]=a; }); save(); return; }
  S.pmiss[PR.id]=PR.items.map((it,i)=>PR.first[i]?-1:i).filter(i=>i>=0); save(); lsFinish(PR.id); }
document.addEventListener('click',e=>{ const b=e.target.closest&&e.target.closest('[data-cp]'); if(b&&!b.disabled){ e.preventDefault(); lpCpOpen(+b.dataset.cp); } });
