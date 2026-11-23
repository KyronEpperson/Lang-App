# hmn-en review (HMN-REVIEWER, 2026-11-23)

Brief: `docs/briefs/hmn-R.md` plus the lead's additions. The reviewer does not speak Hmong. Every Hmong change below rests on GLOSSARY.tsv, a sourced NEW-WORDS row, a source opened in this session, or the blind back-translation (`hmn-bt2`).

## Final checks (all pass)

- `node tools/content/gen.js hmn` (packs/course-hmn-en.js; HELD.txt untouched)
- `validate.js hmn`: PASS: all checks OK
- `parity.js hmn` (after `merge_deviations.py hmn`, which now includes `deviations.review.json`): PASS: shared English side matches ko-en
- `alphabet_check.js hmn`: PASS
- `lint.js hmn`: 0 blocking (26 meaning variants, info)
- `hmn/check.js`: 0 errors, 0 warnings
- `hmn/pron_check.js summary`: 0 phrase conflicts, 0 word conflicts (19 rule hits are the alignment notes on numbers and acronyms; unchanged from before)
- `rpa_check.js` on tools/content/hmn, tools/i18n/hmn/ui.json and tools/target/hmn: RPA OK, both bare (as the lead ran it) and with `--allow` merged (as the brief runs it)
- `coverage.js` with the merged glossary: content 0 missing, 0 illegal; ui.json 0 / 0; target/hmn 0 / 0
- `rpa_check.js --selftest` (245 checks) and `coverage.js --selftest`: OK
- `python3 tools/i18n/gen.py hmn && node tools/i18n/validate.js hmn`: PASS
- `link_roadmap.py --check hmn`: no missing links

## 1. The 462 rpa_check errors

**Cause.** The lead ran `rpa_check.js tools/content/hmn` without `--allow`. Bare, the tool read only `tools/hmong/ALLOW.txt`, so it flagged every grammar term and app word that `tools/content/hmn/ALLOW.txt` allows (plural ×148, vowel, subject, consonant …). With the merged ALLOW file there were 81 errors, all in lessons.js and practice.js:
- IPA between slashes (/θ/, /ˈdʌbəljuː/ …)
- English words in table cells and prose (postpone, measure, dot, mail …)
- syllable fragments (thir-TEEN, mc-DON-ald's, tel)

None of the 462 was a real Hmong misspelling.

I also read every token that the course ALLOW hides (the bare-only 381) and every ALLOW line. All of them are English grammar terms, app words, letter strings or names. No misspelled Hmong word hides there.
- Five ALLOW entries are legal RPA syllables, so they also skip coverage wherever they occur: Mai, Pa, Kia (names the brief prescribes), es, and A (added for the interface). None of them is a Hmong word in this course.

**Tool fixes** (tools/hmong/rpa_check.js; coverage.js gets them through `hmongTokens`). The lead authorised these.
1. U+FE0F, U+FE0E and U+200D are ignored: they belong to the emoji before them.
2. An IPA transcription between slashes is blanked as pron (same length, so offsets hold). It needs a non-letter on the left and no inner space. So `kuv/koj/nws` and `tus / tug` are still read.
3. IPA stress, length and linking marks (ˈ ˌ ː ‿) quoted on their own are not letters.
4. With no `--allow`, the course's own `tools/content/<x>/ALLOW.txt` is added to tools/hmong/ALLOW.txt for:
   - tools/content/<x>/
   - tools/i18n/<x>/ (the folder or ui.json)
   - packs/course-<x>-en.js and packs/i18n-<x>.js

   `--allow FILE` still replaces both. The fixture packs stay on the base list. The report header now names the ALLOW files used.

Three selftest cases were added: emoji + selector, IPA spans, and slashes between Hmong words, which must still be read. Both selftests pass. target/hmn and ui.json were re-run bare and merged, with no regression.

**Content fixes:**
- English and IPA cells marked `<td class="k">`: 7 pron-table example words, 6 stress-table cells, 4 phrasal-table words. validate.js allows the class only on td, so inline prose stays `<b>`.
- (thir-TEEN) → (thirteen: TEEN).
- The email example now uses mai.vang@example.com.
- 12 ALLOW rows, each with a comment: tel, directions, patients, attach, white, dot, double, hill, zee, Thu, A, example dot com.

## 2. Lead's numbered items

1. **U+FE0F** restored in 11 ui.json strings. Every key and its `t` now have the same emoji sequence; only the flag 🇰🇷 → 🇺🇸 differs, on purpose.
2. **NEW-WORDS.** tools/content/hmn: 28 → 25 rows. `nkees` ×3 (writers A, C, D) and `pib` ×2 (A, D) were merged; every source is kept in the note and the first URL is in the source column. tools/i18n/hmn and tools/target/hmn had no duplicates within the file.
   - Added `kom`: it was sourced only in the interface file, and the course uses it 40 times. I opened the UW Extension Zoom sheet, which confirms both `kom` lines.
   - Added `kiv taub hau` (Minneapolis Home Care Guide, opened).
   - The `RPA` row comment in ALLOW.txt is corrected: it is the name of the writing system, not an English noun from more/a1.js.
3. **Cross-writer consistency.** One form now everywhere:

| Concept | Before | Decision (why) |
|---|---|---|
| a little | `me ntsis` ×15 (decks, extra) + 4 in ui; `mentsis` elsewhere | `mentsis`: glossary column 1 and the sister course |
| easy | `yooj yim` everywhere | kept: syllable-spaced form of glossary `yoojyim`, the same in all files |
| work, child | `hauj lwm`, `me nyuam` | already one form |
| dollar | `daus las` | already one form (decisions) |
| sex cues | `nws (txiv neej)` / `(poj niam)` and `(txiv neej hais)` / `(poj niam hais)` | two different cues, each already uniform |
| café | `khw kav fes` | already one form in the Hmong; the English side keeps ko-en's spelling (parity) |
| cook | `ua mov` ×9 (decks, a1) vs `npaj mov` ×6 (a2) | `ua mov` (ua = make + mov = meal, both glossary rows; neither phrase has a source) |
| tonight | `hmo no` | already one form (`tsaus ntuj no` no longer occurs). Matches `hnub no` / `nag hmo` |
| weekend | `hnub so` vs `Hnub Saturday thiab (hnub) Sunday` ×10 | `hnub so`: the glossary's weekend row (PGE). The prep lesson glosses it once: «Hnub so (hnub Saturday thiab hnub Sunday)» |
| seat | `qhov chaw zaum` vs `lub rooj` (a1 "two seats", ex row) | `qhov chaw zaum` (`rooj` = table, chair, door) |
| movie classifier | `zaj movie`, `yam movie` ×5 | `zaj movie` |
| level titles | meta: Neeg kawm ntawv / Neeg hais lus / Xib fwb; ui: Neeg kawm / Neeg txawj tham / Neeg txawj heev | Neeg pib kawm, Neeg kawm ntawv, Neeg txawj tham, Neeg mus ncig, Neeg hauv zos, Neeg txawj, Neeg txawj heev, in both |
| plan names | ui "Trip to Korea" = Mus ncig teb chaws, "Make friends & date" = Nrhiav phooj ywg; meta conv = Hais lus Askiv hauv 90 hnub | Npaj mus ncig · Tham nrog phooj ywg · Tham tau hauv 90 hnub, in both |
| email opener | decks `Kuv xav kom koj nyob zoo.`; lessons `Kuv thov kom koj nyob zoo` (`vam` no longer occurs) | `Kuv thov kom koj nyob zoo` |
| happy for / sorry for | `zoo siab nrog koj`, `tu siab nrog koj` vs `zoo siab rau koj` | `… rau koj` everywhere (the BT read `nrog` as "with you") |
| twice a week | `Ob zaug ib lim tiam` vs `Ib lim tiam ob zaug` | `Ib lim tiam ob zaug` |

   Forms removed by the sister course's review (khi hluas tes, tsaug "tired", Pab os, zaj nkauj, tus xib fwb for "a teacher", main-form npuas, kws txhais lus) do not occur in the pack or in the interface (grep).
4. **Roadmap basis**: «CEFR A1-B1, rau neeg hais lus Hmoob» (all words attested; `kho` was dropped).
5. **Interface unsure strings.** These were already one term per concept, and I kept them. Each is decided by the better source:
   - Save = Kaw cia (CAASPP glossary row; no source for Ceev cia)
   - delete / remove / erase = Tshem tawm (CA DROP; it also appears in the WI DHS EVV slides, opened)
   - copy = Theej (MN DHS)
   - hide / show = Tsis qhia / Qhia (no source for zais)
   - share = Qhia … rau luag (`luag` = others, glossary)

   Recorded in tools/i18n/hmn/NOTES.md.
6. **Typed-answer pass.** All 127 type items in the generated pack were listed with `check.js --list-type` and each was read against its prompt.
   - 22 items widened (in `deviations.review.json`, one line each): film ×7, love ×5, have got ×4, washroom ×2, which ×2, "Let's go eat / have / for lunch", "How many people are there".
   - 3 items lost wrong-person answers (modals#13, first-conditional#13, phrasal#13: the prompt says koj / peb).
   - 5 prompts were cued:
     - countable#12 «(siv any)»
     - third-s#13 «(live)»: nyob = live or be at, and the BT read "He is not here"
     - relative#11 and its order twin: «uas kuv yuav lawm» (yuav = buy or will)
     - one order prompt in conditionals «(use should have)»
   - `nws` is cued in every item (check.js E4). Tense is cued in every non-present item (W1 empty, each read). Full forms are present (validate).

## 3. Back-translation (blind, 877 strings, hmn-bt2)

Script: token overlap of key English vs back-translation by line id. Then I read every line under 0.5 overlap, below high confidence, or flagged: 368 lines.

| Result | Lines |
|---|---|
| Agreed (same meaning; paraphrases such as "Sleep well" / "Good night", "Can I take this home?" / "Can I get this to go?") | 795 |
| Flagged by the back-translator | 82 (FLAG-A 2, FLAG-B 57, FLAG-C 23) |
| Fixed (Hmong changed to a sourced or plainer attested form) | 26 flagged + 3 unflagged mismatches (654 seats, 685 live, 702 any) |
| Resolved by a consistency decision | 3 (49 / 500 `mentsis`, 773 word order) |
| Kept, with reason | 53 |
| Cards replaced | 0 |

Fixes:
- 13, 552 `Ntev lawm tsis pom koj!` → `Kuv zoo siab tau pom koj!`: Omniglot's "long time no see", quoted in the BT summary.
- 16, 553 and the pause phrase `Ib hnub zoo os!` (no verb) → `Thov kom koj muaj ib hnub zoo!`, with the reply `Ua tsaug, koj kuj muaj ib hnub zoo!`.
- 152, 520 `kaum feeb tom ntej` → `tom qab kaum feeb` (in ten minutes).
- 164 `Kuv kuj tsis.` → `Kuv kuj tsis nyiam.`
- 170, 171, 603, 181, 605: `nrog koj` → `rau koj`.
- 198 → `Kuv zoo siab heev tau nrog koj mus ua si.` (the clause had no verb).
- 268 (FLAG-A) `Kuv taub hau tig.` → `Kuv kiv taub hau.` (sourced).
- 350 `zoo tshaj` → `zoo dua` (comparative).
- 354 → `Kuv thov kom koj hmoov zoo.`
- 484 → `Kuv tus ntxhais mus kawm ntawv ntawm no.` (garden path on `ntxhais kawm ntawv`, which the glossary gives as "female student").
- 516 `me tshaj` → `me dua`.
- 607 (FLAG-A) `Koj yuav qhov twg? / Kuv yuav nyob Fresno.` (read as "I will live in Fresno") → `Koj yuav nws tom qhov twg? / Kuv yuav nws tom Fresno.`
- 612 `Kuv muaj ib yam los.` → `Kuv muaj ib yam yuav tsum ua.`
- 746 `Lub tsev station` → `Lub station`.
- 415 `Sawv (hnub, nyiaj)` → `Sawv (sawv ntxov; hnub)`: `nyiaj sawv` for rising prices is doubtful.
- 825, 828: `yuav lawm`. 850: should-have cue.

Kept, with reason:
- **No attested alternative; listed for a native reader:**
  - 80 / 575 `nres` for "get off"
  - 88 / 250 / 620 `teem sij hawm` for a reservation
  - 135 / 276 tax and insurance circumlocutions (`se` is unsourced)
  - 246 / 247 / 619 `ze kev` for aisle
  - 248 baggage claim
  - 253 / 535 `Puas muaj noj tshais lawm?`
  - 526 `nug hauj lwm`
- **Understandable calques kept as plain sentences:** 15, 90 / 580, 167 / 234 / 524 `Lwm yam`, 187 / 606, 190 / 528, 191, 218, 279, 361, 812.
- **Decisions in force:** 147 / 562 / 596 / 775 `daus las`, 150 `ib plhom`, 343 / 875 `yooj yim`.
- **Misread by the back-translator:** 374 `zoo dhau qhov tseeb` is exactly "overrated".
- **Carried by the English cue:** 797 / 800 `tsis tau`, 853.
- **Minor:** 423, 455, 456, 583, 661, 742 / 745, 832, 856, 871.
- **`paj lug` for "idiom"** (872–877): the course uses this term throughout, including the deck name. Native check.

Strings changed after the snapshot (all consistency edits above, the typed-answer prompt cues and the BT fixes themselves) were not back-translated again.

## 4. Edit counts per file (approximate)

| File | wrong / misleading | unnatural wording | pron | formatting / consistency |
|---|---|---|---|---|
| decks.js | 3 (dizzy, me neither, in ten minutes) | 11 | 0 | 8 (mentsis ×7, note) |
| extra.js | 2 (shoes / Fresno, smaller) | 7 | 0 | 8 (mentsis) |
| meta.js | 0 | 0 | 0 | 2 (titles, plan name) |
| lessons.js | 1 (phrasal table "(exercise)" as Hmong → return / come back / rov qab) | 0 | 0 | 20 (td.k cells, thirteen / thirty, email example, weekend ×3) |
| practice.js | 2 (phrasal#13 wrong person, articles#13 widened) | 0 | 0 | 4 (weekend prompts) |
| more/a1.js | 17 (typed answers, seats, live, any) | 1 (ex row seats) | 0 | 12 (weekend ×3, zaj movie ×5, station ×4) |
| more/a2.js | 5 (typed answers) | 1 (yuav lawm ×6) | 0 | 5 (ua mov) |
| more/b1.js | 3 (narrative, reported, should-have cue) | 0 | 0 | 0 |
| ui.json | 0 | 0 | 0 | 18 (FE0F ×11, mentsis ×4, titles / plans ×3) |
| roadmap.json | 1 (basis line) | 0 | 0 | 0 |
| ALLOW.txt / NEW-WORDS.tsv / deviations.review.json | | | | 13 rows / 3 rows merged + 2 added / 25 lines |

## 5. What was read in full and what was only scanned

- **Read in full:**
  - all 127 type items
  - every BT line the script listed (368)
  - deck cards and notes for decks 1–17 (about 300 cards)
  - ALLOW.txt (both), all three NEW-WORDS files, interface NOTES.md, and the ui.json strings for the unsure concepts, level titles and plans
- **Scanned only (grep and script, not read line by line):**
  - decks 18–25 notes
  - extra.js DIALOG / EXAMPLES / PAUSE beyond the BT lines
  - lesson bodies of lessons.js and more/*.js (read where a guard or the BT pointed)
  - mc / fill / order items (BT covered their prompts)
  - the rest of ui.json
- **NEW-WORDS sources opened this session:**
  - UW Extension Zoom sheet (kom, xaiv, nias)
  - Minneapolis Home Care Guide (kiv taub hau)
  - WI DHS EVV slides (tshem tawm)

  Other writers' rows were not all re-opened.

## 6. For a native speaker (the 30 strings most worth a look)

1. `Kuv kiv taub hau.` (I feel dizzy)
2. `Kuv zoo siab tau pom koj!` for "Long time no see!"
3. `Thov kom koj muaj ib hnub zoo!` (Have a good one / Have a nice day)
4. `Kuv yuav tsum nres qhov twg?` (Which stop should I get off at?)
5. `Koj puas tau teem sij hawm?` / `Kuv tau teem sij hawm, lub npe Vang.` (reservation)
6. `Tus nqi no puas suav nrog nyiaj rau tsoom fwv lawm?` (tax)
7. `Thov muab qhov chaw zaum ze kev rau kuv.` (aisle seat)
8. `Puas muaj noj tshais lawm?` (Is breakfast included?)
9. `Kuv ntshai mentsis, vim tag kis kuv mus nug hauj lwm.` (job interview)
10. `Koj xav kom kuv noj dab tsi?` (What do you recommend?)
11. `Lwm yam,` (By the way / BTW)
12. `Kuv zoo siab rau koj heev!` for both "happy for you" and "proud of you"
13. `Kuv tu siab rau koj.` (I'm sorry to hear that)
14. `Tsis yog yam loj.` (No big deal)
15. `Xim ntawd zoo nrog koj.` (looks good on you)
16. `Koj luag zoo nkauj heev.` (great smile)
17. `Lig los zoo dua tsis ua.` (Better late than never)
18. `Kuv thov kom koj hmoov zoo.` (fingers crossed)
19. `Kuv thov kom koj nyob zoo.` (email opener)
20. `hnub so` = weekend (older texts: Sunday)
21. `ua mov` = cook
22. `hmo no` = tonight
23. `qhov chaw zaum` = seat
24. `paj lug` used for English idioms
25. `Kuv muaj ntawv them nqi kho mob thaum mus ncig.` (travel insurance)
26. `Qhov chaw nrhiav hnab` (baggage claim)
27. `Kuv yuav nws tom Fresno.` (I got them in Fresno)
28. `Kuv muaj ib yam yuav tsum ua.` (Something came up)
29. Interface: `Kaw cia` (Save) beside `Kaw` (Close), and `Hais zoo ↔ yooj yim` for polite ↔ casual
30. `Tom qab kaum feeb` (In ten minutes)

## 7. Found but not fixed within scope

- tools/content/hmn/check.js has no no-argument mode: it needs a pack path. The lead's W3 lines did not reproduce, because check.js reports 0 warnings on the current pack.
- `Hais zoo ↔ yooj yim` (polite ↔ casual): `yooj yim` means easy. There is no sourced word for casual.
- Interface goal labels (Travel & getting around = Mus ncig teb chaws) differ from meta.js GOALS labels (Mus ncig thiab txhua hnub). The lead asked only for titles and plans; left as they are.
- `suav nrog` (include) is used by writer A without a source; it is not extended anywhere else.
- `tools/target/hmn/NEW-WORDS.tsv` needed no change (no duplicates).
