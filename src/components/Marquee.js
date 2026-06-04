import { Sprig } from "./Logo";

const items = ["Silvatein", "سلوٹین", "Eid '26", "Made to Order", "Frocks '26"];

export default function Marquee() {
  const Row = ({ hidden }) => (
    <span className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className="whitespace-nowrap px-6 font-display text-[1.4rem] italic"
            lang={item === "سلوٹین" ? "ur" : undefined}
            dir={item === "سلوٹین" ? "rtl" : undefined}
          >
            {item}
          </span>
          <Sprig className="h-5 w-5 text-clay" />
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-ivory/12 bg-ink py-4 text-ivory/80">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
