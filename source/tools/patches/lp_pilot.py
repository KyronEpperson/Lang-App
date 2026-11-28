#!/usr/bin/env python3
"""LP-1: the learn-loop pilot (course report, solutions 1 to 5), on for en-es only. Run from the build home: python3 tools/patches/lp_pilot.py
1 practice set is part of finishing a lesson + a making step in the lesson quiz · 2 lesson-only sentences return in review as tiles, gap, typed ·
3 listening in every session · 4 a mixed checkpoint every five lessons · 5 the pronunciation line is off in quizzes after the sounds lesson.
Assertion-guarded; a second run changes nothing. The code block is tools/patches/lp/lp.js."""
import io
p='src/app.html'
s=io.open(p,encoding='utf8').read()
if 'function lpOn(' in s:
    print('lp_pilot: already applied'); raise SystemExit(0)
def rep(a,b,n=1):
    global s
    assert s.count(a)==n,(a[:80],s.count(a))
    s=s.replace(a,b)
js=io.open('tools/patches/lp/lp.js',encoding='utf8').read().rstrip('\n')
assert '//' not in js.replace('https://','') , 'no // comments in the app'
# 0. the code block
rep("const LS_EX='§',", "const LP_ON={'en-es':1}, LP_CP=5, LP_SENT_DAY=10; /* LP-1: the courses the learn-loop pilot is on for, lessons per checkpoint, lesson sentences reviewed per day */\nconst LS_EX='§',")
rep("function pracBadge(id){", js+"\nfunction pracBadge(id){")
# a tagged word inside a lesson title stays on the title's line (2.142.0 put each on a line of its own in the lesson list)
rep(".lesson-btn b{display:block;font-size:.98rem}", ".lesson-btn b{display:block;font-size:.98rem}.lesson-btn b b{display:inline;font-size:inherit}")
# 1a. a lesson is done after the check, the review and (pilot) the practice set
rep("function maybeDone(){ if(!S.lessons[id] && S.checks[id] && S.drills && S.drills[id]){ S.lessons[id]=1; award(25); toast('Lesson done. +25 XP'); fx3('celebrate','lesson'); save(); const sl=$('lsNext');",
    "function maybeDone(){ lpLead(id); if(lsFinish(id)){ const sl=$('lsNext');")
rep("${S.lessons[id]?'(lesson already done)':'· lesson counts as done when both are passed (+25 XP)'}",
    "${S.lessons[id]?'(lesson already done)':lpOn()&&pracItems(id).length?'· the lesson counts as done after the quick check, this review and the practice set (+25 XP)':'· lesson counts as done when both are passed (+25 XP)'}")
rep("maybeDone(); if(pass&&!S.lessons[id]&&$('miniStart')){", "maybeDone(); if(pass&&!S.lessons[id]&&!(S.drills||{})[id]&&$('miniStart')){")
rep("${S.lessons[id]?' · lesson done ✓':' · now pass the quick check above'}",
    "${S.lessons[id]?' · lesson done ✓':S.checks[id]&&lpPracNeeded(id)?' · last step: the practice set':' · now pass the quick check above'}")
rep("""(!S.lessons[id]?'<button class="big primary" id="toCheck" type="button" style="width:100%;margin-top:10px">Quick check</button>':'')}</div>`; { const tc=$('toCheck');""",
    """(!S.lessons[id]?(S.checks[id]&&lpPracNeeded(id)?'<button class="big primary" id="toPrac" type="button" style="width:100%;margin-top:10px">Practice</button>':'<button class="big primary" id="toCheck" type="button" style="width:100%;margin-top:10px">Quick check</button>'):'')}</div>`; { const tp=$('toPrac'); if(tp) tp.onclick=()=>pracOpen(id); } { const tc=$('toCheck');""")
rep("""<button class="big hit" id="pracStart" type="button">✍️ ${LL('Practice','연습')} · ${n}</button><p class="stat">${sub}</p></div>`; }""",
    """<button class="big ${lpPracNeeded(id)&&(S.checks||{})[id]&&(S.drills||{})[id]?'primary':'hit'}" id="pracStart" type="button">✍️ ${LL('Practice','연습')} · ${n}</button><p class="stat">${sub}</p>${lpOn()&&!S.lessons[id]?'<p class="stat lp-last">'+pesc(LL('Last step: finishing this set completes the lesson. There is no pass mark.'))+'</p>':''}</div>`; }""")
rep("S.practice[id]={n:(+prev.n||0)+1,first:Math.max(+prev.first||0,r),last:r,ts:Date.now()}; save(); if(r>=0.8) fx3('celebrate','quiz'); }",
    "S.practice[id]={n:(+prev.n||0)+1,first:Math.max(+prev.first||0,r),last:r,ts:Date.now()}; save(); if(r>=0.8) fx3('celebrate','quiz'); lpPracSaved(); }")
rep("un?'~5 min':'🔒'}</span></button>`; }).join('')", "un?(lpOn()?'~15 min':'~5 min'):'🔒'}</span></button>`+lpCpRow(i+1); }).join('')")
# 1b. the second question on a new card is made, not picked; the lesson review mixes making in
rep("fresh.forEach(x=>{ qs.push({d:x.d,c:x.c,mode:'read'}); qs.push({d:x.d,c:x.c,mode:'recall'}); });",
    "fresh.forEach(x=>{ qs.push({d:x.d,c:x.c,mode:'read'}); qs.push({d:x.d,c:x.c,mode:lpMake(x.d,x.c)?'make':'recall'}); });")
rep("const ask=()=>lsQuiz(box,lsMix(pool.map(x=>({d:x.d,c:x.c,mode:pick(['read','recall',m2])}))),'Review',",
    "const ask=()=>lsQuiz(box,lsMix(pool.map(x=>({d:x.d,c:x.c,mode:pick(['read',lpMake(x.d,x.c)?'make':'recall',lpOn()&&lpHear()?'listen':m2])}))),'Review',")
rep("  if(mode==='type') return renderTypeQ(container, d, c, onAnswer);\n", "  if(mode==='type') return renderTypeQ(container, d, c, onAnswer);\n  if(mode==='make') return renderMakeQ(container, d, c, onAnswer); /* LP-1 */\n")
# 2. lesson-only sentences return: Review (All due) and sessions
rep("queue = d===ALLDUE ? dueQueue() : cardsMode==='due' ?", "queue = d===ALLDUE ? dueQueue().concat(lpSentDue()) : cardsMode==='due' ?")
rep("  const {d,c}=queue[qi];\n    cleanup=renderReviewQ(stage,d,c,ok=>{",
    "  const {d,c}=queue[qi];\n  if(queue[qi].sent){ rvKeys(''); cleanup=renderMakeQ(stage,d,c,()=>{ rvCount++; qi++; chips(); renderCardsStage(); },{sent:1,stage:lpSentStage(d,c)}); return; } /* LP-1: a lesson sentence, made not picked */\n    cleanup=renderReviewQ(stage,d,c,ok=>{")
rep("function dueCount(){ let n=0; names.forEach(d=>DECKS[d].forEach(c=>{ if(isDue(d,c)) n++; })); return n; }",
    "function dueCount(){ let n=0; names.forEach(d=>DECKS[d].forEach(c=>{ if(isDue(d,c)) n++; })); return n+lpSentDue().length; }")
rep("orderReviews(due.map(x=>({d:x.d,c:x.c}))).slice(0,sz.due).forEach(x=>items.push({t:'card',d:x.d,c:x.c,isNew:false}));",
    "const sd=lpSentDue(sz.due>=12?4:sz.due>=6?2:1); /* LP-1: due lesson sentences take part of the session's review share */ orderReviews(due.map(x=>({d:x.d,c:x.c}))).slice(0,Math.max(0,sz.due-sd.length)).forEach(x=>items.push({t:'card',d:x.d,c:x.c,isNew:false})); sd.forEach(x=>items.push({t:'sent',d:x.d,c:x.c}));")
# 3. listening in every session: two audio-first questions, the dialogue in a standard session, new cards heard first
rep("mode:pick(koVoice?['read','read','listen','recall']:['read','read','recall'])}));",
    "mode:pick(koVoice?['read','read','listen','recall']:['read','read','recall'])}));\n  if(lpOn()&&lpHear()){ const qz=items.filter(x=>x.t==='quiz'); if(qz[0]) qz[0].mode='listen'; const h=qz.find(x=>x!==qz[0]&&lpWords(x.c).length>=3&&lpMake(x.d,x.c)); if(h) h.t='hear'; else if(qz[1]) qz[1].mode='listen'; if(!sz.listen&&sz.fresh&&Object.keys(DIALOG).length>=4) items.push({t:'listen'}); } /* LP-1 */")
rep("  else if(it.t==='role') cleanup=renderRoleQ(",
    "  else if(it.t==='sent'||it.t==='hear') cleanup=renderMakeQ(body,it.d,it.c,ok=>{ logIt(ok); if(it.t==='sent'){ sess.stats.cards++; if(ok) sess.stats.got++; } else { sess.stats.quiz++; if(ok) sess.stats.qok++; } sess.i++; sessStep(); },it.t==='sent'?{sent:1,stage:lpSentStage(it.d,it.c)}:{listen:1,stage:'tiles'}); /* LP-1 */\n  else if(it.t==='role') cleanup=renderRoleQ(")
rep("if(S.listenFirst && !cardState(d,c) && ('speechSynthesis' in window) && userTouched){", "if((S.listenFirst||(lpOn()&&lpHear())) && !cardState(d,c) && userTouched){")
# 4. checkpoint: the practice engine runs it
rep("const it=PR.items[PR.i], N=PR.items.length, l=LESSONS.find(x=>x.id===PR.id)||{title:''};", "const it=PR.items[PR.i], N=PR.items.length, l=PR.cp?{title:lpCpTitle(PR.cp)}:(LESSONS.find(x=>x.id===PR.id)||{title:''});")
rep("type:LL('Write it','직접 써 보세요')}[it.t]+", "type:LL('Write it','직접 써 보세요')}[it.cando?'cando':it.t]+")
rep("const kind={mc:LL('Choose the right one','알맞은 것을 고르세요'),", "const kind={cando:LL('Can you do it? Build your reply'),mc:LL('Choose the right one','알맞은 것을 고르세요'),")
rep("<button class=\"ghost prac-back\" type=\"button\">${BK()} ${LL('Lesson','레슨')}</button>", "<button class=\"ghost prac-back\" type=\"button\">${BK()} ${PR.cp?LL('All lessons'):LL('Lesson','레슨')}</button>")
rep("function pracRule(){ const l=PR&&LESSONS.find(x=>x.id===PR.id);", "function pracRule(){ const l=PR&&LESSONS.find(x=>x.id===((PR.items[PR.i]||{}).les||PR.id));")
rep("if(t.classList.contains('prac-back')||t.classList.contains('prac-done')){ const id=PR.id; PR=null; showLesson(id); return; }",
    "if(t.classList.contains('prac-les')){ PR=null; showLesson(t.dataset.les); return; }\n  if(t.classList.contains('prac-back')||t.classList.contains('prac-done')){ const id=PR.id, cp=PR.cp; PR=null; if(cp){ openLesson=null; renderLessonHome(); window.scrollTo(0,0); } else showLesson(id); return; }")
rep("if(t.classList.contains('prac-again')){ pracOpen(PR.id); return; }", "if(t.classList.contains('prac-again')){ if(PR.cp) lpCpOpen(PR.cp); else pracOpen(PR.id); return; }")
rep("""miss.map(it=>`<li><span class="pc">${pesc(pracPrompt(it))}</span><b class="pc">${pesc(pracModel(it))}</b></li>`)""",
    """miss.map(it=>`<li><span class="pc">${pesc(pracPrompt(it))}</span><b class="pc">${pesc(pracModel(it))}</b>${PR.cp&&it.les?lpLesLink(it.les):''}</li>`)""")
rep("<button class=\"big hit prac-done\" type=\"button\">${LL('Back to lesson','레슨으로')}</button>", "<button class=\"big hit prac-done\" type=\"button\">${PR.cp?LL('All lessons'):LL('Back to lesson','레슨으로')}</button>")
rep("function nextCta(id){ const n=nextLessonAfter(id), d=!!S.lessons[id];", "function nextCta(id){ return lpCpCta(id)+nextCta0(id); }\nfunction nextCta0(id){ const n=nextLessonAfter(id), d=!!S.lessons[id];")
# 5. the pronunciation line in quizzes
rep("function applyQuizRom(){ const on=S.quizRom!==false;", "function applyQuizRom(){ const on=quizRomOn();")
rep("setQuizRom(S.quizRom===false)", "setQuizRom(!quizRomOn())", 3)
# saved state: the missed-item lists and the day's sentence count survive cleaning and a merge of two devices
rep("s.practice=pr; s.kbTiles=!!s.kbTiles; }",
    "s.practice=pr; s.kbTiles=!!s.kbTiles; { const pm={}, src2=(s.pmiss&&typeof s.pmiss==='object'&&!Array.isArray(s.pmiss))?s.pmiss:{}; Object.keys(src2).slice(0,1000).forEach(k=>{ if(k==='__proto__'||k==='constructor'||k==='prototype'||k.length>64||!Array.isArray(src2[k])) return; pm[k]=[...new Set(src2[k].map(x=>Math.round(+x)).filter(x=>x>=0&&x<60))].slice(0,60); }); s.pmiss=pm; if(s.lpDay!=null&&!(typeof s.lpDay==='object'&&typeof s.lpDay.d==='string'&&s.lpDay.d.length<=12&&isFinite(+s.lpDay.n))) delete s.lpDay; } }")
rep("m.practice=pm; m.kbTiles=", "m.practice=pm; { const late=a.updatedAt>=b.updatedAt?a:b, old=late===a?b:a; m.pmiss=Object.assign({},old.pmiss,late.pmiss); const la=a.lpDay, lb=b.lpDay; m.lpDay=la&&lb?(la.d===lb.d?{d:la.d,n:Math.max(+la.n||0,+lb.n||0)}:(la.d>lb.d?la:lb)):(la||lb||undefined); if(!m.lpDay) delete m.lpDay; } m.kbTiles=")
io.open(p,'w',encoding='utf8').write(s)
print('lp_pilot: applied')
