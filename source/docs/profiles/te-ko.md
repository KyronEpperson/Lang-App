# Telugu speakers learning Korean: pair profile

Course `te-ko`: the Korean half `tools/halves/target/ko/` (33 lessons, 56 decks, 1,413 cards) + the Telugu half `tools/halves/native/te/ko/` (w1–w4; w4 also fills `work/wT.jsonl`). This profile is the writers' authority. It follows `hi-ko.md`'s plan, rebuilds the bridges from Telugu (Dravidian), and settles up front what the tl-ko and zh-ko reviews settled afterwards.

**Binding and reused verbatim:** the interface dictionary `tools/i18n/te/NOTES.md` (మీరు + -ండి, tab and button names, grammar terms, level titles); the spelling of `en-te.md` §2.8 / NOTES §1 (NFC, **no ZWNJ / ZWJ**: డెక్లు, కొరియన్లో; ళ్ళ; చేయ-; ధన్యవాదాలు; నమస్కారం; ASCII punctuation, no danda); `tools/i18n/te/roadmap.json` titles where the English title is the same (§3.4).

**Two choices that differ from the screen** (for the lead):
1. **No English in Latin script.** Loans in Telugu script (కార్డు, టీచర్). Latin only for RR and its letters, `@@`, and the prefix **K-** (K-పాప్), which the interface already uses.
2. **요-రూపం, not "요-form".** The interface writes "요-form" in Latin (NOTES §2). The learner sees drill labels and lessons side by side, so the lead should switch those UI strings to 요-రూపం.

**Tags:** **[research]** a source opened for this profile · **[convention]** grammars, schools, the app's strings, en-te.md (**not opened** = recalled) · **[inference]** this profile's reasoning. **The author is not a native speaker; every Telugu sentence here is [inference]** (§10).

## 1. Summary

1. **Register:** everyday spoken standard Telugu (చేశాను, వెళ్తాను, ఉంది), not grānthika, not Hindi. **The app addresses the learner as మీరు + -ండి**; Korean 반말 lines are still glossed with నువ్వు (§2.2).
2. **Biggest bridge:** Telugu already works like Korean: verb last, endings glued to the noun (ఇంట్లో = 집에), question words in place, relative clauses before the noun (నేను తిన్న అన్నం = 내가 먹은 밥), reason first, and **కాదు / లేదు = 아니에요 / 없어요** (§4).
3. **Biggest breaks:** no person / gender on Korean verbs; no Telugu topic marker or counters; respect on the Korean verb ending, not the pronoun.
4. **A ready-made 요:** the polite tag **-అండి** (అవునండి, లేదండి). 요 is obligatory, అండి optional (§4.6).
5. **Sounds:** everyday క త ప చ are Korean **ㄲ ㄸ ㅃ ㅉ** [inference from Hindi research, §5]; Telugu adds a vowel after final consonants (బస్సు), so 밥 → "బాపు"; RR *t, d* get read as ట, డ.
6. **Telugu script compares single sounds only** (§6).
7. **Learners** [inference]: K-drama / K-pop fans; students (EFLU Hyderabad has a BA in Korean: search results only); job seekers at Korean firms (Kia, Anantapur: not opened).

## 2. Register, glosses, person

### 2.1 Voice and typography

- Instructions in -ండి (చదవండి, టైప్ చేయండి). Praise: చాలా బాగుంది!, శభాష్!. Never a bare imperative to the learner.
- Korean in Hangul, RR in Latin; all else Telugu script, brands too (వాట్సాప్, కకావోటాక్, టీ-మనీ). `course.json`: `{"native":"te","name":"కొరియన్","brand":"한글"}`.
- Digits as the English row has them (the interface keeps digits).
- **Endings go on a Telugu head noun, never on Hangul:** "요 అనే ముగింపు", not 요కి.
- **Lint:** never space + *on* + letters + `=` in bodies (write `:` after RR words).

### 2.2 Korean speech levels in glosses

| Korean | Telugu gloss | Example |
|---|---|---|
| 반말 | నువ్వు, -ఆవు verb, bare command | 뭐 해? → ఏం చేస్తున్నావు? |
| 요-form | మీరు, -ఆరు verb, -ండి | 앉으세요 → కూర్చోండి |
| -습니다 | మీరు + the formal word | 감사합니다 → ధన్యవాదాలు |
| -시- (third person) | respect plural: ఆయన / ఆవిడ / name + గారు, -ఆరు | 할머니가 주무세요 → అమ్మమ్మ గారు నిద్రపోతున్నారు |
| 드세요, 계세요 | the respectful word where one exists | 맛있게 드세요 → బాగా తినండి |
| 주세요 | -ండి, **no దయచేసి** | 물 주세요 → నీళ్ళు ఇవ్వండి |
| -아/어 주세요 · 주시겠어요? | -ఇ పెట్టండి · -ఇ పెడతారా? | 찍어 주세요 → ఫోటో తీసి పెట్టండి |

- **Both directions:** a 요 / -습니다 / -시- line never gets నువ్వు; a 반말 line never gets మీరు. Fixed phrases take no pronoun.
- **-అండి** only on short replies whose politeness is the point (네 → అవునండి, 아니요 → లేదండి, 괜찮아요 → పర్వాలేదండి).
- **దయచేసి** only where the English says "please" and the Korean is -습니다 or written.
- **Tags** only where the English has them: (అధికారిక) / (మర్యాద) / (సాధారణ) / (గౌరవ). A -시- line about an elder gets the respect plural itself, not a plain verb plus a tag.

### 2.3 Person, gender, "we"

Every Telugu verb names a person; Korean names none.
1. **Person** follows the English row; if it has none, the Korean scene; in a bare card, the first person.
2. **"I" and "you" need no gender rule:** Telugu 1st and 2nd person verbs do not mark gender (en-te §2.3). Avoid gendered nouns about yourself: నేను స్టూడెంట్ని, not విద్యార్థిని (also "female student").
3. **A third person of unknown gender:** first a neutral wording (నా ఫ్రెండ్ + respect-plural -ఆరు, which fits both); then the scene (오빠 / 언니 in the speaker's mouth → female, 형 / 누나 → male; a name; an English he / she); last an unspaced pair on the verb: వచ్చాడు/వచ్చింది. Never a spaced ` / `.
4. **우리:** invitations (-자, -(으)ㄹ까요?, 같이) → మనం; 우리 엄마 / 집 / 회사 → మా (Telugu also says "our mother"); 저희 → always మేము / మా. Otherwise: listener inside the group → మనం, outside → మేము.
5. **당신 ≠ మీరు:** 민수 씨 → మిన్సు గారు.

### 2.4 Fixed phrases (one gloss everywhere)

From a count of target lines per phrase. Cards may add "lit. …".

| Korean | Telugu | Korean | Telugu |
|---|---|---|---|
| 안녕하세요 (also in work email) | నమస్కారం | 저기요 | ఏమండీ |
| 안녕히 가세요 (to the leaver) | వెళ్ళి రండి | 안녕히 계세요 (by the leaver) | వెళ్ళొస్తాను |
| 감사합니다 / 고마워요 / 고마워 | ధన్యవాదాలు / థాంక్సండి / థాంక్స్ | 죄송합니다 / 미안해요 / 미안해 | క్షమించండి / సారీ అండి / సారీ |
| 네 / 아니요 | అవునండి / లేదండి (కాదండి) | 응 / 아니 | అవును / లేదు (కాదు) |
| 잘 먹겠습니다 | భోజనానికి ధన్యవాదాలు (తినే ముందు) | 잘 먹었습니다 | భోజనం చాలా బాగుంది (తిన్నాక) |
| 수고하셨습니다 | ఈరోజు బాగా కష్టపడ్డారు | 수고하세요 | పని బాగా సాగాలి (పనిలో ఉన్నవారితో) |
| 수고했어(요) | బాగా చేశావు (చేశారు) | 잘 부탁드립니다 | మీ సహకారం ఆశిస్తున్నాను |
| 괜찮아요 | పర్వాలేదు (also "no, thanks") | 좀 | కొంచెం |
| 혹시 + question | …ఏమైనా…? | 혹시 + -면 | ఒకవేళ… |
| 계산해 주세요 | బిల్ ఇవ్వండి | 얼마예요? | ఎంత? |
| 콜! | ఫిక్స్! | 대박 | అదిరిపోయింది! |
| 화이팅! | ఆల్ ది బెస్ట్! | 아이고 · 어머 | అయ్యో · అమ్మో! |
| 진짜? · 그래요? | నిజంగా? · అవునా? | 좋은 하루 보내세요 | మీ రోజు బాగా గడవాలి |
| 선생님 | టీచర్ గారు (address: సార్ / మేడం) | 사장님 | ఓనర్ గారు |
| 과장님 / 팀장님 | మేనేజర్ గారు / టీమ్ లీడ్ గారు | 오빠·형 / 언니·누나 | అన్నయ్య / అక్క (§4.6) |
| ㅋㅋ / ㅠㅠ | హహహ / 😭 | 읽씹 | చదివి జవాబు ఇవ్వకపోవడం |

- **Who leaves:** Telugu has its own pair: the leaver says వెళ్ళొస్తాను, the one staying answers వెళ్ళి రండి (en-te §2.4). It maps onto 계세요 / 가세요 by role, not literally; cards give "lit. stay / go in peace".
- **Pause duplicates:** compliment.01 멋져요 అదిరింది! / .14 멋있어요 మీరు సూపర్; expression.04 그럼요 అవును మరి! / .18 물론이죠 తప్పకుండా / .15 당연하죠 అంతే కదా!; .05 글쎄요 ఏమో… / .19 잘 모르겠어요 నాకు సరిగ్గా తెలియదు.

## 3. Glossary, screen names, labels

### 3.1 Terms (closed list; bold = NOTES §3 verbatim)

| Idea | Term |
|---|---|
| Korean particle | పార్టికల్ (pl. పార్టికల్లు). First use: "తెలుగు విభక్తి ప్రత్యయాల్లాగే (-కి, -లో, -తో) పదానికి అతుక్కుంటుంది" |
| 은/는 · 이/가 · 을/를 | విషయ · కర్త · కర్మ పార్టికల్ |
| -아요, -고 | ముగింపు (ప్రత్యయం is reserved for Telugu) |
| noun · verb · adjective · adverb | **నామవాచకం** · **క్రియ** · విశేషణం · క్రియా విశేషణం; 크다 = విశేషణ క్రియ |
| dictionary form · stem | **నిఘంటు రూపం** · **క్రియా ధాతువు** (ధాతువు) |
| 요-form · 하다 verb | 요-రూపం · 하다-క్రియ |
| -습니다 / 요 / 반말 | అధికారిక / **మర్యాద** / **సాధారణ**; together మర్యాద స్థాయిలు |
| -(으)시- | **గౌరవ** |
| present · past · future | **వర్తమానం** · **భూతకాలం** · భవిష్యత్తు |
| question word · connector · softener | **ప్రశ్న పదం** · కలిపే పదం · మెత్తబరిచే పదం |
| 씨, 님, -గారు | పిలుపు |
| 개, 명 · irregular · pattern | **కౌంటర్** · **క్రమరహితం** · **ప్యాటర్న్** |
| native / Sino-Korean numbers | అచ్చ కొరియన్ / సైనో-కొరియన్ సంఖ్యలు (never చైనీస్ సంఖ్యలు) |
| Hangul · vowel · consonant · block · 받침 | **హంగుల్** · **అచ్చు** · **హల్లు** · **బ్లాక్** ("ఒక బ్లాక్ = ఒక అక్షరం") · **చివరి హల్లు** |
| ㄱㄷㅂㅅㅈ / ㄲㄸㅃㅆㅉ / ㅋㅌㅍㅊ | సాదా / గట్టి / మహాప్రాణ హల్లులు (never ఒత్తు = vattu) |
| sound change · 연음 · 비음화 | **శబ్ద మార్పు** · కలిపి పలకడం · అనునాసిక మార్పు |
| RR line | **రోమనైజేషన్** (never ఉచ్చారణ) |
| loanword · stroke order | అన్యదేశ్యం · రాసే క్రమం |

### 3.2 Screen names, trainers, `ui.json`

- **Tabs:** ఈరోజు · పాఠాలు · ప్రాక్టీస్ · రివ్యూ · పురోగతి; Read = చదవడం. **Buttons:** గుర్తుంది · మళ్ళీ · చెక్ · చూడండి ("చూడండి స్క్రీన్లో") · నా వాక్యాలు · ⏰ అన్నీ రివ్యూ.
- **Trainers:** w4 fills `wT.jsonl`, reusing this glossary and NOTES §3. `sound-changes` keeps its drill line as on screen ("చదవడం ట్యాబ్లో 🔀 శబ్ద మార్పులు డ్రిల్ చేయండి"); drop it if `trainer.json` does not ship. `hangul` keeps the replay line: «రాసే క్రమం మళ్ళీ చూడాలంటే అక్షరాన్ని ట్యాప్ చేయండి.»
- **`ui.json`: no wording overrides needed** (the te dictionary was written for te-ko: its 14 `uiKeys` already say కొరియన్ / హంగుల్ / రోమనైజేషన్). But `validate.js` line 241 counts them as words remaining unless present in `native/te/ko/ui.json`: **lead, copy the 14 entries verbatim.**

### 3.3 Labels (permanent progress keys)

**Decks** (56, `decks.jsonl` order, all unique, none నా వాక్యాలు):
1–8: హంగుల్ అచ్చులు · హంగుల్ హల్లులు · హంగుల్: క్లిష్టమైనవి · ఉచ్చారణ చిట్కాలు · అవసరమైన మాటలు · పరిచయం · అవసరమైన మాటలు 2 · అడిగి తెలుసుకోవడం
9–16: కేఫ్, కన్వీనియన్స్ స్టోర్ · రోజువారీ సంఖ్యలు · కౌంటర్లు · వాతావరణం, భావాలు · కలిపే పదాలు · డాక్టర్, మందుల షాపు · ఇల్లు, చిన్న పనులు · గౌరవ రూపాలు
17–24: చోట్లు, భవనాలు · అభిరుచులు · ఆహార పదాలు · పానీయాలు · కార్యకలాపాలు · టీవీ, వినోదం · స్థానం, దిశ పదాలు · ప్రాథమిక క్రియలు
25–32: పార్టికల్లు · సంఖ్యలు · తీయని మాటలు · ముద్దు ముద్దు మాటలు · సరసం · ఫ్రెండ్స్తో చాటింగ్ · హుషారు, శభాష్ · ఫ్రెండ్స్తో బయటకి
33–43: K-పాప్, ఫ్యాన్ కల్చర్ · సోషల్ మీడియా, స్లాంగ్ · డేటింగ్: తర్వాతి అడుగు · ఉద్యోగం, ఆఫీసు · పిచ్చాపాటీ · ఆహారం, ఆర్డర్ · దారి, ప్రయాణం · సమయం, రోజులు · కుటుంబం, మనుషులు · విశేషణాలు · K-డ్రామా డైలాగులు
44–53 (top-*): ఎక్కువ వాడే + నామవాచకాలు · క్రియలు · విశేషణాలు · క్రియా విశేషణాలు · సర్వనామాలు · పార్టికల్లు · కలిపే రూపాలు · ఆశ్చర్యార్థకాలు · పదాలు · కౌంటర్లు (each label written in full: "ఎక్కువ వాడే క్రియలు")
54–56: సరసపు పదాలు · పొగడ్తలు · దేశాలు

**Groups:** పునాది · రోజువారీ · పదజాలం · వ్యాకరణం · సామాజికం · ముఖ్య పదాలు.

**Other labels:** level titles (NOTES §3) t01 మొలక · t03 విద్యార్థి · t05 సీనియర్ · t08 ప్రో · t12 దిట్ట · t16 సెన్సెయ్ · greetings పొద్దుపోయింది, బాగా కష్టపడ్డారు · శుభోదయం · శుభ మధ్యాహ్నం · శుభ సాయంత్రం · goals ప్రయాణం, ఊళ్ళు తిరగడం · డేటింగ్, ఫ్రెండ్స్, సరదా · K-డ్రామాలు, సంగీతం · ఉద్యోగం, చదువు · plans కొరియా ట్రిప్ · ఫ్రెండ్షిప్, డేటింగ్ · 90 రోజుల్లో మాట్లాడటం · pause sets పొగడ్త · రోజువారీ మాట · మర్యాద మాటలు · సామెత.

### 3.4 Lesson titles

"N · title", each with exactly the English title's Hangul; * = the roadmap's Telugu. Cross-references: "పాఠం N, «title»".

1 హంగుల్ ఒక్క పూటలో · 2 మర్యాద స్థాయిలు · 3 పరిచయాలు* · 4 శబ్ద మార్పులు: 감사합니다 ఎందుకు వేరేలా వినిపిస్తుంది* · 5 నామవాచకాలు, 은/는 · 6 있어요, 없어요 · 7 సర్వనామాలు, ప్రశ్న పదాలు · 8 క్రియలు · 9 వర్తమానం: 요-రూపం · 10 భూతకాలం: 았어요 / 었어요 · 11 భవిష్యత్తు, ప్లాన్లు: -(으)ㄹ 거예요 · 12 పదక్రమం, 을/를* · 13 에, 에서, పార్టికల్ల పటం · 14 కాదనడం: 안, -지 않아요 · 15 도, 만: కూడా, మాత్రమే* · 16 నామవాచకాలు, క్రియలు కలిపి వాక్యాలు · 17 కావాలి, ఇష్టం: -고 싶어요, 좋아해요* · 18 రెండు సంఖ్యా పద్ధతులు* · 19 బయట తినడం* · 20 ఊళ్ళో తిరగడం* · 21 పిలుపులు, గౌరవ రూపాలు* · 22 ప్లాన్లు వేయడం* · 23 కొరియన్లలాగా మెసేజ్లు · 24 కౌంటర్లు · 25 వాక్యాలు కలపడం: -고, -지만, -아/어서 · 26 జరిగిన కథ చెప్పడం* · 27 నామవాచకాన్ని వర్ణించడం: 좋은 날씨, 큰 가방 · 28 పోల్చడం: 보다, 더, 제일 · 29 చేయలేను, చేయగలను, తెలియదు · 30 చేయాలి: -아/어야 해요* · 31 గౌరవ క్రియలు* · 32 మర్యాదగా అడగడం* · 33 ఆఫీసు కొరియన్

The `numbers` blurb must say hours are native: "అచ్చ కొరియన్: లెక్క, వయసు, గంటలు; సైనో-కొరియన్: డబ్బు, నిమిషాలు, తేదీలు".

## 4. Grammar bridges and breaks

Telugu facts: general grammar and en-te §3–4 [convention, not opened beyond en-te]. Korean here is for writers; a field uses Hangul only as its English does, or under `_waive`.

### 4.1 Order and endings

- **Holds:** verb last (నేను కాఫీ తాగుతాను = 저는 커피를 마셔요); question words in place (ఇది ఏమిటి? = 이거 뭐예요?); modifiers first; endings glued on (ఇంట్లో = 집에, అమ్మతో = 엄마하고).
- **Breaks:**
  1. **Spacing:** Telugu writes longer postpositions apart (ఇంటి నుంచి); Korean glues every particle (집에서, 학교까지). Expect 학교 까지 ✗.
  2. **No stem change:** ఇల్లు → ఇంటికి, but 집 → 집에. Only the particle changes by the last sound (은/는, 이/가, 을/를), as Telugu -కి / -కు does.
  3. **Yes / no:** Telugu adds -ఆ (వస్తారా?); Korean keeps the ending and raises the voice.

### 4.2 Case endings vs particles

| Telugu | Korean | Note |
|---|---|---|
| — | 이/가, topic 은/는 | Telugu marks neither |
| -ని / -ను (people, definite things) | 을/를 (every object) | కాఫీ తాగాను has no -ని; 커피를 마셨어요 |
| -కి (goal, time) | 에 | ఇంటికి = 집에 · ఏడు గంటలకు = 일곱 시에 |
| -కి (to a person) | 에게 / 한테 | |
| -లో (being) | 에 | ఇంట్లో ఉన్నాను = 집에 있어요 |
| -లో (doing) | 에서 | ఇంట్లో చదువుతాను = 집에서 공부해요: **one -లో, two particles** |
| నుంచి · వరకు | 에서 / 부터 · 까지 | |
| -తో (with someone) · -తో / -లో (by means of) | 하고 / (이)랑 · (으)로 | చేతితో = 손으로, బస్సులో = 버스로 |
| కంటే · కూడా · మాత్రమే | 보다 · 도 · 만 | §4.3, §4.7 |

**The నాకు-construction:** నాకు కాఫీ ఇష్టం, నాకు ఒక అన్నయ్య ఉన్నాడు → Korean uses the topic: 저는 커피가 좋아요, 저는 형이 있어요. Predicted: 저에게 좋아요 ✗. "Must" is nominative in both: నేను వెళ్ళాలి = 저는 가야 해요.

### 4.3 కూడా, మాత్రమే, అయితే

- **కూడా ↔ 도:** same place; + negative = "either" (నేను కూడా వెళ్ళను = 저도 안 가요). Breaks: 도 *replaces* 은/는, 이/가, 을/를 (저는도 ✗) but stacks after 에 / 에서 (집에도 ≈ ఇంట్లో కూడా).
- **మాత్రమే ↔ 만:** same place.
- **은/는:** Telugu has no topic marker; అయితే (నేను అయితే టీ = 저는 차) covers only contrast. Teach 은/는 as "వాక్యం దేని గురించో చెప్పే గుర్తు", used in almost every sentence.

### 4.4 "Is": nothing, ఉంది, కాదు, లేదు

| Telugu | Korean | Job |
|---|---|---|
| నేను స్టూడెంట్ని (person ending on the noun) | 학생이에요 (one form for all) | A = B |
| స్కూల్లో ఉన్నాను | 학교에 있어요 | place |
| నా దగ్గర టైం ఉంది | 시간이 있어요 | having (thing = subject, as with 이/가) |
| నేను డాక్టర్ని **కాదు** · టైం **లేదు** | 의사가 **아니에요** · 시간이 **없어요** | **exact split** |

- Present the కాదు / లేదు split as a gift in lessons 6 and 14.
- **Breaks:** ఉంది agrees (ఉన్నాను / ఉన్నాడు), 있어요 never does. Telugu లేదు is also the past negative (చేయలేదు): expect 먹었어요 없어요 ✗ [inference].

### 4.5 Verbs, tense, negation

- **No agreement (lessons 8–9):** 가요 = వెళ్తాను / వెళ్తావు / వెళ్తారు / వెళ్తాడు / వెళ్తుంది. Telugu drops pronouns because the verb shows the person; Korean drops them with no such help.
- **Forms:** -다 ≈ the verbal noun -అడం (먹다 ≈ తినడం); stem 먹 ≈ root తిను. Telugu describes with noun + ఉంది (వేడిగా ఉంది); Korean uses one verb (더워요): 좋아이에요 ✗. **చేయు compounds = 하다 verbs** (పని చేయడం = 일하다, loans too).
- **Tense:** 요-present = habit and now (వెళ్తాను / వెళ్తున్నాను). Telugu -తాను is habit **and** future; Korean splits 가요 / 갈 거예요, so prompts carry tense cues (§8.2). "Probably" -(으)ㄹ 거예요 ≈ -ఉంటుంది. Past: one form for all persons; ఇంకా … లేదు = 아직 안 …었어요.
- **Negation:** Telugu uses a verb form (వెళ్ళను), Korean 안 before the verb or -지 않아요. 하다 verbs: 공부 안 해요, as పని చేయను negates the చేయు part.
- **Exact bridges:** వెళ్ళను / **వెళ్ళలేను = 안 / 못** · నాకు ఈత వచ్చు ≈ -(으)ㄹ 수 있어요 · నాకు తెలియదు = 몰라요 · వెళ్ళకండి = 가지 마세요 · -ఆలి = -아/어야 해요 · -వచ్చు = -아/어도 돼요 · -కూడదు = -(으)면 안 돼요 · -తే = -(으)면.

### 4.6 Politeness and address

- **Holds** [inference]: మీరు / నువ్వు follows age and closeness like 요 / 반말; switching to నువ్వు waits for the older person, like 말 놔도 돼요; **-అండి ≈ 요** as a tag at the end.
- **Breaks (teach all four):**
  1. Telugu marks respect on the pronoun, plural verb and -గారు; Korean **only on the verb ending**, with no everyday "you" (당신 ≠ మీరు).
  2. -అండి is optional; a Korean sentence to an adult stranger without 요 is rude.
  3. -습니다 marks the situation (announcements, first meetings, work), like ధన్యవాదాలు vs థాంక్స్.
  4. Korean has humble 저 and 저희 (always exclusive, like మేము); Telugu has no humble forms.
- **-시- = the respect plural:** మా నాన్న గారు ఇంట్లో ఉన్నారు ≈ 아버지가 집에 계세요. Breaks: Telugu uses one plural for "you" and a respected third person; Korean splits 요 (listener) and -시- (subject). Never -시- about yourself (저는 가세요 ✗). The special verbs (드시다, 주무시다) are new; Telugu has a few respectful words (భోజనం చేయండి).
- **Address:** name + గారు ≈ 씨 / 님, never on your own name. **Siblings split by age in both** (అన్నయ్య / తమ్ముడు, అక్క / చెల్లెలు = 형·오빠 / 남동생, 누나·언니 / 여동생); Korean adds the **speaker's** gender (a man says 형 / 누나). Shopkeepers: అన్నా / అక్కా vs 사장님 / 저기요. "సార్" alone ≈ a title alone (과장님).

### 4.7 Comparing, modifiers, joining, numbers

- **Comparing:** X Y కంటే చౌక = X가 Y보다 싸요. ఎక్కువ ≈ 더, అన్నిటికంటే ≈ 제일.
- **Modifiers: exact.** నేను తిన్న అన్నం = 내가 먹은 밥; తినే అన్నం = 먹는 밥; పెద్ద సంచి = 큰 가방. No "which" in either.
- **Joining:** the -ఇ form (తిని వెళ్ళాను) ≈ -고 / -아서, no tense on either; reason first in both (బిజీగా ఉన్నాను కాబట్టి రాలేను ≈ 바빠서 못 가요); కానీ ≈ -지만. Story words: మొదట, తర్వాత, అందుకే, కానీ, చివరికి.
- **Two number systems ≈ అచ్చ తెలుగు vs Sanskrit loans** (a teaching device, not history). Native: counting, age, hours. Sino: money, minutes, dates, floors, phone numbers. ఏడు గంటల పది నిమిషాలకు = 일곱 시 십 분에; ఏడున్నర = 일곱 시 반. 10만 = 1 లక్ష.
- **Counters:** రెండు కాఫీలు vs 커피 두 잔 (noun first, no plural): expect 두 커피 ✗, 커피들 ✗. The bridge: Telugu's own human forms (ఇద్దరు; మంది from eight) ≈ 명. Age: నాకు ఇరవై ఐదేళ్ళు = 스물다섯 살이에요.

## 5. Error zones, ranked

**1. Stops.** No Telugu study was found. Hindi evidence is carried as [inference from Hindi, not reopened] (hi-ko §5): Korean listeners heard Hindi unaspirated voiceless stops as ㄲ ㄸ ㅃ (88%), aspirated as ㅋ ㅌ ㅍ, voiced as ㄱ ㄷ ㅂ (Ahn 2009); Hindi listeners heard Korean lax and aspirated both as aspirated (Ngaihte & Holliday 2019). Telugu writes the same four series, but native words use only plain voiceless and voiced stops (Bhaskararao & Ray 2016, via en-te §6). Seoul lax vs aspirated is now mostly pitch ([Wikipedia](https://en.wikipedia.org/wiki/Korean_phonology)).
- Teach as §6.2: **never క త ప చ for ㄱ ㄷ ㅂ ㅈ**; a real puff on ㅋ ㅌ ㅍ ㅊ (casual Telugu softens aspirates, and ఫ is often f [inference]).

**2. The added final vowel.** Telugu words end in vowels; loans get -u (బస్సు, బ్యాంకు). Expect 밥 "బాపు", 책 "చెక్కు". Teach the unreleased stop: close and stop.

**3. RR read the Indian way:** *t, d* as ట, డ (Korean ㄷ is alveolar; dental త / ద is nearer [inference]); *k t p ch* unaspirated; *eo* / *yeo* as యో (the press form సియోల్ teaches it); *eu* యూ; *ae* ఐ; *u* as in *bus*; *wo* వో; *ng* with a g; *j, ch* with the ts / dz Telugu uses before back vowels (చాలా; en-te §6), where Korean wants the palatal చ / జ of చిన్న.

**4. Vowel length.** Telugu contrasts it; Seoul Korean has almost lost it ([Wikipedia](https://en.wikipedia.org/wiki/Korean_phonology)). ఆ and అ are both ㅏ.

**5. Particles:** one -లో for 에 / 에서; 저에게 좋아요 ✗; 을/를 skipped; spaces before particles. **6. "Is":** 안 있어요 ✗; 먹었어요 없어요 ✗. **7. Politeness:** 당신; dropping 요; -시- for yourself. **8. Local traps** [inference]: 이 / 그 / 저 vs two-way ఈ / ఆ; 들 everywhere; counter order; 이에요 / 예요; final ㅇ written or read as ం (word-final ం = m: "గాం" for 강).

## 6. Reading guide

### 6.1 Policy: comparisons, not readings

Telugu script compares **one sound** (ㅏ ≈ ఆ) or one syllable with a pollu (옷 ≈ "ఓత్"), always with దాదాపు or a mouth description. Never whole words, because: no letter exists for ㅓ or ㅡ; ం reads as m at the end and changes before consonants, so it cannot carry ㄴ / ㅁ / ㅇ; readers add ఉ after finals; press spellings (సియోల్) fix wrong readings; Hangul is the goal. Name labels (మిన్సు, కిమ్చి) are allowed (§8.3).

### 6.2 Sound table (cards c0001–c0060, `hangul`, the Hangul deck descriptions)

| Jamo (RR) | Comparison | Trap |
|---|---|---|
| ㅏ a | ఆ (any length) | |
| ㅓ eo | jaw open as for ఆ, say ఒ **without rounding** | not ఓ / యో |
| ㅗ · ㅜ · ㅣ | ఓ (lips tight, round) · ఊ · ఈ | |
| ㅡ eu | ఉ with lips spread, as in a smile | not యూ |
| ㅐ = ㅔ | ఏ / ఎ | not ఐ |
| ㅑ ㅛ ㅠ · ㅕ · ㅘ ㅝ ㅟ · ㅚ ㅙ ㅞ · ㅢ | యా యో యూ · య + ㅓ · వా, వ + ㅓ, వీ · about వే · ㅡ + ఈ | *yeo* ≠ యో, *wo* ≠ వో |
| ㄱ ㄷ ㅂ ㅈ | soft గ ద బ జ | never క త ప చ |
| ㅋ ㅌ ㅍ ㅊ | ఖ థ ఫ ఛ, strong puff | ఫ ≠ f |
| ㄲ ㄸ ㅃ ㅉ | plain క త ప చ: no air, throat tight, higher pitch | not long |
| ㄷ ㅌ ㄸ · ㅈ ㅊ ㅉ | త / ద family, not ట / డ · the చ / జ of చిన్న, not of చాలా | |
| ㅅ / ㅆ | స / tight స; before ㅣ about శ | |
| ㄹ | light tap ర between vowels; ల at the end; ㄹㄹ = ల్ల | never ళ |
| ㄴ ㅁ · ㅎ | న్ మ్ in full · weak హ, often silent between vowels | |
| final ㅇ | the ం of రంగు, without the గ | 강 ≠ "గాంగ్" |
| finals | క్ త్ ప్ unreleased; ㅅ ㅈ ㅊ ㅌ ㅎ → త్ | no added ఉ |

**Script bridge:** basic consonants follow mouth position, like the varga rows (క ఖ గ ఘ ఙ); one బ్లాక్ = one అక్షరం. Breaks: a Hangul consonant has **no built-in a** (ㄱ alone is not గ); vowels are full letters, not గుణింతం signs; the final sits at the bottom like a vattu but closes *this* syllable; linking moves it on (한국어 → 한구거), as సంధి joins sounds.

### 6.3 Guide in Telugu, ready to paste (`hangul`; needs `"_waive":["hangul"]` + `_note` on its title row)

> **రోమనైజేషన్ ఎలా చదవాలి** — ఇది ఇంగ్లీష్ చదివేవారి కోసం తయారైంది, కాబట్టి:
> - **a** ఎప్పుడూ "ఆ". **eo** కి తెలుగు అక్షరం లేదు: నోరు "ఆ" కి తెరిచినట్టు తెరిచి, పెదవులు గుండ్రం చేయకుండా "ఒ" అనండి. *seoul* లో "యో" లేదు.
> - **eu**: పెదవులు నవ్వుతున్నట్టు చాపి "ఉ". **ae**, **e**: రెండూ "ఏ", "ఐ" కాదు. **u** = ఊ.
> - **k, t, p, ch** = ఖ, థ, ఫ, ఛ — అరచేతికి గాలి తగలాలి. **p** అంటే f కాదు.
> - **kk, tt, pp, jj** = మన మామూలు క, త, ప, చ — గాలి లేకుండా, గొంతు బిగించి; పొడవుగా కాదు.
> - **g, d, b, j** = మెత్తని గ, ద, బ, జ. మొదట్లో క, త, ప, చ అనకండి.
> - **t, d** = త, ద — ట, డ కాదు. **j, ch** = "చిన్న", "జీతం" లోని చ, జ.
> - **r** అచ్చుల మధ్య తేలికైన ర; చివర **l** = ల, ళ కాదు: *mul*. **ng** = "రంగు" లోని ం, గ లేకుండా: *gang*.
> - చివర **k, t, p**: నోరు మూసి ఆగండి, "ఉ" చేర్చకండి: *bap*, "బాపు" కాదు. చివరి హల్లు తర్వాతి అచ్చుతో కలుస్తుంది: *hangugeo*.
> - కొరియన్లో దీర్ఘం, హ్రస్వం తేడా లేదు. రోమనైజేషన్ పలకడానికే; రాసేది హంగుల్లో: 감사합니다 = *gamsahamnida*.

## 7. Per-lesson notes

**B** = build on; **R** = English-built passage to rewrite. Unmarked = [inference].

| # | id | Notes |
|---|---|---|
| 1 | `hangul` | B: బ్లాక్ ≈ అక్షరం, no built-in a; §6.3. R: English sound hints (uh, oo, bed) → §6.2; `_waive` |
| 2 | `polite` | B: మీరు / నువ్వు ≈ 요 / 반말; -అండి ≈ 요 (but optional); §4.6. "Formal" column (고맙습니다) = అధికారిక |
| 3 | `meet` | B: Telugu's own who-leaves pair (§2.4). R: "Formal" column (반갑습니다, 성함) → "అధికారిక / గౌరవ"; country tip: no added 인도 |
| 4 | `sound-changes` | B: సంధి; nasalization ≈ school అనునాసిక సంధి (వాక్ + మయం → వాఙ్మయం) [convention, not opened]; drill line §3.2 |
| 5 | `nouns` | B: no articles; మా ఇల్లు ≈ 우리 집. Traps: three-way 이 / 그 / 저; 들 optional, unlike -లు |
| 6 | `isseoyo` | B: కాదు / లేదు (§4.4). R: the "English 'is'" opening |
| 7 | `pronouns-questions` | B: question words in place; 우리 → మనం / మేము; 저희 = మేము |
| 8 | `verbbasics` | B: -అడం, ధాతువు, **no agreement**, విశేషణ క్రియ, చేయు ≈ 하다. R: the "to …" framing |
| 9 | `verbs` | B: one form for every person and for -తాను / -తున్నాను; tense cues |
| 10 | `past` | B: one past; ఇంకా … లేదు = past in both. R: cut "ate / have eaten" |
| 11 | `future` | B: -తాను is habit and future; "probably" ≈ -ఉంటుంది. R: "kkeoyeyo" → "గట్టి క" |
| 12 | `sov` | B: same order; -ని vs 을/를. R: SVO lines |
| 13 | `particles` | B: one -లో, two particles; -కి = 에; నుంచి = 에서 (from). R: "English 'at'" |
| 14 | `negation` | B: verb-form negation vs 안; పని చేయను ≈ 공부 안 해요; కాదు / లేదు |
| 15 | `do-man` | B: కూడా / మాత్రమే (§4.3) |
| 16 | `sentences` | B: same frame. R: English-order mistakes → Telugu ones (§5) |
| 17 | `want-like` | B: నాకు … ఇష్టం = X가 좋아요 = X를 좋아해요; -고 싶어요 = -ఆలని ఉంది, never -ఆలి |
| 18 | `numbers` | B: అచ్చ / సైనో; లక్ష = 10만. R: "like English digits" → "పది పదాలు, ఒక నియమం" |
| 19 | `food` | B: రెండు టీలు vs 차 두 잔 |
| 20 | `getting-around` | B: Hyderabad Metro card ≈ టీ-మనీ |
| 21 | `titles` | B: -గారు ≈ 씨 / 님; siblings by age, plus speaker gender. R: "(you female / male)" → "మీరు అమ్మాయి / అబ్బాయి అయితే" |
| 22 | `plans` | B: వెళ్దాం ≈ 가자; వెళ్దామా? ≈ -(으)ㄹ까요?; వస్తావా? ≈ -(으)ㄹ래?. R: "Formal" column (가시겠어요?) → "గౌరవ" |
| 23 | `texting` | B: ㅋㅋ ≈ హహహ. **KakaoTalk's "1" = not yet read; 읽씹 = the 1 is gone, no reply** (the English src is wrong) |
| 24 | `counters` | B: ఇద్దరు / మంది ≈ 명 |
| 25 | `joining` | B: -ఇ form; reason first (కాబట్టి). R: "and / but / so" → మరియు / కానీ / అందుకే |
| 26 | `story` | B: story words (§4.7) |
| 27 | `noun-modifiers` | B: relative participles (exact). R: "no that / which" → "తెలుగులాగే 'ఏది' అవసరం లేదు" |
| 28 | `compare` | B: కంటే = 보다 |
| 29 | `cant` | B: వెళ్ళను / వెళ్ళలేను = 안 / 못; 모르겠어요 ≈ చెప్పలేను |
| 30 | `have-to` | B: -ఆలి; అక్కర్లేదు = 안 가도 돼요. R: cross-ref → పాఠం 32, «మర్యాదగా అడగడం» |
| 31 | `honorific` | B: respect plural = -시- |
| 32 | `requests` | B: 좀 = కొంచెం; -ఇ పెట్టండి / పెడతారా?; -వచ్చా? ≈ -아/어도 돼요?; -కూడదా? ≈ -(으)면 안 돼요? |
| 33 | `office` | B: title alone ≈ సార్; ladder below; 회식 ≈ టీమ్ డిన్నర్ |

**Office ladder (one gloss each)** [inference, anchored on Indian AM / Manager / DGM / GM]: 사원 ఉద్యోగి · 대리 అసిస్టెంట్ మేనేజర్ · 과장 మేనేజర్ · 차장 డిప్యూటీ జనరల్ మేనేజర్ · 부장 జనరల్ మేనేజర్ · 팀장 టీమ్ లీడ్ · 사장 ఓనర్ / ఎండీ. Say each company differs.

## 8. Row conventions

### 8.1 Format

Hangul runs set-equal to the English row (else `"_waive":["hangul"]` + `_note`; planned only for `hangul`). One ` / ` per dialogue; blanks kept; no braces; `q p why hint` ≤ 400, options ≤ 200 and distinct; meanings distinct within a deck (case-insensitive). Lesson bodies keep the `<h3>` / div / table structure and every token in order.

### 8.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) first.
- **Level:** నువ్వు / bare command for 반말 answers, మీరు / -ండి for 요 / -습니다 / -시-; copy English tags and scene cues ("ఫ్రెండ్కి మెసేజ్:", "పెద్దవారితో:"). Short replies that differ only by 요: అవునండి / లేదండి vs అవును / లేదు + (సాధారణ).
- **Tense cues, fixed:** **(వర్తమానం) / (భూతకాలం) / (భవిష్యత్తు)** wherever a distractor or `x` differs in tense, and on every -తాను gloss of a 요-present answer. A time word (రేపు, నిన్న, రోజూ) may replace the cue. Exempt: prompts that name the tense as a grammar term ("가다 భూతకాలంలో").
- **Other cues:** "(I)" → "(నేను)"; have-to → -ఆలి; want → -ఆలని ఉంది; method cues stay ("(안 తో)"). Instructions in -ండి.
- **`@@`:** as many as the English row. **Never attach an ending to `@@`** (Telugu endings depend on the last sound, and names vary): "@@ గారికి", "పేరు @@", "నేను @@".

### 8.3 Names and localisation

- **People:** Kii కీ · 민수 మిన్సు · 리사 లీసా · Mike మైక్ · Juan హువాన్ · 지은 జీఉన్. Telugu names (రవి, ప్రియ) only in Hangul-free prose.
- **Places:** కొరియా · సియోల్ (press and interface form, a label) · బుసాన్ · మ్యోంగ్దోంగ్ · హోంగ్దే · గంగ్నమ్ · ఇంచియోన్.
- **Other names and loans:** the established Telugu spelling if any (కిమ్చి, సోజు, బిబింబాప్); else RR letter by letter: g గ · k/kk క · d ద · t/tt త · b బ · p/pp ప · j/jj జ · ch చ · s/ss స · h హ · n న · m మ · ng ంగ్ · r ర · l ల · a ఆ · eo ఒ · o ఓ · u ఊ · eu ఉ · i ఈ · ae/e ఏ; y- య, w- వ; finals with pollu. Labels only (ㅓ → ఒ is fine here).
- **Countries:** standard Telugu names (భారతదేశం, అమెరికా, జపాన్); 인도 (c1222) = "భారతదేశం (ఇండియా)". "I'm from ___" → "నేను ___ నుంచి వచ్చాను"; never swap in India.
- **Local frame:** రూపాయలు, no exchange rates; వాట్సాప్, యూపీఐ, మెట్రో, ఆటో.

## 9. What not to do

- No Korean beyond the source row without `_waive`; never edit `f`, `id`, `k`, `src` or Korean fields.
- No Latin-script English (RR, `@@`, K- excepted); no ZWNJ / ZWJ; no danda.
- No invented etymologies or character origins (state one only if certain); sound-alikes labelled or left out.
- No whole-word respellings, no ం for Korean finals, no English sound comparisons.
- No నువ్వు to the learner, no mixed levels in one gloss, no దయచేసి with plain 주세요, no silent gender choice.
- 은/는 ≈ అయితే, 을/를 ≈ -ని, 에 ≈ -లో are bridges, never rules.
- Hours native, minutes and money Sino-Korean. KakaoTalk's "1" = not yet read.

## 10. Review questions and unverified claims

**For a Telugu speaker** ("OK" or the natural version):
1. -అండి as the bridge for 요; ఏమండీ for 저기요?
2. వెళ్ళి రండి / వెళ్ళొస్తాను for 안녕히 가세요 / 계세요?
3. మీ సహకారం ఆశిస్తున్నాను, పని బాగా సాగాలి, ఈరోజు బాగా కష్టపడ్డారు, భోజనానికి ధన్యవాదాలు?
4. -ఇ పెట్టండి / పెడతారా? for -아/어 주세요 / 주시겠어요?; ఏమైనా for 혹시?
5. Terms: పార్టికల్, విషయ / కర్త / కర్మ పార్టికల్, ముగింపు, అధికారిక, సాదా / గట్టి / మహాప్రాణ, అచ్చ కొరియన్?
6. Titles and labels: హంగుల్ ఒక్క పూటలో, పిచ్చాపాటీ, హుషారు, శభాష్, ముద్దు ముద్దు మాటలు, సరసం?
7. Slang for young speakers in both states: అదిరిపోయింది (대박), ఫిక్స్! (콜), ఆల్ ది బెస్ట్ (화이팅)?
8. Sounds: ㅓ = ఒ unrounded, ㅡ = ఉ spread; do speakers soften ఖ థ ఫ ఛ and say ఫ as f?

**Unverified:** no study of Telugu learners of Korean was found; §5's stop evidence is Hindi research by analogy. [inference]: ㅈ ≈ palatal చ / జ; ㄷ nearer dental; -అండి ≈ 요; predicted errors; office ladder. Not opened: అనునాసిక సంధి; Kia; school terms (కర్త, విభక్తి, అన్యదేశ్యం); en-te's phonetics.

**For the lead:** copy the 14 `uiKeys` into `native/te/ko/ui.json` (§3.2); switch the UI's "요-form" to 요-రూపం; `_waive` on `hangul`; keep the `sound-changes` drill line only if `trainer.json` ships.

## Sources (opened 2026-11-23 unless marked)

- [Wikipedia, *Korean phonology*](https://en.wikipedia.org/wiki/Korean_phonology): ㄷ ㅌ ㄸ alveolar; ㅈ ㅉ ㅊ (alveolo-)palatal; length "almost completely neutralized"; low pitch after lax stops.
- EFLU Hyderabad, BA (Hons. Research) Korean course descriptions (search results only), e.g. [Semester II](https://efluniversity.ac.in/Timetables/Dec2024-25/UG/BA%20Korean%20COURSE%20DESCRIPTIONS%20SEMESTER%20II.pdf).
- Not reopened: Ahn 2009, Ngaihte & Holliday 2019 (via `hi-ko.md`); Bhaskararao & Ray 2016 (via `en-te.md`).
- Local: HALVES-SPEC, the x-ko briefs, hi-ko / vi-ko / en-te profiles, `tools/i18n/te/`, `native/{en,tl,zh}/ko/`, `target/ko/`.
