# ar-en IPA rules (settled)

These rules bind every `pron` field: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base.** Profile ar.md §6 adopts the Chinese course's notation unchanged: OALD North American values in the school symbol set, slashes, ˈ on every content word, and weak forms. tools/content/zh/PRON-RULES.md is binding as written. This file restates it for ar-en, adds the Arabic names and ar-only rows, and records the AR-REVIEWER check (2026-11-18).

**Checker:** `node tools/content/ar/pron_check.js [summary|phrases|words|rules|all]`. It reports 0 phrase conflicts, 0 word conflicts (outside the allowed weak/strong pairs) and 0 rule hits over 807 pairs. Every `pron` must also match profile.json `pronPattern` (byte-identical to zh's), which `validate.js` checks.

**Check against zh (2026-11-18).** Each ar English → IPA pair was compared with every pair in tools/content/zh/ for the same English (normalised for case and final punctuation). Same English with different IPA: **0**. Of the 86 ar pairs with no zh counterpart, all were read by hand: the localised cards (Sara, Egypt, Dubai, Arabic, Morocco, Haddad, Saudi), the 20 appended deck-18 cards, the 24 deck-21 cards, and the ar-only rows in `pron`, `be`, `numbers`, `be-2`, `arabic-traps`, `articles-2` and `passive`. No changes were needed.

## A. Symbols
1. School symbols with American values: oʊ (not əʊ), ɑː for LOT (hot /ˈhɑːt/), ɔː for THOUGHT (talk, dog, coffee), and ɜːr, ər, ɪr / er / ʊr, ɑːr / ɔːr.
2. ASCII `g` and plain `r`. Never ɡ, ɹ, ɚ, ɝ or a flap symbol. The audio carries the flap, and the `numbers` lesson mentions it in prose (thirty: "t قريبة من d خفيفة").
3. Final unstressed -y is /i/ (very /ˈveri/, ferry /ˈferi/). Unstressed long vowels lose ː.
4. **Syllabic consonants at the end of a word** (also before a final -s / -d / -t) take no ə.
   - **/l/ after any consonant:** people /ˈpiːpl/, table /ˈteɪbl/, apple /ˈæpl/, ankle /ˈæŋkl/, little /ˈlɪtl/, travel /ˈtrævl/, devil /ˈdevl/, hospital /ˈhɑːspɪtl/, canceled /ˈkænsld/, wonderful /ˈwʌndərfl/.
   - **/n/ after t, d, s, z, ʃ, ʒ, v:** seven /ˈsevn/, eleven /ɪˈlevn/, station /ˈsteɪʃn/, student /ˈstuːdnt/, listen /ˈlɪsn/, isn't /ˈɪznt/, doesn't /ˈdʌznt/, didn't /ˈdɪdnt/, written /ˈrɪtn/, eaten /ˈiːtn/, important /ɪmˈpɔːrtnt/, information /ˌɪnfərˈmeɪʃn/, Egyptian /ɪˈdʒɪpʃn/, patience /ˈpeɪʃns/.
   - **/n/ keeps ə after other consonants and after tʃ / dʒ:** open /ˈoʊpən/, taken /ˈteɪkən/, stolen /ˈstoʊlən/, children /ˈtʃɪldrən/, question /ˈkwestʃən/, moment /ˈmoʊmənt/, million /ˈmɪljən/. After a vowel ə stays too: towel /ˈtaʊəl/.
   - **Inside a word, before another vowel, ə stays:** listening /ˈlɪsənɪŋ/, air conditioner /kənˈdɪʃənər/. One lexical exception: distance /ˈdɪstəns/.
   - **Names keep ə:** Boston /ˈbɔːstən/, Hilton /ˈhɪltən/.

## B. Weak and strong forms
| word | unstressed (default) | strong (alone, contrast, stranded) |
|---|---|---|
| a / an / the | ə / ən / ðə (ði before a vowel sound: the airport /ði ˈerpɔːrt/) | — |
| to | tə; **tu before a vowel** (like to order /tu ˈɔːrdər/, married to a doctor /tu ə/) | tuː (look forward to) |
| for / from / at / of | fər / frəm / ət / əv | fɔːr / frʌm / æt |
| and / or / but | ənd / ər / bət | In *And you?* only *you* is stressed: /ənd ˈjuː/ |
| can / could / should / would | kən / kəd / ʃəd / wəd | — (no stressed row) |
| do / does / did / have / has / had (auxiliary) | də / dəz / dɪd / həv / həz / həd | ˈduː, ˈhæv, ˈdɪd as main verbs |
| have to / has to | ˈhæf tə / ˈhæs tə | |
| would have / should have | wəd əv / ʃəd əv | |
| you / your / you're | ju / jʊr / jʊr | ˈjuː (How about you?, After you.) |
| me / he / she / we | mi / hi / ʃi / wi | ˈmiː (Me neither., It's on me.) |
| that (relative) / that (demonstrative) | ðət | ˈðæt |
| there (existential) / there (adverb) | ðer | ˈðer (Hang in there.) |
| so (conjunction) / so (adverb) | soʊ | ˈsoʊ (so happy, I hope so) |

## C. Stress (ˈ)
1. The closed function-word list stays unmarked; every other word gets ˈ, monosyllables included (/ˈjes/, /ˈpɑːrk/).
2. The list also covers within, across, through, until, past (a quarter past ten), under, although, when, who / where (relative).
3. **Stranded prepositions** take their strong vowel; a monosyllable takes no ˈ: Where are you from? /ˈwer ər ju frʌm/, Which stop should I get off at? /… ˈɔːf æt/, look for /ˈlʊk fɔːr/. A polysyllable keeps its lexical stress: What's it about? /əˈbaʊt/, look after /ˈlʊk ˈæftər/.
4. Phrasal-verb particles take ˈ: pick up /ˈpɪk ˈʌp/, turn on /ˈtɜːrn ˈɑːn/, Turn it on /ˈtɜːrn ɪt ˈɑːn/.
5. ˌ appears only inside long words, in -teen numbers (/ˌθɜːrˈtiːn/), in compounds read as one stress unit (/ˌduːˈbaɪ/, /ˌtwentiˈfaɪv/), in TV /ˌtiː ˈviː/ and in letter-by-letter abbreviations (/ˌel oʊ ˈel/, /ˌjuː eɪ ˈiː/).

## D. Format
- One pair of slashes per group, words separated by single spaces, no punctuation, capitals or digits.
- ` ‖ ` separates sentences inside one row.
- Alternatives are two slashed groups separated by one space: `/ˈtɜːrn ˈɑːn ðə ˈlaɪt/ /ˈtɜːrn ðə ˈlaɪt ˈɑːn/`, `/ˌfɪfˈtiːn/ /ˈfɪfti/`.
- Numbers as words; abbreviations letter by letter (ATM /ˌeɪ tiː ˈem/, UAE /ˌjuː eɪ ˈiː/).
- Codas always in full: -s /s z ɪz/, -ed /t d ɪd/, clusters (street /ˈstriːt/, spring /ˈsprɪŋ/, asked /ˈæskt/, sprained /ˈspreɪnd/, costs /ˈkɔːsts/). **No inserted vowel anywhere**: this is the Arabic-speaker rule that matters most (profile §4.13). The `pron` lesson shows the epenthesis error in Arabic letters («سيتريت», «إستريت», «آسكيد»), never in IPA.
- No direction marks (LRM, RLM, ALM) in or around a `pron` field; the engine isolates `.pron` itself.

## E. Names, places and currency (as the en-US voice says them)
Identical in every file (checked by grep and by pron_check's word table):

| English | IPA |
|---|---|
| Sara | /ˈserə/ |
| Omar (dialogue only, no `pron` row) | — |
| Haddad | /həˈdæd/ |
| Dubai | /ˌduːˈbaɪ/ |
| Cairo | /ˈkaɪroʊ/ |
| Egypt / Egyptian | /ˈiːdʒɪpt/ / /ɪˈdʒɪpʃn/ |
| Morocco | /məˈrɑːkoʊ/ |
| Saudi | /ˈsaʊdi/ |
| the UAE | /ðə ˌjuː eɪ ˈiː/ |
| Arabic | /ˈærəbɪk/ |
| dirhams | /ˈdɪrhæmz/ |

Rows in Arabic prose name a sound with spaced slashes («الصوت /p/», «/p/ و /b/»), never two adjacent slashes.
