/* Practice sets for the zh-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Simplified Chinese; answers are English (identical to ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names 冠词 or 复数. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "意思是“米 / 米饭”的单词是？", o: ["rice", "lice", "rise", "nice"], why: "米饭是 R 开头的 rice。舌尖抵住上齿龈发成 L，就成了 lice（虱子）。" },
    { t: "mc", q: "意思是“风扇”的单词是？", o: ["fan", "pan", "van", "ban"], why: "F 是上齿轻触下唇送气。发成双唇爆破的 P，就成了 pan（平底锅）。" },
    { t: "mc", q: "意思是“想 / 认为”的单词是？", o: ["think", "sink", "thing", "pink"], why: "TH 要把舌尖轻轻伸到上下齿之间。读成 s 就成了 sink（水槽）。" },
    { t: "mc", q: "意思是“投票”的单词是？", o: ["vote", "boat", "goat", "bought"], why: "V 是 F 的口型加上声带振动。双唇闭合发成 B，就成了 boat（船）。" },
    { t: "mc", q: "意思是“右边”的单词是？", o: ["right", "light", "fight", "bright"], why: "R 开头的 right 是右边，L 开头的 light 是光。" },

    { t: "order", p: "这是一根香蕉", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana 以辅音开头，用冠词 a。this 要拼成 TH。" },
    { t: "order", p: "三棵树", a: ["three", "trees"], x: ["tree", "free"], why: "三棵要用复数，加 -s：trees。three 以 TH 开头，tree 以 TR 开头。" },
    { t: "order", p: "我喜欢咖啡", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee 里是上齿触下唇的 F。写成 P 就成了 copy（复制）。" },

    { t: "fill", q: "I eat __ice every day.", p: "我每天吃米饭", a: ["r"], o: ["l", "n", "w"], why: "米饭是 R 开头的 rice。写成 L 就成了 lice（虱子）。" },
    { t: "fill", q: "I __ink so.", p: "我觉得是", a: ["th"], o: ["s", "t", "p"], why: "think 以 TH 开头。写成 s 就成了 sink（水槽）。" },
    { t: "fill", q: "This is my __.", p: "这是我的包", a: ["bag"], o: ["back", "bug", "beg"], why: "包是以 g 结尾的 bag，词尾的浊辅音要读清楚。以 k 音结尾就成了 back（背）。" },

    { t: "type", p: "三棵树", a: ["three trees"], hint: "three · tree — 三棵要用复数", x: ["tree"], why: "three 以 TH 开头，tree 以 TR 开头；三棵要用复数，加 -s。" },
    { t: "type", p: "两条船", a: ["two boats"], hint: "two · boat — 两条要用复数", x: ["boat", "votes"], why: "船是 B 开头的 boat；两条要用复数，加 -s。写成 V 就成了 vote（投票）。" },
    { t: "type", p: "非常轻的", a: ["very light"], hint: "very · light — 分别以 V 和 L 开头", x: ["berry"], why: "very 以 V 开头（上齿触下唇），light 以 L 开头（舌尖抵住上齿龈）。" }
  ],

  articles: [
    { t: "mc", q: "“我是学生”=", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "职业、身份前面一定要加冠词 a。" },
    { t: "mc", q: "“我有个主意”=", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea 以元音音素开头，用冠词 an。" },
    { t: "mc", q: "“一个小时”用英语怎么说？", o: ["an hour", "a hour", "one hours", "hour"], why: "hour 的 h 不发音，以元音音素开头，所以用冠词 an。" },
    { t: "mc", q: "“我很喜欢狗”（泛指狗这种动物）", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "泛指一类东西时用复数，不加冠词。" },
    { t: "mc", q: "“我养了一只狗。那只狗特别可爱”=", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "第一次提到用冠词 a，再次提到用 the。" },

    { t: "order", p: "我是老师", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "职业前面要加冠词 a。teacher 以辅音开头，不用 an。" },
    { t: "order", p: "能把门关上吗？（这个房间的门）", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "双方都知道是哪扇门，所以用冠词 the。" },
    { t: "order", p: "我不喝咖啡", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "泛指咖啡，不加冠词。" },

    { t: "fill", q: "I'm __ university student.", p: "我是大学生", a: ["a"], o: ["an", "the", "two"], why: "university 以 /j/ 音开头，所以用冠词 a。看发音，不看拼写。" },
    { t: "fill", q: "I have __ older sister.", p: "我有一个姐姐", a: ["an"], o: ["a", "the", "two"], why: "older 以元音音素开头，所以用冠词 an。" },
    { t: "fill", q: "I don't like __.", p: "我不喜欢猫（泛指猫这种动物）", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "泛指一类东西，用复数 cats，不加冠词。" },

    { t: "type", p: "我有个主意", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — 元音前用哪个冠词？", x: ["a"], why: "idea 以元音音素开头，用冠词 an。" },
    { t: "type", p: "我喜欢狗（泛指狗这种动物）", a: ["I like dogs", "I love dogs"], hint: "like · dog — 泛指要用复数", x: ["dog", "a"], why: "泛指一类东西，用复数 dogs，不加冠词。" },
    { t: "type", p: "我们（一起）吃午饭吧", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — 三餐前要加冠词吗？", x: ["a", "the"], why: "三餐前面不加冠词。" }
  ],

  be: [
    { t: "mc", q: "“我累了”=", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "表示状态时一定要有 be 动词。" },
    { t: "mc", q: "“他会说英语吗？”=", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "主语是 he 要用 does，does 后面的动词用原形，不加 -s。" },
    { t: "mc", q: "“她在上班”=", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "表示位置用 be 动词，she 后面用 is。" },
    { t: "mc", q: "想用“喜欢”回答 Do you like coffee? 时", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "用 do 问，就用 do 答。" },
    { t: "mc", q: "“她不吃肉”=", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she 的否定是 doesn't + 动词原形（不加 -s）。" },

    { t: "order", p: "我哥哥在首尔工作", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "主语是第三人称单数 (he)，动词用 works，不加 be 动词。" },
    { t: "order", p: "我不是学生", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be 动词的否定加 not，身份前面要加冠词 a。" },
    { t: "order", p: "她养了两条狗", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she 后面用 has；两条狗要用复数，加 -s：dogs。" },

    { t: "fill", q: "My brother __ in Seoul.", p: "我哥哥住在首尔", a: ["lives"], o: ["live", "is live", "living"], why: "主语 he 是第三人称单数，动词要加 -s：lives。" },
    { t: "fill", q: "__ you tired?", p: "你累了吗？", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired 表示状态，要用 be 动词提问；you 后面用 are。" },
    { t: "fill", q: "We __ hungry.", p: "我们饿了", a: ["are"], o: ["is", "am", "do"], why: "hungry 表示状态，要用 be 动词；we 后面用 are。" },

    { t: "type", p: "他是老师", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be 动词 + 职业前的冠词", x: ["the"], why: "说身份用 be 动词，职业前面要加冠词 a。" },
    { t: "type", p: "我不喜欢咖啡", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — 实义动词的否定", x: ["am"], why: "like 是实义动词，否定用 don't (I'm not like ✗)。" },
    { t: "type", p: "她养了一只猫吗？", a: ["Does she have a cat"], hint: "does · have · cat — 一只前面的冠词", x: ["has"], why: "用了 does，动词就用原形 have；一只猫要加冠词 a。" }
  ],

  polite: [
    { t: "mc", q: "在咖啡店点一杯拿铁，最自然的说法是？", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "在店里说 Can I get…? 很自然。一杯要加冠词 a。" },
    { t: "mc", q: "向陌生人求助，最礼貌的说法是？", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "对陌生人用 Could you…? 礼貌地请求。" },
    { t: "mc", q: "没听清对方的话，想礼貌地请对方再说一遍：", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? 是礼貌地请对方重复的说法。" },
    { t: "mc", q: "非常客气地问：“能麻烦你帮我们拍张照吗？”", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind 后面接 -ing 形式：taking。" },
    { t: "mc", q: "在飞机上说：“我想要靠窗的座位”", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like… 是礼貌的请求。一个座位要加冠词 a。" },

    { t: "order", p: "能给我一杯拿铁吗？", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "第一次点的一杯，用冠词 a。" },
    { t: "order", p: "能麻烦你开一下窗吗？（这个房间的窗）", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind 后面接 -ing；双方都知道是哪扇窗，所以用冠词 the。" },
    { t: "order", p: "能说慢一点吗？", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "用 Could you…? 礼貌地请求。" },

    { t: "fill", q: "Would you mind __ the door?", p: "能麻烦你关一下门吗？", a: ["closing"], o: ["close", "to close", "closed"], why: "mind 后面接 -ing 形式。" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "能给我一杯冰咖啡吗？", a: ["an"], o: ["a", "two", "many"], why: "iced 以元音音素 /aɪ/ 开头，所以用冠词 an。" },
    { t: "fill", q: "No, not at __.", p: "（回答 Would you mind…?）好的，没问题", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all 是“一点也不介意”，也就是“好的，我来”。" },

    { t: "type", p: "能帮我一下吗？（礼貌地）", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — 礼貌的请求", x: ["can"], why: "对陌生人用 Could you…? 请求。" },
    { t: "type", p: "我想要靠窗的座位", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — 一个座位前的冠词", x: ["the"], why: "第一次提到一个座位，要加冠词 a：a window seat。" },
    { t: "type", p: "请给我两杯咖啡", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — 两杯要用复数", x: ["coffee"], why: "点单时咖啡按杯算，两杯要用复数：two coffees。英语不说“杯”，也要加 -s。" }
  ],

  tense: [
    { t: "mc", q: "“我现在正在喝咖啡”=", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "正在做的事用 be + -ing，be 不能省。" },
    { t: "mc", q: "“我上周末去了海边”=", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go 的过去式是 went，有 last weekend 也要用过去式。海边要加冠词 the：the beach。" },
    { t: "mc", q: "说下个月的计划：“我要去济州岛”", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "事先定好的计划用 be going to + 动词原形。" },
    { t: "mc", q: "门铃响了，当场说：“我去开门！”", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "说话时临时决定的事用 will。" },
    { t: "mc", q: "see 的过去式是？", o: ["saw", "seed", "seen", "sawed"], why: "see 是不规则动词：see - saw - seen。" },

    { t: "order", p: "我在银行工作（一直如此）", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "一贯的事用一般现在时；第一次提到一家银行，用冠词 a。" },
    { t: "order", p: "我待会儿给你打电话", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "说话时做出的承诺用 will。" },
    { t: "order", p: "我看了两部电影", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see 的过去式是 saw；两部要用复数，加 -s：movies。" },

    { t: "fill", q: "I __ pizza last night.", p: "我昨晚吃了披萨", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "有 last night 也要用一般过去时：eat 的过去式是 ate（用 have 就是 had）。" },
    { t: "fill", q: "__ you have fun?", p: "玩得开心吗？", a: ["Did"], o: ["Does", "Are", "Were"], why: "问过去的事用 Did + 动词原形。" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "我要去看望父母", a: ["to"], o: ["for", "at", "on"], why: "计划用 be going to + 动词原形。" },

    { t: "type", p: "我今天在家办公", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — 正在进行", x: ["work"], why: "今天正在做的事用 be + -ing。" },
    { t: "type", p: "我上周末去了海边", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — 过去式和冠词", x: ["a"], why: "go 的过去式是 went（一般过去时）；海边要加冠词 the：the beach。" },
    { t: "type", p: "我打算去上一门烹饪课（计划）", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — 一门课前的冠词", x: ["the"], why: "事先定好的计划用 going to；第一次提到一门课，用冠词 a。" }
  ],

  prep: [
    { t: "mc", q: "“在五月”=", o: ["in May", "on May", "at May", "to May"], why: "月份前面用 in。" },
    { t: "mc", q: "“在 5 月 3 日”=", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "日期前面用 on。" },
    { t: "mc", q: "“我（正）在公交车上”=", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "公共交通工具用 on；指现在坐的这辆车，要加冠词 the。" },
    { t: "mc", q: "“在夜里”=", o: ["at night", "on night", "in night", "at the night"], why: "night 是例外：at night，不加冠词。" },
    { t: "mc", q: "哪一句是正确的？", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "城市前面用 in，城市名前面不加冠词 the。" },

    { t: "order", p: "我们在车站见吧（都知道的那个车站）", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "一个点用 at；双方都知道是哪个车站，所以用冠词 the。" },
    { t: "order", p: "我的手机在桌子上（眼前这张桌子）", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "表面上用 on；指眼前这张桌子，所以用冠词 the。" },
    { t: "order", p: "下周见", a: ["See", "you", "next", "week"], x: ["on"], why: "next 前面不加介词。" },

    { t: "fill", q: "The meeting is __ three.", p: "会议三点开始", a: ["at"], o: ["on", "to", "of"], why: "具体时刻前面用 at。" },
    { t: "fill", q: "I was born __ 1998.", p: "我出生于 1998 年", a: ["in"], o: ["on", "at", "to"], why: "年份前面用 in。" },
    { t: "fill", q: "See you __ Friday.", p: "周五见", a: ["on"], o: ["in", "at", "to"], why: "星期前面用 on。" },

    { t: "type", p: "我早上喝咖啡", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + 冠词", x: ["at"], why: "一天中的时段用 in，而且一定要加冠词 the：in the morning。" },
    { t: "type", p: "我现在在家", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — 不加冠词", x: ["the"], why: "at home 不加冠词 the。" },
    { t: "type", p: "下个周末见", a: ["See you next weekend"], hint: "see · next weekend — next 前面要加介词吗？", x: ["on"], why: "next 前面不加介词。" }
  ],

  smalltalk: [
    { t: "mc", q: "同事问 How was your weekend? 时，可以这样回答", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "问的是过去的事，用过去式回答，再多给一个信息。" },
    { t: "mc", q: "对 I don't drink coffee. 说“我也是（我也不喝）”", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "附和否定句用 Me neither。" },
    { t: "mc", q: "想自然地结束对话时说", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going 是委婉告辞的说法。" },
    { t: "mc", q: "和初次见面的人聊天，用哪句开头比较好？", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "天气是最安全的闲聊话题。收入、婚姻、体重都别问。" },
    { t: "mc", q: "对方说 I went to Busan last weekend. 时，表示感兴趣的附和是？", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "用 Oh, really? 和 That sounds fun! 表示感兴趣。" },

    { t: "order", p: "周末有什么计划吗？", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "这个问法用复数 plans；指这个周末，用冠词 the。" },
    { t: "order", p: "和你聊天很愉快", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "结束对话时的客套话。nice 后面接 talking。" },
    { t: "order", p: "我不喜欢恐怖片", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "泛指电影，不加冠词，用复数 movies。" },

    { t: "fill", q: "Pretty good! How __ you?", p: "挺好的！你呢？", a: ["about"], o: ["for", "with", "of"], why: "简单回答，再用 How about you? 反问，才有礼貌。" },
    { t: "fill", q: "I know, __?", p: "就是说啊！", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? 表示强烈赞同。right 以 R 开头。" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "最近看了什么好看的吗？", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "像这样在 any 后面问可数名词时，要用复数。" },

    { t: "type", p: "周末过得怎么样？", a: ["How was your weekend"], hint: "how · weekend — 用过去式", x: ["is"], why: "问上个周末，用过去式 was。" },
    { t: "type", p: "今天天气真好", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — 要加冠词吗？", x: ["a"], why: "weather 是不可数名词，不加冠词 a (a nice weather ✗)。" },
    { t: "type", p: "我喜欢看电影", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — 泛指要用复数", x: ["movie"], why: "泛指电影，要用复数 movies。" }
  ],

  phrasal: [
    { t: "mc", q: "“把它打开”=", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "代词 it 放在短语动词中间：turn it on。" },
    { t: "mc", q: "“牛奶喝完了”=", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = 把……用完了。别漏了 of。" },
    { t: "mc", q: "“我在大邱长大”=", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up = 长大，过去式是 grew up。" },
    { t: "mc", q: "“能帮我照看一下猫吗？”=", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = 照看，不能拆开（look for 是“寻找”）。" },
    { t: "mc", q: "“我七点去接你”=", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "代词 you 放在 pick 和 up 中间。" },

    { t: "order", p: "我在找我的眼镜", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "眼镜总是用复数 glasses（glass 是玻璃杯）。“寻找”是 look for。" },
    { t: "order", p: "我们想个计划吧", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = 想出。还没有的一个计划，用冠词 a。" },
    { t: "order", p: "我去接你", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "代词 you 放在 pick 和 up 中间。" },

    { t: "fill", q: "Can you turn it __?", p: "能把它关掉吗？", a: ["off"], o: ["of", "on", "out"], why: "“关掉”是 turn off。别和 of 的拼写弄混。" },
    { t: "fill", q: "I work __ every morning.", p: "我每天早上锻炼", a: ["out"], o: ["up", "off", "on"], why: "work out = 锻炼。" },
    { t: "fill", q: "We ran out of __.", p: "鸡蛋吃完了", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "鸡蛋这样的可数名词用完了，要用复数 eggs。" },

    { t: "type", p: "请把它关掉", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — 代词放中间", x: ["on"], why: "代词 it 放在 turn 和 off 中间。" },
    { t: "type", p: "我照看两只猫", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — 两只要用复数", x: ["cat"], why: "look after = 照看；两只要用复数，加 -s：cats。" },
    { t: "type", p: "牛奶喝完了", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — 要加冠词吗？", x: ["a"], why: "milk 是不可数名词，不加冠词 a。" }
  ],

  numbers: [
    { t: "mc", q: "10,000（一万）用英语怎么说？", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "三位一节：10 + thousand。数字后面的 thousand 不加复数 -s。" },
    { t: "mc", q: "1,000,000（一百万）用英语怎么说？", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "两个逗号 = million。数字后面的 million 不加复数 -s。" },
    { t: "mc", q: "9:05 怎么读？", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1–9 分前面加 oh。" },
    { t: "mc", q: "$4.99 最自然的读法是？", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "价格读成两个数：four ninety-nine。" },
    { t: "mc", q: "2026 年用英语怎么读？", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "年份两位两位地读。" },

    { t: "order", p: "七点十五分", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 是 fifteen（重音在后），50 是 fifty（重音在前）。" },
    { t: "order", p: "15 美元", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "多于 1 美元要用复数 dollars。" },
    { t: "order", p: "一周两次", a: ["twice", "a", "week"], x: ["the", "one"], why: "“每……几次”用冠词 a：twice a week。" },

    { t: "fill", q: "It's __ quarter past ten.", p: "十点一刻", a: ["a"], o: ["the", "one", "an"], why: "quarter（一刻钟）前面要加冠词 a。" },
    { t: "fill", q: "That's fifty __ won.", p: "5 万韩元", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 是 fifty thousand。数字后面的 thousand 不加复数 -s。" },
    { t: "fill", q: "I'll be there in ten __.", p: "我 10 分钟后到", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10 分钟要用复数 minutes。" },

    { t: "type", p: "三点半", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — 时和分直接读", x: ["thirteen"], why: "时和分直接读：three thirty。别和 thirteen (13) 弄混。" },
    { t: "type", p: "20 美元", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — 2 以上要用复数", x: ["dollar"], why: "2 美元以上要用复数 dollars。" },
    { t: "type", p: "我一周锻炼两次", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — 一周几次，用哪个冠词？", x: ["the"], why: "“每周”用冠词 a：a week (the week ✗)。" }
  ],

  email: [
    { t: "mc", q: "用 Dear 开头时，最自然的称呼是？", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear 后面要写姓名，不要只写职位。" },
    { t: "mc", q: "告诉对方报告已经添加为附件时说", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "对方要收到的就是这份报告，所以加冠词 the。" },
    { t: "mc", q: "“截止日期是什么时候？”=", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "指的是这件事的截止日期，所以用冠词 the。" },
    { t: "mc", q: "回复晚了，不想道歉，可以用哪句积极的说法？", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience 不用道歉也很礼貌。注意别拼成 patients（病人）。" },
    { t: "mc", q: "周五邮件的结尾适合写什么？", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "说的是一个周末，加冠词 a，weekend 用单数。" },

    { t: "order", p: "报告已添加为附件", a: ["I've", "attached", "the", "report"], x: ["a"], why: "对方要收到的就是这份报告，所以用冠词 the。" },
    { t: "order", p: "我们约个时间开会吧", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "还没定下来的一个会议，用冠词 a。" },
    { t: "order", p: "我确认后再回复你", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = 再联系你，要用 to。" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "能在周五前把文件发给我吗？", a: ["by"], o: ["until", "in", "at"], why: "期限（在……之前）用 by + 日期。" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "想问一下日程安排", a: ["to"], o: ["for", "about", "at"], why: "说明目的用 I'm writing to + 动词原形。" },
    { t: "fill", q: "Thanks for all your hard __!", p: "大家辛苦了！", a: ["work"], o: ["works", "working", "job"], why: "work（工作）是不可数名词，不加复数 -s。" },

    { t: "type", p: "我明天休息", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be 动词 + off", x: ["do"], why: "休息、不上班用 be off。" },
    { t: "type", p: "文件已添加为附件", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — 就是那份文件", x: ["a"], why: "对方要收到的就是这份文件，所以用冠词 the。" },
    { t: "type", p: "周末愉快！", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — 一个周末前的冠词", x: ["the"], why: "说的是一个周末，加冠词 a：a great weekend。" }
  ],

  idioms: [
    { t: "mc", q: "“小菜一碟”=", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "习语要整体记：要有冠词 a，cake 用单数。" },
    { t: "mc", q: "“贵得要命”=", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm 以元音开头，用冠词 an；leg 以辅音开头，用 a。" },
    { t: "mc", q: "“今天就到这儿吧”（开会时也能用）", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day 是连冠词 a 一起记的习语。" },
    { t: "mc", q: "“高兴得像飞上了天”=", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine 既不加冠词，也不加复数 -s。" },
    { t: "mc", q: "哪个是只在朋友之间用的俚语？", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap 是年轻人的俚语，意思是“说真的”。其他几个都是工作场合也能用的习语。" },

    { t: "order", p: "我洗耳恭听", a: ["I'm", "all", "ears"], x: ["ear"], why: "字面意思是“全身都是耳朵”，所以用复数 ears。" },
    { t: "order", p: "我得用功读书了", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books：冠词 the 和复数 books 都要照原样用。" },
    { t: "order", p: "这不是我喜欢的类型", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea 要整体记。my 的位置不加冠词。" },

    { t: "fill", q: "Kill two __ with one stone.", p: "一石二鸟", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "两只鸟要用复数 birds。" },
    { t: "fill", q: "Speak of the __!", p: "说曹操，曹操到！", a: ["devil"], o: ["tiger", "angel", "bird"], why: "英语里说的不是曹操，而是 devil（魔鬼）。" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "我有点不舒服", a: ["the"], o: ["a", "an", "my"], why: "under the weather：冠词 the 照原样用。" },

    { t: "type", p: "小菜一碟", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — 别忘了冠词", x: ["the"], why: "a piece of cake：一定要加冠词 a。" },
    { t: "type", p: "我会为你祈祷好运的（交叉手指）", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — 交叉几根手指？", x: ["finger"], why: "交叉的是两根手指，所以用复数 fingers。" },
    { t: "type", p: "今天就到这儿吧", a: ["Let's call it a day"], hint: "call it · day — 不是 the", x: ["the"], why: "call it a day：用冠词 a，不是 the。" }
  ]
};
