import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        surface: {
          DEFAULT: "#060e1a",
          subtle: "#0d1a2e",
          muted: "#162337",
        },
        accent: {
          DEFAULT: "#10b981",
          hover: "#059669",
        },
      },
    },
  },
  plugins: [],
};

export default config;
