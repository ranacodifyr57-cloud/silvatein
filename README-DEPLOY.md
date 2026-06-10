# Silvatein — Deploy Notes

Static site, zero build step. Structure:

```
index.html      ← the entire site (single file)
img/            ← photos (web-optimized)
video/          ← 2 short mp4 loops (autoplay muted, used in the Lookbook)
```

## Deploy to Vercel
Either:
- `npx vercel --prod` from this folder, or
- Vercel dashboard → Add New Project → drag this folder in.

No framework preset needed (select "Other"). No env vars, no build command, output dir = root.

## Pending placeholders (intentional — do NOT invent values)
- WhatsApp links are `https://wa.me/` (no number yet) — client will supply; then append the number in international format to all 5 occurrences, e.g. `https://wa.me/92XXXXXXXXXX`.
- TikTok handle (`@silvatein`) and `hello@silvatein.com` are unconfirmed.

## Do not change
- Fonts (Fraunces / Hanken Grotesk / Noto Nastaliq Urdu via Google Fonts)
- Colors, copy, or layout — design is client-approval pending as-is.
- Videos must keep `autoplay muted loop playsinline` (required for iPhone autoplay).
