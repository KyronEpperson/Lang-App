# pa-en pronunciation aid: rules used at review (2026-11-23)

The aid is the Gurmukhi respelling of General American produced by `pron_pa.js` (see `PRON-TOOL.md`, which stays the authority). This file records the decisions the cold review relied on, so that later edits stay consistent. No aid was respelled by hand at review: every aid is the `pron_lookup.json` value or the output of `node tools/content/pa/pron_pa.js "/ipa/"`.

## Conventions (as the tool writes them)

- ਵ਼ = v, ਵ = w. ਥ਼ = th in *think*, ਦ਼ = th in *this*. ਫ਼ ਜ਼ ਸ਼ as in ordinary Punjabi spelling.
- Halant (੍) joins a consonant to the next one with no vowel between: ਸ੍ਕੂਲ, ਮਿਲ੍ਕ. No halant on the last letter of a word.
- ˈ stands before the stressed part of a word with two or more syllables. One-syllable words carry no mark.
- No addak, no tone letters used for tone, no aspiration marking for English p / t / k (the `pron` lesson says so in prose).
- ੈ = the vowel of *bad*; ੇ = *bed* and *name*; ਾ = American *hot*; ੌ = *dog*, *call*.
- A bare consonant letter is a weak syllable with schwa: ਦ਼ (the), ਟ (to), ਅ (a).
- Sentence aids keep function words weak (ਕਨ, ਅਟ, ਫ਼ਰ, ਅਵ਼) as the lookup gives them.
- NFC throughout; the nukta letters are never typed as precomposed code points.

## Same string, same aid

Every English string that occurs in more than one file carries the same aid in each (decks, lesson example rows, idiom list). `node tools/content/pa/pron_check.js all` reports conflicts 0 and word mismatches 0 after review.

## Letter names quoted in prose

Where a card note or lesson quotes a letter name in Gurmukhi, the quoted form is the aid form: F ਏਫ਼, H ਏਚ, L ਏਲ, M ਏਮ, N ਏਨ, S ਏਸ, X ਏਕ੍ਸ, Z ਜ਼ੀ, W ˈਡਬਲਿਊ. At review the alphabet deck notes for L, S and X were changed from «ਐਲ», «ਐਸ», «ਐਕਸ» to these forms. Quoted learner mispronunciations («ਹੈੱਚ», «ਹੈੱਪੀ», «ਇਸਕੂਲ», «ਜੂ») are ordinary Punjabi spelling on purpose and are not aids.

## Names (as PRON-TOOL gives them; identical in every file)

| Name | Aid |
|---|---|
| Simran | ˈਸਿਮ੍ਰਨ |
| Aman | ˈਆਮਨ |
| Singh | ਸਿਙ |
| Kaur | ਕਾਊਰ |
| Amritsar | ਅਮ੍ˈਰਿਟ੍ਸਰ |
| Chandigarh | ˈਚੰਡਿਗਾਰ |
| Ludhiana | ਲੂਡੀˈਆਨਾ |
| Punjab | ਪੰˈਜਾਬ |
| Punjabi | ਪੰˈਜਾਬੀ |
| India | ˈਇੰਡੀਆ |

These are the anglicised pronunciations an American speaker would use, not the Punjabi ones; the meaning column keeps the normal Punjabi spelling (ਅੰਮ੍ਰਿਤਸਰ, ਚੰਡੀਗੜ੍ਹ, ਲੁਧਿਆਣਾ).

## Dropped at review

- Card `Jew | ਜੂ` removed from «ਉਚਾਰਨ ਦੇ ਜਾਲ» (lead ruling). The `zoo` card and the `pron` lesson now warn against «ਜੂ» without naming another word. Deck size 51 → 50; `pron_check` pairs 815 → 814.

## Open points for a native speaker

- `breakfast`: the card note describes the first vowel in words; the aid writes ੇ. Check the note against the audio.
- ੇ is used for both *bed* and *name*; the `pron` lesson explains this, but a learner may still read ਬੇਡ as "bade".
- Weak forms in sentence aids (ਕਨ for *can*, ਡ for *do*) look odd in isolation; they are tool output and were left.
