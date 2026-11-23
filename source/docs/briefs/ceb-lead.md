PROGRESS (updated 2026-11-23)
Course: ceb-en   Branch: course/ceb-en   PR: (this pull request)
Done: research, decisions, briefs, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · i18n validate PASS
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# ceb-en lead note

No native Cebuano speaker has checked any of this. `tools/content/ceb/REVIEW.md` lists what a Bisaya speaker should check first.

## Decisions
- Scaffolded from the Korean course (Cebuano has no articles like a / the), standing rule `article-plural`, IPA pron identical in form to the Chinese course.
- Two ceb-only lessons: `pinoy-english` (after `smalltalk`, deck «Mga lit-ag para sa Bisaya») and `aspect-tense` (after `perfect`). The Korean course's own `konglish` and `articles-3` are not in this course.
- Spelling: «puwede»; root-vowel forms «matinahoron», «kataposan» per the profile's house spelling.
- `<i>` instead of the profile's `<em>` for a Cebuano word under discussion: the validator rejects `<em>`.
- The shared interface dictionary (`tools/i18n/ceb/ui.json`) also serves the live ceb-ko course, so only two labels changed («Drill», «Letra»). The proposed tab rename «Pag-uswag» → «Uswag» was NOT applied because ceb-ko lesson prose names that tab.

## For the main build
1. `tools/content/lint.js` and `tools/i18n/road.py` accept only 2-letter codes; lint was run from a scratch copy with the check widened to 3 letters. `road.py new` also fails on argument length.
2. `link_roadmap.py --check ceb` and `e2e_en.js` need the built pack; not run here.
3. About 25 interface keys are worded for Korean (list in `tools/i18n/ceb/NOTES.md` §6): ceb-en needs a per-course override (COURSE.UI) or proof they are unreachable.
4. Language-name slots render "English"; an override map entry for «Iningles» is needed.
5. Interface and course disagree on a few spellings (katapusan / kataposan, nahibal-an / nahibaloan) and the sixth level title (Pro / Hanas): decide with the native check.
6. The roadmap basis line says "adjusted for Korean speakers" in the English source.
7. Name transcriptions (Cebu, Cebuano, Davao, Ana, Jollibee, lechon, Jose Rizal) are unverified against the en-US voice.
