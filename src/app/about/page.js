import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import { Emblem } from "@/components/Logo";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
  description: site.description,
};

const values = [
  {
    t: "Considered craft",
    d: "Small batches and made-to-order pieces, finished by hand with attention to drape and detail.",
  },
  {
    t: "Earthy palette",
    d: "Prints and tones drawn from nature — sage, clay, marigold and rust — that feel timeless.",
  },
  {
    t: "Worldwide reach",
    d: "Rooted in Pakistan, shipped across the globe so our pieces find you wherever you are.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x py-16 text-center md:py-24">
        <Reveal>
          <Emblem className="mx-auto h-16 w-16 text-clay" />
          <h1 className="mt-8 font-display text-5xl md:text-7xl">
            The Silvatein <span className="italic text-sage-glow">ethos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/70">
            {site.description}
          </p>
        </Reveal>
      </section>

      <section className="container-x grid items-center gap-12 pb-20 md:grid-cols-2">
        <Reveal>
          <div className="aspect-[4/5] w-full">
            <Placeholder tone="sage" label="Botanical · Editorial" className="h-full w-full" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <SectionHeading eyebrow="Who we are" title="A label for the modern eastern wardrobe" />
            <p className="mt-5 text-base leading-relaxed text-ivory/70">
              Silvatein (سلوٹین) is a premium women's apparel label built around
              the joy of getting dressed. We pair traditional silhouettes —
              kurtas, frocks and three-piece suits — with a quiet, editorial
              sensibility.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              What started as a passion shared on Instagram has grown into a
              community of women across Pakistan and beyond who return season
              after season. Every order is personal; many are made just for you.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-ivory/10 bg-ink py-20 md:py-24">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="border-t border-ivory/15 pt-6">
                  <h3 className="font-display text-2xl">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center md:py-28">
        <Reveal>
          <h2 className="font-display text-4xl italic md:text-5xl">
            Dress with intention.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/collections" className="btn-solid">
              Explore collections
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
