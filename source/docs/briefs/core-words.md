# Core-word decks, parts-of-speech coverage, and a Flirting deck: for every English → X course

Kii's request (2026-11-22), rewritten:

> Every course gets a deck for each part of speech holding that language's most-used words: nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions and interjections, plus a deck of the most-used words that fit none of those. The lessons must also teach each of these parts of speech as grammar; where a course's lessons miss one, say so and plan the lesson. Every course also gets a Flirting deck built from the words people flirt with (pretty, cute, handsome, clever …) and the phrases that start from them. Decks may be as long as the content deserves; there is no card limit.

This is an ADDITION to finished courses, so it is the one exception to "never touch what is already built". The exception is narrow: you may ADD the new files listed below and APPEND deck entries to the course's `profile.json`. You may not change any existing deck, lesson, card or tool.

## A. Nine core-word decks per course

Deck names are fixed, in English, in this order, in a new group called `Core words`:

| Deck | What goes in | Aim |
|---|---|---|
| `Top nouns` | the most-used nouns, with article or gender shown the way the course shows it | 80–120 |
| `Top verbs` | dictionary form; note gives the one form a beginner needs most (for example I-form present) and flags irregular verbs | 80–120 |
| `Top adjectives` | base form; note gives the other gender or the form that changes | 50–80 |
| `Top adverbs` | time, place, manner, degree (very, already, here, often …) | 30–50 |
| `Top pronouns` | personal, possessive, demonstrative, question and indefinite pronouns: the whole useful set | all of them, usually 25–45 |
| `Top prepositions` | or what the language uses in their place | 20–40 |
| `Top conjunctions` | and, but, because, if, when, that, so … | 15–25 |
| `Top interjections` | what people really exclaim: wow, ouch, oops, hey, hmm, yay, ugh … | 15–25 |
| `Top words` | the most-used words that fit none of the eight: question words, numbers to twenty, articles and determiners, yes / no, days and times | 40–80 |

The aims are guides. Go longer when the language has more words worth knowing at this level; stop when the next word would be rare. The validator accepts 12–250 cards per deck.

Rules:
1. **Order by real frequency, from a source you opened.** Use a published frequency list for that language (a national corpus list, a subtitles-based list, a frequency dictionary's public word list, or Wiktionary's frequency lists with their stated source). Name it in `tools/target/<t>/CORE-SOURCES.md` with the link, what it is based on, and its licence. Use the source for the ORDER and choice of words only; write every meaning, note and example yourself. Sort each deck most-used first.
2. **Fit the language, not English grammar.** Where a part of speech does not exist or works differently, keep the deck slot and rename it, and say why in `CORE-SOURCES.md`: Korean and Japanese have particles and postpositions instead of prepositions (`Top particles`); Chinese, Cantonese, Thai, Vietnamese and others need `Top measure words` as an extra deck; languages whose "adjectives" are verbs still get the deck, with a note. Never invent a class to fill a slot.
3. **No card that already exists in the course.** A card may be in one deck only (the release check fails on duplicates). Before writing, list every existing card target in the course; skip those words, and record the skipped ones per deck in `CORE-SOURCES.md` ("already taught in <deck>") so the gaps are explained. A word that belongs to two classes goes in the deck of its most frequent use.
4. **Each card:** `target | pron | meaning | note`. One word (with its article or gender marker where the course uses one). The note is one short line: the key form, a usage warning, or a five-word example. Each meaning is different from every other meaning in its deck (add a clarifier in brackets where English has one word for two: "you (one person, friendly)").
5. **Examples and dialogues** (`extra-t.js`): an EXAMPLES row (a short natural sentence) for at least half the cards of the verb, adjective, adverb, preposition and conjunction decks, and for every pronoun; DIALOG rows for every interjection (an exchange where it is the natural reaction). Sentences use only words the course teaches plus the card's word.
6. **Pron** comes from the course's `respell.js`, never by hand. If the tool gets a word wrong, add it to the tool's word list where the course allows that; if you cannot, leave the word out and list it.
7. **Register and variety** follow the course profile (`docs/profiles/en-<t>.md`).

## B. Parts of speech in the lessons

For each course write `tools/target/<t>/POS-COVERAGE.md`: a table with one row per part of speech (noun, verb, adjective, adverb, pronoun, preposition or its equivalent, conjunction, interjection, article/determiner, numeral) and columns: which existing lesson teaches it as grammar (id and title), how fully (taught / touched / missing), and what a learner still cannot do. Then, under "Proposed lessons", outline each missing one in five lines (title, what it teaches, the English-speaker trap, three example sentences, which core deck it links to). Do NOT write or change lessons in this job; Claude and Kii decide from the table. Interjections and conjunctions are the usual gaps.

## C. The Flirting deck

One deck named `Flirting`, in the group the course uses for social decks. No size limit; expect 40–80 cards. It replaces the "Flirty compliments" deck planned in `docs/plans/compliments-<t>.md`: start from that plan's Deck 2 table if the file exists, then extend it.

Build it in three layers, in this order inside the deck:
1. **The words** (15–25 cards): the adjectives and nouns people flirt with, as single-word cards: pretty, cute, handsome, beautiful, gorgeous, lovely, sweet, charming, clever, funny, sexy (only where it is an ordinary, non-crude word in that culture), smile, eyes, laugh, voice, style, and the local favourites that have no English twin. Note gives gender forms and how strong the word is.
2. **Phrases that start from those words** (20–40 cards): for each main word, two or three real phrases, shortest first: "You're so pretty." → "You look pretty tonight." → "What a pretty smile." Group them by the word they come from.
3. **Moves and replies** (10–20 cards): showing interest and asking someone out, then replies: a warm yes, a playful deflection, and at least two kind, clear ways to say no.

Tone: warm, light, respectful; for adults. Nothing sexual or crude, no comments on body parts beyond eyes, smile, hair and voice. Where open flirting is unusual or indirect in the culture, write the indirect forms people really use and say so in the notes. Notes carry who says it to whom, the gender forms (show the other form), and how forward it sounds (mild / warm / bold). DIALOG rows for at least 15 cards, including one exchange that ends in a gracious no and one in a yes.

The everyday `Compliments` deck is a separate job (`docs/briefs/compliments.md`); if a course has none yet and has a plan file, build it too, from Deck 1 of the plan, with no size limit.

## D. Files (per course `<t>`)

- `tools/target/<t>/decks-t.js`: the nine core decks. `tools/target/<t>/extra-t.js`: their EXAMPLES, DIALOG and PATTERNS.
- `tools/target/<t>/decks-f.js` and `extra-f.js`: the Flirting deck (and `decks-c.js` / `extra-c.js` for Compliments where built).
- `tools/target/<t>/CORE-SOURCES.md` and `POS-COVERAGE.md`.
- `tools/target/<t>/profile.json`: APPEND the new deck entries to the end of `decks` (`{"name","group","desc"}`), nothing else.
- Korean is built into the app, not in `tools/target/`: for `ko`, write the same content as JSON in `tools/ko-core.json` (`{"decks":{"Top nouns":[[ko, romanisation, English, note], …]},"examples":[…],"dialog":[…]}`) plus the two markdown files in `tools/ko-core/`; Claude merges it. Korean already has Flirting, Sweet talk and Cute things to say: for Korean add only the single-word layer and phrases that are not already cards.

## E. Checks, then hand-off

```
touch tools/target/<t>/HOLD
node tools/target/repron.js <t>      # twice; second run: 0 rewritten
node tools/target/gen.js <t>
node tools/target/validate.js <t>    # PASS: all checks OK, and no "is in two decks" warning
```

Also follow "Checks the validator does not make" in `CURSOR.md`. Branch `cursor/core-<t>`, one pull request per course, hand-off file `docs/briefs/core-<t>-handoff.md` with: cards per deck, the frequency source, how many words were skipped as already taught, the words the pron tool could not handle, the POS-COVERAGE summary (what is missing), and the ten cards a native speaker should check first.

Order of courses: es, fr, de, it, pt, ja, zh, then the rest in the order of the language picker. Do the Spanish course first and stop for Claude's review of that one before the others: it sets the pattern.
