# ur-en IPA rules (settled in the cold review, 2026-11-23)

Binding for every `pron` field: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base:** `tools/content/zh/PRON-RULES.md` applies as written (profile ur.md §6): OALD North American values in the school symbol set, one pair of slashes, ˈ on every content word, weak forms, syllabic consonants, ` ‖ ` between sentences. This file only records what the Urdu course adds.

**Checks run in the review** (scratch copies of `tools/content/zh/pron_check.js` with the folder switched to `ur`, plus a cross-course comparison):
- 874 English → IPA pairs, 804 word types: 0 phrase conflicts, 1 word "conflict" that is allowed (*they*: /ˈðeɪ/ as a citation card, /ðeɪ/ unstressed in a sentence), 2 rule hits that are the lexical exception below.
- 754 distinct English strings in ur-en; every one that also exists in zh-en or ar-en (1,311 matches) carries the identical IPA. 0 differences.
- `lint.js`: 0 blocking (the same English text never carries two aids).

## A. Names and places (as the en-US voice says them; not yet confirmed by ear)

| English | IPA | note |
|---|---|---|
| Sara | /ˈserə/ | ar-en row |
| Ali, Ali's | /ˈɑːli/, /ˈɑːliz/ | |
| Khan | /ˈkɑːn/ | |
| Jay | /ˈdʒeɪ/ | short for Jamshed in the card note |
| Pakistan | /ˈpækɪstæn/ | |
| Pakistani | /ˌpækɪˈstæni/ | stress moves to the third syllable |
| Karachi | /kəˈrɑːtʃi/ | |
| Lahore | /ləˈhɔːr/ | |
| Urdu | /ˈʊrduː/ | |
| Dubai | /ˌduːˈbaɪ/ | ar-en row |
| rupees | /ruːˈpiːz/ | |
| Boston, Hilton | /ˈbɔːstən/, /ˈhɪltən/ | names keep ə (zh rule A4) |

The lead fixed these six in the review brief: Pakistani, Pakistan, Karachi, Lahore, Urdu, Khan. They must not vary between files.

## B. Lexical decisions

- **difficult /ˈdɪfɪkəlt/** keeps ə before the final cluster (OALD form), like *distance* /ˈdɪstəns/ in the zh rules. The zh checker reports it as a "syllabic" hit; it is intended. The word is not in zh-en.
- **I'm older than you. /aɪm ˈoʊldər ðən ˈjuː/** — *than* weak, final *you* strong (contrast), the same in decks.js (deck 22) and the `adjectives` and `pakistani-english` lessons.
- **he's / she's / they're** as weak forms: /hiz/, /ʃiz/, /ðer/.
- **Years** are written as the voice reads them: 2019 /ˈtwenti ˌnaɪnˈtiːn/, 2020 /ˈtwenti ˈtwenti/, 2015 /ˈtuː ˈθaʊznd ˌfɪfˈtiːn/ (profile §6 worked example). The two styles are both natural; each year has one form in every file.
- **will** unstressed after a pronoun is /wəl/ in one row (I think it will rain. /aɪ ˈθɪŋk ɪt wəl ˈreɪn/), the form the Hindi and Arabic courses carry for the same sentence. The zh weak-form table does not list *will*; left for the lead to settle across courses.
- **where**: /ˈwer/ as a question word (also in an indirect question: He asked where I lived.), unstressed /wer/ as a relative (the cafe where we met), as zh rule C2.
- **about** in *How about you?* / *What about you?* is unstressed /əbaʊt ˈjuː/ (function word before a contrastive *you*); the citation card is /əˈbaʊt/.

## C. IPA inside Urdu text (right-to-left lines)

A slashed group that **begins with a stress mark** (/ˈsiː/, /ˌfɪfˈtiːn/) is displayed with the mark and the first slash at the wrong end when it stands inside an Urdu sentence: the slash and ˈ are direction-neutral characters, so they attach to the Urdu text before them. Groups that begin with a letter (/v/, /ð/, /ə/, /əˈbaʊt/, /fəst/) are displayed correctly.

One treatment everywhere:
1. **`pron` fields** are untouched: the engine shows them in a left-to-right box.
2. **Lesson bodies (HTML):** wrap the group in `<b>…</b>` (`<b>/ˈsiː/</b>`); the engine isolates `<b>` in lesson bodies.
3. **Plain-text fields** (card notes, check questions, options, `why`, practice prompts and hints): no slashed group that begins with ˈ or ˌ. Either name the single sound (/ɔː/, /iː/), or write a one-syllable word without the stress mark (/ræp/, /aɪl/, /kɑːm/, letter names /eɪ/, /dʒiː/, /ziː/), or say where the stress is in words («زور پہلے حصے پر ہے»). These bare groups are sound notes, not `pron` values, so the "every pron has ˈ" rule does not apply to them.
4. Never a direction mark.

## D. Not done
- No transcription was confirmed by ear against the en-US voice (profile §11).
- 23 rows could not be aligned word by word by the checker (hyphenated words, numbers, abbreviations); they were compared as whole phrases only.
