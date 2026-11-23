# en-bn cold review (EN-BN-R, 2026-11-22)

Brief: `docs/briefs/en-bn-R.md` + `docs/TARGET-REVIEW.md` (t = bn), plus the lead's five extra items. `tools/target/bn/HOLD` left in place.

Final state: `node tools/target/bn/respell.js --check` OK · `node tools/target/repron.js bn` → 526 prons read, **0 rewritten** · every Bengali card, example row and script answer runs through the CLI with no error · `node --check` OK on all 7 JS files · `gen.js bn` + `validate.js bn` (full, not `--partial`): **PASS: all checks OK**, no WARN. No card in two decks, also after stripping punctuation.

Read in full: the 7 content files, profile.json, `docs/profiles/en-bn.md`, TARGET-BRIEF, PRACTICE-SPEC, PHASE2-BRIEF (last section), lib.js, gen.js, validate.js, repron.js, respell.js, the 4 writer lexicon files. In `lexicon.txt` I checked the ~410 lines that course content uses, starting with the riskiest (inherent vowel, এ, স); the other ~320 lines were only scanned.

## 1. Lexicon (main risk)

**Counts.** Before: 736 lines, 327 sourced (44%), 409 `unverified:model`. Cards and examples used 387 keys, and 234 of them (60%) were unverified. After: 734 lines, **414 sourced (56%), 320 unverified**. Cards and examples use 391 keys, and **158 of them (40%)** are unverified.
Caveat on "sourced": every page came through a web tool that returns a model-written summary, not the raw page. Some lines are sourced from a different printed form of the same word: ঘর from ঘরটা, বছর from বছরের, আরও from MSU's আরো, মনে / শহরে / বোনেরা / সকালে from Wiktionary inflection tables with the vowel taken from the headword's IPA.

**New sources** (`#source` lines added to the header): `wp-phon` (Wikipedia "Bengali phonology"), `wp-gram` (Wikipedia "Bengali grammar"), `msu-amt` (MSU Basic Bangla 9.3, O = ɔ, E = æ). Kaikki/Wiktionary pages are cited by URL.

**Readings corrected** (old → new, source):
| word | old | new | source |
|---|---|---|---|
| কেমন | kemon | kæmon | Wikivoyage "KA-mohn" (a = æ) |
| কেন | keno | kæno | Wiktionary Dhaka /kæno/ (and ক্যান as a pronunciation spelling) |
| সন্ধ্যা | shôndha | shondha | Wikivoyage "shohn-dhah" (oh = o) |
| শিক্ষক | shikkhok | shikkhôk | kaikki Dhaka /ʃikʰːɔk/; Wikipedia grammar shikkhôk |
| সময় | shômoy | shomoy | kaikki Dhaka /ʃom.oe̯/ (also /ʃomɔe̯/); Wikivoyage "shoh-moy" |
| অফিস / অফিসে | ofish / ofishe | ôfish / ôfishe | Wiktionary Dhaka /ɔfiʃ/ (অফিসে derived, unverified) |
| কখন | kôkhon | kôkhôn | Wiktionary Dhaka /kɔkʰɔn/ |
| চমৎকার | chômotkar | chômôtkar | Wiktionary Dhaka /tɕɔmɔt̪kaɹ/ |
| নাস্তা | nashta | nasta | Wikivoyage "NAHSS-tah" |
| গ্লাস | glas | glash | Wikipedia phonology (cluster examples: glash) |
| সবজি | shôbji | shobji | Wikipedia phonology /ʃobdʒi/ (not on a card) |
| পরে | pore (after) / pôre (wears), homograph | **pôre, one line** | Wikipedia phonology gives পরে /pɔre/ for both "wears" and "after". This agrees with তারপর tarpôr (Wiktionary). পরে আসব is now pôre ashbo. |

**Confirmed with a source** (same reading, unverified → sourced). Writers' flagged words: সকাল, সকালে, দরকার, ছাত্র, অনেক, ক্ষমা, আস্তে (Wikipedia /aste/), বাস (Wikipedia /bʌs/), আরও, মনে, শহর, শহরে, বোন, বোনেরা, একটু, বেশি. Also কলম, সস্তা, ভয়, বয়স, কিছু, কোনো, সব, খুব, গান, স্কুল, ট্রেন, পছন্দ, the pronouns, এটা ওটা সেটা, ওই, একজন, নয়টা, নই, নেই, কার, কোন (Wikipedia grammar), and about 30 words from Wikivoyage (নাম, এখানে, ইংরেজি, টাকা, দাম, কোথায়, একটা, দুইটা, ঘর, নতুন, বছর, সাথে …). গোসল was already sourced.
Still unverified, with the base sourced: কয়টা / কয়জন kôyṭa / kôyjon (Wiktionary কয় /kɔe̯/), বাসে (বাস), সবচেয়ে (সব + চেয়ে), ছোটটা (ছোট has no IPA on Wiktionary). Numbers: the only unverified number words on cards are পঁচিশ põchish and পাঁচশো pãchsho. পনেরো, চব্বিশ, চল্লিশ, সত্তর and নব্বই are not on any card, and no page with their IPA could be opened.

**Added:** এত æto (msu-amt), বাজারটা bajarṭa (unverified, base বাজার sourced).

**Merge.** The tool reads `lexicon.txt` plus every `lexicon-add-*.txt` by plain concatenation, so merging is clean. `lexicon-add-A/B/2/3.txt` were appended to `lexicon.txt` under `# merged from …` headers and the four files were removed. `lexicon-add-1.txt` never existed. Three keys that appeared twice with the same reading were deduplicated (কী, কি, নয়). The header now records the পরে change.

**Inline romanisations.** Fixed by hand in the lesson text, because repron does not touch them: kemon → kæmon (×3, lessons-1), shubho shôndha → shubho shondha (lessons-1), kôkhon → kôkhôn and pore ashbo → pôre ashbo (lessons-3). A scratch checker compared 192 inline `<b>…</b> <i>…</i>`, `(…)` and table romanisations with the tool: 0 differences.

## 2. Edits per file (lines changed vs. the writers' version)

- **decks-a.js (11).** Pron: 8 (repron). Wrong language 1: তুমি কেন খুশি? → **তুমি এত খুশি কেন?** ("Why are you so happy?", the idiomatic order). Consistency 1: **কে?** (Questions) was the same target as the Vowel-signs syllable **কে** once punctuation is stripped, so it was replaced with **কে আসছে?** "Who is coming?". Wrong teaching 2: the স note said s only "before থ" (now স্থ, স্ত, স্ক); the নয় "nine" note said "same word" as নয় "is not" (now "spelled and said like").
- **decks-b.js (8).** Pron: 7. Wording 1: দাম আশি টাকা। note said "the price is fifty taka".
- **extra-a.js, extra-b.js (0).** Read in full; no change needed.
- **lessons-1.js (15).** Pron and inline: 12. Wrong teaching 2: the possessive lesson said parents' verb "is আছেন" (now "usually আছেন; the plain আছে is not wrong"); two `why` lines softened to "usually". Practice 1: the possessive `ty` item now also accepts আপনার বাবা কেমন আছে?.
- **lessons-2.js (3).** Pron: 2. Teaching 1: the family lesson now says that with family words the bare number is also heard (আমার দুই ভাই আছে).
- **lessons-3.js (17).** Pron and inline: 6. Wrong language 2: মোড়ে বাঁ দিকে যান। → **মোড়ে গিয়ে বাঁ দিকে যান।** (ex, `or`, `ty`); বাজার কাছে। → **বাজারটা কাছে।** (ex, `mc`). Wrong teaching 2: the time tip used এখন চারটা। as the wrong form, but it is normal casual Bengali, so the tip now targets the bare number (এখন চার বাজে → এখন চারটা বাজে) and mentions এখন চারটা as a quick reply; the directions lesson now mentions বাম দিকে (Wikivoyage lists বামদিকে). Practice 5: the `mc` distractor কাল শুক্রবার আছে। (doubtful) → কাল শুক্রবারে।; three order cues get "verb last" (two in future, one in postpositions) so each tile set has one natural order; বাম accepted in `fi` "__ দিকে যান" and in the "Turn left" `ty` item.
- **docs/profiles/en-bn.md.** §1 pron bullet, §4 item 4, §8 items 4 and 11, the §9 header, every §9 pron (regenerated with the tool) and its Warns / Override notes, and §11 (কয়টা, বড়, কোন / হল, plus new পরে and কেমন / কেন entries) now match the lexicon-first tool. I also changed §6, although item 5 was scoped outside it, but only where my corrections made a §6 example false: the কেমন examples in §6.3, §6.4 and §6.6, the §6.5 rows that are now settled, the §6.2 homograph list (পরে), and one clause in the §6 header.

## 3. Lead's items

1. Lexicon: see §1.
2. **Letter-blank romanised alternatives.** `gen.js` adds `respell(answer)` to every `fill` / `type` item whose answer is in Bengali script. It checks no per-item flag: `strict` is the only flag `lib.item` sets, and the pronAnswers loop ignores it. No existing flag fits, so nothing was changed. Items for the lead:
   - **Misleading** (the letter name is accepted for a sound it does not have in that word): consonants #9 ভা__ → `tô` (bhat), #10 মা__ → `chhô`, #11 দু__ → `dhô`; conjuncts #10 ধন্__বাদ → `jô` (the ya-phola is silent there), #11 প্র__ম → `thô` (prothom); vowels #11 __ক → `e` (এক is æk).
   - Harmless: vowels #9 `a`, #10 `ô`; vowel-signs #9 `kô` (kôto), #10 `ki`, #11 `ko`; conjuncts #9 `khô` (khôma).
   - **Solved by copying the prompt:** all 12 `ty` items in the four script lessons (vowels, consonants, vowel-signs, conjuncts #12–14) print the accepted romanisation in the prompt ("Type the letter said ṭô" accepts `ṭô`; "Type the word for first, prothom" accepts `prothom`).
   - Suggested fix (gen.js / lib.js, the lead's call): a row marker such as `'!noroma'` that skips pronAnswers for that item.
3. Cards in two decks: 0, checked exactly and after stripping punctuation. The one normalised clash, কে / কে?, was replaced, not deleted. The profile samples কত টাকা? and আমার একটা বই আছে। are each in one deck, as the brief says (Numbers and money, Traps).
4. Writers' doubts:
   - **কি / কী:** consistent with MSU 9.4 (কি for yes/no, কী "what"); kept.
   - **Parents with আছেন / থাকেন:** no item marks the plain form wrong now.
   - **এখন চারটা।:** acceptable casual Bengali; the tip was changed.
   - **কাল শুক্রবার আছে।:** removed as a distractor.
   - **বাজার কাছে।:** → বাজারটা কাছে।.
   - **মোড়ে বাঁ দিকে যান।:** → মোড়ে গিয়ে বাঁ দিকে যান।.
   - **আধা কেজি vs অর্ধেক:** correct as taught (আধা for half a kilo, অর্ধেক for half of an amount).
   - **তুমি কেন খুশি?:** → তুমি এত খুশি কেন?.
   - **দুইজন ভাই:** kept, since it is grammatical; the bare number is now noted.
   - **Cued word order:** three cues tightened.
   - **Dhaka forms:** Kolkata forms (কটা, জল, স্নান, থেকে, -টি) appear only in notes.
5. Profile stale pron remarks: done (see §2).

## 4. Unresolved / for the lead

- পরে: a one-source reversal of a seeded homograph. The participle-like reading pore can no longer be written; if it is needed, restore a homograph pair.
- `respell.js` header comment still shows `apni kemon achhen?`. I did not edit respell.js.
- Item 2 needs a gen.js / lib.js change.
- 320 lexicon lines are still `unverified:model`, 158 of them used by cards or examples. Most have explicit vowels (low risk). The riskier ones left: কয়টা, কয়জন, ছোট / ছোটটা, বাসে, দশটা / ছয়টা (bases sourced), বলুন, ঠান্ডা, ক্লান্ত, পঁচিশ, পাঁচশো.

## 5. Ten rows a native speaker should check first

1. আমি পরে আসব। → ami pôre ashbo. (পরে "after" as pôre)
2. কেমন আছেন? → kæmon achhen?
3. তুমি এত খুশি কেন? → tumi æto khushi kæno? (new card, and কেন as kæno)
4. আপনি কখন আসবেন? → apni kôkhôn ashben? (এখন stays ækhon)
5. আমার সময় নেই। → amar shomoy nei.
6. চমৎকার → chômôtkar
7. এক গ্লাস পানি দিন। → æk glash pani din.
8. আমি একটা অফিসে কাজ করি। → ami ækṭa ôfishe kaj kori.
9. মোড়ে গিয়ে বাঁ দিকে যান। (rewritten sentence)
10. কয়টা বাজে? → kôyṭa baje? (and আপনার ভাইবোন কয়জন?)

Next in line: শুভ সন্ধ্যা shubho shondha, আমি শিক্ষক। ami shikkhôk., আমি নাস্তা করলাম। ami nasta korlam., বাজারটা কাছে।, আমার দুইজন ভাই আছে।, কে আসছে?.
