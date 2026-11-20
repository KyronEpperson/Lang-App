# en-kn cold review (EN-KN-REVIEWER, 2026-11-19)

Brief: `docs/briefs/en-kn-R.md` + `docs/TARGET-REVIEW.md`. Scratch: `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/knR/` (inventory `inv.txt`, role map `roles.js`, inline romanisation checker `inline.js`, prompt checker `prompts.js`, original copy `orig/`).
HOLD kept; nothing written to packs/ or src/ (gen.js writes the held pack to the temp folder).

## 0. Sources opened
- Penn *Preliminary Lessons: Spoken Kannada* lessons 2, 3, 5, 6 (transliterations only; the Kannada script on the pages is a legacy font). Attested there:
  *naan amerikadalli iddiini* "I am in America", *niivu ruumnalli iddiiraa?*, *illa, naan ruumnall-illa*, *pennu yell-ide?*, *nim-mane yell-ide?* "where is your house?",
  *hoogtiini / hoogtiiri / hoogtaare / bartiini / bartiiraa? / bartaare*, *niivu yelli hoogtiiri?* (question word, no -aa), *banni / baa / hoogi / nooDi / nooDu*,
  *ruum-ige, kelsa-kke, maneg-banni*, *nimage kaafi iSTavaa?, nanage Tii iSTa illa*, *kaafi beekaa? / beeDavaa? / beeDa*, *saaku, saakaa?, saaklilla*.
- Fetched through a summarising web fetch; Penn lessons 1 and 4 and other sources were not tried (Penn's grammar PDFs are scans, profile §11). **None of the brief's off-table forms (ಬರುತ್ತಾ?, ಬಂತಾ?, ಹೋದ್ರಿ, ಹೋದ್ವಿ, ಹೋಯ್ತು, ಸಿಗೋಣ, ತಗೋತೀನಿ, ಏಳ್ತೀನಿ, ಮಲಗ್ತೀನಿ, ಬಂದಿಲ್ಲ, -ಗಿಂತ, ಸಿನಿಮಾಗೆ, the typed variants) was verified against a source**; they are kept as regular derivations and listed for a native speaker.

## 1. Spelling ledger (one spelling per spoken form; status)
Status: **§2.2** = in the profile table · **Penn** = attested (transliteration) · **derived** = built from a §2.2 row by the same pattern · **native** = kept but on the native-check list.

| Form | Course spelling (model) | Also accepted in typing | Status |
|---|---|---|---|
| I am (somewhere) / I live in | ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇದ್ದೀನಿ | none typed (no item prompts "live"); ಇರ್ತೀನಿ named in the card note and `present` body | §2.2 + Penn *amerikadalli iddiini*; see §2 decision |
| where do you live? | ನಿಮ್ಮ ಮನೆ ಎಲ್ಲಿದೆ? | none typed (no item prompts it) | Penn *nim-mane yell-ide?* |
| it does: question | ಬರುತ್ತಾ?, ಹೋಗುತ್ತಾ? | | derived (ಬರುತ್ತೆ + -ಆ) |
| it came: question | ಬಂತಾ? | | derived (ಬಂತು + -ಆ) |
| it went / it became | ಹೋಯ್ತು, ಆಯ್ತು | | derived (§2.2 ಆಯ್ತು) |
| they are? | ಇದ್ದಾರಾ? | | derived (ಇದ್ದಾರೆ + -ಆ; Penn *iddaaraa*) |
| you (polite) went / came; question | ಹೋದ್ರಿ, ಬಂದ್ರಿ; ಹೋದ್ರಾ? | | derived (§2.2 ಮಾಡಿದ್ರಿ) |
| we went / came | ಹೋದ್ವಿ, ಬಂದ್ವಿ | | derived (§2.2 ಮಾಡಿದ್ವಿ) |
| let's | ಹೋಗೋಣ, ಸಿಗೋಣ, ಮಾಡೋಣ | | §2.2 ಹೋಗೋಣ + derived |
| I'll take / take (polite) | ತಗೋತೀನಿ / ತಗೊಳ್ಳಿ | | derived (like ಕೂತ್ಕೊಳ್ಳಿ); native |
| I get up / I go to bed | ಏಳ್ತೀನಿ / ಮಲಗ್ತೀನಿ | | derived (-ತೀನಿ on the stem); native |
| not yet | ಇನ್ನೂ ಬರಲಿಲ್ಲ | none typed (no ty item for "not yet"); ಇನ್ನೂ ಬಂದಿಲ್ಲ named in the `past-neg` body and a card note | §2.2 past negative; native |
| than (comparative) | -ಕ್ಕಿಂತ after -ಅ / -ಉ pronouns (ಅದಕ್ಕಿಂತ, ಇದಕ್ಕಿಂತ, ಎಲ್ಲಕ್ಕಿಂತ, ಪುಸ್ತಕಕ್ಕಿಂತ); -ಗಿಂತ after the dative in -ಗೆ (ನನಗಿಂತ, ಮನೆಗಿಂತ, ಬೆಂಗಳೂರಿಗಿಂತ) | | derived: comparative = dative + -ಇಂತ; native |
| loans with case endings | ಬ್ಯಾಂಕಿನ, ಬ್ಯಾಂಕಿಗೆ, ಆಫೀಸಿನಿಂದ, ಆಫೀಸಿನಲ್ಲಿ, ಬಸ್ಸಿನಲ್ಲಿ; ಸಿನಿಮಾಗೆ | | §2.2 rule (-ಇ / -ಇನ); ಸಿನಿಮಾಗೆ native |
| bathroom | ಬಾತ್ರೂಮ್ | | see below |
| typed variants by pattern | ತಿನ್ನೊಲ್ಲ, ಹೋಗೊಲ್ಲ, ಆಗೊಲ್ಲ (= ಮಾಡೊಲ್ಲ); ಬರಕ್ಕೆ (= ಮಾಡಕ್ಕೆ); ಬರ್ಬಹುದಾ, ಬರ್ಬೋದಾ (= ಮಾಡ್ಬಹುದು, ಮಾಡ್ಬೋದು); ಸೇದ್ಬಾರ್ದು (= ಮಾಡ್ಬಾರ್ದು); ಬರ್ಲಿಲ್ಲ, ಹೋಗ್ಲಿಲ್ಲ, ಆಗ್ಲಿಲ್ಲ (= ಮಾಡ್ಲಿಲ್ಲ; Penn *saaklilla*); ಹೋದ್ನು (= ಮಾಡಿದ್ನು); ಓದ್ತಿದ್ದೀನಿ, ಮಾಡ್ತಿದ್ದೀರಿ, ಬರ್ತಿದ್ದಾಳೆ (= ಮಾಡ್ತಿದ್ದೀನಿ) | accepted only, never models | §2.2 "Also accepted" column + derived |

**Decision "I live in":** ಇದ್ದೀನಿ. Reasons: Penn attests *naan amerikadalli iddiini* for "I am in America"; the `locative` lesson already models ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇದ್ದೀನಿ "I'm in Bengaluru. I live in Bengaluru.", so card and lesson now agree; ಇದ್ದೀನಿ is taught in `ide` (9). The question card is now ನಿಮ್ಮ ಮನೆ ಎಲ್ಲಿದೆ? (Penn *nim-mane yell-ide?*), which avoids the ambiguity of ನೀವು ಎಲ್ಲಿ ಇದ್ದೀರಿ? ("where are you right now?"). ಇರ್ತೀನಿ stays in `present` (ಅವಳು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇರ್ತಾಳೆ) and is named in the card note.
**Decision deck sizes:** Vowels stays at 12 and Consonants 2 at 20. Vowels cannot grow without repeating a target from another deck (ಆ / ಈ as words are the same strings as the letters, ಕ is in Consonants 1) or carding ಋ, which the profile keeps out of decks; Consonants 2 holds the 18 everyday letters of its rows plus the ಹುಳಿ / ಹುಲಿ pair the standing rule leans on, and cutting a letter would leave it uncarded.

## 2. Respell (tools/target/kn/respell.js)
- FSTEM += ಫಿಲ್ಟರ, ಟ್ರಾಫಿಕ (ಫಿಲ್ಟರ್ filṭar, ಟ್ರಾಫಿಕ್ ṭrāfik; ಟ್ರಾಫಿಕ್ does not occur in the course today).
- A one-syllable fragment ending in ಂ, followed by one space and a consonant, resolves its nasal by that consonant (ಗಂ ಟೆ → gaṇ ṭe, was gam ṭe; gen.js romanises spaced answers with the spaces kept, so the old output was an accepted romanisation). A real word ending in ಂ keeps m (ಮೇಡಂ ಬನ್ನಿ → mēḍam banni). Whole-course diff of gen output: only those two prons changed.
- ಟಿವಿ, ಕೆಜಿ: spelling kept (the common media spelling); card notes now say they are said ṭīvī, kējī. EXC was not used, since it is whole-word only and would miss ಕೆಜಿಗೆ.
- ಮಧ್ಯಾಹ್ನ: pron kept (follows the letters); card note says it is usually said madhyāna (native check).
- ಬ್ಯಾಂಕ್: key unchanged; the card note gives the reading rule for English loans ("ಬ್ಯಾ is the a of bank"), as en-te did.
- `repron kn`: 1 rewritten (ಒಂದು ಫಿಲ್ಟರ್ ಕಾಫಿ …). Inline checker (`inline.js`: every `<b>K</b> <i>r</i>` pair and every "K (r)" in lesson strings) and prompt checker (`prompts.js`: "Build / Type r (…)" prompts against respell of the answer): 0 mismatches.

## Batch 1: decks-a.js, extra-a.js, decks-b.js (read in full)
- decks-a: About me "I live in" card → ಇದ್ದೀನಿ (wrong teaching: form before its lesson); "Where do you live?" → ನಿಮ್ಮ ಮನೆ ಎಲ್ಲಿದೆ?; ಬ್ಯಾಂಕ್ note: loan reading rule; ಅತ್ತೆ / ಮಾವ notes completed (aunt / uncle senses).
- extra-a: example key and sentence follow the ಇದ್ದೀನಿ card.
- decks-b: ಫಿಲ್ಟರ್ pron (repron); notes for ಟಿವಿ, ಕೆಜಿ, ಮಧ್ಯಾಹ್ನ; "not yet" note names ಇನ್ನೂ ಬಂದಿಲ್ಲ.
- Checked and kept: ಬರುತ್ತಾ? / ಹೋಗುತ್ತಾ? / ಬಂತಾ? / ಇದ್ದಾರಾ? / ಹೋದ್ರಾ? / ಸಿಗೋಣ / ತಗೋತೀನಿ / ತಗೊಳ್ಳಿ / ಏಳ್ತೀನಿ / ಮಲಗ್ತೀನಿ (derived, ledger §1); ಸಿನಿಮಾಗೆ; ನೂರ ಇಪ್ಪತ್ತು, ಹದಿನೈದು, ಮೂವತ್ತೆರಡು, ಐನೂರು, ಎಪ್ಪತ್ತೈದು (regular number words); ಬಾತ್ರೂಮ್ (no ZWNJ allowed; the ತ್ರ conjunct reads bāt-rūm correctly; native check).

## Batch 2: lessons-1.js (vowels … ide; read in full)
- Wording (15): broken brackets in practice strings, "ಇ i)?" → "ಇ (i)?" and the like (ಈ ī), ಆ ā), ಏ ē), ಓ ō), ಖ kha), ಕೈ kai)).
- Wrong teaching (1): `conjuncts` body said the anusvara is n / ṇ / m before the k-ch-t / ṭ / p rows only; added "and m before every other letter" (ಸಂಸಾರ, word end).
- Practice (2): `vowel-signs` fill ಈ__ and type īke now carry the length twin ಕೇ in o / x.
- Pron (1): `conjuncts` ty ಗಂ ಟೆ now romanises gaṇ ṭe (respell change, §2).
- Checked and kept: question word + -ಆ is never used as a distractor anywhere in the course (script `qa.js`), so the profile's "not accepted" stance hurts no item; ಹೇಗಿದ್ದೀಯ? / ಹೇಗಿದ್ದೀರಿ? accepted beside the -ಆ greeting forms.

## Batch 3: lessons-2.js (intro … locative; read in full)
- Wrong teaching (4): (1) `like-want` and `food` bodies said ಇಲ್ಲ in answer to an offer "means there isn't any"; that overstates it (ಇಲ್ಲ is the general "no", and ಇಲ್ಲ, ಸಾಕು is heard). Now: ಇಲ್ಲ is the "no" of "is there…?" and on its own does not refuse; answer with ಬೇಡ or ಸಾಕು. (2) `plurals`: "Adjectives never change" → "Adjectives before a noun never change" (the course itself teaches ಚಿಕ್ಕದು, ದೊಡ್ಡದು as predicates). (3) `family`: only younger siblings were said to take ಇದ್ದಾನೆ / ಇದ್ದಾಳೆ, while a card says ನನಗೆ ಒಬ್ಬಳು ಅಕ್ಕ ಇದ್ದಾಳೆ; now "older or younger", plus a line that some families say ಅಮ್ಮ ಇದ್ದಾಳೆ among themselves but ಇದ್ದಾರೆ to others. (4) `family` check 3 gets "(respectfully)" so ಇದ್ದಾನೆ is unambiguously wrong.
- Practice (7): distractors that may be acceptable replaced by certainly wrong ones: ಇಲ್ಲ as a refusal in 2 checks and 2 mc (→ ಇದೆ); ನನಗೆ ಒಂದು ತಮ್ಮ ಇದ್ದಾನೆ (colloquial ಒಂದು as "a" exists) → ನನಗೆ ಒಬ್ಬ ತಮ್ಮ ಇದ್ದಾಳೆ; ಬೆಂಗಳೂರಿಕ್ಕೆ → ಬೆಂಗಳೂರ (bare stem). `imperative` mc and fill "stop here" get "(politely)", so ನಿಲ್ಲಿಸು (heard with auto drivers) is wrong by the cue. Why lines updated.
- Checked and kept: ಮನೆ ಹತ್ತಿರ / ಮನೆಯ ಹತ್ತಿರ both accepted; ನಮ್ಮ ಅಮ್ಮ taught and accepted beside ನನ್ನ ಅಮ್ಮ; ಮೂವರು and ಮೂರು ಜನ both accepted (numbers fill); -ಇ commands in `dative` are introduced in the body as borrowed words ("lesson 16 explains them"); ನನಗೆ in `family` is introduced through ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಬರುತ್ತೆ.

## Batch 4: lessons-3.js (present … compare; read in full) + follow-ups
- Wrong teaching (2): `and-then` said the -ಉ form (ಕುಡಿದು, ತೊಳೆದು) belongs to "short verbs with a special past"; ಕುಡಿ and ತೊಳೆ have regular pasts. Now: special-past verbs (ಬಂದೆ, ತಿಂದೆ, ಕೊಟ್ಟೆ) and verbs ending in -ಇ / -ಎ (ಕುಡಿ, ತೊಳೆ). `present` now says ಇದ್ದೀನಿ is just as common as ಇರ್ತೀನಿ for where you live (matches the About me decision).
- Wording (1): `time` body: ಮಧ್ಯಾಹ್ನ "usually said madhyāna".
- Practice (2): `continuous` ty "What are you doing?" x += ಏನೂ (length twin of ಏನು); `consonants-2` ty "Type tale" (dental / retroflex: a dot-only contrast that plain typing cannot test) → "Type nīru (water)" `ನೀ ರು|ನೀರು`, x ನಿ ರೂ, hinge "long vowel" (standing-rule count unchanged, 3/3).
- Checked and kept: -ಗಿಂತ / -ಕ್ಕಿಂತ (body explains both: dative + -ಇಂತ); bare day name for "on Monday" (ಭಾನುವಾರ ನಾನು ಕೆಲಸ ಮಾಡಲ್ಲ: normal speech); ಏಳೂವರೆ, ಎಂಟೂವರೆ, ಒಂದೂವರೆ, ಎರಡೂವರೆ; ಇನ್ನೂ ಬರಲಿಲ್ಲ as the model for "not yet", ಇನ್ನೂ ಬಂದಿಲ್ಲ named in the body and a card note; ನನಗೆ ಇಷ್ಟ ಆಗಲಿಲ್ಲ.
- Course-wide scripts (scratch): no answer list holds variants that differ only in what matching ignores; no Latin in answers; no wrong option equals an answer; no written form used as a model anywhere (cards, dialogues, examples, patterns, ex rows, model answers); remaining length "twins" found by `twins.js` are non-words in syllable-spaced script items, or ಯಾರೂ / ಏನೂ before they are taught (questions fill 10, intro ty 14). Lesson bodies all ≥ 250 words (lowest: dative 331 words, 252 of them English).

## 3. Spoken-spelling changes (summary)
- One spelling change: "I live in" ಇರ್ತೀನಿ → ಇದ್ದೀನಿ (About me card and its example), and "Where do you live?" ನೀವು ಎಲ್ಲಿ ಇರ್ತೀರಿ? → ನಿಮ್ಮ ಮನೆ ಎಲ್ಲಿದೆ?.
- Every other off-table form the writers used is a regular derivation of a §2.2 row (ledger §1) and is spelled the same way in every file: one spelling per form already held across cards, dialogues, examples, ex rows and model answers (role map `roles.js`). Accepted typed variants follow the §2.2 "Also accepted" column by pattern and never appear as models.

## 4. Native-speaker check, first ten
1. ನನಗೆ ಬರೋಕೆ ಆಗಲ್ಲ vs ನಾನು ಬರೋಕೆ ಆಗಲ್ಲ: the course marks the ನಾನು form wrong (must-can tip, fill 11, mc 4, check 3, or / ty x); is it heard in Bengaluru speech? Same question for the hinge distractor ಎರಡು with people (ಎರಡು ಮಕ್ಕಳು, `family` and `numbers`): is it only "less common", or wrong?
2. Question word + -ಆ (ಎಲ್ಲಿದ್ದೀರಾ?, ಏನು ಮಾಡ್ತಾ ಇದ್ದೀರಾ?): not accepted, but never a distractor; should it be accepted?
3. ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇದ್ದೀನಿ for "I live in Bengaluru" and ನಿಮ್ಮ ಮನೆ ಎಲ್ಲಿದೆ? for "Where do you live?"; ಇರ್ತೀನಿ accepted.
4. ಇಲ್ಲ to an offer of food: the course now says it does not refuse on its own (ಬೇಡ / ಸಾಕು); right?
5. ಇನ್ನೂ ಬರಲಿಲ್ಲ vs ಇನ್ನೂ ಬಂದಿಲ್ಲ for "not yet" (model vs mentioned).
6. Derived spoken forms: ಬರುತ್ತಾ? / ಹೋಗುತ್ತಾ?, ಬಂತಾ?, ಹೋದ್ರಾ?, ಹೋದ್ವಿ / ಬಂದ್ವಿ, ಹೋಯ್ತು, ತಗೋತೀನಿ / ತಗೊಳ್ಳಿ, ಏಳ್ತೀನಿ, ಮಲಗ್ತೀನಿ, ಸಿಗೋಣ.
7. Comparatives ನನಗಿಂತ, ಮನೆಗಿಂತ, ಬೆಂಗಳೂರಿಗಿಂತ beside ಅದಕ್ಕಿಂತ, ಪುಸ್ತಕಕ್ಕಿಂತ.
8. Loans: ಸಿನಿಮಾಗೆ (or ಸಿನಿಮಾಕ್ಕೆ?), ಬಾತ್ರೂಮ್ (no ZWNJ; or ಬಾತ್ ರೂಮ್?), ಟಿವಿ said ṭīvī, ಕೆಜಿ said kējī, ಮಧ್ಯಾಹ್ನ said madhyāna.
9. Respect: "some families say ಅಮ್ಮ ಇದ್ದಾಳೆ among themselves" (family body); ಇದ್ದಾಳೆ for an older sister; ಮೂವರು vs ಮೂರು ಜನ.
10. Plural things: ಇದೆ in speech vs ಇವೆ in writing (plurals body); ಹುಲಿ ಇದೆ for "there are tigers".

## Batch 5: follow-ups after a second pass
- Practice (7): dative fill 9 distractor ಬೆಂಗಳೂರ (could read as the short "of" form: "the Bengaluru bus") → ಬೆಂಗಳೂರುಕ್ಕೆ; questions fill 10 o += ಯಾರೂ (length twin of ಯಾರು, replaces ಎಲ್ಲಿ); intro ty 14 x += ಏನೂ; accepted answers added where the pronoun-less form is natural: questions ty 15 ಪುಸ್ತಕವಾ?, intro ty 12 ಅಮೆರಿಕದವಳು., numbers ty 12 ಇಬ್ಬರು., numbers ty 14 ಇಪ್ಪತ್ತೈದು ರೂಪಾಯಿ. (script: ty items whose a[0] starts with a pronoun and have no pronoun-less variant, or have one answer; the rest judged complete).
- Said less (2): removed "Some families say ಅಮ್ಮ ಇದ್ದಾಳೆ among themselves…" (`family`) and "You may hear ಇಲ್ಲ, ಸಾಕು…" (`food`), both from recall; the "(respectfully)" cues and the ಬೇಡ / ಸಾಕು teaching do the work.
- Wording (9): lessons-3 "romanization" → "romanisation" (glossary term, as in lessons 1–2).
- Checkers re-run on the final files: inline pairs, romanised prompts and table cells (`<td class="k">K</td><td>r</td>`, 19 pairs): 0 mismatches.
- Not verified, added from my own knowledge: "usually said madhyāna" (card note, `time` body); ಇದ್ದೀನಿ "just as common" as ಇರ್ತೀನಿ for where you live (`present` body).

## Open points: decisions
- 'not yet': ಇನ್ನೂ ಬರಲಿಲ್ಲ stays the model; ಇನ್ನೂ ಬಂದಿಲ್ಲ is named (body, note).
- ಇದ್ದಾರೆ for parents: every item with ಇದ್ದಾನೆ / ಇದ್ದಾಳೆ as the wrong option for a parent carries "(respectfully)"; ನನಗೆ ಒಬ್ಬಳು ಅಕ್ಕ ಇದ್ದಾಳೆ is right and the `family` body now covers older siblings.
- Plural things ಇದೆ / ಇವೆ: `plurals` body already says written ಇವೆ, spoken often ಇದೆ; kept.
- ನಮ್ಮ ಅಮ್ಮ / ನನ್ನ ಅಮ್ಮ: both taught and accepted. ಮನೆ ಹತ್ತಿರ / ಮನೆಯ ಹತ್ತಿರ: both accepted.
- Question word + -ಆ: not accepted, never a distractor; native check.
- -ಆ derived forms ಡಾಕ್ಟರಾ, ಪುಸ್ತಕವಾ (Penn *pustakav-aa*), ಮನೆಯಾ, ಅಮೆರಿಕದವಳಾ: regular (-ಆ after a consonant; v after -ಅ; y after -ಎ; -ಉ replaced); kept.
- ಮೂವರು / ಮೂರು ಜನ: both accepted, both taught.
- Doubtful wrong options: ನನಗೆ ಒಂದು ತಮ್ಮ, ಬೆಂಗಳೂರಿಕ್ಕೆ, ಇಲ್ಲ as a refusal replaced; ಇಲ್ಲಿ ನಿಲ್ಲಿಸು kept with a "(politely)" cue; ಆಫೀಸಿನ is no longer a wrong option anywhere (its one use is a dialogue model, ಆಫೀಸಿನ ಹತ್ತಿರ ಇದೆ).
- Bare day name for "on Monday": correct, kept. ಏಳೂವರೆ and the other half-past forms: regular, kept.
- Numbers outside the profile (ಹದಿನೈದು, ಮೂವತ್ತೆರಡು, ಐನೂರು, ನೂರ ಇಪ್ಪತ್ತು, ಎಪ್ಪತ್ತೈದು): standard number words, kept.
- Glosses: ಅತ್ತೆ / ಮಾವ notes completed; ಆಕೆ "she (that woman)", ಈಕೆ "this woman; she (here)", ಶ್ರೀ "Mr. (before a name); Sri", ಹೋಟೆಲ್ "usually a place to eat" checked and kept.
- Deck sizes: see the decision in §1.
- ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಬರುತ್ತೆ: a card in About me only (checked).
- Forms before their lesson: -ಇ commands in `dative` and ನನಗೆ in `family` are introduced in those bodies as borrowed phrases; kept.
- Lesson bodies near the floor: all ≥ 250 words; none padded.
- Departures from the profile: About me "I live in" card (profile §8 Move 2 wording uses ಇರ್ತೀನಿ); consonants-2 ty "Type tale" from profile §7 replaced by "Type nīru".
