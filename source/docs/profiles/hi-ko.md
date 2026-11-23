# Hindi speakers learning Korean: pair profile

Course `hi-ko` is Korean for Hindi speakers. It is a standard course with two halves:
- the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards; spec: `docs/HALVES-SPEC.md`);
- a Hindi native half `tools/halves/native/hi/ko/`, filled by four writers (w1–w4) from `mk_native.js hi` work files.

This profile is the writers' style and content authority. It follows the section plan of `docs/profiles/tl-ko.md`, in compact form. It settles in advance the questions the es-ko review had to settle afterwards (`tools/halves/native/es/ko/REVIEW.md`).

**Relation to the app's other Hindi documents**
- **Inherited from `docs/profiles/hi.md`** (Hindi speakers learning English):
  - address with आप and the polite imperative;
  - typography: danda, nukta in NFC, chandra ऑ, international digits, quotes, dashes, uninflected loans;
  - the Hindi school terms संज्ञा, क्रिया, स्वर, व्यंजन.
- **Reversed here (two rules):**
  1. **No Latin script for English words.** In hi-en, English stays in Latin letters because it is the target language. In hi-ko, English is nobody's target, so every loan is written in Devanagari (इंस्टाग्राम, ओके, मैनेजर). The only Latin text allowed is the Revised Romanization and its letters (*gang*, *eo*, *kk*), which belong to the Korean side.
  2. **The gender rule for first-person lines** (§3.2). `hi.md` bans the slash form in practice prompts. Here an unspaced pair is allowed as the last resort.
- **Terms already on screen:**
  - tab names from the interface dictionary `tools/i18n/hi/ui.json`;
  - Korean lesson-title wording from the Hindi roadmap `tools/i18n/hi/roadmap.json` (हंगुल, स्टेम, काउंटर, सम्मानसूचक, 요-रूप, ध्वनि-बदलाव).

**Evidence tags:**
- **[research]**: a study opened for this profile, with its sample named.
- **[convention]**: what grammars, schools, dictionaries or the app's own strings do.
- **[inference]**: this profile's own reasoning.
- **Every Hindi sentence in this profile is [inference]**: no native speaker has checked it. §11 lists what to check first.

## 1. Summary

1. **Register.** Everyday Hindustani in Devanagari, at the level of popular Indian apps.
   - Common English loans in Devanagari: कार्ड, लेवल, टीचर, मैनेजर.
   - Everyday Hindi where it is everyday: पाठ, अभ्यास, सवाल, ग़लती.
   - No heavy Sanskritised words (संगणक, अभ्यर्थी).
   - The learner is **आप**, with the polite imperative in -ें (पढ़ें, लिखें), as in the Hindi interface.
2. **Gender.** First-person glosses use one fixed order of choices (§3.2): a gender-neutral wording that keeps the cue; else the speaker's gender from the scene; else an unspaced pair (जाता/जाती).
3. **Korean politeness in glosses.**
   - 요, -습니다 and -시- lines addressed to the listener → आप forms, with the -इए imperative (दीजिए).
   - 반말 → तुम forms.
   - **Never तू.**
   - The tags (औपचारिक) / (विनम्र) / (अनौपचारिक) / (सम्मानसूचक) appear exactly where the English gloss has a tag.
4. **Biggest bridge.** Both languages are verb-final and put their markers after the noun. Question words stay in place in both (यह क्या है? = 이거 뭐예요?). The Hindi कारक table (ने, को, से, में, का…) is the map for Korean particles, and §5 says exactly where it breaks.
5. **Biggest sound bridge.** Hindi's four-way stop system gives a production recipe Koreans hear correctly [research]:
   - क त प च → ㄲ ㄸ ㅃ ㅉ;
   - ख थ फ छ → ㅋ ㅌ ㅍ ㅊ;
   - ग द ब ज → ㄱ ㄷ ㅂ ㅈ.
   It breaks in two places:
   - **listening**: Hindi listeners hear ㄱ and ㅋ alike [research];
   - **reading the romanization**: read the Indian-English way, RR *k t p ch* come out unaspirated, which Koreans hear as ㄲ ㄸ ㅃ ㅉ [research chain, §6.1].
6. **Devanagari respellings are comparisons for single sounds, never readings of words** (§7). Schwa deletion, the missing ㅓ / ㅡ letters and the press spelling सियोल make word respellings mislead.
7. **Top traps:**
   1. RR *k t p ch* and plain / aspirated listening;
   2. RR vowels *eo, eu, ae, wo, yeo*;
   3. को ≠ 을/를, and dative मुझे-constructions;
   4. में / से → 에 or 에서;
   5. है for both 이에요 and 있어요;
   6. a polite "you" (आप ≠ 당신) and 반말 to young staff;
   7. है added to describing verbs;
   8. spacing particles apart like Hindi postpositions.

## 2. Learners

- **K-pop and K-drama fans, mostly young.** Korean ranked fifth among the most popular languages for Indians aged 17–25 on Duolingo (Business Today, December 2021, cited by Wikipedia). A 2023 report claims a 50% rise in Korean learners in India in 2022 [convention: press, via [Wikipedia](https://en.wikipedia.org/wiki/Korean_language_education_in_India)].
- **School students.** Korean became an elective second language in India's revised education policy. In 2022, 2,342 students learned it in schools, with more than 20 regular classes, mostly in grades 6–8 (Wikipedia, same page).
  - The policy year (2020) and the CBSE details were **not confirmed** from an opened source.
  - Neither were King Sejong Institute locations or TOPIK numbers in India.
- **University students and job seekers.** JNU teaches Korean: one study's learners were third-year B.A. students there, raised in Bihar (Park & Narang 2019). Korean firms operating in India are a further motive [inference].
- **What they need first** [inference]:
  1. reading Hangul and the romanization correctly;
  2. 요 as the default;
  3. 있어요 / 없어요, 주세요, numbers and counters;
  4. particles glued to the noun.

## 3. Register, voice, gender and glosses

### 3.1 Address and voice

- **The learner is आप.**
  - Instructions take the -ें imperative: पढ़ें, सुनें, याद रखें. This is the interface's form (`hi.md` §2).
  - Avoid gendered verbs about the learner. Use:
    - imperatives;
    - impersonal forms (… कहा जाता है);
    - dative constructions (आपको पता है, आपको याद होगा).
  - Where a gendered form cannot be avoided, the generic masculine plural with आप (आप जानते हैं) is the accepted neutral polite form (`hi.md` §10).
- **Voice:** a friendly teacher.
  - Praise: बहुत बढ़िया!, शाबाश!
  - At most one exclamation mark per screen.
  - No यार / भाई to the learner.
  - No officialese (कृपया ध्यान दें कि…).
- **Error marks:** `✗` and `✓`, as in the English half.

### 3.2 Gender in first-person lines (one decision list, applied in this order)

Korean verbs never show gender. Hindi verbs do (मैं जाता हूँ / जाती हूँ), and the learner's gender is unknown. For every Hindi line in which the speaker says "I" (gloss, meaning, prompt, dialogue line, lesson example), take the first rule that applies.

**Rule 1: a gender-neutral wording with the same tense and meaning.** Allowed patterns:

| English | Neutral Hindi | Note |
|---|---|---|
| I like X | मुझे X पसंद है | Also the best gloss for X가 좋아요 |
| I have X / I have a younger sibling | मेरे पास X है / मेरा एक छोटा भाई-बहन है | |
| I'm a student / doctor / from the US | मैं स्टूडेंट / डॉक्टर हूँ, मैं अमेरिका से हूँ | Use invariant nouns: टीचर, not शिक्षक / शिक्षिका |
| I'm busy / hungry / I don't know | मैं बिज़ी हूँ, मुझे भूख लगी है, मुझे नहीं पता | |
| I ate X / I bought X (transitive past) | मैंने X खाया | With ने the verb agrees with the object |
| I have to work | मुझे काम करना है | **Only** for -아/어야 해요 |
| I can speak Korean | मुझे कोरियाई बोलनी आती है | For -(으)ㄹ 수 있어요 / 할 줄 알아요 senses only |
| I want to go home | मेरा घर जाने का मन है | For -고 싶어요 |

- **Never reword across a cue.**
  - मुझे जाना है means "I have to / I am to go". It must not gloss -고 싶어요 or a plain present.
  - Do not turn a present into a perfect, or a statement into a wish.

**Rule 2: the scene fixes the speaker.** Use that gender when:
- the Korean shows it: the speaker says 오빠 / 언니 → female; 형 / 누나 → male;
- or the English gloss shows it, or a named character speaks (Kii, 민수).

**Rule 3: otherwise, the unspaced pair, masculine first:** जाता/जाती, गया/गई, जाऊँगा/जाऊँगी, थका/थकी.
- Put the pair on the inflected word only: (मैं) घर जाता/जाती हूँ.
- **No spaces around this slash.** The spaced ` / ` is the dialogue separator (exactly one per dialogue gloss) and the separator for alternatives.
- Why this overrides `hi.md`:
  - The learner answers in Korean, which has no gender, so the pair tells them the Korean is the same either way.
  - A fixed masculine default would misgender much of a fan-heavy audience.
  - Alternating cannot be kept consistent across four writers.

**Addressee and third person.**
- "You" forms use the generic masculine plural (आप क्या खा रहे हैं?, तुम क्या कर रहे हो?), unless the Korean marks the addressee: 언니 / 누나 → female; 오빠 / 형 → male.
- Third persons follow the English pronoun (he / she) or the name.

### 3.3 Glossing Korean speech levels

| Korean form | Hindi gloss style | Example |
|---|---|---|
| 반말 (casual) | तुम + तुम-imperative (-ो) | 뭐 해? → तुम क्या कर रहे हो? · 먹어! → खाओ! |
| 요-form (polite) | आप + -इए imperative | 앉아요 → बैठिए · 이름이 뭐예요? → आपका नाम क्या है? |
| -습니다 (formal) | आप, with more formal word choice | 감사합니다 → धन्यवाद · 반갑습니다 → आपसे मिलकर ख़ुशी हुई |
| -(으)시- / 드시다 (honorific) | आप; respect plural for a third person; लीजिए for eat / drink | 할머니가 주무세요 → दादी जी सो रही हैं · 맛있게 드세요 → आराम से खाइए / लीजिए |
| 주세요 / -아/어 주세요 | -इए imperative, **no कृपया** | 물 주세요 → पानी दीजिए · 다시 말해 주세요 → फिर से बोलिए |
| -아/어 주시겠어요? | -इएगा, or क्या आप … देंगे? | 사진 좀 찍어 주시겠어요? → ज़रा एक फ़ोटो खींच दीजिएगा? |

- **Never तू.**
  - It is intimate or rude depending on region and relationship, and no Korean line in the course needs it.
  - The `polite` lesson may say once that very close friends' 반말 can feel like तू, but glosses keep तुम.
- **कृपया** only where the English has "please" **and** the line is formal or written (signs, announcements, -습니다 requests). Spoken Hindi puts politeness in the -इए form, not in कृपया.
- **जी:**
  - 네 = जी / जी हाँ, and 아니요 = जी नहीं; 응 = हाँ, and 아니 = नहीं.
  - Name + 씨 is glossed name + जी (민수 씨 → मिनसू जी).
  - Do not add जी where the Korean has no 네, 씨 or 님.
- **Pronoun policy, both directions** (the es-ko lesson):
  - a 요 / -습니다 / -시- line never gets तुम;
  - a 반말 line never gets आप;
  - fixed or impersonal glosses carry no pronoun at all (पानी दीजिए, पैक कर दीजिए).

### 3.4 Fixed phrases (one gloss everywhere)

| Korean | Hindi gloss |
|---|---|
| 안녕하세요 | नमस्ते |
| 안녕 (casual) | हाय (meeting) / बाय (leaving) |
| 안녕히 가세요 | आराम से जाइए (जाने वाले से) |
| 안녕히 계세요 | आराम से रहिए (रुकने वाले से) |
| 감사합니다 / 고마워요 / 고마워 | धन्यवाद / शुक्रिया / थैंक्स |
| 죄송합니다 / 미안해요 / 미안해 | माफ़ कीजिए / सॉरी / सॉरी (the tags tell them apart) |
| 괜찮아요 | कोई बात नहीं / ठीक है (by context) |
| 저기요 | सुनिए |
| 실례합니다 | माफ़ कीजिए (रास्ता या ध्यान माँगते समय) |
| 잘 먹겠습니다 / 잘 먹었습니다 | खाने के लिए धन्यवाद (खाने से पहले) / बहुत स्वादिष्ट था, धन्यवाद (खाने के बाद) |
| 수고하셨습니다 / 수고하셨어요 | आज की मेहनत के लिए धन्यवाद (to seniors) |
| 수고했어(요) | बढ़िया काम किया (to peers or juniors) |
| 수고하세요 | आपका काम अच्छा चले (said when leaving) |
| 잘 부탁드립니다 | आपके सहयोग की उम्मीद है |
| 화이팅 | चलो, कर दिखाओ! |
| 대박 | ज़बरदस्त! |
| ㄹ게(요) | …करूँगा/करूँगी (वादे की तरह) |
| -자 | चलो …! (as in चलो खाते हैं!) |
| 좀 | ज़रा |
| 혹시 | शायद / कहीं (or a presumptive …होगा?) |
| 선생님 | टीचर (vocative: सर / मैम) |
| 사장님 | मालिक (shop or company owner) |
| 과장님 / 대리 / 팀장님 / 대표님 | मैनेजर / असिस्टेंट मैनेजर / टीम लीडर / सीईओ |
| 오빠·형 / 언니·누나 | भैया / दीदी (with the speaker-gender note, §5.9) |

### 3.5 Typography (from `hi.md` §2, plus four hi-ko rules)

**Inherited from `hi.md` §2:**
- the danda (।) ends every Hindi sentence, including one that ends in Korean;
- nukta letters stored decomposed in **NFC** (ज़ = ज + ़), never the precomposed U+0958–U+095F;
- ऑ in loans (कॉफ़ी, ऑफ़िस);
- digits 0–9, never ०–९;
- straight quotes "…";
- the spaced em dash ( — );
- the spaced ` / ` for alternatives;
- no Hindi plural endings on loans (कार्डों ✗).

**hi-ko additions:**
1. **Script.** Korean stays in Hangul. RR stays in Latin, as in the English row. Everything else is Devanagari: brand names too (इंस्टाग्राम, काकाओटॉक, टी-मनी, अमेरिकानो).
2. **Spelling of the language.** हिंदी in prose; कोरियाई for Korean. The course name in `course.json` is `"name": "कोरियाई"`, matching the interface.
3. **The app's characters.** Kii → **कीई**, never की, which is the Hindi possessive.
4. **The `on…=` lint.** Lesson bodies must never contain a space + *on* + letters + `=`. This can only arise in Latin RR, so write `:` instead of `=` after RR (*onni: …*).

### 3.6 Sample prose (for the native check)

1. हिंदी की तरह कोरियाई में भी क्रिया वाक्य के आख़िर में आती है।
2. पार्टिकल हमेशा शब्द के बाद जुड़ता है, बिल्कुल हिंदी के परसर्ग की तरह — पर बिना जगह छोड़े: 집에, "집 에" नहीं।
3. शक हो तो 요 लगाएँ। ज़्यादा विनम्र होना कभी ग़लत नहीं लगता।
4. कोरियाई में "आप" के लिए कोई शब्द नहीं है; नाम + 씨 कहें या "आप" छोड़ दें।
5. हिंदी में "है" तीन काम करता है; कोरियाई में ये दो शब्दों में बँटते हैं: 이에요 और 있어요।

(The Hangul in samples is illustrative. In real rows, the Hangul set must equal the English row's, §9.1.)

## 4. Glossary and on-screen names (closed list)

### 4.1 Terms

| Idea | Term (exactly) | Do not use |
|---|---|---|
| Korean 조사 (은/는, 이/가, 에…) | **पार्टिकल**; at first use: "हिंदी के परसर्ग की तरह शब्द के बाद जुड़ता है" | परसर्ग (keep it for Hindi), प्रत्यय |
| Hindi ने, को, से, में, पर, का | **परसर्ग** | पार्टिकल |
| 은/는 | **विषय पार्टिकल** ("जिसकी बात हो रही है") | टॉपिक मार्कर |
| 이/가 | **कर्ता पार्टिकल** | सब्जेक्ट मार्कर |
| 을/를 | **कर्म पार्टिकल** | ऑब्जेक्ट मार्कर |
| noun / pronoun / verb | संज्ञा / सर्वनाम / क्रिया | |
| 크다, 좋다 | **विशेषण-क्रिया** ("कोरियाई में विशेषण क्रिया की तरह बदलता है") | adjective-verb in Latin |
| adjective (Hindi, or in a modifier before a noun) | विशेषण | |
| 가다 (dictionary form) | **शब्दकोश रूप** (= the Hindi -ना form: खाना) | infinitive |
| 가 in 가다 | **स्टेम** (roadmap); once: "हिंदी व्याकरण में धातु" | मूल |
| -아요, -았어요, -고 | **एंडिंग** | प्रत्यय, suffix |
| 공부하다 | **하다-क्रिया** (≈ noun + करना) | |
| 요-form | **요-रूप** (roadmap) | |
| -습니다 / 요 / 반말 levels | **औपचारिक / विनम्र / अनौपचारिक**; the levels together: **विनम्रता के स्तर** | फ़ॉर्मल, कैज़ुअल, बेतकल्लुफ़ |
| -(으)시-, 드시다 | **सम्मानसूचक** (roadmap) | आदरसूचक, honorific |
| 씨, 님, 오빠; जी, भैया | **उपाधि / संबोधन शब्द** | |
| 개, 명, 잔 | **काउंटर** (roadmap) | वर्गीकारक, क्लासिफ़ायर |
| 하나, 둘 / 일, 이 | **मूल कोरियाई संख्याएँ / साइनो-कोरियाई संख्याएँ** (once: "चीनी मूल की") | चीनी संख्याएँ, a bare "साइनो" |
| past / present / future | भूतकाल / वर्तमान काल / भविष्य काल | टेंस |
| word order / sentence / question word | शब्द-क्रम / वाक्य / प्रश्नवाचक शब्द | |
| negative / plural / possessive | नकारात्मक / बहुवचन / संबंध (का / की / के) | |
| connector (그리고, 그래서) | योजक शब्द | |
| softener (좀, 혹시) | नरम करने वाले शब्द | |
| Hangul / vowel / consonant | हंगुल / स्वर / व्यंजन | |
| one syllable block | **ब्लॉक** (once: "एक ब्लॉक = एक अक्षर") | |
| 받침 | **अंतिम व्यंजन (받침)** | |
| ㅋ ㅌ ㅍ ㅊ / ㄲ ㄸ ㅃ ㅆ ㅉ / ㄱ ㄷ ㅂ ㅅ ㅈ | **महाप्राण / कसे / सादे व्यंजन** (always with "व्यंजन") | tense / aspirated in Latin |
| sound change / 연음 / 비음화 | **ध्वनि-बदलाव** (roadmap) / **जोड़कर बोलना** / **नासिक्य बदलाव** | लियाज़ों |
| the Latin line under Korean | **रोमन** (रोमन लिपि में उच्चारण) | उच्चारण (that is the hi-en term) |
| loanword | **विदेशी शब्द** | |
| intonation | आवाज़ का उतार-चढ़ाव | |
| stroke order | लिखने का क्रम | |

### 4.2 On-screen names (from `tools/i18n/hi/ui.json`)

- **Tabs:** आज · पाठ · अभ्यास · दोहराव · प्रगति.
- **Buttons:** पता है (Got it) · फिर से (Again) · जाँचें (Check) · 📖 ब्राउज़ · मेरे वाक्य (My phrases) · कार्ड जोड़ें.
- **Nouns:** कार्ड, डेक, पाठ.
- **The Read tab (पढ़ना)** holds drills this course does not have, so prose never names it.
- **Two ruled lines:**
  - `hangul` "Tap a letter to replay" **stays**: स्ट्रोक वाले अक्षर पर टैप करके लिखने का क्रम दोबारा देखें। The stroke cells exist and replay works (spec §8, §10.4).
  - `sound-changes` "open Read and try the 🔀 Sound changes drill" is **dropped**. Point to पाठ / अभ्यास / दोहराव instead.

**For the lead (not in the work files).** The Hindi interface pack was written for hi-en, so its "Korean" strings say अंग्रेज़ी and its "romanization" strings say उच्चारण. `native/hi/ko/ui.json` must override at least the key set already in `native/es/ko/ui.json` (31 keys: the 14 `uiKeys`, plus "Korean starter", "Can you already read Hangul?", "Learn Korean, 5 minutes a day" and the rest of that set). Use कोरियाई / हंगुल / रोमन. Examples:
- क्या आप हंगुल पढ़ सकते हैं?
- Aa रोमन: चालू
- रोमन छिपाएँ
- हंगुल में लिखें
- पढ़ें 한→हिं / याद करें हिं→한

### 4.3 Labels (w1): proposals, final once written (progress keys)

**Deck labels** (43, by id order in `decks.jsonl`):
- *Foundations and everyday*: हंगुल के स्वर · हंगुल के व्यंजन · हंगुल: एडवांस्ड · उच्चारण टिप्स · ज़रूरी वाक्य · परिचय · ज़रूरी वाक्य 2 · पूछताछ · कैफ़े और कन्वीनियंस स्टोर · रोज़मर्रा की संख्याएँ · काउंटर · मौसम और भावनाएँ · योजक शब्द · डॉक्टर और फ़ार्मेसी · घर और छोटे-मोटे काम · सम्मानसूचक रूप
- *Vocabulary and grammar*: जगहें और इमारतें · शौक · खाने के शब्द · ड्रिंक्स · गतिविधियाँ · टीवी और मनोरंजन · जगह और दिशा के शब्द · मुख्य क्रियाएँ · पार्टिकल · संख्याएँ
- *Social*: मीठी बातें · क्यूट बातें · फ़्लर्टिंग · दोस्तों से चैट · जोश और तारीफ़ · दोस्तों के साथ · के-पॉप और फ़ैन कल्चर · सोशल मीडिया और स्लैंग · डेटिंग: अगला क़दम · काम और दफ़्तर · हल्की-फुल्की बातचीत · खाना और ऑर्डर · रास्ता और सफ़र · समय और दिन · परिवार और लोग · विशेषण · के-ड्रामा के डायलॉग

Rules for labels:
- No label may be मेरे वाक्य, the interface's "My phrases".
- All labels unique.
- No danda in labels.

**Groups:** बुनियाद · रोज़मर्रा · शब्दावली · ग्रामर (the interface word) · सामाजिक.

**Level titles:** अंकुर · स्टूडेंट · सीनियर · प्रो · मास्टर · गुरु.
- सीनियर: Indian college सीनियर / जूनियर is close to 선배 / 후배.
- गुरु for Sensei.

**Goals:** सफ़र और घूमना-फिरना · डेटिंग, दोस्त और मस्ती · के-ड्रामा और संगीत · काम और पढ़ाई.

**Plans:** कोरिया की यात्रा · दोस्त बनाना और डेटिंग · 90 दिनों में बातचीत.

### 4.4 Lesson titles (fixed; cross-references use "पाठ N, «title»")

Each title keeps the Hangul of the English title.

1 · एक बार में हंगुल · 2 · विनम्रता के स्तर · 3 · लोगों से मिलना · 4 · ध्वनि-बदलाव: 감사합니다 अलग क्यों सुनाई देता है · 5 · संज्ञा और 은/는 · 6 · 있어요 और 없어요 · 7 · सर्वनाम और प्रश्नवाचक शब्द · 8 · क्रियाएँ · 9 · वर्तमान काल: 요-रूप · 10 · भूतकाल: 았어요 / 었어요 · 11 · भविष्य और योजनाएँ: -(으)ㄹ 거예요 · 12 · शब्द-क्रम और 을/를 · 13 · 에 और 에서, और पार्टिकल का नक्शा · 14 · मना करना: 안 और -지 않아요 · 15 · 도 और 만: भी और सिर्फ़ · 16 · संज्ञा और क्रिया को जोड़ना · 17 · चाहना और पसंद करना: -고 싶어요, 좋아해요 · 18 · संख्याओं की दो प्रणालियाँ · 19 · बाहर खाना · 20 · घूमना-फिरना · 21 · उपाधियाँ और सम्मानसूचक रूप · 22 · योजनाएँ बनाना · 23 · कोरियाई लोगों की तरह टेक्स्टिंग · 24 · काउंटर · 25 · वाक्य जोड़ना: -고, -지만, -아/어서 · 26 · भूतकाल में कहानी सुनाना · 27 · संज्ञा का वर्णन: 좋은 날씨, 큰 가방 · 28 · तुलना: 보다, 더, 제일 · 29 · न कर पाना, कर पाना और न जानना · 30 · करना पड़ना: -아/어야 해요 · 31 · सम्मानसूचक क्रियाएँ · 32 · विनम्रता से चीज़ें माँगना · 33 · दफ़्तर की कोरियाई

## 5. Grammar bridges and where they break

**Sources for this section.**
- Hindi facts are general grammar knowledge, including the NCERT-style कारक table. **No Hindi textbook was opened**, so they are [convention, not opened] or [inference].
- Korean facts come from the English half.

**Hangul in this section** is for the writers' understanding. It goes into a lesson only if that lesson's English already has the same Hangul runs, or under `_waive` (§9.1).

### 5.1 SOV and postpositions: the biggest bridge

- **What holds:**
  - Same order: कर्ता · कर्म · क्रिया.
  - The usual order of a long sentence is also the same in both: कौन · कब · किसके साथ · कहाँ · क्या · क्रिया (मैं कल दोस्त के साथ कैफ़े में कॉफ़ी पीऊँगा ≈ the `sentences` frame).
  - Question words stay in place in both: आप क्या खा रहे हैं? = 뭐 먹어요?; टॉयलेट कहाँ है? = 화장실 어디예요?
  - Negation sits right before the verb in both (§5.6).
- **Where it breaks:**
  1. **Spacing.** Hindi writes most postpositions as separate words (घर में). Korean glues particles to the noun (집에). Expect 집 에 and 저 는 in typing.
  2. **क्या.** Hindi opens yes/no questions with क्या. Korean has no question word there: the voice rises (가요?). And क्या also means 뭐.
  3. **Subject drop.** Korean drops the subject far more than Hindi does, and has no word for "you" (§5.8).

### 5.2 The कारक table as a particle map

| कारक (Hindi school) | Hindi परसर्ग | Korean | Holds / breaks |
|---|---|---|---|
| कर्ता | — / ने | 이/가 (and the topic 은/는) | **Breaks:** ने appears only with a perfective transitive verb (मैंने खाया). Korean marking never changes with tense. Do not look for a "past-tense subject particle". |
| कर्म | को (only definite or animate objects) | 을/를 (every object; often dropped in casual speech) | **Breaks:** मैं चाय पीता हूँ has no को, but Korean says 차를 마셔요. And को is often not 을/를 (the next rows). |
| संप्रदान | को / के लिए | 에게 / 한테 (to a person) | राहुल को दो = 라훌에게 주세요 (not in the course; one sentence in `particles` at most) |
| — (dative experiencer) | मुझे भूख लगी है, मुझे पसंद है, मुझे चाहिए | 저는 + 이/가 | **Trap:** 저에게 배고파요 ✗. See §5.7 for 좋아해요. |
| अधिकरण | में / पर | 에 (be at, go to, time) **or** 에서 (do at) | **Breaks:** one में for both. घर में हूँ = 집에 있어요, but घर में आराम करता/करती हूँ = 집에서 쉬어요. Time: सोमवार को / सुबह = 월요일에 / 아침에. |
| अपादान | से (from) | 에서 (place), 부터 (time) | अमेरिका से = 미국에서 |
| करण | से (by) | (으)로 | बस से = 버스로 |
| — (comparison) | से | 보다 | Holds exactly (§5.10). |
| संबंध | का / की / के | 의, usually dropped (제 = 저의) | **Breaks:** no agreement, and usually no word at all: मेरा घर = 제 집. |
| संबोधन | अरे / हे | name + 아/야 | मिनसू! = 민수야! (`titles`) |

- **Destination.** Hindi drops the postposition with जाना (मैं घर जाता/जाती हूँ). Korean wants 에 (집에 가요). 집 가요 does occur in casual speech, so this error costs little.
- **One line for the `particles` tip:** "जैसे हिंदी में ने, को, से, में, का — वैसे ही कोरियाई में पार्टिकल; फ़र्क़ इतना कि 에 और 에서 दोनों हिंदी में 'में' हैं।"

### 5.3 Small particles

- **भी ↔ 도.** Holds: भी follows its word, and भी + नहीं = "either" (मैं भी नहीं जाऊँगा/जाऊँगी = 저도 안 가요).
  - **Breaks:** 도 *replaces* 은/는, 이/가 and 을/를 (저도, not 저는도). It stacks only after 에 / 에서, as भी stacks after में / से (घर में भी = 집에도).
- **ही / सिर्फ़ ↔ 만.** 만 sits where ही sits, after the word (कॉफ़ी ही = 커피만).
  - **Breaks:** ही is also emphatic (मैं ही, अभी ही); 만 only means "only". 만 replaces 을/를 like 도 does.
- **तो ↔ 은/는, as a rough feel only.** तो marks contrast (कॉफ़ी तो मैं नहीं पीता/पीती ≈ 커피는 안 마셔요).
  - **Breaks:** 은/는 is in nearly every Korean sentence (저는 …), while तो is occasional. Teach 은/는 as "जहाँ तक … की बात है". Use तो only for contrastive 는.

### 5.4 है does three jobs; Korean splits them (`isseoyo`, `nouns`)

| Hindi | Korean | Job |
|---|---|---|
| मैं स्टूडेंट हूँ | 학생이에요 | A = B |
| मैं स्कूल में हूँ | 학교에 있어요 | being somewhere |
| मेरे पास समय है · मेरा एक छोटा भाई-बहन है | 시간이 있어요 · 동생이 있어요 | having |
| यहाँ एक स्कूल है | 여기에 학교가 있어요 | existing |
| समय नहीं है | 시간이 없어요 | not having / not existing |
| मैं डॉक्टर नहीं हूँ | 의사가 아니에요 | A ≠ B |

- **Holds:** in मेरे पास समय है the possessed thing is the Hindi grammatical subject, exactly as in 시간이 있어요 (with 이/가). This is the easiest way to teach 이/가 with 있어요.
- **Breaks:** one नहीं है in Hindi becomes two different Korean words: 시간이 안 있어요 ✗ → 없어요; 학생 안 이에요 ✗ → 아니에요.

### 5.5 Verbs (`verbbasics`, `verbs`, `past`, `future`)

- **The dictionary form 다 ≈ the Hindi -ना form**: 먹다 ≈ खाना.
  - Remove 다 / -ना and the स्टेम remains: 먹 ≈ खा.
  - Say once that Hindi grammar calls this धातु.
- **Korean verbs do not change for person, gender or number.** This is a relief after Hindi agreement (जाता / जाती / जाते). Writers must stress it.
- **Describing verbs.** Hindi says अच्छा है (an adjective that agrees, plus है). Korean says one word, 좋아요. Expect 좋아이에요 ✗ and 좋은이에요 ✗.
- **하다-verbs ≈ noun + करना**: पढ़ाई करना = 공부하다, शॉपिंग करना = 쇼핑하다.
  - The split under negation is identical: पढ़ाई नहीं करता/करती = 공부 안 해요.
- **Present.** The 요-form covers both जाता हूँ and जा रहा हूँ, and questions by tone alone. Hindi also allows tone-only questions (आप जा रहे हैं?).
- **Past.**
  - Hindi खाया, खाया है and खा चुका all become 먹었어요.
  - No ने and no gender: मैं गया/गई and मैंने खाया both become a single form.
  - अभी तक नहीं खाया = 아직 안 먹었어요: past in both languages (unlike Tagalog), so there is no trap here.
- **Future.**
  - जाऊँगा/जाऊँगी ≈ 갈 거예요.
  - The Hindi presumptive होगा ("probably", as in महँगा होगा) = 비쌀 거예요. This is a direct bridge for the "guessing" use.
  - The near future with the present holds too: कल जा रहा/रही हूँ ≈ 내일 가요.

### 5.6 Negation (`negation`, `cant`)

- **नहीं before the verb = 안 before the verb.**
  - Same position: मैं कॉफ़ी नहीं पीता/पीती = 커피를 안 마셔요.
  - The 하다 split is the same as in §5.5.
- **मत** ≈ -지 마세요 (recognition only).
- **Won't vs can't.**
  - नहीं करूँगा (won't) vs नहीं कर सकता (can't) ≈ 안 vs 못.
  - सकना ≈ -(으)ल 수 있어요. Neutral gloss: …आता है / कर सकते हैं.
- **Knowing.**
  - मुझे नहीं पता = 몰라요.
  - 모르겠어요 is softer: पता नहीं… / समझ नहीं आ रहा.

### 5.7 मुझे पसंद है: the 좋아요 / 좋아해요 trap (`want-like`)

- **Structure.** In मुझे कॉफ़ी पसंद है, the liked thing is the Hindi subject. That matches **커피가 좋아요** (X가 좋아요). It does **not** match 좋아해요, which takes 을/를.
- **Predicted error:** 커피가 좋아해요 ✗ [inference]. Manrique (2022) found the same error in Filipino learners, tied to Filipino *gusto* (`tl-ko.md` §5.3; carried, not re-opened).
- **Teaching line:** «मुझे X पसंद है» = X가 좋아요 = X를 좋아해요 — दूसरे वाले में 를।
- **Wanting.** Gloss -고 싶어요 with मेरा … का मन है, or with चाहता/चाहती हूँ under Rule 3. **Never** with मुझे … जाना है, which is have-to.

### 5.8 Politeness: आप / तुम / तू vs verb endings (`polite`, `honorific`, `titles`)

**Where it holds** [inference]:
- Hindi speakers already change their grammar for respect, and choose the level by age and closeness. आप for elders and strangers, तुम for friends and younger people, maps well onto 요 / 반말.
- Hindi also asks for consent before switching to तुम, as Korean does with 말 놔도 돼요.

**Where it breaks (tell the learner exactly these):**
1. **Where politeness is marked.**
   - Hindi marks it on the pronoun, on verb agreement, in the imperative (जाइए / जाओ / जा) and with जी.
   - Korean marks it **only on the verb ending**, and usually says no "you" at all.
   - 당신 is not आप. Use name + 씨, a title, or nothing (`pronouns-questions`).
2. **Young service staff.**
   - In India तुम is normal to a young waiter or shop boy (भैया, एक चाय देना).
   - In Korea every adult stranger gets 요, whatever their age.
   - Predicted error: 반말 to young staff [inference].
3. **Formal speech is a situation, not a person.** -습니다 is about the situation: announcements, work, first meetings. It is closer to Hindi धन्यवाद vs थैंक्स vocabulary than to आप.
4. **No "humble I" in Hindi.** Korean also has a humble "I" (저 vs 나). Hindi मैं has no polite variant.

**-시- = the Hindi respect plural (a strong bridge).**
- Hindi already honours a respected **third person** with plural agreement: पिताजी घर पर हैं ≈ 아버지가 집에 계세요; दादी जी सो रही हैं ≈ 주무세요.
- Hindi has honorific vocabulary too:
  - आपका शुभ नाम ≈ 성함;
  - लीजिए for offering food ≈ 드세요;
  - आराम कर रहे हैं as a polite "sleeping" ≈ 주무세요.
- **Breaks:**
  - Hindi uses one device, the plural, for the listener (आप) and for a third person.
  - Korean splits it: 요 is for the listener, -시- for the doer of the action.
  - Never -시- about yourself: 저는 가세요 ✗ → 저는 가요.

### 5.9 Address terms (`titles`, `office`, `meet`)

- **Name + जी ≈ name + 씨 / 님.**
  - 씨 is for peers and is never used for elders or superiors. जी works upward too.
  - Neither one is ever used with your own name: a bridge.
- **भैया / दीदी ≈ 오빠·형 / 언니·누나**, and Koreans also use them beyond the family. Two traps:
  1. **The speaker's gender decides the Korean word.** A man says 형 / 누나; a woman says 오빠 / 언니. भैया / दीदी do not change with the speaker.
  2. **Service staff.** Indians call drivers and vendors भैया. Koreans say 저기요, 기사님 or 사장님.
- **सर / मैम.**
  - At school: सर / मैम ≈ 선생님.
  - At work: Indian offices often say "सर" with no name. That is close to the Korean title alone (과장님), and better than name + सर.

### 5.10 Comparison, modifiers, joining

- **Comparison: an exact match.**
  - X Y से सस्ता है = X가 Y보다 싸요: same order, and से / 보다 after the compared noun.
  - ज़्यादा ≈ 더 (both optional), कम ≈ 덜, सबसे ≈ 제일.
- **Modifiers before the noun** [inference]:
  - Hindi adjectives come first too (बड़ा बैग = 큰 가방), but they agree in gender; Korean changes the ending instead (크다 → 큰).
  - Hindi relative clauses use जो…वह, often after the noun (वह खाना जो मुझे पसंद है). Korean has no जो: everything sits before the noun (제가 좋아하는 음식).
  - The bridge is the Hindi -ने वाला phrase, which also stands before the noun (कोरियाई बोलने वाला दोस्त).
- **Joining:**
  - The Hindi -कर form (खाकर, जाकर) ≈ -고 / -아/어서 for a sequence (집에 가서 ≈ घर जाकर). Like -아/어서, -कर never takes tense: a bridge for the joining rule.
  - Reasons: क्योंकि puts the reason second (नहीं गया क्योंकि बिज़ी था). Korean puts it first (바빠서 안 갔어요), as Hindi does with …था, इसलिए…
  - -지만 = लेकिन / पर.
- **Story connectors:** 먼저 पहले, 그리고 और फिर, 그다음에 उसके बाद, 그래서 इसलिए, 그런데 लेकिन / वैसे, 마지막으로 आख़िर में.

### 5.11 Numbers and counters (`numbers`, `counters`, `food`)

- **Two systems.** Hindi has one native system, plus English numbers in urban speech (phone numbers, prices). It has no Sino / native split.
  - **Holds:** hours and age use Hindi numbers, and both take native Korean numbers: तीन बजे = 세 시; पच्चीस साल = 스물다섯 살.
  - Minutes, money, dates, floors and phone numbers use Sino-Korean. Expect 삼 시 ✗ only from learners who think in English numbers.
- **Regularity.** Hindi 1–100 must be memorised one by one (इक्कीस, पच्चीस…). Sino-Korean is ten words plus a rule (이십오 = 2·10·5). Say so: it is encouraging.
- **Large numbers.** Hindi already groups numbers differently from English (1,00,000 = लाख). Korean groups by 10,000:
  - 10만 = 1 लाख;
  - 100만 = 10 लाख;
  - 1000만 = 1 करोड़.
  This fits the English body's 만 without new Hangul.
- **Half past.** साढ़े तीन ≈ 세 시 반: half comes before in Hindi, after in Korean. सवा / पौने / डेढ़ / ढाई have no Korean equivalent: use 분.
- **Coincidence (mnemonic only, not etymology):** Korean 살 (age) sounds like Hindi साल. Say once: "संयोग है, पर याद रखने में मदद करता है". 살 is only for age, never "year" (년).
- **Counters.**
  - Hindi measure words (दो कप चाय, तीन प्लेट) put the number first. Korean order is noun · number · counter: 차 두 잔. Expect 두 커피 ✗.
  - People: तीन लोग / जने = 세 명.
  - Some eastern Hindi speech has a classifier ठो / गो (दो ठो रोटी) [inference, unverified]. If true, it is a small bridge for those speakers.

## 6. Error zones, ranked

Ranking: (1) zones with Indian-L1 evidence, (2) zones found in every sentence, (3) traps local to one lesson. All predictions are [inference] unless tagged.

### 6.1 Plain / tense / aspirated: hearing ㄱ = ㅋ, and reading RR *k t p ch*

- **[research] Hindi listeners** (Ngaihte & Holliday 2019; 15 Hindi speakers in Delhi plus 15 Paite speakers; listening only):
  - Korean tense stops were heard mainly as voiceless unaspirated;
  - **lax and aspirated stops both mainly as voiceless aspirated**;
  - Hindi listeners heard the affricates (ㅈ ㅉ ㅊ) mostly as **voiced**, which the authors call unexpected.
  - So the hard part is **hearing** 가 / 카 and 자 / 짜 / 차.
  - In Seoul the lax / aspirated difference is now mainly **pitch**: lower after ㄱ ㄷ ㅂ ㅈ ([Wikipedia, *Korean phonology*](https://en.wikipedia.org/wiki/Korean_phonology)).
- **[research] Korean listeners hearing Hindi** (Ahn 2009; 45 listeners; stimuli from one speaker; bilabial, dental and velar stops; no affricates, no retroflexes; forced-choice table):
  - Hindi voiceless unaspirated → fortis, 88%;
  - voiceless aspirated → aspirated, 90.1%;
  - voiced → lenis, 94.6%;
  - breathy → aspirated, 87%.
  - The paper's prose swaps the first two percentages; the table is used here.
  - Teaching consequence: **say क त प → ㄲ ㄸ ㅃ; ख थ फ → ㅋ ㅌ ㅍ; ग द ब → ㄱ ㄷ ㅂ.** Avoid घ ध भ, which Koreans hear as aspirated.
  - The affricate row (च छ ज → ㅉ ㅊ ㅈ) is [inference] by analogy.
- **[research] Hindi learners speaking** (Park & Narang 2019; 5 Hindi-speaking JNU learners vs 5 Koreans; /a i u/ only):
  - learners' word-initial VOT did not differ significantly from Koreans';
  - between vowels the learners voiced their stops, which the authors attribute to Hindi transfer.
- **Synthesis for teaching:**
  - **ग द ब ज are the safe choice** for ㄱ ㄷ ㅂ ㅈ. Ahn: Koreans hear them as lenis.
  - The native word-initial sound is voiceless with a little air and a low pitch. Offer it as the next step, not as a requirement.
  - **Never plain क त प च for ㄱ ㄷ ㅂ ㅈ**: that is ㄲ ㄸ ㅃ ㅉ.
- **[research chain] Reading the romanization.** Indian English voiceless stops are unaspirated: Narkar & Staroverov 2023, 102 Indic-L1 speakers, **p and k only**; *t* is [inference].
  - So RR *k, t, p, ch* (ㅋ ㅌ ㅍ ㅊ), read the Indian-English way, become क त प च, which Koreans hear as **ㄲ ㄸ ㅃ ㅉ** (Ahn).
  - Teach: RR **k t p ch = ख थ फ छ**; RR **kk tt pp jj = क त प च**.
  - फ means p + air, as in फल said carefully, **not फ़**. Many urban speakers say फ as [f] [inference].
- **ㅅ / ㅆ:** Hindi has one स. Teach 살 / 쌀 by tension and pitch.

### 6.2 RR vowels and Devanagari habits

- **Wrong → right:**
  - *eo* read "इओ / यो": 서울 said "सि-यो-ल";
  - *eu* read "यू";
  - *ae* read as a diphthong "अइ" (eastern ऐ) [inference];
  - *oe* read "ओए";
  - *wo* read "वो" (ㅝ = व + ㅓ);
  - *yeo* read "यो".
- The Hindi press and the app's own roadmap spell Seoul **सियोल**, which teaches the "इओ" reading. Verified only by a Bhojpuri Wikipedia title and `tools/i18n/hi/roadmap.json` [convention].
- Indian Latin transliteration writes both अ and आ as *a*. In RR, *a* is always the आ-quality ㅏ; the अ-like vowel is *eo* (§7).
- Hindi keeps अ, ऑ and ओ apart, so ㅓ / ㅗ should be easier to hear than for Tagalog speakers [inference]. The risk is the spelling, not the ear.

### 6.3 Particles

Ranked by frequency [inference, §5.2]:
1. को-thinking: object 을/를 dropped, or put on recipients and experiencers.
2. में → 에 vs 에서.
3. 커피가 좋아해요 ✗.
4. Particles spaced apart.
5. 도 / 만 stacked on 은/는.

### 6.4 है → 이에요 / 있어요; है added to describing verbs

§5.4–5.5: 저는 고양이예요 for "I have a cat", 좋아이에요 ✗, 안 있어요 ✗ [inference].

### 6.5 Politeness errors

§5.8 [inference]:
- 당신 for आप;
- 반말 to young staff;
- -시- on oneself;
- a polite-sounding pronoun hunt instead of dropping "you".

### 6.6 Lesson-local traps

- 그 vs 저: Hindi वह covers both.
- 들 everywhere: Hindi marks the plural (किताबें), so learners add 들.
- Counters order.
- 만 vs हज़ार.
- 이에요 / 예요: Hindi has no such alternation.
- 강 said with an extra ग ("गांग"), because Hindi रंग, गंगा carry a g after ङ.
- Final ㄹ trilled as र.
- Final stops released.

## 7. Reading guide: Korean sounds in Hindi terms

**Policy: comparisons, not readings.**
- Devanagari appears only as a comparison for **one sound** (ㅏ ≈ आ), or for one short syllable with explicit vowel signs and halant (옷 ≈ "ओत्"). Never as a respelling of a word or sentence.
- Why:
  1. **Schwa deletion.** Hindi readers delete or keep the inherent अ by rule, so a respelling like "मगयो" for 먹어요 is unpredictable. The inherent अ is also the nearest thing to ㅓ.
  2. **Missing letters.** Devanagari has no letter for ㅡ, and none for ㅓ distinct from अ / ऑ.
  3. **Fixed spellings.** Press spellings (सियोल) fix wrong readings.
  4. **The real targets.** RR is fixed, and Hangul itself is the goal: it takes about a day to learn.
- Every comparison says **लगभग** (about) or describes the mouth.

### 7.1 Sound table (for card notes ko.c0001–ko.c0060 and the `hangul` table)

| Jamo | RR | Comparison for a Hindi speaker | Trap |
|---|---|---|---|
| ㅏ | a | आ (short) | not the inherent अ |
| ㅓ | eo | between अ and ऑ: jaw open as for ऑ, lips **not** rounded | not ओ, not "इओ / यो" |
| ㅗ | o | ओ, lips rounded | |
| ㅜ | u | उ / ऊ (length does not matter) | |
| ㅡ | eu | उ with the lips spread flat (smiling) | no Hindi letter; not "यू" |
| ㅣ | i | इ / ई | |
| ㅐ = ㅔ | ae, e | ए (both sound the same in Seoul) | *ae* is not "आए" or "अइ" |
| ㅑ ㅛ ㅠ | ya yo yu | या, यो, यू | |
| ㅕ | yeo | य + ㅓ | not यो |
| ㅘ ㅝ | wa wo | वा; व + ㅓ | *wo* is not वो |
| ㅚ ㅙ ㅞ | oe wae we | all about वे | |
| ㅟ | wi | वी | |
| ㅢ | ui | ㅡ + ई, quickly (also ई or ए, card ko.c0055) | |
| ㄱ ㄷ ㅂ ㅈ | g d b j | soft ग द ब ज (§6.1). Native: voiceless, a little air, low pitch | never क त प च |
| ㅋ ㅌ ㅍ ㅊ | k t p ch | ख थ फ छ, strong air | RR *k t p ch* are **not** क त प च; फ not फ़ |
| ㄲ ㄸ ㅃ ㅉ | kk tt pp jj | क त प च: no air, throat tight, high pitch | not "long": between vowels the tight क्क of पक्का is a fair match [inference] |
| ㅅ / ㅆ | s / ss | स / a tight स with no air; before ㅣ about श (시 ≈ शी) | |
| ㄷ ㅌ ㄸ | | tongue behind the teeth: the त / द family, **not** ट / ड. Korean has no retroflex. Placing it nearer dental is [inference]; Wikipedia says alveolar | |
| ㄴ ㅁ | n m | न, म; final ㄴ is a full न, not a nasal vowel (ँ) | |
| ㅇ | – / ng | silent at the start; final ङ as in रंग **without** the ग | 강 is not "गांग"; 영어 has no g |
| ㄹ | r / l | र (a single tap) between vowels; ल at the end; ㄹㄹ = ल्ल (as in दिल्ली) | final ㄹ is not र |
| ㅎ | h | ह; often silent between vowels (좋아요) | |
| final ㄱ ㄷ ㅂ | k t p | stop without release: क्, त्, प् (밥 ≈ "बाप्", no puff) | |
| final ㅅ ㅈ ㅊ ㅌ ㅎ | t | all त्: 옷 ≈ "ओत्" | not "ओस" |

### 7.2 Hangul vs Devanagari (the opening bridge for `hangul`)

- **Holds:**
  - Both scripts were built on sound: Devanagari orders its letters by mouth position (क ख ग घ ङ), and Hangul draws its consonants from mouth shapes.
  - A Hangul **ब्लॉक** is one syllable, like one Devanagari **अक्षर**.
  - ㅇ at the start of a block plays the role of a stand-alone vowel letter (अ, इ) [inference].
- **Breaks:**
  - Hangul vowels are full letters, not मात्रा signs.
  - A final consonant sits **inside** the block (받침), where Devanagari would use a halant or join it to the next akshara.
  - Reading block by block with pauses, as one reads aksharas aloud, blocks linking (§7.3).

### 7.3 Reading guide in Hindi (paste into `hangul`; parts go into `sound-changes` and the three Hangul deck descriptions)

> **रोमन कैसे पढ़ें**
> हर कोरियाई लाइन के नीचे रोमन लिपि में उच्चारण है। यह अंग्रेज़ी पढ़ने वालों के लिए बना है, इसलिए इन अक्षरों पर ध्यान दें:
> - **a** हमेशा "आ" जैसा। हल्का "अ" जैसा स्वर **eo** है: मुँह खुला, होंठ गोल नहीं। **eo** एक ही स्वर है, "इओ" या "यो" नहीं: *seoul* = "स + eo + उल"।
> - **eu** भी एक स्वर है: "उ" बोलें, पर होंठ फैलाकर। **ae** और **e** एक जैसे: "ए"। **wo** = व + eo, "वो" नहीं।
> - **k, t, p, ch** = ख, थ, फ, छ — मुँह के आगे हथेली रखें, हवा महसूस होनी चाहिए। **kk, tt, pp, jj** = क, त, प, च — बिना हवा, गला कसकर। यह लंबी ध्वनि नहीं है।
> - **g, d, b, j** शुरू में हल्के ग, द, ब, ज। कभी शुद्ध क, त, प, च नहीं — वह कोरियाई में दूसरा अक्षर है।
> - **t, d** त / द जैसे, ट / ड जैसे नहीं।
> - **r** स्वरों के बीच हल्का र; **l** अंत में साफ़ ल: *mul* (पानी), "मुर" नहीं।
> - **ng** = रंग का ङ, पर पीछे ग नहीं: *gang*।
> - शब्द के अंत में **k, t, p**: मुँह बंद करके रुक जाएँ, हवा न छोड़ें: *bap*।
> - अंतिम व्यंजन अगले स्वर से जुड़ जाता है: *hangugeo*, "हान-गुक-अ" नहीं।
> - रोमन वैसा लिखा है जैसा बोला जाता है: 감사합니다 = *gamsahamnida*। बोलते समय रोमन देखें, लिखते समय हंगुल।

Notes for writers:
- The jamo needed in this guide make `hangul` need `_waive` (§9.1).
- Never compare with English sounds.

## 8. Per-lesson notes (33 lessons)

"Bridge / trap" is what to build on. "Rewrite" names the English-built passages to rebuild rather than translate. All entries are [inference] unless §5–7 tag them.

| # | id | Bridge or trap for a Hindi speaker | Rewrite, do not translate |
|---|---|---|---|
| 1 | `hangul` | ब्लॉक ≈ अक्षर (§7.2); the §7.3 guide; the ㅓ / ㅡ / ㅐ rows | Vowel table "eo (uh), u (oo), i (ee), e (bed)" → §7.1 comparisons. Keep "tap a letter" (§4.2). `_waive`. |
| 2 | `polite` | आप / तुम ≈ 요 / 반말; the four breaks of §5.8; धन्यवाद / शुक्रिया / थैंक्स as a register picture; 네 = जी | "Say it 3 ways" headers: औपचारिक / विनम्र / अनौपचारिक. Mention तू once. |
| 3 | `meet` | नमस्ते ≈ 안녕하세요 (any time of day); age sets address in both (भैया / दीदी / अंकल); Hindi does not split goodbyes by who leaves | Name examples: keep माइक / हुआन. An Indian name (라훌 → 라훌이에요, 프리야 → 프리야예요) only under `_waive`. |
| 4 | `sound-changes` | 비음화 = school व्यंजन संधि: जगत् + नाथ = जगन्नाथ (ㄷ → ㄴ before ㄴ) [convention, not opened]; ㄹㄹ ≈ दिल्ली's ल्ल; ㅎ + ㄱ → ㅋ "like क + हवा = ख" | RR respellings stay RR. **Drop** the Read-tab drill line. |
| 5 | `nouns` | No articles in either language; no gender in Korean; possessive first (मेरा घर = 제 집); 이 / 그 / 저 vs two-way यह / वह (**trap**); 학교 / 학생 like विद्यालय / विद्यार्थी (an analogy for reusable blocks, not etymology) | "no a or the": restate as "हिंदी की तरह कोई आर्टिकल नहीं". Plural: Hindi marks it, Korean seldom. |
| 6 | `isseoyo` | The §5.4 table | The whole "English uses 'is' for two jobs" opening and table → Hindi है with three jobs. |
| 7 | `pronouns-questions` | Question words in place (an exact match); क्या = yes/no marker **and** 뭐; हमारे पापा ≈ 우리 엄마; 저 / 나 is a new idea; आप ≠ 당신 | "Korean uses pronouns less than English" → "…हिंदी से भी कम". |
| 8 | `verbbasics` | 다 ≈ -ना; स्टेम ≈ धातु; no agreement; विशेषण-क्रिया with no है; 하다 ≈ करना | "to …" infinitive framing; "English adjectives" (one mention allowed). |
| 9 | `verbs` | One form = जाता हूँ + जा रहा हूँ + a question by tone; vowel harmony is new | Nothing beyond glosses. |
| 10 | `past` | One past for खाया / खाया है / खा चुका; no ने, no gender; अभी तक नहीं खाया = 아직 안 먹었어요 (holds) | "I ate / I have eaten / I did eat" → the Hindi trio. |
| 11 | `future` | जाऊँगा/जाऊँगी; the presumptive होगा = the guessing use; कल जा रहा/रही हूँ ≈ 내일 가요 | "kkeoyeyo" note → "कसा क (ㄲ)". |
| 12 | `sov` | SOV in both (the biggest bridge); 을/를 vs को (§5.2); describing verbs take 이/가 as the Hindi subject does (बैग बड़ा है) | Every "English is SVO" sentence. |
| 13 | `particles` | में → 에 / 에서 (main trap); से = 에서 "from"; time को / में → 에; the कारक-table tip (§5.2) | "English often translates both as 'at'" → "हिंदी में दोनों 'में'". |
| 14 | `negation` | नहीं before the verb = 안; पढ़ाई नहीं करता = 공부 안 해요 (exact); one नहीं है → 없어요 / 아니에요 | Keep the four mistakes. |
| 15 | `do-man` | भी / ही (§5.3); मैं भी नहीं = 저도 안; stacking after में ≈ after 에 | "도 + negative = either" → भी + नहीं. |
| 16 | `sentences` | Same frame and same order as Hindi (§5.1); "कॉफ़ी स्वादिष्ट है" has no है in Korean | "English order" mistakes → "Hindi has the same order; the traps are particles and है". |
| 17 | `want-like` | §5.7; मेरा … का मन है for -고 싶어요 | Example logic from पसंद / मन / चाहिए. |
| 18 | `numbers` | §5.11: hours and age hold; regular Sino numbers; 만 vs लाख | "Sino numbers build like English digits" → "दस शब्द और एक नियम". |
| 19 | `food` | दो कप चाय vs 차 두 잔; 잘 먹겠습니다 has no Hindi equivalent. Optional tip, prose only: many Korean dishes, even kimchi, can contain fish or meat. Useful for vegetarians [inference] | "Four phrases" stays. |
| 20 | `getting-around` | Delhi Metro ≈ Seoul subway (announcements in two languages, metro card ≈ T-money); auto / Ola vs taxi | Keep the T-money line in Devanagari (टी-मनी). |
| 21 | `titles` | §5.9; जी with no own name ≈ 씨; vocative 아/야 ≈ अरे … | Column "(you female / you male)" → "अगर आप महिला हैं / पुरुष हैं". |
| 22 | `plans` | चलो खाते हैं ≈ 먹자; चलें? ≈ -(으)ㄹ까요?; चलोगे? ≈ -(으)ㄹ래?; station exits ≈ Delhi Metro "गेट नंबर 7" | "콜" note: keep. |
| 23 | `texting` | ㅋㅋ ≈ हाहा; ㅇㅇ / ㄴㄴ; KakaoTalk "1" (읽씹) ≈ WhatsApp blue ticks with no reply | KakaoTalk explained via WhatsApp. |
| 24 | `counters` | Number first in Hindi, last in Korean (§5.11); लोग / जने ≈ 명 | "like two cups of coffee in English" → "जैसे दो कप चाय — पर क्रम उलटा". |
| 25 | `joining` | -कर ≈ -고 / -아서 (no tense, as in Korean); reason first with इसलिए, not क्योंकि | "And, but, so" framing → और / लेकिन / इसलिए. |
| 26 | `story` | Connector list (§5.10) | Connector table glosses. |
| 27 | `noun-modifiers` | Adjective first in both; -ने वाला before the noun; no जो in Korean | "no that / which / who" → "कोरियाई में 'जो' नहीं होता". |
| 28 | `compare` | से = 보다 in the same position; सबसे = 제일 | None beyond glosses. |
| 29 | `cant` | नहीं करूँगा / नहीं कर सकता ≈ 안 / 못; मुझे नहीं पता = 몰라요; the spicy-food question is an easy win for Indians | The "rite of passage" paragraph can get an Indian wink. |
| 30 | `have-to` | मुझे जाना है / पड़ेगा = -아/어야 해요 (neutral); जाने की ज़रूरत नहीं = 안 가도 돼요; मत जाओ is a different thing | Cross-reference → पाठ 32, «विनम्रता से चीज़ें माँगना». |
| 31 | `honorific` | Respect plural = -시- (§5.8); शुभ नाम = 성함; लीजिए = 드세요 | "your partner's parents": keep. |
| 32 | `requests` | 좀 = ज़रा; -इएगा ≈ 주시겠어요; "बैठ जाऊँ तो चलेगा?" ≈ -(으)면 안 돼요? (gender-neutral); फ़ोटो ले लूँ? ≈ -아/어도 돼요?; 혹시 ≈ शायद / कहीं | Softener table glosses. |
| 33 | `office` | Title alone ≈ "सर"; Indian corporate titles (§3.4); 수고 family by situation (§3.4); 회식 ≈ टीम डिनर. The 운전해야 돼요 excuse suits non-drinkers | "Roughly" column → Indian titles. |

## 9. Conventions for rows

### 9.1 Format constraints (spec §4–6)

- **Hangul set-equality.** Every Hindi string has exactly the Hangul runs of the English string.
  - No Korean beyond the source row, and none dropped.
  - Exceptions go through `"_waive":["hangul"]` plus a `_note`; a lesson body's waiver goes on that lesson's title row.
  - Planned waivers:
    - `hangul`: the reading guide;
    - `meet`: only if an Indian name is used;
    - `sound-changes`: only if the संधि line needs Hangul the English lacks.
- **Glosses and fields:**
  - dialogue glosses keep exactly one ` / `;
  - blanks `__` stay;
  - no `{` `}` in glosses;
  - `q p why hint` at most 400 characters; options at most 200;
  - no two options of one question identical;
  - meanings distinct within a deck;
  - deck labels unique and never मेरे वाक्य.
- **Lesson bodies:**
  - same `<h3>`, `div` and `table` structure as the English;
  - every token (`{{ex:…}}`, `{{strokes:…}}`) unchanged and in order;
  - none of `<img> <svg> <script> <style>`, and no `javascript:`.

### 9.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) before writing each `p`.

- **Politeness cue = pronoun + tag.**
  - The Hindi pronoun and verb form must match the level of the expected Korean: तुम / -ो for 반말 answers; आप / -इए for 요 / -습니다 / -시- answers.
  - Copy the tag exactly where the English has one: (अनौपचारिक) for (casual).
  - Keep the scene cues: "दोस्त को मैसेज:", "किसी बुज़ुर्ग से:".
  - Never pair आप with (अनौपचारिक).
- **Tense cues:**
  - present 요-form answer → Hindi habitual (-ता है), or -रहा है only where the English is progressive;
  - past → perfective (गया, खाया);
  - future → -ऊँगा / -एगा, never -ने वाला or -रहा है;
  - have-to → मुझे … है / पड़ेगा;
  - want → मन है / चाहता/चाहती.
- **"(I)" in parentheses** (English "(I) go home") → "(मैं)" in parentheses, so the learner knows Korean drops it. Then apply §3.2.
- **Method cues stay:**
  - "(use 안)" → (안 से);
  - "write the number in Hangul" → (संख्या हंगुल में लिखें);
  - "use -자" → (-자 से).
- **Imperatives to the learner** use -ें: "'gang' लिखें — नदी".

### 9.3 Names, places, localisation

- **Person names in Devanagari:**
  - Kii कीई, 민수 मिनसू, 리사 लिसा, Mike माइक, Juan हुआन, Kim Minsu किम मिनसू, 지은 जीउन;
  - for new names, read the RR with §7.1, writing ㅓ as ओ (the press habit) only in names.
- **Places:**
  - established Hindi spellings: कोरिया, दक्षिण कोरिया, सियोल, बुसान, जेजू;
  - others: म्योंगदोंग, गंगनम, ओक्लाहोमा.
- **"The US" rows.**
  - **Follow the row as given.** Today 미국에서 왔어요 is glossed मैं अमेरिका से हूँ, and s0127 "(I) came from the US" is glossed (मैं) अमेरिका से आया/आई.
  - The Korean half is moving to a blank "I'm from ___" plus a Countries deck. When those rows arrive, gloss what they say (मैं ___ से हूँ). Do not swap in India.
  - Prose may say "अपना देश लगाएँ: भारत", with no Hangul unless waived.
- **For the lead** (proposals, no writer action): 인도에서 왔어요, 저는 인도 사람이에요, 힌디어 할 수 있어요 (힌디어 is the app's `LANGS.hi.ko`), 인도 루피, and 인도 in the Countries deck.
- **Money:** rupee comparisons without exchange rates (rates change).
- **Apps:** व्हाट्सऐप, इंस्टाग्राम, यूपीआई.
- **Transport:** मेट्रो, ऑटो.

## 10. What not to do

- No Korean added beyond the source row without `_waive` and a `_note`.
- No English left in Latin script. Latin is only for RR and its letters.
- No invented etymologies, and no etymology beyond what the English row says.
  - Coincidences (살 / साल) only as labelled mnemonics.
  - Analogies (विद्यालय / 학교) only as analogies.
- No Devanagari respelling of whole Korean words or sentences (§7).
- No comparison with English sounds.
- No तू. No mixing of आप and तुम toward the learner. No कृपया in ordinary 주세요 glosses. No जी added where the Korean has none.
- No gendered first-person form chosen silently (§3.2). No spaced slash for gender pairs.
- No Sanskritised officialese; no romanised Hindi; no slang addressed to the learner.
- Do not name the Read tab or any trainer or drill.
- Do not call 은/는 "the तो particle", or 을/를 "को".
- Do not touch `f`, `id`, `k`, `src`, or any Korean field.

## 11. Review questions for a Hindi speaker (ask for "OK" or the natural version)

1. Is आप with -ें right for the app voice? Are -इए glosses for 요 lines natural?
2. §3.2: is the unspaced pair जाता/जाती acceptable in prompts? Is मेरा … का मन है a fair gloss for -고 싶어요?
3. §3.4: 안녕히 가세요 / 계세요 → आराम से जाइए / रहिए; 수고하세요 → आपका काम अच्छा चले; 잘 부탁드립니다 → आपके सहयोग की उम्मीद है.
4. §4.1: विषय / कर्ता / कर्म पार्टिकल; विशेषण-क्रिया; औपचारिक / विनम्र / अनौपचारिक: clear, or too bookish?
5. §7.3: ㅓ "between अ and ऑ"; ㄲ "the tight क्क of पक्का"; ㄷ in the त family.
6. Does 혹시 = शायद / कहीं work, or a presumptive होगा?
7. Is the eastern-Hindi classifier ठो / गो real and widely known?
8. §4.3: are the deck labels and level titles natural?

## 12. Gaps and unverified claims

- **No native check.** Every Hindi sentence, gloss and term choice here is [inference].
- **Evidence limits:**
  - **Ngaihte & Holliday 2019:** a conference poster; 15 Hindi listeners; perception only.
  - **Ahn 2009:** Korean listeners; one Hindi speaker as stimulus; no affricates, no retroflexes; prose and table disagree on two percentages.
  - **Park & Narang 2019:** 5 learners, all women from Bihar; /a i u/ only; no vowels, liquids or finals.
  - **Narkar & Staroverov 2023:** p and k only; mixed Indic L1s.
  - The ㅈ → ज recipe, ㄷ nearer dental, ㄲ ≈ क्क, eastern ऐ = अइ and urban फ = [f] are inference.
  - No study of Hindi speakers' Korean vowels, particles or honorifics was found.
- **Not confirmed:**
  - the NEP year and CBSE status of Korean;
  - King Sejong Institutes in India;
  - TOPIK figures;
  - the spelling सियोल as the press norm (only a Bhojpuri wiki title and the app roadmap);
  - the NCERT कारक and संधि examples (from general knowledge; no textbook opened).
- **Carried from `tl-ko.md`, not re-opened:** Manrique (2022) on the *gusto* / 좋아해요 error, used here as an analogy.
- **For the lead:**
  - `ui.json` overrides (§4.2);
  - India rows (§9.3);
  - `hangul` and possibly `meet` / `sound-changes` need `_waive`;
  - no `trainer.json` for hi yet, so all trainers stay off.

## Sources

Opened for this profile (2026-11-23):
- [Ngaihte, C. N. & Holliday, J. J. (2019). Asymmetry in the perceptual assimilation of the Korean laryngeal contrast by Indian listeners (poster, HISPhonCog 2019)](https://academic.hanyang.ac.kr/documents/10980062/13048521/HISPhonCog2019_P23_Ngaihte_Holliday.pdf/22053edc-6ede-f2d5-ee0e-1eb3be197dac)
- [Ahn, H.-K. (2009). Korean speakers' perception of Hindi stop consonants. *Phonetics and Speech Sciences* 1(3)](https://koreascience.kr/article/JAKO200934939598173.pdf)
- [Park, M. & Narang, V. (2019). Significance of VLT and VOT in the description of stop consonant: Hindi and Korean p-t-k in contrast. *Interdisciplinary Journal of Linguistics* 12](https://linguistics.uok.edu.in/Files/f6ec3740-422d-4ac1-9f52-ddfe2cffcb28/Journal/0dac0006-8607-4da9-9d3e-d3f3fa79c4a6.pdf)
- [Narkar, J. & Staroverov, P. (2023). An acoustic study of voiceless stops in Indian English. *Journal of South Asian Linguistics* 12](https://ojs.ub.uni-konstanz.de/jsal/index.php/jsal/article/view/214)
- [Wikipedia: Korean phonology](https://en.wikipedia.org/wiki/Korean_phonology)
- [Wikipedia: Korean language education in India](https://en.wikipedia.org/wiki/Korean_language_education_in_India)
- [Univext: Korean alphabet guide in Hindi](https://univext.com/hi/blog/424/koriyaee-varnamala-hangul-shuruati-guide) (house style of a Hindi Korean-learning page: आप, loans for terms)

Local files read:
- `docs/HALVES-SPEC.md`
- `docs/profiles/tl-ko.md`, `hi.md` §1–3, §10
- `docs/briefs/tl-ko-writer.md`
- `tools/halves/native/tl/ko/work/README.md`
- `tools/halves/native/es/ko/REVIEW.md` and `ui.json`
- `tools/halves/native/en/ko/` (`lessons.jsonl`, `decks.jsonl`, `labels.jsonl`, cards 1–60, practice, 20 lesson bodies)
- `tools/halves/target/ko/` (`practice.jsonl`, `sentences.jsonl`, `cards.jsonl`)
- `tools/i18n/hi/ui.json` and `roadmap.json`
