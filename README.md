# Silvatein — Website

Premium women's apparel — a static editorial website.
Pages: **Home**, **Collections**, **About**, **Contact**.

Built as plain HTML, CSS and JavaScript — no build step, no framework. It runs
anywhere that can serve static files.

```
site/
├── index.html          # Home
├── collections.html    # Collections
├── about.html          # About
├── contact.html        # Contact
├── assets/
│   ├── styles.css      # All styling + design tokens
│   └── app.js          # Nav, mobile menu, scroll reveals
├── images/             # Product photography
├── package.json
└── vercel.json
```

---

## Run it locally

You only need a static file server. Two easy options:

**Option A — Node (recommended)**
```bash
npx serve .
```
Then open the URL it prints (usually http://localhost:3000).

**Option B — Python**
```bash
python3 -m http.server 3000
```
Then open http://localhost:3000.

> Tip: just double-clicking `index.html` works too, but using a local server
> makes the page links behave exactly like they will in production.

---

## Push to GitHub

You need a free [GitHub](https://github.com) account and
[git](https://git-scm.com/downloads) installed.

1. **Create an empty repo** on GitHub
   → click **New**, name it e.g. `silvatein`, leave it empty (no README), click
   **Create repository**. Copy the repo URL it shows you, e.g.
   `https://github.com/your-username/silvatein.git`.

2. **In a terminal**, from inside this `site/` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Silvatein website"
   git branch -M main
   git remote add origin https://github.com/your-username/silvatein.git
   git push -u origin main
   ```

3. Refresh the GitHub page — your files are now online. 🎉

> Already have the repo set up? For future changes just run:
> ```bash
> git add .
> git commit -m "Update site"
> git push
> ```

---

## Deploy to Vercel

Vercel hosts this for free and gives you a live URL with HTTPS.

### Easiest way — connect GitHub (auto-deploys on every push)

1. Go to [vercel.com](https://vercel.com) and sign up / log in
   (choose **Continue with GitHub**).
2. Click **Add New… → Project**.
3. **Import** the `silvatein` repo you just pushed.
4. Framework Preset: **Other** (it's a plain static site — no settings needed).
   Leave Build Command and Output Directory **empty**.
5. Click **Deploy**.

After ~20 seconds you'll get a live URL like
`https://silvatein.vercel.app`. Every time you `git push`, Vercel
redeploys automatically.

### Alternative — deploy straight from your computer (no GitHub)

```bash
npm i -g vercel
vercel
```
Answer the prompts (accept the defaults). Run `vercel --prod` to push it live.

---

## Custom domain (optional)

In your Vercel project: **Settings → Domains → Add**, enter your domain
(e.g. `silvatein.com`), and follow the DNS instructions. Vercel issues the
SSL certificate automatically.

---

## Editing content

- **Text & links** live directly in the `.html` files.
- **Colours, fonts, spacing** are CSS variables at the top of
  `assets/styles.css` (`:root { … }`).
- **Photos** are in `images/`. To swap one, replace the file (keep the same
  filename) or update the `src` in the HTML.
- **Instagram / WhatsApp links** — search the HTML for `instagram.com` and
  `wa.me`. The WhatsApp number is currently a placeholder (`923000000000`) —
  replace it with the real number.
