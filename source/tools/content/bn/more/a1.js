/* TRANSLATE/ADAPT (bn): scaffolded from tools/content/ko/more/a1.js by new_lang.js.
   Translate/adapt everything that is not English (the ko text) for bn speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,
   explanations written from the bn point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position
   identical to ko-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */
/* ko-en stage A1: new lessons (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it과 there: 주어 자리 채우기", blurb:"날씨·시간은 it, '~이 있어요'는 there is / there are.", deck:"스몰토크", body:`
<p>한국어는 "추워요", "카페가 있어요"처럼 주어 없이도 말이 돼요. 영어는 주어 자리가 비면 안 돼요. 그래서 뜻이 없는 <b>it</b>과 <b>there</b>로 그 자리를 채워요.</p>
<h3>날씨·시간은 It</h3>
<p>이때 it은 '그것'이 아니에요. 자리만 채우는 말이에요.</p>
{{ex:It's cold today.|이츠 콜드 투데이|오늘 추워요}}{{ex:It's three o'clock.|이츠 쓰리 어클락|세 시예요}}{{ex:It's raining.|이츠 레이닝|비가 와요}}
<h3>'~이 있어요'는 There is / There are</h3>
<p>하나면 <b>There is a …</b>, 여럿이면 <b>There are … -s</b>예요. 말할 때는 There's로 줄여요.</p>
{{ex:There's a cafe near here.|데어즈 어 캐페이 니어 히어|이 근처에 카페가 있어요}}{{ex:There are two rooms.|데어 아 투 룸즈|방이 두 개 있어요}}
<h3>질문과 부정</h3>
{{ex:Is there a bathroom here?|이즈 데어 어 배쓰룸 히어?|여기 화장실 있어요?}}{{ex:Are there any seats?|아 데어 애니 싯츠?|자리 있어요?}}{{ex:There isn't a bus today.|데어 이즌 어 버스 투데이|오늘은 버스가 없어요}}
<h3>have와 구분하기</h3>
<p>사람이 가진 것은 <b>have</b>, 어떤 장소에 있는 것은 <b>there is</b>예요.</p>
{{ex:I have a car.|아이 해버 카|저는 차가 있어요}}{{ex:There's a car outside.|데어즈 어 카 아웃사이드|밖에 차가 있어요}}
<div class="tip">가장 흔한 실수: <b>Is cold.</b> (X) → <b>It's cold.</b> (O) / <b>Have a cafe here.</b> (X) → <b>There's a cafe here.</b> (O)</div>`,
check:[["'오늘 더워요'를 영어로 하면?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"날씨는 it으로 주어 자리를 채워요."],["There ___ three people. 빈칸에 알맞은 것은?",["is","are","have","be"],1,"여럿이면 there are예요."],["'여기 화장실 있어요?'를 영어로 하면?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"있는지 물을 때는 Is there a ~?예요."]],
practice:[
["mc","'비가 와요' =","It's raining.","Is raining.","There is raining.","Rain is.","날씨는 it이 주어예요."],
["mc","'이 근처에 카페가 있어요' =","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","장소에 있는 것은 there is, 하나라서 관사 a를 붙여요."],
["mc","There ___ two rooms. 빈칸은?","are","is","have","has","복수 rooms라서 are예요."],
["mc","'세 시예요' =","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","시간도 it으로 시작해요."],
["mc","'저는 차가 있어요' =","I have a car.","There is a car me.","I am a car.","It's a car me.","사람이 가진 것은 have예요."],
["or","오늘 추워요","It's cold today","There's","날씨는 it이 주어예요."],
["or","밖에 차가 있어요","There's a car outside","cars","하나니까 관사 a와 단수 car를 써요."],
["or","자리가 두 개 있어요","There are two seats","seat is","둘 이상이면 are와 복수 seats예요."],
["fi","__ cold today.","오늘 추워요","It's|It is","Is|There's|This","주어 자리를 it으로 채워요."],
["fi","There __ a bank near here.","근처에 은행이 있어요","is","are|have|be","하나라서 is예요."],
["fi","__ there any seats?","자리 있어요?","Are","Is|Do|Have","복수 seats라서 Are예요."],
["ty","오늘 더워요","It's hot today","it · hot · today — 날씨는 it","There's","날씨는 it으로 시작해요."],
["ty","여기 화장실 있어요?","Is there a bathroom here|Is there a restroom here","is there · bathroom — 관사 주의","the","처음 묻는 하나라서 관사 a를 붙여요."],
["ty","방이 두 개 있어요","There are two rooms","there are · two · room — 복수","room","둘이니까 복수 rooms예요."]]},

{ id:"plurals", title:"복수 -s와 this / these, my / your", blurb:"둘 이상이면 꼭 -s. this는 하나, these는 여럿.", deck:"쇼핑·계산", body:`
<p>한국어는 "사과 세 개"처럼 명사 모양이 그대로예요. 영어는 둘 이상이면 명사에 꼭 <b>-s</b>를 붙여요. 한국인이 가장 자주 빼먹는 부분이에요.</p>
<h3>복수 만들기</h3>
<div class="tbl"><table><tr><th>규칙</th><th>예</th></tr><tr><td>대부분 -s</td><td class="k">book → books</td></tr><tr><td>s·x·ch·sh 뒤 -es</td><td class="k">box → boxes</td></tr><tr><td>자음 + y → -ies</td><td class="k">city → cities</td></tr><tr><td>불규칙</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|투 북스|책 두 권}}{{ex:three boxes|쓰리 박시즈|상자 세 개}}{{ex:I have two children.|아이 해브 투 칠드런|저는 아이가 둘 있어요}}
<h3>this / that 은 하나, these / those 는 여럿</h3>
{{ex:This is my bag.|디스 이즈 마이 백|이건 제 가방이에요}}{{ex:These are my keys.|디즈 아 마이 키즈|이것들은 제 열쇠예요}}{{ex:Those shoes are nice.|도즈 슈즈 아 나이스|저 신발 예뻐요}}
<h3>my, your, his, her, our, their</h3>
<p>'누구의'를 말하는 단어예요. 이 단어가 있으면 a나 the를 같이 쓰지 않아요.</p>
{{ex:Is this your phone?|이즈 디스 유어 폰?|이거 당신 휴대폰이에요?}}{{ex:Her brothers live in Busan.|허 브라더즈 리브 인 부산|그녀의 오빠들은 부산에 살아요}}
<div class="tip">숫자, many, these, those 뒤의 명사는 항상 복수예요: <b>two friend</b> (X) → <b>two friends</b> (O), <b>my a bag</b> (X) → <b>my bag</b> (O)</div>`,
check:[["I have two ___. 빈칸에 알맞은 것은?",["sister","sisters","a sister","sister's"],1,"둘이니까 복수 sisters예요."],["___ are my keys. 빈칸에 알맞은 것은?",["This","That","These","It"],2,"keys가 복수라서 These예요."],["'이건 제 가방이에요'를 영어로 하면?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"my가 있으면 관사를 붙이지 않아요."]],
practice:[
["mc","'책 두 권' =","two books","two book","two a book","twos book","둘 이상이면 복수 -s를 붙여요."],
["mc","child의 복수형은?","children","childs","childes","child","불규칙 복수예요."],
["mc","___ shoes are nice. (저 신발)","Those","That","This","It","shoes가 복수라서 those예요."],
["mc","'이건 제 가방이에요' =","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my와 관사는 같이 쓰지 않아요."],
["mc","box의 복수형은?","boxes","boxs","boxies","box","s, x, ch, sh 뒤에는 -es예요."],
["or","이것들은 제 열쇠예요","These are my keys","key This","여럿이라 these와 복수 keys를 써요."],
["or","저는 아이가 둘 있어요","I have two children","child a","둘이니까 복수 children이에요. 관사 a는 빼요."],
["or","저 신발 예뻐요","Those shoes are nice","That","shoes가 복수라서 those예요."],
["fi","I have three __.","저는 고양이가 세 마리 있어요","cats","cat|a cat|cat's","셋이니까 복수 cats예요."],
["fi","__ is my friend.","이 사람은 제 친구예요","This","These|Those|They","한 명이라서 this예요."],
["fi","Two __, please.","커피 두 잔 주세요","coffees","coffee|a coffee|coffee's","잔 수를 세어 주문할 때는 coffees처럼 복수로 말해요."],
["ty","이것들은 제 책이에요","These are my books","these · my · book — 복수","book","여럿이라 these와 복수 books예요."],
["ty","저는 언니가 둘 있어요","I have two sisters","have · two · sister — 복수","sister","둘이니까 복수 sisters예요."],
["ty","이건 제 가방이에요","This is my bag","this · my · bag — 관사 없이","a","my가 있으면 관사 a를 쓰지 않아요."]]},
{ id:"present", title:"현재형과 어순: 주어 + 동사 + 목적어", blurb:"한국어는 동사가 끝, 영어는 동사가 두 번째예요.", deck:"자기소개", body:`
<p>한국어는 "저는 커피를 <b>마셔요</b>"처럼 동사가 맨 끝에 와요. 영어는 <b>누가 → 한다 → 무엇을</b> 순서예요. 조사가 없기 때문에 이 순서가 곧 뜻이에요.</p>
<h3>주어 + 동사 + 목적어</h3>
{{ex:I drink coffee.|아이 드링크 커피|저는 커피를 마셔요}}{{ex:I study English.|아이 스터디 잉글리시|저는 영어를 공부해요}}
<h3>장소와 시간은 뒤에</h3>
<p>나머지 정보는 <b>장소 → 시간</b> 순서로 뒤에 붙여요.</p>
{{ex:We live in Seoul.|위 리브 인 서울|우리는 서울에 살아요}}{{ex:I study English every day.|아이 스터디 잉글리시 에브리 데이|저는 매일 영어를 공부해요}}{{ex:They work on weekends.|데이 워크 온 위켄즈|그들은 주말에 일해요}}
<h3>현재형은 습관과 사실</h3>
<p>늘 하는 일, 변하지 않는 사실을 말해요. 부정은 동사 앞에 <b>don't</b>를 넣어요.</p>
{{ex:I don't eat meat.|아이 돈 잇 밋|저는 고기를 안 먹어요}}
<h3>얼마나 자주: always, usually, sometimes, never</h3>
<p>이 단어들은 동사 <b>바로 앞</b>에 와요.</p>
{{ex:I usually get up at seven.|아이 유주얼리 게럽 앳 세븐|저는 보통 7시에 일어나요}}{{ex:I never drink coffee at night.|아이 네버 드링크 커피 앳 나잇|저는 밤에는 커피를 절대 안 마셔요}}
<div class="tip">한국어 순서대로 옮기면 틀려요: <b>I coffee drink.</b> (X) → <b>I drink coffee.</b> (O). 주어 다음에 바로 동사를 말하는 연습을 하세요.</div>`,
check:[["'저는 커피를 마셔요'의 바른 어순은?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"주어 + 동사 + 목적어 순서예요."],["I ___ eat meat. (안 먹어요)",["not","am not","no","don't"],3,"일반동사 부정은 don't예요."],["always의 알맞은 자리는?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"빈도 부사는 동사 바로 앞에 와요."]],
practice:[
["mc","'저는 영어를 공부해요' =","I study English.","I English study.","I am study English.","Study I English.","주어 + 동사 + 목적어 순서예요."],
["mc","'저는 고기를 안 먹어요' =","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","일반동사 부정은 don't예요."],
["mc","'우리는 서울에 살아요' =","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","동사 다음에 장소가 와요."],
["mc","'저는 보통 7시에 일어나요' =","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually는 동사 바로 앞에 와요."],
["mc","매일 하는 일을 말하는 문장은?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","습관은 현재형으로 말해요."],
["or","저는 매일 커피를 마셔요","I drink coffee every day","the am","습관은 현재형이에요. 일반적인 coffee에는 관사를 붙이지 않아요."],
["or","저는 책을 많이 읽어요","I read many books","book","many 뒤에는 복수 books가 와요."],
["or","우리는 주말에 일해요","We work on weekends","are","일반동사 앞에 be동사를 겹쳐 쓰지 않아요."],
["fi","I __ like fish.","저는 생선을 안 좋아해요","don't|do not","not|am not|no","일반동사 부정은 don't예요."],
["fi","I __ English every day.","저는 매일 영어를 공부해요","study","am study|studying|to study","현재형은 동사를 그대로 써요."],
["fi","They live __ Busan.","그들은 부산에 살아요","in","at|on|to","도시 앞에는 in이에요."],
["ty","저는 차를 마셔요","I drink tea","drink · tea — 관사 없이","a","일반적인 tea에는 관사를 붙이지 않아요."],
["ty","저는 고양이를 좋아해요","I like cats","like · cat — 복수로","cat","그 동물 전체를 말할 때는 복수 cats예요."],
["ty","저는 고기를 안 먹어요","I don't eat meat","don't · eat · meat","am","일반동사 부정은 don't예요."]]},
{ id:"questions", title:"질문 만들기: Do you ~?와 의문사", blurb:"끝만 올리면 안 돼요. Do를 앞에, 의문사는 맨 앞에.", deck:"생존 영어 2", body:`
<p>한국어는 끝만 올리면 질문이 돼요. 영어는 <b>단어 순서</b>를 바꿔야 질문이에요.</p>
<h3>be동사: 자리 바꾸기</h3>
{{ex:Are you okay?|아 유 오케이?|괜찮아요?}}{{ex:Is this your bag?|이즈 디스 유어 백?|이거 당신 가방이에요?}}
<h3>일반동사: Do를 앞에</h3>
<p>문장 앞에 <b>Do</b>를 붙여요. 나머지 순서는 그대로예요.</p>
{{ex:Do you like coffee?|두 유 라익 커피?|커피 좋아하세요?}}{{ex:Do you speak English?|두 유 스픽 잉글리시?|영어 하세요?}}
<p>대답은 짧게 해요: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>의문사는 맨 앞에</h3>
<p>what(무엇), where(어디), when(언제), who(누구), why(왜), how(어떻게)를 맨 앞에 두고 질문 순서를 그대로 이어요.</p>
{{ex:Where do you live?|웨어 두 유 리브?|어디 사세요?}}{{ex:What do you do?|왓 두 유 두?|무슨 일 하세요?}}{{ex:Where is the bathroom?|웨어 이즈 더 배쓰룸?|화장실이 어디예요?}}{{ex:How much is this?|하우 머치 이즈 디스?|이거 얼마예요?}}
<div class="tip">가장 흔한 실수: <b>Where you live?</b> (X) → <b>Where do you live?</b> (O), <b>Are you like coffee?</b> (X) → <b>Do you like coffee?</b> (O)</div>`,
check:[["'커피 좋아하세요?'를 영어로 하면?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"일반동사 질문은 Do로 시작해요."],["'어디 사세요?'를 영어로 하면?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"의문사 + do + 주어 + 동사 순서예요."],["Do you speak English?의 알맞은 대답은?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Do로 물으면 do로 대답해요."]],
practice:[
["mc","'영어 하세요?' =","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","일반동사 질문은 Do로 시작해요."],
["mc","'어디 사세요?' =","Where do you live?","Where you live?","Where are you live?","Where live you?","의문사 + do + 주어 + 동사예요."],
["mc","'이거 얼마예요?' =","How much is this?","How much this is?","How much does this?","What much is this?","가격은 How much is ~?로 물어요."],
["mc","Do you like tea? — 알맞은 대답은?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Do로 물으면 do로 대답해요."],
["mc","'무슨 일 하세요?' (직업) =","What do you do?","What are you do?","What you do?","What do you?","직업은 What do you do?로 물어요."],
["or","커피 좋아하세요?","Do you like coffee","Are the","일반동사 질문은 Do로 시작해요. 일반적인 coffee에는 관사가 없어요."],
["or","화장실이 어디예요?","Where is the bathroom","a do","이 건물의 그 화장실이라서 관사 the예요."],
["or","어디 사세요?","Where do you live","are","일반동사 질문에는 do가 필요해요."],
["fi","__ you like music?","음악 좋아하세요?","Do","Are|Is|Does","일반동사 like의 질문은 Do예요."],
["fi","__ do you live?","어디 사세요?","Where","What|Who|When","장소를 물을 때는 where예요."],
["fi","What time __ it?","몇 시예요?","is","do|does|are","시간은 be동사로 물어요."],
["ty","영어 하세요?","Do you speak English|Can you speak English","do · speak · English","Are","일반동사 질문은 Do로 시작해요."],
["ty","화장실이 어디예요?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — 관사 the","a","서로 아는 그 화장실이라 관사 the예요."],
["ty","개 좋아하세요?","Do you like dogs","do · like · dog — 복수","dog","동물 전체를 말할 때는 복수 dogs예요."]]},
{ id:"third-s", title:"he·she·it에는 -s: does / doesn't", blurb:"주어가 한 사람이면 동사에 -s. 질문과 부정은 does.", deck:"자기소개", body:`
<p>현재형에서 주어가 <b>he, she, it</b>이나 한 사람·한 물건이면 동사에 <b>-s</b>를 붙여요. 한국어에 없는 규칙이라 말할 때 자주 빠져요.</p>
<div class="tbl"><table><tr><th>주어</th><th>동사</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|쉬 웍스 앳 어 뱅크|그녀는 은행에서 일해요}}{{ex:He likes soccer.|히 라익스 사커|그는 축구를 좋아해요}}{{ex:My mom cooks well.|마이 맘 쿡스 웰|우리 엄마는 요리를 잘해요}}
<h3>모양이 조금 바뀌는 동사</h3>
{{ex:She has a car.|쉬 해즈 어 카|그녀는 차가 있어요 (have → has)}}{{ex:He goes to work at eight.|히 고우즈 투 워크 앳 에잇|그는 8시에 출근해요 (go → goes)}}{{ex:She studies English.|쉬 스터디즈 잉글리시|그녀는 영어를 공부해요 (study → studies)}}
<h3>부정과 질문은 does</h3>
<p><b>doesn't</b>나 <b>Does</b>를 쓰면 -s는 거기로 옮겨 가요. 뒤의 동사는 -s 없이 써요.</p>
{{ex:He doesn't drink coffee.|히 더즌 드링크 커피|그는 커피를 안 마셔요}}{{ex:Does she live here?|더즈 쉬 리브 히어?|그녀는 여기 살아요?}}
<div class="tip">가장 흔한 실수: <b>She work here.</b> (X) → <b>She works here.</b> (O), <b>Does she works?</b> (X) → <b>Does she work?</b> (O)</div>`,
check:[["She ___ in Seoul. 빈칸에 알맞은 것은?",["live","lives","living","is live"],1,"she라서 동사에 -s를 붙여요."],["He ___ like coffee. 빈칸에 알맞은 것은?",["don't","isn't","doesn't","not"],2,"he의 부정은 doesn't예요."],["'그녀는 차가 있어요'를 영어로 하면?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"have는 she 뒤에서 has가 돼요."]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","한 사람이라서 works예요."],
["mc","'그는 커피를 안 마셔요' =","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he의 부정은 doesn't + 동사원형이에요."],
["mc","'그녀는 여기 살아요?' =","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does 뒤 동사는 -s 없이 써요."],
["mc","have → she ___","has","haves","have","is have","have는 has로 바뀌어요."],
["mc","study → he ___","studies","studys","study","studyes","자음 + y는 -ies로 바뀌어요."],
["or","그녀는 은행에서 일해요","She works at a bank","work the","she라서 works예요. 처음 말하는 직장에는 관사 a를 써요."],
["or","그는 개가 두 마리 있어요","He has two dogs","have dog","he라서 has, 둘이니까 복수 dogs예요."],
["or","그녀는 고기를 안 먹어요","She doesn't eat meat","eats","doesn't 뒤에는 -s 없는 동사가 와요."],
["fi","He __ soccer.","그는 축구를 좋아해요","likes","like|liking|is like","he라서 likes예요."],
["fi","__ she speak English?","그녀는 영어를 해요?","Does","Do|Is|Are","she의 질문은 Does예요."],
["fi","She __ to work at eight.","그녀는 8시에 출근해요","goes","go|going|gos","go는 goes가 돼요."],
["ty","그는 차가 있어요","He has a car","has · car — 관사 a","have","he라서 has, 차 한 대라서 관사 a예요."],
["ty","그녀는 고양이를 좋아해요","She likes cats","likes · cat — 복수","cat","she라서 likes, 고양이 전체는 복수 cats예요."],
["ty","그는 여기 안 살아요","He doesn't live here","doesn't · live · here","lives","doesn't 뒤에는 동사원형이 와요."]]},
{ id:"countable", title:"셀 수 있는 명사와 없는 명사: some, any, much, many", blurb:"water에는 a도 -s도 못 붙여요. many는 셀 수 있을 때, much는 없을 때.", deck:"식당 주문", body:`
<p>영어 명사는 <b>셀 수 있는 것</b>과 <b>셀 수 없는 것</b>으로 나뉘어요. 한국어에는 없는 구분이라 처음엔 낯설어요.</p>
<div class="tbl"><table><tr><th>셀 수 있음</th><th>셀 수 없음</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, 숫자, -s 가능</td><td>a / an, 숫자, -s 불가능</td></tr></table></div>
<h3>some 과 any</h3>
<p>'조금, 몇 개'는 긍정문에서 <b>some</b>, 부정문과 질문에서 <b>any</b>예요. 단, 부탁하거나 권할 때는 질문이어도 <b>some</b>을 써요: <b>Can I have some water?</b></p>
{{ex:I have some money.|아이 해브 썸 머니|돈이 좀 있어요}}{{ex:I don't have any money.|아이 돈 해브 애니 머니|돈이 하나도 없어요}}{{ex:Do you have any questions?|두 유 해브 애니 퀘스천즈?|질문 있어요?}}
<h3>many 와 much</h3>
<p>셀 수 있으면 <b>many</b> + 복수, 셀 수 없으면 <b>much</b>예요. <b>a lot of</b>는 둘 다 돼요.</p>
{{ex:How many people?|하우 매니 피플?|몇 명이에요?}}{{ex:How much is it?|하우 머치 이즈 잇?|얼마예요?}}{{ex:I don't have much time.|아이 돈 해브 머치 타임|시간이 별로 없어요}}
<h3>셀 수 없는 것을 세는 방법</h3>
{{ex:a glass of water|어 글래스 오브 워러|물 한 잔}}{{ex:a cup of coffee|어 컵 오브 커피|커피 한 잔}}
<div class="tip">가장 흔한 실수: <b>a water</b>, <b>many money</b>, <b>informations</b> (X) → <b>some water</b>, <b>much money</b>, <b>information</b> (O)</div>`,
check:[["How ___ people are there? 빈칸에 알맞은 것은?",["much","many","any","a"],1,"people은 셀 수 있어서 many예요."],["다음 중 셀 수 없는 명사는?",["apple","chair","water","friend"],2,"water에는 a나 -s를 붙이지 않아요."],["I don't have ___ money. 빈칸에 알맞은 것은?",["some","a","many","any"],3,"부정문에서는 any를 써요."]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water는 셀 수 없어서 a나 many를 못 써요."],
["mc","How ___ time do we have?","much","many","any","a","time은 셀 수 없어서 much예요."],
["mc","'질문 있어요?' =","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any 뒤 셀 수 있는 명사는 복수예요."],
["mc","'물 한 잔' =","a glass of water","a water glass of","one waters","a glass water","셀 수 없는 것은 a glass of로 세요."],
["mc","I have ___ friends in Seoul.","many","much","a","an","friends는 셀 수 있는 복수라서 many예요."],
["or","저는 돈이 좀 있어요","I have some money","a moneys","money는 셀 수 없어서 관사 a나 복수 -s를 못 붙여요."],
["or","사과 두 개 주세요","Two apples please","apple","둘이니까 복수 apples예요."],
["or","시간이 별로 없어요","I don't have much time","many","time은 셀 수 없어서 much예요."],
["fi","How __ is this?","이거 얼마예요?","much","many|any|some","가격은 how much로 물어요."],
["fi","I don't have __ questions.","질문 없어요","any","some|much|a","부정문에서는 any를 써요."],
["fi","a cup __ coffee","커피 한 잔","of","for|in|a","a cup of ~로 세요."],
["ty","물 좀 주시겠어요?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — 관사 없이","a","water는 셀 수 없어서 관사 a 대신 some을 써요."],
["ty","질문 있어요?","Do you have any questions","any · question — 복수","question","any 뒤 셀 수 있는 명사는 복수 questions예요."],
["ty","몇 명이에요?","How many people","how many · people","much","사람은 셀 수 있어서 many예요."]]},
{ id:"object-have", title:"me, him, her와 have", blurb:"동사 뒤에는 I가 아니라 me. 그리고 만능 동사 have.", deck:"자기소개", body:`
<p>한국어는 '를'만 붙이면 되지만, 영어는 대명사의 <b>모양 자체</b>가 바뀌어요. 동사나 전치사 <b>뒤</b>에는 이 모양을 써요.</p>
<div class="tbl"><table><tr><th>주어</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>목적어</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|쉬 노우즈 미|그녀는 저를 알아요}}{{ex:I like him.|아이 라익 힘|저는 그를 좋아해요}}{{ex:Can you help us?|캔 유 헬프 어스?|우리 좀 도와줄래요?}}{{ex:I work with her.|아이 워크 윋 허|저는 그녀와 같이 일해요}}
<h3>have: 있다, 가지다</h3>
<p>'~가 있어요'를 사람 주어로 말할 때 써요. 가족, 물건, 시간 모두 have예요.</p>
{{ex:I have two brothers.|아이 해브 투 브라더즈|저는 형이 둘 있어요}}{{ex:Do you have a pen?|두 유 해버 펜?|펜 있어요?}}{{ex:I don't have time.|아이 돈 해브 타임|시간이 없어요}}
<h3>have: 먹다, 마시다</h3>
<p>식사 이름 앞에는 관사를 붙이지 않아요.</p>
{{ex:Let's have lunch.|렛츠 해브 런치|점심 먹어요}}{{ex:I have coffee every morning.|아이 해브 커피 에브리 모닝|저는 매일 아침 커피를 마셔요}}
<div class="tip">가장 흔한 실수: <b>She knows I.</b> (X) → <b>She knows me.</b> (O), <b>I am two brothers.</b> (X) → <b>I have two brothers.</b> (O)</div>`,
check:[["I like ___. (그를)",["he","his","him","he's"],2,"동사 뒤에는 목적격 him이에요."],["Can you help ___? (우리를)",["us","we","our","ours"],0,"동사 뒤에는 목적격 us예요."],["'펜 있어요?'를 영어로 하면?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have는 일반동사라서 Do로 물어요."]],
practice:[
["mc","She knows ___. (나를)","me","I","my","mine","동사 뒤에는 목적격 me예요."],
["mc","I like ___. (그들을)","them","they","their","theirs","동사 뒤에는 목적격 them이에요."],
["mc","'우리 좀 도와줄래요?' =","Can you help us?","Can you help we?","Can you help our?","Can us help you?","동사 뒤에는 us예요."],
["mc","'점심 먹어요' =","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","식사 이름에는 관사를 붙이지 않아요."],
["mc","'저는 형이 둘 있어요' =","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","가족은 have로 말하고, 둘이니까 복수예요."],
["or","펜 있어요?","Do you have a pen","the pens","아무 펜 하나라서 관사 a와 단수 pen이에요."],
["or","저는 그녀를 좋아해요","I like her","she","동사 뒤에는 목적격 her예요."],
["or","저는 여동생이 둘 있어요","I have two sisters","sister a","둘이니까 복수 sisters예요. 관사 a는 못 써요."],
["fi","Call __ tonight.","오늘 밤에 저한테 전화해요","me","I|my|mine","동사 뒤에는 me예요."],
["fi","I work with __.","저는 그와 같이 일해요","him","he|his|he's","전치사 뒤에도 목적격을 써요."],
["fi","She __ a dog.","그녀는 개를 키워요","has","have|is|haves","she라서 has예요."],
["ty","저 좀 도와줄래요?","Can you help me|Could you help me","can you · help · me","I","동사 뒤에는 목적격 me예요."],
["ty","펜 있어요?","Do you have a pen","do you have · pen — 관사 a","the","아무 펜 하나를 찾으니까 관사 a예요."],
["ty","저는 친구가 많아요","I have many friends|I have a lot of friends","have · many · friend — 복수","friend","many 뒤에는 복수 friends가 와요."]]},
{ id:"can-like", title:"can, like + -ing, I'd like: 할 수 있는 것과 원하는 것", blurb:"할 수 있는 것, 좋아하는 것, 지금 원하는 것을 말해요.", deck:"스몰토크", body:`
<p>자기소개와 주문에 바로 쓰는 세 가지 틀이에요.</p>
<h3>can: 할 수 있어요</h3>
<p><b>can + 동사원형</b>이에요. 주어가 he, she여도 -s를 붙이지 않아요.</p>
{{ex:I can swim.|아이 캔 스윔|저는 수영할 수 있어요}}{{ex:I can't drive.|아이 캔트 드라이브|저는 운전 못 해요}}{{ex:Can you speak Korean?|캔 유 스픽 코리언?|한국어 할 수 있어요?}}
<h3>like + -ing: ~하는 걸 좋아해요</h3>
<p>취미를 말할 때는 like, love 뒤에 <b>동사 + ing</b>를 써요.</p>
{{ex:I like cooking.|아이 라익 쿠킹|저는 요리하는 걸 좋아해요}}{{ex:I love watching movies.|아이 러브 왓칭 무비즈|저는 영화 보는 걸 정말 좋아해요}}{{ex:I don't like running.|아이 돈 라익 러닝|저는 달리기를 안 좋아해요}}
<h3>I'd like: ~주세요, ~하고 싶어요</h3>
<p><b>I like</b>는 늘 좋아한다는 뜻이고, <b>I'd like</b>는 지금 원한다는 공손한 표현이에요. 주문할 때는 I'd like를 써요.</p>
{{ex:I'd like a coffee, please.|아이드 라이커 커피 플리즈|커피 한 잔 주세요}}{{ex:Would you like some tea?|우쥬 라익 썸 티?|차 좀 드릴까요?}}
<div class="tip">가장 흔한 실수: <b>He can swims.</b> (X) → <b>He can swim.</b> (O), 카페에서 <b>I like a coffee.</b> (X) → <b>I'd like a coffee.</b> (O)</div>`,
check:[["She can ___ very well. 빈칸에 알맞은 것은?",["sings","sing","singing","to sing"],1,"can 뒤에는 동사원형이 와요."],["'저는 요리하는 걸 좋아해요'를 영어로 하면?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like 뒤에는 -ing를 써요."],["카페에서 주문할 때 가장 자연스러운 말은?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"지금 원하는 것은 I'd like로 말해요."]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","can 뒤에는 동사원형이 와요."],
["mc","'저는 운전 못 해요' =","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can의 부정은 can't예요."],
["mc","'저는 영화 보는 걸 좋아해요' =","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like 뒤는 -ing, 영화 전체는 복수 movies예요."],
["mc","주문할 때 '커피 한 잔 주세요' =","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","지금 원하는 것은 I'd like로 말해요."],
["mc","'차 좀 드릴까요?' =","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","권할 때는 Would you like ~?예요."],
["or","커피 한 잔 주세요","I'd like a coffee please","the coffees","주문하는 한 잔이라 관사 a와 단수 coffee예요."],
["or","저는 책 읽는 걸 좋아해요","I like reading books","book read","like 뒤는 -ing, 책 전체는 복수 books예요."],
["or","수영할 줄 알아요?","Can you swim","swimming","can 뒤에는 동사원형이 와요."],
["fi","I can't __.","저는 수영 못 해요","swim","swimming|swims|to swim","can't 뒤에는 동사원형이 와요."],
["fi","I like __ music.","저는 음악 듣는 걸 좋아해요","listening to","listen to|listen|to listening","like 뒤에는 -ing를 써요."],
["fi","__ like a sandwich, please.","샌드위치 하나 주세요","I'd|I would","I|I'm|I can","주문은 I'd like로 해요."],
["ty","저는 요리하는 걸 좋아해요","I like cooking|I love cooking|I like to cook","like · cook — -ing","cook","like 뒤에는 -ing를 써요."],
["ty","샌드위치 하나 주세요","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — 관사 a","the","아무 샌드위치 하나라서 관사 a예요."],
["ty","저는 개를 좋아해요","I like dogs|I love dogs","like · dog — 복수","dog","개 전체를 말할 때는 복수 dogs예요."]]},
{ id:"continuous", title:"지금 하는 중: be + -ing", blurb:"늘 하는 일은 현재형, 지금 하는 일은 be + -ing.", deck:"스몰토크", body:`
<p>한국어 "일해요"는 습관도 되고 지금 하는 일도 돼요. 영어는 둘을 나눠요. <b>지금 이 순간</b> 하고 있는 일은 <b>be + 동사-ing</b>예요.</p>
{{ex:I'm working now.|아임 워킹 나우|저 지금 일하고 있어요}}{{ex:She's cooking dinner.|쉬즈 쿠킹 디너|그녀는 저녁을 만들고 있어요}}{{ex:It's raining.|이츠 레이닝|비가 오고 있어요}}
<h3>질문과 부정</h3>
{{ex:What are you doing?|와라유 두잉?|지금 뭐 해요?}}{{ex:Are you listening?|아 유 리스닝?|듣고 있어요?}}{{ex:I'm not sleeping.|아임 낫 슬리핑|저 안 자고 있어요}}
<h3>현재형과 비교</h3>
<div class="tbl"><table><tr><th>늘 (현재형)</th><th>지금 (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>-ing를 붙이지 않는 동사</h3>
<p>like, know, want, need, have(가지다)처럼 <b>상태</b>를 말하는 동사는 지금 일이어도 현재형으로 써요.</p>
{{ex:I know him.|아이 노우 힘|저는 그를 알아요}}{{ex:I want some water.|아이 원트 썸 워러|물이 마시고 싶어요}}
<div class="tip">가장 흔한 실수: be동사를 빼먹는 것. <b>I working.</b> (X) → <b>I'm working.</b> (O), <b>I'm knowing.</b> (X) → <b>I know.</b> (O)</div>`,
check:[["'지금 뭐 해요?'를 영어로 하면?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"지금 하는 일은 be + -ing로 물어요."],["I ___ coffee every morning. 빈칸에 알맞은 것은?",["am drinking","drinking","drink","am drink"],2,"매일 하는 습관은 현재형이에요."],["다음 중 알맞은 문장은?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know, want, have(소유)는 -ing를 쓰지 않아요."]],
practice:[
["mc","'저 지금 일하고 있어요' =","I'm working now.","I work now am.","I'm work now.","I working now.","지금 하는 일은 be + -ing예요."],
["mc","'그녀는 저녁을 만들고 있어요' =","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing이고, 식사 이름에는 관사가 없어요."],
["mc","매일 하는 일을 말하는 문장은?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","습관은 현재형이에요."],
["mc","'지금 뭐 해요?' =","What are you doing?","What do you doing?","What are you do?","What you are doing?","의문사 + be + 주어 + -ing예요."],
["mc","'저는 그를 알아요' =","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know는 -ing를 쓰지 않는 동사예요."],
["or","저는 책을 읽고 있어요","I'm reading a book","read books","지금 읽는 한 권이라 관사 a와 단수 book이에요."],
["or","아이들이 놀고 있어요","The kids are playing","kid is","여럿이라 복수 kids와 are를 써요."],
["or","지금 비가 오고 있어요","It's raining now","rains","지금 일어나는 일은 be + -ing예요."],
["fi","I'm __ TV.","저는 TV를 보고 있어요","watching","watch|watches|to watch","be 뒤에는 -ing가 와요."],
["fi","What __ you doing?","뭐 하고 있어요?","are","do|is|does","you에는 are예요."],
["fi","She __ working today.","그녀는 오늘 일 안 해요","isn't|is not","doesn't|don't|not","be + -ing의 부정은 isn't예요."],
["ty","저 지금 요리하고 있어요","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook — -ing · now","cook","지금 하는 일은 be + -ing예요."],
["ty","저는 영화를 보고 있어요","I'm watching a movie","I'm · watching · movie — 관사 a","the","아무 영화 한 편이라 관사 a예요."],
["ty","아이들이 자고 있어요","The kids are sleeping|The children are sleeping","kids · are · sleeping — 복수","kid","여럿이라 복수 kids와 are예요."]]},
{ id:"past", title:"과거형: was / were와 -ed", blurb:"be동사는 was·were, 일반동사는 -ed. 질문과 부정은 did.", deck:"스몰토크", body:`
<p>한국어의 '-았/었어요'에 해당해요. be동사와 일반동사의 과거가 따로 있어요.</p>
<h3>be동사의 과거: was / were</h3>
<p>I, he, she, it에는 <b>was</b>, you, we, they에는 <b>were</b>예요.</p>
{{ex:I was tired.|아이 워즈 타이어드|피곤했어요}}{{ex:It was fun.|잇 워즈 펀|재미있었어요}}{{ex:We were at home.|위 워 앳 홈|우리는 집에 있었어요}}{{ex:Were you busy?|워 유 비지?|바빴어요?}}
<h3>일반동사의 과거: -ed</h3>
<p>동사 끝에 <b>-ed</b>를 붙여요. 주어가 누구든 모양이 같아요.</p>
{{ex:I worked yesterday.|아이 웍트 예스터데이|어제 일했어요}}{{ex:We watched a movie.|위 왓치트 어 무비|우리는 영화를 봤어요}}{{ex:She called me.|쉬 콜드 미|그녀가 저한테 전화했어요}}
<h3>부정과 질문은 did</h3>
<p><b>didn't</b>나 <b>Did</b>를 쓰면 동사는 원래 모양으로 돌아가요.</p>
{{ex:I didn't work yesterday.|아이 디든 워크 예스터데이|어제 일 안 했어요}}{{ex:Did you call me?|디쥬 콜 미?|저한테 전화했어요?}}
<div class="tip">가장 흔한 실수: <b>I didn't worked.</b> (X) → <b>I didn't work.</b> (O), <b>I was work.</b> (X) → <b>I worked.</b> (O)</div>`,
check:[["They ___ at home yesterday. 빈칸에 알맞은 것은?",["was","were","did","are"],1,"they에는 were예요."],["'어제 일 안 했어요'를 영어로 하면?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't 뒤에는 동사원형이 와요."],["Did you ___ the movie? 빈칸에 알맞은 것은?",["watch","watched","watching","watches"],0,"Did 뒤에는 동사원형이 와요."]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","I에는 was예요."],
["mc","'우리는 영화를 봤어요' =","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","일반동사 과거는 -ed예요."],
["mc","'어제 전화했어요?' =","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did 뒤에는 동사원형이 와요."],
["mc","'재미있었어요' =","It was fun.","It were fun.","It did fun.","It funned.","it에는 was예요."],
["mc","'바빴어요?' =","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy는 상태라서 be동사로 물어요."],
["or","우리는 영화를 봤어요","We watched a movie","watch movies","영화 한 편이라 관사 a와 단수 movie예요."],
["or","(어린아이가) 저는 친구들과 놀았어요","I played with my friends","friend play","여러 명이라 복수 friends예요."],
["or","어제 일 안 했어요","I didn't work yesterday","worked","didn't 뒤에는 동사원형이 와요."],
["fi","We __ at home last night.","우리는 어젯밤에 집에 있었어요","were","was|did|are","we에는 were예요."],
["fi","I __ soccer yesterday.","어제 축구했어요","played","play|playing|was play","과거는 -ed예요."],
["fi","__ you work yesterday?","어제 일했어요?","Did","Were|Do|Was","일반동사 과거 질문은 Did예요."],
["ty","피곤했어요","I was tired","was · tired","were","I에는 was예요."],
["ty","저는 영화를 봤어요","I watched a movie","watched · movie — 관사 a","the","영화 한 편이라 관사 a를 붙여요."],
["ty","저는 친구들한테 전화했어요","I called my friends","called · my · friend — 복수","friend","여러 명이라 복수 friends예요."]]},
{ id:"irregular-past", title:"불규칙 과거: went, ate, saw", blurb:"가장 자주 쓰는 동사일수록 -ed가 아니에요. 12개만 먼저 외워요.", deck:"스몰토크", body:`
<p>매일 쓰는 동사들은 과거형이 <b>불규칙</b>이에요. 규칙이 없으니 짝으로 외워요.</p>
<div class="tbl"><table><tr><th>현재</th><th>과거</th><th>현재</th><th>과거</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Busan.|아이 웬 투 부산|부산에 갔어요}}{{ex:We ate pizza.|위 에잇 피짜|우리는 피자를 먹었어요}}{{ex:I saw a movie.|아이 쏘 어 무비|영화를 봤어요}}{{ex:I met my friends.|아이 멧 마이 프렌즈|친구들을 만났어요}}{{ex:I bought a book.|아이 봇 어 북|책을 한 권 샀어요}}
<h3>질문과 부정에서는 원래 모양으로</h3>
<p><b>did</b>가 과거를 표시하니까 동사는 원형으로 돌아가요.</p>
{{ex:What did you do?|왓 디쥬 두?|뭐 했어요?}}{{ex:Where did you go?|웨어 디쥬 고?|어디 갔어요?}}{{ex:I didn't go.|아이 디든 고|안 갔어요}}
<div class="tip">가장 흔한 실수: <b>I goed.</b> (X) → <b>I went.</b> (O), <b>Did you went?</b> (X) → <b>Did you go?</b> (O)</div>`,
check:[["go의 과거형은?",["goed","gone","went","going"],2,"go의 과거는 went예요."],["'뭐 했어요?'를 영어로 하면?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did 뒤에는 동사원형 do가 와요."],["I didn't ___ breakfast. 빈칸에 알맞은 것은?",["ate","eaten","eats","eat"],3,"didn't 뒤에는 동사원형이 와요."]],
practice:[
["mc","eat의 과거형은?","ate","eated","eat","eaten","eat의 과거는 ate예요."],
["mc","'어디 갔어요?' =","Where did you go?","Where did you went?","Where you went?","Where were you go?","did 뒤에는 동사원형이 와요."],
["mc","'저는 책을 한 권 샀어요' =","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy의 과거는 bought, 한 권이라 관사 a예요."],
["mc","see의 과거형은?","saw","seed","seen","sawed","see의 과거는 saw예요."],
["mc","'저는 안 갔어요' =","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't 뒤에는 동사원형이 와요."],
["or","저는 영화를 봤어요","I saw a movie","see movies","한 편이라 관사 a와 단수 movie예요. see의 과거는 saw예요."],
["or","우리는 피자를 먹었어요","We ate pizza","eated","eat의 과거는 ate예요."],
["or","저는 친구들을 만났어요","I met my friends","friend meet","여러 명이라 복수 friends예요."],
["fi","I __ to Jeju last year.","작년에 제주에 갔어요","went","go|goed|gone","go의 과거는 went예요."],
["fi","What did you __?","뭐 먹었어요?","eat","ate|eaten|eating","did 뒤에는 동사원형이 와요."],
["fi","She __ a new phone.","그녀는 새 휴대폰을 샀어요","bought","buyed|buy|buys","buy의 과거는 bought예요."],
["ty","저는 부산에 갔어요","I went to Busan","went · to · Busan","go","go의 과거는 went예요."],
["ty","저는 책을 한 권 샀어요","I bought a book","bought · book — 관사 a","the","한 권이라 관사 a를 붙여요."],
["ty","저는 친구들을 만났어요","I met my friends|I saw my friends","met · my · friend — 복수","friend","여러 명이라 복수 friends예요."]]},
{ id:"the", title:"the 다시 보기: 처음엔 a, 다음엔 the", blurb:"처음 꺼낼 땐 a, 서로 아는 것이 되면 the.", deck:"길 묻기·교통", body:`
<p>관사는 한 번에 익혀지지 않아요. 여기서는 <b>the</b>를 쓰는 때와 <b>아무것도 안 쓰는 때</b>를 다시 연습해요.</p>
<h3>처음엔 a, 다시 말할 땐 the</h3>
<p>듣는 사람이 처음 듣는 것이면 a, 방금 말해서 이제 아는 것이면 the예요.</p>
{{ex:I bought a shirt. The shirt is blue.|아이 봇 어 셔트. 더 셔트 이즈 블루|셔츠를 하나 샀어요. 그 셔츠는 파란색이에요}}
<h3>상황상 하나뿐이면 the</h3>
<p>이 방의 창문, 이 근처의 역처럼 무엇인지 뻔하면 처음부터 the예요.</p>
{{ex:Can you open the window?|캔 유 오픈 더 윈도우?|창문 좀 열어 줄래요?}}{{ex:Where's the subway station?|웨어즈 더 서브웨이 스테이션?|지하철역이 어디예요?}}{{ex:The sun is hot today.|더 썬 이즈 핫 투데이|오늘 햇볕이 뜨거워요}}
<h3>관사를 안 쓰는 표현</h3>
<p>자주 쓰는 장소·교통·식사 표현은 통째로 외워요.</p>
{{ex:I go to work by bus.|아이 고우 투 워크 바이 버스|저는 버스로 출근해요}}{{ex:I'm at home.|아임 앳 홈|저 집에 있어요}}{{ex:I go to bed at eleven.|아이 고우 투 베드 앳 일레븐|저는 11시에 자요}}
<div class="tip">스스로 물어보세요: "듣는 사람이 <b>어느 것인지</b> 알까?" 알면 the, 모르면 a예요.</div>`,
check:[["I have a cat. ___ cat is white. 빈칸에 알맞은 것은?",["A","An","The","(없음)"],2,"방금 말한 그 고양이라서 the예요."],["I go to ___ work by bus. 빈칸에 알맞은 것은?",["a","the","an","(없음)"],3,"go to work에는 관사를 쓰지 않아요."],["이 방의 창문을 열어 달라고 할 때 알맞은 말은?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"둘 다 아는 그 창문이라서 the예요."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","방금 말한 그 셔츠라서 the예요."],
["mc","'역이 어디예요?' =","Where's the station?","Where's a station?","Where's station?","Where the station?","이 근처의 그 역이라서 the예요."],
["mc","다음 중 알맞은 문장은?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work, by bus에는 관사가 없어요."],
["mc","'해가 뜨거워요' =","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","하나뿐인 것에는 the를 붙여요."],
["mc","'저 집에 있어요' =","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home에는 관사가 없어요."],
["or","창문 좀 열어 줄래요?","Can you open the window","a windows","둘 다 아는 그 창문이라 관사 the예요."],
["or","저는 버스로 출근해요","I go to work by bus","the a","go to work, by bus에는 관사를 쓰지 않아요."],
["or","그 개는 커요","The dog is big","A dogs","이미 말한 그 개라서 관사 the예요."],
["fi","I saw a movie. __ movie was great.","영화를 봤어요. 그 영화 정말 좋았어요","The","A|An|Some","방금 말한 그 영화라서 the예요."],
["fi","Where's __ bathroom?","화장실이 어디예요?","the","a|an|some","이 건물의 그 화장실이라서 the예요."],
["fi","I have __ idea.","좋은 생각이 있어요","an","a|the|some","처음 꺼내는 하나이고 모음 소리로 시작해서 an이에요."],
["ty","문 좀 닫아 줄래요?","Can you close the door|Could you close the door","can you · close · door — 관사 the","a","둘 다 아는 그 문이라 관사 the예요."],
["ty","역이 어디예요?","Where is the station|Where's the station","where · station — 관사 the","a","이 근처의 그 역이라 관사 the예요."],
["ty","저는 집에 있어요","I'm at home|I'm home","I'm · at · home — 관사 없이","the","home 앞에는 관사를 쓰지 않아요."]]},
{ id:"adjectives", title:"형용사와 비교: bigger, more expensive, the best", blurb:"형용사는 명사 앞에. 비교는 -er / more, 최고는 the -est / the most.", deck:"쇼핑·계산", body:`
<p>형용사는 명사 <b>앞</b>이나 be동사 <b>뒤</b>에 와요. 쇼핑할 때 꼭 필요한 비교 표현까지 같이 익혀요.</p>
{{ex:a big bag|어 빅 백|큰 가방}}{{ex:This bag is big.|디스 백 이즈 빅|이 가방은 커요}}{{ex:It's too small.|이츠 투 스몰|너무 작아요}}
<h3>비교: -er 또는 more</h3>
<p>짧은 단어는 <b>-er</b>, 긴 단어는 앞에 <b>more</b>를 붙여요. '~보다'는 <b>than</b>이에요.</p>
<div class="tbl"><table><tr><th>원래</th><th>더 ~한</th><th>가장 ~한</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|디스 원 이즈 치퍼|이게 더 싸요}}{{ex:It's more expensive than that one.|이츠 모어 익스펜시브 댄 댓 원|저것보다 더 비싸요}}{{ex:Do you have a bigger size?|두 유 해버 비거 사이즈?|더 큰 사이즈 있어요?}}
<h3>최상급에는 the</h3>
{{ex:This is the best restaurant here.|디스 이즈 더 베스트 레스토란트 히어|여기서 제일 좋은 식당이에요}}{{ex:Which is the cheapest?|위치 이즈 더 치피스트?|어느 게 제일 싸요?}}
<div class="tip">가장 흔한 실수: <b>more cheaper</b>, <b>more good</b> (X) → <b>cheaper</b>, <b>better</b> (O). -er와 more는 같이 쓰지 않아요.</div>`,
check:[["big의 비교급은?",["more big","biger","bigger","most big"],2,"짧은 단어는 -er, 끝 자음을 한 번 더 써요."],["This is ___ expensive than that. 빈칸에 알맞은 것은?",["more","most","much","very"],0,"긴 단어의 비교급은 more를 붙여요."],["good의 최상급은?",["the goodest","the most good","the better","the best"],3,"good – better – the best예요."]],
practice:[
["mc","cheap의 비교급은?","cheaper","more cheap","cheapper","most cheap","짧은 단어는 -er를 붙여요."],
["mc","'이게 더 비싸요' =","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","긴 단어는 more를 붙여요."],
["mc","'더 큰 사이즈 있어요?' =","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","관사 + 형용사 + 명사 순서예요."],
["mc","good의 비교급은?","better","gooder","more good","best","good – better – best예요."],
["mc","'여기가 제일 좋은 식당이에요' =","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","최상급 앞에는 the를 붙여요."],
["or","더 큰 사이즈 있어요?","Do you have a bigger size","the sizes","아무 사이즈 하나를 찾으니까 관사 a예요."],
["or","이게 제일 싸요","This is the cheapest","a cheaper","최상급 앞에는 관사 the를 붙여요."],
["or","이게 저것보다 싸요","This is cheaper than that","more","-er 형용사에는 more를 붙이지 않아요."],
["fi","It's __ small.","너무 작아요","too","much|more|most","'너무'는 too예요."],
["fi","This is cheaper __ that one.","이게 저것보다 싸요","than","then|that|more","'~보다'는 than이에요."],
["fi","It's the __ expensive one.","제일 비싼 거예요","most","more|much|very","긴 단어의 최상급은 the most예요."],
["ty","더 작은 사이즈 있어요?","Do you have a smaller size","smaller · size — 관사 a","the","아무 사이즈 하나를 찾으니까 관사 a예요."],
["ty","이게 제일 좋아요","This is the best|This one is the best","the · best — 관사 the","a","최상급 앞에는 관사 the를 붙여요."],
["ty","이게 더 싸요","This is cheaper|This one is cheaper","cheap — 비교급","more","짧은 단어는 -er를 붙여요."]]},
{ id:"going-to", title:"계획 말하기: be going to", blurb:"이미 마음먹은 일은 be going to + 동사.", deck:"스몰토크", body:`
<p>'~할 거예요'처럼 <b>미리 정한 계획</b>을 말할 때 써요. 틀은 <b>be + going to + 동사원형</b>이에요.</p>
{{ex:I'm going to visit Busan.|아임 고잉 투 비짓 부산|저는 부산에 갈 거예요}}{{ex:She's going to buy a car.|쉬즈 고잉 투 바이 어 카|그녀는 차를 살 거예요}}{{ex:We're going to have dinner.|위어 고잉 투 해브 디너|우리는 저녁을 먹을 거예요}}
<h3>부정과 질문</h3>
{{ex:I'm not going to go.|아임 낫 고잉 투 고|저는 안 갈 거예요}}{{ex:Are you going to come?|아 유 고잉 투 컴?|올 거예요?}}{{ex:What are you going to do this weekend?|왓 아 유 고잉 투 두 디스 위켄드?|이번 주말에 뭐 할 거예요?}}
<h3>보이는 대로 예상할 때도</h3>
{{ex:It's going to rain.|이츠 고잉 투 레인|비가 올 거예요}}
<h3>함께 쓰는 시간 표현</h3>
<p>tomorrow(내일), tonight(오늘 밤), this weekend(이번 주말), next week(다음 주)를 문장 끝에 붙여요.</p>
<div class="tip">말할 때는 going to가 <b>gonna(거나)</b>처럼 들려요. 그리고 be동사를 빼먹지 마세요: <b>I going to go.</b> (X) → <b>I'm going to go.</b> (O)</div>`,
check:[["'내일 친구를 만날 거예요'를 영어로 하면?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + 동사원형이에요."],["She ___ going to study. 빈칸에 알맞은 것은?",["am","are","is","be"],2,"she에는 is예요."],["'주말에 뭐 할 거예요?'를 영어로 하면?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"의문사 + be + 주어 + going to예요."]],
practice:[
["mc","'저는 부산에 갈 거예요' =","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + 동사원형이에요."],
["mc","They ___ going to come.","are","is","am","be","they에는 are예요."],
["mc","'비가 올 거예요' =","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to 뒤에는 동사원형이 와요."],
["mc","'저는 안 갈 거예요' =","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","be동사 뒤에 not을 넣어요."],
["mc","'올 거예요?' =","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","be동사를 앞으로 보내요."],
["or","그녀는 차를 살 거예요","She's going to buy a car","the cars","차 한 대라서 관사 a와 단수 car예요."],
["or","저는 친구들을 만날 거예요","I'm going to meet my friends","friend","여러 명이라 복수 friends예요."],
["or","우리는 저녁을 먹을 거예요","We're going to have dinner","a","식사 이름 dinner에는 관사를 쓰지 않아요."],
["fi","I'm going __ study tonight.","오늘 밤에 공부할 거예요","to","for|at|will","going to + 동사원형이에요."],
["fi","__ you going to come?","올 거예요?","Are","Do|Is|Will","you에는 Are예요."],
["fi","It's going to __ tomorrow.","내일 비가 올 거예요","rain","rains|raining|rained","going to 뒤에는 동사원형이 와요."],
["ty","저는 영화를 볼 거예요","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — 관사 a","the","아무 영화 한 편이라 관사 a예요."],
["ty","뭐 할 거예요?","What are you going to do","what · going to · do","will","계획을 물을 때는 be going to예요."],
["ty","저는 친구들을 만날 거예요","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — 복수","friend","여러 명이라 복수 friends예요."]]},
{ id:"joining", title:"문장 잇기: and, but, or, so, because", blurb:"짧은 문장 두 개를 하나로. so와 because는 순서가 반대예요.", deck:"감정·반응", body:`
<p>짧은 문장만 말하면 뚝뚝 끊겨요. 이 다섯 단어로 문장을 이으면 훨씬 자연스러워요.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|아이 라익 커피 앤 티|저는 커피와 차를 좋아해요}}{{ex:I'm tired but happy.|아임 타이어드 벗 해피|피곤하지만 행복해요}}{{ex:Coffee or tea?|커피 오어 티?|커피 아니면 차?}}
<h3>so: 그래서</h3>
<p><b>이유 + so + 결과</b> 순서예요. 한국어 '~해서'와 순서가 같아요.</p>
{{ex:I was tired, so I went home.|아이 워즈 타이어드 쏘 아이 웬 홈|피곤해서 집에 갔어요}}
<h3>because: 왜냐하면</h3>
<p><b>결과 + because + 이유</b> 순서예요. 한국어와 반대라서 주의해요.</p>
{{ex:I went home because I was tired.|아이 웬 홈 비코즈 아이 워즈 타이어드|피곤해서 집에 갔어요}}{{ex:I stayed home because it was raining.|아이 스테이드 홈 비코즈 잇 워즈 레이닝|비가 와서 집에 있었어요}}
<h3>too: ~도</h3>
{{ex:I like it too.|아이 라이킷 투|저도 좋아해요}}
<div class="tip">so와 because를 한 문장에 같이 쓰지 않아요: <b>Because I was tired, so I went home.</b> (X). 둘 중 하나만 고르세요.</div>`,
check:[["I was sick, ___ I stayed home. 빈칸에 알맞은 것은?",["because","but","so","or"],2,"이유 다음에 결과가 오면 so예요."],["I stayed home ___ I was sick. 빈칸에 알맞은 것은?",["because","so","but","and"],0,"결과 다음에 이유가 오면 because예요."],["'커피 드실래요, 차 드실래요?'에 알맞은 말은?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"둘 중 하나를 고를 때는 or예요."]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","반대되는 내용은 but으로 이어요."],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","이유 다음에 결과가 오면 so예요."],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","결과 다음에 이유가 오면 because예요."],
["mc","'커피 아니면 차?' =","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","둘 중 하나는 or예요."],
["mc","'피곤하지만 행복해요' =","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","'~지만'은 but이에요."],
["or","저는 고양이와 개를 좋아해요","I like cats and dogs","cat dog","동물 전체는 복수 cats, dogs로 말해요."],
["or","커피 한 잔이랑 샌드위치 하나 주세요","A coffee and a sandwich please","the or","하나씩 주문하니까 각각 관사 a를 붙여요."],
["or","배고파서 먹었어요","I was hungry so I ate","because","이유 다음에 결과가 오면 so예요."],
["fi","I'm tired __ happy.","피곤하지만 행복해요","but","so|because|or","'~지만'은 but이에요."],
["fi","I stayed home __ it was raining.","비가 와서 집에 있었어요","because","so|but|or","결과 다음에 이유가 오면 because예요."],
["fi","Coffee __ tea?","커피 아니면 차?","or","so|but|because","둘 중 하나는 or예요."],
["ty","저는 커피와 차를 좋아해요","I like coffee and tea","like · coffee · and · tea — 관사 없이","a","일반적인 coffee, tea에는 관사를 붙이지 않아요."],
["ty","피곤하지만 행복해요","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","'~지만'은 but이에요."],
["ty","저는 개와 고양이를 좋아해요","I like dogs and cats|I like cats and dogs","dog · and · cat — 복수","dog","동물 전체는 복수 dogs, cats로 말해요."]]},
{ id:"konglish", title:"콩글리시: 한국에서만 통하는 영어", blurb:"핸드폰, 노트북, 파이팅! 한국에서는 다 통하지만 외국에서는 못 알아듣는 말을 바른 영어로 바꿔요.", deck:"영화·드라마·슬랭", body:`
<p>콩글리시는 틀린 영어라기보다 영어에서 온 <b>한국어 단어</b>예요. 한국에서는 누구나 알아듣지만, 영어권 사람에게 그대로 말하면 못 알아듣거나 전혀 다른 뜻으로 들어요. 한국어로 말할 때는 그대로 쓰고, 영어로 말할 때만 바꾸면 돼요.</p>
<h3>물건 이름</h3>
<div class="tbl"><table><tr><th>한국에서</th><th>영어로</th><th>그대로 말하면</th></tr><tr><td>핸드폰</td><td class="k">cell phone, phone</td><td>hand phone은 영어권에서 거의 안 써요. 보통 그냥 phone</td></tr><tr><td>노트북</td><td class="k">laptop</td><td>notebook은 공책이에요</td></tr><tr><td>아파트</td><td class="k">apartment</td><td>apart는 '떨어져서'라는 뜻이에요</td></tr><tr><td>에어컨</td><td class="k">air conditioner, AC</td><td>aircon은 영국·호주·동남아에서는 쓰지만 미국에서는 거의 안 써요. 미국에서는 AC('에이씨')</td></tr><tr><td>리모컨</td><td class="k">remote</td><td>remote control을 줄여서 remote예요</td></tr><tr><td>콘센트</td><td class="k">outlet</td><td>consent는 '동의'예요. 영국에서는 socket</td></tr><tr><td>핸들 (자동차)</td><td class="k">steering wheel</td><td>handle은 문이나 컵의 손잡이예요</td></tr></table></div>
{{ex:I need a new laptop.|아이 니더 뉴 랩탑|새 노트북이 필요해요}}{{ex:I live in an apartment.|아이 리브 인 언 어파트먼트|저는 아파트에 살아요}}{{ex:The air conditioner isn't working.|디 에어 컨디셔너 이즌트 워킹|에어컨이 안 돼요}}{{ex:Can you pass me the remote?|캔 유 패스 미 더 리모트?|리모컨 좀 건네줄래요?}}{{ex:Where's the outlet?|웨어즈 디 아웃렛?|콘센트 어디 있어요?}}
<p>단어를 바꿨으면 관사도 챙겨요. laptop, apartment는 셀 수 있는 명사라서 <b>a laptop</b>, <b>an apartment</b>예요. 방에 하나뿐인 리모컨은 <b>the remote</b>예요.</p>
<h3>생활 속 표현</h3>
<div class="tbl"><table><tr><th>한국에서</th><th>영어로</th><th>그대로 말하면</th></tr><tr><td>파이팅!</td><td class="k">You can do it! / Good luck!</td><td>fighting은 '싸우는 중'이라서 응원으로 들리지 않아요</td></tr><tr><td>서비스 (공짜)</td><td class="k">It's on the house. / It's free.</td><td>service는 가게의 응대예요: The service was great.</td></tr><tr><td>원샷!</td><td class="k">Bottoms up!</td><td>건배하면서 잔을 비우자고 하는 말이에요. 술자리에서 one shot은 '(술) 샷 한 잔'으로 들려요</td></tr><tr><td>셀카</td><td class="k">selfie</td><td>selca라는 영어 단어는 없어요</td></tr><tr><td>아이쇼핑</td><td class="k">window shopping</td><td>eye shopping이라는 말은 없어요</td></tr><tr><td>컨닝</td><td class="k">cheating</td><td>cunning은 '교활한'이라는 뜻이에요</td></tr><tr><td>사인</td><td class="k">signature / autograph</td><td>서류에 하는 서명은 signature, 연예인에게 받는 사인은 autograph예요. sign은 '서명하다'라는 동사나 표지판이에요</td></tr><tr><td>헬스 (헬스장)</td><td class="k">the gym</td><td>health는 '건강'이에요. 운동한다는 말은 work out</td></tr></table></div>
{{ex:You can do it!|유 캔 두 잇!|할 수 있어! (파이팅!)}}{{ex:Good luck!|굿 럭!|행운을 빌어! (시험·면접 앞에서 파이팅!)}}{{ex:It's on the house.|잇츠 온 더 하우스|서비스예요 (가게에서 공짜로 줄 때)}}{{ex:Bottoms up!|바럼즈 업!|원샷!}}{{ex:Let's take a selfie.|렛츠 테이커 셀피|셀카 찍자}}{{ex:I'm just window shopping.|아임 저스트 윈도우 샤핑|그냥 아이쇼핑하는 중이에요}}{{ex:Can I get your autograph?|캔 아이 겟 유어 오토그래프?|사인 좀 해 주실래요? (연예인에게)}}{{ex:I go to the gym every day.|아이 고우 투 더 짐 에브리 데이|저는 매일 헬스장에 가요}}
<h3>한국어 문장을 그대로 옮기면</h3>
<p>단어는 다 영어인데 문장이 어색한 경우예요. 문법은 맞아도 영어권 사람은 이렇게 말하지 않거나, 뜻이 다르게 들려요.</p>
<div class="tbl"><table><tr><th>한국어</th><th>그대로 옮기면</th><th>자연스러운 영어</th></tr><tr><td>약속이 있어요</td><td>I have a promise.</td><td class="k">I have plans.</td></tr><tr><td>(권할 때 거절) 괜찮아요</td><td>I'm okay. (이것만 말하면 애매해요)</td><td class="k">No, thanks. / I'm good, thanks.</td></tr><tr><td>김치 알아요? / 김치 먹어 봤어요?</td><td>Do you know kimchi?</td><td class="k">Have you heard of kimchi? / Have you tried kimchi?</td></tr><tr><td>친구들이랑 놀았어요</td><td>I played with my friends.</td><td class="k">I hung out with my friends.</td></tr><tr><td>컨디션이 안 좋아요</td><td>My condition is bad.</td><td class="k">I'm not feeling well.</td></tr><tr><td>부러워요!</td><td>I envy you. (틀리진 않지만 무거워요)</td><td class="k">Lucky you! / I'm so jealous.</td></tr></table></div>
<p>promise는 '꼭 하겠다는 다짐'이라서 만날 약속은 <b>plans</b>예요. I'm okay, thanks.나 I'm good.도 거절로 쓰지만, I'm okay만 말하면 한국어 '괜찮아요'처럼 '좋다'인지 '됐다'인지 헷갈릴 수 있어요. 분명하게 거절하려면 <b>No, thanks.</b>가 가장 안전해요. Do you know kimchi?는 김치를 '잘 아느냐'고 묻는 것처럼 어색하게 들려요. 들어 봤는지는 <b>Have you heard of ~?</b>, 먹어 봤는지는 <b>Have you tried ~?</b>로 물어요. 어른이 친구와 노는 건 play가 아니라 <b>hang out</b>이고, 과거형은 hung out이에요. condition은 주로 병이나 물건의 상태를 말할 때 써요. I envy you는 틀린 말은 아니지만 조금 진지하게 들려요. 가볍게 '부럽다!'라고 할 때는 <b>Lucky you!</b>나 <b>I'm so jealous!</b>예요. 여기서 jealous는 질투가 아니라 장난스러운 부러움이에요.</p>
{{ex:I have plans.|아이 해브 플랜즈|약속이 있어요}}{{ex:No, thanks.|노, 땡스|아니요, 괜찮아요 (거절)}}{{ex:Have you heard of kimchi?|해뷰 허드 오브 김치?|김치 알아요? (들어 봤어요?)}}{{ex:Have you tried kimchi?|해뷰 트라이드 김치?|김치 먹어 봤어요?}}{{ex:I hung out with my friends.|아이 헝아웃 위드 마이 프렌즈|친구들이랑 놀았어요}}{{ex:I'm not feeling well.|아임 낫 필링 웰|몸이 좀 안 좋아요}}{{ex:Lucky you!|럭키 유!|좋겠다! 부럽다!}}
<div class="tip">콩글리시를 부끄러워할 필요는 없어요. 한국에서는 잘 통하는 말이니까요. 영어로 말할 때만 한 번 더 확인하세요: "이 단어, 영어권에서도 같은 뜻일까?" 영어로 말할 때는 이렇게 바꿔요: <b>Fighting!</b> → <b>You can do it!</b> / <b>I have a promise.</b> → <b>I have plans.</b></div>`,
check:[["'노트북 가져왔어요?' (컴퓨터)를 영어로 하면?",["Did you bring your notebook?","Did you bring your laptop?","Did you bring laptop?","Did you bring your labtop?"],1,"컴퓨터는 laptop이에요. notebook은 공책으로 들려요."],["'컨디션이 안 좋아요'(몸이 안 좋아요)를 가장 자연스럽게 말하면?",["I'm not feeling well.","My condition is bad.","I'm bad condition.","My condition is not good feeling."],0,"몸이 안 좋을 때는 I'm not feeling well.이라고 해요. condition은 병이나 물건의 상태를 말할 때 주로 써요."],["식당 직원이 공짜 음식을 주면서 하는 말로 가장 자연스러운 것은?",["It's service.","It's a service.","It's for service.","It's on the house."],3,"가게에서 공짜로 주는 것은 on the house예요. service는 응대라는 뜻이에요."]],
practice:[
["mc","'노트북 있어요?' (컴퓨터) =","Do you have a laptop?","Do you have a notebook?","Do you have laptop?","Do you have an laptop?","컴퓨터는 laptop이고, 한 대라서 관사 a를 붙여요."],
["mc","시험 보러 가는 친구에게 '파이팅!'을 가장 자연스럽게 말하면?","Good luck!","Fighting!","Fight!","You fighting!","fighting은 '싸우는 중'이라 응원으로 들리지 않아요."],
["mc","'저 지금 헬스장 가요' =","I'm going to the gym.","I'm going to the health.","I'm going to health.","I'm going to gym.","헬스장은 the gym이에요. health는 '건강'이에요."],
["mc","친구와 만날 약속이 있을 때 '약속이 있어요'를 가장 자연스럽게 말하면?","I have plans.","I have a promise.","I have promises.","I'm promise.","만날 약속은 plans예요. promise는 '꼭 하겠다는 다짐'이에요."],
["mc","술자리에서 '원샷!'을 영어로 하면?","Bottoms up!","One shot!","One shot, please!","Shot one!","잔을 비우자는 원샷은 Bottoms up!이에요. One shot은 '샷 한 잔'으로 들려요."],
["or","저는 아파트에 살아요","I live in an apartment","apart a","아파트는 apartment, 모음 소리로 시작해서 관사 an이에요."],
["or","에어컨이 안 돼요","The air conditioner isn't working","A aircon","방에 있는 그 에어컨이라 관사 the예요. 에어컨은 air conditioner예요."],
["or","리모컨 좀 건네줄래요?","Can you pass me the remote","a","방에 있는 그 리모컨이라 관사 the예요."],
["or","친구들이랑 놀았어요","I hung out with my friends","played friend","어른이 노는 건 hang out이고, 여러 명이라 복수 friends예요."],
["fi","Where's the __?","콘센트가 어디 있어요?","outlet|socket|plug|power outlet","consent|handle|remote","콘센트는 outlet이에요. consent는 '동의'예요."],
["fi","I'm just __ shopping.","그냥 아이쇼핑하는 중이에요","window","eye|eyes|look","아이쇼핑은 window shopping이에요."],
["fi","No, __.","(음료를 권할 때) 아니요, 괜찮아요","thanks|thank you|I'm good|I'm okay|I'm fine","okay|fine|good","거절은 No, thanks로 분명하게 해요."],
["ty","새 노트북이 필요해요","I need a new laptop|I need a new laptop computer","need · new · laptop — 관사 a","notebook","컴퓨터는 laptop이고, 한 대라서 관사 a예요."],
["ty","저는 매일 헬스장에 가요","I go to the gym every day|I work out at the gym every day|I go to the gym daily|Every day I go to the gym","go to · gym · every day — 관사 the","health a","헬스장은 gym이고, go to the gym은 관사 the와 같이 써요."],
["ty","셀카 찍자","Let's take a selfie|Let's take a selfie together","let's take · selfie — 관사 a","selca","셀카는 selfie, 한 장이라서 관사 a예요."],
["ty","김치 먹어 봤어요?","Have you tried kimchi|Have you ever tried kimchi|Have you had kimchi|Have you ever had kimchi|Have you eaten kimchi|Have you ever eaten kimchi|Have you tried kimchi before|Have you had kimchi before|Did you ever try kimchi","have you · tried · kimchi","know","음식 경험은 Have you tried ~?로 물어요."]]},
];
