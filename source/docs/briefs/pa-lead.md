PROGRESS (updated 2026-11-23)
Course: pa-en   Branch: course/pa-en   PR: (this pull request)
Done: research, decisions, briefs, pron tool, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: render check of the aids on real phones, ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · pron_check 0 errors · i18n validate PASS (1 length warning)
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# pa-en lead note

No native Punjabi speaker has checked any of this. `tools/content/pa/REVIEW.md` lists what to check first. No screen was rendered and no audio was heard. The cold reviewer read the decks, core lessons and the pa-only lessons in full; helper passes read `more/a1.js`, `more/a2.js`, `more/b1.js` and the interface values.

## Decisions
- Indian Punjabi in Gurmukhi. Scaffolded from the Korean course, standing rule `article-plural`. Pronunciation aids are English respelled in Gurmukhi, made only by `tools/content/pa/pron_pa.js` and checked by `pron_check.js`.
- Two pa-only lessons: `indian-english` (after `smalltalk`, deck 22) and `stative-since` (after `perfect-2`). 22 decks; the decks writer appended he/she, interview, immigration-desk and sound-pair cards (all recorded as deviations).
- Indian English is "fine in India, say this abroad": give an exam, I have a doubt, Do one thing, I belong to, My head is paining, Kindly. Only real calques are ✗ (eat medicine, close the light, Myself Aman, discuss about). NOTE: profile §8 and the `indian-english` deviation text still class "I have a doubt" and "Do one thing" as wrong in any variety; the course text is the decision, the profile wording is older.
- The card `Jew` (zoo / Jew sound pair) was dropped.
- Religion-neutral interface: the greeting is «ਹੈਲੋ»; the top legacy title avoids «ਗੁਰੂ». The `Hello.` card note still names ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਨਮਸਤੇ and ਸਲਾਮ side by side as greetings people use.
- Level titles (course and interface): ਸ਼ੁਰੂਆਤੀ, ਵਿਦਿਆਰਥੀ, ਗਾਲੜੀ, ਮੁਸਾਫ਼ਰ, ਲੋਕਲ, ਮਾਹਰ, ਉਸਤਾਦ.
- Letter W aid is the tool output ˈਡਬਲਿਊ.

## For the main build
1. Rendering: the aids use halant clusters and ੍ਯ, and a dot under some letters (pairin bindi). Check on Android, iOS and Windows before release. No `html[lang=pa]` CSS block exists; `html[lang=pa] nav a{overflow:visible;line-height:1.5}` is needed or the tab labels may clip.
2. `tools/i18n/pa/roadmap.json` was made by hand in the usual shape. Only the English roadmap's 39 titles are filled; four were aligned with the course lesson titles.
3. `link_roadmap.py --check pa` and `e2e_en.js` need the built pack; not run here.
4. The roadmap basis line says "adjusted for Korean speakers" in the English source and is translated as such.
5. Shared English keeps the Korean setting in about fifteen lessons (list in `REVIEW.md`); four of those sit in questions parity does not compare and could be localised at no cost.
6. Weak shared English items (all courses): `modals` mc 1 distractor "I have work tomorrow." is correct English; `reported` type items reject the unshifted form; `perfect-2` order 3 forces "How long have you waited"; `continuous` rejects "My kids are sleeping"; `adjectives` rejects "It's the best"; the `countable` tip gives "much money ✓".
7. Interface: the `Got it` key serves two functions; split sentences depend on engine piece order; Korean-only screens carry filler text and must stay hidden.
8. Name transcriptions (Simran, Aman, Singh, Kaur, Amritsar, Chandigarh, Ludhiana, Punjab, Punjabi, India) are unverified against the en-US voice.
