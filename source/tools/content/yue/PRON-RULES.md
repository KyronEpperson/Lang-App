# yue-en pronunciation rules

The `pron` field and every `{{ex:…}}` row of this course follow **`tools/content/zh/PRON-RULES.md` unchanged** (profile `docs/profiles/yue.md` §6: "IPA exactly as zh-en writes it"). This file records only what is specific to yue-en. It was written by the cold reviewer (2026-11-23).

## 1. What is inherited from zh-en

- American values in the school symbol set (OALD NAmE): /ɑː/ in *hot*, /oʊ/ in *go*, /æ/ in *can't*, r always written. No əʊ, ɒ, ɪə, eə, ʊə, ɹ, ɚ, ɝ, ɾ, ɡ in any pron field.
- Syllabic consonants without ə: word-final /l/ after a consonant (ˈpiːpl) and /n/ after t d s z ʃ ʒ v (ˈsevn, ˈsteɪʃn, ˈiːtn).
- Weak forms: kən, kəd, ʃəd, wəd, jʊr, fər, tə (tu before a vowel), ðə (ði before a vowel). Stranded prepositions take the strong vowel and no ˈ. Particles of phrasal verbs are stressed (ˈtɜːrn ˈɑːn).
- Every content word carries ˈ, including monosyllables in citation form.

## 2. The one allowed exception

The `pron` lesson has one plain HTML table "British → American" (profile §6 rule 5). British values (/ɒ/, /əʊ/, zed) appear **only there**, never in a pron field or an `{{ex:}}` row. `grep -c "əʊ\|ɒ"` over the course gives exactly one line: that table in `lessons.js`.

## 3. Names and local words (fixed transcriptions)

| Word | IPA | Note |
|---|---|---|
| Hong Kong | /ˌhɑːŋ ˈkɑːŋ/ | lead ruling: this form everywhere (8 rows) |
| Kowloon | /ˌkaʊˈluːn/ | |
| Macau | /məˈkaʊ/ | |
| Central | /ˈsentrəl/ | əl after r is not syllabic |
| Cantonese | /ˌkæntəˈniːz/ | |
| Cantopop | /ˈkæntoʊˌpɑːp/ | |
| MTR | /ˌem tiː ˈɑːr/ | "the MTR" = /ði ˌem …/ |
| dim sum | /ˈdɪm ˈsʌm/ | two stressed words |
| Amy | /ˈeɪmi/ | |
| Chan | /ˈtʃæn/ | unstressed *under* before it: /ʌndər ˈtʃæn/ |
| McDonald's | /məkˈdɑːnldz/ | syllabic l; lesson row changed from məkˈdɑːnəldz to match the deck |
| London | /ˈlʌndən/ | place names keep ə (zh rule: Boston, Hilton) |
| difficult | /ˈdɪfɪkəlt/ | not a word-final syllabic l; kept as OALD writes it |

## 4. How it was checked

`tools/content/zh/pron_check.js` was run on the yue files from a scratch copy (only the data directory changed). Result after the review: 903 pairs, 827 words, **0 phrase conflicts**, 1 word "conflict" (*they*: /ˈðeɪ/ as a citation card, /ðeɪ/ unstressed in a sentence, which the weak / strong rule allows), 3 rule hits (*difficult* ×2, *London*; both explained in §3).

## 5. Not verified

No audio was listened to. Whether the recorded voice says /ˌhɑːŋ ˈkɑːŋ/ and /ˌkaʊˈluːn/ with these stresses needs a listening check.
