# tl-en IPA rules (settled)

The base is `docs/profiles/tl.md` §6 and `tools/content/zh/PRON-RULES.md`, which is binding for tl without change (symbols, syllabic consonants, weak and strong forms, stress marks, format). Every English string that also exists in zh-en or th-en carries the same transcription here: a cross-check of all 845 pairs found 0 differences. This file records only what the tl course adds.

**Checker:** `node tools/content/tl/pron_check.js [summary|phrases|words|rules|all]` (a copy of the zh checker that reads this folder). It reports 0 phrase conflicts, 0 word conflicts and 0 rule hits. It does not see IPA that sits alone in a table cell, so read lesson tables by eye.

## A. Filipino names and places (as the en-US voice says them)
| word | pron | where |
|---|---|---|
| Ana | /ˈɑːnə/ | decks, lessons, a1 |
| Paolo | /ˈpaʊloʊ/ | lessons |
| Santos | /ˈsæntoʊs/ | decks (two cards). Final /s/, not /z/. Use this form everywhere |
| Manila | /məˈnɪlə/ | decks, lessons, a1, b1 |
| Cebu | /seˈbuː/ | lessons, a1 |
| the Philippines | /ðə ˈfɪlɪpiːnz/ | decks, a2, b1 |
| Philippine (adjective) | /ˈfɪlɪpiːn/ | decks |
| Filipino | /ˌfɪlɪˈpiːnoʊ/ | b1 |
| Tagalog | /təˈgɑːlɔːg/ | decks, a1, a2 |
| pesos | /ˈpeɪsoʊz/ | lessons |
| adobo | /əˈdoʊboʊ/ | a1, a2 |
| jeepney | /ˈdʒiːpni/ | a1 |
| mango | /ˈmæŋgoʊ/ | b1 |

Liza, Reyes, Makati, Boracay and Davao appear only in translations, dialogue lines or prose, which carry no transcription. If one gets a `pron`, take it from profile §6 rule 8 and add it here.

## B. Words first transcribed in this course
- Pair cards and pair rows: ship /ˈʃɪp/, sheep /ˈʃiːp/, full /ˈfʊl/, fool /ˈfuːl/, cat /ˈkæt/, cut /ˈkʌt/, cot /ˈkɑːt/, zoo /ˈzuː/, Sue /ˈsuː/, his /ˈhɪz/, hiss /ˈhɪs/. **His** takes ˈ only as a citation word on its own card or row; inside a sentence it is the weak /hɪz/ of the zh course.
- Ingles-Pinoy deck and lesson: power outage /ˈpaʊər ˈaʊtɪdʒ/, fridge /ˈfrɪdʒ/, sneakers /ˈsniːkərz/, traffic /ˈtræfɪk/, salvage /ˈsælvɪdʒ/, bold /ˈboʊld/, prepaid /ˌpriːˈpeɪd/, bottled /ˈbɑːtld/, marker /ˈmɑːrkər/, bunk /ˈbʌŋk/, graduated /ˈgrædʒueɪtɪd/, mistake /mɪˈsteɪk/, opinion /əˈpɪnjən/, regarding /rɪˈgɑːrdɪŋ/, January /ˈdʒænjueri/, cope /ˈkoʊp/, result /rɪˈzʌlt/, based /ˈbeɪst/, form /ˈfɔːrm/.
- Pre-merge review cards: huge /ˈhjuːdʒ/ (I'm a huge fan!), went over my head /ˈwent ˈoʊvər maɪ ˈhed/ (two-syllable *over* of the idiom *go over someone's head* keeps ˈ, as in pull over /ˈpʊl ˈoʊvər/; zh C.3 polysyllable rule).
- Others: basketball /ˈbæskɪtbɔːl/, vegetables /ˈvedʒtəblz/, nature /ˈneɪtʃər/, author /ˈɔːθər/, hour /ˈaʊər/, kid /ˈkɪd/, still /ˈstɪl/, took /ˈtʊk/.
- In prose only (pron lesson): ceremony /ˈserəmoʊni/, comfortable /ˈkʌmftəbl/, dogs /ˈdɔːgz/, back /ˈbæk/, shop /ˈʃɑːp/.

## C. Decisions made in the review
1. **McDonald's is /məkˈdɑːnldz/** in the deck and in the pron lesson table (zh rule A.4: no ə before a final syllabic /l/). The lesson had /məkˈdɑːnəldz/.
2. **Stranded and citation prepositions** follow zh rule C.3: based on /ˈbeɪst ɑːn/, result in /rɪˈzʌlt ɪn/, cope with /ˈkoʊp wɪð/ (no ˈ on the preposition, strong vowel where one exists).
3. **Letter names** are written as the shared alphabet deck writes them, each with ˈ (/ˈeɪ/, /ˈdʌbəljuː/). In card notes and `why` lines a letter name may be quoted without ˈ when the point is only the first sound («/em/», «/juː/»).
4. **Error pronunciations are never transcribed.** They are written in quotes as a Filipino reader would spell them («tink», «fretty», «dis»), so no wrong IPA enters the checker.
5. **Plain-text fields never put two slashes together:** «/s/, /z/ o /ɪz/».

## D. For the audio check
The transcriptions in A are approximations of what the en-US voice does with Filipino words. Listen to Santos, Cebu, Paolo, Tagalog, adobo and jeepney first; if the voice says something else, change the row here and every `pron` that uses it.
