import Image from "next/image";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collections from "@/components/Collections";
import Reveal from "@/components/Reveal";
import { Emblem, Sprig } from "@/components/Logo";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Collections />

      {/* Story */}
      <section id="story" className="border-y border-ivory/10 bg-ink">
        <div className="container-x grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md md:mx-0">
              <div className="fb-story relative aspect-[4/5] w-full overflow-hidden border border-ivory/12">
                <Sprig className="sprig-overlay -bottom-10 -left-6 h-[120%] w-auto" />
                <Image
                  src="/images/story.webp"
                  alt="Crafted in Pakistan"
                  fill
                  sizes="(max-width:768px) 90vw, 40vw"
                  className="object-cover"
                />
                <span className="caption">Crafted in Pakistan</span>
              </div>
              <Emblem className="absolute -right-5 -top-6 z-20 hidden h-16 w-16 text-clay md:block" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="label">Our Story</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                An ode to slow,
                <br />
                intentional dressing
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ivory/70">
                Silvatein began with a simple belief — that everyday eastern
                wear can feel like an heirloom. Each piece is cut, printed and
                finished with care, in fabrics chosen to move with you.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ivory/70">
                Many of our pieces are made to order, so you receive something
                considered rather than mass-produced. From Lahore to London, we
                ship our edits across Pakistan and worldwide.
              </p>
              <a href="#order" className="btn-outline mt-8">
                Read more
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How to order */}
      <section id="order" className="relative overflow-hidden">
        <Sprig className="pointer-events-none absolute -left-20 bottom-0 z-0 h-[120%] w-auto text-ivory/[0.05]" />
        <div className="container-x relative z-10 py-20 md:py-28">
          <Reveal>
            <p className="label">How it works</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">
              Ordering is a conversation
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Browse & choose", d: "Explore the collections and find the pieces you love." },
              { n: "02", t: "Message us", d: "Send us a DM or WhatsApp with your size and any customisations." },
              { n: "03", t: "We deliver", d: "We confirm, craft and ship to you — across Pakistan & worldwide." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="border-t border-ivory/15 pt-6">
                  <span className="font-display text-3xl italic text-sage-glow">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display text-2xl">{step.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-festive"
              >
                Order on WhatsApp
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                DM on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
