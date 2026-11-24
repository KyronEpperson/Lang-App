#!/usr/bin/env python3
# MEM-1 (release A): adds the card memory judge guards to harness.js. Run once from /home/claude: python3 tools/patches/mem_judge_harness.py
# The guard text is in tools/patches/mem_judge_harness.txt (kept apart so it can be read and edited as ordinary JavaScript).
import os, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'harness.js'); s = open(p, encoding='utf8').read()
assert 'out.memOnePath' not in s, 'already applied'
guards = open(os.path.join(ROOT, 'tools', 'patches', 'mem_judge_harness.txt'), encoding='utf8').read().rstrip('\n') + '\n'
def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:80]); s = s.replace(a, b)
# 1. the four in-app guards, after the suspend guard
anchor = "      out.search=(()=>{ globalSearch();"
rep(anchor, guards + anchor)
# 2. a guard on the built file itself: one writer for a card's box and due date, and every flip card graded as self-graded
rep("    res.checks.features=g; const bad=Object.entries(g)",
    "    g.memSingleWriter=(h.match(/\\.box\\s*=[^=]/g)||[]).length===1&&/s\\.box=s\\.mb=mjBox\\(/.test(h)&&(h.match(/\\.due\\s*=[^=]/g)||[]).length===1&&/s\\.due=ok\\?today\\+mjDueIn\\(n,cal\\):today/.test(h)&&(h.match(/renderFlashcard\\(/g)||[]).length-1===(h.match(/,isNew\\([^()]*\\),'self'\\)/g)||[]).length; /* MEM-1: only the judge writes a card's box (mjWrite) and due date (judge), and every screen that shows a flip card grades it as self-graded */\n"
    "    res.checks.features=g; const bad=Object.entries(g)")
# 3. the review-flow guard keeps its check; its description now says why it holds
rep("a right answer on a not-due card leaves box and due date alone, new cards respect load and accuracy */",
    "a right answer on a not-due card in the same sitting leaves box and due date alone (MEM-1: the judge counts it, but a repeat moments later adds next to nothing), new cards respect load and accuracy */")
open(p, 'w', encoding='utf8').write(s)
print('harness.js: MEM-1 guards added')
