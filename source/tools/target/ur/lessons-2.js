/* en-ur lessons, part 2 (EN-UR-2): numbers, questions, imperative, postpositions, possessive, have, compare, habitual, time.
   Every pron comes from tools/target/ur/respell.js. */
module.exports = [
{
  id: "numbers",
  title: "Numbers 1 to 100",
  blurb: "Count to 100, say prices in rupees, and put a noun in the plural after a number.",
  deck: "Numbers and money",
  body: `
<p>English builds most numbers from parts: twenty-one, twenty-two, twenty-five. Urdu does not. Every number from 1 to 100 is its own word, so 25 is not "twenty five" but one new word, <b>پچیس</b> <i>pacchīs</i>. That sounds like a lot, but you learn them a few at a time, and the first twenty and the tens carry you a long way.</p>
<h3>1 to 20</h3>
<div class="tbl"><table><tr><th>1–10</th><th></th><th>11–20</th><th></th></tr>
<tr><td class="k">ایک</td><td>ek (1)</td><td class="k">گیارہ</td><td>gyārah (11)</td></tr>
<tr><td class="k">دو</td><td>do (2)</td><td class="k">بارہ</td><td>bārah (12)</td></tr>
<tr><td class="k">تین</td><td>tīn (3)</td><td class="k">تیرہ</td><td>terah (13)</td></tr>
<tr><td class="k">چار</td><td>chār (4)</td><td class="k">چودہ</td><td>chaudah (14)</td></tr>
<tr><td class="k">پانچ</td><td>pā̃ch (5)</td><td class="k">پندرہ</td><td>pandrah (15)</td></tr>
<tr><td class="k">چھ</td><td>chhe (6)</td><td class="k">سولہ</td><td>solah (16)</td></tr>
<tr><td class="k">سات</td><td>sāt (7)</td><td class="k">سترہ</td><td>satrah (17)</td></tr>
<tr><td class="k">آٹھ</td><td>āṭh (8)</td><td class="k">اٹھارہ</td><td>aṭhārah (18)</td></tr>
<tr><td class="k">نو</td><td>nau (9)</td><td class="k">انیس</td><td>unnīs (19)</td></tr>
<tr><td class="k">دس</td><td>das (10)</td><td class="k">بیس</td><td>bīs (20)</td></tr></table></div>
<p>Final <b>ہ</b> in the numbers 11 to 18 is said as a light h: <i>bārah</i>.</p>
<h3>The tens, and the numbers between</h3>
<div class="tbl"><table><tr><th>30</th><th>40</th><th>50</th><th>60</th><th>70</th><th>80</th><th>90</th><th>100</th></tr>
<tr><td class="k">تیس</td><td class="k">چالیس</td><td class="k">پچاس</td><td class="k">ساٹھ</td><td class="k">ستر</td><td class="k">اسی</td><td class="k">نوے</td><td class="k">سو</td></tr>
<tr><td>tīs</td><td>chālīs</td><td>pachās</td><td>sāṭh</td><td>sattar</td><td>assī</td><td>navve</td><td>sau</td></tr></table></div>
<p>The numbers in between sound related to their ten, but they change in ways you cannot work out: <b>اکیس</b> <i>ikkīs</i> (21), <b>پچیس</b> (25), <b>ننانوے</b> <i>ninnānve</i> (99). Learn the ones you use most (your age, prices, phone numbers) and recognise the rest when you hear them.</p>
{{ex:میری عمر پچیس سال ہے۔|merī umr pacchīs sāl hai.|I'm twenty-five.}}
<h3>Big numbers</h3>
<p><b>سو</b> <i>sau</i> is a hundred and <b>ہزار</b> <i>hazār</i> a thousand. Pakistan also counts in <b>لاکھ</b> <i>lākh</i> (100,000) and <b>کروڑ</b> <i>karoṛ</i> (10 million), so English "a million" is <b>دس لاکھ</b>.</p>
{{ex:ایک لاکھ روپے|ek lākh rupaye|a hundred thousand rupees}}
<h3>More than one: the noun goes plural</h3>
<p>English adds -s after a number, and Urdu also makes the noun plural, in the plural forms you already know. Adjectives and the verb agree with it: plural <b>ہیں</b>, not <b>ہے</b>. A noun that never changes, like <b>گھر</b> <i>ghar</i>, stays as it is: <b>دو گھر</b>, two houses. And <b>ایک</b> also does the job of English "a": <b>ایک کتاب</b> is "one book" or "a book".</p>
{{ex:یہ دو کتابیں ہیں۔|yeh do kitābẽ haĩ.|These are two books.}}
{{ex:تین لڑکے اور دو لڑکیاں|tīn laṛke aur do laṛkiyā̃|three boys and two girls}}
{{ex:پانچ بڑے کمرے|pā̃ch baṛe kamre|five big rooms}}
<h3>Rupees and prices</h3>
<p>One rupee is <b>ایک روپیہ</b> <i>ek rupayā</i>; more than one is <b>روپے</b> <i>rupaye</i>. Shops write prices in the digits you know (Rs 250), and you say them as words.</p>
{{ex:دو سو پچاس روپے|do sau pachās rupaye|250 rupees}}
{{ex:ایک روپیہ|ek rupayā|one rupee}}
<h3>Urdu digits</h3>
<p>Pakistani shops, prices and phones mostly use the digits you know. Urdu digits appear in newspapers, books and some signs. Just recognise them:</p>
<div class="tbl"><table dir="ltr"><tr><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
<tr><td class="k">۰</td><td class="k">۱</td><td class="k">۲</td><td class="k">۳</td><td class="k">۴</td><td class="k">۵</td><td class="k">۶</td><td class="k">۷</td><td class="k">۸</td><td class="k">۹</td></tr></table></div>
<div class="tip"><b>Most common mistake:</b> building a number from its parts. <b>بیس پانچ</b> → <b>پچیس</b> (25).</div>
`,
  check: [
    ["How do you say 25 in Urdu?",["بیس پانچ","پچیس","پانچ بیس","بیس اور پانچ"],1,"Every number up to 100 is its own word: 25 is پچیس."],
    ["Which is right for \"two books\"?",["دو کتابیں","دو کتاب","دو کتابا","کتابیں دو"],0,"After a number above one the noun is plural, and the number comes first: دو کتابیں."],
    ["A shop sign says Rs 500. How do you say the price?",["پچاس روپے","پانچ ہزار روپے","پانچ سو روپے","پچپن روپے"],2,"پانچ سو is 500, and more than one rupee is روپے."]
  ],
  practice: [
    ["mc","25 =","پچیس","بیس پانچ","پچاس","پندرہ","Every number up to 100 is its own word: 25 is پچیس, not twenty plus five."],
    ["mc","12 =","بارہ","دو دس","بیس","دس دو","The numbers 11 to 20 are single words too: 12 is بارہ."],
    ["mc","Rs 100 =","سو روپے","سو پیسے","دس روپے","ہزار روپے","سو is a hundred, and more than one rupee is the plural روپے; پیسے are the small coins."],
    ["mc","three girls =","تین لڑکیاں","تین لڑکی","تین لڑکا","لڑکیاں تین","After تین the noun is plural, and the number comes before it: تین لڑکیاں."],
    ["mc","Rs 100,000 is usually said as…","ایک لاکھ روپے","سو ہزار روپے","ایک کروڑ روپے","دس ہزار روپے","Pakistan counts a hundred thousand as one لاکھ; a کروڑ is ten million."],
    ["or","These are two books","یہ دو کتابیں ہیں","کتاب ہے","After دو the feminine noun goes plural, کتابیں, and the verb agrees: ہیں."],
    ["or","four big rooms","چار بڑے کمرے","بڑا کمرہ","In the plural the adjective agrees with the noun: بڑے کمرے."],
    ["or","fifty rupees","پچاس روپے","روپوں","More than one rupee takes the plural روپے."],
    ["fi","یہ __ روپے ہیں۔","This is twenty-five rupees.","پچیس","بیس پانچ|پچاس|پندرہ","25 is its own word: پچیس."],
    ["fi","یہ تین __ ہیں۔","These are three boys.","لڑکے","لڑکا|لڑکی|لڑکیاں","More than one boy: لڑکا becomes the plural لڑکے."],
    ["fi","یہ دو کرسیاں __۔","These are two chairs.","ہیں","ہے|ہوں|ہو","Two chairs are plural, so the verb is ہیں."],
    ["ty","three boys","تین لڑکے","تین · لڑکا · more than one","لڑکا","After تین the masculine noun takes its plural: لڑکے."],
    ["ty","These are five books","یہ پانچ کتابیں ہیں","یہ · پانچ · کتاب · ہونا","کتاب ہے","کتاب goes plural after پانچ, and the verb agrees: کتابیں ہیں."],
    ["ty","a hundred rupees","سو روپے|ایک سو روپے","سو · روپیہ","روپوں","More than one rupee takes the plural روپے."]
  ]
},
{
  id: "questions",
  title: "Question words, and saying no with نہیں",
  blurb: "Ask who, what, where, when, why, how and how many, and say \"not\" in the right place.",
  deck: "Questions and connectors",
  body: `
<p>English moves the question word to the front and often adds "do": "Where do you live?" Urdu does neither. Keep the order of the statement, and put the question word where the answer would go, which is usually right before the verb.</p>
{{ex:آپ کہاں رہتے ہیں؟|āp kahā̃ rahte haĩ?|Where do you live? (to a man)}}
<p>The answer has the same shape, with the place in the slot where <b>کہاں</b> was: <b>میں شکاگو میں رہتا ہوں۔</b></p>
<h3>The question words</h3>
<div class="tbl"><table><tr><th>Urdu</th><th></th><th>English</th></tr>
<tr><td class="k">کون</td><td>kaun</td><td>who</td></tr>
<tr><td class="k">کیا</td><td>kyā</td><td>what</td></tr>
<tr><td class="k">کہاں</td><td>kahā̃</td><td>where</td></tr>
<tr><td class="k">کب</td><td>kab</td><td>when</td></tr>
<tr><td class="k">کیوں</td><td>kyõ</td><td>why</td></tr>
<tr><td class="k">کیسا / کیسے / کیسی</td><td>kaisā / kaise / kaisī</td><td>how; what kind of</td></tr>
<tr><td class="k">کتنا / کتنے / کتنی</td><td>kitnā / kitne / kitnī</td><td>how much; how many</td></tr></table></div>
{{ex:یہ کیا ہے؟|yeh kyā hai?|What is this?}}
<p>A handy trick: think of the answer first, then swap the question word into the slot of the missing piece. "It's tea" is <b>یہ چائے ہے</b>, so "What is this?" is <b>یہ کیا ہے؟</b> No other word moves.</p>
{{ex:کلاس کب ہے؟|klās kab hai?|When is the class?}}
<p>Asking about a person you respect, use the plural verb, as you do with <b>آپ</b>: <b>یہ کون ہیں؟</b> (who is this gentleman or lady?). <b>یہ کون ہے؟</b> is fine for a child or a friend.</p>
<p>You already know <b>کیا</b> at the very start of a sentence: there it turns a statement into a yes-no question. In the middle, before the verb, it means "what".</p>
<h3>کیسا and کتنا agree</h3>
<p>English "how" and "how many" never change. <b>کیسا</b> and <b>کتنا</b> end in -ā, so they change like <b>اچھا</b>: -ā for a masculine word, -e for masculine plural and for <b>آپ</b>, -ī for a feminine word.</p>
{{ex:آپ کیسی ہیں؟|āp kaisī haĩ?|How are you? (to a woman)}}
{{ex:کتنی کتابیں ہیں؟|kitnī kitābẽ haĩ?|How many books are there?}}
<p>In casual speech you will also hear the subject moved to the end, <b>کیسے ہیں آپ؟</b> That is fine, but learn the neutral order first.</p>
<h3>Saying no: نہیں before the verb</h3>
<p>English puts "not" after "am" or "do". Urdu puts <b>نہیں</b> <i>nahī̃</i> right before the verb.</p>
{{ex:میں امریکی نہیں ہوں۔|maĩ amrīkī nahī̃ hū̃.|I'm not American.}}
{{ex:آج کلاس کیوں نہیں ہے؟|āj klās kyõ nahī̃ hai?|Why is there no class today?}}
<p>In everyday speech the little <b>ہوں</b> or <b>ہے</b> after <b>نہیں</b> is often dropped when another verb is there. "I don't know" is usually just this:</p>
{{ex:میں نہیں جانتا۔|maĩ nahī̃ jāntā.|I don't know. (a man speaking)}}
<p>A woman says <b>میں نہیں جانتی</b>. And as a one-word answer, <b>نہیں</b> simply means "no"; <b>جی نہیں</b> is the polite "no".</p>
<div class="tip"><b>Most common mistake:</b> English word order. <b>آپ رہتے ہیں کہاں؟</b> → <b>آپ کہاں رہتے ہیں؟</b></div>
`,
  check: [
    ["Where does the question word usually go in an Urdu question?",["At the start, as in English","Where the answer would go, before the verb","At the very end","Right after the verb"],1,"Urdu keeps statement order and puts the question word where the answer goes."],
    ["\"How are you?\" to a woman:",["آپ کیسا ہیں؟","آپ کیسے ہیں؟","آپ کیسی ہیں؟","آپ کیسی ہے؟"],2,"To a woman کیسی is feminine, and آپ always takes ہیں."],
    ["Where does نہیں go?",["Right before the verb","At the very start","At the very end, after ہوں","Anywhere; it does not matter"],0,"نہیں comes right before the verb: میں امریکی نہیں ہوں."]
  ],
  practice: [
    ["mc","Where do you live? (to a man)","آپ کہاں رہتے ہیں؟","آپ کہاں رہتا ہے؟","آپ کون رہتے ہیں؟","آپ کہاں رہتی ہو؟","کہاں goes before the verb, and آپ takes رہتے ہیں."],
    ["mc","Who is this?","یہ کون ہے؟","یہ کیا ہے؟","یہ کہاں ہے؟","یہ کب ہے؟","کون is who; کیا is what."],
    ["mc","Why?","کیوں؟","کیا؟","کون؟","کب؟","کیوں is why; کب is when."],
    ["mc","I'm not a doctor.","میں ڈاکٹر نہیں ہوں۔","میں ڈاکٹر ہوں نہیں۔","میں ڈاکٹر نہ ہوں۔","میں نہیں ڈاکٹر ہوں۔","نہیں goes right before the verb ہوں."],
    ["mc","How many rupees?","کتنے روپے؟","کتنا روپے؟","کتنی روپے؟","کیسے روپے؟","روپے is masculine plural, so کتنے."],
    ["or","How are you? (to a woman, neutral order)","آپ کیسی ہیں","کیسا ہے","To a woman کیسی is feminine, and آپ takes the plural ہیں."],
    ["or","How many books are there?","کتنی کتابیں ہیں","کتنے ہے","کتاب is feminine, so کتنی agrees, and the plural takes ہیں."],
    ["or","What is this? (neutral order)","یہ کیا ہے","کون","The question word goes where the answer would go, before the verb: یہ کیا ہے."],
    ["fi","اسٹیشن __ ہے؟","Where is the station?","کہاں","کیا|کون|کب","کہاں is where; it goes right before the verb."],
    ["fi","یہ کتاب __ ہے؟","What is this book like?","کیسی","کیسا|کیسے|کتنی","کتاب is feminine, so the question word is کیسی."],
    ["fi","میں امریکی __ ہوں۔","I'm not American.","نہیں","نہ|مت|کیا","نہیں goes right before the verb to say not."],
    ["ty","How are you? (to a man)","آپ کیسے ہیں","آپ · کیسا · ہونا","کیسا ہے","آپ is plural: کیسے agrees with it, and the verb is ہیں."],
    ["ty","How many boys are there?","کتنے لڑکے ہیں","کتنا · لڑکا · ہونا","کتنا ہے","Plural boys: کتنے agrees, and the verb is ہیں."],
    ["ty","I don't know (a man speaking; use جاننا)","میں نہیں جانتا|نہیں جانتا|میں نہیں جانتا ہوں","میں · نہیں · جاننا","جانتی","The verb agrees with a man speaking: جانتا."]
  ]
},
{
  id: "imperative",
  title: "Requests and commands: کیجیے, کریں, کرو",
  blurb: "Ask politely, tell a friend what to do, and say \"don't\".",
  deck: "Health and help",
  body: `
<p>English has one command form: "sit", "come", "give". Politeness comes from extra words like "please" or "could you". Urdu builds politeness into the verb itself, and which form you choose depends on whom you are talking to.</p>
<h3>The infinitive and the stem</h3>
<p>The dictionary form of a verb ends in <b>نا</b>: <b>کرنا</b> <i>karnā</i> (to do), <b>بیٹھنا</b> <i>baiṭhnā</i> (to sit). Take off <b>نا</b> and you have the stem: <b>کر</b>, <b>بیٹھ</b>. Every command is built on the stem, and so are most other verb forms, so learn each new verb as a pair: infinitive and stem.</p>
<h3>Polite: for آپ</h3>
<p>For anyone you would call <b>آپ</b>, add <b>یے</b> to the stem, or <b>ئیے</b> when the stem ends in a vowel. A second polite form adds <b>یں</b>; it is very common in Pakistan and a little less formal. Both are correct.</p>
<div class="tbl"><table><tr><th>Infinitive</th><th>Polite (-یے)</th><th>Polite (-یں)</th><th>To a friend (-و)</th></tr>
<tr><td class="k">بیٹھنا</td><td class="k">بیٹھیے</td><td class="k">بیٹھیں</td><td class="k">بیٹھو</td></tr>
<tr><td class="k">آنا</td><td class="k">آئیے</td><td class="k">آئیں</td><td class="k">آؤ</td></tr>
<tr><td class="k">کرنا</td><td class="k">کیجیے</td><td class="k">کریں</td><td class="k">کرو</td></tr>
<tr><td class="k">دینا</td><td class="k">دیجیے</td><td class="k">دیں</td><td class="k">دو</td></tr></table></div>
<p>Four very common verbs are irregular in the <b>یے</b> form: <b>کیجیے</b> (do), <b>دیجیے</b> (give), <b>لیجیے</b> (take), <b>پیجیے</b> (drink).</p>
{{ex:بیٹھیے۔|baiṭhie.|Please sit down.}}
{{ex:اندر آئیے۔|andar āie.|Please come in.}}
{{ex:کل ضرور آئیں۔|kal zarūr āẽ.|Do come tomorrow.}}
<h3>Familiar: for تم</h3>
<p>With friends, children and younger relatives you use <b>تم</b>, and the command ends in <b>و</b>.</p>
{{ex:یہاں بیٹھو۔|yahā̃ baiṭho.|Sit here. (to a friend)}}
<p>With <b>تُو</b>, the bare stem is the command: <b>بیٹھ!</b> Recognise it, but don't use it: outside very close friends and small children it sounds rude.</p>
<h3>Softening: ذرا</h3>
<p>The <b>یے</b> form is already polite, so you rarely need "please". To soften a request further, add <b>ذرا</b> <i>zarā</i>, "just a little". You may hear <b>پلیز</b> in casual city speech. <b>براہ کرم</b> belongs on signs and in formal writing, not in conversation.</p>
{{ex:ذرا پانی دیجیے۔|zarā pānī dījie.|Could I have some water, please?}}
<p>Adjectives inside a request still agree with their noun: <b>پانی</b> is masculine, so it is <b>ٹھنڈا پانی</b>.</p>
{{ex:ٹھنڈا پانی دیجیے۔|ṭhaṇḍā pānī dījie.|Cold water, please.}}
<h3>Don't: مت and نہ</h3>
<p>English says "don't". Urdu puts <b>مت</b> <i>mat</i> or <b>نہ</b> <i>na</i> before the verb. With friends you hear both; in polite requests <b>نہ</b> is the usual, softer word. <b>نہیں</b> is not used with commands.</p>
{{ex:مت جاؤ۔|mat jāo.|Don't go. (to a friend)}}
{{ex:دیر نہ کریں۔|der na karẽ.|Please don't be late.}}
<div class="tip"><b>Most common mistake:</b> the familiar form with a stranger. To a shopkeeper, <b>پانی دو</b> → <b>پانی دیجیے</b>.</div>
`,
  check: [
    ["\"Please sit down\", to a stranger:",["بیٹھو","بیٹھ","بیٹھیے","بیٹھنا"],2,"With آپ use the polite form: بیٹھیے (or بیٹھیں)."],
    ["What is the stem of کرنا?",["کر","کرنا","کرو","کریں"],0,"Take نا off the infinitive: کرنا → کر."],
    ["\"Don't do it!\" to a friend:",["نہیں کرو","مت کرو","کرو نہیں","مت کرتا"],1,"Commands take مت or نہ before the verb, never نہیں."]
  ],
  practice: [
    ["mc","Please sit down. (to a stranger)","بیٹھیے","بیٹھو","بیٹھ","بیٹھنا","With a stranger use the polite آپ form: stem + یے."],
    ["mc","Which form goes with تم?","کرو","کیجیے","کریں","کرنا","With تم the command ends in و: کرو."],
    ["mc","Please give… (polite)","دیجیے","دییے","دو","دینا","دینا is irregular: the polite form is دیجیے."],
    ["mc","Don't go! (to a friend)","مت جاؤ","نہیں جاؤ","نہیں جاتا","مت جاتا","A command takes مت (or نہ), not نہیں, before the -و form."],
    ["mc","Which word softens a request, like \"just\"?","ذرا","بہت","کیا","نہیں","ذرا (\"just a little\") makes a request softer: ذرا پانی دیجیے."],
    ["or","Cold water, please","ٹھنڈا پانی دیجیے","ٹھنڈی","پانی is masculine, so the adjective agrees: ٹھنڈا."],
    ["or","Please give (me) two samosas","دو سموسے دیجیے","سموسہ","After دو the noun goes plural: سموسہ becomes سموسے."],
    ["or","Don't do this (to a friend)","یہ مت کرو","نہیں","Commands use مت before the verb, never نہیں."],
    ["fi","ذرا پانی __۔","Could I have some water, please? (politely)","دیجیے|دیں","دو|دینا|دیا","The polite form of دینا is دیجیے (or دیں)."],
    ["fi","یہاں __۔","Sit here. (to a friend)","بیٹھو","بیٹھیے|بیٹھیں|بیٹھنا","With a friend (تم) the command ends in و: بیٹھو."],
    ["fi","یہ __ کرو۔","Don't do this. (to a friend)","مت|نہ","نہیں|کیا|بھی","A command takes مت or نہ before the verb."],
    ["ty","Cold lassi, please (politely)","ٹھنڈی لسی دیجیے|ٹھنڈی لسی دیں|ذرا ٹھنڈی لسی دیجیے|ذرا ٹھنڈی لسی دیں","ٹھنڈا · لسی · دینا","ٹھنڈا","لسی is feminine, so the adjective agrees: ٹھنڈی."],
    ["ty","Please bring two samosas","دو سموسے لائیے|دو سموسے لائیں|دو سموسے لے آئیے|دو سموسے لے آئیں","دو · سموسہ · لانا","سموسہ","More than one samosa: the plural is سموسے."],
    ["ty","Come in (to a friend)","اندر آؤ|اندر آ جاؤ","اندر · آنا","آئیے","With a friend (تم) the command ends in و: آؤ."]
  ]
},
{
  id: "postpositions",
  title: "Postpositions and the oblique: گھر میں, کمرے میں",
  blurb: "Say in, on, from, to and up to, with the noun in the right form.",
  deck: "Getting around",
  body: `
<p>English puts little words like "in", "on" and "from" before the noun: "in the house". Urdu puts them after it: <b>گھر میں</b> <i>ghar mẽ</i>, literally "house in". These words are called postpositions, because they come after the noun.</p>
{{ex:میں گھر میں ہوں۔|maĩ ghar mẽ hū̃.|I'm at home.}}
<h3>The five basic postpositions</h3>
<div class="tbl"><table><tr><th>Urdu</th><th></th><th>English</th></tr>
<tr><td class="k">میں</td><td>mẽ</td><td>in</td></tr>
<tr><td class="k">پر</td><td>par</td><td>on; at</td></tr>
<tr><td class="k">سے</td><td>se</td><td>from; with</td></tr>
<tr><td class="k">کو</td><td>ko</td><td>to; for (a person)</td></tr>
<tr><td class="k">تک</td><td>tak</td><td>up to; as far as; until</td></tr></table></div>
<p>The postposition <b>میں</b> "in" is spelled exactly like <b>میں</b> "I". You tell them apart by position: "in" always follows a noun or pronoun.</p>
{{ex:کتاب میز پر ہے۔|kitāb mez par hai.|The book is on the table.}}
<p>One postposition can cover several English words: <b>پر</b> is "on" a table but also "at" home, <b>گھر پر</b>, and <b>تک</b> is "as far as" a place or "until" a time.</p>
{{ex:اسٹیشن تک چلیں۔|isṭeshan tak chalẽ.|Please go as far as the station.}}
<h3>The oblique: the noun changes before a postposition</h3>
<p>Here is the part English has no equivalent for. A masculine noun ending in -ā changes its ending to -e when a postposition follows it. This changed form is called the oblique.</p>
<div class="tbl"><table><tr><th>Alone</th><th>Before a postposition</th></tr>
<tr><td class="k">کمرہ</td><td class="k">کمرے میں</td></tr>
<tr><td class="k">لڑکا</td><td class="k">لڑکے کو</td></tr>
<tr><td class="k">گھر</td><td class="k">گھر میں</td></tr>
<tr><td class="k">کتاب</td><td class="k">کتاب پر</td></tr></table></div>
<p>Other singular nouns, like <b>گھر</b> and <b>کتاب</b>, stay as they are. So the change only touches words that end in -ā and are masculine: <b>بچہ</b> becomes <b>بچے</b>, <b>راستہ</b> becomes <b>راستے</b>. The oblique of <b>لڑکا</b> looks just like its plural, <b>لڑکے</b>; the postposition after it tells you which one you are reading.</p>
{{ex:کمرے میں دو کرسیاں ہیں۔|kamre mẽ do kursiyā̃ haĩ.|There are two chairs in the room.}}
<h3>Plurals take -وں</h3>
<p>In the plural, every noun takes <b>وں</b> before a postposition: <b>لڑکوں کو</b>, <b>کتابوں میں</b>, <b>گھروں میں</b>. Nouns in -ī take <b>یوں</b>: <b>لڑکیوں کو</b>.</p>
{{ex:بچوں کو پانی دیجیے۔|bacchõ ko pānī dījie.|Please give the children water.}}
<h3>Words before the noun change too</h3>
<p>An -ā adjective takes -e along with its noun: <b>بڑے کمرے میں</b>. And "this" and "that" have their own forms: <b>یہ</b> becomes <b>اِس</b> <i>is</i> and <b>وہ</b> becomes <b>اُس</b> <i>us</i>. Urdu usually writes both as اس; this course adds a small mark so you can tell which one is meant.</p>
{{ex:اِس کمرے میں|is kamre mẽ|in this room}}
<h3>Pronouns with کو</h3>
<p>"Me" with <b>کو</b> is not <b>میں کو</b> but one word, <b>مجھے</b> <i>mujhe</i> (you will also hear <b>مجھ کو</b>). Likewise <b>ہمیں</b> (us) and <b>تمہیں</b> (you, to a friend), while <b>آپ کو</b> stays two words.</p>
{{ex:مجھے پانی دیجیے۔|mujhe pānī dījie.|Please give me water.}}
<div class="tip"><b>Most common mistake:</b> forgetting the oblique. <b>کمرہ میں</b> → <b>کمرے میں</b>, and <b>میں کو</b> → <b>مجھے</b>.</div>
`,
  check: [
    ["Where does a postposition like میں (in) go?",["Before the noun, like English \"in\"","After the noun","At the end of the sentence","Either place"],1,"Postpositions come after the noun: گھر میں."],
    ["\"in the room\":",["کمرہ میں","میں کمرہ","کمرے میں","کمرا میں"],2,"Before a postposition کمرہ takes its oblique form, کمرے."],
    ["\"me\" with کو is…",["میں کو","میرا","میں","مجھے"],3,"میں + کو becomes one word: مجھے."]
  ],
  practice: [
    ["mc","in the room","کمرے میں","کمرہ میں","میں کمرہ","میں کمرے","The postposition comes after the noun, and کمرہ takes the oblique: کمرے میں."],
    ["mc","Please give me water.","مجھے پانی دیجیے","میں کو پانی دیجیے","میں پانی دیجیے","میرے پانی دیجیے","میں with کو becomes one word: مجھے."],
    ["mc","on the table","میز پر","پر میز","میزے پر","میز کو","پر follows the noun; میز is feminine, so it does not change."],
    ["mc","to the boys","لڑکوں کو","لڑکے کو","لڑکیں کو","لڑکا کو","A plural noun before a postposition takes وں: لڑکوں کو."],
    ["mc","from Lahore","لاہور سے","سے لاہور","لاہور کو","لاہور تک","سے (from) comes after the place."],
    ["or","in this room","اِس کمرے میں","کمرہ","Before the postposition میں, کمرہ takes the oblique کمرے, and یہ becomes اِس."],
    ["or","The boys are in the big room","لڑکے بڑے کمرے میں ہیں","بڑا کمرہ","Before a postposition the adjective and the noun both take the oblique: بڑے کمرے میں."],
    ["or","from the station to the hotel","اسٹیشن سے ہوٹل تک","پر","Each postposition comes after its noun: اسٹیشن سے, ہوٹل تک."],
    ["fi","وہ __ میں ہے۔","He is in the room.","کمرے","کمرہ|کمروں|کمرا","Before the postposition میں, کمرہ takes the oblique: کمرے."],
    ["fi","__ پانی دیجیے۔","Please give me water.","مجھے|مجھ کو","میں|میرا|میرے","With کو, میں has its own form: مجھے."],
    ["fi","کتاب میز __ ہے۔","The book is on the table.","پر","سے|کو|تک","پر (on) comes after the noun."],
    ["ty","in the big room","بڑے کمرے میں","بڑا · کمرہ · میں","کمرہ","Before the postposition میں, both words take the oblique: بڑے کمرے."],
    ["ty","Please give the children water","بچوں کو پانی دیجیے|بچوں کو پانی دیں|پانی بچوں کو دیجیے|پانی بچوں کو دیں","بچہ · کو · پانی · دینا","بچے","A plural noun before the postposition کو takes وں: بچوں کو."],
    ["ty","Please give me the book","مجھے کتاب دیجیے|مجھے کتاب دیں|مجھ کو کتاب دیجیے|مجھ کو کتاب دیں|کتاب مجھے دیجیے|کتاب مجھے دیں","میں + کو · کتاب · دینا","میں","With کو, میں has its own oblique form: مجھے."]
  ]
},
{
  id: "possessive",
  title: "کا, کی, کے: my, your, and family",
  blurb: "Say whose something is, talk about your family, and show respect with the plural.",
  deck: "Family and people",
  body: `
<p>English shows ownership with 's: "Ali's sister". Urdu puts <b>کا</b> <i>kā</i>, <b>کی</b> <i>kī</i> or <b>کے</b> <i>ke</i> after the owner, then the thing owned: <b>علی کی بہن</b>, literally "Ali of sister".</p>
{{ex:علی کی بہن|alī kī bahan|Ali's sister}}
<h3>کا, کی, کے agree with the thing owned</h3>
<p>This is the surprise for English speakers: the ending matches the thing that is owned, not the owner. It works like <b>اچھا</b>:</p>
<div class="tbl"><table><tr><th>Form</th><th>Used before</th><th>Example</th></tr>
<tr><td class="k">کا</td><td>a masculine noun</td><td class="k">علی کا بھائی</td></tr>
<tr><td class="k">کی</td><td>a feminine noun</td><td class="k">علی کی بہن</td></tr>
<tr><td class="k">کے</td><td>a masculine plural, or a respected person</td><td class="k">علی کے بھائی</td></tr></table></div>
<p>Because <b>کا</b> is a postposition, the owner before it takes the oblique: <b>لڑکا</b> becomes <b>لڑکے</b>.</p>
{{ex:لڑکے کی کتاب|laṛke kī kitāb|the boy's book}}
<h3>My, your, his, her</h3>
<p>The words for "my" and "your" change in the same way: <b>میرا</b> <i>merā</i> / <b>میری</b> / <b>میرے</b>. The others are <b>ہمارا</b> (our), <b>تمہارا</b> (your, to a friend), <b>آپ کا</b> (your, polite), <b>اُس کا</b> (his or her) and <b>کس کا</b> (whose). Urdu does not mark the owner's gender at all: <b>اُس کا بھائی</b> is "his brother" or "her brother". As with commands, choose by the person you are talking to: <b>آپ کا</b> with anyone you call <b>آپ</b>, <b>تمہارا</b> only with friends and children.</p>
{{ex:آپ کا نام کیا ہے؟|āp kā nām kyā hai?|What's your name?}}
{{ex:یہ کس کی گاڑی ہے؟|yeh kis kī gāṛī hai?|Whose car is this?}}
<p>Notice that <b>کس کا</b> agrees too: it is <b>کس کی</b> here because <b>گاڑی</b> is feminine. To answer, swap in the owner and keep the same ending: <b>یہ علی کی گاڑی ہے</b>, "this is Ali's car".</p>
<p>Before a postposition, <b>میرا</b> also takes the oblique, <b>میرے</b>:</p>
{{ex:میرے گھر میں|mere ghar mẽ|in my house}}
<h3>Respect: میرے ابو</h3>
<p>Parents, grandparents and other people you respect take the plural, even when there is only one of them. So it is <b>میرے ابو</b> with a plural verb, and the same for <b>دادا</b>, <b>نانا</b> or <b>چچا</b>.</p>
{{ex:میرے ابو ڈاکٹر ہیں۔|mere abbū ḍākṭar haĩ.|My father is a doctor.}}
<h3>Family words</h3>
<p>English has one "uncle" and one "aunt". Urdu has a word for each side of the family:</p>
<div class="tbl"><table><tr><th>Urdu</th><th>English</th><th>Urdu</th><th>English</th></tr>
<tr><td class="k">امی</td><td>mother</td><td class="k">ابو</td><td>father</td></tr>
<tr><td class="k">دادا / دادی</td><td>father's father / mother</td><td class="k">نانا / نانی</td><td>mother's father / mother</td></tr>
<tr><td class="k">چچا</td><td>father's brother</td><td class="k">پھوپھو</td><td>father's sister</td></tr>
<tr><td class="k">ماموں</td><td>mother's brother</td><td class="k">خالہ</td><td>mother's sister</td></tr></table></div>
<p>For friends' parents and older neighbors, Pakistanis often use the English loans <b>انکل</b> and <b>آنٹی</b>. Older siblings are often called <b>بھائی جان</b> and <b>باجی</b> or <b>آپی</b> rather than by name.</p>
{{ex:میری خالہ کراچی میں ہیں۔|merī ḵhālā karāchī mẽ haĩ.|My aunt (my mother's sister) is in Karachi.}}
<div class="tip"><b>Most common mistake:</b> matching the owner instead of the thing owned. Sarah's brother: <b>سارہ کی بھائی</b> → <b>سارہ کا بھائی</b>.</div>
`,
  check: [
    ["In علی کی کتاب, why کی?",["Because Ali is a man","Because کتاب is feminine","Because it is plural","کی is always used after names"],1,"کا / کی / کے agree with the thing owned: کتاب is feminine."],
    ["\"My father is a doctor\":",["میرے ابو ڈاکٹر ہیں","میرا ابو ڈاکٹر ہے","میری ابو ڈاکٹر ہیں","میرے ابو ڈاکٹر ہے"],0,"A father takes the respect plural: میرے and ہیں."],
    ["Your mother's sister is your…",["پھوپھو","چچی","خالہ","دادی"],2,"خالہ is the mother's sister; پھوپھو is the father's sister."]
  ],
  practice: [
    ["mc","my sister","میری بہن","میرا بہن","میرے بہن","میں بہن","بہن is feminine, so my is میری."],
    ["mc","Ali's book","علی کی کتاب","علی کا کتاب","کتاب کی علی","علی کے کتاب","The owner comes first, and کی agrees with کتاب, which is feminine."],
    ["mc","My father is a doctor.","میرے ابو ڈاکٹر ہیں۔","میرا ابو ڈاکٹر ہے۔","میرے ابو ڈاکٹر ہے۔","میری ابو ڈاکٹر ہیں۔","A father takes the respect plural: میرے ابو … ہیں."],
    ["mc","your mother's brother","ماموں","چچا","خالہ","پھوپھو","ماموں is the mother's brother; چچا is the father's brother."],
    ["mc","his sister (Ahmed's sister)","اُس کی بہن","اُس کا بہن","وہ کی بہن","اُس کے بہن","Before کا, وہ becomes اُس, and کی agrees with بہن."],
    ["or","in my house","میرے گھر میں","میرا","Before the postposition میں, میرا takes its oblique form میرے."],
    ["or","Ali's sister","علی کی بہن","کا","کی agrees with بہن, which is feminine, not with Ali."],
    ["or","My grandfather (father's father) is in Lahore","میرے دادا لاہور میں ہیں","ہے","A grandfather takes the respect plural: میرے دادا … ہیں."],
    ["fi","یہ سارہ __ کتاب ہے۔","This is Sarah's book.","کی","کا|کے|کو","کتاب is feminine, so the possessive is کی."],
    ["fi","__ نام ڈیوڈ ہے۔","My name is David.","میرا","میری|میرے|مجھے","نام is masculine, so my is میرا."],
    ["fi","آپ __ بھائی کہاں ہیں؟","Where is your brother? (with respect)","کے","کا|کی|کو","With the respect plural ہیں, the possessive is کے."],
    ["ty","my mother","میری امی","میرا · امی","میرا","امی is feminine, so my is میری."],
    ["ty","my father's car","میرے ابو کی گاڑی","میرا · ابو · کا · گاڑی","کا","کی agrees with گاڑی, which is feminine; ابو takes the respect plural میرے."],
    ["ty","Whose book is this?","یہ کس کی کتاب ہے|یہ کتاب کس کی ہے","یہ · کس · کا · کتاب","کا","کی agrees with کتاب, which is feminine."]
  ]
},
{
  id: "have",
  title: "Having: میرے پاس, and میرا ایک بھائی ہے",
  blurb: "Say what you have, who is in your family, and what is wrong when you feel ill.",
  deck: "Home and daily things",
  body: `
<p>English uses one verb, "have", for a car, a brother and a fever. Urdu has no verb "to have" at all. Instead it says where the thing is, or whose it is, and uses <b>ہے</b> or <b>ہیں</b>. Which pattern you use depends on what you have.</p>
<h3>Things you have: کے پاس</h3>
<p>For things you can hold or own, Urdu says "near me is a car": <b>میرے پاس</b> <i>mere pās</i>. <b>پاس</b> means "near", and <b>کے پاس</b> is a two-word postposition, so the word before it takes the oblique: <b>میرے</b>, <b>آپ کے</b>, <b>علی کے</b>.</p>
{{ex:میرے پاس گاڑی ہے۔|mere pās gāṛī hai.|I have a car.}}
{{ex:کیا آپ کے پاس ٹکٹ ہے؟|kyā āp ke pās ṭikaṭ hai?|Do you have a ticket?}}
<p>The verb agrees with the thing you have, not with you: one thing takes <b>ہے</b>, several take <b>ہیں</b>.</p>
{{ex:میرے پاس پیسے نہیں ہیں۔|mere pās paise nahī̃ haĩ.|I don't have any money.}}
<p>Time works the same way as things: <b>کیا آپ کے پاس وقت ہے؟</b> is "Do you have time?" And <b>کے پاس</b> keeps its plain meaning too: <b>اسٹیشن کے پاس</b> is "near the station". Context tells you which one is meant, just as "with me" can mean "near me" or "in my pocket" in English.</p>
<h3>Family and friends: میرا, میری, میرے</h3>
<p>People are not things you hold, so they do not take <b>کے پاس</b>. For relatives Urdu simply says "my one brother is": <b>میرا ایک بھائی ہے</b>. The possessive agrees with the relative, just as you learned: <b>میرا</b> for a man, <b>میری</b> for a woman, <b>میرے</b> for several.</p>
{{ex:میرا ایک بھائی ہے۔|merā ek bhāī hai.|I have a brother.}}
{{ex:میری دو بہنیں ہیں۔|merī do bahnẽ haĩ.|I have two sisters.}}
<p><b>اُن</b> <i>un</i> is the plural of <b>اُس</b>: "their", or "his" and "her" for someone you respect. It works the same way: <b>اُن کا</b>, <b>اُن کی</b>, <b>اُن کے</b>.</p>
{{ex:اُن کی دو بیٹیاں ہیں۔|un kī do beṭiyā̃ haĩ.|They have two daughters.}}
<h3>Illness: مجھے</h3>
<p>For a fever, a cold or other illness, the person takes the <b>کو</b> form: <b>مجھے</b>, <b>آپ کو</b>. Pain is "in" the body part.</p>
{{ex:مجھے بخار ہے۔|mujhe buḵhār hai.|I have a fever.}}
{{ex:میرے سر میں درد ہے۔|mere sar mẽ dard hai.|I have a headache.}}
<h3>Asking and saying no</h3>
<p>None of these patterns needs a new verb, which makes them easy to combine with what you already know. To ask, put <b>کیا</b> at the start, as with any yes-no question. To say no, put <b>نہیں</b> before <b>ہے</b>: <b>میرے پاس گاڑی نہیں ہے</b>.</p>
<div class="tbl"><table><tr><th>What you have</th><th>Pattern</th></tr>
<tr><td>a thing</td><td class="k">میرے پاس … ہے</td></tr>
<tr><td>a relative</td><td class="k">میرا / میری … ہے</td></tr>
<tr><td>an illness</td><td class="k">مجھے … ہے</td></tr></table></div>
<div class="tip"><b>Most common mistake:</b> using one pattern for everything. <b>میں ایک گاڑی ہے</b> → <b>میرے پاس ایک گاڑی ہے</b>, and <b>میرے پاس ایک بھائی ہے</b> → <b>میرا ایک بھائی ہے</b>.</div>
`,
  check: [
    ["Which one is \"I have a car\"?",["میں گاڑی ہوں","میرے پاس گاڑی ہے","میری گاڑی ہوں","میں پاس گاڑی ہے"],1,"Things you have take میرے پاس: \"near me is a car\"."],
    ["For brothers and sisters you say…",["میرا ایک بھائی ہے","میرے پاس ایک بھائی ہے","میں ایک بھائی ہوں","میرے ایک بھائی ہے"],0,"Relatives take the possessive, not کے پاس: میرا ایک بھائی ہے."],
    ["\"I have a fever\" starts with…",["میرے پاس","میرا","مجھے","میں"],2,"Illnesses take the کو form of the person: مجھے بخار ہے."]
  ],
  practice: [
    ["mc","I have a car.","میرے پاس گاڑی ہے","میں گاڑی ہے","میرا پاس گاڑی ہے","میرے گاڑی ہے","Things you have take میرے پاس, with the oblique میرے."],
    ["mc","I have a brother.","میرا ایک بھائی ہے","میرے پاس ایک بھائی ہے","میں ایک بھائی ہے","میری ایک بھائی ہے","Relatives take the possessive, not کے پاس."],
    ["mc","I have a fever.","مجھے بخار ہے","میرے پاس بخار ہے","میں بخار ہوں","میرا بخار ہے","Illnesses take مجھے … ہے."],
    ["mc","They have two daughters.","اُن کی دو بیٹیاں ہیں","اُن کا دو بیٹیاں ہیں","اُن کی دو بیٹیاں ہے","وہ دو بیٹیاں ہیں","کی agrees with بیٹیاں, and the plural takes ہیں."],
    ["mc","I don't have any money.","میرے پاس پیسے نہیں ہیں","میرے پاس پیسے نہیں ہے","میرا پاس پیسے نہیں","میں پیسے نہیں ہوں","نہیں goes before the verb, and پیسے is plural: نہیں ہیں."],
    ["or","I have a car (I own one)","میرے پاس گاڑی ہے","میرا","پاس works like a postposition, so میرا takes the oblique میرے."],
    ["or","I have two sisters","میری دو بہنیں ہیں","میرا ہے","بہنیں is feminine plural: میری agrees, and the verb is ہیں."],
    ["or","I have a fever","مجھے بخار ہے","میں","With an illness the person takes the oblique form with کو: مجھے."],
    ["fi","کیا آپ کے __ ٹکٹ ہے؟","Do you have a ticket?","پاس","پر|میں|سے","Things you have take کے پاس."],
    ["fi","میرا ایک __ ہے۔","I have a brother.","بھائی","بہن|بھائیوں|بہنیں","میرا and ہے go with one brother: بھائی."],
    ["fi","میرے پاس دو کتابیں __۔","I have two books.","ہیں","ہے|ہوں|ہو","The verb agrees with the things you have: two books, ہیں."],
    ["ty","I have a sister","میری ایک بہن ہے|میری بہن ہے","میرا · ایک · بہن · ہونا","میرا","بہن is feminine, so the possessive agrees: میری."],
    ["ty","Do you have a car?","کیا آپ کے پاس گاڑی ہے|آپ کے پاس گاڑی ہے","کیا · آپ · کے پاس · گاڑی","کا","پاس needs the oblique کے before it: آپ کے پاس."],
    ["ty","I have a headache","میرے سر میں درد ہے|مجھے سر میں درد ہے|مجھے سر درد ہے","میرا · سر · میں · درد","میرا","Before the postposition میں, میرا becomes میرے: میرے سر میں."]
  ]
},
{
  id: "compare",
  title: "Comparing: سے زیادہ, سب سے",
  blurb: "Say that something is bigger, cheaper or the best, and say more than or less than.",
  deck: "Describing things",
  body: `
<p>English changes the adjective to compare: big, bigger, biggest. Urdu leaves the adjective alone. "Bigger than that" is <b>اُس سے بڑا</b>, literally "from that, big". The little word <b>سے</b> <i>se</i>, which you know as "from", does all the work.</p>
<h3>Bigger than: Y سے</h3>
<p>Put the thing you compare with before <b>سے</b>, then the plain adjective. The neutral order is: the thing you are describing, then the other thing with <b>سے</b>, then the adjective and the verb.</p>
{{ex:یہ اُس سے بڑا ہے۔|yeh us se baṛā hai.|This is bigger than that.}}
{{ex:لاہور ملتان سے بڑا ہے۔|lāhaur multān se baṛā hai.|Lahore is bigger than Multan.}}
<p><b>سے</b> is a postposition, so the word before it takes the oblique: <b>وہ</b> becomes <b>اُس</b>, <b>کمرہ</b> becomes <b>کمرے</b>, and "than me" is <b>مجھ سے</b>.</p>
<h3>Agreement stays</h3>
<p>The adjective still agrees with the thing you are describing, not with the thing after <b>سے</b>.</p>
{{ex:یہ کتاب اُس کتاب سے اچھی ہے۔|yeh kitāb us kitāb se acchhī hai.|This book is better than that book.}}
{{ex:میری بہن مجھ سے لمبی ہے۔|merī bahan mujh se lambī hai.|My sister is taller than me.}}
<p>One adjective has a ready-made "better" of its own, borrowed from Persian: <b>بہتر</b> <i>behtar</i>. It never changes, and it is very common: <b>یہ اُس سے بہتر ہے</b>, "this is better than that". <b>اُس سے اچھا</b> means the same thing.</p>
<p>If you think in English, build the sentence backwards from "than": first the thing you are describing, then what you compare it with and <b>سے</b>, and only at the end the adjective and the verb.</p>
<p>For brothers and sisters, <b>بڑا</b> and <b>چھوٹا</b> also mean "older" and "younger": <b>میرا بڑا بھائی</b> is "my older brother", and <b>وہ مجھ سے بڑی ہے</b> is "she is older than me".</p>
<h3>The most: سب سے</h3>
<p>For "the biggest" or "the best", compare with everything: <b>سب سے</b> <i>sab se</i>, "than all". The adjective still agrees.</p>
{{ex:کراچی پاکستان کا سب سے بڑا شہر ہے۔|karāchī pākistān kā sab se baṛā shahar hai.|Karachi is Pakistan's biggest city.}}
{{ex:یہ سب سے سستی گاڑی ہے۔|yeh sab se sastī gāṛī hai.|This is the cheapest car.}}
<h3>More than, less than: زیادہ and کم</h3>
<p>With numbers and amounts, use <b>سے زیادہ</b> <i>se zyādā</i> (more than) and <b>سے کم</b> <i>se kam</i> (less than).</p>
{{ex:دس سے زیادہ لوگ|das se zyādā log|more than ten people}}
{{ex:سو روپے سے کم|sau rupaye se kam|less than a hundred rupees}}
<p>With an adjective you do not need <b>زیادہ</b>: <b>سے</b> alone already means "-er than". You will hear <b>زیادہ</b> added in speech for emphasis, but start with the simple form.</p>
<div class="tip"><b>Most common mistake:</b> copying English "more big" and leaving out <b>سے</b>. <b>یہ اُس زیادہ بڑا ہے</b> → <b>یہ اُس سے بڑا ہے</b>.</div>
`,
  check: [
    ["How does Urdu say \"bigger than that\"?",["With an -er ending on بڑا","With سے after the thing compared: اُس سے بڑا","With سب before بڑا","With بہت before بڑا"],1,"Urdu keeps the plain adjective and puts سے after the thing compared."],
    ["\"the cheapest car\":",["سب سے سستی گاڑی","سب سے سستا گاڑی","بہت سستی گاڑی","سستی سب گاڑی"],0,"سب سے means \"than all\", and سستی agrees with گاڑی."],
    ["In میری بہن مجھ سے لمبی ہے, the adjective agrees with…",["me, the speaker","nothing; it never changes","my sister: لمبی","the postposition سے"],2,"The adjective agrees with the person described, بہن, which is feminine."]
  ],
  practice: [
    ["mc","bigger than that","اُس سے بڑا","اُس بڑا","سے اُس بڑا","اُس کا بڑا","سے comes right after the thing compared: اُس سے بڑا."],
    ["mc","the biggest city","سب سے بڑا شہر","سب بڑا شہر","بہت بڑا شہر","بڑا سب سے شہر","سب سے (\"than all\") makes \"the most\": سب سے بڑا."],
    ["mc","My sister is older than me.","میری بہن مجھ سے بڑی ہے","میری بہن مجھ سے بڑا ہے","میری بہن میں سے بڑی ہے","میری بہن مجھے سے بڑی ہے","بڑی agrees with بہن, and \"than me\" is مجھ سے."],
    ["mc","less than a hundred rupees","سو روپے سے کم","سو روپے سے زیادہ","کم سو روپے سے","سو روپے کم سے","سے کم after the amount means \"less than\"."],
    ["mc","This car is cheaper than that car.","یہ گاڑی اُس گاڑی سے سستی ہے","یہ گاڑی اُس گاڑی سے سستا ہے","یہ گاڑی اُس گاڑی سستی ہے","یہ گاڑی سے اُس گاڑی سستی ہے","سستی agrees with گاڑی, and سے follows the car compared."],
    ["or","the biggest room","سب سے بڑا کمرہ","بڑی","کمرہ is masculine, so the adjective agrees: بڑا."],
    ["or","the cheapest car","سب سے سستی گاڑی","سستا","گاڑی is feminine, so the adjective agrees: سستی."],
    ["or","taller than me (said of a woman)","مجھ سے لمبی","میں","Before the postposition سے, میں takes the oblique مجھ: مجھ سے."],
    ["fi","یہ اُس __ بڑا ہے۔","This is bigger than that.","سے","کا|کو|میں","سے after the thing compared means \"than\"."],
    ["fi","یہ __ سے اچھا کمرہ ہے۔","This is the best room.","سب","بہت|زیادہ|کم","سب سے (\"than all\") makes \"the best\"."],
    ["fi","میرا بھائی مجھ سے __ ہے۔","My brother is older than me.","بڑا","بڑی|بڑے|زیادہ","For siblings بڑا means older; it agrees with بھائی."],
    ["ty","This book is better than that one","یہ کتاب اُس سے اچھی ہے|یہ کتاب اُس کتاب سے اچھی ہے|یہ کتاب اُس سے بہتر ہے|یہ کتاب اُس کتاب سے بہتر ہے","یہ · کتاب · اُس · سے · اچھا","اچھا","اچھی agrees with کتاب, which is feminine."],
    ["ty","Karachi is the biggest city","کراچی سب سے بڑا شہر ہے","کراچی · سب سے · بڑا · شہر","بڑی","بڑا agrees with شہر, which is masculine."],
    ["ty","My sister is taller than me","میری بہن مجھ سے لمبی ہے|مجھ سے میری بہن لمبی ہے","میرا · بہن · میں · سے · لمبا","لمبا","لمبی agrees with بہن, which is feminine."]
  ]
},
{
  id: "habitual",
  title: "Present habitual: کرتا ہوں, کرتی ہوں",
  blurb: "Talk about what you do every day, what you often do, and what you never do.",
  deck: "Time, days and routine",
  body: `
<p>English uses the plain verb for habits and facts: "I work", "she lives in Lahore", "we often eat biryani". Urdu has a form for exactly this job, and you have already met it in <b>میں امریکہ میں رہتا ہوں</b>. Now you can build it for any verb.</p>
<h3>Stem + تا, تے, تی + ہونا</h3>
<p>Take the stem (<b>کرنا</b> → <b>کر</b>), add <b>تا</b>, <b>تے</b> or <b>تی</b>, and finish with the right form of "to be". Both parts agree: <b>تا</b> for a man, <b>تی</b> for a woman, <b>تے</b> for men in the plural and for <b>آپ</b>.</p>
<div class="tbl"><table><tr><th></th><th>A man or men</th><th>A woman or women</th></tr>
<tr><td>I</td><td class="k">میں کرتا ہوں</td><td class="k">میں کرتی ہوں</td></tr>
<tr><td>you (friend)</td><td class="k">تم کرتے ہو</td><td class="k">تم کرتی ہو</td></tr>
<tr><td>you (polite)</td><td class="k">آپ کرتے ہیں</td><td class="k">آپ کرتی ہیں</td></tr>
<tr><td>he / she</td><td class="k">وہ کرتا ہے</td><td class="k">وہ کرتی ہے</td></tr>
<tr><td>we; they</td><td class="k">ہم کرتے ہیں</td><td class="k">ہم کرتی ہیں</td></tr></table></div>
<p>With <b>ہم</b>, many women use the masculine plural too: <b>ہم کرتے ہیں</b>. When you speak about yourself, the verb shows whether you are a man or a woman. So learn your own form first.</p>
{{ex:میں روز چائے پیتا ہوں۔|maĩ roz chāe pītā hū̃.|I drink tea every day. (a man speaking)}}
{{ex:میں اردو سیکھتی ہوں۔|maĩ urdū sīkhtī hū̃.|I study Urdu. (a woman speaking)}}
{{ex:آپ کہاں کام کرتے ہیں؟|āp kahā̃ kām karte haĩ?|Where do you work? (to a man)}}
{{ex:وہ لاہور میں رہتی ہے۔|voh lāhaur mẽ rahtī hai.|She lives in Lahore.}}
<p>The same form states general facts, things that are simply true, not only your own routine:</p>
{{ex:پاکستان میں لوگ بہت چائے پیتے ہیں۔|pākistān mẽ log bahut chāe pīte haĩ.|People in Pakistan drink a lot of tea.}}
<p>People you respect take the plural, as always: <b>میرے ابو</b> with <b>پڑھتے ہیں</b>.</p>
{{ex:میرے ابو ہمیشہ اخبار پڑھتے ہیں۔|mere abbū hameshā aḵhbār paṛhte haĩ.|My father always reads the newspaper.}}
<p>Questions work as you would expect: <b>کیا</b> at the start for yes or no, or a question word before the verb. The verb ending still has to match the person you are asking about, so a question to a woman ends in <b>تی ہیں</b>: <b>کیا آپ چائے پیتی ہیں؟</b></p>
<h3>How often</h3>
<div class="tbl"><table><tr><th>Urdu</th><th>English</th></tr>
<tr><td class="k">روز / ہر روز</td><td>every day</td></tr>
<tr><td class="k">ہمیشہ</td><td>always</td></tr>
<tr><td class="k">اکثر</td><td>often</td></tr>
<tr><td class="k">کبھی کبھی</td><td>sometimes</td></tr></table></div>
<p>These words usually come right after the subject, but they can move, much as in English.</p>
{{ex:ہم اکثر بریانی کھاتے ہیں۔|ham aksar biryānī khāte haĩ.|We often eat biryani.}}
<h3>Saying no</h3>
<p><b>نہیں</b> goes before the verb, and the little <b>ہوں</b> or <b>ہے</b> at the end is often dropped.</p>
{{ex:میں گوشت نہیں کھاتا۔|maĩ gosht nahī̃ khātā.|I don't eat meat. (a man speaking)}}
<h3>Habit or right now?</h3>
<p>This form is for things that are generally true or that you do regularly. For something happening at this very moment ("I'm drinking tea right now"), Urdu uses a different form, which comes in a later lesson.</p>
<div class="tip"><b>Most common mistake:</b> the wrong ending for yourself. A woman saying "I work": <b>میں کام کرتا ہوں</b> → <b>میں کام کرتی ہوں</b>.</div>
`,
  check: [
    ["\"I work\", said by a woman:",["میں کام کرتا ہوں","میں کام کرتی ہوں","میں کام کرتی ہے","میں کام کرنا ہوں"],1,"A woman speaking uses تی, and میں takes ہوں."],
    ["\"They live in Lahore\" (a family):",["وہ لاہور میں رہتے ہیں","وہ لاہور میں رہتا ہے","وہ لاہور میں رہتے ہے","وہ لاہور رہتے ہیں میں"],0,"A plural subject takes تے and ہیں."],
    ["The present habitual is built from…",["the infinitive + ہے","the stem + و","the stem + تا / تے / تی + a form of ہونا","ہونا alone"],2,"Stem, then تا / تے / تی, then ہوں / ہے / ہیں / ہو."]
  ],
  practice: [
    ["mc","I drink tea. (a woman speaking)","میں چائے پیتی ہوں","میں چائے پیتا ہوں","میں چائے پیتی ہے","میں چائے پینا ہوں","A woman speaking uses تی, and میں takes ہوں."],
    ["mc","Where do you live? (to a woman)","آپ کہاں رہتی ہیں؟","آپ کہاں رہتے ہیں؟","آپ کہاں رہتی ہے؟","آپ کہاں رہتا ہیں؟","To a woman the verb takes تی, and آپ always takes ہیں."],
    ["mc","He works in an office.","وہ دفتر میں کام کرتا ہے","وہ دفتر میں کام کرتے ہے","وہ دفتر میں کام کرتی ہے","وہ دفتر میں کام کرتا ہیں","One man: کرتا ہے."],
    ["mc","I don't eat meat. (a man speaking)","میں گوشت نہیں کھاتا","میں نہیں گوشت کھاتا","میں گوشت نہیں کھاتی","میں گوشت مت کھاتا","نہیں goes right before the verb, and a man says کھاتا."],
    ["mc","Which word means \"often\"?","اکثر","ہمیشہ","روز","کبھی","اکثر is often; ہمیشہ is always."],
    ["or","She speaks Urdu","وہ اردو بولتی ہے","بولتا","The verb agrees with a woman: بولتی ہے."],
    ["or","They live in Karachi (a family)","وہ کراچی میں رہتے ہیں","ہے","A plural subject takes the plural: رہتے ہیں."],
    ["or","My father reads the newspaper","میرے ابو اخبار پڑھتے ہیں","پڑھتا","A father takes the respect plural: پڑھتے ہیں."],
    ["fi","میں روز چائے __ ہوں۔","I drink tea every day. (a man speaking)","پیتا","پیتی|پیتے|پینا","A man speaking uses تا: پیتا ہوں."],
    ["fi","تم کہاں رہتے __؟","Where do you live? (to a male friend)","ہو","ہیں|ہے|ہوں","تم always takes ہو."],
    ["fi","کیا آپ اردو __ ہیں؟","Do you speak Urdu? (to a woman)","بولتی","بولتا|بولتے|بولنا","To a woman the verb takes تی: بولتی ہیں."],
    ["ty","I live in Chicago (a woman speaking)","میں شکاگو میں رہتی ہوں|شکاگو مِیں رہتی ہوں","میں · شکاگو · میں · رہنا","رہتا","The verb agrees with a woman speaking: رہتی ہوں."],
    ["ty","We often eat biryani (a family)","ہم اکثر بریانی کھاتے ہیں|ہم بریانی اکثر کھاتے ہیں|اکثر ہم بریانی کھاتے ہیں","ہم · اکثر · بریانی · کھانا","کھاتا","ہم is plural, so the verb agrees: کھاتے ہیں."],
    ["ty","Do you drink tea? (to a man)","کیا آپ چائے پیتے ہیں|آپ چائے پیتے ہیں","کیا · آپ · چائے · پینا","پیتا","آپ takes the plural: پیتے ہیں."]
  ]
},
{
  id: "time",
  title: "Clock time: کتنے بجے ہیں؟",
  blurb: "Ask and tell the time, say at what time something happens, and name the days of the week.",
  deck: "Time, days and routine",
  body: `
<p>English says "It's three o'clock". Urdu says "three have struck": <b>تین بجے ہیں</b>. The word <b>بجے</b> <i>baje</i> comes from the verb for a clock striking, and like any -ā word it agrees.</p>
{{ex:کتنے بجے ہیں؟|kitne baje haĩ?|What time is it?}}
<p>In casual speech many people ask with the English loan word instead: <b>ٹائم کیا ہوا ہے؟</b> Both are everyday Urdu.</p>
<h3>One o'clock and the other hours</h3>
<p>One o'clock is singular: <b>ایک بجا ہے</b>. From two on, the hour is plural: <b>بجے ہیں</b>.</p>
{{ex:ایک بجا ہے۔|ek bajā hai.|It's one o'clock.}}
{{ex:چار بجے ہیں۔|chār baje haĩ.|It's four o'clock.}}
<p>"At" a time needs no extra word: <b>تین بجے</b> is "at three", and even "at one" is <b>ایک بجے</b>.</p>
{{ex:کلاس کتنے بجے ہے؟|klās kitne baje hai?|What time is the class?}}
<h3>Quarters and halves</h3>
<p>English counts "half past three". Urdu has special words that go before the hour:</p>
<div class="tbl"><table><tr><th>Urdu</th><th>Means</th><th>Example</th><th></th></tr>
<tr><td class="k">سوا</td><td>a quarter past</td><td class="k">سوا پانچ بجے</td><td>5:15</td></tr>
<tr><td class="k">ساڑھے</td><td>half past</td><td class="k">ساڑھے تین بجے</td><td>3:30</td></tr>
<tr><td class="k">پونے</td><td>a quarter to</td><td class="k">پونے آٹھ بجے</td><td>7:45</td></tr></table></div>
<p>Watch <b>پونے</b>: it names the coming hour, so <b>پونے آٹھ</b> is 7:45, "a quarter less than eight".</p>
{{ex:ساڑھے تین بجے|sāṛhe tīn baje|at half past three}}
{{ex:پونے آٹھ بجے|paune āṭh baje|at a quarter to eight}}
<p>Half past one and half past two have their own words: <b>ڈیڑھ</b> <i>ḍeṛh</i> (1:30) and <b>ڈھائی</b> <i>ḍhāī</i> (2:30). <b>ساڑھے</b> starts at 3:30.</p>
{{ex:ڈیڑھ بجے|ḍeṛh baje|at half past one}}
<p>For other minutes, say the hour with <b>بج کر</b> ("having struck") and then the minutes: <b>چار بج کر دس منٹ</b> is 4:10. This works for any time, but for the quarters and halves the special words are what you will hear.</p>
<p>If you are ever unsure of a word, the hour with <b>بج کر</b> and the minutes is always understood: <b>تین بج کر تیس منٹ</b> is a correct, if plain, 3:30.</p>
<h3>Morning, afternoon, evening, night</h3>
<p>Put the part of the day before the time: <b>صبح</b> (morning), <b>دوپہر</b> (around noon and early afternoon), <b>شام</b> (evening), <b>رات</b> (night).</p>
{{ex:میں صبح سات بجے اٹھتی ہوں۔|maĩ subah sāt baje uṭhtī hū̃.|I get up at seven in the morning. (a woman speaking)}}
<p>Without a clock time, <b>رات کو</b> means "at night" and <b>شام کو</b> "in the evening".</p>
<h3>Days of the week</h3>
<div class="tbl"><table><tr><th>Urdu</th><th>English</th><th>Urdu</th><th>English</th></tr>
<tr><td class="k">پیر</td><td>Monday</td><td class="k">جمعہ</td><td>Friday</td></tr>
<tr><td class="k">منگل</td><td>Tuesday</td><td class="k">ہفتہ</td><td>Saturday</td></tr>
<tr><td class="k">بدھ</td><td>Wednesday</td><td class="k">اتوار</td><td>Sunday</td></tr>
<tr><td class="k">جمعرات</td><td>Thursday</td><td></td><td></td></tr></table></div>
<p>English says "on Friday". Urdu puts the postposition <b>کو</b> after the day: <b>جمعہ کو</b>, <b>اتوار کو</b>. In speech you will also hear <b>جمعے کو</b> and <b>ہفتے کو</b>, with the -e form a postposition brings. <b>ہفتہ</b> also means "week", so context tells you whether someone means Saturday or a whole week.</p>
{{ex:جمعہ کو|jumā ko|on Friday}}
{{ex:اتوار کو ہم لاہور جاتے ہیں۔|itvār ko ham lāhaur jāte haĩ.|On Sundays we go to Lahore.}}
<div class="tip"><b>Most common mistake:</b> building half past from parts. <b>تین اور آدھا</b> → <b>ساڑھے تین</b>, and 2:30 is <b>ڈھائی</b>, not <b>ساڑھے دو</b>.</div>
`,
  check: [
    ["How do you say 3:30?",["تین اور آدھا","ساڑھے تین","تین تیس آدھا","آدھا تین"],1,"ساڑھے before the hour means half past: ساڑھے تین."],
    ["\"It's one o'clock\":",["ایک بجے ہیں","ایک بجا ہیں","ایک بجا ہے","ایک بجی ہے"],2,"One o'clock is singular: بجا ہے."],
    ["\"on Friday\":",["جمعہ کو","جمعہ میں","کو جمعہ","جمعہ پر"],0,"Days take the postposition کو after them: جمعہ کو."]
  ],
  practice: [
    ["mc","3:30","ساڑھے تین","تین اور آدھا","ڈھائی","سوا تین","ساڑھے before the hour means half past."],
    ["mc","2:30","ڈھائی","ساڑھے دو","دو اور آدھا","ڈیڑھ","2:30 has its own word, ڈھائی; ڈیڑھ is 1:30."],
    ["mc","It's one o'clock.","ایک بجا ہے","ایک بجے ہیں","ایک بجا ہیں","ایک بجے ہے","One o'clock is singular: بجا ہے."],
    ["mc","on Friday","جمعہ کو","کو جمعہ","جمعہ میں","جمعہ پر","Days take کو after them."],
    ["mc","a quarter to four (3:45)","پونے چار","سوا چار","پونے تین","ساڑھے چار","پونے names the coming hour: پونے چار is 3:45."],
    ["or","It's five o'clock","پانچ بجے ہیں","بجا ہے","From two on the hour is plural, and the verb agrees: بجے ہیں."],
    ["or","It's one o'clock","ایک بجا ہے","بجے ہیں","One o'clock is singular, and the verb agrees: بجا ہے."],
    ["or","at a quarter past six","سوا چھ بجے","ساڑھے","سوا adds a quarter: سوا چھ بجے is 6:15."],
    ["fi","__ تین بجے","at half past three","ساڑھے","سوا|پونے|ڈھائی","ساڑھے before the hour means half past."],
    ["fi","دو __ ہیں۔","It's two o'clock.","بجے","بجا|بج|بجی","From two on the hour is plural: بجے ہیں."],
    ["fi","کلاس __ بجے ہے؟","What time is the class?","کتنے","کتنا|کتنی|کیا","کتنے agrees with the plural بجے."],
    ["ty","It's seven o'clock","سات بجے ہیں","سات · بجنا","بجا","More than one o'clock is plural: بجے with ہیں."],
    ["ty","What time is it?","کتنے بجے ہیں|کیا بجا ہے|ٹائم کیا ہوا ہے","کتنا · بجنا · ہونا","کتنا","کتنے agrees with the plural بجے, and the verb is ہیں."],
    ["ty","I get up at six in the morning (a man speaking)","میں صبح چھ بجے اٹھتا ہوں|صبح چھ بجے اٹھتا ہوں|میں صبح کے چھ بجے اٹھتا ہوں|صبح کے چھ بجے اٹھتا ہوں","میں · صبح · چھ · بجے · اٹھنا","اٹھتی","The verb agrees with a man speaking: اٹھتا ہوں."]
  ]
}
];
