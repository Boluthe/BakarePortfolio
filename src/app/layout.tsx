import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tioluwani Bakare — Full Stack Engineer",
  description:
    "Full stack engineer building Java/Spring Boot backends and React/TypeScript frontends. Banking production experience at Union Bank of Nigeria. Based in Lagos.",
  openGraph: {
    title: "Tioluwani Bakare — Full Stack Engineer",
    description:
      "Full stack engineer building Java/Spring Boot backends and React/TypeScript frontends. Banking production experience at Union Bank of Nigeria. Based in Lagos.",
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
