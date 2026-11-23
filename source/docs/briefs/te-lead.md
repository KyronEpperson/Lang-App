PROGRESS (updated 2026-11-23)
Course: te-en   Branch: course/te-en   PR: (this pull request)
Done: research, decisions, briefs, pron tool, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: OWNER DECISION on the font blocker below; then main build: ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · pron_check 0 errors (1 accepted line) · i18n validate PASS (1 length warning)
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW, NOT READY FOR RELEASE (font blocker)

# te-en lead note

No native Telugu speaker has checked any of this. `tools/content/te/REVIEW.md` lists what to check first. No screen was rendered and no audio was heard.

## RELEASE BLOCKER: the dot under a letter (Telugu nukta U+0C3C)
The pronunciation aids are English respelled in Telugu script. Sounds Telugu lacks are written with the Telugu nukta U+0C3C under a letter: v వ఼, θ థ఼, ð ద఼, z జ఼, ʒ ఝ఼ (rare). f is plain ఫ, with no dot.
- The stock Android 12 to 16 system Telugu font has NO glyph for U+0C3C (checked in the AOSP font files). On those phones the dot shows as a dotted circle or a box.
- Noto Sans Telugu 2.005 has the glyph. Two positioning bugs (#22, #25) are fixed in its repository but not in a release.
- iOS and Windows are unverified.
Two ways out, owner's choice:
1. Bundle a Telugu web font that has U+0C3C (and add `html[lang=te]` font rules).
2. Switch this course's aids to IPA. This is mechanical: every aid has its IPA in `tools/content/te/pron_lookup.json` or was made from IPA by `pron_te.js`; the `pron` lesson's reading key would be rewritten.

## Decisions
- Scaffolded from the Korean course, standing rule `article-plural`, Telugu-script respelling made only by `tools/content/te/pron_te.js` (never by hand), checked by `pron_check.js`.
- Two te-only lessons: `indian-english` (after `smalltalk`, deck 22) and `question-tags` (after `modals`). `question-tags` has a NEW English side that no other course has; the cold reviewer read every English line of it.
- Indian English is presented as "fine here, say this abroad" or "heard here, not for exams or formal writing", never as shameful.
- The card `Jew` (zoo / Jew sound pair) was dropped; the z / j contrast uses the letter names Z / G.
- ZWNJ policy: between a pollu-final loan and a Telugu ending (డాలర్‌లు) and inside compound loans (ఫుట్‌బాల్); loans nativised with final -ఉ keep ordinary sandhi (కార్డులు, సీట్లు). Never inside a pron.
- Level titles: ఆరంభం, విద్యార్థి, మాటకారి, బాటసారి, లోకల్, ప్రో, నేర్పరి in both course and interface.

## For the main build
1. The shared generator expands contractions in accepted answers, so `question-tags` also accepts "do not you", "is not she", "have not you". It needs an off switch for tags.
2. 39 long interface labels and `nav a` overflow: needs a look at 390px; no `html[lang=te]` CSS block exists.
3. `tools/i18n/te/roadmap.json` was made by hand in the usual shape. Only the English roadmap's 39 titles are filled.
4. `link_roadmap.py --check te` and `e2e_en.js` need the built pack; not run here. The `be` lesson title changed in review, so run the link check.
5. The roadmap basis line says "adjusted for Korean speakers" and the roadmap `pron` title names the Korean traps (R/L, F/P, TH).
6. Shared English keeps the Korean setting ("made in Korea", Han Kang, "Who's your bias?"); localising needs English-side deviations.
7. An unused `Jew` row remains in `pron_lookup.json` (harmless).
8. Interface key `Type` serves both a feedback label and the typing drill; it is translated as the verb.
9. Name transcriptions (Ravi, Hyderabad, Vijayawada, India, Telugu, Rao, Kumar) are unverified against the en-US voice.
