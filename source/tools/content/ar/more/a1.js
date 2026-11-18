/* ar-en stage A1 (English for Arabic speakers): explanations in Modern Standard Arabic per docs/profiles/ar.md; English side shared with ko-en.
   arabic-traps is ar-only (deviations.c.json); its place in the course comes from profile.json lessonOrder.after. Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"ملء مكان الفاعل: it و there", blurb:"للطقس والوقت نستخدم it، ونستخدم there is و there are بمعنى \"يوجد\".", deck:"دردشة يومية", body:`
<p>في العربية نقول "الجو بارد" و"تمطر الآن" و"يوجد مقهى قريب" دون أن نبدأ بضمير. أما الجملة الإنجليزية فتحتاج دائما فاعلا قبل الفعل، فإذا لم يكن هناك فاعل حقيقي ملأنا مكانه بكلمة <b>it</b> أو <b>there</b> حسب المعنى.</p>
<h3>الطقس والوقت: It</h3>
<p>كلمة it هنا لا تعني "هو" ولا "هي"، فهي تملأ مكان الفاعل فقط. ولا نحذف معها فعل الكينونة is، فالإنجليزية لا تقبل جملة بلا فعل.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|الجو بارد اليوم}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|الساعة الثالثة}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|السماء تمطر}}
<h3>"يوجد" و"توجد": There is و There are</h3>
<p>للشيء الواحد نقول <b>There is a …</b>، ولأكثر من واحد نقول <b>There are</b> مع صيغة الجمع. وفي الكلام نختصر There is فنقول There's عادة.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|يوجد مقهى قريب من هنا}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|توجد غرفتان}}
<p>العربية تقول "غرفتان" بالمثنى، أما الإنجليزية فليس فيها مثنى: بعد two تأتي rooms بصيغة الجمع.</p>
<h3>السؤال والنفي</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|هل يوجد حمام هنا؟}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|هل توجد مقاعد شاغرة؟}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|لا توجد حافلة اليوم}}
<h3>الفرق بين have و there is</h3>
<p>قد نقول في العربية "عندنا مقهى هنا" بمعنى "يوجد مقهى". أما الإنجليزية فتفصل بين الأمرين: ما يملكه الشخص نعبر عنه بالفعل <b>have</b>، وما يوجد في مكان ما نعبر عنه بعبارة <b>there is</b> أو <b>there are</b> حسب العدد.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|عندي سيارة}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|توجد سيارة في الخارج}}
<div class="tip">أشهر الأخطاء: <b>Is cold.</b> ✗ و <b>It cold.</b> ✗ والصواب: <b>It's cold.</b> ✓ وكذلك <b>Have a cafe here.</b> ✗ والصواب: <b>There's a cafe here.</b> ✓</div>`,
check:[["بالإنجليزية: \"الجو حار اليوم\"",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"الطقس يحتاج it في مكان الفاعل، ومعها فعل الكينونة is"],["الكلمة المناسبة للفراغ: There ___ three people",["is","are","have","be"],1,"الأشخاص أكثر من واحد، فنقول there are"],["بالإنجليزية: \"هل يوجد حمام هنا؟\"",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"للسؤال عن وجود شيء واحد نبدأ بعبارة Is there a"]],
practice:[
["mc","بالإنجليزية: \"السماء تمطر\"","It's raining.","Is raining.","There is raining.","Rain is.","للطقس نضع it في مكان الفاعل"],
["mc","بالإنجليزية: \"يوجد مقهى قريب من هنا\"","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","للوجود في مكان نستخدم there is، والمقهى واحد غير محدد فيحتاج أداة التنكير a"],
["mc","الكلمة المناسبة للفراغ: There ___ two rooms","are","is","have","has","الغرف أكثر من واحدة، وصيغة الجمع rooms تأخذ are"],
["mc","بالإنجليزية: \"الساعة الثالثة\"","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","للوقت أيضا نبدأ الجملة بكلمة it"],
["mc","بالإنجليزية: \"عندي سيارة\"","I have a car.","There is a car me.","I am a car.","It's a car me.","ما يملكه الشخص نعبر عنه بالفعل have"],
["or","الجو بارد اليوم","It's cold today","There's","للطقس نضع it في مكان الفاعل، لا there"],
["or","توجد سيارة في الخارج","There's a car outside","cars","السيارة واحدة: أداة التنكير a مع المفرد car، لا صيغة الجمع cars"],
["or","يوجد مقعدان","There are two seats","seat is","بعد two نستخدم صيغة الجمع seats، ومعها are"],
["fi","__ cold today.","الجو بارد اليوم","It's|It is","Is|There's|This","نملأ مكان الفاعل بكلمة it"],
["fi","There __ a bank near here.","يوجد بنك قريب من هنا","is","are|have|be","البنك واحد، فنقول is"],
["fi","__ there any seats?","هل توجد مقاعد شاغرة؟","Are","Is|Do|Have","المقاعد هنا بصيغة الجمع seats، فنبدأ السؤال بكلمة Are"],
["ty","الجو حار اليوم (باستخدام it)","It's hot today","الكلمات: it · hot · today — للطقس نبدأ بكلمة it","There's","للطقس نضع it في مكان الفاعل، ومعها فعل الكينونة is"],
["ty","هل يوجد حمام هنا؟","Is there a bathroom here|Is there a restroom here","الكلمات: is there · bathroom — انتباه لأداة التنكير","the","نسأل عن حمام واحد غير محدد، فنستخدم أداة التنكير a"],
["ty","توجد غرفتان","There are two rooms","الكلمات: there are · two · room — بعد two صيغة الجمع","room","العربية تقول \"غرفتان\" بالمثنى، والإنجليزية تقول two مع صيغة الجمع rooms"]]},

{ id:"plurals", title:"صيغة الجمع -s و this / these و my / your", blurb:"لأكثر من واحد نضيف -s دائما، حتى للاثنين. و this للمفرد و these للجمع.", deck:"التسوق والدفع", body:`
<p>العربية تفرق بين المفرد والجمع مثل الإنجليزية، فصيغة الجمع ليست فكرة جديدة علينا. الجديد ثلاثة أمور: الإنجليزية ليس فيها مثنى، والصفة لا تتغير مع الجمع، والنهاية -s تنطق دون حركة زائدة.</p>
<h3>تكوين صيغة الجمع</h3>
<div class="tbl"><table><tr><th>القاعدة</th><th>مثال</th></tr><tr><td>أغلب الأسماء: نضيف -s</td><td class="k">book / books</td></tr><tr><td>بعد s و x و ch و sh: نضيف -es</td><td class="k">box / boxes</td></tr><tr><td>حرف ساكن + y: تصبح -ies</td><td class="k">city / cities</td></tr><tr><td>جموع شاذة</td><td class="k">man / men · child / children · person / people</td></tr></table></div>
<p>الجموع الشاذة تشبه جمع التكسير في العربية: كما نقول "رجل" و"رجال"، تقول الإنجليزية man في المفرد و men في الجمع.</p>
{{ex:two books|/ˈtuː ˈbʊks/|كتابان}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|ثلاثة صناديق}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|عندي طفلان}}
<p>نلاحظ أن العربية تقول "كتابان" بالمثنى، أما الإنجليزية فتقول two books بصيغة الجمع. وننطق -s ملتصقة بالكلمة بلا حركة قبلها، أما -es بعد s و x و ch و sh فتضيف مقطعا كاملا /ɪz/، فكلمتا boxes و watches من مقطعين.</p>
<h3>للمفرد this و that، وللجمع these و those</h3>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|هذه حقيبتي}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|هذه مفاتيحي}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|ذلك الحذاء جميل}}
<p>في العربية نقول "هذه حقيبتي" و"هذه مفاتيحي" بالكلمة نفسها، لأن جمع غير العاقل يعامل معاملة المفرد المؤنث. أما الإنجليزية فتفرق دائما: this للمفرد و these للجمع، ونستخدم الفعل are مع these و those دائما. وكلمة shoes بصيغة الجمع لأن الحذاء فردتان، مع أننا نقول في العربية "حذاء".</p>
<h3>كلمات الملكية: my و your و his و her و our و their</h3>
<p>هذه الكلمات تقابل الضمائر المتصلة في العربية: كلمة "حقيبتي" تقابلها my bag، وكما لا نقول "الحقيبتي" لا نجمع في الإنجليزية بين my وأداة التعريف the أو أداة التنكير a قبل الاسم نفسه.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|هل هذا هاتفك؟}}{{ex:Her brothers live in Cairo.|/hər ˈbrʌðərz ˈlɪv ɪn ˈkaɪroʊ/|إخوتها يعيشون في القاهرة}}
<p>والصفة في الإنجليزية لا تتغير مع الجمع، بخلاف العربية التي تطابق بين الصفة والموصوف ("رجال آخرون"، "بيوت كبيرة"): نقول other places و big houses دون s في الصفة.</p>
<div class="tip">بعد الأعداد و many و these و those يأتي الاسم بصيغة الجمع دائما: <b>two friend</b> ✗ والصواب: <b>two friends</b> ✓ وكذلك <b>my a bag</b> ✗ والصواب: <b>my bag</b> ✓ و <b>others places</b> ✗ والصواب: <b>other places</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: I have two ___",["sister","sisters","a sister","sister's"],1,"بعد two نستخدم صيغة الجمع sisters، فالإنجليزية ليس فيها مثنى"],["الكلمة المناسبة للفراغ: ___ are my keys",["This","That","These","It"],2,"المفاتيح بصيغة الجمع keys، فنقول These"],["بالإنجليزية: \"هذه حقيبتي\"",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"مع my لا نستخدم أداة التنكير a ولا أداة التعريف the"]],
practice:[
["mc","بالإنجليزية: \"كتابان\"","two books","two book","two a book","twos book","لا مثنى في الإنجليزية: بعد two نستخدم صيغة الجمع books"],
["mc","صيغة الجمع من child:","children","childs","childes","child","صيغة الجمع هنا شاذة، كما في \"طفل\" و\"أطفال\""],
["mc","الكلمة المناسبة للفراغ: ___ shoes are nice (ذلك الحذاء)","Those","That","This","It","الحذاء في الإنجليزية بصيغة الجمع shoes، فنقول those"],
["mc","بالإنجليزية: \"هذه حقيبتي\"","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","لا نجمع بين my وأداة التنكير أو أداة التعريف"],
["mc","صيغة الجمع من box:","boxes","boxs","boxies","box","بعد s و x و ch و sh نضيف -es في صيغة الجمع"],
["or","هذه مفاتيحي","These are my keys","key This","المفاتيح أكثر من واحد: صيغة الجمع keys مع these، رغم أن العربية تقول \"هذه\""],
["or","عندي طفلان","I have two children","child a","بعد two نستخدم صيغة الجمع children، ولا مكان لأداة التنكير a"],
["or","ذلك الحذاء جميل","Those shoes are nice","That","الحذاء في الإنجليزية بصيغة الجمع shoes، فنقول those لا that"],
["fi","I have three __.","عندي ثلاث قطط","cats","cat|a cat|cat's","بعد three نستخدم صيغة الجمع cats"],
["fi","__ is my friend.","هذا صديقي","This","These|Those|They","شخص واحد، فنقول this"],
["fi","Two __, please.","كوبا قهوة من فضلك","coffees","coffee|a coffee|coffee's","عند طلب أكواب نعدها نقول coffees بصيغة الجمع"],
["ty","هذه كتبي","These are my books","الكلمات: these · my · book — صيغة الجمع","book","الكتب أكثر من واحد: these مع صيغة الجمع books"],
["ty","عندي أختان","I have two sisters","الكلمات: have · two · sister — بعد two صيغة الجمع","sister","لا مثنى في الإنجليزية: two مع صيغة الجمع sisters"],
["ty","هذه حقيبتي","This is my bag","الكلمات: this · my · bag — بلا أداة","a","مع my لا نستخدم أداة التنكير a"]]},
{ id:"present", title:"المضارع البسيط وترتيب الكلمات: فاعل + فعل + مفعول به", blurb:"الترتيب مألوف من العربية، والمهم ألا نحذف الفاعل وألا نضع am أو is قبل الفعل.", deck:"التعريف بالنفس", body:`
<p>في العربية نقول "يشرب أحمد القهوة" أو "أحمد يشرب القهوة". الترتيب الثاني هو ترتيب الإنجليزية دائما: <b>الفاعل ثم الفعل ثم المفعول به</b>. أما الترتيب الأول فلا تقبله الإنجليزية، ولا تقبل حذف الفاعل كما في "أشرب القهوة"، فلا بد من I في أول الجملة.</p>
<h3>فاعل + فعل + مفعول به</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|أشرب القهوة}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|أدرس الإنجليزية}}
<p>نلاحظ أن العربية تقول "القهوة" و"الإنجليزية" بأل التعريف، أما الإنجليزية فتقول coffee و English بلا أداة تعريف، لأن الكلام عام.</p>
<h3>المكان ثم الزمان في آخر الجملة</h3>
<p>بعد الفعل والمفعول به يأتي المكان، ثم الزمان.</p>
{{ex:We live in Dubai.|/wi ˈlɪv ɪn ˌduːˈbaɪ/|نعيش في دبي}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|أدرس الإنجليزية كل يوم}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|يعملون في عطلة نهاية الأسبوع}}
<h3>المضارع البسيط (Present Simple): العادات والحقائق</h3>
<p>نستخدم المضارع البسيط لما نفعله عادة وللحقائق الثابتة. وللنفي نضع <b>don't</b> قبل الفعل.</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|لا آكل اللحم}}
<h3>لا نضع am أو is قبل فعل آخر</h3>
<p>في العربية يكفي الفعل وحده: "أدرس". لكن بعضنا يضيف am أو is ظنا أنها علامة المضارع، فيقول <b>I am study</b>. والاختبار بسيط: هل في الجملة فعل آخر غير be، مثل study و live و like؟ إذا وجد، فلا نضع am ولا is قبله.</p>
<h3>كلمات التكرار: always و usually و sometimes و never</h3>
<p>مكان هذه الكلمات المعتاد <b>قبل الفعل مباشرة</b>، لا بعده كما يحدث كثيرا في العربية ("أشرب دائما الشاي").</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|أستيقظ عادة في السابعة}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|لا أشرب القهوة ليلا أبدا}}
<div class="tip">أشهر الأخطاء: <b>I am study English.</b> ✗ والصواب: <b>I study English.</b> ✓ وكذلك <b>I drink always tea.</b> ✗ والصواب: <b>I always drink tea.</b> ✓</div>`,
check:[["الترتيب الصحيح لجملة \"أشرب القهوة\":",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"الترتيب: الفاعل ثم الفعل ثم المفعول به"],["الكلمة المناسبة للفراغ: I ___ eat meat (لا آكل)",["not","am not","no","don't"],3,"لنفي الفعل في المضارع البسيط نستخدم don't"],["الموضع الصحيح لكلمة always:",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"كلمات التكرار تأتي قبل الفعل مباشرة"]],
practice:[
["mc","بالإنجليزية: \"أدرس الإنجليزية\"","I study English.","I English study.","I am study English.","Study I English.","الترتيب: الفاعل ثم الفعل ثم المفعول به، بلا am قبل الفعل"],
["mc","بالإنجليزية: \"لا آكل اللحم\"","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","لنفي الفعل نستخدم don't، لا not وحدها ولا I'm not"],
["mc","بالإنجليزية: \"نعيش في سول\"","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","بعد الفعل يأتي المكان، ولا نضع are قبل live"],
["mc","بالإنجليزية: \"أستيقظ عادة في السابعة\"","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","تأتي usually قبل الفعل مباشرة"],
["mc","الجملة التي تتحدث عن عادة يومية:","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","للعادات نستخدم المضارع البسيط"],
["or","أشرب القهوة كل يوم","I drink coffee every day","the am","للعادة نستخدم المضارع البسيط بلا am، والقهوة بمعناها العام بلا أداة تعريف رغم \"القهوة\" في العربية"],
["or","أقرأ كتبا كثيرة","I read many books","book","بعد many نستخدم صيغة الجمع books"],
["or","نعمل في عطلة نهاية الأسبوع","We work on weekends","are","لا نضع are قبل فعل آخر: we work"],
["fi","I __ like fish.","لا أحب السمك","don't|do not","not|am not|no","لنفي الفعل نستخدم don't"],
["fi","I __ English every day.","أدرس الإنجليزية كل يوم","study","am study|studying|to study","في المضارع البسيط نستخدم الفعل كما هو، بلا am"],
["fi","They live __ Busan.","يعيشون في بوسان","in","at|on|to","قبل اسم المدينة نستخدم in"],
["ty","أشرب الشاي (بالمضارع البسيط)","I drink tea","الكلمات: drink · tea — بلا أداة","a","الشاي بمعناه العام بلا أداة تنكير ولا أداة تعريف، رغم \"الشاي\" في العربية"],
["ty","أحب القطط (باستخدام like)","I like cats","الكلمات: like · cat — صيغة الجمع","cat","الكلام عن القطط عموما: صيغة الجمع بلا أداة تعريف، مع أن العربية تقول \"القطط\""],
["ty","لا آكل اللحم","I don't eat meat","الكلمات: don't · eat · meat — النفي","am","لنفي الفعل نستخدم don't، ولا نضع am قبل فعل آخر"]]},
{ id:"questions", title:"صياغة السؤال: Do you وكلمات الاستفهام", blurb:"في العربية نضيف \"هل\" ويبقى الترتيب كما هو، أما الإنجليزية فتضيف Do أو تغير الترتيب.", deck:"عبارات أساسية 2", body:`
<p>في العربية نصنع السؤال بإضافة "هل" في أوله، أو بنبرة الصوت وحدها: "هل تحب القهوة؟" و"تحب القهوة؟"، ويبقى ترتيب الكلمات كما هو. أما الإنجليزية فلا يكفيها رفع الصوت، بل لا بد من تغيير <b>ترتيب الكلمات</b> أو إضافة فعل مساعد.</p>
<h3>مع فعل الكينونة: نقدم الفعل على الفاعل</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|هل أنت بخير؟}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|هل هذه حقيبتك؟}}
<h3>مع الأفعال الأخرى: نضع Do في الأول</h3>
<p>كلمة <b>Do</b> تؤدي هنا دور "هل"، ويبقى بعدها الترتيب العادي: الفاعل ثم الفعل.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|هل تحب القهوة؟}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|هل تتكلم الإنجليزية؟}}
<p>والجواب قصير، نكرر فيه do ولا نكرر الفعل: <b>Yes, I do.</b> أو <b>No, I don't.</b></p>
<h3>كلمات الاستفهام في أول السؤال</h3>
<p>نضع كلمة الاستفهام في الأول: what (ماذا) و where (أين) و when (متى) و who (من) و why (لماذا) و how (كيف)، ثم نكمل بترتيب السؤال نفسه: do أو فعل الكينونة، ثم الفاعل.</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|أين تسكن؟}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|ماذا تعمل؟}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|أين الحمام؟}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|بكم هذا؟}}
<p>نلاحظ أن "أين الحمام؟" و"بكم هذا؟" لا فعل فيهما، أما الإنجليزية فتحتاج is بعد كلمة الاستفهام.</p>
<h3>داخل جملة أطول: لا نقلب الترتيب</h3>
<p>إذا جاء السؤال داخل جملة أخرى بعد Do you know، عاد الترتيب العادي: الفاعل ثم الفعل، كما في المثال الأخير أدناه.</p>
<div class="tip">أشهر الأخطاء: <b>Are you like coffee?</b> ✗ والصواب: <b>Do you like coffee?</b> ✓ وكذلك <b>When I can call you?</b> ✗ والصواب: <b>When can I call you?</b> ✓ و <b>Do you know where is the station?</b> ✗ والصواب: <b>Do you know where the station is?</b> ✓</div>`,
check:[["بالإنجليزية: \"هل تحب القهوة؟\"",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"مع like وغيره من الأفعال نبدأ السؤال بكلمة Do، لا Are"],["بالإنجليزية: \"أين تسكن؟\"",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"الترتيب: كلمة الاستفهام ثم do ثم الفاعل ثم الفعل"],["الجواب المناسب عن السؤال Do you speak English؟",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"السؤال بكلمة Do جوابه بكلمة do"]],
practice:[
["mc","بالإنجليزية: \"هل تتكلم الإنجليزية؟\"","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","مع speak نبدأ السؤال بكلمة Do، ولا نضع are قبل فعل آخر"],
["mc","بالإنجليزية: \"أين تسكن؟\"","Where do you live?","Where you live?","Where are you live?","Where live you?","كلمة الاستفهام ثم do ثم الفاعل ثم الفعل"],
["mc","بالإنجليزية: \"بكم هذا؟\"","How much is this?","How much this is?","How much does this?","What much is this?","للسؤال عن السعر نقول How much is، فالإنجليزية تحتاج is هنا"],
["mc","الجواب المناسب عن السؤال Do you like tea؟","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","السؤال بكلمة Do جوابه بكلمة do"],
["mc","بالإنجليزية: \"ما عملك؟\"","What do you do?","What are you do?","What you do?","What do you?","عن العمل نسأل What do you do"],
["or","هل تحب القهوة؟","Do you like coffee","Are the","مع like نبدأ بكلمة Do لا Are، والقهوة بمعناها العام بلا أداة تعريف"],
["or","أين الحمام؟","Where is the bathroom","a do","الحمام المعروف في هذا المبنى: أداة التعريف the، والإنجليزية تحتاج is مع أن العربية بلا فعل"],
["or","أين تسكن؟","Where do you live","are","مع live نحتاج do لا are"],
["fi","__ you like music?","هل تحب الموسيقى؟","Do","Are|Is|Does","مع الفعل like نبدأ السؤال بكلمة Do"],
["fi","__ do you live?","أين تسكن؟","Where","What|Who|When","للسؤال عن المكان نستخدم where"],
["fi","What time __ it?","كم الساعة؟","is","do|does|are","للوقت نسأل بفعل الكينونة is، مع أن العربية بلا فعل"],
["ty","هل تتكلم الإنجليزية؟","Do you speak English|Can you speak English","الكلمات: do · speak · English — نبدأ بكلمة do","Are","مع speak نبدأ السؤال بكلمة Do، لا Are"],
["ty","أين الحمام؟","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","الكلمات: where · bathroom — مع أداة التعريف","a","نسأل عن الحمام المعروف للطرفين، فنستخدم أداة التعريف the، ولا ننسى is"],
["ty","هل تحب الكلاب؟ (باستخدام like)","Do you like dogs","الكلمات: do · like · dog — صيغة الجمع","dog","الكلام عن الكلاب عموما: صيغة الجمع dogs بلا أداة تعريف"]]},
{ id:"third-s", title:"مع he و she و it نضيف -s: does و doesn't", blurb:"إذا كان الفاعل شخصا واحدا أو شيئا واحدا أضفنا -s إلى الفعل، وفي السؤال والنفي نستخدم does بدلا منها.", deck:"التعريف بالنفس", body:`
<p>الفعل العربي يتغير مع كل فاعل: "أعمل، تعمل، يعمل، يعملون". فكرة المطابقة إذن مألوفة لنا، وهي في العربية أصعب. أما الإنجليزية فلها في المضارع البسيط علامة واحدة فقط: <b>-s</b> مع الفاعل المفرد الغائب (he و she و it) أو اسم مفرد مكانه مثل my mom، ومع بقية الفاعلين يبقى الفعل كما هو.</p>
<div class="tbl"><table><tr><th>الفاعل</th><th>الفعل</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|تعمل في بنك}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|يحب كرة القدم}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|أمي تطبخ جيدا}}
<h3>أفعال يتغير شكلها قليلا</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|عندها سيارة (have تصبح has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|يذهب إلى العمل في الثامنة (go تصبح goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|تدرس الإنجليزية (study تصبح studies)}}
<h3>في النفي والسؤال: does</h3>
<p>عندما نستخدم <b>doesn't</b> أو <b>Does</b> تنتقل إليهما علامة -s، فيعود الفعل بعدهما إلى التصريف الأول دون أي إضافة.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|لا يشرب القهوة}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|هل هي تسكن هنا؟}}
<h3>كلمة people بصيغة الجمع</h3>
<p>كلمة "الناس" في العربية قد يأتي قبلها فعل مفرد، لكن people في الإنجليزية تعامل معاملة الجمع دائما: نقول people are و people work، بلا s في الفعل. ولا نضع is قبل الفعل لنعبر عن المضارع، فالعلامة هي -s وحدها.</p>
<div class="tip">أشهر الأخطاء: <b>She work here.</b> ✗ والصواب: <b>She works here.</b> ✓ وكذلك <b>Does she works?</b> ✗ والصواب: <b>Does she work?</b> ✓ و <b>People is friendly.</b> ✗ والصواب: <b>People are friendly.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: She ___ in Seoul",["live","lives","living","is live"],1,"الفاعل she مفرد غائب، فنضيف s إلى الفعل: lives"],["الكلمة المناسبة للفراغ: He ___ like coffee",["don't","isn't","doesn't","not"],2,"مع he ننفي باستخدام doesn't"],["بالإنجليزية: \"عندها سيارة\"",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"الفعل have يصبح has مع she"]],
practice:[
["mc","الكلمة المناسبة للفراغ: My brother ___ in Busan","works","work","working","is work","أخي شخص واحد، فنقول works"],
["mc","بالإنجليزية: \"لا يشرب القهوة\"","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","مع he ننفي باستخدام doesn't ثم الفعل بلا s"],
["mc","بالإنجليزية: \"هل هي تسكن هنا؟\"","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","بعد Does يأتي الفعل بلا s"],
["mc","تصريف have مع she:","has","haves","have","is have","الفعل have يصبح has"],
["mc","تصريف study مع he:","studies","studys","study","studyes","حرف ساكن ثم y: تصبح -ies"],
["or","هي تعمل في بنك","She works at a bank","work the","الفاعل she فنقول works، والبنك يذكر أول مرة: أداة التنكير a"],
["or","عنده كلبان","He has two dogs","have dog","مع he نقول has، وبعد two نستخدم صيغة الجمع dogs"],
["or","هي لا تأكل اللحم","She doesn't eat meat","eats","بعد doesn't يأتي الفعل بلا s"],
["fi","He __ soccer.","يحب كرة القدم","likes","like|liking|is like","الفاعل he، فنضيف s: likes"],
["fi","__ she speak English?","هل هي تتكلم الإنجليزية؟","Does","Do|Is|Are","السؤال مع she يبدأ بكلمة Does"],
["fi","She __ to work at eight.","تذهب إلى العمل في الثامنة","goes","go|going|gos","الفعل go يصبح goes"],
["ty","عنده سيارة","He has a car","الكلمات: has · car — مع أداة التنكير","have","مع he نقول has، والسيارة واحدة: أداة التنكير a"],
["ty","هي تحب القطط (باستخدام like)","She likes cats","الكلمات: likes · cat — صيغة الجمع","cat","الفاعل she فنقول likes، والقطط عموما بصيغة الجمع cats"],
["ty","هو لا يسكن هنا","He doesn't live here","الكلمات: doesn't · live · here — النفي","lives","بعد doesn't يأتي التصريف الأول بلا s"]]},
{ id:"countable", title:"الاسم المعدود وغير المعدود: some و any و much و many", blurb:"لا نضع a ولا -s مع water، و many للمعدود و much لغير المعدود.", deck:"الطلب في المطعم", body:`
<p>الأسماء في الإنجليزية نوعان: <b>اسم معدود</b> نعده واحدا واثنين، و<b>اسم غير معدود</b> لا يعد. والمشكلة أن العربية تجمع كلمات لا تجمعها الإنجليزية: "معلومات" و"نصائح" و"واجبات" جموع عادية عندنا، أما information و advice و homework فأسماء غير معدودة لا تأخذ s أبدا.</p>
<div class="tbl"><table><tr><th>المعدود</th><th>غير المعدود</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time, information</td></tr><tr><td>معه a / an والأعداد و -s</td><td>لا a / an ولا أعداد ولا -s</td></tr></table></div>
<h3>الكلمتان some و any</h3>
<p>بمعنى "بعض" أو "شيء من" نستخدم <b>some</b> في الإثبات، و<b>any</b> في النفي والسؤال. لكن عند الطلب أو العرض نستخدم <b>some</b> حتى في السؤال: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|معي بعض المال}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|ليس معي أي مال}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|هل عندك أسئلة؟}}
<h3>الكلمتان many و much</h3>
<p>مع الاسم المعدود نستخدم <b>many</b> وبعده صيغة الجمع، ومع غير المعدود نستخدم <b>much</b>. أما <b>a lot of</b> فتصلح للنوعين.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|كم شخصا؟}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|بكم هو؟}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|ليس عندي وقت كثير}}
<p>نلاحظ أن العربية تقول "كم شخصا؟" بالمفرد، أما الإنجليزية فتقول How many people بصيغة الجمع دائما.</p>
<h3>كيف نعد غير المعدود؟</h3>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|كوب من الماء}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|فنجان قهوة}}
<p>ولا نقول an advice، بل a piece of advice للنصيحة الواحدة.</p>
<div class="tip">أشهر الأخطاء: <b>a water</b> و <b>many money</b> و <b>informations</b> ✗ والصواب: <b>some water</b> و <b>much money</b> و <b>information</b> ✓ وكذلك <b>two advices</b> ✗ والصواب: <b>two pieces of advice</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: How ___ people are there",["much","many","any","a"],1,"الأشخاص يعدون: people اسم معدود بصيغة الجمع، فنقول many"],["الاسم غير المعدود بين هذه الأسماء:",["apple","chair","water","friend"],2,"لا نضع a ولا -s مع water"],["الكلمة المناسبة للفراغ: I don't have ___ money",["some","a","many","any"],3,"في النفي نستخدم any"]],
practice:[
["mc","الكلمة المناسبة للفراغ: Can I have ___ water","some","a","many","an","الماء اسم غير معدود فلا يأخذ أداة التنكير a ولا many، وعند الطلب نستخدم some"],
["mc","الكلمة المناسبة للفراغ: How ___ time do we have","much","many","any","a","الوقت هنا اسم غير معدود، فنقول much"],
["mc","بالإنجليزية: \"هل عندك أسئلة؟\"","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","بعد any يأتي الاسم المعدود بصيغة الجمع"],
["mc","بالإنجليزية: \"كوب من الماء\"","a glass of water","a water glass of","one waters","a glass water","نعد غير المعدود بعبارة مثل a glass of"],
["mc","الكلمة المناسبة للفراغ: I have ___ friends in Seoul","many","much","a","an","الأصدقاء يعدون، و friends بصيغة الجمع، فنقول many"],
["or","معي بعض المال","I have some money","a moneys","المال اسم غير معدود: بلا أداة تنكير a وبلا صيغة الجمع"],
["or","تفاحتان من فضلك","Two apples please","apple","لا مثنى في الإنجليزية: بعد two نستخدم صيغة الجمع apples"],
["or","ليس عندي وقت كثير","I don't have much time","many","الوقت اسم غير معدود، فنقول much لا many"],
["fi","How __ is this?","بكم هذا؟","much","many|any|some","للسؤال عن السعر نستخدم how much"],
["fi","I don't have __ questions.","ليس عندي أسئلة","any","some|much|a","في النفي نستخدم any"],
["fi","a cup __ coffee","فنجان قهوة","of","for|in|a","نقول a cup of"],
["ty","هل يمكنني الحصول على بعض الماء؟","Can I have some water|Could I have some water|Can I get some water|Could I get some water","الكلمات: can I have · some · water — بلا أداة تنكير","a","الماء اسم غير معدود، فنستخدم some بدل أداة التنكير a"],
["ty","هل عندك أي أسئلة؟","Do you have any questions","الكلمات: any · question — صيغة الجمع","question","بعد any يأتي الاسم المعدود بصيغة الجمع questions"],
["ty","كم شخصا؟","How many people","الكلمات: how many · people — للمعدود","much","الأشخاص يعدون فنقول many، و people بصيغة الجمع رغم \"شخصا\" في العربية"]]},
{ id:"object-have", title:"ضمائر المفعول به me و him و her، والفعل have", blurb:"بعد الفعل نقول me لا I، والفعل have يعني \"عندي\" ويعني أيضا \"آكل\" و\"أشرب\".", deck:"التعريف بالنفس", body:`
<p>في العربية يتصل ضمير المفعول به بالفعل: "يعرفني" و"ساعدنا". أما في الإنجليزية فيأتي الضمير كلمة مستقلة بعد الفعل أو حرف الجر، لكن <b>شكله يتغير</b>: فبعد الفعل نستخدم me و him بدلا من I و he في مكان المفعول به.</p>
<div class="tbl"><table><tr><th>الفاعل</th><th>I</th><th>you</th><th>he</th><th>she</th><th>it</th><th>we</th><th>they</th></tr><tr><td>المفعول به</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">it</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|تعرفني}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|أحبه}}{{ex:Can you help us?|/kən ju ˈhelp əs/|هل يمكنك مساعدتنا؟}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|أعمل معها}}
<h3>الأشياء كلها it</h3>
<p>في العربية "السيارة" مؤنثة فنقول "هي قديمة"، أما الإنجليزية فلا تذكر الأشياء ولا تؤنثها: كل شيء غير عاقل هو <b>it</b>، ولا نستخدم she أو he إلا للأشخاص.</p>
<h3>الملكية: 's</h3>
<p>في العربية نقول "كتاب حامد" بالإضافة. أما الإنجليزية فتضيف 's إلى صاحب الشيء وتقدمه، فنقول Hamid's book بدلا من الإضافة العربية.</p>
<h3>"عندي" و"لدي": have</h3>
<p>"عندي" و"لدي" في العربية ليستا فعلا، أما الإنجليزية فتستخدم الفعل have مع الأسرة والأشياء والوقت، ولا نضع am مكانه.</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|عندي أخوان}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|هل معك قلم؟}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|ليس عندي وقت}}
<h3>الأكل والشرب: have</h3>
<p>نستخدم have أيضا مع الوجبات والمشروبات، ولا نضع أداة التنكير قبل أسماء الوجبات مثل lunch و dinner في هذا الاستعمال.</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|لنتناول الغداء}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|أشرب القهوة كل صباح}}
<div class="tip">أشهر الأخطاء: <b>She knows I.</b> ✗ والصواب: <b>She knows me.</b> ✓ وكذلك <b>I am two brothers.</b> ✗ والصواب: <b>I have two brothers.</b> ✓ و <b>My car is old. She is slow.</b> ✗ والصواب: <b>It is slow.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: I like ___ (أحبه)",["he","his","him","he's"],2,"بعد الفعل نستخدم ضمير المفعول به him"],["الكلمة المناسبة للفراغ: Can you help ___ (تساعدنا)",["us","we","our","ours"],0,"بعد الفعل نستخدم ضمير المفعول به us"],["بالإنجليزية: \"هل معك قلم؟\"",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"الفعل have فعل عادي، فنسأل بكلمة Do"]],
practice:[
["mc","الكلمة المناسبة للفراغ: She knows ___ (تعرفني)","me","I","my","mine","بعد الفعل نستخدم ضمير المفعول به me"],
["mc","الكلمة المناسبة للفراغ: I like ___ (أحبهم)","them","they","their","theirs","بعد الفعل نستخدم ضمير المفعول به them"],
["mc","بالإنجليزية: \"هل يمكنك مساعدتنا؟\"","Can you help us?","Can you help we?","Can you help our?","Can us help you?","بعد الفعل نستخدم us"],
["mc","بالإنجليزية: \"لنتناول الغداء\"","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","أسماء الوجبات بلا أداة تنكير: have lunch"],
["mc","بالإنجليزية: \"عندي أخوان\"","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","كلمة \"عندي\" تقابلها have، وبعد two صيغة الجمع brothers"],
["or","هل معك قلم؟","Do you have a pen","the pens","أي قلم واحد غير محدد: أداة التنكير a مع المفرد pen"],
["or","أحبها","I like her","she","بعد الفعل نستخدم ضمير المفعول به her"],
["or","عندي أختان","I have two sisters","sister a","بعد two نستخدم صيغة الجمع sisters بلا أداة التنكير a"],
["fi","Call __ tonight.","اتصل بي الليلة","me","I|my|mine","بعد الفعل نستخدم me"],
["fi","I work with __.","أعمل معه","him","he|his|he's","بعد حرف الجر أيضا نستخدم ضمير المفعول به"],
["fi","She __ a dog.","عندها كلب","has","have|is|haves","مع she نقول has"],
["ty","هل يمكنك مساعدتي؟","Can you help me|Could you help me","الكلمات: can you · help · me — ضمير المفعول به","I","بعد الفعل نستخدم me لا I"],
["ty","هل معك قلم؟","Do you have a pen","الكلمات: do you have · pen — مع أداة التنكير","the","نبحث عن أي قلم، فنستخدم أداة التنكير a"],
["ty","عندي أصدقاء كثيرون","I have many friends|I have a lot of friends","الكلمات: have · many · friend — صيغة الجمع","friend","بعد many نستخدم صيغة الجمع friends"]]},
{ id:"can-like", title:"ما نستطيعه وما نحبه وما نريده: can و like و I'd like", blurb:"ثلاث صيغ نحتاجها للتعريف بأنفسنا وللطلب في المطعم والمقهى.", deck:"دردشة يومية", body:`
<p>هذه ثلاث صيغ نستخدمها كل يوم: في الحديث عن أنفسنا، وعن هواياتنا، وفي الطلب.</p>
<h3>القدرة: can</h3>
<p>بعد <b>can</b> يأتي التصريف الأول للفعل مباشرة بلا to، ولا يأخذ s حتى مع he و she، فشكله لا يتغير أبدا. في العربية نقول "أستطيع أن أسبح"، لكن الإنجليزية لا تضع بعد can شيئا مكان "أن".</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|أستطيع السباحة}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|لا أستطيع القيادة}}{{ex:Can you speak Arabic?|/kən ju ˈspiːk ˈærəbɪk/|هل تتكلم العربية؟}}
<h3>الهوايات: like و love مع -ing</h3>
<p>للحديث عن الهوايات نضع بعد like و love الفعل مع -ing، كما نستخدم المصدر في العربية: "أحب الطبخ".</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|أحب الطبخ}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|أحب مشاهدة الأفلام كثيرا}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|لا أحب الجري}}
<p>ولقول "أحب الطبخ كثيرا" لا نضع very much بين الفعل والمفعول به، بل نقول I really like cooking، أو نضع very much في آخر الجملة.</p>
<h3>الطلب بأدب: I'd like</h3>
<p>عبارة <b>I like</b> تعني أننا نحب الشيء دائما، أما <b>I'd like</b> فتعني "أريد الآن" بأسلوب مهذب، وهي ما نقوله عند الطلب.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|أريد قهوة من فضلك}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|هل تريد بعض الشاي؟}}
<div class="tip">أشهر الأخطاء: <b>He can swims.</b> ✗ والصواب: <b>He can swim.</b> ✓ وكذلك <b>I like very much football.</b> ✗ والصواب: <b>I really like football.</b> ✓ وفي المقهى: <b>I like a coffee.</b> ✗ والصواب: <b>I'd like a coffee.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: She can ___ very well",["sings","sing","singing","to sing"],1,"بعد can يأتي التصريف الأول بلا s"],["بالإنجليزية: \"أحب الطبخ\"",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"بعد like نستخدم الفعل مع -ing"],["الجملة الأنسب للطلب في المقهى:",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"لما نريده الآن نقول I'd like"]],
practice:[
["mc","الكلمة المناسبة للفراغ: He can ___ Korean","speak","speaks","speaking","to speak","بعد can يأتي التصريف الأول بلا s ولا to"],
["mc","بالإنجليزية: \"لا أستطيع القيادة\"","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","نفي can هو can't"],
["mc","بالإنجليزية: \"أحب مشاهدة الأفلام\"","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","بعد like نستخدم -ing، والأفلام عموما بصيغة الجمع movies"],
["mc","للطلب في المقهى: \"أريد قهوة من فضلك\"","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","لما نريده الآن نقول I'd like"],
["mc","بالإنجليزية: \"هل تريد بعض الشاي؟\"","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","للعرض نقول Would you like"],
["or","أريد قهوة من فضلك","I'd like a coffee please","the coffees","نطلب فنجانا واحدا: أداة التنكير a مع المفرد coffee"],
["or","أحب قراءة الكتب","I like reading books","book read","بعد like نستخدم -ing، والكتب عموما بصيغة الجمع books"],
["or","هل تستطيع السباحة؟","Can you swim","swimming","بعد can يأتي التصريف الأول"],
["fi","I can't __.","لا أستطيع السباحة","swim","swimming|swims|to swim","بعد can't يأتي التصريف الأول"],
["fi","I like __ music.","أحب الاستماع إلى الموسيقى","listening to","listen to|listen|to listening","بعد like نستخدم -ing، والفعل listen يحتاج to"],
["fi","__ like a sandwich, please.","أريد شطيرة من فضلك","I'd|I would","I|I'm|I can","للطلب نقول I'd like"],
["ty","أحب الطبخ","I like cooking|I love cooking|I like to cook","الكلمات: like · cook — مع -ing","cook","بعد like نستخدم الفعل مع -ing، مثل المصدر في العربية"],
["ty","أريد شطيرة من فضلك (باستخدام I'd like)","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","الكلمات: I'd like · sandwich — مع أداة التنكير","the","أي شطيرة واحدة: أداة التنكير a"],
["ty","أحب الكلاب","I like dogs|I love dogs","الكلمات: like · dog — صيغة الجمع","dog","الكلاب عموما: صيغة الجمع dogs بلا أداة تعريف"]]},
{ id:"continuous", title:"ما يحدث الآن: be + -ing", blurb:"للعادة نستخدم المضارع البسيط، ولما يحدث الآن نستخدم be + -ing، ولا نحذف فيه فعل الكينونة.", deck:"دردشة يومية", body:`
<p>الفعل العربي "أعمل" يصلح للعادة ولما يحدث الآن، وقد نضيف "الآن" للتوضيح. أما الإنجليزية فتفصل بين الأمرين: ما يحدث <b>في هذه اللحظة</b> نعبر عنه بالمضارع المستمر (Present Continuous)، وصيغته <b>be + -ing</b>، أي فعل الكينونة ثم الفعل مع -ing في آخره.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|أعمل الآن}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|هي تحضر العشاء}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|السماء تمطر}}
<p>ولا نحذف am أو is أو are هنا أبدا، مع أن الفعل العربي لا يحتاج إلى فعل مساعد.</p>
<h3>السؤال والنفي</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|ماذا تفعل؟}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|هل تستمع؟}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|لست نائما}}
<h3>مقارنة بالمضارع البسيط</h3>
<div class="tbl"><table><tr><th>دائما (المضارع البسيط)</th><th>الآن (المضارع المستمر)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>أفعال لا تأخذ -ing</h3>
<p>الأفعال التي تصف حالة لا حركة، مثل like و know و want و need و have بمعنى "يملك"، تبقى في المضارع البسيط حتى لو كان الكلام عن الآن.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|أعرفه}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|أريد بعض الماء}}
<div class="tip">أشهر الأخطاء نسيان فعل الكينونة: <b>I working.</b> ✗ والصواب: <b>I'm working.</b> ✓ وكذلك <b>I'm knowing.</b> ✗ والصواب: <b>I know.</b> ✓</div>`,
check:[["بالإنجليزية: \"ماذا تفعل الآن؟\"",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"لما يحدث الآن نسأل بصيغة be مع -ing"],["الكلمة المناسبة للفراغ: I ___ coffee every morning",["am drinking","drinking","drink","am drink"],2,"العادة اليومية نعبر عنها بالمضارع البسيط"],["الجملة الصحيحة:",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"الأفعال know و want و have بمعنى \"يملك\" لا تأخذ -ing"]],
practice:[
["mc","بالإنجليزية: \"أعمل الآن\"","I'm working now.","I work now am.","I'm work now.","I working now.","لما يحدث الآن نستخدم be مع -ing، ولا نحذف am"],
["mc","بالإنجليزية: \"هي تحضر العشاء الآن\"","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","نستخدم be مع -ing، وأسماء الوجبات بلا أداة تنكير"],
["mc","الجملة التي تتحدث عن عادة يومية:","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","للعادة نستخدم المضارع البسيط"],
["mc","بالإنجليزية: \"ماذا تفعل الآن؟\"","What are you doing?","What do you doing?","What are you do?","What you are doing?","كلمة الاستفهام ثم be ثم الفاعل ثم الفعل مع -ing"],
["mc","بالإنجليزية: \"أعرفه\"","I know him.","I'm knowing him.","I knowing him.","I'm know him.","الفعل know يصف حالة، فلا يأخذ -ing"],
["or","أقرأ كتابا الآن","I'm reading a book","read books","كتاب واحد: أداة التنكير a مع المفرد book، و am ضرورية قبل -ing"],
["or","الأطفال يلعبون","The kids are playing","kid is","الأطفال أكثر من واحد: صيغة الجمع kids ومعها are"],
["or","السماء تمطر الآن","It's raining now","rains","لما يحدث الآن نستخدم be مع -ing"],
["fi","I'm __ TV.","أشاهد التلفاز الآن","watching","watch|watches|to watch","بعد be يأتي الفعل مع -ing"],
["fi","What __ you doing?","ماذا تفعل؟","are","do|is|does","مع you نقول are"],
["fi","She __ working today.","هي لا تعمل اليوم","isn't|is not","doesn't|don't|not","نفي be مع -ing يكون بكلمة isn't"],
["ty","أطبخ الآن","I'm cooking now|I'm cooking|I'm cooking right now","الكلمات: I'm · cook · now — فعل الكينونة مع -ing","cook","لما يحدث الآن نستخدم am مع -ing، ولا نحذف am"],
["ty","أشاهد فيلما (be + -ing، باستخدام watch و movie)","I'm watching a movie","الكلمات: I'm · watching · movie — مع أداة التنكير","the","أي فيلم واحد غير محدد: أداة التنكير a"],
["ty","الأطفال ينامون (be + -ing)","The kids are sleeping|The children are sleeping","الكلمات: kids · are · sleeping — صيغة الجمع","kid","الأطفال المعروفون: أداة التعريف the مع صيغة الجمع kids، ومعها are"]]},
{ id:"past", title:"الماضي البسيط: was و were و -ed", blurb:"لفعل الكينونة was و were، ولبقية الأفعال -ed، وفي السؤال والنفي نستخدم did مع التصريف الأول.", deck:"دردشة يومية", body:`
<p>الفعل الماضي في العربية واضح: "عملت" و"ذهبنا". لذلك فإن فكرة الماضي البسيط (Past Simple) سهلة علينا، والعمل كله في الشكل: لفعل الكينونة صيغة ماضية خاصة، وبقية الأفعال تأخذ -ed في آخرها.</p>
<h3>فعل الكينونة في الماضي: was و were</h3>
<p>مع I و he و she و it نقول <b>was</b>، ومع you و we و they نقول <b>were</b>. وهي تقابل "كان" في العربية، فلا نحذفها أبدا: I was tired تعني "كنت متعبا".</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|كنت متعبا}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|كان ممتعا}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|كنا في البيت}}{{ex:Were you busy?|/wər ju ˈbɪzi/|هل كنت مشغولا؟}}
<h3>بقية الأفعال: -ed</h3>
<p>نضيف <b>-ed</b> إلى آخر الفعل، والشكل واحد مع كل الفاعلين. وننطق -ed دون حركة زائدة: /t/ بعد أصوات مثل k و tʃ، و /d/ بعد أغلب الأصوات الأخرى، ولا نضيف المقطع /ɪd/ إلا بعد الصوتين t و d كما في wanted و needed فقط.</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|عملت أمس}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|شاهدنا فيلما}}{{ex:She called me.|/ʃi ˈkɔːld mi/|اتصلت بي}}
<p>نلاحظ في الكتابة الصوتية أن worked و watched تنتهيان بالصوت /t/ مباشرة، بلا مقطع زائد.</p>
<h3>السؤال والنفي: did</h3>
<p>عندما نستخدم <b>didn't</b> أو <b>Did</b> فهي تحمل علامة الماضي، ويعود الفعل بعدها إلى التصريف الأول.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|لم أعمل أمس}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|هل اتصلت بي؟}}
<div class="tip">أشهر الأخطاء: <b>I didn't worked.</b> ✗ والصواب: <b>I didn't work.</b> ✓ وكذلك <b>I was work.</b> ✗ والصواب: <b>I worked.</b> ✓ و <b>I tired yesterday.</b> ✗ والصواب: <b>I was tired yesterday.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: They ___ at home yesterday",["was","were","did","are"],1,"مع they نقول were"],["بالإنجليزية: \"لم أعمل أمس\"",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"بعد didn't يأتي التصريف الأول"],["الكلمة المناسبة للفراغ: Did you ___ the movie",["watch","watched","watching","watches"],0,"بعد Did يأتي التصريف الأول"]],
practice:[
["mc","الكلمة المناسبة للفراغ: I ___ tired yesterday","was","were","did","am","مع I في الماضي نقول was، ولا نحذفها"],
["mc","بالإنجليزية: \"شاهدنا فيلما\"","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","الماضي البسيط للأفعال العادية بإضافة -ed"],
["mc","بالإنجليزية: \"هل اتصلت أمس؟\"","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","بعد Did يأتي التصريف الأول"],
["mc","بالإنجليزية: \"كان ممتعا\"","It was fun.","It were fun.","It did fun.","It funned.","مع it نقول was"],
["mc","بالإنجليزية: \"هل كنت مشغولا؟\"","Were you busy?","Did you busy?","Was you busy?","Were you busied?","مع الصفة busy نسأل بفعل الكينونة were، لا did"],
["or","شاهدنا فيلما","We watched a movie","watch movies","فيلم واحد: أداة التنكير a مع المفرد movie"],
["or","لعبت مع أصدقائي","I played with my friends","friend play","الأصدقاء أكثر من واحد: صيغة الجمع friends"],
["or","لم أعمل أمس","I didn't work yesterday","worked","بعد didn't يأتي التصريف الأول"],
["fi","We __ at home last night.","كنا في البيت ليلة أمس","were","was|did|are","مع we نقول were"],
["fi","I __ soccer yesterday.","لعبت كرة القدم أمس","played","play|playing|was play","في الماضي نضيف -ed: played"],
["fi","__ you work yesterday?","هل عملت أمس؟","Did","Were|Do|Was","السؤال في الماضي مع الأفعال العادية يبدأ بكلمة Did"],
["ty","كنت متعبا","I was tired","الكلمات: was · tired — فعل الكينونة في الماضي","were","مع I نقول was، وهي تقابل \"كنت\""],
["ty","شاهدت فيلما (باستخدام watch و movie)","I watched a movie","الكلمات: watched · movie — مع أداة التنكير","the","فيلم واحد غير محدد: أداة التنكير a"],
["ty","اتصلت بأصدقائي","I called my friends","الكلمات: called · my · friend — صيغة الجمع","friend","الأصدقاء أكثر من واحد: صيغة الجمع friends"]]},
{ id:"irregular-past", title:"الماضي الشاذ: went و ate و saw", blurb:"أكثر الأفعال استعمالا لا تأخذ -ed، فنبدأ بحفظ اثني عشر فعلا.", deck:"دردشة يومية", body:`
<p>الأفعال التي نستخدمها كل يوم أغلبها <b>أفعال شاذة</b>: لا تأخذ -ed في الماضي، بل يتغير شكلها كله دون قاعدة، لذلك نحفظها أزواجا.</p>
<div class="tbl"><table><tr><th>التصريف الأول</th><th>التصريف الثاني</th><th>التصريف الأول</th><th>التصريف الثاني</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Cairo.|/aɪ ˈwent tə ˈkaɪroʊ/|ذهبت إلى القاهرة}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|أكلنا بيتزا}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|شاهدت فيلما}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|قابلت أصدقائي}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|اشتريت كتابا}}
<h3>في السؤال والنفي نعود إلى التصريف الأول</h3>
<p>كلمة <b>did</b> تحمل علامة الماضي، فيعود الفعل بعدها إلى التصريف الأول.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|ماذا فعلت؟}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|إلى أين ذهبت؟}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|لم أذهب}}
<div class="tip">أشهر الأخطاء: <b>I goed.</b> ✗ والصواب: <b>I went.</b> ✓ وكذلك <b>They buyed a car.</b> ✗ والصواب: <b>They bought a car.</b> ✓ و <b>Did you went?</b> ✗ والصواب: <b>Did you go?</b> ✓</div>`,
check:[["التصريف الثاني من go:",["goed","gone","went","going"],2,"الماضي من go هو went"],["بالإنجليزية: \"ماذا فعلت؟\"",["What did you do?","What did you did?","What you did?","What were you do?"],0,"بعد did يأتي التصريف الأول do"],["الكلمة المناسبة للفراغ: I didn't ___ breakfast",["ate","eaten","eats","eat"],3,"بعد didn't يأتي التصريف الأول"]],
practice:[
["mc","التصريف الثاني من eat:","ate","eated","eat","eaten","الماضي من eat هو ate"],
["mc","بالإنجليزية: \"إلى أين ذهبت؟\"","Where did you go?","Where did you went?","Where you went?","Where were you go?","بعد did يأتي التصريف الأول"],
["mc","بالإنجليزية: \"اشتريت كتابا\"","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","الماضي من buy هو bought، والكتاب واحد: أداة التنكير a"],
["mc","التصريف الثاني من see:","saw","seed","seen","sawed","الماضي من see هو saw"],
["mc","بالإنجليزية: \"لم أذهب\"","I didn't go.","I didn't went.","I wasn't go.","I not went.","بعد didn't يأتي التصريف الأول"],
["or","شاهدت فيلما","I saw a movie","see movies","فيلم واحد: أداة التنكير a مع المفرد movie، والماضي من see هو saw"],
["or","أكلنا بيتزا","We ate pizza","eated","الماضي من eat هو ate"],
["or","قابلت أصدقائي","I met my friends","friend meet","الأصدقاء أكثر من واحد: صيغة الجمع friends"],
["fi","I __ to Jeju last year.","ذهبت إلى جزيرة جيجو في العام الماضي","went","go|goed|gone","الماضي من go هو went"],
["fi","What did you __?","ماذا أكلت؟","eat","ate|eaten|eating","بعد did يأتي التصريف الأول"],
["fi","She __ a new phone.","اشترت هاتفا جديدا","bought","buyed|buy|buys","الماضي من buy هو bought"],
["ty","ذهبت إلى بوسان","I went to Busan","الكلمات: went · to · Busan — التصريف الثاني","go","الماضي من go هو went"],
["ty","اشتريت كتابا","I bought a book","الكلمات: bought · book — مع أداة التنكير","the","كتاب واحد غير محدد: أداة التنكير a"],
["ty","قابلت أصدقائي","I met my friends|I saw my friends","الكلمات: met · my · friend — صيغة الجمع","friend","الأصدقاء أكثر من واحد: صيغة الجمع friends"]]},
{ id:"the", title:"مراجعة the: أولا a ثم the، والكلام العام بلا أداة", blurb:"نبدأ بأداة التنكير a، ثم نستخدم the لما يعرفه الطرفان، ولا نستخدم أداة مع الكلام العام.", deck:"الاتجاهات والمواصلات", body:`
<p>أداة التعريف the تشبه أل التعريف في العربية، لكنها لا تطابقها. في هذا الدرس نتدرب على متى نستخدم <b>the</b>، ومتى لا نستخدم <b>أي أداة</b>، وهنا أكبر فخ للمتحدثين بالعربية.</p>
<h3>أولا a، وعند الذكر الثاني the</h3>
<p>إذا كان السامع يسمع عن الشيء أول مرة قلنا a، وإذا ذكرناه قبل قليل وصار معروفا قلنا the في المرة الثانية.</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|اشتريت قميصا. القميص أزرق}}
<h3>إذا كان الشيء معروفا من الموقف: the</h3>
<p>نافذة هذه الغرفة، والمحطة القريبة، والشمس: إذا كان واضحا أي شيء نقصد، نستخدم the من أول مرة.</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|هل يمكنك فتح النافذة؟}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|أين محطة المترو؟}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|الشمس حارة اليوم}}
<h3>الكلام العام: بلا أداة تعريف</h3>
<p>في العربية نقول "الحياة قصيرة" و"التعليم مهم" و"أحب الكلاب" بأل التعريف، مع أننا نتكلم عن الحياة والتعليم والكلاب عموما. أما الإنجليزية فلا تضع the في الكلام العام، بل تستخدم الاسم غير المعدود أو صيغة الجمع بلا أداة.</p>
{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|الحياة قصيرة}}{{ex:Education is important.|/ˌedʒuˈkeɪʃn ɪz ɪmˈpɔːrtnt/|التعليم مهم}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|أحب الكلاب}}
<h3>عبارات بلا أداة</h3>
<p>بعض عبارات المكان والمواصلات والنوم نحفظها كما هي، بلا أداة.</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|أذهب إلى العمل بالحافلة}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|أنا في البيت}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|أنام في الحادية عشرة}}
<div class="tip">قبل أن نختار نسأل أنفسنا: هل يعرف السامع <b>أي شيء</b> نقصد؟ إذا عرف قلنا the، وإذا لم يعرف قلنا a، وإذا كان الكلام عاما فلا أداة. ومن أشهر الأخطاء: <b>The pollution is a big problem.</b> ✗ والصواب: <b>Pollution is a big problem.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: I have a cat. ___ cat is white",["A","An","The","(بلا أداة)"],2,"القطة ذكرت قبل قليل، فنستخدم أداة التعريف the"],["الكلمة المناسبة للفراغ: I go to ___ work by bus",["a","the","an","(بلا أداة)"],3,"عبارة go to work بلا أداة تعريف ولا أداة تنكير"],["الجملة المناسبة لطلب فتح نافذة هذه الغرفة:",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"النافذة معروفة للطرفين، فنستخدم the"]],
practice:[
["mc","الكلمة المناسبة للفراغ: I bought a shirt. ___ shirt is blue","The","A","An","Some","القميص ذكر قبل قليل: أداة التعريف the"],
["mc","بالإنجليزية: \"أين المحطة؟\"","Where's the station?","Where's a station?","Where's station?","Where the station?","المحطة القريبة المعروفة: the"],
["mc","الجملة الصحيحة:","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","عبارتا go to work و by bus بلا أداة"],
["mc","بالإنجليزية: \"الشمس حارة\"","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","الشيء الوحيد من نوعه مثل الشمس يأخذ the"],
["mc","بالإنجليزية: \"أنا في البيت\"","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","عبارة at home بلا أداة"],
["or","هل يمكنك فتح النافذة؟","Can you open the window","a windows","النافذة معروفة للطرفين: أداة التعريف the"],
["or","أذهب إلى العمل بالحافلة","I go to work by bus","the a","عبارتا go to work و by bus بلا أداة تعريف ولا أداة تنكير"],
["or","الكلب كبير (الكلب الذي ذكرناه)","The dog is big","A dogs","الكلب ذكر من قبل: أداة التعريف the، والإنجليزية تحتاج is"],
["fi","I saw a movie. __ movie was great.","شاهدت فيلما. كان الفيلم رائعا","The","A|An|Some","الفيلم ذكر قبل قليل، فنقول the"],
["fi","Where's __ bathroom?","أين الحمام؟","the","a|an|some","الحمام المعروف في هذا المبنى: the"],
["fi","I have __ idea.","عندي فكرة","an","a|the|some","فكرة تذكر أول مرة وتبدأ بصوت متحرك، فنقول an"],
["ty","هل يمكنك إغلاق الباب؟","Can you close the door|Could you close the door","الكلمات: can you · close · door — مع أداة التعريف","a","الباب معروف للطرفين: أداة التعريف the"],
["ty","أين المحطة؟","Where is the station|Where's the station","الكلمات: where · station — مع أداة التعريف","a","المحطة القريبة المعروفة: أداة التعريف the، ولا ننسى is"],
["ty","أنا في البيت","I'm at home|I'm home","الكلمات: I'm · at · home — بلا أداة","the","في عبارة at home لا نستخدم أداة التعريف، مع أن العربية تقول \"البيت\""]]},
{ id:"adjectives", title:"الصفات والمقارنة: bigger و more expensive و the best", blurb:"الصفة قبل الاسم، وللمقارنة -er أو more، وللتفضيل the -est أو the most مع أداة التعريف.", deck:"التسوق والدفع", body:`
<p>في العربية تأتي الصفة بعد الاسم: "حقيبة كبيرة". أما في الإنجليزية فتأتي الصفة <b>قبل الاسم</b>، أو بعد فعل الكينونة. ولا تتغير الصفة مع الجمع ولا مع المؤنث: نقول big مع bag ومع bags، ومع المذكر والمؤنث.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|حقيبة كبيرة}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|هذه الحقيبة كبيرة}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|إنها صغيرة أكثر من اللازم}}
<p>وعندما تأتي الصفة بعد الاسم لا ننسى is، فالعربية تقول "الحقيبة كبيرة" بلا فعل، أما الإنجليزية فلا بد فيها من is بين الاسم والصفة.</p>
<h3>المقارنة: -er أو more</h3>
<p>صيغة "أفعل" في العربية تقابلها في الإنجليزية <b>-er</b> للكلمات القصيرة، و<b>more</b> قبل الكلمات الطويلة. ونقول than في مكان "من" في عبارة "أكبر من".</p>
<div class="tbl"><table><tr><th>الصفة</th><th>صيغة المقارنة</th><th>صيغة التفضيل</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|هذا أرخص}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|إنه أغلى من ذلك}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|هل عندك مقاس أكبر؟}}
<h3>صيغة التفضيل مع the</h3>
<p>صيغة التفضيل تأخذ أداة التعريف the دائما، مثل "الأكبر" و"الأفضل" في العربية.</p>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|هذا أفضل مطعم هنا}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|أيها الأرخص؟}}
<div class="tip">لا نجمع بين -er و more: <b>more cheaper</b> و <b>more good</b> ✗ والصواب: <b>cheaper</b> و <b>better</b> ✓ ولا نؤخر الصفة: <b>a party big</b> ✗ والصواب: <b>a big party</b> ✓</div>`,
check:[["صيغة المقارنة من big:",["more big","biger","bigger","most big"],2,"الكلمة قصيرة فنضيف -er، ونكرر الحرف الأخير: bigger"],["الكلمة المناسبة للفراغ: This is ___ expensive than that",["more","most","much","very"],0,"الكلمة طويلة، فنضع قبلها more"],["صيغة التفضيل من good:",["the goodest","the most good","the better","the best"],3,"الصيغ هنا شاذة: good و better و the best"]],
practice:[
["mc","صيغة المقارنة من cheap:","cheaper","more cheap","cheapper","most cheap","الكلمة قصيرة، فنضيف -er"],
["mc","بالإنجليزية: \"هذا أغلى\"","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","الكلمة طويلة، فنضع قبلها more"],
["mc","بالإنجليزية: \"هل عندك مقاس أكبر؟\"","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","الترتيب: أداة التنكير ثم الصفة ثم الاسم"],
["mc","صيغة المقارنة من good:","better","gooder","more good","best","الصيغ شاذة: good و better و best"],
["mc","بالإنجليزية: \"هذا أفضل مطعم\"","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","صيغة التفضيل تأخذ the"],
["or","هل عندك مقاس أكبر؟","Do you have a bigger size","the sizes","نبحث عن أي مقاس واحد: أداة التنكير a، والصفة قبل الاسم"],
["or","هذا الأرخص","This is the cheapest","a cheaper","صيغة التفضيل تأخذ أداة التعريف the"],
["or","هذا أرخص من ذلك","This is cheaper than that","more","لا نضع more قبل صفة فيها -er"],
["fi","It's __ small.","إنها صغيرة أكثر من اللازم","too","much|more|most","بمعنى \"أكثر من اللازم\" نقول too"],
["fi","This is cheaper __ that one.","هذا أرخص من ذلك","than","then|that|more","كلمة \"من\" بعد صيغة المقارنة هي than"],
["fi","It's the __ expensive one.","إنه الأغلى","most","more|much|very","للكلمة الطويلة في صيغة التفضيل نقول the most"],
["ty","هل عندك مقاس أصغر؟","Do you have a smaller size","الكلمات: smaller · size — مع أداة التنكير","the","نبحث عن أي مقاس واحد: أداة التنكير a"],
["ty","هذا الأفضل","This is the best|This one is the best","الكلمات: the · best — مع أداة التعريف","a","صيغة التفضيل تأخذ أداة التعريف the"],
["ty","هذا أرخص","This is cheaper|This one is cheaper","الكلمة: cheap — صيغة المقارنة","more","الكلمة قصيرة، فنضيف -er ولا نستخدم more"]]},
{ id:"going-to", title:"الحديث عن الخطط: be going to", blurb:"لما قررناه من قبل نستخدم be going to ثم التصريف الأول.", deck:"دردشة يومية", body:`
<p>في العربية نعبر عن المستقبل بالسين أو سوف: "سأزور" و"سوف أشتري". أما الإنجليزية ففيها صيغتان، والأولى للخطة التي <b>قررناها من قبل</b>: <b>be + going to</b> ثم التصريف الأول.</p>
{{ex:I'm going to visit Cairo.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˈkaɪroʊ/|سأزور القاهرة}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|ستشتري سيارة}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|سنتناول العشاء}}
<p>ولا نحذف فعل الكينونة am أو is أو are، فهو جزء من الصيغة.</p>
<h3>النفي والسؤال</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|لن أذهب}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|هل ستأتي؟}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|ماذا ستفعل في عطلة نهاية هذا الأسبوع؟}}
<h3>التوقع مما نراه</h3>
<p>ونستخدمها أيضا عندما نرى دليلا الآن، كالغيوم في السماء.</p>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|ستمطر}}
<h3>كلمات الوقت معها</h3>
<p>نضع tomorrow (غدا) و tonight (الليلة) و this weekend (عطلة نهاية هذا الأسبوع) و next week (الأسبوع القادم) في آخر الجملة عادة.</p>
<div class="tip">في الكلام السريع تنطق going to قريبة من gonna، لكننا نكتب going to كاملة. ولا نحذف فعل الكينونة: <b>I going to go.</b> ✗ والصواب: <b>I'm going to go.</b> ✓</div>`,
check:[["بالإنجليزية: \"سأقابل صديقي غدا\"",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"الصيغة: be ثم going to ثم التصريف الأول"],["الكلمة المناسبة للفراغ: She ___ going to study",["am","are","is","be"],2,"مع she نقول is"],["بالإنجليزية: \"ماذا ستفعل في عطلة نهاية هذا الأسبوع؟\"",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"كلمة الاستفهام ثم be ثم الفاعل ثم going to"]],
practice:[
["mc","بالإنجليزية: \"سأذهب إلى بوسان\"","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","الصيغة: be ثم going to ثم التصريف الأول"],
["mc","الكلمة المناسبة للفراغ: They ___ going to come","are","is","am","be","مع they نقول are"],
["mc","بالإنجليزية: \"ستمطر\"","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","بعد going to يأتي التصريف الأول"],
["mc","بالإنجليزية: \"لن أذهب\"","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","نضع not بعد فعل الكينونة"],
["mc","بالإنجليزية: \"هل ستأتي؟\"","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","في السؤال نقدم فعل الكينونة على الفاعل"],
["or","ستشتري سيارة","She's going to buy a car","the cars","سيارة واحدة: أداة التنكير a مع المفرد car"],
["or","سأقابل أصدقائي","I'm going to meet my friends","friend","الأصدقاء أكثر من واحد: صيغة الجمع friends"],
["or","سنتناول العشاء","We're going to have dinner","a","اسم الوجبة dinner بلا أداة تنكير"],
["fi","I'm going __ study tonight.","سأدرس الليلة","to","for|at|will","الصيغة going to ثم التصريف الأول"],
["fi","__ you going to come?","هل ستأتي؟","Are","Do|Is|Will","مع you نقول Are"],
["fi","It's going to __ tomorrow.","ستمطر غدا","rain","rains|raining|rained","بعد going to يأتي التصريف الأول"],
["ty","سأشاهد فيلما (خطة، باستخدام movie)","I'm going to watch a movie|I'm going to see a movie","الكلمات: going to · watch · movie — مع أداة التنكير","the","أي فيلم واحد غير محدد: أداة التنكير a"],
["ty","ماذا ستفعل؟ (خطة)","What are you going to do","الكلمات: what · going to · do — عن الخطة","will","للسؤال عن الخطة نستخدم be going to"],
["ty","سأقابل أصدقائي (خطة)","I'm going to meet my friends|I'm going to see my friends","الكلمات: going to · meet · friend — صيغة الجمع","friend","الأصدقاء أكثر من واحد: صيغة الجمع friends"]]},
{ id:"joining", title:"ربط الجمل: and و but و or و so و because", blurb:"نربط جملتين قصيرتين بكلمة واحدة، ولا نجمع بين so و because في جملة واحدة.", deck:"المشاعر وردود الفعل", body:`
<p>العربية تحب الجمل الطويلة المربوطة بالواو والفاء: "ذهبت إلى السوق واشتريت الخبز وعدت إلى البيت و…". أما الإنجليزية فتفضل جملا أقصر، وتربط بينها بكلمة تبين العلاقة، أو تقسمها بنقطة.</p>
<h3>الكلمات and و but و or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|أحب القهوة والشاي}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|أنا متعب لكنني سعيد}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|قهوة أم شاي؟}}
<h3>النتيجة: so</h3>
<p>الترتيب: <b>السبب + so + النتيجة</b>، تماما مثل "لذلك" في العربية.</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|كنت متعبا، لذلك عدت إلى البيت}}
<h3>السبب: because</h3>
<p>الترتيب: <b>النتيجة + because + السبب</b>، مثل "لأن" في العربية.</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|عدت إلى البيت لأنني كنت متعبا}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|بقيت في البيت لأن السماء كانت تمطر}}
<h3>"أيضا": too</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|أنا أيضا أحبه}}
<p>وكما لا نجمع بين so و because، لا نجمع بين although و but: في العربية نقول "رغم أن… إلا أن"، أما الإنجليزية فتكتفي بإحداهما.</p>
<div class="tip">لا نجمع بين so و because في جملة واحدة: <b>Because I was tired, so I went home.</b> ✗ والصواب: <b>I was tired, so I went home.</b> ✓ وإذا طالت الجملة بالواو، نقسمها بنقطة.</div>`,
check:[["الكلمة المناسبة للفراغ: I was sick, ___ I stayed home",["because","but","so","or"],2,"السبب أولا ثم النتيجة: so"],["الكلمة المناسبة للفراغ: I stayed home ___ I was sick",["because","so","but","and"],0,"النتيجة أولا ثم السبب: because"],["الجملة المناسبة لسؤال \"قهوة أم شاي؟\":",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"للاختيار بين شيئين نستخدم or"]],
practice:[
["mc","الكلمة المناسبة للفراغ: I like dogs ___ I don't like cats","but","so","or","because","للمعنى المعاكس نستخدم but"],
["mc","الكلمة المناسبة للفراغ: I was hungry, ___ I ate a sandwich","so","because","but","or","السبب أولا ثم النتيجة: so"],
["mc","الكلمة المناسبة للفراغ: I ate a sandwich ___ I was hungry","because","so","but","or","النتيجة أولا ثم السبب: because"],
["mc","بالإنجليزية: \"قهوة أم شاي؟\"","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","للاختيار نستخدم or"],
["mc","بالإنجليزية: \"أنا متعب لكنني سعيد\"","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","كلمة \"لكن\" تقابلها but"],
["or","أحب القطط والكلاب","I like cats and dogs","cat dog","الحيوانات عموما بصيغة الجمع: cats و dogs"],
["or","قهوة وشطيرة من فضلك","A coffee and a sandwich please","the or","نطلب واحدا من كل منهما، فنضع أداة التنكير a قبل كل اسم"],
["or","كنت جائعا فأكلت","I was hungry so I ate","because","السبب أولا ثم النتيجة: so"],
["fi","I'm tired __ happy.","أنا متعب لكنني سعيد","but","so|because|or","كلمة \"لكن\" تقابلها but"],
["fi","I stayed home __ it was raining.","بقيت في البيت لأن السماء كانت تمطر","because","so|but|or","النتيجة أولا ثم السبب: because"],
["fi","Coffee __ tea?","قهوة أم شاي؟","or","so|but|because","للاختيار نستخدم or"],
["ty","أحب القهوة والشاي (باستخدام like)","I like coffee and tea","الكلمات: like · coffee · and · tea — بلا أداة","a","القهوة والشاي بمعناهما العام بلا أداة تنكير ولا أداة تعريف، رغم \"ال\" في العربية"],
["ty","أنا متعب لكنني سعيد","I'm tired but happy|I'm tired but I'm happy","الكلمات: tired · but · happy — كلمة \"لكن\"","so","كلمة \"لكن\" تقابلها but"],
["ty","أحب الكلاب والقطط (باستخدام like)","I like dogs and cats|I like cats and dogs","الكلمات: dog · and · cat — صيغة الجمع","dog","الحيوانات عموما بصيغة الجمع: dogs و cats"]]},
{ id:"arabic-traps", title:"فخاخ الترجمة الحرفية من العربية", blurb:"لا نقول open the light ولا make a party: أشهر العبارات التي تخدعنا فيها الترجمة الحرفية.", deck:"فخاخ الترجمة الحرفية", body:`
<p>كثير من أخطائنا في الإنجليزية ليست أخطاء في القواعد، بل ترجمة كلمة بكلمة من العربية: "افتح النور" تصبح open the light، و"عمري عشرون سنة" تصبح I have twenty years عند بعضنا. قد يفهمنا السامع، لكن هذه الجمل ليست إنجليزية. في هذا الدرس نجمع أشهر هذه الفخاخ.</p>
<h3>أفعال لا تترجم حرفيا</h3>
<div class="tbl"><table><tr><th>العربية</th><th>الترجمة الحرفية ✗</th><th>الصواب ✓</th></tr><tr><td>"افتح النور" و"أغلق النور"</td><td>open the light / close the light</td><td class="k">turn on the light / turn off the light</td></tr><tr><td>"أعمل حفلة"</td><td>make a party</td><td class="k">have a party / throw a party</td></tr><tr><td>"أعمل واجبي"</td><td>make my homework</td><td class="k">do my homework</td></tr><tr><td>"فعلت خطأ"</td><td>did a mistake</td><td class="k">made a mistake</td></tr></table></div>
<p>وأحيانا تنجح الترجمة الحرفية: "يأخذ صورة" هي take a picture بالفعل. لذلك نحفظ هذه العبارات كما هي، ولا نخمن الفعل.</p>
{{ex:Turn on the light.|/ˈtɜːrn ˈɑːn ðə ˈlaɪt/|أشعل الضوء}}{{ex:I'm having a party.|/aɪm ˈhævɪŋ ə ˈpɑːrti/|سأقيم حفلة}}{{ex:I need to do my homework.|/aɪ ˈniːd tə ˈduː maɪ ˈhoʊmwɜːrk/|يجب أن أحل واجبي}}{{ex:I made a mistake.|/aɪ ˈmeɪd ə mɪˈsteɪk/|ارتكبت خطأ}}
<p>ونلاحظ أن أداة التعريف وأداة التنكير تبقيان في مكانهما: turn on <b>the</b> light لأن الضوء معروف للطرفين، و have <b>a</b> party لأنها حفلة واحدة غير محددة.</p>
<h3>العمر والرأي والشعور</h3>
<p>في الإنجليزية نعبر عن العمر بفعل الكينونة لا بفعل الملكية: I'm thirty، لا I have thirty years كما في الترجمة الحرفية. وكلمة agree فعل، فلا نضع am قبلها. أما الملل فله كلمتان: bored لمن يشعر بالملل، و boring للشيء الممل.</p>
{{ex:I'm thirty years old.|/aɪm ˈθɜːrti ˈjɪrz ˈoʊld/|عمري ثلاثون عاما}}{{ex:I agree with you.|/aɪ əˈgriː wɪð ju/|أتفق معك}}{{ex:This class is boring.|/ˈðɪs ˈklæs ɪz ˈbɔːrɪŋ/|هذا الدرس ممل}}
<h3>أفعال وحروف جر</h3>
<p>بعض الأفعال تأخذ في العربية حرف جر لا تأخذه الإنجليزية، أو العكس: نقول explain it to me لا explain me، و listen to music بحرف الجر to، و discuss the plan بلا حرف جر، و married to لا married with ولا married from كما توحي "متزوج من" و"متزوج بطبيبة". أما depends on فتوافق "يعتمد على".</p>
{{ex:Can you explain it to me?|/kən ju ɪkˈspleɪn ɪt tə mi/|هل يمكنك أن تشرحه لي؟}}{{ex:I'm listening to music.|/aɪm ˈlɪsənɪŋ tə ˈmjuːzɪk/|أستمع إلى الموسيقى}}{{ex:Let's discuss the plan.|/ˈlets dɪˈskʌs ðə ˈplæn/|لنناقش الخطة}}{{ex:She's married to a doctor.|/ʃiz ˈmærid tu ə ˈdɑːktər/|هي متزوجة من طبيب}}
<h3>كلمات مخادعة</h3>
<p>كلمات نظنها تقابل كلمة عربية، وهي تعني شيئا آخر: actually تعني "في الحقيقة" لا "حاليا"، و library مكان الاستعارة والقراءة لا متجر الكتب، و sensitive تعني "حساس" أما sensible فتعني "عاقل"، و attend تعني "يحضر" أما assist فتعني "يساعد".</p>
{{ex:Actually, I'm busy.|/ˈæktʃuəli aɪm ˈbɪzi/|في الحقيقة، أنا مشغول}}{{ex:I study at the library.|/aɪ ˈstʌdi ət ðə ˈlaɪbreri/|أدرس في المكتبة}}{{ex:I attended the meeting.|/aɪ əˈtendɪd ðə ˈmiːtɪŋ/|حضرت الاجتماع}}
<h3>"معلومات" و"نصائح": أسماء غير معدودة</h3>
<p>"معلومات" و"نصائح" و"أخبار" و"أثاث" كلها جموع في العربية، أما information و advice و news و furniture فأسماء غير معدودة: لا نجمعها بإضافة s، وكلمة news مفردة رغم s في آخرها: <b>The news is good.</b> ولا نضع قبل هذه الأسماء أداة التنكير a أبدا.</p>
{{ex:I need some information.|/aɪ ˈniːd ˈsʌm ˌɪnfərˈmeɪʃn/|أحتاج إلى بعض المعلومات}}{{ex:Can I give you some advice?|/kən aɪ ˈgɪv ju ˈsʌm ədˈvaɪs/|هل تسمح لي بنصيحة؟}}
<div class="tip">أشهر الأخطاء: <b>Open the light.</b> ✗ والصواب: <b>Turn on the light.</b> ✓ وكذلك <b>I have twenty years.</b> ✗ والصواب: <b>I'm twenty years old.</b> ✓ و <b>I am agree.</b> ✗ والصواب: <b>I agree.</b> ✓ و <b>informations</b> ✗ والصواب: <b>information</b> ✓</div>`,
check:[["بالإنجليزية: \"أشعل الضوء من فضلك\"",["Open the light, please.","Turn on the light, please.","Open light, please.","Turn the light open, please."],1,"للأضواء والأجهزة نقول turn on، أما open فللأبواب والنوافذ؛ والضوء معروف للطرفين: أداة التعريف the"],["بالإنجليزية: \"عمري خمسة وعشرون عاما\"",["I have twenty-five years.","I'm twenty-five years.","I have twenty-five years old.","I'm twenty-five years old."],3,"عن العمر نستخدم فعل الكينونة مع years old، لا الفعل have"],["الجملة الصحيحة:",["I agree with you.","I am agree with you.","I'm agree with you.","I agreeing with you."],0,"الكلمة agree فعل في الإنجليزية، فلا نضع قبلها am"]],
practice:[
["mc","بالإنجليزية: \"أطفئ الضوء\"","Turn off the light.","Close the light.","Turn off light.","Open off the light.","للأضواء نقول turn off، و close للأبواب والنوافذ"],
["mc","بالإنجليزية: \"ارتكبت خطأ\"","I made a mistake.","I did a mistake.","I made mistake.","I did mistake.","مع الخطأ نستخدم make، وخطأ واحد يحتاج أداة التنكير a"],
["mc","بالإنجليزية: \"أشعر بالملل\"","I'm bored.","I'm boring.","I bored.","I'm bore.","لمن يشعر بالملل نقول bored، أما boring فتعني \"ممل\"، ولا نحذف am"],
["mc","بالإنجليزية: \"هل يمكنك أن تشرحه لي؟\"","Can you explain it to me?","Can you explain me it?","Can you explain to me it?","Can you explain me?","بعد explain يأتي الشيء ثم to me"],
["mc","الكلمة المناسبة للفراغ: I study at the ___ (في المكتبة التي نستعير منها الكتب)","library","bookstore","bookshop","books","مكان الاستعارة والقراءة library، أما bookstore فمتجر لبيع الكتب"],
["or","أطفئ الضوء","Turn off the light","a close","الضوء معروف للطرفين: أداة التعريف the، والفعل turn off لا close"],
["or","عمري عشرون عاما","I'm twenty years old","year have","بعد twenty نستخدم صيغة الجمع years، ونقول I'm لا I have"],
["or","أحتاج إلى بعض المعلومات","I need some information","informations","الكلمة information اسم غير معدود: بلا s وبلا أداة تنكير"],
["or","لنناقش الخطة","Let's discuss the plan","about a","الفعل discuss بلا حرف جر، والخطة معروفة للطرفين: أداة التعريف the"],
["fi","I need to __ my homework.","يجب أن أحل واجبي","do","make|have|play","مع الواجب نستخدم do لا make"],
["fi","I'm listening __ music.","أستمع إلى الموسيقى","to","at|on|for","الفعل listen يحتاج to قبل ما نستمع إليه"],
["fi","It depends __ you.","الأمر يعتمد عليك","on","of|from|at","كما في \"يعتمد على\" نقول depends on"],
["ty","لنقم حفلة!","Let's have a party|Let's throw a party","الكلمات: have · party — مع have لا make","make","حفلة واحدة غير محددة: أداة التنكير a، ونقول have a party لا make"],
["ty","ارتكبت خطأ","I made a mistake|I've made a mistake","الكلمات: made · mistake — مع make لا do","did","خطأ واحد: أداة التنكير a، ومع الخطأ نستخدم make"],
["ty","أحتاج إلى بعض النصائح (باستخدام advice)","I need some advice|I need advice","الكلمات: need · some · advice — اسم غير معدود","advices","الكلمة advice اسم غير معدود: بلا s وبلا أداة تنكير، رغم \"نصائح\" في العربية"],
["ty","هي متزوجة من طبيب","She's married to a doctor","الكلمات: married · doctor — حرف الجر to","with","نقول married to لا married with، والطبيب غير محدد: أداة التنكير a"]]},
];
