/* Practice sets for the bn-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Bengali; answers are English (same English side as ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (docs/profiles/bn.md section 7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names one of the three profile keywords. */

module.exports = {
  alphabet: [
    { t: "mc", q: "কোন অক্ষরের নাম শুনতে হুবহু see (দেখা)-র মতো?", o: ["C", "S", "Z", "K"], why: "C-এর নাম see-র মতোই শোনায়। S-এর নাম \"এস\", Z-এর নাম zee, আর K-এর নাম \"কেই\"।" },
    { t: "mc", q: "Q-এর ঠিক পরের অক্ষর কোনটি?", o: ["R", "P", "S", "O"], why: "ক্রমটা হলো …O, P, Q, R, S…। Q-এর পরে আসে R।" },
    { t: "mc", q: "কোনটি ঠিক?", o: ["an M", "a M", "an B", "an U"], why: "M-এর নাম \"এম\" স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an। B-এর নাম ব্যঞ্জনধ্বনি দিয়ে শুরু, তাই a B; U-এর নাম \"ইউ\" ধ্বনি দিয়ে শুরু, তাই a U।" },
    { t: "mc", q: "নিচের কোনটি স্বরবর্ণ (vowel)?", o: ["U", "R", "S", "W"], why: "ইংরেজির স্বরবর্ণ পাঁচটি: A, E, I, O, U। R, S আর W ব্যঞ্জনবর্ণ।" },
    { t: "mc", q: "W-এর ইংরেজি নাম কী?", o: ["double u", "double v", "u u", "v v"], why: "দেখতে দুইটা V-এর মতো হলেও নাম double u, মানে \"দুইটা U\"।" },

    { t: "order", p: "ওটার বানান কী?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell-এর মতো ক্রিয়া দিয়ে প্রশ্ন করতে শুরুতে do বসে। কর্তা you, তাই does নয়; আর spell থাকে মূল রূপে।" },
    { t: "order", p: "আমার নাম S দিয়ে শুরু", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S-এর নাম \"এস\" স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an। কর্তা my name একটি জিনিস, তাই starts।" },
    { t: "order", p: "hello-তে দুইটা L আছে", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "L দুইটা, তাই বহুবচন Ls; আর বহুবচনের সঙ্গে is নয়, are।" },

    { t: "fill", q: "How do you __ your name?", p: "আপনার নামের বানান কী?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "do-এর পরে ক্রিয়ার মূল রূপ বসে: How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "এটা B দিয়ে শুরু", a: ["with"], o: ["by", "for", "in"], why: "\"কিছু দিয়ে শুরু হওয়া\" হলো start with।" },
    { t: "fill", q: "That's M __ in Mary.", p: "এটা Mary-র M", a: ["as"], o: ["so", "than", "of"], why: "অক্ষর বোঝাতে একটা শব্দ জুড়ে দিলে as in বসে: M as in Mary।" },

    { t: "type", p: "(আর্টিকেলসহ) এটা A দিয়ে শুরু", a: ["It starts with an A", "It begins with an A"], hint: "start · A — A-এর নাম স্বরধ্বনি দিয়ে শুরু", x: ["the", "start"], why: "A-এর নাম স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an। কর্তা it, তাই starts।" },
    { t: "type", p: "(you আর spell দিয়ে) আপনার নামের বানান কী?", a: ["How do you spell your name"], hint: "spell · your name — do দিয়ে প্রশ্ন", x: ["spelling", "does"], why: "spell-এর মতো ক্রিয়া দিয়ে প্রশ্ন করতে do লাগে। কর্তা you, তাই does নয়।" },
    { t: "type", p: "(It দিয়ে শুরু করুন) এতে দুইটা T আছে", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — দুইটা, তাই বহুবচন", x: ["T", "have"], why: "T দুইটা, তাই বহুবচন Ts। কর্তা it, তাই have নয়, has।" }
  ],

  pron: [
    { t: "mc", q: "কোন শব্দের অর্থ \"চাল, ভাত\"?", o: ["rice", "lice", "rise", "nice"], why: "R দিয়ে শুরু rice মানে চাল বা ভাত। L দিয়ে বললে হয়ে যায় lice (উকুন)। বাংলায় র আর ল দুটোই আছে; শুধু R-এ জিভ টোকা দেবে না।" },
    { t: "mc", q: "কোন শব্দের অর্থ \"ফ্যান, পাখা\"?", o: ["fan", "pan", "van", "ban"], why: "F-এ উপরের দাঁত নিচের ঠোঁটে রেখে শুধু বাতাস ছাড়ুন। দুই ঠোঁট বন্ধ করে P বললে হয়ে যায় pan (কড়াই)।" },
    { t: "mc", q: "কোন শব্দের অর্থ \"ভাবা, মনে করা\"?", o: ["think", "sink", "thing", "pink"], why: "TH-এ জিভের ডগা দুই পাটি দাঁতের মাঝে একটু বেরিয়ে থাকে। s বললে হয়ে যায় sink (বেসিন)।" },
    { t: "mc", q: "কোন শব্দের অর্থ \"ভোট দেওয়া\"?", o: ["vote", "boat", "goat", "bought"], why: "V-তে উপরের দাঁত নিচের ঠোঁটে লাগে আর গলা কাঁপে। দুই ঠোঁট বন্ধ করে B বললে হয়ে যায় boat (নৌকা)।" },
    { t: "mc", q: "কোন শব্দের অর্থ \"ডান দিক\"?", o: ["right", "light", "fight", "bright"], why: "R দিয়ে শুরু right মানে ডান দিক। L দিয়ে শুরু light মানে আলো।" },

    { t: "order", p: "এটা একটা কলা", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana ব্যঞ্জনধ্বনি দিয়ে শুরু, তাই আর্টিকেল a। this লেখা হয় TH দিয়ে।" },
    { t: "order", p: "তিনটি গাছ", a: ["three", "trees"], x: ["tree", "free"], why: "তিনটি, তাই বহুবচনের -s বসিয়ে trees। three শুরু TH দিয়ে, tree শুরু TR দিয়ে।" },
    { t: "order", p: "আমি কফি পছন্দ করি", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee-তে F: উপরের দাঁত নিচের ঠোঁটে। P দিয়ে লিখলে হয়ে যায় copy (নকল)।" },

    { t: "fill", q: "I eat __ice every day.", p: "আমি রোজ ভাত খাই", a: ["r"], o: ["l", "n", "w"], why: "ভাত হলো R দিয়ে শুরু rice। L লিখলে হয়ে যায় lice (উকুন)।" },
    { t: "fill", q: "I __ink so.", p: "আমার তা-ই মনে হয়", a: ["th"], o: ["s", "t", "p"], why: "think শুরু TH দিয়ে। s লিখলে হয়ে যায় sink (বেসিন)।" },
    { t: "fill", q: "This is my __.", p: "এটা আমার ব্যাগ", a: ["bag"], o: ["back", "bug", "beg"], why: "ব্যাগ হলো g দিয়ে শেষ হওয়া bag। শেষে k ধ্বনি হলে হয়ে যায় back (পিঠ)।" },

    { t: "type", p: "তিনটি গাছ", a: ["three trees"], hint: "three · tree — তিনটি, তাই বহুবচন", x: ["tree"], why: "three শুরু TH দিয়ে, tree শুরু TR দিয়ে; আর তিনটি বলে বহুবচনের -s বসে।" },
    { t: "type", p: "দুইটি নৌকা", a: ["two boats"], hint: "two · boat — দুইটি, তাই বহুবচন", x: ["boat", "votes"], why: "নৌকা হলো B দিয়ে শুরু boat; দুইটি বলে বহুবচনের -s বসে। V দিয়ে লিখলে হয়ে যায় vote (ভোট)।" },
    { t: "type", p: "খুব হালকা", a: ["very light"], hint: "very · light — V আর L দিয়ে শুরু", x: ["berry"], why: "very শুরু V দিয়ে (উপরের দাঁত নিচের ঠোঁটে), light শুরু L দিয়ে (জিভের ডগা মাড়িতে)।" }
  ],

  articles: [
    { t: "mc", q: "\"আমি ছাত্র\" ইংরেজিতে?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "পেশা বা পরিচয়ের আগে আর্টিকেল a বসাতেই হয়। বাংলায় \"একজন\" না বললেও ইংরেজিতে a বাদ যায় না।" },
    { t: "mc", q: "\"আমার একটা আইডিয়া আছে\" ইংরেজিতে?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an।" },
    { t: "mc", q: "\"এক ঘণ্টা\" ইংরেজিতে কী?", o: ["an hour", "a hour", "one hours", "hour"], why: "hour-এর h উচ্চারণ হয় না। শব্দটা স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an।" },
    { t: "mc", q: "\"আমি কুকুর খুব পছন্দ করি\" (কুকুর জাতটাই) ইংরেজিতে?", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "পুরো জাতের কথা সাধারণভাবে বললে আর্টিকেল ছাড়া বহুবচন বসে।" },
    { t: "mc", q: "\"আমার একটা কুকুর আছে। কুকুরটা খুব সুন্দর\" ইংরেজিতে?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "প্রথমবার বললে আর্টিকেল a; যার কথা আগেই বলা হয়েছে, তাকে আবার বললে the।" },

    { t: "order", p: "আমি শিক্ষক", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "পেশার আগে আর্টিকেল a বসে। teacher ব্যঞ্জনধ্বনি দিয়ে শুরু, তাই an নয়।" },
    { t: "order", p: "(এই ঘরের) দরজাটা একটু বন্ধ করবে?", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "দুজনেই জানি কোন দরজা, তাই আর্টিকেল the।" },
    { t: "order", p: "আমি কফি খাই না", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "কফির কথা সাধারণভাবে বললে কোনো আর্টিকেল বসে না।" },

    { t: "fill", q: "I'm __ university student.", p: "আমি বিশ্ববিদ্যালয়ের ছাত্র", a: ["a"], o: ["an", "the", "two"], why: "university শুরু \"ইউ\" ধ্বনি দিয়ে, তাই আর্টিকেল a। বানান নয়, ধ্বনি শুনে ঠিক করুন।" },
    { t: "fill", q: "I have __ older sister.", p: "আমার একজন বড় বোন আছে", a: ["an"], o: ["a", "the", "two"], why: "older স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an।" },
    { t: "fill", q: "I don't like __.", p: "আমি বিড়াল পছন্দ করি না (বিড়াল জাতটাই)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "পুরো জাতের কথা বললে আর্টিকেল ছাড়া বহুবচন বসে: cats।" },

    { t: "type", p: "আমার একটা আইডিয়া আছে", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — স্বরধ্বনির আগের আর্টিকেল", x: ["a"], why: "idea স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an।" },
    { t: "type", p: "আমি কুকুর পছন্দ করি (কুকুর জাতটাই)", a: ["I like dogs", "I love dogs"], hint: "like · dog — পুরো জাত বোঝাতে বহুবচন", x: ["dog", "a"], why: "পুরো জাতের কথা বললে আর্টিকেল ছাড়া বহুবচন বসে: dogs।" },
    { t: "type", p: "চলো, (একসঙ্গে) দুপুরের খাবার খাই", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — খাবারের বেলার নামের আগে আর্টিকেল?", x: ["a", "the"], why: "lunch, dinner-এর মতো খাবারের বেলার নামের আগে আর্টিকেল বসে না।" }
  ],

  be: [
    { t: "mc", q: "\"আমি ক্লান্ত\" ইংরেজিতে?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "বাংলায় এখানে ক্রিয়া লাগে না, কিন্তু ইংরেজিতে অবস্থা বোঝাতে be ক্রিয়া (am / is / are) বাদ দেওয়া যায় না।" },
    { t: "mc", q: "\"সে (ছেলে) কি ইংরেজি বলে?\" ইংরেজিতে?", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "he-এর সঙ্গে does; আর does-এর পরে ক্রিয়া থাকে মূল রূপে, -s ছাড়া।" },
    { t: "mc", q: "\"সে (মেয়ে) অফিসে আছে\" ইংরেজিতে?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "কোথায় আছে বোঝাতে be ক্রিয়া লাগে; she-এর সঙ্গে is।" },
    { t: "mc", q: "Do you like coffee?-এর উত্তরে \"হ্যাঁ\" বলতে চাইলে", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "do দিয়ে প্রশ্ন, তাই do দিয়েই উত্তর।" },
    { t: "mc", q: "\"সে (মেয়ে) মাংস খায় না\" ইংরেজিতে?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she-এর না-বাচক রূপ: doesn't + ক্রিয়ার মূল রূপ, -s ছাড়া।" },

    { t: "order", p: "আমার ভাই সিউলে কাজ করে", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "কর্তা একজন (he), তাই works: he / she / it-এর সঙ্গে -s। এখানে be ক্রিয়া বসে না।" },
    { t: "order", p: "আমি ছাত্র নই", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be ক্রিয়ার না-বাচক রূপে not বসে; আর পরিচয়ের আগে আর্টিকেল a।" },
    { t: "order", p: "তার (মেয়ে) দুইটা কুকুর আছে", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she-এর সঙ্গে has; দুইটা, তাই বহুবচনের -s বসিয়ে dogs।" },

    { t: "fill", q: "My brother __ in Seoul.", p: "আমার ভাই সিউলে থাকে", a: ["lives"], o: ["live", "is live", "living"], why: "কর্তা he, তাই ক্রিয়ায় -s বসে: lives।" },
    { t: "fill", q: "__ you tired?", p: "তুমি কি ক্লান্ত?", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired একটা অবস্থা, তাই be ক্রিয়া দিয়ে প্রশ্ন; you-এর সঙ্গে are।" },
    { t: "fill", q: "We __ hungry.", p: "আমাদের খিদে পেয়েছে", a: ["are"], o: ["is", "am", "do"], why: "hungry একটা অবস্থা, তাই be ক্রিয়া লাগে; we-এর সঙ্গে are।" },

    { t: "type", p: "তিনি (পুরুষ) একজন শিক্ষক", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be ক্রিয়া + পেশার আগের আর্টিকেল", x: ["the"], why: "পরিচয় বোঝাতে be ক্রিয়া, আর পেশার আগে আর্টিকেল a। পুরুষ, তাই he।" },
    { t: "type", p: "আমি কফি পছন্দ করি না", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — like-এর না-বাচক রূপ", x: ["am"], why: "like-এর সঙ্গে be ক্রিয়া বসে না; না-বাচক রূপ don't (I'm not like ✗)।" },
    { t: "type", p: "তার (মেয়ে) কি একটা বিড়াল আছে?", a: ["Does she have a cat"], hint: "does · have · cat — একটার আগের আর্টিকেল", x: ["has"], why: "does বসলে ক্রিয়া থাকে মূল রূপে: have। একটা বিড়াল, তাই আর্টিকেল a।" }
  ],

  polite: [
    { t: "mc", q: "ক্যাফেতে একটা লাতে অর্ডার করতে সবচেয়ে স্বাভাবিক বাক্য কোনটি?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "দোকানে Can I get…? স্বাভাবিক। এক কাপ, তাই আর্টিকেল a-ও লাগে।" },
    { t: "mc", q: "অপরিচিত কারও কাছে সাহায্য চাইতে সবচেয়ে ভদ্র বাক্য কোনটি?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you…? অপরিচিত মানুষকে ভদ্রভাবে অনুরোধ করার ছাঁচ।" },
    { t: "mc", q: "কথা বুঝতে না পারলে ভদ্রভাবে আবার বলতে অনুরোধ করার বাক্য কোনটি?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? দিয়ে ভদ্রভাবে আবার বলতে অনুরোধ করা হয়।" },
    { t: "mc", q: "খুব ভদ্রভাবে: \"আমাদের একটা ছবি তুলে দেবেন?\"", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind-এর পরে -ing রূপ বসে: taking।" },
    { t: "mc", q: "বিমানে: \"আমাকে জানালার পাশের একটা সিট দিন\"", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like… ভদ্র অনুরোধ। সিট একটা, তাই আর্টিকেল a।" },

    { t: "order", p: "একটা লাতে দেবেন?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "প্রথমবার চাওয়া এক কাপ, তাই আর্টিকেল a।" },
    { t: "order", p: "(এই ঘরের) জানালাটা একটু খুলে দেবেন, কিছু মনে না করলে?", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind-এর পরে -ing রূপ; আর দুজনেই জানি কোন জানালা, তাই আর্টিকেল the।" },
    { t: "order", p: "একটু ধীরে বলবেন?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you…? দিয়ে ভদ্রভাবে অনুরোধ করুন।" },

    { t: "fill", q: "Would you mind __ the door?", p: "কিছু মনে না করলে দরজাটা একটু বন্ধ করে দেবেন?", a: ["closing"], o: ["close", "to close", "closed"], why: "mind-এর পরে -ing রূপ বসে।" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "একটা আইসড কফি দেবেন?", a: ["an"], o: ["a", "two", "many"], why: "iced স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an।" },
    { t: "fill", q: "No, not at __.", p: "(Would you mind…?-এর উত্তরে) না না, কোনো আপত্তি নেই", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all মানে \"একটুও আপত্তি নেই\", অর্থাৎ \"জি, করে দিচ্ছি\"।" },

    { t: "type", p: "আমাকে একটু সাহায্য করবেন? (ভদ্রভাবে)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — ভদ্র অনুরোধ", x: ["can"], why: "অপরিচিত মানুষকে Could you…? দিয়ে অনুরোধ করুন।" },
    { t: "type", p: "আমাকে জানালার পাশের একটা সিট দিন", a: ["I'd like a window seat", "I'd like a window seat please", "I would like a window seat", "I would like a window seat please", "Can I get a window seat", "Can I get a window seat please", "Could I get a window seat", "Could I get a window seat please", "Can I have a window seat", "Can I have a window seat please", "Could I have a window seat", "Could I have a window seat please"], hint: "I'd like · window seat — একটা সিটের আগের আর্টিকেল", x: ["the"], why: "একটা সিটের কথা প্রথমবার বলছেন, তাই আর্টিকেল a বসে: a window seat।" },
    { t: "type", p: "দুইটা কফি দিন", a: ["Can I get two coffees", "Can I get two coffees please", "Could I get two coffees", "Could I get two coffees please", "Can I have two coffees", "Can I have two coffees please", "Could I have two coffees", "Could I have two coffees please", "I'd like two coffees", "I'd like two coffees please", "I would like two coffees", "I would like two coffees please", "Two coffees", "Two coffees please"], hint: "two · coffee — দুইটা, তাই বহুবচন", x: ["coffee"], why: "অর্ডারের সময় কফি কাপ ধরে গোনা হয়, তাই বহুবচনের -s বসিয়ে two coffees।" }
  ],

  tense: [
    { t: "mc", q: "\"আমি এখন কফি খাচ্ছি\" ইংরেজিতে?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "এই মুহূর্তে চলছে এমন কাজে be + -ing; be ক্রিয়া বাদ দেওয়া যায় না।" },
    { t: "mc", q: "\"গত উইকএন্ডে আমি সমুদ্রসৈকতে গিয়েছিলাম\" ইংরেজিতে?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go-এর past রূপ went। সৈকতের আগে আর্টিকেল the বসিয়ে the beach বলা হয়।" },
    { t: "mc", q: "আগামী মাসের পরিকল্পনা: \"আমি জেজু দ্বীপে বেড়াতে যাব\"", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "আগে থেকে ঠিক করা পরিকল্পনায় be going to + ক্রিয়ার মূল রূপ।" },
    { t: "mc", q: "কলিং বেল বাজল। তখনই বললেন: \"আমি দরজা খুলছি!\"", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "কথা বলার মুহূর্তে নেওয়া সিদ্ধান্তে will।" },
    { t: "mc", q: "see-এর past রূপ?", o: ["saw", "seed", "seen", "sawed"], why: "see অনিয়মিত ক্রিয়া: see - saw - seen।" },

    { t: "order", p: "আমি একটা ব্যাংকে কাজ করি (সব সময়)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "সব সময়ের কাজে Present Simple; একটা ব্যাংকের কথা প্রথমবার বলছেন, তাই আর্টিকেল a।" },
    { t: "order", p: "আমি তোমাকে পরে ফোন করব", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "কথা বলার মুহূর্তে দেওয়া কথায় will।" },
    { t: "order", p: "আমি দুইটা সিনেমা দেখেছি", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see-এর past রূপ saw; দুইটা, তাই বহুবচনের -s বসিয়ে movies।" },

    { t: "fill", q: "I __ pizza last night.", p: "কাল রাতে আমি পিৎজা খেয়েছি", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "eat-এর past রূপ ate (have হলে had)। last night আছে, তাই Past Simple।" },
    { t: "fill", q: "__ you have fun?", p: "মজা হয়েছিল?", a: ["Did"], o: ["Does", "Are", "Were"], why: "অতীতের কথা জিজ্ঞেস করতে Did + ক্রিয়ার মূল রূপ।" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "আমি মা-বাবার সঙ্গে দেখা করতে যাব (ঠিক করে রেখেছি)", a: ["to"], o: ["for", "at", "on"], why: "পরিকল্পনায় be going to + ক্রিয়ার মূল রূপ।" },

    { t: "type", p: "আজ আমি বাসা থেকে কাজ করছি", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — এখন চলছে", x: ["work"], why: "আজ যে কাজ চলছে, তাতে be + -ing।" },
    { t: "type", p: "গত উইকএন্ডে আমি সমুদ্রসৈকতে গিয়েছিলাম", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — past রূপ আর আর্টিকেল", x: ["a"], why: "go-এর past রূপ went; সৈকতের আগে আর্টিকেল the বসিয়ে the beach।" },
    { t: "type", p: "আমি একটা রান্নার ক্লাস করব (পরিকল্পনা)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — একটা ক্লাসের আগের আর্টিকেল", x: ["the"], why: "আগে থেকে ঠিক করা পরিকল্পনায় going to; একটা ক্লাসের কথা প্রথমবার বলছেন, তাই আর্টিকেল a।" }
  ],

  prep: [
    { t: "mc", q: "\"মে মাসে\" ইংরেজিতে?", o: ["in May", "on May", "at May", "to May"], why: "মাসের আগে in।" },
    { t: "mc", q: "\"মে মাসের 3 তারিখে\" ইংরেজিতে?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "তারিখের আগে on।" },
    { t: "mc", q: "\"আমি (এখন) বাসে আছি\" ইংরেজিতে?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "বাস-ট্রেনের বেলায় on; আর এখন যে বাসে আছেন সেটাই, তাই আর্টিকেল the।" },
    { t: "mc", q: "\"রাতে\" ইংরেজিতে?", o: ["at night", "on night", "in night", "at the night"], why: "night ব্যতিক্রম: আর্টিকেল ছাড়া at night।" },
    { t: "mc", q: "কোন বাক্যটি ঠিক?", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "শহরের আগে in; আর শহরের নামের আগে আর্টিকেল the বসে না।" },

    { t: "order", p: "(আমাদের চেনা) স্টেশনটায় দেখা করি", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "একটা নির্দিষ্ট বিন্দু বোঝাতে at; দুজনেই জানি কোন স্টেশন, তাই আর্টিকেল the।" },
    { t: "order", p: "আমার ফোনটা (ওই) টেবিলের উপরে আছে", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "কোনো কিছুর উপরে বোঝাতে on; চোখের সামনের টেবিলটাই, তাই আর্টিকেল the।" },
    { t: "order", p: "আগামী সপ্তাহে দেখা হবে", a: ["See", "you", "next", "week"], x: ["on"], why: "next-এর আগে কোনো preposition বসে না।" },

    { t: "fill", q: "The meeting is __ three.", p: "মিটিং তিনটায়", a: ["at"], o: ["on", "to", "of"], why: "ঘড়ির নির্দিষ্ট সময়ের আগে at।" },
    { t: "fill", q: "I was born __ 1998.", p: "আমার জন্ম 1998 সালে", a: ["in"], o: ["on", "at", "to"], why: "সালের আগে in।" },
    { t: "fill", q: "See you __ Friday.", p: "শুক্রবারে দেখা হবে", a: ["on"], o: ["in", "at", "to"], why: "বারের আগে on।" },

    { t: "type", p: "আমি সকালে কফি খাই", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + আর্টিকেল", x: ["at"], why: "দিনের ভাগের আগে in; আর in the morning-এ আর্টিকেল the বসাতেই হয়।" },
    { t: "type", p: "আমি এখন বাসায় আছি", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — আর্টিকেল ছাড়া", x: ["the"], why: "at home-এ আর্টিকেল the বসে না।" },
    { t: "type", p: "আগামী উইকএন্ডে দেখা হবে", a: ["See you next weekend"], hint: "see · next weekend — next-এর আগে preposition?", x: ["on"], why: "next-এর আগে কোনো preposition বসে না।" }
  ],

  smalltalk: [
    { t: "mc", q: "সহকর্মী জিজ্ঞেস করলেন How was your weekend? কী বলবেন?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "অতীতের কথা জিজ্ঞেস করা হয়েছে, তাই Past Simple-এ উত্তর দিন আর একটা বাড়তি তথ্য জুড়ে দিন।" },
    { t: "mc", q: "I don't drink coffee.-এর উত্তরে \"আমিও না (আমিও খাই না)\"", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "না-বাচক বাক্যে সায় দিতে Me neither।" },
    { t: "mc", q: "আলাপ সুন্দরভাবে শেষ করতে চাইলে", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going বলে নরমভাবে বিদায় নেওয়া যায়।" },
    { t: "mc", q: "প্রথম আলাপে কোন কথাটা দিয়ে শুরু করা ভালো?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "আবহাওয়া হালকা আলাপের সবচেয়ে নিরাপদ বিষয়। বেতন, বিয়ে বা ওজনের কথা এড়িয়ে চলুন।" },
    { t: "mc", q: "I went to Busan last weekend. শুনে আগ্রহ দেখাতে কী বলবেন?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? আর That sounds fun! দিয়ে আগ্রহ দেখানো যায়।" },

    { t: "order", p: "উইকএন্ডে কোনো পরিকল্পনা আছে?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "পরিকল্পনা জিজ্ঞেস করার এই বাক্যে বহুবচন plans বসে; আর সামনের উইকএন্ডটাই, তাই আর্টিকেল the।" },
    { t: "order", p: "আপনার সঙ্গে কথা বলে ভালো লাগল", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "আলাপ শেষ করার সময়ের কথা। nice-এর পরে talking বসে।" },
    { t: "order", p: "আমি ভূতের সিনেমা পছন্দ করি না", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "সিনেমার কথা সাধারণভাবে বলছেন, তাই আর্টিকেল ছাড়া বহুবচন movies।" },

    { t: "fill", q: "Pretty good! How __ you?", p: "ভালোই! তোমার কী খবর?", a: ["about"], o: ["for", "with", "of"], why: "ছোট করে উত্তর দিয়ে How about you? বলে পাল্টা জিজ্ঞেস করাই ভদ্রতা।" },
    { t: "fill", q: "I know, __?", p: "ঠিক তাই! / আমিও তো তা-ই বলি!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? দিয়ে জোরালো সায় দেওয়া হয়। শব্দটা R দিয়ে শুরু।" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "ইদানীং ভালো কিছু দেখেছেন?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "any-র পরে গণনাযোগ্য বিশেষ্য নিয়ে এভাবে প্রশ্ন করলে বহুবচন বসে।" },

    { t: "type", p: "আপনার উইকএন্ড কেমন কাটল?", a: ["How was your weekend"], hint: "how · weekend — Past Simple-এ", x: ["is"], why: "গত উইকএন্ডের কথা, তাই was দিয়ে প্রশ্ন।" },
    { t: "type", p: "আজ আবহাওয়াটা চমৎকার, তাই না?", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — আর্টিকেল বসবে কি?", x: ["a"], why: "weather গণনাযোগ্য নয়, তাই আগে আর্টিকেল a বসে না (a nice weather ✗)।" },
    { t: "type", p: "আমি সিনেমা দেখতে পছন্দ করি", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — সাধারণভাবে বললে বহুবচন", x: ["movie"], why: "সিনেমার কথা সাধারণভাবে বলছেন, তাই বহুবচন movies।" }
  ],

  phrasal: [
    { t: "mc", q: "\"ওটা চালু করো\" ইংরেজিতে?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "সর্বনাম it ফ্রেজাল ভার্বের মাঝখানে বসে: turn it on।" },
    { t: "mc", q: "\"আমাদের দুধ শেষ হয়ে গেছে\" ইংরেজিতে?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of মানে শেষ হয়ে যাওয়া। of বাদ দেবেন না।" },
    { t: "mc", q: "\"আমি দেগুতে বড় হয়েছি\" ইংরেজিতে?", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up মানে বড় হওয়া; past রূপ grew up।" },
    { t: "mc", q: "\"আমার বিড়ালটার দেখাশোনা করতে পারবে?\" ইংরেজিতে?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after মানে দেখাশোনা করা; এটা ভাগ হয় না (look for মানে \"খোঁজা\")।" },
    { t: "mc", q: "\"আমি সাতটায় তোমাকে নিতে আসব\" ইংরেজিতে?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "সর্বনাম you বসে pick আর up-এর মাঝখানে।" },

    { t: "order", p: "আমি আমার চশমা খুঁজছি", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "চশমা সব সময় বহুবচন: glasses (glass মানে কাচ বা গ্লাস)। \"খোঁজা\" হলো look for।" },
    { t: "order", p: "চলো, একটা পরিকল্পনা বের করি", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with মানে ভেবে বের করা। এখনো ঠিক হয়নি এমন একটা পরিকল্পনা, তাই আর্টিকেল a।" },
    { t: "order", p: "আমি তোমাকে নিতে আসব", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "সর্বনাম you বসে pick আর up-এর মাঝখানে।" },

    { t: "fill", q: "Can you turn it __?", p: "ওটা একটু বন্ধ করে দেবে?", a: ["off"], o: ["of", "on", "out"], why: "বন্ধ করা হলো turn off। of-এর সঙ্গে বানান গুলিয়ে ফেলবেন না।" },
    { t: "fill", q: "I work __ every morning.", p: "আমি রোজ সকালে ব্যায়াম করি", a: ["out"], o: ["up", "off", "on"], why: "work out মানে ব্যায়াম করা।" },
    { t: "fill", q: "We ran out of __.", p: "আমাদের ডিম শেষ হয়ে গেছে", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "ডিমের মতো গণনাযোগ্য জিনিস শেষ হয়ে গেলে বহুবচন বসে: eggs।" },

    { t: "type", p: "ওটা বন্ধ করে দিন", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — সর্বনাম মাঝখানে", x: ["on"], why: "সর্বনাম it বসে turn আর off-এর মাঝখানে।" },
    { t: "type", p: "আমি দুইটা বিড়ালের দেখাশোনা করি", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — দুইটা, তাই বহুবচন", x: ["cat"], why: "look after মানে দেখাশোনা করা। দুইটা, তাই বহুবচনের -s বসিয়ে cats।" },
    { t: "type", p: "আমাদের দুধ শেষ হয়ে গেছে", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — আর্টিকেল বসবে কি?", x: ["a"], why: "milk গণনাযোগ্য নয়, তাই আগে আর্টিকেল a বসে না।" }
  ],

  numbers: [
    { t: "mc", q: "10,000 (দশ হাজার) ইংরেজিতে কী?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "তিন ঘর করে ভাগ: 10 + thousand। সংখ্যার পরে thousand-এ বহুবচনের -s বসে না।" },
    { t: "mc", q: "1,000,000 (দশ লাখ) ইংরেজিতে কী?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "দুইটা কমা মানে million; দশ লাখ = one million। সংখ্যার পরে million-এ বহুবচনের -s বসে না।" },
    { t: "mc", q: "9:05 কীভাবে পড়বেন?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1–9 মিনিটের আগে oh বসে।" },
    { t: "mc", q: "$4.99 স্বাভাবিকভাবে কীভাবে পড়বেন?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "দাম পড়া হয় দুটো সংখ্যা পরপর বলে: four ninety-nine।" },
    { t: "mc", q: "2026 সাল ইংরেজিতে কীভাবে পড়বেন?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "সাল পড়া হয় দুই ঘর করে ভাগ করে।" },

    { t: "order", p: "সাতটা পনেরো বাজে", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 হলো fifteen (জোর শেষে), 50 হলো fifty (জোর শুরুতে)।" },
    { t: "order", p: "দাম পনেরো ডলার", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "এক ডলারের বেশি হলে বহুবচনের -s বসে: dollars। বাংলায় \"পনেরো ডলার\", ইংরেজিতে -s চাই।" },
    { t: "order", p: "সপ্তাহে দুইবার", a: ["twice", "a", "week"], x: ["the", "one"], why: "\"সপ্তাহে কতবার\" বোঝাতে আর্টিকেল a বসে: twice a week।" },

    { t: "fill", q: "It's __ quarter past ten.", p: "সোয়া দশটা বাজে", a: ["a"], o: ["the", "one", "an"], why: "quarter (পনেরো মিনিট)-এর আগে আর্টিকেল a বসে।" },
    { t: "fill", q: "That's fifty __ won.", p: "এটার দাম পঞ্চাশ হাজার ওন (কোরিয়ার মুদ্রা)", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 হলো fifty thousand। সংখ্যার পরে thousand-এ বহুবচনের -s বসে না।" },
    { t: "fill", q: "I'll be there in ten __.", p: "আমি দশ মিনিটের মধ্যে পৌঁছাব", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "দশ মিনিট, তাই বহুবচন বসে: minutes।" },

    { t: "type", p: "সাড়ে তিনটা বাজে", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — ঘণ্টা আর মিনিট পরপর", x: ["thirteen"], why: "ঘণ্টা আর মিনিট পরপর বলুন: three thirty। 13 (thirteen)-এর সঙ্গে গুলিয়ে ফেলবেন না।" },
    { t: "type", p: "দাম বিশ ডলার", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — দুই বা তার বেশি হলে বহুবচন", x: ["dollar"], why: "দুই ডলার বা তার বেশি হলে বহুবচনের -s বসিয়ে dollars।" },
    { t: "type", p: "আমি সপ্তাহে দুইবার ব্যায়াম করি", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — \"সপ্তাহে\" বোঝাতে কোন আর্টিকেল?", x: ["the"], why: "\"সপ্তাহে\" বোঝাতে আর্টিকেল a বসিয়ে a week (the week ✗)।" }
  ],

  email: [
    { t: "mc", q: "Dear দিয়ে শুরু করলে সবচেয়ে স্বাভাবিক সম্বোধন কোনটি?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear-এর পরে শুধু পদ নয়, Mr. / Ms. + পদবি লিখুন।" },
    { t: "mc", q: "রিপোর্ট অ্যাটাচ করেছেন, এ কথা জানাতে", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "প্রাপক যে রিপোর্টটা পাচ্ছেন সেটাই, তাই আর্টিকেল the।" },
    { t: "mc", q: "\"ডেডলাইন কবে?\" ইংরেজিতে?", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "এই কাজেরই নির্দিষ্ট ডেডলাইন, তাই আর্টিকেল the।" },
    { t: "mc", q: "উত্তর দিতে দেরি হলে ক্ষমা চাওয়ার বদলে কোন ইতিবাচক কথাটা লেখা যায়?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience লিখলে ক্ষমা না চেয়েও ভদ্র শোনায়। patients (রোগীরা)-এর সঙ্গে বানান গুলিয়ে ফেলবেন না।" },
    { t: "mc", q: "শুক্রবারের ইমেইলের শেষে কোন শুভেচ্ছাটা মানানসই?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "একটা উইকএন্ডের কথা, তাই আর্টিকেল a বসে আর weekend থাকে একবচনে।" },

    { t: "order", p: "রিপোর্টটা অ্যাটাচ করে দিয়েছি", a: ["I've", "attached", "the", "report"], x: ["a"], why: "প্রাপক যে রিপোর্টটা পাচ্ছেন সেটাই, তাই আর্টিকেল the।" },
    { t: "order", p: "চলুন, একটা মিটিং ঠিক করি", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "এখনো ঠিক হয়নি এমন একটা মিটিং, তাই আর্টিকেল a।" },
    { t: "order", p: "দেখে আপনাকে আবার জানাচ্ছি", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you মানে পরে আবার যোগাযোগ করা। এখানে to বসে।" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "শুক্রবারের মধ্যে ফাইলটা পাঠাতে পারবেন?", a: ["by"], o: ["until", "in", "at"], why: "সময়সীমা (\"কোনো দিনের মধ্যে\") বোঝাতে by + দিন।" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "সময়সূচির ব্যাপারে জানতে লিখছি", a: ["to"], o: ["for", "about", "at"], why: "উদ্দেশ্য জানাতে I'm writing to + ক্রিয়ার মূল রূপ।" },
    { t: "fill", q: "Thanks for all your hard __!", p: "এত দিন অনেক কষ্ট করেছেন, ধন্যবাদ!", a: ["work"], o: ["works", "working", "job"], why: "work (কাজ) গণনাযোগ্য নয়, তাই বহুবচনের -s বসে না।" },

    { t: "type", p: "কাল আমার ছুটি", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be ক্রিয়া + off", x: ["do"], why: "ছুটিতে থাকা বোঝাতে be off বলা হয়।" },
    { t: "type", p: "ফাইলটা অ্যাটাচ করে দিয়েছি", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — নির্দিষ্ট ফাইলটাই", x: ["a"], why: "প্রাপক যে ফাইলটা পাচ্ছেন সেটাই, তাই আর্টিকেল the।" },
    { t: "type", p: "উইকএন্ড ভালো কাটুক!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — একটা উইকএন্ডের আগের আর্টিকেল", x: ["the"], why: "একটা উইকএন্ডের কথা, তাই আর্টিকেল a বসে: a great weekend।" }
  ],

  idioms: [
    { t: "mc", q: "\"এটা পানির মতো সহজ\" ইংরেজি বাগধারায়?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "বাগধারা পুরোটা একসঙ্গে মুখস্থ করুন: আর্টিকেল a বসে আর cake থাকে একবচনে।" },
    { t: "mc", q: "\"এটার আকাশছোঁয়া দাম\" ইংরেজি বাগধারায়?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm স্বরধ্বনি দিয়ে শুরু, তাই আর্টিকেল an; leg ব্যঞ্জনধ্বনি দিয়ে শুরু, তাই a।" },
    { t: "mc", q: "\"আজ এ পর্যন্তই থাক\" (মিটিংয়েও চলে)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day বাগধারাটা আর্টিকেল a-সহ পুরোটা মুখস্থ করুন।" },
    { t: "mc", q: "\"খুশিতে আমি যেন আকাশে উড়ছি\" ইংরেজি বাগধারায়?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine-এ আর্টিকেলও নেই, বহুবচনের -s-ও নেই।" },
    { t: "mc", q: "কোনটি শুধু বন্ধুদের মধ্যে চলা স্ল্যাং?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap মানে \"সত্যি বলছি\"; এটা তরুণদের স্ল্যাং। বাকিগুলো বাগধারা, অফিসেও চলে।" },

    { t: "order", p: "মন দিয়ে শুনছি", a: ["I'm", "all", "ears"], x: ["ear"], why: "\"সারা শরীরই যেন কান\", তাই বহুবচন ears।" },
    { t: "order", p: "আমাকে মন দিয়ে পড়াশোনা করতে হবে", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books: আর্টিকেল the আর বহুবচন books যেমন আছে তেমনই বসে।" },
    { t: "order", p: "এটা আমার পছন্দের জিনিস নয়", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea পুরোটা মুখস্থ করুন। my-এর জায়গায় আর্টিকেল বসে না।" },

    { t: "fill", q: "Kill two __ with one stone.", p: "এক ঢিলে দুই পাখি মারা", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "পাখি দুইটা, তাই বহুবচন বসে: birds।" },
    { t: "fill", q: "Speak of the __!", p: "যার কথা হচ্ছিল, সে-ই হাজির!", a: ["devil"], o: ["tiger", "angel", "bird"], why: "ইংরেজি বাগধারাটায় devil (শয়তান) বসে: Speak of the devil!" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "শরীরটা ভালো লাগছে না", a: ["the"], o: ["a", "an", "my"], why: "under the weather: আর্টিকেল the যেমন আছে তেমনই বসে।" },

    { t: "type", p: "এটা পানির মতো সহজ (cake দিয়ে বাগধারা)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — আর্টিকেল ভুলবেন না", x: ["the"], why: "a piece of cake: আর্টিকেল a বসাতেই হয়।" },
    { t: "type", p: "তোমার জন্য শুভকামনা রইল (finger দিয়ে বাগধারা)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — আঙুল কয়টা?", x: ["finger"], why: "দুই আঙুল পেঁচিয়ে শুভকামনা জানানো হয়, তাই বহুবচন fingers।" },
    { t: "type", p: "আজ এ পর্যন্তই থাক", a: ["Let's call it a day"], hint: "call it · day — the নয়, অন্য আর্টিকেল", x: ["the"], why: "call it a day: আর্টিকেল the নয়, a।" }
  ]
};
