/* yue-en stage A2: new lessons. English side shared with ko-en (parity.js); Chinese text converted from zh-en and adapted for
   Hong Kong Cantonese speakers (docs/profiles/yue.md). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"過去進行式：was / were + -ing", blurb:"當時正在做的事，用來交代故事的背景。", deck:"情緒與反應", body:`
<p>說過去<b>某個時刻正在做的事</b>。把現在進行式裏的 be 動詞換成過去式 (was / were) 就可以了。廣東話說「我嗰陣瞓緊覺」，靠「嗰陣」和「緊」來表達；英文要靠動詞形式。</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|我當時在睡覺}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|我們當時在看電視}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|當時在下雨}}
<h3>疑問句</h3>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|你當時在做甚麼？}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|你 9 點的時候在工作嗎？}}
<h3>和 when 連用：正在做一件事時，發生了另一件事</h3>
<p>持續進行的動作用<b>過去進行式</b>，中途發生的短暫動作用<b>過去式</b>。</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|你打電話來的時候，我正在煮飯}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|我走路回家的時候，開始下雨了}}
<p>中文的「在 / 正在」可以省略，英文的 was / were 不能省：<b>I cooking.</b> ✗ → <b>I was cooking.</b> ✓</p>
<div class="tip">「正在做」如果只用過去式，意思就變了。<b>I cooked when you called.</b> 的意思是「你打電話來之後，我才開始煮飯」。</div>`,
check:[["「你 9 點的時候在做甚麼？」用英文怎樣說？",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"主語 you 用 were，後面接 -ing 形式。"],["I was cooking ___ you called. 空格應填甚麼？",["when","so","or","than"],0,"「……的時候」用 when。"],["They ___ watching TV. 空格應填甚麼？",["was","did","were","are being"],2,"主語 they 用 were。"]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","主語 I 用 was。"],
["mc","「你打電話來的時候，我正在煮飯」=","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","持續的動作用過去進行式，中途發生的動作用過去式。"],
["mc","「你當時在做甚麼？」=","What were you doing?","What did you doing?","What was you doing?","What were you do?","you 用 were，後面接 -ing 形式。"],
["mc","They ___ playing soccer.","were","was","did","are","主語 they 用 were。"],
["mc","「當時在下雨」=","It was raining.","It were raining.","It was rain.","It rained was.","it 用 was，後面接 -ing 形式。"],
["or","我當時在看一本書","I was reading a book","read books","看的是一本書，用冠詞 a 和單數 book。"],
["or","孩子們當時在睡覺","The kids were sleeping","kid was","孩子不止一個，用眾數 kids 和 were。"],
["or","我們當時在看電視","We were watching TV","was","主語 we 用 were。"],
["fi","I was __ dinner.","我當時在煮晚飯","cooking|making","cook|cooked|cooks","was 後面接 -ing 形式。"],
["fi","What __ you doing?","你當時在做甚麼？","were","was|did|does","主語 you 用 were。"],
["fi","I was sleeping __ you called.","你打電話來的時候，我在睡覺","when","so|than|or","「……的時候」用 when。"],
["ty","我當時在工作","I was working","was · work — -ing 形式","were","主語 I 用 was，再加 -ing 形式。"],
["ty","我當時在看電影","I was watching a movie","was · watching · movie — 冠詞 a","the","沒有特指哪一齣電影，用冠詞 a。"],
["ty","孩子們當時在玩耍","The kids were playing|The children were playing","kids · were · playing — 眾數","kid","孩子不止一個，用眾數 kids 和 were。"]]},
{ id:"will", title:"will：即場決定、承諾、預測", blurb:"即場決定用 will，事先計劃好用 be going to。", deck:"閒談", body:`
<p><b>will + 動詞原形</b>。口語裏幾乎總是縮寫成 <b>I'll、you'll、it'll</b>，否定是 <b>won't</b>。</p>
<p>注意書面語的「會」有兩個意思：「明天會下雨」是預測，用 will；「我會游泳」是能力，要用 can：I can swim. 廣東話本身分得很清楚（「聽日會落雨」、「我識游水」），英文也一樣分開。</p>
<h3>即場決定</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|我要意大利粉}}{{ex:I'll get it.|/aɪl ˈget ɪt/|我來接（電話）/ 我去開門}}
<h3>承諾和提議</h3>
{{ex:I'll help you.|/aɪl ˈhelp ju/|我來幫你}}{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|我晚一點打電話給你}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|我不會遲到的}}
<h3>預測</h3>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|會沒事的}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|我覺得會下雨}}
<h3>will 和 be going to</h3>
<div class="tbl"><table><tr><th></th><th>甚麼時候用</th><th>例句</th></tr><tr><td class="k">will</td><td>即場決定、承諾</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>事先定好的計劃</td><td>I'm going to visit Macau next month.</td></tr></table></div>
<div class="tip">最常見的錯誤：<b>I will to go.</b>、<b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ will 後面只能接動詞原形。</div>`,
check:[["電話響了，「我來接」怎樣說？",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"即場決定的事用 will。"],["I ___ be late.（我不會遲到的）",["won't","willn't","don't will","not will"],0,"will 的否定是 won't。"],["哪一句說的是事先定好的計劃？",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"事先定好的計劃用 be going to。"]],
practice:[
["mc","「我來幫你」=","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","will 後面接動詞原形。"],
["mc","在餐廳即場決定：「我要意大利粉」=","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","即場決定的事用 will。"],
["mc","「我不會遲到的」=","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not 縮寫成 won't。"],
["mc","「你會來嗎？」=","Will you come?","Do you will come?","Will you coming?","Will come you?","Will + 主語 + 動詞原形。"],
["mc","哪一句說的是事先定好的計劃？","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","事先定好的計劃用 be going to。"],
["or","我晚一點打電話給你","I'll call you later","calling","will 後面接動詞原形。"],
["or","我要一杯咖啡","I'll have a coffee","the coffees","點的是一杯，用冠詞 a。"],
["or","我去開門","I'll open the door","a doors","就是這扇門，用冠詞 the。"],
["fi","I __ call you tomorrow.","我明天打電話給你","will","am|going|do","承諾用 will。"],
["fi","I __ forget.","我不會忘記的","won't|will not","don't|not|willn't","will 的否定是 won't。"],
["fi","__ you help me?","你可以幫我一下嗎？","Will|Can|Could|Would","Do|Are|Is","請別人幫忙可以說 Will you …?"],
["ty","我來幫你","I'll help you|I'll help","I'll · help · you","helping","will 後面接動詞原形。"],
["ty","我要一份沙律（用 will）","I'll have a salad|I'll have the salad","I'll have · salad — 注意冠詞","salads","點一份，加冠詞 a（指餐牌上那道菜也可以用 the）。"],
["ty","我去關門（用 will）","I'll close the door|I'll shut the door","I'll · close · door — 冠詞 the","a","就是這扇門，用冠詞 the。"]]},
{ id:"perfect", title:"現在完成式：做過某事", blurb:"have + 過去分詞，表達經歷。說出具體時間就用過去式。", deck:"旅行（機場與酒店）", body:`
<p><b>have + 過去分詞</b>是現在完成式 (present perfect)，表示「到現在為止，做過某事」，相當於中文的「過」（廣東話也說「我去過日本」）：I've been to Japan. 這種用法<b>不說具體甚麼時候</b>。</p>
{{ex:I've been to Japan.|/aɪv bɪn tə dʒəˈpæn/|我去過日本}}{{ex:She has visited Hong Kong twice.|/ʃi həz ˈvɪzɪtɪd ˌhɑːŋ ˈkɑːŋ ˈtwaɪs/|她來過香港兩次}}
<h3>ever 和 never</h3>
{{ex:Have you ever eaten dim sum?|/həv ju ˈevər ˈiːtn ˈdɪm ˈsʌm/|你吃過點心嗎？}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|我從未看過}}
<p>回答用 <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>常用的過去分詞</h3>
<div class="tbl"><table><tr><th>原形</th><th>過去式</th><th>過去分詞</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>been to 和 gone to</h3>
<p><b>been to</b> 是「去過（已經回來了）」，<b>gone to</b> 是「去了（人還在那邊）」。</p>
{{ex:She's gone to London.|/ʃiz ˈgɔːn tə ˈlʌndən/|她去了倫敦（現在不在這裏）}}
<h3>說出具體時間就用過去式</h3>
<p>有 last year、yesterday、in 2020 這樣已經過去的時間點，就不能用現在完成式。廣東話的「咗」也不等於現在完成式：「我舊年去咗日本」有具體時間，要用過去式。</p>
{{ex:I went to Japan last year.|/aɪ ˈwent tə dʒəˈpæn ˈlæst ˈjɪr/|我去年去了日本}}
<div class="tip">最常見的錯誤：<b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["「你去過日本嗎？」用英文怎樣說？",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"問經歷用 Have you ever + 過去分詞。"],["I ___ never seen that movie. 空格應填甚麼？",["am","did","have","was"],2,"have + never + 過去分詞。"],["下面哪一句是正確的？",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"有 last year 這樣的時間點，用過去式。"]],
practice:[
["mc","「我去過日本」=","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have + 過去分詞 been。"],
["mc","see 的過去分詞是？","seen","saw","seed","seeing","see 的三種形式是 see – saw – seen。"],
["mc","「你吃過泡菜嗎？」=","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","問經歷用 Have you ever + 過去分詞。"],
["mc","「我從未看過它」=","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","have + never + 過去分詞。"],
["mc","有「去年」時，正確的句子是？","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","有具體時間點，用過去式。"],
["or","那齣電影我看過","I've seen the movie","a saw","指雙方都知道的那齣電影，用冠詞 the。"],
["or","我去過韓國兩次","I've been to Korea twice","went","have 後面接過去分詞 been。"],
["or","我從未見過蛇","I've never seen a snake","the snakes","不是特指哪一條蛇，用冠詞 a。"],
["fi","Have you ever __ to Busan?","你去過釜山嗎？","been","be|went|go","have 後面接過去分詞 been。"],
["fi","I've __ eaten that.","那個我從未吃過","never","ever|no|not never","「從來沒有」用 never。"],
["fi","She __ visited Korea twice.","她來過韓國兩次","has","have|is|did","主語 she 用 has。"],
["ty","你去過日本嗎？","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","問經歷用 Have you ever been to …?"],
["ty","那本書我讀過","I've read the book|I've read that book","I've · read · book — 冠詞 the","a","指雙方都知道的那本書，用冠詞 the。"],
["ty","我從未養過貓（用 have）","I've never had a cat","never · had · cat — 冠詞 a","the","不是特指哪一隻貓，用冠詞 a。"]]},
{ id:"modals", title:"have to、must、should、might：義務和建議", blurb:"必須做、最好做、可能會做。", deck:"醫院與緊急情況", body:`
<p>這四個詞分別表達義務、建議和可能性，後面都接<b>動詞原形</b>。大致對應中文的「要 / 必須」、「應該 / 最好」、「可能」。</p>
<h3>have to：要、必須</h3>
<p>日常最常用。主語是 he / she 時用 <b>has to</b>（第三身單數）。</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|我明天要上班}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|她現在要走了}}
<h3>don't have to 和 must not 不一樣</h3>
<div class="tbl"><table><tr><th>說法</th><th>意思</th></tr><tr><td class="k">You don't have to come.</td><td>你不用來（沒有必要）</td></tr><tr><td class="k">You must not smoke here.</td><td>這裏禁止吸煙（不允許）</td></tr></table></div>
<h3>should：應該、最好</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|你應該去看醫生}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|你不用擔心}}
<h3>might：可能、也許</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|可能會下雨}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|我可能會遲到}}
<p>「可能會下雨」裏的「會」不用再譯成 will，說 It might rain. 就夠了。另外，must 多表示說話的人自己認為必須，have to 多表示外在規定或客觀需要；中文的「會 / 能 / 可以」也不能一一對應，要按意思選 can、be able to 或 may。</p>
<div class="tip">最常見的錯誤：<b>You should to go.</b>、<b>It might rains.</b> ✗ → <b>You should go.</b>、<b>It might rain.</b> ✓</div>`,
check:[["「你不用來」用英文怎樣說？",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"「沒有必要」用 don't have to。"],["給建議時：You ___ see a doctor.",["might","have","should","must to"],2,"建議用 should + 動詞原形。"],["She ___ to work today. 空格應填甚麼？",["have","must","should","has"],3,"主語 she 用 has to。"]],
practice:[
["mc","「我明天要上班」=","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + 動詞原形。"],
["mc","「你不用來」=","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","「沒有必要」用 don't have to。"],
["mc","「你應該去看醫生」=","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + 動詞原形；醫生是一位，用冠詞 a。"],
["mc","「可能會下雨」=","It might rain.","It might rains.","It might to rain.","It mights rain.","might + 動詞原形。"],
["mc","「這裏禁止吸煙」=","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","禁止用 must not。"],
["or","你應該去看醫生","You should see a doctor","the doctors","不是特指哪一位醫生，用冠詞 a。"],
["or","我現在要走了","I have to go now","going","have to 後面接動詞原形。"],
["or","你要買一張票","You have to buy a ticket","the tickets","一張票，用冠詞 a 和單數 ticket。"],
["fi","She __ to study tonight.","她今晚要溫習","has","have|must|should","主語 she 用 has to（第三身單數）。"],
["fi","You __ have to pay.","你不用付錢","don't|do not","must not|not|aren't","「沒有必要」用 don't have to。"],
["fi","It __ rain tomorrow.","明天可能會下雨","might|may|could","must to|has to|should to","可能性用 might。"],
["ty","我必須上班","I have to work|I must work|I need to work","have to · work","should","義務用 have to。"],
["ty","你應該去看醫生","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — 冠詞 a","the","不是特指哪一位醫生，用冠詞 a。"],
["ty","要買一張票","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — 冠詞 a","the","一張票，用冠詞 a。"]]},
{ id:"to-ing", title:"動詞後接 to 還是 -ing：want to、enjoy -ing", blurb:"want 後面接 to，enjoy 後面接 -ing，由前面的動詞決定。", deck:"閒談", body:`
<p>中文「我想去」、「我喜歡煮飯」，兩個動詞可以直接連在一起（廣東話也一樣：「我想去」、「我鍾意煮飯」），英文不行：<b>I want go.</b> ✗ 第二個動詞要麼用 <b>to + 動詞原形</b>（不定詞），要麼用 <b>-ing</b>（動名詞），由前面的動詞決定。常用的一組一組記。</p>
<div class="tbl"><table><tr><th>後接 to</th><th>後接 -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop, suggest</td></tr></table></div>
<h3>to + 動詞：打算做的事</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|我想回家}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|我需要溫習}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|我想點餐}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|我決定學英文}}
<h3>-ing：enjoy、finish、mind 等動詞後面</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|我喜歡煮飯}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|我做完工作了}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|我不介意等}}
<h3>兩個常見的錯誤：suggest 和 look forward to</h3>
<p><b>suggest</b> 後面不能接「人 + to」：<b>He suggested me to go.</b> ✗ → <b>He suggested going.</b> ✓ <b>look forward to</b> 的 to 是介詞，後面接 -ing，不接動詞原形：<b>I look forward to hear from you.</b> ✗</p>
{{ex:I look forward to hearing from you.|/aɪ ˈlʊk ˈfɔːrwərd tə ˈhɪrɪŋ frəm ju/|期待你的回覆}}
<h3>兩種都可以的動詞</h3>
<p>like、love、start 後面接 to 或 -ing 都可以。</p>
<div class="tip">最常見的錯誤：<b>I want go.</b>、<b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>、<b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. 空格應填甚麼？",["go","going","to go","to going"],2,"want 後面接 to + 動詞原形。"],["I enjoy ___ movies. 空格應填甚麼？",["watching","to watch","watch","to watching"],0,"enjoy 後面接 -ing 形式。"],["「我想點餐」用英文怎樣說？",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"would like 後面接 to + 動詞原形。"]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","need 後面接 to + 動詞原形。"],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","enjoy 後面接 -ing 形式。"],
["mc","「我想點餐」=","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","would like 後面接 to + 動詞原形。"],
["mc","「我做完工作了」=","I finished working.","I finished to work.","I finished work to.","I finish worked.","finish 後面接 -ing 形式。"],
["mc","「我不介意等」=","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","mind 後面接 -ing 形式。"],
["or","我想買一輛車","I want to buy a car","the buying","want 後面接 to；一輛車，用冠詞 a。"],
["or","我喜歡看電影","I enjoy watching movies","movie watch","enjoy 後面接 -ing；泛指電影，用眾數 movies。"],
["or","我需要休息一下","I need to rest","resting","need 後面接 to + 動詞原形。"],
["fi","I want __ a coffee.","我想喝杯咖啡","to have|to drink|to get","have|having|drinking","want 後面接 to + 動詞原形。"],
["fi","She enjoys __.","她喜歡游泳","swimming","to swim|swim|swims","enjoy 後面接 -ing 形式。"],
["fi","I decided __ English.","我決定學英文","to study|to learn","study|studying|studied","decide 後面接 to + 動詞原形。"],
["ty","我想回家","I want to go home","want to · go · home — 不加冠詞","the","want 後面接 to；home 前面不加冠詞。"],
["ty","我喜歡看書（用 enjoy）","I enjoy reading books|I enjoy reading","enjoy · read · book — 眾數","book","enjoy 後面接 -ing；泛指書，用眾數 books。"],
["ty","我想點餐","I'd like to order|I want to order","I'd like · to · order","ordering","would like 後面接 to + 動詞原形。"]]},
{ id:"articles-2", title:"冠詞進階：獨一無二的 the 和不加冠詞的泛指", blurb:"樂器前加 the，運動前不加。還有國名和「泛指一類事物」。", deck:"旅行（機場與酒店）", body:`
<p>冠詞第三課。中文沒有冠詞，所以冠詞有兩種錯法：該加的漏掉，不該加的又「以防萬一」加上 the。這一課把有固定規則的情況整理一下：哪些要加 the，哪些一定不加。</p>
<h3>要加 the 的情況</h3>
<div class="tbl"><table><tr><th>情況</th><th>例子</th></tr><tr><td>世界上獨一無二的事物</td><td class="k">the sun, the internet</td></tr><tr><td>樂器</td><td class="k">play the piano</td></tr><tr><td>江河、海洋</td><td class="k">the Pearl River, the Pacific</td></tr><tr><td>眾數形式或聯合體的國名</td><td class="k">the United States, the Philippines</td></tr><tr><td>最高級</td><td class="k">the best, the biggest</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|我彈鋼琴}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|她來自美國}}{{ex:I found it on the internet.|/aɪ ˈfaʊnd ɪt ɑːn ði ˈɪntərnet/|我是在網上找到的}}
<h3>不加冠詞的情況</h3>
<div class="tbl"><table><tr><th>情況</th><th>例子</th></tr><tr><td>大多數國家和城市</td><td class="k">Japan, Hong Kong</td></tr><tr><td>運動、語言、三餐</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>泛指一類事物</td><td class="k">Dogs are cute. Coffee is expensive.</td></tr></table></div>
{{ex:I live in Hong Kong.|/aɪ ˈlɪv ɪn ˌhɑːŋ ˈkɑːŋ/|我住在香港}}{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|我踢足球}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|狗很可愛}}{{ex:Coffee is expensive.|/ˈkɔːfi ɪz ɪkˈspensɪv/|咖啡很貴（泛指）}}
<h3>泛指和特指</h3>
<p>中文「狗很可愛」、「我喜歡音樂」，名詞前甚麼都不加。英文泛指時也一樣：可數名詞用眾數，不可數名詞直接用，<b>都不加 the</b>。</p>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|我喜歡狗（泛指所有的狗）}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|這個公園裏的狗很可愛（特指）}}
<div class="tip">泛指時不加 the：<b>I like the dogs.</b> 的意思是「我喜歡那些狗」。同樣，<b>The music is my life.</b> ✗ → <b>Music is my life.</b> ✓</div>`,
check:[["I play ___ soccer. 空格應填甚麼？",["a","the","an","（不填）"],3,"運動名稱前不加冠詞。"],["She's from ___ United States. 空格應填甚麼？",["the","a","an","（不填）"],0,"United States 前面要加 the。"],["「狗很可愛」（泛指）用英文怎樣說？",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"泛指時不加冠詞，用眾數。"]],
practice:[
["mc","I play ___ piano.","the","a","an","some","樂器前加 the。"],
["mc","「我住在韓國」=","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","大多數國名前不加冠詞。"],
["mc","「我踢足球」=","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","運動名稱前不加冠詞。"],
["mc","「貓很可愛」（泛指）=","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","泛指時不加冠詞，用眾數。"],
["mc","She's from ___ United States.","the","a","an","some","United States 前面要加 the。"],
["or","我彈鋼琴","I play the piano","a pianos","樂器前要加冠詞 the。"],
["or","狗很可愛（泛指）","Dogs are cute","The dog","泛指狗這種動物，不加冠詞，用眾數 dogs。"],
["or","我是在網上找到的","I found it on the internet","a","internet 是獨一無二的，要加冠詞 the。"],
["fi","I speak __.","我會說英文","English","the English|an English|a English","語言名稱前不加冠詞。"],
["fi","The sun rises in __ east.","太陽從東方升起","the","a|an|some","方位詞前加 the。"],
["fi","I love __.","我很喜歡音樂","music","the musics|a music|musics","泛指音樂，不加冠詞；music 不可數，也沒有 -s。"],
["ty","我來自美國","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — 冠詞 the","a","United States 前面要加冠詞 the。"],
["ty","我彈結他","I play the guitar|I play guitar","play · guitar — 冠詞 the","a","樂器前要加冠詞 the。"],
["ty","貓很可愛（泛指）","Cats are cute","cat — 不加冠詞，用眾數","The cat","泛指時不加冠詞，用眾數 cats。"]]},
{ id:"first-conditional", title:"如果……（真實條件）：If + 現在式，will", blurb:"「如果……就會……」。if 後面不用 will。", deck:"工作與電郵", body:`
<p>用來說有可能真的發生的事，即第一類條件句 (first conditional)，結構是 <b>If + 現在式，will + 動詞原形</b>。中文「如果明天下雨」裏動詞沒有變化；英文 if 這一半雖然說的是將來，也要用<b>現在式</b>：If it rains tomorrow，不說 If it will rain tomorrow。</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|如果下雨，我就留在家}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|你不快點就趕不上巴士了}}
<h3>次序可以對調</h3>
<p>if 放到後面時，中間不用逗號。</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|我有時間就幫你}}
<h3>和祈使句連用</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|如果遲到，就打電話給我}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|需要幫忙就告訴我}}
<h3>when：……的時候（肯定會發生）</h3>
<p>肯定會發生的事，用 when 代替 if。when 後面同樣不用 will。</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|我到家就打電話給你}}
<div class="tip">最常見的錯誤：<b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. 空格應填甚麼？",["will rain","rains","rained","raining"],1,"if 後面用現在式。"],["If you study, you ___ pass. 空格應填甚麼？",["pass will","passing","will pass","passed"],2,"結果部分用 will + 動詞原形。"],["下面哪一句是正確的？",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"if 部分用現在式，結果部分用 will。"]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","if 後面用現在式。"],
["mc","If you're late, ___ me.","call","will calling","calls","to call","祈使句以動詞原形開頭。"],
["mc","「我有時間就幫你」=","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","if 後面不用 will。"],
["mc","「你不快點就趕不上巴士了」=","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","if 部分用現在式的否定 don't。"],
["mc","「我到家就打電話給你」=","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","when 後面也用現在式。"],
["or","下雨的話我就留在家","If it rains I'll stay home","will the","if 後面用現在式；home 前面不加冠詞。"],
["or","你有時間就打電話給我","If you have time call me","will","if 後面不用 will。"],
["or","你會趕不上巴士的","You'll miss the bus","a buses","要坐的就是那班巴士，用冠詞 the。"],
["fi","If it __ tomorrow, we'll cancel.","如果明天下雨，我們就取消","rains","will rain|rained|raining","if 後面用現在式。"],
["fi","If you study, you __ pass.","你好好溫習就會合格","will|can|might","are|did|passing","結果部分用 will + 動詞原形。"],
["fi","__ you need help, call me.","需要幫忙就打電話給我","If|When","So|But|Because","「如果」用 if。"],
["ty","我有時間就幫你","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","if 後面不用 will。"],
["ty","下雨的話我就坐的士","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — 冠詞 a","the","哪一輛的士都可以，用冠詞 a。"],
["ty","快要趕不上巴士了","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — 冠詞 the","a","要坐的就是那班巴士，用冠詞 the。"]]},
{ id:"relative", title:"關係子句：用 who / that 修飾人和物", blurb:"中文的修飾語放在名詞前，英文的放在名詞後。", deck:"購物與付款", body:`
<p>中文說「<b>我買的</b>書」（廣東話：「我買嗰本書」），修飾語放在名詞前面。英文先說名詞，再在<b>後面</b>補充說明：the book <b>that I bought</b>。這就是關係子句 (relative clause)，who / that 是關係代名詞。</p>
<h3>人用 who</h3>
{{ex:I have a friend who lives in Canada.|/aɪ ˈhæv ə ˈfrend hu ˈlɪvz ɪn ˈkænədə/|我有個住在加拿大的朋友}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|住在隔壁的那個男人}}
<h3>物用 that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|我買的書}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|這就是我想要的手機}}
<h3>that 常常省略</h3>
<p>後面直接是「主語 + 動詞」時，that 可以省掉，口語裏大多會省。</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|我們看的那齣電影很好看}}
<h3>地點用 where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|我們見面的那間咖啡店}}
<h3>別漏掉 who，也別多加代名詞</h3>
<p>中文的修飾語沒有關係代名詞，所以容易寫成兩個動詞擠在一起：<b>I have a friend lives in Canada.</b> ✗ → <b>I have a friend who lives in Canada.</b> ✓ 「有很多人……」這種句子最容易錯：<b>There are many people have this problem.</b> ✗ → <b>There are many people who have this problem.</b> ✓（也可以直接說 Many people have this problem.）</p>
<p>關係子句裏不要再重複代名詞：<b>the man who I met him</b> ✗ → <b>the man (who) I met</b> ✓</p>
<div class="tip">記住次序：<b>名詞在前，說明在後。</b>「我買的書」 → the book (that) I bought。不能用 what：<b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Busan. 空格應填甚麼？",["which","who","what","he"],1,"修飾人用 who。"],["「我買的書」用英文怎樣說？",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"先說名詞，再用 that 補充說明。"],["下面哪一句是正確的？",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"修飾語放在名詞後面。"]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","修飾人用 who。"],
["mc","「我買的書」=","the book that I bought","the I bought book","the book what I bought","the bought I book","名詞在前，說明在後。"],
["mc","「住在隔壁的那個男人」=","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","修飾人用 who。"],
["mc","This is the phone ___ I want.","that","who","what","it","修飾物用 that。"],
["mc","「我們看的那齣電影」=","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","that 可以省略。"],
["or","這是我買的書","This is the book I bought","a what","就是我買的那本書，用冠詞 the。"],
["or","我有個會煮飯的朋友","I have a friend who cooks","the which","第一次提到的一位朋友，用冠詞 a。"],
["or","我們看的那齣電影很好看","The movie we saw was great","A movies","就是我們看的那齣電影，用冠詞 the。"],
["fi","the man __ lives here","住在這裏的那個男人","who|that","what|he|which","修飾人用 who。"],
["fi","the book __ I read","我讀過的那本書","that|which","who|what|it","修飾物用 that。"],
["fi","the cafe __ we met","我們見面的那間咖啡店","where","who|what|it","修飾地點用 where。"],
["ty","這是我買的書","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — 冠詞 the","a","就是我買的那本書，用冠詞 the。"],
["ty","我有個會說韓文的朋友","I have a friend who speaks Korean|I have a friend that speaks Korean","a friend · who · speaks Korean — 冠詞 a","the","第一次提到的一位朋友，用冠詞 a。"],
["ty","我們看的那齣電影很好看","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great","what","名詞在前，說明在後。"]]},
];
