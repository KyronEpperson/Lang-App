# zh-en IPA rules (settled)

These rules are binding for every `pron` field: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

The base is docs/profiles/zh.md §6: OALD North American values in the school symbol set, slashes, ˈ on every content word, and weak forms. The rules below settle cases §6 leaves open. Where the five writers disagreed, the majority form or the OALD form won.

**Checker:** `node tools/content/zh/pron_check.js [summary|phrases|words|rules|all]`. It currently reports 0 phrase conflicts, 0 word conflicts (outside the allowed weak/strong pairs) and 0 rule hits. Every `pron` must also match profile.json `pronPattern`, which `validate.js` checks.

## A. Symbols
1. School symbols, American values: oʊ (not əʊ), ɑː for LOT (hot /ˈhɑːt/), ɔː for THOUGHT (talk, dog, coffee), ɜːr, ər, ɪr / er / ʊr, ɑːr / ɔːr.
2. Use ASCII `g` and plain `r`. Never ɡ, ɹ, ɚ, ɝ or a flap symbol. The audio carries the flap, and the pron lesson explains it.
3. Final unstressed -y is /i/ (very /ˈveri/, movie /ˈmuːvi/). Unstressed long vowels lose ː.
4. **Syllabic consonants at the end of a word** (also before a final -s / -d / -t) take no ə. These are the OALD-style forms as remembered; profile §11 notes that OALD was not fetched, so the rule rests on the majority forms already in the course.
   - **/l/ after any consonant:** people /ˈpiːpl/, table /ˈteɪbl/, apple /ˈæpl/, ankle /ˈæŋkl/, Google /ˈguːgl/, beautiful /ˈbjuːtɪfl/, travel /ˈtrævl/, devil /ˈdevl/, little /ˈlɪtl/, bottle /ˈbɑːtl/, canceled /ˈkænsld/.
   - **/n/ after t, d, s, z, ʃ, ʒ, v:** seven /ˈsevn/, eleven /ɪˈlevn/, station /ˈsteɪʃn/, medicine /ˈmedɪsn/, season /ˈsiːzn/, isn't /ˈɪznt/, doesn't /ˈdʌznt/, didn't /ˈdɪdnt/, shouldn't /ˈʃʊdnt/, student /ˈstuːdnt/, written /ˈrɪtn/, eaten /ˈiːtn/, important /ɪmˈpɔːrtnt/, patience /ˈpeɪʃns/, actions /ˈækʃnz/.
   - **/n/ keeps ə after other consonants and after tʃ / dʒ:** open /ˈoʊpən/, taken /ˈteɪkən/, spoken /ˈspoʊkən/, stolen /ˈstoʊlən/, children /ˈtʃɪldrən/, question /ˈkwestʃən/, moment /ˈmoʊmənt/, million /ˈmɪljən/. After a vowel, ə stays too: towel /ˈtaʊəl/.
   - **Inside a word, before another vowel, ə stays**, as in the citation form of the longer word: listening /ˈlɪsənɪŋ/, air conditioner /kənˈdɪʃənər/. One lexical exception: distance /ˈdɪstəns/.
   - **Names keep ə:** Boston /ˈbɔːstən/, Hilton /ˈhɪltən/.
   - Changed in this review (11 rows): ˈsevən, ɪˈlevən, ˈsteɪʃən, ˈpiːpəl, ˈmedɪsən, ˈɪzənt, ˈdʌzənt, ˈdɪdənt.

## B. Weak and strong forms
| word | unstressed (default) | strong (alone, contrast, stranded) |
|---|---|---|
| a / an / the | ə / ən / ðə (ði before a vowel sound) | — |
| to | tə; **tu before a vowel** (like to order /tu ˈɔːrdər/, like to ask, writing to ask) | tuː (look forward to) |
| for / from / at / of | fər / frəm / ət / əv | fɔːr / frʌm / æt |
| and / or / but | ənd / ər / bət | not used in any row. In *And you?* only *you* is stressed: /ənd ˈjuː/ (profile §6) |
| can / could / should / would | kən / **kəd / ʃəd / wəd** | — (not stressed in any row) |
| do / does / did / have / has / had (auxiliary) | də / dəz / dɪd / həv / həz / həd | duː, dʌz… as main verbs (ˈduː, ˈhæv, ˈdɪd) |
| have to / has to | ˈhæf tə / ˈhæs tə | |
| would have / should have | wəd əv / ʃəd əv | |
| you / your / you're | ju / **jʊr / jʊr** | ˈjuː (How about you?, After you.) |
| me / he / she / we | mi / hi / ʃi / wi | ˈmiː (Me neither., It's on me.) |
| that (relative) / that (demonstrative) | ðət | ˈðæt |
| there (existential) / there (adverb) | ðer | ˈðer (Hang in there.) |
| so (conjunction) / so (adverb) | soʊ | ˈsoʊ (so happy) |

- Could, should and would were split between strong /kʊd ʃʊd wʊd/ (11 deck rows) and weak /kəd ʃəd wəd/ (lesson rows), sometimes on the same sentence. All unstressed modals now take the OALD weak form.
- Your and you're were split between /jʊr/ and /jər/. They are now /jʊr/ everywhere, which is the OALD citation form and was the majority.

## C. Stress (ˈ)
1. §6 rule 3 applies as written: the closed function-word list stays unmarked, and every other word gets ˈ, monosyllables included.
2. The function-word list also covers the prepositions and conjunctions the writers met: within, across, through, until, past (a quarter past ten), although, when, who / where (relative).
3. **Stranded and citation prepositions** take their strong vowel. A monosyllable takes no ˈ: Where are you from? /ˈwer ər ju frʌm/, Which stop should I get off at? /… ˈɔːf æt/, look for /ˈlʊk fɔːr/, look forward to /… tuː/. A polysyllable keeps its lexical stress: What's it about? /əˈbaʊt/, look after /ˈæftər/. (Changed: ˈfrʌm → frʌm.)
4. Phrasal-verb particles (up, out, on, off, in, over, down) are adverbs and take ˈ: pick up /ˈpɪk ˈʌp/, check in /ˈtʃek ˈɪn/, Turn it on /ˈtɜːrn ɪt ˈɑːn/.
5. ˌ (secondary stress) appears only inside long words, in -teen numbers (/ˌθɜːrˈtiːn/), in TV /ˌtiː ˈviː/, and in letter-by-letter abbreviations (/ˌel oʊ ˈel/).

## D. Format
- One pair of slashes, words separated by single spaces, and no punctuation, capitals or digits.
- ` ‖ ` separates sentences inside one row.
- Alternatives are written as two slashed groups: `/ˌfɪfˈtiːn/ /ˈfɪfti/`.
- Numbers are written as words, abbreviations letter by letter, and Chinese names as the en-US voice says them (Li Wei /ˈliː ˈweɪ/, Shanghai /ˌʃæŋˈhaɪ/, Beijing /ˌbeɪˈdʒɪŋ/, Chengdu /ˌtʃeŋˈduː/).
- Codas are always written in full (-s /s z ɪz/, -ed /t d ɪd/, clusters). Write no inserted vowels. The one deliberate exception is the error illustration /ˈbedə/ in the pron lesson prose.
