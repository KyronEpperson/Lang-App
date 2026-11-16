/* zh-en stage A2: new lessons. English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"过去进行时：was / were + -ing", blurb:"当时正在做的事，用来交代故事的背景。", deck:"情绪与反应", body:`
<p>说过去<b>某个时刻正在做的事</b>。把现在进行时里的 be 动词换成过去式 (was / were) 就行。中文说“我那时在睡觉”，靠“那时”和“在”来表达；英语要靠动词形式。</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|我当时在睡觉}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|我们当时在看电视}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|当时在下雨}}
<h3>疑问句</h3>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|你当时在干什么？}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|你 9 点的时候在工作吗？}}
<h3>和 when 连用：正在做一件事时，发生了另一件事</h3>
<p>持续进行的动作用<b>过去进行时</b>，中途发生的短暂动作用<b>一般过去时</b>。</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|你打电话来的时候，我正在做饭}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|我走路回家的时候，开始下雨了}}
<p>中文的“在 / 正在”可以省略，英语的 was / were 不能省：<b>I cooking.</b> ✗ → <b>I was cooking.</b> ✓</p>
<div class="tip">“正在做”如果只用一般过去时，意思就变了。<b>I cooked when you called.</b> 的意思是“你打来电话以后，我才开始做饭”。</div>`,
check:[["“你 9 点的时候在干什么？”用英语怎么说？",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"主语 you 用 were，后面接 -ing 形式。"],["I was cooking ___ you called. 空格处应填什么？",["when","so","or","than"],0,"“……的时候”用 when。"],["They ___ watching TV. 空格处应填什么？",["was","did","were","are being"],2,"主语 they 用 were。"]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","主语 I 用 was。"],
["mc","“你打电话来的时候，我正在做饭”=","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","持续的动作用过去进行时，插进来的动作用一般过去时。"],
["mc","“你当时在干什么？”=","What were you doing?","What did you doing?","What was you doing?","What were you do?","you 用 were，后面接 -ing 形式。"],
["mc","They ___ playing soccer.","were","was","did","are","主语 they 用 were。"],
["mc","“当时在下雨”=","It was raining.","It were raining.","It was rain.","It rained was.","it 用 was，后面接 -ing 形式。"],
["or","我当时在看一本书","I was reading a book","read books","看的是一本书，用冠词 a 和单数 book。"],
["or","孩子们当时在睡觉","The kids were sleeping","kid was","孩子不止一个，用复数 kids 和 were。"],
["or","我们当时在看电视","We were watching TV","was","主语 we 用 were。"],
["fi","I was __ dinner.","我当时在做晚饭","cooking|making","cook|cooked|cooks","was 后面接 -ing 形式。"],
["fi","What __ you doing?","你当时在干什么？","were","was|did|does","主语 you 用 were。"],
["fi","I was sleeping __ you called.","你打电话来的时候，我在睡觉","when","so|than|or","“……的时候”用 when。"],
["ty","我当时在工作","I was working","was · work — -ing 形式","were","主语 I 用 was，再加 -ing 形式。"],
["ty","我当时在看电影","I was watching a movie","was · watching · movie — 冠词 a","the","没有特指哪部电影，用冠词 a。"],
["ty","孩子们当时在玩","The kids were playing|The children were playing","kids · were · playing — 复数","kid","孩子不止一个，用复数 kids 和 were。"]]},
{ id:"will", title:"will：当场决定、承诺、预测", blurb:"当场决定用 will，事先计划好用 be going to。", deck:"闲聊", body:`
<p><b>will + 动词原形</b>。口语里几乎总是缩写成 <b>I'll、you'll、it'll</b>，否定是 <b>won't</b>。</p>
<p>注意中文的“会”有两个意思：“明天会下雨”是预测，用 will；“我会游泳”是能力，要用 can：I can swim.</p>
<h3>当场决定</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|我要意大利面}}{{ex:I'll get it.|/aɪl ˈget ɪt/|我来接（电话）/ 我去开门}}
<h3>承诺和提议</h3>
{{ex:I'll help you.|/aɪl ˈhelp ju/|我来帮你}}{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|我晚点给你打电话}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|我不会迟到的}}
<h3>预测</h3>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|会没事的}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|我觉得会下雨}}
<h3>will 和 be going to</h3>
<div class="tbl"><table><tr><th></th><th>什么时候用</th><th>例句</th></tr><tr><td class="k">will</td><td>当场决定、承诺</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>事先定好的计划</td><td>I'm going to visit Hangzhou next month.</td></tr></table></div>
<div class="tip">最常见的错误：<b>I will to go.</b>、<b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ will 后面只能接动词原形。</div>`,
check:[["电话响了，“我来接”怎么说？",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"当场决定的事用 will。"],["I ___ be late.（我不会迟到的）",["won't","willn't","don't will","not will"],0,"will 的否定是 won't。"],["哪一句说的是事先定好的计划？",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"事先定好的计划用 be going to。"]],
practice:[
["mc","“我来帮你”=","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","will 后面接动词原形。"],
["mc","在餐厅当场决定：“我要意大利面”=","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","当场决定的事用 will。"],
["mc","“我不会迟到的”=","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not 缩写成 won't。"],
["mc","“你会来吗？”=","Will you come?","Do you will come?","Will you coming?","Will come you?","Will + 主语 + 动词原形。"],
["mc","哪一句说的是事先定好的计划？","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","事先定好的计划用 be going to。"],
["or","我晚点给你打电话","I'll call you later","calling","will 后面接动词原形。"],
["or","我要一杯咖啡","I'll have a coffee","the coffees","点的是一杯，用冠词 a。"],
["or","我去开门","I'll open the door","a doors","就是这扇门，用冠词 the。"],
["fi","I __ call you tomorrow.","我明天给你打电话","will","am|going|do","承诺用 will。"],
["fi","I __ forget.","我不会忘的","won't|will not","don't|not|willn't","will 的否定是 won't。"],
["fi","__ you help me?","你能帮我一下吗？","Will|Can|Could|Would","Do|Are|Is","请别人帮忙可以说 Will you …?"],
["ty","我来帮你","I'll help you|I'll help","I'll · help · you","helping","will 后面接动词原形。"],
["ty","我要一份沙拉（用 will）","I'll have a salad|I'll have the salad","I'll have · salad — 注意冠词","salads","点一份，加冠词 a（指菜单上那道菜也可以用 the）。"],
["ty","我去关门（用 will）","I'll close the door|I'll get the door","I'll · close · door — 冠词 the","a","就是这扇门，用冠词 the。"]]},
{ id:"perfect", title:"现在完成时：做过某事", blurb:"have + 过去分词，表达经历。说出具体时间就用一般过去时。", deck:"旅行（机场与酒店）", body:`
<p><b>have + 过去分词</b>表示“到现在为止，做过某事”，相当于中文的“过”：我去过北京 → I've been to Beijing. 这种用法<b>不说具体什么时候</b>。</p>
{{ex:I've been to Beijing.|/aɪv bɪn tə ˌbeɪˈdʒɪŋ/|我去过北京}}{{ex:She has visited China twice.|/ʃi həz ˈvɪzɪtɪd ˈtʃaɪnə ˈtwaɪs/|她来过中国两次}}
<h3>ever 和 never</h3>
{{ex:Have you ever eaten Peking duck?|/həv ju ˈevər ˈiːtn ˈpiːkɪŋ ˈdʌk/|你吃过北京烤鸭吗？}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|我从没看过}}
<p>回答用 <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>常用的过去分词</h3>
<div class="tbl"><table><tr><th>原形</th><th>过去式</th><th>过去分词</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>been to 和 gone to</h3>
<p><b>been to</b> 是“去过（已经回来了）”，<b>gone to</b> 是“去了（人还在那边）”。</p>
{{ex:She's gone to Shanghai.|/ʃiz ˈgɔːn tə ˌʃæŋˈhaɪ/|她去上海了（现在不在这儿）}}
<h3>说出具体时间就用一般过去时</h3>
<p>有 last year、yesterday、in 2020 这样的时间点，就不能用现在完成时。“了”也不等于现在完成时：“我去年去了日本”有具体时间，要用一般过去时。</p>
{{ex:I went to Japan last year.|/aɪ ˈwent tə dʒəˈpæn ˈlæst ˈjɪr/|我去年去了日本}}
<div class="tip">最常见的错误：<b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["“你去过日本吗？”用英语怎么说？",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"问经历用 Have you ever + 过去分词。"],["I ___ never seen that movie. 空格处应填什么？",["am","did","have","was"],2,"have + never + 过去分词。"],["下面哪一句是正确的？",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"有 last year 这样的时间点，用一般过去时。"]],
practice:[
["mc","“我去过日本”=","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have + 过去分词 been。"],
["mc","see 的过去分词是？","seen","saw","seed","seeing","see 的三种形式是 see – saw – seen。"],
["mc","“你吃过泡菜吗？”=","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","问经历用 Have you ever + 过去分词。"],
["mc","“我从没看过它”=","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","have + never + 过去分词。"],
["mc","有“去年”时，正确的句子是？","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","有具体时间点，用一般过去时。"],
["or","那部电影我看过","I've seen the movie","a saw","指双方都知道的那部电影，用冠词 the。"],
["or","我去过韩国两次","I've been to Korea twice","went","have 后面接过去分词 been。"],
["or","我从没见过蛇","I've never seen a snake","the snakes","不是特指哪条蛇，用冠词 a。"],
["fi","Have you ever __ to Busan?","你去过釜山吗？","been","be|went|go","have 后面接过去分词 been。"],
["fi","I've __ eaten that.","那个我从没吃过","never","ever|no|not never","“从来没有”用 never。"],
["fi","She __ visited Korea twice.","她来过韩国两次","has","have|is|did","主语 she 用 has。"],
["ty","你去过日本吗？","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","问经历用 Have you ever been to …?"],
["ty","那本书我读过","I've read the book|I've read that book","I've · read · book — 冠词 the","a","指双方都知道的那本书，用冠词 the。"],
["ty","我从没养过猫（用 have）","I've never had a cat","never · had · cat — 冠词 a","the","不是特指哪只猫，用冠词 a。"]]},
{ id:"modals", title:"have to、must、should、might：义务和建议", blurb:"必须做、最好做、可能会做。", deck:"医院与紧急情况", body:`
<p>这四个词分别表达义务、建议和可能性，后面都接<b>动词原形</b>。大致对应中文的“得 / 必须”“应该 / 最好”“可能”。</p>
<h3>have to：得、必须</h3>
<p>日常最常用。主语是 he / she 时用 <b>has to</b>（第三人称单数）。</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|我明天得上班}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|她现在得走了}}
<h3>don't have to 和 must not 不一样</h3>
<div class="tbl"><table><tr><th>表达</th><th>意思</th></tr><tr><td class="k">You don't have to come.</td><td>你不用来（没必要）</td></tr><tr><td class="k">You must not smoke here.</td><td>这里禁止吸烟（不允许）</td></tr></table></div>
<h3>should：应该、最好</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|你应该去看看医生}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|你别担心了}}
<h3>might：可能、也许</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|可能会下雨}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|我可能会晚到}}
<p>“可能会下雨”里的“会”不用再翻成 will，说 It might rain. 就够了。另外，must 多表示说话人自己认为必须，have to 多表示外部规定或客观需要；中文的“会 / 能 / 可以”也不能一一对应，要按意思选 can、be able to 或 may。</p>
<div class="tip">最常见的错误：<b>You should to go.</b>、<b>It might rains.</b> ✗ → <b>You should go.</b>、<b>It might rain.</b> ✓</div>`,
check:[["“你不用来”用英语怎么说？",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"“没必要”用 don't have to。"],["给建议时：You ___ see a doctor.",["might","have","should","must to"],2,"建议用 should + 动词原形。"],["She ___ to work today. 空格处应填什么？",["have","must","should","has"],3,"主语 she 用 has to。"]],
practice:[
["mc","“我明天得上班”=","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + 动词原形。"],
["mc","“你不用来”=","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","“没必要”用 don't have to。"],
["mc","“你应该去看看医生”=","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + 动词原形；医生是一位，用冠词 a。"],
["mc","“可能会下雨”=","It might rain.","It might rains.","It might to rain.","It mights rain.","might + 动词原形。"],
["mc","“这里禁止吸烟”=","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","禁止用 must not。"],
["or","你应该去看看医生","You should see a doctor","the doctors","不是特指哪位医生，用冠词 a。"],
["or","我现在得走了","I have to go now","going","have to 后面接动词原形。"],
["or","你得买一张票","You have to buy a ticket","the tickets","一张票，用冠词 a 和单数 ticket。"],
["fi","She __ to study tonight.","她今晚得学习","has","have|must|should","主语 she 用 has to（第三人称单数）。"],
["fi","You __ have to pay.","你不用付钱","don't|do not","must not|not|aren't","“没必要”用 don't have to。"],
["fi","It __ rain tomorrow.","明天可能会下雨","might|may|could","must to|has to|should to","可能性用 might。"],
["ty","我得上班","I have to work|I must work|I need to work","have to · work","should","义务用 have to。"],
["ty","你应该去看看医生","You should see a doctor|You should go to a doctor","should · see · doctor — 冠词 a","the","不是特指哪位医生，用冠词 a。"],
["ty","得买一张票","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — 冠词 a","the","一张票，用冠词 a。"]]},
{ id:"to-ing", title:"动词后接 to 还是 -ing：want to、enjoy -ing", blurb:"want 后面接 to，enjoy 后面接 -ing，由前面的动词决定。", deck:"闲聊", body:`
<p>中文“我想去”“我喜欢做饭”，两个动词可以直接连在一起，英语不行：<b>I want go.</b> ✗ 第二个动词要么用 <b>to + 动词原形</b>（动词不定式），要么用 <b>-ing</b>（动名词），由前面的动词决定。常用的成组记。</p>
<div class="tbl"><table><tr><th>后接 to</th><th>后接 -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + 动词：打算做的事</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|我想回家}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|我得学习}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|我想点餐}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|我决定学英语}}
<h3>-ing：enjoy、finish、mind 等动词后面</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|我喜欢做饭}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|我工作做完了}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|我不介意等}}
<h3>两种都可以的动词</h3>
<p>like、love、start 后面接 to 或 -ing 都可以。</p>
<div class="tip">最常见的错误：<b>I want go.</b>、<b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>、<b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. 空格处应填什么？",["go","going","to go","to going"],2,"want 后面接 to + 动词原形。"],["I enjoy ___ movies. 空格处应填什么？",["watching","to watch","watch","to watching"],0,"enjoy 后面接 -ing 形式。"],["“我想点餐”用英语怎么说？",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"would like 后面接 to + 动词原形。"]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","need 后面接 to + 动词原形。"],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","enjoy 后面接 -ing 形式。"],
["mc","“我想点餐”=","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","would like 后面接 to + 动词原形。"],
["mc","“我工作做完了”=","I finished working.","I finished to work.","I finished work to.","I finish worked.","finish 后面接 -ing 形式。"],
["mc","“我不介意等”=","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","mind 后面接 -ing 形式。"],
["or","我想买一辆车","I want to buy a car","the buying","want 后面接 to；一辆车，用冠词 a。"],
["or","我喜欢看电影","I enjoy watching movies","movie watch","enjoy 后面接 -ing；泛指电影，用复数 movies。"],
["or","我得休息一下","I need to rest","resting","need 后面接 to + 动词原形。"],
["fi","I want __ a coffee.","我想喝杯咖啡","to have|to drink|to get","have|having|drinking","want 后面接 to + 动词原形。"],
["fi","She enjoys __.","她喜欢游泳","swimming","to swim|swim|swims","enjoy 后面接 -ing 形式。"],
["fi","I decided __ English.","我决定学英语","to study|to learn","study|studying|studied","decide 后面接 to + 动词原形。"],
["ty","我想回家","I want to go home","want to · go · home — 不加冠词","the","want 后面接 to；home 前面不加冠词。"],
["ty","我喜欢看书（用 enjoy）","I enjoy reading books|I enjoy reading","enjoy · read · book — 复数","book","enjoy 后面接 -ing；泛指书，用复数 books。"],
["ty","我想点餐","I'd like to order|I want to order","I'd like · to · order","ordering","would like 后面接 to + 动词原形。"]]},
{ id:"articles-2", title:"冠词进阶：独一无二的 the 和不加冠词的泛指", blurb:"乐器前加 the，运动前不加。还有国名和“泛指一类事物”。", deck:"旅行（机场与酒店）", body:`
<p>冠词第三课。中文没有冠词，很多同学怕漏掉，干脆“保险起见”加个 the。其实中国学生的冠词错误里，最常见的就是<b>多余的 the</b>。这一课把有固定规则的情况归纳一下：哪些要加 the，哪些一定不加。</p>
<h3>要加 the 的情况</h3>
<div class="tbl"><table><tr><th>情况</th><th>例子</th></tr><tr><td>世界上独一无二的事物</td><td class="k">the sun, the internet</td></tr><tr><td>乐器</td><td class="k">play the piano</td></tr><tr><td>江河、海洋</td><td class="k">the Yangtze River, the Pacific</td></tr><tr><td>复数形式或联合体的国名</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|我弹钢琴}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|她来自美国}}{{ex:I found it on the internet.|/aɪ ˈfaʊnd ɪt ɑːn ði ˈɪntərnet/|我是在网上找到的}}
<h3>不加冠词的情况</h3>
<div class="tbl"><table><tr><th>情况</th><th>例子</th></tr><tr><td>大多数国家和城市</td><td class="k">China, Beijing</td></tr><tr><td>运动、语言、三餐</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>泛指一类事物</td><td class="k">Dogs are cute. Coffee is expensive.</td></tr></table></div>
{{ex:I live in China.|/aɪ ˈlɪv ɪn ˈtʃaɪnə/|我住在中国}}{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|我踢足球}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|狗很可爱}}{{ex:Coffee is expensive.|/ˈkɔːfi ɪz ɪkˈspensɪv/|咖啡很贵（泛指）}}
<h3>泛指和特指</h3>
<p>中文“狗很可爱”“我喜欢音乐”，名词前什么都不加。英语泛指时也一样：可数名词用复数，不可数名词直接用，<b>都不加 the</b>。</p>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|我喜欢狗（泛指所有的狗）}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|这个公园里的狗很可爱（特指）}}
<div class="tip">泛指时不加 the：<b>I like the dogs.</b> 的意思是“我喜欢那些狗”。同样，<b>The music is my life.</b> ✗ → <b>Music is my life.</b> ✓</div>`,
check:[["I play ___ soccer. 空格处应填什么？",["a","the","an","（不填）"],3,"运动名称前不加冠词。"],["She's from ___ United States. 空格处应填什么？",["the","a","an","（不填）"],0,"United States 前面要加 the。"],["“狗很可爱”（泛指）用英语怎么说？",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"泛指时不加冠词，用复数。"]],
practice:[
["mc","I play ___ piano.","the","a","an","some","乐器前加 the。"],
["mc","“我住在韩国”=","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","大多数国名前不加冠词。"],
["mc","“我踢足球”=","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","运动名称前不加冠词。"],
["mc","“猫很可爱”（泛指）=","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","泛指时不加冠词，用复数。"],
["mc","She's from ___ United States.","the","a","an","some","United States 前面要加 the。"],
["or","我弹钢琴","I play the piano","a pianos","乐器前要加冠词 the。"],
["or","狗很可爱（泛指）","Dogs are cute","The dog","泛指狗这种动物，不加冠词，用复数 dogs。"],
["or","我是在网上找到的","I found it on the internet","a","internet 是独一无二的，要加冠词 the。"],
["fi","I speak __.","我会说英语","English","the English|an English|a English","语言名称前不加冠词。"],
["fi","The sun rises in __ east.","太阳从东方升起","the","a|an|some","方位词前加 the。"],
["fi","I love __.","我很喜欢音乐","music","the musics|a music|musics","泛指音乐，不加冠词；music 不可数，也没有 -s。"],
["ty","我来自美国","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — 冠词 the","a","United States 前面要加冠词 the。"],
["ty","我弹吉他","I play the guitar|I play guitar","play · guitar — 冠词 the","a","乐器前要加冠词 the。"],
["ty","猫很可爱（泛指）","Cats are cute","cat — 不加冠词，用复数","The cat","泛指时不加冠词，用复数 cats。"]]},
{ id:"first-conditional", title:"如果……（真实条件）：If + 一般现在时，will", blurb:"“如果……就会……”。if 后面不用 will。", deck:"工作与邮件", body:`
<p>用来说有可能真的发生的事，结构是 <b>If + 一般现在时，will + 动词原形</b>。中文“如果明天下雨”里动词没有变化；英语 if 这一半虽然说的是将来，也要用<b>一般现在时</b>：If it rains tomorrow，不说 If it will rain tomorrow。</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|如果下雨，我就待在家}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|你不快点就赶不上公交车了}}
<h3>顺序可以调换</h3>
<p>if 放到后面时，中间不用逗号。</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|我有时间就帮你}}
<h3>和祈使句连用</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|要是晚了，就给我打电话}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|需要帮忙就告诉我}}
<h3>when：……的时候（肯定会发生）</h3>
<p>肯定会发生的事，用 when 代替 if。when 后面同样不用 will。</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|我到家就给你打电话}}
<div class="tip">最常见的错误：<b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. 空格处应填什么？",["will rain","rains","rained","raining"],1,"if 后面用一般现在时。"],["If you study, you ___ pass. 空格处应填什么？",["pass will","passing","will pass","passed"],2,"结果部分用 will + 动词原形。"],["下面哪一句是正确的？",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"if 部分用一般现在时，结果部分用 will。"]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","if 后面用一般现在时。"],
["mc","If you're late, ___ me.","call","will calling","calls","to call","祈使句以动词原形开头。"],
["mc","“我有时间就帮你”=","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","if 后面不用 will。"],
["mc","“你不快点就赶不上公交车了”=","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","if 部分用一般现在时的否定 don't。"],
["mc","“我到家就给你打电话”=","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","when 后面也用一般现在时。"],
["or","下雨的话我就待在家","If it rains I'll stay home","will the","if 后面用一般现在时；home 前面不加冠词。"],
["or","你有时间就给我打电话","If you have time call me","will","if 后面不用 will。"],
["or","你会赶不上公交车的","You'll miss the bus","a buses","要坐的就是那趟车，用冠词 the。"],
["fi","If it __ tomorrow, we'll cancel.","如果明天下雨，我们就取消","rains","will rain|rained|raining","if 后面用一般现在时。"],
["fi","If you study, you __ pass.","你好好学习就会通过","will|can|might","are|did|passing","结果部分用 will + 动词原形。"],
["fi","__ you need help, call me.","需要帮忙就给我打电话","If|When","So|But|Because","“如果”用 if。"],
["ty","我有时间就帮你","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","if 后面不用 will。"],
["ty","下雨的话我就打车","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — 冠词 a","the","随便哪辆出租车都行，用冠词 a。"],
["ty","要赶不上公交车了","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — 冠词 the","a","要坐的就是那趟车，用冠词 the。"]]},
{ id:"relative", title:"定语从句：用 who / that 修饰人和物", blurb:"中文的修饰语放在名词前，英语的放在名词后。", deck:"购物与结账", body:`
<p>中文说“<b>我买的</b>书”，修饰语加“的”放在名词前面。英语先说名词，再在<b>后面</b>补充说明：the book <b>that I bought</b>。这就是定语从句，who / that 是关系代词。</p>
<h3>人用 who</h3>
{{ex:I have a friend who lives in Chengdu.|/aɪ ˈhæv ə ˈfrend hu ˈlɪvz ɪn ˌtʃeŋˈduː/|我有个住在成都的朋友}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|住在隔壁的那个男人}}
<h3>物用 that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|我买的书}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|这就是我想要的手机}}
<h3>that 常常省略</h3>
<p>后面直接是“主语 + 动词”时，that 可以省掉，口语里基本都省。</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|我们看的那部电影太好看了}}
<h3>地点用 where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|我们见面的那家咖啡馆}}
<h3>别漏掉关系代词</h3>
<p>中文的定语从句没有关系代词，所以容易写成两个动词挤在一起：<b>I have a friend lives in Chengdu.</b> ✗ → <b>I have a friend who lives in Chengdu.</b> ✓ 也不要照搬“有很多人想来”：<b>There are many people want to come.</b> ✗ → <b>Many people want to come.</b> ✓</p>
<div class="tip">记住顺序：<b>名词在前，说明在后。</b>“我买的书” → the book (that) I bought。不能用 what：<b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Busan. 空格处应填什么？",["which","who","what","he"],1,"修饰人用 who。"],["“我买的书”用英语怎么说？",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"先说名词，再用 that 补充说明。"],["下面哪一句是正确的？",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"修饰语放在名词后面。"]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","修饰人用 who。"],
["mc","“我买的书”=","the book that I bought","the I bought book","the book what I bought","the bought I book","名词在前，说明在后。"],
["mc","“住在隔壁的那个男人”=","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","修饰人用 who。"],
["mc","This is the phone ___ I want.","that","who","what","it","修饰物用 that。"],
["mc","“我们看的那部电影”=","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","that 可以省略。"],
["or","这是我买的书","This is the book I bought","a what","就是我买的那本书，用冠词 the。"],
["or","我有个会做饭的朋友","I have a friend who cooks","the which","第一次提到的一位朋友，用冠词 a。"],
["or","我们看的那部电影很好看","The movie we saw was great","A movies","就是我们看的那部电影，用冠词 the。"],
["fi","the man __ lives here","住在这里的那个男人","who|that","what|he|which","修饰人用 who。"],
["fi","the book __ I read","我读过的那本书","that|which","who|what|it","修饰物用 that。"],
["fi","the cafe __ we met","我们见面的那家咖啡馆","where","who|what|it","修饰地点用 where。"],
["ty","这是我买的书","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — 冠词 the","a","就是我买的那本书，用冠词 the。"],
["ty","我有个会说韩语的朋友","I have a friend who speaks Korean|I have a friend that speaks Korean","a friend · who · speaks Korean — 冠词 a","the","第一次提到的一位朋友，用冠词 a。"],
["ty","我们看的那部电影很好看","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great","what","名词在前，说明在后。"]]},
];
