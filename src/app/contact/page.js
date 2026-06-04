import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Order from Silvatein via WhatsApp, Instagram DM or email.",
};

const channels = [
  {
    label: "WhatsApp",
    value: "Fastest way to order",
    href: `https://wa.me/${site.whatsapp}`,
    cta: "Message us",
  },
  {
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    cta: "Send a DM",
  },
  {
    label: "TikTok",
    value: "See pieces in motion",
    href: site.tiktok,
    cta: "Follow",
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    cta: "Write to us",
  },
];

export default function ContactPage() {
  return (
    <section className="container-x py-16 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's get you styled"
          intro={`${site.ordering}. Tell us the piece, your size and where you'd like it delivered — we handle the rest. ${site.delivery}.`}
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 80}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between gap-8 bg-ivory p-8 text-ink transition-colors hover:bg-paper md:p-10"
            >
              <div>
                <p className="label">{c.label}</p>
                <p className="mt-3 font-display text-3xl">{c.value}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-widest text-sage-deep">
                {c.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-12 text-center text-xs uppercase tracking-widest text-muted">
          Based in Pakistan · Shipping worldwide
        </p>
      </Reveal>
    </section>
  );
}
