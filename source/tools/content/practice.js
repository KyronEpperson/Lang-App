/* Practice sets for the ko-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Korean; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check: at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "'쌀, 밥'을 뜻하는 단어는?", o: ["rice", "lice", "rise", "nice"], why: "R로 시작하는 rice가 쌀이에요. 혀끝을 잇몸에 붙이는 L로 말하면 lice(이)가 돼요." },
    { t: "mc", q: "'선풍기'를 뜻하는 단어는?", o: ["fan", "pan", "van", "ban"], why: "F는 윗니를 아랫입술에 대고 바람만 내요. 두 입술을 터뜨리는 P로 말하면 pan(프라이팬)이에요." },
    { t: "mc", q: "'생각하다'를 뜻하는 단어는?", o: ["think", "sink", "thing", "pink"], why: "TH는 혀끝을 이 사이로 살짝 내밀어요. s로 말하면 sink(싱크대)가 돼요." },
    { t: "mc", q: "'투표하다'를 뜻하는 단어는?", o: ["vote", "boat", "goat", "bought"], why: "V는 F 입 모양에 성대를 울려요. 두 입술을 붙이는 B로 말하면 boat(배)가 돼요." },
    { t: "mc", q: "'오른쪽'을 뜻하는 단어는?", o: ["right", "light", "fight", "bright"], why: "R로 시작하는 right가 오른쪽이에요. L로 시작하는 light는 빛이에요." },

    { t: "order", p: "이건 바나나예요", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana는 자음 소리로 시작해서 관사 a를 써요. this는 TH로 써요." },
    { t: "order", p: "나무 세 그루", a: ["three", "trees"], x: ["tree", "free"], why: "셋이니까 복수 -s를 붙여 trees예요. three는 TH, tree는 TR로 시작해요." },
    { t: "order", p: "저는 커피를 좋아해요", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee는 윗니를 아랫입술에 대는 F예요. P로 쓰면 copy(복사)가 돼요." },

    { t: "fill", q: "I eat __ice every day.", p: "저는 매일 밥을 먹어요", a: ["r"], o: ["l", "n", "w"], why: "밥은 R로 시작하는 rice예요. L로 쓰면 lice(이)가 돼요." },
    { t: "fill", q: "I __ink so.", p: "그런 것 같아요", a: ["th"], o: ["s", "t", "p"], why: "think는 TH로 시작해요. s로 쓰면 sink(싱크대)가 돼요." },
    { t: "fill", q: "This is my __.", p: "이건 제 가방이에요", a: ["bag"], o: ["back", "bug", "beg"], why: "가방은 g로 끝나는 bag이에요. k 소리로 끝나면 back(등)이 돼요." },

    { t: "type", p: "나무 세 그루", a: ["three trees"], hint: "three · tree — 셋이면 복수형", x: ["tree"], why: "three는 TH, tree는 TR로 시작하고, 셋이니까 복수 -s를 붙여요." },
    { t: "type", p: "보트 두 척", a: ["two boats"], hint: "two · boat — 둘이면 복수형", x: ["boat", "votes"], why: "배는 B로 시작하는 boat이고, 둘이니까 복수 -s를 붙여요. V로 쓰면 vote(투표)예요." },
    { t: "type", p: "매우 가벼운", a: ["very light"], hint: "very · light — V와 L로 시작해요", x: ["berry"], why: "very는 V(윗니+아랫입술), light는 L(혀끝을 잇몸에)로 시작해요." }
  ],

  articles: [
    { t: "mc", q: "'저는 학생이에요' =", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "직업·신분 앞에는 관사 a를 꼭 붙여요." },
    { t: "mc", q: "'아이디어가 하나 있어요' =", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea는 모음 소리로 시작해서 관사 an을 써요." },
    { t: "mc", q: "'한 시간'을 영어로 하면?", o: ["an hour", "a hour", "one hours", "hour"], why: "hour의 h는 소리가 나지 않아요. 모음 소리로 시작하니 관사 an이에요." },
    { t: "mc", q: "'저는 개를 정말 좋아해요' (개라는 동물 전체)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "일반적인 대상은 관사 없이 복수형으로 말해요." },
    { t: "mc", q: "'개를 한 마리 키워요. 그 개는 정말 귀여워요' =", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "처음 말할 땐 관사 a, 이미 말한 것을 다시 말할 땐 the예요." },

    { t: "order", p: "저는 선생님이에요", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "직업 앞에는 관사 a를 붙여요. teacher는 자음 소리라 an이 아니에요." },
    { t: "order", p: "(이 방의) 문 좀 닫아 줄래요?", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "둘 다 아는 바로 그 문이라 관사 the예요." },
    { t: "order", p: "저는 커피를 안 마셔요", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "커피를 일반적으로 말할 땐 관사를 쓰지 않아요." },

    { t: "fill", q: "I'm __ university student.", p: "저는 대학생이에요", a: ["a"], o: ["an", "the", "two"], why: "university는 '유' 소리로 시작해서 관사 a예요. 철자가 아니라 소리로 정해요." },
    { t: "fill", q: "I have __ older sister.", p: "언니가 한 명 있어요", a: ["an"], o: ["a", "the", "two"], why: "older는 모음 소리로 시작해서 관사 an이에요." },
    { t: "fill", q: "I don't like __.", p: "저는 고양이를 안 좋아해요 (고양이라는 동물 전체)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "일반적인 대상은 관사 없이 복수형 cats로 말해요." },

    { t: "type", p: "아이디어가 하나 있어요", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — 모음 소리 앞 관사", x: ["a"], why: "idea는 모음 소리로 시작해서 관사 an을 써요." },
    { t: "type", p: "저는 개를 좋아해요 (개라는 동물 전체)", a: ["I like dogs", "I love dogs"], hint: "like · dog — 전체를 말할 땐 복수형", x: ["dog", "a"], why: "일반적인 대상은 관사 없이 복수형 dogs로 말해요." },
    { t: "type", p: "(같이) 점심 먹어요", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — 식사 이름 앞 관사", x: ["a", "the"], why: "식사 이름 앞에는 관사를 쓰지 않아요." }
  ],

  be: [
    { t: "mc", q: "'저는 피곤해요' =", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "상태를 말할 땐 be동사가 꼭 필요해요." },
    { t: "mc", q: "'그는 영어를 해요?' =", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "he에는 does를 쓰고, does 뒤 동사는 -s 없는 원형이에요." },
    { t: "mc", q: "'그녀는 회사에 있어요' =", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "위치를 말할 땐 be동사, she에는 is예요." },
    { t: "mc", q: "Do you like coffee?에 '네'라고 대답할 때", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "do로 물었으니 do로 대답해요." },
    { t: "mc", q: "'그녀는 고기를 안 먹어요' =", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she의 부정은 doesn't + -s 없는 동사원형이에요." },

    { t: "order", p: "우리 형은 서울에서 일해요", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "주어가 한 사람(he)이라 works처럼 -s를 붙이고, be동사는 쓰지 않아요." },
    { t: "order", p: "저는 학생이 아니에요", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be동사 부정은 not이고, 신분 앞에는 관사 a를 붙여요." },
    { t: "order", p: "그녀는 개를 두 마리 키워요", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she 뒤에는 has, 두 마리니까 dogs처럼 복수 -s를 붙여요." },

    { t: "fill", q: "My brother __ in Seoul.", p: "우리 형은 서울에 살아요", a: ["lives"], o: ["live", "is live", "living"], why: "주어가 he라서 동사에 -s를 붙여요: lives." },
    { t: "fill", q: "__ you tired?", p: "피곤해요?", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired는 상태라 be동사로 물어요. you에는 are예요." },
    { t: "fill", q: "We __ hungry.", p: "우리는 배고파요", a: ["are"], o: ["is", "am", "do"], why: "hungry는 상태라 be동사, we에는 are예요." },

    { t: "type", p: "그는 선생님이에요", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be동사 + 직업 앞 관사", x: ["the"], why: "정체를 말하니 be동사, 직업 앞에는 관사 a를 붙여요." },
    { t: "type", p: "저는 커피를 안 좋아해요", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — 일반동사 부정", x: ["am"], why: "like는 일반동사라 부정은 don't예요 (I'm not like X)." },
    { t: "type", p: "그녀는 고양이를 한 마리 키워요?", a: ["Does she have a cat"], hint: "does · have · cat — 한 마리 앞 관사", x: ["has"], why: "does를 쓰면 동사는 원형 have, 한 마리니까 관사 a를 붙여요." }
  ],

  polite: [
    { t: "mc", q: "카페에서 라테 한 잔을 주문할 때 가장 자연스러운 말은?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "가게에서는 Can I get ~?이 자연스러워요. 한 잔이니 관사 a도 붙여요." },
    { t: "mc", q: "처음 보는 사람에게 도움을 청할 때 가장 공손한 말은?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you ~?는 처음 보는 사람에게 쓰는 공손한 부탁이에요." },
    { t: "mc", q: "상대의 말을 못 알아들었을 때 공손하게 다시 묻는 말은?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again?이 정중하게 다시 묻는 표현이에요." },
    { t: "mc", q: "아주 공손하게 '저희 사진 좀 찍어 주실래요?'", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind 뒤에는 ~ing가 와요: taking." },
    { t: "mc", q: "비행기에서 '창가 자리로 주세요'", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like ~가 정중한 요청이에요. 자리 하나니까 관사 a를 붙여요." },

    { t: "order", p: "라테 한 잔 주시겠어요?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "처음 주문하는 한 잔이니 관사 a예요." },
    { t: "order", p: "(이 방의) 창문 좀 열어 주셔도 될까요?", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind 뒤에는 ~ing, 둘 다 아는 그 창문이라 관사 the예요." },
    { t: "order", p: "좀 더 천천히 말해 주시겠어요?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you ~?로 공손하게 부탁해요." },

    { t: "fill", q: "Would you mind __ the door?", p: "문 좀 닫아 주셔도 될까요?", a: ["closing"], o: ["close", "to close", "closed"], why: "mind 뒤에는 ~ing가 와요." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "아이스커피 한 잔 주시겠어요?", a: ["an"], o: ["a", "two", "many"], why: "iced는 모음 소리('아')로 시작해서 관사 an이에요." },
    { t: "fill", q: "No, not at __.", p: "(Would you mind ~?에 대한 대답) 네, 그럼요", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all은 '전혀 안 꺼려요', 즉 '네, 해 드릴게요'라는 뜻이에요." },

    { t: "type", p: "좀 도와주시겠어요? (공손하게)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — 공손한 부탁", x: ["can"], why: "처음 보는 사람에게는 Could you ~?로 부탁해요." },
    { t: "type", p: "창가 자리로 주세요", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — 자리 하나 앞 관사", x: ["the"], why: "자리 하나를 처음 말하니 관사 a를 붙여요: a window seat." },
    { t: "type", p: "커피 두 잔 주세요", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — 두 잔이면 복수형", x: ["coffee"], why: "주문할 땐 커피를 잔 단위로 세서 two coffees처럼 복수 -s를 붙여요." }
  ],

  tense: [
    { t: "mc", q: "'지금 커피 마시는 중이에요' =", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "지금 하는 중인 일은 be + ~ing예요." },
    { t: "mc", q: "'지난 주말에 바닷가에 갔어요' =", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go의 과거형은 went예요. 바닷가는 관사 the를 붙여 the beach라고 해요." },
    { t: "mc", q: "다음 달 계획을 말할 때: '제주도에 갈 거예요'", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "미리 세운 계획은 be going to + 동사원형이에요." },
    { t: "mc", q: "초인종이 울려요. 그 자리에서: '내가 나갈게!'", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "말하는 순간 결정한 일은 will이에요." },
    { t: "mc", q: "see의 과거형은?", o: ["saw", "seed", "seen", "sawed"], why: "see는 불규칙 동사예요: see - saw - seen." },

    { t: "order", p: "저는 은행에서 일해요 (늘)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "늘 하는 일은 현재형, 은행 하나를 처음 말하니 관사 a예요." },
    { t: "order", p: "나중에 전화할게", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "말하는 순간 정한 약속은 will이에요." },
    { t: "order", p: "영화를 두 편 봤어요", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see의 과거형은 saw, 두 편이니 movies처럼 복수 -s를 붙여요." },

    { t: "fill", q: "I __ pizza last night.", p: "어젯밤에 피자를 먹었어요", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "eat의 과거형은 ate예요 (have라면 had)." },
    { t: "fill", q: "__ you have fun?", p: "재밌었어요?", a: ["Did"], o: ["Does", "Are", "Were"], why: "지난 일을 물을 땐 Did + 동사원형이에요." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "부모님 댁에 갈 거예요", a: ["to"], o: ["for", "at", "on"], why: "계획은 be going to + 동사원형이에요." },

    { t: "type", p: "오늘은 재택근무 중이에요", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — 지금 하는 중", x: ["work"], why: "오늘 하고 있는 일은 be + ~ing예요." },
    { t: "type", p: "지난 주말에 바닷가에 갔어요", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — 과거형과 관사", x: ["a"], why: "go의 과거형은 went, 바닷가는 관사 the를 붙여 the beach라고 해요." },
    { t: "type", p: "요리 수업을 하나 들을 거예요 (계획)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — 수업 하나 앞 관사", x: ["the"], why: "미리 세운 계획은 going to, 수업 하나를 처음 말하니 관사 a예요." }
  ],

  prep: [
    { t: "mc", q: "'5월에' =", o: ["in May", "on May", "at May", "to May"], why: "월 앞에는 in이에요." },
    { t: "mc", q: "'5월 3일에' =", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "날짜 앞에는 on이에요." },
    { t: "mc", q: "'(지금) 버스 타고 있어요' =", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "대중교통에는 on을 쓰고, 지금 탄 그 버스라 관사 the를 붙여요." },
    { t: "mc", q: "'밤에' =", o: ["at night", "on night", "in night", "at the night"], why: "night는 예외로 관사 없이 at night예요." },
    { t: "mc", q: "올바른 문장은?", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "도시 앞에는 in, 도시 이름에는 관사 the를 붙이지 않아요." },

    { t: "order", p: "(우리가 아는 그) 역에서 만나요", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "한 지점은 at, 둘 다 아는 그 역이라 관사 the예요." },
    { t: "order", p: "제 휴대폰은 (그) 테이블 위에 있어요", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "표면 위는 on, 눈앞의 그 테이블이라 관사 the예요." },
    { t: "order", p: "다음 주에 봐요", a: ["See", "you", "next", "week"], x: ["on"], why: "next 앞에는 전치사를 쓰지 않아요." },

    { t: "fill", q: "The meeting is __ three.", p: "회의는 3시예요", a: ["at"], o: ["on", "to", "of"], why: "정확한 시각 앞에는 at이에요." },
    { t: "fill", q: "I was born __ 1998.", p: "1998년에 태어났어요", a: ["in"], o: ["on", "at", "to"], why: "연도 앞에는 in이에요." },
    { t: "fill", q: "See you __ Friday.", p: "금요일에 봐요", a: ["on"], o: ["in", "at", "to"], why: "요일 앞에는 on이에요." },

    { t: "type", p: "저는 아침에 커피를 마셔요", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + 관사", x: ["at"], why: "하루 중 때는 in이고, in the morning처럼 관사 the를 꼭 붙여요." },
    { t: "type", p: "저 지금 집에 있어요", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — 관사 없이", x: ["the"], why: "at home은 관사 the 없이 써요." },
    { t: "type", p: "다음 주말에 봐요", a: ["See you next weekend"], hint: "see · next weekend — next 앞 전치사?", x: ["on"], why: "next 앞에는 전치사를 쓰지 않아요." }
  ],

  smalltalk: [
    { t: "mc", q: "동료가 How was your weekend?라고 물으면", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "지난 일을 물었으니 과거형으로, 정보 하나를 더해 대답해요." },
    { t: "mc", q: "I don't drink coffee.에 '저도요 (저도 안 마셔요)'", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "부정문에 맞장구칠 땐 Me neither예요." },
    { t: "mc", q: "대화를 자연스럽게 끝낼 때", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going은 부드럽게 자리를 뜨는 표현이에요." },
    { t: "mc", q: "처음 만난 사람에게 꺼내기 좋은 말은?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "날씨는 가장 안전한 스몰토크 주제예요." },
    { t: "mc", q: "I went to Busan last weekend.에 관심을 보이는 맞장구는?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really?와 That sounds fun!으로 관심을 보여요." },

    { t: "order", p: "주말에 계획 있어요?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "계획을 묻는 이 표현은 복수형 plans를 쓰고, 이번 주말이라 관사 the예요." },
    { t: "order", p: "이야기 즐거웠어요", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "대화를 끝낼 때 쓰는 인사예요. nice 뒤에 talking이 와요." },
    { t: "order", p: "저는 공포 영화를 안 좋아해요", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "영화 전반을 말하니 관사 없이 복수형 movies예요." },

    { t: "fill", q: "Pretty good! How __ you?", p: "잘 지내! 너는?", a: ["about"], o: ["for", "with", "of"], why: "짧게 대답하고 How about you?로 되물어 주는 게 매너예요." },
    { t: "fill", q: "I know, __?", p: "그러니까요! / 내 말이!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right?는 강하게 동의하는 맞장구예요. R로 시작해요." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "요즘 재밌는 거 봤어요?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "이렇게 any 뒤에서 셀 수 있는 명사를 물을 땐 복수형을 써요." },

    { t: "type", p: "주말 어땠어요?", a: ["How was your weekend"], hint: "how · weekend — 과거형으로", x: ["is"], why: "지난 주말이니 과거형 was로 물어요." },
    { t: "type", p: "오늘 날씨 좋네요", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — 관사를 붙일까요?", x: ["a"], why: "weather는 셀 수 없는 명사라 관사 a를 붙이지 않아요 (a nice weather X)." },
    { t: "type", p: "저는 영화 보는 걸 좋아해요", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — 전체를 말할 땐 복수형", x: ["movie"], why: "영화 전반을 말하니 복수형 movies예요." }
  ],

  phrasal: [
    { t: "mc", q: "'그거 켜 줘' =", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "대명사 it은 구동사 가운데에 와요: turn it on." },
    { t: "mc", q: "'우유가 다 떨어졌어요' =", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = ~이 다 떨어지다. of를 빼먹지 마세요." },
    { t: "mc", q: "'대구에서 자랐어요' =", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up = 자라다, 과거형은 grew up이에요." },
    { t: "mc", q: "'제 고양이 좀 돌봐 줄 수 있어요?' =", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = 돌보다. 나눌 수 없는 구동사예요 (look for는 '찾다')." },
    { t: "mc", q: "'7시에 데리러 갈게' =", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "대명사 you는 pick과 up 사이에 와요." },

    { t: "order", p: "제 안경을 찾고 있어요", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "안경은 항상 복수형 glasses예요 (glass는 유리잔). '찾다'는 look for예요." },
    { t: "order", p: "계획을 하나 생각해 내 봐요", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = 생각해 내다. 아직 없는 계획 하나라 관사 a예요." },
    { t: "order", p: "내가 데리러 갈게", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "대명사 you는 pick과 up 사이에 와요." },

    { t: "fill", q: "Can you turn it __?", p: "그거 꺼 줄래요?", a: ["off"], o: ["of", "on", "out"], why: "끄다는 turn off예요. of와 철자를 헷갈리지 마세요." },
    { t: "fill", q: "I work __ every morning.", p: "저는 매일 아침 운동해요", a: ["out"], o: ["up", "off", "on"], why: "work out = 운동하다." },
    { t: "fill", q: "We ran out of __.", p: "달걀이 다 떨어졌어요", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "달걀처럼 셀 수 있는 것이 다 떨어졌을 땐 복수형 eggs예요." },

    { t: "type", p: "그거 좀 꺼 주세요", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — 대명사는 가운데", x: ["on"], why: "대명사 it은 turn과 off 사이에 와요." },
    { t: "type", p: "저는 고양이 두 마리를 돌봐요", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — 둘이면 복수형", x: ["cat"], why: "look after = 돌보다. 두 마리니까 복수 -s를 붙여 cats예요." },
    { t: "type", p: "우유가 다 떨어졌어요", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — 관사를 붙일까요?", x: ["a"], why: "milk는 셀 수 없는 명사라 관사 a를 붙이지 않아요." }
  ],

  numbers: [
    { t: "mc", q: "10,000(만)을 영어로 하면?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "세 자리씩 끊어요: 10 + thousand. 숫자 뒤 thousand에는 복수 -s를 붙이지 않아요." },
    { t: "mc", q: "1,000,000(백만)을 영어로 하면?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "쉼표 두 개 = million이에요. 숫자 뒤 million에는 복수 -s를 붙이지 않아요." },
    { t: "mc", q: "9:05를 읽는 법은?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1~9분 앞에는 oh를 붙여요." },
    { t: "mc", q: "$4.99를 자연스럽게 읽으면?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "가격은 숫자 두 덩어리로 읽어요: four ninety-nine." },
    { t: "mc", q: "2026년을 영어로 읽으면?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "연도는 두 자리씩 끊어 읽어요." },

    { t: "order", p: "7시 15분이에요", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15는 fifteen(뒤에 강세), 50은 fifty(앞에 강세)예요." },
    { t: "order", p: "15달러예요", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "1달러보다 많으면 dollars처럼 복수 -s를 붙여요." },
    { t: "order", p: "일주일에 두 번", a: ["twice", "a", "week"], x: ["the", "one"], why: "'~에 몇 번'은 관사 a로 말해요: twice a week." },

    { t: "fill", q: "It's __ quarter past ten.", p: "10시 15분이에요", a: ["a"], o: ["the", "one", "an"], why: "quarter(15분) 앞에는 관사 a를 붙여요." },
    { t: "fill", q: "That's fifty __ won.", p: "5만 원이에요", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000은 fifty thousand예요. 숫자 뒤 thousand에는 복수 -s를 붙이지 않아요." },
    { t: "fill", q: "I'll be there in ten __.", p: "10분 후에 도착할게요", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10분이니 복수형 minutes예요." },

    { t: "type", p: "3시 반이에요", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — 시와 분을 그대로", x: ["thirteen"], why: "시와 분을 그대로 읽어요: three thirty. 13(thirteen)과 헷갈리지 마세요." },
    { t: "type", p: "20달러예요", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — 2 이상이면 복수형", x: ["dollar"], why: "2달러 이상이니 dollars처럼 복수 -s를 붙여요." },
    { t: "type", p: "저는 일주일에 두 번 운동해요", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — '~에'는 어떤 관사?", x: ["the"], why: "'일주일에'는 관사 a를 써서 a week예요 (the week X)." }
  ],

  email: [
    { t: "mc", q: "Dear로 시작할 때 가장 자연스러운 인사는?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear 뒤에는 직함만 쓰지 말고 이름을 써요." },
    { t: "mc", q: "보고서를 첨부했다고 알릴 때", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "상대가 받을 바로 그 보고서이니 관사 the를 붙여요." },
    { t: "mc", q: "'마감이 언제예요?' =", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "이 일의 바로 그 마감이니 관사 the예요." },
    { t: "mc", q: "답장이 늦었을 때 사과 대신 쓸 수 있는 긍정적인 표현은?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience는 사과 없이도 예의 바르게 들려요. patients(환자들)와 철자를 구분하세요." },
    { t: "mc", q: "금요일 이메일 끝에 쓰기 좋은 인사는?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "주말 하나를 말하니 관사 a를 붙이고 weekend는 단수예요." },

    { t: "order", p: "보고서를 첨부했습니다", a: ["I've", "attached", "the", "report"], x: ["a"], why: "상대가 받을 바로 그 보고서이니 관사 the예요." },
    { t: "order", p: "회의 일정을 잡읍시다", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "아직 정하지 않은 회의 하나라서 관사 a예요." },
    { t: "order", p: "확인하고 다시 연락드릴게요", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = 다시 연락드리다. to를 써요." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "금요일까지 파일 보내 주실 수 있나요?", a: ["by"], o: ["until", "in", "at"], why: "기한(~까지)은 by + 날짜예요." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "일정에 대해 여쭤보려고 연락드립니다", a: ["to"], o: ["for", "about", "at"], why: "목적은 I'm writing to + 동사원형이에요." },
    { t: "fill", q: "Thanks for all your hard __!", p: "그동안 정말 고생 많으셨어요", a: ["work"], o: ["works", "working", "job"], why: "work(일)는 셀 수 없는 명사라 복수 -s를 붙이지 않아요." },

    { t: "type", p: "저 내일 쉬어요 (휴무예요)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow"], hint: "off · tomorrow — be동사 + off", x: ["do"], why: "쉬는 날은 be off로 말해요." },
    { t: "type", p: "파일을 첨부했습니다", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — 바로 그 파일", x: ["a"], why: "상대가 받을 바로 그 파일이니 관사 the예요." },
    { t: "type", p: "좋은 주말 보내세요!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — 주말 하나 앞 관사", x: ["the"], why: "주말 하나를 말하니 관사 a를 붙여요: a great weekend." }
  ],

  idioms: [
    { t: "mc", q: "'식은 죽 먹기예요' =", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "관용구는 통째로 외워요: 관사 a를 넣고 cake는 단수예요." },
    { t: "mc", q: "'엄청 비싸요' =", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm은 모음 소리라 관사 an, leg는 자음 소리라 a예요." },
    { t: "mc", q: "'오늘은 여기까지 해요' (회의에서도 OK)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day는 관사 a까지 통째로 외우는 관용구예요." },
    { t: "mc", q: "'날아갈 듯 기뻐요' =", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine은 관사도 복수 -s도 없이 써요." },
    { t: "mc", q: "친구끼리만 쓰는 슬랭은?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap은 '진짜로'라는 뜻의 젊은 층 슬랭이에요. 나머지는 직장에서도 쓰는 관용구예요." },

    { t: "order", p: "잘 듣고 있어요", a: ["I'm", "all", "ears"], x: ["ear"], why: "'온몸이 귀'라는 표현이라 복수형 ears예요." },
    { t: "order", p: "공부 좀 열심히 해야 해", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books — 관사 the와 복수형 books를 그대로 써요." },
    { t: "order", p: "제 취향은 아니에요", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea를 통째로 외워요. my 자리에 관사를 넣지 않아요." },

    { t: "fill", q: "Kill two __ with one stone.", p: "일석이조", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "새 두 마리니까 복수형 birds예요." },
    { t: "fill", q: "Speak of the __!", p: "호랑이도 제 말 하면 온다더니!", a: ["devil"], o: ["tiger", "angel", "bird"], why: "영어에선 호랑이 대신 devil(악마)이 와요." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "몸이 좀 안 좋아요", a: ["the"], o: ["a", "an", "my"], why: "under the weather — 관사 the를 그대로 써요." },

    { t: "type", p: "식은 죽 먹기예요", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — 관사를 잊지 마세요", x: ["the"], why: "a piece of cake — 관사 a를 꼭 붙여요." },
    { t: "type", p: "잘되길 빌게요", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — 손가락은 몇 개?", x: ["finger"], why: "손가락 두 개를 꼬니까 복수형 fingers예요." },
    { t: "type", p: "오늘은 여기까지 해요", a: ["Let's call it a day"], hint: "call it · day — the가 아니에요", x: ["the"], why: "call it a day — 관사 the가 아니라 a예요." }
  ]
};
