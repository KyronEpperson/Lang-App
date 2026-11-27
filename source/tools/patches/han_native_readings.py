#!/usr/bin/env python3
# Lesson readings for learners who write Han characters themselves (Mandarin, Cantonese, Taiwanese, Wu, Japanese) on a Han-script target (yue, zh, nan).
# Before: rdOn() was off whenever the learner's language had a script class of its own, so a Mandarin speaker's Cantonese lessons showed no Jyutping
# under the Cantonese words in the text. Script cannot tell the two apart there, so the reading is written only under text that is MARKED as target
# text: inside <b>, in a .k cell, or between 「 and 」 (the same marks tools/halves/validate.js asks the native half to set the target runs apart with).
# No released course has this pair of languages; every other course takes the old path unchanged.
import io, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
p = os.path.join(ROOT, 'src', 'app.html'); s = io.open(p, encoding='utf8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, 'anchor not found once: ' + a[:70]
    s = s.replace(a, b)
if 'function rdMarked()' in s:
    print('han_native_readings: already applied'); raise SystemExit(0)
rep("function rdOn(){ const c=COURSE; return !!(c&&RD_CLS[c.target]&&!RD_CLS[c.native]&&c.native!=='ko'&&c.DECKS); }",
    "/* a learner who writes Han characters too (zh, yue, nan, wuu, ja) on a Han-script target: readings only under marked target text (b, .k, 「 」) */\n"
    "const RD_HANNAT={zh:1,yue:1,nan:1,wuu:1,ja:1};\n"
    "function rdMarked(){ const c=COURSE; return !!(c&&RD_HAN[c.target]&&RD_HANNAT[c.native]&&c.native!==c.target); }\n"
    "function rdOn(){ const c=COURSE; return !!(c&&RD_CLS[c.target]&&(!RD_CLS[c.native]||rdMarked())&&c.native!=='ko'&&c.DECKS); }")
rep("function rdAnnotate(root){ const rtl=COURSE.target==='ar'||COURSE.target==='ur', R=rdBuild(),",
    "function rdAnnotate(root){ const rtl=COURSE.target==='ar'||COURSE.target==='ur', MK=rdMarked(), R=rdBuild(),")
rep("    hits.forEach(h=>{ const segs=rdSeg(h[1]); if(!segs.some(s=>s[1])) return;",
    "    const inMk=MK&&!!(nd.parentElement&&nd.parentElement.closest('b,.k'));\n"
    "    hits.forEach(h=>{ if(MK&&!inMk&&!(t.charAt(h[0]-1)==='\\u300c'&&t.charAt(h[0]+h[1].length)==='\\u300d')) return; const segs=rdSeg(h[1]); if(!segs.some(s=>s[1])) return;")
io.open(p, 'w', encoding='utf8').write(s)
print('han_native_readings: applied')
