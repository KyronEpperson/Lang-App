/* Practice sets for the ur-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Urdu (standard Urdu of Pakistan, docs/profiles/ur.md); answers are English (identical to ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names آرٹیکل, جمع or قابلِ شمار. */

module.exports = {
  alphabet: [
    { t: "mc", q: "کس حرف کا نام لفظ see جیسا سنائی دیتا ہے؟", o: ["C", "S", "Z", "K"], why: "C کا نام بالکل لفظ see کی طرح بولا جاتا ہے۔ S کا نام واول کی آواز سے شروع ہوتا ہے، Z کو امریکہ میں zee کہتے ہیں، اور K کا نام OK کے آخری حصے جیسا ہے۔" },
    { t: "mc", q: "حرف Q کے فوراً بعد کون سا حرف آتا ہے؟", o: ["R", "P", "S", "O"], why: "ترتیب یہ ہے: O، P، Q، R، S۔ اس لیے Q کے بعد R آتا ہے۔" },
    { t: "mc", q: "درست کون سا ہے؟", o: ["an M", "a M", "an B", "an U"], why: "M کا نام واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an آتا ہے: an M۔ B کا نام کانسوننٹ کی آواز سے شروع ہوتا ہے: a B۔ U کا نام you جیسا ہے اور \"ی\" کی آواز سے شروع ہوتا ہے: a U۔" },
    { t: "mc", q: "ان میں سے واول (حرفِ علت) کون سا ہے؟", o: ["U", "R", "S", "W"], why: "انگریزی کے واول پانچ ہیں: A، E، I، O اور U۔ R، S اور W کانسوننٹ ہیں۔" },
    { t: "mc", q: "حرف W کا انگریزی نام کیا ہے؟", o: ["double u", "double v", "u u", "v v"], why: "شکل دو V جیسی ہے، مگر نام double u ہے، یعنی \"دو U\"۔" },

    { t: "order", p: "اس کے ہجے کیا ہیں؟", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell والا سوال امدادی فعل do سے بنتا ہے۔ فاعل you ہے، اس لیے does نہیں؛ اور do کے بعد پہلی فارم spell آتی ہے، spelling نہیں۔" },
    { t: "order", p: "میرا نام S سے شروع ہوتا ہے", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S کا نام واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an آتا ہے، a نہیں۔ فاعل my name ایک چیز ہے، اس لیے starts۔" },
    { t: "order", p: "لفظ hello میں دو L ہیں", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "دو L ہیں، اس لیے جمع: Ls۔ اردو میں \"دو L\" کہتے ہوئے لفظ نہیں بدلتا، انگریزی میں -s لگتا ہے۔ اور جمع کے ساتھ is نہیں، are آتا ہے۔" },

    { t: "fill", q: "How do you __ your name?", p: "آپ کے نام کے ہجے کیا ہیں؟", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "امدادی فعل do کے بعد فعل کی پہلی فارم آتی ہے: spell۔" },
    { t: "fill", q: "It starts __ a B.", p: "یہ B سے شروع ہوتا ہے", a: ["with"], o: ["by", "for", "in"], why: "\"کسی حرف سے شروع ہونا\" کے لیے start with آتا ہے۔ اردو کا \"سے\" یہاں with ہے، by نہیں۔" },
    { t: "fill", q: "That's M __ in Mary.", p: "یہ M ہے، جیسے Mary میں", a: ["as"], o: ["so", "than", "of"], why: "حرف کی تصدیق کے لیے کوئی لفظ بتانا ہو تو as in آتا ہے: M as in Mary۔" },

    { t: "type", p: "یہ A سے شروع ہوتا ہے (It سے شروع کریں اور آرٹیکل نہ بھولیں)", a: ["It starts with an A", "It begins with an A"], hint: "الفاظ: start · A — A کا نام واول کی آواز سے شروع ہوتا ہے", x: ["the", "start"], why: "A کا نام واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an آتا ہے: an A۔ فاعل it ہے، اس لیے starts۔" },
    { t: "type", p: "آپ کے نام کے ہجے کیا ہیں؟ (How do you سے شروع کریں)", a: ["How do you spell your name"], hint: "الفاظ: spell · your name — سوال do سے بنائیں", x: ["spelling", "does"], why: "spell والا سوال امدادی فعل do سے بنتا ہے۔ فاعل you ہے، اس لیے does نہیں، اور do کے بعد پہلی فارم spell آتی ہے۔" },
    { t: "type", p: "اس میں دو T ہیں (کسی لفظ کی بات ہے؛ It سے شروع کریں)", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "الفاظ: two · T — دو ہوں تو جمع", x: ["T", "have"], why: "دو T ہیں، اس لیے جمع: Ts (اسے T's بھی لکھتے ہیں)۔ فاعل it ہے، اس لیے have نہیں، has آتا ہے۔" }
  ],

  pron: [
    { t: "mc", q: "کس لفظ کا مطلب \"چاول\" ہے؟", o: ["rice", "lice", "rise", "nice"], why: "چاول rice ہے، R سے۔ L سے بولیں تو lice بن جاتا ہے، یعنی جوئیں۔ ر اور ل اردو میں بھی الگ ہیں، اس لیے یہ جوڑا آسان ہے۔" },
    { t: "mc", q: "کس لفظ کا مطلب \"پنکھا\" ہے؟", o: ["fan", "pan", "van", "ban"], why: "پنکھا fan ہے، F سے؛ P سے pan بنتا ہے، یعنی فرائی پین۔ ف اور پ اردو میں بھی الگ ہیں۔ اصل دھیان van پر دیں: v میں اوپر کے دانت نچلے ہونٹ پر ہوتے ہیں اور آواز گونجتی ہے۔" },
    { t: "mc", q: "کس لفظ کا مطلب \"سوچنا\" ہے؟", o: ["think", "sink", "thing", "pink"], why: "think کے th میں زبان کی نوک دانتوں کے بیچ آتی ہے اور ہوا نکلتی رہتی ہے۔ اس کی جگہ \"س\" بولیں تو sink بن جاتا ہے، اور \"تھ\" بھی وہ آواز نہیں۔" },
    { t: "mc", q: "کس لفظ کا مطلب \"ووٹ دینا\" ہے؟", o: ["vote", "boat", "goat", "bought"], why: "vote کے v میں اوپر کے دانت نچلے ہونٹ پر ہوتے ہیں اور آواز گونجتی ہے۔ ہونٹ بند ہو جائیں تو boat بن جاتا ہے، یعنی کشتی۔ اردو کے \"و\" کی طرح ہونٹ گول کرنے سے بھی v نہیں بنتا۔" },
    { t: "mc", q: "کس لفظ کا مطلب \"دایاں\" ہے؟", o: ["right", "light", "fight", "bright"], why: "دایاں right ہے، R سے۔ L سے light بنتا ہے، یعنی روشنی۔ ر اور ل کا یہ فرق اردو میں بھی ہے۔" },

    { t: "order", p: "یہ ایک کیلا ہے", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana کانسوننٹ کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل a آتا ہے، an نہیں۔ اور this کے ہجے th سے ہیں، d سے نہیں۔" },
    { t: "order", p: "تین درخت", a: ["three", "trees"], x: ["tree", "free"], why: "تین ہیں، اس لیے جمع: trees۔ اردو میں \"تین درخت\" کہتے ہوئے لفظ نہیں بدلتا، انگریزی میں -s لگتا ہے۔ three کے شروع میں th ہے اور tree کے شروع میں tr۔" },
    { t: "order", p: "مجھے کافی پسند ہے", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee میں f کی آواز ہے: اوپر کے دانت نچلے ہونٹ پر۔ p سے لکھیں تو copy بن جاتا ہے، یعنی نقل۔" },

    { t: "fill", q: "I eat __ice every day.", p: "میں روز چاول کھاتا ہوں", a: ["r"], o: ["l", "n", "w"], why: "چاول rice ہے، r سے۔ l سے لکھیں تو lice بن جاتا ہے، یعنی جوئیں۔" },
    { t: "fill", q: "I __ink so.", p: "میرے خیال میں ایسا ہی ہے", a: ["th"], o: ["s", "t", "p"], why: "think کے شروع میں th ہے۔ s لکھیں تو sink بن جاتا ہے۔" },
    { t: "fill", q: "This is my __.", p: "یہ میرا بیگ ہے", a: ["bag"], o: ["back", "bug", "beg"], why: "بیگ bag ہے، آخر میں g؛ آخری آواز پوری بولیں۔ آخر میں k کی آواز ہو تو back بن جاتا ہے، یعنی پیٹھ۔" },

    { t: "type", p: "تین درخت", a: ["three trees"], hint: "الفاظ: three · tree — تین ہوں تو جمع", x: ["tree"], why: "three کے شروع میں th ہے اور tree کے شروع میں tr۔ تین ہیں، اس لیے جمع کا -s لگتا ہے: trees۔" },
    { t: "type", p: "دو کشتیاں", a: ["two boats"], hint: "الفاظ: two · boat — دو ہوں تو جمع", x: ["boat", "votes"], why: "کشتی boat ہے، b سے۔ دو ہیں، اس لیے جمع کا -s لگتا ہے: boats۔ v سے لکھیں تو vote بن جاتا ہے۔" },
    { t: "type", p: "بہت ہلکا", a: ["very light"], hint: "الفاظ: very · light — شروع میں v اور l", x: ["berry"], why: "very کے شروع میں v ہے (اوپر کے دانت نچلے ہونٹ پر) اور light کے شروع میں l (زبان کی نوک مسوڑھے پر)۔" }
  ],

  articles: [
    { t: "mc", q: "انگریزی میں: \"میں طالب علم ہوں\"", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "پیشے یا حیثیت سے پہلے آرٹیکل a ضرور آتا ہے، حالانکہ اردو جملے میں ایسا کوئی لفظ نہیں۔" },
    { t: "mc", q: "انگریزی میں: \"میرے پاس ایک آئیڈیا ہے\"", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an آتا ہے۔" },
    { t: "mc", q: "انگریزی میں \"ایک گھنٹہ\" کو کیا کہتے ہیں؟", o: ["an hour", "a hour", "one hours", "hour"], why: "hour کا h خاموش ہے اور لفظ واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an۔ گنتی پر زور نہ ہو تو اردو کے \"ایک\" کے لیے a یا an کافی ہے؛ اور one کے ساتھ جمع hours نہیں آ سکتا۔" },
    { t: "mc", q: "انگریزی میں: \"مجھے کتے بہت پسند ہیں\" (عام طور پر، سب کتے)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "پوری قسم کی بات ہو تو اسم جمع میں اور آرٹیکل کے بغیر آتا ہے: dogs۔" },
    { t: "mc", q: "انگریزی میں: \"میرے پاس ایک کتا ہے۔ وہ کتا بہت پیارا ہے\"", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "پہلی بار ذکر ہو تو آرٹیکل a آتا ہے، اور اسی چیز کا دوبارہ ذکر ہو تو the۔" },

    { t: "order", p: "میں استاد ہوں", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "پیشے سے پہلے آرٹیکل a آتا ہے۔ teacher کانسوننٹ کی آواز سے شروع ہوتا ہے، اس لیے an نہیں۔" },
    { t: "order", p: "ذرا دروازہ بند کر دو گے؟ (اسی کمرے کا دروازہ)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "وہی دروازہ جسے دونوں جانتے ہیں، اس لیے آرٹیکل the۔" },
    { t: "order", p: "میں کافی نہیں پیتا", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "کافی کی عام بات ہو رہی ہے، اس لیے آرٹیکل نہیں لگتا۔" },

    { t: "fill", q: "I'm __ university student.", p: "میں یونیورسٹی کا طالب علم ہوں", a: ["a"], o: ["an", "the", "two"], why: "university \"ی\" کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل a۔ فیصلہ ہجے سے نہیں، آواز سے ہوتا ہے۔" },
    { t: "fill", q: "I have __ older sister.", p: "میری ایک بڑی بہن ہے", a: ["an"], o: ["a", "the", "two"], why: "older واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an۔" },
    { t: "fill", q: "I don't like __.", p: "مجھے بلیاں پسند نہیں (عام طور پر، سب بلیاں)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "پوری قسم کی بات ہو تو اسم جمع میں اور آرٹیکل کے بغیر آتا ہے: cats۔" },

    { t: "type", p: "میرے پاس ایک آئیڈیا ہے", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "الفاظ: have · idea — واول کی آواز سے پہلے کون سا آرٹیکل؟", x: ["a"], why: "idea واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an آتا ہے۔" },
    { t: "type", p: "مجھے کتے پسند ہیں (عام طور پر، سب کتے)", a: ["I like dogs", "I love dogs"], hint: "الفاظ: like · dog — عام بات ہو تو جمع", x: ["dog", "a"], why: "پوری قسم کی بات ہو تو اسم جمع میں اور آرٹیکل کے بغیر آتا ہے: dogs۔" },
    { t: "type", p: "چلو، دوپہر کا کھانا کھاتے ہیں (Let's سے شروع کریں)", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "الفاظ: let's · have · lunch — کھانے کے نام سے پہلے آرٹیکل؟", x: ["a", "the"], why: "کھانے کے ناموں (breakfast، lunch، dinner) سے پہلے آرٹیکل نہیں لگتا۔" }
  ],

  be: [
    { t: "mc", q: "انگریزی میں: \"میں تھکا ہوا ہوں\"", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "حالت بتانی ہو اور جملے میں کوئی اور فعل نہ ہو تو be ضروری ہے: I'm tired۔" },
    { t: "mc", q: "انگریزی میں: \"کیا وہ (لڑکا) انگریزی بولتا ہے؟\"", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "he کے ساتھ does آتا ہے، اور does کے بعد فعل کی پہلی فارم، -s کے بغیر۔ speak کے ساتھ is نہیں لگتا۔" },
    { t: "mc", q: "انگریزی میں: \"وہ (لڑکی) کام پر ہے\"", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "جگہ بتانے کے لیے be آتا ہے، اور she کے ساتھ is۔" },
    { t: "mc", q: "سوال Do you like coffee کا جواب \"ہاں\" میں کیسے دیا جاتا ہے؟", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "سوال do سے ہوا ہے، تو جواب بھی do سے دیں: Yes, I do۔ صرف Yes, I like ادھورا ہے۔" },
    { t: "mc", q: "انگریزی میں: \"وہ (لڑکی) گوشت نہیں کھاتی\"", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she کا منفی جملہ doesn't اور فعل کی پہلی فارم سے بنتا ہے، -s کے بغیر۔" },

    { t: "order", p: "میرا بھائی لاہور میں کام کرتا ہے", a: ["My", "brother", "works", "in", "Lahore"], x: ["work", "is"], why: "فاعل ایک شخص ہے (he)، اس لیے فعل پر -s لگتا ہے: works۔ اور work کے ساتھ is نہیں آتا۔" },
    { t: "order", p: "میں طالب علم نہیں ہوں", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be کا منفی not سے بنتا ہے، don't سے نہیں۔ حیثیت سے پہلے آرٹیکل a آتا ہے۔" },
    { t: "order", p: "اس (لڑکی) کے پاس دو کتے ہیں", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she کے ساتھ has آتا ہے۔ دو ہیں، اس لیے جمع کا -s لگتا ہے: dogs۔" },

    { t: "fill", q: "My brother __ in Lahore.", p: "میرا بھائی لاہور میں رہتا ہے", a: ["lives"], o: ["live", "is live", "living"], why: "فاعل he ہے، اس لیے فعل پر -s لگتا ہے: lives۔ اور live کے ساتھ is نہیں آتا۔" },
    { t: "fill", q: "__ you tired?", p: "کیا تم تھکے ہوئے ہو؟", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired صفت ہے، فعل نہیں۔ جملے میں کوئی عام فعل نہیں، اس لیے سوال be سے بنتا ہے، اور you کے ساتھ are آتا ہے۔" },
    { t: "fill", q: "We __ hungry.", p: "ہمیں بھوک لگی ہے", a: ["are"], o: ["is", "am", "do"], why: "hungry صفت ہے، فعل نہیں۔ جملے میں کوئی عام فعل نہیں، اس لیے be آتا ہے، اور we کے ساتھ are۔" },

    { t: "type", p: "وہ (لڑکا) استاد ہے", a: ["He's a teacher", "He is a teacher"], hint: "لفظ: teacher — be اور پیشے سے پہلے آرٹیکل", x: ["the"], why: "پہچان بتانے کے لیے be آتا ہے، اور پیشے سے پہلے آرٹیکل a۔" },
    { t: "type", p: "مجھے کافی پسند نہیں", a: ["I don't like coffee", "I do not like coffee"], hint: "الفاظ: don't · like · coffee — عام فعل کا منفی", x: ["am"], why: "like عام فعل ہے، اس لیے منفی don't سے بنتا ہے۔ I'm not like غلط ہے۔" },
    { t: "type", p: "کیا اس (لڑکی) کے پاس ایک بلی ہے؟ (Does سے شروع کریں)", a: ["Does she have a cat"], hint: "الفاظ: does · have · cat — ایک بلی سے پہلے آرٹیکل", x: ["has"], why: "does آئے تو فعل پہلی فارم میں رہتا ہے: have۔ ایک بلی ہے، اس لیے آرٹیکل a۔" }
  ],

  polite: [
    { t: "mc", q: "کیفے میں ایک لاٹے منگوانے کا سب سے فطری جملہ کون سا ہے؟", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "دکان یا کیفے میں Can I get سے شروع ہونے والا سوال عام ہے۔ ایک لاٹے ہے، اس لیے آرٹیکل a بھی آتا ہے۔" },
    { t: "mc", q: "اجنبی سے مدد مانگنے کا سب سے شائستہ جملہ کون سا ہے؟", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "اجنبی سے درخواست Could you سے کی جاتی ہے۔ صرف Help me حکم لگتا ہے۔" },
    { t: "mc", q: "سامنے والے کی بات سمجھ نہ آئے تو شائستگی سے دوبارہ کیسے پوچھا جائے؟", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again شائستگی سے بات دہرانے کی درخواست ہے۔" },
    { t: "mc", q: "بہت شائستگی سے: \"کیا آپ ہماری ایک تصویر کھینچ دیں گے؟\"", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind کے بعد -ing والی شکل آتی ہے: taking۔" },
    { t: "mc", q: "جہاز میں کہنا ہے: \"مجھے کھڑکی والی سیٹ چاہیے\"", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like شائستہ درخواست ہے۔ ایک سیٹ ہے، اس لیے آرٹیکل a۔" },

    { t: "order", p: "ایک لاٹے دے دیں گے؟", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "پہلی بار منگوائی جانے والی ایک چیز ہے، اس لیے آرٹیکل a۔" },
    { t: "order", p: "اگر برا نہ مانیں تو کھڑکی کھول دیں گے؟ (اسی کمرے کی کھڑکی)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind کے بعد -ing والی شکل آتی ہے۔ وہی کھڑکی جسے دونوں جانتے ہیں، اس لیے آرٹیکل the۔" },
    { t: "order", p: "کیا آپ ذرا آہستہ بول سکتے ہیں؟", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you سے شائستہ درخواست بنتی ہے۔ فعل کے ساتھ slowly آتا ہے، slow نہیں۔" },

    { t: "fill", q: "Would you mind __ the door?", p: "اگر برا نہ مانیں تو دروازہ بند کر دیں گے؟", a: ["closing"], o: ["close", "to close", "closed"], why: "mind کے بعد -ing والی شکل آتی ہے: closing۔" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "کیا مجھے ایک آئسڈ کافی مل سکتی ہے؟", a: ["an"], o: ["a", "two", "many"], why: "iced واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an۔" },
    { t: "fill", q: "No, not at __.", p: "جی، ضرور (Would you mind والے سوال کا جواب)", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all کا مطلب ہے \"مجھے بالکل برا نہیں لگے گا\"، یعنی \"جی، ضرور\"۔" },

    { t: "type", p: "کیا آپ میری مدد کر سکتے ہیں؟ (شائستگی سے، could کے ساتھ)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "الفاظ: could · help — شائستہ درخواست", x: ["can"], why: "اجنبی سے درخواست Could you سے کی جاتی ہے۔" },
    { t: "type", p: "مجھے کھڑکی والی سیٹ چاہیے (شائستگی سے، I'd like کے ساتھ)", a: ["I'd like a window seat", "I'd like a window seat please", "I would like a window seat", "I would like a window seat please", "Can I get a window seat", "Can I get a window seat please", "Could I get a window seat", "Could I get a window seat please", "Can I have a window seat", "Can I have a window seat please", "Could I have a window seat", "Could I have a window seat please"], hint: "الفاظ: I'd like · window seat — ایک سیٹ سے پہلے آرٹیکل", x: ["the"], why: "ایک سیٹ کا پہلی بار ذکر ہے، اس لیے آرٹیکل a آتا ہے: a window seat۔" },
    { t: "type", p: "کیا مجھے دو کافی مل سکتی ہیں؟ (Can I get سے شروع کریں)", a: ["Can I get two coffees", "Can I get two coffees please", "Could I get two coffees", "Could I get two coffees please", "Can I have two coffees", "Can I have two coffees please", "Could I have two coffees", "Could I have two coffees please", "I'd like two coffees", "I'd like two coffees please", "I would like two coffees", "I would like two coffees please", "Two coffees", "Two coffees please"], hint: "الفاظ: two · coffee — دو ہوں تو جمع", x: ["coffee"], why: "آرڈر کرتے وقت کافی کپ کے حساب سے گنی جاتی ہے، اس لیے جمع: two coffees۔ اردو میں \"دو کافی\" کہتے ہوئے لفظ نہیں بدلتا، انگریزی میں -s لگتا ہے۔" }
  ],

  tense: [
    { t: "mc", q: "انگریزی میں: \"میں ابھی کافی پی رہا ہوں\"", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "جو کام اسی وقت ہو رہا ہو اس کے لیے be اور -ing والی شکل آتی ہے، اور be چھوڑا نہیں جا سکتا۔" },
    { t: "mc", q: "انگریزی میں: \"پچھلے ویک اینڈ پر میں ساحل پر گیا تھا\"", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go کی دوسری فارم went ہے؛ \"گیا تھا\" کے لیے was نہیں لگتا۔ ساحل سے پہلے آرٹیکل the آتا ہے: the beach۔" },
    { t: "mc", q: "اگلے مہینے کا منصوبہ بتانا ہے: \"میں مری جانے والا ہوں\"", o: ["I'm going to visit Murree next month.", "I visit Murree next month.", "I visited Murree next month.", "I'm going visit Murree next month."], why: "پہلے سے بنے ہوئے منصوبے کے لیے be going to اور فعل کی پہلی فارم آتی ہے۔" },
    { t: "mc", q: "دروازے کی گھنٹی بجی۔ اسی وقت کہنا ہے: \"میں دیکھتی ہوں!\"", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "جو فیصلہ بولتے وقت ہو، اس کے لیے will آتا ہے۔" },
    { t: "mc", q: "فعل see کی دوسری فارم کیا ہے؟", o: ["saw", "seed", "seen", "sawed"], why: "see بے قاعدہ فعل ہے: see، saw، seen۔" },

    { t: "order", p: "میں ایک بینک میں کام کرتا ہوں (ہمیشہ)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "ہمیشہ کی بات کے لیے Simple Present آتا ہے۔ کسی ایک بینک کا پہلی بار ذکر ہے، اس لیے آرٹیکل a۔" },
    { t: "order", p: "میں تمہیں بعد میں فون کروں گا", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "بولتے وقت کیا گیا وعدہ will سے بنتا ہے، اور will کے بعد فعل کی پہلی فارم آتی ہے: call۔" },
    { t: "order", p: "میں نے دو فلمیں دیکھیں", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see کی دوسری فارم saw ہے۔ دو ہیں، اس لیے جمع کا -s لگتا ہے: movies۔" },

    { t: "fill", q: "I __ pizza last night.", p: "کل رات میں نے پیزا کھایا", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "last night گزرا ہوا وقت ہے، اس لیے Simple Past: eat کی دوسری فارم ate ہے (have ہو تو had)۔" },
    { t: "fill", q: "__ you have fun?", p: "مزہ آیا؟", a: ["Did"], o: ["Does", "Are", "Were"], why: "گزری ہوئی بات کا سوال Did اور فعل کی پہلی فارم سے بنتا ہے۔" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "میں اپنے والدین سے ملنے جانے والا ہوں", a: ["to"], o: ["for", "at", "on"], why: "منصوبے کے لیے be going to اور فعل کی پہلی فارم آتی ہے۔" },

    { t: "type", p: "آج میں گھر سے کام کر رہا ہوں", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "الفاظ: work · from home · today — اس وقت جاری کام", x: ["work"], why: "آج جو کام ہو رہا ہے اس کے لیے be اور -ing والی شکل آتی ہے۔" },
    { t: "type", p: "پچھلے ویک اینڈ پر میں ساحل پر گیا تھا", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "الفاظ: go · beach · last weekend — دوسری فارم اور آرٹیکل", x: ["a"], why: "go کی دوسری فارم went ہے (Simple Past)۔ ساحل سے پہلے آرٹیکل the آتا ہے: the beach۔" },
    { t: "type", p: "میں کھانا پکانے کی ایک کلاس لینے والا ہوں (منصوبہ)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "الفاظ: going to · take · cooking class — ایک کلاس سے پہلے آرٹیکل", x: ["the"], why: "پہلے سے بنے ہوئے منصوبے کے لیے going to آتا ہے۔ کسی ایک کلاس کا پہلی بار ذکر ہے، اس لیے آرٹیکل a۔" }
  ],

  prep: [
    { t: "mc", q: "انگریزی میں: \"مئی میں\"", o: ["in May", "on May", "at May", "to May"], why: "مہینے سے پہلے in آتا ہے۔" },
    { t: "mc", q: "انگریزی میں: \"3 مئی کو\"", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "تاریخ سے پہلے on آتا ہے۔ اردو کا \"کو\" یہاں on ہے۔" },
    { t: "mc", q: "انگریزی میں: \"میں (ابھی) بس میں ہوں\"", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "بس اور ٹرین کے ساتھ on آتا ہے، in نہیں۔ وہی بس جس میں ابھی سوار ہیں، اس لیے آرٹیکل the۔" },
    { t: "mc", q: "انگریزی میں: \"رات کو\"", o: ["at night", "on night", "in night", "at the night"], why: "night استثنا ہے: at night، اور آرٹیکل کے بغیر۔" },
    { t: "mc", q: "درست جملہ کون سا ہے؟", o: ["I live in Lahore.", "I live at Lahore.", "I live on Lahore.", "I live in the Lahore."], why: "شہر سے پہلے in آتا ہے، اور شہر کے نام سے پہلے آرٹیکل the نہیں لگتا۔" },

    { t: "order", p: "اسٹیشن پر ملتے ہیں (وہی اسٹیشن جسے دونوں جانتے ہیں)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "ملنے کی جگہ کو ایک نقطہ سمجھیں تو at آتا ہے۔ وہی اسٹیشن جسے دونوں جانتے ہیں، اس لیے آرٹیکل the۔" },
    { t: "order", p: "میرا فون میز پر ہے (یہی سامنے والی میز)", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "سطح کے اوپر کے لیے on آتا ہے۔ سامنے والی وہی میز، اس لیے آرٹیکل the۔" },
    { t: "order", p: "اگلے ہفتے ملتے ہیں", a: ["See", "you", "next", "week"], x: ["on"], why: "next سے پہلے کوئی preposition نہیں لگتا۔" },

    { t: "fill", q: "The meeting is __ three.", p: "میٹنگ 3 بجے ہے", a: ["at"], o: ["on", "to", "of"], why: "ٹھیک وقت سے پہلے at آتا ہے۔" },
    { t: "fill", q: "I was born __ 1998.", p: "میں 1998 میں پیدا ہوا", a: ["in"], o: ["on", "at", "to"], why: "سال سے پہلے in آتا ہے۔" },
    { t: "fill", q: "See you __ Friday.", p: "جمعہ کو ملتے ہیں", a: ["on"], o: ["in", "at", "to"], why: "ہفتے کے دن سے پہلے on آتا ہے: on Friday۔" },

    { t: "type", p: "میں صبح کے وقت کافی پیتا ہوں", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "الفاظ: coffee · morning — in اور آرٹیکل", x: ["at"], why: "دن کے حصے کے ساتھ in آتا ہے، اور آرٹیکل the ضرور لگتا ہے: in the morning۔" },
    { t: "type", p: "میں گھر پر ہوں", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "الفاظ: at · home — آرٹیکل کے بغیر", x: ["the"], why: "at home آرٹیکل the کے بغیر آتا ہے۔" },
    { t: "type", p: "اگلے ویک اینڈ پر ملتے ہیں (See you سے شروع کریں)", a: ["See you next weekend"], hint: "الفاظ: see · next weekend — next سے پہلے preposition؟", x: ["on"], why: "next سے پہلے کوئی preposition نہیں لگتا۔" }
  ],

  smalltalk: [
    { t: "mc", q: "دفتر کا ساتھی How was your weekend پوچھے تو کیا جواب دیا جائے؟", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "سوال گزرے ہوئے وقت کا ہے، اس لیے جواب Simple Past میں دیں اور ایک بات اپنی طرف سے بڑھا دیں۔" },
    { t: "mc", q: "کوئی کہے I don't drink coffee تو \"میں بھی نہیں پیتا\" کیسے کہا جائے؟", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "منفی جملے سے اتفاق کے لیے Me neither کہتے ہیں۔" },
    { t: "mc", q: "بات چیت سلیقے سے ختم کرنی ہو تو کیا کہتے ہیں؟", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going نرمی سے رخصت لینے کا جملہ ہے۔" },
    { t: "mc", q: "پہلی بار ملنے والے سے بات شروع کرنے کے لیے کون سا جملہ اچھا ہے؟", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "موسم سب سے محفوظ موضوع ہے۔ تنخواہ، شادی اور وزن کے سوال پہلی ملاقات میں ذاتی سمجھے جاتے ہیں۔" },
    { t: "mc", q: "کوئی کہے I went to Murree last weekend تو دلچسپی کیسے ظاہر کی جائے؟", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really اور That sounds fun سے دلچسپی ظاہر ہوتی ہے۔" },

    { t: "order", p: "ویک اینڈ کا کوئی پروگرام ہے؟", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "اس سوال میں plans جمع میں آتا ہے۔ اسی آنے والے ویک اینڈ کی بات ہے، اس لیے آرٹیکل the۔" },
    { t: "order", p: "آپ سے بات کر کے اچھا لگا", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "یہ بات چیت ختم کرتے وقت کا جملہ ہے۔ nice کے بعد talking آتا ہے، talk نہیں۔" },
    { t: "order", p: "مجھے ڈراؤنی فلمیں پسند نہیں", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "فلموں کی عام بات ہے، اس لیے جمع movies، اور آرٹیکل کے بغیر۔" },

    { t: "fill", q: "Pretty good! How __ you?", p: "کافی اچھا! اور تمہارا کیا حال ہے؟", a: ["about"], o: ["for", "with", "of"], why: "مختصر جواب دے کر How about you سے وہی سوال پلٹ کر پوچھنا اچھے آداب میں شامل ہے۔" },
    { t: "fill", q: "I know, __?", p: "بالکل، ہے نا!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right زور دے کر اتفاق کرنے کا جملہ ہے۔ right کے شروع میں r ہے، l نہیں۔" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "آج کل کوئی اچھا شو یا فلم دیکھی؟", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "ایسے سوال میں any کے بعد قابلِ شمار اسم جمع میں آتا ہے: shows یا movies۔" },

    { t: "type", p: "تمہارا ویک اینڈ کیسا رہا؟", a: ["How was your weekend"], hint: "الفاظ: how · weekend — گزرا ہوا وقت", x: ["is"], why: "پچھلے ویک اینڈ کی بات ہے، اس لیے is نہیں، was آتا ہے۔" },
    { t: "type", p: "آج موسم اچھا ہے (nice کے ساتھ)", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "الفاظ: nice · weather · today — آرٹیکل لگے گا یا نہیں؟", x: ["a"], why: "weather ناقابلِ شمار اسم ہے، اس لیے اس کے ساتھ آرٹیکل a نہیں لگتا: a nice weather غلط ہے۔" },
    { t: "type", p: "مجھے فلمیں دیکھنا پسند ہے (like کے ساتھ)", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "الفاظ: like · watch · movie — عام بات ہو تو جمع", x: ["movie"], why: "فلموں کی عام بات ہے، اس لیے جمع: movies۔" }
  ],

  phrasal: [
    { t: "mc", q: "انگریزی میں: \"اسے چلا دو\"", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "ضمیر it فریزل ورب کے بیچ میں آتا ہے: turn it on۔" },
    { t: "mc", q: "انگریزی میں: \"دودھ ختم ہو گیا ہے\"", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of کا مطلب ہے کسی چیز کا ختم ہو جانا۔ of نہ چھوڑیں۔" },
    { t: "mc", q: "انگریزی میں: \"میں ملتان میں پلا بڑھا\"", o: ["I grew up in Multan.", "I grew in Multan up.", "I growed up in Multan.", "I grew out in Multan."], why: "grow up کا مطلب ہے پلنا بڑھنا، اور اس کی دوسری فارم grew up ہے۔" },
    { t: "mc", q: "انگریزی میں: \"کیا تم میری بلی کی دیکھ بھال کر سکتے ہو؟\"", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after کا مطلب ہے دیکھ بھال کرنا، اور یہ بیچ سے نہیں کھلتا۔ look for کا مطلب ڈھونڈنا ہے۔" },
    { t: "mc", q: "انگریزی میں: \"میں تمہیں 7 بجے لینے آؤں گا\"", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "ضمیر you فریزل ورب کے بیچ میں آتا ہے: pick you up۔" },

    { t: "order", p: "میں اپنی عینک ڈھونڈ رہا ہوں", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "عینک کے لیے glasses ہمیشہ جمع میں آتا ہے؛ glass کا مطلب شیشہ یا گلاس ہے۔ ڈھونڈنا look for ہے۔" },
    { t: "order", p: "چلو کوئی منصوبہ سوچتے ہیں", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with کا مطلب ہے سوچ کر نکالنا۔ کوئی ایک منصوبہ جو ابھی بنا نہیں، اس لیے آرٹیکل a۔" },
    { t: "order", p: "میں تمہیں لینے آؤں گا", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "ضمیر you فریزل ورب کے بیچ میں آتا ہے: pick you up۔" },

    { t: "fill", q: "Can you turn it __?", p: "ذرا اسے بند کر دو گے؟", a: ["off"], o: ["of", "on", "out"], why: "بند کرنا turn off ہے۔ off کو of کے ہجوں سے نہ ملائیں۔" },
    { t: "fill", q: "I work __ every morning.", p: "میں روز صبح ورزش کرتی ہوں", a: ["out"], o: ["up", "off", "on"], why: "work out کا مطلب ہے ورزش کرنا۔" },
    { t: "fill", q: "We ran out of __.", p: "انڈے ختم ہو گئے ہیں", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "انڈے قابلِ شمار ہیں، اس لیے ختم ہونے کی بات جمع میں ہوتی ہے: eggs۔" },

    { t: "type", p: "مہربانی کر کے اسے بند کر دیں (turn off کے ساتھ)", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "الفاظ: turn · off — ضمیر بیچ میں", x: ["on"], why: "ضمیر it فریزل ورب کے بیچ میں آتا ہے: turn it off۔" },
    { t: "type", p: "میں دو بلیوں کی دیکھ بھال کرتا ہوں", a: ["I look after two cats", "I take care of two cats"], hint: "الفاظ: look after · two · cat — دو ہوں تو جمع", x: ["cat"], why: "look after کا مطلب ہے دیکھ بھال کرنا۔ دو ہیں، اس لیے جمع کا -s لگتا ہے: cats۔" },
    { t: "type", p: "دودھ ختم ہو گیا ہے (run out of کے ساتھ)", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "الفاظ: run out of · milk — آرٹیکل لگے گا یا نہیں؟", x: ["a"], why: "milk ناقابلِ شمار اسم ہے، اس لیے اس کے ساتھ آرٹیکل a نہیں لگتا۔" }
  ],

  numbers: [
    { t: "mc", q: "انگریزی میں 10,000 (دس ہزار) کو کیا کہتے ہیں؟", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "گنتی تین تین ہندسوں میں چلتی ہے: 10 اور پھر thousand۔ عدد کے بعد thousand پر جمع کا -s نہیں لگتا۔" },
    { t: "mc", q: "انگریزی میں 1,000,000 (دس لاکھ) کو کیا کہتے ہیں؟", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "دو کاما ہوں تو million: دس لاکھ برابر ہے one million کے۔ عدد کے بعد million پر جمع کا -s نہیں لگتا۔" },
    { t: "mc", q: "وقت 9:05 کیسے بولتے ہیں؟", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1 سے 9 منٹ سے پہلے oh لگتا ہے: nine oh five۔" },
    { t: "mc", q: "قیمت $4.99 بولنے کا سب سے عام طریقہ کون سا ہے؟", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "قیمت دو عددوں کی طرح بولی جاتی ہے: four ninety-nine۔" },
    { t: "mc", q: "سال 2026 انگریزی میں کیسے بولتے ہیں؟", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "سال دو دو ہندسے ملا کر بولا جاتا ہے: twenty twenty-six۔" },

    { t: "order", p: "سات بج کر پندرہ منٹ ہوئے ہیں", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 کے لیے fifteen ہے (زور آخری ٹکڑے پر) اور 50 کے لیے fifty (زور پہلے ٹکڑے پر)۔" },
    { t: "order", p: "یہ پندرہ ڈالر کا ہے", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "ایک ڈالر سے زیادہ ہو تو جمع: dollars۔ اردو میں \"پندرہ ڈالر\" کہتے ہوئے لفظ نہیں بدلتا، انگریزی میں -s لگتا ہے۔" },
    { t: "order", p: "ہفتے میں دو بار", a: ["twice", "a", "week"], x: ["the", "one"], why: "\"ہفتے میں اتنی بار\" کے لیے آرٹیکل a آتا ہے: twice a week۔ یہاں the یا one نہیں آتا۔" },

    { t: "fill", q: "It's __ quarter past ten.", p: "سوا دس بجے ہیں", a: ["a"], o: ["the", "one", "an"], why: "quarter (چوتھائی گھنٹہ) سے پہلے آرٹیکل a آتا ہے۔" },
    { t: "fill", q: "That's fifty __ rupees.", p: "یہ پچاس ہزار روپے کا ہے", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 یعنی fifty thousand۔ عدد کے بعد thousand پر جمع کا -s نہیں لگتا۔" },
    { t: "fill", q: "I'll be there in ten __.", p: "میں 10 منٹ میں پہنچ جاؤں گا", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10 منٹ ہیں، اس لیے جمع: minutes۔ اردو میں \"دس منٹ\" کہتے ہوئے لفظ نہیں بدلتا، انگریزی میں -s لگتا ہے۔" },

    { t: "type", p: "ساڑھے تین بجے ہیں", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "الفاظ: three · thirty — گھنٹہ اور منٹ سیدھے بولیں", x: ["thirteen"], why: "گھنٹہ اور منٹ سیدھے بولیں: three thirty۔ اسے thirteen (13) سے نہ ملائیں۔" },
    { t: "type", p: "بیس ڈالر ہیں (قیمت بتانی ہے؛ It's سے شروع کریں)", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "الفاظ: twenty · dollar — ایک سے زیادہ ہو تو جمع", x: ["dollar"], why: "ایک سے زیادہ ڈالر ہوں تو جمع کا -s لگتا ہے: dollars۔" },
    { t: "type", p: "میں ہفتے میں دو بار ورزش کرتا ہوں (twice کے ساتھ)", a: ["I work out twice a week", "I exercise twice a week"], hint: "الفاظ: work out · twice · week — ہفتے سے پہلے کون سا آرٹیکل؟", x: ["the"], why: "\"ہفتے میں\" کے لیے آرٹیکل a آتا ہے: a week۔ یہاں the week غلط ہے۔" }
  ],

  email: [
    { t: "mc", q: "ای میل Dear سے شروع کرنی ہو تو سب سے مناسب سلام کون سا ہے؟", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear کے بعد لقب اور خاندانی نام آتا ہے، جیسے Dear Mr. Smith۔ صرف عہدہ نہ لکھیں، اور Sir کو نام کے ساتھ نہ جوڑیں۔" },
    { t: "mc", q: "یہ بتانا ہو کہ رپورٹ ای میل کے ساتھ منسلک ہے تو کیا لکھا جائے؟", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "وہی رپورٹ جو سامنے والے کو مل رہی ہے، اس لیے آرٹیکل the۔" },
    { t: "mc", q: "انگریزی میں: \"آخری تاریخ کیا ہے؟\"", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "اسی کام کی آخری تاریخ مراد ہے، اس لیے آرٹیکل the۔" },
    { t: "mc", q: "جواب دیر سے دیا ہو تو معذرت کی جگہ کون سا مثبت جملہ لکھ سکتے ہیں؟", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience معذرت کے بغیر بھی شائستہ لگتا ہے۔ ہجوں کا دھیان رکھیں: patients کا مطلب \"مریض\" ہے۔" },
    { t: "mc", q: "جمعے کی ای میل کے آخر میں کیا لکھنا اچھا ہے؟", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "ایک ویک اینڈ کی بات ہے، اس لیے آرٹیکل a آتا ہے اور weekend واحد میں رہتا ہے۔" },

    { t: "order", p: "میں نے رپورٹ منسلک کر دی ہے", a: ["I've", "attached", "the", "report"], x: ["a"], why: "وہی رپورٹ جو سامنے والے کو مل رہی ہے، اس لیے آرٹیکل the۔" },
    { t: "order", p: "چلیں، ایک میٹنگ رکھ لیتے ہیں", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "کوئی ایک میٹنگ جو ابھی طے نہیں ہوئی، اس لیے آرٹیکل a۔" },
    { t: "order", p: "میں دیکھ کر آپ کو دوبارہ بتاتا ہوں", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you کا مطلب ہے \"دوبارہ رابطہ کروں گا\"۔ اس میں to آتا ہے، for نہیں۔" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "کیا آپ جمعہ تک فائل بھیج سکتے ہیں؟", a: ["by"], o: ["until", "in", "at"], why: "آخری تاریخ (\"تک\") کے لیے by کے ساتھ دن یا تاریخ آتی ہے۔ until کا مطلب ہے \"اس وقت تک مسلسل\"۔" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "میں شیڈول کے بارے میں پوچھنے کے لیے لکھ رہا ہوں", a: ["to"], o: ["for", "about", "at"], why: "مقصد بتانے کے لیے I'm writing to اور فعل کی پہلی فارم آتی ہے۔ اردو کا \"کے لیے\" یہاں for نہیں۔" },
    { t: "fill", q: "Thanks for all your hard __!", p: "آپ سب کی محنت کا بہت شکریہ!", a: ["work"], o: ["works", "working", "job"], why: "work (کام) ناقابلِ شمار اسم ہے، اس لیے اس پر جمع کا -s نہیں لگتا۔" },

    { t: "type", p: "کل میری چھٹی ہے (off کے ساتھ)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "الفاظ: off · tomorrow — be اور off", x: ["do"], why: "چھٹی کے دن کے لیے be off آتا ہے: I'm off tomorrow۔" },
    { t: "type", p: "میں نے فائل منسلک کر دی ہے", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "الفاظ: attach · file — وہی فائل", x: ["a"], why: "وہی فائل جو سامنے والے کو مل رہی ہے، اس لیے آرٹیکل the۔" },
    { t: "type", p: "ویک اینڈ اچھا گزرے!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "الفاظ: have · great · weekend — ایک ویک اینڈ سے پہلے آرٹیکل", x: ["the"], why: "ایک ویک اینڈ کی بات ہے، اس لیے آرٹیکل a آتا ہے: a great weekend۔" }
  ],

  idioms: [
    { t: "mc", q: "انگریزی میں: \"یہ تو بائیں ہاتھ کا کھیل ہے\"", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "محاورہ پورا کا پورا یاد کریں: آرٹیکل a کے ساتھ، اور cake واحد میں۔" },
    { t: "mc", q: "انگریزی محاورے میں: \"یہ بہت ہی مہنگا ہے\"", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an؛ leg کانسوننٹ کی آواز سے، اس لیے a۔" },
    { t: "mc", q: "میٹنگ میں بھی کہہ سکتے ہیں: \"آج کے لیے اتنا کافی ہے\"", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day ایسا محاورہ ہے جو آرٹیکل a سمیت یاد کیا جاتا ہے۔" },
    { t: "mc", q: "انگریزی میں: \"میں خوشی سے پھولا نہیں سما رہا\"", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine میں نہ آرٹیکل ہے، نہ جمع کا -s۔" },
    { t: "mc", q: "ان میں سے کون سا سلینگ ہے جو صرف دوستوں کے درمیان بولا جاتا ہے؟", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap نوجوانوں کا سلینگ ہے؛ مطلب ہے \"سچ کہہ رہا ہوں\"۔ باقی تینوں محاورے ہیں جو دفتر میں بھی چلتے ہیں۔" },

    { t: "order", p: "میں پوری توجہ سے سن رہا ہوں", a: ["I'm", "all", "ears"], x: ["ear"], why: "لفظی مطلب ہے \"میں سراپا کان ہوں\"، اس لیے جمع: ears۔" },
    { t: "order", p: "مجھے دل لگا کر پڑھنا ہے", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books میں آرٹیکل the اور جمع books دونوں جوں کے توں آتے ہیں۔" },
    { t: "order", p: "یہ میری پسند کی چیز نہیں", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea پورا یاد کریں۔ my پہلے سے موجود ہے، اس لیے آرٹیکل نہیں لگتا۔" },

    { t: "fill", q: "Kill two __ with one stone.", p: "ایک تیر سے دو شکار", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "دو پرندے ہیں، اس لیے جمع: birds۔ انگریزی محاورے میں تیر کی جگہ پتھر ہے اور شکار کی جگہ پرندے۔" },
    { t: "fill", q: "Speak of the __!", p: "شیطان کا نام لیا، شیطان حاضر!", a: ["devil"], o: ["cat", "angel", "bird"], why: "اردو کی طرح انگریزی محاورے میں بھی شیطان ہی آتا ہے: devil۔" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "میری طبیعت کچھ ٹھیک نہیں", a: ["the"], o: ["a", "an", "my"], why: "under the weather میں آرٹیکل the جوں کا توں آتا ہے۔" },

    { t: "type", p: "یہ تو بائیں ہاتھ کا کھیل ہے (cake والا محاورہ)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "الفاظ: piece · cake — آرٹیکل نہ بھولیں", x: ["the"], why: "a piece of cake میں آرٹیکل a ضرور آتا ہے۔" },
    { t: "type", p: "دعا ہے کہ کام بن جائے (انگلیوں والا محاورہ)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "الفاظ: keep · finger · crossed — کتنی انگلیاں؟", x: ["finger"], why: "دو انگلیاں ایک دوسری پر چڑھائی جاتی ہیں، اس لیے جمع: fingers۔" },
    { t: "type", p: "آج کے لیے اتنا کافی ہے (day والا محاورہ)", a: ["Let's call it a day"], hint: "الفاظ: call it · day — یہاں the نہیں", x: ["the"], why: "call it a day میں آرٹیکل a آتا ہے، the نہیں۔" }
  ]
};
