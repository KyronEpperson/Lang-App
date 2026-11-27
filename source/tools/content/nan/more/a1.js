/* nan-en stage A1: new lessons for Taiwanese (Taigi) speakers. English side shared with ko-en (parity.js; exceptions in deviations.json);
   native text in written Taigi, MOE recommended characters (docs/briefs/nan-digest.md, docs/profiles/nan.md). tw-english is a nan-only lesson.
   Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it 佮 there：主詞的位毋通空", blurb:"天氣、時間用 it；「某所在有……」用 there is / there are。", deck:"開講", body:`
<p>台語講「真寒」「落雨矣」「附近有一間咖啡廳」，攏免主詞。英語的主詞位毋通空，所以愛用無實在意思的 <b>it</b> 佮 <b>there</b> 來占這个位。</p>
<h3>天氣、時間用 It</h3>
<p>遮的 it 毋是「伊」的意思，干焦占主詞的位。<b>Today very hot.</b> ✗ → <b>It's very hot today.</b> ✓</p>
{{ex:It's cold today.|/ɪts ˈkold təˈde/|今仔日真寒}}{{ex:It's three o'clock.|/ɪts ˈθri əˈklɑk/|這馬三點}}{{ex:It's raining.|/ɪts ˈrenɪŋ/|落雨矣 / 咧落雨}}
<h3>「某所在有……」用 There is / There are</h3>
<p>台語的「有」會使是「擁有」，嘛會使是「存在」：「我有一台車」佮「遮有一間銀行」用的是仝一个「有」。講某所在有某物件的時，英語毋用 have，愛用 there is / there are：一个物件用 <b>There is a …</b>，幾若个用 <b>There are … -s</b>。講話的時定定縮做 There's。</p>
{{ex:There's a cafe near here.|/ðɛrz ə kæˈfe nɪr ˈhɪr/|遮附近有一間咖啡廳}}{{ex:There are two rooms.|/ðɛr ɚ ˈtu ˈrumz/|有兩間房間}}
<h3>疑問句佮否定句</h3>
{{ex:Is there a bathroom here?|/ɪz ðɛr ə ˈbæθrum ˈhɪr/|遮敢有便所？}}{{ex:Are there any seats?|/ɚ ðɛr ˈɛnɪ ˈsits/|敢閣有位？}}{{ex:There isn't a bus today.|/ðɛr ˈɪzṇt ə ˈbʌs təˈde/|今仔日無公車}}
<h3>佮 have 分予清楚</h3>
<p>人擁有的物件用 <b>have</b>，某所在存在的物件用 <b>there is</b>。所以袂使講 <b>There has a bank near here</b>，嘛袂使照「公園有真濟人」講 <b>In the park has many people</b>。</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑr/|我有一台車}}{{ex:There's a car outside.|/ðɛrz ə ˈkɑr ˌaʊtˈsaɪd/|外口有一台車}}{{ex:There are many people in the park.|/ðɛr ɚ ˈmɛnɪ ˈpipḷ ɪn ðə ˈpɑrk/|公園有真濟人}}
<p>there are 後壁若閣有另外一个動詞，愛用 who 接落去，抑是規氣莫用 there are：<b>There are many people have pets.</b> ✗ → <b>Many people have pets.</b> ✓</p>
{{ex:There are many people who have pets.|/ðɛr ɚ ˈmɛnɪ ˈpipḷ hʊ ˈhæv ˈpɛts/|有真濟人飼寵物}}
<div class="tip">上捷看著的錯誤：<b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>There have many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["「今仔日真熱」英語按怎講？",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"講天氣愛用 it 占主詞的位。"],["There ___ three people. 空格愛填啥？",["is","are","have","be"],1,"three people 是複數，用 there are。"],["「遮敢有便所？」英語按怎講？",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"問某所在有某物件無，用 Is there a …?"]],
practice:[
["mc","「咧落雨」=","It's raining.","Is raining.","There is raining.","Rain is.","講天氣用 it 做主詞。"],
["mc","「遮附近有一間咖啡廳」=","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","某所在有某物件用 there is；干焦一間，加冠詞 a。"],
["mc","There ___ two rooms. 空格愛填啥？","are","is","have","has","rooms 是複數，所以用 are。"],
["mc","「這馬三點」=","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","講時間嘛是用 it 開頭。"],
["mc","「我有一台車」=","I have a car.","There is a car me.","I am a car.","It's a car me.","人擁有的物件用 have。"],
["or","今仔日真寒","It's cold today","There's","講天氣用 it 做主詞。"],
["or","外口有一台車","There's a car outside","cars","干焦一台，用冠詞 a 佮單數 car。"],
["or","有兩个位","There are two seats","seat is","兩个以上用 are 佮複數 seats。"],
["fi","__ cold today.","今仔日真寒","It's|It is","Is|There's|This","用 it 占主詞的位。"],
["fi","There __ a bank near here.","附近有一間銀行","is","are|have|be","干焦一間，用 is。"],
["fi","__ there any seats?","敢閣有位？","Are","Is|Do|Have","seats 是複數，用 Are。"],
["ty","今仔日真熱","It's hot today|It's very hot today|It's really hot today","it · hot · today — 天氣用 it","There's","講天氣愛用 it 開頭。"],
["ty","遮敢有便所？（美式：bathroom / restroom）","Is there a bathroom here|Is there a restroom here","is there · bathroom — 注意冠詞","the","頭一擺問著的物件，加冠詞 a。"],
["ty","有兩間房間（用 there）","There are two rooms","there are · two · room — 複數","room","兩間房間，用複數 rooms。"]]},

{ id:"plurals", title:"名詞複數 -s 佮 this / these、my / your", blurb:"兩个以上一定愛加 -s。this 指一个，these 指幾若个。", deck:"買物件佮付錢", body:`
<p>台語算物件靠量詞：「三本冊」「兩隻貓」，名詞本身袂變。英語拄好倒反：免量詞，毋過兩个以上，名詞一定愛用複數 (plural)，加 <b>-s</b>。講 three 矣嘛袂使省 -s：<b>three book</b> ✗ → <b>three books</b> ✓</p>
<p>台語干焦人稱代名詞有分：「我」→「阮」，「伊」→「𪜶 (in)」；「冊」「貓」這款名詞無複數的形。英語的 -s 人佮物件攏愛加，逐擺攏袂使漏。people 本身就是複數，免閣加 -s。</p>
<h3>複數按怎變</h3>
<div class="tbl"><table><tr><th>規則</th><th>例</th></tr><tr><td>大部分加 -s</td><td class="k">book → books</td></tr><tr><td>s、x、ch、sh 結尾加 -es</td><td class="k">box → boxes</td></tr><tr><td>子音字母 + y 結尾，y 改做 i 閣加 -es</td><td class="k">city → cities</td></tr><tr><td>不規則</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtu ˈbʊks/|兩本冊}}{{ex:three boxes|/ˈθri ˈbɑksɪz/|三个箱仔}}{{ex:I have two children.|/aɪ ˈhæv ˈtu ˈtʃɪldrən/|我有兩个囡仔}}
<h3>共 -s 讀出來</h3>
<p>台語的音節尾干焦 -p -t -k -h -m -n -ng，無 -s，所以講英語的時真容易共 -s 吞去：cats 讀做 "cat"，人就聽無是毋是複數。字尾的子音佮 -s 攏愛讀出來。-s 有三種讀法：</p>
<div class="tbl"><table><tr><th>頭前的音</th><th>-s 的讀法</th><th>例</th></tr><tr><td>/p/、/t/、/k/、/f/</td><td class="k">/s/</td><td class="k">books · cats</td></tr><tr><td>/s/、/z/、/ʃ/、/tʃ/、/dʒ/</td><td class="k">/ɪz/</td><td class="k">boxes · watches</td></tr><tr><td>其他的音</td><td class="k">/z/</td><td class="k">keys · friends</td></tr></table></div>
{{ex:cats|/ˈkæts/|貓（複數）}}{{ex:friends|/ˈfrɛndz/|朋友（複數）}}{{ex:keys|/ˈkiz/|鎖匙（複數）}}
<h3>this / that 指一个，these / those 指幾若个</h3>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|這是我的袋仔}}{{ex:These are my keys.|/ˈðiz ɚ maɪ ˈkiz/|這寡是我的鎖匙}}{{ex:Those shoes are nice.|/ˈðoz ˈʃuz ɚ ˈnaɪs/|彼雙鞋仔真好看}}
<h3>my、your、his、her、our、their</h3>
<p>這寡是所有格，表示「啥人的」。用所有格矣，就袂使閣加 a 抑是 the。</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfon/|這支敢是你的手機仔？}}{{ex:Her brothers live in Macau.|/hɚ ˈbrʌðɚz ˈlɪv ɪn məˈkaʊ/|伊的兄弟攏蹛佇澳門}}
<div class="tip">數字、many、these、those 後壁的名詞一定用複數：<b>two friend</b> ✗ → <b>two friends</b> ✓，<b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. 空格愛填啥？",["sister","sisters","a sister","sister's"],1,"two 後壁用複數 sisters。"],["___ are my keys. 空格愛填啥？",["This","That","These","It"],2,"keys 是複數，所以用 These。"],["「這是我的袋仔」英語按怎講？",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"有 my 矣，就免閣加冠詞。"]],
practice:[
["mc","「兩本冊」=","two books","two book","two a book","twos book","兩个以上愛加複數 -s。"],
["mc","child 的複數是？","children","childs","childes","child","這是不規則的複數。"],
["mc","___ shoes are nice.（彼雙鞋仔）","Those","That","This","It","shoes 是複數，所以用 those。"],
["mc","「這是我的袋仔」=","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my 佮冠詞袂使做伙用。"],
["mc","box 的複數是？","boxes","boxs","boxies","box","s、x、ch、sh 結尾的字加 -es。"],
["or","這寡是我的鎖匙","These are my keys","key This","幾若支用 these 佮複數 keys。"],
["or","我有兩个囡仔","I have two children","child a","兩个囡仔用複數 children，無加冠詞 a。"],
["or","彼雙鞋仔真好看","Those shoes are nice","That","shoes 是複數，所以用 those。"],
["fi","I have three __.","我有三隻貓","cats","cat|a cat|cat's","三隻貓，用複數 cats；字尾的 ts 愛讀出來。"],
["fi","__ is my friend.","這是我的朋友","This","These|Those|They","干焦一个人，用 this。"],
["fi","Two __, please.","麻煩你，兩杯咖啡","coffees","coffee|a coffee|coffee's","點咖啡的時英語免講「杯」，直接用複數 coffees。"],
["ty","這寡是我的冊","These are my books","these · my · book — 複數","book","幾若本冊用 these 佮複數 books。"],
["ty","我有兩个姊妹","I have two sisters","have · two · sister — 複數","sister","兩个姊妹，用複數 sisters。"],
["ty","這是我的袋仔","This is my bag","this · my · bag — 無加冠詞","a","有 my 矣，就無加冠詞 a。"]]},
{ id:"present", title:"現在式佮詞序：主詞 + 動詞 + 受詞", blurb:"主詞、動詞、受詞的順序佮台語仝款，困難的是時間、地點囥佇佗位。", deck:"自我介紹", body:`
<p>英語基本的詞序佮台語仝款，攏是<b>主詞 → 動詞 → 受詞</b>：我啉咖啡 → I drink coffee. 正經較捷出錯的是其他部分的位：台語共時間、地點囥佇動詞頭前（「我逐工佇厝學英語」），英語一般囥佇句尾。</p>
<h3>主詞 + 動詞 + 受詞</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔfɪ/|我啉咖啡}}{{ex:I study English.|/aɪ ˈstʌdɪ ˈɪŋglɪʃ/|我學英語}}
<h3>地點佮時間囥後壁</h3>
<p>其他的資料照<b>地點 → 時間</b>的順序囥佇句尾。</p>
{{ex:We live in Taiwan.|/wɪ ˈlɪv ɪn ˌtaɪˈwɑn/|阮蹛佇台灣}}{{ex:I study English every day.|/aɪ ˈstʌdɪ ˈɪŋglɪʃ ˈɛvrɪ ˈde/|我逐工學英語}}{{ex:They work on weekends.|/ðe ˈwɝk ɑn ˈwikɛndz/|𪜶 (in) 週末嘛愛上班}}
<h3>現在式：習慣佮事實</h3>
<p>現在式 (present tense) 表示定定做的代誌佮袂變的事實。否定句佇動詞頭前加 <b>don't</b>。</p>
{{ex:I don't eat meat.|/aɪ ˈdont ˈit ˈmit/|我毋食肉}}
<h3>頻率副詞：always、usually、sometimes、never</h3>
<p>這寡字囥佇一般動詞（be 以外的動詞）<b>頭前</b>、be 動詞<b>後壁</b>。always 佮 never 毋囥句頭，嘛毋囥佇動詞後壁：<b>I go always.</b> ✗ <b>Always I go.</b> ✗ → <b>I always go.</b> ✓。every day、at seven 這款表示時間的詞就囥佇句尾。</p>
{{ex:I usually get up at seven.|/aɪ ˈjuʒʊəlɪ ˈgɛt ˈʌp ət ˈsɛvən/|我通常七點起床}}{{ex:I never drink coffee at night.|/aɪ ˈnɛvɚ ˈdrɪŋk ˈkɔfɪ ət ˈnaɪt/|我暗時從來毋啉咖啡}}{{ex:She's always late.|/ʃɪz ˈɔlwez ˈlet/|伊逐擺攏晏到}}
<div class="tip">照台語的詞序一字一字翻就會出錯：<b>I every day study English.</b> ✗ → <b>I study English every day.</b> ✓。先講主詞佮動詞，時間囥上尾。</div>`,
check:[["「我啉咖啡」正確的詞序是？",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"詞序是主詞 + 動詞 + 受詞。"],["I ___ eat meat.（毋食）",["not","am not","no","don't"],3,"一般動詞的否定用 don't。"],["always 囥佇佗位才著？",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"頻率副詞囥佇一般動詞頭前。"]],
practice:[
["mc","「我學英語」=","I study English.","I English study.","I am study English.","Study I English.","詞序是主詞 + 動詞 + 受詞。"],
["mc","「我毋食肉」=","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","一般動詞的否定用 don't。"],
["mc","「阮蹛佇台灣」=","We live in Taiwan.","We in Taiwan live.","We are live in Taiwan.","We live Taiwan in.","地點囥佇動詞後壁。"],
["mc","「我通常七點起床」=","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually 囥佇一般動詞頭前。"],
["mc","佗一句是咧講逐工做的代誌？","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","習慣用現在式。"],
["or","我逐工啉咖啡","I drink coffee every day","the am","習慣用現在式；泛指的 coffee 無加冠詞。"],
["or","我看真濟冊","I read many books","book","many 後壁接複數 books。"],
["or","阮週末嘛愛上班","We work on weekends","are","一般動詞頭前袂使閣加 be 動詞。"],
["fi","I __ like fish.","我無佮意食魚","don't|do not","not|am not|no","一般動詞的否定用 don't。"],
["fi","I __ English every day.","我逐工學英語","study","am study|studying|to study","主詞是 I，現在式直接用原形動詞。"],
["fi","They live __ Macau.","𪜶 (in) 蹛佇澳門","in","at|on|to","城市頭前用 in。"],
["ty","我啉茶（用 drink）","I drink tea","drink · tea — 無加冠詞","a","泛指的 tea 無加冠詞。"],
["ty","我佮意貓","I like cats|I love cats","like · cat — 用複數","cat","泛指一類動物用複數 cats。"],
["ty","我毋食肉","I don't eat meat","don't · eat · meat","am","一般動詞的否定用 don't。"]]},
{ id:"questions", title:"疑問句：Do you …? 佮疑問詞", blurb:"袂使干焦共聲調揚懸。Do 囥句頭，疑問詞囥上頭前。", deck:"求生英語 2", body:`
<p>台語的疑問句靠「敢……？」「……無？」「……未？」，詞序攏無變，疑問詞嘛留佇原本的位：「你欲去佗位？」。英語無這款詞，愛改<b>詞序</b>：助動詞抑是 be 動詞徙去主詞頭前，疑問詞囥句頭。</p>
<h3>be 動詞：佮主詞調換位</h3>
{{ex:Are you okay?|/ɚ jʊ oˈke/|你有要緊無？}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|這敢是你的袋仔？}}
<h3>一般動詞：句頭加 Do</h3>
<p>先問家己：「句內 be 以外，敢閣有別的動詞？」有的話（like、live、want 攏算），就佇句頭加 <b>Do</b>，其他的詞序無變。</p>
{{ex:Do you like coffee?|/də jʊ ˈlaɪk ˈkɔfɪ/|你敢佮意咖啡？}}{{ex:Do you speak English?|/də jʊ ˈspik ˈɪŋglɪʃ/|你敢會曉講英語？}}
<p>簡單的回答：<b>Yes, I do.</b> / <b>No, I don't.</b></p>
<p>否定疑問句的回答愛特別注意：Don't you like it?（你無佮意喔？）若正經無佮意，愛講 <b>No, I don't.</b>，等於台語的「著，我無佮意」。英語的 yes / no 綴事實，毋是綴對方按怎問。</p>
<h3>疑問詞囥上頭前</h3>
<p>what（啥物）、where（佗位）、when（當時）、who（啥人）、why（為啥物）、how（按怎）囥句頭，後壁用疑問句的詞序。</p>
{{ex:Where do you live?|/ˈwɛr də jʊ ˈlɪv/|你蹛佇佗位？}}{{ex:What do you do?|/ˈwʌt də jʊ ˈdu/|你咧做啥物頭路？}}{{ex:Where is the bathroom?|/ˈwɛr ɪz ðə ˈbæθrum/|便所佇佗位？}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|這个偌濟錢？}}
<p>問「……英語按怎講？」嘛愛用疑問句的詞序：<b>How to say this in English?</b> ✗</p>
{{ex:How do you say this in English?|/ˈhaʊ də jʊ ˈse ˈðɪs ɪn ˈɪŋglɪʃ/|這个英語按怎講？}}
<div class="tip">上捷看著的錯誤：<b>You go where?</b> ✗ → <b>Where are you going?</b> ✓，<b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓，<b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["「你敢佮意咖啡？」英語按怎講？",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"一般動詞的疑問句用 Do 開頭。"],["「你蹛佇佗位？」英語按怎講？",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"詞序是疑問詞 + do + 主詞 + 動詞。"],["Do you speak English? 正確的回答是？",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"用 do 問，就用 do 回答。"]],
practice:[
["mc","「你敢會曉講英語？」=","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","一般動詞的疑問句用 Do 開頭。"],
["mc","「你蹛佇佗位？」=","Where do you live?","Where you live?","Where are you live?","Where live you?","詞序是疑問詞 + do + 主詞 + 動詞。"],
["mc","「這个偌濟錢？」=","How much is this?","How much this is?","How much does this?","What much is this?","問價數用 How much is …?"],
["mc","Do you like tea? — 正確的回答是？","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","用 do 問，就用 do 回答。"],
["mc","「你咧做啥物頭路？」=","What do you do?","What are you do?","What you do?","What do you?","問頭路用 What do you do?"],
["or","你敢佮意咖啡？","Do you like coffee","Are the","一般動詞的疑問句用 Do 開頭；泛指的 coffee 無加冠詞。"],
["or","便所佇佗位？","Where is the bathroom","a do","指這棟樓內底彼間便所，用冠詞 the。"],
["or","你蹛佇佗位？","Where do you live","are","一般動詞的疑問句愛用 do。"],
["fi","__ you like music?","你敢佮意音樂？","Do","Are|Is|Does","一般動詞 like 的疑問句用 Do。"],
["fi","__ do you live?","你蹛佇佗位？","Where","What|Who|When","問地點用 where。"],
["fi","What time __ it?","這馬幾點？","is","do|does|are","問時間用 be 動詞。"],
["ty","你敢會曉講英語？","Do you speak English|Can you speak English","do · speak · English","Are","一般動詞的疑問句用 Do 開頭。"],
["ty","便所佇佗位？（美式：bathroom / restroom）","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — 冠詞 the","a","逐家攏知是佗一間便所，用冠詞 the。"],
["ty","你敢佮意狗？","Do you like dogs","do · like · dog — 複數","dog","泛指一類動物用複數 dogs。"]]},
{ id:"third-s", title:"第三人稱單數：he / she / it 加 -s，does / doesn't", blurb:"主詞是一个人抑是一項物件，動詞加 -s。疑問佮否定用 does。", deck:"自我介紹", body:`
<p>現在式內底，主詞是 <b>he、she、it</b> 抑是單一个人、一項物件的時，動詞愛加 <b>-s</b>，這就是第三人稱單數 (third person singular)。這條規則學校攏有教，困難的是講話的時正經共 -s 講出來：台語的動詞袂綴主詞變，字尾嘛無 -s 這个音，真容易吞去。講話漏 -s，聽的人（包括全民英檢的口試考官）會當做文法錯誤。</p>
<div class="tbl"><table><tr><th>主詞</th><th>動詞</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃɪ ˈwɝks ət ə ˈbæŋk/|伊佇銀行上班}}{{ex:He likes soccer.|/hɪ ˈlaɪks ˈsɑkɚ/|伊佮意跤球}}{{ex:My mom cooks well.|/maɪ ˈmɑm ˈkʊks ˈwɛl/|阮阿母真會煮菜}}
<h3>形有變的動詞</h3>
{{ex:She has a car.|/ʃɪ ˈhæz ə ˈkɑr/|伊有一台車 (have → has)}}{{ex:He goes to work at eight.|/hɪ ˈgoz tə ˈwɝk ət ˈet/|伊八點去上班 (go → goes)}}{{ex:She studies English.|/ʃɪ ˈstʌdɪz ˈɪŋglɪʃ/|伊咧學英語 (study → studies)}}
<h3>共 -s 讀出來</h3>
<p>-s 有三種讀法，佮名詞複數的 -s 仝款：works 讀 /s/，goes 讀 /z/，watches 讀 /ɪz/。字尾的子音毋通吞去：works、likes 的字尾攏是 /ks/，兩个音攏愛讀出來。</p>
{{ex:works|/ˈwɝks/|做工課（第三人稱單數）}}{{ex:goes|/ˈgoz/|去（第三人稱單數）}}{{ex:watches|/ˈwɑtʃɪz/|看（第三人稱單數）}}
<h3>否定佮疑問用 does</h3>
<p>用 <b>doesn't</b> 抑是 <b>Does</b> 的時，-s 就徙去 does 遐，後壁的動詞用原形。</p>
{{ex:He doesn't drink coffee.|/hɪ ˈdʌzṇt ˈdrɪŋk ˈkɔfɪ/|伊無啉咖啡}}{{ex:Does she live here?|/dəz ʃɪ ˈlɪv ˈhɪr/|伊敢蹛佇遮？}}
<div class="tip">上捷看著的錯誤：<b>She work here.</b> ✗ → <b>She works here.</b> ✓，<b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Taipei. 空格愛填啥？",["live","lives","living","is live"],1,"主詞是 she，動詞用第三人稱單數 lives。"],["He ___ like coffee. 空格愛填啥？",["don't","isn't","doesn't","not"],2,"主詞是 he，否定用 doesn't。"],["「伊有一台車」（伊 = she）英語按怎講？",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"have 佇 she 後壁變做 has。"]],
practice:[
["mc","My brother ___ in Tokyo.","works","work","working","is work","主詞是一个人，動詞用第三人稱單數 works。"],
["mc","「伊無啉咖啡」（伊 = he）=","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he 的否定是 doesn't + 原形動詞。"],
["mc","「伊敢蹛佇遮？」（伊 = she）=","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does 後壁的動詞無加 -s。"],
["mc","have → she ___","has","haves","have","is have","have 的第三人稱單數是 has。"],
["mc","study → he ___","studies","studys","study","studyes","子音字母 + y 結尾，y 改做 i 閣加 -es。"],
["or","伊佇銀行上班","She works at a bank","work the","主詞是 she，用 works；頭一擺提著的工作所在用冠詞 a。"],
["or","伊有兩隻狗","He has two dogs","have dog","主詞是 he，用 has；兩隻狗用複數 dogs。"],
["or","伊毋食肉","She doesn't eat meat","eats","doesn't 後壁用無加 -s 的原形動詞。"],
["fi","He __ soccer.","伊佮意跤球","likes","like|liking|is like","主詞是 he，用第三人稱單數 likes。"],
["fi","__ she speak English?","伊敢會曉講英語？","Does","Do|Is|Are","主詞是 she，疑問句用 Does。"],
["fi","She __ to work at eight.","伊八點去上班","goes","go|going|gos","go 的第三人稱單數是 goes。"],
["ty","伊有一台車（伊 = he）","He has a car|He's got a car","has · car — 冠詞 a","have","主詞是 he，用 has；一台車，加冠詞 a。"],
["ty","伊佮意貓（伊 = she）","She likes cats|She loves cats","likes · cat — 複數","cat","主詞是 she，用第三人稱單數 likes；泛指貓用複數 cats。"],
["ty","伊無蹛佇遮（伊 = he）","He doesn't live here","doesn't · live · here","lives","doesn't 後壁用原形動詞。"]]},
{ id:"countable", title:"可數名詞佮不可數名詞：some、any、much、many", blurb:"water 頭前袂使加 a，後壁嘛袂使加 -s。可數用 many，不可數用 much。", deck:"餐廳點菜", body:`
<p>台語算啥物攏用量詞：一杯水、一項資料、一組家具、一粒蘋果，所以干焦看台語，看袂出佗一个名詞「不可數」。英語的名詞分做<b>可數名詞</b> (countable) 佮<b>不可數名詞</b> (uncountable)，愛一个一个記。</p>
<div class="tbl"><table><tr><th>可數名詞</th><th>不可數名詞</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time, information, advice, homework</td></tr><tr><td>會使加 a / an、數字、-s</td><td>袂使加 a / an、數字、-s</td></tr></table></div>
<p>下面這寡字特別濟人加 -s 加毋著，其實攏是不可數：<b>staff、vocabulary、research、information、equipment、furniture、advice、luggage、homework</b>。<b>staffs</b>、<b>furnitures</b>、<b>a research</b> ✗ → <b>staff</b>、<b>furniture</b>、<b>research</b> ✓</p>
<h3>some 佮 any</h3>
<p>表示「一寡」，肯定句用 <b>some</b>，否定句佮疑問句用 <b>any</b>。毋過請求佮招呼雖然是疑問句，嘛用 some：Can I have some water? / Would you like some tea?</p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌnɪ/|我有一寡錢}}{{ex:I don't have any money.|/aɪ ˈdont ˈhæv ˈɛnɪ ˈmʌnɪ/|我一箍銀嘛無}}{{ex:Do you have any questions?|/də jʊ ˈhæv ˈɛnɪ ˈkwɛstʃənz/|你敢有問題？}}
<h3>many 佮 much</h3>
<p>可數名詞用 <b>many</b> + 複數，不可數名詞用 <b>much</b>。<b>a lot of</b> 兩種攏會使用。</p>
{{ex:How many people?|/ˈhaʊ ˈmɛnɪ ˈpipḷ/|幾位？}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|偌濟錢？}}{{ex:I don't have much time.|/aɪ ˈdont ˈhæv ˈmʌtʃ ˈtaɪm/|我無啥物時間}}
<h3>英語的「量詞」</h3>
<p>干焦算不可數名詞的時，才用 a glass of、a cup of、a piece of 這款講法。可數名詞直接加數字佮 -s，免量詞：three books，袂講 three pieces of book。</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔtɚ/|一杯水}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔfɪ/|一杯咖啡}}{{ex:a piece of advice|/ə ˈpis əv ədˈvaɪs/|一个建議}}
<div class="tip">上捷看著的錯誤：<b>a water</b>、<b>many money</b>、<b>informations</b> ✗ → <b>some water</b>、<b>much money</b>、<b>information</b> ✓</div>`,
check:[["How ___ people are there? 空格愛填啥？",["much","many","any","a"],1,"people 是可數名詞，用 many。"],["下面佗一个是不可數名詞？",["apple","chair","water","friend"],2,"water 頭前袂使加 a，後壁嘛袂使加 -s。"],["I don't have ___ money. 空格愛填啥？",["some","a","many","any"],3,"否定句用 any。"]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water 是不可數名詞，袂使用 a 抑是 many。"],
["mc","How ___ time do we have?","much","many","any","a","time 是不可數名詞，用 much。"],
["mc","「你敢有問題？」=","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any 後壁的可數名詞用複數。"],
["mc","「一杯水」=","a glass of water","a water glass of","one waters","a glass water","不可數名詞用 a glass of 來算。"],
["mc","I have ___ friends in Taipei.","many","much","a","an","friends 是可數名詞的複數，用 many。"],
["or","我有一寡錢","I have some money","a moneys","money 是不可數名詞，袂使加冠詞 a，嘛無複數 -s。"],
["or","麻煩你，兩粒蘋果","Two apples please","apple","兩粒蘋果，用複數 apples。"],
["or","我無啥物時間","I don't have much time","many","time 是不可數名詞，用 much。"],
["fi","How __ is this?","這个偌濟錢？","much","many|any|some","問價數用 how much。"],
["fi","I don't have __ questions.","我無問題","any","some|much|a","否定句用 any。"],
["fi","a cup __ coffee","一杯咖啡","of","for|in|a","用 a cup of … 來算。"],
["ty","會使予我一寡水無？（用 Can I …）","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — 無加冠詞","a","water 是不可數名詞，無加冠詞 a，愛用 some。"],
["ty","你敢有問題？（用 do）","Do you have any questions","any · question — 複數","question","any 後壁的可數名詞用複數 questions。"],
["ty","幾位？（用 people）","How many people","how many · people","much","人是可數的，用 many。"]]},
{ id:"object-have", title:"受格 me、him、her 佮 have", blurb:"動詞後壁毋用 I，愛用 me。閣有萬用動詞 have。", deck:"自我介紹", body:`
<p>台語的「我」「伊」囥佇佗位攏袂變：我捌伊，伊捌我。英語的代名詞愛<b>變形</b>：囥佇動詞抑是介系詞<b>後壁</b>，愛用受格（做受詞的時的形）。</p>
<div class="tbl"><table><tr><th>台語</th><th>我</th><th>你</th><th>伊</th><th>伊</th><th>阮 / 咱</th><th>𪜶 (in)</th></tr><tr><td>主格</td><td class="k">I</td><td class="k">you</td><td class="k">he</td><td class="k">she</td><td class="k">we</td><td class="k">they</td></tr><tr><td>受格</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃɪ ˈnoz mɪ/|伊捌我}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|我佮意伊}}{{ex:Can you help us?|/kən jʊ ˈhɛlp əs/|你會當鬥相共阮無？}}{{ex:I work with her.|/aɪ ˈwɝk wɪð hɚ/|我佮伊做伙做工課}}
<h3>he 抑是 she，his 抑是 her</h3>
<p>台語查埔、查某、物件攏是「伊」，「伊的」嘛無分，所以講英語的時真容易共 he 佮 she、his 佮 her 講毋著（像 <b>My mother… he</b>）。英語一定愛分：指查某人用 she / her，指查埔人用 he / him / his，指物件用 it / its。</p>
{{ex:My sister is a nurse. She works at night.|/maɪ ˈsɪstɚ ɪz ə ˈnɝs ‖ ʃɪ ˈwɝks ət ˈnaɪt/|阮阿姊是護理師，伊暗時上班}}{{ex:This is Mary and her husband.|/ˈðɪs ɪz ˈmɛrɪ ənd hɚ ˈhʌzbənd/|這位是 Mary 佮伊的翁}}
<h3>have：有、擁有</h3>
<p>用人做主詞講「有……」的時用 have。厝內的人、物件、時間攏會使用 have。</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtu ˈbrʌðɚz/|我有兩个兄弟}}{{ex:Do you have a pen?|/də jʊ ˈhæv ə ˈpɛn/|你敢有筆？}}{{ex:I don't have time.|/aɪ ˈdont ˈhæv ˈtaɪm/|我無時間}}
<h3>have：食、啉</h3>
<p>三頓的名頭前無加冠詞。</p>
{{ex:Let's have lunch.|/ˈlɛts ˈhæv ˈlʌntʃ/|咱來食中晝}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔfɪ ˈɛvrɪ ˈmɔrnɪŋ/|我逐工早起攏啉咖啡}}
<div class="tip">上捷看著的錯誤：<b>She knows I.</b> ✗ → <b>She knows me.</b> ✓，講阿姊的時講 <b>He works at night.</b> ✗ → <b>She works at night.</b> ✓</div>`,
check:[["I like ___.（伊，查埔）",["he","his","him","he's"],2,"動詞後壁用受格 him。"],["Can you help ___?（阮）",["us","we","our","ours"],0,"動詞後壁用受格 us。"],["「你敢有筆？」英語按怎講？",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have 是一般動詞，疑問句用 Do。"]],
practice:[
["mc","She knows ___.（我）","me","I","my","mine","動詞後壁用受格 me。"],
["mc","I like ___.（𪜶 (in)，彼寡人）","them","they","their","theirs","動詞後壁用受格 them。"],
["mc","「你會當鬥相共阮無？」=","Can you help us?","Can you help we?","Can you help our?","Can us help you?","動詞後壁用 us。"],
["mc","「咱來食中晝」=","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","三頓的名頭前無加冠詞。"],
["mc","「我有兩个兄弟」=","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","厝內的人用 have 來講；兩个兄弟用複數。"],
["or","你敢有筆？","Do you have a pen","the pens","隨便佗一支筆攏好，用冠詞 a 佮單數 pen。"],
["or","我佮意伊（查某）","I like her","she","動詞後壁用受格 her。"],
["or","我有兩个姊妹","I have two sisters","sister a","兩个姊妹用複數 sisters，袂使加冠詞 a。"],
["fi","Call __ tonight.","今仔暗敲電話予我","me","I|my|mine","動詞後壁用 me。"],
["fi","I work with __.","我佮伊（查埔）做伙做工課","him","he|his|he's","介系詞後壁嘛是用受格。"],
["fi","She __ a dog.","伊有飼一隻狗","has","have|is|haves","主詞是 she，用第三人稱單數 has。"],
["ty","你會當鬥相共我無？","Can you help me|Could you help me","can you · help · me","I","動詞後壁用受格 me。"],
["ty","你敢有筆？（用 do）","Do you have a pen","do you have · pen — 冠詞 a","the","隨便揣一支筆，用冠詞 a。"],
["ty","我有真濟朋友","I have many friends|I have a lot of friends","have · many · friend — 複數","friend","many 後壁接複數 friends。"]]},
{ id:"can-like", title:"can、like + -ing、I'd like：會曉的代誌佮想欲愛的物件", blurb:"講家己會曉做啥物、佮意做啥物、這馬想欲愛啥物。", deck:"開講", body:`
<p>自我介紹佮點菜的時隨就用會著的三个句型。</p>
<h3>can：會曉、會使</h3>
<p><b>can + 原形動詞</b>。主詞是 he、she 嘛無加 -s。台語的「會」是 can 嘛是 will：「我會泅水」是 <b>I can swim</b>（我會曉泅），毋是 I will swim（我等一下欲去泅）。</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|我會曉泅水}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|我袂曉駛車}}{{ex:Can you speak Taiwanese?|/kən jʊ ˈspik ˌtaɪwəˈniz/|你敢會曉講台語？}}
<h3>like + -ing：佮意做某項代誌</h3>
<p>講興趣的時，like、love 後壁接動詞的 <b>-ing 形式</b>。台語講「我真佮意」，毋過英語袂使講 I very like，愛講 I really like 抑是 I like … very much。</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|我佮意煮食}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑtʃɪŋ ˈmuvɪz/|我上佮意看電影}}{{ex:I really like reading.|/aɪ ˈriəlɪ ˈlaɪk ˈridɪŋ/|我真佮意看冊}}{{ex:I like it very much.|/aɪ ˈlaɪk ɪt ˈvɛrɪ ˈmʌtʃ/|我真佮意}}{{ex:I don't like running.|/aɪ ˈdont ˈlaɪk ˈrʌnɪŋ/|我無佮意跑步}}
<h3>I'd like：我想欲愛……</h3>
<p><b>I like</b> 是一直攏佮意，<b>I'd like</b> 是這馬想欲愛，口氣較有禮貌。點菜的時用 I'd like。</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔfɪ ˈpliz/|麻煩你，我欲一杯咖啡}}{{ex:Would you like some tea?|/wəd jʊ ˈlaɪk ˈsʌm ˈti/|你欲啉一寡茶無？}}
<div class="tip">上捷看著的錯誤：<b>He can swims.</b> ✗ → <b>He can swim.</b> ✓，佇咖啡廳講 <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓，<b>I very like it.</b> ✗ → <b>I really like it.</b> ✓</div>`,
check:[["She can ___ very well. 空格愛填啥？",["sings","sing","singing","to sing"],1,"can 後壁接原形動詞。"],["「我佮意煮食」英語按怎講？",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like 後壁用 -ing 形式。"],["佇咖啡廳點飲料，上自然的講法是？",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"這馬想欲愛的物件用 I'd like 來講。"]],
practice:[
["mc","He can ___ Japanese.","speak","speaks","speaking","to speak","can 後壁接原形動詞。"],
["mc","「我袂曉駛車」=","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can 的否定是 can't。"],
["mc","「我佮意看電影」=","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like 後壁用 -ing；泛指電影用複數 movies。"],
["mc","點飲料的時講「麻煩你，我欲一杯咖啡」=","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","這馬想欲愛的物件用 I'd like。"],
["mc","「你欲啉一寡茶無？」=","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","請人食物件、啉物件用 Would you like …?"],
["or","麻煩你，我欲一杯咖啡","I'd like a coffee please","the coffees","點的是一杯，用冠詞 a 佮單數 coffee。"],
["or","我佮意看冊","I like reading books","book read","like 後壁用 -ing；泛指冊用複數 books。"],
["or","你敢會曉泅水？","Can you swim","swimming","can 後壁接原形動詞。"],
["fi","I can't __.","我袂曉泅水","swim","swimming|swims|to swim","can't 後壁接原形動詞。"],
["fi","I like __ music.","我佮意聽音樂","listening to","listen to|listen|to listening","like 後壁用 -ing 形式。"],
["fi","__ like a sandwich, please.","麻煩你，我欲一份三明治","I'd|I would","I|I'm|I can","點菜用 I'd like。"],
["ty","我佮意煮食","I like cooking|I love cooking|I like to cook|I love to cook","like · cook — 用 -ing","cook","like 後壁用 -ing 形式。"],
["ty","麻煩你，我欲一份三明治（用 I'd like）","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — 冠詞 a","the","隨便一份三明治，用冠詞 a。"],
["ty","我佮意狗","I like dogs|I love dogs","like · dog — 複數","dog","泛指狗用複數 dogs。"]]},
{ id:"continuous", title:"當咧做的代誌：be + -ing", blurb:"定定做的代誌用現在式，這馬當咧做的代誌用 be + -ing。", deck:"開講", body:`
<p>台語的「咧」「佇咧」佮英語的現在進行式 (present continuous) 真像：「我咧做工課」→ I'm working. 無仝的是英語一定愛有 <b>be 動詞</b>，動詞嘛一定愛變做 <b>-ing</b>，兩項攏袂使少。</p>
{{ex:I'm working now.|/aɪm ˈwɝkɪŋ ˈnaʊ/|我這馬咧做工課}}{{ex:She's cooking dinner.|/ʃɪz ˈkʊkɪŋ ˈdɪnɚ/|伊咧煮暗頓}}{{ex:It's raining.|/ɪts ˈrenɪŋ/|咧落雨}}
<h3>疑問句佮否定句</h3>
{{ex:What are you doing?|/ˈwʌt ɚ jʊ ˈduɪŋ/|你咧創啥物？}}{{ex:Are you listening?|/ɚ jʊ ˈlɪsənɪŋ/|你敢有咧聽？}}{{ex:I'm not sleeping.|/aɪm ˈnɑt ˈslipɪŋ/|我無咧睏}}
<h3>佮現在式比較</h3>
<div class="tbl"><table><tr><th>定定（現在式）</th><th>這馬 (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>無用 -ing 的動詞</h3>
<p>like、know、want、need、have（擁有）這款表示<b>狀態</b>的動詞，就算咧講這馬，嘛是用現在式，無加 -ing。</p>
{{ex:I know him.|/aɪ ˈno hɪm/|我捌伊}}{{ex:I want some water.|/aɪ ˈwɑnt ˈsʌm ˈwɔtɚ/|我想欲啉一寡水}}
<div class="tip">上捷看著的錯誤是漏 be 動詞：<b>I working.</b> ✗ → <b>I'm working.</b> ✓，<b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["「你咧創啥物？」英語按怎講？",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"當咧做的代誌用 be + -ing 來問。"],["I ___ coffee every morning. 空格愛填啥？",["am drinking","drinking","drink","am drink"],2,"逐工的習慣用現在式。"],["下面佗一句才著？",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know、want、have（擁有）無用 -ing 形式。"]],
practice:[
["mc","「我這馬咧做工課」=","I'm working now.","I work now am.","I'm work now.","I working now.","當咧做的代誌用 be + -ing。"],
["mc","「伊咧煮暗頓」（伊 = she）=","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","用 be + -ing；三頓的名頭前無加冠詞。"],
["mc","佗一句是咧講逐工做的代誌？","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","習慣用現在式。"],
["mc","「你咧創啥物？」=","What are you doing?","What do you doing?","What are you do?","What you are doing?","詞序是疑問詞 + be + 主詞 + -ing。"],
["mc","「我捌伊」（伊 = he）=","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know 無用 -ing 形式。"],
["or","我咧看冊","I'm reading a book","read books","咧看的是一本冊，用冠詞 a 佮單數 book。"],
["or","囡仔咧耍","The kids are playing","kid is","囡仔毋但一个，用複數 kids 佮 are。"],
["or","這馬咧落雨","It's raining now","rains","這馬當咧發生的代誌用 be + -ing。"],
["fi","I'm __ TV.","我咧看電視","watching","watch|watches|to watch","be 後壁接 -ing 形式。"],
["fi","What __ you doing?","你咧創啥物？","are","do|is|does","主詞是 you，用 are。"],
["fi","She __ working today.","伊今仔日免上班","isn't|is not","doesn't|don't|not","be + -ing 的否定是 isn't。"],
["ty","我這馬咧煮飯","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — 用 -ing","cook","當咧做的代誌用 be + -ing。"],
["ty","我咧看電影（用 movie）","I'm watching a movie","I'm · watching · movie — 冠詞 a","the","隨便一齣電影，用冠詞 a。"],
["ty","囡仔咧睏（幾若个）","The kids are sleeping|The children are sleeping","kids · are · sleeping — 複數","kid","囡仔毋但一个，用複數 kids 佮 are。"]]},
{ id:"past", title:"過去式：was / were 佮 -ed", blurb:"be 動詞用 was / were，一般動詞加 -ed。疑問佮否定用 did。", deck:"開講", body:`
<p>台語講過去的代誌，定定干焦加一个時間詞，抑是用「有 + 動詞」：「我昨昏有去上班」。英語袂使干焦靠 yesterday，動詞本身愛變做過去式 (past tense)。be 動詞佮一般動詞的過去式無仝。</p>
<h3>「有 + 動詞」毋是 have</h3>
<p>台語的「我有去」是咧講「彼項代誌有發生」，毋過這个「有」毋是英語的 have：<b>I have went yesterday.</b> ✗ → <b>I went yesterday.</b> ✓。人問 Did you go?，回答 <b>Yes, I did.</b>，毋是 Yes, I have。「矣」嘛毋是過去式：「落雨矣」是這馬開始落，英語講 It's raining.</p>
{{ex:I went yesterday.|/aɪ ˈwɛnt ˈjɛstɚde/|我昨昏有去}}{{ex:Yes, I did.|/ˈjɛs aɪ ˈdɪd/|有，我有去（回答 Did you …?）}}
<h3>be 動詞的過去式：was / were</h3>
<p>I、he、she、it 用 <b>was</b>，you、we、they 用 <b>were</b>。</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪɚd/|我彼時真忝}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|（彼擺）真好耍}}{{ex:We were at home.|/wɪ wɚ ət ˈhom/|阮彼時佇厝}}{{ex:Were you busy?|/wɚ jʊ ˈbɪzɪ/|你彼時敢無閒？}}
<h3>一般動詞的過去式：加 -ed</h3>
<p>動詞後壁加 <b>-ed</b>，主詞是啥人攏仝款。</p>
{{ex:I worked yesterday.|/aɪ ˈwɝkt ˈjɛstɚde/|我昨昏有上班}}{{ex:We watched a movie.|/wɪ ˈwɑtʃt ə ˈmuvɪ/|阮看一齣電影}}{{ex:She called me.|/ʃɪ ˈkɔld mɪ/|伊有敲電話予我}}
<h3>共 -ed 讀出來</h3>
<p>-ed 有三種讀法：worked、walked 讀 /t/，called、enjoyed 讀 /d/，wanted、needed 讀 /ɪd/。字尾的子音就是「過去」的記號，一定愛讀出來，毋過莫加一个音節：walked 干焦一个音節，enjoyed 的字尾干焦一个 /d/，毋是 "enjoyded"。</p>
{{ex:walked|/ˈwɔkt/|行（walk 的過去式）}}{{ex:enjoyed|/ɪnˈdʒɔɪd/|享受（過去式）}}{{ex:wanted|/ˈwɑntɪd/|想欲（want 的過去式）}}
<h3>否定佮疑問用 did</h3>
<p>用 <b>didn't</b> 抑是 <b>Did</b> 的時，後壁的動詞變轉去原形。</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdṇt ˈwɝk ˈjɛstɚde/|我昨昏無上班}}{{ex:Did you call me?|/dɪd jʊ ˈkɔl mɪ/|你敢有敲電話予我？}}
<div class="tip">上捷看著的錯誤：<b>I yesterday work.</b> ✗ → <b>I worked yesterday.</b> ✓，<b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓，<b>I was work.</b> ✗ → <b>I worked.</b> ✓，<b>I have went.</b> ✗ → <b>I went.</b> ✓</div>`,
check:[["They ___ at home yesterday. 空格愛填啥？",["was","were","did","are"],1,"主詞是 they，用 were。"],["「我昨昏無上班」英語按怎講？",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't 後壁接原形動詞。"],["Did you ___ the movie? 空格愛填啥？",["watch","watched","watching","watches"],0,"Did 後壁接原形動詞。"]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","主詞是 I，用 was。"],
["mc","「阮看一齣電影」（已經看矣）=","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","一般動詞的過去式加 -ed；有 yesterday 嘛愛用過去式。"],
["mc","「你昨昏敢有敲電話？」=","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did 後壁接原形動詞。"],
["mc","「（彼擺）真好耍」=","It was fun.","It were fun.","It did fun.","It funned.","主詞是 it，用 was。"],
["mc","「你彼時敢無閒？」=","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy 表示狀態，用 be 動詞來問。"],
["or","阮看一齣電影（已經看矣）","We watched a movie","watch movies","一齣電影，用冠詞 a 佮單數 movie。"],
["or","我有佮我的朋友做伙耍","I played with my friends","friend play","朋友毋但一个，用複數 friends。"],
["or","我昨昏無上班","I didn't work yesterday","worked","didn't 後壁接原形動詞。"],
["fi","We __ at home last night.","阮昨暗佇厝","were","was|did|are","主詞是 we，用 were。"],
["fi","I __ soccer yesterday.","我昨昏有踢跤球","played","play|playing|was play","過去式加 -ed，有 yesterday 嘛袂使省。"],
["fi","__ you work yesterday?","你昨昏敢有上班？","Did","Were|Do|Was","一般動詞過去式的疑問句用 Did。"],
["ty","我彼時真忝（用 was）","I was tired|I was very tired|I was really tired","was · tired","were","主詞是 I，用 was。"],
["ty","我有看一齣電影（用 watch 佮 movie）","I watched a movie","watched · movie — 冠詞 a","the","一齣電影，加冠詞 a。"],
["ty","我有敲電話予我的朋友（幾若个，用 call）","I called my friends","called · my · friend — 複數","friend","朋友毋但一个，用複數 friends。"]]},
{ id:"irregular-past", title:"不規則動詞的過去式：went、ate、saw", blurb:"愈捷用的動詞愈無加 -ed。先記這 12 个。", deck:"開講", body:`
<p>上捷用的動詞，過去式定定是<b>不規則</b>的。這寡字佇學校的不規則動詞表攏有背過，這馬的目標是講話、拍字的時隨反應會出來。</p>
<div class="tbl"><table><tr><th>原形</th><th>過去式</th><th>原形</th><th>過去式</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Macau.|/aɪ ˈwɛnt tə məˈkaʊ/|我有去澳門}}{{ex:We ate pizza.|/wɪ ˈet ˈpitsə/|阮食披薩}}{{ex:I saw a movie.|/aɪ ˈsɔ ə ˈmuvɪ/|我看一齣電影}}{{ex:I met my friends.|/aɪ ˈmɛt maɪ ˈfrɛndz/|我佮我的朋友見面}}{{ex:I bought a book.|/aɪ ˈbɔt ə ˈbʊk/|我買一本冊}}
<p>真濟不規則動詞干焦靠母音來分現在佮過去，所以母音愛讀予準：sit /ˈsɪt/ → sat /ˈsæt/，leave /ˈliv/ → left /ˈlɛft/，feel /ˈfil/ → felt /ˈfɛlt/。</p>
<h3>疑問句佮否定句用原形</h3>
<p><b>did</b> 已經表示過去，所以後壁的動詞變轉去原形。</p>
{{ex:What did you do?|/ˈwʌt dɪd jʊ ˈdu/|你做啥物？}}{{ex:Where did you go?|/ˈwɛr dɪd jʊ ˈgo/|你去佗位？}}{{ex:I didn't go.|/aɪ ˈdɪdṇt ˈgo/|我無去}}
<div class="tip">上捷看著的錯誤：<b>I goed.</b> ✗ → <b>I went.</b> ✓，<b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["go 的過去式是？",["goed","gone","went","going"],2,"go 的過去式是 went。"],["「你做啥物？」（已經過去的代誌）英語按怎講？",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did 後壁接原形動詞 do。"],["I didn't ___ breakfast. 空格愛填啥？",["ate","eaten","eats","eat"],3,"didn't 後壁接原形動詞。"]],
practice:[
["mc","eat 的過去式是？","ate","eated","eat","eaten","eat 的過去式是 ate。"],
["mc","「你去佗位？」（已經去過）=","Where did you go?","Where did you went?","Where you went?","Where were you go?","did 後壁接原形動詞。"],
["mc","「我買一本冊」（已經買矣）=","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy 的過去式是 bought；一本冊，加冠詞 a。"],
["mc","see 的過去式是？","saw","seed","seen","sawed","see 的過去式是 saw。"],
["mc","「我無去」（過去的代誌）=","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't 後壁接原形動詞。"],
["or","我有看一齣電影","I saw a movie","see movies","一齣電影，用冠詞 a 佮單數 movie；see 的過去式是 saw。"],
["or","阮有食披薩","We ate pizza","eated","eat 的過去式是 ate。"],
["or","我有佮我的朋友見面","I met my friends","friend meet","朋友毋但一个，用複數 friends。"],
["fi","I __ to Tokyo last year.","我舊年有去東京","went","go|goed|gone","go 的過去式是 went。"],
["fi","What did you __?","你食啥物？（已經食矣）","eat","ate|eaten|eating","did 後壁接原形動詞。"],
["fi","She __ a new phone.","伊買一支新的手機仔","bought","buyed|buy|buys","buy 的過去式是 bought。"],
["ty","我有去澳門","I went to Macau","went · to · Macau","go","go 的過去式是 went。"],
["ty","我有買一本冊","I bought a book","bought · book — 冠詞 a","the","一本冊，加冠詞 a。"],
["ty","我有佮我的朋友見面（幾若个，用 meet）","I met my friends|I saw my friends","met · my · friend — 複數","friend","朋友毋但一个，用複數 friends。"]]},
{ id:"the", title:"閣看 the：當時用，當時毋用", blurb:"頭一擺提著用 a，閣提著用 the。泛指的物件啥物攏無加。", deck:"問路佮交通", body:`
<p>台語佮華語攏無冠詞 (articles)，所以真容易漏 a，嘛真容易加傷濟 the。上捷出錯的是<b>泛指</b>的時。這課專門練<b>愛用 the</b> 佮<b>啥物攏無加</b>的情形。</p>
<h3>頭一擺用 a，閣提著用 the</h3>
<p>對方頭一擺聽著的物件用 a；拄才講過、對方已經知影是佗一个的，用 the。</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔt ə ˈʃɝt ‖ ðə ˈʃɝt ɪz ˈblu/|我買一領衫，彼領衫是藍色的}}
<h3>一看就知是佗一个，用 the</h3>
<p>這間房間的窗仔、附近彼个車站，逐家攏知是指佗一个，頭一擺講就用 the。另外，台語的「這」「彼」毋等於 the：「這本冊」是 this book；無加啥物的名詞嘛毋等於 the。</p>
{{ex:Can you open the window?|/kən jʊ ˈopən ðə ˈwɪndo/|你會當共窗仔開開無？}}{{ex:Where's the subway station?|/ˈwɛrz ðə ˈsʌbwe ˈsteʃən/|地鐵站佇佗位？}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑt təˈde/|今仔日日頭真炎}}
<h3>泛指無加 the</h3>
<p>泛指一類物件抑是抽象的概念的時，無加冠詞，直接用複數名詞抑是不可數名詞。</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuzɪk/|我佮意音樂（毋講 I like the music）}}{{ex:Dogs are friendly.|/ˈdɔgz ɚ ˈfrɛndlɪ/|狗攏真友善（毋講 The dogs are friendly）}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔrt/|人生真短（毋講 The life is short）}}
<h3>地名大部分無加 the</h3>
<p>Taiwan、Taipei、Yangmingshan、Taipei 101 這寡地名頭前無加 the；毋過 the MRT（捷運）就愛加。</p>
{{ex:I live in Taipei.|/aɪ ˈlɪv ɪn ˌtaɪˈpe/|我蹛佇台北}}{{ex:I take the MRT to work.|/aɪ ˈtek ðɪ ˌɛm ɑr ˈti tə ˈwɝk/|我坐捷運去上班}}
<h3>無加冠詞的固定講法</h3>
<p>捷用的地點、交通、三頓的講法，規句記起來。</p>
{{ex:I go to work by bus.|/aɪ ˈgo tə ˈwɝk baɪ ˈbʌs/|我坐公車去上班}}{{ex:I'm at home.|/aɪm ət ˈhom/|我佇厝}}{{ex:I go to bed at eleven.|/aɪ ˈgo tə ˈbɛd ət ɪˈlɛvən/|我十一點去睏}}
<div class="tip">先問家己：「對方敢知影是<b>佗一个</b>？」知影就用 the，毋知就用 a；泛指就啥物攏無加：<b>The money is important.</b> ✗ → <b>Money is important.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. 空格愛填啥？",["A","An","The","（免填）"],2,"拄才提著彼隻貓，用 the。"],["I go to ___ work by bus. 空格愛填啥？",["a","the","an","（免填）"],3,"go to work 無加冠詞。"],["想欲請人共這間房間的窗仔開開，愛按怎講？",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"逐家攏知是佗一扇窗仔，用 the。"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","拄才提著彼領衫，用 the。"],
["mc","「（附近彼个）車站佇佗位？」=","Where's the station?","Where's a station?","Where's station?","Where the station?","指附近彼个車站，用 the。"],
["mc","下面佗一句才著？","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work、by bus 攏無加冠詞。"],
["mc","「日頭真炎」=","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","獨一無二的物件頭前加 the。"],
["mc","「我佇厝」=","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home 無加冠詞。"],
["or","你會當共窗仔開開無？","Can you open the window","a windows","逐家攏知是佗一扇窗仔，用冠詞 the。"],
["or","我坐公車去上班","I go to work by bus","the a","go to work、by bus 攏無加冠詞。"],
["or","彼隻狗真大","The dog is big","A dogs","進前提過彼隻狗，用冠詞 the。"],
["fi","I saw a movie. __ movie was great.","我看一齣電影，彼齣電影真好看","The","A|An|Some","拄才提著彼齣電影，用 the。"],
["fi","Where's __ bathroom?","便所佇佗位？","the","a|an|some","指這棟樓內底彼間便所，用 the。"],
["fi","I have __ idea.","我有一个主意","an","a|the|some","頭一擺提著，閣 idea 是母音開頭，用 an。"],
["ty","你會當共門關起來無？（用 Can you … close）","Can you close the door|Could you close the door","can you · close · door — 冠詞 the","a","逐家攏知是佗一扇門，用冠詞 the。"],
["ty","（附近彼个）車站佇佗位？","Where is the station|Where's the station","where · station — 冠詞 the","a","指附近彼个車站，用冠詞 the。"],
["ty","我佇厝","I'm at home|I'm home","I'm · at · home — 無加冠詞","the","home 頭前無加冠詞。"]]},
{ id:"adjectives", title:"形容詞佮比較：bigger、more expensive、the best", blurb:"形容詞囥佇名詞頭前，免「的」。比較級用 -er / more，最高級用 the -est / the most。", deck:"買物件佮付錢", body:`
<p>形容詞囥佇名詞<b>頭前</b>，抑是 be 動詞<b>後壁</b>。台語講「大的袋仔」，英語免「的」：a big bag。另外，台語講「這个袋仔真大」，句內無「是」；英語就一定愛有 be 動詞：This bag is big.（「伊真媠」嘛是 She is very pretty，毋是 She very pretty。）</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|一个大袋仔}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|這个袋仔真大}}{{ex:It's too small.|/ɪts ˈtu ˈsmɔl/|傷細矣}}
<p>台語的「真」會使囥佇動詞頭前（「我真佮意」），毋過英語的 very 干焦會使修飾形容詞佮副詞：<b>I very like it.</b> ✗ → <b>I really like it.</b> / <b>I like it very much.</b> ✓</p>
<h3>比較級：-er 抑是 more</h3>
<p>短的字加 <b>-er</b>，長的字頭前加 <b>more</b>。「比……較……」是 <b>than</b>，囥佇形容詞後壁：「伊比我較懸」是 He's taller than me.</p>
<div class="tbl"><table><tr><th>原級</th><th>比較級</th><th>最高級</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃipɚ/|這个較俗}}{{ex:It's more expensive than that one.|/ɪts ˈmɔr ɪkˈspɛnsɪv ðən ˈðæt ˈwʌn/|這个比彼个較貴}}{{ex:Do you have a bigger size?|/də jʊ ˈhæv ə ˈbɪgɚ ˈsaɪz/|敢有較大號的？}}
<h3>最高級頭前加 the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbɛst ˈrɛstərɑnt ˈhɪr/|這間是遮上好的餐廳}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃipɪst/|佗一个上俗？}}
<h3>-ed 抑是 -ing：bored / boring</h3>
<p>講人的感受用 -ed，講予人有這種感受的物件用 -ing。</p>
{{ex:I'm bored.|/aɪm ˈbɔrd/|我真無聊}}{{ex:This movie is boring.|/ˈðɪs ˈmuvɪ ɪz ˈbɔrɪŋ/|這齣電影真無聊}}
<div class="tip">上捷看著的錯誤：<b>more cheaper</b>、<b>more better</b> ✗ → <b>cheaper</b>、<b>better</b> ✓。-er 佮 more 袂使做伙用。</div>`,
check:[["big 的比較級是？",["more big","biger","bigger","most big"],2,"big 是短的字，加 -er；伊是「一个母音字母 + 一个子音字母」結尾，所以 g 愛重複：bigger。"],["This is ___ expensive than that. 空格愛填啥？",["more","most","much","very"],0,"長的字，比較級佇頭前加 more。"],["good 的最高級是？",["the goodest","the most good","the better","the best"],3,"good 的最高級是 the best：good – better – the best。"]],
practice:[
["mc","cheap 的比較級是？","cheaper","more cheap","cheapper","most cheap","短的字加 -er。"],
["mc","「這个較貴」=","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","長的字頭前加 more。"],
["mc","「敢有較大號的？」=","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","詞序是冠詞 + 形容詞 + 名詞。"],
["mc","good 的比較級是？","better","gooder","more good","best","good 的比較級是 better：good – better – best。"],
["mc","「這間是上好的餐廳」=","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","最高級頭前加 the。"],
["or","敢有較大號的？","Do you have a bigger size","the sizes","隨便揣一个尺寸，用冠詞 a。"],
["or","這个上俗","This is the cheapest","a cheaper","最高級頭前愛加冠詞 the。"],
["or","這个比彼个較俗","This is cheaper than that","more","-er 形式的形容詞頭前無閣加 more。"],
["fi","It's __ small.","傷細矣","too","much|more|most","「傷」是 too。"],
["fi","This is cheaper __ that one.","這个比彼个較俗","than","then|that|more","「比……較……」是 than。"],
["fi","It's the __ expensive one.","這个是上貴的","most","more|much|very","長的字，最高級是 the most。"],
["ty","敢有較細號的？（用 Do you have）","Do you have a smaller size","smaller · size — 冠詞 a","the","隨便揣一个尺寸，用冠詞 a。"],
["ty","這个上好","This is the best|This one is the best","the · best — 冠詞 the","a","最高級頭前愛加冠詞 the。"],
["ty","這个較俗","This is cheaper|This one is cheaper","cheap — 比較級","more","短的字加 -er。"]]},
{ id:"going-to", title:"講計畫：be going to", blurb:"已經決定欲做的代誌，用 be going to + 原形動詞。", deck:"開講", body:`
<p>台語的「欲」是 want，嘛是 going to：「我欲去」會使是「我想欲去」，嘛會使是「我已經決定欲去」。英語分開講：想欲是 <b>want to</b>，<b>事先決定好的計畫</b>用 <b>be + going to + 原形動詞</b>。be 動詞袂使省，嘛毋通講 <b>I want go</b>。</p>
{{ex:I'm going to visit Macau.|/aɪm ˈgoɪŋ tə ˈvɪzɪt məˈkaʊ/|我欲去澳門}}{{ex:She's going to buy a car.|/ʃɪz ˈgoɪŋ tə ˈbaɪ ə ˈkɑr/|伊欲買一台車}}{{ex:We're going to have dinner.|/wɪr ˈgoɪŋ tə ˈhæv ˈdɪnɚ/|阮欲去食暗頓}}
<h3>否定佮疑問</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑt ˈgoɪŋ tə ˈgo/|我無欲去}}{{ex:Are you going to come?|/ɚ jʊ ˈgoɪŋ tə ˈkʌm/|你敢欲來？}}{{ex:What are you going to do this weekend?|/ˈwʌt ɚ jʊ ˈgoɪŋ tə ˈdu ˈðɪs ˈwikɛnd/|這个週末你欲創啥物？}}
<h3>看目前的跡象來預測</h3>
{{ex:It's going to rain.|/ɪts ˈgoɪŋ tə ˈren/|欲落雨矣}}
<h3>捷用的時間詞</h3>
<p>tomorrow（明仔載）、tonight（今仔暗）、this weekend（這个週末）、next week（後禮拜）一般囥佇句尾，毋囥佇動詞頭前。</p>
<div class="tip">講話的時 going to 定定讀做 <b>gonna</b>。另外莫漏 be 動詞：<b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["「我明仔載欲去揣朋友」英語按怎講？",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"結構是 be + going to + 原形動詞。"],["She ___ going to study. 空格愛填啥？",["am","are","is","be"],2,"主詞是 she，用 is。"],["「這个週末你欲創啥物？」英語按怎講？",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"詞序是疑問詞 + be + 主詞 + going to。"]],
practice:[
["mc","「我欲去澳門」（計畫）=","I'm going to go to Macau.","I going to go to Macau.","I'm going go to Macau.","I'm go to Macau going.","結構是 be + going to + 原形動詞。"],
["mc","They ___ going to come.","are","is","am","be","主詞是 they，用 are。"],
["mc","「欲落雨矣」=","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to 後壁接原形動詞。"],
["mc","「我無欲去」=","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","not 囥佇 be 動詞後壁。"],
["mc","「你敢欲來？」=","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","共 be 動詞徙去主詞頭前。"],
["or","伊欲買一台車","She's going to buy a car","the cars","一台車，用冠詞 a 佮單數 car。"],
["or","我欲去揣我的朋友（幾若个）","I'm going to meet my friends","friend","朋友毋但一个，用複數 friends。"],
["or","阮欲去食暗頓","We're going to have dinner","a","三頓的名 dinner 頭前無加冠詞。"],
["fi","I'm going __ study tonight.","我今仔暗欲讀冊","to","for|at|will","going to 後壁接原形動詞。"],
["fi","__ you going to come?","你敢欲來？","Are","Do|Is|Will","主詞是 you，用 Are。"],
["fi","It's going to __ tomorrow.","明仔載會落雨","rain","rains|raining|rained","going to 後壁接原形動詞。"],
["ty","我欲看一齣電影（用 going to 佮 movie）","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — 冠詞 a","the","隨便一齣電影，用冠詞 a。"],
["ty","你欲創啥物？（用 going to）","What are you going to do","what · going to · do","will","問計畫用 be going to。"],
["ty","我欲去揣我的朋友（幾若个，用 going to）","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — 複數","friend","朋友毋但一个，用複數 friends。"]]},
{ id:"joining", title:"連接句：and、but、or、so、because", blurb:"共兩句短短的句連做一句。because 佮 so 干焦用一个，袂使成對用。", deck:"心情佮反應", body:`
<p>干焦講短短的句，聽起來會硬硬。用這五个連接詞共句連起來，聽起來自然真濟。</p>
<h3>and、but、or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔfɪ ənd ˈti/|我佮意咖啡佮茶}}{{ex:I'm tired but happy.|/aɪm ˈtaɪɚd bət ˈhæpɪ/|我真忝，毋過真歡喜}}{{ex:Coffee or tea?|/ˈkɔfɪ ɚ ˈti/|咖啡抑是茶？}}
<h3>so：所以</h3>
<p>詞序是<b>原因 + so + 結果</b>。</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪɚd so aɪ ˈwɛnt ˈhom/|我真忝，所以就轉去厝矣}}
<h3>because：因為</h3>
<p>英語上捷看著的詞序是<b>結果 + because + 原因</b>，原因囥後壁。</p>
{{ex:I went home because I was tired.|/aɪ ˈwɛnt ˈhom bɪkəz aɪ wəz ˈtaɪɚd/|我轉去厝矣，因為我真忝}}{{ex:I stayed home because it was raining.|/aɪ ˈsted ˈhom bɪkəz ɪt wəz ˈrenɪŋ/|因為咧落雨，我留佇厝}}
<h3>成對的連接詞干焦留一个</h3>
<p>台語慣勢講「因為……所以……」「雖然……毋過……」。英語內底 because 佮 so、although 佮 but 袂使做伙出現，干焦會使揀一个。</p>
<p>另外，英語袂使干焦用一个逗號連兩个完整的句，中央愛有連接詞：<b>I was tired, I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓</p>
<h3>too：嘛</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtu/|我嘛佮意}}
<div class="tip">because 佮 so 袂使用佇仝一句：<b>Because I was tired, so I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. 空格愛填啥？",["because","but","so","or"],2,"原因佇前、結果佇後，用 so。"],["I stayed home ___ I was sick. 空格愛填啥？",["because","so","but","and"],0,"結果佇前、原因佇後，用 because。"],["問對方「欲咖啡抑是茶？」，愛按怎講？",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"兩个揀一个用 or。"]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","意思相反，用 but 連接。"],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","原因佇前、結果佇後，用 so。"],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","結果佇前、原因佇後，用 because。"],
["mc","「咖啡抑是茶？」=","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","兩个揀一个用 or。"],
["mc","「我真忝，毋過真歡喜」=","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","意思翻過來用 but。"],
["or","我佮意貓佮狗","I like cats and dogs","cat dog","泛指動物用複數 cats 佮 dogs。"],
["or","麻煩你，一杯咖啡佮一份三明治","A coffee and a sandwich please","the or","逐項各點一份，每一个名詞頭前攏加冠詞 a。"],
["or","我真枵，所以食物件","I was hungry so I ate","because","原因佇前、結果佇後，用 so。"],
["fi","I'm tired __ happy.","我真忝，毋過真歡喜","but","so|because|or","意思翻過來用 but。"],
["fi","I stayed home __ it was raining.","因為咧落雨，我留佇厝","because","so|but|or","結果佇前、原因佇後，用 because。"],
["fi","Coffee __ tea?","咖啡抑是茶？","or","so|but|because","兩个揀一个用 or。"],
["ty","我佮意咖啡佮茶","I like coffee and tea","like · coffee · and · tea — 無加冠詞","a","泛指的 coffee 佮 tea 無加冠詞。"],
["ty","我真忝，毋過真歡喜","I'm tired but happy|I'm tired but I'm happy|I'm very tired but happy|I'm very tired but very happy|I'm tired but very happy","tired · but · happy","so","意思翻過來用 but。"],
["ty","我佮意狗佮貓","I like dogs and cats|I like cats and dogs","dog · and · cat — 複數","dog","泛指動物用複數 dogs 佮 cats。"]]},
{ id:"tw-english", title:"台式英語陷阱：佇台灣通，出國愛換一个講法", blurb:"開電火毋是 open the light，「我有去」毋是 I have went。台式英語毋是錯，只是外國人無一定聽有。", deck:"台式英語陷阱", body:`
<p>咱逐工攏會看著、講著英語，有一寡講法佇台灣逐家攏聽有。<b>台式英語毋是錯，只是外國人無一定聽有。</b>這課分做四類：一个台語動詞對幾若个英語動詞；照台語句型直譯的講法（標 ✗，愛改）；本地用法（佇台灣照用，出國換一个講法）；加母音的外來語（發音愛改）。</p>
<h3>一个台語動詞，幾若个英語動詞</h3>
<div class="tbl"><table><tr><th>台語</th><th>英語</th><th>按怎分</th></tr><tr><td>「開」「關」（電火、電視）</td><td class="k">turn on / turn off</td><td>電器用 turn on / off；門、窗仔才用 open / close</td></tr><tr><td>「看」</td><td class="k">look at / see / watch / read</td><td>共目睭看過去 look at，看著 see，看電視、看球賽 watch，看冊 read</td></tr><tr><td>「聽」</td><td class="k">listen to / hear</td><td>用心聽 listen to，聽著 hear</td></tr><tr><td>「提」「紮」</td><td class="k">bring / take</td><td>紮來講話的人遮 bring，紮去別位 take</td></tr><tr><td>「借」</td><td class="k">borrow / lend</td><td>共人借 borrow，借人 lend</td></tr><tr><td>「講」</td><td class="k">say / tell / speak / talk</td><td>講啥物 say，講予某人知 tell，講某種話 speak，開講 talk</td></tr><tr><td>「食藥仔」</td><td class="k">take medicine</td><td>藥仔毋是 eat，用 take</td></tr></table></div>
{{ex:Can you turn on the light?|/kən jʊ ˈtɝn ˈɑn ðə ˈlaɪt/|你會當共電火開起來無？}}{{ex:I'm reading a book.|/aɪm ˈridɪŋ ə ˈbʊk/|我咧看冊}}{{ex:Can you lend me a pen?|/kən jʊ ˈlɛnd mɪ ə ˈpɛn/|你會當借我一支筆無？}}{{ex:Can I borrow your pen?|/kən aɪ ˈbɑro jʊr ˈpɛn/|我會使共你借筆無？}}{{ex:I'll take you to the station.|/aɪl ˈtek jʊ tə ðə ˈsteʃən/|我送你去車站}}{{ex:Take this medicine three times a day.|/ˈtek ˈðɪs ˈmɛdɪsṇ ˈθri ˈtaɪmz ə ˈde/|這款藥仔一工食三擺}}
<p>動詞揀著矣，後壁的名詞嘛莫袂記得冠詞：turn on <b>the</b> light，read <b>a</b> book，lend me <b>a</b> pen。take medicine 的 medicine 是泛指藥仔，無加 a。</p>
<h3>照台語句型直譯的講法</h3>
<div class="tbl"><table><tr><th>台語</th><th>直譯 ✗</th><th>英語講法 ✓</th></tr><tr><td>「我真佮意」</td><td>I very like it.</td><td class="k">I really like it. / I like it very much.</td></tr><tr><td>「我昨昏有去」</td><td>I have went yesterday.</td><td class="k">I went yesterday.</td></tr><tr><td>「有真濟人飼寵物」</td><td>There are many people have pets.</td><td class="k">Many people have pets.</td></tr><tr><td>「雖然落雨，毋過阮猶是有去」</td><td>Although it rained, but we went.</td><td class="k">Although it rained, we went.</td></tr><tr><td>「等我」</td><td>Wait me.</td><td class="k">Wait for me.</td></tr><tr><td>「人山人海」</td><td>People mountain people sea.</td><td class="k">It's very crowded.</td></tr></table></div>
{{ex:I really like it.|/aɪ ˈriəlɪ ˈlaɪk ɪt/|我真佮意}}{{ex:I went yesterday.|/aɪ ˈwɛnt ˈjɛstɚde/|我昨昏有去}}{{ex:Many people have pets.|/ˈmɛnɪ ˈpipḷ ˈhæv ˈpɛts/|有真濟人飼寵物}}{{ex:Although it rained, we went.|/ɔlˈðo ɪt ˈrend wɪ ˈwɛnt/|雖然落雨，阮猶是有去}}{{ex:Wait for me.|/ˈwet fɚ mɪ/|等我一下}}{{ex:It's very crowded.|/ɪts ˈvɛrɪ ˈkraʊdɪd/|人山人海}}
<h3>本地用法：台灣通，外國人無一定聽有</h3>
<div class="tbl"><table><tr><th>本地用法</th><th>佮外國人會使講</th></tr><tr><td>add oil（加油）</td><td class="k">Good luck! / You can do it! / Go for it!</td></tr><tr><td>MRT（捷運）</td><td>佇台北 MRT 無問題；佇美國講 <b>subway</b> 抑是 metro</td></tr><tr><td>機車</td><td><b>scooter</b>（較大台的是 motorcycle）；毋是 locomotive（彼是火車頭）</td></tr><tr><td>Teacher!（叫老師）</td><td>英語毋用 Teacher 叫人，愛講 <b>Ms. Lin</b> / <b>Mr. Lin</b></td></tr></table></div>
<p>add oil 2018 年已經收入《牛津英語詞典》，毋過真濟外國人猶是聽無，換做 Good luck! 抑是 You can do it! 上安全。</p>
{{ex:Good luck!|/ˈgʊd ˈlʌk/|加油！ / 祝你好運！}}{{ex:You can do it!|/jʊ kən ˈdu ɪt/|你一定做會到！}}{{ex:Where's the subway station?|/ˈwɛrz ðə ˈsʌbwe ˈsteʃən/|地鐵站佇佗位？}}{{ex:I ride a scooter to work.|/aɪ ˈraɪd ə ˈskutɚ tə ˈwɝk/|我騎機車去上班}}{{ex:Good morning, Ms. Lin.|/ˈgʊd ˈmɔrnɪŋ ˌmɪz ˈlɪn/|林老師，早！}}
<h3>日本時代的外來語：莫加母音</h3>
<p>台語有一寡英語詞是經過日語來的，中央加真濟母音：啤酒 (bì-lù)、巴士 (bá-suh)、卡車 (thoo-lá-khuh)、摩托車 (oo-tó-bái)、打火機 (lái-tà)。英語原本的字無遮的母音，字尾的子音嘛袂加 -u、-uh：</p>
{{ex:beer|/ˈbɪr/|啤酒（毋是 bì-lù）}}{{ex:bus|/ˈbʌs/|公車（毋是 bá-suh）}}{{ex:truck|/ˈtrʌk/|卡車（毋是 thoo-lá-khuh）}}{{ex:motorbike|/ˈmotɚbaɪk/|摩托車（毋是 oo-tó-bái）}}{{ex:lighter|/ˈlaɪtɚ/|打火機（毋是 lái-tà）}}
<div class="tip">記三項：直譯的句愛改 (<b>open the light</b> ✗ → <b>turn on the light</b> ✓，<b>I have went</b> ✗ → <b>I went</b> ✓)；本地用法佇台灣照用，出國換一个講法 (<b>Add oil!</b> → <b>Good luck!</b>)；外來語莫加母音 (<b>beer</b> 一个音節)。</div>`,
check:[["「你會當共電火開起來無？」英語按怎講？",["Can you open the light?","Can you turn on the light?","Can you open light?","Can you turn open the light?"],1,"開電火、開電視用 turn on，open 干焦用佇門、窗仔這款會當拍開的物件；指房間內彼葩電火，用冠詞 the。"],["想欲共袂曉華語的外國同事講「加油」，佗一句上好理解？",["Add oil!","Add gas!","Good luck!","Put oil!"],2,"Add oil 是本地用法，外國人無一定聽有，會使講 Good luck! 抑是 You can do it!"],["「我真佮意台灣菜」英語按怎講？",["I really like Taiwanese food.","I very like Taiwanese food.","I like very Taiwanese food.","I like very much Taiwanese food."],0,"very 袂使直接修飾動詞。「真佮意」講 really like 抑是 like … very much。"]],
practice:[
["mc","「開電火」=","turn on the light","open the light","open a light","turn the light open","開電火用 turn on，open 用佇門佮窗仔。"],
["mc","「我咧看冊」=","I'm reading a book.","I'm seeing a book.","I'm looking a book.","I'm watching a book.","看冊是 read；see 是看著，watch 是看節目抑是比賽。"],
["mc","「我昨昏有去」=","I went yesterday.","I have went yesterday.","I have go yesterday.","I did went yesterday.","台語的「有 + 動詞」講過去的代誌，英語用過去式 went，毋是 have。"],
["mc","「等我一下」=","Wait for me.","Wait me.","Wait to me.","Waiting me.","wait 後壁愛加 for 才會使接人。"],
["mc","「人山人海」=","It's very crowded.","People mountain people sea.","It's very people.","It has many people.","人山人海是台語、華語的講法，英語愛講 It's very crowded。"],
["or","麻煩你共電火關掉","Please turn off the light","a close","關電火用 turn off，毋用 close；指房間內彼葩電火，愛用冠詞 the。"],
["or","我想欲看一本冊","I want to read a book","books see","看冊用 read，毋用 see；「一本冊」是單數，加冠詞 a，毋用複數 books。"],
["or","我逐工食藥仔","I take medicine every day","eat a","食藥仔用 take；medicine 佇遮泛指藥仔，無加冠詞 a。"],
["or","我騎機車去上班","I ride a scooter to work","scooters an","機車是 scooter；一台機車，用冠詞 a 佮單數 scooter。"],
["fi","Can you turn __ the TV?","你會當共電視開起來無？","on","open|at|to","開電視用 turn on。"],
["fi","Can I __ your pen?","我會使共你借筆無？","borrow","lend|loan|rent","共人借來用是 borrow，借人是 lend。"],
["fi","Good morning, __ Lin.","林老師（查某），早！","Ms.|Miss|Mrs.","Teacher|Sir|Madam","英語毋用 Teacher 叫老師，愛用 Ms. / Mr. 加姓。"],
["ty","麻煩你共電火開起來","Turn on the light please|Please turn on the light|Can you turn on the light|Could you turn on the light|Turn on the lights please|Please turn on the lights|Turn the light on please|Please turn the light on|Can you turn the light on|Could you turn the light on|Turn on the light|Turn the light on","turn on · light — 冠詞 the","open","開電火用 turn on，毋用 open；指房間內彼葩電火，愛加冠詞 the。"],
["ty","便所佇佗位？（美式：restroom）","Where is the restroom|Where's the restroom|Where is the bathroom|Where's the bathroom","where · restroom — 冠詞 the","a","美式英語講 restroom 抑是 bathroom；逐家攏知是佗一間便所，用冠詞 the。"],
["ty","加油！（佮外國朋友講，用 luck）","Good luck|Good luck to you|Best of luck|Wish you good luck|I wish you good luck","good · luck","oil","Add oil 是本地用法；佮外國人講 Good luck! 較好理解。"],
["ty","我真佮意（用 really）","I really like it","really · like · it","very","very 袂使直接囥佇動詞頭前；「真佮意」講 really like。"]]},
];
