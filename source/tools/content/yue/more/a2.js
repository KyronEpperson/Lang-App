/* yue-en stage A2: new lessons. English side shared with ko-en (parity.js); Chinese text converted from zh-en and adapted for
   Hong Kong Cantonese speakers (docs/profiles/yue.md), rewritten into written Cantonese (docs/briefs/yue-en-cantonese-rewrite.md). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"過去進行式：was / were + -ing", blurb:"講嗰陣做緊嘅事，用嚟交代故事背景。", deck:"情緒同反應", body:`
<p>講過去<b>某個時候做緊嘅事</b>。將現在進行式入面嘅 be 動詞換做過去式 (was / were) 就得。廣東話講「我嗰陣瞓緊覺」，靠「嗰陣」同「緊」嚟表達；英文就要靠動詞形式。</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|我嗰陣瞓緊覺}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|我哋嗰陣睇緊電視}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|嗰陣落緊雨}}
<h3>疑問句</h3>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|你嗰陣做緊乜嘢？}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|你 9 點嗰陣係咪做緊嘢？}}
<h3>同 when 一齊用：做緊一件事嘅時候，發生咗另一件事</h3>
<p>持續緊嘅動作用<b>過去進行式</b>，中途發生嘅短暫動作用<b>過去式</b>。</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|你打電話嚟嗰陣，我煮緊飯}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|我行路返屋企嗰陣，開始落雨}}
<p>廣東話一個「緊」字就夠，英文就要 was / were 加 -ing，兩樣都唔可以漏：<b>I cooking.</b> ✗ → <b>I was cooking.</b> ✓</p>
<div class="tip">「做緊」如果淨係用過去式，意思就唔同咗。<b>I cooked when you called.</b> 嘅意思係「你打電話嚟之後，我先開始煮飯」。</div>`,
check:[["「你 9 點嗰陣做緊乜嘢？」用英文點講？",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"主語 you 用 were，後面接 -ing 形式。"],["I was cooking ___ you called. 空格應該填咩？",["when","so","or","than"],0,"「……嗰陣」用 when。"],["They ___ watching TV. 空格應該填咩？",["was","did","were","are being"],2,"主語 they 用 were。"]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","主語 I 用 was。"],
["mc","「你打電話嚟嗰陣，我煮緊飯」=","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","持續嘅動作用過去進行式，中途發生嘅動作用過去式。"],
["mc","「你嗰陣做緊乜嘢？」=","What were you doing?","What did you doing?","What was you doing?","What were you do?","you 用 were，後面接 -ing 形式。"],
["mc","They ___ playing soccer.","were","was","did","are","主語 they 用 were。"],
["mc","「嗰陣落緊雨」=","It was raining.","It were raining.","It was rain.","It rained was.","it 用 was，後面接 -ing 形式。"],
["or","我嗰陣睇緊一本書","I was reading a book","read books","睇嘅係一本書，用冠詞 a 同單數 book。"],
["or","啲細路嗰陣瞓緊覺","The kids were sleeping","kid was","細路唔止一個，用眾數 kids 同 were。"],
["or","我哋嗰陣睇緊電視","We were watching TV","was","主語 we 用 were。"],
["fi","I was __ dinner.","我嗰陣煮緊晚飯","cooking|making","cook|cooked|cooks","was 後面接 -ing 形式。"],
["fi","What __ you doing?","你嗰陣做緊乜嘢？","were","was|did|does","主語 you 用 were。"],
["fi","I was sleeping __ you called.","你打電話嚟嗰陣，我瞓緊覺","when","so|than|or","「……嗰陣」用 when。"],
["ty","我嗰陣做緊嘢（用 work）","I was working","was · work — -ing 形式","were","主語 I 用 was，再加 -ing 形式。"],
["ty","我嗰陣睇緊戲（用 movie）","I was watching a movie","was · watching · movie — 冠詞 a","the","冇指明係邊一齣戲，用冠詞 a。"],
["ty","啲細路嗰陣玩緊","The kids were playing|The children were playing","kids · were · playing — 眾數","kid","細路唔止一個，用眾數 kids 同 were。"]]},
{ id:"will", title:"will：即場決定、承諾、預測", blurb:"即場決定用 will，事先計劃好就用 be going to。", deck:"閒談", body:`
<p><b>will + 動詞原形</b>。講嘢嗰陣幾乎一定縮寫成 <b>I'll、you'll、it'll</b>，否定係 <b>won't</b>。</p>
<p>留意廣東話嘅「會」同「識」：「聽日會落雨」係預測，用 will；「我識游水」係能力，要用 can：I can swim. 「會」淨係喺預測嘅時候先等於 will。</p>
<h3>即場決定</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|我要意粉}}{{ex:I'll get it.|/aɪl ˈget ɪt/|我嚟聽（電話）/ 我去開門}}
<h3>承諾同提議</h3>
{{ex:I'll help you.|/aɪl ˈhelp ju/|我嚟幫你}}{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|我遲啲打電話畀你}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|我唔會遲到}}
<h3>預測</h3>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|冇事嘅}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|我覺得會落雨}}
<h3>will 同 be going to</h3>
<div class="tbl"><table><tr><th></th><th>幾時用</th><th>例句</th></tr><tr><td class="k">will</td><td>即場決定、承諾</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>事先計劃好嘅事</td><td>I'm going to visit Macau next month.</td></tr></table></div>
<div class="tip">最常見嘅錯：<b>I will to go.</b>、<b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ will 後面淨係可以接動詞原形。</div>`,
check:[["電話響，「我嚟聽」點講？",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"即場決定嘅事用 will。"],["I ___ be late.（我唔會遲到）",["won't","willn't","don't will","not will"],0,"will 嘅否定係 won't。"],["邊一句講緊事先計劃好嘅事？",["I'll get the door.","I will to visit Macau.","I visit Macau will.","I'm going to visit Macau next month."],3,"事先計劃好嘅事用 be going to。"]],
practice:[
["mc","「我嚟幫你」=","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","will 後面接動詞原形。"],
["mc","喺餐廳即場決定：「我要意粉」=","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","即場決定嘅事用 will。"],
["mc","「我唔會遲到」=","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not 縮寫成 won't。"],
["mc","「你會唔會嚟？」=","Will you come?","Do you will come?","Will you coming?","Will come you?","Will + 主語 + 動詞原形。"],
["mc","邊一句講緊事先計劃好嘅事？","I'm going to visit Macau next month.","I'll get the door.","I visit Macau next month will.","I will to visit Macau.","事先計劃好嘅事用 be going to。"],
["or","我遲啲打電話畀你","I'll call you later","calling","will 後面接動詞原形。"],
["or","我要一杯咖啡","I'll have a coffee","the coffees","叫一杯，用冠詞 a。"],
["or","我去開門","I'll open the door","a doors","就係呢道門，用冠詞 the。"],
["fi","I __ call you tomorrow.","我聽日打電話畀你","will","am|going|do","承諾用 will。"],
["fi","I __ forget.","我唔會唔記得","won't|will not","don't|not|willn't","will 嘅否定係 won't。"],
["fi","__ you help me?","你可唔可以幫吓我？","Will|Can|Could|Would","Do|Are|Is","請人幫手可以講 Will you …?"],
["ty","我嚟幫你（用 will）","I'll help you|I'll help","I'll · help · you","helping","will 後面接動詞原形。"],
["ty","我要一份沙律（用 will）","I'll have a salad|I'll have the salad|I'll get a salad|I'll get the salad|I'll order a salad|I'll order the salad","I'll have · salad — 留意冠詞","salads","叫一份，加冠詞 a（指餐牌上面嗰個菜都可以用 the）。"],
["ty","我去閂門（用 will）","I'll close the door|I'll shut the door","I'll · close · door — 冠詞 the","a","就係呢道門，用冠詞 the。"]]},
{ id:"perfect", title:"現在完成式：做過某件事", blurb:"have + 過去分詞，表達經歷。講出具體時間就用過去式。", deck:"旅行（機場同酒店）", body:`
<p><b>have + 過去分詞</b>係現在完成式 (present perfect)，表示「到而家為止，做過某件事」，好似廣東話嘅「過」：「我去過日本」= I've been to Japan. 呢個用法<b>唔講具體幾時</b>。</p>
{{ex:I've been to Japan.|/aɪv bɪn tə dʒəˈpæn/|我去過日本}}{{ex:She has visited Hong Kong twice.|/ʃi həz ˈvɪzɪtɪd ˌhɑːŋ ˈkɑːŋ ˈtwaɪs/|佢嚟過香港兩次}}
<h3>ever 同 never</h3>
{{ex:Have you ever eaten dim sum?|/həv ju ˈevər ˈiːtn ˈdɪm ˈsʌm/|你食過點心未？}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|我從來冇睇過}}
<p>回答用 <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>常用嘅過去分詞</h3>
<div class="tbl"><table><tr><th>原形</th><th>過去式</th><th>過去分詞</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>been to 同 gone to</h3>
<p><b>been to</b> 係「去過（已經返嚟）」，<b>gone to</b> 係「去咗（人仲喺嗰邊）」。</p>
{{ex:She's gone to London.|/ʃiz ˈgɔːn tə ˈlʌndən/|佢去咗倫敦（而家唔喺度）}}
<h3>講出具體時間就用過去式</h3>
<p>有 last year、yesterday、in 2020 呢啲已經過咗嘅時間，就唔可以用現在完成式。廣東話嘅「咗」亦都唔等於現在完成式：「我舊年去咗日本」有具體時間，要用過去式。</p>
{{ex:I went to Japan last year.|/aɪ ˈwent tə dʒəˈpæn ˈlæst ˈjɪr/|我舊年去咗日本}}
<div class="tip">最常見嘅錯：<b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["「你有冇去過日本？」用英文點講？",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"問經歷用 Have you ever + 過去分詞。"],["I ___ never seen that movie. 空格應該填咩？",["am","did","have","was"],2,"have + never + 過去分詞。"],["以下邊一句啱？",["I went to Tokyo last year.","I've been to Tokyo last year.","I have go to Tokyo last year.","I've went to Tokyo."],0,"有 last year 呢類時間，用過去式。"]],
practice:[
["mc","「我去過日本」=","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have + 過去分詞 been。"],
["mc","see 嘅過去分詞係？","seen","saw","seed","seeing","see 嘅三個形式係 see – saw – seen。"],
["mc","「你食過點心未？」=","Have you ever eaten dim sum?","Did you ever eaten dim sum?","Have you ever ate dim sum?","Do you have eaten dim sum?","問經歷用 Have you ever + 過去分詞。"],
["mc","「我從來冇睇過」=","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","have + never + 過去分詞。"],
["mc","有「舊年」嘅時候，邊一句啱？","I went to Tokyo last year.","I've been to Tokyo last year.","I have go to Tokyo last year.","I've went to Tokyo last year.","有具體時間，用過去式。"],
["or","嗰齣戲我睇過","I've seen the movie","a saw","指雙方都知道嗰齣戲，用冠詞 the。"],
["or","我去過日本兩次","I've been to Japan twice","went","have 後面接過去分詞 been。"],
["or","我從來冇見過蛇","I've never seen a snake","the snakes","唔係指邊一條蛇，用冠詞 a。"],
["fi","Have you ever __ to Taipei?","你有冇去過台北？","been","be|went|go","have 後面接過去分詞 been。"],
["fi","I've __ eaten that.","嗰樣嘢我從來冇食過","never","ever|no|not never","「從來冇」用 never。"],
["fi","She __ visited Japan twice.","佢去過日本兩次","has","have|is|did","主語 she 用 has。"],
["ty","你有冇去過日本？（用 been）","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","問經歷用 Have you ever been to …?"],
["ty","本書我睇過（用 have + read）","I've read the book|I've read that book","I've · read · book — 冠詞 the","a","指雙方都知道嗰本書，用冠詞 the。"],
["ty","我從來冇養過貓（用 have + had）","I've never had a cat","never · had · cat — 冠詞 a","the","唔係指邊一隻貓，用冠詞 a。"]]},
{ id:"modals", title:"have to、must、should、might：義務同建議", blurb:"一定要做、最好做、可能會做。", deck:"醫院同緊急情況", body:`
<p>呢四個字分別表達義務、建議同可能性，後面都接<b>動詞原形</b>。大概對應廣東話嘅「要 / 一定要」、「應該 / 最好」、「可能」。</p>
<h3>have to：要、一定要</h3>
<p>日常最常用。主語係 he / she 嘅時候用 <b>has to</b>（第三身單數）。</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|我聽日要返工}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|佢而家要走喇}}
<h3>don't have to 同 must not 唔一樣</h3>
<div class="tbl"><table><tr><th>講法</th><th>意思</th></tr><tr><td class="k">You don't have to come.</td><td>你唔使嚟（冇需要）</td></tr><tr><td class="k">You must not smoke here.</td><td>呢度唔准食煙（唔允許）</td></tr></table></div>
<h3>should：應該、最好</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|你應該去睇醫生}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|你唔使擔心}}
<h3>might：可能、或者</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|可能會落雨}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|我可能會遲到}}
<p>「可能會落雨」入面嘅「會」唔使再譯做 will，講 It might rain. 就夠。另外，must 多數表示講嘢嘅人自己覺得一定要，have to 多數表示外在規定或者客觀需要；廣東話嘅「會 / 識 / 可以」都唔可以一對一咁譯，要睇意思揀 can、be able to 或者 may。</p>
<div class="tip">最常見嘅錯：<b>You should to go.</b>、<b>It might rains.</b> ✗ → <b>You should go.</b>、<b>It might rain.</b> ✓</div>`,
check:[["「你唔使嚟」用英文點講？",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"「冇需要」用 don't have to。"],["畀建議嘅時候：You ___ see a doctor.",["might","have","should","must to"],2,"建議用 should + 動詞原形。"],["She ___ to work today. 空格應該填咩？",["have","must","should","has"],3,"主語 she 用 has to。"]],
practice:[
["mc","「我聽日要返工」=","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + 動詞原形。"],
["mc","「你唔使嚟」=","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","「冇需要」用 don't have to。"],
["mc","「你應該去睇醫生」=","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + 動詞原形；醫生係一位，用冠詞 a。"],
["mc","「可能會落雨」=","It might rain.","It might rains.","It might to rain.","It mights rain.","might + 動詞原形。"],
["mc","「呢度唔准食煙」=","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","禁止用 must not。"],
["or","你應該去睇醫生","You should see a doctor","the doctors","唔係指邊一位醫生，用冠詞 a。"],
["or","我而家要走喇","I have to go now","going","have to 後面接動詞原形。"],
["or","你要買一張飛","You have to buy a ticket","the tickets","一張飛，用冠詞 a 同單數 ticket。"],
["fi","She __ to study tonight.","佢今晚要溫書","has","have|must|should","主語 she 用 has to（第三身單數）。"],
["fi","You __ have to pay.","你唔使畀錢","don't|do not","must not|not|aren't","「冇需要」用 don't have to。"],
["fi","It __ rain tomorrow.","聽日可能會落雨","might|may|could","must to|has to|should to","可能性用 might。"],
["ty","我要工作（用 have to）","I have to work|I must work|I need to work","have to · work","should","義務用 have to。"],
["ty","你應該去睇醫生（用 see）","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — 冠詞 a","the","唔係指邊一位醫生，用冠詞 a。"],
["ty","你要買一張飛（用 have to）","You have to buy a ticket","have to · buy · ticket — 冠詞 a","the","一張飛，用冠詞 a。"]]},
{ id:"to-ing", title:"動詞後面接 to 定 -ing：want to、enjoy -ing", blurb:"want 後面接 to，enjoy 後面接 -ing，由前面嘅動詞決定。", deck:"閒談", body:`
<p>廣東話講「我想去」、「我鍾意煮飯」，兩個動詞可以直接連埋一齊，英文就唔得：<b>I want go.</b> ✗ 第二個動詞一係用 <b>to + 動詞原形</b>（不定詞），一係用 <b>-ing</b>（動名詞），由前面嘅動詞決定。常用嘅一組一組咁記。</p>
<div class="tbl"><table><tr><th>後面接 to</th><th>後面接 -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop, suggest</td></tr></table></div>
<h3>to + 動詞：打算做嘅事</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|我想返屋企}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|我要溫書}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|我想點菜}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|我決定學英文}}
<h3>-ing：enjoy、finish、mind 呢類動詞後面</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|我鍾意煮飯}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|我做完嘢喇}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|我唔介意等}}
<h3>兩個常見嘅錯：suggest 同 look forward to</h3>
<p><b>suggest</b> 後面唔可以接「人 + to」：<b>He suggested me to go.</b> ✗ → <b>He suggested going.</b> ✓ <b>look forward to</b> 嘅 to 係介詞，後面接 -ing，唔接動詞原形：<b>I look forward to hear from you.</b> ✗</p>
{{ex:I look forward to hearing from you.|/aɪ ˈlʊk ˈfɔːrwərd tə ˈhɪrɪŋ frəm ju/|期待你嘅回覆}}
<h3>兩樣都得嘅動詞</h3>
<p>like、love、start 後面接 to 或者 -ing 都得。</p>
<div class="tip">最常見嘅錯：<b>I want go.</b>、<b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>、<b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. 空格應該填咩？",["go","going","to go","to going"],2,"want 後面接 to + 動詞原形。"],["I enjoy ___ movies. 空格應該填咩？",["watching","to watch","watch","to watching"],0,"enjoy 後面接 -ing 形式。"],["「我想點菜」用英文點講？",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"would like 後面接 to + 動詞原形。"]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","need 後面接 to + 動詞原形。"],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","enjoy 後面接 -ing 形式。"],
["mc","「我想點菜」=","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","would like 後面接 to + 動詞原形。"],
["mc","「我做完嘢喇」=","I finished working.","I finished to work.","I finished work to.","I finish worked.","finish 後面接 -ing 形式。"],
["mc","「我唔介意等」=","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","mind 後面接 -ing 形式。"],
["or","我想買一架車","I want to buy a car","the buying","want 後面接 to；一架車，用冠詞 a。"],
["or","我鍾意睇戲","I enjoy watching movies","movie watch","enjoy 後面接 -ing；泛指電影，用眾數 movies。"],
["or","我需要休息吓","I need to rest","resting","need 後面接 to + 動詞原形。"],
["fi","I want __ a coffee.","我想飲杯咖啡","to have|to drink|to get","have|having|drinking","want 後面接 to + 動詞原形。"],
["fi","She enjoys __.","佢鍾意游水","swimming","to swim|swim|swims","enjoy 後面接 -ing 形式。"],
["fi","I decided __ English.","我決定學英文","to study|to learn","study|studying|studied","decide 後面接 to + 動詞原形。"],
["ty","我想返屋企（用 want）","I want to go home|I want to go back home","want to · go · home — 唔加冠詞","the","want 後面接 to；home 前面唔加冠詞。"],
["ty","我鍾意睇書（用 enjoy）","I enjoy reading books|I enjoy reading","enjoy · read · book — 眾數","book","enjoy 後面接 -ing；泛指書，用眾數 books。"],
["ty","我想點菜（用 order）","I'd like to order|I want to order","I'd like · to · order","ordering","would like 後面接 to + 動詞原形。"]]},
{ id:"articles-2", title:"冠詞進階：獨一無二嘅 the 同唔加冠詞嘅泛指", blurb:"樂器前面加 the，運動前面唔加。仲有國家名同「泛指一類事物」。", deck:"旅行（機場同酒店）", body:`
<p>冠詞第三課。中文冇冠詞，所以冠詞有兩種錯法：應該加嘅漏咗，唔應該加嘅又「以防萬一」加個 the。呢課將有固定規則嘅情況整理吓：邊啲要加 the，邊啲一定唔加。</p>
<h3>要加 the 嘅情況</h3>
<div class="tbl"><table><tr><th>情況</th><th>例子</th></tr><tr><td>世界上獨一無二嘅事物</td><td class="k">the sun, the internet</td></tr><tr><td>樂器</td><td class="k">play the piano</td></tr><tr><td>江河、海洋</td><td class="k">the Pearl River, the Pacific</td></tr><tr><td>眾數形式或者聯合體嘅國家名</td><td class="k">the United States, the Philippines</td></tr><tr><td>最高級</td><td class="k">the best, the biggest</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|我彈鋼琴}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|佢係美國嚟嘅}}{{ex:I found it on the internet.|/aɪ ˈfaʊnd ɪt ɑːn ði ˈɪntərnet/|我係喺網上搵到嘅}}
<h3>唔加冠詞嘅情況</h3>
<div class="tbl"><table><tr><th>情況</th><th>例子</th></tr><tr><td>大部分國家同城市</td><td class="k">Japan, Hong Kong</td></tr><tr><td>運動、語言、三餐</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>泛指一類事物</td><td class="k">Dogs are cute. Coffee is expensive.</td></tr></table></div>
{{ex:I live in Hong Kong.|/aɪ ˈlɪv ɪn ˌhɑːŋ ˈkɑːŋ/|我住喺香港}}{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|我踢足球}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|狗好得意}}{{ex:Coffee is expensive.|/ˈkɔːfi ɪz ɪkˈspensɪv/|咖啡好貴（泛指）}}
<h3>泛指同特指</h3>
<p>廣東話講「狗好得意」、「我鍾意音樂」，名詞前面乜都唔加。英文泛指嘅時候都一樣：可數名詞用眾數，不可數名詞直接用，<b>都唔加 the</b>。</p>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|我鍾意狗（泛指所有狗）}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|呢個公園啲狗好得意（特指）}}
<div class="tip">泛指嘅時候唔加 the：<b>I like the dogs.</b> 嘅意思係「我鍾意嗰啲狗」。同樣，<b>The music is my life.</b> ✗ → <b>Music is my life.</b> ✓</div>`,
check:[["I play ___ soccer. 空格應該填咩？",["a","the","an","（唔使填）"],3,"運動名稱前面唔加冠詞。"],["She's from ___ United States. 空格應該填咩？",["the","a","an","（唔使填）"],0,"United States 前面要加 the。"],["「狗好得意」（泛指）英文點講？",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"泛指嘅時候唔加冠詞，用眾數。"]],
practice:[
["mc","I play ___ piano.","the","a","an","some","樂器前面加 the。"],
["mc","「我住喺加拿大」=","I live in Canada.","I live in the Canada.","I live in a Canada.","I live Canada in.","大部分國家名前面唔加冠詞。"],
["mc","「我踢足球」=","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","運動名稱前面唔加冠詞。"],
["mc","「貓好得意」（泛指）=","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","泛指嘅時候唔加冠詞，用眾數。"],
["mc","She's from ___ United States.","the","a","an","some","United States 前面要加 the。"],
["or","我彈鋼琴","I play the piano","a pianos","樂器前面要加冠詞 the。"],
["or","狗好得意（泛指）","Dogs are cute","The dog","泛指狗呢種動物，唔加冠詞，用眾數 dogs。"],
["or","我係喺網上搵到嘅","I found it on the internet","a","internet 係獨一無二嘅，要加冠詞 the。"],
["fi","I speak __.","我識講英文","English","the English|an English|a English","語言名稱前面唔加冠詞。"],
["fi","The sun rises in __ east.","太陽喺東邊升起","the","a|an|some","方位詞前面加 the。"],
["fi","I love __.","我好鍾意音樂","music","the musics|a music|musics","泛指音樂，唔加冠詞；music 不可數，亦冇 -s。"],
["ty","我係美國嚟嘅（用 I'm from）","I'm from the United States|I'm from the US|I'm from the USA|I'm from America","I'm from · United States — 冠詞 the","a","United States 前面要加冠詞 the。"],
["ty","我彈結他","I play the guitar|I play guitar","play · guitar — 冠詞 the","a","樂器前面要加冠詞 the。"],
["ty","貓好得意（泛指，用 cute）","Cats are cute|Cats are very cute|Cats are really cute|Cats are so cute","cat — 唔加冠詞，用眾數","The cat","泛指嘅時候唔加冠詞，用眾數 cats。"]]},
{ id:"first-conditional", title:"如果……（真實條件）：If + 現在式，will", blurb:"「如果……就會……」。if 後面唔用 will。", deck:"工作同電郵", body:`
<p>用嚟講有可能真係發生嘅事，即係第一類條件句 (first conditional)，結構係 <b>If + 現在式，will + 動詞原形</b>。廣東話「如果聽日落雨」入面嘅動詞冇變化；英文 if 呢一半雖然講緊將來，都要用<b>現在式</b>：If it rains tomorrow，唔講 If it will rain tomorrow。</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|如果落雨，我就留喺屋企}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|你唔快啲就趕唔切巴士喇}}
<h3>次序可以調轉</h3>
<p>if 擺喺後面嘅時候，中間唔使加逗號。</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|我有時間就幫你}}
<h3>同祈使句一齊用</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|如果遲到，就打電話畀我}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|需要幫手就話我知}}
<h3>when：……嗰陣（一定會發生）</h3>
<p>一定會發生嘅事，用 when 代替 if。when 後面一樣唔用 will。</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|我返到屋企就打電話畀你}}
<div class="tip">最常見嘅錯：<b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. 空格應該填咩？",["will rain","rains","rained","raining"],1,"if 後面用現在式。"],["If you study, you ___ pass. 空格應該填咩？",["pass will","passing","will pass","passed"],2,"結果部分用 will + 動詞原形。"],["以下邊一句啱？",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"if 部分用現在式，結果部分用 will。"]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","if 後面用現在式。"],
["mc","If you're late, ___ me.","call","will calling","calls","to call","祈使句用動詞原形開頭。"],
["mc","「我有時間就幫你」=","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","if 後面唔用 will。"],
["mc","「你唔快啲就趕唔切巴士喇」=","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","if 部分用現在式嘅否定 don't。"],
["mc","「我返到屋企就打電話畀你」=","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","when 後面都係用現在式。"],
["or","如果落雨，我就留喺屋企","If it rains I'll stay home","will the","if 後面用現在式；home 前面唔加冠詞。"],
["or","你有時間就打電話畀我","If you have time call me","will","if 後面唔用 will。"],
["or","你會趕唔切巴士","You'll miss the bus","a buses","要搭嘅就係嗰班巴士，用冠詞 the。"],
["fi","If it __ tomorrow, we'll cancel.","如果聽日落雨，我哋就取消","rains","will rain|rained|raining","if 後面用現在式。"],
["fi","If you study, you __ pass.","你好好溫書就會合格","will|can|might","are|did|passing","結果部分用 will + 動詞原形。"],
["fi","__ you need help, call me.","需要幫手就打電話畀我","If|When","So|But|Because","「如果」用 if。"],
["ty","我有時間就幫你（用 will）","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","if 後面唔用 will。"],
["ty","落雨嘅話我就搭的士（用 will）","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — 冠詞 a","the","邊架的士都得，用冠詞 a。"],
["ty","你會趕唔切巴士（用 will + miss）","You'll miss the bus","miss · bus — 冠詞 the","a","要搭嘅就係嗰班巴士，用冠詞 the。"]]},
{ id:"relative", title:"關係子句：用 who / that 修飾人同物", blurb:"廣東話嘅修飾語擺喺名詞前面，英文嘅擺喺名詞後面。", deck:"購物同付款", body:`
<p>廣東話講「<b>我買嗰本</b>書」，修飾語擺喺名詞前面。英文就先講名詞，再喺<b>後面</b>補充說明：the book <b>that I bought</b>。呢個就係關係子句 (relative clause)，who / that 係關係代名詞。</p>
<h3>人用 who</h3>
{{ex:I have a friend who lives in Canada.|/aɪ ˈhæv ə ˈfrend hu ˈlɪvz ɪn ˈkænədə/|我有個住喺加拿大嘅朋友}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|住喺隔籬嗰個男人}}
<h3>物用 that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|我買嘅書}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|呢部就係我想要嘅手機}}
<h3>that 經常省略</h3>
<p>後面直接係「主語 + 動詞」嘅時候，that 可以省略，講嘢嗰陣大多數都會省。</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|我哋睇嗰齣戲好好睇}}
<h3>地點用 where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|我哋見面嗰間咖啡店}}
<h3>唔好漏咗 who，亦唔好加多個代名詞</h3>
<p>廣東話嘅修飾語冇關係代名詞，所以好容易寫成兩個動詞擠埋一齊：<b>I have a friend lives in Canada.</b> ✗ → <b>I have a friend who lives in Canada.</b> ✓ 「有好多人……」呢類句子最容易錯：<b>There are many people have this problem.</b> ✗ → <b>There are many people who have this problem.</b> ✓（亦可以直接講 Many people have this problem.）</p>
<p>關係子句入面唔好再重複代名詞：<b>the man who I met him</b> ✗ → <b>the man (who) I met</b> ✓</p>
<div class="tip">記住次序：<b>名詞喺前，說明喺後。</b>「我買嘅書」 → the book (that) I bought。唔可以用 what：<b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Tokyo. 空格應該填咩？",["which","who","what","he"],1,"修飾人用 who。"],["「我買嘅書」用英文點講？",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"先講名詞，再用 that 補充說明。"],["以下邊一句啱？",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"修飾語擺喺名詞後面。"]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","修飾人用 who。"],
["mc","「我買嘅書」=","the book that I bought","the I bought book","the book what I bought","the bought I book","名詞喺前，說明喺後。"],
["mc","「住喺隔籬嗰個男人」=","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","修飾人用 who。"],
["mc","This is the phone ___ I want.","that","who","what","it","修飾物用 that。"],
["mc","「我哋睇嗰齣戲」=","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","that 可以省略。"],
["or","呢本係我買嘅書","This is the book I bought","a what","就係我買嗰本書，用冠詞 the。"],
["or","我有個識煮飯嘅朋友","I have a friend who cooks","the which","第一次提到嘅一位朋友，用冠詞 a。"],
["or","我哋睇嗰齣戲好好睇","The movie we saw was great","A movies","就係我哋睇嗰齣戲，用冠詞 the。"],
["fi","the man __ lives here","住喺呢度嗰個男人","who|that","what|he|which","修飾人用 who。"],
["fi","the book __ I read","我睇過嗰本書","that|which","who|what|it","修飾物用 that。"],
["fi","the cafe __ we met","我哋見面嗰間咖啡店","where","who|what|it","修飾地點用 where。"],
["ty","呢本係我買嘅書（用 that）","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — 冠詞 the","a","就係我買嗰本書，用冠詞 the。"],
["ty","我有個識講日文嘅朋友（用 who speaks）","I have a friend who speaks Japanese|I have a friend that speaks Japanese","a friend · who · speaks Japanese — 冠詞 a","the","第一次提到嘅一位朋友，用冠詞 a。"],
["ty","我哋睇嗰齣戲好好睇（用 movie、saw、great）","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good|The movie which we saw was great|The movie which we saw was good","the movie · we saw · was great","what","名詞喺前，說明喺後。"]]},
];
