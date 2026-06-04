import Link from "next/link";
import Image from "next/image";
import Placeholder from "./Placeholder";

export default function CollectionCard({ collection, large = false }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className={`group relative block overflow-hidden ${
        large ? "aspect-[3/4] md:aspect-[4/5]" : "aspect-[4/5]"
      }`}
    >
      {collection.image ? (
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <Placeholder
          tone={collection.tone}
          label={collection.season}
          className="h-full w-full transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <p className="text-[0.65rem] uppercase tracking-widest text-ivory/70">
          {collection.season}
        </p>
        <h3 className="mt-1 font-display text-3xl text-ivory md:text-4xl">
          {collection.name}
        </h3>
        <span className="mt-3 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-widest text-ivory">
          Explore
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
