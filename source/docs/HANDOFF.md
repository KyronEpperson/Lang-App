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

## Released (through 2.96.0)

Yesterday and today: ur-en, pa-en (2.78.0); yue-en in written Cantonese (2.79.0); te-en with bundled Noto Sans Telugu (2.80.0); yue-ko (2.81.0); kn-en (2.82.0); release report + audio coverage on every release (2.83.0); en-hmn (2.84.0); new cards flip on tap (2.85.0); hmn-en + Hmong interface (2.86.0).

2.88.0 (new chat, 2026-11-24): **Puerto Rican Spanish for English speakers (`en-espr`)** and **English for Puerto Rican speakers (`spr-en`)**. Ten writers (nine opus, interface on sonnet: zero overrides needed), two opus cold reviews (`tools/target/espr/REVIEW.md` 14 edits, `tools/content/spr/REVIEW.md` 5 edits), e2e over all 29 + 43 lessons. Owner defaults taken: code `spr` kept, share-card word "Puerto Rico", Puerto Rican learners offered English only. `packs/HELD.txt` is now mirrored by `ship.sh` (it was missing from the repository). Vietnamese roadmap title aligned to *Lượng từ*.

2.89.0 (2026-11-24): **Mandarin for Vietnamese speakers (`vi-zh`)**, the first assembled course with a non-Korean target. Four opus writers, one merge, opus cold review (`tools/halves/native/vi/zh/REVIEW.md`: 496 Hán Việt readings checked on opened pages, 0 corrected, 2 added, 0 unverified; 122 row fixes), e2e over all 28 lessons (`E2E_COURSE=vi-zh node tools/content/e2e_en.js vi <ids>`). en-zh: 咱们 now accepted on `ba-bie.12` / `.13` (target half re-exported with `--accept-moved`; proof and Korean packs byte-identical). Still `skip` (no reading shown): 苹果, 矮, 比较, 眼睛, 有空, pronouns.

2.92.0 (2026-11-24): **new cards always come five at a time, then the quiz** (owner: "consistent across the whole app"). Before, a search hit, the **All** filter and topic decks queued each new card alone, so one card was shown and quizzed at once. Now one rule (`rvBatchSize` / `rvBatchQueue` in `src/app.html`) is used by the search box on Review, the search sheet, All, topic decks, the paced review flow and Today sessions: five shown, then those five asked; fewer only when fewer remain in the deck or under the daily cap; six go together so the sixth is never alone. Session sizes: quick 3 → 5 new, long 8 → 10 (standard stays 5). A search hit is pinned first in its batch (`rvPin`, kept until the first answer), and a hit in a locked deck from the search sheet now opens that deck. Guard `searchBatch5` in `harness.js`. Trainer recording (`tools/tests/golden/en-ko-trainers.json`) re-recorded: 50 differences, all in the quick and long session plans (3 → 5 and 8 → 10 new cards). Unchanged on purpose: Practice (already five then quiz) and the five-card lesson drill (flip cards, no quiz).

2.93.0 (2026-11-24): **romanization under every Korean word in lessons** (owner, after lesson 1: "I can't read or write Korean, there should be way more romanization in the lessons"). Before, only the example cards carried it; prose, tables ("Say it 3 ways"), tip and mistake boxes, the quick-check options and their explanations, and lesson titles in the list showed bare Hangul. Now `romAnnotate` in `src/app.html` wraps each Hangul word in those places in `<ruby class="rb">` with `romanize()` underneath (red, as on cards), at render time, for every course whose target is Korean (en-ko and the twelve x-ko packs; no pack was edited). An **Aa** button at the top of a lesson turns it off; it is the existing practice setting (`S.quizRom`, class `qromT`). Left bare on purpose: the sound-changes lesson and its quiz (the Korean there is sound respellings) and the Hangul quiz (it asks how a block reads): `ROM_SKIP` / `ROM_SKIP_Q`. A word already followed by its romanization in the text is not doubled. Attached letters are read with the word (`-ㅂ니다` mnida, `ㄹ까요` lkkayo). en-ko lesson 1 gained a "Not reading Hangul yet?" box and lesson 2 short glosses (반말, 감사합니다, 말 놔도 돼요, the café quiz explanation). Guard `lessonRom` in `harness.js`; the edit script is `tools/patches/lesson_rom.py`.

2.94.0 (2026-11-24): the **stroke-order grid** labels read "letter - romanization" (ㄱ - g/k, ㅇ - silent/ng; owner: "hangul - romanji above the picture"). One helper, `sglLabel` in `src/app.html`, serves the built-in lesson and the `{{strokes:…}}` token of the x-ko packs; the romanization part is not translated. Checked by guard `lessonRom`. Edit script: `tools/patches/stroke_rom.py`.

2.95.0 (2026-11-24): **the pause scene waits 60 s on desktop** (owner: "the timer before the card animations on the desktop is a little too quick. can we double the time"). `idleMs` in `src/app.html` is 60000 when the main pointer is not a finger (`(pointer:coarse)` false) and stays 30000 on phones and tablets (they auto-lock at about 30 s). Guard `idleDesktop` in `harness.js`; edit script `tools/patches/idle_desktop.py`. Reading taken: "card animations" = the word cards that fly in after no input; no other timer was changed.

2.96.0 (2026-11-24): **a "Next lesson" button at the bottom of every lesson, in every course** (owner: "at the bottom of each lesson it should have a button to go to the next lesson"). Before, the button appeared only once the lesson was done (quick check and mini drill both passed), and above the practice set. Now `nextCta` in `src/app.html` always draws it, as the last thing in the lesson (under the practice set) and on the practice-done screen: green and ticked once the lesson is done, plain before. Owner default taken: it opens the next lesson even when this one is not finished, and a lesson opened that way stays open in the list (`S.seen`, read by `lessonUnlocked`); nothing else unlocks and the lesson still only counts as done after the quick check and the drill. The labels are resolved with `LL` (they were never translated on the practice-done screen, which is `data-noi18n`); Korean wording 다음 수업 / 수업 열기. The last lesson shows nothing until it is done. Guard `nextLessonBtn` in `harness.js`; edit script `tools/patches/next_lesson.py`.

Hangul letter count (owner asked "are there only 14 hangul" on seeing "Practice · 14", which is the number of practice items): checked, all 40 letters are on cards. `Hangul vowels` has the 10 basic vowels plus ㅐ ㅔ; `Hangul consonants` the 14 basic consonants; `Hangul · advanced` the 5 doubles and the other 9 combined vowels. Two cards carry a pair (ㅙ / ㅞ and ㅒ / ㅖ); they were left as they are because the x-ko packs translate these cards by their front. en-ko lesson 1 gained a "How many letters are there?" box (40, and which deck holds which). The x-ko lesson 1 texts do not have that box.

Same gap, not fixed (audit 2026-11-24): all 15 courses with a non-Latin target for Latin-script learners (en-am, ar, bn, hi, ja, kn, nan, pa, ru, te, th, ur, yue, zh, and vi-zh) show the target script bare in lesson prose, tables and quizzes: about 800 to 1,700 runs per course in lesson bodies and 350 to 900 in quick checks. They have no `romanize()`; the fix is a word → reading table built from each course's own cards and example lines (plus a list of what it cannot cover), then the same `<ruby>` rendering. Not started.

Setting up the build home in a new chat (learned 2026-11-24): the scripts need `/home/claude` itself (make it, with `lang-app` inside or symlinked), `korean-site/` filled from the repository root (everything but `source/` and `audio/`; no link to `audio/`, the voice test writes into it), `korean-site/packs/.current` deleted before the first build, and the scratchpad folder named in `ship.sh` / `harness.js` created by hand. Running `harness.js` with `HARNESS_SRC` overwrites the shared `page.html`. The harness values `sessionSteps: 0` / `sessionDone: false` are the same before this change (that old check no longer drives the session).

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
