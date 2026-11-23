/* TRANSLATE/ADAPT (hmn): scaffolded from tools/content/ko/meta.js by new_lang.js.
   Translate/adapt everything that is not English (the ko text) for hmn speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,
   explanations written from the hmn point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position
   identical to ko-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */
/* ko-en course metadata in the learner's language (Korean). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js. Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["첫걸음", ["인사", "자기소개", "생존 영어 1", "생존 영어 2", "알파벳"]],
  ["여행·일상", ["길 묻기·교통", "식당 주문", "카페·편의점", "쇼핑·계산", "숫자·시간·날짜", "여행(공항·호텔)", "병원·긴급"]],
  ["대화·관계", ["스몰토크", "감정·반응", "칭찬·호감 표현", "전화·문자 줄임말"]],
  ["직장", ["직장·이메일"]],
  ["원어민처럼", ["발음 주의", "구동사", "영어 관용구", "영화·드라마·슬랭"]]
];

exports.TAGS = {
  basics: ["인사", "자기소개", "생존 영어 1", "생존 영어 2", "숫자·시간·날짜", "알파벳"],
  travel: ["생존 영어 1", "생존 영어 2", "길 묻기·교통", "식당 주문", "카페·편의점", "쇼핑·계산", "숫자·시간·날짜", "여행(공항·호텔)", "병원·긴급"],
  social: ["인사", "자기소개", "스몰토크", "감정·반응", "칭찬·호감 표현", "전화·문자 줄임말"],
  work: ["직장·이메일", "전화·문자 줄임말", "숫자·시간·날짜", "스몰토크"],
  media: ["영화·드라마·슬랭", "영어 관용구", "감정·반응"],
  skills: ["발음 주의", "구동사", "영어 관용구"]
};

exports.DESC = {
  "인사": "만날 때·헤어질 때 하는 기본 인사와 자연스러운 대답",
  "자기소개": "이름·출신·직업·취미를 말하고 상대에게 묻는 표현",
  "생존 영어 1": "감사·사과·못 알아들었을 때 — 여행 첫날 꼭 필요한 말",
  "생존 영어 2": "화장실·가격·와이파이·사진 부탁 등 현지에서 바로 쓰는 문장",
  "길 묻기·교통": "길 묻기, 방향 듣기, 지하철·버스·택시 이용하기",
  "식당 주문": "자리 안내부터 주문, 알레르기, 계산, 팁까지",
  "카페·편의점": "음료 주문, 사이즈·옵션 변경, 영수증과 봉투",
  "쇼핑·계산": "구경·입어 보기·사이즈 묻기·결제·환불과 교환",
  "숫자·시간·날짜": "시각·날짜·가격·큰 숫자를 영어식으로 말하고 알아듣기",
  "스몰토크": "날씨·주말·취미로 가볍게 대화를 시작하고 이어 가기",
  "감정·반응": "축하·놀람·위로·피곤함 등 감정과 리액션 표현",
  "칭찬·호감 표현": "칭찬하기, 고마움 전하기, 친해지고 싶을 때 쓰는 말",
  "직장·이메일": "업무 이메일 문장과 회의·일정 조율 표현",
  "전화·문자 줄임말": "전화 영어와 LOL·BRB·TBH 같은 문자 줄임말",
  "여행(공항·호텔)": "입국 심사, 체크인, 좌석, 짐, 호텔 요청 사항",
  "병원·긴급": "아플 때, 다쳤을 때, 분실·도난 등 위급 상황 표현",
  "구동사": "pick up, figure out 같은 원어민 필수 구동사",
  "발음 주의": "R/L·F/P·TH·V/B·장단음·강세 — 한국인이 헷갈리는 발음 짝",
  "영어 관용구": "직역하면 이상한, 원어민이 자주 쓰는 관용구",
  "영화·드라마·슬랭": "드라마·K-pop 팬덤·SNS에서 듣는 요즘 표현",
  "알파벳": "글자 26개의 영어 이름과 이름·이메일 철자를 소리 내어 불러 주는 법"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "여행", decks: ["생존 영어 1", "생존 영어 2", "길 묻기·교통", "식당 주문", "카페·편의점", "쇼핑·계산", "여행(공항·호텔)", "병원·긴급"] },
  work: { label: "직장·업무", decks: ["자기소개", "직장·이메일", "전화·문자 줄임말", "숫자·시간·날짜", "스몰토크"] },
  social: { label: "친구·데이트", decks: ["인사", "자기소개", "스몰토크", "감정·반응", "칭찬·호감 표현", "전화·문자 줄임말"] },
  media: { label: "영화·드라마·음악", decks: ["영화·드라마·슬랭", "영어 관용구", "감정·반응", "구동사", "발음 주의"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "해외여행 준비", weeks: 3, decks: ["인사", "생존 영어 1", "생존 영어 2", "길 묻기·교통", "식당 주문", "카페·편의점", "쇼핑·계산", "숫자·시간·날짜", "여행(공항·호텔)", "병원·긴급"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "외국인 친구 사귀기", weeks: 6, decks: ["인사", "자기소개", "생존 영어 1", "스몰토크", "감정·반응", "칭찬·호감 표현", "전화·문자 줄임말", "구동사", "영화·드라마·슬랭", "영어 관용구"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "90일 회화 완성", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
exports.TITLES = ["입문", "학생", "수다쟁이", "여행자", "현지인", "고수", "달인"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "칭찬", expression: "일상 표현", polite: "예의", saying: "명언" };
