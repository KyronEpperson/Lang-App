/* ja-en stage A1: new lessons for Japanese speakers (English side shared with ko-en). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it と there：主語の位置を埋める", blurb:"天気・時間は it、「〜があります」は there is / there are。", deck:"スモールトーク", body:`
<p>日本語は「寒いね」「近くにカフェがあります」のように、主語がなくても文になります。英語は主語の位置を空けておくことができません。そこで、意味を持たない <b>it</b> と <b>there</b> でその位置を埋めます。</p>
<h3>天気・時間は It</h3>
<p>この it は「それ」ではありません。主語の位置を埋めるだけの言葉です。「寒いね」と言いたいときも、まず <b>It's</b> から言い始めましょう。</p>
{{ex:It's cold today.|イッツ コウルド トゥデイ|今日は寒いです}}{{ex:It's three o'clock.|イッツ スリー アクラック|3時です}}{{ex:It's raining.|イッツ ゥレイニング|雨が降っています}}
<h3>「〜があります」は There is / There are</h3>
<p>一つなら <b>There is a …</b>、二つ以上なら <b>There are … -s</b> です。話すときは There's と縮めます。</p>
{{ex:There's a cafe near here.|ゼアザ キャフェイ ニア ヒア|この近くにカフェがあります}}{{ex:There are two rooms.|ゼアラー トゥー ゥルームズ|部屋が二つあります}}
<h3>疑問文と否定文</h3>
{{ex:Is there a bathroom here?|イズ ゼアラ バスルーム ヒア?|ここにトイレはありますか？}}{{ex:Are there any seats?|アー ゼアレニー スィーツ?|席は空いていますか？}}{{ex:There isn't a bus today.|ゼアリズンタ バス トゥデイ|今日はバスがありません}}
<h3>have との違い</h3>
<p>人が持っているものは <b>have</b>、ある場所に存在するものは <b>there is</b> です。日本語ではどちらも「あります」なので注意しましょう。</p>
{{ex:I have a car.|アイ ハヴァ カー|車を持っています}}{{ex:There's a car outside.|ゼアザ カー アウトサイド|外に車があります}}
<div class="tip">よくある間違い：<b>Is cold.</b> ✕ → <b>It's cold.</b> ○ / <b>Have a cafe here.</b> ✕ → <b>There's a cafe here.</b> ○</div>`,
check:[["「今日は暑いです」を英語で言うと？",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"天気の文は it で主語の位置を埋めます。"],["There ___ three people. 空所に入るのは？",["is","are","have","be"],1,"三人（複数）なので there are です。"],["「ここにトイレはありますか？」を英語で言うと？",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"あるかどうかを聞くときは Is there a 〜? です。"]],
practice:[
["mc","「雨が降っています」=","It's raining.","Is raining.","There is raining.","Rain is.","天気の文は it が主語です。"],
["mc","「この近くにカフェがあります」=","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","場所にあるものは there is。一つなので冠詞 a をつけます。"],
["mc","There ___ two rooms. 空所に入るのは？","are","is","have","has","rooms が複数なので are です。"],
["mc","「3時です」=","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","時間も it で始めます。"],
["mc","「車を持っています」=","I have a car.","There is a car me.","I am a car.","It's a car me.","人が持っているものは have です。"],
["or","今日は寒いです","It's cold today","There's","天気の文は it が主語です。"],
["or","外に車があります","There's a car outside","cars","1台なので冠詞 a と単数の car を使います。"],
["or","席が二つあります","There are two seats","seat is","二つ以上なので are と複数形 seats です。"],
["fi","__ cold today.","今日は寒いです","It's|It is","Is|There's|This","主語の位置を it で埋めます。"],
["fi","There __ a bank near here.","近くに銀行があります","is","are|have|be","一つなので is です。"],
["fi","__ there any seats?","席は空いていますか？","Are","Is|Do|Have","seats が複数なので Are です。"],
["ty","今日は暑いです","It's hot today","it · hot · today — 天気は it","There's","天気の文は it で始めます。"],
["ty","ここにトイレはありますか？","Is there a bathroom here|Is there a restroom here","is there · bathroom — 冠詞に注意","the","初めて尋ねる一つのものなので冠詞 a をつけます。"],
["ty","部屋が二つあります","There are two rooms","there are · two · room — 複数","room","二つなので複数形 rooms です。"]]},

{ id:"plurals", title:"複数の s と this / these、my / your", blurb:"二つ以上なら必ず s。this は一つ、these は複数。", deck:"買い物・会計", body:`
<p>日本語は「りんご3個」「本を2冊」のように、数を助数詞で表し、名詞の形は変わりません。英語は二つ以上なら名詞に必ず <b>-s</b> をつけます。two と言ったからそれで十分、ではありません。冠詞と並んで、日本語話者が落としやすいところです。</p>
<p>「〜たち」も複数の s とは別物です。「学生たち」「犬たち」のように人や動物にしか使わず、つけなくても文になります。英語の -s は人にも物にも、毎回必要です。</p>
<h3>複数形の作り方</h3>
<div class="tbl"><table><tr><th>ルール</th><th>例</th></tr><tr><td>ほとんどは -s</td><td class="k">book → books</td></tr><tr><td>s・x・ch・sh のあとは -es</td><td class="k">box → boxes</td></tr><tr><td>子音 + y → -ies</td><td class="k">city → cities</td></tr><tr><td>不規則</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|トゥー ブックス|本2冊}}{{ex:three boxes|スリー バックスィズ|箱三つ}}{{ex:I have two children.|アイ ハヴ トゥー チルドゥレン|子どもが二人います}}
<h3>this / that は一つ、these / those は複数</h3>
<p>日本語の「これ」「あれ」は一つでも複数でも同じですが、英語は this と these のように数で形を変えます。</p>
{{ex:This is my bag.|ズィス イズ マイ バッグ|これは私のかばんです}}{{ex:These are my keys.|ズィーズ アー マイ キーズ|これは全部私の鍵です}}{{ex:Those shoes are nice.|ゾウズ シューズ アー ナイス|あの靴、すてきですね}}
<h3>my, your, his, her, our, their</h3>
<p>「誰の」を表す所有格です。所有格があるときは a や the を一緒に使いません。</p>
{{ex:Is this your phone?|イズ ズィス ユア フォウン?|これ、そちらのスマホですか？}}{{ex:Her brothers live in Osaka.|ハー ブラザーズ リヴ イン オウサーカ|彼女の兄弟は大阪に住んでいます}}
<div class="tip">数字、many、these、those のあとの名詞はいつも複数形です：<b>two friend</b> ✕ → <b>two friends</b> ○、<b>my a bag</b> ✕ → <b>my bag</b> ○</div>`,
check:[["I have two ___. 空所に入るのは？",["sister","sisters","a sister","sister's"],1,"二人なので複数形 sisters です。"],["___ are my keys. 空所に入るのは？",["This","That","These","It"],2,"keys が複数なので These です。"],["「これは私のかばんです」を英語で言うと？",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"my があるときは冠詞をつけません。"]],
practice:[
["mc","「本2冊」=","two books","two book","two a book","twos book","二つ以上なので複数の s をつけます。"],
["mc","child の複数形は？","children","childs","childes","child","不規則に変化する複数形です。"],
["mc","___ shoes are nice.（あの靴）","Those","That","This","It","shoes が複数なので those です。"],
["mc","「これは私のかばんです」=","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","my と冠詞は一緒に使いません。"],
["mc","box の複数形は？","boxes","boxs","boxies","box","s, x, ch, sh のあとは -es です。"],
["or","これは全部私の鍵です","These are my keys","key This","複数なので these と複数形 keys を使います。"],
["or","子どもが二人います","I have two children","child a","二人なので複数形 children です。冠詞 a は使いません。"],
["or","あの靴、すてきですね","Those shoes are nice","That","shoes が複数なので those です。"],
["fi","I have three __.","猫を3匹飼っています","cats","cat|a cat|cat's","3匹なので複数形 cats です。"],
["fi","__ is my friend.","こちらは私の友達です","This","These|Those|They","一人なので this です。"],
["fi","Two __, please.","コーヒーを二つください","coffees","coffee|a coffee|coffee's","杯数を数えて注文するときは coffees のように複数形で言います。"],
["ty","これは全部私の本です","These are my books","these · my · book — 複数","book","複数なので these と複数形 books です。"],
["ty","姉妹が二人います","I have two sisters","have · two · sister — 複数","sister","二人なので複数形 sisters です。"],
["ty","これは私のかばんです","This is my bag","this · my · bag — 冠詞なしで","a","my があるときは冠詞 a を使いません。"]]},
{ id:"present", title:"現在形と語順：主語 + 動詞 + 目的語", blurb:"日本語は動詞が最後、英語は動詞が二番目です。", deck:"自己紹介", body:`
<p>日本語は「私はコーヒーを<b>飲みます</b>」のように動詞が最後に来ます。英語は<b>誰が → する → 何を</b>の順です。「は」「を」のような助詞がないので、この順番がそのまま意味を決めます。</p>
<h3>主語 + 動詞 + 目的語</h3>
{{ex:I drink coffee.|アイ ドゥリンク カーフィー|コーヒーを飲みます}}{{ex:I study English.|アイ スタディー イングリッシュ|英語を勉強します}}
<h3>場所と時間はうしろへ</h3>
<p>残りの情報は<b>場所 → 時間</b>の順にうしろへつけます。日本語のように「毎日」「東京に」を動詞の前に置かないようにしましょう。</p>
{{ex:We live in Tokyo.|ウィ リヴ イン トウキオウ|私たちは東京に住んでいます}}{{ex:I study English every day.|アイ スタディー イングリッシュ エヴリー デイ|毎日英語を勉強します}}{{ex:They work on weekends.|ゼイ ワーク オン ウィーケンズ|彼らは週末に働きます}}
<h3>現在形は習慣と事実</h3>
<p>いつもすること、変わらない事実を表します。否定文は動詞の前に <b>don't</b> を入れます。</p>
{{ex:I don't eat meat.|アイ ドウント イート ミート|肉は食べません}}
<h3>頻度：always, usually, sometimes, never</h3>
<p>頻度を表すこれらの副詞は、一般動詞の<b>すぐ前</b>に置きます。</p>
{{ex:I usually get up at seven.|アイ ユージュアリー ゲラップ アット セヴン|たいてい7時に起きます}}{{ex:I never drink coffee at night.|アイ ネヴァー ドゥリンク カーフィー アット ナイト|夜はコーヒーを絶対に飲みません}}
<div class="tip">日本語の順番のまま英語にすると間違えます：<b>I coffee drink.</b> ✕ → <b>I drink coffee.</b> ○。主語のあとにすぐ動詞を言う練習をしましょう。</div>`,
check:[["「私はコーヒーを飲みます」の正しい語順は？",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"主語 + 動詞 + 目的語の順です。"],["I ___ eat meat.（食べません）",["not","am not","no","don't"],3,"一般動詞の否定文は don't を使います。"],["always の正しい位置は？",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"頻度を表す副詞は動詞のすぐ前に置きます。"]],
practice:[
["mc","「私は英語を勉強します」=","I study English.","I English study.","I am study English.","Study I English.","主語 + 動詞 + 目的語の順です。"],
["mc","「肉は食べません」=","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","一般動詞の否定文は don't を使います。"],
["mc","「私たちはソウルに住んでいます」=","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","動詞のあとに場所が来ます。"],
["mc","「たいてい7時に起きます」=","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","usually は動詞のすぐ前に置きます。"],
["mc","毎日することを表す文は？","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","習慣は現在形で表します。"],
["or","毎日コーヒーを飲みます","I drink coffee every day","the am","習慣は現在形です。一般的な coffee には冠詞をつけません。"],
["or","本をたくさん読みます","I read many books","book","many のあとは複数形 books が来ます。"],
["or","私たちは週末に働きます","We work on weekends","are","一般動詞の前に be動詞を重ねて使いません。"],
["fi","I __ like fish.","魚は好きではありません","don't|do not","not|am not|no","一般動詞の否定文は don't を使います。"],
["fi","I __ English every day.","毎日英語を勉強します","study","am study|studying|to study","現在形は動詞をそのままの形で使います。"],
["fi","They live __ Busan.","彼らは釜山に住んでいます","in","at|on|to","都市の前は in です。"],
["ty","紅茶を飲みます","I drink tea","drink · tea — 冠詞なしで","a","一般的な tea には冠詞をつけません。"],
["ty","猫が好きです","I like cats","like · cat — 複数形で","cat","その動物全体を指すときは複数形 cats です。"],
["ty","肉は食べません","I don't eat meat","don't · eat · meat","am","一般動詞の否定文は don't を使います。"]]},
{ id:"questions", title:"疑問文：Do you 〜? と疑問詞", blurb:"語尾を上げるだけでは足りません。Do を前に、疑問詞は文の頭に。", deck:"サバイバル英語2", body:`
<p>日本語は文の最後に「か」をつけたり、語尾を上げたりするだけで疑問文になります。英語は<b>語順</b>を変えないと疑問文になりません。</p>
<h3>be動詞：主語と入れ替える</h3>
{{ex:Are you okay?|アー ユー オウケイ?|大丈夫ですか？}}{{ex:Is this your bag?|イズ ズィス ユア バッグ?|これ、そちらのかばんですか？}}
<h3>一般動詞：Do を前に</h3>
<p>文の前に <b>Do</b> をつけます。残りの順番はそのままです。「〜ですか」につられて <b>Are you like …?</b> としないよう注意しましょう。</p>
{{ex:Do you like coffee?|ドゥ ユー ライク カーフィー?|コーヒーは好きですか？}}{{ex:Do you speak English?|ドゥ ユー スピーク イングリッシュ?|英語を話しますか？}}
<p>答えは短く言います：<b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>疑問詞は文の頭に</h3>
<p>what（何）、where（どこ）、when（いつ）、who（誰）、why（なぜ）、how（どう）を文の頭に置き、そのあとは疑問文の語順を続けます。</p>
{{ex:Where do you live?|ウェア ドゥ ユー リヴ?|どこに住んでいますか？}}{{ex:What do you do?|ワット ドゥ ユー ドゥー?|お仕事は何ですか？}}{{ex:Where is the bathroom?|ウェアリズ ザ バスルーム?|トイレはどこですか？}}{{ex:How much is this?|ハウ マッチ イズ ズィス?|これはいくらですか？}}
<div class="tip">よくある間違い：<b>Where you live?</b> ✕ → <b>Where do you live?</b> ○、<b>Are you like coffee?</b> ✕ → <b>Do you like coffee?</b> ○</div>`,
check:[["「コーヒーは好きですか？」を英語で言うと？",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"一般動詞の疑問文は Do で始めます。"],["「どこに住んでいますか？」を英語で言うと？",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"疑問詞 + do + 主語 + 動詞の順です。"],["Do you speak English? への正しい答えは？",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Do で聞かれたら do で答えます。"]],
practice:[
["mc","「英語を話しますか？」=","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","一般動詞の疑問文は Do で始めます。"],
["mc","「どこに住んでいますか？」=","Where do you live?","Where you live?","Where are you live?","Where live you?","疑問詞 + do + 主語 + 動詞の順です。"],
["mc","「これはいくらですか？」=","How much is this?","How much this is?","How much does this?","What much is this?","値段は How much is 〜? で聞きます。"],
["mc","Do you like tea? への正しい答えは？","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Do で聞かれたら do で答えます。"],
["mc","「お仕事は何ですか？」=","What do you do?","What are you do?","What you do?","What do you?","職業は What do you do? で聞きます。"],
["or","コーヒーは好きですか？","Do you like coffee","Are the","一般動詞の疑問文は Do で始めます。一般的な coffee には冠詞をつけません。"],
["or","トイレはどこですか？","Where is the bathroom","a do","この建物のそのトイレなので冠詞 the です。"],
["or","どこに住んでいますか？","Where do you live","are","一般動詞の疑問文には do が必要です。"],
["fi","__ you like music?","音楽は好きですか？","Do","Are|Is|Does","一般動詞 like の疑問文は Do で始めます。"],
["fi","__ do you live?","どこに住んでいますか？","Where","What|Who|When","場所を聞くときは where です。"],
["fi","What time __ it?","今何時ですか？","is","do|does|are","時間は be動詞で聞きます。"],
["ty","英語を話しますか？","Do you speak English","do · speak · English","Are","一般動詞の疑問文は Do で始めます。"],
["ty","トイレはどこですか？","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — 冠詞 the","a","お互いにわかっているそのトイレなので冠詞 the です。"],
["ty","犬は好きですか？","Do you like dogs","do · like · dog — 複数","dog","動物全体を指すときは複数形 dogs です。"]]},
{ id:"third-s", title:"三単現の s：does / doesn't", blurb:"主語が he / she / it なら動詞に s。疑問文と否定文は does。", deck:"自己紹介", body:`
<p>現在形で主語が <b>he, she, it</b> や一人の人・一つの物のときは、動詞に <b>-s</b> をつけます。学校で習った「三単現の s（三人称単数現在の s）」です。日本語の動詞は主語によって形が変わらないので、ルールを知っていても話すときに抜けやすいところです。知っていることと口から出ることは別なので、声に出して練習しましょう。</p>
<div class="tbl"><table><tr><th>主語</th><th>動詞</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|シー ワークス アラ バンク|彼女は銀行で働いています}}{{ex:He likes soccer.|ヒー ライクス サーカー|彼はサッカーが好きです}}{{ex:My mom cooks well.|マイ マム クックス ウェル|母は料理が上手です}}
<h3>形が少し変わる動詞</h3>
{{ex:She has a car.|シー ハザ カー|彼女は車を持っています（have → has）}}{{ex:He goes to work at eight.|ヒー ゴウズ タ ワーク アット エイト|彼は8時に出勤します（go → goes）}}{{ex:She studies English.|シー スタディーズ イングリッシュ|彼女は英語を勉強しています（study → studies）}}
<h3>否定文と疑問文は does</h3>
<p><b>doesn't</b> や <b>Does</b> を使うと、s はそちらに移ります。あとの動詞は s のつかない原形です。</p>
{{ex:He doesn't drink coffee.|ヒー ダズント ドゥリンク カーフィー|彼はコーヒーを飲みません}}{{ex:Does she live here?|ダズ シー リヴ ヒア?|彼女はここに住んでいますか？}}
<div class="tip">よくある間違い：<b>She work here.</b> ✕ → <b>She works here.</b> ○、<b>Does she works?</b> ✕ → <b>Does she work?</b> ○</div>`,
check:[["She ___ in Seoul. 空所に入るのは？",["live","lives","living","is live"],1,"主語が she なので三単現の s をつけます。"],["He ___ like coffee. 空所に入るのは？",["don't","isn't","doesn't","not"],2,"主語が he の否定文は doesn't を使います。"],["「彼女は車を持っています」を英語で言うと？",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"have は主語が she のとき has になります。"]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","主語が一人なので三単現の s がついた works です。"],
["mc","「彼はコーヒーを飲みません」=","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","he の否定文は doesn't + 動詞の原形です。"],
["mc","「彼女はここに住んでいますか？」=","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Does のあとの動詞は s をつけない原形です。"],
["mc","have → she ___","has","haves","have","is have","have は has に変わります。"],
["mc","study → he ___","studies","studys","study","studyes","子音 + y は -ies に変わります。"],
["or","彼女は銀行で働いています","She works at a bank","work the","she なので三単現の works です。初めて話す職場なので冠詞 a を使います。"],
["or","彼は犬を2匹飼っています","He has two dogs","have dog","he なので has、2匹なので複数形 dogs です。"],
["or","彼女は肉を食べません","She doesn't eat meat","eats","doesn't のあとは s のつかない原形が来ます。"],
["fi","He __ soccer.","彼はサッカーが好きです","likes","like|liking|is like","he なので三単現の likes です。"],
["fi","__ she speak English?","彼女は英語を話しますか？","Does","Do|Is|Are","she の疑問文は Does で始めます。"],
["fi","She __ to work at eight.","彼女は8時に出勤します","goes","go|going|gos","三単現では go は goes になります。"],
["ty","彼は車を持っています","He has a car","has · car — 冠詞 a","have","he なので has、車1台なので冠詞 a です。"],
["ty","彼女は猫が好きです","She likes cats","likes · cat — 複数","cat","she なので三単現の likes、猫全体なので複数形 cats です。"],
["ty","彼はここに住んでいません","He doesn't live here","doesn't · live · here","lives","doesn't のあとは動詞の原形が来ます。"]]},
{ id:"countable", title:"数えられる名詞と数えられない名詞：some, any, much, many", blurb:"water には a も s もつけません。many は数えられるもの、much は数えられないものに。", deck:"レストランで注文", body:`
<p>英語の名詞は<b>数えられる名詞（可算名詞）</b>と<b>数えられない名詞（不可算名詞）</b>に分かれます。日本語にはない区別なので、最初はとまどうかもしれません。</p>
<div class="tbl"><table><tr><th>数えられる</th><th>数えられない</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an、数字、-s がつく</td><td>a / an、数字、-s はつかない</td></tr></table></div>
<h3>カタカナ語に注意</h3>
<p>インフォメーション、バゲージ、ファニチャー、アドバイスなどは、英語では数えられない名詞です。日本語で「情報を二つ」と言えても、英語で <b>informations</b> や <b>an advice</b> とは言いません。</p>
{{ex:Can I get some information?|キャナイ ゲット サム インファメイション?|情報をいただけますか？}}{{ex:How much baggage do you have?|ハウ マッチ バギッジ ドゥ ユー ハヴ?|お荷物はどのくらいありますか？}}
<h3>some と any</h3>
<p>「いくらか、いくつか」は、肯定文では <b>some</b>、否定文と疑問文では <b>any</b> です。</p>
{{ex:I have some money.|アイ ハヴ サム マニー|お金が少しあります}}{{ex:I don't have any money.|アイ ドウント ハヴ エニー マニー|お金が全然ありません}}{{ex:Do you have any questions?|ドゥ ユー ハヴ エニー クエスチョンズ?|何か質問はありますか？}}
<h3>many と much</h3>
<p>数えられる名詞には <b>many</b> + 複数形、数えられない名詞には <b>much</b> を使います。<b>a lot of</b> はどちらにも使えます。</p>
{{ex:How many people?|ハウ メニー ピープル?|何名様ですか？}}{{ex:How much is it?|ハウ マッチ イズィット?|いくらですか？}}{{ex:I don't have much time.|アイ ドウント ハヴ マッチ タイム|あまり時間がありません}}
<h3>数えられないものの数え方</h3>
{{ex:a glass of water|ア グラサヴ ワーラー|水1杯}}{{ex:a cup of coffee|ア カッパヴ カーフィー|コーヒー1杯}}
<div class="tip">よくある間違い：<b>a water</b>、<b>many money</b>、<b>informations</b> ✕ → <b>some water</b>、<b>much money</b>、<b>information</b> ○</div>`,
check:[["How ___ people are there? 空所に入るのは？",["much","many","any","a"],1,"people は数えられるので many です。"],["数えられない名詞はどれ？",["apple","chair","water","friend"],2,"water には a も複数の s もつけません。"],["I don't have ___ money. 空所に入るのは？",["some","a","many","any"],3,"否定文では any を使います。"]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","water は数えられないので、a や many は使えません。"],
["mc","How ___ time do we have?","much","many","any","a","time は数えられないので much です。"],
["mc","「何か質問はありますか？」=","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","any のあとの数えられる名詞は複数形です。"],
["mc","「水1杯」=","a glass of water","a water glass of","one waters","a glass water","数えられないものは a glass of で数えます。"],
["mc","I have ___ friends in Seoul.","many","much","a","an","friends は数えられる名詞の複数形なので many です。"],
["or","お金が少しあります","I have some money","a moneys","money は数えられないので、冠詞 a も複数の s もつけられません。"],
["or","りんごを二つください","Two apples please","apple","二つなので複数形 apples です。"],
["or","あまり時間がありません","I don't have much time","many","time は数えられないので much です。"],
["fi","How __ is this?","これはいくらですか？","much","many|any|some","値段は how much で聞きます。"],
["fi","I don't have __ questions.","質問はありません","any","some|much|a","否定文では any を使います。"],
["fi","a cup __ coffee","コーヒー1杯","of","for|in|a","a cup of 〜 で数えます。"],
["ty","お水をいただけますか？","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — 冠詞なしで","a","water は数えられないので、冠詞 a の代わりに some を使います。"],
["ty","何か質問はありますか？","Do you have any questions","any · question — 複数","question","any のあとの数えられる名詞は複数形 questions です。"],
["ty","（お店で）何名様ですか？","How many people","how many · people","much","人は数えられるので many です。"]]},
{ id:"object-have", title:"me, him, her と have", blurb:"動詞のあとは I ではなく me。そして何にでも使える have。", deck:"自己紹介", body:`
<p>日本語は「を」「に」をつけるだけですが、英語は代名詞の<b>形そのもの</b>が変わります。動詞や前置詞の<b>あと</b>には目的格を使います。</p>
<div class="tbl"><table><tr><th>主格</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>目的格</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|シー ノウズ ミー|彼女は私のことを知っています}}{{ex:I like him.|アイ ライク ヒム|私は彼が好きです}}{{ex:Can you help us?|キャニュー ヘルプ アス?|私たちを手伝ってもらえますか？}}{{ex:I work with her.|アイ ワーク ウィズ ハー|彼女と一緒に働いています}}
<h3>目的語を省略しない</h3>
<p>日本語は「好き」「買います」「知ってる？」のように、わかりきった目的語を言わずにすませます。英語では、こうした動詞のあとに目的語が必要です。言わなくてもわかるものは <b>it</b>、<b>him</b>、<b>them</b> などで表しましょう。</p>
{{ex:I like it.|アイ ライキット|（それが）好きです}}{{ex:I'll buy it.|アイル バイ イット|（それを）買います}}{{ex:Do you know him?|ドゥ ユー ノウ ヒム?|（彼のことを）知っていますか？}}
<h3>have：持っている、いる</h3>
<p>「〜がいます／あります」を、人を主語にして言うときに使います。家族、物、時間はすべて have です。</p>
{{ex:I have two brothers.|アイ ハヴ トゥー ブラザーズ|兄弟が二人います}}{{ex:Do you have a pen?|ドゥ ユー ハヴァ ペン?|ペンを持っていますか？}}{{ex:I don't have time.|アイ ドウント ハヴ タイム|時間がありません}}
<h3>have：食べる、飲む</h3>
<p>食事の名前の前には冠詞をつけません。</p>
{{ex:Let's have lunch.|レッツ ハヴ ランチ|お昼を食べましょう}}{{ex:I have coffee every morning.|アイ ハヴ カーフィー エヴリー モーニング|毎朝コーヒーを飲みます}}
<div class="tip">よくある間違い：<b>She knows I.</b> ✕ → <b>She knows me.</b> ○、<b>I like.</b> ✕ → <b>I like it.</b> ○、<b>I am two brothers.</b> ✕ → <b>I have two brothers.</b> ○</div>`,
check:[["I like ___.（彼が）",["he","his","him","he's"],2,"動詞のあとは目的格 him です。"],["Can you help ___?（私たちを）",["us","we","our","ours"],0,"動詞のあとは目的格 us です。"],["「ペンを持っていますか？」を英語で言うと？",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"have は一般動詞なので Do で聞きます。"]],
practice:[
["mc","She knows ___.（私を）","me","I","my","mine","動詞のあとは目的格 me です。"],
["mc","I like ___.（彼らが）","them","they","their","theirs","動詞のあとは目的格 them です。"],
["mc","「私たちを手伝ってもらえますか？」=","Can you help us?","Can you help we?","Can you help our?","Can us help you?","動詞のあとは目的格 us です。"],
["mc","「お昼を食べましょう」=","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","食事の名前には冠詞をつけません。"],
["mc","「兄弟が二人います」=","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","家族は have で表し、二人なので複数形です。"],
["or","ペンを持っていますか？","Do you have a pen","the pens","どのペンでもいい1本なので、冠詞 a と単数の pen です。"],
["or","私は彼女が好きです","I like her","she","動詞のあとは目的格 her です。"],
["or","妹が二人います","I have two sisters","sister a","二人なので複数形 sisters です。冠詞 a は使えません。"],
["fi","Call __ tonight.","今夜、私に電話して","me","I|my|mine","動詞のあとは目的格 me です。"],
["fi","I work with __.","彼と一緒に働いています","him","he|his|he's","前置詞のあとも目的格を使います。"],
["fi","She __ a dog.","彼女は犬を飼っています","has","have|is|haves","she なので has です。"],
["ty","ちょっと手伝ってもらえますか？","Can you help me|Could you help me","can you · help · me","I","動詞のあとは目的格 me です。日本語では言わない「私を」も、英語では必要です。"],
["ty","ペンを持っていますか？","Do you have a pen","do you have · pen — 冠詞 a","the","どのペンでもいい1本を探しているので冠詞 a です。"],
["ty","友達がたくさんいます","I have many friends|I have a lot of friends","have · many · friend — 複数","friend","many のあとは複数形 friends が来ます。"]]},
{ id:"can-like", title:"can、like + -ing、I'd like：できることと、したいこと", blurb:"できること、好きなこと、今ほしいものを伝えます。", deck:"スモールトーク", body:`
<p>自己紹介と注文ですぐに使える三つの型です。</p>
<h3>can：〜できる</h3>
<p><b>can + 動詞の原形</b>です。主語が he / she でも三単現の s はつけません。</p>
{{ex:I can swim.|アイ キャン スウィム|泳げます}}{{ex:I can't drive.|アイ キャント ドゥライヴ|運転できません}}{{ex:Can you speak Japanese?|キャニュー スピーク ジャパニーズ?|日本語を話せますか？}}
<h3>like + -ing：〜するのが好き</h3>
<p>趣味を言うときは、like や love のあとに<b>動詞の ing形</b>を使います。</p>
{{ex:I like cooking.|アイ ライク クッキング|料理をするのが好きです}}{{ex:I love watching movies.|アイ ラヴ ワッチング ムーヴィーズ|映画を見るのが大好きです}}{{ex:I don't like running.|アイ ドウント ライク ゥラニング|走るのは好きではありません}}
<h3>I'd like：〜がほしい、〜したい（丁寧に）</h3>
<p><b>I like</b> は「いつも好き」、<b>I'd like</b> は「今ほしい」という丁寧な言い方です。注文するときは I'd like を使いましょう。</p>
{{ex:I'd like a coffee, please.|アイド ライカ カーフィー, プリーズ|コーヒーを一つお願いします}}{{ex:Would you like some tea?|ウジュー ライク サム ティー?|紅茶はいかがですか？}}
<div class="tip">よくある間違い：<b>He can swims.</b> ✕ → <b>He can swim.</b> ○、カフェで <b>I like a coffee.</b> ✕ → <b>I'd like a coffee.</b> ○</div>`,
check:[["She can ___ very well. 空所に入るのは？",["sings","sing","singing","to sing"],1,"can のあとは動詞の原形です。"],["「料理をするのが好きです」を英語で言うと？",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"like のあとは ing形を使います。"],["カフェで注文するとき、いちばん自然な言い方は？",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"今ほしいものは I'd like で伝えます。"]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","can のあとは動詞の原形です。"],
["mc","「運転できません」=","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","can の否定は can't です。"],
["mc","「映画を見るのが好きです」=","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","like のあとは ing形、映画全般なので複数形 movies です。"],
["mc","注文で「コーヒーを一つお願いします」=","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","今ほしいものは I'd like で伝えます。"],
["mc","「紅茶はいかがですか？」=","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","すすめるときは Would you like 〜? です。"],
["or","コーヒーを一つお願いします","I'd like a coffee please","the coffees","注文する1杯なので、冠詞 a と単数の coffee です。"],
["or","本を読むのが好きです","I like reading books","book read","like のあとは ing形、本全般なので複数形 books です。"],
["or","泳げますか？","Can you swim","swimming","can のあとは動詞の原形です。"],
["fi","I can't __.","泳げません","swim","swimming|swims|to swim","can't のあとは動詞の原形です。"],
["fi","I like __ music.","音楽を聴くのが好きです","listening to","listen to|listen|to listening","like のあとは ing形を使います。"],
["fi","__ like a sandwich, please.","サンドイッチを一つください","I'd|I would","I|I'm|I can","注文は I'd like で言います。"],
["ty","料理をするのが好きです","I like cooking|I love cooking|I like to cook","like · cook — ing形","cook","like のあとは ing形を使います。"],
["ty","サンドイッチを一つください","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich","I'd like · sandwich — 冠詞 a","the","どれでもいい一つなので冠詞 a です。"],
["ty","犬が好きです","I like dogs|I love dogs","like · dog — 複数","dog","犬全般を指すときは複数形 dogs です。"]]},
{ id:"continuous", title:"今しているところ：be + -ing", blurb:"いつものことは現在形、今していることは be + -ing。「〜ている」がいつも -ing になるわけではありません。", deck:"スモールトーク", body:`
<p><b>今この瞬間</b>にしていることは、<b>be動詞 + 動詞の ing形</b>（現在進行形）で表します。</p>
{{ex:I'm working now.|アイム ワーキング ナウ|今、働いています}}{{ex:She's cooking dinner.|シーズ クッキング ディナー|彼女は夕食を作っています}}{{ex:It's raining.|イッツ ゥレイニング|雨が降っています}}
<h3>疑問文と否定文</h3>
{{ex:What are you doing?|ワラ ユー ドゥーイング?|今、何をしていますか？}}{{ex:Are you listening?|アー ユー リスニング?|聞いていますか？}}{{ex:I'm not sleeping.|アイム ナット スリーピング|寝ていませんよ}}
<h3>現在形と比べる</h3>
<div class="tbl"><table><tr><th>いつも（現在形）</th><th>今（be + -ing）</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>「〜ている」＝ be + -ing ではない</h3>
<p>日本語の「〜ている」は、「食べている」のような進行中の動作にも、「結婚している」「知っている」のような状態にも使います。英語の be + -ing が表すのは、進行中の動作だけです。状態の「〜ている」は、現在形や形容詞で言いましょう。</p>
{{ex:I'm married.|アイム マリード|結婚しています}}{{ex:I know him.|アイ ノウ ヒム|彼を知っています}}{{ex:I live in Tokyo.|アイ リヴ イン トウキオウ|東京に住んでいます}}
<p>like, know, want, need, have（持っている）のように<b>状態</b>を表す動詞は、今のことでも現在形で使います。live も、ふだん住んでいる場所なら現在形です。I'm living … は「一時的に住んでいる」ときだけです。</p>
{{ex:I want some water.|アイ ワント サム ワーラー|水が飲みたいです}}
<div class="tip">よくある間違い：be動詞を落とす <b>I working.</b> ✕ → <b>I'm working.</b> ○。「〜ている」をそのまま訳す <b>I'm knowing him.</b> ✕ → <b>I know him.</b> ○、<b>I'm marrying.</b> ✕ → <b>I'm married.</b> ○</div>`,
check:[["「今、何をしていますか？」を英語で言うと？",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"今していることは be + -ing で聞きます。"],["I ___ coffee every morning. 空所に入るのは？",["am drinking","drinking","drink","am drink"],2,"毎日の習慣は現在形です。"],["正しい文はどれ？",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"know, want, have（所有）は「〜ている」と訳せても ing形にしません。"]],
practice:[
["mc","「今、働いています」=","I'm working now.","I work now am.","I'm work now.","I working now.","今していることは be + -ing です。"],
["mc","「彼女は夕食を作っています」=","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing を使い、食事の名前には冠詞をつけません。"],
["mc","毎日することを表す文は？","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","習慣は現在形です。"],
["mc","「今、何をしていますか？」=","What are you doing?","What do you doing?","What are you do?","What you are doing?","疑問詞 + be動詞 + 主語 + -ing の順です。"],
["mc","「彼を知っています」=","I know him.","I'm knowing him.","I knowing him.","I'm know him.","know は「知っている」と訳せても ing形にしない動詞です。"],
["or","本を読んでいます","I'm reading a book","read books","今読んでいる1冊なので、冠詞 a と単数の book です。"],
["or","子どもたちが遊んでいます","The kids are playing","kid is","複数なので複数形 kids と are を使います。"],
["or","今、雨が降っています","It's raining now","rains","今起きていることは be + -ing です。"],
["fi","I'm __ TV.","テレビを見ています","watching","watch|watches|to watch","be動詞のあとは ing形です。"],
["fi","What __ you doing?","何をしているんですか？","are","do|is|does","you には are です。"],
["fi","She __ working today.","彼女は今日は働いていません","isn't|is not","doesn't|don't|not","be + -ing の否定は isn't です。"],
["ty","今、料理しています","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — ing形","cook","今していることは be + -ing です。"],
["ty","映画を見ています","I'm watching a movie","I'm · watching · movie — 冠詞 a","the","どれか1本の映画なので冠詞 a です。"],
["ty","子どもたちが寝ています","The kids are sleeping|The children are sleeping","kids · are · sleeping — 複数","kid","複数なので複数形 kids と are です。"]]},
{ id:"past", title:"過去形：was / were と -ed", blurb:"be動詞は was / were、一般動詞は -ed。疑問文と否定文は did。", deck:"スモールトーク", body:`
<p>日本語の「〜でした」「〜ました」にあたります。be動詞と一般動詞で過去形の作り方が違います。過去形は日本語話者が比較的得意なところなので、テンポよく進みましょう。</p>
<h3>be動詞の過去形：was / were</h3>
<p>I, he, she, it には <b>was</b>、you, we, they には <b>were</b> を使います。</p>
{{ex:I was tired.|アイ ワズ タイアード|疲れていました}}{{ex:It was fun.|イット ワズ ファン|楽しかったです}}{{ex:We were at home.|ウィ ワー アット ホウム|私たちは家にいました}}{{ex:Were you busy?|ワー ユー ビズィー?|忙しかったですか？}}
<h3>一般動詞の過去形：-ed</h3>
<p>動詞の最後に <b>-ed</b> をつけます。主語が誰でも形は同じです。</p>
{{ex:I worked yesterday.|アイ ワークト イエスタデイ|昨日は仕事をしました}}{{ex:We watched a movie.|ウィ ワッチタ ムーヴィー|私たちは映画を見ました}}{{ex:She called me.|シー コールド ミー|彼女から電話がありました}}
<h3>否定文と疑問文は did</h3>
<p><b>didn't</b> や <b>Did</b> を使うと、動詞は原形に戻ります。</p>
{{ex:I didn't work yesterday.|アイ ディドゥント ワーク イエスタデイ|昨日は仕事をしませんでした}}{{ex:Did you call me?|ディジュー コール ミー?|電話をくれましたか？}}
<div class="tip">よくある間違い：<b>I didn't worked.</b> ✕ → <b>I didn't work.</b> ○、<b>I was work.</b> ✕ → <b>I worked.</b> ○</div>`,
check:[["They ___ at home yesterday. 空所に入るのは？",["was","were","did","are"],1,"主語が they なので were です。"],["「昨日は仕事をしませんでした」を英語で言うと？",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"didn't のあとは動詞の原形です。"],["Did you ___ the movie? 空所に入るのは？",["watch","watched","watching","watches"],0,"Did のあとは動詞の原形です。"]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","I には was です。"],
["mc","「私たちは映画を見ました」=","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","一般動詞の過去形は -ed です。"],
["mc","「昨日、電話しましたか？」=","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Did のあとは動詞の原形です。"],
["mc","「楽しかったです」=","It was fun.","It were fun.","It did fun.","It funned.","it には was です。"],
["mc","「忙しかったですか？」=","Were you busy?","Did you busy?","Was you busy?","Were you busied?","busy は状態を表すので be動詞で聞きます。"],
["or","私たちは映画を見ました","We watched a movie","watch movies","映画1本なので、冠詞 a と単数の movie です。"],
["or","友人たちと遊びました","I played with my friends","friend play","複数人なので複数形 friends です。"],
["or","昨日は仕事をしませんでした","I didn't work yesterday","worked","didn't のあとは動詞の原形です。"],
["fi","We __ at home last night.","私たちは昨夜、家にいました","were","was|did|are","we には were です。"],
["fi","I __ soccer yesterday.","昨日サッカーをしました","played","play|playing|was play","過去形は -ed です。"],
["fi","__ you work yesterday?","昨日は仕事をしましたか？","Did","Were|Do|Was","一般動詞の過去の疑問文は Did で始めます。"],
["ty","疲れていました","I was tired","was · tired","were","主語の I を省略せず、I には was を使います。"],
["ty","映画を1本見ました（watch の過去形で）","I watched a movie","watched · movie — 冠詞 a","the","映画1本なので冠詞 a をつけます。"],
["ty","友人たちに電話しました","I called my friends","called · my · friend — 複数","friend","複数人なので複数形 friends です。"]]},
{ id:"irregular-past", title:"不規則動詞の過去形：went, ate, saw", blurb:"よく使う動詞ほど -ed ではありません。まずは12個だけ覚えましょう。", deck:"スモールトーク", body:`
<p>毎日使う動詞ほど、過去形が<b>不規則</b>です。ルールがないので、原形と過去形をペアで覚えましょう。学校で「go – went – gone」と唱えた変化表の、最初の二つです。</p>
<div class="tbl"><table><tr><th>原形</th><th>過去形</th><th>原形</th><th>過去形</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Osaka.|アイ ウェント トゥ オウサーカ|大阪に行きました}}{{ex:We ate pizza.|ウィ エイト ピーツァ|私たちはピザを食べました}}{{ex:I saw a movie.|アイ ソー ア ムーヴィー|映画を見ました}}{{ex:I met my friends.|アイ メット マイ フレンズ|友人たちに会いました}}{{ex:I bought a book.|アイ ボータ ブック|本を1冊買いました}}
<h3>疑問文と否定文では原形に</h3>
<p><b>did</b> が過去を表すので、動詞は原形に戻ります。</p>
{{ex:What did you do?|ワット ディジュー ドゥー?|何をしましたか？}}{{ex:Where did you go?|ウェア ディジュー ゴウ?|どこに行きましたか？}}{{ex:I didn't go.|アイ ディドゥント ゴウ|行きませんでした}}
<div class="tip">よくある間違い：<b>I goed.</b> ✕ → <b>I went.</b> ○、<b>Did you went?</b> ✕ → <b>Did you go?</b> ○</div>`,
check:[["go の過去形は？",["goed","gone","went","going"],2,"go の過去形は went です。"],["「何をしましたか？」を英語で言うと？",["What did you do?","What did you did?","What you did?","What were you do?"],0,"did のあとは原形の do です。"],["I didn't ___ breakfast. 空所に入るのは？",["ate","eaten","eats","eat"],3,"didn't のあとは動詞の原形です。"]],
practice:[
["mc","eat の過去形は？","ate","eated","eat","eaten","eat の過去形は ate です。"],
["mc","「どこに行きましたか？」=","Where did you go?","Where did you went?","Where you went?","Where were you go?","did のあとは動詞の原形です。"],
["mc","「本を1冊買いました」=","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","buy の過去形は bought、1冊なので冠詞 a です。"],
["mc","see の過去形は？","saw","seed","seen","sawed","see の過去形は saw です。"],
["mc","「行きませんでした」=","I didn't go.","I didn't went.","I wasn't go.","I not went.","didn't のあとは動詞の原形です。"],
["or","映画を見ました","I saw a movie","see movies","1本なので、冠詞 a と単数の movie です。see の過去形は saw です。"],
["or","私たちはピザを食べました","We ate pizza","eated","eat の過去形は ate です。"],
["or","友人たちに会いました","I met my friends","friend meet","複数人なので複数形 friends です。"],
["fi","I __ to Jeju last year.","去年、済州島に行きました","went","go|goed|gone","go の過去形は went です。"],
["fi","What did you __?","何を食べましたか？","eat","ate|eaten|eating","did のあとは動詞の原形です。"],
["fi","She __ a new phone.","彼女は新しいスマホを買いました","bought","buyed|buy|buys","buy の過去形は bought です。"],
["ty","釜山に行きました","I went to Busan","went · to · Busan","go","go の過去形は went です。"],
["ty","本を1冊買いました","I bought a book","bought · book — 冠詞 a","the","1冊なので冠詞 a をつけます。"],
["ty","友人たちに会いました","I met my friends|I saw my friends","met · my · friend — 複数","friend","複数人なので複数形 friends です。"]]},
{ id:"the", title:"the をもう一度：最初は a、次は the", blurb:"初めて話に出すときは a、お互いにわかるものになったら the。", deck:"道案内・交通", body:`
<p>冠詞は一度では身につきません。ここでは <b>the</b> を使うときと、<b>何もつけないとき</b>をもう一度練習します。日本語の「は」「が」とは関係がないので、助詞から冠詞を決めないようにしましょう。</p>
<h3>最初は a、二度目からは the</h3>
<p>聞き手が初めて聞くものなら a、さっき話したのでもうわかるものなら the です。日本語で「その」と言える場面だと考えるとわかりやすいでしょう。</p>
{{ex:I bought a shirt. The shirt is blue.|アイ ボータ シャート. ザ シャート イズ ブルー|シャツを1枚買いました。そのシャツは青です}}
<h3>状況から一つに決まれば the</h3>
<p>この部屋の窓、この近くの駅のように、どれのことか明らかなら最初から the です。</p>
{{ex:Can you open the window?|キャニュー オウプン ザ ウィンドウ?|窓を開けてもらえますか？}}{{ex:Where's the subway station?|ウェアズ ザ サブウェイ ステイション?|地下鉄の駅はどこですか？}}{{ex:The sun is hot today.|ザ サン イズ ハット トゥデイ|今日は日差しが強いです}}
<h3>冠詞をつけない決まった表現</h3>
<p>よく使う場所・交通手段・食事の表現は、まとめて覚えましょう。</p>
{{ex:I go to work by bus.|アイ ゴウ タ ワーク バイ バス|バスで通勤しています}}{{ex:I'm at home.|アイム アット ホウム|家にいます}}{{ex:I go to bed at eleven.|アイ ゴウ タ ベッド アット イレヴン|11時に寝ます}}
<div class="tip">迷ったら、聞き手が<b>どれのことか</b>わかるかどうかを考えましょう。わかるなら the、わからないなら a です。</div>`,
check:[["I have a cat. ___ cat is white. 空所に入るのは？",["A","An","The","（なし）"],2,"さっき話したその猫なので the です。"],["I go to ___ work by bus. 空所に入るのは？",["a","the","an","（なし）"],3,"go to work には冠詞をつけません。"],["この部屋の窓を開けてほしいとき、正しい言い方は？",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"お互いにわかっているその窓なので the です。"]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","さっき話したそのシャツなので the です。"],
["mc","「駅はどこですか？」=","Where's the station?","Where's a station?","Where's station?","Where the station?","この近くのその駅なので the です。"],
["mc","正しい文はどれ？","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","go to work、by bus には冠詞をつけません。"],
["mc","「日差しが強いです」=","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","一つしかないものには the をつけます。"],
["mc","「家にいます」=","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","at home には冠詞をつけません。"],
["or","窓を開けてもらえますか？","Can you open the window","a windows","お互いにわかっているその窓なので冠詞 the です。"],
["or","バスで通勤しています","I go to work by bus","the a","go to work、by bus には冠詞をつけません。"],
["or","その犬は大きいです","The dog is big","A dogs","もう話に出たその犬なので冠詞 the です。"],
["fi","I saw a movie. __ movie was great.","映画を見ました。その映画、すごくよかったです","The","A|An|Some","さっき話したその映画なので the です。"],
["fi","Where's __ bathroom?","トイレはどこですか？","the","a|an|some","この建物のそのトイレなので the です。"],
["fi","I have __ idea.","いい考えがあります","an","a|the|some","初めて出す一つのもので、母音の音で始まるので an です。"],
["ty","ドアを閉めてもらえますか？","Can you close the door|Could you close the door","can you · close · door — 冠詞 the","a","お互いにわかっているそのドアなので冠詞 the です。"],
["ty","駅はどこですか？","Where is the station|Where's the station","where · station — 冠詞 the","a","この近くのその駅なので冠詞 the です。"],
["ty","家にいます","I'm at home|I'm home","I'm · at · home — 冠詞なしで","the","home の前には冠詞をつけません。"]]},
{ id:"adjectives", title:"形容詞と比較：bigger, more expensive, the best", blurb:"形容詞は名詞の前に。比べるときは -er / more、いちばんは the -est / the most。", deck:"買い物・会計", body:`
<p>形容詞は名詞の<b>前</b>か、be動詞の<b>あと</b>に置きます。買い物で欠かせない比較の表現も一緒に覚えましょう。</p>
{{ex:a big bag|ア ビッグ バッグ|大きいかばん}}{{ex:This bag is big.|ズィス バッグ イズ ビッグ|このかばんは大きいです}}{{ex:It's too small.|イッツ トゥー スモール|小さすぎます}}
<h3>比較級：-er または more</h3>
<p>短い単語は <b>-er</b>、長い単語は前に <b>more</b> をつけます。「〜より」は <b>than</b> です。</p>
<div class="tbl"><table><tr><th>原級</th><th>比較級（もっと〜）</th><th>最上級（いちばん〜）</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|ズィス ワン イズ チーパー|こっちのほうが安いです}}{{ex:It's more expensive than that one.|イッツ モア イクスペンスィヴ ザン ザット ワン|あれより高いです}}{{ex:Do you have a bigger size?|ドゥ ユー ハヴァ ビガー サイズ?|もっと大きいサイズはありますか？}}
<h3>最上級には the</h3>
{{ex:This is the best restaurant here.|ズィス イズ ザ ベスト ゥレストゥラント ヒア|ここでいちばんいいレストランです}}{{ex:Which is the cheapest?|ウィッチ イズ ザ チーペスト?|どれがいちばん安いですか？}}
<div class="tip">よくある間違い：<b>more cheaper</b>、<b>more good</b> ✕ → <b>cheaper</b>、<b>better</b> ○。-er と more は一緒に使いません。</div>`,
check:[["big の比較級は？",["more big","biger","bigger","most big"],2,"短い単語は -er をつけます。big は最後の g を重ねます。"],["This is ___ expensive than that. 空所に入るのは？",["more","most","much","very"],0,"長い単語の比較級は more をつけます。"],["good の最上級は？",["the goodest","the most good","the better","the best"],3,"good – better – the best です。"]],
practice:[
["mc","cheap の比較級は？","cheaper","more cheap","cheapper","most cheap","短い単語は -er をつけます。"],
["mc","「こっちのほうが高いです」=","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","長い単語は more をつけます。"],
["mc","「もっと大きいサイズはありますか？」=","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","冠詞 + 形容詞 + 名詞の順です。"],
["mc","good の比較級は？","better","gooder","more good","best","good – better – best です。"],
["mc","「ここがいちばんいいレストランです」=","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","最上級の前には the をつけます。"],
["or","もっと大きいサイズはありますか？","Do you have a bigger size","the sizes","どれでもいいサイズを一つ探しているので冠詞 a です。"],
["or","これがいちばん安いです","This is the cheapest","a cheaper","最上級の前には冠詞 the をつけます。"],
["or","これはあれより安いです","This is cheaper than that","more","-er の形容詞に more はつけません。"],
["fi","It's __ small.","小さすぎます","too","much|more|most","「〜すぎる」は too です。"],
["fi","This is cheaper __ that one.","これはあれより安いです","than","then|that|more","「〜より」は than です。"],
["fi","It's the __ expensive one.","いちばん高いものです","most","more|much|very","長い単語の最上級は the most です。"],
["ty","もっと小さいサイズはありますか？","Do you have a smaller size","smaller · size — 冠詞 a","the","どれでもいいサイズを一つ探しているので冠詞 a です。"],
["ty","これがいちばんいいです","This is the best|This one is the best","the · best — 冠詞 the","a","最上級の前には冠詞 the をつけます。"],
["ty","こっちのほうが安いです","This is cheaper|This one is cheaper","cheap — 比較級","more","短い単語は -er をつけます。"]]},
{ id:"going-to", title:"予定を言う：be going to", blurb:"もう決めていることは be going to + 動詞の原形。", deck:"スモールトーク", body:`
<p>「〜するつもりです」「〜する予定です」のように、<b>前もって決めた予定</b>を言うときに使います。形は <b>be動詞 + going to + 動詞の原形</b>です。</p>
{{ex:I'm going to visit Osaka.|アイム ゴウイング タ ヴィズィット オウサーカ|大阪に行く予定です}}{{ex:She's going to buy a car.|シーズ ゴウイング タ バイ ア カー|彼女は車を買うつもりです}}{{ex:We're going to have dinner.|ウィア ゴウイング タ ハヴ ディナー|私たちはこれから夕食を食べます}}
<h3>否定文と疑問文</h3>
{{ex:I'm not going to go.|アイム ナット ゴウイング タ ゴウ|行くつもりはありません}}{{ex:Are you going to come?|アー ユー ゴウイング タ カム?|来る予定ですか？}}{{ex:What are you going to do this weekend?|ワラ ユー ゴウイング タ ドゥー ズィス ウィーケンド?|今週末は何をする予定ですか？}}
<h3>見てわかる予測にも</h3>
{{ex:It's going to rain.|イッツ ゴウイング タ ゥレイン|雨が降りそうです}}
<h3>一緒に使う時間の表現</h3>
<p>tomorrow（明日）、tonight（今夜）、this weekend（今週末）、next week（来週）は、ふつう文の最後に置きます。</p>
<div class="tip">話すときは going to が <b>gonna（ガナ）</b>のように聞こえます。また、be動詞を落とさないようにしましょう：<b>I going to go.</b> ✕ → <b>I'm going to go.</b> ○</div>`,
check:[["「明日、友達に会う予定です」を英語で言うと？",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be動詞 + going to + 動詞の原形です。"],["She ___ going to study. 空所に入るのは？",["am","are","is","be"],2,"she には is です。"],["「週末は何をする予定ですか？」を英語で言うと？",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"疑問詞 + be動詞 + 主語 + going to の順です。"]],
practice:[
["mc","「釜山に行く予定です」=","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be動詞 + going to + 動詞の原形です。"],
["mc","They ___ going to come.","are","is","am","be","they には are です。"],
["mc","「雨が降りそうです」=","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","going to のあとは動詞の原形です。"],
["mc","「行くつもりはありません」=","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","be動詞のあとに not を入れます。"],
["mc","「来る予定ですか？」=","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","be動詞を主語の前に出します。"],
["or","彼女は車を買うつもりです","She's going to buy a car","the cars","車1台なので、冠詞 a と単数の car です。"],
["or","友人たちに会う予定です","I'm going to meet my friends","friend","複数人なので複数形 friends です。"],
["or","私たちはこれから夕食を食べます","We're going to have dinner","a","食事の名前 dinner には冠詞をつけません。"],
["fi","I'm going __ study tonight.","今夜は勉強するつもりです","to","for|at|will","going to + 動詞の原形です。"],
["fi","__ you going to come?","来る予定ですか？","Are","Do|Is|Will","you には Are です。"],
["fi","It's going to __ tomorrow.","明日は雨が降りそうです","rain","rains|raining|rained","going to のあとは動詞の原形です。"],
["ty","映画を見るつもりです","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — 冠詞 a","the","どれか1本の映画なので冠詞 a です。"],
["ty","何をする予定ですか？","What are you going to do","what · going to · do","will","予定を聞くときは be going to を使います。"],
["ty","友人たちに会う予定です","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — 複数","friend","複数人なので複数形 friends です。"]]},
{ id:"joining", title:"文をつなぐ：and, but, or, so, because", blurb:"短い文二つを一つに。so と because は順番が逆です。", deck:"気持ち・リアクション", body:`
<p>短い文ばかりだと、話が途切れ途切れに聞こえてしまいます。この五つの単語で文をつなぐと、ぐっと自然になります。</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|アイ ライク カーフィー アン ティー|コーヒーも紅茶も好きです}}{{ex:I'm tired but happy.|アイム タイアード バット ハッピー|疲れているけど幸せです}}{{ex:Coffee or tea?|カーフィー オア ティー?|コーヒーにしますか、紅茶にしますか？}}
<h3>so：だから</h3>
<p><b>理由 + so + 結果</b>の順です。日本語の「〜ので、…」と同じ順番です。</p>
{{ex:I was tired, so I went home.|アイ ワズ タイアード, ソウ アイ ウェント ホウム|疲れていたので家に帰りました}}
<h3>because：なぜなら</h3>
<p><b>結果 + because + 理由</b>の順です。日本語と逆なので注意しましょう。</p>
{{ex:I went home because I was tired.|アイ ウェント ホウム ビコーズ アイ ワズ タイアード|疲れていたので家に帰りました}}{{ex:I stayed home because it was raining.|アイ ステイド ホウム ビコーズィット ワズ ゥレイニング|雨が降っていたので家にいました}}
<h3>Because … だけで終わらせない</h3>
<p>会話で「なぜ？」と聞かれたら、<b>Because I was tired.</b> だけで答えても大丈夫です。でも書くときは、because の部分だけでは文として不完全です。日本語の「〜だから。」の感覚で because の文だけを書かず、結果の文とつなげましょう。</p>
{{ex:Why did you go home? Because I was tired.|ワイ ディジュー ゴウ ホウム? ビコーズ アイ ワズ タイアード|どうして帰ったの？ ― 疲れていたから}}
<h3>too：〜も</h3>
{{ex:I like it too.|アイ ライキット トゥー|私も好きです}}
<div class="tip">so と because を一つの文で一緒に使いません：<b>Because I was tired, so I went home.</b> ✕。どちらか一つを選びましょう。</div>`,
check:[["I was sick, ___ I stayed home. 空所に入るのは？",["because","but","so","or"],2,"理由のあとに結果が来るときは so です。"],["I stayed home ___ I was sick. 空所に入るのは？",["because","so","but","and"],0,"結果のあとに理由が来るときは because です。"],["「コーヒーにしますか、紅茶にしますか？」に合う言い方は？",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"二つから一つを選ぶときは or です。"]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","反対の内容は but でつなぎます。"],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","理由のあとに結果が来るときは so です。"],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","結果のあとに理由が来るときは because です。"],
["mc","「コーヒーか紅茶か？」=","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","二つから一つなら or です。"],
["mc","「疲れているけど幸せです」=","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","「〜けど」は but です。"],
["or","猫も犬も好きです","I like cats and dogs","cat dog","動物全般は複数形 cats、dogs で言います。"],
["or","コーヒーを一つとサンドイッチを一つください","A coffee and a sandwich please","the or","一つずつ注文するので、それぞれに冠詞 a をつけます。"],
["or","おなかがすいたので食べました","I was hungry so I ate","because","理由のあとに結果が来るときは so です。"],
["fi","I'm tired __ happy.","疲れているけど幸せです","but","so|because|or","「〜けど」は but です。"],
["fi","I stayed home __ it was raining.","雨が降っていたので家にいました","because","so|but|or","結果のあとに理由が来るときは because です。"],
["fi","Coffee __ tea?","コーヒーにしますか、紅茶にしますか？","or","so|but|because","二つから一つなら or です。"],
["ty","コーヒーも紅茶も好きです","I like coffee and tea","like · coffee · and · tea — 冠詞なしで","a","一般的な coffee、tea には冠詞をつけません。"],
["ty","疲れているけど幸せです","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","「〜けど」は but です。"],
["ty","犬も猫も好きです","I like dogs and cats|I like cats and dogs","dog · and · cat — 複数","dog","動物全般は複数形 dogs、cats で言います。"]]},
{ id:"katakana-english", title:"カタカナ英語の落とし穴：和製英語と意味のずれ", blurb:"マンションは mansion ではありません。カタカナ語は、英語でも同じ意味か確かめてから使いましょう。", deck:"カタカナ英語の落とし穴", body:`
<p>日本語には英語から来たカタカナ語がたくさんあります。便利な反面、日本で作られた言葉（和製英語）や、英語とは意味がずれた言葉も多く、そのまま使うと通じなかったり、誤解されたりします。</p>
<h3>和製英語：英語にない言葉</h3>
<div class="tbl"><table><tr><th>カタカナ語</th><th>英語</th></tr><tr><td>サラリーマン</td><td class="k">office worker</td></tr><tr><td>ノートパソコン</td><td class="k">laptop</td></tr><tr><td>コンセント</td><td class="k">outlet</td></tr><tr><td>バイキング（食べ放題）</td><td class="k">buffet</td></tr><tr><td>シャープペンシル</td><td class="k">mechanical pencil</td></tr></table></div>
{{ex:He's an office worker.|ヒーザン アーフィス ワーカー|彼は会社員です}}{{ex:I use a laptop.|アイ ユーザ ラップタップ|ノートパソコンを使っています}}{{ex:Where's the outlet?|ウェアズ ズィ アウトレット?|コンセントはどこですか？}}{{ex:The hotel has a breakfast buffet.|ザ ホウテル ハザ ブレックファスト バフェイ|ホテルの朝食はバイキングです}}
<p>consent は「同意」、Viking は「北欧の海賊」です。Where's the consent? と聞いても、コンセントの場所は教えてもらえません。</p>
<h3>意味のずれ：英語にあるけれど意味が違う言葉</h3>
<div class="tbl"><table><tr><th>カタカナ語</th><th>英語での意味</th><th>言いたいことは</th></tr><tr><td>マンション</td><td>mansion ＝ 大豪邸</td><td class="k">apartment</td></tr><tr><td>クレーム</td><td>claim ＝ 主張する、請求する</td><td class="k">complaint</td></tr><tr><td>テンションが高い</td><td>tension ＝ 緊張、張りつめた空気</td><td class="k">excited</td></tr><tr><td>ナイーブ</td><td>naive ＝ 世間知らず</td><td class="k">sensitive</td></tr><tr><td>スマート（細身）</td><td>smart ＝ 頭がいい</td><td class="k">slim</td></tr></table></div>
{{ex:I live in an apartment.|アイ リヴ イナン アパートメント|マンションに住んでいます}}{{ex:I'd like to make a complaint.|アイド ライク タ メイカ カンプレイント|クレームを言いたいのですが}}{{ex:I'm so excited!|アイム ソウ イクサイリッド!|テンション上がる！}}{{ex:She's very sensitive.|シーズ ヴェリー センスィリヴ|彼女はとても繊細です}}{{ex:He's slim.|ヒーズ スリム|彼はスマートです（細身）}}
<p>I live in a mansion. と言うと、大金持ちだと思われてしまいます。apartment は母音で始まるので、冠詞は an です。</p>
<h3>カタカナ読みが本当の音を隠す言葉</h3>
<p>意味は同じでも、カタカナのまま発音すると通じにくい言葉もあります。アクセント（強く読む位置）と母音に注意して、音声をまねしましょう。</p>
{{ex:coffee|カーフィー|コーヒー（CO-ffee：前を強く）}}{{ex:hotel|ホウテル|ホテル（ho-TEL：後ろを強く）}}{{ex:water|ワーラー|水（ウォーターではなくワーラーに近い音）}}
<div class="tip">カタカナ語を英語で使う前に、英語でも同じ意味かどうか確かめましょう：<b>I live in a mansion.</b> ✕ → <b>I live in an apartment.</b> ○ / <b>my note PC</b> ✕ → <b>my laptop</b> ○</div>`,
check:[["「マンションに住んでいます」を英語で言うと？",["I live in a mansion.","I live in an apartment.","I live in apartment.","I live in a apartment."],1,"mansion は「大豪邸」です。ふつうの集合住宅は apartment で、母音で始まるので冠詞 an をつけます。"],["スマホを充電したいとき、「コンセントはどこですか？」は？",["Where's the consent?","Where's the concent?","Where's the plug in?","Where's the outlet?"],3,"コンセントは和製英語で、英語では outlet と言います。consent は「同意」の意味です。"],["ホテルの朝食がバイキング形式だと伝えるとき、正しい言い方は？",["It's a buffet.","It's a Viking.","It's a Viking style.","It's a self."],0,"バイキングは和製英語で、英語の Viking は「北欧の海賊」です。食べ放題の形式は buffet と言います。"]],
practice:[
["mc","「彼はサラリーマンです」=","He's an office worker.","He's a salaryman.","He's an salaryman.","He's office worker.","サラリーマンは和製英語です。英語では office worker と言い、母音で始まるので冠詞 an をつけます。"],
["mc","「ノートパソコンを買いました」=","I bought a laptop.","I bought a note PC.","I bought a note computer.","I bought laptop.","ノートパソコンは和製英語です。英語では laptop と言い、1台なので冠詞 a をつけます。"],
["mc","お店で「クレームを言いたいのですが」=","I'd like to make a complaint.","I'd like to make a claim.","I'd like to claim.","I'd like to make a complain.","苦情は complaint です。claim は「主張する、（保険などを）請求する」の意味になります。"],
["mc","「今日はテンション高いね！」=","You're so excited today!","Your tension is high today!","You're so tension today!","You have high tension today!","英語の tension は「緊張」です。気分が上がっているときは excited を使います。"],
["mc","「彼女はスマートです（細身）」=","She's slim.","She's smart.","She's a smart.","She's slims.","英語の smart は「頭がいい」の意味です。体型のことは slim と言います。"],
["or","マンションに住んでいます","I live in an apartment","a apartments","mansion は「大豪邸」です。apartment は母音で始まるので冠詞 an、一部屋なので単数です。"],
["or","コンセントはどこですか？","Where's the outlet","consent a","コンセントは英語で outlet です。この部屋のそのコンセントなので冠詞 the を使います。"],
["or","ホテルの朝食はバイキングです","The hotel has a breakfast buffet","Viking","バイキングは和製英語です。食べ放題の形式は buffet と言います。"],
["fi","My dad is an office __.","父は会社員です","worker","salaryman|man|work","サラリーマンは和製英語です。会社員は office worker と言います。"],
["fi","Where can I charge my phone? Is there an __ here?","スマホはどこで充電できますか？ ここにコンセントはありますか？","outlet","consent|concent|cord","コンセントは英語で outlet です。consent は「同意」の意味です。"],
["fi","I'm so __ about the trip!","旅行、テンション上がる！","excited","tension|tensioned|high","「テンションが上がる」は excited で表します。tension は「緊張」です。"],
["ty","ノートパソコンを持っていますか？","Do you have a laptop","have · laptop — 冠詞 a","the","ノートパソコンは英語で laptop です。どれでもいい1台なので冠詞 a をつけます。"],
["ty","東京のマンションに住んでいます","I live in an apartment in Tokyo","live · apartment — 冠詞 an","a","mansion は「大豪邸」です。apartment は母音で始まるので冠詞 an をつけます。"],
["ty","クレームを言いたいのですが","I'd like to make a complaint|I want to make a complaint|I'd like to complain","I'd like · complaint","claim","苦情は complaint です。claim は「主張する」の意味になります。"]]},
];
