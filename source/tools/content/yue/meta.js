/* yue-en course metadata in the learner's language (written Cantonese, Hong Kong, Traditional characters). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (FINAL names: DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["起步", ["打招呼", "自我介紹", "求生英文 1", "求生英文 2", "英文字母"]],
  ["旅行同日常", ["問路同交通", "餐廳點餐", "咖啡店同便利店", "購物同付款", "數字、時間同日期", "旅行（機場同酒店）", "醫院同緊急情況"]],
  ["交流同人際", ["閒談", "情緒同反應", "讚美同好感", "電話同短訊縮寫"]],
  ["職場", ["工作同電郵"]],
  ["講得更地道", ["發音易錯", "字尾發音", "港式英文陷阱", "片語動詞", "英文習語", "影視同俚語"]]
];

exports.TAGS = {
  basics: ["打招呼", "自我介紹", "求生英文 1", "求生英文 2", "數字、時間同日期", "英文字母"],
  travel: ["求生英文 1", "求生英文 2", "問路同交通", "餐廳點餐", "咖啡店同便利店", "購物同付款", "數字、時間同日期", "旅行（機場同酒店）", "醫院同緊急情況"],
  social: ["打招呼", "自我介紹", "閒談", "情緒同反應", "讚美同好感", "電話同短訊縮寫", "港式英文陷阱"],
  work: ["工作同電郵", "電話同短訊縮寫", "數字、時間同日期", "閒談"],
  media: ["影視同俚語", "英文習語", "情緒同反應"],
  skills: ["發音易錯", "字尾發音", "港式英文陷阱", "片語動詞", "英文習語"]
};

exports.DESC = {
  "打招呼": "見面、道別嘅基本問候同自然嘅回應",
  "自我介紹": "介紹名、喺邊度嚟、工作同興趣，亦學識問返對方",
  "求生英文 1": "道謝、道歉、聽唔明嗰陣點講，去到外國第一日就用得着",
  "求生英文 2": "洗手間、價錢、Wi-Fi、請人影相等喺當地即刻用得着嘅句子",
  "問路同交通": "問路、聽明方向，搭地鐵、巴士同的士",
  "餐廳點餐": "由帶位、落單、講明食物敏感到埋單同畀小費",
  "咖啡店同便利店": "叫飲品、揀大細同特別要求，攞收據同袋",
  "購物同付款": "隨便睇睇、試身、問尺碼、付款、退款同換貨",
  "數字、時間同日期": "用英文講同聽時間、日期、價錢同大數目（英文冇「萬」）",
  "閒談": "由天氣、週末、興趣輕鬆打開話題再傾落去，避開唔適合嘅話題",
  "情緒同反應": "恭喜、驚訝、安慰、攰等情緒同反應嘅講法",
  "讚美同好感": "讚人、表達謝意、想拉近關係嗰陣講嘅說話",
  "工作同電郵": "工作電郵常用句，同埋開會、約時間嘅講法",
  "電話同短訊縮寫": "講電話嘅英文，同埋 LOL、BRB、TBH 等訊息縮寫",
  "旅行（機場同酒店）": "入境檢查、辦登機手續、揀位、行李同酒店入面嘅各種要求",
  "醫院同緊急情況": "生病、受傷、唔見咗嘢、畀人偷嘢等緊急情況嘅講法",
  "片語動詞": "pick up、figure out 等母語人士日日都用嘅片語動詞",
  "發音易錯": "n / l、r / l、th、v / w、z / s、長短元音同重音：講廣東話嘅人最容易搞亂嘅發音",
  "英文習語": "直譯講唔通、但母語人士成日用嘅習語",
  "影視同俚語": "美劇、音樂同社交媒體上面成日聽到嘅流行講法",
  "英文字母": "26 個字母嘅英文名稱，同埋點樣逐個字母串出名同電郵地址",
  "港式英文陷阱": "開燈、食藥、借、帶、I very like……直譯出錯嘅講法，仲有淨係香港人先明嘅用字同英式 / 美式嘅分別",
  "字尾發音": "bag / back、cold / code、cats、asked：將字尾輔音同眾數、過去式嘅字尾清楚讀出嚟"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "旅行", decks: ["求生英文 1", "求生英文 2", "問路同交通", "餐廳點餐", "咖啡店同便利店", "購物同付款", "旅行（機場同酒店）", "醫院同緊急情況"] },
  work: { label: "職場同工作", decks: ["自我介紹", "工作同電郵", "電話同短訊縮寫", "數字、時間同日期", "閒談"] },
  social: { label: "交朋友同拍拖", decks: ["打招呼", "自我介紹", "閒談", "情緒同反應", "讚美同好感", "電話同短訊縮寫"] },
  media: { label: "影視同音樂", decks: ["影視同俚語", "英文習語", "情緒同反應", "片語動詞", "發音易錯"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "去外國旅行前準備", weeks: 3, decks: ["打招呼", "求生英文 1", "求生英文 2", "問路同交通", "餐廳點餐", "咖啡店同便利店", "購物同付款", "數字、時間同日期", "旅行（機場同酒店）", "醫院同緊急情況"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "識外國朋友", weeks: 6, decks: ["打招呼", "自我介紹", "求生英文 1", "閒談", "情緒同反應", "讚美同好感", "電話同短訊縮寫", "港式英文陷阱", "片語動詞", "影視同俚語", "英文習語"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "hk-english", "phrasal", "idioms"] },
  conv: { label: "90 日會話計劃", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
exports.TITLES = ["新手", "學員", "健談", "旅行者", "本地通", "高手", "大師"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "讚美", expression: "日常用語", polite: "禮貌用語", saying: "名言諺語" };
