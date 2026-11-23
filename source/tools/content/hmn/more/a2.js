/* TRANSLATE/ADAPT (hmn): scaffolded from tools/content/ko/more/a2.js by new_lang.js.
   Translate/adapt everything that is not English (the ko text) for hmn speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,
   explanations written from the hmn point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position
   identical to ko-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */
/* ko-en stage A2: new lessons (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"과거진행: was / were + -ing", blurb:"그때 하고 있던 일. 이야기의 배경을 깔아 줘요.", deck:"감정·반응", body:`
<p>과거의 <b>어느 순간에 하고 있던 일</b>을 말해요. 현재진행의 be동사만 과거(was / were)로 바꾸면 돼요.</p>
{{ex:I was sleeping.|아이 워즈 슬리핑|저는 자고 있었어요}}{{ex:We were watching TV.|위 워 왓칭 티비|우리는 TV를 보고 있었어요}}{{ex:It was raining.|잇 워즈 레이닝|비가 오고 있었어요}}
<h3>질문</h3>
{{ex:What were you doing?|왓 워 유 두잉?|뭐 하고 있었어요?}}{{ex:Were you working at nine?|워 유 워킹 앳 나인?|9시에 일하고 있었어요?}}
<h3>when과 함께: 하던 중에 일이 생겼어요</h3>
<p>길게 하던 일은 <b>과거진행</b>, 그 사이에 일어난 짧은 일은 <b>과거형</b>이에요.</p>
{{ex:I was cooking when you called.|아이 워즈 쿠킹 웬 유 콜드|전화했을 때 저는 요리하고 있었어요}}{{ex:I was walking home when it started to rain.|아이 워즈 워킹 홈 웬 잇 스타티드 투 레인|집에 걸어가는데 비가 오기 시작했어요}}
<div class="tip">'~하고 있었어요'를 과거형으로만 말하면 느낌이 달라져요. <b>I cooked when you called.</b>는 "전화가 오자 요리를 시작했어요"라는 뜻이 돼요.</div>`,
check:[["'9시에 뭐 하고 있었어요?'를 영어로 하면?",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"you에는 were, 뒤에는 -ing가 와요."],["I was cooking ___ you called. 빈칸에 알맞은 것은?",["when","so","or","than"],0,"'~했을 때'는 when이에요."],["They ___ watching TV. 빈칸에 알맞은 것은?",["was","did","were","are being"],2,"they에는 were예요."]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","I에는 was예요."],
["mc","'전화했을 때 저는 요리하고 있었어요' =","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","하던 일은 과거진행, 끼어든 일은 과거형이에요."],
["mc","'뭐 하고 있었어요?' =","What were you doing?","What did you doing?","What was you doing?","What were you do?","you에는 were, 뒤에는 -ing예요."],
["mc","They ___ playing soccer.","were","was","did","are","they에는 were예요."],
["mc","'비가 오고 있었어요' =","It was raining.","It were raining.","It was rain.","It rained was.","it에는 was + -ing예요."],
["or","저는 책을 읽고 있었어요","I was reading a book","read books","읽던 한 권이라 관사 a와 단수 book이에요."],
["or","아이들이 자고 있었어요","The kids were sleeping","kid was","여럿이라 복수 kids와 were를 써요."],
["or","우리는 TV를 보고 있었어요","We were watching TV","was","we에는 were예요."],
["fi","I was __ dinner.","저녁을 만들고 있었어요","cooking|making","cook|cooked|cooks","was 뒤에는 -ing가 와요."],
["fi","What __ you doing?","뭐 하고 있었어요?","were","was|did|does","you에는 were예요."],
["fi","I was sleeping __ you called.","전화했을 때 자고 있었어요","when","so|than|or","'~했을 때'는 when이에요."],
["ty","저는 일하고 있었어요","I was working","was · work — -ing","were","I에는 was + -ing예요."],
["ty","저는 영화를 보고 있었어요","I was watching a movie","was · watching · movie — 관사 a","the","아무 영화 한 편이라 관사 a예요."],
["ty","아이들이 놀고 있었어요","The kids were playing|The children were playing","kids · were · playing — 복수","kid","여럿이라 복수 kids와 were예요."]]},
{ id:"will", title:"will: 지금 정한 일, 약속, 예측", blurb:"그 자리에서 결정하면 will, 미리 정했으면 going to.", deck:"스몰토크", body:`
<p><b>will + 동사원형</b>이에요. 말할 때는 거의 항상 <b>I'll, you'll, it'll</b>로 줄여요. 부정은 <b>won't</b>예요.</p>
<h3>지금 막 정했을 때</h3>
{{ex:I'll have the pasta.|아일 해브 더 파스타|저는 파스타로 할게요}}{{ex:I'll get it.|아일 게릿|제가 받을게요}}
<h3>약속과 제안</h3>
{{ex:I'll help you.|아일 헬프 유|도와줄게요}}{{ex:I'll call you later.|아일 콜 유 레이러|나중에 전화할게요}}{{ex:I won't be late.|아이 원트 비 레이트|안 늦을게요}}
<h3>예측</h3>
{{ex:It'll be fine.|이를 비 파인|괜찮을 거예요}}{{ex:I think it will rain.|아이 띵크 잇 윌 레인|비가 올 것 같아요}}
<h3>will과 be going to</h3>
<div class="tbl"><table><tr><th></th><th>언제</th><th>예</th></tr><tr><td class="k">will</td><td>지금 결정, 약속</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>미리 세운 계획</td><td>I'm going to visit Jeju next month.</td></tr></table></div>
<div class="tip">가장 흔한 실수: <b>I will to go.</b>, <b>I'll going.</b> (X) → <b>I'll go.</b> (O). will 뒤에는 동사원형만 와요.</div>`,
check:[["전화가 울릴 때 '제가 받을게요'는?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"그 자리에서 정한 일은 will이에요."],["I ___ be late. (안 늦을게요)",["won't","willn't","don't will","not will"],0,"will의 부정은 won't예요."],["미리 세운 계획을 말하는 문장은?",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"미리 세운 계획은 be going to예요."]],
practice:[
["mc","'도와줄게요' =","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","will 뒤에는 동사원형이 와요."],
["mc","식당에서 지금 정할 때 '저는 파스타로 할게요' =","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","그 자리에서 정한 일은 will이에요."],
["mc","'안 늦을게요' =","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not은 won't로 줄여요."],
["mc","'올 거예요?' =","Will you come?","Do you will come?","Will you coming?","Will come you?","Will + 주어 + 동사원형이에요."],
["mc","미리 세운 계획을 말하는 문장은?","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","미리 세운 계획은 be going to예요."],
["or","나중에 전화할게요","I'll call you later","calling","will 뒤에는 동사원형이 와요."],
["or","저는 커피로 할게요","I'll have a coffee","the coffees","주문하는 한 잔이라 관사 a예요."],
["or","제가 문 열게요","I'll open the door","a doors","여기 있는 그 문이라 관사 the예요."],
["fi","I __ call you tomorrow.","내일 전화할게요","will","am|going|do","약속은 will로 말해요."],
["fi","I __ forget.","안 잊을게요","won't|will not","don't|not|willn't","will의 부정은 won't예요."],
["fi","__ you help me?","도와줄래요?","Will|Can|Could|Would","Do|Are|Is","부탁할 때는 Will you ~?를 써요."],
["ty","도와줄게요","I'll help you|I'll help","I'll · help · you","helping","will 뒤에는 동사원형이 와요."],
["ty","저는 샐러드로 할게요","I'll have a salad|I'll have the salad","I'll have · salad — 관사 주의","salads","하나를 주문하니까 관사 a(메뉴의 그것이면 the)를 붙여요."],
["ty","제가 문 닫을게요","I'll close the door|I'll shut the door","I'll · close · door — 관사 the","a","여기 있는 그 문이라 관사 the예요."]]},
{ id:"perfect", title:"현재완료: 해 본 적 있어요", blurb:"have + 과거분사로 경험을 말해요. 언제인지 말하면 과거형.", deck:"여행(공항·호텔)", body:`
<p><b>have + 과거분사(p.p.)</b>는 '지금까지 살면서 ~해 본 적이 있다'는 뜻이에요. <b>언제</b>인지는 말하지 않아요.</p>
{{ex:I've been to Japan.|아이브 빈 투 저팬|일본에 가 본 적 있어요}}{{ex:She has visited Korea twice.|쉬 해즈 비지티드 코리아 트와이스|그녀는 한국에 두 번 와 봤어요}}
<h3>ever 와 never</h3>
{{ex:Have you ever eaten kimchi?|해뷰 에버 이튼 김치?|김치 먹어 본 적 있어요?}}{{ex:I've never seen it.|아이브 네버 씬 잇|그건 본 적 없어요}}
<p>대답은 <b>Yes, I have.</b> / <b>No, I haven't.</b>예요.</p>
<h3>자주 쓰는 과거분사</h3>
<div class="tbl"><table><tr><th>원형</th><th>과거</th><th>과거분사</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>언제인지 말하면 과거형</h3>
<p>last year, yesterday, in 2020처럼 시점이 있으면 현재완료를 쓰지 않아요.</p>
{{ex:I went to Japan last year.|아이 웬 투 저팬 래스트 이어|작년에 일본에 갔어요}}
<div class="tip">가장 흔한 실수: <b>I've been to Japan last year.</b> (X) → <b>I went to Japan last year.</b> (O)</div>`,
check:[["'일본에 가 본 적 있어요?'를 영어로 하면?",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"경험은 Have you ever + 과거분사예요."],["I ___ never seen that movie. 빈칸에 알맞은 것은?",["am","did","have","was"],2,"have + never + 과거분사예요."],["다음 중 알맞은 문장은?",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"last year처럼 시점이 있으면 과거형이에요."]],
practice:[
["mc","'저는 일본에 가 본 적 있어요' =","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have + 과거분사 been이에요."],
["mc","see의 과거분사는?","seen","saw","seed","seeing","see – saw – seen이에요."],
["mc","'김치 먹어 본 적 있어요?' =","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","Have you ever + 과거분사예요."],
["mc","'저는 그걸 본 적 없어요' =","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","have + never + 과거분사예요."],
["mc","'작년에'가 있을 때 알맞은 문장은?","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","시점이 있으면 과거형이에요."],
["or","저는 그 영화를 본 적 있어요","I've seen the movie","a saw","서로 아는 그 영화라서 관사 the예요."],
["or","한국에 두 번 가 봤어요","I've been to Korea twice","went","have 뒤에는 과거분사 been이 와요."],
["or","저는 뱀을 본 적 없어요","I've never seen a snake","the snakes","아무 뱀 한 마리를 말하니까 관사 a예요."],
["fi","Have you ever __ to Busan?","부산에 가 본 적 있어요?","been","be|went|go","have 뒤에는 과거분사 been이에요."],
["fi","I've __ eaten that.","그건 먹어 본 적 없어요","never","ever|no|not never","'한 번도 없다'는 never예요."],
["fi","She __ visited Korea twice.","그녀는 한국에 두 번 와 봤어요","has","have|is|did","she에는 has예요."],
["ty","일본에 가 본 적 있어요?","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","경험은 Have you ever been to ~?로 물어요."],
["ty","저는 그 책을 읽어 봤어요","I've read the book|I've read that book","I've · read · book — 관사 the","a","서로 아는 그 책이라서 관사 the예요."],
["ty","저는 고양이를 키워 본 적 없어요","I've never had a cat","never · had · cat — 관사 a","the","아무 고양이 한 마리라서 관사 a예요."]]},
{ id:"modals", title:"have to, must, should, might: 의무와 조언", blurb:"해야 해요, 하는 게 좋아요, 할지도 몰라요.", deck:"병원·긴급", body:`
<p>의무, 조언, 가능성을 말하는 네 가지예요. 모두 뒤에 <b>동사원형</b>이 와요.</p>
<h3>have to: 해야 해요</h3>
<p>일상에서 가장 많이 써요. she, he에는 <b>has to</b>예요.</p>
{{ex:I have to work tomorrow.|아이 해브 투 워크 투마로우|내일 일해야 해요}}{{ex:She has to go now.|쉬 해즈 투 고 나우|그녀는 지금 가야 해요}}
<h3>don't have to 와 must not 은 달라요</h3>
<div class="tbl"><table><tr><th>표현</th><th>뜻</th></tr><tr><td class="k">You don't have to come.</td><td>안 와도 돼요 (필요 없음)</td></tr><tr><td class="k">You must not smoke here.</td><td>여기서 피우면 안 돼요 (금지)</td></tr></table></div>
<h3>should: 하는 게 좋아요</h3>
{{ex:You should see a doctor.|유 슈드 씨 어 닥터|병원에 가 보는 게 좋겠어요}}{{ex:You shouldn't worry.|유 슈든트 워리|걱정하지 않는 게 좋아요}}
<h3>might: 할지도 몰라요</h3>
{{ex:It might rain.|잇 마잇 레인|비가 올지도 몰라요}}{{ex:I might be late.|아이 마잇 비 레이트|늦을지도 몰라요}}
<div class="tip">가장 흔한 실수: <b>You should to go.</b>, <b>It might rains.</b> (X) → <b>You should go.</b>, <b>It might rain.</b> (O)</div>`,
check:[["'안 와도 돼요'를 영어로 하면?",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"'필요 없다'는 don't have to예요."],["조언할 때: You ___ see a doctor.",["might","have","should","must to"],2,"조언은 should + 동사원형이에요."],["She ___ to work today. 빈칸에 알맞은 것은?",["have","must","should","has"],3,"she에는 has to예요."]],
practice:[
["mc","'저는 내일 일해야 해요' =","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + 동사원형이에요."],
["mc","'안 와도 돼요' =","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","'필요 없다'는 don't have to예요."],
["mc","'병원에 가 보는 게 좋겠어요' =","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + 동사원형, 의사 한 명이라 관사 a예요."],
["mc","'비가 올지도 몰라요' =","It might rain.","It might rains.","It might to rain.","It mights rain.","might + 동사원형이에요."],
["mc","'여기서 담배 피우면 안 돼요' =","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","금지는 must not이에요."],
["or","병원에 가 보세요","You should see a doctor","the doctors","아무 의사 한 명이라 관사 a예요."],
["or","저는 지금 가야 해요","I have to go now","going","have to 뒤에는 동사원형이 와요."],
["or","표를 사야 해요","You have to buy a ticket","the tickets","표 한 장이라 관사 a와 단수 ticket이에요."],
["fi","She __ to study tonight.","그녀는 오늘 밤 공부해야 해요","has","have|must|should","she에는 has to예요."],
["fi","You __ have to pay.","돈 안 내도 돼요","don't|do not","must not|not|aren't","'필요 없다'는 don't have to예요."],
["fi","It __ rain tomorrow.","내일 비가 올지도 몰라요","might|may|could","must to|has to|should to","가능성은 might예요."],
["ty","저는 일해야 해요","I have to work|I must work|I need to work","have to · work","should","의무는 have to예요."],
["ty","병원에 가 보세요","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — 관사 a","the","아무 의사 한 명이라 관사 a예요."],
["ty","표를 사야 해요","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — 관사 a","the","표 한 장이라 관사 a예요."]]},
{ id:"to-ing", title:"동사 뒤 to와 -ing: want to, enjoy -ing", blurb:"want 뒤는 to, enjoy 뒤는 -ing. 동사마다 정해져 있어요.", deck:"스몰토크", body:`
<p>동사 두 개를 이어 쓸 때, 앞 동사에 따라 뒤가 <b>to + 동사</b>인지 <b>동사-ing</b>인지 정해져 있어요. 자주 쓰는 것부터 묶어서 외워요.</p>
<div class="tbl"><table><tr><th>뒤에 to</th><th>뒤에 -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + 동사: 앞으로 할 일</h3>
{{ex:I want to go home.|아이 원투 고 홈|집에 가고 싶어요}}{{ex:I need to study.|아이 니투 스터디|공부해야 해요}}{{ex:I'd like to order.|아이드 라익 투 오더|주문하고 싶어요}}{{ex:I decided to learn English.|아이 디사이디드 투 런 잉글리시|영어를 배우기로 했어요}}
<h3>enjoy, finish, mind 뒤에는 -ing</h3>
{{ex:I enjoy cooking.|아이 인조이 쿠킹|요리하는 걸 즐겨요}}{{ex:I finished working.|아이 피니쉬트 워킹|일 끝났어요}}{{ex:I don't mind waiting.|아이 돈 마인드 웨이링|기다려도 괜찮아요}}
<h3>둘 다 되는 동사</h3>
<p>like, love, start는 to와 -ing 둘 다 쓸 수 있어요.</p>
<div class="tip">가장 흔한 실수: <b>I want go.</b>, <b>I enjoy to cook.</b> (X) → <b>I want to go.</b>, <b>I enjoy cooking.</b> (O)</div>`,
check:[["I want ___ home. 빈칸에 알맞은 것은?",["go","going","to go","to going"],2,"want 뒤에는 to + 동사가 와요."],["I enjoy ___ movies. 빈칸에 알맞은 것은?",["watching","to watch","watch","to watching"],0,"enjoy 뒤에는 -ing가 와요."],["'주문하고 싶어요'를 영어로 하면?",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"would like 뒤에는 to + 동사가 와요."]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","need 뒤에는 to + 동사예요."],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","enjoy 뒤에는 -ing예요."],
["mc","'주문하고 싶어요' =","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","would like 뒤에는 to + 동사예요."],
["mc","'일 끝났어요' =","I finished working.","I finished to work.","I finished work to.","I finish worked.","finish 뒤에는 -ing예요."],
["mc","'기다려도 괜찮아요' =","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","mind 뒤에는 -ing예요."],
["or","저는 차를 사고 싶어요","I want to buy a car","the buying","want 뒤는 to, 차 한 대라서 관사 a예요."],
["or","저는 영화 보는 걸 즐겨요","I enjoy watching movies","movie watch","enjoy 뒤는 -ing, 영화 전체는 복수 movies예요."],
["or","저는 쉬어야 해요","I need to rest","resting","need 뒤에는 to + 동사예요."],
["fi","I want __ a coffee.","커피 한 잔 마시고 싶어요","to have|to drink|to get","have|having|drinking","want 뒤에는 to + 동사예요."],
["fi","She enjoys __.","그녀는 수영을 즐겨요","swimming","to swim|swim|swims","enjoy 뒤에는 -ing예요."],
["fi","I decided __ English.","영어를 공부하기로 했어요","to study|to learn","study|studying|studied","decide 뒤에는 to + 동사예요."],
["ty","저는 집에 가고 싶어요","I want to go home","want to · go · home — 관사 없이","the","want 뒤에는 to가 오고, home 앞에는 관사를 쓰지 않아요."],
["ty","저는 책 읽는 걸 즐겨요","I enjoy reading books|I enjoy reading","enjoy · read · book — 복수","book","enjoy 뒤는 -ing, 책 전체는 복수 books예요."],
["ty","주문하고 싶어요","I'd like to order|I want to order","I'd like · to · order","ordering","would like 뒤에는 to + 동사예요."]]},
{ id:"articles-2", title:"the 심화: 하나뿐인 것과 관사 없는 복수", blurb:"악기에는 the, 운동에는 없음. 나라 이름과 '~라는 것 전체'까지.", deck:"여행(공항·호텔)", body:`
<p>관사 세 번째 시간이에요. 규칙으로 정해진 경우들을 묶어서 정리해요.</p>
<h3>the를 붙이는 경우</h3>
<div class="tbl"><table><tr><th>경우</th><th>예</th></tr><tr><td>세상에 하나뿐인 것</td><td class="k">the sun, the internet</td></tr><tr><td>악기</td><td class="k">play the piano</td></tr><tr><td>강·바다</td><td class="k">the Han River, the Pacific</td></tr><tr><td>복수형·연합 나라 이름</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|아이 플레이 더 피애노|저는 피아노를 쳐요}}{{ex:She's from the United States.|쉬즈 프럼 더 유나이티드 스테이츠|그녀는 미국에서 왔어요}}{{ex:I found it on the internet.|아이 파운딧 온 디 이너넷|인터넷에서 찾았어요}}
<h3>관사를 안 붙이는 경우</h3>
<div class="tbl"><table><tr><th>경우</th><th>예</th></tr><tr><td>대부분의 나라·도시</td><td class="k">Korea, Seoul</td></tr><tr><td>운동·언어·식사</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>'~라는 것 전체'</td><td class="k">Dogs are cute. I love music.</td></tr></table></div>
{{ex:I live in Korea.|아이 리브 인 코리아|저는 한국에 살아요}}{{ex:I play soccer.|아이 플레이 사커|저는 축구를 해요}}{{ex:Dogs are cute.|독즈 아 큐트|개는 귀여워요}}
<h3>전체와 특정한 것</h3>
{{ex:I like dogs.|아이 라익 독즈|저는 개를 좋아해요 (개 전체)}}{{ex:The dogs in this park are cute.|더 독즈 인 디스 파크 아 큐트|이 공원의 개들은 귀여워요 (그 개들)}}
<div class="tip">'전체'를 말할 때는 the 없이 복수로: <b>I like the dogs.</b>는 "그 개들을 좋아해요"라는 뜻이 돼요.</div>`,
check:[["I play ___ soccer. 빈칸에 알맞은 것은?",["a","the","an","(없음)"],3,"운동 이름에는 관사를 쓰지 않아요."],["She's from ___ United States. 빈칸에 알맞은 것은?",["the","a","an","(없음)"],0,"United States 앞에는 the를 붙여요."],["'개는 귀여워요' (개 전체)를 영어로 하면?",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"전체를 말할 때는 관사 없이 복수예요."]],
practice:[
["mc","I play ___ piano.","the","a","an","some","악기 앞에는 the를 붙여요."],
["mc","'저는 한국에 살아요' =","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","대부분의 나라 이름에는 관사가 없어요."],
["mc","'저는 축구를 해요' =","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","운동 이름에는 관사가 없어요."],
["mc","'고양이는 귀여워요' (고양이 전체) =","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","전체를 말할 때는 관사 없이 복수예요."],
["mc","She's from ___ United States.","the","a","an","some","United States 앞에는 the를 붙여요."],
["or","저는 피아노를 쳐요","I play the piano","a pianos","악기 앞에는 관사 the를 붙여요."],
["or","개는 귀여워요","Dogs are cute","The dog","개 전체를 말할 때는 관사 없이 복수 dogs예요."],
["or","저는 인터넷에서 찾았어요","I found it on the internet","a","하나뿐인 internet에는 관사 the를 붙여요."],
["fi","I speak __.","저는 영어를 해요","English","the English|an English|a English","언어 이름에는 관사가 없어요."],
["fi","The sun rises in __ east.","해는 동쪽에서 떠요","the","a|an|some","방위 앞에는 the를 붙여요."],
["fi","I love __.","저는 음악을 정말 좋아해요","music","the musics|a music|musics","'음악 전체'는 관사 없이, 셀 수 없어서 -s도 없어요."],
["ty","저는 미국에서 왔어요","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — 관사 the","a","United States 앞에는 관사 the를 붙여요."],
["ty","저는 기타를 쳐요","I play the guitar|I play guitar","play · guitar — 관사 the","a","악기 앞에는 관사 the를 붙여요."],
["ty","고양이는 귀여워요","Cats are cute","cat — 관사 없이 복수","The cat","전체를 말할 때는 관사 없이 복수 cats예요."]]},
{ id:"first-conditional", title:"조건문 1: If + 현재, will", blurb:"'~하면 ~할 거예요'. if 뒤에는 will을 쓰지 않아요.", deck:"직장·이메일", body:`
<p>실제로 일어날 수 있는 일을 말해요. <b>If + 현재형, will + 동사</b>예요. 뜻은 미래여도 if 쪽은 <b>현재형</b>으로 써요.</p>
{{ex:If it rains, I'll stay home.|이프 잇 레인즈 아일 스테이 홈|비가 오면 집에 있을게요}}{{ex:If you don't hurry, you'll miss the bus.|이퓨 돈 허리 유일 미스 더 버스|서두르지 않으면 버스를 놓칠 거예요}}
<h3>순서를 바꿔도 돼요</h3>
<p>if를 뒤로 보내면 쉼표가 없어져요.</p>
{{ex:I'll help you if I have time.|아일 헬퓨 이프 아이 해브 타임|시간 있으면 도와줄게요}}
<h3>명령문과 함께</h3>
{{ex:If you're late, call me.|이퓨어 레이트 콜 미|늦으면 전화해요}}{{ex:If you need help, let me know.|이퓨 니드 헬프 렛 미 노우|도움이 필요하면 알려 줘요}}
<h3>when: ~하면 (확실한 일)</h3>
<p>일어날 것이 확실하면 if 대신 when이에요. 여기에도 will을 쓰지 않아요.</p>
{{ex:When I get home, I'll call you.|웬 아이 겟 홈 아일 콜 유|집에 도착하면 전화할게요}}
<div class="tip">가장 흔한 실수: <b>If it will rain, …</b> (X) → <b>If it rains, …</b> (O)</div>`,
check:[["If it ___ tomorrow, I'll stay home. 빈칸에 알맞은 것은?",["will rain","rains","rained","raining"],1,"if 뒤에는 현재형을 써요."],["If you study, you ___ pass. 빈칸에 알맞은 것은?",["pass will","passing","will pass","passed"],2,"결과 쪽은 will + 동사원형이에요."],["다음 중 알맞은 문장은?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"if 쪽은 현재형, 결과 쪽은 will이에요."]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","if 뒤에는 현재형을 써요."],
["mc","If you're late, ___ me.","call","will calling","calls","to call","명령문은 동사원형으로 시작해요."],
["mc","'시간 있으면 도와줄게요' =","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","if 뒤에는 will을 쓰지 않아요."],
["mc","'서두르지 않으면 버스를 놓칠 거예요' =","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","if 쪽은 현재형 부정 don't예요."],
["mc","'집에 도착하면 전화할게요' =","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","when 뒤에도 현재형을 써요."],
["or","비 오면 집에 있을게요","If it rains I'll stay home","will the","if 뒤에는 현재형을 써요. home 앞에는 관사가 없어요."],
["or","시간 있으면 전화해요","If you have time call me","will","if 뒤에는 will을 쓰지 않아요."],
["or","버스를 놓칠 거예요","You'll miss the bus","a buses","타려던 그 버스라서 관사 the예요."],
["fi","If it __ tomorrow, we'll cancel.","내일 비가 오면 취소할 거예요","rains","will rain|rained|raining","if 뒤에는 현재형을 써요."],
["fi","If you study, you __ pass.","공부하면 합격할 거예요","will|can|might","are|did|passing","결과 쪽은 will + 동사원형이에요."],
["fi","__ you need help, call me.","도움이 필요하면 전화해요","If|When","So|But|Because","'~하면'은 if예요."],
["ty","시간 있으면 도와줄게요","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","if 뒤에는 will을 쓰지 않아요."],
["ty","비 오면 택시를 탈게요","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — 관사 a","the","아무 택시 한 대라서 관사 a예요."],
["ty","버스를 놓칠 거예요","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — 관사 the","a","타려던 그 버스라서 관사 the예요."]]},
{ id:"relative", title:"who / that: 사람과 물건 꾸미기", blurb:"한국어는 앞에서 꾸미고, 영어는 뒤에서 꾸며요.", deck:"쇼핑·계산", body:`
<p>한국어는 "<b>제가 산</b> 책"처럼 꾸미는 말이 앞에 와요. 영어는 명사를 먼저 말하고 <b>뒤에서</b> 설명해요: the book <b>that I bought</b>.</p>
<h3>사람은 who</h3>
{{ex:I have a friend who speaks Korean.|아이 해버 프렌드 후 스픽스 코리언|한국어 하는 친구가 있어요}}{{ex:the man who lives next door|더 맨 후 리브즈 넥스트 도어|옆집에 사는 남자}}
<h3>물건은 that</h3>
{{ex:the book that I bought|더 북 댓 아이 봇|제가 산 책}}{{ex:This is the phone that I want.|디스 이즈 더 폰 댓 아이 원트|이게 제가 원하는 휴대폰이에요}}
<h3>that은 자주 생략해요</h3>
<p>뒤에 '주어 + 동사'가 바로 오면 that을 빼도 돼요. 말할 때는 거의 빼요.</p>
{{ex:The movie we saw was great.|더 무비 위 쏘 워즈 그레이트|우리가 본 영화 정말 좋았어요}}
<h3>장소는 where</h3>
{{ex:the cafe where we met|더 캐페이 웨어 위 멧|우리가 만난 카페}}
<div class="tip">순서만 기억하세요: <b>명사 먼저, 설명은 뒤에.</b> "제가 산 책" → the book (that) I bought. what은 쓰지 않아요: <b>the book what I bought</b> (X)</div>`,
check:[["I have a friend ___ lives in Busan. 빈칸에 알맞은 것은?",["which","who","what","he"],1,"사람을 꾸밀 때는 who예요."],["'제가 산 책'을 영어로 하면?",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"명사를 먼저 말하고 that으로 설명해요."],["다음 중 알맞은 문장은?",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"꾸미는 말은 명사 뒤에 와요."]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","사람을 꾸밀 때는 who예요."],
["mc","'제가 산 책' =","the book that I bought","the I bought book","the book what I bought","the bought I book","명사 먼저, 설명은 뒤에 와요."],
["mc","'옆집에 사는 남자' =","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","사람은 who로 꾸며요."],
["mc","This is the phone ___ I want.","that","who","what","it","물건은 that으로 꾸며요."],
["mc","'우리가 본 영화' =","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","that은 생략할 수 있어요."],
["or","제가 산 책이에요","This is the book I bought","a what","내가 산 바로 그 책이라서 관사 the예요."],
["or","요리하는 친구가 있어요","I have a friend who cooks","the which","처음 말하는 친구 한 명이라 관사 a예요."],
["or","우리가 본 영화 좋았어요","The movie we saw was great","A movies","우리가 본 바로 그 영화라서 관사 the예요."],
["fi","the man __ lives here","여기 사는 남자","who|that","what|he|which","사람은 who로 꾸며요."],
["fi","the book __ I read","제가 읽은 책","that|which","who|what|it","물건은 that으로 꾸며요."],
["fi","the cafe __ we met","우리가 만난 카페","where","who|what|it","장소는 where로 꾸며요."],
["ty","제가 산 책이에요","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — 관사 the","a","내가 산 바로 그 책이라서 관사 the예요."],
["ty","한국어 하는 친구가 있어요","I have a friend who speaks Korean|I have a friend that speaks Korean","a friend · who · speaks Korean — 관사 a","the","처음 말하는 친구 한 명이라 관사 a예요."],
["ty","우리가 본 영화 좋았어요","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great","what","명사 먼저, 설명은 뒤에 와요."]]},
];
