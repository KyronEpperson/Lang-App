#!/usr/bin/env python3
# WS-1: harness.js follows the two-step welcome (nickname, then optional email) and gains the guard `welcomeSteps`. Safe to run twice.
import os, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
F = os.path.join(ROOT, 'harness.js')
s = open(F, encoding='utf8').read()
DONE = 'welcomeSteps' in s
if not DONE:
    def rep(a, b):
        global s
        assert s.count(a) == 1, (s.count(a), a[:80]); s = s.replace(a, b)
    rep("await p.evaluate(()=>{ document.querySelector('#wNick').click(); }); await p.fill('#wNickIn','Tester'); await p.evaluate(()=>document.querySelector('#wForm').requestSubmit()); await p.waitForTimeout(200);",
        "await p.fill('#wNickIn','Tester'); await p.evaluate(()=>document.querySelector('#wForm').requestSubmit()); await p.waitForTimeout(120); await p.evaluate(()=>document.querySelector('#wSkip').click()); await p.waitForTimeout(200);")
    rep("showWelcome(); const w=document.getElementById('welcome'); const t1=w.innerText; w.querySelector('#wNick').click(); await new Promise(z=>setTimeout(z,90)); const t2=w.innerText+' '+w.querySelector('#wNickIn').placeholder;\n      w.querySelector('#wNickIn').value='T'; w.querySelector('#wForm').requestSubmit(); await new Promise(z=>setTimeout(z,200));",
        "showWelcome(); const w=document.getElementById('welcome'); const t1=w.innerText+' '+w.querySelector('#wNickIn').placeholder;\n      w.querySelector('#wNickIn').value='T'; w.querySelector('#wForm').requestSubmit(); await new Promise(z=>setTimeout(z,90)); const t2=w.innerText; w.querySelector('#wSkip').click(); await new Promise(z=>setTimeout(z,200));")
    rep("const enLine=/How should we save your progress\\?/.test(t1)", "const enLine=/What should we call you\\?/.test(t1)&&/Save your progress across devices\\?/.test(t2)")
    rep("/진도를 어떻게 저장할까요\\?/.test(t1)", "/어떻게 불러 드릴까요\\?/.test(t1)&&/진도를 여러 기기에 저장할까요\\?/.test(t2)")
    rep("if(!/📧 メール/.test(t)||/Email ·/.test(t)||ALLH(t)", "if(w.querySelector('#wNickIn').placeholder!=='ニックネーム'||w.querySelector('#wEmail')||ALLH(t)")
    rep("w.querySelector('#wNick').click(); await new Promise(z=>setTimeout(z,90)); w.querySelector('#wNickIn').value='J'; w.querySelector('#wForm').requestSubmit(); await new Promise(z=>setTimeout(z,250));",
        "w.querySelector('#wNickIn').value='J'; w.querySelector('#wForm').requestSubmit(); await new Promise(z=>setTimeout(z,90)); w.querySelector('#wSkip').click(); await new Promise(z=>setTimeout(z,250));")
    A = "  res.checks.fxPreNative=out; mc.fxPreNative=Object.values(out).every(v=>v===true); }\n"
    G = r"""{ // WS-1: the welcome screen asks one thing per screen: nickname first, then the optional email with "Skip for now"; nothing is chosen side by side
      const {ctx,p}=await newCtx(null,'en-US');
      mc.welcomeSteps=await p.evaluate(async()=>{ const z=ms=>new Promise(r=>setTimeout(r,ms||90)); const q=s=>document.querySelector('#welcome '+s); const lh0=document.getElementById('langHome'); if(lh0) lh0.remove(); const old=document.getElementById('welcome'); if(old) old.remove();
        S.nick=''; S.welcomed=0; showWelcome();
        if(!q('#wNickIn')||q('#wMail')||q('#wEmail')||q('#wNick')||q('.choice')||!q('#wHave')||!q('#wPriv')||!/1 \/ 2/.test(q('.wbox').innerText)) return 'step1 '+q('.wbox').innerText.slice(0,120);
        q('#wForm').requestSubmit(); await z(); if(!q('#wNickIn')||S.nick) return 'empty nickname accepted';
        q('#wNickIn').value='  Mina  '; q('#wForm').requestSubmit(); await z();
        if(S.nick!=='Mina'||S.welcomed||!q('#wMail')||!q('#wSkip')||q('#wNickIn')||!/2 \/ 2/.test(q('.wbox').innerText)||!/Optional\./.test(q('.wbox').innerText)||!/Add an email later in Progress/.test(q('.wbox').innerText)) return 'step2 '+q('.wbox').innerText.slice(0,160);
        if(document.activeElement===q('#wMail')) return 'email focused (keyboard would cover Skip on a phone)';
        q('#wBack').click(); await z(); if(!q('#wNickIn')||q('#wNickIn').value!=='Mina') return 'back lost the nickname';
        q('#wHave').click(); await z(); if(!q('#wMail')||q('#wSkip')||/2 \/ 2/.test(q('.wbox').innerText)) return 'have-account step';
        q('#wBack').click(); await z(); q('#wForm').requestSubmit(); await z(); q('#wSkip').click(); await z(200);
        if(document.getElementById('welcome')||!S.welcomed||S.nick!=='Mina'||welcomeNeeded()) return 'skip did not finish';
        const h=document.getElementById('langHome'); if(h) h.remove(); return true; }).catch(e=>'ERR '+e.message);
      await ctx.close(); }
    """
    assert s.count(A) == 1
    s = s.replace(A, A + G)
    open(F, 'w', encoding='utf8').write(s)
    print('welcome_steps_harness: applied')
# site test: walk the two steps instead of clicking the last of the old side-by-side choices
F2 = os.path.join(ROOT, 'tools', 'site', 'lazy.js'); t = open(F2, encoding='utf8').read()
a2 = "if(w){const bs=w.querySelectorAll('.choice');bs[bs.length-1].click();}});await p.waitForTimeout(600);"
b2 = "if(w){const i=w.querySelector('#wNickIn');i.value='tester';w.querySelector('#wForm').requestSubmit();}});await p.waitForTimeout(300);await p.evaluate(()=>{const s=document.querySelector('#welcome #wSkip');if(s)s.click();});await p.waitForTimeout(600);"
assert t.count(a2) + t.count(b2) == 1; open(F2, 'w', encoding='utf8').write(t.replace(a2, b2)); print('lazy.js updated')
# quiz flow test: the welcome screen now opens on the nickname box (focused), so the test closes it before pressing keys
F3 = os.path.join(ROOT, 'tools', 'tests', 'quizflow.js'); t = open(F3, encoding='utf8').read()
a3 = "await p.evaluate(()=>{ S.onboard={skipped:1}; S.hintSeen=1; window.__said=[];"
b3 = "await p.evaluate(()=>{ document.querySelectorAll('.welcome').forEach(x=>x.remove()); if(document.activeElement&&document.activeElement.blur) document.activeElement.blur(); S.welcomed=1; S.onboard={skipped:1}; S.hintSeen=1; window.__said=[];"
assert t.count(a3) + t.count(b3) == 1; open(F3, 'w', encoding='utf8').write(t.replace(a3, b3)); print('quizflow.js updated')
