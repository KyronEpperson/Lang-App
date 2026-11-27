# nan-en pronunciation rules (KK)

Policy: docs/profiles/nan.md §6. The aid is **KK phonetic symbols** (Kenyon & Knott), produced by `tools/content/nan/kk.js` from the
IPA that zh-en / yue-en use (tools/content/zh/PRON-RULES.md A–D: OALD North American values, every content word stressed, weak forms).

## How to write a pron
1. Write the IPA exactly as zh-en would (copy it from the scaffold's yue history or zh-en's same card when the English is the same).
2. `node tools/content/nan/kk.js "/ˈkʌp əv ˈkɔːfi/"` → `/ˈkʌp əv ˈkɔfɪ/`. Paste the output. Never hand-type KK.
3. `node tools/content/nan/kk.js --check` must say "no IPA-only spans left"; `validate.js` enforces `pronPattern` (no ː, no ɜ).
Do NOT run `kk.js --files`: the scaffold was converted once (2026-11-27, 1,021 spans); a second run would turn KK /e/ into /ɛ/.

## Map (IPA → KK)
iː→i · i→ɪ (happy /ˈhæpɪ/) · uː→u · u→ʊ · e→ɛ (bed /ˈbɛd/) · eɪ→e (day /ˈde/) · oʊ→o (go /ˈgo/) · ɑː→ɑ · ɔː→ɔ ·
ɜːr→ɝ (bird /ˈbɝd/) · ər→ɚ except before a vowel (teacher /ˈtitʃɚ/, camera /ˈkæmərə/) · syllabic l→ḷ (people /ˈpipḷ/) ·
syllabic n→ṇ after t d s z (button /ˈbʌtṇ/, listen /ˈlɪsṇ/), ən after other consonants (seven /ˈsɛvən/, station /ˈsteʃən/) · ɡ→g.
Stress ˈ / ˌ as in IPA (Taiwan dictionaries may print ˋ / ˏ; the `pron` lesson says they are the same marks). ‖ = pause.

## Known limits (accepted)
- OALD /ɔːr/ becomes ɔr for door / four as well as horse (KK dictionaries write [dor]).
- "eɪ + ɪ" (staying /ˈsteɪŋ/) keeps the ɪ.
- No British values anywhere: the yue British → American table in `pron` is replaced by a KK ↔ IPA key table (profile §6).

## Names (from OALD-style IPA through kk.js; voice not verified)
| word | KK |
|---|---|
| Taiwan | /ˌtaɪˈwɑn/ |
| Taiwanese | /ˌtaɪwəˈniz/ |
| Taipei | /ˌtaɪˈpe/ |
| Tainan | /ˌtaɪˈnɑn/ |
| Taichung | /ˌtaɪˈtʃʊŋ/ |
| Lin | /ˈlɪn/ |
| Jay Chou | /ˌdʒe ˈtʃo/ |
| night markets | /ˈnaɪt ˌmɑrkɪts/ |
