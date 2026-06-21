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
    tagline: "Restaurant ordering system — from static menu to live e-commerce",
    problem:
      "A Lagos restaurant was taking orders over WhatsApp with no way to track demand, update menus in real time, or manage delivery zones — every order required manual coordination.",
    solution:
      "Built a full-stack ordering platform with React and TypeScript on the frontend and a Node.js/Express API on the backend. Customers browse a live menu, add items to a cart, select a delivery zone, and check out. The admin panel lets the owner update menu items and pricing without touching code.",
    outcome:
      "The site went live and replaced the WhatsApp ordering flow entirely. Update the number of orders processed and any client feedback here once you have the data.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://maisondarlington.com",
    status: "Live",
  },
  {
    slug: "invoice-agent",
    title: "Invoice Agent",
    tagline: "Invoicing SaaS — automated billing for Nigerian freelancers and SMEs",
    problem:
      "Nigerian freelancers and small businesses were creating invoices manually in Word or Google Docs, losing track of what was paid, and spending hours chasing overdue clients.",
    solution:
      "Built a multi-tenant invoicing SaaS using Spring Boot (Java) on the backend and React with TypeScript on the frontend. Users can create and send branded invoices, track payment status, and see a real-time revenue dashboard. The Spring Boot REST API handles auth, invoice state management, and PDF generation.",
    outcome:
      "MVP is complete and in active use. Update with user count, revenue processed, or specific client feedback once you have it.",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/boluthe/invoice-agent",
    status: "MVP",
  },
  {
    slug: "procurement-audit",
    title: "Procurement Audit & BoQ Delivery",
    tagline: "Professional deliverables under deadline — construction procurement",
    problem:
      "A construction project needed a full Bill of Quantities and procurement audit completed under a tight deadline, with no existing documentation baseline to work from.",
    solution:
      "Structured and executed the full procurement audit: identified vendor contracts, flagged discrepancies, and produced a line-item Bill of Quantities covering materials, labour, and plant. Delivered formatted reports suitable for client and regulatory review.",
    outcome:
      "Deliverables submitted on time. Add specific scope, savings identified, or client feedback here to make this more concrete.",
    stack: ["Procurement", "Bill of Quantities", "Vendor Management", "Cost Analysis", "Documentation"],
    availableOnRequest: true,
    status: "Live",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
