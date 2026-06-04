import Image from "next/image";
import { Sprig } from "./Logo";
import Reveal from "./Reveal";
import { collections } from "@/data/products";
import { site } from "@/data/site";

export default function Collections() {
  return (
    <section id="collections" className="container-x py-20 md:py-28">
      <Reveal>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">The Collections</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">
              Edits for every occasion
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
            From festive Eid sets to the twirl-ready frocks Silvatein is known
            for — explore the season&apos;s curations.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, i) => (
          <Reveal key={c.slug} delay={i * 100}>
            <article className="group">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div
                  className={`fb-${c.fb} relative aspect-[4/5] w-full overflow-hidden border border-ivory/12`}
                >
                  <Sprig className="sprig-overlay -right-5 -top-8 h-[115%] w-auto transition-transform duration-700 group-hover:scale-105" />
                  {c.image && (
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                  <span className="badge">{c.season}</span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl leading-tight">{c.name}</h3>
                    <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ivory/55">
                      {c.blurb}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-clay transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 text-center text-[0.72rem] uppercase tracking-widest text-ivory/45">
          Every piece is made to order —{" "}
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-ivory/80"
          >
            DM to order
          </a>
        </p>
      </Reveal>
    </section>
  );
}
