/* hi-en stage B1: new lessons. English side shared with ko-en (parity.js), plus the hi-only lesson stative-since; shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present Perfect 2: for और since — \"कब से\"", blurb:"अतीत में शुरू, अब तक जारी। \"से\" के लिए for + समय की लंबाई, since + शुरुआत का पल।", deck:"अपना परिचय", body:`
<p>Present Perfect का दूसरा काम: <b>जो बात अतीत में शुरू हुई और अब तक चल रही है</b>। हिंदी में इसके लिए "से" और अक्सर "रहा हूँ" आता है — "मैं पाँच साल से दिल्ली में रह रहा हूँ" — पर अंग्रेज़ी में यहाँ Present Continuous नहीं, Present Perfect है।</p>
{{ex:I've lived in Delhi for five years.|आइव़ लिव़्ड इन ˈडेलि फ़र फ़ाइव़ यिर्ज़|मैं पाँच साल से दिल्ली में रह रहा हूँ}}{{ex:I've worked here since 2020.|आइव़ वर्क्ट हिर सिन्स ˈट्वेन्टि ˈट्वेन्टि|मैं 2020 से यहाँ काम कर रही हूँ}}{{ex:I've known her for a long time.|आइव़ नोन हर फ़र अ लॉङ टाइम|मैं उसे बहुत समय से जानता हूँ}}
<h3>एक "से", दो शब्द: for और since</h3>
<p>हिंदी का "से" दोनों जगह चलता है। अंग्रेज़ी में देखें कि "से" से पहले क्या है: समय की लंबाई या शुरुआत का पल।</p>
<div class="tbl"><table><tr><th>for + समय की लंबाई</th><th>since + शुरुआत का पल</th></tr><tr><td class="k">for three years ("तीन साल से")</td><td class="k">since 2020 ("2020 से")</td></tr><tr><td class="k">for two hours ("दो घंटे से")</td><td class="k">since Monday ("सोमवार से")</td></tr></table></div>
<p><b>from two years</b> ✗ और <b>since two years</b> ✗ — लंबाई के साथ हमेशा <b>for</b>। from तभी आता है जब अंत भी बताया जाए: from 2018 to 2022।</p>
<h3>How long…? = "कब से?", "कितने समय से?"</h3>
{{ex:How long have you been here?|हाउ लॉङ हव़ यु बिन हिर|आप यहाँ कब से हैं?}}{{ex:How long have you studied English?|हाउ लॉङ हव़ यु ˈस्टडिड ˈइंग्लिश|आप कितने समय से अंग्रेज़ी पढ़ रहे हैं?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|आइव़ जस्ट ˈफ़िनिश्ट|मैंने अभी-अभी ख़त्म किया}}{{ex:I've already seen it.|आइव़ ऑल्ˈरेडि सीन इट|मैं यह पहले ही देख चुकी हूँ}}{{ex:Have you eaten yet?|हव़ यु ˈईटन येट|क्या तुमने खाना खा लिया?}}
<p>yet सवाल और नकारात्मक वाक्य के आख़िर में आता है: "क्या … लिया?", "अभी तक नहीं"।</p>
<div class="tip">सबसे आम ग़लती: Simple Present या Present Continuous से बोलना। <b>I live here for five years.</b> ✗ / <b>I am living here since five years.</b> ✗ → <b>I've lived here for five years.</b> ✓ know, have जैसी क्रियाएँ और have been -ing अगले पाठ में।</div>`,
check:[["I've lived here ___ three years. ख़ाली जगह में क्या आएगा?",["since","for","during","from"],1,"\"तीन साल से\" — समय की लंबाई, इसलिए for।"],["I've worked here ___ 2020. ख़ाली जगह में क्या आएगा?",["for","in","since","at"],2,"\"2020 से\" — शुरुआत का साल, इसलिए since।"],["\"आप यहाँ कब से हैं?\" अंग्रेज़ी में?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"\"कब से\" = How long have you + V3।"]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","\"दस साल से\" = for ten years; from या since नहीं।"],
["mc","She's lived here ___ 2019.","since","for","in","at","शुरुआत का साल है, इसलिए since।"],
["mc","\"आप यहाँ कब से हैं?\" अंग्रेज़ी में?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","\"कब से\" = How long have you + V3।"],
["mc","\"मैंने अभी-अभी ख़त्म किया\" अंग्रेज़ी में?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","\"अभी-अभी\" = just: have + just + V3।"],
["mc","\"क्या तुमने खाना खा लिया?\" अंग्रेज़ी में?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","सवाल के आख़िर में yet; have के बाद V3 eaten।"],
["or","मैं पाँच साल से यहाँ रह रहा हूँ","I've lived here for five years","year since","पाँच साल — बहुवचन years; लंबाई के साथ for।"],
["or","मैं वह फ़िल्म पहले ही देख चुकी हूँ","I've already seen the movie","a saw","वही फ़िल्म जिसे दोनों जानते हैं — आर्टिकल the।"],
["or","आप कितनी देर से इंतज़ार कर रहे हैं?","How long have you waited","did","\"कितनी देर से\" = How long have you + V3।"],
["fi","I've worked here __ two years.","मैं दो साल से यहाँ काम कर रहा हूँ","for","since|from|during","\"दो साल से\" — लंबाई, इसलिए for।"],
["fi","I've been here __ Monday.","मैं सोमवार से यहाँ हूँ","since","for|at|during","\"सोमवार से\" — शुरुआत का दिन, इसलिए since।"],
["fi","Have you finished __?","क्या आपने ख़त्म कर लिया?","yet|already","ever|never|since","सवाल के आख़िर में yet।"],
["ty","मैं तीन साल से यहाँ रह रहा हूँ","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — बहुवचन","year","तीन साल — बहुवचन years; \"से\" + लंबाई = for।"],
["ty","आप यहाँ कब से हैं?","How long have you been here","how long · have you · been here","are","\"कब से\" = How long have you + V3; are नहीं।"],
["ty","मैं वह किताब पहले ही पढ़ चुकी हूँ","I've already read the book|I've read the book already|I already read the book","already · read · book — आर्टिकल the","a","वही किताब जिसे दोनों जानते हैं — आर्टिकल the।"]]},
{ id:"stative-since", title:"से = since? स्थिति वाली क्रियाएँ और \"कब से\"", blurb:"\"मैं 2015 से यहाँ रह रहा हूँ\" = I've lived here since 2015 — I am living नहीं।", deck:"अपना परिचय", body:`
<p>"मैं दो साल से दिल्ली में रह रहा हूँ", "मैं उसे दस साल से जानता हूँ" — हिंदी में ये वाक्य बिल्कुल सीधे हैं। अंग्रेज़ी में इनमें तीन जाल हैं, और तीनों भारत में बहुत आम हैं: ग़लत क्रिया पर -ing, ग़लत टेंस और ग़लत "से"।</p>
<h3>1. स्थिति बताने वाली क्रियाओं (stative verbs) पर -ing नहीं</h3>
<p>कुछ क्रियाएँ काम नहीं, <b>स्थिति</b> बताती हैं: know, understand, believe, want, need, like, love, have (मालिकाना), belong, mean, seem, remember। ये "अभी" के लिए भी Simple Present में रहती हैं, भले ही हिंदी में "रहा हूँ" आए ("अब मैं समझ रहा हूँ")।</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>I am knowing him.</td><td class="k">I know him.</td></tr><tr><td>She is having a car.</td><td class="k">She has a car.</td></tr><tr><td>I am understanding now.</td><td class="k">I understand now.</td></tr><tr><td>He is wanting tea.</td><td class="k">He wants tea.</td></tr></table></div>
{{ex:I know him.|आइ नो हिम|मैं उसे जानती हूँ}}{{ex:She has a car.|शि हैज़ अ कार|उसके पास एक कार है}}
<p>अपवाद: जब have का मतलब "पास होना" नहीं, बल्कि खाना, मीटिंग या कोई अनुभव हो, तब -ing ठीक है: He is having three meetings today. ✓</p>
{{ex:I'm having lunch.|आइम ˈहैव़िङ लन्च|मैं खाना खा रहा हूँ}}
<h3>2. "से" के तीन अंग्रेज़ी रूप</h3>
<div class="tbl"><table><tr><th>हिंदी</th><th>अंग्रेज़ी</th></tr><tr><td>"2015 से" (शुरुआत का पल)</td><td class="k">since 2015</td></tr><tr><td>"दो साल से" (समय की लंबाई)</td><td class="k">for two years</td></tr><tr><td>"2015 से 2020 तक" (शुरुआत और अंत)</td><td class="k">from 2015 to 2020</td></tr></table></div>
<p><b>from two years</b> ✗ / <b>since two years</b> ✗ → <b>for two years</b> ✓</p>
<h3>3. "से" + "रहा है" = Present Perfect (Continuous)</h3>
<p>जो बात अतीत में शुरू होकर अब तक चल रही है, वह Present Continuous में नहीं जाती। स्थिति हो तो <b>Present Perfect</b> (have / has + V3), चलता हुआ काम हो तो <b>Present Perfect Continuous</b> (have / has been + -ing)।</p>
{{ex:I've known him for ten years.|आइव़ नोन हिम फ़र टेन यिर्ज़|मैं उसे दस साल से जानता हूँ}}{{ex:I've lived here since 2015.|आइव़ लिव़्ड हिर सिन्स टू ˈथ़ाउज़न्ड फ़िफ़्ˈटीन|मैं 2015 से यहाँ रह रही हूँ}}{{ex:I've been waiting for an hour.|आइव़ बिन ˈवेटिङ फ़र अन ˈआउअर|मैं एक घंटे से इंतज़ार कर रहा हूँ}}{{ex:It's been raining for two days.|इट्स बिन ˈरेनिङ फ़र टू डेज़|दो दिन से बारिश हो रही है}}
<p>live और work के साथ दोनों रूप चलते हैं: I've lived here since 2015. = I've been living here since 2015. पर know, have जैसी स्थिति वाली क्रियाओं के साथ been + -ing नहीं: <b>I've been knowing him.</b> ✗</p>
<h3>4. "कब से?" = How long…?</h3>
{{ex:How long have you been waiting?|हाउ लॉङ हव़ यु बिन ˈवेटिङ|आप कब से इंतज़ार कर रहे हैं?}}{{ex:How long have you known her?|हाउ लॉङ हव़ यु नोन हर|आप उसे कब से जानते हैं?}}
<p><b>Since when you are waiting?</b> ✗ — अंग्रेज़ी में Since when…? हैरानी या ताने जैसा सुनाई देता है। आम सवाल How long से बनता है।</p>
<div class="tip">एक लाइन में: "से" + समय की लंबाई = for; "से" + शुरुआत = since; "से" + "रहा हूँ" = have / has + V3 या have / has been + -ing। और know, have (मालिकाना), understand पर कभी -ing नहीं।</div>`,
check:[["\"मैं उसे सालों से जानता हूँ\" अंग्रेज़ी में?",["I'm knowing him for years.","I've known him for years.","I know him since years.","I've been knowing him for years."],1,"know स्थिति बताने वाली क्रिया है, इसलिए -ing नहीं; \"से\" + अवधि के लिए Present Perfect + for।"],["\"दो साल से\" अंग्रेज़ी में?",["from two years","since two years","before two years","for two years"],3,"समय की लंबाई के साथ for; from और since यहाँ ग़लत हैं।"],["It ___ raining for two days. ख़ाली जगह में क्या आएगा?",["has been","is","was being","have"],0,"दो दिन से चल रही बारिश: has been + -ing।"]],
practice:[
["mc","He ___ a car. (उसके पास एक कार है)","has","is having","have","is has","मालिकाना have स्थिति बताता है: has, is having नहीं।"],
["mc","\"अब मेरी समझ में आ गया\" अंग्रेज़ी में?","I understand now.","I am understanding now.","I'm understand now.","I understanding now.","understand स्थिति बताने वाली क्रिया है: अभी के लिए भी Simple Present।"],
["mc","\"मैं 2015 से यहाँ रह रहा हूँ\" अंग्रेज़ी में?","I've lived here since 2015.","I am living here since 2015.","I live here from 2015.","I've lived here for 2015.","2015 से = since 2015, और \"से + रहा हूँ\" = Present Perfect।"],
["mc","I've had this phone ___ March.","since","for","from","during","\"मार्च से\" — शुरुआत का महीना, इसलिए since।"],
["mc","\"आप कब से इंतज़ार कर रहे हैं?\" अंग्रेज़ी में?","How long have you been waiting?","Since when you are waiting?","How long are you waiting?","From when have you waited?","\"कब से\" = How long have you been + -ing?"],
["or","मैं उसे पाँच साल से जानती हूँ","I've known her for five years","year since","पाँच साल — बहुवचन years; लंबाई के साथ for, और know पर -ing नहीं।"],
["or","हमारे पास 2020 से एक कार है","We've had a car since 2020","the for","एक कार, पहली बार ज़िक्र — आर्टिकल a; शुरुआत का साल है, इसलिए since।"],
["or","वे दो घंटे से इंतज़ार कर रहे हैं","They've been waiting for two hours","hour","दो घंटे — बहुवचन hours; चलता हुआ काम + अवधि = have been + -ing।"],
["or","मेरा एक सवाल है","I have a question","the doubt","एक सवाल — आर्टिकल a; यहाँ have का मतलब \"है\", इसलिए -ing नहीं। doubt का मतलब शक है।"],
["fi","She __ my friend since school.","वह स्कूल के ज़माने से मेरी दोस्त है","has been","is|was|is being","\"से\" + अब तक = Present Perfect: has been, is नहीं।"],
["fi","I've worked here __ ten years.","मैं दस साल से यहाँ काम कर रहा हूँ","for","since|from|during","\"दस साल से\" — समय की लंबाई, इसलिए for।"],
["fi","We've been __ for an hour.","हम एक घंटे से इंतज़ार कर रहे हैं","waiting","wait|waited|waits","have been के बाद -ing रूप आता है।"],
["ty","मेरे पास यह फ़ोन तीन साल से है","I've had this phone for three years","had · phone · for · three · year — बहुवचन","year","तीन साल — बहुवचन years; मालिकाना have स्थिति है: I've had, -ing नहीं।"],
["ty","मैं उन लोगों को दस साल से जानता हूँ","I've known them for ten years","known · them · ten · year — बहुवचन","year","दस साल — बहुवचन years; know स्थिति है: I've known, -ing नहीं।"],
["ty","मैं 2015 से यहाँ रह रहा हूँ","I've lived here since 2015|I've been living here since 2015","lived · here · since · 2015","am","\"2015 से\" = since 2015; \"रह रहा हूँ\" होते हुए भी Present Perfect: I've lived / I've been living।"],
["ty","आप कब से इंतज़ार कर रहे हैं?","How long have you been waiting","how long · have you · been · waiting","since","\"कब से\" = How long…? यहाँ Since when नहीं।"]]},
{ id:"narrative", title:"कहानी के टेंस: Simple Past, Past Continuous, Past Perfect", blurb:"माहौल Past Continuous में, घटना Simple Past में, उससे भी पहले की बात had + V3 में।", deck:"फ़िल्में, वेब सीरीज़ और स्लैंग", body:`
<p>बीती बात सुनाते समय तीन टेंस साथ आते हैं, और हर एक का काम अलग है।</p>
<div class="tbl"><table><tr><th>टेंस</th><th>काम</th><th>उदाहरण</th></tr><tr><td class="k">Past Continuous</td><td>माहौल, चल रहा काम</td><td>I was walking home.</td></tr><tr><td class="k">Simple Past</td><td>घटना</td><td>I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>उससे भी पहले हुई बात</td><td>He had moved to Mumbai.</td></tr></table></div>
<h3>माहौल + घटना</h3>
{{ex:I was walking home when I saw an old friend.|आइ वज़ ˈवॉकिङ होम वेन आइ सॉ अन ओल्ड फ़्रेन्ड|मैं पैदल घर जा रहा था, तभी मुझे एक पुराना दोस्त दिखा}}
<h3>Past Perfect: had + V3</h3>
<p>अतीत के किसी पल से <b>भी पहले</b> हुई बात। हिंदी में यह "चुका था" से सबसे साफ़ दिखता है: "जब मैं पहुँचा, फ़िल्म शुरू हो चुकी थी"।</p>
{{ex:When I arrived, the movie had already started.|वेन आइ अˈराइव़्ड द़ ˈमूव़ि हड ऑल्ˈरेडि ˈस्टार्टिड|जब मैं पहुँचा, फ़िल्म शुरू हो चुकी थी}}{{ex:I had never seen snow before.|आइ हड ˈनेव़र सीन स्नो बिˈफ़ॉर|मैंने उससे पहले कभी बर्फ़ नहीं देखी थी}}
<p>ध्यान दें: हिंदी का "गया था" हर बार Past Perfect नहीं है। "मैं कल बाज़ार गया था" अंग्रेज़ी में बस <b>I went to the market yesterday.</b> है। <b>had gone</b> तभी, जब बात किसी दूसरी बीती घटना से भी पहले की हो।</p>
<h3>क्रम बताने वाले शब्द</h3>
<p>first (पहले), then (फिर), after that (उसके बाद), finally (आख़िर में) से कहानी आगे बढ़ाएँ।</p>
{{ex:First we ate dinner. Then we watched a movie.|फ़र्स्ट वि एट ˈडिनर। द़ेन वि वाच्ट अ ˈमूव़ि|पहले हमने खाना खाया। फिर हमने फ़िल्म देखी}}
<div class="tip">then (फिर) और than (तुलना वाला "से") सुनने में मिलते-जुलते हैं, पर अलग शब्द हैं। कहानी में <b>then</b> आता है।</div>`,
check:[["When I arrived, the train ___ already left. ख़ाली जगह में क्या आएगा?",["has","was","had","did"],2,"उससे भी पहले हो चुकी बात: had + V3।"],["I ___ walking home when it started to rain. ख़ाली जगह में क्या आएगा?",["was","had","did","have"],0,"चल रहा काम (माहौल) Past Continuous में।"],["किस वाक्य में बात किसी दूसरी बीती घटना से भी पहले की है?",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + V3 यानी Past Perfect।"]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","पहले हो चुकी बात: had + V3।"],
["mc","I ___ cooking when the phone rang.","was","had","did","have","चल रहा काम Past Continuous में।"],
["mc","\"जब मैं पहुँची, ट्रेन जा चुकी थी\" अंग्रेज़ी में?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","पहले हो चुकी बात के लिए had + V3।"],
["mc","कहानी में \"फिर\" के लिए कौन-सा शब्द?","then","than","that","them","then = फिर; than तुलना के लिए है।"],
["mc","\"मैंने उससे पहले कभी बर्फ़ नहीं देखी थी\" अंग्रेज़ी में?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","\"कभी नहीं … था\" = had + never + V3।"],
["or","ट्रेन जा चुकी थी","The train had already left","a has","वही ट्रेन जो पकड़नी थी — आर्टिकल the।"],
["or","मुझे एक पुराना दोस्त मिला","I met an old friend","a friends","old स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an।"],
["or","मैं पैदल घर जा रहा था","I was walking home","had","माहौल Past Continuous में।"],
["fi","I was sleeping __ you called.","जब तुमने फ़ोन किया, मैं सो रहा था","when","than|so|had","\"जब\" = when।"],
["fi","The bus had already __.","बस जा चुकी थी","left|gone","leave|leaving|leaves","had के बाद V3 आता है।"],
["fi","First we ate. __ we watched a movie.","पहले हमने खाया। फिर हमने फ़िल्म देखी","Then|After that|Next","Than|Because|When","\"फिर\" = then।"],
["ty","फ़िल्म शुरू हो चुकी थी","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — आर्टिकल the","a","वही फ़िल्म जो देखनी थी — आर्टिकल the।"],
["ty","मुझे एक पुराना दोस्त मिला","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — आर्टिकल an","a","old स्वर की आवाज़ से शुरू होता है, इसलिए आर्टिकल an।"],
["ty","मैं पैदल घर जा रहा था","I was walking home","was · walking · home","had","माहौल Past Continuous में बताते हैं।"]]},
{ id:"conditionals", title:"If वाले वाक्य 2 और 3: कल्पना और पछतावा", blurb:"आज से उलटी बात हो तो would, बीते कल का पछतावा हो तो would have — हिंदी का \"होता\" दोनों में चलता है।", deck:"भावनाएँ और प्रतिक्रियाएँ", body:`
<p>जो सच नहीं है, उसकी कल्पना के लिए। हिंदी में एक ही ढाँचा दोनों काम करता है: "अगर मेरे पास समय <b>होता</b> तो मैं घूमने <b>जाता</b>" आज की बात भी हो सकती है और बीते कल की भी। अंग्रेज़ी में समय के हिसाब से दो अलग ढाँचे हैं।</p>
<h3>टाइप 2: आज की सच्चाई से उलटा</h3>
<p><b>If + Simple Past, would + V1</b>। रूप past का है, पर बात आज की है।</p>
{{ex:If I had time, I would travel.|इफ़ आइ हैड टाइम आइ वड ˈट्रैव़ल|अगर मेरे पास समय होता तो मैं घूमने जाता (आज)}}{{ex:If I were you, I'd take it.|इफ़ आइ वर यू आइड टेक इट|मैं तुम्हारी जगह होती तो ले लेती}}{{ex:What would you do?|वट वड यु डू|आप होते तो क्या करते?}}
<h3>टाइप 3: बीते कल से उलटा</h3>
<p><b>If + had + V3, would have + V3</b>। जो हो चुका, वह बदल नहीं सकता; यह पछतावे का ढाँचा है।</p>
{{ex:If I had studied, I would have passed.|इफ़ आइ हड ˈस्टडिड आइ वड अव़ पैस्ट|अगर मैंने पढ़ाई की होती तो पास हो जाता (बीती बात)}}
<h3>पछतावा: should have, I wish</h3>
{{ex:I should have called.|आइ शड अव़ कॉल्ड|मुझे फ़ोन कर देना चाहिए था}}{{ex:I wish I had more time.|आइ विश आइ हैड मॉर टाइम|काश मेरे पास और समय होता}}
<div class="tbl"><table><tr><th>टाइप</th><th>if वाला हिस्सा</th><th>नतीजा</th></tr><tr><td>1 (हो सकता है)</td><td class="k">Simple Present</td><td class="k">will</td></tr><tr><td>2 (आज से उलटा)</td><td class="k">Simple Past</td><td class="k">would</td></tr><tr><td>3 (बीते कल से उलटा)</td><td class="k">had + V3</td><td class="k">would have + V3</td></tr></table></div>
<div class="tip">If I were you पक्का ढाँचा है: I के साथ भी was नहीं, <b>were</b>। बोलचाल में If I was you भी सुनाई देता है, पर लिखते समय were लिखें।</div>`,
check:[["If I ___ rich, I would travel. ख़ाली जगह में क्या आएगा?",["am","were","will be","would be"],1,"आज की सच्चाई से उलटी बात: Simple Past (were)।"],["If I had studied, I ___ passed. ख़ाली जगह में क्या आएगा?",["would","will have","would have","had"],2,"बीते कल से उलटी बात: would have + V3।"],["\"मुझे फ़ोन कर देना चाहिए था\" अंग्रेज़ी में?",["I should have called.","I should called.","I should had call.","I would call should."],0,"पछतावा: should have + V3।"]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","आज से उलटी बात: if वाले हिस्से में Simple Past।"],
["mc","\"मैं तुम्हारी जगह होता तो उसे ख़रीद लेता\" अंग्रेज़ी में?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd… पक्का ढाँचा है।"],
["mc","If I had known, I ___ come.","would have","would","will have","had","बीते कल से उलटी बात: would have + V3।"],
["mc","\"मुझे फ़ोन कर देना चाहिए था\" अंग्रेज़ी में?","I should have called.","I should called.","I should had call.","I must called.","पछतावा: should have + V3।"],
["mc","\"आप होते तो क्या करते?\" अंग्रेज़ी में?","What would you do?","What will you did?","What would you did?","What you would do?","कल्पना में would + V1।"],
["or","अगर मेरे पास समय होता तो मैं घूमने जाता","If I had time I'd travel","have will","आज से उलटी बात: had और would।"],
["or","मैं होती तो टैक्सी ले लेती","I'd take a taxi","the taxis","कोई भी एक टैक्सी — आर्टिकल a, बहुवचन नहीं।"],
["or","मुझे टिकट ख़रीद लेना चाहिए था","I should have bought a ticket","the buy","एक टिकट — आर्टिकल a।"],
["fi","If I __ you, I'd go.","मैं तुम्हारी जगह होता तो चला जाता","were|was","am|be|would be","If I were you पक्का ढाँचा है।"],
["fi","I would __ helped.","मैं (उस वक़्त) मदद कर देती","have","had|has|having","बीती बात: would have + V3।"],
["fi","I wish I __ more time.","काश मेरे पास और समय होता","had","have|would have|will have","I wish के बाद Simple Past।"],
["ty","मैं तुम्हारी जगह होता तो चला जाता","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","If I were you, I'd… — पक्का ढाँचा।"],
["ty","काश मेरे पास एक कार होती","I wish I had a car","I wish · had · car — आर्टिकल a","the","कोई भी एक कार — आर्टिकल a।"],
["ty","मुझे टैक्सी ले लेनी चाहिए थी","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — आर्टिकल a","the","कोई भी एक टैक्सी — आर्टिकल a।"]]},
{ id:"passive", title:"Passive Voice: be + V3 (\"किया गया\")", blurb:"जब \"किसने किया\" से ज़्यादा ज़रूरी हो कि क्या हुआ। ऑफ़िस ईमेल में इसे कम रखें।", deck:"ऑफ़िस और ईमेल", body:`
<p>"चोरी हो गया", "कैंसल कर दिया गया" — जब यह ज़्यादा ज़रूरी हो कि <b>क्या हुआ</b>, न कि <b>किसने किया</b>। ढाँचा है <b>be + V3</b>।</p>
{{ex:My phone was stolen.|माइ फ़ोन वज़ ˈस्टोलन|मेरा फ़ोन चोरी हो गया}}{{ex:This was made in India.|द़िस वज़ मेड इन ˈइन्डिआ|यह भारत में बना है}}{{ex:The meeting was canceled.|द़ ˈमीटिङ वज़ ˈकैन्सल्ड|मीटिंग कैंसल हो गई}}
<p>"चोरी हो गया", "कैंसल हो गई" में be जैसा कोई अलग शब्द नहीं दिखता, इसलिए अंग्रेज़ी में was छूट जाता है: <b>My phone stolen.</b> ✗</p>
<h3>Present: जो हमेशा होता है</h3>
{{ex:English is spoken here.|ˈइंग्लिश इज़ ˈस्पोकन हिर|यहाँ अंग्रेज़ी बोली जाती है}}{{ex:Breakfast is served at seven.|ˈब्रेक्फ़स्ट इज़ सर्व़्ड अट ˈसेव़न|नाश्ता सात बजे दिया जाता है}}
<h3>किसने किया: by</h3>
{{ex:It was written by Ruskin Bond.|इट वज़ ˈरिटन बाइ ˈरस्किन बान्ड|इसे रस्किन बॉन्ड ने लिखा है}}
<h3>Active और Passive</h3>
<div class="tbl"><table><tr><th>Active Voice (कर्तृवाच्य)</th><th>Passive Voice (कर्मवाच्य)</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<h3>ऑफ़िस अंग्रेज़ी में Passive कम रखें</h3>
<p>सरकारी हिंदी के "सूचित किया जाता है कि…" की तरह भारतीय ऑफ़िस ईमेल में <b>It is informed that…</b> या <b>Your request has been received and will be done.</b> ख़ूब मिलते हैं। विदेश में ये भारी लगते हैं। करने वाला पता हो तो Active बेहतर है: <b>We'll send the report today.</b>, <b>I've received your request.</b></p>
<div class="tip">सबसे आम ग़लती: be छोड़ देना। <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. ख़ाली जगह में क्या आएगा?",["is","was","did","has"],1,"कल की बात है, इसलिए was + V3।"],["This phone ___ made in Korea. ख़ाली जगह में क्या आएगा?",["was","did","has","does"],0,"Passive में be + V3 आता है।"],["\"मीटिंग कैंसल हो गई\" अंग्रेज़ी में?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be + V3 चाहिए: was canceled।"]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","Passive में be + V3 आता है।"],
["mc","\"यह कोरिया में बना है\" अंग्रेज़ी में?","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be + V3 चाहिए: was made।"],
["mc","\"यहाँ अंग्रेज़ी बोली जाती है\" अंग्रेज़ी में?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","हमेशा होने वाली बात: is + V3।"],
["mc","\"मीटिंग कैंसल हो गई\" अंग्रेज़ी में?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","was + V3; be छूटना नहीं चाहिए।"],
["mc","\"नाश्ता सात बजे दिया जाता है\" अंग्रेज़ी में?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","breakfast से पहले आर्टिकल नहीं; is + V3।"],
["or","मेरा बैग चोरी हो गया","My bag was stolen","stole","be के बाद V3 stolen, V2 stole नहीं।"],
["or","मीटिंग कैंसल हो गई","The meeting was canceled","A meetings","वही मीटिंग जिसे दोनों जानते हैं — आर्टिकल the।"],
["or","खिड़की टूटी हुई थी","The window was broken","a windows","यही खिड़की — आर्टिकल the।"],
["fi","This was __ in Korea.","यह कोरिया में बना है","made","make|making|makes","be के बाद V3 आता है।"],
["fi","The room __ cleaned every day.","कमरा रोज़ साफ़ किया जाता है","is|gets","does|has|did","हमेशा होने वाली बात: is + V3।"],
["fi","It was written __ Han Kang.","इसे हान कांग ने लिखा है","by","from|of|with","किसने किया, यह by से बताते हैं।"],
["ty","मेरा फ़ोन चोरी हो गया","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be + V3 stolen; be छोड़ें नहीं।"],
["ty","वह मीटिंग कैंसल हो गई","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — आर्टिकल the","a","वही मीटिंग जिसे दोनों जानते हैं — आर्टिकल the।"],
["ty","दरवाज़े पर ताला लगा था","The door was locked","the door · was · locked — आर्टिकल the","a","यही दरवाज़ा — आर्टिकल the।"]]},
{ id:"reported", title:"Indirect Speech: किसी की बात आगे बताना", blurb:"She said she was tired. सर्वनाम बदलें, टेंस एक क़दम पीछे करें, tell के बाद सुनने वाला।", deck:"कॉल और चैट की शॉर्ट फ़ॉर्म", body:`
<p>किसी और की कही बात आगे बताने के लिए Indirect Speech (अप्रत्यक्ष कथन; भारतीय किताबों में Narration)। हिंदी में "कि" के बाद अक्सर बोलने वाले के अपने शब्द ज्यों-के-त्यों रहते हैं: "उसने कहा कि <b>मैं</b> थका <b>हूँ</b>"। अंग्रेज़ी में दो चीज़ें बदलती हैं: <b>सर्वनाम</b> (I → he / she) और <b>टेंस, एक क़दम पीछे</b>।</p>
<p><b>He said that I am tired.</b> ✗ — इसका मतलब होगा कि मैं (बताने वाला) थका हूँ।</p>
<div class="tbl"><table><tr><th>असली बात</th><th>आगे बताते समय</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|शि सेड शि वज़ ˈटाइअर्ड|उसने कहा कि वह थकी हुई है}}{{ex:He said he would come.|हि सेड हि वड कम|उसने कहा कि वह आएगा}}
<h3>say और tell</h3>
<p><b>tell</b> के बाद सुनने वाला ज़रूर आता है (told me, told her); <b>say</b> के बाद नहीं। <b>He said me…</b> ✗ / <b>He told that…</b> ✗</p>
{{ex:He told me he was busy.|हि टोल्ड मि हि वज़ ˈबिज़ि|उसने मुझसे कहा कि वह बिज़ी है}}
<h3>सवाल आगे बताना</h3>
<p>हाँ-ना वाले सवाल के लिए <b>if</b>; wh-सवाल में wh-शब्द वही रहता है। उसके बाद क्रम सामान्य वाक्य वाला होता है: कर्ता + क्रिया। हिंदी "उसने पूछा कि मैं कहाँ रहता हूँ" का क्रम यहाँ सही रास्ता दिखाता है।</p>
{{ex:She asked if I was okay.|शि ऐस्क्ट इफ़ आइ वज़ ओˈके|उसने पूछा कि मैं ठीक हूँ या नहीं}}{{ex:He asked where I lived.|हि ऐस्क्ट वेर आइ लिव़्ड|उसने पूछा कि मैं कहाँ रहता हूँ}}
<div class="tip">सबसे आम ग़लती: <b>He said me …</b> ✗ → <b>He told me …</b> ✓ / <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. ख़ाली जगह में क्या आएगा?",["is being","was","be","will"],1,"आगे बताते समय टेंस एक क़दम पीछे: is → was।"],["He ___ me he would come. ख़ाली जगह में क्या आएगा?",["said","say","told","tell to"],2,"सुनने वाला (me) हो तो told।"],["\"उसने पूछा कि मैं कहाँ रहता हूँ\" अंग्रेज़ी में?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"आगे बताए गए सवाल में सामान्य क्रम: where I lived।"]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","आगे बताते समय टेंस एक क़दम पीछे।"],
["mc","He ___ me he was late.","told","said","say","tells to","सुनने वाला हो तो told।"],
["mc","\"वह बोला कि वह आएगा\" अंग्रेज़ी में?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","आगे बताते समय will → would।"],
["mc","\"उसने पूछा कि मैं ठीक हूँ या नहीं\" अंग्रेज़ी में?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","हाँ-ना वाला सवाल if से आगे बताते हैं।"],
["mc","\"उसने पूछा कि मैं कहाँ रहती हूँ\" अंग्रेज़ी में?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","आगे बताए गए सवाल में सामान्य क्रम: कर्ता + क्रिया।"],
["or","वह बोली कि वह थकी हुई है","She said she was tired","told","सुनने वाला नहीं है, इसलिए said।"],
["or","वह बोला कि उसने एक कार ख़रीदी","He said he bought a car","the cars","पहली बार ज़िक्र, एक कार — आर्टिकल a।"],
["or","वह बोली कि उसे वह किताब अच्छी लगी","She said she liked the book","a books","वही किताब जिसे दोनों जानते हैं — आर्टिकल the।"],
["fi","She __ she was tired.","उसने कहा कि वह थकी हुई है","said","told|asked|say","सुनने वाला नहीं है, इसलिए said।"],
["fi","He told __ he was busy.","उसने मुझसे कहा कि वह बिज़ी है","me","I|my|to","told के बाद सुनने वाला (me) आता है।"],
["fi","She asked __ I was okay.","उसने पूछा कि मैं ठीक हूँ या नहीं","if|whether","that|what|did","हाँ-ना वाला सवाल if से।"],
["ty","वह बोला कि वह बिज़ी है","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","आगे बताते समय टेंस एक क़दम पीछे: is → was।"],
["ty","वह बोली कि उसके पास एक कार है","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — आर्टिकल a","the","पहली बार ज़िक्र, एक कार — आर्टिकल a।"],
["ty","वह बोला कि उसने वह फ़िल्म देखी है","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — आर्टिकल the","a","वही फ़िल्म जिसे दोनों जानते हैं — आर्टिकल the।"]]},
];
