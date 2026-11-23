# tools/hmong: the attested base for the White Hmong courses

Research base for `hmn-en` (English for White Hmong speakers) and `en-hmn` (White Hmong for English speakers). Variety: **White Hmong (Hmoob Dawb)** in the **RPA**, as written by the US Hmong community. Built on 2026-11-23 from sources opened in that session. The author is not a Hmong speaker.

| File | What it is |
|---|---|
| `GLOSSARY.tsv` | 1,274 headwords and short phrases. Columns: `hmong` (RPA, syllable-spaced) · `english` · `pos_or_classifier` · `note` (variants, Green Hmong forms, source disagreements, "native check") · `source` (ids in `SOURCES.md`, `;`-separated) |
| `SOURCES.md` | Every source id: title, URL, what was taken, rows, reliability. Also what was searched and could not be opened |
| `RPA.md` | Orthography spec for a checker: legal onsets (White, Green-only, marginal), vowels, tone letters, hard-fail vs warn rules, spacing and capitals, a 40-word self-test |
| `../../docs/profiles/hmn.md` | Pair profile, Hmong speakers learning English |
| `../../docs/profiles/en-hmn.md` | Pair profile, English speakers learning White Hmong |

## The rule for writers (read before writing one Hmong word)

1. **Use glossary words.** Every Hmong word in a card, example, dialogue, lesson body, check or practice item must be in `GLOSSARY.tsv` (match after removing spaces and hyphens, so `menyuam` = `me nyuam`). Copy the spelling of column 1, including tone letters and the forms that change with tone (`tus` / `tug`, `puas` / `pua`).
2. **Anything outside it goes in a NEW-WORDS file, never silently into content.** Create `tools/hmong/NEW-WORDS-<writer>.tsv` with the columns `hmong · english · where used (file:line) · why needed · your source (URL you opened, or "none")`. A word with source "none" may be drafted but **must not ship** until a native reader approves it.
3. **Do not invent.** Do not build a compound because it "should" exist, do not guess a tone letter, and do not respell an English word in RPA. Where Hmong has no settled term (grammar terms, app words, many modern things), **keep the English word** and say so (see the profiles).
4. **Respect the notes.** Rows marked `SOURCES DISAGREE` (days of the week), `native check`, `Green only`, or sourced only from WV (Wikivoyage, low reliability) must not be used in practice answers until a native reader settles them.
5. **Check spelling with RPA.md** before reporting: no Green-only spellings (`dl`, `dlh`, `ndl`, `ndlh`, `aa`) in White targets, no diacritics, at most one tone letter per syllable.
6. **Words not found in any opened source** are listed in the profiles' Reliability sections (for example papaya salad, sticky rice, "airport", "computer", "internet", "school building", the minute and second units, most sentence-final particles). Do not supply them from memory; put them in NEW-WORDS with a source.

These courses must not be released without a native White Hmong reader (see "Reliability" in both profiles).
