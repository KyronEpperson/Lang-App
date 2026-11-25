#!/usr/bin/env python3
# DS-1 tests: the quiz flow test no longer opens "More options" on Review (the key hints live in the Settings sheet), and ship.sh runs tools/tests/decksimple.js.
# usage: python3 tools/patches/deck_simple_tests.py   (from the build home; safe to run twice)
import os
ROOT=os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
def edit(rel,a,b):
    f=os.path.join(ROOT,rel); s=open(f,encoding='utf8').read()
    if b in s: print(rel,'present'); return
    assert s.count(a)==1,(rel,s.count(a),a[:80]); open(f,'w',encoding='utf8').write(s.replace(a,b)); print(rel,'edited')
edit('tools/tests/quizflow.js',
 """await p.waitForTimeout(250); await p.evaluate(()=>{ const b=document.querySelector('.advbtn[data-advbtn=review]'); if(b.getAttribute('aria-expanded')!=='true') b.click(); }); await p.waitForTimeout(80); /* the key hints sit behind "More options" */""",
 """await p.waitForTimeout(250); /* DS-1: the key hints sit in the Settings sheet (header gear); the checks below read them there */""")
Q="""node tools/tests/quizflow.js > /tmp/claude-0/quizflow.out 2>&1 || { echo 'QUIZ FLOW TEST FAIL'; grep -v '^PASS' /tmp/claude-0/quizflow.out | head -20; exit 1; }; echo "quiz flow: $(grep -c '^PASS' /tmp/claude-0/quizflow.out) pass"
"""
edit('tools/curriculum/ship.sh',Q,Q+"""node tools/tests/decksimple.js > /tmp/claude-0/decksimple.out 2>&1 || { echo 'DECK PAGE TEST FAIL'; grep -v '^PASS' /tmp/claude-0/decksimple.out | head -20; exit 1; }; echo "deck page: $(grep -c '^PASS' /tmp/claude-0/decksimple.out) pass"
""")
edit('tools/tests/voicetest.js',"f.page && f.top && f.btns && f.h1 && f.n === 4 && f.stat >= 30","f.page && f.top && f.btns && f.h1 && f.n === 5 && f.stat >= 30")
