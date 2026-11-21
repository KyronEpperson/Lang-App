# Cursor job queue: English → other languages

Work top to bottom. One course per branch (`cursor/en-<t>`) and pull request. While a course waits for Claude's stage-1 decisions, you may start stage 1 of the next "Ready" course; never write lessons or decks before the decision record says "Go for stage 2".

Lanes:
- **Ready**: no app change expected. Full run, stages 0–6.
- **Check**: probably small app needs (a letter fold, a font, keyboard handling). Do stage 1 and list every need under "App changes needed" in the lead note. Claude decides; stage 2 waits for the decision record.
- **App first**: needs real app work (a new script). Do stage 1 only; Claude builds the app side, then the decision record says go.
- **Blocked**: wait for Kii (community or language-body contact first). Do NOT research or write the course. The only allowed job is an outreach draft (bottom of this file) when Kii asks for it.

Status values: `queued` · `stage 1` · `waiting for decisions` · `writing` · `in review` · `merged`. Update this table in your branch when a course changes status.

| # | Code | Language | Lane | Status | Closest finished course | Notes for the researcher |
|---|---|---|---|---|---|---|
| 1 | nl | Dutch | Ready | waiting for decisions | de | Pilot. PR #1. |
| 2 | ptpt | Portuguese (Portugal) | Ready | queued | pt | Reuse the Brazilian course's decisions wherever Portugal does not differ; the roadmap names every European form (tu and o senhor / a senhora instead of você as default, estar a + infinitive, clitic placement chamo-me, article before possessives, pequeno-almoço / comboio / autocarro / telemóvel, reduced vowels and the sh-sound of final s). The pron tool must follow Lisbon pronunciation, not Brazil's. Brand word must differ from the Brazilian course's. |
| 3 | sv | Swedish | Ready | queued | de | Pitch accent and the sj-sound mislead English speakers; en / ett gender and the definite suffix (-en, -et); verb-second order. |
| 4 | no | Norwegian | Ready | queued | de | Bokmål only, East Norwegian (Oslo) pronunciation; mention once that Nynorsk and dialects exist. Pitch accent; three genders in Bokmål with the common-gender option: state one house rule. |
| 5 | da | Danish | Ready | queued | de | Spelling is a poor guide to sound (soft d, stød, swallowed endings): the pron aid matters more than in any other Nordic course; say plainly how good it can be. |
| 6 | pl | Polish | Ready | queued | ru | Seven cases: decide how many reach A1. Consonant clusters and the ś / sz contrast for the pron aid. Formal Pan / Pani. |
| 7 | cs | Czech | Ready | queued | ru | Seven cases; ř; vowel length marks change meaning (accents should probably count). Formal vy. |
| 8 | ro | Romanian | Ready | queued | it | ș and ț with the comma below; accept the cedilla forms ş ţ as the same letters if the app needs a fold (list it). Enclitic definite article (casa). |
| 9 | uk | Ukrainian | Ready | queued | ru | Cyrillic like Russian, but different letters (і, ї, є, ґ) and different sounds; do not copy Russian pron rules. The apostrophe in м'ясо: accept straight and typographic. Політе ви as in the roadmap. |
| 10 | bg | Bulgarian | Ready | queued | ru | Cyrillic; no cases but a postposed article; stress is not written and moves. |
| 11 | hu | Hungarian | Ready | queued | fi or de | Long vowels (á é í ó ő ú ű) change meaning; vowel harmony; suffix order. Formal ön / maga. |
| 12 | fi | Finnish | Ready | queued | de | Consonant gradation; long sounds written double; many cases: decide the A1 subset. |
| 13 | af | Afrikaans | Ready | queued | de (and nl once merged) | Double negation (nie ... nie); ê ô û ë ï; very regular verbs. |
| 14 | sw | Swahili | Ready | queued | id | Noun classes (m-/wa-, ki-/vi-...): decide how many at A1 and how they are tested. Regular spelling: the pron aid may be "optional" or "none". |
| 15 | ht | Haitian Creole | Ready | queued | fr | Official orthography (è, ò, nasal an / en / on); false friends with French are the main trap. Do not copy the UF textbook's text: its licence is reserved. |
| 16 | zu | Zulu | Ready | queued | id | Clicks (c, q, x) and lateral hl / dl for the pron aid; noun classes and concords. |
| 17 | tr | Turkish | Check | queued | id | The dotted and dotless i (İ i / I ı) must match correctly in typed answers: check how the app lowercases and list any fold needed. Vowel harmony; agglutination. |
| 18 | el | Greek | Check | queued | ru | New alphabet; the stress mark (tonos) changes meaning: decide whether a missing one is "almost". List any app need (font, fold). |
| 19 | fa | Persian | Check | queued | ur, ar | Right to left like Arabic and Urdu. Persian letters ی ک typed with Arabic keyboards as ي ك: the app must treat them as the same; list it. Ezafe; colloquial vs written forms (pick one house rule). |
| 20 | mr | Marathi | Check | queued | hi | Devanagari like Hindi; reuse the Hindi matcher and fonts if possible, list what differs (ळ, nasal marks). Spoken vs written forms as in the roadmap. |
| 21 | ha | Hausa | Check | queued | id | Hooked letters ɓ ɗ ƙ and 'y need accent-bar keys and fair matching; tones are not written in normal spelling (say how the course handles that). The roadmap's source teaches Niger Hausa; the course uses Kano forms. |
| 22 | yo | Yoruba | Check | queued | vi | Tone marks and underdots (ẹ ọ ṣ): like Vietnamese, decide whether a missing mark is "almost" and check how the app compares combined vs separate accent characters. |
| 23 | ig | Igbo | Check | queued | vi | Dotted vowels ị ọ ụ and ṅ; tones written only in teaching examples (house rule needed). |
| 24 | om | Oromo | Check | queued | id | Qubee spelling: double letters and the apostrophe (hudhaa) carry meaning; list matching needs. The roadmap's source is a 1975 book: verify every spelling against current Qubee sources. |
| 25 | bn | Bengali | App first | queued | hi, te | New script: needs a font and a matcher in the app (like Telugu and Kannada). Stage 1 only, with an exact list of app needs. Variant: Dhaka standard with Kolkata words in notes (roadmap). |
| 26 | am | Amharic | App first | queued | te | Ge'ez (fidel) script: needs a font, keyboard approach and matcher. Stage 1 only, with an exact list of app needs. |
| 27 | chr | Cherokee | Blocked | queued | — | Contact Cherokee Nation Language Department first. A draft profile already exists from the main build (`docs/profiles/en-chr.md`). |
| 28 | mi | Māori | Blocked | queued | — | Contact Te Taura Whiri / Māori reviewers first (identity topics: pepeha, marae). |
| 29 | nah | Nahuatl | Blocked | queued | — | Contact IDIEZ first. Source is share-alike (credit UT Austin). |
| 30 | quc | K'iche' | Blocked | queued | — | Contact ALMG teachers first. |
| 31 | qu | Quechua | Blocked | queued | — | Community review first; source needs attribution. Spelling standard undecided (Cusco vs official). |
| 32 | gn | Guaraní | Blocked | queued | — | Community review first. |
| 33 | ay | Aymara | Blocked | queued | — | Weakest source; La Paz teachers first. |
| 34 | arn | Mapudungun | Blocked | queued | — | Alphabet choice is political; decide with Mapuche reviewers. |
| 35 | sm | Samoan | Blocked | queued | — | Kii decides. Respect registers. |
| 36 | to | Tongan | Blocked | queued | — | Kii decides. Weakest source of the Pacific group. |
| 37 | fj | Fijian | Blocked | queued | — | Kii decides. |
| 38 | tpi | Tok Pisin | Blocked | queued | — | Kii decides. |

## Outreach drafts (Blocked lane, only when Kii asks)

File `docs/outreach/<t>.md`: who to contact (organisation, public contact page you opened), why Lang App is writing, what is asked (permission, review, a named reviewer), what the community gets (credit, free access, removal on request), and a short email draft. Never send anything; Kii sends.
