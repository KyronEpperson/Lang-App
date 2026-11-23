/* Practice sets for the yue-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are written Cantonese (Hong Kong, Traditional characters; docs/briefs/yue-en-cantonese-rewrite.md); answers are English (identical to ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names 冠詞 or 眾數. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "邊個字母嘅名同 see 呢個字讀音一樣？", o: ["C", "S", "Z", "K"], why: "C 嘅名同 see 嘅讀音完全一樣。S 嘅名以元音開頭，Z 喺美國叫 zee（聲帶要振動），K 同 OK 結尾嘅音一樣。" },
    { t: "mc", q: "緊接 Q 後面嘅字母係？", o: ["R", "P", "S", "O"], why: "字母嘅次序係 …O、P、Q、R、S…，Q 後面係 R。" },
    { t: "mc", q: "邊個係啱嘅？", o: ["an M", "a M", "an B", "an U"], why: "M 嘅名以元音開頭，前面用冠詞 an：an M。B 嘅名以輔音開頭，用 a B；U 嘅名同 you 同音，以 /j/ 開頭，用 a U。" },
    { t: "mc", q: "下面邊個係元音字母？", o: ["U", "R", "S", "W"], why: "英文嘅元音字母係 A、E、I、O、U 呢五個。R、S、W 都係輔音字母。" },
    { t: "mc", q: "字母 W 嘅名係？", o: ["double u", "double v", "u u", "v v"], why: "W 睇落似兩個 V，但個名叫 double u，意思係「兩個 U」。" },

    { t: "order", p: "嗰個字點串？", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "spell 係一般動詞，疑問句要用助動詞 do。主語係 you，用 do 唔用 does；do 後面接動詞原形 spell，唔用 spelling。" },
    { t: "order", p: "我個名以 S 開頭", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S 嘅名以元音開頭，前面用冠詞 an，唔用 a。主語 my name 係第三身單數，動詞用 starts。" },
    { t: "order", p: "hello 入面有兩個 L", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "兩個 L 要用眾數 Ls。喺 there is / there are 句式入面，後面嘅名詞係眾數就用 are，唔用 is。" },

    { t: "fill", q: "How do you __ your name?", p: "你個名點串？", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "助動詞 do 後面用動詞原形：How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "以 B 開頭", a: ["with"], o: ["by", "for", "in"], why: "「以……開頭」嘅搭配係 start with。" },
    { t: "fill", q: "That's M __ in Mary.", p: "係 Mary 入面嗰個 M", a: ["as"], o: ["so", "than", "of"], why: "用一個字嚟確認字母嗰陣，會講 M as in Mary，意思係「Mary 入面嘅 M」。" },

    { t: "type", p: "呢個字以 A 開頭（用 it 做主語，唔好漏咗冠詞）", a: ["It starts with an A", "It begins with an A"], hint: "start · A — A 嘅名以元音開頭", x: ["the", "start"], why: "A 嘅名以元音開頭，前面用冠詞 an：an A。主語 it 係第三身單數，動詞用 starts。" },
    { t: "type", p: "你個名點串？（用 you 同 spell 嚟問）", a: ["How do you spell your name"], hint: "spell · your name — 用助動詞 do 嚟問", x: ["spelling", "does"], why: "spell 係一般動詞，疑問句要用助動詞 do。主語係 you，用 do 唔用 does，後面接動詞原形 spell。" },
    { t: "type", p: "呢個字有兩個 T（用 it 開頭）", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — 兩個要用眾數", x: ["T", "have"], why: "兩個 T 要用眾數 Ts（都可以寫成 T's）。主語 it 係第三身單數，用 has，唔用 have。" }
  ],

  pron: [
    { t: "mc", q: "意思係「米 / 飯」嘅字係？", o: ["rice", "lice", "rise", "nice"], why: "飯係 R 開頭嘅 rice。舌尖頂住上齒齦讀成 L，就變咗 lice（蝨）；讀成 N 就變咗 nice。" },
    { t: "mc", q: "意思係「風扇」嘅字係？", o: ["fan", "pan", "van", "ban"], why: "F 係上齒輕輕掂住下唇送氣，聲帶唔振動。聲帶振動就變咗 van（客貨車），雙唇合埋就變咗 pan（平底鑊）。" },
    { t: "mc", q: "意思係「諗 / 認為」嘅字係？", o: ["think", "sink", "thing", "pink"], why: "TH 要將舌尖輕輕伸到上下排牙中間。讀成 s 就變咗 sink（洗手盆）；字尾嘅 k 都要讀出嚟，唔係就似 thing。" },
    { t: "mc", q: "意思係「投票」嘅字係？", o: ["vote", "boat", "goat", "bought"], why: "V 係上齒輕輕掂住下唇，聲帶振動。雙唇合埋讀成 B，就變咗 boat（船）。" },
    { t: "mc", q: "意思係「右邊」嘅字係？", o: ["right", "light", "fight", "bright"], why: "R 開頭嘅 right 係右邊，L 開頭嘅 light 係光。讀 R 嗰陣舌尖唔掂任何地方。" },

    { t: "order", p: "呢個係一隻香蕉", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana 以輔音開頭，用冠詞 a。this 嘅開頭係 TH，唔係 d。" },
    { t: "order", p: "三棵樹", a: ["three", "trees"], x: ["tree", "free"], why: "三棵要用眾數，加 -s：trees，字尾嘅 s 要讀出嚟。three 以 TH 開頭，讀成 f 就變咗 free（免費）。" },
    { t: "order", p: "我鍾意咖啡", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee 入面係上齒掂下唇嘅 F。寫成 P 就變咗 copy（複製）。" },

    { t: "fill", q: "I eat __ice every day.", p: "我每日都食飯", a: ["r"], o: ["l", "n", "w"], why: "飯係 R 開頭嘅 rice。寫成 L 就變咗 lice（蝨），寫成 N 就變咗 nice。" },
    { t: "fill", q: "I __ink so.", p: "我諗係", a: ["th"], o: ["s", "t", "p"], why: "think 以 TH 開頭。寫成 s 就變咗 sink（洗手盆）。" },
    { t: "fill", q: "This is my __.", p: "呢個係我個袋", a: ["bag"], o: ["back", "bug", "beg"], why: "袋係以 g 結尾嘅 bag，字尾嘅濁輔音要讀清楚。以 k 結尾就變咗 back（背脊）。" },

    { t: "type", p: "三棵樹", a: ["three trees"], hint: "three · tree — 三棵要用眾數", x: ["tree"], why: "three 以 TH 開頭，tree 以 TR 開頭；三棵要用眾數，加 -s。" },
    { t: "type", p: "兩隻船", a: ["two boats"], hint: "two · boat — 兩隻要用眾數", x: ["boat", "votes"], why: "船係 B 開頭嘅 boat；兩隻要用眾數，加 -s，字尾嘅 ts 要讀出嚟。寫成 V 就變咗 vote（投票）。" },
    { t: "type", p: "非常輕（用 very）", a: ["very light"], hint: "very · light — 分別以 V 同 L 開頭", x: ["berry"], why: "very 以 V 開頭（上齒掂下唇，唔係 w 或者 b），light 以 L 開頭（唔係 n 或者 r）。" }
  ],

  articles: [
    { t: "mc", q: "「我係學生」=", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "講職業、身份，前面一定要加冠詞 a。" },
    { t: "mc", q: "「我有個主意」=", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea 以元音開頭，用冠詞 an。" },
    { t: "mc", q: "「一個鐘頭」用英文點講？", o: ["an hour", "a hour", "one hours", "hour"], why: "hour 嘅 h 唔發音，以元音開頭，所以用冠詞 an。" },
    { t: "mc", q: "「我好鍾意狗」（泛指狗呢種動物）", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "泛指一類嘢嗰陣用眾數，唔加冠詞。" },
    { t: "mc", q: "「我養咗一隻狗，嗰隻狗好得意」=", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "第一次提到用冠詞 a，再提到嗰陣用 the。" },

    { t: "order", p: "我係老師", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "職業前面要加冠詞 a。teacher 以輔音開頭，唔用 an。" },
    { t: "order", p: "可唔可以閂埋度門？（呢間房嘅門）", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "雙方都知道係邊度門，所以用冠詞 the。" },
    { t: "order", p: "我唔飲咖啡", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "泛指咖啡，唔加冠詞。" },

    { t: "fill", q: "I'm __ university student.", p: "我係大學生", a: ["a"], o: ["an", "the", "two"], why: "university 以 /j/ 開頭，所以用冠詞 a。睇發音，唔睇串法。" },
    { t: "fill", q: "I have __ older sister.", p: "我有一個家姐", a: ["an"], o: ["a", "the", "two"], why: "older 以元音開頭，所以用冠詞 an。" },
    { t: "fill", q: "I don't like __.", p: "我唔鍾意貓（泛指貓呢種動物）", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "泛指一類嘢，用眾數 cats，唔加冠詞。" },

    { t: "type", p: "我有個主意", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — 元音前面用邊個冠詞？", x: ["a"], why: "idea 以元音開頭，用冠詞 an。" },
    { t: "type", p: "我鍾意狗（泛指狗呢種動物）", a: ["I like dogs", "I love dogs"], hint: "like · dog — 泛指要用眾數", x: ["dog", "a"], why: "泛指一類嘢，用眾數 dogs，唔加冠詞。" },
    { t: "type", p: "我哋食晏啦", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — 三餐前面要唔要加冠詞？", x: ["a", "the"], why: "三餐前面唔加冠詞。" }
  ],

  be: [
    { t: "mc", q: "「我好攰」=", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "表示狀態一定要有 be 動詞。廣東話講「我好攰」冇「係」，但英文唔可以省。" },
    { t: "mc", q: "「佢識唔識講英文？」=", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "主語係 he 要用 does，does 後面嘅動詞用原形，唔加 -s。" },
    { t: "mc", q: "「佢返緊工」=", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "表示位置用 be 動詞，she 後面用 is。" },
    { t: "mc", q: "想用「鍾意」回答 Do you like coffee? 嗰陣", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "用 do 問，就用 do 答。" },
    { t: "mc", q: "「佢唔食肉」=", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she 嘅否定係 doesn't + 動詞原形（唔加 -s）。" },

    { t: "order", p: "我哥哥喺東京做嘢", a: ["My", "brother", "works", "in", "Tokyo"], x: ["work", "is"], why: "主語係第三身單數 (he)，動詞用 works，唔加 be 動詞。" },
    { t: "order", p: "我唔係學生", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be 動詞嘅否定加 not，身份前面要加冠詞 a。" },
    { t: "order", p: "佢養咗兩隻狗", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she 後面用 has；兩隻狗要用眾數，加 -s：dogs。" },

    { t: "fill", q: "My brother __ in Tokyo.", p: "我哥哥住喺東京", a: ["lives"], o: ["live", "is live", "living"], why: "主語 he 係第三身單數，動詞要加 -s：lives。" },
    { t: "fill", q: "__ you tired?", p: "你攰唔攰？", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired 表示狀態，要用 be 動詞發問；you 後面用 are。" },
    { t: "fill", q: "We __ hungry.", p: "我哋肚餓喇", a: ["are"], o: ["is", "am", "do"], why: "hungry 表示狀態，要用 be 動詞；we 後面用 are。" },

    { t: "type", p: "佢係老師（佢 = he）", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be 動詞 + 職業前面嘅冠詞", x: ["the"], why: "講身份用 be 動詞，職業前面要加冠詞 a。" },
    { t: "type", p: "我唔鍾意咖啡", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — 一般動詞嘅否定", x: ["am"], why: "like 係一般動詞，否定用 don't (I'm not like ✗)。" },
    { t: "type", p: "佢有冇養一隻貓？（佢 = she）", a: ["Does she have a cat"], hint: "does · have · cat — 一隻前面嘅冠詞", x: ["has"], why: "用咗 does，動詞就用原形 have；一隻貓要加冠詞 a。" }
  ],

  polite: [
    { t: "mc", q: "喺咖啡店叫一杯鮮奶咖啡 (latte)，最自然嘅講法係？", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "喺店舖講 Can I get…? 好自然。一杯要加冠詞 a。" },
    { t: "mc", q: "向陌生人求助，最有禮貌嘅講法係？", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "對陌生人用 Could you…? 有禮貌咁請求。" },
    { t: "mc", q: "聽唔清楚對方講乜，想有禮貌咁請佢再講一次：", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? 係有禮貌咁請對方重複嘅講法。" },
    { t: "mc", q: "好客氣咁問：「可唔可以麻煩你幫我哋影張相？」", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind 後面接 -ing 形式：taking。" },
    { t: "mc", q: "喺飛機上面講：「我想要窗口位」", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like… 係有禮貌嘅請求。一個座位要加冠詞 a。" },

    { t: "order", p: "可唔可以畀一杯鮮奶咖啡我？", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "第一次叫嘅一杯，用冠詞 a。" },
    { t: "order", p: "可唔可以麻煩你開窗？（呢間房嘅窗）", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind 後面接 -ing；雙方都知道係邊扇窗，所以用冠詞 the。" },
    { t: "order", p: "可唔可以講慢啲？", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "用 Could you…? 有禮貌咁請求。" },

    { t: "fill", q: "Would you mind __ the door?", p: "可唔可以麻煩你閂門？", a: ["closing"], o: ["close", "to close", "closed"], why: "mind 後面接 -ing 形式。" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "可唔可以畀一杯凍咖啡我？", a: ["an"], o: ["a", "two", "many"], why: "iced 以元音 /aɪ/ 開頭，所以用冠詞 an。" },
    { t: "fill", q: "No, not at __.", p: "（回答 Would you mind…?）好呀，冇問題", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all 即係「一啲都唔介意」，意思就係「好呀，我嚟」。" },

    { t: "type", p: "可唔可以幫吓我？（有禮貌啲）", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — 有禮貌嘅請求", x: ["can"], why: "對陌生人用 Could you…? 請求。" },
    { t: "type", p: "我想要窗口位", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — 一個座位前面嘅冠詞", x: ["the"], why: "第一次提到一個座位，要加冠詞 a：a window seat。" },
    { t: "type", p: "唔該畀兩杯咖啡我", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — 兩杯要用眾數", x: ["coffee"], why: "叫嘢飲嗰陣，咖啡按杯計，兩杯要用眾數：two coffees。英文唔講量詞「杯」，但要加 -s。" }
  ],

  tense: [
    { t: "mc", q: "「我而家飲緊咖啡」=", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "做緊嘅事用 be + -ing，be 唔可以省。" },
    { t: "mc", q: "「我上個週末去咗沙灘」=", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go 嘅過去式係 went，有 last weekend 都要用過去式。沙灘要加冠詞 the：the beach。" },
    { t: "mc", q: "講下個月嘅計劃：「我會去澳門」", o: ["I'm going to visit Macau next month.", "I visit Macau next month.", "I visited Macau next month.", "I'm going visit Macau next month."], why: "預先定好嘅計劃用 be going to + 動詞原形。" },
    { t: "mc", q: "門鐘響，即刻講：「我去開門！」", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "講嘢嗰陣即時決定嘅事用 will。" },
    { t: "mc", q: "see 嘅過去式係？", o: ["saw", "seed", "seen", "sawed"], why: "see 係不規則動詞：see - saw - seen。" },

    { t: "order", p: "我喺銀行做嘢（一向都係）", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "一向都係咁嘅事用現在式；第一次提到一間銀行，用冠詞 a。" },
    { t: "order", p: "我遲啲打電話畀你", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "講嘢嗰陣作出嘅承諾用 will。" },
    { t: "order", p: "我睇咗兩齣戲", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see 嘅過去式係 saw；兩齣要用眾數，加 -s：movies。" },

    { t: "fill", q: "I __ pizza last night.", p: "我尋晚食咗薄餅", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "有 last night 都要用過去式：eat 嘅過去式係 ate（用 have 就係 had）。" },
    { t: "fill", q: "__ you have fun?", p: "玩得開唔開心？", a: ["Did"], o: ["Does", "Are", "Were"], why: "問過去嘅事用 Did + 動詞原形。" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "我打算去探我爸爸媽媽", a: ["to"], o: ["for", "at", "on"], why: "計劃用 be going to + 動詞原形。" },

    { t: "type", p: "我今日喺屋企做嘢（用現在進行式）", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — 現在進行式", x: ["work"], why: "今日做緊嘅事用 be + -ing。" },
    { t: "type", p: "我上個週末去咗沙灘", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — 過去式同冠詞", x: ["a"], why: "go 嘅過去式係 went；沙灘要加冠詞 the：the beach。" },
    { t: "type", p: "我打算去上一個烹飪班（用 going to）", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — 一個班前面嘅冠詞", x: ["the"], why: "預先定好嘅計劃用 going to；第一次提到一個班，用冠詞 a。" }
  ],

  prep: [
    { t: "mc", q: "「喺五月」=", o: ["in May", "on May", "at May", "to May"], why: "月份前面用 in。" },
    { t: "mc", q: "「喺 5 月 3 號」=", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "日期前面用 on。" },
    { t: "mc", q: "「我（而家）喺巴士上面」=", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "公共交通工具用 on；指而家坐緊嗰架，要加冠詞 the。" },
    { t: "mc", q: "「喺夜晚」=", o: ["at night", "on night", "in night", "at the night"], why: "night 係例外：at night，唔加冠詞。" },
    { t: "mc", q: "邊句係啱嘅？", o: ["I live in Hong Kong.", "I live at Hong Kong.", "I live on Hong Kong.", "I live in the Hong Kong."], why: "城市前面用 in，城市名前面唔加冠詞 the。" },

    { t: "order", p: "我哋喺車站見啦（雙方都知道嗰個車站）", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "一個點用 at；雙方都知道係邊個車站，所以用冠詞 the。" },
    { t: "order", p: "我部手機喺枱上面（面前呢張枱）", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "表面上用 on；指面前呢張枱，所以用冠詞 the。" },
    { t: "order", p: "下個星期見", a: ["See", "you", "next", "week"], x: ["on"], why: "next 前面唔加介詞。" },

    { t: "fill", q: "The meeting is __ three.", p: "三點開會", a: ["at"], o: ["on", "to", "of"], why: "準確時刻前面用 at。" },
    { t: "fill", q: "I was born __ 1998.", p: "我喺 1998 年出世", a: ["in"], o: ["on", "at", "to"], why: "年份前面用 in。" },
    { t: "fill", q: "See you __ Friday.", p: "星期五見", a: ["on"], o: ["in", "at", "to"], why: "星期前面用 on。" },

    { t: "type", p: "我朝早飲咖啡", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + 冠詞", x: ["at"], why: "一日入面嘅時段用 in，而且一定要加冠詞 the：in the morning。" },
    { t: "type", p: "我而家喺屋企", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — 唔加冠詞", x: ["the"], why: "at home 唔加冠詞 the。" },
    { t: "type", p: "下個週末見", a: ["See you next weekend"], hint: "see · next weekend — next 前面要唔要加介詞？", x: ["on"], why: "next 前面唔加介詞。" }
  ],

  smalltalk: [
    { t: "mc", q: "同事問 How was your weekend? 嗰陣，可以咁答", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "問嘅係過去嘅事，用過去式答，再講多少少資料。" },
    { t: "mc", q: "對 I don't drink coffee. 講「我都唔飲」", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "附和否定句用 Me neither。" },
    { t: "mc", q: "想自然咁完結對話嗰陣講", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going 係婉轉告辭嘅講法。" },
    { t: "mc", q: "同第一次見面嘅人傾偈，用邊句開始比較好？", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "天氣係最安全嘅閒談話題。收入、婚姻、體重都唔好問。" },
    { t: "mc", q: "對方講 I went to Macau last weekend. 嗰陣，表示有興趣嘅回應係？", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "用 Oh, really? 同 That sounds fun! 表示有興趣。" },

    { t: "order", p: "週末有冇咩計劃？", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "呢個問法用眾數 plans；指呢個週末，用冠詞 the。" },
    { t: "order", p: "同你傾偈好開心", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "完結對話嗰陣嘅客套話。nice 後面接 talking。" },
    { t: "order", p: "我唔鍾意恐怖片", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "泛指電影，唔加冠詞，用眾數 movies。" },

    { t: "fill", q: "Pretty good! How __ you?", p: "幾好呀！你呢？", a: ["about"], o: ["for", "with", "of"], why: "簡單答完，再用 How about you? 反問，先有禮貌。" },
    { t: "fill", q: "I know, __?", p: "係囉！", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? 表示好同意。right 以 R 開頭，唔係 L。" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "最近有冇睇過啲好睇嘅節目或者電影？", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "好似咁喺 any 後面問可數名詞，要用眾數。" },

    { t: "type", p: "週末過得點呀？", a: ["How was your weekend"], hint: "how · weekend — 用過去式", x: ["is"], why: "問上一個週末，用過去式 was。" },
    { t: "type", p: "今日天氣幾好喎", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — 要唔要加冠詞？", x: ["a"], why: "weather 係不可數名詞，唔加冠詞 a (a nice weather ✗)。" },
    { t: "type", p: "我鍾意睇戲（用 movie）", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — 泛指要用眾數", x: ["movie"], why: "泛指電影，要用眾數 movies。" }
  ],

  phrasal: [
    { t: "mc", q: "「開咗佢」=", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "代名詞 it 放喺片語動詞中間：turn it on。" },
    { t: "mc", q: "「冇晒牛奶」=", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = 用晒……。唔好漏咗 of。" },
    { t: "mc", q: "「我喺九龍長大」=", o: ["I grew up in Kowloon.", "I grew in Kowloon up.", "I growed up in Kowloon.", "I grew out in Kowloon."], why: "grow up = 長大，過去式係 grew up。" },
    { t: "mc", q: "「可唔可以幫我睇住隻貓？」=", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = 照顧，唔可以拆開（look for 係「搵」）。" },
    { t: "mc", q: "「我七點嚟接你」=", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "代名詞 you 放喺 pick 同 up 中間。" },

    { t: "order", p: "我搵緊我副眼鏡", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "眼鏡一定用眾數 glasses（glass 係玻璃杯）。「搵」係 look for。" },
    { t: "order", p: "我哋諗一個計劃出嚟啦", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = 諗出。仲未有嘅一個計劃，用冠詞 a。" },
    { t: "order", p: "我嚟接你", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "代名詞 you 放喺 pick 同 up 中間。" },

    { t: "fill", q: "Can you turn it __?", p: "可唔可以熄咗佢 / 閂咗佢？", a: ["off"], o: ["of", "on", "out"], why: "「熄 / 閂」係 turn off。唔好同 of 嘅串法搞亂。" },
    { t: "fill", q: "I work __ every morning.", p: "我每朝都做運動", a: ["out"], o: ["up", "off", "on"], why: "work out = 做運動、健身。" },
    { t: "fill", q: "We ran out of __.", p: "冇晒雞蛋", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "雞蛋呢類可數名詞用晒，要用眾數 eggs。" },

    { t: "type", p: "唔該熄咗佢 / 閂咗佢（用 turn）", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — 代名詞放中間", x: ["on"], why: "代名詞 it 放喺 turn 同 off 中間。" },
    { t: "type", p: "我照顧兩隻貓（用 look after）", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — 兩隻要用眾數", x: ["cat"], why: "look after = 照顧；兩隻要用眾數，加 -s：cats，字尾嘅 ts 要讀出嚟。" },
    { t: "type", p: "冇晒牛奶（用 out of）", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — 要唔要加冠詞？", x: ["a"], why: "milk 係不可數名詞，唔加冠詞 a。" }
  ],

  numbers: [
    { t: "mc", q: "10,000（一萬）用英文點講？", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "三個位一節：10 + thousand。數字後面嘅 thousand 唔加眾數嘅 -s。" },
    { t: "mc", q: "1,000,000（一百萬）用英文點講？", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "兩個逗號 = million。數字後面嘅 million 唔加眾數嘅 -s。" },
    { t: "mc", q: "9:05 點讀？", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1–9 分前面加 oh。" },
    { t: "mc", q: "$4.99 最自然嘅讀法係？", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "價錢讀成兩個數：four ninety-nine。" },
    { t: "mc", q: "2026 年用英文點讀？", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "年份兩個位兩個位咁讀。" },

    { t: "order", p: "七點十五分", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 係 fifteen（重音喺後面），50 係 fifty（重音喺前面）。" },
    { t: "order", p: "15 蚊", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "多過 1 蚊要用眾數 dollars，字尾嘅 s 要讀出嚟。" },
    { t: "order", p: "一個星期兩次", a: ["twice", "a", "week"], x: ["the", "one"], why: "「每……幾次」用冠詞 a：twice a week。" },

    { t: "fill", q: "It's __ quarter past ten.", p: "十點十五分", a: ["a"], o: ["the", "one", "an"], why: "quarter（一刻鐘）前面要加冠詞 a。" },
    { t: "fill", q: "That's fifty __ dollars.", p: "5 萬蚊（港幣）", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 係 fifty thousand。數字後面嘅 thousand 唔加眾數嘅 -s。" },
    { t: "fill", q: "I'll be there in ten __.", p: "我 10 分鐘之後到", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10 分鐘要用眾數 minutes。" },

    { t: "type", p: "三點半", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — 時同分直接讀", x: ["thirteen"], why: "時同分直接讀：three thirty。唔好同 thirteen (13) 搞亂。" },
    { t: "type", p: "20 蚊（用 dollar）", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — 2 或以上要用眾數", x: ["dollar"], why: "2 蚊或以上要用眾數 dollars。" },
    { t: "type", p: "我一個星期做兩次運動（用 work out）", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — 一個星期幾次，用邊個冠詞？", x: ["the"], why: "「每個星期」用冠詞 a：a week (the week ✗)。" }
  ],

  email: [
    { t: "mc", q: "用 Dear 開頭，最自然嘅稱呼係？", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear 後面寫稱謂同姓氏，唔好淨係寫職位；Sir 後面都唔接姓氏。" },
    { t: "mc", q: "話畀對方知已經附上報告嗰陣講", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "對方會收到嘅就係呢份報告，所以加冠詞 the。" },
    { t: "mc", q: "「幾時截止？」=", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "指嘅係呢件事嘅截止日期，所以用冠詞 the。" },
    { t: "mc", q: "覆遲咗，唔想道歉，可以用邊句正面嘅講法？", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience 唔使道歉都好有禮貌。小心唔好串成 patients（病人）。" },
    { t: "mc", q: "星期五電郵嘅結尾適合寫乜嘢？", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "講嘅係一個週末，加冠詞 a，weekend 用單數。" },

    { t: "order", p: "我已經附上報告", a: ["I've", "attached", "the", "report"], x: ["a"], why: "對方會收到嘅就係呢份報告，所以用冠詞 the。" },
    { t: "order", p: "我哋約個時間開會啦", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "仲未定落嚟嘅一個會議，用冠詞 a。" },
    { t: "order", p: "我確認咗再覆你", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = 遲啲再覆你，要用 to。" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "可唔可以喺星期五或之前將個檔案傳畀我？", a: ["by"], o: ["until", "in", "at"], why: "期限（喺……或之前）用 by + 日期。" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "我寫呢封電郵係想問吓時間表", a: ["to"], o: ["for", "about", "at"], why: "講明目的用 I'm writing to + 動詞原形。" },
    { t: "fill", q: "Thanks for all your hard __!", p: "辛苦晒 / 多謝你嘅付出", a: ["work"], o: ["works", "working", "job"], why: "work（工作）係不可數名詞，唔加眾數嘅 -s。" },

    { t: "type", p: "我聽日放假（用 off）", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be 動詞 + off", x: ["do"], why: "放假、唔使返工用 be off。" },
    { t: "type", p: "我已經附上檔案（用 I 開頭）", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — 就係嗰個檔案", x: ["a"], why: "對方會收到嘅就係呢個檔案，所以用冠詞 the。" },
    { t: "type", p: "週末愉快！（用 Have 開頭）", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — 一個週末前面嘅冠詞", x: ["the"], why: "講嘅係一個週末，加冠詞 a：a great weekend。" }
  ],

  idioms: [
    { t: "mc", q: "「易如反掌」=", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "習語要成句記：要有冠詞 a，cake 用單數。" },
    { t: "mc", q: "「貴到離譜」=", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm 以元音開頭，用冠詞 an；leg 以輔音開頭，用 a。" },
    { t: "mc", q: "「今日就到呢度啦」（開會都用得）", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day 係連冠詞 a 一齊記嘅習語。" },
    { t: "mc", q: "「我開心到唔得了」=", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine 唔加冠詞，亦都唔加眾數嘅 -s。" },
    { t: "mc", q: "邊個係只會喺朋友之間用嘅俚語？", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap 係後生仔嘅俚語，意思係「講真」。其餘幾個都係返工場合都用得嘅習語。" },

    { t: "order", p: "我洗耳恭聽", a: ["I'm", "all", "ears"], x: ["ear"], why: "字面意思係「成身都係耳仔」，所以用眾數 ears。" },
    { t: "order", p: "我要專心溫書喇", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books：冠詞 the 同眾數 books 都要照用。" },
    { t: "order", p: "呢樣嘢唔啱我口味", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea 要成句記。有咗 my，就唔再加冠詞。" },

    { t: "fill", q: "Kill two __ with one stone.", p: "一石二鳥", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "兩隻雀要用眾數 birds。" },
    { t: "fill", q: "Speak of the __!", p: "一講曹操，曹操就到！", a: ["devil"], o: ["ghost", "angel", "bird"], why: "英文講嘅唔係曹操，而係 devil（魔鬼）。" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "我有啲唔舒服", a: ["the"], o: ["a", "an", "my"], why: "under the weather：冠詞 the 照用。" },

    { t: "type", p: "易如反掌（用 piece 同 cake）", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — 唔好漏咗冠詞", x: ["the"], why: "a piece of cake：一定要加冠詞 a。" },
    { t: "type", p: "我會幫你祈好運（交叉手指）", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — 交叉幾多隻手指？", x: ["finger"], why: "交叉嘅係兩隻手指，所以用眾數 fingers。" },
    { t: "type", p: "今日就到呢度啦（用 call it）", a: ["Let's call it a day"], hint: "call it · day — 唔係 the", x: ["the"], why: "call it a day：用冠詞 a，唔係 the。" }
  ]
};
