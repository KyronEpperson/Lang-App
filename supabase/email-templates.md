# Lang App — Supabase email templates
Supabase → Authentication → Emails → Templates. Paste each block into the matching template's **Message body** (switch to "Source"), set the subject, Save.
Both templates need `{{ .Token }}` (the sign-in code) — that's what lets the iPhone home-screen app sign in.

## Confirm signup  (first-time users)
Subject: `Your Lang App code: {{ .Token }}`
```html
<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:440px;margin:0 auto;padding:24px;color:#1d1f24">
  <div style="font-size:26px;font-weight:700">Lang App</div>
  <p style="font-size:16px;line-height:1.5">Your Lang App sign-in code is:</p>
  <div style="font:700 34px/1 ui-monospace,Menlo,monospace;letter-spacing:6px;background:#f3efe6;border-radius:12px;padding:18px;text-align:center;-webkit-user-select:all;user-select:all;cursor:pointer">{{ .Token }}</div>
  <p style="font-size:13px;color:#6b6f76;line-height:1.5;margin-top:8px">Tap the code once to select all of it, copy it, then press <b>Paste</b> in the app.</p>
  <p style="font-size:15px;line-height:1.5">Or tap to sign in on this device:</p>
  <p><a href="{{ .ConfirmationURL }}" style="display:inline-block;background:#c2402f;color:#fff;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:600">Sign in to Lang App</a></p>
  <p style="font-size:13px;color:#6b6f76;line-height:1.5">The code expires in 1 hour. If you didn't ask for this, ignore this email — nobody can sign in without the code.</p>
</div>
```

## Magic Link  (returning users)
Subject: `Your Lang App code: {{ .Token }}`
Use the same HTML as above (it already uses `{{ .ConfirmationURL }}` and `{{ .Token }}`).

## URL Configuration (Authentication → URL Configuration)
- **Site URL**: `https://lang-app.io`
- **Redirect URLs**: add `https://lang-app.io/**` and remove the `lang-app-3qdw.vercel.app` entries (that address now redirects to lang-app.io). Without this the email link opens the vercel.app address instead of lang-app.io.

## Also in Authentication settings
- **Emails → SMTP**: the built-in sender is capped at a few emails per hour. Before sharing widely, plug in a free SMTP (Resend, Brevo) so sign-in emails don't get rate-limited.
- **Providers → Email**: keep "Confirm email" ON. OTP expiry 3600s is fine.

## Why there is no Copy button in the email
Email apps do not run scripts, so a real one-tap Copy button cannot work inside an email. Instead the code box is set to select the whole code with one tap (`user-select:all`), the app has a Paste button, and the code is in the subject line so phone notifications show it.
Apple's autofill (the code offered above the keyboard) needs: the code input marked `autocomplete="one-time-code"` (done), the email to arrive in Apple Mail on the same device, and wording like "code is 12345678" (done above).
