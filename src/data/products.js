// ─────────────────────────────────────────────────────────────
//  SILVATEIN — collections & products
//
//  Home collection cards now use real photos in /public/images/.
//  `fb` maps to the festive gradient fallback class in globals.css
//  (fb-eid / fb-frocks / fb-diaries) shown only if an image is missing.
//  `tone` is kept for the Placeholder component used on other pages.
// ─────────────────────────────────────────────────────────────

export const collections = [
  {
    slug: "eid-26",
    name: "Eid '26",
    season: "Festive Edit",
    blurb:
      "Hand-finished festive sets in jewel and earth tones — embroidery, chikankari and flowing silhouettes.",
    tone: "rust",
    fb: "eid",
    image: "/images/eid.webp",
  },
  {
    slug: "frocks-26",
    name: "Frocks '26",
    season: "Signature Frocks",
    blurb:
      "Tiered, twirl-ready frocks in soft prints and breathable fabrics. The pieces Silvatein is loved for.",
    tone: "mustard",
    fb: "frocks",
    image: "/images/frocks.webp",
  },
  {
    slug: "client-diaries",
    name: "Client Diaries",
    season: "As Worn By You",
    blurb:
      "Real pieces, real women. A curated diary of customer favourites and made-to-order signatures.",
    tone: "sage",
    fb: "diaries",
    image: "/images/client-diaries.webp",
  },
];

// NOTE: product names/prices are placeholders pending real client data.
// The redesigned home page does NOT show prices (DM-to-order). Kept here so
// the /collections/[slug] pages still build — replace with real data before
// surfacing prices anywhere.
export const products = [];

export function getCollection(slug) {
  return collections.find((c) => c.slug === slug);
}

export function getProductsByCollection(slug) {
  return products.filter((p) => p.collectionSlug === slug);
}

export function formatPKR(amount) {
  return "PKR " + amount.toLocaleString("en-PK");
}
