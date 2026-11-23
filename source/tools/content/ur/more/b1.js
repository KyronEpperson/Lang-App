/* ur-en stage B1: new lessons. English side shared with ko-en (parity.js) except the ur-only lesson stative-since (deviations); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"اب تک جاری بات: Present Perfect کے ساتھ for اور since", blurb:"جو بات ماضی میں شروع ہوئی اور اب بھی جاری ہے۔ for + مدت، since + شروع کا وقت۔", deck:"اپنا تعارف", body:`
<p>Present Perfect کا دوسرا کام: <b>جو بات ماضی میں شروع ہوئی اور اب تک جاری ہے</b>۔ اردو میں یہ بات "سے" اور حال کے ٹینس سے کہی جاتی ہے: "میں پانچ سال <b>سے</b> کراچی میں رہتا ہوں / رہ رہا ہوں"۔ انگریزی میں یہاں Simple Present یا Present Continuous نہیں آتا، <b>have / has + تیسری فارم</b> آتا ہے۔</p>
{{ex:I've lived in Karachi for five years.|/aɪv ˈlɪvd ɪn kəˈrɑːtʃi fər ˈfaɪv ˈjɪrz/|میں پانچ سال سے کراچی میں رہ رہا ہوں}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|میں 2020 سے یہاں کام کر رہی ہوں}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|میں اسے بہت عرصے سے جانتا ہوں}}
<h3>اردو کا ایک "سے"، انگریزی کے دو لفظ</h3>
<p>"پانچ سال سے" اور "2020 سے" میں اردو ایک ہی "سے" لگاتی ہے۔ انگریزی میں دیکھنا پڑتا ہے کہ بات <b>مدت</b> کی ہے (کتنی دیر سے) یا <b>شروع کے وقت</b> کی (کس وقت سے)۔</p>
<div class="tbl"><table><tr><th>مدت کے ساتھ for</th><th>شروع کے وقت کے ساتھ since</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<p>"سے" کا ایک مطلب from بھی ہے، اس لیے پہلے خانے والی شکلیں پاکستان میں بہت سننے کو ملتی ہیں۔ معیاری انگریزی میں، اور باہر کے سننے والے کے لیے، دوسرے خانے والی شکل درست ہے:</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>I've worked here from two years.</td><td class="k">I've worked here for two years.</td></tr><tr><td>I've worked here since two years.</td><td class="k">I've worked here for two years.</td></tr><tr><td>I am working here since 2020.</td><td class="k">I've worked here since 2020.</td></tr></table></div>
<h3>"کب سے؟" = How long …?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|آپ یہاں کب سے ہیں؟}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|آپ کب سے انگریزی پڑھ رہے ہیں؟}}
<h3>just, already, yet</h3>
<p>یہ تین لفظ بھی Present Perfect کے ساتھ آتے ہیں: just = ابھی ابھی، already = پہلے ہی، yet = اب تک (سوال اور منفی جملے کے آخر میں)۔</p>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|میں نے ابھی ابھی ختم کیا ہے}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|میں یہ پہلے ہی دیکھ چکی ہوں}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|کیا تم نے کھانا کھا لیا؟}}
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>I live here for five years.</td><td class="k">I've lived here for five years.</td></tr><tr><td>I am living here for five years.</td><td class="k">I've lived here for five years.</td></tr></table></div>
<div class="tip">"سے" اور حالت بتانے والے فعل (know, have) کی پوری بات اگلے سبق میں ہے۔</div>`,
check:[["خالی جگہ پُر کریں: I've lived here ___ three years",["since","for","during","from"],1,"three years مدت ہے، اور مدت سے پہلے for آتا ہے۔"],["خالی جگہ پُر کریں: I've worked here ___ 2020",["for","in","since","at"],2,"2020 شروع کا وقت ہے، اور شروع کے وقت سے پہلے since آتا ہے۔"],["انگریزی میں: \"آپ یہاں کب سے ہیں؟\"",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"\"کب سے\" = How long have you + تیسری فارم۔"]],
practice:[
["mc","خالی جگہ پُر کریں: I've known him ___ ten years","for","since","from","during","ten years مدت ہے، اس لیے for؛ یہاں \"سے\" کے لیے from یا since نہیں آتا۔"],
["mc","خالی جگہ پُر کریں: She's lived here ___ 2019","since","for","in","at","2019 شروع کا وقت ہے، اس لیے since۔"],
["mc","انگریزی میں: \"آپ یہاں کب سے ہیں؟\"","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","\"کب سے\" = How long have you + تیسری فارم۔"],
["mc","انگریزی میں: \"میں نے ابھی ابھی ختم کیا ہے\"","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + تیسری فارم۔"],
["mc","انگریزی میں: \"کیا تم نے کھانا کھا لیا؟\"","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","have کے بعد تیسری فارم eaten آتی ہے، اور سوال کے آخر میں yet۔"],
["or","میں پانچ سال سے یہاں رہ رہا ہوں","I've lived here for five years","year since","پانچ سال: اسم جمع میں آئے گا (years)، اور مدت سے پہلے for۔"],
["or","میں وہ فلم پہلے ہی دیکھ چکی ہوں","I've already seen the movie","a saw","وہی فلم جس کا دونوں کو پتا ہے، اس لیے آرٹیکل the۔"],
["or","آپ کب سے انتظار کر رہے ہیں؟","How long have you waited","did","\"کب سے\" = How long have you + تیسری فارم۔"],
["fi","I've worked here __ two years.","میں دو سال سے یہاں کام کر رہا ہوں","for","since|from|during","two years مدت ہے، اس لیے for۔"],
["fi","I've been here __ Monday.","میں پیر سے یہاں ہوں","since","for|at|during","Monday شروع کا وقت ہے، اس لیے since۔"],
["fi","Have you finished __?","کیا آپ نے ختم کر لیا؟","yet|already","ever|never|since","سوال کے آخر میں \"اب تک\" کے لیے yet آتا ہے۔"],
["ty","میں تین سال سے یہاں رہ رہی ہوں","I've lived here for three years|I've been living here for three years","الفاظ: I've lived · here · for · three · year — جمع","year","تین سال: اسم جمع میں آئے گا (years)۔ اردو میں \"تین سال\" میں لفظ نہیں بدلتا، انگریزی میں -s لگتا ہے۔"],
["ty","آپ یہاں کب سے ہیں؟","How long have you been here","الفاظ: how long · have you · been here","are","\"کب سے\" = How long have you + تیسری فارم۔"],
["ty","میں وہ کتاب پہلے ہی پڑھ چکا ہوں","I've already read the book|I've read the book already|I already read the book","الفاظ: already · read · book — آرٹیکل the","a","وہی کتاب جس کا دونوں کو پتا ہے، اس لیے آرٹیکل the۔"]]},
{ id:"stative-since", title:"\"سے\" = since؟ حالت والے فعل اور \"کب سے\"", blurb:"\"میں 2015 سے یہاں رہ رہا ہوں\" = I've lived here since 2015؛ یہاں I am living نہیں آتا۔", deck:"اپنا تعارف", body:`
<p>"میں دو سال سے کراچی میں رہ رہا ہوں"، "میں اسے دس سال سے جانتا ہوں": اردو میں یہ جملے بالکل سیدھے ہیں۔ انگریزی میں ان کے اندر تین پھندے ہیں: غلط فعل پر -ing، غلط ٹینس اور غلط "سے"۔ تینوں پاکستان میں بہت عام ہیں اور یہاں سمجھ بھی لیے جاتے ہیں، مگر باہر کے سننے والے کو کھٹکتے ہیں۔</p>
<h3>1. حالت بتانے والے فعل (stative verbs) پر -ing نہیں لگتا</h3>
<p>کچھ فعل کام نہیں، <b>حالت</b> بتاتے ہیں: know, understand, believe, want, need, like, love, have (= مالک ہونا), belong, mean, seem, remember۔ یہ "ابھی" کی بات میں بھی Simple Present میں رہتے ہیں، چاہے اردو میں "رہا ہوں" آئے ("اب میں سمجھ رہا ہوں")۔</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>I am knowing him.</td><td class="k">I know him.</td></tr><tr><td>She is having a car.</td><td class="k">She has a car.</td></tr><tr><td>I am understanding now.</td><td class="k">I understand now.</td></tr><tr><td>He is wanting tea.</td><td class="k">He wants tea.</td></tr></table></div>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|میں اسے جانتی ہوں}}{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|اس کے پاس ایک گاڑی ہے}}
<p>ایک استثنا: جب have کا مطلب "پاس ہونا" نہ ہو بلکہ کھانا، میٹنگ یا کوئی تجربہ ہو، تو -ing ٹھیک ہے: <b>He is having three meetings today.</b> ✓</p>
{{ex:I'm having lunch.|/aɪm ˈhævɪŋ ˈlʌntʃ/|میں دوپہر کا کھانا کھا رہا ہوں}}
<h3>2. "سے" کی تین انگریزی شکلیں</h3>
<div class="tbl"><table><tr><th>اردو</th><th>انگریزی</th></tr><tr><td>"2015 سے" (شروع کا وقت)</td><td class="k">since 2015</td></tr><tr><td>"دو سال سے" (مدت)</td><td class="k">for two years</td></tr><tr><td>"2015 سے 2020 تک" (شروع اور آخر)</td><td class="k">from 2015 to 2020</td></tr></table></div>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>from two years</td><td class="k">for two years</td></tr><tr><td>since two years</td><td class="k">for two years</td></tr></table></div>
<h3>3. "سے" + "رہا ہے" = Present Perfect (Continuous)</h3>
<p>جو بات ماضی میں شروع ہو کر اب تک جاری ہے، وہ Present Continuous میں نہیں آتی۔ حالت ہو تو <b>Present Perfect</b> (have / has + تیسری فارم)، چلتا ہوا کام ہو تو <b>Present Perfect Continuous</b> (have / has been + -ing)۔</p>
{{ex:I've known him for ten years.|/aɪv ˈnoʊn hɪm fər ˈten ˈjɪrz/|میں اسے دس سال سے جانتا ہوں}}{{ex:I've lived here since 2015.|/aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd ˌfɪfˈtiːn/|میں 2015 سے یہاں رہ رہی ہوں}}{{ex:I've been waiting for an hour.|/aɪv bɪn ˈweɪtɪŋ fər ən ˈaʊər/|میں ایک گھنٹے سے انتظار کر رہا ہوں}}{{ex:It's been raining for two days.|/ɪts bɪn ˈreɪnɪŋ fər ˈtuː ˈdeɪz/|دو دن سے بارش ہو رہی ہے}}
<p>live اور work کے ساتھ دونوں شکلیں چلتی ہیں: <b>I've lived here since 2015.</b> = <b>I've been living here since 2015.</b> مگر know اور have جیسے حالت والے فعل کے ساتھ been + -ing نہیں آتا: <b>I've been knowing him.</b> ✗</p>
<h3>4. "کب سے؟" = How long …?</h3>
{{ex:How long have you been waiting?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈweɪtɪŋ/|آپ کب سے انتظار کر رہے ہیں؟}}{{ex:How long have you known her?|/ˈhaʊ ˈlɔːŋ həv ju ˈnoʊn hər/|آپ اسے کب سے جانتے ہیں؟}}
<p><b>Since when you are waiting?</b> ✗ انگریزی میں Since when …? حیرت یا طنز جیسا سنائی دیتا ہے۔ عام سوال How long سے بنتا ہے۔</p>
<div class="tip">ایک سطر میں: "سے" + مدت = for؛ "سے" + شروع کا وقت = since؛ "سے" + "رہا ہوں" = have / has + تیسری فارم یا have / has been + -ing۔ اور know, have (= مالک ہونا), understand پر -ing کبھی نہیں لگتا۔</div>`,
check:[["انگریزی میں: \"میں اسے برسوں سے جانتا ہوں\"",["I'm knowing him for years.","I've known him for years.","I know him since years.","I've been knowing him for years."],1,"know حالت بتانے والا فعل ہے، اس لیے -ing نہیں لگتا؛ \"سے\" + مدت کے لیے Present Perfect + for۔"],["انگریزی میں: \"دو سال سے\"",["from two years","since two years","before two years","for two years"],3,"مدت کے ساتھ for آتا ہے؛ from اور since یہاں غلط ہیں۔"],["خالی جگہ پُر کریں: It ___ raining for two days",["has been","is","was being","have"],0,"دو دن سے جاری بارش: has been + -ing۔"]],
practice:[
["mc","خالی جگہ پُر کریں: He ___ a car (اس کے پاس ایک گاڑی ہے)","has","is having","have","is has","مالک ہونے والا have حالت بتاتا ہے: has آئے گا، is having نہیں۔"],
["mc","انگریزی میں: \"اب میری سمجھ میں آ گیا\"","I understand now.","I am understanding now.","I'm understand now.","I understanding now.","understand حالت بتانے والا فعل ہے: ابھی کی بات بھی Simple Present میں آتی ہے۔"],
["mc","انگریزی میں: \"میں 2015 سے یہاں رہ رہا ہوں\"","I've lived here since 2015.","I am living here since 2015.","I live here from 2015.","I've lived here for 2015.","2015 سے = since 2015، اور \"سے\" + \"رہ رہا ہوں\" = Present Perfect۔"],
["mc","خالی جگہ پُر کریں: I've had this phone ___ March","since","for","from","during","\"مارچ سے\": شروع کا مہینہ ہے، اس لیے since۔"],
["mc","انگریزی میں: \"آپ کب سے انتظار کر رہے ہیں؟\"","How long have you been waiting?","Since when you are waiting?","How long are you waiting?","From when have you waited?","\"کب سے\" = How long have you been + -ing۔"],
["or","میں اسے پانچ سال سے جانتی ہوں","I've known her for five years","year since","پانچ سال: years جمع میں آئے گا؛ مدت کے ساتھ for، اور know پر -ing نہیں لگتا۔"],
["or","ہمارے پاس 2020 سے ایک گاڑی ہے","We've had a car since 2020","the for","ایک گاڑی، پہلی بار ذکر: آرٹیکل a؛ شروع کا سال ہو تو since۔"],
["or","وہ لوگ دو گھنٹے سے انتظار کر رہے ہیں","They've been waiting for two hours","hour","دو گھنٹے: hours جمع میں آئے گا؛ چلتا ہوا کام + مدت = have been + -ing۔"],
["or","میرا ایک سوال ہے","I have a question","the doubt","ایک سوال، پہلی بار ذکر: آرٹیکل a۔ یہاں have حالت بتاتا ہے، اس لیے -ing نہیں لگتا۔ doubt کا مطلب شک ہے، سوال نہیں۔"],
["fi","She __ my friend since school.","وہ سکول کے زمانے سے میری دوست ہے","has been","is|was|is being","\"سے\" + اب تک = Present Perfect: has been آئے گا، is نہیں۔"],
["fi","I've worked here __ ten years.","میں دس سال سے یہاں کام کر رہا ہوں","for","since|from|during","\"دس سال سے\": یہ مدت ہے، اس لیے for۔"],
["fi","We've been __ for an hour.","ہم ایک گھنٹے سے انتظار کر رہے ہیں","waiting","wait|waited|waits","have been کے بعد -ing والی شکل آتی ہے۔"],
["ty","میرے پاس یہ فون تین سال سے ہے","I've had this phone for three years","الفاظ: had · phone · for · three · year — جمع","year","تین سال: years جمع میں آئے گا؛ مالک ہونے والا have حالت بتاتا ہے: I've had، اس پر -ing نہیں لگتا۔"],
["ty","ہم دس سال سے دوست ہیں","We've been friends for ten years","الفاظ: been · friends · for · ten · year — جمع","year","دس سال: years جمع میں آئے گا؛ \"سے\" + اب تک = Present Perfect: We've been آئے گا، We are نہیں۔"],
["ty","میں 2015 سے یہاں رہ رہا ہوں","I've lived here since 2015|I've been living here since 2015","الفاظ: lived · here · since · 2015","am","\"2015 سے\" = since 2015؛ اردو میں \"رہ رہا ہوں\" ہے مگر انگریزی میں Present Perfect آتا ہے: I've lived یا I've been living۔"],
["ty","آپ کب سے انتظار کر رہے ہیں؟","How long have you been waiting","الفاظ: how long · have you · been · waiting","since","\"کب سے\" = How long سے بنتا ہے؛ یہاں Since when نہیں آتا۔"]]},
{ id:"narrative", title:"کہانی سنانے کے ٹینس: Simple Past, Past Continuous, Past Perfect", blurb:"پس منظر Past Continuous میں، واقعہ Simple Past میں، اور جو اس سے بھی پہلے ہو چکا تھا وہ had + تیسری فارم میں۔", deck:"فلمیں، ڈرامے اور سلینگ", body:`
<p>گزری ہوئی بات سناتے وقت تین ٹینس مل کر کام کرتے ہیں، اور ہر ایک کا کام الگ ہے۔</p>
<div class="tbl"><table><tr><th>ٹینس</th><th>کام</th><th>مثال</th></tr><tr><td class="k">Past Continuous</td><td>پس منظر، جو کام چل رہا تھا</td><td>I was walking home.</td></tr><tr><td class="k">Simple Past</td><td>جو واقعہ ہوا</td><td>I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>جو اس سے بھی پہلے ہو چکا تھا</td><td>He had moved to Lahore.</td></tr></table></div>
<h3>پس منظر + واقعہ</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|میں پیدل گھر جا رہا تھا کہ ایک پرانا دوست نظر آیا}}
<h3>Past Perfect: had + تیسری فارم</h3>
<p>ماضی کے کسی لمحے سے <b>بھی پہلے</b> جو بات ہو چکی تھی۔ اردو کا "چکا تھا / چکی تھی" یہی کام کرتا ہے: "فلم شروع ہو چکی تھی"۔</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|جب میں پہنچی تو فلم شروع ہو چکی تھی}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|میں نے اس سے پہلے کبھی برف نہیں دیکھی تھی}}
<p>اردو میں اکیلے واقعے کے ساتھ بھی "تھا" لگ جاتا ہے ("میں کل بازار گیا تھا")۔ اسے had gone نہ بنائیں: واقعہ ایک ہی ہو تو Simple Past آتا ہے (<b>I went to the market yesterday.</b>)۔ had تب آتا ہے جب ماضی کی دو باتوں میں سے ایک پہلے ہو چکی ہو۔</p>
<h3>ترتیب بتانے والے لفظ</h3>
<p>first (پہلے)، then (پھر)، after that (اس کے بعد)، finally (آخر میں) سے کہانی آگے بڑھتی ہے۔</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|پہلے ہم نے کھانا کھایا۔ پھر ہم نے فلم دیکھی}}
<div class="tip">then (پھر) اور than (مقابلے والا "سے") سننے میں ملتے جلتے ہیں مگر الگ لفظ ہیں۔ کہانی میں <b>then</b> آتا ہے۔</div>`,
check:[["خالی جگہ پُر کریں: When I arrived, the train ___ already left",["has","was","had","did"],2,"جو بات پہلے ہو چکی تھی: had + تیسری فارم۔"],["خالی جگہ پُر کریں: I ___ walking home when it started to rain",["was","had","did","have"],0,"جو کام چل رہا تھا (پس منظر) وہ Past Continuous میں آتا ہے۔"],["کس جملے میں وہ بات ہے جو پہلے ہی ہو چکی تھی؟",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + تیسری فارم Past Perfect ہے۔"]],
practice:[
["mc","خالی جگہ پُر کریں: When I got there, the movie ___ already started","had","has","was","did","جو بات پہلے ہو چکی تھی: had + تیسری فارم۔"],
["mc","خالی جگہ پُر کریں: I ___ cooking when the phone rang","was","had","did","have","جو کام چل رہا تھا وہ Past Continuous میں آتا ہے: was + -ing۔"],
["mc","انگریزی میں: \"جب میں پہنچا تو ٹرین جا چکی تھی\"","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","جو بات پہلے ہو چکی تھی اس کے لیے had + تیسری فارم۔"],
["mc","کہانی آگے بڑھانے والا \"پھر\" انگریزی میں کون سا لفظ ہے؟","then","than","that","them","then = پھر؛ than مقابلے کے لیے آتا ہے (older than)۔"],
["mc","انگریزی میں: \"میں نے اس سے پہلے کبھی برف نہیں دیکھی تھی\"","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + تیسری فارم۔"],
["or","ٹرین پہلے ہی جا چکی تھی","The train had already left","a has","وہی ٹرین جو پکڑنی تھی، اس لیے آرٹیکل the۔"],
["or","مجھے ایک پرانا دوست ملا","I met an old friend","a friends","old واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an۔"],
["or","میں پیدل گھر جا رہا تھا","I was walking home","had","پس منظر Past Continuous میں آتا ہے۔"],
["fi","I was sleeping __ you called.","جب تم نے فون کیا تو میں سو رہی تھی","when","than|so|had","\"جب\" کے لیے when آتا ہے۔"],
["fi","The bus had already __.","بس پہلے ہی جا چکی تھی","left|gone","leave|leaving|leaves","had کے بعد تیسری فارم آتی ہے۔"],
["fi","First we ate. __ we watched a movie.","پہلے ہم نے کھانا کھایا۔ پھر ہم نے فلم دیکھی","Then|After that|Next","Than|Because|When","\"پھر\" کے لیے then آتا ہے۔"],
["ty","فلم پہلے ہی شروع ہو چکی تھی","The movie had already started|The movie had started already|The movie already started","الفاظ: the movie · had · already · started — آرٹیکل the","a","وہی فلم جو دیکھنی تھی، اس لیے آرٹیکل the۔"],
["ty","مجھے ایک پرانا دوست ملا","I met an old friend|I saw an old friend|I ran into an old friend","الفاظ: met · old friend — آرٹیکل an","a","old واول کی آواز سے شروع ہوتا ہے، اس لیے آرٹیکل an۔"],
["ty","میں پیدل گھر جا رہی تھی","I was walking home","الفاظ: was · walking · home","had","پس منظر Past Continuous میں بتایا جاتا ہے۔"]]},
{ id:"conditionals", title:"اگر ایسا ہوتا: خیالی بات اور پچھتاوا (would, would have)", blurb:"حال کی خیالی بات would سے، گزری ہوئی بات کا پچھتاوا would have سے۔", deck:"جذبات اور ردعمل", body:`
<p>جو بات حقیقت نہیں، صرف خیال ہے، اس کے لیے۔ اردو میں دونوں وقتوں کے لیے ایک ہی شکل چل جاتی ہے: "اگر مجھے پتا <b>ہوتا</b> تو میں <b>آ جاتا</b>" آج کی بات بھی ہو سکتی ہے اور گزرے ہوئے کل کی بھی۔ انگریزی وقت کے حساب سے دو الگ شکلیں بناتی ہے۔</p>
<h3>حال کی خیالی بات (Second Conditional)</h3>
<p><b>If + دوسری فارم، would + پہلی فارم</b>۔ فعل دوسری فارم میں ہے مگر بات <b>اب</b> کی ہے۔</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|اگر میرے پاس وقت ہوتا تو میں سفر کرتا}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|میں تمہاری جگہ ہوتی تو یہ لے لیتی}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|آپ ہوتے تو کیا کرتے؟}}
<h3>گزری ہوئی بات کا الٹ (Third Conditional)</h3>
<p><b>If + had + تیسری فارم، would have + تیسری فارم</b>۔</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|اگر میں نے پڑھا ہوتا تو پاس ہو جاتا}}
<h3>پچھتاوا اور خواہش: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|مجھے فون کر لینا چاہیے تھا}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|کاش میرے پاس اور وقت ہوتا}}
<div class="tbl"><table><tr><th>قسم</th><th>شرط والا حصہ (if)</th><th>نتیجے والا حصہ</th></tr><tr><td>1 (ممکن بات)</td><td class="k">Simple Present</td><td class="k">will</td></tr><tr><td>2 (حال کا الٹ)</td><td class="k">دوسری فارم</td><td class="k">would</td></tr><tr><td>3 (ماضی کا الٹ)</td><td class="k">had + تیسری فارم</td><td class="k">would have + تیسری فارم</td></tr></table></div>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>If I would have time, I would travel.</td><td class="k">If I had time, I would travel.</td></tr></table></div>
<div class="tip">خیالی بات میں I, he, she کے بعد بھی <b>were</b> آتا ہے (<b>If I were you</b>, <b>If I were rich</b>)؛ بول چال میں was بھی سننے کو ملتا ہے۔ اور if والے حصے میں would نہیں آتا۔</div>`,
check:[["خالی جگہ پُر کریں: If I ___ rich, I would travel",["am","were","will be","would be"],1,"حال کی خیالی بات ہو تو if کے بعد دوسری فارم (were) آتی ہے۔"],["خالی جگہ پُر کریں: If I had studied, I ___ passed",["would","will have","would have","had"],2,"ماضی کا الٹ: would have + تیسری فارم۔"],["انگریزی میں: \"مجھے فون کر لینا چاہیے تھا\"",["I should have called.","I should called.","I should had call.","I would call should."],0,"پچھتاوے کے لیے should have + تیسری فارم۔"]],
practice:[
["mc","خالی جگہ پُر کریں: If I ___ time, I would help","had","have","will have","would have","حال کی خیالی بات ہو تو if والے حصے میں دوسری فارم آتی ہے۔"],
["mc","انگریزی میں: \"میں تمہاری جگہ ہوتا تو یہ خرید لیتا\"","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd کے ساتھ مشورہ دیا جاتا ہے؛ یہ ایک بندھا ہوا جملہ ہے۔"],
["mc","خالی جگہ پُر کریں: If I had known, I ___ come","would have","would","will have","had","ماضی کا الٹ: would have + تیسری فارم۔"],
["mc","انگریزی میں: \"مجھے فون کر لینا چاہیے تھا\"","I should have called.","I should called.","I should had call.","I must called.","پچھتاوے کے لیے should have + تیسری فارم۔"],
["mc","انگریزی میں: \"آپ ہوتے تو کیا کرتے؟\"","What would you do?","What will you did?","What would you did?","What you would do?","خیالی بات: would + پہلی فارم، اور سوال میں would فاعل سے پہلے آتا ہے۔"],
["or","اگر میرے پاس وقت ہوتا تو میں سفر کرتا","If I had time I'd travel","have will","حال کی خیالی بات: if کے بعد دوسری فارم had، اور نتیجے میں would۔"],
["or","میں ہوتا تو ٹیکسی لے لیتا","I'd take a taxi","the taxis","کوئی بھی ایک ٹیکسی، اس لیے آرٹیکل a۔"],
["or","مجھے ٹکٹ خرید لینا چاہیے تھا","I should have bought a ticket","the buy","ایک ٹکٹ، کوئی خاص نہیں، اس لیے آرٹیکل a۔"],
["fi","If I __ you, I'd go.","میں تمہاری جگہ ہوتی تو چلی جاتی","were|was","am|be|would be","If I were you ایک بندھا ہوا جملہ ہے: خیالی بات میں I کے بعد بھی were آتا ہے (بول چال میں was بھی سننے کو ملتا ہے)۔"],
["fi","I would __ helped.","میں مدد کر دیتا (مگر موقع نکل گیا)","have","had|has|having","would have + تیسری فارم۔"],
["fi","I wish I __ more time.","کاش میرے پاس اور وقت ہوتا","had","have|would have|will have","I wish کے بعد دوسری فارم آتی ہے۔"],
["ty","میں تمہاری جگہ ہوتا تو چلا جاتا","If I were you I'd go|I'd go if I were you|If I was you I'd go","الفاظ: if I were you · I'd · go","am","If I were you, I'd کے ساتھ مشورہ دیا جاتا ہے۔"],
["ty","کاش میرے پاس ایک گاڑی ہوتی","I wish I had a car","الفاظ: I wish · had · car — آرٹیکل a","the","کوئی بھی ایک گاڑی، اس لیے آرٹیکل a۔"],
["ty","مجھے ٹیکسی لے لینی چاہیے تھی","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","الفاظ: should have · taken · taxi — آرٹیکل a","the","کوئی بھی ایک ٹیکسی، اس لیے آرٹیکل a۔"]]},
{ id:"passive", title:"جب کرنے والا اہم نہ ہو: Passive Voice (be + تیسری فارم)", blurb:"جب یہ بتانا ہو کہ کیا ہوا، یہ نہیں کہ کس نے کیا۔", deck:"دفتر اور ای میل", body:`
<p>اردو کے "چوری ہو گیا"، "بنایا گیا"، "منسوخ کر دی گئی" جیسی بات کے لیے۔ ڈھانچہ: <b>be (am / is / are / was / were) + تیسری فارم</b>۔ یہ تب ٹھیک بیٹھتا ہے جب کرنے والا معلوم نہ ہو یا اہم نہ ہو۔</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|میرا فون چوری ہو گیا}}{{ex:This was made in Pakistan.|/ˈðɪs wəz ˈmeɪd ɪn ˈpækɪstæn/|یہ پاکستان میں بنا ہے}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|میٹنگ منسوخ ہو گئی}}
<h3>حال: جو ہمیشہ ایسے ہی ہوتا ہے</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|یہاں انگریزی بولی جاتی ہے}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|ناشتہ 7 بجے دیا جاتا ہے}}
<h3>کرنے والا بتانا ہو تو by</h3>
{{ex:This book was written by a Pakistani writer.|/ˈðɪs ˈbʊk wəz ˈrɪtn baɪ ə ˌpækɪˈstæni ˈraɪtər/|یہ کتاب ایک پاکستانی مصنف نے لکھی ہے}}
<h3>Active Voice اور Passive Voice</h3>
<div class="tbl"><table><tr><th>Active Voice</th><th>Passive Voice</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<p>دفتری اردو ("مطلع کیا جاتا ہے کہ …") کی طرح پاکستان کی دفتری انگریزی میں بھی Passive Voice بہت آتا ہے: <b>It is informed that the office will remain closed on Friday.</b> باہر ایسی بات عام طور پر سیدھی کہی جاتی ہے: <b>The office will be closed on Friday.</b> جب کرنے والا معلوم ہو اور اہم بھی ہو تو Active Voice میں کہیں۔</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>My phone stolen.</td><td class="k">My phone was stolen.</td></tr></table></div>
<div class="tip">عام غلطی یہ ہے کہ be چھوٹ جاتا ہے۔ Passive Voice میں be (am / is / are / was / were) ضرور لگائیں۔</div>`,
check:[["خالی جگہ پُر کریں: My bag ___ stolen yesterday",["is","was","did","has"],1,"کل کی بات ہے، اس لیے was + تیسری فارم۔"],["خالی جگہ پُر کریں: This phone ___ made in Korea",["was","did","has","does"],0,"Passive Voice میں be (یہاں was) + تیسری فارم آتی ہے۔"],["انگریزی میں: \"میٹنگ منسوخ ہو گئی\"",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be (یہاں was) + تیسری فارم canceled۔"]],
practice:[
["mc","خالی جگہ پُر کریں: My phone ___ stolen","was","did","has","is steal","Passive Voice میں be + تیسری فارم آتی ہے۔"],
["mc","انگریزی میں: \"یہ کوریا میں بنا تھا\"","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be (یہاں was) + تیسری فارم made۔"],
["mc","انگریزی میں (Passive Voice): \"یہاں انگریزی بولی جاتی ہے\"","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","ہمیشہ ہونے والی بات: is + تیسری فارم۔"],
["mc","انگریزی میں: \"میٹنگ منسوخ ہو گئی\"","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","be (یہاں was) + تیسری فارم۔"],
["mc","انگریزی میں: \"ناشتہ 7 بجے دیا جاتا ہے\"","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","کھانے کے وقت کے نام (breakfast) سے پہلے آرٹیکل نہیں لگتا، اور is + تیسری فارم۔"],
["or","میرا بیگ چوری ہو گیا","My bag was stolen","stole","be کے بعد تیسری فارم stolen آتی ہے۔"],
["or","میٹنگ منسوخ ہو گئی","The meeting was canceled","A meetings","وہی میٹنگ جس کا دونوں کو پتا ہے، اس لیے آرٹیکل the۔"],
["or","کھڑکی ٹوٹی ہوئی تھی","The window was broken","a windows","یہیں کی وہی کھڑکی، اس لیے آرٹیکل the۔"],
["fi","This was __ in Korea.","یہ کوریا میں بنا تھا","made","make|making|makes","be کے بعد تیسری فارم آتی ہے۔"],
["fi","The room __ cleaned every day.","کمرہ روز صاف کیا جاتا ہے","is|gets","does|has|did","ہمیشہ ہونے والی بات: is + تیسری فارم۔"],
["fi","It was written __ Han Kang.","یہ ہان کانگ نے لکھی ہے","by","from|of|with","کرنے والے کا نام by کے بعد آتا ہے۔"],
["ty","میرا فون چوری ہو گیا (was کے ساتھ)","My phone was stolen|My phone got stolen","الفاظ: my phone · was · stolen","stole","be + تیسری فارم stolen۔"],
["ty","وہ میٹنگ منسوخ ہو گئی (was کے ساتھ)","The meeting was canceled|The meeting was cancelled|The meeting got canceled","الفاظ: the meeting · was · canceled — آرٹیکل the","a","وہی میٹنگ جس کا دونوں کو پتا ہے، اس لیے آرٹیکل the۔"],
["ty","دروازے کو تالا لگا ہوا تھا","The door was locked","الفاظ: the door · was · locked — آرٹیکل the","a","یہیں کا وہی دروازہ، اس لیے آرٹیکل the۔"]]},
{ id:"reported", title:"کسی کی بات آگے بتانا: Indirect Speech (said, told, asked)", blurb:"بات آگے بتاتے وقت ضمیر بدلتا ہے اور ٹینس ایک قدم پیچھے جاتا ہے؛ tell کے بعد سننے والا آتا ہے۔", deck:"کال اور چیٹ کی شارٹ فارم", body:`
<p>کسی کی کہی ہوئی بات آگے بتانے کا طریقہ؛ سکول میں اسے Narration یا Direct / Indirect Speech کہتے ہیں۔ اردو میں "کہ" کے بعد بولنے والے کے اپنے الفاظ ویسے ہی رہتے ہیں: "اس نے کہا کہ <b>میں</b> تھکی ہوئی <b>ہوں</b>"۔ انگریزی میں دو چیزیں بدلتی ہیں: <b>ضمیر</b> (I کی جگہ she) اور <b>ٹینس</b>، جو ایک قدم ماضی کی طرف جاتا ہے (am کی جگہ was)۔</p>
<div class="tbl"><table><tr><th>اصل بات</th><th>آگے بتاتے وقت</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|اس نے کہا کہ وہ تھکی ہوئی ہے}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|اس نے کہا کہ وہ آئے گا}}
<p>اگر اردو کی طرح لفظ بہ لفظ کہہ دیں (<b>He said that I am tired.</b>) تو سننے والا سمجھے گا کہ تھکے ہوئے آپ خود ہیں، وہ نہیں۔</p>
<h3>say اور tell</h3>
<p><b>tell</b> کے بعد سننے والا ضرور آتا ہے (told me)؛ <b>say</b> کے بعد نہیں آتا۔ remind بھی tell کی طرح ہے: اس کے بعد بھی سننے والا آتا ہے (reminded the students)۔</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|اس نے مجھے بتایا کہ وہ مصروف ہے}}
<h3>سوال آگے بتانا</h3>
<p>ہاں / نہیں والے سوال کے لیے <b>if</b> آتا ہے، اور سوالیہ لفظ والا سوال اسی سوالیہ لفظ سے شروع ہوتا ہے۔ دونوں میں اس کے بعد <b>عام جملے کی ترتیب</b> (فاعل + فعل) رہتی ہے، سوال والی نہیں۔</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|اس نے پوچھا کہ کیا میں ٹھیک ہوں}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|اس نے پوچھا کہ میں کہاں رہتا ہوں}}
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>He said me he was busy.</td><td class="k">He told me he was busy.</td></tr><tr><td>He reminded that the test was on Monday.</td><td class="k">He reminded the students that the test was on Monday.</td></tr><tr><td>He asked where did I live.</td><td class="k">He asked where I lived.</td></tr></table></div>
<div class="tip">دو باتیں یاد رکھیں: tell اور remind کے بعد سننے والا آتا ہے، اور آگے بتائے گئے سوال میں عام جملے کی ترتیب رہتی ہے۔</div>`,
check:[["خالی جگہ پُر کریں: She said she ___ tired",["is being","was","be","will"],1,"بات آگے بتاتے وقت ٹینس ایک قدم ماضی کی طرف جاتا ہے: am کی جگہ was۔"],["خالی جگہ پُر کریں: He ___ me he would come",["said","say","told","tell to"],2,"سننے والا (me) موجود ہو تو told آتا ہے۔"],["انگریزی میں: \"اس نے پوچھا کہ میں کہاں رہتا ہوں\"",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"آگے بتائے گئے سوال میں عام جملے کی ترتیب رہتی ہے: where I lived۔"]],
practice:[
["mc","خالی جگہ پُر کریں: She said she ___ busy","was","is being","be","were being","بات آگے بتاتے وقت ٹینس ایک قدم ماضی کی طرف جاتا ہے۔"],
["mc","خالی جگہ پُر کریں: He ___ me he was late","told","said","say","tells to","سننے والا (me) موجود ہو تو told آتا ہے۔"],
["mc","انگریزی میں: \"اس نے کہا کہ وہ آئے گا\"","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will بدل کر would ہو جاتا ہے۔"],
["mc","انگریزی میں: \"اس نے پوچھا کہ کیا میں ٹھیک ہوں\"","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","ہاں / نہیں والا سوال if سے آگے بتایا جاتا ہے۔"],
["mc","انگریزی میں: \"اس نے پوچھا کہ میں کہاں رہتا ہوں\"","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","آگے بتائے گئے سوال میں عام جملے کی ترتیب رہتی ہے۔"],
["or","اس نے کہا کہ وہ تھکی ہوئی ہے","She said she was tired","told","سننے والا نہیں بتایا گیا، اس لیے said۔"],
["or","اس نے کہا کہ اس نے ایک گاڑی خریدی ہے","He said he bought a car","the cars","ایک گاڑی، پہلی بار ذکر: آرٹیکل a۔"],
["or","اس نے کہا کہ اسے وہ کتاب پسند آئی","She said she liked the book","a books","وہی کتاب جس کا دونوں کو پتا ہے، اس لیے آرٹیکل the۔"],
["fi","She __ she was tired.","اس نے کہا کہ وہ تھکی ہوئی ہے","said","told|asked|say","سننے والا نہیں بتایا گیا، اس لیے said۔"],
["fi","He told __ he was busy.","اس نے مجھے بتایا کہ وہ مصروف ہے","me","I|my|to","told کے بعد سننے والا آتا ہے: me۔"],
["fi","She asked __ I was okay.","اس نے پوچھا کہ کیا میں ٹھیک ہوں","if|whether","that|what|did","ہاں / نہیں والا سوال if سے آگے بتایا جاتا ہے۔"],
["ty","اس (لڑکے) نے کہا کہ وہ مصروف ہے","He said he was busy|He said that he was busy|He told me he was busy","الفاظ: he said · he was · busy","is","بات آگے بتاتے وقت ٹینس ایک قدم ماضی کی طرف جاتا ہے: is کی جگہ was۔"],
["ty","اس (لڑکی) نے کہا کہ اس کے پاس ایک گاڑی ہے","She said she had a car|She said that she had a car|She told me she had a car","الفاظ: she said · had · car — آرٹیکل a","the","ایک گاڑی، پہلی بار ذکر: آرٹیکل a۔"],
["ty","اس (لڑکے) نے کہا کہ اس نے وہ فلم دیکھی ہے","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","الفاظ: he said · saw · movie — آرٹیکل the","a","وہی فلم جس کا دونوں کو پتا ہے، اس لیے آرٹیکل the۔"]]},
];
