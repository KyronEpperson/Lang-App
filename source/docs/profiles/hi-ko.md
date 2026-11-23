# Hindi speakers learning Korean: pair profile

Course `hi-ko` is Korean for Hindi speakers, assembled from two halves:
- the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards; see `docs/HALVES-SPEC.md`);
- the Hindi half `tools/halves/native/hi/ko/`, written by w1–w4 from the `mk_native.js hi` work files.

This profile is the writers' authority. It follows the plan of `tl-ko.md`, and it settles up front the questions the es-ko review settled afterwards.

**What it takes from `hi.md`:**
- आप with the -ें imperative;
- typography;
- Hindi school terms.

**Two `hi.md` rules are reversed here:**
1. **No English in Latin script.** Loans are written in Devanagari. Latin is allowed only for RR and its letters (*gang*, *eo*).
2. **An unspaced gender pair is allowed** in prompts as a last resort (§2.4).

**Wording already on screen:**
- tab names come from `tools/i18n/hi/ui.json`;
- terms come from the Hindi Korean roadmap, `tools/i18n/hi/roadmap.json`: हंगुल, स्टेम, काउंटर, सम्मानसूचक, 요-रूप, ध्वनि-बदलाव.

**Evidence tags:**
- **[research]**: a study opened for this profile, with its sample named;
- **[convention]**: grammars, schools, or the app's own strings;
- **[inference]**: this profile's reasoning.

**Every Hindi sentence here is [inference]**: no native speaker has checked it.

## 1. Summary

1. **Register.**
   - Everyday Hindustani in Devanagari, at the level of popular Indian apps.
   - Loans in Devanagari (कार्ड, टीचर).
   - No Sanskritised officialese.
   - The learner is **आप** + -ें.
2. **Gender in "I" lines** is decided in this order: neutral wording, then the speaker's gender from the scene, then the pair जाता/जाती (§2.4).
3. **Glossing Korean levels.**
   - 요 / -습니다 / -시- → आप, with -इए commands.
   - 반말 → तुम.
   - **Never तू.**
   - Tags only where the English has them: (औपचारिक) / (विनम्र) / (अनौपचारिक) / (सम्मानसूचक).
4. **Biggest bridge:** verb-final order with markers after the noun, and question words left in place. The Hindi कारक table maps onto the particles (§4.1).
5. **Sound bridge [research]:** Koreans hear Hindi क त प as ㄲ ㄸ ㅃ, ख थ फ as ㅋ ㅌ ㅍ, and ग द ब as ㄱ ㄷ ㅂ. It breaks in two places:
   - **listening:** Hindi listeners hear ㄱ like ㅋ;
   - **reading RR the Indian-English way:** *k t p* come out unaspirated, which Koreans hear as ㄲ ㄸ ㅃ (§5).
6. **Devanagari compares single sounds only.** It never respells words (§6).
7. **Learners:**
   - K-pop and K-drama fans: Korean ranked fifth among Duolingo languages for Indians aged 17–25 (2021, via Wikipedia);
   - school students: Korean is an elective in the revised education policy, with 2,342 school learners in 2022 ([Wikipedia](https://en.wikipedia.org/wiki/Korean_language_education_in_India));
   - university students (JNU) and job seekers [inference].

## 2. Register, glosses, gender

### 2.1 Voice and typography

- **Address:** the -ें imperative (पढ़ें, याद रखें). Avoid gendered verbs about the learner (use imperatives, impersonal or dative forms: आपको पता है); if unavoidable, the generic masculine आप जानते हैं (`hi.md` §10). Praise: बहुत बढ़िया!, शाबाश!. No यार.
- **Typography (`hi.md` §2):** a danda ends every Hindi sentence, even after Korean; nukta letters decomposed (NFC), never U+0958–095F; ऑ in loans (कॉफ़ी); digits 0–9; straight quotes "…"; spaced em dash; ` / ` for alternatives; `✗` / `✓`; no Hindi plural endings on loans.
- **Script.**
  - Korean is written in Hangul and RR in Latin, as in the English row.
  - Everything else is Devanagari, brand names included (व्हाट्सऐप, काकाओटॉक, टी-मनी).
  - `course.json` name: `"कोरियाई"`.
  - Kii is **कीई**, never की (the possessive).
- **Lint.** Lesson bodies must never contain a space + *on* + letters + `=`. In Hindi text this can only occur inside RR, so write `:` after RR words.

### 2.2 Speech levels and pronouns

| Korean | Hindi gloss | Example |
|---|---|---|
| 반말 | तुम, -ो command | 뭐 해? → तुम क्या कर रहे हो? |
| 요-form | आप, -इए command | 앉아요 → बैठिए |
| -습니다 | आप, more formal words | 감사합니다 → धन्यवाद |
| -시-, 드시다 | आप; respect plural for a third person; लीजिए for eating | 할머니가 주무세요 → दादी जी सो रही हैं |
| 주세요 | -इए, **no कृपया** | 물 주세요 → पानी दीजिए |
| 주시겠어요? | -इएगा? | 찍어 주시겠어요? → खींच दीजिएगा? |

- **Both directions.** A 요 / -습니다 / -시- line never gets तुम, and a 반말 line never gets आप. Fixed phrases take no pronoun.
- **Never तू** (intimate or rude). `polite` may mention it once.
- **कृपया** only where the English says "please" *and* the line is formal or written.
- **जी.** 네 = जी / जी हाँ; 아니요 = जी नहीं; 응 = हाँ; 아니 = नहीं; 민수 씨 = मिनसू जी. Never add जी where the Korean has none.
- **Addressee gender.** Use generic masculine forms, unless the Korean marks the addressee: 언니 / 누나 → female, 오빠 / 형 → male.

### 2.3 Fixed phrases (one gloss everywhere)

| Korean | Hindi | Korean | Hindi |
|---|---|---|---|
| 안녕하세요 | नमस्ते | 저기요 | सुनिए |
| 안녕히 가세요 | आराम से जाइए (जाने वाले से) | 안녕히 계세요 | आराम से रहिए (रुकने वाले से) |
| 감사합니다 / 고마워요 / 고마워 | धन्यवाद / शुक्रिया / थैंक्स | 죄송합니다 / 미안해요 | माफ़ कीजिए / सॉरी |
| 잘 먹겠습니다 | खाने के लिए धन्यवाद | 잘 먹었습니다 | बहुत स्वादिष्ट था, धन्यवाद |
| 수고하셨습니다 | आज की मेहनत के लिए धन्यवाद | 수고했어(요) | बढ़िया काम किया |
| 수고하세요 | आपका काम अच्छा चले | 잘 부탁드립니다 | आपके सहयोग की उम्मीद है |
| 좀 | ज़रा | 혹시 | शायद / कहीं |
| 선생님 | टीचर (सर / मैम) | 사장님 | मालिक |
| 과장님 / 팀장님 | मैनेजर / टीम लीडर | 오빠·형 / 언니·누나 | भैया / दीदी (§4.6) |

### 2.4 Gender of "I": take the first rule that fits

**1. A neutral wording with the same tense and meaning.**

| Pattern | Hindi |
|---|---|
| like / have | मुझे X पसंद है / मेरे पास X है |
| be (with an invariant noun: टीचर, not शिक्षक) | मैं स्टूडेंट हूँ |
| hungry / don't know | मुझे भूख लगी है / मुझे नहीं पता |
| past of a transitive verb (agrees with the object) | मैंने X खाया |
| -아/어야 해요 **only** | मुझे काम करना है |
| -(으)ㄹ 수 있어요 | मुझे कोरियाई बोलनी आती है |
| -고 싶어요 | मेरा घर जाने का मन है |

- **Never reword across a cue.** मुझे जाना है means "have to".

**2. The scene fixes the speaker.**
- 오빠 / 언니 in the speaker's mouth → female; 형 / 누나 → male.
- An English he / she, or a named speaker, also decides.

**3. Otherwise, the unspaced pair, masculine first, on the inflected word only:** (मैं) घर जाता/जाती हूँ.
- **Never a spaced ` / `**: that is the dialogue and alternatives separator.
- Why this rule rather than `hi.md`'s:
  - the answer is Korean, which has no gender;
  - a masculine default would misgender a large part of a fan-heavy audience;
  - alternating forms cannot stay consistent across four writers.

## 3. Glossary, screen names, labels

### 3.1 Terms (closed list)

| Idea | Term |
|---|---|
| Korean particle | **पार्टिकल**. At first use: "हिंदी के परसर्ग की तरह शब्द के बाद". Hindi ने / को / में = **परसर्ग** |
| 은/는 · 이/가 · 을/를 | **विषय · कर्ता · कर्म पार्टिकल**. Not टॉपिक मार्कर |
| noun · pronoun · verb · adjective | संज्ञा · सर्वनाम · क्रिया · विशेषण |
| 크다, 좋다 | **विशेषण-क्रिया** |
| dictionary form · stem | **शब्दकोश रूप** (= -ना) · **स्टेम** (once: "धातु") |
| -아요, -고 | **एंडिंग** (not प्रत्यय) |
| 공부하다 | **하다-क्रिया** |
| 요-form | **요-रूप** |
| -습니다 / 요 / 반말 | **औपचारिक / विनम्र / अनौपचारिक**. Together: **विनम्रता के स्तर** |
| -(으)시- | **सम्मानसूचक** |
| 씨, 님; जी, भैया | **उपाधि / संबोधन शब्द** |
| 개, 명, 잔 | **काउंटर** (not वर्गीकारक) |
| two number sets | **मूल कोरियाई / साइनो-कोरियाई** (never चीनी संख्याएँ) |
| tenses | भूतकाल / वर्तमान काल / भविष्य काल |
| word order · question word · connector · softener | शब्द-क्रम · प्रश्नवाचक शब्द · योजक शब्द · नरम करने वाले शब्द |
| Hangul · vowel · consonant · block · 받침 | हंगुल · स्वर · व्यंजन · **ब्लॉक** ("एक ब्लॉक = एक अक्षर") · **अंतिम व्यंजन** |
| ㅋㅌㅍㅊ / ㄲㄸㅃㅆㅉ / ㄱㄷㅂㅅㅈ | **महाप्राण / कसे / सादे व्यंजन** |
| sound change · 연음 · 비음화 | **ध्वनि-बदलाव** · **जोड़कर बोलना** · **नासिक्य बदलाव** |
| the RR line | **रोमन**. Never उच्चारण, which is the hi-en term |
| loanword · stroke order | विदेशी शब्द · लिखने का क्रम |

### 3.2 Screen names

- **Tabs:** आज · पाठ · अभ्यास · दोहराव · प्रगति.
- **Buttons:** पता है · फिर से · जाँचें · 📖 ब्राउज़ · मेरे वाक्य.
- **Never named:** the Read tab (पढ़ना), any trainer or drill.
- **`hangul`, "Tap a letter to replay":** keep it, because the stroke cells work (spec §8, §10.4).
- **`sound-changes`, the Read-tab drill line:** drop it, and point to पाठ / अभ्यास / दोहराव instead.

**For the lead.** The Hindi interface pack was written for hi-en, so in it "Korean" → अंग्रेज़ी and "romanization" → उच्चारण.
- `native/hi/ko/ui.json` must override at least the 31 keys of `native/es/ko/ui.json`.
- Use कोरियाई / हंगुल / रोमन, for example क्या आप हंगुल पढ़ सकते हैं?, Aa रोमन: चालू.

### 3.3 Labels (w1; progress keys, so they are final once written)

**Decks, in id order:**
- हंगुल के स्वर · हंगुल के व्यंजन · हंगुल: एडवांस्ड · उच्चारण टिप्स
- ज़रूरी वाक्य · परिचय · ज़रूरी वाक्य 2 · पूछताछ
- कैफ़े और कन्वीनियंस स्टोर · रोज़मर्रा की संख्याएँ · काउंटर · मौसम और भावनाएँ · योजक शब्द
- डॉक्टर और फ़ार्मेसी · घर और छोटे-मोटे काम · सम्मानसूचक रूप · जगहें और इमारतें · शौक
- खाने के शब्द · ड्रिंक्स · गतिविधियाँ · टीवी और मनोरंजन · जगह और दिशा के शब्द
- मुख्य क्रियाएँ · पार्टिकल · संख्याएँ · मीठी बातें · क्यूट बातें · फ़्लर्टिंग · दोस्तों से चैट
- जोश और तारीफ़ · दोस्तों के साथ · के-पॉप और फ़ैन कल्चर · सोशल मीडिया और स्लैंग
- डेटिंग: अगला क़दम · काम और दफ़्तर · हल्की-फुल्की बातचीत · खाना और ऑर्डर
- रास्ता और सफ़र · समय और दिन · परिवार और लोग · विशेषण · के-ड्रामा के डायलॉग

Every label is unique, none is मेरे वाक्य, and none takes a danda.

**Groups:** बुनियाद · रोज़मर्रा · शब्दावली · ग्रामर · सामाजिक.

**Level titles:** अंकुर · स्टूडेंट · सीनियर · प्रो · मास्टर · गुरु. सीनियर / जूनियर in Indian colleges ≈ 선배 / 후배.

### 3.4 Lesson titles

Stored as "N · title". Each keeps the English title's Hangul. Cross-references take the form "पाठ N, «title»".

1 एक बार में हंगुल · 2 विनम्रता के स्तर · 3 लोगों से मिलना · 4 ध्वनि-बदलाव: 감사합니다 अलग क्यों सुनाई देता है · 5 संज्ञा और 은/는 · 6 있어요 और 없어요 · 7 सर्वनाम और प्रश्नवाचक शब्द · 8 क्रियाएँ · 9 वर्तमान काल: 요-रूप · 10 भूतकाल: 았어요 / 었어요 · 11 भविष्य और योजनाएँ: -(으)ㄹ 거예요 · 12 शब्द-क्रम और 을/를 · 13 에 और 에서, और पार्टिकल का नक्शा · 14 मना करना: 안 और -지 않아요 · 15 도 और 만: भी और सिर्फ़ · 16 संज्ञा और क्रिया को जोड़ना · 17 चाहना और पसंद करना: -고 싶어요, 좋아해요 · 18 संख्याओं की दो प्रणालियाँ · 19 बाहर खाना · 20 घूमना-फिरना · 21 उपाधियाँ और सम्मानसूचक रूप · 22 योजनाएँ बनाना · 23 कोरियाई लोगों की तरह टेक्स्टिंग · 24 काउंटर · 25 वाक्य जोड़ना: -고, -지만, -아/어서 · 26 भूतकाल में कहानी सुनाना · 27 संज्ञा का वर्णन: 좋은 날씨, 큰 가방 · 28 तुलना: 보다, 더, 제일 · 29 न कर पाना, कर पाना और न जानना · 30 करना पड़ना: -아/어야 해요 · 31 सम्मानसूचक क्रियाएँ · 32 विनम्रता से चीज़ें माँगना · 33 दफ़्तर की कोरियाई

## 4. Grammar bridges and breaks

The Hindi facts below are general grammar knowledge, including the NCERT-style कारक table; no textbook was opened, so read them as [convention, not opened]. The Hangul in this section is for the writers' understanding. A lesson may use it only if the English lesson has the same Hangul, or under `_waive`.

### 4.1 SOV and the कारक map

- **What holds:**
  - Same word order, including the long frame कौन · कब · किसके साथ · कहाँ · क्या · क्रिया.
  - Question words stay in place: यह क्या है? = 이거 뭐예요?
  - Negation goes right before the verb.
- **What breaks:**
  1. **Spacing.** Hindi writes postpositions apart (घर में); Korean glues them on (집에). Expect 집 에.
  2. **क्या.** It opens a Hindi yes/no question; Korean only raises the voice. क्या is also 뭐.
  3. **"You".** Korean drops subjects more often and has no "you".

| कारक | Hindi | Korean | Note |
|---|---|---|---|
| कर्ता | — / ने | 이/가, topic 은/는 | ने depends on tense and verb; the Korean particle never does |
| कर्म | को (definite or animate objects) | 을/를 (every object) | चाय पीता हूँ has no को, but 차를 마셔요 |
| संप्रदान | को / के लिए | 에게 / 한테 | one sentence at most |
| experiencer | मुझे भूख लगी है | 저는 + 이/가 | 저에게 배고파요 ✗ |
| अधिकरण | में / पर | 에 (be, go, time) or 에서 (do) | one में for both: घर में हूँ = 집에 있어요; घर में आराम = 집에서 쉬어요; सोमवार को = 월요일에 |
| अपादान · करण | से | 에서 (from) · (으)로 (by) | |
| comparison | से | 보다 | exact match (§4.7) |
| संबंध | का / की / के | 의, usually dropped (제) | no agreement |
| संबोधन | अरे … | 아/야 | 민수야! |

Hindi drops the postposition with जाना (घर जाता हूँ). Korean wants 에 (집에 가요), though casual 집 가요 also exists, so this error costs little.

### 4.2 भी, ही, तो

- **भी ↔ 도.**
  - **Holds:** भी + नहीं = "either" (मैं भी नहीं = 저도 안).
  - **Breaks:** 도 *replaces* 은/는, 이/가 and 을/를 (저는도 ✗). It stacks only after 에 and 에서, as भी stacks after में (घर में भी = 집에도).
- **ही / सिर्फ़ ↔ 만.**
  - **Holds:** 만 goes in the same place as ही.
  - **Breaks:** ही is also emphatic.
- **तो ↔ 은/는.**
  - **Holds:** only for contrast (कॉफ़ी तो नहीं ≈ 커피는 안).
  - **Breaks:** 은/는 appears in almost every sentence. Teach it as "जहाँ तक … की बात है".

### 4.3 है has three jobs; Korean splits them (`isseoyo`)

| Hindi | Korean | Job |
|---|---|---|
| मैं स्टूडेंट हूँ | 학생이에요 | A = B |
| मैं स्कूल में हूँ | 학교에 있어요 | location |
| मेरे पास समय है | 시간이 있어요 | having (समय is the Hindi subject, as with 이/가) |
| यहाँ एक स्कूल है | 여기에 학교가 있어요 | existing |
| समय नहीं है · डॉक्टर नहीं हूँ | 시간이 없어요 · 의사가 아니에요 | one नहीं है, two Korean words |

### 4.4 Verbs, negation, ability

- **Dictionary form and stem.** 다 ≈ -ना (먹다 ≈ खाना); स्टेम 먹 ≈ the धातु खा.
- **No agreement.** Korean verbs do not change for person, gender or number. Stress this.
- **Describing verbs.** Hindi अच्छा है is one Korean word, 좋아요 (좋아이에요 ✗).
- **하다 verbs.** 하다 ≈ करना: पढ़ाई (नहीं) करता = 공부 (안) 해요. The split works the same way.
- **Present.** One form covers जाता हूँ, जा रहा हूँ, and a question by tone.
- **Past.** खाया, खाया है and खा चुका all = 먹었어요, with no ने and no gender. अभी तक नहीं खाया = 아직 안 먹었어요, past in both languages, so no trap.
- **Future.** जाऊँगा ≈ 갈 거예요. The presumptive (महँगा होगा) = the guessing use (비쌀 거예요).
- **Negation.** नहीं before the verb = 안 before the verb (커피를 안 마셔요). Also:
  - मत ≈ -지 마세요;
  - नहीं करूँगा / नहीं कर सकता ≈ 안 / 못;
  - सकना ≈ -(으)ㄹ 수 있어요;
  - मुझे नहीं पता = 몰라요.

### 4.5 मुझे पसंद है vs 좋아해요

- In मुझे कॉफ़ी पसंद है, the thing liked is the subject. That matches **커피가 좋아요**. 좋아해요 needs 을/를.
- **Predicted error:** 커피가 좋아해요 ✗ [inference]. It parallels Manrique (2022) on Filipino *gusto* (carried from `tl-ko.md`).
- **Teach:** «मुझे X पसंद है» = X가 좋아요 = X를 좋아해요.
- **-고 싶어요:** gloss it मन है / चाहता/चाहती हूँ, never मुझे … जाना है.

### 4.6 Politeness and address

- **What holds** [inference]:
  - आप / तुम follows age and closeness, like 요 / 반말.
  - Moving to तुम takes consent, like 말 놔도 돼요.
- **What breaks** (teach these four):
  1. Hindi marks respect on the pronoun, agreement, the imperative and जी. Korean marks it **only on the verb ending** and omits "you". 당신 ≠ आप: use name + 씨, a title, or nothing.
  2. तुम to a young waiter is normal in India; every adult stranger in Korea gets 요. Predicted error: 반말 to staff.
  3. -습니다 marks a situation, not a person. Compare धन्यवाद vs थैंक्स.
  4. Korean has a humble "I" (저 / 나); Hindi has none.
- **-시- = the respect plural**, a strong bridge.
  - पिताजी घर पर हैं ≈ 계세요.
  - आपका शुभ नाम ≈ 성함.
  - लीजिए ≈ 드세요.
  - **Breaks:** Hindi uses one plural for both the listener and a third person; Korean splits them into 요 and -시-. Never use -시- for yourself (저는 가세요 ✗).
- **Address terms.**
  - name + जी ≈ name + 씨 / 님. 씨 is for peers only; neither is used with your own name.
  - भैया / दीदी ≈ 형·오빠 / 누나·언니, but the Korean choice depends on the **speaker's** gender (a man says 형 / 누나).
  - Indians call drivers भैया; Koreans say 저기요 / 기사님.
  - An Indian "सर" with no name ≈ a Korean title on its own (과장님).

### 4.7 Comparing, modifiers, joining, numbers

- **Comparing.** X Y से सस्ता है = X가 Y보다 싸요: exactly the same order. ज़्यादा ≈ 더, सबसे ≈ 제일.
- **Modifiers.**
  - Adjectives come first in both languages, but Hindi agreement becomes a Korean ending (크다 → 큰).
  - Korean has no जो: everything goes before the noun.
  - The bridge is the -ने वाला phrase.
- **Joining.**
  - -कर ≈ -고 / -아서 for a sequence; neither takes a tense.
  - क्योंकि puts the reason second. Korean puts it first (바빠서), like …था, इसलिए.
  - Story words: पहले, और फिर, उसके बाद, इसलिए, लेकिन, आख़िर में.
- **Numbers.**
  - Hours and age use native Korean numbers, and Hindi speakers already use Hindi numbers there (तीन बजे = 세 시), so there is little hour error.
  - Sino-Korean is ten words plus a rule. Hindi 1–100 must be memorised, so this is encouraging.
  - Grouping: Hindi already groups unlike English (लाख), so 10만 = 1 लाख.
  - साढ़े तीन ≈ 세 시 반. सवा and पौने have no Korean equivalent: use 분.
  - 살 sounds like साल: present it as a labelled coincidence, not an etymology. 살 is for age only.
- **Counters.** दो कप चाय → 차 두 잔: the number comes after the noun. Expect 두 커피 ✗. The eastern Hindi ठो classifier is [unverified].

## 5. Error zones, ranked

**1. Stops** (the evidence is direct).

- **[research] Hindi listeners:** Ngaihte & Holliday 2019, 15 Hindi listeners in Delhi, perception only.
  - Tense stops were heard as unaspirated.
  - **Lax and aspirated stops were both heard as aspirated.**
  - Affricates were heard mostly as voiced.
  - In Seoul, lax vs aspirated is now mainly pitch, low after ㄱ ㄷ ㅂ ㅈ ([Wikipedia](https://en.wikipedia.org/wiki/Korean_phonology)).
- **[research] Korean listeners hearing Hindi:** Ahn 2009; 45 listeners, one speaker's stimuli, no affricates or retroflexes. The table (the prose swaps the first two figures) gives:
  - unaspirated → fortis, 88%;
  - aspirated → aspirated, 90.1%;
  - voiced → lenis, 94.6%;
  - breathy → aspirated, 87%.
- **[research] Hindi learners:** Park & Narang 2019, 5 JNU learners from Bihar.
  - Word-initial VOT was native-like.
  - Learners voiced medial stops.
- **[research chain] Reading RR:** Indian English p and k are unaspirated (Narkar & Staroverov 2023; 102 speakers; p and k only).
  - So RR *k t p ch* read the Indian way → heard as ㄲ ㄸ ㅃ ㅉ.
  - That *t* and *ch* behave the same way is [inference].
- **What to teach:**
  - ग द ब ज are safe for ㄱ ㄷ ㅂ ㅈ. The native onset (voiceless, a little air, low pitch) is a later goal.
  - Never क त प च for the plain stops.
  - RR k t p ch = ख थ फ छ (फ, not फ़); RR kk tt pp jj = क त प च.
  - ㅅ / ㅆ map onto one Hindi स: teach the difference as tension.

**2. RR vowels.**
- Misreadings to expect: *eo* as "यो", *eu* as "यू", *ae* as a diphthong, *wo* as "वो", *yeo* as "यो".
- The spelling सियोल teaches the "यो" reading. It was seen only in a Bhojpuri wiki title and in the app roadmap.
- Indian transliteration writes *a* for both अ and आ.
- Hindi keeps अ / ऑ / ओ apart, so the ear is less of a problem than the spelling [inference].

**3. Particles:** को-thinking; में → 에 / 에서; 커피가 좋아해요 ✗; spaces before particles.

**4. है:** 저는 고양이예요 for "I have a cat"; 좋아이에요 ✗; 안 있어요 ✗.

**5. Politeness:** 당신; 반말 to staff; -시- for yourself.

**6. Lesson-local traps** [inference]: 그 vs 저 (वह covers both); 들 everywhere; counter order; 이에요 / 예요; 강 said as "गांग"; final ㄹ trilled; final stops released.

## 6. Reading guide

**Policy: comparisons, not readings.** Devanagari is used only for **one sound** (ㅏ ≈ आ) or one syllable with explicit signs and a halant (옷 ≈ "ओत्"), together with लगभग or a mouth description. The reasons:
1. Schwa deletion makes word respellings unpredictable, and the inherent अ is itself nearly ㅓ.
2. Devanagari has no letter for ㅡ, and no separate one for ㅓ.
3. Press spellings (सियोल) fix wrong readings.
4. Hangul is the goal.

### 6.1 Sound table (card notes ko.c0001–c0060, the `hangul` table, deck descriptions)

| Jamo (RR) | Comparison | Trap |
|---|---|---|
| ㅏ a | आ (short) | not अ |
| ㅓ eo | between अ and ऑ: jaw open, lips **not** rounded | not ओ / यो |
| ㅗ · ㅜ · ㅣ | ओ (rounded) · उ / ऊ · इ / ई; length does not matter | |
| ㅡ eu | उ with the lips spread | no Hindi letter |
| ㅐ = ㅔ | ए | not "आए" / "अइ" |
| ㅕ · ㅝ · ㅚ ㅙ ㅞ · ㅢ | य + ㅓ · व + ㅓ · about वे · ㅡ + ई | *yeo* ≠ यो; *wo* ≠ वो |
| ㄱ ㄷ ㅂ ㅈ | soft ग द ब ज | never क त प च |
| ㅋ ㅌ ㅍ ㅊ | ख थ फ छ, with strong air | फ ≠ फ़ |
| ㄲ ㄸ ㅃ ㅉ | क त प च: no air, tight, high pitch | not long; between vowels the क्क of पक्का is fair [inference] |
| ㅅ / ㅆ | स / a tight स; before ㅣ about श | |
| ㄷ ㅌ ㄸ | the त / द family, **not** ट / ड; Korean has no retroflex ("nearer dental" is [inference]; Wikipedia says alveolar) | |
| final ㅇ | ङ as in रंग, without the ग | 강 ≠ "गांग" |
| ㄹ | a single-tap र between vowels; ल at the end; ㄹㄹ = the ल्ल of दिल्ली | a final ㄹ is not र |
| final ㄴ · ㅎ | a full न, not ँ · ह, often silent between vowels | |
| finals | क् त् प्, unreleased; ㅅ ㅈ ㅊ ㅌ ㅎ → त् (옷 ≈ "ओत्") | not "ओस" |

**Script bridge:** Hangul draws mouth shapes, as क ख ग घ ङ is ordered by mouth position; one **ब्लॉक** = one **अक्षर**. Breaks: vowels are full letters, not मात्रा; the final consonant sits inside the block; reading block by block stops linking.

### 6.2 Guide in Hindi (for `hangul`, which needs `_waive`; parts go into `sound-changes` and the three Hangul deck descriptions)

> **रोमन कैसे पढ़ें** — यह अंग्रेज़ी पढ़ने वालों के लिए बना है, इसलिए:
> - **a** हमेशा "आ"। "अ" जैसा स्वर **eo** है: मुँह खुला, होंठ गोल नहीं। *seoul* में "यो" नहीं है।
> - **eu**: "उ", पर होंठ फैलाकर। **ae** और **e**: दोनों "ए"। **wo** = व + eo।
> - **k, t, p, ch** = ख, थ, फ, छ — हथेली पर हवा लगे। **kk, tt, pp, jj** = क, त, प, च — बिना हवा, गला कसकर; लंबे नहीं।
> - **g, d, b, j** शुरू में हल्के ग, द, ब, ज — शुद्ध क, त, प, च नहीं। **t, d** त / द जैसे, ट / ड नहीं।
> - **r** स्वरों के बीच हल्का र; **l** अंत में साफ़ ल: *mul*। **ng** = रंग का ङ, बिना ग।
> - अंत में **k, t, p**: बंद करके रुकें, हवा नहीं: *bap*। अंतिम व्यंजन अगले स्वर से जुड़ता है: *hangugeo*।
> - रोमन बोलने के लिए, हंगुल लिखने के लिए: 감사합니다 = *gamsahamnida*।

## 7. Per-lesson notes

**B** = what to build on. **R** = an English-built passage to rewrite, not translate. Unmarked entries are [inference].

| # | id | Notes |
|---|---|---|
| 1 | `hangul` | B: ब्लॉक ≈ अक्षर; §6.2. R: vowel-table glosses → §6.1; keep "tap a letter"; `_waive` |
| 2 | `polite` | B: आप / तुम ≈ 요 / 반말; the four breaks (§4.6); धन्यवाद / शुक्रिया / थैंक्स; 네 = जी. R: table headers औपचारिक / विनम्र / अनौपचारिक |
| 3 | `meet` | B: नमस्ते at any hour; age sets address in both cultures; Hindi has no "who leaves" goodbye. R: keep माइक / हुआन; an Indian name (라훌) only under `_waive` |
| 4 | `sound-changes` | B: 비음화 ≈ school संधि जगत् + नाथ = जगन्नाथ [not opened]; ㄹㄹ ≈ दिल्ली. R: drop the drill line |
| 5 | `nouns` | B: no articles in either language, no gender, मेरा घर = 제 집, 학교 / 학생 like विद्यालय / विद्यार्थी (analogy only). Trap: two-way यह / वह; 들 |
| 6 | `isseoyo` | R: the "English 'is'" opening → §4.3 |
| 7 | `pronouns-questions` | B: question words stay in place; क्या has two jobs; हमारे पापा ≈ 우리 엄마; आप ≠ 당신 |
| 8 | `verbbasics` | B: -ना, धातु, no agreement, विशेषण-क्रिया without है, करना. R: the "to …" framing |
| 9 | `verbs` | B: one form = जाता हूँ + जा रहा हूँ + question |
| 10 | `past` | B: one past, no ने or gender; अभी तक नहीं = 아직 안 + past. R: "I ate / have eaten" → the Hindi trio |
| 11 | `future` | B: -ऊँगा; presumptive होगा. R: "kkeoyeyo" → "कसा क" |
| 12 | `sov` | B: SOV in both languages; 을/를 vs को. R: every "English is SVO" line |
| 13 | `particles` | B: में → 에 / 에서; से = from; tip: "ने, को, से, में की तरह — पर 에 और 에서 दोनों 'में'". R: "English 'at'" |
| 14 | `negation` | B: नहीं before the verb = 안; पढ़ाई नहीं करता = 공부 안 해요; नहीं है → 없어요 / 아니에요 |
| 15 | `do-man` | B: §4.2; भी + नहीं |
| 16 | `sentences` | B: same frame and order as Hindi; Korean drops है. R: the "English order" mistakes |
| 17 | `want-like` | B: §4.5 |
| 18 | `numbers` | B: §4.7. R: "like English digits" → "दस शब्द, एक नियम" |
| 19 | `food` | B: दो कप चाय vs 차 두 잔. Optional prose tip: many dishes, even kimchi, contain fish or meat |
| 20 | `getting-around` | B: Delhi Metro ≈ Seoul subway (two-language announcements; metro card ≈ टी-मनी) |
| 21 | `titles` | B: §4.6; अरे … ≈ 아/야. R: "(you female / male)" → "अगर आप महिला / पुरुष हैं" |
| 22 | `plans` | B: चलो खाते हैं ≈ 먹자; चलें? ≈ -ㄹ까요?; चलोगे? ≈ -ㄹ래?; exits ≈ Metro "गेट नंबर" |
| 23 | `texting` | B: ㅋㅋ ≈ हाहा; 읽씹 ≈ व्हाट्सऐप blue ticks with no reply |
| 24 | `counters` | B: the number comes first in Hindi, last in Korean; लोग ≈ 명 |
| 25 | `joining` | B: -कर; reason first with इसलिए. R: "and / but / so" → और / लेकिन / इसलिए |
| 26 | `story` | B: the story words (§4.7) |
| 27 | `noun-modifiers` | B: -ने वाला. R: "no that / which" → "कोरियाई में 'जो' नहीं" |
| 28 | `compare` | B: से = 보다, in the same place |
| 29 | `cant` | B: नहीं करूँगा / नहीं कर सकता ≈ 안 / 못; spicy food is an easy win for Indian learners |
| 30 | `have-to` | B: मुझे … है / पड़ेगा; ज़रूरत नहीं = 안 가도 돼요. R: cross-reference → पाठ 32, «विनम्रता से चीज़ें माँगना» |
| 31 | `honorific` | B: respect plural = -시-; शुभ नाम = 성함; लीजिए = 드세요 |
| 32 | `requests` | B: 좀 = ज़रा; -इएगा ≈ 주시겠어요; "बैठ जाऊँ तो चलेगा?" ≈ -면 안 돼요?; "ले लूँ?" ≈ -아도 돼요? |
| 33 | `office` | B: a title alone ≈ "सर"; Indian job titles (§2.3); 회식 ≈ टीम डिनर; the 운전해야 돼요 excuse for non-drinkers |

## 8. Row conventions

### 8.1 Format (spec §4–6)

- **Hangul.** The Hangul runs must be set-equal to the English row's.
  - Exceptions need `"_waive":["hangul"]` + `_note`. For a lesson body, put them on the title row.
  - Planned exceptions: `hangul`, and `meet` only if an Indian name is used.
- **Fields:** exactly one ` / ` per dialogue; `__` blanks kept; no `{ }` in glosses; `q p why hint` ≤ 400 characters, options ≤ 200 and never identical within an item; meanings distinct within a deck.
- **Lesson bodies.** Same `<h3>` / div / table structure. Tokens unchanged and in order. No `<img> <svg> <script> <style>`, no `javascript:`.

### 8.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) first.

- **Level.**
  - तुम / -ो for a 반말 answer.
  - आप / -इए for a 요 / -습니다 / -시- answer.
  - Copy the English tags and scene cues ("दोस्त को मैसेज:", "किसी बुज़ुर्ग से:"). Never use आप with (अनौपचारिक).
- **Tense.**
  - Present: habitual -ता है (-रहा है only if the English is progressive).
  - Past: perfective.
  - Future: -ऊँगा / -एगा (never -ने वाला).
  - Have-to: मुझे … है.
  - Want: मन है.
- **Other cues.**
  - "(I)" → "(मैं)", then apply §2.4.
  - Method cues stay as they are: (안 से), (संख्या हंगुल में लिखें).
  - Instructions use -ें.

### 8.3 Names and localisation

- **People:** Kii कीई, 민수 मिनसू, 리사 लिसा, Mike माइक, Juan हुआन, 지은 जीउन.
- **Places:** कोरिया, सियोल, बुसान, म्योंगदोंग, ओक्लाहोमा.
- **"The US": follow the row as given.**
  - 미국에서 왔어요 → मैं अमेरिका से हूँ.
  - When the Korean half moves to "I'm from ___" plus a Countries deck, gloss what the rows say (मैं ___ से हूँ). Never swap in India.
  - Prose may say "अपना देश लगाएँ: भारत", with no Hangul.
- **Local frame:** rupees without exchange rates; व्हाट्सऐप, यूपीआई, मेट्रो, ऑटो.
- **For the lead:** add 인도에서 왔어요, 저는 인도 사람이에요, 힌디어 할 수 있어요 and 인도 루피, and add 인도 to the Countries deck.

## 9. What not to do

- No Korean beyond the source row without `_waive`. Never edit `f`, `id`, `k`, `src` or any Korean field.
- No English in Latin script, except RR and its letters.
- No invented etymologies.
  - 살 / साल is a labelled coincidence; विद्यालय / 학교 is only an analogy.
  - No etymology beyond what the English says.
- No whole-word Devanagari respellings, and no comparisons with English sounds.
- No तू. No mixing आप and तुम towards the learner. No कृपया with plain 주세요. No added जी.
- No silent gender choice, and no spaced gender slash.
- Never name the Read tab, a trainer or a drill.
- Never call 은/는 "तो" or 을/를 "को".

## 10. Review questions and unverified claims

**Ask a Hindi speaker** (answer "OK" or give the natural version):
1. Is आप + -ें right for the app, with -इए for 요 glosses?
2. Is the pair जाता/जाती acceptable, and is मन है right for -고 싶어요?
3. Do आराम से जाइए / रहिए, आपका काम अच्छा चले and आपके सहयोग की उम्मीद है sound natural?
4. Are विषय / कर्ता / कर्म पार्टिकल and अनौपचारिक clear?
5. Is ㅓ "between अ and ऑ" a fair description? Is ㄲ ≈ क्क? Does 혹시 = शायद / कहीं work?
6. Are the deck labels and level titles natural?

**Limits of the evidence:**
- The four studies are small (§5.1 gives their limits).
- [inference]: ㅈ → ज; ㄷ nearer dental; ㄲ ≈ क्क; eastern ऐ; urban फ = [f]; the ठो classifier.
- **Not found:** any study of Hindi speakers' Korean vowels, particles or honorifics.
- **Not confirmed:**
  - the NEP year, CBSE, King Sejong Institutes and TOPIK figures;
  - सियोल as the press norm;
  - the कारक and संधि examples.
- **For the lead:**
  - `ui.json` overrides;
  - India rows;
  - `_waive` on `hangul`;
  - there is no hi `trainer.json`, so the trainers stay off.

## Sources (opened 2026-11-23)

- [Ngaihte & Holliday 2019 (poster)](https://academic.hanyang.ac.kr/documents/10980062/13048521/HISPhonCog2019_P23_Ngaihte_Holliday.pdf/22053edc-6ede-f2d5-ee0e-1eb3be197dac)
- [Ahn 2009, *Phonetics and Speech Sciences* 1(3)](https://koreascience.kr/article/JAKO200934939598173.pdf)
- [Park & Narang 2019, *Interdisciplinary Journal of Linguistics* 12](https://linguistics.uok.edu.in/Files/f6ec3740-422d-4ac1-9f52-ddfe2cffcb28/Journal/0dac0006-8607-4da9-9d3e-d3f3fa79c4a6.pdf)
- [Narkar & Staroverov 2023, *JSAL* 12](https://ojs.ub.uni-konstanz.de/jsal/index.php/jsal/article/view/214)
- Wikipedia: [Korean phonology](https://en.wikipedia.org/wiki/Korean_phonology), [Korean language education in India](https://en.wikipedia.org/wiki/Korean_language_education_in_India)
- Local files: `docs/HALVES-SPEC.md`, `docs/profiles/tl-ko.md`, `docs/profiles/hi.md`, `docs/briefs/tl-ko-writer.md`, `tools/halves/native/{tl,es,en}/ko/`, `tools/halves/target/ko/`, `tools/i18n/hi/`.
