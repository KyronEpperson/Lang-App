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

2.88.0 (new chat, 2026-11-24): **Puerto Rican Spanish for English speakers (`en-espr`)** and **English for Puerto Rican speakers (`spr-en`)**. Ten writers (nine opus, interface on sonnet: zero overrides needed), two opus cold reviews (`tools/target/espr/REVIEW.md` 14 edits, `tools/content/spr/REVIEW.md` 5 edits), e2e over all 29 + 43 lessons. Owner defaults taken: code `spr` kept, share-card word "Puerto Rico", Puerto Rican learners offered English only. `packs/HELD.txt` is now mirrored by `ship.sh` (it was missing from the repository). Vietnamese roadmap title aligned to *Lượng từ*.

2.89.0 (2026-11-24): **Mandarin for Vietnamese speakers (`vi-zh`)**, the first assembled course with a non-Korean target. Four opus writers, one merge, opus cold review (`tools/halves/native/vi/zh/REVIEW.md`: 496 Hán Việt readings checked on opened pages, 0 corrected, 2 added, 0 unverified; 122 row fixes), e2e over all 28 lessons (`E2E_COURSE=vi-zh node tools/content/e2e_en.js vi <ids>`). en-zh: 咱们 now accepted on `ba-bie.12` / `.13` (target half re-exported with `--accept-moved`; proof and Korean packs byte-identical). Still `skip` (no reading shown): 苹果, 矮, 比较, 眼睛, 有空, pronouns.

## Ready to launch

Nothing staged: `vi-zh`, `en-espr` and `spr-en` are released (2.88.0, 2.89.0). `packs/HELD.txt` is empty. Next is the queue below.

Follow-ups these two setups found: other English-speaker courses without their own praise words show Korean praise on the session-done screen (about 18 courses); `zhNorm` should accept the Vietnamese hỏi mark typed by a VNI keyboard; the grammar-search placeholder shows a Korean example in every course; pattern `我在___工作。` is duplicated in en-zh (`zh.p018`, `zh.p022`). From the Puerto Rican reviews, wrong in the live standard-Spanish courses too: es-en `email#11` (explanation conflicts with its accepted *have* answers), `first-conditional#11`, `passive#11` and `false-friends#13` (typed prompts with no cue reject a correct answer); en-es `decks-t2` *yo* note is fine for en-es but check the `se` item accepting *Se rentan departamentos*. Not confirmed by any source: *coger la guagua* (only *tomar* is accepted).

## Queue after that (owner's order)

0. **Reusable halves for the top five spoken languages** (owner, 2026-11-24): recipe and status in `docs/HALVES-BLUEPRINT.md`. English and Mandarin are covered; build Spanish, then French, then Hindi. The one new design piece is telling target text from native text by marked position instead of by script.

1. East and Southeast Asian top ten (Mandarin, Japanese, Vietnamese, Cantonese, Wu, Korean, Javanese, Thai, Indonesian, Burmese) can each learn the top five (Mandarin, Japanese, Vietnamese, Cantonese, Wu): needs target halves for ja, vi, yue (and Wu, which has no course at all yet).
2. That top ten ↔ English both ways (missing: Wu, Javanese, Burmese; Korean for English speakers is built in).
3. Then the rest: Tamil, Gujarati, Malayalam (nothing yet), Marathi ↔ English.
4. Korean courses still in draft (writer files exist, NOT merged — `mk_native.js <l> --merge` exactly once, then review, overrides, release): te, bn, ur, pa. Kannada → Korean paused by the owner (scaffold only). Taiwanese → Korean waits on the owner's choice (Traditional Chinese (Taiwan) vs written Taiwanese).
5. Dominican Spanish (profile exists: `docs/profiles/en-esdo.md`); English → X from Romanian onward.

## Known gaps and follow-ups

- Model routing evidence from this batch (docs/MODEL-ROUTING.md §6 step 3): reviewer edits per role were spr-en A 1, B 1, C 3, D 0 (opus), interface 0 (sonnet, zero overrides); en-espr 14 edits over five opus writers; vi-zh w1 5, w2 9, w3 7, w4 3 content rows (opus). Writer usage ran 140–460k tokens; the two vi-zh card writers were highest because of per-character lookups (w2 could not reach hvdic.thivien.net and used a Wiktionary mirror; the reviewer reached hvdic).
- vi-zh, for a native Vietnamese reader when one is available: `tools/halves/native/vi/zh/REVIEW.md` top-ten (安静 «yên tĩnh» vs «an tĩnh», *ngài* for 您, bare-adjective glosses of 很, «đã … rồi»).
- The live site was not re-verified from this chat after 2.88.0 / 2.89.0 (web fetch of lang-app.io was not approved).

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
