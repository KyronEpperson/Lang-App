PROGRESS (updated 2026-11-27)
Course: am-en (English for Amharic speakers) + Amharic interface   Working copy: /home/claude (isolated, not a git repo)   PR: none yet
Done: research (docs/profiles/am.md), decisions, scaffold (content + interface), profile.json, DECKNAMES.md, deviations.p.json, pron tool (pron_am.js, pron_check.js, ipa_seed.json, pron_lookup.json seed, PRON-RULES.md), briefs A B C D I R, digest
Next: full pron lookup → writers A B C D I in parallel → lead merge and checks → cold review R → main build
Checks (scaffold, before writers): gen OK · validate FAIL 3624 lines, all "not in native language"/Korean-keyword lines, 0 structural · parity FAIL only "lessons extra" (and, with deviations.p.json merged, only "stative-since not yet written") · lint 0 blocking · alphabet PASS · pron selftest OK · pron_check 0 errors (735 scaffold prons) · i18n validate FAIL 1089 untranslated (expected)
Models: all roles = Claude Opus (strongest tier), including the interface writer
State: READY FOR WRITERS

# am-en lead note

No native Amharic speaker has checked anything here and none will before release: `docs/profiles/am.md` §11 lists the 22 strings to check first. No screen was rendered and no audio was heard.

## Decisions
- Standard Amharic of Addis Ababa in fidel for all explanations and the interface; scaffolded from the Korean course (`new_lang.js am`, `new_lang.py am`), like te and ur; parity against ko-en; standing rule `article-plural` with keywords `አርቲክል|ብዙ\s?ቁጥር|የሚቆጠር|የማይቆጠር`.
- Register: the learner is እርስዎ with the polite, gender-free verb (ይምረጡ, ይጻፉ); never አንተ/አንቺ or a bare masculine imperative to the learner. Translations use አንተ/አንቺ between friends by the character's gender, እርስዎ elsewhere.
- `nativeScript` `[ሀ-ፚ]`; Western digits; ። ፣ ፤ ፦, «» quotes; Gregorian dates in the interface.
- Pron: required, English respelled in fidel ONLY by `tools/content/am/pron_am.js` from zh-format IPA, checked by `pron_check.js`. Key in five lines:
  1. Vowel = the fidel order: ʌ/ə 1st, ʊ 2nd, ɪ 3rd, æ/ɑː 4th, e 5th, ɔː 7th.
  2. Long vowels and diphthongs add a glide letter: iː ሲይ, uː ፉው, eɪ ኬይ, oʊ ቦው, aɪ ታይ, aʊ ናው, ɔɪ ቦይ.
  3. The 6th order (ሳድስ) ALWAYS means no vowel: clusters and final -s/-ed show as said (ስኩውል, አስክት, ቴክስትስ).
  4. θ = ሠ series, ð = ዸ series, v = ቨ, ŋ = ን (no g), h + ʌ/ə = ኸ, initial ʌ/ə = ኧ.
  5. ˈ before the stressed syllable on every word of 2+ syllables; basic Ethiopic block only, no combining marks.
- Curriculum: 40 shared lessons + `ethiopian-english` (replaces `konglish`; id already renamed in `more/a1.js`; NEW English side; deck 22), `stative-since` (after perfect-2; hi-en's English side), `articles-3` (kept from ko-en, after passive). 22 decks.
- Localisation decided up front (te and ur left it to review): Minji → Selam, Mr. Kim → Mr. Haile, Korea → Ethiopia (abroad: Kenya), Seoul → Addis Ababa, Busan → Hawassa, Jeju → Lalibela, Daegu → Adama, kimchi → injera, won → birr, K-pop → football, BTS → Teddy Afro, Han Kang → Haddis Alemayehu. 10 deck entries, 35 item entries, 3 lessons and `extraLessons` are already in `tools/content/am/deviations.p.json`; writers record only further changes.
- Level titles in course and interface: ጀማሪ, ተማሪ, ተጫዋች, መንገደኛ, ነዋሪ, ባለሙያ, ሊቅ.

## Open risks
1. **Fonts.** Every aid letter is a base letter of the basic Ethiopic block U+1200–U+137F (checked by `pron_am.js`, which throws on anything else; `pron_check.js` reports BANNED). Letters used: the 7 orders of ሀ ለ መ ሠ ረ ሰ ሸ በ ቨ ተ ቸ ነ አ ከ ኸ ወ ዘ ዠ የ ደ ዸ ጀ ገ ፈ ፐ, plus ኧ (U+12A7). No combining mark (U+135D–135F) anywhere, so the Telugu failure mode (a stock font missing a combining mark) does not apply. **Still to confirm on real devices: the DDA series ዸ ዹ ዺ ዻ ዼ ዽ ዾ (U+12F8–12FE, used for ð) is rare in Amharic text.** Check Android (Noto Sans Ethiopic), iOS/macOS (Kefa), Windows (Nyala / Ebrima). Fallback, mechanical: in `pron_am.js` set `SERIES['ð']` to 0x12D8 (ዘ), run `--selftest` (update the ð rows), `--lookup`, and repaste the DIFF lines `pron_check.js all` lists. No `html[lang=am]` CSS rule exists: check line height, the tab bar and buttons at 390px.
2. The aid's conventions are new (ሠ/ዸ, glides, 6th order = no vowel): the `pron` lesson must teach them; untested with learners.
3. Grammar terms: only five confirmed in a (Tigrinya) source; register and button forms are inference. Writers flag doubts; the reviewer lists them.
4. `ethiopian-english` has a new English side; the reviewer reads every sentence. *Happy night* and *No matter* come from one descriptive source (Sharma 2013).
5. Name transcriptions (Selam, Dawit, Hana, Haile, Ethiopia, Amharic, Addis Ababa, Hawassa, Lalibela, Adama, injera, birr, Teddy Afro, Haddis Alemayehu) are unverified against the en-US voice.
6. Interface size: the scaffold has 811 exact keys + 278 pattern templates (1089, not 784); the I brief covers all of them. `road.py new am` fails here ("Argument list too long", as for te and ur): writer I makes `tools/i18n/am/roadmap.json` by hand.
7. `tools/content/merge_deviations.py` hard-codes `/home/claude`; run it with the path rewritten (below).
8. `am-en` is not yet in the X-en list of `tools/tests/foundations.js` (line 57) and has no `tools/sections/am-en/sections.json`; both are dispatcher steps.

## What the dispatcher runs next (in /home/claude)
1. Full pron lookup (reads the zh IPA; I did not run it, the reading rule kept me out of zh): `cd /home/claude && node tools/content/am/pron_am.js --lookup && node tools/content/am/pron_am.js --selftest && node tools/content/am/pron_check.js`. Expect about 700 more strings; any REFUSED line is a zh IPA symbol the key refuses: fix in `ipa_seed.json`, rerun.
2. Launch A, B, C, D, I in parallel (lines below). They share only `profile.json`, `DECKNAMES.md`, `pron_lookup.json` and `deviations.p.json`, which none of them edits.
3. Merge and check: `cd /home/claude && sed 's#/home/claude#/home/claude#' tools/content/merge_deviations.py | python3 - am && node tools/content/gen.js am scratch/am-merge.js && node tools/content/validate.js am scratch/am-merge.js && node tools/content/parity.js am scratch/am-merge.js && node tools/content/lint.js am scratch/am-merge.js && node tools/content/alphabet_check.js am scratch/am-merge.js && node tools/content/am/pron_check.js all --strict && python3 tools/i18n/gen.py am scratch/i18n-am.js && node tools/i18n/validate.js am scratch/i18n-am.js && python3 tools/i18n/road.py check am` and `grep -rlP '[\x{AC00}-\x{D7A3}]' tools/content/am tools/i18n/am` (must print nothing).
4. Launch R (cold review) on the merged state.
5. Main build steps outside this copy: add `am` to the X-en list in `tools/tests/foundations.js`, section matching (`tools/sections/am-en/sections.json`, `node tools/sections/apply.js`), font check on devices, `./build.sh`, `link_roadmap.py --check am`, `node tools/content/e2e_en.js am pron be articles`.

## Launch lines (one agent each; prompt = the brief file verbatim)
- AM-CONTENT-A — model **opus** — prompt: `/home/claude/docs/briefs/am-A.md` (decks.js, extra.js, meta.js)
- AM-CONTENT-B — model **opus** — prompt: `/home/claude/docs/briefs/am-B.md` (lessons.js incl. alphabet + pron, practice.js)
- AM-CONTENT-C — model **opus** — prompt: `/home/claude/docs/briefs/am-C.md` (more/a1.js incl. ethiopian-english)
- AM-CONTENT-D — model **opus** — prompt: `/home/claude/docs/briefs/am-D.md` (more/a2.js, more/b1.js incl. articles-3, stative-since)
- AM-INTERFACE — model **opus** — prompt: `/home/claude/docs/briefs/am-I.md` (tools/i18n/am/ui.json 1089 keys, roadmap.json)
- AM-REVIEWER — model **opus** — prompt: `/home/claude/docs/briefs/am-R.md` (after step 3)

The briefs were generated by `python3 tools/content/mk_briefs_ko.py am` from `docs/briefs/am.json` and then fixed for this copy by `python3 scratch/fix_am_briefs.py` (paths, model line, digest-first reading). If you regenerate, run both.
