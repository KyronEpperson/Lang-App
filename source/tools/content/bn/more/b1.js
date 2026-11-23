/* bn-en stage B1: lessons for Bengali speakers. Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present Perfect 2: for আর since, এখন পর্যন্ত", blurb:"অতীতে শুরু, এখনো চলছে। for + কত সময়, since + কখন থেকে।", deck:"নিজের পরিচয়", body:`
<p>Present Perfect-এর দ্বিতীয় কাজ: <b>অতীতে শুরু হয়ে এখনো চলছে</b>, এমন কিছু বলা। বাংলায় এখানে বর্তমানের রূপ বসে: "আমি পাঁচ বছর <b>ধরে</b> ঢাকায় <b>আছি</b>"। ইংরেজিতে বর্তমানের রূপ চলে না, লাগে <b>have + V3</b>।</p>
{{ex:I've lived in Dhaka for five years.|আইভ় ˈলিভ়্ড ইন ˈডাːকা ফার ˈফাইভ় ˈইয়ির্জ়|আমি পাঁচ বছর ধরে ঢাকায় আছি}}{{ex:I've worked here since 2020.|আইভ় ˈওয়ার্ক্ট ˈহির সিন্স ˈট্ওয়েন্টি ˈট্ওয়েন্টি|আমি 2020 সাল থেকে এখানে কাজ করছি}}{{ex:I've known her for a long time.|আইভ় ˈনৌন হার ফার আ ˈলং ˈটাইম|আমি তাকে অনেক দিন ধরে চিনি}}
<h3>for আর since</h3>
<p>ধরে = <b>for</b> (কত সময়), থেকে = <b>since</b> (কখন থেকে)।</p>
<div class="tbl"><table><tr><th>for + কত সময়</th><th>since + কখন থেকে</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long …?</h3>
{{ex:How long have you been here?|ˈহাউ ˈলং হাভ় ইউ বিন ˈহির|আপনি কত দিন ধরে এখানে আছেন?}}{{ex:How long have you studied English?|ˈহাউ ˈলং হাভ় ইউ ˈস্টাডিড ˈইংগ্লিশ|তুমি কত দিন ধরে ইংরেজি শিখছ?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|আইভ় ˈজাস্ট ˈফিনিশ্ট|আমি এইমাত্র শেষ করেছি}}{{ex:I've already seen it.|আইভ় অল্ˈরেডি ˈসীন ইট|আমি এটা আগেই দেখেছি}}{{ex:Have you eaten yet?|হাভ় ইউ ˈঈটান ˈইয়েট|তুমি কি এর মধ্যে খেয়েছ?}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: বাংলার মতো বর্তমানের রূপে বলা। <b>I live here for five years.</b> ✗, <b>I am living here since five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. শূন্যস্থানে কী বসবে?",["since","for","during","from"],1,"কত সময় ধরে, তা বলতে for বসে।"],["I've worked here ___ 2020. শূন্যস্থানে কী বসবে?",["for","in","since","at"],2,"কখন থেকে, তা বলতে since বসে।"],["\"আপনি কত দিন ধরে এখানে আছেন?\" ইংরেজিতে?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + V3 বসে।"]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","কত সময় ধরে, তা বলতে for বসে।"],
["mc","She's lived here ___ 2019.","since","for","in","at","কখন থেকে, তা বলতে since বসে।"],
["mc","\"আপনি কত দিন ধরে এখানে আছেন?\" ইংরেজিতে?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + V3 বসে।"],
["mc","\"আমি এইমাত্র শেষ করেছি\" ইংরেজিতে?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + V3 বসে।"],
["mc","\"তুমি কি এর মধ্যে খেয়েছ?\" ইংরেজিতে?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","প্রশ্নে \"এর মধ্যে\" বোঝাতে yet বসে।"],
["or","আমি পাঁচ বছর ধরে এখানে থাকছি","I've lived here for five years","year since","পাঁচ বছর, তাই বহুবচন years; কত সময় ধরে, তাই for।"],
["or","আমি সিনেমাটা আগেই দেখেছি","I've already seen the movie","a saw","দুজনেরই জানা সিনেমাটা, তাই আর্টিকেল the।"],
["or","তুমি কতক্ষণ অপেক্ষা করেছ?","How long have you waited","did","How long have you + V3 বসে।"],
["fi","I've worked here __ two years.","আমি দুই বছর ধরে এখানে কাজ করছি","for","since|from|during","কত সময় ধরে, তা বলতে for বসে।"],
["fi","I've been here __ Monday.","আমি সোমবার থেকে এখানে আছি","since","for|at|during","কখন থেকে, তা বলতে since বসে।"],
["fi","Have you finished __?","তুমি কি এর মধ্যে শেষ করেছ?","yet|already","ever|never|since","প্রশ্নে \"এর মধ্যে\" বোঝাতে yet বসে।"],
["ty","আমি তিন বছর ধরে এখানে থাকছি","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — বহুবচন","year","তিন বছর, তাই বহুবচন years।"],
["ty","আপনি কত দিন ধরে এখানে আছেন?","How long have you been here","how long · have you · been here","are","How long have you + V3 বসে।"],
["ty","আমি বইটা আগেই পড়েছি","I've already read the book|I've read the book already|I already read the book","already · read · book — আর্টিকেল the","a","দুজনেরই জানা বইটা, তাই আর্টিকেল the।"]]},
{ id:"narrative", title:"গল্প বলার tense: Past Simple, Past Continuous, Past Perfect", blurb:"পটভূমি Past Continuous, ঘটনা Past Simple, তারও আগের ঘটনা had + V3।", deck:"সিনেমা, সিরিজ ও স্ল্যাং", body:`
<p>ঘটে যাওয়া কিছুর গল্প বলতে তিনটি tense মিলিয়ে ব্যবহার করা হয়, আর প্রতিটির কাজ আলাদা। বাংলার "করছিলাম", "করলাম" আর "আগেই করেছিলাম"-এর সঙ্গে এগুলো অনেকটা মেলে।</p>
<div class="tbl"><table><tr><th>tense</th><th>কাজ</th><th>উদাহরণ</th></tr><tr><td class="k">Past Continuous</td><td>পটভূমি, যা চলছিল</td><td>I was walking home.</td></tr><tr><td class="k">Past Simple</td><td>যা ঘটল</td><td>I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>তারও আগে যা ঘটেছিল</td><td>He had moved to Sylhet.</td></tr></table></div>
<h3>পটভূমি + ঘটনা</h3>
{{ex:I was walking home when I saw an old friend.|আই ওয়াজ় ˈওয়কিং ˈহৌম ওয়েন আই ˈস আন ˈঔল্ড ˈফ্রেন্ড|হেঁটে বাসায় ফিরছিলাম, এমন সময় এক পুরোনো বন্ধুর সঙ্গে দেখা হলো}}
<h3>Past Perfect: had + V3</h3>
<p>অতীতের একটা সময়ের <b>আরও আগে</b> যা ঘটেছিল।</p>
{{ex:When I arrived, the movie had already started.|ওয়েন আই আˈরাইভ়্ড দ়া ˈমূভ়ি হাড অল্ˈরেডি ˈস্টাːর্টিড|আমি যখন পৌঁছালাম, সিনেমা ততক্ষণে শুরু হয়ে গিয়েছিল}}{{ex:I had never seen snow before.|আই হাড ˈনেভ়ার ˈসীন ˈস্নৌ বিˈফর|এর আগে আমি কখনো তুষার দেখিনি}}
<h3>ক্রম বোঝানো শব্দ</h3>
<p>first (প্রথমে), then (তারপর), after that (এরপর), finally (শেষে) দিয়ে গল্প এগিয়ে নিন।</p>
{{ex:First we ate dinner. Then we watched a movie.|ˈফার্স্ট ওয়ি ˈএইট ˈডিনার। ˈদ়েন ওয়ি ˈওয়াːচ্ট আ ˈমূভ়ি|প্রথমে আমরা রাতের খাবার খেলাম। তারপর একটা সিনেমা দেখলাম}}
<div class="tip">then (তারপর) আর than (চেয়ে) শুনতে কাছাকাছি, কিন্তু আলাদা শব্দ। গল্পে লাগে <b>then</b>।</div>`,
check:[["When I arrived, the train ___ already left. শূন্যস্থানে কী বসবে?",["has","was","had","did"],2,"আরও আগে ঘটা কাজে had + V3 বসে।"],["I ___ walking home when it started to rain. শূন্যস্থানে কী বসবে?",["was","had","did","have"],0,"যে কাজটা চলছিল (পটভূমি), সেটা Past Continuous।"],["কোন বাক্যটি আরও আগে ঘটা কাজ বোঝায়?",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + V3 হলো Past Perfect।"]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","আরও আগে ঘটা কাজে had + V3 বসে।"],
["mc","I ___ cooking when the phone rang.","was","had","did","have","যে কাজটা চলছিল, সেটা Past Continuous।"],
["mc","\"আমি যখন পৌঁছালাম, ট্রেন ততক্ষণে ছেড়ে গিয়েছিল\" ইংরেজিতে?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","আরও আগে ঘটা কাজে had + V3 বসে।"],
["mc","গল্প এগিয়ে নিতে \"তারপর\" ইংরেজিতে?","then","than","that","them","then মানে \"তারপর\", than মানে \"চেয়ে\"।"],
["mc","\"এর আগে আমি কখনো তুষার দেখিনি\" ইংরেজিতে?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + V3 বসে।"],
["or","ট্রেনটা ততক্ষণে ছেড়ে গিয়েছিল","The train had already left","a has","যে ট্রেনটা ধরার কথা সেটাই, তাই আর্টিকেল the।"],
["or","এক পুরোনো বন্ধুর সঙ্গে আমার দেখা হলো","I met an old friend","a friends","old স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an।"],
["or","আমি হেঁটে বাসায় ফিরছিলাম","I was walking home","had","পটভূমি বলতে Past Continuous।"],
["fi","I was sleeping __ you called.","তুমি যখন ফোন করলে, আমি ঘুমাচ্ছিলাম","when","than|so|had","\"যখন\" বোঝাতে when বসে।"],
["fi","The bus had already __.","বাসটা ততক্ষণে ছেড়ে গিয়েছিল","left|gone","leave|leaving|leaves","had-এর পরে V3 বসে।"],
["fi","First we ate. __ we watched a movie.","প্রথমে আমরা খেলাম। তারপর একটা সিনেমা দেখলাম","Then|After that|Next","Than|Because|When","\"তারপর\" বোঝাতে then বসে।"],
["ty","সিনেমাটা ততক্ষণে শুরু হয়ে গিয়েছিল","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — আর্টিকেল the","a","যে সিনেমাটা দেখার কথা সেটাই, তাই আর্টিকেল the।"],
["ty","এক পুরোনো বন্ধুর সঙ্গে আমার দেখা হলো","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — আর্টিকেল an","a","old স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an।"],
["ty","আমি হেঁটে বাসায় ফিরছিলাম","I was walking home","was · walking · home","had","পটভূমি বলতে Past Continuous।"]]},
{ id:"conditionals", title:"শর্তের বাক্য 2 ও 3: কল্পনা আর আফসোস", blurb:"এখনকার বাস্তবের উল্টো হলে would, পেরিয়ে যাওয়া কিছুর আফসোসে would have।", deck:"অনুভূতি ও প্রতিক্রিয়া", body:`
<p>যা বাস্তব নয়, তা কল্পনা করে বলার উপায়। বাংলায়: "সময় থাকলে ঘুরতে যেতাম", "পড়লে পাস করতাম"। বাংলার "করতাম" দিয়ে আগের অভ্যাসও বোঝায় ("ছোটবেলায় খেলতাম")। ইংরেজিতে দুটো আলাদা: অভ্যাসের জন্য <b>used to</b>, আর কল্পনার জন্য if-এর অংশের সঙ্গে <b>would</b>।</p>
<h3>শর্তের বাক্য 2: এখনকার বাস্তবের উল্টো</h3>
<p><b>If + past রূপ, would + ক্রিয়া</b>। রূপটা past, কিন্তু কথাটা এখনকার।</p>
{{ex:If I had time, I would travel.|ইফ আই ˈহ্যাড ˈটাইম আই ওয়াড ˈট্র‍্যাভ়াল|সময় থাকলে আমি ঘুরতে যেতাম}}{{ex:If I were you, I'd take it.|ইফ আই ওয়ার ˈইঊ আইড ˈটেইক ইট|আমি তোমার জায়গায় থাকলে ওটা নিতাম}}{{ex:What would you do?|ˈওয়াট ওয়াড ইউ ˈডূ|তুমি হলে কী করতে?}}
<h3>শর্তের বাক্য 3: অতীতের বাস্তবের উল্টো</h3>
<p><b>If + had + V3, would have + V3</b>।</p>
{{ex:If I had studied, I would have passed.|ইফ আই হাড ˈস্টাডিড আই ওয়াড আভ় ˈপ্যাস্ট|পড়াশোনা করলে আমি পাস করতাম}}
<h3>আফসোস: should have, I wish</h3>
{{ex:I should have called.|আই শাড আভ় ˈকল্ড|আমার ফোন করা উচিত ছিল}}{{ex:I wish I had more time.|আই ˈওয়িশ আই ˈহ্যাড ˈমর ˈটাইম|আরেকটু সময় থাকলে ভালো হতো}}
<div class="tbl"><table><tr><th>ধরন</th><th>if-এর অংশ</th><th>ফলাফলের অংশ</th></tr><tr><td>1 (ঘটতে পারে)</td><td class="k">Present Simple</td><td class="k">will</td></tr><tr><td>2 (এখনকার উল্টো)</td><td class="k">past রূপ</td><td class="k">would</td></tr><tr><td>3 (অতীতের উল্টো)</td><td class="k">had + V3</td><td class="k">would have + V3</td></tr></table></div>
<div class="tip">If I were you একটা বাঁধা কথা। এখানে I-এর পরেও was নয়, <b>were</b> বসে।</div>`,
check:[["If I ___ rich, I would travel. শূন্যস্থানে কী বসবে?",["am","were","will be","would be"],1,"এখনকার বাস্তবের উল্টো হলে past রূপ (were) বসে।"],["If I had studied, I ___ passed. শূন্যস্থানে কী বসবে?",["would","will have","would have","had"],2,"অতীতের উল্টো হলে would have + V3।"],["\"আমার ফোন করা উচিত ছিল\" ইংরেজিতে?",["I should have called.","I should called.","I should had call.","I would call should."],0,"আফসোস বোঝাতে should have + V3।"]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","এখনকার বাস্তবের উল্টো হলে if-এর অংশে past রূপ বসে।"],
["mc","\"আমি তোমার জায়গায় থাকলে ওটা কিনতাম\" ইংরেজিতে?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd … একটা বাঁধা কথা।"],
["mc","If I had known, I ___ come.","would have","would","will have","had","অতীতের উল্টো হলে would have + V3।"],
["mc","\"আমার ফোন করা উচিত ছিল\" ইংরেজিতে?","I should have called.","I should called.","I should had call.","I must called.","আফসোস বোঝাতে should have + V3।"],
["mc","\"তুমি হলে কী করতে?\" ইংরেজিতে?","What would you do?","What will you did?","What would you did?","What you would do?","কল্পনার কথায় would + ক্রিয়ার মূল রূপ।"],
["or","সময় থাকলে আমি ঘুরতে যেতাম","If I had time I'd travel","have will","এখনকার বাস্তবের উল্টো, তাই past রূপ had আর would।"],
["or","আমি হলে একটা ট্যাক্সি নিতাম","I'd take a taxi","the taxis","যেকোনো একটা ট্যাক্সি, তাই আর্টিকেল a।"],
["or","আমার একটা টিকিট কেনা উচিত ছিল","I should have bought a ticket","the buy","একটা টিকিট, তাই আর্টিকেল a।"],
["fi","If I __ you, I'd go.","আমি তোমার জায়গায় থাকলে যেতাম","were|was","am|be|would be","If I were you একটা বাঁধা কথা।"],
["fi","I would __ helped.","আমি সাহায্য করতাম","have","had|has|having","would-এর পরে have + V3 বসে।"],
["fi","I wish I __ more time.","আরেকটু সময় থাকলে ভালো হতো","had","have|would have|will have","I wish-এর পরে past রূপ বসে।"],
["ty","আমি তোমার জায়গায় থাকলে যেতাম","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","If I were you, I'd … একটা বাঁধা কথা।"],
["ty","আমার একটা গাড়ি থাকলে ভালো হতো (I wish দিয়ে)","I wish I had a car","I wish · had · car — আর্টিকেল a","the","যেকোনো একটা গাড়ি, তাই আর্টিকেল a।"],
["ty","আমার একটা ট্যাক্সি নেওয়া উচিত ছিল","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — আর্টিকেল a","the","যেকোনো একটা ট্যাক্সি, তাই আর্টিকেল a।"]]},
{ id:"passive", title:"Passive (কর্মবাচ্য): be + V3", blurb:"কে করল তার চেয়ে কী ঘটল, সেটাই যখন বড় কথা।", deck:"অফিস ও ইমেইল", body:`
<p>কাজটা <b>কে করল</b> তা অজানা বা গুরুত্বহীন হলে passive (কর্মবাচ্য) ব্যবহার করা হয়। বাংলায় আমরা সাধারণত অন্যভাবে বলি ("আমার ফোন চুরি হয়েছে", "মিটিংটা বাতিল হয়েছে") অথবা "করা হয়" বসাই; be + V3-এর সঙ্গে হুবহু মেলে এমন একটিমাত্র ছক বাংলায় নেই। ইংরেজির ছক: <b>be ক্রিয়া + V3</b>। কোন tense, তা দেখায় be ক্রিয়াটাই।</p>
{{ex:My phone was stolen.|মাই ˈফৌন ওয়াজ় ˈস্টৌলান|আমার ফোন চুরি হয়েছে}}{{ex:This was made in Bangladesh.|ˈদ়িস ওয়াজ় ˈমেইড ইন বাːংগ্লাˈডেশ|এটা বাংলাদেশে তৈরি}}{{ex:The meeting was canceled.|দ়া ˈমীটিং ওয়াজ় ˈক্যান্সাল্ড|মিটিংটা বাতিল হয়েছে}}
<h3>Present: যা সব সময় এভাবেই হয়</h3>
{{ex:English is spoken here.|ˈইংগ্লিশ ইজ় ˈস্পৌকান ˈহির|এখানে ইংরেজি বলা হয়}}{{ex:Breakfast is served at seven.|ˈব্রেক্ফাস্ট ইজ় ˈসার্ভ়্ড আট ˈসেভ়ান|সকালের নাশতা সাতটায় দেওয়া হয়}}
<h3>কে করল, তা বলতে by</h3>
{{ex:It was written by Tagore.|ইট ওয়াজ় ˈরিটান বাই টাˈগর|এটা রবীন্দ্রনাথ ঠাকুরের লেখা}}
<h3>active আর passive</h3>
<div class="tbl"><table><tr><th>active (কর্তৃবাচ্য)</th><th>passive (কর্মবাচ্য)</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: be ক্রিয়া বাদ দেওয়া, বা V3-এর জায়গায় অন্য রূপ বসানো। <b>My phone stolen.</b> ✗, <b>My phone was steal.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. শূন্যস্থানে কী বসবে?",["is","was","did","has"],1,"গতকালের ঘটনা, তাই was + V3।"],["This phone ___ made in Korea. শূন্যস্থানে কী বসবে?",["was","did","has","does"],0,"passive-এর ছক: be ক্রিয়া + V3।"],["\"মিটিংটা বাতিল হয়েছে\" ইংরেজিতে?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be ক্রিয়া + V3, এখানে was canceled।"]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","passive-এর ছক: be ক্রিয়া + V3।"],
["mc","\"এটা কোরিয়ায় তৈরি\" ইংরেজিতে?","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be ক্রিয়া + V3, এখানে made।"],
["mc","\"এখানে ইংরেজি বলা হয়\" ইংরেজিতে?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","সব সময় যা হয়, তা বলতে is + V3।"],
["mc","\"মিটিংটা বাতিল হয়েছে\" ইংরেজিতে?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","be ক্রিয়া + V3।"],
["mc","\"সকালের নাশতা সাতটায় দেওয়া হয়\" ইংরেজিতে?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","খাবারের বেলার নামের আগে আর্টিকেল বসে না; তারপর is + V3।"],
["or","আমার ব্যাগ চুরি হয়েছে","My bag was stolen","stole","be ক্রিয়ার পরে V3 বসে, এখানে stolen।"],
["or","মিটিংটা বাতিল হয়েছে","The meeting was canceled","A meetings","দুজনেরই জানা মিটিংটা, তাই আর্টিকেল the।"],
["or","জানালাটা ভাঙা ছিল","The window was broken","a windows","এখানকার নির্দিষ্ট জানালাটা, তাই আর্টিকেল the।"],
["fi","This was __ in Korea.","এটা কোরিয়ায় তৈরি","made","make|making|makes","be ক্রিয়ার পরে V3 বসে।"],
["fi","The room __ cleaned every day.","ঘরটা প্রতিদিন পরিষ্কার করা হয়","is|gets","does|has|did","সব সময় যা হয়, তা বলতে is + V3।"],
["fi","It was written __ Han Kang.","এটা হান কাং-এর লেখা","by","from|of|with","কে করল, তা বলতে by বসে।"],
["ty","আমার ফোন চুরি হয়েছে","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","be ক্রিয়া + V3, এখানে stolen।"],
["ty","মিটিংটা বাতিল হয়েছে","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — আর্টিকেল the","a","দুজনেরই জানা মিটিংটা, তাই আর্টিকেল the।"],
["ty","দরজাটায় তালা দেওয়া ছিল","The door was locked","the door · was · locked — আর্টিকেল the","a","এখানকার নির্দিষ্ট দরজাটা, তাই আর্টিকেল the।"]]},
{ id:"reported", title:"পরোক্ষ উক্তি: অন্যের কথা জানানো", blurb:"She said she was tired. tense এক ধাপ পেছায়, tell-এর পরে মানুষ।", deck:"ফোন ও চ্যাটের সংক্ষেপ", body:`
<p>অন্য কেউ কী বলেছে, তা জানানোর উপায় (পরোক্ষ উক্তি)। বাংলায় সাধারণত "যে" বসিয়ে আসল কথাটাই রেখে দিই: সে বলল যে "আমি যাব"। ইংরেজিতে সর্বনাম বদলায়, আর <b>tense এক ধাপ অতীতে সরে যায়</b>: He said he would go.</p>
<div class="tbl"><table><tr><th>আসল কথা</th><th>জানানোর সময়</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|শি ˈসেড শি ওয়াজ় ˈটাইআর্ড|সে বলল যে সে ক্লান্ত}}{{ex:He said he would come.|হি ˈসেড হি ওয়াড ˈকাম|সে বলল যে সে আসবে}}
<h3>say আর tell</h3>
<p><b>tell</b>-এর পরে অবশ্যই বলতে হয় কাকে বলা হলো। <b>say</b>-এর পরে তা বসে না।</p>
{{ex:He told me he was busy.|হি ˈটৌল্ড মি হি ওয়াজ় ˈবিজ়ি|সে আমাকে বলল যে সে ব্যস্ত}}
<h3>প্রশ্ন জানানো</h3>
<p>হ্যাঁ / না-প্রশ্নে <b>if</b> বসে; প্রশ্নবোধক শব্দ থাকলে সেটাই থাকে। পরের অংশে শব্দের ক্রম <b>সাধারণ বাক্যের মতো</b> (কর্তা + ক্রিয়া)।</p>
{{ex:She asked if I was okay.|শি ˈঅ্যাস্ক্ট ইফ আই ওয়াজ় ঔˈকেই|সে জানতে চাইল আমি ঠিক আছি কি না}}{{ex:He asked where I lived.|হি ˈঅ্যাস্ক্ট ˈওয়ের আই ˈলিভ়্ড|সে জানতে চাইল আমি কোথায় থাকি}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>He said me …</b> ✗ → <b>He told me …</b> ✓, <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. শূন্যস্থানে কী বসবে?",["is being","was","be","will"],1,"অন্যের কথা জানাতে tense অতীতে সরে যায়।"],["He ___ me he would come. শূন্যস্থানে কী বসবে?",["said","say","told","tell to"],2,"কাকে বলা হলো (me) থাকলে told বসে।"],["\"সে জানতে চাইল আমি কোথায় থাকি\" ইংরেজিতে?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"জানানো প্রশ্নে শব্দের ক্রম সাধারণ বাক্যের মতো।"]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","অন্যের কথা জানাতে tense অতীতে সরে যায়।"],
["mc","He ___ me he was late.","told","said","say","tells to","কাকে বলা হলো থাকলে told বসে।"],
["mc","\"সে বলল যে সে আসবে\" ইংরেজিতে?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will বদলে would হয়।"],
["mc","\"সে জানতে চাইল আমি ঠিক আছি কি না\" ইংরেজিতে?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","হ্যাঁ / না-প্রশ্ন জানাতে if বসে।"],
["mc","\"সে জানতে চাইল আমি কোথায় থাকি\" ইংরেজিতে?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","জানানো প্রশ্নে শব্দের ক্রম সাধারণ বাক্যের মতো।"],
["or","সে (মেয়ে) বলল যে সে ক্লান্ত","She said she was tired","told","কাকে বলা হলো না থাকলে said বসে।"],
["or","সে (ছেলে) বলল যে সে একটা গাড়ি কিনেছে","He said he bought a car","the cars","প্রথমবার বলা একটা গাড়ি, তাই আর্টিকেল a।"],
["or","সে (মেয়ে) বলল যে বইটা তার ভালো লেগেছে","She said she liked the book","a books","দুজনেরই জানা বইটা, তাই আর্টিকেল the।"],
["fi","She __ she was tired.","সে বলল যে সে ক্লান্ত","said","told|asked|say","কাকে বলা হলো না থাকলে said বসে।"],
["fi","He told __ he was busy.","সে আমাকে বলল যে সে ব্যস্ত","me","I|my|to","told-এর পরে বসে, কাকে বলা হলো।"],
["fi","She asked __ I was okay.","সে জানতে চাইল আমি ঠিক আছি কি না","if|whether","that|what|did","হ্যাঁ / না-প্রশ্ন জানাতে if বসে।"],
["ty","সে (ছেলে) বলল যে সে ব্যস্ত","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","অন্যের কথা জানাতে tense অতীতে সরে যায়।"],
["ty","সে (মেয়ে) বলল যে তার একটা গাড়ি আছে","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — আর্টিকেল a","the","প্রথমবার বলা একটা গাড়ি, তাই আর্টিকেল a।"],
["ty","সে (ছেলে) বলল যে সে সিনেমাটা দেখেছে","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — আর্টিকেল the","a","দুজনেরই জানা সিনেমাটা, তাই আর্টিকেল the।"]]},
{ id:"articles-3", title:"কখন আর্টিকেল বসে না: the না কিছুই না?", blurb:"সাধারণ কথা আর্টিকেল ছাড়া, কোনটা তা পরিষ্কার হলে the। -টা / -টি দেখলেই the নয়।", deck:"হালকা আলাপ", body:`
<p>বাংলায় আর্টিকেল নেই, তাই ভুল হয় দুই দিকেই: দরকারি a / an বাদ পড়ে (<b>I'm engineer.</b> ✗), আবার যেখানে কিছুই বসে না সেখানে the ঢুকে যায় (<b>The life is hard.</b> ✗)। কঠিন হলো দ্বিতীয়টা, অর্থাৎ কখন আর্টিকেল বসে <b>না</b>। লম্বা বাক্যে নিজেকে তিনটি প্রশ্ন করুন।</p>
<h3>1. কথাটা কি সাধারণভাবে বলা? তাহলে আর্টিকেল ছাড়া</h3>
<p>কোনো কিছু নিয়ে সাধারণভাবে বললে গণনাযোগ্য বিশেষ্য হয় <b>আর্টিকেল ছাড়া বহুবচন</b>। যা গোনা যায় না (money, coffee) আর life, time-এর মতো ধারণা বসে <b>আর্টিকেল ছাড়াই</b>। বাংলাতেও "জীবন ছোট", "সময়ই টাকা" বলতে বাড়তি কিছু লাগে না।</p>
{{ex:Cats sleep a lot.|ˈক্যাট্স ˈস্লীপ আ ˈলাːট|বিড়াল অনেক ঘুমায়}}{{ex:Time is money.|ˈটাইম ইজ় ˈমানি|সময়ই টাকা}}{{ex:Coffee keeps me awake.|ˈকফি ˈকীপ্স মি আˈওয়েইক|কফি খেলে আমার ঘুম আসে না}}
<p><b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓ <b>The money isn't everything.</b> ✗ → <b>Money isn't everything.</b> ✓</p>
<h3>2. কোনটা, তা কি পরিষ্কার? তাহলে the</h3>
<p>একই শব্দের আগে <b>the</b> বসে, যখন পাশের কথাটুকু (of …, in …, বা who / that দিয়ে জোড়া বাক্যাংশ) ঠিক করে দেয় কোনটার কথা হচ্ছে।</p>
{{ex:Life is short.|ˈলাইফ ইজ় ˈশর্ট|জীবন ছোট}}{{ex:The life of a teacher is busy.|দ়া ˈলাইফ আভ় আ ˈটীচার ইজ় ˈবিজ়ি|একজন শিক্ষকের জীবন ব্যস্ত}}{{ex:I like music.|আই ˈলাইক ˈমিঊজ়িক|আমার গান ভালো লাগে (সাধারণভাবে)}}{{ex:I like the music in this cafe.|আই ˈলাইক দ়া ˈমিঊজ়িক ইন ˈদ়িস ক্যাˈফেই|এই ক্যাফের গান আমার ভালো লাগে}}{{ex:The coffee you made was great.|দ়া ˈকফি ইউ ˈমেইড ওয়াজ় ˈগ্রেইট|তোমার বানানো কফিটা দারুণ ছিল}}
<p>সবচেয়ে-র রূপ (-est / most), first, second-এর মতো ক্রম বোঝানো শব্দ আর যা পৃথিবীতে একটিই আছে, তার আগেও the বসে: "সবচেয়ে ভালো" বা "প্রথম" তো একটাই হয়।</p>
{{ex:It's the best movie I've ever seen.|ইট্স দ়া ˈবেস্ট ˈমূভ়ি আইভ় ˈএভ়ার ˈসীন|এটা আমার দেখা সবচেয়ে ভালো সিনেমা}}
<p>তবে বর্ণনা থাকলেই the নয়। জিনিসটা অনেকের মধ্যে একটা হলে লম্বা বর্ণনার পরেও a / an বসে।</p>
{{ex:My brother is an engineer who works in Dhaka.|মাই ˈব্রাদ়ার ইজ় আন এন্জিˈনির হু ˈওয়ার্ক্স ইন ˈডাːকা|আমার ভাই একজন ইঞ্জিনিয়ার, ঢাকায় কাজ করে}}
<h3>-টা / -টি দেখলেই the নয়</h3>
<p>বাংলার -টা / -টি অনেক সময় the-এর কাজ করে (বইটা → the book)। কিন্তু বাংলা এটা এমন জায়গাতেও বসায়, যেখানে ইংরেজিতে কোনো আর্টিকেল বসে না: my, your-এর মতো মালিকানা বোঝানো শব্দের পরে, আর নামের সঙ্গে। মানুষ, শহর, বেশির ভাগ দেশ, বিশ্ববিদ্যালয় আর কোম্পানির নামের আগে the বসে না।</p>
<div class="tbl"><table><tr><th>বাংলা</th><th>ইংরেজি</th></tr><tr><td>আমার বইটা</td><td class="k">my book (my the book ✗)</td></tr><tr><td>ঢাকা শহরটা বড়</td><td class="k">Dhaka is big. (The Dhaka ✗)</td></tr><tr><td>সে ঢাকা বিশ্ববিদ্যালয়ে পড়ে</td><td class="k">She studies at Dhaka University. (at the Dhaka University ✗)</td></tr></table></div>
{{ex:She studies at Dhaka University.|শি ˈস্টাডিজ় আট ˈডাːকা ইঊনিˈভ়ার্সাটি|সে ঢাকা বিশ্ববিদ্যালয়ে পড়ে}}
<h3>3. বাঁধা কথা? তাহলে আর্টিকেল ছাড়া</h3>
<p>bed, school, work যখন তাদের আসল কাজের অর্থে আসে (ঘুমানো, পড়া, কাজ করা), তখন আর্টিকেল বসে না। by + যানবাহন, খাবারের বেলা আর at night-এও বসে না। এগুলো পুরোটা একসঙ্গে মনে রাখাই সহজ।</p>
<div class="tbl"><table><tr><th>বাঁধা কথা</th><th>অর্থ</th></tr><tr><td class="k">go to bed</td><td>ঘুমাতে যাওয়া</td></tr><tr><td class="k">go to school / go to work</td><td>স্কুলে যাওয়া / কাজে যাওয়া</td></tr><tr><td class="k">at home / at work</td><td>বাসায় / কাজে</td></tr><tr><td class="k">by train / by bus</td><td>ট্রেনে / বাসে</td></tr><tr><td class="k">have breakfast / have lunch</td><td>নাশতা করা / দুপুরের খাবার খাওয়া</td></tr><tr><td class="k">at night</td><td>রাতে</td></tr></table></div>
{{ex:I go to work by train.|আই ˈগৌ টা ˈওয়ার্ক বাই ˈট্রেইন|আমি ট্রেনে করে কাজে যাই}}{{ex:I went to bed early.|আই ˈওয়েন্ট টা ˈবেড ˈআর্লি|আমি তাড়াতাড়ি ঘুমাতে গিয়েছিলাম}}{{ex:She's at work now.|শিজ় আট ˈওয়ার্ক ˈনাউ|সে এখন কাজে আছে}}{{ex:I sat on the bed.|আই ˈস্যাট আːন দ়া ˈবেড|আমি বিছানাটায় বসলাম (আসবাব হিসেবে বিছানা)}}
<div class="tip">সন্দেহ হলে নিজেকে জিজ্ঞেস করুন: কথাটা কি সাধারণভাবে বলা, নাকি কোনটা তা পরিষ্কার? সাধারণ হলে আর্টিকেল ছাড়া (গণনাযোগ্য হলে বহুবচন); কোনটা তা পরিষ্কার হলে the; অনেকের মধ্যে একটা হলে a / an। বাংলা বাক্যে -টা আছে কি নেই, তা দেখে ঠিক করবেন না।</div>`,
check:[["\"আমি ট্রেনে করে কাজে যাই\" ইংরেজিতে?",["I go to the work by the train.","I go to a work by train.","I go to work by train.","I go to work by a train."],2,"go to work আর by train বাঁধা কথা, আর্টিকেল বসে না।"],["I like ___ music they play here. শূন্যস্থানে কী বসবে?",["the","a","an","(কিছুই না)"],0,"they play here ঠিক করে দিচ্ছে কোন music, তাই আর্টিকেল the।"],["\"জীবন ছোট\" (সাধারণভাবে) ইংরেজিতে?",["The life is short.","A life is short.","Lives is short.","Life is short."],3,"life-এর মতো ধারণা সাধারণ অর্থে আর্টিকেল ছাড়া বসে।"]],
practice:[
["mc","\"সময়ই টাকা\" ইংরেজিতে?","Time is money.","The time is money.","A time is money.","Time is a money.","time-এর মতো ধারণা সাধারণ অর্থে আর্টিকেল ছাড়া বসে; money গণনাযোগ্য নয়, তাই a-ও বসে না।"],
["mc","\"আমি তাড়াতাড়ি ঘুমাতে গিয়েছিলাম\" ইংরেজিতে?","I went to bed early.","I went to the bed early.","I went to a bed early.","I went to beds early.","go to bed (ঘুমাতে যাওয়া) বাঁধা কথা, আর্টিকেল বসে না।"],
["mc","\"তোমার বানানো কফিটা দারুণ ছিল\" ইংরেজিতে?","The coffee you made was great.","Coffee you made was great.","A coffee you made was great.","The coffees you made was great.","you made ঠিক করে দিচ্ছে কোন কফি, তাই আর্টিকেল the।"],
["mc","\"আমার ভাই একজন ইঞ্জিনিয়ার, ঢাকায় কাজ করে\" ইংরেজিতে?","My brother is an engineer who works in Dhaka.","My brother is engineer who works in Dhaka.","My brother is a engineer who works in Dhaka.","My brother is the engineers who works in Dhaka.","বর্ণনা আছে, কিন্তু ইঞ্জিনিয়ার অনেকের মধ্যে একজন, তাই আর্টিকেল an।"],
["mc","\"সে এখন কাজে আছে\" ইংরেজিতে?","She's at work now.","She's at the work now.","She's at a work now.","She's at works now.","at work বাঁধা কথা, আর্টিকেল বসে না।"],
["or","বিড়াল অনেক ঘুমায়","Cats sleep a lot","The cat","সব বিড়ালের কথা, তাই আর্টিকেল ছাড়া বহুবচন cats।"],
["or","এখানকার গান আমার ভালো লাগে","I like the music here","a musics","here ঠিক করে দিচ্ছে কোন music, তাই আর্টিকেল the; music গণনাযোগ্য নয়, তাই -s বসে না।"],
["or","আমি বাসে করে স্কুলে যাই","I go to school by bus","the a","go to school আর by bus বাঁধা কথা, আর্টিকেল বসে না।"],
["fi","__ is short.","জীবন ছোট","Life","The life|A life|Lives","life-এর মতো ধারণা সাধারণ অর্থে আর্টিকেল ছাড়া বসে।"],
["fi","I'm __ home now.","আমি এখন বাসায় আছি","at","at the|in the|to","at home বাঁধা কথা, আর্টিকেল বসে না।"],
["fi","I read __ interesting article about sleep.","ঘুম নিয়ে একটা মজার লেখা পড়লাম","an","a|the|two","লেখাটা অনেকের মধ্যে একটা, তাই বর্ণনা থাকলেও আর্টিকেল an (interesting স্বরধ্বনি দিয়ে শুরু)।"],
["ty","আমি তাড়াতাড়ি ঘুমাতে গিয়েছিলাম","I went to bed early","went to · bed · early — আর্টিকেল ছাড়া","the","go to bed বাঁধা কথা, আর্টিকেল বসে না।"],
["ty","তোমার বানানো কফিটা দারুণ ছিল","The coffee you made was great|The coffee you made was good|The coffee you made was delicious|The coffee that you made was great|The coffee that you made was good|The coffee that you made was delicious","the coffee · you made · great — আর্টিকেল the","a","you made ঠিক করে দিচ্ছে কোন কফি, তাই আর্টিকেল the।"],
["ty","আমি ট্রেনে করে কাজে যাই","I go to work by train|I commute by train|I take the train to work","go to work · by train — আর্টিকেল ছাড়া","the","go to work আর by train বাঁধা কথা, আর্টিকেল বসে না।"]]},
];
