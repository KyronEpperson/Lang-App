/* yue-en stage A1: new lessons for Hong Kong Cantonese speakers. English side shared with ko-en (parity.js); Chinese text converted from
   zh-en and adapted per docs/profiles/yue.md; hk-english is a yue-only lesson. Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it 和 there：主語的位置不能空", blurb:"天氣、時間用 it；「某處有……」用 there is / there are。", deck:"閒談", body:`
<p>廣東話說「好凍」「落雨」「附近有間咖啡店」，都不需要主語。英文的主語位置不能空着，所以要用沒有實際意思的 <b>it</b> 和 <b>there</b> 來佔位。</p>
<h3>天氣、時間用 It</h3>
<p>這裏的 it 不是「它」，只是佔着主語的位置。<b>Today very hot.</b> ✗ → <b>It's very hot today.</b> ✓</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|今天很冷}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|現在三點}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|正在下雨}}
<h3>「某處有……」用 There is / There are</h3>
<p>中文的「有」既表示「擁有」，也表示「存在」：「我有車」和「呢度有間銀行」用的是同一個「有」。說某個地方存在某樣東西時，英文不用 have，而用 there is / there are 句式：一個用 <b>There is a …</b>，多個用 <b>There are … -s</b>。說話時常縮寫成 There's。</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|這附近有一間咖啡店}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|有兩個房間}}
<h3>疑問句和否定句</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|這裏有洗手間嗎？}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|還有座位嗎？}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|今天沒有巴士}}
<h3>和 have 區分開</h3>
<p>人擁有的東西用 <b>have</b>，某個地方存在的東西用 <b>there is</b>。所以不能說 <b>There has a bank near here</b>，也不能說 <b>In the park has many people</b>。</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|我有一輛車}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|外面有一輛車}}{{ex:There are many people in the park.|/ðer ər ˈmeni ˈpiːpl ɪn ðə ˈpɑːrk/|公園裏有很多人}}
<p>there are 後面如果還有另一個動詞，要用 who 接上，或者直接不用 there are：<b>There are many people have pets.</b> ✗ → <b>Many people have pets.</b> ✓</p>
{{ex:There are many people who have pets.|/ðer ər ˈmeni ˈpiːpl hu ˈhæv ˈpets/|有很多人養寵物}}
<div class="tip">最常見的錯誤：<b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>There have many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["「今天很熱」用英文怎樣說？",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"說天氣要用 it 佔着主語的位置。"],["There ___ three people. 空格應填甚麼？",["is","are","have","be"],1,"three people 是眾數，用 there are。"],["「這裏有洗手間嗎？」用英文怎樣說？",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"問某處有沒有某樣東西，用 Is there a …?"]],
practice:[
["mc","「正在下雨」=","It's raining.","Is raining.","There is raining.","Rain is.","說天氣用 it 作主語。"],
["mc","「這附近有一間咖啡店」=","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","某處存在某物用 there is；只有一間，加冠詞 a。"],
["mc","There ___ two rooms. 空格應填甚麼？","are","is","have","has","rooms 是眾數，所以用 are。"],
["mc","「現在三點」=","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","說時間也用 it 開頭。"],
["mc","「我有一輛車」=","I have a car.","There is a car me.","I am a car.","It's a car me.","人擁有的東西用 have。"],
["or","今天很冷","It's cold today","There's","說天氣用 it 作主語。"],
["or","外面有一輛車","There's a car outside","cars","只有一輛，用冠詞 a 和單數 car。"],
["or","有兩個座位","There are two seats","seat is","兩個或以上用 are 和眾數 seats。"],
["fi","__ cold today.","今天很冷","It's|It is","Is|There's|This","用 it 佔着主語的位置。"],
["fi","There __ a bank near here.","附近有一間銀行","is","are|have|be","只有一間，用 is。"],
["fi","__ there any seats?","還有座位嗎？","Are","Is|Do|Have","seats 是眾數，用 Are。"],
["ty","今天很熱","It's hot today","it · hot · today — 天氣用 it","There's","說天氣要用 it 開頭。"],
["ty","這裏有洗手間嗎？（美式：bathroom / restroom）","Is there a bathroom here|Is there a restroom here","is there · bathroom — 留意冠詞","the","第一次問到的一樣東西，加冠詞 a。"],
["ty","有兩個房間","There are two rooms","there are · two · room — 眾數","room","兩個房間，用眾數 rooms。"]]},

{ id:"plurals", title:"名詞眾數 -s 和 this / these、my / your", blurb:"兩個或以上一定加 -s。this 指一個，these 指多個。", deck:"購物與付款", body:`
<p>中文數東西靠量詞：「三本書」「兩隻貓」，名詞本身不變。英文剛好相反：不用量詞，但兩個或以上時名詞一定要用眾數 (plural)，加 <b>-s</b>。說了 three 也不能省掉 -s：<b>three book</b> ✗ → <b>three books</b> ✓</p>
<p>廣東話說「啲書」，靠「啲」表示不止一本，「書」字不變；「哋」只用於「我哋」「佢哋」這類代名詞。兩者都不等於 -s：英文的 -s 人和物都要加，每次都不能少。people 本身就是眾數，不再加 -s。</p>
<h3>眾數的構成</h3>
<div class="tbl"><table><tr><th>規則</th><th>例子</th></tr><tr><td>大多數加 -s</td><td class="k">book → books</td></tr><tr><td>s、x、ch、sh 結尾加 -es</td><td class="k">box → boxes</td></tr><tr><td>輔音字母 + y 結尾，把 y 改成 i 再加 -es</td><td class="k">city → cities</td></tr><tr><td>不規則</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|兩本書}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|三個盒子}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|我有兩個孩子}}
<h3>把 -s 讀出來</h3>
<p>廣東話的音節不會以「輔音 + s」結尾，所以說英文時 -s 很容易被吞掉：cats 讀成 "cass"，別人就聽不出是不是眾數。字尾的輔音和 -s 都要讀出來。-s 有三種讀法：</p>
<div class="tbl"><table><tr><th>前面的音</th><th>-s 的讀法</th><th>例子</th></tr><tr><td>/p/、/t/、/k/、/f/</td><td class="k">/s/</td><td class="k">books · cats</td></tr><tr><td>/s/、/z/、/ʃ/、/tʃ/、/dʒ/</td><td class="k">/ɪz/</td><td class="k">boxes · watches</td></tr><tr><td>其他的音</td><td class="k">/z/</td><td class="k">keys · friends</td></tr></table></div>
{{ex:cats|/ˈkæts/|貓（眾數）}}{{ex:friends|/ˈfrendz/|朋友（眾數）}}{{ex:keys|/ˈkiːz/|鑰匙（眾數）}}
<h3>this / that 指一個，these / those 指多個</h3>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|這是我的袋}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|這些是我的鑰匙}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|那雙鞋很好看}}
<h3>my、your、his、her、our、their</h3>
<p>這些是所有格代名詞，表示「誰的」。用了所有格代名詞，就不能再加 a 或 the。</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|這是你的手機嗎？}}{{ex:Her brothers live in Macau.|/hər ˈbrʌðərz ˈlɪv ɪn məˈkaʊ/|她的幾個兄弟都住在澳門}}
<div class="tip">數字、many、these、those 後面的名詞一定用眾數：<b>two friend</b> ✗ → <b>two friends</b> ✓，<b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. 空格應填甚麼？",["sister","sisters","a sister","sister's"],1,"two 後面用眾數 sisters。"],["___ are my keys. 空格應填甚麼？",["This","That","These","It"],2,"keys 是眾數，所以用 These。"],["「這是我的袋」用英文怎樣說？",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"有了 my，就不再加冠詞。"]],
practice:[
["mc","「兩本書」=","two books","two book","two a book","twos book","兩個或以上要加眾數 -s。"],
["mc","child 的眾數是？","children","childs","childes","child","這是不規則的眾數。"],
["mc","___ shoes are nice.（那雙鞋）","Those","That","This","It","shoes 是眾數，所以用 those。"],
["mc","「這是我的袋」=","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my 和冠詞不能一起用。"],
["mc","box 的眾數是？","boxes","boxs","boxies","box","以 s、x、ch、sh 結尾的字加 -es。"],
["or","這些是我的鑰匙","These are my keys","key This","多個東西用 these 和眾數 keys。"],
["or","我有兩個孩子","I have two children","child a","兩個孩子用眾數 children，不加冠詞 a。"],
["or","那雙鞋很好看","Those shoes are nice","That","shoes 是眾數，所以用 those。"],
["fi","I have three __.","我有三隻貓","cats","cat|a cat|cat's","三隻貓，用眾數 cats；字尾的 ts 要讀出來。"],
["fi","__ is my friend.","這是我的朋友","This","These|Those|They","只有一個人，用 this。"],
["fi","Two __, please.","請給我兩杯咖啡","coffees","coffee|a coffee|coffee's","點咖啡時英文不用說「杯」，直接用眾數 coffees。"],
["ty","這些是我的書","These are my books","these · my · book — 眾數","book","多本書用 these 和眾數 books。"],
["ty","我有兩個姊妹","I have two sisters","have · two · sister — 眾數","sister","兩個姊妹，用眾數 sisters。"],
["ty","這是我的袋","This is my bag","this · my · bag — 不加冠詞","a","有了 my，就不加冠詞 a。"]]},
{ id:"present", title:"現在式和語序：主語 + 動詞 + 賓語", blurb:"主語、動詞、賓語的次序和中文一樣，難在時間、地點放在哪裏。", deck:"自我介紹", body:`
<p>英文的基本語序和中文一樣，都是<b>主語 → 動詞 → 賓語</b>：我喝咖啡 → I drink coffee. 真正容易出錯的是其他部分的位置：廣東話把時間、地點放在動詞前面（「我每日喺屋企學英文」），英文一般把它們放在句末。</p>
<h3>主語 + 動詞 + 賓語</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|我喝咖啡}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|我學英文}}
<h3>地點和時間放在後面</h3>
<p>其餘的資料按<b>地點 → 時間</b>的次序放到句末。</p>
{{ex:We live in Hong Kong.|/wi ˈlɪv ɪn ˌhɑːŋ ˈkɑːŋ/|我們住在香港}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|我每天學英文}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|他們週末要上班}}
<h3>現在式：習慣和事實</h3>
<p>現在式 (present tense) 表示經常做的事和不變的事實。否定句在動詞前加 <b>don't</b>。</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|我不吃肉}}
<h3>頻率副詞：always、usually、sometimes、never</h3>
<p>這些字放在一般動詞（be 以外的動詞）<b>前面</b>、be 動詞<b>後面</b>。always 和 never 不放在句首，也不放在動詞後面：<b>I go always.</b> ✗ <b>Always I go.</b> ✗ → <b>I always go.</b> ✓。every day、at seven 這類表示時間的字詞則放在句末。</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|我通常七點起床}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|我晚上從不喝咖啡}}{{ex:She's always late.|/ʃiz ˈɔːlweɪz ˈleɪt/|她總是遲到}}
<div class="tip">按中文語序逐字翻譯就會出錯：<b>I every day study English.</b> ✗ → <b>I study English every day.</b> ✓。先說主語和動詞，時間放到最後。</div>`,
check:[["「我喝咖啡」的正確語序是？",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"語序是主語 + 動詞 + 賓語。"],["I ___ eat meat.（不吃）",["not","am not","no","don't"],3,"一般動詞的否定用 don't。"],["always 放在哪裏才正確？",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"頻率副詞放在一般動詞前面。"]],
practice:[
["mc","「我學英文」=","I study English.","I English study.","I am study English.","Study I English.","語序是主語 + 動詞 + 賓語。"],
["mc","「我不吃肉」=","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","一般動詞的否定用 don't。"],
["mc","「我們住在首爾」=","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","地點放在動詞後面。"],
["mc","「我通常七點起床」=","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually 放在一般動詞前面。"],
["mc","哪一句說的是每天都做的事？","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","習慣用現在式。"],
["or","我每天喝咖啡","I drink coffee every day","the am","習慣用現在式；泛指的 coffee 不加冠詞。"],
["or","我看很多書","I read many books","book","many 後面接眾數 books。"],
["or","我們週末要上班","We work on weekends","are","一般動詞前面不能再加 be 動詞。"],
["fi","I __ like fish.","我不喜歡吃魚","don't|do not","not|am not|no","一般動詞的否定用 don't。"],
["fi","I __ English every day.","我每天學英文","study","am study|studying|to study","主語是 I，現在式直接用動詞原形。"],
["fi","They live __ Busan.","他們住在釜山","in","at|on|to","城市前面用 in。"],
["ty","我喝茶","I drink tea","drink · tea — 不加冠詞","a","泛指的 tea 不加冠詞。"],
["ty","我喜歡貓","I like cats","like · cat — 用眾數","cat","泛指一類動物用眾數 cats。"],
["ty","我不吃肉","I don't eat meat","don't · eat · meat","am","一般動詞的否定用 don't。"]]},
{ id:"questions", title:"疑問句：Do you …? 和疑問詞", blurb:"不能只把語調升高。Do 放句首，疑問詞放在最前面。", deck:"求生英文 2", body:`
<p>廣東話在句末加「呀」「嗎」「呢」，或者把語調升高，就成了疑問句，疑問詞也留在原位：「你去邊度呀？」。英文沒有這類句末助詞，要改變<b>語序</b>：助動詞或 be 動詞放到主語前面，疑問詞放在句首。</p>
<h3>be 動詞：和主語對調位置</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|你還好嗎？}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|這是你的袋嗎？}}
<h3>一般動詞：句首加 Do</h3>
<p>句子裏的動詞不是 be 時，在句首加 <b>Do</b>，其餘語序不變。</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|你喜歡咖啡嗎？}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|你會說英文嗎？}}
<p>簡短回答：<b>Yes, I do.</b> / <b>No, I don't.</b></p>
<p>否定疑問句的回答要特別留意：Don't you like it?（你不喜歡嗎？）如果真的不喜歡，要說 <b>No, I don't.</b>，相當於中文的「對，我不喜歡」。英文的 yes / no 跟着事實走，不跟着對方的問法走。</p>
<h3>疑問詞放在最前面</h3>
<p>what（甚麼）、where（哪裏）、when（甚麼時候）、who（誰）、why（為甚麼）、how（怎樣）放在句首，後面接疑問句語序。</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|你住在哪裏？}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|你做甚麼工作？}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|洗手間在哪裏？}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|這個多少錢？}}
<p>問「……英文怎樣說？」同樣要用疑問句語序：<b>How to say this in English?</b> ✗</p>
{{ex:How do you say this in English?|/ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/|這個用英文怎樣說？}}
<div class="tip">最常見的錯誤：<b>You go where?</b> ✗ → <b>Where are you going?</b> ✓，<b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓，<b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["「你喜歡咖啡嗎？」用英文怎樣說？",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"一般動詞的疑問句用 Do 開頭。"],["「你住在哪裏？」用英文怎樣說？",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"語序是疑問詞 + do + 主語 + 動詞。"],["Do you speak English? 的正確回答是？",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"用 do 問，就用 do 回答。"]],
practice:[
["mc","「你會說英文嗎？」=","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","一般動詞的疑問句用 Do 開頭。"],
["mc","「你住在哪裏？」=","Where do you live?","Where you live?","Where are you live?","Where live you?","語序是疑問詞 + do + 主語 + 動詞。"],
["mc","「這個多少錢？」=","How much is this?","How much this is?","How much does this?","What much is this?","問價錢用 How much is …?"],
["mc","Do you like tea? — 正確的回答是？","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","用 do 問，就用 do 回答。"],
["mc","「你做甚麼工作？」=","What do you do?","What are you do?","What you do?","What do you?","問職業用 What do you do?"],
["or","你喜歡咖啡嗎？","Do you like coffee","Are the","一般動詞的疑問句用 Do 開頭；泛指的 coffee 不加冠詞。"],
["or","洗手間在哪裏？","Where is the bathroom","a do","指這座大廈裏的那個洗手間，用冠詞 the。"],
["or","你住在哪裏？","Where do you live","are","一般動詞的疑問句需要 do。"],
["fi","__ you like music?","你喜歡音樂嗎？","Do","Are|Is|Does","一般動詞 like 的疑問句用 Do。"],
["fi","__ do you live?","你住在哪裏？","Where","What|Who|When","問地點用 where。"],
["fi","What time __ it?","現在幾點？","is","do|does|are","問時間用 be 動詞。"],
["ty","你會說英文嗎？","Do you speak English|Can you speak English","do · speak · English","Are","一般動詞的疑問句用 Do 開頭。"],
["ty","洗手間在哪裏？（美式：bathroom / restroom）","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — 冠詞 the","a","雙方都知道是哪個洗手間，用冠詞 the。"],
["ty","你喜歡狗嗎？","Do you like dogs","do · like · dog — 眾數","dog","泛指一類動物用眾數 dogs。"]]},
{ id:"third-s", title:"第三身單數：he / she / it 加 -s，does / doesn't", blurb:"主語是一個人或一樣東西，動詞加 -s。疑問和否定用 does。", deck:"自我介紹", body:`
<p>現在式裏，主語是 <b>he、she、it</b> 或者單個的人、物時，動詞要加 <b>-s</b>，這就是第三身單數 (third person singular)。這條規則在學校都學過，難在說話時真的把 -s 說出來：廣東話的動詞不會跟着主語變化，字尾的 -s 也很容易被吞掉。說話時漏了 -s，聽的人（包括口試的考官）會當成文法錯誤。</p>
<div class="tbl"><table><tr><th>主語</th><th>動詞</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|她在銀行工作}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|他喜歡足球}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|我媽媽很會煮菜}}
<h3>形式有變化的動詞</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|她有一輛車 (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|他八點上班 (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|她學英文 (study → studies)}}
<h3>把 -s 讀出來</h3>
<p>-s 有三種讀法，和名詞眾數的 -s 一樣：works 讀 /s/，goes 讀 /z/，watches 讀 /ɪz/。字尾的輔音不要吞掉：works、likes 的字尾都是 /ks/，兩個音都要讀出來。</p>
{{ex:works|/ˈwɜːrks/|工作（第三身單數）}}{{ex:goes|/ˈgoʊz/|去（第三身單數）}}{{ex:watches|/ˈwɑːtʃɪz/|看（第三身單數）}}
<h3>否定和疑問用 does</h3>
<p>用了 <b>doesn't</b> 或 <b>Does</b>，-s 就轉到 does 上，後面的動詞用原形。</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|他不喝咖啡}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|她住在這裏嗎？}}
<div class="tip">最常見的錯誤：<b>She work here.</b> ✗ → <b>She works here.</b> ✓，<b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. 空格應填甚麼？",["live","lives","living","is live"],1,"主語是 she，動詞用第三身單數 lives。"],["He ___ like coffee. 空格應填甚麼？",["don't","isn't","doesn't","not"],2,"主語是 he，否定用 doesn't。"],["「她有一輛車」用英文怎樣說？",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"have 在 she 後面變成 has。"]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","主語是一個人，動詞用第三身單數 works。"],
["mc","「他不喝咖啡」=","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he 的否定是 doesn't + 動詞原形。"],
["mc","「她住在這裏嗎？」=","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does 後面的動詞不加 -s。"],
["mc","have → she ___","has","haves","have","is have","have 的第三身單數是 has。"],
["mc","study → he ___","studies","studys","study","studyes","輔音字母 + y 結尾，把 y 改成 i 再加 -es。"],
["or","她在銀行工作","She works at a bank","work the","主語是 she，用 works；第一次提到的工作地點用冠詞 a。"],
["or","他有兩隻狗","He has two dogs","have dog","主語是 he，用 has；兩隻狗用眾數 dogs。"],
["or","她不吃肉","She doesn't eat meat","eats","doesn't 後面用不加 -s 的動詞原形。"],
["fi","He __ soccer.","他喜歡足球","likes","like|liking|is like","主語是 he，用第三身單數 likes。"],
["fi","__ she speak English?","她會說英文嗎？","Does","Do|Is|Are","主語是 she，疑問句用 Does。"],
["fi","She __ to work at eight.","她八點上班","goes","go|going|gos","go 的第三身單數是 goes。"],
["ty","他有一輛車","He has a car","has · car — 冠詞 a","have","主語是 he，用 has；一輛車，加冠詞 a。"],
["ty","她喜歡貓","She likes cats","likes · cat — 眾數","cat","主語是 she，用第三身單數 likes；泛指貓用眾數 cats。"],
["ty","他不住在這裏","He doesn't live here","doesn't · live · here","lives","doesn't 後面用動詞原形。"]]},
{ id:"countable", title:"可數名詞和不可數名詞：some、any、much、many", blurb:"water 前面不能加 a，後面也不能加 -s。可數用 many，不可數用 much。", deck:"餐廳點餐", body:`
<p>中文數甚麼都用量詞：一杯水、一項資料、一件傢俬、一個蘋果，所以單看中文，看不出哪個名詞「不可數」。英文名詞分成<b>可數名詞</b> (countable) 和<b>不可數名詞</b> (uncountable)，要逐個記住。</p>
<div class="tbl"><table><tr><th>可數名詞</th><th>不可數名詞</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time, information, advice, homework</td></tr><tr><td>可以加 a / an、數字、-s</td><td>不能加 a / an、數字、-s</td></tr></table></div>
<p>以下這些字特別容易被誤加 -s，其實全部不可數：<b>staff、vocabulary、research、information、equipment、furniture、advice、luggage、homework</b>。<b>staffs</b>、<b>furnitures</b>、<b>a research</b> ✗ → <b>staff</b>、<b>furniture</b>、<b>research</b> ✓</p>
<h3>some 和 any</h3>
<p>表示「一些」，肯定句用 <b>some</b>，否定句和疑問句用 <b>any</b>。但請求和提議雖然是疑問句，也用 some：Can I have some water? / Would you like some tea?</p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|我有一點錢}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|我一點錢也沒有}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|有問題嗎？}}
<h3>many 和 much</h3>
<p>可數名詞用 <b>many</b> + 眾數，不可數名詞用 <b>much</b>。<b>a lot of</b> 兩種都可以用。</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|幾位？}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|多少錢？}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|我沒有多少時間}}
<h3>英文的「量詞」</h3>
<p>只有數不可數名詞時，才用 a glass of、a cup of、a piece of 這類說法。可數名詞直接加數字和 -s，不需要量詞：three books，不說 three pieces of book。</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|一杯水}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|一杯咖啡}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|一個建議}}
<div class="tip">最常見的錯誤：<b>a water</b>、<b>many money</b>、<b>informations</b> ✗ → <b>some water</b>、<b>much money</b>、<b>information</b> ✓</div>`,
check:[["How ___ people are there? 空格應填甚麼？",["much","many","any","a"],1,"people 是可數名詞，用 many。"],["下面哪個是不可數名詞？",["apple","chair","water","friend"],2,"water 前面不能加 a，後面也不能加 -s。"],["I don't have ___ money. 空格應填甚麼？",["some","a","many","any"],3,"否定句用 any。"]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water 是不可數名詞，不能用 a 或 many。"],
["mc","How ___ time do we have?","much","many","any","a","time 是不可數名詞，用 much。"],
["mc","「有問題嗎？」=","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any 後面的可數名詞用眾數。"],
["mc","「一杯水」=","a glass of water","a water glass of","one waters","a glass water","不可數名詞用 a glass of 來數。"],
["mc","I have ___ friends in Seoul.","many","much","a","an","friends 是可數名詞的眾數，用 many。"],
["or","我有一點錢","I have some money","a moneys","money 是不可數名詞，不能加冠詞 a，也沒有眾數 -s。"],
["or","請給我兩個蘋果","Two apples please","apple","兩個蘋果，用眾數 apples。"],
["or","我沒有多少時間","I don't have much time","many","time 是不可數名詞，用 much。"],
["fi","How __ is this?","這個多少錢？","much","many|any|some","問價錢用 how much。"],
["fi","I don't have __ questions.","我沒有問題","any","some|much|a","否定句用 any。"],
["fi","a cup __ coffee","一杯咖啡","of","for|in|a","用 a cup of … 來數。"],
["ty","可以給我一點水嗎？","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — 不加冠詞","a","water 是不可數名詞，不加冠詞 a，要用 some。"],
["ty","有問題嗎？","Do you have any questions","any · question — 眾數","question","any 後面的可數名詞用眾數 questions。"],
["ty","幾位？","How many people","how many · people","much","人是可數的，用 many。"]]},
{ id:"object-have", title:"賓格 me、him、her 和 have", blurb:"動詞後面不用 I，用 me。還有萬用動詞 have。", deck:"自我介紹", body:`
<p>中文的「我」「他」「她」放在哪裏都不變：我認識她，她認識我。英文的代名詞要<b>變形</b>：放在動詞或介詞<b>後面</b>時，要用賓格（作賓語時的形式）。</p>
<div class="tbl"><table><tr><th>主格</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>賓格</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|她認識我}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|我喜歡他}}{{ex:Can you help us?|/kən ju ˈhelp əs/|你可以幫幫我們嗎？}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|我和她一起工作}}
<h3>he 還是 she，his 還是 her</h3>
<p>說廣東話時，「他」和「她」都是「佢」，「他的」和「她的」都是「佢嘅」，所以說英文時很容易把 he 和 she、his 和 her 說錯。寫中文時你一直分開「他」和「她」，可見這個分別你早已懂得，只是說話時要多留意：指女性一定用 she / her，指男性用 he / him / his。</p>
{{ex:My sister is a nurse. She works at night.|/maɪ ˈsɪstər ɪz ə ˈnɜːrs ‖ ʃi ˈwɜːrks ət ˈnaɪt/|我姐姐是護士，她晚上上班}}{{ex:This is Mary and her husband.|/ˈðɪs ɪz ˈmeri ənd hər ˈhʌzbənd/|這是 Mary 和她的丈夫}}
<h3>have：有、擁有</h3>
<p>以人為主語說「有……」時用 have。家人、東西、時間都可以用 have。</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|我有兩個兄弟}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|你有筆嗎？}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|我沒有時間}}
<h3>have：吃、喝</h3>
<p>三餐的名稱前面不加冠詞。</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|我們吃午飯吧}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|我每天早上喝咖啡}}
<div class="tip">最常見的錯誤：<b>She knows I.</b> ✗ → <b>She knows me.</b> ✓，說姐姐時用 <b>He works at night.</b> ✗ → <b>She works at night.</b> ✓</div>`,
check:[["I like ___.（他）",["he","his","him","he's"],2,"動詞後面用賓格 him。"],["Can you help ___?（我們）",["us","we","our","ours"],0,"動詞後面用賓格 us。"],["「你有筆嗎？」用英文怎樣說？",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have 是一般動詞，疑問句用 Do。"]],
practice:[
["mc","She knows ___.（我）","me","I","my","mine","動詞後面用賓格 me。"],
["mc","I like ___.（他們）","them","they","their","theirs","動詞後面用賓格 them。"],
["mc","「你可以幫幫我們嗎？」=","Can you help us?","Can you help we?","Can you help our?","Can us help you?","動詞後面用 us。"],
["mc","「我們吃午飯吧」=","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","三餐的名稱前面不加冠詞。"],
["mc","「我有兩個兄弟」=","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","家人用 have 來說；兩個兄弟用眾數。"],
["or","你有筆嗎？","Do you have a pen","the pens","隨便哪一支筆都可以，用冠詞 a 和單數 pen。"],
["or","我喜歡她","I like her","she","動詞後面用賓格 her。"],
["or","我有兩個妹妹","I have two sisters","sister a","兩個妹妹用眾數 sisters，不能加冠詞 a。"],
["fi","Call __ tonight.","今晚打電話給我","me","I|my|mine","動詞後面用 me。"],
["fi","I work with __.","我和他一起工作","him","he|his|he's","介詞後面也用賓格。"],
["fi","She __ a dog.","她養了一隻狗","has","have|is|haves","主語是 she，用第三身單數 has。"],
["ty","你可以幫幫我嗎？","Can you help me|Could you help me","can you · help · me","I","動詞後面用賓格 me。"],
["ty","你有筆嗎？","Do you have a pen","do you have · pen — 冠詞 a","the","隨便找一支筆，用冠詞 a。"],
["ty","我有很多朋友","I have many friends|I have a lot of friends","have · many · friend — 眾數","friend","many 後面接眾數 friends。"]]},
{ id:"can-like", title:"can、like + -ing、I'd like：會做的事和想要的東西", blurb:"說自己會做甚麼、喜歡做甚麼、現在想要甚麼。", deck:"閒談", body:`
<p>自我介紹和點餐時馬上用得着的三個句式。</p>
<h3>can：會、能夠</h3>
<p><b>can + 動詞原形</b>。主語是 he、she 時也不加 -s。</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|我會游泳}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|我不會開車}}{{ex:Can you speak Cantonese?|/kən ju ˈspiːk ˌkæntəˈniːz/|你會說廣東話嗎？}}
<h3>like + -ing：喜歡做某件事</h3>
<p>說嗜好時，like、love 後面接動詞的 <b>-ing 形式</b>。廣東話說「我好鍾意」，但英文不能說 I very like，要說 I really like 或 I like … very much。</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|我喜歡煮飯}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|我非常喜歡看電影}}{{ex:I really like reading.|/aɪ ˈriːəli ˈlaɪk ˈriːdɪŋ/|我很喜歡看書}}{{ex:I like it very much.|/aɪ ˈlaɪk ɪt ˈveri ˈmʌtʃ/|我很喜歡}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|我不喜歡跑步}}
<h3>I'd like：我想要……</h3>
<p><b>I like</b> 是一向都喜歡，<b>I'd like</b> 是現在想要，語氣有禮貌。點餐時用 I'd like。</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|請給我一杯咖啡}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|要不要喝點茶？}}
<div class="tip">最常見的錯誤：<b>He can swims.</b> ✗ → <b>He can swim.</b> ✓，在咖啡店說 <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓，<b>I very like it.</b> ✗ → <b>I really like it.</b> ✓</div>`,
check:[["She can ___ very well. 空格應填甚麼？",["sings","sing","singing","to sing"],1,"can 後面接動詞原形。"],["「我喜歡煮飯」用英文怎樣說？",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like 後面用 -ing 形式。"],["在咖啡店點餐時，最自然的說法是？",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"現在想要的東西用 I'd like 來說。"]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","can 後面接動詞原形。"],
["mc","「我不會開車」=","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can 的否定是 can't。"],
["mc","「我喜歡看電影」=","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like 後面用 -ing；泛指電影用眾數 movies。"],
["mc","點餐時說「請給我一杯咖啡」=","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","現在想要的東西用 I'd like。"],
["mc","「要不要喝點茶？」=","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","請別人吃喝時用 Would you like …?"],
["or","請給我一杯咖啡","I'd like a coffee please","the coffees","點的是一杯，用冠詞 a 和單數 coffee。"],
["or","我喜歡看書","I like reading books","book read","like 後面用 -ing；泛指書用眾數 books。"],
["or","你會游泳嗎？","Can you swim","swimming","can 後面接動詞原形。"],
["fi","I can't __.","我不會游泳","swim","swimming|swims|to swim","can't 後面接動詞原形。"],
["fi","I like __ music.","我喜歡聽音樂","listening to","listen to|listen|to listening","like 後面用 -ing 形式。"],
["fi","__ like a sandwich, please.","請給我一份三文治","I'd|I would","I|I'm|I can","點餐用 I'd like。"],
["ty","我喜歡煮飯","I like cooking|I love cooking|I like to cook","like · cook — 用 -ing","cook","like 後面用 -ing 形式。"],
["ty","請給我一份三文治","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — 冠詞 a","the","隨便一份三文治，用冠詞 a。"],
["ty","我喜歡狗","I like dogs|I love dogs","like · dog — 眾數","dog","泛指狗用眾數 dogs。"]]},
{ id:"continuous", title:"正在做的事：be + -ing", blurb:"經常做的事用現在式，現在正在做的事用 be + -ing。", deck:"閒談", body:`
<p>廣東話的「緊」和英文的現在進行式 (present continuous) 很相似：「我做緊嘢」→ I'm working. 分別是英文一定要有 <b>be 動詞</b>，動詞也一定要變成 <b>-ing</b>，兩樣都不能少。</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|我現在在工作}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|她在煮晚飯}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|正在下雨}}
<h3>疑問句和否定句</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|你在做甚麼？}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|你在聽嗎？}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|我沒有在睡覺}}
<h3>和現在式比較</h3>
<div class="tbl"><table><tr><th>經常（現在式）</th><th>現在 (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>不用 -ing 的動詞</h3>
<p>like、know、want、need、have（擁有）這類表示<b>狀態</b>的動詞，即使說的是現在，也用現在式，不加 -ing。</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|我認識他}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|我想喝點水}}
<div class="tip">最常見的錯誤是漏掉 be 動詞：<b>I working.</b> ✗ → <b>I'm working.</b> ✓，<b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["「你在做甚麼？」用英文怎樣說？",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"正在做的事用 be + -ing 來問。"],["I ___ coffee every morning. 空格應填甚麼？",["am drinking","drinking","drink","am drink"],2,"每天的習慣用現在式。"],["下面哪一句是正確的？",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know、want、have（擁有）不用 -ing 形式。"]],
practice:[
["mc","「我現在在工作」=","I'm working now.","I work now am.","I'm work now.","I working now.","正在做的事用 be + -ing。"],
["mc","「她在煮晚飯」=","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","用 be + -ing；三餐的名稱前面不加冠詞。"],
["mc","哪一句說的是每天都做的事？","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","習慣用現在式。"],
["mc","「你在做甚麼？」=","What are you doing?","What do you doing?","What are you do?","What you are doing?","語序是疑問詞 + be + 主語 + -ing。"],
["mc","「我認識他」=","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know 不用 -ing 形式。"],
["or","我在看書","I'm reading a book","read books","正在看的是一本書，用冠詞 a 和單數 book。"],
["or","孩子們在玩","The kids are playing","kid is","孩子不止一個，用眾數 kids 和 are。"],
["or","現在正在下雨","It's raining now","rains","正在發生的事用 be + -ing。"],
["fi","I'm __ TV.","我在看電視","watching","watch|watches|to watch","be 後面接 -ing 形式。"],
["fi","What __ you doing?","你在做甚麼？","are","do|is|does","主語是 you，用 are。"],
["fi","She __ working today.","她今天不上班","isn't|is not","doesn't|don't|not","be + -ing 的否定是 isn't。"],
["ty","我現在在煮飯","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — 用 -ing","cook","正在做的事用 be + -ing。"],
["ty","我在看電影（用 movie）","I'm watching a movie","I'm · watching · movie — 冠詞 a","the","隨便一齣電影，用冠詞 a。"],
["ty","孩子們在睡覺","The kids are sleeping|The children are sleeping","kids · are · sleeping — 眾數","kid","孩子不止一個，用眾數 kids 和 are。"]]},
{ id:"past", title:"過去式：was / were 和 -ed", blurb:"be 動詞用 was / were，一般動詞加 -ed。疑問和否定用 did。", deck:"閒談", body:`
<p>廣東話說過去的事，常常只加一個時間詞或者「咗」：「我琴日返咗工」。但「咗」表示完成，不等於過去式 (past tense)：「我聽日食咗飯先走」說的是明天。英文也不能只靠 yesterday，動詞本身要變成過去式。be 動詞和一般動詞的過去式不一樣。</p>
<h3>be 動詞的過去式：was / were</h3>
<p>I、he、she、it 用 <b>was</b>，you、we、they 用 <b>were</b>。</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|我當時很累}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|（那次）很好玩}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|我們當時在家}}{{ex:Were you busy?|/wər ju ˈbɪzi/|你當時忙嗎？}}
<h3>一般動詞的過去式：加 -ed</h3>
<p>動詞後面加 <b>-ed</b>，主語是誰都一樣。</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|我昨天上班了}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|我們看了一齣電影}}{{ex:She called me.|/ʃi ˈkɔːld mi/|她打了電話給我}}
<h3>把 -ed 讀出來</h3>
<p>-ed 有三種讀法：worked、walked 讀 /t/，called、enjoyed 讀 /d/，wanted、needed 讀 /ɪd/。字尾的輔音就是「過去」的標記，一定要讀出來，但不要多加音節：walked 只有一個音節，enjoyed 的字尾只有一個 /d/，不是 "enjoyded"。</p>
{{ex:walked|/ˈwɔːkt/|走了（walk 的過去式）}}{{ex:enjoyed|/ɪnˈdʒɔɪd/|享受（過去式）}}{{ex:wanted|/ˈwɑːntɪd/|想要（want 的過去式）}}
<h3>否定和疑問用 did</h3>
<p>用了 <b>didn't</b> 或 <b>Did</b>，後面的動詞變回原形。</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|我昨天沒有上班}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|你打過電話給我嗎？}}
<div class="tip">最常見的錯誤：<b>I yesterday work.</b> ✗ → <b>I worked yesterday.</b> ✓，<b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓，<b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. 空格應填甚麼？",["was","were","did","are"],1,"主語是 they，用 were。"],["「我昨天沒有上班」用英文怎樣說？",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't 後面接動詞原形。"],["Did you ___ the movie? 空格應填甚麼？",["watch","watched","watching","watches"],0,"Did 後面接動詞原形。"]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","主語是 I，用 was。"],
["mc","「我們看了一齣電影」=","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","一般動詞的過去式加 -ed；有 yesterday 也要用過去式。"],
["mc","「你昨天打過電話嗎？」=","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did 後面接動詞原形。"],
["mc","「（那次）很好玩」=","It was fun.","It were fun.","It did fun.","It funned.","主語是 it，用 was。"],
["mc","「你當時忙嗎？」=","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy 表示狀態，用 be 動詞來問。"],
["or","我們看了一齣電影","We watched a movie","watch movies","一齣電影，用冠詞 a 和單數 movie。"],
["or","我和朋友們一起玩","I played with my friends","friend play","朋友不止一個，用眾數 friends。"],
["or","我昨天沒有上班","I didn't work yesterday","worked","didn't 後面接動詞原形。"],
["fi","We __ at home last night.","我們昨晚在家","were","was|did|are","主語是 we，用 were。"],
["fi","I __ soccer yesterday.","我昨天踢了足球","played","play|playing|was play","過去式加 -ed，有 yesterday 也不能省。"],
["fi","__ you work yesterday?","你昨天上班了嗎？","Did","Were|Do|Was","一般動詞過去式的疑問句用 Did。"],
["ty","我當時很累","I was tired","was · tired","were","主語是 I，用 was。"],
["ty","我看了一齣電影（用 watch 和 movie）","I watched a movie","watched · movie — 冠詞 a","the","一齣電影，加冠詞 a。"],
["ty","我打了電話給朋友們","I called my friends","called · my · friend — 眾數","friend","朋友不止一個，用眾數 friends。"]]},
{ id:"irregular-past", title:"不規則動詞的過去式：went、ate、saw", blurb:"越常用的動詞越不加 -ed。先記住這 12 個。", deck:"閒談", body:`
<p>最常用的動詞，過去式往往是<b>不規則</b>的。這些字在學校的不規則動詞表裏都背過，現在的目標是說話、打字時能夠馬上反應過來。</p>
<div class="tbl"><table><tr><th>原形</th><th>過去式</th><th>原形</th><th>過去式</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Macau.|/aɪ ˈwent tə məˈkaʊ/|我去了澳門}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|我們吃了薄餅}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|我看了一齣電影}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|我見了朋友們}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|我買了一本書}}
<p>不少不規則動詞只靠元音來分辨現在和過去，所以元音要讀準：sit /ˈsɪt/ → sat /ˈsæt/，leave /ˈliːv/ → left /ˈleft/，feel /ˈfiːl/ → felt /ˈfelt/。</p>
<h3>疑問句和否定句用原形</h3>
<p><b>did</b> 已經表示過去，所以後面的動詞變回原形。</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|你做了甚麼？}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|你去了哪裏？}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|我沒有去}}
<div class="tip">最常見的錯誤：<b>I goed.</b> ✗ → <b>I went.</b> ✓，<b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["go 的過去式是？",["goed","gone","went","going"],2,"go 的過去式是 went。"],["「你做了甚麼？」用英文怎樣說？",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did 後面接動詞原形 do。"],["I didn't ___ breakfast. 空格應填甚麼？",["ate","eaten","eats","eat"],3,"didn't 後面接動詞原形。"]],
practice:[
["mc","eat 的過去式是？","ate","eated","eat","eaten","eat 的過去式是 ate。"],
["mc","「你去了哪裏？」=","Where did you go?","Where did you went?","Where you went?","Where were you go?","did 後面接動詞原形。"],
["mc","「我買了一本書」=","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy 的過去式是 bought；一本書，加冠詞 a。"],
["mc","see 的過去式是？","saw","seed","seen","sawed","see 的過去式是 saw。"],
["mc","「我沒有去」=","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't 後面接動詞原形。"],
["or","我看了一齣電影","I saw a movie","see movies","一齣電影，用冠詞 a 和單數 movie；see 的過去式是 saw。"],
["or","我們吃了薄餅","We ate pizza","eated","eat 的過去式是 ate。"],
["or","我見了朋友們","I met my friends","friend meet","朋友不止一個，用眾數 friends。"],
["fi","I __ to Jeju last year.","我去年去了濟州","went","go|goed|gone","go 的過去式是 went。"],
["fi","What did you __?","你吃了甚麼？","eat","ate|eaten|eating","did 後面接動詞原形。"],
["fi","She __ a new phone.","她買了一部新手機","bought","buyed|buy|buys","buy 的過去式是 bought。"],
["ty","我去了釜山","I went to Busan","went · to · Busan","go","go 的過去式是 went。"],
["ty","我買了一本書","I bought a book","bought · book — 冠詞 a","the","一本書，加冠詞 a。"],
["ty","我見了朋友們（用 meet）","I met my friends|I saw my friends","met · my · friend — 眾數","friend","朋友不止一個，用眾數 friends。"]]},
{ id:"the", title:"再看 the：甚麼時候用，甚麼時候不用", blurb:"第一次提到用 a，再提到用 the。泛指的東西甚麼都不加。", deck:"問路與交通", body:`
<p>中文沒有冠詞 (articles)，所以既容易漏掉 a，也容易多加 the。有研究分析過香港學生的英文作文：漏掉冠詞和多加冠詞都很常見，而最容易出錯的是<b>泛指</b>的情況。這一課專門練習<b>該用 the</b> 和<b>甚麼都不加</b>的情況。</p>
<h3>第一次用 a，再提到用 the</h3>
<p>對方第一次聽到的東西用 a；剛剛提過、對方已經知道是哪一個的，用 the。</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|我買了一件恤衫，那件恤衫是藍色的}}
<h3>一看就知道是哪個，用 the</h3>
<p>這個房間的窗、附近的那個車站，雙方都知道指的是哪一個，第一次說就用 the。另外，中文的「這」「那」不等於 the：「這本書」是 this book。</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|可以開一下窗嗎？}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|地鐵站在哪裏？}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|今天太陽很猛}}
<h3>泛指不加 the</h3>
<p>泛指一類東西或者抽象概念時，不加冠詞，直接用眾數名詞或不可數名詞。</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|我喜歡音樂（不說 I like the music）}}{{ex:Dogs are friendly.|/ˈdɔːgz ər ˈfrendli/|狗很友善（不說 The dogs are friendly）}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|人生苦短（不說 The life is short）}}
<h3>地名大多不加 the</h3>
<p>Hong Kong、Central、Mong Kok 這些地名前面不加 the；但 the MTR、the Peak 要加。</p>
{{ex:I take the MTR to Central.|/aɪ ˈteɪk ði ˌem tiː ˈɑːr tə ˈsentrəl/|我坐港鐵去中環}}
<h3>不加冠詞的固定說法</h3>
<p>常用的地點、交通、三餐說法，整句記下來。</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|我坐巴士上班}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|我在家}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|我十一點睡覺}}
<div class="tip">先問自己：「對方知道是<b>哪一個</b>嗎？」知道用 the，不知道用 a；泛指就甚麼都不加：<b>The money is important.</b> ✗ → <b>Money is important.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. 空格應填甚麼？",["A","An","The","（不填）"],2,"剛剛提到的那隻貓，用 the。"],["I go to ___ work by bus. 空格應填甚麼？",["a","the","an","（不填）"],3,"go to work 不加冠詞。"],["想請別人打開這個房間的窗，應該怎樣說？",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"雙方都知道是哪一扇窗，用 the。"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","剛剛提到的那件恤衫，用 the。"],
["mc","「（附近那個）車站在哪裏？」=","Where's the station?","Where's a station?","Where's station?","Where the station?","指附近的那個車站，用 the。"],
["mc","下面哪一句是正確的？","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work、by bus 都不加冠詞。"],
["mc","「太陽很猛」=","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","獨一無二的東西前面加 the。"],
["mc","「我在家」=","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home 不加冠詞。"],
["or","可以開一下窗嗎？","Can you open the window","a windows","雙方都知道是哪一扇窗，用冠詞 the。"],
["or","我坐巴士上班","I go to work by bus","the a","go to work、by bus 都不加冠詞。"],
["or","那隻狗很大","The dog is big","A dogs","前面提過的那隻狗，用冠詞 the。"],
["fi","I saw a movie. __ movie was great.","我看了一齣電影，那齣電影非常好看","The","A|An|Some","剛剛提到的那齣電影，用 the。"],
["fi","Where's __ bathroom?","洗手間在哪裏？","the","a|an|some","指這座大廈裏的那個洗手間，用 the。"],
["fi","I have __ idea.","我有個主意","an","a|the|some","第一次提到，而且 idea 以元音開頭，用 an。"],
["ty","可以關一下門嗎？（用 close）","Can you close the door|Could you close the door","can you · close · door — 冠詞 the","a","雙方都知道是哪一扇門，用冠詞 the。"],
["ty","（附近那個）車站在哪裏？","Where is the station|Where's the station","where · station — 冠詞 the","a","指附近的那個車站，用冠詞 the。"],
["ty","我在家","I'm at home|I'm home","I'm · at · home — 不加冠詞","the","home 前面不加冠詞。"]]},
{ id:"adjectives", title:"形容詞和比較：bigger、more expensive、the best", blurb:"形容詞放在名詞前面，不需要「的」。比較用 -er / more，最高級用 the -est / the most。", deck:"購物與付款", body:`
<p>形容詞放在名詞<b>前面</b>，或者 be 動詞<b>後面</b>。中文說「大的袋」，英文不需要「的」：a big bag。另外，廣東話說「個袋好大」，句子裏沒有「係」；英文卻一定要有 be 動詞：This bag is big.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|一個大袋}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|這個袋很大}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|太小了}}
<p>廣東話的「好」可以放在動詞前面（「我好鍾意」），但英文的 very 只修飾形容詞和副詞：<b>I very like it.</b> ✗ → <b>I really like it.</b> / <b>I like it very much.</b> ✓</p>
<h3>比較級：-er 或 more</h3>
<p>短的字加 <b>-er</b>，長的字前面加 <b>more</b>。「比……」是 <b>than</b>，放在形容詞後面：「他比我高」是 He's taller than me.</p>
<div class="tbl"><table><tr><th>原級</th><th>比較級</th><th>最高級</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|這個比較便宜}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|這個比那個貴}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|有沒有大一個碼的？}}
<h3>最高級前面加 the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|這是這裏最好的餐廳}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|哪個最便宜？}}
<h3>-ed 還是 -ing：bored / boring</h3>
<p>說人的感受用 -ed，說令人有這種感受的事物用 -ing。</p>
{{ex:I'm bored.|/aɪm ˈbɔːrd/|我很悶}}{{ex:This movie is boring.|/ˈðɪs ˈmuːvi ɪz ˈbɔːrɪŋ/|這齣電影很悶}}
<div class="tip">最常見的錯誤：<b>more cheaper</b>、<b>more better</b> ✗ → <b>cheaper</b>、<b>better</b> ✓。-er 和 more 不能一起用。</div>`,
check:[["big 的比較級是？",["more big","biger","bigger","most big"],2,"big 是短的字，加 -er；它以「一個元音字母 + 一個輔音字母」結尾，所以要重複 g：bigger。"],["This is ___ expensive than that. 空格應填甚麼？",["more","most","much","very"],0,"長的字，比較級在前面加 more。"],["good 的最高級是？",["the goodest","the most good","the better","the best"],3,"good 的最高級是 the best：good – better – the best。"]],
practice:[
["mc","cheap 的比較級是？","cheaper","more cheap","cheapper","most cheap","短的字加 -er。"],
["mc","「這個比較貴」=","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","長的字前面加 more。"],
["mc","「有沒有大一個碼的？」=","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","語序是冠詞 + 形容詞 + 名詞。"],
["mc","good 的比較級是？","better","gooder","more good","best","good 的比較級是 better：good – better – best。"],
["mc","「這是最好的餐廳」=","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","最高級前面加 the。"],
["or","有沒有大一個碼的？","Do you have a bigger size","the sizes","隨便找一個尺碼，用冠詞 a。"],
["or","這個最便宜","This is the cheapest","a cheaper","最高級前面要加冠詞 the。"],
["or","這個比那個便宜","This is cheaper than that","more","-er 形式的形容詞前面不再加 more。"],
["fi","It's __ small.","太小了","too","much|more|most","「太」是 too。"],
["fi","This is cheaper __ that one.","這個比那個便宜","than","then|that|more","「比」是 than。"],
["fi","It's the __ expensive one.","這是最貴的","most","more|much|very","長的字，最高級是 the most。"],
["ty","有沒有小一個碼的？","Do you have a smaller size","smaller · size — 冠詞 a","the","隨便找一個尺碼，用冠詞 a。"],
["ty","這個最好","This is the best|This one is the best","the · best — 冠詞 the","a","最高級前面要加冠詞 the。"],
["ty","這個比較便宜","This is cheaper|This one is cheaper","cheap — 比較級","more","短的字加 -er。"]]},
{ id:"going-to", title:"說計劃：be going to", blurb:"已經決定要做的事，用 be going to + 動詞原形。", deck:"閒談", body:`
<p>「我打算……」「我準備……」這類<b>事先決定好的計劃</b>，用 <b>be + going to + 動詞原形</b>。be 動詞不能省。</p>
{{ex:I'm going to visit Macau.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt məˈkaʊ/|我打算去澳門}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|她打算買一輛車}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|我們準備去吃晚飯}}
<h3>否定和疑問</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|我不打算去}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|你會來嗎？}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|這個週末你打算做甚麼？}}
<h3>根據眼前的跡象作預測</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|快要下雨了}}
<h3>常用的時間詞</h3>
<p>tomorrow（明天）、tonight（今晚）、this weekend（這個週末）、next week（下星期）一般放在句末，不放在動詞前面。</p>
<div class="tip">說話時 going to 常常讀成 <b>gonna</b>。另外不要漏掉 be 動詞：<b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["「我明天會去見朋友」用英文怎樣說？",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"結構是 be + going to + 動詞原形。"],["She ___ going to study. 空格應填甚麼？",["am","are","is","be"],2,"主語是 she，用 is。"],["「這個週末你打算做甚麼？」用英文怎樣說？",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"語序是疑問詞 + be + 主語 + going to。"]],
practice:[
["mc","「我打算去釜山」=","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","結構是 be + going to + 動詞原形。"],
["mc","They ___ going to come.","are","is","am","be","主語是 they，用 are。"],
["mc","「快要下雨了」=","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to 後面接動詞原形。"],
["mc","「我不打算去」=","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","not 放在 be 動詞後面。"],
["mc","「你會來嗎？」=","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","把 be 動詞放到主語前面。"],
["or","她打算買一輛車","She's going to buy a car","the cars","一輛車，用冠詞 a 和單數 car。"],
["or","我準備去見朋友們","I'm going to meet my friends","friend","朋友不止一個，用眾數 friends。"],
["or","我們準備去吃晚飯","We're going to have dinner","a","三餐的名稱 dinner 前面不加冠詞。"],
["fi","I'm going __ study tonight.","我今晚打算溫習","to","for|at|will","going to 後面接動詞原形。"],
["fi","__ you going to come?","你會來嗎？","Are","Do|Is|Will","主語是 you，用 Are。"],
["fi","It's going to __ tomorrow.","明天會下雨","rain","rains|raining|rained","going to 後面接動詞原形。"],
["ty","我打算看一齣電影（用 movie）","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — 冠詞 a","the","隨便一齣電影，用冠詞 a。"],
["ty","你打算做甚麼？","What are you going to do","what · going to · do","will","問計劃用 be going to。"],
["ty","我準備去見朋友們","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — 眾數","friend","朋友不止一個，用眾數 friends。"]]},
{ id:"joining", title:"連接句子：and、but、or、so、because", blurb:"把兩個簡短的句子連成一句。because 和 so 只用一個，不能成對使用。", deck:"情緒與反應", body:`
<p>只說簡短的句子會顯得生硬。用這五個連接詞把句子連起來，聽起來自然得多。</p>
<h3>and、but、or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|我喜歡咖啡和茶}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|我很累，但很開心}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|咖啡還是茶？}}
<h3>so：所以</h3>
<p>語序是<b>原因 + so + 結果</b>。</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|我累了，所以回家了}}
<h3>because：因為</h3>
<p>英文最常見的語序是<b>結果 + because + 原因</b>，原因放在後面。</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|我回家了，因為我累了}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|因為下雨，我留在家裏}}
<h3>成對的連接詞只留一個</h3>
<p>廣東話習慣說「因為……所以……」「雖然……但係……」。英文裏 because 和 so、although 和 but 不能同時出現，只能選一個。</p>
<p>另外，英文不能只用一個逗號連接兩個完整的句子，中間要有連接詞：<b>I was tired, I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓</p>
<h3>too：也</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|我也喜歡}}
<div class="tip">because 和 so 不能用在同一個句子裏：<b>Because I was tired, so I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. 空格應填甚麼？",["because","but","so","or"],2,"原因在前、結果在後，用 so。"],["I stayed home ___ I was sick. 空格應填甚麼？",["because","so","but","and"],0,"結果在前、原因在後，用 because。"],["問對方「要咖啡還是茶？」，應該怎樣說？",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"二選一用 or。"]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","意思相反，用 but 連接。"],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","原因在前、結果在後，用 so。"],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","結果在前、原因在後，用 because。"],
["mc","「咖啡還是茶？」=","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","二選一用 or。"],
["mc","「我很累，但很開心」=","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","表示轉折用 but。"],
["or","我喜歡貓和狗","I like cats and dogs","cat dog","泛指動物用眾數 cats 和 dogs。"],
["or","請給我一杯咖啡和一份三文治","A coffee and a sandwich please","the or","各點一份，每個名詞前面都加冠詞 a。"],
["or","我餓了，所以吃了東西","I was hungry so I ate","because","原因在前、結果在後，用 so。"],
["fi","I'm tired __ happy.","我很累，但很開心","but","so|because|or","表示轉折用 but。"],
["fi","I stayed home __ it was raining.","因為下雨，我留在家裏","because","so|but|or","結果在前、原因在後，用 because。"],
["fi","Coffee __ tea?","咖啡還是茶？","or","so|but|because","二選一用 or。"],
["ty","我喜歡咖啡和茶","I like coffee and tea","like · coffee · and · tea — 不加冠詞","a","泛指的 coffee 和 tea 不加冠詞。"],
["ty","我很累，但很開心","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","表示轉折用 but。"],
["ty","我喜歡狗和貓","I like dogs and cats|I like cats and dogs","dog · and · cat — 眾數","dog","泛指動物用眾數 dogs 和 cats。"]]},
{ id:"hk-english", title:"港式英文陷阱：在香港通用，出外要換個說法", blurb:"開燈不是 open the light，對外地人說「加油」可以用 Good luck。港式英文不是錯，只是外地人未必明白。", deck:"港式英文陷阱", body:`
<p>香港人天天用英文，很多說法在本地人人明白。<b>港式英文不是錯，只是外地人未必明白。</b>這一課分開四類：從廣東話直譯過來、文法或用字有問題的說法標 ✗，要改；本地字詞標「本地用法」，在香港可以照用，出外換個說法就可以了；英式和美式則兩種都對。</p>
<h3>一個中文動詞，幾個英文動詞</h3>
<div class="tbl"><table><tr><th>廣東話</th><th>英文</th><th>怎樣區分</th></tr><tr><td>「開」「熄」（燈、電視）</td><td class="k">turn on / turn off</td><td>電器用 turn on / off；門、窗才用 open / close</td></tr><tr><td>「睇」</td><td class="k">look at / see / watch / read</td><td>望一望 look at，看見 see，看電視、看比賽 watch，看書 read</td></tr><tr><td>「帶」「攞」</td><td class="k">bring / take</td><td>帶到說話的人這裏 bring，帶到別處 take</td></tr><tr><td>「借」</td><td class="k">borrow / lend</td><td>借入 borrow，借出 lend</td></tr><tr><td>「講」</td><td class="k">say / tell / speak / talk</td><td>說了甚麼 say，告訴某人 tell，說某種語言 speak，交談 talk</td></tr><tr><td>「食藥」</td><td class="k">take medicine</td><td>藥不是 eat，用 take</td></tr></table></div>
{{ex:Can you turn on the light?|/kən ju ˈtɜːrn ˈɑːn ðə ˈlaɪt/|可以開燈嗎？}}{{ex:I'm reading a book.|/aɪm ˈriːdɪŋ ə ˈbʊk/|我在看書}}{{ex:Can you lend me a pen?|/kən ju ˈlend mi ə ˈpen/|可以借一支筆給我嗎？}}{{ex:Can I borrow your pen?|/kən aɪ ˈbɑːroʊ jʊr ˈpen/|我可以借用你的筆嗎？}}{{ex:I'll take you to the station.|/aɪl ˈteɪk ju tə ðə ˈsteɪʃn/|我帶你去車站}}{{ex:Take this medicine three times a day.|/ˈteɪk ˈðɪs ˈmedɪsn ˈθriː ˈtaɪmz ə ˈdeɪ/|這種藥每天吃三次}}
<p>動詞選對了，後面的名詞也不要忘記冠詞：turn on <b>the</b> light，read <b>a</b> book，lend me <b>a</b> pen。take medicine 的 medicine 泛指藥物，不加 a。</p>
<h3>從廣東話直譯過來的句式</h3>
<div class="tbl"><table><tr><th>廣東話</th><th>直譯 ✗</th><th>英文說法 ✓</th></tr><tr><td>「我好鍾意」</td><td>I very like it.</td><td class="k">I really like it. / I like it very much.</td></tr><tr><td>「有好多人養寵物」</td><td>There are many people have pets.</td><td class="k">Many people have pets.</td></tr><tr><td>「我好難學識英文」</td><td>I am difficult to learn English.</td><td class="k">It's difficult for me to learn English.</td></tr><tr><td>「雖然……但係……」</td><td>Although it rained, but we went.</td><td class="k">Although it rained, we went.</td></tr><tr><td>「我走先」</td><td>I go first.</td><td class="k">I'm leaving now.</td></tr><tr><td>「等我」</td><td>Wait me.</td><td class="k">Wait for me.</td></tr></table></div>
{{ex:I really like it.|/aɪ ˈriːəli ˈlaɪk ɪt/|我很喜歡}}{{ex:It's difficult for me to learn English.|/ɪts ˈdɪfɪkəlt fər mi tə ˈlɜːrn ˈɪŋglɪʃ/|學英文對我來說很難}}{{ex:I'm leaving now.|/aɪm ˈliːvɪŋ ˈnaʊ/|我先走了}}{{ex:Wait for me.|/ˈweɪt fər mi/|等等我}}
<h3>本地用法：香港通用，外地人未必明白</h3>
<div class="tbl"><table><tr><th>本地用法</th><th>對外地人可以說</th></tr><tr><td>add oil（加油）</td><td class="k">Good luck! / You can do it! / Go for it!</td></tr><tr><td>shroff（繳費處）</td><td class="k">cashier / payment office</td></tr><tr><td>chop（印章）</td><td class="k">stamp</td></tr><tr><td>lai see（利是）</td><td>可以照用，再補一句解釋</td></tr><tr><td>OK la、sorry ar、no need lor</td><td>不加句末助詞：OK、sorry、no need</td></tr></table></div>
<p>add oil 在 2018 年已收入《牛津英語詞典》，詞典註明它源自香港英文。句末加 la、ar、lor 是香港人之間傳短訊的寫法，朋友之間沒有問題；考試、工作和對不懂廣東話的人，就不要加。</p>
{{ex:Good luck!|/ˈgʊd ˈlʌk/|加油！/ 祝你好運！}}{{ex:You can do it!|/ju kən ˈduː ɪt/|你做得到的！}}{{ex:Where's the cashier?|/ˈwerz ðə kæˈʃɪr/|收銀處在哪裏？}}{{ex:I need a stamp on this form.|/aɪ ˈniːd ə ˈstæmp ɑːn ˈðɪs ˈfɔːrm/|這份表格要蓋印}}
<h3>學校教英式，這個課程用美式</h3>
<p>香港學校教的是英式英文，這個課程的英文和聲音是美式。兩種都正確，只是在美國會聽到右邊的說法。</p>
<div class="tbl"><table><tr><th>中文</th><th>英式（香港學校）</th><th>美式（這個課程）</th></tr><tr><td>升降機</td><td>lift</td><td class="k">elevator</td></tr><tr><td>住宅單位</td><td>flat</td><td class="k">apartment</td></tr><tr><td>洗手間</td><td>toilet</td><td class="k">restroom</td></tr><tr><td>足球</td><td>football</td><td class="k">soccer</td></tr><tr><td>電影</td><td>film</td><td class="k">movie</td></tr><tr><td>手提電話</td><td>mobile (phone)</td><td class="k">cell phone</td></tr><tr><td>排隊的隊伍</td><td>queue</td><td class="k">line</td></tr><tr><td>垃圾</td><td>rubbish</td><td class="k">trash</td></tr><tr><td>帳單</td><td>bill</td><td class="k">check</td></tr><tr><td>地下 (G/F)</td><td>ground floor</td><td class="k">first floor</td></tr><tr><td>假期</td><td>holiday</td><td class="k">vacation</td></tr></table></div>
{{ex:Where's the restroom?|/ˈwerz ðə ˈrestruːm/|洗手間在哪裏？}}{{ex:Take the elevator to the first floor.|/ˈteɪk ði ˈelɪveɪtər tə ðə ˈfɜːrst ˈflɔːr/|搭升降機到地下}}{{ex:I live in an apartment.|/aɪ ˈlɪv ɪn ən əˈpɑːrtmənt/|我住在一個住宅單位}}
<div class="tip">記住三點：直譯的句子要改 (<b>open the light</b> ✗ → <b>turn on the light</b> ✓)；本地用法在香港照用，出外換個說法 (<b>Add oil!</b> → <b>Good luck!</b>)；英式和美式兩種都對 (<b>lift</b> / <b>elevator</b>)。</div>`,
check:[["「可以開燈嗎？」用英文怎樣說？",["Can you open the light?","Can you turn on the light?","Can you open light?","Can you turn open the light?"],1,"開燈、開電視用 turn on，open 只用於門、窗這類可以打開的東西；指房間裏那盞燈，用冠詞 the。"],["想對不懂廣東話的外國同事說「加油」，哪一句最容易明白？",["Add oil!","Add gas!","Good luck!","Put oil!"],2,"Add oil 是香港的本地用法，香港人之間沒有問題；外地人未必明白，可以說 Good luck! 或 You can do it!"],["「我很喜歡廣東菜」用英文怎樣說？",["I really like Cantonese food.","I very like Cantonese food.","I like very Cantonese food.","I like very much Cantonese food."],0,"very 不能直接修飾動詞。「很喜歡」說 really like 或 like … very much。"]],
practice:[
["mc","「開燈」=","turn on the light","open the light","open a light","turn the light open","開燈用 turn on，open 用於門和窗。"],
["mc","「我在看書」=","I'm reading a book.","I'm seeing a book.","I'm looking a book.","I'm watching a book.","看書是 read；see 是看見，watch 是看節目或比賽。"],
["mc","「我先走了」=","I'm leaving now.","I go first.","I walk first.","I'm go first now.","I go first 是廣東話的直譯，意思變成「我排第一個去」；要先離開，說 I'm leaving now。"],
["mc","「等等我」=","Wait for me.","Wait me.","Wait to me.","Waiting me.","wait 後面要加 for 才可以接人。"],
["mc","「學英文文法對我來說很難」=","It's difficult for me to learn English grammar.","I am difficult to learn English grammar.","I difficult learn English grammar.","It's difficult me learn English grammar.","difficult 形容的是事情，不是人，所以用 It's difficult for me to …。"],
["or","請把燈關掉","Please turn off the light","a close","關燈用 turn off，不用 close；指房間裏那盞燈，要用冠詞 the。"],
["or","我想看一本書","I want to read a book","books see","看書用 read，不用 see；「一本書」是單數，加冠詞 a，不用眾數 books。"],
["or","我每天吃藥","I take medicine every day","eat a","吃藥用 take；medicine 在這裏泛指藥物，不加冠詞 a。"],
["or","我很喜歡","I really like it","very","very 不能直接放在動詞前面；「很喜歡」說 really like。"],
["fi","Can you turn __ the TV?","可以開電視嗎？","on","open|at|to","開電視用 turn on。"],
["fi","Can I __ your pen?","我可以借用你的筆嗎？","borrow","lend|loan|rent","向別人借來用是 borrow，借給別人是 lend。"],
["fi","It's difficult __ me to learn English.","學英文對我來說很難","for","to|at|of","「對某人來說很難」是 It's difficult for + 人 + to + 動詞。"],
["ty","請開燈","Turn on the light please|Please turn on the light|Can you turn on the light|Could you turn on the light|Turn on the lights please|Please turn on the lights|Turn the light on please|Please turn the light on|Can you turn the light on|Could you turn the light on|Turn on the light|Turn the light on","turn on · light — 冠詞 the","open","開燈用 turn on，不用 open；指房間裏那盞燈，要加冠詞 the。"],
["ty","洗手間在哪裏？（美式：restroom）","Where is the restroom|Where's the restroom|Where is the bathroom|Where's the bathroom","where · restroom — 冠詞 the","a","美式英文說 restroom，英式的 toilet 也沒有錯；雙方都知道是哪個洗手間，用冠詞 the。"],
["ty","加油！（對外地朋友說，用 luck）","Good luck|Good luck to you|Best of luck|Wish you good luck|I wish you good luck","good · luck","oil","Add oil 是香港的本地用法；對外地人說 Good luck! 會較容易明白。"],
["ty","等等我","Wait for me|Please wait for me|Wait for me please","wait · for · me","to","wait 後面要加 for 才可以接人：Wait for me。"]]},
];
