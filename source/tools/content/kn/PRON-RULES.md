# kn-en pronunciation aid: settled rules

Binding for every `pron` field: the second field of a card in decks.js, the pron column of IDIOMS in extra.js, the middle of every `{{ex:English|pron|meaning}}` row in lessons.js and more/*.js, and every respelling quoted in lesson prose or a card note.

The base is docs/profiles/kn.md §6 (the key) and PRON-TOOL.md (the converter and its nine decisions). This file records what the review settled on top of them. No aid is written by hand.

**Source of every aid.** The exact English string in `pron_lookup.json`, or the output of `node tools/content/kn/pron_kn.js "/ipa/"` for IPA written in the zh conventions (tools/content/zh/PRON-RULES.md).
**Checker.** `node tools/content/kn/pron_check.js` must report 0 for pattern, encoding, banned, doubled, diff, conflicts, word mismatches and prose mismatches. `lint.js` blocks one English string with two aids.

## 1. One string, one aid
A repeated English string carries the same aid in every file (decks, lessons, more/*, idioms). After the review the checker finds 0 conflicts and 0 word mismatches.

## 2. Names and places: one IPA per name
The IPA is the starting point given in PRON-TOOL.md, or the writer's where PRON-TOOL.md has none (Mumbai, Kuvempu, Japan). None has been checked against the en-US voice. If the voice says a name differently, change the IPA here, convert it again and replace every row.

| Name | IPA | Aid | Source |
|---|---|---|---|
| Divya | /ˈdɪvjə/ | ˈಡಿವ಼್ಯ | PRON-TOOL |
| Kiran | /ˈkɪrən/ | ˈಕಿರನ್ | PRON-TOOL |
| Rao | /ˈraʊ/ | ರೌ | PRON-TOOL |
| Shetty | /ˈʃeti/ | ˈಶೆಟಿ | PRON-TOOL (the name appears only in a dialogue, which has no aid) |
| Bengaluru | /ˌbeŋgəˈlʊruː/ | ಬೆಂಗˈಲುರೂ | PRON-TOOL |
| Mysuru | /maɪˈsʊruː/ | ಮೈˈಸುರೂ | PRON-TOOL |
| Mumbai | /mʊmˈbaɪ/ | ಮುಮ್ˈಬೈ | writer (deck 22) |
| Kannada | /ˈkɑːnədə/ | ˈಕಾನಡ | PRON-TOOL |
| India / Indian | /ˈɪndiə/ /ˈɪndiən/ | ˈಇನ್ಡಿಅ / ˈಇನ್ಡಿಅನ್ | PRON-TOOL |
| Hampi | /ˈhæmpi/ | ˈಹ್ಯಾಮ್ಪಿ | PRON-TOOL |
| Kuvempu | /kʊˈvempuː/ | ಕುˈವ಼ೆಮ್ಪೂ | writer (lesson passive) |
| Japan | /dʒəˈpæn/ | ಜˈಪ್ಯಾನ್ | writer (lesson perfect) |
| dosa | /ˈdoʊsə/ | ˈಡೋಸ | PRON-TOOL |
| cricket | /ˈkrɪkɪt/ | ˈಕ್ರಿಕಿಟ್ | PRON-TOOL |

The aid shows what the American voice says, so it differs on purpose from the Kannada spelling of the same name in the meaning (ದಿವ್ಯಾ, ಕಿರಣ್, ರಾವ್, ಬೆಂಗಳೂರು, ಮೈಸೂರು, ಕನ್ನಡ): ಟ / ಡ for t / d, a short final vowel, ವ಼ for v, no doubled consonant, no ಳ or ಣ.

## 3. Years are read in two halves
*2019* = twenty nineteen (ˈಟ್ವೆನ್ಟಿ ನೈನ್ˈಟೀನ್), *2015* = twenty fifteen (ˈಟ್ವೆನ್ಟಿ ಫ಼ಿಫ಼್ˈಟೀನ್), *2020* = twenty twenty (ˈಟ್ವೆನ್ಟಿ ˈಟ್ವೆನ್ಟಿ). The row *I've lived here since 2015.* used "two thousand fifteen"; it now follows the other two rows and the deck-22 note that teaches this reading.

## 4. Weak forms (from the IPA, PRON-TOOL hand case 2)
*to* is ಟ before a consonant and ಟು before a vowel (*been to India* ಟು ˈಇನ್ಡಿಅ); *the* is ದ಼ before a consonant and ದ಼ಿ before a vowel (*the Indian embassy*); *a* ಅ, *an* ಅನ್, *of* ಅವ಼್, *can* ಕನ್, *for* ಫ಼ರ್, *you* ಯು (ಯೂ when it stands alone or is stressed), *are* ಅರ್, *your* / *you're* ಯುರ್.

## 5. What a respelling may and may not contain
- No ZWJ in any aid; ZWNJ only in the rule 13a slot: ್ + ZWNJ before a dotted letter, except after ರ (ಟ್ವೆಲ್‌ವ಼್, ˈಸಿಲ್‌ವ಼ರ್, ಡಾಗ್‌ಜ಼್; but ˈನರ್ವ಼ಸ್), written by the tool (pre-merge review 2026-11-23: without it a dotted subscript falls back to a visible ್ in some fonts and not others; with it every font shows the same visible ್). No Kannada digit; no Latin letter; ˈ is U+02C8 and stands in every word of two or more syllables and only there (rule 2 as amended 2026-11-23: the tool supplies it where the zh IPA has none, e.g. ಅˈಬೌಟ್, ಅˈಕ್ರಾಸ್, ಬಿˈಕಜ಼್, ˈನೈನ್ಟಿ).
- The dot (U+0CBC) only on ಫ಼ ಜ಼ ವ಼ ಥ಼ ದ಼ ಶ಼, typed after the letter and before the ್ or vowel sign. The dot never appears in ordinary prose or in a meaning: loanwords there keep their ordinary spelling (ಫೋನ್, ಕಾಫಿ, ಆಫೀಸ್).
- ಙ್ for /ŋ/ at the end of a word or before a vowel (ˈಮೋರ್ನಿಙ್); ಂ only for /ŋ/ before k / g.
- The last consonant always carries ್; one English consonant is never written twice.

## 6. Respellings quoted in prose
- A correct respelling quoted in a note or a lesson body is copied from the `pron` field of that word, with its ˈ (the checker's PROSE test).
- A wrong pronunciation shown as a warning is written in ordinary Kannada spelling, in straight double quotes, with no ˈ and no dot: "ಬಸ್ಸು", "ಕಾರು", "ಇಸ್ಕೂಲು", "ಜೂ". It is never put in a `pron` field.

## 7. Contrast pairs in deck 18 and the `pron` lesson
Kept: vine / wine, vest / west, law / low, caught / coat, saw / so. Removed in the review: the card *Jew* and the pair zoo / Jew (lead ruling); the zoo card and the lesson now say only that z is neither ಜ nor ಸ.
