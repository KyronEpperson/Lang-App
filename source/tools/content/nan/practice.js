/* Practice sets for the nan-en course (docs/PRACTICE-SPEC.md v1), lessons alphabet … idioms of stage 1.
   Prompts, why and hint are written Taigi (MOE recommended characters; docs/briefs/nan-digest.md); answers are English (identical to ko-en
   except the items deviations.json lists).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names 冠詞 or 複數. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "佗一个字母的名，佮 see 這个字唸起來仝款？", o: ["C", "S", "Z", "K"], why: "C 的名佮 see 的讀音完全仝款。S 的名用母音開頭，Z 佇美國叫 zee（聲帶愛振動），K 佮 OK 尾仔的音仝款。" },
    { t: "mc", q: "Q 後壁隨綴的字母是？", o: ["R", "P", "S", "O"], why: "字母的順序是 …O、P、Q、R、S…，Q 後壁是 R。" },
    { t: "mc", q: "佗一个著？", o: ["an M", "a M", "an B", "an U"], why: "M 的名用母音開頭，頭前用冠詞 an：an M。B 的名用子音開頭，用 a B；U 的名佮 you 仝音，用 /j/ 開頭，用 a U。" },
    { t: "mc", q: "下面佗一个是母音字母？", o: ["U", "R", "S", "W"], why: "英語的母音字母是 A、E、I、O、U 這五个。R、S、W 攏是子音字母。" },
    { t: "mc", q: "字母 W 的名是？", o: ["double u", "double v", "u u", "v v"], why: "W 看起來親像兩个 V，毋過伊的名叫 double u，意思是「兩个 U」。" },

    { t: "order", p: "彼个字按怎拼？", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell 是一般動詞，疑問句愛用助動詞 do。主詞是 you，用 do 毋是 does；do 後壁接原形動詞 spell，毋是 spelling。" },
    { t: "order", p: "我的名用 S 開頭", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S 的名用母音開頭，頭前用冠詞 an，毋是 a。主詞 my name 是第三人稱單數，動詞用 starts。" },
    { t: "order", p: "hello 內底有兩个 L", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "兩个 L 愛用複數 Ls。there is / there are 的句型，後壁的名詞是複數就用 are，毋是 is。" },

    { t: "fill", q: "How do you __ your name?", p: "你的名按怎拼？", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "助動詞 do 後壁用原形動詞：How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "用 B 開頭", a: ["with"], o: ["by", "for", "in"], why: "「用……開頭」的搭配詞是 start with。" },
    { t: "fill", q: "That's M __ in Mary.", p: "是 Mary 內底彼个 M", a: ["as"], o: ["so", "than", "of"], why: "用一个單字確認字母的時，會講 M as in Mary，意思是「Mary 的 M」。" },

    { t: "type", p: "這个字用 A 開頭（用 it 做主詞，莫漏冠詞）", a: ["It starts with an A", "It begins with an A"], hint: "start · A — A 的名用母音開頭", x: ["the", "start"], why: "A 的名用母音開頭，頭前用冠詞 an：an A。主詞 it 是第三人稱單數，動詞用 starts。" },
    { t: "type", p: "你的名按怎拼？（用 you 佮 spell 問）", a: ["How do you spell your name"], hint: "spell · your name — 用助動詞 do 問", x: ["spelling", "does"], why: "spell 是一般動詞，疑問句愛用助動詞 do。主詞是 you，用 do 毋是 does，後壁接原形動詞 spell。" },
    { t: "type", p: "這个字有兩个 T（用 it 開頭）", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — 兩个愛用複數", x: ["T", "have"], why: "兩个 T 愛用複數 Ts（嘛會使寫做 T's）。主詞 it 是第三人稱單數，用 has，毋是 have。" }
  ],

  pron: [
    { t: "mc", q: "意思是「米 / 飯」的字是？", o: ["rice", "lice", "rise", "nice"], why: "飯是 R 開頭的 rice。舌尖頂佇喙齒後壁唸做 L，就變做 lice（蝨母）；唸做 N 就變做 nice。" },
    { t: "mc", q: "意思是「電風」的字是？", o: ["fan", "pan", "van", "ban"], why: "F 是頂排喙齒輕輕摸下脣吹氣，聲帶無振動，莫唸做 h。聲帶振動就變做 van（貨車仔），兩爿喙脣合起來就變做 pan（平底鼎）。" },
    { t: "mc", q: "意思是「想 / 認為」的字是？", o: ["think", "sink", "thing", "pink"], why: "TH 愛共舌尖輕輕伸到頂下喙齒中央。唸做 s 就變做 sink（洗碗槽）；字尾的 k 嘛愛唸出來，若無就親像 thing。" },
    { t: "mc", q: "意思是「投票」的字是？", o: ["vote", "boat", "goat", "bought"], why: "V 是頂排喙齒輕輕摸下脣，聲帶振動。兩爿喙脣合起來唸做 B，就變做 boat（船）。" },
    { t: "mc", q: "意思是「正手爿」的字是？", o: ["right", "light", "fight", "bright"], why: "R 開頭的 right 是正手爿，L 開頭的 light 是光。唸 R 的時舌尖啥物所在攏無摸著。" },

    { t: "order", p: "這是一條芎蕉", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana 用子音開頭，用冠詞 a。this 的開頭是 TH，毋是 d。" },
    { t: "order", p: "三欉樹仔", a: ["three", "trees"], x: ["tree", "free"], why: "三欉愛用複數，加 -s：trees，字尾的 s 愛唸出來。three 用 TH 開頭，唸做 f 就變做 free（免錢）。" },
    { t: "order", p: "我佮意咖啡", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee 內底是頂排喙齒摸下脣的 F，莫唸做 h。寫做 P 就變做 copy（複製）。" },

    { t: "fill", q: "I eat __ice every day.", p: "我逐工攏食飯", a: ["r"], o: ["l", "n", "w"], why: "飯是 R 開頭的 rice。寫做 L 就變做 lice（蝨母），寫做 N 就變做 nice。" },
    { t: "fill", q: "I __ink so.", p: "我想是按呢", a: ["th"], o: ["s", "t", "p"], why: "think 用 TH 開頭。寫做 s 就變做 sink（洗碗槽）。" },
    { t: "fill", q: "This is my __.", p: "這是我的袋仔", a: ["bag"], o: ["back", "bug", "beg"], why: "袋仔是 g 結尾的 bag，字尾的濁子音愛唸清楚。k 結尾就變做 back（尻脊骿）。" },

    { t: "type", p: "三欉樹仔", a: ["three trees"], hint: "three · tree — 三欉愛用複數", x: ["tree"], why: "three 用 TH 開頭，tree 用 TR 開頭；三欉愛用複數，加 -s。" },
    { t: "type", p: "兩隻船", a: ["two boats"], hint: "two · boat — 兩隻愛用複數", x: ["boat", "votes"], why: "船是 B 開頭的 boat；兩隻愛用複數，加 -s，字尾的 ts 愛唸出來。寫做 V 就變做 vote（投票）。" },
    { t: "type", p: "真輕（用 very）", a: ["very light"], hint: "very · light — 一个 V 開頭，一个 L 開頭", x: ["berry"], why: "very 用 V 開頭（頂排喙齒摸下脣，毋是 b），light 用 L 開頭（毋是 n 抑是 r）。" }
  ],

  articles: [
    { t: "mc", q: "「我是學生」=", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "講頭路、身份，頭前一定愛加冠詞 a。" },
    { t: "mc", q: "「我有一个主意」=", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea 用母音開頭，用冠詞 an。" },
    { t: "mc", q: "「一點鐘」（時間的長短）英語按怎講？", o: ["an hour", "a hour", "one hours", "hour"], why: "hour 的 h 無發音，用母音開頭，所以用冠詞 an。" },
    { t: "mc", q: "「我真佮意狗」（泛指狗這種動物）", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "泛指一類物件的時用複數，無加冠詞。" },
    { t: "mc", q: "「我有飼一隻狗，彼隻狗真古錐」=", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "頭一擺提著用冠詞 a，第二擺用 the。" },

    { t: "order", p: "我是老師", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "頭路頭前愛加冠詞 a。teacher 用子音開頭，毋是 an。" },
    { t: "order", p: "會使共門關起來無？（這間房間的門）", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "雙方攏知影是佗一扇門，所以用冠詞 the。" },
    { t: "order", p: "我無啉咖啡", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "泛指咖啡，無加冠詞。" },

    { t: "fill", q: "I'm __ university student.", p: "我是大學生", a: ["a"], o: ["an", "the", "two"], why: "university 用 /j/ 開頭，所以用冠詞 a。看發音，毋是看拼字。" },
    { t: "fill", q: "I have __ older sister.", p: "我有一个阿姊", a: ["an"], o: ["a", "the", "two"], why: "older 用母音開頭，所以用冠詞 an。" },
    { t: "fill", q: "I don't like __.", p: "我無佮意貓（泛指貓這種動物）", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "泛指一類物件，用複數 cats，無加冠詞。" },

    { t: "type", p: "我有一个主意", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — 母音頭前用佗一个冠詞？", x: ["a"], why: "idea 用母音開頭，用冠詞 an。" },
    { t: "type", p: "我佮意狗（泛指狗這種動物）", a: ["I like dogs", "I love dogs"], hint: "like · dog — 泛指愛用複數", x: ["dog", "a"], why: "泛指一類物件，用複數 dogs，無加冠詞。" },
    { t: "type", p: "咱來食中晝", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — 三頓頭前敢愛加冠詞？", x: ["a", "the"], why: "三頓頭前無加冠詞。" }
  ],

  be: [
    { t: "mc", q: "「我真忝」=", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "表示狀態一定愛有 be 動詞。台語講「我真忝」無「是」，毋過英語袂使省。" },
    { t: "mc", q: "「伊敢會曉講英語？」=", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "主詞是 he 愛用 does，does 後壁的動詞用原形，無加 -s。" },
    { t: "mc", q: "「伊佇公司上班」（伊這馬人佇公司）=", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "表示所在用 be 動詞，she 後壁用 is。" },
    { t: "mc", q: "想欲用「佮意」回答 Do you like coffee? 的時", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "用 do 問，就用 do 回答。" },
    { t: "mc", q: "「伊毋食肉」=", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she 的否定是 doesn't + 原形動詞（無加 -s）。" },

    { t: "order", p: "阮阿兄佇東京上班", a: ["My", "brother", "works", "in", "Tokyo"], x: ["work", "is"], why: "主詞是第三人稱單數 (he)，動詞用 works，無加 be 動詞。" },
    { t: "order", p: "我毋是學生", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be 動詞的否定加 not，身份頭前愛加冠詞 a。" },
    { t: "order", p: "伊有飼兩隻狗", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she 後壁用 has；兩隻狗愛用複數，加 -s：dogs。" },

    { t: "fill", q: "My brother __ in Tokyo.", p: "阮阿兄蹛佇東京", a: ["lives"], o: ["live", "is live", "living"], why: "主詞 he 是第三人稱單數，動詞愛加 -s：lives。" },
    { t: "fill", q: "__ you tired?", p: "你敢會忝？", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired 表示狀態，愛用 be 動詞問；you 後壁用 are。" },
    { t: "fill", q: "We __ hungry.", p: "阮腹肚枵矣", a: ["are"], o: ["is", "am", "do"], why: "hungry 表示狀態，愛用 be 動詞；we 後壁用 are。" },

    { t: "type", p: "伊是老師（伊 = he）", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be 動詞 + 頭路頭前的冠詞", x: ["the"], why: "講身份用 be 動詞，頭路頭前愛加冠詞 a。" },
    { t: "type", p: "我無佮意咖啡", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — 一般動詞的否定", x: ["am"], why: "like 是一般動詞，否定用 don't (I'm not like ✗)。" },
    { t: "type", p: "伊敢有飼一隻貓？（伊 = she）", a: ["Does she have a cat"], hint: "does · have · cat — 一隻頭前的冠詞", x: ["has"], why: "用 does 了後，動詞就用原形 have；一隻貓愛加冠詞 a。" }
  ],

  polite: [
    { t: "mc", q: "佇咖啡店點一杯拿鐵 (latte)，上自然的講法是？", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "佇店頭講 Can I get…? 真自然。一杯愛加冠詞 a。" },
    { t: "mc", q: "共生份人討幫忙，上有禮貌的講法是？", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "對生份人用 Could you…? 有禮貌請求。" },
    { t: "mc", q: "聽無清楚對方講啥，想欲有禮貌請伊閣講一擺：", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? 是有禮貌請對方閣講一擺的講法。" },
    { t: "mc", q: "真客氣問：「敢會使麻煩你共阮翕一張相？」", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind 後壁接 -ing 形式：taking。" },
    { t: "mc", q: "佇飛行機頂講：「我想欲坐窗仔邊的位」", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like… 是有禮貌的請求。一个座位愛加冠詞 a。" },

    { t: "order", p: "會使予我一杯拿鐵無？", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "頭一擺點的一杯，用冠詞 a。" },
    { t: "order", p: "敢會使麻煩你開窗仔？（這間房間的窗仔）", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind 後壁接 -ing；雙方攏知影是佗一扇窗仔，所以用冠詞 the。" },
    { t: "order", p: "你會使講較慢咧無？", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "用 Could you…? 有禮貌請求。" },

    { t: "fill", q: "Would you mind __ the door?", p: "敢會使麻煩你關門？", a: ["closing"], o: ["close", "to close", "closed"], why: "mind 後壁接 -ing 形式。" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "會使予我一杯冰咖啡無？", a: ["an"], o: ["a", "two", "many"], why: "iced 用母音 /aɪ/ 開頭，所以用冠詞 an。" },
    { t: "fill", q: "No, not at __.", p: "（回答 Would you mind…?）好啊，無問題", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all 就是「一點仔嘛無掛意」，意思就是「好啊，我來」。" },

    { t: "type", p: "你會使共我鬥相共無？（較有禮貌）", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — 有禮貌的請求", x: ["can"], why: "對生份人用 Could you…? 請求。" },
    { t: "type", p: "我想欲坐窗仔邊的位", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — 一个座位頭前的冠詞", x: ["the"], why: "頭一擺提著一个座位，愛加冠詞 a：a window seat。" },
    { t: "type", p: "麻煩予我兩杯咖啡", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — 兩杯愛用複數", x: ["coffee"], why: "點啉的物件的時，咖啡照杯算，兩杯愛用複數：two coffees。英語無講量詞「杯」，毋過愛加 -s。" }
  ],

  tense: [
    { t: "mc", q: "「我這馬當咧啉咖啡」=", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "當咧做的代誌用 be + -ing，be 袂使省。" },
    { t: "mc", q: "「我頂个週末有去海邊」=", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "台語講「有去」，英語用過去式 went，有 last weekend 嘛愛用過去式。海邊愛加冠詞 the：the beach。" },
    { t: "mc", q: "講下个月的計畫：「我欲去澳門」", o: ["I'm going to visit Macau next month.", "I visit Macau next month.", "I visited Macau next month.", "I'm going visit Macau next month."], why: "早就決定的計畫用 be going to + 原形動詞。" },
    { t: "mc", q: "門鈴響矣，隨講：「我來開門！」", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "講話的當下隨決定的代誌用 will。" },
    { t: "mc", q: "see 的過去式是？", o: ["saw", "seed", "seen", "sawed"], why: "see 是不規則動詞：see - saw - seen。" },

    { t: "order", p: "我佇銀行上班（一向按呢）", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "一向按呢的代誌用現在式；頭一擺提著一間銀行，用冠詞 a。" },
    { t: "order", p: "我等咧敲電話予你", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "講話的時答應人的代誌用 will。" },
    { t: "order", p: "我有看兩齣電影", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "台語講「有看」，英語用 see 的過去式 saw；兩齣愛用複數，加 -s：movies。" },

    { t: "fill", q: "I __ pizza last night.", p: "我昨暗食披薩", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "有 last night 嘛愛用過去式：eat 的過去式是 ate（用 have 就是 had）。" },
    { t: "fill", q: "__ you have fun?", p: "敢有好耍？", a: ["Did"], o: ["Does", "Are", "Were"], why: "問過去的代誌用 Did + 原形動詞。" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "我欲去看阮爸母", a: ["to"], o: ["for", "at", "on"], why: "計畫用 be going to + 原形動詞。" },

    { t: "type", p: "我今仔日佇厝上班（用現在進行式）", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — 現在進行式", x: ["work"], why: "今仔日當咧做的代誌用 be + -ing。" },
    { t: "type", p: "我頂个週末有去海邊", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — 過去式佮冠詞", x: ["a"], why: "go 的過去式是 went（毋是 have went）；海邊愛加冠詞 the：the beach。" },
    { t: "type", p: "我欲去上一个煮食班（用 going to）", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — 一个班頭前的冠詞", x: ["the"], why: "早就決定的計畫用 going to；頭一擺提著一个班，用冠詞 a。" }
  ],

  prep: [
    { t: "mc", q: "「佇五月」=", o: ["in May", "on May", "at May", "to May"], why: "月份頭前用 in。" },
    { t: "mc", q: "「佇 5 月 3 號」=", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "日期頭前用 on。" },
    { t: "mc", q: "「我（這馬）佇公車頂」=", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "公共交通工具用 on；指這馬坐的彼台，愛加冠詞 the。" },
    { t: "mc", q: "「佇暗時」=", o: ["at night", "on night", "in night", "at the night"], why: "night 是例外：at night，無加冠詞。" },
    { t: "mc", q: "佗一句著？", o: ["I live in Taipei.", "I live at Taipei.", "I live on Taipei.", "I live in the Taipei."], why: "城市頭前用 in，城市名頭前無加冠詞 the。" },

    { t: "order", p: "咱佇車頭見（雙方攏知影彼个車頭）", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "一个點用 at；雙方攏知影是佗一个車頭，所以用冠詞 the。" },
    { t: "order", p: "我的手機仔佇桌仔頂（面頭前這塊桌仔）", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "表面頂用 on；指面頭前這塊桌仔，所以用冠詞 the。" },
    { t: "order", p: "後禮拜見", a: ["See", "you", "next", "week"], x: ["on"], why: "next 頭前無加介系詞。" },

    { t: "fill", q: "The meeting is __ three.", p: "三點開會", a: ["at"], o: ["on", "to", "of"], why: "準確的時刻頭前用 at。" },
    { t: "fill", q: "I was born __ 1998.", p: "我 1998 年出世", a: ["in"], o: ["on", "at", "to"], why: "年份頭前用 in。" },
    { t: "fill", q: "See you __ Friday.", p: "禮拜五見", a: ["on"], o: ["in", "at", "to"], why: "禮拜幾頭前用 on。" },

    { t: "type", p: "我早起啉咖啡", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + 冠詞", x: ["at"], why: "一工內底的時段用 in，閣一定愛加冠詞 the：in the morning。" },
    { t: "type", p: "我這馬佇厝", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — 無加冠詞", x: ["the"], why: "at home 無加冠詞 the。" },
    { t: "type", p: "後个週末見", a: ["See you next weekend"], hint: "see · next weekend — next 頭前敢愛加介系詞？", x: ["on"], why: "next 頭前無加介系詞。" }
  ],

  smalltalk: [
    { t: "mc", q: "同事問 How was your weekend? 的時，會使按呢回答", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "問的是過去的代誌，用過去式回答，閣加講一寡資訊。" },
    { t: "mc", q: "對 I don't drink coffee. 講「我嘛無啉」", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "附和否定句用 Me neither。" },
    { t: "mc", q: "想欲自然結束對話的時講", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going 是婉轉相辭的講法。" },
    { t: "mc", q: "佮頭一擺見面的人開講，用佗一句開始較好？", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "天氣是上安全的開講話題。收入、結婚、體重攏莫問。" },
    { t: "mc", q: "對方講 I went to Macau last weekend. 的時，表示有興趣的回應是？", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "用 Oh, really? 佮 That sounds fun! 表示有興趣。" },

    { t: "order", p: "週末有啥物計畫無？", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "這个問法用複數 plans；指這个週末，用冠詞 the。" },
    { t: "order", p: "佮你開講真歡喜", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "結束對話的時的客氣話。nice 後壁接 talking。" },
    { t: "order", p: "我無佮意恐怖片", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "泛指電影，無加冠詞，用複數 movies。" },

    { t: "fill", q: "Pretty good! How __ you?", p: "袂䆀啊！你咧？", a: ["about"], o: ["for", "with", "of"], why: "簡單回答了後，閣用 How about you? 倒問，才有禮貌。" },
    { t: "fill", q: "I know, __?", p: "著啊！", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? 表示真同意。right 用 R 開頭，毋是 L。" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "最近敢有看著啥物好看的節目抑是電影？", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "按呢佇 any 後壁問可數名詞，愛用複數。" },

    { t: "type", p: "你的週末過甲按怎？（用 how 問）", a: ["How was your weekend"], hint: "how · weekend — 用過去式", x: ["is"], why: "問頂一个週末，用過去式 was。" },
    { t: "type", p: "今仔日天氣袂䆀喔", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — 敢愛加冠詞？", x: ["a"], why: "weather 是不可數名詞，無加冠詞 a (a nice weather ✗)。" },
    { t: "type", p: "我佮意看電影（用 movie）", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — 泛指愛用複數", x: ["movie"], why: "泛指電影，愛用複數 movies。" }
  ],

  phrasal: [
    { t: "mc", q: "「共開起來」（電視、電火）=", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "代名詞 it 囥佇片語動詞中央：turn it on。" },
    { t: "mc", q: "「牛奶攏用完矣」=", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = 共……用完。莫漏 of。" },
    { t: "mc", q: "「我佇台南大漢」=", o: ["I grew up in Tainan.", "I grew in Tainan up.", "I growed up in Tainan.", "I grew out in Tainan."], why: "grow up = 大漢，過去式是 grew up。" },
    { t: "mc", q: "「你會使共我顧貓仔無？」=", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = 照顧，袂使拆開（look for 是「揣」）。" },
    { t: "mc", q: "「我七點來接你」=", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "代名詞 you 囥佇 pick 佮 up 中央。" },

    { t: "order", p: "我咧揣我的目鏡", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "目鏡一定用複數 glasses（glass 是玻璃杯）。「揣」是 look for。" },
    { t: "order", p: "咱來想一个計畫出來", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = 想出來。猶未有的一个計畫，用冠詞 a。" },
    { t: "order", p: "我來接你", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "代名詞 you 囥佇 pick 佮 up 中央。" },

    { t: "fill", q: "Can you turn it __?", p: "你會使共關掉無？", a: ["off"], o: ["of", "on", "out"], why: "「關掉」是 turn off。莫佮 of 的拼字舞亂去。" },
    { t: "fill", q: "I work __ every morning.", p: "我逐工早起攏運動", a: ["out"], o: ["up", "off", "on"], why: "work out = 運動、健身。" },
    { t: "fill", q: "We ran out of __.", p: "雞卵攏用完矣", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "雞卵這款可數名詞用完，愛用複數 eggs。" },

    { t: "type", p: "麻煩共關掉（用 turn 佮 it）", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — 代名詞囥中央", x: ["on"], why: "代名詞 it 囥佇 turn 佮 off 中央。" },
    { t: "type", p: "我照顧兩隻貓（用 look after，現在式）", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — 兩隻愛用複數", x: ["cat"], why: "look after = 照顧；兩隻愛用複數，加 -s：cats，字尾的 ts 愛唸出來。" },
    { t: "type", p: "牛奶攏用完矣（用 out of）", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — 敢愛加冠詞？", x: ["a"], why: "milk 是不可數名詞，無加冠詞 a。" }
  ],

  numbers: [
    { t: "mc", q: "10,000（一萬）英語按怎講？", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "三位一節：10 + thousand。數字後壁的 thousand 無加複數的 -s。" },
    { t: "mc", q: "1,000,000（一百萬）英語按怎講？", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "兩个逗點 = million。數字後壁的 million 無加複數的 -s。" },
    { t: "mc", q: "9:05 按怎唸？", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1–9 分頭前加 oh。" },
    { t: "mc", q: "$4.99 上自然的唸法是？", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "價錢唸做兩个數：four ninety-nine。" },
    { t: "mc", q: "2026 年英語按怎唸？", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "年份兩位兩位唸。" },

    { t: "order", p: "七點十五分", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 是 fifteen（重音佇後壁），50 是 fifty（重音佇頭前）。" },
    { t: "order", p: "15 箍", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "超過 1 箍愛用複數 dollars，字尾的 s 愛唸出來。" },
    { t: "order", p: "一禮拜兩擺", a: ["twice", "a", "week"], x: ["the", "one"], why: "「每……幾擺」用冠詞 a：twice a week。" },

    { t: "fill", q: "It's __ quarter past ten.", p: "十點十五分", a: ["a"], o: ["the", "one", "an"], why: "quarter（十五分鐘）頭前愛加冠詞 a。" },
    { t: "fill", q: "That's fifty __ dollars.", p: "5 萬箍（新台幣）", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 是 fifty thousand。數字後壁的 thousand 無加複數的 -s。" },
    { t: "fill", q: "I'll be there in ten __.", p: "我 10 分鐘後到", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10 分鐘愛用複數 minutes。" },

    { t: "type", p: "三點半", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — 點佮分直接唸", x: ["thirteen"], why: "點佮分直接唸：three thirty。莫佮 thirteen (13) 舞亂去。" },
    { t: "type", p: "20 箍（用 dollar）", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — 2 以上愛用複數", x: ["dollar"], why: "2 箍以上愛用複數 dollars。" },
    { t: "type", p: "我一禮拜運動兩擺（用 work out）", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — 一禮拜幾擺，用佗一个冠詞？", x: ["the"], why: "「每禮拜」用冠詞 a：a week (the week ✗)。" }
  ],

  email: [
    { t: "mc", q: "用 Dear 開頭，上自然的稱呼是？", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear 後壁寫稱謂佮姓，莫干焦寫職位；Sir 後壁嘛無接姓。" },
    { t: "mc", q: "共對方講報告已經附上的時講", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "對方會收著的就是這份報告，所以加冠詞 the。" },
    { t: "mc", q: "「期限是當時？」=", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "指的是這件代誌的期限，所以用冠詞 the。" },
    { t: "mc", q: "回批較慢，無想欲道歉，會使用佗一句正面的講法？", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience 免道歉嘛真有禮貌。細膩莫拼做 patients（病人）。" },
    { t: "mc", q: "禮拜五的批，結尾適合寫啥物？", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "講的是一个週末，加冠詞 a，weekend 用單數。" },

    { t: "order", p: "我已經共報告附上", a: ["I've", "attached", "the", "report"], x: ["a"], why: "對方會收著的就是這份報告，所以用冠詞 the。" },
    { t: "order", p: "咱來約一个時間開會", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "猶未排好的一个會議，用冠詞 a。" },
    { t: "order", p: "我確認了後才回你", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = 較停仔才回覆你，愛用 to。" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "會使上慢禮拜五共檔案傳予我無？", a: ["by"], o: ["until", "in", "at"], why: "期限（上慢……）用 by + 日期。" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "我寫這張批是想欲問時間表", a: ["to"], o: ["for", "about", "at"], why: "講明目的用 I'm writing to + 原形動詞。" },
    { t: "fill", q: "Thanks for all your hard __!", p: "辛苦矣 / 多謝你的付出", a: ["work"], o: ["works", "working", "job"], why: "work（工作）是不可數名詞，無加複數的 -s。" },

    { t: "type", p: "我明仔載歇睏（用 off）", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be 動詞 + off", x: ["do"], why: "歇睏、免上班用 be off。" },
    { t: "type", p: "我已經共檔案附上（用 I 開頭）", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — 就是彼个檔案", x: ["a"], why: "對方會收著的就是這个檔案，所以用冠詞 the。" },
    { t: "type", p: "週末快樂！（用 Have 開頭）", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — 一个週末頭前的冠詞", x: ["the"], why: "講的是一个週末，加冠詞 a：a great weekend。" }
  ],

  idioms: [
    { t: "mc", q: "「真簡單（親像食一塊雞卵糕）」=", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "慣用語愛規句記：愛有冠詞 a，cake 用單數。" },
    { t: "mc", q: "「貴參參」=", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm 用母音開頭，用冠詞 an；leg 用子音開頭，用 a。" },
    { t: "mc", q: "「今仔日就到遮」（開會嘛會使用）", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day 是連冠詞 a 做伙記的慣用語。" },
    { t: "mc", q: "「我歡喜甲欲飛起來」=", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine 無加冠詞，嘛無加複數的 -s。" },
    { t: "mc", q: "佗一个是干焦佇朋友之間用的俚語？", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap 是少年人的俚語，意思是「講真的」。其他幾个攏是上班的場合嘛會使用的慣用語。" },

    { t: "order", p: "我專心咧聽", a: ["I'm", "all", "ears"], x: ["ear"], why: "字面的意思是「規身軀攏是耳仔」，所以用複數 ears。" },
    { t: "order", p: "我愛專心讀冊矣", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books：冠詞 the 佮複數 books 攏愛照用。" },
    { t: "order", p: "這毋是我佮意的", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea 愛規句記。有 my，就無閣加冠詞。" },

    { t: "fill", q: "Kill two __ with one stone.", p: "一兼二顧", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "兩隻鳥仔愛用複數 birds。" },
    { t: "fill", q: "Speak of the __!", p: "講著曹操，曹操就到！", a: ["devil"], o: ["ghost", "angel", "bird"], why: "英語講的毋是曹操，是 devil（魔鬼）。" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "我身體有淡薄仔無爽快", a: ["the"], o: ["a", "an", "my"], why: "under the weather：冠詞 the 照用。" },

    { t: "type", p: "真簡單（用 piece 佮 cake）", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — 莫漏冠詞", x: ["the"], why: "a piece of cake：一定愛加冠詞 a。" },
    { t: "type", p: "我會替你祈求好運（交叉手指頭仔）", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — 交叉幾支手指頭仔？", x: ["finger"], why: "交叉的是兩支手指頭仔，所以用複數 fingers。" },
    { t: "type", p: "今仔日就到遮（用 call it）", a: ["Let's call it a day"], hint: "call it · day — 毋是 the", x: ["the"], why: "call it a day：用冠詞 a，毋是 the。" }
  ]
};
