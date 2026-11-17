/* hi-en stage A1: new lessons (source of truth). Shorthand is expanded by _dsl.js. Written for Hindi speakers (docs/profiles/hi.md). */
module.exports = [
{ id:"it-there", title:"it और there: कर्ता की जगह ख़ाली नहीं रहती", blurb:"मौसम और समय के लिए it; \"कहीं कुछ है\" के लिए there is / there are।", deck:"हल्की-फुल्की बातचीत", body:`
<p>हिंदी में "ठंड है", "देर हो गई", "पास में एक कैफ़े है" — इन वाक्यों में कोई कर्ता (subject) नहीं है, फिर भी बात पूरी है। अंग्रेज़ी में कर्ता की जगह कभी ख़ाली नहीं रहती। इसलिए वहाँ <b>it</b> या <b>there</b> रखा जाता है, जिसका अपना कोई मतलब नहीं होता।</p>
<h3>मौसम और समय: It</h3>
<p>यहाँ it का मतलब "यह" नहीं है। यह सिर्फ़ कर्ता की जगह भरता है।</p>
{{ex:It's cold today.|इट्स कोल्ड टˈडे|आज ठंड है}}{{ex:It's three o'clock.|इट्स थ़्री अˈक्लाक|तीन बजे हैं}}{{ex:It's raining.|इट्स ˈरेनिङ|बारिश हो रही है}}
<h3>"कहीं कुछ है": There is / There are</h3>
<p>एक चीज़ हो तो <b>There is a …</b>, कई चीज़ें हों तो <b>There are …-s</b>। बोलते समय There is को छोटा करके There's कहते हैं। जगह हिंदी की तरह शुरू में नहीं, वाक्य के आख़िर में आती है: <b>Near here is a cafe.</b> ✗ → <b>There's a cafe near here.</b> ✓</p>
{{ex:There's a cafe near here.|द़ेर्ज़ अ कैˈफ़े निर हिर|यहाँ पास में एक कैफ़े है}}{{ex:There are two rooms.|द़ेर अर टू रूम्ज़|दो कमरे हैं}}
<h3>सवाल और नकारात्मक वाक्य</h3>
{{ex:Is there a bathroom here?|इज़ द़ेर अ ˈबैथ़्रूम हिर|क्या यहाँ बाथरूम है?}}{{ex:Are there any seats?|अर द़ेर ˈएनि सीट्स|क्या कोई सीट ख़ाली है?}}{{ex:There isn't a bus today.|द़ेर ˈइज़न्ट अ बस टˈडे|आज कोई बस नहीं है}}
<h3>have से फ़र्क</h3>
<p>हिंदी में दोनों जगह "है" आता है: "मेरे पास कार है" और "बाहर एक कार है"। अंग्रेज़ी में किसी के <b>पास</b> कुछ हो तो <b>have</b>, किसी <b>जगह</b> पर कुछ हो तो <b>there is</b>।</p>
{{ex:I have a car.|आइ हैव़ अ कार|मेरे पास कार है}}{{ex:There's a car outside.|द़ेर्ज़ अ कार आउट्ˈसाइड|बाहर एक कार खड़ी है}}
<p>भारत में बोलचाल का <b>Inflation is there.</b> ("महँगाई तो है") सब समझते हैं। विदेश में ऐसे वाक्य There से शुरू करें: <b>There's inflation every year.</b></p>
<div class="tip">सबसे आम ग़लतियाँ: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>Have a cafe here.</b> ✗ → <b>There's a cafe here.</b> ✓</div>`,
check:[["\"आज गर्मी है\" अंग्रेज़ी में?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"मौसम की बात में कर्ता की जगह it भरता है।"],["There ___ three people. ख़ाली जगह में क्या आएगा?",["is","are","have","be"],1,"तीन लोग — एक से ज़्यादा, इसलिए there are।"],["\"क्या यहाँ बाथरूम है?\" अंग्रेज़ी में?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"कोई चीज़ है या नहीं, यह पूछना हो तो Is there a …?"]],
practice:[
["mc","\"बारिश हो रही है\" =","It's raining.","Is raining.","There is raining.","Rain is.","मौसम की बात में कर्ता it होता है।"],
["mc","\"यहाँ पास में एक कैफ़े है\" =","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","किसी जगह कुछ हो तो there is; कैफ़े एक है, इसलिए a।"],
["mc","There ___ two rooms.","are","is","have","has","rooms कई हैं, इसलिए are।"],
["mc","\"तीन बजे हैं\" =","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","समय बताने के लिए भी it से शुरू करें।"],
["mc","\"मेरे पास एक कार है\" =","I have a car.","There is a car me.","I am a car.","It's a car me.","किसी के पास कुछ हो तो have।"],
["or","आज ठंड है","It's cold today","There's","मौसम की बात में कर्ता it होता है।"],
["or","बाहर एक कार खड़ी है","There's a car outside","cars","कार एक है — आर्टिकल a और एकवचन car, बहुवचन cars नहीं।"],
["or","दो सीटें हैं","There are two seats","seat is","दो सीटें — are और बहुवचन seats।"],
["fi","__ cold today.","आज ठंड है","It's|It is","Is|There's|This","कर्ता की ख़ाली जगह it से भरें।"],
["fi","There __ a bank near here.","पास में एक बैंक है","is","are|have|be","बैंक एक है, इसलिए is।"],
["fi","__ there any seats?","क्या कोई सीट ख़ाली है?","Are","Is|Do|Have","seats कई हैं, इसलिए Are।"],
["ty","आज गर्मी है","It's hot today","it · hot · today — मौसम के लिए it","There's","मौसम की बात it से शुरू होती है।"],
["ty","क्या यहाँ बाथरूम है?","Is there a bathroom here|Is there a restroom here","is there · bathroom — आर्टिकल का ध्यान रखें","the","पहली बार पूछ रहे हैं, कोई भी एक बाथरूम — आर्टिकल a।"],
["ty","दो कमरे हैं","There are two rooms","there are · two · room — बहुवचन","room","दो कमरे — बहुवचन rooms।"]]},
{ id:"plurals", title:"बहुवचन -s, this / these और my / your", blurb:"एक से ज़्यादा हों तो -s ज़रूर लगाएँ। this एक के लिए, these कई के लिए।", deck:"ख़रीदारी और भुगतान", body:`
<p>हिंदी में भी वचन होता है (लड़का → लड़के), पर बहुत-से शब्द गिनती के बाद नहीं बदलते: "दो दोस्त", "तीन काम", "पाँच साल"। इसलिए <b>two friend</b> सही लगता है। अंग्रेज़ी में एक से ज़्यादा चीज़ें हों तो संज्ञा पर <b>-s</b> लगाना ज़रूरी है — हर बार।</p>
<h3>बहुवचन कैसे बनता है</h3>
<div class="tbl"><table><tr><th>नियम</th><th>उदाहरण</th></tr><tr><td>ज़्यादातर शब्द: -s</td><td class="k">book → books</td></tr><tr><td>s · x · ch · sh के बाद: -es</td><td class="k">box → boxes</td></tr><tr><td>व्यंजन + y: -ies</td><td class="k">city → cities</td></tr><tr><td>अनियमित</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
<p>people और children ख़ुद बहुवचन हैं, इन पर -s नहीं लगता: <b>peoples, childrens</b> ✗। बोलते समय -s तीन तरह सुनाई देता है: books में "स", friends में "ज़", boxes में "इज़"।</p>
{{ex:two books|टू बुक्स|दो किताबें}}{{ex:three boxes|थ़्री ˈबाक्सिज़|तीन डिब्बे}}{{ex:I have two children.|आइ हैव़ टू ˈचिल्ड्रन|मेरे दो बच्चे हैं}}{{ex:one of my friends|वन अव़ माइ फ़्रेन्ड्ज़|मेरे दोस्तों में से एक}}
<p><b>one of my …</b> के बाद भी बहुवचन आता है: "मेरे एक दोस्त ने फ़ोन किया" = <b>One of my friends called.</b> ✓ (one of my friend ✗)</p>
<h3>this / that एक के लिए, these / those कई के लिए</h3>
{{ex:This is my bag.|द़िस इज़ माइ बैग|यह मेरा बैग है}}{{ex:These are my keys.|द़ीज़ अर माइ कीज़|ये मेरी चाबियाँ हैं}}{{ex:Those shoes are nice.|द़ोज़ शूज़ अर नाइस|वे जूते अच्छे हैं}}
<h3>my, your, his, her, our, their और 's</h3>
<p>ये शब्द बताते हैं कि चीज़ किसकी है (मेरा, आपका, उसका…)। इनके साथ a या the नहीं लगता। "प्रिया का फ़ोन" कहना हो तो नाम के बाद <b>'s</b> लगाएँ: <b>Priya's phone</b>।</p>
{{ex:Is this your phone?|इज़ द़िस युर फ़ोन|क्या यह आपका फ़ोन है?}}{{ex:Her brothers live in Mumbai.|हर ˈब्रद़र्ज़ लिव़ इन मुम्ˈबाइ|उसके भाई मुंबई में रहते हैं}}{{ex:Priya's phone|ˈप्रीयज़ फ़ोन|प्रिया का फ़ोन}}
<div class="tip">गिनती, many, these और those के बाद संज्ञा हमेशा बहुवचन में: <b>two friend</b> ✗ → <b>two friends</b> ✓, <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. ख़ाली जगह में क्या आएगा?",["sister","sisters","a sister","sister's"],1,"दो बहनें — बहुवचन sisters।"],["___ are my keys. ख़ाली जगह में क्या आएगा?",["This","That","These","It"],2,"keys बहुवचन है, इसलिए These।"],["\"यह मेरा बैग है\" अंग्रेज़ी में?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"my के साथ आर्टिकल नहीं लगता।"]],
practice:[
["mc","\"दो किताबें\" =","two books","two book","two a book","twos book","एक से ज़्यादा हों तो -s लगता है।"],
["mc","child का बहुवचन क्या है?","children","childs","childes","child","यह अनियमित बहुवचन है।"],
["mc","___ shoes are nice. (वे जूते)","Those","That","This","It","shoes कई हैं, इसलिए those।"],
["mc","\"यह मेरा बैग है\" =","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my और आर्टिकल साथ नहीं आते।"],
["mc","box का बहुवचन क्या है?","boxes","boxs","boxies","box","s, x, ch, sh के बाद -es लगता है।"],
["or","ये मेरी चाबियाँ हैं","These are my keys","key This","कई चाबियाँ — these और बहुवचन keys।"],
["or","मेरे दो बच्चे हैं","I have two children","child a","दो बच्चे — बहुवचन children; आर्टिकल a नहीं लगेगा।"],
["or","वे जूते अच्छे हैं","Those shoes are nice","That","shoes बहुवचन है, इसलिए those।"],
["fi","I have three __.","मेरे पास तीन बिल्लियाँ हैं","cats","cat|a cat|cat's","तीन — इसलिए बहुवचन cats।"],
["fi","__ is my friend.","यह मेरा दोस्त है","This","These|Those|They","एक व्यक्ति है, इसलिए this।"],
["fi","Two __, please.","दो कॉफ़ी दीजिए","coffees","coffee|a coffee|coffee's","कप गिनकर ऑर्डर करते समय coffees कहते हैं।"],
["ty","ये मेरी किताबें हैं","These are my books","these · my · book — बहुवचन","book","कई किताबें — these और बहुवचन books।"],
["ty","मेरी दो बहनें हैं","I have two sisters","have · two · sister — बहुवचन","sister","दो बहनें — बहुवचन sisters।"],
["ty","यह मेरा बैग है","This is my bag","this · my · bag — आर्टिकल नहीं","a","my हो तो आर्टिकल a नहीं लगता।"]]},
{ id:"present", title:"Simple Present और शब्द-क्रम: कर्ता + क्रिया + कर्म", blurb:"हिंदी में क्रिया आख़िर में आती है, अंग्रेज़ी में कर्ता के ठीक बाद।", deck:"अपना परिचय", body:`
<p>हिंदी का शब्द-क्रम है कर्ता-कर्म-क्रिया: "मैं चाय <b>पीता हूँ</b>" — क्रिया आख़िर में। अंग्रेज़ी का क्रम है <b>कर्ता → क्रिया → कर्म</b>: I drink tea। हिंदी में "ने, को, में" जैसे परसर्ग बताते हैं कि कौन क्या कर रहा है; अंग्रेज़ी में यही काम शब्दों की जगह करती है।</p>
<h3>कर्ता + क्रिया + कर्म</h3>
{{ex:I drink coffee.|आइ ड्रिंक ˈकॉफ़ि|मैं कॉफ़ी पीता हूँ}}{{ex:I study English.|आइ ˈस्टडि ˈइंग्लिश|मैं अंग्रेज़ी पढ़ती हूँ}}
<h3>जगह और समय बाद में</h3>
<p>बाकी जानकारी क्रिया और कर्म के बाद जुड़ती है, आम तौर पर पहले <b>जगह</b>, फिर <b>समय</b>।</p>
{{ex:We live in Delhi.|वि लिव़ इन ˈडेलि|हम दिल्ली में रहते हैं}}{{ex:I study English every day.|आइ ˈस्टडि ˈइंग्लिश ˈएव़्रि डे|मैं हर दिन अंग्रेज़ी पढ़ता हूँ}}{{ex:They work on weekends.|द़े वर्क आन ˈवीकेन्ड्ज़|वे वीकेंड पर काम करते हैं}}
<h3>Simple Present: आदत और सच्चाई</h3>
<p>Simple Present (जिसे Present Indefinite भी कहते हैं) रोज़ की आदत और हमेशा सच रहने वाली बात के लिए है — हिंदी का "करता हूँ / करती हूँ"। नकारात्मक वाक्य में क्रिया से पहले <b>don't</b> लगाएँ: <b>I not eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓ he, she, it के साथ क्रिया पर -s भी लगता है — वह आगे के पाठ में।</p>
{{ex:I don't eat meat.|आइ डोन्ट ईट मीट|मैं मीट नहीं खाता}}
<h3>कितनी बार: always, usually, sometimes, never</h3>
<p>ये शब्द क्रिया के <b>ठीक पहले</b> आते हैं।</p>
{{ex:I usually get up at seven.|आइ ˈयूझ़ुअलि गेट अप अट ˈसेव़न|मैं आम तौर पर सात बजे उठता हूँ}}{{ex:I never drink coffee at night.|आइ ˈनेव़र ड्रिंक ˈकॉफ़ि अट नाइट|मैं रात को कभी कॉफ़ी नहीं पीती}}
<div class="tip">हिंदी के क्रम में बोलेंगे तो वाक्य ग़लत होगा: <b>I coffee drink.</b> ✗ → <b>I drink coffee.</b> ✓ कर्ता के तुरंत बाद क्रिया बोलने की आदत डालें।</div>`,
check:[["\"मैं कॉफ़ी पीता हूँ\" का सही शब्द-क्रम कौन-सा है?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"कर्ता + क्रिया + कर्म।"],["I ___ eat meat. (नहीं खाता) ख़ाली जगह में क्या आएगा?",["not","am not","no","don't"],3,"be के अलावा दूसरी क्रिया (यहाँ eat) हो तो नकारात्मक don't से बनता है।"],["always किस वाक्य में सही जगह पर है?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"always जैसे शब्द क्रिया के ठीक पहले आते हैं।"]],
practice:[
["mc","\"मैं अंग्रेज़ी पढ़ता हूँ\" =","I study English.","I English study.","I am study English.","Study I English.","कर्ता + क्रिया + कर्म।"],
["mc","\"मैं मीट नहीं खाती\" =","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","eat जैसी क्रिया का नकारात्मक don't से बनता है।"],
["mc","\"हम सोल में रहते हैं\" =","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","क्रिया के बाद जगह आती है।"],
["mc","\"मैं आम तौर पर सात बजे उठता हूँ\" =","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually क्रिया के ठीक पहले आता है।"],
["mc","रोज़ की आदत बताने वाला वाक्य कौन-सा है?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","आदत के लिए Simple Present।"],
["or","मैं हर दिन कॉफ़ी पीती हूँ","I drink coffee every day","the am","आदत के लिए Simple Present; कॉफ़ी की आम बात है, इसलिए कोई आर्टिकल नहीं।"],
["or","मैं बहुत किताबें पढ़ता हूँ","I read many books","book","many के बाद बहुवचन books।"],
["or","हम वीकेंड पर काम करते हैं","We work on weekends","are","work के साथ are नहीं लगता — एक ही क्रिया काफ़ी है।"],
["fi","I __ like fish.","मुझे मछली पसंद नहीं है","don't|do not","not|am not|no","like के साथ नकारात्मक don't से बनता है।"],
["fi","I __ English every day.","मैं हर दिन अंग्रेज़ी पढ़ती हूँ","study","am study|studying|to study","Simple Present में I के साथ क्रिया का मूल रूप (V1) आता है।"],
["fi","They live __ Busan.","वे बुसान में रहते हैं","in","at|on|to","शहर के नाम से पहले in।"],
["ty","मैं चाय पीता हूँ","I drink tea","drink · tea — आर्टिकल नहीं","a","चाय की आम बात है — कोई आर्टिकल नहीं लगता।"],
["ty","मुझे बिल्लियाँ पसंद हैं","I like cats","like · cat — बहुवचन","cat","आम तौर पर सभी बिल्लियों की बात हो तो बहुवचन cats।"],
["ty","मैं मीट नहीं खाती","I don't eat meat","don't · eat · meat","am","be के अलावा दूसरी क्रिया है, इसलिए don't; am नहीं।"]]},
{ id:"questions", title:"सवाल बनाना: Do you …? और wh-शब्द", blurb:"सिर्फ़ आवाज़ ऊपर उठाना काफ़ी नहीं। Do सबसे पहले, wh-शब्द उससे भी पहले।", deck:"सबसे ज़रूरी 2", body:`
<p>हिंदी में सवाल बनाने के लिए शब्द-क्रम नहीं बदलता: या तो आवाज़ ऊपर उठाते हैं ("आप चाय पीते हैं?"), या शुरू में <b>क्या</b> लगाते हैं। wh-शब्द भी अपनी जगह रहता है: "आप <b>कहाँ</b> जा रहे हैं?" अंग्रेज़ी में सवाल के लिए <b>शब्द-क्रम</b> बदलना पड़ता है।</p>
<h3>be (am, is, are): जगह बदलें</h3>
{{ex:Are you okay?|अर यु ओˈके|आप ठीक हैं?}}{{ex:Is this your bag?|इज़ द़िस युर बैग|क्या यह आपका बैग है?}}
<h3>कोई और क्रिया हो तो Do सबसे पहले</h3>
<p>ख़ुद से पूछें: क्या वाक्य में be के अलावा कोई और क्रिया है (like, live, speak, want)? हो, तो सवाल <b>Do</b> से शुरू करें — यह सहायक क्रिया (helping verb) हिंदी के "क्या" जैसा काम करती है। बाकी क्रम वही रहता है।</p>
{{ex:Do you like coffee?|ड यु लाइक ˈकॉफ़ि|क्या आपको कॉफ़ी पसंद है?}}{{ex:Do you speak English?|ड यु स्पीक ˈइंग्लिश|क्या आप अंग्रेज़ी बोलते हैं?}}
<p>जवाब छोटा दें: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>wh-शब्द सबसे पहले</h3>
<p>what (क्या), where (कहाँ), when (कब), who (कौन), why (क्यों), how (कैसे) को सबसे आगे रखें, फिर सवाल वाला क्रम: <b>Where you are going?</b> ✗ → <b>Where are you going?</b> ✓</p>
{{ex:Where do you live?|वेर ड यु लिव़|आप कहाँ रहते हैं?}}{{ex:What do you do?|वट ड यु डू|आप क्या काम करते हैं?}}{{ex:Where is the bathroom?|वेर इज़ द़ ˈबैथ़्रूम|बाथरूम कहाँ है?}}{{ex:How much is this?|हाउ मच इज़ द़िस|यह कितने का है?}}
<h3>वाक्य के अंदर सवाल, और "है ना?"</h3>
<p>सवाल किसी दूसरे वाक्य के अंदर हो तो क्रम फिर सीधा हो जाता है: <b>I don't know what are they doing.</b> ✗ → <b>I don't know what they're doing.</b> ✓</p>
<p>हिंदी का "है ना?" हर वाक्य के साथ चलता है, इसलिए भारत में <b>…, isn't it?</b> भी हर वाक्य के साथ बोला जाता है और सब समझते हैं। विदेश में यह छोटा सवाल वाक्य की क्रिया से मेल खाता है: You're coming, <b>aren't you?</b> / You like tea, <b>don't you?</b></p>
<div class="tip">सबसे आम ग़लतियाँ: <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓, <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["\"क्या आपको कॉफ़ी पसंद है?\" अंग्रेज़ी में?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"like जैसी क्रिया हो तो सवाल Do से शुरू होता है।"],["\"आप कहाँ रहते हैं?\" अंग्रेज़ी में?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"wh-शब्द + do + कर्ता + क्रिया।"],["Do you speak English? का सही जवाब कौन-सा है?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"सवाल Do से पूछा गया है, तो जवाब में भी do।"]],
practice:[
["mc","\"क्या आप अंग्रेज़ी बोलते हैं?\" =","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","speak जैसी क्रिया हो तो सवाल में सहायक क्रिया do चाहिए।"],
["mc","\"आप कहाँ रहते हैं?\" =","Where do you live?","Where you live?","Where are you live?","Where live you?","wh-शब्द + do + कर्ता + क्रिया।"],
["mc","\"यह कितने का है?\" =","How much is this?","How much this is?","How much does this?","What much is this?","दाम पूछने के लिए How much is …?"],
["mc","Do you like tea? — सही जवाब कौन-सा है?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","सवाल Do से है, तो जवाब में भी do।"],
["mc","\"आप क्या काम करते हैं?\" (पेशा) =","What do you do?","What are you do?","What you do?","What do you?","पेशा पूछने के लिए What do you do?"],
["or","क्या आपको कॉफ़ी पसंद है?","Do you like coffee","Are the","सवाल में सहायक क्रिया do चाहिए; कॉफ़ी की आम बात है, इसलिए आर्टिकल the नहीं।"],
["or","बाथरूम कहाँ है?","Where is the bathroom","a do","इसी इमारत का वह बाथरूम जिसे दोनों जानते हैं — आर्टिकल the।"],
["or","आप कहाँ रहते हैं?","Where do you live","are","live के साथ सवाल में do चाहिए, are नहीं।"],
["fi","__ you like music?","क्या आपको संगीत पसंद है?","Do","Are|Is|Does","like के साथ सवाल Do से बनता है।"],
["fi","__ do you live?","आप कहाँ रहते हैं?","Where","What|Who|When","जगह पूछनी हो तो where।"],
["fi","What time __ it?","कितने बजे हैं?","is","do|does|are","समय पूछते समय it के साथ is आता है।"],
["ty","क्या आप अंग्रेज़ी बोलते हैं?","Do you speak English|Can you speak English","do · speak · English","Are","speak के साथ सवाल Do से शुरू होता है।"],
["ty","बाथरूम कहाँ है?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — आर्टिकल the","a","वह बाथरूम जिसे दोनों जानते हैं — आर्टिकल the।"],
["ty","क्या आपको कुत्ते पसंद हैं?","Do you like dogs","do · like · dog — बहुवचन","dog","आम तौर पर सभी कुत्तों की बात हो तो बहुवचन dogs।"]]},
{ id:"third-s", title:"he / she / it वाला -s: does / doesn't", blurb:"कर्ता एक व्यक्ति या एक चीज़ हो तो क्रिया पर -s। सवाल और नकारात्मक में does।", deck:"अपना परिचय", body:`
<p>हिंदी में क्रिया कर्ता के हिसाब से बदलती है — "वह करता है / करती है", "वे करते हैं" — पर यह बदलाव "-ता / -ती" और "है / हैं" पर दिखता है। अंग्रेज़ी के Simple Present में यही काम एक छोटा-सा <b>-s</b> करता है: अन्य पुरुष एकवचन (he, she, it) के साथ क्रिया में -s। बोलते समय यही -s सबसे ज़्यादा छूटता है, इसलिए इसे साफ़ बोलें और लिखें।</p>
<div class="tbl"><table><tr><th>कर्ता</th><th>क्रिया</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|शि वर्क्स अट अ बैंक|वह बैंक में काम करती है}}{{ex:He likes soccer.|हि लाइक्स ˈसाकर|उसे फ़ुटबॉल पसंद है}}{{ex:My mom cooks well.|माइ माम कुक्स वेल|मेरी मम्मी बहुत अच्छा खाना बनाती हैं}}
<h3>जिन क्रियाओं का रूप थोड़ा बदलता है</h3>
{{ex:She has a car.|शि हैज़ अ कार|उसके पास कार है (have → has)}}{{ex:He goes to work at eight.|हि गोज़ ट वर्क अट एट|वह आठ बजे काम पर जाता है (go → goes)}}{{ex:She studies English.|शि ˈस्टडिज़ ˈइंग्लिश|वह अंग्रेज़ी पढ़ती है (study → studies)}}
<h3>नकारात्मक और सवाल में does</h3>
<p><b>doesn't</b> या <b>Does</b> आ जाए तो -s उसी पर चला जाता है। मुख्य क्रिया बिना -s के, अपने मूल रूप (V1) में रहती है।</p>
{{ex:He doesn't drink coffee.|हि ˈडज़न्ट ड्रिंक ˈकॉफ़ि|वह कॉफ़ी नहीं पीता}}{{ex:Does she live here?|डज़ शि लिव़ हिर|क्या वह यहाँ रहती है?}}
<div class="tip">सबसे आम ग़लतियाँ: <b>She work here.</b> ✗ → <b>She works here.</b> ✓, <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. ख़ाली जगह में क्या आएगा?",["live","lives","living","is live"],1,"she के साथ क्रिया पर -s: lives।"],["He ___ like coffee. ख़ाली जगह में क्या आएगा?",["don't","isn't","doesn't","not"],2,"he के साथ नकारात्मक doesn't से बनता है।"],["\"उसके पास एक कार है\" (वह = she) अंग्रेज़ी में?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"she के साथ have बदलकर has हो जाता है।"]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","my brother एक व्यक्ति (he) है, इसलिए works।"],
["mc","\"वह कॉफ़ी नहीं पीता\" =","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he के साथ doesn't + क्रिया का मूल रूप।"],
["mc","\"क्या वह यहाँ रहती है?\" =","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does के बाद क्रिया बिना -s के आती है।"],
["mc","have → she ___","has","haves","have","is have","she के साथ have का रूप has है।"],
["mc","study → he ___","studies","studys","study","studyes","व्यंजन + y हो तो -ies: studies।"],
["or","वह बैंक में काम करती है","She works at a bank","work the","she वाला -s: works; बैंक का पहली बार ज़िक्र है, इसलिए आर्टिकल a।"],
["or","उसके पास दो कुत्ते हैं","He has two dogs","have dog","he के साथ has; दो कुत्ते — बहुवचन dogs।"],
["or","वह मीट नहीं खाती","She doesn't eat meat","eats","doesn't के बाद बिना -s वाली क्रिया।"],
["fi","He __ soccer.","उसे फ़ुटबॉल पसंद है","likes","like|liking|is like","he वाला -s: likes।"],
["fi","__ she speak English?","क्या वह अंग्रेज़ी बोलती है?","Does","Do|Is|Are","she वाले सवाल में Does।"],
["fi","She __ to work at eight.","वह आठ बजे काम पर जाती है","goes","go|going|gos","go बदलकर goes हो जाता है।"],
["ty","उसके पास एक कार है (वह = he)","He has a car","has · car — आर्टिकल a","have","he के साथ has; एक कार — आर्टिकल a।"],
["ty","वह बिल्लियों को पसंद करती है","She likes cats","likes · cat — बहुवचन","cat","she वाला -s: likes; आम तौर पर सभी बिल्लियों की बात — बहुवचन cats।"],
["ty","वह यहाँ नहीं रहता","He doesn't live here","doesn't · live · here","lives","doesn't के बाद क्रिया का मूल रूप (V1)।"]]},
{ id:"countable", title:"गणनीय और अगणनीय संज्ञा: some, any, much, many", blurb:"water पर न a लगता है, न -s। गिनी जाने वाली चीज़ों के लिए many, बाकी के लिए much।", deck:"रेस्टोरेंट में", body:`
<p>अंग्रेज़ी में संज्ञाएँ दो तरह की होती हैं: <b>गणनीय</b> (जिन्हें गिन सकें: an apple, two apples) और <b>अगणनीय</b> (जिन्हें गिनते नहीं: water, rice, money, time)। "पानी" को हिंदी में भी कोई नहीं गिनता, पर कुछ शब्द हिंदी में गिने जाते हैं और अंग्रेज़ी में नहीं — यहीं ग़लती होती है।</p>
<div class="tbl"><table><tr><th>गणनीय</th><th>अगणनीय</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, गिनती और -s लगते हैं</td><td>a / an, गिनती और -s नहीं लगते</td></tr></table></div>
<h3>हिंदी में गिने जाते हैं, अंग्रेज़ी में नहीं</h3>
<div class="tbl"><table><tr><th>हिंदी</th><th>✗</th><th>✓</th></tr><tr><td>कई सलाहें</td><td>many advices</td><td class="k">a lot of advice</td></tr><tr><td>तीन काम</td><td>three works</td><td class="k">three things to do</td></tr><tr><td>बहुत सारी जानकारी</td><td>informations</td><td class="k">a lot of information</td></tr><tr><td>दो सामान</td><td>two luggages</td><td class="k">two pieces of luggage</td></tr></table></div>
<p>हिंदी का "पैसे" भी बहुवचन है, पर money अगणनीय है: <b>moneys</b> ✗। ऐसी चीज़ें गिननी हों तो <b>a piece of</b>, <b>a glass of</b>, <b>a cup of</b> लगाएँ।</p>
{{ex:a piece of advice|अ पीस अव़ अड्ˈव़ाइस|एक सलाह}}{{ex:two pieces of luggage|टू ˈपीसिज़ अव़ ˈलगिज|सामान के दो बैग}}{{ex:a glass of water|अ ग्लैस अव़ ˈवॉटर|एक गिलास पानी}}{{ex:a cup of coffee|अ कप अव़ ˈकॉफ़ि|एक कप कॉफ़ी}}
<h3>some और any</h3>
<p>"थोड़ा, कुछ" के लिए सकारात्मक वाक्य में <b>some</b>, नकारात्मक वाक्य और सवाल में <b>any</b>। पर कुछ माँगते या पेश करते समय सवाल में भी <b>some</b> आता है: <b>Can I have some water?</b></p>
{{ex:I have some money.|आइ हैव़ सम ˈमनि|मेरे पास कुछ पैसे हैं}}{{ex:I don't have any money.|आइ डोन्ट हैव़ ˈएनि ˈमनि|मेरे पास बिल्कुल पैसे नहीं हैं}}{{ex:Do you have any questions?|ड यु हैव़ ˈएनि ˈक्वेस्चन्ज़|क्या आपके कोई सवाल हैं?}}
<h3>many और much</h3>
<p>गणनीय हो तो <b>many</b> + बहुवचन, अगणनीय हो तो <b>much</b>। <b>a lot of</b> दोनों के साथ चलता है।</p>
{{ex:How many people?|हाउ ˈमेनि ˈपीपल|कितने लोग हैं?}}{{ex:How much is it?|हाउ मच इज़ इट|यह कितने का है?}}{{ex:I don't have much time.|आइ डोन्ट हैव़ मच टाइम|मेरे पास ज़्यादा समय नहीं है}}
<div class="tip">सबसे आम ग़लतियाँ: <b>a water</b>, <b>many money</b>, <b>informations</b> ✗ → <b>some water</b>, <b>much money</b>, <b>information</b> ✓</div>`,
check:[["How ___ people are there? ख़ाली जगह में क्या आएगा?",["much","many","any","a"],1,"people गणनीय है, इसलिए many।"],["इनमें से अगणनीय संज्ञा कौन-सी है?",["apple","chair","water","friend"],2,"water पर a या -s नहीं लगता।"],["I don't have ___ money. ख़ाली जगह में क्या आएगा?",["some","a","many","any"],3,"नकारात्मक वाक्य में any आता है।"]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water अगणनीय है, इसलिए a या many नहीं; माँगते समय some।"],
["mc","How ___ time do we have?","much","many","any","a","time अगणनीय है, इसलिए much।"],
["mc","\"क्या आपके कोई सवाल हैं?\" =","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any के बाद गणनीय संज्ञा बहुवचन में आती है।"],
["mc","\"एक गिलास पानी\" =","a glass of water","a water glass of","one waters","a glass water","अगणनीय चीज़ को a glass of से गिनते हैं।"],
["mc","I have ___ friends in Seoul.","many","much","a","an","friends गणनीय और बहुवचन है, इसलिए many।"],
["or","मेरे पास कुछ पैसे हैं","I have some money","a moneys","money अगणनीय है: न आर्टिकल a, न बहुवचन -s।"],
["or","दो सेब दीजिए","Two apples please","apple","दो सेब — बहुवचन apples।"],
["or","मेरे पास ज़्यादा समय नहीं है","I don't have much time","many","time अगणनीय है, इसलिए much।"],
["fi","How __ is this?","यह कितने का है?","much","many|any|some","दाम पूछने के लिए how much।"],
["fi","I don't have __ questions.","मेरे कोई सवाल नहीं हैं","any","some|much|a","नकारात्मक वाक्य में any आता है।"],
["fi","a cup __ coffee","एक कप कॉफ़ी","of","for|in|a","a cup of … से गिनते हैं।"],
["ty","क्या मुझे थोड़ा पानी मिल सकता है?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — आर्टिकल नहीं","a","water अगणनीय है, इसलिए आर्टिकल a की जगह some।"],
["ty","क्या आपके पास कोई सवाल है?","Do you have any questions","any · question — बहुवचन","question","any के बाद गणनीय संज्ञा बहुवचन में: questions।"],
["ty","कितने लोग?","How many people","how many · people","much","लोग गिने जा सकते हैं (गणनीय), इसलिए many।"]]},
{ id:"object-have", title:"me, him, her, it और have", blurb:"क्रिया के बाद I नहीं, me। वह = he, she या it। और \"के पास है\" = have।", deck:"अपना परिचय", body:`
<p>हिंदी में भी सर्वनाम का रूप बदलता है: मैं → मुझे, वह → उसे। अंग्रेज़ी में क्रिया या प्रीपोज़िशन के <b>बाद</b> कर्म (object) वाला रूप आता है: I → me, he → him। फ़र्क यह है कि हिंदी के "वह / उसे" से पता नहीं चलता कि बात आदमी की है, औरत की या किसी चीज़ की। अंग्रेज़ी में चुनना पड़ता है: <b>him</b>, <b>her</b> या <b>it</b>।</p>
<div class="tbl"><table><tr><th>कर्ता</th><th>I</th><th>you</th><th>he</th><th>she</th><th>it</th><th>we</th><th>they</th></tr><tr><td>कर्म</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">it</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|शि नोज़ मि|वह मुझे जानती है}}{{ex:I like him.|आइ लाइक हिम|मुझे वह पसंद है}}{{ex:Can you help us?|कन यु हेल्प अस|क्या आप हमारी मदद कर सकते हैं?}}{{ex:I work with her.|आइ वर्क विद़ हर|मैं उसके साथ काम करता हूँ}}
<p>चीज़ के लिए हमेशा it: "मैंने फ़ोन ख़रीदा, पर वह चल नहीं रहा" = <b>… but it isn't working.</b> (he ✗)। और हिंदी की तरह कर्म छोड़ें नहीं: "मुझे पसंद नहीं" = <b>I don't like it.</b></p>
<h3>have: "के पास है"</h3>
<p>"मेरे पास कार है" में हिंदी का कर्ता "कार" है; अंग्रेज़ी में कर्ता व्यक्ति होता है: <b>I have a car.</b> परिवार, चीज़ें, समय — सबके लिए have। "के पास होना" वाले have पर -ing नहीं लगता: <b>He is having a car.</b> ✗ → <b>He has a car.</b> ✓</p>
{{ex:I have two brothers.|आइ हैव़ टू ˈब्रद़र्ज़|मेरे दो भाई हैं}}{{ex:Do you have a pen?|ड यु हैव़ अ पेन|क्या आपके पास पेन है?}}{{ex:I don't have time.|आइ डोन्ट हैव़ टाइम|मेरे पास समय नहीं है}}
<h3>have: खाना, पीना</h3>
<p>खाने-पीने के लिए भी have आता है। breakfast, lunch, dinner से पहले आर्टिकल नहीं लगता।</p>
{{ex:Let's have lunch.|लेट्स हैव़ लन्च|चलिए, लंच करते हैं}}{{ex:I have coffee every morning.|आइ हैव़ ˈकॉफ़ि ˈएव़्रि ˈमॉर्निङ|मैं हर सुबह कॉफ़ी पीती हूँ}}
<div class="tip">सबसे आम ग़लतियाँ: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓, <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. (उसे — लड़के को) ख़ाली जगह में क्या आएगा?",["he","his","him","he's"],2,"क्रिया के बाद कर्म वाला रूप him आता है।"],["Can you help ___? (हमारी) ख़ाली जगह में क्या आएगा?",["us","we","our","ours"],0,"क्रिया के बाद कर्म वाला रूप us आता है।"],["\"क्या आपके पास पेन है?\" अंग्रेज़ी में?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have के अलावा वाक्य में be नहीं है, इसलिए सवाल Do से बनता है।"]],
practice:[
["mc","She knows ___. (मुझे)","me","I","my","mine","क्रिया के बाद कर्म वाला रूप me।"],
["mc","I like ___. (उन्हें)","them","they","their","theirs","क्रिया के बाद कर्म वाला रूप them।"],
["mc","\"क्या आप हमारी मदद कर सकते हैं?\" =","Can you help us?","Can you help we?","Can you help our?","Can us help you?","help के बाद us।"],
["mc","\"चलिए, लंच करते हैं\" =","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","lunch जैसे खाने के नाम से पहले आर्टिकल नहीं लगता।"],
["mc","\"मेरे दो भाई हैं\" =","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","परिवार के लिए have, और दो भाई हैं तो बहुवचन।"],
["or","क्या आपके पास पेन है?","Do you have a pen","the pens","कोई भी एक पेन — आर्टिकल a और एकवचन pen।"],
["or","मुझे वह पसंद है","I like her","she","क्रिया के बाद कर्म वाला रूप her।"],
["or","मेरी दो बहनें हैं","I have two sisters","sister a","दो बहनें — बहुवचन sisters; आर्टिकल a नहीं लगेगा।"],
["fi","Call __ tonight.","आज रात मुझे फ़ोन करना","me","I|my|mine","क्रिया के बाद me।"],
["fi","I work with __.","मैं उसके साथ काम करता हूँ","him","he|his|he's","प्रीपोज़िशन (with) के बाद भी कर्म वाला रूप आता है।"],
["fi","She __ a dog.","उसके पास एक कुत्ता है","has","have|is|haves","she के साथ has।"],
["ty","क्या आप मेरी मदद कर सकते हैं?","Can you help me|Could you help me","can you · help · me","I","help के बाद कर्म वाला रूप me।"],
["ty","क्या आपके पास पेन है?","Do you have a pen","do you have · pen — आर्टिकल a","the","कोई भी एक पेन चाहिए — आर्टिकल a।"],
["ty","मेरे बहुत सारे दोस्त हैं","I have many friends|I have a lot of friends","have · many · friend — बहुवचन","friend","many के बाद बहुवचन friends।"]]},
{ id:"can-like", title:"can, like + -ing, I'd like: क्या आता है और क्या चाहिए", blurb:"आप क्या कर सकते हैं, क्या करना पसंद है और अभी क्या चाहिए — तीनों बताना सीखें।", deck:"हल्की-फुल्की बातचीत", body:`
<p>अपना परिचय देने और ऑर्डर करने के लिए ये तीन ढाँचे सबसे काम के हैं।</p>
<h3>can: कर सकता हूँ</h3>
<p><b>can + क्रिया का मूल रूप</b>। हिंदी का "सकता / सकती / सकते" बदलता है, पर can कभी नहीं बदलता — he, she के साथ भी -s नहीं।</p>
{{ex:I can swim.|आइ कन स्विम|मैं तैर सकता हूँ}}{{ex:I can't drive.|आइ कैन्ट ड्राइव़|मुझे गाड़ी चलानी नहीं आती}}{{ex:Can you speak Hindi?|कन यु स्पीक ˈहिन्डि|क्या आप हिंदी बोल सकते हैं?}}
<h3>like + -ing: … करना पसंद है</h3>
<p>हिंदी में "<b>मुझे</b> चाय पसंद है" — पसंद करने वाला "मुझे" बनकर आता है। अंग्रेज़ी में पसंद करने वाला कर्ता होता है और सबसे पहले आता है: <b>I like tea.</b> शौक बताने के लिए like, love के बाद <b>क्रिया + -ing</b> लगाएँ।</p>
{{ex:I like cooking.|आइ लाइक ˈकुकिङ|मुझे खाना बनाना पसंद है}}{{ex:I love watching movies.|आइ लव़ ˈवाचिङ ˈमूव़िज़|मुझे फ़िल्में देखना बहुत पसंद है}}{{ex:I don't like running.|आइ डोन्ट लाइक ˈरनिङ|मुझे दौड़ना पसंद नहीं}}
<p>आम पसंद बताते समय like ख़ुद -ing में नहीं आता: <b>I am liking cricket.</b> ✗ → <b>I like cricket.</b> ✓</p>
<h3>I'd like: … चाहिए</h3>
<p><b>I like</b> = मुझे हमेशा पसंद है; <b>I'd like</b> = मुझे अभी चाहिए, विनम्र तरीक़े से। ऑर्डर करते समय I'd like कहें।</p>
{{ex:I'd like a coffee, please.|आइड लाइक अ ˈकॉफ़ि प्लीज़|एक कॉफ़ी दीजिए}}{{ex:Would you like some tea?|वड यु लाइक सम टी|आप चाय लेंगे?}}
<div class="tip">सबसे आम ग़लतियाँ: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓, कैफ़े में <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. ख़ाली जगह में क्या आएगा?",["sings","sing","singing","to sing"],1,"can के बाद क्रिया का मूल रूप आता है।"],["\"मुझे खाना बनाना पसंद है\" अंग्रेज़ी में?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like के बाद -ing लगता है।"],["कैफ़े में ऑर्डर करते समय सबसे स्वाभाविक वाक्य कौन-सा है?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"अभी जो चाहिए, उसके लिए I'd like।"]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","can के बाद क्रिया का मूल रूप आता है।"],
["mc","\"मुझे गाड़ी चलानी नहीं आती\" =","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can का नकारात्मक can't है।"],
["mc","\"मुझे फ़िल्में देखना पसंद है\" =","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like के बाद -ing; फ़िल्मों की आम बात है, इसलिए movies।"],
["mc","ऑर्डर करते समय \"एक कॉफ़ी दीजिए\" =","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","अभी जो चाहिए, उसके लिए I'd like।"],
["mc","\"आप चाय लेंगे?\" =","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","कुछ पेश करते समय Would you like …?"],
["or","एक कॉफ़ी दीजिए","I'd like a coffee please","the coffees","ऑर्डर का एक कप — आर्टिकल a और एकवचन coffee।"],
["or","मुझे किताबें पढ़ना पसंद है","I like reading books","book read","like के बाद -ing; किताबों की आम बात — बहुवचन books।"],
["or","क्या आप तैर सकते हैं?","Can you swim","swimming","can के बाद क्रिया का मूल रूप आता है।"],
["fi","I can't __.","मुझे तैरना नहीं आता","swim","swimming|swims|to swim","can't के बाद क्रिया का मूल रूप आता है।"],
["fi","I like __ music.","मुझे संगीत सुनना पसंद है","listening to","listen to|listen|to listening","like के बाद -ing लगता है।"],
["fi","__ like a sandwich, please.","एक सैंडविच दीजिए","I'd|I would","I|I'm|I can","ऑर्डर I'd like से करें।"],
["ty","मुझे खाना बनाना पसंद है","I like cooking|I love cooking|I like to cook","like · cook — -ing","cook","like के बाद -ing लगता है।"],
["ty","एक सैंडविच दीजिए (I'd like से)","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — आर्टिकल a","the","कोई भी एक सैंडविच — आर्टिकल a।"],
["ty","मुझे कुत्ते पसंद हैं","I like dogs|I love dogs","like · dog — बहुवचन","dog","आम तौर पर सभी कुत्तों की बात है — बहुवचन dogs।"]]},
{ id:"continuous", title:"अभी चल रहा काम: be + -ing", blurb:"\"करता हूँ\" = Simple Present, \"कर रहा हूँ\" = be + -ing। पर स्थिति वाली क्रियाओं पर -ing नहीं।", deck:"हल्की-फुल्की बातचीत", body:`
<p>हिंदी में भी यह फ़र्क है: "मैं काम <b>करता हूँ</b>" (आदत) और "मैं काम <b>कर रहा हूँ</b>" (अभी)। अंग्रेज़ी में "कर रहा हूँ" के लिए Present Continuous है: <b>am / is / are + क्रिया-ing</b>। am / is / are को छोड़ें नहीं — "कर रहा <b>हूँ</b>" में "हूँ" भी तो बोलते हैं।</p>
{{ex:I'm working now.|आइम ˈवर्किङ नाउ|मैं अभी काम कर रहा हूँ}}{{ex:She's cooking dinner.|शिज़ ˈकुकिङ ˈडिनर|वह डिनर बना रही है}}{{ex:It's raining.|इट्स ˈरेनिङ|बारिश हो रही है}}
<h3>सवाल और नकारात्मक वाक्य</h3>
{{ex:What are you doing?|वट अर यु ˈडूइङ|आप क्या कर रहे हैं?}}{{ex:Are you listening?|अर यु ˈलिसनिङ|क्या आप सुन रहे हैं?}}{{ex:I'm not sleeping.|आइम नाट ˈस्लीपिङ|मैं सो नहीं रही हूँ}}
<h3>Simple Present से तुलना</h3>
<div class="tbl"><table><tr><th>हमेशा (Simple Present)</th><th>अभी (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>जिन क्रियाओं पर -ing नहीं लगता</h3>
<p>यहाँ हिंदी और अंग्रेज़ी अलग हो जाती हैं। know, want, need, understand, like और have ("के पास होना") किसी काम को नहीं, एक <b>स्थिति</b> को बताती हैं (stative verb)। इन पर "अभी" के लिए भी -ing नहीं लगता: <b>I am understanding.</b> ✗ → <b>I understand.</b> ✓, <b>He is having a car.</b> ✗ → <b>He has a car.</b> ✓ भारत में ऐसा -ing ख़ूब सुनाई देता है, इसलिए इस पर ख़ास ध्यान दें।</p>
{{ex:I know him.|आइ नो हिम|मैं उसे जानता हूँ}}{{ex:I want some water.|आइ वान्ट सम ˈवॉटर|मुझे थोड़ा पानी चाहिए}}
<div class="tip">सबसे आम ग़लतियाँ: be छोड़ देना — <b>I working.</b> ✗ → <b>I'm working.</b> ✓, और स्थिति पर -ing — <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["\"आप अभी क्या कर रहे हैं?\" अंग्रेज़ी में?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"अभी चल रहा काम पूछने के लिए be + -ing।"],["I ___ coffee every morning. ख़ाली जगह में क्या आएगा?",["am drinking","drinking","drink","am drink"],2,"हर सुबह की आदत है, इसलिए Simple Present।"],["इनमें से सही वाक्य कौन-सा है?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know, want और have (के पास होना) स्थिति बताती हैं, इन पर -ing नहीं लगता।"]],
practice:[
["mc","\"मैं अभी काम कर रहा हूँ\" =","I'm working now.","I work now am.","I'm work now.","I working now.","अभी चल रहा काम — be + -ing।"],
["mc","\"वह डिनर बना रही है\" =","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing; dinner जैसे खाने के नाम से पहले आर्टिकल नहीं लगता।"],
["mc","रोज़ की आदत बताने वाला वाक्य कौन-सा है?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","आदत के लिए Simple Present।"],
["mc","\"आप क्या कर रहे हैं?\" =","What are you doing?","What do you doing?","What are you do?","What you are doing?","wh-शब्द + be + कर्ता + -ing।"],
["mc","\"मैं उसे जानता हूँ\" =","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know स्थिति बताने वाली क्रिया है: I know, I'm knowing नहीं।"],
["or","मैं एक किताब पढ़ रही हूँ","I'm reading a book","read books","अभी पढ़ी जा रही एक किताब — आर्टिकल a और एकवचन book।"],
["or","बच्चे खेल रहे हैं","The kids are playing","kid is","कई बच्चे — बहुवचन kids और are।"],
["or","अभी बारिश हो रही है","It's raining now","rains","अभी हो रहा है, इसलिए be + -ing।"],
["fi","I'm __ TV.","मैं टीवी देख रहा हूँ","watching","watch|watches|to watch","be के बाद -ing वाला रूप आता है।"],
["fi","What __ you doing?","आप क्या कर रहे हैं?","are","do|is|does","you के साथ are।"],
["fi","She __ working today.","वह आज काम नहीं कर रही है","isn't|is not","doesn't|don't|not","be + -ing का नकारात्मक isn't से बनता है।"],
["ty","मैं अभी खाना बना रहा हूँ","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook — -ing · now","cook","अभी चल रहा काम — be + -ing।"],
["ty","मैं एक फ़िल्म (movie) देख रही हूँ","I'm watching a movie","I'm · watching · movie — आर्टिकल a","the","कोई भी एक फ़िल्म — आर्टिकल a।"],
["ty","बच्चे सो रहे हैं (the के साथ)","The kids are sleeping|The children are sleeping","kids · are · sleeping — बहुवचन","kid","कई बच्चे — बहुवचन kids और are।"]]},
{ id:"past", title:"Simple Past: was / were और -ed", blurb:"be का Past was / were, बाकी क्रियाओं पर -ed। सवाल और नकारात्मक में did।", deck:"हल्की-फुल्की बातचीत", body:`
<p>हिंदी का "किया", "गया", "था" अंग्रेज़ी में Simple Past (जिसे Past Indefinite भी कहते हैं) बनता है। be (am, is, are) का Past और बाकी क्रियाओं का Past अलग-अलग बनते हैं।</p>
<h3>be का Past: was / were</h3>
<p>I, he, she, it के साथ <b>was</b>; you, we, they के साथ <b>were</b>।</p>
{{ex:I was tired.|आइ वज़ ˈटाइअर्ड|मैं थका हुआ था}}{{ex:It was fun.|इट वज़ फ़न|मज़ा आया}}{{ex:We were at home.|वि वर अट होम|हम घर पर थे}}{{ex:Were you busy?|वर यु ˈबिज़ि|क्या आप बिज़ी थे?}}
<h3>बाकी क्रियाओं का Past: -ed</h3>
<p>क्रिया के आख़िर में <b>-ed</b> लगाएँ; कर्ता कोई भी हो, रूप एक ही रहता है। -ed तीन तरह बोला जाता है: worked में "ट", called में "ड", wanted में "इड"।</p>
{{ex:I worked yesterday.|आइ वर्क्ट ˈयेस्टर्डे|मैंने कल काम किया}}{{ex:We watched a movie.|वि वाच्ट अ ˈमूव़ि|हमने एक फ़िल्म देखी}}{{ex:She called me.|शि कॉल्ड मि|उसने मुझे फ़ोन किया}}
<h3>"था" का मतलब हर बार was नहीं</h3>
<p>"मैंने बहुत काम किया था" में "था" देखकर was लगाने का मन करता है, पर -ed अकेला ही Past बता देता है: <b>I was worked hard.</b> ✗ → <b>I worked hard.</b> ✓ was / were तभी आता है जब वाक्य में कोई दूसरी क्रिया न हो (I was tired)।</p>
<h3>नकारात्मक और सवाल में did</h3>
<p><b>didn't</b> या <b>Did</b> आ जाए तो क्रिया अपने मूल रूप (V1) में लौट आती है।</p>
{{ex:I didn't work yesterday.|आइ ˈडिडन्ट वर्क ˈयेस्टर्डे|मैंने कल काम नहीं किया}}{{ex:Did you call me?|डिड यु कॉल मि|क्या आपने मुझे फ़ोन किया था?}}
<div class="tip">सबसे आम ग़लतियाँ: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓, <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. ख़ाली जगह में क्या आएगा?",["was","were","did","are"],1,"they के साथ were।"],["\"मैंने कल काम नहीं किया\" अंग्रेज़ी में?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't के बाद क्रिया का मूल रूप आता है।"],["Did you ___ the movie? ख़ाली जगह में क्या आएगा?",["watch","watched","watching","watches"],0,"Did के बाद क्रिया का मूल रूप आता है।"]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","I के साथ was।"],
["mc","\"हमने एक फ़िल्म देखी\" =","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","be के अलावा बाकी क्रियाओं का Past -ed से बनता है।"],
["mc","\"क्या आपने कल फ़ोन किया था?\" =","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did के बाद क्रिया का मूल रूप आता है।"],
["mc","\"मज़ा आया\" =","It was fun.","It were fun.","It did fun.","It funned.","it के साथ was।"],
["mc","\"क्या आप बिज़ी थे?\" =","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy के साथ कोई दूसरी क्रिया नहीं है, इसलिए सवाल be (were) से बनता है।"],
["or","हमने एक फ़िल्म देखी","We watched a movie","watch movies","एक फ़िल्म — आर्टिकल a और एकवचन movie।"],
["or","मैं अपने दोस्तों के साथ खेला","I played with my friends","friend play","कई दोस्त — बहुवचन friends।"],
["or","मैंने कल काम नहीं किया","I didn't work yesterday","worked","didn't के बाद क्रिया का मूल रूप आता है।"],
["fi","We __ at home last night.","कल रात हम घर पर थे","were","was|did|are","we के साथ were।"],
["fi","I __ soccer yesterday.","मैंने कल फ़ुटबॉल खेला","played","play|playing|was play","Past के लिए -ed।"],
["fi","__ you work yesterday?","क्या आपने कल काम किया?","Did","Were|Do|Was","work जैसी क्रिया के Past सवाल में Did।"],
["ty","मैं थका हुआ था","I was tired","was · tired","were","I के साथ was।"],
["ty","मैंने एक फ़िल्म (movie) देखी","I watched a movie","watched · movie — आर्टिकल a","the","एक फ़िल्म — आर्टिकल a।"],
["ty","मैंने अपने दोस्तों को फ़ोन किया","I called my friends","called · my · friend — बहुवचन","friend","कई दोस्त — बहुवचन friends।"]]},
{ id:"irregular-past", title:"अनियमित Past: went, ate, saw", blurb:"जो क्रिया जितनी आम, उतनी ज़्यादा संभावना कि उस पर -ed नहीं लगता। पहले ये 12 याद करें।", deck:"हल्की-फुल्की बातचीत", body:`
<p>रोज़ इस्तेमाल होने वाली क्रियाओं का Past <b>अनियमित</b> होता है — उन पर -ed नहीं लगता। स्कूल में आपने V1, V2, V3 की तालिकाएँ रटी होंगी; यहाँ सबसे ज़रूरी 12 क्रियाओं के V2 हैं। इन्हें सिर्फ़ पढ़ें नहीं, लिखकर और बोलकर याद करें।</p>
<div class="tbl"><table><tr><th>V1</th><th>V2</th><th>V1</th><th>V2</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Mumbai.|आइ वेन्ट ट मुम्ˈबाइ|मैं मुंबई गया}}{{ex:We ate pizza.|वि एट ˈपीट्सा|हमने पिज़्ज़ा खाया}}{{ex:I saw a movie.|आइ सॉ अ ˈमूव़ि|मैंने एक फ़िल्म देखी}}{{ex:I met my friends.|आइ मेट माइ फ़्रेन्ड्ज़|मैं अपने दोस्तों से मिली}}{{ex:I bought a book.|आइ बॉट अ बुक|मैंने एक किताब ख़रीदी}}
<h3>सवाल और नकारात्मक में मूल रूप (V1)</h3>
<p>Past होने की बात <b>did</b> बता देता है, इसलिए क्रिया V1 में लौट आती है।</p>
{{ex:What did you do?|वट डिड यु डू|आपने क्या किया?}}{{ex:Where did you go?|वेर डिड यु गो|आप कहाँ गए थे?}}{{ex:I didn't go.|आइ ˈडिडन्ट गो|मैं नहीं गया}}
<div class="tip">सबसे आम ग़लतियाँ: <b>I goed.</b> ✗ → <b>I went.</b> ✓, <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["go का Past (V2) क्या है?",["goed","gone","went","going"],2,"go का V2 went है।"],["\"आपने क्या किया?\" अंग्रेज़ी में?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did के बाद मूल रूप do आता है।"],["I didn't ___ breakfast. ख़ाली जगह में क्या आएगा?",["ate","eaten","eats","eat"],3,"didn't के बाद क्रिया का मूल रूप (V1) आता है।"]],
practice:[
["mc","eat का Past (V2) क्या है?","ate","eated","eat","eaten","eat का V2 ate है।"],
["mc","\"आप कहाँ गए थे?\" =","Where did you go?","Where did you went?","Where you went?","Where were you go?","did के बाद मूल रूप आता है।"],
["mc","\"मैंने एक किताब ख़रीदी\" =","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy का V2 bought है, और किताब एक है, इसलिए a।"],
["mc","see का Past (V2) क्या है?","saw","seed","seen","sawed","see का V2 saw है।"],
["mc","\"मैं नहीं गया\" =","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't के बाद मूल रूप आता है।"],
["or","मैंने एक फ़िल्म देखी","I saw a movie","see movies","एक फ़िल्म — आर्टिकल a और एकवचन movie; see का V2 saw।"],
["or","हमने पिज़्ज़ा खाया","We ate pizza","eated","eat का V2 ate है।"],
["or","मैं अपने दोस्तों से मिली","I met my friends","friend meet","कई दोस्त — बहुवचन friends।"],
["fi","I __ to Jeju last year.","पिछले साल मैं जेजू गया","went","go|goed|gone","go का V2 went है।"],
["fi","What did you __?","आपने क्या खाया?","eat","ate|eaten|eating","did के बाद मूल रूप आता है।"],
["fi","She __ a new phone.","उसने नया फ़ोन ख़रीदा","bought","buyed|buy|buys","buy का V2 bought है।"],
["ty","मैं बुसान गई","I went to Busan","went · to · Busan","go","go का V2 went है।"],
["ty","मैंने एक किताब ख़रीदी","I bought a book","bought · book — आर्टिकल a","the","किताब एक है — आर्टिकल a।"],
["ty","मैं अपने दोस्तों से मिला","I met my friends|I saw my friends","met · my · friend — बहुवचन","friend","कई दोस्त — बहुवचन friends।"]]},
{ id:"the", title:"the दोबारा: पहली बार a, फिर the", blurb:"पहली बार ज़िक्र हो तो a, जब दोनों जानते हों कि कौन-सी चीज़ तो the।", deck:"रास्ता और यातायात", body:`
<p>हिंदी में आर्टिकल नहीं होते। "यह / वह" कभी-कभी the जैसा काम करते हैं, पर ज़रूरी नहीं। इसलिए गड़बड़ी दोनों तरफ़ होती है: जहाँ the चाहिए वहाँ छूट जाता है, और जहाँ नहीं चाहिए वहाँ लग जाता है। इस पाठ में दोनों तरफ़ का अभ्यास है।</p>
<h3>पहली बार a, दोबारा the</h3>
<p>सुनने वाला पहली बार सुन रहा हो तो a; अभी-अभी ज़िक्र हुआ हो और अब दोनों जानते हों तो the।</p>
{{ex:I bought a shirt. The shirt is blue.|आइ बॉट अ शर्ट। द़ शर्ट इज़ ब्लू|मैंने एक शर्ट ख़रीदी। वह शर्ट नीली है}}
<h3>साफ़ हो कि कौन-सी चीज़, तो the</h3>
<p>इस कमरे की खिड़की, पास वाला स्टेशन, सूरज — कौन-सी चीज़ है, यह साफ़ हो तो पहली बार में ही the।</p>
{{ex:Can you open the window?|कन यु ˈओपन द़ ˈविन्डो|ज़रा खिड़की खोल देंगे?}}{{ex:Where's the subway station?|वेर्ज़ द़ ˈसब्वे ˈस्टेशन|मेट्रो स्टेशन कहाँ है?}}{{ex:The sun is hot today.|द़ सन इज़ हाट टˈडे|आज धूप बहुत तेज़ है}}
<h3>जहाँ आर्टिकल नहीं लगता</h3>
<p>आम बातों और भावों (life, experience, advice) पर the नहीं लगता: <b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓ घर, काम, सवारी और सोने से जुड़े कुछ वाक्यांश भी बिना आर्टिकल के, पूरे-के-पूरे याद करें।</p>
{{ex:I go to work by bus.|आइ गो ट वर्क बाइ बस|मैं बस से काम पर जाता हूँ}}{{ex:I'm at home.|आइम अट होम|मैं घर पर हूँ}}{{ex:I go to bed at eleven.|आइ गो ट बेड अट इˈलेव़न|मैं ग्यारह बजे सोती हूँ}}
<div class="tip">ख़ुद से पूछें: "क्या सुनने वाला जानता है कि <b>कौन-सी</b> चीज़?" जानता है तो the, नहीं जानता तो a।</div>`,
check:[["I have a cat. ___ cat is white. ख़ाली जगह में क्या आएगा?",["A","An","The","(आर्टिकल नहीं)"],2,"अभी जिस बिल्ली का ज़िक्र हुआ, वही — the।"],["I go to ___ work by bus. ख़ाली जगह में क्या आएगा?",["a","the","an","(आर्टिकल नहीं)"],3,"go to work में आर्टिकल नहीं लगता।"],["इसी कमरे की खिड़की खुलवानी हो तो सही वाक्य कौन-सा है?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"वह खिड़की जिसे दोनों जानते हैं — the।"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","अभी ज़िक्र हुई वही शर्ट — the।"],
["mc","\"स्टेशन कहाँ है?\" =","Where's the station?","Where's a station?","Where's station?","Where the station?","पास वाला वह स्टेशन — the।"],
["mc","इनमें से सही वाक्य कौन-सा है?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work और by bus में आर्टिकल नहीं लगता।"],
["mc","\"सूरज बहुत गर्म है\" =","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","जो चीज़ एक ही है (सूरज), उस पर the।"],
["mc","\"मैं घर पर हूँ\" =","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home में आर्टिकल नहीं लगता।"],
["or","ज़रा खिड़की खोल देंगे?","Can you open the window","a windows","वह खिड़की जिसे दोनों जानते हैं — आर्टिकल the।"],
["or","मैं बस से काम पर जाता हूँ","I go to work by bus","the a","go to work और by bus में कोई आर्टिकल नहीं लगता।"],
["or","वह कुत्ता बड़ा है","The dog is big","A dogs","जिस कुत्ते का ज़िक्र हो चुका है — आर्टिकल the।"],
["fi","I saw a movie. __ movie was great.","मैंने एक फ़िल्म देखी। वह फ़िल्म बहुत अच्छी थी","The","A|An|Some","अभी ज़िक्र हुई वही फ़िल्म — the।"],
["fi","Where's __ bathroom?","बाथरूम कहाँ है?","the","a|an|some","इसी इमारत का बाथरूम — the।"],
["fi","I have __ idea.","मेरे पास एक आइडिया है","an","a|the|some","पहली बार ज़िक्र है, और idea स्वर की आवाज़ से शुरू होता है — an।"],
["ty","क्या आप दरवाज़ा बंद कर सकते हैं?","Can you close the door|Could you close the door","can you · close · door — आर्टिकल the","a","वह दरवाज़ा जिसे दोनों जानते हैं — आर्टिकल the।"],
["ty","स्टेशन कहाँ है?","Where is the station|Where's the station","where · station — आर्टिकल the","a","पास वाला वह स्टेशन — आर्टिकल the।"],
["ty","मैं घर पर हूँ","I'm at home|I'm home","I'm · at · home — आर्टिकल नहीं","the","home से पहले आर्टिकल नहीं लगता।"]]},
{ id:"adjectives", title:"विशेषण और तुलना: bigger, more expensive, the best", blurb:"विशेषण संज्ञा से पहले। तुलना में -er या more, \"सबसे\" के लिए the -est या the most।", deck:"ख़रीदारी और भुगतान", body:`
<p>विशेषण संज्ञा से <b>पहले</b> आता है (a big bag) या be के <b>बाद</b> (This bag is big)। ख़रीदारी में तुलना सबसे ज़्यादा काम आती है, इसलिए उसे भी साथ में सीखें।</p>
{{ex:a big bag|अ बिग बैग|बड़ा बैग}}{{ex:This bag is big.|द़िस बैग इज़ बिग|यह बैग बड़ा है}}{{ex:It's too small.|इट्स टू स्मॉल|यह बहुत छोटा है}}
<h3>तुलना: -er या more</h3>
<p>हिंदी में तुलना "से" और "ज़्यादा / और" से होती है: "यह उससे <b>ज़्यादा</b> सस्ता है"। अंग्रेज़ी में छोटे शब्द पर <b>-er</b> लगता है और लंबे शब्द से पहले <b>more</b> — दोनों एक साथ कभी नहीं। हिंदी का "से" यहाँ <b>than</b> बनता है।</p>
<div class="tbl"><table><tr><th>मूल</th><th>ज़्यादा …</th><th>सबसे …</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|द़िस वन इज़ ˈचीपर|यह वाला सस्ता है}}{{ex:It's more expensive than that one.|इट्स मॉर इक्ˈस्पेन्सिव़ द़न द़ैट वन|यह उस वाले से महँगा है}}{{ex:Do you have a bigger size?|ड यु हैव़ अ ˈबिगर साइज़|क्या इससे बड़ा साइज़ है?}}
<h3>"सबसे" के साथ the</h3>
<p>"सबसे" के लिए -est या most, और उससे पहले the: "सबसे सस्ता" = <b>the cheapest</b> (the most cheapest ✗)।</p>
{{ex:This is the best restaurant here.|द़िस इज़ द़ बेस्ट ˈरेस्टरान्ट हिर|यह यहाँ का सबसे अच्छा रेस्टोरेंट है}}{{ex:Which is the cheapest?|विच इज़ द़ ˈचीपिस्ट|सबसे सस्ता कौन-सा है?}}
<div class="tip">सबसे आम ग़लतियाँ: <b>more cheaper</b>, <b>more good</b> ✗ → <b>cheaper</b>, <b>better</b> ✓ -er और more साथ नहीं आते।</div>`,
check:[["big का comparative (तुलना वाला रूप) क्या है?",["more big","biger","bigger","most big"],2,"छोटे शब्द पर -er लगता है, और आख़िरी व्यंजन दोहरा हो जाता है: bigger।"],["This is ___ expensive than that. ख़ाली जगह में क्या आएगा?",["more","most","much","very"],0,"लंबे शब्द की तुलना more से होती है।"],["good का superlative (सबसे …) क्या है?",["the goodest","the most good","the better","the best"],3,"good अनियमित है: good – better – the best।"]],
practice:[
["mc","cheap का comparative क्या है?","cheaper","more cheap","cheapper","most cheap","छोटे शब्द पर -er लगता है।"],
["mc","\"यह ज़्यादा महँगा है\" =","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","लंबे शब्द से पहले more।"],
["mc","\"क्या इससे बड़ा साइज़ है?\" =","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","क्रम: आर्टिकल + विशेषण + संज्ञा।"],
["mc","good का comparative क्या है?","better","gooder","more good","best","good अनियमित है: good – better – best।"],
["mc","\"यह सबसे अच्छा रेस्टोरेंट है\" =","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","\"सबसे\" वाले रूप से पहले the लगता है।"],
["or","क्या इससे बड़ा साइज़ है?","Do you have a bigger size","the sizes","कोई भी एक साइज़ चाहिए — आर्टिकल a।"],
["or","यह सबसे सस्ता है","This is the cheapest","a cheaper","\"सबसे\" वाले रूप से पहले आर्टिकल the।"],
["or","यह उससे सस्ता है","This is cheaper than that","more","-er वाले शब्द के साथ more नहीं लगता।"],
["fi","It's __ small.","यह बहुत छोटा है (काम का नहीं)","too","much|more|most","हद से ज़्यादा (इतना कि काम न आए) = too।"],
["fi","This is cheaper __ that one.","यह उस वाले से सस्ता है","than","then|that|more","तुलना में हिंदी का \"से\" = than।"],
["fi","It's the __ expensive one.","यह सबसे महँगा वाला है","most","more|much|very","लंबे शब्द के साथ \"सबसे\" = the most।"],
["ty","क्या इससे छोटा साइज़ है?","Do you have a smaller size","smaller · size — आर्टिकल a","the","कोई भी एक साइज़ चाहिए — आर्टिकल a।"],
["ty","यह सबसे अच्छा है","This is the best|This one is the best","the · best — आर्टिकल the","a","\"सबसे\" वाले रूप से पहले आर्टिकल the।"],
["ty","यह वाला ज़्यादा सस्ता है","This is cheaper|This one is cheaper","cheap — तुलना वाला रूप","more","छोटे शब्द पर -er लगता है; more cheaper नहीं।"]]},
{ id:"going-to", title:"योजना बताना: be going to", blurb:"जो पहले से तय है, उसके लिए be going to + क्रिया का मूल रूप।", deck:"हल्की-फुल्की बातचीत", body:`
<p>पहले से तय योजना के लिए <b>be + going to + क्रिया का मूल रूप</b> आता है। हिंदी का "… करने वाला हूँ" इसके सबसे क़रीब है।</p>
{{ex:I'm going to visit Mumbai.|आइम ˈगोइङ ट ˈव़िज़िट मुम्ˈबाइ|मैं मुंबई जाने वाला हूँ}}{{ex:She's going to buy a car.|शिज़ ˈगोइङ ट बाइ अ कार|वह कार ख़रीदने वाली है}}{{ex:We're going to have dinner.|विर ˈगोइङ ट हैव़ ˈडिनर|हम डिनर करने वाले हैं}}
<h3>नकारात्मक और सवाल</h3>
{{ex:I'm not going to go.|आइम नाट ˈगोइङ ट गो|मैं नहीं जाने वाली}}{{ex:Are you going to come?|अर यु ˈगोइङ ट कम|क्या आप आने वाले हैं?}}{{ex:What are you going to do this weekend?|वट अर यु ˈगोइङ ट डू द़िस ˈवीकेन्ड|इस वीकेंड आप क्या करने वाले हैं?}}
<h3>जो होता दिख रहा हो</h3>
<p>आसमान में बादल देखकर "बारिश होने वाली है" — यह भी going to।</p>
{{ex:It's going to rain.|इट्स ˈगोइङ ट रेन|बारिश होने वाली है}}
<h3>साथ आने वाले समय-शब्द</h3>
<p>tomorrow (कल), tonight (आज रात), this weekend (इस वीकेंड), next week (अगले हफ़्ते) — इन्हें वाक्य के आख़िर में रखें।</p>
<div class="tip">बोलते समय going to अक्सर <b>gonna</b> जैसा सुनाई देता है। और be न छोड़ें: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["\"कल मैं अपने दोस्त से मिलने वाला हूँ\" अंग्रेज़ी में?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + क्रिया का मूल रूप।"],["She ___ going to study. ख़ाली जगह में क्या आएगा?",["am","are","is","be"],2,"she के साथ is।"],["\"इस वीकेंड आप क्या करने वाले हैं?\" अंग्रेज़ी में?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"wh-शब्द + be + कर्ता + going to।"]],
practice:[
["mc","\"मैं बुसान जाने वाला हूँ\" =","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + क्रिया का मूल रूप।"],
["mc","They ___ going to come.","are","is","am","be","they के साथ are।"],
["mc","\"बारिश होने वाली है\" =","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to के बाद क्रिया का मूल रूप आता है।"],
["mc","\"मैं नहीं जाने वाली\" =","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","be के बाद not लगाएँ।"],
["mc","\"क्या आप आने वाले हैं?\" =","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","सवाल में be आगे आ जाता है।"],
["or","वह कार ख़रीदने वाली है","She's going to buy a car","the cars","एक कार — आर्टिकल a और एकवचन car।"],
["or","मैं अपने दोस्तों से मिलने वाला हूँ","I'm going to meet my friends","friend","कई दोस्त — बहुवचन friends।"],
["or","हम डिनर करने वाले हैं","We're going to have dinner","a","dinner जैसे खाने के नाम से पहले आर्टिकल नहीं लगता।"],
["fi","I'm going __ study tonight.","आज रात मैं पढ़ने वाली हूँ","to","for|at|will","going to + क्रिया का मूल रूप।"],
["fi","__ you going to come?","क्या आप आने वाले हैं?","Are","Do|Is|Will","you के साथ Are।"],
["fi","It's going to __ tomorrow.","कल बारिश होने वाली है","rain","rains|raining|rained","going to के बाद क्रिया का मूल रूप आता है।"],
["ty","मैं एक फ़िल्म (movie) देखने वाला हूँ","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — आर्टिकल a","the","कोई भी एक फ़िल्म — आर्टिकल a।"],
["ty","आप क्या करने वाले हैं?","What are you going to do","what · going to · do","will","योजना पूछने के लिए be going to।"],
["ty","मैं अपने दोस्तों से मिलने वाली हूँ","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — बहुवचन","friend","कई दोस्त — बहुवचन friends।"]]},
{ id:"joining", title:"वाक्य जोड़ना: and, but, or, so, because", blurb:"दो छोटे वाक्य, एक जोड़ने वाला शब्द। \"क्योंकि … इसलिए\" की तरह जोड़ा नहीं — एक ही काफ़ी है।", deck:"भावनाएँ और प्रतिक्रियाएँ", body:`
<p>सिर्फ़ छोटे-छोटे वाक्य बोलें तो बात टूटी-टूटी लगती है। इन पाँच योजकों (and, but, or, so, because) से वाक्य जोड़ें, बात अपने-आप सहज हो जाएगी।</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|आइ लाइक ˈकॉफ़ि अन्ड टी|मुझे कॉफ़ी और चाय पसंद है}}{{ex:I'm tired but happy.|आइम ˈटाइअर्ड बट ˈहैपि|मैं थका हूँ, पर ख़ुश हूँ}}{{ex:Coffee or tea?|ˈकॉफ़ि अर टी|कॉफ़ी या चाय?}}
<h3>so: इसलिए</h3>
<p>क्रम है <b>कारण + so + नतीजा</b>, जैसे हिंदी में "मैं थका था, इसलिए घर चला गया"।</p>
{{ex:I was tired, so I went home.|आइ वज़ ˈटाइअर्ड सो आइ वेन्ट होम|मैं थका था, इसलिए घर चला गया}}
<h3>because: क्योंकि</h3>
<p>क्रम है <b>नतीजा + because + कारण</b> — बिल्कुल हिंदी के "क्योंकि" जैसा। पूरे वाक्य से पहले because, अकेली संज्ञा से पहले <b>because of</b>: because it was raining / because of the rain।</p>
{{ex:I went home because I was tired.|आइ वेन्ट होम बिकज़ आइ वज़ ˈटाइअर्ड|मैं घर चला गया क्योंकि मैं थका था}}{{ex:I stayed home because it was raining.|आइ स्टेड होम बिकज़ इट वज़ ˈरेनिङ|मैं घर पर रहा क्योंकि बारिश हो रही थी}}
<h3>जोड़े में नहीं, एक ही शब्द</h3>
<p>हिंदी में "क्योंकि … इसलिए …" और "हालाँकि … लेकिन …" जोड़े में चलते हैं। अंग्रेज़ी में एक ही योजक काफ़ी है: <b>Although it was late, but I went.</b> ✗ → <b>Although it was late, I went.</b> ✓</p>
<h3>too: भी</h3>
{{ex:I like it too.|आइ लाइक इट टू|मुझे भी पसंद है}}
<div class="tip">so और because एक ही वाक्य में साथ नहीं आते: <b>Because I was tired, so I went home.</b> ✗ दोनों में से एक चुनें।</div>`,
check:[["I was sick, ___ I stayed home. ख़ाली जगह में क्या आएगा?",["because","but","so","or"],2,"पहले कारण, फिर नतीजा — so।"],["I stayed home ___ I was sick. ख़ाली जगह में क्या आएगा?",["because","so","but","and"],0,"पहले नतीजा, फिर कारण — because।"],["\"कॉफ़ी लेंगे या चाय?\" के लिए सही वाक्य कौन-सा है?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"दो में से एक चुनना हो तो or।"]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","उलटी बात जोड़नी हो तो but।"],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","पहले कारण, फिर नतीजा — so।"],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","पहले नतीजा, फिर कारण — because।"],
["mc","\"कॉफ़ी या चाय?\" =","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","दो में से एक — or।"],
["mc","\"मैं थकी हूँ, पर ख़ुश हूँ\" =","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","\"पर / लेकिन\" = but।"],
["or","मुझे बिल्लियाँ और कुत्ते पसंद हैं","I like cats and dogs","cat dog","आम तौर पर सभी बिल्लियों और कुत्तों की बात — बहुवचन cats और dogs।"],
["or","एक कॉफ़ी और एक सैंडविच दीजिए","A coffee and a sandwich please","the or","दोनों चीज़ें एक-एक हैं — हर एक से पहले आर्टिकल a।"],
["or","मुझे भूख लगी थी, इसलिए मैंने खाया","I was hungry so I ate","because","पहले कारण, फिर नतीजा — so।"],
["fi","I'm tired __ happy.","मैं थका हूँ, पर ख़ुश हूँ","but","so|because|or","\"पर / लेकिन\" = but।"],
["fi","I stayed home __ it was raining.","मैं घर पर रहा क्योंकि बारिश हो रही थी","because","so|but|or","पहले नतीजा, फिर कारण — because।"],
["fi","Coffee __ tea?","कॉफ़ी या चाय?","or","so|but|because","दो में से एक — or।"],
["ty","मुझे कॉफ़ी और चाय पसंद है","I like coffee and tea","like · coffee · and · tea — आर्टिकल नहीं","a","कॉफ़ी और चाय की आम बात है — कोई आर्टिकल नहीं।"],
["ty","मैं थका हूँ, पर ख़ुश हूँ","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","\"पर / लेकिन\" = but।"],
["ty","मुझे कुत्ते और बिल्लियाँ पसंद हैं","I like dogs and cats|I like cats and dogs","dog · and · cat — बहुवचन","dog","आम तौर पर सभी कुत्तों और बिल्लियों की बात — बहुवचन dogs और cats।"]]},
{ id:"indian-english", title:"इंडियन इंग्लिश: भारत में ठीक, विदेश में अजीब", blurb:"prepone, out of station, good name — भारत में सब समझते हैं। विदेश में क्या कहें, यह जानें।", deck:"इंडियन इंग्लिश: भारत बनाम विदेश", body:`
<p>इंडियन इंग्लिश अंग्रेज़ी की एक असली, अपनी क़िस्म है — जैसे अमेरिकन या ब्रिटिश इंग्लिश। भारत में इसके शब्द और मुहावरे सब समझते हैं, और भारतीय सहकर्मियों के साथ इन्हें बेझिझक बोलिए। पर विदेश में, या विदेशी क्लाइंट से बात करते समय, कुछ शब्द सामने वाले को उलझा देते हैं। यह पाठ बताता है कि वहाँ लोग क्या सुनने की उम्मीद करते हैं।</p>
<h3>भारत में चलता है, विदेश में यह कहें</h3>
<div class="tbl"><table><tr><th>भारत में</th><th>विदेश में</th></tr><tr><td>prepone</td><td class="k">move up / bring forward</td></tr><tr><td>out of station</td><td class="k">out of town</td></tr><tr><td>What is your good name?</td><td class="k">What's your name?</td></tr><tr><td>cousin brother / cousin sister</td><td class="k">cousin</td></tr><tr><td>passed out (पढ़ाई पूरी की)</td><td class="k">graduated</td></tr><tr><td>revert (जवाब देना)</td><td class="k">get back to you / reply</td></tr><tr><td>years back · native place</td><td class="k">years ago · hometown</td></tr><tr><td>mention not</td><td class="k">you're welcome / don't mention it</td></tr><tr><td>do the needful · kindly + काम</td><td class="k">please take care of it · could you please …</td></tr><tr><td>take lunch · shifting (घर बदलना)</td><td class="k">have lunch · moving</td></tr><tr><td>today itself · now only</td><td class="k">today · right now</td></tr></table></div>
<p>कुछ शब्दों का विदेश में दूसरा ही मतलब निकलता है: <b>passed out</b> वहाँ "बेहोश हो गया" है, और <b>revert</b> का मतलब "पुरानी हालत में लौटना" है। prepone ज़्यादातर लोगों ने सुना ही नहीं।</p>
{{ex:Can we move the meeting up?|कन वि मूव़ द़ ˈमीटिङ अप|क्या मीटिंग पहले कर सकते हैं?}}{{ex:I'm out of town this week.|आइम आउट अव़ टाउन द़िस वीक|मैं इस हफ़्ते शहर से बाहर हूँ}}{{ex:I graduated in 2019.|आइ ˈग्रैजुएटिड इन ˈट्वेन्टि नाइन्ˈटीन|मैंने 2019 में पढ़ाई पूरी की}}{{ex:I moved here five years ago.|आइ मूव़्ड हिर फ़ाइव़ यिर्ज़ अˈगो|मुझे यहाँ आए पाँच साल हो गए}}
<h3>भारत में भी, विदेश में भी ग़लत</h3>
<p>कुछ आदतें किसी भी अंग्रेज़ी में ग़लत मानी जाती हैं। doubt का मतलब "शक" है, और discuss में "के बारे में" पहले से शामिल है, इसलिए about नहीं लगता।</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>Myself Rahul.</td><td class="k">I'm Rahul. / My name is Rahul.</td></tr><tr><td>discuss about the plan</td><td class="k">discuss the plan</td></tr><tr><td>revert back · return back</td><td class="k">get back to you · return</td></tr><tr><td>I have a doubt. (सवाल के लिए)</td><td class="k">I have a question.</td></tr><tr><td>Do one thing …</td><td class="k">Here's an idea … / Why don't you …</td></tr></table></div>
{{ex:Hi, I'm Rahul.|हाइ आइम राˈहूल|नमस्ते, मैं राहुल हूँ}}{{ex:Let's discuss the plan.|लेट्स डिˈस्कस द़ प्लैन|चलिए, प्लान पर बात करते हैं}}{{ex:I have a question.|आइ हैव़ अ ˈक्वेस्चन|मेरा एक सवाल है}}
<h3>हिंदी से सीधा अनुवाद</h3>
<div class="tbl"><table><tr><th>हिंदी</th><th>सीधा अनुवाद</th><th>विदेश में</th></tr><tr><td>पिक्चर देखना</td><td>see a picture</td><td class="k">see a movie</td></tr><tr><td>सिर खाना</td><td>eat my head</td><td class="k">bug me</td></tr><tr><td>मैं जयपुर का हूँ</td><td>I belong to Jaipur</td><td class="k">I'm from Jaipur</td></tr><tr><td>… है ना? (हर वाक्य के बाद)</td><td>…, isn't it?</td><td class="k">… aren't you? / … don't you?</td></tr></table></div>
{{ex:Let's go see a movie.|लेट्स गो सी अ ˈमूव़ि|चलो, फ़िल्म देखने चलते हैं}}{{ex:I'm from Jaipur.|आइम फ़्रम ˈजाइपुर|मैं जयपुर से हूँ}}{{ex:You're coming tomorrow, aren't you?|युर ˈकमिङ टˈमारो आर्न्ट यु|तुम कल आ रहे हो, है ना?}}
<div class="tip">इंडियन इंग्लिश पर शर्माने की कोई बात नहीं। बस सुनने वाले को देखकर शब्द चुनें: भारतीय टीम के साथ <b>out of station</b>, विदेशी क्लाइंट के साथ <b>out of town</b>।</div>`,
check:[["विदेशी क्लाइंट से मीटिंग पहले करवानी हो तो क्या कहें?",["Can we prepone the meeting?","Can we move the meeting up?","Can we before the meeting?","Can we early the meeting?"],1,"prepone भारत में चलता है, पर विदेश में बहुत लोग इसे नहीं जानते: move up या bring forward।"],["\"मेरा एक सवाल है\" — विदेश में सबसे साफ़ वाक्य कौन-सा है?",["I have one doubt.","I have a doubt.","I have doubt.","I have a question."],3,"doubt का मतलब शक है; सवाल के लिए question, और एक सवाल — आर्टिकल a।"],["किसी ने Thank you! कहा। विदेश में सबसे स्वाभाविक जवाब कौन-सा है?",["You're welcome.","Mention not.","Please.","Welcome."],0,"mention not भारत में चलता है; विदेश में You're welcome या No problem।"]],
practice:[
["mc","\"आपका नाम क्या है?\" — विदेश में सबसे स्वाभाविक सवाल?","What's your name?","What is your good name?","What is you name?","Your name is what?","good name हिंदी के \"आपका शुभ नाम\" से आया है; भारत में चलता है, विदेश में बस What's your name?"],
["mc","\"मैं इस हफ़्ते शहर से बाहर हूँ\" — विदेश में?","I'm out of town this week.","I'm out of station this week.","I'm out of the town this week.","I'm outside city this week.","out of station भारत में चलता है; विदेश में out of town।"],
["mc","\"मैंने 2019 में ग्रेजुएशन किया\" — विदेश में?","I graduated in 2019.","I passed out in 2019.","I was passed out in 2019.","I graduated on 2019.","विदेश में passed out का मतलब \"बेहोश हो गया\" है; पढ़ाई पूरी हुई तो graduated।"],
["mc","अपना परिचय देने के लिए सही वाक्य कौन-सा है?","I'm Rahul.","Myself Rahul.","Myself is Rahul.","I am myself Rahul.","Myself Rahul किसी भी अंग्रेज़ी में सही नहीं है: I'm Rahul या My name is Rahul।"],
["mc","\"हम अगले महीने नए घर में शिफ़्ट हो रहे हैं\" — विदेश में?","We're moving next month.","We're shifting next month.","We're shift next month.","We're moving to next month.","घर बदलने के लिए भारत में shifting चलता है; विदेश में moving।"],
["or","क्या मैं एक सवाल पूछ सकता हूँ?","Can I ask a question","doubt the","doubt का मतलब शक है; सवाल के लिए question, और एक सवाल — आर्टिकल a।"],
["or","मैं इस हफ़्ते शहर से बाहर हूँ","I'm out of town this week","station the","out of station भारत में चलता है; विदेश में out of town — town से पहले आर्टिकल नहीं।"],
["or","चलिए, मीटिंग पहले कर लेते हैं","Let's move the meeting up","prepone a","prepone विदेश में कम समझा जाता है: move up। कौन-सी मीटिंग, दोनों जानते हैं — आर्टिकल the।"],
["or","चलिए, प्लान पर बात करते हैं","Let's discuss the plan","about","discuss के साथ about नहीं लगता — discuss का मतलब ही \"के बारे में बात करना\" है।"],
["fi","I'll get __ to you tomorrow.","मैं कल आपको जवाब दूँगा","back","revert|reply|return","भारत में revert चलता है; विदेश में I'll get back to you।"],
["fi","She's my __.","वह मेरी कज़िन (चचेरी बहन) है","cousin","cousin sister|sister cousin|real cousin","भारत में cousin sister चलता है; विदेश में अकेला cousin काफ़ी है।"],
["fi","I moved to Delhi five years __.","मैं पाँच साल पहले दिल्ली आया","ago","back|before|from","years back भारत में चलता है; विदेश में years ago।"],
["ty","मुझे कुछ सलाह चाहिए","I need some advice|I need advice","need · advice — अगणनीय","advices","advice अगणनीय है: advices नहीं होता।"],
["ty","क्या आप मुझे रिपोर्ट भेज सकते हैं?","Could you send me the report|Can you send me the report|Could you please send me the report|Can you please send me the report|Please send me the report","could you · send · report — आर्टिकल the","a","कौन-सी रिपोर्ट, दोनों जानते हैं — आर्टिकल the। Kindly भी चलता है, पर विदेश में please या Could you ज़्यादा आम है।"],
["ty","मैं दिल्ली से हूँ","I'm from Delhi","I'm · from · Delhi","belong","I belong to Delhi भारत में चलता है; विदेश में शहर बताने के लिए I'm from Delhi।"]]},
];
