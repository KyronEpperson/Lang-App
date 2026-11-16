# vi-en IPA rules (settled)

These rules bind every `pron` field: card `pron` in decks.js, IDIOMS in extra.js, and `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js. The base is docs/profiles/vi.md §6 (General American key, ˈ stress, ‿ linking, endings always written, the profile.json `pronPattern`). The rules below settle what §6 left open. Where the five writers disagreed, the majority form or the dictionary form won.

**Checker:** `node tools/content/vi/pron_check.js [summary|phrases|words|func|rules|all]`. It currently reports 0 phrase conflicts, 0 word conflicts and 19 rule hits. All 19 hits are `align` notes on spelled abbreviations (LOL, ATM, TV) and on numbers written as digits (911, 1998, 2020), which are expected. Against the original files it reported 3 phrase conflicts, 4 word conflicts and 3 missing links.
- **Limit:** the checker reads only the three `pron` sources. It does not check IPA quoted inside notes, table cells or lesson prose (for example «/ˈskedʒuːl/», «/eɪ ˈsiː/»). Those were checked by eye.

## A. Symbols
- Use the §6 key as written: ASCII g, ɑː for LOT/THOUGHT, ɚ / ɝː for r-coloured vowels, oʊ (never əʊ), e (never ɛ).
- Final unstressed -y is /i/ (*happy* /ˈhæpi/).
- **Unstressed syllabic /n/ and /l/ keep ə** (/ˈɪzənt/, /ˈpiːpəl/, /ˈlɪtəl/). This follows the profile's own worked example /ˈdʌzənt/ and was already uniform.

## B. Weak and strong forms
Weak forms are used only for the words in §6 rule 6 and the pronouns in the key's i/u row, plus the three additions marked *new* below. Every other function word keeps its full form.

| word | unstressed (default) | strong |
|---|---|---|
| a / an / the | ə / ən / ðə (ði before a vowel sound) | — |
| to | tə; **tu before a vowel** (*I'd like to order* /tu ˈɔːrdɚ/) | tuː when stranded (*look forward to*) |
| of / for / at | əv / fɚ / ət | ʌv / fɔːr / æt when stranded or in citation (*run out of*, *look for*, *get off at*) |
| **from** (new) | frəm (*I'm from Vietnam*, *working from home*) | frʌm only when stranded (*Where are you from?*) |
| **than** (new) | ðən | — |
| and | ən | ænd at the start of a sentence fragment (*And you?*) |
| can / was | kən / wəz | kænt (*can't*) |
| he / she / you | hi / ʃi / ju | ʃiː on the citation card *she* |
| **me / we** (new) | **mi / wi**, including at the end of a sentence (*Can you help me?*, *She called me.*) | **miː / wiː only under contrast or emphasis** (*It's on me.*, *Me neither.*) |

- **Sentence-final *me*.** Read literally, §6 rule 6 ("strong form when stressed or sentence-final") would give /miː/. Object pronouns at the end of a sentence are not stressed in natural speech, and the writers had split 13 /mi/ against 10 /miː/. The rule therefore follows stress, not position.
- **Full forms kept, not weakened:** are /ɑːr/, were /wɝː/, be /biː/, your / you're /jʊr/, do /duː/, does /dʌz/, have / has /hæv hæz/, could / should / would /kʊd ʃʊd wʊd/, that /ðæt/, some /sʌm/. Each was already uniform across all files. §6 does not list them, and a full form keeps the word recognisable for learners who rely on the transcription. This keeps *was* weak but *were* and *are* full, which is a deliberate inconsistency (see REVIEW.md, top ten).
- **have to / has to** keep the careful form /hæv tə/ and /hæz tə/, not /hæf tə/ (§6 rule 5: write the careful form).

## C. Linking (‿)
1. Link only a consonant sound at the end of one word to a vowel sound at the start of the next (§6 rule 7). Inside an abbreviation, each letter counts as a word (*LOL* /el‿oʊ ˈel/, *ASAP* /eɪ es‿eɪ ˈpiː/).
2. **No link across a comma** (*If it rains, I'll stay home* /ɪf‿ɪt reɪnz aɪl …/). The comma marks a pause.
3. **No link after r or ɚ / ɝː** (*Is there an ATM* /ɪz ðer ən‿…/, *figure out* /ˈfɪgjɚ aʊt/). This is r-linking, which §6 excludes. Vowel-to-vowel links are not marked either (*grow up* /groʊ ʌp/).
4. A link is marked wherever the rule applies. Added in this review: *mind‿opening*, *nine‿oh five*, and *this‿email* in the lesson copy.

## D. Stress
- ˈ goes before the stressed syllable of every word of two or more syllables. Monosyllables are unmarked.
- ˌ is used only in -teen numbers, compounds and long words (*afternoon* /ˌæftɚˈnuːn/, *downtown* /ˌdaʊnˈtaʊn/).
- **Spelled abbreviations:** each letter is a separate word, and only the last letter carries ˈ, with no ˌ: *TV* /tiː ˈviː/, *ATM* /eɪ tiː ˈem/, *AC* /eɪ ˈsiː/, *BRB* /biː ɑːr ˈbiː/. Changed: *tiːˈviː* → *tiː ˈviː*.

## E. Names and Vietnamese words (§6 rule 8, settled forms)
| English | pron |
|---|---|
| Vietnam | /viːetˈnɑːm/ (changed from /viːətˈnɑːm/ in 3 rows; dictionary vowel e) |
| Vietnamese | /viːetnəˈmiːz/ (changed in 4 rows) |
| Hanoi | /hæˈnɔɪ/ |
| Da Nang | /dɑː ˈnɑːŋ/ |
| Ho Chi Minh City | /hoʊ tʃiː mɪn ˈsɪti/ |
| Hue | /hweɪ/ |
| Nguyen | /wɪn/ (the common American reading; the card note says so) |
| pho | /fʌ/ |
| Minh / Lan | /mɪn/ / /lɑːn/ |
| dong (currency) | /dɑːŋ/ |

## F. Other single-word decisions
*what* /wʌt/ (2 rows were /wɑːt/), *really* /ˈriːli/ (1 row was /ˈriːəli/).

## G. Format
One slash group per sentence. Groups are separated by a space, and alternatives are joined by ` / `. There are no capitals, digits or punctuation, and two slashes never stand next to each other.
