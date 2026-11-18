/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   ja-en: pron = katakana reading per docs/profiles/ja.md §6 (must match profile.json pronPattern). */
module.exports = {
"あいさつ": `
Hello. | ヘロウ | こんにちは | いちばん基本のあいさつです。時間帯や相手を問わず使えます。
Hi! | ハイ! | やあ！ / こんにちは | Hello. より軽く、親しみのある言い方です。アメリカでは上司や同僚にも使います。
Hey! | ヘイ! | よう！ / ねえ！ | 友達同士の言い方です。初対面の人に使うと失礼に聞こえることがあります。
Good morning. | グッド モーニング | おはようございます | お昼ごろまで使います。くだけた場面では Morning! だけでもOKです。
Good afternoon. | グッド アフタヌーン | こんにちは（午後のあいさつ） | お昼から夕方6時ごろまで。少し改まった響きで、お店や会社でよく聞きます。
Good evening. | グッド イーヴニング | こんばんは | 会ったときのあいさつです。Good night. は別れるときだけ使います。
How are you? | ハワ ユー? | 元気？ / こんにちは | 体調を本気で聞いているのではなく、あいさつです。Good, thanks. You? と軽く返しましょう。
I'm good, thanks. And you? | アイム グッド, サンクス. アンジュー? | 元気です、ありがとう。そちらは？ | I'm fine, thank you. は教科書的な響きです。good のほうがずっと自然です。
What's up? | ワッツァップ? | 最近どう？ / 何してる？ | あいさつ代わりの決まり文句なので、詳しく答える必要はありません。ふつうは Not much. と答えます。
Not much. | ナット マッチ | 特に何も | What's up? への定番の答えです。Not much, you? と聞き返しましょう。
How's it going? | ハウズィット ゴウイング? | 調子はどう？ | How are you? のカジュアル版です。Pretty good! と返します。
Nice to meet you. | ナイス タ ミーチュー | はじめまして | 初対面のときだけ使います。返事は Nice to meet you, too. です。
Long time no see! | ローング タイム ノウ スィー! | 久しぶり！ | 親しい間柄で使います。少し丁寧に言うなら It's been a while. です。
See you later. | スィー ユー レイラー | またね | 次に会う予定がなくても、別れのあいさつとして気軽に使います。
Take care. | テイク ケア | 元気でね / 気をつけてね | 別れるときの温かいあいさつです。メッセージの最後にもよく添えます。
Have a good one! | ハヴァ グッド ワン! | よい一日を！ | お店の人が会計のあとによく言います。You too! と返せばOKです。
Bye! | バイ! | じゃあね！ | Bye-bye. は大人同士だと少し子どもっぽく聞こえることがあります。
Good night. | グッド ナイト | おやすみなさい | 夜に別れるときや寝るときだけ使います。夜に会ったときは Good evening. です。
`,
"自己紹介": `
My name is Yuki. | マイ ネイム イズ ユーキ | 私の名前はユキです | 日常会話では I'm Yuki. と短く言うのがふつうです。
Please call me Jay. | プリーズ コール ミー ジェイ | ジェイと呼んでください | 英語のニックネームがある人や、呼びやすい短い名前を伝えたいときに使います。
What should I call you? | ワット シュダイ コーリュー? | 何とお呼びすればいいですか？ | 相手の名前の発音が難しいときや、愛称を知りたいときに便利です。
Where are you from? | ウェアラ ユー フラム? | ご出身はどちらですか？ | 海外で最初に聞かれる質問の一つです。
I'm from Japan. | アイム フラム ジャパン | 日本から来ました | 都市名まで言うと会話が広がります。例：I'm from Osaka, in Japan.
I live in Tokyo. | アイ リヴ イン トウキオウ | 東京に住んでいます | live の v は上の歯を下唇に軽く当てて出す音です。Tokyo は「トウキオウ」に近い発音です。
I'm a student. | アイマ ストゥーデント | 私は学生です | 職業の前には a / an が必要です。I'm student. ✕ はよくある間違いです。
What do you do? | ワット ドゥ ユー ドゥー? | お仕事は何をされていますか？ | 職業を聞く定番の質問です。What's your job? よりやわらかく聞こえます。
I work at a bank. | アイ ワーク アラ バンク | 銀行で働いています | 会社や職場の前は at です。例：I work at Toyota.
I work in marketing. | アイ ワーク イン マーケリング | マーケティングの仕事をしています | 分野や部署の前は in です。会社名の前の at と区別しましょう。
I'm 25 years old. | アイム トゥウェニーファイヴ イヤーズ オウルド | 25歳です | 自分から言うのは問題ありませんが、英語圏では初対面で相手の年齢を聞くのは避けましょう。
I'm really into hiking. | アイム ゥリーリー イントゥ ハイキング | ハイキングにハマっています | My hobby is … より自然な趣味の言い方です。
I like watching movies. | アイ ライク ワッチング ムーヴィーズ | 映画を見るのが好きです | like の後ろに動作が来るときは ing形 か to + 動詞の原形 にします。
I've been learning English for a year. | アイヴ ビン ラーニング イングリッシュ フォーラ イヤー | 英語を1年間勉強しています | 以前から続けていて今も続いていることは have been + ing形（現在完了進行形）で表します。
I'm here on vacation. | アイム ヒアロン ヴェイケイション | 休暇で来ています | イギリス英語では I'm here on holiday. と言います。
I'm married. | アイム マリード | 結婚しています | I'm marrying. と言うと「今まさに結婚式の最中」に聞こえます。初対面で相手に結婚しているか聞くのは避けましょう。
I have a younger brother. | アイ ハヴァ ヤンガー ブラザー | 弟が一人います | 英語ではふつう兄と弟を区別せず brother と言います。区別したいときだけ older / younger をつけます。
`,
"サバイバル英語1": `
Excuse me. | イクスキューズ ミー | すみません / ちょっといいですか | 声をかけるときや前を通るときに使います。日本語の「すみません」と違い、お礼には使いません。ぶつかったときなど、謝るときは Sorry! がふつうです。
Thank you. | サンキュー | ありがとうございます | th は舌先を歯で軽くはさむ音ですが、「サンキュー」でも十分通じます。
Thanks a lot. | サンクサラット | 本当にありがとう | Thank you. より軽く、親しみのある言い方です。
You're welcome. | ユア ウェルカム | どういたしまして | カジュアルには Sure. / No problem. / Anytime. も使います。
No problem. | ノウ プラブレム | いえいえ、大丈夫ですよ | お礼への返事としてとてもよく使います。
I'm sorry. | アイム サーリー | ごめんなさい / 申し訳ありません | 本当に謝るときに使います。軽くぶつかったときは Sorry! だけでOK。「すみません」の感覚で多用しないようにしましょう。
Yes, please. | イエス, プリーズ | はい、お願いします | Would you like some water? のような申し出への返事です。
No, thank you. | ノウ, サンキュー | いいえ、結構です | 断るときは No だけよりずっと丁寧です。カジュアルには I'm good, thanks. と言います。
Sorry? | サーリー? | えっ、何ですか？ | 語尾を上げると「もう一度言ってください」の意味になります。アメリカでは Pardon? より一般的です。
Could you say that again? | クジュー セイ ザット アゲン? | もう一度言っていただけますか？ | 聞き取れなかったときは遠慮なく使いましょう。ネイティブ同士でもよく言います。
Could you speak more slowly? | クジュー スピーク モア スロウリー? | もう少しゆっくり話していただけますか？ | please をつけるとさらに丁寧になります。
I don't understand. | アイ ドウント アンダースタンド | わかりません | 少し硬く聞こえます。やわらかく言うなら Sorry, I didn't quite catch that. です。
Do you speak Japanese? | ドゥ ユー スピーク ジャパニーズ? | 日本語を話せますか？ | Can you speak …? より Do you speak …? のほうが自然で、失礼に聞こえません。
I speak a little English. | アイ スピーカ リルル イングリッシュ | 英語を少し話せます | little の tt はラ行のように軽くはじいて発音します。
How do you say this in English? | ハウ ドゥ ユー セイ ズィス イン イングリッシュ? | これは英語で何と言いますか？ | 物を指しながら使うと、その場で単語を覚えられます。
What does this mean? | ワット ダズ ズィス ミーン? | これはどういう意味ですか？ | メニューや看板を指して使います。
Can you help me? | キャニュー ヘルプ ミー? | 手伝ってもらえますか？ | より丁寧に言うなら Could you help me? です。
`,
"サバイバル英語2": `
Where's the restroom? | ウェアズ ザ ゥレストゥルーム? | お手洗いはどこですか？ | アメリカでは restroom / bathroom、イギリスでは toilet / loo。アメリカで toilet は「便器」そのものを指します。
How much is this? | ハウ マッチ イズ ズィス? | これはいくらですか？ | 複数なら How much are these? です。
Is there an ATM around here? | イズ ゼアラン エイティーエム アラウンド ヒア? | この近くにATMはありますか？ | イギリスでは cash machine とも言います。
Can I get the Wi-Fi password? | キャナイ ゲット ザ ワイファイ パスワード? | Wi-Fiのパスワードを教えてもらえますか？ | カフェでよく使います。Is there Wi-Fi here? と聞くこともできます。
I'm lost. | アイム ロースト | 道に迷いました | 地図を見せて Where am I on this map? と聞くのもいいでしょう。
Can I pay by card? | キャナイ ペイ バイ カード? | カードで払えますか？ | アメリカはほとんどの店でカードが使えます。小さな店には最低金額があることもあります。
One moment, please. | ワン モウメント, プリーズ | 少々お待ちください | 丁寧な表現なので、お店や電話でよく聞きます。
Just a second. | ジャスタ セカンド | ちょっと待って | カジュアルな言い方です。さらに短く Just a sec. とも言います。
No worries. | ノウ ワーリーズ | 気にしないで | オーストラリアやイギリスで特によく使い、アメリカでも一般的です。
That's okay. | ザッツ オウケイ | 大丈夫ですよ（相手が謝ったとき） | 謝られたら That's okay! か Don't worry about it. と返します。
Of course. | アヴ コース | もちろんです | 頼みごとを引き受けるときに使います。質問への答えに使うと「当たり前でしょ」と聞こえることがあるので、言い方をやわらかくしましょう。
I'm not sure. | アイム ナット シュア | よくわかりません | I don't know. よりやわらかく聞こえます。
I have a question. | アイ ハヴァ クエスチョン | 質問があります | 授業や会議では Can I ask a question? も使えます。
Can you write it down? | キャニュー ゥライリット ダウン? | 書いてもらえますか？ | 住所・数字・名前が聞き取れなかったときの最強の解決策です。
Can I take a picture? | キャナイ テイカ ピクチャー? | 写真を撮ってもいいですか？ | 美術館やお店では、先に聞くのがマナーです。
Could you take a picture of us? | クジュー テイカ ピクチャー アヴ アス? | 私たちの写真を撮っていただけますか？ | 撮ってもらったら Thank you so much! とお礼を言いましょう。
After you. | アフター ユー | お先にどうぞ | ドアの前やエレベーターで譲るときに。英語圏では後ろの人のためにドアを押さえておくのが基本のマナーです。
Watch out! | ワッチャウト! | 危ない！ | 危険なときに大きな声で言います。Look out! も同じ意味です。
`,
"道案内・交通": `
How do I get to the subway station? | ハウ ドゥ アイ ゲット タ ザ サブウェイ ステイション? | 地下鉄の駅へはどう行けばいいですか？ | イギリスでは underground / tube station。目的地を入れ替えればいろいろな場所に使えます。
Is it far from here? | イズィット ファー フラム ヒア? | ここから遠いですか？ | far の r は舌を軽く奥に引いて発音します。
Is it within walking distance? | イズィット ウィズィン ウォーキング ディスタンス? | 歩いて行ける距離ですか？ | Can I walk there? でもOKです。
Go straight. | ゴウ ストゥレイト | まっすぐ行ってください | Go straight for two blocks. のように言います。アメリカでは距離を block で数えます。
Turn left at the corner. | ターン レフト アット ザ コーナー | 角を左に曲がってください | 信号のところなら at the light です。
It's on your right. | イッツ オン ユア ゥライト | 右手にあります | right の r は唇を丸めて「ゥ」から入るつもりで発音します。
It's across the street. | イッツ アクロース ザ ストゥリート | 通りの向かい側にあります | across from 〜 で「〜の向かい」です。
It's next to the bank. | イッツ ネクス タ ザ バンク | 銀行の隣にあります | next to の t は一つだけ軽く発音されます。
Which line goes downtown? | ウィッチ ライン ゴウズ ダウンタウン? | 中心街へ行くのは何線ですか？ | downtown の前に to はつけません。downtown は「繁華街・中心部」で、日本語の「下町」ではありません。
Where do I transfer? | ウェア ドゥ アイ トゥランスファー? | どこで乗り換えますか？ | イギリスでは change を使います。例：Where do I change?
Does this bus go to the airport? | ダズ ズィス バス ゴウ タ ズィ エアポート? | このバスは空港に行きますか？ | 母音の前の the は「ズィ」と発音します。
Which stop should I get off at? | ウィッチ スタップ シュダイ ゲローフ アット? | どの停留所で降りればいいですか？ | get off で「（バスや電車を）降りる」です。
One ticket to Boston, please. | ワン ティケット タ ボーストン, プリーズ | ボストンまで切符を1枚ください | 行き先の前は to です。
Round trip or one way? | ゥラウンド トゥリップ オア ワン ウェイ? | 往復ですか、片道ですか？ | イギリスでは Return or single? と言います。
Can you take me to this address? | キャニュー テイク ミー タ ズィス アドゥレス? | この住所までお願いします | タクシーで画面を見せながら言えば間違いがありません。
Could you pull over here? | クジュー プル オウヴァー ヒア? | ここで止めてもらえますか？ | タクシーや車から降りたいときに。Right here is fine. もOKです。
How long does it take? | ハウ ローング ダズィット テイク? | どのくらいかかりますか？ | 答えは About 20 minutes. などです。
Is this seat taken? | イズ ズィス スィート テイクン? | この席は空いていますか？ | 空いていれば No, go ahead. と言われます。seat は長く「スィート」と発音します。
Where can I buy a transit card? | ウェア キャナイ バイ ア トゥランズィット カード? | 交通系ICカードはどこで買えますか？ | Suica のようなカードは英語で transit card と言います。IC card とはふつう言いません。都市ごとに呼び名があり、ロンドンなら Oyster card です。
Do I tap my card here? | ドゥ アイ タップ マイ カード ヒア? | ここでカードをタッチしますか？ | 改札でカードを「タッチする」は tap と言います。スマホやクレジットカードをかざして乗れる都市も増えています。
How do I add money to my card? | ハウ ドゥ アイ アッド マニー タ マイ カード? | カードにチャージするにはどうすればいいですか？ | 入金の「チャージ」は英語では add money / reload / top up です。英語の charge は「（料金を）請求する」「充電する」の意味がふつうです。
`,
"レストランで注文": `
A table for two, please. | ア テイブル フォー トゥー, プリーズ | 2名です | アメリカのレストランでは、店員が席に案内するまで入り口で待つのが一般的です。
Do you have a reservation? | ドゥ ユー ハヴァ ゥレザヴェイション? | ご予約はありますか？ | 店員が聞く言葉です。Yes, under Tanaka. のように名字で答えます。
Can I see the menu? | キャナイ スィー ザ メニュー? | メニューを見せてもらえますか？ | menu は前を強く読みます。
What do you recommend? | ワット ドゥ ユー ゥレカメンド? | おすすめは何ですか？ | What's popular here? もいいですね。
I'll have the steak. | アイル ハヴ ザ ステイク | ステーキにします | 注文の基本形は I'll have + 料理名 です。
Can I get a Coke? | キャナイ ゲラ コウク? | コーラをください | get a は「ゲラ」のようにつながります。コーラはふつう Coke と言います。
Medium rare, please. | ミーディアム ゥレア, プリーズ | ミディアムレアでお願いします | How would you like your steak? への答えです。
No onions, please. | ノウ アニャンズ, プリーズ | 玉ねぎは抜いてください | Can I get it without onions? も同じ意味です。
I'm allergic to peanuts. | アイム アラージック タ ピーナッツ | ピーナッツアレルギーがあります | allergic は真ん中を強く読みます。「アレルギー」は英語で allergy（アラジー）です。
Is it spicy? | イズィット スパイスィー? | 辛いですか？ | 海外の spicy は本格的に辛いことがあります。Not too spicy, please. で調整してもらえます。
Could we get some water? | クッド ウィ ゲット サム ワーラー? | お水をいただけますか？ | アメリカのレストランの水はふつう無料です。water は「ワーラー」のように発音します。
Everything was great. | エヴリスィング ワズ グレイト | 全部おいしかったです | 店員に How is everything? と聞かれたらこう答えます。
Can we get the check, please? | キャン ウィ ゲット ザ チェック, プリーズ? | お会計をお願いします | イギリスでは the bill。アメリカでは席で会計するのが一般的です。
Can we split the bill? | キャン ウィ スプリット ザ ビル? | 割り勘にできますか？ | separate checks とも言います。
It's on me. | イッツ オン ミー | 私がおごります | My treat! も同じ意味です。
Can I get this to go? | キャナイ ゲット ズィス タ ゴウ? | これを持ち帰りにできますか？ | 「テイクアウト」より to go が一般的です。残った料理を持ち帰るときは Can I get a box? と言います。
Is the tip included? | イズ ザ ティップ インクルーディッド? | チップは含まれていますか？ | 日本と違い、アメリカのレストランでは料金の15〜20%のチップを別に払うのが一般的です。
`,
"カフェ・コンビニ": `
Can I get an iced Americano? | キャナイ ゲラン アイスト アメリカーノウ? | アイスアメリカーノをください | iced の -d はほとんど聞こえません。飲み物の注文は Can I get 〜? がいちばん一般的です。
What size would you like? | ワット サイズ ウジュー ライク? | サイズはどうなさいますか？ | 店員が聞く言葉です。would you は「ウジュー」とつながります。
Small, please. | スモール, プリーズ | Sサイズでお願いします | 「Sサイズ」とは言わず、small / medium / large と言います。スターバックスでは tall / grande / venti です。
For here or to go? | フォー ヒア オア タ ゴウ? | 店内でお召し上がりですか、お持ち帰りですか？ | 日本の「テイクアウト」は英語では to go が自然です。イギリスでは Eat in or take away? と言います。
Can I get oat milk instead? | キャナイ ゲット オウト ミルク インステッド? | オーツミルクに変えてもらえますか？ | instead は「代わりに」。追加料金がかかることがあります。
Less ice, please. | レス アイス, プリーズ | 氷少なめでお願いします | 氷なしなら No ice, please. です。
Decaf, please. | ディーキャフ, プリーズ | デカフェでお願いします | decaffeinated の略です。日本語の「デカフェ」とは発音が違うので注意しましょう。
Can I get a name for the order? | キャナイ ゲラ ネイム フォー ズィ オーダー? | ご注文のお名前を伺えますか？ | 店員がカップに名前を書くために聞きます。伝えやすい短い名前を決めておくと便利です。
Do you need a bag? | ドゥ ユー ニーダ バッグ? | 袋はご入用ですか？ | いらなければ No, I'm good. と答えます。
Can I get a receipt? | キャナイ ゲラ ゥリスィート? | レシートをください | receipt の p は発音しません。
Where can I find batteries? | ウェア キャナイ ファインド バラリーズ? | 電池はどこにありますか？ | 商品の場所を聞くときの万能フレーズです。
Do you sell phone chargers? | ドゥ ユー セル フォウン チャージャーズ? | スマホの充電器は売っていますか？ | Do you have 〜? も同じ意味です。
Can you heat this up? | キャニュー ヒート ズィサップ? | これを温めてもらえますか？ | 海外のコンビニでは「温めますか？」と聞かれないことが多いので、自分から頼みましょう。
That's it. | ザッツィット | 以上です | 店員に Anything else? と聞かれたときに使います。
Here you go. | ヒア ユー ゴウ | はい、どうぞ | お金や物を手渡すときに使います。
Keep the change. | キープ ザ チェインジ | おつりは取っておいてください | タクシーなどで、チップ代わりによく使います。
`,
"買い物・会計": `
I'm just looking, thanks. | アイム ジャスト ルッキング, サンクス | 見ているだけです | 店員に Can I help you find anything? と声をかけられたときに使います。
Do you have this in a medium? | ドゥ ユー ハヴ ズィス イナ ミーディアム? | これのMサイズはありますか？ | サイズは small / medium / large と言います。
Do you have it in black? | ドゥ ユー ハヴィット イン ブラック? | 黒はありますか？ | 色の前は in です。
Can I try this on? | キャナイ トゥライ ズィソン? | 試着してもいいですか？ | try on で「（服や靴を）試着する」です。
Where's the fitting room? | ウェアズ ザ フィリング ゥルーム? | 試着室はどこですか？ | イギリスでは changing room と言います。
It's too big. | イッツ トゥー ビッグ | 大きすぎます | 小さければ It's too small. です。
It's a bit tight. | イッツァ ビット タイト | 少しきついです | ゆるければ It's a bit loose. です。
Is this on sale? | イズ ズィス オン セイル? | これはセール中ですか？ | on sale は「割引中」、for sale は「売り物」。混同しやすいので注意しましょう。
Can you give me a discount? | キャニュー ギヴ ミー ア ディスカウント? | 少し安くしてもらえますか？ | アメリカの一般的な店ではほとんど値段交渉をしません。市場やフリーマーケットくらいです。
I'll take it. | アイル テイキット | これにします | 買う物を決めたときに。二つ以上なら I'll take them. です。
Cash or card? | キャッシュ オア カード? | 現金ですか、カードですか？ | レジで必ず聞かれる質問です。
Do you take Apple Pay? | ドゥ ユー テイク アプル ペイ? | Apple Payは使えますか？ | take は「（支払い方法を）受け付ける」の意味です。
Can I get a refund? | キャナイ ゲラ ゥリーファンド? | 返金してもらえますか？ | レシートは必ず取っておきましょう。
I'd like to exchange this. | アイド ライク トゥ イクスチェインジ ズィス | これを交換したいです | 理由も添えましょう。例：It's the wrong size.
Can you gift wrap it? | キャニュー ギフト ゥラピット? | ギフト用に包んでもらえますか？ | wrap の w は発音しません。日本ほど丁寧な包装は期待しないほうがいいでしょう。
Does that include tax? | ダズ ザット インクルード タックス? | 税込みですか？ | アメリカでは値札に税金が含まれておらず、会計のときに加算されます。
`,
"数字・時間・日付": `
What time is it? | ワット タイム イズィット? | 今何時ですか？ | 知らない人には Excuse me, do you have the time? と聞きます。
It's three thirty. | イッツ スリー サーリー | 3時半です | half past three（イギリス式）も同じ意味です。
It's a quarter to five. | イッツァ クォーラー タ ファイヴ | 5時15分前です | quarter は「15分」。four forty-five と言ってもOKです。
At noon | アット ヌーン | 正午に / お昼の12時に | 夜の12時は midnight です。12 a.m. / p.m. より紛らわしくありません。
What's the date today? | ワッツ ザ デイト トゥデイ? | 今日は何日ですか？ | 曜日を聞くなら What day is it today? です。
It's May 3rd. | イッツ メイ サード | 5月3日です | 日付は序数（first, second, third…）で読みます。アメリカでは5/3のように「月/日」の順で書きます。
My birthday is in October. | マイ バースデイ イズ イン アクトウバー | 私の誕生日は10月です | 月の前は in、日付の前は on です。例：on October 5th
On Monday | オン マンデイ | 月曜日に | 曜日の前は on。毎週なら on Mondays です。
Next weekend | ネクスト ウィーケンド | 来週末 | next / last / this の前に前置詞はつけません。
The day after tomorrow | ザ デイ アフター タマーロウ | あさって | おとといは the day before yesterday です。
Thirteen or thirty? | サーティーン オア サーリー? | 13ですか、30ですか？ | 13は後ろ（-teen）を強く長く、30は前を強く読みます。値段を聞くときは必ず確認しましょう。
Fifteen dollars | フィフティーン ダラーズ | 15ドル | $15.50は fifteen fifty と読みます。
Two hundred and fifty | トゥー ハンドゥレッド アン フィフティー | 250（二百五十） | アメリカでは and を省くことも多いです。例：two hundred fifty
Ten thousand | テン サウザンド | 1万（10,000） | 英語には「万」の単位がありません。3桁ずつ区切って ten thousand と考えます。10万は a hundred thousand です。
One million | ワン ミリャン | 100万（1,000,000） | 1000万は ten million、1億は one hundred million です。
Twice a week | トゥワイサ ウィーク | 週に2回 | once（1回）、twice（2回）、three times（3回）と数えます。
In ten minutes | イン テン ミニッツ | 10分後に | 未来の時間の前の in は「〜後に」。「10分以内に」ではありません。
`,
"スモールトーク": `
How was your weekend? | ハウ ワズ ユア ウィーケンド? | 週末はどうでしたか？ | 月曜日の定番の質問です。1〜2文で短く答えて、聞き返しましょう。
It was pretty relaxing. | イット ワズ プリリー ゥリラクスィング | けっこうのんびりできました | pretty は「かなり、けっこう」の意味です。「かわいい」ではありません。
Any plans for the weekend? | エニー プランズ フォー ザ ウィーケンド? | 週末は何か予定ありますか？ | 金曜日の定番の質問です。予定がなければ Not really, just relaxing.
Nice weather today, huh? | ナイス ウェザー トゥデイ, ハ? | 今日はいい天気ですね | 天気は誰とでも話せるいちばん安全な話題です。年齢や血液型の話は英語圏では避けましょう。
It's freezing today. | イッツ フリーズィング トゥデイ | 今日はすごく寒いですね | 暑いときは It's boiling! や It's so hot! と言います。
How long have you lived here? | ハウ ローング ハヴュー リヴド ヒア? | ここに住んでどのくらいですか？ | 答えは About three years. などです。
Have you been to Japan? | ハヴュー ビン タ ジャパン? | 日本に行ったことはありますか？ | 経験を聞くときは have been to を使います（現在完了形の経験用法）。
What do you do for fun? | ワット ドゥ ユー ドゥー フォー ファン? | 休みの日は何をしていますか？ | What's your hobby? より自然な趣味の聞き方です。
Have you seen any good shows lately? | ハヴュー スィーン エニー グッド ショウズ レイトリー? | 最近何かおもしろい番組見ました？ | show はドラマやバラエティなど、テレビ番組や配信作品のことです。
That sounds fun. | ザット サウンズ ファン | 楽しそうですね | 相手の話へのあいづちです。That sounds great! もいいですね。
Same here. | セイム ヒア | 私もです | カジュアルには Same! だけでもOKです。
Me neither. | ミー ニーザー | 私も（〜ないです） | 否定文に同意するときに使います。I don't like it. → Me neither. ○（Me too. ✕）
I know, right? | アイ ノウ, ゥライト? | ほんとそれ！ / だよね！ | 強く同意するときのカジュアルな表現です。
Oh, really? | オウ, ゥリーリー? | え、本当ですか？ | 興味を示すあいづちです。語尾を上げます。
By the way | バイ ザ ウェイ | ところで | 話題を変えるときに使います。メッセージでは BTW です。
How's work? | ハウズ ワーク? | 仕事はどうですか？ | 知り合い同士の近況の聞き方です。Busy, but good! のように答えます。
It was nice talking to you. | イット ワズ ナイス トーキング タ ユー | お話しできて楽しかったです | 会話を自然に終わらせるときに使います。
It's supposed to rain tomorrow. | イッツ サポウスト タ ゥレイン タマーロウ | 明日は雨らしいですよ | be supposed to で「〜らしい、〜の予定だ」。天気予報の話はスモールトークの定番です。
What kind of food do you like? | ワット カインダヴ フード ドゥ ユー ライク? | どんな食べ物が好きですか？ | 食べ物は誰とでも盛り上がる安全な話題です。答えたら What about you? と聞き返しましょう。
Have you tried Japanese food? | ハヴュー トゥライド ジャパニーズ フード? | 日本食を食べたことはありますか？ | 相手が日本に興味を持っていそうなら自然な話題です。Can you use chopsticks? は「どうせ使えないでしょう」という前提に聞こえることがあるので避けましょう。
Do you like to travel? | ドゥ ユー ライク タ トゥラヴェル? | 旅行は好きですか？ | 趣味の話を広げる定番の質問です。Where have you been recently? と続けられます。
I love going to hot springs. | アイ ラヴ ゴウイング タ ハット スプリングズ | 温泉に行くのが大好きです | 温泉は hot spring(s) です。日本好きの人なら onsen でも通じます。
Do you watch anime? | ドゥ ユー ワッチ アニメイ? | アニメは見ますか？ | 英語の anime は日本のアニメを指します。アメリカのアニメはふつう cartoon と言います。血液型・年齢・結婚しているかどうかは、英語圏では初対面で聞かないのがマナーです。
`,
"気持ち・リアクション": `
I'm so happy for you! | アイム ソウ ハッピー フォー ユー! | 本当によかったね！ | 相手にいいことがあったときに使います。
Congratulations! | カングラチュレイションズ! | おめでとう！ | 必ず -s をつけます。短く Congrats! とも言います。
That's awesome! | ザッツ オーサム! | すごい！ 最高！ | アメリカ人が本当によく使うリアクションです。
No way! | ノウ ウェイ! | うそでしょ！ / まさか！ | 驚いたときに。断るときにも使います。例：No way, I'm not doing that.
Seriously? | スィリアスリー? | マジで？ / 本気？ | 言い方によって驚きにもいら立ちにもなります。
I'm so tired. | アイム ソウ タイアード | すごく疲れました | くたくたのときは I'm exhausted. です。
I'm stressed out. | アイム ストゥレスタウト | ストレスがたまっています | I have stress. より自然です。
I'm bored. | アイム ボード | 退屈です / 暇です | 注意！ I'm boring. は「私はつまらない人間です」の意味になります。
I'm excited. | アイム イクサイリッド | ワクワクしています | 「テンションが上がる」は英語では excited です。tension は「緊張」の意味なので注意しましょう。
I'm nervous. | アイム ナーヴァス | 緊張しています | 面接や発表の前に。相手には Don't be nervous. と声をかけます。
That's too bad. | ザッツ トゥー バッド | 残念ですね | 軽い残念さを表します。深刻なことには I'm sorry to hear that. を使います。
I'm sorry to hear that. | アイム サーリー タ ヒア ザット | それはお気の毒に | 謝罪ではなく同情の言葉です。この sorry は「残念に思う」の意味です。
What a relief! | ワラ ゥリリーフ! | よかった、ほっとした！ | Phew! と一緒に使うとより自然です。
Oh my gosh! | オウ マイ ガッシュ! | うわー！ / なんてこと！ | Oh my God! を和らげた言い方です。メッセージでは OMG と書きます。
I'm upset. | アイム アプセット | 落ち込んでいます / 腹が立っています | 怒りと悲しみの中間のような気持ちです。日本語の「動揺」とは少しずれます。
That's so annoying. | ザッツ ソウ アノイイング | ほんとイライラする | 人に You're annoying. と言うとかなりきつく聞こえます。
I can't wait! | アイ キャント ウェイト! | 待ちきれない！ / すごく楽しみ！ | 直訳は「待てない」です。
It's not a big deal. | イッツ ナラ ビッグ ディール | 大したことじゃないですよ | 相手が申し訳なさそうなときに安心させる一言です。
`,
"ほめ言葉・好意の表現": `
You look great! | ユー ルック グレイト! | すてきですね！ / 元気そう！ | 見た目をほめるときは You look 〜 で。知り合い同士で自然な言い方です。
I love your shoes. | アイ ラヴ ユア シューズ | その靴、すごくすてき | love は「とても気に入っている」。英語圏では初対面の人の服や靴を軽くほめることもよくあります。
That color looks good on you. | ザット カラー ルックス グッド オニュー | その色、似合いますね | look good on + 人 で「〜に似合う」です。
You have a great smile. | ユー ハヴァ グレイト スマイル | 笑顔がすてきですね | 親しくなった相手への温かいほめ言葉です。
You're so funny. | ユア ソウ ファニー | ほんとおもしろいね | funny は「笑える」、fun は「一緒にいて楽しい」です。
Great job! | グレイト ジャーブ! | よくできました！ | 職場でも学校でも使えます。Nice work! も同じ意味です。
I'm proud of you. | アイム プラウダヴュー | 誇りに思うよ | 家族や友人に。上司が部下に言うこともあります。
You did it! | ユー ディディット! | やったね！ | 目標を達成した人に言います。
Your Japanese is really good! | ユア ジャパニーズ イズ ゥリーリー グッド! | 日本語、本当に上手ですね！ | 日本語を学ぶ友達には励みになります。ただ、少し話しただけで言うと子ども扱いに聞こえることもあります。
You have good taste. | ユー ハヴ グッド テイスト | センスがいいですね | 服・音楽・インテリアの好みをほめるときに。「センスがいい」は英語では good taste です。
I really enjoyed spending time with you. | アイ ゥリーリー インジョイド スペンディング タイム ウィズ ユー | 一緒に過ごせて本当に楽しかったです | デートや集まりの終わりに使います。
Do you want to grab coffee sometime? | ドゥ ユー ワナ グラブ カーフィー サムタイム? | 今度コーヒーでもどう？ | want to は「ワナ」。grab は「軽く食べる・飲む」です。
I miss you. | アイ ミス ユー | 会いたいな / 寂しいよ | 今離れている人に。家族や友人にも使います。
You mean a lot to me. | ユー ミーナ ラット タ ミー | 本当に大切な存在だよ | 友人や恋人に本心を伝えるときに使います。
You're a lifesaver! | ユアラ ライフセイヴァー! | 助かった、命の恩人！ | 小さな手助けにも、大げさなくらいに感謝を表します。
You made my day! | ユー メイド マイ デイ! | おかげで最高の一日になったよ！ | うれしい言葉やプレゼントをもらったときに使います。
That's very kind of you. | ザッツ ヴェリー カインダヴュー | ご親切にありがとうございます | 助けてもらったりほめられたりしたときの丁寧なお礼です。
`,
"仕事・メール": `
I hope this email finds you well. | アイ ホウプ ズィス イーメイル ファインズ ユー ウェル | お元気でお過ごしのことと存じます | 改まったメールの書き出しです。「お世話になっております」の代わりになりますが、毎回は不要です。少しくだけるなら I hope you're doing well.
I'm writing to ask about the schedule. | アイム ゥライリング トゥ アスク アバウト ザ スケジュール | スケジュールについてお伺いしたくご連絡しました | メールの目的は最初の一文で伝えます。I'm writing to + 目的 の形です。
I've attached the report. | アイヴ アタッチト ザ ゥリポート | 報告書を添付しました | Please find attached … はさらに硬い表現です。
Just a quick reminder about tomorrow's meeting. | ジャスタ クイック ゥリマインダー アバウト タマーロウズ ミーリング | 明日の会議について念のためお知らせします | 催促をやわらかく伝える表現です。
Let me know if you have any questions. | レット ミー ノウ イフュー ハヴ エニー クエスチョンズ | ご不明な点があればお知らせください | メールの締めの定番フレーズです。
Could you send me the file by Friday? | クジュー センド ミー ザ ファイル バイ フライデイ? | 金曜日までにファイルを送っていただけますか？ | by は「〜までに」（期限）、until は「〜までずっと」です。
Sorry for the late reply. | サーリー フォー ザ レイト ゥリプライ | 返信が遅くなり申し訳ありません | 謝りすぎないのが英語流です。Thanks for your patience. と感謝の形にする方法もあります。
Thanks for getting back to me. | サンクス フォー ゲリング バック タ ミー | ご返信ありがとうございます | get back to で「（あとで）連絡を返す」です。
Best regards, | ベスト ゥリガーズ | よろしくお願いいたします（メールの結び） | 無難な結びの言葉です。「よろしくお願いします」を直訳する必要はありません。親しい相手なら Best, や Thanks, も使います。
Let's schedule a meeting. | レッツ スケジューラ ミーリング | 会議の日程を決めましょう | アメリカでは「スケジュール」、イギリスでは「シェジュール」に近い発音です。
I'm running late. | アイム ゥラニング レイト | 少し遅れそうです | 移動中に前もって連絡するときに使います。例：I'll be there in 10.
Can we push the meeting to 3? | キャン ウィ プッシュ ザ ミーリング タ スリー? | 会議を3時にずらせますか？ | 前倒しするなら move up です。例：Can we move it up to 1?
I'll get back to you. | アイル ゲット バック タ ユー | 確認して折り返しご連絡します | すぐに答えられないときに時間をもらう表現です。
Can you walk me through it? | キャニュー ウォーク ミー スルー イット? | 順を追って説明してもらえますか？ | walk through で「一つずつ案内する」です。
Let's touch base next week. | レッツ タッチ ベイス ネクスト ウィーク | 来週ちょっと状況を共有しましょう | 短く進捗を確認し合おうという意味です。
What's the deadline? | ワッツ ザ デッドライン? | 締め切りはいつですか？ | When is this due? も同じ意味です。
I'm working from home today. | アイム ワーキング フラム ホウム トゥデイ | 今日は在宅勤務です | 略して WFH。「リモートワーク」も通じますが、会話では work from home がよく使われます。
I'm off tomorrow. | アイム オーフ タマーロウ | 明日は休みです | 有給休暇を取るなら I'm taking a day off tomorrow. です。
Thanks for all your hard work. | サンクス フォー オール ユア ハード ワーク | 本当にお疲れさまでした | 「お疲れさまです」にぴったりの英語はありません。毎日の退勤時は See you tomorrow! で十分です。
Hi Yuki, | ハイ ユーキ | ユキさん、こんにちは（メールの書き出し） | 英語のメールでは、同僚や取引先にも Hi + ファーストネーム がふつうです。「さん」「様」にあたる言葉はないので、Dear Yuki-san ✕ → Hi Yuki, ○ です。
Dear Mr. Smith, | ディア ミスター スミス | スミス様（改まったメールの書き出し） | 初めての相手や改まった場面では Dear + Mr. / Ms. + 名字 を使います。返信で相手がファーストネームで署名してきたら、次からは Hi + 名前 に切り替えましょう。
I hope you're doing well. | アイ ホウプ ユア ドゥーイング ウェル | お元気でお過ごしでしょうか | 「お世話になっております」の代わりになる、やわらかい書き出しです。毎回書く必要はありません。
Thanks in advance. | サンクス イン アドヴァンス | よろしくお願いします（依頼の結び） | 何かを頼んだメールの結びに使います。「よろしくお願いします」に決まった訳はなく、場面に合わせて Thanks! / Best, なども使います。
Looking forward to hearing from you. | ルッキング フォーワード タ ヒアリング フラム ユー | ご連絡をお待ちしております | この to は前置詞なので、後ろは ing形 です。返事がほしいときの結びの定番です。
Just following up on my last email. | ジャスト ファーロウインガップ オン マイ ラスト イーメイル | 前回のメールの件で、念のためご連絡しました | 返事が来ないときの、やわらかい催促の書き出しです。謝りすぎず、用件だけを短く書きましょう。
Does Tuesday work for you? | ダズ トゥーズデイ ワーク フォー ユー? | 火曜日のご都合はいかがですか？ | 日程調整の定番です。この work は「（予定が）都合がいい」の意味です。
Could we reschedule? | クッド ウィ ゥリースケジュール? | 日程を変更できますか？ | 都合が悪くなったときに使います。理由は Something came up.（急用ができました）で十分です。
I'll send you a calendar invite. | アイル センジュー ア キャレンダー インヴァイト | カレンダーの招待を送ります | 会議の日程が決まったあとの定番の一言です。名詞の invite は前を強く読みます。
Feel free to reach out. | フィール フリー タ ゥリーチャウト | お気軽にご連絡ください | reach out は「連絡する」。メールの結びで Let me know if you have any questions. と同じように使えます。
`,
"電話・メッセージ略語": `
Hello, this is Yuki. | ヘロウ, ズィス イズ ユーキ | もしもし、ユキです | 電話では I'm Yuki. ではなく This is Yuki. と言います。
Can I speak to Mr. Tanaka? | キャナイ スピーク タ ミスター タナーカ? | 田中さんはいらっしゃいますか？ | より丁寧には May I speak to …? 英語には「様」「さん」がなく、Mr. / Ms. + 名字 で呼びます。
Who's calling, please? | フーズ コーリング, プリーズ? | どちら様ですか？ | 電話を受ける側が聞く言葉です。
Hold on a second. | ホウルドナ セカンド | ちょっと待ってください | 電話や会話の途中で少し待ってほしいときに使います。
Sorry, you're breaking up. | サーリー, ユア ブレイキンガップ | すみません、声が途切れています | break up は「（電話の音声が）途切れる」。恋人と別れるという意味もあります。
Can I call you back? | キャナイ コーリュー バック? | 折り返し電話してもいいですか？ | 忙しいときは I'm in a meeting. Can I call you back? と言います。
I'll text you. | アイル テクスチュー | メッセージ送るね | アメリカではスマホでメッセージを送ることを text と言います。
I'm on my way. | アイム オン マイ ウェイ | 今向かってる | メッセージでは OMW と書きます。
LOL | エルオウエル | 笑 / w（laughing out loud） | 本当に大笑いしているというより、日本語の「笑」や「w」くらいの軽い感じです。
BRB | ビーアービー | すぐ戻る（be right back） | チャットやゲームで少し席を外すときに使います。
BTW | ビーティーダブリュー | ところで（by the way） | 話題を変えるときに使います。
TBH | ティービーエイチ | 正直言うと（to be honest） | 文の最初か最後につけます。
IDK | アイディーケイ | わかんない（I don't know） | 小文字の idk もよく使います。
OMG | オウエムジー | うそ！ / やばい（oh my God） | 口に出して「オウエムジー！」と言うこともあります。
ASAP | エイエスエイピー / エイサップ | 至急（as soon as possible） | 職場でも使いますが、上司や取引先には具体的な日付を伝えるほうが丁寧です。
TTYL | ティーティーワイエル | またあとでね（talk to you later） | 会話を終えるときに使います。
NVM | エンヴィーエム | やっぱりいいや（never mind） | 質問を取り消すときに使います。
FYI | エフワイアイ | ご参考まで（for your information） | 仕事のメールやチャットでもよく使います。
haha | ハハ | 笑 / w（文字で笑うとき） | 日本語の「笑」や「w」にいちばん近い書き方です。hahaha と長くするほど大笑いになります。lol より少し気持ちがこもった感じです。
JK | ジェイケイ | 冗談だよ（just kidding） | 言いすぎたかなと思ったときに、文の最後につけます。日本語で「（笑）」をつけて和らげる感覚に近いです。日本語の「JK（女子高生）」とは関係ありません。
OMW | オウエムダブリュー | 今向かってる（on my way） | I'm on my way. の略です。待ち合わせのメッセージでよく使います。
GTG | ジーティージー | もう行かなきゃ（got to go） | チャットやゲームを抜けるときに使います。g2g とも書きます。
IMO | アイエムオウ | 私の意見では（in my opinion） | 意見をやわらかく言うときに使います。IMHO（in my humble opinion）とも書きます。
TMI | ティーエムアイ | そこまで聞いてない（too much information） | 生々しい話を聞かされたときの、軽いツッコミです。
TY | ティーワイ | ありがとう（thank you） | thx とも書きます。返事は NP（no problem）や YW（you're welcome）です。
NP | エンピー | いいよ / 気にしないで（no problem） | Thanks! への軽い返事です。仕事の相手には No problem! と書くほうが無難です。
HBD | エイチビーディー | 誕生日おめでとう（happy birthday） | SNSのコメントでよく見かけます。親しい相手以外には Happy birthday! と書くほうが丁寧です。
`,
"旅行（空港・ホテル）": `
Here's my passport. | ヒアズ マイ パスポート | パスポートをどうぞ | チェックインや入国審査で手渡しながら言います。
I'm here for sightseeing. | アイム ヒア フォー サイトスィーイング | 観光で来ました | 入国審査の What's the purpose of your visit? への答えです。
I'm staying for a week. | アイム ステイイング フォーラ ウィーク | 1週間滞在します | How long are you staying? への答えです。
I'm staying at the Hilton. | アイム ステイイング アット ザ ヒルトン | ヒルトンに泊まります | Where are you staying? への答えです。
Window or aisle? | ウィンドウ オア アイル? | 窓側ですか、通路側ですか？ | aisle の s は発音しません。
I'd like an aisle seat, please. | アイド ライカン アイル スィート, プリーズ | 通路側の席をお願いします | 窓側なら a window seat です。
Where is the baggage claim? | ウェアリズ ザ バギッジ クレイム? | 手荷物受取所はどこですか？ | claim はここでは「受け取る」の意味です。日本語の「クレーム（苦情）」は英語では complaint です。
My luggage is missing. | マイ ラギッジ イズ ミスィング | 荷物が出てきません | luggage は数えられない名詞です。1個なら a piece of luggage と言います。
I have a reservation under Tanaka. | アイ ハヴァ ゥレザヴェイション アンダー タナーカ | 田中の名前で予約しています | under + 予約者の名前 で伝えます。
What time is check-out? | ワット タイム イズ チェッカウト? | チェックアウトは何時ですか？ | 遅く出たいなら Can I get a late check-out? と聞きます。
Can I check in early? | キャナイ チェッキン アーリー? | 早めにチェックインできますか？ | check in は「チェッキン」のようにつながります。
Is breakfast included? | イズ ブレックファスト インクルーディッド? | 朝食付きですか？ | breakfast は「ブレックファスト」。「ブレイク」とは読みません。
The air conditioner isn't working. | ズィ エア カンディショナー イズント ワーキング | エアコンが動きません | 「エアコン」は和製英語の略語です。英語で略すなら AC（エイスィー）です。
Could I get some extra towels? | クダイ ゲット サム エクストゥラ タウエルズ? | タオルを追加でもらえますか？ | could I は「クダイ」のようにつながります。
Can you hold my bags until 3? | キャニュー ホウルド マイ バッグズ アンティル スリー? | 3時まで荷物を預かってもらえますか？ | チェックアウト後に荷物を預けたいときに。hold は「預かっておく」です。
My flight was delayed. | マイ フライト ワズ ディレイド | 飛行機が遅れました | 欠航は canceled です。
Where's gate 12? | ウェアズ ゲイト トゥウェルヴ? | 12番ゲートはどこですか？ | 英語では番号を後ろにつけます。
Do I need to take my laptop out? | ドゥ アイ ニード タ テイク マイ ラップタップ アウト? | ノートパソコンは出す必要がありますか？ | 保安検査で使います。「ノートパソコン」は英語で laptop。note PC は和製英語です。
I'm flying out of Haneda. | アイム フライインガウラヴ ハネイダ | 羽田から出発します | 出発する空港は fly out of で表します。成田なら Narita、関西空港なら Kansai International です。
I'd like to check this bag. | アイド ライク タ チェック ズィス バッグ | このかばんを預けたいです | 空港で荷物を預けるのは check です。機内持ち込みの手荷物は carry-on と言います。
I have a connecting flight. | アイ ハヴァ カネクティング フライト | 乗り継ぎ便があります | 乗り継ぎは connecting flight / connection と言います。乗り継ぎ時間が短いときは、係員にこう伝えましょう。
How much should I tip? | ハウ マッチ シュダイ ティップ? | チップはいくら払えばいいですか？ | 日本にはチップの習慣がありませんが、アメリカではレストランで15〜20%が目安です。タクシーやホテルのポーターにも少額を渡します。
`,
"病院・緊急時": `
Help! | ヘルプ! | 助けて！ | 緊急時は大きな声で叫びましょう。
Call 911! | コール ナインワンワン! | 911に電話して！ | アメリカの緊急番号は911（ナイン・ワン・ワン）、イギリスは999です。日本の110番・119番にあたります。
I need a doctor. | アイ ニーダ ダクター | 医者が必要です | 急ぐときは I need an ambulance. と言います。
I don't feel well. | アイ ドウント フィール ウェル | 体調がよくありません | いちばん無難な言い方です。
I have a headache. | アイ ハヴァ ヘデイク | 頭が痛いです | 痛む場所 + ache で表します。例：stomachache, toothache
I have a fever. | アイ ハヴァ フィーヴァー | 熱があります | f は上の歯を下唇に当てて息を出す音です。
My stomach hurts. | マイ スタマック ハーツ | おなかが痛いです | 痛む場所 + hurts でも言えます。stomach は「スタマック」に近い発音です。
I have a sore throat. | アイ ハヴァ ソア スロウト | 喉が痛いです | sore は「ひりひり痛い」。首（neck）ではなく喉の痛みです。
I feel dizzy. | アイ フィール ディズィー | めまいがします | 吐き気がするときは I feel sick. / I feel nauseous. と言います。
I sprained my ankle. | アイ スプレインド マイ アンクル | 足首をねんざしました | sprain は「ねんざする」。手首は wrist です。
Is there a pharmacy near here? | イズ ゼアラ ファーマスィー ニア ヒア? | この近くに薬局はありますか？ | アメリカでは drugstore（CVS など）とも言います。
Do I need a prescription? | ドゥ アイ ニーダ プリスクリプション? | 処方箋は必要ですか？ | 処方箋なしで買える薬は over-the-counter と言います。
I lost my wallet. | アイ ロースト マイ ワーレット | 財布をなくしました | スマホなら phone です。遺失物取扱所は lost and found と言います。
Someone stole my phone. | サムワン ストウル マイ フォウン | スマホを盗まれました | 「私は盗まれた」と受け身にしないよう注意。I was stolen my phone. ✕ → Someone stole my phone. ○
Where is the police station? | ウェアリズ ザ パリース ステイション? | 警察署はどこですか？ | police は後ろを強く読みます。
I need to contact the Japanese embassy. | アイ ニード タ カンタクト ザ ジャパニーズ エンバスィー | 日本大使館に連絡しなければなりません | パスポートをなくしたときに必要なフレーズです。
I have travel insurance. | アイ ハヴ トゥラヴェル インシュアランス | 海外旅行保険に入っています | 医療費が高い国へ行くときは必ず加入しておきましょう。
`,
"句動詞": `
pick up | ピカップ | （車で）迎えに行く / 拾う | I'll pick you up at 7. のように、代名詞（you, it）は間に入ります。
give up | ギヴァップ | あきらめる | Don't give up! 何をやめるかは ing形 で言います。例：give up smoking
figure out | フィギャラウト | 理解する / 解決する | I can't figure out this app.（このアプリの使い方がわからない）
find out | ファインダウト | （事実を）知る / わかる | 情報を知るときに使います。figure out は頭を使って解くときです。
look for | ルック フォー | 探す | I'm looking for my keys. 見つけたら find です。
look after | ルッカフター | 世話をする | Can you look after my cat? アメリカでは take care of もよく使います。
look forward to | ルック フォーワード トゥ | 〜を楽しみにする | to の後ろは名詞か ing形 です。例：I'm looking forward to seeing you.
run out of | ゥラナウラヴ | 〜を切らす / 〜がなくなる | 何がなくなったかは of の後ろに置きます。例：We ran out of milk.（牛乳を切らしちゃった）
turn on | ターノン | （電気・機械を）つける | Turn on the light. 代名詞は間に入れます。例：Turn it on.
turn off | ターノーフ | 消す | 代名詞は間に入れます。Turn it off. ○（turn off it ✕）
turn down | ターン ダウン | 断る / （音量を）下げる | どちらの意味もよく使います。例：She turned down the offer. / Turn it down!
put off | プローフ | 先延ばしにする | 日常会話では postpone よりずっとよく使います。例：Stop putting it off!
show up | ショウアップ | 現れる / 来る | 約束の場所に来るときに使います。例：He didn't show up to the party.（パーティーに来なかった）
hang out | ハンガウト | 遊ぶ / 一緒に過ごす | 大人が友達と遊ぶのは play ではなく hang out です。play は子どもの遊びやゲーム・スポーツに使います。
check out | チェッカウト | チェックする / ちょっと見てみる | Check out this video! ホテルのチェックアウトの意味もあります。
work out | ワーカウト | 運動する / うまくいく | ジムでの運動は work out です。例：I work out every day. / It'll work out.（うまくいくよ）
come up with | カマップ ウィズ | （アイデアを）思いつく | アイデア・言い訳・解決策を思いつくときに使います。例：She came up with a great idea.
get along with | ゲラローング ウィズ | 〜と仲良くやる | I get along with my coworkers.（同僚とうまくやっています）
calm down | カーム ダウン | 落ち着く | calm の l は発音しません。怒っている人に言うと逆効果になることもあります。
set up | セラップ | 設定する / 準備する | 機器の設定や会議の準備などに使います。例：Can you help me set up my printer?
break up | ブレイカップ | 別れる | They broke up last month. 誰と別れるかは break up with で表します。
fill out | フィラウト | （書類に）記入する | Please fill out this form. イギリスでは fill in です。
grow up | グロウアップ | 育つ / 大人になる | 育った場所を言うときに。例：I grew up in Fukuoka.（福岡で育ちました）
wake up | ウェイカップ | 目が覚める | 目が覚める瞬間は wake up、ベッドから出るのは get up です。
`,
"発音注意": `
rice | ゥライス (r) | お米 / ご飯 | R：唇を丸めて、舌先はどこにもつけません。ゥ がついたら唇を丸める合図です。lice と区別しましょう。
lice | ライス (l) | シラミ | L：舌先を上の歯の裏の歯ぐきにつけてから離します。I like rice. を lice と言うと大変です！
right | ゥライト (r) | 右 / 正しい | R で始まります。light と区別しましょう。
light | ライト (l) | 光 / 軽い | L で始まります。舌先が上の歯ぐきにつきます。
fan | ファン (f) | 扇風機 / ファン（熱心な支持者） | F：上の歯を下唇に軽く当てて息を出します。
pan | パン | フライパン | P：両唇を閉じてからはじきます。日本語の「パン（bread）」とは別の単語です。
coffee | カーフィー (f) | コーヒー | 真ん中の f をしっかり。日本語の「コーヒー」のように h で言うと通じにくく、p になると copy に聞こえます。
copy | カーピー | コピーする / コピー | 真ん中は p です。アメリカ英語では「カーピー」に近い音です。
think | スィンク (th) | 考える / 思う | TH：舌先を上下の歯で軽くはさんで息を出します。s で言うと sink になります。
sink | スィンク (s) | 流し台 / 沈む | 舌が歯の裏に隠れた s の音です。
three | スリー (th) | 数字の3 | 舌を歯の間に！ t で言うと tree に聞こえます。
tree | トゥリー | 木 | tr は「チュリー」に近く聞こえることもあります。
this | ズィス (th) | これ | 声を出す th です。舌先を歯の間に置いて「ズ」と言います。
very | ヴェリー (v) | とても | V：上の歯を下唇に当てて声を出します。b で言うと berry になります。
berry | ベリー (b) | ベリー（イチゴなどの実） | 両唇を閉じてから離す b です。
vote | ヴォウト (v) | 投票する | v で始まります。boat と区別しましょう。
boat | ボウト (b) | ボート / 船 | b で始まります。「ボート」より「ボウト」に近い音です。
walk | ウォーク | 歩く | l は発音しません。口を縦に大きく開けた「オー」です。
work | ワーク (r) | 働く | 舌を奥に引いて r の響きを入れます。walk と混同しやすいペアです。
beach | ビーチ | 浜辺 | 「イー」を長く！ 短く言うと別の失礼な単語に聞こえることがあります。
leave | リーヴ | 出発する / 去る | 長く「リー」と言います。短い live（住む）と区別しましょう。
live | リヴ | 住む | 短く力を抜いて「リヴ」。leave より口を横に引きません。
banana | バナナ | バナナ | 真ん中の「ナ」を強く、長めに読みます。日本語のように平らに読むと通じにくいです。
hotel | ホウテル | ホテル | 後ろの「テル」を強く読みます。前を強く読むと不自然です。
milk | ミルク | 牛乳 | 最後の「ク」に母音をつけないように。最後の子音は口の形だけ軽く作ります。
McDonald's | マクダーナルズ | マクドナルド | 「ダー」を強く読みます。「マクドナルド」と言うと通じにくいです。
play | プレイ (l) | 遊ぶ / （スポーツ・楽器を）する | L：舌先を上の歯ぐきにつけます。pl のように子音が続くところは、R/L の区別がいちばん難しい位置です。
pray | プレイ (r) | 祈る | R：舌をどこにもつけず、唇を丸めます。カタカナでは play と同じ「プレイ」になるので、音声で聞き分けましょう。
fly | フライ (l) | 飛ぶ / ハエ | fl の L です。舌先を上の歯ぐきにつけてから離します。
fry | フライ (r) | 揚げる / 炒める | 料理の「フライ」はこちらですが、音は R です。fly と言うと「ハエ」や「飛ぶ」に聞こえます。
sea | スィー (s) | 海 | s + イー。日本語の「シー」ではなく「スィー」です。舌先を下の歯の裏に近づけて息を出します。
she | シー (sh) | 彼女は | 唇を少し突き出して出す sh の音です。sea を「シー」と言うと she に聞こえます。
seat | スィート (s) | 座席 | 「シート」と言うと sheet（シーツ）に聞こえます。スィ の音を意識しましょう。
sheet | シート (sh) | シーツ / （紙）1枚 | sh の音です。a sheet of paper で「紙1枚」です。
sick | スィック (s) | 病気の / 気分が悪い | s の音です。thick と同じ「スィック」になるので、舌の位置で区別します。
thick | スィック (th) | 厚い / 濃い | TH：舌先を上下の歯で軽くはさんで息を出します。
mouse | マウス (s) | ネズミ / （パソコンの）マウス | 最後は舌が歯の裏に隠れた s です。
mouth | マウス (th) | 口 | 最後は舌を歯の間に出す th です。mouse と同じカタカナになるので、音声で確かめましょう。
food | フード (f) | 食べ物 | F：上の歯を下唇に当てて息を出します。日本語の「フ」は唇を合わせる音なので、そのままだと who'd に近く聞こえます。
who'd | フード (h) | who would / who had の短縮形 | H：唇は合わせず、のどから息を出します。food との違いは音声で聞き分けましょう。
fold | フォウルド (f) | 折りたたむ | f の音です。上の歯を下唇に当てます。
hold | ホウルド (h) | 持つ / 押さえておく | h の音です。唇はどこにもつけません。
cold | コウルド | 寒い / 冷たい | 二重母音：「コ」から「ウ」へ口を動かします。「コールド」と伸ばすと called に聞こえます。
called | コールド | call の過去形（電話した / 呼んだ） | 口を縦に開いたまま「コー」と伸ばします。cold の「コウ」と区別しましょう。
low | ロウ | 低い | 二重母音の「オウ」です。「ロー」と伸ばすと law に聞こえます。
law | ロー | 法律 | 口を縦に開いたまま伸ばす「オー」です。
bought | ボート | buy の過去形（買った） | 「ボート」と伸ばす音は bought です。船の boat は二重母音の「ボウト」です。
`,
"英語イディオム": `
It's a piece of cake. | イッツァ ピーサヴ ケイク | 朝飯前です | とても簡単なことです。例：The test was a piece of cake.
I'm on cloud nine. | アイム オン クラウド ナイン | 天にも昇る気持ちです | とても幸せなときに使います。
It costs an arm and a leg. | イット コースツァン アーム アンダ レッグ | めちゃくちゃ高いです | 腕と脚を差し出すほど高い、という意味です。
Let's call it a day. | レッツ コーリラ デイ | 今日はここまでにしましょう | 仕事や勉強を終えるときに。会議でも自然です。
I'm feeling under the weather. | アイム フィーリング アンダー ザ ウェザー | ちょっと体調がすぐれません | 風邪気味など軽い不調のときに。天気とは関係ありません。
I need to hit the books. | アイ ニード タ ヒット ザ ブックス | しっかり勉強しなきゃ | 試験前などに使います。本をたたくわけではありません。
Once in a blue moon | ワンス イナ ブルー ムーン | ごくまれに | 非常にまれなことに使います。例：I only eat fast food once in a blue moon.
Better late than never. | ベラー レイト ザン ネヴァー | 遅くてもやらないよりはまし | 遅れて始めた人を励ますときに使います。
Don't beat around the bush. | ドウント ビート アラウンド ザ ブッシュ | 遠回しに言わないで | 本題を言ってほしいという意味です。
It's not my cup of tea. | イッツ ナット マイ カッパヴ ティー | 私の好みではありません | やんわり断るときに便利です。
Let's get the ball rolling. | レッツ ゲット ザ ボール ゥロウリング | さあ、始めましょう | 会議やプロジェクトを始めるときに使います。
I'll keep my fingers crossed. | アイル キープ マイ フィンガーズ クロースト | うまくいくよう祈っています | 人差し指と中指を交差させるジェスチャーと一緒に使います。
Hang in there. | ハンギン ゼア | もう少しの辛抱だよ / がんばって | つらい時期を過ごしている人にかける言葉です。
Speak of the devil! | スピーカヴ ザ デヴル! | 噂をすれば影！ | 話題にしていた人が現れたときに使います。
The ball is in your court. | ザ ボール イズ イン ユア コート | 次はそちらが決める番です | テニスから来た表現です。
My lips are sealed. | マイ リップス アー スィールド | 秘密は守ります | 唇に封をした、という意味です。
It's on the tip of my tongue. | イッツ オン ザ ティッパヴ マイ タング | 喉まで出かかっているんだけど… | 思い出せそうで思い出せないときに。日本語では「喉」、英語では「舌の先」です。
I'm all ears. | アイム オール イアーズ | ちゃんと聞いてるよ / 聞かせて | 全身を耳にして聞く、という意味です。
When pigs fly. | ウェン ピッグズ フライ | 絶対ありえないね | 絶対に起こらないことに使います。例：He'll clean his room when pigs fly.
`,
"映画・ドラマ・スラング": `
Spill the tea. | スピル ザ ティー | 噂話、聞かせて | tea は「ゴシップ・噂」の意味です。友達同士のスラングです。
No cap. | ノウ キャップ | マジで、うそじゃない | 若者のスラングです。cap は「うそ」の意味です。
That song slaps. | ザット ソーング スラップス | あの曲、最高 | slap は「（音楽が）最高にいい」。食べ物にも使います。
I'm dead. | アイム デッド | ウケる / 笑い死にしそう | メッセージではドクロの絵文字と一緒によく使います。本当に死んだわけではありません。
Low-key | ロウキー | ちょっと / ひそかに | I low-key love this song. 反対は high-key（あからさまに）です。
I'm obsessed with this song. | アイム アブセスト ウィズ ズィス ソーング | この曲にどハマりしてる | obsessed は「夢中な」。前向きな意味でよく使います。
What's it about? | ワッツィット アバウト? | どんな話？ | 映画やドラマのあらすじを聞くときに使います。
No spoilers! | ノウ スポイラーズ! | ネタバレ禁止！ | Don't spoil it! も同じ意味です。
I binge-watched the whole season. | アイ ビンジワッチト ザ ホウル スィーズン | シーズン全部を一気見しました | binge-watch は「一気見する」です。
The ending was so good. | ズィ エンディング ワズ ソウ グッド | ラストがすごくよかった | いまいちだったら The ending was disappointing. と言います。
It's a must-watch. | イッツァ マストワッチ | 絶対見るべき作品だよ | 強くおすすめするときに使います。
Plot twist! | プラット トゥウィスト! | まさかの展開！ | 日常で予想外のことが起きたときにも使います。
It's overrated. | イッツ オウヴァレイリッド | 過大評価されてるね | 反対は underrated（過小評価された）です。
That scene gave me chills. | ザット スィーン ゲイヴ ミー チルズ | あのシーン、鳥肌が立った | 感動や緊張で鳥肌が立ったときに使います。
Who's your bias? | フーズ ユア バイアス? | 推しは誰？ | K-popファンの言葉で、日本語の「推し」に近い表現です。一般的には Who's your favorite member? と言います。
Are you kidding me? | アー ユー キディング ミー? | 冗談でしょ？ / ありえない | ドラマの定番セリフです。驚きにもいら立ちにも使えます。
I've got your back. | アイヴ ガット ユア バック | 私がついてるよ | 味方になって支える、という意味です。
Gotcha. | ガッチャ | わかった / 捕まえた！ | got you の略です。「了解」の意味でいちばんよく使います。
Let's do this! | レッツ ドゥー ズィス! | よし、やろう！ | 始める前に気合いを入れるときに使います。
`,
"アルファベット": `
A | エイ | 文字 A（小文字は a） | 例：apple。名前は「エー」と伸ばさず、二重母音の「エイ」です。
B | ビー | 文字 B（小文字は b） | 例：book。両唇を閉じてから「ビー」。V（ヴィー）と聞き間違えられやすい文字です。
C | スィー | 文字 C（小文字は c） | 例：coffee。名前は see と同じ「スィー」。「シー」だと she に聞こえます。
D | ディー | 文字 D（小文字は d） | 例：dog。「デー」ではなく「ディー」です。
E | イー | 文字 E（小文字は e） | 例：egg。名前は「イー」。I（アイ）と逆にしないよう、メールアドレスでは特に注意しましょう。
F | エフ | 文字 F（小文字は f） | 例：food。最後は上の歯を下唇に当てて息だけ。coffee の ff は double F と言います。
G | ジー | 文字 G（小文字は g） | 例：good。J（ジェイ）、Z（ズィー）と混ざりやすい名前です。
H | エイチ | 文字 H（小文字は h） | 例：hotel。「エッチ」ではなく「エイチ」。an H と言います。
I | アイ | 文字 I（小文字は i） | 例：ice。名前は「アイ」で、E（イー）とは別です。大文字の I は「私」の意味にもなります。
J | ジェイ | 文字 J（小文字は j） | 例：job。「ジェー」と伸ばさず「ジェイ」。G（ジー）と区別しましょう。
K | ケイ | 文字 K（小文字は k） | 例：key。「ケー」ではなく「ケイ」。Q（キュー）とは別の文字です。
L | エル | 文字 L（小文字は l） | 例：light。最後に舌先を上の歯ぐきにつけます。R（アー）と区別しましょう。
M | エム | 文字 M（小文字は m） | 例：menu。N と聞き間違えやすいので、M as in Mary のように確認すると確実です。
N | エン | 文字 N（小文字は n） | 例：name。学校で習う「エヌ」は英語では使いません。舌先を歯ぐきにつけて止めます。
O | オウ | 文字 O（小文字は o） | 例：orange。「オー」ではなく「オウ」。英語では電話番号の 0 を「オウ」と読むこともあります。
P | ピー | 文字 P（小文字は p） | 例：park。電話では B（ビー）と聞き間違えやすい文字です。
Q | キュー | 文字 Q（小文字は q） | 例：question。英単語ではほとんどの場合、後ろに u が続きます。
R | アー | 文字 R（小文字は r） | 例：rice。「アール」ではなく、舌先をどこにもつけない「アー」です。an R と言います。
S | エス | 文字 S（小文字は s） | 例：sorry。class の ss のように二つ続くときは double S と言います。
T | ティー | 文字 T（小文字は t） | 例：taxi。「テー」ではなく「ティー」です。
U | ユー | 文字 U（小文字は u） | 例：umbrella。母音字ですが名前は y の音で始まるので a U です。
V | ヴィー | 文字 V（小文字は v） | 例：very。「ブイ」ではなく、上の歯を下唇に当てる「ヴィー」です。
W | ダブリュー | 文字 W（小文字は w） | 例：water。double u（U が二つ）という意味の名前で、3音節です。
X | エックス | 文字 X（小文字は x） | 例：X-ray（レントゲン）。名前が母音の音で始まるので an X です。box のように語末にもよく来ます。
Y | ワイ | 文字 Y（小文字は y） | 例：yes。名前は why と同じ音です。
Z | ズィー | 文字 Z（小文字は z） | 例：zoo。アメリカでは「ゼット」ではなく zee（ズィー）。イギリスでは zed と言います。
`,
"カタカナ英語の落とし穴": `
I live in an apartment. | アイ リヴ イナン アパートメント | マンションに住んでいます | 意味のずれ。英語の mansion は「大豪邸」です。ふつうの集合住宅は apartment（建物全体は apartment building）と言います。
He's an office worker. | ヒーザン アーフィス ワーカー | 彼はサラリーマンです | 和製英語。salaryman は英語ではほとんど通じません。office worker のほか、I work in sales. のように仕事の中身で言うのも自然です。
She's an office worker. | シーザン アーフィス ワーカー | 彼女はOLです | 和製英語。OL（office lady）は英語では使いません。男女とも office worker です。
Where's the outlet? | ウェアズ ズィ アウトレット? | コンセントはどこですか？ | 和製英語。英語の consent は「同意」です。壁の差し込み口は outlet（イギリスでは socket）と言います。
My laptop is dead. | マイ ラップタップ イズ デッド | ノートパソコンの電池が切れました | 和製英語。note PC は通じません。laptop と言いましょう。dead は電池切れにも使います。
I'd like to make a complaint. | アイド ライク タ メイカ カンプレイント | クレームを言いたいのですが | 意味のずれ。英語の claim は「主張する、（保険などを）請求する」です。苦情は complaint です。
I'm so excited! | アイム ソウ イクサイリッド! | テンション上がる！ | 意味のずれ。英語の tension は「緊張、張りつめた空気」です。気分が上がっているときは excited を使います。
She's very sensitive. | シーズ ヴェリー センスィリヴ | 彼女はとても繊細です（ナイーブ） | 意味のずれ。英語の naive は「世間知らず、考えが甘い」で、ほめ言葉にはなりません。
He's slim. | ヒーズ スリム | 彼はスマートです（細身） | 意味のずれ。英語の smart は「頭がいい」です。体型のことは slim と言います。
The hotel has a breakfast buffet. | ザ ホウテル ハザ ブレックファスト バフェイ | ホテルの朝食はバイキングです | 和製英語。英語の Viking は「北欧の海賊」です。食べ放題の形式は buffet、または all-you-can-eat と言います。
Can you turn on the air conditioner? | キャニュー ターノン ズィ エア カンディショナー? | クーラーをつけてもらえますか？ | 意味のずれ。英語の cooler はふつう飲み物を冷やす「クーラーボックス」のことです。冷房は air conditioner、略して AC です。
Can I borrow a mechanical pencil? | キャナイ バーロウ ア メカニカル ペンスル? | シャーペンを借りてもいいですか？ | 和製英語。sharp pencil は通じません。mechanical pencil と言います。
I'll email you. | アイル イーメイリュー | メールします | 意味のずれ。英語の mail は主に「郵便」です。電子メールは email で、動詞としても I'll email you. と言います。
Is there a gas station near here? | イズ ゼアラ ギャス ステイション ニア ヒア? | この近くにガソリンスタンドはありますか？ | 和製英語。gasoline stand は通じません。アメリカでは gas station、イギリスでは petrol station です。
I'll ask at the front desk. | アイル アスク アット ザ フラント デスク | フロントで聞いてみます | 和製英語。front だけでは「前」の意味です。ホテルの受付は front desk、または reception と言います。
Can I get some fries? | キャナイ ゲット サム フライズ? | フライドポテトをください | 和製英語。fried potato とはふつう言いません。アメリカでは fries（イギリスでは chips）です。
Please put your phone on silent. | プリーズ プット ユア フォウン オン サイレント | 携帯をマナーモードにしてください | 和製英語。manner mode は通じません。音を消すのは silent、振動させるのは vibrate です。
Can I get your autograph? | キャナイ ゲット ユア オーラグラフ? | サインをもらえますか？ | 意味のずれ。有名人の「サイン」は autograph です。英語の sign は「署名する」「標識」で、書類の署名は signature と言います。
He cheated on the test. | ヒー チーリッド オン ザ テスト | 彼はテストでカンニングをしました | 意味のずれ。英語の cunning は「ずる賢い」という形容詞で、不正行為の意味はありません。
It's on the house. | イッツ オン ザ ハウス | こちらはサービスです | 意味のずれ。英語の service は「接客・業務」で、「無料のおまけ」の意味はありません。お店のおごりは on the house と言います。
We're renovating our kitchen. | ウィア ゥレナヴェイリング アワ キッチン | 台所をリフォームしています | 意味のずれ。英語の reform は「（制度などを）改革する」です。家の改装は renovate、または remodel と言います。
I bought a new dress. | アイ ボータ ヌー ドゥレス | 新しいワンピースを買いました | 和製英語。英語の one-piece はふつう女性用の水着を指します。ワンピースは dress です。
I like your earrings. | アイ ライク ユア イアリングズ | そのピアス、すてきですね | 和製英語。英語の pierce は「穴をあける」という動詞です。耳のアクセサリーは、穴があってもなくても earrings と言います。
Do you want to play cards? | ドゥ ユー ワナ プレイ カーズ? | トランプしない？ | 意味のずれ。英語の trump は「切り札」です。トランプ遊びは cards、1組は a deck of cards と言います。
`
};
