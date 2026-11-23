/* ur-en stage A1: new lessons. English side shared with ko-en (parity.js) except the ur-only lesson pakistani-english; shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"فاعل کی جگہ خالی نہیں رہتی: it اور there", blurb:"موسم اور وقت کے لیے it، \"یہاں … ہے\" کے لیے there is / there are۔", deck:"ہلکی پھلکی گپ شپ", body:`
<p>اردو میں "آج سردی ہے" یا "تین بجے ہیں" کہتے وقت it جیسے کسی لفظ کی ضرورت نہیں پڑتی۔ انگریزی کا جملہ فاعل کے بغیر شروع نہیں ہوتا، اس لیے فاعل کی خالی جگہ <b>it</b> یا <b>there</b> سے بھری جاتی ہے۔</p>
<h3>موسم اور وقت: It</h3>
<p>یہاں it کا مطلب "یہ" یا "وہ" نہیں ہے؛ یہ صرف فاعل کی جگہ بھرتا ہے۔ "سردی ہے" کا لفظ بہ لفظ ترجمہ Cold is نہیں بنتا۔</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|آج سردی ہے}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|تین بجے ہیں}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|بارش ہو رہی ہے}}{{ex:It's late.|/ɪts ˈleɪt/|دیر ہو گئی ہے}}
<h3>"یہاں … ہے" کے لیے There is / There are</h3>
<p>کوئی چیز کسی جگہ موجود ہو تو جملہ there سے شروع ہوتا ہے: ایک ہو تو <b>There is a …</b>، ایک سے زیادہ ہوں تو <b>There are … -s</b>۔ بول چال میں There is کو There's کہتے ہیں۔ اردو کی طرح جملہ جگہ سے شروع نہ کریں: <b>Near here is a cafe.</b> ✗</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|پاس ہی ایک کیفے ہے}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|دو کمرے ہیں}}
<h3>سوال اور منفی جملہ</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|یہاں باتھ روم ہے؟}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|کیا سیٹیں ہیں؟}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|آج کوئی بس نہیں ہے}}
<h3>have اور there is کا فرق</h3>
<p>اردو میں دونوں جگہ "ہے" آتا ہے: "میرے پاس گاڑی ہے" اور "باہر ایک گاڑی ہے"۔ انگریزی میں چیز کسی شخص کے پاس ہو تو <b>have</b>، کسی جگہ موجود ہو تو <b>there is</b>۔</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|میرے پاس گاڑی ہے}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|باہر ایک گاڑی ہے}}
<div class="tip">عام غلطیاں: <b>Is cold.</b> ✗ درست: <b>It's cold.</b> ✓ <b>Have a cafe here.</b> ✗ درست: <b>There's a cafe here.</b> ✓</div>`,
check:[["انگریزی میں: \"آج گرمی ہے\"",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"موسم کی بات ہو تو فاعل کی جگہ it آتا ہے۔"],["خالی جگہ پُر کریں: There ___ three people",["is","are","have","be"],1,"ایک سے زیادہ ہوں تو there are آتا ہے۔"],["انگریزی میں: \"یہاں باتھ روم ہے؟\"",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"کسی جگہ کوئی چیز ہے یا نہیں، یہ Is there a … سے پوچھا جاتا ہے۔"]],
practice:[
["mc","انگریزی میں: \"بارش ہو رہی ہے\"","It's raining.","Is raining.","There is raining.","Rain is.","موسم کی بات ہو تو فاعل it ہوتا ہے۔"],
["mc","انگریزی میں: \"پاس ہی ایک کیفے ہے\"","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","کسی جگہ کوئی چیز موجود ہو تو there is؛ کیفے ایک ہے، اس لیے آرٹیکل a۔"],
["mc","خالی جگہ پُر کریں: There ___ two rooms","are","is","have","has","rooms جمع ہے، اس لیے are۔"],
["mc","انگریزی میں: \"تین بجے ہیں\"","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","وقت بتانے والا جملہ بھی it سے شروع ہوتا ہے۔"],
["mc","انگریزی میں: \"میرے پاس گاڑی ہے\"","I have a car.","There is a car me.","I am a car.","It's a car me.","چیز کسی شخص کے پاس ہو تو have آتا ہے۔"],
["or","آج سردی ہے","It's cold today","There's","موسم کی بات ہو تو فاعل it ہوتا ہے۔"],
["or","باہر ایک گاڑی ہے","There's a car outside","cars","گاڑی ایک ہے، اس لیے آرٹیکل a اور واحد car۔"],
["or","یہاں دو سیٹیں ہیں","There are two seats","seat is","دو یا زیادہ ہوں تو are اور جمع seats۔"],
["fi","__ cold today.","آج سردی ہے","It's|It is","Is|There's|This","فاعل کی جگہ it سے بھری جاتی ہے۔"],
["fi","There __ a bank near here.","پاس ہی ایک بینک ہے","is","are|have|be","بینک ایک ہے، اس لیے is۔"],
["fi","__ there any seats?","کیا سیٹیں ہیں؟","Are","Is|Do|Have","seats جمع ہے، اس لیے Are۔"],
["ty","آج گرمی ہے","It's hot today","الفاظ: it · hot · today — موسم کے لیے it","There's","موسم کا جملہ it سے شروع ہوتا ہے۔"],
["ty","یہاں باتھ روم ہے؟","Is there a bathroom here|Is there a restroom here","الفاظ: is there · bathroom — آرٹیکل کا خیال رکھیں","the","کسی ایک باتھ روم کے بارے میں پہلی بار پوچھ رہے ہیں، اس لیے آرٹیکل a۔"],
["ty","یہاں دو کمرے ہیں","There are two rooms","الفاظ: there are · two · room — جمع","room","two کے بعد اسم جمع میں آتا ہے: rooms۔"]]},

{ id:"plurals", title:"جمع کا -s، this / these اور my / your", blurb:"دو یا زیادہ ہوں تو -s ضرور لگائیں۔ this ایک کے لیے، these کئی کے لیے۔", deck:"خریداری اور ادائیگی", body:`
<p>اردو میں گنتی کے بعد بہت سے اسم نہیں بدلتے: "دو بھائی"، "تین دوست"، "پانچ دن"۔ انگریزی میں اسم دو یا زیادہ ہوں تو اس پر <b>-s</b> لگانا لازمی ہے: two brothers, three friends, five days۔ اسی لیے <b>two brother</b> ✗ جیسی غلطی آسانی سے ہو جاتی ہے۔</p>
<h3>جمع (plural) بنانے کے اصول</h3>
<div class="tbl"><table><tr><th>اصول</th><th>مثال</th></tr><tr><td>زیادہ تر اسم: -s</td><td class="k">book → books</td></tr><tr><td>آخر میں s, x, ch, sh ہو تو -es</td><td class="k">box → boxes</td></tr><tr><td>کانسوننٹ (حرفِ صحیح) + y ہو تو -ies</td><td class="k">city → cities</td></tr><tr><td>بے قاعدہ</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|دو کتابیں}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|تین ڈبے}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|میرے دو بچے ہیں}}{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|میرے دو بھائی ہیں}}
<p>-s کی آواز تین طرح کی ہوتی ہے: books میں /s/، keys میں /z/ اور boxes میں /ɪz/۔ one of کے بعد بھی اسم جمع میں آتا ہے: one of my friend ✗</p>
{{ex:one of my friends|/ˈwʌn əv maɪ ˈfrendz/|میرا ایک دوست}}
<h3>this / that ایک کے لیے، these / those کئی کے لیے</h3>
<p>اردو کا "یہ" ایک چیز کے لیے بھی آتا ہے اور کئی کے لیے بھی ("یہ کتاب"، "یہ کتابیں")۔ انگریزی میں الگ الگ لفظ ہیں: قریب کے لیے this / these، دور کے لیے that / those۔</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|یہ میرا بیگ ہے}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|یہ میری چابیاں ہیں}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|وہ جوتے اچھے ہیں}}
<h3>my, your, his, her, our, their اور 's</h3>
<p>یہ الفاظ بتاتے ہیں کہ چیز کس کی ہے۔ ان کے ساتھ a یا the نہیں لگتا۔ نام کے ساتھ ملکیت <b>'s</b> سے بنتی ہے، اور ترتیب اردو جیسی ہی رہتی ہے: علی کا فون = Ali's phone۔</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|کیا یہ آپ کا فون ہے؟}}{{ex:Her brothers live in Lahore.|/hər ˈbrʌðərz ˈlɪv ɪn ləˈhɔːr/|اس کے بھائی لاہور میں رہتے ہیں}}{{ex:This is Ali's phone.|/ˈðɪs ɪz ˈɑːliz ˈfoʊn/|یہ علی کا فون ہے}}
<div class="tip">گنتی، many, these اور those کے بعد اسم ہمیشہ جمع میں آتا ہے: <b>two friend</b> ✗ درست: <b>two friends</b> ✓ <b>my a bag</b> ✗ درست: <b>my bag</b> ✓</div>`,
check:[["خالی جگہ پُر کریں: I have two ___",["sister","sisters","a sister","sister's"],1,"two کے بعد اسم جمع میں آتا ہے: sisters۔"],["خالی جگہ پُر کریں: ___ are my keys",["This","That","These","It"],2,"keys جمع ہے، اس لیے These۔"],["انگریزی میں: \"یہ میرا بیگ ہے\"",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"my کے ساتھ آرٹیکل نہیں لگتا۔"]],
practice:[
["mc","انگریزی میں: \"دو کتابیں\"","two books","two book","two a book","twos book","دو یا زیادہ ہوں تو اسم پر جمع کا -s لگتا ہے۔"],
["mc","اسم child کی جمع کیا ہے؟","children","childs","childes","child","یہ بے قاعدہ جمع ہے: children۔"],
["mc","خالی جگہ پُر کریں: ___ shoes are nice (وہ جوتے)","Those","That","This","It","shoes جمع ہے، اس لیے those۔"],
["mc","انگریزی میں: \"یہ میرا بیگ ہے\"","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my اور آرٹیکل ایک ساتھ نہیں آتے۔"],
["mc","اسم box کی جمع کیا ہے؟","boxes","boxs","boxies","box","آخر میں s, x, ch یا sh ہو تو -es لگتا ہے۔"],
["or","یہ میری چابیاں ہیں","These are my keys","key This","چابیاں ایک سے زیادہ ہیں: these اور جمع keys۔"],
["or","میرے دو بچے ہیں","I have two children","child a","دو ہیں، اس لیے جمع children؛ آرٹیکل a یہاں نہیں لگتا۔"],
["or","وہ جوتے اچھے ہیں","Those shoes are nice","That","shoes جمع ہے، اس لیے those۔"],
["fi","I have three __.","میرے پاس تین بلیاں ہیں","cats","cat|a cat|cat's","three کے بعد اسم جمع میں آتا ہے: cats۔"],
["fi","__ is my friend.","یہ میرا دوست ہے","This","These|Those|They","ایک شخص ہے، اس لیے this۔"],
["fi","Two __, please.","دو کافی دے دیں","coffees","coffee|a coffee|coffee's","کپ گن کر آرڈر کریں تو coffees جمع میں بولا جاتا ہے۔"],
["ty","یہ میری کتابیں ہیں","These are my books","الفاظ: these · my · book — جمع","book","کتابیں ایک سے زیادہ ہیں: these اور جمع books۔"],
["ty","میری دو بہنیں ہیں","I have two sisters","الفاظ: have · two · sister — جمع","sister","two کے بعد اسم جمع میں آتا ہے: sisters۔"],
["ty","یہ میرا بیگ ہے","This is my bag","الفاظ: this · my · bag — آرٹیکل کے بغیر","a","my کے ساتھ آرٹیکل a نہیں لگتا۔"]]},
{ id:"present", title:"الفاظ کی ترتیب اور Simple Present: فاعل + فعل + مفعول", blurb:"اردو میں فعل جملے کے آخر میں آتا ہے، انگریزی میں فاعل کے فوراً بعد۔", deck:"اپنا تعارف", body:`
<p>اردو میں فعل جملے کے آخر میں آتا ہے: "میں چائے <b>پیتا ہوں</b>"۔ انگریزی کی ترتیب ہے <b>کون + کیا کرتا ہے + کس چیز کو</b>: I drink tea۔ انگریزی میں "کو" یا "نے" جیسے الفاظ نہیں ہوتے، اس لیے مطلب اسی ترتیب سے بنتا ہے۔</p>
<h3>فاعل + فعل + مفعول</h3>
{{ex:I drink tea.|/aɪ ˈdrɪŋk ˈtiː/|میں چائے پیتا ہوں}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|میں انگریزی پڑھتی ہوں}}
<h3>جگہ اور وقت آخر میں</h3>
<p>باقی معلومات فعل اور مفعول کے بعد آتی ہیں: پہلے <b>جگہ</b>، پھر <b>وقت</b>۔ اردو میں وقت فعل سے پہلے آتا ہے ("میں روز دفتر جاتا ہوں")، اسی لیے <b>I every day go to office.</b> ✗ بن جاتا ہے۔</p>
{{ex:We live in Karachi.|/wi ˈlɪv ɪn kəˈrɑːtʃi/|ہم کراچی میں رہتے ہیں}}{{ex:I go to the office every day.|/aɪ ˈgoʊ tə ði ˈɔːfɪs ˈevri ˈdeɪ/|میں روز دفتر جاتا ہوں}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|وہ ویک اینڈ پر کام کرتے ہیں}}
<h3>Simple Present: عادت اور حقیقت</h3>
<p>سکول میں اسے Present Indefinite کہتے ہیں۔ جو کام ہمیشہ یا بار بار ہوتا ہے اور جو بات ہمیشہ سچ ہو، وہ اسی میں آتی ہے۔ عادت کے لیے -ing نہیں لگتا: <b>I am doing it all the time.</b> ✗ درست: <b>I do it all the time.</b> ✓ منفی جملے میں فعل سے پہلے <b>don't</b> آتا ہے؛ اکیلا not کافی نہیں: I not like ✗</p>
{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|میں روز انگریزی پڑھتا ہوں}}{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|میں گوشت نہیں کھاتا}}
<h3>کتنی بار: always, usually, sometimes, never</h3>
<p>یہ الفاظ فعل سے <b>بالکل پہلے</b> آتے ہیں۔</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|میں عام طور پر سات بجے اٹھتی ہوں}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|میں رات کو کبھی کافی نہیں پیتا}}
<div class="tip">اردو کی ترتیب میں لکھیں تو جملہ غلط ہو جاتا ہے: <b>I tea drink.</b> ✗ درست: <b>I drink tea.</b> ✓ فاعل کے فوراً بعد فعل بولنے کی مشق کریں۔</div>`,
check:[["\"میں کافی پیتا ہوں\" کی درست ترتیب کون سی ہے؟",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"ترتیب: فاعل + فعل + مفعول۔"],["خالی جگہ پُر کریں: I ___ eat meat (نہیں کھاتا)",["not","am not","no","don't"],3,"عام فعل کا منفی don't سے بنتا ہے۔"],["لفظ always کس جملے میں درست جگہ پر ہے؟",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"always جیسے الفاظ فعل سے بالکل پہلے آتے ہیں۔"]],
practice:[
["mc","انگریزی میں: \"میں انگریزی پڑھتا ہوں\"","I study English.","I English study.","I am study English.","Study I English.","ترتیب: فاعل + فعل + مفعول۔"],
["mc","انگریزی میں: \"میں گوشت نہیں کھاتی\"","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","عام فعل کا منفی don't سے بنتا ہے۔"],
["mc","انگریزی میں: \"ہم سیول میں رہتے ہیں\"","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","فعل کے بعد جگہ آتی ہے، اور live سے پہلے are نہیں لگتا۔"],
["mc","انگریزی میں: \"میں عام طور پر سات بجے اٹھتا ہوں\"","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually فعل سے بالکل پہلے آتا ہے۔"],
["mc","کون سا جملہ روز کی عادت بتاتا ہے؟","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","عادت Simple Present میں بتائی جاتی ہے۔"],
["or","میں روز کافی پیتا ہوں","I drink coffee every day","the am","عادت Simple Present میں آتی ہے، اور عام معنی میں coffee کے ساتھ آرٹیکل نہیں لگتا۔"],
["or","میں بہت کتابیں پڑھتی ہوں","I read many books","book","many کے بعد اسم جمع میں آتا ہے: books۔"],
["or","ہم ویک اینڈ پر کام کرتے ہیں","We work on weekends","are","عام فعل سے پہلے be نہیں لگتا: We are work غلط ہے۔"],
["fi","I __ like fish.","مجھے مچھلی پسند نہیں","don't|do not","not|am not|no","عام فعل کا منفی don't سے بنتا ہے۔"],
["fi","I __ English every day.","میں روز انگریزی پڑھتا ہوں","study","am study|studying|to study","Simple Present میں فعل کی پہلی فارم آتی ہے۔"],
["fi","They live __ Busan.","وہ بوسان میں رہتے ہیں","in","at|on|to","شہر کے نام سے پہلے in آتا ہے۔"],
["ty","میں چائے پیتا ہوں","I drink tea","الفاظ: drink · tea — آرٹیکل کے بغیر","a","عام معنی میں tea کے ساتھ آرٹیکل نہیں لگتا۔"],
["ty","مجھے بلیاں پسند ہیں","I like cats","الفاظ: like · cat — جمع","cat","پوری قسم کی بات ہو تو اسم جمع میں آتا ہے: cats۔"],
["ty","میں گوشت نہیں کھاتا","I don't eat meat","الفاظ: don't · eat · meat","am","عام فعل کا منفی don't سے بنتا ہے۔"]]},
{ id:"questions", title:"سوال بنانا: Do you …? اور سوالیہ لفظ", blurb:"صرف لہجہ بدلنا کافی نہیں۔ Do شروع میں، اور سوالیہ لفظ اس سے بھی پہلے۔", deck:"سب سے ضروری 2", body:`
<p>اردو میں سوال لہجے سے بن جاتا ہے ("آپ چائے پیتے ہیں؟") یا شروع میں "کیا" لگا کر۔ انگریزی میں <b>الفاظ کی ترتیب</b> بدلنی پڑتی ہے، اور عام فعل کے ساتھ امدادی فعل (helping verb) <b>do</b> آتا ہے، جس جیسا کوئی لفظ اردو میں نہیں۔</p>
<h3>be والے جملے: جگہ بدل دیں</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|تم ٹھیک ہو؟}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|کیا یہ آپ کا بیگ ہے؟}}
<h3>عام فعل: شروع میں Do</h3>
<p>جملے میں be کے علاوہ کوئی اور فعل ہو (like, live, speak) تو شروع میں <b>Do</b> لگتا ہے اور باقی ترتیب وہی رہتی ہے۔ اسے اردو کے "کیا" کی جگہ سمجھ لیں۔</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|آپ کو کافی پسند ہے؟}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|کیا آپ انگریزی بولتے ہیں؟}}
<p>جواب مختصر ہوتا ہے: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>سوالیہ لفظ سب سے پہلے</h3>
<p>اردو میں سوالیہ لفظ وہیں رہتا ہے جہاں جواب آئے گا: "آپ <b>کہاں</b> رہتے ہیں؟" انگریزی میں what (کیا)، where (کہاں)، when (کب)، who (کون)، why (کیوں) اور how (کیسے) سب سے پہلے آتے ہیں، اور ان کے بعد سوال والی ترتیب: <b>What this is made of?</b> ✗ درست: <b>What is this made of?</b> ✓</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|آپ کہاں رہتے ہیں؟}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|آپ کیا کام کرتے ہیں؟}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|باتھ روم کہاں ہے؟}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|یہ کتنے کا ہے؟}}
<h3>"ہے نا؟" اور جملے کے اندر سوال</h3>
<p>اردو کا "ہے نا؟" ہر جملے کے ساتھ لگ جاتا ہے۔ انگریزی کا question tag جملے کے فاعل اور فعل کے مطابق بدلتا ہے: aren't you, don't you۔ ہر جملے کے بعد isn't it صرف پاکستان اور بھارت میں چلتا ہے۔ اور جب سوال کسی جملے کے اندر آئے تو ترتیب عام جملے والی رہتی ہے: <b>I asked him where is he.</b> ✗ درست: <b>I asked him where he was.</b> ✓</p>
{{ex:You like tea, don't you?|/ju ˈlaɪk ˈtiː ˈdoʊnt ju/|تمہیں چائے پسند ہے، ہے نا؟}}
<div class="tip">عام غلطیاں: <b>Where you live?</b> ✗ درست: <b>Where do you live?</b> ✓ <b>Are you like coffee?</b> ✗ درست: <b>Do you like coffee?</b> ✓</div>`,
check:[["انگریزی میں: \"آپ کو کافی پسند ہے؟\"",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"like عام فعل ہے، اس لیے سوال Do سے شروع ہوتا ہے۔"],["انگریزی میں: \"آپ کہاں رہتے ہیں؟\"",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"ترتیب: سوالیہ لفظ + do + فاعل + فعل۔"],["سوال Do you speak English کا درست جواب کون سا ہے؟",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Do سے پوچھا جائے تو جواب بھی do سے دیا جاتا ہے۔"]],
practice:[
["mc","انگریزی میں: \"کیا آپ انگریزی بولتے ہیں؟\"","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","speak عام فعل ہے، اس لیے سوال Do سے شروع ہوتا ہے۔"],
["mc","انگریزی میں: \"آپ کہاں رہتے ہیں؟\"","Where do you live?","Where you live?","Where are you live?","Where live you?","ترتیب: سوالیہ لفظ + do + فاعل + فعل۔"],
["mc","انگریزی میں: \"یہ کتنے کا ہے؟\"","How much is this?","How much this is?","How much does this?","What much is this?","قیمت How much is … سے پوچھی جاتی ہے، اور is فاعل سے پہلے آتا ہے۔"],
["mc","سوال Do you like tea کا درست جواب کون سا ہے؟","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Do سے پوچھا جائے تو جواب بھی do سے دیا جاتا ہے؛ Yes, I like ادھورا ہے۔"],
["mc","پیشہ پوچھنا ہو تو انگریزی میں: \"آپ کیا کام کرتے ہیں؟\"","What do you do?","What are you do?","What you do?","What do you?","پیشہ What do you do سے پوچھا جاتا ہے۔"],
["or","آپ کو کافی پسند ہے؟","Do you like coffee","Are the","like کا سوال Do سے بنتا ہے، اور عام معنی میں coffee کے ساتھ آرٹیکل نہیں لگتا۔"],
["or","باتھ روم کہاں ہے؟","Where is the bathroom","a do","اسی عمارت کا باتھ روم جسے دونوں جانتے ہیں، اس لیے آرٹیکل the۔"],
["or","آپ کہاں رہتے ہیں؟","Where do you live","are","live عام فعل ہے، اس لیے سوال میں do چاہیے۔"],
["fi","__ you like music?","آپ کو موسیقی پسند ہے؟","Do","Are|Is|Does","like کا سوال Do سے بنتا ہے۔"],
["fi","__ do you live?","آپ کہاں رہتے ہیں؟","Where","What|Who|When","جگہ پوچھنے کے لیے where آتا ہے۔"],
["fi","What time __ it?","کیا وقت ہوا ہے؟","is","do|does|are","وقت be سے پوچھا جاتا ہے۔"],
["ty","کیا آپ انگریزی بولتے ہیں؟","Do you speak English|Can you speak English","الفاظ: do · speak · English","Are","speak کا سوال Do سے شروع ہوتا ہے۔"],
["ty","باتھ روم کہاں ہے؟","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","الفاظ: where · bathroom — آرٹیکل the","a","وہی باتھ روم جسے دونوں جانتے ہیں، اس لیے آرٹیکل the۔"],
["ty","آپ کو کتے پسند ہیں؟","Do you like dogs","الفاظ: do · like · dog — جمع","dog","پوری قسم کی بات ہو تو اسم جمع میں آتا ہے: dogs۔"]]},
{ id:"third-s", title:"فعل پر -s: he / she / it کے ساتھ، اور does / doesn't", blurb:"فاعل ایک شخص یا ایک چیز ہو تو فعل پر -s۔ سوال اور منفی does سے۔", deck:"اپنا تعارف", body:`
<p>اردو میں فعل فاعل کے مطابق کئی طرح بدلتا ہے: کرتا ہے / کرتی ہے / کرتے ہیں۔ انگریزی کے Simple Present میں ایک ہی تبدیلی ہے: فاعل <b>he, she, it</b> یا کوئی ایک شخص یا چیز ہو تو فعل پر <b>-s</b> لگتا ہے۔ یہ he / she / it والا -s ایک ہی حرف ہے، اس لیے بولتے وقت آسانی سے رہ جاتا ہے۔ اسے صاف بولیں اور ضرور لکھیں۔</p>
<div class="tbl"><table><tr><th>فاعل</th><th>فعل</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|وہ ایک بینک میں کام کرتی ہے}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|اسے فٹ بال پسند ہے}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|میری امی اچھا کھانا بناتی ہیں}}
<p>اردو میں "کرتا ہے / کرتی ہے" سے پتا چلتا ہے کہ بات مرد کی ہے یا عورت کی۔ انگریزی کا فعل دونوں کے لیے ایک ہے (works)؛ فرق he اور she سے ہوتا ہے۔</p>
<h3>جن فعلوں کی شکل ذرا بدلتی ہے</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|اس کے پاس گاڑی ہے (have بدل کر has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|وہ آٹھ بجے کام پر جاتا ہے (go بدل کر goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|وہ انگریزی پڑھتی ہے (study بدل کر studies)}}
<h3>منفی اور سوال: does</h3>
<p><b>doesn't</b> یا <b>Does</b> آئے تو -s اسی پر چلا جاتا ہے، اور بعد والا فعل -s کے بغیر پہلی فارم میں رہتا ہے۔</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|وہ کافی نہیں پیتا}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|کیا وہ یہاں رہتی ہے؟}}
<div class="tip">عام غلطیاں: <b>She work here.</b> ✗ درست: <b>She works here.</b> ✓ <b>She don't like tea.</b> ✗ درست: <b>She doesn't like tea.</b> ✓ <b>Does she works?</b> ✗ درست: <b>Does she work?</b> ✓</div>`,
check:[["خالی جگہ پُر کریں: She ___ in Seoul",["live","lives","living","is live"],1,"she کے ساتھ فعل پر -s لگتا ہے: lives۔"],["خالی جگہ پُر کریں: He ___ like coffee",["don't","isn't","doesn't","not"],2,"he کا منفی doesn't سے بنتا ہے۔"],["انگریزی میں: \"اس (لڑکی) کے پاس گاڑی ہے\"",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"she کے ساتھ have بدل کر has ہو جاتا ہے۔"]],
practice:[
["mc","خالی جگہ پُر کریں: My brother ___ in Busan","works","work","working","is work","my brother ایک شخص (he) ہے، اس لیے works۔"],
["mc","انگریزی میں: \"وہ (لڑکا) کافی نہیں پیتا\"","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he کا منفی: doesn't + فعل کی پہلی فارم۔"],
["mc","انگریزی میں: \"کیا وہ (لڑکی) یہاں رہتی ہے؟\"","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","she کا سوال Does سے بنتا ہے، اور اس کے بعد فعل پر -s نہیں لگتا۔"],
["mc","فعل have کی کون سی شکل she کے ساتھ آتی ہے؟","has","haves","have","is have","she کے ساتھ have بدل کر has ہو جاتا ہے۔"],
["mc","فعل study کی کون سی شکل he کے ساتھ آتی ہے؟","studies","studys","study","studyes","کانسوننٹ + y ہو تو y کی جگہ -ies آتا ہے۔"],
["or","وہ (لڑکی) ایک بینک میں کام کرتی ہے","She works at a bank","work the","she کے ساتھ works؛ بینک کا ذکر پہلی بار ہے، اس لیے آرٹیکل a۔"],
["or","اس (لڑکے) کے پاس دو کتے ہیں","He has two dogs","have dog","he کے ساتھ has، اور two کے بعد جمع dogs۔"],
["or","وہ (لڑکی) گوشت نہیں کھاتی","She doesn't eat meat","eats","doesn't کے بعد فعل -s کے بغیر آتا ہے۔"],
["fi","He __ soccer.","اسے (لڑکے کو) فٹ بال پسند ہے","likes","like|liking|is like","he کے ساتھ فعل پر -s لگتا ہے: likes۔"],
["fi","__ she speak English?","کیا وہ (لڑکی) انگریزی بولتی ہے؟","Does","Do|Is|Are","she کا سوال Does سے بنتا ہے۔"],
["fi","She __ to work at eight.","وہ (لڑکی) آٹھ بجے کام پر جاتی ہے","goes","go|going|gos","she کے ساتھ go بدل کر goes ہو جاتا ہے۔"],
["ty","اس (لڑکے) کے پاس گاڑی ہے","He has a car","الفاظ: has · car — آرٹیکل a","have","he کے ساتھ has؛ گاڑی ایک ہے، اس لیے آرٹیکل a۔"],
["ty","اسے (لڑکی کو) بلیاں پسند ہیں","She likes cats","الفاظ: likes · cat — جمع","cat","she کے ساتھ likes؛ پوری قسم کی بات ہے، اس لیے جمع cats۔"],
["ty","وہ (لڑکا) یہاں نہیں رہتا","He doesn't live here","الفاظ: doesn't · live · here","lives","doesn't کے بعد فعل کی پہلی فارم آتی ہے۔"]]},
{ id:"countable", title:"قابلِ شمار اور ناقابلِ شمار اسم: some, any, much, many", blurb:"لفظ water کے ساتھ نہ a لگتا ہے نہ -s۔ گنے جا سکیں تو many، نہ گنے جا سکیں تو much۔", deck:"ریسٹورنٹ میں", body:`
<p>انگریزی کے اسم دو طرح کے ہیں: <b>قابلِ شمار</b> (جو گنے جا سکیں) اور <b>ناقابلِ شمار</b> (جو گنے نہ جا سکیں)۔ مشکل یہ ہے کہ یہ تقسیم اردو سے ہمیشہ نہیں ملتی۔ اردو میں "دو مشورے" کہا جا سکتا ہے اور "معلومات" خود جمع ہے، مگر انگریزی میں advice, information, luggage (سامان), furniture اور work (کام) ناقابلِ شمار ہیں۔</p>
<div class="tbl"><table><tr><th>قابلِ شمار</th><th>ناقابلِ شمار</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time, advice</td></tr><tr><td>گنتی، a / an اور -s لگ سکتے ہیں</td><td>گنتی، a / an اور -s نہیں لگتے</td></tr></table></div>
<h3>some اور any</h3>
<p>"کچھ" کے لیے عام جملے میں <b>some</b> آتا ہے، منفی جملے اور سوال میں <b>any</b>۔ لیکن جب سوال اصل میں درخواست یا پیشکش ہو تو some ہی رہتا ہے: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|میرے پاس کچھ پیسے ہیں}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|میرے پاس بالکل پیسے نہیں ہیں}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|کوئی سوال ہے؟}}
<h3>many اور much</h3>
<p>قابلِ شمار اسم کے ساتھ <b>many</b> + جمع، ناقابلِ شمار کے ساتھ <b>much</b>۔ <b>a lot of</b> دونوں کے ساتھ چلتا ہے، اس لیے many advices ✗ کی جگہ a lot of advice کہیں۔</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|کتنے لوگ؟}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|یہ کتنے کا ہے؟}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|میرے پاس زیادہ وقت نہیں ہے}}
<h3>ناقابلِ شمار چیز کو گننا</h3>
<p>برتن یا ٹکڑے کا نام ساتھ لگا دیں: a glass of, a cup of, a piece of۔</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|پانی کا ایک گلاس}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|کافی کا ایک کپ}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|ایک مشورہ}}
<p>ایک اور لفظ: <b>alphabet</b> سارے حروف کے مجموعے کا نام ہے؛ اس کا ایک حرف <b>a letter</b> ہے: the letters A and B۔</p>
<div class="tip">عام غلطیاں: <b>a water</b>, <b>many money</b>, <b>informations</b>, <b>advices</b> ✗ درست: <b>some water</b>, <b>much money</b>, <b>information</b>, <b>advice</b> ✓</div>`,
check:[["خالی جگہ پُر کریں: How ___ people are there",["much","many","any","a"],1,"people گنے جا سکتے ہیں، اس لیے many۔"],["ان میں سے ناقابلِ شمار اسم کون سا ہے؟",["apple","chair","water","friend"],2,"water کے ساتھ نہ a لگتا ہے نہ -s۔"],["خالی جگہ پُر کریں: I don't have ___ money",["some","a","many","any"],3,"منفی جملے میں any آتا ہے۔"]],
practice:[
["mc","خالی جگہ پُر کریں: Can I have ___ water","some","a","many","an","water ناقابلِ شمار ہے، اس لیے a یا many نہیں لگتا؛ درخواست میں some آتا ہے۔"],
["mc","خالی جگہ پُر کریں: How ___ time do we have","much","many","any","a","time ناقابلِ شمار ہے، اس لیے much۔"],
["mc","انگریزی میں: \"کوئی سوال ہے؟\"","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any کے بعد قابلِ شمار اسم جمع میں آتا ہے: questions۔"],
["mc","انگریزی میں: \"پانی کا ایک گلاس\"","a glass of water","a water glass of","one waters","a glass water","ناقابلِ شمار چیز a glass of کہہ کر گنی جاتی ہے۔"],
["mc","خالی جگہ پُر کریں: I have ___ friends in Seoul","many","much","a","an","friends قابلِ شمار ہے اور جمع میں ہے، اس لیے many۔"],
["or","میرے پاس کچھ پیسے ہیں","I have some money","a moneys","money ناقابلِ شمار ہے: نہ آرٹیکل a لگتا ہے نہ جمع کا -s۔"],
["or","دو سیب دے دیں","Two apples please","apple","two کے بعد اسم جمع میں آتا ہے: apples۔"],
["or","میرے پاس زیادہ وقت نہیں ہے","I don't have much time","many","time گنا نہیں جاتا، اس لیے much۔"],
["fi","How __ is this?","یہ کتنے کا ہے؟","much","many|any|some","قیمت how much سے پوچھی جاتی ہے۔"],
["fi","I don't have __ questions.","میرا کوئی سوال نہیں ہے","any","some|much|a","منفی جملے میں any آتا ہے۔"],
["fi","a cup __ coffee","کافی کا ایک کپ","of","for|in|a","کپ گن کر بتانا ہو تو a cup of آتا ہے۔"],
["ty","مجھے تھوڑا پانی مل سکتا ہے؟","Can I have some water|Could I have some water|Can I get some water|Could I get some water","الفاظ: can I have · some · water — آرٹیکل کے بغیر","a","water ناقابلِ شمار ہے، اس لیے آرٹیکل a کی جگہ some آتا ہے۔"],
["ty","آپ کا کوئی سوال ہے؟","Do you have any questions","الفاظ: do you have · any · question — جمع","question","any کے بعد قابلِ شمار اسم جمع میں آتا ہے: questions۔"],
["ty","کتنے لوگ؟","How many people","الفاظ: how many · people","much","people گنے جا سکتے ہیں، اس لیے many۔"]]},
{ id:"object-have", title:"ضمیر کی دوسری شکل (me, him, her) اور have", blurb:"فعل کے بعد I نہیں، me آتا ہے۔ اور \"میرے پاس … ہے\" کے لیے have۔", deck:"اپنا تعارف", body:`
<p>اردو میں "میں" کے ساتھ "کو" آئے تو وہ "مجھے" بن جاتا ہے۔ انگریزی میں بھی ضمیر (pronoun) کی شکل بدلتی ہے: فعل یا preposition (حرفِ جار) کے <b>بعد</b> I نہیں، <b>me</b> آتا ہے۔</p>
<div class="tbl"><table><tr><th>فاعل</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>مفعول</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|وہ مجھے جانتی ہے}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|مجھے وہ پسند ہے}}{{ex:Can you help us?|/kən ju ˈhelp əs/|کیا آپ ہماری مدد کر سکتے ہیں؟}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|میں اس کے ساتھ کام کرتا ہوں}}
<h3>وہ = he، she یا it</h3>
<p>اردو کا "وہ" مرد، عورت اور چیز سب کے لیے آتا ہے؛ فرق فعل سے پتا چلتا ہے (وہ جاتا ہے / جاتی ہے)۔ انگریزی میں ضمیر خود چننا پڑتا ہے: مرد کے لیے he / him، عورت کے لیے she / her، چیز کے لیے <b>it</b>۔ اور مفعول چھوڑا نہیں جاتا: <b>Yes, I like.</b> ✗</p>
{{ex:My sister is a doctor. She works in Lahore.|/maɪ ˈsɪstər ɪz ə ˈdɑːktər ‖ ʃi ˈwɜːrks ɪn ləˈhɔːr/|میری بہن ڈاکٹر ہے۔ وہ لاہور میں کام کرتی ہے}}{{ex:Yes, I like it.|/ˈjes aɪ ˈlaɪk ɪt/|جی ہاں، مجھے پسند ہے}}
<h3>have: "میرے پاس … ہے"</h3>
<p>اردو میں کہتے ہیں "میرے پاس گاڑی ہے" یا "میرے دو بھائی ہیں"۔ انگریزی میں مالک فاعل بنتا ہے اور فعل <b>have</b> آتا ہے۔ ملکیت والے have پر -ing کبھی نہیں لگتا: <b>They were having a horse.</b> ✗ درست: <b>They had a horse.</b> ✓</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|میرے دو بھائی ہیں}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|آپ کے پاس پین ہے؟}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|میرے پاس وقت نہیں ہے}}
<h3>have: کھانا، پینا</h3>
<p>کھانے کے نام (breakfast, lunch, dinner) سے پہلے آرٹیکل نہیں لگتا۔</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|چلو، دوپہر کا کھانا کھاتے ہیں}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|میں ہر صبح کافی پیتی ہوں}}
<div class="tip">عام غلطیاں: <b>She knows I.</b> ✗ درست: <b>She knows me.</b> ✓ چیز کے لیے he نہیں: <b>I bought a phone but he is not working.</b> ✗ درست: <b>I bought a phone but it isn't working.</b> ✓</div>`,
check:[["خالی جگہ پُر کریں: I like ___ (اسے، ایک لڑکے کو)",["he","his","him","he's"],2,"فعل کے بعد he نہیں، him آتا ہے۔"],["خالی جگہ پُر کریں: Can you help ___ (ہماری)",["us","we","our","ours"],0,"فعل کے بعد we نہیں، us آتا ہے۔"],["انگریزی میں: \"آپ کے پاس پین ہے؟\"",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have عام فعل ہے، اس لیے سوال Do سے بنتا ہے۔"]],
practice:[
["mc","خالی جگہ پُر کریں: She knows ___ (مجھے)","me","I","my","mine","فعل کے بعد I نہیں، me آتا ہے۔"],
["mc","خالی جگہ پُر کریں: I like ___ (انہیں)","them","they","their","theirs","فعل کے بعد they نہیں، them آتا ہے۔"],
["mc","انگریزی میں: \"کیا آپ ہماری مدد کر سکتے ہیں؟\"","Can you help us?","Can you help we?","Can you help our?","Can us help you?","فعل کے بعد us آتا ہے۔"],
["mc","انگریزی میں: \"چلو، دوپہر کا کھانا کھاتے ہیں\"","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","کھانے کے نام lunch سے پہلے آرٹیکل نہیں لگتا۔"],
["mc","انگریزی میں: \"میرے دو بھائی ہیں\"","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","رشتے داروں کے لیے بھی have آتا ہے، اور two کے بعد جمع brothers۔"],
["or","آپ کے پاس پین ہے؟","Do you have a pen","the pens","کوئی بھی ایک پین، اس لیے آرٹیکل a اور واحد pen۔"],
["or","مجھے وہ (لڑکی) پسند ہے","I like her","she","فعل کے بعد she نہیں، her آتا ہے۔"],
["or","میری دو بہنیں ہیں","I have two sisters","sister a","two کے بعد جمع sisters؛ آرٹیکل a یہاں نہیں لگتا۔"],
["fi","Call __ tonight.","آج رات مجھے فون کرنا","me","I|my|mine","فعل کے بعد me آتا ہے۔"],
["fi","I work with __.","میں اس (لڑکے) کے ساتھ کام کرتا ہوں","him","he|his|he's","preposition کے بعد بھی مفعول والی شکل آتی ہے: him۔"],
["fi","She __ a dog.","اس (لڑکی) کے پاس ایک کتا ہے","has","have|is|haves","she کے ساتھ has آتا ہے۔"],
["ty","کیا آپ میری مدد کر سکتے ہیں؟","Can you help me|Could you help me","الفاظ: can you · help · me","I","فعل کے بعد I نہیں، me آتا ہے۔"],
["ty","آپ کے پاس پین ہے؟","Do you have a pen","الفاظ: do you have · pen — آرٹیکل a","the","کوئی بھی ایک پین چاہیے، اس لیے آرٹیکل a۔"],
["ty","میرے بہت سے دوست ہیں","I have many friends|I have a lot of friends","الفاظ: have · many · friend — جمع","friend","many کے بعد اسم جمع میں آتا ہے: friends۔"]]},
{ id:"can-like", title:"کیا کر سکتے ہیں اور کیا چاہیے: can, like + -ing, I'd like", blurb:"جو کر سکتے ہیں، جو پسند ہے اور جو ابھی چاہیے، تینوں باتیں کہنا سیکھیں۔", deck:"ہلکی پھلکی گپ شپ", body:`
<p>اپنے تعارف اور آرڈر میں فوراً کام آنے والے تین سانچے۔</p>
<h3>can: کر سکنا</h3>
<p><b>can + فعل کی پہلی فارم</b>۔ اردو کا "سکتا ہے" فعل کے بعد آتا ہے اور فاعل کے ساتھ بدلتا ہے (سکتا / سکتی / سکتے)۔ can فعل سے پہلے آتا ہے اور کبھی نہیں بدلتا: he یا she کے ساتھ بھی -s نہیں لگتا۔</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|میں تیر سکتا ہوں}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|مجھے گاڑی چلانی نہیں آتی}}{{ex:Can you speak Urdu?|/kən ju ˈspiːk ˈʊrduː/|کیا آپ اردو بول سکتے ہیں؟}}
<h3>like: "مجھے … پسند ہے"</h3>
<p>اردو میں کہتے ہیں "<b>مجھے</b> چائے پسند ہے"۔ انگریزی میں پسند کرنے والا فاعل ہوتا ہے اور سب سے پہلے آتا ہے: <b>I like tea.</b> یہ ہمیشہ کی پسند ہے، اس لیے -ing نہیں لگتا: I am liking tea ✗</p>
{{ex:I like tea.|/aɪ ˈlaɪk ˈtiː/|مجھے چائے پسند ہے}}
<h3>like + -ing: کوئی کام پسند ہونا</h3>
<p>شوق بتانا ہو تو like یا love کے بعد <b>فعل کی -ing والی شکل</b> آتی ہے۔</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|مجھے کھانا پکانا پسند ہے}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|مجھے فلمیں دیکھنا بہت پسند ہے}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|مجھے دوڑنا پسند نہیں}}
<h3>I'd like: ابھی چاہیے</h3>
<p><b>I like</b> کا مطلب ہے "مجھے ہمیشہ پسند ہے"۔ <b>I'd like</b> کا مطلب ہے "مجھے ابھی چاہیے"، اور یہ I want سے زیادہ شائستہ ہے۔ آرڈر کرتے وقت I'd like کہیں۔</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|ایک کافی دے دیں}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|آپ چائے لیں گے؟}}
<div class="tip">عام غلطیاں: <b>He can swims.</b> ✗ درست: <b>He can swim.</b> ✓ کیفے میں <b>I like a coffee.</b> ✗ درست: <b>I'd like a coffee.</b> ✓</div>`,
check:[["خالی جگہ پُر کریں: She can ___ very well",["sings","sing","singing","to sing"],1,"can کے بعد فعل کی پہلی فارم آتی ہے۔"],["انگریزی میں: \"مجھے کھانا پکانا پسند ہے\"",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like کے بعد -ing والی شکل آتی ہے۔"],["کیفے میں آرڈر کرتے وقت سب سے مناسب جملہ کون سا ہے؟",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"جو چیز ابھی چاہیے، اس کے لیے I'd like کہتے ہیں۔"]],
practice:[
["mc","خالی جگہ پُر کریں: He can ___ Korean","speak","speaks","speaking","to speak","can کے بعد فعل کی پہلی فارم آتی ہے، -s کے بغیر۔"],
["mc","انگریزی میں: \"مجھے گاڑی چلانی نہیں آتی\"","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can کا منفی can't ہے۔"],
["mc","انگریزی میں: \"مجھے فلمیں دیکھنا پسند ہے\"","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like کے بعد -ing والی شکل؛ عام طور پر فلموں کی بات ہے، اس لیے جمع movies۔"],
["mc","آرڈر کرتے وقت انگریزی میں: \"ایک کافی دے دیں\"","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","جو چیز ابھی چاہیے، اس کے لیے I'd like کہتے ہیں۔"],
["mc","انگریزی میں: \"آپ چائے لیں گے؟\"","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","پیشکش Would you like … سے کی جاتی ہے۔"],
["or","ایک کافی دے دیں","I'd like a coffee please","the coffees","ایک کپ آرڈر کر رہے ہیں، اس لیے آرٹیکل a اور واحد coffee۔"],
["or","مجھے کتابیں پڑھنا پسند ہے","I like reading books","book read","like کے بعد -ing والی شکل؛ عام طور پر کتابوں کی بات ہے، اس لیے جمع books۔"],
["or","کیا آپ تیر سکتے ہیں؟","Can you swim","swimming","can کے بعد فعل کی پہلی فارم آتی ہے۔"],
["fi","I can't __.","میں تیر نہیں سکتا","swim","swimming|swims|to swim","can't کے بعد فعل کی پہلی فارم آتی ہے۔"],
["fi","I like __ music.","مجھے موسیقی سننا پسند ہے","listening to","listen to|listen|to listening","like کے بعد -ing والی شکل آتی ہے۔"],
["fi","__ like a sandwich, please.","ایک سینڈوچ دے دیں","I'd|I would","I|I'm|I can","آرڈر I'd like سے کیا جاتا ہے۔"],
["ty","مجھے کھانا پکانا پسند ہے","I like cooking|I love cooking|I like to cook","الفاظ: like · cook — -ing والی شکل","cook","like کے بعد -ing والی شکل آتی ہے۔"],
["ty","آرڈر کرتے وقت: ایک سینڈوچ دے دیں","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","الفاظ: I'd like · sandwich — آرٹیکل a","the","کوئی بھی ایک سینڈوچ، اس لیے آرٹیکل a۔"],
["ty","مجھے کتے پسند ہیں","I like dogs|I love dogs","الفاظ: like · dog — جمع","dog","پوری قسم کی بات ہو تو اسم جمع میں آتا ہے: dogs۔"]]},
{ id:"continuous", title:"ابھی ہو رہا ہے: be + -ing (Present Continuous)", blurb:"روز کا کام Simple Present میں، ابھی ہوتا ہوا کام be + -ing میں۔ know اور want پر -ing نہیں لگتا۔", deck:"ہلکی پھلکی گپ شپ", body:`
<p>جو کام <b>اسی وقت</b> ہو رہا ہو، اس کے لیے <b>be + فعل کی -ing والی شکل</b> آتی ہے۔ یہ Present Continuous ہے۔ اردو کا "رہا ہے / رہی ہے / رہے ہیں" اس سے ملتا ہے، مگر صرف ابھی ہوتے ہوئے کاموں میں۔</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|میں ابھی کام کر رہی ہوں}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|وہ رات کا کھانا بنا رہی ہے}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|بارش ہو رہی ہے}}
<h3>سوال اور منفی جملہ</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|تم کیا کر رہے ہو؟}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|تم سن رہے ہو؟}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|میں سو نہیں رہا}}
<h3>Simple Present سے فرق</h3>
<div class="tbl"><table><tr><th>ہمیشہ (Simple Present)</th><th>ابھی (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<p>عادت کے لیے -ing نہیں آتا، چاہے اردو میں "رہا ہے" کہہ دیں: <b>I am doing it all the time.</b> ✗ درست: <b>I do it all the time.</b> ✓</p>
<h3>جن فعلوں پر -ing نہیں لگتا</h3>
<p>know, want, need, understand, like, see اور have (= مالک ہونا) کوئی کام نہیں، <b>حالت</b> بتاتے ہیں۔ یہ حالت بتانے والے فعل (stative verbs) ہیں، اور بات ابھی کی ہو تب بھی Simple Present میں رہتے ہیں۔ اردو میں "میں سمجھ رہا ہوں" یا "مجھے نظر آ رہا ہے" ٹھیک ہے، انگریزی میں نہیں: <b>I am seeing the sky from here.</b> ✗ درست: <b>I can see the sky from here.</b> ✓</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|میں اسے جانتا ہوں}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|مجھے پانی چاہیے}}{{ex:I understand.|/aɪ ˌʌndərˈstænd/|میں سمجھ رہی ہوں}}
<p>"میں 2015 سے یہاں رہ رہا ہوں" جیسے جملے بھی Present Continuous میں نہیں آتے۔ یہ آگے ایک الگ سبق میں آئے گا۔</p>
<div class="tip">عام غلطیاں: be چھوٹ جانا: <b>I working.</b> ✗ درست: <b>I'm working.</b> ✓ حالت بتانے والے فعل پر -ing: <b>I'm knowing.</b> ✗ درست: <b>I know.</b> ✓</div>`,
check:[["انگریزی میں: \"تم کیا کر رہے ہو؟\"",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"ابھی ہوتے ہوئے کام کا سوال be + -ing سے بنتا ہے۔"],["خالی جگہ پُر کریں: I ___ coffee every morning",["am drinking","drinking","drink","am drink"],2,"روز کی عادت Simple Present میں آتی ہے۔"],["ان میں سے درست جملہ کون سا ہے؟",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know, want اور ملکیت والے have پر -ing نہیں لگتا۔"]],
practice:[
["mc","انگریزی میں: \"میں ابھی کام کر رہا ہوں\"","I'm working now.","I work now am.","I'm work now.","I working now.","ابھی ہوتا ہوا کام: be + -ing۔"],
["mc","انگریزی میں: \"وہ رات کا کھانا بنا رہی ہے\"","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing، اور کھانے کے نام dinner سے پہلے آرٹیکل نہیں لگتا۔"],
["mc","کون سا جملہ روز کی عادت بتاتا ہے؟","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","عادت Simple Present میں آتی ہے، -ing کے بغیر۔"],
["mc","انگریزی میں: \"تم کیا کر رہے ہو؟\"","What are you doing?","What do you doing?","What are you do?","What you are doing?","ترتیب: سوالیہ لفظ + be + فاعل + -ing۔"],
["mc","انگریزی میں: \"میں اسے جانتا ہوں\"","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know حالت بتانے والا فعل ہے، اس پر -ing نہیں لگتا۔"],
["or","میں ایک کتاب پڑھ رہا ہوں","I'm reading a book","read books","ابھی کوئی ایک کتاب پڑھی جا رہی ہے: آرٹیکل a اور واحد book۔"],
["or","بچے کھیل رہے ہیں","The kids are playing","kid is","بچے ایک سے زیادہ ہیں: جمع kids، اور اس کے ساتھ are۔"],
["or","ابھی بارش ہو رہی ہے","It's raining now","rains","ابھی جو ہو رہا ہے: be + -ing۔"],
["fi","I'm __ TV.","میں ٹی وی دیکھ رہی ہوں","watching","watch|watches|to watch","be کے بعد -ing والی شکل آتی ہے۔"],
["fi","What __ you doing?","تم کیا کر رہے ہو؟","are","do|is|does","you کے ساتھ are آتا ہے۔"],
["fi","She __ working today.","وہ آج کام نہیں کر رہی","isn't|is not","doesn't|don't|not","be + -ing کا منفی isn't سے بنتا ہے۔"],
["ty","میں ابھی کھانا پکا رہا ہوں","I'm cooking now|I'm cooking|I'm cooking right now","الفاظ: I'm · cook · now — -ing والی شکل","cook","ابھی ہوتا ہوا کام: be + -ing۔"],
["ty","میں ایک فلم دیکھ رہی ہوں","I'm watching a movie","الفاظ: I'm · watching · movie — آرٹیکل a","the","کوئی خاص فلم نہیں، اس لیے آرٹیکل a۔"],
["ty","بچے سو رہے ہیں","The kids are sleeping|The children are sleeping","الفاظ: kids · are · sleeping — جمع","kid","بچے ایک سے زیادہ ہیں: جمع kids، اور اس کے ساتھ are۔"]]},
{ id:"past", title:"گزرا ہوا وقت: was / were اور -ed (Simple Past)", blurb:"فعل be کا ماضی was / were ہے، اور عام فعل پر -ed لگتا ہے۔ سوال اور منفی did سے۔", deck:"ہلکی پھلکی گپ شپ", body:`
<p>یہ Simple Past ہے (سکول میں: Past Indefinite)۔ be کا ماضی الگ ہے اور عام فعل کا الگ، اور دونوں ایک ساتھ نہیں آتے۔</p>
<h3>be کا ماضی: was / were</h3>
<p>I, he, she, it کے ساتھ <b>was</b>؛ you, we, they کے ساتھ <b>were</b>۔ جب جملے میں کوئی اور فعل نہ ہو تو یہ اردو کے "تھا / تھی / تھے" کی جگہ آتے ہیں۔</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|میں تھکا ہوا تھا}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|مزہ آیا}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|ہم گھر پر تھے}}{{ex:Were you busy?|/wər ju ˈbɪzi/|تم مصروف تھے؟}}
<h3>عام فعل کا ماضی: -ed</h3>
<p>فعل کے آخر میں <b>-ed</b> لگائیں۔ یہ فعل کی دوسری فارم ہے اور ہر فاعل کے ساتھ ایک ہی رہتی ہے۔ -ed کی آواز تین طرح کی ہوتی ہے: worked میں /t/، called میں /d/ اور wanted میں /ɪd/۔</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|میں نے کل کام کیا}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|ہم نے ایک فلم دیکھی}}{{ex:She called me.|/ʃi ˈkɔːld mi/|اس نے مجھے فون کیا}}
<p>اردو میں ماضی کے جملے میں اکثر "تھا" بھی ساتھ آتا ہے: "میں گیا تھا"، "میں نے کام کیا تھا"۔ اس "تھا" کو was نہ بنائیں: <b>I was went there.</b> ✗ درست: <b>I went there.</b> ✓</p>
<h3>منفی اور سوال: did</h3>
<p><b>didn't</b> یا <b>Did</b> آئے تو فعل واپس پہلی فارم میں چلا جاتا ہے۔</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|میں نے کل کام نہیں کیا}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|تم نے مجھے فون کیا تھا؟}}
<div class="tip">عام غلطیاں: <b>I didn't worked.</b> ✗ درست: <b>I didn't work.</b> ✓ <b>I was work.</b> ✗ درست: <b>I worked.</b> ✓</div>`,
check:[["خالی جگہ پُر کریں: They ___ at home yesterday",["was","were","did","are"],1,"they کے ساتھ were آتا ہے۔"],["انگریزی میں: \"میں نے کل کام نہیں کیا\"",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't کے بعد فعل کی پہلی فارم آتی ہے۔"],["خالی جگہ پُر کریں: Did you ___ the movie",["watch","watched","watching","watches"],0,"Did کے بعد فعل کی پہلی فارم آتی ہے۔"]],
practice:[
["mc","خالی جگہ پُر کریں: I ___ tired yesterday","was","were","did","am","I کے ساتھ was آتا ہے۔"],
["mc","انگریزی میں: \"ہم نے ایک فلم دیکھی\"","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","عام فعل کا ماضی -ed سے بنتا ہے، was / were کے بغیر۔"],
["mc","انگریزی میں: \"تم نے کل فون کیا تھا؟\"","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did کے بعد فعل کی پہلی فارم آتی ہے۔"],
["mc","انگریزی میں: \"مزہ آیا\"","It was fun.","It were fun.","It did fun.","It funned.","it کے ساتھ was آتا ہے۔"],
["mc","انگریزی میں: \"تم مصروف تھے؟\"","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy فعل نہیں، حالت ہے، اس لیے سوال Were سے بنتا ہے۔"],
["or","ہم نے ایک فلم دیکھی","We watched a movie","watch movies","فلم ایک ہے: آرٹیکل a اور واحد movie۔"],
["or","بچہ کہتا ہے: میں اپنے دوستوں کے ساتھ کھیلا","I played with my friends","friend play","دوست ایک سے زیادہ ہیں، اس لیے جمع friends۔"],
["or","میں نے کل کام نہیں کیا","I didn't work yesterday","worked","didn't کے بعد فعل کی پہلی فارم آتی ہے۔"],
["fi","We __ at home last night.","ہم کل رات گھر پر تھے","were","was|did|are","we کے ساتھ were آتا ہے۔"],
["fi","I __ soccer yesterday.","میں نے کل فٹ بال کھیلا","played","play|playing|was play","ماضی کے لیے فعل پر -ed لگتا ہے۔"],
["fi","__ you work yesterday?","تم نے کل کام کیا؟","Did","Were|Do|Was","عام فعل کے ماضی کا سوال Did سے بنتا ہے۔"],
["ty","میں تھکا ہوا تھا","I was tired","الفاظ: was · tired","were","I کے ساتھ was آتا ہے۔"],
["ty","میں نے ایک فلم دیکھی (watch سے)","I watched a movie","الفاظ: watched · movie — آرٹیکل a","the","فلم ایک ہے اور پہلی بار ذکر ہو رہا ہے، اس لیے آرٹیکل a۔"],
["ty","میں نے اپنے دوستوں کو فون کیا","I called my friends","الفاظ: called · my · friend — جمع","friend","دوست ایک سے زیادہ ہیں، اس لیے جمع friends۔"]]},
{ id:"irregular-past", title:"بے قاعدہ فعل کا ماضی: went, ate, saw", blurb:"جو فعل سب سے زیادہ کام آتے ہیں، انہی پر -ed نہیں لگتا۔ پہلے یہ 12 یاد کریں۔", deck:"ہلکی پھلکی گپ شپ", body:`
<p>روز کام آنے والے فعل <b>بے قاعدہ</b> ہیں: ان کی دوسری فارم -ed سے نہیں بنتی۔ سکول میں فعل کی تین فارم یاد کرائی جاتی ہیں (go – went – gone)۔ Simple Past میں ہمیشہ <b>دوسری فارم</b> آتی ہے۔</p>
<div class="tbl"><table><tr><th>پہلی فارم</th><th>دوسری فارم</th><th>پہلی فارم</th><th>دوسری فارم</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Lahore.|/aɪ ˈwent tə ləˈhɔːr/|میں لاہور گیا}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|ہم نے پیزا کھایا}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|میں نے ایک فلم دیکھی}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|میں اپنے دوستوں سے ملی}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|میں نے ایک کتاب خریدی}}
<h3>سوال اور منفی میں واپس پہلی فارم</h3>
<p>ماضی کا نشان <b>did</b> ہے، اس لیے فعل پہلی فارم میں لوٹ آتا ہے۔</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|تم نے کیا کیا؟}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|تم کہاں گئے تھے؟}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|میں نہیں گیا}}
<div class="tip">عام غلطیاں: <b>I goed.</b> ✗ درست: <b>I went.</b> ✓ <b>Did you went?</b> ✗ درست: <b>Did you go?</b> ✓</div>`,
check:[["فعل go کی دوسری فارم کیا ہے؟",["goed","gone","went","going"],2,"go کی دوسری فارم went ہے؛ gone تیسری فارم ہے۔"],["انگریزی میں: \"تم نے کیا کیا؟\"",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did کے بعد فعل کی پہلی فارم do آتی ہے۔"],["خالی جگہ پُر کریں: I didn't ___ breakfast",["ate","eaten","eats","eat"],3,"didn't کے بعد فعل کی پہلی فارم آتی ہے۔"]],
practice:[
["mc","فعل eat کی دوسری فارم کیا ہے؟","ate","eated","eat","eaten","eat کی دوسری فارم ate ہے؛ eaten تیسری فارم ہے۔"],
["mc","انگریزی میں: \"تم کہاں گئے تھے؟\"","Where did you go?","Where did you went?","Where you went?","Where were you go?","did کے بعد فعل کی پہلی فارم آتی ہے۔"],
["mc","انگریزی میں: \"میں نے ایک کتاب خریدی\"","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy کی دوسری فارم bought ہے؛ کتاب ایک ہے، اس لیے آرٹیکل a۔"],
["mc","فعل see کی دوسری فارم کیا ہے؟","saw","seed","seen","sawed","see کی دوسری فارم saw ہے؛ seen تیسری فارم ہے۔"],
["mc","انگریزی میں: \"میں نہیں گیا\"","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't کے بعد فعل کی پہلی فارم آتی ہے۔"],
["or","میں نے ایک فلم دیکھی","I saw a movie","see movies","فلم ایک ہے: آرٹیکل a اور واحد movie؛ see کی دوسری فارم saw ہے۔"],
["or","ہم نے پیزا کھایا","We ate pizza","eated","eat کی دوسری فارم ate ہے۔"],
["or","میں اپنے دوستوں سے ملا","I met my friends","friend meet","دوست ایک سے زیادہ ہیں، اس لیے جمع friends۔"],
["fi","I __ to Jeju last year.","میں پچھلے سال جیجو گئی تھی","went","go|goed|gone","go کی دوسری فارم went ہے۔"],
["fi","What did you __?","تم نے کیا کھایا؟","eat","ate|eaten|eating","did کے بعد فعل کی پہلی فارم آتی ہے۔"],
["fi","She __ a new phone.","اس نے نیا فون خریدا","bought","buyed|buy|buys","buy کی دوسری فارم bought ہے۔"],
["ty","میں بوسان گیا","I went to Busan","الفاظ: went · to · Busan","go","go کی دوسری فارم went ہے۔"],
["ty","میں نے ایک کتاب خریدی","I bought a book","الفاظ: bought · book — آرٹیکل a","the","کتاب ایک ہے اور پہلی بار ذکر ہو رہا ہے، اس لیے آرٹیکل a۔"],
["ty","میں اپنے دوستوں سے ملی","I met my friends|I saw my friends","الفاظ: met · my · friend — جمع","friend","دوست ایک سے زیادہ ہیں، اس لیے جمع friends۔"]]},
{ id:"the", title:"آرٹیکل the: پہلی بار a، اگلی بار the", blurb:"پہلی بار ذکر ہو تو a، دونوں کو معلوم ہو تو the، اور عام بات ہو تو کچھ نہیں۔", deck:"راستہ اور سواری", body:`
<p>اردو میں آرٹیکل نہیں ہوتے، اس لیے یہ ایک ہی بار میں پکے نہیں ہوتے۔ غلطی دونوں طرف ہوتی ہے: جہاں <b>the</b> چاہیے وہاں رہ جاتا ہے، اور جہاں <b>کچھ نہیں</b> چاہیے وہاں لگ جاتا ہے۔</p>
<h3>پہلی بار a، دوبارہ ذکر ہو تو the</h3>
<p>سننے والا پہلی بار سن رہا ہو تو a؛ ذکر ہو چکا ہو اور اب اسے معلوم ہو تو the۔</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|میں نے ایک قمیض خریدی۔ قمیض نیلی ہے}}
<h3>موقع سے ظاہر ہو کہ کون سی چیز ہے تو the</h3>
<p>اس کمرے کی کھڑکی، قریب کا اسٹیشن، سورج: جب ظاہر ہو کہ کون سی چیز مراد ہے تو شروع ہی سے the آتا ہے۔ اداروں کے نام بھی: <b>the Education Ministry</b>۔</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|کیا آپ کھڑکی کھول سکتے ہیں؟}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|سب وے اسٹیشن کہاں ہے؟}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|آج دھوپ تیز ہے}}
<h3>جہاں آرٹیکل نہیں لگتا</h3>
<p>عام بات، خیال یا احساس، اور زیادہ تر ملکوں اور شہروں کے نام آرٹیکل کے بغیر آتے ہیں: <b>The England is a good place.</b> ✗ درست: <b>England is a good place.</b> ✓ اسی طرح <b>It is the time for us to leave.</b> ✗ درست: <b>It is time for us to leave.</b> ✓</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|مجھے موسیقی پسند ہے}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|زندگی مختصر ہے}}
<p>جگہ، سواری اور کھانے کے کچھ عام فقرے بھی آرٹیکل کے بغیر ہیں۔ انہیں ایسے ہی یاد کر لیں۔</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|میں بس سے کام پر جاتا ہوں}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|میں گھر پر ہوں}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|میں گیارہ بجے سوتی ہوں}}
<div class="tip">خود سے پوچھیں: "کیا سننے والا جانتا ہے کہ <b>کون سی</b> چیز مراد ہے؟" جانتا ہے تو the، نہیں جانتا تو a، اور عام بات ہو تو کچھ نہیں۔</div>`,
check:[["خالی جگہ پُر کریں: I have a cat. ___ cat is white",["A","An","The","(آرٹیکل نہیں)"],2,"اسی بلی کا ذکر ابھی ہوا ہے، اس لیے the۔"],["خالی جگہ پُر کریں: I go to ___ work by bus",["a","the","an","(آرٹیکل نہیں)"],3,"go to work میں آرٹیکل نہیں لگتا۔"],["اسی کمرے کی کھڑکی کھلوانی ہو تو کیا کہیں گے؟",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"وہی کھڑکی جسے دونوں جانتے ہیں، اس لیے the۔"]],
practice:[
["mc","خالی جگہ پُر کریں: I bought a shirt. ___ shirt is blue","The","A","An","Some","اسی قمیض کا ذکر ابھی ہوا ہے، اس لیے the۔"],
["mc","انگریزی میں: \"اسٹیشن کہاں ہے؟\"","Where's the station?","Where's a station?","Where's station?","Where the station?","قریب کا وہی اسٹیشن جسے دونوں جانتے ہیں، اس لیے the۔"],
["mc","ان میں سے درست جملہ کون سا ہے؟","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work اور by bus میں آرٹیکل نہیں لگتا۔"],
["mc","انگریزی میں: \"سورج گرم ہے\"","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","جو چیز ایک ہی ہو، اس کے ساتھ the آتا ہے۔"],
["mc","انگریزی میں: \"میں گھر پر ہوں\"","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home میں آرٹیکل نہیں لگتا۔"],
["or","کیا آپ کھڑکی کھول سکتے ہیں؟","Can you open the window","a windows","وہی کھڑکی جسے دونوں جانتے ہیں، اس لیے آرٹیکل the۔"],
["or","میں بس سے کام پر جاتا ہوں","I go to work by bus","the a","go to work اور by bus میں آرٹیکل نہیں لگتا۔"],
["or","وہ کتا بڑا ہے","The dog is big","A dogs","اسی کتے کی بات ہے جس کا ذکر ہو چکا ہے، اس لیے آرٹیکل the۔"],
["fi","I saw a movie. __ movie was great.","میں نے ایک فلم دیکھی۔ فلم بہت اچھی تھی","The","A|An|Some","اسی فلم کا ذکر ابھی ہوا ہے، اس لیے The۔"],
["fi","Where's __ bathroom?","باتھ روم کہاں ہے؟","the","a|an|some","اسی عمارت کا باتھ روم، اس لیے the۔"],
["fi","I have __ idea.","میرے ذہن میں ایک خیال آیا ہے","an","a|the|some","پہلی بار ذکر ہے، اور idea واول (حرفِ علت) کی آواز سے شروع ہوتا ہے، اس لیے an۔"],
["ty","کیا آپ دروازہ بند کر سکتے ہیں؟","Can you close the door|Could you close the door","الفاظ: can you · close · door — آرٹیکل the","a","وہی دروازہ جسے دونوں جانتے ہیں، اس لیے آرٹیکل the۔"],
["ty","اسٹیشن کہاں ہے؟","Where is the station|Where's the station","الفاظ: where · station — آرٹیکل the","a","قریب کا وہی اسٹیشن، اس لیے آرٹیکل the۔"],
["ty","میں گھر پر ہوں","I'm at home|I'm home","الفاظ: I'm · at · home — آرٹیکل کے بغیر","the","home سے پہلے آرٹیکل نہیں لگتا۔"]]},
{ id:"adjectives", title:"صفت اور موازنہ: bigger, more expensive, the best", blurb:"صفت اسم سے پہلے آتی ہے۔ موازنے میں -er یا more، سب سے بڑھ کر ہو تو the -est یا the most۔", deck:"خریداری اور ادائیگی", body:`
<p>صفت (adjective) اردو کی طرح اسم سے <b>پہلے</b> آتی ہے، یا be کے <b>بعد</b>۔ خریداری میں موازنہ بھی کرنا پڑتا ہے، اس لیے وہ بھی ساتھ سیکھیں۔</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|ایک بڑا بیگ}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|یہ بیگ بڑا ہے}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|یہ کچھ زیادہ ہی چھوٹا ہے}}
<h3>موازنہ: -er یا more (Comparative)</h3>
<p>اردو میں صفت خود نہیں بدلتی، اس سے پہلے "زیادہ" لگتا ہے: "زیادہ سستا"۔ انگریزی میں چھوٹے لفظ پر <b>-er</b> لگتا ہے اور لمبے لفظ سے پہلے <b>more</b> آتا ہے۔ دونوں ایک ساتھ کبھی نہیں آتے: <b>more better</b> ✗ موازنے میں "سے" کے لیے <b>than</b> آتا ہے۔</p>
<div class="tbl"><table><tr><th>صفت</th><th>Comparative</th><th>Superlative</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|یہ والا زیادہ سستا ہے}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|یہ اس والے سے زیادہ مہنگا ہے}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|اس سے بڑا سائز ہے؟}}
<p>عمر کے موازنے میں بھی than آتا ہے، to نہیں: <b>I am elder to you.</b> ✗</p>
{{ex:I'm older than you.|/aɪm ˈoʊldər ðən ˈjuː/|میں تم سے بڑا ہوں}}
<h3>Superlative کے ساتھ the</h3>
<p>اردو کے "سب سے" کی جگہ <b>the -est</b> یا <b>the most</b> آتا ہے، اور یہ دونوں بھی ایک ساتھ نہیں آتے: <b>most cheapest</b> ✗</p>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|یہ یہاں کا سب سے اچھا ریسٹورنٹ ہے}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|سب سے سستا کون سا ہے؟}}
<div class="tip">عام غلطیاں: <b>more cheaper</b>, <b>more good</b> ✗ درست: <b>cheaper</b>, <b>better</b> ✓ -er اور more ایک ساتھ نہیں آتے۔</div>`,
check:[["صفت big کا Comparative کیا ہے؟",["more big","biger","bigger","most big"],2,"چھوٹے لفظ پر -er لگتا ہے، اور یہاں آخری کانسوننٹ دو بار لکھا جاتا ہے: bigger۔"],["خالی جگہ پُر کریں: This is ___ expensive than that",["more","most","much","very"],0,"لمبے لفظ کا Comparative more سے بنتا ہے۔"],["صفت good کا Superlative کیا ہے؟",["the goodest","the most good","the better","the best"],3,"یہ بے قاعدہ ہے: good – better – the best۔"]],
practice:[
["mc","صفت cheap کا Comparative کیا ہے؟","cheaper","more cheap","cheapper","most cheap","چھوٹے لفظ پر -er لگتا ہے۔"],
["mc","انگریزی میں: \"یہ زیادہ مہنگا ہے\"","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","لمبے لفظ سے پہلے more آتا ہے۔"],
["mc","انگریزی میں: \"اس سے بڑا سائز ہے؟\"","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","ترتیب: آرٹیکل + صفت + اسم۔"],
["mc","صفت good کا Comparative کیا ہے؟","better","gooder","more good","best","یہ بے قاعدہ ہے: good – better – best۔"],
["mc","انگریزی میں: \"یہ سب سے اچھا ریسٹورنٹ ہے\"","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Superlative سے پہلے the آتا ہے۔"],
["or","آپ کے پاس اس سے بڑا سائز ہے؟","Do you have a bigger size","the sizes","کوئی بھی ایک بڑا سائز چاہیے، اس لیے آرٹیکل a۔"],
["or","یہ سب سے سستا ہے","This is the cheapest","a cheaper","Superlative سے پہلے آرٹیکل the آتا ہے۔"],
["or","یہ اس سے سستا ہے","This is cheaper than that","more","-er والی صفت کے ساتھ more نہیں لگتا۔"],
["fi","It's __ small.","یہ کچھ زیادہ ہی چھوٹا ہے","too","much|more|most","ضرورت سے زیادہ کے لیے too آتا ہے۔"],
["fi","This is cheaper __ that one.","یہ اس والے سے سستا ہے","than","then|that|more","موازنے میں \"سے\" کے لیے than آتا ہے۔"],
["fi","It's the __ expensive one.","یہ سب سے مہنگا والا ہے","most","more|much|very","لمبے لفظ کا Superlative the most سے بنتا ہے۔"],
["ty","آپ کے پاس اس سے چھوٹا سائز ہے؟","Do you have a smaller size","الفاظ: smaller · size — آرٹیکل a","the","کوئی بھی ایک چھوٹا سائز چاہیے، اس لیے آرٹیکل a۔"],
["ty","یہ سب سے اچھا ہے","This is the best|This one is the best","الفاظ: the · best — آرٹیکل the","a","Superlative سے پہلے آرٹیکل the آتا ہے۔"],
["ty","یہ زیادہ سستا ہے","This is cheaper|This one is cheaper","الفاظ: cheap — Comparative","more","چھوٹے لفظ پر -er لگتا ہے، more نہیں۔"]]},
{ id:"going-to", title:"منصوبہ بتانا: be going to", blurb:"جو کام پہلے سے طے ہو، اس کے لیے be going to + فعل۔", deck:"ہلکی پھلکی گپ شپ", body:`
<p>اردو کے "میں … کرنے والا ہوں" کی طرح یہ <b>پہلے سے طے منصوبہ</b> بتاتا ہے۔ سانچہ: <b>be + going to + فعل کی پہلی فارم</b>۔ یہاں going کا مطلب "جانا" نہیں ہے؛ یہ صرف آنے والے وقت کا نشان ہے۔</p>
{{ex:I'm going to visit Lahore.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ləˈhɔːr/|میں لاہور جانے والا ہوں}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|وہ گاڑی خریدنے والی ہے}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|ہم رات کا کھانا کھانے والے ہیں}}
<h3>منفی اور سوال</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|میں جانے والی نہیں ہوں}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|تم آنے والے ہو؟}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|اس ویک اینڈ پر تم کیا کرنے والے ہو؟}}
<h3>جو ہوتا نظر آ رہا ہو</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|بارش ہونے والی ہے}}
<h3>ساتھ آنے والے وقت کے الفاظ</h3>
<p>tomorrow (کل)، tonight (آج رات)، this weekend (اس ویک اینڈ پر) اور next week (اگلے ہفتے) جملے کے آخر میں آتے ہیں۔</p>
<div class="tip">بول چال میں going to اکثر <b>gonna</b> سنائی دیتا ہے۔ اور be نہ چھوڑیں: <b>I going to go.</b> ✗ درست: <b>I'm going to go.</b> ✓</div>`,
check:[["انگریزی میں: \"میں کل اپنے دوست سے ملنے والا ہوں\"",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"سانچہ: be + going to + فعل کی پہلی فارم۔"],["خالی جگہ پُر کریں: She ___ going to study",["am","are","is","be"],2,"she کے ساتھ is آتا ہے۔"],["انگریزی میں: \"اس ویک اینڈ پر تم کیا کرنے والے ہو؟\"",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"ترتیب: سوالیہ لفظ + be + فاعل + going to۔"]],
practice:[
["mc","انگریزی میں: \"میں بوسان جانے والا ہوں\"","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","سانچہ: be + going to + فعل کی پہلی فارم۔"],
["mc","خالی جگہ پُر کریں: They ___ going to come","are","is","am","be","they کے ساتھ are آتا ہے۔"],
["mc","انگریزی میں: \"بارش ہونے والی ہے\"","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to کے بعد فعل کی پہلی فارم آتی ہے۔"],
["mc","انگریزی میں: \"میں جانے والا نہیں ہوں\"","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","not ہمیشہ be کے فوراً بعد آتا ہے۔"],
["mc","انگریزی میں: \"تم آنے والے ہو؟\"","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","سوال میں be شروع میں آ جاتا ہے۔"],
["or","وہ ایک گاڑی خریدنے والی ہے","She's going to buy a car","the cars","گاڑی ایک ہے: آرٹیکل a اور واحد car۔"],
["or","میں اپنے دوستوں سے ملنے والا ہوں","I'm going to meet my friends","friend","دوست ایک سے زیادہ ہیں، اس لیے جمع friends۔"],
["or","ہم رات کا کھانا کھانے والے ہیں","We're going to have dinner","a","کھانے کے نام dinner سے پہلے آرٹیکل نہیں لگتا۔"],
["fi","I'm going __ study tonight.","میں آج رات پڑھنے والی ہوں","to","for|at|will","going to + فعل کی پہلی فارم۔"],
["fi","__ you going to come?","تم آنے والے ہو؟","Are","Do|Is|Will","you کے ساتھ Are آتا ہے۔"],
["fi","It's going to __ tomorrow.","کل بارش ہونے والی ہے","rain","rains|raining|rained","going to کے بعد فعل کی پہلی فارم آتی ہے۔"],
["ty","میں ایک فلم دیکھنے والا ہوں","I'm going to watch a movie|I'm going to see a movie","الفاظ: going to · watch · movie — آرٹیکل a","the","کوئی خاص فلم نہیں، اس لیے آرٹیکل a۔"],
["ty","تم کیا کرنے والے ہو؟","What are you going to do","الفاظ: what · going to · do","will","منصوبہ be going to سے پوچھا جاتا ہے۔"],
["ty","میں اپنے دوستوں سے ملنے والی ہوں","I'm going to meet my friends|I'm going to see my friends","الفاظ: going to · meet · friend — جمع","friend","دوست ایک سے زیادہ ہیں، اس لیے جمع friends۔"]]},
{ id:"joining", title:"جملے جوڑنا: and, but, or, so, because", blurb:"دو چھوٹے جملوں کو ایک بنائیں۔ because یا so، although یا but: جوڑی میں سے ایک ہی لفظ۔", deck:"جذبات اور ردعمل", body:`
<p>صرف چھوٹے چھوٹے جملے بولیں تو بات ٹوٹی ٹوٹی لگتی ہے۔ ان پانچ جوڑنے والے الفاظ (conjunctions) سے جملے رواں ہو جاتے ہیں۔</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|مجھے کافی اور چائے پسند ہے}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|میں تھکی ہوئی ہوں مگر خوش ہوں}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|کافی یا چائے؟}}
<h3>so: اس لیے</h3>
<p>ترتیب: <b>وجہ + so + نتیجہ</b>، بالکل اردو کے "اس لیے" کی طرح۔</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|میں تھکا ہوا تھا، اس لیے گھر چلا گیا}}
<h3>because: کیونکہ</h3>
<p>ترتیب: <b>نتیجہ + because + وجہ</b>، اردو کے "کیونکہ" کی طرح۔</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|میں گھر چلا گیا کیونکہ میں تھکا ہوا تھا}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|میں گھر پر رہی کیونکہ بارش ہو رہی تھی}}
<h3>جوڑی میں سے ایک ہی لفظ</h3>
<p>اردو میں یہ الفاظ جوڑی میں آتے ہیں: "کیونکہ … اس لیے"، "اگرچہ … لیکن"۔ انگریزی کے ایک جملے میں ایک ہی کافی ہے: because <b>یا</b> so، although <b>یا</b> but: <b>Although it was late, but I went.</b> ✗ اور اردو کا "کہ" انگریزی میں <b>that</b> ہے: I think that …</p>
{{ex:Although it was late, I went.|/ɔːlðoʊ ɪt wəz ˈleɪt aɪ ˈwent/|اگرچہ دیر ہو چکی تھی، میں چلا گیا}}
<h3>too: بھی</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|مجھے بھی پسند ہے}}
<div class="tip">so اور because ایک ہی جملے میں ساتھ نہیں آتے: <b>Because I was tired, so I went home.</b> ✗ دونوں میں سے ایک چنیں۔</div>`,
check:[["خالی جگہ پُر کریں: I was sick, ___ I stayed home",["because","but","so","or"],2,"پہلے وجہ، پھر نتیجہ ہو تو so آتا ہے۔"],["خالی جگہ پُر کریں: I stayed home ___ I was sick",["because","so","but","and"],0,"پہلے نتیجہ، پھر وجہ ہو تو because آتا ہے۔"],["\"کافی لیں گے یا چائے؟\" کے لیے کون سا جملہ درست ہے؟",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"دو میں سے ایک چننا ہو تو or آتا ہے۔"]],
practice:[
["mc","خالی جگہ پُر کریں: I like dogs ___ I don't like cats","but","so","or","because","دو الٹ باتیں but سے جوڑی جاتی ہیں۔"],
["mc","خالی جگہ پُر کریں: I was hungry, ___ I ate a sandwich","so","because","but","or","پہلے وجہ، پھر نتیجہ ہو تو so آتا ہے۔"],
["mc","خالی جگہ پُر کریں: I ate a sandwich ___ I was hungry","because","so","but","or","پہلے نتیجہ، پھر وجہ ہو تو because آتا ہے۔"],
["mc","انگریزی میں: \"کافی یا چائے؟\"","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","دو میں سے ایک چننا ہو تو or آتا ہے۔"],
["mc","انگریزی میں: \"میں تھکا ہوا ہوں مگر خوش ہوں\"","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","\"مگر\" کے لیے but آتا ہے۔"],
["or","مجھے بلیاں اور کتے پسند ہیں","I like cats and dogs","cat dog","پوری قسم کی بات ہو تو اسم جمع میں آتے ہیں: cats, dogs۔"],
["or","ایک کافی اور ایک سینڈوچ دے دیں","A coffee and a sandwich please","the or","دونوں چیزیں ایک ایک ہیں، اس لیے ہر ایک سے پہلے آرٹیکل a۔"],
["or","مجھے بھوک لگی تھی، اس لیے میں نے کھا لیا","I was hungry so I ate","because","پہلے وجہ، پھر نتیجہ ہو تو so آتا ہے۔"],
["fi","I'm tired __ happy.","میں تھکی ہوئی ہوں مگر خوش ہوں","but","so|because|or","\"مگر\" کے لیے but آتا ہے۔"],
["fi","I stayed home __ it was raining.","میں گھر پر رہا کیونکہ بارش ہو رہی تھی","because","so|but|or","پہلے نتیجہ، پھر وجہ ہو تو because آتا ہے۔"],
["fi","Coffee __ tea?","کافی یا چائے؟","or","so|but|because","دو میں سے ایک چننا ہو تو or آتا ہے۔"],
["ty","مجھے کافی اور چائے پسند ہے","I like coffee and tea","الفاظ: like · coffee · and · tea — آرٹیکل کے بغیر","a","عام معنی میں coffee اور tea کے ساتھ آرٹیکل نہیں لگتا۔"],
["ty","میں تھکا ہوا ہوں مگر خوش ہوں","I'm tired but happy|I'm tired but I'm happy","الفاظ: tired · but · happy","so","\"مگر\" کے لیے but آتا ہے۔"],
["ty","مجھے کتے اور بلیاں پسند ہیں","I like dogs and cats|I like cats and dogs","الفاظ: dog · and · cat — جمع","dog","پوری قسم کی بات ہو تو اسم جمع میں آتے ہیں: dogs, cats۔"]]},
{ id:"pakistani-english", title:"پاکستانی انگریزی: یہاں ٹھیک، باہر عجیب", blurb:"لفظ out of station اور shopper پاکستان میں سب سمجھتے ہیں۔ باہر کے لوگوں سے کیا کہیں، یہ سیکھیں۔", deck:"پاکستانی انگریزی: یہاں اور باہر", body:`
<p>پاکستانی انگریزی انگریزی کی اپنی ایک قسم ہے، غلط انگریزی نہیں۔ اس کے الفاظ پاکستان میں سب سمجھتے ہیں، اس لیے یہاں انہیں بے جھجک بولیں۔ مگر باہر کے لوگ ان میں سے کچھ الفاظ نہیں سمجھتے، یا کچھ اور سمجھ لیتے ہیں۔ یہ سبق بتاتا ہے کہ باہر کے سننے والے کیا سننے کی توقع رکھتے ہیں۔</p>
<h3>پاکستان میں ٹھیک، باہر یہ کہیں</h3>
<div class="tbl"><table><tr><th>پاکستان میں</th><th>باہر</th></tr><tr><td>out of station</td><td class="k">out of town</td></tr><tr><td>cousin-brother / cousin-sister</td><td class="k">cousin</td></tr><tr><td>pass out (تعلیم مکمل کرنا) · batchmate</td><td class="k">graduate · classmate</td></tr><tr><td>shopper (تھیلا) · copy (لکھنے والی)</td><td class="k">bag · notebook</td></tr><tr><td>petrol pump</td><td class="k">gas station</td></tr><tr><td>The light has gone.</td><td class="k">The power is out.</td></tr><tr><td>papers · numbers</td><td class="k">exams · grades</td></tr><tr><td>timings · thrice</td><td class="k">hours · three times</td></tr><tr><td>Where are you put up?</td><td class="k">Where are you staying?</td></tr><tr><td>prepone · expired (وفات پا گئے)</td><td class="k">move up · passed away</td></tr></table></div>
<p>کچھ الفاظ کا باہر مطلب ہی دوسرا ہے: <b>pass out</b> کا مطلب "بے ہوش ہو جانا" ہے، <b>shopper</b> کا مطلب "خریدار"، اور <b>expired</b> وہاں پاسپورٹ یا دوا جیسی چیزوں کے لیے آتا ہے جن کی مدت ختم ہو گئی ہو۔</p>
{{ex:I'm out of town this week.|/aɪm ˈaʊt əv ˈtaʊn ˈðɪs ˈwiːk/|میں اس ہفتے شہر سے باہر ہوں}}{{ex:The power is out.|/ðə ˈpaʊər ɪz ˈaʊt/|بجلی چلی گئی ہے}}{{ex:I graduated in 2019.|/aɪ ˈgrædʒueɪtɪd ɪn ˈtwenti ˌnaɪnˈtiːn/|میں نے 2019 میں گریجویشن کی}}{{ex:Where are you staying?|/ˈwer ər ju ˈsteɪɪŋ/|تم کہاں ٹھہرے ہو؟}}
<h3>یہ ہر جگہ غلط یا الجھانے والے ہیں</h3>
<p>ان میں سے کئی اردو سے لفظ بہ لفظ بنے ہیں۔ اردو میں بتی "کھولی" اور "بند" کی جاتی ہے اور سگریٹ "پی" جاتی ہے؛ انگریزی میں ایسا نہیں کہتے۔</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>open / close the light</td><td class="k">turn on / turn off the light</td></tr><tr><td>drink a cigarette</td><td class="k">smoke</td></tr><tr><td>same to same</td><td class="k">exactly the same</td></tr><tr><td>too much difficult</td><td class="k">very difficult</td></tr><tr><td>My head is paining.</td><td class="k">My head hurts.</td></tr><tr><td>I am elder to you.</td><td class="k">I'm older than you.</td></tr><tr><td>Myself Ali.</td><td class="k">I'm Ali. / My name is Ali.</td></tr><tr><td>…, isn't it? (ہر جملے کے بعد)</td><td class="k">… aren't you? / … don't you?</td></tr></table></div>
{{ex:Can you turn on the light?|/kən ju ˈtɜːrn ˈɑːn ðə ˈlaɪt/|کیا آپ بتی جلا سکتے ہیں؟}}{{ex:He doesn't smoke.|/hi ˈdʌznt ˈsmoʊk/|وہ سگریٹ نہیں پیتا}}{{ex:It's very difficult.|/ɪts ˈveri ˈdɪfɪkəlt/|یہ بہت مشکل ہے}}{{ex:Hi, I'm Ali.|/ˈhaɪ aɪm ˈɑːli/|ہیلو، میں علی ہوں}}
<h3>اردو سے لفظ بہ لفظ ترجمہ</h3>
<div class="tbl"><table><tr><th>اردو</th><th>لفظ بہ لفظ</th><th>باہر</th></tr><tr><td>دوا کھانا</td><td>eat medicine</td><td class="k">take medicine</td></tr><tr><td>امتحان دینا</td><td>give an exam</td><td class="k">take an exam</td></tr><tr><td>آپ کا اسم شریف؟</td><td>What is your good name?</td><td class="k">What's your name?</td></tr><tr><td>سگا بھائی</td><td>my real brother</td><td class="k">my brother</td></tr></table></div>
<p>انگریزی میں give an exam استاد کے لیے آتا ہے، جو امتحان لیتا ہے؛ طالب علم کے لیے take an exam ہے۔ "سگا" بتانے کی ضرورت نہیں پڑتی: brother کا مطلب سگا بھائی ہی ہے، اور چچا یا ماموں کا بیٹا cousin ہے۔</p>
{{ex:I need to take my medicine.|/aɪ ˈniːd tə ˈteɪk maɪ ˈmedɪsn/|مجھے دوا کھانی ہے}}{{ex:I'm taking an exam tomorrow.|/aɪm ˈteɪkɪŋ ən ɪgˈzæm təˈmɑːroʊ/|میں کل امتحان دے رہی ہوں}}{{ex:What's your name?|/ˈwʌts jʊr ˈneɪm/|آپ کا نام کیا ہے؟}}{{ex:This is my brother.|/ˈðɪs ɪz maɪ ˈbrʌðər/|یہ میرا بھائی ہے}}
<div class="tip">پاکستانی انگریزی پر شرمانے کی کوئی بات نہیں۔ بس سننے والے کو دیکھ کر لفظ چنیں: پاکستانی ساتھیوں کے ساتھ <b>out of station</b>، باہر کے لوگوں کے ساتھ <b>out of town</b>۔</div>`,
check:[["باہر کے کسی دوست کو بتانا ہے کہ بجلی چلی گئی ہے۔ کیا کہیں گے؟",["The light has gone.","The power is out.","The light is went.","The power is go."],1,"\"لائٹ چلی گئی\" پاکستان میں سب سمجھتے ہیں؛ باہر The power is out کہا جاتا ہے۔"],["\"بتی جلا دیں\" کے لیے درست جملہ کون سا ہے؟",["Please open the light.","Please on the light.","Please start the light.","Please turn on the light."],3,"بتی کھولی نہیں جاتی: turn on۔ بند کرنے کے لیے turn off۔"],["باہر اپنا تعارف کراتے وقت سب سے مناسب جملہ کون سا ہے؟",["Hi, I'm Ali.","Myself Ali.","Myself is Ali.","I am myself Ali."],0,"تعارف I'm Ali یا My name is Ali سے ہوتا ہے، Myself سے نہیں۔"]],
practice:[
["mc","باہر کے لوگوں سے انگریزی میں: \"میں اس ہفتے شہر سے باہر ہوں\"","I'm out of town this week.","I'm out of station this week.","I'm out of the town this week.","I'm outside city this week.","out of station پاکستان میں چلتا ہے؛ باہر out of town کہا جاتا ہے۔"],
["mc","باہر کے لوگوں سے انگریزی میں: \"میں نے 2019 میں گریجویشن کی\"","I graduated in 2019.","I passed out in 2019.","I was passed out in 2019.","I graduated on 2019.","باہر passed out کا مطلب \"بے ہوش ہو گیا\" ہے؛ تعلیم مکمل ہونے کے لیے graduated۔"],
["mc","\"وہ سگریٹ نہیں پیتا\" کے لیے درست جملہ کون سا ہے؟","He doesn't smoke.","He doesn't drink cigarettes.","He doesn't eat cigarettes.","He isn't smoke.","سگریٹ کے لیے drink نہیں آتا؛ انگریزی میں smoke کہتے ہیں۔"],
["mc","\"یہ بہت مشکل ہے\" کے لیے درست جملہ کون سا ہے؟","It's very difficult.","It's too much difficult.","It's very much difficult.","It's much very difficult.","صفت سے پہلے very آتا ہے؛ too much difficult غلط ہے۔"],
["mc","\"مجھے دوا کھانی ہے\" کے لیے درست جملہ کون سا ہے؟","I need to take my medicine.","I need to eat my medicine.","I need to open my medicine.","I need to taking my medicine.","اردو میں دوا \"کھائی\" جاتی ہے؛ انگریزی میں اس کے لیے take آتا ہے۔"],
["or","بجلی چلی گئی ہے","The power is out","light a","\"لائٹ چلی گئی\" کے لیے باہر The power is out کہتے ہیں؛ وہی بجلی جسے سب جانتے ہیں، اس لیے آرٹیکل the۔"],
["or","مجھے ایک تھیلا چاہیے","I need a bag","shopper the","shopper کا مطلب خریدار ہے؛ تھیلے کے لیے bag، اور کوئی ایک تھیلا، اس لیے آرٹیکل a۔"],
["or","مہربانی کر کے بتی جلا دیں","Please turn on the light","open a","بتی کھولی نہیں جاتی: turn on۔ کمرے کی وہی بتی، اس لیے آرٹیکل the۔"],
["or","تم کہاں ٹھہرے ہو؟","Where are you staying","put","Where are you put up پاکستان میں چلتا ہے؛ باہر Where are you staying کہتے ہیں۔"],
["fi","She's my __.","باہر کے لوگوں سے: وہ میری کزن ہے","cousin","cousin sister|sister cousin|real cousin","cousin-sister پاکستان میں چلتا ہے؛ باہر صرف cousin کافی ہے۔"],
["fi","My head __.","میرے سر میں درد ہے","hurts","is paining|pains me|paining","my head is paining کی جگہ My head hurts کہتے ہیں۔"],
["fi","I'm going to __ an exam tomorrow.","میں کل امتحان دینے والی ہوں","take","give|eat|open","طالب علم کے لیے take an exam آتا ہے؛ give an exam استاد کے لیے۔"],
["ty","میرے دو کزن ہیں","I have two cousins","الفاظ: have · two · cousin — جمع","cousin","two کے بعد جمع: cousins۔ cousin-brother باہر نہیں بولا جاتا، صرف cousin۔"],
["ty","مجھے کچھ مشورہ چاہیے","I need some advice|I need advice|I want some advice|I'd like some advice","الفاظ: need · advice — ناقابلِ شمار","advices","advice ناقابلِ شمار ہے: advices نہیں بنتا۔"],
["ty","لکھنے کے لیے: مجھے ایک کاپی چاہیے","I need a notebook","الفاظ: need · notebook — آرٹیکل a","copy the","پاکستان میں اسے copy کہتے ہیں، باہر notebook؛ کوئی ایک چاہیے، اس لیے آرٹیکل a۔"],
["ty","باہر کے لوگوں سے: میں شہر سے باہر ہوں","I'm out of town","الفاظ: I'm · out of · town","station","out of station پاکستان میں چلتا ہے؛ باہر out of town کہتے ہیں۔"]]},
];
