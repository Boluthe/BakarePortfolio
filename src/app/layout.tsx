import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bakaretioluwani.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tioluwani Bakare — Full Stack Engineer | Java, Spring Boot & Next.js",
    template: "%s — Tioluwani Bakare",
  },
  description:
    "Production-proven Full Stack Software Engineer specializing in Java 17, Spring Boot, microservices, enterprise banking systems, and modern React/Next.js frontends. Based in Lagos, Nigeria.",
  keywords: [
    "Tioluwani Bakare",
    "Bakare Tioluwani Boluwatife",
    "Full Stack Engineer",
    "Java Software Engineer",
    "Spring Boot Developer",
    "React Developer",
    "Next.js Engineer",
    "Union Bank of Nigeria",
    "Lagos Software Engineer",
    "Nigerian Backend Developer",
    "Microservices Architecture",
    "PostgreSQL",
    "Oracle DB 12c",
    "DevOps Observability",
  ],
  authors: [{ name: "Tioluwani Bakare", url: siteUrl }],
  creator: "Tioluwani Bakare",
  publisher: "Tioluwani Bakare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tioluwani Bakare — Full Stack Engineer | Java, Spring Boot & Next.js",
    description:
      "Full stack engineer building Java/Spring Boot backends and React/TypeScript frontends. Production banking experience at Union Bank of Nigeria. Open to remote and Lagos-based work.",
    url: siteUrl,
    siteName: "Tioluwani Bakare Portfolio",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Tioluwani Bakare — Full Stack Engineer Portfolio & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tioluwani Bakare — Full Stack Software Engineer",
    description:
      "Production Java/Spring Boot & React/Next.js engineer. Shipped enterprise banking systems and AI-powered SaaS platforms.",
    creator: "@boluthecreator",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=XXXXXXXX", // Ready for custom verification token
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen text-slate-100 font-sans antialiased bg-[#0d1117] selection:bg-red-500 selection:text-white">
        <StructuredData />
        <Analytics />
        <VercelAnalytics />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
