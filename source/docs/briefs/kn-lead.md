PROGRESS (updated 2026-11-23)
Course: kn-en   Branch: course/kn-en   PR: (this pull request)
Done: research, decisions, briefs, pron tool, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: render check of the aids on real phones, ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · pron_check 0 errors · i18n validate PASS (1 length warning)
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# kn-en lead note

No native Kannada speaker has checked any of this. `tools/content/kn/REVIEW.md` lists what to check first. No screen was rendered and no audio was heard. The cold review split its reading across six helper passes under one set of rulings; the reviewer personally read `meta.js`, the roadmap titles, deck 22, the kn-only pronunciation cards, the `indian-english` lesson and every passage it edited. It made 288 corrections, more than any other course in this batch, so a native read matters most here.

## Decisions
- Scaffolded from the Korean course, standing rule `article-plural`. Pronunciation aids are English respelled in Kannada script, made only by `tools/content/kn/pron_kn.js` and checked by `pron_check.js` (which also has a DOUBLED category).
- Two kn-only lessons: `indian-english` (after `smalltalk`, deck 22) and `stative-since` (after `perfect-2`). 22 decks.
- Indian English is "fine here, say this abroad" (I have a doubt, today morning, prepone ...). Only real calques are ✗ (Myself Kiran, discuss about, revert back, angry on me). NOTE: the `indian-english` reason text in `deviations.json` and profile §4.12 / §8 still class "I have a doubt" and "today morning" as wrong in any variety; the course text is the decision.
- The card `Jew` (zoo / Jew sound pair) was dropped.
- Register: second-person questions end in -ಆ, all other questions in written -ಏ; "be going to" is -ಅಲಿದ್ದೇನೆ. Both are flagged for the native check as possibly stiff.
- Level titles (course and interface): ಆರಂಭಿಕ, ವಿದ್ಯಾರ್ಥಿ, ಮಾತುಗಾರ, ಪ್ರವಾಸಿ, ಸ್ಥಳೀಯ, ಪರಿಣತ, ನಿಪುಣ. The top legacy title avoids ಗುರು.
- Deck quiz is «ಕ್ವಿಜ್»; «ಕಿರು ಪರೀಕ್ಷೆ» is only the 3-question lesson check.

## For the main build
1. Rendering: the aids put a dot (Kannada nukta U+0CBC) under some letters. It positions correctly in Noto Sans Kannada 2.006 on ವ ಥ ದ ಶ. Five words (twelve, months, although, silver, solved) fall back to a visible ್. iOS and Windows are unverified: check on real phones before release. No `html[lang=kn]` font or line-height rule exists.
2. `tools/i18n/kn/roadmap.json` was made by hand in the usual shape. Only the English roadmap's 39 titles are filled; four were aligned with the course lesson titles.
3. `link_roadmap.py --check kn` and `e2e_en.js` need the built pack; not run here.
4. The roadmap basis line says "adjusted for Korean speakers" in the English source and is translated as such.
5. Tab label «ಪುನರ್ಮನನ» (Review) is exactly 8 code points; if it truncates at 390px, change the exact key `Review` to «ಮನನ».
6. Shared English left alone: "I'll have the steak." / "Medium rare, please." (beef, against profile §9), "Who's your bias?", and the weak items listed in `REVIEW.md` (modals mc 1 distractor is correct English; perfect-2 order 3; narrow accepted-answer lists, worked around with cues in about 30 Kannada prompts).
7. Interface: Korean-only screens carry filler text and must stay hidden; several terms have two renderings (list in `REVIEW.md`).
8. Name transcriptions (Divya, Kiran, Rao, Shetty, Bengaluru, Mysuru, Mumbai, Kannada, India, Hampi, Kuvempu) are unverified against the en-US voice.
