# Getting Lang App into the app stores

Lang App is an installable PWA, so the stores can take it with a thin wrapper — no rewrite.

## Google Play (do this first — no Mac needed)
1. Go to **pwabuilder.com**, enter `https://lang-app.io`, choose **Android** → it generates a signed Trusted Web Activity package.
2. Google Play Console account ($25 one-time) → new app → upload the .aab.
3. Host the `assetlinks.json` PWABuilder gives you at `https://lang-app.io/.well-known/assetlinks.json` (add the file to the repo).
4. Store listing needs: privacy policy URL → `https://lang-app.io/#privacy`, account-deletion info → Progress → Delete my account (already built), 512px icon (`icon-512.png`), feature graphic 1024×500, screenshots.

## Apple App Store
- Needs an Apple Developer account ($99/yr) and Xcode → requires a Mac, or a cloud Mac (MacinCloud, GitHub Actions macOS runner, Codemagic).
- PWABuilder → **iOS** produces an Xcode project; or wrap with Capacitor.
- Apple rejects thin web wrappers unless the app adds value; the offline mode, audio, home-screen install and account features help — consider adding push reminders (study-time notifications) before submitting.
- Required: privacy policy URL, in-app account deletion (done), Sign in with Apple only if you add other social logins (email OTP alone is fine).
