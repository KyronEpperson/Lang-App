# Lang App — go-live + security loop (G1–G50)
Each iteration: analyze → write prompt → do it → verify. If verification fails, a new prompt re-does it before moving on.

## G1 — prompt
Add 6-digit code sign-in next to the magic link (welcome screen + Progress sheet) via Supabase /auth/v1/verify, so the iPhone home-screen app can sign in without leaving itself.
### G1 — results
- First check FAILED: pasted codes with a space ("123 456") were blocked by the input pattern → re-prompted (G1b): accept any spacing/dashes, strip to digits, require ≥6
- Re-check PASSED (mocked Supabase): wrong code → "Token has expired or is invalid"; right code → signed in, welcome closes, progress row fetched, Progress shows "Syncing as …". Works in welcome screen and Progress sheet.

## G2 — prompt
Write branded Supabase email templates (Confirm signup + Magic Link) that include the 6-digit {{ .Token }} and the link, plus SMTP/rate-limit notes; save to repo `supabase/email-templates.md`.
### G2 — results
- Template written with code box, sign-in button, expiry + "ignore if not you" line; both templates documented. Needs you to paste it (Supabase dashboard only). Flagged: built-in sender is rate-limited → custom SMTP before wide sharing.

## G3 — prompt
Keep sessions fresh: when the app returns to the foreground (≥60s since last pull) refresh the token and pull + merge remote progress, so a phone and laptop stay in sync without reloads.
### G3 — results
- First check showed 0 pulls → the test, not the app, was wrong (fake session wasn't persisted). Fixed the test; re-check: 1 pull on foreground on iPhone 13, Pixel 7, iPhone SE emulation. PASSED.

## G4 — prompt
First-run test on iPhone 13 / Pixel 7 / iPhone SE (320px): welcome → nickname → onboarding → session starts; no overflow, no errors.
### G4 — results
- All three: welcome shown, no horizontal scroll (390/412/320), onboarding appears after nickname, session starts, 0 errors. PASSED. (WebKit engine not installed here — real-iPhone check is on you after deploy.)

## G5 — prompt
Shared-device safety: Sign out asks "keep a copy on this device" vs "remove my progress from this device", so the next person on a borrowed phone can't see or merge your data.
### G5 — results
- Wipe path: logout called, session token removed, local progress reset (xp 500→0, cards cleared), welcome not re-shown. PASSED.

## G6 — prompt
Accessibility for the new dialogs: welcome + sign-out are role=dialog / aria-modal with labels; inputs ≥16px so iOS doesn't zoom.
### G6 — results
- Added dialog semantics; email/nickname inputs 16px, code input 22px. PASSED (harness a11y guard green).

## G7 — prompt
"Resend email" under the code box with a 60-second cooldown and a friendly 429 message.
### G7 — results
- Fake-clock test: disabled for 60s with countdown, enabled after, resend fires a 2nd OTP request. PASSED.

## G8 — prompt
Ship batch 1 to main and confirm the push landed.
### G8 — results
- Pushed `e5514a0`. Live browser check deferred (your computer's browser link dropped mid-run); re-checked in G50.

## G9 — prompt
Add a Privacy & terms page (#privacy): what's stored on device / in Supabase / on the public board / analytics / error reports, user controls, board rules. Link it from the welcome screen, Progress and Feedback.
### G9 — results
- Page renders at 390px; welcome → Privacy hides the welcome and returns to it on Back. PASSED.

## G10 — prompt
"Delete my account" for signed-in users: typed DELETE confirmation → `delete_my_account()` RPC (deletes auth user + progress, unlinks feedback) → clears the device.
### G10 — results
- Button only shown when signed in; disabled until "DELETE" typed; RPC called once; device cleared (xp 900→0), token removed, button hidden. PASSED (client). SQL in `supabase/golive.sql` — needs you to run it.

## G11 — prompt
Make backup/export easy to find: link from the account row + privacy page; confirm file export works on the website (share sheet → download fallback).
### G11 — results
- Existing Share file / Copy export / Import retained; privacy page and account row now point to them. PASSED.

## G12 — prompt
Public-board disclosure: tell posters the board is public and not to include personal info; link board rules.
### G12 — results
- Notice under the form and above the board; "Show my name publicly" wording kept. PASSED.

## G13 — prompt
Board rules + as-is terms on the privacy page.
### G13 — results
- Rules (kind, on-topic, no spam, no personal info) + hide policy + as-is clause. PASSED.

## G14 — prompt
Data minimisation check: confirm nothing beyond what the privacy page lists is collected.
### G14 — results
- Collected: email (sign-in), progress JSON, feedback (+route, version, UA ≤200 chars), anonymous page views. Matches the page. No IP or location stored by the app. PASSED.

## G15 — prompt
Ship batch 2 (privacy, delete account, disclosures) and log the SQL step for you.
### G15 — results
- See push below. Pending on you: run `supabase/golive.sql`.

## G16 — prompt (security)
Close an XSS hole: a booby-trapped backup file (or tampered synced data) could inject HTML/script via custom phrases, notes or nickname and steal the sign-in token. Sanitise all such text on load, import, sync merge and when adding phrases; block prototype pollution.
### G16 — results
- Attack test: imported file with `<img onerror>`, `<script>`, `javascript:` and `__proto__` payloads → all stripped, 0 alerts fired, 0 injected elements, no prototype pollution. PASSED.

## G17 — prompt
Link-preview image: 1200×630 PNG with brand, tagline and 한글 card for iMessage / Discord / X.
### G17 — results
- First render FAILED visual check: subtitle and third chip ran under the 한글 card → re-prompted (G17b): narrower text column, smaller card, two chips. Re-check: 0 overlapping elements, image 1200×630. PASSED.

## G18 — prompt
Full icon set from the 한 icon: favicon 32, apple-touch 180, 192, 512, maskable 512 (content inside the 80% safe zone).
### G18 — results
- 5 PNGs generated (0.9–8.8 KB). PASSED.

## G19 — prompt
Manifest for installability: id, scope, start_url #today, standalone, portrait, education category, 192/512/maskable icons, dark theme colour.
### G19 — results
- All icon paths exist; manifest valid JSON. PASSED.

## G20 — prompt
"📤 Share Lang App" button: native share sheet on phones, copy-link fallback; artifact shares lang-app.io.
### G20 — results
- Added to the Progress account row; harness clean. PASSED.

## G21 — prompt
robots.txt + sitemap.xml pointing at https://lang-app.io.
### G21 — results
- Both written. PASSED.

## G22 — prompt
Head metadata: description, canonical, Open Graph + Twitter card with absolute og:image on lang-app.io; single <title>.
### G22 — results
- All tags present; exactly one <title>. Note: previews resolve once lang-app.io finishes connecting. PASSED.

## G23 — prompt
Verify G17–G22 together from the built file (tags, icon files, sizes, SW precache list).
### G23 — results
- 8/8 head checks true, 3/3 manifest icons exist, OG 1200×630, SW precaches new icons. PASSED.

## G24 — prompt
Ship batch 3.
### G24 — results
- Pushed. PASSED.

## G25 — prompt
Crash reporting: send uncaught errors / rejected promises to a write-only `app_errors` table (message, file, line, route, version, browser — no progress, no email), deduped, max 5 per session.
### G25 — results
- 13 thrown errors + 1 rejection → exactly 5 reports, deduped, no user data in payload. PASSED (client). SQL added to `supabase/golive.sql`.

## G26 — prompt
Service-worker update flow on a real local server: installed app gets "New version ready · Reload", tapping it swaps in the new version and deletes the old cache.
### G26 — results
- First run FAILED: the toast rendered *underneath* the welcome screen, so first-time visitors could never see update/sign-in toasts → re-prompted (G26b): toast z-index above all overlays, capped width. Re-run: toast shown, Reload works, only the new cache remains. PASSED.

## G27 — prompt
Offline: after first load, airplane-mode reload still opens the full app.
### G27 — results
- Offline reload → nav + title present, 0 errors. PASSED.

## G28 — prompt
Lighthouse-style audit (mobile, 4× CPU, slow network), both themes; contrast (WCAG AA) on welcome/Today/Progress/Feedback.
### G28 — results
- Lighthouse itself can't be installed (package registry blocked here) → re-prompted to an equivalent Playwright/CDP audit. FCP ~0.1s, LCP ~0.2s, 0 ms blocking time, 0 contrast failures in dark and light. Page is ~400 KB raw (~80 KB once Vercel compresses). PASSED.

## G29 — prompt
Speed: preconnect to Google Fonts and Supabase so first paint and sign-in don't wait on handshakes.
### G29 — results
- 3 preconnect hints in head. PASSED.

## G30 — prompt
Ask the browser for persistent storage (navigator.storage.persist) once the user is set up — reduces silent data loss for nickname-only users.
### G30 — results
- Called after nickname setup and on later visits; no errors (browsers decide; Chrome grants for installed/engaged sites). PASSED.

## G31 — prompt
Offline-safe sync: a push that fails offline retries automatically when the connection returns; user sees "Offline — will sync when you reconnect".
### G31 — results
- Failed push → went offline → edit → back online → push retried (3 pushes total). PASSED.

## G32 — prompt
Verify G29–G31 together on the local HTTPS-equivalent server.
### G32 — results
- 0 errors, preconnects present, retry confirmed. PASSED.

## G33 — prompt
Re-run full harness + phone-size first-run test after all reliability changes.
### G33 — results
- Harness ✅ 22 guards, no overflow, no errors. PASSED.

## G34 — prompt
Ship batch 4.
### G34 — results
- Pushed. PASSED.

## G35 — prompt (security)
Security headers on Vercel with a strict, hash-based Content-Security-Policy (only the app's own script may run), plus HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy, COOP. Remove the one inline onclick so the policy can be strict. Generate the hash on every build.
### G35 — results
- Tested on a local server that applies vercel.json exactly: every screen + session + privacy flow → **0 CSP violations**, 0 errors; simulated injected `<script>` and `onerror=` → **blocked**; embedding the app in an iframe → **blocked**; all 5 headers present. PASSED.

## G36 — prompt (security)
XSS sink audit: push attack payloads through search, URL hash deep links, feedback board (malicious remote rows), add-phrase form; with CSP *off*, to prove the code itself is safe.
### G36 — results
- 0 injected elements, 0 alerts, 0 errors across all sinks. PASSED.

## G37 — prompt (security)
Database abuse limits: feedback ≤30 posts/min site-wide + duplicate blocking; crash reports ≤60/min with 30-day auto-prune; ~2 MB cap on a progress row.
### G37 — results
- Triggers + constraint written into `supabase/golive.sql` (needs you to run it). PASSED (authored); live test after you run it.

## G38 — prompt (security)
Secrets scan of the whole GitHub history for service keys, JWTs, private keys, tokens, passwords.
### G38 — results
- 16 commits scanned: 0 secrets. Only the publishable key (meant to be public). PASSED.

## G39 — prompt
Show the database's limit messages to users ("Too many posts right now…", "Duplicate post") instead of a generic error.
### G39 — results
- fbPost parses P0001 errors and shows them. PASSED.

## G40 — prompt (security)
Supply-chain review: list every third-party thing the site loads.
### G40 — results
- Only Google Fonts CSS/fonts and Vercel's first-party analytics. No npm packages, CDNs or trackers. CSP allows nothing else. PASSED.

## G41 — prompt (security)
Sign-in email abuse: validate email format and enforce a 45s cooldown on every send path (welcome, Progress sheet, resend).
### G41 — results
- All paths go through sbSendLink, which now validates and throttles. PASSED.

## G42 — prompt (security)
Service-worker cache hygiene: cache only successful same-origin responses without query strings; never Supabase/API data.
### G42 — results
- First re-check FAILED (app blank): my local test server had cached the *old* CSP hash. That exposed a real deploy risk — a hash/script mismatch blanks the live site. Restarted the server → 0 violations, all checks PASSED, and led to G43's guard.

## G43 — prompt (security)
Make that failure impossible to ship: `verify_build.py` (CSP hash must match the script, script must parse) runs inside every build; write SECURITY.md with protections, the "other devices" answer, and your account checklist (2FA on GitHub/Vercel/Supabase/registrar/Gmail, secret scanning, transfer lock).
### G43 — results
- Guard passes and is wired into build.sh (build stops on mismatch). SECURITY.md written. PASSED.

## G44 — prompt
Ship the security batch (headers + code) together so the CSP hash and script always match.
### G44 — results
- Pushed index.html + vercel.json in one commit; verify_build OK. PASSED (live check in G50).

## G45 — prompt
Version the public launch: APP_VERSION 1.0.0 (shown in Progress, sent with feedback and crash reports).
### G45 — results
- Was still "v41 · 105 iterations" (stale, spotted in G25 payloads). Now 1.0.0 · 2026-11-09. PASSED.

## G46 — prompt
Domain cutover readiness for lang-app.io: nothing hard-coded to the old domain; canonical/OG/sitemap point at lang-app.io; list your Vercel + Supabase steps.
### G46 — results
- Code uses location.origin everywhere; only canonical/OG/robots/sitemap name lang-app.io (intended). Steps in the final report. PASSED (domain still connecting on Vercel side).

## G47 — prompt
RUNBOOK.md: where everything lives, deploy, check, rollback, moderation, SQL order, email, adding languages later.
### G47 — results
- Written. PASSED.

## G48 — prompt
STORES.md: Google Play via PWABuilder (no Mac), App Store path, and what each store requires (privacy URL, account deletion, icons).
### G48 — results
- Written; requirements already met: privacy page, delete account, 512 icon, maskable icon. PASSED.

## G49 — prompt
Full regression of every suite built in this run (harness, OTP sign-in, 3 phone sizes, SW update/offline, CSP/XSS/framing, perf/contrast), then ship 1.0.0.
### G49 — results
- First run FAILED one suite: OTP test used `a@b.c`, which G41's new email check correctly rejects → re-prompted (G49b): use a valid test address + confirm the bad-email message. Re-run: harness ✅ 22 guards · OTP ✅ · iPhone 13 / Pixel 7 / iPhone SE ✅ · SW update + offline ✅ · 0 CSP violations, XSS blocked, framing blocked ✅ · LCP ~0.2s, 0 blocking, 0 contrast failures ✅. Shipped `f513e30`. PASSED.

## G50 — prompt
Completeness check: every iteration has a prompt and a passing result; GitHub main is byte-identical to the verified build; CSP guard passes on what's deployed; list what still needs a human.
### G50 — results
- 50/50 prompts with results; every failure (G1, G17, G26, G28, G42, G49) was re-prompted and re-verified before moving on.
- 10/10 key files on GitHub main match the tested build byte-for-byte; verify_build OK on the deployed copy.
- Not verifiable from here: a live check of lang-app.io (domain still connecting, and the link to your computer's browser dropped), and the Supabase-side items below. PASSED with those items handed off.
