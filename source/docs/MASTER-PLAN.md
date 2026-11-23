# Lang App master build plan (v2, 2026-11-22)

**Goal (Kii, 2026-11-22): every language in the app can learn every other one. 61 languages = 3,660 courses.**

The v1 plan (three tracks, 106 courses) is kept below for reference; where the two disagree, this section wins.

## 0. The middle path

Two kinds of course, one engine:

| | Hand-tuned course | Standard (assembled) course |
|---|---|---|
| What it is | Written for one pair: explanations aimed at that learner's mistakes, shortcuts from what they already know, pronunciation aid in their script | Put together from two reusable halves (below) |
| Where | The pairs people actually take: every English ↔ X pair, the Korean / Japanese / Chinese triangle, close relatives (Spanish ↔ Portuguese, Hindi ↔ Urdu, the Nordic languages ...). About 150–200 pairs | All other pairs |
| Label in the app | small mark in the picker, with a legend | none |
| Upgrade | n/a | Becomes hand-tuned when the visitor log shows real learners on that pair |

The two halves:
- **Target half** (one per language taught, 61): cards, example sentences, dialogues, exercises, audio, the lesson order, and the grammar points stated in neutral terms. Never mentions the learner's language.
- **Native half** (one per learner language, 61): the interface dictionary, the meaning of every card and sentence, and the explanation of every grammar point, in that language.
- **Pair layer** (hand-tuned pairs only): "what you already know", false friends, error-zone explanations, the pronunciation aid in the learner's script.

Any pair = target half + native half (+ pair layer). 61 + 61 pieces of work cover 3,660 courses.

## 0.1 Order of work

1. **Finish what is running:** Czech, Amharic, Bengali; core-word, Flirting and Compliments decks (queue C). New languages stay paused after that.
2. **Engine:** a course may have neither side English (today one side must be). Pack format split into target half, native half, pair layer; the existing 42 courses keep working unchanged.
3. **Pilot:** Spanish → Korean as the first assembled (standard) course. Kii reviews it before anything fans out. Japanese → Korean follows as the first hand-tuned non-English pair.
4. **Convert the 29 live languages** into target halves (mostly mechanical: the English-speaker course minus its English-specific explanations) and write native halves for them. Unlocks 29 × 28 = 812 pairs. Meanings are the bulk: about 900 cards plus sentences per target, in each native language.
5. **Hand-tune in demand order:** remaining X → English, the Korean / Japanese / Chinese triangle, close-relative pairs.
6. **Add the remaining 32 languages** one at a time (each adds about 120 pairs). Community-first languages still wait for a yes from their language bodies.

## 0.2 Quality rules for assembled courses

- A target half is cold-reviewed before any standard course uses it: an error there repeats in 60 courses.
- A native half is validated like the interface dictionaries (every key present, placeholders intact) plus a sampled back-translation check.
- No native speaker has checked any course yet; a target half reviewed by a native speaker is marked as such, and that mark shows in the app.
- Standard courses carry a "report a problem" prompt on every card and lesson, feeding the Feedback page.

## 0.3 Decisions (Kii, 2026-11-22)

1. **Label:** hand-tuned courses carry a small asterisk-style mark in the "language to learn" picker, with a one-line legend ("hand-tuned for speakers of your language"). Standard courses carry no mark.
2. **Pilot:** Spanish → Korean is the assembled (standard) pilot. Japanese → Korean is hand-tuned and comes after the pilot.
3. **Timing:** started 2026-11-22 (Kii upgraded the plan and asked for more sub-agents).

## 0.4 Status (2026-11-22, evening)

- **Engine:** shipped in 2.63.0. A pack may carry `UI` (its own interface strings); a Korean pack course greets from its pack and shows Korean pause words. `tools/tests/esko.js` (a tiny Spanish → Korean course through every screen) is part of every release. Stroke-order tokens (`{{strokes:ㄱ}}`) and the hand-tuned mark in the picker are built, shipping with the pilot.
- **Format:** `docs/HALVES-SPEC.md`. Korean target half in `tools/halves/target/ko`, exported by script from the built-in course; `assemble.js en ko` reproduces the built-in course with 0 differences. Native halves: `tools/halves/native/<lang>/ko`.
- **Pilot es-ko:** Spanish half written by four writers (17.8k words), merged, validator 0 errors; cold review running. First version ships WITHOUT Korean's trainers (Hangul, numbers, conjugation, sound drills): they read English from the engine and are a separate job.
- **Korean half review:** `docs/reviews/ko-target-half-review.md`, 52 findings (6 wrong, 6 unnatural, 14 ambiguous items, 26 nits). To be applied to the Korean half and to every native half in one pass after the Spanish review; also improves the live en-ko course.
- **Not converted, on purpose:** the 31 en-X courses stay hand-written packs. Converting them to halves is only needed when their language becomes a target for non-English speakers.
4. **Next block after the pilot (Kii, 2026-11-22): every Asian language → Korean.** 16 pairs, in Kii's order:
   1. **Bisaya / Cebuano: HAND-TUNED** (a friend asked for it). Needs a Cebuano native half first (interface dictionary and meanings). Research the mistakes Cebuano speakers make in Korean; ask the friend to check it before launch.
   2. **Tagalog** (needs a native half; reuses much of the Cebuano research on Philippine-language speakers).
   3. **Chinese (Mandarin): hand-tuned** (interface exists).
   4. **Japanese: hand-tuned** (interface exists).
   5. The others: Vietnamese, Thai, Indonesian, Hindi (interface exists, standard); then Cantonese and Taiwanese Hokkien (convert the Chinese interface to Traditional characters), Bengali, Urdu, Punjabi, Telugu, Kannada, Marathi (each needs a native half).
   - Arabic, Persian and Turkish are NOT in this block (Kii, 2026-11-22).
   Korean's target half comes from the Spanish → Korean pilot and is reused by all 16.

---

# v1 plan (2026-11-21), for reference

Three tracks: (A) the rest of English → other languages, (B) other languages → English, (C) Asian languages → Korean, Japanese and Chinese. Plus how a Cursor subscription can take real work off the main build.

Nothing here is started. Orders and effort figures are estimates to be corrected, not commitments.

## 1. Where things stand

| | Count | Detail |
|---|---|---|
| English → X, live | 22 | ko, es, fr, it, pt (Brazil), de, id, vi, zh, ja, hi, ar, ru, th, yue, tl, ceb, ur, pa, te, kn, nan |
| English → X, lesson plan only ("coming soon") | 38 | listed in Track A |
| X → English, live | 14 | ar, de, es, fr, hi, id, it, ja, ko, pt, ru, th, vi, zh (42 lessons each, interface translated) |
| Any pair without English | 0 | shown as "coming soon" in the picker, no plan or content |

No course has been checked by a native speaker. That stays the biggest quality risk in every track below.

## 2. Track A: English → the remaining 38

Each course is the same job as the 22 already built: profile → engine work (script, typing, pronunciation tool) → 5 writers → merge and test → cold review → ship. One course takes roughly one 5-hour usage window of Opus writers plus the lead's merge.

| Wave | Languages | Why here |
|---|---|---|
| A1: ready and mainstream (15) | Portuguese (Portugal), Dutch, Swedish, Norwegian, Danish, Polish, Czech, Romanian, Turkish, Ukrainian, Greek, Bulgarian, Hungarian, Finnish, Afrikaans | Latin, Cyrillic or Greek script; device voices exist; no permission questions. Portugal Portuguese first: it reuses most of the Brazilian course. |
| A2: large, new script or little tooling (4) | Bengali, Marathi, Persian, Swahili | Big speaker numbers. Bengali needs a new script stage; Marathi reuses the Hindi script work; Persian reuses Arabic/Urdu right-to-left work; Swahili is Latin script. |
| A3: African and Caribbean (7) | Hausa, Yoruba, Igbo, Amharic, Oromo, Zulu, Haitian Creole | Tone marks, a new script (Amharic), thin sources, device voices uncertain. Each needs a native speaker before launch more than any earlier course. |
| A4: community-first (12) | Cherokee, Nahuatl, K'iche', Quechua, Guaraní, Aymara, Mapudungun, Māori, Samoan, Tongan, Fijian, Tok Pisin | Contact the language body or community teachers first (same rule as Cherokee). Mostly no device voices, so text-only or recorded audio. Build only after a yes. |

Decisions needed from Kii: order inside A1; whether A3 waits for native reviewers; who contacts the A4 language bodies (draft emails can be prepared).

## 3. Track B: other languages → English

Today 14 languages can learn English. A new one needs two things: the app's interface translated into that language (about 1,000 short strings plus about 270 sentence patterns), and the 42-lesson English course written with explanations in that language. The English side (words, audio, exercises) is reused; the explanations are new.

| Wave | New native languages | Why here |
|---|---|---|
| B1 (6) | Bengali, Urdu, Turkish, Persian, Polish, Ukrainian | Many speakers with strong demand for English, little good free material. Urdu and Persian reuse the Arabic right-to-left interface work. |
| B2 (5) | Telugu, Marathi, Punjabi, Kannada, Tagalog | Indian-language speakers learn English from Hindi or English-medium material today; a course in their own language is the gap. |
| B3 (3) | Cantonese (Traditional Chinese interface), Romanian, Swahili | Cantonese is cheap: convert the existing Chinese course and interface to Traditional characters and adjust wording. |
| Later | Dutch, Nordic languages, Greek, Czech, Hungarian, Bulgarian | Most speakers already learn English well at school; low value. |

Each B course ≈ one usage window, plus the interface dictionary (a good Cursor task, see section 5).

## 4. Track C: Asian languages → Korean, Japanese, Chinese

Native languages already supported in the interface: Korean, Japanese, Chinese, Vietnamese, Thai, Indonesian, Hindi. Targets: Korean, Japanese, Chinese. That is 18 courses (7 × 3, minus the three same-language pairs).

| Wave | Pairs | Why here |
|---|---|---|
| C1 (6) | Japanese → Korean, Chinese → Korean, Korean → Japanese, Chinese → Japanese, Korean → Chinese, Japanese → Chinese | The three languages learn each other in very large numbers, and the courses can be much better than a translated English course (see below). |
| C2 (3) | Vietnamese → Korean, Thai → Korean, Indonesian → Korean | Strong interest in Korean from K-pop and K-drama, and for work in Korea. |
| C3 (6) | Vietnamese, Thai, Indonesian → Japanese and → Chinese | Work and study migration to Japan; Chinese for trade. |
| C4 (3) | Hindi → Korean, Japanese, Chinese | Smallest expected demand. |

What changes per pair (this is why it is not a copy of the English-speaker course):
- Chinese speakers learning Japanese already know what most kanji mean; the course teaches readings and the kana, and warns about characters that look the same but mean something else.
- Japanese and Korean share word order, particles and politeness levels; the course can map one onto the other instead of explaining from zero.
- Korean and Japanese both borrowed vocabulary from Chinese; hundreds of words are recognisable by sound.
- Romanisation is the wrong pronunciation aid for these learners: Japanese speakers read Korean sounds better in kana, Chinese speakers need pinyin-like hints only for new sounds.

What is reused: the target-language side of the existing course (cards, example sentences, dialogues, audio, exercise structure) and the interface dictionary. What is new: all explanations, meanings and notes in the learner's language; a "what you already know" lesson up front; the pronunciation aid; one engine change so a course can have neither side English.

Estimated effort: about two-thirds of a full course each, once the first pair has proven the pipeline. C1 pair one (Japanese → Korean) is the pilot.

Not in scope by Kii's wording: Cantonese as a target for Asian-language speakers. Easy to add after C1.

## 5. Putting Cursor to work

The whole source is in the GitHub repo under `source/` (app, course tools, briefs, plans), kept in step with every release. So Cursor can read everything. Three things limit what it should do:

1. One place writes the app. The main build runs in Claude's workspace and overwrites `source/` on each release. Two writers editing the same files will lose work. Cursor must stay in its own lane (below) and work on branches.
2. The build scripts expect the workspace folder layout. Until they are made location-independent (job 0), Cursor cannot run the checks on Kii's computer.
3. A basic plan has a limited monthly allowance. Spend it on jobs that are large, mechanical and checkable, not on judgment-heavy course writing in languages nobody here can verify.

| # | Job | Who | Output | How we know it is right |
|---|---|---|---|---|
| 0 | Make the tools run from any folder; add `source/CURSOR.md` with the rules and the commands; make releases refuse to overwrite unmerged Cursor work | Claude (main build) | repo ready for a second worker | Cursor can run the build and tests on Kii's machine |
| 1 | Interface dictionaries for Track B native languages (Bengali, Urdu, Turkish, Persian, Polish, Ukrainian first) | Cursor | `tools/i18n/<lang>/ui.json` | the existing generator and validator pass; every key present; placeholders intact |
| 2 | Course profiles for Wave A1 (variant, register, glossary, error zones, pronunciation policy), from the existing lesson plans and the profile template | Cursor | `docs/profiles/en-<t>.md` | checklist in the profile brief; lead reviews before writers start |
| 3 | "What you already know" contrast notes for the six C1 pairs (shared vocabulary, false friends, grammar mapping) | Cursor | `docs/pairs/<native>-<target>.md` | lead and a cold reviewer check a sample against dictionaries |
| 4 | Outreach drafts for Wave A4 language bodies (who to contact, a short email each) | Cursor | `docs/outreach/<lang>.md` | Kii reads and sends; nothing is sent automatically |
| 5 | Second-opinion review of live courses: read a course's decks and list suspected errors with reasons | Cursor (a different model family than the writer where possible) | `tools/target/<t>/REVIEW-2.md` | findings are suggestions; lead verifies before changing content |

Rules for Cursor (to go into `source/CURSOR.md`):
- Work on a branch named `cursor/<job>`, open a pull request, never push to `main`.
- Only add or edit files inside the folders named in the job. Never edit `index.html`, `packs/`, `src/app.html`, or anything outside `source/`.
- Use the strongest model the plan offers for content jobs; the default "auto" model is fine only for job 0-style code chores.
- No secrets in the repo. Supabase service keys, Azure keys and passwords never go into a prompt or a file.
- Every job ends with the listed check passing and a short report of what was unsure.

What stays with the main build: engine changes, course writing and merging, pronunciation tools, tests, releases. Those depend on each other and on the test harness, and a second writer there costs more than it saves.

## 6. Order across tracks (proposal)

1. Job 0, so Cursor can start (about one session).
2. In parallel: Cursor does jobs 1 and 2; the main build does Portugal Portuguese, then the rest of A1 at two to three courses a day when usage allows.
3. Pilot C1 with Japanese → Korean while A1 continues; decide on the rest of C1 from how the pilot goes.
4. B1 as each interface dictionary from job 1 passes its checks.
5. A2, then C2. A3 and A4 only as reviewers and permissions arrive.

Rough size: A1 15 courses, B1 6, C1 6 = 27 courses, on the order of 27 usage windows. At two a day that is about two weeks of continuous running; in practice longer, with usage limits and fixes.

## 7. Decisions for Kii

1. Is the order A1 → C1 pilot → B1 right, or should Asian pairs come first?
2. Which Cursor jobs to start with (suggested: 1 and 2)?
3. Should A3 and A4 wait for native reviewers and community contact (recommended), or be built as drafts marked "beta"?
4. Should new courses launch without a native check as now, or does "live" start to require one?
5. Is Cantonese wanted as a target in Track C?
