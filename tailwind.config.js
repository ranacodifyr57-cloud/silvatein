/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0E0D0A",
        ink: {
          DEFAULT: "#17150F",
          soft: "#211E16",
        },
        ivory: "#F5EFE3",
        paper: "#FBF7EF",
        sage: {
          DEFAULT: "#7C8466",
          deep: "#5A6049",
          glow: "#9AA383",
        },
        clay: "#B07A56",
        gold: "#C99A3C",
        rust: "#A8502E",
        sand: "#E3D8C3",
        muted: "#A39B86",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.28em",
        brand: "0.42em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};
