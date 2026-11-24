#!/usr/bin/env python3
# 2.93.0: romanization under every Korean word in lessons (assertion-guarded edits to src/app.html)
import io
P='/home/claude/src/app.html'
s=io.open(P,encoding='utf8').read()
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (s.count(a), a[:80])
    s=s.replace(a,b)
# 1. styles
rep(".rom{font-family:var(--mono);font-size:.95rem;color:var(--accent)}",
    ".rom{font-family:var(--mono);font-size:.95rem;color:var(--accent)}\n"
    "ruby.rb{ruby-position:under;-webkit-ruby-position:after;ruby-align:center;white-space:nowrap}\n"
    "ruby.rb rt{font-family:var(--mono);font-size:.62em;font-weight:500;line-height:1.25;letter-spacing:0;color:var(--accent);-webkit-user-select:none;user-select:none}\n"
    "body.noqrom ruby.rb rt{display:none}\n"
    ".lsromrow{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}")
# 2. engine
rep("function lessonBody(l){",
    "/* Lessons: the romanization of every Korean word is written under it (ruby), as on the cards. Skipped where the Korean is itself a sound respelling or the quiz asks how a block reads. */\n"
    "const ROM_SKIP={'sound-changes':1}, ROM_SKIP_Q={'sound-changes':1,hangul:1}, ROM_J={'ㄹ':'l','ㄴ':'n','ㅁ':'m','ㅆ':'ss'};\n"
    "function romAnnotate(root){ if(!root||!COURSE||COURSE.target!=='ko') return; const SK='.ex .k,.ex .r,.ex .sp,.sgl,ruby,rt,svg,script,style,input,textarea,.rom,[data-norom]'; const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); const nodes=[]; let n; while((n=tw.nextNode())){ if(/[가-힣]/.test(n.nodeValue)&&n.parentElement&&!n.parentElement.closest(SK)) nodes.push(n); }\n"
    "  nodes.forEach(nd=>{ const t=nd.nodeValue, frag=document.createDocumentFragment(), re=/([ㄱ-ㅎ]?)([가-힣]+)/g; let last=0, m; while((m=re.exec(t))){ let r=''; try{ r=romanize(m[2]); }catch(e){ r=''; } if(!r||/[가-힣]/.test(r)) continue; let from=m.index, base=m[0]; if(m[1]){ const j=m[1]==='ㅂ'&&m[2].charAt(0)==='니'?'m':ROM_J[m[1]]; if(j) r=j+(j==='l'&&r.charAt(0)==='r'?'l'+r.slice(1):r); else { from=m.index+1; base=m[2]; } } { const nx=t.slice(re.lastIndex,re.lastIndex+r.length+6).toLowerCase().replace(/^[\\s,=(:]+/,''); if(nx.indexOf(r.toLowerCase())===0&&!/[a-z]/.test(nx.charAt(r.length))) continue; } frag.append(t.slice(last,from)); const rb=document.createElement('ruby'); rb.className='rb'; rb.append(base); const rt=document.createElement('rt'); rt.textContent=r; rb.append(rt); frag.append(rb); last=re.lastIndex; } if(last){ frag.append(t.slice(last)); nd.replaceWith(frag); } }); }\n"
    "function lsRom(root,id,quiz){ try{ if((quiz?ROM_SKIP_Q:ROM_SKIP)[id]) return; romAnnotate(root); }catch(e){} }\n"
    "function lessonBody(l){")
# 3. lesson page: toggle + annotate body
rep("""b.innerHTML = `<div class="panel"><button class="ghost" id="lessonBack">← All lessons</button><h2 style="margin-top:12px">${l.title}</h2>${lessonBody(l)}""",
    """b.innerHTML = `<div class="panel"><div class="lsromrow"><button class="ghost" id="lessonBack">← All lessons</button>${COURSE.target==='ko'&&!ROM_SKIP[id]?'<button class="ghost qromT" id="lsRomT" type="button" data-noi18n></button>':''}</div><h2 style="margin-top:12px">${l.title}</h2><div id="lsRomBody">${lessonBody(l)}</div>""")
rep("""  window.scrollTo(0,0); { const ps=$('pracStart'); if(ps) ps.onclick=()=>pracOpen(id); }""",
    """  lsRom(b.querySelector('h2'),id); lsRom($('lsRomBody'),id); { const rt=$('lsRomT'); if(rt){ rt.onclick=()=>setQuizRom(S.quizRom===false); applyQuizRom(); } }
  window.scrollTo(0,0); { const ps=$('pracStart'); if(ps) ps.onclick=()=>pracOpen(id); }""")
# 4. quick check: options and the explanation
rep("""<div class="fb" style="text-align:left"></div>`;
      body.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{ if(body.dataset.lock) return; body.dataset.lock=1; const ok=+b.dataset.k===q[2];""",
    """<div class="fb" style="text-align:left"></div>`; lsRom(body,id,1);
      body.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{ if(body.dataset.lock) return; body.dataset.lock=1; const ok=+b.dataset.k===q[2];""")
rep("""'<span data-noi18n>'+q[3]+'</span>'; ansFx(ok); award(ok?3:1);""",
    """'<span data-noi18n>'+q[3]+'</span>'; lsRom(body.querySelector('.fb'),id,1); ansFx(ok); award(ok?3:1);""")
# 5. lesson list titles
rep("""  const ub=$('unlockLessons'); if(ub) ub.onclick=()=>{ unlockAll(); renderLessonHome(); }; try{ advApply(); }catch(e){}""",
    """  try{ romAnnotate($('lessonHome').querySelector('.lesson-list')); }catch(e){}
  const ub=$('unlockLessons'); if(ub) ub.onclick=()=>{ unlockAll(); renderLessonHome(); }; try{ advApply(); }catch(e){}""")
# 6. lesson 1 and 2: more explanation
rep("""At the end it sounds like <b>ng</b>: 강 = gang.</div>""",
    """At the end it sounds like <b>ng</b>: 강 = gang.</div>
<div class="tip" style="background:var(--accent-soft)"><b>Not reading Hangul yet?</b> That is normal after one lesson. From here on, every Korean word in the lessons has its pronunciation written underneath in red, so you can follow along while your reading catches up. Tap <b>Aa</b> at the top of a lesson to hide it once you no longer need it.</div>""")
rep("""As a beginner you need two levels:</p>""",
    """As a beginner you need two levels. The polite one is named after its ending, 요, which you simply add to the end of the sentence. Casual speech is called 반말, literally "half speech": the same sentence with the 요 cut off.</p>""")
rep("""set phrases like 감사합니다 and 죄송합니다. Recognize it;""","""set phrases like 감사합니다 (thank you) and 죄송합니다 (I'm sorry). Recognize it;""")
rep("""<li>Saying 감사해요 to a shop owner — fine,""","""<li>Saying 감사해요 (a softer "thank you") to a shop owner — fine,""")
rep("""wait until they say 말 놔도 돼요.</li>""","""wait until they say 말 놔도 돼요 ("you can speak casually").</li>""")
rep("""Mixing levels in one sentence (저는… 먹어) — pick""","""Mixing levels in one sentence (저는… 먹어: the polite "I" with a casual "eat") — pick""")
rep("""["주세요","줘","주십시오","줄래"],0,"요-form is the default with strangers and staff."]""",
    """["주세요","줘","주십시오","줄래"],0,"주세요 = 'please give me', the 요-form of 주다 (to give): the default with strangers and staff. 줘 and 줄래 are casual; 주십시오 is formal, too stiff for a café."]""")
io.open(P,'w',encoding='utf8').write(s)
print('ok')
