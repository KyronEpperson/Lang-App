PROGRESS (updated 2026-11-27)
Course: nan-en   Workspace: /home/claude (isolated copy, not a git repo)
Done: research (docs/profiles/nan.md), decisions, scaffold from yue, profile.json, KK conversion, DECKNAMES, deviations.json, course ui.json overrides, briefs A B C D R, digest
Next: launch CONTENT-A, B, C, D in parallel → merge deviation fragments → REVIEWER → main build
Checks now (scaffold, before writers): gen OK · validate FAIL 41 (all standing-rule keyword 眾數 → 複數, expected) · parity PASS · lint 0 blocking · alphabet PASS · kk --check clean · taigi_lint FAIL 4711 Cantonese placeholders (expected)
Models: all roles opus
State: READY FOR WRITERS

# nan-en lead note

No native Taigi reader has checked any of this. `docs/profiles/nan.md` §11 lists what to check first; writers add to it.

## Decisions
- **Script:** written Taigi in MOE recommended characters (owner, 2026-11-27), conventions of the live interface (`tools/i18n/nan/NOTES.md`). 你 only; 咱 for "you and I" in lessons; Taiwan school grammar terms (冠詞, 複數, 主詞, 介系詞, 未來式).
- **Scaffold from yue, not ko** (`node tools/content/new_lang.js nan --from yue`). Why: yue-en is Han-script text already re-aimed at Chinese-speaker errors (articles, plural, tense, final stops, n / l, one pronoun for he / she); Korean explanations argue from Korean and would be a blank-page rewrite. `profile.reference: "yue"` is refused by `lib.js` (2-letter references only), so the profile has no `reference`: parity is against ko-en, and yue's merged `deviations.json` was carried over (deck keys re-keyed by index, `hk-english` → `tw-english`), reasons rewritten for nan. Parity PASS on the scaffold. Cost: writers must purge Cantonese; `tools/content/nan/taigi_lint.js` makes that mechanical.
- **Pron: KK** (Taiwan school system, General American = the en-US voice), tool-made by `tools/content/nan/kk.js` from the zh / yue IPA: 1,021 scaffold spans converted once on 2026-11-27. `pronPattern` = KK set (no ː, no ɜ), `pronScript` ˈ, stress ˈ ˌ (Taiwan dictionaries' ˋ explained in `pron`). Zhuyin rejected (cannot write finals or clusters). Rules: `tools/content/nan/PRON-RULES.md`.
- **Standing rule** article-plural, keywords `冠詞|複數`.
- **Lessons:** yue's 42; `hk-english` renamed `tw-english` (台式英語陷阱, after smalltalk, rewrite); `articles-3` kept (after passive); `alphabet` (lesson 1) is the writing-system foundation; `pron` rewritten for Taigi sounds; British-school apparatus dropped (Taiwan teaches American English).
- **English-side changes for nan** (all already in deviations.json): be#check0 night markets, present#2 Taiwan, prep#4 Taipei, phrasal#2 Tainan, numbers#9 prompt; deck cards Taiwan / Taipei / Taiwanese / Mr. Lin / under Lin; DIALOG Jay Chou. Neutral yue localisations (Tokyo, Macau, Japan, Canada, Louis Cha, dim sum) kept.
- **Interface:** no interface writer. The Taigi dictionary is worded for a Korean course, so the lead wrote `tools/content/nan/ui.json` (25 course overrides: 英語, 音標, 讀 英→台, 回想 台→英, ⌨️ 拍字 英 …); gen.js emits them as the pack's `UI`. CONTENT-A fills the 39 English-roadmap titles in `tools/i18n/nan/roadmap.json`.

## What the dispatcher runs next
Launch the four writers in parallel (each brief is self-contained and ends with the reading rule):
- `NAN-CONTENT-A` — model **opus** — prompt: the full text of `/home/claude/docs/briefs/nan-A.md` (decks.js, extra.js, meta.js, 39 roadmap titles)
- `NAN-CONTENT-B` — model **opus** — prompt: `/home/claude/docs/briefs/nan-B.md` (lessons.js, practice.js: alphabet, pron, articles, be, polite, tense, prep, smalltalk, phrasal, numbers, email, idioms)
- `NAN-CONTENT-C` — model **opus** — prompt: `/home/claude/docs/briefs/nan-C.md` (more/a1.js incl. tw-english)
- `NAN-CONTENT-D` — model **opus** — prompt: `/home/claude/docs/briefs/nan-D.md` (more/a2.js, more/b1.js)

Then, in order:
1. Merge fragments: `merge_deviations.py` hard-codes `/home/claude`, so run it on a patched copy: `cd /home/claude && sed 's#/home/claude/#/home/claude/#' tools/content/merge_deviations.py > scratch/merge_dev.py && python3 scratch/merge_dev.py nan`, then `node tools/content/gen.js nan /home/claude/scratch/p2/nan-m.js && node tools/content/validate.js nan /home/claude/scratch/p2/nan-m.js && node tools/content/parity.js nan /home/claude/scratch/p2/nan-m.js && node tools/content/lint.js nan /home/claude/scratch/p2/nan-m.js && node tools/content/alphabet_check.js nan /home/claude/scratch/p2/nan-m.js && node tools/content/nan/taigi_lint.js && node tools/content/nan/kk.js --check`.
2. `NAN-REVIEWER` — model **opus** — prompt: `/home/claude/docs/briefs/nan-R.md`.
3. Main build (engine owner, outside this workspace): add `nan` to the X-en list in `tools/tests/foundations.js` (line 57, the `'ar bn ceb … yue zh'` string) so `nan-en` is in `FOUND`; match lesson cards to sections (SEC-1, `tools/sections/nan-en/`); `./build.sh`, `link_roadmap.py --check nan`, `e2e_en.js nan pron be articles`, release.
Regenerate briefs after any change to `docs/briefs/nan.json`: `python3 tools/content/nan/mk_briefs.py`.

## Open risks
1. **Engine (NOTES.md §6):** `hLang('nan')` should be `nan-Hant-TW` with a Traditional font stack (`html[lang^=nan]`), or the page may get Simplified / Japanese glyphs; `Intl.DisplayNames(['nan'])` has no data, so language-name slots leak English ("Min Nan Chinese") without an override map (en 英語, nan 台語); `zh-TW` devices still map to the Simplified pack; `LANGS.nan.self` is Tâi-lô only.
2. **Override coverage:** the 25 `ui.json` keys were chosen by the words Korean / Hangul / romanization in `tools/i18n/nan/ui.json`; Korean-only features (polite ↔ casual drill, Hangul reading drill) should not appear in an English course, but no one checked in a real build.
3. **Cantonese bleed:** writers rewriting from Cantonese may keep Cantonese word order or vocabulary that the lint cannot see (e.g. 好 for "very", 先 placement). The reviewer reads for it.
4. **Readability:** written Taigi is slower to read than Mandarin for most of the audience (NOTES §4). Writers are told to prefer common words; testers may still find it hard.
5. **𪜶** (non-BMP, "they") is allowed only with (in) after it; font support on Taiwan devices unchecked.
6. **3-letter code:** `lint.js` now accepts it; `road.py` was not tested with `nan` (use `gen.py` + `i18n validate.js`, which report `road N`).
7. **KK limits:** /ɔr/ for *door / four*; the converter must never be re-run on converted files (`--files` is one-time; noted in kk.js, PRON-RULES and every brief).
8. **Voice:** Taiwan place names and Jay Chou unverified on the en-US voice.
9. **Unused-deviation warnings** for `lessons:tw-english` and `lessons:articles-3` (extra lessons are never compared): harmless, as in yue-en.
