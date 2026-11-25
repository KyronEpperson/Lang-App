#!/usr/bin/env python3
# PM-1: the four new interface strings of the Practice rework, added to tools/i18n/<lang>/ui.json for every language. Safe to run twice.
# Then: python3 tools/i18n/build_keys.py && for each language: python3 tools/i18n/gen.py <lang> && node tools/i18n/validate.js <lang>
# Written by the engine thread, not read by native speakers; the wording follows each dictionary's own terms (category, deck, quiz).
import json, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
D = os.path.join(ROOT, 'tools', 'i18n')
KEYS = ['Learn', 'All categories', 'All decks in this category', 'Just learn (no quizzes)']
CTX = {
 'Learn': ('button', 'main button on the Practice screen: starts learning the picked deck, five new cards at a time (imperative / action label)'),
 'All categories': ('label', 'first option of the Category dropdown in the deck picker: no category filter'),
 'All decks in this category': ('label', 'first option of the Deck dropdown in the Practice deck picker: selects every deck of the chosen category'),
 'Just learn (no quizzes)': ('label', 'checkbox on the Practice screen: when ticked, Learn only shows the cards and skips the quiz after each five'),
}
T = {
 'ar': ['تعلّم', 'كل الفئات', 'كل مجموعات هذه الفئة', 'تعلّم فقط (بلا اختبارات)'],
 'bn': ['শিখুন', 'সব ধরন', 'এই ধরনের সব ডেক', 'শুধু শিখুন (কুইজ ছাড়া)'],
 'ceb': ['Tun-i', 'Tanang kategorya', 'Tanang deck niining kategoryaha', 'Pagtuon lang (walay quiz)'],
 'cs': ['Učit se', 'Všechny kategorie', 'Všechny balíčky v této kategorii', 'Jen se učit (bez kvízů)'],
 'de': ['Lernen', 'Alle Kategorien', 'Alle Stapel dieser Kategorie', 'Nur lernen (ohne Quiz)'],
 'es': ['Aprender', 'Todas las categorías', 'Todos los mazos de esta categoría', 'Solo aprender (sin tests)'],
 'fr': ['Apprendre', 'Toutes les catégories', 'Tous les paquets de cette catégorie', 'Apprendre seulement (sans quiz)'],
 'hi': ['सीखें', 'सभी श्रेणियाँ', 'इस श्रेणी के सभी डेक', 'सिर्फ़ सीखें (टेस्ट नहीं)'],
 'hmn': ['Kawm', 'Txhua hom', 'Txhua deck hauv hom no', 'Kawm xwb (tsis muaj quiz)'],
 'id': ['Belajar', 'Semua kategori', 'Semua dek di kategori ini', 'Belajar saja (tanpa kuis)'],
 'it': ['Impara', 'Tutte le categorie', 'Tutti i mazzi di questa categoria', 'Solo imparare (senza quiz)'],
 'ja': ['覚える', 'すべてのカテゴリ', 'このカテゴリのデッキすべて', '覚えるだけ（クイズなし）'],
 'kn': ['ಕಲಿಯಿರಿ', 'ಎಲ್ಲ ವರ್ಗಗಳು', 'ಈ ವರ್ಗದ ಎಲ್ಲ ಡೆಕ್‌ಗಳು', 'ಕಲಿಕೆ ಮಾತ್ರ (ಕ್ವಿಜ್ ಇಲ್ಲ)'],
 'ko': ['배우기', '전체 분류', '이 분류의 모든 덱', '배우기만 (퀴즈 없이)'],
 'mr': ['शिका', 'सर्व प्रकार', 'या प्रकारातील सर्व डेक', 'फक्त शिका (क्विझ नाही)'],
 'nan': ['學', '全部類別', '這類的全部牌組', '干焦學（無小考）'],
 'pa': ['ਸਿੱਖੋ', 'ਸਾਰੀਆਂ ਕਿਸਮਾਂ', 'ਇਸ ਕਿਸਮ ਦੇ ਸਾਰੇ ਡੈੱਕ', 'ਸਿਰਫ਼ ਸਿੱਖੋ (ਕੁਇਜ਼ ਨਹੀਂ)'],
 'pl': ['Nauka', 'Wszystkie kategorie', 'Wszystkie talie w tej kategorii', 'Tylko nauka (bez quizów)'],
 'pt': ['Aprender', 'Todas as categorias', 'Todos os baralhos desta categoria', 'Só aprender (sem testes)'],
 'ru': ['Учить', 'Все категории', 'Все колоды этой категории', 'Только учить (без тестов)'],
 'te': ['నేర్చుకోండి', 'అన్ని వర్గాలు', 'ఈ వర్గంలోని అన్ని డెక్‌లు', 'నేర్చుకోవడం మాత్రమే (క్విజ్‌లు లేవు)'],
 'th': ['เรียน', 'ทุกหมวดหมู่', 'ชุดการ์ดทั้งหมดในหมวดหมู่นี้', 'เรียนอย่างเดียว (ไม่มีแบบทดสอบ)'],
 'tl': ['Mag-aral', 'Lahat ng kategorya', 'Lahat ng deck sa kategoryang ito', 'Mag-aral lang (walang quiz)'],
 'ur': ['سیکھیں', 'تمام زمرے', 'اس زمرے کے تمام ڈیک', 'صرف سیکھیں (کوئز نہیں)'],
 'vi': ['Học', 'Tất cả các loại', 'Tất cả bộ thẻ thuộc loại này', 'Chỉ học (không trắc nghiệm)'],
 'yue': ['學', '全部類別', '呢個類別嘅全部卡組', '淨係學（冇小測）'],
 'zh': ['学习', '全部类别', '此类别的全部卡组', '只学习（不测验）'],
}
langs = sorted(d for d in os.listdir(D) if os.path.isfile(os.path.join(D, d, 'ui.json')))
assert not [l for l in langs if l not in T], [l for l in langs if l not in T]
for l in langs:
    f = os.path.join(D, l, 'ui.json'); raw = open(f, encoding='utf8').read(); doc = json.loads(raw); E = doc['exact']; n = 0
    for i, k in enumerate(KEYS):
        if k in E: continue
        E[k] = T[l][i] if l == 'ko' else {'t': T[l][i], 'ko': T['ko'][i], 'kind': CTX[k][0], 'context': CTX[k][1]}; n += 1
    if n: open(f, 'w', encoding='utf8').write(json.dumps(doc, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))
    print('%-4s %d added' % (l, n))
