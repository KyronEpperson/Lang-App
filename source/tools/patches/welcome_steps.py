#!/usr/bin/env python3
# WS-1: the welcome screen asks one thing at a time. Step 1 = nickname, step 2 = optional email (save across devices) with "Skip for now".
# Before, step 1 showed "Email" and "Nickname" as two side-by-side choices. Edits src/app.html by assertion-guarded replacement. Safe to run twice.
import os, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
F = os.path.join(ROOT, 'src', 'app.html')
s = open(F, encoding='utf8').read()
if 'WS-1:' in s: print('welcome_steps: already applied'); sys.exit(0)

A = "  const step1=()=>{ w.innerHTML=`<div class=\"wbox\"><div><h1>${LOGO_SVG}Lang App</h1><p class=\"stat\" style=\"margin:6px 0 0\">${escT(preT('How should we save your progress?'"
Z = "  step1(); document.body.appendChild(w); }\n"
assert s.count(A) == 1 and s.count(Z) == 1
a = s.index(A); z = s.index(Z, a)
old = s[a:z]
assert old.count('const step2=') == 1 and old.count('const step3=') == 1 and old.count("w.querySelector('#wNick').onclick=step3") == 1

NEW = r"""  /* WS-1: one question per screen. Step 1 = nickname, step 2 = optional email (save across devices) with "Skip for now". "I already have an account" on step 1 opens the email step without a nickname. The nickname is saved when step 1 is sent, so it is still there after the sign-in link reloads the page. */
  const wDone=()=>{ S.welcomed=1; S.introDay=dkey(); save(); w.remove(); hdr(); askPersist(); maybeLangHome(); playIntro(false); };
  const step1=()=>{ w.innerHTML=`<div class="wbox" data-wstep="1"><div><h1>${LOGO_SVG}Lang App</h1><p class="stat" style="margin:6px 0 0">1 / 2</p></div><h2 style="font:700 1.4rem var(--body);margin:0">${escT(preT('What should we call you?','어떻게 불러 드릴까요?'))}</h2><form id="wForm" style="display:grid;gap:8px"><input class="ans" id="wNickIn" maxlength="24" autocomplete="nickname" placeholder="${B('Nickname','닉네임')}" aria-label="${B('Nickname','닉네임')}" required style="text-align:start;font-size:1rem"><button class="big primary" type="submit">${B('Continue','계속')}</button></form><button class="ghost" type="button" id="wHave">${B('I already have an account','이미 계정이 있어요')}</button><p class="stat" style="margin:0"><a href="#privacy" id="wPriv" style="color:var(--muted)">${B('Privacy & terms','개인정보')}</a></p></div>`;
    w.querySelector('#wNickIn').value=S.nick||''; w.querySelector('#wHave').onclick=()=>step2(true);
    w.querySelector('#wPriv').onclick=e=>{ e.preventDefault(); w.hidden=true; location.hash='#privacy'; const back=()=>{ if(location.hash!=='#privacy'){ w.hidden=false; removeEventListener('hashchange',back); } }; addEventListener('hashchange',back); };
    w.querySelector('#wForm').onsubmit=e=>{ e.preventDefault(); const n=w.querySelector('#wNickIn').value.trim().slice(0,24); if(!n) return; S.nick=n; save(); hdr(); step2(false); }; setTimeout(()=>{ const i=w.querySelector('#wNickIn'); if(i) i.focus(); },50); };
  const step2=have=>{ w.innerHTML=`<div class="wbox" data-wstep="2"><div>${have?'':'<p class="stat" style="margin:0 0 6px">2 / 2</p>'}<h1 style="font-size:1.4rem">${escT(have?preT('Save across devices','모든 기기에 저장하기'):preT('Save your progress across devices?','진도를 여러 기기에 저장할까요?'))}</h1></div>${have?'':`<p class="stat" style="margin:0">${escT(preT('Optional. Add your email and your progress follows you to any phone or computer. No password.','선택 사항이에요. 이메일을 추가하면 어느 휴대폰이나 컴퓨터에서도 진도가 이어져요. 비밀번호는 필요 없어요.'))}</p>`}<form id="wForm" style="display:grid;gap:8px"><input class="ans" id="wMail" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" aria-label="${B('Email','이메일')}" required style="text-align:left;font-size:1rem"><button class="big primary" type="submit">${B('Send sign-in link','링크 보내기')}</button><div class="stat" id="wMsg"></div></form>${have?'':`<div id="wSkipBox" style="display:grid;gap:8px"><button class="big" type="button" id="wSkip" style="background:var(--paper);color:var(--fg);border:1px solid var(--line)">${B('Skip for now','나중에 하기')}</button><p class="stat warn" style="margin:0">${escT(preT('This device only — lost if browser data is cleared. Add an email later in Progress.','이 기기에만 저장돼요. 진도 탭에서 나중에 이메일을 추가할 수 있어요.'))}</p></div>`}<button class="ghost" type="button" id="wBack">${B('← Back','뒤로')}</button></div>`;
    w.querySelector('#wBack').onclick=step1; if(!have) w.querySelector('#wSkip').onclick=wDone;
    w.querySelector('#wForm').onsubmit=async e=>{ e.preventDefault(); const b=w.querySelector('button[type=submit]'); b.disabled=true; const msg=w.querySelector('#wMsg'); msg.textContent='Sending…'; try{ await sbSendLink(w.querySelector('#wMail').value.trim()); const em=w.querySelector('#wMail').value.trim(); { const ce=pre2('Check your email','이메일을 확인하세요.'); msg.innerHTML='<b>'+(ce?'Check your email · '+escT(ce):'Check your email.')+'</b> Tap the link, or enter the code below.'; } msg.after(codeBox(em,()=>{ w.remove(); hdr(); route(); maybeLangHome(); })); const sk=w.querySelector('#wSkipBox'); if(sk) sk.remove(); const later=document.createElement('button'); later.className='ghost'; later.type='button'; later.textContent=preBi('Start on this device while I wait','기다리는 동안 시작하기'); later.onclick=have?()=>{ S.welcomed=1; save(); w.remove(); maybeLangHome(); }:wDone; w.querySelector('.wbox').insertBefore(later,w.querySelector('#wBack')); }catch(err){ msg.textContent=err.message||'Could not send the link'; b.disabled=false; } }; if(have) setTimeout(()=>{ const i=w.querySelector('#wMail'); if(i) i.focus(); },50); };
"""
s = s[:a] + NEW + s[z:]
C = "// ---- Welcome / sign-in screen (website only): email sync vs. nickname-on-this-device ----"
assert s.count(C) == 1
s = s.replace(C, "// ---- Welcome / sign-in screen (website only): nickname first, then the optional email for sync (WS-1) ----")
open(F, 'w', encoding='utf8').write(s)
print('welcome_steps: applied')
