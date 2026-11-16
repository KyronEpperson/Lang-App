/* Lang App roadmaps: planned lesson order per TARGET language. Pure data, no lesson bodies.
   These are placeholders, not courses: nothing here is registered in COURSES or LESSONS.
   Item = [futureLessonId, English title, Korean title, liveLessonId?]. The 4th field is set only where a live lesson already covers the item.
   Order is curriculum convention (no study has tested lesson order); "basis" names the framework or syllabus each outline follows,
   "src" lists what was actually read on 2026-11-15, "note" says what is NOT from those sources. */
LANGAPP_PACKS.roadmaps = {
  ko: { variant: {en: "Standard (Seoul) Korean", ko: "표준어"}, basis: {en: "Common order of Korean beginner courses (TTMIK, Sogang, How to Study Korean)", ko: "한국어 초급 교재들의 공통 순서"},
    src: ["Talk To Me In Korean levels 1-2", "Sogang Korean 1A/1B", "How to Study Korean unit 1", "reports/Grammar learning order research.md"], note: "Synthesis from the research report; official King Sejong and TOPIK lists were not retrieved.",
    stages: [
      { en: "Script and first words", ko: "글자와 첫 표현", items: [
        ["ko-hangul", "Hangul", "한글", "hangul"], ["ko-sound-changes", "Sound changes: why 감사합니다 sounds different", "소리 변화: 비음화와 격음화"],
        ["ko-meet", "Meeting people", "사람 만나기", "meet"], ["ko-polite", "Politeness in brief", "높임말 한눈에", "polite"] ] },
      { en: "Nouns and things", ko: "명사와 사물", items: [
        ["ko-nouns", "Nouns, 이에요/예요, 은/는", "명사, 이에요/예요, 은/는", "nouns"], ["ko-isseoyo", "있어요/없어요, 이/가, place 에", "있어요/없어요, 이/가, 장소 에", "isseoyo"],
        ["ko-pronouns-questions", "Pronouns and first question words", "대명사와 의문사"], ["ko-numbers", "Two number systems", "두 가지 숫자", "numbers"],
        ["ko-counters", "Counters and 주세요", "단위 명사와 주세요", "counters"], ["ko-food", "Eating out", "식당에서", "food"] ] },
      { en: "Verbs and sentences", ko: "동사와 문장", items: [
        ["ko-verbbasics", "Verbs: 다, stems and kinds", "동사: 다, 어간, 종류", "verbbasics"], ["ko-present", "Present 요-form", "현재 요-형", "verbs"],
        ["ko-sov", "Word order and 을/를", "어순과 을/를", "sov"], ["ko-e-eseo", "에 vs 에서", "에 vs 에서", "particles"],
        ["ko-getting-around", "Getting around", "길 찾기와 교통", "getting-around"], ["ko-past", "Past tense", "과거 시제", "past"],
        ["ko-negation", "안 and -지 않아요", "안, -지 않아요", "negation"], ["ko-do-man", "도 and 만: also, only", "도와 만", "do-man"],
        ["ko-sentences", "Putting sentences together", "문장 만들기", "sentences"] ] },
      { en: "Saying what you want", ko: "원하는 것 말하기", items: [
        ["ko-want-like", "Want and like: -고 싶어요, 좋아해요", "-고 싶어요, 좋아해요"], ["ko-future", "Future: -(으)ㄹ 거예요", "미래: -(으)ㄹ 거예요", "future"],
        ["ko-cant", "Can and can't: -(으)ㄹ 수 있어요, 못", "-(으)ㄹ 수 있어요, 못", "cant"], ["ko-have-to", "Have to: -아/어야 해요", "의무: -아/어야 해요"], ["ko-plans", "Making plans", "약속 잡기", "plans"],
        ["ko-titles", "Titles and honorifics", "호칭과 높임", "titles"], ["ko-requests", "Asking politely", "공손하게 부탁하기", "requests"],
        ["ko-honorific", "Honorific verbs", "높임 동사", "honorific"] ] },
      { en: "Longer sentences", ko: "긴 문장", items: [
        ["ko-joining", "Joining sentences: -고, -아/어서, -지만", "문장 잇기: -고, -아/어서, -지만"], ["ko-story", "Telling a story in the past", "과거 이야기하기", "story"],
        ["ko-noun-modifiers", "Adjectives before nouns: -(으)ㄴ", "관형형: -(으)ㄴ"], ["ko-compare", "Comparing: 보다 더, 제일", "비교: 보다 더, 제일"],
        ["ko-office", "Office Korean: -(스)ㅂ니다", "직장 한국어: -(스)ㅂ니다", "office"], ["ko-texting", "Texting and casual speech", "문자와 반말", "texting"] ] } ] },

  en: { variant: {en: "General (American) English", ko: "미국식 영어"}, basis: {en: "CEFR A1-B1 order, adjusted for Korean speakers", ko: "CEFR A1-B1 순서 (한국어 화자에 맞게 조정)"},
    src: ["British Council / EAQUALS Core Inventory (subset)", "English Result Elementary syllabus", "reports/Grammar learning order research.md"], note: "Synthesis from the research report; the English Grammar Profile itself was not retrieved.",
    stages: [
      { en: "A1 · First sentences", ko: "A1 · 첫 문장", items: [
        ["en-pron", "Pronunciation traps: R/L, F/P, TH", "발음 함정: R/L, F/P, TH", "pron"], ["en-be", "be, subject pronouns, every sentence needs a subject", "be동사, 주어 대명사, 주어는 꼭 필요", "be"],
        ["en-it-there", "It's cold · there is / there are", "It's cold · there is / there are"], ["en-nouns", "Nouns: a/an, plural -s, this/that, my/your", "명사: a/an, 복수 -s, this/that, my/your", "articles"],
        ["en-present", "Present simple and subject-verb-object", "현재 시제와 주어-동사-목적어"], ["en-questions", "Questions: do, then question words", "의문문: do, 의문사"],
        ["en-third-s", "He/she/it: -s, does / doesn't", "3인칭 단수 -s, does / doesn't"], ["en-prep", "at / in / on", "전치사 at / in / on", "prep"],
        ["en-countable", "Countable and uncountable: some, any, much, many", "셀 수 있는 명사: some, any, much, many"] ] },
      { en: "A1 · Doing things", ko: "A1 · 행동 말하기", items: [
        ["en-object-have", "Object pronouns and have", "목적격 대명사와 have"], ["en-can-like", "can, like + -ing, I'd like", "can, like + -ing, I'd like", "polite"],
        ["en-continuous", "Present continuous vs present simple", "현재진행 vs 현재"], ["en-past", "was / were and regular past -ed", "was / were, 규칙 과거 -ed", "tense"],
        ["en-irregular-past", "Irregular past, past questions", "불규칙 과거, 과거 의문문"], ["en-the", "the: first vs second mention", "the: 처음 말할 때와 다시 말할 때"],
        ["en-adjectives", "Adjectives, comparatives, superlatives", "형용사, 비교급, 최상급"], ["en-going-to", "going to: plans", "going to: 계획"],
        ["en-joining", "and, but, or, so, because", "and, but, or, so, because"] ] },
      { en: "A2 · Building range", ko: "A2 · 표현 넓히기", items: [
        ["en-past-continuous", "Past continuous", "과거진행"], ["en-will", "will vs going to", "will vs going to"],
        ["en-perfect", "Present perfect: experience", "현재완료: 경험"], ["en-modals", "have to, must, should, might", "have to, must, should, might"],
        ["en-to-ing", "Verb + to or -ing", "동사 + to / -ing"], ["en-articles-2", "the for one-of-a-kind, no article with plurals", "유일한 것의 the, 복수의 무관사"],
        ["en-first-conditional", "First conditional: if", "조건문 1: if"], ["en-relative", "who / that: describing people and things", "관계대명사 who / that"] ] },
      { en: "B1 · Telling more", ko: "B1 · 더 길게 말하기", items: [
        ["en-perfect-2", "Present perfect with for / since", "현재완료 for / since"], ["en-narrative", "Narrative tenses", "이야기 시제"],
        ["en-conditionals", "Second and third conditional", "조건문 2, 3"], ["en-passive", "Passive", "수동태"], ["en-reported", "Reported speech", "간접화법"] ] } ] },

  ja: { variant: {en: "Standard (Tokyo) Japanese", ko: "표준 일본어"}, basis: {en: "JLPT N5 grammar, in Genki I lesson order", ko: "JLPT N5 문법, Genki I 순서"},
    src: ["Genki I 3rd edition syllabus (The Japan Times)", "JLPT N5 grammar list (Wikibooks)"], note: "The script stage is standard practice; the fetched syllabus starts at lesson 1.",
    stages: [
      { en: "Script and sounds", ko: "글자와 소리", items: [
        ["ja-hiragana", "Hiragana", "히라가나"], ["ja-katakana", "Katakana", "가타카나"], ["ja-sounds", "Long vowels, small っ and pitch", "장음, 촉음 っ, 억양"], ["ja-kanji-first", "First kanji: numbers, days, people", "첫 한자: 숫자, 요일, 사람"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["ja-desu", "X は Y です: A is B", "X は Y です: A는 B예요"], ["ja-kosoado", "これ・それ・あれ: this and that", "これ・それ・あれ: 이것, 그것, 저것"], ["ja-no-mo", "の and も: possession and also", "の와 も: 소유와 '도'"],
        ["ja-masu", "Verbs in ます form", "동사 ます형"], ["ja-particles", "Particles を・に・で・へ", "조사 を・に・で・へ"], ["ja-arimasu", "あります / います: there is", "あります / います: 있어요"],
        ["ja-past", "Past: でした・ました", "과거: でした・ました"], ["ja-invite", "ませんか・ましょう: inviting", "ませんか・ましょう: 권유"] ] },
      { en: "Describing and connecting", ko: "묘사와 연결", items: [
        ["ja-adjectives", "い and な adjectives", "い형용사와 な형용사"], ["ja-suki", "好き / きらい: likes", "好き / きらい: 좋아함과 싫어함"], ["ja-counters", "Counting and counters", "숫자 세기와 조수사"],
        ["ja-te", "The て-form", "て형"], ["ja-te-requests", "てください・てもいい・てはいけません", "てください・てもいい・てはいけません"], ["ja-teiru", "ている: doing right now", "ている: 진행과 상태"],
        ["ja-short", "Short forms and casual speech", "보통형과 반말"], ["ja-to-omou", "と思います・と言っていました", "と思います・と言っていました"] ] },
      { en: "Toward N5", ko: "N5까지", items: [
        ["ja-noun-mod", "Describing nouns with verbs", "동사로 명사 꾸미기"], ["ja-compare", "Comparing: より・いちばん", "비교: より・いちばん"], ["ja-tsumori", "つもり・なる: plans and changes", "つもり・なる: 계획과 변화"],
        ["ja-tai", "たい: want to", "たい: 하고 싶어요"], ["ja-koto-aru", "たことがある: experiences", "たことがある: 경험"], ["ja-n-desu", "んです・ので: explaining", "んです・ので: 이유 설명"],
        ["ja-must", "なければいけません・ほうがいい", "なければいけません・ほうがいい: 의무와 조언"] ] } ] },

  zh: { variant: {en: "Mandarin, simplified characters", ko: "표준 중국어 (간체자)"}, basis: {en: "HSK level 1-2 grammar", ko: "HSK 1-2급 문법"},
    src: ["HSK 1 grammar list (Mandarin Temple)", "That's Mandarin: HSK 3.0 2026 update"], note: "HSK keeps nine levels; revised word counts were reported as expected from July 2026 and not confirmed. The sounds stage is standard practice.",
    stages: [
      { en: "Sounds and script", ko: "소리와 글자", items: [
        ["zh-pinyin", "Pinyin: initials and finals", "병음: 성모와 운모"], ["zh-tones", "Four tones and the neutral tone", "4성과 경성"], ["zh-tone-change", "Tone changes: 不, 一, third tone", "성조 변화: 不, 一, 3성"], ["zh-characters", "How characters work: strokes and radicals", "한자의 원리: 획과 부수"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["zh-pronouns", "Pronouns and 们", "대명사와 们"], ["zh-shi", "是: A is B", "是: A는 B예요"], ["zh-adj", "Adjective sentences with 很", "很을 쓰는 형용사 문장"], ["zh-ma", "Questions with 吗 and 呢", "吗와 呢 의문문"],
        ["zh-question-words", "Question words: 什么・谁・哪儿・几", "의문사: 什么・谁・哪儿・几"], ["zh-bu-mei", "Negation: 不 and 没", "부정: 不와 没"], ["zh-de", "的: possession and describing", "的: 소유와 수식"], ["zh-you", "有: have and there is", "有: 있어요"] ] },
      { en: "Numbers, time and place", ko: "숫자, 시간, 장소", items: [
        ["zh-numbers", "Numbers and money", "숫자와 돈"], ["zh-measure", "Measure words: 个・本・杯", "양사: 个・本・杯"], ["zh-time", "Time and dates", "시간과 날짜"], ["zh-zai", "在: at, in, and location words", "在: 위치와 방위사"], ["zh-word-order", "Word order: who · when · where · verb", "어순: 누가 · 언제 · 어디서 · 동사"] ] },
      { en: "Doing things", ko: "행동 말하기", items: [
        ["zh-want-can", "想・要・会・能: want and can", "想・要・会・能: 원함과 가능"], ["zh-le", "了: completed and changed", "了: 완료와 변화"], ["zh-progress", "正在: doing right now", "正在: 진행"], ["zh-serial", "Two verbs in a row: 去 + verb", "연동문: 去 + 동사"],
        ["zh-a-not-a", "Verb-not-verb questions", "정반 의문문"], ["zh-ye-dou", "也・都・还: also, all, still", "也・都・还"], ["zh-ba-bie", "吧・别: suggestions and don't", "吧・别: 제안과 금지"], ["zh-and-or", "和・还是: and, or", "和・还是"] ] } ] },

  es: { variant: {en: "Spanish of Spain", ko: "스페인 스페인어"}, basis: {en: "CEFR A1, Plan Curricular del Instituto Cervantes", ko: "CEFR A1, 세르반테스 문화원 교육과정"},
    src: ["Universidad de Zaragoza A1 programme (MCER + PCIC)"], note: "",
    stages: [
      { en: "Sounds and first words", ko: "소리와 첫 표현", items: [
        ["es-sounds", "Alphabet, sounds and stress", "알파벳, 발음, 강세"], ["es-greetings", "Greetings and introductions", "인사와 자기소개"], ["es-gender", "Gender and number of nouns", "명사의 성과 수"], ["es-articles", "el / la, un / una", "관사 el / la, un / una"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["es-ser", "Subject pronouns and ser", "주어 대명사와 ser"], ["es-estar", "estar: where and how", "estar: 위치와 상태"], ["es-ser-estar", "ser vs estar", "ser vs estar"], ["es-hay", "hay: there is", "hay: 있어요"],
        ["es-present", "Present tense: -ar, -er, -ir", "현재 시제: -ar, -er, -ir"], ["es-questions", "Question words", "의문사"], ["es-numbers", "Numbers, time and prices", "숫자, 시간, 가격"],
        ["es-adjectives", "Adjectives and agreement", "형용사와 일치"], ["es-possessives", "Possessives and demonstratives", "소유사와 지시사"] ] },
      { en: "Everyday life", ko: "일상", items: [
        ["es-irregular", "Irregular present: tener, ir, hacer, querer", "불규칙 현재: tener, ir, hacer, querer"], ["es-gustar", "gustar and preferir", "gustar와 preferir"], ["es-reflexive", "Reflexive verbs and daily routine", "재귀동사와 하루 일과"],
        ["es-prepositions", "a, de, en, con, por, para", "전치사 a, de, en, con, por, para"], ["es-muy-mucho", "muy and mucho", "muy와 mucho"], ["es-connectors", "y, o, pero, porque", "y, o, pero, porque"],
        ["es-directions", "Directions and places in town", "길 묻기와 장소"], ["es-ir-a", "ir a + infinitive: plans", "ir a + 동사원형: 계획"], ["es-perfecto", "Pretérito perfecto: what you've done", "현재완료: 한 일 말하기"], ["es-se", "Impersonal se", "무인칭 se"] ] } ] },

  fr: { variant: {en: "French of France", ko: "프랑스 프랑스어"}, basis: {en: "CEFR A1-A2 key contents (France Éducation international)", ko: "CEFR A1-A2 핵심 내용 (France Éducation international)"},
    src: ["Digischool summary of the Inventaire linguistique des contenus clés des niveaux du CECRL"], note: "The sounds stage is standard practice; the inventory itself was read through a summary.",
    stages: [
      { en: "Sounds and first words", ko: "소리와 첫 표현", items: [
        ["fr-sounds", "Sounds, silent letters and liaison", "발음, 묵음, 연음"], ["fr-greetings", "Greetings: tu and vous", "인사: tu와 vous"], ["fr-articles", "Gender and articles: le / la, un / une", "성과 관사: le / la, un / une"],
        ["fr-etre-avoir", "être and avoir", "être와 avoir"], ["fr-pronouns", "Subject and stress pronouns: je, moi", "주어·강세 대명사: je, moi"] ] },
      { en: "A1 · First sentences", ko: "A1 · 첫 문장", items: [
        ["fr-present", "Present tense: -er verbs", "현재 시제: -er 동사"], ["fr-negation", "ne … pas", "부정 ne … pas"], ["fr-questions", "Questions: est-ce que, qui, où", "의문문: est-ce que, qui, où"], ["fr-cest", "c'est and il y a", "c'est와 il y a"],
        ["fr-adjectives", "Adjectives: agreement and place", "형용사: 일치와 위치"], ["fr-possessives", "mon / ma, ce / cette", "소유·지시 형용사"], ["fr-numbers", "Numbers, time and dates", "숫자, 시간, 날짜"],
        ["fr-partitive", "du, de la, des: some", "부분관사 du, de la, des"], ["fr-prepositions", "Prepositions of place and time", "장소·시간 전치사"] ] },
      { en: "A1 · Doing things", ko: "A1 · 행동 말하기", items: [
        ["fr-irregular", "aller, faire, venir, prendre", "aller, faire, venir, prendre"], ["fr-modals", "vouloir, pouvoir, devoir + infinitive", "vouloir, pouvoir, devoir + 동사원형"], ["fr-futur-proche", "Futur proche: je vais + verb", "근접미래: je vais + 동사"],
        ["fr-pronominal", "Reflexive verbs", "대명동사"], ["fr-imperative", "Imperative and il faut", "명령법과 il faut"], ["fr-passe-compose", "Passé composé with avoir and être", "복합과거: avoir와 être"],
        ["fr-connectors", "et, ou, mais, alors", "et, ou, mais, alors"], ["fr-polite", "je voudrais: polite requests", "je voudrais: 공손한 부탁"] ] },
      { en: "A2 · Next steps", ko: "A2 · 다음 단계", items: [
        ["fr-imparfait", "Imparfait vs passé composé", "반과거 vs 복합과거"], ["fr-futur", "Futur simple", "단순미래"], ["fr-object-pronouns", "Pronouns le, lui, en, y", "대명사 le, lui, en, y"],
        ["fr-compare", "Comparing: plus, moins, le plus", "비교: plus, moins, le plus"], ["fr-relatives", "qui, que, où", "관계대명사 qui, que, où"] ] } ] },

  de: { variant: {en: "German of Germany", ko: "독일 독일어"}, basis: {en: "Goethe-Zertifikat A1 grammar inventory", ko: "괴테 자격증 A1 문법 목록"},
    src: ["Goethe-Institut: Prüfungsziele, Testbeschreibung A1 Start Deutsch 1"], note: "The inventory is grouped by category, not ordered; the lesson order here is common course practice.",
    stages: [
      { en: "Sounds and first words", ko: "소리와 첫 표현", items: [
        ["de-sounds", "Alphabet, umlauts and ß", "알파벳, 움라우트, ß"], ["de-greetings", "Greetings: du and Sie", "인사: du와 Sie"], ["de-sein-haben", "sein and haben", "sein과 haben"],
        ["de-gender", "der, die, das and plurals", "der, die, das와 복수"], ["de-present", "Present tense", "현재 시제"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["de-word-order", "Verb in second place", "동사는 두 번째 자리"], ["de-questions", "W-questions and yes/no questions", "W-의문문과 예/아니오 의문문"], ["de-negation", "nicht and kein", "nicht와 kein"],
        ["de-numbers", "Numbers, time and prices", "숫자, 시간, 가격"], ["de-accusative", "Accusative: den, einen", "4격: den, einen"], ["de-pronouns", "Pronouns: ich, mich, mir", "대명사: ich, mich, mir"], ["de-possessives", "mein, dein, sein", "소유관사 mein, dein, sein"] ] },
      { en: "Doing things", ko: "행동 말하기", items: [
        ["de-modals", "Modal verbs: können, müssen, wollen, möchten", "화법조동사: können, müssen, wollen, möchten"], ["de-separable", "Separable verbs: aufstehen", "분리동사: aufstehen"], ["de-bracket", "The sentence bracket", "문장 괄호 구조"],
        ["de-dative", "Dative: dem, der, mit, bei", "3격: dem, der, mit, bei"], ["de-prepositions", "Prepositions of place and time", "장소·시간 전치사"], ["de-imperative", "Imperative: du, ihr, Sie", "명령법: du, ihr, Sie"],
        ["de-perfekt", "Perfekt: what happened", "현재완료: 과거 말하기"], ["de-war-hatte", "war and hatte", "war와 hatte"], ["de-adjectives", "Adjectives and comparing", "형용사와 비교"], ["de-connectors", "und, oder, aber, denn, wenn", "und, oder, aber, denn, wenn"] ] } ] },

  pt: { variant: {en: "Brazilian Portuguese", ko: "브라질 포르투갈어"}, basis: {en: "University of São Paulo A1 programme for foreigners", ko: "상파울루 대학교 외국인 A1 과정"},
    src: ["USP Centro de Línguas: Língua Portuguesa para Estrangeiros, nível A1"], note: "The programme lists five blocks (alphabet, present, routine and numbers, location and future, past); finer items are common course practice.",
    stages: [
      { en: "Sounds and first words", ko: "소리와 첫 표현", items: [
        ["pt-sounds", "Alphabet and sounds: nasal vowels, ão, lh, nh", "알파벳과 발음: 비모음, ão, lh, nh"], ["pt-greetings", "Greetings and introductions: você", "인사와 자기소개: você"], ["pt-ser", "ser: who you are", "ser: 나는 누구"],
        ["pt-articles", "Gender and o / a, um / uma", "성과 관사 o / a, um / uma"], ["pt-present", "Present tense: -ar, -er, -ir", "현재 시제: -ar, -er, -ir"] ] },
      { en: "Everyday sentences", ko: "일상 문장", items: [
        ["pt-estar", "estar, and ser vs estar", "estar, ser vs estar"], ["pt-ter", "ter and tem: have, there is", "ter와 tem: 있어요"], ["pt-questions", "Question words", "의문사"], ["pt-numbers", "Numbers, time and daily routine", "숫자, 시간, 하루 일과"],
        ["pt-contractions", "no, na, do, da: contractions", "축약형 no, na, do, da"], ["pt-location", "Places and location words", "장소와 위치 표현"], ["pt-possessives", "meu / minha, este / esse", "소유사와 지시사"], ["pt-adjectives", "Adjectives and agreement", "형용사와 일치"] ] },
      { en: "Doing things", ko: "행동 말하기", items: [
        ["pt-irregular", "ir, fazer, querer, poder", "ir, fazer, querer, poder"], ["pt-future", "ir + infinitive: future", "ir + 동사원형: 미래"], ["pt-gostar", "gostar de: likes", "gostar de: 좋아해요"], ["pt-progressive", "estar + -ndo: right now", "estar + -ndo: 진행"],
        ["pt-reflexive", "Reflexive verbs", "재귀동사"], ["pt-past", "Pretérito perfeito: past", "완전과거"], ["pt-requests", "Polite requests and commands", "공손한 부탁과 명령"], ["pt-connectors", "e, mas, ou, porque", "e, mas, ou, porque"], ["pt-city", "Getting around the city", "도시에서 길 찾기"] ] } ] },

  it: { variant: {en: "Standard Italian", ko: "표준 이탈리아어"}, basis: {en: "CILS A1 syllabus (Università per Stranieri di Siena)", ko: "CILS A1 실러버스 (시에나 외국인 대학교)"},
    src: ["Istituto Italiano di Cultura Buenos Aires: Contenuti Livello A1 (CILS)"], note: "The sounds stage is standard practice.",
    stages: [
      { en: "Sounds and first words", ko: "소리와 첫 표현", items: [
        ["it-sounds", "Sounds: c / g, gli, gn, double consonants", "발음: c / g, gli, gn, 겹자음"], ["it-greetings", "Greetings: tu and Lei", "인사: tu와 Lei"], ["it-articles", "Articles: il, lo, la, un, una", "관사: il, lo, la, un, una"],
        ["it-gender", "Gender and number of nouns", "명사의 성과 수"], ["it-essere-avere", "essere and avere", "essere와 avere"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["it-pronouns", "Subject and object pronouns", "주어·목적어 대명사"], ["it-present", "Present tense: -are, -ere, -ire", "현재 시제: -are, -ere, -ire"], ["it-questions", "Question words", "의문사"], ["it-ce", "c'è and ci sono", "c'è와 ci sono"],
        ["it-adjectives", "Adjectives and agreement", "형용사와 일치"], ["it-possessives", "Possessives and demonstratives", "소유사와 지시사"], ["it-numbers", "Numbers, time and dates", "숫자, 시간, 날짜"], ["it-prepositions", "Prepositions: a, di, da, in + article", "전치사: a, di, da, in + 관사"] ] },
      { en: "Doing things", ko: "행동 말하기", items: [
        ["it-irregular", "andare, fare, venire, stare", "andare, fare, venire, stare"], ["it-modals", "potere, dovere, volere", "potere, dovere, volere"], ["it-piacere", "piacere: likes", "piacere: 좋아해요"], ["it-reflexive", "Reflexive verbs", "재귀동사"],
        ["it-imperative", "Imperative and vorrei", "명령법과 vorrei"], ["it-passato", "Passato prossimo", "근과거"], ["it-adverbs", "Adverbs of time, place and quantity", "시간·장소·양의 부사"], ["it-connectors", "e, ma, perché, quando, se", "e, ma, perché, quando, se"] ] } ] },

  vi: { variant: {en: "Northern (Hanoi) Vietnamese", ko: "북부 (하노이) 베트남어"}, basis: {en: "VNU-ULIS Vietnamese programme, levels A1-A2", ko: "하노이 국립대 외국어대 베트남어 과정 A1-A2"},
    src: ["ULIS (Vietnam National University, Hanoi): Vietnamese Program A1-C2"], note: "",
    stages: [
      { en: "Sounds and tones", ko: "소리와 성조", items: [
        ["vi-alphabet", "Alphabet and letter sounds", "알파벳과 글자 소리"], ["vi-tones", "The six tones", "6성조"], ["vi-syllables", "Syllables: initials, vowels, finals", "음절: 초성, 모음, 종성"], ["vi-vowels", "Long, short and double vowels", "장모음, 단모음, 이중모음"] ] },
      { en: "A1 · First sentences", ko: "A1 · 첫 문장", items: [
        ["vi-pronouns", "Greetings and kinship pronouns: anh, chị, em", "인사와 호칭 대명사: anh, chị, em"], ["vi-la", "là: A is B", "là: A는 B예요"], ["vi-yes-no", "Yes/no questions: … phải không?", "예/아니오 의문문: … phải không?"],
        ["vi-jobs", "Jobs and nationality", "직업과 국적"], ["vi-this-that", "này, kia, đây, đó: this and that", "này, kia, đây, đó"], ["vi-adjectives", "Adjective sentences: rất, quá", "형용사 문장: rất, quá"], ["vi-who-what", "ai, gì: who and what", "ai, gì: 누구, 무엇"] ] },
      { en: "A1 · Numbers and actions", ko: "A1 · 숫자와 행동", items: [
        ["vi-numbers", "Numbers 1-100: mấy, bao nhiêu", "숫자 1-100: mấy, bao nhiêu"], ["vi-co", "có: have and there is", "có: 있어요"], ["vi-cua", "của: possession", "của: 소유"], ["vi-compare", "hơn: comparing", "hơn: 비교"],
        ["vi-verbs", "Verb sentences and time words: đã, đang, sẽ", "동사 문장과 시제어: đã, đang, sẽ"], ["vi-location", "ở, trên, dưới: location", "ở, trên, dưới: 위치"] ] },
      { en: "A2 · Getting things done", ko: "A2 · 생활 표현", items: [
        ["vi-biet", "biết: know how to", "biết: 할 줄 알아요"], ["vi-chua", "đã … chưa: yet?", "đã … chưa: 벌써?"], ["vi-motion", "đi, đến, về: going", "đi, đến, về: 이동"], ["vi-prices", "Prices and shopping", "가격과 쇼핑"],
        ["vi-directions", "Directions and transport", "길 찾기와 교통"], ["vi-time", "Time, days and dates", "시간, 요일, 날짜"], ["vi-because", "vì … nên: because, so", "vì … nên: 이유와 결과"], ["vi-requests", "Polite requests: xin, mời, nhé", "공손한 부탁: xin, mời, nhé"] ] } ] },

  th: { variant: {en: "Central (Bangkok) Thai", ko: "중부 (방콕) 태국어"}, basis: {en: "University beginner Thai syllabus: speaking first, then reading", ko: "대학 초급 태국어 과정: 말하기 먼저, 그다음 읽기"},
    src: ["University of Minnesota / ISDSI: Beginning Thai 1 syllabus"], note: "The syllabus gives the literacy order and the topics; the grammar items are common beginner practice, not from the syllabus.",
    stages: [
      { en: "Sounds and survival", ko: "소리와 생존 표현", items: [
        ["th-tones", "The five tones", "5성조"], ["th-sounds", "Sounds: aspiration, long and short vowels", "발음: 기음, 장단 모음"], ["th-greetings", "Greetings and ครับ / ค่ะ", "인사와 ครับ / ค่ะ"], ["th-numbers", "Numbers and money", "숫자와 돈"] ] },
      { en: "Reading Thai", ko: "태국 글자 읽기", items: [
        ["th-consonants", "Consonants and the three classes", "자음과 세 가지 자음군"], ["th-vowels", "Vowels and where they sit", "모음과 위치"], ["th-finals", "Final consonants: live and dead syllables", "받침: 생음절과 사음절"],
        ["th-tone-marks", "Tone marks and tone rules", "성조 부호와 성조 규칙"], ["th-clusters", "Clusters and leading consonants", "자음군과 선도 자음"], ["th-special", "Special vowel rules and reading sentences", "특수 모음 규칙과 문장 읽기"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["th-pronouns", "Pronouns and polite particles", "대명사와 공손 어미"], ["th-pen", "เป็น / คือ / อยู่: is, is at", "เป็น / คือ / อยู่: 이다, 있다"], ["th-mai", "ไม่ and ไหม: not, and yes/no questions", "ไม่와 ไหม: 부정과 의문"], ["th-question-words", "Question words", "의문사"],
        ["th-classifiers", "Classifiers: counting things", "분류사: 물건 세기"], ["th-food", "Food, drink and taste", "음식, 음료, 맛"], ["th-family", "Family and jobs", "가족과 직업"] ] },
      { en: "Everyday life", ko: "일상", items: [
        ["th-compare", "Describing and comparing: กว่า", "묘사와 비교: กว่า"], ["th-time", "Telling time and daily routine", "시간과 하루 일과"], ["th-time-words", "Time words: แล้ว, กำลัง, จะ", "시제어: แล้ว, กำลัง, จะ"], ["th-can-want", "ได้ / อยาก: can and want", "ได้ / อยาก: 가능과 희망"],
        ["th-directions", "Directions, places and transport", "길 찾기, 장소, 교통"], ["th-shopping", "Shopping: clothes and colours", "쇼핑: 옷과 색"], ["th-feelings", "Feelings and health", "기분과 건강"] ] } ] },

  id: { variant: {en: "Standard Indonesian", ko: "표준 인도네시아어"}, basis: {en: "BIPA 1-2 (Indonesian for foreign speakers, seven levels)", ko: "BIPA 1-2 (외국인을 위한 인도네시아어, 7단계)"},
    src: ["Study of the Sahabatku Indonesia A1 syllabus (UPI journal)", "Paper citing Permendikbud No. 27/2017 (seven BIPA levels)"], note: "The sources confirm the level system, self-introduction and pronouns first, and ber- at level 1; the remaining order is common course practice.",
    stages: [
      { en: "Sounds and first words", ko: "소리와 첫 표현", items: [
        ["id-sounds", "Alphabet and sounds", "알파벳과 발음"], ["id-greetings", "Greetings by time of day", "시간대별 인사"], ["id-pronouns", "Pronouns: saya, Anda, kamu, kami / kita", "대명사: saya, Anda, kamu, kami / kita"],
        ["id-intro", "Introducing yourself", "자기소개"], ["id-no-be", "A is B, with no 'to be'", "be동사 없이 A는 B"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["id-ini-itu", "ini, itu: this and that", "ini, itu: 이것, 저것"], ["id-questions", "apa, siapa, di mana, kapan, berapa", "의문사 apa, siapa, di mana, kapan, berapa"], ["id-negation", "tidak and bukan", "tidak과 bukan"],
        ["id-numbers", "Numbers, prices and time", "숫자, 가격, 시간"], ["id-noun-adj", "Noun + adjective order", "명사 + 형용사 어순"], ["id-possession", "Possession: -ku, -mu, -nya", "소유: -ku, -mu, -nya"],
        ["id-ada", "ada: there is, have", "ada: 있어요"], ["id-prepositions", "di, ke, dari", "전치사 di, ke, dari"] ] },
      { en: "Doing things", ko: "행동 말하기", items: [
        ["id-family", "Family and personal details", "가족과 신상 정보"], ["id-time-words", "sudah, sedang, akan, belum", "시제어 sudah, sedang, akan, belum"], ["id-ber", "The ber- prefix", "접두사 ber-"], ["id-me", "The me- prefix", "접두사 me-"],
        ["id-modals", "mau, bisa, harus, boleh", "mau, bisa, harus, boleh"], ["id-yang", "yang: which, who", "yang: 관계사"], ["id-passive", "The di- passive", "수동 di-"], ["id-compare", "lebih, paling: comparing", "lebih, paling: 비교"],
        ["id-directions", "Directions: junctions and places", "길 찾기: 교차로와 장소"], ["id-daily", "Daily activities and shopping", "일상과 쇼핑"], ["id-plural", "Plurals by repeating: buku-buku", "반복 복수: buku-buku"] ] } ] },

  hi: { variant: {en: "Modern Standard Hindi (Devanagari)", ko: "현대 표준 힌디어 (데바나가리)"}, basis: {en: "University beginner Hindi, steps 1-2", ko: "대학 초급 힌디어 1-2단계"},
    src: ["Durham University: Hindi language courses content summary"], note: "The summary lists grammar and topics per step without script lessons; the script stage is standard practice.",
    stages: [
      { en: "Script and sounds", ko: "글자와 소리", items: [
        ["hi-vowels", "Devanagari vowels and vowel signs", "데바나가리 모음과 모음 부호"], ["hi-consonants", "Devanagari consonants", "데바나가리 자음"], ["hi-conjuncts", "Conjuncts, nasal dots and reading words", "결합 자음, 비음 점, 단어 읽기"], ["hi-greetings", "Greetings and आप / तुम / तू", "인사와 आप / तुम / तू"] ] },
      { en: "Step 1 · First sentences", ko: "1단계 · 첫 문장", items: [
        ["hi-hona", "Pronouns and होना: is / am / are", "대명사와 होना"], ["hi-gender", "Gender and plurals", "명사의 성과 복수"], ["hi-adjectives", "Adjectives that agree", "일치하는 형용사"], ["hi-questions", "Question words: क्या, कौन, कहाँ", "의문사: क्या, कौन, कहाँ"],
        ["hi-negation", "नहीं: negation", "नहीं: 부정"], ["hi-postpositions", "Postpositions: में, पर, से, को", "후치사: में, पर, से, को"], ["hi-oblique", "The oblique case", "사격"], ["hi-possessive", "का / की / के and my, your", "का / की / के와 소유"],
        ["hi-imperative", "Requests and commands", "부탁과 명령"], ["hi-like-need", "पसंद, चाहिए: like and need", "पसंद, चाहिए: 좋아함과 필요"], ["hi-food", "Ordering food and shopping", "음식 주문과 쇼핑"] ] },
      { en: "Step 2 · Tenses", ko: "2단계 · 시제", items: [
        ["hi-habitual", "Present habitual: -ता है", "현재 습관: -ता है"], ["hi-continuous", "Continuous: रहा है", "진행: रहा है"], ["hi-was", "था / थी: was, used to", "था / थी: 과거"], ["hi-have", "Having: के पास", "소유 표현: के पास"],
        ["hi-infinitive", "Uses of the infinitive", "동사원형의 쓰임"], ["hi-past", "Past: completed actions and ने", "완료 과거와 ने"], ["hi-future", "Future tense", "미래 시제"], ["hi-conjunctions", "और, लेकिन, क्योंकि", "और, लेकिन, क्योंकि"],
        ["hi-directions", "Directions and travel", "길 찾기와 여행"], ["hi-routine", "Daily routine and time phrases", "하루 일과와 시간 표현"] ] } ] },

  ar: { variant: {en: "Modern Standard Arabic", ko: "현대 표준 아랍어"}, basis: {en: "Alif Baa, then Al-Kitaab Part One chapters 1-5", ko: "Alif Baa 후 Al-Kitaab 1권 1-5과"},
    src: ["Montgomery College ARAB 101 course outline (Alif Baa units 1-10, Al-Kitaab chapters 1-5)"], note: "The last four items go beyond the outline that was read and are common next steps. No spoken dialect is chosen yet.",
    stages: [
      { en: "Script and sounds", ko: "글자와 소리", items: [
        ["ar-letters", "Letters and sounds", "글자와 소리"], ["ar-vowels", "Short and long vowels", "단모음과 장모음"], ["ar-shapes", "Letter shapes: start, middle, end", "글자 모양: 처음, 중간, 끝"],
        ["ar-sukun-shadda", "Sukūn and shadda", "수쿤과 샷다"], ["ar-hamza", "Hamza, alif maqṣūra and tanwīn", "함자, 알리프 막수라, 탄윈"], ["ar-al", "ال and sun / moon letters", "ال과 태양 / 달 문자"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["ar-greetings", "Greetings and leave-taking", "만남과 헤어짐 인사"], ["ar-gender", "Masculine and feminine: ة", "남성과 여성: ة"], ["ar-pronouns", "Pronouns: أنا, أنتَ, هو, هي", "대명사: أنا, أنتَ, هو, هي"],
        ["ar-nominal", "Sentences with no 'is'", "be동사 없는 명사문"], ["ar-definite", "Definite and indefinite", "한정과 비한정"], ["ar-nisba", "Nisba adjectives: where you're from", "니스바 형용사: 출신 말하기"],
        ["ar-questions", "Question words: ما, من, أين, هل", "의문사: ما, من, أين, هل"], ["ar-numbers", "Numbers", "숫자"] ] },
      { en: "Building sentences", ko: "문장 만들기", items: [
        ["ar-idafa", "Iḍāfa: the X of Y", "이다파: Y의 X"], ["ar-possessive", "Possessive endings: ـي, ـكَ, ـه", "소유 접미사: ـي, ـكَ, ـه"], ["ar-adjectives", "Noun + adjective agreement", "명사 + 형용사 일치"], ["ar-plurals", "Plurals: sound and broken", "복수: 규칙과 불규칙"],
        ["ar-present", "Present-tense verbs", "현재 동사"], ["ar-verb-sentences", "Verb sentences and word order", "동사문과 어순"], ["ar-negation", "Negating the present: لا", "현재 부정: لا"], ["ar-adverbs", "Adverbs and time words", "부사와 시간 표현"],
        ["ar-have", "عند: to have", "عند: 가지고 있어요"], ["ar-past", "Past-tense verbs", "과거 동사"], ["ar-roots", "Roots and patterns", "어근과 패턴"], ["ar-directions", "Asking for help and directions", "도움 청하기와 길 묻기"] ] } ] },

  ru: { variant: {en: "Standard Russian", ko: "표준 러시아어"}, basis: {en: "TORFL Elementary (A1) state standard", ko: "토르플 기초 (A1) 국가 표준"},
    src: ["Russian state standard for the Elementary level (TORFL A1), copy hosted by Università di Bergamo"], note: "The standard lists requirements by category; the case order here is common course practice.",
    stages: [
      { en: "Script and sounds", ko: "글자와 소리", items: [
        ["ru-alphabet", "The Cyrillic alphabet", "키릴 문자"], ["ru-sounds", "Hard and soft, voiced and voiceless", "경음과 연음, 유성과 무성"], ["ru-stress", "Stress and vowel reduction", "강세와 모음 약화"], ["ru-intonation", "Intonation: statements and questions", "억양: 평서문과 의문문"] ] },
      { en: "First sentences", ko: "첫 문장", items: [
        ["ru-greetings", "Greetings: ты and вы", "인사: ты와 вы"], ["ru-eto", "Это: this is, with no 'is'", "Это: be동사 없이 '이것은'"], ["ru-gender", "Gender of nouns", "명사의 성"], ["ru-pronouns", "Personal and possessive pronouns", "인칭·소유 대명사"],
        ["ru-plural", "Plurals", "복수"], ["ru-present", "Present tense: two conjugations", "현재 시제: 1식과 2식 변화"], ["ru-questions", "Question words: кто, что, где", "의문사: кто, что, где"], ["ru-negation", "не and нет", "не와 нет"], ["ru-numbers", "Numbers", "숫자"] ] },
      { en: "The six cases", ko: "6격", items: [
        ["ru-prepositional", "Prepositional: where, about", "전치격: 장소, ~에 대해"], ["ru-accusative", "Accusative: objects and direction", "대격: 목적어와 방향"], ["ru-genitive", "Genitive: possession, absence, quantity", "생격: 소유, 부재, 수량"],
        ["ru-have", "У меня есть: to have", "У меня есть: 가지고 있어요"], ["ru-dative", "Dative: to whom, age, need", "여격: 받는 사람, 나이, 필요"], ["ru-instrumental", "Instrumental: with, profession", "조격: 함께, 직업"], ["ru-adjectives", "Adjectives agree", "형용사 일치"] ] },
      { en: "Verbs in time", ko: "동사와 시간", items: [
        ["ru-past", "Past tense", "과거 시제"], ["ru-future", "Future tense", "미래 시제"], ["ru-aspect", "Aspect: imperfective and perfective", "상: 불완료와 완료"], ["ru-motion", "Verbs of motion: идти / ехать", "운동 동사: идти / ехать"],
        ["ru-imperative", "Imperative", "명령법"], ["ru-connectors", "и, а, но, потому что", "и, а, но, потому что"], ["ru-time", "Time, days and dates", "시간, 요일, 날짜"] ] } ] }
};
