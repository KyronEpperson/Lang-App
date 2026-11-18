/* DIALOG: key | A | B | الترجمة ;  EXAMPLES: key | sentence | الترجمة
   English lines localised per docs/profiles/ar.md §9 (Sara, Omar, Cairo, Dubai, Amman, Ms. Mansour, Mr. Haddad; no K-pop, no alcohol or pork);
   keys equal card targets in decks.js. Translations: Modern Standard Arabic; gender follows the English context, masculine by default (profile §2). */
exports.DIALOG = `
How are you? | Hi, Jake! How are you? | Good, thanks! How about you? | أهلا يا جيك! كيف حالك؟ / بخير، شكرا! وأنت؟
What's up? | Hey, what's up? | Not much. Just getting some coffee. | أهلا، ما الأخبار؟ / لا جديد. ذاهب لأشتري قهوة فقط.
Nice to meet you. | Hi, I'm Sara. Nice to meet you. | Nice to meet you, too. I'm Ryan. | مرحبا، أنا سارة. تشرفت بمعرفتك. / وأنا أيضا تشرفت بمعرفتك. أنا رايان.
Long time no see! | Long time no see! How have you been? | I've been great! You look good! | لم أرك منذ زمن طويل! كيف كانت أحوالك؟ / كنت بخير تماما! تبدو بصحة جيدة!
Have a good one! | Here's your receipt. Have a good one! | Thanks, you too! | تفضل الإيصال. يومك سعيد! / شكرا، ويومك أيضا!
Good night. | I'm going to bed. Good night! | Good night! Sleep well. | سأذهب إلى النوم. تصبح على خير! / وأنت من أهله! نوما هنيئا.
Where are you from? | So, where are you from? | I'm from Egypt. Cairo, actually. | إذن، من أين أنت؟ / أنا من مصر، من القاهرة تحديدا.
What do you do? | What do you do? | I'm a designer. I work at a small startup. | ماذا تعمل؟ / أنا مصمم، أعمل في شركة ناشئة صغيرة.
What should I call you? | What should I call you? | Just call me Jay. Everyone does. | بماذا أناديك؟ / نادني جاي فقط، فالجميع يناديني هكذا.
I'm really into hiking. | What do you do on weekends? | I'm really into hiking. I go almost every Saturday. | ماذا تفعل في العطلة الأسبوعية؟ / أحب المشي في الطبيعة كثيرا، وأخرج كل سبت تقريبا.
I'm here on vacation. | Are you here for work? | No, I'm here on vacation. | هل أنت هنا للعمل؟ / لا، أنا هنا في إجازة.
Excuse me. | Excuse me, is this the line for tickets? | Yes, it is. The end is over there. | لو سمحت، هل هذا طابور التذاكر؟ / نعم، وآخره هناك.
Thank you. | Here, let me get the door for you. | Oh, thank you! | تفضل، سأمسك لك الباب. / آه، شكرا لك!
Sorry? | Your total is twenty-three fifty. | Sorry? Could you say that again? | المجموع ثلاثة وعشرون دولارا وخمسون سنتا. / عفوا؟ هل يمكنك أن تعيد ما قلت؟
Could you speak more slowly? | Take the B line to Central, then transfer to the red line and... | Sorry, could you speak more slowly? | اركب الخط B إلى محطة سنترال، ثم بدل إلى الخط الأحمر و… / عذرا، هل يمكنك أن تتكلم ببطء أكثر؟
How do you say this in English? | How do you say this in English? | That's a whisk. | كيف نقول هذا بالإنجليزية؟ / اسمها whisk، أي مخفقة البيض.
Can you help me? | Excuse me, can you help me? I'm looking for this hotel. | Sure! It's just around the corner. | لو سمحت، هل يمكنك مساعدتي؟ أبحث عن هذا الفندق. / طبعا! إنه بعد الزاوية مباشرة.
No, thank you. | Would you like a bag? | No, thank you. I have one. | هل تريد كيسا؟ / لا، شكرا. معي كيس.
Where's the restroom? | Excuse me, where's the restroom? | It's down the hall, on the left. | لو سمحت، أين دورة المياه؟ / في آخر الممر، على اليسار.
Can I get the Wi-Fi password? | Can I get the Wi-Fi password? | Sure, it's on the back of your receipt. | ما كلمة مرور الواي فاي من فضلك؟ / طبعا، إنها على ظهر الإيصال.
Could you take a picture of us? | Excuse me, could you take a picture of us? | Of course! Say cheese! | لو سمحت، هل يمكنك أن تلتقط لنا صورة؟ / بكل سرور! ابتسموا!
Can you write it down? | The address is 1428 Elm Street. | Sorry, can you write it down? | العنوان 1428 شارع إلم. / عذرا، هل يمكنك أن تكتبه لي؟
No worries. | Sorry I'm a little late! | No worries. I just got here, too. | آسف، تأخرت قليلا! / لا عليك، وصلت أنا أيضا للتو.
How do I get to the subway station? | How do I get to the subway station? | Go straight two blocks and turn right. You can't miss it. | كيف أصل إلى محطة المترو؟ / امش مستقيما مسافة مربعين سكنيين ثم انعطف يمينا. ستراها بسهولة.
Is it within walking distance? | Is the museum within walking distance? | Yeah, it's about a ten-minute walk. | هل يمكن الوصول إلى المتحف مشيا؟ / نعم، على بعد عشر دقائق مشيا تقريبا.
Does this bus go to the airport? | Does this bus go to the airport? | No, you need the 42. It stops across the street. | هل تذهب هذه الحافلة إلى المطار؟ / لا، تحتاج إلى الحافلة 42، وموقفها في الجهة المقابلة من الشارع.
Which stop should I get off at? | Which stop should I get off at for the museum? | Get off at Park Street. It's three stops from here. | في أي محطة أنزل للذهاب إلى المتحف؟ / انزل في محطة بارك ستريت، على بعد ثلاث محطات من هنا.
Can you take me to this address? | Can you take me to this address? | Sure. It'll take about twenty minutes. | هل يمكنك أن توصلني إلى هذا العنوان؟ / طبعا، سيستغرق الطريق نحو عشرين دقيقة.
How long does it take? | How long does it take to get downtown? | About fifteen minutes by subway. | كم يستغرق الوصول إلى وسط المدينة؟ / نحو خمس عشرة دقيقة بالمترو.
Is this seat taken? | Excuse me, is this seat taken? | No, go ahead. | لو سمحت، هل هذا المقعد محجوز؟ / لا، تفضل.
A table for two, please. | Hi! How many? | A table for two, please. | أهلا! كم شخصا؟ / طاولة لشخصين من فضلك.
What do you recommend? | What do you recommend? | The salmon is really popular. | ماذا تقترح علي؟ / طبق السلمون مطلوب جدا.
I'll have the steak. | Are you ready to order? | Yes, I'll have the steak, please. | هل أنت مستعد للطلب؟ / نعم، سآخذ شريحة اللحم من فضلك.
Medium rare, please. | How would you like your steak? | Medium rare, please. | كيف تريد استواء شريحة اللحم؟ / استواء خفيف من فضلك.
I'm allergic to peanuts. | Does this have nuts in it? I'm allergic to peanuts. | Let me check with the kitchen. | هل في هذا الطبق مكسرات؟ عندي حساسية من الفول السوداني. / دعني أسأل المطبخ.
Everything was great. | How was everything? | Everything was great, thank you! | كيف كان الطعام؟ / كان كل شيء رائعا، شكرا!
Can we get the check, please? | Can we get the check, please? | Sure, I'll be right back with it. | الحساب من فضلك. / حاضر، سأحضره حالا.
It's on me. | Let's split it. | No, no. It's on me today. | لنقسم الحساب. / لا، لا، الحساب علي اليوم.
Can I get an iced Americano? | Hi, what can I get for you? | Can I get an iced Americano? | أهلا، ماذا أحضر لك؟ / أمريكانو مثلج من فضلك.
For here or to go? | For here or to go? | To go, please. | للتناول هنا أم للأخذ؟ / للأخذ من فضلك.
Can I get a name for the order? | Can I get a name for the order? | It's Omar. O-M-A-R. | ما الاسم على الطلب؟ / الاسم عمر، ويكتب O-M-A-R حرفا حرفا.
That's it. | Anything else? | No, that's it. Thanks! | هل تريد شيئا آخر؟ / لا، هذا كل شيء. شكرا!
I'm just looking, thanks. | Can I help you find anything? | I'm just looking, thanks. | هل تبحث عن شيء معين؟ / أتفرج فقط، شكرا.
Can I try this on? | Can I try this on? | Sure, the fitting rooms are in the back. | هل يمكنني تجربته؟ / طبعا، غرف القياس في الداخل.
I'll take it. | It fits perfectly! I'll take it. | Great! I can ring you up over here. | مقاسه مناسب تماما! سآخذه. / رائع! يمكنك الدفع هنا.
Cash or card? | Cash or card? | Card, please. | نقدا أم بالبطاقة؟ / بالبطاقة من فضلك.
What time is it? | Excuse me, what time is it? | It's almost three. | لو سمحت، كم الساعة؟ / الثالثة تقريبا.
Thirteen or thirty? | That's thirty dollars. | Sorry, thirteen or thirty? | المبلغ ثلاثون دولارا. / عفوا، ثلاثة عشر أم ثلاثون؟
How was your weekend? | How was your weekend? | It was great! I went to the beach. How about yours? | كيف كانت عطلتك الأسبوعية؟ / كانت رائعة! ذهبت إلى الشاطئ. وأنت؟
Any plans for the weekend? | Any plans for the weekend? | Not really. I'm just going to relax at home. | هل عندك خطط للعطلة الأسبوعية؟ / ليس تماما، سأرتاح في البيت فقط.
Nice weather today, huh? | Nice weather today, huh? | I know! Finally some sun. | الجو جميل اليوم، أليس كذلك؟ / فعلا! أخيرا ظهرت الشمس.
What do you do for fun? | What do you do for fun? | I play football and watch a lot of TV shows. | ماذا تفعل في وقت فراغك؟ / ألعب كرة القدم وأشاهد مسلسلات كثيرة.
Me neither. | I don't really like spicy food. | Me neither. | لا أحب الطعام الحار كثيرا. / ولا أنا.
It was nice talking to you. | Well, I should get going. It was nice talking to you. | You too! See you around. | حسنا، يجب أن أذهب الآن. سعدت بالحديث معك. / وأنا أيضا! أراك قريبا.
Congratulations! | I got the job! | Congratulations! I'm so happy for you! | حصلت على الوظيفة! / مبروك! فرحت لك كثيرا!
No way! | I met a famous singer at the airport yesterday. | No way! Did you get a picture? | قابلت مطربا مشهورا في المطار أمس. / غير معقول! هل التقطت صورة معه؟
I'm sorry to hear that. | My grandma is in the hospital. | Oh, I'm sorry to hear that. I hope she feels better soon. | جدتي في المستشفى. / آه، يؤسفني سماع ذلك. أرجو أن تتعافى قريبا.
It's not a big deal. | I'm so sorry I spilled your coffee! | It's not a big deal. Don't worry about it. | آسف جدا، سكبت قهوتك! / ليس بالأمر المهم، لا تقلق.
I love your shoes. | I love your shoes! Where did you get them? | Thanks! I got them in Dubai. | حذاؤك جميل جدا! من أين اشتريته؟ / شكرا! اشتريته في دبي.
Do you want to grab coffee sometime? | Do you want to grab coffee sometime? | Sure, I'd love to! | هل تريد أن نشرب قهوة في وقت ما؟ / طبعا، بكل سرور!
You're a lifesaver! | I brought you an extra charger. | You're a lifesaver! Thank you! | أحضرت لك شاحنا إضافيا. / أنقذتني! شكرا لك!
I'll get back to you. | Can you join the meeting on Thursday? | Let me check my schedule, and I'll get back to you. | هل يمكنك حضور الاجتماع يوم الخميس؟ / سأراجع جدولي ثم أعود إليك.
I'm running late. | Where are you? The meeting starts in five minutes. | Sorry, I'm running late. I'll be there in ten. | أين أنت؟ يبدأ الاجتماع بعد خمس دقائق. / آسف، سأتأخر قليلا. سأصل بعد عشر دقائق.
Can we push the meeting to 3? | Can we push the meeting to 3? Something came up. | Sure, 3 works for me. | هل يمكننا تأجيل الاجتماع إلى الثالثة؟ طرأ أمر ما. / طبعا، الثالثة تناسبني.
What's the deadline? | What's the deadline for the proposal? | End of the day Friday. | ما الموعد النهائي لتسليم المقترح؟ / نهاية دوام يوم الجمعة.
Who's calling, please? | Hi, can I speak to Ms. Mansour? | Sure. Who's calling, please? | مرحبا، هل يمكنني التحدث إلى السيدة منصور؟ / طبعا. من المتصل من فضلك؟
Sorry, you're breaking up. | Can you hear me now? | Sorry, you're breaking up. I'll call you back. | هل تسمعني الآن؟ / عذرا، صوتك يتقطع. سأعاود الاتصال بك.
I'm on my way. | Are you almost here? | Yeah, I'm on my way! | هل اقتربت؟ / نعم، أنا في الطريق!
I'm here for sightseeing. | What's the purpose of your visit? | I'm here for sightseeing. | ما الغرض من زيارتك؟ / جئت للسياحة.
I'm staying for a week. | How long are you staying? | I'm staying for a week. | كم ستبقى؟ / سأبقى أسبوعا.
Window or aisle? | Window or aisle? | Aisle, please. | نافذة أم ممر؟ / ممر من فضلك.
I have a reservation under Haddad. | Hi, are you checking in? | Yes, I have a reservation under Haddad. | أهلا، هل تريد تسجيل الدخول؟ / نعم، عندي حجز باسم حداد.
The air conditioner isn't working. | Front desk. How can I help you? | Hi, the air conditioner isn't working in room 512. | الاستقبال، كيف يمكنني مساعدتك؟ / مرحبا، المكيف في الغرفة 512 لا يعمل.
My luggage is missing. | My luggage is missing. | I'm sorry about that. Can I see your baggage tag? | أمتعتي مفقودة. / نأسف لذلك. هل يمكنني رؤية بطاقة الأمتعة؟
I don't feel well. | Are you okay? You look pale. | I don't feel well. I think I need to sit down. | هل أنت بخير؟ تبدو شاحبا. / لست على ما يرام، أظن أنني بحاجة إلى الجلوس.
I have a sore throat. | What seems to be the problem? | I have a sore throat and a slight fever. | مم تشكو؟ / عندي التهاب في الحلق وحمى خفيفة.
I lost my wallet. | I lost my wallet. I think I left it on the bus. | Let's call the bus company's lost and found. | أضعت محفظتي، أظن أنني نسيتها في الحافلة. / لنتصل بمكتب المفقودات في شركة الحافلات.
hang out | Do you want to hang out this weekend? | Sure! Let's go see a movie. | هل تريد أن نخرج معا في العطلة الأسبوعية؟ / طبعا! لنذهب لمشاهدة فيلم.
pick up | Can you pick me up at the airport? | Of course. What time does your flight land? | هل يمكنك أن تأخذني من المطار؟ / طبعا. متى تهبط طائرتك؟
work out | You look great! Do you work out? | Yeah, I go to the gym three times a week. | تبدو رائعا! هل تتمرن؟ / نعم، أذهب إلى النادي الرياضي ثلاث مرات في الأسبوع.
It's not my cup of tea. | Do you want to go to the jazz concert? | Thanks, but honestly, it's not my cup of tea. | هل تريد الذهاب إلى حفلة الجاز؟ / شكرا، لكن بصراحة هذا ليس من ذوقي.
Speak of the devil! | Have you seen Mark today? | Speak of the devil! Here he comes. | هل رأيت مارك اليوم؟ / ذكرناه فحضر! ها هو قادم.
I'm feeling under the weather. | Are you coming to the party tonight? | I don't think so. I'm feeling under the weather. | هل ستأتي إلى الحفلة الليلة؟ / لا أظن، أشعر بتوعك بسيط.
Spill the tea. | I heard something crazy about Jen and Mike. | Wait, what? Spill the tea! | سمعت شيئا لا يصدق عن جين ومايك. / لحظة، ماذا؟ احك لي القصة كلها!
No spoilers! | Did you finish the show? The ending is... | No spoilers! I'm only on episode 3. | هل أنهيت المسلسل؟ النهاية… / بلا حرق للأحداث! ما زلت في الحلقة الثالثة.
Who's your bias? | Who's your bias? | Definitely the lead singer. What about you? | من عضوك المفضل في الفرقة؟ / المغني الرئيسي طبعا. وأنت؟
`;

exports.EXAMPLES = `
I'm a student. | I'm a student at a university in Cairo. | أنا طالب في إحدى جامعات القاهرة.
I work in marketing. | I work in marketing at a game company. | أعمل في التسويق في شركة ألعاب إلكترونية.
I like watching movies. | I like watching movies on the weekends. | أحب مشاهدة الأفلام في العطلة الأسبوعية.
I've been learning English for a year. | I've been learning English for a year, but speaking is still hard. | أتعلم الإنجليزية منذ سنة، لكن الكلام ما زال صعبا.
Thanks a lot. | Thanks a lot for your help today. | شكرا جزيلا على مساعدتك اليوم.
I speak a little English. | Sorry, I only speak a little English. | عذرا، لا أتكلم الإنجليزية إلا قليلا.
What does this mean? | What does this word on the sign mean? | ماذا تعني هذه الكلمة على اللافتة؟
How much is this? | How much is this T-shirt? | بكم هذا القميص؟
Can I pay by card? | Can I pay by card, or is it cash only? | هل يمكنني الدفع بالبطاقة، أم الدفع نقدا فقط؟
Just a second. | Just a second, I'm almost done. | ثانية واحدة، أوشكت على الانتهاء.
I'm not sure. | I'm not sure, but I think it's on the second floor. | لست متأكدا، لكن أظنه في الطابق الأول.
It's next to the bank. | The café is next to the bank on Main Street. | المقهى بجانب البنك في الشارع الرئيسي.
Turn left at the corner. | Turn left at the corner, and you'll see the station. | انعطف يسارا عند الزاوية وسترى المحطة.
Where do I transfer? | Where do I transfer to get downtown? | أين أبدل القطار للوصول إلى وسط المدينة؟
Can I get a Coke? | Can I get a Coke with no ice? | كولا بلا ثلج من فضلك.
Is it spicy? | Is it spicy? I can't handle spicy food. | هل هو حار؟ لا أتحمل الطعام الحار.
Can we split the bill? | Can we split the bill three ways? | هل يمكننا تقسيم الحساب على ثلاثة؟
Can I get this to go? | I can't finish this. Can I get this to go? | لا أستطيع إنهاء هذا. هل يمكنني أخذه معي؟
Less ice, please. | Can I get a large iced latte? Less ice, please. | لاتيه مثلج كبير من فضلك، وثلج أقل.
Can I get a receipt? | Can I get a receipt? It's for work. | أريد إيصالا من فضلك، أحتاجه للعمل.
Is this on sale? | Is this jacket on sale? | هل على هذه السترة تخفيض؟
I'd like to exchange this. | I'd like to exchange this for a smaller size. | أريد أن أستبدل هذا بمقاس أصغر.
It's a bit tight. | These jeans are a bit tight. | هذا الجينز ضيق قليلا.
It's three thirty. | It's three thirty. We have half an hour left. | الساعة الثالثة والنصف. بقي لدينا نصف ساعة.
My birthday is in October. | My birthday is in October, just like my mom's. | عيد ميلادي في أكتوبر، مثل عيد ميلاد أمي.
In ten minutes | The train leaves in ten minutes. | يغادر القطار بعد عشر دقائق.
Twice a week | I go to the gym twice a week. | أذهب إلى النادي الرياضي مرتين في الأسبوع.
It was pretty relaxing. | It was pretty relaxing. I just read and slept. | كانت مريحة إلى حد كبير، قرأت ونمت فقط.
Have you been to Morocco? | Have you been to Morocco? You should visit Marrakesh. | هل زرت المغرب؟ يجب أن تزور مراكش.
By the way | By the way, did you see the game last night? | بالمناسبة، هل شاهدت المباراة أمس؟
I'm bored. | I'm bored. Do you want to go for a walk? | أشعر بالملل. هل تريد أن نتمشى قليلا؟
I'm nervous. | I'm nervous about my job interview tomorrow. | أشعر بالتوتر بسبب مقابلة العمل غدا.
I can't wait! | We're going to Hawaii next week. I can't wait! | سنسافر إلى هاواي الأسبوع القادم. لا أطيق الانتظار!
That color looks good on you. | That color looks good on you. You should wear it more often. | هذا اللون يليق بك. ينبغي أن ترتديه أكثر.
You made my day! | Thanks for the cookies. You made my day! | شكرا على الكعك. أسعدت يومي!
Let me know if you have any questions. | I've attached the slides. Let me know if you have any questions. | أرفقت الشرائح. أخبرني إذا كانت لديك أي أسئلة.
Could you send me the file by Friday? | Could you send me the file by Friday? I need it for the presentation. | هل يمكنك إرسال الملف قبل يوم الجمعة؟ أحتاجه للعرض.
Let's touch base next week. | Let's touch base next week and see how things are going. | لنتواصل الأسبوع القادم ونرى كيف تسير الأمور.
I'm working from home today. | I'm working from home today, so let's meet on Zoom. | أعمل من البيت اليوم، فلنلتق عبر زووم.
Can I call you back? | I'm driving right now. Can I call you back? | أنا أقود السيارة الآن. هل يمكنني معاودة الاتصال بك؟
Is breakfast included? | Is breakfast included, or is it extra? | هل الفطور مشمول، أم بتكلفة إضافية؟
My flight was delayed. | My flight was delayed by three hours. | تأخرت رحلتي ثلاث ساعات.
I have a headache. | I have a headache. Do you have any painkillers? | عندي صداع. هل عندك مسكن؟
figure out | I can't figure out how to use this machine. | لا أعرف كيف أستعمل هذه الآلة.
run out of | We ran out of coffee, so I'm going to the store. | نفدت القهوة، لذلك سأذهب إلى المتجر.
look forward to | I'm looking forward to seeing you next week. | أتطلع إلى رؤيتك الأسبوع القادم.
put off | Stop putting off your homework! | كفى تأجيلا لواجباتك!
get along with | I get along with my roommate really well. | أتفاهم جيدا جدا مع زميلي في السكن.
It costs an arm and a leg. | Living in New York costs an arm and a leg. | العيش في نيويورك يكلف ثروة.
Once in a blue moon | I only drink soda once in a blue moon. | لا أشرب المشروبات الغازية إلا نادرا جدا.
Low-key | I low-key want to dye my hair pink. | في الحقيقة أرغب قليلا في صبغ شعري باللون الوردي.
I binge-watched the whole season. | I binge-watched the whole season in one weekend. | شاهدت الموسم كله دفعة واحدة في عطلة أسبوعية واحدة.
rice | I had rice and chicken for lunch. | أكلت أرزا ودجاجا على الغداء.
think | I think so, too. | أظن ذلك أيضا.
turn on | Can you turn on the air conditioner? It's so hot. | هل يمكنك تشغيل المكيف؟ الجو حار جدا.
park | Can I park here? | هل يمكنني ركن السيارة هنا؟
I'm having a party. | I'm having a party on Friday. Can you come? | سأقيم حفلة يوم الجمعة. هل يمكنك الحضور؟
I need some information. | I need some information about the course. | أحتاج إلى بعض المعلومات عن الدورة.
Actually, I'm busy. | Actually, I'm busy tonight. How about tomorrow? | في الحقيقة، أنا مشغول الليلة. ما رأيك في الغد؟
`;

/* pattern | الشرح | example | lesson id */
exports.PATTERNS = `
Could you ~? | طلب مهذب بمعنى "هل يمكنك أن…؟"، وهو ألطف من Can you | Could you help me with this? | polite
Would you mind ~ing? | طلب مهذب جدا بمعنى "هل تمانع أن…؟"، والجواب No يعني "لا مانع، تفضل" | Would you mind closing the window? | polite
Can I get ~? | في المتجر أو المطعم بمعنى "أريد… من فضلك"، وهو الأشيع في الكلام الأمريكي | Can I get a large latte? | polite
I'd like ~ | صيغة مهذبة من want بمعنى "أود…" | I'd like a window seat, please. | polite
a / an + اسم | لشيء واحد معدود نذكره لأول مرة، و an قبل صوت متحرك | I have an idea. | articles
the + اسم | للشيء المحدد الذي يعرفه الطرفان | Can you open the door? | articles
I am / You are / She is | فعل الكينونة: "يكون" أو "يوجد في مكان" أو "في حالة"، ولا يحذف كما في الجملة الاسمية العربية | She is a nurse. | be
Do you ~? / Does he ~? | السؤال مع الأفعال الأخرى غير be، و does مع الفاعل المفرد الغائب | Does he live here? | be
don't / doesn't + الفعل | النفي مع الأفعال الأخرى غير be | I don't eat meat. | be
he / she / it + الفعل-s | في المضارع البسيط نضيف s إلى الفعل بعد he و she و it | My sister works at a hospital. | be
be + -ing | ما يحدث الآن، أو خطة محددة في المستقبل القريب | I'm meeting Jake tonight. | tense
الفعل-ed / الماضي الشاذ | حدث انتهى في الماضي (went و ate و saw…) | I went to Cairo last week. | tense
will + الفعل | قرار لحظي أو وعد أو توقع | I'll call you later. | tense
be going to + الفعل | خطة مقررة مسبقا | I'm going to visit my parents this weekend. | tense
Have you ever ~? | للسؤال عن التجربة: "هل سبق أن…؟" | Have you ever tried falafel? | tense
in + الشهر أو السنة أو الفصل | لمدة زمنية واسعة | My birthday is in June. | prep
on + اليوم أو التاريخ | ليوم بعينه | The party is on Saturday. | prep
at + الساعة أو المكان المحدد | لوقت دقيق أو نقطة محددة | Let's meet at 7 at the station. | prep
How about ~ing? | اقتراح بمعنى "ما رأيك في…؟" | How about getting lunch together? | smalltalk
So do I / Neither do I | موافقة بمعنى "وأنا كذلك" في الإثبات و"ولا أنا" في النفي، وبأسلوب غير رسمي Me too و Me neither | I love this song. / So do I. | smalltalk
الفعل + it + الظرف | إذا كان مفعول الفعل المركب ضميرا فمكانه في الوسط | Can you turn it down? | phrasal
look forward to + -ing | كلمة to هنا حرف جر، فيأتي بعدها الفعل بصيغة -ing | I'm looking forward to hearing from you. | phrasal
It's + الساعة | لقول الوقت نقرأ الساعة ثم الدقائق كما هي | It's ten fifteen. | numbers
I'm writing to ~ | لذكر الغرض في أول جملة من البريد الإلكتروني | I'm writing to confirm our meeting. | email
Let me know if ~ | ختام للبريد بمعنى "أخبرني إذا…" | Let me know if you need anything else. | email
`;

exports.PAUSE = {
compliment: `
You're amazing | أنت مذهل
You nailed it | أديت المهمة على أكمل وجه
You're a natural | موهبتك فطرية
Looking sharp! | تبدو أنيقا اليوم!
You're so thoughtful | ما ألطفك وأكثر مراعاتك للآخرين
You have a great sense of humor | روحك مرحة جدا
You're one of a kind | لا يوجد مثلك
You light up the room | وجودك يبعث البهجة في المكان
I admire you | أنا معجب بك وأقدرك
You inspire me | أنت مصدر إلهام لي
You're really talented | أنت موهوب حقا
You're a great listener | تحسن الإصغاء كثيرا
You've got this | أنت قادر على ذلك
That's brilliant | فكرة عبقرية
You're so easy to talk to | الحديث معك مريح جدا
You always know what to say | تعرف دائما الكلمة المناسبة
You're a good friend | أنت صديق وفي
Your hard work shows | جهدك واضح للعيان
You're glowing | وجهك مشرق
Well said | أحسنت القول
`,
expression: `
Sounds good | فكرة جيدة
Fair enough | معك حق / هذا منطقي
Makes sense | مفهوم / هذا معقول
Got it | فهمت
I see | أرى ذلك / فهمت قصدك
No kidding | حقا؟ / فعلا كذلك
Good point | ملاحظة في محلها
Exactly | بالضبط
Totally | تماما / بكل تأكيد
Never mind | لا بأس، انس الأمر
My bad | خطئي أنا
It depends | يتوقف على الظروف
Whatever works | كما يناسبك
Let me think | دعني أفكر
Here we go | ها نحن نبدأ
Hang on | لحظة من فضلك
Fingers crossed | نتمنى الخير
You bet | بالتأكيد
Count me in | أنا معكم
Sort of | إلى حد ما
`,
polite: `
Please | من فضلك
Thank you so much | شكرا جزيلا لك
Pardon me | عفوا / المعذرة
Go ahead | تفضل
May I come in? | هل يمكنني الدخول؟
Sorry to bother you | آسف على الإزعاج
I appreciate it | أقدر لك ذلك
Bless you | يرحمك الله (لمن عطس)
Have a nice day | أتمنى لك يوما سعيدا
Nice to see you | سعدت برؤيتك (لمن نعرفه)
If you don't mind | إن لم يكن لديك مانع
Would you like some? | هل تريد بعضا منه؟
Help yourself | تفضل، خذ ما تشاء
It's my pleasure | بكل سرور
Sorry I'm late | آسف على التأخير
Thank you for your time | شكرا على وقتك
I beg your pardon? | عفوا، ماذا قلت؟ (بأسلوب رسمي)
Don't mention it | لا شكر على واجب
Cheers | شكرا (في بريطانيا) / في صحتك
Excuse me, coming through | عفوا، اسمحوا لي بالمرور
`,
saying: `
Practice makes perfect | التمرين يصنع الإتقان
Where there's a will, there's a way | من جد وجد
Rome wasn't built in a day | لم تبن روما في يوم واحد
Time is money | الوقت من ذهب
Better safe than sorry | الوقاية خير من العلاج
Two heads are better than one | رأيان خير من رأي
Don't judge a book by its cover | لا تحكم على الكتاب من غلافه
When in Rome, do as the Romans do | يا غريب كن أديبا
Slow and steady wins the race | في التأني السلامة
Knowledge is power | العلم قوة
Honesty is the best policy | الصدق منجاة
Seeing is believing | ليس الخبر كالمعاينة
Out of sight, out of mind | البعيد عن العين بعيد عن القلب
Laughter is the best medicine | الضحك أفضل دواء
Live and learn | الحياة مدرسة
A friend in need is a friend indeed | الصديق وقت الضيق
It's never too late to learn | لا يفوت أوان التعلم أبدا
Every expert was once a beginner | كل خبير كان يوما مبتدئا
Stay hungry, stay foolish | ابق جائعا، ابق أحمق
Small steps every day | خطوات صغيرة كل يوم
`
};

/* idiom | المعنى | النطق | الشرح */
exports.IDIOMS = `
Break a leg | بالتوفيق! | /ˈbreɪk ə ˈleg/ | تشجيع قبل عرض أو امتحان أو مقابلة، بدلا من Good luck، ولا علاقة له بكسر الساق
Bite the bullet | يتحمل الأمر على مضض | /ˈbaɪt ðə ˈbʊlɪt/ | عند اتخاذ قرار بفعل شيء مزعج لا مفر منه
Cut corners | يستسهل / يختصر الخطوات | /ˈkʌt ˈkɔːrnərz/ | عندما نترك خطوات ضرورية توفيرا للمال أو الوقت، وهي ذم
Hit the sack | يذهب إلى النوم | /ˈhɪt ðə ˈsæk/ | تعبير غير رسمي: I'm tired. I'm going to hit the sack
Let the cat out of the bag | يفشي السر | /ˈlet ðə ˈkæt ˈaʊt əv ðə ˈbæg/ | مثل ذكر خطة حفلة مفاجئة دون قصد
Kill two birds with one stone | يضرب عصفورين بحجر واحد | /ˈkɪl ˈtuː ˈbɜːrdz wɪð ˈwʌn ˈstoʊn/ | لإنجاز أمرين معا، والصورة نفسها في العربية
Burn the midnight oil | يسهر في العمل أو الدراسة | /ˈbɜːrn ðə ˈmɪdnaɪt ˈɔɪl/ | في أيام الامتحانات أو قبل موعد التسليم
The best of both worlds | الجمع بين الحسنيين | /ðə ˈbest əv ˈboʊθ ˈwɜːrldz/ | عندما نحصل على ميزتين معا
A blessing in disguise | رب ضارة نافعة | /ə ˈblesɪŋ ɪn dɪsˈgaɪz/ | أمر بدا سيئا في البداية ثم تبين أنه خير
Every cloud has a silver lining | بعد الضيق فرج | /ˈevri ˈklaʊd ˈhæz ə ˈsɪlvər ˈlaɪnɪŋ/ | لمواساة من يمر بظرف صعب
Get cold feet | يتردد في آخر لحظة | /ˈget ˈkoʊld ˈfiːt/ | قبل حفل الزفاف أو قرار كبير
Hit the nail on the head | أصاب كبد الحقيقة | /ˈhɪt ðə ˈneɪl ɑːn ðə ˈhed/ | عندما يقول أحدهم الكلام الصحيح تماما
In the same boat | في المركب نفسه | /ɪn ðə ˈseɪm ˈboʊt/ | لمن يواجهون الصعوبة نفسها: Don't worry, we're all in the same boat
Miss the boat | تفوته الفرصة | /ˈmɪs ðə ˈboʊt/ | عندما تمضي فرصة جيدة دون أن نغتنمها
No pain, no gain | من طلب العلا سهر الليالي | /ˈnoʊ ˈpeɪn ˈnoʊ ˈgeɪn/ | تقال كثيرا في الرياضة والدراسة
On the fence | مترددا لم يحسم أمره | /ɑːn ðə ˈfens/ | صورة من يقف على السور ولا ينزل إلى أي جهة: I'm still on the fence about the job offer
Pull someone's leg | يمازح / يخدع على سبيل المزاح | /ˈpʊl ˈsʌmwʌnz ˈleg/ | عند قول شيء غير صحيح مزاحا: Relax, I'm just pulling your leg
Sit tight | ينتظر بصبر في مكانه | /ˈsɪt ˈtaɪt/ | بمعنى الانتظار حتى تظهر النتيجة
The last straw | القشة التي قصمت ظهر البعير | /ðə ˈlæst ˈstrɔː/ | آخر ما يجعلنا نفقد صبرنا، والصورة قريبة من العربية
Throw in the towel | يستسلم | /ˈθroʊ ˈɪn ðə ˈtaʊəl/ | أصلها من الملاكمة، حيث تلقى المنشفة إعلانا للهزيمة
Actions speak louder than words | الأفعال أبلغ من الأقوال | /ˈækʃnz ˈspiːk ˈlaʊdər ðən ˈwɜːrdz/ | بمعنى أن العمل أهم من الكلام
Easier said than done | الكلام سهل والفعل صعب | /ˈiːziər ˈsed ðən ˈdʌn/ | لشيء يبدو سهلا في الكلام فقط
Go the extra mile | يبذل جهدا أكبر من المتوقع | /ˈgoʊ ði ˈekstrə ˈmaɪl/ | تقال كثيرا في المدح: She always goes the extra mile
Get out of hand | يخرج عن السيطرة | /ˈget ˈaʊt əv ˈhænd/ | عندما يفلت الموقف من أيدينا
Take a rain check | يؤجل إلى فرصة أخرى | /ˈteɪk ə ˈreɪn ˈtʃek/ | لرفض دعوة بلطف: Can I take a rain check
The early bird catches the worm | من بكر ظفر | /ði ˈɜːrli ˈbɜːrd ˈkætʃɪz ðə ˈwɜːrm/ | المجتهد الذي يبدأ مبكرا ينال الفرصة
`;
