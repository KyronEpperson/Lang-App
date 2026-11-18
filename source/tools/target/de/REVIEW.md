# en-de cold review (EN-DE-REVIEWER, 2026-11-18)

Brief: docs/briefs/en-de-R.md + docs/TARGET-REVIEW.md. Read in full: every deck card (decks-a, decks-b), every dialogue, example and pattern (extra-a, extra-b), every lesson body, example row, check and practice item (lessons-1/2/3), respell.js, the profile (docs/profiles/en-de.md), TARGET-BRIEF, PRACTICE-SPEC, PHASE2-BRIEF last section.

## Batch 1: pronunciation tool (respell.js)
- Script (scratch, not stored): lists every distinct word in every deck row and {{ex:}} row with its current respelling. 585 distinct tokens (about 560 German words) read in full, checking stress of prefixed verbs and compounds, loanwords with v, -ig, -sam / -bar / -lich, vowel length before one or two consonants, final devoicing, ch as kh / hh, r after vowels.
- Result: no wrong respelling found in the current course. The writers' queries all come out right: Hallo `HAHL-oh` (both HAL-lo and ha-LO exist; kept), Hamburg `HAHM-boork`, anprobieren `AHN-proh-bee-ruhn`, Geburtstag `guh-BOORTS-tahk`, nächste `NEHHS-tuh`, wandere `VAHN-duh-ruh`.
- LEX: added wandere, wandern, wanderst, wandert (output unchanged; it silences the only "check stress" warning).
- `node tools/target/repron.js de`: 499 prons read, 0 rewritten.

## Batch 2: decks-a.js (1 edit)
- wrong teaching: Straße note said ß follows only a long vowel; now "a long vowel or ei, au, eu".
- Everything else read and kept (greeting times, Prost, bottled water, Stimmt so, Tüte, sizes).

## Batch 3: decks-b.js (4 edits)
- wrong teaching: Kein Problem note said "kein before a noun, nicht before almost everything else" (contradicts the negation lesson: nicht with der/die/das nouns). Now: kein negates a noun that would have ein or no article.
- wording / facts: Bürgeramt "Book a Termin first" softened to "In many cities you need a Termin first".
- wording / facts: Sunday closing note made precise (some bakeries in the morning, shops in big stations).
- wording: "am Wochenende = at the weekend" → "on the weekend" (US English).

## Batch 4: extra-a.js, extra-b.js (0 edits)
- All 80 dialogues, 37 examples, 18 patterns read; no German or English errors found.

## Batch 5: lessons-1.js (2 edits)
- wrong teaching: sounds body, ß rule extended to ei, au, eu (heißen).
- practice: word-order type "On Sunday we sleep late" now also accepts Am Sonntag schlafen wir aus.

## Batch 6: lessons-2.js (3 edits)
- wrong teaching: negation intro said "kein goes before nouns"; now "before a noun that would have ein or no article" (matches the body's der/die/das rule).
- practice: negation mc distractor "Wir haben nicht Zeit" (writers' doubt; acceptable in contrastive speech) replaced by the clearly wrong "Wir haben kein Zeit".
- practice: gern order item "Ich spiele gern Tennis" could also be built as "Ich spiele Tennis gern" (grammatical). Replaced by "I like to swim (start with ich)" → Ich schwimme gern (x: schwimmt), one order only; still hinges on verb second.

## Batch 7: lessons-3.js (3 edits)
- practice: imperative mc distractor "Wart hier!" (a real, colloquial du imperative) → "Warte hier!", and the why now says Warte! is for one friend.
- wrong teaching: imperative body claimed a bare du imperative "is not rude; it simply sounds direct and friendly"; now "is common; add bitte when you are asking a favor".
- practice: war-hatte type "Yesterday I went to the movies (start with gestern)" now also accepts Gestern war ich im Kino (the lesson itself teaches Ich war im Kino).

## Writers' doubts, decided
- Wir haben nicht Zeit: removed as a distractor (see batch 6).
- Den Rock kauft Anna: grammatical; natural with contrast. Kept (the lesson says it puts the skirt in the spotlight).
- gern order item: fixed (batch 6).
- heißst, nehmst, fahrst as fallback / fill distractors: kept; they are wrong forms an English speaker really builds.
- Wart hier!: replaced (batch 7).
- Ich bekomme ein Steak to order: kept; normal in Germany.
- doch description, greeting times, customs notes, denn / weil note, Ich bin heiß note: kept as written (Bürgeramt and Sunday notes softened, batch 3).
- Typed answers of 6–8 words (connectors, war-hatte, adjectives, bracket): within the validator's 9-word cap and every natural order is listed; kept.

## Edit counts per file
| File | wrong language | wrong teaching | practice | pron | wording |
|---|---|---|---|---|---|
| respell.js | 0 | 0 | 0 | 1 | 0 |
| decks-a.js | 0 | 1 | 0 | 0 | 0 |
| decks-b.js | 0 | 1 | 0 | 0 | 3 |
| extra-a.js | 0 | 0 | 0 | 0 | 0 |
| extra-b.js | 0 | 0 | 0 | 0 | 0 |
| lessons-1.js | 0 | 1 | 1 | 0 | 0 |
| lessons-2.js | 0 | 1 | 2 | 0 | 0 |
| lessons-3.js | 0 | 1 | 2 | 0 | 0 |

## Ten things a native speaker should check first
1. Object-first sentences without context: Den Rock kauft Anna, Den Hund sucht der Mann, Den Kaffee trinkt Lena (accusative lesson).
2. Ich bekomme ein Steak as a normal way to order (traps body), and Was nehmen Sie? as a server's question (stem-change body).
3. Stress choices in the aid: Hallo `HAHL-oh`, einundzwanzig `AIN-oont-tsvahn-tsihh`, deshalb `DEHS-hahlp`, Appetit `ahp-ay-TEET`.
4. Greeting times: Guten Morgen until ten or eleven, Guten Abend from about six, Gute Nacht only when leaving late or going to bed.
5. Wenn es regnet, kommst du mit? accepted as a yes/no question (connectors type item 3).
6. Life in Germany notes: Prost eye contact, bottled water by default, Tüte costs extra, Stimmt so, Sunday opening, Bürgeramt Termin, Kaltmiete / Warmmiete.
7. Wrong-form distractors heißst, nehmst, fahrst, and die Muttern (a real word, "nuts") as a wrong plural of Mutter.
8. Imperative note: a du imperative without bitte between friends is common; Bleibe! as "a little more formal".
9. Ist dieser Platz frei? with the suggested answers Ja, bitte. / Nein, besetzt.
10. Ich bin satt with the note "Not Ich bin voll", and Ich freue mich! glossed "I'm so glad!".

## Final check
See the end of the final reply: `node tools/target/gen.js de && node tools/target/validate.js de`.
