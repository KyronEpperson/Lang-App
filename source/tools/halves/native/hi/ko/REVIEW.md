# hi-ko native half: cold review (2026-11-23)

**The reviewer is not a native Hindi speaker.** Every Hindi judgement below is a careful non-native editor's call against `docs/profiles/hi-ko.md`, the English half and the Korean. The items at the end need a native check.

## What I checked

- **Every jsonl row**, joined by id with its Korean (`target/ko/`) and, where in doubt, the English half:
  - 1413 cards (including the 773 top-up rows ko.c0643–c1415), 201 dialogues, 275 examples, 47 patterns, 294 sentences, 99 checks, 462 practice items;
  - 56 deck labels and descriptions, 6 groups, 140 labels, 33 lesson titles and blurbs.
- **All 33 lesson bodies**, read with their `{{ex:…}}` rows expanded (Korean + Hindi gloss).
- **Practice and checks** against the accepted answers (`a`), rejected forms (`x`) and Korean options; every distractor that differs only in tense or politeness was checked for a cue in the Hindi prompt.
- **Mechanical scans** (scripts in the scratch folder):
  - same Korean glossed two ways across cards, sentences, examples, dialogue lines and pause labels;
  - duplicate meanings within a deck (trimmed, case-insensitive) and duplicate options within an item: **none** after the fixes;
  - Latin script outside RR; precomposed nukta (U+0958–095F): **none**; कीई: **none left** (the three `@@` lines office.05, office.08, ko.s0300 / s0301 were already converted by the top-up writer and read correctly with any name);
  - cross-references "पाठ N" against `lessons.jsonl`;
  - gender pairs: no pair on a non-"I" subject, no spaced gender slash, addressee generic masculine except the two lines whose Korean (예뻐요 to a woman) and the English note mark a woman (ko.g176, ko.c1140).

Every fix is applied by id from one idempotent script, `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-hiko/fix.py`, which always starts from the pre-review copy (`…/review-hiko/base/`). It asserts, for every edited field, that the Hangul set, the `@@` count, the `__` blanks and the dialogue ` / ` count are unchanged, NFC-normalises and rejects precomposed nukta. Both are session scratch files. I touched only the merged `*.jsonl` (not `course.json`, `ui.json`, `trainer.json`, `work/`) and `lessons/*.html`. **Do not run `mk_native.js hi --merge` again**: it rebuilds from `work/` and would undo this review.

**Validator:** `node tools/halves/validate.js hi ko` → `words remaining: 0 of 25577`, **`errors: 0`**, 1 warning (the waived extra Hangul in `hangul.html`). `assemble.js hi ko` succeeds (56 decks, 1413 cards) and its output passes `node --check`. (`ui.json` now shows 66 overrides: another agent's work, not this review's.)

## Decisions

| Question | Decision | Applied to |
|---|---|---|
| **Plain stops ㄱㄷㅂㅈ** (profile: soft ग द ब ज; Park & Narang: voiceless onsets) | **One positional rule, taught as a three-way contrast.** Between vowels: ग द ब ज. At the start of a word: a lightly aspirated क त प च — much less air than ख थ फ छ, relaxed throat, the vowel on a low pitch. Never the airless tight क त प च, which is ㄲ ㄸ ㅃ ㅉ. The hangul lesson adds that a soft ग द ब ज at the start is still heard as ㄱㄷㅂㅈ, but Korean has no voicing there. ㅋㅌㅍㅊ = ख थ फ छ with strong air; ㄲㄸㅃㅉ = tight क त प च, no air, not long. No text now says both "light-air क" and "never क". | ko.c0013, c0015, c0018, c0021 meanings; c0045 note (adds सादा = हल्की हवा, ढीला गला, नीची आवाज़); deck desc हंगुल के व्यंजन; `hangul.html` (comparison paragraph + RR guide); `sound-changes.html` (RR reminder); `future.html` tip (거 = कसा: बिना हवा वाला क); hangul.08 why. `trainer.json` does not state the old rule. |
| Gender | Order kept as the profile says: neutral wording, then a speaker fixed by the scene, then the unspaced pair masculine-first on the inflected word; generic masculine for the person addressed. Pairs were removed only where a same-tense neutral wording exists (no rewording across a cue): "I'm from X" → मैं X से हूँ (ko.s0299, particles.03); "met a friend" → कल एक दोस्त से मुलाक़ात हुई (ko.s0223, story.06, story.10, which also drops the feminine मेरी एक दोस्त for an unmarked 친구); ko.g063 B, ko.g068 B, ko.g129 (मेरा सिलेक्शन हो गया!, like g079), the c0193 note (मुझे तो एकदम झटका-सा लगा). A bounded pass over the past-tense pairs (गया/गई, आया/आई, था/थी, पहुँचा/पहुँची …) found no other natural same-tense neutral form. The ~290 remaining pairs are "I" lines (present, future, progressive and intransitive past) with no neutral form. | as listed |
| 오빠 = भैया | **Card keeps "बड़ा भाई (भैया)"** and its note now says girls also call a boyfriend or husband 오빠, so it is not always भैया; `titles.html` adds the same sentence. **Vocative 오빠 in a gloss = ओप्पा** (the fan loan, neutral between brother-figure and boyfriend): ko.e026. The two "girl to older guy" prompts follow the English, which has no vocative: titles.08, ko.s0197. ko.g146 (우리 오빠예요 = "my older brother") keeps मेरे भैया हैं. | ko.c0609, titles.html, e026, titles.08, s0197 |
| 사장님 as a vocative | मालिक stays as the **reference** meaning (titles table, s0279, honorific.03, e152, e226). As a **vocative** मालिक sounds servile, so the address is shown as a scene cue: **(मालिक को बुलाकर) बिल दीजिए**. | ko.s0195, titles.06 |
| 선생님 (and 과장님) as a vocative | Reference: **टीचर** (c0615 meaning; note: संबोधन में "सर/मैम"). **Vocative: सर/मैम** (unspaced, masculine first, like the gender pairs; a spaced slash would break the dialogue separator). 과장님 as a vocative also = सर/मैम, with "अपने मैनेजर से:" as the cue where a prompt must lead to 과장님. The office lesson's "सिर्फ़ 'सर'" becomes "सर/मैम". | c0255, c0615, e032, e072, g097, g107, g149, titles.11, titles.14, office.11, office.14, office.k2, office.html |
| 계산해 주세요 | **बिल दीजिए** everywhere; c0580 note gives the literal "हिसाब कर दीजिए". | ko.c0580 |
| 맛있게 드세요 | **खाने का मज़ा लीजिए** (staff to customer and to elders; लीजिए = 드시다 as the profile bridges). Three wordings unified. | c0243 note, s0277, honorific.k1, honorific.12 |
| 잘 부탁드립니다 | Kept the profile's one gloss **आपके सहयोग की उम्मीद है** everywhere (c0084, c0559, g055); c0084's note gives the felt sense ("मुझ पर अपनी कृपा बनाए रखिए"). | unchanged |
| The two goodbyes | Kept **आराम से जाइए (जाने वाले से) / आराम से रहिए (रुकने वाले से)**; all rows and meet.html already agree, and the tags say who leaves more clearly than the English. | unchanged |
| कल | **Plain कल wherever the verb's tense decides** (कल मिलते हैं, कल क्या किया). **बीता हुआ कल / आने वाला कल** (oblique बीते कल) only where nothing else decides: card meanings ("कल (बीता हुआ)" / "कल (आने वाला)"), questions about the word, and comparisons. ko.e246 "आज कल से…" (which also reads as आजकल) → "आज बीते कल से ज़्यादा ठंड है", matching s0244 / compare.04. | e246 |
| संधि for nasalisation | **Kept, made exact:** it is the standard व्यंजन संधि rule (a class's first consonant before न / म becomes that class's nasal), which is exactly 비음화 (stated from general grammar knowledge; no grammar book was opened). Now: "जगत् + नाथ = जगन्नाथ, वाक् + मय = वाङ्मय — न या म से पहले त और क अपने वर्ग का नासिक्य बन जाते हैं"; the heading and two whys say "नासिक्य बन जाते हैं" instead of "नरम पड़ते हैं" (softening is wrong for a stop → nasal change). The vowel-merging "कुछ-कुछ संधि की तरह" in verbs.html is labelled as a loose comparison and stays. | sound-changes.html, sound-changes.01, sound-changes.k1 |
| 살 / साल | **Kept** as written: always labelled a coincidence (meet.html, counters.html, meet.14), never an etymology. 살 is native Korean, साल comes from Persian; there is no link. | unchanged |
| Labels विस्मयादिबोधक शब्द · तारीफ़ें · मुख्य शब्द | **Kept** (permanent keys; not clearly wrong). विस्मयादिबोधक is the school term and matches its siblings आम संज्ञाएँ / क्रियाविशेषण / सर्वनाम (the Top-* decks are parts of speech). तारीफ़ें vs जोश और तारीफ़ and the group मुख्य शब्द vs the deck मुख्य क्रियाएँ mirror the same overlaps in English (Compliments / Hype & cool; Core words / Core verbs) and are different UI levels or distinct strings. Listed for a native check. | unchanged |
| Danda vs "." | **Final punctuation follows the English row**: English ends in "." → Hindi ends in "।" (also on Hindi-free formula rows such as "ㄴ + ㄹ → ㄹㄹ।", which the pre-fill had left with "."); English ends without a stop (prompts, glosses, meanings) → no danda. Exception: a note that ends inside a quoted Korean passage with internal "." keeps the Korean "." (c0197…). This made 191 rows consistent; past.06 vs story.06 style splits are gone. Question / exclamation marks are untouched. | 26 cards, 85 sentences, 7 checks, 146 practice rows (punctuation only) |
| Latin script | None outside RR, brand-like tokens the learner types (JMT, TMI as a card front, PC방) and the placeholder capitals **A, B, X** in grammar formulas ("A = B", "X कर दीजिए"). Those are kept: Devanagari letter variables (क = ख) would collide with the course's sound comparisons. | unchanged |
| Nukta | All text NFC (decomposed nukta); 0 precomposed letters. Spelling unified to **शौक** (the deck label key's spelling; g025 and the c0497 note had शौक़). | g025, c0497 |
| Same Korean, same gloss | Real splits unified: 계산해 주세요, 맛있게 드세요, 많이 드세요 (भरपेट खाइए), 반갑습니다 (मिलकर ख़ुशी हुई), 잘 모르겠어요 (मुझे पक्का नहीं पता), 맞아요 (सही बात है), 어제 늦게 잤어요 (कल रात सोने में देर हो गई), 야, 뭐 해? (ओए, …), 한국어 잘하시네요 (आपकी कोरियाई …), 좋게 봐 주셔서 (इतनी अच्छी नज़र से …), 라면 (रामयोन). Variants that only add a context note were kept. | pause polite.16, expression.03, expression.19; e009, g009, g061, g093, g196, c1209, c0300 |

**Other accuracy and naturalness fixes**
- Lesson 14 title "मना करना" means "to refuse / forbid"; now **"'नहीं' कहना: 안 और -지 않아요"** (English "Saying no"; no cross-reference used the old title).
- story.html cross-ref "पाठ 10, «भूतकाल»" did not match the title; now "(पाठ 10)". The other references (पाठ 26 «भूतकाल में कहानी सुनाना», पाठ 32 «विनम्रता से चीज़ें माँगना», पाठ 10 और 11, पाठ 15) match.
- ko.s0167 "(मेरा उसे) देखने का मन है" → "(मेरा) देखने का मन है".
- sov.08 책을 봐요: "किताब देख रहा है" → "किताब पढ़ रहा है".
- ko.g068 B 괜찮아 declines a lift; "ठीक है" read as acceptance → "रहने दो, मेट्रो है ना।"
- ko.g148 "एक छोटा भाई-बहन है" → "एक छोटा भाई या छोटी बहन है" (as isseoyo.07).
- ko.g160 글쎄 "ख़ैर… पता नहीं" (ख़ैर = anyway) → "हम्म… पता नहीं" (as the pause label).
- 헉: slangy "ओ तेरी" → **"ओह नो!"** (safe, widely understood; "अरे बाप रे" is already 어머's gloss), on the card c1047 ("ओह नो!; हैं!") and in ko.g163.
- office.html "पहले बॉस से पहले" and "कमरे को साफ़ सुनाकर" → "एक ज़माने में बॉस से पहले…", "सबको सुनाकर" (also office.13 why).
- texting.06, texting.07 and texting.08: their rejected forms differ only in level (저는, 배고파요, 봐요), so the prompts now carry "दोस्त को मैसेज:".
- Spelling: c0497 note शौक़ → शौक.

## Rows changed per file

| File | Rows changed | Of which punctuation only |
|---|---|---|
| cards.jsonl | 41 | 26 |
| dialog.jsonl | 14 | – |
| examples.jsonl | 5 | – |
| sentences.jsonl | 91 | 85 |
| checks.jsonl | 10 | 7 |
| practice.jsonl | 163 | 146 |
| decks.jsonl | 1 (hangul-consonants desc) | – |
| lessons.jsonl | 1 (negation title) | – |
| labels.jsonl | 3 | – |
| patterns, groups | 0 | – |
| lessons/*.html | 6 files: hangul, sound-changes, future, titles, story, office | – |

## Final deck labels (56) and group names (6), unchanged

Decks: हंगुल के स्वर · हंगुल के व्यंजन · हंगुल: एडवांस्ड · उच्चारण टिप्स · ज़रूरी वाक्य · परिचय · ज़रूरी वाक्य 2 · पूछताछ · कैफ़े और कन्वीनियंस स्टोर · रोज़मर्रा की संख्याएँ · काउंटर · मौसम और भावनाएँ · योजक शब्द · डॉक्टर और फ़ार्मेसी · घर और छोटे-मोटे काम · सम्मानसूचक रूप · जगहें और इमारतें · शौक · खाने के शब्द · ड्रिंक्स · गतिविधियाँ · टीवी और मनोरंजन · जगह और दिशा के शब्द · मुख्य क्रियाएँ · पार्टिकल · संख्याएँ · मीठी बातें · क्यूट बातें · फ़्लर्टिंग · दोस्तों से चैट · जोश और तारीफ़ · दोस्तों के साथ · के-पॉप और फ़ैन कल्चर · सोशल मीडिया और स्लैंग · डेटिंग: अगला क़दम · काम और दफ़्तर · हल्की-फुल्की बातचीत · खाना और ऑर्डर · रास्ता और सफ़र · समय और दिन · परिवार और लोग · विशेषण · के-ड्रामा के डायलॉग · आम संज्ञाएँ · आम क्रियाएँ · आम विशेषण · आम क्रियाविशेषण · आम सर्वनाम · और पार्टिकल · और योजक शब्द · विस्मयादिबोधक शब्द · काम के शब्द · और काउंटर · फ़्लर्टिंग के शब्द · तारीफ़ें · देश

Groups: बुनियाद · रोज़मर्रा · शब्दावली · ग्रामर · सामाजिक · मुख्य शब्द

All unique; none is मेरे वाक्य; none takes a danda.

## For the lead

- **Danda: this review overrides profile §2.1 ("a danda ends every Hindi sentence") for prompts, glosses and meanings.** Their final punctuation now follows the English row, so a prompt or gloss without a stop in English has no danda (about 190 rows lost a final danda; about 100 Hindi-free or formula rows gained one in place of "."). It is one checkable convention, but the profile is the style authority: to revert, delete the strip branch (`if evs[-1] not in … and hv2.endswith('।')`) in `end_punct` in `fix.py` and re-run it.
- `trainer.json` and `ui.json` (re-grepped at the end, after `ui.json` changed during the session) contain no कीई and no old stop wording ("ग द ब", "क त प", "हल्के ग").

- `docs/profiles/hi-ko.md` §2.1 and §8.3 still say "Kii is कीई"; the half now writes `@@` on every learner-name line, and nothing writes कीई.
- The profile's §5 / §6.1 / §6.2 stop rule ("soft ग द ब ज, never क त प च") is superseded by the positional rule above; update the profile if it is reused.

## For a native speaker to check (max 20)

1. The plain-stop wording: "शब्द की शुरुआत में हल्की-सी हवा वाले क, त, प, च — ख, थ, फ, छ से बहुत कम हवा, ढीला गला, आगे का स्वर नीची आवाज़ में" (hangul.html, c0013–c0021, deck desc). Clear and teachable?
2. "सर/मैम" (unspaced) as the vocative for 선생님 and 과장님 in glosses and prompts.
3. "(मालिक को बुलाकर) बिल दीजिए" for 사장님, 계산해 주세요; is there a natural Hindi vocative instead (भैया? सर?)?
4. "ओप्पा" as the gloss of vocative 오빠 (e026), and the new note on c0609 / titles.html.
5. "खाने का मज़ा लीजिए" for 맛있게 드세요 (staff to customer, to an elder).
6. "आपके सहयोग की उम्मीद है" for 잘 부탁드립니다 at a first meeting (c0084, g055).
7. "आराम से जाइए / आराम से रहिए" for 안녕히 가세요 / 계세요: natural in speech?
8. The संधि line "जगत् + नाथ = जगन्नाथ, वाक् + मय = वाङ्मय" in sound-changes.html.
9. Lesson 14 title "'नहीं' कहना: 안 और -지 않아요".
10. Deck labels विस्मयादिबोधक शब्द and तारीफ़ें (next to जोश और तारीफ़); group मुख्य शब्द.
11. Dropping the danda on prompts and glosses that have no stop in English ("मैं स्टूडेंट हूँ" as a prompt).
12. The remaining pairs (e.g. "मैं कल स्कूल जाऊँगा/जाऊँगी"): acceptable density on drill screens?
13. "बीते कल" in comparisons ("आज बीते कल से ज़्यादा ठंड है").
14. ko.g068 "रहने दो, मेट्रो है ना।" and ko.g063 "पक्का! बियर मेरी तरफ़ से।"
15. Interjection glosses carried over from the top-up writer: c1046 어머 "अरे बाप रे!; हाय राम!", c1051 아이참, g172 왁! "भौं!"; and this review's 헉 = "ओह नो!" (c1047, g163).
16. ko.c0644 "क्या आपको ___ आती है?" vs "क्या आप ___ बोल सकते हैं?"
17. ko.c1190 동안이시네요 "आपकी उम्र का पता ही नहीं चलता", c1191 인상이 좋으세요 "आपका चेहरा बड़ा भला है".
18. ko.c0945 / c0965 "विनीत" for 저 / 저희.
19. ko.g099 사귈래? "मेरे साथ डेट करोगे?" and c0432 "हम रिलेशनशिप में आ जाएँ?"
20. Country spellings from the top-up list (कोट डी आइवर, काबो वर्डे, एस्वातिनी, किर्गिज़स्तान, लिकटेंस्टाइन, साओ टोमे और प्रिंसिपे, पूर्वी तिमोर).
