/* Practice sets for the yue-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Hong Kong written Chinese; answers are English (identical to ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names 冠詞 or 眾數. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "哪一個字母的名稱和 see 這個字讀音相同？", o: ["C", "S", "Z", "K"], why: "C 的名稱和 see 的讀音完全一樣。S 的名稱以元音開頭，Z 在美國叫 zee（聲帶要振動），K 和 OK 結尾的音相同。" },
    { t: "mc", q: "緊接在 Q 後面的字母是？", o: ["R", "P", "S", "O"], why: "字母的次序是 …O、P、Q、R、S…，Q 後面是 R。" },
    { t: "mc", q: "哪一個是正確的？", o: ["an M", "a M", "an B", "an U"], why: "M 的名稱以元音開頭，前面用冠詞 an：an M。B 的名稱以輔音開頭，用 a B；U 的名稱和 you 同音，以 /j/ 開頭，用 a U。" },
    { t: "mc", q: "下面哪一個是元音字母？", o: ["U", "R", "S", "W"], why: "英文的元音字母是 A、E、I、O、U 這五個。R、S、W 都是輔音字母。" },
    { t: "mc", q: "字母 W 的名稱是？", o: ["double u", "double v", "u u", "v v"], why: "W 看起來像兩個 V，名稱卻是 double u，意思是「兩個 U」。" },

    { t: "order", p: "那個字怎樣串？", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell 是一般動詞，疑問句要用助動詞 do。主語是 you，用 do 不用 does；do 後面接動詞原形 spell，不用 spelling。" },
    { t: "order", p: "我的名字以 S 開頭", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S 的名稱以元音開頭，前面用冠詞 an，不用 a。主語 my name 是第三身單數，動詞用 starts。" },
    { t: "order", p: "hello 裏有兩個 L", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "兩個 L 要用眾數 Ls。there is / there are 句式裏，後面的名詞是眾數就用 are，不用 is。" },

    { t: "fill", q: "How do you __ your name?", p: "你的名字怎樣串？", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "助動詞 do 後面用動詞原形：How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "以 B 開頭", a: ["with"], o: ["by", "for", "in"], why: "「以……開頭」的搭配是 start with。" },
    { t: "fill", q: "That's M __ in Mary.", p: "是 Mary 裏的那個 M", a: ["as"], o: ["so", "than", "of"], why: "用一個字來確認字母時說 M as in Mary，意思是「Mary 裏的 M」。" },

    { t: "type", p: "它以 A 開頭（不要忘記冠詞）", a: ["It starts with an A", "It begins with an A"], hint: "start · A — A 的名稱以元音開頭", x: ["the", "start"], why: "A 的名稱以元音開頭，前面用冠詞 an：an A。主語 it 是第三身單數，動詞用 starts。" },
    { t: "type", p: "你的名字怎樣串？（用 you 和 spell 提問）", a: ["How do you spell your name"], hint: "spell · your name — 用助動詞 do 提問", x: ["spelling", "does"], why: "spell 是一般動詞，疑問句要用助動詞 do。主語是 you，用 do 不用 does，後面接動詞原形 spell。" },
    { t: "type", p: "它有兩個 T（說的是一個字，用 it 開頭）", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — 兩個要用眾數", x: ["T", "have"], why: "兩個 T 要用眾數 Ts（也可以寫成 T's）。主語 it 是第三身單數，用 has，不用 have。" }
  ],

  pron: [
    { t: "mc", q: "意思是「米 / 飯」的字是？", o: ["rice", "lice", "rise", "nice"], why: "飯是 R 開頭的 rice。舌尖抵住上齒齦讀成 L，就成了 lice（蝨子）；讀成 N 就成了 nice。" },
    { t: "mc", q: "意思是「風扇」的字是？", o: ["fan", "pan", "van", "ban"], why: "F 是上齒輕觸下唇送氣，聲帶不振動。聲帶振動就成了 van（客貨車），雙唇閉合就成了 pan（平底鑊）。" },
    { t: "mc", q: "意思是「想 / 認為」的字是？", o: ["think", "sink", "thing", "pink"], why: "TH 要把舌尖輕輕伸到上下齒之間。讀成 s 就成了 sink（洗滌盆）；字尾的 k 也要讀出來，否則像 thing。" },
    { t: "mc", q: "意思是「投票」的字是？", o: ["vote", "boat", "goat", "bought"], why: "V 是上齒輕觸下唇，聲帶振動。雙唇閉合讀成 B，就成了 boat（船）。" },
    { t: "mc", q: "意思是「右邊」的字是？", o: ["right", "light", "fight", "bright"], why: "R 開頭的 right 是右邊，L 開頭的 light 是光。讀 R 時舌尖不碰任何地方。" },

    { t: "order", p: "這是一隻香蕉", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana 以輔音開頭，用冠詞 a。this 的開頭是 TH，不是 d。" },
    { t: "order", p: "三棵樹", a: ["three", "trees"], x: ["tree", "free"], why: "三棵要用眾數，加 -s：trees，字尾的 s 要讀出來。three 以 TH 開頭，讀成 f 就成了 free（免費）。" },
    { t: "order", p: "我喜歡咖啡", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee 裏是上齒觸下唇的 F。寫成 P 就成了 copy（複製）。" },

    { t: "fill", q: "I eat __ice every day.", p: "我每天吃飯", a: ["r"], o: ["l", "n", "w"], why: "飯是 R 開頭的 rice。寫成 L 就成了 lice（蝨子），寫成 N 就成了 nice。" },
    { t: "fill", q: "I __ink so.", p: "我想是的", a: ["th"], o: ["s", "t", "p"], why: "think 以 TH 開頭。寫成 s 就成了 sink（洗滌盆）。" },
    { t: "fill", q: "This is my __.", p: "這是我的袋", a: ["bag"], o: ["back", "bug", "beg"], why: "袋是以 g 結尾的 bag，字尾的濁輔音要讀清楚。以 k 結尾就成了 back（背部）。" },

    { t: "type", p: "三棵樹", a: ["three trees"], hint: "three · tree — 三棵要用眾數", x: ["tree"], why: "three 以 TH 開頭，tree 以 TR 開頭；三棵要用眾數，加 -s。" },
    { t: "type", p: "兩艘船", a: ["two boats"], hint: "two · boat — 兩艘要用眾數", x: ["boat", "votes"], why: "船是 B 開頭的 boat；兩艘要用眾數，加 -s，字尾的 ts 要讀出來。寫成 V 就成了 vote（投票）。" },
    { t: "type", p: "非常輕（用 very）", a: ["very light"], hint: "very · light — 分別以 V 和 L 開頭", x: ["berry"], why: "very 以 V 開頭（上齒觸下唇，不是 w 或 b），light 以 L 開頭（不是 n 或 r）。" }
  ],

  articles: [
    { t: "mc", q: "「我是學生」=", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "職業、身份前面一定要加冠詞 a。" },
    { t: "mc", q: "「我有一個主意」=", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea 以元音開頭，用冠詞 an。" },
    { t: "mc", q: "「一小時」用英文怎樣說？", o: ["an hour", "a hour", "one hours", "hour"], why: "hour 的 h 不發音，以元音開頭，所以用冠詞 an。" },
    { t: "mc", q: "「我很喜歡狗」（泛指狗這種動物）", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "泛指一類東西時用眾數，不加冠詞。" },
    { t: "mc", q: "「我養了一隻狗。那隻狗非常可愛」=", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "第一次提到用冠詞 a，再提到時用 the。" },

    { t: "order", p: "我是老師", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "職業前面要加冠詞 a。teacher 以輔音開頭，不用 an。" },
    { t: "order", p: "可以把門關上嗎？（這個房間的門）", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "雙方都知道是哪一道門，所以用冠詞 the。" },
    { t: "order", p: "我不喝咖啡", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "泛指咖啡，不加冠詞。" },

    { t: "fill", q: "I'm __ university student.", p: "我是大學生", a: ["a"], o: ["an", "the", "two"], why: "university 以 /j/ 開頭，所以用冠詞 a。看發音，不看串法。" },
    { t: "fill", q: "I have __ older sister.", p: "我有一個姐姐", a: ["an"], o: ["a", "the", "two"], why: "older 以元音開頭，所以用冠詞 an。" },
    { t: "fill", q: "I don't like __.", p: "我不喜歡貓（泛指貓這種動物）", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "泛指一類東西，用眾數 cats，不加冠詞。" },

    { t: "type", p: "我有一個主意", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — 元音前用哪一個冠詞？", x: ["a"], why: "idea 以元音開頭，用冠詞 an。" },
    { t: "type", p: "我喜歡狗（泛指狗這種動物）", a: ["I like dogs", "I love dogs"], hint: "like · dog — 泛指要用眾數", x: ["dog", "a"], why: "泛指一類東西，用眾數 dogs，不加冠詞。" },
    { t: "type", p: "我們（一起）吃午飯吧", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — 三餐前要加冠詞嗎？", x: ["a", "the"], why: "三餐前面不加冠詞。" }
  ],

  be: [
    { t: "mc", q: "「我很累」=", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "表示狀態時一定要有 be 動詞。廣東話說「我好攰」沒有「係」，英文不能省。" },
    { t: "mc", q: "「他會說英文嗎？」=", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "主語是 he 要用 does，does 後面的動詞用原形，不加 -s。" },
    { t: "mc", q: "「她在上班」=", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "表示位置用 be 動詞，she 後面用 is。" },
    { t: "mc", q: "想用「喜歡」回答 Do you like coffee? 時", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "用 do 問，就用 do 答。" },
    { t: "mc", q: "「她不吃肉」=", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she 的否定是 doesn't + 動詞原形（不加 -s）。" },

    { t: "order", p: "我哥哥在首爾工作", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "主語是第三身單數 (he)，動詞用 works，不加 be 動詞。" },
    { t: "order", p: "我不是學生", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be 動詞的否定加 not，身份前面要加冠詞 a。" },
    { t: "order", p: "她養了兩隻狗", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she 後面用 has；兩隻狗要用眾數，加 -s：dogs。" },

    { t: "fill", q: "My brother __ in Seoul.", p: "我哥哥住在首爾", a: ["lives"], o: ["live", "is live", "living"], why: "主語 he 是第三身單數，動詞要加 -s：lives。" },
    { t: "fill", q: "__ you tired?", p: "你累嗎？", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired 表示狀態，要用 be 動詞提問；you 後面用 are。" },
    { t: "fill", q: "We __ hungry.", p: "我們肚子餓了", a: ["are"], o: ["is", "am", "do"], why: "hungry 表示狀態，要用 be 動詞；we 後面用 are。" },

    { t: "type", p: "他是老師", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be 動詞 + 職業前的冠詞", x: ["the"], why: "說身份用 be 動詞，職業前面要加冠詞 a。" },
    { t: "type", p: "我不喜歡咖啡", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — 一般動詞的否定", x: ["am"], why: "like 是一般動詞，否定用 don't (I'm not like ✗)。" },
    { t: "type", p: "她養了一隻貓嗎？", a: ["Does she have a cat"], hint: "does · have · cat — 一隻前面的冠詞", x: ["has"], why: "用了 does，動詞就用原形 have；一隻貓要加冠詞 a。" }
  ],

  polite: [
    { t: "mc", q: "在咖啡店點一杯鮮奶咖啡 (latte)，最自然的說法是？", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "在店裏說 Can I get…? 很自然。一杯要加冠詞 a。" },
    { t: "mc", q: "向陌生人求助，最有禮貌的說法是？", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "對陌生人用 Could you…? 有禮貌地請求。" },
    { t: "mc", q: "聽不清對方的話，想有禮貌地請對方再說一次：", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? 是有禮貌地請對方重複的說法。" },
    { t: "mc", q: "非常客氣地問：「可以麻煩你替我們拍一張照片嗎？」", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind 後面接 -ing 形式：taking。" },
    { t: "mc", q: "在飛機上說：「我想要靠窗的座位」", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like… 是有禮貌的請求。一個座位要加冠詞 a。" },

    { t: "order", p: "可以給我一杯鮮奶咖啡嗎？", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "第一次點的一杯，用冠詞 a。" },
    { t: "order", p: "可以麻煩你開窗嗎？（這個房間的窗）", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind 後面接 -ing；雙方都知道是哪一扇窗，所以用冠詞 the。" },
    { t: "order", p: "可以說慢一點嗎？", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "用 Could you…? 有禮貌地請求。" },

    { t: "fill", q: "Would you mind __ the door?", p: "可以麻煩你關門嗎？", a: ["closing"], o: ["close", "to close", "closed"], why: "mind 後面接 -ing 形式。" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "可以給我一杯凍咖啡嗎？", a: ["an"], o: ["a", "two", "many"], why: "iced 以元音 /aɪ/ 開頭，所以用冠詞 an。" },
    { t: "fill", q: "No, not at __.", p: "（回答 Would you mind…?）好的，沒問題", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all 是「一點也不介意」，也就是「好的，我來」。" },

    { t: "type", p: "可以幫幫我嗎？（有禮貌地）", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — 禮貌的請求", x: ["can"], why: "對陌生人用 Could you…? 請求。" },
    { t: "type", p: "我想要靠窗的座位", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — 一個座位前的冠詞", x: ["the"], why: "第一次提到一個座位，要加冠詞 a：a window seat。" },
    { t: "type", p: "請給我兩杯咖啡", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — 兩杯要用眾數", x: ["coffee"], why: "點餐時咖啡按杯計算，兩杯要用眾數：two coffees。英文不說量詞「杯」，但要加 -s。" }
  ],

  tense: [
    { t: "mc", q: "「我現在正在喝咖啡」=", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "正在做的事用 be + -ing，be 不能省。" },
    { t: "mc", q: "「我上個週末去了海灘」=", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go 的過去式是 went，有 last weekend 也要用過去式。海灘要加冠詞 the：the beach。" },
    { t: "mc", q: "說下個月的計劃：「我會去濟州」", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "事先定好的計劃用 be going to + 動詞原形。" },
    { t: "mc", q: "門鐘響了，即時說：「我去開門！」", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "說話時即時決定的事用 will。" },
    { t: "mc", q: "see 的過去式是？", o: ["saw", "seed", "seen", "sawed"], why: "see 是不規則動詞：see - saw - seen。" },

    { t: "order", p: "我在銀行工作（一向如此）", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "一向如此的事用現在式；第一次提到一間銀行，用冠詞 a。" },
    { t: "order", p: "我稍後打電話給你", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "說話時作出的承諾用 will。" },
    { t: "order", p: "我看了兩齣電影", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see 的過去式是 saw；兩齣要用眾數，加 -s：movies。" },

    { t: "fill", q: "I __ pizza last night.", p: "我昨晚吃了薄餅", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "有 last night 也要用過去式：eat 的過去式是 ate（用 have 就是 had）。" },
    { t: "fill", q: "__ you have fun?", p: "玩得開心嗎？", a: ["Did"], o: ["Does", "Are", "Were"], why: "問過去的事用 Did + 動詞原形。" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "我打算去探望父母", a: ["to"], o: ["for", "at", "on"], why: "計劃用 be going to + 動詞原形。" },

    { t: "type", p: "我今天在家工作", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — 正在進行", x: ["work"], why: "今天正在做的事用 be + -ing。" },
    { t: "type", p: "我上個週末去了海灘", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — 過去式和冠詞", x: ["a"], why: "go 的過去式是 went；海灘要加冠詞 the：the beach。" },
    { t: "type", p: "我打算去上一個烹飪班（計劃）", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — 一個班前面的冠詞", x: ["the"], why: "事先定好的計劃用 going to；第一次提到一個班，用冠詞 a。" }
  ],

  prep: [
    { t: "mc", q: "「在五月」=", o: ["in May", "on May", "at May", "to May"], why: "月份前面用 in。" },
    { t: "mc", q: "「在 5 月 3 日」=", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "日期前面用 on。" },
    { t: "mc", q: "「我（正）在巴士上」=", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "公共交通工具用 on；指現在坐的這一輛，要加冠詞 the。" },
    { t: "mc", q: "「在夜晚」=", o: ["at night", "on night", "in night", "at the night"], why: "night 是例外：at night，不加冠詞。" },
    { t: "mc", q: "哪一句是正確的？", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "城市前面用 in，城市名稱前面不加冠詞 the。" },

    { t: "order", p: "我們在車站見吧（雙方都知道的那個車站）", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "一個點用 at；雙方都知道是哪一個車站，所以用冠詞 the。" },
    { t: "order", p: "我的手機在桌子上（眼前這張桌子）", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "表面上用 on；指眼前這張桌子，所以用冠詞 the。" },
    { t: "order", p: "下星期見", a: ["See", "you", "next", "week"], x: ["on"], why: "next 前面不加介詞。" },

    { t: "fill", q: "The meeting is __ three.", p: "會議三點開始", a: ["at"], o: ["on", "to", "of"], why: "確實時刻前面用 at。" },
    { t: "fill", q: "I was born __ 1998.", p: "我在 1998 年出生", a: ["in"], o: ["on", "at", "to"], why: "年份前面用 in。" },
    { t: "fill", q: "See you __ Friday.", p: "星期五見", a: ["on"], o: ["in", "at", "to"], why: "星期前面用 on。" },

    { t: "type", p: "我早上喝咖啡", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + 冠詞", x: ["at"], why: "一天中的時段用 in，而且一定要加冠詞 the：in the morning。" },
    { t: "type", p: "我現在在家", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — 不加冠詞", x: ["the"], why: "at home 不加冠詞 the。" },
    { t: "type", p: "下個週末見", a: ["See you next weekend"], hint: "see · next weekend — next 前面要加介詞嗎？", x: ["on"], why: "next 前面不加介詞。" }
  ],

  smalltalk: [
    { t: "mc", q: "同事問 How was your weekend? 時，可以這樣回答", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "問的是過去的事，用過去式回答，再多說一點資料。" },
    { t: "mc", q: "對 I don't drink coffee. 說「我也是（我也不喝）」", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "附和否定句用 Me neither。" },
    { t: "mc", q: "想自然地結束對話時說", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going 是婉轉告辭的說法。" },
    { t: "mc", q: "和初次見面的人聊天，用哪一句開始比較好？", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "天氣是最安全的閒談話題。收入、婚姻、體重都不要問。" },
    { t: "mc", q: "對方說 I went to Busan last weekend. 時，表示有興趣的附和是？", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "用 Oh, really? 和 That sounds fun! 表示有興趣。" },

    { t: "order", p: "週末有甚麼計劃嗎？", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "這個問法用眾數 plans；指這個週末，用冠詞 the。" },
    { t: "order", p: "和你聊天很愉快", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "結束對話時的客套話。nice 後面接 talking。" },
    { t: "order", p: "我不喜歡恐怖片", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "泛指電影，不加冠詞，用眾數 movies。" },

    { t: "fill", q: "Pretty good! How __ you?", p: "很好！你呢？", a: ["about"], o: ["for", "with", "of"], why: "簡單回答，再用 How about you? 反問，才有禮貌。" },
    { t: "fill", q: "I know, __?", p: "就是嘛！", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? 表示非常同意。right 以 R 開頭，不是 L。" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "最近看了甚麼好看的節目或電影嗎？", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "像這樣在 any 後面問可數名詞時，要用眾數。" },

    { t: "type", p: "週末過得怎樣？", a: ["How was your weekend"], hint: "how · weekend — 用過去式", x: ["is"], why: "問上一個週末，用過去式 was。" },
    { t: "type", p: "今天天氣真好", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — 要加冠詞嗎？", x: ["a"], why: "weather 是不可數名詞，不加冠詞 a (a nice weather ✗)。" },
    { t: "type", p: "我喜歡看電影（用 movie）", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — 泛指要用眾數", x: ["movie"], why: "泛指電影，要用眾數 movies。" }
  ],

  phrasal: [
    { t: "mc", q: "「把它開啟」=", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "代名詞 it 放在片語動詞中間：turn it on。" },
    { t: "mc", q: "「牛奶喝完了」=", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = 把……用完了。不要漏了 of。" },
    { t: "mc", q: "「我在大邱長大」=", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up = 長大，過去式是 grew up。" },
    { t: "mc", q: "「可以替我照顧一下貓嗎？」=", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = 照顧，不能拆開（look for 是「尋找」）。" },
    { t: "mc", q: "「我七點來接你」=", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "代名詞 you 放在 pick 和 up 中間。" },

    { t: "order", p: "我在找我的眼鏡", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "眼鏡總是用眾數 glasses（glass 是玻璃杯）。「尋找」是 look for。" },
    { t: "order", p: "我們想一個計劃吧", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = 想出。還沒有的一個計劃，用冠詞 a。" },
    { t: "order", p: "我來接你", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "代名詞 you 放在 pick 和 up 中間。" },

    { t: "fill", q: "Can you turn it __?", p: "可以把它關掉嗎？", a: ["off"], o: ["of", "on", "out"], why: "「關掉」是 turn off。不要和 of 的串法混淆。" },
    { t: "fill", q: "I work __ every morning.", p: "我每天早上做運動", a: ["out"], o: ["up", "off", "on"], why: "work out = 做運動、健身。" },
    { t: "fill", q: "We ran out of __.", p: "雞蛋吃完了", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "雞蛋這類可數名詞用完了，要用眾數 eggs。" },

    { t: "type", p: "請把它關掉（用 turn）", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — 代名詞放中間", x: ["on"], why: "代名詞 it 放在 turn 和 off 中間。" },
    { t: "type", p: "我照顧兩隻貓（用 look after）", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — 兩隻要用眾數", x: ["cat"], why: "look after = 照顧；兩隻要用眾數，加 -s：cats，字尾的 ts 要讀出來。" },
    { t: "type", p: "牛奶喝完了（用 out of）", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — 要加冠詞嗎？", x: ["a"], why: "milk 是不可數名詞，不加冠詞 a。" }
  ],

  numbers: [
    { t: "mc", q: "10,000（一萬）用英文怎樣說？", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "三位一節：10 + thousand。數字後面的 thousand 不加眾數的 -s。" },
    { t: "mc", q: "1,000,000（一百萬）用英文怎樣說？", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "兩個逗號 = million。數字後面的 million 不加眾數的 -s。" },
    { t: "mc", q: "9:05 怎樣讀？", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1–9 分前面加 oh。" },
    { t: "mc", q: "$4.99 最自然的讀法是？", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "價錢讀成兩個數：four ninety-nine。" },
    { t: "mc", q: "2026 年用英文怎樣讀？", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "年份兩位兩位地讀。" },

    { t: "order", p: "七點十五分", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 是 fifteen（重音在後），50 是 fifty（重音在前）。" },
    { t: "order", p: "15 元", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "多於 1 元要用眾數 dollars，字尾的 s 要讀出來。" },
    { t: "order", p: "一星期兩次", a: ["twice", "a", "week"], x: ["the", "one"], why: "「每……幾次」用冠詞 a：twice a week。" },

    { t: "fill", q: "It's __ quarter past ten.", p: "十點十五分", a: ["a"], o: ["the", "one", "an"], why: "quarter（一刻鐘）前面要加冠詞 a。" },
    { t: "fill", q: "That's fifty __ won.", p: "5 萬韓圜", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 是 fifty thousand。數字後面的 thousand 不加眾數的 -s。" },
    { t: "fill", q: "I'll be there in ten __.", p: "我 10 分鐘後到", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10 分鐘要用眾數 minutes。" },

    { t: "type", p: "三點半", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — 時和分直接讀", x: ["thirteen"], why: "時和分直接讀：three thirty。不要和 thirteen (13) 混淆。" },
    { t: "type", p: "20 元（用 dollar）", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — 2 或以上要用眾數", x: ["dollar"], why: "2 元或以上要用眾數 dollars。" },
    { t: "type", p: "我一星期做兩次運動（用 work out）", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — 一星期幾次，用哪一個冠詞？", x: ["the"], why: "「每星期」用冠詞 a：a week (the week ✗)。" }
  ],

  email: [
    { t: "mc", q: "用 Dear 開頭時，最自然的稱呼是？", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear 後面寫稱謂和姓氏，不要只寫職位；Sir 後面也不接姓氏。" },
    { t: "mc", q: "告訴對方報告已經附上時說", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "對方會收到的就是這份報告，所以加冠詞 the。" },
    { t: "mc", q: "「截止日期是甚麼時候？」=", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "指的是這件事的截止日期，所以用冠詞 the。" },
    { t: "mc", q: "回覆遲了，不想道歉，可以用哪一句積極的說法？", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience 不用道歉也很有禮貌。留意不要串成 patients（病人）。" },
    { t: "mc", q: "星期五電郵的結尾適合寫甚麼？", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "說的是一個週末，加冠詞 a，weekend 用單數。" },

    { t: "order", p: "我已附上報告", a: ["I've", "attached", "the", "report"], x: ["a"], why: "對方會收到的就是這份報告，所以用冠詞 the。" },
    { t: "order", p: "我們約一個時間開會吧", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "還沒定下來的一個會議，用冠詞 a。" },
    { t: "order", p: "我確認後再回覆你", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = 稍後回覆你，要用 to。" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "可以在星期五或之前把檔案寄給我嗎？", a: ["by"], o: ["until", "in", "at"], why: "期限（在……或之前）用 by + 日期。" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "我想查詢一下時間表", a: ["to"], o: ["for", "about", "at"], why: "說明目的用 I'm writing to + 動詞原形。" },
    { t: "fill", q: "Thanks for all your hard __!", p: "大家辛苦了！", a: ["work"], o: ["works", "working", "job"], why: "work（工作）是不可數名詞，不加眾數的 -s。" },

    { t: "type", p: "我明天放假（用 off）", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be 動詞 + off", x: ["do"], why: "放假、不用上班用 be off。" },
    { t: "type", p: "我已附上檔案（用 I 開頭）", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — 就是那個檔案", x: ["a"], why: "對方會收到的就是這個檔案，所以用冠詞 the。" },
    { t: "type", p: "週末愉快！（用 Have 開頭）", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — 一個週末前的冠詞", x: ["the"], why: "說的是一個週末，加冠詞 a：a great weekend。" }
  ],

  idioms: [
    { t: "mc", q: "「易如反掌」=", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "習語要整個記：要有冠詞 a，cake 用單數。" },
    { t: "mc", q: "「貴得要命」=", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm 以元音開頭，用冠詞 an；leg 以輔音開頭，用 a。" },
    { t: "mc", q: "「今天到此為止吧」（開會時也能用）", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day 是連冠詞 a 一起記的習語。" },
    { t: "mc", q: "「開心得不得了」=", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine 既不加冠詞，也不加眾數的 -s。" },
    { t: "mc", q: "哪一個是只在朋友之間用的俚語？", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap 是年輕人的俚語，意思是「說真的」。其餘幾個都是工作場合也能用的習語。" },

    { t: "order", p: "我洗耳恭聽", a: ["I'm", "all", "ears"], x: ["ear"], why: "字面意思是「全身都是耳朵」，所以用眾數 ears。" },
    { t: "order", p: "我要用功讀書了", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books：冠詞 the 和眾數 books 都要照原樣用。" },
    { t: "order", p: "這不是我喜歡的類型", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea 要整個記。有了 my，就不再加冠詞。" },

    { t: "fill", q: "Kill two __ with one stone.", p: "一石二鳥", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "兩隻鳥要用眾數 birds。" },
    { t: "fill", q: "Speak of the __!", p: "一說曹操，曹操就到！", a: ["devil"], o: ["tiger", "angel", "bird"], why: "英文裏說的不是曹操，而是 devil（魔鬼）。" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "我有點不舒服", a: ["the"], o: ["a", "an", "my"], why: "under the weather：冠詞 the 照原樣用。" },

    { t: "type", p: "易如反掌（用 piece 和 cake）", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — 不要忘記冠詞", x: ["the"], why: "a piece of cake：一定要加冠詞 a。" },
    { t: "type", p: "我會為你祈求好運（交叉手指）", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — 交叉幾隻手指？", x: ["finger"], why: "交叉的是兩隻手指，所以用眾數 fingers。" },
    { t: "type", p: "今天到此為止吧（用 call it）", a: ["Let's call it a day"], hint: "call it · day — 不是 the", x: ["the"], why: "call it a day：用冠詞 a，不是 the。" }
  ]
};
