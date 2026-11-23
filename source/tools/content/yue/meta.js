/* yue-en course metadata in the learner's language (Hong Kong written Chinese, Traditional characters). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (FINAL names: DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["起步", ["打招呼", "自我介紹", "求生英文 1", "求生英文 2", "英文字母"]],
  ["旅行與日常", ["問路與交通", "餐廳點餐", "咖啡店與便利店", "購物與付款", "數字、時間與日期", "旅行（機場與酒店）", "醫院與緊急情況"]],
  ["交流與人際", ["閒談", "情緒與反應", "讚美與好感", "電話與短訊縮寫"]],
  ["職場", ["工作與電郵"]],
  ["說得更地道", ["發音易錯", "字尾發音", "港式英文陷阱", "片語動詞", "英文習語", "影視與俚語"]]
];

exports.TAGS = {
  basics: ["打招呼", "自我介紹", "求生英文 1", "求生英文 2", "數字、時間與日期", "英文字母"],
  travel: ["求生英文 1", "求生英文 2", "問路與交通", "餐廳點餐", "咖啡店與便利店", "購物與付款", "數字、時間與日期", "旅行（機場與酒店）", "醫院與緊急情況"],
  social: ["打招呼", "自我介紹", "閒談", "情緒與反應", "讚美與好感", "電話與短訊縮寫", "港式英文陷阱"],
  work: ["工作與電郵", "電話與短訊縮寫", "數字、時間與日期", "閒談"],
  media: ["影視與俚語", "英文習語", "情緒與反應"],
  skills: ["發音易錯", "字尾發音", "港式英文陷阱", "片語動詞", "英文習語"]
};

exports.DESC = {
  "打招呼": "見面、道別時的基本問候和自然的回應",
  "自我介紹": "介紹名字、來自哪裏、工作和興趣，也學會問對方",
  "求生英文 1": "道謝、道歉、聽不明白時怎樣說，到外國第一天就用得着",
  "求生英文 2": "洗手間、價錢、Wi-Fi、請人拍照等在當地馬上用得着的句子",
  "問路與交通": "問路、聽懂方向，搭地鐵、巴士和的士",
  "餐廳點餐": "由帶位、點菜、說明食物敏感到埋單和小費",
  "咖啡店與便利店": "點飲品、選大小和特別要求，要收據和袋",
  "購物與付款": "隨便看看、試穿、問尺碼、付款、退款和換貨",
  "數字、時間與日期": "用英文說和聽時間、日期、價錢和大數字（英文沒有「萬」）",
  "閒談": "由天氣、週末、興趣輕鬆打開話題並延續對話，避開不合適的話題",
  "情緒與反應": "祝賀、驚訝、安慰、疲倦等情緒和反應的說法",
  "讚美與好感": "稱讚別人、表達謝意、想拉近關係時說的話",
  "工作與電郵": "工作電郵常用句，以及開會、約時間的說法",
  "電話與短訊縮寫": "講電話的英文，以及 LOL、BRB、TBH 等訊息縮寫",
  "旅行（機場與酒店）": "入境檢查、辦理登機手續、選座位、行李和酒店裏的各種要求",
  "醫院與緊急情況": "生病、受傷、遺失物品、被偷等緊急情況的說法",
  "片語動詞": "pick up、figure out 等母語者天天用的片語動詞",
  "發音易錯": "n / l、r / l、th、v / w、z / s、長短元音和重音：說廣東話的人最容易混淆的發音",
  "英文習語": "直譯說不通、母語者卻常用的習語",
  "影視與俚語": "美劇、音樂和社交媒體上常聽到的流行說法",
  "英文字母": "26 個字母的英文名稱，以及怎樣逐個字母串出名字和電郵地址",
  "港式英文陷阱": "開燈、食藥、借、帶、I very like……直譯出錯的說法，以及只有香港人明白的用字和英式 / 美式的分別",
  "字尾發音": "bag / back、cold / code、cats、asked：把字尾輔音和眾數、過去式的字尾清楚讀出來"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "旅行", decks: ["求生英文 1", "求生英文 2", "問路與交通", "餐廳點餐", "咖啡店與便利店", "購物與付款", "旅行（機場與酒店）", "醫院與緊急情況"] },
  work: { label: "職場與工作", decks: ["自我介紹", "工作與電郵", "電話與短訊縮寫", "數字、時間與日期", "閒談"] },
  social: { label: "交友與約會", decks: ["打招呼", "自我介紹", "閒談", "情緒與反應", "讚美與好感", "電話與短訊縮寫"] },
  media: { label: "影視與音樂", decks: ["影視與俚語", "英文習語", "情緒與反應", "片語動詞", "發音易錯"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "出國旅行準備", weeks: 3, decks: ["打招呼", "求生英文 1", "求生英文 2", "問路與交通", "餐廳點餐", "咖啡店與便利店", "購物與付款", "數字、時間與日期", "旅行（機場與酒店）", "醫院與緊急情況"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "結識外國朋友", weeks: 6, decks: ["打招呼", "自我介紹", "求生英文 1", "閒談", "情緒與反應", "讚美與好感", "電話與短訊縮寫", "港式英文陷阱", "片語動詞", "影視與俚語", "英文習語"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "hk-english", "phrasal", "idioms"] },
  conv: { label: "90 日會話計劃", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
exports.TITLES = ["新手", "學員", "健談", "旅行者", "本地通", "高手", "大師"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "讚美", expression: "日常用語", polite: "禮貌用語", saying: "名言諺語" };
