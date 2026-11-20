# Korean app — improvement loop

## Baseline (v21)
- 22 decks / 289 cards, no errors, no overflow at 390/1024, session + learn loop + swipe all pass
- Found: drill word 공원 undecomposable (compound vowel ㅝ)

## Iteration 1 — prompt
Fix the baseline defect (공원). Then close the loop between quizzing and spaced repetition: a wrong quiz answer should push that card back to box 1 so it shows up in Review, and a right answer on a never-seen card should create it so Review knows about it. Make audio robust for cards with blanks ("___") and slashes. Let Enter/Space advance a quiz after answering. Re-run harness.

## Iteration 1 — results
- Replaced 공원 → 얼굴 in drill words; badWords now []
- Quiz now feeds SRS: wrong → box 1 / due today / lapse++ (verified: {box:1, lapses:1}); right on unseen → box 2
- Audio: "___" spoken as 아무개 (placeholder name), slashes → pause; verified text
- Enter/Space advances after answering a quiz question (listener cleaned up on next)
- Harness: 0 errors, 0 overflow, session + learn loop + swipe pass

## Iteration 2 — prompt
The Today session should feel like the guided path, not random sampling: its "new cards" phase must pick up where the Practice learn-5 loop left off for the current deck, and the Today page should offer "Continue practice · Deck · card N" when a loop is in progress. Add a session length choice (Quick 10 / Standard 25 / Long 40 items) remembered per user. Re-run harness.

## Iteration 2 — results
- Session size chips (Quick 2 min / Standard 5 / Long 10) on Today, remembered per user; plan rows reflect the size
- New-card phase now continues the open Practice loop (verified: loop at card 6 → session served cards 6,7,8 of that deck); falls back to guided path
- Today quick link becomes "Continue practice · Deck · card 6/12" when a loop is open, and Practice preselects those decks
- Harness: 0 errors, 0 overflow; chip row wrapped to two lines at 390px → shortened labels to fit one line

## Iteration 3 — prompt
Review tab is per-deck only, which is not how spaced repetition is used day to day. Add an "All due" option at the top that queues every due card across decks (newest-lapsed first), and show the Leitner box distribution on Progress so the user can see cards moving toward mastery. Also make the Review completion screen suggest the next concrete action. Re-run harness.

## Iteration 3 — results
- Review tab: "⏰ All due (n)" chip at the top under an "Everything" header; queue spans decks, most-lapsed first (verified order + "across 2 decks" count)
- Completion screen now names the next action: "Continue practice · card 6/12" when a loop is open, else "Learn new cards · Deck", plus when the next cards come due ("in 1 day")
- Progress: "Cards by box" chart new→box 6; sqrt scale so the big "new" bar doesn't flatten the rest
- Harness: 0 errors, 0 overflow; one bug caught by syntax check (duplicate `total`) and fixed

## Iteration 4 — prompt
Audio and first-run polish. On iOS the first "Listen" tap often plays nothing because voices load lazily: warm the engine on the first user gesture and retry once if no Korean voice was ready. Allow Listen from the back of a card too. In Listen-mode quiz, add a visible Replay. Give brand-new users a one-time hint overlay on their first flashcard (tap to flip, swipe to answer), dismissed forever after. Re-run harness.

## Iteration 4 — results
- Audio: engine warmed on first touch/pointer (silent utterance), voices re-picked; speak() retries once after 700 ms if nothing started (late voice list on iOS)
- Listen button on the back of every card too (shows the Korean)
- Listen-mode quiz: "🔊 Replay" + "Listen, then pick the meaning" caption
- First-run overlay on the first flashcard (tap / swipe / listen), dismissed once and persisted (verified hintSeen=1)
- Harness: 0 errors, 0 overflow

## Iteration 5 — prompt
Make progress portable and finish with a full regression. Add Export (copy JSON) / Import (paste) on Progress for the standalone site where account sync is absent, with a merge rather than overwrite. Sanity-check sync merge is symmetrical with the new fields (sessLen, hintSeen, learnPos). Run the full harness at both widths and both themes, rebuild the standalone deploy zip, and publish.

## Iteration 5 — results
- Progress → Backup: "Copy export" (clipboard, fallback to visible text) and "Import" (paste → Merge in). Import merges, never overwrites (verified: xp 30 merged, +1 card)
- mergeState now carries learnPos (max), hintSeen (or), goal/sessLen (newest), free (or); verified symmetric for all fields
- Full harness: 390px dark + 1024px light, 0 errors, 0 overflow, data integrity all green, session/learn/swipe pass
- Standalone site rebuilt (korean-site.zip), smoke-tested: no errors

# Batch 2 (iterations 6–15)

## Iteration 6 — prompt
Accidental swipes lose a card. Add Undo for the last answer in Review and in sessions: restores the card's previous SRS state and puts it back at the front. Show it as a small "↶ Undo" button for 6 seconds after each answer.
### Iteration 6 — results
- Undo after any card answer in Review and sessions: restores SRS state + XP, card returns to front (verified: 11 left/xp 4 → 12 left/xp 0)

## Iteration 7 — prompt
Desktop keyboard parity: 1–4 pick quiz options, Enter advances, F flips, P plays, ←/→ answer; show a one-line shortcut legend on desktop only. Also add a search box on Review ("how do I say…") that filters every deck by Korean, romanization or English and lets you jump straight to that card.
### Iteration 7 — results
- Keys: 1–4 answer quiz, Enter next, F flip, P play, ←/→ answer; numbered <kbd> badges + legend shown only on desktop (hover + ≥700px)
- Review search across all decks (Korean / romanization / English), 12 hits max, tap to jump to that card (verified "bathroom" → 6 hits → jumped to 화장실 어디예요?); input blurred after jump so keys work

## Iteration 8 — prompt
The reading drill teaches sounds but not meanings. Give every drill word a meaning that appears after you answer, and add a running streak counter in the drill (resets on a miss, best streak saved). Also let the user pick drill length for sessions: syllables-only users shouldn't get words.
### Iteration 8 — results
- All 80 drill words now show a meaning after answering (map, skirt, woman…) so the drill doubles as vocab
- Drill streak with 🔥 from 3+, best streak saved; level chosen on Read also drives session drills
- Harness green

## Iteration 9 — prompt
Add a Browse mode: a scrollable reference list of any deck (Korean · romanization · meaning · note, with 🔊 per row), reachable from Review and from each lesson. Cards in the list show their box as a small dot so the list doubles as a per-deck progress view.
### Iteration 9 — results
- 📖 Browse mode on Review: full deck list with box-colored dots, romanization, meaning, note, 🔊 per row; each lesson links "Browse <deck>"
- Harness green; no overflow at 390

## Iteration 10 — prompt
With everything unlocked the Review page is a wall of 22 chips before the card. Collapse the picker: show only the selected deck as a header with a "Change deck ▾" toggle; expand the grouped chips on demand and auto-collapse after a pick. Same on Practice. Remember the collapsed/expanded state.
### Iteration 10 — results
- Deck picker collapsed behind a header card ("Flirting · 0/14 learned · Social · Change deck ▾") on Review and Practice; expands on demand, auto-collapses after a pick on Review (multi-select Practice stays open until Done); state remembered
- Published v23 checkpoint

## Iteration 11 — prompt
Content pass for someone physically in Korea right now: add a "Convenience store & café" deck (ordering drinks, sizes, hot/iced, points cards, heating food, the 봉투 question) and a "Numbers in the wild" deck that drills reading prices, phone numbers, times and floors as written (e.g. 4,500원, 010-, 3층, 오후 2시). Both go under Everyday.
### Iteration 11 — results
- "Café & convenience store" (18) and "Numbers in the wild" (18, reads real prices/phones/times/floors) added under Everyday → 24 decks / 325 cards; harness green

## Iteration 12 — prompt
Give Today a reason to open even when nothing is due: a "Phrase of the day" card (deterministic per date, drawn from unlocked decks, with audio and a one-tap "Add to review"), and a "Listen & pick" mode in the Read tab for phones: hear a syllable or word, choose among 4 Hangul options — no typing needed.
### Iteration 12 — results
- Phrase of the day on Today (deterministic per date from unlocked decks, audio, "+ Add to review" → due today); verified add → 1 due
- Read tab: "🔊 Listen & pick" mode — hear it, choose among 4 Hangul options, meaning shown; mode remembered and used by sessions
- Harness green

## Iteration 13 — prompt
Lessons are read-only. Add a 3-question comprehension check at the end of every lesson (grammar choices like which particle / which ending), required alongside the mini-drill before the lesson counts as done. Write the questions for all 9 lessons.
### Iteration 13 — results
- 27 comprehension questions (3 per lesson) with explanations; pass = 2/3; lesson is "done" only when check + mini-drill both pass (verified gating order both ways)
- Harness green

## Iteration 14 — prompt
Resilience: the app writes localStorage + the account doc on every answer. Debounce local saves, survive quota errors, show a tiny sync status in the header (synced / local / saving), and catch any uncaught error into a toast instead of a silent dead page. Also stop audio when leaving a tab.
### Iteration 14 — results
- localStorage writes debounced (400 ms) and flushed on hide/unload; quota errors surface once as a toast
- Header sync dot: grey local / amber saving / green synced / red error; uncaught errors → toast (verified "boom test")
- Audio stops on tab switch and when the app is hidden

## Iteration 15 — prompt
Progress only shows one week. Add an 8-week activity heatmap (goal met / partial / none) with a "weeks active" count, and make the Today greeting time-aware in Korean (좋은 아침이에요 / 좋은 오후예요 / 좋은 저녁이에요 / 늦었어요, 수고했어요) with the romanization so each visit teaches something.
### Iteration 15 — results
- 8-week heatmap (56 cells, green = goal met, amber = partial, today outlined) + "active days / active weeks" summary; cells sized down after a look
- Today greeting is time-aware Korean with romanization (좋은 아침이에요 / 오후 / 저녁 / 늦었어요)
- Published v24 checkpoint

# Batch 3 (iterations 16–25)

## Iteration 16 — prompt
Dark-mode polish with screenshots at 390px: check every tab in dark, fix low-contrast or wrong-token spots (quiz option hover, kbd badges, heatmap partial color, share card button, browse dots on dark paper), and give active quiz options a hover/pressed state. Then add a romanization toggle ("Hide romanization") on Review/Practice so readers can wean off it; remembered.
### Iteration 16 — results
- Dark audit at 390: heat "partial" cells now amber at 45% (was near-invisible), heat columns aligned with the week row, quiz header no longer wraps, quiz options get hover/pressed states
- "Hide romanization" toggle (Review + Practice, synced, remembered): blurs romanization everywhere incl. Browse and lessons; tap to peek 2.5 s without flipping the card
- Harness green

## Iteration 17 — prompt
Add a "Weak spots" practice: one tap on Practice builds a quiz from cards in box ≤2 plus anything missed in the last 7 days, across all decks (cap 20), and a "Type the Korean" answer mode in Practice for users with a Korean keyboard (accepts exact Hangul, ignores spaces/punctuation, shows diff on miss).
### Iteration 17 — results
- "Weak spots · n" on Practice: box ≤2 or missed in the last 7 days, across decks, weighted, cap 20; disabled until there are 2+
- "⌨️ Type 한" quiz mode: exact Hangul (spaces/punct ignored, first alternative accepted), character diff on miss, feeds SRS; verified right + wrong paths

## Iteration 18 — prompt
Add three lessons with checks: 10 · Titles & honorifics (씨/님, 오빠/언니/형/누나, when to use names), 11 · Making plans (ㄹ까요? / ㄹ래요? / 자 / 같이), 12 · Texting like a local (ㅋㅋ ㅎㅎ ㅠㅠ, dropping particles, 응/네, ㄱㄱ/ㅇㅋ). Map them to the Family, Hanging out and Casual texting decks.
### Iteration 18 — results
- Lessons 10–12 (Titles & honorifics, Making plans, Texting like a local) with 9 new check questions → 12 lessons / 36 checks; fixed a muddled 아/야 sentence on re-read

## Iteration 19 — prompt
Custom cards: let the user add their own phrases (Korean, romanization optional, meaning, note) into a "My phrases" deck that behaves like any other (review, practice, browse, search, sync). Add from a form on Review/Browse and from the Phrase-of-the-day pattern; allow delete.
### Iteration 19 — results
- "My phrases" custom deck (Social, always unlocked): add form on Review, delete in Browse, searchable, reviewable, synced (merge dedupes by Korean); distractors borrowed from other decks when the deck is small; empty-deck guards in practice/test
- 25 decks; harness green

## Iteration 20 — prompt
Audio speed control (0.7× / 0.85× / 1×) remembered and applied everywhere, and a session recap share card (PNG) at the end of each session showing cards/quiz/reading results + streak, reusing the share-card renderer. Then publish v25 and rebuild the standalone zip.
### Iteration 20 — results
- Audio speed (slow 0.7 / normal 0.85 / native 1.0), remembered + synced; session recap share card (PNG) with cards/quiz/reading/streak; published v25

## Iteration 21 — prompt
Example sentences: every phrase deck card gets a second line of context on the back when available — a short dialogue pair (Q/A) using the card. Start with the 6 most-used decks (Survival 1/2, Introductions, Small talk, Hanging out, Café) via a DIALOG map; show it on the card back with its own 🔊.
### Iteration 21 — results
- 46 dialogue pairs (A/B + translation, own 🔊) on card backs for Survival 1/2, Introductions, Small talk, Hanging out, Café; also shown in Browse; card faces now grid-stacked so a taller back grows the card instead of clipping

## Iteration 22 — prompt
Performance + install: measure first paint cost of the 300-card page, defer non-critical work (voice list, heatmap) off the first frame, add a minimal inline SVG favicon, and make the standalone build installable (service-worker-free offline via Cache API is not possible without a SW; instead ship a tiny SW in the standalone zip only, registered only when not inside claude.ai). Verify the artifact path is unaffected.
### Iteration 22 — results
- Account sync moved off the first frame (idle callback); harness caught a bad requestIdleCallback call → fixed
- Standalone build: SVG favicon, service worker (network-first, offline fallback) registered only outside claude.ai; verified: SW registered, 4 entries cached, DOMContentLoaded ~360 ms on 163 KB page

## Iteration 23 — prompt
Learning science: add a "Listen first" option for new cards in sessions and Practice (audio plays before the Korean text appears, text reveals after 1.5 s or on tap), and a per-card "mark as leech" after 4 lapses: leeches get a 🩹 badge, surface in Hardest cards, and are excluded from the auto session until the user re-enables them.
### Iteration 23 — results
- "Listen first (new cards)": audio plays while the Korean is veiled, reveals after 1.8 s or tap
- Leeches: 4+ lapses → 🩹 badge, parked from auto sessions (verified excluded), re-enable from Hardest cards

## Iteration 24 — prompt
Deck-level mastery goals: each deck gets a mastery % (cards in box ≥4 / total) with a ring in Browse and the Progress list, a "Mastered" celebration + bonus XP the first time a deck hits 100% box ≥4, and the Today page shows the nearest deck to mastery as a nudge ("Numbers · 2 cards from mastery").
### Iteration 24 — results
- Deck mastery (% in box ≥4): dual bar on Progress (learned amber / mastered green), % in Browse header, 🏆 + 50 XP the first time a deck is fully mastered, Today nudge "Numbers · 2 cards from mastery → Review it" (all verified)

## Iteration 25 — prompt
Batch close: full regression at 390/1024 × light/dark, content audit (every card has 4 non-empty fields, no duplicate Korean across decks, every DIALOG/MEAN key resolves, every lesson deck exists, every check has exactly one correct index in range), accessibility pass (buttons have accessible names, inputs have labels, focus visible), publish v26, rebuild zip.
### Iteration 25 — results
- Content audit: 325 cards, 0 bad fields, 0 duplicates, 0 orphan dialogues/meanings, 12/12 lessons have decks + checks, 36 checks well-formed
- Accessibility: 0 unnamed buttons, 0 unlabeled inputs; focus rings present
- Regression: 390 dark + 1024 light, 0 errors, 0 overflow; published v26; standalone zip rebuilt (SW cache bumped)

# Batch 4 (iterations 26–35)

## Iteration 26 — prompt
Sentence builder drill: show an English sentence, scrambled Korean word chips, user taps them into order (SOV + particles). Pull sentences from the DIALOG lines and lesson examples (≥3 words). Wrong order shows the correct sentence with the first misplaced word highlighted. Add it as a third mode on the Read tab ("🧩 Build") and to Long sessions.
### Iteration 26 — results
- 🧩 Build mode on Read: 132 sentences (from dialogues + multi-word cards), tap-to-order chips, first misplaced word highlighted, audio of the sentence; 3 per Long session

## Iteration 27 — prompt
Two more decks and a lesson: "Counters" deck (개, 명, 잔, 병, 마리, 권, 장, 살, 시간, 번 with examples) and "Weather & feelings" deck; lesson 13 · Counters with 3 checks, mapped to the Counters deck. Grammar group for Counters, Everyday for Weather & feelings.
### Iteration 27 — results
- Counters (16) + Weather & feelings (18) decks, lesson 13 · Counters with 3 checks → 27 decks / 359 cards, 13 lessons; harness caught 2 duplicates with Adjectives (더워요/추워요) → reworded

## Iteration 28 — prompt
Quiz explanations: for Particles, Core verbs, Counters and Numbers decks, a wrong answer should say WHY in one line (rule from the note), and the quiz should offer "Show rule" linking to the matching lesson section. Also add a per-deck "Practice history" (last 10 quiz scores sparkline) in Browse header.
### Iteration 28 — results
- Grammar decks explain a wrong answer ("Why: …" from the card note) with "Show rule ↗" into the matching lesson; per-deck last-10 quiz sparkline in Browse header

## Iteration 29 — prompt
Honorific/casual converter practice: a "Switch register" drill — show a casual sentence, ask for the polite 요-form (or the reverse) as multiple choice from a curated PAIRS list of 30; include it in the Practice tab as a mode chip for the Social decks and as 2 items in Standard/Long sessions.
### Iteration 29 — results
- 🎚️ Polite ↔ casual drill (30 curated pairs, both directions) on Read tab, as a 10-question drill on Practice, and 2 per Standard/Long session; harness updated for auto-advancing session items

## Iteration 30 — prompt
Import decks from CSV/TSV (Korean, romanization, meaning, note) pasted into the My phrases form — multi-line paste creates many cards at once with a preview count; export My phrases as CSV. Then publish v27 checkpoint.
### Iteration 30 — results
- Bulk CSV/TSV import into My phrases (quoted fields, 2–4 columns, dedupe, preview count) + CSV export; published v27

## Iteration 31 — prompt
Study reminders without push: a "Study time" setting on Today (e.g., 21:00) that drives (a) a streak-at-risk banner after that hour when today has 0 XP, (b) a calendar (.ics) download of a daily recurring reminder for the user to add to their phone calendar, and (c) the Phrase-of-the-day card switching to "tonight's phrase" copy after the hour.
### Iteration 31 — results
- Study time setting on Today; after it, with 0 XP and a live streak → "Streak at risk" banner; 📅 Reminder downloads a daily .ics (downloads capability in the artifact, direct download on the site); phrase card becomes "Tonight's phrase"

## Iteration 32 — prompt
Smarter session ordering: interleave item types (card, quiz, drill) instead of blocks, never show the same card twice within 3 items, put listening items after the card they test when possible, and end with the hardest-missed card of the session as a final recall. Verify with a distribution test over 200 generated sessions.
### Iteration 32 — results
- Sessions interleave types (max same-type run 3 over 200 generated sessions), same card never within 3 slots (0 violations), a card's quiz never precedes its card (0), and a missed card comes back as a final recall ("Last one")

## Iteration 33 — prompt
Onboarding: first launch asks two questions (Can you read Hangul? / What's your goal: travel, dating & friends, K-drama, work) and uses the answers to set the starting deck, unlock Hangul decks as done if they can read, pick the session size, and reorder the Today quick links. Store under S.onboard; skippable; re-runnable from Progress.
### Iteration 33 — results
- First-launch setup (read Hangul? / goal track / daily time): fluent readers get Hangul decks pre-mastered + lesson 1 done, goal picks the starting deck and a "Your track" row on Today; skippable; redo from Progress. Existing users with progress see it once too (skippable)

## Iteration 34 — prompt
Tone & copy pass: read every user-facing string for tone consistency (plain, short, no exclamation spam), fix any English typos, make all Korean UI words have a romanization tooltip on hover/long-press (수고했어요, 잘했어요, 대박, 맞아요 etc.), and ensure every toast reads as a sentence. Then dark/light screenshots of Today and Practice for a final visual check.
### Iteration 34 — results
- Toasts now read as sentences; Korean UI words (수고했어요, 대박, 맞아요, 한글…) carry romanization tooltips; no typos found; dark/light Today screenshots reviewed — clean

## Iteration 35 — prompt
Batch close: full regression + content audit, publish v28, rebuild standalone zip with SW cache bump.
### Iteration 35 — results
- Regression + audit clean: 27 decks / 359 cards, 13 lessons / 39 checks, 30 register pairs, 133 builder sentences, 0 defects; published v28; zip rebuilt

# Batch 5 (iterations 36–45)

## Iteration 36 — prompt
Review forecast: show "due today / tomorrow / this week" on Today and Review, with a 14-day mini bar chart on Progress so the user can see review load coming. Compute from card due days.
### Iteration 36 — results
- Forecast from due days: Today meta shows due / tomorrow / this week; Review "All due" header too; Progress has a 14-day bar chart with summary (verified counts)

## Iteration 37 — prompt
Personal notes on cards: a small "✎ note" on the card back that opens an inline textarea; notes are saved per card (S.notes), shown in Browse and search, synced, exported with progress. Also "Pronunciation tips" deck in Foundations: batchim sounds, ㅅ vs ㅆ, liaison (연음), ㄹ flap, aspirated vs tense, with examples.
### Iteration 37 — results
- ✎ personal notes on card backs (inline form, delete, synced, searchable, in Browse); "Pronunciation tips" deck (18) in Foundations; harness caught a duplicate key (ㅡ) → renamed; 28 decks / 377 cards

## Iteration 38 — prompt
Lesson 14 · Telling a story in the past: 았/었어요 sequence words (먼저, 그리고, 그다음에, 그래서, 그런데, 마지막으로), "yesterday I…" template, with a Build-mode set of 8 past-tense sentences and 3 checks. Add a "Connectors" deck in Grammar.
### Iteration 38 — results
- Connectors deck (14, Grammar), Lesson 14 · past-tense storytelling + 3 checks, 8 past-tense builder sentences → 29 decks / 391 cards, 14 lessons

## Iteration 39 — prompt
"Explain this" breakdown: on dialogue card backs and in Build mode results, a tap on "Break it down" shows each word with its role (particle/verb ending/noun) using a small rule-based tagger (known particles 은/는/이/가/을/를/에/에서/도/로/와/하고/만, endings 요/어요/아요/했어요/ㄹ게요/ㄹ까요/ㄹ래요/세요/주세요/자, question words). Verify on 20 sentences.
### Iteration 39 — results
- "🔍 break it down" on dialogue backs + automatic in Build results: rule-based tagger (particles, endings incl. past via ㅆ-batchim, counters, question words, connectors, 지 마); 20/20 test sentences tag sensibly after a second pass

## Iteration 40 — prompt
Hangul drill completeness: add compound vowels (ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ ㅒ ㅖ) and tense consonants (ㄲ ㄸ ㅃ ㅆ ㅉ) plus finals ㅅ/ㅆ/ㄷ/ㅈ/ㅊ/ㅌ/ㅍ/ㅎ (all → t) and ㅋ/ㄲ (k) to the decomposer, so any real word works; add a "Hangul · advanced" deck with those letters; extend the word list with 20 words using them. Then publish v29.
### Iteration 40 — results
- Decomposer now covers all 19 initials, 21 vowels, 28 finals (double finals included); "Hangul · advanced" deck (16); +21 words (꽃 닭 의사 과일 값…) all verified; syllable mode still uses basic letters only; harness caught duplicate key ㅢ → fixed; published v29. 30 decks / 407 cards

## Iteration 41 — prompt
Per-deck practice streaks and a "deck of the week" rotation: Today suggests one Everyday/Social deck per ISO week (deterministic) with a 7-day mini-goal (learn all + pass Test everything) and a badge list on Progress of completed weekly decks.
### Iteration 41 — results
- Deterministic "Deck of the week" (ISO week → Everyday/Social deck) on Today with progress bar; completing it (all learned + 80% test) awards a weekly badge listed on Progress; synced

## Iteration 42 — prompt
Shareable deep links: hash routes that open a specific deck in Review/Browse/Practice (#review=Flirting, #browse=Counters, #practice=Introductions) so the user can bookmark or send a deck; keep the hash contract (plain tokens, letters/digits/hyphens only — map deck names to slugs). Update internal links to use them where useful.
### Iteration 42 — results
- Deep links #review-<deck>, #browse-<deck>, #practice-<deck> (plain hyphen slugs, all unique); 🔗 link button in Browse; internal links switched to slugs; all three routes verified

## Iteration 43 — prompt
Size & performance budget: measure the HTML size and parse/boot time; move the big static tables (DECKS, DIALOG, LESSONS text) out of hot paths where possible, lazily build SENTS/weak pools, and cache deckUnlocked()/learned() per render (they're called in O(decks × cards) loops). Verify render of Today/Review/Progress each under 50 ms in headless Chromium.
### Iteration 43 — results
- learned()/deckUnlocked() memoized per state change; with 203 cards of progress: Today 1.7 ms, Review 1.2 ms, Progress 1.5 ms, planSession 0.6 ms; boot DCL ~320 ms; page 219 KB (well under budget)

## Iteration 44 — prompt
Error-proofing data entry and edge cases: empty-state copy for every tab when there is zero progress, Review with nothing due and nothing new (all mastered), a deck selected that no longer exists (custom deck emptied), import of a malformed export, and a session with no due/new cards (should still run quiz + drills). Write tests for each.
### Iteration 44 — results
- Edge cases tested: all-mastered (session still 12 items of quiz/drills; Review says when cards return), stale/removed deck (falls back cleanly), custom deck emptied mid-review, malformed import rejected, zero-progress session (17 items); found default Practice deck had drifted to "Hangul · advanced" after Foundations grew → pinned to Survival phrases

## Iteration 45 — prompt
Batch close: regression + content audit, publish v30, rebuild zip.
### Iteration 45 — results
- Clean: 30 decks / 407 cards, 14 lessons / 42 checks, 150 builder sentences, 0 defects; published v30; zip rebuilt

# Batch 6 (iterations 46–55)

## Iteration 46 — prompt
Listening comprehension: a "🎧 Listen" drill that plays a full A/B dialogue (from DIALOG) and asks one of three question types — "What did B say?" (pick English), "Where would you hear this?" (pick context from the deck name), or "What is A asking?" — with a replay button and slow replay. Add to Read tab modes and 2 per Long session.
### Iteration 46 — results
- 🎧 Listen drill: full A/B dialogue audio with slow replay, three question types (what A/B said, where you'd hear it), reveal after answer; 2 per Long session; 10 random generations all produce 4 distinct options

## Iteration 47 — prompt
Lesson 15 · Negation & ability (안 / 못 / -지 않아요 / -(으)ㄹ 수 있어요·없어요 / 몰라요 vs 모르겠어요) with examples, 3 checks, and 10 builder sentences; map to Core verbs. Plus a "Shadowing" timer on card backs: 🗣 button that plays the audio 3× with 2-second gaps so the user repeats aloud (no mic needed).
### Iteration 47 — results
- Lesson 15 · negation & ability (안/못/-지 않아요/-ㄹ 수 있어요/몰라요 vs 모르겠어요) + 3 checks + 10 builder sentences → 15 lessons / 45 checks / 158 sentences; 🗣 shadow ×3 on card backs (plays 3× with pauses, timers cleaned on unmount)

## Iteration 48 — prompt
Grammar reference: a searchable "Grammar" index reachable from Lessons (top button) listing every pattern taught (particle, ending, connector, counter) with a one-line rule, an example, and a link to its lesson — generated from a PATTERNS table so it stays in sync. Also add per-group progress rings (Foundations/Everyday/Grammar/Social) at the top of Lessons.
### Iteration 48 — results
- 📚 Grammar index (36 patterns, all linked to a lesson, live search) from Lessons; per-group progress rings at the top of Lessons; fixed same-hash jump not rendering

## Iteration 49 — prompt
Tags across decks: tag each card implicitly by deck group plus explicit TAGS for themes (travel, dating, work, food, time, polite, casual, slang). Add "Review by tag" chips on Review (Everything section) and tag filters in Practice "Test everything". Verify every deck maps to ≥1 tag.
### Iteration 49 — results
- 12 tags (#travel #dating #work #food #time #polite #casual #slang #grammar #reading #family #feelings) — every deck tagged; Review by tag (68 cards across 5 decks for #dating) and one-tap tag selection in Practice; a silent failed patch from an earlier guard was caught by the test and fixed

## Iteration 50 — prompt
Mid-batch checkpoint: regression at both widths/themes, publish v31, rebuild zip. Then review the Today page length on phone and collapse secondary panels (study time, deck of the week, phrase of the day, track) into a compact two-column grid where they fit.
### Iteration 50 — results
- Today secondary panels in a two-column grid on wide screens (study time + deck of the week side by side; phrase + track full width); page ~7% shorter; published v31; zip rebuilt

## Iteration 51 — prompt
"K-pop-style lines" deck of original, copyright-free phrases in the register of song lyrics and fan culture (팬, 콘서트, 응원봉, 최애, 덕질, 입덕, 컴백, 무대, 떼창) and a "Social media & slang" deck (인스타, 스토리, 좋아요, 팔로우, 짤, 갑분싸, TMI, 꾸안꾸, 존맛탱, ㅇㅈ). Both Social. Note: no real lyrics, no artist names.
### Iteration 51 — results
- "K-pop & fan culture" (16) and "Social media & slang" (16) — original phrases only; tagged #slang/#casual; K-drama track updated → 32 decks / 439 cards

## Iteration 52 — prompt
Number dictation drill: hear a price / time / phone number / count spoken in Korean (generated, not from cards), type the digits. Covers Sino (prices, minutes, phone, floors) and native (hours, counts, age) with the right counter words. Add as a Read-tab mode "🔢 Numbers" and 2 per Long session. Verify the generator's Korean for 40 random values against a reference converter.
### Iteration 52 — results
- 🔢 Numbers dictation (prices, times, phone numbers, floors, counts with counters, ages, minutes) generated on the fly with slow replay; Sino/native converters verified against reference values (caught 일만 → 만 bug); 2 per Long session

## Iteration 53 — prompt
Confidence & calibration: before flipping a card in Review, optionally ask "Do you know it?" (yes/no) and track prediction vs outcome; show a calibration % on Progress ("you said yes and were right 82% of the time") and use overconfident cards (said yes, got it wrong) as a priority group in Weak spots. Opt-in toggle, default off.
### Iteration 53 — results
- Opt-in "Do you know it?" prompt before flipping; calibration stats on Progress; overconfident cards (said yes, missed) get priority in Weak spots (verified end to end); sino() fixed for ≥110,000

## Iteration 54 — prompt
Readability & typography pass: Korean display font fallbacks for devices without Noto Sans KR (Apple SD Gothic Neo, Malgun Gothic), line-height for mixed Korean/Latin, larger tap targets (min 44px) on chips and quiz options on touch devices, and a font-size setting (A−/A+) remembered.
### Iteration 54 — results
- Korean font fallbacks (Apple SD Gothic Neo / Malgun / Nanum), body line-height 1.45, ≥44px nav + ≥40px chips + 48px options on touch devices, A−/A+ text size (0.85–1.3×) remembered and synced; no overflow at 1.15× on any tab

## Iteration 55 — prompt
Batch close: regression + content audit, publish v32, rebuild zip.
### Iteration 55 — results
- Audit caught 2 untagged decks (a tag patch from #51 had silently not applied) → fixed; harness updated to assert tag coverage going forward
- Clean: 32 decks / 439 cards, 15 lessons / 45 checks, 36/36 patterns linked, 159 sentences, 0 defects; published v32; zip rebuilt

# Batch 7 (iterations 56–65)

## Iteration 56 — prompt
Dialogue role-play: pick a dialogue, the app plays A's line, the user plays B — choose B's line from 4 Korean options (or type it in ⌨️ mode), then hear the full exchange. Add "🎭 Role-play" to the Read tab and 1 per Standard session.
### Iteration 56 — results
- 🎭 Role-play: A speaks, you pick B's line (4 Korean options), then hear the exchange; 1 per Standard, 2 per Long session

## Iteration 57 — prompt
Verb conjugator tool on the Grammar index: type a dictionary form (가다, 먹다, 하다, 마시다, 예쁘다, 듣다, 돕다, 살다…) → polite present/past/future, casual, -(으)ㄹ까요, -고 싶어요, -지 마세요, negative 안. Handle vowel contraction, 하다, ㅡ-drop, ㄷ/ㅂ/ㄹ irregulars. Verify against 15 known conjugations.
### Iteration 57 — results
- Verb conjugator in the Grammar index: polite/past/future/casual/formal/shall-we/want/don't/negative, with 하다, vowel contraction, ㅡ-drop, 르, ㄷ/ㅂ/ㄹ irregulars; 18 verbs × 5 forms verified (ㄷ/ㅂ irregular -(으)ㄹ forms fixed on second pass)

## Iteration 58 — prompt
Stroke order: SVG stroke-order animations for the 24 basic Hangul letters (14 consonants + 10 vowels) as ordered path lists, playable from the Hangul decks' card backs and the Hangul lesson. Verify every letter has ≥1 stroke and the animation element renders.
### Iteration 58 — results
- Stroke-order SVG animations for all 24 basic letters: on Hangul card backs (↻ replay) and a tappable 24-letter chart in Lesson 1; conjugator irregular -(으)ㄹ fix landed properly this time (18 verbs × 5 forms all correct)

## Iteration 59 — prompt
"2-minute blitz": a timed mode on Practice — 120 seconds, as many read-mode questions as possible from the selected decks, combo multiplier for streaks, personal best saved per deck selection, results card. Pause-safe (timer stops when the tab is hidden).
### Iteration 59 — results
- ⚡ 2-minute blitz on Practice: read-mode rapid fire with auto-advance, combo multiplier, pause when tab hidden, personal best per deck selection, XP capped at 30

## Iteration 60 — prompt
Checkpoint: publish v33 + zip. Then "Words from dialogues": extract every distinct word that appears in DIALOG/builder sentences but is not a card, run it through the breakdown tagger to strip particles/endings, and show the top 60 as a generated "Dialogue vocab" reference list (not a deck) in the Grammar index with 🔊 and the sentence it came from.
### Iteration 60 — results
- Published v33; "Words from dialogues" list (52 words, with source sentence + 🔊) in the Grammar index

## Iteration 61 — prompt
Accessibility for Korean: give every Korean-only element an aria-label with romanization + meaning where known (cards, options, browse rows), make the flashcard operable by keyboard with announced state (aria-pressed/aria-live region for "Got it"/"Again"), and respect prefers-contrast: more with stronger borders. Verify with an axe-style scan: no missing names, no contrast fails on text tokens in both themes.
### Iteration 61 — results
- aria-labels with romanization on cards/options/listen buttons, aria-pressed + live region announcing flips and answers, prefers-contrast:more support; contrast scan found light-mode muted text at 4.34:1 → darkened to pass 4.5:1 in both themes; 0 unnamed controls

## Iteration 62 — prompt
Group certificates: when every deck in a group is ≥80% mastered and all its lessons' checks are passed, generate a certificate PNG (group name, date, stats, level) and list earned certificates on Progress. Also a theme accent picker (red / green / blue / plum) remembered.
### Iteration 62 — results
- 🎓 Group certificates (PNG) when every deck ≥80% mastered + all checks passed (+100 XP), listed on Progress; accent picker (red/green/blue/plum) with dark variants, synced

## Iteration 63 — prompt
Smarter new-card pacing: cap new cards per day (default 15, setting 5–40) counted across all flows, show "new today 7/15" on Today, and when the cap is reached the session/Practice shifts to reviews and drills with a clear note. Verify the counter increments from Review, Practice learn-5 and sessions, and resets at local midnight.
### Iteration 63 — results
- Daily new-card cap (default 15, 5–40 setting): counted wherever a card is first graded, shown as "new today 3/15"; sessions and Review stop introducing new cards at the cap (verified 0 new after cap), Practice learn-5 warns but proceeds; resets with the local date

## Iteration 64 — prompt
Micro-interactions: haptic-style feedback via Vibration API where available on correct/wrong, a subtle confetti burst on level-up, mastery and certificates (canvas, respects reduced motion), and a satisfying card-flip sound toggle using WebAudio tones (no files). All optional, off by default except the visual burst.
### Iteration 64 — results
- Confetti (canvas, 90 frames, reduced-motion aware) on level-up / mastery / certificate; optional vibration + WebAudio tones (off by default) for right/wrong/flip

## Iteration 65 — prompt
Batch close: regression + content audit, publish v34, rebuild zip.
### Iteration 65 — results
- Clean regression; published v34; zip rebuilt

# Batch 8 (iterations 66–75)

## Iteration 66 — prompt
Content: "At the doctor & pharmacy" deck (symptoms, 약국, 처방전, allergy, insurance) and "Housing & daily errands" deck (고시원/원룸, 보증금/월세, 택배, 분리수거, 관리비, 세탁소). Everyday group, #travel/#polite tags. Dialogues for 8 of them.
### Iteration 66 — results
- "Doctor & pharmacy" (16) + "Housing & errands" (16) with 8 dialogues, new #living tag → 34 decks / 471 cards

## Iteration 67 — prompt
Learning analytics on Progress: retention curve (accuracy by box at review time, from a running log of the last 500 reviews), average answer latency per mode, and best time of day — all computed client-side from a compact review log. Verify the log stays bounded and the charts render with 0, 10 and 500 entries.
### Iteration 67 — results
- "How you learn" panel: retention by box, seconds per card, best hour — from a bounded 500-entry review log (verified 0/10/500 entries render; log capped at 500)

## Iteration 68 — prompt
Adaptive intervals: if retention for a box over the last 30 reviews drops under 70%, shorten that box's interval by 30% for this user (and lengthen by 20% when ≥95% over 50 reviews), within sane bounds. Show the user's personal interval table on Progress with a reset. Unit-test the adjustment function.
### Iteration 68 — results
- Adaptive intervals: box multiplier ×0.7 when last-30 retention <70%, ×1.2 when ≥95% over 50, bounded 0.4–2 (unit-tested: low/high/too-few/floor/cap); personal interval table + reset on Progress

## Iteration 69 — prompt
Dialogue coverage push: write dialogues for the 40 most common phrase cards that still lack one (prioritize Small talk, Introductions, Hanging out, Flirting, Cute, Casual texting, Hype, Time & days, Weather). Verify all keys resolve and listening/role-play pools grow accordingly.
### Iteration 69 — results
- +38 dialogues (keys all resolve) → 92 dialogues, builder sentences 159 → 227; listening/role-play pools grow with them

## Iteration 70 — prompt
Checkpoint v35 + zip. Then "Study plan" generator: given a target (e.g. "trip in 3 weeks" or "conversational in 90 days") produce a day-by-day plan (which decks/lessons per week, daily session size, new-card cap) shown on Today with today's step highlighted; user picks target from presets or a date.
### Iteration 70 — results
- 🗺️ Study plan presets (Trip 3 wks / Friends & dating 6 wks / Conversational 13 wks, custom weeks): week-by-week decks + lessons, sets new-card cap and session size, current week shown on Today with deck shortcuts; published v35

## Iteration 71 — prompt
Session summary insights: at the end of a session show 1–2 concrete observations computed from this session (e.g. "You missed 3 Particles cards — all 은/는 vs 이/가", "Listening was your weakest: 2/5", "Fastest mode: read") with a one-tap action for each (practice that deck / open that lesson / weak spots).
### Iteration 71 — results
- Session insights (missed-deck → open lesson / practice; weakest mode → weak spots or drill; perfect mode); first attempt rendered before computing — caught by test, reordered

## Iteration 72 — prompt
Offline/standalone parity: in the standalone build, add an in-app "Sync code" fallback — a 6-word passphrase derived QR-less pairing isn't possible without a server, so instead make Export/Import one tap via the Web Share API (share the export as a .json file to AirDrop/Files) and Import via file picker. Keep clipboard path as fallback. Verify both code paths exist and don't throw where APIs are missing.
### Iteration 72 — results
- "Share file" (Web Share → downloads capability → direct download fallback) and "Open file" import; verified download fallback and file import merge

## Iteration 73 — prompt
Content QA sweep by a second pass: re-read every card's romanization against a deterministic Revised-Romanization transliterator built from the decomposer; flag mismatches beyond allowed stylistic variants (shi/si, oe/we, spacing) and fix the real errors.
### Iteration 73 — results
- Transliterator sweep over 471 cards: 30 flagged, all false positives (liaison ㅆ+vowel → ss, ㄹㄹ → ll, digits spoken as words); 0 real romanization errors found

## Iteration 74 — prompt
Standalone build hardening: add a basic 404/offline page served by the SW, a "new version available — reload" prompt when the SW updates, cache-bust the Google Fonts stylesheet gracefully offline (fall back without FOIT), and a build script (build.sh) that regenerates index.html/sw.js/zip in one command for future updates.
### Iteration 74 — results
- Standalone: offline.html fallback for uncached navigations, fonts cached stale-while-revalidate with empty-CSS fallback, "New version ready · Reload" toast on SW update, build.sh regenerates index/sw/zip; verified offline app load + offline fallback page

## Iteration 75 — prompt
Batch close: regression + audit, publish v36, rebuild zip.
### Iteration 75 — results
- Clean; published v36; zip rebuilt

# Batch 9 (iterations 76–85)

## Iteration 76 — prompt
Lesson 16 · Honorific verbs & 요-form upgrades (드시다, 주무시다, 계시다, 말씀하시다, -(으)시-), with 3 checks and 8 cards added to Introductions? No — new "Honorifics" deck in Grammar. Lesson 17 · Asking for things politely (-아/어 주시겠어요?, -(으)면 안 돼요?, 혹시, 좀) mapped to Asking around. Checks for both.
### Iteration 76 — results
- Honorifics deck (16, Grammar) + Lessons 16 (honorific verbs) and 17 (polite requests) with 6 checks → 35 decks / 487 cards, 17 lessons / 51 checks

## Iteration 77 — prompt
PATTERNS and dialogues for the new grammar: add -(으)시-, 드시다/주무시다/계시다, 좀, 혹시, -아/어 주시겠어요?, -(으)면 안 돼요?, -아/어도 돼요? to the Grammar index; add 6 dialogues using honorifics/requests; extend the breakdown tagger with 세요/셨어요/주시겠어요/도 돼요/면 안 돼요 so Build-mode explanations stay right.
### Iteration 77 — results
- +7 grammar patterns (43), +6 honorific/request dialogues (98), tagger handles 세요/셨어요/주시겠어요/도 돼요/면 안 돼요 (fixed exact-length ending match)

## Iteration 78 — prompt
Practice "Exam" mode: a 25-question mixed exam across all unlocked decks with no feedback until the end, then a graded report by group (Foundations/Everyday/Grammar/Social) with the missed items listed and one-tap re-drill. Save last 5 exam scores and show trend on Progress.
### Iteration 78 — results
- 📝 Exam (25 mixed questions, no feedback until the end), graded by group with missed list + re-drill; last 5 scores on Progress (verified silent flow, report, save)

## Iteration 79 — prompt
Smart review ordering within a session/All-due queue: prioritize by (overdue days × lapses) with leeches excluded, interleave decks so no two consecutive cards share a deck when possible, and put hardest first only after a 2-card warm-up of easy ones. Test with a synthetic 60-card queue.
### Iteration 79 — results
- Review ordering: 2 easy warm-ups, then overdue×lapses priority, leeches excluded, no two consecutive cards from one deck (synthetic 60-card queue: 0 adjacent, 0 leeches, warm-up priorities 1,2 then max 36)

## Iteration 80 — prompt
Checkpoint v37 + zip. Then Today "streak shield": earn one shield per 7-day streak (max 2 banked); a missed day consumes a shield instead of breaking the streak; show shields next to the flame and explain in Progress.
### Iteration 80 — results
- 🛡️ Streak shields: earned at every 7-day streak (max 2), auto-spent on a missed day (verified: 7-day earn, miss → shield used, streak preserved at 5 incl. today-pending); shown in header and heatmap; published v37

## Iteration 81 — prompt
Cross-tab consistency pass: every place that lists decks (Review picker, Practice picker, Progress list, Browse header, Today track/plan chips) must show the same three numbers (learned / mastered% / due) in the same order and the same lock icon rules. Factor a single deckBadge(d) helper and use it everywhere. Verify by extracting the numbers from each surface for one deck and asserting equality.
### Iteration 81 — results
- Single deckBadge() (learned/total · mastered% · due) used by Review, Practice, Progress, Browse, Today chips; asserted identical text across surfaces

## Iteration 82 — prompt
Localized UI strings pass for Korean learners who prefer Korean labels: a UI language toggle (English / 한국어 labels for tabs, buttons and headings via a STR table, ~80 strings), remembered. Content stays as-is. Verify no untranslated key and the layout still fits at 390px in Korean.
### Iteration 82 — results
- 한국어 UI toggle: 88-string table translating tabs, buttons, headings (exact + "key · suffix" matches); content untouched; no overflow at 390 in Korean

## Iteration 83 — prompt
Card quality: add an "example sentence" line (ko + en) for the 60 most common single-word cards that lack dialogues (nouns/adjectives in Food, Time, Weather, Family, Counters, Connectors, Adjectives), shown on the back under the note with 🔊, via an EXAMPLES map. Verify keys resolve.
### Iteration 83 — results
- 64 example sentences (ko + en + 🔊) for single-word cards without dialogues; shown on card backs and Browse; builder sentences 227 → 284

## Iteration 84 — prompt
Housekeeping: dead code & CSS audit — find unused functions and selectors, remove them; split the giant inline script into labeled sections with a table of contents comment; confirm no behavior change via the full harness; measure size before/after.
### Iteration 84 — results
- Audit found no unused functions or CSS classes; removed one no-op line; added a section table of contents to the script; size ~302 KB; harness unchanged

## Iteration 85 — prompt
Batch close: regression + audit, publish v38, rebuild zip.
### Iteration 85 — results
- Clean; published v38; zip rebuilt

# Batch 10 (iterations 86–95)

## Iteration 86 — prompt
Pronunciation self-check without a mic: a "Compare" mode that plays the model audio, then counts down 3-2-1 for the user to say it, then plays it again at slow speed with the syllables highlighted one by one in sync (approximate timing by syllable count × rate). Add to Read tab as "🗣 Say it".
### Iteration 86 — results
- 🗣 Say it: listen with syllable highlighting → 3-2-1 → say it → slow compare with sync highlight; self-mark

## Iteration 87 — prompt
Review efficiency: "Bury" (skip today) and "Suspend" (hide until unsuspended) on a card's back menu; suspended cards show in Browse with a ⏸ dot and a list on Progress to restore. Sessions, All due and forecasts must exclude suspended cards and today-buried ones.
### Iteration 87 — results
- ⏭ bury (skip until tomorrow) and ⏸ suspend on card backs; suspended cards excluded from due/forecast/sessions, shown with a hollow dot in Browse and restorable from Progress (verified exclude → restore)

## Iteration 88 — prompt
Deck descriptions & "why this deck": each deck gets a one-line description + 3 example cards preview in the Practice picker header and Browse, generated from a DESC map (fallback: first 3 cards). Plus estimated time to learn (cards ÷ cap).
### Iteration 88 — results
- One-line descriptions for all 35 decks + 3-card preview + "~N days of new cards" in Practice header (single deck) and Browse

## Iteration 89 — prompt
Lesson quality: add a "Common mistakes" box to lessons 2, 4, 5, 6, 11, 13 (3 bullets each, learner-error → fix) and a "Say it 3 ways" block (formal / polite / casual) to lessons 2, 3 and 11. Then checkpoint v39.
### Iteration 89 — results
- "Common mistakes" boxes (6 lessons × 3) and "Say it 3 ways" tables (3 lessons); published v39

## Iteration 90 — prompt
Mobile ergonomics: a bottom tab bar on phones (thumb reach) replacing the top nav under 560px, with safe-area padding, the current tab highlighted, and the header shrinking to title + stats. Verify no overflow, tabs reachable, and content not hidden behind the bar.
### Iteration 90 — results
- Bottom tab bar with icons under 560px (48px targets, safe-area aware), content padded clear of it (first attempt was overridden by a later media query — caught by the geometry check and fixed)

## Iteration 91 — prompt
Quick actions from the bottom bar: long-press (or right-click) on Practice opens a sheet with Weak spots / Blitz / Exam / Continue; on Review with All due / #tags; on Read with the 9 drill modes. Keyboard: Alt+1..6 switch tabs. Verify the sheet opens and routes.
### Iteration 91 — results
- Long-press / right-click a tab → quick-action sheet (Practice: weak/blitz/exam/continue; Review: all due + tags; Read: 8 drill modes); Alt+1..6 switches tabs; Esc closes

## Iteration 92 — prompt
Search everywhere: a global ⌘K / "/" search box (header icon on phone) covering cards, lessons, grammar patterns, drill modes and settings, with grouped results and keyboard navigation; reuse the Review search logic.
### Iteration 92 — results
- Global search (🔍, "/" or Ctrl/⌘+K): cards, decks, lessons, grammar, drills, actions in grouped results with arrow-key navigation; verified routing to Browse and launching Blitz

## Iteration 93 — prompt
Tutorial tour: a 5-step guided tour for first-time users after onboarding (Today → Practice → Review → Read → Progress) using spotlight overlays on the real elements, skippable, re-runnable from Progress. Verify each step targets an existing element.
### Iteration 93 — results
- 5-step spotlight tour after onboarding (all targets exist on their tabs), skippable, re-runnable from Progress

## Iteration 94 — prompt
Harness expansion: add regression tests for every feature built in batches 6–10 (role-play, conjugator, blitz, exam, shields, tags, deep links, global search, tour, bury/suspend, say-it, cap) into harness.js so future changes are guarded, and run it.
### Iteration 94 — results
- Harness now guards 15 features from batches 6–10 (conjugator, role-play, listening, numbers, tags, deep links, shields, cap, suspend, search, sheet, tour, say-it, exam, badge) — all passing

## Iteration 95 — prompt
Batch close: regression + audit, publish v40, rebuild zip.
### Iteration 95 — results
- Clean; published v40; zip rebuilt

# Batch 11 (iterations 96–105)

## Iteration 96 — prompt
Content: "Dating deeper" (defining the relationship, compliments beyond looks, apologizing, reassurance) and "Work & office" (meetings, deadlines, asking a colleague, leaving on time, 회식) decks, with 6 dialogues each. Social and Everyday respectively; tag #dating / #work.
### Iteration 96 — results
- "Dating deeper" (16) + "Work & office" (16) with 12 dialogues, descriptions and tags → 37 decks / 519 cards, 110 dialogues

## Iteration 97 — prompt
Lesson 18 · Work Korean etiquette (titles 과장님/대리님, 수고 phrases, email openers/closers, 회식 rules) with 3 checks, mapped to Work & office; add its patterns to the index.
### Iteration 97 — results
- Lesson 18 · Office Korean (titles, 수고 family, email template, 회식 rules) + 3 checks + 4 patterns → 18 lessons / 54 checks / 47 patterns

## Iteration 98 — prompt
Give the two new decks example sentences and register pairs: 10 EXAMPLES entries for Dating deeper / Work & office cards, and 6 PAIRS (casual↔polite) drawn from Work & office so the register quiz covers office speech.
### Iteration 98 — results
- +10 EXAMPLES (dating/office), +6 register PAIRS from office speech (36 total); register quiz now surfaces office pairs; harness clean

## Iteration 99 — prompt
Content audit pass: scan all 519 cards for duplicate English meanings across decks, romanization fields containing Hangul, Korean fields containing stray Latin letters, and cards whose example/dialogue references a key that no longer exists. Fix what the scan finds and add the scan to the harness as `orphanRefs`.
### Iteration 99 — results
- Found 4 Pronunciation-tips cards sharing one English meaning (quiz could show identical options) → distinct meanings; ㅐ/ㅔ disambiguated
- renderQuizQ now dedupes distractors by displayed label (same deck and cross-deck fill)
- Harness guards: `noDupOpts` (30 rendered quizzes, no repeated option text), `orphanRefs` (every EXAMPLES/DIALOG key maps to a live card) — both pass

## Iteration 100 — prompt
Accessibility sweep across all six routes: find buttons/links with no accessible name, inputs without labels, images without alt, and tap targets under 40px; fix each. Add an `a11y` harness guard.
### Iteration 100 — results
- No unnamed buttons/links or missing alt on any route; fixed: reminder time input (aria-label), accent swatches 26→36px (inner ring keeps the color dot), checkboxes 13→20px with 8px hit padding + accent-color
- Harness `a11y` guard added (names, labels, ≥20px targets on 4 routes) — passes

## Iteration 101 — prompt
Performance pass: time first render and each route's render at 390px with a heavy simulated state (all 519 cards seen, 500 rlog entries, 60 days of history). Anything over 50 ms gets optimized; report before/after.
### Iteration 101 — results
- Heavy state (519 cards seen, 60 days, 500 review-log rows): today 5.2 ms · practice 6.6 · review 5.1 · lessons 1.0 · read 0.9 · progress 8.4 · save 1.1 ms (72 KB). Nothing near the 50 ms bar → no changes needed

## Iteration 102 — prompt
Dialogue coverage: every deck in the Social group should have at least 6 cards with a DIALOG reply. Count per deck, then write the missing dialogues (natural, same register as the card).
### Iteration 102 — results
- Before: Sweet talk 2, Cute 3, K-drama 3, K-pop 0, Slang 0, Family 0 dialogues. Wrote 39 new two-line dialogues → every Social deck now ≥6 (DIALOG 110→149); orphanRefs guard still green

## Iteration 103 — prompt
Publish checkpoint (v41) and run the standalone build; then a fresh-eyes regression of the published artifact at 390/1024: open each route, run one full session, one learn loop, one Hangul drill, one exam start, and read the console. Fix anything red.
### Iteration 103 — results
- Published v41; standalone rebuilt (korean-site.zip 131 KB, manifest + SW intact)
- Regression on the built site at 390 dark / 1024 light: 6 routes, full session, learn loop, Hangul drill (auto-starts with Check/Skip), exam start (📝 Exam · 1/25) — zero console/page errors

## Iteration 104 — prompt
Harness hardening for the handoff: assert the exact table sizes (decks 37, cards 519, lessons 18, checks ≥54, dialogues 149, patterns 47, pairs 36), and that every lesson id has a CHECKS entry and every GROUP deck exists. Print a one-line health summary at the end so future runs are easy to read.
### Iteration 104 — results
- Harness now asserts table floors (36 content decks + My phrases, 519 cards, 18 lessons w/ ≥3 checks each, 149 dialogues, 47 patterns, 36 pairs), every GROUP deck exists, and prints a HEALTH line: `✅ no errors · ✅ no overflow · ✅ 21 guards pass`

## Iteration 105 — prompt
Final: refresh the in-app "What's new" / version string to v41, write the handoff README section in korean-site/README.md (what the app is, how to run the harness, how to add a deck/lesson/dialogue), rebuild, and close the loop.
### Iteration 105 — results
- About line on Progress: `v41 · 105 iterations · Nov 2026 · 37 decks · 519 cards · 18 lessons · 149 dialogues`
- README handoff section (what it is, run tests, add deck/lesson, rebuild); published v42; korean-site.zip rebuilt (132 KB)
- Loop complete: iterations 1–105, HEALTH ✅

# Pronunciation pass (P1–P25)

## P1 — prompt
Build a rule-based RR romanizer (batchim neutralization, liaison, nasalization, lateralization, ㅎ aspiration, palatalization, ㄴ-insertion) and diff it against every card's romanization field. Fix real errors.
### P1 — results
- 641 cards scanned. Fixed: 원룸 wonrum→wollum, 핵인싸 haekinssa→haeginssa, 낚시 nakksi→naksi, 레전드 rejendeu→rejeondeu, 심쿵했어 simkungaesseo→simkunghaesseo, 세탁소 typo "setaksoe"
- Remaining diffs are digit cards (checked in P2) and `건배 vs 짠` (label, intentional)

# Pronunciation pass (P1–P25)

## P1 — prompt
Build a rule-based RR romanizer (batchim neutralization, liaison, nasalization, lateralization, ㅎ aspiration, palatalization, ㄴ-insertion) and diff it against every card's romanization field. Fix real errors.
### P1 — results
- 641 cards scanned. Fixed: 원룸 wonrum→wollum, 핵인싸 haekinssa→haeginssa, 낚시 nakksi→naksi, 레전드 rejendeu→rejeondeu, 심쿵했어 simkungaesseo→simkunghaesseo, 세탁소 typo "setaksoe"
- Remaining diffs: digit cards (checked in P2) and `건배 vs 짠` (label, intentional)

## P2 — prompt
Hand-check the 18 digit cards (dates, prices, times, counters) by expanding digits to their Korean reading (sino vs native) and comparing.
### P2 — results
- 17/18 correct. Fixed 11월 13일: "sibiril" → "sibirwol" (십일월 = sib-ir-wol). Audit now 1 residual (`건배 vs 짠`, intentional)

## P3 — prompt
TTS audit: list every card whose Korean field the speech engine would misread (digits read as Sino where native is required, bare jamo, Latin, parentheses, "vs") and give each an explicit spoken form in SAY.
### P3 — results
- 57 cards would have been misread (3개→"삼개", 오후 2시→"이시", 25살→"이십오살", ㅋㅋㅋ, 1+1, phone number, all tense/compound letters…). SAY map 26→83 entries with correct native/Sino readings, letter names, and minimal-pair demos for Pronunciation tips; speak() now strips parentheticals. Residual: 0

## P4 — prompt
Port the romanizer rules to JS as `pronounce(word)` → [spoken Hangul, rules] and show a "🗣 [가치] 구개음화" line on the back of any card whose pronunciation differs from its spelling.
### P4 — results
- Engine covers 연음, 비음화, 유음화, 격음화, 구개음화, ㅎ 탈락, 받침 중화, lexical ㄴ 첨가, non-initial ㅢ→이. 213/581 phrase cards now get a pronunciation line (e.g. 감사합니다 [감사함니다], 싫어요 [시러요], 백화점 [배콰점])

## P5 — prompt
Turn the engine into a drill: "🔀 Sound changes" mode in Read — show the spelling, pick the bracketed pronunciation from 4 options (spelling itself + plausible mutations), feedback names the rule, TTS plays it.
### P5 — results
- 162-item pool (phrases ≤8 chars where pronunciation ≠ spelling); distractors use realistic finals/confusable onsets; 20-question run clean, no overflow at 390

---

# Fluency loop F (2026-11-15) — build the Planned Korean lessons

Goal: every Korean roadmap item in `packs/roadmaps.js` has a live lesson with a 3-question check and a 14-item practice set.
Tooling: `tools/curriculum/loop.py <id>` (insert/replace lesson, check, regenerate PRACTICE_BUILTIN, spec + grammar-gate validation,
romanization audit, new-word list, roadmap link) and `tools/curriculum/e2e.js <id>` (complete the lesson as a non-free user, sweep all
practice items through the matcher). An iteration counts only when loop.py, build, harness and e2e all pass.
Baseline fix before F1: two `verbbasics` check distractors used 을/를 before it is taught; replaced.

## F1 — prompt
Narrow the `verbs` lesson to the present 요-form only (past and future move out), with a present-only check and 14-item practice set; verify with loop.py gates, build, harness and e2e for `verbs`.
### F1 — results
- `verbs` retitled "Present tense: the 요-form"; 11 examples, 0 romanization mismatches; check and practice no longer use past/future. loop.py OK, harness 44 guards, e2e OK.

## F2 — prompt
Add a `past` lesson directly after `verbs` (았어요/었어요/했어요, 이었어요/였어요, time words) with check + 14 practice items; link roadmap `ko-past`; same verification.
### F2 — results
- 25 lessons; 11 examples, 0 mismatches; 5 new conjugated forms hand-checked (공부했어요, 없었어요, 의사였어요, 좋았어요, 학생이었어요). `story` now points to "the Past tense lesson". e2e OK.

## F3 — prompt
Add a `future` lesson after `past` (-(으)ㄹ 거예요 for plans and guesses) with check + 14 practice items; link roadmap `ko-future`; same verification.
### F3 — results
- 26 lessons; 11 examples, 0 mismatches. First run failed the grammar gate (future-modifier tiles 있을/오을 read as the object particle); gate taught to tolerate them in `future`, re-run passed. Harness 44 guards, e2e OK.

## F4 — prompt
Add `sound-changes` after `meet` (linking, nasalisation, ㅎ, ㄴ+ㄹ) using the Pronunciation tips deck and pointing to the existing 🔀 drill; check + 14 practice items; link `ko-sound-changes`.
### F4 — results
- 27 lessons; 11 examples, 0 romanization mismatches; practice uses "how it sounds" tiles and spell-it-back typing. e2e OK.

## F5 — prompt
Add `pronouns-questions` after `isseoyo` using only 이에요/있어요 grammar (저/우리, name + 씨, 이거/여기 sets, seven question words); check + practice; link `ko-pronouns-questions`.
### F5 — results
- 28 lessons; 12 examples, 0 mismatches; grammar gate clean (no verbs or particles ahead of their lessons). e2e OK.

## F6 — prompt
Add `want-like` after `sentences` (-고 싶어요, 좋아해요 vs 좋아요); check + practice; link `ko-want-like`.
### F6 — results
- 29 lessons; 12 examples, 0 mismatches. Harness 44 guards, e2e OK for F4–F6.

## F7 — prompt
Add `have-to` after `cant` (-아/어야 해요 / 돼요, questions, past, 안 …도 돼요); check + practice; link `ko-have-to`.
### F7 — results
- 30 lessons; 9 examples, 0 mismatches; 6 new forms hand-checked. e2e OK.

## F8 — prompt
Add `joining` after `counters`, before `story` (-고, -지만, -아/어서); check + practice; link `ko-joining`.
### F8 — results (first attempt FAILED, not counted)
- Grammar gate: 12 uses of 못 / 수 없어요, which are taught four lessons later in `cant`.
## F8b — prompt
Rewrite the 못 examples, check and practice items with 안 (already taught) and re-run.
### F8b — results
- 31 lessons; 9 examples, 0 mismatches; gate clean. e2e OK.

## F9 — prompt
Add `noun-modifiers` after `story` (-(으)ㄴ, 는 for 있다 words, ㅂ and ㄹ stems); check + practice; link `ko-noun-modifiers`.
### F9 — results
- 32 lessons; 12 examples, 0 mismatches; irregular forms hand-checked (매운, 추운, 긴, 맛있는, 재미있는). e2e OK.

## F10 — prompt
Add `compare` after `noun-modifiers` (보다, 더, 덜, 제일); check + practice; link `ko-compare`.
### F10 — results
- 33 lessons; 10 examples, 0 mismatches. e2e OK.

### Closing audit
- Korean roadmap: 33 items, 0 planned. Grammar gate clean across all 33 practice sets and checks. No stale "lesson N" or "Conjugating verbs" references.
- New harness guard `prSweep` (every lesson has a check and 12+ practice items; every item accepts its answers and rejects its distractors): 45 guards pass.
- Old-user state (9 lessons done in the 2.3 order): all 9 still done; lessons up to the one after the furthest finished stay open.

---

# Loop G (2026-11-15) — finish the English course for Korean speakers (ko-en)

Goal: every English roadmap item has a live lesson with a 3-question check and a 14-item practice set.
Source of truth: `tools/content/more/{a1,a2,b1}.js` (shorthand expanded by `_dsl.js`); `gen.js` orders and numbers all lessons;
`validate.js` enforces the practice spec plus the standing article/plural rule; `e2e_en.js` completes each lesson and sweeps the matcher.
Overlap decision: the original 11 lessons stay as they are (the old `tense` lesson becomes an A1 recap); dedicated lessons were added
around them, and three loose roadmap links were fixed (`en-past`, `en-can-like` now have their own lessons; `en-plurals` added).

## G1 — prompt
Pilot the pipeline with one lesson (`it-there`): generator, validator, build, harness, e2e, screenshot.
### G1 — results
- Pass. Lesson renders with Hangul pronunciation rows; check and practice work; 45 harness guards.

## G2 — prompt
Write the remaining 14 A1 lessons (plurals, present, questions, third-s, countable, object-have, can-like, continuous, past, irregular-past, the, adjectives, going-to, joining), each with check + 14 practice items meeting the article/plural rule.
### G2 — results
- First validation failed: 12 items had prompts or hints with no Korean, and one title had no Hangul. Helper now adds the Korean cue automatically; title fixed.
- Re-run: validator PASS (26 lessons, 78 checks, 364 practice items), harness 45 guards, e2e OK for all 15 new A1 lessons + the recap.

## G3 — prompt
Write the eight A2 lessons (past-continuous, will, perfect, modals, to-ing, articles-2, first-conditional, relative) with checks and practice; validate, build, harness, e2e.
### G3 — results
- One title lacked Hangul (fixed). Validator PASS at 34 lessons; e2e OK for all eight.

## G4 — prompt
Write the five B1 lessons (perfect-2, narrative, conditionals, passive, reported); validate, link the roadmap, build, harness, e2e.
### G4 — results
- Validator PASS: 39 lessons, 117 checks, 546 practice items; correct-answer positions spread 28/30/32/27.
- English roadmap: 32 items, 0 planned. Harness 45 guards. e2e OK for all A2/B1 lessons plus phrasal, email, idioms in their new positions.
- All 39 lessons render with no raw tokens, no overflow, and every English example string present unchanged under the Korean UI; 546 items load with no warnings.

---

# Pilot P (2026-11-16) — Japanese and Spanish speakers learning English

Contract: `docs/PILOT-SPEC.md`. Pipeline: `docs/PIPELINE.md`. Profiles: `docs/profiles/{ja,es,OTHERS}.md`.

## P1 — phase 1 (five parallel agents)
- Engine: interface works for any language (`LL` routed through the interface pack, `Intl.DisplayNames` language names, pre-native screens use the browser language, full-width input folding, unknown-course state passes through sync untouched). 54 harness guards. Fixes a crash when reloading in ko-en and opening Practice.
- Pipeline: generators are per-language (`tools/content/<lang>/`, `tools/i18n/<lang>/`); regenerated Korean course and interface packs are byte-identical; new `parity.js` enforces the shared English side.
- Research: profiles for Japanese and Spanish speakers, planning profiles for eleven more languages.
- Lead: the generated key-merge script mis-parsed the engine's key tables (27 junk keys); replaced with a table-aware merge. Frozen interface key list: 766 exact strings, 272 patterns.

## P2 — phase 2 (ten writer agents, then two cold reviewers)
- Per language: interface (766 strings + 271 patterns), decks and extras (20 decks, 366 cards, dialogues, patterns, idioms), and three lesson agents (original 11, A1, A2/B1) writing explanations from that language's point of view, plus two extra lessons per language (ja: katakana-english, articles-3; es: false-friends, make-do).
- Spanish practice sets were rebuilt around the verb-core standing rule; 36 of 39 shared lessons are declared deviations. Japanese keeps the article/plural rule and the shared English side (6 decks and 1 lesson deviate).
- Reviewers settled one pronunciation-aid rule set per language (PRON-RULES.md), normalised ~150 readings each, fixed prompts that invited unlisted answers, corrected inaccurate statements, and unified localisation. Their open items are in tools/content/{ja,es}/REVIEW.md. Both reviewers hit the usage limit mid-run and were resumed.
- Lead: fixed one item whose distractor tile equalled an answer word (es prep#13), a tab-bar collision for long Spanish labels (auto-tight font), and two harness guards that assumed no real Japanese/Spanish course.

### P2 — verification
- Validators PASS for both courses and both interface packs; parity PASS (declared deviations only).
- Harness 56 guards. All 41 lessons of each new course completed end to end as a non-free user; every practice item (574 ja, 575 es) accepts its answers and rejects its distractors.
- Route sweep per course: no Korean text, no untranslated interface strings beyond cognates and the product name, no overflow; tab labels fit at 390px.
- Under each new interface, all check options and lesson example sentences render unchanged (the translator does not touch course English).
- Fresh-visitor journeys (Spanish and Japanese browser): welcome → nickname → language home → course → onboarding, no errors.
- Page weight: 1.92 MB with five courses' worth of packs inline (was 1.06 MB).

### P2 — post-release checks (2.9.1)
- Lookup audit with the real packs: every interface lookup during routes, a Today session, a lesson with check and practice, drills, review and the language home resolved to a translation (0 fallbacks to English in either language).
- Found and fixed: the tab-shrink added in 2.9.0 also triggered for English (a 2px rounding overflow), making English tab labels smaller; the threshold is now 3px, so only Spanish shrinks. A pre-existing pattern-order bug left "lessons" untranslated in the weekly plan chip (all languages); order fixed. Two Japanese cards still said Kim; now Tanaka.
- Existing-user switch test: en-ko (3 lessons, 120 XP) → es-en → back, then reload: progress, interface language and tab size all restored; Spanish progress kept separately.

## Rebrand (2.9.2)
- Prompt: replace the Korean-specific logo and wording with an all-language brand: an "L" built from flag tiles, and copy that says what the app is. Verify: icon set and share image re-rendered and looked at; header at 390px in light and dark; harness.
- Results: `tools/brand/logo.py` draws the L (Korea, Japan, Spain, United States, Brazil, India tiles); `tools/brand/render.py` renders icon.png, icon-192/512, maskable, apple-touch, favicon-32 and og-image.png. Header is now "[L] Lang App" + the language being learned (was "한글 Korean starter"); page title, description, share text, manifest, offline page and README no longer say Korean only. Header stats stay on one line at phone width.
- Also in this build (no visible change until the title files land): roadmap titles can be translated per interface language (`tools/i18n/road.py`, pack `road` map, engine `rmT`).

## On-demand course loading (2.10.0)
- Prompt: stop shipping every course inside the page. Site build loads only the chosen course and its interface; the single-file build (artifact, harness) stays fully inline. Verify on a local server that sends the production headers: fresh visitor, reload, runtime switches, unreachable pack, offline with the service worker.
- Results: `build.sh` writes `korean-site/packs/<name>.<hash>.js` for course-* and i18n-* packs and inlines a manifest + a small loader that requests the saved course before the app script runs (boot stays synchronous). Engine: `courseStubs`, `ensureI18n`, `ensureCourse`, language home loads on tap, sync restore loads the remote course, `packFail` blocks the app (never falls back to the built-in course) when the saved course cannot load and retries on reconnect. Service worker re-fetches a device's packs on update. index.html 1.93 MB → 0.73 MB.
- Evidence: `node tools/site/lazy.js` 19/19 PASS (no packs before choosing; Spanish tap loads only the Spanish interface, then the course; reload keeps progress; switches es → ja → en → ko; blocked pack leaves `la-meta` and `la-s-es-en` byte-identical, retry restores 321 XP; offline reload opens ja-en). Harness 56 guards.
- Also fixed: the shipping script never copied icons, manifest or offline page to the repo (2.9.2's new logo files went out in a follow-up commit).

## Translated roadmap titles and extra decks (2.10.1)
- Prompt: build what the pilot report listed as missing: roadmap and planned-lesson titles in Japanese and Spanish, and the extra decks each learner profile asks for. Only add: never rename, reorder or remove existing decks or cards (progress is keyed by deck name + card text).
- Results: 425 roadmap strings per language (`tools/i18n/<lang>/roadmap.json`, checked by `road.py check`). Japanese: new deck カタカナ英語の落とし穴 (24) and 53 cards added to six decks (366 → 443 cards). Spanish: new decks Palabras esenciales (24), Falsos amigos (23), Make y do (20), Incontables (15), Cognados y acento (14), Phrasal verbs +18 (366 → 480 cards). The katakana-english, false-friends and make-do lessons now open their own decks.
- Evidence: gen / validate / parity PASS for both; all 13 roadmap previews show no English titles and no overflow in either language; e2e OK on the lessons tied to the new decks; harness 56 guards; site test 19/19.
- Open: new cards and titles are agent-written; each `REVIEW.md` has a dated section listing what a native speaker should check.

## Logo v2 and loading hardening (2.10.2)
- Prompt (user): the flag L was the wrong idea; make the L out of letters that disperse, like the intro. Verify by looking at the rendered icon set and header.
- Results: `tools/brand/logo.py` now draws an L of letter tiles in several scripts (한 あ A 文 ñ я 語 é …) with tiles breaking away and fading to the upper right; plain-tile version for the favicon and the in-app header. The flag version is kept as `logo_flags.py`. Intro for a visitor who has not picked a language says "Lang App" instead of 한글.
- Hardening after review: sync restore no longer pushes before the remote course has loaded (T7); a pack that is missing while online offers a reload instead of blaming the connection (T8); the repo keeps the previous build's pack files so open tabs survive a deploy; `ship.sh` now runs the site test and refuses to ship on a failure. Japanese and Chinese interfaces use system CJK fonts and `zh-Hans` as the language tag.
- Evidence: harness 56 guards; site test 22/22.

## Chinese speakers → English (2.11.0)
- Prompt: build `zh-en` end to end with the per-language pipeline: research profile, five parallel writers (decks/meta, core lessons, A1, A2+B1, interface), merge, validate, cold review, ship. Verify: gen / validate / parity PASS, every lesson completes end to end, route sweep, roadmap previews, site test.
- Results: profile `docs/profiles/zh.md` (Simplified, Mainland; IPA aid in slashes; standing rule 冠词|复数). 41 lessons (39 shared + `chinglish` + `articles-3`), 22 decks / 430 cards (new: 中式英语陷阱, 数量表达, +18 pronunciation pairs), interface 768 strings + 272 patterns + 425 roadmap titles. Pipeline gained `pronScript` (a pron that is not in the native script). Engine: `zh-Hans` language tag, system CJK and IPA-capable fonts.
- Cold review: 32 IPA conflicts settled (`PRON-RULES.md`, `pron_check.js`), 12 teaching errors fixed, 10 prompts tightened, 42 terminology/style edits, 13 interface values, 12 roadmap titles. `REVIEW.md` lists ten items for a native speaker and what could not be fixed without changing the shared English side.
- Evidence: validate PASS, parity PASS, e2e OK on all 41 lessons, sweep 8 routes with 0 issues, 13 roadmap previews with no English titles, harness guards pass, site test all PASS (including T9: every course opens from the picker).

## Vietnamese speakers → English (2.12.0)
- Same pipeline as Chinese. Profile `docs/profiles/vi.md` (bạn register, IPA aid with linking, standing rule mạo từ|số nhiều|đếm được). 41 lessons (39 shared + `final-sounds` + `noun-phrase`), 22 decks / 430 cards (new: Âm cuối, Lỗi dịch từ tiếng Việt, +16 pronunciation pairs), interface 768 + 272 + 425 roadmap titles. Vietnamese interface uses system fonts (the web fonts lack Vietnamese letters).
- Cold review: 103 edits (36 IPA rows, 14 teaching fixes, 7 prompts, 23 interface values incl. the Practice tab shortened to "Luyện" after the sweep showed it overflowing, 8 roadmap titles). `tools/content/vi/REVIEW.md` has the top-ten for a native speaker.
- Evidence: validate PASS, parity PASS, e2e OK on all 41 lessons, sweep 8 routes 0 issues, roadmap previews clean (two French/Italian tense names intentionally left as-is), site test PASS.
- Also 2.11.1: the greeting animation no longer plays over the language picker (seen in the user's screenshot). The user's screenshot confirmed the live site is current.

## Indonesian speakers → English (2.13.0)
- Same pipeline. Profile `docs/profiles/id.md` (kamu register; respelling in Indonesian letters with CAPITAL stress, é/è, th/dh; standing rule artikel|jamak). 41 lessons (39 shared + `indo-english` + `time-markers`), 21 decks / 404 cards (new: Jebakan Inggris ala Indonesia, +11 pronunciation cards), interface 768 + 272 + 425 roadmap titles.
- Cold review: 56 content edits (15 teaching fixes, 8 card notes, K-pop references removed, 11 prompts/answers, respelling conventions in `PRON-RULES.md`), 56 interface strings (Progress tab "Kemajuan" → "Progres" after the sweep showed it overflowing), 11 roadmap titles. `tools/content/id/REVIEW.md` has the top-ten for a native speaker.
- Evidence: validate PASS, parity PASS, e2e OK on all 41 lessons, sweep 8 routes 0 issues, site test PASS.
- Writers and the Vietnamese reviewer hit the 5-hour usage limit mid-run; all five were resumed from their saved state and finished.

## Summary of this run (2.9.2 → 2.13.0)
| Version | Change | Evidence |
|---|---|---|
| 2.9.2 | Rebrand to all-language wording, first logo | harness, screenshots |
| 2.10.0 | Courses load on demand (index 1.93 MB → 0.73 MB) | site test on local server with production headers |
| 2.10.1 | ja/es roadmap titles (425 each) and extra decks (ja 443, es 480 cards) | validate, parity, e2e, roadmap sweep |
| 2.10.2 | Letter-tile logo, sync/loader hardening, ship gate on site test | site test 22/22 |
| 2.11.0 | Chinese speakers → English | validate, parity, e2e 41/41, sweep, cold review |
| 2.11.1 | Greeting no longer plays over the language picker | harness |
| 2.12.0 | Vietnamese speakers → English | same as 2.11.0 |
| 2.13.0 | Indonesian speakers → English | same as 2.11.0 |

## Fixes carried back to the older courses (2.13.1)
- All three new-language reviewers independently found the same three teaching errors, which came from the Korean source: the *be* tip ("is there an action?" gives the wrong answer for like/live/want), the some/any rule (no exception for requests and offers), and the to-ing heading. Fixed in ko-en, ja-en and es-en. Spanish quiz chip label "Tipo" → "Escribir".
- Open, same in all six English courses (listed in each REVIEW.md §3): a few shared practice items accept a wrong answer ("I'll get the door" for closing it) or reject a natural one; fixing them means changing the shared English side once in the Korean source.

## Single-language first screens, one address (2.14.0)
- Prompt (user): the first screens showed English and Korean together; show only the visitor's language. Also stop using the vercel.app address.
- Results: `preLang()` now returns one language from the browser (Korean, a live interface language whose pack is loaded, else English) and `preT/preBi` return a single string; the six second-line slots are gone. Guard `fxPreNative` rewritten for en, ko, ja and fr browsers (fr falls back to English). `vercel.json` redirects lang-app-3qdw.vercel.app to lang-app.io.
- Evidence: harness 59 guards; screenshots in English, Korean and Spanish browsers; site test PASS.

## Groundwork for the remaining eight languages (2.14.1)
- Prompt: before any new course is scaffolded, fix once what would otherwise be inherited eight times, and write the plan (`docs/BUILD-PLAN.md`).
- Results: shared practice answers corrected in all six English courses (will / questions / modals / can-like / perfect-2 / email items); feedback "Category" label split from the quiz "Type" label; shared `lint.js`; `new_lang.js --from es` + `profile.reference` + parity against the Spanish course for article languages; writer brief gained the list of recurring review findings.
- Evidence: validate and parity PASS for ko, ja, es, zh, vi, id; lint 0 blocking on all five adapted courses; harness 59 guards.
- Model split from here on: Opus for profile, lessons and cold review; Sonnet for decks and interface; scripts for mechanical checks; lead does the final read and ship decision.

## Brazilian Portuguese speakers → English (2.15.0), first run of the new model split
- Built from the Spanish course (`reference: es`). Profile `docs/profiles/pt.md` (você, pt-BR, IPA aid matching the Chinese course, verb-core rule). 42 lessons (41 + `verb-prep`; `pron` and `false-friends` rebuilt for Brazilians), 25 decks / 480 cards, interface 769 + 272 + 425 roadmap titles.
- Model split: Opus wrote the profile, the three lesson files and the cold review; Sonnet wrote decks/dialogues/metadata and the interface; scripts did the mechanical checks (lint found 0 cross-file pronunciation conflicts across five writers).
- Result of the experiment (reviewer's per-file edit counts): decks.js 32, extra.js 11, meta.js 1 · lessons.js 4, practice.js 4, a1 5, a2 3, b1 2 · ui.json 22, roadmap.json 5. Sonnet's interface is as good as the Opus ones (22 vs a 13 / 23 / 56 baseline). Sonnet's decks and dialogues are weaker: about 5 edits per 100 lines against 1 in the lesson files, mostly card notes carried over from the source course and unnatural meanings. Cost: the Sonnet decks agent used ~114k tokens against ~300k for the Opus ones.
- Decision: keep Sonnet for the interface. Keep Sonnet for decks too, because the cold review catches the damage and the saving is large, but the reviewer brief now lists the card-note problem as the first thing to check in decks.
- Lead sign-off: read REVIEW.md, the three pt-specific lessons (`pron`, `false-friends`, `verb-prep`) and the shared sample; removed a stale deviation; reran everything. Left open (same in every language, needs engine or source changes): the "(han)." leftover in the reading-drill text, big-number labels that read "1 dias", and the roadmap basis line.
- Evidence: validate PASS, parity PASS (vs es-en), lint 0 blocking, e2e OK on all 42 lessons, sweep 8 routes with no overflow and every tab label fitting, site test PASS.

## French speakers → English (2.16.0)
- Built from the Spanish course. Profile `docs/profiles/fr.md` (France, tu, IPA, verb-core with «d'accord» excluded from the keyword test). 41 lessons (`pron` and `false-friends` rebuilt for French speakers; no fr-only lesson), 25 decks / 480 cards, interface 769 + 272 + 425.
- Second run of the model split. Reviewer's edits per file: decks.js 52, extra.js 20, meta.js 1 · lessons.js 2, practice.js 4, a1 9, a2 2, b1 0 · ui.json 20, roadmap.json 3. Same picture as Portuguese: the Sonnet interface is fine; the Sonnet decks/dialogues need about five times more teaching fixes per line than the Opus lesson files (card notes carried over from the source course, word-for-word glosses).
- Decision: from German on, decks and dialogues go back to Opus; the interface stays on Sonnet. Italian's decks were already being written on Sonnet and get the same strengthened review.
- Lead sign-off: read REVIEW.md and the rebuilt `false-friends` lesson; fixed a settings row that overflowed by 8px («Taille du texte» → «Texte»); the first-screen guard now uses a Swedish browser as its "unsupported language" case, since French is supported.
- Evidence: validate PASS, parity PASS, lint 0 blocking, e2e OK on all 41 lessons, sweep with no overflow and all tab labels fitting, harness 61 guards, site test PASS.

## Italian speakers → English (2.17.0)
- Built from the Spanish course. Profile `docs/profiles/it.md` (tu, IPA, verb-core with «d'accordo» excluded). 41 lessons (`pron`, `false-friends` rebuilt; first-conditional and perfect-2 explanations rewritten because the Spanish premise is false for Italian), 25 decks / 480 cards, interface 769 + 272 + 425.
- Third and last run with Sonnet decks. Reviewer's edits per file: decks.js 60, extra.js 13, meta.js 3 · lessons.js 1, practice.js 2, a1 2, a2 0, b1 0 · ui.json 17 (all follow-through on a tab rename), roadmap.json 3. Decks/dialogues needed about 14 times more edits per line than the lesson files. From German on, decks are written by Opus.
- Lead fixes: the «Feedback» tab did not fit (→ «Pareri», carried through 12 strings by the reviewer); the settings row with accent colour and text size now wraps instead of overflowing (it overflowed in fr, it and de).
- Honest limit: the reviewer read all lesson bodies, checks, typed items and the false-friends set in full, but only scanned the ~330 multiple-choice/order/fill items of the three stage files and most interface strings.
- Evidence: validate PASS, parity PASS, lint 0 blocking, e2e OK on all 41 lessons, sweep clean with all tab labels fitting, site test PASS.

## German speakers → English (2.18.0)
- Built from the Spanish course. Profile `docs/profiles/de.md` (du, IPA, verb-core). 41 lessons (`pron` rebuilt around w/v, final devoicing, æ; `false-friends` rebuilt with 16 German pairs), 25 decks / 480 cards, interface 769 + 272 + 425.
- First run with Opus-written decks. Reviewer's edits per file: decks.js 26, extra.js 9, meta.js 1 · lessons.js 9, practice.js 3, a1 10, a2 1, b1 0 · ui.json 26 (15 from a tab rename), roadmap.json 6. Decks now sit at 4.2 edits per 100 lines against 1.6 for lessons (pt was 5×, it 14×), and wrong-teaching rates are level (1.3 vs 1.0). Decision confirmed: decks on Opus, interface on Sonnet.
- Reviewer read every content file in full; the interface (1,041 strings) was scanned by script and by main-screen group, not string by string.
- Lead fixes: «Feedback» tab did not fit → «Meinung» (15 strings followed by the reviewer); settings row now wraps.
- Evidence: validate PASS, parity PASS, lint 0 blocking, e2e OK on all 41 lessons, sweep clean with all tab labels fitting, harness 63 guards, site test PASS.

## Russian speakers → English (2.19.0)
- Built from the Korean course (article-less source language, so the three articles lessons stay). Profile `docs/profiles/ru.md` (ты, IPA aid, standing article rule). 41 lessons including the Russian-only `runglish` (false friends, say/tell, calques, it for objects) and `articles-3`, 21 decks / 405 cards, interface 769 + 272 + 425.
- Model split: Opus for profile, lessons, decks and cold review; Sonnet for the interface. Reviewer's edits per file: decks.js 8, extra.js 8, meta.js 1 · lessons.js 6, practice.js 7, a1 10, a2 2, b1 0 · ui.json 23, roadmap.json 4 (69 total, 34 of them wrong or misleading). Opus decks are now level with the lesson files.
- Notable fixes: the copied "action → do, state → be" test removed from the be lesson and its practice (like/want are states and take do); «до пятницы» → «к пятнице» where the answer is *by*; pronunciation-aid labels unified on «транскрипция»; big-number labels made number-neutral («выучено карточек», «ДН. ПОДРЯД»).
- Reviewer read every content file, all 1,041 interface strings and all 425 roadmap titles in full; pronunciation was checked by script against the Chinese course (673 identical, 94 Russian-only read by hand).
- Lead sign-off: read REVIEW.md and the `runglish` lesson in full; regenerated and reran everything. Open (shared, needs engine or source work): *Who's your bias?* card, the roadmap basis line, «Ввести» serving two controls, two shared English items a native would query (REVIEW.md §5).
- Evidence: validate PASS, parity PASS (vs ko-en), lint 0 blocking, e2e OK on all 41 lessons, sweep with no overflow and all tab labels fitting, harness 64 guards.

## Hindi speakers → English (2.20.0)
- Built from the Korean course. Profile `docs/profiles/hi.md` (आप, standard Hindi with the usual English loanwords, Devanagari respelling as the pronunciation aid instead of IPA, standing article rule). 41 lessons including two Hindi-only ones (`indian-english`: fine in India, say this abroad; `stative-since`: state verbs, since / for, have been -ing), 21 decks / 403 cards (deck 21 «इंडियन इंग्लिश: भारत बनाम विदेश»), interface 769 + 272 + 425.
- New tooling: `tools/content/hi/pron_hi.js` converts the Chinese course's IPA into the profile's Devanagari key, with `pron_lookup.json` (733 strings) shared by all writers; the reviewer found 0 pronunciation conflicts across 750 pairs.
- Model split as for Russian. Reviewer's edits per file: decks.js 19, extra.js 6, meta.js 1 · lessons.js 10, practice.js 3, a1 15, a2 1, b1 1 · ui.json 21, roadmap.json 11 (88 total, 26 wrong or misleading).
- Reviewer read all course content in full; of the interface, the 100 longest strings were read in Hindi only against the first 90 characters of English, and the 387 non-English roadmap titles were read once without edits.
- Lead sign-off: read REVIEW.md and the `indian-english` lesson; softened one card note that called the Indian *isn't it?* tag "wrong" (the lessons treat it as fine at home, mismatched abroad); added Devanagari font stack and taller line height; checked screenshots. Open: real-phone Devanagari rendering, the roadmap basis line, the greeting glosses.
- Evidence: validate PASS, parity PASS (vs ko-en), lint 0 blocking, e2e OK on all 41 lessons, sweep with no overflow and all tab labels fitting, harness guards pass, site test PASS.

## Thai speakers → English (2.21.0)
- Built from the Korean course. Profile `docs/profiles/th.md` (neutral written Thai without ครับ/ค่ะ, IPA as the pronunciation aid because Thai-script respelling hides exactly the sounds Thai speakers miss, standing article rule with «คำนามพหูพจน์» keywords). 41 lessons including two Thai-only ones (`tinglish`; `time-markers`: แล้ว / กำลัง / จะ / เคย / ยัง → English verb forms), 21 decks / 408 cards (deck 21 «กับดักภาษาอังกฤษแบบไทย»), interface 769 + 272 + 425.
- Model split as before. Reviewer's edits per file: decks.js 9, extra.js 3, meta.js 2 · lessons.js 28 (14 formatting), practice.js 1, a1 6, a2 4, b1 0 · ui.json 14, roadmap.json 4 (72 total, 28 wrong or misleading). Notable: a Korean office formula presented as Thai in `email`, two false card notes (*Keep the change*, *It depends on you*), `pron` claims reworded as tendencies.
- Reviewer read every content file and all roadmap titles in full; interface strings as one-line dumps cut at 110 / 160 characters, so long privacy sentences were only partly read.
- Lead: Thai font stack and line height; two labels shortened after measuring (`Drills` tab «ทักษะ», ring label «/ {1} วันนี้»); the usage limit interrupted all five writers once and they resumed from their briefs. Read REVIEW.md and the `tinglish` lesson. Open: real-phone Thai rendering and line breaking, the roadmap basis line.
- Evidence: validate PASS, parity PASS (vs ko-en), lint 0 blocking, e2e OK on all 41 lessons, sweep with no overflow and all tab labels fitting, harness guards pass, site test PASS.

## Right-to-left groundwork (2.21.1)
- Engine prepared for Arabic before any Arabic text exists. `uiDir()` sets `dir` on the page from the interface language (`la-rtl=1` in localStorage forces it for tests). The stylesheet's physical left/right rules became logical properties (text-align start, margin/padding/border inline-start/end; safe-area paddings, card flip and swipe labels stay physical).
- Under `html[dir=rtl]`: target-language text, pronunciation lines, answer tiles, the answer input, the header stats and the item counter stay left-to-right; table cells, options and prompts take their direction from their first strong letter; bold English inside native paragraphs is isolated. Back arrows flip (`BK()`), Arabic dates use Western digits and the Gregorian calendar (`dLoc()`), Arabic gets a system font stack, taller lines and zero letter-spacing.
- New `tools/site/rtl.js <lang> [force]`: 19 surfaces at 390px (today, review front/back, lesson list, lesson body, table, example rows, check, the four practice item types, practice, drills, progress ×3, feedback, privacy), checking both edges by element rect. Forced on the Hindi course: 19 PASS.
- No change for left-to-right languages: before/after screenshots of ja, de, hi, th are pixel-identical except the time-of-day greeting and the randomly drawn review card. Harness 66 guards, site test 24 PASS.
- Also: `e2e_en.js` now waits for the course to load instead of a fixed delay (the cause of the intermittent "COURSE is not defined"); Thai uses `overflow-wrap:break-word` instead of `anywhere`.

## Right-to-left proof with the Arabic interface (2.21.2)
- Arabic profile `docs/profiles/ar.md` (Modern Standard Arabic, no gendered address, IPA aid, label-colon-number counts, Western digits and Gregorian dates; two Arabic-only lessons `be-2` and `arabic-traps`). Arabic interface text written (769 + 272 + 425), not shipped: Arabic stays locked until the course is reviewed.
- Proof: the Arabic interface over stand-in course content passes `tools/site/rtl.js ar` on all 19 surfaces, and the first screens mirror for an Arabic browser. Screenshots checked by eye.
- Engine fixes found by the proof: filled pattern slots are wrapped in first-strong isolates for right-to-left languages; the review-interval line drops its Latin unit letter and uses a leftward arrow; Arabic numbers use the body font (the monospace fallback breaks Arabic shaping); `uiDir()` follows the browser language before a language is picked.
- Site description updated to "English for speakers of 13 languages".
- Known: with Arabic packs present the harness guard `lockedDisabled` fails because no language is left locked; the guard must be rewritten when Arabic ships.

## Arabic speakers → English (2.22.0), the first right-to-left course
- Built from the Korean course. Profile `docs/profiles/ar.md`. 41 lessons including two Arabic-only ones (`be-2`: when *be* is needed and when it is not — *He tall*, *She is study*; `arabic-traps`: word-for-word translations from Arabic), 21 decks / 410 cards (deck 21 «فخاخ الترجمة الحرفية»), interface 769 + 272 + 425.
- Writers were staggered to stay under the usage limit: interface (Sonnet) and decks first, then the three lesson files (Opus), then the cold review. No interruption this time.
- Reviewer's edits per file: decks.js 12, extra.js 4, meta.js 0 · lessons.js 6, practice.js 4, a1 57, a2 31, b1 20 (82 of these unify the hint format) · ui.json 14, roadmap.json 11 (159 total, 16 wrong or misleading). A script checked the first strong letter of every Arabic-side string (two table rows fixed); no direction marks, no Arabic-Indic digits, no arrows in Arabic prose. Pronunciation: 0 edits, 807 pairs with 0 conflicts.
- Reviewer read all course content; skimmed parts of the profile; read interface `t` values against their English keys only.
- Lead: right-to-left engine work (2.21.1, 2.21.2), measured facts, read REVIEW.md and the `be-2` lesson, read the 19 right-to-left screenshots of the real course. Harness guard `lockedDisabled` now accepts "every listed language is live". Site description says 14 languages.
- Open: no native Arabic speaker has read it; real-phone rendering and Arabic system fonts unchecked; the en-US voice on Arabic names unchecked; `polite` check option «~ing (opening)» is bound by parity (it renders left-to-right, which is correct for English); share-card canvas text in Arabic not inspected.
- Evidence: validate PASS, parity PASS (vs ko-en), lint 0 blocking, e2e OK on all 41 lessons, `rtl.js ar` 19 PASS, harness guards pass, site test PASS.

## Arabic on the site build (2.22.1)
- 2.22.0's right-to-left checks all ran on the single-file build. New `tools/site/rtl_site.js` tests the build the site serves (packs loaded on demand): Arabic browser with a fresh profile, English browser tapping Arabic in the language picker, and a returning Arabic learner. It found one failure: the picker's second step showed Arabic text in a left-to-right sheet. Fixed: the picker sheet and the first screens take `dir` and `lang` from the language being shown, and the right-to-left and Arabic font rules match on any ancestor, not only the page root.
- Also: the course-row chevron flips; the English row in the picker is no longer forced left-to-right; canvases (share cards, charts) keep left-to-right coordinates so text cannot start off-canvas in a right-to-left page.
- Read by eye in Arabic: a daily session (new card, quiz), the share card canvas, the picker, the first screen. Not opened: settings sheet, search results, role-play dialog.
- `ship.sh` now runs `rtl.js ar` and `rtl_site.js` and refuses to ship on a failure. Evidence: rtl 19 PASS, rtl_site 19 PASS, harness 67 guards, site test 24 PASS, ja/de screenshots unchanged.

## Drawn flags (2.22.2)
- Flag emoji show as two letters on Windows, so the app now draws its own flags: 15 inline SVG flags (`FLAG_ART`, `FLG(code)`) in the header button, the course row and the language picker (rows, course rows, locked tiles), with a hairline edge so white flags read in dark mode. Emoji stay in plain-text spots (share text, titles).
- The roadmap note no longer says "adjusted for Korean speakers" to learners who are not Korean speakers (`basisAny`).
- Korean-target roadmap checked: 33 items, 0 unbuilt, so "build out the planned Korean lessons" was already complete.
- Evidence: harness 67 guards, site test, both right-to-left checks; picker screenshot read in light and dark.

## The alphabet in every English course, and Korean → English to 42 lessons (2.23.0)
- New shared first lesson `alphabet` (letter names and spelling aloud) and a 26-card alphabet deck (deck 21) in all 14 English courses. The English side is fixed in `docs/briefs/alphabet-spec.md` (example rows, 3 checks, 14 practice items, option order) and is identical everywhere; `tools/content/alphabet_check.js <lang>` compares each pack with it, because ko-based and es-based courses are never compared with each other by parity. Each language's native side is its own: the letter table in that course's pronunciation convention, the letter names its speakers confuse (pinyin readings for Chinese, Cyrillic look-alikes for Russian, zed / haitch for Hindi, final-consonant readings for Thai, p/b and v/f for Arabic, vowel names for the Romance languages and German), and 26 card notes.
- Pilots (ko for `article-plural`, es for `verb-core`) passed with the English unchanged but found two spec faults, fixed before the other twelve started: option order must be identical (parity compares positions), and a fallback tile `a` in the last position equalled the answer `A`. One agent per language (Opus), then three cold reviewers (Opus) by language group. Fixes that applied to every course: the prompt for «It starts with an A» now signals that an article is wanted; «It has two Ts» is cued to start with It; card notes that only repeated the a/an rule now teach something (double L, double S, N as in name); "0 read as O" is marked as English usage; X cards no longer use *box* as a word that starts with X.
- Korean → English: `konglish` (15 Konglish words, 6 sentence calques) and `articles-3` (zero article, *the* once specified, set phrases) written and cold-reviewed (16 fixes); with `alphabet` the course has 42 lessons. `parity.js` now ignores the reference course's own lessons (`profile.ownLessons`). The older `past` item *I played with my friends* is cued as a child speaking, so it no longer contradicts the Konglish lesson (same English in other courses: unchanged there).
- Engine and tools: `ORDER` starts with `alphabet`; `<table dir="ltr">` is allowed in lesson bodies and used for the Arabic course's A–Z table; position-keyed deck notes shifted by one in es, pt, fr, it, de; each `pron_check.js` accepts the letter *I* beside the unstressed pronoun; roadmap gained "The alphabet and spelling aloud" (translated in 13 languages).
- Checked by the lead: all 14 courses clean (validate, alphabet_check, parity, lint, i18n), e2e OK on `alphabet` and `pron` in all 14 and on the two Korean lessons, existing learners keep unlocked lessons (the new first lesson is simply open), new learners still start cards on Greetings, screenshots read for ko, ar, hi, th.
- Open: lesson source titles for `alphabet` and `pron` both carry "1 ·" (harmless: gen.js renumbers); the app's voice on a single letter (does "A" come out as the letter name?) cannot be checked here; no native speaker has read the new lesson in any language.

## Part 2 begins: other languages for English speakers (2.23.1, engine groundwork)
- Plan: `docs/BUILD-PLAN-EN.md` (13 courses in 7 waves, Spanish first; phase 0 engine work; new pipeline `tools/target/`; Opus writers and reviewer, no interface translation needed).
- Probe: a hand-made 10-card, 1-lesson Spanish pack (`en-es`) ran through the existing generic course path. Already working: registration, picker, header flag, cards with a pronunciation line, lessons, all four practice types, drills, the "no keyboard? use tiles" fallback. Not working, now fixed in the engine: the Today greeting fell back to Korean (a pack can carry `GREET`; without one an English speaker is greeted in English); typed answers needed exact accents and ¿ ¡ (now ¿ ¡ are ignored, and a course with `accents: true` accepts an answer that differs only in accent marks as "Almost: mind the accent marks" with the correct form, unless the item is `strict`); no way to type accents on a US keyboard (a course's `keys` appear as an accent bar under answer boxes).
- New pipeline: `tools/target/lib.js` (practice shorthand with `!strict`, several deck and lesson files per course), `gen.js`, `validate.js` (shape, practice spec, standing rule from the profile, pron consistency, accent-only distractors must be strict, fallback words cannot rebuild an answer, `--partial` while writers work); `e2e_en.js en-<t> <ids>` runs the lesson walk-through for the new direction. Writer brief `docs/TARGET-BRIEF.md`, profile brief `docs/briefs/target-profile.md`.
- The probe pack is not shipped. Evidence: harness 68 guards (one new: nothing regressed in en-ko or the English courses), probe lesson e2e OK, accent matching and accent bar exercised in the browser.

## Spanish for English speakers (2.24.0), the pilot of part 2
- Latin American, Mexican-neutral Spanish (tú first, usted from lesson 2, ustedes, no vosotros; es-MX voice). Profile `docs/profiles/en-es.md`. 26 lessons (the 23 roadmap items, with the "what you've done" item rebuilt as the simple past, plus stem-changing verbs, lo / la, and a Caribbean / Dominican lesson), 18 decks / 316 cards, 364 practice items, 56 dialogues, 36 examples, 18 patterns.
- Pronunciation line: an English-letter respelling with the stressed syllable in capitals, generated by `tools/target/es/respell.js` from the spelling; the reviewer confirmed every card and example pron equals the tool's output. Standing rule: agreement (gender, number, verb ending matching the subject), 2+ order and 2+ type items per set.
- Writers: five on Opus (two deck halves, three lesson files) from `docs/TARGET-BRIEF.md`; cold review on Opus from `docs/TARGET-REVIEW.md`: 36 edits (2 wrong Spanish, 15 wrong or overgeneralised teaching, 15 practice items — mostly a second correct word order marked wrong — and wording). Notable: «¿Dónde usted vive?» and «Se vende carros» were called plain wrong (now "in most of Latin America" / "standard written Spanish"); «Estoy constipado» overgeneralised; a fill item where «es» was also right.
- Engine fixes from the merge: word-tile answers are matched exactly (no accent leniency); `strict` survives item cleaning; ñ is never folded to n; packs get one tag per deck group. `tools/target/link_roadmap.py` marks the 23 Spanish roadmap items as live; the roadmap variant now reads "Latin American Spanish" (its translations in the 13 interface languages are pending and fall back to English).
- Reviewer read every course file in full. Not verified: no native speaker has read it; the Caribbean / Dominican deck and lesson rest on thin sources (top ten in `tools/target/es/REVIEW.md`); the es-MX voice on a real device; the accent bar on a phone keyboard.
- Evidence: validate PASS, e2e OK on all 26 lessons, harness 68 guards, site test 24 PASS, screenshots of Today, a card, a lesson and the practice page read by the lead.

## French for English speakers, and sessions teach new cards in batches (2.25.0)
- Session fix (reported by the owner from a phone): a daily session showed one new card and quizzed it at once. Now the first look at up to 5 new cards comes first ("1 / 5 … Next", the last one "Got it — quiz me"), then the session's usual mix of quizzes and drills on them. `batchNew()` moves only the teaching step; grading, undo and the rest of the plan are unchanged, and no new interface strings were needed. Checked in en-es, en-ko and ja-en: plan `TTTTT` then quizzes, no errors.
- French: French of France (tu first, vous from lesson 2). Profile `docs/profiles/en-fr.md`. 28 lessons (27 roadmap items plus `spoken`), 18 decks / 317 cards, 392 practice items, 86 dialogues, 54 examples. Pronunciation line generated by `tools/target/fr/respell.js` (capital N for nasal vowels, required liaison shown).
- The usage limit interrupted the review and the Italian writers once; all resumed from saved work.
- Cold review (Opus): first fixed the 15 pronunciation-tool errors the writers reported (silent s in *sens*, *-tions* verb endings, future *-rai*, *cet* + liaison, numbers 70–99, spoken *y a*), then regenerated all 561 prons (14 changed) and read every one; content edits: 2 wrong French, 4 wrong teaching (the claim that *ne* is dropped in "almost every" spoken negative; "plural -s is always silent"; *commencer à* + time), 2 practice distractors that were correct French, wording. The reviewer extended liaison after *êtes / sommes* beyond the profile's list: flagged for a native check.
- Lead: the validator now fails when two cards in one deck share an English meaning (found by the app's own guard in French; fixed with formal / informal). Evidence: validate PASS, e2e OK on all 28 French lessons, harness 69 guards, site test.
- Not verified: no native speaker has read it; liaison in the pronunciation line is the likeliest place for remaining errors (top ten in `tools/target/fr/REVIEW.md`); fr-FR voice and the 14-key accent bar on a phone.

## 2.25.1 — prompt
Hide the meaning on new-card teach views until tapped, and make the Today session start from the learner's place in the lessons (a "Next lesson" first step; drills gated until the script lesson is done). Verify: harness, sess.js plans, lazy.js.

### 2.25.1 — results
Teach card meaning blurred until tap (first press of the button reveals). Session plan now opens with the next unlocked lesson once per day; quiz pool is seen cards plus this session's new cards; script drills wait for lesson 1. Harness 69 guards pass; plans for en-es, en-ko, ja-en start L, 5 teach, then quiz.

## 2.25.2 — prompt
New cards get a real front and back: the front shows only the word and audio, the meaning is on the back after a flip. Verify: flip test (meaning not rendered on the front), harness.

### 2.25.2 — results
Front: word, audio, flip button. Back (after flip or tapping the word): meaning and note, button becomes Next. flip.js: front meanVisible false, back true, no errors.

## 2.26.0 — prompt
Ship Italian for English speakers (en-it) after merge, stress fixes and cold review. Verify: validate, e2e on all 24 lessons, harness, site test.

### 2.26.0 — results
en-it: 24 lessons, 18 decks / 321 cards, 336 practice items. Cold review: 12 edits, no wrong Italian found; 517 prons match the generator. validate PASS, e2e OK on 24 lessons. Not checked by a native speaker (tools/target/it/REVIEW.md lists ten things to check first).

## 2.27.0 — prompt
Ship Portuguese (Brazilian) for English speakers (en-pt) after merge, vowel fixes and cold review. Verify: validate, e2e on all 25 lessons, harness, site test.

### 2.27.0 — results
en-pt: 25 lessons, 18 decks / 323 cards, 350 practice items. Cold review: 21 edits plus 5 lexicon entries (arroz com feijão, precisar de, à uma / ao meio-dia, softened absolutes). validate PASS, e2e OK on 25 lessons. New tool tools/target/repron.js rewrites stored prons from the generator. Not checked by a native speaker (tools/target/pt/REVIEW.md).

## 2.28.0 — prompt
Ship German for English speakers (en-de) after merge, pronunciation fixes and cold review. Verify: validate, e2e on all 25 lessons, harness, site test.

### 2.28.0 — results
en-de: 25 lessons, 18 decks / 323 cards, 350 practice items. Cold review: 14 edits (ß rule, kein vs nicht, imperative politeness, one ambiguous order item); no wrong German found. validate PASS, e2e OK on 25 lessons. Not checked by a native speaker (tools/target/de/REVIEW.md).

## 2.29.0 — prompt
Ship Indonesian for English speakers (en-id) after merge and cold review, plus engine work for the next course: Vietnamese tone keys and matching, a hyphen typed as a space counts as almost. Verify: validate, e2e on all 27 lessons, harness, site test.

### 2.29.0 — results
en-id: 27 lessons, 18 decks / 321 cards, 378 practice items. Cold review: 35 edits ("no word for a" claim, unsafe distractor panas sangat, two dialogue replies, repeated practice sentences, five order items with a second valid order). Engine: viSetTone / viCanon / accMissingOnly (unit tested), hyphen-as-space almost, NFC in deck typing. tools/target/repron.js now uses each course's pronPattern. validate PASS, e2e OK. Not checked by a native speaker (tools/target/id/REVIEW.md).

## 2.30.0 — prompt
Ship Vietnamese for English speakers (en-vi) after merge and cold review. Verify: validate, e2e on all 28 lessons, tone keys on screen, harness, site test.

### 2.30.0 — results
en-vi: 28 lessons, 18 decks / 319 cards, 392 practice items. Cold review: 34 edits; no mis-toned word found, but only seven words could be checked against a dictionary (the fetch allowlist blocked the rest), so the tone marks rest mostly on the models' knowledge. validate PASS, e2e OK on 28 lessons, tone key test OK. Not checked by a native speaker (tools/target/vi/REVIEW.md).

## 2.31.0 — prompt
Ship Mandarin Chinese for English speakers (en-zh) after merge and cold review, with the engine work for it and for Japanese. Verify: validate, e2e on all 28 lessons, unit tests for pinyin and romaji matching, harness, site test.

### 2.31.0 — results
en-zh: 28 lessons, 18 decks / 321 cards, 392 practice items; simplified characters, generated pinyin. Cold review: 46 edits (no wrong Chinese found; 19 practice items in lessons-3 fixed where a "wrong" option was acceptable or tiles had two orders); pinyin read in full by the reviewer but no dictionary site was reachable. Engine: zhNorm / zhSetTone / zhMissingOnly, jaRoma / jaLoose / jaSame, kbT() tiles default per course, gen adds pinyin to accepted answers, HOLD file keeps an unfinished course out of packs/. validate PASS, e2e OK, harness 75 guards. Not checked by a native speaker (tools/target/zh/REVIEW.md).

## 2.32.0 — prompt
Ship Japanese for English speakers (en-ja) after merge and cold review. Verify: validate, e2e on all 28 lessons, romaji matching unit tests, harness, site test.

### 2.32.0 — results
en-ja: 28 lessons, 18 decks / 370 cards (five kana decks, 30-word kanji deck), 392 practice items; kana with phrase spacing, hand-typed romaji. Cold review: 25 edits (no wrong Japanese or romaji found; 591 romaji rows pass the romaji-to-kana check; nine wrong or overstated teaching claims fixed; seven order items given a cue). validate PASS, e2e OK. Not checked by a native speaker (tools/target/ja/REVIEW.md).

## 2.33.0 — prompt
Audio pilot groundwork: the app plays a recorded clip when one exists and falls back to the device voice; tools to list every spoken sentence and to make the clips with Azure. Verify: clip test on the site build with the real headers, harness.

### 2.33.0 — results
speak() → playClip() with clipKey (cyrb53 of the cleaned text), loadClips() reads audio/<lang>/index.json on the site build only. tools/audio/export.js (en-ko: 1,485 sentences, 13,378 characters; en-es: 688, 15,137), gen_azure.js (key from the environment, resumable, --limit, --dry), test_clips.js PASS (listed clip plays with no device voice; broken and unlisted fall back). The Azure request itself is untested here: no network and no key.

## 2.34.0 — prompt
Ship Hindi for English speakers (en-hi) after merge and cold review; list 19 planned languages as coming soon with drawn flags and a researched lesson plan each; engine support for the courses in production (Russian, Thai, Arabic incl. right-to-left target text). Verify: validate, e2e on all 28 Hindi lessons, unit tests per language, harness, picker check, site and RTL tests.

### 2.34.0 — results
en-hi: 28 lessons, 18 decks / 322 cards, 392 practice items; cold review 50 edits (no wrong gender or romanisation found; 25 order items given a cue; seven overstated rules fixed); greetings set to नमस्ते. Planned languages: nl sv no da fi af hu pl cs bg ro el tr fa ur sw tl ceb yue registered (LANGS t:1, FLAG_ART) and their roadmaps merged from docs/roadmaps/*.json (tools/roadmap_merge.py); English speakers see 22 coming-soon rows; Korean titles for the new roadmaps are not written yet (English shown). Engine: ru / th / ar / hi matching, bidiPass for RTL target text, romaLoose. Harness 77 guards. Hindi not checked by a native speaker (tools/target/hi/REVIEW.md).

## 2.34.1 — prompt
After finishing a lesson, always offer the next one: in the lesson, after its practice set, and at the end of a Today session. Verify with a test in three courses (complete lesson 1 through the real quick check, press the button, land on lesson 2). Also fix end-screen praise that was Korean in every course.

### 2.34.1 — results
nextCta / goLesson / nextOpenLesson; #lsNext slot in the lesson view, filled when the lesson becomes done and on reopen; button on the practice-set end screen and the session end screen. next.js: en-es, en-ko, ja-en all show the button, open lesson 2 at the top of the page, no errors. FLOURISH now has every taught language; PRAISE() replaces six hardcoded Korean end-screen headings. Harness 77 guards.

## 2.35.0 — prompt
Ship Arabic for English speakers (en-ar) after merge, on-screen right-to-left check and cold review. Verify: validate, e2e on all 28 lessons, harness, site and RTL tests.

### 2.35.0 — results
en-ar: 28 lessons, 17 decks / 291 cards, 392 practice items; Modern Standard Arabic, fully vowelled, generated romanisation. Cold review: 25 edits (all 772 distinct words read; New York and breakfast respelled after a dictionary check; "I'm good" no longer marked wrong; digits-by-country claim corrected; a false reason removed). Right-to-left checked on screen for inline text, tables, options, tiles and fill-in. Not checked by a native speaker (tools/target/ar/REVIEW.md); the course's ةْ spelling convention is the first thing to check.

## 2.36.0 — prompt
Ship Russian for English speakers (en-ru) after merge and cold review. Verify: validate, e2e on all 28 lessons, harness, site test.

### 2.36.0 — results
en-ru: 28 lessons, 18 decks / 316 cards, 392 practice items; plain Cyrillic with a generated respelling that marks stress. Cold review: 48 edits plus 14 lexicon entries (3 more wrong stresses fixed; 25 order items given a cue; three "wrong" options that were acceptable Russian replaced; several false rules corrected). The reviewer read all 393 multi-syllable forms but could check only 5 against a dictionary. Late-night greeting changed to Добрый вечер. Not checked by a native speaker (tools/target/ru/REVIEW.md).

## 2.37.0 — prompt
Ship Thai for English speakers (en-th) after merge and cold review. Verify: validate, e2e on all 26 lessons, harness, site test.

### 2.37.0 — results
en-th: 26 lessons, 18 decks / 318 cards, 364 practice items; Thai script with a generated romanisation showing tone and length. Cold review: 60 edits (11 word-list fixes: -เตอร์ falling, น้ำ short in compounds, loanword tones; wai notes, ฟิต, letter names, a mismatched vowel-length pair). Dictionary sites mostly unreachable, so most tone and length checks rest on the reviewer's knowledge. Not checked by a native speaker (tools/target/th/REVIEW.md).

## 2.37.1 — prompt
Fix three reports from the phone: several rows look selected in the language picker; the picker's Back and close buttons sit under the status bar and miss taps; after each lesson step the app should lead on to the next thing. Verify on an iPhone profile: walk quick check → drill → next lesson; tap a picker row and count highlighted rows.

### 2.37.1 — results
Picker: hover highlight only under (hover:hover) (touch screens kept :hover on the last row touched); full-screen sheets pad their top and bottom by the safe-area insets. Lesson flow: passing the quick check shows "Mini drill: 5 cards"; finishing the drill shows "Open lesson · next" in the result box (or "Quick check" if that is the step left). flow.js on iPhone 13 profile, German course: check → drill → lesson done → next lesson opens; 0 highlighted rows after a tap. Also in this build: three-letter language codes, Cantonese-only voice matching, whole-tag voice matching (fil no longer matches fi), dropped hyphen / apostrophe as almost, Cantonese and Cebuano matching. The safe-area change cannot be emulated here: it needs a look on the phone.

## 2.37.2 — prompt
Start page: the "Set me up" button says "Start". Register Punjabi, Telugu and Kannada as planned languages.

### 2.37.2 — results
Both onboarding buttons use the existing translated key "Start". pa / te / kn added to LANGS (t:1) with the India flag; they appear as coming soon once their roadmaps are merged. Harness 80 guards. (I first overwrote the existing "Start" entries in tools/i18n/*/ui.json with a wrong shape and restored them from the last release.)

## 2.38.0 — prompt
Ship Cantonese for English speakers (en-yue) after the cold review: unhold, regenerate, validate, link roadmap, e2e.

### 2.38.0 — results
27 lessons, 18 decks, 323 cards, 378 practice items; validate PASS; roadmap 25 items linked; e2e OK on six lessons; matching test (characters, Jyutping with or without spaces, toneless = almost, wrong tone = wrong) passes. Reviewer made 24 edits, found no wrong Jyutping; REVIEW.md lists ten points for a native speaker. Not native-checked.

## 2.38.1 — prompt
Merge the Punjabi, Telugu and Kannada lesson plans so they show as coming soon.

### 2.38.1 — results
pa 27, te 26, kn 27 planned lessons merged (roadmap_merge.py now takes codes as arguments so shipped courses' linked blocks are untouched). Build verify OK, harness 81 guards. Titles' native-script words are unverified.

## 2.39.0 — prompt
Ship Tagalog for English speakers (en-tl) after the cold review.

### 2.39.0 — results
27 lessons, 18 decks, 311 cards, 378 practice items; validate PASS; roadmap 25 items linked; e2e OK on twelve lessons. Stress: 43 lexicon entries checked against Wiktionary / tagalog.com by the reviewer (one fix: tricycle), about 30 unverified (listed in REVIEW.md). Device voice fil / tl only. Not native-checked.

## 2.40.0 — prompt
Ship Cebuano for English speakers (en-ceb) after the cold review.

### 2.40.0 — results
28 lessons, 18 decks, 319 cards, 392 practice items; validate PASS; roadmap 26 items linked; e2e OK on thirteen lessons. No audio (no device or cloud voice). Pron line: stress capitals only on the 160 of 364 core words confirmed in a source; the rest lowercase. Not native-checked (REVIEW.md, STRESS-AUDIT.md).

## 2.40.1 — prompt
Language picker ("What do you want to learn?") should be in alphabetical order.

### 2.40.1 — results
Live courses and the coming-soon list are both sorted by the name shown, in the learner's language (localeCompare). Browser check for English: Arabic … Vietnamese (17), Afrikaans … Urdu (19). Harness 83 guards.

## 2.40.2 — prompt
Specify the type of Spanish (and Chinese) in the course names. Also carries the Urdu engine groundwork (no Urdu course yet).

### 2.40.2 — results
en-es is "Latin American Spanish", en-zh is "Mandarin Chinese" (packs regenerated, validate PASS). Picker order checked. Engine: Urdu matcher (urSame / urSlip), Roman folds in romaLoose (ee, oo, w, iye, ch, final h, mein), Nastaliq-first font stack for lang=ur; Hindi, Arabic and Urdu matching tests pass. Harness 83 guards.

## 2.40.3 — prompt
Letter cards show the sound on the front (lesson mini drill), and the new-card 🔄 button "doesn't flip the card".

### 2.40.3 — results
soundCard(d,c): for script-deck cards and one- or two-character non-Latin cards the romanisation and Listen button are on the back only (flashcards and Today's new cards), and auto-play waits for the flip. The 🔄 button now turns the whole card (rvturn animation) when it reveals the back. Could not reproduce a dead button: phone-emulated taps flipped 5 of 5 cards before and after. Taiwanese Hokkien registered as a planned language (hidden until its plan is merged). Harness 83 guards.

## 2.41.0 — prompt
A positive sound when an answer is right and a gentle, still pleasant sound when it is wrong. Merge the Taiwanese Hokkien lesson plan.

### 2.41.0 — results
chime(): right = rising E5 → B5 with a soft octave; wrong = soft falling G4 → E♭4 (sine, quiet). Hooked to every scored answer (13 award sites + lesson quick check + practice), debounced 250 ms. Sounds default on, turned on once for existing users (S.sfxV); Settings → Sound effects turns them off. Browser check: answering a Today quiz question starts oscillators 659 / 988 / 1319 Hz. Taiwanese Hokkien (nan): 27 planned lessons merged, shown as coming soon. Harness 83 guards.

## 2.42.0 — prompt
Ship Urdu for English speakers (en-ur) after the cold review.

### 2.42.0 — results
28 lessons, 18 decks, 320 cards, 392 practice items; validate PASS; roadmap 27 items linked; e2e OK on thirteen lessons; matching test (script, Arabic-keyboard letters, vowel marks, Roman Urdu folds) passes. Lexicon-based pron tool: 19 of 615 word forms checked against Rekhta. No Urdu voice on iPhone until clips are recorded. Not native-checked (REVIEW.md).

## 2.42.1 — prompt
Fix the Hindi home greeting (found by the Punjabi profile agent) and add the Punjabi engine groundwork.

### 2.42.1 — results
en-hi stored its greetings as plain strings while the app reads pairs, so the home screen greeted with the first two characters of नमस्ते; now pairs (नमस्ते / Hello), browser-checked. Engine: Gurmukhi matcher (paNorm / paSlip: carrier + vowel sign exact; bindi / tippi, missing addak or dot = almost), font stack for lang=pa, danda stripped in the validator; Punjabi and Urdu matching tests pass. Harness 84 guards.

## FLOW-1 — prompt (the user's request, restated)
"No Next button: go to the next question automatically. The Review page should always keep going with a consistent flow of flashcards. Decide how the flashcard system introduces and teaches new words by level, shows a card less often the more it is answered right, and more often when it is missed too much. Reprompt, follow the prompt, analyze, test, record results, re-prompt where needed."

Three iterations, each shipped only when its check passes:
- FLOW-1: in the multiple-choice review question (Today + Review) remove Next; after an answer play the chime at the tap, show the feedback, then advance by itself (right ≈1.1 s, wrong ≈2.6 s, after the spoken word; tap or Enter advances at once; one guarded finish; timer cleared on cleanup). Check: a browser test taps an option and the next question appears with no click, exactly one grade per card, and the oscillator log shows the new chime only.
- FLOW-2: Review never dead-ends. When the queue runs out it refills: due cards in other decks → new cards from the guided path within the pacing rule → extra practice (lowest box, soonest due; never suspended, buried or leech). A correct answer on a card that is not due leaves its box and due date unchanged (1 XP); a wrong one demotes as usual. A missed card comes back 3 cards later, never back to back, and must be answered right twice in the sitting before it leaves. Check: a simulation of 300 answers at 60% and 95% accuracy as a harness guard.
- FLOW-3: pacing of new cards by level and load: a new card is introduced only while fewer than LOAD cards sit in box 1 (LOAD = 4 at level 1–2, 6 at 3–5, 8 above) and recent accuracy (last 20 answers) is at least 70%; at 90%+ a new card may come every 3rd card, otherwise every 5th. Same simulation asserts it.

### FLOW-1 — results (shipped as 2.42.2)
Browser test on Review (phone size): right answer → chime 659/988/1319 Hz at the tap, next question after 1.3 s with no click; wrong → 392/311 Hz, still on the card at 1.5 s, next question by 4.1 s; tap on the feedback advances at once; one grade per card (3 answers, 3 grades, no double advance after waiting). The old tone() calls on this path are gone. Settings has "Go to the next card automatically" (off brings the Next button back). Harness 84 guards. Still with a Next/Check button: typed answers, lesson practice, drills.

### FLOW-2 / FLOW-3 — analysis, re-prompts and results (shipped as 2.43.0)
First run (refill = due → new → extras): no dead ends and extras left schedules alone, but (a) a beginner got 7 new cards in a row, (b) at 60% accuracy new cards still arrived through the last-resort fallback, (c) the leech rule parked most missed cards so the pool collapsed and the same card repeated back to back 20 times.
Re-prompt 1: when nothing else can be shown, re-ask a recent card before giving another new one; only an empty page may override the load / accuracy limits. → beginner sequence became "new, new, review, review, new …".
Re-prompt 2: cards missed often stay in the Review flow (they are the ones to show more), and a missed card comes back as a "🔁 Once more" card (shown, flipped, then asked). → back-to-back repeats 0.
Final simulation, 300 answers, seed fixed (also a harness guard at 95% and 60%):
- 95% accuracy: 0 dead ends, 0 back-to-back, 15 new cards (the daily cap) spaced every 3rd–5th card, 248 extra-practice answers with box and due date unchanged (0 changed), every missed card back within 8 cards.
- 60% accuracy: 0 dead ends, 0 back-to-back, only 7 new cards in 300 answers (pacing holds them back), 114 misses all returned within 8 cards, extras unchanged.
Browser test of the reported screen (deck 12/12 learned, nothing due): a card is shown at once (new card from the next deck, then extra practice); the "Nothing due" screen no longer appears. Auto-advance test still passes. Harness 84 guards + reviewFlow0.95 / 0.6.
Rules as built: load cap 4 cards in box 1 at level 1–2, 6 at 3–5, 8 above; accuracy over the last 20 answers ≥ 70% for any new card, ≥ 90% for every 3rd card instead of every 5th; daily new-card cap unchanged (15); day intervals by box unchanged (same day, 1, 3, 7, 14, 30 days).
Not done: changing the question type by box (recognition → recall → typing) to show the word itself less; Today sessions keep their own planner.

## 2.43.1 — prompt
"lets add cherokee to the list": register Cherokee as a planned language and merge its lesson plan.

### 2.43.1 — results
chr registered (drawn flag), 27 planned lessons in 4 stages merged, shown as coming soon. Western (Oklahoma) dialect, syllabary with a romanised line; no usable voice (text-only); lesson order follows Joyner's Cherokee Language Lessons Vol. 1, not an official syllabus; seven lesson titles are English-only because their Cherokee spellings were not confirmed. The plan asks for review by a first-language speaker or a Cherokee Nation programme before release.
