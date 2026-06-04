import { Emblem } from "./Logo";
import { site, nav } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink text-ivory">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <div className="flex items-center gap-3 text-ivory">
            <Emblem className="h-12 w-12" />
            <span className="font-display text-2xl">
              Silvatein{" "}
              <span className="text-base text-sage" lang="ur" dir="rtl">
                {site.nameUrdu}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
            {site.description}
          </p>
          <p className="mt-5 text-[0.66rem] uppercase tracking-widest text-clay">
            {site.delivery}
          </p>
        </div>

        <div>
          <p className="text-[0.66rem] uppercase tracking-widest text-ivory/45">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ivory/75 hover:text-ivory">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.66rem] uppercase tracking-widest text-ivory/45">
            Order &amp; Connect
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-ivory/75 hover:text-ivory"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-ivory/75 hover:text-ivory"
              >
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noreferrer"
                className="text-ivory/75 hover:text-ivory"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-ivory/75 hover:text-ivory"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[0.66rem] uppercase tracking-widest text-ivory/40 md:flex-row">
          <span>© {new Date().getFullYear()} Silvatein. All rights reserved.</span>
          <span>{site.ordering}</span>
        </div>
      </div>
    </footer>
  );
}
