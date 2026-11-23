# en-hmn cold review (EN-HMN-REVIEWER, 2026-11-23)

Brief: `docs/briefs/en-hmn-R.md` + `docs/TARGET-REVIEW.md`, with the lead's additions. The reviewer is not a Hmong speaker; every change below rests on GLOSSARY.tsv, NEW-WORDS.tsv, a source opened in this session, or the blind back-translation.

## State

| | Before | After |
|---|---|---|
| Lessons | 26 / 26 | 26 / 26 |
| Decks / cards | 18 / 316 | 18 / 315 (dropped 1) |
| Practice items | 364 | 364 |
| Dialogues / examples / patterns | 77 / 47 / 18 | 77 / 46 (dropped 1) / 18 |
| Feelings and weather deck | 18 | 17 |

Final checks (all pass): `respell.js --selftest` 110 OK · gen + `validate.js hmn` (full) PASS · `check.js` OK · `check.js --selftest` 8 OK · `rpa_check.js tools/target/hmn` RPA OK · coverage with merged glossary: 0 missing, 0 illegal (8 "maybe English" are English mc options, as before) · `repron.js hmn` twice: 541 read, 0 rewritten. HOLD and packs/HELD.txt untouched.

## Lead's first two jobs

1. **check.js and multi-word ALLOW entries.** `covered()` split text into single words, so `St. Paul`, `North Carolina` or `Medical Assistance` failed even though ALLOW.txt lists them. Now ALLOW phrases are masked as whole phrases first (same regex shape as rpa_check.js `tokens()`), then the words are checked. Added `node check.js --selftest` (8 checks: St. Paul / Saint Paul / North Carolina / Medical Assistance pass; a lone `Paul` or `St.` still fails; `daus las` joins; an invented syllable fails).
2. **NEW-WORDS.tsv.** Merged the duplicate `poj` rows (writers 1 and A) into one. Every row has a source URL. Added `mov nplaum` sticky rice (MDH meal plan: "Mov dawb, mov nplaum" = "White rice, sticky rice"; opened through the fetch tool's reading of the PDF, the direct download was blocked). It is recorded, not used. Added `khi tes` (see back-translation).
   - Sources opened to confirm rows (at least one per writer): Wikipedia RPA tone table (poj, writers 1/A); MDH meal plan (nqaij qaib, writer 2); MDH TB sheet (noj tshuaj), Minneapolis snow guide ("Thaum los daus"), Children's Minnesota (Nyob Zoo Xyoo Tshiab), EnglishConnect 2 lesson 14 (Qhov no pes tsawg?) (writer 3). Writer B added no rows. All confirmed.
   - Also opened: Omniglot White Hmong phrases (confirms Kuv tuaj ... tuaj, Tsis / Tsis yog, Kuv zoo siab ntsib koj, Pab, Hmoov zoo, Pestsawg, Noj qab nyob zoo = enjoy your meal, the "not common" good-morning note); FG field guide (clan, hu plig occasions, qeej); UMD page (khi hluas tes as printed); MDH health guide (Khw Muab Tshuaj repeatedly; "Hnoos heev").

## What was read

- Read in full: all seven content files (every card, note, meaning, dialogue, example, pattern, lesson body, check and practice item), check.js, NEW-WORDS.tsv, the profile, decisions, lead note, writer briefs, README.
- Glossary lookups by script for every word in notes, meanings, `why` lines, hints and mc options that looks Hmong (tone letter or RPA-only cluster): the only non-glossary tokens left are labelled Green forms (dlev, moog, nwg, mej, nub) and `hnoos qeev` (quoted from the glossary's own MDH note).
- Every multi-word Hmong run in English fields listed and read (about 290): all are glossary phrases, attested patterns, or deliberate wrong mc options.
- Tone claims in prose checked by script (word vs the tone the text names): 3 wrong, all `mob` (below).
- Tone twins of the key word in every type / fill item checked by script, then by hand.
- Wrong options checked against variant pairs (tus/tug, npua/npuas, nkawd/nkawv, yuav/muas, hmo/hmos, tom/tod …): none is an accepted variant.

## Fixes by category

### Wrong Hmong / wrong teaching
1. lessons-3 health: "mob (creaky tone, sick)" → mob has **-b, the high tone**; same error in two `why` lines (health type item, elders order item). Fixed all three.
2. `khi hluas tes` → `khi tes` (deck card, example, lesson body, ex row, check, mc). See back-translation.
3. `Kuv yog tus xib fwb` ("I'm a teacher") → `Kuv yog ib tug xib fwb`. Back-translation read the bare classifier as "the teacher"; ib tug + person noun is the course's attested counting pattern.
4. `Pab os!` (Wikivoyage only) → `Pab!` (Omniglot) on the Health card, lesson ex row and mc; the note and lesson name the WV form. Decisions §0: no WV-only form where a better-sourced one exists.
5. Lesson 2 classifier table `zaj nkauj` (not a glossary headword) → `zaj hu nkauj` (BSL), as the Things deck card writes it.
6. Pork: one spelling as the main form, `nqaij npua` (WHL, and the deck card), with "also written nqaij npuas" in notes. lessons-2 used `npuas` as the main form in the table, a check, an mc and an ex row (pron regenerated: last syllable mid).
7. lessons-3 health typed answer `Tus kws txhais lus pab kuv` removed from the accepted list: `kws txhais lus` is not in the glossary (only `neeg txhais lus`).
8. Lesson 1 tone table, to match profile §6.2: -v "starts in the middle and rises, like a question" (RPAW mid rising); -d "a low-rising partner of the creaky tone, only at the end of a phrase" (profile: phrase-final low-rising variant of -m). The other six rows already matched.
9. Elder-address norms (profile §11: not verified) hedged to "many families" in negation, requests and elders (four sentences and the elders tip).
10. Deck glosses: `Noj qab nyob zoo os` "Good health to you" → "Eat well and stay well", note: Omniglot lists it for "enjoy your meal". `Nws lub tsev nyob tim tus dej` → "Her house is across the river" (as the lesson glosses it). `taub hau` note "also written taubhau" → "taub-hau" (the glossary's attested form). Interpreter note no longer claims what MDH writes, and glosses `xav tau` through its parts (no headword). extra-b's answer to `No hu li cas?` now uses the same frame as extra-a (`No hu ua qeej.`, was `Nws hu ua qeej.`).

### Culture prose (made cautious and source-matched)
- Clans: "People of the same clan treat each other as relatives" → "Members of the same clan often think of each other as related" (FG: "consider themselves to be related in a way").
- hu plig: "at New Year, and at other important times" → "for example for a new baby, at New Year, or after an illness or a fright" (FG), still under "In many families".
- New Year: "Every fall and winter" → "In the fall and winter".
- Kept as sourced: qeej at New Year and weddings (STO, FG); pov pob description (AAE, Children's MN); "families of different faiths … in their own ways" (decisions §6).

### Practice: tone twins added to wrong options (36 items)
Type / fill items whose key word has a course-word twin now carry it: e.g. Hmoob/hmoov, puas/pua, tsis/tsib, nkaum/nkauj, tug/tub (× 5), txoj/txob, ntawd/ntawv, lub/lus (× 3), phau/phauj (× 4), muaj/muam, nyob/nyom, noj/nov, los/loj, mov/mob, pab/paj, nkawm/nkawd (× 2), kuv/kub. Each `why` names the twin. Not changed, by judgment: items whose point is meaning (question words, kin term choice, tab tom vs lawm), twins that are not free words (taub, tso, kis), `npua`/`npuas` (an accepted variant), `tod`/`tom` (tom would be arguable at a phrase end).

### Pron
No hand prons found; all prons regenerate unchanged. Changed strings regenerated with respell.js.

## Decisions that differ from what was there

- **khi tes over khi hluas tes.** Decisions §6 names `khi hluas tes` (UMD, glossary "native check"). The back-translation read `hluas` as "young, unmarried" (the string is `hlua`, as in the course's own `txoj hlua`). The UMD page does print "Khi hluas tes", and no opened source prints `khi hlua tes`. `khi tes` is in the glossary note ("khi tes also heard") and is the title of a Hmong American essay (NEW-WORDS row). The shorter form avoids the doubtful syllable; the lead may want decisions §6 updated.
- **tsaug "tired" dropped** (Feelings card, its example, one lesson mention). W-KK is its only source; the back-translation and profile §11 point to `nkees` (unattested in the glossary) and `tsaug zog` "sleepy". Dropping is preferred over keeping a doubtful word.

## Back-translation (blind, 572 strings)

Compared `hmn-bt/back.tsv` with `hmn-bt/key.tsv` by script (token overlap) plus reading every line under 0.5 overlap or below high confidence (101 lines).

| Result | Lines |
|---|---|
| Agreed (same meaning; paraphrases such as "I'm fine" / "I am well", "Good night" / "Sleep well") | 540 |
| Flagged or mismatched | 32 (27 medium-confidence + 5 high-confidence lines the summary flagged: 62, 269 `xeem Vang`; 272, 570 `Sawvdaws`; 325 day names) |
| Fixed | 3 Hmong lines (266, 354 khi tes; 70 ib tug xib fwb), plus 1 English gloss on an agreed line (188) |
| Dropped | 2 (169 card `tsaug`, 340 example `Kuv tsaug heev. Kuv xav pw.`) |
| Kept, with reason | 27 |

The replacement strings (`Kuv yog ib tug xib fwb.`, the three `khi tes` sentences, `Pab!`, `No hu ua qeej.`, `Kuv yuav mus yuav nqaij npua.`) were not back-translated.

Kept, with reason:
- 226 `Khw muab tshuaj` (BT expected `muag`): MDH's health guide writes "Khw Muab Tshuaj" throughout. Kept; native check.
- 62, 269 `xeem Vang`: English clan spelling is ALLOW-listed by course rule.
- 108, 214, 416, 493, 548 `daus las`; 107 `ib plhom`; 152, 153, 325 `hnub Monday`; 160 `7 sawv ntxov`: decisions §1–2 (PGE, MNC, W-KK, BSL).
- 205, 559 `zoo tshaj` "the best": BSQ glossary row ("zoo tshaj = best"); BT suggests `tshaj plaws`, unsourced here.
- 202 `Kim ua luab`: WV only, the card note says so.
- 220 `Kuv hnoos`: MDH "Hnoos heev" confirms the verb.
- 283 `No hu li cas?`: BSX attests it.
- 244 `Kuv tsis tshuav txawj ua`: WHL phrase.
- 299 `Pog pov pob`: a deliberate tone drill; grammatical.
- 544 single `yuav` = buy: taught in the shopping lesson.
- 560 order tiles without a comma: tiles carry no punctuation; the typed version has the comma.
- 272, 570 `Sawvdaws`: the glossary's (WHL) joined spelling, used the same way in all files.
- 85, 86, 154: BT glosses match ours ("maternal?" is the BT's guess; we claim no side).

## Cross-file consistency (checked)

One spelling per word across the five writers: `hauj lwm` (targets; "also written haujlwm" only in notes), `me nyuam`, `daus las` (+ `daulas` accepted), `Sawvdaws` / `sawvdaws`, `mentsis`, `li cas`, `tag kis` (+ `taskis` accepted), `nqaij npua` (now), `kav fes`, `taub hau`, `zaj hu nkauj` (now). The same Hmong sentence has the same English everywhere (33 repeated sentences compared by script; differences are only "Build:" or "Type:" wrappers).

## 30 strings most worth a native look

1. `Yawg khi tes rau tus me nyuam.` (khi tes vs khi hluas tes vs khi hlua tes)
2. `Khw muab tshuaj nyob qhov twg?` (muab vs muag)
3. `Kuv yog ib tug xib fwb.`
4. `Lub tsheb no zoo tshaj.` / `Phau ntawv no zoo tshaj.` (or tshaj plaws?)
5. `Kim ua luab.`
6. `Pab!` and `Pab os!`
7. `Noj qab nyob zoo os.` (when it is said)
8. `Kuv hnoos.` / `Kuv hnoos heev.`
9. `Kuv hnub nyoog muaj nees nkaum xyoo.` (vs Kuv muaj nees nkaum xyoo)
10. `No hu li cas?` / `No hu ua dev.` / `Nws hu ua qeej.`
11. `Kuv tuaj Fresno tuaj.`
12. `Kuv tsis tshuav txawj ua.`
13. `Nyob. Wb tham mentsis tso maj.`
14. `Peb tuaj os.` (reply to Koj tuaj los?)
15. `Koj tu siab los?` glossed "You're sad, aren't you?"
16. `Pog pov pob.` (natural, or odd?)
17. `Nkawm khau no pes tsawg?` and `Nkawm khau no kim tshaj nkawm khau ntawd.`
18. `Qhov no puas muaj luv nqi?`
19. `Koj mus ua hauj lwm li cas?` ("How do you get to work?")
20. `Kuv xav tau ib tug neeg txhais lus.`
21. `Peb tsev neeg sib ntsib.` ("Our family is getting together")
22. `Lub tsev ko` (ko = that, near you)
23. `tuaj` vs `los` as taught ("come" vs "come back home")
24. `Kuv mus nram tus dej.` / `Lawv nyob pem toj.`
25. `Nws nyob tod.` and the -d short forms
26. `Kuv mam li mus.` ("I'll go later")
27. `muas` accepted beside `yuav` for "buy" (White or Green?)
28. `7 sawv ntxov` without teev
29. `hnub so` as "day off" (older texts: Sunday)
30. `Tus txiv neeb ua neeb.` and the shaman gloss

## profile.json

Grepped profile.json and the generated pack for the replaced forms (`hluas tes`, standalone `tsaug`, `Pab os`, `zaj nkauj`, `tus xib fwb`, main-form `npuas`): no hits in profile.json. profile §9 of the en-hmn profile doc still lists `khi hluas tes` and `tsaug` as deck themes; that doc is the lead's.

## Not done

- No app, packs/, src/ or protected tools/hmong file touched; HOLD and HELD.txt left for the lead.
- `mov nplaum` is sourced but not added to a deck (Food and drink is at 18).
