# CHANGE OF PLAN — plan first, write later (from Kii: "let's plan it for each language first and the deck can be larger than 14")

STOP writing deck files. Do not create or continue any decks-c.js / extra-c.js / decks-d.js / extra-d.js / lexicon-add files or the Korean JSON. If you already wrote some, leave them where they are (the lead will not merge them); do not delete them, they can be reused after the plan is approved.

Instead, for EACH course in your list write one plan file: `/home/claude/docs/plans/compliments-<t>.md` (Korean: `compliments-ko.md`). Kii reads these and approves or edits them before anything is written, so write for a reader who does not know the language. Plain English, no jargon. Keep each file to about one screen and a half.

Deck size is now 20–24 cards each (hard limits 18–28). Two decks per course: `Compliments` (friendly, everyday) and `Flirty compliments` (dating; warm and respectful, nothing sexual or crude). Korean already has Sweet talk / Cute things to say / Flirting decks: plan only `Compliments` for Korean, and list in one line what those existing decks already cover so nothing is repeated.

## Format of each plan file (use exactly these headings)
```
# <Language> — compliments plan
**How compliments work here:** 3–5 lines: how freely people compliment, what they compliment most (food, effort, children, looks…), how people are expected to answer (accept, deflect, return it), and anything a foreigner gets wrong.
**Who you are talking to:** the politeness level / pronoun / gender forms the deck will use and why (one or two lines).

## Deck 1: Compliments (N cards)
| # | Group | Phrase | Meaning | Note for Kii |
(one row per planned card: the phrase in the language's own script, plus romanisation in brackets where the script is not Latin; the English meaning; a few words on when it is used or why it was chosen. No pron-tool output needed at this stage.)
Groups to cover, sized as fits the culture: food and cooking · skill, work and effort · the person's character · looks, said politely · home, things, children/pets · what people say to YOU as a learner · answering a compliment (at least 4 replies).

## Deck 2: Flirty compliments (N cards)
Same table. Groups: looks, said kindly · the person · showing interest and asking someone out · sweet and a little bold · replies: a warm yes, a playful deflection, and a kind clear no (at least 2 ways to say no).
**How forward is this deck:** one line, and what was left out on purpose.

## Left out, and why
Phrases that exist but were not chosen (too strong, too slangy, regional, easy to get wrong), in a few bullets.
## Open questions for Kii
0–3 real decisions only (for example: use tú or usted; include slang; male- or female-speaker forms first).
## Needs a native check first
The 3–5 rows you are least sure of.
```
Rules: every phrase must be natural and common in the course's variety; if you are unsure, leave it out or list it under "Needs a native check". No phrase that already exists as a card in the course (grep the existing deck files; for Korean grep src/app.html). Follow the course profile (`docs/profiles/en-<t>.md`) for variety and register.

Final report: one line per course (planned card counts for each deck, number of open questions). Then stop; do not write decks until told.
