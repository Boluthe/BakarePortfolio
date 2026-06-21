import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen bg-surface text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
