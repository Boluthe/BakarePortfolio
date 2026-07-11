export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  outcome: string;
  role?: string;
  learnings?: string[];
  stack: string[];
  category: "Enterprise & Banking" | "AI & Automation" | "Consumer & SaaS";
  liveUrl?: string;
  githubUrl?: string;
  availableOnRequest?: boolean;
  status: "Live" | "MVP" | "In Progress";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "maison-darlington",
    title: "Maison Darlington",
    tagline: "Custom restaurant website with live pricing integration",
    problem:
      "Maison Darlington updates menu and pricing manually. Website and reality are out of sync. No way to manage pricing dynamically without developer work.",
    solution:
      "Built a the full website with custom Google Sheets API integration for easy control of prices from the admins point, the website pulls live data like prices fromthe google sheets and updates sync automatically. Optimized performance and set up infrastructure for reliability. Also set up SEO , ImPlemented ",
    outcome:
      "Live at maidarlington.com. Client no longer needs developer involvement to update menu/pricing. Performance optimized (PageSpeed improvements). Shows ability to build real client products with custom integrations.",
    role:
      "Full-stack engineer. Architected entire system. Built React component structure. Wrote custom Sheets API integration (no off-the-shelf plugin). Configured Cloudflare for DNS/SSL and performance optimization. Implemented cart logic. Set up deployment pipeline.",
    learnings: [
      "Third-party API integration (custom Google Sheets synchronization)",
      "Infrastructure optimization (Cloudflare DNS, SSL, and edge CDN caching)",
      "Performance optimization and conversion engineering for real client products",
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Google Sheets API",
      "Cloudflare CDN",
      "GitHub Pages",
      "GA4",
    ],
    category: "Consumer & SaaS",
    liveUrl: "https://maidarlington.com",
    status: "Live",
  },
  {
    slug: "invoice-agent",
    title: "InvoiceAgent",
    tagline: "Live receivables management platform with AI-assisted escalation",
    problem:
      "Businesses lose money on overdue invoices because follow-ups are manual, inconsistent, and time-consuming. No visibility into which invoices need attention or intelligent prioritization.",
    solution:
      "Built a full-stack platform that automatically tracks invoice status, detects overdue payments, and triggers AI-powered escalation workflows. Dashboard shows payment visibility and communication history in real-time.",
    outcome:
      "Live platform demonstrating end-to-end operational thinking. Shows ability to integrate AI into business logic, handle async workflows, and build user-facing dashboards.",
    role:
      "Full-stack engineer. Designed complete backend architecture (receivables lifecycle, payment tracking, reminder scheduling). Built React dashboards for tracking and workflow monitoring. Integrated Gemini API for AI decisions. Implemented async task processing for non-blocking reminders.",
    learnings: [
      "How to structure complex business workflows in code",
      "Async processing pipelines for high-throughput reliability at scale",
      "AI integration that solves real operational problems without gimmicks",
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "React.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Gemini API",
      "JWT",
      "Webhooks",
      "Async Pipelines",
    ],
    category: "AI & Automation",
    githubUrl: "https://github.com/boluthe/invoice-agent",
    status: "MVP",
  },
  {
    slug: "cmr-system",
    title: "CMR System",
    tagline: "Internal customer management and reporting platform for banking operations",
    problem:
      "Union Bank had fragmented customer data across multiple systems. No centralized way to view customer information or generate reports. Operations teams spent hours manually consolidating data.",
    solution:
      "Built an internal web platform that centralizes customer data, provides operational dashboards, and generates reports. RESTful APIs securely connect to core banking systems with containerized CI/CD pipelines.",
    role:
      "Java Backend Engineer. Designed and implemented RESTful APIs for secure data transfer between core banking systems. Built API documentation for cross-team consumption. Participated in backend testing and pre-production validation. Integrated DevOps tooling (Jenkins, Docker, Terraform). Monitored system health via Prometheus and ELK.",
    outcome:
      "System deployed organization-wide at Union Bank. Presented architecture and business impact directly to executive stakeholders (CIO, CTO). Approved and adopted by the entire organization.",
    learnings: [
      "Strict banking system security, encryption, and regulatory compliance requirements",
      "Production DevOps workflows (Jenkins CI/CD, Docker containerization, Terraform IaC)",
      "System monitoring and observability in enterprise production via Prometheus and ELK",
      "Executive technical communication and stakeholder alignment with C-suite leadership",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Jenkins CI/CD",
      "Docker",
      "Terraform IaC",
      "Prometheus",
      "ELK Stack",
      "REST APIs",
    ],
    category: "Enterprise & Banking",
    availableOnRequest: false,
    status: "Live",
  },
  {
    slug: "iroko-ai",
    title: "IROKO AI",
    tagline: "An artificial intelligence system for Nigerian microfinance banks",
    problem:
      "Microfinance banks manually track regulatory compliance. No centralized system to flag violations or generate compliance reports, resulting in high risk of regulatory breaches.",
    solution:
      "Built a compliance intelligence platform that evaluates transaction data against regulatory rules and generates actionable compliance reports. Delivered in one week with a 5-person cross-functional team.",
    outcome:
      "Live compliance system shipped full feature set in 7 days. Validated by microfinance domain experts, demonstrating leadership under time pressure and full-stack delivery capability.",
    role:
      "Project Manager & Backend Engineer. Led scope definition, sprint planning, and task breakdown across 5-person team (backend, frontend, design, QA). Designed APIs for compliance rule evaluation and reporting. Built data models for transaction analysis.",
    learnings: [
      "How to coordinate cross-functional teams under tight deadlines",
      "Rapid prototyping without compromising backend system architecture",
      "Prioritization of mission-critical features under extreme constraint",
    ],
    stack: [
      "Node.js",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Agile/Scrum",
      "Rule Engine",
    ],
    category: "AI & Automation",
    status: "In Progress",
  },
  {
    slug: "fmcg-pos",
    title: "FMCG POS System",
    tagline: "Point-of-sale and inventory platform for retail/wholesale SMEs",
    problem:
      "Small retail shops use disconnected tools (notebooks, basic calculators, Excel). No real-time inventory tracking. Sales data is lost, and systems cannot operate during offline network dropouts.",
    solution:
      "Building a complete POS system with inventory management, sales tracking, and offline-first operation. Salespeople use native Flutter tablet apps that sync to cloud when online while Spring Boot handles core backend logic.",
    outcome:
      "In active development (Expected deployment Q4 2026). Architecting complex offline-first synchronization (local Hive cache to PostgreSQL online) and real-time business reporting for retail environments.",
    role:
      "Full-stack engineer. Designing Spring Boot backend for inventory, sales, and reporting. Building native Flutter apps for point-of-sale workflow. Architecting offline-first sync (Hive local cache -> PostgreSQL online). Setting up cloud infrastructure.",
    learnings: [
      "Offline-first synchronization and local database conflict resolution complexity",
      "High-speed mobile app UX design tailored for fast-paced retail environments",
      "Backend API design and resilience specifically tuned for intermittent mobile clients",
    ],
    stack: [
      "Spring Boot",
      "Flutter",
      "PostgreSQL",
      "Hive Cache",
      "SQLite",
      "REST APIs",
      "Cloud Hosting",
    ],
    category: "Consumer & SaaS",
    status: "In Progress",
  },
  {
    slug: "rencash",
    title: "RenCash",
    tagline: "End-to-end digital loan application and approval workflow platform",
    problem:
      "Manual loan approval process is slow, paper-driven, and error-prone. No centralized tracking of applications through the underwriting pipeline or automated verification workflows.",
    solution:
      "Built a secure web platform for loan applications, automated credit heuristics evaluation, approvals, and status tracking. Streamlined workflow from application submission to disbursement.",
    role:
      "Co-developer & Project Manager. Contributed to platform architecture and backend API design. Coordinated cross-functional team (developers, QA, designers) across full delivery lifecycle. Managed sprint planning, backlog, timelines, and stakeholder alignment.",
    outcome:
      "Platform delivered on schedule using Agile methodology. Team successfully coordinated across roles and timelines, demonstrating both technical contribution and rigorous project management capability.",
    learnings: [
      "Agile sprint delivery and project management with a distributed cross-functional team",
      "Balancing hands-on technical architecture with day-to-day PM leadership responsibilities",
      "Coordinating timelines, underwriting dependencies, and quality gates across engineering roles",
    ],
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "React.js",
      "Workflow Engine",
      "Agile/Scrum",
    ],
    category: "Enterprise & Banking",
    status: "Live",
  },
  {
    slug: "inventory-management",
    title: "Inventory Management System for SMEs",
    tagline: "Real-time inventory tracking platform for retail/wholesale businesses",
    problem:
      "Small retail shops don't know stock levels in real-time. Low-stock situations go unnoticed. Products expire without tracking. Restocking decisions are guesswork and prone to shrinkage.",
    solution:
      "Built a web platform for real-time inventory visibility, stock monitoring, and automated alerts. Tracks product levels, expiration dates, and triggers restocking notifications with strict role-based access control.",
    role:
      "Full-stack engineer. Developed React frontend with inventory dashboards and operational workflows. Led backend development including stock tracking logic, RBAC, and automated low-stock/expiration alerts.",
    outcome:
      "Platform deployed for retail/wholesale clients. Enables data-driven restocking decisions and eliminates waste from expired products. Shows ability to build complete SME business tools.",
    learnings: [
      "Real-time data integrity and concurrency requirements in multi-user inventory systems",
      "Notification architecture design (timing, frequency, reliability, and alert thresholds)",
      "Role-based access control (RBAC) design tailored for SME operational hierarchy",
    ],
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "React.js",
      "REST APIs",
      "Role-Based Access Control",
      "Automated Alerts",
    ],
    category: "Consumer & SaaS",
    status: "Live",
  },
  {
    slug: "permit-ai",
    title: "PermitAI (Phase 1 — Not on CV)",
    tagline: "PropTech platform for permit digitization and workflow automation",
    problem:
      "Property developers manually navigate fragmented permit systems across multiple government agencies. No centralized tracking or visibility, leading to costly delays and compliance bottlenecks.",
    solution:
      "Built Phase 1 of a digital permit management platform featuring centralized regulatory databases, automated workflow status tracking, and agency API integrations for document verification.",
    role:
      "Core Backend & Architecture Engineer. Designed scalable database schema for multi-agency workflows, permit state transitions, and document verification lifecycle tracking.",
    outcome:
      "Phase 1 core architecture complete. Successfully demonstrated automated permit state transition engine. (Currently in active validation awaiting Phase 2 production metrics).",
    learnings: [
      "Deep understanding of PropTech regulatory pipelines and multi-agency approval bottlenecks",
      "Design of complex state machine architectures for long-running government permit workflows",
      "Structuring modular document verification pipelines for third-party compliance audits",
    ],
    stack: [
      "Node.js",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Document Pipeline",
      "Workflow Automation",
    ],
    category: "AI & Automation",
    status: "In Progress",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
