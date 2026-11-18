# hi-en pron rules (settled at review, 2026-11-17)

Binding for every `pron` field (deck cards, IDIOMS, `{{ex:English|pron|meaning}}` rows) and for Devanagari respellings quoted in notes and lesson prose. Base: docs/profiles/hi.md §6, the converter `pron_hi.js` and `pron_lookup.json` (PRON-TOOL.md). These rules only settle what those leave open.

**Checker:** `node tools/content/hi/pron_check.js [summary|all]`. Current result: 750 pairs, 91 not in the lookup, 0 lookup differences, 0 phrase conflicts, 0 word mismatches, 0 prose mismatches.

## A. Source of every row
1. A string in `pron_lookup.json` takes the lookup value verbatim (659 of 750 rows). Never hand-edit one.
2. A new string is written in zh IPA conventions (zh PRON-RULES.md) and converted with `node pron_hi.js "/…/"`. Its words must match the forms the lookup already gives those words (the checker's WORD test).
3. A respelling quoted in prose must equal a form used in some pron field, or be converted with the tool and listed in the checker's allow-list (now: allergy ˈऐलर्जि, photo ˈफ़ोटो).

## B. Settled conventions (all already uniform in the course)
1. **Virama before ˈ** everywhere (lead's ruling): फ़िफ़्ˈटीन, थ़र्ˈटीन, नाइन्ˈटीन, मक्ˈडानल्ड्ज़, मुम्ˈबाइ, इक्ˈस्क्यूज़.
2. **Years** as two pairs of words, no and: 2019 = ˈट्वेन्टि नाइन्ˈटीन, 2020 = ˈट्वेन्टि ˈट्वेन्टि. The lookup has no year in 2001–2019, so **2015 = "two thousand fifteen"** टू ˈथ़ाउज़न्ड फ़िफ़्ˈटीन (lead's row; the en-US voice reads it this way too). ˌ in zh becomes nothing: 1998 = नाइन्ˈटीन नाइन्टि एट (lookup).
3. **Names and places** (hand rows, profile rule 10), one spelling each across all files: Priya ˈप्रीया (Priya's ˈप्रीयज़), Rahul राˈहूल, Sharma ˈशार्मा, Delhi ˈडेलि, Mumbai मुम्ˈबाइ, Jaipur ˈजाइपुर, Bangalore ˈबैंगलॉर, India ˈइन्डिआ, Indian ˈइन्डिअन, Hindi ˈहिन्डि, Ruskin Bond ˈरस्किन बान्ड. Japan जˈपैन, Boston ˈबॉस्टन, Hilton ˈहिल्टन come from the lookup.
4. **Weak and strong forms** as profile §6 rule 7. Stranded or contrastive *you* is यू (*And you?*, *How about you?*), otherwise यु; *aren't* in a tag is आर्न्ट (one syllable, no ˈ); stranded *at* ऐट (*get off at*).
5. **Final schwa** is ा after a consonant (ˈशार्मा, ˈगाचा) and the independent आ after a vowel (ˈइन्डिआ, आइˈडीआ). Medial schwa is the bare consonant (ˈप्रीयज़, ˈबैंगलॉर).
6. **One-syllable words never carry ˈ**, even in isolation on a pron card (rice राइस, three थ़्री, school स्कूल, vine व़ाइन).
7. **Respellings in prose** use the same letters as the pron field, inside «» or `<b>`; danda after them is punctuation, not part of the respelling.

## C. Prose descriptions of sounds (pron lesson and deck 18 notes)
- Nukta = "a sound Hindi does not have"; never describe व़ as "w" or व as "v" alone.
- Aspiration is described as «हल्की-सी हवा» and compared with महाप्राण फ, ठ, ख; it is never written in the aid.
- Voicing for द़ / व़ / ज़ is «गले में कंपन» or «भनभनाहट»; th is «जीभ की नोक दाँतों के बीच».
- Stress: «दो या ज़्यादा हिस्सों वाले शब्द में एक हिस्सा ज़ोर से» (one-syllable function words carry none).
