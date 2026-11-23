PROGRESS (updated 2026-11-23)
Course: cs-en   Branch: course/cs-en   PR: (this pull request)
Done: research, decisions, briefs, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · i18n validate PASS
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# cs-en lead note

No native Czech speaker has checked any of this. `tools/content/cs/REVIEW.md` lists what to check first.

## Decisions
- Scaffolded from the Korean course (Czech has no articles), standing rule `article-plural` (keywords člen / množn / počitateln), IPA pron identical in form to the Chinese course, `nativeScript: null` with a Czech `cueTest`.
- Two cs-only lessons: `czenglish` (after `smalltalk`, deck «Falešní přátelé a čechismy») and `perfect-3` (after `perfect-2`). `perfect-3` has a NEW English side (Present Perfect vs Past Simple), the only new English in this course; the cold reviewer read every line of it.
- Register: informal ty. This was the lead's brief; both Czech style guides the researcher opened (Microsoft, Mozilla) use vykání. Flagged for the native check.
- Verb forms: everyday «pracuju, potřebuju» everywhere except formal writing (the email lesson and deck keep «Děkuji»).
- Gender: «Koupil / koupila jsem» for one gendered word; one gender per sentence, alternating, where a sentence has two.
- Interface: every count string number-neutral (label: number); level titles follow `meta.js` TITLES.

## For the main build
1. `tools/i18n/road.py new` fails on argument length; `tools/i18n/cs/roadmap.json` was made by hand in the same shape. Only the English roadmap's 39 titles are filled.
2. `link_roadmap.py --check cs` and `e2e_en.js` need the built pack; not run here.
3. Typed answers list contracted forms («I've been a teacher since 2020»); confirm the engine also accepts the uncontracted form, for `perfect-3` in particular.
4. Measure the 8-character tab label «Opakovat» at 390 and 320 px (fallback «Opakuj»).
5. The roadmap basis line says "adjusted for Korean speakers" in the English source.
6. Name transcriptions (Prague, Brno, Novak, Lenka, Martin) are unverified against the en-US voice.
7. Note: an open pull request covers the reverse course (English speakers learning Czech); this one does not touch its files.
