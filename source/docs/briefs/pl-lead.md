PROGRESS (updated 2026-11-23)
Course: pl-en   Branch: course/pl-en   PR: (this pull request)
Done: research, decisions, briefs, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · i18n validate PASS
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# pl-en lead note

No native Polish speaker has checked any of this. `tools/content/pl/REVIEW.md` lists what to check first.

## Decisions
- Scaffolded from the Korean course (Polish has no articles), standing rule `article-plural` (keywords przedim / mnog / policzaln), IPA pron identical in form to the Chinese course, `nativeScript: null` with a Polish `cueTest`.
- Two pl-only lessons: `ponglish` (after `smalltalk`, deck „Fałszywi przyjaciele i kalki”) and `articles-3` (after `passive`; English side from the Russian course, Moscow → Warsaw).
- Interface: informal ty, imperative buttons, every count string number-neutral (label: number), language-name slot only at string start or after a colon.
- Krakow is /ˈkrɑːkaʊ/ everywhere. First-person meanings alternate gender by design.

## For the main build
1. `tools/i18n/road.py new` fails on argument length; `tools/i18n/pl/roadmap.json` was made by hand in the same shape. Only the English roadmap's 39 titles are filled.
2. `link_roadmap.py --check pl` and `e2e_en.js` need the built pack; not run here.
3. Profile request: add `html[lang=pl]` to the IPA font rule in `src/app.html`.
4. Measure the 8-character tab labels „Powtórki” and „Czytanie” at 390 and 320 px (fallbacks „Fiszki”, „Czytaj”).
5. The roadmap basis line says "adjusted for Korean speakers" in the English source; the key `한국어 UI (menu labels in Korean)` is translated „Interfejs po koreańsku”: confirm what that toggle does in pl-en.
6. Name transcriptions (Warsaw, Krakow, Nowak, zloty) are unverified against the en-US voice.
