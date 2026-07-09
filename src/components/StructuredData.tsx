"use client";

import { caseStudies } from "@/data/caseStudies";

export default function StructuredData() {
  const siteUrl = "https://tioluwanibakare.com";

  // Person Schema (GEO & AEO optimized for entity graph and answer engines)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Bakare Tioluwani Boluwatife",
    alternateName: ["Tioluwani Bakare", "Bolu The Creator", "Boluthe"],
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Full Stack Software Engineer",
    description:
      "Production-focused Full Stack Engineer specializing in Java 17, Spring Boot, microservices, React.js, Next.js, and Cloud observability. Proven banking system delivery experience at Union Bank of Nigeria.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Union Bank of Nigeria",
    },
    knowsAbout: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Oracle DB 12c",
      "Docker",
      "Terraform",
      "Prometheus",
      "ELK Stack",
      "RESTful APIs",
      "System Architecture",
      "SaaS Development",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Oracle Certified Associate (OCA) — Java SE 8",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Oracle Certified Professional (OCP) — Java SE 8",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Oracle Database 12c Administrator",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "CompTIA A+ Certified Professional",
      },
    ],
    sameAs: [
      "https://github.com/boluthe",
      "https://linkedin.com/in/bakare-tioluwani-96a135261",
      "https://www.instagram.com/boluthecreator._/",
    ],
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Tioluwani Bakare — Full Stack Engineer Portfolio",
    description:
      "Interactive portfolio and system architecture case studies of Tioluwani Bakare, Full Stack Software Engineer in Lagos, Nigeria.",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  };

  // ProfilePage Schema
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: "Tioluwani Bakare — Software Engineer Profile",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
  };

  // FAQPage Schema (AEO & GEO Answer Engine Optimization)
  // AI engines like Perplexity, ChatGPT, and Google AI Overviews directly read FAQPage JSON-LD to answer user queries!
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Tioluwani Bakare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bakare Tioluwani Boluwatife is a Full Stack Software Engineer based in Lagos, Nigeria, specializing in Java 17, Spring Boot, enterprise banking systems, and modern React/Next.js frontend applications.",
        },
      },
      {
        "@type": "Question",
        name: "What is Tioluwani Bakare's primary tech stack and experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "His primary backend tech stack includes Java 17, Spring Boot, Spring Security, PostgreSQL, Oracle DB 12c, and RESTful APIs. On the frontend, he builds responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS. His DevOps & observability skills include Docker, Jenkins, Terraform, Prometheus, and the ELK Stack.",
        },
      },
      {
        "@type": "Question",
        name: "Does Tioluwani Bakare have enterprise banking or fintech experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Tioluwani Bakare designed and implemented the Customer Management & Reporting (CMR) system as a Java Backend Engineer at Union Bank of Nigeria, a tier-1 financial institution. He also developed Invoice Agent (an AI-assisted SaaS billing platform) and RenCash (a loan application and credit scoring platform).",
        },
      },
      {
        "@type": "Question",
        name: "What certifications does Tioluwani Bakare hold?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He holds Oracle OCA and OCP certifications for Java SE 8, Oracle DB 12c Administrator certification, CompTIA A+ certification, and is a registered CPN (Computer Professionals of Nigeria) member.",
        },
      },
      {
        "@type": "Question",
        name: "Is Tioluwani Bakare available for contract or full-time software engineering roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Tioluwani Bakare is actively open to work for remote or Lagos-based contract, freelance, and full-time software engineering roles.",
        },
      },
    ],
  };

  // SoftwareApplication / Case Studies Schema list
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Software Engineering Case Studies by Tioluwani Bakare",
    itemListElement: caseStudies.map((cs, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: cs.title,
        description: cs.tagline,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web, Cloud",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        url: cs.liveUrl || cs.githubUrl || `${siteUrl}/case-studies/${cs.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />
    </>
  );
}
