/* bn-en stage A1: new lessons (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it আর there: কর্তার জায়গা ফাঁকা থাকে না", blurb:"আবহাওয়া আর সময়ে it; \"আছে\" বোঝাতে there is / there are।", deck:"হালকা আলাপ", body:`
<p>বাংলায় "আজ ঠান্ডা", "বৃষ্টি হচ্ছে", "কাছেই একটা ক্যাফে আছে" বলতে আলাদা কোনো কর্তা (subject) লাগে না। ইংরেজিতে কর্তার জায়গা ফাঁকা রাখা যায় না। তাই অর্থহীন <b>it</b> আর <b>there</b> দিয়ে জায়গাটা ভরতে হয়।</p>
<h3>আবহাওয়া ও সময়: It</h3>
<p>এখানে it মানে "এটা" নয়; শব্দটা শুধু কর্তার জায়গা ভরে। সঙ্গে be ক্রিয়া (is) থাকতেই হবে।</p>
{{ex:It's cold today.|ইট্স ˈকৌল্ড টাˈডেই|আজ ঠান্ডা}}{{ex:It's three o'clock.|ইট্স ˈথ়্রী আˈক্লাːক|তিনটা বাজে}}{{ex:It's raining.|ইট্স ˈরেইনিং|বৃষ্টি হচ্ছে}}
<h3>"আছে" বোঝাতে: There is / There are</h3>
<p>বাংলায় জিনিস একটা হোক বা অনেক, "আছে" একই থাকে। ইংরেজিতে একটা হলে <b>There is a …</b>, একাধিক হলে <b>There are … -s</b>। বলার সময় There is ছোট হয়ে There's হয়।</p>
{{ex:There's a cafe near here.|দ়ের্জ় আ ক্যাˈফেই নির ˈহির|কাছেই একটা ক্যাফে আছে}}{{ex:There are two rooms.|দ়ের আর ˈটূ ˈরূম্জ়|দুইটা রুম আছে}}
<h3>প্রশ্ন ও না-বাচক বাক্য</h3>
{{ex:Is there a bathroom here?|ইজ় দ়ের আ ˈব্যাথ়্রূম ˈহির|এখানে কি বাথরুম আছে?}}{{ex:Are there any seats?|আর দ়ের ˈএনি ˈসীট্স|সিট আছে?}}{{ex:There isn't a bus today.|দ়ের ˈইজ়ান্ট আ ˈবাস টাˈডেই|আজ কোনো বাস নেই}}
<h3>have-এর সঙ্গে পার্থক্য</h3>
<p>বাংলায় দুই জায়গাতেই "আছে": "আমার একটা গাড়ি আছে" আর "বাইরে একটা গাড়ি আছে"। ইংরেজিতে কারও <b>নিজের</b> কিছু থাকলে <b>have</b>, কোনো <b>জায়গায়</b> কিছু থাকলে <b>there is</b>।</p>
{{ex:I have a car.|আই ˈহ্যাভ় আ ˈকাːর|আমার একটা গাড়ি আছে}}{{ex:There's a car outside.|দ়ের্জ় আ ˈকাːর আউট্ˈসাইড|বাইরে একটা গাড়ি আছে}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>Have a cafe here.</b> ✗ → <b>There's a cafe here.</b> ✓</div>`,
check:[["\"আজ গরম পড়েছে\" ইংরেজিতে?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"আবহাওয়ার কথায় কর্তার জায়গায় it বসে।"],["There ___ three people. শূন্যস্থানে কী বসবে?",["is","are","have","be"],1,"তিনজন মানে একাধিক, তাই there are।"],["\"এখানে কি বাথরুম আছে?\" ইংরেজিতে?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"কোথাও কিছু আছে কি না জানতে Is there a …? বলুন।"]],
practice:[
["mc","\"বৃষ্টি হচ্ছে\" ইংরেজিতে?","It's raining.","Is raining.","There is raining.","Rain is.","আবহাওয়ার কথায় কর্তা it।"],
["mc","\"কাছেই একটা ক্যাফে আছে\" ইংরেজিতে?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","কোনো জায়গায় কিছু থাকলে there is; ক্যাফে একটা, তাই আর্টিকেল a।"],
["mc","There ___ two rooms. শূন্যস্থানে কী বসবে?","are","is","have","has","rooms বহুবচন, তাই are।"],
["mc","\"তিনটা বাজে\" ইংরেজিতে?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","সময় বলতেও it দিয়ে শুরু করুন।"],
["mc","\"আমার একটা গাড়ি আছে\" ইংরেজিতে?","I have a car.","There is a car me.","I am a car.","It's a car me.","কারও নিজের কিছু থাকলে have।"],
["or","আজ ঠান্ডা","It's cold today","There's","আবহাওয়ার কথায় কর্তা it।"],
["or","বাইরে একটা গাড়ি আছে","There's a car outside","cars","গাড়ি একটা, তাই আর্টিকেল a আর একবচন car।"],
["or","দুইটা সিট আছে","There are two seats","seat is","দুই বা তার বেশি হলে are আর বহুবচন seats।"],
["fi","__ cold today.","আজ ঠান্ডা","It's|It is","Is|There's|This","কর্তার জায়গায় it বসান; be ক্রিয়া is-ও বাদ দেওয়া যায় না।"],
["fi","There __ a bank near here.","কাছেই একটা ব্যাংক আছে","is","are|have|be","ব্যাংক একটা, তাই is।"],
["fi","__ there any seats?","সিট আছে?","Are","Is|Do|Have","seats বহুবচন, তাই Are।"],
["ty","আজ গরম পড়েছে","It's hot today","it · hot · today — আবহাওয়ায় it","There's","আবহাওয়ার কথা it দিয়ে শুরু হয়।"],
["ty","এখানে কি বাথরুম আছে?","Is there a bathroom here|Is there a restroom here","is there · bathroom — আর্টিকেল খেয়াল করুন","the","প্রথমবার একটা বাথরুমের কথা জিজ্ঞেস করছেন, তাই আর্টিকেল a।"],
["ty","দুইটা রুম আছে","There are two rooms","there are · two · room — বহুবচন","room","দুইটা, তাই বহুবচন rooms।"]]},

{ id:"plurals", title:"বহুবচনের -s, this / these, my / your", blurb:"দুই বা তার বেশি হলে -s লাগবেই। this একটার জন্য, these অনেকের জন্য।", deck:"কেনাকাটা ও বিল", body:`
<p>বাংলায় "দুইটা বই", "তিনজন বন্ধু" বললে সংখ্যার গায়ে -টা / -জন লাগে, কিন্তু বিশেষ্য (noun) বদলায় না। ইংরেজিতে দুই বা তার বেশি হলে বিশেষ্যের শেষে <b>-s</b> লাগবেই: <b>two books</b>, <b>three friends</b>। এটাই বহুবচন (plural)। বাংলাভাষীরা এই -s খুব সহজে বাদ দিয়ে ফেলেন।</p>
<h3>বহুবচন বানানোর নিয়ম</h3>
<div class="tbl"><table><tr><th>নিয়ম</th><th>উদাহরণ</th></tr><tr><td>বেশির ভাগ শব্দে -s</td><td class="k">book → books</td></tr><tr><td>s, x, ch, sh-এর পরে -es</td><td class="k">box → boxes</td></tr><tr><td>ব্যঞ্জনবর্ণ + y → -ies</td><td class="k">city → cities</td></tr><tr><td>অনিয়মিত</td><td class="k">man → men · woman → women · child → children · person → people</td></tr></table></div>
{{ex:two books|ˈটূ ˈবুক্স|দুইটা বই}}{{ex:three boxes|ˈথ়্রী ˈবাːক্সিজ়|তিনটা বাক্স}}{{ex:I have two children.|আই ˈহ্যাভ় ˈটূ ˈচিল্ড্রান|আমার দুই সন্তান আছে}}
<p>অনিয়মিত বহুবচনের শেষে আবার -s বসে না: <b>womens</b> ✗ → <b>women</b> ✓, <b>childrens</b> ✗ → <b>children</b> ✓। আর বাংলায় -রা বা -গুলো না বসালেও চলে ("আমার অনেক বন্ধু আছে"), কিন্তু ইংরেজিতে -s লাগবেই: <b>I have many friends.</b></p>
<h3>this / that একটার জন্য, these / those অনেকের জন্য</h3>
<p>বাংলায় "এই বই" আর "এই বইগুলো": দুটোতেই "এই"। ইংরেজিতে শব্দটাই বদলে যায়।</p>
{{ex:This is my bag.|ˈদ়িস ইজ় মাই ˈব্যাগ|এটা আমার ব্যাগ}}{{ex:These are my keys.|ˈদ়ীজ় আর মাই ˈকীজ়|এগুলো আমার চাবি}}{{ex:Those shoes are nice.|ˈদ়ৌজ় ˈশূজ় আর ˈনাইস|ওই জুতাগুলো সুন্দর}}
<h3>my, your, his, her, our, their</h3>
<p>এগুলো মালিকানা বোঝানো শব্দ: জিনিসটা কার, তা বলে। বাংলায় "তার" দিয়ে ছেলে-মেয়ে দুজনকেই বোঝায়; ইংরেজিতে ছেলের বেলায় <b>his</b>, মেয়ের বেলায় <b>her</b>। এই শব্দগুলো থাকলে সঙ্গে a বা the বসে না। বাংলায় "আমার ব্যাগটা" বলা যায়, কিন্তু ইংরেজিতে শুধু <b>my bag</b>।</p>
{{ex:Is this your phone?|ইজ় ˈদ়িস ইউর ˈফৌন|এটা কি আপনার ফোন?}}{{ex:Her brothers live in Dhaka.|হার ˈব্রাদ়ার্জ় ˈলিভ় ইন ˈডাːকা|তার (মেয়ে) ভাইয়েরা ঢাকায় থাকে}}
<div class="tip">সংখ্যা, many, these, those-এর পরে বিশেষ্য সব সময় বহুবচন: <b>two friend</b> ✗ → <b>two friends</b> ✓, <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. শূন্যস্থানে কী বসবে?",["sister","sisters","a sister","sister's"],1,"দুইজন, তাই বহুবচন sisters।"],["___ are my keys. শূন্যস্থানে কী বসবে?",["This","That","These","It"],2,"keys বহুবচন, তাই These।"],["\"এটা আমার ব্যাগ\" ইংরেজিতে?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"my থাকলে আর্টিকেল বসে না।"]],
practice:[
["mc","\"দুইটা বই\" ইংরেজিতে?","two books","two book","two a book","twos book","দুই বা তার বেশি হলে বহুবচনের -s লাগে।"],
["mc","child-এর বহুবচন?","children","childs","childes","child","এটা অনিয়মিত বহুবচন: child → children।"],
["mc","___ shoes are nice. (ওই জুতাগুলো)","Those","That","This","It","shoes বহুবচন, তাই those।"],
["mc","\"এটা আমার ব্যাগ\" ইংরেজিতে?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my-এর সঙ্গে আর্টিকেল বসে না।"],
["mc","box-এর বহুবচন?","boxes","boxs","boxies","box","s, x, ch, sh-এর পরে -es বসে।"],
["or","এগুলো আমার চাবি","These are my keys","key This","একাধিক জিনিস, তাই these আর বহুবচন keys।"],
["or","আমার দুই সন্তান আছে","I have two children","child a","দুইজন, তাই বহুবচন children; আর্টিকেল a বসবে না।"],
["or","ওই জুতাগুলো সুন্দর","Those shoes are nice","That","shoes বহুবচন, তাই those।"],
["fi","I have three __.","আমার তিনটা বিড়াল আছে","cats","cat|a cat|cat's","তিনটা, তাই বহুবচন cats।"],
["fi","__ is my friend.","এ হলো আমার বন্ধু","This","These|Those|They","একজন, তাই this।"],
["fi","Two __, please.","দুইটা কফি দিন","coffees","coffee|a coffee|coffee's","অর্ডার করার সময় কাপ গুনে বলা হয়, তাই বহুবচন coffees।"],
["ty","এগুলো আমার বই","These are my books","these · my · book — বহুবচন","book","একাধিক জিনিস, তাই these আর বহুবচন books।"],
["ty","আমার দুই বোন আছে","I have two sisters","have · two · sister — বহুবচন","sister","দুইজন, তাই বহুবচন sisters। বাংলায় \"দুই বোন\", ইংরেজিতে -s চাই।"],
["ty","এটা আমার ব্যাগ","This is my bag","this · my · bag — আর্টিকেল ছাড়া","a","my থাকলে আর্টিকেল a বসে না।"]]},
{ id:"present", title:"Present Simple ও শব্দের ক্রম: কর্তা + ক্রিয়া + কর্ম", blurb:"বাংলায় ক্রিয়া বাক্যের শেষে, ইংরেজিতে কর্তার ঠিক পরে।", deck:"নিজের পরিচয়", body:`
<p>বাংলায় ক্রিয়া বাক্যের শেষে বসে: "আমি কফি <b>খাই</b>"। ইংরেজির ক্রম হলো <b>কে → কী করে → কী</b>, অর্থাৎ কর্তা (subject) + ক্রিয়া + কর্ম (object)। ইংরেজিতে -কে, -এ-র মতো বিভক্তি নেই, তাই শব্দের ক্রমই অর্থ ঠিক করে।</p>
<h3>কর্তা + ক্রিয়া + কর্ম</h3>
{{ex:I drink coffee.|আই ˈড্রিংক ˈকফি|আমি কফি খাই}}{{ex:I study English.|আই ˈস্টাডি ˈইংগ্লিশ|আমি ইংরেজি পড়ি}}
<h3>জায়গা আর সময় পরে</h3>
<p>বাকি তথ্য ক্রিয়া ও কর্মের পরে বসে, <b>জায়গা → সময়</b> ক্রমে।</p>
{{ex:We live in Dhaka.|ওয়ি ˈলিভ় ইন ˈডাːকা|আমরা ঢাকায় থাকি}}{{ex:I study English every day.|আই ˈস্টাডি ˈইংগ্লিশ ˈএভ়্রি ˈডেই|আমি প্রতিদিন ইংরেজি পড়ি}}{{ex:They work on weekends.|দ়েই ˈওয়ার্ক আːন ˈওয়ীকেন্ড্জ়|তারা উইকেন্ডে কাজ করে}}
<h3>Present Simple: অভ্যাস আর সত্য</h3>
<p>যা নিয়মিত করেন বা যা সব সময় সত্য, তা Present Simple-এ বলুন। বাংলায় ক্রিয়া কর্তা অনুযায়ী বদলায় (আমি করি, তুমি করো); ইংরেজিতে I, you, we, they-এর সঙ্গে ক্রিয়া একই থাকে। না-বাচক বাক্যে বাংলার "না" বসে ক্রিয়ার পরে, কিন্তু ইংরেজির <b>don't</b> বসে ক্রিয়ার <b>আগে</b>।</p>
{{ex:I don't eat meat.|আই ˈডৌন্ট ˈঈট ˈমীট|আমি মাংস খাই না}}
<h3>কত ঘন ঘন: always, usually, sometimes, never</h3>
<p>এই শব্দগুলো ক্রিয়ার <b>ঠিক আগে</b> বসে।</p>
{{ex:I usually get up at seven.|আই ˈইঊঝ়ুআলি ˈগেট ˈআপ আট ˈসেভ়ান|আমি সাধারণত সাতটায় উঠি}}{{ex:I never drink coffee at night.|আই ˈনেভ়ার ˈড্রিংক ˈকফি আট ˈনাইট|আমি রাতে কখনো কফি খাই না}}
<div class="tip">বাংলার ক্রমে শব্দ বসালে ভুল হবে: <b>I coffee drink.</b> ✗ → <b>I drink coffee.</b> ✓ কর্তার পরেই ক্রিয়া বলার অভ্যাস করুন।</div>`,
check:[["\"আমি কফি খাই\"-এর সঠিক শব্দের ক্রম কোনটি?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"ক্রম হলো কর্তা + ক্রিয়া + কর্ম।"],["I ___ eat meat. (খাই না)",["not","am not","no","don't"],3,"be ছাড়া অন্য ক্রিয়ার না-বাচক বাক্যে don't বসে।"],["always কোথায় বসবে?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"কত ঘন ঘন, তা বোঝানো শব্দ ক্রিয়ার ঠিক আগে বসে।"]],
practice:[
["mc","\"আমি ইংরেজি পড়ি\" ইংরেজিতে?","I study English.","I English study.","I am study English.","Study I English.","ক্রম হলো কর্তা + ক্রিয়া + কর্ম।"],
["mc","\"আমি মাংস খাই না\" ইংরেজিতে?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","be ছাড়া অন্য ক্রিয়ার না-বাচক বাক্যে don't বসে, ক্রিয়ার আগে।"],
["mc","\"আমরা সিউলে থাকি\" ইংরেজিতে?","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","ক্রিয়ার পরে জায়গা বসে।"],
["mc","\"আমি সাধারণত সাতটায় উঠি\" ইংরেজিতে?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually ক্রিয়ার ঠিক আগে বসে।"],
["mc","কোন বাক্যটি প্রতিদিনের অভ্যাস বোঝায়?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","অভ্যাস Present Simple-এ বলা হয়।"],
["or","আমি প্রতিদিন কফি খাই","I drink coffee every day","the am","অভ্যাস Present Simple-এ বলা হয়। সাধারণভাবে coffee বললে আর্টিকেল বসে না।"],
["or","আমি অনেক বই পড়ি","I read many books","book","many-এর পরে বহুবচন books বসে।"],
["or","আমরা উইকেন্ডে কাজ করি","We work on weekends","are","be ছাড়া অন্য ক্রিয়ার আগে আবার be ক্রিয়া বসে না।"],
["fi","I __ like fish.","আমি মাছ পছন্দ করি না","don't|do not","not|am not|no","be ছাড়া অন্য ক্রিয়ার না-বাচক বাক্যে don't বসে।"],
["fi","I __ English every day.","আমি প্রতিদিন ইংরেজি পড়ি","study","am study|studying|to study","Present Simple-এ I-এর সঙ্গে ক্রিয়ার মূল রূপ বসে।"],
["fi","They live __ Busan.","তারা বুসানে থাকে","in","at|on|to","শহরের নামের আগে in বসে।"],
["ty","আমি চা খাই","I drink tea","drink · tea — আর্টিকেল ছাড়া","a","সাধারণভাবে tea বললে আর্টিকেল বসে না।"],
["ty","আমি বিড়াল পছন্দ করি","I like cats","like · cat — বহুবচনে","cat","সব বিড়ালের কথা সাধারণভাবে বললে বহুবচন cats।"],
["ty","আমি মাংস খাই না","I don't eat meat","don't · eat · meat","am","be ছাড়া অন্য ক্রিয়ার না-বাচক বাক্যে don't বসে।"]]},
{ id:"questions", title:"প্রশ্ন করা: Do you …? ও প্রশ্নবোধক শব্দ", blurb:"শুধু \"কি\" বসালে বা সুর তুললে হয় না। Do সামনে, প্রশ্নবোধক শব্দ একদম শুরুতে।", deck:"জরুরি ইংরেজি 2", body:`
<p>বাংলায় বাক্যে "কি" বসালে বা শেষে সুর তুললেই প্রশ্ন হয়: "তুমি কি চা খাও?" ইংরেজিতে প্রশ্ন করতে <b>শব্দের ক্রম</b> বদলাতে হয়।</p>
<h3>be ক্রিয়া: জায়গা বদল</h3>
<p>am, is, are কর্তার আগে চলে আসে।</p>
{{ex:Are you okay?|আর ইউ ঔˈকেই|তুমি ঠিক আছ?}}{{ex:Is this your bag?|ইজ় ˈদ়িস ইউর ˈব্যাগ|এটা কি আপনার ব্যাগ?}}
<h3>অন্য ক্রিয়া: সামনে Do</h3>
<p>বাক্যে be ছাড়া অন্য ক্রিয়া (like, live, speak) থাকলে সামনে <b>Do</b> বসান। বাকি ক্রম যেমন ছিল তেমনই থাকে। বাংলার "কি"-র কাজটা এখানে Do করে।</p>
{{ex:Do you like coffee?|ডা ইউ ˈলাইক ˈকফি|আপনি কি কফি পছন্দ করেন?}}{{ex:Do you speak English?|ডা ইউ ˈস্পীক ˈইংগ্লিশ|আপনি কি ইংরেজি বলেন?}}
<p>উত্তর ছোট করে দিন: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>প্রশ্নবোধক শব্দ একদম শুরুতে</h3>
<p>বাংলায় প্রশ্নবোধক শব্দ বাক্যের ভেতরেই থাকে: "তুমি <b>কোথায়</b> থাকো?" ইংরেজিতে what (কী), where (কোথায়), when (কখন), who (কে), why (কেন), how (কীভাবে) একদম শুরুতে আসে, তারপর প্রশ্নের ক্রম।</p>
{{ex:Where do you live?|ˈওয়ের ডা ইউ ˈলিভ়|আপনি কোথায় থাকেন?}}{{ex:What do you do?|ˈওয়াট ডা ইউ ˈডূ|আপনি কী করেন? (পেশা)}}{{ex:Where is the bathroom?|ˈওয়ের ইজ় দ়া ˈব্যাথ়্রূম|বাথরুমটা কোথায়?}}{{ex:How much is this?|ˈহাউ ˈমাচ ইজ় ˈদ়িস|এটার দাম কত?}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>Where you live?</b> ✗ / <b>You live where?</b> ✗ → <b>Where do you live?</b> ✓, <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["\"আপনি কি কফি পছন্দ করেন?\" ইংরেজিতে?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"be ছাড়া অন্য ক্রিয়ার প্রশ্ন Do দিয়ে শুরু হয়।"],["\"আপনি কোথায় থাকেন?\" ইংরেজিতে?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"ক্রম হলো প্রশ্নবোধক শব্দ + do + কর্তা + ক্রিয়া।"],["Do you speak English?-এর সঠিক উত্তর কোনটি?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Do দিয়ে প্রশ্ন করলে do দিয়ে উত্তর দিন।"]],
practice:[
["mc","\"আপনি কি ইংরেজি বলেন?\" ইংরেজিতে?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","be ছাড়া অন্য ক্রিয়ার প্রশ্ন Do দিয়ে শুরু হয়।"],
["mc","\"আপনি কোথায় থাকেন?\" ইংরেজিতে?","Where do you live?","Where you live?","Where are you live?","Where live you?","ক্রম হলো প্রশ্নবোধক শব্দ + do + কর্তা + ক্রিয়া।"],
["mc","\"এটার দাম কত?\" ইংরেজিতে?","How much is this?","How much this is?","How much does this?","What much is this?","দাম জানতে How much is …? বলুন।"],
["mc","Do you like tea? — সঠিক উত্তর কোনটি?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Do দিয়ে প্রশ্ন করলে do দিয়ে উত্তর দিন।"],
["mc","\"আপনি কী করেন?\" (পেশা) ইংরেজিতে?","What do you do?","What are you do?","What you do?","What do you?","পেশা জানতে What do you do? বলা হয়।"],
["or","আপনি কি কফি পছন্দ করেন?","Do you like coffee","Are the","be ছাড়া অন্য ক্রিয়ার প্রশ্ন Do দিয়ে শুরু হয়। সাধারণভাবে coffee বললে আর্টিকেল বসে না।"],
["or","বাথরুমটা কোথায়?","Where is the bathroom","a do","এই ভবনের নির্দিষ্ট বাথরুমটা, তাই আর্টিকেল the।"],
["or","আপনি কোথায় থাকেন?","Where do you live","are","be ছাড়া অন্য ক্রিয়ার প্রশ্নে do লাগে।"],
["fi","__ you like music?","আপনি কি গান পছন্দ করেন?","Do","Are|Is|Does","like-এর প্রশ্নে Do বসে।"],
["fi","__ do you live?","আপনি কোথায় থাকেন?","Where","What|Who|When","জায়গা জানতে where।"],
["fi","What time __ it?","কয়টা বাজে?","is","do|does|are","সময় জানতে be ক্রিয়া দিয়ে প্রশ্ন করা হয়।"],
["ty","আপনি কি ইংরেজি বলেন?","Do you speak English|Can you speak English","do · speak · English","Are","be ছাড়া অন্য ক্রিয়ার প্রশ্ন Do দিয়ে শুরু হয়।"],
["ty","বাথরুমটা কোথায়?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — আর্টিকেল the","a","দুজনেই বুঝছেন কোন বাথরুম, তাই আর্টিকেল the।"],
["ty","আপনি কি কুকুর পছন্দ করেন?","Do you like dogs","do · like · dog — বহুবচন","dog","সব কুকুরের কথা সাধারণভাবে বললে বহুবচন dogs।"]]},
{ id:"third-s", title:"he, she, it-এর সঙ্গে -s: does / doesn't", blurb:"কর্তা he, she, it (বা my mom-এর মতো একজন) হলে ক্রিয়ায় -s। প্রশ্ন আর না-বাচক বাক্যে does।", deck:"নিজের পরিচয়", body:`
<p>বাংলায় "সে কাজ করে" আর "তারা কাজ করে": ক্রিয়া একই। ইংরেজির Present Simple-এ কর্তা <b>he, she, it</b> বা অন্য যেকোনো একজন মানুষ / একটা জিনিস (I আর you বাদে) হলে ক্রিয়ার শেষে <b>-s</b> বসে: <b>He works</b>, কিন্তু <b>They work</b>। একটি গবেষণায় বাংলাভাষী শিক্ষার্থীদের ইংরেজি লেখায় কর্তা আর ক্রিয়ার এই মিলের ভুলই সবচেয়ে বেশি পাওয়া গেছে।</p>
<div class="tbl"><table><tr><th>কর্তা</th><th>ক্রিয়া</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|শি ˈওয়ার্ক্স আট আ ˈব্যাংক|সে (মেয়ে) একটা ব্যাংকে কাজ করে}}{{ex:He likes soccer.|হি ˈলাইক্স ˈসাːকার|সে (ছেলে) ফুটবল পছন্দ করে}}{{ex:My mom cooks well.|মাই ˈমাːম ˈকুক্স ˈওয়েল|আমার মা ভালো রান্না করেন}}
<p>আমেরিকায় ফুটবলকে বলে <b>soccer</b>; ব্রিটিশ ইংরেজিতে football।</p>
<h3>যেসব ক্রিয়ার রূপ একটু বদলায়</h3>
{{ex:She has a car.|শি ˈহ্যাজ় আ ˈকাːর|তার (মেয়ে) একটা গাড়ি আছে (have → has)}}{{ex:He goes to work at eight.|হি ˈগৌজ় টা ˈওয়ার্ক আট ˈএইট|সে (ছেলে) আটটায় কাজে যায় (go → goes)}}{{ex:She studies English.|শি ˈস্টাডিজ় ˈইংগ্লিশ|সে (মেয়ে) ইংরেজি পড়ে (study → studies)}}
<h3>না-বাচক বাক্য ও প্রশ্নে does</h3>
<p><b>doesn't</b> বা <b>Does</b> বসালে -s সেখানেই চলে যায়। পরের ক্রিয়া মূল রূপে থাকে, -s ছাড়া।</p>
{{ex:He doesn't drink coffee.|হি ˈডাজ়ান্ট ˈড্রিংক ˈকফি|সে (ছেলে) কফি খায় না}}{{ex:Does she live here?|ডাজ় শি ˈলিভ় ˈহির|সে (মেয়ে) কি এখানে থাকে?}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>She work here.</b> ✗ → <b>She works here.</b> ✓, <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. শূন্যস্থানে কী বসবে?",["live","lives","living","is live"],1,"কর্তা she, তাই ক্রিয়ায় -s বসে।"],["He ___ like coffee. শূন্যস্থানে কী বসবে?",["don't","isn't","doesn't","not"],2,"he-এর না-বাচক বাক্যে doesn't বসে।"],["\"তার (মেয়ে) একটা গাড়ি আছে\" ইংরেজিতে?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"she-এর সঙ্গে have বদলে has হয়।"]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","কর্তা একজন (my brother = he), তাই works।"],
["mc","\"সে (ছেলে) কফি খায় না\" ইংরেজিতে?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he-এর না-বাচক বাক্যে doesn't + ক্রিয়ার মূল রূপ।"],
["mc","\"সে (মেয়ে) কি এখানে থাকে?\" ইংরেজিতে?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does-এর পরে ক্রিয়ায় -s বসে না।"],
["mc","have → she ___","has","haves","have","is have","she-এর সঙ্গে have বদলে has হয়।"],
["mc","study → he ___","studies","studys","study","studyes","ব্যঞ্জনবর্ণ + y বদলে -ies হয়।"],
["or","সে (মেয়ে) একটা ব্যাংকে কাজ করে","She works at a bank","work the","কর্তা she, তাই works। কর্মস্থলের কথা প্রথমবার বলছেন, তাই আর্টিকেল a।"],
["or","তার (ছেলে) দুইটা কুকুর আছে","He has two dogs","have dog","কর্তা he, তাই has; দুইটা, তাই বহুবচন dogs।"],
["or","সে (মেয়ে) মাংস খায় না","She doesn't eat meat","eats","doesn't-এর পরে ক্রিয়ায় -s বসে না।"],
["fi","He __ soccer.","সে (ছেলে) ফুটবল পছন্দ করে","likes","like|liking|is like","কর্তা he, তাই likes।"],
["fi","__ she speak English?","সে (মেয়ে) কি ইংরেজি বলে?","Does","Do|Is|Are","she-এর প্রশ্নে Does বসে।"],
["fi","She __ to work at eight.","সে (মেয়ে) আটটায় কাজে যায়","goes","go|going|gos","she-এর সঙ্গে go বদলে goes হয়।"],
["ty","তার (ছেলে) একটা গাড়ি আছে","He has a car","has · car — আর্টিকেল a","have","কর্তা he, তাই has; গাড়ি একটা, তাই আর্টিকেল a।"],
["ty","সে (মেয়ে) বিড়াল পছন্দ করে","She likes cats","likes · cat — বহুবচন","cat","কর্তা she, তাই likes; সব বিড়ালের কথা সাধারণভাবে বললে বহুবচন cats।"],
["ty","সে (ছেলে) এখানে থাকে না","He doesn't live here","doesn't · live · here","lives","doesn't-এর পরে ক্রিয়ার মূল রূপ বসে।"]]},
{ id:"countable", title:"গণনাযোগ্য ও গণনাযোগ্য নয়: some, any, much, many", blurb:"water-এর আগে a বসে না, শেষে -s-ও না। গোনা গেলে many, না গেলে much।", deck:"রেস্টুরেন্টে অর্ডার", body:`
<p>ইংরেজিতে বিশেষ্য দুই রকম: যা <b>গোনা যায়</b> (গণনাযোগ্য) আর যা <b>গোনা যায় না</b> (গণনাযোগ্য নয়)। বাংলায় এই ভাগ নেই: "অনেক বই" আর "অনেক পানি", দুটোতেই "অনেক"। ইংরেজিতে এই ভাগ অনুযায়ী আর্টিকেল, -s আর many / much বদলায়।</p>
<div class="tbl"><table><tr><th>গোনা যায়</th><th>গোনা যায় না</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, সংখ্যা, -s বসে</td><td>a / an, সংখ্যা, -s বসে না</td></tr></table></div>
<p>কিছু শব্দ বাংলায় গোনা গেলেও ইংরেজিতে গোনা যায় না: <b>information, advice, furniture, equipment, homework, research, evidence</b>। এগুলোর আগে a বসে না, শেষে -s-ও বসে না।</p>
<h3>some ও any</h3>
<p>"কিছু, কয়েকটা" বোঝাতে হ্যাঁ-বাচক বাক্যে <b>some</b>, না-বাচক বাক্য ও প্রশ্নে <b>any</b>। তবে কিছু চাইলে বা সাধলে প্রশ্নেও <b>some</b> বসে: <b>Can I have some water?</b></p>
{{ex:I have some money.|আই ˈহ্যাভ় ˈসাম ˈমানি|আমার কাছে কিছু টাকা আছে}}{{ex:I don't have any money.|আই ˈডৌন্ট ˈহ্যাভ় ˈএনি ˈমানি|আমার কাছে কোনো টাকা নেই}}{{ex:Do you have any questions?|ডা ইউ ˈহ্যাভ় ˈএনি ˈক্ওয়েস্চান্জ়|আপনার কোনো প্রশ্ন আছে?}}
<h3>many ও much</h3>
<p>গোনা গেলে <b>many</b> + বহুবচন, না গেলে <b>much</b>। <b>a lot of</b> দুই জায়গাতেই চলে।</p>
{{ex:How many people?|ˈহাউ ˈমেনি ˈপীপাল|কতজন মানুষ?}}{{ex:How much is it?|ˈহাউ ˈমাচ ইজ় ইট|দাম কত?}}{{ex:I don't have much time.|আই ˈডৌন্ট ˈহ্যাভ় ˈমাচ ˈটাইম|আমার হাতে বেশি সময় নেই}}
<h3>যা গোনা যায় না, তা গোনার উপায়</h3>
{{ex:a glass of water|আ ˈগ্ল্যাস আভ় ˈওয়টার|এক গ্লাস পানি}}{{ex:a cup of coffee|আ ˈকাপ আভ় ˈকফি|এক কাপ কফি}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>a water</b>, <b>many money</b>, <b>informations</b>, <b>an advice</b> ✗ → <b>some water</b>, <b>a lot of money</b>, <b>information</b>, <b>some advice</b> ✓</div>`,
check:[["How ___ people are there? শূন্যস্থানে কী বসবে?",["much","many","any","a"],1,"people গোনা যায়, তাই many।"],["নিচের কোন বিশেষ্যটি গণনাযোগ্য নয়?",["apple","chair","water","friend"],2,"water-এর আগে a বসে না, শেষে -s-ও বসে না।"],["I don't have ___ money. শূন্যস্থানে কী বসবে?",["some","a","many","any"],3,"না-বাচক বাক্যে any বসে।"]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water গণনাযোগ্য নয়, তাই a বা many বসে না; কিছু চাইলে প্রশ্নেও some বসে।"],
["mc","How ___ time do we have?","much","many","any","a","time গণনাযোগ্য নয়, তাই much।"],
["mc","\"আপনার কোনো প্রশ্ন আছে?\" ইংরেজিতে?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any-এর পরে গণনাযোগ্য বিশেষ্য বহুবচন হয়।"],
["mc","\"এক গ্লাস পানি\" ইংরেজিতে?","a glass of water","a water glass of","one waters","a glass water","যা গোনা যায় না, তা a glass of দিয়ে গোনা হয়।"],
["mc","I have ___ friends in Seoul.","many","much","a","an","friends গণনাযোগ্য আর বহুবচন, তাই many।"],
["or","আমার কাছে কিছু টাকা আছে","I have some money","a moneys","money গণনাযোগ্য নয়: আর্টিকেল a বা বহুবচনের -s বসে না।"],
["or","দুইটা আপেল দিন","Two apples please","apple","দুইটা, তাই বহুবচন apples।"],
["or","আমার হাতে বেশি সময় নেই","I don't have much time","many","time গোনা যায় না, তাই much।"],
["fi","How __ is this?","এটার দাম কত?","much","many|any|some","দাম জানতে how much।"],
["fi","I don't have __ questions.","আমার কোনো প্রশ্ন নেই","any","some|much|a","না-বাচক বাক্যে any বসে।"],
["fi","a cup __ coffee","এক কাপ কফি","of","for|in|a","a cup of … দিয়ে গোনা হয়।"],
["ty","আমি কি একটু পানি পেতে পারি?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — আর্টিকেল ছাড়া","a","water গণনাযোগ্য নয়, তাই আর্টিকেল a-এর বদলে some।"],
["ty","আপনার কোনো প্রশ্ন আছে?","Do you have any questions","any · question — বহুবচন","question","any-এর পরে গণনাযোগ্য বিশেষ্য বহুবচন হয়: questions।"],
["ty","কতজন মানুষ?","How many people","how many · people","much","মানুষ গোনা যায়, তাই many।"]]},
{ id:"object-have", title:"me, him, her এবং have", blurb:"ক্রিয়ার পরে I নয়, me। আর নানা কাজের ক্রিয়া have।", deck:"নিজের পরিচয়", body:`
<p>বাংলায় "আমি" থেকে "আমাকে", "সে" থেকে "তাকে" হয়। ইংরেজিতেও সর্বনামের (pronoun) রূপ বদলায়: ক্রিয়া বা preposition-এর <b>পরে</b> কর্মের (object) রূপ বসে। মনে রাখুন, বাংলার "তাকে" ছেলে হলে <b>him</b>, মেয়ে হলে <b>her</b>।</p>
<div class="tbl"><table><tr><th>কর্তা</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>কর্ম</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|শি ˈনৌজ় মি|সে (মেয়ে) আমাকে চেনে}}{{ex:I like him.|আই ˈলাইক হিম|আমি তাকে (ছেলে) পছন্দ করি}}{{ex:Can you help us?|কান ইউ ˈহেল্প আস|আমাদের একটু সাহায্য করবেন?}}{{ex:I work with her.|আই ˈওয়ার্ক ওয়িদ় হার|আমি তার (মেয়ে) সঙ্গে কাজ করি}}
<h3>have: আছে</h3>
<p>বাংলায় বলি "<b>আমার</b> একটা গাড়ি আছে": যার জিনিস, সে থাকে "আমার" রূপে। ইংরেজিতে সে-ই কর্তা: <b>I have a car.</b> তাই <b>My a car is.</b> ✗ বা <b>I am a car.</b> ✗ নয়। পরিবার, জিনিস, সময়: সবই have দিয়ে বলা হয়।</p>
{{ex:I have two brothers.|আই ˈহ্যাভ় ˈটূ ˈব্রাদ়ার্জ়|আমার দুই ভাই আছে}}{{ex:Do you have a pen?|ডা ইউ ˈহ্যাভ় আ ˈপেন|আপনার কাছে কলম আছে?}}{{ex:I don't have time.|আই ˈডৌন্ট ˈহ্যাভ় ˈটাইম|আমার সময় নেই}}
<h3>have: খাওয়া</h3>
<p>খাওয়া বা পান করা বোঝাতেও have চলে। breakfast, lunch, dinner-এর আগে আর্টিকেল বসে না।</p>
{{ex:Let's have lunch.|ˈলেট্স ˈহ্যাভ় ˈলান্চ|চলো দুপুরের খাবার খাই}}{{ex:I have coffee every morning.|আই ˈহ্যাভ় ˈকফি ˈএভ়্রি ˈমর্নিং|আমি প্রতিদিন সকালে কফি খাই}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓, <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. (তাকে, ছেলে)",["he","his","him","he's"],2,"ক্রিয়ার পরে কর্মের রূপ him বসে।"],["Can you help ___? (আমাদের)",["us","we","our","ours"],0,"ক্রিয়ার পরে কর্মের রূপ us বসে।"],["\"আপনার কাছে কলম আছে?\" ইংরেজিতে?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have-এর প্রশ্নও Do দিয়ে শুরু হয়।"]],
practice:[
["mc","She knows ___. (আমাকে)","me","I","my","mine","ক্রিয়ার পরে কর্মের রূপ me বসে।"],
["mc","I like ___. (তাদের)","them","they","their","theirs","ক্রিয়ার পরে কর্মের রূপ them বসে।"],
["mc","\"আমাদের একটু সাহায্য করবেন?\" ইংরেজিতে?","Can you help us?","Can you help we?","Can you help our?","Can us help you?","ক্রিয়ার পরে us বসে।"],
["mc","\"চলো দুপুরের খাবার খাই\" ইংরেজিতে?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","lunch-এর মতো খাবারের বেলার নামের আগে আর্টিকেল বসে না।"],
["mc","\"আমার দুই ভাই আছে\" ইংরেজিতে?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","পরিবারের কথা have দিয়ে বলা হয়; দুইজন, তাই বহুবচন।"],
["or","আপনার কাছে কলম আছে?","Do you have a pen","the pens","যেকোনো একটা কলম, তাই আর্টিকেল a আর একবচন pen।"],
["or","আমি তাকে (মেয়ে) পছন্দ করি","I like her","she","ক্রিয়ার পরে কর্মের রূপ her বসে।"],
["or","আমার দুই বোন আছে","I have two sisters","sister a","দুইজন, তাই বহুবচন sisters; আর্টিকেল a বসবে না।"],
["fi","Call __ tonight.","আজ রাতে আমাকে ফোন করো","me","I|my|mine","ক্রিয়ার পরে me বসে।"],
["fi","I work with __.","আমি তার (ছেলে) সঙ্গে কাজ করি","him","he|his|he's","preposition-এর পরেও কর্মের রূপ বসে।"],
["fi","She __ a dog.","তার (মেয়ে) একটা কুকুর আছে","has","have|is|haves","কর্তা she, তাই has।"],
["ty","আমাকে একটু সাহায্য করবেন? (Can you …?)","Can you help me|Could you help me","can you · help · me","I","ক্রিয়ার পরে কর্মের রূপ me বসে।"],
["ty","আপনার কাছে কলম আছে?","Do you have a pen","do you have · pen — আর্টিকেল a","the","যেকোনো একটা কলম খুঁজছেন, তাই আর্টিকেল a।"],
["ty","আমার অনেক বন্ধু আছে","I have many friends|I have a lot of friends","have · many · friend — বহুবচন","friend","many-এর পরে বহুবচন friends বসে।"]]},
{ id:"can-like", title:"can, like + -ing, I'd like: যা পারেন আর যা চান", blurb:"কী পারেন, কী ভালো লাগে আর এখন কী চান, তা বলুন।", deck:"হালকা আলাপ", body:`
<p>নিজের পরিচয় দিতে আর অর্ডার করতে এই তিনটি ছাঁচ সরাসরি কাজে লাগে।</p>
<h3>can: পারি</h3>
<p>বাংলার "পারি" = <b>can + ক্রিয়ার মূল রূপ</b>। কর্তা he বা she হলেও -s বসে না।</p>
{{ex:I can swim.|আই কান ˈস্ওয়িম|আমি সাঁতার কাটতে পারি}}{{ex:I can't drive.|আই ˈক্যান্ট ˈড্রাইভ়|আমি গাড়ি চালাতে পারি না}}{{ex:Can you speak Bangla?|কান ইউ ˈস্পীক ˈবাːংগ্লা|আপনি কি বাংলা বলতে পারেন?}}
<h3>like + -ing: … করতে ভালো লাগে</h3>
<p>বাংলায় বলি "<b>আমার</b> রান্না করতে ভালো লাগে"; ইংরেজিতে যার ভালো লাগে, সে-ই কর্তা: <b>I like …</b>। শখের কথা বলতে like, love-এর পরে <b>ক্রিয়া + ing</b> বসান।</p>
{{ex:I like cooking.|আই ˈলাইক ˈকুকিং|আমার রান্না করতে ভালো লাগে}}{{ex:I love watching movies.|আই ˈলাভ় ˈওয়াːচিং ˈমূভ়িজ়|সিনেমা দেখতে আমার খুব ভালো লাগে}}{{ex:I don't like running.|আই ˈডৌন্ট ˈলাইক ˈরানিং|আমার দৌড়াতে ভালো লাগে না}}
<h3>I'd like: … দিন, … চাই</h3>
<p><b>I like</b> মানে জিনিসটা সব সময়ই পছন্দ করি; <b>I'd like</b> মানে এখন চাই, আর কথাটা ভদ্র শোনায়। অর্ডার করার সময় I'd like বলুন।</p>
{{ex:I'd like a coffee, please.|আইড ˈলাইক আ ˈকফি ˈপ্লীজ়|একটা কফি দিন}}{{ex:Would you like some tea?|ওয়াড ইউ ˈলাইক ˈসাম ˈটী|একটু চা খাবেন?}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓, ক্যাফেতে <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. শূন্যস্থানে কী বসবে?",["sings","sing","singing","to sing"],1,"can-এর পরে ক্রিয়ার মূল রূপ বসে।"],["\"আমার রান্না করতে ভালো লাগে\" ইংরেজিতে?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like-এর পরে -ing রূপ বসে।"],["ক্যাফেতে অর্ডার করার সময় কোনটি সবচেয়ে স্বাভাবিক?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"এখন যা চান, তা I'd like দিয়ে বলুন।"]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","can-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["mc","\"আমি গাড়ি চালাতে পারি না\" ইংরেজিতে?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can-এর না-বাচক রূপ can't।"],
["mc","\"আমার সিনেমা দেখতে ভালো লাগে\" ইংরেজিতে?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like-এর পরে -ing; সিনেমার কথা সাধারণভাবে বললে বহুবচন movies।"],
["mc","অর্ডার করার সময় \"একটা কফি দিন\" ইংরেজিতে?","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","এখন যা চান, তা I'd like দিয়ে বলুন।"],
["mc","\"একটু চা খাবেন?\" ইংরেজিতে?","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","কাউকে কিছু সাধতে Would you like …? বলুন।"],
["or","একটা কফি দিন","I'd like a coffee please","the coffees","এক কাপ অর্ডার করছেন, তাই আর্টিকেল a আর একবচন coffee।"],
["or","আমার বই পড়তে ভালো লাগে","I like reading books","book read","like-এর পরে -ing; বইয়ের কথা সাধারণভাবে বললে বহুবচন books।"],
["or","তুমি সাঁতার কাটতে পারো?","Can you swim","swimming","can-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["fi","I can't __.","আমি সাঁতার কাটতে পারি না","swim","swimming|swims|to swim","can't-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["fi","I like __ music.","আমার গান শুনতে ভালো লাগে","listening to","listen to|listen|to listening","like-এর পরে -ing রূপ বসে।"],
["fi","__ like a sandwich, please.","একটা স্যান্ডউইচ দিন","I'd|I would","I|I'm|I can","অর্ডার করতে I'd like বলুন।"],
["ty","আমার রান্না করতে ভালো লাগে","I like cooking|I love cooking|I like to cook","like · cook — -ing","cook","শখের কথায় like-এর পরে সাধারণত -ing রূপ বসে; like to cook-ও ঠিক।"],
["ty","(অর্ডার করছেন) একটা স্যান্ডউইচ দিন","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — আর্টিকেল a","the","যেকোনো একটা স্যান্ডউইচ, তাই আর্টিকেল a।"],
["ty","আমি কুকুর পছন্দ করি","I like dogs|I love dogs","like · dog — বহুবচন","dog","সব কুকুরের কথা সাধারণভাবে বললে বহুবচন dogs।"]]},
{ id:"continuous", title:"এখন যা করছেন: be + -ing", blurb:"নিয়মিত কাজ Present Simple-এ, এই মুহূর্তের কাজ be + -ing দিয়ে।", deck:"হালকা আলাপ", body:`
<p>বাংলার "করছি" আর ইংরেজির <b>am doing</b> প্রায় এক: <b>এই মুহূর্তে</b> যা চলছে। তফাত হলো, বাংলায় "করছি" একটাই শব্দ, আর ইংরেজিতে দুটো অংশ লাগে: <b>be ক্রিয়া (am / is / are) + ক্রিয়া-ing</b>। এই ছাঁচের নাম Present Continuous।</p>
{{ex:I'm working now.|আইম ˈওয়ার্কিং ˈনাউ|আমি এখন কাজ করছি}}{{ex:She's cooking dinner.|শিজ় ˈকুকিং ˈডিনার|সে (মেয়ে) রাতের খাবার রান্না করছে}}{{ex:It's raining.|ইট্স ˈরেইনিং|বৃষ্টি হচ্ছে}}
<h3>প্রশ্ন ও না-বাচক বাক্য</h3>
{{ex:What are you doing?|ˈওয়াট আর ইউ ˈডূইং|তুমি কী করছ?}}{{ex:Are you listening?|আর ইউ ˈলিসানিং|তুমি শুনছ?}}{{ex:I'm not sleeping.|আইম ˈনাːট ˈস্লীপিং|আমি ঘুমাচ্ছি না}}
<h3>Present Simple-এর সঙ্গে তুলনা</h3>
<div class="tbl"><table><tr><th>নিয়মিত (Present Simple)</th><th>এখন (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>যেসব ক্রিয়ায় -ing বসে না</h3>
<p>বাংলায় "আমি চাচ্ছি", "আমি বুঝতে পারছি" বলা যায়। ইংরেজিতে তা হয় না: like, know, want, need, understand, have (আছে অর্থে) <b>অবস্থা</b> বোঝায়, তাই এখনকার কথা হলেও Present Simple-এ থাকে।</p>
{{ex:I know him.|আই ˈনৌ হিম|আমি তাকে (ছেলে) চিনি}}{{ex:I want some water.|আই ˈওয়াːন্ট ˈসাম ˈওয়টার|আমার একটু পানি চাই}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: be ক্রিয়া বাদ দেওয়া। <b>I working.</b> ✗ → <b>I'm working.</b> ✓ আর অবস্থা বোঝানো ক্রিয়ায় -ing: <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["\"তুমি এখন কী করছ?\" ইংরেজিতে?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"এই মুহূর্তের কাজ be + -ing দিয়ে জিজ্ঞেস করা হয়।"],["I ___ coffee every morning. শূন্যস্থানে কী বসবে?",["am drinking","drinking","drink","am drink"],2,"প্রতিদিনের অভ্যাস Present Simple-এ বলা হয়।"],["নিচের কোন বাক্যটি ঠিক?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know, want আর have (আছে অর্থে)-এ -ing বসে না।"]],
practice:[
["mc","\"আমি এখন কাজ করছি\" ইংরেজিতে?","I'm working now.","I work now am.","I'm work now.","I working now.","এই মুহূর্তের কাজ: be + -ing। be ক্রিয়া বাদ দেওয়া যায় না।"],
["mc","\"সে (মেয়ে) রাতের খাবার রান্না করছে\" ইংরেজিতে?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing; dinner-এর মতো খাবারের বেলার নামের আগে আর্টিকেল বসে না।"],
["mc","কোন বাক্যটি প্রতিদিনের কাজ বোঝায়?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","অভ্যাস Present Simple-এ বলা হয়।"],
["mc","\"তুমি কী করছ?\" ইংরেজিতে?","What are you doing?","What do you doing?","What are you do?","What you are doing?","ক্রম হলো প্রশ্নবোধক শব্দ + be + কর্তা + -ing।"],
["mc","\"আমি তাকে (ছেলে) চিনি\" ইংরেজিতে?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know অবস্থা বোঝায়, তাই -ing বসে না।"],
["or","আমি একটা বই পড়ছি","I'm reading a book","read books","এখন একটা বই পড়ছেন, তাই আর্টিকেল a আর একবচন book।"],
["or","বাচ্চারা খেলছে","The kids are playing","kid is","একাধিক, তাই বহুবচন kids আর are।"],
["or","এখন বৃষ্টি হচ্ছে","It's raining now","rains","এই মুহূর্তে যা হচ্ছে: be + -ing।"],
["fi","I'm __ TV.","আমি টিভি দেখছি","watching","watch|watches|to watch","be-এর পরে -ing রূপ বসে।"],
["fi","What __ you doing?","তুমি কী করছ?","are","do|is|does","you-এর সঙ্গে are বসে।"],
["fi","She __ working today.","সে (মেয়ে) আজ কাজ করছে না","isn't|is not","doesn't|don't|not","be + -ing-এর না-বাচক রূপ isn't।"],
["ty","আমি এখন রান্না করছি","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook — -ing · now","cook","এই মুহূর্তের কাজ: be + -ing।"],
["ty","আমি একটা সিনেমা দেখছি","I'm watching a movie","I'm · watching · movie — আর্টিকেল a","the","যেকোনো একটা সিনেমা, তাই আর্টিকেল a।"],
["ty","বাচ্চারা ঘুমাচ্ছে","The kids are sleeping|The children are sleeping","kids · are · sleeping — বহুবচন","kid","একাধিক, তাই বহুবচন kids আর are।"]]},
{ id:"past", title:"Past Simple: was / were ও -ed", blurb:"be ক্রিয়ায় was / were, অন্য ক্রিয়ায় -ed। প্রশ্ন আর না-বাচক বাক্যে did।", deck:"হালকা আলাপ", body:`
<p>বাংলার "করলাম", "করেছিলাম", "ছিলাম"-এর জায়গায় ইংরেজির Past Simple। be ক্রিয়া আর অন্য ক্রিয়ার past রূপ আলাদা। একটা ফাঁদ মনে রাখুন: বাংলায় "গতকাল করেছি" বলা যায়, কিন্তু ইংরেজিতে yesterday, last night-এর মতো শেষ হয়ে যাওয়া সময়ের সঙ্গে Past Simple-ই বসে: <b>I did it yesterday.</b></p>
<h3>be ক্রিয়ার past রূপ: was / were</h3>
<p>বাংলার "ছিলাম / ছিল"। I, he, she, it-এর সঙ্গে <b>was</b>; you, we, they-এর সঙ্গে <b>were</b>।</p>
{{ex:I was tired.|আই ওয়াজ় ˈটাইআর্ড|আমি ক্লান্ত ছিলাম}}{{ex:It was fun.|ইট ওয়াজ় ˈফান|মজা হয়েছিল}}{{ex:We were at home.|ওয়ি ওয়ার আট ˈহৌম|আমরা বাসায় ছিলাম}}{{ex:Were you busy?|ওয়ার ইউ ˈবিজ়ি|তুমি কি ব্যস্ত ছিলে?}}
<h3>অন্য ক্রিয়ার past রূপ: -ed</h3>
<p>ক্রিয়ার শেষে <b>-ed</b> বসান। বাংলায় কর্তা বদলালে ক্রিয়া বদলায় (করলাম, করল); ইংরেজিতে সব কর্তার সঙ্গে একই রূপ। -ed-এর উচ্চারণ তিন রকম: worked-এ ট, called-এ ড, wanted-এ ইড।</p>
{{ex:I worked yesterday.|আই ˈওয়ার্ক্ট ˈইয়েস্টার্ডেই|আমি গতকাল কাজ করেছি}}{{ex:We watched a movie.|ওয়ি ˈওয়াːচ্ট আ ˈমূভ়ি|আমরা একটা সিনেমা দেখেছি}}{{ex:She called me.|শি ˈকল্ড মি|সে (মেয়ে) আমাকে ফোন করেছিল}}
<h3>না-বাচক বাক্য ও প্রশ্নে did</h3>
<p><b>didn't</b> বা <b>Did</b> বসালে ক্রিয়া মূল রূপে ফিরে যায়।</p>
{{ex:I didn't work yesterday.|আই ˈডিডান্ট ˈওয়ার্ক ˈইয়েস্টার্ডেই|আমি গতকাল কাজ করিনি}}{{ex:Did you call me?|ডিড ইউ ˈকল মি|তুমি কি আমাকে ফোন করেছিলে?}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓, <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. শূন্যস্থানে কী বসবে?",["was","were","did","are"],1,"they-এর সঙ্গে were বসে।"],["\"আমি গতকাল কাজ করিনি\" ইংরেজিতে?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't-এর পরে ক্রিয়ার মূল রূপ বসে।"],["Did you ___ the movie? শূন্যস্থানে কী বসবে?",["watch","watched","watching","watches"],0,"Did-এর পরে ক্রিয়ার মূল রূপ বসে।"]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","I-এর সঙ্গে was বসে।"],
["mc","\"আমরা একটা সিনেমা দেখেছিলাম\" ইংরেজিতে?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","be ছাড়া অন্য ক্রিয়ার past রূপে -ed বসে।"],
["mc","\"তুমি কি গতকাল ফোন করেছিলে?\" ইংরেজিতে?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["mc","\"মজা হয়েছিল\" ইংরেজিতে?","It was fun.","It were fun.","It did fun.","It funned.","it-এর সঙ্গে was বসে।"],
["mc","\"তুমি কি ব্যস্ত ছিলে?\" ইংরেজিতে?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy বিশেষণ, তাই প্রশ্ন be ক্রিয়া দিয়ে হয়।"],
["or","আমরা একটা সিনেমা দেখেছিলাম","We watched a movie","watch movies","সিনেমা একটা, তাই আর্টিকেল a আর একবচন movie।"],
["or","(ছোট বাচ্চা বলছে) আমি বন্ধুদের সঙ্গে খেলেছি","I played with my friends","friend play","একাধিক বন্ধু, তাই বহুবচন friends।"],
["or","আমি গতকাল কাজ করিনি","I didn't work yesterday","worked","didn't-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["fi","We __ at home last night.","আমরা গতকাল রাতে বাসায় ছিলাম","were","was|did|are","we-এর সঙ্গে were বসে।"],
["fi","I __ soccer yesterday.","আমি গতকাল ফুটবল খেলেছি","played","play|playing|was play","গতকালের কথা, তাই past রূপ: -ed।"],
["fi","__ you work yesterday?","তুমি কি গতকাল কাজ করেছ?","Did","Were|Do|Was","be ছাড়া অন্য ক্রিয়ার past-এর প্রশ্ন Did দিয়ে হয়।"],
["ty","আমি ক্লান্ত ছিলাম","I was tired","was · tired","were","I-এর সঙ্গে was বসে।"],
["ty","আমি একটা সিনেমা দেখেছিলাম (watch দিয়ে)","I watched a movie","watched · movie — আর্টিকেল a","the","সিনেমা একটা, তাই আর্টিকেল a বসে।"],
["ty","আমি আমার বন্ধুদের ফোন করেছিলাম","I called my friends","called · my · friend — বহুবচন","friend","একাধিক বন্ধু, তাই বহুবচন friends।"]]},
{ id:"irregular-past", title:"অনিয়মিত past: went, ate, saw", blurb:"যে ক্রিয়া যত বেশি চলে, তার past রূপ তত কম -ed দিয়ে হয়। আগে এই 12টি শিখে নিন।", deck:"হালকা আলাপ", body:`
<p>রোজকার সবচেয়ে চেনা ক্রিয়াগুলো <b>অনিয়মিত</b>: এদের past রূপ -ed দিয়ে হয় না। কোনো নিয়ম নেই, তাই জোড়ায় জোড়ায় মুখস্থ করুন, স্কুলে যেভাবে ক্রিয়ার রূপের তালিকা পড়েছেন।</p>
<div class="tbl"><table><tr><th>মূল রূপ</th><th>past রূপ</th><th>মূল রূপ</th><th>past রূপ</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Cox's Bazar.|আই ˈওয়েন্ট টা ˈকাːক্সিজ় বাˈজ়াːর|আমি কক্সবাজার গিয়েছিলাম}}{{ex:We ate pizza.|ওয়ি ˈএইট ˈপীট্সা|আমরা পিৎজা খেয়েছি}}{{ex:I saw a movie.|আই ˈস আ ˈমূভ়ি|আমি একটা সিনেমা দেখেছি}}{{ex:I met my friends.|আই ˈমেট মাই ˈফ্রেন্ড্জ়|আমি বন্ধুদের সঙ্গে দেখা করেছি}}{{ex:I bought a book.|আই ˈবট আ ˈবুক|আমি একটা বই কিনেছি}}
<h3>প্রশ্ন ও না-বাচক বাক্যে মূল রূপ</h3>
<p><b>did</b> নিজেই past বুঝিয়ে দেয়, তাই ক্রিয়া মূল রূপে ফিরে যায়।</p>
{{ex:What did you do?|ˈওয়াট ডিড ইউ ˈডূ|তুমি কী করেছ?}}{{ex:Where did you go?|ˈওয়ের ডিড ইউ ˈগৌ|তুমি কোথায় গিয়েছিলে?}}{{ex:I didn't go.|আই ˈডিডান্ট ˈগৌ|আমি যাইনি}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>I goed.</b> ✗ → <b>I went.</b> ✓, <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["go-এর past রূপ?",["goed","gone","went","going"],2,"go-এর past রূপ went।"],["\"তুমি কী করেছ?\" ইংরেজিতে?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did-এর পরে মূল রূপ do বসে।"],["I didn't ___ breakfast. শূন্যস্থানে কী বসবে?",["ate","eaten","eats","eat"],3,"didn't-এর পরে ক্রিয়ার মূল রূপ বসে।"]],
practice:[
["mc","eat-এর past রূপ?","ate","eated","eat","eaten","eat-এর past রূপ ate।"],
["mc","\"তুমি কোথায় গিয়েছিলে?\" ইংরেজিতে?","Where did you go?","Where did you went?","Where you went?","Where were you go?","did-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["mc","\"আমি একটা বই কিনেছি\" ইংরেজিতে?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy-এর past রূপ bought; বই একটা, তাই আর্টিকেল a।"],
["mc","see-এর past রূপ?","saw","seed","seen","sawed","see-এর past রূপ saw।"],
["mc","\"আমি যাইনি\" ইংরেজিতে?","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["or","আমি একটা সিনেমা দেখেছি","I saw a movie","see movies","সিনেমা একটা, তাই আর্টিকেল a আর একবচন movie। see-এর past রূপ saw।"],
["or","আমরা পিৎজা খেয়েছি","We ate pizza","eated","eat-এর past রূপ ate।"],
["or","আমি বন্ধুদের সঙ্গে দেখা করেছি","I met my friends","friend meet","একাধিক বন্ধু, তাই বহুবচন friends।"],
["fi","I __ to Jeju last year.","আমি গত বছর জেজু গিয়েছিলাম","went","go|goed|gone","go-এর past রূপ went।"],
["fi","What did you __?","তুমি কী খেয়েছ?","eat","ate|eaten|eating","did-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["fi","She __ a new phone.","সে (মেয়ে) একটা নতুন ফোন কিনেছে","bought","buyed|buy|buys","buy-এর past রূপ bought।"],
["ty","আমি বুসান গিয়েছিলাম","I went to Busan","went · to · Busan","go","go-এর past রূপ went।"],
["ty","আমি একটা বই কিনেছি","I bought a book","bought · book — আর্টিকেল a","the","বই একটা, তাই আর্টিকেল a বসে।"],
["ty","আমি আমার বন্ধুদের সঙ্গে দেখা করেছি","I met my friends|I saw my friends","met · my · friend — বহুবচন","friend","একাধিক বন্ধু, তাই বহুবচন friends।"]]},
{ id:"the", title:"আবার the: প্রথমবার a, পরের বার the", blurb:"প্রথমবার বললে a; দুজনেই জিনিসটা চিনলে the।", deck:"পথ জিজ্ঞাসা ও যাতায়াত", body:`
<p>আর্টিকেল (a, an, the) এক দিনে আয়ত্তে আসে না, কারণ বাংলায় এমন আলাদা শব্দ নেই। বাংলার -টা / -টি অনেক সময় the-এর কাজ করে ("বইটা"), কিন্তু সব জায়গায় মেলে না। এখানে <b>the</b> কখন বসে আর কখন <b>কিছুই বসে না</b>, তা আবার অনুশীলন করুন।</p>
<h3>প্রথমবার a, আবার বললে the</h3>
<p>শ্রোতা জিনিসটার কথা প্রথম শুনলে a; একটু আগে বলা হয়েছে বলে এখন চেনেন, তাহলে the।</p>
{{ex:I bought a shirt. The shirt is blue.|আই ˈবট আ ˈশার্ট। দ়া ˈশার্ট ইজ় ˈব্লূ|আমি একটা শার্ট কিনেছি। শার্টটা নীল}}
<h3>পরিস্থিতি থেকেই বোঝা গেলে the</h3>
<p>এই ঘরের জানালা, কাছের স্টেশন: কোনটার কথা বলছেন তা স্পষ্ট হলে শুরু থেকেই the।</p>
{{ex:Can you open the window?|কান ইউ ˈঔপান দ়া ˈওয়িন্ডৌ|জানালাটা একটু খুলবেন?}}{{ex:Where's the subway station?|ˈওয়ের্জ় দ়া ˈসাব্ওয়েই ˈস্টেইশান|সাবওয়ে স্টেশনটা কোথায়?}}{{ex:The sun is hot today.|দ়া ˈসান ইজ় ˈহাːট টাˈডেই|আজ রোদ খুব কড়া}}
<h3>যেখানে -টা আছে, কিন্তু the বসে না</h3>
<p>বাংলায় "আমার বইটা", "ঢাকা শহরটা" বলা যায়। ইংরেজিতে my, your-এর সঙ্গে the বসে না; মানুষ, শহর আর বেশির ভাগ দেশের নামের আগেও বসে না: <b>the my book</b> ✗ → <b>my book</b> ✓, <b>the Dhaka</b> ✗ → <b>Dhaka</b> ✓</p>
<h3>আর্টিকেল ছাড়া বাঁধা কথা</h3>
<p>জায়গা, যাতায়াত আর খাওয়ার কিছু চেনা কথা আর্টিকেল ছাড়াই হয়। এগুলো আস্ত মুখস্থ করুন।</p>
{{ex:I go to work by bus.|আই ˈগৌ টা ˈওয়ার্ক বাই ˈবাস|আমি বাসে করে কাজে যাই}}{{ex:I'm at home.|আইম আট ˈহৌম|আমি বাসায় আছি}}{{ex:I go to bed at eleven.|আই ˈগৌ টা ˈবেড আট ইˈলেভ়ান|আমি এগারোটায় ঘুমাতে যাই}}
<div class="tip">নিজেকে জিজ্ঞেস করুন: "শ্রোতা কি জানেন <b>কোনটা</b>?" জানলে the, না জানলে a।</div>`,
check:[["I have a cat. ___ cat is white. শূন্যস্থানে কী বসবে?",["A","An","The","(কিছুই না)"],2,"একটু আগে বলা সেই বিড়ালটা, তাই the।"],["I go to ___ work by bus. শূন্যস্থানে কী বসবে?",["a","the","an","(কিছুই না)"],3,"go to work-এ আর্টিকেল বসে না।"],["এই ঘরের জানালাটা খুলতে বলবেন। কোনটি ঠিক?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"দুজনেই জানেন কোন জানালা, তাই the।"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","একটু আগে বলা সেই শার্টটা, তাই the।"],
["mc","\"স্টেশনটা কোথায়?\" ইংরেজিতে?","Where's the station?","Where's a station?","Where's station?","Where the station?","কাছের সেই স্টেশনটা, তাই the।"],
["mc","নিচের কোন বাক্যটি ঠিক?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work আর by bus-এ আর্টিকেল বসে না।"],
["mc","\"সূর্য গরম\" ইংরেজিতে?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","যা একটাই আছে, তার আগে the বসে।"],
["mc","\"আমি বাসায় আছি\" ইংরেজিতে?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home-এ আর্টিকেল বসে না।"],
["or","জানালাটা একটু খুলবেন?","Can you open the window","a windows","দুজনেই জানেন কোন জানালা, তাই আর্টিকেল the।"],
["or","আমি বাসে করে কাজে যাই","I go to work by bus","the a","go to work আর by bus-এ আর্টিকেল বসে না।"],
["or","কুকুরটা বড়","The dog is big","A dogs","আগেই বলা সেই কুকুরটা, তাই আর্টিকেল the।"],
["fi","I saw a movie. __ movie was great.","আমি একটা সিনেমা দেখেছি। সিনেমাটা দারুণ ছিল","The","A|An|Some","একটু আগে বলা সেই সিনেমাটা, তাই the।"],
["fi","Where's __ bathroom?","বাথরুমটা কোথায়?","the","a|an|some","এই ভবনের নির্দিষ্ট বাথরুমটা, তাই the।"],
["fi","I have __ idea.","আমার একটা বুদ্ধি আছে","an","a|the|some","প্রথমবার বলা একটা জিনিস, আর idea স্বরধ্বনি দিয়ে শুরু, তাই an।"],
["ty","দরজাটা একটু বন্ধ করবেন? (Can you …?)","Can you close the door|Could you close the door","can you · close · door — আর্টিকেল the","a","দুজনেই জানেন কোন দরজা, তাই আর্টিকেল the।"],
["ty","স্টেশনটা কোথায়?","Where is the station|Where's the station","where · station — আর্টিকেল the","a","কাছের সেই স্টেশনটা, তাই আর্টিকেল the।"],
["ty","আমি বাসায় আছি","I'm at home|I'm home","I'm · at · home — আর্টিকেল ছাড়া","the","home-এর আগে আর্টিকেল বসে না।"]]},
{ id:"adjectives", title:"বিশেষণ ও তুলনা: bigger, more expensive, the best", blurb:"বিশেষণ বিশেষ্যের আগে। তুলনায় -er / more; সবচেয়ে বোঝাতে the -est / the most।", deck:"কেনাকাটা ও বিল", body:`
<p>বিশেষণ (adjective) বাংলার মতোই বিশেষ্যের <b>আগে</b> বসে ("বড় ব্যাগ" = big bag), অথবা be ক্রিয়ার <b>পরে</b>। তবে বাংলায় "ব্যাগটা বড়" বলতে ক্রিয়া লাগে না; ইংরেজিতে is বাদ দেওয়া যায় না। কেনাকাটায় দরকারি তুলনার রূপও এখানে শিখে নিন।</p>
{{ex:a big bag|আ ˈবিগ ˈব্যাগ|একটা বড় ব্যাগ}}{{ex:This bag is big.|ˈদ়িস ˈব্যাগ ইজ় ˈবিগ|এই ব্যাগটা বড়}}{{ex:It's too small.|ইট্স ˈটূ ˈস্মল|এটা বেশি ছোট}}
<h3>তুলনা: -er অথবা more</h3>
<p>বাংলায় তুলনা হয় আলাদা শব্দ দিয়ে: "আরও বড়", "এর চেয়ে দামি"। ইংরেজিতে ছোট শব্দের শেষে <b>-er</b>, লম্বা শব্দের আগে <b>more</b>; দুটো একসঙ্গে কখনো নয়। "চেয়ে" = <b>than</b>।</p>
<div class="tbl"><table><tr><th>মূল রূপ</th><th>তুলনার রূপ</th><th>সবচেয়ে-র রূপ</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|ˈদ়িস ˈওয়ান ইজ় ˈচীপার|এটা আরও সস্তা}}{{ex:It's more expensive than that one.|ইট্স ˈমর ইক্ˈস্পেন্সিভ় দ়ান ˈদ়্যাট ˈওয়ান|এটা ওটার চেয়ে দামি}}{{ex:Do you have a bigger size?|ডা ইউ ˈহ্যাভ় আ ˈবিগার ˈসাইজ়|আরও বড় সাইজ আছে?}}
<h3>সবচেয়ে-র রূপের আগে the</h3>
{{ex:This is the best restaurant here.|ˈদ়িস ইজ় দ়া ˈবেস্ট ˈরেস্টারাːন্ট ˈহির|এখানে এটাই সবচেয়ে ভালো রেস্টুরেন্ট}}{{ex:Which is the cheapest?|ˈওয়িচ ইজ় দ়া ˈচীপিস্ট|কোনটা সবচেয়ে সস্তা?}}
<div class="tip">সবচেয়ে বেশি যে ভুল হয়: <b>more cheaper</b>, <b>more better</b>, <b>more good</b> ✗ → <b>cheaper</b>, <b>better</b> ✓ বাংলার "আরও" ভেবে more বসাবেন না: -er থাকলে more লাগে না।</div>`,
check:[["big-এর তুলনার রূপ?",["more big","biger","bigger","most big"],2,"ছোট শব্দে -er বসে; শেষের ব্যঞ্জনবর্ণ দুবার লেখা হয়।"],["This is ___ expensive than that. শূন্যস্থানে কী বসবে?",["more","most","much","very"],0,"লম্বা শব্দের তুলনার রূপে more বসে।"],["good-এর সবচেয়ে-র রূপ?",["the goodest","the most good","the better","the best"],3,"good-এর তিন রূপ: good – better – the best।"]],
practice:[
["mc","cheap-এর তুলনার রূপ?","cheaper","more cheap","cheapper","most cheap","ছোট শব্দে -er বসে।"],
["mc","\"এটা আরও দামি\" ইংরেজিতে?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","লম্বা শব্দের আগে more বসে।"],
["mc","\"আরও বড় সাইজ আছে?\" ইংরেজিতে?","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","ক্রম হলো আর্টিকেল + বিশেষণ + বিশেষ্য।"],
["mc","good-এর তুলনার রূপ?","better","gooder","more good","best","good-এর তিন রূপ: good – better – best।"],
["mc","\"এটাই সবচেয়ে ভালো রেস্টুরেন্ট\" ইংরেজিতে?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","সবচেয়ে-র রূপের আগে the বসে।"],
["or","আরও বড় সাইজ আছে?","Do you have a bigger size","the sizes","যেকোনো একটা সাইজ খুঁজছেন, তাই আর্টিকেল a।"],
["or","এটাই সবচেয়ে সস্তা","This is the cheapest","a cheaper","সবচেয়ে-র রূপের আগে আর্টিকেল the বসে।"],
["or","এটা ওটার চেয়ে সস্তা","This is cheaper than that","more","-er থাকলে more বসে না।"],
["fi","It's __ small.","এটা বেশি ছোট","too","much|more|most","\"দরকারের চেয়ে বেশি\" বোঝাতে too।"],
["fi","This is cheaper __ that one.","এটা ওটার চেয়ে সস্তা","than","then|that|more","\"চেয়ে\" = than।"],
["fi","It's the __ expensive one.","এটাই সবচেয়ে দামি","most","more|much|very","লম্বা শব্দের সবচেয়ে-র রূপ: the most।"],
["ty","(দোকানিকে: Do you have …?) আরও ছোট সাইজ আছে?","Do you have a smaller size","do you have · smaller · size — আর্টিকেল a","the","যেকোনো একটা সাইজ খুঁজছেন, তাই আর্টিকেল a।"],
["ty","এটাই সবচেয়ে ভালো","This is the best|This one is the best","the · best — আর্টিকেল the","a","সবচেয়ে-র রূপের আগে আর্টিকেল the বসে।"],
["ty","এটা আরও সস্তা","This is cheaper|This one is cheaper","cheap — তুলনার রূপ","more","ছোট শব্দে -er বসে; সঙ্গে more নয়।"]]},
{ id:"going-to", title:"পরিকল্পনা বলা: be going to", blurb:"আগে থেকেই ঠিক করা কাজ: be going to + ক্রিয়া।", deck:"হালকা আলাপ", body:`
<p>বাংলার "করব" দিয়ে পরিকল্পনা, প্রতিশ্রুতি, হঠাৎ নেওয়া সিদ্ধান্ত সবই বোঝায়। ইংরেজিতে <b>আগে থেকেই ঠিক করা পরিকল্পনা</b> বলতে <b>be + going to + ক্রিয়ার মূল রূপ</b> বসে।</p>
{{ex:I'm going to visit Cox's Bazar.|আইম ˈগৌইং টা ˈভ়িজ়িট ˈকাːক্সিজ় বাˈজ়াːর|আমি কক্সবাজার বেড়াতে যাব}}{{ex:She's going to buy a car.|শিজ় ˈগৌইং টা ˈবাই আ ˈকাːর|সে (মেয়ে) একটা গাড়ি কিনবে}}{{ex:We're going to have dinner.|ওয়ির ˈগৌইং টা ˈহ্যাভ় ˈডিনার|আমরা রাতের খাবার খাব}}
<h3>না-বাচক বাক্য ও প্রশ্ন</h3>
{{ex:I'm not going to go.|আইম ˈনাːট ˈগৌইং টা ˈগৌ|আমি যাব না}}{{ex:Are you going to come?|আর ইউ ˈগৌইং টা ˈকাম|তুমি আসবে?}}{{ex:What are you going to do this weekend?|ˈওয়াট আর ইউ ˈগৌইং টা ˈডূ ˈদ়িস ˈওয়ীকেন্ড|এই উইকেন্ডে তুমি কী করবে?}}
<h3>চোখে যা দেখছেন, তা থেকে অনুমান</h3>
{{ex:It's going to rain.|ইট্স ˈগৌইং টা ˈরেইন|বৃষ্টি হবে (আকাশ দেখেই বোঝা যাচ্ছে)}}
<h3>সঙ্গে যে সময় বোঝানো শব্দ বসে</h3>
<p>tomorrow (আগামীকাল), tonight (আজ রাতে), this weekend (এই উইকেন্ডে), next week (আগামী সপ্তাহে) বাক্যের শেষে বসান।</p>
<div class="tip">বলার সময় going to প্রায়ই <b>gonna</b>-র মতো শোনায়। আর be ক্রিয়া বাদ দেবেন না: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["\"আমি আগামীকাল আমার বন্ধুর সঙ্গে দেখা করব\" ইংরেজিতে?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"ছাঁচটা হলো be + going to + ক্রিয়ার মূল রূপ।"],["She ___ going to study. শূন্যস্থানে কী বসবে?",["am","are","is","be"],2,"she-এর সঙ্গে is বসে।"],["\"এই উইকেন্ডে তুমি কী করবে?\" ইংরেজিতে?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"ক্রম হলো প্রশ্নবোধক শব্দ + be + কর্তা + going to।"]],
practice:[
["mc","\"আমি বুসান যাব\" ইংরেজিতে?","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","ছাঁচটা হলো be + going to + ক্রিয়ার মূল রূপ।"],
["mc","They ___ going to come.","are","is","am","be","they-এর সঙ্গে are বসে।"],
["mc","\"বৃষ্টি হবে\" ইংরেজিতে?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["mc","\"আমি যাব না\" ইংরেজিতে?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","be ক্রিয়ার পরে not বসে।"],
["mc","\"তুমি আসবে?\" ইংরেজিতে?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","প্রশ্নে be ক্রিয়া সামনে চলে আসে।"],
["or","সে (মেয়ে) একটা গাড়ি কিনবে","She's going to buy a car","the cars","গাড়ি একটা, তাই আর্টিকেল a আর একবচন car।"],
["or","আমি আমার বন্ধুদের সঙ্গে দেখা করব","I'm going to meet my friends","friend","একাধিক বন্ধু, তাই বহুবচন friends।"],
["or","আমরা রাতের খাবার খাব","We're going to have dinner","a","dinner-এর মতো খাবারের বেলার নামের আগে আর্টিকেল বসে না।"],
["fi","I'm going __ study tonight.","আমি আজ রাতে পড়ব","to","for|at|will","going to + ক্রিয়ার মূল রূপ।"],
["fi","__ you going to come?","তুমি আসবে?","Are","Do|Is|Will","you-এর সঙ্গে Are বসে।"],
["fi","It's going to __ tomorrow.","আগামীকাল বৃষ্টি হবে","rain","rains|raining|rained","going to-এর পরে ক্রিয়ার মূল রূপ বসে।"],
["ty","(আগেই ঠিক করেছেন) আমি একটা সিনেমা দেখব","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — আর্টিকেল a","the","যেকোনো একটা সিনেমা, তাই আর্টিকেল a।"],
["ty","(পরিকল্পনা জানতে চান) তুমি কী করবে?","What are you going to do","what · going to · do","will","পরিকল্পনা জানতে be going to দিয়ে প্রশ্ন করুন।"],
["ty","(আগেই ঠিক করেছেন) আমি আমার বন্ধুদের সঙ্গে দেখা করব","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — বহুবচন","friend","একাধিক বন্ধু, তাই বহুবচন friends।"]]},
{ id:"joining", title:"বাক্য জোড়া লাগানো: and, but, or, so, because", blurb:"দুটো ছোট বাক্য এক করুন। so-র পরে ফল, because-এর পরে কারণ।", deck:"অনুভূতি ও প্রতিক্রিয়া", body:`
<p>শুধু ছোট ছোট বাক্য বললে কথা কাটা কাটা শোনায়। এই পাঁচটি সংযোজক শব্দ দিয়ে বাক্য জুড়লে কথা অনেক স্বাভাবিক হয়।</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|আই ˈলাইক ˈকফি আন্ড ˈটী|আমি কফি আর চা পছন্দ করি}}{{ex:I'm tired but happy.|আইম ˈটাইআর্ড বাট ˈহ্যাপি|আমি ক্লান্ত, কিন্তু খুশি}}{{ex:Coffee or tea?|ˈকফি আর ˈটী|কফি না চা?}}
<h3>so: তাই</h3>
<p>ক্রম হলো <b>কারণ + so + ফল</b>, বাংলার "তাই"-এর মতোই।</p>
{{ex:I was tired, so I went home.|আই ওয়াজ় ˈটাইআর্ড সৌ আই ˈওয়েন্ট ˈহৌম|আমি ক্লান্ত ছিলাম, তাই বাসায় চলে গেলাম}}
<h3>because: কারণ</h3>
<p>ক্রম হলো <b>ফল + because + কারণ</b>, বাংলার "কারণ"-এর মতোই।</p>
{{ex:I went home because I was tired.|আই ˈওয়েন্ট ˈহৌম বিকাজ় আই ওয়াজ় ˈটাইআর্ড|আমি বাসায় চলে গেলাম, কারণ আমি ক্লান্ত ছিলাম}}{{ex:I stayed home because it was raining.|আই ˈস্টেইড ˈহৌম বিকাজ় ইট ওয়াজ় ˈরেইনিং|আমি বাসায় ছিলাম, কারণ বৃষ্টি হচ্ছিল}}
<h3>too: -ও</h3>
{{ex:I like it too.|আই ˈলাইক ইট ˈটূ|আমারও এটা ভালো লাগে}}
<div class="tip">বাংলায় "যেহেতু … তাই" আর "যদিও … তবুও" জোড়ায় বসে। ইংরেজিতে একটাই যথেষ্ট: <b>Because I was tired, so I went home.</b> ✗ so আর because-এর যেকোনো একটা বেছে নিন। একইভাবে although আর but একসঙ্গে বসে না।</div>`,
check:[["I was sick, ___ I stayed home. শূন্যস্থানে কী বসবে?",["because","but","so","or"],2,"কারণের পরে ফল এলে so বসে।"],["I stayed home ___ I was sick. শূন্যস্থানে কী বসবে?",["because","so","but","and"],0,"ফলের পরে কারণ এলে because বসে।"],["\"কফি খাবেন, না চা?\" বোঝাতে কোনটি ঠিক?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"দুটোর মধ্যে একটা বেছে নিতে or।"]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","উল্টো কথা জুড়তে but।"],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","কারণের পরে ফল এলে so বসে।"],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","ফলের পরে কারণ এলে because বসে।"],
["mc","\"কফি না চা?\" ইংরেজিতে?","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","দুটোর মধ্যে একটা বোঝাতে or।"],
["mc","\"আমি ক্লান্ত, কিন্তু খুশি\" ইংরেজিতে?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","\"কিন্তু\" = but।"],
["or","আমি বিড়াল আর কুকুর পছন্দ করি","I like cats and dogs","cat dog","সব বিড়াল আর কুকুরের কথা সাধারণভাবে বললে বহুবচন: cats, dogs।"],
["or","একটা কফি আর একটা স্যান্ডউইচ দিন","A coffee and a sandwich please","the or","একটা করে অর্ডার করছেন, তাই দুটোর আগেই আর্টিকেল a।"],
["or","আমার খিদে পেয়েছিল, তাই খেয়েছি","I was hungry so I ate","because","কারণের পরে ফল এলে so বসে।"],
["fi","I'm tired __ happy.","আমি ক্লান্ত, কিন্তু খুশি","but","so|because|or","\"কিন্তু\" = but।"],
["fi","I stayed home __ it was raining.","আমি বাসায় ছিলাম, কারণ বৃষ্টি হচ্ছিল","because","so|but|or","ফলের পরে কারণ এলে because বসে।"],
["fi","Coffee __ tea?","কফি না চা?","or","so|but|because","দুটোর মধ্যে একটা বোঝাতে or।"],
["ty","আমি কফি আর চা পছন্দ করি","I like coffee and tea","like · coffee · and · tea — আর্টিকেল ছাড়া","a","সাধারণভাবে coffee, tea বললে আর্টিকেল বসে না।"],
["ty","আমি ক্লান্ত, কিন্তু খুশি","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","\"কিন্তু\" = but।"],
["ty","আমি কুকুর আর বিড়াল পছন্দ করি","I like dogs and cats|I like cats and dogs","dog · and · cat — বহুবচন","dog","সব কুকুর আর বিড়ালের কথা সাধারণভাবে বললে বহুবচন: dogs, cats।"]]},
{ id:"banglish", title:"বাংলিশ ফাঁদ: যে ইংরেজি দেশের বাইরে চলে না", blurb:"give an exam, cousin brother, ten lakh: দেশে সবাই বোঝে। বিদেশে কী বলবেন, তা শিখে নিন।", deck:"বাংলিশ ফাঁদ", body:`
<p>বাংলাদেশে আমরা যে ইংরেজি বলি, তার কিছু শব্দ আর বাক্য এসেছে সরাসরি বাংলা থেকে। এতে লজ্জার কিছু নেই: দেশে সবাই বোঝে, কাজও চলে। তবে দেশের বাইরের মানুষ অনেক সময় বোঝেন না, বা অন্য কিছু বোঝেন। নিয়মটা সহজ: দেশে যেমন চলছে চলুক; বিদেশিদের সঙ্গে কথা বলার সময় নিচের রূপগুলো বলুন।</p>
<h3>বাংলার ক্রিয়া সরাসরি বসালে</h3>
<p>বাংলায় পরীক্ষা "দিই", আর ওষুধ, চা, সিগারেট সবই "খাই"। ইংরেজিতে প্রতিটার ক্রিয়া আলাদা।</p>
<div class="tbl"><table><tr><th>বাংলায়</th><th>সরাসরি অনুবাদ করলে</th><th>বিদেশে বলুন</th></tr><tr><td>পরীক্ষা দেওয়া</td><td>give an exam</td><td class="k">take an exam</td></tr><tr><td>ওষুধ খাওয়া</td><td>eat medicine</td><td class="k">take medicine</td></tr><tr><td>চা খাওয়া</td><td>eat tea</td><td class="k">have tea / drink tea</td></tr><tr><td>সিগারেট খাওয়া</td><td>eat / drink a cigarette</td><td class="k">smoke</td></tr><tr><td>… নিয়ে আলোচনা করা</td><td>discuss about …</td><td class="k">discuss … (about ছাড়া)</td></tr><tr><td>… -এর সঙ্গে বিয়ে হওয়া</td><td>married with …</td><td class="k">married to …</td></tr><tr><td>ফিরে আসা</td><td>return back</td><td class="k">return / come back</td></tr></table></div>
{{ex:I took an exam yesterday.|আই ˈটুক আন ইগ্ˈজ়্যাম ˈইয়েস্টার্ডেই|আমি গতকাল একটা পরীক্ষা দিয়েছি}}{{ex:I took some medicine.|আই ˈটুক ˈসাম ˈমেডিসান|আমি ওষুধ খেয়েছি}}{{ex:Let's have tea.|ˈলেট্স ˈহ্যাভ় ˈটী|চলো চা খাই}}{{ex:He doesn't smoke.|হি ˈডাজ়ান্ট ˈস্মৌক|সে (ছেলে) সিগারেট খায় না}}{{ex:We discussed the plan.|ওয়ি ডিˈস্কাস্ট দ়া ˈপ্ল্যান|আমরা পরিকল্পনাটা নিয়ে আলোচনা করেছি}}
<p>give an exam শুনলে বিদেশিরা ভাবেন আপনি শিক্ষক, পরীক্ষা নিচ্ছেন। ক্রিয়া বদলানোর সঙ্গে আর্টিকেলও খেয়াল করুন: exam গণনাযোগ্য, তাই একটা পরীক্ষার আগে <b>an</b> লাগে; medicine সাধারণত গোনা হয় না, তাই <b>some medicine</b>।</p>
<h3>সময়, আত্মীয়, সংখ্যা আর পরিচয়</h3>
<div class="tbl"><table><tr><th>দেশে যা বলি</th><th>বিদেশে বলুন</th><th>মনে রাখুন</th></tr><tr><td>today morning</td><td class="k">this morning</td><td>"আজ সকালে" সরাসরি অনুবাদ করলে চলে না</td></tr><tr><td>yesterday night</td><td class="k">last night</td><td>"গতকাল রাতে" = last night</td></tr><tr><td>cousin brother / cousin sister</td><td class="k">cousin</td><td>চাচাতো, মামাতো, খালাতো, ফুফাতো ভাই-বোন সবাই cousin</td></tr><tr><td>ten lakh / two crore</td><td class="k">one million / twenty million</td><td>লাখ আর কোটি দেশের বাইরে অচেনা: 1 লাখ = a hundred thousand, 1 কোটি = ten million</td></tr><tr><td>What is your good name?</td><td class="k">What's your name?</td><td>"ভালো নাম" থেকে এসেছে; পুরো নাম জানতে চাইলে your full name</td></tr><tr><td>Myself Rafi.</td><td class="k">I'm Rafi.</td><td>নিজের পরিচয় I'm … দিয়ে দিন</td></tr><tr><td>off day</td><td class="k">day off</td><td>শব্দের ক্রম উল্টো</td></tr></table></div>
{{ex:I woke up late this morning.|আই ˈওয়ৌক ˈআপ ˈলেইট ˈদ়িস ˈমর্নিং|আজ সকালে আমি দেরিতে উঠেছি}}{{ex:I didn't sleep well last night.|আই ˈডিডান্ট ˈস্লীপ ˈওয়েল ˈল্যাস্ট ˈনাইট|গতকাল রাতে আমার ভালো ঘুম হয়নি}}{{ex:I have a cousin in Sylhet.|আই ˈহ্যাভ় আ ˈকাজ়ান ইন সিল্ˈহেট|সিলেটে আমার একজন কাজিন আছে}}{{ex:He's my older brother.|হিজ় মাই ˈঔল্ডার ˈব্রাদ়ার|সে আমার বড় ভাই}}{{ex:One million taka.|ˈওয়ান ˈমিলিয়ান ˈটাːকা|10 লাখ টাকা}}{{ex:I'm Rafi.|আইম ˈরাːফি|আমি রাফি}}{{ex:Tomorrow is my day off.|টাˈমাːরৌ ইজ় মাই ˈডেই ˈঅফ|আগামীকাল আমার ছুটি}}
<p>ইংরেজিতে "বড় ভাই", "ছোট বোন"-এর আলাদা শব্দ নেই; দরকার হলে <b>older</b> / <b>younger</b> বসান: my older brother, my younger sister। আর cousin গণনাযোগ্য, তাই একজন হলে <b>a cousin</b>, একাধিক হলে <b>cousins</b>।</p>
<h3>যেসব শব্দের অর্থ বাইরে আলাদা</h3>
<div class="tbl"><table><tr><th>দেশে</th><th>বিদেশে বলুন</th><th>সরাসরি বললে যা বোঝায়</th></tr><tr><td>হোটেল (খাওয়ার জায়গা)</td><td class="k">restaurant</td><td>hotel মানে শুধু থাকার জায়গা</td></tr><tr><td>কারেন্ট চলে গেছে</td><td class="k">The power is out.</td><td>current is gone বা load-shedding বেশির ভাগ দেশে অচেনা</td></tr><tr><td>কোচিং</td><td class="k">tutoring / a prep course</td><td>coaching বললে সাধারণত খেলার প্রশিক্ষণ বোঝায়</td></tr><tr><td>মার্কস, রেজাল্ট</td><td class="k">grades / score</td><td>আমেরিকায় marks-এর জায়গায় grades বা score বলে</td></tr><tr><td>এইচএসসি পাস করেছি</td><td class="k">I finished high school.</td><td>SSC, HSC নামগুলো বাইরে অচেনা</td></tr><tr><td>ব্যাচেলর (ভাড়াটিয়া)</td><td class="k">single</td><td>bachelor মানে অবিবাহিত পুরুষ; শব্দটা এখন কম চলে</td></tr><tr><td>মেস</td><td class="k">a shared apartment</td><td>mess মানে অগোছালো, নোংরা অবস্থা</td></tr></table></div>
{{ex:Let's eat at a restaurant.|ˈলেট্স ˈঈট আট আ ˈরেস্টারাːন্ট|চলো রেস্টুরেন্টে খাই}}{{ex:The power is out.|দ়া ˈপাউআর ইজ় ˈআউট|কারেন্ট চলে গেছে}}{{ex:I finished high school last year.|আই ˈফিনিশ্ট ˈহাই ˈস্কূল ˈল্যাস্ট ˈইয়ির|আমি গত বছর এইচএসসি পাস করেছি}}
<p>lift, flat, petrol, biscuit, torch, mobile ভুল নয়: এগুলো ব্রিটিশ ইংরেজি। আমেরিকায় বলে <b>elevator, apartment, gas, cookie, flashlight, cell phone</b>। এই কোর্সে আমেরিকান শব্দটা শেখানো হয়।</p>
<h3>ব্যাকরণের চারটি চেনা অভ্যাস</h3>
<p>এগুলো দেশের ইংরেজিতে প্রায়ই শোনা যায়; বিদেশে পরের রূপটা বলুন।</p>
<p><b>informations, advices, equipments, furnitures</b> → <b>information, advice, equipment, furniture</b>। এগুলো গণনাযোগ্য নয়: শেষে -s বসে না, আগে a / an-ও বসে না।</p>
<p><b>more better, more easier</b> → <b>better, easier</b>। -er থাকলে more লাগে না।</p>
<p><b>I am knowing him. I am wanting water.</b> → <b>I know him. I want some water.</b> অবস্থা বোঝানো ক্রিয়ায় -ing বসে না।</p>
<p><b>I have fever. My head is paining.</b> → <b>I have a fever. I have a headache.</b> অসুখের এই নামগুলোর আগে আর্টিকেল a বসে।</p>
{{ex:I need some information.|আই ˈনীড ˈসাম ইন্ফার্ˈমেইশান|আমার কিছু তথ্য দরকার}}{{ex:She gave me good advice.|শি ˈগেইভ় মি ˈগুড আড্ˈভ়াইস|সে (মেয়ে) আমাকে ভালো পরামর্শ দিয়েছে}}{{ex:This one is better.|ˈদ়িস ˈওয়ান ইজ় ˈবেটার|এটা আরও ভালো}}{{ex:I know him.|আই ˈনৌ হিম|আমি তাকে (ছেলে) চিনি}}{{ex:I have a fever.|আই ˈহ্যাভ় আ ˈফীভ়ার|আমার জ্বর হয়েছে}}{{ex:I have a headache.|আই ˈহ্যাভ় আ ˈহেডেইক|আমার মাথা ব্যথা করছে}}
<div class="tip">এসব কথা দেশে বললে কোনো সমস্যা নেই। বিদেশিদের সঙ্গে কথা বলার আগে শুধু একবার ভাবুন: "কথাটা কি বাংলা থেকে সরাসরি এসেছে?" এলে বদলে নিন: <b>I gave an exam.</b> → <b>I took an exam.</b> / <b>my cousin brother</b> → <b>my cousin</b></div>`,
check:[["\"আমি গতকাল একটা পরীক্ষা দিয়েছি\" বিদেশে কীভাবে বলবেন?",["I gave an exam yesterday.","I took an exam yesterday.","I did give exam yesterday.","I took exam yesterday."],1,"পরীক্ষা দেওয়া = take an exam; give an exam বললে মনে হয় আপনি পরীক্ষা নিচ্ছেন।"],["দেশের বাইরে কোন বাক্যটি স্বাভাবিক শোনায়?",["I need some informations.","She gave me an advice.","We bought new furnitures.","I need some information."],3,"information গণনাযোগ্য নয়: শেষে -s বসে না, আগে a / an-ও বসে না।"],["\"আমার চাচাতো ভাই ঢাকায় থাকে\" বিদেশে কীভাবে বলবেন?",["My cousin lives in Dhaka.","My cousin brother lives in Dhaka.","My cousin brother live in Dhaka.","My brother cousin lives in Dhaka."],0,"চাচাতো, মামাতো ভাই-বোন সবাই cousin; সঙ্গে brother বসে না।"]],
practice:[
["mc","\"আমি ওষুধ খেয়েছি\" বিদেশে কীভাবে বলবেন?","I took some medicine.","I ate some medicine.","I drank some medicine.","I took a medicines.","ওষুধ খাওয়া = take medicine; eat নয়।"],
["mc","দেশের বাইরে \"10 লাখ টাকা\" কীভাবে বলবেন?","one million taka","ten lakh taka","ten lakhs taka","one crore taka","লাখ দেশের বাইরে অচেনা: 10 লাখ = one million।"],
["mc","\"গতকাল রাতে\" বিদেশে কীভাবে বলবেন?","last night","yesterday night","today night","past night","\"গতকাল রাতে\" = last night; \"আজ সকালে\" = this morning।"],
["mc","দেশের বাইরে কোন বাক্যটি স্বাভাবিক শোনায়?","This one is better.","This one is more better.","This one is more good.","This one is gooder.","good-এর তুলনার রূপ better; সঙ্গে more বসে না।"],
["mc","বিদেশে নতুন কারও নাম জানতে চাইলে কোনটি সবচেয়ে স্বাভাবিক?","What's your name?","What is your good name?","Your good name, please?","Who is your name?","good name কথাটা বাংলার \"ভালো নাম\" থেকে এসেছে; বাইরে শুধু name বলুন।"],
["or","আমি গতকাল একটা পরীক্ষা দিয়েছি","I took an exam yesterday","gave a","পরীক্ষা দেওয়া = take an exam। exam স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an, a নয়।"],
["or","আমার কিছু তথ্য দরকার","I need some information","informations an","information গণনাযোগ্য নয়: শেষে -s বসে না, আগে আর্টিকেল an-ও বসে না।"],
["or","আমার কাজিনরা ঢাকায় থাকে","My cousins live in Dhaka","cousin brothers","একাধিক কাজিন, তাই বহুবচন cousins; সঙ্গে brothers বসে না।"],
["or","আজ সকালে আমি চা খেয়েছি","I had tea this morning","ate today","চা খাওয়া = have tea; \"আজ সকালে\" = this morning।"],
["fi","We need new __.","আমাদের নতুন যন্ত্রপাতি দরকার","equipment","equipments|an equipment|equipmentes","equipment গোনা যায় না, তাই শেষে -s বসে না।"],
["fi","She is married __ a doctor.","তার (মেয়ে) বিয়ে হয়েছে একজন ডাক্তারের সঙ্গে","to","with|by|at","বাংলায় \"সঙ্গে\" হলেও ইংরেজিতে married to।"],
["fi","Tomorrow is my day __.","আগামীকাল আমার ছুটির দিন","off","of|up|leave","ছুটির দিন = day off; off day নয়।"],
["ty","সে (মেয়ে) আমাকে ভালো পরামর্শ দিয়েছে","She gave me good advice|She gave me some good advice|She has given me good advice|She has given me some good advice","gave · good · advice — আর্টিকেল ছাড়া","advices an","advice গণনাযোগ্য নয়: আগে আর্টিকেল an বসে না, শেষে -s-ও বসে না।"],
["ty","সিলেটে আমার একজন কাজিন আছে","I have a cousin in Sylhet|I have one cousin in Sylhet|I've got a cousin in Sylhet","have · cousin · in Sylhet — আর্টিকেল a","the brother","cousin গণনাযোগ্য আর এখানে একজন, তাই আর্টিকেল a; সঙ্গে brother বসে না।"],
["ty","আমার জ্বর হয়েছে","I have a fever|I've got a fever","have · fever — আর্টিকেল a","the am","জ্বর বোঝাতে a fever: আর্টিকেল a বাদ দেওয়া যায় না।"],
["ty","আমি তাকে (ছেলে) চিনি","I know him","know · him — -ing ছাড়া","knowing am","know অবস্থা বোঝায়, তাই I am knowing নয়, I know।"]]},
];
