/* en-nan extras, writer EN-NAN-A. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English.
   Every Taigi string here runs through tools/target/nan/respell.js without a throw (all words in the lexicon). */
exports.DIALOG = `
肉 | 你欲食肉無？ | 欲，我真愛食肉。 | Do you want some meat? / Yes, I love meat.
茶 | 你欲啉茶無？ | 好，多謝你！ | Would you like some tea? / Sure, thank you!
熱 | 今仔日真熱。 | 我欲啉水。 | It's hot today. / I want some water.
水 | 你欲啉茶抑是水？ | 水，多謝。 | Would you like tea or water? / Water, thanks.
狗 | 這隻狗真媠。 | 伊號做啥物名？ | This dog is really pretty. / What's its name?
人 | 遮有幾个人？ | 遮有四个人。 | How many people are here? / There are four people here.
飯 | 我欲食飯。 | 我嘛是。 | I want to eat. / Me too.
火車 | 你欲坐火車去臺南無？ | 欲，我欲坐火車去。 | Are you taking the train to Tainan? / Yes, I'm going by train.
公園 | 伊佇佗位？ | 伊佇公園運動。 | Where is he? / He's exercising in the park.
好看 | 你看，這件衫！ | 真好看！ | Look at this shirt! / It looks great!
睏 | 阿公咧？ | 伊這馬佇厝裡咧睏。 | Where's Grandpa? / He's sleeping at home right now.
媠 | 恁阿姊真媠。 | 多謝！ | Your sister is really pretty. / Thanks!
佇 | 你佇佗位？ | 我佇厝裡。 | Where are you? / I'm at home.
𠢕早！ | 阿伯𠢕早。 | 𠢕早！你食飽未？ | Good morning, sir. / Good morning! Have you eaten?
你食飽未？ | 你食飽未？ | 食飽矣，你咧？ | Have you eaten? / Yes, I have. And you?
多謝你！ | 我請你食飯。 | 多謝你！ | Dinner's on me. / Thank you!
歹勢。 | 歹勢。 | 無要緊。 | Sorry. / No problem.
再會！ | 我欲來去矣，再會！ | 再會！ | I'm heading off now. Goodbye! / Goodbye!
免客氣。 | 多謝你！ | 免客氣。 | Thank you! / You're welcome.
阿爸 | 恁阿爸佇佗位？ | 伊佇厝裡。 | Where's your dad? / He's at home.
咱 | 咱來去踅夜市。 | 好，咱來去！ | Let's go and stroll the night market. / OK, let's go!
𪜶佇公園。 | 𪜶佇佗位？ | 𪜶佇公園。 | Where are they? / They're at the park.
小弟 | 恁小弟咧？ | 伊咧讀冊。 | And your little brother? / He's studying.
你號做啥物名？ | 你號做啥物名？ | 我號做阿美仔，你咧？ | What's your name? / I'm A-bí. And you?
貴姓？ | 貴姓？ | 我姓陳。 | What's your surname? / My surname is Tân.
我是學生。 | 你是毋是老師？ | 毋是，我是學生。 | Are you a teacher? / No, I'm a student.
你蹛佇佗位？ | 你蹛佇佗位？ | 我蹛佇臺中。 | Where do you live? / I live in Taichung.
你幾歲？ | 你幾歲？ | 我十八歲。 | How old are you? / I'm eighteen.
請閣講一擺。 | 老師，請閣講一擺。 | 好，我閣講一擺。 | Teacher, please say it again. / OK, I'll say it once more.
我毋知。 | 這敢是你的冊？ | 我毋知。 | Is this your book? / I don't know.
慢慢仔講。 | 老師，請你慢慢仔講。 | 好，我慢慢仔講。 | Teacher, please speak slowly. / OK, I'll speak slowly.
老師𠢕早。 | 老師𠢕早。 | 逐家𠢕早。 | Good morning, teacher. / Good morning, everyone.
偌濟錢？ | 頭家，弓蕉一斤偌濟錢？ | 三十五箍。 | Excuse me, how much is a catty of bananas? / Thirty-five dollars.
免錢 | 茶偌濟錢？ | 茶免錢。 | How much is the tea? / The tea is free.
兩 | 你有幾个囝？ | 我有兩个囝。 | How many children do you have? / I have two children.
你的電話幾號？ | 你的電話幾號？ | 空九八三，五五七八。 | What's your phone number? / 0983-5578.
`;
exports.EXAMPLES = `
茶 | 阿公逐工早起攏啉茶。 | Grandpa drinks tea every morning.
熱 | 臺北上熱。 | Taipei is the hottest.
四 | 我有四本冊。 | I have four books.
狗 | 這隻狗真細。 | This dog is really small.
公園 | 伊逐工早起攏會去公園運動。 | Every morning he goes to the park to exercise.
火車 | 我欲坐火車去臺南。 | I'm taking the train to Tainan.
啉 | 我欲啉烏龍茶。 | I'd like to drink oolong tea.
囥 | 酒囥下跤格，汽水囥頂懸格。 | The alcohol goes on the bottom shelf, the soda on the top shelf.
你食飽未？ | 阿媽，你食飽未？ | Grandma, have you eaten?
歹勢。 | 歹勢，我毋知。 | Sorry, I don't know.
阿兄 | 阮阿兄蹛佇臺北。 | My older brother lives in Taipei.
翁某 | 𪜶翁某感情真好。 | That couple gets along really well.
我真愛𨑨迌。 | 我真愛𨑨迌，下晡我欲招阿美仔去𨑨迌。 | I love going out: this afternoon I'm asking A-bí to go out with me.
我蹛佇臺北。 | 我蹛佇臺北，阮阿爸阿母蹛佇臺南。 | I live in Taipei; my mom and dad live in Tainan.
請閣講一擺。 | 歹勢，我毋知影，請閣講一擺。 | Sorry, I don't know: please say it again.
林老師 | 林老師是阮的老師。 | Teacher Lîm is our teacher.
偌濟錢？ | 頭家，這碗麵偌濟錢？ | Excuse me, how much is this bowl of noodles?
三百箍 | 這件衫三百箍。 | This shirt is 300 dollars.
`;
exports.PATTERNS = `
我是___。 | I'm ___. | 我是老師。 | I'm a teacher.
我蹛佇___。 | I live in ___. | 我蹛佇臺南。 | I live in Tainan.
我姓___。 | My surname is ___. | 我姓王。 | My surname is Ông.
___𠢕早。 | Good morning, ___. | 阿媽𠢕早。 | Good morning, Grandma.
請閣___一擺。 | Please ___ it once more. | 請閣唱一擺。 | Please sing it once more.
___偌濟錢？ | How much is ___? | 一碗麵偌濟錢？ | How much is a bowl of noodles?
我有兩个___。 | I have two ___. | 我有兩个阿兄。 | I have two older brothers.
你欲啉___無？ | Would you like some ___ (to drink)? | 你欲啉茶無？ | Would you like some tea?
___是我的朋友。 | ___ is my friend. | 阿美仔是我的朋友。 | A-bí is my friend.
`;
