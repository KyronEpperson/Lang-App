/* zh-en course metadata in the learner's language (Simplified Chinese). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (FINAL names: DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["起步", ["问候", "自我介绍", "生存英语1", "生存英语2"]],
  ["旅行与日常", ["问路与交通", "餐厅点餐", "咖啡店与便利店", "购物与结账", "数字、时间与日期", "数量表达", "旅行（机场与酒店）", "医院与紧急情况"]],
  ["交流与人际", ["闲聊", "情绪与反应", "赞美与好感", "电话与短信缩写"]],
  ["职场", ["工作与邮件"]],
  ["说得更地道", ["发音易错", "中式英语陷阱", "短语动词", "英语习语", "影视与俚语"]]
];

exports.TAGS = {
  basics: ["问候", "自我介绍", "生存英语1", "生存英语2", "数字、时间与日期", "数量表达"],
  travel: ["生存英语1", "生存英语2", "问路与交通", "餐厅点餐", "咖啡店与便利店", "购物与结账", "数字、时间与日期", "旅行（机场与酒店）", "医院与紧急情况"],
  social: ["问候", "自我介绍", "闲聊", "情绪与反应", "赞美与好感", "电话与短信缩写", "中式英语陷阱"],
  work: ["工作与邮件", "电话与短信缩写", "数字、时间与日期", "闲聊"],
  media: ["影视与俚语", "英语习语", "情绪与反应"],
  skills: ["发音易错", "中式英语陷阱", "数量表达", "短语动词", "英语习语"]
};

exports.DESC = {
  "问候": "见面、道别时的基本问候和自然的回应",
  "自我介绍": "介绍名字、来自哪里、工作和爱好，也学会问对方",
  "生存英语1": "道谢、道歉、没听懂时怎么说——出国第一天就用得上",
  "生存英语2": "洗手间、价格、Wi-Fi、请人拍照等当地马上能用的句子",
  "问路与交通": "问路、听懂方向，坐地铁、公交和出租车",
  "餐厅点餐": "从带位、点菜、过敏说明到结账和小费",
  "咖啡店与便利店": "点饮料、选杯型和定制，要小票和袋子",
  "购物与结账": "随便看看、试穿、问尺码、付款、退换货",
  "数字、时间与日期": "用英语的方式说和听时间、日期、价格和大数字（没有“万”）",
  "闲聊": "从天气、周末、爱好轻松开启并延续对话，避开不合适的话题",
  "情绪与反应": "祝贺、惊讶、安慰、疲惫等情绪和反应的表达",
  "赞美与好感": "夸奖别人、表达感谢、想拉近关系时说的话",
  "工作与邮件": "工作邮件常用句和开会、约时间的表达（不用“您好”“辛苦了”式客套）",
  "电话与短信缩写": "打电话的英语和 LOL、BRB、TBH 等消息缩写",
  "旅行（机场与酒店）": "入境检查、值机、选座、行李和酒店里的各种请求",
  "医院与紧急情况": "生病、受伤、丢东西、被偷等紧急情况的表达",
  "短语动词": "pick up、figure out 等母语者天天用的短语动词",
  "发音易错": "r / l、th、v / w、n / l、词尾辅音 (bed / bet)、长短元音、辅音连缀和重音——中国学习者容易混的发音",
  "英语习语": "直译讲不通、母语者却常用的习语",
  "影视与俚语": "美剧、音乐和社交媒体上常听到的流行说法",
  "中式英语陷阱": "开灯、看书、借、带、玩手机……一个中文动词对应几个英语动词，以及直译出错的说法",
  "数量表达": "三本书 = three books：英语数名词不用量词，不可数名词才用 a piece of、a cup of 等"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "旅行", decks: ["生存英语1", "生存英语2", "问路与交通", "餐厅点餐", "咖啡店与便利店", "购物与结账", "旅行（机场与酒店）", "医院与紧急情况"] },
  work: { label: "职场与工作", decks: ["自我介绍", "工作与邮件", "电话与短信缩写", "数字、时间与日期", "闲聊"] },
  social: { label: "交友与约会", decks: ["问候", "自我介绍", "闲聊", "情绪与反应", "赞美与好感", "电话与短信缩写"] },
  media: { label: "影视与音乐", decks: ["影视与俚语", "英语习语", "情绪与反应", "短语动词", "发音易错"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "出国旅行准备", weeks: 3, decks: ["问候", "生存英语1", "生存英语2", "问路与交通", "餐厅点餐", "咖啡店与便利店", "购物与结账", "数字、时间与日期", "旅行（机场与酒店）", "医院与紧急情况"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "结交外国朋友", weeks: 6, decks: ["问候", "自我介绍", "生存英语1", "闲聊", "情绪与反应", "赞美与好感", "电话与短信缩写", "中式英语陷阱", "短语动词", "影视与俚语", "英语习语"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "chinglish", "phrasal", "idioms"] },
  conv: { label: "90 天口语计划", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
exports.TITLES = ["入门", "学员", "话匣子", "旅行者", "本地通", "高手", "大师"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "赞美", expression: "日常表达", polite: "礼貌用语", saying: "名言谚语" };
