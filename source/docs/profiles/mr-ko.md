# Marathi speakers learning Korean: pair profile

Course `mr-ko` = the fixed Korean half `tools/halves/target/ko/` (33 lessons, 56 decks, 1,413 cards; `docs/HALVES-SPEC.md`) + the Marathi half `tools/halves/native/mr/ko/`. The Marathi half is written by w1–w4 from `mk_native.js mr`, then completed by the top-up writer (`docs/briefs/x-ko-topup.md`). This profile is their authority.

- **Plan.** It follows `hi-ko.md` (same script, also SOV with postpositions), but **Marathi is not Hindi**: never copy Hindi wording.
- **Settled in advance.** The questions the tl-ko and zh-ko reviews settled afterwards are decided here (§2, §6, §8).
- **What binds it.** `tools/i18n/mr/NOTES.md` (register, glossary, tab names, level titles, quiz words) is reused unchanged. Additions are marked: the particle term, the -습니다 tag, K-.
- **Author.** Not a native Marathi speaker. **Every Marathi sentence is [inference].**
- **Tags:** **[source]** a page opened (see Sources) · **[convention]** school grammar or general knowledge, not opened · **[inference]** this profile's reasoning · **[unverified]** looked for and not confirmed; build nothing new on it.

## 1. Summary

1. **Register.**
   - Everyday standard Marathi (Pune / Mumbai) in Devanagari, as apps write it. Loans in Devanagari (कार्ड, कॅफे).
   - The learner is **तुम्ही** + polite imperative (वाचा, लक्षात ठेवा). Never तू.
2. **Gender.** Use a neutral frame first, then the scene, then an unspaced pair (§2.3). तुम्ही verb forms are neutral (तुम्ही गेलात).
3. **Levels.**
   - 반말 → **तू**: ordinary among Marathi friends and family, so a close bridge.
   - 요 → **तुम्ही**; -습니다 → तुम्ही + formal words.
   - -시- → तुम्ही, or the respect plural for a third person.
   - Tags as the English has them: (औपचारिक) / (सभ्य) / (अनौपचारिक) / (आदरार्थी).
4. **Bridge.** Verb-final order, and markers **written joined** in both languages: घरात ≈ 집에, टॅक्सीपेक्षा ≈ 택시보다.
5. **Break.** नाही follows the verb (पीत नाही); 안 precedes it (안 마셔요).
6. **Sound.** Marathi's four-way क ख ग घ maps to ㄲ / ㅋ / ㄱ. Devanagari compares single sounds; it never respells words.

## 2. Register, glosses, gender

### 2.1 Voice and typography

- **Praise:** छान!, बरोबर!, मस्त!. No रे / गं / अरे toward the learner.
- **Punctuation:**
  - full stop **.**, never the danda;
  - straight quotes "…", spaced em dash, ` / ` for alternatives only;
  - `✗` / `✓`; Western digits (interface §1).
- **Spelling:**
  - government standard; ॲ/ॅ for English "a" (ॲप, बॅग), ऑ/ॉ for "o" (ऑफिस);
  - the colloquial neuter -ं as the interface writes it (झालं, समजलं, वाक्यं; कार्ड and डेक invariant);
  - no nukta letters.
- **Script:**
  - Korean in Hangul and RR in Latin, exactly as in the English row; everything else in Devanagari, brands included (काकाओटॉक, व्हॉट्सॲप, टी-मनी).
  - Latin only for RR, its letters (*eo*, *kk*) and the interface's closed list (XP, Lv, Aa, A / B, Lang App).
- **K-:** के-पॉप, के-ड्रामा. The interface label "K-ड्रामा आणि संगीत" breaks its own Latin list; the course row `goal.drama` = के-ड्रामा आणि संगीत (§10).
- **`course.json`:** `{"native":"mr","name":"कोरियन","brand":"한글"}`.
- **Lint:** never a space + *on* + letters + `=` in a body. Put `:` after an RR word.

### 2.2 Speech levels

| Korean | Marathi gloss | Example |
|---|---|---|
| 반말 | **तू**, plain imperative | 뭐 해? → काय करत आहेस? |
| 요-form | **तुम्ही**, polite imperative | 앉아요 → बसा |
| -습니다 | तुम्ही + formal words | 감사합니다 → धन्यवाद · 죄송합니다 → माफ करा |
| -시- to the listener | तुम्ही + respectful verbs | 맛있게 드세요 → सावकाश जेवा |
| -시- about a third person | **respect plural** | 할머니가 주무세요 → आजी झोपल्या आहेत · 사장님 계세요? → मालक आहेत का? |
| 성함 / 연세 | आपलं नाव / आपलं वय (the only "your" आपलं) | 성함이 어떻게 되세요? → आपलं नाव काय? |
| 주세요 · -아/어 주세요 | द्या · …ून द्या / … ना | 물 주세요 → पाणी द्या · 천천히 말해 주세요 → हळू बोला ना |
| 주시겠어요? | **…ाल का?** | 찍어 주시겠어요? → फोटो काढून द्याल का? |

- **Both directions.** A 요 / -습니다 / -시- line never gets तू, and a 반말 line never gets तुम्ही. Fixed phrases take no pronoun.
- **आपण** only as inclusive "we" (आपण जाऊया). Never a formal "you", except आपलं above.
- **कृपया** only where the English says "please" *and* the line is formal or written.
- **हो / नाही.** 네 = हो, 아니요 = नाही. Add no जी / साहेब the Korean lacks.
- **Gendered agreement with तुम्ही.** Adjectives agreeing with तुम्ही are gendered (थकलेले / थकलेल्या): reword with a verb or a noun.

### 2.3 Gender

**Speaker ("I"): take the first rule that fits.**

**1. A neutral frame, same tense and meaning:**

| Korean | Frame | Example |
|---|---|---|
| 요-present | **…त आहे** (covers "I go" and "I'm going", like 가요) | 집에 가요 → मी घरी जात आहे |
| negative present | **…त नाही** | 커피를 안 마셔요 → मी कॉफी पीत नाही |
| -(으)ㄹ 거예요 | **…णार आहे** | 내일 갈 거예요 → मी उद्या जाणार आहे |
| -(으)ㄹ게요 | **…ईन / …एन** | 갈게요 → मी जाईन |
| -고 싶어요 | **मला …वंसं वाटतं** | 집에 가고 싶어요 → मला घरी जावंसं वाटतं |
| -아/어야 해요 | **मला …ला हवं / …वं लागेल** | 가야 해요 → मला जायला हवं |
| -(으)ㄹ 수 있어요 · 못 | **मला …ता येतं** · **…ता येणार नाही / येत नाही** | 오늘 못 가요 → आज मला येता येणार नाही |
| like · have · kin | मला X आवडतं (agrees with X) · माझ्याकडे X आहे · मला भाऊ आहे | 커피가 좋아요 → मला कॉफी आवडते |
| transitive past | the ergative agrees with the object | 밥을 먹었어요 → मी जेवण केलं |
| age · noun | माझं वय … आहे · an invariant noun (डॉक्टर, टीचर, generic **विद्यार्थी**) | 학생이에요 → मी विद्यार्थी आहे |

- **Keep the four frames distinct**, so that no prompt in lessons 11, 17, 29 or 30 fits two answers.
- **मला …यचं आहे never appears in a prompt.** It reads as want, plan and must.
- **Never reword across a cue.** …ला हवं is "have to", never "want".

**2. The scene.**
- 오빠 / 언니 in the speaker's mouth → female; 형 / 누나 → male.
- 민수 is male; 지은 and 리사 are female. An English he / she also decides.

**3. The unspaced pair, masculine first, on the inflected word only:** गेलो/गेले, होतो/होते, दमलो/दमले.
- Mostly needed for the intransitive past.
- Never a spaced ` / ` (that is the dialogue separator).

**Addressee of a 반말 line.** तू forms are gendered (करतोस / करतेस, गेलास / गेलीस).
- Use the imperative, the future (येशील?), …त आहेस or …णार आहेस first.
- Then the scene: a line to 오빠 / 형 → male, to 언니 / 누나 → female.
- Then the pair: पोहोचलास/पोहोचलीस?.
- This covers texting, plans and the flirting and sweet-talk decks.

**Third persons.**
- 친구 = **मित्र** (masculine agreement), unless a woman is marked (मैत्रीण).
- The respect plural only where the Korean has -시- or 님.

## 3. Glossary, screen names, labels

### 3.1 Terms (closed list)

**Decision (NOTES §5 asked for one): keep Marathi school terms**, as the interface does. The particle is the one exception.

| Idea | Term |
|---|---|
| Korean · Hangul · romanization · pronunciation | **कोरियन · हांगुल · रोमन लिपी · उच्चार** (the RR line is always रोमन लिपी) |
| particle | **पार्टिकल**. First use per lesson: "नामाला जोडून लिहिला जाणारा छोटा शब्द, मराठीतल्या विभक्ती प्रत्ययांसारखा". प्रत्यय already means "ending"; शब्दयोगी would suggest only मध्ये / पासून-type words |
| 은/는 · 이/가 · 을/를 | **विषय · कर्ता · कर्म पार्टिकल** |
| Marathi ला, त, हून, चा | **विभक्ती प्रत्यय** |
| noun · pronoun · verb · adjective · adverb | नाम · सर्वनाम · क्रियापद · विशेषण · क्रियाविशेषण |
| 크다, 좋다 | **वर्णनात्मक क्रियापद** |
| dictionary form · stem · ending | **शब्दकोशातील रूप** (≈ -णे) · **मूळ** · **प्रत्यय** |
| 하다 verb · 요-form | **하다-क्रियापद** · **요-रूप** |
| -습니다 · 요 · 반말 · -시- | **औपचारिक · सभ्य · अनौपचारिक · आदरार्थी**. Together: **सभ्यतेच्या पातळ्या** |
| 씨, 님, 오빠 · 개, 명 | **संबोधन** · **मोजणी शब्द** |
| number sets | **मूळ कोरियन / सिनो-कोरियन संख्या** (never चिनी) |
| tenses | भूतकाळ · वर्तमानकाळ · भविष्यकाळ |
| word order · question word · connector · softener | शब्दक्रम · प्रश्नार्थक शब्द · जोडशब्द · सौम्य करणारा शब्द |
| vowel · consonant · block · syllable · 받침 | स्वर · व्यंजन · **ब्लॉक** · अक्षर · **अंतिम व्यंजन** |
| ㄱㄷㅂㅅㅈ · ㅋㅌㅍㅊ · ㄲㄸㅃㅆㅉ | **साधी · महाप्राण · ताणलेली व्यंजनं** |
| sound change · 연음 · 비음화 | **उच्चारबदल · जोडून उच्चार · अनुनासिक बदल** |
| irregular · pattern · loanword · stroke order | अनियमित · पॅटर्न · परकीय शब्द · लिहिण्याचा क्रम |

### 3.2 Screen names (NOTES §3)

- **Tabs:** आज · धडे · सराव · उजळणी · प्रगती · वाचन · अभिप्राय.
- **Buttons:** समजलं · पुन्हा · तपासा · पाहा · माझी वाक्ये · सर्व उजळणी.
- **Cross-references:** **धडा N, «title»**.
- **Read tab and drills may be named**, because w4 fills `wT.jsonl`:
  - `sound-changes` ends with "वाचन उघडा आणि 🔀 उच्चारबदल ड्रिल करून पाहा";
  - `hangul` keeps "अक्षरावर टॅप करा, पुन्हा दिसेल";
  - if `wT.jsonl` is left incomplete, the lead drops the drill line.

### 3.3 Labels (permanent progress keys)

| # | deck id | label | # | deck id | label |
|---|---|---|---|---|---|
| 1 | hangul-vowels | हांगुल स्वर | 29 | flirting | फ्लर्टिंग |
| 2 | hangul-consonants | हांगुल व्यंजनं | 30 | casual-texting | मित्रांशी चॅटिंग |
| 3 | hangul-advanced | हांगुल: पुढचा टप्पा | 31 | hype-cool | जोश आणि स्टाइल |
| 4 | pronunciation-tips | उच्चाराच्या टिप्स | 32 | hanging-out | भेटीगाठी |
| 5 | survival-phrases | अत्यावश्यक वाक्यं | 33 | k-pop-fan-culture | के-पॉप आणि फॅन कल्चर |
| 6 | introductions | ओळख | 34 | social-media-slang | सोशल मीडिया आणि स्लँग |
| 7 | survival-phrases-2 | अत्यावश्यक वाक्यं 2 | 35 | dating-deeper | डेटिंग: पुढचं पाऊल |
| 8 | asking-around | चौकशी | 36 | work-office | काम आणि ऑफिस |
| 9 | cafe-convenience-store | कॅफे आणि कन्व्हिनियन्स स्टोअर | 37 | small-talk | गप्पाटप्पा |
| 10 | numbers-in-the-wild | रोजच्या वापरातले आकडे | 38 | food-ordering | जेवण आणि ऑर्डर |
| 11 | counters | मोजणी शब्द | 39 | directions-transport | रस्ता आणि वाहतूक |
| 12 | weather-feelings | हवामान आणि भावना | 40 | time-days | वेळ आणि वार |
| 13 | connectors | जोडशब्द | 41 | family-people | कुटुंब आणि माणसं |
| 14 | doctor-pharmacy | डॉक्टर आणि औषधं | 42 | adjectives | विशेषणं |
| 15 | housing-errands | घर आणि रोजची कामं | 43 | k-drama-phrases | के-ड्रामाचे डायलॉग |
| 16 | honorifics | आदरार्थी रूपं | 44 | top-nouns | नेहमीची नामं |
| 17 | places-buildings | ठिकाणं आणि इमारती | 45 | top-verbs | नेहमीची क्रियापदं |
| 18 | hobbies | छंद | 46 | top-adjectives | नेहमीची विशेषणं |
| 19 | food-words | खाद्यपदार्थ | 47 | top-adverbs | नेहमीची क्रियाविशेषणं |
| 20 | drinks | पेयं | 48 | top-pronouns | नेहमीची सर्वनामं |
| 21 | activities | रोजच्या कृती | 49 | top-particles | आणखी पार्टिकल |
| 22 | tv-entertainment | टीव्ही आणि मनोरंजन | 50 | top-connectors | नेहमीचे जोडशब्द |
| 23 | position-direction-words | जागा आणि दिशा | 51 | top-interjections | नेहमीचे उद्गार |
| 24 | core-verbs | मुख्य क्रियापदं | 52 | top-words | नेहमीचे छोटे शब्द |
| 25 | particles | पार्टिकल | 53 | top-counters | आणखी मोजणी शब्द |
| 26 | numbers | संख्या | 54 | flirting-words | फ्लर्टिंगचे शब्द |
| 27 | sweet-talk | गोड बोलणं | 55 | compliments | कौतुक |
| 28 | cute-things-to-say | लाडिक वाक्यं | 56 | countries | देश |

All labels are unique, none is माझी वाक्ये, and none ends in a full stop.

**Groups (6):** मूलभूत · रोजचं · शब्दसंग्रह · व्याकरण · सामाजिक · नेहमीचे शब्द.

**`labels.jsonl` (reuse the interface's wording exactly):**
- **Titles:** t01 अंकुर · t03 विद्यार्थी · t05 सीनियर · t08 प्रो · t12 उस्ताद · t16 सेन्सेई.
- **Greetings:** उशीर झाला, छान मेहनत · सुप्रभात · शुभ दुपार · शुभ संध्याकाळ.
- **Goals and plans:** प्रवास आणि फिरणं · डेटिंग, मित्र आणि बाहेर फिरणं · के-ड्रामा आणि संगीत · काम आणि शिक्षण · कोरियाची ट्रिप · मित्र आणि डेटिंग · 90 दिवसांत संभाषण.
- **Pause sets:** कौतुक · रोजचे शब्दप्रयोग · सभ्य शब्द · सुविचार.
- **`ko.d.mydeck`:** तुम्ही स्वतः जोडलेलं सगळं.
- **Pause items** follow §6, with no two equal glosses in one set.

### 3.4 Lesson titles ("N · title"; each keeps exactly its English Hangul)

Roadmap wording (`tools/i18n/mr/roadmap.json`) is reused where it matches, **but not the roadmap's Hangul**: it adds 이에요/예요, -(스)ㅂ니다 and 보다 더, and reorders the joining endings.

1 · हांगुल एका बैठकीत
2 · सभ्यतेच्या पातळ्या
3 · ओळख करून घेणं
4 · उच्चारबदल: 감사합니다 वेगळं का ऐकू येतं
5 · नामं आणि 은/는
6 · 있어요 आणि 없어요
7 · सर्वनामं आणि प्रश्नार्थक शब्द
8 · क्रियापदं
9 · वर्तमानकाळ: 요-रूप
10 · भूतकाळ: 았어요 / 었어요
11 · भविष्यकाळ आणि बेत: -(으)ㄹ 거예요
12 · शब्दक्रम आणि 을/를
13 · 에 आणि 에서, आणि पार्टिकलचा नकाशा
14 · नाही म्हणणं: 안 आणि -지 않아요
15 · 도 आणि 만: सुद्धा आणि फक्त
16 · नामं आणि क्रियापदं जोडून वाक्यं
17 · इच्छा आणि आवड: -고 싶어요, 좋아해요
18 · दोन संख्या पद्धती
19 · बाहेर जेवण
20 · फिरणं आणि प्रवास
21 · पदव्या आणि आदरार्थी रूपं
22 · बेत ठरवणं
23 · कोरियन लोकांसारखं मेसेजिंग
24 · मोजणी शब्द
25 · वाक्यं जोडणं: -고, -지만, -아/어서
26 · भूतकाळात गोष्ट सांगणं
27 · नामाचं वर्णन: 좋은 날씨, 큰 가방
28 · तुलना: 보다, 더, 제일
29 · न जमणं, जमणं आणि माहीत नसणं
30 · करावंच लागणं: -아/어야 해요
31 · आदरार्थी क्रियापदं
32 · सभ्यपणे विनंती करणं
33 · ऑफिसचं कोरियन

## 4. Grammar bridges and traps [convention, not opened]

The Hangul in §4–§7 is for the writers. A field may contain it only if its English has the same Hangul runs, or under `_waive`.

### 4.1 SOV and the विभक्ती map

- **Holds.**
  - The same frame: कोण · कधी · कोणाबरोबर · कुठे · काय · क्रियापद.
  - Question words stay in place (हे काय आहे? = 이거 뭐예요?).
  - Markers are written joined (घरात / 집에), so there is no spacing habit to break.
  - The yes/no का comes at the **end** (कॉफी हवी का?), where Korean marks a question by its ending and the voice. Trap: का also = 왜; काय = 뭐.
- **Breaks.**
  1. Marathi bends the noun (शाळा → शाळेला); Korean keeps the noun and gives the particle two shapes (집을 / 차를).
  2. Korean drops subjects and "you" freely, with no person on the verb.

| Marathi | Example | Korean | Note |
|---|---|---|---|
| — / ने | मी गेलो · त्याने केलं | 이/가, 은/는 | ने depends on person, tense and verb; 이/가 never does |
| ला (object) | मित्राला भेटलो | 을/를 | inanimate objects take no ला; 을/를 marks every object |
| ला (to) · -ई | शाळेला जातो · घरी, सोमवारी | 에 | close match |
| त / मध्ये | घरात आहे · घरात अभ्यास | 에 (be) · 에서 (do) | one Marathi marker for both: the trap of धडा 13 |
| वाजता | तीन वाजता | 시에 | |
| हून · पासून · पर्यंत | मुंबईहून आलो · सोमवारपासून | 에서 (from) · 부터 · 까지 | |
| ने (means) | बसने | (으)로 | |
| ला / कडे | मित्राला दिलं · माझ्याकडे वेळ आहे | 에게 / 한테 · 이/가 있어요 | the thing owned is the subject in both |
| बरोबर / सोबत | मित्राबरोबर | 하고 / 랑 / 와 | |
| पेक्षा | टॅक्सीपेक्षा | 보다 | exact |
| चा / ची / चे / चं | माझा भाऊ, माझं घर | 의, usually dropped (제 집) | no agreement in Korean |

### 4.2 पण, सुद्धा, फक्त, तर

- **पण** in speech is both "but" (-지만) and "too" (मी पण = 저도). Prompts use **सुद्धा / -ही** for 도, never a bare पण.
- **도 ≈ सुद्धा.**
  - Holds: मीसुद्धा नाही … = 저도 안 ….
  - Breaks: 도 *replaces* 은/는, 이/가 and 을/를 (저는도 ✗). It stacks after 에 / 에서, as in घरातसुद्धा = 집에서도.
- **만 = फक्त** (फक्त पाणी द्या = 물만 주세요). -च is mostly emphasis (हेच), so it is only a partial match.
- **तर ≈ 은/는** for contrast only (मी तर कॉफी पीत नाही). Never write "은/는 = तर".

### 4.3 आहे has three jobs

| Marathi | Korean | Job |
|---|---|---|
| मी विद्यार्थी आहे | 학생이에요 | A = B |
| मी घरी आहे | 집에 있어요 | location |
| माझ्याकडे वेळ आहे · मला भाऊ आहे | 시간이 있어요 · 동생이 있어요 | having |
| मी डॉक्टर नाही · वेळ नाही | 의사가 아니에요 · 시간이 없어요 | one नाही, two words |

Predicted errors: 저는 고양이예요 for "I have a cat"; 안 있어요 ✗.

### 4.4 Verbs, tense, negation

- **No agreement.**
  - -णे ≈ -다; मूळ ≈ the stem.
  - Korean verbs never change for person, gender or number. Three genders and person endings are gone: present this as relief.
- **Describing verbs and 하다.**
  - मोठं आहे = 커요, one word (크다이에요 ✗).
  - करणे ≈ 하다: अभ्यास करत नाही = 공부 안 해요.
- **Present, past, future.**
  - Present: 가요 = जातो / जाते + जात आहे + a question.
  - Past: one past, no ने and no agreement. खाल्लं / खाल्लं आहे / खाऊन झालं = 먹었어요.
  - Future: …णार आहे = -(으)ㄹ 거예요. The guessing असेल (महाग असेल) = its "probably" use. …ईन = -(으)ㄹ게요.
- **Negation, the big break.**
  - नाही comes **after** the verb, 안 **before** it.
  - -지 않아요 has the Marathi order (마시지 않아요 ≈ पीत नाही): use it as the bridge and drill 안 against it.
  - Expect 마셔요 안 ✗ and 안 공부해요 ✗.
  - नको ≈ -지 마세요, and in shops ≈ 괜찮아요.
- **Ability.**
  - मला जमतं / येतं ≈ -(으)ㄹ 수 있어요; मला जमत नाही ≈ 못.
  - मी करणार नाही (choice) ≈ 안.
  - मला माहीत नाही = 몰라요.
- **Like.**
  - In मला कॉफी आवडते the thing liked is the subject: that is **커피가 좋아요**. 좋아해요 needs 을/를.
  - Expect 커피가 좋아해요 ✗. Teach «मला X आवडतं» = X가 좋아요 = X를 좋아해요.

### 4.5 Politeness and address

- **Holds** [inference]: तुम्ही / तू follows age and closeness, like 요 / 반말. "तू म्हटलं तरी चालेल" ≈ 말 놔도 돼요.
- **Breaks** (teach these four):
  1. Respect sits **only on the Korean ending**, and Korean drops "you": 당신 ≠ तुम्ही. Use name + 씨, a title, or nothing.
  2. Marathi तू is normal with friends and even parents, but 반말 to staff or older strangers is rude: every adult stranger gets 요.
  3. -습니다 marks the situation, not the person (धन्यवाद vs थँक यू).
  4. Korean has a humble "I" (저 / 나); Marathi does not.
- **-시- = the respect plural.** बाबा घरी आहेत ≈ 계세요.
  - Marathi uses the plural for both the listener and a third person; Korean splits them into 요 and -시-.
  - Never use -시- for yourself (저는 가세요 ✗).
- **Address terms.**
  - दादा / ताई ≈ 형·오빠 / 누나·언니, but the Korean also depends on the **speaker's** gender (a man says 형 / 누나).
  - साहेब / सर / मॅडम ≈ 님 or a title alone.
  - Marathi काका / मावशी for strangers vs Korean 저기요, 기사님.
  - Never 씨 or 님 on your own name.

### 4.6 Comparing, modifiers, joining, numbers, counters

- **Comparing.** बस टॅक्सीपेक्षा स्वस्त आहे = 버스가 택시보다 싸요, in the same order. जास्त ≈ 더, सगळ्यात ≈ 제일.
- **Modifiers.**
  - Participles already precede the noun: बोलणारा ≈ -는, पाहिलेला ≈ -(으)ㄴ, येणारा ≈ -(으)ㄹ. So काल पाहिलेला चित्रपट ≈ 어제 본 영화.
  - Breaks: Marathi participles agree, Korean ones never do. Korean has no जो … तो.
- **Joining.**
  - -ऊन ≈ -고 / -아/어서 (घरी जाऊन झोपलो/झोपले ≈ 집에 가서 잤어요).
  - Reason + **म्हणून** has the Korean order (मी बिझी आहे, म्हणून येणार नाही ≈ 바빠서 안 가요). कारण puts the reason second.
  - पण = -지만.
  - Story words: आधी, आणि, मग / त्यानंतर, म्हणून, पण, शेवटी.
- **Numbers.**
  - Marathi 1–100 must be memorised; Sino-Korean is ten words plus a rule.
  - 10만 = 1 लाख.
  - Hours take **native** numbers (तीन वाजता = 세 시); minutes, money, dates and floors take Sino-Korean.
  - साडेतीन = 세 시 반. सव्वा / पावणे have no Korean word: use 분.
- **Counters.**
  - Marathi has one: **जण / जणी** (आम्ही चार जण आहोत = 네 명이에요).
  - The number goes first in Marathi (दोन कप चहा) and after the noun in Korean (차 두 잔). Expect 두 커피 ✗.

**Ranked error zones [inference]:**
1. Plain stops said as क त प च; RR *k t p* read unaspirated.
2. RR vowels: *eo* → यो, *eu* → यू, *ae* → ऐ.
3. 에 vs 에서; ला-thinking for 을/를.
4. 안 placement.
5. आहे → 이에요.
6. 반말 to staff; -시- for yourself.
7. Local traps: 그 vs 저 (तो covers both), 들 everywhere, counter order, final ㄹ as र or ळ, retroflex ट / ड for RR *t d*.

## 5. Reading guide

Voicing is never contrastive in Korean: there are only plain / tense / aspirated sounds.

**Policy: Devanagari compares, it never reads.**
- Use it only for **one sound** (ㅏ ≈ आ), or one syllable with explicit signs and a halant (옷 ≈ "ओत्"), always with **जवळपास / सारखा** or a mouth description.
- Never respell a word, for four reasons:
  1. schwa deletion makes respellings unpredictable;
  2. there is no letter for ㅡ, and none of its own for ㅓ;
  3. press spellings fix wrong readings;
  4. Hangul is the goal.
- Name labels (मिनसू, किमची) are not readings (§8.3).

### 5.1 Sound table (card notes c0001–c0060, the `hangul` table, Hangul deck descriptions)

| Jamo (RR) | Comparison | Trap |
|---|---|---|
| ㅏ a | आ (not long) | not अ |
| ㅓ eo | near अ, but the jaw lower and the tongue further back; lips **not** rounded (Seoul [ʌ̹] [source]) | not ओ / यो |
| ㅗ · ㅜ · ㅣ | ओ (rounded, tight) · उ / ऊ · इ / ई; length does not matter | |
| ㅡ eu | उ with the lips spread, as in a smile | no letter |
| ㅐ = ㅔ | ए | **not ऐ**, which is "अइ" in Marathi ([əi] [source]) |
| ㅑ ㅛ ㅠ · ㅘ · ㅟ | या यो यु · वा · वी | |
| ㅕ · ㅝ · ㅚ ㅙ ㅞ · ㅢ | य + ㅓ · व + ㅓ · about वे · ㅡ + ई | *yeo* ≠ यो, *wo* ≠ वो |
| ㄱ ㄷ ㅂ ㅈ | soft ग द ब ज (never घ); a little air at the start of a word | never क त प च |
| ㅋ ㅌ ㅍ ㅊ | ख थ फ छ, strong air | ㅍ = lips closed, then air, **not [f]** (Marathi फ is [pʰ~f] [source]) |
| ㄲ ㄸ ㅃ ㅉ | क त प च: no air, tight throat, higher pitch | not long; the क्क of पक्कं is only a rough guide |
| ㅈ ㅊ ㅉ | the front of the tongue against the palate behind the teeth, soft, as for ज / च / छ ([tɕ] in Seoul [source]) | do not push it toward "ts / dz". No Marathi word example: the Marathi च / ज split is [unverified] |
| ㅅ / ㅆ | स / a tight स; before ㅣ about श | |
| ㄷ ㅌ ㄸ | the त / द family, **never** ट / ड | no retroflex in Korean |
| final ㅇ | ङ as in अंग, without the ग | 강 ≠ "गांग" |
| ㄹ | a light र between vowels; ल at the end of a syllable; ㄹㄹ = the ल्ल of किल्ला | not र at the end, **not ळ** (coda [l]~[ɭ] [source]: aim for ल) |
| ㄴ ㅁ · ㅎ | न म (a final ㄴ is a full न) · ह, often silent between vowels | |
| finals | क् त् प्, unreleased; ㅅ ㅈ ㅊ ㅌ ㅎ → त् | 옷 ≈ "ओत्", not "ओस" |

**Script bridge [inference].**
- Hangul draws mouth shapes, as the वर्ग order follows the mouth.
- One **ब्लॉक** = one **अक्षर**. Visual aid: 아 = ㅇ + ㅏ looks the way आ looks like अ + ा.
- Breaks: vowels are full letters, not मात्रा; ㅇ at the start is silent; the final consonant sits inside the block; reading block by block kills linking.

### 5.2 Guide in Marathi (for `hangul`, under `_waive`; parts go into `sound-changes` and the Hangul deck descriptions)

> **रोमन लिपी कशी वाचायची** — ही रोमन लिपी इंग्रजी वाचणाऱ्यांसाठी बनवली आहे, म्हणून:
> - **a** म्हणजे नेहमी "आ". मराठी "अ"च्या जवळचा स्वर **eo** आहे: जबडा थोडा जास्त खाली, ओठ गोल नाहीत. *seoul* मध्ये "यो" नाही.
> - **eu**: "उ" म्हणा, पण ओठ हसल्यासारखे पसरवून. **ae** आणि **e** दोन्ही "ए" — मराठी "ऐ" (अइ) नाही. **wo** = व + eo.
> - **k, t, p, ch** = ख, थ, फ, छ — तोंडासमोर हात धरला तर हवा जाणवेल. **p** मध्ये आधी ओठ मिटतात. **kk, tt, pp, jj** = क, त, प, च — हवा नाही, घसा ताणलेला, पण लांब नाही.
> - **g, d, b, j** शब्दाच्या सुरुवातीला हलके ग, द, ब, ज. **t, d** म्हणजे त / द — ट / ड नाहीत.
> - **r** दोन स्वरांमध्ये हलका र; शेवटचा **l** साफ ल: *mul*. ळ नाही. **ng** म्हणजे "अंग"मधला ङ, पुढे ग नाही.
> - शेवटचे **k, t, p**: तोंड बंद करून थांबा, हवा सोडू नका: *bap*. अंतिम व्यंजन पुढच्या स्वराला जोडून वाचा: *hangugeo*.
> - रोमन लिपी आधारासाठी, हांगुल वाचण्यासाठी: 감사합니다 = *gamsahamnida*.

## 6. Fixed phrases (one gloss everywhere, across all writers)

A card meaning may be shorter. The bracket says who the line is for. A card note may add a literal meaning.

| Korean | Marathi | Korean | Marathi |
|---|---|---|---|
| 안녕하세요 | नमस्कार | 안녕 (반말) | हाय / बाय (by context) |
| 안녕히 가세요 | सावकाश जा (जाणाऱ्याला) | 안녕히 계세요 | काळजी घ्या (थांबणाऱ्याला) |
| 감사합니다 / 고맙습니다 | धन्यवाद | 고마워요 · 고마워 | थँक यू · थँक्स |
| 죄송합니다 | माफ करा | 미안해요 / 미안해 | सॉरी (+ the English tag) |
| 네 · 아니요 | हो · नाही | 괜찮아요 | ठीक आहे / काही हरकत नाही; declining: नको, ठीक आहे |
| 저기요 | अहो, जरा ऐका | 잠깐만요 | एक मिनिट |
| 처음 뵙겠습니다 | आपण पहिल्यांदाच भेटत आहोत | 만나서 반갑습니다 / 반가워요 | तुम्हाला भेटून आनंद झाला |
| 반가워 | तुला भेटून छान वाटलं | 잘 지냈어요? | सगळं कसं चाललंय? |
| 잘 부탁드립니다 (meeting) | सांभाळून घ्या | 잘 부탁드립니다 (업무) | तुमच्या सहकार्याबद्दल आधीच धन्यवाद |
| 잘 먹겠습니다 | जेवणासाठी धन्यवाद (जेवण्याआधी) | 잘 먹었습니다 | जेवण छान झालं, धन्यवाद (जेवणानंतर) |
| 맛있게 드세요 | सावकाश जेवा | 계산해 주세요 | बिल द्या |
| 수고하셨습니다 | आजच्या मेहनतीबद्दल धन्यवाद | 수고 많으셨어요 | खूप मेहनत घेतलीत, धन्यवाद |
| 수고하세요 | कामाला शुभेच्छा (काम करत राहणाऱ्याला) | 수고했어 · 수고했어요 | छान काम केलंस · छान काम केलंत |
| 고생했어 | खूप कष्ट घेतलेस | 좋은 하루 보내세요 | तुमचा दिवस छान जावो |
| 주시겠어요? | द्याल का? | 좀 · 혹시 | जरा · …असेल का? / कदाचित |
| 알겠습니다 / 알겠어요 | समजलं | 넵, 확인했습니다 | हो, पाहिलं |
| 오케이 콜 · 콜! | ओके, ठरलं! · ठरलं! | 대박 · 진짜? | भारी! · खरंच? |
| 아이고 · 화이팅 | अरे देवा · ऑल द बेस्ट! | 축하해요 · 생일 축하해요 | अभिनंदन · वाढदिवसाच्या शुभेच्छा |
| 잘 자 · 안녕히 주무세요 | शुभ रात्री · शुभ रात्री (आदरार्थी) | 집에 잘 들어가세요 | घरी नीट पोहोचा |
| 오랜만이에요 | खूप दिवसांनी भेट होतेय | 말 놔도 돼요 | तू म्हटलं तरी चालेल |
| 선생님 · 사장님 | सर / मॅडम · मालक | 과장님 / 팀장님 | मॅनेजर / टीम लीडर |
| 오빠·형 / 언니·누나 | दादा / ताई | 기사님 · 민수 씨 | ड्रायव्हर काका · मिनसू (씨 explained in धडा 21) |

- **Goodbyes say who leaves**, via the bracket. A Marathi leaver's येतो / येते vs the stayer's या may be a parallel, but it is [unverified]: keep it out of rows and bodies unless a Marathi speaker confirms it. Never gloss 계세요 as "येतो".
- **주세요 family:** see the §2.2 table (द्या · …ून द्या / … ना · …ाल का?), plus 물 주세요 → पाणी द्या, 이거 주세요 → हे द्या.
- **수고하세요** is said by the one leaving, to someone still working.
- **The two meal phrases are never merged.**
- **혹시 lines** take "…असेल का?": 혹시 영어 메뉴 있어요? → इंग्रजी मेन्यू असेल का?

## 7. Per-lesson notes

**B** = what to build on. **R** = an English-built passage to rewrite, not translate.

| # | id | Notes |
|---|---|---|
| 1 | `hangul` | B: ब्लॉक = अक्षर, the वर्ग analogy, §5.2. R: the vowel sounds → §5.1. `_waive` on the title row |
| 2 | `polite` | B: तुम्ही / तू; तू is not rude, so warn about staff; धन्यवाद / थँक यू / थँक्स. Headers पातळी · प्रत्यय · कोणाशी, then औपचारिक · सभ्य · अनौपचारिक |
| 3 | `meet` | B: नमस्कार at any hour; age sets address in both cultures. "Formal" column → **औपचारिक / आदरार्थी**. Keep माइक / हुआन. Country tip: "देश डेकमध्ये भारतही आहे" (인도 only under `_waive`) |
| 4 | `sound-changes` | B: the nasal rule ≈ school संधि **वाक् + मय = वाङ्मय** (k + m → ङ्म, as 한국말 → 한궁말) [convention, not opened]; ㄹㄹ = किल्ला; keep the drill line (§3.2) |
| 5 | `nouns` | B: no articles, no gender, the noun never bends (unlike सामान्यरूप). Traps: हा / तो vs 이 / 그 / 저; 들 optional |
| 6 | `isseoyo` | R: the "English 'is'" opening → आहे (§4.3); kin with मला |
| 7 | `pronouns-questions` | B: question words stay in place; का at the end (and का = 왜); आमचं घर ≈ 우리 집; तुम्ही ≠ 당신 |
| 8 | `verbbasics` | B: -णे, मूळ, no agreement, वर्णनात्मक क्रियापद, करणे ≈ 하다. R: the "to …" framing and "English adjectives" |
| 9 | `verbs` | B: one form = जातो / जाते + जात आहे + a question; glosses use …त आहे |
| 10 | `past` | B: no ने, no agreement. R: "I ate / have eaten" → खाल्लं / खाल्लं आहे. The intransitive "I" takes the pair |
| 11 | `future` | B: …णार आहे; असेल = "probably". R: "kkeoyeyo" → "ताणलेला क" |
| 12 | `sov` | B: SOV; ला on people only vs 을/를 on every object. R: every "English is SVO" line |
| 13 | `particles` | B: शाळेला / घरी / सोमवारी = 에; हून = 에서 "from". Tip: "मराठीत त / मध्ये दोन्हीसाठी; कोरियनमध्ये 에 (असणं, जाणं, वेळ), 에서 (करणं)". R: "English 'at'" |
| 14 | `negation` | B: -지 않아요 ≈ पीत नाही; 안 goes **before**; नाही → 없어요 / 아니에요 |
| 15 | `do-man` | B: §4.2; सुद्धा in prompts; फक्त = 만 |
| 16 | `sentences` | B: the same frame as Marathi. R: the "English order" mistakes |
| 17 | `want-like` | B: §4.4 "Like"; want = …वंसं वाटतं in prompts |
| 18 | `numbers` | B: §4.6; लाख; साडेतीन. R: "like English digits" → "दहा शब्द आणि एक नियम"; hours are native |
| 19 | `food` | B: दोन कप चहा vs 차 두 잔; सावकाश जेवा. Prose tip, no Hangul: many dishes contain fish or meat |
| 20 | `getting-around` | B: the Mumbai local / Pune Metro ≈ the subway; the metro card ≈ टी-मनी; numbered exits |
| 21 | `titles` | B: दादा / ताई with the speaker twist; साहेब ≈ 님 (§4.5). R: "(you female / you male)" → "(तुम्ही मुलगी असाल तर / मुलगा असाल तर)" |
| 22 | `plans` | B: जाऊया ≈ 가자; जाऊया का? ≈ 갈까요?; येणार का? ≈ -(으)ㄹ래요?. "Formal" column → **अधिक आदरार्थी** (the -시- 요-forms) |
| 23 | `texting` | B: ㅋㅋ ≈ हाहा. **The KakaoTalk "1" means NOT yet read**; 읽씹 = the 1 is gone and no reply comes ≈ निळ्या टिक, उत्तर नाही. The English has it backwards |
| 24 | `counters` | B: जण = 명; the number goes first in Marathi, after the noun in Korean |
| 25 | `joining` | B: -ऊन, म्हणून, पण. R: "and / but / so" → आणि / पण / म्हणून |
| 26 | `story` | B: the story words (§4.6); the intransitive "I" takes the pair |
| 27 | `noun-modifiers` | B: -णारा / -लेला. R: "no that / which" → "कोरियनमध्ये 'जो … तो' नाही" |
| 28 | `compare` | B: पेक्षा = 보다 in the same slot; जास्त; सगळ्यात |
| 29 | `cant` | B: जमत नाही ≈ 못; करणार नाही ≈ 안; 모르겠어요 = "सांगता येणार नाही" |
| 30 | `have-to` | B: …ला हवं / …वं लागेल; …ची गरज नाही = 안 가도 돼요. Cross-reference → धडा 32, «सभ्यपणे विनंती करणं» |
| 31 | `honorific` | B: the respect plural = -시-; आपलं नाव = 성함; सावकाश जेवा ≈ 드세요 |
| 32 | `requests` | B: जरा = 좀; …असेल का? = 혹시; द्याल का?; इथे बसलं तर चालेल का? ≈ -(으)면 안 돼요?; बसू का? ≈ -아/어도 돼요? |
| 33 | `office` | B: a title alone ≈ सर / मॅडम; 회식 ≈ टीम डिनर; the 수고 family (§6); 운전해야 돼요 as the polite excuse not to drink. Email sign-off: "धन्यवाद. @@" |

## 8. Row conventions

### 8.1 Format (spec §4–6)

- **Hangul.** The Hangul runs must be set-equal to the English row's.
  - Exceptions need `"_waive":["hangul"]` + `_note`, on the title row for a body.
  - Planned exceptions: `hangul`, and `meet` if 인도 is used.
- **Fields.**
  - Exactly one ` / ` per dialogue gloss; `__` / `___` unchanged; no `{ }` in glosses.
  - `q p why hint` ≤ 400 characters; options ≤ 200 and never identical within an item.
  - Meanings distinct within a deck (compared case-insensitively).
- **Bodies.**
  - Same `<h3>` / div / table structure; tokens unchanged and in order.
  - No English left in prose or headers; no `<img> <svg> <script> <style>`, no `javascript:`.
- **Blank rows (`___`).** I'm ___ = **मी ___ आहे** · Do you speak ___? = **तुम्हाला ___ बोलता येतं का?** (the can frame).
- **"From" lines.**
  - "Where are you from?" = **तुम्ही कुठून आलात?**.
  - "I'm from ___" = **मी ___ मधून आलो/आले**: the marker after a blank is a separate word, as the interface writes `{1} मध्ये`.
  - A named country is joined: मी मेक्सिकोहून आलो/आले.
  - The pair is used here because "माझा देश … आहे" would prompt 나라 instead of 에서 왔어요.

### 8.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) first.

- **Level.**
  - तू for a 반말 answer, तुम्ही for 요 / -습니다 / -시-.
  - Copy the English tags and scene cues ("मित्राला मेसेज:", "वडीलधाऱ्यांना:", "टीम लीडरला, काम संपल्यावर:").
  - A tag is required where `x` differs only in level (polite.12–14, texting.14, honorific.12–14).
- **Tense.** Use the §2.3 frames, plus **(भूतकाळ) · (वर्तमानकाळ) · (भविष्यकाळ)** where `x` is another tense: past.06 / 12 (its hint *past* → भूतकाळ), story.06, future.06–08 / 12–14.
- **Method cues:** (안 वापरा), (-(으)ㄹ까요 वापरा), (संख्या हांगुलमध्ये लिहा). "(I)" → "(मी)".
- **Known pitfalls:**
  - verbs.12 → (मी) घरी जात आहे;
  - want-like.12 → मला घरी जावंसं वाटतं;
  - have-to.12 → मला घरी जायला हवं;
  - cant.14 → मी मांस खात नाही (स्वतःच्या इच्छेने, 안 वापरा);
  - numbers.12 → माझं वय अठ्ठावीस आहे (संख्या हांगुलमध्ये लिहा).

### 8.3 Names, places, `@@`

- **People:** 민수 मिनसू, 지은 जीउन, 리사 लिसा, Mike माइक, Juan हुआन.
- **Places:** कोरिया, सोल, बुसान, म्योंगदोंग, होंगदे, गंगनम, इंचॉन [press spellings unverified].
- **Other names and loans.**
  - The established Indian spelling where one exists (किमची, सोजू, बिबिंबाप).
  - Otherwise transcribe the RR letter by letter: g ग · k/kk क · d द · t/tt त · b ब · p/pp प · j/jj ज · ch च · s/ss स · h ह · n न · m म · ng ंग · r र · l ल (never ळ) · a आ · eo/o ओ · u ऊ · eu उ · i ई · ae/e ए; y- य, w- व.
  - These are labels, so ㅓ → ओ is allowed here only.
- **`@@` (the learner's name).**
  - Keep exactly as many as the English row.
  - Marathi endings fuse onto a stem that can change, so `@@` never carries an attached ending (`@@ला` ✗).
  - Examples: नमस्कार. मी @@. (s0297) · नमस्कार, मी मार्केटिंग टीममधून @@ बोलत आहे (s0300, office.08) · धन्यवाद. @@ (s0301) · @@ म्हणून ईमेलवर सही करताना: (office.05).
- **Countries.** 미국 = अमेरिका. Gloss what the rows say and never swap in India; prose may say "तुमचा देश लावा: भारत" with no Hangul.
- **Local frame:** rupees with no rates; व्हॉट्सॲप, यूपीआय, मेट्रो, रिक्षा.

## 9. What not to do

- **No Korean beyond the source row without `_waive`.** Never edit `f`, `id`, `k`, `src` or any Korean field.
- **No Latin** beyond RR, its letters and the interface list.
- **No invented etymologies.**
  - वाङ्मय is a sound analogy only.
  - No origins beyond the English.
  - No Sanskrit "cognates" for Sino-Korean words.
- **No Hindi forms:** हंगुल, कोरियाई, पाठ (= धडा), नहीं, हैं, में, और, भैया, -जी. No danda.
- **No word respellings and no English-sound comparisons.**
- **Address and gender.** No तू toward the learner; no आपण as "you"; no कृपया with a plain 주세요; no silent gender choice; no spaced gender slash.
- **Particles.** Never "은/는 = तर", "을/를 = ला" or "도 = पण".

## 10. `ui.json`, trainer, lead items

- **`ui.json`.**
  - No wording change is needed: the interface already says कोरियन / हांगुल / रोमन लिपी.
  - But `validate.js` counts the 14 `uiKeys` as "words remaining" unless `ui.json` holds them. So copy their texts **verbatim** from `tools/i18n/mr/ui.json` (`exact[key].t`).
  - One real override (NOTES §4 #30): `"No match. Try the English meaning."` → `"काही सापडलं नाही. मराठी अर्थ वापरून पाहा."`.
- **Interface follow-ups for the lead:** "K-ड्रामा" → के-ड्रामा; पार्टिकल and औपचारिक (-습니다) are not in its glossary yet.
- **w4, `wT.jsonl`.**
  - Use §3.1 terms; short rule glosses, as in `native/es/ko/trainer.json`; `%n` and Hangul exactly as in `src`.
  - Sound-rule names: जोडून उच्चार, अनुनासिक बदल, ह-बदल, ल-बदल, ताण बदल.
- **`hangul.alt`** is the lead's job.
  - Candidates [inference]: *aa* ㅏ, *ee* ㅣ, *oo* ㅜ, *ai* ㅐ, checked against spec §10.3.
  - Keep typed mode: Marathi users commonly type Latin.

## 11. Review questions and unverified claims

**Ask a Marathi speaker** ("OK" or the natural version):
1. Levels and frames:
   - तू for 반말;
   - …त आहे for the Korean present;
   - …वंसं वाटतं for want, …ला हवं for must;
   - the pair गेलो/गेले.
2. मित्र as the generic friend; विद्यार्थी for both genders.
3. सावकाश जा / काळजी घ्या; is the येतो / या split real (it could then go into `meet`)?
4. Phrases: सांभाळून घ्या (잘 부탁드립니다), अहो, जरा ऐका (저기요), कामाला शुभेच्छा (수고하세요), ठरलं! (콜), भारी! (대박).
5. Terms: पार्टिकल, विषय / कर्ता / कर्म पार्टिकल, वर्णनात्मक क्रियापद, ताणलेली व्यंजनं.
6. Labels and titles:
   - चौकशी, भेटीगाठी, जोश आणि स्टाइल, लाडिक वाक्यं, नेहमीचे शब्द;
   - the title पदव्या आणि आदरार्थी रूपं (पदवी may read as "degree"; it is kept because the roadmap uses it).
7. ㅓ "near अ, jaw lower"; which Marathi word has a ज / च close to ㅈ; ㄲ ≈ क्क.

**Unverified or inference only:**
- The च / ज conditioning: Wikipedia lists [ts~tʃ] and [dz~dʒ] without conditions.
- The येतो custom.
- वाङ्मय as the school example.
- Press spellings of Korean places.
- Indian-English retroflex t / d.
- All Marathi sentences.
- **No study of Marathi learners of Korean was found.** The Hindi perception studies in hi-ko are only an analogy here.

## Sources (opened 2026-11-23)

- [Korean phonology](https://en.wikipedia.org/wiki/Korean_phonology): coda ㄹ [l]~[ɭ]; ㅈ [tɕ] in Seoul; ㅓ [ʌ̹].
- [Marathi phonology](https://en.wikipedia.org/wiki/Marathi_phonology): ऐ / औ = [əi] / [əu]; फ [pʰ~f]; ळ a retroflex lateral flap; ॲ / ऑ in loans; affricate variants without conditions.
- Searched with no usable result: Marathi learners of Korean; the येतो custom (the page opened did not state it).
- Local files: `docs/HALVES-SPEC.md`, `docs/profiles/hi-ko.md`, `docs/briefs/x-ko-{writer,topup}.md`, `tools/halves/native/{tl,zh}/ko/REVIEW.md`, `tools/halves/native/en/ko/`, `tools/halves/target/ko/`, `tools/i18n/mr/{NOTES.md,ui.json,roadmap.json}`.
