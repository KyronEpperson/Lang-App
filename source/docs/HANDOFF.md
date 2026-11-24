# Hand-off: where things stand (written 2026-11-24)

For the next chat. Read this, `docs/MODEL-ROUTING.md` (models, reading lists) and `docs/briefs/core-words-rollout.md` (queue notes) before launching anything.

## How to get a working build home in a new chat

The build home of the old chat (`/home/claude`) does not carry over. Everything it needs is mirrored in the repository `KyronEpperson/Lang-App` under `source/` on every release.

1. Clone the repository to `lang-app/` beside the build home.
2. Copy `lang-app/source/{src,tools,docs,packs,build.sh,harness.js}` into the build home; the static site files (`index.html`, `sw.js`, `fonts/`, images) are at the repository root and go in `korean-site/` (see `source/README.md`).
3. `./build.sh`, then `node harness.js` must end with no errors before anything else.
4. Release with `bash -x tools/curriculum/ship.sh "<version>" "<subject>" "<body>"` (it runs every test, writes the release report and audio coverage, copies the mirror, commits and pushes `main`; Vercel deploys from `main`).

Standing rules: Supabase publishable key only; never open, print or commit secrets; never force-push `main`; ElevenLabs / Azure keys only from the owner's own terminal; no posting under the owner's name. Strict CSP in `src/app.html`: no `//` comments in one-line code, no inline handlers, edits by assertion-guarded replacement.

## Owner's standing decisions

- Build and release without waiting for native-speaker review; user bug reports will correct later. Do not ask about reviewers.
- Courses for Cantonese speakers are in written Cantonese. Hmong = White Hmong (RPA), words only from the sourced glossary (`tools/hmong/`).
- Dialect and variety choices: ask once when it decides every card, otherwise decide and say so.
- Replies: brief, bullets, direct. Visuals as PNG.

## Released (through 2.87.0)

Yesterday and today: ur-en, pa-en (2.78.0); yue-en in written Cantonese (2.79.0); te-en with bundled Noto Sans Telugu (2.80.0); yue-ko (2.81.0); kn-en (2.82.0); release report + audio coverage on every release (2.83.0); en-hmn (2.84.0); new cards flip on tap (2.85.0); hmn-en + Hmong interface (2.86.0).

## Ready to launch (stage 1 done; nothing below is released; packs are in `packs/HELD.txt`)

The coming-soon languages (`ta gu ml my jv wuu`, with names under the flag tiles) went out in 2.87.0.

1. **Mandarin for Vietnamese speakers (`vi-zh`)**. Lead note: `docs/briefs/vi-zh-lead.md` (launch lines, check commands); design `docs/briefs/vi-zh-design.md`; profile `docs/profiles/vi-zh.md`.
   - Reusable Mandarin half `tools/halves/target/zh/` (886 cards, 31 decks, 28 lessons, 392 practice); tools generalised (`export_target.js`, `mk_native.js <l> --target zh`, `assemble.js vi zh`, `validate.js vi zh`, `dryrun.js`); all released Korean packs re-assemble byte-identically.
   - Next: launch writers w1–w4 [opus] (brief `docs/briefs/vi-zh-writer.md`; w1 also fills the 12 interface strings in `wU.jsonl`), then `mk_native.js vi --target zh --merge` ONCE, `validate.js vi zh --all`, reviewer [opus] (`vi-zh-review.md`; must re-check every Hán Việt reading by lookup: the tools check shape only), `assemble.js vi zh packs/course-vi-zh.js`, remove from HELD, release.
   - Align one term first: profile says *lượng từ*, the Vietnamese roadmap file says *Loại từ*.
2. **Puerto Rican Spanish for English speakers (`en-espr`)** and **English for Puerto Rican speakers (`spr-en`)**. Lead note: `docs/briefs/pr-lead.md`; decisions `docs/briefs/pr-decisions.md`; profiles `docs/profiles/en-espr.md`, `docs/profiles/spr.md`.
   - Both are byte copies of the standard Spanish courses with a base record; writers edit only what differs (about a third of a course each). Engine registration is done and released dormant (flag, `es-PR`, voice fallback, clips reused only when the text is identical).
   - Next: ten launch lines in `pr-lead.md`: EN-ESPR-A, -B, -1, -2, -3 and SPR-CONTENT-A, -B, -C, -D [opus]; SPR-INTERFACE [sonnet: it is an override file on the Spanish dictionary]; then reviewers EN-ESPR-REVIEWER and SPR-REVIEWER [opus].
   - Owner decisions still open (defaults in brackets): native code `spr` is also the ISO code of an unrelated language, harmless in the app, but changing it after release loses saved progress [keep `spr`]; share-card word "Puerto Rico" vs "Boricua" [Puerto Rico]; a learner who picks "Español (Puerto Rico)" is offered only English, not the Korean course [leave].

Follow-ups these two setups found: other English-speaker courses without their own praise words show Korean praise on the session-done screen (about 18 courses); `zhNorm` should accept the Vietnamese hỏi mark typed by a VNI keyboard; the grammar-search placeholder shows a Korean example in every course; pattern `我在___工作。` is duplicated in en-zh (`zh.p018`, `zh.p022`).

## Queue after that (owner's order)

0. **Reusable halves for the top five spoken languages** (owner, 2026-11-24): recipe and status in `docs/HALVES-BLUEPRINT.md`. English and Mandarin are covered; build Spanish, then French, then Hindi. The one new design piece is telling target text from native text by marked position instead of by script.

1. East and Southeast Asian top ten (Mandarin, Japanese, Vietnamese, Cantonese, Wu, Korean, Javanese, Thai, Indonesian, Burmese) can each learn the top five (Mandarin, Japanese, Vietnamese, Cantonese, Wu): needs target halves for ja, vi, yue (and Wu, which has no course at all yet).
2. That top ten ↔ English both ways (missing: Wu, Javanese, Burmese; Korean for English speakers is built in).
3. Then the rest: Tamil, Gujarati, Malayalam (nothing yet), Marathi ↔ English.
4. Korean courses still in draft (writer files exist, NOT merged — `mk_native.js <l> --merge` exactly once, then review, overrides, release): te, bn, ur, pa. Kannada → Korean paused by the owner (scaffold only). Taiwanese → Korean waits on the owner's choice (Traditional Chinese (Taiwan) vs written Taiwanese).
5. Dominican Spanish (profile exists: `docs/profiles/en-esdo.md`); English → X from Romanian onward.

## Known gaps and follow-ups

- Audio: about 7,700 sentences across ko fr it pt th vi zh ar have no recorded clip (see `docs/AUDIO-COVERAGE.md`); the owner runs `node source/tools/audio/gen_elevenlabs.js <lang> --gender=f|m` from his terminal. Hmong has no voice at all; a 20-clip ElevenLabs trial was offered, not answered.
- 48 older planned languages show English where Korean roadmap titles should be (sonnet job; the tool now supports real Korean).
- Intro greeting falls back to Korean for targets other than Korean / English.
- en-hmn lacks the core-word, Flirting and Compliments decks; hmn-en kept 53 back-translation flags with reasons (`tools/content/hmn/REVIEW.md`); its long lesson prose was not back-translated.
- Phone checks only the owner can do: dotted letters in the Telugu, Punjabi and Kannada courses on Android.
- Pron-tool fix pass for held-back words in about 18 courses; small untranslated labels; landing-page copy still says "14 languages"; live site not re-verified after recent releases.
- Waiting on the owner: PR #2 (Cursor models doc) merge or close; Vercel project `lang-app-old` deletion; tell VS Code agents to reuse `tools/i18n/<lang>/` instead of writing a second dictionary.
- The owner's two interface add-ons from the old chat (context row above the prompt, agents pane) lived only in that chat's workspace; the pane did not draw. Rebuild on request.

## Prompts

The stage-1 prompts for `vi-zh` and Puerto Rican are summarised in items 2 and 3 above; the design constraints that matter: Sino-Vietnamese readings on cards (never guessed), Simplified characters, reuse `audio/zh/` clips; Puerto Rican courses reuse standard Spanish content byte-for-byte where it is right for the island and write only deviations, `tú` default, standard spelling with pronunciation notes as recognition.
