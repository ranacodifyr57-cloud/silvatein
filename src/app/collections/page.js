import SectionHeading from "@/components/SectionHeading";
import CollectionCard from "@/components/CollectionCard";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import { collections, products } from "@/data/products";

export const metadata = {
  title: "Collections",
  description: "Explore Silvatein's Eid '26, Frocks '26 and Client Diaries edits.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="container-x pb-12 pt-16 md:pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Shop"
            title="The Collections"
            intro="Curated edits of premium women's apparel — festive, everyday and made to order."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100}>
              <CollectionCard collection={c} large />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-24 pt-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl">All pieces</h2>
          <p className="mt-2 text-sm text-muted">{products.length} styles</p>
        </Reveal>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
