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
          DEFAULT: "#0f172a",
          subtle: "#1e293b",
          muted: "#334155",
        },
        accent: {
          DEFAULT: "#f97316",
          hover: "#ea6c0a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
