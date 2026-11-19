/* en-ja extras, writer EN-JA-A. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. Kana only, except the First kanji examples, which use words from the closed list (profile §10.3). */
exports.DIALOG = `
か | がくせいですか。 | はい、がくせいです。 | Are you a student? / Yes, I am.
し | これは すしですか。 | はい、すしです。 | Is this sushi? / Yes, it's sushi.
て | てんぷらは ありますか。 | はい、あります。 | Do you have tempura? / Yes, we do.
を | なにを のみますか。 | おちゃを のみます。 | What will you drink? / I'll have tea.
は | これは なんですか。 | それは ほんです。 | What's this? / That's a book.
ね | いい てんきですね。 | そうですね。 | Nice weather, isn't it? / It sure is.
きって | すみません、きっては どこですか。 | あそこです。 | Excuse me, where are the stamps? / Over there.
おばあさん | おばあさんは おげんきですか。 | はい、げんきです。 | How is your grandmother? / She's doing well.
とうきょう | どこに すんで いますか。 | とうきょうに すんで います。 | Where do you live? / I live in Tokyo.
シ | タクシーで いきますか。 | いいえ、でんしゃで いきます。 | Are you going by taxi? / No, I'm going by train.
チ | チーズは ありますか。 | すみません、いま ありません。 | Do you have cheese? / Sorry, we don't right now.
ソ | ソースを ください。 | はい、どうぞ。 | Sauce, please. / Here you go.
コーヒー | コーヒーは いかがですか。 | はい、おねがいします。 | Would you like some coffee? / Yes, please.
パーティー | あした パーティーに きませんか。 | いいですね。いきます。 | Would you like to come to a party tomorrow? / Sounds good. I'll be there.
ラ | ラーメンが すきですか。 | はい、だいすきです。 | Do you like ramen? / Yes, I love it.
日本 | にほんは はじめてですか。 | いいえ、にかいめです。 | Is this your first time in Japan? / No, it's my second time.
月曜日 | げつようびは やすみですか。 | いいえ、しごとです。 | Do you have Mondays off? / No, I work.
円 | これは いくらですか。 | ごひゃくえんです。 | How much is this? / It's 500 yen.
はじめまして | はじめまして。エミリーです。 | はじめまして。たなかです。よろしく おねがいします。 | Nice to meet you. I'm Emily. / Nice to meet you. I'm Tanaka. I look forward to knowing you.
おなまえは？ | すみません、おなまえは？ | スミスです。 | Excuse me, what's your name? / It's Smith.
おげんきですか | おひさしぶりです。おげんきですか。 | はい、げんきです。 | Long time no see. How have you been? / I've been well.
ありがとうございます | どうぞ。 | ありがとうございます。 | Here you go. / Thank you.
ごかぞく | ごかぞくは なんにんですか。 | よにんです。 | How many people are in your family? / Four.
きょうだい | きょうだいが いますか。 | はい、おとうとが ひとり います。 | Do you have any brothers or sisters? / Yes, I have a younger brother.
おかあさん | それは おかあさんの しゃしんですか。 | はい、ははです。 | Is that a photo of your mother? / Yes, that's my mother.
いくらですか | この おにぎりは いくらですか。 | ひゃくごじゅうえんです。 | How much is this rice ball? / It's 150 yen.
なんじですか | すみません、いま なんじですか。 | よじはんです。 | Excuse me, what time is it? / It's four thirty.
さんじはん | かいぎは なんじからですか。 | さんじはんからです。 | What time does the meeting start? / At three thirty.
`;
exports.EXAMPLES = `
お | おちゃを ください。 | Tea, please.
さ | さとうさんは せんせいです。 | Ms. Sato is a teacher.
ふ | ふじさんが みえます。 | I can see Mount Fuji.
へ | とうきょうへ いきます。 | I'm going to Tokyo.
しゃしん | きょうとで しゃしんを たくさん とりました。 | I took a lot of photos in Kyoto.
が | にほんごが すこし わかります。 | I understand a little Japanese.
ア | アメリカから きました。 | I'm from America.
テ | テニスが すきです。 | I like tennis.
ファン | わたしは この チームの ファンです。 | I'm a fan of this team.
ン | パンと コーヒーを ください。 | Bread and coffee, please.
人 | あの 人は 日本人です。 | That person is Japanese.
六時 | まいあさ 六時に おきます。 | I get up at six every morning.
アメリカじんです | わたしは アメリカじんです。シカゴから きました。 | I'm American. I'm from Chicago.
すみません | すみません、トイレは どこですか。 | Excuse me, where's the restroom?
ともだち | ともだちと きょうとに いきます。 | I'm going to Kyoto with a friend.
あの ひと | あの ひとは だれですか。 | Who is that person?
せんえん | ラーメンは せんえんです。 | The ramen is 1,000 yen.
しちじ | しちじに ばんごはんを たべます。 | I eat dinner at seven.
`;
exports.PATTERNS = `
わたしは ___です。 | I'm ___. | わたしは マイクです。 | I'm Mike.
___じんです。 | I'm ___ (nationality). | カナダじんです。 | I'm Canadian.
___から きました。 | I'm from ___. | シカゴから きました。 | I'm from Chicago.
___は なんですか。 | What is ___? | これは なんですか。 | What is this?
これは ___の しゃしんです。 | This is a photo of ___. | これは かぞくの しゃしんです。 | This is a photo of my family.
___が います。 | I have ___. (people in your family) | あにが います。 | I have an older brother.
___は いくらですか。 | How much is ___? | この ほんは いくらですか。 | How much is this book?
いま ___です。 | It's ___ now. (the time) | いま さんじです。 | It's three o'clock now.
___に おきます。 | I get up at ___. | ろくじに おきます。 | I get up at six.
`;
