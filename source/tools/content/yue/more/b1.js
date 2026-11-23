/* yue-en stage B1: new lessons. English side shared with ko-en (parity.js) except the yue-only lesson articles-3
   (converted from zh-en; deviations extraLessons; placed after passive by profile.json lessonOrder). Chinese text converted from
   zh-en and adapted for Hong Kong Cantonese speakers (docs/profiles/yue.md). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"現在完成式 2：for 和 since，一直到現在", blurb:"從過去開始、持續到現在的事。for + 一段時間，since + 起點。", deck:"自我介紹", body:`
<p>現在完成式的第二種用法：<b>從過去開始，一直持續到現在</b>的事。廣東話說「我 2020 年開始就住喺呢度」，動詞「住」沒有變化，所以很容易說成 <b>I live here since 2020.</b> ✗ 英文要用 <b>have + 過去分詞</b>：<b>I've lived here since 2020.</b> ✓</p>
{{ex:I've lived in Hong Kong for five years.|/aɪv ˈlɪvd ɪn ˌhɑːŋ ˈkɑːŋ fər ˈfaɪv ˈjɪrz/|我在香港住了五年}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|我從 2020 年起就在這裏工作}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|我認識她很久了}}
<h3>for 和 since</h3>
<div class="tbl"><table><tr><th>for + 一段時間</th><th>since + 起點</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long …?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|你在這裏多久了？}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|你學英文多久了？}}
<h3>just、already、yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|我剛剛做完}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|我已經看過了}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|你吃過飯了嗎？}}
<p>Have you eaten yet? 只是問對方有沒有吃飯，不能像廣東話的「食咗飯未？」那樣用來打招呼。</p>
<p>溫習一下：<b>have been to</b> 是「去過（已經回來了）」，<b>have gone to</b> 是「去了（還未回來）」。</p>
<div class="tip">最常見的錯誤：用現在式。<b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. 空格應填甚麼？",["since","for","during","from"],1,"一段時間前面用 for。"],["I've worked here ___ 2020. 空格應填甚麼？",["for","in","since","at"],2,"起點前面用 since。"],["「你在這裏多久了？」用英文怎樣說？",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + 過去分詞。"]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","一段時間前面用 for。"],
["mc","She's lived here ___ 2019.","since","for","in","at","起點前面用 since。"],
["mc","「你在這裏多久了？」=","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + 過去分詞。"],
["mc","「我剛剛做完」=","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + 過去分詞。"],
["mc","「你已經吃過了嗎？」=","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","疑問句裏的「已經」用 yet。"],
["or","我在這裏住了五年","I've lived here for five years","year since","五年，用眾數 years；一段時間前面用 for。"],
["or","那齣電影我已經看過了","I've already seen the movie","a saw","指雙方都知道的那齣電影，用冠詞 the。"],
["or","你等了多久？","How long have you waited","did","How long have you + 過去分詞。"],
["fi","I've worked here __ two years.","我在這裏工作了兩年","for","since|from|during","一段時間前面用 for。"],
["fi","I've been here __ Monday.","我從星期一起就在這裏","since","for|at|during","起點前面用 since。"],
["fi","Have you finished __?","你已經做完了嗎？","yet|already","ever|never|since","疑問句裏的「已經」用 yet。"],
["ty","我在這裏住了三年","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — 眾數","year","三年，用眾數 years。"],
["ty","你在這裏多久了？","How long have you been here","how long · have you · been here","are","How long have you + 過去分詞。"],
["ty","那本書我已經讀過了","I've already read the book|I've read the book already|I already read the book","already · read · book — 冠詞 the","a","指雙方都知道的那本書，用冠詞 the。"]]},
{ id:"narrative", title:"說故事的時態：過去式、過去進行式、過去完成式", blurb:"背景用過去進行式，事件用過去式，更早發生的事用 had + 過去分詞。", deck:"影視與俚語", body:`
<p>說過去發生的事，要把三種時態 (tenses) 配合起來用，各有分工。廣東話靠「緊」、「咗」、「已經」和上文下理來表達先後，英文則必須體現在動詞形式上。</p>
<div class="tbl"><table><tr><th>時態</th><th>作用</th><th>例句</th></tr><tr><td class="k">過去進行式</td><td>背景、當時正在做的事</td><td>I was walking home.</td></tr><tr><td class="k">過去式</td><td>發生的事件</td><td>I saw an old friend.</td></tr><tr><td class="k">過去完成式</td><td>更早發生的事</td><td>He had moved to Canada.</td></tr></table></div>
<h3>背景 + 事件</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|我走路回家的時候，碰到了一個老朋友}}
<h3>過去完成式：had + 過去分詞</h3>
<p>比過去某個時間點<b>更早</b>發生的事。廣東話說「我到嗰陣，齣戲已經開始咗」，兩個動作都可以用「咗」；英文要用 had + 過去分詞來表示「開始」比「到」更早。</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|我到的時候，電影已經開始了}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|我以前從未見過雪}}
<h3>表示先後次序的字詞</h3>
<p>用 first（首先）、then（然後）、after that（之後）、finally（最後）把故事串連起來。</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|我們先吃了晚飯，然後看了一齣電影}}
<div class="tip">then（然後）和 than（比）發音相近，但是兩個不同的字。說故事用 <b>then</b>。</div>`,
check:[["When I arrived, the train ___ already left. 空格應填甚麼？",["has","was","had","did"],2,"更早發生的事用 had + 過去分詞。"],["I ___ walking home when it started to rain. 空格應填甚麼？",["was","had","did","have"],0,"當時正在做的事（背景）用過去進行式。"],["哪一句表示更早發生的事？",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + 過去分詞就是過去完成式。"]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","更早發生的事用 had + 過去分詞。"],
["mc","I ___ cooking when the phone rang.","was","had","did","have","當時正在做的事用過去進行式。"],
["mc","「我到的時候，火車已經開走了」=","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","更早發生的事用 had + 過去分詞。"],
["mc","說故事時表示「然後」=","then","than","that","them","then 是「然後」，than 是「比」。"],
["mc","「我以前從未見過雪」=","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + 過去分詞。"],
["or","（我到的時候）火車已經開走了","The train had already left","a has","要坐的就是那班火車，用冠詞 the。"],
["or","我碰到了一個老朋友","I met an old friend","a friends","old 以元音開頭，用冠詞 an。"],
["or","我當時正走路回家","I was walking home","had","背景用過去進行式。"],
["fi","I was sleeping __ you called.","你打電話來的時候，我在睡覺","when","than|so|had","「……的時候」用 when。"],
["fi","The bus had already __.","巴士已經開走了","left|gone","leave|leaving|leaves","had 後面接過去分詞。"],
["fi","First we ate. __ we watched a movie.","我們先吃了飯，然後看了一齣電影","Then|After that|Next","Than|Because|When","「然後」用 then。"],
["ty","（我到的時候）電影已經開始了（用 movie）","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — 冠詞 the","a","要看的就是那齣電影，用冠詞 the。"],
["ty","我碰到了一個老朋友","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — 冠詞 an","a","old 以元音開頭，用冠詞 an。"],
["ty","我當時正走路回家","I was walking home","was · walking · home","had","背景用過去進行式。"]]},
{ id:"conditionals", title:"假設語氣：與現在和過去的事實相反", blurb:"與現在的事實相反用 would，後悔過去的事用 would have。", deck:"情緒與反應", body:`
<p>想像不真實的情況時用，也就是文法書裏的<b>假設語氣</b>。中文表達這種假設只靠「如果」和上文下理（廣東話：「如果我有時間就去旅行」、「早知就溫多啲書」），動詞本身沒有變化；英文要把動詞往過去「退一步」。</p>
<h3>與現在的事實相反</h3>
<p><b>If + 過去式，would + 動詞原形</b>。形式是過去式，說的卻是<b>現在</b>。</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|如果有時間，我就去旅行（可惜沒有）}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|如果我是你，我就接受}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|換了是你，你會怎樣做？}}
<h3>與過去的事實相反</h3>
<p><b>If + had + 過去分詞，would have + 過去分詞</b>。</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|如果當時有好好溫習，我就合格了}}
<h3>表示後悔：should have、I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|我當時應該打個電話的}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|如果我有多一點時間就好了}}
<div class="tbl"><table><tr><th>類型</th><th>if 部分</th><th>結果部分</th></tr><tr><td>真實條件（可能發生）</td><td class="k">現在式</td><td class="k">will</td></tr><tr><td>與現在的事實相反</td><td class="k">過去式</td><td class="k">would</td></tr><tr><td>與過去的事實相反</td><td class="k">had + 過去分詞</td><td class="k">would have + 過去分詞</td></tr></table></div>
<div class="tip">If I were you 是固定說法。主語是 I 也用 <b>were</b>，不用 was（口語裏也會聽到 was）。</div>`,
check:[["If I ___ rich, I would travel. 空格應填甚麼？",["am","were","will be","would be"],1,"與現在的事實相反，用過去式 were。"],["If I had studied, I ___ passed. 空格應填甚麼？",["would","will have","would have","had"],2,"與過去的事實相反，用 would have + 過去分詞。"],["「我當時應該打個電話的」用英文怎樣說？",["I should have called.","I should called.","I should had call.","I would call should."],0,"表示後悔用 should have + 過去分詞。"]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","與現在的事實相反，if 部分用過去式。"],
["mc","「如果我是你，我就買了」=","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd … 是固定說法。"],
["mc","If I had known, I ___ come.","would have","would","will have","had","與過去的事實相反，用 would have + 過去分詞。"],
["mc","「我當時應該打個電話的」=","I should have called.","I should called.","I should had call.","I must called.","表示後悔用 should have + 過去分詞。"],
["mc","「換了是你，你會怎樣做？」=","What would you do?","What will you did?","What would you did?","What you would do?","假設語氣用 would + 動詞原形。"],
["or","如果有時間，我就去旅行（可惜沒有）","If I had time I'd travel","have will","與現在的事實相反，用過去式 had 和 would。"],
["or","換了是我，就坐的士","I'd take a taxi","the taxis","哪一輛的士都可以，用冠詞 a。"],
["or","我當時應該買一張票的","I should have bought a ticket","the buy","一張票，用冠詞 a。"],
["fi","If I __ you, I'd go.","如果我是你，我就去","were|was","am|be|would be","If I were you 是固定說法。"],
["fi","I would __ helped.","我本來會幫忙的","have","had|has|having","would have + 過去分詞。"],
["fi","I wish I __ more time.","如果我有多一點時間就好了","had","have|would have|will have","I wish 後面用過去式。"],
["ty","如果我是你，我就去","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","固定說法：If I were you, I'd …"],
["ty","如果我有一輛車就好了（用 I wish）","I wish I had a car","I wish · had · car — 冠詞 a","the","哪一輛車都可以，用冠詞 a。"],
["ty","我當時應該坐的士的","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — 冠詞 a","the","哪一輛的士都可以，用冠詞 a。"]]},
{ id:"passive", title:"被動式：be + 過去分詞", blurb:"比起是誰做的，更關心發生了甚麼事的時候用。", deck:"工作與電郵", body:`
<p>被動式 (passive voice) 的結構是 <b>be 動詞 + 過去分詞</b>。不知道是誰做的，或者誰做的並不重要時，用被動式很自然。</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|我的手機被偷了}}{{ex:This was made in China.|/ˈðɪs wəz ˈmeɪd ɪn ˈtʃaɪnə/|這是中國製造的}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|會議取消了}}
<h3>中文不說「被」，英文也可能要用被動式</h3>
<p>中文的「被」多用於不好的事（被偷了、被罵了），很多被動的意思根本不說「被」：「會議取消了」、「問題解決了」（廣東話也一樣：「個會取消咗」）。英文不看有沒有「被」，只看<b>主語是不是動作的承受者</b>。會議不會自己取消，所以要說 was canceled，be 動詞不能漏。</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td class="k">The meeting canceled.</td><td class="k">The meeting was canceled.</td></tr><tr><td class="k">The research conducted last year.</td><td class="k">The research was conducted last year.</td></tr><tr><td class="k">This problem must solve now.</td><td class="k">This problem must be solved now.</td></tr></table></div>
{{ex:This problem must be solved now.|/ˈðɪs ˈprɑːbləm məst bi ˈsɑːlvd ˈnaʊ/|這個問題必須馬上解決}}
<h3>現在式：經常如此的事</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|這裏說英文}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|早餐 7 點供應}}
<h3>用 by 說明是誰做的</h3>
{{ex:It was written by a Hong Kong writer.|/ɪt wəz ˈrɪtn baɪ ə ˌhɑːŋ ˈkɑːŋ ˈraɪtər/|這是一位香港作家寫的}}
<h3>主動和被動</h3>
<div class="tbl"><table><tr><th>主動式</th><th>被動式</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<p>相反，happen、occur、exist 這些動詞沒有被動式：<b>The accident was happened.</b> ✗ → <b>The accident happened.</b> ✓</p>
<div class="tip">最常見的錯誤：漏掉 be 動詞。<b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓ 另外，canceled 是美式串法，學校教的英式串法 cancelled 同樣正確。</div>`,
check:[["My bag ___ stolen yesterday. 空格應填甚麼？",["is","was","did","has"],1,"昨天的事，用 was + 過去分詞。"],["This phone ___ made in Korea. 空格應填甚麼？",["was","did","has","does"],0,"被動式是 be 動詞 + 過去分詞。"],["「會議取消了」用英文怎樣說？",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be 動詞 + 過去分詞 canceled。"]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","被動式是 be 動詞 + 過去分詞。"],
["mc","「這是在韓國製造的」=","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be 動詞 + 過去分詞 made。"],
["mc","「這裏說英文」（被動式）=","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","經常如此的事用 is + 過去分詞。"],
["mc","「會議取消了」=","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","會議不會自己取消，要用 be 動詞 + 過去分詞。"],
["mc","「早餐 7 點供應」=","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","三餐前面不加冠詞；用 is + 過去分詞。"],
["or","我的袋被偷了","My bag was stolen","stole","be 動詞後面接過去分詞 stolen。"],
["or","會議取消了","The meeting was canceled","A meetings","雙方都知道的那個會議，用冠詞 the。"],
["or","窗被打破了","The window was broken","a windows","就是這扇窗，用冠詞 the。"],
["fi","This was __ in Korea.","這是在韓國製造的","made","make|making|makes","be 動詞後面接過去分詞。"],
["fi","The room __ cleaned every day.","房間每天都有人打掃","is|gets","does|has|did","經常如此的事用 is + 過去分詞。"],
["fi","It was written __ Han Kang.","這是韓江寫的","by","from|of|with","用 by 說明是誰做的。"],
["ty","我的手機被偷了","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be 動詞 + 過去分詞 stolen。"],
["ty","那個會議取消了","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — 冠詞 the","a","雙方都知道的那個會議，用冠詞 the。"],
["ty","門當時是鎖着的","The door was locked","the door · was · locked — 冠詞 the","a","就是這道門，用冠詞 the。"]]},
{ id:"articles-3", title:"冠詞總溫習：甚麼時候不用 the", blurb:"DSE 和 IELTS 寫作常見的錯誤：多餘的 the。泛指不加冠詞，特指才用 the。", deck:"閒談", body:`
<p>中文沒有冠詞，所以寫英文時不是漏掉冠詞，就是「以防萬一」加一個 the。即使英文程度不錯，這兩種錯誤仍然常見，當中最難掌握的是<b>泛指</b>。這一課用四條規則幫你判斷：甚麼時候不加，甚麼時候必須加。</p>
<h3>1. 泛指一類事物：不加 the</h3>
<p>說一類事物的整體時，可數名詞用<b>不加冠詞的眾數</b>，不可數名詞和抽象名詞（life、education、time、money、society、nature）<b>直接用</b>。中文「生活很艱難」、「教育很重要」，名詞前面甚麼都不加，英文泛指時也一樣。</p>
{{ex:Cats sleep a lot.|/ˈkæts ˈsliːp ə ˈlɑːt/|貓很愛睡覺}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|人生苦短}}{{ex:Education is important.|/ˌedʒuˈkeɪʃn ɪz ɪmˈpɔːrtnt/|教育很重要}}{{ex:Time is money.|/ˈtaɪm ɪz ˈmʌni/|時間就是金錢}}
<p><b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓；<b>The money is important.</b> ✗ → <b>Money is important.</b> ✓</p>
<h3>2. 可以確定是哪一個：用 the</h3>
<p>同一個名詞，後面加上 of …、in … 或關係子句，確定了「是哪一個」，就要用 <b>the</b>。反過來，中文的「這 / 那」（廣東話「呢 / 嗰」）也不能一律譯成 the：想說「這間」、「那本」，英文用 this / that。</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|我喜歡音樂（泛指）}}{{ex:I like the music in this cafe.|/aɪ ˈlaɪk ðə ˈmjuːzɪk ɪn ˈðɪs kæˈfeɪ/|我喜歡這間咖啡店的音樂（特指）}}{{ex:The life of a teacher is busy.|/ðə ˈlaɪf əv ə ˈtiːtʃər ɪz ˈbɪzi/|老師的生活很忙}}{{ex:The coffee you made was great.|/ðə ˈkɔːfi ju ˈmeɪd wəz ˈgreɪt/|你沖的咖啡很好喝}}
<h3>3. 固定搭配：不加冠詞</h3>
<p>bed、school、work、class 等用於本來的用途時，以及「by + 交通工具」，都不加冠詞，整組記住。加了 the 意思就不同：go to school 是「上學」，go to the school 是「去那間學校」（例如家長去開會）。</p>
<div class="tbl"><table><tr><th>固定搭配</th><th>意思</th></tr><tr><td class="k">go to bed</td><td>睡覺</td></tr><tr><td class="k">go to school / go to work</td><td>上學 / 上班</td></tr><tr><td class="k">at home / at work</td><td>在家 / 在上班</td></tr><tr><td class="k">at night / in class</td><td>在晚上 / 在上課</td></tr><tr><td class="k">by train / by bus</td><td>坐火車 / 坐巴士</td></tr></table></div>
{{ex:I go to work by train.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈtreɪn/|我坐火車上班}}{{ex:I went to bed early.|/aɪ ˈwent tə ˈbed ˈɜːrli/|我很早就睡了}}{{ex:She's in class now.|/ʃiz ɪn ˈklæs ˈnaʊ/|她現在在上課}}
<h3>4. 一定要加 the：最高級和序數詞</h3>
<p>最高級（best、biggest）和序數詞（first、second、last）前面通常要加 <b>the</b>，因為「最……的」、「第一個」只能是確定的那一個。</p>
{{ex:It's the best movie I've ever seen.|/ɪts ðə ˈbest ˈmuːvi aɪv ˈevər ˈsiːn/|這是我看過最好的電影}}{{ex:This is the first time I've been here.|/ˈðɪs ɪz ðə ˈfɜːrst ˈtaɪm aɪv bɪn ˈhɪr/|這是我第一次來這裏}}
<div class="tip">拿不準時問自己：說的是<b>一類事物</b>，還是<b>確定的某一個</b>？一類事物，不加冠詞（可數名詞用眾數）；確定的某一個，用 the；很多個裏面隨便一個，用 a / an。不要「以防萬一」加 the。</div>`,
check:[["「我坐火車上班」用英文怎樣說？",["I go to the work by the train.","I go to a work by train.","I go to work by train.","I go to work by a train."],2,"go to work 和 by train 都是不加冠詞的固定搭配。"],["I like ___ music they play here. 空格應填甚麼？",["the","a","an","（不填）"],0,"they play here 說明了是哪裏播的音樂，所以用 the。"],["「人生苦短」（泛指）用英文怎樣說？",["The life is short.","A life is short.","Lives is short.","Life is short."],3,"泛指抽象概念，不加冠詞。"]],
practice:[
["mc","「時間就是金錢」=","Time is money.","The time is money.","A time is money.","Time is a money.","泛指抽象概念，不加冠詞；money 不可數，也不加 a。"],
["mc","「我很早就睡了」=","I went to bed early.","I went to the bed early.","I went to a bed early.","I went to beds early.","表示「睡覺」的 go to bed 是不加冠詞的固定搭配。"],
["mc","「這是我看過最好的電影」=","It's the best movie I've ever seen.","It's best movie I've ever seen.","It's a best movie I've ever seen.","It's the most best movie I've ever seen.","最高級前面要加 the。"],
["mc","「你沖的咖啡很好喝」=","The coffee you made was great.","Coffee you made was great.","A coffee you made was great.","The coffees you made was great.","you made 說明了是哪一杯咖啡，所以用冠詞 the。"],
["mc","「她現在在上班」=","She's at work now.","She's at the work now.","She's at a work now.","She's at works now.","at work（在上班）是不加冠詞的固定搭配。"],
["or","貓很愛睡覺（泛指）","Cats sleep a lot","The cat","泛指貓這種動物，不加冠詞，用眾數 cats。"],
["or","我喜歡這裏的音樂","I like the music here","a musics","here 說明了是哪裏的音樂，用冠詞 the；music 不可數，沒有眾數。"],
["or","我坐巴士上學","I go to school by bus","the a","go to school 和 by bus 都是不加冠詞的固定搭配。"],
["fi","__ is short.","人生苦短","Life","The life|A life|Lives","泛指抽象概念，不加冠詞。"],
["fi","I'm __ home now.","我現在在家","at","at the|in the|to","at home 是不加冠詞的固定搭配。"],
["fi","This is __ first time I've been here.","這是我第一次來這裏","the|my","a|an|one","序數詞 first 前面要加 the（也可以用 my）。"],
["ty","我很早就睡了","I went to bed early|I went to bed very early|I went to bed really early","went to · bed · early — 不加冠詞","the","go to bed 是不加冠詞的固定搭配。"],
["ty","教育很重要（泛指）","Education is important|Education is very important|Education is really important|Education is so important","education · important — 不加冠詞","The","泛指抽象概念，不加冠詞。"],
["ty","我坐火車上班","I go to work by train|I commute by train|I take the train to work","go to work · by train — 不加冠詞","the","go to work 和 by train 都是不加冠詞的固定搭配。"]]},
{ id:"reported", title:"間接引述：轉述別人的話", blurb:"She said she was tired. 時態往過去退一步，tell 後面要接人。", deck:"電話與短訊縮寫", body:`
<p>轉述別人說過的話時用，即間接引述 (reported speech)。中文「她說她很累」可以照搬原話（廣東話：「佢話佢好攰」），英文要把轉述內容的<b>時態往過去退一步</b>。</p>
<div class="tbl"><table><tr><th>原話</th><th>轉述</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|她說她很累}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|他說他會來}}
<h3>say 和 tell</h3>
<p><b>tell</b> 後面一定要接聽話的人，<b>say</b> 後面不直接接人（要接就說 say to me）。</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|他跟我說他很忙}}
<h3>轉述問題</h3>
<p>是非問句用 <b>if</b> 引出，有疑問詞的問句保留疑問詞，後面都用<b>陳述句的語序</b>（主語 + 動詞），不再用 do / does / did。這種句子叫間接問句。</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|她問我有沒有事}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|他問我住在哪裏}}
<p>同樣：<b>I don't know where does she live.</b> ✗ → <b>I don't know where she lives.</b> ✓</p>
<div class="tip">最常見的錯誤：<b>He said me …</b> ✗ → <b>He told me …</b> ✓；<b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. 空格應填甚麼？",["is being","was","be","will"],1,"轉述的內容，時態往過去退一步。"],["He ___ me he would come. 空格應填甚麼？",["said","say","told","tell to"],2,"後面有聽話的人 (me) 時用 told。"],["「他問我住在哪裏」用英文怎樣說？",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"轉述的問題用陳述句的語序。"]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","轉述的內容，時態往過去退一步。"],
["mc","He ___ me he was late.","told","said","say","tells to","後面有聽話的人時用 told。"],
["mc","「他說他會來」=","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will 要變成 would。"],
["mc","「她問我有沒有事」=","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","是非問句用 if 轉述。"],
["mc","「他問我住在哪裏」=","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","轉述的問題用陳述句的語序。"],
["or","她說她很累","She said she was tired","told","後面沒有聽話的人時用 said。"],
["or","他說他買了一輛車","He said he bought a car","the cars","第一次提到的一輛車，用冠詞 a。"],
["or","她說她很喜歡那本書","She said she liked the book","a books","雙方都知道的那本書，用冠詞 the。"],
["fi","She __ she was tired.","她說她很累","said","told|asked|say","後面沒有聽話的人時用 said。"],
["fi","He told __ he was busy.","他跟我說他很忙","me","I|my|to","told 後面接聽話的人。"],
["fi","She asked __ I was okay.","她問我有沒有事","if|whether","that|what|did","是非問句用 if 轉述。"],
["ty","他說他很忙","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","轉述的內容，時態往過去退一步。"],
["ty","她說她有一輛車","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — 冠詞 a","the","第一次提到的一輛車，用冠詞 a。"],
["ty","他說他看過那齣電影（用 movie）","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — 冠詞 the","a","雙方都知道的那齣電影，用冠詞 the。"]]},
];
