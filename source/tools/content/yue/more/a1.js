/* yue-en stage A1: new lessons for Hong Kong Cantonese speakers. English side shared with ko-en (parity.js); Chinese text converted from
   zh-en and adapted per docs/profiles/yue.md, rewritten into written Cantonese (docs/briefs/yue-en-cantonese-rewrite.md); hk-english is a yue-only lesson. Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it 同 there：主語嘅位置唔可以空", blurb:"天氣、時間用 it；「某度有……」用 there is / there are。", deck:"閒談", body:`
<p>廣東話講「好凍」「落雨」「附近有間咖啡店」，都唔使主語。英文嘅主語位置唔可以空，所以要用冇實際意思嘅 <b>it</b> 同 <b>there</b> 嚟霸住個位。</p>
<h3>天氣、時間用 It</h3>
<p>呢度嘅 it 唔係解「佢」，只係霸住主語嘅位置。<b>Today very hot.</b> ✗ → <b>It's very hot today.</b> ✓</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|今日好凍}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|而家三點}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|落緊雨}}
<h3>「某度有……」用 There is / There are</h3>
<p>中文嘅「有」可以解「擁有」，又可以解「存在」：「我有架車」同「呢度有間銀行」用嘅係同一個「有」。講某個地方有某樣嘢嘅時候，英文唔用 have，要用 there is / there are 句式：一樣嘢用 <b>There is a …</b>，幾樣嘢用 <b>There are … -s</b>。講嘢嘅時候通常縮寫成 There's。</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|呢度附近有間咖啡店}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|有兩間房}}
<h3>疑問句同否定句</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|呢度有冇洗手間？}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|仲有冇位？}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|今日冇巴士}}
<h3>同 have 分清楚</h3>
<p>人擁有嘅嘢用 <b>have</b>，某個地方存在嘅嘢用 <b>there is</b>。所以唔可以講 <b>There has a bank near here</b>，亦都唔可以講 <b>In the park has many people</b>。</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|我有架車}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|出面有架車}}{{ex:There are many people in the park.|/ðer ər ˈmeni ˈpiːpl ɪn ðə ˈpɑːrk/|公園有好多人}}
<p>there are 後面如果仲有另一個動詞，要用 who 駁落去，或者索性唔用 there are：<b>There are many people have pets.</b> ✗ → <b>Many people have pets.</b> ✓</p>
{{ex:There are many people who have pets.|/ðer ər ˈmeni ˈpiːpl hu ˈhæv ˈpets/|有好多人養寵物}}
<div class="tip">最常見嘅錯誤：<b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>There have many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["「今日好熱」用英文點講？",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"講天氣要用 it 霸住主語嘅位置。"],["There ___ three people. 空格應該填咩？",["is","are","have","be"],1,"three people 係眾數，用 there are。"],["「呢度有冇洗手間？」用英文點講？",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"問某個地方有冇某樣嘢，用 Is there a …?"]],
practice:[
["mc","「落緊雨」=","It's raining.","Is raining.","There is raining.","Rain is.","講天氣用 it 做主語。"],
["mc","「呢度附近有間咖啡店」=","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","某個地方有某樣嘢用 there is；只有一間，加冠詞 a。"],
["mc","There ___ two rooms. 空格應該填咩？","are","is","have","has","rooms 係眾數，所以用 are。"],
["mc","「而家三點」=","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","講時間都係用 it 開頭。"],
["mc","「我有架車」=","I have a car.","There is a car me.","I am a car.","It's a car me.","人擁有嘅嘢用 have。"],
["or","今日好凍","It's cold today","There's","講天氣用 it 做主語。"],
["or","出面有架車","There's a car outside","cars","只有一架，用冠詞 a 同單數 car。"],
["or","有兩個位","There are two seats","seat is","兩個或以上用 are 同眾數 seats。"],
["fi","__ cold today.","今日好凍","It's|It is","Is|There's|This","用 it 霸住主語嘅位置。"],
["fi","There __ a bank near here.","附近有間銀行","is","are|have|be","只有一間，用 is。"],
["fi","__ there any seats?","仲有冇位？","Are","Is|Do|Have","seats 係眾數，用 Are。"],
["ty","今日好熱","It's hot today|It's very hot today|It's really hot today","it · hot · today — 天氣用 it","There's","講天氣要用 it 開頭。"],
["ty","呢度有冇洗手間？（美式：bathroom / restroom）","Is there a bathroom here|Is there a restroom here","is there · bathroom — 留意冠詞","the","第一次問到嘅嘢，加冠詞 a。"],
["ty","有兩間房（用 there）","There are two rooms","there are · two · room — 眾數","room","兩間房，用眾數 rooms。"]]},

{ id:"plurals", title:"名詞眾數 -s 同 this / these、my / your", blurb:"兩個或以上一定要加 -s。this 指一個，these 指幾個。", deck:"購物同付款", body:`
<p>中文數嘢靠量詞：「三本書」「兩隻貓」，名詞本身唔變。英文啱啱相反：唔使量詞，但係兩個或以上，名詞一定要用眾數 (plural)，加 <b>-s</b>。講咗 three 都唔可以慳咗個 -s：<b>three book</b> ✗ → <b>three books</b> ✓</p>
<p>廣東話講「啲書」，靠「啲」表示唔止一本，「書」字唔變；「哋」就只係用喺「我哋」「佢哋」呢類代名詞。兩樣都唔等於 -s：英文嘅 -s 人同物都要加，每次都唔可以少。people 本身已經係眾數，唔使再加 -s。</p>
<h3>眾數點樣變</h3>
<div class="tbl"><table><tr><th>規則</th><th>例子</th></tr><tr><td>大部分加 -s</td><td class="k">book → books</td></tr><tr><td>s、x、ch、sh 結尾加 -es</td><td class="k">box → boxes</td></tr><tr><td>輔音字母 + y 結尾，將 y 改做 i 再加 -es</td><td class="k">city → cities</td></tr><tr><td>不規則</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|兩本書}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|三個盒}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|我有兩個仔女}}
<h3>將 -s 讀出嚟</h3>
<p>廣東話嘅音節唔會用「輔音 + s」收尾，所以講英文嘅時候好容易吞咗個 -s：cats 讀成 "cass"，人哋就聽唔出係咪眾數。字尾嘅輔音同 -s 都要讀出嚟。-s 有三種讀法：</p>
<div class="tbl"><table><tr><th>前面嘅音</th><th>-s 嘅讀法</th><th>例子</th></tr><tr><td>/p/、/t/、/k/、/f/</td><td class="k">/s/</td><td class="k">books · cats</td></tr><tr><td>/s/、/z/、/ʃ/、/tʃ/、/dʒ/</td><td class="k">/ɪz/</td><td class="k">boxes · watches</td></tr><tr><td>其他音</td><td class="k">/z/</td><td class="k">keys · friends</td></tr></table></div>
{{ex:cats|/ˈkæts/|貓（眾數）}}{{ex:friends|/ˈfrendz/|朋友（眾數）}}{{ex:keys|/ˈkiːz/|鎖匙（眾數）}}
<h3>this / that 指一個，these / those 指幾個</h3>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|呢個係我個袋}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|呢啲係我嘅鎖匙}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|嗰對鞋好靚}}
<h3>my、your、his、her、our、their</h3>
<p>呢啲係所有格代名詞，表示「邊個嘅」。用咗所有格代名詞，就唔可以再加 a 或者 the。</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|呢部係唔係你嘅手機？}}{{ex:Her brothers live in Macau.|/hər ˈbrʌðərz ˈlɪv ɪn məˈkaʊ/|佢幾個兄弟都住喺澳門}}
<div class="tip">數字、many、these、those 後面嘅名詞一定用眾數：<b>two friend</b> ✗ → <b>two friends</b> ✓，<b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. 空格應該填咩？",["sister","sisters","a sister","sister's"],1,"two 後面用眾數 sisters。"],["___ are my keys. 空格應該填咩？",["This","That","These","It"],2,"keys 係眾數，所以用 These。"],["「呢個係我個袋」用英文點講？",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"有咗 my，就唔使再加冠詞。"]],
practice:[
["mc","「兩本書」=","two books","two book","two a book","twos book","兩個或以上要加眾數 -s。"],
["mc","child 嘅眾數係？","children","childs","childes","child","呢個係不規則嘅眾數。"],
["mc","___ shoes are nice.（嗰對鞋）","Those","That","This","It","shoes 係眾數，所以用 those。"],
["mc","「呢個係我個袋」=","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my 同冠詞唔可以一齊用。"],
["mc","box 嘅眾數係？","boxes","boxs","boxies","box","s、x、ch、sh 結尾嘅字加 -es。"],
["or","呢啲係我嘅鎖匙","These are my keys","key This","幾樣嘢用 these 同眾數 keys。"],
["or","我有兩個仔女","I have two children","child a","兩個仔女用眾數 children，唔加冠詞 a。"],
["or","嗰對鞋好靚","Those shoes are nice","That","shoes 係眾數，所以用 those。"],
["fi","I have three __.","我有三隻貓","cats","cat|a cat|cat's","三隻貓，用眾數 cats；字尾嘅 ts 要讀出嚟。"],
["fi","__ is my friend.","呢個係我朋友","This","These|Those|They","只有一個人，用 this。"],
["fi","Two __, please.","唔該，兩杯咖啡","coffees","coffee|a coffee|coffee's","叫咖啡嘅時候英文唔使講「杯」，直接用眾數 coffees。"],
["ty","呢啲係我嘅書","These are my books","these · my · book — 眾數","book","幾本書用 these 同眾數 books。"],
["ty","我有兩個姊妹","I have two sisters","have · two · sister — 眾數","sister","兩個姊妹，用眾數 sisters。"],
["ty","呢個係我個袋","This is my bag","this · my · bag — 唔加冠詞","a","有咗 my，就唔加冠詞 a。"]]},
{ id:"present", title:"現在式同語序：主語 + 動詞 + 賓語", blurb:"主語、動詞、賓語嘅次序同中文一樣，難在時間、地點擺喺邊。", deck:"自我介紹", body:`
<p>英文嘅基本語序同中文一樣，都係<b>主語 → 動詞 → 賓語</b>：我飲咖啡 → I drink coffee. 真正容易出錯嘅係其他部分嘅位置：廣東話將時間、地點擺喺動詞前面（「我每日喺屋企學英文」），英文一般擺喺句尾。</p>
<h3>主語 + 動詞 + 賓語</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|我飲咖啡}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|我學英文}}
<h3>地點同時間擺喺後面</h3>
<p>其餘嘅資料按<b>地點 → 時間</b>嘅次序擺喺句尾。</p>
{{ex:We live in Hong Kong.|/wi ˈlɪv ɪn ˌhɑːŋ ˈkɑːŋ/|我哋住喺香港}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|我每日學英文}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|佢哋週末要返工}}
<h3>現在式：習慣同事實</h3>
<p>現在式 (present tense) 表示經常做嘅事同唔會變嘅事實。否定句喺動詞前面加 <b>don't</b>。</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|我唔食肉}}
<h3>頻率副詞：always、usually、sometimes、never</h3>
<p>呢啲字擺喺一般動詞（be 以外嘅動詞）<b>前面</b>、be 動詞<b>後面</b>。always 同 never 唔擺句頭，亦都唔擺喺動詞後面：<b>I go always.</b> ✗ <b>Always I go.</b> ✗ → <b>I always go.</b> ✓。every day、at seven 呢類表示時間嘅字詞就擺喺句尾。</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|我通常七點起身}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|我夜晚從來唔飲咖啡}}{{ex:She's always late.|/ʃiz ˈɔːlweɪz ˈleɪt/|佢成日遲到}}
<div class="tip">跟住中文語序逐個字譯就會出錯：<b>I every day study English.</b> ✗ → <b>I study English every day.</b> ✓。先講主語同動詞，時間擺最後。</div>`,
check:[["「我飲咖啡」嘅正確語序係？",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"語序係主語 + 動詞 + 賓語。"],["I ___ eat meat.（唔食）",["not","am not","no","don't"],3,"一般動詞嘅否定用 don't。"],["always 擺喺邊度先啱？",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"頻率副詞擺喺一般動詞前面。"]],
practice:[
["mc","「我學英文」=","I study English.","I English study.","I am study English.","Study I English.","語序係主語 + 動詞 + 賓語。"],
["mc","「我唔食肉」=","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","一般動詞嘅否定用 don't。"],
["mc","「我哋住喺香港」=","We live in Hong Kong.","We in Hong Kong live.","We are live in Hong Kong.","We live Hong Kong in.","地點擺喺動詞後面。"],
["mc","「我通常七點起身」=","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually 擺喺一般動詞前面。"],
["mc","邊一句講緊每日都做嘅事？","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","習慣用現在式。"],
["or","我每日飲咖啡","I drink coffee every day","the am","習慣用現在式；泛指嘅 coffee 唔加冠詞。"],
["or","我睇好多書","I read many books","book","many 後面接眾數 books。"],
["or","我哋週末要返工","We work on weekends","are","一般動詞前面唔可以再加 be 動詞。"],
["fi","I __ like fish.","我唔鍾意食魚","don't|do not","not|am not|no","一般動詞嘅否定用 don't。"],
["fi","I __ English every day.","我每日學英文","study","am study|studying|to study","主語係 I，現在式直接用動詞原形。"],
["fi","They live __ Macau.","佢哋住喺澳門","in","at|on|to","城市前面用 in。"],
["ty","我飲茶（用 drink）","I drink tea","drink · tea — 唔加冠詞","a","泛指嘅 tea 唔加冠詞。"],
["ty","我鍾意貓","I like cats|I love cats","like · cat — 用眾數","cat","泛指一類動物用眾數 cats。"],
["ty","我唔食肉","I don't eat meat","don't · eat · meat","am","一般動詞嘅否定用 don't。"]]},
{ id:"questions", title:"疑問句：Do you …? 同疑問詞", blurb:"唔可以淨係將語調升高。Do 擺句頭，疑問詞擺最前。", deck:"求生英文 2", body:`
<p>廣東話喺句尾加「呀」「咩」「呢」，或者將語調升高，就變咗疑問句，疑問詞亦都留喺原位：「你去邊度呀？」。英文冇呢類句尾助詞，要改<b>語序</b>：助動詞或者 be 動詞擺去主語前面，疑問詞擺句頭。</p>
<h3>be 動詞：同主語調轉位置</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|你冇事吖嘛？}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|呢個係唔係你個袋？}}
<h3>一般動詞：句頭加 Do</h3>
<p>句入面嘅動詞唔係 be 嘅時候，喺句頭加 <b>Do</b>，其餘語序唔變。</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|你鍾唔鍾意咖啡？}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|你識唔識講英文？}}
<p>簡短回答：<b>Yes, I do.</b> / <b>No, I don't.</b></p>
<p>否定疑問句嘅回答要特別小心：Don't you like it?（你唔鍾意咩？）如果真係唔鍾意，要講 <b>No, I don't.</b>，等於中文嘅「係呀，我唔鍾意」。英文嘅 yes / no 跟事實，唔跟對方點樣問。</p>
<h3>疑問詞擺最前</h3>
<p>what（咩）、where（邊度）、when（幾時）、who（邊個）、why（點解）、how（點樣）擺句頭，後面用疑問句語序。</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|你住喺邊度？}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|你做咩工作？}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|洗手間喺邊度？}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|呢個幾多錢？}}
<p>問「……英文點講？」一樣要用疑問句語序：<b>How to say this in English?</b> ✗</p>
{{ex:How do you say this in English?|/ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/|呢個用英文點講？}}
<div class="tip">最常見嘅錯誤：<b>You go where?</b> ✗ → <b>Where are you going?</b> ✓，<b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓，<b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["「你鍾唔鍾意咖啡？」用英文點講？",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"一般動詞嘅疑問句用 Do 開頭。"],["「你住喺邊度？」用英文點講？",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"語序係疑問詞 + do + 主語 + 動詞。"],["Do you speak English? 嘅正確回答係？",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"用 do 問，就用 do 答。"]],
practice:[
["mc","「你識唔識講英文？」=","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","一般動詞嘅疑問句用 Do 開頭。"],
["mc","「你住喺邊度？」=","Where do you live?","Where you live?","Where are you live?","Where live you?","語序係疑問詞 + do + 主語 + 動詞。"],
["mc","「呢個幾多錢？」=","How much is this?","How much this is?","How much does this?","What much is this?","問價錢用 How much is …?"],
["mc","Do you like tea? — 正確嘅回答係？","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","用 do 問，就用 do 答。"],
["mc","「你做咩工作？」=","What do you do?","What are you do?","What you do?","What do you?","問職業用 What do you do?"],
["or","你鍾唔鍾意咖啡？","Do you like coffee","Are the","一般動詞嘅疑問句用 Do 開頭；泛指嘅 coffee 唔加冠詞。"],
["or","洗手間喺邊度？","Where is the bathroom","a do","指呢幢大廈入面嗰個洗手間，用冠詞 the。"],
["or","你住喺邊度？","Where do you live","are","一般動詞嘅疑問句要用 do。"],
["fi","__ you like music?","你鍾唔鍾意音樂？","Do","Are|Is|Does","一般動詞 like 嘅疑問句用 Do。"],
["fi","__ do you live?","你住喺邊度？","Where","What|Who|When","問地點用 where。"],
["fi","What time __ it?","而家幾點？","is","do|does|are","問時間用 be 動詞。"],
["ty","你識唔識講英文？","Do you speak English|Can you speak English","do · speak · English","Are","一般動詞嘅疑問句用 Do 開頭。"],
["ty","洗手間喺邊度？（美式：bathroom / restroom）","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — 冠詞 the","a","大家都知係邊個洗手間，用冠詞 the。"],
["ty","你鍾唔鍾意狗？","Do you like dogs","do · like · dog — 眾數","dog","泛指一類動物用眾數 dogs。"]]},
{ id:"third-s", title:"第三身單數：he / she / it 加 -s，does / doesn't", blurb:"主語係一個人或者一樣嘢，動詞加 -s。疑問同否定用 does。", deck:"自我介紹", body:`
<p>現在式入面，主語係 <b>he、she、it</b> 或者單一個人、一樣嘢嘅時候，動詞要加 <b>-s</b>，呢個就係第三身單數 (third person singular)。呢條規則喺學校實學過，難在講嘢嘅時候真係將 -s 講出嚟：廣東話嘅動詞唔會跟主語變，字尾嘅 -s 亦好容易吞咗。講嘢漏咗 -s，聽嘅人（包括口試考官）會當係文法錯誤。</p>
<div class="tbl"><table><tr><th>主語</th><th>動詞</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|佢喺銀行做嘢}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|佢鍾意足球}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|我媽媽好識煮嘢食}}
<h3>形式有變嘅動詞</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|佢有架車 (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|佢八點返工 (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|佢學英文 (study → studies)}}
<h3>將 -s 讀出嚟</h3>
<p>-s 有三種讀法，同名詞眾數嘅 -s 一樣：works 讀 /s/，goes 讀 /z/，watches 讀 /ɪz/。字尾嘅輔音唔好吞咗：works、likes 嘅字尾都係 /ks/，兩個音都要讀出嚟。</p>
{{ex:works|/ˈwɜːrks/|做嘢（第三身單數）}}{{ex:goes|/ˈgoʊz/|去（第三身單數）}}{{ex:watches|/ˈwɑːtʃɪz/|睇（第三身單數）}}
<h3>否定同疑問用 does</h3>
<p>用咗 <b>doesn't</b> 或者 <b>Does</b>，-s 就轉咗去 does 度，後面嘅動詞用原形。</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|佢唔飲咖啡}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|佢係咪住喺呢度？}}
<div class="tip">最常見嘅錯誤：<b>She work here.</b> ✗ → <b>She works here.</b> ✓，<b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Kowloon. 空格應該填咩？",["live","lives","living","is live"],1,"主語係 she，動詞用第三身單數 lives。"],["He ___ like coffee. 空格應該填咩？",["don't","isn't","doesn't","not"],2,"主語係 he，否定用 doesn't。"],["「佢有架車」用英文點講？",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"have 喺 she 後面變做 has。"]],
practice:[
["mc","My brother ___ in Tokyo.","works","work","working","is work","主語係一個人，動詞用第三身單數 works。"],
["mc","「佢唔飲咖啡」=","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he 嘅否定係 doesn't + 動詞原形。"],
["mc","「佢係咪住喺呢度？」=","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does 後面嘅動詞唔加 -s。"],
["mc","have → she ___","has","haves","have","is have","have 嘅第三身單數係 has。"],
["mc","study → he ___","studies","studys","study","studyes","輔音字母 + y 結尾，將 y 改做 i 再加 -es。"],
["or","佢喺銀行做嘢","She works at a bank","work the","主語係 she，用 works；第一次提到嘅工作地點用冠詞 a。"],
["or","佢有兩隻狗","He has two dogs","have dog","主語係 he，用 has；兩隻狗用眾數 dogs。"],
["or","佢唔食肉","She doesn't eat meat","eats","doesn't 後面用唔加 -s 嘅動詞原形。"],
["fi","He __ soccer.","佢鍾意足球","likes","like|liking|is like","主語係 he，用第三身單數 likes。"],
["fi","__ she speak English?","佢識唔識講英文？","Does","Do|Is|Are","主語係 she，疑問句用 Does。"],
["fi","She __ to work at eight.","佢八點返工","goes","go|going|gos","go 嘅第三身單數係 goes。"],
["ty","佢有架車（佢 = he）","He has a car","has · car — 冠詞 a","have","主語係 he，用 has；一架車，加冠詞 a。"],
["ty","佢鍾意貓（佢 = she）","She likes cats|She loves cats","likes · cat — 眾數","cat","主語係 she，用第三身單數 likes；泛指貓用眾數 cats。"],
["ty","佢唔住喺呢度（佢 = he）","He doesn't live here","doesn't · live · here","lives","doesn't 後面用動詞原形。"]]},
{ id:"countable", title:"可數名詞同不可數名詞：some、any、much、many", blurb:"water 前面唔可以加 a，後面亦唔可以加 -s。可數用 many，不可數用 much。", deck:"餐廳點餐", body:`
<p>中文數乜嘢都用量詞：一杯水、一項資料、一件傢俬、一個蘋果，所以淨係睇中文，睇唔出邊個名詞「不可數」。英文名詞分做<b>可數名詞</b> (countable) 同<b>不可數名詞</b> (uncountable)，要逐個記。</p>
<div class="tbl"><table><tr><th>可數名詞</th><th>不可數名詞</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time, information, advice, homework</td></tr><tr><td>可以加 a / an、數字、-s</td><td>唔可以加 a / an、數字、-s</td></tr></table></div>
<p>以下呢啲字特別多人錯加 -s，其實全部都係不可數：<b>staff、vocabulary、research、information、equipment、furniture、advice、luggage、homework</b>。<b>staffs</b>、<b>furnitures</b>、<b>a research</b> ✗ → <b>staff</b>、<b>furniture</b>、<b>research</b> ✓</p>
<h3>some 同 any</h3>
<p>表示「一啲」，肯定句用 <b>some</b>，否定句同疑問句用 <b>any</b>。不過請求同提議雖然係疑問句，都係用 some：Can I have some water? / Would you like some tea?</p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|我有啲錢}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|我一蚊都冇}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|你有冇問題？}}
<h3>many 同 much</h3>
<p>可數名詞用 <b>many</b> + 眾數，不可數名詞用 <b>much</b>。<b>a lot of</b> 兩種都用得。</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|幾多位？}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|幾多錢？}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|我冇乜時間}}
<h3>英文嘅「量詞」</h3>
<p>只有數不可數名詞嘅時候，先至用 a glass of、a cup of、a piece of 呢類講法。可數名詞直接加數字同 -s，唔使量詞：three books，唔會講 three pieces of book。</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|一杯水}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|一杯咖啡}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|一個建議}}
<div class="tip">最常見嘅錯誤：<b>a water</b>、<b>many money</b>、<b>informations</b> ✗ → <b>some water</b>、<b>much money</b>、<b>information</b> ✓</div>`,
check:[["How ___ people are there? 空格應該填咩？",["much","many","any","a"],1,"people 係可數名詞，用 many。"],["下面邊個係不可數名詞？",["apple","chair","water","friend"],2,"water 前面唔可以加 a，後面亦唔可以加 -s。"],["I don't have ___ money. 空格應該填咩？",["some","a","many","any"],3,"否定句用 any。"]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water 係不可數名詞，唔可以用 a 或者 many。"],
["mc","How ___ time do we have?","much","many","any","a","time 係不可數名詞，用 much。"],
["mc","「你有冇問題？」=","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any 後面嘅可數名詞用眾數。"],
["mc","「一杯水」=","a glass of water","a water glass of","one waters","a glass water","不可數名詞用 a glass of 嚟數。"],
["mc","I have ___ friends in Taipei.","many","much","a","an","friends 係可數名詞嘅眾數，用 many。"],
["or","我有啲錢","I have some money","a moneys","money 係不可數名詞，唔可以加冠詞 a，亦冇眾數 -s。"],
["or","唔該，兩個蘋果","Two apples please","apple","兩個蘋果，用眾數 apples。"],
["or","我冇乜時間","I don't have much time","many","time 係不可數名詞，用 much。"],
["fi","How __ is this?","呢個幾多錢？","much","many|any|some","問價錢用 how much。"],
["fi","I don't have __ questions.","我冇問題","any","some|much|a","否定句用 any。"],
["fi","a cup __ coffee","一杯咖啡","of","for|in|a","用 a cup of … 嚟數。"],
["ty","可唔可以畀啲水我？（用 Can I …）","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — 唔加冠詞","a","water 係不可數名詞，唔加冠詞 a，要用 some。"],
["ty","你有冇問題？（用 do）","Do you have any questions","any · question — 眾數","question","any 後面嘅可數名詞用眾數 questions。"],
["ty","幾多位？（用 people）","How many people","how many · people","much","人係可數嘅，用 many。"]]},
{ id:"object-have", title:"賓格 me、him、her 同 have", blurb:"動詞後面唔用 I，要用 me。仲有萬能動詞 have。", deck:"自我介紹", body:`
<p>中文嘅「我」「佢」擺喺邊都唔變：我識佢，佢識我。英文嘅代名詞要<b>變形</b>：擺喺動詞或者介詞<b>後面</b>，要用賓格（做賓語嗰陣嘅形式）。</p>
<div class="tbl"><table><tr><th>主格</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>賓格</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|佢識我}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|我鍾意佢}}{{ex:Can you help us?|/kən ju ˈhelp əs/|你可唔可以幫吓我哋？}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|我同佢一齊做嘢}}
<h3>he 定 she，his 定 her</h3>
<p>講廣東話嘅時候，男女都係「佢」，「佢嘅」亦唔分男女，所以講英文嗰陣好容易將 he 同 she、his 同 her 講錯。寫書面語嘅時候你會分開「他」同「她」，可見呢個分別你早就識，只係講嘢嘅時候要留多啲神：指女性一定用 she / her，指男性用 he / him / his。</p>
{{ex:My sister is a nurse. She works at night.|/maɪ ˈsɪstər ɪz ə ˈnɜːrs ‖ ʃi ˈwɜːrks ət ˈnaɪt/|我家姐係護士，佢夜晚返工}}{{ex:This is Mary and her husband.|/ˈðɪs ɪz ˈmeri ənd hər ˈhʌzbənd/|呢位係 Mary 同佢老公}}
<h3>have：有、擁有</h3>
<p>用人做主語講「有……」嘅時候用 have。屋企人、嘢、時間都可以用 have。</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|我有兩個兄弟}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|你有冇筆？}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|我冇時間}}
<h3>have：食、飲</h3>
<p>三餐嘅名前面唔加冠詞。</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|我哋食晏啦}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|我每朝都飲咖啡}}
<div class="tip">最常見嘅錯誤：<b>She knows I.</b> ✗ → <b>She knows me.</b> ✓，講家姐嘅時候用 <b>He works at night.</b> ✗ → <b>She works at night.</b> ✓</div>`,
check:[["I like ___.（佢，男）",["he","his","him","he's"],2,"動詞後面用賓格 him。"],["Can you help ___?（我哋）",["us","we","our","ours"],0,"動詞後面用賓格 us。"],["「你有冇筆？」用英文點講？",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have 係一般動詞，疑問句用 Do。"]],
practice:[
["mc","She knows ___.（我）","me","I","my","mine","動詞後面用賓格 me。"],
["mc","I like ___.（佢哋）","them","they","their","theirs","動詞後面用賓格 them。"],
["mc","「你可唔可以幫吓我哋？」=","Can you help us?","Can you help we?","Can you help our?","Can us help you?","動詞後面用 us。"],
["mc","「我哋食晏啦」=","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","三餐嘅名前面唔加冠詞。"],
["mc","「我有兩個兄弟」=","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","屋企人用 have 嚟講；兩個兄弟用眾數。"],
["or","你有冇筆？","Do you have a pen","the pens","隨便邊支筆都得，用冠詞 a 同單數 pen。"],
["or","我鍾意佢（女）","I like her","she","動詞後面用賓格 her。"],
["or","我有兩個姊妹","I have two sisters","sister a","兩個姊妹用眾數 sisters，唔可以加冠詞 a。"],
["fi","Call __ tonight.","今晚打電話畀我","me","I|my|mine","動詞後面用 me。"],
["fi","I work with __.","我同佢（男）一齊做嘢","him","he|his|he's","介詞後面都係用賓格。"],
["fi","She __ a dog.","佢養咗隻狗","has","have|is|haves","主語係 she，用第三身單數 has。"],
["ty","你可唔可以幫吓我？","Can you help me|Could you help me","can you · help · me","I","動詞後面用賓格 me。"],
["ty","你有冇筆？（用 do）","Do you have a pen","do you have · pen — 冠詞 a","the","隨便搵支筆，用冠詞 a。"],
["ty","我有好多朋友","I have many friends|I have a lot of friends","have · many · friend — 眾數","friend","many 後面接眾數 friends。"]]},
{ id:"can-like", title:"can、like + -ing、I'd like：識做嘅嘢同想要嘅嘢", blurb:"講自己識做咩、鍾意做咩、而家想要咩。", deck:"閒談", body:`
<p>自我介紹同叫嘢食嘅時候即刻用得着嘅三個句式。</p>
<h3>can：識、可以</h3>
<p><b>can + 動詞原形</b>。主語係 he、she 都唔加 -s。</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|我識游水}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|我唔識揸車}}{{ex:Can you speak Cantonese?|/kən ju ˈspiːk ˌkæntəˈniːz/|你識唔識講廣東話？}}
<h3>like + -ing：鍾意做某件事</h3>
<p>講興趣嘅時候，like、love 後面接動詞嘅 <b>-ing 形式</b>。廣東話講「我好鍾意」，但英文唔可以講 I very like，要講 I really like 或者 I like … very much。</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|我鍾意煮飯}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|我非常鍾意睇戲}}{{ex:I really like reading.|/aɪ ˈriːəli ˈlaɪk ˈriːdɪŋ/|我好鍾意睇書}}{{ex:I like it very much.|/aɪ ˈlaɪk ɪt ˈveri ˈmʌtʃ/|我好鍾意}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|我唔鍾意跑步}}
<h3>I'd like：我想要……</h3>
<p><b>I like</b> 係一向都鍾意，<b>I'd like</b> 係而家想要，語氣有禮貌。叫嘢食嘅時候用 I'd like。</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|唔該，我要一杯咖啡}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|要唔要飲啲茶？}}
<div class="tip">最常見嘅錯誤：<b>He can swims.</b> ✗ → <b>He can swim.</b> ✓，喺咖啡店講 <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓，<b>I very like it.</b> ✗ → <b>I really like it.</b> ✓</div>`,
check:[["She can ___ very well. 空格應該填咩？",["sings","sing","singing","to sing"],1,"can 後面接動詞原形。"],["「我鍾意煮飯」用英文點講？",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like 後面用 -ing 形式。"],["喺咖啡店叫嘢飲，最自然嘅講法係？",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"而家想要嘅嘢用 I'd like 嚟講。"]],
practice:[
["mc","He can ___ Japanese.","speak","speaks","speaking","to speak","can 後面接動詞原形。"],
["mc","「我唔識揸車」=","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can 嘅否定係 can't。"],
["mc","「我鍾意睇戲」=","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like 後面用 -ing；泛指電影用眾數 movies。"],
["mc","叫嘢飲嘅時候講「唔該，我要一杯咖啡」=","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","而家想要嘅嘢用 I'd like。"],
["mc","「要唔要飲啲茶？」=","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","請人食嘢飲嘢用 Would you like …?"],
["or","唔該，我要一杯咖啡","I'd like a coffee please","the coffees","叫嘅係一杯，用冠詞 a 同單數 coffee。"],
["or","我鍾意睇書","I like reading books","book read","like 後面用 -ing；泛指書用眾數 books。"],
["or","你識唔識游水？","Can you swim","swimming","can 後面接動詞原形。"],
["fi","I can't __.","我唔識游水","swim","swimming|swims|to swim","can't 後面接動詞原形。"],
["fi","I like __ music.","我鍾意聽音樂","listening to","listen to|listen|to listening","like 後面用 -ing 形式。"],
["fi","__ like a sandwich, please.","唔該，我要一份三文治","I'd|I would","I|I'm|I can","叫嘢食用 I'd like。"],
["ty","我鍾意煮飯","I like cooking|I love cooking|I like to cook|I love to cook","like · cook — 用 -ing","cook","like 後面用 -ing 形式。"],
["ty","唔該，我要一份三文治（用 I'd like）","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — 冠詞 a","the","隨便一份三文治，用冠詞 a。"],
["ty","我鍾意狗","I like dogs|I love dogs","like · dog — 眾數","dog","泛指狗用眾數 dogs。"]]},
{ id:"continuous", title:"做緊嘅事：be + -ing", blurb:"經常做嘅事用現在式，而家做緊嘅事用 be + -ing。", deck:"閒談", body:`
<p>廣東話嘅「緊」同英文嘅現在進行式 (present continuous) 好似：「我做緊嘢」→ I'm working. 分別係英文一定要有 <b>be 動詞</b>，動詞亦一定要變成 <b>-ing</b>，兩樣都唔可以少。</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|我而家做緊嘢}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|佢煮緊晚飯}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|落緊雨}}
<h3>疑問句同否定句</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|你做緊咩？}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|你有冇聽緊？}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|我冇瞓緊覺}}
<h3>同現在式比較</h3>
<div class="tbl"><table><tr><th>經常（現在式）</th><th>而家 (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>唔用 -ing 嘅動詞</h3>
<p>like、know、want、need、have（擁有）呢類表示<b>狀態</b>嘅動詞，就算講緊而家，都係用現在式，唔加 -ing。</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|我識佢}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|我想飲啲水}}
<div class="tip">最常見嘅錯誤係漏咗 be 動詞：<b>I working.</b> ✗ → <b>I'm working.</b> ✓，<b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["「你做緊咩？」用英文點講？",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"做緊嘅事用 be + -ing 嚟問。"],["I ___ coffee every morning. 空格應該填咩？",["am drinking","drinking","drink","am drink"],2,"每日嘅習慣用現在式。"],["下面邊一句係啱嘅？",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know、want、have（擁有）唔用 -ing 形式。"]],
practice:[
["mc","「我而家做緊嘢」=","I'm working now.","I work now am.","I'm work now.","I working now.","做緊嘅事用 be + -ing。"],
["mc","「佢煮緊晚飯」=","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","用 be + -ing；三餐嘅名前面唔加冠詞。"],
["mc","邊一句講緊每日都做嘅事？","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","習慣用現在式。"],
["mc","「你做緊咩？」=","What are you doing?","What do you doing?","What are you do?","What you are doing?","語序係疑問詞 + be + 主語 + -ing。"],
["mc","「我識佢」=","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know 唔用 -ing 形式。"],
["or","我睇緊書","I'm reading a book","read books","睇緊嘅係一本書，用冠詞 a 同單數 book。"],
["or","啲細路玩緊","The kids are playing","kid is","細路唔止一個，用眾數 kids 同 are。"],
["or","而家落緊雨","It's raining now","rains","而家發生緊嘅事用 be + -ing。"],
["fi","I'm __ TV.","我睇緊電視","watching","watch|watches|to watch","be 後面接 -ing 形式。"],
["fi","What __ you doing?","你做緊咩？","are","do|is|does","主語係 you，用 are。"],
["fi","She __ working today.","佢今日唔使返工","isn't|is not","doesn't|don't|not","be + -ing 嘅否定係 isn't。"],
["ty","我而家煮緊飯","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — 用 -ing","cook","做緊嘅事用 be + -ing。"],
["ty","我睇緊戲（用 movie）","I'm watching a movie","I'm · watching · movie — 冠詞 a","the","隨便一齣戲，用冠詞 a。"],
["ty","啲細路瞓緊覺","The kids are sleeping|The children are sleeping","kids · are · sleeping — 眾數","kid","細路唔止一個，用眾數 kids 同 are。"]]},
{ id:"past", title:"過去式：was / were 同 -ed", blurb:"be 動詞用 was / were，一般動詞加 -ed。疑問同否定用 did。", deck:"閒談", body:`
<p>廣東話講過去嘅事，通常淨係加個時間詞或者「咗」：「我尋日返咗工」。但「咗」表示完成，唔等於過去式 (past tense)：「我聽日食咗飯先走」講嘅係聽日。英文亦唔可以淨係靠 yesterday，動詞本身要變做過去式。be 動詞同一般動詞嘅過去式唔一樣。</p>
<h3>be 動詞嘅過去式：was / were</h3>
<p>I、he、she、it 用 <b>was</b>，you、we、they 用 <b>were</b>。</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|我嗰陣好攰}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|（嗰次）好好玩}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|我哋嗰陣喺屋企}}{{ex:Were you busy?|/wər ju ˈbɪzi/|你嗰陣忙唔忙？}}
<h3>一般動詞嘅過去式：加 -ed</h3>
<p>動詞後面加 <b>-ed</b>，主語係邊個都一樣。</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|我尋日返咗工}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|我哋睇咗一齣戲}}{{ex:She called me.|/ʃi ˈkɔːld mi/|佢打咗電話畀我}}
<h3>將 -ed 讀出嚟</h3>
<p>-ed 有三種讀法：worked、walked 讀 /t/，called、enjoyed 讀 /d/，wanted、needed 讀 /ɪd/。字尾嘅輔音就係「過去」嘅標記，一定要讀出嚟，但唔好加多個音節：walked 得一個音節，enjoyed 嘅字尾得一個 /d/，唔係 "enjoyded"。</p>
{{ex:walked|/ˈwɔːkt/|行咗（walk 嘅過去式）}}{{ex:enjoyed|/ɪnˈdʒɔɪd/|享受（過去式）}}{{ex:wanted|/ˈwɑːntɪd/|想要（want 嘅過去式）}}
<h3>否定同疑問用 did</h3>
<p>用咗 <b>didn't</b> 或者 <b>Did</b>，後面嘅動詞變返原形。</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|我尋日冇返工}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|你有冇打過電話畀我？}}
<div class="tip">最常見嘅錯誤：<b>I yesterday work.</b> ✗ → <b>I worked yesterday.</b> ✓，<b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓，<b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. 空格應該填咩？",["was","were","did","are"],1,"主語係 they，用 were。"],["「我尋日冇返工」用英文點講？",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't 後面接動詞原形。"],["Did you ___ the movie? 空格應該填咩？",["watch","watched","watching","watches"],0,"Did 後面接動詞原形。"]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","主語係 I，用 was。"],
["mc","「我哋睇咗一齣戲」=","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","一般動詞嘅過去式加 -ed；有 yesterday 都要用過去式。"],
["mc","「你尋日有冇打電話？」=","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did 後面接動詞原形。"],
["mc","「（嗰次）好好玩」=","It was fun.","It were fun.","It did fun.","It funned.","主語係 it，用 was。"],
["mc","「你嗰陣忙唔忙？」=","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy 表示狀態，用 be 動詞嚟問。"],
["or","我哋睇咗一齣戲","We watched a movie","watch movies","一齣戲，用冠詞 a 同單數 movie。"],
["or","我同我啲朋友一齊玩咗","I played with my friends","friend play","朋友唔止一個，用眾數 friends。"],
["or","我尋日冇返工","I didn't work yesterday","worked","didn't 後面接動詞原形。"],
["fi","We __ at home last night.","我哋尋晚喺屋企","were","was|did|are","主語係 we，用 were。"],
["fi","I __ soccer yesterday.","我尋日踢咗波","played","play|playing|was play","過去式加 -ed，有 yesterday 都唔可以慳。"],
["fi","__ you work yesterday?","你尋日有冇返工？","Did","Were|Do|Was","一般動詞過去式嘅疑問句用 Did。"],
["ty","我嗰陣好攰（用 was）","I was tired|I was very tired|I was really tired","was · tired","were","主語係 I，用 was。"],
["ty","我睇咗一齣戲（用 watch 同 movie）","I watched a movie","watched · movie — 冠詞 a","the","一齣戲，加冠詞 a。"],
["ty","我打咗電話畀我啲朋友（用 call）","I called my friends","called · my · friend — 眾數","friend","朋友唔止一個，用眾數 friends。"]]},
{ id:"irregular-past", title:"不規則動詞嘅過去式：went、ate、saw", blurb:"越常用嘅動詞越唔加 -ed。先記住呢 12 個。", deck:"閒談", body:`
<p>最常用嘅動詞，過去式往往係<b>不規則</b>嘅。呢啲字喺學校嘅不規則動詞表都背過，而家嘅目標係講嘢、打字嘅時候即刻反應到。</p>
<div class="tbl"><table><tr><th>原形</th><th>過去式</th><th>原形</th><th>過去式</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Macau.|/aɪ ˈwent tə məˈkaʊ/|我去咗澳門}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|我哋食咗薄餅}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|我睇咗一齣戲}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|我見咗我啲朋友}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|我買咗一本書}}
<p>唔少不規則動詞淨係靠元音嚟分現在同過去，所以元音要讀準：sit /ˈsɪt/ → sat /ˈsæt/，leave /ˈliːv/ → left /ˈleft/，feel /ˈfiːl/ → felt /ˈfelt/。</p>
<h3>疑問句同否定句用原形</h3>
<p><b>did</b> 已經表示過去，所以後面嘅動詞變返原形。</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|你做咗啲咩？}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|你去咗邊？}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|我冇去}}
<div class="tip">最常見嘅錯誤：<b>I goed.</b> ✗ → <b>I went.</b> ✓，<b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["go 嘅過去式係？",["goed","gone","went","going"],2,"go 嘅過去式係 went。"],["「你做咗啲咩？」用英文點講？",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did 後面接動詞原形 do。"],["I didn't ___ breakfast. 空格應該填咩？",["ate","eaten","eats","eat"],3,"didn't 後面接動詞原形。"]],
practice:[
["mc","eat 嘅過去式係？","ate","eated","eat","eaten","eat 嘅過去式係 ate。"],
["mc","「你去咗邊？」=","Where did you go?","Where did you went?","Where you went?","Where were you go?","did 後面接動詞原形。"],
["mc","「我買咗一本書」=","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy 嘅過去式係 bought；一本書，加冠詞 a。"],
["mc","see 嘅過去式係？","saw","seed","seen","sawed","see 嘅過去式係 saw。"],
["mc","「我冇去」=","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't 後面接動詞原形。"],
["or","我睇咗一齣戲","I saw a movie","see movies","一齣戲，用冠詞 a 同單數 movie；see 嘅過去式係 saw。"],
["or","我哋食咗薄餅","We ate pizza","eated","eat 嘅過去式係 ate。"],
["or","我見咗我啲朋友","I met my friends","friend meet","朋友唔止一個，用眾數 friends。"],
["fi","I __ to Tokyo last year.","我舊年去咗東京","went","go|goed|gone","go 嘅過去式係 went。"],
["fi","What did you __?","你食咗啲咩？","eat","ate|eaten|eating","did 後面接動詞原形。"],
["fi","She __ a new phone.","佢買咗部新手機","bought","buyed|buy|buys","buy 嘅過去式係 bought。"],
["ty","我去咗澳門","I went to Macau","went · to · Macau","go","go 嘅過去式係 went。"],
["ty","我買咗一本書","I bought a book","bought · book — 冠詞 a","the","一本書，加冠詞 a。"],
["ty","我見咗我啲朋友（用 meet）","I met my friends|I saw my friends","met · my · friend — 眾數","friend","朋友唔止一個，用眾數 friends。"]]},
{ id:"the", title:"再睇 the：幾時用，幾時唔用", blurb:"第一次提到用 a，再提到用 the。泛指嘅嘢乜都唔加。", deck:"問路同交通", body:`
<p>中文冇冠詞 (articles)，所以好容易漏咗 a，亦好容易加多咗 the。有研究分析過香港學生嘅英文作文：漏冠詞同多加冠詞都好常見，而最容易出錯嘅係<b>泛指</b>嘅情況。呢一課專門練<b>應該用 the</b> 同<b>乜都唔加</b>嘅情況。</p>
<h3>第一次用 a，再提到用 the</h3>
<p>對方第一次聽到嘅嘢用 a；啱啱講過、對方已經知道係邊個嘅，用 the。</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|我買咗件恤衫，件恤衫係藍色嘅}}
<h3>一睇就知係邊個，用 the</h3>
<p>呢間房嘅窗、附近嗰個車站，大家都知係指邊個，第一次講就用 the。另外，廣東話嘅「呢」「嗰」唔等於 the：「呢本書」係 this book。</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|可唔可以開一開個窗？}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|地鐵站喺邊度？}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|今日太陽好猛}}
<h3>泛指唔加 the</h3>
<p>泛指一類嘢或者抽象概念嘅時候，唔加冠詞，直接用眾數名詞或者不可數名詞。</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|我鍾意音樂（唔講 I like the music）}}{{ex:Dogs are friendly.|/ˈdɔːgz ər ˈfrendli/|狗好友善（唔講 The dogs are friendly）}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|人生苦短（唔講 The life is short）}}
<h3>地名大多數唔加 the</h3>
<p>Hong Kong、Central、Mong Kok 呢啲地名前面唔加 the；但 the MTR、the Peak 就要加。</p>
{{ex:I take the MTR to Central.|/aɪ ˈteɪk ði ˌem tiː ˈɑːr tə ˈsentrəl/|我搭港鐵去中環}}
<h3>唔加冠詞嘅固定講法</h3>
<p>常用嘅地點、交通、三餐講法，成句記低。</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|我搭巴士返工}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|我喺屋企}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|我十一點瞓覺}}
<div class="tip">先問自己：「對方知唔知係<b>邊一個</b>？」知就用 the，唔知就用 a；泛指就乜都唔加：<b>The money is important.</b> ✗ → <b>Money is important.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. 空格應該填咩？",["A","An","The","（唔使填）"],2,"啱啱提到嗰隻貓，用 the。"],["I go to ___ work by bus. 空格應該填咩？",["a","the","an","（唔使填）"],3,"go to work 唔加冠詞。"],["想請人打開呢間房嘅窗，應該點講？",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"大家都知係邊個窗，用 the。"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","啱啱提到嗰件恤衫，用 the。"],
["mc","「（附近嗰個）車站喺邊度？」=","Where's the station?","Where's a station?","Where's station?","Where the station?","指附近嗰個車站，用 the。"],
["mc","下面邊一句係啱嘅？","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work、by bus 都唔加冠詞。"],
["mc","「太陽好猛」=","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","獨一無二嘅嘢前面加 the。"],
["mc","「我喺屋企」=","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home 唔加冠詞。"],
["or","可唔可以開一開個窗？","Can you open the window","a windows","大家都知係邊個窗，用冠詞 the。"],
["or","我搭巴士返工","I go to work by bus","the a","go to work、by bus 都唔加冠詞。"],
["or","嗰隻狗好大","The dog is big","A dogs","之前提過嗰隻狗，用冠詞 the。"],
["fi","I saw a movie. __ movie was great.","我睇咗一齣戲，嗰齣戲好好睇","The","A|An|Some","啱啱提到嗰齣戲，用 the。"],
["fi","Where's __ bathroom?","洗手間喺邊度？","the","a|an|some","指呢幢大廈入面嗰個洗手間，用 the。"],
["fi","I have __ idea.","我有個主意","an","a|the|some","第一次提到，而且 idea 用元音開頭，用 an。"],
["ty","可唔可以閂埋度門？（用 Can you … close）","Can you close the door|Could you close the door","can you · close · door — 冠詞 the","a","大家都知係邊度門，用冠詞 the。"],
["ty","（附近嗰個）車站喺邊度？","Where is the station|Where's the station","where · station — 冠詞 the","a","指附近嗰個車站，用冠詞 the。"],
["ty","我喺屋企","I'm at home|I'm home","I'm · at · home — 唔加冠詞","the","home 前面唔加冠詞。"]]},
{ id:"adjectives", title:"形容詞同比較：bigger、more expensive、the best", blurb:"形容詞擺喺名詞前面，唔使「嘅」。比較用 -er / more，最高級用 the -est / the most。", deck:"購物同付款", body:`
<p>形容詞擺喺名詞<b>前面</b>，或者 be 動詞<b>後面</b>。中文講「大嘅袋」，英文唔使「嘅」：a big bag。另外，廣東話講「個袋好大」，句入面冇「係」；英文就一定要有 be 動詞：This bag is big.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|一個大袋}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|呢個袋好大}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|太細喇}}
<p>廣東話嘅「好」可以擺喺動詞前面（「我好鍾意」），但英文嘅 very 只可以修飾形容詞同副詞：<b>I very like it.</b> ✗ → <b>I really like it.</b> / <b>I like it very much.</b> ✓</p>
<h3>比較級：-er 或者 more</h3>
<p>短嘅字加 <b>-er</b>，長嘅字前面加 <b>more</b>。「比……」或者「……過」係 <b>than</b>，擺喺形容詞後面：「佢高過我」係 He's taller than me.</p>
<div class="tbl"><table><tr><th>原級</th><th>比較級</th><th>最高級</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|呢個平啲}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|呢個貴過嗰個}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|有冇大一個碼？}}
<h3>最高級前面加 the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|呢間係呢度最好嘅餐廳}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|邊個最平？}}
<h3>-ed 定 -ing：bored / boring</h3>
<p>講人嘅感受用 -ed，講令人有呢種感受嘅嘢用 -ing。</p>
{{ex:I'm bored.|/aɪm ˈbɔːrd/|我好悶}}{{ex:This movie is boring.|/ˈðɪs ˈmuːvi ɪz ˈbɔːrɪŋ/|呢齣戲好悶}}
<div class="tip">最常見嘅錯誤：<b>more cheaper</b>、<b>more better</b> ✗ → <b>cheaper</b>、<b>better</b> ✓。-er 同 more 唔可以一齊用。</div>`,
check:[["big 嘅比較級係？",["more big","biger","bigger","most big"],2,"big 係短嘅字，加 -er；佢用「一個元音字母 + 一個輔音字母」收尾，所以要重複 g：bigger。"],["This is ___ expensive than that. 空格應該填咩？",["more","most","much","very"],0,"長嘅字，比較級喺前面加 more。"],["good 嘅最高級係？",["the goodest","the most good","the better","the best"],3,"good 嘅最高級係 the best：good – better – the best。"]],
practice:[
["mc","cheap 嘅比較級係？","cheaper","more cheap","cheapper","most cheap","短嘅字加 -er。"],
["mc","「呢個貴啲」=","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","長嘅字前面加 more。"],
["mc","「有冇大一個碼？」=","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","語序係冠詞 + 形容詞 + 名詞。"],
["mc","good 嘅比較級係？","better","gooder","more good","best","good 嘅比較級係 better：good – better – best。"],
["mc","「呢間係最好嘅餐廳」=","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","最高級前面加 the。"],
["or","有冇大一個碼？","Do you have a bigger size","the sizes","隨便搵一個尺碼，用冠詞 a。"],
["or","呢個最平","This is the cheapest","a cheaper","最高級前面要加冠詞 the。"],
["or","呢個平過嗰個","This is cheaper than that","more","-er 形式嘅形容詞前面唔再加 more。"],
["fi","It's __ small.","太細喇","too","much|more|most","「太」係 too。"],
["fi","This is cheaper __ that one.","呢個平過嗰個","than","then|that|more","「比」或者「……過」係 than。"],
["fi","It's the __ expensive one.","呢個係最貴嘅","most","more|much|very","長嘅字，最高級係 the most。"],
["ty","有冇細一個碼？（用 Do you have）","Do you have a smaller size","smaller · size — 冠詞 a","the","隨便搵一個尺碼，用冠詞 a。"],
["ty","呢個最好","This is the best|This one is the best","the · best — 冠詞 the","a","最高級前面要加冠詞 the。"],
["ty","呢個平啲","This is cheaper|This one is cheaper","cheap — 比較級","more","短嘅字加 -er。"]]},
{ id:"going-to", title:"講計劃：be going to", blurb:"已經決定咗要做嘅事，用 be going to + 動詞原形。", deck:"閒談", body:`
<p>「我打算……」「我準備……」呢類<b>事先決定好嘅計劃</b>，用 <b>be + going to + 動詞原形</b>。be 動詞唔可以慳。</p>
{{ex:I'm going to visit Macau.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt məˈkaʊ/|我打算去澳門}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|佢打算買架車}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|我哋準備去食晚飯}}
<h3>否定同疑問</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|我唔打算去}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|你會唔會嚟？}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|呢個週末你打算做咩？}}
<h3>根據眼前嘅跡象嚟預測</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|就快落雨喇}}
<h3>常用嘅時間詞</h3>
<p>tomorrow（聽日）、tonight（今晚）、this weekend（呢個週末）、next week（下星期）一般擺喺句尾，唔擺喺動詞前面。</p>
<div class="tip">講嘢嘅時候 going to 通常讀成 <b>gonna</b>。另外唔好漏咗 be 動詞：<b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["「我聽日會去見朋友」用英文點講？",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"結構係 be + going to + 動詞原形。"],["She ___ going to study. 空格應該填咩？",["am","are","is","be"],2,"主語係 she，用 is。"],["「呢個週末你打算做咩？」用英文點講？",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"語序係疑問詞 + be + 主語 + going to。"]],
practice:[
["mc","「我打算去澳門」=","I'm going to go to Macau.","I going to go to Macau.","I'm going go to Macau.","I'm go to Macau going.","結構係 be + going to + 動詞原形。"],
["mc","They ___ going to come.","are","is","am","be","主語係 they，用 are。"],
["mc","「就快落雨喇」=","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to 後面接動詞原形。"],
["mc","「我唔打算去」=","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","not 擺喺 be 動詞後面。"],
["mc","「你會唔會嚟？」=","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","將 be 動詞擺去主語前面。"],
["or","佢打算買架車","She's going to buy a car","the cars","一架車，用冠詞 a 同單數 car。"],
["or","我準備去見我啲朋友","I'm going to meet my friends","friend","朋友唔止一個，用眾數 friends。"],
["or","我哋準備去食晚飯","We're going to have dinner","a","三餐嘅名 dinner 前面唔加冠詞。"],
["fi","I'm going __ study tonight.","我今晚打算溫書","to","for|at|will","going to 後面接動詞原形。"],
["fi","__ you going to come?","你會唔會嚟？","Are","Do|Is|Will","主語係 you，用 Are。"],
["fi","It's going to __ tomorrow.","聽日會落雨","rain","rains|raining|rained","going to 後面接動詞原形。"],
["ty","我打算睇一齣戲（用 going to 同 movie）","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — 冠詞 a","the","隨便一齣戲，用冠詞 a。"],
["ty","你打算做咩？（用 going to）","What are you going to do","what · going to · do","will","問計劃用 be going to。"],
["ty","我準備去見我啲朋友（用 going to）","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — 眾數","friend","朋友唔止一個，用眾數 friends。"]]},
{ id:"joining", title:"連接句子：and、but、or、so、because", blurb:"將兩個簡短嘅句子連埋一句。because 同 so 只用一個，唔可以成對用。", deck:"情緒同反應", body:`
<p>淨係講簡短嘅句子會顯得生硬。用呢五個連接詞將句子連埋，聽落自然得多。</p>
<h3>and、but、or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|我鍾意咖啡同茶}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|我好攰，但係好開心}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|咖啡定茶？}}
<h3>so：所以</h3>
<p>語序係<b>原因 + so + 結果</b>。</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|我好攰，所以返咗屋企}}
<h3>because：因為</h3>
<p>英文最常見嘅語序係<b>結果 + because + 原因</b>，原因擺後面。</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|我返咗屋企，因為我好攰}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|因為落雨，我留咗喺屋企}}
<h3>成對嘅連接詞只留一個</h3>
<p>廣東話習慣講「因為……所以……」「雖然……但係……」。英文入面 because 同 so、although 同 but 唔可以同時出現，只可以揀一個。</p>
<p>另外，英文唔可以淨係用一個逗號連住兩個完整嘅句子，中間要有連接詞：<b>I was tired, I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓</p>
<h3>too：都</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|我都鍾意}}
<div class="tip">because 同 so 唔可以用喺同一句：<b>Because I was tired, so I went home.</b> ✗ → <b>I was tired, so I went home.</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. 空格應該填咩？",["because","but","so","or"],2,"原因喺前、結果喺後，用 so。"],["I stayed home ___ I was sick. 空格應該填咩？",["because","so","but","and"],0,"結果喺前、原因喺後，用 because。"],["問對方「要咖啡定茶？」，應該點講？",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"二揀一用 or。"]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","意思相反，用 but 連接。"],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","原因喺前、結果喺後，用 so。"],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","結果喺前、原因喺後，用 because。"],
["mc","「咖啡定茶？」=","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","二揀一用 or。"],
["mc","「我好攰，但係好開心」=","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","表示轉折用 but。"],
["or","我鍾意貓同狗","I like cats and dogs","cat dog","泛指動物用眾數 cats 同 dogs。"],
["or","唔該，一杯咖啡同一份三文治","A coffee and a sandwich please","the or","各叫一份，每個名詞前面都加冠詞 a。"],
["or","我好肚餓，所以食咗嘢","I was hungry so I ate","because","原因喺前、結果喺後，用 so。"],
["fi","I'm tired __ happy.","我好攰，但係好開心","but","so|because|or","表示轉折用 but。"],
["fi","I stayed home __ it was raining.","因為落雨，我留咗喺屋企","because","so|but|or","結果喺前、原因喺後，用 because。"],
["fi","Coffee __ tea?","咖啡定茶？","or","so|but|because","二揀一用 or。"],
["ty","我鍾意咖啡同茶","I like coffee and tea","like · coffee · and · tea — 唔加冠詞","a","泛指嘅 coffee 同 tea 唔加冠詞。"],
["ty","我好攰，但係好開心","I'm tired but happy|I'm tired but I'm happy|I'm very tired but happy|I'm very tired but very happy|I'm tired but very happy","tired · but · happy","so","表示轉折用 but。"],
["ty","我鍾意狗同貓","I like dogs and cats|I like cats and dogs","dog · and · cat — 眾數","dog","泛指動物用眾數 dogs 同 cats。"]]},
{ id:"hk-english", title:"港式英文陷阱：喺香港通用，出外要換個講法", blurb:"開燈唔係 open the light，同外地人講「加油」可以用 Good luck。港式英文唔係錯，只係外地人未必明白。", deck:"港式英文陷阱", body:`
<p>香港人日日都用英文，好多講法喺本地個個都明。<b>港式英文唔係錯，只係外地人未必明白。</b>呢一課分開四類：由廣東話直譯過嚟、文法或者用字有問題嘅講法標 ✗，要改；本地字詞標「本地用法」，喺香港可以照用，出外換個講法就得；英式同美式就兩種都啱。</p>
<h3>一個中文動詞，幾個英文動詞</h3>
<div class="tbl"><table><tr><th>廣東話</th><th>英文</th><th>點樣分</th></tr><tr><td>「開」「熄」「閂」（燈、電視）</td><td class="k">turn on / turn off</td><td>電器用 turn on / off；門、窗先至用 open / close</td></tr><tr><td>「睇」</td><td class="k">look at / see / watch / read</td><td>望一望 look at，睇到 see，睇電視、睇波 watch，睇書 read</td></tr><tr><td>「帶」「攞」</td><td class="k">bring / take</td><td>帶嚟講嘢嘅人呢度 bring，帶去第度 take</td></tr><tr><td>「借」</td><td class="k">borrow / lend</td><td>問人借 borrow，借畀人 lend</td></tr><tr><td>「講」</td><td class="k">say / tell / speak / talk</td><td>講咗咩 say，話畀某人知 tell，講某種語言 speak，傾偈 talk</td></tr><tr><td>「食藥」</td><td class="k">take medicine</td><td>藥唔係 eat，用 take</td></tr></table></div>
{{ex:Can you turn on the light?|/kən ju ˈtɜːrn ˈɑːn ðə ˈlaɪt/|可唔可以開燈？}}{{ex:I'm reading a book.|/aɪm ˈriːdɪŋ ə ˈbʊk/|我睇緊書}}{{ex:Can you lend me a pen?|/kən ju ˈlend mi ə ˈpen/|可唔可以借支筆畀我？}}{{ex:Can I borrow your pen?|/kən aɪ ˈbɑːroʊ jʊr ˈpen/|我可唔可以借你支筆用下？}}{{ex:I'll take you to the station.|/aɪl ˈteɪk ju tə ðə ˈsteɪʃn/|我帶你去車站}}{{ex:Take this medicine three times a day.|/ˈteɪk ˈðɪs ˈmedɪsn ˈθriː ˈtaɪmz ə ˈdeɪ/|呢隻藥每日食三次}}
<p>動詞揀啱咗，後面嘅名詞都唔好唔記得冠詞：turn on <b>the</b> light，read <b>a</b> book，lend me <b>a</b> pen。take medicine 嘅 medicine 泛指藥物，唔加 a。</p>
<h3>由廣東話直譯過嚟嘅句式</h3>
<div class="tbl"><table><tr><th>廣東話</th><th>直譯 ✗</th><th>英文講法 ✓</th></tr><tr><td>「我好鍾意」</td><td>I very like it.</td><td class="k">I really like it. / I like it very much.</td></tr><tr><td>「有好多人養寵物」</td><td>There are many people have pets.</td><td class="k">Many people have pets.</td></tr><tr><td>「我好難學識英文」</td><td>I am difficult to learn English.</td><td class="k">It's difficult for me to learn English.</td></tr><tr><td>「雖然……但係……」</td><td>Although it rained, but we went.</td><td class="k">Although it rained, we went.</td></tr><tr><td>「我走先」</td><td>I go first.</td><td class="k">I'm leaving now.</td></tr><tr><td>「等我」</td><td>Wait me.</td><td class="k">Wait for me.</td></tr></table></div>
{{ex:I really like it.|/aɪ ˈriːəli ˈlaɪk ɪt/|我好鍾意}}{{ex:It's difficult for me to learn English.|/ɪts ˈdɪfɪkəlt fər mi tə ˈlɜːrn ˈɪŋglɪʃ/|學英文對我嚟講好難}}{{ex:I'm leaving now.|/aɪm ˈliːvɪŋ ˈnaʊ/|我走先喇}}{{ex:Wait for me.|/ˈweɪt fər mi/|等等我}}
<h3>本地用法：香港通用，外地人未必明白</h3>
<div class="tbl"><table><tr><th>本地用法</th><th>同外地人可以講</th></tr><tr><td>add oil（加油）</td><td class="k">Good luck! / You can do it! / Go for it!</td></tr><tr><td>shroff（繳費處）</td><td class="k">cashier / payment office</td></tr><tr><td>chop（印）</td><td class="k">stamp</td></tr><tr><td>lai see（利是）</td><td>可以照用，再補一句解釋</td></tr><tr><td>OK la、sorry ar、no need lor</td><td>唔加句尾助詞：OK、sorry、no need</td></tr></table></div>
<p>add oil 喺 2018 年已經收入《牛津英語詞典》，詞典註明佢源自香港英文。句尾加 la、ar、lor 係香港人之間傳短訊嘅寫法，朋友之間冇問題；考試、返工，同埋同唔識廣東話嘅人講嘢，就唔好加。</p>
{{ex:Good luck!|/ˈgʊd ˈlʌk/|加油！/ 祝你好運！}}{{ex:You can do it!|/ju kən ˈduː ɪt/|你做得到㗎！}}{{ex:Where's the cashier?|/ˈwerz ðə kæˈʃɪr/|收銀處喺邊度？}}{{ex:I need a stamp on this form.|/aɪ ˈniːd ə ˈstæmp ɑːn ˈðɪs ˈfɔːrm/|呢份表格要蓋印}}
<h3>學校教英式，呢個課程用美式</h3>
<p>香港學校教嘅係英式英文，呢個課程嘅英文同聲音係美式。兩種都啱，只係喺美國會聽到右邊嘅講法。</p>
<div class="tbl"><table><tr><th>中文</th><th>英式（香港學校）</th><th>美式（呢個課程）</th></tr><tr><td>升降機</td><td>lift</td><td class="k">elevator</td></tr><tr><td>單位</td><td>flat</td><td class="k">apartment</td></tr><tr><td>洗手間</td><td>toilet</td><td class="k">restroom</td></tr><tr><td>足球</td><td>football</td><td class="k">soccer</td></tr><tr><td>電影</td><td>film</td><td class="k">movie</td></tr><tr><td>手提電話</td><td>mobile (phone)</td><td class="k">cell phone</td></tr><tr><td>排隊嘅人龍</td><td>queue</td><td class="k">line</td></tr><tr><td>垃圾</td><td>rubbish</td><td class="k">trash</td></tr><tr><td>帳單</td><td>bill</td><td class="k">check</td></tr><tr><td>地下 (G/F)</td><td>ground floor</td><td class="k">first floor</td></tr><tr><td>假期</td><td>holiday</td><td class="k">vacation</td></tr></table></div>
{{ex:Where's the restroom?|/ˈwerz ðə ˈrestruːm/|洗手間喺邊度？}}{{ex:Take the elevator to the first floor.|/ˈteɪk ði ˈelɪveɪtər tə ðə ˈfɜːrst ˈflɔːr/|搭升降機去地下}}{{ex:I live in an apartment.|/aɪ ˈlɪv ɪn ən əˈpɑːrtmənt/|我住單位（唔係獨立屋）}}
<div class="tip">記住三點：直譯嘅句子要改 (<b>open the light</b> ✗ → <b>turn on the light</b> ✓)；本地用法喺香港照用，出外換個講法 (<b>Add oil!</b> → <b>Good luck!</b>)；英式同美式兩種都啱 (<b>lift</b> / <b>elevator</b>)。</div>`,
check:[["「可唔可以開燈？」用英文點講？",["Can you open the light?","Can you turn on the light?","Can you open light?","Can you turn open the light?"],1,"開燈、開電視用 turn on，open 只係用喺門、窗呢類打得開嘅嘢；指房入面嗰盞燈，用冠詞 the。"],["想同唔識廣東話嘅外國同事講「加油」，邊一句最易明？",["Add oil!","Add gas!","Good luck!","Put oil!"],2,"Add oil 係香港嘅本地用法，香港人之間冇問題；外地人未必明白，可以講 Good luck! 或者 You can do it!"],["「我好鍾意廣東菜」用英文點講？",["I really like Cantonese food.","I very like Cantonese food.","I like very Cantonese food.","I like very much Cantonese food."],0,"very 唔可以直接修飾動詞。「好鍾意」講 really like 或者 like … very much。"]],
practice:[
["mc","「開燈」=","turn on the light","open the light","open a light","turn the light open","開燈用 turn on，open 用喺門同窗。"],
["mc","「我睇緊書」=","I'm reading a book.","I'm seeing a book.","I'm looking a book.","I'm watching a book.","睇書係 read；see 係睇到，watch 係睇節目或者比賽。"],
["mc","「我走先喇」=","I'm leaving now.","I go first.","I walk first.","I'm go first now.","I go first 係廣東話嘅直譯，意思變咗「我排第一個去」；想講自己要走，講 I'm leaving now。"],
["mc","「等等我」=","Wait for me.","Wait me.","Wait to me.","Waiting me.","wait 後面要加 for 先可以接人。"],
["mc","「學英文文法對我嚟講好難」=","It's difficult for me to learn English grammar.","I am difficult to learn English grammar.","I difficult learn English grammar.","It's difficult me learn English grammar.","difficult 形容嘅係件事，唔係人，所以用 It's difficult for me to …。"],
["or","唔該熄咗盞燈","Please turn off the light","a close","熄燈用 turn off，唔用 close；指房入面嗰盞燈，要用冠詞 the。"],
["or","我想睇一本書","I want to read a book","books see","睇書用 read，唔用 see；「一本書」係單數，加冠詞 a，唔用眾數 books。"],
["or","我每日食藥","I take medicine every day","eat a","食藥用 take；medicine 喺呢度泛指藥物，唔加冠詞 a。"],
["or","我好鍾意","I really like it","very","very 唔可以直接擺喺動詞前面；「好鍾意」講 really like。"],
["fi","Can you turn __ the TV?","可唔可以開電視？","on","open|at|to","開電視用 turn on。"],
["fi","Can I __ your pen?","我可唔可以借你支筆用下？","borrow","lend|loan|rent","問人借嚟用係 borrow，借畀人係 lend。"],
["fi","It's difficult __ me to learn English.","學英文對我嚟講好難","for","to|at|of","「對某人嚟講好難」係 It's difficult for + 人 + to + 動詞。"],
["ty","唔該開燈","Turn on the light please|Please turn on the light|Can you turn on the light|Could you turn on the light|Turn on the lights please|Please turn on the lights|Turn the light on please|Please turn the light on|Can you turn the light on|Could you turn the light on|Turn on the light|Turn the light on","turn on · light — 冠詞 the","open","開燈用 turn on，唔用 open；指房入面嗰盞燈，要加冠詞 the。"],
["ty","洗手間喺邊度？（美式：restroom）","Where is the restroom|Where's the restroom|Where is the bathroom|Where's the bathroom","where · restroom — 冠詞 the","a","美式英文講 restroom，英式嘅 toilet 都冇錯；大家都知係邊個洗手間，用冠詞 the。"],
["ty","加油！（同外地朋友講，用 luck）","Good luck|Good luck to you|Best of luck|Wish you good luck|I wish you good luck","good · luck","oil","Add oil 係香港嘅本地用法；同外地人講 Good luck! 會易明啲。"],
["ty","等等我","Wait for me|Please wait for me|Wait for me please","wait · for · me","to","wait 後面要加 for 先可以接人：Wait for me。"]]},
];
