/* Generates /home/claude/packs/course-ko-en.js from the source modules in this folder. */
const fs = require('fs');
const path = require('path');
const DIR = __dirname;
const OUT = process.argv[2] || '/home/claude/packs/course-ko-en.js';
const decksSrc = require(path.join(DIR, 'decks.js'));
const X = require(path.join(DIR, 'extra.js'));
const L = require(path.join(DIR, 'lessons.js'));

function rows(text, n, label) {
  return text.split('\n').map(s => s.trim()).filter(Boolean).map((line, i) => {
    const f = line.split(' | ').map(s => s.trim());
    if (f.length !== n) throw new Error(label + ' line ' + (i + 1) + ': expected ' + n + ' fields, got ' + f.length + ': ' + line);
    return f;
  });
}

const DECKS = {};
for (const [name, txt] of Object.entries(decksSrc)) DECKS[name] = rows(txt, 4, name);

const DIALOG = {};
for (const [k, a, b, t] of rows(X.DIALOG, 4, 'DIALOG')) { if (DIALOG[k]) throw new Error('dup dialog ' + k); DIALOG[k] = [a, b, t]; }
const EXAMPLES = {};
for (const [k, s, t] of rows(X.EXAMPLES, 3, 'EXAMPLES')) { if (EXAMPLES[k]) throw new Error('dup example ' + k); EXAMPLES[k] = [s, t]; }
const PATTERNS = rows(X.PATTERNS, 4, 'PATTERNS');
const IDIOMS = rows(X.IDIOMS, 4, 'IDIOMS');
const PSET = (key, label) => [label, rows(X.PAUSE[key], 2, 'PAUSE.' + key)];
const PAUSE = {
  sets: {
    compliment: PSET('compliment', 'Compliment · 칭찬'),
    expression: PSET('expression', 'Everyday · 일상 표현'),
    polite: PSET('polite', 'Polite · 예의'),
    saying: PSET('saying', 'Saying · 명언')
  },
  idioms: IDIOMS
};

const LESSONS = L.LESSONS.map(l => ({ ...l, body: l.body.replace(/^\s+|\s+$/g, '').replace(/\n/g, '') }));

const GROUPS = [
  ["첫걸음", ["인사", "자기소개", "생존 영어 1", "생존 영어 2"]],
  ["여행·일상", ["길 묻기·교통", "식당 주문", "카페·편의점", "쇼핑·계산", "숫자·시간·날짜", "여행(공항·호텔)", "병원·긴급"]],
  ["대화·관계", ["스몰토크", "감정·반응", "칭찬·호감 표현", "전화·문자 줄임말"]],
  ["직장", ["직장·이메일"]],
  ["원어민처럼", ["발음 주의", "구동사", "영어 관용구", "영화·드라마·슬랭"]]
];

const TAGS = {
  basics: ["인사", "자기소개", "생존 영어 1", "생존 영어 2", "숫자·시간·날짜"],
  travel: ["생존 영어 1", "생존 영어 2", "길 묻기·교통", "식당 주문", "카페·편의점", "쇼핑·계산", "숫자·시간·날짜", "여행(공항·호텔)", "병원·긴급"],
  social: ["인사", "자기소개", "스몰토크", "감정·반응", "칭찬·호감 표현", "전화·문자 줄임말"],
  work: ["직장·이메일", "전화·문자 줄임말", "숫자·시간·날짜", "스몰토크"],
  media: ["영화·드라마·슬랭", "영어 관용구", "감정·반응"],
  skills: ["발음 주의", "구동사", "영어 관용구"]
};

const DESC = {
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
  "영화·드라마·슬랭": "드라마·K-pop 팬덤·SNS에서 듣는 요즘 표현"
};

const GOALS = {
  travel: { label: "여행", decks: ["생존 영어 1", "생존 영어 2", "길 묻기·교통", "식당 주문", "카페·편의점", "쇼핑·계산", "여행(공항·호텔)", "병원·긴급"] },
  work: { label: "직장·업무", decks: ["자기소개", "직장·이메일", "전화·문자 줄임말", "숫자·시간·날짜", "스몰토크"] },
  social: { label: "친구·데이트", decks: ["인사", "자기소개", "스몰토크", "감정·반응", "칭찬·호감 표현", "전화·문자 줄임말"] },
  media: { label: "영화·드라마·음악", decks: ["영화·드라마·슬랭", "영어 관용구", "감정·반응", "구동사", "발음 주의"] }
};

const PATH_ORDER = GROUPS.flatMap(g => g[1]);
const PLAN_PRESETS = {
  trip: { label: "해외여행 준비", weeks: 3, decks: ["인사", "생존 영어 1", "생존 영어 2", "길 묻기·교통", "식당 주문", "카페·편의점", "쇼핑·계산", "숫자·시간·날짜", "여행(공항·호텔)", "병원·긴급"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "외국인 친구 사귀기", weeks: 6, decks: ["인사", "자기소개", "생존 영어 1", "스몰토크", "감정·반응", "칭찬·호감 표현", "전화·문자 줄임말", "구동사", "영화·드라마·슬랭", "영어 관용구"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "90일 회화 완성", weeks: 13, decks: PATH_ORDER, lessons: LESSONS.map(l => l.id) }
};

const TITLES = [[1, 'Beginner', '입문'], [3, 'Student', '학생'], [5, 'Talker', '수다쟁이'], [8, 'Traveler', '여행자'], [12, 'Local', '현지인'], [16, 'Pro', '고수'], [20, 'Master', '달인']];

const J = v => JSON.stringify(v);
const objLines = (o, fmt) => '{\n' + Object.entries(o).map(([k, v]) => '    ' + J(k) + ': ' + fmt(v)).join(',\n') + '\n  }';

let out = '';
out += '/* Lang App course pack: English for Korean speakers (ko-en). Pure data; generated content. */\n';
out += "LANGAPP_PACKS.course['ko-en'] = {\n";
out += '  id: "ko-en", native: "ko", target: "en", ttsLang: "en-US", name: {en: "English", ko: "영어"}, brand: "English",\n';
out += '  features: {script: false, pron: false, conj: false, register: false, numbers: false, sound: false, strokes: false},\n';
out += '  DECKS: {\n' + Object.entries(DECKS).map(([k, cards]) => '    ' + J(k) + ': [\n' + cards.map(c => '      ' + J(c)).join(',\n') + '\n    ]').join(',\n') + '\n  },\n';
out += '  GROUPS: ' + J(GROUPS) + ',\n';
out += '  TAGS: ' + objLines(TAGS, J) + ',\n';
out += '  DESC: ' + objLines(DESC, J) + ',\n';
out += '  DIALOG: ' + objLines(DIALOG, J) + ',\n';
out += '  EXAMPLES: ' + objLines(EXAMPLES, J) + ',\n';
out += '  LESSONS: [\n' + LESSONS.map(l => '    ' + J(l)).join(',\n') + '\n  ],\n';
out += '  CHECKS: ' + objLines(L.CHECKS, v => '[\n' + v.map(c => '      ' + J(c)).join(',\n') + '\n    ]') + ',\n';
out += '  PATTERNS: [\n' + PATTERNS.map(p => '    ' + J(p)).join(',\n') + '\n  ],\n';
out += '  PAIRS: [],\n';
out += '  GOALS: ' + objLines(GOALS, J) + ',\n';
out += '  PLAN_PRESETS: ' + objLines(PLAN_PRESETS, J) + ',\n';
out += '  TITLES: ' + J(TITLES) + ',\n';
out += '  PAUSE: {\n    sets: ' + objLines(PAUSE.sets, v => '[' + J(v[0]) + ', [\n' + v[1].map(x => '      ' + J(x)).join(',\n') + '\n    ]]').replace(/\n/g, '\n  ') + ',\n';
out += '    idioms: [\n' + IDIOMS.map(x => '      ' + J(x)).join(',\n') + '\n    ]\n  }\n';
out += '};\n';
fs.writeFileSync(OUT, out);
console.log('wrote', OUT, out.length, 'bytes');
