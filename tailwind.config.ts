import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("light", "html.light &");
    }),
  ],
};

export default config;
