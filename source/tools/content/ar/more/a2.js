/* ar-en stage A2: new lessons, plus the ar-only be-2 (placed after tense by profile.json lessonOrder.after). English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"الماضي المستمر: was / were + -ing", blurb:"ما كان يحدث في لحظة ما في الماضي، وهو خلفية القصة عادة.", deck:"المشاعر وردود الفعل", body:`
<p>نستخدم <b>الماضي المستمر (Past Continuous)</b> لفعل كان مستمرا في لحظة معينة من الماضي. تعبر العربية عنه بالفعل "كان" مع المضارع: "كنت أنام". والإنجليزية قريبة من ذلك: نضع <b>was</b> أو <b>were</b> ثم الفعل بصيغة -ing.</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|كنت نائما}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|كنا نشاهد التلفاز}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|كانت السماء تمطر}}
<h3>السؤال</h3>
<p>في السؤال نقدم was أو were على الفاعل.</p>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|ماذا كنت تفعل؟}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|هل كنت تعمل في الساعة التاسعة؟}}
<h3>مع when: حدث قصير يقطع حدثا مستمرا</h3>
<p>الحدث الطويل المستمر يأتي <b>بالماضي المستمر</b>، والحدث القصير الذي وقع في أثنائه يأتي <b>بالماضي البسيط</b>.</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|كنت أطبخ عندما اتصلت}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|كنت أمشي إلى البيت عندما بدأ المطر}}
<p>وكما لا نحذف "كان" في "كنت أطبخ"، لا نحذف was أو were في الإنجليزية: <b>I cooking.</b> ✗ والصواب: <b>I was cooking.</b> ✓</p>
<div class="tip">إذا استخدمنا الماضي البسيط وحده تغير المعنى: <b>I cooked when you called.</b> معناها "بدأت الطبخ بعد أن اتصلت"</div>`,
check:[["بالإنجليزية: \"ماذا كنت تفعل في الساعة التاسعة؟\"",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"مع you نستخدم were، وبعدها الفعل بصيغة -ing"],["الكلمة المناسبة للفراغ: I was cooking ___ you called",["when","so","or","than"],0,"كلمة \"عندما\" هي when"],["الكلمة المناسبة للفراغ: They ___ watching TV",["was","did","were","are being"],2,"مع they نستخدم were"]],
practice:[
["mc","الكلمة المناسبة للفراغ: I ___ sleeping at ten","was","were","did","am","مع I نستخدم was"],
["mc","بالإنجليزية: \"كنت أطبخ عندما اتصلت\"","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","الحدث المستمر بالماضي المستمر، والحدث الذي قطعه بالماضي البسيط"],
["mc","بالإنجليزية: \"ماذا كنت تفعل؟\"","What were you doing?","What did you doing?","What was you doing?","What were you do?","مع you نستخدم were، وبعدها صيغة -ing"],
["mc","الكلمة المناسبة للفراغ: They ___ playing soccer","were","was","did","are","مع they نستخدم were"],
["mc","بالإنجليزية: \"كانت السماء تمطر\"","It was raining.","It were raining.","It was rain.","It rained was.","مع it نستخدم was ثم صيغة -ing"],
["or","كنت أقرأ كتابا","I was reading a book","read books","كتاب واحد غير محدد: أداة التنكير a والمفرد book"],
["or","كان الأطفال نائمين","The kids were sleeping","kid was","الأطفال أكثر من واحد: صيغة الجمع kids ومعها were"],
["or","كنا نشاهد التلفاز","We were watching TV","was","مع we نستخدم were"],
["fi","I was __ dinner.","كنت أطبخ العشاء","cooking|making","cook|cooked|cooks","بعد was يأتي الفعل بصيغة -ing"],
["fi","What __ you doing?","ماذا كنت تفعل؟","were","was|did|does","مع you نستخدم were"],
["fi","I was sleeping __ you called.","كنت نائما عندما اتصلت","when","so|than|or","كلمة \"عندما\" هي when"],
["ty","كنت أعمل (بالماضي المستمر)","I was working","الكلمات: was · work — بصيغة -ing","were","مع I نستخدم was ثم صيغة -ing"],
["ty","كنت أشاهد فيلما (بالماضي المستمر)","I was watching a movie","الكلمات: was · watching · movie — مع أداة التنكير","the","فيلم ما غير محدد: أداة التنكير a"],
["ty","كان الأطفال يلعبون","The kids were playing|The children were playing","الكلمات: kids · were · playing — صيغة الجمع","kid","الأطفال أكثر من واحد: صيغة الجمع kids ومعها were"]]},
{ id:"will", title:"المستقبل مع will: قرار اللحظة والوعد والتوقع", blurb:"نستخدم will للقرار الذي نتخذه في اللحظة، و be going to للخطة المرتبة من قبل.", deck:"دردشة يومية", body:`
<p>نكون الجملة هكذا: <b>will + التصريف الأول</b>. وفي الكلام نختصرها في أغلب الأحيان: <b>I'll</b> و <b>you'll</b> و <b>it'll</b>، والنفي <b>won't</b>.</p>
<p>في العربية تكفي السين أو "سوف" للمستقبل كله: "سأساعدك" و"سأزور القاهرة الشهر القادم". أما الإنجليزية فتفرق بين will و be going to حسب وقت القرار: هل قررنا الآن، أم رتبنا الأمر من قبل؟</p>
<h3>قرار في اللحظة نفسها</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|سآخذ المعكرونة}}{{ex:I'll get it.|/aɪl ˈget ɪt/|سأرد أنا / سأفتح أنا}}
<h3>الوعد والعرض</h3>
{{ex:I'll help you.|/aɪl ˈhelp ju/|سأساعدك}}{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|سأتصل بك لاحقا}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|لن أتأخر}}
<h3>التوقع</h3>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|ستكون الأمور بخير}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|أظن أنها ستمطر}}
<h3>الاختيار بين will و be going to</h3>
<div class="tbl"><table><tr><th></th><th>متى نستخدمها</th><th>مثال</th></tr><tr><td class="k">will</td><td>قرار في اللحظة، أو وعد</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>خطة مرتبة من قبل</td><td>I'm going to visit Cairo next month.</td></tr></table></div>
<div class="tip">الخطأ الأشهر: <b>I will to go.</b> و <b>I'll going.</b> ✗ والصواب: <b>I'll go.</b> ✓ فبعد will يأتي التصريف الأول وحده، بلا to وبلا -ing.</div>`,
check:[["عند رنين الهاتف، كيف نقول \"سأرد أنا\"؟",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"القرار الذي نتخذه في اللحظة نفسها يكون مع will"],["الكلمة المناسبة للفراغ: I ___ be late (لن أتأخر)",["won't","willn't","don't will","not will"],0,"نفي will هو won't"],["الجملة التي تتحدث عن خطة مرتبة من قبل:",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"الخطة المرتبة مسبقا تكون مع be going to"]],
practice:[
["mc","بالإنجليزية: \"سأساعدك\"","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","بعد will يأتي التصريف الأول للفعل"],
["mc","في المطعم، عند الاختيار في اللحظة نفسها: \"سآخذ المعكرونة\"","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","القرار في اللحظة نفسها يكون مع will"],
["mc","بالإنجليزية: \"لن أتأخر\"","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","اختصار will not هو won't، وبعده be"],
["mc","بالإنجليزية: \"هل ستأتي؟\"","Will you come?","Do you will come?","Will you coming?","Will come you?","في السؤال: Will ثم الفاعل ثم التصريف الأول"],
["mc","الجملة التي تتحدث عن خطة مرتبة من قبل:","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","الخطة المرتبة مسبقا تكون مع be going to"],
["or","سأتصل بك لاحقا","I'll call you later","calling","بعد will يأتي التصريف الأول: call"],
["or","سآخذ قهوة","I'll have a coffee","the coffees","فنجان واحد نطلبه: أداة التنكير a والمفرد coffee"],
["or","سأفتح الباب","I'll open the door","a doors","الباب الموجود هنا والمعروف لنا: أداة التعريف the والمفرد door"],
["fi","I __ call you tomorrow.","سأتصل بك غدا","will","am|going|do","الوعد يكون مع will"],
["fi","I __ forget.","لن أنسى","won't|will not","don't|not|willn't","نفي will هو won't"],
["fi","__ you help me?","هل يمكنك مساعدتي؟","Will|Can|Could|Would","Do|Are|Is","للطلب نبدأ السؤال بكلمة Will أو Can أو Could أو Would"],
["ty","سأساعدك (باستخدام will)","I'll help you|I'll help","الكلمات: I'll · help · you","helping","بعد will يأتي التصريف الأول: help"],
["ty","سآخذ سلطة (باستخدام I'll have)","I'll have a salad|I'll have the salad","الكلمات: I'll have · salad — انتباه لأداة التنكير","salads","نطلب طبقا واحدا: أداة التنكير a، أو أداة التعريف the إن قصدنا الطبق المعروف في القائمة"],
["ty","سأغلق الباب (باستخدام will)","I'll close the door|I'll shut the door","الكلمات: I'll · close · door — مع أداة التعريف","a","الباب المعروف لنا هنا: أداة التعريف the"]]},
{ id:"perfect", title:"المضارع التام: التجربة والخبرة", blurb:"نقول have + التصريف الثالث للتجربة، وإذا ذكرنا وقتا محددا نستخدم الماضي البسيط.", deck:"السفر (المطار والفندق)", body:`
<p>نكون <b>المضارع التام (Present Perfect)</b> من <b>have / has + التصريف الثالث</b>. نستخدمه هنا للتجربة: شيء حدث في وقت ما قبل الآن، <b>دون أن نذكر متى</b>.</p>
<p>ليس في العربية زمن خاص بهذا المعنى: نقول "زرت دبي" بالماضي، أو "سبق أن زرت دبي". لذلك نسأل أنفسنا: هل يهمنا الوقت، أم التجربة نفسها؟ إذا كانت التجربة هي المهمة، فالإنجليزية تستخدم المضارع التام.</p>
{{ex:I've been to Dubai.|/aɪv bɪn tə ˌduːˈbaɪ/|زرت دبي من قبل}}{{ex:She has visited Egypt twice.|/ʃi həz ˈvɪzɪtɪd ˈiːdʒɪpt ˈtwaɪs/|زارت مصر مرتين}}
<h3>كلمتا ever و never</h3>
{{ex:Have you ever eaten sushi?|/həv ju ˈevər ˈiːtn ˈsuːʃi/|هل سبق أن أكلت السوشي؟}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|لم أره قط}}
<p>والجواب: <b>Yes, I have.</b> أو <b>No, I haven't.</b></p>
<h3>تصريفات شائعة</h3>
<div class="tbl"><table><tr><th>التصريف الأول</th><th>التصريف الثاني</th><th>التصريف الثالث</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>الفرق بين been to و gone to</h3>
<p>معنى <b>been to</b> "ذهب ثم عاد"، ومعنى <b>gone to</b> "ذهب وما زال هناك".</p>
{{ex:She's gone to Cairo.|/ʃiz ˈgɔːn tə ˈkaɪroʊ/|ذهبت إلى القاهرة (وهي هناك الآن)}}
<h3>مع وقت محدد نستخدم الماضي البسيط</h3>
<p>إذا ذكرنا وقتا انتهى مثل last year و yesterday و in 2020، فلا نستخدم المضارع التام.</p>
{{ex:I went to Japan last year.|/aɪ ˈwent tə dʒəˈpæn ˈlæst ˈjɪr/|ذهبت إلى اليابان العام الماضي}}
<div class="tip">الخطأ الأشهر: <b>I've been to Japan last year.</b> ✗ والصواب: <b>I went to Japan last year.</b> ✓ وكذلك <b>I have seen him yesterday.</b> ✗ والصواب: <b>I saw him yesterday.</b> ✓</div>`,
check:[["بالإنجليزية: \"هل سبق أن زرت اليابان؟\"",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"للسؤال عن التجربة: Have you ever ثم التصريف الثالث"],["الكلمة المناسبة للفراغ: I ___ never seen that movie",["am","did","have","was"],2,"نقول have ثم never ثم التصريف الثالث"],["الجملة الصحيحة:",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"مع last year، وهو وقت انتهى، نستخدم الماضي البسيط"]],
practice:[
["mc","بالإنجليزية: \"زرت اليابان من قبل\"","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","بعد have يأتي التصريف الثالث been"],
["mc","التصريف الثالث من see:","seen","saw","seed","seeing","تصريفات see هي see – saw – seen"],
["mc","بالإنجليزية: \"هل سبق أن أكلت الكيمتشي؟\"","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","للسؤال عن التجربة: Have you ever ثم التصريف الثالث"],
["mc","بالإنجليزية: \"لم أره قط\"","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","نقول have ثم never ثم التصريف الثالث"],
["mc","الجملة الصحيحة مع \"العام الماضي\":","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","مع وقت انتهى نستخدم الماضي البسيط"],
["or","شاهدت الفيلم من قبل","I've seen the movie","a saw","الفيلم المعروف لنا نحن الاثنين: أداة التعريف the"],
["or","زرت كوريا مرتين","I've been to Korea twice","went","بعد have يأتي التصريف الثالث been، لا الثاني went"],
["or","لم أر ثعبانا قط","I've never seen a snake","the snakes","أي ثعبان، لا ثعبان محدد: أداة التنكير a والمفرد snake"],
["fi","Have you ever __ to Busan?","هل سبق أن زرت بوسان؟","been","be|went|go","بعد have يأتي التصريف الثالث been"],
["fi","I've __ eaten that.","لم آكل ذلك قط","never","ever|no|not never","بمعنى \"قط\" أو \"أبدا\" نستخدم never"],
["fi","She __ visited Korea twice.","زارت كوريا مرتين","has","have|is|did","مع she نستخدم has"],
["ty","هل سبق أن زرت اليابان؟ (باستخدام been)","Have you ever been to Japan|Have you been to Japan","الكلمات: have you ever · been · Japan","went","للسؤال عن التجربة: Have you ever been to ثم المكان"],
["ty","قرأت الكتاب (بالمضارع التام)","I've read the book|I've read that book","الكلمات: I've · read · book — مع أداة التعريف","a","الكتاب المعروف لنا نحن الاثنين: أداة التعريف the"],
["ty","لم يسبق أن كانت عندي قطة (بالمضارع التام)","I've never had a cat","الكلمات: never · had · cat — مع أداة التنكير","the","أي قطة، لا قطة محددة: أداة التنكير a"]]},
{ id:"modals", title:"الأفعال الناقصة: have to و must و should و might", blurb:"ما يلزمنا فعله، وما ينبغي فعله، وما قد يحدث.", deck:"المستشفى والطوارئ", body:`
<p>هذه <b>الأفعال الناقصة (Modal verbs)</b> تعبر عن الإلزام والنصيحة والاحتمال، ويأتي بعدها <b>التصريف الأول</b> دائما. والصعوبة أن كلمة "يجب" في العربية تغطي ثلاثة أفعال إنجليزية: have to و must و should، فلنفرق بينها.</p>
<h3>الإلزام مع have to</h3>
<p>هي الأكثر استعمالا في الكلام اليومي، ومعناها "علي أن" أو "لا بد أن". ومع he و she نقول <b>has to</b>.</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|علي أن أعمل غدا}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|عليها أن تذهب الآن}}
<h3>الفرق بين don't have to و must not</h3>
<p>عبارة "لا يجب أن تأتي" في العربية قد تعني "لا داعي لأن تأتي"، وقد تعني "ممنوع أن تأتي". والإنجليزية تفصل بين المعنيين:</p>
<div class="tbl"><table><tr><th>العبارة</th><th>المعنى</th></tr><tr><td class="k">You don't have to come.</td><td>لا داعي لأن تأتي (ليس ضروريا)</td></tr><tr><td class="k">You must not smoke here.</td><td>ممنوع التدخين هنا</td></tr></table></div>
<h3>النصيحة مع should</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|ينبغي أن تراجع الطبيب}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|لا ينبغي أن تقلق}}
<h3>الاحتمال مع might</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|ربما تمطر}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|ربما أتأخر}}
<p>كلمة "يمكن" واسعة في العربية أيضا: "هل يمكن أن أساعدك؟" هي Can I help you، و"من الممكن أن تمطر" هي It might rain. ونقول It might rain بدلا من الإكثار من maybe في أول كل جملة.</p>
<div class="tip">الخطأ الأشهر: <b>You should to go.</b> و <b>It might rains.</b> ✗ والصواب: <b>You should go.</b> و <b>It might rain.</b> ✓ فبعد should و must و might لا نضع to، ولا نضيف s إلى الفعل.</div>`,
check:[["بالإنجليزية: \"لا داعي لأن تأتي\"",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"لمعنى \"ليس ضروريا\" نقول don't have to"],["عند تقديم نصيحة: You ___ see a doctor",["might","have","should","must to"],2,"للنصيحة نستخدم should ثم التصريف الأول"],["الكلمة المناسبة للفراغ: She ___ to work today",["have","must","should","has"],3,"مع she نقول has to"]],
practice:[
["mc","بالإنجليزية: \"علي أن أعمل غدا\"","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","بعد have to يأتي التصريف الأول"],
["mc","بالإنجليزية: \"لا داعي لأن تأتي\"","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","لمعنى \"ليس ضروريا\" نقول don't have to"],
["mc","بالإنجليزية: \"ينبغي أن تراجع طبيبا\"","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","بعد should يأتي التصريف الأول، وطبيب واحد غير محدد يأخذ أداة التنكير a"],
["mc","بالإنجليزية: \"ربما تمطر\"","It might rain.","It might rains.","It might to rain.","It mights rain.","بعد might يأتي التصريف الأول بلا s"],
["mc","بالإنجليزية: \"ممنوع التدخين هنا\"","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","للمنع نقول must not"],
["or","ينبغي أن تراجع طبيبا","You should see a doctor","the doctors","أي طبيب، لا طبيب محدد: أداة التنكير a والمفرد doctor"],
["or","علي أن أذهب الآن","I have to go now","going","بعد have to يأتي التصريف الأول: go"],
["or","عليك أن تشتري تذكرة","You have to buy a ticket","the tickets","تذكرة واحدة: أداة التنكير a والمفرد ticket"],
["fi","She __ to study tonight.","عليها أن تدرس الليلة","has","have|must|should","مع she نقول has to"],
["fi","You __ have to pay.","لا داعي لأن تدفع","don't|do not","must not|not|aren't","لمعنى \"ليس ضروريا\" نقول don't have to"],
["fi","It __ rain tomorrow.","ربما تمطر غدا","might|may|could","must to|has to|should to","للاحتمال نستخدم might"],
["ty","علي أن أعمل","I have to work|I must work|I need to work","الكلمات: have to · work","should","للإلزام نستخدم have to"],
["ty","ينبغي أن تذهب إلى الطبيب","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","الكلمات: should · see · doctor — مع أداة التنكير","the","أي طبيب، لا طبيب محدد: أداة التنكير a"],
["ty","علينا أن نشتري تذكرة (باستخدام have to)","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","الكلمات: have to · buy · ticket — مع أداة التنكير","the","تذكرة واحدة: أداة التنكير a"]]},
{ id:"to-ing", title:"الفعل الثاني مع to أو -ing: want to و enjoy -ing", blurb:"بعد want نضع to، وبعد enjoy نضع -ing، والفعل الأول هو الذي يحدد.", deck:"دردشة يومية", body:`
<p>في العربية نربط الفعلين بكلمة "أن": "أريد أن أذهب"، "قررت أن أتعلم". ويقابل "أن" هنا في الإنجليزية <b>to + التصريف الأول</b>: I want to go. فلا نقول <b>I want go.</b> ✗ ولا <b>I want that I go.</b> ✗</p>
<p>لكن بعض الأفعال لا تأخذ to، بل يأتي بعدها الفعل الثاني <b>بصيغة -ing</b>. الفعل الأول هو الذي يحدد، لذلك نحفظ الأفعال الشائعة في مجموعتين:</p>
<div class="tbl"><table><tr><th>بعدها to</th><th>بعدها -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>المجموعة الأولى: to + الفعل</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|أريد أن أذهب إلى البيت}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|أحتاج أن أدرس}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|أود أن أطلب}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|قررت أن أتعلم الإنجليزية}}
<h3>المجموعة الثانية: صيغة -ing بعد enjoy و finish و mind</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|أستمتع بالطبخ}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|انتهيت من العمل}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|لا مانع عندي من الانتظار}}
<p>نلاحظ أن العربية تستخدم هنا المصدر: "أستمتع بالطبخ"، "انتهيت من العمل". وهذا المصدر يقابله في الإنجليزية الفعل بصيغة -ing.</p>
<h3>أفعال تقبل الصيغتين</h3>
<p>بعد like و love و start يصح to أو -ing.</p>
<div class="tip">الخطأ الأشهر: <b>I want go.</b> و <b>I enjoy to cook.</b> ✗ والصواب: <b>I want to go.</b> و <b>I enjoy cooking.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: I want ___ home",["go","going","to go","to going"],2,"بعد want يأتي to ثم التصريف الأول"],["الكلمة المناسبة للفراغ: I enjoy ___ movies",["watching","to watch","watch","to watching"],0,"بعد enjoy يأتي الفعل بصيغة -ing"],["بالإنجليزية: \"أود أن أطلب\"",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"بعد would like يأتي to ثم التصريف الأول"]],
practice:[
["mc","الكلمة المناسبة للفراغ: I need ___ now","to go","going","go","to going","بعد need يأتي to ثم التصريف الأول"],
["mc","الكلمة المناسبة للفراغ: I enjoy ___","cooking","to cook","cook","to cooking","بعد enjoy يأتي الفعل بصيغة -ing"],
["mc","بالإنجليزية: \"أود أن أطلب\"","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","بعد would like يأتي to ثم التصريف الأول"],
["mc","بالإنجليزية: \"انتهيت من العمل\"","I finished working.","I finished to work.","I finished work to.","I finish worked.","بعد finish يأتي الفعل بصيغة -ing"],
["mc","بالإنجليزية: \"لا مانع عندي من الانتظار\"","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","بعد mind يأتي الفعل بصيغة -ing، ونفي mind يكون مع don't"],
["or","أريد أن أشتري سيارة","I want to buy a car","the buying","بعد want يأتي to، والسيارة واحدة غير محددة: أداة التنكير a"],
["or","أستمتع بمشاهدة الأفلام","I enjoy watching movies","movie watch","بعد enjoy صيغة -ing، والأفلام عموما بصيغة الجمع movies"],
["or","أحتاج أن أرتاح","I need to rest","resting","بعد need يأتي to ثم التصريف الأول"],
["fi","I want __ a coffee.","أريد أن أشرب قهوة","to have|to drink|to get","have|having|drinking","بعد want يأتي to ثم التصريف الأول"],
["fi","She enjoys __.","تستمتع بالسباحة","swimming","to swim|swim|swims","بعد enjoy يأتي الفعل بصيغة -ing"],
["fi","I decided __ English.","قررت أن أتعلم الإنجليزية","to study|to learn","study|studying|studied","بعد decide يأتي to ثم التصريف الأول"],
["ty","أريد أن أذهب إلى البيت","I want to go home","الكلمات: want to · go · home — بلا أداة تعريف","the","بعد want يأتي to، وكلمة home هنا بلا أداة تعريف وبلا حرف جر"],
["ty","أستمتع بقراءة الكتب","I enjoy reading books|I enjoy reading","الكلمات: enjoy · read · book — صيغة الجمع","book","بعد enjoy صيغة -ing، والكتب عموما بصيغة الجمع books"],
["ty","أود أن أطلب","I'd like to order|I want to order","الكلمات: I'd like · to · order","ordering","بعد would like يأتي to ثم التصريف الأول"]]},
{ id:"articles-2", title:"المزيد عن أداة التعريف: الشيء الوحيد والكلام العام", blurb:"نضع the قبل الآلات الموسيقية ولا نضعها قبل الرياضات، ثم أسماء الدول والكلام العام.", deck:"السفر (المطار والفندق)", body:`
<p>هذا الدرس الثالث عن أداة التعريف the. العربية تضع "ال" على الاسم العام: "القطط لطيفة"، "أحب الموسيقى". أما الإنجليزية فلا تضع the على الكلام العام. وفي المقابل هناك حالات ثابتة تأخذ فيها the دائما، فلنجمعها هنا.</p>
<h3>حالات نستخدم فيها the</h3>
<div class="tbl"><table><tr><th>الحالة</th><th>أمثلة</th></tr><tr><td>شيء واحد في العالم (وهنا تتفق اللغتان: الشمس، الإنترنت)</td><td class="k">the sun, the internet</td></tr><tr><td>الآلات الموسيقية</td><td class="k">play the piano</td></tr><tr><td>الأنهار والبحار</td><td class="k">the Nile, the Red Sea</td></tr><tr><td>الدول التي في اسمها جمع أو اتحاد</td><td class="k">the United States, the UAE</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|أعزف على البيانو}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|هي من الولايات المتحدة}}{{ex:I found it on the internet.|/aɪ ˈfaʊnd ɪt ɑːn ði ˈɪntərnet/|وجدته على الإنترنت}}{{ex:I live in the UAE.|/aɪ ˈlɪv ɪn ðə ˌjuː eɪ ˈiː/|أعيش في الإمارات}}
<h3>حالات بلا أداة تعريف</h3>
<div class="tbl"><table><tr><th>الحالة</th><th>أمثلة</th></tr><tr><td>أغلب الدول والمدن (حتى لو قلنا "الأردن" و"القاهرة")</td><td class="k">Egypt, Jordan, Cairo</td></tr><tr><td>الرياضات واللغات والوجبات</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>الكلام العام</td><td class="k">Dogs are cute. Coffee is expensive.</td></tr></table></div>
{{ex:I live in Egypt.|/aɪ ˈlɪv ɪn ˈiːdʒɪpt/|أعيش في مصر}}{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|ألعب كرة القدم}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|الكلاب لطيفة}}
<h3>العام والمحدد</h3>
<p>هذا أهم فرق للمتحدثين بالعربية. نقول "أحب الكلاب" ونقصد الكلاب عموما. وفي الإنجليزية نستخدم للكلام العام <b>صيغة الجمع بلا أداة تعريف</b>، أو الاسم غير المعدود وحده.</p>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|أحب الكلاب (عموما)}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|الكلاب في هذه الحديقة لطيفة (كلاب محددة)}}
<div class="tip">الكلام العام بلا the: معنى <b>I like the dogs.</b> "أحب تلك الكلاب". وكذلك <b>The music is my life.</b> ✗ والصواب: <b>Music is my life.</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: I play ___ soccer",["a","the","an","(بلا أداة)"],3,"أسماء الرياضات بلا أداة تعريف"],["الكلمة المناسبة للفراغ: She's from ___ United States",["the","a","an","(بلا أداة)"],0,"اسم United States يأخذ أداة التعريف the"],["بالإنجليزية: \"الكلاب لطيفة\" (الكلاب عموما)",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"للكلام العام نستخدم صيغة الجمع بلا أداة تعريف"]],
practice:[
["mc","الكلمة المناسبة للفراغ: I play ___ piano","the","a","an","some","الآلات الموسيقية تأخذ أداة التعريف the"],
["mc","بالإنجليزية: \"أعيش في كوريا\"","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","أغلب أسماء الدول بلا أداة تعريف"],
["mc","بالإنجليزية: \"ألعب كرة القدم\"","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","أسماء الرياضات بلا أداة تعريف، رغم \"ال\" في \"كرة القدم\""],
["mc","بالإنجليزية: \"القطط لطيفة\" (القطط عموما)","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","للكلام العام صيغة الجمع بلا أداة تعريف"],
["mc","الكلمة المناسبة للفراغ: She's from ___ United States","the","a","an","some","اسم United States يأخذ أداة التعريف the"],
["or","أعزف على البيانو","I play the piano","a pianos","الآلات الموسيقية تأخذ أداة التعريف the"],
["or","الكلاب لطيفة","Dogs are cute","The dog","الكلاب عموما: صيغة الجمع dogs بلا أداة تعريف"],
["or","وجدته على الإنترنت","I found it on the internet","a","الإنترنت شيء واحد في العالم: أداة التعريف the"],
["fi","I speak __.","أتكلم الإنجليزية","English","the English|an English|a English","أسماء اللغات بلا أداة تعريف، رغم \"ال\" في \"الإنجليزية\""],
["fi","The sun rises in __ east.","تشرق الشمس من الشرق","the","a|an|some","الجهات الأربع تأخذ أداة التعريف the"],
["fi","I love __.","أحب الموسيقى كثيرا","music","the musics|a music|musics","الموسيقى عموما بلا أداة تعريف، وهي اسم غير معدود فلا تأخذ s"],
["ty","أنا من الولايات المتحدة","I'm from the United States|I'm from the US|I'm from America","الكلمات: I'm from · United States — مع أداة التعريف","a","اسم United States يأخذ أداة التعريف the"],
["ty","أعزف على الجيتار","I play the guitar|I play guitar","الكلمات: play · guitar — مع أداة التعريف","a","الآلات الموسيقية تأخذ أداة التعريف the"],
["ty","القطط لطيفة (القطط عموما)","Cats are cute","الكلمة: cat — صيغة الجمع بلا أداة","The cat","للكلام العام صيغة الجمع cats بلا أداة تعريف"]]},
{ id:"first-conditional", title:"الجملة الشرطية (النوع الأول): If + المضارع، will", blurb:"إذا حدث هذا فسيحدث ذاك، ولا نستخدم will بعد if مباشرة.", deck:"العمل والبريد الإلكتروني", body:`
<p>نستخدم <b>الجملة الشرطية (Conditional) – النوع الأول</b> لأمر قد يحدث فعلا. الترتيب: <b>If + المضارع البسيط، will + التصريف الأول</b>.</p>
<p>في العربية يأتي الفعل بعد "إذا" كثيرا بصيغة الماضي ونحن نتحدث عن المستقبل: "إذا جئت غدا". أما الإنجليزية فتستخدم بعد if <b>المضارع البسيط</b>: If you come tomorrow. فلا نقول <b>If you came tomorrow</b> ✗ ولا <b>If you will come tomorrow</b> ✗</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|إذا أمطرت، سأبقى في البيت}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|إذا لم تسرع، ستفوتك الحافلة}}
<h3>تغيير الترتيب</h3>
<p>إذا جاءت if في النصف الثاني من الجملة، لا نضع فاصلة قبلها.</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|سأساعدك إذا كان عندي وقت}}
<h3>مع جملة الأمر</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|إذا تأخرت، فاتصل بي}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|إذا احتجت مساعدة، فأخبرني}}
<h3>استخدام when للأمر المؤكد</h3>
<p>إذا كنا متأكدين أن الأمر سيحدث، نستخدم when بدلا من if، ولا نضع will بعدها أيضا.</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|عندما أصل إلى البيت، سأتصل بك}}
<div class="tip">الخطأ الأشهر: <b>If it will rain, …</b> ✗ والصواب: <b>If it rains, …</b> ✓</div>`,
check:[["الكلمة المناسبة للفراغ: If it ___ tomorrow, I'll stay home",["will rain","rains","rained","raining"],1,"بعد if نستخدم المضارع البسيط حتى للمستقبل"],["الكلمة المناسبة للفراغ: If you study, you ___ pass",["pass will","passing","will pass","passed"],2,"في جواب الشرط: will ثم التصريف الأول"],["الجملة الصحيحة:",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"لا نضع will بعد if"]],
practice:[
["mc","الكلمة المناسبة للفراغ: If it ___, I'll stay home","rains","will rain","rained","is rain","بعد if نستخدم المضارع البسيط"],
["mc","الكلمة المناسبة للفراغ: If you're late, ___ me","call","will calling","calls","to call","جملة الأمر تبدأ بالتصريف الأول للفعل"],
["mc","بالإنجليزية: \"سأساعدك إذا كان عندي وقت\"","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","لا نضع will بعد if"],
["mc","بالإنجليزية: \"إذا لم تسرع، ستفوتك الحافلة\"","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","في جملة if ننفي المضارع البسيط باستخدام don't"],
["mc","بالإنجليزية: \"عندما أصل إلى البيت، سأتصل بك\"","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","بعد when أيضا نستخدم المضارع البسيط"],
["or","إذا أمطرت سأبقى في البيت","If it rains I'll stay home","will the","بعد if المضارع البسيط، وكلمة home هنا بلا أداة تعريف"],
["or","إذا كان عندك وقت فاتصل بي","If you have time call me","will","لا نضع will بعد if"],
["or","ستفوتك الحافلة","You'll miss the bus","a buses","الحافلة التي نريد ركوبها معروفة: أداة التعريف the والمفرد bus"],
["fi","If it __ tomorrow, we'll cancel.","إذا أمطرت غدا فسنلغي","rains","will rain|rained|raining","بعد if نستخدم المضارع البسيط"],
["fi","If you study, you __ pass.","إذا درست فستنجح","will|can|might","are|did|passing","في جواب الشرط: will ثم التصريف الأول"],
["fi","__ you need help, call me.","إذا احتجت مساعدة فاتصل بي","If|When","So|But|Because","كلمة \"إذا\" هي if"],
["ty","سأساعدك إذا كان عندي وقت","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","الكلمات: I'll help · if · have time","will","لا نضع will بعد if"],
["ty","إذا أمطرت فسآخذ سيارة أجرة","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","الكلمات: if · rains · take · taxi — مع أداة التنكير","the","أي سيارة أجرة، لا سيارة محددة: أداة التنكير a"],
["ty","ستفوتك الحافلة","You'll miss the bus|We'll miss the bus|I'll miss the bus","الكلمات: miss · bus — مع أداة التعريف","a","الحافلة التي نريد ركوبها معروفة: أداة التعريف the"]]},
{ id:"relative", title:"جملة الصلة: who و that لوصف الناس والأشياء", blurb:"الاسم أولا ثم الوصف كما في العربية، لكن بلا ضمير عائد.", deck:"التسوق والدفع", body:`
<p>نستخدم <b>جملة الصلة (Relative clause)</b> لنصف اسما بجملة كاملة: the book <b>that I bought</b>. والترتيب مثل العربية: الاسم أولا ثم الوصف، و who أو that تقابل "الذي" و"التي".</p>
<h3>الاسم الموصول who للناس</h3>
<p>الاسم الموصول في العربية واحد للناس والأشياء ("الذي"، "التي")، أما الإنجليزية فتفرق: <b>who</b> للناس، و <b>that</b> أو <b>which</b> للأشياء.</p>
{{ex:I have a friend who lives in Cairo.|/aɪ ˈhæv ə ˈfrend hu ˈlɪvz ɪn ˈkaɪroʊ/|عندي صديق يعيش في القاهرة}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|الرجل الذي يسكن في البيت المجاور}}
<h3>الاسم الموصول that للأشياء</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|الكتاب الذي اشتريته}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|هذا هو الهاتف الذي أريده}}
<h3>لا نكرر الضمير العائد</h3>
<p>نقول في العربية "الكتاب الذي اشتريته"، والهاء في آخر الفعل ضمير عائد يرجع إلى الكتاب. في الإنجليزية لا نكرره، لأن that نفسها تقوم مقامه:</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td class="k">the book that I bought it</td><td class="k">the book that I bought</td></tr><tr><td class="k">the man who I saw him</td><td class="k">the man I saw</td></tr></table></div>
<h3>حذف that</h3>
<p>إذا جاء بعد that فاعل وفعل، يمكن حذفها، وهذا هو الغالب في الكلام.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|الفيلم الذي شاهدناه كان رائعا}}
<h3>الظرف where للأماكن</h3>
<p>بدلا من "الذي… فيه" نستخدم where.</p>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|المقهى الذي التقينا فيه}}
<div class="tip">نتذكر الترتيب: <b>الاسم أولا ثم الوصف</b>، بلا ضمير عائد. ولا نستخدم what هنا: <b>the book what I bought</b> ✗</div>`,
check:[["الكلمة المناسبة للفراغ: I have a friend ___ lives in Busan",["which","who","what","he"],1,"للناس نستخدم who"],["بالإنجليزية: \"الكتاب الذي اشتريته\"",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"الاسم أولا ثم الوصف، بلا ضمير عائد"],["الجملة الصحيحة:",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"الاسم the man أولا، ثم جملة الصلة who lives next door"]],
practice:[
["mc","الكلمة المناسبة للفراغ: I have a friend ___ speaks English","who","which","what","she","للناس نستخدم who، ولا نضيف ضميرا بعدها"],
["mc","بالإنجليزية: \"الكتاب الذي اشتريته\"","the book that I bought","the I bought book","the book what I bought","the bought I book","الاسم أولا ثم الوصف"],
["mc","بالإنجليزية: \"الرجل الذي يسكن في البيت المجاور\"","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","للناس نستخدم who"],
["mc","الكلمة المناسبة للفراغ: This is the phone ___ I want","that","who","what","it","للأشياء نستخدم that، ولا نكرر الضمير العائد بعد want"],
["mc","بالإنجليزية: \"الفيلم الذي شاهدناه\"","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","يمكن حذف that، والاسم يأتي أولا"],
["or","هذا هو الكتاب الذي اشتريته","This is the book I bought","a what","الكتاب الذي اشتريته بالتحديد: أداة التعريف the"],
["or","عندي صديق يطبخ","I have a friend who cooks","the which","صديق نذكره أول مرة: أداة التنكير a، وللناس who"],
["or","الفيلم الذي شاهدناه كان رائعا","The movie we saw was great","A movies","الفيلم الذي شاهدناه بالتحديد: أداة التعريف the والمفرد movie"],
["fi","the man __ lives here","الرجل الذي يسكن هنا","who|that","what|he|which","للناس نستخدم who"],
["fi","the book __ I read","الكتاب الذي قرأته","that|which","who|what|it","للأشياء نستخدم that أو which"],
["fi","the cafe __ we met","المقهى الذي التقينا فيه","where","who|what|it","للمكان نستخدم where بدلا من \"الذي… فيه\""],
["ty","هذا هو الكتاب الذي اشتريته","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","الكلمات: the book · I bought — مع أداة التعريف","a","الكتاب الذي اشتريته بالتحديد: أداة التعريف the"],
["ty","عندي صديق يتكلم الكورية","I have a friend who speaks Korean|I have a friend that speaks Korean","الكلمات: a friend · who · speaks Korean — مع أداة التنكير","the","صديق نذكره أول مرة: أداة التنكير a"],
["ty","الفيلم الذي رأيناه كان جيدا","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","الكلمات: the movie · we saw · was great","what","الاسم أولا ثم الوصف، ولا نستخدم what هنا"]]},
{ id:"be-2", title:"فعل الكينونة: متى يلزم ومتى لا يلزم", blurb:"نضع be حيث لا فعل في الجملة العربية، ولا نضعه قبل فعل آخر.", deck:"التعريف بالنفس", body:`
<p>في درس فعل الكينونة رأينا أن الجملة الاسمية العربية لا فعل فيها: "هو طويل"، "هي طبيبة". أما الإنجليزية فلا تقوم فيها جملة بلا فعل. والآن، بعد أن تعلمنا الماضي والمضارع المستمر، نعود إلى <b>فعل الكينونة (be)</b> لنرى متى يلزم ومتى لا يلزم. فهناك خطآن متعاكسان: أن نحذفه حيث يلزم، وأن نضعه حيث لا يلزم.</p>
<h3>حيث لا فعل في العربية نضع be</h3>
<p>قبل الصفة والاسم والمكان والعمر نضع am أو is أو are. وفي الماضي نضع was أو were، كما تضع العربية "كان".</p>
{{ex:He is tall.|/hi ɪz ˈtɔːl/|هو طويل}}{{ex:She's a doctor.|/ʃiz ə ˈdɑːktər/|هي طبيبة}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|أنا في البيت}}{{ex:I'm 25 years old.|/aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/|عمري 25 سنة}}{{ex:It was hot yesterday.|/ɪt wəz ˈhɑːt ˈjestərdeɪ/|كان الجو حارا أمس}}
<p>فلا نقول <b>He tall.</b> ✗ والصواب: <b>He is tall.</b> ✓</p>
<h3>حيث يوجد فعل آخر لا نضع be</h3>
<p>إذا كان في الجملة فعل مثل work أو cost أو agree، فهو يكفي وحده. وكلمة agree فعل في الإنجليزية، لا صفة مثل "موافق".</p>
{{ex:She works at a hospital.|/ʃi ˈwɜːrks ət ə ˈhɑːspɪtl/|هي تعمل في مستشفى}}{{ex:It costs ten dollars.|/ɪt ˈkɔːsts ˈten ˈdɑːlərz/|ثمنه عشرة دولارات}}{{ex:I agree.|/aɪ əˈgriː/|أنا موافق}}
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td class="k">She is study.</td><td class="k">She studies.</td></tr><tr><td class="k">It is cost ten dollars.</td><td class="k">It costs ten dollars.</td></tr><tr><td class="k">I am agree.</td><td class="k">I agree.</td></tr></table></div>
<p>في ما تعلمناه حتى الآن، يجتمع be مع فعل آخر في صيغة -ing فقط: <b>She's studying now.</b> بمعنى "هي تدرس الآن".</p>
<h3>الاختبار: هل في الجملة فعل آخر غير be؟</h3>
<div class="tbl"><table><tr><th>الجواب</th><th>ماذا نفعل؟</th><th>مثال</th></tr><tr><td>لا</td><td>نضع am / is / are أو was / were</td><td class="k">She is tired.</td></tr><tr><td>نعم</td><td>لا نضع be، إلا مع صيغة -ing</td><td class="k">She works. / She's working.</td></tr></table></div>
<h3>السؤال والنفي</h3>
<p>مع be نقدم الفعل نفسه أو ننفيه، ومع الفعل الآخر نستخدم does و doesn't.</p>
{{ex:Is she a teacher?|/ɪz ʃi ə ˈtiːtʃər/|هل هي معلمة؟}}{{ex:Does she work here?|/dəz ʃi ˈwɜːrk ˈhɪr/|هل تعمل هنا؟}}{{ex:He isn't busy.|/hi ˈɪznt ˈbɪzi/|هو ليس مشغولا}}{{ex:He doesn't like coffee.|/hi ˈdʌznt ˈlaɪk ˈkɔːfi/|هو لا يحب القهوة}}
<h3>من العربية إلى الإنجليزية</h3>
<div class="tbl"><table><tr><th>بالعربية</th><th>نوع الجملة</th><th>بالإنجليزية</th></tr><tr><td>هي طالبة</td><td>جملة اسمية</td><td class="k">She's a student.</td></tr><tr><td>الجو حار</td><td>جملة اسمية</td><td class="k">It's hot.</td></tr><tr><td>أنا في البيت</td><td>جملة اسمية</td><td class="k">I'm at home.</td></tr><tr><td>هي تدرس</td><td>جملة فعلية</td><td class="k">She studies.</td></tr><tr><td>كان الفيلم مملا</td><td>كان وخبرها</td><td class="k">The movie was boring.</td></tr></table></div>
<div class="tip">القاعدة باختصار: الجملة الاسمية العربية تحتاج في الإنجليزية فعل الكينونة، والجملة الفعلية تكتفي بفعلها. <b>She is study.</b> ✗ و <b>She student.</b> ✗ والصواب: <b>She studies.</b> و <b>She's a student.</b> ✓</div>`,
check:[["بالإنجليزية: \"هو طويل\"",["He tall.","He is tall.","He does tall.","He be tall."],1,"الجملة الاسمية تحتاج في الإنجليزية فعل الكينونة is"],["الجملة الصحيحة:",["She is study English.","She studying English.","She is studies English.","She studies English."],3,"في الجملة فعل آخر هو studies، فلا نضع is قبله"],["الكلمة المناسبة للفراغ: ___ she work here",["Does","Is","Are","Do"],0,"في الجملة فعل آخر هو work، فالسؤال يكون مع Does"]],
practice:[
["mc","بالإنجليزية: \"هي طالبة\"","She's a student.","She student.","She a student.","She is student.","الجملة تحتاج فعل الكينونة is وأداة التنكير a"],
["mc","بالإنجليزية: \"الجو حار اليوم\"","It's hot today.","It hot today.","Hot today.","Is hot today.","لا جملة بلا فعل في الإنجليزية، فنقول It is"],
["mc","بالإنجليزية: \"الكتاب يكلف عشرة دولارات\"","The book costs ten dollars.","The book is cost ten dollars.","The book is costs ten dollars.","The book costing ten dollars.","الفعل costs موجود، فلا نضع قبله is"],
["mc","بالإنجليزية: \"أنا موافق\"","I agree.","I am agree.","I agrees.","I agreeing.","كلمة agree فعل في الإنجليزية، لا صفة، فلا نضع قبلها am"],
["mc","بالإنجليزية: \"كانوا في البيت أمس\"","They were at home yesterday.","They at home yesterday.","They was at home yesterday.","They are at home yesterday.","في الماضي نستخدم were مع they"],
["or","أخي طبيب","My brother is a doctor","the","اسم المهنة يحتاج أداة التنكير a، والجملة تحتاج فعل الكينونة is"],
["or","المفاتيح على الطاولة","The keys are on the table","key","المفاتيح أكثر من واحد: صيغة الجمع keys، ومعها are"],
["or","هي تعمل في مستشفى","She works at a hospital","is the","الفعل works موجود فلا نضع is، والمستشفى غير محدد: أداة التنكير a"],
["or","كان الفيلم مملا","The movie was boring","bored","الفيلم هو الممل: boring، وفعل الكينونة was ضروري في الماضي"],
["fi","My parents __ teachers.","والداي معلمان","are","is|am|be","والداي بمعنى they، ومعها are"],
["fi","It __ ten dollars.","يكلف عشرة دولارات","costs","is cost|is costs|costing","الفعل costs يكفي وحده بلا is"],
["fi","Where __ you yesterday?","أين كنت أمس؟","were","was|are|did","سؤال عن الماضي مع you: were"],
["ty","أنا مهندس","I'm an engineer","الكلمة: engineer — مع أداة التنكير","a","كلمة engineer تبدأ بصوت متحرك: أداة التنكير an، ومعها am"],
["ty","الأطفال في المدرسة","The children are at school|The kids are at school|The children are in school|The kids are in school","الكلمات: children · school — مع فعل الكينونة","is","الأطفال المعروفون: أداة التعريف the، و are مع الفاعل الجمع"],
["ty","هو لا يحب القهوة","He doesn't like coffee","الكلمات: like · coffee — النفي مع does","isn't","الفعل like موجود، فننفي باستخدام doesn't وليس isn't"],
["ty","كانت الغرفة نظيفة","The room was clean","الكلمات: room · clean — في الماضي","is","الغرفة معروفة: أداة التعريف the، وفعل الكينونة في الماضي was"]]}];
