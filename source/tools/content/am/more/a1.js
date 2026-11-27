/* am-en stage A1: new lessons. Shorthand is expanded by _dsl.js. Explanations in Amharic (እርስዎ register, profile am.md §2). */
module.exports = [
{ id:"it-there", title:"it እና there፦ የባለቤቱን ቦታ መሙላት", blurb:"ለአየር ሁኔታና ለሰዓት it፤ «… አለ» ለማለት there is / there are።", deck:"ቀለል ያለ ጨዋታ", body:`
<p>በአማርኛ «ይበርዳል»፣ «እዚህ አጠገብ ካፌ አለ» ስንል ባለቤት አያስፈልገንም፤ ግሱ ራሱ ሁሉንም ይይዛል። እንግሊዝኛ ግን የባለቤቱ ቦታ ባዶ እንዲሆን አይፈቅድም። ስለዚህ ትርጉም የሌላቸው <b>it</b> እና <b>there</b> ያንን ቦታ ይሞላሉ።</p>
<h3>ለአየር ሁኔታና ለሰዓት It</h3>
<p>እዚህ it «እሱ» ማለት አይደለም፤ ቦታውን ብቻ ይይዛል። ሰዓት በእንግሊዝኛ በፈረንጅ አቆጣጠር ይነገራል፦ three o'clock (3 p.m.) በኢትዮጵያ ሰዓት ከሰዓት በኋላ 9 ሰዓት ነው።</p>
{{ex:It's cold today.|ኢትስ ኮውልድ ተˈዴይ|ዛሬ ይበርዳል}}{{ex:It's three o'clock.|ኢትስ ሥሪይ ኧˈክላክ|ከሰዓት በኋላ 9 ሰዓት (3 p.m.) ነው}}{{ex:It's raining.|ኢትስ ˈሬይኒን|ዝናብ እየዘነበ ነው}}
<h3>«… አለ» ለማለት There is / There are</h3>
<p>አንድ ከሆነ <b>There is a …</b>፣ ብዙ ከሆኑ <b>There are … -s</b> ይባላል። ሲነገር There's ተብሎ ያጥራል።</p>
{{ex:There's a cafe near here.|ዼርዝ ኧ ካˈፌይ ኒር ሂር|እዚህ አጠገብ ካፌ አለ}}{{ex:There are two rooms.|ዼር ኧር ቱው ሩውምዝ|ሁለት ክፍሎች አሉ}}
<h3>ጥያቄና አሉታዊ</h3>
{{ex:Is there a bathroom here?|ኢዝ ዼር ኧ ˈባሥሩውም ሂር|እዚህ መጸዳጃ ቤት አለ?}}{{ex:Are there any seats?|ኧር ዼር ˈኤኒ ሲይትስ|ባዶ መቀመጫ አለ?}}{{ex:There isn't a bus today.|ዼር ˈኢዝንት ኧ በስ ተˈዴይ|ዛሬ አውቶቡስ የለም}}
<h3>have እና there is</h3>
<p>አማርኛ ሁለቱንም «አለ» ይላል፦ «መኪና አለኝ»፣ «ውጭ መኪና አለ»። እንግሊዝኛ ግን ይለያቸዋል፦ አንድ ሰው የያዘውን ነገር ለመናገር <b>have</b>፣ አንድ ቦታ ላይ ያለውን ነገር ለመናገር <b>there is</b> ይጠቀሙ።</p>
{{ex:I have a car.|አይ ሃቭ ኧ ካር|መኪና አለኝ}}{{ex:There's a car outside.|ዼርዝ ኧ ካር አውትˈሳይድ|ውጭ መኪና አለ}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>Is cold.</b> ✗ ትክክለኛው፦ <b>It's cold.</b> ✓ · <b>Have a cafe here.</b> ✗ ትክክለኛው፦ <b>There's a cafe here.</b> ✓</div>`,
check:[["«ዛሬ ይሞቃል» በእንግሊዝኛ፦",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"ለአየር ሁኔታ የባለቤቱን ቦታ it ይሞላል።"],["There ___ three people. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["is","are","have","be"],1,"ብዙ ስለሆኑ there are ይባላል።"],["«እዚህ መጸዳጃ ቤት አለ?» በእንግሊዝኛ፦",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"አንድ ነገር መኖሩን ሲጠይቁ Is there a …? ይላሉ።"]],
practice:[
["mc","«ዝናብ እየዘነበ ነው» =","It's raining.","Is raining.","There is raining.","Rain is.","ለአየር ሁኔታ ባለቤቱ it ነው።"],
["mc","«እዚህ አጠገብ ካፌ አለ» =","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","አንድ ቦታ ላይ ያለ ነገር there is ነው፤ አንድ ስለሆነ አርቲክል a ይገባል።"],
["mc","There ___ two rooms. ባዶውን ቦታ የሚሞላው የትኛው ነው?","are","is","have","has","rooms ብዙ ቁጥር ስለሆነ are ይመጣል።"],
["mc","«ከሰዓት በኋላ 9 ሰዓት (3 p.m.) ነው» =","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","ሰዓት ሲናገሩም መጀመሪያ it ይመጣል።"],
["mc","«መኪና አለኝ» =","I have a car.","There is a car me.","I am a car.","It's a car me.","የራስዎ የሆነን ነገር ለመናገር have ይጠቀሙ።"],
["or","ዛሬ ይበርዳል","It's cold today","There's","ለአየር ሁኔታ ባለቤቱ it ነው።"],
["or","ውጭ መኪና አለ","There's a car outside","cars","አንድ መኪና ስለሆነ አርቲክል a እና ነጠላ ቁጥር car ይመጣሉ።"],
["or","ሁለት መቀመጫዎች አሉ","There are two seats","seat is","ከአንድ በላይ ሲሆን are እና ብዙ ቁጥር seats ይመጣሉ።"],
["fi","__ cold today.","ዛሬ ይበርዳል","It's|It is","Is|There's|This","የባለቤቱን ቦታ it ይሞላል።"],
["fi","There __ a bank near here.","እዚህ አጠገብ ባንክ አለ","is","are|have|be","አንድ ስለሆነ is ይመጣል።"],
["fi","__ there any seats?","ባዶ መቀመጫ አለ?","Are","Is|Do|Have","seats ብዙ ቁጥር ስለሆነ Are ይመጣል።"],
["ty","ዛሬ ይሞቃል","It's hot today","it · hot · today — ለአየር ሁኔታ it","There's","ለአየር ሁኔታ መጀመሪያ It's ይመጣል።"],
["ty","እዚህ መጸዳጃ ቤት አለ?","Is there a bathroom here|Is there a restroom here","is there · bathroom — አርቲክል ያስፈልጋል","the","ለመጀመሪያ ጊዜ የሚጠየቅ አንድ ነገር ስለሆነ አርቲክል a ይገባል።"],
["ty","ሁለት ክፍሎች አሉ","There are two rooms","there are · two · room — ብዙ ቁጥር","room","ሁለት ስለሆኑ ብዙ ቁጥር rooms ይሆናል።"]]},

{ id:"plurals", title:"ብዙ ቁጥር -s፣ this / these እና my / your", blurb:"ከአንድ በላይ ሲሆን -s የግድ ነው። this ለአንድ፣ these ለብዙ።", deck:"ግብይትና ክፍያ", body:`
<p>አማርኛ «ሦስት ፖም»፣ «ሁለት ልጅ» ሲል ስሙ ሳይለወጥ ሊቀር ይችላል፤ ከቁጥር በኋላ ብዙ ቁጥር «-ኦች» አማራጭ ነው። እንግሊዝኛ ግን ከአንድ በላይ ሲሆን በስሙ ላይ <b>-s</b> የግድ ይጨመራል፤ ቁጥሩ ቢነገርም አይቀርም።</p>
<h3>ብዙ ቁጥር አሠራር</h3>
<div class="tbl"><table><tr><th>ደንብ</th><th>ምሳሌ</th></tr><tr><td>በአብዛኛው -s</td><td class="k">book → books</td></tr><tr><td>s፣ x፣ ch፣ sh ሲጨርስ -es</td><td class="k">box → boxes</td></tr><tr><td>ተነባቢ + y → -ies</td><td class="k">city → cities</td></tr><tr><td>መደበኛ ያልሆነ</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|ቱው ቡክስ|ሁለት መጻሕፍት}}{{ex:three boxes|ሥሪይ ˈባክሲዝ|ሦስት ሣጥኖች}}{{ex:I have two children.|አይ ሃቭ ቱው ˈቺልድረን|ሁለት ልጆች አሉኝ}}
<h3>this / that ለአንድ፣ these / those ለብዙ</h3>
{{ex:This is my bag.|ዺስ ኢዝ ማይ ባግ|ይህ የኔ ቦርሳ ነው}}{{ex:These are my keys.|ዺይዝ ኧር ማይ ኪይዝ|እነዚህ የኔ ቁልፎች ናቸው}}{{ex:Those shoes are nice.|ዾውዝ ሹውዝ ኧር ናይስ|እነዚያ ጫማዎች ያምራሉ}}
<h3>my, your, his, her, our, their</h3>
<p>«የማን» የሚለውን የሚገልጹ ቃላት ናቸው፤ አማርኛ ይህን በስሙ መጨረሻ ያሳያል (ቦርሳዬ፣ ቦርሳዎ)። እነዚህ ቃላት ካሉ አርቲክል a ወይም the አብሮ አይመጣም።</p>
{{ex:Is this your phone?|ኢዝ ዺስ ዩር ፎውን|ይህ የእርስዎ ስልክ ነው?}}{{ex:Her brothers live in Hawassa.|ኸር ˈብረዸርዝ ሊቭ ኢን ኸˈዋሰ|ወንድሞቿ ሀዋሳ ይኖራሉ}}
<div class="tip">ቁጥር፣ many፣ these ወይም those ሲቀድሙ ስሙ ሁልጊዜ ብዙ ቁጥር ነው፦ <b>two friend</b> ✗ ትክክለኛው፦ <b>two friends</b> ✓ · <b>my a bag</b> ✗ ትክክለኛው፦ <b>my bag</b> ✓</div>`,
check:[["I have two ___. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["sister","sisters","a sister","sister's"],1,"ሁለት ስለሆኑ ብዙ ቁጥር sisters ይሆናል።"],["___ are my keys. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["This","That","These","It"],2,"keys ብዙ ቁጥር ስለሆነ These ይመጣል።"],["«ይህ የኔ ቦርሳ ነው» በእንግሊዝኛ፦",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"my ካለ አርቲክል አይገባም።"]],
practice:[
["mc","«ሁለት መጻሕፍት» =","two books","two book","two a book","twos book","ከአንድ በላይ ሲሆን ብዙ ቁጥር -s ይጨመራል።"],
["mc","child የሚለው ቃል ብዙ ቁጥሩ የትኛው ነው?","children","childs","childes","child","መደበኛ ያልሆነ ብዙ ቁጥር ነው።"],
["mc","___ shoes are nice. («እነዚያ ጫማዎች»)","Those","That","This","It","shoes ብዙ ቁጥር ስለሆነ those ይመጣል።"],
["mc","«ይህ የኔ ቦርሳ ነው» =","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my እና አርቲክል አብረው አይመጡም።"],
["mc","box የሚለው ቃል ብዙ ቁጥሩ የትኛው ነው?","boxes","boxs","boxies","box","s፣ x፣ ch፣ sh ሲጨርስ -es ይጨመራል።"],
["or","እነዚህ የኔ ቁልፎች ናቸው","These are my keys","key This","ብዙ ስለሆኑ these እና ብዙ ቁጥር keys ይመጣሉ።"],
["or","ሁለት ልጆች አሉኝ","I have two children","child a","ሁለት ስለሆኑ ብዙ ቁጥር children ነው፤ አርቲክል a አይገባም።"],
["or","እነዚያ ጫማዎች ያምራሉ","Those shoes are nice","That","shoes ብዙ ቁጥር ስለሆነ those ይመጣል።"],
["fi","I have three __.","ሦስት ድመቶች አሉኝ","cats","cat|a cat|cat's","ሦስት ስለሆኑ ብዙ ቁጥር cats ይሆናል።"],
["fi","__ is my friend.","ይህ ጓደኛዬ ነው","This","These|Those|They","አንድ ሰው ስለሆነ this ይመጣል።"],
["fi","Two __, please.","ሁለት ቡና እባክዎ","coffees","coffee|a coffee|coffee's","ስኒዎቹን ቆጥረው ሲያዝዙ coffees ብለው በብዙ ቁጥር ይናገራሉ።"],
["ty","እነዚህ የኔ መጻሕፍት ናቸው","These are my books","these · my · book — ብዙ ቁጥር","book","ብዙ ስለሆኑ these እና ብዙ ቁጥር books ይመጣሉ።"],
["ty","ሁለት እህቶች አሉኝ","I have two sisters","have · two · sister — ብዙ ቁጥር","sister","ሁለት ስለሆኑ ብዙ ቁጥር sisters ይሆናል።"],
["ty","ይህ የኔ ቦርሳ ነው","This is my bag","this · my · bag — ያለ አርቲክል","a","my ካለ አርቲክል a አይገባም።"]]},
{ id:"present", title:"Simple Present እና የቃላት ቅደም ተከተል፦ ባለቤት + ግስ + ተሳቢ", blurb:"አማርኛ ግሱን መጨረሻ ላይ ያደርጋል፤ እንግሊዝኛ ግን ከባለቤቱ ቀጥሎ።", deck:"ራስን ማስተዋወቅ", body:`
<p>አማርኛ «ቡና <b>እጠጣለሁ</b>» ብሎ ግሱን መጨረሻ ላይ ያስቀምጣል፤ ተሳቢውንም በ«-ን» ያሳያል። እንግሊዝኛ «-ን» የለውም፤ ማን ምን እንደሚያደርግ የሚያሳየው ቅደም ተከተሉ ብቻ ነው፦ <b>ማን → ምን ያደርጋል → ምን</b>።</p>
<h3>ባለቤት + ግስ + ተሳቢ</h3>
{{ex:I drink coffee.|አይ ድሪንክ ˈኮፊ|ቡና እጠጣለሁ}}{{ex:I study English.|አይ ˈስተዲ ˈኢንግሊሽ|እንግሊዝኛ አጠናለሁ}}
<h3>ቦታና ጊዜ ከኋላ</h3>
<p>ሌላው መረጃ በ<b>ቦታ → ጊዜ</b> ቅደም ተከተል ከኋላ ይጨመራል።</p>
{{ex:We live in Addis Ababa.|ዊ ሊቭ ኢን ˈአዲስ ˈአበበ|አዲስ አበባ እንኖራለን}}{{ex:I study English every day.|አይ ˈስተዲ ˈኢንግሊሽ ˈኤቭሪ ዴይ|በየቀኑ እንግሊዝኛ አጠናለሁ}}{{ex:They work on weekends.|ዼይ ወርክ አን ˈዊይኬንድዝ|ቅዳሜና እሁድ ይሠራሉ}}
<h3>Simple Present (የአሁን ጊዜ)፦ ልማድና እውነታ</h3>
<p>ሁልጊዜ የሚደረግን ነገርና የማይለወጥ እውነታን ይገልጻል። አሉታዊ ለማድረግ ከግሱ በፊት <b>don't</b> ይገባል።</p>
{{ex:I don't eat meat.|አይ ዶውንት ኢይት ሚይት|ሥጋ አልበላም}}
<h3>ምን ያህል ጊዜ፦ always, usually, sometimes, never</h3>
<p>እነዚህ ቃላት ከግሱ <b>በፊት</b> ይመጣሉ። ሰዓቱም በፈረንጅ አቆጣጠር ነው፦ seven (7 a.m.) በኢትዮጵያ አቆጣጠር ጠዋት 1 ሰዓት ነው።</p>
{{ex:I usually get up at seven.|አይ ˈዩውዡኧሊ ጌት ኧፕ ኧት ˈሴቭን|ብዙውን ጊዜ ጠዋት 1 ሰዓት (7 a.m.) እነሳለሁ}}{{ex:I never drink coffee at night.|አይ ˈኔቨር ድሪንክ ˈኮፊ ኧት ናይት|ማታ በፍጹም ቡና አልጠጣም}}
<div class="tip">በአማርኛ ቅደም ተከተል ከተተረጎመ ስህተት ይሆናል፦ <b>I coffee drink.</b> ✗ ትክክለኛው፦ <b>I drink coffee.</b> ✓ ከባለቤቱ ቀጥሎ ወዲያውኑ ግሱን መናገር ይለማመዱ።</div>`,
check:[["«ቡና እጠጣለሁ» ትክክለኛው የቃላት ቅደም ተከተል የትኛው ነው?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"ባለቤት + ግስ + ተሳቢ ነው።"],["I ___ eat meat. («አልበላም»)",["not","am not","no","don't"],3,"be ያልሆኑ ግሶች አሉታዊያቸው don't ነው።"],["always ትክክለኛ ቦታው የትኛው ነው?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"always ከግሱ በፊት ይመጣል።"]],
practice:[
["mc","«እንግሊዝኛ አጠናለሁ» =","I study English.","I English study.","I am study English.","Study I English.","ባለቤት + ግስ + ተሳቢ ነው።"],
["mc","«ሥጋ አልበላም» =","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","be ያልሆኑ ግሶች አሉታዊያቸው don't ነው።"],
["mc","«አዲስ አበባ እንኖራለን» =","We live in Addis Ababa.","We in Addis Ababa live.","We are live in Addis Ababa.","We live Addis Ababa in.","ቦታው ከግሱ በኋላ ይመጣል።"],
["mc","«ብዙውን ጊዜ ጠዋት 1 ሰዓት (7 a.m.) እነሳለሁ» =","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually ከግሱ በፊት ይመጣል።"],
["mc","በየቀኑ የሚደረግን ነገር የሚገልጸው ዓረፍተ ነገር የትኛው ነው?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","ልማድ ለመግለጽ Simple Present ይጠቀሙ።"],
["or","በየቀኑ ቡና እጠጣለሁ","I drink coffee every day","the am","ልማድ ስለሆነ Simple Present ነው፤ coffee በአጠቃላይ ሲነገር አርቲክል አይወስድም።"],
["or","ብዙ መጻሕፍት አነባለሁ","I read many books","book","many ከኋላው ብዙ ቁጥር books ይመጣል።"],
["or","ቅዳሜና እሁድ እንሠራለን","We work on weekends","are","be ያልሆነ ግስ ባለበት are አይጨመርም።"],
["fi","I __ like fish.","ዓሣ አልወድም","don't|do not","not|am not|no","be ያልሆኑ ግሶች አሉታዊያቸው don't ነው።"],
["fi","I __ English every day.","በየቀኑ እንግሊዝኛ አጠናለሁ","study","am study|studying|to study","Simple Present ውስጥ ግሱ እንዳለ (1ኛ ቅርጽ) ይመጣል።"],
["fi","They live __ Hawassa.","ሀዋሳ ይኖራሉ","in","at|on|to","ለከተማ in ይጠቀሙ።"],
["ty","ሻይ እጠጣለሁ","I drink tea","drink · tea — ያለ አርቲክል","a","tea በአጠቃላይ ሲነገር አርቲክል አይወስድም።"],
["ty","ድመት እወዳለሁ","I like cats","like · cat — ብዙ ቁጥር","cat","ድመቶችን በአጠቃላይ ሲናገሩ ብዙ ቁጥር cats ይጠቀሙ።"],
["ty","ሥጋ አልበላም","I don't eat meat","don't · eat · meat","am","be ያልሆኑ ግሶች አሉታዊያቸው don't ነው።"]]},
{ id:"questions", title:"ጥያቄ መጠየቅ፦ Do you …? እና የጥያቄ ቃላት", blurb:"ድምፅን ከፍ ማድረግ ብቻ አይበቃም። Do ይቀድማል፤ የጥያቄ ቃሉ መጀመሪያ ይመጣል።", deck:"መሠረታዊ አባባሎች 2", body:`
<p>አማርኛ ጥያቄ ሲጠይቅ የቃላትን ቅደም ተከተል አይቀይርም፦ «ቡና ትወዳለህ?» በድምፅ ብቻ ጥያቄ ይሆናል፤ «የት ትኖራለህ?» ውስጥም የጥያቄ ቃሉ ከግሱ ፊት ይቆማል። እንግሊዝኛ ግን ጥያቄ ለማድረግ <b>የቃላትን ቅደም ተከተል</b> ይቀይራል።</p>
<h3>be (am / is / are)፦ ቦታ መቀያየር</h3>
{{ex:Are you okay?|ኧር ዩ ኦውˈኬይ|ደህና ነዎት?}}{{ex:Is this your bag?|ኢዝ ዺስ ዩር ባግ|ይህ የእርስዎ ቦርሳ ነው?}}
<h3>ሌላ ግስ ካለ፦ Do ይቀድማል</h3>
<p>ራስዎን ይጠይቁ፦ «ዓረፍተ ነገሩ be ብቻ ሳይሆን ሌላ ግስም አለው?» (like, live, speak …)። ካለው መጀመሪያ ላይ <b>Do</b> ይጨመራል፤ የቀረው ቅደም ተከተል አይለወጥም።</p>
{{ex:Do you like coffee?|ደ ዩ ላይክ ˈኮፊ|ቡና ይወዳሉ?}}{{ex:Do you speak English?|ደ ዩ ስፒይክ ˈኢንግሊሽ|እንግሊዝኛ ይናገራሉ?}}
<p>መልሱ አጭር ነው፦ <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>የጥያቄ ቃሉ መጀመሪያ ላይ</h3>
<p>what (ምን)፣ where (የት)፣ when (መቼ)፣ who (ማን)፣ why (ለምን)፣ how (እንዴት) መጀመሪያ ላይ ይቆማሉ፤ ከዚያ የጥያቄው ቅደም ተከተል ይቀጥላል። እንደ አማርኛው ከግሱ ፊት ብቻ አይቀመጡም።</p>
{{ex:Where do you live?|ዌር ደ ዩ ሊቭ|የት ይኖራሉ?}}{{ex:What do you do?|ወት ደ ዩ ዱው|ሥራዎ ምንድን ነው?}}{{ex:Where is the bathroom?|ዌር ኢዝ ዸ ˈባሥሩውም|መጸዳጃ ቤቱ የት ነው?}}{{ex:How much is this?|ሃው መች ኢዝ ዺስ|ይህ ስንት ነው?}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>Where you live?</b> ✗ ትክክለኛው፦ <b>Where do you live?</b> ✓ · <b>Are you like coffee?</b> ✗ ትክክለኛው፦ <b>Do you like coffee?</b> ✓</div>`,
check:[["«ቡና ይወዳሉ?» በእንግሊዝኛ፦",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"like የሚል ግስ ስላለ ጥያቄው መጀመሪያ ላይ Do ያስፈልገዋል።"],["«የት ይኖራሉ?» በእንግሊዝኛ፦",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"የጥያቄ ቃል + do + ባለቤት + ግስ ነው።"],["Do you speak English? ለሚለው ትክክለኛው መልስ የትኛው ነው?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Do ተብሎ ሲጠየቅ መልሱም do ይይዛል።"]],
practice:[
["mc","«እንግሊዝኛ ይናገራሉ?» =","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","speak የሚል ግስ ስላለ ጥያቄው መጀመሪያ ላይ Do ያስፈልገዋል።"],
["mc","«የት ይኖራሉ?» =","Where do you live?","Where you live?","Where are you live?","Where live you?","የጥያቄ ቃል + do + ባለቤት + ግስ ነው።"],
["mc","«ይህ ስንት ነው?» =","How much is this?","How much this is?","How much does this?","What much is this?","ዋጋ ሲጠይቁ How much is …? ይላሉ።"],
["mc","Do you like tea? — ትክክለኛው መልስ የትኛው ነው?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Do ተብሎ ሲጠየቅ መልሱም do ይይዛል።"],
["mc","«ሥራዎ ምንድን ነው?» =","What do you do?","What are you do?","What you do?","What do you?","ሥራን ሲጠይቁ What do you do? ይላሉ።"],
["or","ቡና ይወዳሉ?","Do you like coffee","Are the","like ስላለ መጀመሪያ Do ይመጣል፤ coffee በአጠቃላይ ሲነገር አርቲክል አይወስድም።"],
["or","መጸዳጃ ቤቱ የት ነው?","Where is the bathroom","a do","በዚህ ሕንፃ ያለው የታወቀው መጸዳጃ ቤት ስለሆነ አርቲክል the ይመጣል (እንደ አማርኛው «-ቱ»)።"],
["or","የት ይኖራሉ?","Where do you live","are","live የሚል ግስ ስላለ do ያስፈልጋል።"],
["fi","__ you like music?","ሙዚቃ ይወዳሉ?","Do","Are|Is|Does","like የሚል ግስ ስላለ ጥያቄው Do ይይዛል።"],
["fi","__ do you live?","የት ይኖራሉ?","Where","What|Who|When","ቦታን ለመጠየቅ where ይጠቀሙ።"],
["fi","What time __ it?","ስንት ሰዓት ነው?","is","do|does|are","ሌላ ግስ ስለሌለ be ይበቃል።"],
["ty","እንግሊዝኛ ይናገራሉ?","Do you speak English|Can you speak English","do · speak · English","Are","speak የሚል ግስ ስላለ መጀመሪያ Do ይመጣል።"],
["ty","መጸዳጃ ቤቱ የት ነው?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — አርቲክል the","a","ተናጋሪውም አድማጩም የሚያውቁት መጸዳጃ ቤት ስለሆነ አርቲክል the ይመጣል።"],
["ty","ውሻ ይወዳሉ?","Do you like dogs","do · like · dog — ብዙ ቁጥር","dog","ውሾችን በአጠቃላይ ሲናገሩ ብዙ ቁጥር dogs ይጠቀሙ።"]]},
{ id:"third-s", title:"he / she / it እና -s፦ does / doesn't", blurb:"ባለቤቱ አንድ ሰው ወይም አንድ ነገር ሲሆን ግሱ -s ይወስዳል። ጥያቄና አሉታዊ does ይይዛሉ።", deck:"ራስን ማስተዋወቅ", body:`
<p>የአማርኛ ግስ ለእያንዳንዱ ባለቤት መጨረሻውን ይቀይራል፦ እሠራለሁ፣ ትሠራለህ፣ ይሠራል፣ ትሠራለች። እንግሊዝኛ ግን Simple Present (የአሁን ጊዜ) ውስጥ አንድ መጨረሻ ብቻ አለው፦ ባለቤቱ <b>he, she, it</b> ወይም አንድ ሰው ወይም አንድ ነገር ሲሆን ግሱ <b>-s</b> ይወስዳል። መጨረሻው አንድ ብቻ ስለሆነ በንግግር በቀላሉ ይረሳል።</p>
<div class="tbl"><table><tr><th>ባለቤት</th><th>ግስ</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|ሺ ወርክስ ኧት ኧ ባንክ|ባንክ ውስጥ ትሠራለች}}{{ex:He likes soccer.|ሂ ላይክስ ˈሳከር|እግር ኳስ ይወዳል}}{{ex:My mom cooks well.|ማይ ማም ኩክስ ዌል|እናቴ ምግብ በደንብ ታበስላለች}}
<h3>ቅርጻቸው ትንሽ የሚለወጥ ግሶች</h3>
{{ex:She has a car.|ሺ ሃዝ ኧ ካር|መኪና አላት (have → has)}}{{ex:He goes to work at eight.|ሂ ጎውዝ ተ ወርክ ኧት ኤይት|ጠዋት 2 ሰዓት (8 a.m.) ወደ ሥራ ይሄዳል (go → goes)}}{{ex:She studies English.|ሺ ˈስተዲዝ ˈኢንግሊሽ|እንግሊዝኛ ታጠናለች (study → studies)}}
<h3>አሉታዊና ጥያቄ፦ does</h3>
<p><b>doesn't</b> ወይም <b>Does</b> ሲገባ -s ወደ እነሱ ይዛወራል፤ ቀጥሎ የሚመጣው ግስ ያለ -s (1ኛ ቅርጽ) ይሆናል።</p>
{{ex:He doesn't drink coffee.|ሂ ˈደዝንት ድሪንክ ˈኮፊ|ቡና አይጠጣም}}{{ex:Does she live here?|ደዝ ሺ ሊቭ ሂር|እዚህ ትኖራለች?}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>She work here.</b> ✗ ትክክለኛው፦ <b>She works here.</b> ✓ · <b>Does she works?</b> ✗ ትክክለኛው፦ <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Addis Ababa. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["live","lives","living","is live"],1,"ባለቤቱ she ስለሆነ ግሱ -s ይወስዳል።"],["He ___ like coffee. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["don't","isn't","doesn't","not"],2,"ባለቤቱ he ሲሆን አሉታዊው doesn't ነው።"],["«መኪና አላት» በእንግሊዝኛ፦",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"ባለቤቱ she ሲሆን have has ይሆናል።"]],
practice:[
["mc","My brother ___ in Hawassa.","works","work","working","is work","አንድ ሰው ስለሆነ works ይሆናል።"],
["mc","«ቡና አይጠጣም» =","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","ባለቤቱ he ሲሆን አሉታዊው doesn't + 1ኛ ቅርጽ ነው።"],
["mc","«እዚህ ትኖራለች?» =","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does ከኋላው ያለ -s ግስ ይመጣል።"],
["mc","have → she ___","has","haves","have","is have","have has ይሆናል።"],
["mc","study → he ___","studies","studys","study","studyes","ተነባቢ + y ሲጨርስ -ies ይሆናል።"],
["or","ባንክ ውስጥ ትሠራለች","She works at a bank","work the","she ስለሆነ works ይሆናል፤ ለመጀመሪያ ጊዜ ለሚጠቀስ የሥራ ቦታ አርቲክል a ይገባል።"],
["or","ሁለት ውሾች አሉት","He has two dogs","have dog","he ስለሆነ has፣ ሁለት ስለሆኑ ብዙ ቁጥር dogs ነው።"],
["or","ሥጋ አትበላም","She doesn't eat meat","eats","doesn't ከኋላው ያለ -s ግስ ይመጣል።"],
["fi","He __ soccer.","እግር ኳስ ይወዳል","likes","like|liking|is like","he ስለሆነ likes ይሆናል።"],
["fi","__ she speak English?","እንግሊዝኛ ትናገራለች?","Does","Do|Is|Are","ባለቤቱ she ሲሆን ጥያቄው Does ይይዛል።"],
["fi","She __ to work at eight.","ጠዋት 2 ሰዓት (8 a.m.) ወደ ሥራ ትሄዳለች","goes","go|going|gos","go goes ይሆናል።"],
["ty","መኪና አለው","He has a car","has · car — አርቲክል a","have","he ስለሆነ has፤ አንድ መኪና ስለሆነ አርቲክል a ይገባል።"],
["ty","ድመት ትወዳለች","She likes cats","likes · cat — ብዙ ቁጥር","cat","she ስለሆነ likes፤ ድመቶችን በአጠቃላይ ሲናገሩ ብዙ ቁጥር cats ነው።"],
["ty","እዚህ አይኖርም","He doesn't live here","doesn't · live · here","lives","doesn't ከኋላው 1ኛ ቅርጽ ይመጣል።"]]},
{ id:"countable", title:"የሚቆጠር እና የማይቆጠር ስም፦ some, any, much, many", blurb:"water አርቲክል a ወይም -s አይወስድም። many ለሚቆጠር፣ much ለማይቆጠር ስም።", deck:"ምግብ ቤት", body:`
<p>እንግሊዝኛ ስሞችን <b>የሚቆጠር ስም</b> እና <b>የማይቆጠር ስም</b> ብሎ ይከፍላል። አማርኛ እንዲህ ያለ ጥብቅ ክፍፍል የለውም፦ «ሁለት ውሃ» ብለን ሁለት ጠርሙስ ማለት እንችላለን። ስለዚህ <b>furnitures</b>፣ <b>informations</b> የሚሉ ስህተቶች በብዛት ይሰማሉ።</p>
<div class="tbl"><table><tr><th>የሚቆጠር ስም</th><th>የማይቆጠር ስም</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an፣ ቁጥር፣ -s ይወስዳል</td><td>a / an፣ ቁጥር፣ -s አይወስድም</td></tr></table></div>
<h3>some እና any</h3>
<p>«ትንሽ፣ ጥቂት» ለማለት በአዎንታዊ ዓረፍተ ነገር <b>some</b>፣ በአሉታዊና በጥያቄ <b>any</b> ይጠቀሙ። ነገር ግን አንድ ነገር ሲጠይቁ ወይም ሲጋብዙ ጥያቄም ቢሆን <b>some</b> ይባላል፦ <b>Can I have some water?</b></p>
{{ex:I have some money.|አይ ሃቭ ሰም ˈመኒ|ትንሽ ገንዘብ አለኝ}}{{ex:I don't have any money.|አይ ዶውንት ሃቭ ˈኤኒ ˈመኒ|ምንም ገንዘብ የለኝም}}{{ex:Do you have any questions?|ደ ዩ ሃቭ ˈኤኒ ˈክዌስቸንዝ|ጥያቄ አለዎት?}}
<p>«ምንም ገንዘብ የለኝም» ውስጥ አማርኛ ሁለት አሉታዊ ቃላት አሉት (ምንም … የለኝም)፤ እንግሊዝኛ ግን አንድ ብቻ ይጠቀማል፦ <b>I don't have any money.</b> እንጂ <b>I don't have no money.</b> አይባልም።</p>
<h3>many እና much</h3>
<p>ለሚቆጠር ስም <b>many</b> + ብዙ ቁጥር፣ ለማይቆጠር ስም <b>much</b> ይጠቀሙ። <b>a lot of</b> ለሁለቱም ይሆናል።</p>
{{ex:How many people?|ሃው ˈሜኒ ˈፒይፕል|ስንት ሰው ነው?}}{{ex:How much is it?|ሃው መች ኢዝ ኢት|ስንት ነው?}}{{ex:I don't have much time.|አይ ዶውንት ሃቭ መች ታይም|ብዙ ጊዜ የለኝም}}
<h3>የማይቆጠር ስምን መቁጠር</h3>
{{ex:a glass of water|ኧ ግላስ ኧቭ ˈዎተር|አንድ ብርጭቆ ውሃ}}{{ex:a cup of coffee|ኧ ከፕ ኧቭ ˈኮፊ|አንድ ስኒ ቡና}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>a water</b>, <b>many money</b>, <b>informations</b> ✗ ትክክለኛው፦ <b>some water</b>, <b>much money</b>, <b>information</b> ✓</div>`,
check:[["How ___ people are there? ባዶውን ቦታ የሚሞላው የትኛው ነው?",["much","many","any","a"],1,"people የሚቆጠር ስም ስለሆነ many ይመጣል።"],["ከሚከተሉት የማይቆጠር ስም የትኛው ነው?",["apple","chair","water","friend"],2,"water አርቲክል a ወይም -s አይወስድም።"],["I don't have ___ money. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["some","a","many","any"],3,"በአሉታዊ ዓረፍተ ነገር any ይጠቀሙ።"]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water የማይቆጠር ስም ስለሆነ a ወይም many አይወስድም።"],
["mc","How ___ time do we have?","much","many","any","a","time የማይቆጠር ስም ስለሆነ much ይመጣል።"],
["mc","«ጥያቄ አለዎት?» =","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any ከኋላው የሚቆጠር ስም በብዙ ቁጥር ይመጣል።"],
["mc","«አንድ ብርጭቆ ውሃ» =","a glass of water","a water glass of","one waters","a glass water","የማይቆጠር ስም a glass of በመጠቀም ይቆጠራል።"],
["mc","I have ___ friends in Addis Ababa.","many","much","a","an","friends የሚቆጠር ስም በብዙ ቁጥር ስለሆነ many ይመጣል።"],
["or","ትንሽ ገንዘብ አለኝ","I have some money","a moneys","money የማይቆጠር ስም ስለሆነ አርቲክል a ወይም ብዙ ቁጥር -s አይወስድም።"],
["or","ሁለት ፖም እባክዎ","Two apples please","apple","ሁለት ስለሆኑ ብዙ ቁጥር apples ይሆናል።"],
["or","ብዙ ጊዜ የለኝም","I don't have much time","many","time የማይቆጠር ስም ስለሆነ much ይመጣል።"],
["fi","How __ is this?","ይህ ስንት ነው?","much","many|any|some","ዋጋ ሲጠይቁ how much ይላሉ።"],
["fi","I don't have __ questions.","ጥያቄ የለኝም","any","some|much|a","በአሉታዊ ዓረፍተ ነገር any ይጠቀሙ።"],
["fi","a cup __ coffee","አንድ ስኒ ቡና","of","for|in|a","a cup of … ብለው ይቆጥራሉ።"],
["ty","ትንሽ ውሃ ሊሰጡኝ ይችላሉ?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — ያለ አርቲክል","a","water የማይቆጠር ስም ስለሆነ ከአርቲክል a ይልቅ some ይገባል።"],
["ty","ጥያቄ አለዎት?","Do you have any questions","any · question — ብዙ ቁጥር","question","any ከኋላው የሚቆጠር ስም በብዙ ቁጥር ይመጣል፦ questions።"],
["ty","ስንት ሰው ነው?","How many people","how many · people","much","people የሚቆጠር ስም ስለሆነ many ይመጣል።"]]},
{ id:"object-have", title:"me, him, her እና have", blurb:"ከግሱ በኋላ I ሳይሆን me ይመጣል። ደግሞም ብዙ ሥራ የሚሠራው have።", deck:"ራስን ማስተዋወቅ", body:`
<p>አማርኛ ተሳቢውን በግሱ ውስጥ ያስገባል፦ «ታውቀኛለች» ውስጥ «-ኛ» «እኔን» ማለት ነው፤ «ደውልልኝ» ውስጥ «-ልኝ» «ለእኔ» ማለት ነው። እንግሊዝኛ ግን ተሳቢውን ለብቻው ይጽፋል፤ ተውላጠ ስሙም <b>ቅርጹን</b> ይቀይራል። ከግስ ወይም ከመስተዋድድ <b>በኋላ</b> ይህ ቅርጽ ይመጣል፤ to አይጨመርም፦ <b>Call me.</b></p>
<div class="tbl"><table><tr><th>ባለቤት</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>ተሳቢ</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|ሺ ኖውዝ ሚ|ታውቀኛለች}}{{ex:I like him.|አይ ላይክ ሂም|እወደዋለሁ}}{{ex:Can you help us?|ከን ዩ ሄልፕ ኧስ|ሊረዱን ይችላሉ?}}{{ex:I work with her.|አይ ወርክ ዊዽ ኸር|ከእሷ ጋር እሠራለሁ}}
<h3>have፦ አለኝ</h3>
<p>አማርኛ «ሁለት ወንድሞች አሉኝ» ይላል፤ እንግሊዝኛ ግን ሰውን ባለቤት አድርጎ <b>have</b> ይጠቀማል። ቤተሰብ፣ ዕቃ፣ ጊዜ ሁሉም have ይወስዳሉ።</p>
{{ex:I have two brothers.|አይ ሃቭ ቱው ˈብረዸርዝ|ሁለት ወንድሞች አሉኝ}}{{ex:Do you have a pen?|ደ ዩ ሃቭ ኧ ፔን|እስክሪብቶ አለዎት?}}{{ex:I don't have time.|አይ ዶውንት ሃቭ ታይም|ጊዜ የለኝም}}
<h3>have፦ መብላት፣ መጠጣት</h3>
<p>የምግብ ሰዓት ስሞች (breakfast, lunch, dinner) አርቲክል አይወስዱም።</p>
{{ex:Let's have lunch.|ሌትስ ሃቭ ለንች|ምሳ እንብላ}}{{ex:I have coffee every morning.|አይ ሃቭ ˈኮፊ ˈኤቭሪ ˈሞርኒን|በየጠዋቱ ቡና እጠጣለሁ}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>She knows I.</b> ✗ ትክክለኛው፦ <b>She knows me.</b> ✓ · <b>I am two brothers.</b> ✗ ትክክለኛው፦ <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. («እሱን»)",["he","his","him","he's"],2,"ከግሱ በኋላ የተሳቢ ቅርጽ him ይመጣል።"],["Can you help ___? («እኛን»)",["us","we","our","ours"],0,"ከግሱ በኋላ የተሳቢ ቅርጽ us ይመጣል።"],["«እስክሪብቶ አለዎት?» በእንግሊዝኛ፦",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have be አይደለም፤ ስለዚህ ጥያቄው Do ይይዛል።"]],
practice:[
["mc","She knows ___. («እኔን»)","me","I","my","mine","ከግሱ በኋላ የተሳቢ ቅርጽ me ይመጣል።"],
["mc","I like ___. («እነሱን»)","them","they","their","theirs","ከግሱ በኋላ የተሳቢ ቅርጽ them ይመጣል።"],
["mc","«ሊረዱን ይችላሉ?» =","Can you help us?","Can you help we?","Can you help our?","Can us help you?","ከግሱ በኋላ us ይመጣል።"],
["mc","«ምሳ እንብላ» =","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","የምግብ ሰዓት ስሞች አርቲክል አይወስዱም።"],
["mc","«ሁለት ወንድሞች አሉኝ» =","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","ቤተሰብን ለመናገር have ይጠቀሙ፤ ሁለት ስለሆኑ ብዙ ቁጥር ነው።"],
["or","እስክሪብቶ አለዎት?","Do you have a pen","the pens","የትኛውም አንድ እስክሪብቶ ስለሆነ አርቲክል a እና ነጠላ ቁጥር pen ይመጣሉ።"],
["or","እወዳታለሁ","I like her","she","ከግሱ በኋላ የተሳቢ ቅርጽ her ይመጣል።"],
["or","ሁለት እህቶች አሉኝ","I have two sisters","sister a","ሁለት ስለሆኑ ብዙ ቁጥር sisters ነው፤ አርቲክል a አይገባም።"],
["fi","Call __ tonight.","ዛሬ ማታ ይደውሉልኝ","me","I|my|mine","«-ልኝ» በእንግሊዝኛ me ብቻ ነው፤ to አይጨመርም።"],
["fi","I work with __.","ከእሱ ጋር እሠራለሁ","him","he|his|he's","ከመስተዋድድ በኋላም የተሳቢ ቅርጽ ይመጣል።"],
["fi","She __ a dog.","ውሻ አላት","has","have|is|haves","she ስለሆነ has ይሆናል።"],
["ty","ሊረዱኝ ይችላሉ?","Can you help me|Could you help me","can you · help · me","I","ከግሱ በኋላ የተሳቢ ቅርጽ me ይመጣል።"],
["ty","እስክሪብቶ አለዎት?","Do you have a pen","do you have · pen — አርቲክል a","the","የትኛውም አንድ እስክሪብቶ ስለሆነ አርቲክል a ይገባል።"],
["ty","ብዙ ጓደኞች አሉኝ","I have many friends|I have a lot of friends","have · many · friend — ብዙ ቁጥር","friend","many ከኋላው ብዙ ቁጥር friends ይመጣል።"]]},
{ id:"can-like", title:"can፣ like + -ing፣ I'd like፦ የሚችሉትና የሚፈልጉት", blurb:"የሚችሉትን፣ የሚወዱትንና አሁን የሚፈልጉትን መናገር።", deck:"ቀለል ያለ ጨዋታ", body:`
<p>ራስን ለማስተዋወቅና ለማዘዝ ወዲያውኑ የሚያገለግሉ ሦስት አወቃቀሮች ናቸው።</p>
<h3>can፦ እችላለሁ</h3>
<p><b>can + 1ኛ ቅርጽ</b> ነው። ባለቤቱ he ወይም she ቢሆንም -s አይጨመርም።</p>
{{ex:I can swim.|አይ ከን ስዊም|መዋኘት እችላለሁ}}{{ex:I can't drive.|አይ ካንት ድራይቭ|መኪና መንዳት አልችልም}}{{ex:Can you speak Amharic?|ከን ዩ ስፒይክ አምˈሃሪክ|አማርኛ መናገር ይችላሉ?}}
<h3>like + -ing፦ … እወዳለሁ</h3>
<p>አማርኛ «ማብሰል እወዳለሁ» ሲል የግሱን ስም (ማብሰል) ይጠቀማል። እንግሊዝኛ በዚህ ቦታ <b>-ing ቅርጽ</b> ይጠቀማል፦ like ወይም love ከኋላቸው cooking ይመጣል።</p>
{{ex:I like cooking.|አይ ላይክ ˈኩኪን|ምግብ ማብሰል እወዳለሁ}}{{ex:I love watching movies.|አይ ለቭ ˈዋቺን ˈሙውቪዝ|ፊልም ማየት በጣም እወዳለሁ}}{{ex:I don't like running.|አይ ዶውንት ላይክ ˈረኒን|መሮጥ አልወድም}}
<h3>I'd like፦ … እፈልጋለሁ (በትሕትና)</h3>
<p><b>I like</b> ሁልጊዜ መውደድን ያሳያል፤ <b>I'd like</b> ግን አሁን የሚፈልጉትን በትሕትና ይገልጻል። አማርኛ ትሕትናውን በግሱ ያሳያል (ይስጡኝ)፤ እንግሊዝኛ ደግሞ I'd like እና please በሚሉ ቃላት። ሲያዝዙ I'd like ይበሉ፤ <b>Give me …</b> ውጭ ጨዋ አይመስልም።</p>
{{ex:I'd like a coffee, please.|አይድ ላይክ ኧ ˈኮፊ ፕሊይዝ|አንድ ቡና እባክዎ}}{{ex:Would you like some tea?|ወድ ዩ ላይክ ሰም ቲይ|ሻይ ይፈልጋሉ?}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>He can swims.</b> ✗ ትክክለኛው፦ <b>He can swim.</b> ✓ · ካፌ ውስጥ <b>I like a coffee.</b> ✗ ትክክለኛው፦ <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["sings","sing","singing","to sing"],1,"can ከኋላው 1ኛ ቅርጽ ይመጣል።"],["«ምግብ ማብሰል እወዳለሁ» በእንግሊዝኛ፦",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like ከኋላው -ing ቅርጽ ይመጣል።"],["ካፌ ውስጥ ሲያዝዙ በጣም ተፈጥሯዊው አባባል የትኛው ነው?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"አሁን የሚፈልጉትን I'd like ብለው ይናገሩ።"]],
practice:[
["mc","He can ___ Amharic.","speak","speaks","speaking","to speak","can ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["mc","«መኪና መንዳት አልችልም» =","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can አሉታዊው can't ነው።"],
["mc","«ፊልም ማየት እወዳለሁ» =","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like ከኋላው -ing ይመጣል፤ ፊልሞችን በአጠቃላይ ሲናገሩ ብዙ ቁጥር movies ነው።"],
["mc","ሲያዝዙ «አንድ ቡና እባክዎ» =","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","አሁን የሚፈልጉትን I'd like ብለው ይናገሩ።"],
["mc","«ሻይ ይፈልጋሉ?» =","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","ሲጋብዙ Would you like …? ይላሉ።"],
["or","አንድ ቡና እባክዎ","I'd like a coffee please","the coffees","የሚያዙት አንድ ስኒ ስለሆነ አርቲክል a እና ነጠላ ቁጥር coffee ይመጣሉ።"],
["or","መጽሐፍ ማንበብ እወዳለሁ","I like reading books","book read","like ከኋላው -ing ይመጣል፤ መጻሕፍትን በአጠቃላይ ሲናገሩ ብዙ ቁጥር books ነው።"],
["or","መዋኘት ይችላሉ?","Can you swim","swimming","can ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["fi","I can't __.","መዋኘት አልችልም","swim","swimming|swims|to swim","can't ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["fi","I like __ music.","ሙዚቃ ማዳመጥ እወዳለሁ","listening to","listen to|listen|to listening","like ከኋላው -ing ቅርጽ ይመጣል።"],
["fi","__ like a sandwich, please.","አንድ ሳንድዊች እባክዎ","I'd|I would","I|I'm|I can","ሲያዝዙ I'd like ይላሉ።"],
["ty","ምግብ ማብሰል እወዳለሁ","I like cooking|I love cooking|I like to cook","like · cook — -ing","cook","like ከኋላው -ing ቅርጽ ይመጣል።"],
["ty","አንድ ሳንድዊች እባክዎ","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — አርቲክል a","the","የትኛውም አንድ ሳንድዊች ስለሆነ አርቲክል a ይገባል።"],
["ty","ውሻ እወዳለሁ","I like dogs|I love dogs","like · dog — ብዙ ቁጥር","dog","ውሾችን በአጠቃላይ ሲናገሩ ብዙ ቁጥር dogs ነው።"]]},
{ id:"continuous", title:"Present Continuous፦ be + -ing (አሁን እየሆነ ያለ)", blurb:"ልማድ ለመናገር Simple Present፣ አሁን እየሆነ ላለው be + -ing።", deck:"ቀለል ያለ ጨዋታ", body:`
<p>አማርኛ «እሠራለሁ» (ልማድ) እና «እየሠራሁ ነው» (አሁን) ብሎ ይለያል፤ እንግሊዝኛም እንደዚሁ ይለያል። <b>አሁን በዚህ ቅጽበት</b> እየሆነ ያለ ነገር <b>be + -ing</b> ነው፦ Present Continuous (እየ- …)። «እየ-» ሲሉ be (am / is / are) ያስታውሱ።</p>
{{ex:I'm working now.|አይም ˈወርኪን ናው|አሁን እየሠራሁ ነው}}{{ex:She's cooking dinner.|ሺዝ ˈኩኪን ˈዲነር|እራት እያበሰለች ነው}}{{ex:It's raining.|ኢትስ ˈሬይኒን|ዝናብ እየዘነበ ነው}}
<h3>ጥያቄና አሉታዊ</h3>
{{ex:What are you doing?|ወት ኧር ዩ ˈዱዊን|ምን እየሠሩ ነው?}}{{ex:Are you listening?|ኧር ዩ ˈሊሰኒን|እያዳመጡ ነው?}}{{ex:I'm not sleeping.|አይም ናት ˈስሊይፒን|እየተኛሁ አይደለም}}
<h3>ከ Simple Present ጋር ማወዳደር</h3>
<div class="tbl"><table><tr><th>ሁልጊዜ (Simple Present)</th><th>አሁን (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>-ing የማይወስዱ ግሶች</h3>
<p>like, know, want, need, have (ባለቤትነት) የመሳሰሉ <b>ሁኔታ የሚገልጹ ግሶች</b> (stative verb) አሁን ቢሆንም Simple Present ሆነው ይቀራሉ። አማርኛ «እየ-» የሚለውን ከእንግሊዝኛው -ing ሰፋ አድርጎ ስለሚጠቀም <b>I am knowing</b> የሚል ስህተት ይሰማል።</p>
{{ex:I know him.|አይ ኖው ሂም|አውቀዋለሁ}}{{ex:I want some water.|አይ ዋንት ሰም ˈዎተር|ውሃ እፈልጋለሁ}}
<div class="tip">be መርሳት የተለመደ ስህተት ነው፦ <b>I working.</b> ✗ ትክክለኛው፦ <b>I'm working.</b> ✓ · <b>I'm knowing.</b> ✗ ትክክለኛው፦ <b>I know.</b> ✓</div>`,
check:[["«ምን እየሠሩ ነው?» በእንግሊዝኛ፦",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"አሁን እየሆነ ያለውን be + -ing ብለው ይጠይቁ።"],["I ___ coffee every morning. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["am drinking","drinking","drink","am drink"],2,"በየጠዋቱ የሚደረግ ልማድ Simple Present ነው።"],["ከሚከተሉት ትክክለኛው ዓረፍተ ነገር የትኛው ነው?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know፣ want፣ have (ባለቤትነት) -ing አይወስዱም።"]],
practice:[
["mc","«አሁን እየሠራሁ ነው» =","I'm working now.","I work now am.","I'm work now.","I working now.","አሁን እየሆነ ያለ be + -ing ነው።"],
["mc","«እራት እያበሰለች ነው» =","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing ነው፤ የምግብ ሰዓት ስሞች አርቲክል አይወስዱም።"],
["mc","በየቀኑ የሚደረግን ነገር የሚገልጸው ዓረፍተ ነገር የትኛው ነው?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","ልማድ ለመግለጽ Simple Present ይጠቀሙ።"],
["mc","«ምን እየሠሩ ነው?» =","What are you doing?","What do you doing?","What are you do?","What you are doing?","የጥያቄ ቃል + be + ባለቤት + -ing ነው።"],
["mc","«አውቀዋለሁ» =","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know -ing የማይወስድ ሁኔታ የሚገልጽ ግስ ነው።"],
["or","መጽሐፍ እያነበብኩ ነው","I'm reading a book","read books","አሁን የሚያነቡት አንድ መጽሐፍ ስለሆነ አርቲክል a እና ነጠላ ቁጥር book ይመጣሉ።"],
["or","ልጆቹ እየተጫወቱ ነው","The kids are playing","kid is","ብዙ ስለሆኑ ብዙ ቁጥር kids እና are ይመጣሉ።"],
["or","አሁን ዝናብ እየዘነበ ነው","It's raining now","rains","አሁን እየሆነ ያለ be + -ing ነው።"],
["fi","I'm __ TV.","ቴሌቪዥን እያየሁ ነው","watching","watch|watches|to watch","be ከኋላው -ing ቅርጽ ይመጣል።"],
["fi","What __ you doing?","ምን እየሠሩ ነው?","are","do|is|does","you ሲሆን are ይመጣል።"],
["fi","She __ working today.","ዛሬ እየሠራች አይደለም","isn't|is not","doesn't|don't|not","be + -ing አሉታዊው isn't ነው።"],
["ty","አሁን ምግብ እያበሰልኩ ነው","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook — -ing · now","cook","አሁን እየሆነ ያለ be + -ing ነው።"],
["ty","ፊልም እያየሁ ነው","I'm watching a movie","I'm · watching · movie — አርቲክል a","the","የትኛውም አንድ ፊልም ስለሆነ አርቲክል a ይገባል።"],
["ty","ልጆቹ ተኝተዋል","The kids are sleeping|The children are sleeping","kids · are · sleeping — ብዙ ቁጥር","kid","ብዙ ስለሆኑ ብዙ ቁጥር kids እና are ይመጣሉ።"]]},
{ id:"past", title:"Simple Past (ኃላፊ ጊዜ)፦ was / were እና -ed", blurb:"be በኃላፊ ጊዜ was / were ይሆናል፤ ሌሎች ግሶች -ed ይወስዳሉ። ጥያቄና አሉታዊ did ይይዛሉ።", deck:"ቀለል ያለ ጨዋታ", body:`
<p>ከአማርኛው «ሠራሁ»፣ «ደከመኝ» ጋር ይመሳሰላል። እንግሊዝኛ ግን be እና ሌሎቹ ግሶች የተለያየ ኃላፊ ጊዜ አላቸው።</p>
<h3>be በኃላፊ ጊዜ፦ was / were</h3>
<p>I, he, she, it ሲሆን <b>was</b>፣ you, we, they ሲሆን <b>were</b> ነው።</p>
{{ex:I was tired.|አይ ወዝ ˈታየርድ|ደክሞኝ ነበር}}{{ex:It was fun.|ኢት ወዝ ፈን|አስደሳች ነበር}}{{ex:We were at home.|ዊ ወር ኧት ሆውም|ቤት ነበርን}}{{ex:Were you busy?|ወር ዩ ˈቢዚ|ሥራ በዝቶብዎት ነበር?}}
<h3>ሌሎች ግሶች በኃላፊ ጊዜ፦ -ed</h3>
<p>በግሱ መጨረሻ ላይ <b>-ed</b> ይጨመራል። አማርኛ ለእያንዳንዱ ባለቤት መጨረሻውን ይቀይራል (ሠራሁ፣ ሠራች፣ ሠሩ)፤ እንግሊዝኛ ግን ለሁሉም አንድ ቅርጽ አለው።</p>
{{ex:I worked yesterday.|አይ ወርክት ˈዬስተርዴይ|ትናንት ሠራሁ}}{{ex:We watched a movie.|ዊ ዋችት ኧ ˈሙውቪ|ፊልም አየን}}{{ex:She called me.|ሺ ኮልድ ሚ|ደወለችልኝ}}
<h3>አሉታዊና ጥያቄ፦ did</h3>
<p><b>didn't</b> ወይም <b>Did</b> ሲገባ ግሱ ወደ 1ኛ ቅርጽ ይመለሳል።</p>
{{ex:I didn't work yesterday.|አይ ˈዲድንት ወርክ ˈዬስተርዴይ|ትናንት አልሠራሁም}}{{ex:Did you call me?|ዲድ ዩ ኮል ሚ|ደውለውልኝ ነበር?}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>I didn't worked.</b> ✗ ትክክለኛው፦ <b>I didn't work.</b> ✓ · <b>I was work.</b> ✗ ትክክለኛው፦ <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["was","were","did","are"],1,"they ሲሆን were ይመጣል።"],["«ትናንት አልሠራሁም» በእንግሊዝኛ፦",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't ከኋላው 1ኛ ቅርጽ ይመጣል።"],["Did you ___ the movie? ባዶውን ቦታ የሚሞላው የትኛው ነው?",["watch","watched","watching","watches"],0,"Did ከኋላው 1ኛ ቅርጽ ይመጣል።"]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","I ሲሆን was ይመጣል።"],
["mc","«ፊልም አየን» =","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","be ያልሆኑ ግሶች በኃላፊ ጊዜ -ed ይወስዳሉ።"],
["mc","«ትናንት ደውለው ነበር?» =","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["mc","«አስደሳች ነበር» =","It was fun.","It were fun.","It did fun.","It funned.","it ሲሆን was ይመጣል።"],
["mc","«ሥራ በዝቶብዎት ነበር?» =","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy ሁኔታ ስለሆነ ጥያቄው be ይይዛል።"],
["or","ፊልም አየን","We watched a movie","watch movies","አንድ ፊልም ስለሆነ አርቲክል a እና ነጠላ ቁጥር movie ይመጣሉ።"],
["or","(ልጅ ሲናገር) ከጓደኞቼ ጋር ተጫወትኩ","I played with my friends","friend play","ብዙ ስለሆኑ ብዙ ቁጥር friends ነው።"],
["or","ትናንት አልሠራሁም","I didn't work yesterday","worked","didn't ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["fi","We __ at home last night.","ትናንት ማታ ቤት ነበርን","were","was|did|are","we ሲሆን were ይመጣል።"],
["fi","I __ soccer yesterday.","ትናንት እግር ኳስ ተጫወትኩ","played","play|playing|was play","ኃላፊ ጊዜው -ed ይወስዳል።"],
["fi","__ you work yesterday?","ትናንት ሠርተው ነበር?","Did","Were|Do|Was","be ያልሆነ ግስ በኃላፊ ጊዜ ሲጠየቅ Did ይገባል።"],
["ty","ደክሞኝ ነበር","I was tired","was · tired","were","I ሲሆን was ይመጣል።"],
["ty","ፊልም አየሁ","I watched a movie","watched · movie — አርቲክል a","the","አንድ ፊልም ስለሆነ አርቲክል a ይገባል።"],
["ty","ለጓደኞቼ ደወልኩ","I called my friends","called · my · friend — ብዙ ቁጥር","friend","ብዙ ስለሆኑ ብዙ ቁጥር friends ነው፤ called ከኋላው to አይገባም።"]]},
{ id:"irregular-past", title:"መደበኛ ያልሆነ ኃላፊ ጊዜ፦ went, ate, saw", blurb:"በብዛት የሚነገሩ ግሶች -ed አይወስዱም። መጀመሪያ እነዚህን 12 ያጥኑ።", deck:"ቀለል ያለ ጨዋታ", body:`
<p>በየቀኑ የምንጠቀምባቸው ግሶች ኃላፊ ጊዜያቸው <b>መደበኛ ያልሆነ</b> ነው። ደንብ ስለሌላቸው በጥንድ (1ኛ ቅርጽ → 2ኛ ቅርጽ) ያጥኗቸው።</p>
<div class="tbl"><table><tr><th>1ኛ ቅርጽ</th><th>2ኛ ቅርጽ</th><th>1ኛ ቅርጽ</th><th>2ኛ ቅርጽ</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Hawassa.|አይ ዌንት ተ ኸˈዋሰ|ሀዋሳ ሄድኩ}}{{ex:We ate pizza.|ዊ ኤይት ˈፒይትሰ|ፒዛ በላን}}{{ex:I saw a movie.|አይ ሶ ኧ ˈሙውቪ|ፊልም አየሁ}}{{ex:I met my friends.|አይ ሜት ማይ ፍሬንድዝ|ጓደኞቼን አገኘሁ}}{{ex:I bought a book.|አይ ቦት ኧ ቡክ|አንድ መጽሐፍ ገዛሁ}}
<h3>በጥያቄና በአሉታዊ ወደ 1ኛ ቅርጽ</h3>
<p>ኃላፊ ጊዜውን <b>did</b> ስለሚያሳይ ግሱ ወደ 1ኛ ቅርጽ ይመለሳል።</p>
{{ex:What did you do?|ወት ዲድ ዩ ዱው|ምን አደረጉ?}}{{ex:Where did you go?|ዌር ዲድ ዩ ጎው|የት ሄዱ?}}{{ex:I didn't go.|አይ ˈዲድንት ጎው|አልሄድኩም}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>I goed.</b> ✗ ትክክለኛው፦ <b>I went.</b> ✓ · <b>Did you went?</b> ✗ ትክክለኛው፦ <b>Did you go?</b> ✓</div>`,
check:[["go በኃላፊ ጊዜ (2ኛ ቅርጽ) የትኛው ነው?",["goed","gone","went","going"],2,"go → went ነው።"],["«ምን አደረጉ?» በእንግሊዝኛ፦",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did ከኋላው 1ኛ ቅርጽ do ይመጣል።"],["I didn't ___ breakfast. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["ate","eaten","eats","eat"],3,"didn't ከኋላው 1ኛ ቅርጽ ይመጣል።"]],
practice:[
["mc","eat በኃላፊ ጊዜ የትኛው ነው?","ate","eated","eat","eaten","eat → ate ነው።"],
["mc","«የት ሄዱ?» =","Where did you go?","Where did you went?","Where you went?","Where were you go?","did ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["mc","«አንድ መጽሐፍ ገዛሁ» =","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy → bought ነው፤ አንድ ስለሆነ አርቲክል a ይገባል።"],
["mc","see በኃላፊ ጊዜ የትኛው ነው?","saw","seed","seen","sawed","see → saw ነው።"],
["mc","«አልሄድኩም» =","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["or","ፊልም አየሁ","I saw a movie","see movies","አንድ ፊልም ስለሆነ አርቲክል a እና ነጠላ ቁጥር movie ይመጣሉ፤ see → saw ነው።"],
["or","ፒዛ በላን","We ate pizza","eated","eat → ate ነው።"],
["or","ጓደኞቼን አገኘሁ","I met my friends","friend meet","ብዙ ስለሆኑ ብዙ ቁጥር friends ነው።"],
["fi","I __ to Lalibela last year.","ባለፈው ዓመት ላሊበላ ሄድኩ","went","go|goed|gone","go → went ነው።"],
["fi","What did you __?","ምን በሉ?","eat","ate|eaten|eating","did ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["fi","She __ a new phone.","አዲስ ስልክ ገዛች","bought","buyed|buy|buys","buy → bought ነው።"],
["ty","ሀዋሳ ሄድኩ","I went to Hawassa","went · to · Hawassa","go","go → went ነው።"],
["ty","አንድ መጽሐፍ ገዛሁ","I bought a book","bought · book — አርቲክል a","the","አንድ ስለሆነ አርቲክል a ይገባል።"],
["ty","ጓደኞቼን አገኘሁ","I met my friends|I saw my friends","met · my · friend — ብዙ ቁጥር","friend","ብዙ ስለሆኑ ብዙ ቁጥር friends ነው።"]]},
{ id:"the", title:"the እንደገና፦ መጀመሪያ a፣ ከዚያ the", blurb:"ለመጀመሪያ ጊዜ ሲጠቅሱ a፣ ሁለቱም ወገን ሲያውቀው the።", deck:"መንገድና ትራንስፖርት", body:`
<p>አማርኛ የታወቀን ነገር በስሙ መጨረሻ ያሳያል፦ «ሸሚዝ ገዛሁ። <b>ሸሚዙ</b> ሰማያዊ ነው።» እንግሊዝኛም እንደዚሁ ያደርጋል፤ ልዩነቱ «-ው» ሳይሆን ከስሙ በፊት የሚገባው <b>the</b> መሆኑ ነው። እዚህ <b>the</b> የሚገባበትንና <b>ምንም አርቲክል</b> የማይገባበትን እንደገና እንለማመዳለን።</p>
<h3>መጀመሪያ a፣ እንደገና ሲጠቀስ the</h3>
<p>አድማጩ ለመጀመሪያ ጊዜ የሚሰማው ከሆነ a፣ አሁን ስለተጠቀሰ የሚያውቀው ከሆነ the ነው።</p>
{{ex:I bought a shirt. The shirt is blue.|አይ ቦት ኧ ሸርት. ዸ ሸርት ኢዝ ብሉው|ሸሚዝ ገዛሁ። ሸሚዙ ሰማያዊ ነው}}
<h3>በሁኔታው አንድ ብቻ ከሆነ the</h3>
<p>እንደ የዚህ ክፍል መስኮት ወይም በአቅራቢያ ያለው ጣቢያ የትኛው እንደሆነ ግልጽ ከሆነ ከመጀመሪያው the ይባላል።</p>
{{ex:Can you open the window?|ከን ዩ ˈኦውፐን ዸ ˈዊንዶው|መስኮቱን ሊከፍቱልኝ ይችላሉ?}}{{ex:Where's the subway station?|ዌርዝ ዸ ˈሰብዌይ ˈስቴይሽን|የምድር ውስጥ ባቡር ጣቢያው የት ነው?}}{{ex:The sun is hot today.|ዸ ሰን ኢዝ ሃት ተˈዴይ|ዛሬ ፀሐይ ታቃጥላለች}}
<h3>አርቲክል የማይወስዱ አባባሎች</h3>
<p>በብዛት የሚነገሩ የቦታ፣ የትራንስፖርትና የምግብ አባባሎችን እንዳሉ ያጥኗቸው።</p>
{{ex:I go to work by bus.|አይ ጎው ተ ወርክ ባይ በስ|በአውቶቡስ ወደ ሥራ እሄዳለሁ}}{{ex:I'm at home.|አይም ኧት ሆውም|ቤት ነኝ}}{{ex:I go to bed at eleven.|አይ ጎው ተ ቤድ ኧት ኢˈሌቭን|ከምሽቱ 5 ሰዓት (11 p.m.) ላይ እተኛለሁ}}
<div class="tip">ራስዎን ይጠይቁ፦ «አድማጩ <b>የትኛው እንደሆነ</b> ያውቃል?» ካወቀ the፣ ካላወቀ a ነው።</div>`,
check:[["I have a cat. ___ cat is white. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["A","An","The","(ምንም)"],2,"አሁን የተጠቀሰው ድመት ስለሆነ the ይመጣል (እንደ «ድመቱ»)።"],["I go to ___ work by bus. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["a","the","an","(ምንም)"],3,"go to work አርቲክል አይወስድም።"],["የዚህን ክፍል መስኮት እንዲከፍቱልዎ ሲጠይቁ ትክክለኛው አባባል የትኛው ነው?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"ሁለቱም ወገን የሚያውቁት መስኮት ስለሆነ the ይመጣል።"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","አሁን የተጠቀሰው ሸሚዝ ስለሆነ the ይመጣል።"],
["mc","«ጣቢያው የት ነው?» =","Where's the station?","Where's a station?","Where's station?","Where the station?","በአቅራቢያ ያለው የታወቀው ጣቢያ ስለሆነ the ይመጣል።"],
["mc","ከሚከተሉት ትክክለኛው ዓረፍተ ነገር የትኛው ነው?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work እና by bus አርቲክል አይወስዱም።"],
["mc","«ፀሐይ ታቃጥላለች» =","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","አንድ ብቻ ለሆነ ነገር the ይገባል።"],
["mc","«ቤት ነኝ» =","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home አርቲክል አይወስድም።"],
["or","መስኮቱን ሊከፍቱልኝ ይችላሉ?","Can you open the window","a windows","ሁለቱም ወገን የሚያውቁት መስኮት ስለሆነ አርቲክል the ይመጣል።"],
["or","በአውቶቡስ ወደ ሥራ እሄዳለሁ","I go to work by bus","the a","go to work እና by bus አርቲክል አይወስዱም።"],
["or","ውሻው ትልቅ ነው","The dog is big","A dogs","ቀደም ብሎ የተጠቀሰው ውሻ ስለሆነ አርቲክል the ይመጣል (እንደ «ውሻው»)።"],
["fi","I saw a movie. __ movie was great.","ፊልም አየሁ። ፊልሙ በጣም ጥሩ ነበር","The","A|An|Some","አሁን የተጠቀሰው ፊልም ስለሆነ the ይመጣል።"],
["fi","Where's __ bathroom?","መጸዳጃ ቤቱ የት ነው?","the","a|an|some","በዚህ ሕንፃ ያለው የታወቀው መጸዳጃ ቤት ስለሆነ the ይመጣል።"],
["fi","I have __ idea.","አንድ ሐሳብ አለኝ","an","a|the|some","ለመጀመሪያ ጊዜ የሚጠቀስ አንድ ነገር ነው፤ በአናባቢ ድምፅ ስለሚጀምር an ይሆናል።"],
["ty","በሩን ሊዘጉልኝ ይችላሉ?","Can you close the door|Could you close the door","can you · close · door — አርቲክል the","a","ሁለቱም ወገን የሚያውቁት በር ስለሆነ አርቲክል the ይመጣል።"],
["ty","ጣቢያው የት ነው?","Where is the station|Where's the station","where · station — አርቲክል the","a","በአቅራቢያ ያለው የታወቀው ጣቢያ ስለሆነ አርቲክል the ይመጣል።"],
["ty","ቤት ነኝ","I'm at home|I'm home","I'm · at · home — ያለ አርቲክል","the","home አርቲክል አይወስድም።"]]},
{ id:"adjectives", title:"ቅጽልና ማወዳደር፦ bigger, more expensive, the best", blurb:"ቅጽል ከስሙ በፊት ይመጣል። Comparative -er / more፣ Superlative the -est / the most።", deck:"ግብይትና ክፍያ", body:`
<p>ቅጽል ከስሙ <b>በፊት</b> ይመጣል ወይም be (is) ከተባለ <b>በኋላ</b> ይቆማል። አማርኛም «ትልቅ ቦርሳ» ስለሚል የመጀመሪያው ቀላል ነው። ለገበያ የሚያስፈልጉ የማወዳደሪያ አባባሎችንም አብረን እንማራለን።</p>
{{ex:a big bag|ኧ ቢግ ባግ|ትልቅ ቦርሳ}}{{ex:This bag is big.|ዺስ ባግ ኢዝ ቢግ|ይህ ቦርሳ ትልቅ ነው}}{{ex:It's too small.|ኢትስ ቱው ስሞል|በጣም ትንሽ ነው}}
<h3>Comparative (-er / more)</h3>
<p>አማርኛ «ከዚያ ይበልጥ ርካሽ» ይላል፤ እንግሊዝኛ ደግሞ አጭር ቃል ላይ <b>-er</b> ይጨምራል፣ ረጅም ቃል ፊት <b>more</b> ያስቀምጣል። «ከ…» የሚለው <b>than</b> ነው።</p>
<div class="tbl"><table><tr><th>መሠረታዊ</th><th>Comparative</th><th>Superlative</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|ዺስ ወን ኢዝ ˈቺይፐር|ይሄኛው ይረክሳል}}{{ex:It's more expensive than that one.|ኢትስ ሞር ኢክˈስፔንሲቭ ዸን ዻት ወን|ከዚያኛው የበለጠ ውድ ነው}}{{ex:Do you have a bigger size?|ደ ዩ ሃቭ ኧ ˈቢገር ሳይዝ|ከዚህ የሚበልጥ ቁጥር አለዎት?}}
<h3>Superlative፦ the የግድ ነው</h3>
<p>አማርኛ «ከሁሉም የተሻለ» ሲል ሌላ ቃል አያስፈልገውም፤ እንግሊዝኛ ግን the ይፈልጋል፦ <b>He is best student.</b> ስህተት ነው።</p>
{{ex:This is the best restaurant here.|ዺስ ኢዝ ዸ ቤስት ˈሬስተራንት ሂር|እዚህ ካሉት ምግብ ቤቶች ምርጡ ይህ ነው}}{{ex:Which is the cheapest?|ዊች ኢዝ ዸ ˈቺይፒስት|ከሁሉም የሚረክሰው የትኛው ነው?}}
<div class="tip">በብዛት የሚሠሩ ስህተቶች፦ <b>more cheaper</b>, <b>more good</b> ✗ ትክክለኛው፦ <b>cheaper</b>, <b>better</b> ✓ -er እና more አብረው አይመጡም።</div>`,
check:[["big Comparative ቅርጹ የትኛው ነው?",["more big","biger","bigger","most big"],2,"አጭር ቃል -er ይወስዳል፤ የመጨረሻው ተነባቢ ይደገማል።"],["This is ___ expensive than that. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["more","most","much","very"],0,"ረጅም ቃል Comparative ለመሆን more ይወስዳል።"],["good Superlative ቅርጹ የትኛው ነው?",["the goodest","the most good","the better","the best"],3,"good – better – the best ነው።"]],
practice:[
["mc","cheap Comparative ቅርጹ የትኛው ነው?","cheaper","more cheap","cheapper","most cheap","አጭር ቃል -er ይወስዳል።"],
["mc","«ይሄ የበለጠ ውድ ነው» =","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","ረጅም ቃል more ይወስዳል።"],
["mc","«ከዚህ የሚበልጥ ቁጥር አለዎት?» =","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","አርቲክል + ቅጽል + ስም ቅደም ተከተል ነው።"],
["mc","good Comparative ቅርጹ የትኛው ነው?","better","gooder","more good","best","good – better – best ነው።"],
["mc","«ይህ ምርጡ ምግብ ቤት ነው» =","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Superlative አርቲክል the ይፈልጋል።"],
["or","ከዚህ የሚበልጥ ቁጥር አለዎት?","Do you have a bigger size","the sizes","የትኛውም አንድ ቁጥር ስለሚፈልጉ አርቲክል a ይመጣል።"],
["or","ይሄ ከሁሉም ይረክሳል","This is the cheapest","a cheaper","Superlative አርቲክል the ይፈልጋል።"],
["or","ይሄ ከዚያ ይረክሳል","This is cheaper than that","more","-er ያለው ቅጽል more አይወስድም።"],
["fi","It's __ small.","በጣም ትንሽ ነው (አይሆነኝም)","too","much|more|most","«ከሚገባው በላይ» ለማለት too ይጠቀሙ።"],
["fi","This is cheaper __ that one.","ይሄ ከዚያኛው ይረክሳል","than","then|that|more","የማወዳደሪያው «ከ…» than ነው።"],
["fi","It's the __ expensive one.","ከሁሉም ውዱ ይሄ ነው","most","more|much|very","ረጅም ቃል Superlative ለመሆን the most ይወስዳል።"],
["ty","ከዚህ የሚያንስ ቁጥር አለዎት?","Do you have a smaller size","smaller · size — አርቲክል a","the","የትኛውም አንድ ቁጥር ስለሚፈልጉ አርቲክል a ይመጣል።"],
["ty","ይሄ ከሁሉም ይሻላል","This is the best|This one is the best","the · best — አርቲክል the","a","Superlative አርቲክል the ይፈልጋል።"],
["ty","ይሄ የበለጠ ይረክሳል","This is cheaper|This one is cheaper","cheap — Comparative","more","አጭር ቃል -er ይወስዳል።"]]},
{ id:"going-to", title:"ዕቅድ መናገር፦ be going to", blurb:"አስቀድመው የወሰኑትን ነገር be going to + ግስ ብለው ይናገሩ።", deck:"ቀለል ያለ ጨዋታ", body:`
<p>አማርኛ ለወደፊትም «እሄዳለሁ» ይላል፤ ለተወሰነ ዕቅድ ደግሞ «ልሄድ ነው» ይላል። እንግሊዝኛ <b>አስቀድሞ የተወሰነ ዕቅድ</b> ለመናገር <b>be + going to + 1ኛ ቅርጽ</b> ይጠቀማል (የወደፊት ጊዜ)። «ልሄድ ነው» እና going to ትርጉማቸው ይቀራረባል።</p>
{{ex:I'm going to visit Hawassa.|አይም ˈጎዊን ተ ˈቪዚት ኸˈዋሰ|ሀዋሳን ልጎበኝ ነው}}{{ex:She's going to buy a car.|ሺዝ ˈጎዊን ተ ባይ ኧ ካር|መኪና ልትገዛ ነው}}{{ex:We're going to have dinner.|ዊር ˈጎዊን ተ ሃቭ ˈዲነር|እራት ልንበላ ነው}}
<h3>አሉታዊና ጥያቄ</h3>
{{ex:I'm not going to go.|አይም ናት ˈጎዊን ተ ጎው|አልሄድም}}{{ex:Are you going to come?|ኧር ዩ ˈጎዊን ተ ከም|ይመጣሉ?}}{{ex:What are you going to do this weekend?|ወት ኧር ዩ ˈጎዊን ተ ዱው ዺስ ˈዊይኬንድ|በዚህ ቅዳሜና እሁድ ምን ሊያደርጉ ነው?}}
<h3>ከሚታየው ነገር ሲገምቱም</h3>
{{ex:It's going to rain.|ኢትስ ˈጎዊን ተ ሬይን|ዝናብ ሊዘንብ ነው}}
<h3>አብረው የሚመጡ የጊዜ አባባሎች</h3>
<p>tomorrow (ነገ)፣ tonight (ዛሬ ማታ)፣ this weekend (በዚህ ቅዳሜና እሁድ)፣ next week (በሚቀጥለው ሳምንት) ዓረፍተ ነገሩ መጨረሻ ላይ ይመጣሉ።</p>
<div class="tip">ሲነገር going to ብዙ ጊዜ <b>gonna</b> ይመስላል። be ደግሞ አይርሱ፦ <b>I going to go.</b> ✗ ትክክለኛው፦ <b>I'm going to go.</b> ✓</div>`,
check:[["«ነገ ጓደኛዬን ላገኝ ነው» በእንግሊዝኛ፦",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + 1ኛ ቅርጽ ነው።"],["She ___ going to study. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["am","are","is","be"],2,"she ሲሆን is ይመጣል።"],["«በዚህ ቅዳሜና እሁድ ምን ሊያደርጉ ነው?» በእንግሊዝኛ፦",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"የጥያቄ ቃል + be + ባለቤት + going to ነው።"]],
practice:[
["mc","«ሀዋሳ ልሄድ ነው» =","I'm going to go to Hawassa.","I going to go to Hawassa.","I'm going go to Hawassa.","I'm go to Hawassa going.","be + going to + 1ኛ ቅርጽ ነው።"],
["mc","They ___ going to come.","are","is","am","be","they ሲሆን are ይመጣል።"],
["mc","«ዝናብ ሊዘንብ ነው» =","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["mc","«አልሄድም» =","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","not የሚገባው be ከተባለ በኋላ ነው።"],
["mc","«ይመጣሉ?» =","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","be ወደ ዓረፍተ ነገሩ መጀመሪያ ይወጣል።"],
["or","መኪና ልትገዛ ነው","She's going to buy a car","the cars","አንድ መኪና ስለሆነ አርቲክል a እና ነጠላ ቁጥር car ይመጣሉ።"],
["or","ጓደኞቼን ላገኝ ነው","I'm going to meet my friends","friend","ብዙ ስለሆኑ ብዙ ቁጥር friends ነው።"],
["or","እራት ልንበላ ነው","We're going to have dinner","a","የምግብ ሰዓት ስም dinner አርቲክል አይወስድም።"],
["fi","I'm going __ study tonight.","ዛሬ ማታ ላጠና ነው","to","for|at|will","going to + 1ኛ ቅርጽ ነው።"],
["fi","__ you going to come?","ይመጣሉ?","Are","Do|Is|Will","you ሲሆን Are ይመጣል።"],
["fi","It's going to __ tomorrow.","ነገ ዝናብ ይዘንባል","rain","rains|raining|rained","going to ከኋላው 1ኛ ቅርጽ ይመጣል።"],
["ty","ፊልም ልመለከት ነው","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — አርቲክል a","the","የትኛውም አንድ ፊልም ስለሆነ አርቲክል a ይገባል።"],
["ty","ምን ሊያደርጉ ነው?","What are you going to do","what · going to · do","will","ዕቅድ ሲጠይቁ be going to ይጠቀሙ።"],
["ty","ጓደኞቼን ላገኝ ነው","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — ብዙ ቁጥር","friend","ብዙ ስለሆኑ ብዙ ቁጥር friends ነው።"]]},
{ id:"joining", title:"ዓረፍተ ነገሮችን ማያያዝ፦ and, but, or, so, because", blurb:"ሁለት አጭር ዓረፍተ ነገሮችን አንድ ማድረግ። so እና because ተቃራኒ ቅደም ተከተል አላቸው።", deck:"ስሜትና ምላሽ", body:`
<p>አጫጭር ዓረፍተ ነገሮች ብቻ ሲነገሩ ንግግሩ ይቆራረጣል። በእነዚህ አምስት መስተጻምሮች ሲያያይዟቸው ንግግርዎ ይበልጥ ይፈስሳል።</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|አይ ላይክ ˈኮፊ ኧንድ ቲይ|ቡናና ሻይ እወዳለሁ}}{{ex:I'm tired but happy.|አይም ˈታየርድ በት ˈሃፒ|ደክሞኛል ግን ደስተኛ ነኝ}}{{ex:Coffee or tea?|ˈኮፊ ኧር ቲይ|ቡና ወይስ ሻይ?}}
<h3>so፦ ስለዚህ</h3>
<p><b>ምክንያት + so + ውጤት</b> ነው። አማርኛ «ደክሞኝ ስለነበር ወደ ቤት ሄድኩ» ሲል ቅደም ተከተሉ ተመሳሳይ ነው።</p>
{{ex:I was tired, so I went home.|አይ ወዝ ˈታየርድ ሶው አይ ዌንት ሆውም|ደክሞኝ ስለነበር ወደ ቤት ሄድኩ}}
<h3>because፦ ምክንያቱም</h3>
<p><b>ውጤት + because + ምክንያት</b> ነው፤ ልክ እንደ «ወደ ቤት ሄድኩ፤ ምክንያቱም ደክሞኝ ነበር»።</p>
{{ex:I went home because I was tired.|አይ ዌንት ሆውም ቢˈከዝ አይ ወዝ ˈታየርድ|ወደ ቤት ሄድኩ፤ ምክንያቱም ደክሞኝ ነበር}}{{ex:I stayed home because it was raining.|አይ ስቴይድ ሆውም ቢˈከዝ ኢት ወዝ ˈሬይኒን|ዝናብ ስለዘነበ ቤት ቆየሁ}}
<h3>too፦ «እኔም»</h3>
{{ex:I like it too.|አይ ላይክ ኢት ቱው|እኔም እወደዋለሁ}}
<div class="tip">so እና because በአንድ ዓረፍተ ነገር ውስጥ አብረው አይመጡም፦ <b>Because I was tired, so I went home.</b> ✗ ከሁለቱ አንዱን ብቻ ይምረጡ።</div>`,
check:[["I was sick, ___ I stayed home. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["because","but","so","or"],2,"ምክንያቱ ቀድሞ ውጤቱ ከተከተለ so ይመጣል።"],["I stayed home ___ I was sick. ባዶውን ቦታ የሚሞላው የትኛው ነው?",["because","so","but","and"],0,"ውጤቱ ቀድሞ ምክንያቱ ከተከተለ because ይመጣል።"],["«ቡና ይፈልጋሉ ወይስ ሻይ?» ለማለት ትክክለኛው የትኛው ነው?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"ከሁለት አንዱን ሲያስመርጡ or ይጠቀሙ።"]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","ተቃራኒ ሐሳቦችን but ያገናኛል።"],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","ምክንያቱ ቀድሞ ውጤቱ ከተከተለ so ይመጣል።"],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","ውጤቱ ቀድሞ ምክንያቱ ከተከተለ because ይመጣል።"],
["mc","«ቡና ወይስ ሻይ?» =","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","ከሁለት አንዱ or ነው።"],
["mc","«ደክሞኛል ግን ደስተኛ ነኝ» =","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","«ግን» but ነው።"],
["or","ድመትና ውሻ እወዳለሁ","I like cats and dogs","cat dog","እንስሳትን በአጠቃላይ ሲናገሩ ብዙ ቁጥር cats እና dogs ይጠቀሙ።"],
["or","አንድ ቡናና አንድ ሳንድዊች እባክዎ","A coffee and a sandwich please","the or","አንድ አንድ ስለሚያዙ ሁለቱም አርቲክል a ይወስዳሉ።"],
["or","ርቦኝ ስለነበር በላሁ","I was hungry so I ate","because","ምክንያቱ ቀድሞ ውጤቱ ከተከተለ so ይመጣል።"],
["fi","I'm tired __ happy.","ደክሞኛል ግን ደስተኛ ነኝ","but","so|because|or","«ግን» but ነው።"],
["fi","I stayed home __ it was raining.","ዝናብ ስለዘነበ ቤት ቆየሁ","because","so|but|or","ውጤቱ ቀድሞ ምክንያቱ ከተከተለ because ይመጣል።"],
["fi","Coffee __ tea?","ቡና ወይስ ሻይ?","or","so|but|because","ከሁለት አንዱ or ነው።"],
["ty","ቡናና ሻይ እወዳለሁ","I like coffee and tea","like · coffee · and · tea — ያለ አርቲክል","a","coffee እና tea በአጠቃላይ ሲነገሩ አርቲክል አይወስዱም።"],
["ty","ደክሞኛል ግን ደስተኛ ነኝ","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","«ግን» but ነው።"],
["ty","ውሻና ድመት እወዳለሁ","I like dogs and cats|I like cats and dogs","dog · and · cat — ብዙ ቁጥር","dog","እንስሳትን በአጠቃላይ ሲናገሩ ብዙ ቁጥር dogs እና cats ይጠቀሙ።"]]},
{ id:"ethiopian-english", title:"ኢትዮጵያዊ እንግሊዝኛ፦ እዚህ የምንለውና ውጭ የሚባለው", blurb:"Happy night፣ No matter፣ He called to me … እዚህ ሁሉም ይግባባባቸዋል፤ ውጭ ግን ሌላ ይባላል። ልዩነቱን በሦስት ቡድን እንመልከት።", deck:"ኢትዮጵያዊ እንግሊዝኛ፦ እዚህና ውጭ", body:`
<p>በኢትዮጵያ የሚነገረው እንግሊዝኛ የራሱ ልማዶች አሉት። ብዙዎቹ እዚህ በደንብ ያግባባሉ፤ ከሌላ አገር ሰው ጋር ሲነጋገሩ ግን ሊያደናግሩ ይችላሉ። አንዳንዶቹ ደግሞ ከአማርኛ ቃል በቃል የተተረጎሙ ወይም በየትኛውም አገር ስህተት የሆኑ ናቸው። በሦስት ቡድን እንያቸው።</p>
<h3>1. እዚህ ያግባባል፤ ውጭ ይህን ይበሉ</h3>
<p>እነዚህ አባባሎች የሚያሳፍሩ አይደሉም፤ በኢትዮጵያ ሁሉም ይረዳቸዋል። ውጭ ያለ ሰው ግን ላይረዳቸው ወይም በሌላ ትርጉም ሊሰማቸው ይችላል።</p>
<div class="tbl"><table><tr><th>በኢትዮጵያ</th><th>ውጭ ይህን ይበሉ</th><th>ለምን</th></tr><tr><td>Happy night!</td><td class="k">Good night!</td><td>«መልካም አዳር» ከሚለው የመጣ ነው፤ ውጭ ማታ ሲለያዩ Good night ይባላል።</td></tr><tr><td>No matter.</td><td class="k">No problem. / It doesn't matter.</td><td>No matter ብቻውን ያልተጨረሰ ይመስላል፤ «ችግር የለም» ለማለት No problem ይበሉ።</td></tr><tr><td>My house has three classes.</td><td class="k">My house has three rooms.</td><td>class ውጭ የትምህርት ክፍል ወይም ትምህርት ነው፤ የቤት ክፍል room ወይም bedroom ይባላል።</td></tr><tr><td>brother / sister (ለጓደኛ)</td><td class="k">ስሙን ይጥሩ፦ Hi, Dawit!</td><td>ውጭ brother እና sister በአብዛኛው ለእውነተኛ ወንድምና እህት ብቻ ይነገራሉ።</td></tr><tr><td>father / mother (ለታላቅ ሰው)</td><td class="k">sir / ma'am</td><td>ለማያውቁት ታላቅ ሰው አክብሮት ለማሳየት sir (ለወንድ) እና ma'am (ለሴት) ይባላል።</td></tr></table></div>
{{ex:Good night.|ጉድ ናይት|ደህና እደሩ}}{{ex:No problem.|ኖው ˈፕራብለም|ችግር የለም}}{{ex:I live in a two-bedroom apartment.|አይ ሊቭ ኢን ኧ ቱው ˈቤድሩውም ኧˈፓርትመንት|ባለ ሁለት መኝታ ክፍል አፓርትመንት ውስጥ እኖራለሁ}}{{ex:Excuse me, sir.|ኢክˈስክዩውዝ ሚ ሰር|ይቅርታ ጌታዬ}}{{ex:Thank you, ma'am.|ሣንክ ዩ ማም|አመሰግናለሁ እመቤቴ}}
<h3>2. ከአማርኛ ቃል በቃል የተቀዱ</h3>
<p>አማርኛ «ለእኔ»፣ «ለእሱ» የሚለውን በግሱ ውስጥ ያስገባል (ደወለልኝ፣ ንገረው)። ወደ እንግሊዝኛ ሲተረጎም ተጨማሪ to ይገባል። እንግሊዝኛ ግን ተሳቢውን በቀጥታ ከግሱ በኋላ ያስቀምጣል። የግስ ምርጫም ቃል በቃል አይተረጎምም፦ «አለፍኩ» ሁልጊዜ passed አይደለም፤ «ሠራሁ» ሁልጊዜ made አይደለም።</p>
<div class="tbl"><table><tr><th>አማርኛ</th><th>ቃል በቃል ✗</th><th>ትክክለኛው ✓</th></tr><tr><td>ደወለልኝ</td><td>He called to me.</td><td class="k">He called me.</td></tr><tr><td>ንገረው</td><td>Tell to him.</td><td class="k">Tell him.</td></tr><tr><td>ትምጣ ተዋት</td><td>Let her to come.</td><td class="k">Let her come.</td></tr><tr><td>ዩኒቨርሲቲ ገባሁ</td><td>I passed to university.</td><td class="k">I got into college. / I got into Addis Ababa University.</td></tr><tr><td>የቤት ሥራዬን ሠራሁ</td><td>I made my homework.</td><td class="k">I did my homework.</td></tr><tr><td>ወደ ቤት እሄዳለሁ</td><td>I go to home.</td><td class="k">I'm going home.</td></tr><tr><td>የሕይወቴ ታሪክ</td><td>the history of my life</td><td class="k">my life story</td></tr></table></div>
<p>He called to me ማለት «ጮኾ ጠራኝ» ማለት ነው። በአሜሪካ ዩኒቨርሲቲ በአጠቃላይ college ይባላል። go home ሲባል በመካከላቸው to አይገባም፤ homework ደግሞ የማይቆጠር ስም ስለሆነ homeworks አይባልም።</p>
{{ex:He called me.|ሂ ኮልድ ሚ|ደወለልኝ}}{{ex:Tell him.|ቴል ሂም|ይንገሩት}}{{ex:Let her come.|ሌት ኸር ከም|ትምጣ፤ ይፍቀዱላት}}{{ex:I got into Addis Ababa University.|አይ ጋት ˈኢንተ ˈአዲስ ˈአበበ ዩውኒˈቨርሰቲ|አዲስ አበባ ዩኒቨርሲቲ ገባሁ}}{{ex:I did my homework.|አይ ዲድ ማይ ˈሆውምወርክ|የቤት ሥራዬን ሠራሁ}}{{ex:I'm going home.|አይም ˈጎዊን ሆውም|ወደ ቤት እየሄድኩ ነው}}
<h3>3. በየትኛውም አገር ስህተት የሆኑ</h3>
<p>እነዚህ ግን እዚህም ውጭም ስህተት ናቸው፤ በንግግርም በጽሑፍም ያርሟቸው።</p>
<div class="tbl"><table><tr><th>✗ ስህተት</th><th>✓ ትክክል</th><th>ለምን</th></tr><tr><td>I am not understanding.</td><td class="k">I don't understand.</td><td>understand ሁኔታ የሚገልጽ ግስ ስለሆነ -ing አይወስድም።</td></tr><tr><td>furnitures</td><td class="k">furniture</td><td>የማይቆጠር ስም ነው፤ ብዙ ቁጥር -s አይወስድም (information, luggage, equipment እንዲሁ)።</td></tr><tr><td>He is best student.</td><td class="k">He is the best student.</td><td>best ሲኖር አርቲክል the የግድ ነው።</td></tr><tr><td>Where are you go?</td><td class="k">Where are you going?</td><td>are ካለ ግሱ -ing ቅርጽ ይወስዳል።</td></tr><tr><td>Borrow me your pen.</td><td class="k">Can you lend me your pen?</td><td>borrow «መዋስ»፣ lend «ማዋስ» ነው።</td></tr></table></div>
{{ex:I don't understand.|አይ ዶውንት ኧንደርˈስታንድ|አልገባኝም}}{{ex:We need new furniture.|ዊ ኒይድ ኑው ˈፈርኒቸር|አዲስ የቤት ዕቃ ያስፈልገናል}}{{ex:He is the best student.|ሂ ኢዝ ዸ ቤስት ˈስቱውድንት|እሱ ምርጡ ተማሪ ነው}}{{ex:Where are you going?|ዌር ኧር ዩ ˈጎዊን|ወዴት እየሄዱ ነው?}}{{ex:Can you lend me your pen?|ከን ዩ ሌንድ ሚ ዩር ፔን|እስክሪብቶዎን ሊያውሱኝ ይችላሉ?}}
<div class="tip">የመጀመሪያው ቡድን አባባሎች የሚያሳፍሩ አይደሉም፤ በኢትዮጵያ በደንብ ያግባባሉ። ከውጭ አገር ሰው ጋር ሲነጋገሩ ብቻ ራስዎን ይጠይቁ፦ «ይህ አባባል ውጭም ይታወቃል?» ለምሳሌ <b>Happy night!</b> → <b>Good night!</b>፣ <b>No matter.</b> → <b>No problem.</b></div>`,
check:[["አንድ ሰው ይቅርታ ሲጠይቅዎ «ችግር የለም» ለማለት ውጭ የሚባለው የትኛው ነው?",["No matter.","No problem.","Not matter.","No problems."],1,"No matter ብቻውን ያልተጨረሰ ይመስላል፤ «ችግር የለም» No problem ነው።"],["«አልገባኝም» ለማለት ትክክለኛው የትኛው ነው?",["I don't understand.","I am not understanding.","I not understand.","I am not understand."],0,"understand ሁኔታ የሚገልጽ ግስ ስለሆነ -ing አይወስድም።"],["«ትናንት ደወለልኝ» በእንግሊዝኛ፦",["He called to me yesterday.","He call me yesterday.","He called for me yesterday.","He called me yesterday."],3,"«-ልኝ» በግሱ ውስጥ ነው፤ እንግሊዝኛ ግን to አይጨምርም፦ called me።"]],
practice:[
["mc","ውጭ አገር ካለ ጓደኛዎ ጋር ማታ ሲለያዩ የሚሉት የትኛው ነው?","Good night!","Happy night!","Nice night!","Good nights!","Happy night በኢትዮጵያ ያግባባል፤ ውጭ ግን Good night ይባላል።"],
["mc","«ትናንት ደወለልኝ» =","He called me yesterday.","He called to me yesterday.","He called for me yesterday.","He called at me yesterday.","«-ልኝ» በግሱ ውስጥ ነው፤ እንግሊዝኛ ግን to አይጨምርም፦ called me።"],
["mc","«እስክሪብቶዎን ሊያውሱኝ ይችላሉ?» =","Can you lend me your pen?","Can you borrow me your pen?","Can you lend to me your pen?","Can you borrow your pen to me?","«ማዋስ» lend ነው፤ borrow «መዋስ» ነው።"],
["mc","«አልገባኝም» =","I don't understand.","I am not understanding.","I not understand.","I am not understand.","understand ሁኔታ የሚገልጽ ግስ ስለሆነ -ing አይወስድም።"],
["mc","«የቤት ሥራዬን ሠራሁ» =","I did my homework.","I made my homework.","I did my homeworks.","I made homework.","homework የሚወስደው ግስ do ነው፤ homework የማይቆጠር ስም ነው።"],
["or","እሱ ምርጡ ተማሪ ነው","He is the best student","a","best ሲኖር አርቲክል the የግድ ያስፈልጋል።"],
["or","አዲስ የቤት ዕቃ ያስፈልገናል","We need new furniture","furnitures a","furniture የማይቆጠር ስም ነው፤ ብዙ ቁጥር -s ወይም አርቲክል a አይወስድም።"],
["or","ቤቴ ሦስት ክፍሎች አሉት","My house has three rooms","classes room","የቤት ክፍል room ነው፤ ሦስት ስለሆኑ ብዙ ቁጥር rooms ይሆናል።"],
["or","ወደ ቤት እየሄድኩ ነው","I'm going home","to the","go home ሲባል to ወይም አርቲክል the አይገባም።"],
["fi","No __.","ችግር የለም","problem","matter|problems|matters","«ችግር የለም» No problem ነው፤ No matter ብቻውን ውጭ አይባልም።"],
["fi","Excuse me, __.","ይቅርታ ጌታዬ (ለማያውቁት ታላቅ ሰው)","sir","father|brother|uncle","ለማያውቁት ታላቅ ሰው father ሳይሆን sir ይባላል።"],
["fi","Let her __.","ትምጣ፤ ይፍቀዱላት","come","to come|coming|comes","let ከኋላው to አይወስድም፦ Let her come።"],
["ty","እሱ ምርጡ ተማሪ ነው","He is the best student","best · student — አርቲክል the","a","best ሲኖር አርቲክል the ያስፈልጋል።"],
["ty","አዲስ የቤት ዕቃ ገዛን","We bought new furniture|We bought some new furniture|We got new furniture|We got some new furniture","bought · new · furniture — የማይቆጠር ስም","furnitures","furniture የማይቆጠር ስም ስለሆነ ብዙ ቁጥር -s አይወስድም።"],
["ty","የቤት ሥራዬን ሠራሁ","I did my homework","did · my · homework","made","homework የሚወስደው ግስ do ነው፤ ኃላፊ ጊዜው did ነው።"],
["ty","ይንገሩት (ለእሱ)","Tell him","tell · him","to","«ንገረው» ውስጥ «-ው» አለ፤ እንግሊዝኛ ግን to አይጨምርም፦ Tell him።"]]},
];
