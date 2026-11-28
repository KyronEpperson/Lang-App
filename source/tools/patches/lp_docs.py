#!/usr/bin/env python3
"""LP-1 docs, tests and release-script edits, kept as a script so they go back on a fresh source/ after a pull. Run from the build home: python3 tools/patches/lp_docs.py"""
import io,re
def edit(p,fn):
    s=io.open(p,encoding='utf8').read(); t=fn(s)
    if t!=s: io.open(p,'w',encoding='utf8').write(t)
def one(s,a,b):
    assert s.count(a)==1,(a[:70],s.count(a)); return s.replace(a,b)
def ship(s):
    if 'learnloop.js' not in s:
        a="node tools/sections/apply.js --check"
        s=one(s,a,"node tools/tests/learnloop.js > /tmp/claude-0/learnloop.out 2>&1 || { echo 'LEARN LOOP TEST FAIL'; grep -v '^PASS' /tmp/claude-0/learnloop.out | head -20; exit 1; }; echo \"learn loop: $(grep -c '^PASS' /tmp/claude-0/learnloop.out) checks pass\"\n"+a)
    return s
edit('tools/curriculum/ship.sh',ship)
def drive(s):
    if '.lpq' in s: return s
    a="const qb=root.querySelector('.qbody'); if(qb){ const nx=qb.querySelector('.next'); if(nx&&!nx.hidden){ nx.click(); return 'next'; }"
    return one(s,a,a+" const lq=qb.querySelector('.lpq'); if(lq){ /* LP-1: a making question (tiles, typed): show the answer, then tap on */ const sh=lq.querySelector('.lp-show'); if(sh&&!sh.hidden){ sh.click(); return 'show'; } lq.click(); return 'tap'; }")
edit('tools/tests/lesson_drive.js',drive)
def secs(s):
    if 'lpPracNeeded' in s: return s
    s=one(s,"return {done:!!S.lessons[id],drill:","return {prac:lpPracNeeded(id),done:!!S.lessons[id],drill:")
    return one(s,"ok(r2.done&&r2.drill&&r2.check,cid+' '+id+': lesson done after decks, quick check and review '","ok((r2.prac?!r2.done:r2.done)&&r2.drill&&r2.check,cid+' '+id+': lesson done after decks, quick check and review (LP-1: in a pilot course the practice set is still to do) '")
edit('tools/tests/lesson_sections.js',secs)
def found(s):
    if 'lpPracNeeded' in s: return s
    s=one(s,"return {done:!!S.lessons[id],decksDone:","return {done:!!S.lessons[id]||lpPracNeeded(id) /* LP-1: in a pilot course the practice set is the last step; this test drives the decks, the check and the review */,decksDone:")
    return s
edit('tools/tests/foundations.js',found)
def spec(s):
    if 'Pilot exception' in s: return s
    a="- Practice is offered from the lesson page. It never gates unlocking and never changes what marks a lesson done."
    return one(s,a,a+"\n  - **Pilot exception (LP-1, 2.146.0, en-es only):** one finished run of the practice set is the last step of the lesson (no pass mark). Missed first tries are kept in `S.pmiss` and weight the checkpoints. See `docs/briefs/learn-loop-pilot.md`.")
edit('docs/PRACTICE-SPEC.md',spec)
def hand(s):
    if 'learn-loop pilot on Spanish' in s: return s
    m=re.search(r"## Released \(through [0-9.]+\)\n\n",s); assert m
    return s[:m.start()]+"## Released (through 2.146.0)\n\n"+io.open('tools/patches/lp/handoff.md',encoding='utf8').read()+"\n"+s[m.end():]
edit('docs/HANDOFF.md',hand)
def iters(s):
    if '## LP-1 ' in s: return s
    return s.rstrip('\n')+"\n\n"+io.open('tools/patches/lp/iterations.md',encoding='utf8').read()
edit('iterations.md',iters)
print('lp_docs: ok')
