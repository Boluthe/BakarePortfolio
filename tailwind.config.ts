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
          DEFAULT: "#0d0b1f",
          subtle: "#15122e",
          muted: "#1e1a3a",
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
