/* nan-en stage B1: new lessons. English side shared with ko-en (parity.js) except the extra lesson articles-3
   (carried from yue-en; deviations extraLessons; placed after passive by profile.json lessonOrder). Scaffolded from yue-en and rewritten
   into written Taiwanese (Taigi, MOE recommended characters) for Taiwanese speakers (docs/profiles/nan.md, docs/briefs/nan-digest.md). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"現在完成式 2：for 佮 since，一直到這馬", blurb:"對過去開始、繼續到這馬的代誌。for + 一段時間，since + 起點。", deck:"自我介紹", body:`
<p>現在完成式的第二種用法：<b>對過去開始，一直繼續到這馬</b>的代誌。台語講「我對 2020 年就蹛佇遮」，動詞「蹛」無變化，所以真容易講做 <b>I live here since 2020.</b> ✗ 英語愛用 <b>have + 過去分詞</b>：<b>I've lived here since 2020.</b> ✓</p>
{{ex:I've lived in Taipei for five years.|/aɪv ˈlɪvd ɪn ˌtaɪˈpe fɚ ˈfaɪv ˈjɪrz/|我蹛佇台北五年矣}}{{ex:I've worked here since 2020.|/aɪv ˈwɝkt ˈhɪr sɪns ˈtwɛntɪ ˈtwɛntɪ/|我對 2020 年就佇遮做工課}}{{ex:I've known her for a long time.|/aɪv ˈnon hɚ fɚ ə ˈlɔŋ ˈtaɪm/|我佮伊熟似真久矣}}
<h3>for 佮 since</h3>
<div class="tbl"><table><tr><th>for + 一段時間</th><th>since + 起點</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long …?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔŋ həv jʊ bɪn ˈhɪr/|你來遮偌久矣？}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔŋ həv jʊ ˈstʌdɪd ˈɪŋglɪʃ/|你學英語偌久矣？}}
<h3>just、already、yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|我拄做好}}{{ex:I've already seen it.|/aɪv ɔlˈrɛdɪ ˈsin ɪt/|我已經看過矣}}{{ex:Have you eaten yet?|/həv jʊ ˈitṇ ˈjɛt/|你食飯未？}}
<p>台語的「食飽未？」是相借問；英語 Have you eaten yet? 是真正咧問你食飯未，袂使用來相借問。</p>
<p>複習一下：<b>have been to</b> 是「去過（已經轉來矣）」，<b>have gone to</b> 是「去矣（猶未轉來）」。</p>
<div class="tip">上常見的錯：用現在式。<b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. 空格愛填啥？",["since","for","during","from"],1,"一段時間頭前用 for。"],["I've worked here ___ 2020. 空格愛填啥？",["for","in","since","at"],2,"起點頭前用 since。"],["「你來遮偌久矣？」用英語按怎講？",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + 過去分詞。"]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","一段時間頭前用 for。"],
["mc","She's lived here ___ 2019.","since","for","in","at","起點頭前用 since。"],
["mc","「你來遮偌久矣？」=","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + 過去分詞。"],
["mc","「我拄做好」=","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + 過去分詞。"],
["mc","「你食飯未？」=","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","問「……未？」用 yet。"],
["or","我佇遮蹛五年矣","I've lived here for five years","year since","五年，用複數 years；一段時間頭前用 for。"],
["or","彼齣電影我已經看過矣","I've already seen the movie","a saw","指雙方攏知影的彼齣電影，用冠詞 the。"],
["or","你等偌久矣？","How long have you waited","did","How long have you + 過去分詞。"],
["fi","I've worked here __ two years.","我佇遮做兩年矣","for","since|from|during","一段時間頭前用 for。"],
["fi","I've been here __ Monday.","我對禮拜一就佇遮","since","for|at|during","起點頭前用 since。"],
["fi","Have you finished __?","你做好未？","yet|already","ever|never|since","問「……未？」用 yet。"],
["ty","我佇遮蹛三年矣（用 have + live）","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — 複數","year","三年，用複數 years。"],
["ty","你來遮偌久矣？（用 have been）","How long have you been here","how long · have you · been here","are","How long have you + 過去分詞。"],
["ty","彼本冊我已經看過矣（用 read）","I've already read the book|I've read the book already|I already read the book|I've already read that book|I've read that book already|I already read that book","already · read · book — 冠詞 the","a","指雙方攏知影的彼本冊，用冠詞 the。"]]},
{ id:"narrative", title:"講故事的時態：過去式、過去進行式、過去完成式", blurb:"背景用過去進行式，事件用過去式，閣較早發生的用 had + 過去分詞。", deck:"影劇佮俚語", body:`
<p>講過去發生的代誌，愛共三種時態 (tenses) 配合做伙用，逐種有家己的工課。台語靠「咧」、「矣」、「已經」佮頭前後壁的意思來表示先後，英語就一定愛佇動詞的形式表現出來。</p>
<div class="tbl"><table><tr><th>時態</th><th>作用</th><th>例句</th></tr><tr><td class="k">過去進行式</td><td>背景、彼陣當咧做的代誌</td><td>I was walking home.</td></tr><tr><td class="k">過去式</td><td>發生的事件</td><td>I saw an old friend.</td></tr><tr><td class="k">過去完成式</td><td>閣較早發生的代誌</td><td>He had moved to Canada.</td></tr></table></div>
<h3>背景 + 事件</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔkɪŋ ˈhom wɛn aɪ ˈsɔ ən ˈold ˈfrɛnd/|我行路轉去厝的時，拄著一个老朋友}}
<h3>過去完成式：had + 過去分詞</h3>
<p>比過去某一个時間<b>閣較早</b>發生的代誌。台語講「我到的時，電影已經開始矣」，兩个動詞攏無變化；英語愛用 had + 過去分詞來表示「開始」比「到」閣較早。</p>
{{ex:When I arrived, the movie had already started.|/wɛn aɪ əˈraɪvd ðə ˈmuvɪ həd ɔlˈrɛdɪ ˈstɑrtɪd/|我到的時，電影已經開始矣}}{{ex:I had never seen snow before.|/aɪ həd ˈnɛvɚ ˈsin ˈsno bɪˈfɔr/|我進前毋捌看過雪}}
<h3>表示先後順序的詞</h3>
<p>用 first（先）、then（紲落來）、after that（了後）、finally（上尾）共故事串起來。</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɝst wɪ ˈet ˈdɪnɚ ‖ ˈðɛn wɪ ˈwɑtʃt ə ˈmuvɪ/|阮先食暗頓，紲落來看一齣電影}}
<div class="tip">then（紲落來）佮 than（比）發音真近，毋過是兩个無仝的詞。講故事用 <b>then</b>。</div>`,
check:[["When I arrived, the train ___ already left. 空格愛填啥？",["has","was","had","did"],2,"閣較早發生的代誌用 had + 過去分詞。"],["I ___ walking home when it started to rain. 空格愛填啥？",["was","had","did","have"],0,"彼陣當咧做的代誌（背景）用過去進行式。"],["佗一句表示閣較早發生的代誌？",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + 過去分詞就是過去完成式。"]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","閣較早發生的代誌用 had + 過去分詞。"],
["mc","I ___ cooking when the phone rang.","was","had","did","have","彼陣當咧做的代誌用過去進行式。"],
["mc","「我到的時，火車已經開走矣」=","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","閣較早發生的代誌用 had + 過去分詞。"],
["mc","講故事的時表示「紲落來」=","then","than","that","them","then 是「紲落來」，than 是「比」。"],
["mc","「我進前毋捌看過雪」=","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + 過去分詞。"],
["or","（我到的時）火車已經開走矣","The train had already left","a has","欲坐的就是彼班火車，用冠詞 the。"],
["or","我拄著一个老朋友","I met an old friend","a friends","old 的開頭是母音，用冠詞 an。"],
["or","我彼陣咧行路轉去厝","I was walking home","had","背景用過去進行式。"],
["fi","I was sleeping __ you called.","你敲電話來的時，我咧睏","when","than|so|had","「……的時」用 when。"],
["fi","The bus had already __.","公車已經開走矣","left|gone","leave|leaving|leaves","had 後壁接過去分詞。"],
["fi","First we ate. __ we watched a movie.","阮先食飯，紲落來看一齣電影","Then|After that|Next","Than|Because|When","「紲落來」用 then。"],
["ty","（我到的時）電影已經開始矣（用 movie）","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — 冠詞 the","a","欲看的就是彼齣電影，用冠詞 the。"],
["ty","我拄著一个老朋友（用 met）","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — 冠詞 an","a","old 的開頭是母音，用冠詞 an。"],
["ty","我彼陣咧行路轉去厝","I was walking home|I was walking back home","was · walking · home","had","背景用過去進行式。"]]},
{ id:"conditionals", title:"假設語氣：佮這馬抑是過去的事實相反", blurb:"佮這馬的事實相反用 would，後悔過去的代誌用 would have。", deck:"心情佮反應", body:`
<p>想像無真實的情形的時用，就是文法冊講的<b>假設語氣</b>。台語表示這款假設干焦靠「若」、「早知」佮頭前後壁的意思（「若有時間我就去旅行」、「早知就加讀一寡冊」），動詞本身無變化；英語就愛共動詞向過去「退一步」。</p>
<h3>佮這馬的事實相反</h3>
<p><b>If + 過去式，would + 原形動詞</b>。形式是過去式，講的其實是<b>這馬</b>。</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævḷ/|若有時間，我就去旅行（可惜無）}}{{ex:If I were you, I'd take it.|/ɪf aɪ wɚ ˈju aɪd ˈtek ɪt/|若我是你，我就接受}}{{ex:What would you do?|/ˈwʌt wəd jʊ ˈdu/|若是你，你會按怎做？}}
<h3>佮過去的事實相反</h3>
<p><b>If + had + 過去分詞，would have + 過去分詞</b>。</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdɪd aɪ wəd əv ˈpæst/|若彼陣有認真讀冊，我就及格矣}}
<h3>表示後悔：should have、I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔld/|我彼陣應該敲一通電話}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔr ˈtaɪm/|若有較濟時間就好矣}}
<div class="tbl"><table><tr><th>類型</th><th>if 的部分</th><th>結果的部分</th></tr><tr><td>真實的條件（可能發生）</td><td class="k">現在式</td><td class="k">will</td></tr><tr><td>佮這馬的事實相反</td><td class="k">過去式</td><td class="k">would</td></tr><tr><td>佮過去的事實相反</td><td class="k">had + 過去分詞</td><td class="k">would have + 過去分詞</td></tr></table></div>
<div class="tip">If I were you 是固定講法。主詞是 I 嘛用 <b>were</b>，無用 was（講話的時嘛會聽著 was）。</div>`,
check:[["If I ___ rich, I would travel. 空格愛填啥？",["am","were","will be","would be"],1,"佮這馬的事實相反，用過去式 were。"],["If I had studied, I ___ passed. 空格愛填啥？",["would","will have","would have","had"],2,"佮過去的事實相反，用 would have + 過去分詞。"],["「我彼陣應該敲一通電話」用英語按怎講？",["I should have called.","I should called.","I should had call.","I would call should."],0,"表示後悔用 should have + 過去分詞。"]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","佮這馬的事實相反，if 的部分用過去式。"],
["mc","「若我是你，我就會買」=","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd … 是固定講法。"],
["mc","If I had known, I ___ come.","would have","would","will have","had","佮過去的事實相反，用 would have + 過去分詞。"],
["mc","「我彼陣應該敲一通電話」=","I should have called.","I should called.","I should had call.","I must called.","表示後悔用 should have + 過去分詞。"],
["mc","「若是你，你會按怎做？」=","What would you do?","What will you did?","What would you did?","What you would do?","假設語氣用 would + 原形動詞。"],
["or","若有時間，我就去旅行（可惜無）","If I had time I'd travel","have will","佮這馬的事實相反，用過去式 had 佮 would。"],
["or","若是我，我就坐計程車","I'd take a taxi","the taxis","隨便一台計程車攏會使，用冠詞 a。"],
["or","我彼陣應該買一張票","I should have bought a ticket","the buy","一張票，用冠詞 a。"],
["fi","If I __ you, I'd go.","若我是你，我就會去","were|was","am|be|would be","If I were you 是固定講法。"],
["fi","I would __ helped.","我本來會鬥相共","have","had|has|having","would have + 過去分詞。"],
["fi","I wish I __ more time.","若我有較濟時間就好矣","had","have|would have|will have","I wish 後壁用過去式。"],
["ty","若我是你，我就會去","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","固定講法：If I were you, I'd …"],
["ty","若我有一台車就好矣（用 I wish）","I wish I had a car","I wish · had · car — 冠詞 a","the","隨便一台車攏會使，用冠詞 a。"],
["ty","我彼陣應該坐計程車（用 should have）","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi|I should've taken a taxi|I should've got a taxi|I should've gotten a taxi","should have · taken · taxi — 冠詞 a","the","隨便一台計程車攏會使，用冠詞 a。"]]},
{ id:"passive", title:"被動語態：be + 過去分詞", blurb:"比起是啥人做的，較關心發生啥物代誌的時用。", deck:"工作佮電子批", body:`
<p>被動語態 (passive voice) 的結構是 <b>be 動詞 + 過去分詞</b>。毋知是啥人做的，抑是啥人做的無重要的時，用被動語態真自然。</p>
{{ex:My phone was stolen.|/maɪ ˈfon wəz ˈstolən/|我的手機仔予人偷提去矣}}{{ex:This was made in Taiwan.|/ˈðɪs wəz ˈmed ɪn ˌtaɪˈwɑn/|這是台灣製造的}}{{ex:The meeting was canceled.|/ðə ˈmitɪŋ wəz ˈkænsḷd/|會議取消矣}}
<h3>台語無講「予人」，英語嘛可能愛用被動語態</h3>
<p>台語用「予人 + 動詞」講受著別人的動作：「我的手機仔予人偷提去」、「我予人罵」。毋過真濟被動的意思根本無講「予人」：「會議取消矣」、「問題解決矣」。英語毋是看有「予人」無，是看<b>主詞敢是受著動作的彼个</b>。會議袂家己取消，所以愛講 was canceled，be 動詞袂使漏。</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td class="k">The meeting canceled.</td><td class="k">The meeting was canceled.</td></tr><tr><td class="k">The research conducted last year.</td><td class="k">The research was conducted last year.</td></tr><tr><td class="k">This problem must solve now.</td><td class="k">This problem must be solved now.</td></tr></table></div>
{{ex:This problem must be solved now.|/ˈðɪs ˈprɑbləm məst bɪ ˈsɑlvd ˈnaʊ/|這个問題愛隨解決}}
<h3>現在式：一向攏按呢的代誌</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspokən ˈhɪr/|遮講英語}}{{ex:Breakfast is served at seven.|/ˈbrɛkfəst ɪz ˈsɝvd ət ˈsɛvən/|早頓 7 點供應}}
<h3>用 by 講明是啥人做的</h3>
<p>台語「予人」的「人」若換做確定的人，英語就共伊囥佇 <b>by</b> 後壁。</p>
{{ex:It was written by a Taiwanese writer.|/ɪt wəz ˈrɪtṇ baɪ ə ˌtaɪwəˈniz ˈraɪtɚ/|這本冊是一位台灣作家寫的}}
<h3>主動佮被動</h3>
<div class="tbl"><table><tr><th>主動語態</th><th>被動語態</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<p>另外，happen、occur、exist 這款動詞無被動語態：<b>The accident was happened.</b> ✗ → <b>The accident happened.</b> ✓</p>
<div class="tip">上常見的錯：漏 be 動詞。<b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓ 另外，canceled 是美式拼字，英式拼字 cancelled 嘛著。</div>`,
check:[["My bag ___ stolen yesterday. 空格愛填啥？",["is","was","did","has"],1,"昨昏的代誌，用 was + 過去分詞。"],["This phone ___ made in Japan. 空格愛填啥？",["was","did","has","does"],0,"被動語態是 be 動詞 + 過去分詞。"],["「會議取消矣」用英語按怎講？",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be 動詞 + 過去分詞 canceled。"]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","被動是 be 動詞 + 過去分詞。"],
["mc","「這是日本製造的」=","This was made in Japan.","This made in Japan.","This was make in Japan.","This did made in Japan.","be 動詞 + 過去分詞 made。"],
["mc","「遮講英語」（被動）=","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","一向攏按呢的代誌用 is + 過去分詞。"],
["mc","「會議取消矣」=","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","會議袂家己取消，愛用 be 動詞 + 過去分詞。"],
["mc","「早頓 7 點供應」=","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","三頓頭前無加冠詞；用 is + 過去分詞。"],
["or","我的袋仔予人偷提去矣","My bag was stolen","stole","be 動詞後壁接過去分詞 stolen。"],
["or","會議取消矣","The meeting was canceled","A meetings","雙方攏知影的彼場會議，用冠詞 the。"],
["or","窗仔予人摃破矣","The window was broken","a windows","就是這扇窗仔，用冠詞 the。"],
["fi","This was __ in Japan.","這是日本製造的","made","make|making|makes","be 動詞後壁接過去分詞。"],
["fi","The room __ cleaned every day.","房間逐工攏有人拚掃","is|gets","does|has|did","一向攏按呢的代誌用 is + 過去分詞。"],
["fi","It was written __ Louis Cha.","這本冊是金庸寫的","by","from|of|with","用 by 講明是啥人做的。"],
["ty","我的手機仔予人偷提去矣（用 was）","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be 動詞 + 過去分詞 stolen。"],
["ty","會議取消矣（用 was）","The meeting was canceled|The meeting was cancelled|The meeting got canceled|The meeting got cancelled","the meeting · was · canceled — 冠詞 the","a","雙方攏知影的彼場會議，用冠詞 the。"],
["ty","彼陣門是鎖咧的（用 was）","The door was locked","the door · was · locked — 冠詞 the","a","就是這扇門，用冠詞 the。"]]},
{ id:"articles-3", title:"冠詞總複習：當時無用 the", blurb:"學測、全民英檢、TOEIC 寫作常見的錯：加傷濟 the。泛指無加冠詞，特指才用 the。", deck:"開講", body:`
<p>台語無冠詞 (articles)，所以寫英語的時，若毋是漏冠詞，就是「為著保險」加一个 the。就算英語已經學真久，寫學測、全民英檢抑是 TOEIC 的作文，這兩種錯猶是真常見，內底上歹掌握的是<b>泛指</b>。這課用四條規則幫你判斷：當時無加，當時一定愛加。</p>
<h3>1. 泛指一類物件：無加 the</h3>
<p>講一類物件的全體的時，可數名詞用<b>無加冠詞的複數</b>，不可數名詞佮抽象名詞（life、education、time、money、society、nature）<b>直接用</b>。台語講「人生真艱苦」、「教育真重要」，名詞頭前啥物攏無加，英語泛指的時嘛仝款。</p>
{{ex:Cats sleep a lot.|/ˈkæts ˈslip ə ˈlɑt/|貓仔真愛睏}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔrt/|人生真短}}{{ex:Education is important.|/ˌɛdʒʊˈkeʃən ɪz ɪmˈpɔrtṇt/|教育真重要}}{{ex:Time is money.|/ˈtaɪm ɪz ˈmʌnɪ/|時間就是金錢}}
<p><b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓；<b>The money is important.</b> ✗ → <b>Money is important.</b> ✓</p>
<h3>2. 確定是佗一个：用 the</h3>
<p>仝一个名詞，後壁若加 of …、in … 抑是關係子句，確定是「佗一个」，就愛用 <b>the</b>。倒轉來講，台語的「這 / 彼」嘛袂使攏翻做 the：想欲講「這間」、「彼本」，英語用 this / that。</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuzɪk/|我佮意音樂（泛指）}}{{ex:I like the music in this cafe.|/aɪ ˈlaɪk ðə ˈmjuzɪk ɪn ˈðɪs kæˈfe/|我佮意這間咖啡廳的音樂（特指）}}{{ex:The life of a teacher is busy.|/ðə ˈlaɪf əv ə ˈtitʃɚ ɪz ˈbɪzɪ/|做老師的生活真無閒}}{{ex:The coffee you made was great.|/ðə ˈkɔfɪ jʊ ˈmed wəz ˈgret/|你泡的咖啡真好啉}}
<h3>3. 固定搭配：無加冠詞</h3>
<p>bed、school、work、class 這款詞用佇本來的用途的時，佮「by + 交通工具」，攏無加冠詞，規組記起來。加 the 意思就無仝：go to school 是「去學校讀冊」，go to the school 是「去彼間學校」（親像家長去開會）。</p>
<div class="tbl"><table><tr><th>固定搭配</th><th>意思</th></tr><tr><td class="k">go to bed</td><td>去睏</td></tr><tr><td class="k">go to school / go to work</td><td>去讀冊 / 去上班</td></tr><tr><td class="k">at home / at work</td><td>佇厝 / 咧上班</td></tr><tr><td class="k">at night / in class</td><td>暗時 / 咧上課</td></tr><tr><td class="k">by train / by bus</td><td>坐火車 / 坐公車</td></tr></table></div>
{{ex:I go to work by train.|/aɪ ˈgo tə ˈwɝk baɪ ˈtren/|我坐火車去上班}}{{ex:I went to bed early.|/aɪ ˈwɛnt tə ˈbɛd ˈɝlɪ/|我真早就去睏矣}}{{ex:She's in class now.|/ʃɪz ɪn ˈklæs ˈnaʊ/|伊這馬咧上課}}
<h3>4. 一定愛加 the：最高級佮序數</h3>
<p>最高級（best、biggest）佮序數（first、second、last）頭前通常愛加 <b>the</b>，因為「上……的」、「頭一个」干焦會使是確定的彼一个。</p>
{{ex:It's the best movie I've ever seen.|/ɪts ðə ˈbɛst ˈmuvɪ aɪv ˈɛvɚ ˈsin/|這是我看過上好看的電影}}{{ex:This is the first time I've been here.|/ˈðɪs ɪz ðə ˈfɝst ˈtaɪm aɪv bɪn ˈhɪr/|這是我頭一擺來遮}}
<div class="tip">無把握的時問家己：咧講<b>一類物件</b>，抑是<b>確定的某一个</b>？一類物件，無加冠詞（可數名詞用複數）；確定的某一个，用 the；真濟个內底隨便一个，用 a / an。莫「為著保險」加 the。</div>`,
check:[["「我坐火車去上班」用英語按怎講？",["I go to the work by the train.","I go to a work by train.","I go to work by train.","I go to work by a train."],2,"go to work 佮 by train 攏是無加冠詞的固定搭配。"],["I like ___ music they play here. 空格愛填啥？",["the","a","an","（毋免填）"],0,"they play here 講明是遮放的音樂，所以用 the。"],["「人生真短」（泛指）英語按怎講？",["The life is short.","A life is short.","Lives is short.","Life is short."],3,"泛指抽象的概念，無加冠詞。"]],
practice:[
["mc","「時間就是金錢」=","Time is money.","The time is money.","A time is money.","Time is a money.","泛指抽象的概念，無加冠詞；money 不可數，嘛無加 a。"],
["mc","「我真早就去睏矣」=","I went to bed early.","I went to the bed early.","I went to a bed early.","I went to beds early.","表示「去睏」的 go to bed 是無加冠詞的固定搭配。"],
["mc","「這是我看過上好看的電影」=","It's the best movie I've ever seen.","It's best movie I've ever seen.","It's a best movie I've ever seen.","It's the most best movie I've ever seen.","最高級頭前愛加 the。"],
["mc","「你泡的咖啡真好啉」=","The coffee you made was great.","Coffee you made was great.","A coffee you made was great.","The coffees you made was great.","you made 講明是佗一杯咖啡，所以用冠詞 the。"],
["mc","「伊這馬咧上班」=","She's at work now.","She's at the work now.","She's at a work now.","She's at works now.","at work（咧上班）是無加冠詞的固定搭配。"],
["or","貓仔真愛睏（泛指）","Cats sleep a lot","The cat","泛指貓這種動物，無加冠詞，用複數 cats。"],
["or","我佮意遮的音樂","I like the music here","a musics","here 講明是佗位的音樂，用冠詞 the；music 不可數，無複數。"],
["or","我坐公車去學校","I go to school by bus","the a","go to school 佮 by bus 攏是無加冠詞的固定搭配。"],
["fi","__ is short.","人生真短","Life","The life|A life|Lives","泛指抽象的概念，無加冠詞。"],
["fi","I'm __ home now.","我這馬佇厝","at","at the|in the|to","at home 是無加冠詞的固定搭配。"],
["fi","This is __ first time I've been here.","這是我頭一擺來遮","the|my","a|an|one","序數 first 頭前愛加 the（嘛會使用 my）。"],
["ty","我真早就去睏矣（用 bed）","I went to bed early|I went to bed very early|I went to bed really early","went to · bed · early — 無加冠詞","the","go to bed 是無加冠詞的固定搭配。"],
["ty","教育真重要（泛指）","Education is important|Education is very important|Education is really important|Education is so important","education · important — 無加冠詞","The","泛指抽象的概念，無加冠詞。"],
["ty","我坐火車去上班","I go to work by train|I commute by train|I take the train to work|I take a train to work","go to work · by train — 無加冠詞","the","go to work 佮 by train 攏是無加冠詞的固定搭配。"]]},
{ id:"reported", title:"間接引述：轉述別人講過的話", blurb:"She said she was tired. 時態向過去退一步，tell 後壁愛接人。", deck:"電話佮簡訊縮寫", body:`
<p>轉述別人講過的話的時用，就是間接引述 (reported speech)。台語「伊講伊真忝」會使照原話講，英語就愛共轉述內容的<b>時態向過去退一步</b>。另外，「伊」無分查埔查某，英語愛揀 he 抑是 she。</p>
<div class="tbl"><table><tr><th>原話</th><th>轉述</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃɪ ˈsɛd ʃɪ wəz ˈtaɪɚd/|伊講伊真忝}}{{ex:He said he would come.|/hɪ ˈsɛd hɪ wəd ˈkʌm/|伊講伊會來}}
<h3>say 佮 tell</h3>
<p>台語攏講「講」，英語 <b>tell</b> 後壁一定愛接聽的人，<b>say</b> 後壁無直接接人（欲接人就講 say to me）。</p>
{{ex:He told me he was busy.|/hɪ ˈtold mɪ hɪ wəz ˈbɪzɪ/|伊共我講伊真無閒}}
<h3>轉述問題</h3>
<p>是非問句用 <b>if</b> 帶出來，有疑問詞的問句保留疑問詞，後壁攏用<b>直述句的詞序</b>（主詞 + 動詞），毋免閣用 do / does / did。這種句叫做間接問句。</p>
{{ex:She asked if I was okay.|/ʃɪ ˈæskt ɪf aɪ wəz oˈke/|伊問我有要緊無}}{{ex:He asked where I lived.|/hɪ ˈæskt ˈwɛr aɪ ˈlɪvd/|伊問我蹛佇佗位}}
<p>仝款：<b>I don't know where does she live.</b> ✗ → <b>I don't know where she lives.</b> ✓</p>
<div class="tip">上常見的錯：<b>He said me …</b> ✗ → <b>He told me …</b> ✓；<b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. 空格愛填啥？",["is being","was","be","will"],1,"轉述的內容，時態向過去退一步。"],["He ___ me he would come. 空格愛填啥？",["said","say","told","tell to"],2,"後壁有聽的人 (me) 的時用 told。"],["「伊問我蹛佇佗位」用英語按怎講？",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"轉述的問題用直述句的詞序。"]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","轉述的內容，時態向過去退一步。"],
["mc","He ___ me he was late.","told","said","say","tells to","後壁有聽的人的時用 told。"],
["mc","「伊講伊會來」=","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will 愛變做 would。"],
["mc","「伊問我有要緊無」=","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","是非問句用 if 轉述。"],
["mc","「伊問我蹛佇佗位」=","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","轉述的問題用直述句的詞序。"],
["or","伊講伊真忝","She said she was tired","told","後壁無聽的人的時用 said。"],
["or","伊講伊買一台車","He said he bought a car","the cars","頭一擺提著的一台車，用冠詞 a。"],
["or","伊講伊真佮意彼本冊","She said she liked the book","a books","雙方攏知影的彼本冊，用冠詞 the。"],
["fi","She __ she was tired.","伊講伊真忝","said","told|asked|say","後壁無聽的人的時用 said。"],
["fi","He told __ he was busy.","伊共我講伊真無閒","me","I|my|to","told 後壁接聽的人。"],
["fi","She asked __ I was okay.","伊問我有要緊無","if|whether","that|what|did","是非問句用 if 轉述。"],
["ty","伊講伊真無閒（伊 = he）","He said he was busy|He said that he was busy|He told me he was busy|He said he was very busy|He said he was really busy","he said · he was · busy","is","轉述的內容，時態向過去退一步。"],
["ty","伊講伊有一台車（伊 = she）","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — 冠詞 a","the","頭一擺提著的一台車，用冠詞 a。"],
["ty","彼齣電影伊講伊看過（伊 = he，用 movie）","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie|He said that he saw the movie|He said he'd seen the movie|He said he had watched the movie","he said · saw · movie — 冠詞 the","a","雙方攏知影的彼齣電影，用冠詞 the。"]]},
];
