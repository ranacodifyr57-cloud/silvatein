export default function SectionHeading({ eyebrow, title, intro, align = "left" }) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className={`label flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-clay" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ivory/65">{intro}</p>}
    </div>
  );
}
