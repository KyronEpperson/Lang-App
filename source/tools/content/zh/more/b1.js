/* zh-en stage B1: new lessons. English side shared with ko-en (parity.js) except the zh-only lesson articles-3
   (deviations extraLessons; placed after passive by profile.json lessonOrder). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"现在完成时 2：for 和 since，一直到现在", blurb:"从过去开始、持续到现在的事。for + 一段时间，since + 起点。", deck:"自我介绍", body:`
<p>现在完成时的第二种用法：<b>从过去开始，一直持续到现在</b>的事。中文说“我从 2020 年起就住在这里”，动词“住”没有变化，所以很多人会说 <b>I live here since 2020.</b> ✗ 英语要用 <b>have + 过去分词</b>。</p>
{{ex:I've lived in Beijing for five years.|/aɪv ˈlɪvd ɪn ˌbeɪˈdʒɪŋ fər ˈfaɪv ˈjɪrz/|我在北京住了五年了}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|我从 2020 年起就在这里工作}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|我认识她很久了}}
<h3>for 和 since</h3>
<div class="tbl"><table><tr><th>for + 一段时间</th><th>since + 起点</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long …?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|你在这里多久了？}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|你学英语多久了？}}
<h3>just、already、yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|我刚做完}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|我已经看过了}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|你吃过了吗？}}
<p>Have you eaten yet? 只是问对方吃没吃饭，不能像中文的“吃了吗”那样当问候语用。</p>
<div class="tip">最常见的错误：用一般现在时。<b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. 空格处应填什么？",["since","for","during","from"],1,"一段时间前面用 for。"],["I've worked here ___ 2020. 空格处应填什么？",["for","in","since","at"],2,"起点前面用 since。"],["“你在这里多久了？”用英语怎么说？",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + 过去分词。"]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","一段时间前面用 for。"],
["mc","She's lived here ___ 2019.","since","for","in","at","起点前面用 since。"],
["mc","“你在这里多久了？”=","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + 过去分词。"],
["mc","“我刚做完”=","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + 过去分词。"],
["mc","“你已经吃过了吗？”=","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","疑问句里的“已经”用 yet。"],
["or","我在这里住了五年了","I've lived here for five years","year since","五年，用复数 years；一段时间前面用 for。"],
["or","那部电影我已经看过了","I've already seen the movie","a saw","指双方都知道的那部电影，用冠词 the。"],
["or","你等了多久？","How long have you waited","did","How long have you + 过去分词。"],
["fi","I've worked here __ two years.","我在这里工作两年了","for","since|from|during","一段时间前面用 for。"],
["fi","I've been here __ Monday.","我从星期一起就在这里","since","for|at|during","起点前面用 since。"],
["fi","Have you finished __?","你已经做完了吗？","yet|already","ever|never|since","疑问句里的“已经”用 yet。"],
["ty","我在这里住了三年了","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — 复数","year","三年，用复数 years。"],
["ty","你在这里多久了？","How long have you been here","how long · have you · been here","are","How long have you + 过去分词。"],
["ty","那本书我已经读过了","I've already read the book|I've read the book already|I already read the book","already · read · book — 冠词 the","a","指双方都知道的那本书，用冠词 the。"]]},
{ id:"narrative", title:"讲故事的时态：一般过去时、过去进行时、过去完成时", blurb:"背景用过去进行时，事件用一般过去时，更早发生的事用 had + 过去分词。", deck:"影视与俚语", body:`
<p>讲过去发生的事，要把三种时态搭配起来用，各有分工。中文靠“正在”“了”“已经”和上下文表达先后，英语则必须体现在动词形式上。</p>
<div class="tbl"><table><tr><th>时态</th><th>作用</th><th>例句</th></tr><tr><td class="k">过去进行时</td><td>背景、当时正在做的事</td><td>I was walking home.</td></tr><tr><td class="k">一般过去时</td><td>发生的事件</td><td>I saw an old friend.</td></tr><tr><td class="k">过去完成时</td><td>更早发生的事</td><td>He had moved to Shanghai.</td></tr></table></div>
<h3>背景 + 事件</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|我走路回家的时候，碰到了一个老朋友}}
<h3>过去完成时：had + 过去分词</h3>
<p>比过去某个时间点<b>更早</b>发生的事，相当于“我到的时候，电影已经开始了”里的“已经……了”。</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|我到的时候，电影已经开始了}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|我以前从没见过雪}}
<h3>表示顺序的词</h3>
<p>用 first（首先）、then（然后）、after that（之后）、finally（最后）把故事串起来。</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|我们先吃了晚饭，然后看了电影}}
<div class="tip">then（然后）和 than（比）发音相近，但是两个不同的词。讲故事用 <b>then</b>。</div>`,
check:[["When I arrived, the train ___ already left. 空格处应填什么？",["has","was","had","did"],2,"更早发生的事用 had + 过去分词。"],["I ___ walking home when it started to rain. 空格处应填什么？",["was","had","did","have"],0,"当时正在做的事（背景）用过去进行时。"],["哪一句表示更早发生的事？",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + 过去分词就是过去完成时。"]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","更早发生的事用 had + 过去分词。"],
["mc","I ___ cooking when the phone rang.","was","had","did","have","当时正在做的事用过去进行时。"],
["mc","“我到的时候，火车已经开走了”=","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","更早发生的事用 had + 过去分词。"],
["mc","讲故事时表示“然后”=","then","than","that","them","then 是“然后”，than 是“比”。"],
["mc","“我以前从没见过雪”=","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + 过去分词。"],
["or","（我到的时候）火车已经开走了","The train had already left","a has","要坐的就是那趟火车，用冠词 the。"],
["or","我碰到了一个老朋友","I met an old friend","a friends","old 以元音开头，用冠词 an。"],
["or","我当时正走路回家","I was walking home","had","背景用过去进行时。"],
["fi","I was sleeping __ you called.","你打电话来的时候，我在睡觉","when","than|so|had","“……的时候”用 when。"],
["fi","The bus had already __.","公交车已经开走了","left|gone","leave|leaving|leaves","had 后面接过去分词。"],
["fi","First we ate. __ we watched a movie.","我们先吃了饭，然后看了电影","Then|After that|Next","Than|Because|When","“然后”用 then。"],
["ty","（我到的时候）电影已经开始了","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — 冠词 the","a","要看的就是那部电影，用冠词 the。"],
["ty","我碰到了一个老朋友","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — 冠词 an","a","old 以元音开头，用冠词 an。"],
["ty","我当时正走路回家","I was walking home","was · walking · home","had","背景用过去进行时。"]]},
{ id:"conditionals", title:"虚拟语气：与现在和过去事实相反", blurb:"与现在事实相反用 would，后悔过去的事用 would have。", deck:"情绪与反应", body:`
<p>想象不真实的情况时用，也就是课本里的<b>虚拟语气</b>。中文说“要是我有时间就去旅行了”“早知道就好好学了”，动词本身没有变化；英语要把动词往过去“退一步”。</p>
<h3>与现在事实相反</h3>
<p><b>If + 一般过去时，would + 动词原形</b>。形式是过去式，说的却是<b>现在</b>。</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|要是有时间，我就去旅行（可惜没有）}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|如果我是你，我就接受}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|换作是你，你会怎么做？}}
<h3>与过去事实相反</h3>
<p><b>If + had + 过去分词，would have + 过去分词</b>。</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|要是当时好好学了，我就考过了}}
<h3>表示后悔：should have、I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|我当时应该打个电话的}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|要是我有更多时间就好了}}
<div class="tbl"><table><tr><th>类型</th><th>if 部分</th><th>结果部分</th></tr><tr><td>真实条件（可能发生）</td><td class="k">一般现在时</td><td class="k">will</td></tr><tr><td>与现在事实相反</td><td class="k">一般过去时</td><td class="k">would</td></tr><tr><td>与过去事实相反</td><td class="k">had + 过去分词</td><td class="k">would have + 过去分词</td></tr></table></div>
<div class="tip">If I were you 是固定说法。主语是 I 也用 <b>were</b>，不用 was（口语里也能听到 was）。</div>`,
check:[["If I ___ rich, I would travel. 空格处应填什么？",["am","were","will be","would be"],1,"与现在事实相反，用过去式 were。"],["If I had studied, I ___ passed. 空格处应填什么？",["would","will have","would have","had"],2,"与过去事实相反，用 would have + 过去分词。"],["“我当时应该打个电话的”用英语怎么说？",["I should have called.","I should called.","I should had call.","I would call should."],0,"表示后悔用 should have + 过去分词。"]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","与现在事实相反，if 部分用过去式。"],
["mc","“如果我是你，我就买了”=","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd … 是固定说法。"],
["mc","If I had known, I ___ come.","would have","would","will have","had","与过去事实相反，用 would have + 过去分词。"],
["mc","“我当时应该打个电话的”=","I should have called.","I should called.","I should had call.","I must called.","表示后悔用 should have + 过去分词。"],
["mc","“换作是你，你会怎么做？”=","What would you do?","What will you did?","What would you did?","What you would do?","虚拟语气用 would + 动词原形。"],
["or","要是有时间，我就去旅行（可惜没有）","If I had time I'd travel","have will","与现在事实相反，用过去式 had 和 would。"],
["or","换作是我，就打车","I'd take a taxi","the taxis","随便哪辆出租车都行，用冠词 a。"],
["or","我当时应该买张票的","I should have bought a ticket","the buy","一张票，用冠词 a。"],
["fi","If I __ you, I'd go.","如果我是你，我就去","were|was","am|be|would be","If I were you 是固定说法。"],
["fi","I would __ helped.","我本来会帮忙的","have","had|has|having","would have + 过去分词。"],
["fi","I wish I __ more time.","要是我有更多时间就好了","had","have|would have|will have","I wish 后面用过去式。"],
["ty","如果我是你，我就去","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","固定说法：If I were you, I'd …"],
["ty","要是我有辆车就好了（用 I wish）","I wish I had a car","I wish · had · car — 冠词 a","the","随便一辆车，用冠词 a。"],
["ty","我当时应该打车的","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — 冠词 a","the","随便哪辆出租车都行，用冠词 a。"]]},
{ id:"passive", title:"被动语态：be + 过去分词", blurb:"比起谁做的，更关心发生了什么的时候用。", deck:"工作与邮件", body:`
<p>结构是 <b>be 动词 + 过去分词</b>。不知道是谁做的，或者谁做的不重要时，用被动语态很自然。</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|我的手机被偷了}}{{ex:This was made in China.|/ˈðɪs wəz ˈmeɪd ɪn ˈtʃaɪnə/|这是中国制造的}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|会议取消了}}
<h3>中文不说“被”，英语也可能要用被动</h3>
<p>中文的“被”多用于不好的事（被偷了、被批评了），很多被动的意思根本不说“被”：“会议取消了”“问题解决了”。英语不看有没有“被”，只看<b>主语是不是动作的承受者</b>。会议不会自己取消，所以要说 was canceled。</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td class="k">The meeting canceled.</td><td class="k">The meeting was canceled.</td></tr><tr><td class="k">This problem must solve now.</td><td class="k">This problem must be solved now.</td></tr></table></div>
{{ex:This problem must be solved now.|/ˈðɪs ˈprɑːbləm məst bi ˈsɑːlvd ˈnaʊ/|这个问题必须马上解决}}
<h3>一般现在时：经常如此的事</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|这里说英语}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|早餐 7 点供应}}
<h3>用 by 说明是谁做的</h3>
{{ex:It was written by Mo Yan.|/ɪt wəz ˈrɪtn baɪ ˈmoʊ ˈjɑːn/|这是莫言写的}}
<h3>主动和被动</h3>
<div class="tbl"><table><tr><th>主动语态</th><th>被动语态</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<p>也有少数例外：<b>The book sells well.</b>（这本书很畅销）这样的主动说法本身就是对的。</p>
<div class="tip">最常见的错误：漏掉 be 动词。<b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. 空格处应填什么？",["is","was","did","has"],1,"昨天的事，用 was + 过去分词。"],["This phone ___ made in Korea. 空格处应填什么？",["was","did","has","does"],0,"被动语态是 be 动词 + 过去分词。"],["“会议取消了”用英语怎么说？",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be 动词 + 过去分词 canceled。"]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","被动语态是 be 动词 + 过去分词。"],
["mc","“这是在韩国制造的”=","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be 动词 + 过去分词 made。"],
["mc","“这里说英语”（被动）=","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","经常如此的事用 is + 过去分词。"],
["mc","“会议取消了”=","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","会议不会自己取消，要用 be 动词 + 过去分词。"],
["mc","“早餐 7 点供应”=","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","三餐前不加冠词；用 is + 过去分词。"],
["or","我的包被偷了","My bag was stolen","stole","be 动词后面接过去分词 stolen。"],
["or","会议取消了","The meeting was canceled","A meetings","双方都知道的那个会议，用冠词 the。"],
["or","窗户被打破了","The window was broken","a windows","就是这扇窗户，用冠词 the。"],
["fi","This was __ in Korea.","这是在韩国制造的","made","make|making|makes","be 动词后面接过去分词。"],
["fi","The room __ cleaned every day.","房间每天都有人打扫","is|gets","does|has|did","经常如此的事用 is + 过去分词。"],
["fi","It was written __ Han Kang.","这是韩江写的","by","from|of|with","用 by 说明是谁做的。"],
["ty","我的手机被偷了","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be 动词 + 过去分词 stolen。"],
["ty","那个会议取消了","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — 冠词 the","a","双方都知道的那个会议，用冠词 the。"],
["ty","门当时是锁着的","The door was locked","the door · was · locked — 冠词 the","a","就是这扇门，用冠词 the。"]]},
{ id:"articles-3", title:"冠词总复习：什么时候不用 the", blurb:"四六级作文常见错误：多余的 the。泛指不加冠词，特指才用 the。", deck:"闲聊", body:`
<p>中文没有冠词，很多同学写英语时会“保险起见”加个 the。可是中国学生作文里的冠词错误，最常见的一类恰恰是<b>多余的 the</b>。这一课用四条规则帮你判断：什么时候不加，什么时候必须加。</p>
<h3>1. 泛指一类事物：不加 the</h3>
<p>说一类事物的整体时，可数名词用<b>不加冠词的复数</b>，不可数名词和抽象名词（life、education、time、money）<b>直接用</b>。中文“生活很难”“教育很重要”前面什么都不加，英语泛指时也一样。</p>
{{ex:Cats sleep a lot.|/ˈkæts ˈsliːp ə ˈlɑːt/|猫很爱睡觉}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|人生苦短}}{{ex:Education is important.|/ˌedʒuˈkeɪʃn ɪz ɪmˈpɔːrtnt/|教育很重要}}{{ex:Time is money.|/ˈtaɪm ɪz ˈmʌni/|时间就是金钱}}
<p><b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓；<b>The money is important.</b> ✗ → <b>Money is important.</b> ✓</p>
<h3>2. 能确定是哪一个：用 the</h3>
<p>同一个名词，后面加上 of …、in … 或定语从句，确定了“是哪一个”，就要用 <b>the</b>。反过来，中文的“这 / 那”也不能一律翻成 the：想说“这家”“那本”，英语用 this / that。</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|我喜欢音乐（泛指）}}{{ex:I like the music in this cafe.|/aɪ ˈlaɪk ðə ˈmjuːzɪk ɪn ˈðɪs kæˈfeɪ/|我喜欢这家咖啡馆的音乐（特指）}}{{ex:The life of a teacher is busy.|/ðə ˈlaɪf əv ə ˈtiːtʃər ɪz ˈbɪzi/|老师的生活很忙}}{{ex:The coffee you made was great.|/ðə ˈkɔːfi ju ˈmeɪd wəz ˈgreɪt/|你做的咖啡真好喝}}
<h3>3. 固定搭配：不加冠词</h3>
<p>bed、school、work、class 等用于本来的用途时，以及“by + 交通工具”，都不加冠词。整块记住。</p>
<div class="tbl"><table><tr><th>固定搭配</th><th>意思</th></tr><tr><td class="k">go to bed</td><td>睡觉</td></tr><tr><td class="k">go to school / go to work</td><td>上学 / 上班</td></tr><tr><td class="k">at home / at work</td><td>在家 / 在上班</td></tr><tr><td class="k">at night / in class</td><td>在晚上 / 在上课</td></tr><tr><td class="k">by train / by bus</td><td>坐火车 / 坐公交车</td></tr></table></div>
{{ex:I go to work by train.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈtreɪn/|我坐火车上班}}{{ex:I went to bed early.|/aɪ ˈwent tə ˈbed ˈɜːrli/|我很早就睡了}}{{ex:She's in class now.|/ʃiz ɪn ˈklæs ˈnaʊ/|她现在在上课}}
<h3>4. 一定要加 the：最高级和序数词</h3>
<p>最高级（best、biggest）和序数词（first、second、last）前面通常要加 <b>the</b>，因为“最……的”“第一个”只能是确定的那一个。</p>
{{ex:It's the best movie I've ever seen.|/ɪts ðə ˈbest ˈmuːvi aɪv ˈevər ˈsiːn/|这是我看过的最好的电影}}{{ex:This is the first time I've been here.|/ˈðɪs ɪz ðə ˈfɜːrst ˈtaɪm aɪv bɪn ˈhɪr/|这是我第一次来这里}}
<div class="tip">拿不准时问自己：说的是<b>一类事物</b>，还是<b>确定的某一个</b>？一类事物，不加冠词（可数名词用复数）；确定的某一个，用 the；很多个里随便一个，用 a / an。不要“保险起见”加 the。</div>`,
check:[["“我坐火车上班”用英语怎么说？",["I go to the work by the train.","I go to a work by train.","I go to work by train.","I go to work by a train."],2,"go to work 和 by train 都是不加冠词的固定搭配。"],["I like ___ music they play here. 空格处应填什么？",["the","a","an","（不填）"],0,"they play here 说明了是哪里放的音乐，所以用 the。"],["“人生苦短”（泛指）用英语怎么说？",["The life is short.","A life is short.","Lives is short.","Life is short."],3,"泛指抽象概念，不加冠词。"]],
practice:[
["mc","“时间就是金钱”=","Time is money.","The time is money.","A time is money.","Time is a money.","泛指抽象概念，不加冠词；money 不可数，也不加 a。"],
["mc","“我很早就睡了”=","I went to bed early.","I went to the bed early.","I went to a bed early.","I went to beds early.","表示“睡觉”的 go to bed 是不加冠词的固定搭配。"],
["mc","“这是我看过的最好的电影”=","It's the best movie I've ever seen.","It's best movie I've ever seen.","It's a best movie I've ever seen.","It's the most best movie I've ever seen.","最高级前面要加 the。"],
["mc","“你做的咖啡真好喝”=","The coffee you made was great.","Coffee you made was great.","A coffee you made was great.","The coffees you made was great.","you made 说明了是哪杯咖啡，所以用冠词 the。"],
["mc","“她现在在上班”=","She's at work now.","She's at the work now.","She's at a work now.","She's at works now.","at work（在上班）是不加冠词的固定搭配。"],
["or","猫很爱睡觉（泛指）","Cats sleep a lot","The cat","泛指猫这种动物，不加冠词，用复数 cats。"],
["or","我喜欢这里的音乐","I like the music here","a musics","here 说明了是哪里的音乐，用冠词 the；music 不可数，没有复数。"],
["or","我坐公交车上学","I go to school by bus","the a","go to school 和 by bus 都是不加冠词的固定搭配。"],
["fi","__ is short.","人生苦短","Life","The life|A life|Lives","泛指抽象概念，不加冠词。"],
["fi","I'm __ home now.","我现在在家","at","at the|in the|to","at home 是不加冠词的固定搭配。"],
["fi","This is __ first time I've been here.","这是我第一次来这里","the|my","a|an|one","序数词 first 前面要加 the（也可以用 my）。"],
["ty","我很早就睡了","I went to bed early|I went to bed very early|I went to bed really early","went to · bed · early — 不加冠词","the","go to bed 是不加冠词的固定搭配。"],
["ty","教育很重要（泛指）","Education is important|Education is very important|Education is really important|Education is so important","education · important — 不加冠词","The","泛指抽象概念，不加冠词。"],
["ty","我坐火车上班","I go to work by train|I commute by train|I take the train to work","go to work · by train — 不加冠词","the","go to work 和 by train 都是不加冠词的固定搭配。"]]},
{ id:"reported", title:"间接引语：转述别人的话", blurb:"She said she was tired. 时态往过去退一步，tell 后面要接人。", deck:"电话与短信缩写", body:`
<p>转述别人说过的话时用。中文“她说她很累”可以照搬原话，英语要把转述内容的<b>时态往过去退一步</b>。</p>
<div class="tbl"><table><tr><th>原话</th><th>转述</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|她说她很累}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|他说他会来}}
<h3>say 和 tell</h3>
<p><b>tell</b> 后面一定要接听话的人，<b>say</b> 后面不直接接人（要接就说 say to me）。</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|他跟我说他很忙}}
<h3>转述问题</h3>
<p>一般疑问句用 <b>if</b> 引出，特殊疑问句保留疑问词，后面都用<b>陈述语序</b>（主语 + 动词）。这就是课本里说的“宾语从句用陈述语序”。</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|她问我还好吗}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|他问我住在哪里}}
<p>同样：<b>I don't know where does she live.</b> ✗ → <b>I don't know where she lives.</b> ✓</p>
<div class="tip">最常见的错误：<b>He said me …</b> ✗ → <b>He told me …</b> ✓；<b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. 空格处应填什么？",["is being","was","be","will"],1,"转述的内容，时态往过去退一步。"],["He ___ me he would come. 空格处应填什么？",["said","say","told","tell to"],2,"后面有听话的人 (me) 时用 told。"],["“他问我住在哪里”用英语怎么说？",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"转述的问题用陈述语序。"]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","转述的内容，时态往过去退一步。"],
["mc","He ___ me he was late.","told","said","say","tells to","后面有听话的人时用 told。"],
["mc","“他说他会来”=","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will 要变成 would。"],
["mc","“她问我还好吗”=","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","一般疑问句用 if 转述。"],
["mc","“他问我住在哪里”=","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","转述的问题用陈述语序。"],
["or","她说她很累","She said she was tired","told","后面没有听话的人时用 said。"],
["or","他说他买了一辆车","He said he bought a car","the cars","第一次提到的一辆车，用冠词 a。"],
["or","她说她很喜欢那本书","She said she liked the book","a books","双方都知道的那本书，用冠词 the。"],
["fi","She __ she was tired.","她说她很累","said","told|asked|say","后面没有听话的人时用 said。"],
["fi","He told __ he was busy.","他跟我说他很忙","me","I|my|to","told 后面接听话的人。"],
["fi","She asked __ I was okay.","她问我还好吗","if|whether","that|what|did","一般疑问句用 if 转述。"],
["ty","他说他很忙","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","转述的内容，时态往过去退一步。"],
["ty","她说她有一辆车","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — 冠词 a","the","第一次提到的一辆车，用冠词 a。"],
["ty","他说他看过那部电影","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — 冠词 the","a","双方都知道的那部电影，用冠词 the。"]]},
];
