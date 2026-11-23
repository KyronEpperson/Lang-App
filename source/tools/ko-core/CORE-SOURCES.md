# Korean core words, Flirting words, Compliments: sources, order, skips

Writer: KO core, 2026-11-23. Delivered file: `tools/ko-core.json` (decks, group, desc, examples, dialog). The writer wrote every meaning, note, example and dialogue. Sources were used only to choose and order words.

## 1. Frequency source actually opened

**Basis.** National Institute of Korean Language (국립국어원, then 국립국어연구원), *한국어 학습용 어휘 목록* (Korean Learning Vocabulary List), announced 2003.
- It has 5,965 words graded A/B/C. Each word has a frequency rank from the institute's 2002 *현대 국어 사용 빈도 조사* (survey of modern Korean usage frequency). Particles are excluded.
- **Official page (opened):** <https://www.korean.go.kr/front_eng/down/down_02V.do?etc_seq=70>. It describes the file (fields: frequency rank, word, POS, gloss, grade) and gives the licence: **KOGL Type 1 (공공누리 제1유형), free use with credit to the source.**
- The official .txt/.xls could not be downloaded here, because Bash has no network access in this session.

**Where the ranks were read.** A numbered copy on SlideShare, "6000 most common korean words": <https://www.slideshare.net/slideshow/6000-most-common-korean-words/45611105>.
- The copy credits topikguide.com's "Korean Vocabulary Frequency List". It does not state its method and **gives no licence**. Only rank numbers were taken from it; no glosses or text were copied.
- **Why it is taken to be the NIKL order:** its rows 1–40 read 것, 하다, 있다, 수, 하다, 나, 없다, 않다, 사람, 우리, 그, 아니다, 보다, 거, 보다, 같다, 주다, 대하다, 가다, 년, 한, 말, 일, 이, 말하다, 위하다, 그러나, 오다, 알다, 씨, 그렇다, 크다, 일, 사회, 많다, 안, 좋다, 더, 받다, 그것. That is the writer's recollection of the NIKL frequency order (homonyms are repeated, and there are no particles). This could not be confirmed against the official file, so treat the copy as **unattributed and consistent with NIKL**.
- **Gaps:** the visible text stops at row 2,653 and has missing rows. Very common words such as 되다, 때, 회사, 듣다 and 기다리다 are absent.

**How ranks were read.** The page was opened with a fetch tool that answers through a summarising model, asking for the rank of each word.
- A second, separate request for 15 words (생활, 웃다, 바다, 버리다, 기분, 컴퓨터, 걸리다, 지내다, 학생, 모습, 짓다, 꿈, 가르치다, 의사, 태어나다) returned the same numbers. That shows the lookup is **repeatable**, not that every rank is the right sense.
- **Homographs:** a third request listed every row of each homograph with the copy's English gloss, and ranks were corrected to the card's sense:
  - Changed to the row for the card's sense: 예 (yes) 402 → 537; 자 (right, then) 782 → 1125; 약 (medicine) 603 → 1758; 나다 (come out) 90 → 285.
  - Changed to judgement because no row has the card's sense: 내 (my; 412 is "inside"), 저 (I; 47 is glossed "that"), 점 (point; 95 is glossed "store"), 낫다 (recover; 1493 is "superior"), 달다 (sweet; 1639 is "attach"), 표 (ticket; 1810 is "marker"), 이 / 그 / 저 (24 is 이 "person").
  - Kept as read: 그 at row 11 (the copy glosses it "He"), 안 at 36 ("not").
- **Written-corpus bias:** the 2002 survey leans on written text. That is why 그 (he) and 그녀 (she), which are almost never spoken, rank 3rd and 7th in Top pronouns, and why 그러나 and 즉 lead the linking adverbs. Their notes say "in writing". The lead may prefer to move them down by hand.
- The full rank table is in the appendix (S = rank in the copy, J = writer's estimate).

**Could not be opened** (tried 2026-11-23):
- en.wiktionary `Wiktionary:Frequency_lists/Korean_5800`: not on the fetch allow-list.
- ko.wiktionary `부록:자주 쓰이는 한국어 낱말 5800`: not found.
- All direct downloads from Bash: the proxy refused wiktionary.org.

## 2. How each deck is ordered

| Deck | Cards | Order |
|---|---|---|
| Top nouns | 100 | Rank from the copy for 90. **Judgement** for 10: 때, 한국, 회사, 점, 딸, 뜻, 핸드폰, 동네, 표, 강아지 |
| Top verbs | 81 | Rank from the copy for 72. **Judgement** for 9: 되다, 들다, 들어가다, 듣다, 돌아오다, 기다리다, 돕다, 전화하다, 낫다 |
| Top adjectives | 61 | Rank from the copy for 46. **Judgement** for 15: 따뜻하다, 뜨겁다, 친절하다, 맵다, 달다, 느리다, 더럽다, 시끄럽다, 하얗다, 짜다, 부럽다, 빨갛다, 배부르다, 재미없다, 맛없다 |
| Top adverbs | 55 | Rank from the copy for 46. **Judgement** for 9: 또, 어떻게, 나중에, 원래, 늦게, 되게, 금방, 진짜로, 방금 |
| Top pronouns | 40 | Rank from the copy for 23. **Judgement** for 17, mostly spoken forms the list lacks: 저, 제, 거기, 내, 아무도, 저거, 아무것도, 뭔가, 누군가, 저것, 이분, 얘, 걔, 그쪽, 저분, 쟤, 어딘가 |
| Top particles | 23 | **Judgement throughout.** The NIKL list excludes particles. They are ordered by how early and how often a learner meets each one. |
| Top connectors | 27 | The 17 connective endings come first, ordered **by judgement**: endings are far more frequent than linking adverbs, and -고 and -아서 are the most common. The 10 linking adverbs follow: 그러나, 즉, 그러니까 and 그렇지만 by rank from the copy, and **judgement** for 근데, 따라서, 또는, 그렇다면, 그러다가, 게다가. |
| Top interjections | 26 | Rank from the copy for 7 (아, 어, 응, 자, 음, 글쎄, 어머). **Judgement** for 19: spoken, slang and sound words are not in the list. |
| Top words | 39 | Rank from the copy for 21. The slash card 이런 / 그런 / 저런 uses the rank of 그런; 한, 두, 세, 네 uses the rank of 한. **Judgement** for 18: 이 / 그 / 저, number forms, weekdays, 새벽, 그저께, 모레, 지난주, 지난, 아뇨, 맞아요, 안녕, 천, 영 / 공. |
| Top counters | 20 | **Judgement:** most useful in daily life first. |
| Flirting words | 64 | **Judgement**, by layer: 25 single words, then phrases grouped by the word they come from, then moves and replies. |
| Compliments | 33 | **Judgement**, by topic as in the plan: food, skill, character, looks, home, children, things, the learner, praising superiors, then replies. |

## 3. Fitting Korean, not English (brief rule 2)

- **Top prepositions → `Top particles`.** Korean uses postpositional particles. Each note gives what the particle attaches to and its vowel or consonant variant.
- **Top conjunctions → `Top connectors`.** Most Korean "and / but / because / if" are verb endings. Each ending is shown attached to a real verb (먹고, 비싸지만, 가서, 가면), so `romanize()` can read it and the learner sees it in use. The ending's name is in the meaning, and the variant rule is in the note.
- **Top adjectives are descriptive verbs.** Each note gives the 해요 form, the form before a noun (-(으)ㄴ) and the irregular class.
- **Top verbs.** The note gives the 해요 form and flags irregular verbs:
  - ㄷ: 듣다, 걷다, 묻다
  - ㅂ: 돕다
  - 르: 부르다, 고르다, 오르다
  - ㅡ: 쓰다, 끄다
  - ㅅ: 짓다, 낫다
  - ㄹ-drop is noted too: 살다, 만들다, 열다, 팔다, 울다, 들다.
  - ㅎ irregulars are all descriptive verbs, so they are in Top adjectives (그렇다, 어떻다, 이렇다, colour words).
- **Top pronouns** shows that names and titles replace "you": 씨, 그쪽, 여러분 and 당신, with notes.
- **Top counters** is the extra deck. It holds only counters that are not in the course's Counters deck.
- **Top words** holds:
  - determiners (이 / 그 / 저, 어느, 무슨, 어떤, 다른, 새, 모든, 여러, 몇, 첫)
  - number forms before counters (한, 두, 세, 네; 스무)
  - native numbers 11–50, 백, 천 and zero
  - the weekdays the course lacks, and time words
  - yes / no forms.

## 4. Skipped because the course already teaches them

**How the check works.** Cards were compared against `tools/halves/target/ko/cards.jsonl` (641 cards), by exact text and by each part of a slash or comma card (`위 / 아래` → 위, 아래), with ?!.~ and spaces ignored. A dictionary form was also skipped when the course has that verb **alone** as a polite card (해요, -세요, -(으)ㄹ게요 or past). Verbs that appear only inside a longer phrase card were **kept** (듣다 in 음악 들어요, 읽다 in 책 읽어요, 만나다 in 친구 만나요, 찍다 in 사진 찍어요, 타다 in 자전거 타요), as the Spanish course does. The script checked every skip below against the course file: all 176 entries are real cards.

**Top nouns (54)**
- 사람, 친구, 가족, 선생님, 남자, 여자, 엄마, 아빠, 동생: already taught in Family & people.
- 집, 학교, 병원, 은행, 식당, 시장, 공원, 화장실, 도서관: already taught in Places & buildings.
- 물, 밥, 고기: already taught in Food & ordering.
- 오늘, 내일, 어제, 아침, 점심, 저녁: already taught in Time & days.
- 위, 아래, 앞, 뒤, 옆, 안 (inside), 밖, 사이, 근처, 층: already taught in Position & direction words.
- 취미, 운동, 요리, 여행: already taught in Hobbies.
- 영화, 드라마, 뉴스: already taught in TV & entertainment.
- 커피, 차, 우유, 맥주: already taught in Drinks. 차 (tea) also blocks 차 (car), so the deck uses 자동차.
- 김치, 빵, 과일, 계란: already taught in Food words.
- 손님: already taught in Honorifics.
- 사실: already taught in Connectors.

**Top verbs (36)**
- 이다 (이에요 / 예요), 있다, 하다, 가다, 오다, 먹다, 마시다, 보다, 좋아하다, 알다, 사랑하다, 주다 (주세요): already taught in Core verbs.
- 모르다 (몰라요): already taught in Survival phrases 2.
- 운동하다, 공부하다, 일하다, 쉬다, 놀다, 산책하다, 수영하다, 달리다, 요리하다, 청소하다, 쇼핑하다, 게임하다: already taught in Activities.
- 드시다, 주무시다, 계시다, 말씀하시다, 앉다 (앉으세요), 들어오다 (들어오세요): already taught in Honorifics.
- 돌아가다 (돌아가세요): already taught in Position & direction words.
- 화나다 (화났어요), 놀라다 (놀랐어요), 설레다 (설레요): already taught in Weather & feelings.
- 연락하다 (연락할게요): already taught in Small talk.

**Top adjectives (21)**
- 좋다, 나쁘다, 크다, 작다, 많다, 비싸다, 싸다, 덥다, 춥다, 바쁘다, 재미있다, 힘들다: already taught in Adjectives.
- 맛있다, 배고프다: already taught in Food & ordering.
- 피곤하다, 행복하다, 슬프다, 심심하다: already taught in Weather & feelings.
- 멀다, 가깝다: already taught in Position & direction words.
- 괜찮다: already taught in Survival phrases.

**Top adverbs (4)**
- 먼저: already taught in Connectors.
- 매일, 지금: already taught in Time & days.
- 진짜: already taught in K-drama phrases (진짜?).

**Top pronouns (4)**
- 여기, 저기: already taught in Directions & transport.
- 언제: already taught in Time & days.
- 네 (your): blocked by 네 (yes) in `네 / 아니요`. It is mentioned in the note on 너.

**Top particles (9)**
- 은 / 는, 이 / 가, 을 / 를, 에, 에서, 도, 의, 하고 / 와 / 과, 만: already taught in Particles.
- (으)로 and 랑 exist only as lesson pattern cards, not deck cards, so they are included.

**Top connectors (12, plus 먼저 and 사실 counted above)**
- 그리고, 그래서, 그런데, 하지만, 그다음에, 마지막으로, 왜냐하면, 아니면, 그러면 / 그럼, 아무튼, 예를 들면, 그래도: already taught in Connectors.

**Top interjections (10)**
- 대박, 헐, 아이고, 어떡해, 화이팅: already taught in K-drama phrases.
- 야: already taught in Hanging out (야!).
- 그래: already taught in Casual texting.
- 저기요: already taught in Survival phrases 2.
- 정말요: already taught in Small talk.
- 인정: already taught in Hype & cool.

**Top words (10 cards, 26 words)**
- 네 / 아니요: already taught in Survival phrases.
- 하나 … 열 and 일 … 십 (5 cards): already taught in Numbers.
- 월요일, 금요일, 토요일 / 일요일: already taught in Time & days.
- 만 (10,000): blocked by the particle 만 card.

**Top counters (16)**
- 개, 명, 잔, 병, 마리, 권, 장, 살, 시간, 번, 달, 이틀, 그릇, 봉지, 켤레: already taught in Counters.
- 층: already taught in Position & direction words.

**Total: 176 skip entries** (층 is counted in two decks).

**Flirting words and Compliments.** Every Sweet talk, Cute things to say, Flirting and Dating deeper card was checked. None is repeated, including 귀여워, 예뻐, 잘생겼어, 오늘 예쁘네요, 눈이 너무 예뻐요, 웃는 게 너무 귀여워요, 네 웃음소리가 좋아 and 너 되게 다정해. The phrases in the course's `compliment` quick-phrase set (a course.json pause set, not cards) were avoided too: 멋져요, 최고예요, 한국어 잘하시네요, 잘 어울려요, 목소리 좋아요 and the rest. 아니에요 and 별말씀을요 appear in the course only inside dialogues and the polite pause set, never as cards, so they are in Compliments as the task asks.

## 5. Homographs and near-duplicates (kept on purpose; the merger should look)

**Policy.** A word that is spelled like part of a slash or comma course card is **kept when it is a different word**. A word is skipped when it is the same word, even if it means a different thing; that is why 차 (car) was dropped next to 차 (tea). Only 멋있다 is the same word, and the task names it.

| Card | Deck | Looks like | Why kept |
|---|---|---|---|
| 일 (work) | Top nouns | 일 (one) in `일, 이, 삼, 사, 오` | Different word; noun rank 23 |
| 안 (not) | Top adverbs | 안 (inside) in `안 / 밖` | Different word; short negation is essential |
| 와 (wow) | Top interjections | particle 와 in `하고 / 와 / 과` | Different word |
| 오 (oh!) | Top interjections | 오 (five) in `일, 이, 삼, 사, 오` | Different word |
| 멋있다 | Flirting words | `멋있다!` (Hype & cool) | The task names 멋있다. **If the release check ignores "!", drop this card.** |
| 정말 | Top adverbs | `정말요?` (Small talk) | The adverb vs the "really?" reply; 진짜 was skipped because `진짜?` matches it exactly |
| 천천히 | Top adverbs | `천천히요` (Survival phrases 2) | The adverb vs the one-word request |
| 나오다 | Top verbs | `나와` (Hanging out) | A casual imperative, not a 해요 card |
| 밥 먹었어요? | Flirting words | `밥 먹었어?` (Sweet talk) and course.json `pairs` | The polite form, which the task names as the indirect-flirting line |

Kept out of the core decks so they appear only in Flirting words: 예쁘다, 귀엽다, 잘생기다, 멋있다, 아름답다, 똑똑하다, 착하다, 다정하다, 매력, 미소, 눈 (eye; also snow), 목소리, 웃음, 성격, 분위기.

## 6. Romanisation

Every romanisation was generated by the app's own `romanize()`, run in `korean-flashcards.html` with Playwright, and pasted unchanged. The validator runs it again and compares every card. **Outputs the writer believes are wrong or questionable (not fixed):**
- 첫인상 → `cheosinsang`, and 첫인상이 좋았어요 → `cheosinsangi joasseoyo`. The standard pronunciation is [처딘상], so RR should be `cheodinsang`. The tool links the final ㅅ as s and does not apply 절음 (ㅅ → ㄷ before a separate morpheme).
- Commas are dropped:
  - 한, 두, 세, 네 → `han du se ne`
  - 서른, 마흔, 쉰 → `seoreun maheun swin`
  - 열하나, 열둘 → `yeolhana yeoldul`
  - 에이, 농담이죠? → `ei nongdamijyo?`
  - 좋아요, 언제 만날까요?, 좋은 분인데, 친구로 지내고 싶어요 and 아니에요, 아직 멀었어요: same problem.
  - This is cosmetic, but the reader loses the pause.
- 일 년 → `il nyeon`. It is spoken [일련], so `il lyeon` is arguable. The space makes RR ambiguous.
- 별말씀을요 → `byeolmalsseumeullyo`. This applies ㄴ-insertion and ㄹ ([별말쓰믈료]). It is probably right, but needs a native check.

## 7. Examples and dialogues

**Counts.** 201 example rows:

| Deck | Cards with an example |
|---|---|
| Top verbs | 52 / 81 |
| Top adjectives | 34 / 61 |
| Top adverbs | 38 / 55 |
| Top particles | 16 / 23 |
| Top connectors | 20 / 27 |
| Top pronouns | 40 / 40 |

There are 52 dialogues: all 26 interjections, 17 Flirting words cards and 9 Compliments cards.

**Register.** Examples are short 해요-style sentences.
- 그 and 그녀 are the exceptions: their examples are in written -다 style, because neither word is spoken, and the gloss says so.
- Casual examples (나, 너, 내, 쟤, 걔) are marked "(casual)".

**Words in examples and dialogues that the course does not teach as cards**, kept because they are everyday words:
- 우산 (three times), 벌레 (으악), 쏟다 (앗), 부딪치다 (아야), 월급 (오)
- 떡볶이 and 국 (both are in Food words)
- place names 명동 and 남산타워
- BTS

**Flirting outcomes.**
- One exchange ends in a yes: 같이 밥 먹을래요? → 좋아요, 언제 만날까요?
- Three end in a gracious no: 연락해도 돼요?, 다음에 또 볼 수 있어요?, 제가 커피 살게요.
- 라면 먹고 갈래요? is marked as a joke line. Its note says the film *봄날은 간다* (One Fine Spring Day, 2001) has 라면 먹을래요? and that the meme version means an invitation inside. In its dialogue the listener laughs it off.

**Groups.** The nine core decks and Top counters use the new group `Core words`. Flirting words and Compliments use the existing group `Social` (ko.grp.social).

## Appendix: rank of every ranked card, in deck order

S = rank in the SlideShare copy of the NIKL list. J = writer's estimate (not found, or the found row is another sense). J(order) = a connective ending, ordered by judgement.

**Top nouns**: 것 S1, 수 S4, 거 S14, 말 S22, 일 S23, 때 J25, 문제 S44, 속 S51, 중 S56, 생각 S64, 소리 S70, 정도 S76, 아이 S83, 시간 S86, 어머니 S92, 다음 S98, 한국 J100, 곳 S101, 세계 S105, 돈 S124, 날 S127, 마음 S132, 후 S133, 아버지 S136, 몸 S139, 얼굴 S140, 모습 S145, 길 S154, 생활 S155, 방법 S159, 처음 S163, 손 S164, 이야기 S176, 회사 J180, 내용 S190, 책 S192, 점 J200, 나라 S203, 학생 S215, 이름 S218, 이유 S225, 남편 S230, 밤 S248, 컴퓨터 S254, 머리 S260, 아들 S266, 방 S286, 끝 S298, 하늘 S309, 사랑 S334, 전화 S335, 맛 S347, 음식 S352, 아내 S365, 나이 S380, 딸 J400, 산 S414, 문 S418, 노래 S436, 바다 S437, 기분 S469, 옷 S472, 꿈 S477, 물건 S499, 경험 S520, 비 S526, 고향 S527, 아기 S546, 아저씨 S547, 달 S551, 마지막 S556, 건강 S574, 버스 S644, 사진 S652, 뜻 J700, 자동차 S714, 반 S750, 가격 S804, 핸드폰 J900, 동네 J900, 영어 S966, 질문 S1013, 부모님 S1027, 가게 S1057, 날씨 S1138, 의사 S1140, 대답 S1280, 시작 S1281, 숙제 S1434, 표 J1500, 강아지 J1500, 선물 S1531, 지하철 S1543, 주말 S1681, 생일 S1707, 고양이 S1730, 약 S1758, 아줌마 S2096, 주 S2238, 한국어 S2288
**Top verbs**: 없다 S7, 되다 J20, 말하다 S25, 받다 S39, 나오다 S42, 살다 S46, 생각하다 S49, 만들다 S52, 싶다 S79, 보이다 S80, 가지다 S81, 지나다 S84, 들다 J100, 버리다 S106, 시작하다 S115, 들어가다 J120, 놓다 S134, 만나다 S147, 내다 S148, 쓰다 S150, 듣다 J150, 찾다 S170, 나가다 S175, 사다 S178, 잡다 S181, 서다 S185, 읽다 S188, 일어나다 S193, 넣다 S196, 느끼다 S199, 부르다 S204, 죽다 S208, 내리다 S220, 짓다 S224, 사용하다 S229, 타다 S234, 보내다 S239, 다니다 S256, 열다 S259, 돌아오다 J260, 묻다 S261, 남다 S262, 나다 S285, 웃다 S291, 기다리다 J300, 입다 S317, 끝나다 S336, 걸리다 S339, 오르다 S351, 믿다 S382, 바꾸다 S383, 배우다 S391, 돕다 J400, 이야기하다 S481, 자다 S483, 걷다 S486, 울다 S530, 지내다 S533, 팔다 S584, 태어나다 S610, 가르치다 S624, 시키다 S786, 원하다 S809, 잊다 S832, 노력하다 S843, 씻다 S845, 싸우다 S896, 전화하다 J900, 준비하다 S983, 결혼하다 S1002, 찍다 S1050, 도착하다 S1150, 빌리다 S1158, 고르다 S1320, 낫다 J1600, 기억하다 S1663, 닫다 S1705, 출발하다 S1726, 켜다 S2103, 끄다 S2164, 좋아지다 S2949
**Top adjectives**: 같다 S16, 그렇다 S31, 어떻다 S65, 이렇다 S91, 다르다 S144, 새롭다 S160, 중요하다 S197, 어렵다 S200, 쉽다 S223, 필요하다 S226, 높다 S249, 길다 S344, 젊다 S471, 아프다 S524, 적다 S525, 빠르다 S544, 넓다 S567, 이상하다 S656, 비슷하다 S684, 짧다 S771, 고맙다 S772, 따뜻하다 J800, 낮다 S869, 즐겁다 S891, 무섭다 S931, 가볍다 S1051, 건강하다 S1142, 밝다 S1165, 편하다 S1276, 깨끗하다 S1297, 어둡다 S1301, 미안하다 S1308, 유명하다 S1416, 기쁘다 S1433, 무겁다 S1464, 특별하다 S1490, 뜨겁다 J1500, 친절하다 J1500, 좁다 S1542, 불편하다 S1589, 시원하다 S1616, 반갑다 S1631, 차갑다 S1792, 맵다 J1800, 달다 J1800, 느리다 J2000, 더럽다 J2000, 시끄럽다 J2000, 하얗다 J2000, 짜다 J2200, 조용하다 S2260, 부럽다 J2500, 빨갛다 J2500, 배부르다 J2600, 재미없다 J2600, 노랗다 S2656, 맛없다 J2700, 까맣다 S2777, 외롭다 S2819, 파랗다 S2954, 귀찮다 S3067
**Top adverbs**: 안 S36, 더 S38, 잘 S58, 또 J60, 어떻게 J70, 다시 S71, 다 S77, 좀 S78, 함께 S82, 많이 S85, 가장 S112, 바로 S116, 모두 S129, 왜 S141, 특히 S171, 아직 S180, 같이 S182, 못 S186, 너무 S202, 이미 S209, 아주 S246, 그냥 S271, 거의 S274, 곧 S275, 서로 S279, 정말 S313, 혼자 S329, 이제 S331, 꼭 S354, 요즘 S356, 계속 S362, 갑자기 S424, 전혀 S443, 빨리 S509, 훨씬 S571, 열심히 S587, 자주 S600, 벌써 S612, 제일 S657, 아마 S659, 조금 S662, 항상 S678, 나중에 J700, 별로 S719, 가끔 S767, 일찍 S1048, 원래 J1100, 늦게 J1200, 보통 S1226, 혹시 S1258, 되게 J1300, 금방 J1300, 진짜로 J1400, 천천히 S1482, 방금 J1500
**Top pronouns**: 나 S6, 우리 S10, 그 S11, 씨 S30, 그것 S40, 저 J50, 그녀 S59, 제 J60, 자신 S61, 너 S87, 뭐 S94, 누구 S100, 자기 S111, 무엇 S119, 그거 S123, 어디 S138, 이것 S151, 당신 S194, 거기 J200, 이거 S282, 내 J400, 아무 S672, 아무도 J800, 저거 J900, 아무것도 J900, 뭔가 J900, 저희 S1101, 여러분 S1145, 누군가 J1300, 저것 J1500, 이분 J1500, 얘 J1600, 이쪽 S1647, 걔 J1650, 그쪽 J1700, 저쪽 S1761, 저분 J1800, 쟤 J1900, 어딘가 J2000, 그분 S2340
**Top connectors**: 먹고 J(order), 가서 J(order), 피곤해서 J(order), 가면 J(order), 바쁜데 J(order), 비싸지만 J(order), 갈 때 J(order), 비가 오니까 J(order), 비싸도 J(order), 가려고 J(order), 걸으면서 J(order), 먹으러 J(order), 가다가 J(order), 자거나 J(order), 먹은 후에 J(order), 자기 전에 J(order), 도착하자마자 J(order), 그러나 S27, 즉 S240, 근데 J300, 따라서 J400, 또는 J600, 그러니까 S705, 그렇지만 S993, 그렇다면 J1200, 그러다가 J1400, 게다가 J1500
**Top interjections**: 아 S267, 어 S396, 와 J500, 오 J700, 응 S985, 자 S1125, 음 S1311, 우와 J1500, 여보세요 J1700, 글쎄 S1716, 에이 J1800, 세상에 J2000, 휴 J2500, 아야 J2600, 에휴 J2600, 어머 S2634, 헉 J2700, 앗 J2700, 아차 J2800, 깜짝이야 J2800, 아이참 J2900, 아싸 J2900, 쉿 J2900, 으악 J2900, 짜잔 J3000, 웩 J3000
**Top words**: 이 / 그 / 저 J20, 한, 두, 세, 네 S21, 이런 / 그런 / 저런 S45, 어떤 S57, 다른 S72, 여러 S102, 어느 S117, 모든 S121, 이번 S153, 몇 S165, 무슨 S198, 지난 J300, 새 S415, 맞아요 J500, 예 S537, 오후 S538, 첫 S596, 올해 S627, 아니 S688, 천 J800, 영 / 공 J900, 작년 S922, 안녕 J1000, 낮 S1047, 오전 S1055, 새벽 J1200, 지난주 J1300, 아뇨 J1400, 스무 J1500, 화요일 J1500, 수요일 J1501, 목요일 J1502, 스물 J1600, 내년 S1688, 서른, 마흔, 쉰 J1800, 백 S2087, 열하나, 열둘 J2500, 모레 J2500, 그저께 J2800
