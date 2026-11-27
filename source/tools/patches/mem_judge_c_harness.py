#!/usr/bin/env python3
# MEM-3 (release C): adds the guards for "sharper evidence" to harness.js and brings two older guards in line. Run once from /home/claude, after
# tools/patches/mem_judge_b_harness.py:  python3 tools/patches/mem_judge_c_harness.py
# The guard text is in tools/patches/mem_judge_c_harness.txt (kept apart so it can be read and edited as ordinary JavaScript).
import os, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'harness.js'); s = open(p, encoding='utf8').read()
assert 'out.memQuizFive' in s, 'apply tools/patches/mem_judge_b_harness.py first'
assert 'out.memRecallQ' not in s, 'already applied'
guards = open(os.path.join(ROOT, 'tools', 'patches', 'mem_judge_c_harness.txt'), encoding='utf8').read().rstrip('\n') + '\n'
def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:80]); s = s.replace(a, b)
# 1. the four in-app guards, after the MEM-2 guards
anchor = "      out.search=(()=>{ globalSearch();"
rep(anchor, guards + anchor)
# 2. the answer-log row has a tenth field: the weight the answer's speed got
rep("r&&r.length===9&&r[5]===MJ_TCODE[type]", "r&&r.length===10&&r[9]>=60&&r[9]<=100&&r[5]===MJ_TCODE[type]")
# 3. the 200-card walk answers the way the quiz asks: the recall question where the judge calls for one (without it no card of the walk could become memorized)
rep("judge(q.d,q.c,rnd()<0.9,'pick'); }); } } finally", "judge(q.d,q.c,rnd()<0.9,memAsk(q.d,q.c)?'rec':'pick'); /* MEM-3: the quiz asks the recall question where the judge calls for one */ }); } } finally")
# 4. on the built file: the recall question is wired into the quizzes and Review, the exam and the blitz stay plain, and the lesson quiz asks the judge
rep("    res.checks.features=g; const bad=Object.entries(g)",
    "    g.memRecallWired=/if\\(!plain&&memAsk\\(d,c\\)\\) return renderRecallQ\\(container, d, c, onAnswer\\);/.test(h)&&/if\\(memAsk\\(d,c\\)\\)\\{ stage='rc'; rvKeys\\(''\\); rcClean=renderRecallQ\\(container,d,c,onAnswer,1\\); return; \\}/.test(h)&&/results\\.push\\(\\{\\.\\.\\.q,ok\\}\\); i\\+\\+; step\\(\\); \\},1\\);/.test(h)&&/else combo=0; next\\(\\); \\},1\\);/.test(h)&&(h.match(/renderQuizQ\\(/g)||[]).length===7&&/old=lsEarlier\\(cards,pos\\)/.test(h)&&!/shuffle\\(cards\\.slice\\(0,pos\\)\\)/.test(h)&&/mjUpdate\\(m,ok,t,same,type,cal,sp\\)/.test(h); /* MEM-3: the quizzes and Review ask the recall question where the judge calls for one; the exam and the blitz pass \"plain\" (every card asked the same way); renderQuizQ has seven callers and its own definition, so an eighth caller has to decide which it is; the lesson quiz takes its earlier cards from the judge; judge() hands the speed weight to the rules */\n"
    "    res.checks.features=g; const bad=Object.entries(g)")
open(p, 'w', encoding='utf8').write(s)
print('harness.js: MEM-3 guards added')
