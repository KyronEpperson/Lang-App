/* TRANSLATE/ADAPT (tl): scaffolded from tools/content/ko/more/b1.js by new_lang.js.
   Translate/adapt everything that is not English (the ko text) for tl speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,
   explanations written from the tl point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position
   identical to ko-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */
/* ko-en stage B1: new lessons (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"현재완료 2: for와 since, 지금까지 쭉", blurb:"과거에 시작해서 지금도 계속되는 일. for + 기간, since + 시작점.", deck:"자기소개", body:`
<p>현재완료의 두 번째 쓰임이에요. <b>과거에 시작해서 지금까지 이어지는 일</b>을 말해요. 한국어 '~한 지 ~ 됐어요'에 해당해요.</p>
{{ex:I've lived in Seoul for five years.|아이브 리브드 인 서울 포 파이브 이어즈|서울에 산 지 5년 됐어요}}{{ex:I've worked here since 2020.|아이브 웍트 히어 신스 투웨니 투웨니|2020년부터 여기서 일하고 있어요}}{{ex:I've known her for a long time.|아이브 노운 허 포러 롱 타임|그녀를 안 지 오래됐어요}}
<h3>for 와 since</h3>
<div class="tbl"><table><tr><th>for + 기간</th><th>since + 시작점</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long ~?</h3>
{{ex:How long have you been here?|하우 롱 해뷰 빈 히어?|여기 얼마나 계셨어요?}}{{ex:How long have you studied English?|하우 롱 해뷰 스터디드 잉글리시?|영어 공부한 지 얼마나 됐어요?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|아이브 저스트 피니쉬트|방금 끝냈어요}}{{ex:I've already seen it.|아이브 올레디 씬 잇|이미 봤어요}}{{ex:Have you eaten yet?|해뷰 이튼 옛?|벌써 먹었어요?}}
<div class="tip">가장 흔한 실수: 현재형으로 말하는 것. <b>I live here for five years.</b> (X) → <b>I've lived here for five years.</b> (O)</div>`,
check:[["I've lived here ___ three years. 빈칸에 알맞은 것은?",["since","for","during","from"],1,"기간 앞에는 for예요."],["I've worked here ___ 2020. 빈칸에 알맞은 것은?",["for","in","since","at"],2,"시작점 앞에는 since예요."],["'여기 얼마나 계셨어요?'를 영어로 하면?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + 과거분사예요."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","기간 앞에는 for예요."],
["mc","She's lived here ___ 2019.","since","for","in","at","시작점 앞에는 since예요."],
["mc","'여기 얼마나 계셨어요?' =","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + 과거분사예요."],
["mc","'방금 끝냈어요' =","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + 과거분사예요."],
["mc","'벌써 먹었어요?' =","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","질문에서 '벌써'는 yet이에요."],
["or","저는 여기서 5년 살았어요","I've lived here for five years","year since","5년이니까 복수 years, 기간 앞에는 for예요."],
["or","저는 그 영화를 이미 봤어요","I've already seen the movie","a saw","서로 아는 그 영화라서 관사 the예요."],
["or","얼마나 기다렸어요?","How long have you waited","did","How long have you + 과거분사예요."],
["fi","I've worked here __ two years.","여기서 일한 지 2년 됐어요","for","since|from|during","기간 앞에는 for예요."],
["fi","I've been here __ Monday.","월요일부터 여기 있어요","since","for|at|during","시작점 앞에는 since예요."],
["fi","Have you finished __?","벌써 끝냈어요?","yet|already","ever|never|since","질문에서 '벌써'는 yet이에요."],
["ty","저는 여기서 3년 살았어요","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — 복수","year","3년이니까 복수 years예요."],
["ty","여기 얼마나 계셨어요?","How long have you been here","how long · have you · been here","are","How long have you + 과거분사예요."],
["ty","저는 그 책을 이미 읽었어요","I've already read the book|I've read the book already|I already read the book","already · read · book — 관사 the","a","서로 아는 그 책이라서 관사 the예요."]]},
{ id:"narrative", title:"이야기 시제: 과거, 과거진행, 과거완료", blurb:"배경은 과거진행, 사건은 과거형, 더 먼저 일어난 일은 had + p.p.", deck:"영화·드라마·슬랭", body:`
<p>있었던 일을 이야기할 때는 세 가지 시제를 섞어 써요. 각자 맡은 역할이 달라요.</p>
<div class="tbl"><table><tr><th>시제</th><th>역할</th><th>예</th></tr><tr><td class="k">과거진행</td><td>배경, 하던 일</td><td>I was walking home.</td></tr><tr><td class="k">과거형</td><td>일어난 사건</td><td>I saw an old friend.</td></tr><tr><td class="k">과거완료</td><td>그보다 먼저 일어난 일</td><td>He had moved to Busan.</td></tr></table></div>
<h3>배경 + 사건</h3>
{{ex:I was walking home when I saw an old friend.|아이 워즈 워킹 홈 웬 아이 쏘 언 올드 프렌드|집에 걸어가다가 옛 친구를 만났어요}}
<h3>과거완료: had + 과거분사</h3>
<p>과거의 어느 때보다 <b>더 먼저</b> 일어난 일이에요.</p>
{{ex:When I arrived, the movie had already started.|웬 아이 어라이브드 더 무비 해드 올레디 스타티드|도착했을 때 영화는 이미 시작했어요}}{{ex:I had never seen snow before.|아이 해드 네버 씬 스노우 비포|그전에는 눈을 본 적이 없었어요}}
<h3>순서를 알려 주는 말</h3>
<p>first(먼저), then(그다음에), after that(그 후에), finally(마침내)로 이어 가요.</p>
{{ex:First we ate dinner. Then we watched a movie.|퍼스트 위 에잇 디너. 덴 위 왓치트 어 무비|먼저 저녁을 먹었어요. 그다음에 영화를 봤어요}}
<div class="tip">then(그다음에)과 than(~보다)은 발음이 비슷하지만 다른 단어예요. 이야기에는 <b>then</b>이에요.</div>`,
check:[["When I arrived, the train ___ already left. 빈칸에 알맞은 것은?",["has","was","had","did"],2,"더 먼저 일어난 일은 had + 과거분사예요."],["I ___ walking home when it started to rain. 빈칸에 알맞은 것은?",["was","had","did","have"],0,"하던 일(배경)은 과거진행이에요."],["그보다 더 먼저 일어난 일을 나타내는 문장은?",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + 과거분사가 과거완료예요."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","더 먼저 일어난 일은 had + 과거분사예요."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","하던 일은 과거진행이에요."],
["mc","'도착했을 때 기차는 이미 떠났어요' =","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","더 먼저 일어난 일에 had + 과거분사를 써요."],
["mc","이야기를 이을 때 '그다음에' =","then","than","that","them","then은 '그다음에', than은 '~보다'예요."],
["mc","'그전에는 눈을 본 적이 없었어요' =","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + 과거분사예요."],
["or","기차는 이미 떠났어요","The train had already left","a has","타려던 그 기차라서 관사 the예요."],
["or","저는 옛 친구를 만났어요","I met an old friend","a friends","old는 모음 소리로 시작해서 관사 an이에요."],
["or","저는 집에 걸어가고 있었어요","I was walking home","had","배경은 과거진행이에요."],
["fi","I was sleeping __ you called.","전화했을 때 자고 있었어요","when","than|so|had","'~했을 때'는 when이에요."],
["fi","The bus had already __.","버스는 이미 떠났어요","left|gone","leave|leaving|leaves","had 뒤에는 과거분사가 와요."],
["fi","First we ate. __ we watched a movie.","먼저 먹었어요. 그다음에 영화를 봤어요","Then|After that|Next","Than|Because|When","'그다음에'는 then이에요."],
["ty","영화는 이미 시작했어요","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — 관사 the","a","보려던 그 영화라서 관사 the예요."],
["ty","저는 옛 친구를 만났어요","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — 관사 an","a","old는 모음 소리로 시작해서 관사 an이에요."],
["ty","저는 집에 걸어가고 있었어요","I was walking home","was · walking · home","had","배경은 과거진행으로 말해요."]]},
{ id:"conditionals", title:"조건문 2·3: 가정과 후회", blurb:"지금 사실과 반대면 would, 지나간 일의 후회는 would have.", deck:"감정·반응", body:`
<p>실제가 아닌 일을 상상할 때 써요. 한국어 '~라면 ~할 텐데', '~했더라면 ~했을 텐데'예요.</p>
<h3>조건문 2: 지금 사실과 반대</h3>
<p><b>If + 과거형, would + 동사</b>예요. 과거형을 쓰지만 뜻은 지금이에요.</p>
{{ex:If I had time, I would travel.|이프 아이 해드 타임 아이 우드 트래블|시간이 있으면 여행할 텐데}}{{ex:If I were you, I'd take it.|이프 아이 워 유 아이드 테이킷|내가 너라면 그걸 받을 거야}}{{ex:What would you do?|왓 우쥬 두?|당신이라면 어떻게 하겠어요?}}
<h3>조건문 3: 지나간 일과 반대</h3>
<p><b>If + had + 과거분사, would have + 과거분사</b>예요.</p>
{{ex:If I had studied, I would have passed.|이프 아이 해드 스터디드 아이 우드 해브 패스트|공부했더라면 합격했을 텐데}}
<h3>후회: should have, I wish</h3>
{{ex:I should have called.|아이 슈드 해브 콜드|전화했어야 했는데}}{{ex:I wish I had more time.|아이 위시 아이 해드 모어 타임|시간이 더 있으면 좋겠어요}}
<div class="tbl"><table><tr><th>종류</th><th>if 쪽</th><th>결과 쪽</th></tr><tr><td>1 (가능한 일)</td><td class="k">현재형</td><td class="k">will</td></tr><tr><td>2 (지금과 반대)</td><td class="k">과거형</td><td class="k">would</td></tr><tr><td>3 (과거와 반대)</td><td class="k">had + p.p.</td><td class="k">would have + p.p.</td></tr></table></div>
<div class="tip">If I were you는 굳어진 표현이에요. I 뒤에도 was가 아니라 <b>were</b>를 써요.</div>`,
check:[["If I ___ rich, I would travel. 빈칸에 알맞은 것은?",["am","were","will be","would be"],1,"지금 사실과 반대면 과거형(were)이에요."],["If I had studied, I ___ passed. 빈칸에 알맞은 것은?",["would","will have","would have","had"],2,"과거와 반대면 would have + 과거분사예요."],["'전화했어야 했는데'를 영어로 하면?",["I should have called.","I should called.","I should had call.","I would call should."],0,"후회는 should have + 과거분사예요."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","지금 사실과 반대면 if 쪽은 과거형이에요."],
["mc","'내가 너라면 그걸 살 거야' =","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd ~는 굳어진 표현이에요."],
["mc","If I had known, I ___ come.","would have","would","will have","had","과거와 반대면 would have + 과거분사예요."],
["mc","'전화했어야 했는데' =","I should have called.","I should called.","I should had call.","I must called.","후회는 should have + 과거분사예요."],
["mc","'당신이라면 어떻게 하겠어요?' =","What would you do?","What will you did?","What would you did?","What you would do?","가정은 would + 동사원형이에요."],
["or","시간이 있으면 여행할 텐데","If I had time I'd travel","have will","지금 사실과 반대면 과거형 had와 would를 써요."],
["or","저라면 택시를 탈 거예요","I'd take a taxi","the taxis","아무 택시 한 대라서 관사 a예요."],
["or","표를 샀어야 했는데","I should have bought a ticket","the buy","표 한 장이라 관사 a예요."],
["fi","If I __ you, I'd go.","내가 너라면 갈 거야","were|was","am|be|would be","If I were you는 굳어진 표현이에요."],
["fi","I would __ helped.","도와줬을 텐데","have","had|has|having","would have + 과거분사예요."],
["fi","I wish I __ more time.","시간이 더 있으면 좋겠어요","had","have|would have|will have","I wish 뒤에는 과거형을 써요."],
["ty","내가 너라면 갈 거야","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","If I were you, I'd ~예요."],
["ty","차가 있으면 좋을 텐데","I wish I had a car","I wish · had · car — 관사 a","the","아무 차 한 대라서 관사 a예요."],
["ty","택시를 탔어야 했는데","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — 관사 a","the","아무 택시 한 대라서 관사 a예요."]]},
{ id:"passive", title:"수동태: be + 과거분사", blurb:"누가 했는지보다 무슨 일이 생겼는지가 중요할 때.", deck:"직장·이메일", body:`
<p>'~되다, ~당하다'를 말할 때 써요. 틀은 <b>be동사 + 과거분사</b>예요. 누가 했는지 모르거나 중요하지 않을 때 자연스러워요.</p>
{{ex:My phone was stolen.|마이 폰 워즈 스톨른|휴대폰을 도난당했어요}}{{ex:This was made in Korea.|디스 워즈 메이드 인 코리아|이건 한국에서 만들어졌어요}}{{ex:The meeting was canceled.|더 미팅 워즈 캔슬드|회의가 취소됐어요}}
<h3>현재: 늘 그렇게 되는 일</h3>
{{ex:English is spoken here.|잉글리시 이즈 스포큰 히어|여기서는 영어를 써요}}{{ex:Breakfast is served at seven.|브렉퍼스트 이즈 서브드 앳 세븐|조식은 7시에 제공돼요}}
<h3>누가 했는지는 by</h3>
{{ex:It was written by Han Kang.|잇 워즈 리튼 바이 한강|한강이 쓴 거예요}}
<h3>능동과 수동</h3>
<div class="tbl"><table><tr><th>능동</th><th>수동</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">가장 흔한 실수: be동사를 빼먹는 것. <b>My phone stolen.</b> (X) → <b>My phone was stolen.</b> (O)</div>`,
check:[["My bag ___ stolen yesterday. 빈칸에 알맞은 것은?",["is","was","did","has"],1,"어제 일이라서 was + 과거분사예요."],["This phone ___ made in Korea. 빈칸에 알맞은 것은?",["was","did","has","does"],0,"수동태는 be동사 + 과거분사예요."],["'회의가 취소됐어요'를 영어로 하면?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be동사 + 과거분사 canceled예요."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","수동태는 be동사 + 과거분사예요."],
["mc","'이건 한국에서 만들어졌어요' =","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be동사 + 과거분사 made예요."],
["mc","'여기서는 영어를 써요' (수동) =","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","늘 그런 일은 is + 과거분사예요."],
["mc","'회의가 취소됐어요' =","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","be동사 + 과거분사예요."],
["mc","'조식은 7시에 제공돼요' =","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","식사 이름에는 관사가 없고, is + 과거분사예요."],
["or","제 가방을 도난당했어요","My bag was stolen","stole","be동사 뒤에는 과거분사 stolen이 와요."],
["or","회의가 취소됐어요","The meeting was canceled","A meetings","서로 아는 그 회의라서 관사 the예요."],
["or","창문이 깨졌어요","The window was broken","a windows","여기 있는 그 창문이라 관사 the예요."],
["fi","This was __ in Korea.","이건 한국에서 만들어졌어요","made","make|making|makes","be동사 뒤에는 과거분사가 와요."],
["fi","The room __ cleaned every day.","방은 매일 청소돼요","is|gets","does|has|did","늘 그런 일은 is + 과거분사예요."],
["fi","It was written __ Han Kang.","한강이 쓴 거예요","by","from|of|with","누가 했는지는 by로 말해요."],
["ty","제 휴대폰을 도난당했어요","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be동사 + 과거분사 stolen이에요."],
["ty","그 회의는 취소됐어요","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — 관사 the","a","서로 아는 그 회의라서 관사 the예요."],
["ty","문이 잠겨 있었어요","The door was locked","the door · was · locked — 관사 the","a","여기 있는 그 문이라 관사 the예요."]]},
{ id:"reported", title:"간접화법: 남의 말 전하기", blurb:"She said she was tired. 시제를 한 칸 뒤로, tell 뒤에는 사람.", deck:"전화·문자 줄임말", body:`
<p>다른 사람이 한 말을 전할 때 써요. 한국어 '~라고 했어요'예요. 전하는 말의 <b>시제를 한 칸 과거로</b> 옮겨요.</p>
<div class="tbl"><table><tr><th>원래 말</th><th>전할 때</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|쉬 세드 쉬 워즈 타이어드|그녀는 피곤하다고 했어요}}{{ex:He said he would come.|히 세드 히 우드 컴|그는 오겠다고 했어요}}
<h3>say 와 tell</h3>
<p><b>tell</b> 뒤에는 꼭 듣는 사람이 와요. <b>say</b> 뒤에는 오지 않아요.</p>
{{ex:He told me he was busy.|히 톨드 미 히 워즈 비지|그는 저한테 바쁘다고 했어요}}
<h3>질문을 전할 때</h3>
<p>예/아니오 질문은 <b>if</b>, 의문사 질문은 의문사를 그대로 쓰고, 뒤는 <b>평서문 순서</b>(주어 + 동사)예요.</p>
{{ex:She asked if I was okay.|쉬 애스크트 이프 아이 워즈 오케이|그녀는 제가 괜찮은지 물었어요}}{{ex:He asked where I lived.|히 애스크트 웨어 아이 리브드|그는 제가 어디 사는지 물었어요}}
<div class="tip">가장 흔한 실수: <b>He said me …</b> (X) → <b>He told me …</b> (O), <b>He asked where did I live.</b> (X) → <b>He asked where I lived.</b> (O)</div>`,
check:[["She said she ___ tired. 빈칸에 알맞은 것은?",["is being","was","be","will"],1,"전하는 말은 시제를 과거로 옮겨요."],["He ___ me he would come. 빈칸에 알맞은 것은?",["said","say","told","tell to"],2,"듣는 사람(me)이 있으면 told예요."],["'그는 제가 어디 사는지 물었어요'를 영어로 하면?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"전하는 질문은 평서문 순서예요."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","전하는 말은 시제를 과거로 옮겨요."],
["mc","He ___ me he was late.","told","said","say","tells to","듣는 사람이 있으면 told예요."],
["mc","'그는 오겠다고 했어요' =","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will은 would로 바뀌어요."],
["mc","'그녀는 제가 괜찮은지 물었어요' =","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","예/아니오 질문은 if로 전해요."],
["mc","'그는 제가 어디 사는지 물었어요' =","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","전하는 질문은 평서문 순서예요."],
["or","그녀는 피곤하다고 했어요","She said she was tired","told","듣는 사람이 없으면 said예요."],
["or","그는 차를 샀다고 했어요","He said he bought a car","the cars","처음 말하는 차 한 대라서 관사 a예요."],
["or","그녀는 그 책이 좋았다고 했어요","She said she liked the book","a books","서로 아는 그 책이라서 관사 the예요."],
["fi","She __ she was tired.","그녀는 피곤하다고 했어요","said","told|asked|say","듣는 사람이 없으면 said예요."],
["fi","He told __ he was busy.","그는 저한테 바쁘다고 했어요","me","I|my|to","told 뒤에는 듣는 사람이 와요."],
["fi","She asked __ I was okay.","그녀는 제가 괜찮은지 물었어요","if|whether","that|what|did","예/아니오 질문은 if로 전해요."],
["ty","그는 바쁘다고 했어요","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","전하는 말은 시제를 과거로 옮겨요."],
["ty","그녀는 차가 있다고 했어요","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — 관사 a","the","처음 말하는 차 한 대라서 관사 a예요."],
["ty","그는 그 영화를 봤다고 했어요","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — 관사 the","a","서로 아는 그 영화라서 관사 the예요."]]},
{ id:"articles-3", title:"관사 총정리: 관사 없음, the, 굳어진 표현", blurb:"'~라는 것 전체'는 관사 없이, 어느 것인지 정해지면 the. 굳어진 표현은 통째로 외워요.", deck:"자기소개", body:`
<p>관사를 마무리하는 시간이에요. 한국어에는 관사가 없어서 실수가 두 방향으로 나와요. 꼭 필요한 a나 the를 빼먹기도 하고, 불안한 마음에 필요 없는 the를 붙이기도 해요. 긴 문장에서도 쓸 수 있게 스스로 던질 질문 세 개로 정리해요.</p>
<h3>1. '~라는 것 전체'인가요? 관사 없이</h3>
<p>어떤 종류 전체를 말할 때 셀 수 있는 명사는 <b>관사 없는 복수</b>로, money, coffee 같은 셀 수 없는 명사와 life, education 같은 추상명사는 <b>관사 없이 그대로</b> 써요. 한국어로 "인생은 짧아요", "교육은 중요해요"라고 할 때 아무것도 붙이지 않는 것과 같아요.</p>
{{ex:Cats sleep a lot.|캣츠 슬립 어 랏|고양이는 잠을 많이 자요 (고양이 전체)}}{{ex:Life is short.|라이프 이즈 쇼트|인생은 짧아요}}{{ex:Education is important.|에주케이션 이즈 임포턴트|교육은 중요해요}}{{ex:Money isn't everything.|머니 이즌트 에브리띵|돈이 전부는 아니에요}}
<p><b>The life is short.</b> (X) → <b>Life is short.</b> (O). <b>The cats sleep a lot.</b>은 틀린 문장은 아니지만 '그 고양이들'이라는 뜻이 돼요.</p>
<h3>2. 어느 것인지 정해졌나요? the</h3>
<p>같은 단어라도 뒤에 붙은 말이 <b>어느 것인지</b> 정해 주면 the를 붙여요. 한국어는 "네가 만든 커피"처럼 꾸미는 말을 앞에 둘 뿐 따로 표시가 없어서, 이 the를 특히 자주 빼먹어요.</p>
{{ex:I like movies.|아이 라익 무비즈|저는 영화를 좋아해요 (영화 전체)}}{{ex:The movie we saw was great.|더 무비 위 쏘 워즈 그레이트|우리가 본 영화 정말 좋았어요}}{{ex:The coffee you made was great.|더 커피 유 메이드 워즈 그레잇|네가 만든 커피 정말 맛있었어}}
<h3>'그'와 the는 같지 않아요</h3>
<p>'그'를 볼 때마다 the로 옮기고, '그'가 없으면 관사도 빼는 습관이 있어요. 하지만 the는 '그'라는 뜻이 아니라 "서로 어느 것인지 안다"는 표시예요. 그래서 한국어에 '그'가 없어도 the가 필요할 때가 많아요. 반대로 둘 다 아는 것을 콕 집어 말하는 '그'는 that이 자연스러울 때도 있어요.</p>
<div class="tbl"><table><tr><th>한국어</th><th>영어</th></tr><tr><td>화장실 어디예요? ('그' 없음)</td><td class="k">Where's the restroom?</td></tr><tr><td>오늘 하늘 정말 파래요 ('그' 없음)</td><td class="k">The sky is so blue today.</td></tr><tr><td>그 영화 정말 좋았어! (둘 다 본 영화를 콕 집어)</td><td class="k">I loved that movie!</td></tr></table></div>
{{ex:Where's the restroom?|웨어즈 더 레스트룸?|화장실이 어디예요?}}{{ex:The sky is so blue today.|더 스카이 이즈 쏘 블루 투데이|오늘 하늘 정말 파래요}}{{ex:I loved that movie!|아이 러브드 댓 무비!|그 영화 정말 좋았어!}}
<h3>3. 굳어진 표현인가요? 통째로 외워요</h3>
<p>이유를 따지기보다 덩어리로 외우는 게 빨라요. bed, school, work는 원래 목적(자기, 공부하기, 일하기)으로 갈 때 관사 없이 써요.</p>
<div class="tbl"><table><tr><th>관사 없음</th><th>관사 있음</th></tr><tr><td class="k">go to bed</td><td class="k">in the morning / in the evening</td></tr><tr><td class="k">by bus / by subway</td><td class="k">play the piano / play the guitar</td></tr><tr><td class="k">at home / at work</td><td class="k">go to the gym</td></tr><tr><td class="k">have lunch / have dinner</td><td class="k">go to the movies</td></tr></table></div>
{{ex:I go to bed at eleven.|아이 고우 투 베드 앳 일레븐|저는 11시에 자요}}{{ex:I have lunch at noon.|아이 해브 런치 앳 눈|저는 12시에 점심을 먹어요}}{{ex:I go to the gym in the morning.|아이 고우 투 더 짐 인 더 모닝|저는 아침에 헬스장에 가요}}{{ex:My sister plays the guitar.|마이 시스터 플레이즈 더 기타|제 여동생은 기타를 쳐요}}
<div class="tip">긴 문장에서 막히면 순서대로 물어보세요. ① 종류 전체인가? → 관사 없이 (셀 수 있으면 복수) ② 어느 것인지 서로 아나? → the ③ 여럿 중 아무 하나인가? → a / an. 굳어진 표현은 이 질문과 상관없이 통째로 외워요.</div>`,
check:[["'음악은 사람을 행복하게 해요'(음악 전체)를 영어로 하면?",["The music makes people happy.","Music makes people happy.","A music makes people happy.","Music makes the peoples happy."],1,"음악 전체는 관사 없이 music, 사람들 전체도 관사 없이 people이에요."],["___ food we ordered was cold. 빈칸에 알맞은 것은?",["A","(없음)","The","An"],2,"we ordered가 어느 음식인지 정해 주니까 the예요."],["다음 중 관사가 바르게 쓰인 문장은?",["I go to the bed at eleven.","I go to gym in morning.","I have the lunch at noon.","I go to the gym in the morning."],3,"go to bed, have lunch는 관사 없이, go to the gym, in the morning은 the와 함께 써요."]],
practice:[
["mc","'토끼는 당근을 좋아해요' (토끼 전체) =","Rabbits love carrots.","The rabbits love the carrots.","A rabbit love carrot.","Rabbit loves carrots.","종류 전체는 관사 없는 복수예요."],
["mc","'건강은 중요해요' =","Health is important.","The health is important.","Healths are important.","A health is important.","추상명사를 일반적으로 말할 때는 관사 없이 써요."],
["mc","'네가 사 온 빵 맛있었어' =","The bread you bought was good.","Bread you bought was good.","A bread you bought was good.","The breads you bought was good.","you bought가 어느 빵인지 정해 주니까 관사 the예요."],
["mc","'저는 아침에 운동해요' =","I work out in the morning.","I work out in morning.","I work out in a morning.","I work out at the morning.","in the morning은 관사 the와 함께 굳어진 표현이에요."],
["mc","'저는 지하철로 출근해요' =","I go to work by subway.","I go to the work by subway.","I go to a work by subway.","I go to work by a subway.","go to work, by subway는 관사 없이 쓰는 굳어진 표현이에요."],
["or","사랑은 어려워요","Love is hard","The","사랑 같은 추상명사를 일반적으로 말할 때는 관사 the를 붙이지 않아요."],
["or","아이들은 사탕을 좋아해요","Kids like candy","The kid","아이들 전체는 관사 없이 복수 kids예요."],
["or","네가 만든 케이크 정말 맛있었어","The cake you made was delicious","A cakes","you made가 어느 케이크인지 정해 주니까 관사 the예요."],
["or","저는 헬스장에 다녀요","I go to the gym","health at","go to the gym은 관사 the와 함께 외워요."],
["fi","I usually go to __ at midnight.","저는 보통 자정에 자요","bed|sleep","the bed|a bed|beds","잠자리에 드는 건 관사 없이 go to bed예요."],
["fi","I loved __ book you gave me.","네가 준 책 정말 좋았어","the|that","a|an|some","you gave me가 어느 책인지 정해 주니까 the예요."],
["fi","I'm at __ right now.","저 지금 회사에 있어요","work|the office|my office","the work|a work|works","at work는 관사 없이 쓰는 굳어진 표현이에요."],
["ty","저는 아침에 커피를 마셔요","I drink coffee in the morning|I have coffee in the morning|In the morning I drink coffee|In the morning I have coffee|I drink coffee in the mornings|I have coffee in the mornings|I drink a cup of coffee in the morning|I have a cup of coffee in the morning","drink · coffee · in · morning — 관사 주의","a","일반적인 coffee에는 관사가 없고, in the morning은 관사 the와 함께 써요."],
["ty","네가 만든 파스타 정말 맛있었어 (delicious로)","The pasta you made was delicious|The pasta you made was really delicious|The pasta you made was so delicious|The pasta you made was very delicious|The pasta that you made was delicious|The pasta that you made was really delicious|The pasta that you made was so delicious|The pasta that you made was very delicious","the pasta · you made · delicious — 관사 the","a","you made가 어느 파스타인지 정해 주니까 관사 the예요."],
["ty","돈이 전부는 아니에요","Money isn't everything","money · everything — 관사 없이","The","money처럼 셀 수 없는 명사를 일반적으로 말할 때는 관사 없이 써요."],
["ty","저는 보통 11시에 자요","I usually go to bed at eleven|I usually go to bed at 11|I usually go to bed at 11 pm|I usually go to bed at eleven pm|I usually go to sleep at eleven|I usually go to sleep at 11|I usually go to sleep at 11 pm|I usually go to sleep at eleven pm|I usually go to bed at eleven o'clock","usually · go to bed · eleven — 관사 없이","the","go to bed는 관사 없이 쓰는 굳어진 표현이에요."]]},
];
