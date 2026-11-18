/* Practice sets for the ja-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Japanese; answers are English (identical to ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check: at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s (why names 冠詞 / 複数). */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "名前が see（見る）と同じ音に聞こえる文字は？", o: ["C", "S", "Z", "K"], why: "C の名前「スィー」は see と同じ音です。「シー」と言うと she に聞こえます。S は「エス」、Z は zee、K は「ケイ」です。" },
    { t: "mc", q: "Q のすぐ次の文字は？", o: ["R", "P", "S", "O"], why: "順番は …O, P, Q, R, S… です。Q（キュー）の次は R（アー）です。" },
    { t: "mc", q: "正しいのは？", o: ["an M", "a M", "an B", "an U"], why: "M の名前「エム」は母音の音で始まるので冠詞 an を使います。B（ビー）は a B、U（ユー）は y の音で始まるので a U です。" },
    { t: "mc", q: "母音字はどれ？", o: ["U", "R", "S", "W"], why: "英語の母音字は A, E, I, O, U の5つです。R, S, W は子音字です。" },
    { t: "mc", q: "W の英語の名前は？", o: ["double u", "double v", "u u", "v v"], why: "形は V が二つに見えますが、名前は double u（ダブリュー）、「U が二つ」です。" },

    { t: "order", p: "それはどうつづりますか？", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "一般動詞 spell の疑問文なので do を前に置きます。主語が you なので does ではなく、spell は原形のままです。" },
    { t: "order", p: "私の名前は S で始まります", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "S の名前「エス」は母音の音で始まるので冠詞 an です。主語 my name は三単現なので starts になります。" },
    { t: "order", p: "hello には L が二つあります", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "L が二つなので複数の Ls にし、複数なので is ではなく are を使います。" },

    { t: "fill", q: "How do you __ your name?", p: "お名前はどうつづりますか？", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "do のあとは動詞の原形です：How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "B で始まります", a: ["with"], o: ["by", "for", "in"], why: "「〜で始まる」は start with です。" },
    { t: "fill", q: "That's M __ in Mary.", p: "Mary の M です", a: ["as"], o: ["so", "than", "of"], why: "文字を単語で確認するときは M as in Mary のように as in を使います。" },

    { t: "type", p: "（冠詞をつけて）A で始まります", a: ["It starts with an A", "It begins with an A"], hint: "start · A — A の名前は母音の音で始まります", x: ["the", "start"], why: "A の名前「エイ」は母音の音で始まるので冠詞 an です。主語 it は三単現なので starts です。" },
    { t: "type", p: "（you と spell で）お名前はどうつづりますか？", a: ["How do you spell your name"], hint: "spell · your name — do を使って聞きます", x: ["spelling", "does"], why: "一般動詞 spell の疑問文なので do を使います。主語が you なので does ではありません。" },
    { t: "type", p: "（It で始めて）T が二つあります", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — 二つなら複数形", x: ["T", "have"], why: "T が二つなので複数の Ts にします。主語 it には have ではなく has を使います。" }
  ],

  pron: [
    { t: "mc", q: "「米、ご飯」という意味の単語は？", o: ["rice", "lice", "rise", "nice"], why: "米は R で始まる rice です。舌先を歯ぐきにつける L で言うと lice（シラミ）になってしまいます。" },
    { t: "mc", q: "「扇風機」という意味の単語は？", o: ["fan", "pan", "van", "ban"], why: "F は上の歯を下唇に当てて息を出します。両唇を閉じて破裂させると P になり、pan（フライパン）に聞こえます。" },
    { t: "mc", q: "「考える」という意味の単語は？", o: ["think", "sink", "thing", "pink"], why: "TH は舌先を歯の間から少し出します。サ行の s で言うと sink（流し台）になります。" },
    { t: "mc", q: "「投票する」という意味の単語は？", o: ["vote", "boat", "goat", "bought"], why: "V は F の口の形で声を出します。両唇を閉じる B で言うと boat（ボート）になります。" },
    { t: "mc", q: "「右」という意味の単語は？", o: ["right", "light", "fight", "bright"], why: "R で始まる right が「右」です。L で始まる light は「光」です。" },

    { t: "order", p: "これはバナナです", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana は子音の音で始まるので冠詞 a を使います。this は TH で書きます。" },
    { t: "order", p: "3本の木", a: ["three", "trees"], x: ["tree", "free"], why: "三つなので複数の s をつけて trees です。three は TH、tree は TR で始まります。" },
    { t: "order", p: "コーヒーが好きです", a: ["I", "like", "coffee"], x: ["copy"], why: "coffee は上の歯を下唇に当てる F です。「コーヒー」の「ヒ」の音でも P でもありません。P で書くと copy（コピー）になります。" },

    { t: "fill", q: "I eat __ice every day.", p: "毎日ご飯を食べます", a: ["r"], o: ["l", "n", "w"], why: "ご飯は R で始まる rice です。L で書くと lice（シラミ）になります。" },
    { t: "fill", q: "I __ink so.", p: "そう思います", a: ["th"], o: ["s", "t", "p"], why: "think は TH で始まります。s で書くと sink（流し台）になります。" },
    { t: "fill", q: "This is my __.", p: "これは私のかばんです", a: ["bag"], o: ["back", "bug", "beg"], why: "かばんは g で終わる bag です。k の音で終わると back（背中）になります。" },

    { t: "type", p: "3本の木", a: ["three trees"], hint: "three · tree — 三つなら複数形", x: ["tree"], why: "three は TH、tree は TR で始まり、三つなので複数の s をつけます。" },
    { t: "type", p: "2そうのボート", a: ["two boats"], hint: "two · boat — 二つなら複数形", x: ["boat", "votes"], why: "ボートは B で始まる boat で、二つなので複数の s をつけます。V で書くと vote（投票）です。" },
    { t: "type", p: "とても軽い", a: ["very light"], hint: "very · light — V と L で始まります", x: ["berry"], why: "very は V（上の歯 + 下唇）、light は L（舌先を歯ぐきに）で始まります。" }
  ],

  articles: [
    { t: "mc", q: "「私は学生です」=", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "職業・身分の前には冠詞 a を必ずつけます。「は」がついていても the にはなりません。" },
    { t: "mc", q: "「アイデアが一つあります」=", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea は母音の音で始まるので冠詞 an を使います。" },
    { t: "mc", q: "「1時間」を英語で言うと？", o: ["an hour", "a hour", "one hours", "hour"], why: "hour の h は発音しません。母音の音で始まるので冠詞 an です。" },
    { t: "mc", q: "「犬が大好きです」（犬という動物全般）", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "一般的な対象は、冠詞なしで複数形にして言います。" },
    { t: "mc", q: "「犬を1匹飼っています。その犬はすごくかわいいです」=", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "初めて話すときは冠詞 a、すでに話したものをもう一度言うときは the です。" },

    { t: "order", p: "私は教師です", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "職業の前には冠詞 a をつけます。teacher は子音の音で始まるので an ではありません。" },
    { t: "order", p: "（この部屋の）ドアを閉めてもらえますか？", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "お互いにわかっているそのドアなので冠詞 the です。" },
    { t: "order", p: "私はコーヒーを飲みません", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "コーヒーを一般的に言うときは冠詞なしで使います。" },

    { t: "fill", q: "I'm __ university student.", p: "私は大学生です", a: ["a"], o: ["an", "the", "two"], why: "university は「ユー」の音で始まるので冠詞 a です。つづりではなく音で決まります。" },
    { t: "fill", q: "I have __ older sister.", p: "姉が一人います", a: ["an"], o: ["a", "the", "two"], why: "older は母音の音で始まるので冠詞 an です。" },
    { t: "fill", q: "I don't like __.", p: "猫は好きではありません（猫という動物全般）", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "一般的な対象は冠詞なしで、複数形 cats にして言います。" },

    { t: "type", p: "アイデアが一つあります", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — 母音の音の前の冠詞", x: ["a"], why: "idea は母音の音で始まるので冠詞 an を使います。" },
    { t: "type", p: "犬が好きです（犬という動物全般）", a: ["I like dogs", "I love dogs"], hint: "like · dog — 全般を言うときは複数形", x: ["dog", "a"], why: "一般的な対象は冠詞なしで、複数形 dogs にして言います。" },
    { t: "type", p: "（一緒に）お昼を食べましょう", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — 食事名の前に冠詞は？", x: ["a", "the"], why: "食事の名前の前には冠詞をつけません。" }
  ],

  be: [
    { t: "mc", q: "「疲れています」=", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "状態を言うときは be動詞が必ず必要です。" },
    { t: "mc", q: "「彼は英語を話しますか？」=", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "he には does を使い、does のあとの動詞は s のない原形です。" },
    { t: "mc", q: "「彼女は会社にいます」=", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "場所を言うときは be動詞、she には is です。" },
    { t: "mc", q: "Do you like coffee? に「はい」と答えるとき", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "do で聞かれたので do で答えます。" },
    { t: "mc", q: "「彼女は肉を食べません」=", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "she の否定は doesn't + s のない原形です。" },

    { t: "order", p: "兄はソウルで働いています", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "主語が一人（he）なので三単現の s をつけて works にし、be動詞は使いません。" },
    { t: "order", p: "私は学生ではありません", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "be動詞の否定は not で、身分の前には冠詞 a をつけます。" },
    { t: "order", p: "彼女は犬を2匹飼っています", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "she のあとは has、2匹なので複数の s をつけて dogs です。" },

    { t: "fill", q: "My brother __ in Seoul.", p: "兄はソウルに住んでいます", a: ["lives"], o: ["live", "is live", "living"], why: "主語が he なので、三単現の s をつけます：lives。" },
    { t: "fill", q: "__ you tired?", p: "疲れていますか？", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired は状態なので be動詞で聞きます。you には are です。" },
    { t: "fill", q: "We __ hungry.", p: "私たちはおなかがすいています", a: ["are"], o: ["is", "am", "do"], why: "hungry は状態なので be動詞、we には are です。" },

    { t: "type", p: "彼は教師です", a: ["He's a teacher", "He is a teacher"], hint: "teacher — be動詞 + 職業の前の冠詞", x: ["the"], why: "何者かを言うので be動詞、職業の前には冠詞 a をつけます。" },
    { t: "type", p: "私はコーヒーが好きではありません", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — 一般動詞の否定", x: ["am"], why: "like は一般動詞なので否定は don't です（I'm not like ✕）。" },
    { t: "type", p: "彼女は猫を1匹飼っていますか？", a: ["Does she have a cat"], hint: "does · have · cat — 1匹なら冠詞", x: ["has"], why: "does を使うと動詞は原形の have、1匹なので冠詞 a をつけます。" }
  ],

  polite: [
    { t: "mc", q: "カフェでラテを一つ注文するとき、いちばん自然な言い方は？", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "お店では Can I get ~? が自然です。一つなので冠詞 a もつけます。" },
    { t: "mc", q: "初対面の人に助けを求めるとき、いちばん丁寧な言い方は？", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you ~? は初対面の人に使う丁寧な頼み方です。" },
    { t: "mc", q: "相手の言葉が聞き取れなかったとき、丁寧に聞き返す言い方は？", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? が丁寧に聞き返す表現です。" },
    { t: "mc", q: "とても丁寧に「私たちの写真を撮っていただけませんか？」", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "mind のあとには ing形が来ます：taking。" },
    { t: "mc", q: "飛行機で「窓側の席をお願いします」", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like ~ は丁寧な頼み方です。席は一つなので冠詞 a をつけます。" },

    { t: "order", p: "ラテを一ついただけますか？", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "初めて注文する1杯なので冠詞 a です。" },
    { t: "order", p: "（この部屋の）窓を開けていただけますか？", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "mind のあとは ing形、お互いにわかっているその窓なので冠詞 the です。" },
    { t: "order", p: "もう少しゆっくり話していただけますか？", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you ~? で丁寧に頼みます。「ゆっくり」は副詞の slowly です。" },

    { t: "fill", q: "Would you mind __ the door?", p: "ドアを閉めていただけますか？", a: ["closing"], o: ["close", "to close", "closed"], why: "mind のあとには ing形が来ます。" },
    { t: "fill", q: "Can I get __ iced coffee?", p: "アイスコーヒーを一ついただけますか？", a: ["an"], o: ["a", "two", "many"], why: "iced は母音の音（アイ）で始まるので冠詞 an です。" },
    { t: "fill", q: "No, not at __.", p: "（Would you mind ~? への返事）ええ、もちろん", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all は「まったく嫌ではありません」、つまり「ええ、いいですよ」という意味です。" },

    { t: "type", p: "手伝っていただけますか？（丁寧に）", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — 丁寧な頼み方", x: ["can"], why: "初対面の人には Could you ~? で頼みます。「〜ください」を Please + 命令文にしないようにしましょう。" },
    { t: "type", p: "窓側の席をお願いします", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — 席一つの前の冠詞", x: ["the"], why: "席一つを初めて話題にするので冠詞 a をつけます：a window seat。" },
    { t: "type", p: "コーヒーを二つお願いします", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — 二つなら複数形", x: ["coffee"], why: "注文のときはコーヒーを杯で数えるので、two coffees のように複数の s をつけます。" }
  ],

  tense: [
    { t: "mc", q: "「今コーヒーを飲んでいるところです」=", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "今している最中のことは be + ing形です。" },
    { t: "mc", q: "「先週末、海に行きました」=", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "go の過去形は went です。海は冠詞 the をつけて the beach と言います。" },
    { t: "mc", q: "来月の予定を話すとき：「済州島（チェジュ島）に行くつもりです」", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "前から決めていた予定は be going to + 原形です。" },
    { t: "mc", q: "玄関のチャイムが鳴りました。その場で：「私が出るよ！」", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "その場で決めたことは will です。" },
    { t: "mc", q: "see の過去形は？", o: ["saw", "seed", "seen", "sawed"], why: "see は不規則動詞です：see - saw - seen。" },

    { t: "order", p: "私は銀行で働いています（いつも）", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "いつものことは現在形、銀行一つを初めて話題にするので冠詞 a です。" },
    { t: "order", p: "あとで電話するね", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "その場で決めた約束は will です。" },
    { t: "order", p: "映画を2本見ました", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "see の過去形は saw、2本なので複数の s をつけて movies です。" },

    { t: "fill", q: "I __ pizza last night.", p: "昨日の夜、ピザを食べました", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "eat の過去形は ate です（have なら had）。" },
    { t: "fill", q: "__ you have fun?", p: "楽しかったですか？", a: ["Did"], o: ["Does", "Are", "Were"], why: "過去のことを聞くときは Did + 原形です。" },
    { t: "fill", q: "I'm going __ visit my parents.", p: "両親の家に行くつもりです", a: ["to"], o: ["for", "at", "on"], why: "予定は be going to + 原形です。" },

    { t: "type", p: "今日は在宅勤務です", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — 今している最中", x: ["work"], why: "今日だけしていることは be + ing形です。" },
    { t: "type", p: "先週末、海に行きました", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — 過去形と冠詞", x: ["a"], why: "go の過去形は went、海は冠詞 the をつけて the beach と言います。" },
    { t: "type", p: "料理のクラスを一つ受けるつもりです（予定）", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — クラス一つの前の冠詞", x: ["the"], why: "前から決めた予定は be going to、クラス一つを初めて話題にするので冠詞 a です。" }
  ],

  prep: [
    { t: "mc", q: "「5月に」=", o: ["in May", "on May", "at May", "to May"], why: "月の前は in です。" },
    { t: "mc", q: "「5月3日に」=", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "日付の前は on です。" },
    { t: "mc", q: "「（今）バスに乗っています」=", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "乗り物には on を使い、今乗っているそのバスなので冠詞 the をつけます。" },
    { t: "mc", q: "「夜に」=", o: ["at night", "on night", "in night", "at the night"], why: "night は例外で、冠詞なしで at night と言います。" },
    { t: "mc", q: "正しい文は？", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "都市の前は in で、都市名には冠詞 the をつけません。" },

    { t: "order", p: "（お互いに知っている）駅で会いましょう", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "一つの地点は at、お互いにわかっているその駅なので冠詞 the です。" },
    { t: "order", p: "私の携帯は（その）テーブルの上にあります", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "表面の上は on、目の前のそのテーブルなので冠詞 the です。" },
    { t: "order", p: "来週会いましょう", a: ["See", "you", "next", "week"], x: ["on"], why: "next の前には前置詞をつけません。「来週に」の「に」は訳しません。" },

    { t: "fill", q: "The meeting is __ three.", p: "会議は3時です", a: ["at"], o: ["on", "to", "of"], why: "正確な時刻の前は at です。" },
    { t: "fill", q: "I was born __ 1998.", p: "1998年に生まれました", a: ["in"], o: ["on", "at", "to"], why: "年の前は in です。" },
    { t: "fill", q: "See you __ Friday.", p: "金曜日に会いましょう", a: ["on"], o: ["in", "at", "to"], why: "曜日の前は on です。" },

    { t: "type", p: "私は朝コーヒーを飲みます", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + 冠詞", x: ["at"], why: "一日の時間帯は in で、in the morning のように冠詞 the を必ずつけます。" },
    { t: "type", p: "今、家にいます", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — 冠詞なしで", x: ["the"], why: "at home は冠詞 the なしで使います。" },
    { t: "type", p: "（別れぎわに）じゃあ、また来週末に", a: ["See you next weekend"], hint: "see · next weekend — next の前に前置詞は？", x: ["on"], why: "next の前には前置詞をつけません。" }
  ],

  smalltalk: [
    { t: "mc", q: "同僚に How was your weekend? と聞かれたら", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "過去のことを聞かれたので過去形で、情報を一つ足して答えます。" },
    { t: "mc", q: "I don't drink coffee. に「私もです（私も飲みません）」", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "否定文へのあいづちは Me neither です。" },
    { t: "mc", q: "会話を自然に切り上げるとき", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going は、やわらかくその場を離れる表現です。" },
    { t: "mc", q: "初対面の人への最初の一言として、いちばんよいのは？", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "天気はいちばん安全なスモールトークの話題です。" },
    { t: "mc", q: "I went to Busan last weekend. に興味を示すあいづちは？", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? と That sounds fun! で興味を示します。" },

    { t: "order", p: "週末、何か予定はありますか？", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "予定を聞くこの表現は複数形 plans を使い、今度の週末なので冠詞 the です。" },
    { t: "order", p: "お話しできて楽しかったです", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "会話を終えるときのあいさつです。nice のあとに talking が来ます。" },
    { t: "order", p: "ホラー映画は好きではありません", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "映画全般の話なので、冠詞なしで複数形 movies です。" },

    { t: "fill", q: "Pretty good! How __ you?", p: "いい感じ！そっちは？", a: ["about"], o: ["for", "with", "of"], why: "短く答えて How about you? と聞き返すのがマナーです。" },
    { t: "fill", q: "I know, __?", p: "だよね！ / ほんとそれ！", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? は強く同意するあいづちです。R で始まります。" },
    { t: "fill", q: "Have you seen any good __ lately?", p: "最近、何かおもしろいもの見ました？", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "このように any のあとで数えられる名詞を聞くときは複数形を使います。" },

    { t: "type", p: "週末はどうでしたか？", a: ["How was your weekend"], hint: "how · weekend — 過去形で", x: ["is"], why: "先週末のことなので過去形 was で聞きます。" },
    { t: "type", p: "今日はいい天気ですね", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — 冠詞はつける？", x: ["a"], why: "weather は数えられない名詞なので冠詞 a をつけません（a nice weather ✕）。" },
    { t: "type", p: "映画を見るのが好きです", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — 全般を言うときは複数形", x: ["movie"], why: "映画全般の話なので複数形 movies です。" }
  ],

  phrasal: [
    { t: "mc", q: "「それ、つけて」=", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "代名詞 it は句動詞の真ん中に来ます：turn it on。" },
    { t: "mc", q: "「牛乳を切らしてしまいました」=", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of = 〜を切らす。of を忘れないようにしましょう。" },
    { t: "mc", q: "「大邱（テグ）で育ちました」=", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up = 育つ。過去形は grew up です。" },
    { t: "mc", q: "「うちの猫の世話をしてもらえますか？」=", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after = 世話をする。分けられない句動詞です（look for は「探す」）。" },
    { t: "mc", q: "「7時に迎えに行くね」=", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "代名詞 you は pick と up の間に来ます。" },

    { t: "order", p: "メガネを探しています", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "メガネはいつも複数形 glasses です（glass はガラス・コップ）。「探す」は look for です。" },
    { t: "order", p: "計画を一つ考え出しましょう", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with = 考え出す。まだない計画一つなので冠詞 a です。" },
    { t: "order", p: "迎えに行くよ", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "代名詞 you は pick と up の間に来ます。" },

    { t: "fill", q: "Can you turn it __?", p: "それ、消してもらえますか？", a: ["off"], o: ["of", "on", "out"], why: "「消す」は turn off です。つづりの似た of と混同しないようにしましょう。" },
    { t: "fill", q: "I work __ every morning.", p: "毎朝運動しています", a: ["out"], o: ["up", "off", "on"], why: "work out は「運動する」という意味です。" },
    { t: "fill", q: "We ran out of __.", p: "卵を切らしてしまいました", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "卵のように数えられるものを切らしたときは、複数形 eggs です。" },

    { t: "type", p: "それを消してください", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — 代名詞は真ん中", x: ["on"], why: "代名詞 it は turn と off の間に来ます。" },
    { t: "type", p: "猫を2匹世話しています", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — 二つなら複数形", x: ["cat"], why: "look after = 世話をする。2匹なので複数の s をつけて cats です。" },
    { t: "type", p: "牛乳を切らしてしまいました", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — 冠詞はつける？", x: ["a"], why: "milk は数えられない名詞なので冠詞 a をつけません。" }
  ],

  numbers: [
    { t: "mc", q: "10,000（1万）を英語で言うと？", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "3けたずつ区切ります：10 + thousand。数字のあとの thousand には複数の s をつけません。" },
    { t: "mc", q: "1,000,000（100万）を英語で言うと？", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "カンマ二つ = million です。数字のあとの million には複数の s をつけません。" },
    { t: "mc", q: "9:05 の読み方は？", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "1〜9分の前には oh をつけます。" },
    { t: "mc", q: "$4.99 を自然に読むと？", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "値段は数字二つのかたまりで読みます：four ninety-nine。" },
    { t: "mc", q: "2026年を英語で読むと？", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "年は2けたずつ区切って読みます。" },

    { t: "order", p: "7時15分です", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15は fifteen（後ろにアクセント）、50は fifty（前にアクセント）です。" },
    { t: "order", p: "15ドルです", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "1ドルより多ければ dollars のように複数の s をつけます。" },
    { t: "order", p: "週に2回", a: ["twice", "a", "week"], x: ["the", "one"], why: "「〜につき何回」は冠詞 a で言います：twice a week。" },

    { t: "fill", q: "It's __ quarter past ten.", p: "10時15分です", a: ["a"], o: ["the", "one", "an"], why: "quarter（15分）の前には冠詞 a をつけます。" },
    { t: "fill", q: "That's fifty __ won.", p: "5万ウォンです", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000は fifty thousand です。数字のあとの thousand には複数の s をつけません。" },
    { t: "fill", q: "I'll be there in ten __.", p: "10分後に着きます", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "10分なので複数形 minutes です。" },

    { t: "type", p: "3時半です", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — 時と分をそのまま", x: ["thirteen"], why: "時と分をそのまま読みます：three thirty。13（thirteen）と混同しないようにしましょう。" },
    { t: "type", p: "20ドルです", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — 2以上なら複数形", x: ["dollar"], why: "2ドル以上なので dollars のように複数の s をつけます。" },
    { t: "type", p: "私は週に2回運動します", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — 「〜につき」はどの冠詞？", x: ["the"], why: "「週に」は冠詞 a を使って a week です（the week ✕）。" }
  ],

  email: [
    { t: "mc", q: "Dear で始めるとき、いちばん自然なあいさつは？", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Dear のあとには肩書きだけでなく、名前を書きます。" },
    { t: "mc", q: "報告書を添付したことを伝えるとき", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "相手が受け取るその報告書なので冠詞 the をつけます。" },
    { t: "mc", q: "「締め切りはいつですか？」=", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "この仕事のその締め切りなので冠詞 the です。" },
    { t: "mc", q: "返信が遅れたとき、おわびの代わりに使える前向きな表現は？", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience は、おわびをしなくても礼儀正しく聞こえます。patients（患者たち）とつづりを区別しましょう。" },
    { t: "mc", q: "金曜日のメールの最後に書くのにいいあいさつは？", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "週末一つのことなので冠詞 a をつけ、weekend は単数です。" },

    { t: "order", p: "報告書を添付しました", a: ["I've", "attached", "the", "report"], x: ["a"], why: "相手が受け取るその報告書なので冠詞 the です。" },
    { t: "order", p: "打ち合わせの日程を決めましょう", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "まだ決まっていない打ち合わせ一つなので冠詞 a です。" },
    { t: "order", p: "確認して、折り返しご連絡します", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you = 折り返し連絡する。to を使います。" },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "金曜日までにファイルを送っていただけますか？", a: ["by"], o: ["until", "in", "at"], why: "期限（〜までに）は by + 日付です。" },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "スケジュールについてお伺いしたく、ご連絡しました", a: ["to"], o: ["for", "about", "at"], why: "目的は I'm writing to + 原形です。" },
    { t: "fill", q: "Thanks for all your hard __!", p: "本当にお疲れさまでした", a: ["work"], o: ["works", "working", "job"], why: "work（仕事）は数えられない名詞なので、複数の s をつけません。" },

    { t: "type", p: "明日は休みです（off を使って）", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — be動詞 + off", x: ["do"], why: "休みの日は be off で言います。" },
    { t: "type", p: "ファイルを添付しました", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — まさにそのファイル", x: ["a"], why: "相手が受け取るそのファイルなので冠詞 the です。" },
    { t: "type", p: "よい週末を！", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — 週末一つの前の冠詞", x: ["the"], why: "週末一つのことなので冠詞 a をつけます：a great weekend。" }
  ],

  idioms: [
    { t: "mc", q: "「朝飯前です」=", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "イディオムはまるごと覚えます：冠詞 a を入れて、cake は単数です。" },
    { t: "mc", q: "「ものすごく高いです」=", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm は母音の音で始まるので冠詞 an、leg は子音の音なので a です。" },
    { t: "mc", q: "「今日はここまでにしましょう」（会議でも ○）", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day は冠詞 a までまるごと覚えるイディオムです。" },
    { t: "mc", q: "「天にも昇る気持ちです」=", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine は冠詞も複数の s もつけずに使います。" },
    { t: "mc", q: "友達同士でだけ使うスラングは？", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap は「マジで」という意味の若者スラングです。ほかは職場でも使えるイディオムです。" },

    { t: "order", p: "しっかり聞いています", a: ["I'm", "all", "ears"], x: ["ear"], why: "「全身が耳」という表現なので複数形 ears です。" },
    { t: "order", p: "しっかり勉強しなきゃ", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books は冠詞 the と複数形 books をそのまま使います。" },
    { t: "order", p: "私の好みではありません", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea をまるごと覚えましょう。my の位置に冠詞は入れません。" },

    { t: "fill", q: "Kill two __ with one stone.", p: "一石二鳥", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "鳥が2羽なので複数形 birds です。" },
    { t: "fill", q: "Speak of the __!", p: "噂をすれば影！", a: ["devil"], o: ["tiger", "angel", "bird"], why: "英語では「影」ではなく devil（悪魔）が来ます。" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "少し体調が悪いです", a: ["the"], o: ["a", "an", "my"], why: "under the weather は冠詞 the をそのまま使います。" },

    { t: "type", p: "朝飯前です", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — 冠詞を忘れずに", x: ["the"], why: "a piece of cake は冠詞 a を必ずつけます。" },
    { t: "type", p: "うまくいくよう祈っています", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — 指は何本？", x: ["finger"], why: "指を2本交差させるので複数形 fingers です。" },
    { t: "type", p: "今日はここまでにしましょう", a: ["Let's call it a day"], hint: "call it · day — the ではありません", x: ["the"], why: "call it a day は冠詞 the ではなく a です。" }
  ]
};
