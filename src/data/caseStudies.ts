export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  availableOnRequest?: boolean;
  status: "Live" | "MVP" | "In Progress";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "maison-darlington",
    title: "Maison Darlington",
    tagline: "Brand website and digital presence for Lagos' boldest street-food truck",
    problem:
      "Maison Darlington is a Lagos street-food truck founded by Darlington Sheriff -needed a high-performance web presence that could drive walk-in traffic, handle menu discovery, and convert WhatsApp orders, all while reflecting the brand's bold street-kitchen identity and ranking on Google for competitive Lagos food search terms.",
    solution:
      "Built the full brand website using React and Vite with a focus on performance and SEO. Implemented rich structured data (Schema.org Restaurant, FAQPage, BreadcrumbList) for Google rich results and AI answer eligibility. Developed a digital menu with categorised sections (Pasta Series, Grills, Fries, Shawarma, Drinks) and a WhatsApp-powered order flow. Integrated Google Analytics (GA4) and Cloudflare for edge delivery and real-time performance monitoring across Lagos-area search traffic.",
    outcome:
      "Site went live at https://maidarlington.com with full SEO coverage across high-intent Lagos food keywords. The brand achieved a 4.8-star aggregate rating with 100+ reviews captured in structured data, and established an online ordering pipeline via WhatsApp serving multiple Lagos zones including Lekki, VGC, Ikota, and Victoria Island.",
    stack: ["React", "Vite", "JavaScript", "Cloudflare", "GA4", "Schema.org", "SEO"],
    liveUrl: "https://maidarlington.com",
    status: "Live",
  },
  {
    slug: "invoice-agent",
    title: "Invoice Agent",
    tagline: "AI-assisted invoicing and receivables management for Nigerian SMEs",
    problem:
      "Nigerian freelancers and small businesses were creating invoices manually in Word or Google Docs, losing track of payment status, and spending hours chasing overdue clients with no automated follow-up mechanism.",
    solution:
      "Built a multi-tenant SaaS using Java 17 and Spring Boot on the backend with a React/TypeScript frontend. The system covers the full receivables lifecycle: invoice creation, payment status tracking, automated reminder scheduling, and webhook-driven event processing. Integrated the Gemini API to power AI-driven escalation logic that detects overdue accounts and triggers intelligent follow-up workflows. JWT authentication with role-based access control across tenants. Designed async processing pipelines for non-blocking reminder dispatch with production-style error handling, retry logic, and system observability patterns.",
    outcome:
      "MVP is complete and in active use. The platform handles end-to-end billing operations — including AI-assisted escalation — replacing manual follow-up for SME operators.",
    stack: ["Java 17", "Spring Boot", "React", "TypeScript", "PostgreSQL", "JWT", "Gemini API", "Webhooks", "Tailwind CSS"],
    githubUrl: "https://github.com/boluthe/invoice-agent",
    status: "MVP",
  },
  {
    slug: "cmr-system",
    title: "CMR System — Union Bank of Nigeria",
    tagline: "Internal customer management and reporting platform built for a tier-1 Nigerian bank",
    problem:
      "The bank lacked a centralised platform for customer data management and cross-team reporting, relying on fragmented processes with no unified API layer or real-time operational visibility.",
    solution:
      "Designed and implemented the CMR (Customer Management & Reporting) system as Java Backend Engineer at Union Bank. Built RESTful APIs for secure, optimised data transfer between core banking systems with full endpoint documentation for cross-team consumption. Integrated DevOps tooling — Jenkins for CI/CD, Docker for containerisation, Terraform for infrastructure as code — and configured Prometheus and ELK Stack monitoring for system health visibility. Led pre-production validation and stability testing before go-live.",
    outcome:
      "Delivered in a live production environment. Presented the completed system architecture and business impact directly to the CIO and CTO — approved for organisation-wide deployment.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Jenkins", "Docker", "Terraform", "Prometheus", "ELK Stack", "REST APIs"],
    availableOnRequest: true,
    status: "Live",
  },
  {
    slug: "inventory-management",
    title: "Inventory Management System",
    tagline: "Real-time stock and sales platform for retail and wholesale SMEs",
    problem:
      "Retail and wholesale SME operators were managing stock manually, with no visibility into inventory levels, sales velocity, or expiring products — leading to stockouts, waste, and poor restocking decisions.",
    solution:
      "Built a full-stack inventory management system using Spring Boot on the backend and React on the frontend with role-based access control. Implemented real-time stock tracking, sales management workflows, and automated low-stock alerts with product expiration notifications. Developed React-based operational dashboards for inventory visibility and monitoring across product categories.",
    outcome:
      "Deployed and in active use. Operators moved from spreadsheet-based stock management to real-time dashboards, enabling data-driven restocking decisions and reducing manual reconciliation.",
    stack: ["Spring Boot", "PostgreSQL", "React", "REST APIs", "Role-Based Access Control"],
    status: "Live",
  },
  {
    slug: "rencash",
    title: "RenCash",
    tagline: "Loan application and approval platform powered by Spring Boot",
    problem:
      "Traditional loan processing in microfinance was slow, paper-driven, and lacked transparency, leading to high turnaround times for loan approvals.",
    solution:
      "Co-developed a digital loan application and approval platform using Spring Boot and RESTful APIs. Implemented secure application submission, automated credit scoring heuristics, and administrative dashboards for review. Served as project manager coordinating a cross-functional team using Agile methodology across the full delivery lifecycle.",
    outcome:
      "Delivered an end-to-end loan management system that simplified the application process and automated core approval validation pipelines.",
    stack: ["Spring Boot", "REST APIs", "SQL", "Agile"],
    status: "Live",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
