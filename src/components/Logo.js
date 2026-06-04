// Botanical brand mark + recurring line-art motif.
// Emblem = the open ring · sprig · arrow lockup (matches the Silvatein logo).
// Sprig  = the tall leaf branch used as a thread across the site.
// Both use currentColor so they adapt to any placement.

export function Emblem({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M40 96 A44 44 0 1 1 90 84" strokeWidth="1.6" />
      <line x1="38" y1="64" x2="84" y2="64" strokeWidth="1.4" />
      <path d="M38 64l7-4M38 64l7 4M45 64l6-3.5M45 64l6 3.5" strokeWidth="1.2" />
      <path d="M84 64l-7-4M84 64l-7 4" strokeWidth="1.2" />
      <path d="M40 60c-6 5-11 13-13 24" strokeWidth="1.4" />
      <path d="M37 66c-4-1-8 0-11 3 3 2 7 2 10 0" strokeWidth="1.1" />
      <path d="M34 73c-4-1-8 1-10 4 4 1 7 1 10-1" strokeWidth="1.1" />
      <path d="M31 81c-4 0-7 2-9 5 4 1 7 0 9-2" strokeWidth="1.1" />
      <path d="M40 60c2-4 2-9 0-13-2 3-3 7-1 11" strokeWidth="1.1" />
    </svg>
  );
}

// [y, rotationDeg, scale] — leaves run up the stem, smaller toward the tip.
const LEAVES = [
  [362, -40, 1.12], [362, 40, 1.12],
  [312, -38, 0.98], [312, 38, 0.98],
  [264, -36, 0.84], [264, 36, 0.84],
  [218, -33, 0.7], [218, 33, 0.7],
  [174, -30, 0.56], [174, 30, 0.56],
  [134, -26, 0.44], [134, 26, 0.44],
  [98, 0, 0.4],
];

export function Sprig({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 420"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M80 416 C 76 332 80 250 80 44" strokeWidth="1.5" />
      {LEAVES.map(([y, rot, sc], i) => (
        <g key={i} transform={`translate(80 ${y}) rotate(${rot}) scale(${sc})`}>
          <path d="M0 0 C -7 -9 -7 -27 0 -40 C 7 -27 7 -9 0 0 Z" strokeWidth="1.4" />
          {sc >= 0.56 && <path d="M0 -4 L0 -36" strokeWidth="1.1" />}
        </g>
      ))}
    </svg>
  );
}

export function Wordmark({ className = "" }) {
  return (
    <span
      className={`font-sans font-medium uppercase ${className}`}
      style={{ letterSpacing: "0.42em" }}
    >
      Silvatein
    </span>
  );
}

export default function Logo({ stacked = false, className = "" }) {
  if (stacked) {
    return (
      <span className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <Emblem className="h-12 w-12" />
        <Wordmark className="text-sm" />
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Emblem className="h-9 w-9 shrink-0" />
      <Wordmark className="text-base pt-0.5" />
    </span>
  );
}
