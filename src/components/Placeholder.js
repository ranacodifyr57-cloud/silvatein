// On-brand image placeholder used when a product/collection has no photo yet.
// Renders a tonal gradient + a faint botanical motif.

const tones = {
  sage: "linear-gradient(150deg,#8b9275,#5f6443)",
  clay: "linear-gradient(150deg,#c08a63,#9c6a45)",
  blush: "linear-gradient(150deg,#e2c3b8,#c79c8e)",
  mustard: "linear-gradient(150deg,#d2ad57,#b58a35)",
  rust: "linear-gradient(150deg,#bb6f48,#974f33)",
  olive: "linear-gradient(150deg,#828858,#5b6041)",
  stone: "linear-gradient(150deg,#bcb29e,#928b78)",
};

export default function Placeholder({ tone = "sage", label, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: tones[tone] || tones.sage }}
    >
      {/* faint botanical motif */}
      <svg
        viewBox="0 0 120 120"
        className="absolute -right-6 -top-6 h-44 w-44 text-ivory/15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M60 100c-10-22-10-44 0-66" />
        <path d="M60 80c-9-3-15-10-17-20 9 1 16 7 17 16" />
        <path d="M60 64c-9-3-15-10-17-20 9 1 16 7 17 16" />
        <path d="M60 80c9-3 15-10 17-20-9 1-16 7-17 16" />
        <path d="M60 64c9-3 15-10 17-20-9 1-16 7-17 16" />
      </svg>
      <span className="relative px-6 text-center font-display text-lg italic text-ivory/85">
        {label}
      </span>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
  );
}
