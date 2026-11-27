/* nan-en course metadata in the learner's language (written Taigi, MOE recommended Han characters). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (FINAL names: DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["起步", ["相借問", "自我介紹", "求生英語 1", "求生英語 2", "英文字母"]],
  ["旅行佮日常", ["問路佮交通", "餐廳點菜", "咖啡店佮便利商店", "買物件佮付錢", "數字、時間佮日期", "旅行（機場佮飯店）", "病院佮緊急狀況"]],
  ["交陪佮人際", ["開講", "心情佮反應", "呵咾佮好感", "電話佮簡訊縮寫"]],
  ["職場", ["工作佮電子批"]],
  ["講甲較道地", ["發音陷阱", "字尾發音", "台式英語陷阱", "片語動詞", "英語慣用語", "影劇佮俚語"]]
];

exports.TAGS = {
  basics: ["相借問", "自我介紹", "求生英語 1", "求生英語 2", "數字、時間佮日期", "英文字母"],
  travel: ["求生英語 1", "求生英語 2", "問路佮交通", "餐廳點菜", "咖啡店佮便利商店", "買物件佮付錢", "數字、時間佮日期", "旅行（機場佮飯店）", "病院佮緊急狀況"],
  social: ["相借問", "自我介紹", "開講", "心情佮反應", "呵咾佮好感", "電話佮簡訊縮寫", "台式英語陷阱"],
  work: ["工作佮電子批", "電話佮簡訊縮寫", "數字、時間佮日期", "開講"],
  media: ["影劇佮俚語", "英語慣用語", "心情佮反應"],
  skills: ["發音陷阱", "字尾發音", "台式英語陷阱", "片語動詞", "英語慣用語"]
};

exports.DESC = {
  "相借問": "見面、相辭的基本相借問，佮自然的回應",
  "自我介紹": "介紹名、對佗位來、頭路佮興趣，嘛學會曉倒問對方",
  "求生英語 1": "多謝、會失禮、聽無的時欲按怎講，去外國頭一工就用會著",
  "求生英語 2": "便所、價數、Wi-Fi、請人翕相，佇當地隨用會著的句",
  "問路佮交通": "問路、聽有方向，坐地鐵、公車佮計程車",
  "餐廳點菜": "對安排座位、點菜、講食物過敏，到結帳佮予小費",
  "咖啡店佮便利商店": "點飲料、揀大細杯佮特別的要求，提收據佮袋仔",
  "買物件佮付錢": "四界看、試穿、問尺寸、付錢、退錢佮換貨",
  "數字、時間佮日期": "用英語講佮聽時間、日期、價數佮大數字（英語無「萬」）",
  "開講": "對天氣、週末、興趣輕鬆開話題，閣講落去，閃避無適合的話題",
  "心情佮反應": "恭喜、驚訝、安慰、忝這款心情佮反應的講法",
  "呵咾佮好感": "呵咾人、表達感謝、想欲佮人較親的時講的話",
  "工作佮電子批": "工作電子批捷用的句，佮開會、約時間的講法",
  "電話佮簡訊縮寫": "敲電話的英語，佮 LOL、BRB、TBH 這款訊息縮寫",
  "旅行（機場佮飯店）": "入境檢查、辦登機、揀位、行李佮飯店內底的各種要求",
  "病院佮緊急狀況": "破病、受傷、物件拍無去、予人偷提這款緊急狀況的講法",
  "片語動詞": "pick up、figure out 這款講英語的人逐工攏咧用的片語動詞",
  "發音陷阱": "f / h、v / b、th、r / l、n / l、she / see、長短母音佮重音：講台語的人上捷混的發音",
  "英語慣用語": "逐字翻講袂通，毋過講英語的人定定用的慣用語",
  "影劇佮俚語": "美劇、音樂佮社群媒體頂定定聽著的流行講法",
  "英文字母": "26 个字母的英語名稱，佮按怎一字一字拼名佮電子批地址",
  "台式英語陷阱": "開電火、食藥仔、借、提、I very like……逐字翻會出錯的講法，閣有外國人聽無的台灣用字佮外來語",
  "字尾發音": "bag / back、cold / code、cats、asked：共尾仔的子音佮複數、過去式的尾音讀清楚"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "旅行", decks: ["求生英語 1", "求生英語 2", "問路佮交通", "餐廳點菜", "咖啡店佮便利商店", "買物件佮付錢", "旅行（機場佮飯店）", "病院佮緊急狀況"] },
  work: { label: "職場佮工作", decks: ["自我介紹", "工作佮電子批", "電話佮簡訊縮寫", "數字、時間佮日期", "開講"] },
  social: { label: "交朋友佮約會", decks: ["相借問", "自我介紹", "開講", "心情佮反應", "呵咾佮好感", "電話佮簡訊縮寫"] },
  media: { label: "影劇佮音樂", decks: ["影劇佮俚語", "英語慣用語", "心情佮反應", "片語動詞", "發音陷阱"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "出國旅行進前的準備", weeks: 3, decks: ["相借問", "求生英語 1", "求生英語 2", "問路佮交通", "餐廳點菜", "咖啡店佮便利商店", "買物件佮付錢", "數字、時間佮日期", "旅行（機場佮飯店）", "病院佮緊急狀況"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "交外國朋友", weeks: 6, decks: ["相借問", "自我介紹", "求生英語 1", "開講", "心情佮反應", "呵咾佮好感", "電話佮簡訊縮寫", "台式英語陷阱", "片語動詞", "影劇佮俚語", "英語慣用語"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "tw-english", "phrasal", "idioms"] },
  conv: { label: "90 工會話計畫", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
exports.TITLES = ["新手", "學生", "會開講", "旅行者", "在地通", "高手", "大師"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "呵咾", expression: "日常講法", polite: "禮貌話", saying: "名言俗語" };
