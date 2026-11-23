# ceb-en IPA rules (settled)

Binding for every `pron` field: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base.** docs/profiles/ceb.md §6 and `tools/content/zh/PRON-RULES.md`, unchanged: OALD American values in school symbols, one pair of slashes, ˈ on every content word, weak forms for function words, syllabic /l/ and /n/ as in zh §A4, ASCII `g`, plain `r`, no ɚ / ɝ / flap. `pronPattern` is string-identical to zh's.

**Checker.** `node tools/content/ceb/pron_check.js [summary|phrases|words|rules|all]` (copied from zh, paths only changed). State after the cold review (2026-11-23): 850 pairs, 805 words, **0 phrase conflicts, 1 word conflict (intended, below), 0 rule hits**. A separate comparison with `tools/content/zh` found 693 identical English strings, all with the identical transcription (0 differences), and no ceb-only row that transcribes a word differently from zh, except the one below.

## Conventions settled for rows that zh does not have

| Case | Form | Note |
|---|---|---|
| Philippine place names (en-US voice, to confirm against the clips) | Cebu /seɪˈbuː/, Cebuano /seɪˈbwɑːnoʊ/, Davao /ˈdɑːvaʊ/, the Philippines /ðə ˈfɪlɪpiːnz/, Philippine /ˈfɪlɪpiːn/ | profile §6 rule 7. *Bohol* and *Manila* are not transcribed anywhere yet; use /boʊˈhoʊl/, /məˈnɪlə/ |
| Names | Ana /ˈɑːnə/, Kim /ˈkɪm/, Jose Rizal /hoʊˈzeɪ rɪˈzɑːl/, Jollibee /ˈdʒɑːlibiː/ | the English reading, not the Bisaya one (no /h/ → /x/, no tapped r) |
| Local food word | lechon /leˈtʃɔːn/ | stress on the last syllable, as the en-US voice reads the loan |
| Citation form of a function word on a pronunciation card | they /ˈðeɪ/ (deck «Bantayi ang paglitok») | the **only** word conflict the checker reports: /ðeɪ/ inside sentences, /ˈðeɪ/ when the card is the word alone (profile §6 rule 2: a function word that stands alone takes ˈ) |
| Spelled abbreviations | AC /ˌeɪ ˈsiː/, LOL /ˌel oʊ ˈel/ | secondary stress on all letters but the last |
| *the* before a vowel sound | /ði/: the AC /ði ˌeɪ ˈsiː/, the ending /ði ˈendɪŋ/, the extra mile /ði ˈekstrə/ | |
| *to* before a vowel sound | /tu/: need to add /tu ˈæd/ | zh §B |
| Hyphenated compounds | one token when the English is one written word: must-watch /ˈmʌstwɑːtʃ/, binge-watched /ˈbɪndʒwɑːtʃt/; *all-you-can-eat* is written as four words /ˈɔːl ju kən ˈiːt/ (the checker cannot align it; checked by hand) | |
| Prepositions of two syllables in mid-sentence | unstressed with full vowels: under /ʌndər/, across /əkrɔːs/, around /əraʊnd/ | zh §C2 |
| Minimal pairs added for Bisaya speakers | ship /ˈʃɪp/ · sheep /ˈʃiːp/, full /ˈfʊl/ · fool /ˈfuːl/, bad /ˈbæd/ · bed /ˈbed/ · bud /ˈbʌd/, Sue /ˈsuː/ · zoo /ˈzuː/, bus /ˈbʌs/ · buzz /ˈbʌz/, day /ˈdeɪ/ · they /ˈðeɪ/, attract /əˈtrækt/, ceremony /ˈserəmoʊni/ | identical in the deck and in the `pron` lesson |
| Final clusters and endings | always written in full: attract /əˈtrækt/, asked /ˈæskt/, salvaged /ˈsælvɪdʒd/, headaches /ˈhedeɪks/ | profile §6 rule 6; this is a teaching point for this audience |

## Not changed in this review
No transcription was edited: nothing conflicted. The Bisaya sound anchors in the `pron` lesson table («"sy" sa *syudad*», «"dy" sa *dyip*», «"e" sa *kape*», «"o" sa *oras*») are prose, not `pron` fields; they are on the native-check list in REVIEW.md.
