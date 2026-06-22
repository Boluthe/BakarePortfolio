import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tioluwani Bakare — Fullstack Engineer",
  description:
    "Fullstack engineer specialising in Java/Spring Boot backends and React/TypeScript frontends. Based in Lagos, Nigeria.",
  openGraph: {
    title: "Tioluwani Bakare — Fullstack Engineer",
    description:
      "Fullstack engineer specialising in Java/Spring Boot backends and React/TypeScript frontends. Based in Lagos, Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
