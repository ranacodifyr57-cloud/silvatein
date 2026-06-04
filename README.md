# Silvatein — Website (Rebrand v2, black-led)

Premium women's apparel. Crafted in Pakistan, delivered worldwide.
Next.js (App Router) + Tailwind. This is the **complete, runnable project.**

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy to Vercel

```bash
git add .
git commit -m "Rebrand v2: black-led, botanical, real photos"
git push
```

If the repo is connected to Vercel it deploys on push. First time:
**vercel.com → Add New → Project → import this repo → Deploy.**

## ⚠️ Set before going live

- **WhatsApp number** — open `src/data/site.js` and replace `923000000000`
  with your real number (full international format, no `+`, no leading `0`,
  e.g. `923001234567`). All "Order on WhatsApp" links use it.
- **Email** — `hello@silvatein.com` in the same file; change if different.
- **Instagram / TikTok** — already set to `@silvateinofficial_`; confirm correct.

## What changed in v2

- **Black-led canvas** (noir `#0E0D0A`, ivory text) — matches the real
  Instagram identity instead of the old beige template.
- **Logo + Urdu featured** in the nav, hero, marquee and footer.
- **Botanical line-art** (`<Sprig/>` in `components/Logo.js`) recurs as a thread.
- **Festive jewel-tone** accents (rust / gold / sage).
- **Real photos** in `public/images/` power the home hero, collection cards
  and story. Swap any file (keep the same filename) to update a card.
- **Mobile-first**, 48px tap targets, no horizontal overflow.

## Content note (important)

`src/data/products.js` ships with an **empty `products` array** — the previous
per-item names and exact PKR prices were unverified, so they were removed to
avoid publishing invented content. The home page is DM-to-order and shows no
prices. The `/collections` and `/collections/[slug]` pages render a graceful
"order on Instagram" state until real product data is added. Send real
products/photos/prices and they can be reinstated properly.

## Structure

```
src/app/        layout, globals.css, home (page.js), about, contact, collections
src/components/ Navbar, Hero, Marquee, Collections, Footer, Logo (+ Sprig/Emblem),
                Reveal, SectionHeading, CollectionCard, ProductGrid, ProductCard, Placeholder
src/data/       site.js (contact + links), products.js (collections)
public/         logo.jpeg, images/*.webp
```
