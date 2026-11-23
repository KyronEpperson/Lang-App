PROGRESS (updated 2026-11-23)
Course: ur-en   Branch: course/ur-en   PR: (this pull request)
Done: research, decisions, briefs, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · i18n validate PASS (1 length warning)
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# ur-en lead note

No native Urdu speaker has checked any of this. `tools/content/ur/REVIEW.md` lists what to check first. No screen was rendered and no audio was heard.

## Decisions
- Scaffolded from the Korean course, standing rule `article-plural`, IPA pron identical to the Arabic and Chinese courses, right-to-left, addressing the learner as آپ.
- Urdu code points only (ی U+06CC, ک U+06A9, ہ U+06C1, ھ U+06BE, ے U+06D2), NFC, Western digits, no direction marks.
- Two ur-only lessons: `pakistani-english` (after `smalltalk`, deck 22) and `stative-since` (after `perfect-2`). 22 decks.
- Pakistani English is presented as "fine in Pakistan, say this abroad", never as shameful. "I am elder to you" is in that group.
- The card `Jew` (a zoo / Jew sound pair) was dropped from the pronunciation deck; `wine` / `vine` kept.
- Level titles: the interface ladder is used in both places; Master is «ماسٹر» because «استاد» is already Sensei in the older ladder.
- IPA inside Urdu text: a slashed group that begins with a stress mark is misdrawn in right-to-left text. Lesson bodies wrap such groups in `<b>`; plain-text fields avoid stress-initial groups (`PRON-RULES.md` §C).

## For the main build
1. Right-to-left: 60 card notes and 2 pause glosses quote an English question or exclamation and continue in Urdu, so the final mark is drawn on the wrong side. Isolating Latin runs at render time would fix all of them, and the stress-mark problem above. The live Arabic course likely has the same pattern.
2. No Urdu interface font rule exists yet; mirrored back arrows and 10 long button labels need a look at 390px; weekday letters ا پ م ب ج ج ہ (Thursday and Friday share «ج»); `Intl` locale should be `ur` / `ur-PK`.
3. `tools/i18n/ur/roadmap.json` was made by hand in the usual shape (`road.py new` could not run here). Only the English roadmap's 39 titles are filled.
4. `link_roadmap.py --check ur` and `e2e_en.js` need the built pack; not run here.
5. The roadmap basis line says "adjusted for Korean speakers" in the English source and is translated as such.
6. Shared English keeps the Korean setting in about 15 lessons (list in `REVIEW.md` §5); localising needs English-side deviations.
7. Weak shared English items found by the reviewer: `polite` check 2 ("~ing" with a tilde), `email` practice 0 ("Dear Manager," treated as wrong), `modals` mc 1 (a distractor that is correct English), `perfect-2` order 3 ("How long have you waited").
8. Name transcriptions (Pakistan, Pakistani, Karachi, Lahore, Urdu, Khan, Ali) are unverified against the en-US voice.
9. Open style choice: `more/a1.js` and `lessons.js` still use inline ✗ / ✓ in tip boxes where `a2` / `b1` use two-column tables.
