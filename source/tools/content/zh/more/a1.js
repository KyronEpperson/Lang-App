/* zh-en stage A1: new lessons for Mandarin Chinese speakers (English side shared with ko-en). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it 和 there：主语的位置不能空", blurb:"天气、时间用 it；“某处有……”用 there is / there are。", deck:"闲聊", body:`
<p>中文说“好冷”“附近有一家咖啡馆”，不需要主语。英语的主语位置不能空着，所以要用没有实际意义的 <b>it</b> 和 <b>there</b> 来占位。</p>
<h3>天气、时间用 It</h3>
<p>这里的 it 不是“它”，只是占住主语的位置。</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|今天很冷}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|现在三点}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|下雨了}}
<h3>“某处有……”用 There is / There are</h3>
<p>中文的“有”既表示“拥有”，也表示“存在”。说某个地方存在某样东西时，英语不用 have，而用 there be 句型：一个用 <b>There is a …</b>，多个用 <b>There are … -s</b>。口语里常缩写成 There's。</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|这附近有一家咖啡馆}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|有两个房间}}
<h3>疑问句和否定句</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|这里有洗手间吗？}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|还有座位吗？}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|今天没有公交车}}
<h3>和 have 区分开</h3>
<p>人拥有的东西用 <b>have</b>，某个地方存在的东西用 <b>there is</b>。“公园里有很多人”不能说 <b>There have many people in the park</b>，也不能说 <b>In the park has many people</b>。</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|我有一辆车}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|外面有一辆车}}{{ex:There are many people in the park.|/ðer ər ˈmeni ˈpiːpl ɪn ðə ˈpɑːrk/|公园里有很多人}}
<div class="tip">最常见的错误：<b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>There have many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["“今天很热”用英语怎么说？",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"说天气要用 it 占住主语的位置。"],["There ___ three people. 空格处应填什么？",["is","are","have","be"],1,"three people 是复数，用 there are。"],["“这里有洗手间吗？”用英语怎么说？",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"问某处有没有某样东西，用 Is there a …?"]],
practice:[
["mc","“下雨了”=","It's raining.","Is raining.","There is raining.","Rain is.","说天气用 it 作主语。"],
["mc","“这附近有一家咖啡馆”=","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","某处存在某物用 there is；只有一家，加冠词 a。"],
["mc","There ___ two rooms. 空格处应填什么？","are","is","have","has","rooms 是复数，所以用 are。"],
["mc","“现在三点”=","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","说时间也用 it 开头。"],
["mc","“我有一辆车”=","I have a car.","There is a car me.","I am a car.","It's a car me.","人拥有的东西用 have。"],
["or","今天很冷","It's cold today","There's","说天气用 it 作主语。"],
["or","外面有一辆车","There's a car outside","cars","只有一辆，用冠词 a 和单数 car。"],
["or","有两个座位","There are two seats","seat is","两个以上用 are 和复数 seats。"],
["fi","__ cold today.","今天很冷","It's|It is","Is|There's|This","用 it 占住主语的位置。"],
["fi","There __ a bank near here.","附近有一家银行","is","are|have|be","只有一家，用 is。"],
["fi","__ there any seats?","还有座位吗？","Are","Is|Do|Have","seats 是复数，用 Are。"],
["ty","今天很热","It's hot today","it · hot · today — 天气用 it","There's","说天气要用 it 开头。"],
["ty","这里有洗手间吗？","Is there a bathroom here|Is there a restroom here","is there · bathroom — 注意冠词","the","第一次问到的一样东西，加冠词 a。"],
["ty","有两个房间","There are two rooms","there are · two · room — 复数","room","两个房间，用复数 rooms。"]]},

{ id:"plurals", title:"名词复数 -s 和 this / these、my / your", blurb:"两个以上一定加 -s。this 指一个，these 指多个。", deck:"购物与结账", body:`
<p>中文数东西靠量词：“三本书”“两只猫”，名词本身不变。英语正好相反：不用量词，但两个以上时名词一定要加 <b>-s</b>。说了 three 也不能省掉 -s，这是中国学生最常漏掉的地方之一。</p>
<p>“们”也不等于 -s。“们”只用于人，而且可说可不说；英语的 -s 人和物都要加，每次都不能少。people 本身就是复数，不再加 -s。</p>
<h3>复数的构成</h3>
<div class="tbl"><table><tr><th>规则</th><th>例子</th></tr><tr><td>大多数加 -s</td><td class="k">book → books</td></tr><tr><td>s、x、ch、sh 结尾加 -es</td><td class="k">box → boxes</td></tr><tr><td>辅音字母 + y 结尾，变 y 为 i 加 -es</td><td class="k">city → cities</td></tr><tr><td>不规则</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|两本书}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|三个盒子}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|我有两个孩子}}
<p>说的时候要把 -s 读出来：books 读 /s/，keys 读 /z/，boxes 读 /ɪz/。</p>
<h3>this / that 指一个，these / those 指多个</h3>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|这是我的包}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|这些是我的钥匙}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|那双鞋很好看}}
<h3>my、your、his、her、our、their</h3>
<p>这些是物主代词，表示“谁的”。用了物主代词，就不能再加 a 或 the。</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|这是你的手机吗？}}{{ex:Her brothers live in Shanghai.|/hər ˈbrʌðərz ˈlɪv ɪn ˌʃæŋˈhaɪ/|她的几个哥哥都住在上海}}
<div class="tip">数字、many、these、those 后面的名词一定用复数：<b>two friend</b> ✗ → <b>two friends</b> ✓，<b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. 空格处应填什么？",["sister","sisters","a sister","sister's"],1,"two 后面用复数 sisters。"],["___ are my keys. 空格处应填什么？",["This","That","These","It"],2,"keys 是复数，所以用 These。"],["“这是我的包”用英语怎么说？",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"有了 my，就不再加冠词。"]],
practice:[
["mc","“两本书”=","two books","two book","two a book","twos book","两个以上要加复数 -s。"],
["mc","child 的复数形式是？","children","childs","childes","child","这是不规则复数。"],
["mc","___ shoes are nice.（那双鞋）","Those","That","This","It","shoes 是复数，所以用 those。"],
["mc","“这是我的包”=","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my 和冠词不能一起用。"],
["mc","box 的复数形式是？","boxes","boxs","boxies","box","以 s、x、ch、sh 结尾的词加 -es。"],
["or","这些是我的钥匙","These are my keys","key This","多个东西用 these 和复数 keys。"],
["or","我有两个孩子","I have two children","child a","两个孩子用复数 children，不加冠词 a。"],
["or","那双鞋很好看","Those shoes are nice","That","shoes 是复数，所以用 those。"],
["fi","I have three __.","我有三只猫","cats","cat|a cat|cat's","三只猫，用复数 cats。"],
["fi","__ is my friend.","这是我的朋友","This","These|Those|They","只有一个人，用 this。"],
["fi","Two __, please.","请来两杯咖啡","coffees","coffee|a coffee|coffee's","点咖啡时英语不用“杯”，直接说复数 coffees。"],
["ty","这些是我的书","These are my books","these · my · book — 复数","book","多本书用 these 和复数 books。"],
["ty","我有两个姐妹","I have two sisters","have · two · sister — 复数","sister","两个姐姐，用复数 sisters。"],
["ty","这是我的包","This is my bag","this · my · bag — 不加冠词","a","有了 my，就不加冠词 a。"]]},
{ id:"present", title:"一般现在时和语序：主语 + 动词 + 宾语", blurb:"主谓宾和中文一样，难点是时间、地点放在哪里。", deck:"自我介绍", body:`
<p>英语的基本语序和中文一样，都是<b>主语 → 动词 → 宾语</b>：我喝咖啡 → I drink coffee. 真正容易出错的是其他成分的位置：中文把时间、地点放在动词前面（我每天在家学英语），英语一般把它们放在句末。</p>
<h3>主语 + 动词 + 宾语</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|我喝咖啡}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|我学英语}}
<h3>地点和时间放在后面</h3>
<p>其余信息按<b>地点 → 时间</b>的顺序放到句末。</p>
{{ex:We live in Beijing.|/wi ˈlɪv ɪn ˌbeɪˈdʒɪŋ/|我们住在北京}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|我每天学英语}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|他们周末上班}}
<h3>一般现在时：习惯和事实</h3>
<p>表示经常做的事和不变的事实。否定句在动词前加 <b>don't</b>。</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|我不吃肉}}
<h3>频率副词：always、usually、sometimes、never</h3>
<p>这些词放在实义动词<b>前面</b>，和中文“我通常……”的位置一样。但 every day、at seven 这类时间短语要放在句末。</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|我通常七点起床}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|我晚上从来不喝咖啡}}
<div class="tip">按中文语序逐字翻译就会出错：<b>I every day study English.</b> ✗ → <b>I study English every day.</b> ✓。先说主语和动词，时间放到最后。</div>`,
check:[["“我喝咖啡”的正确语序是？",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"语序是主语 + 动词 + 宾语。"],["I ___ eat meat.（不吃）",["not","am not","no","don't"],3,"实义动词的否定用 don't。"],["always 放在哪里正确？",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"频率副词放在实义动词前面。"]],
practice:[
["mc","“我学英语”=","I study English.","I English study.","I am study English.","Study I English.","语序是主语 + 动词 + 宾语。"],
["mc","“我不吃肉”=","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","实义动词的否定用 don't。"],
["mc","“我们住在首尔”=","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","地点放在动词后面。"],
["mc","“我通常七点起床”=","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually 放在实义动词前面。"],
["mc","哪一句说的是每天做的事？","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","习惯用一般现在时。"],
["or","我每天喝咖啡","I drink coffee every day","the am","习惯用一般现在时；泛指的 coffee 不加冠词。"],
["or","我读很多书","I read many books","book","many 后面接复数 books。"],
["or","我们周末上班","We work on weekends","are","实义动词前面不能再加 be 动词。"],
["fi","I __ like fish.","我不喜欢吃鱼","don't|do not","not|am not|no","实义动词的否定用 don't。"],
["fi","I __ English every day.","我每天学英语","study","am study|studying|to study","主语是 I，一般现在时直接用动词原形。"],
["fi","They live __ Busan.","他们住在釜山","in","at|on|to","城市前面用 in。"],
["ty","我喝茶","I drink tea","drink · tea — 不加冠词","a","泛指的 tea 不加冠词。"],
["ty","我喜欢猫","I like cats","like · cat — 用复数","cat","泛指一类动物用复数 cats。"],
["ty","我不吃肉","I don't eat meat","don't · eat · meat","am","实义动词的否定用 don't。"]]},
{ id:"questions", title:"疑问句：Do you …? 和疑问词", blurb:"不能只把语调升高。Do 放句首，疑问词放在最前面。", deck:"生存英语2", body:`
<p>中文在句末加个“吗”或者把语调升高，就成了疑问句，疑问词也留在原位：“你去哪儿？”。英语要改变<b>语序</b>：助动词或 be 动词放到主语前面，疑问词放在句首。</p>
<h3>be 动词：和主语换位置</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|你没事吧？}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|这是你的包吗？}}
<h3>实义动词：句首加 Do</h3>
<p>在句首加 <b>Do</b>，其余语序不变。</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|你喜欢咖啡吗？}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|你会说英语吗？}}
<p>简短回答：<b>Yes, I do.</b> / <b>No, I don't.</b></p>
<p>否定疑问句的回答要特别注意：Don't you like it?（你不喜欢吗？）如果确实不喜欢，要说 <b>No, I don't.</b>，相当于中文的“对，我不喜欢”。英语的 yes / no 跟着事实走，不跟着对方的问法走。</p>
<h3>疑问词放在最前面</h3>
<p>what（什么）、where（哪里）、when（什么时候）、who（谁）、why（为什么）、how（怎么样）放在句首，后面接疑问句语序。</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|你住在哪里？}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|你是做什么工作的？}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|洗手间在哪里？}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|这个多少钱？}}
<div class="tip">最常见的错误：<b>You go where?</b> ✗ → <b>Where are you going?</b> ✓，<b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓，<b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["“你喜欢咖啡吗？”用英语怎么说？",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"实义动词的疑问句用 Do 开头。"],["“你住在哪里？”用英语怎么说？",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"语序是疑问词 + do + 主语 + 动词。"],["Do you speak English? 的正确回答是？",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"用 do 问，就用 do 回答。"]],
practice:[
["mc","“你会说英语吗？”=","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","实义动词的疑问句用 Do 开头。"],
["mc","“你住在哪里？”=","Where do you live?","Where you live?","Where are you live?","Where live you?","语序是疑问词 + do + 主语 + 动词。"],
["mc","“这个多少钱？”=","How much is this?","How much this is?","How much does this?","What much is this?","问价格用 How much is …?"],
["mc","Do you like tea? — 正确的回答是？","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","用 do 问，就用 do 回答。"],
["mc","“你是做什么工作的？”=","What do you do?","What are you do?","What you do?","What do you?","问职业用 What do you do?"],
["or","你喜欢咖啡吗？","Do you like coffee","Are the","实义动词的疑问句用 Do 开头；泛指的 coffee 不加冠词。"],
["or","洗手间在哪里？","Where is the bathroom","a do","指这栋楼里的那个洗手间，用冠词 the。"],
["or","你住在哪里？","Where do you live","are","实义动词的疑问句需要 do。"],
["fi","__ you like music?","你喜欢音乐吗？","Do","Are|Is|Does","实义动词 like 的疑问句用 Do。"],
["fi","__ do you live?","你住在哪里？","Where","What|Who|When","问地点用 where。"],
["fi","What time __ it?","现在几点？","is","do|does|are","问时间用 be 动词。"],
["ty","你会说英语吗？","Do you speak English|Can you speak English","do · speak · English","Are","实义动词的疑问句用 Do 开头。"],
["ty","洗手间在哪里？","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — 冠词 the","a","双方都知道是哪个洗手间，用冠词 the。"],
["ty","你喜欢狗吗？","Do you like dogs","do · like · dog — 复数","dog","泛指一类动物用复数 dogs。"]]},
{ id:"third-s", title:"第三人称单数：he / she / it 加 -s，does / doesn't", blurb:"主语是一个人或一样东西，动词加 -s。疑问和否定用 does。", deck:"自我介绍", body:`
<p>一般现在时里，主语是 <b>he、she、it</b> 或者单个的人、物时，动词要加 <b>-s</b>，这就是课本里的“第三人称单数”（三单）。这条规则大家都背过，难的是说话时真的把 -s 说出来、读出来。</p>
<div class="tbl"><table><tr><th>主语</th><th>动词</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|她在银行工作}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|他喜欢足球}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|我妈妈做饭很好吃}}
<h3>形式有变化的动词</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|她有一辆车 (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|他八点去上班 (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|她学英语 (study → studies)}}
<p>-s 有三种读音：works 读 /s/，goes 读 /z/，watches 读 /ɪz/。词尾的辅音不要吞掉，也不要在后面多加元音。</p>
<h3>否定和疑问用 does</h3>
<p>用了 <b>doesn't</b> 或 <b>Does</b>，-s 就转到 does 上，后面的动词用原形。</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|他不喝咖啡}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|她住在这里吗？}}
<div class="tip">最常见的错误：<b>She work here.</b> ✗ → <b>She works here.</b> ✓，<b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. 空格处应填什么？",["live","lives","living","is live"],1,"主语是 she，动词用第三人称单数 lives。"],["He ___ like coffee. 空格处应填什么？",["don't","isn't","doesn't","not"],2,"主语是 he，否定用 doesn't。"],["“她有一辆车”用英语怎么说？",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"have 在 she 后面变成 has。"]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","主语是一个人，动词用三单 works。"],
["mc","“他不喝咖啡”=","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he 的否定是 doesn't + 动词原形。"],
["mc","“她住在这里吗？”=","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does 后面的动词不加 -s。"],
["mc","have → she ___","has","haves","have","is have","have 的三单是 has。"],
["mc","study → he ___","studies","studys","study","studyes","辅音字母 + y 结尾，变 y 为 i 加 -es。"],
["or","她在银行工作","She works at a bank","work the","主语是 she，用 works；第一次提到的工作单位用冠词 a。"],
["or","他有两只狗","He has two dogs","have dog","主语是 he，用 has；两只狗用复数 dogs。"],
["or","她不吃肉","She doesn't eat meat","eats","doesn't 后面用不加 -s 的动词原形。"],
["fi","He __ soccer.","他喜欢足球","likes","like|liking|is like","主语是 he，用三单 likes。"],
["fi","__ she speak English?","她会说英语吗？","Does","Do|Is|Are","主语是 she，疑问句用 Does。"],
["fi","She __ to work at eight.","她八点去上班","goes","go|going|gos","go 的三单是 goes。"],
["ty","他有一辆车","He has a car","has · car — 冠词 a","have","主语是 he，用 has；一辆车，加冠词 a。"],
["ty","她喜欢猫","She likes cats","likes · cat — 复数","cat","主语是 she，用三单 likes；泛指猫用复数 cats。"],
["ty","他不住在这里","He doesn't live here","doesn't · live · here","lives","doesn't 后面用动词原形。"]]},
{ id:"countable", title:"可数名词和不可数名词：some、any、much、many", blurb:"water 前面不能加 a，后面也不能加 -s。可数用 many，不可数用 much。", deck:"餐厅点餐", body:`
<p>中文数什么都用量词：一杯水、一条信息、一件家具、一个苹果，所以光看中文，看不出哪个名词“不可数”。英语名词分成<b>可数名词</b>和<b>不可数名词</b>，要一个一个记住。</p>
<div class="tbl"><table><tr><th>可数名词</th><th>不可数名词</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time, information, advice, homework</td></tr><tr><td>可以加 a / an、数字、-s</td><td>不能加 a / an、数字、-s</td></tr></table></div>
<h3>some 和 any</h3>
<p>表示“一些”，肯定句用 <b>some</b>，否定句和疑问句用 <b>any</b>。但请求和提议虽然是疑问句，也用 some：Can I have some water? / Would you like some tea?</p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|我有一点钱}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|我一分钱也没有}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|有问题吗？}}
<h3>many 和 much</h3>
<p>可数名词用 <b>many</b> + 复数，不可数名词用 <b>much</b>。<b>a lot of</b> 两种都能用。</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|几位？}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|多少钱？}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|我没有多少时间}}
<h3>英语的“量词”</h3>
<p>只有数不可数名词时，才用 a glass of、a cup of、a piece of 这样的说法。可数名词直接加数字和 -s，不需要量词：three books，不说 three pieces of book。</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|一杯水}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|一杯咖啡}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|一条建议}}
<div class="tip">最常见的错误：<b>a water</b>、<b>many money</b>、<b>informations</b> ✗ → <b>some water</b>、<b>much money</b>、<b>information</b> ✓</div>`,
check:[["How ___ people are there? 空格处应填什么？",["much","many","any","a"],1,"people 是可数名词，用 many。"],["下面哪个是不可数名词？",["apple","chair","water","friend"],2,"water 前面不能加 a，后面也不能加 -s。"],["I don't have ___ money. 空格处应填什么？",["some","a","many","any"],3,"否定句用 any。"]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water 是不可数名词，不能用 a 或 many。"],
["mc","How ___ time do we have?","much","many","any","a","time 是不可数名词，用 much。"],
["mc","“有问题吗？”=","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any 后面的可数名词用复数。"],
["mc","“一杯水”=","a glass of water","a water glass of","one waters","a glass water","不可数名词用 a glass of 来数。"],
["mc","I have ___ friends in Seoul.","many","much","a","an","friends 是可数名词的复数，用 many。"],
["or","我有一点钱","I have some money","a moneys","money 是不可数名词，不能加冠词 a，也没有复数 -s。"],
["or","请给我两个苹果","Two apples please","apple","两个苹果，用复数 apples。"],
["or","我没有多少时间","I don't have much time","many","time 是不可数名词，用 much。"],
["fi","How __ is this?","这个多少钱？","much","many|any|some","问价格用 how much。"],
["fi","I don't have __ questions.","我没有问题","any","some|much|a","否定句用 any。"],
["fi","a cup __ coffee","一杯咖啡","of","for|in|a","用 a cup of … 来数。"],
["ty","可以给我一点水吗？","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — 不加冠词","a","water 是不可数名词，不加冠词 a，要用 some。"],
["ty","有问题吗？","Do you have any questions","any · question — 复数","question","any 后面的可数名词用复数 questions。"],
["ty","几位？","How many people","how many · people","much","人是可数的，用 many。"]]},
{ id:"object-have", title:"宾格 me、him、her 和 have", blurb:"动词后面不用 I，用 me。还有万能动词 have。", deck:"自我介绍", body:`
<p>中文的“我”“他”“她”放在哪里都不变：我认识她，她认识我。英语的人称代词要<b>变形</b>：放在动词或介词<b>后面</b>时，要用宾格。</p>
<div class="tbl"><table><tr><th>主格</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>宾格</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|她认识我}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|我喜欢他}}{{ex:Can you help us?|/kən ju ˈhelp əs/|你能帮帮我们吗？}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|我和她一起工作}}
<h3>he 还是 she，his 还是 her</h3>
<p>中文的“他”和“她”读音都是 tā，所以说英语时很容易把 he 和 she、his 和 her 说混。指女性一定用 she / her，指男性用 he / him / his。</p>
{{ex:My sister is a nurse. She works at night.|/maɪ ˈsɪstər ɪz ə ˈnɜːrs ‖ ʃi ˈwɜːrks ət ˈnaɪt/|我姐姐是护士，她上夜班}}{{ex:This is Mary and her husband.|/ˈðɪs ɪz ˈmeri ənd hər ˈhʌzbənd/|这是玛丽和她丈夫}}
<h3>have：有、拥有</h3>
<p>以人为主语说“有……”时用 have。家人、东西、时间都可以用 have。</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|我有两个哥哥}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|你有笔吗？}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|我没时间}}
<h3>have：吃、喝</h3>
<p>三餐的名称前面不加冠词。</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|我们去吃午饭吧}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|我每天早上喝咖啡}}
<div class="tip">最常见的错误：<b>She knows I.</b> ✗ → <b>She knows me.</b> ✓，说姐姐时用 <b>He works at night.</b> ✗ → <b>She works at night.</b> ✓</div>`,
check:[["I like ___.（他）",["he","his","him","he's"],2,"动词后面用宾格 him。"],["Can you help ___?（我们）",["us","we","our","ours"],0,"动词后面用宾格 us。"],["“你有笔吗？”用英语怎么说？",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have 是实义动词，疑问句用 Do。"]],
practice:[
["mc","She knows ___.（我）","me","I","my","mine","动词后面用宾格 me。"],
["mc","I like ___.（他们）","them","they","their","theirs","动词后面用宾格 them。"],
["mc","“你能帮帮我们吗？”=","Can you help us?","Can you help we?","Can you help our?","Can us help you?","动词后面用 us。"],
["mc","“我们去吃午饭吧”=","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","三餐的名称前面不加冠词。"],
["mc","“我有两个哥哥”=","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","家人用 have 来说；两个哥哥用复数。"],
["or","你有笔吗？","Do you have a pen","the pens","随便哪支笔都可以，用冠词 a 和单数 pen。"],
["or","我喜欢她","I like her","she","动词后面用宾格 her。"],
["or","我有两个妹妹","I have two sisters","sister a","两个妹妹用复数 sisters，不能加冠词 a。"],
["fi","Call __ tonight.","今晚给我打电话","me","I|my|mine","动词后面用 me。"],
["fi","I work with __.","我和他一起工作","him","he|his|he's","介词后面也用宾格。"],
["fi","She __ a dog.","她养了一只狗","has","have|is|haves","主语是 she，用三单 has。"],
["ty","你能帮帮我吗？","Can you help me|Could you help me","can you · help · me","I","动词后面用宾格 me。"],
["ty","你有笔吗？","Do you have a pen","do you have · pen — 冠词 a","the","随便找一支笔，用冠词 a。"],
["ty","我有很多朋友","I have many friends|I have a lot of friends","have · many · friend — 复数","friend","many 后面接复数 friends。"]]},
{ id:"can-like", title:"can、like + -ing、I'd like：会做的事和想要的东西", blurb:"说自己会做什么、喜欢做什么、现在想要什么。", deck:"闲聊", body:`
<p>自我介绍和点餐时马上用得上的三个句型。</p>
<h3>can：会、能</h3>
<p><b>can + 动词原形</b>。主语是 he、she 时也不加 -s。</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|我会游泳}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|我不会开车}}{{ex:Can you speak Chinese?|/kən ju ˈspiːk ˌtʃaɪˈniːz/|你会说中文吗？}}
<h3>like + -ing：喜欢做某事</h3>
<p>说爱好时，like、love 后面接动词的 <b>-ing 形式</b>。“我很喜欢”不能说 I very like，要说 I really like 或 I like … very much。</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|我喜欢做饭}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|我特别喜欢看电影}}{{ex:I really like reading.|/aɪ ˈriːəli ˈlaɪk ˈriːdɪŋ/|我很喜欢看书}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|我不喜欢跑步}}
<h3>I'd like：我想要……</h3>
<p><b>I like</b> 是一直都喜欢，<b>I'd like</b> 是现在想要，语气礼貌。点餐时用 I'd like。</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|请给我一杯咖啡}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|要不要来点茶？}}
<div class="tip">最常见的错误：<b>He can swims.</b> ✗ → <b>He can swim.</b> ✓，在咖啡店说 <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓，<b>I very like it.</b> ✗ → <b>I really like it.</b> ✓</div>`,
check:[["She can ___ very well. 空格处应填什么？",["sings","sing","singing","to sing"],1,"can 后面接动词原形。"],["“我喜欢做饭”用英语怎么说？",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like 后面用 -ing 形式。"],["在咖啡店点餐时，最自然的说法是？",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"现在想要的东西用 I'd like 来说。"]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","can 后面接动词原形。"],
["mc","“我不会开车”=","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can 的否定是 can't。"],
["mc","“我喜欢看电影”=","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like 后面用 -ing；泛指电影用复数 movies。"],
["mc","点餐时说“请给我一杯咖啡”=","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","现在想要的东西用 I'd like。"],
["mc","“要不要来点茶？”=","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","请别人吃喝时用 Would you like …?"],
["or","请给我一杯咖啡","I'd like a coffee please","the coffees","点的是一杯，用冠词 a 和单数 coffee。"],
["or","我喜欢看书","I like reading books","book read","like 后面用 -ing；泛指书用复数 books。"],
["or","你会游泳吗？","Can you swim","swimming","can 后面接动词原形。"],
["fi","I can't __.","我不会游泳","swim","swimming|swims|to swim","can't 后面接动词原形。"],
["fi","I like __ music.","我喜欢听音乐","listening to","listen to|listen|to listening","like 后面用 -ing 形式。"],
["fi","__ like a sandwich, please.","请给我一个三明治","I'd|I would","I|I'm|I can","点餐用 I'd like。"],
["ty","我喜欢做饭","I like cooking|I love cooking|I like to cook","like · cook — 用 -ing","cook","like 后面用 -ing 形式。"],
["ty","请给我一个三明治","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — 冠词 a","the","随便一个三明治，用冠词 a。"],
["ty","我喜欢狗","I like dogs|I love dogs","like · dog — 复数","dog","泛指狗用复数 dogs。"]]},
{ id:"continuous", title:"正在做的事：be + -ing", blurb:"经常做的事用一般现在时，现在正在做的事用 be + -ing。", deck:"闲聊", body:`
<p>中文的“在”“正在”和英语的现在进行时很像：我在工作 → I'm working. 区别是英语一定要有 <b>be 动词</b>，动词也一定要变成 <b>-ing</b>，两样都不能少。</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|我现在在工作}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|她在做晚饭}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|正在下雨}}
<h3>疑问句和否定句</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|你在干什么？}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|你在听吗？}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|我没在睡觉}}
<h3>和一般现在时比较</h3>
<div class="tbl"><table><tr><th>经常（一般现在时）</th><th>现在 (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>不用 -ing 的动词</h3>
<p>like、know、want、need、have（拥有）这类表示<b>状态</b>的动词，即使说的是现在，也用一般现在时。</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|我认识他}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|我想喝点水}}
<div class="tip">最常见的错误是漏掉 be 动词：<b>I working.</b> ✗ → <b>I'm working.</b> ✓，<b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["“你在干什么？”用英语怎么说？",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"正在做的事用 be + -ing 来问。"],["I ___ coffee every morning. 空格处应填什么？",["am drinking","drinking","drink","am drink"],2,"每天的习惯用一般现在时。"],["下面哪一句是正确的？",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know、want、have（拥有）不用 -ing 形式。"]],
practice:[
["mc","“我现在在工作”=","I'm working now.","I work now am.","I'm work now.","I working now.","正在做的事用 be + -ing。"],
["mc","“她在做晚饭”=","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","用 be + -ing；三餐的名称前面不加冠词。"],
["mc","哪一句说的是每天做的事？","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","习惯用一般现在时。"],
["mc","“你在干什么？”=","What are you doing?","What do you doing?","What are you do?","What you are doing?","语序是疑问词 + be + 主语 + -ing。"],
["mc","“我认识他”=","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know 不用 -ing 形式。"],
["or","我在看书","I'm reading a book","read books","正在看的是一本书，用冠词 a 和单数 book。"],
["or","孩子们在玩","The kids are playing","kid is","孩子不止一个，用复数 kids 和 are。"],
["or","现在正在下雨","It's raining now","rains","正在发生的事用 be + -ing。"],
["fi","I'm __ TV.","我在看电视","watching","watch|watches|to watch","be 后面接 -ing 形式。"],
["fi","What __ you doing?","你在干什么？","are","do|is|does","主语是 you，用 are。"],
["fi","She __ working today.","她今天不上班","isn't|is not","doesn't|don't|not","be + -ing 的否定是 isn't。"],
["ty","我现在在做饭","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — 用 -ing","cook","正在做的事用 be + -ing。"],
["ty","我在看电影","I'm watching a movie","I'm · watching · movie — 冠词 a","the","随便一部电影，用冠词 a。"],
["ty","孩子们在睡觉","The kids are sleeping|The children are sleeping","kids · are · sleeping — 复数","kid","孩子不止一个，用复数 kids 和 are。"]]},
{ id:"past", title:"一般过去时：was / were 和 -ed", blurb:"be 动词用 was / were，实义动词加 -ed。疑问和否定用 did。", deck:"闲聊", body:`
<p>中文说过去的事，常常只加一个时间词或者“了”：我昨天上班了。但“了”表示完成，不等于过去时；英语也不能只靠 yesterday，动词本身要变成过去式。be 动词和实义动词的过去式不一样。</p>
<h3>be 动词的过去式：was / were</h3>
<p>I、he、she、it 用 <b>was</b>，you、we、they 用 <b>were</b>。</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|我当时很累}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|（那次）很好玩}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|我们当时在家}}{{ex:Were you busy?|/wər ju ˈbɪzi/|你当时忙吗？}}
<h3>实义动词的过去式：加 -ed</h3>
<p>动词后面加 <b>-ed</b>，主语是谁都一样。-ed 有三种读音：worked 读 /t/，called 读 /d/，wanted 读 /ɪd/。词尾的辅音就是“过去”的标志，一定要读出来。</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|我昨天上班了}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|我们看了一部电影}}{{ex:She called me.|/ʃi ˈkɔːld mi/|她给我打了电话}}
<h3>否定和疑问用 did</h3>
<p>用了 <b>didn't</b> 或 <b>Did</b>，后面的动词变回原形。</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|我昨天没上班}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|你给我打电话了吗？}}
<div class="tip">最常见的错误：<b>I yesterday work.</b> ✗ → <b>I worked yesterday.</b> ✓，<b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓，<b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. 空格处应填什么？",["was","were","did","are"],1,"主语是 they，用 were。"],["“我昨天没上班”用英语怎么说？",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't 后面接动词原形。"],["Did you ___ the movie? 空格处应填什么？",["watch","watched","watching","watches"],0,"Did 后面接动词原形。"]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","主语是 I，用 was。"],
["mc","“我们看了一部电影”=","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","实义动词的一般过去时加 -ed；有 yesterday 也要用过去式。"],
["mc","“你昨天打电话了吗？”=","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did 后面接动词原形。"],
["mc","“（那次）很好玩”=","It was fun.","It were fun.","It did fun.","It funned.","主语是 it，用 was。"],
["mc","“你当时忙吗？”=","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy 表示状态，用 be 动词来问。"],
["or","我们看了一部电影","We watched a movie","watch movies","一部电影，用冠词 a 和单数 movie。"],
["or","我和朋友们一起玩了","I played with my friends","friend play","朋友不止一个，用复数 friends。"],
["or","我昨天没上班","I didn't work yesterday","worked","didn't 后面接动词原形。"],
["fi","We __ at home last night.","我们昨晚在家","were","was|did|are","主语是 we，用 were。"],
["fi","I __ soccer yesterday.","我昨天踢足球了","played","play|playing|was play","一般过去时加 -ed，有 yesterday 也不能省。"],
["fi","__ you work yesterday?","你昨天上班了吗？","Did","Were|Do|Was","实义动词一般过去时的疑问句用 Did。"],
["ty","我当时很累","I was tired","was · tired","were","主语是 I，用 was。"],
["ty","我看了一部电影（用 watch）","I watched a movie","watched · movie — 冠词 a","the","一部电影，加冠词 a。"],
["ty","我给朋友们打了电话","I called my friends","called · my · friend — 复数","friend","朋友不止一个，用复数 friends。"]]},
{ id:"irregular-past", title:"不规则动词的过去式：went、ate、saw", blurb:"越常用的动词越不加 -ed。先记住这 12 个。", deck:"闲聊", body:`
<p>最常用的动词，过去式往往是<b>不规则</b>的。这些词在学校的不规则动词表里都背过，现在的目标是说话、打字时能马上反应过来。</p>
<div class="tbl"><table><tr><th>原形</th><th>过去式</th><th>原形</th><th>过去式</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Shanghai.|/aɪ ˈwent tə ˌʃæŋˈhaɪ/|我去了上海}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|我们吃了披萨}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|我看了一部电影}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|我见了朋友们}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|我买了一本书}}
<h3>疑问句和否定句用原形</h3>
<p><b>did</b> 已经表示过去，所以后面的动词变回原形。</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|你做了什么？}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|你去哪儿了？}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|我没去}}
<div class="tip">最常见的错误：<b>I goed.</b> ✗ → <b>I went.</b> ✓，<b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["go 的过去式是？",["goed","gone","went","going"],2,"go 的过去式是 went。"],["“你做了什么？”用英语怎么说？",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did 后面接动词原形 do。"],["I didn't ___ breakfast. 空格处应填什么？",["ate","eaten","eats","eat"],3,"didn't 后面接动词原形。"]],
practice:[
["mc","eat 的过去式是？","ate","eated","eat","eaten","eat 的过去式是 ate。"],
["mc","“你去哪儿了？”=","Where did you go?","Where did you went?","Where you went?","Where were you go?","did 后面接动词原形。"],
["mc","“我买了一本书”=","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy 的过去式是 bought；一本书，加冠词 a。"],
["mc","see 的过去式是？","saw","seed","seen","sawed","see 的过去式是 saw。"],
["mc","“我没去”=","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't 后面接动词原形。"],
["or","我看了一部电影","I saw a movie","see movies","一部电影，用冠词 a 和单数 movie；see 的过去式是 saw。"],
["or","我们吃了披萨","We ate pizza","eated","eat 的过去式是 ate。"],
["or","我见了朋友们","I met my friends","friend meet","朋友不止一个，用复数 friends。"],
["fi","I __ to Jeju last year.","我去年去了济州岛","went","go|goed|gone","go 的过去式是 went。"],
["fi","What did you __?","你吃了什么？","eat","ate|eaten|eating","did 后面接动词原形。"],
["fi","She __ a new phone.","她买了一部新手机","bought","buyed|buy|buys","buy 的过去式是 bought。"],
["ty","我去了釜山","I went to Busan","went · to · Busan","go","go 的过去式是 went。"],
["ty","我买了一本书","I bought a book","bought · book — 冠词 a","the","一本书，加冠词 a。"],
["ty","我见了朋友们","I met my friends|I saw my friends","met · my · friend — 复数","friend","朋友不止一个，用复数 friends。"]]},
{ id:"the", title:"再看 the：什么时候用，什么时候不用", blurb:"第一次提到用 a，再次提到用 the。泛指的东西什么都不加。", deck:"问路与交通", body:`
<p>中文没有冠词，所以中国学生既容易漏掉 a，也容易“保险起见”多加 the。研究发现，中国学生作文里最常见的冠词错误就是<b>多余的 the</b>。这一课专门练习<b>该用 the</b> 和<b>什么都不加</b>的情况。</p>
<h3>第一次用 a，再次提到用 the</h3>
<p>对方第一次听说的东西用 a；刚刚提过、对方已经知道是哪一个的，用 the。</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|我买了一件衬衫，那件衬衫是蓝色的}}
<h3>一看就知道是哪个，用 the</h3>
<p>这个房间的窗户、附近的那个车站，双方都知道指的是哪一个，第一次说就用 the。另外，中文的“这”“那”不等于 the：“这本书”是 this book。</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|能开一下窗吗？}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|地铁站在哪里？}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|今天太阳很晒}}
<h3>泛指不加 the</h3>
<p>泛指一类东西或者抽象概念时，不加冠词，复数名词和不可数名词直接用。</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|我喜欢音乐（不说 I like the music）}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|人生苦短（不说 The life is short）}}
<h3>不加冠词的固定说法</h3>
<p>常用的地点、交通、三餐表达，整个记下来。</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|我坐公交车上班}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|我在家}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|我十一点睡觉}}
<div class="tip">先问自己：“对方知道是<b>哪一个</b>吗？”知道用 the，不知道用 a；泛指就什么都不加：<b>The money is important.</b> ✗ → <b>Money is important.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. 空格处应填什么？",["A","An","The","（不填）"],2,"刚刚提到的那只猫，用 the。"],["I go to ___ work by bus. 空格处应填什么？",["a","the","an","（不填）"],3,"go to work 不加冠词。"],["想请别人打开这个房间的窗户，应该说？",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"双方都知道是哪扇窗户，用 the。"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","刚刚提到的那件衬衫，用 the。"],
["mc","“（附近那个）车站在哪里？”=","Where's the station?","Where's a station?","Where's station?","Where the station?","指附近的那个车站，用 the。"],
["mc","下面哪一句是正确的？","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work、by bus 都不加冠词。"],
["mc","“太阳很晒”=","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","独一无二的东西前面加 the。"],
["mc","“我在家”=","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home 不加冠词。"],
["or","能开一下窗吗？","Can you open the window","a windows","双方都知道是哪扇窗户，用冠词 the。"],
["or","我坐公交车上班","I go to work by bus","the a","go to work、by bus 都不加冠词。"],
["or","那只狗很大","The dog is big","A dogs","前面提过的那只狗，用冠词 the。"],
["fi","I saw a movie. __ movie was great.","我看了一部电影，那部电影特别好看","The","A|An|Some","刚刚提到的那部电影，用 the。"],
["fi","Where's __ bathroom?","洗手间在哪里？","the","a|an|some","指这栋楼里的那个洗手间，用 the。"],
["fi","I have __ idea.","我有个主意","an","a|the|some","第一次提到，而且 idea 以元音开头，用 an。"],
["ty","能关一下门吗？","Can you close the door|Could you close the door","can you · close · door — 冠词 the","a","双方都知道是哪扇门，用冠词 the。"],
["ty","（附近那个）车站在哪里？","Where is the station|Where's the station","where · station — 冠词 the","a","指附近的那个车站，用冠词 the。"],
["ty","我在家","I'm at home|I'm home","I'm · at · home — 不加冠词","the","home 前面不加冠词。"]]},
{ id:"adjectives", title:"形容词和比较级：bigger、more expensive、the best", blurb:"形容词放在名词前面，不需要“的”。比较用 -er / more，最高级用 the -est / the most。", deck:"购物与结账", body:`
<p>形容词放在名词<b>前面</b>，或者 be 动词<b>后面</b>。中文说“大的包”，英语不需要“的”：a big bag。另外，中文“这个包很大”没有“是”，英语却一定要有 be 动词：This bag is big.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|一个大包}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|这个包很大}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|太小了}}
<h3>比较级：-er 或 more</h3>
<p>短词加 <b>-er</b>，长词前面加 <b>more</b>。“比……”是 <b>than</b>，放在形容词后面：“他比我高”是 He's taller than me.</p>
<div class="tbl"><table><tr><th>原级</th><th>比较级</th><th>最高级</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|这个更便宜}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|这个比那个贵}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|有大一号的吗？}}
<h3>最高级前面加 the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|这是这里最好的餐厅}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|哪个最便宜？}}
<div class="tip">最常见的错误：<b>more cheaper</b>、<b>more better</b> ✗ → <b>cheaper</b>、<b>better</b> ✓。-er 和 more 不能一起用。</div>`,
check:[["big 的比较级是？",["more big","biger","bigger","most big"],2,"big 是短词，加 -er；它以“一个元音字母 + 一个辅音字母”结尾，所以要双写 g：bigger。"],["This is ___ expensive than that. 空格处应填什么？",["more","most","much","very"],0,"长词的比较级在前面加 more。"],["good 的最高级是？",["the goodest","the most good","the better","the best"],3,"good 的最高级是 the best：good – better – the best。"]],
practice:[
["mc","cheap 的比较级是？","cheaper","more cheap","cheapper","most cheap","短词加 -er。"],
["mc","“这个更贵”=","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","长词前面加 more。"],
["mc","“有大一号的吗？”=","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","语序是冠词 + 形容词 + 名词。"],
["mc","good 的比较级是？","better","gooder","more good","best","good 的比较级是 better：good – better – best。"],
["mc","“这是最好的餐厅”=","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","最高级前面加 the。"],
["or","有大一号的吗？","Do you have a bigger size","the sizes","随便找一个尺码，用冠词 a。"],
["or","这个最便宜","This is the cheapest","a cheaper","最高级前面要加冠词 the。"],
["or","这个比那个便宜","This is cheaper than that","more","-er 形式的形容词前面不再加 more。"],
["fi","It's __ small.","太小了","too","much|more|most","“太”是 too。"],
["fi","This is cheaper __ that one.","这个比那个便宜","than","then|that|more","“比”是 than。"],
["fi","It's the __ expensive one.","这是最贵的","most","more|much|very","长词的最高级是 the most。"],
["ty","有小一号的吗？","Do you have a smaller size","smaller · size — 冠词 a","the","随便找一个尺码，用冠词 a。"],
["ty","这个最好","This is the best|This one is the best","the · best — 冠词 the","a","最高级前面要加冠词 the。"],
["ty","这个更便宜","This is cheaper|This one is cheaper","cheap — 比较级","more","短词加 -er。"]]},
{ id:"going-to", title:"说计划：be going to", blurb:"已经决定要做的事，用 be going to + 动词原形。", deck:"闲聊", body:`
<p>“我打算……”“我要……”这类<b>事先决定的计划</b>，用 <b>be + going to + 动词原形</b>。be 动词不能省。</p>
{{ex:I'm going to visit Shanghai.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˌʃæŋˈhaɪ/|我打算去上海}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|她要买一辆车}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|我们要去吃晚饭}}
<h3>否定和疑问</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|我不打算去}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|你会来吗？}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|这个周末你打算做什么？}}
<h3>根据眼前的迹象做预测</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|要下雨了}}
<h3>常用的时间词</h3>
<p>tomorrow（明天）、tonight（今晚）、this weekend（这个周末）、next week（下周）一般放在句末，不放在动词前面。</p>
<div class="tip">口语里 going to 常常读成 <b>gonna</b>。另外别漏掉 be 动词：<b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["“我明天要去见朋友”用英语怎么说？",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"结构是 be + going to + 动词原形。"],["She ___ going to study. 空格处应填什么？",["am","are","is","be"],2,"主语是 she，用 is。"],["“这个周末你打算做什么？”用英语怎么说？",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"语序是疑问词 + be + 主语 + going to。"]],
practice:[
["mc","“我打算去釜山”=","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","结构是 be + going to + 动词原形。"],
["mc","They ___ going to come.","are","is","am","be","主语是 they，用 are。"],
["mc","“要下雨了”=","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to 后面接动词原形。"],
["mc","“我不打算去”=","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","not 放在 be 动词后面。"],
["mc","“你会来吗？”=","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","把 be 动词放到主语前面。"],
["or","她要买一辆车","She's going to buy a car","the cars","一辆车，用冠词 a 和单数 car。"],
["or","我要去见朋友们","I'm going to meet my friends","friend","朋友不止一个，用复数 friends。"],
["or","我们要去吃晚饭","We're going to have dinner","a","三餐的名称 dinner 前面不加冠词。"],
["fi","I'm going __ study tonight.","我今晚要学习","to","for|at|will","going to 后面接动词原形。"],
["fi","__ you going to come?","你会来吗？","Are","Do|Is|Will","主语是 you，用 Are。"],
["fi","It's going to __ tomorrow.","明天要下雨","rain","rains|raining|rained","going to 后面接动词原形。"],
["ty","我打算看一部电影","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — 冠词 a","the","随便一部电影，用冠词 a。"],
["ty","你打算做什么？","What are you going to do","what · going to · do","will","问计划用 be going to。"],
["ty","我要去见朋友们","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — 复数","friend","朋友不止一个，用复数 friends。"]]},
{ id:"joining", title:"连接句子：and、but、or、so、because", blurb:"把两个短句连成一句。because 和 so 只用一个，不能成对用。", deck:"情绪与反应", body:`
<p>只说短句会显得生硬。用这五个连词把句子连起来，听起来自然得多。</p>
<h3>and、but、or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|我喜欢咖啡和茶}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|我很累，但很开心}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|咖啡还是茶？}}
<h3>so：所以</h3>
<p>语序是<b>原因 + so + 结果</b>。</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|我累了，所以回家了}}
<h3>because：因为</h3>
<p>英语最常见的语序是<b>结果 + because + 原因</b>，原因放在后面。</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|我回家了，因为我累了}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|因为下雨，我待在家里}}
<h3>成对的连词只留一个</h3>
<p>中文习惯说“因为……所以……”“虽然……但是……”。英语里 because 和 so、although 和 but 不能同时出现，只能选一个。</p>
<h3>too：也</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|我也喜欢}}
<div class="tip">because 和 so 不能用在同一个句子里：<b>Because I was tired, so I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. 空格处应填什么？",["because","but","so","or"],2,"原因在前、结果在后，用 so。"],["I stayed home ___ I was sick. 空格处应填什么？",["because","so","but","and"],0,"结果在前、原因在后，用 because。"],["问对方“要咖啡还是茶？”，应该说？",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"二选一用 or。"]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","意思相反，用 but 连接。"],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","原因在前、结果在后，用 so。"],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","结果在前、原因在后，用 because。"],
["mc","“咖啡还是茶？”=","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","二选一用 or。"],
["mc","“我很累，但很开心”=","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","表示转折用 but。"],
["or","我喜欢猫和狗","I like cats and dogs","cat dog","泛指动物用复数 cats 和 dogs。"],
["or","请给我一杯咖啡和一个三明治","A coffee and a sandwich please","the or","各点一份，每个名词前面都加冠词 a。"],
["or","我饿了，所以吃了东西","I was hungry so I ate","because","原因在前、结果在后，用 so。"],
["fi","I'm tired __ happy.","我很累，但很开心","but","so|because|or","表示转折用 but。"],
["fi","I stayed home __ it was raining.","因为下雨，我待在家里","because","so|but|or","结果在前、原因在后，用 because。"],
["fi","Coffee __ tea?","咖啡还是茶？","or","so|but|because","二选一用 or。"],
["ty","我喜欢咖啡和茶","I like coffee and tea","like · coffee · and · tea — 不加冠词","a","泛指的 coffee 和 tea 不加冠词。"],
["ty","我很累，但很开心","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","表示转折用 but。"],
["ty","我喜欢狗和猫","I like dogs and cats|I like cats and dogs","dog · and · cat — 复数","dog","泛指动物用复数 dogs 和 cats。"]]},
{ id:"chinglish", title:"中式英语陷阱：一个中文词，几个英语说法", blurb:"开灯不是 open the light，看书不是 see a book。避开最常见的中式英语。", deck:"中式英语陷阱", body:`
<p>很多中式英语并不是语法错误，而是把中文词一对一地换成了英语。中文一个“开”“看”“带”“借”，英语往往要分成好几个动词；有些说法逐字翻译过去，英语母语者根本听不懂。</p>
<h3>一个中文动词，几个英语动词</h3>
<div class="tbl"><table><tr><th>中文</th><th>英语</th><th>怎么区分</th></tr><tr><td>开（灯、电视）</td><td class="k">turn on / turn off</td><td>电器的开关用 turn on / off；开门、开窗才用 open</td></tr><tr><td>看</td><td class="k">look at / see / watch / read</td><td>看一眼 look at，看见 see，看电视、看比赛 watch，看书 read</td></tr><tr><td>带</td><td class="k">take / bring</td><td>带到别处 take，带到说话人这里 bring</td></tr><tr><td>借</td><td class="k">borrow / lend</td><td>借进来 borrow，借出去 lend</td></tr><tr><td>学</td><td class="k">learn / study</td><td>学会 learn，学习、念书 study</td></tr><tr><td>说</td><td class="k">say / tell / speak / talk</td><td>说内容 say，告诉某人 tell，说某种语言 speak，聊天 talk</td></tr></table></div>
{{ex:Can you turn on the light?|/kən ju ˈtɜːrn ˈɑːn ðə ˈlaɪt/|能开一下灯吗？}}{{ex:I'm reading a book.|/aɪm ˈriːdɪŋ ə ˈbʊk/|我在看书}}{{ex:Can you lend me a pen?|/kən ju ˈlend mi ə ˈpen/|能借我一支笔吗？}}{{ex:Can I borrow your pen?|/kən aɪ ˈbɑːroʊ jʊr ˈpen/|我能借一下你的笔吗？}}{{ex:I'll take you to the station.|/aɪl ˈteɪk ju tə ðə ˈsteɪʃn/|我带你去车站}}
<p>换对了动词，后面的名词也别忘了冠词和复数：turn on <b>the</b> light，read <b>a</b> book，lend me <b>a</b> pen。</p>
<h3>逐字翻译的说法</h3>
<div class="tbl"><table><tr><th>中文</th><th>中式英语 ✗</th><th>地道说法 ✓</th></tr><tr><td>玩手机</td><td>play the phone</td><td class="k">be on my phone</td></tr><tr><td>学到很多知识</td><td>learn many knowledges</td><td class="k">learn a lot</td></tr><tr><td>吃药</td><td>eat medicine</td><td class="k">take medicine</td></tr><tr><td>人山人海</td><td>people mountain people sea</td><td class="k">It's very crowded.</td></tr></table></div>
{{ex:He's always on his phone.|/hiz ˈɔːlweɪz ɑːn hɪz ˈfoʊn/|他总在玩手机}}{{ex:I learned a lot at school.|/aɪ ˈlɜːrnd ə ˈlɑːt ət ˈskuːl/|我在学校学到了很多知识}}{{ex:Take this medicine three times a day.|/ˈteɪk ˈðɪs ˈmedɪsn ˈθriː ˈtaɪmz ə ˈdeɪ/|这个药一天吃三次}}{{ex:I need to see a doctor.|/aɪ ˈniːd tə ˈsiː ə ˈdɑːktər/|我得去看病}}{{ex:It's very crowded.|/ɪts ˈveri ˈkraʊdɪd/|人山人海}}
<p>knowledge 是不可数名词，没有复数，所以 many knowledges 是错的。take medicine 里的 medicine 泛指药，也不加冠词 a；see a doctor 却要加 a。</p>
<h3>“很”+ 动词，成对的连词</h3>
<p>“我很喜欢”不能说 I very like it，因为 very 只修饰形容词和副词。英语说 <b>I really like it</b> 或 <b>I like it very much</b>。“因为……所以……”“虽然……但是……”在英语里只用一个连词，“连接句子”那一课已经讲过。</p>
{{ex:I really like it.|/aɪ ˈriːəli ˈlaɪk ɪt/|我很喜欢}}
<div class="tip">有些中式说法已经被英语接受了，比如 <b>Long time no see!</b>（好久不见）。但大多数逐字翻译别人听不懂：<b>open the light</b> ✗ → <b>turn on the light</b> ✓ / <b>I very like it.</b> ✗ → <b>I really like it.</b> ✓</div>`,
check:[["“能开一下灯吗？”用英语怎么说？",["Can you open the light?","Can you turn on the light?","Can you open light?","Can you turn open the light?"],1,"开灯、开电视用 turn on，open 只用于门、窗这类能打开的东西；指房间里那盏灯，用冠词 the。"],["想请朋友借你一支笔，应该说？",["Can you borrow me a pen?","Can I lend your pen?","Can you lend me a pen?","Can you borrow a pen me?"],2,"lend 是借出去，borrow 是借进来。请别人借给你，说 lend me。"],["“我很喜欢中国菜”用英语怎么说？",["I really like Chinese food.","I very like Chinese food.","I like very Chinese food.","I like very much Chinese food."],0,"very 不能直接修饰动词。“很喜欢”说 really like 或 like … very much。"]],
practice:[
["mc","“开灯”=","turn on the light","open the light","open a light","turn the light open","开灯用 turn on，open 用于门和窗。"],
["mc","“我在看书”=","I'm reading a book.","I'm seeing a book.","I'm looking a book.","I'm watching a book.","看书是 read；see 是看见，watch 是看节目或比赛。"],
["mc","“他总在玩手机”=","He's always on his phone.","He always plays the phone.","He always plays his phone.","He's always playing phone.","“玩手机”不能直译成 play，地道说法是 be on his phone。"],
["mc","“我能借你的伞吗？”=","Can I borrow your umbrella?","Can I lend your umbrella?","Can you borrow me your umbrella?","Can I borrow you umbrella?","向别人借来用 borrow，借给别人用 lend。"],
["mc","“我在学校学到了很多知识”=","I learned a lot at school.","I learned many knowledges at school.","I learned a lot of knowledges at school.","I studied much knowledge at school.","knowledge 是不可数名词，没有复数；“学到很多知识”一般说 learn a lot。"],
["or","请把灯关掉","Please turn off the light","a open","关灯用 turn off；指房间里那盏灯，要用冠词 the。"],
["or","我想看本书","I want to read a book","books see","看书用 read，不用 see；“一本书”是单数，加冠词 a，不用复数 books。"],
["or","我每天吃药","I take medicine every day","eat a","吃药用 take；medicine 在这里泛指药，不加冠词 a。"],
["or","你能借我一支笔吗？","Can you lend me a pen","borrow the","借给别人用 lend；随便哪支笔都行，用冠词 a，不用 the。"],
["fi","Can you turn __ the TV?","能把电视打开吗？","on","open|at|to","开电视用 turn on。"],
["fi","Can I __ your pen?","我能借一下你的笔吗？","borrow","lend|loan|rent","向别人借来用 borrow。"],
["fi","Can you __ me the way to the station?","能告诉我去车站怎么走吗？","tell|show","say|speak|talk","“告诉某人”用 tell，后面直接跟人；say、speak、talk 后面不能直接跟人。"],
["ty","请开灯","Turn on the light please|Please turn on the light|Can you turn on the light|Could you turn on the light|Turn on the lights please|Please turn on the lights|Turn the light on please|Please turn the light on|Can you turn the light on|Could you turn the light on|Turn on the light|Turn the light on","turn on · light — 冠词 the","open","开灯用 turn on，不用 open；指房间里那盏灯，要加冠词 the。"],
["ty","我在看书","I'm reading a book","reading · book — 冠词 a","books","看书用 read；“一本书”要加冠词 a，不用复数 books。"],
["ty","我得去看病","I need to see a doctor|I have to see a doctor|I should see a doctor|I need to go see a doctor|I have to go see a doctor|I need to go and see a doctor|I have to go and see a doctor","see · doctor — 冠词 a","the","“看病”说 see a doctor；随便哪位医生，要加冠词 a。"],
["ty","我很喜欢","I really like it|I like it very much|I like it a lot|I really love it|I love it","really · like · it","very","very 不能直接放在动词前面，“很喜欢”说 really like 或 like it very much。"]]},
];
