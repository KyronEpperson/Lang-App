# Lang App — security notes

## What protects users
- **Strict Content-Security-Policy** (vercel.json): only the app's own script (pinned by SHA-256 hash) can run. Injected `<script>`, inline `onerror=` handlers, other sites' scripts, plugins and framing are all blocked. Tested: simulated XSS blocked, 0 violations in normal use.
- **Other headers**: HSTS (HTTPS only, 2 years), X-Frame-Options DENY (no clickjacking), nosniff, strict referrer, Permissions-Policy (camera/mic/location/payment off), COOP same-origin.
- **Output escaping + input sanitising**: feedback board, names, custom phrases, notes, imports and synced data are escaped/stripped before rendering. Tested with XSS payloads through search, URL hash, board, add-phrase form and backup import: 0 injections.
- **Database (Supabase) row-level security**: each user can only read/write their own progress row; feedback is insert-only for the public with safe columns readable; only admins can heart/complete/hide; nobody can impersonate another user or the developer. Account deletion removes the auth user + progress.
- **Abuse limits**: feedback capped at 30 posts/min site-wide with duplicate blocking; crash reports capped at 60/min and auto-pruned after 30 days; progress rows capped at ~2 MB; client-side cooldowns on posting and sign-in emails.
- **No secrets in the repo**: only the Supabase *publishable* key (designed to be public; RLS enforces access). History scanned — no service keys, tokens or private keys.
- **Service worker** caches only same-origin OK responses and fonts; never Supabase/API data.

## Can this app reach users' (or your) other devices?
No. It's a web page running in the browser sandbox: it can't read files, other apps, contacts, the camera/mic (also disabled by policy) or other devices on the network. The realistic risks are (1) someone taking over **your** GitHub / Vercel / Supabase / domain accounts and shipping bad code, and (2) script injection — covered by the CSP above.

## Your account checklist (do these once)
1. **GitHub**: Settings → Password and authentication → enable 2FA (passkey or authenticator app). Settings → Code security → enable secret scanning + push protection on Lang-App.
2. **Vercel**: Account → Security → enable 2FA. Project → Settings → Deployment Protection: keep previews protected; production public.
3. **Supabase**: Account → enable MFA. Never paste the `service_role` / secret key anywhere in the app or repo.
4. **Domain (lang-app.io)**: registrar account 2FA + "transfer lock" on.
5. **Email (Gmail)**: 2-Step Verification on — it's the master key for all of the above.
6. Use unique passwords (a password manager) for each of these.

## Before every deploy
`python3 verify_build.py` — fails if the CSP hash doesn't match the app script (which would blank the site) or the script doesn't parse.

## Reporting a problem
Feedback tab → 🐞 Bug (post anonymously if sensitive).
