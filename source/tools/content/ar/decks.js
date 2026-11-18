/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   ar-en: pron = IPA exactly as the zh course writes it (docs/profiles/ar.md §6, tools/content/ar/PRON-RULES.md); must match profile.json pronPattern.
   Deck names are FINAL (tools/content/ar/DECKNAMES.md). Deck 21 is ar-only (profile §9); deck 18 has ar-only cards appended (profile §9).
   Notes and meanings: Modern Standard Arabic, no gendered address, English bare, no trailing English punctuation (profile §2, §10). */
module.exports = {
"التحيات": `
Hello. | /həˈloʊ/ | مرحبا | أبسط تحية وأكثرها استعمالا، تصلح في كل مكان ومع كل شخص
Hi! | /ˈhaɪ/ | أهلا! / مرحبا بك | أخف وأقرب من Hello، وفي أمريكا يقولها الزملاء في العمل أيضا
Hey! | /ˈheɪ/ | هاي! / أهلا (بين الأصدقاء) | للأصدقاء والمعارف، وقد تبدو غير مهذبة مع شخص لا نعرفه
Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ | صباح الخير | تقال حتى الظهر، وقد تختصر إلى Morning فقط
Good afternoon. | /ˈgʊd ˌæftərˈnuːn/ | طاب يومك (تحية بعد الظهر) | ليس في العربية تحية خاصة بما بعد الظهر، أما الإنجليزية فتفرق بين afternoon (من الظهر حتى السادسة تقريبا) و evening
Good evening. | /ˈgʊd ˈiːvnɪŋ/ | مساء الخير | تحية عند اللقاء في المساء فقط، أما Good night فللوداع
How are you? | /ˈhaʊ ər ju/ | كيف حالك؟ | تحية أكثر منها سؤالا حقيقيا عن الحال، والرد القصير المعتاد: Good, thanks، ثم نسأل بدورنا. لا حاجة إلى سلسلة طويلة من السؤال عن الأهل
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/ | بخير، شكرا. وأنت؟ | جملة الكتب المدرسية I'm fine, thank you صحيحة لكنها رسمية، و I'm good أكثر طبيعية في الكلام اليومي
What's up? | /ˈwʌts ˈʌp/ | ما الأخبار؟ | تحية غير رسمية بين الأصدقاء، ولا تنتظر جوابا مفصلا. الرد المعتاد: Not much
Not much. | /ˈnɑːt ˈmʌtʃ/ | لا جديد | أشهر رد على What's up، ويمكن أن نعيد السؤال بعده: Not much, you
How's it going? | /ˈhaʊz ɪt ˈgoʊɪŋ/ | كيف تسير الأمور؟ | صيغة غير رسمية من How are you، والرد المعتاد: Pretty good
Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | تشرفت بمعرفتك | تقال في اللقاء الأول فقط، والرد: Nice to meet you, too
Long time no see! | /ˈlɔːŋ ˈtaɪm ˈnoʊ ˈsiː/ | لم أرك منذ زمن طويل! | للأصدقاء والمعارف، وبصيغة أكثر رسمية: It's been a while
See you later. | /ˈsiː ju ˈleɪtər/ | أراك لاحقا | تقال عند الوداع حتى لو لم يكن هناك موعد للقاء قريب
Take care. | /ˈteɪk ˈker/ | مع السلامة / اعتن بنفسك | وداع دافئ يكتب كثيرا في آخر الرسائل، وهو أقرب مقابل لعبارة "مع السلامة"
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | يومك سعيد! | يقولها موظف المتجر كثيرا بعد الدفع، ويكفي الرد: You too
Bye! | /ˈbaɪ/ | إلى اللقاء! | قول Bye-bye بين الكبار يبدو طفوليا بعض الشيء
Good night. | /ˈgʊd ˈnaɪt/ | تصبح على خير / ليلة سعيدة | للوداع ليلا أو عند الذهاب إلى النوم فقط، وعند اللقاء مساء نقول Good evening
`,
"التعريف بالنفس": `
My name is Sara. | /maɪ ˈneɪm ɪz ˈserə/ | اسمي سارة | في الحديث اليومي نقول باختصار I'm Sara، ولا نحذف is: الجملة الإنجليزية تحتاج فعلا، أما "اسمي سارة" فلا فعل فيها
Please call me Jay. | /ˈpliːz ˈkɔːl mi ˈdʒeɪ/ | نادني جاي من فضلك | مفيدة عندما يكون الاسم طويلا أو صعب النطق على غير العرب، فنقترح صيغة قصيرة منه
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔːl ju/ | بماذا أناديك؟ | مفيدة عندما يصعب نطق اسم الشخص أو نريد معرفة الاسم المختصر الذي يفضله
Where are you from? | /ˈwer ər ju frʌm/ | من أين أنت؟ | من أول الأسئلة في السفر. حرف الجر from يأتي في آخر السؤال، لا في أوله كما في "من أين"
I'm from Egypt. | /aɪm frəm ˈiːdʒɪpt/ | أنا من مصر | أسماء الدول والمدن تبدأ بحرف كبير دائما، وذكر المدينة يفتح الحديث: I'm from Cairo, in Egypt
I live in Dubai. | /aɪ ˈlɪv ɪn ˌduːˈbaɪ/ | أعيش في دبي | الصوت v في live ليس في العربية: الأسنان العليا على الشفة السفلى مع اهتزاز في الحلق، فهي ليست فاء
I'm a student. | /aɪm ə ˈstuːdnt/ | أنا طالب | العربية ليس فيها أداة تنكير، فنقول "أنا طالب"، أما الإنجليزية فتحتاج a قبل المهنة: I'm student ✗ والصواب: I'm a student ✓
What do you do? | /ˈwʌt də ju ˈduː/ | ماذا تعمل؟ | السؤال المعتاد عن المهنة، وهو ألطف من What's your job
I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | أعمل في بنك | قبل الشركة أو مكان العمل نستخدم at، مع أن العربية تقول "في": I work at a hospital
I work in marketing. | /aɪ ˈwɜːrk ɪn ˈmɑːrkɪtɪŋ/ | أعمل في مجال التسويق | قبل المجال أو القسم نستخدم in، وقبل الشركة at
I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | عمري 25 سنة | لا نقول I have 25 years كما توحي "عمري" أو "لي 25 سنة"، فالعمر في الإنجليزية يأتي مع فعل الكينونة: I'm 25
I'm really into hiking. | /aɪm ˈriːəli ɪntə ˈhaɪkɪŋ/ | أحب رياضة المشي في الطبيعة كثيرا | طريقة طبيعية للحديث عن الهوايات، وهي أفضل من My hobby is
I like watching movies. | /aɪ ˈlaɪk ˈwɑːtʃɪŋ ˈmuːviz/ | أحب مشاهدة الأفلام | بعد like يأتي الفعل بصيغة -ing أو مع to، ولا نقول I like watch
I've been learning English for a year. | /aɪv bɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ fər ə ˈjɪr/ | أتعلم الإنجليزية منذ سنة | العربية تقول "أتعلم منذ سنة" بالمضارع، أما الإنجليزية فتستخدم have been مع -ing لما بدأ في الماضي وما زال مستمرا، و for للمدة
I'm here on vacation. | /aɪm ˈhɪr ɑːn veɪˈkeɪʃn/ | أنا هنا في إجازة | في الإنجليزية البريطانية: I'm here on holiday
I'm married. | /aɪm ˈmærid/ | أنا متزوج | والأعزب يقول I'm single. وفي البلدان الناطقة بالإنجليزية لا يحسن السؤال عن الزواج في أول لقاء
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgər ˈbrʌðər/ | عندي أخ أصغر مني | "عندي" تقابلها I have، ولا نقول I have brother بلا أداة التنكير a
`,
"عبارات أساسية 1": `
Excuse me. | /ɪkˈskjuːz mi/ | عفوا / لو سمحت | لمناداة شخص أو لطلب المرور، أما بعد الاصطدام بأحد فنقول Sorry
Thank you. | /ˈθæŋk ju/ | شكرا لك | الحرفان th هنا صوت الثاء العربية، فلا ننطقها تاء ولا سينا
Thanks a lot. | /ˈθæŋks ə ˈlɑːt/ | شكرا جزيلا | أخف وأقرب من Thank you
You're welcome. | /jʊr ˈwelkəm/ | لا شكر على واجب | وبأسلوب غير رسمي: Sure أو No problem أو Anytime
No problem. | /ˈnoʊ ˈprɑːbləm/ | لا مشكلة | رد شائع جدا على الشكر. وفي problem صوت /p/، لا باء
I'm sorry. | /aɪm ˈsɑːri/ | أنا آسف | للاعتذار الحقيقي، أما عند اصطدام خفيف فتكفي كلمة Sorry
Yes, please. | /ˈjes ˈpliːz/ | نعم، من فضلك | رد على عرض مثل Would you like some water، ونضيف please ليكون القبول مهذبا
No, thank you. | /ˈnoʊ ˈθæŋk ju/ | لا، شكرا | للرفض بأدب، وهي ألطف بكثير من No وحدها. وبأسلوب غير رسمي: I'm good, thanks
Sorry? | /ˈsɑːri/ | عفوا؟ ماذا قلت؟ | مع رفع النبرة في آخرها تعني "أعد ما قلت من فضلك"، وهي في أمريكا أشيع من Pardon
Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | هل يمكنك أن تعيد ما قلت؟ | لا حرج في طلب الإعادة، فأهل اللغة أنفسهم يطلبونها كثيرا
Could you speak more slowly? | /kəd ju ˈspiːk ˈmɔːr ˈsloʊli/ | هل يمكنك أن تتكلم ببطء أكثر؟ | وإضافة please تجعلها أكثر تهذيبا
I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | لا أفهم | جملة جافة قليلا، وألطف منها: Sorry, I didn't quite catch that
Do you speak Arabic? | /də ju ˈspiːk ˈærəbɪk/ | هل تتكلم العربية؟ | صيغة Do you speak أكثر طبيعية وتهذيبا من Can you speak. وأسماء اللغات تبدأ بحرف كبير: Arabic
I speak a little English. | /aɪ ˈspiːk ə ˈlɪtl ˈɪŋglɪʃ/ | أتكلم الإنجليزية قليلا | عبارة a little تعني "قليلا"، أما little بلا a فتعني "قليل جدا، يكاد لا يكفي"
How do you say this in English? | /ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/ | كيف نقول هذا بالإنجليزية؟ | الإشارة إلى الشيء مع هذا السؤال طريقة سريعة لتعلم كلمة جديدة
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmiːn/ | ماذا يعني هذا؟ | للسؤال عن كلمة في قائمة الطعام أو على لافتة. ولا نقول What means this، فالسؤال يحتاج does
Can you help me? | /kən ju ˈhelp mi/ | هل يمكنك مساعدتي؟ | وبتهذيب أكثر: Could you help me
`,
"عبارات أساسية 2": `
Where's the restroom? | /ˈwerz ðə ˈrestruːm/ | أين دورة المياه؟ | في أمريكا restroom أو bathroom، وفي بريطانيا toilet. وكلمة toilet في أمريكا تعني المرحاض نفسه
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | بكم هذا؟ | ولأكثر من شيء: How much are these
Is there an ATM around here? | /ɪz ðer ən ˌeɪ tiː ˈem əˈraʊnd ˈhɪr/ | هل يوجد صراف آلي قريب من هنا؟ | اختصار ATM ينطق حرفا حرفا ويبدأ بصوت متحرك، فنقول an وليس a
Can I get the Wi-Fi password? | /kən aɪ ˈget ðə ˈwaɪfaɪ ˈpæswɜːrd/ | ما كلمة مرور الواي فاي من فضلك؟ | ويمكن أن نسأل أيضا: Is there Wi-Fi here، وفي password صوت /p/ في أولها
I'm lost. | /aɪm ˈlɔːst/ | ضللت الطريق | لا ننسى am: I'm lost، أما I lost فتعني "خسرت" أو "أضعت"
Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | هل يمكنني الدفع بالبطاقة؟ | الصوت p في pay ليس باء: الشفتان كما في الباء، لكن بلا اهتزاز في الحلق ومع دفعة هواء، وإلا سمعها السامع bay
One moment, please. | /ˈwʌn ˈmoʊmənt ˈpliːz/ | لحظة من فضلك | عبارة مهذبة نسمعها كثيرا في المتاجر وعلى الهاتف
Just a second. | /ˈdʒʌst ə ˈsekənd/ | ثانية واحدة | غير رسمية، وأقصر منها: Just a sec
No worries. | /ˈnoʊ ˈwɜːriz/ | لا عليك | شائعة جدا في أستراليا وبريطانيا، وفي أمريكا أيضا
That's okay. | /ˈðæts oʊˈkeɪ/ | لا بأس | رد على من يعتذر، ومثلها Don't worry about it
Of course. | /əv ˈkɔːrs/ | طبعا / بالتأكيد | لقبول طلب. أما جوابا عن سؤال عادي فقد توحي بأن السؤال لم يكن ضروريا، فالأفضل أن تقال بنبرة لطيفة
I'm not sure. | /aɪm ˈnɑːt ˈʃʊr/ | لست متأكدا | ألطف من I don't know
I have a question. | /aɪ ˈhæv ə ˈkwestʃən/ | عندي سؤال | لا ننسى a قبل question، وفي الصف أو الاجتماع نقول: Can I ask a question
Can you write it down? | /kən ju ˈraɪt ɪt ˈdaʊn/ | هل يمكنك أن تكتبه لي؟ | أفضل حل عندما لا نفهم عنوانا أو رقما أو اسما
Can I take a picture? | /kən aɪ ˈteɪk ə ˈpɪktʃər/ | هل يمكنني التقاط صورة؟ | عبارة take a picture مثل "أخذ صورة" في العربية تماما. ومن الأدب أن نسأل قبل التصوير في المتاحف والمتاجر
Could you take a picture of us? | /kəd ju ˈteɪk ə ˈpɪktʃər əv əs/ | هل يمكنك أن تلتقط لنا صورة؟ | وبعدها نقول: Thank you so much
After you. | /ˈæftər ˈjuː/ | تفضل أولا | للتنازل عن الدور عند الباب أو المصعد، وتقابل "تفضل" في هذا الموقف. وكلمة you هنا منبورة
Watch out! | /ˈwɑːtʃ ˈaʊt/ | انتبه! | نصيح بها عند الخطر، ومثلها Look out
`,
"الاتجاهات والمواصلات": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈget tə ðə ˈsʌbweɪ ˈsteɪʃn/ | كيف أصل إلى محطة المترو؟ | في بريطانيا underground أو tube station، ويمكن تغيير المكان في آخر الجملة
Is it far from here? | /ɪz ɪt ˈfɑːr frəm ˈhɪr/ | هل هو بعيد من هنا؟ | لا نحذف is كما في "هل هو بعيد"، وللسؤال عن المسافة: How far is it
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔːkɪŋ ˈdɪstəns/ | هل يمكن الوصول إليه مشيا؟ | ويمكن أيضا: Can I walk there
Go straight. | /ˈgoʊ ˈstreɪt/ | امش إلى الأمام مباشرة | في أمريكا تقاس المسافة داخل المدينة بالمربعات السكنية: Go straight for two blocks
Turn left at the corner. | /ˈtɜːrn ˈleft ət ðə ˈkɔːrnər/ | انعطف يسارا عند الزاوية | وعند الإشارة الضوئية: at the light
It's on your right. | /ɪts ɑːn jʊr ˈraɪt/ | إنه على يمينك | الراء الأمريكية r لا تضرب كالراء العربية، بل يلتف اللسان إلى الخلف دون أن يلمس شيئا
It's across the street. | /ɪts əkrɔːs ðə ˈstriːt/ | إنه في الجهة المقابلة من الشارع | عبارة across from تعني "مقابل"، مثل across from the bank
It's next to the bank. | /ɪts ˈnekst tə ðə ˈbæŋk/ | إنه بجانب البنك | الحرف t في آخر next وأول to تلتقيان، فننطق واحدة فقط
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoʊz ˌdaʊnˈtaʊn/ | أي خط يذهب إلى وسط المدينة؟ | لا نضع to قبل downtown
Where do I transfer? | /ˈwer də aɪ trænsˈfɜːr/ | أين أبدل القطار؟ | في بريطانيا نقول change بدلا منها
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgoʊ tə ði ˈerpɔːrt/ | هل تذهب هذه الحافلة إلى المطار؟ | أداة التعريف the قبل صوت متحرك تنطق /ði/، كما في the airport
Which stop should I get off at? | /ˈwɪtʃ ˈstɑːp ʃəd aɪ ˈget ˈɔːf æt/ | في أي محطة يجب أن أنزل؟ | الفعل get off يعني النزول من الحافلة أو القطار، وحرف الجر at يبقى في آخر السؤال
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔːstən ˈpliːz/ | تذكرة واحدة إلى بوسطن من فضلك | قبل الوجهة نستخدم to
Round trip or one way? | /ˈraʊnd ˈtrɪp ər ˈwʌn ˈweɪ/ | ذهاب وعودة أم ذهاب فقط؟ | وبالإنجليزية البريطانية: Return or single
Can you take me to this address? | /kən ju ˈteɪk mi tə ˈðɪs ˈædres/ | هل يمكنك أن توصلني إلى هذا العنوان؟ | في سيارة الأجرة أو سيارة التطبيق، عرض العنوان على الهاتف يمنع الخطأ
Could you pull over here? | /kəd ju ˈpʊl ˈoʊvər ˈhɪr/ | هل يمكنك أن تتوقف هنا؟ | لطلب التوقف للنزول من السيارة. وتبدأ pull بالصوت /p/، ولو نطقناها بالباء لصارت bull (ثور)
How long does it take? | /ˈhaʊ ˈlɔːŋ dəz ɪt ˈteɪk/ | كم يستغرق الطريق؟ | والجواب مثلا: About 20 minutes
Is this seat taken? | /ɪz ˈðɪs ˈsiːt ˈteɪkən/ | هل هذا المقعد محجوز؟ | إن كان فارغا فالجواب No, go ahead، ونمد الياء في seat لأنها غير sit (يجلس)
`,
"الطلب في المطعم": `
A table for two, please. | /ə ˈteɪbl fər ˈtuː ˈpliːz/ | طاولة لشخصين من فضلك | في المطاعم الأمريكية ننتظر عادة حتى يرشدنا الموظف إلى الطاولة
Do you have a reservation? | /də ju ˈhæv ə ˌrezərˈveɪʃn/ | هل لديك حجز؟ | يسأل الموظف هذا السؤال، والجواب مثلا: Yes, under Haddad
Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | هل يمكنني رؤية قائمة الطعام؟ | النبر في menu على المقطع الأول
What do you recommend? | /ˈwʌt də ju ˌrekəˈmend/ | ماذا تقترح علي؟ | ويمكن أيضا: What's popular here
I'll have the steak. | /aɪl ˈhæv ðə ˈsteɪk/ | سآخذ شريحة اللحم | القاعدة الأساسية للطلب: I'll have ثم اسم الطبق
Can I get a Coke? | /kən aɪ ˈget ə ˈkoʊk/ | كولا من فضلك | نسمي الكولا غالبا Coke، ونضع a قبل المشروب الواحد
Medium rare, please. | /ˈmiːdiəm ˈrer ˈpliːz/ | استواء خفيف من فضلك (وردية من الداخل) | جواب How would you like your steak، والمستوية تماما: well done
No onions, please. | /ˈnoʊ ˈʌnjənz ˈpliːz/ | بدون بصل من فضلك | وبمعنى قريب: Can I get it without onions
I'm allergic to peanuts. | /aɪm əˈlɜːrdʒɪk tə ˈpiːnʌts/ | عندي حساسية من الفول السوداني | حرف الجر هنا to وليس from كما توحي "من". والنبر في allergic على المقطع الثاني
Is it spicy? | /ɪz ɪt ˈspaɪsi/ | هل هو حار؟ | كلمة spicy تعني أن فيه توابل حارة، أما hot فقد تعني "ساخن" أو "حار"
Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | نريد بعض الماء من فضلك | الماء water اسم غير معدود، فنقول some water بلا s. والماء العادي مجاني عادة في المطاعم الأمريكية
Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | كان كل شيء رائعا | جواب الموظف حين يسأل How is everything، ولا نحذف was
Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | الحساب من فضلك | كلمة check هنا تعني فاتورة المطعم، لا الشيك المصرفي، وفي بريطانيا: the bill
Can we split the bill? | /kən wi ˈsplɪt ðə ˈbɪl/ | هل يمكننا تقسيم الحساب؟ | ويقال أيضا separate checks. وتبدأ split بثلاثة أصوات ساكنة متتالية spl بلا همزة قبلها
It's on me. | /ɪts ɑːn ˈmiː/ | الحساب علي | ومثلها: My treat
Can I get this to go? | /kən aɪ ˈget ˈðɪs tə ˈgoʊ/ | هل يمكنني أخذ هذا معي؟ | ولأخذ ما تبقى من الطعام: Can I get a box
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkluːdɪd/ | هل البقشيش مشمول؟ | في المطاعم الأمريكية يضاف عادة بقشيش منفصل من 15% إلى 20%، وهو أكثر مما اعتدناه في معظم البلدان العربية
`,
"المقهى والبقالة": `
Can I get an iced Americano? | /kən aɪ ˈget ən ˈaɪst əˌmerɪˈkɑːnoʊ/ | أمريكانو مثلج من فضلك | الاسم Americano يبدأ بصوت متحرك، فنقول an. و Can I get أشيع صيغة لطلب المشروبات
What size would you like? | /ˈwʌt ˈsaɪz wəd ju ˈlaɪk/ | أي حجم تريد؟ | سؤال يطرحه الموظف
Small, please. | /ˈsmɔːl ˈpliːz/ | صغير من فضلك | في ستاربكس أسماء الأحجام: tall و grande و venti
For here or to go? | /fər ˈhɪr ər tə ˈgoʊ/ | للتناول هنا أم للأخذ؟ | وبالإنجليزية البريطانية: Eat in or take away
Can I get oat milk instead? | /kən aɪ ˈget ˈoʊt ˈmɪlk ɪnˈsted/ | هل يمكن أن يكون بحليب الشوفان بدلا من ذلك؟ | كلمة instead تعني "بدلا من ذلك"، وقد تضاف تكلفة
Less ice, please. | /ˈles ˈaɪs ˈpliːz/ | ثلج أقل من فضلك | وبلا ثلج: No ice, please. والثلج ice اسم غير معدود، فلا نضيف إليه s
Decaf, please. | /ˈdiːkæf ˈpliːz/ | منزوع الكافيين من فضلك | اختصار decaffeinated
Can I get a name for the order? | /kən aɪ ˈget ə ˈneɪm fər ði ˈɔːrdər/ | ما الاسم على الطلب؟ | يكتب الموظف الاسم على الكوب، والأسماء القصيرة الواضحة مثل Sara أو Omar تسهل الأمر
Do you need a bag? | /də ju ˈniːd ə ˈbæg/ | هل تحتاج كيسا؟ | وإن لم نحتج إليه: No, I'm good
Can I get a receipt? | /kən aɪ ˈget ə rɪˈsiːt/ | أريد إيصالا من فضلك | حرف p في receipt لا ينطق
Where can I find batteries? | /ˈwer kən aɪ ˈfaɪnd ˈbætəriz/ | أين أجد البطاريات؟ | جملة صالحة للسؤال عن مكان أي سلعة، و batteries بصيغة الجمع
Do you sell phone chargers? | /də ju ˈsel ˈfoʊn ˈtʃɑːrdʒərz/ | هل تبيعون شواحن الهاتف؟ | ومثلها Do you have، والسؤال يحتاج do لأن sell فعل
Can you heat this up? | /kən ju ˈhiːt ˈðɪs ˈʌp/ | هل يمكنك تسخين هذا؟ | عبارة heat this up تنطق متصلة كأنها كلمة واحدة
That's it. | /ˈðæts ˈɪt/ | هذا كل شيء | جواب الموظف حين يسأل Anything else
Here you go. | /ˈhɪr ju ˈgoʊ/ | تفضل | عند تسليم النقود أو أي شيء
Keep the change. | /ˈkiːp ðə ˈtʃeɪndʒ/ | احتفظ بالباقي | تقال لسائق الأجرة أو عامل التوصيل بدلا من البقشيش
`,
"التسوق والدفع": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | أتفرج فقط، شكرا | جواب الموظف حين يسأل Can I help you find anything
Do you have this in a medium? | /də ju ˈhæv ˈðɪs ɪn ə ˈmiːdiəm/ | هل عندكم هذا بمقاس متوسط؟ | المقاسات: small و medium و large
Do you have it in black? | /də ju ˈhæv ɪt ɪn ˈblæk/ | هل عندكم منه باللون الأسود؟ | قبل اللون نستخدم in
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑːn/ | هل يمكنني تجربته؟ | الفعل try on يعني تجربة الملابس أو الحذاء بلبسها
Where's the fitting room? | /ˈwerz ðə ˈfɪtɪŋ ˈruːm/ | أين غرفة القياس؟ | في بريطانيا: changing room
It's too big. | /ɪts ˈtuː ˈbɪg/ | إنه كبير جدا | لا نحذف is كما نحذف الفعل في "كبير جدا"، وللصغير: It's too small
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | إنه ضيق قليلا | وللواسع: It's a bit loose
Is this on sale? | /ɪz ˈðɪs ɑːn ˈseɪl/ | هل عليه تخفيض؟ | عبارة on sale تعني عليه تخفيض، أما for sale فتعني "معروض للبيع"
Can you give me a discount? | /kən ju ˈgɪv mi ə ˈdɪskaʊnt/ | هل يمكنك أن تعطيني خصما؟ | في المتاجر الأمريكية العادية لا مساومة تقريبا، بخلاف الأسواق الشعبية والبيع المستعمل
I'll take it. | /aɪl ˈteɪk ɪt/ | سآخذه | عند قرار الشراء، ولأكثر من قطعة: I'll take them
Cash or card? | /ˈkæʃ ər ˈkɑːrd/ | نقدا أم بالبطاقة؟ | سؤال نسمعه دائما عند الصندوق
Do you take Apple Pay? | /də ju ˈteɪk ˈæpl ˈpeɪ/ | هل تقبلون الدفع بأبل باي؟ | الفعل take هنا بمعنى "يقبل" وسيلة الدفع. وفي Apple و Pay صوت /p/، لا باء
Can I get a refund? | /kən aɪ ˈget ə ˈriːfʌnd/ | هل يمكنني استرداد المبلغ؟ | الاحتفاظ بالإيصال ضروري
I'd like to exchange this. | /aɪd ˈlaɪk tu ɪksˈtʃeɪndʒ ˈðɪs/ | أريد أن أستبدل هذا | ونذكر السبب: It's the wrong size
Can you gift wrap it? | /kən ju ˈgɪft ˈræp ɪt/ | هل يمكنك تغليفه كهدية؟ | حرف w في wrap لا ينطق
Does that include tax? | /dəz ˈðæt ɪnˈkluːd ˈtæks/ | هل يشمل ذلك الضريبة؟ | في أمريكا لا تكون الضريبة غالبا ضمن السعر المكتوب، فيرتفع المبلغ عند الدفع
`,
"الأرقام والوقت والتاريخ": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | كم الساعة؟ | ومع شخص غريب: Excuse me, do you have the time
It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ | الساعة الثالثة والنصف | ونقول أيضا half past three، وهي أشيع في بريطانيا
It's a quarter to five. | /ɪts ə ˈkwɔːrtər tə ˈfaɪv/ | الساعة الخامسة إلا ربعا | كلمة quarter تعني ربع ساعة، ويصح أيضا four forty-five
At noon | /ət ˈnuːn/ | عند الظهر | ومنتصف الليل midnight، وكلاهما أوضح من الرقم 12 مع صباحا ومساء
What's the date today? | /ˈwʌts ðə ˈdeɪt təˈdeɪ/ | ما تاريخ اليوم؟ | وللسؤال عن يوم الأسبوع: What day is it today
It's May 3rd. | /ɪts ˈmeɪ ˈθɜːrd/ | اليوم 3 مايو | التاريخ يقرأ بالعدد الترتيبي: first و second و third. وفي أمريكا يكتب الشهر قبل اليوم، فالتاريخ 5/3 يعني 3 مايو لا 5 مارس
My birthday is in October. | /maɪ ˈbɜːrθdeɪ ɪz ɪn ɑːkˈtoʊbər/ | عيد ميلادي في أكتوبر | قبل الشهر نستخدم in، وقبل التاريخ on: on October 5th
On Monday | /ɑːn ˈmʌndeɪ/ | يوم الاثنين | قبل أيام الأسبوع نستخدم on، لا in كما توحي "في يوم الاثنين". وللتكرار كل أسبوع: on Mondays
Next weekend | /ˈnekst ˈwiːkend/ | عطلة نهاية الأسبوع القادمة | لا نضع حرف جر قبل next و last و this: next weekend وليس in next weekend
The day after tomorrow | /ðə ˈdeɪ æftər təˈmɑːroʊ/ | بعد غد | وأول أمس: the day before yesterday
Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | ثلاثة عشر أم ثلاثون؟ | في 13 يكون النبر على teen وتمد الياء، وفي 30 يكون النبر على المقطع الأول. من المهم التأكد عند سماع الأسعار
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlərz/ | خمسة عشر دولارا | السعر 15.50 يقرأ fifteen fifty
Two hundred and fifty | /ˈtuː ˈhʌndrəd ənd ˈfɪfti/ | مئتان وخمسون (250) | العربية تقول الآحاد قبل العشرات ("خمسة وعشرون")، أما الإنجليزية فالعشرات أولا: twenty-five. وفي أمريكا تحذف and كثيرا: two hundred fifty
Ten thousand | /ˈten ˈθaʊznd/ | عشرة آلاف (10,000) | تقرأ كما في العربية: ten ثم thousand، لكن بلا s بعد العدد رغم أن العربية تقول "آلاف": ten thousands ✗
One million | /ˈwʌn ˈmɪljən/ | مليون (1,000,000) | وعشرة ملايين ten million، بلا s أيضا رغم "ملايين" في العربية
Twice a week | /ˈtwaɪs ə ˈwiːk/ | مرتين في الأسبوع | نقول once للمرة الواحدة، و twice للمرتين، ثم three times. ونقول a week بمعنى "في الأسبوع"
In ten minutes | /ɪn ˈten ˈmɪnɪts/ | بعد عشر دقائق | حرف الجر in قبل مدة في المستقبل تعني "بعد"، لا "في غضون"
`,
"دردشة يومية": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwiːkend/ | كيف كانت عطلة نهاية الأسبوع؟ | سؤال معتاد في أول يوم عمل. و weekend تعني العطلة الأسبوعية أيا كانت أيامها، والجواب جملة أو جملتان ثم نسأل بدورنا
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | كانت مريحة إلى حد كبير | كلمة pretty هنا بمعنى "إلى حد كبير"، لا "جميلة"
Any plans for the weekend? | /ˈeni ˈplænz fər ðə ˈwiːkend/ | هل عندك خطط لعطلة نهاية الأسبوع؟ | سؤال معتاد في آخر أيام العمل، وإن لم تكن هناك خطط: Not really, just relaxing
Nice weather today, huh? | /ˈnaɪs ˈweðər təˈdeɪ ˈhʌ/ | الجو جميل اليوم، أليس كذلك؟ | الطقس أسلم موضوع للحديث مع أي شخص، أما الدين والسياسة والراتب فلا تصلح لبدء الحديث مع غريب
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | الجو بارد جدا اليوم | الإنجليزية تحتاج it في كلام الطقس حيث تقول العربية "الجو"، وللحر الشديد: It's so hot
How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | منذ متى تعيش هنا؟ | العربية تقول "تعيش" بالمضارع، والإنجليزية تستخدم المضارع التام have lived. والجواب مثلا: About three years
Have you been to Morocco? | /həv ju bɪn tə məˈrɑːkoʊ/ | هل زرت المغرب؟ | نستخدم have been to للسؤال عن زيارة مكان في أي وقت من الحياة
What do you do for fun? | /ˈwʌt də ju ˈduː fər ˈfʌn/ | ماذا تفعل في وقت فراغك؟ | سؤال عن الهوايات أكثر طبيعية بكثير من What's your hobby
Have you seen any good shows lately? | /həv ju ˈsiːn ˈeni ˈgʊd ˈʃoʊz ˈleɪtli/ | هل شاهدت مسلسلات جيدة مؤخرا؟ | كلمة show تعني برنامجا أو مسلسلا تلفزيونيا، و any تأتي في السؤال مع صيغة الجمع shows
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | يبدو ذلك ممتعا | للتفاعل مع كلام المتحدث، ومثلها That sounds great
Same here. | /ˈseɪm ˈhɪr/ | وأنا كذلك | وبأسلوب غير رسمي: Same
Me neither. | /ˈmiː ˈniːðər/ | ولا أنا | للموافقة على جملة منفية: I don't like it، والرد Me neither لا Me too
I know, right? | /aɪ ˈnoʊ ˈraɪt/ | فعلا! معك حق! | تعبير غير رسمي عن الموافقة الشديدة
Oh, really? | /ˈoʊ ˈriːəli/ | حقا؟ | تفاعل يظهر الاهتمام، مع رفع النبرة في آخره
By the way | /baɪ ðə ˈweɪ/ | بالمناسبة | لتغيير الموضوع، وتكتب في الرسائل BTW
How's work? | /ˈhaʊz ˈwɜːrk/ | كيف العمل؟ | سؤال بين المعارف، والجواب مثلا: Busy, but good
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/ | سعدت بالحديث معك | لإنهاء المحادثة بلطف
`,
"المشاعر وردود الفعل": `
I'm so happy for you! | /aɪm ˈsoʊ ˈhæpi fər ju/ | فرحت لك كثيرا! | لمشاركة الآخرين فرحتهم بخبر سعيد
Congratulations! | /kənˌgrætʃəˈleɪʃnz/ | مبروك! / تهانينا! | تنتهي دائما بحرف s، واختصارها Congrats
That's awesome! | /ˈðæts ˈɔːsəm/ | رائع جدا! | رد فعل يستعمله الأمريكيون كثيرا جدا
No way! | /ˈnoʊ ˈweɪ/ | مستحيل! / غير معقول! | للدهشة، وللرفض أيضا: No way, I'm not doing that
Seriously? | /ˈsɪriəsli/ | جديا؟ | تعبر عن الدهشة أو الضيق بحسب النبرة
I'm so tired. | /aɪm ˈsoʊ ˈtaɪərd/ | أنا متعب جدا | لا نحذف am رغم أن "أنا متعب" بلا فعل، وللإرهاق الشديد: I'm exhausted
I'm stressed out. | /aɪm ˈstrest ˈaʊt/ | أنا تحت ضغط كبير | أكثر طبيعية من I have stress
I'm bored. | /aɪm ˈbɔːrd/ | أشعر بالملل | انتباه: I'm boring تعني "أنا شخص ممل". الشعور بصيغة -ed: bored، والشيء الذي يسببه بصيغة -ing: boring
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | أنا متحمس | عند انتظار شيء جميل. -ed للشعور نفسه، و exciting للشيء المثير
I'm nervous. | /aɪm ˈnɜːrvəs/ | أشعر بالتوتر | قبل المقابلة أو العرض، ونقول للآخر: Don't be nervous
That's too bad. | /ˈðæts ˈtuː ˈbæd/ | هذا مؤسف | لأسف خفيف، أما للأمور الجادة فنستخدم العبارة التالية
I'm sorry to hear that. | /aɪm ˈsɑːri tə ˈhɪr ˈðæt/ | يؤسفني سماع ذلك | ليست اعتذارا بل مواساة، و sorry هنا بمعنى "متأسف"
What a relief! | /ˈwʌt ə rɪˈliːf/ | يا له من ارتياح! / الحمد لله | تقال مع Phew عند زوال القلق
Oh my gosh! | /ˈoʊ maɪ ˈgɑːʃ/ | يا إلهي! | صيغة مخففة من Oh my God، وفي الرسائل OMG
I'm upset. | /aɪm ʌpˈset/ | أنا متضايق | شعور بين الغضب والحزن
That's so annoying. | /ˈðæts ˈsoʊ əˈnɔɪɪŋ/ | هذا مزعج جدا | أما قول You're annoying لشخص فقاس جدا
I can't wait! | /aɪ ˈkænt ˈweɪt/ | لا أطيق الانتظار! | للتشوق الشديد إلى شيء قادم، كما في العربية تماما
It's not a big deal. | /ɪts ˈnɑːt ə ˈbɪg ˈdiːl/ | ليس بالأمر المهم | لطمأنة من يعتذر
`,
"المجاملات والإعجاب": `
You look great! | /ju ˈlʊk ˈgreɪt/ | تبدو رائعا! | لمدح المظهر نقول You look ثم الصفة، وتصلح بين المعارف
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuːz/ | حذاؤك جميل جدا | الفعل love هنا بمعنى "يعجبني جدا"، ومدح ملابس الغرباء بلطف أمر عادي في أمريكا
That color looks good on you. | /ˈðæt ˈkʌlər ˈlʊks ˈgʊd ɑːn ju/ | هذا اللون يليق بك | عبارة look good on ثم الشخص تعني "يليق به"
You have a great smile. | /ju ˈhæv ə ˈgreɪt ˈsmaɪl/ | ابتسامتك جميلة | مجاملة دافئة بين الأصدقاء المقربين
You're so funny. | /jʊr ˈsoʊ ˈfʌni/ | أنت مضحك جدا | كلمة funny تعني "مضحك"، و fun تعني "ممتع"، فلا نخلط بينهما
Great job! | /ˈgreɪt ˈdʒɑːb/ | عمل رائع! | في العمل والدراسة، ومثلها Nice work
I'm proud of you. | /aɪm ˈpraʊd əv ju/ | أنا فخور بك | للأهل والأصدقاء، وقد يقولها المدير لموظفيه. حرف الجر of، لا with كما توحي "فخور بك"
You did it! | /ju ˈdɪd ɪt/ | لقد نجحت! | لمن حقق هدفه
Your Arabic is really good! | /jʊr ˈærəbɪk ɪz ˈriːəli ˈgʊd/ | عربيتك ممتازة! | جملة تسعد أي أجنبي يتعلم العربية. وأسماء اللغات تبدأ بحرف كبير دائما: Arabic
You have good taste. | /ju ˈhæv ˈgʊd ˈteɪst/ | ذوقك رفيع | لمدح الذوق في الملابس أو الموسيقى أو الديكور
I really enjoyed spending time with you. | /aɪ ˈriːəli ɪnˈdʒɔɪd ˈspendɪŋ ˈtaɪm wɪð ju/ | استمتعت كثيرا بقضاء الوقت معك | في نهاية لقاء أو سهرة، وبعد spend يأتي الفعل بصيغة -ing
Do you want to grab coffee sometime? | /də ju ˈwɑːnt tə ˈgræb ˈkɔːfi ˈsʌmtaɪm/ | هل تريد أن نشرب قهوة في وقت ما؟ | الفعل grab يعني أكل شيء أو شربه بسرعة، و want to تنطق في الكلام السريع wanna
I miss you. | /aɪ ˈmɪs ju/ | اشتقت إليك | لمن نشتاق إليه وهو بعيد، من الأهل أو الأصدقاء
You mean a lot to me. | /ju ˈmiːn ə ˈlɑːt tə mi/ | أنت غال علي كثيرا | للتعبير الصادق للأصدقاء والأحبة
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvər/ | أنقذتني! | نقولها حتى لمساعدة صغيرة، مبالغة في الشكر
You made my day! | /ju ˈmeɪd maɪ ˈdeɪ/ | أسعدت يومي! | عند سماع كلمة لطيفة أو تلقي هدية
That's very kind of you. | /ˈðæts ˈveri ˈkaɪnd əv ju/ | هذا لطف كبير منك | للرد بأدب على مساعدة أو مجاملة، وحرف الجر of: kind of you
`,
"العمل والبريد الإلكتروني": `
I hope this email finds you well. | /aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/ | أرجو أن تكون بخير | افتتاحية رسمية للبريد الإلكتروني تقابل "تحية طيبة وبعد"، وأخف منها: I hope you're doing well
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu ˈæsk əbaʊt ðə ˈskedʒuːl/ | أكتب إليك للاستفسار عن الجدول الزمني | نذكر الغرض في الجملة الأولى: I'm writing to ثم الغرض
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔːrt/ | أرفقت التقرير | أما Please find attached فأكثر رسمية وجفافا
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndər əbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | تذكير سريع باجتماع الغد | طريقة لطيفة للتذكير. و 's في tomorrow's للملكية، مثل "اجتماع الغد"
Let me know if you have any questions. | /ˈlet mi ˈnoʊ ɪf ju ˈhæv ˈeni ˈkwestʃənz/ | أخبرني إذا كانت لديك أي أسئلة | جملة ختام معتادة، و any تأتي مع صيغة الجمع questions
Could you send me the file by Friday? | /kəd ju ˈsend mi ðə ˈfaɪl baɪ ˈfraɪdeɪ/ | هل يمكنك إرسال الملف قبل يوم الجمعة؟ | حرف الجر by يعني "في موعد أقصاه"، أما until فتعني الاستمرار حتى ذلك الوقت
Sorry for the late reply. | /ˈsɑːri fər ðə ˈleɪt rɪˈplaɪ/ | آسف على التأخر في الرد | وبصيغة أخرى: Thanks for your patience
Thanks for getting back to me. | /ˈθæŋks fər ˈgetɪŋ ˈbæk tə mi/ | شكرا على ردك | عبارة get back to تعني معاودة الاتصال أو الرد
Best regards, | /ˈbest rɪˈgɑːrdz/ | مع خالص التحيات | ختام محايد يقابل "وتفضلوا بقبول فائق الاحترام" لكنه أقصر بكثير، ومع المقربين: Best أو Thanks
Let's schedule a meeting. | /ˈlets ˈskedʒuːl ə ˈmiːtɪŋ/ | لنحدد موعدا للاجتماع | في أمريكا تبدأ schedule بالصوتين sk، وفي بريطانيا بالصوت sh
I'm running late. | /aɪm ˈrʌnɪŋ ˈleɪt/ | سأتأخر قليلا | لإبلاغ الآخرين أثناء الطريق، ومثلها: I'll be there in 10
Can we push the meeting to 3? | /kən wi ˈpʊʃ ðə ˈmiːtɪŋ tə ˈθriː/ | هل يمكننا تأجيل الاجتماع إلى الثالثة؟ | وللتقديم: move up، مثل Can we move it up to 1. وفي push صوت /p/
I'll get back to you. | /aɪl ˈget ˈbæk tə ju/ | سأعود إليك لاحقا | لكسب الوقت عندما لا نستطيع الرد فورا
Can you walk me through it? | /kən ju ˈwɔːk mi θruː ɪt/ | هل يمكنك أن تشرحه لي خطوة خطوة؟ | عبارة walk through تعني الشرح خطوة بخطوة
Let's touch base next week. | /ˈlets ˈtʌtʃ ˈbeɪs ˈnekst ˈwiːk/ | لنتواصل الأسبوع القادم | للاتفاق على حديث قصير لمتابعة سير العمل
What's the deadline? | /ˈwʌts ðə ˈdedlaɪn/ | ما الموعد النهائي؟ | ومثلها When is this due
I'm working from home today. | /aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/ | أعمل من البيت اليوم | اختصارها WFH
I'm off tomorrow. | /aɪm ˈɔːf təˈmɑːroʊ/ | غدا يوم إجازتي | وللإجازة السنوية ليوم واحد: I'm taking a day off tomorrow
Thanks for all your hard work. | /ˈθæŋks fər ˈɔːl jʊr ˈhɑːrd ˈwɜːrk/ | شكرا على كل جهودك | للشكر على جهد طويل، عند نهاية مشروع أو وداع زميل
`,
"الهاتف واختصارات الرسائل": `
Hello, this is Sara. | /həˈloʊ ˈðɪs ɪz ˈserə/ | ألو، أنا سارة | على الهاتف نقول This is بدلا من I'm
Can I speak to Mr. Haddad? | /kən aɪ ˈspiːk tə ˈmɪstər həˈdæd/ | هل يمكنني التحدث إلى السيد حداد؟ | نضع Mr مع اسم العائلة لا الاسم الأول، وبتهذيب أكثر: May I speak to
Who's calling, please? | /ˈhuːz ˈkɔːlɪŋ ˈpliːz/ | من المتصل من فضلك؟ | يسألها من يرد على الهاتف
Hold on a second. | /ˈhoʊld ˈɑːn ə ˈsekənd/ | انتظر لحظة | لطلب الانتظار قليلا أثناء المكالمة أو الحديث
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ ˈʌp/ | عذرا، صوتك يتقطع | الفعل break up هنا يعني تقطع الصوت في المكالمة، ولها معنى آخر: انفصال الحبيبين
Can I call you back? | /kən aɪ ˈkɔːl ju ˈbæk/ | هل يمكنني معاودة الاتصال بك؟ | عند الانشغال: I'm in a meeting. Can I call you back
I'll text you. | /aɪl ˈtekst ju/ | سأرسل لك رسالة | الفعل text يعني إرسال رسالة نصية على الهاتف
I'm on my way. | /aɪm ɑːn maɪ ˈweɪ/ | أنا في الطريق | اختصارها في الرسائل OMW
LOL | /ˌel oʊ ˈel/ | ههههه (laughing out loud) | لا تعني ضحكا عاليا حقيقيا في الغالب، بل تشبه "ههههه" في رسائلنا
BRB | /ˌbiː ɑːr ˈbiː/ | سأعود حالا (be right back) | في الدردشة والألعاب عند الابتعاد قليلا
BTW | /ˌbiː tiː ˈdʌbəljuː/ | على فكرة (by the way) | لتغيير الموضوع في الرسالة
TBH | /ˌtiː biː ˈeɪtʃ/ | بصراحة (to be honest) | تأتي في أول الجملة أو آخرها
IDK | /ˌaɪ diː ˈkeɪ/ | لا أعرف (I don't know) | تكتب كثيرا بأحرف صغيرة: idk
OMG | /ˌoʊ em ˈdʒiː/ | يا للهول (oh my God) | تقال في الكلام أيضا، حرفا حرفا
ASAP | /ˌeɪ es eɪ ˈpiː/ /ˈeɪsæp/ | في أسرع وقت ممكن (as soon as possible) | تستعمل في العمل، لكن تحديد تاريخ أكثر تهذيبا مع المدير
TTYL | /ˌtiː tiː waɪ ˈel/ | أكلمك لاحقا (talk to you later) | لإنهاء المحادثة
NVM | /ˌen viː ˈem/ | انس الأمر (never mind) | لإلغاء سؤال سابق
FYI | /ˌef waɪ ˈaɪ/ | للعلم (for your information) | شائعة في رسائل العمل. أما كتابة العربية بحروف لاتينية وأرقام مثل 3 و7 فليست إنجليزية، ولا مكان لها في رسالة إنجليزية
`,
"السفر (المطار والفندق)": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔːrt/ | هذا جواز سفري | عند تسليمه في المطار. وفي passport صوت /p/ مرتين، لا باء
I'm here for sightseeing. | /aɪm ˈhɪr fər ˈsaɪtsiːɪŋ/ | جئت للسياحة | جواب ضابط الجوازات عن What's the purpose of your visit
I'm staying for a week. | /aɪm ˈsteɪɪŋ fər ə ˈwiːk/ | سأبقى أسبوعا | جواب How long are you staying، ولا ننسى a قبل week
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ ət ðə ˈhɪltən/ | أقيم في فندق هيلتون | جواب Where are you staying، وأسماء الفنادق تأتي مع the
Window or aisle? | /ˈwɪndoʊ ər ˈaɪl/ | نافذة أم ممر؟ | حرف s في aisle لا ينطق
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsiːt ˈpliːz/ | أريد مقعدا بجانب الممر من فضلك | الاسم aisle يبدأ بصوت متحرك فنقول an، وللنافذة: a window seat
Where is the baggage claim? | /ˈwer ɪz ðə ˈbægɪdʒ ˈkleɪm/ | أين استلام الأمتعة؟ | في بريطانيا: baggage reclaim
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | أمتعتي مفقودة | كلمة luggage اسم غير معدود رغم أن "أمتعة" جمع في العربية، فنقول is لا are، وللقطعة الواحدة: a piece of luggage
I have a reservation under Haddad. | /aɪ ˈhæv ə ˌrezərˈveɪʃn ʌndər həˈdæd/ | عندي حجز باسم حداد | كلمة under ثم اسم صاحب الحجز تعني "باسم"
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃekaʊt/ | متى موعد المغادرة؟ | ولطلب التأخير: Can I get a late check-out
Can I check in early? | /kən aɪ ˈtʃek ˈɪn ˈɜːrli/ | هل يمكنني تسجيل الدخول مبكرا؟ | عبارة check in تنطق متصلة كأنها كلمة واحدة
Is breakfast included? | /ɪz ˈbrekfəst ɪnˈkluːdɪd/ | هل الفطور مشمول؟ | الحرفان ea في breakfast تنطق حركة قصيرة /e/، لا كما في break
The air conditioner isn't working. | /ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/ | المكيف لا يعمل | ونختصرها كثيرا: AC
Could I get some extra towels? | /kəd aɪ ˈget ˈsʌm ˈekstrə ˈtaʊəlz/ | أحتاج إلى مناشف إضافية من فضلك | كلمة towels بصيغة الجمع بعد some
Can you hold my bags until 3? | /kən ju ˈhoʊld maɪ ˈbægz əntɪl ˈθriː/ | هل يمكنكم حفظ حقائبي حتى الثالثة؟ | لطلب حفظ الحقائب بعد المغادرة، و hold هنا بمعنى "يحفظ"
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈleɪd/ | تأخرت رحلتي | وللرحلة الملغاة canceled، ونحتاج was قبلهما: My flight was canceled
Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | أين البوابة رقم 12؟ | نقرأ الرقم بعد الكلمة: gate twelve، بلا number
Do I need to take my laptop out? | /də aɪ ˈniːd tə ˈteɪk maɪ ˈlæptɑːp ˈaʊt/ | هل يجب أن أخرج حاسوبي المحمول؟ | في نقطة التفتيش الأمني. والحاسوب المحمول laptop، و take out تعني "يخرج"
`,
"المستشفى والطوارئ": `
Help! | /ˈhelp/ | النجدة! | نصيح بها عند الخطر
Call 911! | /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/ | اتصل بالرقم 911! | رقم الطوارئ في أمريكا 911 ويقرأ nine one one، وفي بريطانيا 999
I need a doctor. | /aɪ ˈniːd ə ˈdɑːktər/ | أحتاج إلى طبيب | وفي الحالة الطارئة: I need an ambulance، مع an لأن ambulance تبدأ بصوت متحرك
I don't feel well. | /aɪ ˈdoʊnt ˈfiːl ˈwel/ | لست على ما يرام | أكثر عبارة محايدة للتعبير عن المرض
I have a headache. | /aɪ ˈhæv ə ˈhedeɪk/ | عندي صداع | "عندي" تقابلها I have مع a: a headache، ومثلها a stomachache و a toothache
I have a fever. | /aɪ ˈhæv ə ˈfiːvər/ | عندي حمى | في fever صوتان: f في أولها كالفاء العربية، و v في وسطها مع اهتزاز في الحلق
My stomach hurts. | /maɪ ˈstʌmək ˈhɜːrts/ | بطني يؤلمني | العضو ثم hurts، مع s لأن الفاعل مفرد غائب
I have a sore throat. | /aɪ ˈhæv ə ˈsɔːr ˈθroʊt/ | عندي التهاب في الحلق | كلمة sore تعني "مؤلم"، و throat هو الحلق من الداخل، لا الرقبة neck
I feel dizzy. | /aɪ ˈfiːl ˈdɪzi/ | أشعر بالدوار | وللغثيان: I feel sick أو I feel nauseous
I sprained my ankle. | /aɪ ˈspreɪnd maɪ ˈæŋkl/ | التوى كاحلي | والمعصم wrist. وفي أول sprained ثلاثة أصوات ساكنة spr بلا حركة قبلها
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr ˈhɪr/ | هل توجد صيدلية قريبة من هنا؟ | في أمريكا تسمى أيضا drugstore، و ph في pharmacy تنطق f
Do I need a prescription? | /də aɪ ˈniːd ə prɪˈskrɪpʃn/ | هل أحتاج إلى وصفة طبية؟ | الأدوية التي تباع بلا وصفة تسمى over-the-counter
I lost my wallet. | /aɪ ˈlɔːst maɪ ˈwɑːlɪt/ | أضعت محفظتي | وللهاتف phone، ومكتب المفقودات: lost and found
Someone stole my phone. | /ˈsʌmwʌn ˈstoʊl maɪ ˈfoʊn/ | سرق أحدهم هاتفي | الفعل stole هو الماضي من steal
Where is the police station? | /ˈwer ɪz ðə pəˈliːs ˈsteɪʃn/ | أين مركز الشرطة؟ | النبر في police على المقطع الثاني، وصوت p فيها ليس باء
I need to contact the Saudi embassy. | /aɪ ˈniːd tə ˈkɑːntækt ðə ˈsaʊdi ˈembəsi/ | يجب أن أتصل بالسفارة السعودية | جملة ضرورية عند فقدان جواز السفر، ويمكن تغيير اسم البلد: the Egyptian embassy
I have travel insurance. | /aɪ ˈhæv ˈtrævl ɪnˈʃʊrəns/ | عندي تأمين سفر | ضروري في البلدان التي يغلو فيها العلاج
`,
"الأفعال المركبة": `
pick up | /ˈpɪk ˈʌp/ | يأخذ أحدا بالسيارة / يلتقط من الأرض | الضمير (you أو it) يأتي في الوسط: I'll pick you up at 7
give up | /ˈgɪv ˈʌp/ | يستسلم / يتخلى عن | وما نتخلى عنه يأتي بصيغة -ing: give up smoking
figure out | /ˈfɪgjər ˈaʊt/ | يفهم / يجد الحل | نقول I can't figure out this app، أي لا أعرف كيف أستعمل هذا التطبيق
find out | /ˈfaɪnd ˈaʊt/ | يعرف / يكتشف معلومة | لمعرفة معلومة أو حقيقة، أما figure out فبالتفكير وحل المشكلة
look for | /ˈlʊk fɔːr/ | يبحث عن | للبحث المستمر: I'm looking for my keys، وعند العثور: find
look after | /ˈlʊk ˈæftər/ | يعتني / يرعى | وفي أمريكا يشيع أيضا take care of، مثل: Can you look after my cat
look forward to | /ˈlʊk ˈfɔːrwərd tuː/ | يتطلع إلى | بعد to اسم أو -ing، لا الفعل المجرد: I'm looking forward to seeing you
run out of | /ˈrʌn ˈaʊt əv/ | ينفد | العربية تقول "نفد الحليب" فتجعل الحليب فاعلا، والإنجليزية تجعل الفاعل نحن: We ran out of milk
turn on | /ˈtɜːrn ˈɑːn/ | يشغل / يضيء | لتشغيل الكهرباء والأجهزة: Turn on the light، ولا نقول open the light كما في "افتح النور"
turn off | /ˈtɜːrn ˈɔːf/ | يطفئ | والضمير في الوسط: Turn it off، لا turn off it، ولا close the light
turn down | /ˈtɜːrn ˈdaʊn/ | يرفض / يخفض الصوت | للمعنيين كليهما: She turned down the offer و Turn it down
put off | /ˈpʊt ˈɔːf/ | يؤجل | في الكلام اليومي أشيع بكثير من postpone: Stop putting it off
show up | /ˈʃoʊ ˈʌp/ | يحضر / يظهر | للحضور إلى موعد: He didn't show up to the party، أي لم يأت إلى الحفلة
hang out | /ˈhæŋ ˈaʊt/ | يقضي الوقت مع الأصدقاء | لقضاء الوقت مع الأصدقاء بلا خطة محددة، في البيت أو خارجه: Let's hang out this weekend
check out | /ˈtʃek ˈaʊt/ | يلقي نظرة / يغادر الفندق | للفت النظر إلى شيء: Check out this video، ولها أيضا معنى مغادرة الفندق
work out | /ˈwɜːrk ˈaʊt/ | يتمرن / تنحل الأمور | للتمرين في النادي الرياضي أشيع من exercise: I work out every day، وبمعنى آخر: It'll work out
come up with | /ˈkʌm ˈʌp wɪð/ | يبتكر / يخطر له | لفكرة أو عذر أو حل: She came up with a great idea
get along with | /ˈget əˈlɔːŋ wɪð/ | يتفاهم مع | للعلاقة الطيبة: I get along with my coworkers
calm down | /ˈkɑːm ˈdaʊn/ | يهدأ | حرف l في calm لا ينطق، وقولها لشخص غاضب قد يزيد غضبه
set up | /ˈset ˈʌp/ | يركب / يجهز | لتركيب جهاز أو تجهيز اجتماع: Can you help me set up my printer
break up | /ˈbreɪk ˈʌp/ | ينفصل (حبيبان) | للزوجين أو الحبيبين: They broke up last month، ومع الطرف الآخر: break up with
fill out | /ˈfɪl ˈaʊt/ | يملأ (استمارة) | لملء الاستمارات: Please fill out this form، وفي بريطانيا: fill in
grow up | /ˈgroʊ ˈʌp/ | يكبر / ينشأ | لمكان النشأة: I grew up in Amman
wake up | /ˈweɪk ˈʌp/ | يستيقظ | لحظة الاستيقاظ wake up، أما مغادرة السرير فهي get up
`,
"فخاخ النطق": `
rice | /ˈraɪs/ | أرز | الراء واللام منفصلتان في العربية فلا خلط هنا، لكن r الأمريكية لا تضرب كالراء: يلتف اللسان إلى الخلف ولا يلمس شيئا
lice | /ˈlaɪs/ | قمل | الصوت l مثل اللام العربية الخفيفة: طرف اللسان على اللثة خلف الأسنان العليا
right | /ˈraɪt/ | يمين / صحيح | تبدأ بصوت r الأمريكي، لا بالراء المكررة
light | /ˈlaɪt/ | ضوء / خفيف | تبدأ باللام، وطرف اللسان على اللثة خلف الأسنان العليا
fan | /ˈfæn/ | مروحة / معجب | الصوت f هو الفاء العربية تماما، أما pan فتبدأ بصوت ليس في العربية
pan | /ˈpæn/ | مقلاة | الصوت p ليس في العربية: الشفتان كما في الباء، لكن بلا اهتزاز في الحلق ومع دفعة هواء. هذا أهم فرق للمتحدثين بالعربية
coffee | /ˈkɔːfi/ | قهوة | في وسطها الفاء f، وحركتها الأولى طويلة /ɔː/. والكلمة القريبة copy فيها p وحركة أخرى
copy | /ˈkɑːpi/ | نسخة / ينسخ | في وسطها p لا باء، فلا ننطقها "كابي" بالباء
think | /ˈθɪŋk/ | يفكر | الحرفان th هنا صوت الثاء العربية. وفي بعض اللهجات تنطق الثاء سينا أو تاء، فتصير الكلمة sink
sink | /ˈsɪŋk/ | حوض المطبخ / يغرق | الصوت s هو السين العربية، واللسان خلف الأسنان
three | /ˈθriː/ | ثلاثة | تبدأ بالثاء، ولو قلناها بالتاء لصارت tree (شجرة)
tree | /ˈtriː/ | شجرة | الحرفان tr صوتان ساكنان متتاليان بلا حركة بينهما
this | /ˈðɪs/ | هذا | الحرفان th هنا صوت الذال العربية، لا الدال ولا الزاي
very | /ˈveri/ | جدا | الصوت v ليس في العربية: الأسنان العليا على الشفة السفلى كالفاء، مع اهتزاز في الحلق. ولو قلناها بالباء لصارت berry، وبالفاء ferry
berry | /ˈberi/ | توت | تبدأ بالباء العربية العادية
vote | /ˈvoʊt/ | يصوت / صوت انتخابي | تبدأ بالصوت v، لا بالباء ولا بالفاء، ولو قلناها بالباء لصارت boat (قارب)
boat | /ˈboʊt/ | قارب | تبدأ بالباء، والحركة فيها تنزلق من الضمة إلى الواو
walk | /ˈwɔːk/ | يمشي | حرف l لا ينطق، والحركة ألف طويلة مفتوحة
work | /ˈwɜːrk/ | يعمل | فيها r بعد الحركة، فهي لا تشبه walk. نخلط بينهما إذا قرأنا الحروف كما تكتب
beach | /ˈbiːtʃ/ | شاطئ | الياء فيها طويلة، ولو قصرناها لصارت كلمة نابية. وهذا الفرق سهل علينا لأن العربية تفرق بين الحركة الطويلة والقصيرة
leave | /ˈliːv/ | يغادر | ياء طويلة /iː/، أما القصيرة ففي live (يعيش)، والفرق مألوف لنا من العربية
live | /ˈlɪv/ | يعيش | حركة قصيرة /ɪ/ أقرب إلى e من الكسرة، و v في آخرها ليست فاء
banana | /bəˈnænə/ | موز | النبر على المقطع الأوسط، والحركتان الأخريان ضعيفتان جدا
hotel | /hoʊˈtel/ | فندق | النبر على المقطع الأخير tel
milk | /ˈmɪlk/ | حليب | الكلمة مقطع واحد: لا نضع حركة بين l و k فتصير بمقطعين
McDonald's | /məkˈdɑːnldz/ | ماكدونالدز | النبر على Don، والمقطع الأول ضعيف جدا
park | /ˈpɑːrk/ | حديقة عامة / يركن السيارة | الصوت p ثم ألف طويلة. ولو قلناها بالباء لصارت bark، فيسمع السامع Can I bark here بدلا من Can I park here
bark | /ˈbɑːrk/ | ينبح / لحاء الشجر | باء عادية، والفرق بينها وبين park كله في اهتزاز الحلق ودفعة الهواء
pull | /ˈpʊl/ | يسحب | نراها على الأبواب مع push، وكلتاهما تبدأ بالصوت /p/
bull | /ˈbʊl/ | ثور | تبدأ بالباء، فإذا نطقنا pull بالباء صار المعنى "ثور"
pen | /ˈpen/ | قلم | الصوت p ثم حركة قصيرة /e/ بين الفتحة والكسرة
Ben | /ˈben/ | بن (اسم رجل) | اسم علم يكتب بحرف كبير، والفرق بينه وبين pen في الصوت الأول فقط
pie | /ˈpaɪ/ | فطيرة | الصوت p مع دفعة هواء واضحة في أول الكلمة
buy | /ˈbaɪ/ | يشتري | باء عادية، وتنطق مثل bye تماما
ferry | /ˈferi/ | عبارة (سفينة نقل) | تبدأ بالفاء العربية، أما very فتبدأ بالصوت v المهتز
van | /ˈvæn/ | شاحنة صغيرة | الصوت v ثم فتحة مفتوحة جدا، ولو قلناها بالفاء لصارت fan (مروحة)
bit | /ˈbɪt/ | قليلا / قطعة صغيرة | حركة قصيرة /ɪ/ أقرب إلى e من الكسرة العربية، والمقارنة مع bet تظهر الفرق
bet | /ˈbet/ | يراهن / رهان | حركة /e/ بين الفتحة والكسرة. والفرق بين bit و bet من أصعب الفروق على متكلمي العربية، لأن الكتابة العربية تكتب الاثنتين بالكسرة
cat | /ˈkæt/ | قطة | فتحة مفتوحة جدا /æ/، والفم مفتوح أكثر من cut
cut | /ˈkʌt/ | يقطع | فتحة قصيرة في وسط الفم /ʌ/. والفرق بين cat و cut لا تظهره الكتابة العربية، لذلك نعتمد على الكتابة الصوتية
street | /ˈstriːt/ | شارع | ثلاثة أصوات ساكنة متتالية str في أول الكلمة، بلا همزة قبلها وبلا حركة بينها
spring | /ˈsprɪŋ/ | الربيع / نابض | الأصوات spr في أولها بلا همزة قبلها، و ng في آخرها صوت واحد بلا g بعده
asked | /ˈæskt/ | سأل (الماضي) | ثلاثة أصوات ساكنة في آخرها skt، فالكلمة مقطع واحد، و ed هنا تنطق /t/
singing | /ˈsɪŋɪŋ/ | الغناء | الحرفان ng صوت واحد ينطق من آخر الحلق مثل النون، بلا g بعده
Wednesday | /ˈwenzdeɪ/ | الأربعاء | حرف d الأول لا ينطق، ولا حرف e الثاني، فالكلمة مقطعان فقط
listen | /ˈlɪsn/ | يستمع | حرف t لا ينطق، ونقول listen to قبل الشيء المسموع: listen to music
`,
"التعابير الاصطلاحية": `
It's a piece of cake. | /ɪts ə ˈpiːs əv ˈkeɪk/ | سهل جدا | للأمر السهل جدا: The test was a piece of cake
I'm on cloud nine. | /aɪm ɑːn ˈklaʊd ˈnaɪn/ | أطير من الفرح | للسعادة الغامرة
It costs an arm and a leg. | /ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/ | يكلف ثروة | لشيء غال جدا، والصورة: ثمنه ذراع وساق. ونقول costs بلا is: It is cost ✗
Let's call it a day. | /ˈlets ˈkɔːl ɪt ə ˈdeɪ/ | لنكتف بهذا القدر اليوم | لإنهاء العمل أو الدراسة، وتصلح في الاجتماعات
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ ʌndər ðə ˈweðər/ | أشعر بتوعك بسيط | لمرض خفيف كالزكام، ولا علاقة لها بالطقس
I need to hit the books. | /aɪ ˈniːd tə ˈhɪt ðə ˈbʊks/ | يجب أن أدرس بجد | قبل الامتحان، ولا علاقة لها بضرب الكتب
Once in a blue moon | /ˈwʌns ɪn ə ˈbluː ˈmuːn/ | نادرا جدا | للشيء النادر: I only eat fast food once in a blue moon
Better late than never. | /ˈbetər ˈleɪt ðən ˈnevər/ | أن تأتي متأخرا خير من ألا تأتي | لتشجيع من بدأ متأخرا
Don't beat around the bush. | /ˈdoʊnt ˈbiːt əraʊnd ðə ˈbʊʃ/ | ادخل في الموضوع مباشرة | لطلب الدخول في صلب الموضوع بلا مراوغة
It's not my cup of tea. | /ɪts ˈnɑːt maɪ ˈkʌp əv ˈtiː/ | ليس من ذوقي | للرفض بلطف
Let's get the ball rolling. | /ˈlets ˈget ðə ˈbɔːl ˈroʊlɪŋ/ | لنبدأ العمل | لبدء اجتماع أو مشروع
I'll keep my fingers crossed. | /aɪl ˈkiːp maɪ ˈfɪŋgərz ˈkrɔːst/ | أتمنى لك التوفيق | تقال مع حركة تشبيك السبابة والوسطى، وهي عادة غربية
Hang in there. | /ˈhæŋ ˈɪn ˈðer/ | اصمد قليلا | لمن يمر بوقت صعب
Speak of the devil! | /ˈspiːk əv ðə ˈdevl/ | ذكرناه فحضر! | عندما يظهر الشخص الذي كنا نتحدث عنه، ولا علاقة لها بالشيطان في الاستعمال اليومي
The ball is in your court. | /ðə ˈbɔːl ɪz ɪn jʊr ˈkɔːrt/ | الكرة في ملعبك | القرار الآن للطرف الآخر، والتعبير نفسه موجود في العربية
My lips are sealed. | /maɪ ˈlɪps ər ˈsiːld/ | سرك في بئر | وعد بكتمان السر
It's on the tip of my tongue. | /ɪts ɑːn ðə ˈtɪp əv maɪ ˈtʌŋ/ | على طرف لساني | عندما نكاد نتذكر شيئا، والصورة نفسها في العربية
I'm all ears. | /aɪm ˈɔːl ˈɪrz/ | كلي آذان صاغية | للإصغاء الكامل، والتعبير العربي قريب جدا
When pigs fly. | /wen ˈpɪgz ˈflaɪ/ | حين يشيب الغراب (أي أبدا) | لشيء لن يحدث أبدا: He'll clean his room when pigs fly
`,
"الأفلام والمسلسلات والعامية": `
Spill the tea. | /ˈspɪl ðə ˈtiː/ | احك لي القصة كلها | كلمة tea هنا تعني الأخبار والإشاعات، وهي عامية بين الأصدقاء
No cap. | /ˈnoʊ ˈkæp/ | صدقا، بلا كذب | عامية الشباب، و cap تعني "كذبة"
That song slaps. | /ˈðæt ˈsɔːŋ ˈslæps/ | هذه الأغنية رائعة | الفعل slap هنا بمعنى "رائع جدا"، للموسيقى وللطعام أيضا
I'm dead. | /aɪm ˈded/ | مت من الضحك | تكتب في الرسائل مع الرمز 💀، ولا تعني الموت حقيقة
Low-key | /ˌloʊˈkiː/ | نوعا ما / في السر | مثل: I low-key love this song، وعكسها high-key
I'm obsessed with this song. | /aɪm əbˈsest wɪð ˈðɪs ˈsɔːŋ/ | أنا مدمن على هذه الأغنية | كلمة obsessed تعني "مولع جدا"، وتستعمل كثيرا بمعنى إيجابي، وحرف الجر بعدها with
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | عن ماذا يتحدث؟ | للسؤال عن قصة فيلم أو مسلسل، و about تبقى في آخر السؤال
No spoilers! | /ˈnoʊ ˈspɔɪlərz/ | بلا حرق للأحداث! | ومثلها Don't spoil it
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə ˈhoʊl ˈsiːzn/ | شاهدت الموسم كله دفعة واحدة | الفعل binge-watch يعني مشاهدة حلقات كثيرة متتالية
The ending was so good. | /ði ˈendɪŋ wəz ˈsoʊ ˈgʊd/ | كانت النهاية رائعة | وإن لم تعجبنا: The ending was disappointing
It's a must-watch. | /ɪts ə ˈmʌstwɑːtʃ/ | عمل لا بد من مشاهدته | للتوصية القوية
Plot twist! | /ˈplɑːt ˈtwɪst/ | مفاجأة في الأحداث! | تقال أيضا عن مفاجأة في الحياة اليومية
It's overrated. | /ɪts ˌoʊvərˈreɪtɪd/ | مبالغ في تقديره | وعكسها underrated، أي لم يأخذ حقه
That scene gave me chills. | /ˈðæt ˈsiːn ˈgeɪv mi ˈtʃɪlz/ | ذلك المشهد أصابني بالقشعريرة | من التأثر أو التوتر
Who's your bias? | /ˈhuːz jʊr ˈbaɪəs/ | من عضوك المفضل في الفرقة؟ | عامية جمهور الفرق الغنائية، وخاصة فرق الكيبوب. وبصيغة عامة: Who's your favorite member
Are you kidding me? | /ər ju ˈkɪdɪŋ mi/ | هل تمزح؟ | جملة شائعة في المسلسلات، للدهشة أو الضيق
I've got your back. | /aɪv ˈgɑːt jʊr ˈbæk/ | أنا سندك | وعد بالدعم والوقوف إلى جانب الآخر
Gotcha. | /ˈgɑːtʃə/ | فهمت / أمسكتك! | اختصار got you، وأشهر معانيه "فهمت"
Let's do this! | /ˈlets ˈduː ˈðɪs/ | هيا بنا! | لشحذ الهمة قبل البدء
`,
"فخاخ الترجمة الحرفية": `
Turn on the light. | /ˈtɜːrn ˈɑːn ðə ˈlaɪt/ | أشعل الضوء | ترجمة حرفية: "افتح النور" تصبح open the light، لكن الإنجليزية تقول turn on للأجهزة والأضواء
Turn off the light. | /ˈtɜːrn ˈɔːf ðə ˈlaɪt/ | أطفئ الضوء | ترجمة حرفية: "أغلق النور" تصبح close the light، والإنجليزية تقول turn off
I'm thirty years old. | /aɪm ˈθɜːrti ˈjɪrz ˈoʊld/ | عمري ثلاثون عاما | ترجمة حرفية: "عمري" أو "لي ثلاثون سنة" تقود إلى I have thirty years، أما الإنجليزية فتقول I'm مع العمر
I agree with you. | /aɪ əˈgriː wɪð ju/ | أتفق معك | ترجمة حرفية: "أنا موافق" تقود إلى I am agree، لكن agree فعل في الإنجليزية، فلا نضع قبله am
I'm having a party. | /aɪm ˈhævɪŋ ə ˈpɑːrti/ | سأقيم حفلة | ترجمة حرفية: "أعمل حفلة" تصبح make a party، والإنجليزية تقول have a party أو throw a party
I need to do my homework. | /aɪ ˈniːd tə ˈduː maɪ ˈhoʊmwɜːrk/ | يجب أن أحل واجبي | ترجمة حرفية: "أعمل واجبي" تقود إلى make my homework، والإنجليزية تقول do my homework
I made a mistake. | /aɪ ˈmeɪd ə mɪˈsteɪk/ | ارتكبت خطأ | ترجمة حرفية: "فعلت خطأ" تقود إلى did a mistake، والإنجليزية تقول make a mistake
This class is boring. | /ˈðɪs ˈklæs ɪz ˈbɔːrɪŋ/ | هذا الدرس ممل | ترجمة حرفية: من "أشعر بالملل في الدرس" يقول بعضنا I'm boring، وهي تعني "أنا ممل". الشيء الذي يسبب الملل boring، والشعور نفسه bored
Can you explain it to me? | /kən ju ɪkˈspleɪn ɪt tə mi/ | هل يمكنك أن تشرحه لي؟ | ترجمة حرفية: "اشرح لي" تقود إلى explain me، لكن explain يتبعها الشيء ثم to me
I'm listening to music. | /aɪm ˈlɪsənɪŋ tə ˈmjuːzɪk/ | أستمع إلى الموسيقى | ترجمة حرفية: "أسمع الموسيقى" بلا حرف جر تقود إلى listen music، والإنجليزية تحتاج to بعد listen
Let's discuss the plan. | /ˈlets dɪˈskʌs ðə ˈplæn/ | لنناقش الخطة | ترجمة حرفية: "نتحدث عن الخطة" تقود إلى discuss about، لكن discuss لا تحتاج حرف جر
She's married to a doctor. | /ʃiz ˈmærid tu ə ˈdɑːktər/ | هي متزوجة من طبيب | ترجمة حرفية: "متزوجة من" تقود إلى married with أو married from، والإنجليزية تقول married to
It depends on you. | /ɪt dɪˈpendz ɑːn ju/ | الأمر يعتمد عليك | ترجمة حرفية: "يعتمد على" تنجح هذه المرة، فهي depends on، أما depends of و depends from فخطأ
I need some information. | /aɪ ˈniːd ˈsʌm ˌɪnfərˈmeɪʃn/ | أحتاج إلى بعض المعلومات | ترجمة حرفية: "معلومات" جمع في العربية فيقول بعضنا informations، لكن information اسم غير معدود بلا s
Can I give you some advice? | /kən aɪ ˈgɪv ju ˈsʌm ədˈvaɪs/ | هل تسمح لي بنصيحة؟ | ترجمة حرفية: "نصائح" تقود إلى advices، لكن advice اسم غير معدود، وللنصيحة الواحدة: a piece of advice
Actually, I'm busy. | /ˈæktʃuəli aɪm ˈbɪzi/ | في الحقيقة، أنا مشغول | كلمة مخادعة: actually تعني "في الحقيقة" لا "حاليا"، و"حاليا" بالإنجليزية currently أو right now
I study at the library. | /aɪ ˈstʌdi ət ðə ˈlaɪbreri/ | أدرس في المكتبة | كلمة مخادعة: "مكتبة" في العربية تعني أيضا متجر الكتب، أما library فمكان الاستعارة والقراءة، ومتجر الكتب bookstore
My friend and I went shopping. | /maɪ ˈfrend ənd aɪ ˈwent ˈʃɑːpɪŋ/ | ذهبت أنا وصديقي للتسوق | ترجمة حرفية: "أنا وصديقي" تقود إلى I and my friend، والإنجليزية تضع I في الآخر تأدبا: my friend and I
What's your name? | /ˈwʌts jʊr ˈneɪm/ | ما اسمك؟ | ترجمة حرفية: "ما اسمك" بلا فعل تقود إلى What your name، والإنجليزية تحتاج is، ومختصرها 's
I hope so. | /aɪ ˈhoʊp ˈsoʊ/ | أتمنى ذلك / إن شاء الله | ترجمة حرفية: نقول "إن شاء الله" للتمني، وتقابلها في الإنجليزية I hope so أو Hopefully
Hopefully. | /ˈhoʊpfəli/ | على أمل ذلك | ترجمة حرفية: "عسى أن" عن أمر في المستقبل تقابلها Hopefully في أول الجملة: Hopefully, it won't rain
She's very sensitive. | /ʃiz ˈveri ˈsensətɪv/ | هي حساسة جدا | كلمة مخادعة: "حساس" تقابلها sensitive، أما sensible فتعني "عاقل" أو "معقول"
I attended the meeting. | /aɪ əˈtendɪd ðə ˈmiːtɪŋ/ | حضرت الاجتماع | كلمة مخادعة: "حضر" تقابلها attend، أما assist فتعني "يساعد"، و attend لا تحتاج حرف جر
I have a cold. | /aɪ ˈhæv ə ˈkoʊld/ | عندي زكام | ترجمة حرفية: "عندي برد" تقود إلى I have cold بلا أداة، والإنجليزية تقول a cold، أما I'm cold فتعني "أشعر بالبرد"
`
};
