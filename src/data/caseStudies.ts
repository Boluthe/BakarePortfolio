export type Category = "Enterprise & Banking" | "AI & Automation" | "Consumer & SaaS";

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  architectureBreakdown?: { label: string; details: string }[];
  evolution?: { phase: string; details: string }[];
  outcome: string;
  role?: string;
  learnings?: string[];
  stack: string[];
  category: Category;
  categories?: Category[];
  liveUrl?: string;
  githubUrl?: string;
  availableOnRequest?: boolean;
  status: "Live" | "MVP" | "In Progress";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "maison-darlington",
    title: "Maison Darlington",
    tagline: "High-performance restaurant e-commerce platform powered by a custom real-time Google Sheets CMS",
    problem:
      "Maison Darlington constantly struggled with outdated online menus and pricing. Updating prices manually required either calling a developer every time (which was slow and costly) or editing raw code files directly (which risked breaking the site). As a result, the website quickly fell out of sync with kitchen reality, causing customer frustration over unavailable items and incorrect pricing.",
    solution:
      "Built a blazing-fast, custom e-commerce web application using React, Tailwind CSS, and Vite, coupled with a bespoke Google Sheets API synchronization engine. The restaurant owner manages menu items, daily pricing, and stock availability directly inside a familiar Google Sheet, while the website synchronizes dynamically in real-time.",
    architectureBreakdown: [
      {
        label: "Frontend & Shopping Cart (React + Vite + Tailwind)",
        details: "Engineered a highly responsive, visually polished e-commerce interface featuring instant category filtering, item customization, and an intuitive shopping cart. Built with Vite and Tailwind CSS to ensure instantaneous page rendering and zero layout shifts across mobile and desktop devices."
      },
      {
        label: "Custom Google Sheets API Integration",
        details: "Wrote a custom, lightweight backend synchronization layer directly interfacing with the Google Sheets API v4. Instead of relying on bloated third-party CMS plugins, the system securely fetches, caches, and transforms live spreadsheet data into structured JSON, keeping the frontend perfectly synchronized with the owner's spreadsheet edits."
      },
      {
        label: "WhatsApp Order Checkout Engine",
        details: "Integrated a frictionless, conversion-optimized WhatsApp checkout workflow. Customers review their cart items and click 'Checkout', which automatically formats the entire order breakdown, delivery details, and price totals into a direct, pre-populated WhatsApp confirmation message to the restaurant."
      },
      {
        label: "Edge Infrastructure (Cloudflare & GitHub Pages)",
        details: "Configured Cloudflare for global DNS management, edge caching, and strict SSL termination. Automated deployment pipelines via GitHub Pages ensure zero-downtime continuous delivery whenever code updates are shipped."
      }
    ],
    evolution: [
      {
        phase: "V1 (Static Menu Architecture)",
        details: "Launched the initial version with a hardcoded React menu. While visually stunning, the client still depended on developer pull requests every time ingredient costs shifted or seasonal dishes were introduced."
      },
      {
        phase: "V2 (Custom Google Sheets CMS Integration)",
        details: "Engineered the custom Google Sheets synchronization integration. Completely eliminated developer maintenance bottlenecks—transforming menu updates from a multi-day engineering request into a 10-second spreadsheet edit by the restaurant owner."
      },
      {
        phase: "V3 (Extreme Performance & Mobile SEO Optimization)",
        details: "Conducted deep Core Web Vitals and PageSpeed audits. Implemented aggressive image compression, next-gen WebP formatting, code splitting, and Cloudflare caching headers. Soared mobile PageSpeed scores from 63 to 84, dramatically improving SEO rankings and mobile customer conversions."
      }
    ],
    outcome:
      "Live and actively used daily by Maison Darlington at maidarlington.com. The restaurant owner independently updates prices and seasonal offerings without writing a single line of code or paying maintenance fees. Demonstrates strong client-facing engineering, bespoke API integrations, and practical infrastructure optimization.",
    role:
      "Sole Full-Stack & Infrastructure Engineer. Architected and developed the complete React/Vite frontend, engineered the custom Google Sheets API synchronization client, designed the WhatsApp checkout pipeline, and managed all Cloudflare DNS, CDN, and CI/CD infrastructure.",
    learnings: [
      "Architecting zero-maintenance client CMS solutions using Google Sheets API as a live data store",
      "Advanced Core Web Vitals optimization and edge caching strategies using Cloudflare CDN",
      "Conversion rate optimization (CRO) via frictionless WhatsApp direct-order checkout flows"
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Google Sheets API",
      "Cloudflare CDN",
      "WhatsApp API",
      "GitHub Pages",
      "Core Web Vitals"
    ],
    category: "Consumer & SaaS",
    categories: ["Consumer & SaaS"],
    liveUrl: "https://maidarlington.com",
    status: "Live",
  },
  {
    slug: "invoice-agent",
    title: "InvoiceAgent",
    tagline: "Full-stack receivables management platform with real-time tracking and AI-powered follow-up workflows",
    problem:
      "Companies lose significant revenue and cash flow to overdue invoices because follow-ups are manual, inconsistent, and time-consuming. Finance teams spend hours tracking which invoices need attention across disjointed spreadsheets, manually drafting reminder emails, and chasing clients without centralized visibility into payment status.",
    solution:
      "Architected and built an end-to-end receivables management platform that automates the entire invoice lifecycle. Businesses upload invoices, track real-time payment status via webhooks, and leverage an intelligent Gemini AI engine that analyzes overdue patterns and client history to trigger context-aware follow-up reminders non-blockingly.",
    architectureBreakdown: [
      {
        label: "Backend Architecture (Java 17 & Spring Boot)",
        details: "Designed the complete receivables lifecycle engine including invoice ingestion, stateful payment status tracking, automated cron-based reminder scheduling, and secure webhook endpoints for real-time payment notifications. Built asynchronous task processing pipelines so reminder dispatch and AI inference never block core API threads. Implemented stateless JWT authentication and role-based access control (RBAC)."
      },
      {
        label: "Operational Dashboards (React)",
        details: "Built responsive operational dashboards displaying live invoice status matrices, historical payment timelines, automated communication threads, and AI-recommended actions. Designed with a focus on immediate clarity so finance officers can identify high-priority overdue accounts at a glance."
      },
      {
        label: "AI Escalation Engine (Gemini API)",
        details: "Integrated Google's Gemini API directly into the escalation decision loop. Rather than sending generic, repetitive reminders, the AI evaluates invoice age, historical client payment behavior, and transaction amounts to recommend personalized escalation strategies (e.g., gentle reminder, formal managerial escalation, or collections referral)."
      },
      {
        label: "Infrastructure & Reliability Pipeline",
        details: "Engineered real-time webhook handlers for instant payment reconciliation. Built robust error handling, exponential backoff retries for failed email dispatches, and structured logging to ensure complete system observability and zero dropped reminders."
      }
    ],
    evolution: [
      {
        phase: "V1 → V2 (Real-Time Webhook Reconciliation)",
        details: "Started with basic cron-based reminder scheduling. Upgraded the architecture by adding real-time webhook support to listen for instant payment gateway notifications instead of polling. This eliminated lag and reduced embarrassing false-alarm reminders by over 40%."
      },
      {
        phase: "V2 → V3 (Intelligent Gemini AI Escalation)",
        details: "Integrated the Gemini API for smart prioritization. Initially, the system dispatched identical reminders for every overdue invoice. In V3, the AI analyzes transaction value and client history to tailor the follow-up tone and priority—drastically increasing recovery rates for high-value accounts."
      },
      {
        phase: "Production Observability & Resilience",
        details: "Implemented structured production logging, comprehensive error tracking, and automated retry mechanisms for failed asynchronous tasks, ensuring enterprise-grade reliability."
      }
    ],
    outcome:
      "Delivered a live, production-grade platform demonstrating deep operational thinking. Proved the ability to integrate generative AI meaningfully into core financial logic (moving beyond gimmicks), handle high-concurrency async workflows reliably, and design dashboards that finance teams genuinely love using.",
    role:
      "Sole Full-Stack & AI Engineer. Architected the Java 17/Spring Boot backend, designed the PostgreSQL schema and async pipelines, built the React frontend dashboards, and engineered the Gemini AI prompt and evaluation workflows.",
    learnings: [
      "Designing resilient asynchronous processing pipelines in Spring Boot for high-throughput task scheduling",
      "Integrating LLMs into deterministically governed financial workflows without hallucination risks",
      "Webhooks architecture and idempotency handling for real-time payment status reconciliation"
    ],
    stack: [
      "Java 17",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "Gemini API",
      "JWT Auth",
      "Webhooks",
      "Async Pipelines",
      "Tailwind CSS"
    ],
    category: "AI & Automation",
    categories: ["AI & Automation", "Consumer & SaaS"],
    githubUrl: "https://github.com/boluthe/invoice-agent",
    status: "Live",
  },
  {
    slug: "cmr-system",
    title: "CMR System (Union Bank of Nigeria)",
    tagline: "Enterprise customer management, data consolidation, and operational reporting platform for core banking",
    problem:
      "Union Bank operated with customer data deeply fragmented across multiple siloed legacy systems—System A held account demographics, System B tracked transaction histories, and System C stored credit profiles. Operations teams and bank tellers wasted hours manually cross-referencing and consolidating data across disjointed terminal screens, creating high operational overhead, delayed customer service, and error-prone manual reporting.",
    solution:
      "Architected and developed a unified enterprise web platform and high-speed API aggregation layer using Java and Spring Boot. The system securely connects to disparate legacy core banking databases, transforms data into unified customer profiles, and caches high-frequency queries in PostgreSQL to serve instant operational dashboards and automated regulatory reports.",
    architectureBreakdown: [
      {
        label: "Core Banking API Gateway (Spring Boot & Java)",
        details: "Designed secure RESTful API endpoints that orchestrate concurrent connections to legacy core banking infrastructure. The gateway retrieves raw data from Systems A, B, and C, normalizes complex proprietary data structures, and serves clean, structured JSON to internal client applications. Wrote comprehensive OpenAPI/Swagger documentation for cross-departmental adoption."
      },
      {
        label: "High-Performance Caching Layer (PostgreSQL)",
        details: "Designed an intelligent, multi-tiered caching schema in PostgreSQL to store frequently accessed customer profiles and transaction summaries. This architecture dramatically decoupled read-traffic from brittle legacy mainframes, ensuring reports execute almost instantaneously without impacting core banking availability."
      },
      {
        label: "Enterprise Security & RBAC (JWT + Spring Security)",
        details: "Implemented stateless JWT authentication and strict Role-Based Access Control (RBAC) governed by least-privilege principles. Frontline tellers access basic account details, while branch managers and risk auditors unlock full credit histories and audit trails."
      },
      {
        label: "DevOps & Infrastructure-as-Code (Docker, Jenkins, Terraform)",
        details: "Containerized the entire microservice ecosystem using Docker for consistent multi-environment deployments. Built Jenkins CI/CD pipelines for automated regression testing and deployment, and authored declarative Terraform scripts to provision and manage cloud servers, database clusters, and secure networking."
      },
      {
        label: "Production Observability (Prometheus & ELK Stack)",
        details: "Embedded Prometheus metrics instrumentation across all API routes to track real-time query latencies, throughput, and database connection pool health. Deployed an ELK Stack (Elasticsearch, Logstash, Kibana) pipeline for centralized distributed logging and proactive error alerting."
      }
    ],
    evolution: [
      {
        phase: "V1 (Legacy Connectivity Gateway)",
        details: "Launched the initial synchronous API aggregation layer connecting directly to legacy mainframe systems. While successfully unifying customer data on a single dashboard, heavy multi-system joins caused query latencies to exceed 10+ seconds."
      },
      {
        phase: "V2 (Intelligent Caching & Query Optimization)",
        details: "Engineered and deployed the PostgreSQL intermediate caching and indexing layer. Query response times plummeted from >10 seconds down to sub-second (<800ms) execution, reducing load on core banking mainframes by over 70%."
      },
      {
        phase: "V3 (Granular RBAC & Audit Compliance)",
        details: "Upgraded the security architecture from broad employee access to strict, role-differentiated views. Tellers, supervisors, and compliance officers now interact with tailored UI permissions, ensuring strict adherence to Nigerian banking data privacy regulations."
      },
      {
        phase: "Post-Launch Observability Rollout",
        details: "Initial deployments lacked visibility into intermittent legacy network timeouts. Added complete Prometheus and ELK telemetry, turning blind spots into proactive alerts that ops teams intercept before employees report slowdowns."
      }
    ],
    outcome:
      "Approved, adopted, and deployed organization-wide across Union Bank operations. Successfully presented the system architecture, security rigor, and quantitative business impact directly to executive leadership (CIO and CTO). Proved enterprise-grade delivery capability across high-security banking infrastructure, legacy systems integration, and full DevOps lifecycle mastery.",
    role:
      "Java Backend & DevOps Engineer. Designed and developed the Spring Boot RESTful APIs, engineered the PostgreSQL caching schema, implemented JWT/RBAC security, built the Jenkins CI/CD pipelines, wrote Terraform IaC definitions, and configured Prometheus/ELK observability.",
    learnings: [
      "Navigating enterprise banking security standards, data encryption, and strict regulatory compliance",
      "Architecting high-concurrency caching layers to shield fragile legacy mainframe banking systems",
      "Implementing end-to-end DevOps automation (Jenkins, Docker, Terraform) and observability (Prometheus/ELK)",
      "Executive technical communication and translating architectural decisions into measurable ROI for C-suite leadership"
    ],
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "JWT Auth",
      "Jenkins CI/CD",
      "Docker",
      "Terraform IaC",
      "Prometheus",
      "ELK Stack"
    ],
    category: "Enterprise & Banking",
    categories: ["Enterprise & Banking"],
    availableOnRequest: false,
    status: "Live",
  },
  {
    slug: "iroko-ai",
    title: "IROKO AI Compliance Platform",
    tagline: "Regulatory compliance intelligence and automated rule evaluation platform for Nigerian microfinance banks",
    problem:
      "Nigerian microfinance banks manually track regulatory compliance across thousands of daily transaction records using fragmented spreadsheets. Without a centralized automated evaluation system, regulatory violations go unnoticed until expensive Central Bank or external audits catch them, exposing banks to severe fines and operational risks.",
    solution:
      "Built an intelligent compliance platform that ingests raw banking transaction data and evaluates it in real-time against configurable regulatory rules to flag potential violations before audit cycles. Features automated compliance audit report generation and an extensible rule engine.",
    architectureBreakdown: [
      {
        label: "Compliance Rule Engine (RESTful APIs)",
        details: "Designed high-performance REST APIs capable of ingesting batch transaction streams and executing them against modular regulatory evaluation criteria (e.g., flagging unverified account transfers >$10k or detecting structuring patterns)."
      },
      {
        label: "Dynamic Configuration Architecture",
        details: "Engineered a decoupled, configurable rule execution engine. Instead of hardcoding regulatory thresholds into backend application code, the system allows compliance officers and admins to dynamically add, modify, and tune compliance rules on the fly."
      },
      {
        label: "Data Modeling & Audit Reporting",
        details: "Architected relational PostgreSQL data models optimized for transactional time-series queries and rapid aggregation, enabling one-click generation of comprehensive, audit-ready compliance reports for regulatory bodies."
      }
    ],
    evolution: [
      {
        phase: "Day 1–3 (Hackathon Scope & Data Pipeline)",
        details: "During a high-pressure 7-day hackathon, led initial scope definition to pinpoint the top regulatory friction points for microfinance institutions. Rapidly resolved critical data access and ingestion pipeline blockers by Day 3."
      },
      {
        phase: "Day 4–7 (Pivoting to Dynamic Rule Engine)",
        details: "Started with hardcoded regulatory checks to validate the concept. Mid-sprint, architecturally refactored the core evaluation engine into a configurable rules database so non-technical compliance officers could independently manage thresholds without engineering intervention."
      }
    ],
    outcome:
      "Successfully shipped, tested, and deployed the complete system in just 7 days. The platform was validated on-site by microfinance domain experts during the live demo, proving the ability to lead cross-functional teams under intense time constraints while delivering mission-critical financial software.",
    role:
      "Project Manager & Backend Lead (Hackathon Team of 5). Wore two hats: As PM, led scope definition, daily standups, unblocking data pipelines, and coordinating frontend, QA, and design deliverables. As Backend Engineer, designed the core REST APIs, PostgreSQL schema, and the dynamic compliance rule engine.",
    learnings: [
      "Leading cross-functional engineering teams to ship production-grade systems under extreme 7-day constraints",
      "Architecting dynamic, configurable rule engines that empower domain experts without code deployments",
      "Translating complex Nigerian banking regulatory frameworks into clean data models and algorithmic checks"
    ],
    stack: [
      "Node.js",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Dynamic Rule Engine",
      "Agile/Scrum",
      "Tailwind CSS"
    ],
    category: "AI & Automation",
    categories: ["AI & Automation", "Enterprise & Banking"],
    status: "Live",
  },
  {
    slug: "fmcg-pos",
    title: "FMCG POS & Inventory Platform",
    tagline: "Offline-first point-of-sale and real-time inventory synchronization platform for wholesale and retail SMEs",
    problem:
      "Fast-moving consumer goods (FMCG) retailers and wholesalers across Nigeria rely on disconnected, error-prone tools like paper notebooks, basic calculators, and standalone Excel sheets. Sales transactions are not linked to stock levels in real-time, resulting in severe stockouts, untracked shrinkage, and inaccurate financial reporting. Furthermore, frequent internet outages and unstable power grids mean cloud-only POS software completely paralyzes business operations the moment the network drops.",
    solution:
      "Architecting and building a resilient, offline-first point-of-sale and inventory management platform specifically engineered for low-connectivity retail environments. Native Flutter tablet applications allow store clerks to process high-speed checkouts seamlessly offline, while a robust Spring Boot backend reconciles local transactions with cloud databases immediately upon network restoration.",
    architectureBreakdown: [
      {
        label: "Offline-First Mobile Architecture (Flutter & Hive/SQLite)",
        details: "Designed native Flutter POS client applications optimized for high-speed tablet operation. Integrated local high-speed NoSQL caching (Hive) and structured relational storage (SQLite) so every product lookup, barcode scan, and sales transaction occurs with zero network latency and 100% offline uptime."
      },
      {
        label: "Core Backend & Sync Engine (Java & Spring Boot)",
        details: "Architected the central transactional backend using Spring Boot and PostgreSQL. Developed deterministic synchronization algorithms capable of receiving batched offline transactions, reconciling inventory deltas, and handling timestamp ordering conflicts without double-counting inventory or revenue."
      },
      {
        label: "Multi-Store Inventory & Reordering Intelligence",
        details: "Engineered multi-warehouse stock allocation tracking, automated re-order level triggers based on historical sales velocity, and detailed daily profit margins breakdown reports for store proprietors."
      },
      {
        label: "Resilient Network State Handling",
        details: "Built background sync workers with exponential backoff and delta-based payloads. Only modified records are transmitted over cellular networks, minimizing bandwidth consumption and data costs for retail shop owners."
      }
    ],
    evolution: [
      {
        phase: "Phase 1 (Core POS & Offline Storage Engine)",
        details: "Developed the foundational Flutter tablet application with local Hive database persistence, enabling instantaneous product search, cart assembly, and offline receipt generation for high-volume retail checkouts."
      },
      {
        phase: "Phase 2 (Cloud Reconciler & Conflict Resolution Architecture)",
        details: "Built the Spring Boot cloud synchronization gateway. Solved the critical distributed systems challenge of multi-register concurrency—ensuring that when multiple offline tablets sync simultaneously, stock levels decrement accurately without race conditions."
      },
      {
        phase: "Phase 3 (Enterprise Analytics & Multi-Store Dashboard — Current Focus)",
        details: "Currently expanding the web-based managerial dashboard with real-time sales analytics, low-stock notifications, and staff performance metrics ahead of Q4 2026 production deployment."
      }
    ],
    outcome:
      "In active development (Expected production deployment Q4 2026). Solving one of the hardest problems in emerging market retail tech: building reliable, high-speed transactional software that survives network dropouts while maintaining strict data integrity and real-time cloud visibility.",
    role:
      "Sole Lead Full-Stack Architect. Designing the Spring Boot backend microservices, building the native Flutter cross-platform tablet client, engineering the offline-to-cloud synchronization state machine, and managing cloud database infrastructure.",
    learnings: [
      "Solving complex distributed systems synchronization, idempotency, and conflict resolution in offline-first mobile apps",
      "Optimizing native mobile UX and database read/write speeds for fast-paced, high-volume retail checkout counters",
      "Designing resilient Spring Boot APIs tailored to handle intermittent, high-latency cellular network connections"
    ],
    stack: [
      "Spring Boot",
      "Flutter",
      "PostgreSQL",
      "Hive Cache",
      "SQLite",
      "REST APIs",
      "Offline Sync Engine",
      "Tailwind CSS"
    ],
    category: "Consumer & SaaS",
    categories: ["Consumer & SaaS"],
    status: "In Progress",
  },
  {
    slug: "rencash",
    title: "RenCash Digital Loan Platform",
    tagline: "End-to-end digital underwriting, credit evaluation, and loan disbursement workflow platform",
    problem:
      "Traditional micro-lending institutions face painfully slow, paper-driven loan origination workflows. Loan officers manually collect paper applications, verify borrower identities, calculate debt-to-income ratios across disjointed spreadsheets, and route physical folders for managerial approval. This manual pipeline takes days, introduces human calculation errors, lacks clear underwriting visibility, and creates frustrating delays for borrowers urgently needing capital.",
    solution:
      "Built a secure, automated web platform that digitizes the entire loan origination and underwriting lifecycle. Borrowers submit digital applications through a responsive web portal, while an automated backend underwriting engine evaluates credit heuristics, calculates risk scores, and routes applications through multi-stage approval gates before triggering automated disbursement tracking.",
    architectureBreakdown: [
      {
        label: "Automated Underwriting & Credit Evaluation Engine (Spring Boot)",
        details: "Engineered backend service modules in Spring Boot that ingest borrower financial data, execute automated credit rule checks (income verification, existing debt burden, risk scoring), and instantly classify applications into instant approval, manual underwriter review, or automated rejection tracks."
      },
      {
        label: "Multi-Stage Workflow & Approval State Machine",
        details: "Designed a deterministic state machine using PostgreSQL and Spring transactional boundaries to track every loan application from 'SUBMITTED' through 'UNDER_REVIEW', 'APPROVED', 'DISBURSED', and 'REPAID'. Ensured complete audit trails for every status change and officer sign-off."
      },
      {
        label: "Loan Officer & Borrower Dashboards (React)",
        details: "Developed intuitive React web dashboards for credit analysts and branch managers to inspect borrower verification documents, view automated credit score breakdowns, and approve disbursements with one click."
      },
      {
        label: "Strict Agile Delivery & Project Coordination",
        details: "Coordinated the cross-functional engineering delivery across backend developers, frontend UI engineers, QA testers, and product stakeholders using rigorous Agile/Scrum sprint cycles to hit aggressive market launch deadlines."
      }
    ],
    evolution: [
      {
        phase: "Sprint 1–3 (Core Origination & Application Pipeline)",
        details: "Successfully built and deployed the core application intake portals and PostgreSQL schema, replacing physical application forms with secure, structured digital submissions."
      },
      {
        phase: "Sprint 4–6 (Underwriting Automation & Risk Scoring)",
        details: "Integrated the automated credit heuristics engine. Reduced manual underwriter review time by 60% by filtering out high-risk applications automatically and presenting pre-calculated debt ratios to credit officers."
      },
      {
        phase: "Sprint 7+ (Disbursement Tracking & Production Hardening)",
        details: "Completed the end-to-end disbursement tracking workflows, automated email/SMS status notifications, and comprehensive audit logs, culminating in a flawless on-time production rollout."
      }
    ],
    outcome:
      "Successfully delivered and deployed on schedule using Agile methodologies. Streamlined loan processing times from several days down to a few hours while providing executives with real-time portfolio analytics. Proves dual capability as both a hands-on technical backend architect and a disciplined project manager capable of driving cross-functional delivery.",
    role:
      "Co-Developer & Project Manager. Contributed directly to the Spring Boot REST API architecture, database design, and credit engine logic while leading sprint planning, backlog refinement, QA coordination, and stakeholder alignment across the entire project lifecycle.",
    learnings: [
      "Leading distributed cross-functional engineering teams using structured Agile/Scrum delivery methodologies",
      "Balancing deep technical hands-on coding with daily project management and stakeholder communication",
      "Designing bulletproof financial state machines for loan origination, credit scoring, and disbursement tracking"
    ],
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "React.js",
      "REST APIs",
      "Workflow Engine",
      "Agile/Scrum",
      "Tailwind CSS",
      "JWT Auth"
    ],
    category: "Enterprise & Banking",
    categories: ["Enterprise & Banking", "Consumer & SaaS"],
    status: "Live",
  },
  {
    slug: "inventory-management",
    title: "SME Real-Time Inventory & Stock Platform",
    tagline: "High-concurrency inventory tracking, automated reorder notifications, and multi-warehouse management",
    problem:
      "Small and medium retail businesses across Lagos constantly lose revenue to unrecorded shrinkage, unexpected stockouts of high-demand items, and silent expiration of perishable inventory. Owners lack real-time visibility into what items are sitting on store shelves versus warehouse backups, and restocking decisions are driven entirely by guesswork rather than empirical sales data.",
    solution:
      "Designed and built a robust real-time inventory management web application tailored for multi-user retail operations. Tracks item quantities, batch numbers, and exact expiration dates across multiple storage locations, automatically alerting managers when stock levels breach customized reorder thresholds.",
    architectureBreakdown: [
      {
        label: "Transactional Stock Reconciliation Engine (Spring Boot)",
        details: "Built the core backend stock processing APIs with strict ACID compliance. Implemented optimistic locking and row-level database transactions in PostgreSQL to prevent double-deduction race conditions when multiple cashiers check out stock simultaneously."
      },
      {
        label: "Automated Expiration & Low-Stock Alert System",
        details: "Designed background scheduled tasks that continuously scan batch expiration dates and current inventory thresholds. Triggers instantaneous automated email notifications and dashboard badges when items approach expiration or hit critical reorder levels."
      },
      {
        label: "Hierarchical Role-Based Access Control (RBAC)",
        details: "Architected a multi-tiered security system in Spring Security allowing store owners to assign specific operational permissions. Store clerks can only adjust stock during verified checkouts or deliveries, while inventory auditors and owners retain full administrative oversight."
      },
      {
        label: "Interactive Operational Dashboard (React + Tailwind)",
        details: "Built a responsive, dark-mode enabled frontend dashboard with searchable product catalogs, instant CSV/Excel stock data export, and visual stock-level indicator bars."
      }
    ],
    evolution: [
      {
        phase: "V1 (Single-Store Stock Ledger)",
        details: "Launched the MVP allowing shop owners to input stock counts and track basic sales deductions via clean REST APIs and React tables."
      },
      {
        phase: "V2 (Multi-Location & Concurrency Hardening)",
        details: "Upgraded the database schema and backend APIs to support multi-warehouse transfers and optimistic locking—solving concurrency bugs where simultaneous stock adjustments previously collided."
      },
      {
        phase: "V3 (Automated Alerts & Expiration Intelligence)",
        details: "Added the automated batch expiration scanning and reorder threshold notification engine, directly helping merchants eliminate product spoilage and maintain optimal shelf stock."
      }
    ],
    outcome:
      "Live and actively deployed across commercial retail and wholesale businesses. Enabled merchants to eliminate stockouts on best-selling goods and cut perishable inventory waste by over 35%. Demonstrates mastery of transactional data integrity, concurrency handling, and full-stack business software development.",
    role:
      "Sole Full-Stack Engineer. Architected and developed the Spring Boot backend, designed the relational PostgreSQL schema and concurrency locks, built the React frontend dashboard, and engineered the automated alert cron engine.",
    learnings: [
      "Enforcing strict database concurrency control, optimistic locking, and ACID compliance in multi-user inventory software",
      "Designing reliable notification architectures and background job schedulers for time-sensitive stock alerts",
      "Structuring intuitive, hierarchical Role-Based Access Control (RBAC) schemas for retail operational environments"
    ],
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "React.js",
      "Tailwind CSS",
      "REST APIs",
      "Role-Based Access Control",
      "Automated Alerts",
      "ACID Transactions"
    ],
    category: "Consumer & SaaS",
    categories: ["Consumer & SaaS"],
    status: "Live",
  },
  {
    slug: "permit-ai",
    title: "PermitAI (Phase 1 Architecture)",
    tagline: "PropTech regulatory database and state machine platform for municipal permit workflow automation",
    problem:
      "Real estate developers and construction firms face crippling project delays when navigating fragmented municipal and government permit approval pipelines. Building applications must pass through dozens of disjointed regulatory bodies (environmental, structural, zoning, and fire safety), with zero centralized tracking or document verification transparency—turning permit acquisition into a multi-month bureaucratic black box.",
    solution:
      "Architected and developed Phase 1 of an advanced digital permit management and compliance verification platform. Centralizes regulatory documentation, verifies submission completeness via automated document pipelines, and orchestrates complex, multi-agency permit applications through a deterministic, auditable workflow state machine.",
    architectureBreakdown: [
      {
        label: "Multi-Agency State Machine Engine (Node.js & PostgreSQL)",
        details: "Designed a highly scalable, deterministic workflow state engine utilizing PostgreSQL JSONB schemas and state transition tables. Every permit application tracks precise approval stages across independent regulatory agencies, preventing out-of-order approvals or skipped compliance checks."
      },
      {
        label: "Document Verification & Compliance Pipeline",
        details: "Built modular document ingestion APIs that validate uploaded architectural drawings, land titles, and structural certifications against required regulatory checklists before applications can enter agency queue tracks."
      },
      {
        label: "Audit-Ready Regulatory Database Architecture",
        details: "Engineered immutable audit logging tables ensuring every agency review, comment, approval signature, or document rejection is permanently timestamped and traceable for legal and municipal compliance."
      },
      {
        label: "Developer & Agency Portal APIs (REST)",
        details: "Developed clean RESTful API contracts enabling both applicant-facing dashboards and agency-facing review portals to interact with the core workflow engine seamlessly."
      }
    ],
    evolution: [
      {
        phase: "Phase 1.0 (Core Database & State Machine Architecture)",
        details: "Designed and implemented the core relational schema, state transition engine, and API endpoints, establishing a rock-solid foundation for multi-stage government approvals."
      },
      {
        phase: "Phase 1.5 (Document Pipeline & Audit Logging Validation)",
        details: "Completed the document validation gateway and immutable audit logging layers, proving that complex municipal workflows can be modeled cleanly in code without state leaks."
      },
      {
        phase: "Phase 2 Roadmap (AI Document Parsing & Live Agency Integration)",
        details: "Preparing architecture for Phase 2 validation, which will introduce automated OCR/LLM extraction of architectural drawing metadata and direct API hooks into municipal databases."
      }
    ],
    outcome:
      "Phase 1 core backend architecture and state machine engine completed successfully. Validated the technical feasibility of automating multi-agency permit lifecycles through deterministic software engineering. Currently in technical staging awaiting Phase 2 field metrics.",
    role:
      "Core Backend & Systems Architect. Designed the relational and JSONB database schema, built the Node.js/Express REST APIs, authored the state machine transition logic, and implemented document verification pipelines.",
    learnings: [
      "Architecting deterministic, complex state machines for long-running, multi-stakeholder government workflows",
      "Designing flexible data models capable of handling evolving municipal compliance and document verification rules",
      "Structuring immutable audit trails and secure document handling pipelines for regulatory software"
    ],
    stack: [
      "Node.js",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "State Machine Engine",
      "Document Pipeline",
      "Workflow Automation",
      "Tailwind CSS"
    ],
    category: "AI & Automation",
    categories: ["AI & Automation"],
    status: "In Progress",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

