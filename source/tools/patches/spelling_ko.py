#!/usr/bin/env python3
"""Add the spelling-patterns section to the end of the ko `alphabet` lesson,
and its flashcards to tools/sections/ko-en/sections.json (alphabet, section 4)."""
import os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/ko/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/ko-en/sections.json")

MARK = "<h3>글자가 모이면: 영어 철자 읽기</h3>"

SECTION = MARK + """
<p>한글은 글자마다 소리가 거의 정해져 있지만, 영어는 글자 두세 개가 모여 <b>새로운 소리 하나</b>를 만들기도 해요. 글자 이름을 알았으니 이제 자주 나오는 묶음을 익혀 둬요. 그러면 처음 보는 단어도 소리 내어 읽을 수 있어요.</p>
<p><b>sh</b>는 '쉬', <b>ch</b>는 '취'예요. 하지만 school처럼 ch가 '크'로 나는 단어도 있어요. <b>th</b>는 ㅆ도 ㄷ도 아닌 소리인데, 다음 과에서 자세히 볼 거예요. <b>ph</b>는 p가 아니라 f 소리예요. <b>kn</b>의 k와 <b>wr</b>의 w는 소리가 나지 않아요(know, write).</p>
<p><b>모음 + 자음 하나 + e</b>로 끝나는 단어에서 끝의 e는 소리가 나지 않고, 앞의 모음을 <b>글자 이름대로</b> 읽게 해요. he, she, me, we처럼 모음이 e 하나뿐인 짧은 단어에서는 e가 '이'로 소리 나요. cake는 '케이크', bike는 '바이크'예요. 단, have, give, come, love는 예외라서 따로 외워야 해요. <b>ee</b>는 길게 '이'예요. ea도 대개 '이'(eat, sea)지만 bread, head는 '에'예요. <b>oo</b>는 길게 '우'인데 book, good은 짧은 '우'예요(북, 굳). <b>igh</b>는 '아이'로 읽고, gh는 소리가 없어요. <b>ng</b>는 받침 ㅇ처럼 끝내고 뒤에 '그'를 붙이지 않아요. 규칙을 먼저 알고, 예외는 만날 때마다 하나씩 외우면 돼요.</p>
<div class="tbl"><table><tr><th>철자</th><th>소리</th><th>예</th></tr><tr><td class="k">sh</td><td>쉬</td><td>ship, fish</td></tr><tr><td class="k">ch</td><td>취 (school은 '스쿨')</td><td>chair, lunch</td></tr><tr><td class="k">th</td><td>쓰 / 드 (th), 다음 과에서 연습</td><td>thank, mother</td></tr><tr><td class="k">ph</td><td>프 (f)</td><td>phone, photo</td></tr><tr><td class="k">ng</td><td>ㅇ 받침 (끝에 '그' 없이)</td><td>sing, long</td></tr><tr><td class="k">kn</td><td>ㄴ (k는 소리 없음)</td><td>know, knee</td></tr><tr><td class="k">a-e</td><td>에이 (have는 예외)</td><td>cake, name</td></tr><tr><td class="k">i-e</td><td>아이 (give는 예외)</td><td>bike, time</td></tr><tr><td class="k">o-e</td><td>오우 (come, love는 예외)</td><td>home, nose</td></tr><tr><td class="k">ee</td><td>이 (길게)</td><td>see, green</td></tr><tr><td class="k">oo</td><td>우 (book, good은 짧게)</td><td>moon, food</td></tr><tr><td class="k">igh</td><td>아이 (gh는 소리 없음)</td><td>night, high</td></tr></table></div>
{{tiles:sh=쉬 ch=취 th=쓰·드_(th) ph=프_(f) ng=ㅇ_받침 kn=ㄴ_(n) a-e=에이 i-e=아이 o-e=오우 ee=이 oo=우 igh=아이}}"""

ANCHOR = 'jay.park@mail.com → "jay dot park at mail dot com".</div>`},'

CARDS = [
    ["ship", "쉽", "배 (sh)", ""],
    ["chair", "체어", "의자 (ch)", ""],
    ["phone", "포운 (f)", "전화기, 휴대폰 (ph)", ""],
    ["know", "노우", "알다 (k는 소리 없음)", ""],
    ["cake", "케이크", "케이크 (a-e)", ""],
    ["bike", "바이크", "자전거 (i-e)", ""],
    ["home", "호움", "집 (o-e)", ""],
    ["green", "그린", "초록색 (ee)", ""],
    ["moon", "문", "달 (oo)", ""],
    ["night", "나잇", "밤 (igh)", ""],
]


def patch_lessons():
    src = open(LESSONS, encoding="utf-8").read()
    assert MARK not in src, "lesson section already applied"
    assert src.count(ANCHOR) == 1, "anchor not found exactly once"
    new_anchor = ANCHOR[:-len("`},")] + "\n" + SECTION + "`},"
    src = src.replace(ANCHOR, new_anchor)
    open(LESSONS, "w", encoding="utf-8").write(src)


def patch_sections():
    src = open(SECTIONS, encoding="utf-8").read()
    start = src.index('\n "alphabet": {')
    end = src.index('\n },\n "pron": {', start)
    block = src[start:end]
    assert '"4":' not in block, "sections entry already applied"
    q = lambda s: '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'
    lines = ",\n".join("    [" + ", ".join(q(f) for f in c) + "]" for c in CARDS)
    entry = ',\n  "4": {"add": [\n' + lines + "\n  ]}"
    src = src[:end] + entry + src[end:]
    open(SECTIONS, "w", encoding="utf-8").write(src)


if __name__ == "__main__":
    patch_lessons()
    patch_sections()
    import json
    json.load(open(SECTIONS, encoding="utf-8"))
    print("spelling_ko: applied")
