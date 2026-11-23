/* yue-en stage B1: new lessons. English side shared with ko-en (parity.js) except the yue-only lesson articles-3
   (converted from zh-en; deviations extraLessons; placed after passive by profile.json lessonOrder). Chinese text converted from
   zh-en and adapted for Hong Kong Cantonese speakers (docs/profiles/yue.md), rewritten into written Cantonese (docs/briefs/yue-en-cantonese-rewrite.md). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"現在完成式 2：for 同 since，一直到而家", blurb:"由過去開始、持續到而家嘅事。for + 一段時間，since + 起點。", deck:"自我介紹", body:`
<p>現在完成式嘅第二種用法：<b>由過去開始，一直持續到而家</b>嘅事。廣東話講「我 2020 年開始就住喺呢度」，動詞「住」冇變化，所以好容易講成 <b>I live here since 2020.</b> ✗ 英文要用 <b>have + 過去分詞</b>：<b>I've lived here since 2020.</b> ✓</p>
{{ex:I've lived in Hong Kong for five years.|/aɪv ˈlɪvd ɪn ˌhɑːŋ ˈkɑːŋ fər ˈfaɪv ˈjɪrz/|我喺香港住咗五年}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|我由 2020 年開始就喺度做嘢}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|我識咗佢好耐}}
<h3>for 同 since</h3>
<div class="tbl"><table><tr><th>for + 一段時間</th><th>since + 起點</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long …?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|你喺度幾耐喇？}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|你學咗英文幾耐？}}
<h3>just、already、yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|我啱啱做完}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|我已經睇咗}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|你食咗飯未？}}
<p>Have you eaten yet? 只係問對方食咗飯未，唔可以好似廣東話嘅「食咗飯未？」咁用嚟打招呼。</p>
<p>溫習吓：<b>have been to</b> 係「去過（已經返嚟）」，<b>have gone to</b> 係「去咗（仲未返嚟）」。</p>
<div class="tip">最常見嘅錯：用現在式。<b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. 空格應該填咩？",["since","for","during","from"],1,"一段時間前面用 for。"],["I've worked here ___ 2020. 空格應該填咩？",["for","in","since","at"],2,"起點前面用 since。"],["「你喺度幾耐喇？」用英文點講？",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + 過去分詞。"]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","一段時間前面用 for。"],
["mc","She's lived here ___ 2019.","since","for","in","at","起點前面用 since。"],
["mc","「你喺度幾耐喇？」=","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + 過去分詞。"],
["mc","「我啱啱做完」=","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + 過去分詞。"],
["mc","「你食咗飯未？」=","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","問「……咗未？」用 yet。"],
["or","我喺度住咗五年","I've lived here for five years","year since","五年，用眾數 years；一段時間前面用 for。"],
["or","嗰齣戲我已經睇咗","I've already seen the movie","a saw","指雙方都知道嗰齣戲，用冠詞 the。"],
["or","你等咗幾耐？","How long have you waited","did","How long have you + 過去分詞。"],
["fi","I've worked here __ two years.","我喺度做咗兩年","for","since|from|during","一段時間前面用 for。"],
["fi","I've been here __ Monday.","我由星期一開始就喺度","since","for|at|during","起點前面用 since。"],
["fi","Have you finished __?","你做完未？","yet|already","ever|never|since","問「……咗未？」用 yet。"],
["ty","我喺度住咗三年（用 have + live）","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — 眾數","year","三年，用眾數 years。"],
["ty","你喺度幾耐喇？（用 have been）","How long have you been here","how long · have you · been here","are","How long have you + 過去分詞。"],
["ty","本書我已經睇咗（用 read）","I've already read the book|I've read the book already|I already read the book|I've already read that book|I've read that book already|I already read that book","already · read · book — 冠詞 the","a","指雙方都知道嗰本書，用冠詞 the。"]]},
{ id:"narrative", title:"講故事嘅時態：過去式、過去進行式、過去完成式", blurb:"背景用過去進行式，事件用過去式，更早發生嘅事用 had + 過去分詞。", deck:"影視同俚語", body:`
<p>講過去發生嘅事，要將三種時態 (tenses) 配合埋一齊用，各有分工。廣東話靠「緊」、「咗」、「已經」同上文下理嚟表達先後，英文就一定要喺動詞形式度表現出嚟。</p>
<div class="tbl"><table><tr><th>時態</th><th>作用</th><th>例句</th></tr><tr><td class="k">過去進行式</td><td>背景、嗰陣做緊嘅事</td><td>I was walking home.</td></tr><tr><td class="k">過去式</td><td>發生嘅事件</td><td>I saw an old friend.</td></tr><tr><td class="k">過去完成式</td><td>更早發生嘅事</td><td>He had moved to Canada.</td></tr></table></div>
<h3>背景 + 事件</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|我行路返屋企嗰陣，撞到一個老朋友}}
<h3>過去完成式：had + 過去分詞</h3>
<p>比過去某個時間<b>更早</b>發生嘅事。廣東話講「我到嗰陣，齣戲已經開始咗」，兩個動作都可以用「咗」；英文就要用 had + 過去分詞嚟表示「開始」比「到」更早。</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|我到嗰陣，齣戲已經開始咗}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|我以前從來冇見過雪}}
<h3>表示先後次序嘅字詞</h3>
<p>用 first（首先）、then（然後）、after that（之後）、finally（最後）將個故事串連起嚟。</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|我哋先食咗晚飯，然後睇咗一齣戲}}
<div class="tip">then（然後）同 than（比）發音相近，但係兩個唔同嘅字。講故事用 <b>then</b>。</div>`,
check:[["When I arrived, the train ___ already left. 空格應該填咩？",["has","was","had","did"],2,"更早發生嘅事用 had + 過去分詞。"],["I ___ walking home when it started to rain. 空格應該填咩？",["was","had","did","have"],0,"嗰陣做緊嘅事（背景）用過去進行式。"],["邊一句表示更早發生嘅事？",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + 過去分詞就係過去完成式。"]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","更早發生嘅事用 had + 過去分詞。"],
["mc","I ___ cooking when the phone rang.","was","had","did","have","嗰陣做緊嘅事用過去進行式。"],
["mc","「我到嗰陣，火車已經開走咗」=","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","更早發生嘅事用 had + 過去分詞。"],
["mc","講故事嗰陣表示「然後」=","then","than","that","them","then 係「然後」，than 係「比」。"],
["mc","「我以前從來冇見過雪」=","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + 過去分詞。"],
["or","（我到嗰陣）班火車已經開走咗","The train had already left","a has","要搭嘅就係嗰班火車，用冠詞 the。"],
["or","我撞到一個老朋友","I met an old friend","a friends","old 嘅開頭係元音，用冠詞 an。"],
["or","我嗰陣行緊路返屋企","I was walking home","had","背景用過去進行式。"],
["fi","I was sleeping __ you called.","你打電話嚟嗰陣，我瞓緊覺","when","than|so|had","「……嗰陣」用 when。"],
["fi","The bus had already __.","架巴士已經開走咗","left|gone","leave|leaving|leaves","had 後面接過去分詞。"],
["fi","First we ate. __ we watched a movie.","我哋先食咗飯，然後睇咗一齣戲","Then|After that|Next","Than|Because|When","「然後」用 then。"],
["ty","（我到嗰陣）齣戲已經開始咗（用 movie）","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — 冠詞 the","a","要睇嘅就係嗰齣戲，用冠詞 the。"],
["ty","我撞到一個老朋友（用 met）","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — 冠詞 an","a","old 嘅開頭係元音，用冠詞 an。"],
["ty","我嗰陣行緊路返屋企","I was walking home|I was walking back home","was · walking · home","had","背景用過去進行式。"]]},
{ id:"conditionals", title:"假設語氣：同而家或者過去嘅事實相反", blurb:"同而家嘅事實相反用 would，後悔過去嘅事用 would have。", deck:"情緒同反應", body:`
<p>想像唔真實嘅情況嗰陣用，即係文法書入面嘅<b>假設語氣</b>。廣東話表達呢種假設淨係靠「如果」同上文下理（「如果我有時間就去旅行」、「早知就溫多啲書」），動詞本身冇變化；英文就要將動詞向過去「退一步」。</p>
<h3>同而家嘅事實相反</h3>
<p><b>If + 過去式，would + 動詞原形</b>。形式係過去式，講嘅其實係<b>而家</b>。</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|如果有時間，我就去旅行（可惜冇）}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|如果我係你，我就接受}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|換轉係你，你會點做？}}
<h3>同過去嘅事實相反</h3>
<p><b>If + had + 過去分詞，would have + 過去分詞</b>。</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|如果嗰陣有好好溫書，我就合格咗}}
<h3>表示後悔：should have、I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|我嗰陣應該打個電話}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|如果我有多啲時間就好喇}}
<div class="tbl"><table><tr><th>類型</th><th>if 部分</th><th>結果部分</th></tr><tr><td>真實條件（可能發生）</td><td class="k">現在式</td><td class="k">will</td></tr><tr><td>同而家嘅事實相反</td><td class="k">過去式</td><td class="k">would</td></tr><tr><td>同過去嘅事實相反</td><td class="k">had + 過去分詞</td><td class="k">would have + 過去分詞</td></tr></table></div>
<div class="tip">If I were you 係固定講法。主語係 I 都用 <b>were</b>，唔用 was（講嘢嗰陣都會聽到 was）。</div>`,
check:[["If I ___ rich, I would travel. 空格應該填咩？",["am","were","will be","would be"],1,"同而家嘅事實相反，用過去式 were。"],["If I had studied, I ___ passed. 空格應該填咩？",["would","will have","would have","had"],2,"同過去嘅事實相反，用 would have + 過去分詞。"],["「我嗰陣應該打個電話」用英文點講？",["I should have called.","I should called.","I should had call.","I would call should."],0,"表示後悔用 should have + 過去分詞。"]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","同而家嘅事實相反，if 部分用過去式。"],
["mc","「如果我係你，我就會買」=","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd … 係固定講法。"],
["mc","If I had known, I ___ come.","would have","would","will have","had","同過去嘅事實相反，用 would have + 過去分詞。"],
["mc","「我嗰陣應該打個電話」=","I should have called.","I should called.","I should had call.","I must called.","表示後悔用 should have + 過去分詞。"],
["mc","「換轉係你，你會點做？」=","What would you do?","What will you did?","What would you did?","What you would do?","假設語氣用 would + 動詞原形。"],
["or","如果有時間，我就去旅行（可惜冇）","If I had time I'd travel","have will","同而家嘅事實相反，用過去式 had 同 would。"],
["or","換轉係我，就搭的士","I'd take a taxi","the taxis","邊架的士都得，用冠詞 a。"],
["or","我嗰陣應該買一張飛","I should have bought a ticket","the buy","一張飛，用冠詞 a。"],
["fi","If I __ you, I'd go.","如果我係你，我就會去","were|was","am|be|would be","If I were you 係固定講法。"],
["fi","I would __ helped.","我本來會幫手","have","had|has|having","would have + 過去分詞。"],
["fi","I wish I __ more time.","如果我有多啲時間就好喇","had","have|would have|will have","I wish 後面用過去式。"],
["ty","如果我係你，我就會去","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","固定講法：If I were you, I'd …"],
["ty","如果我有架車就好喇（用 I wish）","I wish I had a car","I wish · had · car — 冠詞 a","the","邊架車都得，用冠詞 a。"],
["ty","我嗰陣應該搭的士（用 should have）","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi|I should've taken a taxi|I should've got a taxi|I should've gotten a taxi","should have · taken · taxi — 冠詞 a","the","邊架的士都得，用冠詞 a。"]]},
{ id:"passive", title:"被動式：be + 過去分詞", blurb:"比起係邊個做，更關心發生咗乜嘢事嗰陣用。", deck:"工作同電郵", body:`
<p>被動式 (passive voice) 嘅結構係 <b>be 動詞 + 過去分詞</b>。唔知係邊個做，或者邊個做都唔重要嗰陣，用被動式好自然。</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|我部手機畀人偷咗}}{{ex:This was made in China.|/ˈðɪs wəz ˈmeɪd ɪn ˈtʃaɪnə/|呢件嘢係中國製造嘅}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|個會取消咗}}
<h3>廣東話冇講「畀人」，英文都可能要用被動式</h3>
<p>廣東話嘅「畀人……」多數用喺唔好嘅事（畀人偷咗、畀人鬧），好多被動嘅意思根本唔講「畀人」：「個會取消咗」、「個問題解決咗」。英文唔睇有冇「畀人」，淨係睇<b>主語係咪承受動作嗰個</b>。會議唔會自己取消，所以要講 was canceled，be 動詞唔可以漏。</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td class="k">The meeting canceled.</td><td class="k">The meeting was canceled.</td></tr><tr><td class="k">The research conducted last year.</td><td class="k">The research was conducted last year.</td></tr><tr><td class="k">This problem must solve now.</td><td class="k">This problem must be solved now.</td></tr></table></div>
{{ex:This problem must be solved now.|/ˈðɪs ˈprɑːbləm məst bi ˈsɑːlvd ˈnaʊ/|呢個問題一定要即刻解決}}
<h3>現在式：一向都係咁嘅事</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|呢度講英文}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|早餐 7 點供應}}
<h3>用 by 講明係邊個做</h3>
{{ex:It was written by a Hong Kong writer.|/ɪt wəz ˈrɪtn baɪ ə ˌhɑːŋ ˈkɑːŋ ˈraɪtər/|呢本係一位香港作家寫嘅}}
<h3>主動同被動</h3>
<div class="tbl"><table><tr><th>主動式</th><th>被動式</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<p>相反，happen、occur、exist 呢啲動詞冇被動式：<b>The accident was happened.</b> ✗ → <b>The accident happened.</b> ✓</p>
<div class="tip">最常見嘅錯：漏咗 be 動詞。<b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓ 另外，canceled 係美式串法，學校教嘅英式串法 cancelled 一樣啱。</div>`,
check:[["My bag ___ stolen yesterday. 空格應該填咩？",["is","was","did","has"],1,"尋日嘅事，用 was + 過去分詞。"],["This phone ___ made in Japan. 空格應該填咩？",["was","did","has","does"],0,"被動式係 be 動詞 + 過去分詞。"],["「個會取消咗」用英文點講？",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be 動詞 + 過去分詞 canceled。"]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","被動式係 be 動詞 + 過去分詞。"],
["mc","「呢件嘢係喺日本製造嘅」=","This was made in Japan.","This made in Japan.","This was make in Japan.","This did made in Japan.","be 動詞 + 過去分詞 made。"],
["mc","「呢度講英文」（被動式）=","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","一向都係咁嘅事用 is + 過去分詞。"],
["mc","「個會取消咗」=","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","會議唔會自己取消，要用 be 動詞 + 過去分詞。"],
["mc","「早餐 7 點供應」=","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","三餐前面唔加冠詞；用 is + 過去分詞。"],
["or","我個袋畀人偷咗","My bag was stolen","stole","be 動詞後面接過去分詞 stolen。"],
["or","個會取消咗","The meeting was canceled","A meetings","雙方都知道嗰個會議，用冠詞 the。"],
["or","個窗畀人打爛咗","The window was broken","a windows","就係呢個窗，用冠詞 the。"],
["fi","This was __ in Japan.","呢件嘢係喺日本製造嘅","made","make|making|makes","be 動詞後面接過去分詞。"],
["fi","The room __ cleaned every day.","間房每日都有人執","is|gets","does|has|did","一向都係咁嘅事用 is + 過去分詞。"],
["fi","It was written __ Louis Cha.","呢本係金庸寫嘅","by","from|of|with","用 by 講明係邊個做。"],
["ty","我部手機畀人偷咗（用 was）","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be 動詞 + 過去分詞 stolen。"],
["ty","個會取消咗（用 was）","The meeting was canceled|The meeting was cancelled|The meeting got canceled|The meeting got cancelled","the meeting · was · canceled — 冠詞 the","a","雙方都知道嗰個會議，用冠詞 the。"],
["ty","道門嗰陣係鎖住嘅（用 was）","The door was locked","the door · was · locked — 冠詞 the","a","就係呢道門，用冠詞 the。"]]},
{ id:"articles-3", title:"冠詞總溫習：幾時唔用 the", blurb:"DSE 同 IELTS 寫作常見嘅錯：多餘嘅 the。泛指唔加冠詞，特指先用 the。", deck:"閒談", body:`
<p>中文冇冠詞，所以寫英文嗰陣唔係漏咗冠詞，就係「以防萬一」加個 the。就算英文程度唔錯，呢兩種錯都仲好常見，當中最難掌握嘅係<b>泛指</b>。呢課用四條規則幫你判斷：幾時唔加，幾時一定要加。</p>
<h3>1. 泛指一類事物：唔加 the</h3>
<p>講一類事物嘅整體嗰陣，可數名詞用<b>唔加冠詞嘅眾數</b>，不可數名詞同抽象名詞（life、education、time、money、society、nature）<b>直接用</b>。廣東話講「生活好艱難」、「教育好重要」，名詞前面乜都唔加，英文泛指嗰陣都一樣。</p>
{{ex:Cats sleep a lot.|/ˈkæts ˈsliːp ə ˈlɑːt/|貓好鍾意瞓覺}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|人生苦短}}{{ex:Education is important.|/ˌedʒuˈkeɪʃn ɪz ɪmˈpɔːrtnt/|教育好重要}}{{ex:Time is money.|/ˈtaɪm ɪz ˈmʌni/|時間就係金錢}}
<p><b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓；<b>The money is important.</b> ✗ → <b>Money is important.</b> ✓</p>
<h3>2. 確定到係邊一個：用 the</h3>
<p>同一個名詞，後面加咗 of …、in … 或者關係子句，確定咗「係邊一個」，就要用 <b>the</b>。反過嚟，廣東話嘅「呢 / 嗰」都唔可以一律譯做 the：想講「呢間」、「嗰本」，英文用 this / that。</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|我鍾意音樂（泛指）}}{{ex:I like the music in this cafe.|/aɪ ˈlaɪk ðə ˈmjuːzɪk ɪn ˈðɪs kæˈfeɪ/|我鍾意呢間咖啡店嘅音樂（特指）}}{{ex:The life of a teacher is busy.|/ðə ˈlaɪf əv ə ˈtiːtʃər ɪz ˈbɪzi/|做老師嘅生活好忙}}{{ex:The coffee you made was great.|/ðə ˈkɔːfi ju ˈmeɪd wəz ˈgreɪt/|你沖嘅咖啡好好飲}}
<h3>3. 固定搭配：唔加冠詞</h3>
<p>bed、school、work、class 呢啲字用喺本身用途嗰陣，同埋「by + 交通工具」，都唔加冠詞，成組記住。加咗 the 意思就唔同：go to school 係「返學」，go to the school 係「去嗰間學校」（例如家長去開會）。</p>
<div class="tbl"><table><tr><th>固定搭配</th><th>意思</th></tr><tr><td class="k">go to bed</td><td>瞓覺</td></tr><tr><td class="k">go to school / go to work</td><td>返學 / 返工</td></tr><tr><td class="k">at home / at work</td><td>喺屋企 / 返緊工</td></tr><tr><td class="k">at night / in class</td><td>喺夜晚 / 上緊堂</td></tr><tr><td class="k">by train / by bus</td><td>搭火車 / 搭巴士</td></tr></table></div>
{{ex:I go to work by train.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈtreɪn/|我搭火車返工}}{{ex:I went to bed early.|/aɪ ˈwent tə ˈbed ˈɜːrli/|我好早就瞓咗}}{{ex:She's in class now.|/ʃiz ɪn ˈklæs ˈnaʊ/|佢而家上緊堂}}
<h3>4. 一定要加 the：最高級同序數詞</h3>
<p>最高級（best、biggest）同序數詞（first、second、last）前面通常要加 <b>the</b>，因為「最……嘅」、「第一個」淨係可以係確定嘅嗰一個。</p>
{{ex:It's the best movie I've ever seen.|/ɪts ðə ˈbest ˈmuːvi aɪv ˈevər ˈsiːn/|呢齣係我睇過最好嘅戲}}{{ex:This is the first time I've been here.|/ˈðɪs ɪz ðə ˈfɜːrst ˈtaɪm aɪv bɪn ˈhɪr/|呢次係我第一次嚟呢度}}
<div class="tip">唔肯定嘅時候問吓自己：講緊<b>一類事物</b>，定係<b>確定嘅某一個</b>？一類事物，唔加冠詞（可數名詞用眾數）；確定嘅某一個，用 the；好多個入面是但一個，用 a / an。唔好「以防萬一」加 the。</div>`,
check:[["「我搭火車返工」用英文點講？",["I go to the work by the train.","I go to a work by train.","I go to work by train.","I go to work by a train."],2,"go to work 同 by train 都係唔加冠詞嘅固定搭配。"],["I like ___ music they play here. 空格應該填咩？",["the","a","an","（唔使填）"],0,"they play here 講明咗係呢度播嘅音樂，所以用 the。"],["「人生苦短」（泛指）英文點講？",["The life is short.","A life is short.","Lives is short.","Life is short."],3,"泛指抽象概念，唔加冠詞。"]],
practice:[
["mc","「時間就係金錢」=","Time is money.","The time is money.","A time is money.","Time is a money.","泛指抽象概念，唔加冠詞；money 不可數，亦唔加 a。"],
["mc","「我好早就瞓咗」=","I went to bed early.","I went to the bed early.","I went to a bed early.","I went to beds early.","表示「瞓覺」嘅 go to bed 係唔加冠詞嘅固定搭配。"],
["mc","「呢齣係我睇過最好嘅戲」=","It's the best movie I've ever seen.","It's best movie I've ever seen.","It's a best movie I've ever seen.","It's the most best movie I've ever seen.","最高級前面要加 the。"],
["mc","「你沖嘅咖啡好好飲」=","The coffee you made was great.","Coffee you made was great.","A coffee you made was great.","The coffees you made was great.","you made 講明咗係邊一杯咖啡，所以用冠詞 the。"],
["mc","「佢而家返緊工」=","She's at work now.","She's at the work now.","She's at a work now.","She's at works now.","at work（返緊工）係唔加冠詞嘅固定搭配。"],
["or","貓好鍾意瞓覺（泛指）","Cats sleep a lot","The cat","泛指貓呢種動物，唔加冠詞，用眾數 cats。"],
["or","我鍾意呢度嘅音樂","I like the music here","a musics","here 講明咗係邊度嘅音樂，用冠詞 the；music 不可數，冇眾數。"],
["or","我搭巴士返學","I go to school by bus","the a","go to school 同 by bus 都係唔加冠詞嘅固定搭配。"],
["fi","__ is short.","人生苦短","Life","The life|A life|Lives","泛指抽象概念，唔加冠詞。"],
["fi","I'm __ home now.","我而家喺屋企","at","at the|in the|to","at home 係唔加冠詞嘅固定搭配。"],
["fi","This is __ first time I've been here.","呢次係我第一次嚟呢度","the|my","a|an|one","序數詞 first 前面要加 the（都可以用 my）。"],
["ty","我好早就瞓咗（用 bed）","I went to bed early|I went to bed very early|I went to bed really early","went to · bed · early — 唔加冠詞","the","go to bed 係唔加冠詞嘅固定搭配。"],
["ty","教育好重要（泛指）","Education is important|Education is very important|Education is really important|Education is so important","education · important — 唔加冠詞","The","泛指抽象概念，唔加冠詞。"],
["ty","我搭火車返工（用 by）","I go to work by train|I commute by train|I take the train to work","go to work · by train — 唔加冠詞","the","go to work 同 by train 都係唔加冠詞嘅固定搭配。"]]},
{ id:"reported", title:"間接引述：轉述人哋講過嘅嘢", blurb:"She said she was tired. 時態向過去退一步，tell 後面要接人。", deck:"電話同短訊縮寫", body:`
<p>轉述人哋講過嘅嘢嗰陣用，即係間接引述 (reported speech)。廣東話「佢話佢好攰」可以照搬原話，英文就要將轉述內容嘅<b>時態向過去退一步</b>。另外，「佢」唔分男女，英文就要揀 he 定 she。</p>
<div class="tbl"><table><tr><th>原話</th><th>轉述</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|佢話佢好攰}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|佢話佢會嚟}}
<h3>say 同 tell</h3>
<p><b>tell</b> 後面一定要接聽嘅人，<b>say</b> 後面唔直接接人（要接就講 say to me）。</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|佢同我講佢好忙}}
<h3>轉述問題</h3>
<p>是非問句用 <b>if</b> 帶出，有疑問詞嘅問句保留疑問詞，後面都用<b>陳述句嘅語序</b>（主語 + 動詞），唔再用 do / does / did。呢種句叫間接問句。</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|佢問我有冇事}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|佢問我住喺邊度}}
<p>同樣：<b>I don't know where does she live.</b> ✗ → <b>I don't know where she lives.</b> ✓</p>
<div class="tip">最常見嘅錯：<b>He said me …</b> ✗ → <b>He told me …</b> ✓；<b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. 空格應該填咩？",["is being","was","be","will"],1,"轉述嘅內容，時態向過去退一步。"],["He ___ me he would come. 空格應該填咩？",["said","say","told","tell to"],2,"後面有聽嘅人 (me) 嗰陣用 told。"],["「佢問我住喺邊度」用英文點講？",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"轉述嘅問題用陳述句嘅語序。"]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","轉述嘅內容，時態向過去退一步。"],
["mc","He ___ me he was late.","told","said","say","tells to","後面有聽嘅人嗰陣用 told。"],
["mc","「佢話佢會嚟」=","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will 要變成 would。"],
["mc","「佢問我有冇事」=","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","是非問句用 if 轉述。"],
["mc","「佢問我住喺邊度」=","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","轉述嘅問題用陳述句嘅語序。"],
["or","佢話佢好攰","She said she was tired","told","後面冇聽嘅人嗰陣用 said。"],
["or","佢話佢買咗一架車","He said he bought a car","the cars","第一次提到嘅一架車，用冠詞 a。"],
["or","佢話佢好鍾意嗰本書","She said she liked the book","a books","雙方都知道嗰本書，用冠詞 the。"],
["fi","She __ she was tired.","佢話佢好攰","said","told|asked|say","後面冇聽嘅人嗰陣用 said。"],
["fi","He told __ he was busy.","佢同我講佢好忙","me","I|my|to","told 後面接聽嘅人。"],
["fi","She asked __ I was okay.","佢問我有冇事","if|whether","that|what|did","是非問句用 if 轉述。"],
["ty","佢話佢好忙（佢 = he）","He said he was busy|He said that he was busy|He told me he was busy|He said he was very busy|He said he was really busy","he said · he was · busy","is","轉述嘅內容，時態向過去退一步。"],
["ty","佢話佢有一架車（佢 = she）","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — 冠詞 a","the","第一次提到嘅一架車，用冠詞 a。"],
["ty","齣戲佢話佢睇過（佢 = he，用 movie）","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie|He said that he saw the movie|He said he'd seen the movie|He said he had watched the movie","he said · saw · movie — 冠詞 the","a","雙方都知道嗰齣戲，用冠詞 the。"]]},
];
