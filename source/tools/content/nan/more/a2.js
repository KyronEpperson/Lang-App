/* nan-en stage A2: new lessons. English side shared with ko-en (parity.js); scaffolded from yue-en and rewritten into written
   Taiwanese (Taigi, MOE recommended characters) for Taiwanese speakers (docs/profiles/nan.md, docs/briefs/nan-digest.md). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"過去進行式：was / were + -ing", blurb:"講過去某一个時陣當咧做的代誌，用來交代故事的背景。", deck:"心情佮反應", body:`
<p>講過去<b>某一个時間當咧做的代誌</b>。共現在進行式內底的 be 動詞換做過去式 (was / were) 就好。台語講「我彼陣咧睏」，靠「彼陣」佮「咧」來表示；英語愛靠動詞的形式。</p>
{{ex:I was sleeping.|/aɪ wəz ˈslipɪŋ/|我彼陣咧睏}}{{ex:We were watching TV.|/wɪ wɚ ˈwɑtʃɪŋ ˌti ˈvi/|阮彼陣咧看電視}}{{ex:It was raining.|/ɪt wəz ˈrenɪŋ/|彼陣咧落雨}}
<h3>疑問句</h3>
{{ex:What were you doing?|/ˈwʌt wɚ jʊ ˈduɪŋ/|你彼陣咧創啥物？}}{{ex:Were you working at nine?|/wɚ jʊ ˈwɝkɪŋ ət ˈnaɪn/|9 點的時，你敢咧做工課？}}
<h3>佮 when 做伙用：一件代誌當咧做的時，發生另外一件代誌</h3>
<p>繼續咧進行的動作用<b>過去進行式</b>，中途發生的短動作用<b>過去式</b>。</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wɛn jʊ ˈkɔld/|你敲電話來的時，我當咧煮飯}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔkɪŋ ˈhom wɛn ɪt ˈstɑrtɪd tə ˈren/|我行路轉去厝的時，開始落雨}}
<p>台語一个「咧」字就有夠，英語愛 was / were 閣加 -ing，兩項攏愛有：<b>I cooking.</b> ✗ → <b>I was cooking.</b> ✓</p>
<div class="tip">「當咧做」若干焦用過去式，意思就無仝矣。<b>I cooked when you called.</b> 的意思是「你敲電話來了後，我才開始煮飯」。</div>`,
check:[["「9 點的時你咧創啥物？」用英語按怎講？",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"主詞 you 用 were，後壁接 -ing 形式。"],["I was cooking ___ you called. 空格愛填啥？",["when","so","or","than"],0,"「……的時」用 when。"],["They ___ watching TV. 空格愛填啥？",["was","did","were","are being"],2,"主詞 they 用 were。"]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","主詞 I 用 was。"],
["mc","「你敲電話來的時，我當咧煮飯」=","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","繼續的動作用過去進行式，中途發生的動作用過去式。"],
["mc","「你彼陣咧創啥物？」=","What were you doing?","What did you doing?","What was you doing?","What were you do?","you 用 were，後壁接 -ing 形式。"],
["mc","They ___ playing soccer.","were","was","did","are","主詞 they 用 were。"],
["mc","「彼陣咧落雨」=","It was raining.","It were raining.","It was rain.","It rained was.","it 用 was，後壁接 -ing 形式。"],
["or","我彼陣咧看一本冊","I was reading a book","read books","看的是一本冊，用冠詞 a 佮單數 book。"],
["or","遐的囡仔彼陣咧睏","The kids were sleeping","kid was","囡仔毋是干焦一个，用複數 kids 佮 were。"],
["or","阮彼陣咧看電視","We were watching TV","was","主詞 we 用 were。"],
["fi","I was __ dinner.","我彼陣咧煮暗頓","cooking|making","cook|cooked|cooks","was 後壁接 -ing 形式。"],
["fi","What __ you doing?","你彼陣咧創啥物？","were","was|did|does","主詞 you 用 were。"],
["fi","I was sleeping __ you called.","你敲電話來的時，我咧睏","when","so|than|or","「……的時」用 when。"],
["ty","我彼陣咧做工課（用 work）","I was working","was · work — -ing 形式","were","主詞 I 用 was，閣加 -ing 形式。"],
["ty","我彼陣咧看電影（用 movie）","I was watching a movie","was · watching · movie — 冠詞 a","the","無講明是佗一齣電影，用冠詞 a。"],
["ty","遐的囡仔彼陣咧耍","The kids were playing|The children were playing","kids · were · playing — 複數","kid","囡仔毋是干焦一个，用複數 kids 佮 were。"]]},
{ id:"will", title:"will：臨時決定、答應、預測", blurb:"臨時決定用 will，進前就拍算好的用 be going to。", deck:"開講", body:`
<p><b>will + 原形動詞</b>。講話的時，大部分攏縮寫做 <b>I'll、you'll、it'll</b>，否定是 <b>won't</b>。</p>
<p>注意台語的「會」：「明仔載會落雨」是預測，用 will；「我會泅水」是能力，愛用 can：I can swim. 「會」干焦佇預測的時才等於 will。「欲」若是已經拍算好的代誌，英語用 be going to。</p>
<h3>臨時決定</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑstə/|我點義大利麵}}{{ex:I'll get it.|/aɪl ˈgɛt ɪt/|我來接（電話） / 我來開門}}
<h3>答應佮提議</h3>
{{ex:I'll help you.|/aɪl ˈhɛlp jʊ/|我來共你鬥相共}}{{ex:I'll call you later.|/aɪl ˈkɔl jʊ ˈletɚ/|我等一下才敲電話予你}}{{ex:I won't be late.|/aɪ ˈwont bɪ ˈlet/|我袂遲到}}
<h3>預測</h3>
{{ex:It'll be fine.|/ɪtḷ bɪ ˈfaɪn/|一定無問題}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈren/|我想講會落雨}}
<h3>will 佮 be going to</h3>
<div class="tbl"><table><tr><th></th><th>當時用</th><th>例句</th></tr><tr><td class="k">will</td><td>臨時決定、答應</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>進前就拍算好的代誌</td><td>I'm going to visit Macau next month.</td></tr></table></div>
<div class="tip">上常見的錯：<b>I will to go.</b>、<b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ will 後壁干焦會使接原形動詞。</div>`,
check:[["電話咧響，「我來接」按怎講？",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"臨時決定的代誌用 will。"],["I ___ be late.（我袂遲到）",["won't","willn't","don't will","not will"],0,"will 的否定是 won't。"],["佗一句咧講進前就拍算好的代誌？",["I'll get the door.","I will to visit Macau.","I visit Macau will.","I'm going to visit Macau next month."],3,"進前就拍算好的代誌用 be going to。"]],
practice:[
["mc","「我來共你鬥相共」=","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","will 後壁接原形動詞。"],
["mc","佇餐廳臨時決定：「我點義大利麵」=","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","臨時決定的代誌用 will。"],
["mc","「我袂遲到」=","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not 縮寫做 won't。"],
["mc","「你敢會來？」=","Will you come?","Do you will come?","Will you coming?","Will come you?","Will + 主詞 + 原形動詞。"],
["mc","佗一句咧講進前就拍算好的代誌？","I'm going to visit Macau next month.","I'll get the door.","I visit Macau next month will.","I will to visit Macau.","進前就拍算好的代誌用 be going to。"],
["or","我等一下才敲電話予你","I'll call you later","calling","will 後壁接原形動詞。"],
["or","我點一杯咖啡","I'll have a coffee","the coffees","點一杯，用冠詞 a。"],
["or","我來開門","I'll open the door","a doors","就是這扇門，用冠詞 the。"],
["fi","I __ call you tomorrow.","我明仔載敲電話予你","will","am|going|do","答應人用 will。"],
["fi","I __ forget.","我毋會袂記得","won't|will not","don't|not|willn't","will 的否定是 won't。"],
["fi","__ you help me?","你會當共我鬥相共無？","Will|Can|Could|Would","Do|Are|Is","請人鬥相共會使講 Will you …?"],
["ty","我來共你鬥相共（用 will）","I'll help you|I'll help","I'll · help · you","helping","will 後壁接原形動詞。"],
["ty","我欲點一份沙拉（用 will）","I'll have a salad|I'll have the salad|I'll get a salad|I'll get the salad|I'll order a salad|I'll order the salad","I'll have · salad — 注意冠詞","salads","點一份，加冠詞 a（指菜單頂面彼項菜嘛會使用 the）。"],
["ty","我來關門（用 will）","I'll close the door|I'll shut the door","I'll · close · door — 冠詞 the","a","就是這扇門，用冠詞 the。"]]},
{ id:"perfect", title:"現在完成式：捌做過某一件代誌", blurb:"have + 過去分詞，表示經驗。若講出確定的時間，就用過去式。", deck:"旅行（機場佮飯店）", body:`
<p><b>have + 過去分詞</b>是現在完成式 (present perfect)，表示「到這馬為止，捌做過某一件代誌」，親像台語的「捌……過」：「我捌去過日本」= I've been to Japan. 這个用法<b>無講確定是當時</b>。</p>
{{ex:I've been to Japan.|/aɪv bɪn tə dʒəˈpæn/|我捌去過日本}}{{ex:She has visited Taiwan twice.|/ʃɪ həz ˈvɪzɪtɪd ˌtaɪˈwɑn ˈtwaɪs/|伊來過台灣兩擺}}
<h3>ever 佮 never</h3>
{{ex:Have you ever eaten dim sum?|/həv jʊ ˈɛvɚ ˈitṇ ˈdɪm ˈsʌm/|你敢捌食過港式點心？}}{{ex:I've never seen it.|/aɪv ˈnɛvɚ ˈsin ɪt/|我毋捌看過}}
<p>回答用 <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>常用的過去分詞</h3>
<div class="tbl"><table><tr><th>原形</th><th>過去式</th><th>過去分詞</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>been to 佮 gone to</h3>
<p><b>been to</b> 是「去過（已經轉來矣）」，<b>gone to</b> 是「去矣（人猶佇遐）」。</p>
{{ex:She's gone to London.|/ʃɪz ˈgɔn tə ˈlʌndən/|伊去倫敦矣（這馬無佇遮）}}
<h3>講出確定的時間就用過去式</h3>
<p>有 last year、yesterday、in 2020 這款已經過去的時間，就袂使用現在完成式。台語的「有 + 動詞」嘛毋是現在完成式：「我舊年有去日本」有確定的時間，愛用過去式。</p>
{{ex:I went to Japan last year.|/aɪ ˈwɛnt tə dʒəˈpæn ˈlæst ˈjɪr/|我舊年有去日本}}
<div class="tip">上常見的錯：<b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["「你敢捌去過日本？」用英語按怎講？",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"問經驗用 Have you ever + 過去分詞。"],["I ___ never seen that movie. 空格愛填啥？",["am","did","have","was"],2,"have + never + 過去分詞。"],["下面佗一句著？",["I went to Tokyo last year.","I've been to Tokyo last year.","I have go to Tokyo last year.","I've went to Tokyo."],0,"有 last year 這款時間，用過去式。"]],
practice:[
["mc","「我捌去過日本」=","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have + 過去分詞 been。"],
["mc","see 的過去分詞是？","seen","saw","seed","seeing","see 的三个形式是 see – saw – seen。"],
["mc","「你敢捌食過港式點心？」=","Have you ever eaten dim sum?","Did you ever eaten dim sum?","Have you ever ate dim sum?","Do you have eaten dim sum?","問經驗用 Have you ever + 過去分詞。"],
["mc","「我毋捌看過」=","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","have + never + 過去分詞。"],
["mc","有「舊年」的時，佗一句著？","I went to Tokyo last year.","I've been to Tokyo last year.","I have go to Tokyo last year.","I've went to Tokyo last year.","有確定的時間，用過去式。"],
["or","彼齣電影我看過","I've seen the movie","a saw","指雙方攏知影的彼齣電影，用冠詞 the。"],
["or","我去過日本兩擺","I've been to Japan twice","went","have 後壁接過去分詞 been。"],
["or","我毋捌看過蛇","I've never seen a snake","the snakes","毋是指佗一尾蛇，用冠詞 a。"],
["fi","Have you ever __ to Taipei?","你敢捌去過台北？","been","be|went|go","have 後壁接過去分詞 been。"],
["fi","I've __ eaten that.","彼項物件我毋捌食過","never","ever|no|not never","「毋捌」用 never。"],
["fi","She __ visited Japan twice.","伊去過日本兩擺","has","have|is|did","主詞 she 用 has。"],
["ty","你敢捌去過日本？（用 been）","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","問經驗用 Have you ever been to …?"],
["ty","彼本冊我看過（用 have + read）","I've read the book|I've read that book","I've · read · book — 冠詞 the","a","指雙方攏知影的彼本冊，用冠詞 the。"],
["ty","我毋捌飼過貓（用 have + had）","I've never had a cat","never · had · cat — 冠詞 a","the","毋是指佗一隻貓，用冠詞 a。"]]},
{ id:"modals", title:"have to、must、should、might：義務佮建議", blurb:"一定愛做、上好做、可能會做。", deck:"病院佮緊急狀況", body:`
<p>這四个詞分別表示義務、建議佮可能，後壁攏接<b>原形動詞</b>。大約對應台語的「愛 / 著」、「應該 / 上好」、「可能 / 凡勢」。</p>
<h3>have to：愛、一定愛</h3>
<p>日常上捷用。主詞是 he / she 的時用 <b>has to</b>（第三人稱單數）。</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɝk təˈmɑro/|我明仔載愛上班}}{{ex:She has to go now.|/ʃɪ ˈhæs tə ˈgo ˈnaʊ/|伊這馬愛走矣}}
<h3>don't have to 佮 must not 無仝</h3>
<div class="tbl"><table><tr><th>講法</th><th>意思</th></tr><tr><td class="k">You don't have to come.</td><td>你免來（無需要）</td></tr><tr><td class="k">You must not smoke here.</td><td>遮袂使食薰（無允准）</td></tr></table></div>
<h3>should：應該、上好</h3>
{{ex:You should see a doctor.|/jʊ ʃəd ˈsi ə ˈdɑktɚ/|你應該去看醫生}}{{ex:You shouldn't worry.|/jʊ ˈʃʊdṇt ˈwɝɪ/|你毋免煩惱}}
<h3>might：可能、凡勢</h3>
{{ex:It might rain.|/ɪt maɪt ˈren/|凡勢會落雨}}{{ex:I might be late.|/aɪ maɪt bɪ ˈlet/|我可能會遲到}}
<p>「凡勢會落雨」內底的「會」毋免閣翻做 will，講 It might rain. 就好。另外，must 大部分是講話的人家己感覺一定愛，have to 大部分是外口的規定抑是客觀的需要。台語的「愛」、「著」攏會使翻做 must / have to，「會使」是 may / can；「會」毋是逐擺攏是 will，愛看意思揀 can、be able to 抑是 may。</p>
<div class="tip">上常見的錯：<b>You should to go.</b>、<b>It might rains.</b> ✗ → <b>You should go.</b>、<b>It might rain.</b> ✓</div>`,
check:[["「你免來」用英語按怎講？",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"「無需要」用 don't have to。"],["予人建議的時：You ___ see a doctor.",["might","have","should","must to"],2,"建議用 should + 原形動詞。"],["She ___ to work today. 空格愛填啥？",["have","must","should","has"],3,"主詞 she 用 has to。"]],
practice:[
["mc","「我明仔載愛上班」=","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + 原形動詞。"],
["mc","「你免來」=","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","「無需要」用 don't have to。"],
["mc","「你應該去看醫生」=","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + 原形動詞；醫生是一位，用冠詞 a。"],
["mc","「凡勢會落雨」=","It might rain.","It might rains.","It might to rain.","It mights rain.","might + 原形動詞。"],
["mc","「遮袂使食薰」=","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","禁止用 must not。"],
["or","你應該去看醫生","You should see a doctor","the doctors","毋是指佗一位醫生，用冠詞 a。"],
["or","我這馬愛走矣","I have to go now","going","have to 後壁接原形動詞。"],
["or","你愛買一張票","You have to buy a ticket","the tickets","一張票，用冠詞 a 佮單數 ticket。"],
["fi","She __ to study tonight.","伊今暗愛讀冊","has","have|must|should","主詞 she 用 has to（第三人稱單數）。"],
["fi","You __ have to pay.","你免付錢","don't|do not","must not|not|aren't","「無需要」用 don't have to。"],
["fi","It __ rain tomorrow.","明仔載凡勢會落雨","might|may|could","must to|has to|should to","可能用 might。"],
["ty","我愛做工課（用 have to）","I have to work|I must work|I need to work","have to · work","should","義務用 have to。"],
["ty","你應該去看醫生（用 see）","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — 冠詞 a","the","毋是指佗一位醫生，用冠詞 a。"],
["ty","你愛買一張票（用 have to）","You have to buy a ticket","have to · buy · ticket — 冠詞 a","the","一張票，用冠詞 a。"]]},
{ id:"to-ing", title:"動詞後壁接 to 抑是 -ing：want to、enjoy -ing", blurb:"want 後壁接 to，enjoy 後壁接 -ing，由頭前的動詞決定。", deck:"開講", body:`
<p>台語講「我想欲去」、「我佮意煮飯」，兩个動詞會使直接連做伙，英語就袂使：<b>I want go.</b> ✗ 第二个動詞若毋是用 <b>to + 原形動詞</b>（不定詞），就是用 <b>-ing</b>（動名詞），由頭前的動詞決定。常用的一組一組記起來。</p>
<div class="tbl"><table><tr><th>後壁接 to</th><th>後壁接 -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop, suggest</td></tr></table></div>
<h3>to + 動詞：拍算欲做的代誌</h3>
{{ex:I want to go home.|/aɪ ˈwɑnt tə ˈgo ˈhom/|我想欲轉去厝}}{{ex:I need to study.|/aɪ ˈnid tə ˈstʌdɪ/|我愛讀冊}}{{ex:I'd like to order.|/aɪd ˈlaɪk tʊ ˈɔrdɚ/|我想欲點菜}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə ˈlɝn ˈɪŋglɪʃ/|我決定欲學英語}}
<h3>-ing：enjoy、finish、mind 這款動詞後壁</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|我真佮意煮飯}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɝkɪŋ/|我工課做煞矣}}{{ex:I don't mind waiting.|/aɪ ˈdont ˈmaɪnd ˈwetɪŋ/|我無掛意等}}
<h3>兩个常見的錯：suggest 佮 look forward to</h3>
<p><b>suggest</b> 後壁袂使接「人 + to」：<b>He suggested me to go.</b> ✗ → <b>He suggested going.</b> ✓ <b>look forward to</b> 的 to 是介系詞，後壁接 -ing，無接原形動詞：<b>I look forward to hear from you.</b> ✗</p>
{{ex:I look forward to hearing from you.|/aɪ ˈlʊk ˈfɔrwɚd tə ˈhɪrɪŋ frəm jʊ/|期待你的回覆}}
<h3>兩款攏會使的動詞</h3>
<p>like、love、start 後壁接 to 抑是 -ing 攏會使。</p>
<div class="tip">上常見的錯：<b>I want go.</b>、<b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>、<b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. 空格愛填啥？",["go","going","to go","to going"],2,"want 後壁接 to + 原形動詞。"],["I enjoy ___ movies. 空格愛填啥？",["watching","to watch","watch","to watching"],0,"enjoy 後壁接 -ing 形式。"],["「我想欲點菜」用英語按怎講？",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"would like 後壁接 to + 原形動詞。"]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","need 後壁接 to + 原形動詞。"],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","enjoy 後壁接 -ing 形式。"],
["mc","「我想欲點菜」=","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","would like 後壁接 to + 原形動詞。"],
["mc","「我工課做煞矣」=","I finished working.","I finished to work.","I finished work to.","I finish worked.","finish 後壁接 -ing 形式。"],
["mc","「我無掛意等」=","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","mind 後壁接 -ing 形式。"],
["or","我想欲買一台車","I want to buy a car","the buying","want 後壁接 to；一台車，用冠詞 a。"],
["or","我佮意看電影","I enjoy watching movies","movie watch","enjoy 後壁接 -ing；泛指電影，用複數 movies。"],
["or","我需要歇睏一下","I need to rest","resting","need 後壁接 to + 原形動詞。"],
["fi","I want __ a coffee.","我想欲啉一杯咖啡","to have|to drink|to get","have|having|drinking","want 後壁接 to + 原形動詞。"],
["fi","She enjoys __.","伊佮意泅水","swimming","to swim|swim|swims","enjoy 後壁接 -ing 形式。"],
["fi","I decided __ English.","我決定欲學英語","to study|to learn","study|studying|studied","decide 後壁接 to + 原形動詞。"],
["ty","我想欲轉去厝（用 want）","I want to go home|I want to go back home","want to · go · home — 無加冠詞","the","want 後壁接 to；home 頭前無加冠詞。"],
["ty","我佮意看冊（用 enjoy）","I enjoy reading books|I enjoy reading","enjoy · read · book — 複數","book","enjoy 後壁接 -ing；泛指冊，用複數 books。"],
["ty","我想欲點菜（用 order）","I'd like to order|I want to order","I'd like · to · order","ordering","would like 後壁接 to + 原形動詞。"]]},
{ id:"articles-2", title:"冠詞進階：獨一無二的 the 佮無加冠詞的泛指", blurb:"樂器頭前加 the，運動頭前無加。閣有國名佮「泛指一類物件」。", deck:"旅行（機場佮飯店）", body:`
<p>冠詞 (articles) 第三課。台語無冠詞，所以冠詞有兩種錯法：應該加的無加，毋免加的煞「為著保險」加一个 the。這課共有固定規則的情形整理一下：佗幾種愛加 the，佗幾種一定無加。</p>
<h3>愛加 the 的情形</h3>
<div class="tbl"><table><tr><th>情形</th><th>例</th></tr><tr><td>世界上獨一無二的物件</td><td class="k">the sun, the internet</td></tr><tr><td>樂器</td><td class="k">play the piano</td></tr><tr><td>河川、海洋</td><td class="k">the Nile, the Pacific</td></tr><tr><td>複數形式抑是聯合的國名</td><td class="k">the United States, the Philippines</td></tr><tr><td>最高級</td><td class="k">the best, the biggest</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈple ðə pɪˈæno/|我彈鋼琴}}{{ex:She's from the United States.|/ʃɪz frəm ðə jʊˈnaɪtɪd ˈstets/|伊是美國人}}{{ex:I found it on the internet.|/aɪ ˈfaʊnd ɪt ɑn ðɪ ˈɪntɚnɛt/|我是佇網路頂揣著的}}
<h3>無加冠詞的情形</h3>
<div class="tbl"><table><tr><th>情形</th><th>例</th></tr><tr><td>大部分的國家佮城市</td><td class="k">Japan, Taiwan</td></tr><tr><td>運動、語言、三頓</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>泛指一類物件</td><td class="k">Dogs are cute. Coffee is expensive.</td></tr></table></div>
{{ex:I live in Taipei.|/aɪ ˈlɪv ɪn ˌtaɪˈpe/|我蹛佇台北}}{{ex:I play soccer.|/aɪ ˈple ˈsɑkɚ/|我踢跤球}}{{ex:Dogs are cute.|/ˈdɔgz ɚ ˈkjut/|狗仔真古錐}}{{ex:Coffee is expensive.|/ˈkɔfɪ ɪz ɪkˈspɛnsɪv/|咖啡真貴（泛指）}}
<h3>泛指佮特指</h3>
<p>台語講「狗仔真古錐」、「我佮意音樂」，名詞頭前啥物攏無加。英語泛指的時嘛仝款：可數名詞用複數，不可數名詞直接用，<b>攏無加 the</b>。</p>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔgz/|我佮意狗（泛指所有的狗）}}{{ex:The dogs in this park are cute.|/ðə ˈdɔgz ɪn ˈðɪs ˈpɑrk ɚ ˈkjut/|這个公園的狗仔真古錐（特指）}}
<div class="tip">泛指的時無加 the：<b>I like the dogs.</b> 的意思是「我佮意遐的狗」。仝款，<b>The music is my life.</b> ✗ → <b>Music is my life.</b> ✓</div>`,
check:[["I play ___ soccer. 空格愛填啥？",["a","the","an","（毋免填）"],3,"運動的名稱頭前無加冠詞。"],["She's from ___ United States. 空格愛填啥？",["the","a","an","（毋免填）"],0,"United States 頭前愛加 the。"],["「狗仔真古錐」（泛指）英語按怎講？",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"泛指的時無加冠詞，用複數。"]],
practice:[
["mc","I play ___ piano.","the","a","an","some","樂器頭前加 the。"],
["mc","「我蹛佇加拿大」=","I live in Canada.","I live in the Canada.","I live in a Canada.","I live Canada in.","大部分的國名頭前無加冠詞。"],
["mc","「我踢跤球」=","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","運動的名稱頭前無加冠詞。"],
["mc","「貓仔真古錐」（泛指）=","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","泛指的時無加冠詞，用複數。"],
["mc","She's from ___ United States.","the","a","an","some","United States 頭前愛加 the。"],
["or","我彈鋼琴","I play the piano","a pianos","樂器頭前愛加冠詞 the。"],
["or","狗仔真古錐（泛指）","Dogs are cute","The dog","泛指狗這種動物，無加冠詞，用複數 dogs。"],
["or","我是佇網路頂揣著的","I found it on the internet","a","internet 是獨一無二的，愛加冠詞 the。"],
["fi","I speak __.","我會曉講英語","English","the English|an English|a English","語言的名稱頭前無加冠詞。"],
["fi","The sun rises in __ east.","日頭對東爿出來","the","a|an|some","方位頭前加 the。"],
["fi","I love __.","我真佮意音樂","music","the musics|a music|musics","泛指音樂，無加冠詞；music 不可數，嘛無 -s。"],
["ty","我是美國人（用 I'm from）","I'm from the United States|I'm from the US|I'm from the USA|I'm from America","I'm from · United States — 冠詞 the","a","United States 頭前愛加冠詞 the。"],
["ty","我彈吉他","I play the guitar|I play guitar","play · guitar — 冠詞 the","a","樂器頭前愛加冠詞 the。"],
["ty","貓仔真古錐（泛指，用 cute）","Cats are cute|Cats are very cute|Cats are really cute|Cats are so cute","cat — 無加冠詞，用複數","The cat","泛指的時無加冠詞，用複數 cats。"]]},
{ id:"first-conditional", title:"若……（真實的條件）：If + 現在式，will", blurb:"「若……就會……」。if 後壁無用 will。", deck:"工作佮電子批", body:`
<p>用來講有可能真正發生的代誌，就是第一類條件句 (first conditional)，結構是 <b>If + 現在式，will + 原形動詞</b>。台語「若明仔載落雨」內底的動詞無變化；英語 if 這半爿雖然咧講未來，嘛愛用<b>現在式</b>：If it rains tomorrow，無講 If it will rain tomorrow。</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈrenz aɪl ˈste ˈhom/|若落雨，我就留佇厝裡}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf jʊ ˈdont ˈhɝɪ jʊl ˈmɪs ðə ˈbʌs/|你若無較緊咧，就會赴袂著公車}}
<h3>順序會使倒反</h3>
<p>if 囥佇後壁的時，中央毋免加逗號。</p>
{{ex:I'll help you if I have time.|/aɪl ˈhɛlp jʊ ɪf aɪ ˈhæv ˈtaɪm/|我若有時間就共你鬥相共}}
<h3>佮祈使句做伙用</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈlet ˈkɔl mɪ/|你若會遲到，就敲電話予我}}{{ex:If you need help, let me know.|/ɪf jʊ ˈnid ˈhɛlp ˈlɛt mɪ ˈno/|若需要鬥相共，就共我講}}
<h3>when：……的時（一定會發生）</h3>
<p>一定會發生的代誌，用 when 代替 if。when 後壁仝款無用 will。</p>
{{ex:When I get home, I'll call you.|/wɛn aɪ ˈgɛt ˈhom aɪl ˈkɔl jʊ/|我轉到厝就敲電話予你}}
<div class="tip">上常見的錯：<b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. 空格愛填啥？",["will rain","rains","rained","raining"],1,"if 後壁用現在式。"],["If you study, you ___ pass. 空格愛填啥？",["pass will","passing","will pass","passed"],2,"結果的部分用 will + 原形動詞。"],["下面佗一句著？",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"if 的部分用現在式，結果的部分用 will。"]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","if 後壁用現在式。"],
["mc","If you're late, ___ me.","call","will calling","calls","to call","祈使句用原形動詞開頭。"],
["mc","「我若有時間就共你鬥相共」=","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","if 後壁無用 will。"],
["mc","「你若無較緊咧，就會赴袂著公車」=","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","if 的部分用現在式的否定 don't。"],
["mc","「我轉到厝就敲電話予你」=","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","when 後壁嘛是用現在式。"],
["or","若落雨，我就留佇厝裡","If it rains I'll stay home","will the","if 後壁用現在式；home 頭前無加冠詞。"],
["or","你若有時間就敲電話予我","If you have time call me","will","if 後壁無用 will。"],
["or","你會赴袂著公車","You'll miss the bus","a buses","欲坐的就是彼班公車，用冠詞 the。"],
["fi","If it __ tomorrow, we'll cancel.","若明仔載落雨，阮就取消","rains","will rain|rained|raining","if 後壁用現在式。"],
["fi","If you study, you __ pass.","你若認真讀冊，就會及格","will|can|might","are|did|passing","結果的部分用 will + 原形動詞。"],
["fi","__ you need help, call me.","需要鬥相共就敲電話予我","If|When","So|But|Because","「若」用 if。"],
["ty","我若有時間就共你鬥相共（用 will）","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","if 後壁無用 will。"],
["ty","若落雨，我就坐計程車（用 will）","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — 冠詞 a","the","隨便一台計程車攏會使，用冠詞 a。"],
["ty","你會赴袂著公車（用 will + miss）","You'll miss the bus","miss · bus — 冠詞 the","a","欲坐的就是彼班公車，用冠詞 the。"]]},
{ id:"relative", title:"關係子句：用 who / that 修飾人佮物件", blurb:"台語的修飾語囥佇名詞頭前，英語的囥佇名詞後壁。", deck:"買物件佮付錢", body:`
<p>台語講「<b>我買的</b>冊」，修飾語囥佇名詞頭前，用「的」連起來。英語是先講名詞，才佇<b>後壁</b>補充說明：the book <b>that I bought</b>。這就是關係子句 (relative clause，嘛叫形容詞子句)，who / that 是關係代名詞。</p>
<h3>人用 who</h3>
{{ex:I have a friend who lives in Canada.|/aɪ ˈhæv ə ˈfrɛnd hʊ ˈlɪvz ɪn ˈkænədə/|我有一个蹛佇加拿大的朋友}}{{ex:the man who lives next door|/ðə ˈmæn hʊ ˈlɪvz ˈnɛkst ˈdɔr/|蹛佇隔壁的彼个查埔人}}
<h3>物件用 that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔt/|我買的冊}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfon ðət aɪ ˈwɑnt/|這就是我想欲買的手機仔}}
<h3>that 定定省略</h3>
<p>後壁直接是「主詞 + 動詞」的時，that 會使省略，講話的時大部分攏會省。</p>
{{ex:The movie we saw was great.|/ðə ˈmuvɪ wɪ ˈsɔ wəz ˈgret/|阮看的彼齣電影真好看}}
<h3>所在用 where</h3>
{{ex:the cafe where we met|/ðə kæˈfe wɛr wɪ ˈmɛt/|阮見面的彼間咖啡廳}}
<h3>莫漏 who，嘛莫加一个代名詞</h3>
<p>台語用「的」就好，無關係代名詞，所以真容易共兩个動詞直接連做伙：<b>I have a friend lives in Canada.</b> ✗ → <b>I have a friend who lives in Canada.</b> ✓ 「有真濟人……」這款句上容易錯：<b>There are many people have this problem.</b> ✗ → <b>There are many people who have this problem.</b> ✓（嘛會使直接講 Many people have this problem.）</p>
<p>關係子句內底莫閣重複代名詞：<b>the man who I met him</b> ✗ → <b>the man (who) I met</b> ✓</p>
<div class="tip">記牢順序：<b>名詞佇頭前，說明佇後壁。</b>「我買的冊」 → the book (that) I bought。袂使用 what：<b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Tokyo. 空格愛填啥？",["which","who","what","he"],1,"修飾人用 who。"],["「我買的冊」用英語按怎講？",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"先講名詞，才用 that 補充說明。"],["下面佗一句著？",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"修飾語囥佇名詞後壁。"]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","修飾人用 who。"],
["mc","「我買的冊」=","the book that I bought","the I bought book","the book what I bought","the bought I book","名詞佇頭前，說明佇後壁。"],
["mc","「蹛佇隔壁的彼个查埔人」=","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","修飾人用 who。"],
["mc","This is the phone ___ I want.","that","who","what","it","修飾物件用 that。"],
["mc","「阮看的彼齣電影」=","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","that 會使省略。"],
["or","這本是我買的冊","This is the book I bought","a what","就是我買的彼本冊，用冠詞 the。"],
["or","我有一个會曉煮食的朋友","I have a friend who cooks","the which","頭一擺提著的一个朋友，用冠詞 a。"],
["or","阮看的彼齣電影真好看","The movie we saw was great","A movies","就是阮看的彼齣電影，用冠詞 the。"],
["fi","the man __ lives here","蹛佇遮的彼个查埔人","who|that","what|he|which","修飾人用 who。"],
["fi","the book __ I read","我看過的彼本冊","that|which","who|what|it","修飾物件用 that。"],
["fi","the cafe __ we met","阮見面的彼間咖啡廳","where","who|what|it","修飾所在用 where。"],
["ty","這本是我買的冊（用 that）","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — 冠詞 the","a","就是我買的彼本冊，用冠詞 the。"],
["ty","我有一个會曉講日語的朋友（用 who speaks）","I have a friend who speaks Japanese|I have a friend that speaks Japanese","a friend · who · speaks Japanese — 冠詞 a","the","頭一擺提著的一个朋友，用冠詞 a。"],
["ty","阮看的彼齣電影真好看（用 movie、saw、great）","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good|The movie which we saw was great|The movie which we saw was good","the movie · we saw · was great","what","名詞佇頭前，說明佇後壁。"]]},
];
