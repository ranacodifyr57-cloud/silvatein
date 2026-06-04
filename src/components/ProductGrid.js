import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function ProductGrid({ products }) {
  // Pieces aren't catalogued with prices — they're shared on Instagram and
  // ordered by DM. Graceful empty state until real product data is added.
  if (!products || products.length === 0) {
    return (
      <div className="border-t border-ivory/12 pt-12 text-center">
        <p className="font-display text-2xl italic text-ivory/85">
          New pieces drop on Instagram first
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ivory/55">
          Browse the latest looks and DM us to order — every piece is made to
          order, in your size.
        </p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="btn-outline mt-7"
        >
          View on Instagram
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
      {products.map((product, i) => (
        <Reveal key={product.id} delay={(i % 4) * 80}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
