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
    slug: "maison-darlington",
    title: "Maison Darlington",
    tagline: "Restaurant ordering system — from WhatsApp coordination to live e-commerce",
    problem:
      "A Lagos restaurant was taking orders over WhatsApp with no way to track demand, update menus in real time, or manage delivery zones — every order required manual coordination.",
    solution:
      "Built a full-stack ordering platform with React and TypeScript on the frontend and a Node.js/Express API on the backend. Customers browse a live menu, add items to a cart, select a delivery zone, and check out. The admin panel lets the owner update menu items and pricing without touching code.",
    outcome:
      "Replaced the WhatsApp ordering flow entirely. The owner manages menu updates and pricing through the admin panel without developer involvement, and customers complete orders end-to-end on the platform.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://maisondarlington.com",
    status: "Live",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
