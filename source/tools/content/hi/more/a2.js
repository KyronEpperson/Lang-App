/* hi-en stage A2: new lessons. English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Past Continuous: \"कर रहा था\" (was / were + -ing)", blurb:"उस वक़्त जो काम चल रहा था। कहानी का माहौल इसी से बनता है।", deck:"भावनाएँ और प्रतिक्रियाएँ", body:`
<p>अतीत में <b>किसी ख़ास पल पर जो काम चल रहा था</b>, उसके लिए Past Continuous है। हिंदी का "रहा था / रही थी" लगभग यही है: "मैं सो रहा था" = I was sleeping। Present Continuous की am / is / are को बस was / were कर दें।</p>
{{ex:I was sleeping.|आइ वज़ ˈस्लीपिङ|मैं सो रहा था}}{{ex:We were watching TV.|वि वर ˈवाचिङ टी व़ी|हम टीवी देख रहे थे}}{{ex:It was raining.|इट वज़ ˈरेनिङ|बारिश हो रही थी}}
<p>I, he, she, it के साथ <b>was</b>; you, we, they के साथ <b>were</b>। "बारिश हो रही थी" में हिंदी को कर्ता नहीं चाहिए, अंग्रेज़ी को चाहिए: <b>it</b>।</p>
<h3>सवाल</h3>
{{ex:What were you doing?|वट वर यु ˈडूइङ|तुम क्या कर रहे थे?}}{{ex:Were you working at nine?|वर यु ˈवर्किङ अट नाइन|क्या आप नौ बजे काम कर रहे थे?}}
<h3>when के साथ: काम चल रहा था, तभी कुछ हुआ</h3>
<p>लंबा चलने वाला काम <b>Past Continuous</b> में, बीच में हुई छोटी घटना <b>Simple Past</b> में।</p>
{{ex:I was cooking when you called.|आइ वज़ ˈकुकिङ वेन यु कॉल्ड|जब तुमने फ़ोन किया, मैं खाना बना रहा था}}{{ex:I was walking home when it started to rain.|आइ वज़ ˈवॉकिङ होम वेन इट ˈस्टार्टिड ट रेन|मैं पैदल घर जा रही थी, तभी बारिश शुरू हो गई}}
<h3>"करता था" Past Continuous नहीं है</h3>
<p>हिंदी का "करता था" आदत बताता है: "मैं रोज़ सुबह चाय पीता था"। अंग्रेज़ी में इसके लिए <b>I used to drink tea every morning.</b> कहें; यहाँ <b>I was drinking tea every morning.</b> अटपटा लगता है। Past Continuous सिर्फ़ उस पल चल रहे काम के लिए है।</p>
<div class="tip">"कर रहा था" को Simple Past में बोलेंगे तो मतलब बदल जाएगा: <b>I cooked when you called.</b> का मतलब है "तुम्हारा फ़ोन आया, उसके बाद मैंने खाना बनाया"। और "था" देखकर was के साथ V2 न लगाएँ: <b>I was worked late.</b> ✗ → <b>I worked late.</b> ✓ / <b>I was working late.</b> ✓</div>`,
check:[["\"आप नौ बजे क्या कर रहे थे?\" अंग्रेज़ी में?",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"you के साथ were, और उसके बाद -ing रूप।"],["I was cooking ___ you called. ख़ाली जगह में क्या आएगा?",["when","so","or","than"],0,"\"जब\" = when।"],["They ___ watching TV. ख़ाली जगह में क्या आएगा?",["was","did","were","are being"],2,"they के साथ were।"]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","I के साथ was।"],
["mc","\"जब तुमने फ़ोन किया, मैं खाना बना रहा था\" अंग्रेज़ी में?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","चल रहा काम Past Continuous में, बीच में आई घटना Simple Past में।"],
["mc","\"तुम क्या कर रहे थे?\" अंग्रेज़ी में?","What were you doing?","What did you doing?","What was you doing?","What were you do?","you के साथ were, फिर -ing रूप।"],
["mc","They ___ playing soccer.","were","was","did","are","they के साथ were।"],
["mc","\"बारिश हो रही थी\" अंग्रेज़ी में?","It was raining.","It were raining.","It was rain.","It rained was.","it के साथ was + -ing। हिंदी में कर्ता नहीं है, अंग्रेज़ी में it चाहिए।"],
["or","मैं एक किताब पढ़ रहा था","I was reading a book","read books","एक किताब — आर्टिकल a और एकवचन book।"],
["or","बच्चे सो रहे थे","The kids were sleeping","kid was","बच्चे कई हैं — बहुवचन kids, और साथ में were।"],
["or","हम टीवी देख रहे थे","We were watching TV","was","we के साथ were।"],
["fi","I was __ dinner.","मैं रात का खाना बना रहा था","cooking|making","cook|cooked|cooks","was के बाद -ing रूप आता है।"],
["fi","What __ you doing?","तुम क्या कर रहे थे?","were","was|did|does","you के साथ were।"],
["fi","I was sleeping __ you called.","जब तुमने फ़ोन किया, मैं सो रही थी","when","so|than|or","\"जब\" = when।"],
["ty","मैं काम कर रहा था","I was working","was · work — -ing रूप","were","I के साथ was + -ing।"],
["ty","मैं एक फ़िल्म देख रही थी","I was watching a movie","was · watching · movie — आर्टिकल a","the","कोई भी एक फ़िल्म — आर्टिकल a।"],
["ty","बच्चे खेल रहे थे","The kids were playing|The children were playing","kids · were · playing — बहुवचन","kid","बच्चे कई हैं — बहुवचन kids, और साथ में were।"]]},
{ id:"will", title:"will: अभी का फ़ैसला, वादा और अंदाज़ा", blurb:"बोलते-बोलते तय किया तो will, पहले से तय है तो going to।", deck:"हल्की-फुल्की बातचीत", body:`
<p><b>will + V1</b>। बोलचाल में लगभग हमेशा छोटा रूप आता है: <b>I'll, you'll, it'll</b>; नकारात्मक है <b>won't</b>। हिंदी का "करूँगा / करेगी" ज़्यादातर will से ठीक बैठता है (किताबों में इसे Future Indefinite भी कहते हैं)।</p>
<h3>उसी पल का फ़ैसला</h3>
{{ex:I'll have the pasta.|आइल हैव़ द़ ˈपास्टा|मैं पास्ता लूँगा}}{{ex:I'll get it.|आइल गेट इट|मैं उठाती हूँ (फ़ोन) / मैं देखती हूँ (दरवाज़ा)}}
<p>ध्यान दें: हिंदी में ऐसी पेशकश अक्सर Simple Present में होती है — "मैं उठाता हूँ", "रुको, मैं देखता हूँ"। अंग्रेज़ी में यहाँ will चाहिए: <b>I'll check.</b> ✓ / <b>I check.</b> ✗</p>
<h3>वादा और पेशकश</h3>
{{ex:I'll help you.|आइल हेल्प यु|मैं तुम्हारी मदद करूँगा}}{{ex:I'll call you later.|आइल कॉल यु ˈलेटर|मैं तुम्हें बाद में फ़ोन करूँगी}}{{ex:I won't be late.|आइ वोन्ट बि लेट|मैं देर नहीं करूँगा}}
<h3>अंदाज़ा</h3>
{{ex:It'll be fine.|इटल बि फ़ाइन|सब ठीक हो जाएगा}}{{ex:I think it will rain.|आइ थ़िंक इट वल रेन|मुझे लगता है बारिश होगी}}
<h3>will और be going to</h3>
<div class="tbl"><table><tr><th></th><th>कब</th><th>उदाहरण</th></tr><tr><td class="k">will</td><td>अभी का फ़ैसला, वादा</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>पहले से बनी योजना</td><td>I'm going to visit Goa next month.</td></tr></table></div>
<p>भारत की कई किताबों में <b>I shall</b> मिलता है। अमेरिकी बोलचाल में यह बहुत कम सुनाई देता है; <b>I'll</b> कहें।</p>
<div class="tip">सबसे आम ग़लती: <b>I will to go.</b>, <b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ will के बाद सिर्फ़ V1 आता है।</div>`,
check:[["फ़ोन बज रहा है। \"मैं उठाता हूँ\" अंग्रेज़ी में?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"उसी पल लिया गया फ़ैसला: will। हिंदी के \"उठाता हूँ\" से Simple Present न बनाएँ।"],["I ___ be late. (मैं देर नहीं करूँगा)",["won't","willn't","don't will","not will"],0,"will not का छोटा रूप won't है।"],["पहले से तय योजना बताने वाला वाक्य कौन-सा है?",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"पहले से बनी योजना के लिए be going to।"]],
practice:[
["mc","\"मैं तुम्हारी मदद करूँगा\" अंग्रेज़ी में?","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","will के बाद V1 आता है।"],
["mc","रेस्टोरेंट में अभी तय करते हुए: \"मैं पास्ता लूँगी\" अंग्रेज़ी में?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","उसी पल का फ़ैसला: will + V1।"],
["mc","\"मैं देर नहीं करूँगा\" अंग्रेज़ी में?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not → won't। late विशेषण है, इसलिए be भी चाहिए।"],
["mc","\"क्या तुम आओगे?\" अंग्रेज़ी में?","Will you come?","Do you will come?","Will you coming?","Will come you?","सवाल में Will + कर्ता + V1।"],
["mc","पहले से तय योजना बताने वाला वाक्य कौन-सा है?","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","पहले से बनी योजना के लिए be going to।"],
["or","मैं तुम्हें बाद में फ़ोन करूँगा","I'll call you later","calling","will के बाद V1, -ing रूप नहीं।"],
["or","मैं एक कॉफ़ी लूँगी","I'll have a coffee","the coffees","ऑर्डर में एक कप — आर्टिकल a, बहुवचन नहीं।"],
["or","मैं दरवाज़ा खोल देता हूँ","I'll open the door","a doors","यही दरवाज़ा, दोनों जानते हैं — आर्टिकल the। हिंदी में \"खोल देता हूँ\", अंग्रेज़ी में will।"],
["fi","I __ call you tomorrow.","मैं कल तुम्हें फ़ोन करूँगा","will","am|going|do","वादे के लिए will।"],
["fi","I __ forget.","मैं नहीं भूलूँगी","won't|will not","don't|not|willn't","will का नकारात्मक won't है।"],
["fi","__ you help me?","क्या आप मेरी मदद करेंगे?","Will|Can|Could|Would","Do|Are|Is","मदद माँगने के लिए Will you…? (या Can / Could you…?)।"],
["ty","मैं तुम्हारी मदद करूँगा","I'll help you|I'll help","I'll · help · you","helping","will के बाद V1 आता है।"],
["ty","मैं एक सलाद लूँगी (have से)","I'll have a salad|I'll have the salad","I'll have · salad — आर्टिकल पर ध्यान दें","salads","एक सलाद ऑर्डर कर रहे हैं — आर्टिकल a (मेन्यू वाला वही सलाद हो तो the), बहुवचन नहीं।"],
["ty","मैं दरवाज़ा बंद कर देता हूँ","I'll close the door|I'll shut the door","I'll · close · door — आर्टिकल the","a","यही दरवाज़ा — आर्टिकल the। \"कर देता हूँ\" वाली पेशकश अंग्रेज़ी में will से।"]]},
{ id:"perfect", title:"Present Perfect: \"कभी किया है?\" (have + V3)", blurb:"have + V3 से अनुभव बताएँ। कब हुआ, यह बताया तो Simple Past।", deck:"यात्रा (एयरपोर्ट और होटल)", body:`
<p><b>have / has + V3</b> बताता है कि <b>अब तक की ज़िंदगी में</b> कोई काम कभी हुआ है या नहीं। <b>कब</b> हुआ, यह नहीं बताया जाता।</p>
{{ex:I've been to Mumbai.|आइव़ बिन ट मुम्ˈबाइ|मैं मुंबई जा चुका हूँ}}{{ex:She has visited India twice.|शि हज़ ˈव़िज़िटिड ˈइन्डिआ ट्वाइस|वह दो बार भारत आ चुकी है}}
<h3>ever और never</h3>
{{ex:Have you ever eaten sushi?|हव़ यु ˈएव़र ˈईटन ˈसूशि|क्या आपने कभी सुशी खाई है?}}{{ex:I've never seen it.|आइव़ ˈनेव़र सीन इट|मैंने वह कभी नहीं देखा}}
<p>जवाब: <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>"किया है" का जाल: समय बताया तो Simple Past</h3>
<p>हिंदी बोलचाल में "मैंने कल ही रिपोर्ट भेज दी है" जैसा वाक्य आम है, इसलिए अंग्रेज़ी में भी <b>I have sent the report yesterday.</b> निकल आता है। अंग्रेज़ी का नियम सख़्त है: yesterday, last year, in 2020 जैसा ख़त्म हो चुका समय हो तो Present Perfect नहीं, <b>Simple Past</b>।</p>
{{ex:I went to Japan last year.|आइ वेन्ट ट जˈपैन लैस्ट यिर|मैं पिछले साल जापान गया था}}{{ex:I visited Bangalore yesterday.|आइ ˈव़िज़िटिड ˈबैंगलॉर ˈयेस्टर्डे|मैं कल बैंगलोर गई थी}}
<h3>been to या gone to?</h3>
<p>"वह जयपुर गई है" के दो मतलब हो सकते हैं। घूमकर लौट आई: <b>has been to</b>। अभी वहीं है, यहाँ नहीं: <b>has gone to</b>।</p>
{{ex:She's been to Jaipur.|शिज़ बिन ट ˈजाइपुर|वह जयपुर जा चुकी है (लौट आई)}}{{ex:She's gone to Jaipur.|शिज़ गॉन ट ˈजाइपुर|वह जयपुर गई है (अभी वहीं है)}}
<h3>आम V3</h3>
<div class="tbl"><table><tr><th>V1</th><th>V2</th><th>V3</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<div class="tip">सबसे आम ग़लती: <b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓ और have के बाद V2 नहीं: <b>I've went</b> ✗ → <b>I've gone / I've been</b> ✓</div>`,
check:[["\"क्या आप कभी जापान गए हैं?\" अंग्रेज़ी में?",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"अनुभव पूछना हो तो Have you ever + V3।"],["I ___ never seen that movie. ख़ाली जगह में क्या आएगा?",["am","did","have","was"],2,"\"कभी नहीं\" = have + never + V3।"],["सही वाक्य कौन-सा है?",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"last year जैसा ख़त्म हो चुका समय हो तो Simple Past।"]],
practice:[
["mc","\"मैं जापान जा चुका हूँ\" अंग्रेज़ी में?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have के बाद V3 been आता है।"],
["mc","see का V3 क्या है?","seen","saw","seed","seeing","see के तीन रूप: see – saw – seen।"],
["mc","\"क्या आपने कभी किमची खाई है?\" अंग्रेज़ी में?","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","अनुभव के सवाल में Have you ever + V3 (eaten)।"],
["mc","\"मैंने वह कभी नहीं देखा\" अंग्रेज़ी में?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","\"कभी नहीं\" = have + never + V3।"],
["mc","वाक्य में \"पिछले साल\" हो तो सही वाक्य कौन-सा है?","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","ख़त्म हो चुका समय बताया हो तो Simple Past।"],
["or","मैंने वह फ़िल्म देखी है","I've seen the movie","a saw","वही फ़िल्म जिसे दोनों जानते हैं — आर्टिकल the।"],
["or","मैं दो बार कोरिया जा चुकी हूँ","I've been to Korea twice","went","have के बाद V3 been, V2 went नहीं।"],
["or","मैंने कभी साँप नहीं देखा","I've never seen a snake","the snakes","कोई भी एक साँप — आर्टिकल a।"],
["fi","Have you ever __ to Busan?","क्या आप कभी बुसान गए हैं?","been","be|went|go","have के बाद V3 been।"],
["fi","I've __ eaten that.","मैंने वह कभी नहीं खाया","never","ever|no|not never","\"कभी नहीं\" = never।"],
["fi","She __ visited Korea twice.","वह दो बार कोरिया आ चुकी है","has","have|is|did","she के साथ has।"],
["ty","क्या आप कभी जापान गए हैं?","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","अनुभव पूछने के लिए Have you ever been to…?"],
["ty","मैंने वह किताब पढ़ी है","I've read the book|I've read that book","I've · read · book — आर्टिकल the","a","वही किताब जिसे दोनों जानते हैं — आर्टिकल the।"],
["ty","मैंने कभी बिल्ली नहीं पाली (have से)","I've never had a cat","never · had · cat — आर्टिकल a","the","कोई भी एक बिल्ली — आर्टिकल a।"]]},
{ id:"modals", title:"have to, must, should, might: ज़िम्मेदारी, सलाह, संभावना", blurb:"करना पड़ेगा, करना चाहिए, शायद हो जाए — हिंदी के \"चाहिए\" और \"सकता है\" को अलग-अलग करें।", deck:"डॉक्टर और इमरजेंसी", body:`
<p>ज़िम्मेदारी, सलाह और संभावना के लिए चार रूप हैं। सबके बाद <b>V1</b> आता है। should, must, might के बाद to नहीं लगता; have to में to उसी का हिस्सा है।</p>
<h3>हिंदी का "चाहिए" अंग्रेज़ी में तीन तरह से</h3>
<div class="tbl"><table><tr><th>हिंदी</th><th>अंग्रेज़ी</th></tr><tr><td>"मुझे जाना है / जाना पड़ेगा"</td><td class="k">I have to go.</td></tr><tr><td>"आपको डॉक्टर को दिखाना चाहिए"</td><td class="k">You should see a doctor.</td></tr><tr><td>"मुझे पानी चाहिए"</td><td class="k">I need water.</td></tr></table></div>
<h3>have to: करना है, करना पड़ेगा</h3>
<p>रोज़ की बोलचाल में सबसे आम। he, she के साथ <b>has to</b>।</p>
{{ex:I have to work tomorrow.|आइ हैफ़ ट वर्क टˈमारो|मुझे कल काम करना है}}{{ex:She has to go now.|शि हैस ट गो नाउ|उसे अब जाना है}}
<h3>don't have to और must not एक नहीं हैं</h3>
<div class="tbl"><table><tr><th>वाक्य</th><th>मतलब</th></tr><tr><td class="k">You don't have to come.</td><td>आने की ज़रूरत नहीं (चाहें तो आ सकते हैं)</td></tr><tr><td class="k">You must not smoke here.</td><td>यहाँ सिगरेट पीना मना है</td></tr></table></div>
<p>"ज़रूरत नहीं" = don't have to; "मना है" = must not। हिंदी का "नहीं चाहिए" सलाह हो तो shouldn't है।</p>
<h3>should: करना चाहिए</h3>
{{ex:You should see a doctor.|यु शड सी अ ˈडाक्टर|आपको डॉक्टर को दिखाना चाहिए}}{{ex:You shouldn't worry.|यु ˈशुडन्ट ˈवरि|आपको चिंता नहीं करनी चाहिए}}
<h3>might: शायद, हो सकता है</h3>
<p>हिंदी का "सकता है" दो काम करता है: क्षमता ("मैं तैर सकता हूँ" = I can swim) और संभावना ("बारिश हो सकती है")। संभावना के लिए <b>might</b>।</p>
{{ex:It might rain.|इट माइट रेन|शायद बारिश हो}}{{ex:I might be late.|आइ माइट बि लेट|हो सकता है मुझे देर हो जाए}}
<div class="tip">सबसे आम ग़लती: <b>You should to go.</b>, <b>It might rains.</b> ✗ → <b>You should go.</b>, <b>It might rain.</b> ✓</div>`,
check:[["\"आपको आने की ज़रूरत नहीं\" अंग्रेज़ी में?",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"\"ज़रूरत नहीं\" = don't have to। must not का मतलब \"मना है\"।"],["सलाह दे रहे हैं: You ___ see a doctor.",["might","have","should","must to"],2,"सलाह के लिए should + V1।"],["She ___ to work today. ख़ाली जगह में क्या आएगा?",["have","must","should","has"],3,"she के साथ has to।"]],
practice:[
["mc","\"मुझे कल काम करना है\" अंग्रेज़ी में?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to के बाद V1।"],
["mc","\"आपको आने की ज़रूरत नहीं\" अंग्रेज़ी में?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","\"ज़रूरत नहीं\" = don't have to।"],
["mc","\"आपको डॉक्टर को दिखाना चाहिए\" अंग्रेज़ी में?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + V1; कोई भी एक डॉक्टर, इसलिए आर्टिकल a।"],
["mc","\"शायद बारिश हो\" अंग्रेज़ी में?","It might rain.","It might rains.","It might to rain.","It mights rain.","might + V1, उसमें -s नहीं लगता।"],
["mc","\"यहाँ सिगरेट पीना मना है\" अंग्रेज़ी में?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","मनाही के लिए must not।"],
["or","आपको डॉक्टर को दिखाना चाहिए","You should see a doctor","the doctors","कोई भी एक डॉक्टर — आर्टिकल a, बहुवचन नहीं।"],
["or","मुझे अभी जाना है","I have to go now","going","have to के बाद V1।"],
["or","आपको टिकट ख़रीदना है","You have to buy a ticket","the tickets","एक टिकट — आर्टिकल a और एकवचन ticket।"],
["fi","She __ to study tonight.","उसे आज रात पढ़ाई करनी है","has","have|must|should","she के साथ has to।"],
["fi","You __ have to pay.","आपको पैसे देने की ज़रूरत नहीं","don't|do not","must not|not|aren't","\"ज़रूरत नहीं\" = don't have to।"],
["fi","It __ rain tomorrow.","कल शायद बारिश हो","might|may|could","must to|has to|should to","संभावना के लिए might।"],
["ty","मुझे काम करना है","I have to work|I must work|I need to work","have to · work","should","ज़िम्मेदारी के लिए have to।"],
["ty","आपको डॉक्टर को दिखाना चाहिए (see से)","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — आर्टिकल a","the","कोई भी एक डॉक्टर — आर्टिकल a।"],
["ty","आपको टिकट ख़रीदना है (have to से)","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — आर्टिकल a","the","एक टिकट — आर्टिकल a।"]]},
{ id:"to-ing", title:"क्रिया के बाद to या -ing: want to, enjoy -ing", blurb:"want के बाद to, enjoy के बाद -ing। हर क्रिया की अपनी जोड़ी है।", deck:"हल्की-फुल्की बातचीत", body:`
<p>दो क्रियाएँ साथ आएँ तो पहली क्रिया तय करती है कि दूसरी <b>to + V1</b> होगी या <b>-ing</b>। हिंदी में दोनों जगह एक ही रूप चलता है — "घर जाना चाहता हूँ", "खाना बनाने में मज़ा आता है" — इसलिए अंग्रेज़ी में ये जोड़ियाँ याद करनी पड़ती हैं। आम क्रियाओं से शुरू करें।</p>
<div class="tbl"><table><tr><th>बाद में to</th><th>बाद में -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop, avoid</td></tr></table></div>
<h3>to + V1: आगे होने वाला काम</h3>
{{ex:I want to go home.|आइ वान्ट ट गो होम|मैं घर जाना चाहता हूँ}}{{ex:I need to study.|आइ नीड ट ˈस्टडि|मुझे पढ़ाई करनी है}}{{ex:I'd like to order.|आइड लाइक टु ˈऑर्डर|मैं ऑर्डर करना चाहूँगी}}{{ex:I decided to learn English.|आइ डिˈसाइडिड ट लर्न ˈइंग्लिश|मैंने अंग्रेज़ी सीखने का फ़ैसला किया}}
<h3>enjoy, finish, mind के बाद -ing</h3>
<p>इनका कोई आसान नियम नहीं है; इन्हें जोड़ी की तरह याद करें: enjoy cooking, finish working, don't mind waiting।</p>
{{ex:I enjoy cooking.|आइ इन्ˈजॉइ ˈकुकिङ|मुझे खाना बनाने में मज़ा आता है}}{{ex:I finished working.|आइ ˈफ़िनिश्ट ˈवर्किङ|मैंने काम ख़त्म कर लिया}}{{ex:I don't mind waiting.|आइ डोन्ट माइन्ड ˈवेटिङ|मुझे इंतज़ार करने में कोई दिक़्क़त नहीं}}
<h3>दोनों चलते हैं</h3>
<p>like, love, start के बाद to और -ing दोनों ठीक हैं: <b>I like to cook.</b> / <b>I like cooking.</b></p>
<h3>ऑफ़िस ईमेल की तीन आम ग़लतियाँ</h3>
<p><b>I am looking forward to meet you.</b> ✗ — यहाँ to प्रीपोज़िशन है, इसलिए उसके बाद -ing आता है:</p>
{{ex:I'm looking forward to meeting you.|आइम ˈलुकिङ ˈफ़ॉर्वर्ड ट ˈमीटिङ यु|आपसे मिलने का इंतज़ार रहेगा}}
<p><b>avoid to go</b> ✗ → <b>avoid going</b> ✓ / <b>prevented me to enter</b> ✗ → <b>prevented me from entering</b> ✓</p>
<div class="tip">सबसे आम ग़लती: <b>I want go.</b>, <b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>, <b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. ख़ाली जगह में क्या आएगा?",["go","going","to go","to going"],2,"want के बाद to + V1।"],["I enjoy ___ movies. ख़ाली जगह में क्या आएगा?",["watching","to watch","watch","to watching"],0,"enjoy के बाद -ing।"],["\"मैं ऑर्डर करना चाहूँगा\" अंग्रेज़ी में?",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"would like के बाद to + V1।"]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","need के बाद to + V1।"],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","enjoy के बाद -ing।"],
["mc","\"मैं ऑर्डर करना चाहूँगी\" अंग्रेज़ी में?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","would like के बाद to + V1।"],
["mc","\"मैंने काम ख़त्म कर लिया\" अंग्रेज़ी में?","I finished working.","I finished to work.","I finished work to.","I finish worked.","finish के बाद -ing।"],
["mc","\"मुझे इंतज़ार करने में कोई दिक़्क़त नहीं\" अंग्रेज़ी में?","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","mind के बाद -ing।"],
["or","मैं एक कार ख़रीदना चाहता हूँ","I want to buy a car","the buying","want के बाद to; एक कार — आर्टिकल a।"],
["or","मुझे फ़िल्में देखने में मज़ा आता है","I enjoy watching movies","movie watch","enjoy के बाद -ing; फ़िल्में आम तौर पर — बहुवचन movies।"],
["or","मुझे आराम करना है","I need to rest","resting","need के बाद to + V1।"],
["fi","I want __ a coffee.","मैं एक कॉफ़ी पीना चाहता हूँ","to have|to drink|to get","have|having|drinking","want के बाद to + V1।"],
["fi","She enjoys __.","उसे तैरने में मज़ा आता है","swimming","to swim|swim|swims","enjoy के बाद -ing।"],
["fi","I decided __ English.","मैंने अंग्रेज़ी पढ़ने का फ़ैसला किया","to study|to learn","study|studying|studied","decide के बाद to + V1।"],
["ty","मैं घर जाना चाहता हूँ","I want to go home","want to · go · home — आर्टिकल नहीं","the","want के बाद to; home से पहले कोई आर्टिकल नहीं लगता।"],
["ty","मुझे किताबें पढ़ने में मज़ा आता है (enjoy से)","I enjoy reading books|I enjoy reading","enjoy · read · book — बहुवचन","book","enjoy के बाद -ing; किताबें आम तौर पर — बहुवचन books।"],
["ty","मैं ऑर्डर करना चाहूँगी","I'd like to order|I want to order","I'd like · to · order","ordering","would like के बाद to + V1।"]]},
{ id:"articles-2", title:"the कहाँ लगे, कहाँ नहीं: अकेली चीज़ें और आम बातें", blurb:"piano के साथ the, cricket के साथ कुछ नहीं। देशों के नाम और \"सभी\" वाली आम बात भी।", deck:"यात्रा (एयरपोर्ट और होटल)", body:`
<p>आर्टिकल का तीसरा पाठ। यहाँ वे जगहें हैं जहाँ नियम तय है: कहीं the लगता ही है, कहीं कभी नहीं। हिंदी में आर्टिकल नहीं होते, इसलिए ग़लती दोनों तरफ़ होती है — ज़रूरी the छूट जाता है और फ़ालतू the लग जाता है (<b>The life is hard.</b> ✗)।</p>
<h3>the कहाँ लगता है</h3>
<div class="tbl"><table><tr><th>कब</th><th>उदाहरण</th></tr><tr><td>दुनिया में एक ही</td><td class="k">the sun, the internet</td></tr><tr><td>वाद्य (बजाने वाले)</td><td class="k">play the piano</td></tr><tr><td>नदी, समुद्र</td><td class="k">the Ganges, the Pacific</td></tr><tr><td>बहुवचन या संघ वाले देश</td><td class="k">the United States, the Netherlands</td></tr></table></div>
{{ex:I play the piano.|आइ प्ले द़ पिˈऐनो|मैं पियानो बजाता हूँ}}{{ex:She's from the United States.|शिज़ फ़्रम द़ युˈनाइटिड स्टेट्स|वह अमेरिका से है}}{{ex:I found it on the internet.|आइ फ़ाउन्ड इट आन द़ि ˈइन्टर्नेट|मुझे यह इंटरनेट पर मिला}}
<h3>आर्टिकल कहाँ नहीं लगता</h3>
<div class="tbl"><table><tr><th>कब</th><th>उदाहरण</th></tr><tr><td>ज़्यादातर देश और शहर</td><td class="k">India, Delhi</td></tr><tr><td>खेल, भाषा, खाने का वक़्त</td><td class="k">play cricket, speak Hindi, have lunch</td></tr><tr><td>"सभी" वाली आम बात</td><td class="k">Dogs are cute. I love music. Life is short.</td></tr></table></div>
{{ex:I live in India.|आइ लिव़ इन ˈइन्डिआ|मैं भारत में रहती हूँ}}{{ex:I play cricket.|आइ प्ले ˈक्रिकिट|मैं क्रिकेट खेलता हूँ}}{{ex:Dogs are cute.|डॉग्ज़ अर क्यूट|कुत्ते प्यारे होते हैं}}{{ex:Life is short.|लाइफ़ इज़ शॉर्ट|ज़िंदगी छोटी है}}
<p>"ज़िंदगी", "संगीत", "क्रिकेट" की आम बात करते समय हिंदी में "यह / वह" नहीं लगाते; अंग्रेज़ी में भी the नहीं: <b>The cricket is popular in India.</b> ✗ → <b>Cricket is popular in India.</b> ✓</p>
<h3>सभी, या कुछ ख़ास?</h3>
{{ex:I like dogs.|आइ लाइक डॉग्ज़|मुझे कुत्ते पसंद हैं (सभी कुत्ते)}}{{ex:The dogs in this park are cute.|द़ डॉग्ज़ इन द़िस पार्क अर क्यूट|इस पार्क के कुत्ते प्यारे हैं (यही कुत्ते)}}
<div class="tip">सबकी बात करनी हो तो the के बिना बहुवचन लें। <b>I like the dogs.</b> का मतलब होगा "मुझे वे (ख़ास) कुत्ते पसंद हैं"।</div>`,
check:[["I play ___ soccer. ख़ाली जगह में क्या आएगा?",["a","the","an","(कोई आर्टिकल नहीं)"],3,"खेलों के नाम से पहले आर्टिकल नहीं लगता।"],["She's from ___ United States. ख़ाली जगह में क्या आएगा?",["the","a","an","(कोई आर्टिकल नहीं)"],0,"United States से पहले the लगता है।"],["\"कुत्ते प्यारे होते हैं\" (सभी कुत्ते) अंग्रेज़ी में?",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"सबकी बात हो तो आर्टिकल के बिना बहुवचन।"]],
practice:[
["mc","I play ___ piano.","the","a","an","some","वाद्य से पहले the लगता है।"],
["mc","\"मैं कोरिया में रहता हूँ\" अंग्रेज़ी में?","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","ज़्यादातर देशों के नाम से पहले आर्टिकल नहीं लगता।"],
["mc","\"मैं फ़ुटबॉल खेलता हूँ\" अंग्रेज़ी में?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","खेलों के नाम से पहले आर्टिकल नहीं। अमेरिका में फ़ुटबॉल को soccer कहते हैं।"],
["mc","\"बिल्लियाँ प्यारी होती हैं\" (सभी बिल्लियाँ) अंग्रेज़ी में?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","सबकी बात हो तो आर्टिकल के बिना बहुवचन।"],
["mc","She's from ___ United States.","the","a","an","some","United States से पहले the लगता है।"],
["or","मैं पियानो बजाती हूँ","I play the piano","a pianos","वाद्य से पहले आर्टिकल the।"],
["or","कुत्ते प्यारे होते हैं","Dogs are cute","The dog","सभी कुत्तों की बात — आर्टिकल नहीं, बहुवचन dogs।"],
["or","मुझे यह इंटरनेट पर मिला","I found it on the internet","a","internet एक ही है — आर्टिकल the।"],
["fi","I speak __.","मैं अंग्रेज़ी बोलता हूँ","English","the English|an English|a English","भाषा के नाम से पहले आर्टिकल नहीं लगता।"],
["fi","The sun rises in __ east.","सूरज पूरब में उगता है","the","a|an|some","दिशा (east, west) से पहले the लगता है।"],
["fi","I love __.","मुझे संगीत बहुत पसंद है","music","the musics|a music|musics","music अगणनीय है: पूरे संगीत की बात में न the, न -s।"],
["ty","मैं अमेरिका से हूँ","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — आर्टिकल the","a","United States से पहले आर्टिकल the।"],
["ty","मैं गिटार बजाता हूँ","I play the guitar|I play guitar","play · guitar — आर्टिकल the","a","वाद्य से पहले आर्टिकल the।"],
["ty","बिल्लियाँ प्यारी होती हैं","Cats are cute","cat — आर्टिकल नहीं, बहुवचन","The cat","सभी बिल्लियों की बात — आर्टिकल नहीं, बहुवचन cats।"]]},
{ id:"first-conditional", title:"If वाले वाक्य 1: If + Simple Present, will", blurb:"\"अगर ऐसा हुआ तो…\" — if वाले हिस्से में will नहीं लगता, चाहे हिंदी में \"होगी\" हो।", deck:"ऑफ़िस और ईमेल", body:`
<p>जो सच में हो सकता है, उसके लिए: <b>If + Simple Present, will + V1</b>। हिंदी में अक्सर दोनों हिस्सों में भविष्य आता है — "अगर कल बारिश <b>होगी</b> तो मैं घर पर <b>रहूँगा</b>" — पर अंग्रेज़ी में if वाला हिस्सा <b>Simple Present</b> में रहता है, भले ही बात कल की हो।</p>
{{ex:If it rains, I'll stay home.|इफ़ इट रेन्ज़ आइल स्टे होम|अगर बारिश हुई तो मैं घर पर रहूँगा}}{{ex:If you don't hurry, you'll miss the bus.|इफ़ यु डोन्ट ˈहरि युल मिस द़ बस|जल्दी नहीं करोगे तो बस छूट जाएगी}}
<h3>क्रम बदल सकते हैं</h3>
<p>if वाला हिस्सा बाद में आए तो बीच में कॉमा नहीं लगता।</p>
{{ex:I'll help you if I have time.|आइल हेल्प यु इफ़ आइ हैव़ टाइम|समय हुआ तो मैं तुम्हारी मदद कर दूँगी}}
<h3>आदेश या अनुरोध के साथ</h3>
{{ex:If you're late, call me.|इफ़ युर लेट कॉल मि|देर हो जाए तो मुझे फ़ोन कर देना}}{{ex:If you need help, let me know.|इफ़ यु नीड हेल्प लेट मि नो|मदद चाहिए तो बता दीजिए}}
<h3>when: जो होना पक्का है</h3>
<p>जो बात होनी तय है, उसके लिए if की जगह when। हिंदी "जब मैं घर पहुँचूँगा" में भविष्य है, फिर भी अंग्रेज़ी में यहाँ will नहीं लगता।</p>
{{ex:When I get home, I'll call you.|वेन आइ गेट होम आइल कॉल यु|जब मैं घर पहुँचूँगा, तुम्हें फ़ोन करूँगा}}
<div class="tip">सबसे आम ग़लती: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓ / <b>When I will reach home, …</b> ✗ → <b>When I get home, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. ख़ाली जगह में क्या आएगा?",["will rain","rains","rained","raining"],1,"if वाले हिस्से में Simple Present आता है।"],["If you study, you ___ pass. ख़ाली जगह में क्या आएगा?",["pass will","passing","will pass","passed"],2,"नतीजे वाले हिस्से में will + V1।"],["सही वाक्य कौन-सा है?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"if वाला हिस्सा Simple Present में, नतीजा will से।"]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","if के बाद Simple Present, हिंदी के \"होगी\" के बावजूद।"],
["mc","If you're late, ___ me.","call","will calling","calls","to call","आदेश वाला वाक्य V1 से शुरू होता है।"],
["mc","\"समय हुआ तो मैं तुम्हारी मदद कर दूँगा\" अंग्रेज़ी में?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","if के बाद will नहीं लगता।"],
["mc","\"जल्दी नहीं करोगे तो बस छूट जाएगी\" अंग्रेज़ी में?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","if वाले हिस्से में Simple Present का नकारात्मक: don't।"],
["mc","\"जब मैं घर पहुँचूँगी, तुम्हें फ़ोन करूँगी\" अंग्रेज़ी में?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","when के बाद भी Simple Present।"],
["or","बारिश हुई तो मैं घर पर रहूँगा","If it rains I'll stay home","will the","if के बाद Simple Present; home से पहले कोई आर्टिकल नहीं।"],
["or","समय हो तो मुझे फ़ोन कर देना","If you have time call me","will","if के बाद will नहीं लगता।"],
["or","तुम्हारी बस छूट जाएगी","You'll miss the bus","a buses","वही बस जो पकड़नी है — आर्टिकल the।"],
["fi","If it __ tomorrow, we'll cancel.","अगर कल बारिश हुई तो हम कैंसल कर देंगे","rains","will rain|rained|raining","if के बाद Simple Present।"],
["fi","If you study, you __ pass.","पढ़ाई करोगे तो पास हो जाओगे","will|can|might","are|did|passing","नतीजे वाले हिस्से में will + V1।"],
["fi","__ you need help, call me.","मदद चाहिए तो मुझे फ़ोन कर देना","If|When","So|But|Because","\"अगर\" = if।"],
["ty","समय हुआ तो मैं मदद कर दूँगा","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","if के बाद will नहीं लगता।"],
["ty","बारिश हुई तो मैं टैक्सी ले लूँगी","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — आर्टिकल a","the","कोई भी एक टैक्सी — आर्टिकल a।"],
["ty","बस छूट जाएगी (miss से)","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — आर्टिकल the","a","वही बस जो पकड़नी है — आर्टिकल the।"]]},
{ id:"relative", title:"who / that: संज्ञा के बाद उसकी जानकारी", blurb:"हिंदी \"जो… वह…\" से बात दो बार कहती है, अंग्रेज़ी एक बार: the man who came is…", deck:"ख़रीदारी और भुगतान", body:`
<p>हिंदी में किसी संज्ञा के बारे में बताने के दो तरीक़े हैं: पहले से ("मेरी ख़रीदी हुई किताब") या जो… वह… से ("जो किताब मैंने ख़रीदी, वह…")। अंग्रेज़ी में संज्ञा पहले आती है और उसकी जानकारी <b>बाद में</b>, who / that से: the book <b>that I bought</b>।</p>
<h3>इंसान के लिए who</h3>
{{ex:I have a friend who lives in Mumbai.|आइ हैव़ अ फ़्रेन्ड हु लिव़्ज़ इन मुम्ˈबाइ|मेरा एक दोस्त है जो मुंबई में रहता है}}{{ex:the man who lives next door|द़ मैन हु लिव़्ज़ नेक्स्ट डॉर|बगल वाले घर में रहने वाला आदमी}}
<h3>चीज़ों के लिए that</h3>
{{ex:the book that I bought|द़ बुक द़ट आइ बॉट|मेरी ख़रीदी हुई किताब}}{{ex:This is the phone that I want.|द़िस इज़ द़ फ़ोन द़ट आइ वान्ट|यही वह फ़ोन है जो मुझे चाहिए}}
<h3>"जो… वह…" का जाल: कर्ता दोबारा नहीं</h3>
<p>"जो आदमी कल आया था, <b>वह</b> मेरे चाचा हैं" में "वह" कर्ता को दोहराता है। अंग्रेज़ी में यह दोहराव नहीं होता: <b>The man who came yesterday, he is my uncle.</b> ✗</p>
{{ex:The man who came yesterday is my uncle.|द़ मैन हु केम ˈयेस्टर्डे इज़ माइ ˈअंकल|जो आदमी कल आया था, वह मेरे चाचा हैं}}
<p>कर्म भी दोबारा नहीं आता: <b>the book which I read it</b> ✗ → <b>the book which I read</b> ✓</p>
<h3>that अक्सर छूट जाता है</h3>
<p>that के ठीक बाद "कर्ता + क्रिया" आए तो that हटा सकते हैं। बोलचाल में ज़्यादातर हटा ही देते हैं।</p>
{{ex:The movie we saw was great.|द़ ˈमूव़ि वि सॉ वज़ ग्रेट|हमने जो फ़िल्म देखी, वह बहुत अच्छी थी}}
<h3>जगह के लिए where</h3>
{{ex:the cafe where we met|द़ कैˈफ़े वेर वि मेट|वह कैफ़े जहाँ हम मिले थे}}
<div class="tip">क्रम याद रखें: <b>पहले संज्ञा, फिर जानकारी।</b> "मेरी ख़रीदी हुई किताब" → the book (that) I bought। "जो" के लिए what नहीं: <b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Busan. ख़ाली जगह में क्या आएगा?",["which","who","what","he"],1,"इंसान के बारे में बताना हो तो who।"],["\"मेरी ख़रीदी हुई किताब\" अंग्रेज़ी में?",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"पहले संज्ञा, फिर that से जानकारी।"],["सही वाक्य कौन-सा है?",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"जानकारी संज्ञा के बाद आती है।"]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","इंसान के लिए who; she लगाने से कर्ता दोहरा जाएगा।"],
["mc","\"मेरी ख़रीदी हुई किताब\" अंग्रेज़ी में?","the book that I bought","the I bought book","the book what I bought","the bought I book","पहले संज्ञा, फिर जानकारी।"],
["mc","\"बगल वाले घर में रहने वाला आदमी\" अंग्रेज़ी में?","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","इंसान के लिए who।"],
["mc","This is the phone ___ I want.","that","who","what","it","चीज़ के लिए that।"],
["mc","\"वह फ़िल्म जो हमने देखी\" अंग्रेज़ी में?","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","कर्ता + क्रिया से पहले that छोड़ सकते हैं।"],
["or","यह वह किताब है जो मैंने ख़रीदी","This is the book I bought","a what","मेरी ख़रीदी हुई वही किताब — आर्टिकल the।"],
["or","मेरा एक दोस्त है जो खाना बनाता है","I have a friend who cooks","the which","पहली बार ज़िक्र, एक दोस्त — आर्टिकल a।"],
["or","हमने जो फ़िल्म देखी, वह शानदार थी","The movie we saw was great","A movies","हमारी देखी हुई वही फ़िल्म — आर्टिकल the; \"वह\" दोबारा नहीं आता।"],
["fi","the man __ lives here","यहाँ रहने वाला आदमी","who|that","what|he|which","इंसान के लिए who।"],
["fi","the book __ I read","मेरी पढ़ी हुई किताब","that|which","who|what|it","चीज़ के लिए that।"],
["fi","the cafe __ we met","वह कैफ़े जहाँ हम मिले थे","where","who|what|it","जगह के लिए where।"],
["ty","यह वह किताब है जो मैंने ख़रीदी","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — आर्टिकल the","a","मेरी ख़रीदी हुई वही किताब — आर्टिकल the।"],
["ty","मेरा एक दोस्त है जो कोरियन बोलता है","I have a friend who speaks Korean|I have a friend that speaks Korean","a friend · who · speaks Korean — आर्टिकल a","the","पहली बार ज़िक्र, एक दोस्त — आर्टिकल a।"],
["ty","हमने जो फ़िल्म देखी, वह शानदार थी","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great","what","पहले संज्ञा, फिर जानकारी; \"वह\" दोबारा नहीं आता।"]]},
];
