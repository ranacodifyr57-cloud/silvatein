import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL("https://silvatein.com"),
  title: {
    default: "Silvatein — Premium Women's Apparel",
    template: "%s · Silvatein",
  },
  description: site.description,
  keywords: [
    "Silvatein",
    "Pakistani women's clothing",
    "Eid 2026",
    "frocks",
    "premium apparel",
    "lawn suits",
  ],
  openGraph: {
    title: "Silvatein — Premium Women's Apparel",
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
