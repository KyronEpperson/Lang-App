# fr-en IPA rules (settled in the FR-REVIEWER pass, 2026-11-17)

These rules bind every `pron` field in the fr-en course: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base.** docs/profiles/fr.md §6 adopts the zh-en notation unchanged, as pt-en does. `tools/content/zh/PRON-RULES.md` §A–§D therefore applies word for word: OALD North American values, ASCII `g`, plain `r`, ˈ on every content word, the weak-form table, and syllabic /l/ and /n/. `tools/content/pt/PRON-RULES.md` §2–§4 applies too (fr and pt share the es-en English side). This file only records what fr adds or had to settle.

**Checker:** `node tools/content/fr/pron_check.js [summary|phrases|words|rules|zh|new|all]`, copied from the pt checker. `REF=pt` compares with pt-en instead of zh-en; mode `new` lists the words that neither zh-en nor pt-en transcribes. Current output:

```
pairs 897 · words 833 · phrase conflicts 0 · word conflicts 1 · rule hits 0 · differs from zh: phrases 0, words 4
pairs 897 · words 833 · phrase conflicts 0 · word conflicts 1 · rule hits 0 · differs from pt: phrases 0, words 0   (REF=pt)
```

- **The four zh differences** are the deliberate pt pairs (pt PRON-RULES §3): *into* in the citation form `run into` /ˈrʌn ˈɪntuː/, main-verb *does* /ˈdʌz/, relative *which* /wɪtʃ/, preposition *before* /bɪfɔːr/.
- **The one word conflict** is *new* (adjective /ˈnuː/) against *New York* /ˌnuː ˈjɔːrk/. The checker cannot tell them apart; the difference is intended.
- **fr equals pt** at phrase and word level for every shared English string.

## 1. Fixed in this pass
- *New York*: /ˈnuː ˈjɔːrk/ → /ˌnuː ˈjɔːrk/ in 2 rows of more/a2.js (`I've been to New York.`, `I went to New York last year.`). This now matches more/a1.js, zh-en and pt-en. A two-word place name gets ˌ on the first word.

## 2. Names and places with no zh/pt counterpart (as the en-US voice says them; check against the audio)
| English | IPA | Note |
|---|---|---|
| France | /ˈfræns/ | TRAP vowel, never nasal; the `pron` lesson P7 `why` uses it |
| French | /ˈfrentʃ/ | profile §6 |
| Paris | /ˈpærɪs/ | æ before r, as zh `married` /ˈmærid/; final s pronounced |
| London | /ˈlʌndən/ | name: exempt from the syllabic-n rule (like *Boston*, *Hilton*); the checker's exemption list now includes it |
| Bordeaux | /bɔːrˈdoʊ/ | English stress on the last syllable |
| Toulouse | /tuˈluːz/ | |
| Lucas | /ˈluːkəs/ | profile §6 |
| Victor Hugo | /ˈvɪktər ˈhjuːgoʊ/ | the usual American reading, with /h/ |
| Canada | /ˈkænədə/ | |

## 3. Course words with no zh/pt counterpart (checked by hand against zh §A–§C)
- Faux amis deck: *disappointed* /ˌdɪsəˈpɔɪntɪd/, *demand* /dɪˈmænd/, *lecture* /ˈlektʃər/, *rest* /ˈrest/, *coin* /ˈkɔɪn/, *large* /ˈlɑːrdʒ/, *sympathetic* /ˌsɪmpəˈθetɪk/, *journey* /ˈdʒɜːrni/. They agree with profile §6's worked examples.
- Pièges deck: *choose* /ˈtʃuːz/ (pair with *shoes* /ˈʃuːz/), *hair* /ˈher/, *air* /ˈer/, *eat* /ˈiːt/, *heat* /ˈhiːt/, *cat* /ˈkæt/, *cut* /ˈkʌt/.
- Others: *something* /ˈsʌmθɪŋ/, *father's* /ˈfɑːðərz/.

## 4. Function words
No fr-only decision was needed. The pt rules for *which*, *into*, *does*, *before*, *about / around / across / after / until / within* and *to* before a vowel (pt PRON-RULES §3) hold in every fr row.

## 5. Respellings in French letters
- They appear only as **error illustrations** in « », never as the aid: «sank you», «tank you», «sri», «kès-tion», «ouaï-faï», «ôtel».
- The two-syllable error for *worked* is spelled **«wor-ked»** everywhere: the `pron` lesson, the «Pièges de prononciation» card and the `past` tip. The card said «wor-kid» and the tip said «work-ed».
- **Stressed syllables in card notes** are named with the English letters in lowercase quotes, plus IPA: `l'accent tonique est sur "ma" (/ˌɪnfərˈmeɪʃn/)`. Do not use capitalised pseudo-syllables («MA», «VER», «TU», «LI», «EK»); five «Mots transparents et accent» notes were changed. «EK» became `"ex"`, the English letters of *excellent*.
- **Capitals for a wrong French-style stress** stay where the profile prescribes them: «ba-na-NA» (pron lesson, *banana* card) and «com-for-TA-ble». The capitals show the error, not a reading aid. *thirTEEN / THIRty* in the numbers lesson keeps capitals on the English spelling itself, as in pt.
- **Terminology:** a card note says «accent tonique» at first mention, never plain «accent», which also means a written accent and a foreign accent (glossary §3). 23 deck notes were aligned (17 by a mechanical replacement, 6 inside notes rewritten for other reasons). Lesson bodies already say «accent tonique» first and then «l'accent» under that heading, which is fine.
