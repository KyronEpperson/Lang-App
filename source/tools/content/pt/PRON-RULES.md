# pt-en IPA rules (settled in the PT-REVIEWER pass, 2026-11-17)

These rules bind every `pron` field in the pt-en course: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base.** docs/profiles/pt.md §6 adopts the zh-en notation unchanged. So `tools/content/zh/PRON-RULES.md` §A–§D applies word for word: OALD North American values, ASCII `g`, plain `r`, ˈ on every content word, the weak-form table, and syllabic /l/ and /n/. This file only records what pt adds or had to settle.

**Checker:** `node tools/content/pt/pron_check.js [summary|phrases|words|rules|zh|all]` (adapted from the zh checker). Mode `zh` lists every pt phrase or word whose transcription differs from the one zh-en uses for the same English. Current output:

```
pairs 922 · words 840 · phrase conflicts 0 · word conflicts 1 · rule hits 0 · differs from zh: phrases 0, words 4
```

The four zh differences are the deliberate pairs in §3: *into*, *which* and *before* (strong vs weak), and main-verb *does* /ˈdʌz/ (`He does the dishes`). zh §B gives that form, but zh-en has no row with it. The one word conflict is *new* (adjective, /ˈnuː/) vs *New York* (/ˌnuː ˈjɔːrk/). The checker aligns words one by one, so it cannot tell the two apart. The difference is intended (§2 below).

## 1. Agreement with zh-en
- **Identical English text gets an identical transcription.** Every pt row whose full English text also occurs in zh-en has zh's transcription (0 phrase differences). At word level, the only differences are the 4 deliberate ones above. Rows whose word count and IPA token count differ (digits, *ATM*, hyphenated words) cannot be aligned word by word. They are covered only by the phrase check and by hand.
- 131 words and about 300 rows have no zh counterpart: names, the pt-only lessons, the rebuilt `pron` and `false-friends` items, and the five es-only decks. They were checked by hand against zh's rules. The decisions are below.

## 2. Names and places (as the en-US voice says them; flag for an audio check)
| English | IPA | Note |
|---|---|---|
| Brazil | /brəˈzɪl/ | profile §6 |
| São Paulo | /ˌsaʊ ˈpaʊloʊ/ | profile §6. A two-word place name gets ˌ on the first word |
| New York | /ˌnuː ˈjɔːrk/ | same pattern as São Paulo. Changed in 2 rows of more/a2.js, which had /ˈnuː ˈjɔːrk/; more/a1.js already had ˌ |
| Rio | /ˈriːoʊ/ | |
| Salvador | /ˈsælvədɔːr/ | English stress on the first syllable, not the Portuguese final stress |
| Pedro | /ˈpeɪdroʊ/ | |
| Ana | /ˈænə/ | the en-US voice reads it like *Anna*. /ˈɑːnə/ is also possible; check the audio |
| Paulo Coelho | /ˈpaʊloʊ kuˈeɪljoʊ/ | best guess at the en-US reading; check the audio |
| Garcia | /gɑːrˈsiːə/ | |
| Argentina, Italy, Japanese, Portuguese | /ˌɑːrdʒənˈtiːnə/, /ˈɪtəli/, /ˌdʒæpəˈniːz/, /ˌpɔːrtʃəˈgiːz/ | |

## 3. Function words (in addition to zh §B and §C)
- **which**: relative *which* is unstressed (`the bus which goes downtown` /… wɪtʃ ˈgoʊz …/). Interrogative *which* is stressed (`Which line goes downtown?` /ˈwɪtʃ …/). Same rule as zh's relative *who / where*.
- **into**: as a preposition it is weak (`I'm really into hiking` /… ɪntə ˈhaɪkɪŋ/). In the citation form of a phrasal verb it is strong (`run into` /ˈrʌn ˈɪntuː/), like `look for` /ˈlʊk fɔːr/ in zh §C.3.
- **does**: auxiliary /dəz/, main verb /ˈdʌz/ (`He does the dishes every day`), per zh §B.
- **before**: as a preposition it is unstressed (`before leaving` /bɪfɔːr ˈliːvɪŋ/). As an adverb at the end of a sentence it is stressed (`I had never seen snow before` /… bɪˈfɔːr/).
- **about, around, across, after, until, within**: unstressed as prepositions (/əbaʊt/, /əraʊnd/, /əkrɔːs/, /æftər/, /əntɪl/, /wɪðɪn/). They keep lexical stress when stranded or used as adverbs (`What's it about?` /əˈbaʊt/, `around here` /əˈraʊnd ˈhɪr/).
- **to before a vowel**: /tu/ (`I'd like to order`, `married to a doctor`, `writing to ask`), per zh §B.

## 4. Words specific to this course
- **exit**: /ˈeksɪt/ everywhere (deck «Falsos cognatos», false-friends lesson). Not /ˈegzɪt/.
- **-ed endings in the pron lesson and the «Armadilhas» deck**: /t d ɪd/ as heard: `worked` /ˈwɜːrkt/, `played` /ˈpleɪd/, `wanted` /ˈwɑːntɪd/, `delayed` /dɪˈleɪd/.
- **Minimal pairs**: `head / red` /ˈhed/ /ˈred/; `cold / code` /ˈkoʊld/ /ˈkoʊd/; `team / teen` /ˈtiːm/ /ˈtiːn/; `bad / bed` /ˈbæd/ /ˈbed/; `hot / rot` /ˈhɑːt/ /ˈrɑːt/.
- **Stress-trap words** in the pron lesson and the «Cognatos e sílaba tônica» deck: `comfortable` /ˈkʌmftərbl/, `chocolate` /ˈtʃɑːklət/, `vegetable` /ˈvedʒtəbl/, `Wednesday` /ˈwenzdeɪ/, `McDonald's` /məkˈdɑːnldz/, `photographer` /fəˈtɑːgrəfər/.

## 5. Respellings in Portuguese letters
- They appear only as **error illustrations** in « », never as the aid: «feicibuqui», «bigui», «istudent», «tchim», «côud», «bédji».
- The wrong reading of *worked* is spelled **«uórquid»** in every file. It was «uórkid» in lessons.js and «uor-kid» in decks.js.
- Card notes name the stressed syllable with the **English letters in lowercase quotes**, plus IPA where it helps: `a tônica é "ma": /ˌɪnfərˈmeɪʃn/`. They do not use capitalised pseudo-syllables («MA», «SEI», «FO»), which read as a Portuguese respelling. Eleven notes in «Cognatos e sílaba tônica» were changed.
- *thirTEEN / THIRty* in the numbers lesson stays: capitals mark stress on the English spelling itself, as Toda Matéria does.
