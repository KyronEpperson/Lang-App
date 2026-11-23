# Korean half: cold review (en-ko course, Korean side only)

Reviewed: 2026-11-22 · Source: built `/home/claude/korean-flashcards.html` (v2.62.2), evaluated in Playwright; `COURSES['en-ko']` and `PRACTICE_BUILTIN` dumped to JSON. Nothing in the app was edited.

## Coverage

- **Read in full:** all 641 cards (43 decks plus the empty 'My phrases'), 149 dialogues, 74 examples, 47 patterns, 36 pairs, 33 lessons (305 example rows plus tables and mistake lists), 33 checks (99 questions), 462 practice items (mc / order / fill / type), and the PAUSE sets and 32 idioms. Also WORDS_CV, MEAN and WORDS_F.
- **Checked by script:**
  - Card romanisation was diffed against `romanize()`. 87 rows differ; 5 are real (four ㅎ-policy cases and 1+1), and the rest are jamo, digits or Latin text that romanize() leaves alone.
  - Lesson example rows were diffed against `romanize()`: 305 rows, 3 differences, of which 1 is real (스물여덟, where romanize() is the one at fault).
  - Idioms against `romanize()`: no differences.
  - Key integrity: every DIALOG/EXAMPLES key matches a card front, and every LESSONS.deck, PATTERNS tag and CHECKS/PRACTICE key resolves.
  - Type-item variant lists and order items with three or more tiles.
- **No romanisation stored:** DIALOG, EXAMPLES, PATTERNS and PAIRS hold no romanisation, so there was nothing to check there. Agreement with `romanize()` is not proof, because romanize() shares the bugs in W5, so cards and lesson rows were also scanned for ㄴ-insertion spots by script (one new case: N25).
- **Sound-change drill pool:** 162 card phrases were dumped and read (W8).
- **Engine facts used:**
  - Check options and mc / fill-pick options are shuffled at render (index 0 = answer is fine), and no check has two correct options apart from the ambiguous ones listed.
  - Type and fill input ignore spaces and punctuation for Korean, so spacing variants are already accepted.
  - Order (tile) answers must match `a.join(' ')` exactly.
- **Not reviewed:** `SENTS`, `PART` / `ENDS` / `QW` / `CONN` / `COUNT` / `NUMS` (generated drills), the rules inside `pronounce()` beyond the 162-item drill pool, and the number generators (`sino()` / `native()` / `numItem()`). Wording on the English side is out of scope except where it states a Korean rule.
- **Confidence:** I am not a native speaker. Rows marked **NS** in the table need a native speaker's check before anything is changed; treat them as likely, not certain. Unmarked rows are rule-level or provable from the data itself.

## Findings

Severity: **wrong** = incorrect Korean, a wrong rule, or engine logic that outputs wrong Korean; **unnatural** = grammatical but not what a Seoul speaker says; **ambiguous-item** = a practice or check item that marks acceptable Korean as wrong, or rejects a common correct answer; **nit** = spacing, consistency, polish. **NS** = check with a native speaker.

| ID | Location | Korean | Problem | Fix | Severity | NS |
|---|---|---|---|---|---|---|
| W1 | DECKS · Café & convenience store #16 | 1+1 이에요? — rom `il peureoseu il ieyo?` | The romanisation contradicts the card's own note, which says to say 원 플러스 원 (1+1 is read as 원 플러스 원, not 일 플러스 일). It also misspells 플러스: RR is `peulleoseu` (ㄹ+ㄹ → ll). The copula is spaced off its noun. | Korean `1+1이에요?`; rom `won peulleoseu wonieyo?` | wrong |  |
| W2 | DIALOG [갑분싸] line A | 아까 내 농담 왜 아무도 안 웃어? | The tense clashes: 아까 ('earlier') with present 안 웃어. | 아까 내 농담에 왜 아무도 안 웃었어? | wrong |  |
| W3 | EXAMPLES [왜냐하면] | 왜냐하면 시간이 없어요. | 왜냐하면 needs a closing -거든요 or -기 때문이에요. The card's own note says so (왜냐하면 … 거든요 / 기 때문이에요), and the example breaks that rule. | 왜냐하면 시간이 없거든요. (or …없기 때문이에요.) | wrong |  |
| W5 | Engine · romanize() (line ~1669), used by autoPron() and the pause-screen phrases (line ~3133) | 스물여덟 → seumuryeodeol; 꽃잎 → kkochip; 색연필 → saegyeonpil; 한여름 → hanyeoreum; 십육 → sibyuk; 맛없어요 → maseopseoyo; 밟다 → balda | Language-neutral logic bugs. (1) ㄴ-insertion is missing: [스물려덜] seumullyeodeol (lesson 3's own row has it right), [꼰닙] kkonnip, [생년필] saengnyeonpil, hannyeoreum, [심뉵] simnyuk. (2) The 절음 rule for 맛/멋+없다 is missing: [마덥써요] madeopseoyo. (3) The 밟- exception is missing: bapda. This affects every user-added phrase in every course that reuses the Korean half. | Add a ㄴ-insertion rule (compound/word boundary + 이/야/여/요/유) and a 맛없-/멋없- exception, or a small exception dictionary. Then re-run the diff. | wrong |  |
| W8 | Engine · pronounce() as used by renderSoundQ ('How is this actually said?' drill); pool of 162 card phrases dumped and read | 잘 먹겠습니다 → [잘 먹겓슴니다]; 몇 화 → [멷 화]; 다섯 마리 → [다섣 마리]; 몇 살이에요 → [멷 사리에요]; 미쳤다 → [미쳗다]; 진짜 웃겨 → [진짜 욷겨]; 늦을 것 같아 → [느즐 걷 가타]; 연락할게요 → [열라칼게요]; 잠시만요 → [잠시마뇨] | The drill shows these as the correct 'how it is said' answer, but they are not what speakers say. (1) Tensification (경음화) is never applied: [먹께씀니다], [미첟따], [욷껴], [느즐 껃 가타], [열라칼께요], [멷쌀]. (2) Assimilation across a space within a phrase is skipped: 몇 화 [며톼], 다섯 마리 [다선마리]. (3) ㄴ-insertion before 요 is inconsistent: 정말요 → [정말료] is applied, but 잠시만요 → [잠시마뇨] where [잠시만뇨] is expected (NS on this point). This is shared logic, so every course inherits the drill. | Add a 경음화 rule (after ㄱ/ㄷ/ㅂ finals, after -ㄹ verb endings) and run assimilation over the whole phrase rather than word by word. Until then, filter the pool to single words whose only change is 연음 / 비음화 / ㅎ-drop / 유음화. | wrong |  |
| W7 | DECKS Introductions #1 note; LESSONS meet table (Kim이에요 · Lisa예요) + text 'Say the name out loud: if it ends in a vowel sound, use 예요'; CHECKS meet#1 | 이에요/예요 after names written in Latin letters | The choice follows the final Hangul syllable of the Korean spelling, not how the name sounds in the learner's language. Mike → 마이크예요, Bob → 밥이에요, Kate → 케이트예요. The 'say it out loud' rule gives the wrong ending for many foreign names, and each course will bring its own names (Juan, Ana, Miguel ...). | Write names in Hangul and state the rule as 'look at the last Hangul block': 마이크예요, 후안이에요, 리사예요. | wrong |  |
| U1 | DIALOG [죄송합니다] | A 늦어서 죄송합니다. / B 괜찮아요, 천천히 오세요. | 늦어서 죄송합니다 is said on arrival, but 'take your time coming' only fits someone who hasn't arrived yet. | A 죄송해요, 좀 늦을 것 같아요. / B 괜찮아요, 천천히 오세요. (or keep A and use B 괜찮아요, 저도 방금 왔어요.) | unnatural | NS |
| U2 | EXAMPLES [설레요] | 내일 여행 가서 설레요. | -아서 with a future trip reads as 'I go on the trip and (then) feel excited'. | 내일 여행 가니까 설레요. / 내일 여행이라서 너무 설레요. | unnatural | NS |
| U3 | DECKS K-pop & fan culture #14 note | 데뷔 몇 년이에요? | Not idiomatic. | 몇 년에 데뷔했어요? / 데뷔한 지 몇 년 됐어요? | unnatural | NS |
| U4 | EXAMPLES [먼저 퇴근하겠습니다]; PATTERNS #45 example; LESSONS office (수고 family); DECKS Work & office #7 note | 저 먼저 퇴근하겠습니다. 수고하세요. | Many Koreans hear 수고하세요 said up to a superior as presumptuous. The course presents it as the default when leaving while the boss stays. | Teach 먼저 들어가 보겠습니다 / 먼저 퇴근하겠습니다 alone for superiors, and keep 수고하세요 for peers and service staff. | unnatural | NS |
| U5 | PAUSE · polite | 천만에요 | Textbook-only; rarely said. | 아니에요 / 별말씀을요 (and gloss 천만에요 as 'textbook') | unnatural | NS |
| U6 | DECKS Honorifics #11 note | 할머님 — 'Used for elderly strangers too' | Elderly strangers are called 할머니 (or 어르신). 할머님 is for someone else's grandmother, or very formal speech. | Note: 할머니 for strangers; 할머님 = someone else's grandmother. | unnatural | NS |
| A1 | Engine · pracClick tiles check (`pracMatch(txt,[it.a.join(' ')],true)`) — order items | past#6 어제 친구가 왔어요; story#6 어제 친구를 만났어요; particles#8 아침에 커피를 마셔요; sentences#8 오늘 친구하고 커피를 마셔요; future#6; texting#8 잘 자 내일 봐; titles#6/#7/#8 (vocative) | Only one tile sequence is accepted, but these have natural alternatives: 친구가 어제 왔어요, 친구를 어제 만났어요, 커피를 아침에 마셔요, 친구하고 오늘 커피를 마셔요, 내일 봐, 잘 자, and 시간 있어요, 민수 씨? / 뭐 해, 오빠? (vocative at the end). The course also contradicts itself: lesson 16 and check sentences#3 teach 'who · when · …', while lessons 10/11/26 and past#6 teach time first. | Engine: let an order item carry `alts` (extra accepted sequences) or accept any permutation that appears in a whitelist. Content: add alts to the items listed, or pin the order in the prompt ('start with 어제'). | ambiguous-item |  |
| A2 | PRACTICE type items (99) — matcher (pracMatch / pracNorm) | 38 items accept 저는 …; none accept 전 …; only honorific#14 accepts bare 저 | The contractions everyone uses are rejected: 전 (= 저는), 난, 뭘 / 이건 / 이게 (accepted in only some items), and particle-less 저 학생이에요. Affected: nouns#12, nouns#14, isseoyo#12, isseoyo#14, verbbasics#12-13, verbs#12/#14, past#12-14, future#12/#14, sov#12-13, particles#12-14, negation#12-14, sentences#12/#14, want-like#12-13, numbers#12, counters#13-14, joining#14, story#12, noun-modifiers#13, cant#12-14, have-to#12-13, office#13. | Normalise before matching: 전↔저는, 난↔나는, 뭘↔뭐를, 이건↔이거는, 이게↔이거가/이것이; also accept a leading 저 without a particle. Doing this once in the engine fixes every course. | ambiguous-item |  |
| A3 | LESSONS isseoyo ('저는 학교예요 ✗'); CHECKS isseoyo#1 (집이에요 as wrong); PRACTICE isseoyo#1 (학교예요 as wrong), isseoyo#6 (distractor tile 집이에요) | 집이에요 / 학교예요 for 'I'm at home / at school' | (지금) 집이에요 / 학교예요 is everyday spoken Korean for 'I'm at home/school (now)', so items mark natural Korean as an error. | Keep 집에 있어요 as the taught form, but stop marking 집이에요 wrong: swap the distractor for 집을 있어요 / 집이 있어요. In the lesson, change ✗ to 'also heard in speech: 지금 집이에요'. | ambiguous-item | NS |
| A4 | CHECKS counters#1 ('커피 두 개 주세요' as wrong); LESSONS counters ('never use 개 for … drinks (잔)') | 커피 두 개 주세요 | At café counters 아메리카노 두 개 주세요 is completely normal. | Use a clearly wrong distractor (커피 두 명 주세요), and soften the lesson to '잔 is the textbook counter; 개 is common at cafés'. | ambiguous-item | NS |
| A5 | LESSONS food (김밥 두 개 주세요); CHECKS food#2 ('김밥 둘 주세요' as wrong); PRACTICE food#3, food#6, food#13 | 김밥 두 개 / 김밥 둘 | The native counter for gimbap is 줄 (김밥 두 줄 주세요). Ordering with a bare number (김밥 둘이요 / 김밥 둘 주세요) is also natural, so check food#2 has two acceptable answers. | Use another item for the 개 drill (만두, 삼각김밥), or teach 김밥 두 줄 and accept it in food#13. | ambiguous-item | NS |
| A6 | PRACTICE verbbasics#5 (mc '날씨가 좋다' as wrong), verbbasics#6 / #14 (distractor 좋다); LESSONS verbbasics ('먹다 is for dictionaries') | 날씨가 좋다 | The plain/exclamatory form is valid spoken Korean (와, 날씨 좋다!), and the course itself teaches 멋있다!, 미쳤다, 대박이다, 짱이다, 배고프다 (DIALOG [밥 먹으러 갈래?]) and 집에 가기 싫다. Marking 날씨가 좋다 wrong contradicts that. | Add '(polite)' to the prompts, or use 날씨가 좋다요 / 날씨가 좋아다 as the distractor. In the lesson, say 'action verbs in 다 form aren't spoken; describing verbs in 다 form are used as exclamations'. | ambiguous-item |  |
| A7 | CHECKS office#1 | You're leaving; your manager is still working → 수고하세요 (marked right) vs 수고하셨습니다 | Many speakers would say 수고하셨습니다 or 먼저 들어가 보겠습니다 to a manager, and some consider 수고하세요 to a superior rude. This conflicts with PRACTICE office#2, which reserves 수고하셨습니다 for seniors. | Change the scenario to a peer still working, or make the answer 먼저 들어가 보겠습니다. | ambiguous-item | NS |
| A8 | PRACTICE meet#12 (type 'Nice to meet you') | accepts 만나서 반가워요 / 반가워요 | Rejects 반갑습니다 / 만나서 반갑습니다, which the same lesson's '3 ways' table teaches. | Add both. | ambiguous-item |  |
| A9 | PRACTICE meet#14 (type 'How old are you?') | accepts 몇 살이에요 only | Rejects 몇 살이세요? and 나이가 어떻게 되세요? (the standard polite form). | Add both. | ambiguous-item |  |
| A10 | PRACTICE meet#13 (type 'Where are you from?') | 어디에서 왔어요 / 어디서 왔어요 | Rejects the very common honorific 어디서 오셨어요 / 어디에서 오셨어요. | Add both. | ambiguous-item |  |
| A11 | PRACTICE pronouns-questions#13 (type 'Where is it?') | 어디에 있어요 / 어디 있어요 | Rejects 어디예요?, which the cards teach as the short form. | Add 어디예요. | ambiguous-item |  |
| A12 | PRACTICE isseoyo#12, counters#13 (type 'I have (three) cat(s)') | 고양이 (세 마리) 있어요 | Rejects 고양이 (세 마리) 키워요. EXAMPLES [다섯 마리] glosses 고양이 다섯 마리 키워요 as 'I have five cats'. | Add the 키워요 variants (and 고양이를 키워요). | ambiguous-item |  |
| A13 | PRACTICE twin items with different accepted lists: verbbasics#13 vs sov#13 ('I study Korean'); nouns#13 vs pronouns-questions#12 ('What is this?') | verbbasics#13 accepts only 한국어 공부해요 / 저는 한국어 공부해요; nouns#13 accepts only 이거 / 이게 / 이건 뭐예요 | Items with the same prompt grade differently. verbbasics#13 rejects the fully marked 한국어를 공부해요, which sov#13 accepts and lesson 12 teaches. nouns#13 rejects 이것은 / 이것이 뭐예요, which pronouns-questions#12 accepts. | Make the twin lists identical (better still, let the engine share one variant list per prompt). | ambiguous-item |  |
| A14 | PRACTICE fill items (typed input is the default; the distractors only show in no-keyboard mode) and copula type items | getting-around#10 지하철역 __? (어디예요 only); sov#10 커피__ 마셔요 (를 only); meet#9 / isseoyo#11 학생__, nouns#11 의사__ (이에요 / 예요 only); verbs#10 사랑__, verbbasics#10 공부__ (해요 only); office#9 확인 __ (부탁드립니다 only); food#10 잘 __ (먹었습니다 only); story#10 어제 친구를 __ (만났어요 only); type numbers#12-14, nouns#12, past#13 (no 입니다 forms) | Typed answers that are valid Korean get rejected: 어디 있어요 / 어디에 있어요 (accepted in getting-around#12); 는 (sov#9 accepts 은, want-like#10 accepts 는); 입니다; 사랑해 / 공부해 (casual, which the course teaches); 부탁드려요; 잘 먹었어요; 봤어요 (the course teaches 보다 = meet). None of the copula type items accept 입니다, and none accept a short answer such as 스물여덟이요. Rejecting other speech levels is defensible for a 해요-first course, but only if the prompt says so. | Either add '(요-form)' to the prompts or accept the 합니다 / 해 forms. Add the listed variants. Keep particle lists consistent across twin fills. | ambiguous-item |  |
| N0 | PAUSE · saying | 말 한마디로 천 냥 빚 갚는다 | Not the standard wording of the proverb. | 말 한마디에 천 냥 빚도 갚는다 (the dictionary form; the 로 wording circulates as a variant, so confirm in 표준국어대사전) | nit | NS |
| N1 | Romanisation ㅎ policy — DECKS Survival phrases #11 `mothaeyo`, Dating deeper #6 `jalmothaesseo`, Small talk #12 `yeollakhalgeyo`, Places #13 `baekhwajeom` vs `chukahae`, `yeyakaesseoyo`, `haengbokaeyo`, lesson 4 `chuka` | 못해요 / 잘못했어 / 연락할게요 / 백화점 | Two policies are mixed. Lesson 4 says romanisation follows sound, which makes the four h-keeping spellings the outliers. Strict RR keeps h in nouns (baekhwajeom, chukha), which would make `chuka` the outlier. romanize() aspirates everywhere (baekwajeom), so it disagrees with the 백화점 card. | Pick one policy and apply it to cards and romanize() (suggest the sound-based one: motaeyo, jalmotaesseo, yeollakalgeyo, baekwajeom, or keep baekhwajeom as an RR noun exception). | nit |  |
| N2 | DECKS Hangul consonants #7 note | 시 = shi | This is a pronunciation hint, but RR (and the rest of the app) writes `si`, so learners see two spellings. | '시 = si (sounds like shee)' | nit |  |
| N3 | LESSONS sound-changes ('The romanization in this app is written the way words sound'); romanize('괜찮습니다') = gwaenchansseumnida | 학교 hakgyo, 반갑습니다 bangapseumnida | RR doesn't show tensing, so the claim is overstated. romanize() writes `ss` for the ㅎ+ㅅ case, but RR examples generally don't (gwaenchanseumnida). | Change the claim to 'mostly as it sounds (tensing isn't shown)', and check the ㅎ+ㅅ case against the official converter. | nit | NS |
| N4 | DECKS Survival phrases 2 #10/#12, Asking around #25/#26, Housing #10 | 배달 돼요? 할인 돼요? 교환 돼요? | 배달되다 / 할인되다 / 교환되다 are dictionary verbs, so the standard spelling has no space (카드 돼요 is correctly spaced). | 배달돼요? 할인돼요? 교환돼요? (or keep the space and note 이/가 is dropped) | nit | NS |
| N5 | DECKS Café #10; DIALOG [적립 되세요?] | 적립 되세요? | Spacing (적립되세요) aside, this is hyper-honorific shop speech. More typical: 적립하시겠어요? / 포인트 적립하세요? | 적립하시겠어요? (keep 적립되세요? as 'what you'll hear') | nit | NS |
| N6 | LESSONS meet ('Phone call? The person hanging up first says 안녕히 계세요') | phone goodbyes | Questionable: on the phone both sides usually say 안녕히 계세요, or 들어가세요 / 네, 들어가세요. | Drop the claim or replace it with 'on the phone: 안녕히 계세요 / 들어가세요'. | nit | NS |
| N7 | LESSONS office ('Titles (always + 님)' then 사원 without 님; 'If unsure, 선생님 or 팀장님 is a safe default') | office address | 사원 is never used as a form of address (people use name + 씨), and defaulting to 팀장님 for someone without that title can be awkward. | Note 사원 → 이름 + 씨, and change the default to 'ask a colleague, or use name + 님 in chat'. | nit | NS |
| N8 | LESSONS cant ('수영 못 해요', '오늘 운동 못 해요') | 수영 못 해요 | The lesson says ability-못하다 is written as one word, then spaces 수영 못 해요 (inability). 국립국어원 writes ability as 못하다: 수영(을) 못해요. | 수영 못해요 for ability; keep 운동 못 해요 (circumstance). | nit | NS |
| N9 | LESSONS want-like; PRACTICE want-like#4 | 안 가고 싶어요 | This is colloquial, but it means 'want to not go'. The neutral negation is 가고 싶지 않아요 / 가기 싫어요, and the mc item offers only 안 가고 싶어요. | Teach 가고 싶지 않아요 first and accept 안 가고 싶어요. | nit | NS |
| N10 | PAIRS #6; DECKS Sweet talk #7 note | 잘 자 ↔ 안녕히 주무세요 | The polite counterpart for a peer is 잘 자요. 안녕히 주무세요 is honorific (for elders), a two-level jump. | 잘 자 ↔ 잘 자요 (note 안녕히 주무세요 for elders) | nit |  |
| N11 | PAIRS #27, #35 | 내 거 할래? ↔ 제 거 할래요?; 나 먼저 갈게 ↔ 먼저 퇴근하겠습니다 | #27: a polite flirt line is odd. #35: a different verb and a different speech level, not a register pair. | #27 drop or swap for 같이 갈래? ↔ 같이 갈래요?; #35 나 먼저 갈게 ↔ 저 먼저 갈게요 | nit |  |
| N12 | DIALOG [안녕하세요] | A 안녕하세요, 처음 뵙겠습니다. / B 네, 안녕하세요! 반가워요. | Slight register drop between A's 합쇼체 and B's 해요체. | B 네, 안녕하세요! 반갑습니다. | nit |  |
| N13 | DIALOG [몇 살이에요?] | 실례지만 몇 살이에요? | 실례지만 sits better with 나이가 어떻게 되세요? | 실례지만 나이가 어떻게 되세요? | nit |  |
| N14 | EXAMPLES [하지만] | 어렵지만 재밌어요. | The example for the card 하지만 doesn't contain 하지만. | 어려워요. 하지만 재밌어요. | nit |  |
| N15 | DECKS Social media & slang #8; DIALOG [존맛탱] | 존맛탱 | Vulgar origin (존 < 좆). The note only says 'very casual', and every course will reuse it. | Mark it vulgar in the Korean-side metadata (a register tag) so each course's note can warn. | nit |  |
| N16 | DECKS Work & office #16; Drinks #16 | 잘 부탁드립니다 (업무); 건배 vs 짠 | Non-Korean text in the Korean field: TTS reads '(업무)' and 'vs', and romanize() outputs '(eommu)'. | Move the parenthetical to the note; front = 건배 / 짠. | nit |  |
| N17 | DECKS Activities #8 | 달려요 — 'I run' | As a hobby statement, 뛰어요 / 달리기해요 / 러닝해요 sound more natural. | 달리기해요 (note 달려요 = run, literally) | nit | NS |
| N18 | DECKS Food & ordering #5; PRACTICE food#8 | 맵지 않게 해 주세요 | Correct, but 안 맵게 해 주세요 is what people usually say. The order item builds only the 맵지 않게 form. | Teach 안 맵게 해 주세요 as the main form. | nit | NS |
| N19 | PRACTICE compare#8 (order 'Which is better?') | 뭐가 더 좋아요? | When choosing between items in front of you, 어느 게 더 좋아요? is more natural. | Accept or teach 어느 게 더 좋아요? | nit |  |
| N20 | PAUSE · saying | 괜찮아, 잘 될 거야 | Spacing: 잘되다 is one word. | 괜찮아, 잘될 거야 | nit |  |
| N21 | LESSONS polite ('Say it 3 ways': 죄송합니다 \| 미안해요 \| 미안해) | 죄송합니다 as the formal of 미안해요 | The formal level of 미안해요 is 미안합니다. 죄송합니다 is a different, humbler verb. | 미안합니다 \| 미안해요 \| 미안해, with a note that 죄송합니다 is the humbler choice. | nit |  |
| N22 | PRACTICE polite#14, getting-around#13, compare#14 | accepted lists | Small missing variants: 아냐 괜찮아 / 괜찮아; 직진하세요 (taught on the 직진 card); 좀 더 주세요. | Add them. | nit |  |
| N23 | PRACTICE want-like#7 (distractor tile 한국을) | 한국을 가고 싶어요 | 을/를 on a destination is common in speech (학교를 가요), so the 'wrong' tile is acceptable colloquial Korean. | Use a different distractor (한국이). | nit | NS |
| N24 | DECKS Numbers in the wild #9 | 2호선 — rom `iho seon` | Romanised as two words but written as one in Hangul. | `ihoseon` | nit |  |
| N25 | LESSONS getting-around row | 다음 역은 강남역입니다 — rom `daeum yeogeun gangnamyeogimnida` | 강남역 is usually said [강남녁] (ㄴ-insertion, like 지하철역 [지하철력], which the card writes jihacheollyeok). The sound-based policy gives gangnamnyeogimnida, so the two 역 words are handled inconsistently. | `gangnamnyeogimnida` (or note the official station name Gangnam) | nit | NS |

## Card romanisation: script diff

Of the 87 card rows that differ from `romanize()`, five are real: the four ㅎ-policy rows below plus the 1+1 card, and one lesson row (스물여덟) is added for completeness. The other 82 differences are jamo-only cards (ㅏ, ㄱ…), digits (4,500원, 3층…) and Latin text (TMI, ㅋㅋㅋ), which romanize() deliberately passes through.

| Card | Card rom | romanize() | Verdict |
|---|---|---|---|
| Survival phrases #11 한국어 잘 못해요 | mothaeyo | motaeyo | policy (N1) |
| Dating deeper #6 잘못했어 | jalmothaesseo | jalmotaesseo | policy (N1) |
| Small talk #12 연락할게요 | yeollakhalgeyo | yeollakalgeyo | policy (N1) |
| Places #13 백화점 | baekhwajeom | baekwajeom | card = strict RR noun rule; romanize() aspirates (N1) |
| (lesson row) meet 스물여덟 살이에요 | seumullyeodeol | seumuryeodeol | romanize() bug (W5) |
| Café #16 1+1 이에요? | il peureoseu il ieyo? | (not romanised) | card wrong (W1) |

## Summary

- **Findings:** 52. **wrong** 6 · **unnatural** 6 · **ambiguous-item** 14 · **nit** 26. Of these, 22 are marked 'check with a native speaker'.
- **English-specific items:** 6 groups, listed separately and not included in the severity counts.
- **Overall:** the Korean is clean. Spelling, particles, conjugation and 해요-style consistency hold up across all 641 cards, and the card romanisation matches RR almost everywhere. The risk lies in a few systemic grading rules, a handful of content slips, and the US / English / personal-name slots that would repeat in every course.

### The 15 fixes that matter most (ranked by how far they spread)

1. **A1**: Order items accept one tile sequence only; fix once in the engine (alts) and in the listed items.
2. **A2**: Matcher rejects 전 / 난 / bare 저 and accepts 뭘 / 이건 / 이게 only in some items; normalise once in pracMatch.
3. **E1–E3**: 미국 / 영어 / 키이: make country, language and learner name per-course slots before the Korean half is shared.
4. **W7**: 이에요/예요 rule for foreign names ('say it out loud') gives wrong endings; base it on the Hangul spelling.
5. **W5**: romanize(): missing ㄴ-insertion and 맛없어요 / 밟다 exceptions; this logic generates romanisation for user phrases and pause sets in every course.
6. **A3**: 집이에요 / 학교예요 taught and graded as wrong, though it is everyday Korean.
7. **W1**: 1+1 이에요?: romanisation contradicts its own note; 플러스 = peulleoseu.
8. **W3**: 왜냐하면 시간이 없어요: needs -거든요 / -기 때문이에요.
9. **W2**: 갑분싸 dialogue: 아까 … 안 웃어 → 안 웃었어.
10. **A6**: 날씨가 좋다 graded wrong while the course teaches 멋있다! / 배고프다 / 싫다.
11. **W8**: Sound-change drill presents pronunciations without tensification and cross-word assimilation (먹겓슴니다, 멷 화) as the correct answer.
12. **A8–A14**: Type and fill items reject common correct answers: 반갑습니다, 몇 살이세요, 오셨어요, 어디예요, 키워요, 입니다 / 해 forms, and twin items graded differently (한국어를 공부해요).
13. **A4 / A5**: 개 for drinks graded wrong; gimbap counter should be 줄 (and 김밥 둘 is fine).
14. **U4 / A7**: 수고하세요 to a superior (check office#1, PATTERNS #45, EXAMPLES, lesson 33). Check with a native speaker.
15. **U1**: 늦어서 죄송합니다 / 천천히 오세요 mismatch.

### English-specific items on the Korean side (not counted above)

| # | Item | Where | Recommendation |
|---|---|---|---|
| E1 | 미국 / US origin | DECKS Introductions #5 (+ note listing 영국/캐나다/멕시코), Family & people #10 note (미국 사람); DIALOG [어디에서 왔어요?] '미국에서 왔어요. 오클라호마요.'; LESSONS meet script, particles (미국에서 왔어요); PATTERNS #5 example; PRACTICE meet#6, particles#3 | Make the country a per-course slot ({country}에서 왔어요: 스페인 / 필리핀 / 중국 / 일본 / 멕시코 …). Oklahoma is far too specific; use a slot or drop it. |
| E2 | 영어 / English | DECKS Survival phrases 2 #7 + DIALOG [영어 할 수 있어요?]; PATTERNS #40, LESSONS requests, PRACTICE requests#2 (혹시 영어 메뉴 있어요?) | 'Can you speak English?' should be a per-course slot ({language} 할 수 있어요?). Keep 영어 메뉴: in Korea an English menu is still realistically the only foreign-language menu for most learners. A note could add 중국어/일본어 메뉴 for zh/ja. |
| E3 | Hard-coded personal name Kii / 키이 | LESSONS meet script '저는 Kii예요' (Latin letters, rom 'Kii-yeyo'); DIALOG [이름이 뭐예요?] '저는 키이예요'; LESSONS office email '마케팅팀 키이입니다', '키이 드림'; PRACTICE office#5 (키이 드림), office#8 (키이입니다 / 키이님) | A hard-coded personal name, spelled two ways, and 키이 is an odd transcription. Replace it with a neutral Korean-script name already used elsewhere (민수, 지은), or a per-course learner-name slot. |
| E4 | English names Lisa / Kim in Latin script | DECKS Introductions #1 note; LESSONS meet table; CHECKS meet#1 (리사) | Use Hangul names, and fix the rule (see W7). |
| E5 | Korean items whose notes depend on English | 화이팅 ('from fighting'), 콘센트 ('concentric plug'), 헬스장 ('Health + 장'), 레전드 / 퍼센트 ('From English'), ㄹㅇ = 리얼, TMI, 오케이 콜 ('call'), 아메리카노, ㅡ 'No English match', 서울 vs 소울 (pronunciation tip #15; distractor in hangul#5/#13) | The Korean words are ordinary Korean and should stay. Only the etymology notes assume English, so per-course notes can say 'from English' without assuming the learner speaks it. 서울/소울 still works as a minimal pair for everyone. |
| E6 | Not English-specific (keep) | 홍대, 강남역, 명동, 티머니, Starbucks sizes 톨/그란데/벤티, 바나나 (hangul#11), 피자/커피/토마토 (WORDS_CV) | Korea-real or international; fine for every course. |

Artifacts: `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/koreview/` (dump.json, cards.txt, dialog.txt, examples.txt, checks.txt, lessons.txt, practice.txt, romdiff.txt, dump3.json).
