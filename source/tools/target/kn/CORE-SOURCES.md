# en-kn Core words, Flirting and Compliments: sources, choices and skips

Writer EN-KN-CORE, 2026-11-23. Files: `decks-t.js` + `extra-t.js` (nine Core words decks), `decks-f.js` + `extra-f.js` (Flirting), `decks-c.js` + `extra-c.js` (Compliments), this file, `POS-COVERAGE.md`, and eleven deck entries appended to `profile.json`.

## 1. Frequency sources: what was actually opened

**Read this first: no frequency ranks were used.** No Kannada frequency list could be opened from this session. Every deck is ordered by the writer's judgement, not by a source. Judgement leaned towards the everyday spoken Kannada of Bengaluru and Mysuru that the course teaches (profile §2.1): the words an adult learner hears first at home, at work, in shops and on transport. Within that, each deck runs roughly from the most common word to the least, with small groups kept together (colors, the days, the numbers in counting order, the human counting words, the case endings before the separate postpositions).

What was tried on 2026-11-23, exactly:

| Source | What happened |
|---|---|
| hermitdave/FrequencyWords (OpenSubtitles 2016 and 2018, CC BY-SA 4.0), cloned with `git clone --depth 1 --filter=blob:none --sparse` into a new empty scratch folder | Cloned (commit 525f9b5, 7 Feb 2022). **There is no Kannada list:** `content/2018/` has no `kn` folder (it lists af … zh_tw; the Indian languages present are bn, hi, ml, ta, te, ur, si), and no path in the whole tree matches `kn`. No file was read. |
| Wiktionary frequency-list index, [en.wiktionary.com/wiki/Wiktionary:Frequency_lists](https://en.wiktionary.com/wiki/Wiktionary:Frequency_lists) | Opened through the summarising fetch tool: the page has **no Kannada entry** (it lists Hindi, Odia, Nepali and Telugu among South Asian languages). The en.wiktionary.org copy returned "not found". |
| Leipzig Corpora Collection, `kan_wikipedia_2018_100K` report pages (found by web search) | Not fetched: the fetch tool could not read the site's robots.txt. No ranks seen. |
| Sketch Engine, [knWaC: Corpus of the Kannada Web](https://www.sketchengine.eu/kannada-wac/) | Opened. It describes an 11-million-word web corpus (2012, POS-tagged) and says word lists can be made inside Sketch Engine, but **shows no ranked words**. No licence stated. |
| Web searches for "Kannada word frequency list", "most common Kannada words", "github Kannada word frequency list txt" | Returned only phrasebook pages, PDF spam and the sources above. None was used. |

**Suggestion for the lead:** re-rank these same cards against a Kannada frequency list from a machine that can reach one (Leipzig `kan_*` word lists, or a lemma count over a Kannada subtitle or web corpus). Only the order inside each deck should move; the choice of words should hold for a beginner.

Every meaning, note, example and dialogue was written by the writer. The Compliments deck and part of the Flirting deck start from `docs/plans/compliments-kn.md` (Deck 1 and Deck 2), as the brief says.

## 2. Class slots fitted to Kannada (brief rule 2)

- **`Top prepositions` → `Top case endings and postpositions`.** Kannada has no prepositions. Its relations are (a) case endings fused to the noun (-ಗೆ / -ಕ್ಕೆ, -ಅಲ್ಲಿ, -ಇಂದ, -ಅ, -ಅನ್ನು, plus -ಗಿಂತ "than" and -ಗೋಸ್ಕರ "for") and (b) separate postpositions after the noun's of-form (ಜೊತೆ, ಹತ್ತಿರ, ಮೇಲೆ, ಹಿಂದೆ, ಬಗ್ಗೆ, ತನಕ …). The profile already treats them this way (§2.2: "case endings are attached, postpositions separate"). A bare ending cannot be a card (a leading hyphen fails `pronPattern`, and a bare ಗೆ or ಅಲ್ಲಿ would clash with other words: ಅಲ್ಲಿ is "there"), so each ending is shown **on one host noun**, ಶಾಲೆ "school" (ಶಾಲೆಗೆ, ಶಾಲೆಯಲ್ಲಿ, ಶಾಲೆಯಿಂದ, ಶಾಲೆಯ, ಶಾಲೆಗಿಂತ), with ಪುಸ್ತಕವನ್ನು for the object ending and ನಿಮಗೋಸ್ಕರ for "for". The meaning names the ending; the note gives its other shapes. This follows the Japanese course's `Top particles` (particle on a host word).
- **`Top conjunctions` keeps its name but includes verb endings.** Kannada says "if", "even if", "when", "after", "before", "until" and "in order to" with verb forms, not separate words. They are carded on one verb, ಬರು "come" (ಬಂದ್ರೆ, ಬಂದ್ರೂ, ಬಂದಾಗ, ಬಂದ ಮೇಲೆ, ಬರೋಕೆ ಮುಂಚೆ, ಬರೋವರೆಗೆ) and ನೋಡು (ನೋಡೋಕೆ), with the clitic pair -ಊ … -ಊ "both … and" on ಅಪ್ಪನೂ ಅಮ್ಮನೂ. The free-standing conjunctions (ಅಥವಾ, ಅಂತ, ಅಂದ್ರೆ, ಆದ್ರೂ, ಹಾಗಾಗಿ, ಆದ್ದರಿಂದ, ಇಲ್ಲಾಂದ್ರೆ, ಮತ್ತೆ, ಹಾಗೂ, ಅಷ್ಟೇ ಅಲ್ಲ) come first.
- **No `Top counters` deck.** Kannada has no measure words. Its one special counting set, the human numerals (ಒಬ್ಬ, ಒಬ್ಬಳು, ಒಬ್ಬರು, ಇಬ್ಬರು, ಮೂವರು), is in `Top words` with the numbers.
- **No articles.** Kannada has none; `Top words` carries the determiners it does have (ಎಲ್ಲಾ, ಕೆಲವು, ಪ್ರತಿ, ಇನ್ನೊಂದು, ಅದೇ) and the "no" words ಅಲ್ಲ and ಬೇಡ beside the course's existing ಹೌದು. / ಇಲ್ಲ.
- **Adjectives** are real adjectives in Kannada; the note gives the form that changes, the predicate form in -ದು (ದೊಡ್ಡ → ದೊಡ್ಡದು), or the -ಆಗಿ adverb.
- **Verbs** are given as the stem (the course's dictionary form, ಮಾಡು, ಹೋಗು), with the spoken I-form present from the profile's spelling table (ಮಾಡ್ತೀನಿ) and the past where it is irregular. ಬೇಕು and ಗೊತ್ತು are defective verbs that take the dative (ನನಗೆ ಬೇಕು); they are in `Top verbs` with that note.
- **Pronouns** include the case forms a beginner needs every day (ನನಗೆ, ನನ್ನನ್ನು, ನನ್ನ, ನನ್ನದು …), because in Kannada these are the pronoun, not a separate word plus a preposition.
- **Spoken spellings** follow the profile (§2.2): spoken verb forms (ಬಂದ್ರೆ, ಆದ್ರೂ, ಅಂದ್ರೆ, ಇಲ್ಲಾಂದ್ರೆ, ಏನಾದ್ರೂ, ಯಾರಾದ್ರೂ), with the written form named in the note; object endings written in full (-ಅನ್ನು), as the course writes ಇದನ್ನು; English loans with a final virama and -ಇ before an ending (ಡೇಟಿಗೆ, ಸ್ಟಾಪಿನಲ್ಲಿ). No ZWNJ anywhere.

## 3. Where words with two homes went

- ಆಗ, ಇಲ್ಲಿ, ಅಲ್ಲಿ, ದೂರ: `Top adverbs`. ಒಳಗೆ, ಹೊರಗೆ, ಮೇಲೆ, ಕೆಳಗೆ, ಮುಂದೆ, ಹಿಂದೆ, ಹತ್ತಿರ: `Top case endings and postpositions` (their adverb use is in the note).
- ಮತ್ತೆ ("and then; again"): `Top conjunctions`, its most frequent use in speech.
- ಜಾಸ್ತಿ, ಕಡಿಮೆ: `Top adverbs` (degree). ಎಲ್ಲಾ: `Top words` (determiner); ಎಲ್ಲರೂ: `Top pronouns`.
- Parts of the day, the days, ವಾರ, ತಿಂಗಳು, ಸಲ, ಅರ್ಧ: `Top words` ("days and times"). ದಿನ, ವರ್ಷ, ಸಮಯ, ನಿಮಿಷ: `Top nouns`.
- Same spelling, two words, one card only: ಹಾಡು (card: song; the verb "sing" is in the note), ನಗು (card in Flirting: smile; the verb "laugh" in the note), ಏಳು (card: seven; the verb "get up" in the note), ಹತ್ತು (already a card: ten; the verb "climb, get on" was left out), ಎತ್ತು (card: lift; "ox" in the note).
- Flirting words kept out of `Top adjectives` / `Top nouns` so no card is in two decks: ಸುಂದರ, ಚೆಂದ, ಮುದ್ದು, ಸ್ಮಾರ್ಟ್, ಹ್ಯಾಂಡ್ಸಮ್, ಸ್ವೀಟ್, ಬುದ್ಧಿವಂತ, ತಮಾಷೆ, ನಗು, ಕಣ್ಣು, ಧ್ವನಿ, ಕೂದಲು, ಇಷ್ಟ.
- Compliments and Flirting were written together, so no phrase is in both (the plan's ನೀವು ತುಂಬಾ ಬುದ್ಧಿವಂತರು and ನೀವು ತುಂಬಾ ತಮಾಷೆಯಾಗಿ ಮಾತಾಡ್ತೀರಿ stay in Compliments; Flirting uses other phrases for those words).

## 4. Words skipped because the course already teaches them

Compared against every card target in `decks-a.js` and `decks-b.js`, ignoring . , ? ! (so ಹೌದು. counts as ಹೌದು). Words marked (judgement) are not exact matches but would have been near-duplicates.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | ಮನೆ | Home and daily things |
| Top nouns | ಊಟ, ಕಾಡು, ಗಾಡಿ, ಕೋಟೆ | Consonants 1: k, ch and ṭ rows |
| Top nouns | ಹುಲಿ | Consonants 2: t and p rows, and the rest |
| Top nouns | ಕೈ | Vowel signs |
| Top nouns | ಅಮ್ಮ, ಅಪ್ಪ, ಅಕ್ಕ, ಬೆಣ್ಣೆ, ಕತೆ, ಕತ್ತೆ, ಕನ್ನಡ, ಕರ್ನಾಟಕ, ಬೆಂಗಳೂರು, ಗಂಟೆ, ಪ್ರೀತಿ, ಬಸ್, ಡಾಕ್ಟರ್, ಬ್ಯಾಂಕ್ | Conjuncts and anusvara |
| Top nouns | ಅಣ್ಣ, ತಮ್ಮ, ತಂಗಿ, ಅಜ್ಜಿ, ಅತ್ತೆ, ಮಾವ, ಮಗಳು; (judgement) ಗಂಡ, ಹೆಂಡತಿ (cards ನನ್ನ ಗಂಡ, ನನ್ನ ಹೆಂಡತಿ) | Family and people |
| Top nouns | (judgement) ಪುಸ್ತಕ (card ಪುಸ್ತಕಗಳು) | Home and daily things |
| Top verbs | none: no existing card is a bare verb stem | |
| Top adjectives | ಹುಳಿ | Consonants 2: t and p rows, and the rest |
| Top adverbs | ತುಂಬಾ, ಸ್ವಲ್ಪ | Conjuncts and anusvara |
| Top adverbs | ಆಮೇಲೆ | Questions and connectors |
| Top pronouns | ಆಕೆ, ಈಕೆ | Vowel signs |
| Top pronouns | ಯಾರು?, ಏನು? | Questions and connectors |
| Top case endings and postpositions | none exact. ಬಸ್ಸಿನಲ್ಲಿ and ಬೆಂಗಳೂರಿನಿಂದ (Getting around) already show -ಅಲ್ಲಿ and -ಇಂದ on other nouns; the endings are carded again on ಶಾಲೆ so the deck is complete | |
| Top conjunctions | ಮತ್ತು, ಆದರೆ, ಯಾಕೆಂದರೆ, ಅದಕ್ಕೆ | Questions and connectors |
| Top interjections | ಓ, ಏ (the same strings as the vowel letters) | Vowels |
| Top interjections | ಓಕೆ | Vowel signs |
| Top interjections | ನಮಸ್ಕಾರ, ಸಾರಿ., ಸರಿ., ಥ್ಯಾಂಕ್ಸ್ | Greetings and courtesy |
| Top interjections | ಕ್ಷಮಿಸಿ | Conjuncts and anusvara |
| Top interjections | ಸಾಕು. | Food and drink |
| Top words | ಒಂದು, ಎರಡು, ಐದು, ಹತ್ತು, ಹದಿನೈದು, ಇಪ್ಪತ್ತು, ನೂರು, ಸಾವಿರ | Numbers and money |
| Top words | ಯಾರು?, ಏನು?, ಎಲ್ಲಿ?, ಯಾವಾಗ?, ಹೇಗೆ?, ಯಾಕೆ? | Questions and connectors |
| Top words | ಏಕೆ | Vowel signs |
| Top words | ಆ, ಈ ("that", "this" before a noun: the same strings as the vowel letters) | Vowels |
| Top words | ಹೌದು., ಇಲ್ಲ. | Greetings and courtesy |
| Top words | ಸೋಮವಾರ, ನಿನ್ನೆ, ನಾಳೆ, ಇವತ್ತು | Time, days and routine |
| Flirting | ಪ್ರೀತಿ (the deck uses ಲವ್ as the word card and ಪ್ರೀತಿಸ್ತೀನಿ in a phrase) | Conjuncts and anusvara |

**Total skipped as already taught: 69** (61 exact, 8 by judgement or as a ಹೌದು./ಹೌದು-type match). (Nouns 31, adjectives 1, adverbs 3, pronouns 4, conjunctions 4, interjections 9, Top words 23, Flirting 1; ಇಲ್ಲ./ಹೌದು. and the question words are counted once, under Top words, and ಯಾರು?/ಏನು? once more under pronouns because they belong there too.)

## 5. Pron tool

Every pron was generated by `tools/target/kn/respell.js` from a script in the writer's scratch folder and pasted unchanged; `repron.js kn` reports 0 rewritten on both runs. The tool raised **no warnings** on any card that was kept. Words left out or respelled because of the tool:
- **ಬಹುಶಃ** "perhaps": the tool warns on the visarga and gives *bahushah*; left out (the note on ಸುಮ್ಮನೆ is unaffected; speakers often say ಇರಬಹುದು instead).
- **ಬ್ಯುಸಿ** "busy": the tool gives *byusi*, but the word is said like English *busy*; left out.
- **ಛಾನ್ಸೇ ಇಲ್ಲ** "no way": the tool reads ಛ as aspirated *chh*; the card uses the common spelling ಚಾನ್ಸೇ ಇಲ್ಲ (*chānsē illa*) instead.
- **ಹೃದಯ** "heart" was not used: ೃ triggers a warning. The Flirting deck uses ಮನಸ್ಸು-free phrases instead.
No `lexicon-add-T.txt` was needed.

## 6. Counts

| Deck | Cards | Examples | Dialogues |
|---|---|---|---|
| Top nouns | 110 | 8 | 0 |
| Top verbs | 75 | 52 | 0 |
| Top adjectives | 48 | 30 | 0 |
| Top adverbs | 37 | 31 | 0 |
| Top pronouns | 46 | 46 | 0 |
| Top case endings and postpositions | 30 | 26 | 0 |
| Top conjunctions | 18 | 15 | 0 |
| Top interjections | 21 | 0 | 21 |
| Top words | 49 | 10 | 0 |
| Flirting | 65 (21 words, 29 phrases, 15 moves and replies) | 5 | 19 |
| Compliments | 30 | 3 | 10 |

Patterns: 4 (Core words), 3 (Flirting), 2 (Compliments). Verb examples use the inflected spoken form the sentence needs (ಮಾಡ್ತೀರಿ for ಮಾಡು), as the Spanish verb examples do.

## 7. Flirting and Compliments notes

- **Flirting** starts from Deck 2 of `docs/plans/compliments-kn.md` (all 23 of its phrases are in, two moved to Compliments' wording rules: ನನ್ನನ್ನ → ನನ್ನನ್ನು, ನಿಮ್ಮನ್ನ → ನಿಮ್ಮನ್ನು, to match the course's -ಅನ್ನು spelling). Open flirting with a stranger is unusual outside young city circles; the deck stays on the polite ನೀವು except three cards that say they need ನೀನು (ನೀನು ತುಂಬಾ ಮುದ್ದಾಗಿದ್ದೀಯ, ನೀನು ನನ್ನ ಟೈಪ್, ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸ್ತೀನಿ), and every note says how forward a card is (mild / warm / bold). English loans (ಸ್ಮಾರ್ಟ್, ಸ್ವೀಟ್, ಡೇಟ್, ಕ್ರಷ್, ಲವ್, ಸ್ಟೈಲ್) are kept because that is how Bengaluru speakers flirt; the notes say so. Four ways to say no: ಥ್ಯಾಂಕ್ಸ್, ಆದರೆ ನನಗೆ ಇಂಟರೆಸ್ಟ್ ಇಲ್ಲ; ಸಾರಿ, ನನಗೆ ಈಗಾಗಲೇ ಮದುವೆ ಆಗಿದೆ; ಸಾರಿ, ನನಗೆ ಈಗಾಗಲೇ ಒಬ್ಬರು ಇದ್ದಾರೆ; ನೀವು ಒಳ್ಳೆಯವರು, ಆದರೆ ನಾವು ಫ್ರೆಂಡ್ಸ್ ಆಗಿರೋಣ; plus a firm stop (ದಯವಿಟ್ಟು ಬೇಡ, ನನಗೆ ಇದು ಇಷ್ಟ ಆಗ್ತಾ ಇಲ್ಲ). Dialogues end in a yes (coffee), a gracious no (meal), a gentle no (number) and a let's-stay-friends.
- **Compliments** is Deck 1 of the plan (all 23 cards, ಇದನ್ನ → ಇದನ್ನು) plus seven: food (ಹೊಟ್ಟೆ ತುಂಬಿತು, ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು), work (ನಿಮ್ಮ ಪ್ರೆಸೆಂಟೇಶನ್ ಸೂಪರ್ ಆಗಿತ್ತು), skill (ನಿಮ್ಮ ಕೈಬರಹ …), home (ನಿಮ್ಮ ಮನೆ ತುಂಬಾ ನೀಟಾಗಿದೆ), a child (ನಿಮ್ಮ ಮಗ ತುಂಬಾ ಜಾಣ), and two replies (ಎಲ್ಲಾ ನಿಮ್ಮ ಆಶೀರ್ವಾದ to an elder; ನೀವು ಹೇಳಿದ್ದು ಕೇಳಿ ಖುಷಿ ಆಯ್ತು between equals). Five of the 30 cards are replies, matching the plan's point that the usual answer is modest.

## 8. Native check first (the ten cards to look at before anything else)

1. **ತೆಗೆ** and its example ದಯವಿಟ್ಟು ಬಾಗಿಲು ತೆಗೀರಿ: is ತೆಗೀರಿ the natural spoken polite form (written ತೆಗೆಯಿರಿ)?
2. **ಕೂತ್ಕೊಳ್ಳು** note ಕೂತ್ಕೋತೀನಿ, and **ತಗೊಳ್ಳು** ತಗೋತೀನಿ: spoken I-forms not in the profile table.
3. **ಶಾಲೆಗಿಂತ**: -ಗಿಂತ on a noun ending in -ಎ (the course has only -ಕ್ಕಿಂತ cards and ನನಗಿಂತ in REVIEW).
4. **ಬಂದ್ರೆ / ಬಂದ್ರೂ / ಅಂದ್ರೆ / ಆದ್ರೂ / ಇಲ್ಲಾಂದ್ರೆ**: spoken spellings, beside the course's fuller ಯಾಕೆಂದರೆ and ಆದರೆ. Keep spoken, or switch all to the written forms?
5. **ತಣ್ಣನೆಯ** as the everyday adjective "cold", with the predicate ತಣ್ಣಗಿದೆ.
6. **ಅಯ್ಯಪ್ಪ** (oh my) and **ಅಮ್ಮಾ** (ouch): natural as written, and is ಅಯ್ಯಪ್ಪ fine to teach (it is also a deity's name)?
7. **ಚಾನ್ಸೇ ಇಲ್ಲ** "no way!" and **ಹಾಂ** / **ಹೂಂ** spellings.
8. Flirting **ನಿಮ್ಮ ಜೊತೆ ತುಂಬಾ ತಮಾಷೆ ಇರುತ್ತೆ** and **ಎಷ್ಟು ಮುದ್ದಾಗಿ ನಗ್ತೀರಿ!**: natural, and the right strength?
9. Compliments **ಎಲ್ಲಾ ನಿಮ್ಮ ಆಶೀರ್ವಾದ** and **ಹೊಟ್ಟೆ ತುಂಬಿತು, ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು**, and the dialogue's ಇನ್ನೊಂದು ದೋಸೆ ಹಾಕ್ಲಾ?
10. Flirting **ದಯವಿಟ್ಟು ಬೇಡ, ನನಗೆ ಇದು ಇಷ್ಟ ಆಗ್ತಾ ಇಲ್ಲ** as a firm, polite "please stop".

Also worth a look: ಉಳಿ ("remain; be left over"), ಕೇಳಿಸು example ಕೇಳಿಸ್ತಾ ಇದೆಯಾ?, ಯಾವತ್ತೂ example with the perfect negative ತಿಂದಿಲ್ಲ, and the meaning of ಸಣ್ಣ ಆಗಿದ್ದೀರಿ in its note.
