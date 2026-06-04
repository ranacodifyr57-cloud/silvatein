import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import {
  collections,
  getCollection,
  getProductsByCollection,
} from "@/data/products";
import { site } from "@/data/site";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const collection = getCollection(params.slug);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.name,
    description: collection.blurb,
  };
}

export default function CollectionPage({ params }) {
  const collection = getCollection(params.slug);
  if (!collection) notFound();

  const items = getProductsByCollection(params.slug);

  return (
    <>
      <section className="border-b border-ivory/10 bg-ink">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <Link
              href="/collections"
              className="link-underline text-[0.7rem] uppercase tracking-widest text-muted"
            >
              ← All collections
            </Link>
            <p className="label mt-8">{collection.season}</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">{collection.name}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/65">
              {collection.blurb}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <ProductGrid products={items} />

        <Reveal>
          <div className="mt-20 border-t border-ivory/10 pt-10 text-center">
            <h2 className="font-display text-3xl italic">Found a favourite?</h2>
            <p className="mt-3 text-sm text-ivory/65">
              {site.ordering} — we'll confirm availability, size and delivery.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-solid"
              >
                Order on WhatsApp
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-outline">
                DM on Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
