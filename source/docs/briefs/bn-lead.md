PROGRESS (updated 2026-11-23)
Course: bn-en   Branch: course/bn-en   PR: (this pull request)
Done: research, pron tool, decisions, briefs, deck A, lessons B, lessons C, lessons D, interface I, merge check, cold review
Next: main build: ./build.sh, link_roadmap --check, e2e_en.js, release
Checks: validate PASS · parity PASS · lint 0 blocking · alphabet PASS · pron_check clean (1 accepted line) · i18n validate PASS
Models used: all roles = Claude (strongest tier), subagents of one Claude Code session
State: READY FOR REVIEW

# bn-en lead note

No native Bengali speaker has checked any of this. `tools/content/bn/REVIEW.md` lists what to check first.

## Decisions
- Scaffolded from the Korean course (Bengali has no articles like a / the), standing rule `article-plural` (keywords আর্টিকেল / বহুবচন / গণনাযোগ্য), `nativeScript` = Bengali block.
- Pron is a BENGALI-SCRIPT respelling, not IPA (profile §6: Bangladeshi schools do not teach IPA). It is this course's own design and untested with learners. Every aid comes from `tools/content/bn/pron_bn.js` / `pron_lookup.json` (one-to-one from the Chinese course's IPA); `pron_check.js` verifies it.
- Two bn-only lessons: `banglish` (after `smalltalk`, deck «বাংলিশ ফাঁদ») and `articles-3` (after `passive`; English side from the Russian course, Moscow → Dhaka).
- Register আপনি; Western digits everywhere; NFC text; "Bangla" for the language and "Bangladesh" for the country in English cards; names Rafi, Nadia, Mr. Khan.
- One word for weekend: উইকেন্ড. Level titles agree between `meta.js` and the interface.
- The interface writer dropped "dating" from two goal labels (friends / hangouts wording): owner may overrule.

## For the main build
1. Engine: `dLoc()` in `src/app.html` must map `bn` to `bn-BD-u-nu-latn`, or dates print Bengali digits beside the dictionary's Western ones.
2. Font: the UI font must position the nukta (U+09BC) under any consonant and must not clip ি ী ু at the tab-bar size; check ZWJ forms (র‍্যা) on a device.
3. `tools/i18n/road.py new` fails on argument length; `tools/i18n/bn/roadmap.json` was made by hand in the same shape. Only the English roadmap's 39 titles are filled.
4. `link_roadmap.py --check bn` and `e2e_en.js` need the built pack; not run here.
5. The roadmap basis line says "adjusted for Korean speakers" in the English source; the roadmap pron title follows the shared key (R/L, F/P, TH), not this course's Z/J, V/B/W, TH.
6. Name readings (Rafi, Khan, Dhaka, Bangladesh, Bangla, taka, Cox's Bazar, Sylhet, Tagore, biryani) are unverified against the en-US voice: table in `tools/content/bn/PRON-RULES.md` §B.
7. The reviewer listed problems in the SHARED English (all courses), not changed here: see the last section of REVIEW.md (e.g. `adjectives` rejects "It's cheaper", `to-ing` lists stop as "-ing only").
