# Bengali speakers learning Korean: pair profile

Course `bn-ko`: the fixed Korean half `tools/halves/target/ko/` (33 lessons, 56 decks, 6 groups, 1,413 cards) + the Bengali half `tools/halves/native/bn/ko/`, written by w1–w4 from `mk_native.js bn` (w4 also fills `wT.jsonl`). This profile is the writers' authority. It follows `hi-ko.md` and settles up front what the tl-ko and zh-ko reviews settled afterwards.

**Binding:** `tools/i18n/bn/NOTES.md` (+ `ui.json`, `roadmap.json`) was written for this course; its address, tabs, level titles, terms and Bangladesh-first spelling are reused exactly. Facts about Bengali come from `docs/profiles/en-bn.md` and its opened sources.

**Tags:** **[research]** study opened, limits named · **[convention]** grammar, press or app strings, opened · **[not opened]** from memory, unverified · **[inference]** this profile's reasoning. **The author is not a native speaker**; every Bengali sentence here is [inference] until reviewed (§10). In doubt, writers pick the form most widely understood in Bangladesh and mark it.

## 1. Summary

1. **Register:** standard colloquial Bengali (চলিত), Bangladesh form where the standards differ (পানি, বাসা, আপু / ভাইয়া, শুভ বিকাল); no সাধু ভাষা. The learner is **আপনি** + -উন imperative (দেখুন), as in the interface.
2. **No grammatical gender** in either language, so no gender pairs. Bengali verbs mark **person and status**: that is the real constraint (§2.4).
3. **Levels:** 요 / -습니다 → আপনি; 반말 → তুমি; -시- → honorific -েন (আপনি / উনি). **No তুই in glosses.** Tags (আনুষ্ঠানিক) / (ভদ্র) / (ঘরোয়া) / (সম্মানসূচক).
4. **Key bridge:** the Bengali -েন behaves like -시- (it honours the subject): **আমি যান ✗ feels as wrong as 저는 가세요 ✗.** It breaks because 요 / 반말 track the *listener*, which a Bengali "I" verb never shows (§4.4).
5. **Other bridges** (§4): SOV with বিভক্তি / অনুসর্গ; আছে / নেই / নয় = 있어요 / 없어요 / 아니에요; -ও = 도; both "like" patterns; করে দিন = -아/어 주세요. **Sounds** (§5–6): ক খ গ ≈ ㄲ ㅋ ㄱ; ফ, স, ㅆ, ㅡ are the breaks; অ anchors ㅓ as a sound, never as a respelling.
6. **Learners:** EPS-TOPIK candidates for Korea's Employment Permit System (about 5,000 Bangladeshi workers expected in 2024, peak 5,891 in 2022: The Financial Express); K-pop / K-drama fans in Bangladesh and West Bengal; university students [not opened]. This only shapes tips.

## 2. Register, address, glosses

### 2.1 Voice and typography

- **Address:** আপনি, -েন present, -উন imperative; instructions prefer imperative or impersonal forms (মনে রাখবেন, খেয়াল করুন). Praise: দারুণ!, খুব ভালো!. Never তুমি / তুই to the learner.
- **Script:** Hangul and RR exactly as the English row; everything else in Bengali script, loans and brands too (হোয়াটসঅ্যাপ, কাকাওটক, কে-পপ). Latin only for RR, its letters (*eo*, *kk*) and the interface's closed list.
- **Punctuation:** **।** ends every full sentence, also after Korean or RR; `?` `!` stay; ` / ` for alternatives and dialogues; straight quotes; `✗` / `✓`.
- **Digits:** ASCII only (interface decision).
- **Spelling:** Bangla Academy; অ্যা in loans; ং in লিংক; **কী** = "what", **কি** = the yes/no particle. NFC, **no ZWJ / ZWNJ** (rephrase any loan that needs a joiner).
- **Classifier:** glosses of speech use **-টা** with the Bangladesh forms একটা, দুইটা, তিনটা (দুটো / তিনটে are West Bengal, note only). Instructions use **-টি**, as the interface does.
- **Endings never touch Hangul, RR, `@@`, `___` or slots** (the form depends on the last sound): put the ending on a Bengali head noun (শব্দটির, বাক্যটিতে) or use a colon. Korean term + hyphen + Bengali noun is fine (요-রূপ, 하다-ক্রিয়া).
- **Lint:** no space + *on* + letters + `=` in bodies (write `:` after RR words).

### 2.2 Speech levels in glosses

| Korean | Bengali gloss | Example |
|---|---|---|
| 반말 | তুমি, -ো / -ছ endings, casual words | 뭐 해? → কী করছ? |
| 요-form | আপনি, -েন / -উন | 앉아요 → বসুন |
| -습니다 | আপনি + more formal words | 감사합니다 → ধন্যবাদ |
| -시- on the listener | the -েন of আপনি | 어디 가세요? → কোথায় যাচ্ছেন? |
| -시- on a third person | উনি / তিনি + -েন | 할머니가 주무세요 → দাদি ঘুমাচ্ছেন |
| -아/어 주세요 | V-এ দিন | 써 주세요 → লিখে দিন |
| -아/어 주시겠어요? | (একটু) V-এ দেবেন? | 확인해 주시겠어요? → একটু দেখে দেবেন? |

- **Both directions:** a 요 / -습니다 / -시- line never gets তুমি, a 반말 line never আপনি. Fixed phrases take no pronoun.
- **তুই:** never in glosses or prompts; `polite` mentions once that 반말 also covers it.
- **Third person without -시-:** সে / ও, even for a parent (মা রান্না করছে is ordinary). With -시-: উনি -েন. The Bengali then shows -시- exactly where Korean has it.
- **Please:** no দয়া করে with plain 주세요 (물 주세요 → পানি দিন); only where the English says "please" in a formal or written line. একটু ≈ 좀.
- **네 = জি / হ্যাঁ, 아니요 = জি না / না, 응 = হ্যাঁ, 아니 = না.** Never add জি without 네.
- **Name + 씨 / 님:** the bare name. 선생님: স্যার / ম্যাডাম when addressed, শিক্ষক otherwise.

### 2.3 Fixed phrases (one gloss everywhere)

Community-neutral, as the interface decided: no আসসালামু আলাইকুম, নমস্কার or meal blessing as a gloss (a tip may mention them side by side).

| Korean | Bengali | Korean | Bengali |
|---|---|---|---|
| 안녕하세요 | হ্যালো (যেকোনো সময়) | 저기요 | শুনছেন? (ডাক দিতে) |
| 안녕히 가세요 | সাবধানে যাবেন (যিনি যাচ্ছেন তাঁকে) | 안녕히 계세요 | ভালো থাকবেন (যিনি থাকছেন তাঁকে) |
| 감사합니다 · 고마워요 · 고마워 | ধন্যবাদ · ধন্যবাদ · থ্যাংকস | 죄송합니다 · 미안해요 · 미안해 | দুঃখিত (বিনীত) · দুঃখিত · সরি |
| 실례합니다 | মাফ করবেন | 괜찮아요 · 괜찮아요? | ঠিক আছে · আপনি ঠিক আছেন? |
| 잘 먹겠습니다 | খাবারের জন্য ধন্যবাদ (খাওয়ার আগে) | 잘 먹었습니다 | খুব ভালো খেলাম, ধন্যবাদ (খাওয়ার পরে) |
| 수고하셨습니다 · 수고 많으셨어요 | অনেক খেটেছেন, ধন্যবাদ | 수고했어요 · 수고했어 | ভালো খেটেছেন · ভালো খেটেছ |
| 수고하세요 | কাজ ভালো চলুক (যিনি কাজে থাকছেন তাঁকে) | 고생했어 | অনেক ধকল গেল তোমার |
| 잘 부탁드립니다 | আপনার সহযোগিতা আশা করি | (work email) | আপনার সহযোগিতা কামনা করছি |
| 이거 주세요 · 계산해 주세요 | এটা দিন · বিলটা দিন | 포장해 주세요 | প্যাক করে দিন |
| 혹시 | আচ্ছা, … কি? / কোনোভাবে | 잠깐만요 | এক মিনিট |
| 콜 · 오케이 콜 | ডান! · ঠিক আছে, ডান! | 대박 | দারুণ! / বলো কী! |
| 화이팅 | তুমি পারবে! | 넵, 확인했습니다 | জি, দেখেছি |
| ㄹ게(요) · -자 | …করব (কথা দিচ্ছি) · চলো …! | 사장님 | মালিক (ডাকতে: ভাই / আপা) |
| 과장님 · 팀장님 | ম্যানেজার · টিম লিডার | 오빠·형 / 언니·누나 | ভাইয়া / আপু (§4.6) |

- Cards c0569 / c0570 add the literal «শান্তিতে যান» / «শান্তিতে থাকুন».
- **Goodbye bridge [not opened]:** a Bengali speaker leaving says **আসি**, a speaker-centred goodbye; Korean chooses by who leaves.

### 2.4 Person and status (replaces a gender rule)

Bengali has no grammatical gender and সে / উনি cover he and she. Use neutral nouns: শিক্ষার্থী (as the interface level title), বন্ধু (not বান্ধবী), শিক্ষক as generic. Every Bengali verb must still pick a person and a status; take the first rule that fits:
1. **Neutral first** when the Korean has no subject and the English is generic: impersonal or experiencer forms (যাওয়া যায়, আমার ভালো লাগে, আমাকে যেতে হবে). Never reword across a cue.
2. **"I" lines:** আমি forms. The level is invisible; a tag carries it when the item tests it (§8.2).
3. **"You" lines:** আপনি for 요 / -습니다 / -시-, তুমি for 반말.
4. **Third person:** -시- → উনি -েন, else সে / ও.
5. Speaker gender matters only for 오빠 / 형 / 언니 / 누나, which follow the Korean row.

## 3. Glossary, screen names, labels

### 3.1 Terms (closed list)

| Idea | Term |
|---|---|
| Korean particle | **পার্টিকল**. Bengali's own endings = **বিভক্তি**, postpositions = **অনুসর্গ** (never call a Korean particle বিভক্তি) |
| 은/는 · 이/가 · 을/를 | **বিষয় · কর্তা · কর্ম পার্টিকল** |
| noun · pronoun · verb · adjective · adverb · tense | বিশেষ্য · সর্বনাম · ক্রিয়া · বিশেষণ · ক্রিয়াবিশেষণ · কাল (বর্তমান / অতীত / ভবিষ্যৎ) |
| 크다, 좋다 | **বিশেষণ-ক্রিয়া** |
| dictionary form · stem · ending | **অভিধানরূপ · ধাতু · এন্ডিং** (interface) |
| 공부하다 | **하다-ক্রিয়া** |
| -습니다 / 요 / 반말 | **আনুষ্ঠানিক / ভদ্র / ঘরোয়া**; forms **-습니다-রূপ / 요-রূপ / 반말**; together **ভদ্রতার স্তর** |
| -(으)시- | **সম্মানসূচক** |
| 씨, 님, ভাই, আপু · titles | **সম্বোধন** · উপাধি |
| 개, 명, 잔 | **কাউন্টার**; Bengali -টা / -জন / -গুলো = **নির্দেশক** |
| two number sets | **খাঁটি কোরিয়ান / সিনো-কোরিয়ান সংখ্যা** (never "চীনা সংখ্যা") |
| word order · question word · connector · softener | শব্দক্রম · প্রশ্নবোধক শব্দ · সংযোজক শব্দ · নরম করার শব্দ |
| Hangul · alphabet · letter | হাঙ্গুল · বর্ণমালা · **বর্ণ** (স্বরবর্ণ / ব্যঞ্জনবর্ণ in labels; স্বর / ব্যঞ্জন in text) |
| block · syllable · 받침 | **ব্লক** ("এক ব্লক = এক অক্ষর") · অক্ষর · **শেষ ব্যঞ্জন** |
| ㄱㄷㅂㅅㅈ / ㅋㅌㅍㅊ / ㄲㄸㅃㅆㅉ | **নরম / মহাপ্রাণ / শক্ত ব্যঞ্জন**. Never call ㄱ অল্পপ্রাণ: Bengali অল্পপ্রাণ ক is nearer ㄲ |
| sound change · 연음 · 비음화 | **ধ্বনি পরিবর্তন · জুড়ে পড়া · নাসিক্য হয়ে যাওয়া** |
| RR line | **রোমান হরফ**; উচ্চারণ = the sound itself |
| loanword · stroke order | বিদেশি শব্দ · লেখার ক্রম |

### 3.2 Screen names and `ui.json`

- **Tabs:** আজ · পাঠ · অনুশীলন · রিভিউ · অগ্রগতি (in a sentence: অনুশীলন অংশে). **Buttons:** জানি · আবার · যাচাই · 📖 দেখুন · আমার বাক্য · সব বাকি.
- **No Read tab or trainer in lesson prose.** `sound-changes`: replace "open Read and try the 🔀 Sound changes drill" (as es-ko did) with «এই উদাহরণগুলো **পাঠ** অংশে আবার শুনুন, **অনুশীলন** করুন, আর **রিভিউ**-তে কার্ডগুলো ঝালিয়ে নিন।». `hangul`: keep "tap a letter to replay".
- **`ui.json`:** the dictionary already says কোরিয়ান / হাঙ্গুল / রোমান হরফ and fills all 14 `uiKeys` for this course, so **no wording change is needed**, except:
  1. Override `"No match. Try the English meaning."` (dictionary: ইংরেজি অর্থ…) → `"মিল পাওয়া যায়নি। বাংলা অর্থ দিয়ে চেষ্টা করুন।"`: bn-ko meanings are Bengali.
  2. `validate.js` counts `uiKeys` missing from the native `ui.json` as words remaining: copy the 14 values **verbatim** from `tools/i18n/bn/ui.json`.

### 3.3 Labels (w1; permanent progress keys)

**Decks, in id order (56):**
- হাঙ্গুলের স্বরবর্ণ · হাঙ্গুলের ব্যঞ্জনবর্ণ · হাঙ্গুল: আরও বর্ণ · উচ্চারণের টিপস
- জরুরি বাক্য · পরিচয় · জরুরি বাক্য 2 · খোঁজখবর
- ক্যাফে ও কনভিনিয়েন্স স্টোর · চারপাশের সংখ্যা · কাউন্টার · আবহাওয়া ও অনুভূতি · সংযোজক শব্দ
- ডাক্তার ও ফার্মেসি · বাসা ও টুকিটাকি কাজ · সম্মানসূচক রূপ · জায়গা ও ভবন · শখ
- খাবারের শব্দ · পানীয় · রোজকার কাজকর্ম · টিভি ও বিনোদন · অবস্থান ও দিক
- মূল ক্রিয়া · পার্টিকল · সংখ্যা · মিষ্টি কথা · আদুরে কথা · ফ্লার্টিং · বন্ধুদের মেসেজ
- জোশ আর বাহবা · আড্ডা ও ঘোরাঘুরি · কে-পপ ও ফ্যান কালচার · সোশ্যাল মিডিয়া ও স্ল্যাং
- সম্পর্কের পরের ধাপ · কাজ ও অফিস · টুকটাক আলাপ · খাবার ও অর্ডার
- পথ ও যাতায়াত · সময় ও দিন · পরিবার ও মানুষ · বিশেষণ · কে-ড্রামার সংলাপ
- দরকারি বিশেষ্য · দরকারি ক্রিয়া · দরকারি বিশেষণ · দরকারি ক্রিয়াবিশেষণ · দরকারি সর্বনাম
- আরও পার্টিকল · আরও সংযোজক · আবেগসূচক শব্দ · দরকারি ছোট শব্দ · আরও কাউন্টার
- ফ্লার্টিংয়ের শব্দ · প্রশংসা · দেশ

All unique, none আমার বাক্য, no danda. "Top …" decks take **দরকারি** (new words) or **আরও** (extends an existing deck), so Particles / Top particles etc. stay apart.

**Groups:** ভিত্তি · রোজকার · শব্দভান্ডার · ব্যাকরণ · সামাজিক · মূল শব্দ.

**Level titles (interface):** অঙ্কুর (t01) · শিক্ষার্থী (t03) · সিনিয়র (t05, ≈ 선배) · প্রো (t08) · ওস্তাদ (t12) · গুরু (t16).

**Other labels:** a `labels.jsonl` string whose English is an exact key in `tools/i18n/bn/ui.json` reuses its `t` (greetings রাত হয়েছে, ভালো খেটেছেন · শুভ সকাল · শুভ বিকাল · শুভ সন্ধ্যা; goals and plans). Pause items follow §2.3.

### 3.4 Lesson titles

Stored "N · title", each with exactly the English title's Hangul; wording follows `roadmap.json` where it has the lesson. Cross-references: "পাঠ N, «title»".

1 এক বসাতেই হাঙ্গুল · 2 ভদ্রতার স্তর · 3 পরিচয় হওয়া · 4 ধ্বনি পরিবর্তন: 감사합니다 কেন অন্যরকম শোনায় · 5 বিশেষ্য ও 은/는 · 6 있어요 ও 없어요 · 7 সর্বনাম ও প্রশ্নবোধক শব্দ · 8 ক্রিয়া · 9 বর্তমান কাল: 요-রূপ · 10 অতীত কাল: 았어요 / 었어요 · 11 ভবিষ্যৎ ও পরিকল্পনা: -(으)ㄹ 거예요 · 12 শব্দক্রম ও 을/를 · 13 에 ও 에서, আর পার্টিকলের মানচিত্র · 14 না বলা: 안 ও -지 않아요 · 15 도 আর 만: -ও আর শুধু · 16 বিশেষ্য আর ক্রিয়া জুড়ে বাক্য · 17 চাওয়া ও পছন্দ: -고 싶어요, 좋아해요 · 18 সংখ্যার দুই পদ্ধতি · 19 বাইরে খাওয়া · 20 চলাফেরা · 21 উপাধি ও সম্মানসূচক রূপ · 22 পরিকল্পনা করা · 23 কোরিয়ানদের মতো মেসেজ · 24 কাউন্টার · 25 বাক্য জোড়া: -고, -지만, -아/어서 · 26 অতীতের গল্প বলা · 27 বিশেষ্যের বর্ণনা: 좋은 날씨, 큰 가방 · 28 তুলনা: 보다, 더, 제일 · 29 না পারা, পারা আর না জানা · 30 করতেই হবে: -아/어야 해요 · 31 সম্মানসূচক ক্রিয়া · 32 ভদ্রভাবে কিছু চাওয়া · 33 অফিসের কোরিয়ান

(15 uses আর for "and", since ও is the lesson's own word "also".)

## 4. Grammar bridges and breaks

[convention] = Wikipedia "Bengali grammar" via en-bn.md; otherwise [not opened]. Hangul here is for writers; a field may carry it only if its English has the same runs, or under `_waive`.

### 4.1 Word order and the কারক map

- **Holds:** verb last, modifiers first, question words in place (এটা কী? = 이거 뭐예요?), endings and postpositions after the noun.
- **Breaks:** (1) Bengali leaves subjects and inanimate objects unmarked (আমি ভাত খাই); Korean marks both (저는 밥을 먹어요). (2) Bengali glues বিভক্তি but spaces অনুসর্গ (বাসা থেকে); Korean glues every particle: expect 집 에서. (3) Bengali may add কি to a yes/no question; Korean only raises the voice.

| কারক | Bengali | Korean | Note |
|---|---|---|---|
| কর্তা | zero | 이/가, topic 은/는 | |
| কর্ম | zero for things, -কে for people [convention] | 을/를 always | ভাত খাই vs 밥을 먹어요 |
| সম্প্রদান | -কে (মাকে দিই) | 에게 / 한테 | |
| অধিকরণ | -এ / -তে / -য় | 에 (be, go, time) or 에서 (do) | one ending, two particles |
| অপাদান | থেকে | 에서 (place), 부터 (time) | |
| করণ | দিয়ে; vehicles take -এ (বাসে যাই) | (으)로 | বাসে যাই = 버스로 가요, not 버스에 |
| সম্বন্ধ | -র / -এর | 의, usually dropped | আমার বন্ধু = 제 친구 |
| comparison | -র চেয়ে [convention] | 보다 | same position |

**কাল / পরশু:** each means both past and future day, decided by tense [not opened]; Korean has 어제 / 내일, 그저께 / 모레. Write **গতকাল** (어제) and **আগামীকাল** (내일), never bare কাল.

### 4.2 -ও, শুধু, তো ↔ 도, 만, 은/는

- **-ও ↔ 도:** আমিও = 저도. 도 replaces 은/는 / 이/가 / 을/를 (저는도 ✗) but stacks after 에 / 에서, as -ও stacks after a case ending: বাসাতেও = 집에도. -ও + না: আমিও যাচ্ছি না = 저도 안 가요.
- **শুধু ↔ 만:** শুধু এটা = 이것만 (-ই is mostly emphasis).
- **তো ↔ 은/는** only for contrast (কফি তো খাই না ≈ 커피는 안 마셔요); teach 은/는 as "আর … এর কথা বললে".

### 4.3 Copula and existence: the same split

| Bengali | Korean | Job |
|---|---|---|
| আমি শিক্ষার্থী (no verb) [convention] | 학생이에요 | A = B |
| আমি শিক্ষার্থী নই | 학생이 아니에요 | not A |
| আমি বাসায় আছি · এখানে একটা স্কুল আছে | 집에 있어요 · 여기에 학교가 있어요 | location, existence |
| আমার সময় আছে · সময় নেই | 시간이 있어요 · 없어요 | having: the thing had is the subject in both |

নয় ≈ 아니에요, আছে ≈ 있어요, নেই ≈ 없어요, one to one. Breaks: expect 저는 학생 (no copula, as in Bengali) and 안 있어요 ✗.

### 4.4 Verbs, status, tense, negation

- **Forms:** 먹다 ≈ খাওয়া; stem 먹 ≈ ধাতু খা; 하다 ≈ করা (পড়াশোনা করি না ≈ 공부 안 해요).
- **Status.** Bengali endings agree with the **subject**: আমি যাই · তুমি যাও · আপনি / উনি যান [convention]. Korean **-시- also honours the subject** (어디 가세요? = কোথায় যাচ্ছেন?; 할아버지가 오세요 = দাদা আসছেন), so 저는 가세요 ✗ = আমি যান ✗. But **요 / 반말 / -습니다 follow the listener** whatever the subject: "I'm going" is 가요 to a stranger and 가 to a friend, while আমি যাচ্ছি never changes. Teach this explicitly. Bengali also uses one -েন for আপনি and উনি; Korean splits listener (요) and subject (-시-).
- **No person agreement:** 가요 = যাই / যাও / যান / যায়.
- **Present** 가요 = যাই + যাচ্ছি. **Past** গেলাম = গিয়েছি = 갔어요. **Future** যাব ≈ 갈 거예요 (হয়তো ≈ the guessing use); -(으)ㄹ게요 = করব as a promise.
- **Past-negative trap:** যাইনি / খাইনি is built on the present + -নি; Korean negates the past: 안 먹었어요. Expect 안 먹어요. Past-negative prompts carry (অতীত).
- **Negation:** Bengali না **follows** the verb (যাই না) [convention], so -지 않아요 feels natural and 안 **before** the verb is the new habit. যাবেন না ≈ -지 마세요; পারি না ≈ 못; জানি না ≈ 몰라요.

### 4.5 Like, want, have to, may

- **Like:** আমার কফি ভালো লাগে / পছন্দ (thing = subject) = **커피가 좋아요**; আমি কফি পছন্দ করি = **커피를 좋아해요**. Mixing gives 커피가 좋아해요 ✗ [inference].
- **Want:** যেতে চাই = 가고 싶어요; gloss with চাই / ইচ্ছে করছে, never হবে.
- **Have to:** যেতে হবে = 가야 해요 / 돼요; **যেতে হবে না = 안 가도 돼요**.
- **May:** গেলে চলবে? = 가도 돼요?; বসলে অসুবিধা আছে? ≈ 앉으면 안 돼요? (interface: চলবে কি? / চলবে না?).

### 4.6 Politeness and address

- **Holds:** আপনি / তুমি follows age, closeness and setting like 요 / 반말; switching is negotiated, like 말 놔도 돼요.
- **Breaks (teach all five):** (1) 반말 = তুমি + তুই; 요 reaches people Bengali calls তুমি (a same-age acquaintance, a younger coworker) [inference]. (2) The listener is marked only on the ending: 당신 ≠ আপনি; use name + 씨, a title or nothing. (3) তুমি to young staff is common; adult strangers in Korea get 요. (4) -습니다 marks a situation (ধন্যবাদ vs থ্যাংকস). (5) Korean has a humble 저 and 드리다; Bengali has neither.
- **Vocabulary:** শুভ নাম ≈ 성함 [not opened]; নিন (offering food) ≈ 드세요.
- **Kinship:** Bangladeshi speakers call strangers ভাই / আপু / আপা and stall owners মামা [not opened], like Korean 이모 / 언니 for staff. But 형 / 누나 (male speaker) vs 오빠 / 언니 (female speaker) depend on the speaker's gender. Gloss as ভাইয়া / আপু, never দাদা / দিদি (in Bangladesh দাদা is also a grandfather). Drivers: 기사님 or 저기요.

### 4.7 Comparing, modifiers, joining, numbers, counters

- **Comparing:** বাস ট্যাক্সির চেয়ে সস্তা = 버스가 택시보다 싸요; আরও = 더, সবচেয়ে = 제일.
- **Modifiers:** no যে…সে clause; everything precedes the noun. Bridge: গতকাল দেখা সিনেমা = 어제 본 영화 [not opened]; Korean adds an ending (크다 → 큰).
- **Joining:** খেয়ে ≈ -고 / -아서 (no tense in either). Reason first in both: ব্যস্ত, তাই যাচ্ছি না = 바빠서 안 가요 (avoid the কারণ-after order). কিন্তু = -지만. Story words: প্রথমে · তারপর · এরপর · তাই · শেষে.
- **Numbers:** Bengali 1–100 are memorised; Sino-Korean is ten words and a rule. 10만 = এক লাখ, 1000만 = এক কোটি, 1억 = দশ কোটি.
- **Time:** hours **native**, minutes and money **Sino-Korean**: দুইটা বাজে = 두 시; সাড়ে তিনটা = 세 시 반; no সোয়া / পৌনে (use 분). Age: native + 살.
- **Counters:** Bengali number + নির্দেশক + noun (দুইটা কফি, তিনজন মানুষ); Korean noun + number + separate counter (커피 두 잔, 사람 세 명). -জন ≈ 명. Expect 두 커피 ✗ and 두잔.
- **Plural:** -রা / -গুলো ≈ 들, and neither follows a number (দুইটা বই, 책 두 권).
- **Pronoun drop:** Bengali drops subjects because the verb shows the person; Korean drops more, with no such help. Add আমি / আপনি in glosses only when needed for clarity.

## 5. Error zones, ranked

1. **Stops.** [research] Kwon 2012 (contrastive, abstract only, no learner data): Korean fortis ≈ Bengali voiceless unaspirated, aspirated ≈ aspirated; no Bengali ㅆ; Korean finals unreleased. Hindi studies (via hi-ko) are analogies only. **Teach** গ দ ব জ for ㄱ ㄷ ㅂ ㅈ, never ক ত প চ. **ফ** is often [f] (en-bn §4): ㅍ = "ফ on both lips". **RR:** *k t p ch* read the South Asian English way are unaspirated → ㄲ ㄸ ㅃ ㅉ [inference]; Bengali writes English *t d* as ট ড, so expect retroflex ㄷ ㅌ (they are alveolar; ত দ is the nearer anchor [inference]). *ch* = ছ, *j* = জ, *jj* = চ.
2. **ㅅ / ㅆ.** Most Bengali স is [ʃ] (en-bn §4); Korean ㅅ is [s] except before ㅣ / y (Wikipedia). Expect 사 as "শা". Anchor on the স of আস্তে. ㅆ: a tighter, longer স.
3. **Vowels.** Bengali keeps অ [ɔ] / ও [o] apart in speech though spelling hides it (en-bn §6.1); Seoul ㅓ is [ʌ̹], ㅗ high and rounded (Wikipedia): good anchors. Romanised Bengali writes অ as *o* [not opened], so RR *o* may be read অ. One ITV BD article writes সিউল, ছুসক, হটটক, হংডে (eo → উ / অ, o → অ, d / t → ড / ট). *eu* → ইউ and *ae* → অ্যা are expected (ㅐ = ㅔ = এ). Diphthongs need practice (Kwon 2012).
4. **Particles:** unmarked objects; one locative → 에 / 에서; 버스에 ✗; spaces before particles.
5. **Copula:** dropped 이에요; 안 있어요 ✗.
6. **Politeness:** 당신; 반말 to staff.
7. **Local traps** [inference]: কাল; past negative; counter order; 그 vs 저 (ও covers both); 들 everywhere; final ㄹ as র; released finals; 강 as "গাংগ".

## 6. Reading guide

No voicing contrast, tones, stress or length in Korean; it has plain / aspirated / tense.

**Policy: comparisons, never readings.** Bengali script stands for **one sound** only — a standalone vowel letter (ㅏ ≈ আ), a consonant letter (ㅋ ≈ খ) or a consonant with hasant (final ㅂ ≈ প্) — with "মতো", "কাছাকাছি" or a mouth description. Reasons: the inherent vowel is [ɔ], [o] or silent and spelling does not say which (en-bn §6.1); no letter for ㅡ or a separate ㅓ; press respellings already teach wrong readings; Hangul is the goal. Name labels are allowed (§8.3).

### 6.1 Sound table (card notes c0001–c0060, `hangul`, Hangul deck descriptions)

| Jamo (RR) | Comparison | Trap |
|---|---|---|
| ㅏ a | আ | not অ |
| ㅓ eo | অ of কত, lips less rounded | not ও / উ / ইয়ো |
| ㅗ o | ও, lips round and forward | not অ |
| ㅜ u · ㅣ i | উ · ই | length never matters |
| ㅡ eu | উ with spread lips, teeth nearly closed | not ইউ |
| ㅐ = ㅔ | এ (দেশ) | not অ্যা |
| ㅑ ㅛ ㅠ · ㅕ | ইয়া ইয়ো ইউ · ই + ㅓ | *yeo* ≠ ইয়ো |
| ㅘ ㅝ ㅟ · ㅚ ㅙ ㅞ · ㅢ | ওয়া · উ + ㅓ · উই · about ওয়ে · ㅡ + ই | *wo* ≠ ও |
| ㄱ ㄷ ㅂ ㅈ | soft গ দ ব জ | never ক ত প চ |
| ㅋ ㅌ ㅍ ㅊ | খ থ ফ ছ, strong puff | ফ on both lips |
| ㄲ ㄸ ㅃ ㅉ | ক ত প চ: no air, tight throat, higher pitch | not long |
| ㅅ / ㅆ | স of আস্তে / tighter স; before ㅣ about শ | not শ elsewhere |
| ㄷ ㅌ ㄸ | ত দ family | never ট ড |
| ㄹ | light র between vowels; ল at the end; ㄹㄹ = ল্ল | final ㄹ ≠ র |
| ㄴ ㅁ · ㅎ | ন ম · হ, weak between vowels | |
| final ㅇ | ং of বাংলা, no গ after | |
| finals | ক্ ত্ প্, unreleased; ㅅ ㅈ ㅊ ㅌ ㅎ → ত্ | 옷 ≠ "ওশ" |

**Script bridge:** Bengali orders consonants by mouth (ক-বর্গ…), Hangul draws mouth shapes; ㄱ → ㅋ adds a stroke as অল্পপ্রাণ → মহাপ্রাণ. Breaks: vowels are full letters, never কার signs; the final sits inside the block.

**Sound-change bridge** [not opened]: school ব্যঞ্জন সন্ধি has the same nasal assimilation as 비음화: বাক্ + ময় = বাঙ্ময়, জগৎ + নাথ = জগন্নাথ ≈ 합니다 [함니다]. One example, labelled as an analogy.

### 6.2 Ready-to-paste guide for lesson 1

For `hangul` (parts also for `sound-changes` and the Hangul deck descriptions). It has no Hangul, so needs no `_waive` itself.

> **রোমান হরফ কীভাবে পড়বেন** — রোমান হরফ ইংরেজি পাঠকের কথা ভেবে বানানো। বাংলা অভ্যাসে পড়লে কয়েকটি জায়গায় ভুল হয়:
> - **a** সবসময় "আ"। **eo** "কত"-র প্রথম স্বরের কাছাকাছি, তবে ঠোঁট কম গোল। **o** স্পষ্ট "ও", ঠোঁট গোল করে সামনে। বাংলায় যেমন অ আর ও আলাদা, কোরিয়ানে eo আর o-ও আলাদা। *seoul*-এ কোনো "উ" বা "ইয়ো" নেই।
> - **eu**: জিভ "উ"-এর জায়গায়, কিন্তু ঠোঁট ছড়ানো, দাঁত প্রায় বন্ধ; "ইউ" নয়। **ae** আর **e** দুটোই "এ", "অ্যা" নয়।
> - **k, t, p, ch** = খ, থ, ফ, ছ-এর মতো জোরে হাওয়া ছেড়ে। *p* দুই ঠোঁটে বলুন, দাঁত ঠোঁটে লাগবে না।
> - **kk, tt, pp, jj** = ক, ত, প, চ — একদম হাওয়া ছাড়া, গলা টান করে; লম্বা করবেন না।
> - **g, d, b, j** = হালকা গ, দ, ব, জ। **t, d** সবসময় ত-দ-এর মতো, ট-ড-এর মতো নয়।
> - **s** = "আস্তে"-র স, "শ" নয়; শুধু *si* আর *sy-*-তে "শ"-এর কাছাকাছি। **ss** আরও টান করা স।
> - **r** দুই স্বরের মাঝে হালকা র; **l** শেষে বা *ll*-এ ল: *mul*, *ppalli*। **ng** = "বাংলা"-র ং, পরে আলাদা গ নেই।
> - শেষে **k, t, p**: মুখ বন্ধ করে থামুন, হাওয়া ছাড়বেন না: *bap*। শেষ ব্যঞ্জন পরের স্বরের সাথে জুড়ে যায়: *hangugeo*।
> - কোরিয়ানে সুর, জোর বা স্বরের দৈর্ঘ্য দিয়ে অর্থ বদলায় না।
> - রোমান হরফ শুধু শুরুর সাহায্য, লক্ষ্য হাঙ্গুল। বাংলা হরফের তুলনাগুলোও তুলনা মাত্র, বানান নয়।

## 7. Per-lesson notes

**B** = build on; **R** = English-built passage to rewrite. Lessons not listed (9 `verbs`, 15 `do-man`, 17 `want-like`, 26 `story`, 28 `compare`, 29 `cant`) build directly on §4.4–4.7. All [inference].

| # | id | Notes |
|---|---|---|
| 1 | `hangul` | B: বর্ণমালা by mouth; ব্লক = অক্ষর; §6.2. R: vowel glosses (bed, oo, ee) → §6.1; `_waive` |
| 2 | `polite` | B: §2.2; listener vs subject (§4.4); তুই once; ধন্যবাদ / থ্যাংকস; 네 = জি; say untagged practice answers are 요-রূপ. R: headers আনুষ্ঠানিক / ভদ্র / ঘরোয়া |
| 3 | `meet` | B: হ্যালো at any hour; age sets address in both; আসি vs who-leaves goodbyes; country tip with বাংলাদেশ. R: header "Formal" → **আনুষ্ঠানিক / সম্মানসূচক** (반갑습니다 + 성함); মাইক / হুয়ান kept |
| 4 | `sound-changes` | B: সন্ধি analogy; ㄹㄹ = ল্ল. R: drill line (§3.2) |
| 5 | `nouns` | B: no article, no "the" -টা; আমার বাসা = 제 집; 들 ≈ -রা. Trap: এটা / ওটা vs 이 · 그 · 저 |
| 6 | `isseoyo` | B: §4.3, the cleanest bridge. R: the "English 'is'" opening |
| 7 | `pronouns-questions` | B: question words in place; কি vs কী; আমাদের মা ≈ 우리 엄마; আপনি ≠ 당신 |
| 8 | `verbbasics` | B: অভিধানরূপ, ধাতু, no person agreement, বিশেষণ-ক্রিয়া, 하다 ≈ করা. R: "to …" framing |
| 10 | `past` | B: গেলাম = গিয়েছি; past-negative trap. R: "ate / have eaten" → the Bengali pair |
| 11 | `future` | B: যাব; হয়তো. R: "kkeoyeyo" → "শক্ত ক" |
| 12 | `sov` | B: unmarked objects vs 을/를. R: "English is SVO" lines |
| 13 | `particles` | B: §4.1; one -এ / -তে, two particles; বাসে = 버스로. R: "English 'at'" |
| 14 | `negation` | B: না after the verb ≈ -지 않아요; 안 is the new position; নয় / নেই |
| 16 | `sentences` | B: 이에요 where Bengali has no verb. R: "English order" mistakes |
| 18 | `numbers` | B: §4.7; লাখ / কোটি vs 만; দুইটা বাজে = 두 시. R: "like English digits" → "দশটি শব্দ, একটি নিয়ম" |
| 19 | `food` | B: দুইটা কফি vs 커피 두 잔. Optional tip: which word marks pork (돼지고기) in a dish name; no religious framing |
| 20 | `getting-around` | B: Dhaka Metro ≈ Seoul subway; T-money ≈ "মেট্রোর এমআরটি পাসের মতো কার্ড" [not opened]; taxi ≈ সিএনজি / উবার |
| 21 | `titles` | B: §4.6; ভাই / আপু / মামা. R: "(you female / male)" → "আপনি নারী হলে / পুরুষ হলে" |
| 22 | `plans` | B: চলো খাই ≈ 먹자; যাবেন? ≈ -(으)ㄹ래요?; যাব নাকি? ≈ -(으)ㄹ까요?. R: header "Formal" → **সম্মানসূচক** (가시겠어요?, 있으세요?) |
| 23 | `texting` | B: ㅋㅋ ≈ হাহা; KakaoTalk ≈ হোয়াটসঅ্যাপ / মেসেঞ্জার. **Fix the English:** the "1" counts who has *not* read; 읽씹 = the 1 is gone and no reply comes |
| 24 | `counters` | B: §4.7 counters |
| 25 | `joining` | B: -এ participle; reason first with তাই. R: and / but / so → আর / কিন্তু / তাই |
| 27 | `noun-modifiers` | B: verbal adjective bridge. R: "no that / which" → "কোরিয়ানে 'যে' দিয়ে বাক্য নেই" |
| 30 | `have-to` | B: -তে হবে; যেতে হবে না = 안 가도 돼요. R: cross-ref → পাঠ 32, «ভদ্রভাবে কিছু চাওয়া» |
| 31 | `honorific` | B: -েন = -시- (§4.4, §4.6) |
| 32 | `requests` | B: 좀 = একটু; করে দিন / দেবেন? ≈ 주세요 / 주시겠어요?; বসলে অসুবিধা আছে? |
| 33 | `office` | B: স্যার / ভাই / আপা ≈ a bare title; সহযোগিতা কামনা করছি; closing **ইতি, @@** ≈ @@ 드림; 회식 ≈ অফিসের ডিনার; no etymology for 수고 |

## 8. Row conventions

### 8.1 Format

- Hangul runs set-equal to the English row's; exceptions need `"_waive":["hangul"]` + `_note` (lesson bodies: on the `lessons.jsonl` row). Planned: `hangul` only.
- One ` / ` per dialogue gloss; blanks kept; no `{ }` in glosses; `q p why hint` ≤ 400, options ≤ 200 and distinct; meanings distinct within a deck (case-insensitive).
- Lesson bodies: same `<h3>` / `div` / `table` structure, tokens unchanged and in order, no English in prose or headers.

### 8.2 Practice prompts: one prompt, one answer

Read `target/ko/practice.jsonl` (`a`, `x`, `hint`) first.
- **Bengali shows by itself:** tense; the level in "you" lines (আপনি → 요, তুমি → 반말); -시- on a third person. **It cannot show** the level of an "I" or subjectless line.
- **Level tags:** (আনুষ্ঠানিক) / (ভদ্র) / (ঘরোয়া) / (সম্মানসূচক). Keep every English tag and scene cue ("বন্ধুকে মেসেজ:", "বয়স্ক কাউকে:", "নিজের কথা:"). Untagged answers are 요-form. Never আপনি with (ঘরোয়া).
- **Level-only rejects** (the cue is mandatory): polite.12–14, titles.12–14, honorific.12–14, office.12, office.14, texting.14.
- **Tense:** present যাই (the -ছি form only for an English progressive); past গেলাম; future যাব. **Past negatives add (অতীত):** past.14 «(আমি) গতকাল খাইনি (অতীত)», story.14. Otherwise (বর্তমান) / (অতীত) / (ভবিষ্যৎ) only where the English has a tag.
- **Other cues:** "(I)" → "(আমি)"; method cues stay ((안 দিয়ে), (সংখ্যাটি হাঙ্গুলে লিখুন)); instructions use -উন; গতকাল / আগামীকাল.

### 8.3 Names, places, local frame

- **`@@`:** same count as the English; never with an ending. Zero copula helps: @@입니다 → «আমি @@।», @@ 드림 → «ইতি, @@».
- **People:** 민수 মিনসু, 지은 জিউন, 리사 লিসা, Mike মাইক, Juan হুয়ান. **Places:** দক্ষিণ কোরিয়া / কোরিয়া, সিউল, বুসান, মিয়ংদোং (명동), হোংদে (홍대), ঢাকা.
- **Other Korean names and loans:** an established spelling if any (কিমচি, কে-পপ); else RR letter by letter: g গ · k, kk ক · d দ · t, tt ত · b ব · p, pp প · j জ · jj চ · ch ছ · s, ss স · h হ · n ন · m ম · ng ং · r র · l ল · a া · eo no sign (অ initially) · o ো · u, eu ু · i ি · ae, e ে; y- ইয়-, w- ওয়- / উয়-. Labels only.
- **Countries (204):** `Intl.DisplayNames(['bn'], {type:'region'})` (US মার্কিন যুক্তরাষ্ট্র, BD বাংলাদেশ, KR দক্ষিণ কোরিয়া), NFC, parentheses dropped; a commoner spoken name may go in the note (আমেরিকা). Languages: `{type:'language'}` (ko কোরিয়ান).
- **Blanks:** «আমি ___ থেকে এসেছি», «আপনি কি ___ বলতে পারেন?»; never swap in Bangladesh.
- **Local frame:** won (ওন) in prices, taka only in comparisons; হোয়াটসঅ্যাপ / মেসেঞ্জার; বিকাশ for mobile payment [not opened]; সিএনজি, রিকশা, মেট্রো.

## 9. What not to do

- No Korean beyond the source row without `_waive`; never edit `f`, `id`, `k`, `src` or a Korean field.
- No English in Latin script (RR, its letters and the interface list excepted); no word-level Bengali respellings of Korean; no English-sound comparisons.
- No invented etymologies or hanja origins (none for 수고, 살, 화이팅); a sound-alike only as a labelled coincidence.
- Hours native, minutes and money Sino-Korean, everywhere. KakaoTalk "1" = not yet read.
- No তুই; no তুমি / আপনি mixing towards the learner; no দয়া করে with plain 주세요; no added জি; no bare কাল; no religious or community formula as a gloss.
- Never call 은/는 "তো", 을/를 "-কে", a particle বিভক্তি, or ㄱ অল্পপ্রাণ.
- No Read tab or trainer in prose; no joiners or Bengali digits.

## 10. Review questions and unverified claims

**For a native reviewer** (ideally from Bangladesh; "OK" or the natural form):
1. 반말 → তুমি only (never তুই); **জি / জি না** for 네 / 아니요 — natural across communities?
2. সাবধানে যাবেন / ভালো থাকবেন; অনেক খেটেছেন, ধন্যবাদ and কাজ ভালো চলুক (수고); আপনার সহযোগিতা আশা করি / কামনা করছি; শুনছেন?; ডান!; আচ্ছা, … কি? (혹시).
3. বিষয় / কর্তা / কর্ম পার্টিকল; নরম / মহাপ্রাণ / শক্ত ব্যঞ্জন; খাঁটি কোরিয়ান / সিনো-কোরিয়ান; বিশেষণ-ক্রিয়া.
4. ㅓ ≈ the vowel of কত; ㅅ ≈ the স of আস্তে (is it [s] for Dhaka speakers?); ㅍ ≈ "ফ on both lips".
5. দুইটা / তিনটা in glosses (vs দুটো, দুটি) and দুইটা বাজে.
6. Deck labels and groups (§3.3), especially খোঁজখবর, জোশ আর বাহবা, the দরকারি / আরও prefixes, ভিত্তি, মূল শব্দ.
7. Tips: আসি when leaving; ভাই / আপু / মামা; স্যার for a superior; ইতি in an email; কাল / পরশু both ways.
8. The সন্ধি examples (বাঙ্ময়, জগন্নাথ) and শুভ নাম ≈ 성함.

**Limits:**
- **Not found:** any study of Bengali speakers' Korean; Kwon 2012 is contrastive (abstract only); Hindi studies are analogies.
- Everything tagged [not opened]; the press respellings come from one article.
- **For the lead:** one `ui.json` override + 14 verbatim `uiKeys` (§3.2); `_waive` on `hangul`; the English `texting` body has the KakaoTalk "1" backwards; optional rows 방글라데시에서 왔어요 and a 벵골어 card (the language is 벵골어, not 방글라데시 + 어).

## Sources (opened 2026-11-23)

- Kwon Byeong-hee 2012, "벵골어 모어 화자에게 한국어를 효율적으로 교육하기 위한 한국어와 벵골어 음운 체계 대조 연구", *한국어교육* 23(3): 1–22, abstract: https://scholar.kyobobook.co.kr/article/detail/4010047498689
- Wikipedia, "Korean phonology": https://en.wikipedia.org/wiki/Korean_phonology
- The Financial Express (UNB), 20 Feb 2024, EPS figures: https://thefinancialexpress.com.bd/trade/s-korea-expands-job-opportunities-for-bangladeshi-workers-in-construction-and-fisheries-sectors
- ITV BD, Seoul travel article (press respellings): https://www.itvbd.com/214368
- Via `hi-ko.md`, as analogies: Ahn 2009; Ngaihte & Holliday 2019.
- Local: the spec, briefs, `hi-ko.md`, `en-bn.md`, tl / zh reviews, `native/{en,es,ceb}/ko`, `target/ko`, `tools/i18n/bn/`.
