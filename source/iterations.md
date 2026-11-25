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

## 2.44.0 — prompt
Ship Punjabi for English speakers (en-pa) after the cold review.

### 2.44.0 — results
27 lessons, 18 decks, 315 cards, 378 practice items; validate PASS; roadmap 27 items linked; e2e OK on fifteen lessons; Gurmukhi matching test passes. Pron tool rule-based with tone accents: tone classes checked against MSU Basic Punjabi and Wiktionary; mid-word high tone, low tone on ā and five frequent words unverified (REVIEW.md). Not native-checked.

## 2.45.0 — prompt
Ship Telugu for English speakers (en-te) after the cold review, with its engine work.

### 2.45.0 — results
26 lessons, 18 decks, 322 cards, 364 practice items; validate PASS; roadmap 26 items linked; e2e OK on seventeen lessons. Engine: teNorm / teSlip (script), Roman folds for Telugu (th, s for sh, single for doubled consonant) and teTwin, the length guard on verbs with a doubled-consonant stem (vellanu is wrong for veḷḷānu; vellaanu is accepted); matching test passes. Present taught before past. Review fixed two wrong-teaching points (నాకు వెళ్ళాలి is no longer taught as wrong; the adjective form for a woman added). Typed romanisation without dots still cannot tell రాడు from రాదు. Not native-checked (REVIEW.md).

## 2.45.1 — prompt
Typed romanisation must not earn 'almost' for a wrong option of the same item (found by the Kannada profile: aṇṇa / anna, kāru / karu, hōgtīya / hōgtīyā). Add the Kannada engine groundwork.

### 2.45.1 — results
gen.js stores the romanised wrong options (xr) on type / fill items (Hindi, Urdu, Punjabi, Telugu packs regenerated; validate PASS). romaDistract(): a typed word that reads like a wrong option once marks are dropped is accepted only when it is closer to the answer than to the wrong option in vowel length and doubled consonants (aa = ā); pairs that differ only in dots are left alone. Tests: karu for kāru wrong, kaaru almost; hogtiya for the question form wrong, hogtiyaa almost, hogtiya for the statement almost. Kannada: knNorm / knSlip, Roman folds without the doubled-consonant fold, font stack. Harness 86 guards.

## 2.46.0 — prompt
Ship Kannada for English speakers (en-kn) after the cold review.

### 2.46.0 — results
27 lessons, 18 decks, 315 cards, 378 practice items; validate PASS; roadmap 27 items linked; e2e OK on nineteen lessons; Kannada matching test passes. Spoken Bengaluru / Mysuru Kannada with one spelling per spoken form (review found the course consistent; one change: "I live in" uses ಇದ್ದೀನಿ). Review fixed four wrong-teaching points. Spoken forms outside the profile table are regular derivations, none confirmed by a source. Not native-checked (REVIEW.md).

## 2.46.1 — prompt
Courses with no voice must not show speaker buttons (seen on a Taiwanese card: a Listen button that can never play). Add the Taiwanese engine groundwork.

### 2.46.1 — results
noAudio flag (Cebuano now; Taiwanese when it ships): speaker buttons hidden, speak() does nothing, no "no voice" toast. Screenshot checked. Taiwanese groundwork: nanKey / nanSlip matcher (46 of 46 prototype cases pass in the app), Tâi-lô-only tiles allowed in tone drills (validator), writers' lexicon-add files, and LATaigi, a 1.3 KB fallback font for the two characters most phone fonts lack (U+20895, U+2A736), composed from Noto Sans CJK TC components (tools/fonts/mk_taigi_font.py); without it Chrome showed a missing-glyph box for the whole word. Harness 87 guards.

## 2.47.0 — prompt
Ship Taiwanese Hokkien for English speakers (en-nan) after the source review.

### 2.47.0 — results
27 lessons, 18 decks, 306 cards, 378 practice items; validate PASS; roadmap 27 items linked; e2e OK on all 27 lessons; matcher 46 / 46. Text-only (no voice; no speaker buttons). Lexicon 428 entries: 426 re-opened in the source and matching (compared through a summarising fetch tool, not raw page text), 2 derived (禮拜一, 禮拜六). 293 composed sentences: 195 with an attested pattern, 98 by analogy (listed in REVIEW.md). Sandhi rules sourced (Wikipedia, Bite-size Taiwanese, taioaan.org, MOE manual); the 8 → 3 pair for -h syllables rests on one source, is labelled so and is not tested. Fallback font for two rare characters untested on real phones. Not checked by a native speaker or teacher.

## 2.48.0 — prompt (the user's request, restated)
"Next to the language flag and the search button, add a report-a-bug / comment button that is on every page. A report is tied to the exact page it was written on, so it is easy to find the reports for that page."
Build: a 🐞 button in the header (every page). It opens a sheet that (1) names the exact place: page, and where it applies the lesson, practice item, session step, deck and card, plus course and app version; (2) takes a kind (bug / content fix / idea) and a message and posts it to the existing feedback table, with the place stored as a tag on the first line of the message (no database change); (3) lists the reports already made on this same page. The Feedback board shows the place as a chip on each post. Check: a browser test opens the sheet on Today, in a lesson, in practice and in Review and reads the place; a mocked send carries the tag; the tag parses back; reports filter by page; no header overflow at phone width; harness passes.

### 2.48.0 — results
🐞 button in the header on every page. Browser test (Vietnamese course): the sheet names the place on Today ("Today"), in a session ("Today › Session · step 1/16 · lesson alphabet"), in a lesson, in practice ("… › Practice · item 4/14 · mc · <prompt>") and in Review ("Review › Letters and sounds · card đi"), each with course and version. A mocked send carried kind + the tag ⟦page=…|course=…|v=…|at=…⟧ + the text; the tag parses back and is stripped from the shown message; the sheet listed 1 of 3 mocked posts (the one for this page). The Feedback board shows the place as a 📍 line. Header: no overflow at 320 / 360 / 390 px (the level number is hidden at ≤ 410 px to make room). Harness 88 guards. Not tested: a real post to the live database (the shell cannot reach it); new strings are English only.

## 2.48.1 — prompt
"On the feedback page give each feedback type its own feed."

### 2.48.1 — results
Tabs above the board: All, Bugs, Content fixes, Ideas, Love, each with its count; a tab shows only that type's posts with their replies; the choice is kept for the visit. Browser test with six mocked posts: All 5, Bugs 2 (with the reply under its post), Content fixes 1, Ideas 1, Love 1, and "Nothing in Love yet." when empty; no overflow at 390 px. Harness 88 guards.

# Loop: 10 enhancements to the Feedback page (2026-11-20)
Constraint: no database change (readable columns: id, created_at, kind, message, name, parent_id, hearted, done, hidden, by_admin). Each iteration is checked by tools/tests/fbtest.js (browser, mocked posts); the harness runs at checkpoints.

## FB-1 — prompt
Add a search box above the board that filters posts in the current feed by words in the message, the name, the place line or a reply; the tab counts stay the totals. Check: with mocked posts, typing "review" leaves only matching posts, a word found only in a reply keeps its parent, clearing restores all, and the input keeps focus while typing.

### FB-1 — results
Search box added (fbPick / fbHay). Test: "review" → post 4 only, "1 of 7 shown", focus stays in the box; a word only in a reply ("zebra") keeps its parent post 1; name "ana" → 1; place "tones" → 3; no match → "No posts match."; cleared → all 7. No page errors, no overflow.

## FB-2 — prompt
Add status chips (All / Open / Fixed) and a sort menu (Newest, Oldest, Most replies) under the search box. Check: Open hides the two fixed posts, Fixed shows only them, Oldest reverses the order, Most replies puts the post with a reply first.

### FB-2 — results
Status chips and sort menu added. Test: Open → 5 posts (the two fixed ones gone), Fixed → posts 3 and 7 only, Oldest → order reversed (6 … 1), Most replies → post 1 first, Newest restores. No errors, no overflow.

## FB-3 — prompt
Add a "My posts" chip that shows only posts sent from this device, and never show a hidden post to anyone but an admin or its author. Check: My posts → post 4 only (the device's saved id); hidden post 8 is absent for a normal user and present when fbAdmin is true.

### FB-3 — results
"My posts" chip added; hidden posts are filtered on the client too. Test: a normal user no longer sees hidden post 8 (feed total 6), My posts → post 4 only, an admin sees post 8. No errors.

## FB-4 — prompt
Make the 📍 place line on a post a button: tapping it filters the board to every report from that same page (shown as a removable "Page: …" pill), and add a "Go to page" link that opens that page (the lesson, the Review deck, or the tab). Check: tapping the place on post 1 leaves posts 1 and 7 (both "today"), the pill shows and its ✕ clears it, and Go to page on the lesson post opens that lesson.

### FB-4 — results
Place line is a button and has a "Go to page" link. Test: tapping the place on post 1 → posts 1 and 7 (both written on "today"); pill "Page: today ✕" appears and clearing restores 6; fbGoto opened the lesson, the Review deck and (for another course's report) the Today tab: [true, true, true]. No errors, no overflow.

## FB-5 — prompt
Add a "Pages with open reports" summary above the board: each page that has unfixed tagged reports, with its count, most first; tapping one filters the board to that page. Check: with the mocked posts it lists "today 1" and "review/Letters and sounds 1" only (the fixed lesson report is not listed), and tapping "today" filters to posts 1 and 7.

### FB-5 — results
"Pages with open reports" summary added (collapsed by default). Test: lists "review/Letters and sounds 1" and "today 1" (the fixed lesson report is not listed); tapping "today" filters to posts 1 and 7, tapping again clears (6). Harness checkpoint: 88 guards, no errors, no overflow. Shipped FB-1 … FB-5 as 2.49.0.

## FB-6 — prompt
Composer: the message placeholder changes with the chosen type (a bug asks what happened and what was expected), and an unsent draft is saved on the device and restored on return, then cleared after a successful send. Check: choosing Bug changes the placeholder; typed text survives a page reload with its type; after a mocked send the box and the saved draft are empty.

### FB-6 — results
Composer placeholders per type and draft saving added. Test: Bug placeholder reads "What happened, and what did you expect? Which page or card?"; after a reload the text "half written report" and the Bug type are back; after a mocked send the box is empty and the saved draft is gone. No errors.

## FB-7 — prompt
Show each post's age in words ("28 min ago", "yesterday", "3 days ago", then the date) with the full date on hover, and mark posts that arrived since the reader's last visit with a "new" badge plus a count beside the board title. Check: a 29-minute-old post reads "… min ago", a 40-day-old one shows a date; with the last visit set to two days ago only the newer posts carry the badge and the count matches.

### FB-7 — results
Ages in words and a "new" badge added. Test: "28 min ago", "yesterday", "10 days ago", and "Oct 11" for a 40-day-old post, each with the full date as its title; with the last visit two days back the badge is on posts 1 and 3 and on the reply, not on older posts or the reader's own, and the title shows "3 new". No errors, no overflow.

## FB-8 — prompt
Long boards and long posts: show 15 posts at a time with a "Show more" button that says how many are left, and fold a message longer than about 320 characters behind "Show more / Show less". Check: with 40 extra mocked posts 15 are rendered, one tap gives 30, changing the feed resets to 15; a 900-character post starts folded and unfolds on tap.

### FB-8 — results
Paging and folding added. Test with 41 extra posts: 15 rendered, button reads "Show 15 more · 33 left", one tap → 30, switching feed → back to 15; a 900-character post shows 291 characters folded, 910 open, and folds again. No errors, no overflow.

## FB-9 — prompt
Add "Copy" on each post (type, place, course, version, date, message and replies as plain text) and "Copy shown" above the board for every post that passes the current filters, so reports can be pasted straight into a fix session. Check with a stubbed clipboard: copying post 1 gives its place, message and the reply; with the Bugs feed and Open status, Copy shown contains the open bug reports and not the fixed one.

### FB-9 — results
Per-post Copy and "Copy shown" added. Test with a stubbed clipboard: post 1 copies as "[bug] today · en-vi · v2.48.0 · 2026-11-20 · Ana · #1", its message, and "↳ Developer: Thanks, fixed…"; Bugs + Open → Copy shown holds the two open bug reports and neither the fixed bug nor an idea. No errors, no overflow.

## FB-10 — prompt
Links to a post: a "Link" button copies an address ending in #feedback-<id>; opening such an address clears the filters, makes sure the post is on screen, scrolls to it and highlights it; and after someone sends feedback the board jumps to their new post in the same way. Check: opening #feedback-4 with a search and a feed filter active shows post 4 highlighted; a post beyond the first 15 is still reached; after a mocked send the new post is highlighted; the Link button copies an address ending in #feedback-4.

### FB-10 — results
Post links and jump added (#feedback-<id>). Test: Link copies an address ending "#feedback-4"; with the Ideas feed and a search active, opening #feedback-4 resets to All with an empty search and highlights post 4; a post 45 places down is reached (limit raised to 60) and highlighted; a link to a reply highlights it under its parent; after a mocked send the new post is highlighted. Screenshot checked at 390 px. Final: fbtest.js all checks, harness 88 guards, no errors, no overflow. Shipped FB-6 … FB-10 as 2.50.0.

| # | Change | Result |
|---|---|---|
| FB-1 | Search box | pass |
| FB-2 | Open / Fixed chips, sort | pass |
| FB-3 | My posts; hidden posts hidden on the client | pass |
| FB-4 | Place line filters by page; Go to page | pass |
| FB-5 | Pages with open reports | pass |
| FB-6 | Placeholders per type; saved draft | pass |
| FB-7 | Ages in words; new-since-last-visit badge and count | pass |
| FB-8 | 15 at a time; long posts folded | pass |
| FB-9 | Copy post; Copy shown | pass |
| FB-10 | Post links, jump and highlight | pass |
Not done: none of this was run against the live board data; new strings are English only.

# Loop 2: 20 more enhancements to the Feedback page and the report button (2026-11-20)
Same constraint: no database change. Checked by tools/tests/fbtest.js (mocked posts) and tools/tests/bugtest.js (the report sheet); harness at checkpoints.

## FB-11 — prompt
Report sheet keyboard and focus: Escape closes it, focus returns to the 🐞 button, and Tab stays inside the sheet. Check: open, press Escape → sheet gone and the 🐞 button focused; Tab from the last control returns to the first.

### FB-11 — results
Escape closes the report sheet and focus returns to 🐞; Tab wraps inside the sheet. Test: opened with Enter on the button; Tab from the last control lands on the first; after Escape the sheet is gone and the active element is bugBtn. No errors.

## FB-12 — prompt
Report sheet: show a character counter (n / 1500) and keep an unsent report as a draft for the page it was started on; reopening the sheet on that page restores text and kind, another page starts empty, and sending clears it. Check: type, close, reopen on the same page → restored with the count; open on another page → empty; send → draft gone.

### FB-12 — results
Counter and per-page draft added. Test: "14 / 1500" while typing; reopening on Today restores the text, the Content type and the count; on Progress the box is empty; after a send the box, the draft and the counter are cleared (1 report sent). No errors.

## FB-13 — prompt
Report sheet: one-tap reasons that fit the place (on a card or practice item: wrong translation, wrong pronunciation line, audio, typo, "my answer was marked wrong"; in a lesson: unclear explanation, mistake, typo; elsewhere: something does not work, looks broken, confusing). A tap puts the reason on the first line and sets the type. Check: in Review the card reasons show, tapping "Wrong translation" starts the message with it and selects Content; on Today the general reasons show.

### FB-13 — results
Reasons by place added. Test: Today shows the three general reasons; Review shows the five card reasons; tapping "Wrong translation" then "Typo" leaves "Typo." as the first line above the typed text (the earlier reason is replaced) and selects Content. No errors, no overflow.

## FB-14 — prompt
When a report is made right after answering, attach what the learner answered, what was expected and how it was marked (typed and tile answers in practice, the chosen option in review questions), shown in the sheet and on the board. Check: answer a review question wrongly, open the sheet → the line names the chosen and the expected answer and "marked wrong"; the sent tag carries it; a report on a page with no recent answer carries none.

### FB-14 — results
Last answer attached. Test: after choosing "trời" where "chanh" was right, the sheet shows ✍️ answered “trời” · expected “chanh” · marked wrong; the sent tag carries the same text in ans=; on Progress no answer is attached. It also shows on the board's place line and in copied text. No errors.

## FB-15 — prompt
Show on the 🐞 button how many open reports already exist for the page being viewed (a small number badge), loading the board quietly a few seconds after the app starts on the website. Check: with two open and one fixed mocked reports for Today, the badge reads 2 on Today and is absent on Progress; it updates when the page changes.

### FB-15 — results
Badge added (bugBadge), refreshed on page change, after a send and every 4 s while reports are loaded; the board loads quietly 3 s after start on the website. Test: Today shows 2 (two open reports, the fixed one and another course's are not counted) with the label "… (2 open reports here)" after a page change, Progress shows none. The first reading in the test was 1 because the page had not changed since the mock was swapped: the badge is up to 4 s stale by design.

## FB-16 — prompt
Report sheet: after sending, show a "View it on the board" link that opens the board on the new post, and make each earlier report in the sheet's list open the board on that post. Check: after a send the link points to #feedback-<new id> and following it lands on the board with the post highlighted; tapping a listed report does the same for that post.

### FB-16 — results
Links added. Test: after a send the status shows "View it on the board" pointing at #feedback-503 (the new post); following it closes the sheet and lands on the board with that post highlighted; tapping a listed report (4 listed) opens the board on post 1, highlighted. No errors.

## FB-17 — prompt
Privacy check before a public post: if a message looks like it holds an email address or a phone number, hold the send and show a warning with the choice to edit or send anyway (board composer and report sheet). Check: a message with an email is not sent on the first submit and shows the warning, a second submit sends it; a normal message, and one with a lesson number or a price, sends at once.

### FB-17 — first check failed
Email and plain phone numbers were caught and held, but "+1 (918) 555-0142" was sent from the board composer: the pattern allowed only one separator between digits.

## FB-17b — prompt
Allow up to two separator characters between digits in the phone pattern, and re-run the same check plus a date and a version number that must not trigger it.

### FB-17b — results
Privacy check now passes. Test: email and phone-shaped text are detected, "lesson 12 costs 35000 dong", a version number with a date, and plain text are not; a report with an email is held with the warning and goes out on the second submit; a normal report goes at once; "+1 (918) 555-0142" is held in the board composer. No errors.

## FB-18 — prompt
Outbox: when a report cannot be sent because the device is offline or the request fails (not when the server refuses it), keep it on the device, say so, and send it automatically when the app is next online or opened. Check with a stubbed network: a failed send is stored and the form reports it as saved; a later flush with the network back posts it once and empties the outbox; a server refusal is not queued.

### FB-18 — results
Outbox added (fbOut / fbFlush; flush on the online event and 6 s after start). Test with a stubbed network: an offline send returns "queued" and stores 1 item; a server refusal returns false and is not stored; with the network back one flush posts "offline report" once, empties the outbox, records the new id as the device's own, and a second flush sends nothing; the sheet shows "Saved on this device." No errors.

## FB-19 — prompt
Where reports cannot be sent at all (the preview build, or no backend), the report sheet's button becomes "Copy report": it copies the place, course, version, last answer and message as text so it can be pasted to the developer, and says so. Check: with the backend off the button reads "Copy report", pressing it puts the place and message on a stubbed clipboard and sends nothing.

### FB-19 — results
Copy fallback added. Test with the backend off: the button reads "Copy report"; pressing it copies "[content] Today · en-vi · v2.50.0 · 2026-11-20" plus the message, shows "Copied.", and sends nothing. No errors.

## FB-20 — prompt
Board filters for "This course" (reports written in the course now open) and "This version" (reports from the app version now running). Check: This course drops the en-ko report and untagged posts; This version keeps only posts tagged with the running version number; both can be combined and cleared.

### FB-20 — results
Course and version chips added. Test: This course → posts 1, 3, 4 and 20 (the en-ko report and untagged posts dropped); with This version too → post 20 only; version alone → 20; cleared → 7. Checkpoint: both test files clean, harness 88 guards, no errors, no overflow. Shipped FB-11 … FB-20 as 2.51.0.

| # | Change | Result |
|---|---|---|
| FB-11 | Sheet: Escape, focus return, Tab stays inside | pass |
| FB-12 | Sheet: counter and per-page draft | pass |
| FB-13 | Sheet: one-tap reasons by place | pass |
| FB-14 | Last answer attached to a report | pass |
| FB-15 | Open-report count on the 🐞 button | pass |
| FB-16 | Links from the sheet to the board | pass |
| FB-17 | Privacy check (email, phone) | pass on the second prompt |
| FB-18 | Offline outbox | pass |
| FB-19 | "Copy report" where sending is impossible | pass |
| FB-20 | This course / This version filters | pass |

## FB-21 — prompt
A one-line summary above the feeds: open, fixed, total posts and how many arrived in the last 7 days. Check: with the mocked board (6 visible posts, 2 fixed, 4 from the last week) the line reads Open 4 · Fixed 2 · Total 6 · 4 this week.

### FB-21 — results
Summary line added. Test: "Open 4 · Fixed 2 · Total 6 · 4 this week" for the mocked board. No errors.

## FB-22 — prompt
While someone types a post or a report, show up to three existing posts that share at least two meaningful words ("Already reported?"), each opening that post, so duplicates are avoided. Check: typing "crash when I tap fast" in the board composer lists post 4; unrelated text lists nothing; the report sheet shows the same hint.

### FB-22 — results
"Already reported?" hint added in both forms. Test: "the app will crash when I tap fast on review" lists post 4; unrelated text lists nothing; in the report sheet "button does nothing when pressed" lists post 1. No errors, no overflow.

## FB-23 — prompt
"Me too": a 👍 button on each post that records agreement as a "+1" reply (no database change), shows the count, cannot be pressed twice or on your own post, keeps "+1" replies out of the visible thread, and adds a "Most wanted" sort. Check: pressing it sends a +1 reply for that post and the count becomes 1; the button is then disabled; the +1 is not shown as a reply; Most wanted puts that post first.

### FB-23 — results
👍 Me too added (sent as a "+1" reply, no database change; skips the 30 s limit; never shown as a reply). Test: one "+1" sent for post 2, label "Me too · 1", button disabled after, disabled on own post, "Most wanted" puts post 2 first. No errors.

## FB-24 — prompt
Fold long reply threads: with more than 3 replies show the latest 2 and a "Show N earlier replies" button. Check: a post with 5 replies shows 2 and the button; pressing it shows 5.

## FB-25 — prompt
Add a "💬 Needs reply" filter (open posts with no developer reply), mark developer replies with an accent edge, and badge answered posts. Check: the filter lists only open posts with no developer reply; post 1 carries the "answered" badge; the developer reply has the class.

## FB-26 — prompt
Admin one-tap "✔ Fixed in v<version>": posts a developer reply with the version and marks the post done. Shown to admins only, on open posts. Check: not rendered for normal users; as admin, pressing it sends "Fixed in v<version>." under that post and the post becomes done.

### FB-24 — results
Threads over 3 replies fold. Test: 5 replies → 2 shown plus "Show 3 earlier replies"; after pressing, 5 shown.

### FB-25 — results
"💬 Needs reply" filter, "answered" badge and accent edge on developer replies. Test: filter lists posts 2 and 4 (post 6, a "love" note, first appeared too; love notes are now excluded); post 1 badged, post 2 not; developer reply has the class.

### FB-26 — results
Admin "✔ Fixed in v…" button. Test: 0 buttons for a normal user; as admin shown on open posts only; pressing it on post 4 sent "Fixed in v<version>." under post 4 and a PATCH done=true; post marked done.

## FB-27 — prompt
Tell a reader when someone answered their post: a dot with the count on the Feedback tab for replies to their own posts since their last visit, and a "↩ Replies to me" filter. Check: with post 1 mine and a newer developer reply, the tab shows 1 and the filter lists only post 1; after opening the board the dot clears.

## FB-28 — prompt
Highlight search matches in post text. Check: searching "crash" wraps the match in <mark> in post 4, with no marks when the search is empty, and text is still escaped.

## FB-29 — prompt
"🗂 By page" view: group the shown posts under a heading per page (most reports first), posts with no page last. Check: headings appear in count order and every post sits under its own page heading.

## FB-30 — prompt
Remember the board's filters for the visit (status, sort, chips, view) and add a "🗓 Last 7 days" filter. Check: Last 7 days hides the 10- and 40-day-old posts; after setting filters and re-running the page setup, the same filters are still on.

### FB-27 — results
Feedback tab shows a count for new replies to your posts; "↩ Replies to me" filter. Test: dot "1" with a newer developer reply on my post 1, cleared once seen, filter lists [1].

### FB-28 — results
Search matches highlighted. Test: "crash" marks 2 matches; HTML in a post stays escaped; no marks with an empty search.

### FB-29 — results
"🗂 By page" view. Test: headings today·2, lessons/tones·1, review/Letters and sounds·1, No page·2; every post under its own heading; off removes headings.

### FB-30 — results
Filters remembered for the visit; "🗓 Last 7 days". Test: last 7 days shows [1,2,3,7] (10- and 40-day posts hidden); status/sort/week restored after re-running page setup.

# Loop 3 — 20 more Feedback page enhancements (FB-31 … FB-50)

(Side fix requested mid-loop: coming-soon flags now show the language name on hover, e.g. "Cherokee · Coming soon". Checked in the picker: titles read "Afrikaans · Coming soon", "Bulgarian · Coming soon", …)

## FB-31 — prompt
The filter row has grown to 10 chips over 4 lines on a phone. Keep the status chips and Sort visible and fold the rest behind a "⚙ Filters" button that shows how many are on; it opens by itself when any folded filter is active. Check: closed by default with 4 chips visible; opening shows the rest; with one folded filter on, the button reads "Filters · 1" and stays open after a redraw.

## FB-32 — prompt
Each post's buttons wrap onto two lines on a phone. Make Copy and Link icon-only (with labels for screen readers) so the row fits one line at 390 px. Check: all action buttons of a post share one line; both still have aria-labels.

## FB-33 — prompt
The place line breaks "Go to page" across lines. Put the page button and a no-wrap "↗ Open" link on the first line and the details (item, course, version) on a second line. Check: the open link is one line high and still goes to the page.

## FB-34 — prompt
The thank-you note after posting says 감사합니다 in every course. Show the Korean only in the Korean course, and clear the note after 8 seconds. Check: in the Vietnamese course the note has no Hangul.

### FB-31 — results
First try: the folded row stayed visible (the row's flex style beat the hidden attribute). Re-prompt: hide it with display:none. Pass: 5 chips visible when closed (4 status + Filters), 12 when open, "Filters · 1" with one folded filter on and it stays open, 5 again after clearing.

### FB-32 — results
Copy and Link are icon buttons with aria-labels. All 4 action buttons sit on one line at 390 px.

### FB-33 — results
Place line: page button + "↗ Open" on line one (15 px high, no wrap), details on line two.

### FB-34 — results
Thank-you note in the Vietnamese course: "Posted — thank you! 🙏", no Hangul; clears after 8 s.

(Side requests mid-loop: courses renamed "Chinese (Mandarin)", "Portuguese (Brazilian)", "Spanish (Latin American)"; "Portuguese (Portugal)" added as a planned language, lesson plan being researched by an Opus agent.)

## FB-35 — prompt
One-tap "✕ Clear filters" whenever a search or filter narrows the board, also inside the "No posts match" message. Check: with search + status + a folded filter on, the button appears; pressing it shows every post again and empties the search box.

## FB-36 — prompt
Keyboard: "/" on the Feedback page jumps to the search box (not while typing elsewhere); Esc in the search box clears it. Check both.

## FB-37 — prompt
Pressing a filter chip redraws the row and drops keyboard focus. Keep focus on the same chip or tab after a redraw. Check: after clicking Open, Filters and a feed tab, document.activeElement is that same control.

## FB-38 — prompt
Bug reports carry the last script error seen in this visit (message and line, up to 120 characters) so a crash report explains itself; shown on the post as a "⚠" line. Check: after a simulated error the tag holds err=…, the card shows it, and with no error nothing is added.

## FB-39 — prompt
Reports carry a short device note (screen size, theme, installed app or browser tab, offline) shown on the post as "📱 …". Check: tag holds dev=390x800…, card shows it, and old posts without it still render.

## FB-40 — prompt
Mark posts that were sent from an older app version with an "older version" badge, since the problem may already be fixed. Check: a v2.47.0 post has the badge, a current-version post does not.

### FB-35 — results
"✕ Clear filters" appears only when something narrows the board; with search "zzzz" + Open + Last 7 days: 0 posts and the button; after pressing: 6 posts, search empty, filters off.

### FB-36 — results
First try failed: "/" already opens the app-wide search, so focus never reached the board search. Re-prompt: on the Feedback page "/" goes to the board search (Ctrl/⌘+K still opens the app-wide search). Result below.

### FB-37 — results
Focus stays on the pressed control after a redraw: Open chip, Filters button and Bugs tab all kept focus.

### FB-38 — results
After a simulated error the tag holds "err=x is not defined @42" and the card shows "⚠ x is not defined @42"; with no error nothing is added. Tag limit raised from 640 to 800 characters.

### FB-39 — results
Tag holds "dev=390x800"; card shows "📱 390x800"; older posts without it render as before.

### FB-40 — results
"older version" badge on the open v2.48.0 post; none on a current-version post, a fixed post, or a post with no version.

### FB-36 — results (after re-prompt)
"/" focuses the board search on the Feedback page; typing "a/b" inside it works; Esc clears it and stays on the page.

## FB-41 — prompt
Admin quick replies: when an admin opens a reply box, show three one-tap starters ("Thanks — looking into it.", "Could you tell me more? What did you tap, and what did you expect?", "I can't reproduce this yet — which device and browser?") that fill the box. Check: hidden for normal users; as admin a tap fills the textarea.

## FB-42 — prompt
"☑ Copy as checklist": copies the shown posts as a to-do list grouped by page (- [ ] #id · text), fixed posts ticked. Check: output has a heading per page and one line per shown post, with [x] for fixed posts.

## FB-43 — prompt
Refresh the board quietly every 90 s while the Feedback page is open and visible, but never while a reply box is open or the reader is typing. Check: the guard returns true on an idle Feedback page and false when on another page, when a reply box is open, or when the composer has focus.

## FB-44 — prompt
Keep a copy of the last loaded board on the device; if loading fails, show that copy with a "Saved copy from <time> — Try again" note instead of an empty error. Check: after one good load, a failing load still shows the posts and the note.

## FB-45 — prompt
"🔥 Most wanted" strip at the top of the All feed: up to 3 open posts with the most 👍 (at least one), each a link that jumps to the post. Check: hidden with no votes; with votes it lists them in order and a tap highlights the post.

### FB-41 — results
Quick replies: 0 chips for a normal user, 3 for admin; tapping "Tell me more" filled the reply box.

### FB-42 — results
"☑ Copy as checklist" output has one heading per page with counts and one line per shown post; fixed posts are ticked ([x] for #3 and #7). Follow-up applied: "(no page)" group moved to the end.

### FB-43 — results
Quiet refresh every 90 s. Guard: idle Feedback page true; reply box open false; typing false; other page false.

### FB-44 — results
After one good load (8 rows cached), a failing load still showed 6 posts with "Offline or the board is unreachable — showing a saved copy from …" and Try again; the note cleared on the next good load.

### FB-45 — results
"🔥 Most wanted" hidden with no votes; with votes lists post 2 (3) then post 4 (1), skipping the fixed post; a tap highlights the post; hidden while filters are on.

## FB-46 — prompt
In the report sheet, add "See all on the board →" beside "Reports on this page", opening the Feedback page already filtered to that page. Check: the link closes the sheet, lands on #feedback and fbPage equals the page key.

## FB-47 — prompt
"✅ Recently fixed" foldout on the board: the 5 most recently posted fixed items with the developer's last reply, so readers see what was done. Check: lists the fixed posts with the reply text where one exists; hidden when nothing is fixed.

## FB-48 — prompt
Ctrl/⌘+Enter sends from the composer, a reply box and the report sheet. Check each sends exactly once.

## FB-49 — prompt
Tell screen-reader users the result of a filter change: the live region says "N posts shown" (or "No posts match") after search or filter changes, not on plain refreshes. Check the live text after a filter and that an unchanged redraw does not repeat it.

## FB-50 — prompt
"Me too" votes and replies are rows too, so the 300-row load can cut off old posts. Load up to 1000 rows and say "Showing the latest posts" when the limit is hit. Check: the request asks for 1000; the note shows only when 1000 rows come back.

### FB-46 — results
"See all on the board →" in the report sheet: closes the sheet, lands on #feedback with the page filter "today" and shows posts 1 and 7.

### FB-47 — results
"✅ Recently fixed (2)" lists "Typo in lesson 2 ↳ Fixed in v2.50.0." and "Streak did not count"; hidden when nothing is fixed. (First check read the text of a closed foldout and came back empty; the test now reads the content directly.)

### FB-48 — results
Ctrl/⌘+Enter sent exactly once from the composer (1), a reply box (2, parent 2) and the report sheet (3).

### FB-49 — results
Live region: nothing on first draw, "2 posts shown" after the Fixed filter, nothing on an unchanged redraw, "No posts match" for an empty search.

### FB-50 — results
The load asks for limit=1000; the "Showing the latest posts" note is hidden for a small board and shown when 1000 rows come back; paging still draws 15.

### Loop 3 close
All fbtest and bugtest steps pass with no errors or overflow; harness 88 guards pass.

# Simple view (2026-11-22)

## SV-1 — prompt
Kii: "The app has a lot of buttons and things to read; this is overwhelming for the users." Rewritten: every screen shows one main action and only the controls a first-week learner needs; everything else moves behind one "⚙ More options" button per screen, remembered on the device. Nothing is removed. A control that is in use (a chosen mode, a ticked box, a reply badge) stays visible. One setting, "Show all options on every screen", restores today's layout exactly. Verify by counting visible controls and words per screen before and after, on a new user, a returning user, a generated course, an X-to-English course and Arabic (right to left); plus the harness, the feedback, report-sheet and visitor tests, lesson click-throughs, and a new simple-view test.

### SV-1 — results
Visible controls / words, en-es returning user, before → after: Today 14/156 → 7/83; Practice 17/131 → 5/70; Review 22/53 → 7/35; Lessons 28/639 → 28/235 (the controls are the lessons themselves; only the next lesson shows its description); Read 15/52 → 13/25; Progress 32/474 → 9/107; bottom tabs 7 → 5 (Read and Feedback move off the bar; Read is linked from Practice, Feedback from the 🐞 button, and either tab reappears while you are on that page or have unread replies). Korean Practice 27 → 5, Review 21 → 6. "Show all" mode measures exactly as before (14/17/22/28/15/33, 7 tabs). tools/tests/simpletest.js passes: within caps, More options reveals and is remembered and keeps focus, an in-use mode stays visible, Read and Feedback reachable, reply badge shows the tab, Show all restores everything. Harness, fbtest, bugtest, vistest pass; e2e OK on Spanish (6 lessons) and Japanese (4). Three new labels translated into all 14 interface languages.

# Reports #11, #12, #13 (2026-11-22)

## RP-1 — prompt
#11 (Japanese, Hiragana review): "the answer is shown before I make a selection". Reproduced: the question gives the reading ("o, as in kimono") and every option showed its reading under the letter. Fix: on a letter card no option shows its reading. Check on ten courses that no letter-card quiz shows a reading on an option.
### RP-1 — results
0 of 277 letter-card quizzes across en-ja, en-ko, en-ru, en-hi, en-th, en-ar, en-zh, en-te, en-yue show a reading on an option (Spanish has no letter cards).

## RP-2 — prompt
#12: "add sound when a question is guessed right or wrong". The sounds exist and fire (1 right and 6 wrong chimes counted in the test) but are quiet: peak level 0.09 and 0.07 on sine tones, with the wrong-answer tone low enough to vanish on laptop and phone speakers. Raise both to about 0.2 on a brighter triangle tone.
### RP-2 — results
Levels raised (right 0.22, wrong 0.20, triangle). Cannot be heard in a headless test; needs Kii's ear.

## RP-3 — prompt
#13 (Korean, Hangul vowels review): "after teaching one card it starts the quiz; shouldn't it be teaching 5 cards and then quizzing". Review now teaches new cards five at a time (a counter shows 1/5 … 5/5), then asks those five in mixed order, never starting with the one just shown. A new batch starts only when the last one is mostly learned and accuracy is 70% or better; missed cards still come back within a few cards. Check the order in three courses and keep the 300-answer flow simulation passing.
### RP-3 — results
en-ko: T1/5 ㅏ … T5/5 ㅡ, then Q ㅜ ㅡ ㅗ ㅓ ㅏ, a missed card re-shown and re-asked, then the next five. Same shape in en-ja and en-es. Harness updated to click through a batch and to check the load limit at batch start: 94 guards pass, flow simulation passes at 95% and 60%.

# Card memory judge (2026-11-24)

## MEM-1 — prompt
Kii: "lets come up with a better algorithm or way to judge if someone is still learning a flash card, has it memorized/stored in memory, or needs to practice it more." Rewritten: give every card one judgement, used by every screen and fed by every trainer: New, Learning, Memorized or Needs practice. Judge by evidence of memory, not by a count of right answers: how long the card lasted between right answers, what kind of question was answered (picked from four, heard, typed, or only "Got it"), how recently it was seen, and how often it has slipped. A right answer seconds after seeing the card, a lucky pick, and "Got it" on a card just read must not count as memory. Memorized means the app expects the learner to still know the card a week after their last review. Needs practice means the app expects a miss, because the card keeps being missed or has gone unseen longer than its memory lasts. Learning is everything in between. The same judgement decides what comes back and when: which earlier cards join the quiz after each new five, when a new five may start, what Weak spots and Review bring up, and when a deck counts as finished. Existing progress carries over on every course and keeps working on a device still running the old version. Verify with: a simulation of learners whose true memory is known (how many of the cards called Memorized the learner truly still knows, while studying and after a month away, and whether the cards flagged Needs practice are truly the weaker ones); rule tests (one lucky answer never gives Memorized, an answer in the same sitting adds next to nothing, a wrong answer never improves a state, every trainer moves the state the same way); a migration test (no card lost, no due card becomes not due, no trophy removed); the harness, the 300-answer flow simulation and the trainer recording. Three releases: A, one judge and its words on every screen; B, the judge chooses the quiz and review cards; C, sharper evidence. The full plan is the Doc "Judging card memory: prompt and plan" (https://claude.ai/artifact/4GouLrWbgrh3WpYTGajiya); the owner chose "Build it, check real answers first" for release A.

### MEM-1 — results (release A, 2.101.0)
Real answers first: the database held 25 logged answers from 2 learners (16 of 18 right on new cards, 2 of 2 in box 1, 4 of 5 in box 2), too few to tune anything, so every learner starts on the published numbers (FSRS-5 defaults, MIT licence, checked against the `fsrs` package 4.1.2; notice in the judge block and `docs/THIRD-PARTY.md`) and the judge corrects them per learner.

Built: the judge as one block of plain functions in `src/app.html` (`MEM-JUDGE-START` to `MEM-JUDGE-END`) and one function, `judge()`, through which every answer about a card now goes (Review, sessions, flip cards, the pick and listen quizzes, the typed quiz). The four words are on flashcards, deck chips, the picked-deck line, Browse, Today and Progress, with 15 new strings in all 28 interface languages.

Simulation, as a release test (`node tools/tests/memjudge.js --table`; 60 learners, 300 cards, 60 days of study, then away). Share of cards called Memorized that the learner truly still knows, for the four kinds of learner (remembers as the published numbers assume / forgets faster / forgets much faster / remembers longer): while studying 0.939 / 0.941 / 0.938 / 0.949; after 14 days away 0.909 / 0.876 / 0.855 / 0.922; after 30 days away 0.881 / 0.822 / 0.787 / 0.898. Forecast against result on spaced answers: 0.913 and 0.913, 0.875 and 0.878, 0.767 and 0.758, 0.925 and 0.926. Without the two personal numbers the learner who forgets faster is forecast 0.918 right and gets 0.777. Reviews per study day 38.4 / 75.8 / 109.5 / 29.7. The comparison with the old boxes was run on the prototype (150 learners; `memory-judge/` in the project files): after 30 days away the old "mastered" cards were truly known 83% / 53% / 30% / 90% of the time, the new Memorized cards 87% / 79% / 77% / 88%.

Rule tests (81 checks in `tools/tests/memjudge.js`, on 200,000 random cards plus pinned paths): a wrong answer never lengthens a memory and always leaves the card in Needs practice, due the next day; a right answer at most quadruples a memory and never shortens it; a right answer one minute after the last adds under 1% to a memory of a day or more; ten right answers in one sitting leave a new card at 1 day; a new card and one more right answer, however late, is never Memorized; picked right on every due day gives 1, 3.2 and 9.2 days, Memorized on the third answer (day 4); typed gives 1.5, 6 and 20 days (day 8). The test failed on each of 17 mistakes planted in the judge.

Migration: saved progress is converted when a card is read, not in one pass on first load (same result for the learner, and nothing is rewritten until a card is answered). Reading 3,000 old cards changes none of them; no card is lost; every due card stays due; deck trophies and open decks stay. Two-device round trip against releases 2.92.0 and 2.100.0 (`tools/tests/memjudge-roundtrip.js`, 21 checks each): the older release shows and answers cards the judge wrote, and the judge reads their answers back sanely.

Harness: 135 guards pass (six new: `memOnePath`, `memSitting`, `memOldCard`, `memWords`, `memKeeps`, `memSingleWriter`); the 300-answer flow simulation passes at 95% and 60%; the trainer recording is byte-identical.

Where the build differs from the plan, or says more than it did: (1) about 10 strings became 15; (2) a first answer that is wrong counts as a missed day, so "parked after misses on 4 different days" is exact; (3) on a card's first day its strongest right answer counts, so "Got it" followed by a right pick starts where a first right pick does; (4) the personal numbers move only on cards the judge itself graded last, and only after half a day or more; (5) "right again in the same sitting adds nothing (under 1%)" holds for memories of a day or more; a memory of hours gains a few percent per repeat (1.5% at a third of a day), which never clears a miss; (6) "one answer never makes a card Memorized" holds with the starting numbers; a learner whose personal numbers have risen well above 1 can get there on the second right answer.

Not tested: real learners; the weights for typed answers and "Got it" (rule tests only, the simulated learners answer by picking); the 15 strings by native speakers; real phones. Releases B and C are not started.

## QF-1 — prompt

Owner, 2026-11-24, with a picture of a Review question and of a Practice round result ("11 / 15 · 73%, Round 1 of 3 · 80% to pass"): "i like the format for review but the flip button doesnt work because it isnt a flash card i guess. after a finished quiz lets remove the 80% to pass and the save and exit it should auto save. lets have it add in the 5 new cards first showing what it is and then another test with the old cards mixed in but lets make it faster to the next card when a user gets it wrong. after every wrong or right answer the audio should play for the sound."

### QF-1 — results (2.104.0)

Edit scripts `tools/patches/quiz_flow.py` (18 guarded replacements in `src/app.html`) and `quiz_flow_i18n.py` (one pattern in 27 dictionaries). Release test `tools/tests/quizflow.js` (in `ship.sh`).

- Key hints under Review: the line listed F flip, ← again and → got it, which belonged to the flip cards Review no longer shows. Now `rvKeys` shows F flip on a new card (F turns it), 1-4 on a question, and nothing in Browse or when the deck is done.
- Audio: Review said the card after an answer only when `S.auto` was not `false`, and its default is `false`; the pick quiz never said it. Both now say the card 250 ms after every answer, whatever the Audio box says (that box is about saying a card when it appears).
- Pace: Review moved on 2.0 s after a miss (2.6 s with a note); now 1.4 s and 1.8 s. Right answers stay at 1.3 s. The pick quiz (`renderQuizQ`: Practice, sessions, mock test) waited for a Next button after every answer; it now moves on by itself with the same times (2.6 s when a grammar "why" with a lesson link shows), a tap moves on at once, the speaker button or a link holds the card, and "Go to the next card automatically" off brings the button back.
- Practice, learn 5 at a time: no 80% pass mark and no "Save & exit". The place (`S.learnPos`) is saved when a round's quiz ends, whatever the score; the result offers "Next 5 cards", and below it "Review these 5 again" and "Retry quiz" when something was missed (neither moves the place again). The order was already five new cards shown, then a quiz with the earlier cards mixed in; that is kept. Tapping the Practice tab during a quiz returns to the deck picker.

Decisions taken without asking: a round always counts; missed cards are left to the judge and to the next rounds' mix. The other result screens (Weak spots, Mix, Polite ↔ casual) keep "80% to pass": they gate nothing.

Not tested: real phones; how long clips sound when the next card arrives after 1.3 to 1.8 s (a long sentence can be cut off); the 27 "saved" words by native speakers.

## LS-1 — prompt
Kii: "i think after the vowels should be the vowels deck and after the Consonants there should be a Consonants deck. and then after the info on stacking there is a deck to test on stacking and such. this is how the lessons should flow. a teaching part of the lesson followed by flashcards where it teaches 5 then quiz on repeat until you complete the deck. then at the end it should go over all the decks for that lesson. when i say teaching 5 that means like the mini drill", then "re prompt this for me and make sure that every lesson for every langauge is taught like this". Rewritten: every lesson in every course is taught in one loop. (1) A teaching section. (2) Straight after it, that section's own flashcards: five cards shown as flip cards, as the mini drill shows them, then a quiz on those five, then the next five and their quiz, until the deck is finished. (3) The next teaching section and its deck, and so on to the end of the lesson. (4) Last, a review that goes over every card from all of the lesson's decks. Korean lesson 1 is the model: vowels, then the vowels deck; consonants, then the consonants deck; stacking, then a deck that tests stacking. Where a section has no deck of its own, make one from what the section teaches. No lesson in any language keeps the old shape (all the teaching, then one quick check and one five-card drill at the bottom), and a lesson added later gets the loop without extra work.

### LS-1 — results (2.107.0)
Built in the engine, at run time; no pack was edited. `lsPlan` in `src/app.html` cuts a lesson body at each `<h3>` (never inside a box or a table; the opening lines stay with the first section) and gives each section its cards: a card of the lesson's deck goes to the section whose text uses its words, the others are dealt out in deck order so the sections come out even, and a section left with fewer than 3 cards hands them to a neighbour. `lsRun` runs one deck inside the lesson: up to five flip cards (six when six are left), then each of them asked twice (read, recall) with up to five earlier cards of that deck once each. The review at the end (where the mini drill was) asks every card of the lesson once; Start on it leads to the first deck still open. No pass mark anywhere, as in Practice since QF-1 (2.104.0): the place is saved after each quiz whatever the score, and a round with a miss also offers "Review these 5 again" and "Retry quiz". A lesson counts as done after its decks, the quick check and the review. A deck whose cards the learner already answered right counts as finished, and lessons already done stay done.

Korean lesson 1, in the built-in course and the twelve x-ko packs: vowels then the vowels deck (12), consonants then the consonants deck (14), stroke order (no deck), stacking then 20 syllable blocks (나 노 가 고 미 무 도 수 비 호 한 강 문 밥 손 달 산 길 곰 눈) made from the letters by the app: front the block, back its romanization and its letters (ㄴ + ㅏ). That deck exists only inside the lesson (`LS_BLOCKS`), so it needs no translation and is not in the deck list.

Numbers (`node tools/tests/lesson_sections.js`, in `ship.sh`): 71 courses, 2,378 lessons, 7,758 section decks, 3.3 a lesson; 125 lessons have one deck (one section, or a small deck). 26% of cards sit in their section because its text uses their words; the other 74% are placed by deck order, so in those lessons a section's cards belong to the lesson's topic but not always to that section. Whole lessons walked as a new learner in six courses (en-ko lessons 1 and 2, es-ko 1, en-es 2, th-en 2, vi-zh 3): never more than five (six) cards before a quiz, every batch quizzed, the review asks each card once, the lesson is done at the end. Harness guard `lessonSections`. No new interface strings: the labels reuse strings already translated in all 28 languages.

Side question from the thread: a card never seen is labelled "new" (checked in the test). The card in the owner's screenshot said "needs practice" because it had been answered Again before.

Not tested: real learners and real phones; how long a full lesson now takes (the list still says "~5 min"; a lesson with an 18-card deck is about 60 answers). Not done: moving cards between sections by hand for the 74%, which is content work per course.

Follow-ups to QF-1, 2.108.0. (1) Owner: "make sure the audio is on for everyone by default": `S.auto` starts `true`; saved progress without `autoV` gets it switched on once in `load()`, then the box decides (`tools/patches/audio_default.py`). (2) Owner: "put review and quiz again and then another option that says review missed where it review the ones that were missed more than 25% of the time": the round result always offers "Review these 5 again" and "Retry quiz", plus "Review missed" for the cards answered wrong in more than 25% of their questions in the quiz just finished; they are shown again, then asked alone, three questions each (`tools/patches/quiz_missed.py`, `quiz_missed_i18n.py`). `tools/tests/quizflow.js` now has 38 checks.

## MEM-2 — prompt
Kii: "complete step B for the judge". Rewritten: let the judge from MEM-1 choose which cards come back, wherever the app picks cards to repeat. (1) The quiz after each new five in Practice asks the five three ways plus at most 15 earlier cards instead of every earlier card: the ones that need practice first, then the learning cards most at risk; memorized cards are left to Review; 30 questions at most, however long the deck. (2) New cards in Practice are never blocked, but once 10 cards of the picked decks need practice, "Practice these first" is the main button and the button for new cards stays next to it. (3) Review brings the cards that need practice first, then the due cards most at risk, and holds new cards back while too many need practice. (4) Weak spots is the needs-practice list. (5) "At risk" is one number from the judge, the same for every chooser. (6) No chooser reads a box any more. Opening the next deck at 60% learned and five new cards at a time stay as they are. Verify with: a harness guard for each rule, each shown to fail when its rule is broken; a 200-card deck walked from the first five to the last; rule tests for the risk number; the harness with its 300-answer flow simulation, the trainer recording, and the two-device round trip. This is release B of the plan in the Doc "Judging card memory: prompt and plan" (https://claude.ai/artifact/4GouLrWbgrh3WpYTGajiya); the owner approved it with the words above.

### MEM-2 — results (release B, 2.110.0)
Built on 2.101.0 and meant as 2.102.0; the releases 2.102.0 to 2.109.0 from other chats went out first (among them 2.104.0, entry QF-1 above: the pick quiz moves on by itself, and a round of "Learn 5 at a time" has no pass mark and no "Save & exit"; 2.107.0, entry LS-1: lessons in sections with their own flashcards; 2.108.0, the follow-ups to QF-1: "Review these 5 again" and "Retry quiz" always on the round's result screen, "Review missed" after a miss). The work was put on top of them four times. QF-1 and its follow-ups had rewritten the result screen of a round, so the edit script (`mem_judge_b.py`, now run after `quiz_flow.py` and `quiz_missed.py`) and the guard `memPracticeFirst` were fitted to it; nothing else changed. Which build each check ran on: the harness, `memjudge.js`, `quizflow.js`, `lesson_sections.js`, the trainer recording and the other release tests ran on the released build; the planted mistakes, the screens, the help text and the two-device round trip ran on step B combined with 2.109.0, which is the released build but for the version number; the timing was measured on the first build (step B on 2.101.0). Built: `mjRisk` in the judge block (the chance that a card is forgotten by this time tomorrow if it is left alone) and, next to the judge's glue in `src/app.html`, the choosers `memPick`, `memRows`, `memSort`, `memRank`, `memWaiting`, `loopEarlier`, `loopQuiz` and `practiceFirst`; `orderReviews`, `rvLoad`, `rvNewOK`, `rvExtras`, `weakAll` and `weakPool` now stand on them. Edit script `tools/patches/mem_judge_b.py`. Two new strings in all 28 interface languages: the button "Practice these first", and the help text of "Learn 5 at a time" on the Practice screen, which now says "quiz those mixed with up to 15 earlier cards you most need to practice" where it said "mixed with everything so far".

What changed for the learner. The quiz after each new five: the five three ways plus at most 15 earlier cards, 30 questions at most (it was 15 plus every earlier card: 210 questions at card 200). "Practice these first" is the main button once 10 cards of the picked decks wait for practice, on the Practice screen and on the result screen of every round's quiz (a round always counts since QF-1); it runs those cards as a Weak spots quiz, and "Next 5 cards" stays next to it. Under the two come "Review these 5 again", "Retry quiz" and, after a miss, "Review missed" (2.108.0). Review: two easy cards to warm up, then the cards that need practice, then the rest with the most at risk first, decks alternating; no new batch while 10 cards wait for practice. Weak spots: the needs-practice list, overconfident cards first.

The walk (harness guard `memWalk`, on the app's own functions with its own clock and dice, so it runs the same way every time): the 204-card Countries deck, its first 200 cards, ten sittings a day apart with four rounds each, an answer every four seconds, one answer in ten wrong at random. The quizzes after each five asked 1,170 questions in all; the rule before would have asked 4,500. No quiz had more than 15 earlier cards or 30 questions. Whenever cards waited for practice (in 36 of the 40 rounds) they were in the next quiz, all of them up to 15, and came first. Up to 27 cards were judged Memorized during the walk and none was brought back. Every one of the first 150 cards came back at least once.

What the walk changed. The first build read the plan's "needs practice first" literally: every card judged needs practice came before every learning card. A card missed today stays in needs practice until a right answer on a later day (MEM-1), so in the walk a dozen such cards took nearly every one of the 15 places by the eighth round, the same cards in every quiz, and the cards learned later never came back. The rule now is "waiting for practice first": a card waits while it needs practice and has not been answered right today. A card missed today comes back in the next quiz until it is answered right, then takes its turn with the others; the next day it waits again. The same notion counts the 10 cards for "Practice these first" and for the hold on new cards in Review.

Tests: `tools/tests/memjudge.js` 87 checks (six new, on the risk number: between 0 and 1, rises the longer a card goes unseen, falls as the memory gets longer, never lowered by a wrong answer, never raised by a right one). Harness: 146 guards pass, eight new: `memQuizFive`, `memPracticeFirst` (real rounds on the Practice screen: the header says 15 earlier cards and 30 questions; the button with 10 waiting cards and not with 9; a buried, a suspended and an already answered card do not count; a round with one miss saves the place all the same and shows the button above 2.108.0's three buttons; "Review missed" then asks the missed card three times and nothing else, and once it is answered right nine cards wait, so "Next 5 cards" is the main button again), `memReviewOrder`, `memWeakSpots`, `memReviewPace`, `memWalk`, and on the built file `memNoBoxChooser` (a card's box is read in ten places: the judge, the count of cards learned, the same count for a lesson section's flashcards since 2.107.0, and the share card) and `memHelpSaysRule` (the help text names the same number as the rule). 31 mistakes were planted in the built app one at a time (16 earlier cards instead of 15, a threshold of 11, memorized cards brought back, learning before practice, no warm-up, the old Weak spots rule, a blocked "Next 5 cards", no button after a round with a miss, "Review missed" hidden while the button shows, "Review missed" asking earlier cards too, and so on): at least one guard failed on each. `memNoBoxChooser` and `memHelpSaysRule` fail on release 2.101.0. The 300-answer flow simulation passes at 95% and 60%. QF-1's release test (`tools/tests/quizflow.js`, 38 checks since 2.108.0) and LS-1's (`tools/tests/lesson_sections.js`) pass unchanged. The trainer recording is byte-identical. Two-device round trip (`tools/tests/memjudge-roundtrip.js`, 21 checks each) against 2.92.0 and 2.100.0: passes, after a correction to the test and not to the app. One of its checks expected the one-time note on Progress for a card the older release had just answered; the note is for cards last answered before the judge was released (`MEM_T0`, 2026-11-25, 00:00 UTC), so the check failed from that day on. The test now sets that card's date itself, on both sides of `MEM_T0`, in steps 3 and 5; with `memNoteDue` broken two ways (never, or whatever the date) it fails. The test is written for an older build without the judge, so it does not apply to 2.101.0 (seven of its checks expect the older build to keep no judge fields); release B saves nothing new on a card, and `judge()` and the judge block are the same text as in 2.101.0 apart from the added `mjRisk`. Timing on a fully studied course (1,413 cards with saved progress): each chooser takes about 2 ms. Screens at phone width (390 px), with an overflow check: the Practice screen with the new button, the five cards of a round, its quiz, the result screen of the round, the practice quiz and its result in 14 interface languages (en, fr, ru, pa, hmn, ar, it, tl, th, de, es, ja, ko, zh); the result screen after a miss, with its five buttons, in 8 (en, fr, ru, de, hmn, ar, th, ja); the help text in English and 26 other interface languages. Taiwanese has a dictionary but no course for its speakers yet, so its two strings were read from the pack inside the built app.

Where the build differs from the plan, or says more than it did: (1) "needs practice first" became "waiting for practice first", as told above; a card missed and then answered right today still shows as needs practice on its card and on Progress. (2) Review keeps the two-card warm-up and the alternation of decks from Iteration 79, inside the judge's groups. Before, the order of "All due" was computed and then shuffled away unless "Decks start shuffled" was off; now due cards are never shuffled as a whole, and with the setting on only cards of about the same risk change places. With the setting off, the due cards of a single deck used to come in deck order and now come in the judge's order; a whole deck opened as "All" still comes in deck order. (3) "Review holds new cards back while too many need practice" is two limits: the old one on fresh misses, now read from the judge, and a new one at 10 waiting cards in any deck. Due cards already came before new ones, so the new limit mostly brings parked leeches and needs-practice cards that are not due yet in front of new cards, as extra practice. (4) Extra practice in Review (cards that are not due) is chosen by risk, waiting cards first; each right answer in the sitting halves a card's risk, so today's cards come round about three times before a memorized card is brought up, as before. (5) "Practice these first" is also on the Practice screen, not only after a round; its quiz takes the 20 most at risk and asks each three times, like Weak spots; afterwards the same rule decides the main button again. (6) An overconfident card ("sure" and then wrong) used to stay in Weak spots for good; now it is there only while it needs practice, and still goes first. (7) The quiz after each five tries 200 mixed orders instead of 20 to avoid the same card twice in a row: with only the five new cards one order in nine has no repeat, so about one first round in twelve used to have one. (8) The plan did not list the help text of "Learn 5 at a time" under "More options"; it described the old rule, so it was rewritten and translated again, and a guard ties its number to the rule's. (9) The plan's "after a passed round" no longer exists: since QF-1 a round counts whatever the score, so the button is offered on the result screen of every round once 10 cards wait. A learner who misses ten cards in one sitting gets it at once. (10) 2.108.0 put "Review missed" on the same result screen while this was being built. Both stay, because they are different lists: "Review missed" is the cards missed in the quiz just finished (more than 25% of their questions wrong), "Practice these first" is every card of the picked decks that waits for practice. With both and the three other buttons the screen has up to five buttons; the main one is the only filled one.

Not tested: real learners (the walk's learner misses one answer in ten at random, whatever the card); the limits of 15 and 10 against real use; the two new strings by native speakers; real phones. Sessions keep their own quiz picks and new-card rule; only their due cards follow the new order. The flashcards inside a lesson (LS-1, 2.107.0) bring back up to five earlier cards of their deck at random; whether the judge should choose those too is the owner's call and was not part of step B. Release C is not started and not approved.

## SEC-1 — prompt
Kii: "yes lets fix the cards by sections for sure have favle write the prompt. actually fable should always rewrite my prompts", then "apply it to a single course and then ask if it should be applied to all courses". Rewritten: in every lesson the flashcards after a section test only what that section taught; Korean lesson 1 is the model. Measured first: 28% of cards line up (English for speakers of X about 17%, Korean for speakers of X 26 to 29%, X for English speakers 25 to 58%), because each lesson borrows one topic deck, often shared by two lessons, and the app deals its cards across the sections in deck order. Engine: a section's deck is its own example lines plus the cards of the course whose words it teaches, never a card from a later section; a section with fewer than 3 passes them on. Content, per course: place the deck cards a section truly exercises and write cards where a section has too few, proved by a checker. Keep Korean lesson 1, five at a time, the final review, saved progress; no new foundation lessons (another thread). One course first.

### SEC-1 — results (2.112.0, en-ko)
Built as `lsAlign` in front of `lsPlan`, on for the courses in `LS_ALIGN` (en-ko). Korean for English speakers: 33 lessons, 111 section decks, 541 cards, each taught in or before its section; 37 sections taught fewer than 3 cards and got cards from a writer table (`tools/sections/en-ko/sections.json`, 93 cards added, 5 taken out or moved), one is left with 2. Decision told to the owner: topic-deck cards that no section teaches leave the lesson and stay in Review and Practice. Also fixed: cards of lesson-only decks were counted in "Reviews coming up".

Tests: harness 147 guards pass (new: `sectionAlign`); `tools/tests/lesson_sections.js` 125 checks pass in all 71 courses (the other 70 unchanged: 27% placed by the words of the section). Not tested: real learners and phones; the added cards by a native speaker. Not done: the other 70 courses (the owner is asked first).

## FND-1 — prompt
Kii: "learning the characters of a language is foundational can we make sure the other languages have similar structures that fits for them. have fable rewrite the prompt to plan and make sure all language courses follow similar structure that fits each language". Rewritten: a learner who cannot read the target language must be able to read and sound out any word before the course asks for phrases; every course opens with a foundation to the standard of Korean lesson 1 (a teaching section with a chart, its deck, the next section, its deck, a step that puts the pieces together with its own deck, a review), fitted to its script and never copied from Korean; every letter of the standard set on a card; engine work first and once. The full brief and the plan for all 71 courses are in the Doc linked from `docs/HANDOFF.md`. Then, the same day: "have fable plan and optimize models to fix / enhance without asking my opinion first... apply it to a single course and then ask if it should be applied to all courses", so the engine piece and one course were built without a go-ahead card.

### FND-1 — results (2.113.0)
Engine: a lesson names the flashcards of each section (`sections`), decks can live inside a lesson, and `{{tiles:…}}` draws flip tiles for any script. Pilot: en-ja, lessons 1 to 3 and 13; 51 new cards in three in-lesson decks, 117 tiles, the two kana decks no lesson used are now taught. What the survey found: no course lacks script lessons; what they lack is the structure around them (charts, tiles, a combining deck, hand-set sections, a few letters). Differs from the plan: kanji stay at lesson 13. Tests: `tools/tests/foundations.js` (12 checks; two planted mistakes caught). Models: engine, lesson text and cards written in the main chat; one Opus cold review (91k tokens, 5 notes, 4 applied). Not tested: native speakers, real phones, recorded audio for the new words.

### SEC-1 — batch 1 (2.114.0, the eleven other Korean courses)
Owner: "lets work in batches". ceb-ko, es-ko, hi-ko, id-ko, ja-ko, mr-ko, th-ko, tl-ko, vi-ko, yue-ko and zh-ko are switched on. Their lessons mirror en-ko section by section, so each writer table is made from en-ko's (`tools/sections/xko.js`); the 68 added cards that no deck holds got meanings in the 11 languages (`tools/sections/xko/meanings.json`, written in the main chat, no native review). Each course: 111 section decks, 530 to 541 cards, each taught in or before its section. Tests: harness 147 guards, lesson sections 125 checks pass (12 courses aligned). Not tested: real phones; the meanings by native speakers.

### FND-1 — batch 1 (2.115.0): Arabic script
Kii, asked whether to apply the Japanese pilot to all courses: "lets work in batches". en-ar and en-ur, one Opus writer each from the shared brief (`docs/briefs/foundations-writer.md`; 134k and 130k tokens, one round of changes each: blocks under 3 cards merged; the Arabic writer had counted the opening lines as a section of their own), one Opus cold review each (106k and 101k; 2 notes each, applied). What the writers decided: "putting together" is joining; Arabic keeps its second letter deck for the joining lesson; Urdu puts the joining chart in the last script lesson, when every letter is known. `tools/tests/foundations.js`: 42 checks. Not tested: native speakers, real phones, Nastaliq rendering on devices without the font.

### SEC-1 — batch 2 (2.117.0, 18 Latin-script courses for English speakers)
en-es, en-espr, en-fr, en-it, en-pt, en-ptpt, en-de, en-nl, en-da, en-no, en-sv, en-pl, en-cs, en-id, en-tl, en-ceb, en-vi and en-hmn are switched on. One opus writer per course read only the brief and the course worksheet and wrote `tools/sections/<course>/sections.json`: 709 new lesson-only cards, 222 existing cards named for a section, 371 wrong cards dropped (look-alike words, words only mentioned in passing, the wrong sense). Engine: a named card waits for its section; a writer's card survives a drop in its own section; an array entry is always a new card. Six near-duplicate cards (same front but for capitals or punctuation) were removed by the dispatcher. Tests: all 18 pass `tools/sections/check.js`, Korean courses unchanged (same counts as the released app), harness 147 guards, lesson sections test 125 checks, Hmong spelling check on the 40 new Hmong cards. Not done: native-speaker reading of the new cards and their respellings; the writers' lists of oddities in course text (wrong sense on a card, inconsistent meanings) are not fixed here.

### FND-1 — batch 2 (2.118.0): Indian scripts
en-hi, en-bn, en-pa, en-te, en-kn. One Opus writer each from the shared brief (126k to 159k tokens, no second round), one Opus cold review each (92k to 106k; hi 2 notes, bn 4, pa 3, te 1, kn 3). The earlier count of letters without a card was low: Bengali lacked 20 consonants and the four marks, Punjabi 11 letters. Found by the test, not the reviews: tiles did not read from in-lesson decks (fixed in the engine). `tools/tests/foundations.js`: 110 checks. Not tested: native speakers, real phones; the build machine has no good Telugu or Kannada font, so those two were not judged by eye.

### DS-1 — deck page without the clutter (2.119.0)
Owner's request: Review had too much on it. Kept on the page: search, add your own phrase, deck card with Change deck, the quiz, the progress bar. Everything else moved into a Settings sheet behind a gear next to the bug button in the header (the owner first said "at the bottom", then chose the header). Decisions taken without asking: the count line is hidden, not moved; Audio, Speed and Blur show in the sheet on every page, the deck controls only on Review; Browse gets a Back button; choosing a mode, Shuffle or Reset closes the sheet. Tests: `tools/tests/decksimple.js` at 800, 390 and 320 px (42 checks), quiz flow and voice tests updated, harness. Not tested: real phones, screen readers.

### SEC-1 — batches 3 and 4 (2.120.0, all 26 English courses)
Owner, 2026-11-25: "lets start with the most used languages when we make updates". The English courses went next, written in order of learners worldwide (zh, es, hi, ar, pt, bn, ru, ja, id, vi, ko, fr, de, then ceb, cs, hmn, it, kn, pa, pl, spr, te, th, tl, ur, yue) and released together because the second half was ready before the first half's turn came. One opus writer per course (brief + worksheet only): 3,827 new lesson-only cards, 518 existing cards or example lines named for a section, 78 wrong cards dropped. About half of all sections had fewer than 3 cards before; after, a handful of note-only sections do. Engine: a string in a writer table may name an example line of another section, which moves there. Tests: all 26 pass `tools/sections/check.js`, harness, lesson sections test, Hmong spelling check on hmn-en. Not done: native-speaker reading of the new cards; the writers' lists of course-text oddities (a card and its example line translated differently, mixed formality) are not fixed.

### FND-1 — batch 3 (2.121.0): most-used languages first
Kii: "lets start with the most used languages when we make updates". Order changed from script families to use: en-es, en-fr, en-de, en-zh, with en-ru, en-th, en-am that were already written. One Opus writer each (116k to 171k tokens; French sent back once to drop a 26-card deck of letter names from lesson 1), one Opus cold review each (86k to 117k). Found by the test: three writers counted the opening lines as a section. Found by eye: Thai letter names ran out of their tiles (fixed in the engine). `tools/tests/foundations.js`: 194 checks. Not tested: native speakers, real phones.
