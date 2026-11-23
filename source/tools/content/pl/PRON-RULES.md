# pl-en IPA rules (settled in the PL-REVIEWER pass, 2026-11-23)

These rules bind every `pron` field in the pl-en course: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base.** docs/profiles/pl.md adopts the zh-en notation unchanged, so `tools/content/zh/PRON-RULES.md` §A–§D applies word for word. This file records only what pl adds or had to settle.

Summary of the base, for writers who do not open the zh file:
- American values in the school symbols: /oʊ/ not /əʊ/, /ɑː/ not /ɒ/, /ɜːr/ and /ər/ not /ɝ ɚ/, plain `r`, ASCII `g`, no flap symbol.
- ˈ on every content word, including monosyllables (/ˈkæt/); ˌ only for a real secondary stress (/ˌrezərˈveɪʃn/).
- Function words are weak and carry no stress mark: /ə/, /ən/, /ðə/, /tə/, /fər/, /əv/, /ənd/, /kən/, /də ju/, /wəz/, /aɪm/, /ɪts/.
- Syllabic /l/ and /n/ are written without schwa: /ˈæpl/, /ˌrezərˈveɪʃn/. Kept with schwa where zh keeps it: /ˈbɔːstən/, /ˈhɪltən/, /ˈpoʊlənd/, and *-stent / -stant* words (/kənˈsɪstənt/).
- `‖` separates two sentences inside one field.
- A monosyllabic preposition left at the end of a clause is strong but unmarked: *What does it look like?* /… ˈlʊk laɪk/. This is the one place where *like* has no ˈ.

**Check.** There is no pl copy of the checker in the repository. For this pass `tools/content/zh/pron_check.js` was copied to a scratch folder with its data directory pointed at tools/content/pl. Output after the review:

```
pairs 858 · words 809 · phrase conflicts 1 · word conflicts 1 · rule hits 2
```

- The phrase conflict (`to`) is an artefact of the prose scanner, which pairs the word *to* in Polish running text with two unrelated transcriptions. It is not a real conflict.
- The word conflict and one rule hit are *like* /ˈlaɪk/ (verb, 20 rows) against stranded *like* /laɪk/ (one row), which the base rule allows.
- The other rule hit is /kənˈsɪstənt/, kept with schwa as above.
- `lint.js` reports 0 blocking: no English text carries two different transcriptions.

## 1. Names and places (as the en-US voice says them; check against the audio)

| English | IPA | Note |
|---|---|---|
| Poland, Polish | /ˈpoʊlənd/, /ˈpoʊlɪʃ/ | |
| Warsaw | /ˈwɔːrsɔː/ | the English name, not a reading of *Warszawa* |
| Krakow | /ˈkrɑːkaʊ/ | **one transcription everywhere** (4 rows). Spelled *Krakow*, without the Polish diacritic. /ˈkrækaʊ/ and /ˈkrɑːkoʊ/ also exist in American speech; do not mix them in |
| Nowak | /ˈnoʊvæk/ | read the English way: *w* as /v/, first syllable /noʊ/ |
| Anna | /ˈænə/ | |
| Mary | /ˈmeri/ | American merger: same vowel as *merry* |
| Italy, Japan | /ˈɪtəli/, /dʒəˈpæn/ | |
| United States | /juˈnaɪtɪd ˈsteɪts/ | |
| Boston, Hilton | /ˈbɔːstən/, /ˈhɪltən/ | schwa kept, as in zh |
| Americano | /əˌmerɪˈkɑːnoʊ/ | |
| Wi-Fi | /ˈwaɪfaɪ/ | one stress mark |
| Mr. | /ˈmɪstər/ | |

Korean place names in rows shared with ko-en (Seoul, Jeju, Busan, Daegu) keep the ko-en transcription untouched; parity compares them.

## 2. Points specific to Polish speakers
- Final voiced consonants stay voiced in the transcription (/ˈbæg/, /ˈdɔːg/, /ˈbæd/). Polish devoices them, and the *Wymowa: pułapki* deck and the `pron` lesson teach exactly this contrast, so a devoiced transcription would teach the error.
- /æ/ and /e/ are never merged (*bad* /ˈbæd/, *bed* /ˈbed/), for the same reason.
- *-ing* is /ɪŋ/ with no following /g/ or /k/ (/ˈwɜːrkɪŋ/); /ŋg/ only where English has it (/ˈɪŋglɪʃ/).
- /θ/ and /ð/ are never replaced with f, t, d or z in any helper text.
- Polish respelling („łot”, „de”) is not used as `pron`. Where a lesson compares an English sound with a Polish letter (for example /ɪ/ and Polish „y”), that is prose inside the lesson body, marked as an approximation.
- Polish loans and internationalisms take the English stress and vowels, not the Polish ones: *hotel* /hoʊˈtel/, *banana* /bəˈnænə/, *camera* /ˈkæmərə/.

## 3. When adding rows
1. Look the word up in the existing rows first and reuse its transcription. `lint.js` blocks the same English text with two transcriptions, but it does not catch one word transcribed two ways in two different sentences.
2. For a new Polish name or place, add it to the table in §1.
3. Run the scratch copy of the checker as described above and explain every new conflict here.
