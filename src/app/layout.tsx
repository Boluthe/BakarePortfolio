import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/components/Toast";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bakaretioluwani.tech";

const themeInitScript = `
  (function() {
    try {
      var stored = localStorage.getItem('portfolio_theme');
      if (stored === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } catch (e) {}
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bakare Tioluwani Boluwatife | Full Stack Engineer",
    template: "%s - Tioluwani Bakare",
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
    title: "Tioluwani Bakare - Full Stack Engineer | Java, Spring Boot & Next.js",
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
        alt: "Tioluwani Bakare - Full Stack Engineer Portfolio & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tioluwani Bakare - Full Stack Software Engineer",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen text-slate-100 dark:text-slate-100 light:text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white relative">
        <ThemeProvider>
          <ToastProvider>
            <StructuredData />
            <GoogleAnalytics />
            <Analytics />
            {children}
            <BackToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
