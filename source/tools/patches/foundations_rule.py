#!/usr/bin/env python3
# Owner's rule, 2026-11-25: "all future languages that are added start with the writing systems first and match lessons cards to their sections".
# This script writes the foundation half of the rule into the docs and into the release test (tools/tests/foundations.js, run by ship.sh):
# a course pack that is not in FOUND, does not teach Korean, and is not one of the older courses still waiting fails the release.
import io, os, re
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(rel, pairs):
    p = os.path.join(ROOT, rel); s = io.open(p, encoding='utf8').read()
    for a, b in pairs:
        assert s.count(a) == 1, rel + ': ' + a[:60]
        s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s)

PENDING = "ar-en bn-en ceb-en cs-en de-en en-ceb en-cs en-da en-espr en-hmn en-id en-it en-nan en-nl en-no en-pl en-pt en-ptpt en-sv en-tl en-vi en-yue es-en fr-en hi-en hmn-en id-en it-en ja-en kn-en ko-en pa-en pl-en pt-en ru-en spr-en te-en th-en tl-en ur-en vi-en vi-zh yue-en zh-en"
edit('tools/tests/foundations.js', [
 ("   A. Every lesson with `sections`,",
  "   0. Owner's rule (2026-11-25): a course opens with its writing system. Every course pack is listed in FOUND, teaches Korean (it opens with the Hangul lesson), or is one of the older courses still waiting in PENDING. A NEW course is never added to PENDING: it gets its foundation lessons and an entry in FOUND before its first release.\n   A. Every lesson with `sections`,"),
 ("let fail=0,pass=0;",
  "/* older courses whose foundation is not built yet (docs/HANDOFF.md, \"Character foundations\"). This list only gets shorter. */\nconst PENDING='" + PENDING + "'.split(' ');\nlet fail=0,pass=0;"),
 ("  Object.keys(FOUND).forEach(cid=>ok(withSec.includes(cid),cid+': the pack names sections'));",
  "  Object.keys(FOUND).forEach(cid=>ok(withSec.includes(cid),cid+': the pack names sections'));\n  /* 0 */ { const all=fs.readdirSync(path.join(ROOT,'packs')).filter(f=>/^course-.*\\.js$/.test(f)&&!held.includes(f)).map(f=>f.slice(7,-3)); const ko=cid=>/-ko$/.test(cid)&&fs.readFileSync(path.join(ROOT,'packs','course-'+cid+'.js'),'utf8').includes('\"hangul\"'); const none=all.filter(cid=>!FOUND[cid]&&!ko(cid)&&!PENDING.includes(cid)); ok(!none.length,'every course opens with its writing system (FOUND), teaches Korean, or is an older course still waiting'+(none.length?' · NEW COURSE WITHOUT A FOUNDATION: '+none.join(', ')+' (write its script lessons, see docs/briefs/foundations-writer.md, and list it in FOUND; never add it to PENDING)':'')); const both=PENDING.filter(cid=>FOUND[cid]); ok(!both.length,'no course is both done and waiting '+both.join(', ')); }"),
])

RULE = """**Standing rule (owner, 2026-11-25): "all future languages that are added start with the writing systems first and match lessons cards to their sections".** A new course is not released until (1) its first lessons are its character foundation (how the script works, each kind of piece with a chart or flip tiles and its own flashcards, a deck of real words that puts the pieces together; ONE lesson when the learner already reads the script, a block of lessons otherwise), written with `docs/briefs/foundations-writer.md` and listed in `FOUND` in `tools/tests/foundations.js`, and (2) the flashcards after each section of every lesson are what that section teaches (section matching, SEC-1: `tools/sections/<course>/sections.json`, see "Lesson cards match their sections" in `docs/HANDOFF.md`). `tools/curriculum/ship.sh` runs both tests; a course pack that is in neither `FOUND` nor the list of older courses still waiting (`PENDING`, which only gets shorter) stops the release."""

edit('docs/HANDOFF.md', [
 ("  - Known, not fixed: en-am card",
  "  - " + RULE + "\n  - Known, not fixed: en-am card"),
])
edit('docs/PIPELINE.md', [
 ("## 1. Adding a language end to end\n",
  "## 1. Adding a language end to end\n\n" + RULE + " For an English course (`xx-en`) the foundation is the shared `alphabet` lesson (lesson 1, `docs/briefs/alphabet-spec.md`) with its letter tiles, followed by the pronunciation lesson.\n"),
])
edit('docs/TARGET-BRIEF.md', [
 ("## Files (in `tools/target/<t>/`), one owner each",
  "## The course opens with its writing system\n" + RULE + " The lesson writer of `lessons-1.js` plans the foundation lessons FIRST, before greetings, and gives each of them `sections` (forms in the header of `tools/patches/foundations.py`); the finished examples are `tools/patches/foundations_ja.py` (syllabary), `foundations_te.py` (abugida), `foundations_ru.py` (alphabet) and `foundations_es.py` (Latin script, one lesson).\n\n## Files (in `tools/target/<t>/`), one owner each"),
])
print('foundation rule: test and docs updated')
