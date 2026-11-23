# bn-en pronunciation aid: settled conventions (BN-REVIEWER, 2026-11-23)

These rules are binding for every `pron` field: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and every respelling quoted in lesson prose or a card note.

The base is docs/profiles/bn.md §6 (the key and its 11 derivation rules) and PRON-TOOL.md (the converter and its 10 decisions). This file records what the cold review found settled in the finished course, so that later edits keep it. Nothing here changes the key.

**Checker:** `node tools/content/bn/pron_check.js [summary|all]`. Expected output: `pairs 804 · not in lookup 107 · diff 0 · conflicts 0 · word mismatches 1 · prose mismatches 0 · encoding 0`. The one WORD line is rule C2 below. Every `pron` must also match profile.json `pronPattern` (validate.js) and the same English text must carry the same aid in every file (lint.js).

## A. Where an aid comes from
1. **Never respell by hand.** A string that is in `pron_lookup.json` takes that value byte for byte (the lookup wins over any other reading). A new string gets IPA in zh conventions and goes through `node tools/content/bn/pron_bn.js "/…/"`.
2. **Copy, never retype.** য় is য + U+09BC (NFC), র + ্যা carries a ZWJ, hasanta + ব a ZWNJ. A retyped row looks identical and fails lint.js or the ENCODING check.
3. **Practice items carry no aid.** Prompts, `why` and `hint` never contain a respelling.
4. **Respellings quoted in prose** (lesson bodies, card notes) must be a token that some `pron` row contains; the PROSE check enforces this. To quote a new one, add a row for it or list it in the checker's prose list after converting it with the tool.

## B. Names and places (one reading per name in the whole pack)
These 107 rows have no zh counterpart; all were re-read against the key in this review. The readings are the converter's output for the IPA shown and have **not** been checked against the en-US voice (profile §6 rule 10): that is a listening job for the lead or a native reviewer.

| English | IPA used | aid |
|---|---|---|
| Rafi | /ˈrɑːfi/ | ˈরাːফি |
| Khan | /ˈkɑːn/ | ˈকাːন |
| Dhaka | /ˈdɑːkə/ | ˈডাːকা |
| Bangladesh | /ˌbɑːŋgləˈdeʃ/ | বাːংগ্লাˈডেশ |
| Bangla | /ˈbɑːŋglə/ | ˈবাːংগ্লা |
| taka | /ˈtɑːkə/ | ˈটাːকা |
| Cox's Bazar | /ˈkɑːksɪz bəˈzɑːr/ | ˈকাːক্সিজ় বাˈজ়াːর |
| Sylhet | /sɪlˈhet/ | সিল্ˈহেট |
| Tagore | /təˈgɔːr/ | টাˈগর |
| biryani | /bɪriˈɑːni/ | বিরিˈআːনি |
| Japan | /dʒəˈpæn/ | জাˈপ্যান |
| Dhaka University | /ˈdɑːkə juːnɪˈvɜːrsəti/ | ˈডাːকা ইঊনিˈভ়ার্সাটি |

- Nadia, Rahman, Imran, Tania and the other names in dialogues have no `pron` row (dialogues carry no aid). If one is added, convert it and add it to this table.
- The Bengali *translations* of these names keep their normal spelling (রাফি, ঢাকা, বাংলাদেশ); only the aid uses the American reading.

## C. Weak, strong and citation forms
1. **Sentences follow zh's weak forms** through the lookup: a আ, an আন, the দ়া (দ়ি before a vowel sound: দ়ি ˈঅ্যান্সার, দ়ি ˈএলিভ়েইটার), to টা (টু before a vowel sound: ˈম্যারিড টু আ ˈডাːক্টার; strong টূ), you ইউ (ˈইঊ when stressed: আন্ড ˈইঊ), he হি, she শি, we ওয়ি, is ইজ়, was ওয়াজ়, can কান, from ফ্রাম.
2. **A word that is a card on its own takes its citation form with ˈ**, also when the lookup only has the weak form. The one case is *she* on the see / she pair card: **ˈশী** (lookup: শি). This is the accepted WORD line in the checker; it must stay the only one. Every other single-word card (zoo ˈজ়ূ, Jew ˈজূ, vine ˈভ়াইন, wine ˈওয়াইন, ship ˈশিপ, sheep ˈশীপ, full ˈফুল, fool ˈফূল, see ˈসী, heart ˈহাːর্ট, hurt ˈহার্ট, school ˈস্কূল, sip ˈসিপ, go ˈগৌ, name ˈনেইম) agrees with the lookup forms of the same word.
3. **Contractions:** he's হিজ়, she's শিজ় (the same spelling as *his*: PRON-TOOL decision 10), I'm আইম, I'll আইল, I've আইভ়, where's ˈওয়ের্জ়, let's ˈলেট্স, doesn't ˈডাজ়ান্ট, didn't ˈডিডান্ট, couldn't ˈকুডান্ট.
4. **Phrasal-verb particles and stranded adverbs take ˈ:** ˈওয়ৌক ˈআপ, ˈগ্রূ ˈআপ, ইজ় ˈআউট, ˈডেই ˈঅফ.
5. **Years and numbers are read as words:** 2020 = ˈট্ওয়েন্টি ˈট্ওয়েন্টি; no digit of either script ever appears in an aid.

## D. Shapes the review checked by eye
- Syllabic n / l as া + ন / ল: ˈমেডিসান, ˈকাজ়ান, ˈপীপাল, ˈসিংগাল, ˈডাজ়ান্ট, ˈঈটান, ˈরিটান.
- Bare medial consonant = THOUGHT only: ˈবট (bought), ˈকর্স (course), ˈঅফ (off), টাˈগর, ˈমর্নিং. LOT is always াː: ˈগাːট, ˈডাːক্টার, ˈকাːন্ট্যাক্ট, টাˈমাːরৌ.
- Stress mark inside a word keeps the hasanta visible: ইগ্ˈজ়্যাম, আড্ˈভ়াইস, সিল্ˈহেট, ডিˈস্কাস.
- ম + ব and ল + ব take no ZWNJ (ˈএম্বাসি); every other hasanta + ব does.

## E. What a native reader should test first (see REVIEW.md)
The bare-consonant THOUGHT spelling after ওয় (ˈওয়ক, ˈওয়টার), one-letter words (ˈস for *saw*), final clusters without a vowel (ˈমিল্ক, ˈডেস্ক), ৌ for GOAT against the familiar গো / নো / ফোন, and the dotted letters ভ় থ় দ় ঝ় on a real device font.
