import Image from "next/image";
import { Emblem, Sprig } from "./Logo";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* faint oversized botanical thread */}
      <Sprig className="pointer-events-none absolute -right-16 -top-24 z-0 h-[140%] w-auto text-ivory/[0.07] md:right-0" />

      <div className="container-x relative z-10 grid items-center gap-10 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Copy */}
        <div>
          <p className="label flex items-center gap-3">
            <span className="h-px w-10 bg-clay" />
            {site.tagline}
            <span
              className="font-display text-base not-italic text-ivory/80"
              lang="ur"
              dir="rtl"
            >
              {site.nameUrdu}
            </span>
          </p>

          <h1 className="mt-6 font-display text-[3rem] font-light leading-[0.95] tracking-tight sm:text-[3.8rem] md:text-[4.6rem] lg:text-[5.1rem]">
            Quiet luxury,
            <br />
            <span className="italic text-gold">stitched</span> with soul.
          </h1>

          <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-ivory/70">
            Eastern silhouettes in festive embroidery and earthy prints —
            thoughtfully made in Pakistan and delivered to your door, worldwide.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#collections" className="btn-festive">
              Shop Collections
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              {site.instagramHandle}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2 text-[0.72rem] uppercase tracking-widest text-ivory/55">
            <span>Made to order</span>
            <span className="h-3 w-px bg-ivory/25" />
            <span>Worldwide delivery</span>
            <span className="h-3 w-px bg-ivory/25" />
            <span>Crafted in Pakistan</span>
          </div>
        </div>

        {/* Layered festive imagery */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          {/* Real logo stamped on — black background drops out via blend */}
          <img
            src="/logo.jpeg"
            alt="Silvatein"
            className="pointer-events-none absolute -left-7 -top-10 z-30 hidden h-28 w-28 object-contain mix-blend-screen lg:block"
          />

          <div className="fb-hero relative aspect-[4/5] w-full overflow-hidden border border-ivory/15">
            <Sprig className="sprig-overlay -right-6 -top-10 h-[120%] w-auto" />
            <Image
              src="/images/hero-main.webp"
              alt="Silvatein Eid '26 festive edit"
              fill
              priority
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
            <span className="caption">Eid '26 — Festive Edit</span>
          </div>

          <div className="fb-hero2 absolute -bottom-7 -left-5 hidden aspect-[3/4] w-32 overflow-hidden border-4 border-noir shadow-2xl sm:block lg:w-44">
            <Image
              src="/images/hero-sub.webp"
              alt="Silvatein Frocks '26"
              fill
              sizes="(max-width:1024px) 30vw, 12rem"
              className="object-cover"
            />
            <span className="caption !bottom-3 !left-3 !text-sm">Frocks '26</span>
          </div>

          <Emblem className="absolute -bottom-3 right-6 z-20 hidden h-14 w-14 text-clay md:block lg:hidden" />
        </div>
      </div>
    </section>
  );
}
