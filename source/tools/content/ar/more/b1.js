/* ar-en stage B1: new lessons. English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"المضارع التام 2: for و since والاستمرار حتى الآن", blurb:"أمر بدأ في الماضي وما زال مستمرا: for مع المدة، و since مع نقطة البداية.", deck:"التعريف بالنفس", body:`
<p>هذا هو الاستعمال الثاني <b>للمضارع التام (Present Perfect)</b>: أمر بدأ في الماضي و<b>ما زال مستمرا</b> حتى الآن. نقول في العربية "أسكن هنا منذ ثلاث سنوات" بالمضارع، فيترجمها كثيرون حرفيا: <b>I live here since three years.</b> ✗ والصواب: <b>I've lived here for three years.</b> ✓</p>
{{ex:I've lived in Dubai for five years.|/aɪv ˈlɪvd ɪn ˌduːˈbaɪ fər ˈfaɪv ˈjɪrz/|أعيش في دبي منذ خمس سنوات}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|أعمل هنا منذ عام 2020}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|أعرفها منذ زمن طويل}}
<h3>كلمة "منذ" لها مقابلان: for و since</h3>
<p>إذا جاءت بعد "منذ" مدة (ثلاث سنوات، ساعتان) نقول <b>for</b>، وإذا جاءت نقطة بداية (عام 2020، يوم الاثنين) نقول <b>since</b>.</p>
<div class="tbl"><table><tr><th>مع المدة: for</th><th>مع نقطة البداية: since</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>السؤال عن المدة مع How long</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|منذ متى وأنت هنا؟}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|منذ متى تدرس الإنجليزية؟}}
<h3>الكلمات just و already و yet</h3>
<p>تقترب "لقد" في العربية من just و already: "لقد انتهيت للتو". أما yet فتأتي في آخر السؤال والنفي.</p>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|انتهيت للتو}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|لقد شاهدته بالفعل}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|هل أكلت؟}}
<div class="tip">الخطأ الأشهر: استخدام المضارع البسيط مع المدة. <b>I live here for five years.</b> ✗ والصواب: <b>I've lived here for five years.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: I've lived here ___ three years",["since","for","during","from"],1,"قبل المدة نستخدم for"],["الكلمة المناسبة للفراغ: I've worked here ___ 2020",["for","in","since","at"],2,"قبل نقطة البداية نستخدم since"],["بالإنجليزية: \"منذ متى وأنت هنا؟\"",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"للسؤال عن المدة: How long have you ثم التصريف الثالث"]],
practice:[
["mc","الكلمة المناسبة للفراغ: I've known him ___ ten years","for","since","from","during","قبل المدة نستخدم for"],
["mc","الكلمة المناسبة للفراغ: She's lived here ___ 2019","since","for","in","at","قبل نقطة البداية نستخدم since"],
["mc","بالإنجليزية: \"منذ متى وأنت هنا؟\"","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","للسؤال عن المدة: How long have you ثم التصريف الثالث"],
["mc","بالإنجليزية: \"انتهيت للتو\"","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","نقول have ثم just ثم التصريف الثالث"],
["mc","بالإنجليزية: \"هل أكلت؟\" (حتى الآن)","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","في السؤال نضع yet في آخر الجملة، وبعد have التصريف الثالث"],
["or","أعيش هنا منذ خمس سنوات","I've lived here for five years","year since","بعد five صيغة الجمع years، وقبل المدة for"],
["or","شاهدت الفيلم بالفعل","I've already seen the movie","a saw","الفيلم المعروف لنا نحن الاثنين: أداة التعريف the"],
["or","منذ متى وأنت تنتظر؟","How long have you waited","did","للسؤال عن المدة: How long have you ثم التصريف الثالث"],
["fi","I've worked here __ two years.","أعمل هنا منذ سنتين","for","since|from|during","قبل المدة نستخدم for"],
["fi","I've been here __ Monday.","أنا هنا منذ يوم الاثنين","since","for|at|during","قبل نقطة البداية نستخدم since"],
["fi","Have you finished __?","هل انتهيت؟ (حتى الآن)","yet|already","ever|never|since","في السؤال نقول yet في آخر الجملة"],
["ty","أعيش هنا منذ ثلاث سنوات","I've lived here for three years|I've been living here for three years","الكلمات: I've lived · here · for · three · year — صيغة الجمع","year","بعد three صيغة الجمع years، وقبل المدة for"],
["ty","منذ متى وأنت هنا؟","How long have you been here","الكلمات: how long · have you · been here","are","للسؤال عن المدة: How long have you been"],
["ty","قرأت الكتاب بالفعل","I've already read the book|I've read the book already|I already read the book","الكلمات: already · read · book — مع أداة التعريف","a","الكتاب المعروف لنا نحن الاثنين: أداة التعريف the"]]},
{ id:"narrative", title:"أزمنة القصة: الماضي البسيط والمستمر والتام", blurb:"الخلفية بالماضي المستمر، والحدث بالماضي البسيط، وما سبقه بالماضي التام.", deck:"الأفلام والمسلسلات والعامية", body:`
<p>عندما نحكي قصة في الماضي نجمع ثلاثة أزمنة، ولكل منها دور. العربية تعبر عن ترتيب الأحداث بكلمات مثل "كان" و"قد" و"قبل ذلك" وبالسياق، أما الإنجليزية فتعبر عنه بصيغة الفعل نفسها.</p>
<div class="tbl"><table><tr><th>الزمن</th><th>دوره</th><th>مثال</th></tr><tr><td>الماضي المستمر</td><td>الخلفية: ما كان يحدث</td><td class="k">I was walking home.</td></tr><tr><td>الماضي البسيط</td><td>الحدث نفسه</td><td class="k">I saw an old friend.</td></tr><tr><td>الماضي التام</td><td>ما حدث قبل ذلك</td><td class="k">He had moved to Cairo.</td></tr></table></div>
<h3>الخلفية والحدث</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|كنت أمشي إلى البيت عندما رأيت صديقا قديما}}
<h3>الماضي التام: had + التصريف الثالث</h3>
<p>نستخدم <b>الماضي التام (Past Perfect)</b> لحدث وقع <b>قبل</b> حدث آخر في الماضي، وهو يقابل "كان قد" في العربية: "عندما وصلت، كان الفيلم قد بدأ".</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|عندما وصلت، كان الفيلم قد بدأ}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|لم أكن قد رأيت الثلج من قبل}}
<h3>كلمات الترتيب</h3>
<p>نربط أحداث القصة بكلمات مثل first (أولا) و then (ثم) و after that (بعد ذلك) و finally (أخيرا).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|تناولنا العشاء أولا، ثم شاهدنا فيلما}}
<p>في العربية نصل الجمل بالواو في سلسلة طويلة: "وذهبنا وأكلنا وشاهدنا…". أما في الإنجليزية فنقسم القصة إلى جمل قصيرة تنتهي كل منها بنقطة، بدلا من سلسلة طويلة من and.</p>
<div class="tip">الكلمتان then (ثم) و than (من، في المقارنة) متقاربتان في النطق، لكنهما مختلفتان. في القصة نستخدم <b>then</b>.</div>`,
check:[["الكلمة المناسبة للفراغ: When I arrived, the train ___ already left",["has","was","had","did"],2,"الحدث الأسبق يأتي بالماضي التام: had ثم التصريف الثالث"],["الكلمة المناسبة للفراغ: I ___ walking home when it started to rain",["was","had","did","have"],0,"الخلفية المستمرة بالماضي المستمر: was ثم صيغة -ing"],["الجملة التي تعبر عن حدث وقع قبل حدث آخر في الماضي:",["I was eating.","I ate.","I eat.","I had eaten."],3,"الماضي التام had eaten يدل على الحدث الأسبق"]],
practice:[
["mc","الكلمة المناسبة للفراغ: When I got there, the movie ___ already started","had","has","was","did","الحدث الأسبق: had ثم التصريف الثالث"],
["mc","الكلمة المناسبة للفراغ: I ___ cooking when the phone rang","was","had","did","have","الحدث المستمر بالماضي المستمر: was ثم صيغة -ing"],
["mc","بالإنجليزية: \"عندما وصلت، كان القطار قد غادر\"","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","الحدث الأسبق بالماضي التام: had left"],
["mc","في ربط أحداث القصة، كلمة \"ثم\":","then","than","that","them","معنى then \"ثم\"، ومعنى than \"من\" في المقارنة"],
["mc","بالإنجليزية: \"لم أكن قد رأيت الثلج من قبل\"","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","نقول had ثم never ثم التصريف الثالث"],
["or","كان القطار قد غادر","The train had already left","a has","القطار الذي كنا نريد ركوبه معروف: أداة التعريف the"],
["or","قابلت صديقا قديما","I met an old friend","a friends","كلمة old تبدأ بصوت متحرك: أداة التنكير an، والصديق واحد بالمفرد"],
["or","كنت أمشي إلى البيت","I was walking home","had","الخلفية بالماضي المستمر"],
["fi","I was sleeping __ you called.","كنت نائما عندما اتصلت","when","than|so|had","كلمة \"عندما\" هي when"],
["fi","The bus had already __.","كانت الحافلة قد غادرت","left|gone","leave|leaving|leaves","بعد had يأتي التصريف الثالث"],
["fi","First we ate. __ we watched a movie.","أكلنا أولا، ثم شاهدنا فيلما","Then|After that|Next","Than|Because|When","كلمة \"ثم\" هي then"],
["ty","كان الفيلم قد بدأ بالفعل","The movie had already started|The movie had started already|The movie already started","الكلمات: the movie · had · already · started — مع أداة التعريف","a","الفيلم الذي كنا سنشاهده معروف: أداة التعريف the"],
["ty","قابلت صديقا قديما","I met an old friend|I saw an old friend|I ran into an old friend","الكلمات: met · old friend — مع أداة التنكير","a","كلمة old تبدأ بصوت متحرك: أداة التنكير an"],
["ty","كنت أمشي إلى البيت","I was walking home","الكلمات: was · walking · home","had","الخلفية بالماضي المستمر، وكلمة home بلا حرف جر"]]},
{ id:"conditionals", title:"الجملة الشرطية (النوعان الثاني والثالث): الافتراض والندم", blurb:"نقول would لعكس الواقع الآن، و would have للندم على ما فات.", deck:"المشاعر وردود الفعل", body:`
<p>نستخدم هذه الجمل لموقف غير حقيقي أو متخيل، وتقابلها في العربية "لو": "لو كان عندي وقت لسافرت"، "لو درست لنجحت". وفي الإنجليزية نرجع الفعل خطوة إلى الماضي.</p>
<h3>النوع الثاني: عكس الواقع الآن</h3>
<p><b>If + الماضي البسيط، would + التصريف الأول</b>. الفعل بصيغة الماضي، لكن الكلام عن <b>الحاضر</b>.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|لو كان عندي وقت لسافرت (لكن ليس عندي)}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|لو كنت مكانك لقبلته}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|ماذا كنت ستفعل؟}}
<h3>النوع الثالث: عكس ما حدث في الماضي</h3>
<p><b>If + had + التصريف الثالث، would have + التصريف الثالث</b>.</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|لو درست لنجحت}}
<h3>الندم: should have و I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|كان ينبغي أن أتصل}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|ليت عندي وقتا أكثر}}
<p>تقابل "ليت" في العربية عبارة I wish، ويأتي بعدها الفعل بصيغة الماضي.</p>
<div class="tbl"><table><tr><th>النوع</th><th>جملة if</th><th>جواب الشرط</th></tr><tr><td>الأول (ممكن الحدوث)</td><td>المضارع البسيط</td><td class="k">will</td></tr><tr><td>الثاني (عكس الحاضر)</td><td>الماضي البسيط</td><td class="k">would</td></tr><tr><td>الثالث (عكس الماضي)</td><td>الماضي التام: had + التصريف الثالث</td><td>صيغة would have + التصريف الثالث</td></tr></table></div>
<div class="tip">عبارة If I were you ثابتة: نقول <b>were</b> حتى مع I، وقد نسمع was في الكلام اليومي.</div>`,
check:[["الكلمة المناسبة للفراغ: If I ___ rich, I would travel",["am","were","will be","would be"],1,"عكس الواقع الآن: بعد if الماضي، ومع I نقول were"],["الكلمة المناسبة للفراغ: If I had studied, I ___ passed",["would","will have","would have","had"],2,"عكس الماضي: would have ثم التصريف الثالث"],["بالإنجليزية: \"كان ينبغي أن أتصل\"",["I should have called.","I should called.","I should had call.","I would call should."],0,"للندم نقول should have ثم التصريف الثالث"]],
practice:[
["mc","الكلمة المناسبة للفراغ: If I ___ time, I would help","had","have","will have","would have","عكس الواقع الآن: بعد if الماضي البسيط"],
["mc","بالإنجليزية: \"لو كنت مكانك لاشتريته\"","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","عبارة If I were you ثابتة، وبعدها I'd"],
["mc","الكلمة المناسبة للفراغ: If I had known, I ___ come","would have","would","will have","had","عكس الماضي: would have ثم التصريف الثالث"],
["mc","بالإنجليزية: \"كان ينبغي أن أتصل\"","I should have called.","I should called.","I should had call.","I must called.","للندم: should have ثم التصريف الثالث"],
["mc","بالإنجليزية: \"ماذا كنت ستفعل؟\" (في موقف متخيل)","What would you do?","What will you did?","What would you did?","What you would do?","للموقف المتخيل: would ثم التصريف الأول"],
["or","لو كان عندي وقت لسافرت","If I had time I'd travel","have will","عكس الواقع الآن: الماضي had ثم would"],
["or","كنت سآخذ سيارة أجرة (لو كنت مكانك)","I'd take a taxi","the taxis","أي سيارة أجرة: أداة التنكير a والمفرد taxi"],
["or","كان ينبغي أن أشتري تذكرة","I should have bought a ticket","the buy","تذكرة واحدة: أداة التنكير a"],
["fi","If I __ you, I'd go.","لو كنت مكانك لذهبت","were|was","am|be|would be","عبارة If I were you ثابتة"],
["fi","I would __ helped.","كنت سأساعد","have","had|has|having","نقول would have ثم التصريف الثالث"],
["fi","I wish I __ more time.","ليت عندي وقتا أكثر","had","have|would have|will have","بعد I wish يأتي الماضي البسيط"],
["ty","لو كنت مكانك لذهبت","If I were you I'd go|I'd go if I were you|If I was you I'd go","الكلمات: if I were you · I'd · go","am","عبارة ثابتة: If I were you ثم I'd"],
["ty","ليت عندي سيارة","I wish I had a car","الكلمات: I wish · had · car — مع أداة التنكير","the","أي سيارة: أداة التنكير a، وبعد I wish الماضي had"],
["ty","كان ينبغي أن آخذ سيارة أجرة","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","الكلمات: should have · taken · taxi — مع أداة التنكير","the","أي سيارة أجرة: أداة التنكير a"]]},
{ id:"passive", title:"المبني للمجهول: فعل الكينونة + التصريف الثالث", blurb:"عندما يهمنا ما حدث أكثر ممن فعله.", deck:"العمل والبريد الإلكتروني", body:`
<p>نكون <b>المبني للمجهول (Passive)</b> من <b>فعل الكينونة + التصريف الثالث</b>. نستخدمه عندما لا نعرف الفاعل، أو عندما لا يهمنا من فعل.</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|تمت سرقة هاتفي}}{{ex:This was made in Egypt.|/ˈðɪs wəz ˈmeɪd ɪn ˈiːdʒɪpt/|هذا مصنوع في مصر}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|تم إلغاء الاجتماع}}
<h3>فعل الكينونة لا يحذف</h3>
<p>المبني للمجهول موجود في العربية، لكنه فعل واحد مثل "سرق" بضم السين، أو "تم" مع المصدر: "تم إلغاء الاجتماع". أما في الإنجليزية فلا بد من فعل الكينونة، وهو الذي يحمل الزمن: is للحاضر و was للماضي. وكثيرا ما نقول في العربية بالمبني للمعلوم "ألغوا الاجتماع" أو "يتحدثون الإنجليزية هنا"، أما الإنجليزية فتفضل هنا المبني للمجهول.</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td class="k">The meeting canceled.</td><td class="k">The meeting was canceled.</td></tr><tr><td class="k">The house built in 1990.</td><td class="k">The house was built in 1990.</td></tr></table></div>
{{ex:This problem must be solved now.|/ˈðɪs ˈprɑːbləm məst bi ˈsɑːlvd ˈnaʊ/|يجب حل هذه المشكلة الآن}}
<h3>الحاضر للأمر الذي يتكرر</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|هنا يتحدثون الإنجليزية}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|يقدم الإفطار في الساعة السابعة}}
<h3>ذكر الفاعل مع by</h3>
{{ex:This book was written by an Egyptian writer.|/ˈðɪs ˈbʊk wəz ˈrɪtn baɪ ən ɪˈdʒɪpʃn ˈraɪtər/|كتب هذا الكتاب كاتب مصري}}
<h3>المبني للمعلوم والمبني للمجهول</h3>
<div class="tbl"><table><tr><th>المبني للمعلوم</th><th>المبني للمجهول</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">الخطأ الأشهر حذف فعل الكينونة: <b>My phone stolen.</b> ✗ والصواب: <b>My phone was stolen.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: My bag ___ stolen yesterday",["is","was","did","has"],1,"المبني للمجهول في الماضي: was ثم التصريف الثالث"],["الكلمة المناسبة للفراغ: This phone ___ made in Korea",["was","did","has","does"],0,"فعل الكينونة was ثم التصريف الثالث made"],["بالإنجليزية: \"تم إلغاء الاجتماع\"",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"لا نحذف فعل الكينونة: was canceled"]],
practice:[
["mc","الكلمة المناسبة للفراغ: My phone ___ stolen","was","did","has","is steal","المبني للمجهول: فعل الكينونة ثم التصريف الثالث"],
["mc","بالإنجليزية: \"هذا مصنوع في كوريا\"","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","فعل الكينونة ثم التصريف الثالث made"],
["mc","بالإنجليزية: \"هنا يتحدثون الإنجليزية\" (بالمبني للمجهول)","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","للأمر الدائم: is ثم التصريف الثالث"],
["mc","بالإنجليزية: \"تم إلغاء الاجتماع\"","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","فعل الكينونة ثم التصريف الثالث"],
["mc","بالإنجليزية: \"يقدم الإفطار في الساعة السابعة\"","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","أسماء الوجبات بلا أداة تعريف، ثم is والتصريف الثالث"],
["or","تمت سرقة حقيبتي","My bag was stolen","stole","بعد فعل الكينونة يأتي التصريف الثالث stolen"],
["or","تم إلغاء الاجتماع","The meeting was canceled","A meetings","الاجتماع المعروف لنا: أداة التعريف the والمفرد meeting"],
["or","انكسرت النافذة","The window was broken","a windows","النافذة الموجودة هنا والمعروفة: أداة التعريف the"],
["fi","This was __ in Korea.","هذا مصنوع في كوريا","made","make|making|makes","بعد فعل الكينونة يأتي التصريف الثالث"],
["fi","The room __ cleaned every day.","تنظف الغرفة كل يوم","is|gets","does|has|did","للأمر الذي يتكرر: is ثم التصريف الثالث"],
["fi","It was written __ Han Kang.","كتبته هان كانغ","by","from|of|with","نذكر الفاعل بعد by"],
["ty","تمت سرقة هاتفي","My phone was stolen|My phone got stolen","الكلمات: my phone · was · stolen","stole","فعل الكينونة ثم التصريف الثالث stolen"],
["ty","تم إلغاء الاجتماع","The meeting was canceled|The meeting was cancelled|The meeting got canceled","الكلمات: the meeting · was · canceled — مع أداة التعريف","a","الاجتماع المعروف لنا: أداة التعريف the"],
["ty","كان الباب مقفلا","The door was locked","الكلمات: the door · was · locked — مع أداة التعريف","a","الباب المعروف هنا: أداة التعريف the، و was قبل locked"]]},
{ id:"reported", title:"الكلام المنقول: نقل كلام الآخرين", blurb:"نرجع الزمن خطوة إلى الماضي، وبعد tell نذكر الشخص.", deck:"الهاتف واختصارات الرسائل", body:`
<p>نستخدم <b>الكلام المنقول (Reported speech)</b> لننقل ما قاله شخص آخر. نقول في العربية "قالت إنها متعبة" بالزمن نفسه الذي قيل به الكلام. أما الإنجليزية فترجع زمن الكلام المنقول <b>خطوة إلى الماضي</b>.</p>
<div class="tbl"><table><tr><th>الكلام الأصلي</th><th>الكلام المنقول</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|قالت إنها متعبة}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|قال إنه سيأتي}}
<h3>الفرق بين say و tell</h3>
<p>بعد <b>tell</b> لا بد من ذكر الشخص الذي نكلمه، أما <b>say</b> فلا يأتي بعدها الشخص مباشرة (نقول say to me). ونحن نقول في العربية "قال لي"، فيترجمها البعض <b>He said me</b> ✗ والصواب: <b>He told me</b> ✓</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|قال لي إنه مشغول}}
<h3>نقل السؤال</h3>
<p>سؤال نعم أو لا ننقله مع <b>if</b>، وسؤال كلمة الاستفهام نبقي فيه كلمة الاستفهام. وفي الحالتين نرتب الكلمات <b>ترتيب الجملة الخبرية</b>: الفاعل ثم الفعل.</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|سألتني إن كنت بخير}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|سألني أين أسكن}}
<p>وكذلك: <b>I don't know where does she live.</b> ✗ والصواب: <b>I don't know where she lives.</b> ✓</p>
<div class="tip">الخطأ الأشهر: <b>He said me …</b> ✗ والصواب: <b>He told me …</b> ✓ وكذلك <b>He asked where did I live.</b> ✗ والصواب: <b>He asked where I lived.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: She said she ___ tired",["is being","was","be","will"],1,"في الكلام المنقول نرجع الزمن إلى الماضي: was"],["الكلمة المناسبة للفراغ: He ___ me he would come",["said","say","told","tell to"],2,"بعد told يأتي الشخص مباشرة: told me"],["بالإنجليزية: \"سألني أين أسكن\"",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"السؤال المنقول بترتيب الجملة الخبرية: where I lived"]],
practice:[
["mc","الكلمة المناسبة للفراغ: She said she ___ busy","was","is being","be","were being","في الكلام المنقول نرجع الزمن إلى الماضي"],
["mc","الكلمة المناسبة للفراغ: He ___ me he was late","told","said","say","tells to","إذا ذكرنا الشخص بعد الفعل مباشرة نستخدم told"],
["mc","بالإنجليزية: \"قال إنه سيأتي\"","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","تتحول will إلى would في الكلام المنقول"],
["mc","بالإنجليزية: \"سألتني إن كنت بخير\"","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","سؤال نعم أو لا ننقله مع if"],
["mc","بالإنجليزية: \"سألني أين أسكن\"","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","السؤال المنقول بترتيب الجملة الخبرية"],
["or","قالت إنها متعبة","She said she was tired","told","لا يوجد شخص بعد الفعل، فنستخدم said"],
["or","قال إنه اشترى سيارة","He said he bought a car","the cars","سيارة نذكرها أول مرة: أداة التنكير a والمفرد car"],
["or","قالت إن الكتاب أعجبها","She said she liked the book","a books","الكتاب المعروف لنا نحن الاثنين: أداة التعريف the"],
["fi","She __ she was tired.","قالت إنها متعبة","said","told|asked|say","لا يوجد شخص بعد الفعل، فنستخدم said"],
["fi","He told __ he was busy.","قال لي إنه مشغول","me","I|my|to","بعد told يأتي الشخص الذي نكلمه"],
["fi","She asked __ I was okay.","سألتني إن كنت بخير","if|whether","that|what|did","سؤال نعم أو لا ننقله مع if"],
["ty","قال إنه مشغول","He said he was busy|He said that he was busy|He told me he was busy","الكلمات: he said · he was · busy","is","في الكلام المنقول نرجع الزمن إلى الماضي: was"],
["ty","قالت إن عندها سيارة","She said she had a car|She said that she had a car|She told me she had a car","الكلمات: she said · had · car — مع أداة التنكير","the","سيارة نذكرها أول مرة: أداة التنكير a"],
["ty","قال إنه شاهد الفيلم","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","الكلمات: he said · saw · movie — مع أداة التعريف","a","الفيلم المعروف لنا نحن الاثنين: أداة التعريف the"]]}];
