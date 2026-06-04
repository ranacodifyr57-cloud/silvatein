import Image from "next/image";
import Placeholder from "./Placeholder";
import { formatPKR } from "@/data/products";
import { whatsappOrderLink, site } from "@/data/site";

export default function ProductCard({ product }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Placeholder
            tone={product.tone}
            label={product.name}
            className="h-full w-full transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {product.tag && (
          <span className="absolute left-3 top-3 bg-ivory px-3 py-1 text-[0.6rem] uppercase tracking-widest text-ink">
            {product.tag}
          </span>
        )}

        {/* hover order bar */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full gap-px transition-transform duration-300 group-hover:translate-y-0">
          <a
            href={whatsappOrderLink(product.name, product.collection)}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-ink/90 py-3 text-center text-[0.62rem] uppercase tracking-widest text-ivory backdrop-blur hover:bg-sage-deep"
          >
            WhatsApp
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-ivory/90 py-3 text-center text-[0.62rem] uppercase tracking-widest text-ink backdrop-blur hover:bg-ivory"
          >
            DM
          </a>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg leading-tight">{product.name}</h3>
          <p className="mt-1 text-xs text-muted">{product.fabric}</p>
        </div>
        <span className="whitespace-nowrap font-sans text-sm text-sage-deep">
          {formatPKR(product.price)}
        </span>
      </div>
    </article>
  );
}
