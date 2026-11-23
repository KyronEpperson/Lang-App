PROGRESS (updated 2026-11-23)
Course: tl-en   Branch: course/tl-en   PR: (this pull request)
Done: research, decisions, briefs, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · i18n validate PASS
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# tl-en lead note

No native Filipino speaker has checked any of this. `tools/content/tl/REVIEW.md` lists what to check first.

## Decisions
- Scaffolded from the Korean course (Tagalog has no articles like a / the), standing rule `article-plural`, IPA pron identical in form to the Chinese course, `nativeScript: null` with a Filipino `cueTest`.
- Two tl-only lessons: `pinoy-english` (after `smalltalk`, deck «Mga bitag ng Ingles-Pinoy») and `aspect-tense` (after `perfect`). The Korean course's own `konglish` and `articles-3` are not in this course.
- Register: ikaw / ka / mo to the learner, no po; po / kayo only inside translations of polite English lines. Explanations in Filipino, not Taglish.
- He / she prompts name the person («Tungkol kay Ana: …») instead of a bare siya.
- "by Friday" is «nang hindi lalampas sa Biyernes», because «hanggang» collides with "until" in the same exercises.
- The shared interface dictionary (`tools/i18n/tl/ui.json`) serves the live tl-ko course and was NOT edited; only the 39 English-roadmap titles and NOTES were added.

## For the main build
1. `link_roadmap.py --check tl` and `e2e_en.js` need the built pack; not run here. `road.py` fails on argument length.
2. About 24 interface keys are worded for Korean (list in `tools/i18n/tl/NOTES.md` §6): tl-en needs a per-course override (COURSE.UI) or proof they are unreachable.
3. Three tab labels exceed 8 characters (Pagsasanay, Pag-unlad, Mga drill; profile proposes Praktis, Progreso, Drill). tl-ko lesson prose names these tabs, so change both in one pass.
4. The roadmap basis line says "adjusted for Korean speakers" in the English source.
5. Name transcriptions (Santos, Cebu, Manila, Tagalog, Ana, adobo) are unverified against the en-US voice.
