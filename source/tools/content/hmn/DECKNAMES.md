# hmn-en deck names (FINAL, set by the stage-1 lead; do not change)

Every Hmong word below is in `tools/hmong/GLOSSARY.tsv` (checked with `rpa_check.js` and `coverage.js`; the only report is the letter *A* in row 21). Where no attested Hmong name exists the English word stays, as profile hmn.md §3 rules (never coin), and the row says so. All names are [native check] as phrases.

The reference course (ko-en) has **21** decks. Rows 1–21 replace them in the same order (deck links in lessons map by position). **Rows 22–25 are hmn-en additions**, appended last in `decks.js` by CONTENT-A, each declared in `deviations.json` by the lead (`decks["21"]` … `decks["24"]`, `decks.count`).

| # | name (use verbatim) | literally | ko-en deck (meaning) | lessons linked (ko-en positions) / notes |
|---|---|---|---|---|
| 1 | Nyob zoo thiab sib ntsib dua | hello and goodbye | Greetings | greetings |
| 2 | Kuv tus kheej | myself (*tus kheej* MDH) | Self-introduction | articles, be, present, third-s, object-have, perfect-2; localised cards 0, 4, 5 |
| 3 | Lus Askiv txhua hnub 1 | everyday English 1 | Survival English 1 | polite; card 12 localised |
| 4 | Lus Askiv txhua hnub 2 | everyday English 2 | Survival English 2 | questions |
| 5 | Nug kev thiab caij tsheb | asking the way and riding (buses, cars) | Directions, transport | the; card 0 subway → bus |
| 6 | Mus noj mov | going out to eat | Restaurant ordering | countable; cards 4, 6 (steak, medium rare) localised |
| 7 | Kav fes thiab khw | coffee and the store | Café, convenience store | |
| 8 | Mus kav khw | going shopping | Shopping, paying | plurals, adjectives, relative |
| 9 | Pes tsawg, sij hawm thiab hnub | how many, time and days | Numbers, time, dates | prep, numbers |
| 10 | Sib tham | talking together (small talk) | Small talk | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing; card 6 localised |
| 11 | Zoo siab thiab tu siab | happy and sad (feelings, reactions) | Feelings, reactions | joining, past-continuous, conditionals |
| 12 | Kev nyiam thiab lus zoo | liking and kind words (compliments) | Compliments, liking | card 8 localised |
| 13 | Hauj lwm thiab email | work and email (*email* in ALLOW.txt) | Work, email | first-conditional, passive, email |
| 14 | Xov tooj thiab lus luv | phone and short words (text abbreviations) | Phone, text abbreviations | reported; cards 0, 1 localised |
| 15 | Mus ncig teb chaws | travelling to other countries (airport, hotel) | Travel (airport, hotel) | perfect, articles-2; card 8 localised |
| 16 | Tsev kho mob thiab kev pab | clinic and help (*tsev kho mob* MDH) | Hospital, emergency | modals; card 15 localised |
| 17 | Phrasal verbs | **English kept**: no Hmong term (profile §3) | Phrasal verbs | phrasal |
| 18 | Pronunciation: hais ua tib zoo | pronunciation: say it carefully (**pronunciation** kept in English, profile §3) | Pronunciation traps | pron; hmn pairs appended (cards 26+), declared by A as `decks["17"]` |
| 19 | Paj lug lus Askiv | English sayings (*paj lug* = proverb, saying) | English idioms | idioms |
| 20 | Movies, TV thiab slang | **English kept** for movies, TV, slang (no attested Hmong word; *yeeb yaj kiab* was not found) | Movies, dramas, slang | narrative; card 14 (Who's your bias?) localised |
| 21 | A txog Z: lus Askiv | A to Z: English (*txog* "to", as in PGE's «7 sawv ntxov txog 6 tsaus ntuj»; *tsiaj ntawv* "letter" is not attested) | Alphabet | alphabet (shared 26 cards) |
| 22 | Final sounds: -s, -ed | **English kept**: *suab* "sound" and *tsiaj ntawv* are not attested | (vi-en's final-sounds deck) | **addition**: final-sounds. Copied from vi-en (29 cards, already the last deck in `decks.js`, under its Vietnamese name): rename it and the lesson's `deck:` link |
| 23 | Kuv thiab kuv tsev neeg | me and my family | — | **addition**: he-she-it (profile §8). People, kinship and pronoun cards, 16–20 |
| 24 | Lus Hmoob thiab lus Askiv | Hmong and English | — | **addition**: the zone errors of profile §4 as correct English cards (a blue dress, I'm happy., He hit him., four dogs, Do you go to school?, a barking dog …), each note naming the Hmong habit, ✗ → ✓. 16–20 cards (vi-en's calque deck, its deck 23, is the model) |
| 25 | Nyob hauv Amelika | living in America | — | **addition**: everyday US life for the learners profile §5 describes (adult immigrants, elders): interpreter (*neeg txhais lus* MDH), clinic appointment, school and teacher (*tsev kawm ntawv*, *xib fwb*: NEW-WORDS), county office (*lub nroog*), bus, Hmong New Year in English. 16–20 cards. No religion, war or refugee topics (profile §9) |

Rules for these names: use them verbatim in `decks.js`, in every lesson `deck:"…"` link, and in `meta.js` GROUPS / TAGS / DESC / GOALS / PLAN_PRESETS. Do not translate the English-kept names. Card targets must stay unique across all 25 decks (validate.js fails on a duplicate target).
