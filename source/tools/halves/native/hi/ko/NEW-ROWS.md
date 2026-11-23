# Hindi half: top-up rows of 2026-11-23 (for the cold reviewer)

Written by one writer, not a native speaker, following `docs/briefs/x-ko-topup.md` on top of the four-writer merge (no `REVIEW.md` existed yet). Nothing here has had a native check. `node tools/halves/validate.js hi ko` now ends with `errors: 0`; the only words remaining are the 86 `ui.json` strings (not part of this job). Assembly: 56 decks, 1413 cards, `node --check` passes.

Rules followed: `docs/profiles/hi-ko.md` (आप + -इए for 요 / -습니다 / -시- lines, तुम for 반말, never तू; neutral wording first for "I" lines, then the unspaced pair करता/करती; decomposed nukta (all new strings NFC-normalised); Devanagari loans, no Latin outside RR, except `PC방`, which is Korean spelling and already used by an existing note), plus the writers' fixed spellings (किमची, गिमबाप, सियोल, टॉयलेट, वॉन, साइनो-कोरियाई / मूल कोरियाई).

## Counts

| file | added | changed | removed |
|---|---|---|---|
| `cards.jsonl` | 773 (ko.c0643–ko.c1415) | 0 | 0 (ko.c0077 was already gone after the merge) |
| `examples.jsonl` | 201 (ko.e075–ko.e275) | 0 | 0 |
| `dialog.jsonl` | 52 (ko.g150–ko.g201) | 0 | 0 |
| `decks.jsonl` | 13 | 0 | 0 |
| `groups.jsonl` | 1 (ko.grp.core-words) | 0 | 0 |
| `sentences.jsonl` | 3 (ko.s0299, ko.s0300, ko.s0301) | 0 | 0 (ko.s0012, s0127, s0289, s0292, s0295 were already gone) |
| `practice.jsonl` | 0 | 3: particles.03 (Japan, 일본에 in the why), office.05 and office.08 (कीई / 키이 → `@@`) | 0 |
| `lessons/particles.html` | | `{{ex:ko.s0127}}` → `{{ex:ko.s0299}}`; the prose "अमेरिका से" → "कनाडा से" to match the new example | |
| `lessons/office.html` | | `{{ex:ko.s0289}}` → `s0300`, `{{ex:ko.s0292}}` → `s0301` | |
| `trainer.json` | | untouched (no validator error) | |

w2 had already aligned the stale rows ko.c0617, ko.g019, ko.g021, meet.06, ko.s0297, ko.s0298 and `lessons/meet.html` (the country tip included); I checked them and left them as they are.

## Labels chosen (permanent progress keys)

| deck | label |
|---|---|
| ko.d.top-nouns | आम संज्ञाएँ |
| ko.d.top-verbs | आम क्रियाएँ |
| ko.d.top-adjectives | आम विशेषण |
| ko.d.top-adverbs | आम क्रियाविशेषण |
| ko.d.top-pronouns | आम सर्वनाम |
| ko.d.top-particles | और पार्टिकल |
| ko.d.top-connectors | और योजक शब्द |
| ko.d.top-interjections | विस्मयादिबोधक शब्द |
| ko.d.top-words | काम के शब्द |
| ko.d.top-counters | और काउंटर |
| ko.d.flirting-words | फ़्लर्टिंग के शब्द |
| ko.d.compliments | तारीफ़ें |
| ko.d.countries | देश |
| group ko.grp.core-words | मुख्य शब्द |

"आम" renders "Top" (the existing मुख्य क्रियाएँ, विशेषण, पार्टिकल, योजक शब्द, काउंटर, फ़्लर्टिंग labels were taken); "और …" follows the English "beyond the deck X" sense for particles, connectors and counters.

## Decisions

- **Meanings.** Verbs take the -ना form, describing verbs "… होना"; notes keep the English shape (해요 form · form before a noun). Meanings that would repeat inside a deck were split (बंद करना / बंद करना (स्विच); बहुत / बहुत सारा; ज़्यादा / हद से ज़्यादा; बेहद; चीज़ (것 का बोलचाल रूप) / सामान …). No two meanings in a deck are equal (checked case-insensitively).
- **Irregular verbs:** "ㅂ अनियमित", "ㄷ अनियमित", "르 अनियमित", "ㅅ अनियमित", "ㅎ अनियमित"; "ㄹ drops" = "ㄹ हट जाता है"; "regular" = "नियमित".
- **Flirting scale** Mild / Warm / Bold = **हल्का / गर्मजोशी भरा / बेबाक** ("Mild to warm" = "हल्का से गर्मजोशी भरा").
- **Gender.** Neutral wording wherever it exists (मुझे नींद आ गई, घर पर ही रह गया, कॉफ़ी मेरी तरफ़ से, आपको मैसेज करूँ, चलेगा?, मेरी ज़िंदगी में कोई है, हम दोस्त ही रहें तो अच्छा, अरे, याद ही नहीं रहा!); otherwise the pair. Lines about the addressee use the generic masculine (आप इतने क्यूट क्यों हैं?); lines the English marks as said to a woman are feminine (आज तो आप और भी सुंदर लग रही हैं).
- **Countries:** standard Hindi names (अमेरिका (संयुक्त राज्य), ब्रिटेन (यूनाइटेड किंगडम), मिस्र, यूनान in brackets after ग्रीस, तुर्किये, चेकिया, फ़िलीपींस as in ko.g021). As the profile says, no India swap anywhere: 인도 is simply भारत, with the English note (힌디어 = हिंदी).
- **`@@`:** ko.s0300 / office.08 "नमस्ते, मैं मार्केटिंग टीम से @@ हूँ", ko.s0301 "धन्यवाद। @@", office.05 "… @@ के रूप में …": no ending is attached to the name.
- **Name and dish labels** use the profile's RR transcription: हानुल (하늘), मिनजुन, जीसू, मिनजी, तोकबोकी (as already used in the half), किमची जिगे, रामयोन (라면), नामसान टावर.

## 20 rows most worth a native speaker's check

1. ko.c0644 `___ 할 수 있어요?` "क्या आपको ___ आती है?" (neutral and feminine, because language names are feminine). Is that better than "क्या आप ___ बोल सकते हैं?"?
2. ko.d.top-interjections label "विस्मयादिबोधक शब्द": too school-bookish? An alternative would be "आह-वाह के शब्द".
3. ko.d.compliments "तारीफ़ें" next to the existing "जोश और तारीफ़": are the two distinct enough?
4. Group "मुख्य शब्द" next to the deck "मुख्य क्रियाएँ".
5. ko.c1047 헉 "ओ तेरी!; हैं!", and ko.c1046 어머 "अरे बाप रे!; हाय राम!": register and gender feel.
6. ko.c1044 아야 "उई; आह", ko.c1051 아이참 "ओफ़्फ़ो, छोड़ो भी (शर्माते हुए)".
7. The flirting scale words हल्का / गर्मजोशी भरा / बेबाक.
8. ko.c1171 / ko.g188 the 라면 joke line ("ऊपर आकर रामयोन खाएँगे?"; the film title "वन फ़ाइन स्प्रिंग डे" in Devanagari).
9. ko.c1176 "माफ़ कीजिए, पर मेरी ज़िंदगी में कोई है" for 만나는 사람이 있어요.
10. ko.c1177 "आप बहुत अच्छे इंसान हैं, पर हम दोस्त ही रहें तो अच्छा".
11. ko.c1190 동안이시네요 "आपकी उम्र का पता ही नहीं चलता".
12. ko.c1191 인상이 좋으세요 "आपका चेहरा बड़ा भला है".
13. ko.c1206 별말씀을요 and ko.c1207 과찬이세요: natural modest replies?
14. ko.c0712 아저씨 "अधेड़ उम्र का आदमी; भाई साहब (अजनबी से)" and ko.c0741 아줌마.
15. ko.c0973 그쪽 "आप (अजनबी से, शाब्दिक: उस तरफ़)".
16. ko.c0965 저희 "हम (विनीत)" and ko.c0945 저 "मैं (विनम्र, विनीत)": is विनीत understood?
17. ko.c1008 바쁜데 "मैं व्यस्त हूँ, तो / पर (-(으)ㄴ데 / -는데)" (the only connector meaning with a spaced slash, copied from the English "but / so").
18. ko.e227 "यह मेरा छोटा भाई (या छोटी बहन) है" for 동생 (gender left open).
19. ko.g172 "भौं!" for 왁! (Boo!).
20. Country spellings to confirm: कोट डी आइवर, काबो वर्डे, एस्वातिनी, किर्गिज़स्तान, लिकटेंस्टाइन, साओ टोमे और प्रिंसिपे, पूर्वी तिमोर (तिमोर-लेस्ते).
