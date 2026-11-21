PROGRESS (updated 2026-11-21 13:15 CST)
Course: en-sv   Branch: cursor/en-sv   PR: https://github.com/KyronEpperson/Lang-App/pull/6
Done: research brief, research, pron tool, lead note, decisions
Next: briefs
Checks: respell.js printed the 20 worked examples; all match pronPattern. Standing-rule keyword table: OK. Full course not run.
Models used: research brief = no model (copied from the template); research and pron tool = grok-4.7-xhigh; decisions = grok-4.7
State: WORKING

# Lead note: en-sv stage 1

## Where the work is

Branch `cursor/en-sv`. PR https://github.com/KyronEpperson/Lang-App/pull/6. Files: `docs/profiles/en-sv.md`, `tools/target/sv/profile.json`, `tools/target/sv/respell.js`, and this note. Not done: no decision record, no lessons, no decks, no pack, no edit to the app or to any other course.

## What to do

Read the profile §1, §2, §6, §7, §8 and §10, and the gaps in §11. The lesson list is §8 and the decks are §9. Done when the decision record answers each item below with YES or CHANGE.

## Decisions to record

1. **`en-ett` moves up**, to stage 1, after `intro` and before `numbers`. King's College part 1 teaches articles with the first nouns, and an English speaker otherwise meets only `en`. No means gender stays in the middle of stage 2, where the roadmap had it, and the early decks still print `en` or `ett` on every noun.
2. **Two lessons added:** `compliments` and `traps`. All 24 roadmap ids stay. The third add slot is unused. Supine, perfect and comparison stay out. No means those two decks have no lesson pointing at them.
3. **`du` first, not `ni`.** `du` to one person, including staff. `ni` for several people or a company. No capital *Du*. No means the course teaches `ni` as a formal singular, which the Language Council's page does not support.
4. **Spelling:** `de`/`dem`, `mig`/`dig`/`sig`, one-word `idag`/`igår`/`imorgon`, `kafé`, `ska`, no apostrophe on the genitive. SAOL was not opened. No means writers pick per card, and the answers will not match.
5. **Standing rule:** `en`/`ett` plus the definite suffix and the adjective `-t`, and verb second plus where `inte` goes. Not verb endings. Keywords are tested in §7. No means every set re-tests something else, and the validator regex has to be rewritten.
6. **Pron required**, generated, pitch accent omitted, `sj` kept different from `tj`. No means cards have no aid, or writers type IPA by hand.
7. **`accents: true`**, keys `å ä ö`, and the å/ä fold is an app change rather than a silent workaround. No means either `accents: false` (a missing ring is simply wrong) or the course pretends `här` and `hår` already score differently.

## Register, already applied

`du` to one person, lowercase, including a waiter or a doctor. `ni` only for more than one person or for a company, and the prompt says so. `hen` is recognition once, not a drill. Typed answers use `de`/`dem` and `mig`/`dig`/`sig`. The aid may show the spoken form (`dawm`, `mey`). `idag`, `igår` and `imorgon` are one word. Days, months and language names are lowercase.

## App changes needed

1. **A Swedish letter slip.** `foldAcc` strips the ring and the umlaut, so `å` and `ä` both become `a`, and `ö` becomes `o`. `här`, `hår` and `har` then match as "almost". A missing mark should be almost. The wrong mark (`å` for `ä`) should be wrong. Without it: `accents` stays true, and writers mark `strict` wherever those letters make a different word. The course does not pretend the engine can tell `å` from `ä`.
2. **An `sv` entry in `FLOURISH`.** There is none, so level-up praise and the glyph rain fall back to Korean. Swedish lines (`Bra!`, `Bra jobbat!`, `Hej då!`) and glyphs that include `å ä ö`. Without it, celebrations stay Korean. No new font and no new script.

## Pron tool: enforce these

From `source/`: `node tools/target/sv/respell.js "Jag heter Anna."`  
The stdout is the only legal `pron`. Add a bad word to `LEX` in `tools/target/sv/respell.js`. Do not edit a deck string. `node tools/target/sv/respell.js --pattern` prints `pronPattern`. A warning on stderr means "check this stress", not "the stress is wrong".

| Word | Output | What a writer does |
|---|---|---|
| bok | `boohk` | Teach `ooh` as "food", not English "book". |
| sju / tjugo | `sjueh` / `TJUEH-gaw` | Keep `sj` and `tj` different. |
| här / hår / har | `haer` / `hohr` / `hahr` | Three words. Strict in the app until the letter slip exists. |
| förstå | `fur-STOH` | The aid does not join `r` and `s` across `för-`. Do not "fix" it in the card. |
| station | `stah-SJOOHN` | Stress and `sj` are the point. The `a` looks long. Leave it. |
| en | `ayn` | The number is long. The unstressed article is shorter. One aid. |

Pitch accent is omitted on purpose. §6.5 lists the other misses (`biljett`, `kanel`, `Minneapolis`, quiet `-t` and `-g`).

## Evidence, keep at this strength

- Elon.io is a teacher's list, not a count of English speakers' errors.
- Håkansson's verb-third result is preschool children, not English-speaking adults.
- Thorén supports skipping pitch accent and keeping stress, quantity, and `sj` versus `tj`. It is not a grammar-error study.
- MLA 487 is enrollments in fall 2021, not people, and not a reason-for-study survey.
- `biljett` and `kanel` stress were not read off a Swedish IPA line. `Minneapolis` was not checked in a dictionary.
- Compliment sentences are ordinary wording, unchecked by a native speaker.
- SAOL was not opened. `idag` versus `i dag` follows Wiktionary's usage note and the roadmap's own example.

## Placeholders

- Level titles are proposals: Beginner, Traveler, Speaker, Conversationalist, Local, Storyteller, Master. "Local" is not copied from German. Change them freely.
- Brand word `Svenska` is the language's own name, the same kind of choice as German `Deutsch`. Not a trademark check.
- The app's afternoon greeting is `Hej`, because `Hej` is the real all-day hello. `God dag` is the more formal daytime line and is not the popup.
- `Minneapolis` pronunciation and the five compliment lines are flagged in §11 for a native look.
