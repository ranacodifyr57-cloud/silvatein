// ─────────────────────────────────────────────────────────────
//  SILVATEIN — central brand config
//  Edit these values to update contact info & links site-wide.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Silvatein",
  nameUrdu: "سلوٹین",
  tagline: "Premium Women's Apparel",
  description:
    "Premium women's apparel, crafted in Pakistan and delivered worldwide. Eastern silhouettes with an editorial, botanical soul.",

  // 👇 REPLACE with your real WhatsApp number in full international format
  //    (no spaces, no +, no leading 0). Example: 923001234567
  whatsapp: "923000000000",

  instagram: "https://instagram.com/silvateinofficial_",
  instagramHandle: "@silvateinofficial_",
  tiktok: "https://www.tiktok.com/@silvateinofficial_",
  email: "hello@silvatein.com",

  // Shown across the site
  delivery: "Delivery across Pakistan & worldwide",
  ordering: "Order via DM or WhatsApp",
};

// Build a prefilled WhatsApp order link for a given product
export function whatsappOrderLink(productName, collection) {
  const text = encodeURIComponent(
    `As-salaam-u-alaikum Silvatein! 🌿\nI'd like to order: ${productName}` +
      (collection ? ` (${collection})` : "") +
      `.\nIs it available, and what's the price & delivery time?`
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
