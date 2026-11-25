#!/usr/bin/env python3
# MEM-2 (release B): adds the guards for "the judge chooses which cards come back" to harness.js. Run once from /home/claude, after
# tools/patches/mem_judge_harness.py:  python3 tools/patches/mem_judge_b_harness.py
# The guard text is in tools/patches/mem_judge_b_harness.txt (kept apart so it can be read and edited as ordinary JavaScript).
import os, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'harness.js'); s = open(p, encoding='utf8').read()
assert 'out.memOnePath' in s, 'apply tools/patches/mem_judge_harness.py first'
assert 'out.memQuizFive' not in s, 'already applied'
guards = open(os.path.join(ROOT, 'tools', 'patches', 'mem_judge_b_harness.txt'), encoding='utf8').read().rstrip('\n') + '\n'
def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:80]); s = s.replace(a, b)
# 1. the six in-app guards, after the MEM-1 guards
anchor = "      out.search=(()=>{ globalSearch();"
rep(anchor, guards + anchor)
# 2. two guards on the built file itself: nothing but the judge and the count of cards learned reads a card's box, and the help text of "Learn 5 at a time" names the rule's number
rep("    res.checks.features=g; const bad=Object.entries(g)",
    "    g.memNoBoxChooser=(h.match(/[\\w\\])]\\.box\\b/g)||[]).length===10&&!/box\\s*<=\\s*\\d|\\(c\\.box\\|\\|0\\)|st\\.box\\|\\|1|Math\\.min\\(6,s\\.box/.test(h)&&/memRank\\(pool\\.slice\\(0,pos\\),\\['practice','learning'\\]\\)\\.slice\\(0,MEM_EARLIER\\)/.test(h)&&/memWaiting\\(names\\)\\.length>=MEM_HOLD/.test(h)&&/memWaiting\\(\\[\\.\\.\\.qSel\\]\\)\\.length<MEM_HOLD/.test(h); /* MEM-2: a card's box is read in ten places and no more: by the judge when it loads and writes a card (mjRead, mjWrite, judge and its log row) and by three counts of cards learned: learned(), which opens the next deck; lsKnown, which marks a lesson section's flashcards as done (2.107.0); and the share card. No chooser reads it: Review, the quiz after each new five, Weak spots and the pace of new cards ask the judge. An eleventh reader means this guard and the note in docs/HANDOFF.md need a look */\n"
    "    g.memHelpSaysRule=/const MEM_HOLD=10, MEM_EARLIER=15;/.test(h)&&/quiz those mixed with up to 15 earlier cards you most need to practice, until the deck is done\\. <b>Test everything<\\/b>/.test(h)&&!/mixed with everything so far, until the deck is done\\. <b>Test everything<\\/b>/.test(h); /* MEM-2: the help text of \"Learn 5 at a time\" on the Practice screen names the same number as the rule (MEM_EARLIER). Change one and this guard asks for the other, and for the key in tools/i18n (tools/patches/mem_judge_b_i18n.json) */\n"
    "    res.checks.features=g; const bad=Object.entries(g)")
# 3. the review-flow simulation keeps its checks; its description names the judge
rep("new cards respect load and accuracy */",
    "new cards respect load and accuracy (MEM-2: the load is the judge's count of fresh misses, and the extra practice is chosen by risk) */")
open(p, 'w', encoding='utf8').write(s)
print('harness.js: MEM-2 guards added')
