/* Practice sets for the ar-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Modern Standard Arabic; answers are English.
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check: at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "الكلمة التي معناها \"أرز\":", o: ["rice", "lice", "rise", "nice"], why: "كلمة rice تبدأ بالصوت r. وإذا لمس طرف اللسان اللثة صارت lice (قمل)." },
    { t: "mc", q: "الكلمة التي معناها \"مروحة\":", o: ["fan", "pan", "van", "ban"], why: "في fan تلمس الأسنان العليا الشفة السفلى. وإذا التقت الشفتان صارت pan (مقلاة)، وهذا من أهم الفروق للمتحدثين بالعربية." },
    { t: "mc", q: "الكلمة التي معناها \"يفكر\":", o: ["think", "sink", "thing", "pink"], why: "الصوت th في think هو الثاء، وطرف اللسان بين الأسنان. وبالسين تصبح الكلمة sink (حوض)." },
    { t: "mc", q: "الكلمة التي معناها \"يصوت\":", o: ["vote", "boat", "goat", "bought"], why: "الصوت v كالفاء مع اهتزاز الحلق. وإذا أغلقنا الشفتين صار b، فتصبح الكلمة boat (قارب). وهذا من أهم الفروق للمتحدثين بالعربية." },
    { t: "mc", q: "الكلمة التي معناها \"اليمين\":", o: ["right", "light", "fight", "bright"], why: "كلمة right تبدأ بالصوت r، أما light فمعناها ضوء. الراء واللام منفصلتان في العربية، فهذا الفرق سهل علينا." },

    { t: "order", p: "هذه موزة", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "الكلمة banana تبدأ بصوت ساكن، فتأخذ أداة التنكير a وليس an. والجملة تحتاج فعل الكينونة is، و this تكتب بالحرفين th في أولها." },
    { t: "order", p: "ثلاث شجرات", a: ["three", "trees"], x: ["tree", "free"], why: "بعد three نستخدم صيغة الجمع trees. والكلمة three تبدأ بالثاء، أما tree فتبدأ بالصوتين t و r بلا حركة بينهما." },
    { t: "order", p: "أحب القهوة", a: ["I", "like", "coffee"], x: ["copy"], why: "في coffee الصوت f: الأسنان العليا على الشفة السفلى. وبالصوت p تصبح الكلمة copy (نسخة)." },

    { t: "fill", q: "I eat __ice every day.", p: "آكل الأرز كل يوم", a: ["r"], o: ["l", "n", "w"], why: "الأرز هو rice بالصوت r، وبالصوت l تصبح الكلمة lice (قمل)." },
    { t: "fill", q: "I __ink so.", p: "أظن ذلك", a: ["th"], o: ["s", "t", "p"], why: "الفعل think يبدأ بالثاء th، وبالسين يصبح sink (حوض)." },
    { t: "fill", q: "This is my __.", p: "هذه حقيبتي", a: ["bag"], o: ["back", "bug", "beg"], why: "الحقيبة هي bag وآخرها الصوت g. وإذا انتهت بالصوت k صارت back (ظهر)." },

    { t: "type", p: "ثلاث شجرات", a: ["three trees"], hint: "الكلمات: three · tree — بعد three صيغة الجمع", x: ["tree"], why: "بعد three نستخدم صيغة الجمع trees، ونبدأ three بالثاء، و tree بصوتين ساكنين بلا حركة بينهما." },
    { t: "type", p: "قاربان", a: ["two boats"], hint: "الكلمات: two · boat — الإنجليزية ليس فيها مثنى", x: ["boat", "votes"], why: "الإنجليزية ليس فيها مثنى: بعد two نستخدم صيغة الجمع boats. والقارب boat بالصوت b، أما vote فمعناها يصوت." },
    { t: "type", p: "خفيف جدا", a: ["very light"], hint: "الكلمات: very · light — الصوتان v و l", x: ["berry"], why: "الكلمة very تبدأ بالصوت v (الأسنان على الشفة)، و light تبدأ بالصوت l (اللسان على اللثة). وبالصوت b تصبح very كلمة berry (توت)." }
  ],

  articles: [
    { t: "mc", q: "بالإنجليزية: \"أنا طالب\"", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "قبل المهنة أو الدراسة نضع أداة التنكير a، مع أن العربية لا تضع شيئا قبل \"طالب\"." },
    { t: "mc", q: "بالإنجليزية: \"عندي فكرة\"", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "الكلمة idea تبدأ بصوت متحرك، فنستخدم أداة التنكير an" },
    { t: "mc", q: "بالإنجليزية: \"ساعة واحدة\" (مدة من الزمن)", o: ["an hour", "a hour", "one hours", "hour"], why: "حرف h في hour لا ينطق، فالكلمة تبدأ بصوت متحرك وتأخذ أداة التنكير an" },
    { t: "mc", q: "بالإنجليزية: \"أحب الكلاب كثيرا\" (الكلاب عموما)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "في الكلام العام نستخدم صيغة الجمع بلا أداة تعريف، مع أن العربية تقول \"الكلاب\"." },
    { t: "mc", q: "بالإنجليزية: \"عندي كلب. الكلب لطيف جدا\"", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "في الذكر الأول نستخدم أداة التنكير a، وعندما نعود إلى الكلب نفسه نستخدم أداة التعريف the" },

    { t: "order", p: "أنا معلم", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "قبل المهنة نضع أداة التنكير a، والكلمة teacher تبدأ بصوت ساكن فلا نقول an" },
    { t: "order", p: "هل يمكنك إغلاق الباب؟ (باب هذه الغرفة)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "الباب معروف للطرفين، فنستخدم أداة التعريف the" },
    { t: "order", p: "لا أشرب القهوة", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "القهوة هنا بمعناها العام، فلا نستخدم أداة تعريف ولا أداة تنكير، مع أن العربية تقول \"القهوة\"." },

    { t: "fill", q: "I'm __ university student.", p: "أنا طالب جامعي", a: ["a"], o: ["an", "the", "two"], why: "الكلمة university تبدأ بالصوت /j/، وهو صوت ساكن، فنقول a. العبرة بالصوت لا بالحرف." },
    { t: "fill", q: "I have __ older sister.", p: "عندي أخت أكبر مني", a: ["an"], o: ["a", "the", "two"], why: "الكلمة older تبدأ بصوت متحرك، فنستخدم أداة التنكير an" },
    { t: "fill", q: "I don't like __.", p: "لا أحب القطط (القطط عموما)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "في الكلام العام نستخدم صيغة الجمع cats بلا أداة" },

    { t: "type", p: "عندي فكرة", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "الكلمات: have · idea — قبل الصوت المتحرك", x: ["a"], why: "الكلمة idea تبدأ بصوت متحرك، فنستخدم أداة التنكير an" },
    { t: "type", p: "أحب الكلاب (الكلاب عموما)", a: ["I like dogs", "I love dogs"], hint: "الكلمات: like · dog — الكلام العام بصيغة الجمع", x: ["dog", "a"], why: "في الكلام العام نستخدم صيغة الجمع dogs بلا أداة تعريف" },
    { t: "type", p: "لنتناول الغداء", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "الكلمات: let's · have · lunch — هل قبل الوجبة أداة؟", x: ["a", "the"], why: "أسماء الوجبات بلا أداة تعريف ولا أداة تنكير: have lunch" }
  ],

  be: [
    { t: "mc", q: "بالإنجليزية: \"أنا متعب\"", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "نقول في العربية \"أنا متعب\" بلا فعل، أما الإنجليزية فتحتاج فعل الكينونة قبل الصفة: I'm tired" },
    { t: "mc", q: "بالإنجليزية: \"هل يتكلم الإنجليزية؟\" (عن رجل)", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "مع he نسأل باستخدام does، والفعل بعدها بلا s. ولا نضع is قبل فعل آخر." },
    { t: "mc", q: "بالإنجليزية: \"هي في العمل\"", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "الجملة العربية بلا فعل، لكن الإنجليزية لا تحذف فعل الكينونة، ومع she نستخدم is" },
    { t: "mc", q: "الجواب بنعم عن السؤال Do you like coffee؟", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "السؤال بالفعل المساعد do، فنجيب به أيضا: Yes, I do" },
    { t: "mc", q: "بالإنجليزية: \"هي لا تأكل اللحم\"", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "مع she ننفي باستخدام doesn't، والفعل بعدها بلا s. ولا نقول isn't قبل فعل آخر." },

    { t: "order", p: "أخي يعمل في سول", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "الفاعل my brother مفرد غائب، فنقول works. ولا نضع is قبل فعل آخر." },
    { t: "order", p: "أنا لست طالبا", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "ننفي فعل الكينونة بإضافة not، وقبل student نضع أداة التنكير a" },
    { t: "order", p: "عندها كلبان", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "مع she نقول has. والإنجليزية ليس فيها مثنى: بعد two نستخدم صيغة الجمع dogs" },

    { t: "fill", q: "My brother __ in Seoul.", p: "أخي يسكن في سول", a: ["lives"], o: ["live", "is live", "living"], why: "الفاعل he مفرد غائب، فنضيف s إلى الفعل: lives. ولا نضع is قبل فعل آخر." },
    { t: "fill", q: "__ you tired?", p: "هل أنت متعب؟", a: ["Are"], o: ["Do", "Is", "Does"], why: "الكلمة tired صفة، فنسأل بفعل الكينونة، ومع you نقول Are" },
    { t: "fill", q: "We __ hungry.", p: "نحن جائعون", a: ["are"], o: ["is", "am", "do"], why: "الكلمة hungry صفة، فلا بد من فعل الكينونة، ومع we نقول are" },

    { t: "type", p: "هو معلم", a: ["He's a teacher", "He is a teacher"], hint: "الكلمة: teacher — مع فعل الكينونة وأداة التنكير", x: ["the"], why: "الجملة تحتاج فعل الكينونة is، والمهنة تحتاج أداة التنكير a" },
    { t: "type", p: "لا أحب القهوة", a: ["I don't like coffee", "I do not like coffee"], hint: "الكلمات: don't · like · coffee — نفي الفعل like", x: ["am"], why: "الفعل like ننفيه باستخدام don't، ولا نضع am قبله." },
    { t: "type", p: "هل عندها قطة؟", a: ["Does she have a cat"], hint: "الكلمات: does · have · cat — قطة واحدة غير محددة", x: ["has"], why: "بعد does يأتي الفعل have بلا s، والقطة الواحدة غير المحددة تحتاج أداة التنكير a" }
  ],

  polite: [
    { t: "mc", q: "في المقهى، أنسب طريقة لطلب كوب لاتيه:", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "في المحل نقول Can I get…؟، والكوب الواحد غير المحدد يحتاج أداة التنكير a" },
    { t: "mc", q: "أكثر طريقة مهذبة لطلب المساعدة من شخص لا نعرفه:", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "الصيغة Could you…؟ طلب مهذب نستخدمه مع من لا نعرفه." },
    { t: "mc", q: "لم نفهم كلام المتحدث. السؤال المهذب لطلب الإعادة:", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "الجملة Could you say that again؟ طريقة مهذبة لطلب الإعادة." },
    { t: "mc", q: "بأدب شديد: \"هل تمانع أن تلتقط لنا صورة؟\"", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "بعد mind نستخدم صيغة -ing: taking" },
    { t: "mc", q: "في الطائرة: \"أريد مقعدا بجانب النافذة\"", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "الصيغة I'd like… طلب مهذب، والمقعد واحد غير محدد فيحتاج أداة التنكير a" },

    { t: "order", p: "هل يمكنني الحصول على كوب لاتيه؟", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "نطلب كوبا واحدا أول مرة، فنستخدم أداة التنكير a" },
    { t: "order", p: "هل تمانع أن تفتح النافذة؟ (نافذة هذه الغرفة)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "بعد mind صيغة -ing، والنافذة معروفة للطرفين فنستخدم أداة التعريف the" },
    { t: "order", p: "هل يمكنك أن تتكلم ببطء أكثر؟", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "نطلب بأدب باستخدام Could you…؟، والكلمة slowly ظرف يصف الفعل speak" },

    { t: "fill", q: "Would you mind __ the door?", p: "هل تمانع أن تغلق الباب؟", a: ["closing"], o: ["close", "to close", "closed"], why: "بعد mind نستخدم صيغة -ing: closing" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "هل يمكنني الحصول على قهوة مثلجة؟", a: ["an"], o: ["a", "two", "many"], why: "الكلمة iced تبدأ بصوت متحرك /aɪ/، فنستخدم أداة التنكير an" },
    { t: "fill", q: "No, not at __.", p: "(جوابا عن Would you mind…؟) لا أمانع أبدا", a: ["all"], o: ["any", "one", "ever"], why: "الجملة No, not at all معناها \"لا أمانع أبدا\"، أي الموافقة." },

    { t: "type", p: "هل يمكنك مساعدتي؟ (بأدب)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "الكلمات: could · help — طلب مهذب", x: ["can"], why: "مع من لا نعرفه نطلب باستخدام Could you…؟" },
    { t: "type", p: "أريد مقعدا بجانب النافذة (بأدب)", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "الكلمات: I'd like · window seat — مقعد واحد غير محدد", x: ["the"], why: "نذكر المقعد أول مرة، وهو مقعد واحد، فنستخدم أداة التنكير a: a window seat" },
    { t: "type", p: "قهوتان من فضلك", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "الكلمات: two · coffee — الإنجليزية ليس فيها مثنى", x: ["coffee"], why: "في الطلب نعد أكواب القهوة، والإنجليزية ليس فيها مثنى: two مع صيغة الجمع coffees" }
  ],

  tense: [
    { t: "mc", q: "بالإنجليزية: \"أشرب القهوة الآن\"", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "ما يحدث الآن بصيغة be مع -ing، ولا نحذف فعل الكينونة am" },
    { t: "mc", q: "بالإنجليزية: \"ذهبت إلى الشاطئ في نهاية الأسبوع الماضي\"", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "ماضي go هو went، والشاطئ نقول معه أداة التعريف: the beach" },
    { t: "mc", q: "عن خطة الشهر القادم: \"سأزور جيجو\"", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "للخطة السابقة نستخدم be going to ثم التصريف الأول." },
    { t: "mc", q: "رن جرس الباب، فنقول فورا: \"سأفتح أنا!\"", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "القرار في لحظة الكلام بالفعل will" },
    { t: "mc", q: "التصريف الثاني (الماضي) من see:", o: ["saw", "seed", "seen", "sawed"], why: "الفعل see شاذ، وتصاريفه: see و saw و seen" },

    { t: "order", p: "أعمل في بنك (دائما)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "العمل الدائم بالمضارع البسيط، والبنك نذكره أول مرة فنستخدم أداة التنكير a" },
    { t: "order", p: "سأتصل بك لاحقا", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "الوعد الذي نقرره في لحظة الكلام بالفعل will" },
    { t: "order", p: "شاهدت فيلمين", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "ماضي see هو saw، والإنجليزية ليس فيها مثنى: بعد two نستخدم صيغة الجمع movies" },

    { t: "fill", q: "I __ pizza last night.", p: "أكلت البيتزا ليلة أمس", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "ماضي eat هو ate، وماضي have هو had" },
    { t: "fill", q: "__ you have fun?", p: "هل استمتعت؟", a: ["Did"], o: ["Does", "Are", "Were"], why: "نسأل عن الماضي باستخدام Did، والفعل بعدها في التصريف الأول." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "سأزور والدي", a: ["to"], o: ["for", "at", "on"], why: "للخطة نستخدم be going to ثم التصريف الأول." },

    { t: "type", p: "أعمل من البيت اليوم", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "الكلمات: work · from home · today — ما يحدث الآن", x: ["work"], why: "ما نفعله اليوم بصيغة be مع -ing، ولا نحذف am" },
    { t: "type", p: "ذهبت إلى الشاطئ في نهاية الأسبوع الماضي", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "الكلمات: go · beach · last weekend — الماضي وأداة التعريف", x: ["a"], why: "ماضي go هو went، والشاطئ معه أداة التعريف: the beach" },
    { t: "type", p: "سألتحق بدورة طبخ (خطة، باستخدام take)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "الكلمات: going to · take · cooking class — دورة واحدة غير محددة", x: ["the"], why: "للخطة نستخدم going to، والدورة نذكرها أول مرة فنستخدم أداة التنكير a" }
  ],

  prep: [
    { t: "mc", q: "بالإنجليزية: \"في مايو\"", o: ["in May", "on May", "at May", "to May"], why: "قبل الشهر نستخدم in" },
    { t: "mc", q: "بالإنجليزية: \"في 3 مايو\"", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "قبل التاريخ نستخدم on" },
    { t: "mc", q: "بالإنجليزية: \"أنا في الحافلة\" (الآن)", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "مع المواصلات العامة نستخدم on، لا in كما توحي \"في\". والحافلة معروفة، فنستخدم أداة التعريف the" },
    { t: "mc", q: "بالإنجليزية: \"في الليل\"", o: ["at night", "on night", "in night", "at the night"], why: "نقول at night بلا أداة تعريف، مع أن العربية تقول \"في الليل\"." },
    { t: "mc", q: "الجملة الصحيحة:", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "قبل المدينة نستخدم in، وأسماء المدن بلا أداة تعريف." },

    { t: "order", p: "لنلتق في المحطة (المحطة التي نعرفها)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "للنقطة المحددة نستخدم at، والمحطة معروفة للطرفين فنستخدم أداة التعريف the" },
    { t: "order", p: "هاتفي على الطاولة", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "على السطح نستخدم on، والطاولة أمامنا معروفة فنستخدم أداة التعريف the. والجملة تحتاج فعل الكينونة is" },
    { t: "order", p: "نراك الأسبوع القادم", a: ["See", "you", "next", "week"], x: ["on"], why: "قبل next لا نستخدم حرف جر." },

    { t: "fill", q: "The meeting is __ three.", p: "الاجتماع في الساعة الثالثة", a: ["at"], o: ["on", "to", "of"], why: "قبل الساعة المحددة نستخدم at" },
    { t: "fill", q: "I was born __ 1998.", p: "ولدت في عام 1998", a: ["in"], o: ["on", "at", "to"], why: "قبل السنة نستخدم in" },
    { t: "fill", q: "See you __ Friday.", p: "نراك يوم الجمعة", a: ["on"], o: ["in", "at", "to"], why: "قبل أيام الأسبوع نستخدم on" },

    { t: "type", p: "أشرب القهوة في الصباح", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "الكلمات: coffee · morning — in مع أداة التعريف", x: ["at"], why: "مع أجزاء اليوم نستخدم in، ولا بد من أداة التعريف: in the morning" },
    { t: "type", p: "أنا في البيت", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "الكلمات: at · home — بلا أداة", x: ["the"], why: "نقول at home بلا أداة تعريف، والجملة تحتاج فعل الكينونة am" },
    { t: "type", p: "نراك في عطلة نهاية الأسبوع القادمة", a: ["See you next weekend"], hint: "الكلمات: see · next weekend — هل قبل next حرف جر؟", x: ["on"], why: "قبل next لا نستخدم حرف جر، مع أن العربية تقول \"في\"." }
  ],

  smalltalk: [
    { t: "mc", q: "سألنا زميل: How was your weekend؟ الجواب المناسب:", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "السؤال عن الماضي، فنجيب بالماضي ونضيف معلومة." },
    { t: "mc", q: "جوابا عن I don't drink coffee: \"ولا أنا\"", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "للموافقة على جملة منفية نقول Me neither" },
    { t: "mc", q: "لإنهاء الحديث بلطف:", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "الجملة I should get going طريقة لطيفة للانصراف." },
    { t: "mc", q: "جملة مناسبة لبدء الحديث مع شخص نلتقيه أول مرة:", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "الطقس أكثر المواضيع أمانا في الدردشة القصيرة." },
    { t: "mc", q: "رد يظهر الاهتمام بعد I went to Busan last weekend:", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "الجملتان Oh, really و That sounds fun تظهران الاهتمام بكلام المتحدث." },

    { t: "order", p: "هل عندك خطط لعطلة نهاية الأسبوع؟", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "في هذا السؤال نستخدم صيغة الجمع plans، والعطلة القادمة معروفة فنستخدم أداة التعريف the" },
    { t: "order", p: "سعدت بالحديث معك", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "عبارة لإنهاء الحديث، وبعد nice تأتي صيغة -ing: talking" },
    { t: "order", p: "لا أحب أفلام الرعب", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "الكلام عن الأفلام عموما: صيغة الجمع movies بلا أداة تعريف" },

    { t: "fill", q: "Pretty good! How __ you?", p: "بخير! وأنت؟", a: ["about"], o: ["for", "with", "of"], why: "نجيب باختصار، ثم نرد السؤال بقولنا How about you" },
    { t: "fill", q: "I know, __?", p: "فعلا! / هذا ما أقوله!", a: ["right"], o: ["light", "yes", "true"], why: "العبارة I know, right موافقة قوية، والكلمة right تبدأ بالصوت r" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "هل شاهدت شيئا جميلا مؤخرا؟", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "بعد any في السؤال نستخدم صيغة الجمع مع الاسم المعدود." },

    { t: "type", p: "كيف كانت عطلتك في نهاية الأسبوع؟", a: ["How was your weekend"], hint: "الكلمات: how · weekend — بالماضي", x: ["is"], why: "عطلة نهاية الأسبوع مضت، فنسأل بالماضي was" },
    { t: "type", p: "الطقس لطيف اليوم", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "الكلمات: nice · weather · today — هل نضع أداة تنكير؟", x: ["a"], why: "الكلمة weather اسم غير معدود، فلا نضع قبلها أداة التنكير a" },
    { t: "type", p: "أحب مشاهدة الأفلام", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "الكلمات: like · watch · movie — الكلام العام بصيغة الجمع", x: ["movie"], why: "الكلام عن الأفلام عموما، فنستخدم صيغة الجمع movies" }
  ],

  phrasal: [
    { t: "mc", q: "بالإنجليزية: \"شغله\" (الجهاز)", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "الضمير it يأتي في وسط الفعل المركب: turn it on" },
    { t: "mc", q: "بالإنجليزية: \"نفد الحليب عندنا\"", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "التعبير run out of معناه \"نفد\"، ولا ننسى of" },
    { t: "mc", q: "بالإنجليزية: \"نشأت في دايغو\"", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "الفعل grow up معناه \"نشأ\"، وماضيه grew up" },
    { t: "mc", q: "بالإنجليزية: \"هل يمكنك أن تعتني بقطتي؟\"", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "الفعل look after معناه \"يعتني\"، ولا ينفصل. أما look for فمعناه \"يبحث عن\"." },
    { t: "mc", q: "بالإنجليزية: \"سآتي لأخذك في السابعة\"", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "الضمير you يأتي بين pick و up" },

    { t: "order", p: "أبحث عن نظارتي", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "النظارة دائما بصيغة الجمع glasses، أما glass فمعناها كأس. و\"يبحث عن\" هو look for" },
    { t: "order", p: "لنتوصل إلى خطة", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "التعبير come up with معناه \"يتوصل إلى فكرة\"، والخطة جديدة غير محددة فنستخدم أداة التنكير a" },
    { t: "order", p: "سآتي لأخذك", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "الضمير you يأتي بين pick و up" },

    { t: "fill", q: "Can you turn it __?", p: "هل يمكنك أن تطفئه؟", a: ["off"], o: ["of", "on", "out"], why: "الفعل \"يطفئ\" هو turn off، ولا نخلط بين off و of في الكتابة." },
    { t: "fill", q: "I work __ every morning.", p: "أتمرن كل صباح", a: ["out"], o: ["up", "off", "on"], why: "الفعل work out معناه \"يتمرن\"." },
    { t: "fill", q: "We ran out of __.", p: "نفد البيض عندنا", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "البيض اسم معدود، فعندما ينفد نستخدم صيغة الجمع eggs" },

    { t: "type", p: "أطفئه من فضلك", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "الكلمات: turn · off — الضمير في الوسط", x: ["on"], why: "الضمير it يأتي بين turn و off" },
    { t: "type", p: "أعتني بقطتين (بالمضارع البسيط)", a: ["I look after two cats", "I take care of two cats"], hint: "الكلمات: look after · two · cat — الإنجليزية ليس فيها مثنى", x: ["cat"], why: "الفعل look after معناه \"يعتني\"، والإنجليزية ليس فيها مثنى: two مع صيغة الجمع cats" },
    { t: "type", p: "نفد الحليب عندنا", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "الكلمات: run out of · milk — هل نضع أداة تنكير؟", x: ["a"], why: "الكلمة milk اسم غير معدود، فلا نضع قبلها أداة التنكير a" }
  ],

  numbers: [
    { t: "mc", q: "الرقم 10,000 (عشرة آلاف) بالإنجليزية:", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "نقسم الرقم ثلاث خانات: 10 ثم thousand. ولا نضيف s إلى thousand بعد الرقم، مع أن العربية تقول \"آلاف\"." },
    { t: "mc", q: "الرقم 1,000,000 (مليون) بالإنجليزية:", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "فاصلتان تعنيان million، ولا نضيف s إلى million بعد الرقم." },
    { t: "mc", q: "قراءة الوقت 9:05:", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "من الدقيقة 1 إلى 9 نضيف oh قبل الرقم." },
    { t: "mc", q: "القراءة الطبيعية لسعر 4 دولارات و 99 سنتا:", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "نقرأ السعر رقمين: four ninety-nine" },
    { t: "mc", q: "قراءة السنة 2026 بالإنجليزية:", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "نقرأ السنة رقمين رقمين." },

    { t: "order", p: "الساعة السابعة والربع", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "الرقم 15 هو fifteen والنبر في آخره، أما 50 فهو fifty والنبر في أوله." },
    { t: "order", p: "ثمنه 15 دولارا", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "بعد أي رقم أكبر من واحد نستخدم صيغة الجمع dollars، مع أن العربية تقول \"15 دولارا\" بالمفرد." },
    { t: "order", p: "مرتين في الأسبوع", a: ["twice", "a", "week"], x: ["the", "one"], why: "في التعبير عن عدد المرات نستخدم أداة التنكير a: twice a week، وليس the" },

    { t: "fill", q: "It's __ quarter past ten.", p: "الساعة العاشرة والربع", a: ["a"], o: ["the", "one", "an"], why: "قبل quarter (ربع ساعة) نضع أداة التنكير a" },
    { t: "fill", q: "That's fifty __ won.", p: "ثمنه خمسون ألف وون", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "الرقم 50,000 هو fifty thousand، ولا نضيف s إلى thousand بعد الرقم." },
    { t: "fill", q: "I'll be there in ten __.", p: "سأصل بعد 10 دقائق", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "بعد ten نستخدم صيغة الجمع minutes" },

    { t: "type", p: "الساعة الثالثة والنصف", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "الكلمات: three · thirty — الساعة ثم الدقائق", x: ["thirteen"], why: "نقرأ الساعة ثم الدقائق: three thirty. ولا نخلط بين thirty و thirteen (الرقم 13)." },
    { t: "type", p: "ثمنه 20 دولارا (البداية: It's)", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "الكلمات: twenty · dollar — بعد الرقم صيغة الجمع", x: ["dollar"], why: "نقول في العربية \"20 دولارا\" بالمفرد، أما الإنجليزية فتستخدم صيغة الجمع بعد أي رقم أكبر من واحد: dollars" },
    { t: "type", p: "أتمرن مرتين في الأسبوع", a: ["I work out twice a week", "I exercise twice a week"], hint: "الكلمات: work out · twice · week — أي أداة قبل week؟", x: ["the"], why: "في التعبير عن عدد المرات نستخدم أداة التنكير a: a week، وليس the week" }
  ],

  email: [
    { t: "mc", q: "أنسب تحية بعد Dear:", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "بعد Dear نكتب اللقب واسم العائلة، لا المنصب وحده." },
    { t: "mc", q: "لإخبار المرسل إليه بأننا أرفقنا التقرير:", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "التقرير هو الذي سيستلمه بعينه، فنستخدم أداة التعريف the" },
    { t: "mc", q: "بالإنجليزية: \"ما الموعد النهائي؟\"", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "الموعد النهائي لهذا العمل بعينه، فنستخدم أداة التعريف the" },
    { t: "mc", q: "تأخرنا في الرد. عبارة إيجابية نكتبها بدل الاعتذار:", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "العبارة Thanks for your patience مهذبة بلا اعتذار. وننتبه إلى الكتابة: patients معناها المرضى." },
    { t: "mc", q: "تحية مناسبة في آخر رسالة قبل عطلة نهاية الأسبوع:", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "نتمنى عطلة واحدة، فنستخدم أداة التنكير a، والكلمة weekend مفردة." },

    { t: "order", p: "أرفقت التقرير", a: ["I've", "attached", "the", "report"], x: ["a"], why: "التقرير هو الذي سيستلمه بعينه، فنستخدم أداة التعريف the" },
    { t: "order", p: "لنحدد موعدا لاجتماع", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "الاجتماع لم نحدده بعد، فهو غير معروف ونستخدم أداة التنكير a" },
    { t: "order", p: "سأتحقق من الأمر وأرد عليك", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "التعبير get back to you معناه \"أرد عليك لاحقا\"، ونستخدم معه to" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "هل يمكنك إرسال الملف بحلول يوم الجمعة؟", a: ["by"], o: ["until", "in", "at"], why: "للموعد النهائي نستخدم by مع اليوم أو التاريخ." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "أكتب إليكم للسؤال عن الجدول الزمني", a: ["to"], o: ["for", "about", "at"], why: "للتعبير عن الغرض نقول I'm writing to ثم التصريف الأول." },
    { t: "fill", q: "Thanks for all your hard __!", p: "شكرا على كل جهودكم", a: ["work"], o: ["works", "working", "job"], why: "الكلمة work بمعنى العمل اسم غير معدود، فلا نضيف إليها s" },

    { t: "type", p: "أنا في إجازة غدا (باستخدام off)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "الكلمات: off · tomorrow — مع فعل الكينونة", x: ["do"], why: "عن يوم الإجازة نقول be off، ولا نحذف فعل الكينونة am" },
    { t: "type", p: "أرفقت الملف", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "الكلمات: attach · file — الملف المعروف", x: ["a"], why: "الملف هو الذي سيستلمه بعينه، فنستخدم أداة التعريف the" },
    { t: "type", p: "عطلة نهاية أسبوع رائعة! (باستخدام have)", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "الكلمات: have · great · weekend — عطلة واحدة", x: ["the"], why: "نتمنى عطلة واحدة، فنستخدم أداة التنكير a: a great weekend" }
  ],

  idioms: [
    { t: "mc", q: "بالإنجليزية: \"سهل جدا\" (تعبير اصطلاحي)", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "نحفظ التعبير كاملا: فيه أداة التنكير a، والكلمة cake مفردة." },
    { t: "mc", q: "بالإنجليزية: \"غال جدا\" (تعبير اصطلاحي)", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "الكلمة arm تبدأ بصوت متحرك فقبلها an، و leg تبدأ بصوت ساكن فقبلها a" },
    { t: "mc", q: "\"لنكتف بهذا القدر اليوم\" (تصلح في الاجتماعات):", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "التعبير call it a day نحفظه كاملا مع أداة التنكير a" },
    { t: "mc", q: "بالإنجليزية: \"أطير من الفرح\"", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "نقول on cloud nine بلا أداة وبلا صيغة الجمع." },
    { t: "mc", q: "عبارة عامية نستخدمها مع الأصدقاء فقط:", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "العبارة No cap عامية شبابية معناها \"بصدق\"، والباقي تعابير اصطلاحية تصلح في العمل أيضا." },

    { t: "order", p: "كلي آذان صاغية", a: ["I'm", "all", "ears"], x: ["ear"], why: "المعنى \"كلي آذان\"، فنستخدم صيغة الجمع ears كما نقول \"آذان\" في العربية." },
    { t: "order", p: "علي أن أدرس بجد", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "في التعبير hit the books نحفظ أداة التعريف the وصيغة الجمع books كما هما." },
    { t: "order", p: "ليس من النوع الذي أحبه", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "نحفظ not my cup of tea كاملا، ولا نضع أداة التعريف مع my" },

    { t: "fill", q: "Kill two __ with one stone.", p: "ضرب عصفورين بحجر واحد", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "العصفوران اثنان، والإنجليزية ليس فيها مثنى، فنستخدم صيغة الجمع birds" },
    { t: "fill", q: "Speak of the __!", p: "اذكر الذئب وهيئ له العصا! (كنا نتحدث عنه فجاء)", a: ["devil"], o: ["tiger", "angel", "bird"], why: "في الإنجليزية يأتي devil (الشيطان) مكان الذئب في المثل العربي." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "لست على ما يرام", a: ["the"], o: ["a", "an", "my"], why: "في التعبير under the weather نحفظ أداة التعريف the كما هي." },

    { t: "type", p: "هذا سهل جدا (تعبير اصطلاحي)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "الكلمات: piece · cake — لا ننسى الأداة", x: ["the"], why: "في التعبير a piece of cake لا بد من أداة التنكير a" },
    { t: "type", p: "أتمنى لك التوفيق (تعبير الأصابع)", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "الكلمات: keep · finger · crossed — كم إصبعا؟", x: ["finger"], why: "نشبك إصبعين، فنستخدم صيغة الجمع fingers" },
    { t: "type", p: "لنكتف بهذا القدر اليوم (تعبير اصطلاحي)", a: ["Let's call it a day"], hint: "الكلمات: call it · day — ليست the", x: ["the"], why: "في التعبير call it a day نستخدم أداة التنكير a، لا أداة التعريف the" }
  ]
};
