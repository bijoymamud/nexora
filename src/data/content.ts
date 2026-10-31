export interface EngagementModel {
  id: string;
  title: string;
  tagline: string;
  idealFor: string;
  rampUpTime: string;
  commitment: string;
  description: string;
  features: string[];
  recommendedBadge?: string;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  metrics: string;
  techStack: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  title: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  duration: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  experience: string;
  location: string;
  status: "Available Immediately" | "Allocated on Sprint" | "Reserve Pool";
  avatar: string;
  specialization: string;
  stack: string[];
  recentWin: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Engagement" | "Engineering" | "Security" | "Billing";
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: "team-augmentation",
    title: "Team Augmentation",
    tagline: "Embed elite senior engineers directly into your active sprint cycles.",
    idealFor: "Scale-ups needing immediate velocity or specialized missing capabilities.",
    rampUpTime: "3 to 5 business days",
    commitment: "Flexible monthly rollover",
    recommendedBadge: "Fastest Scaling",
    description:
      "Seamlessly integrate top 1.5% senior software engineers who adopt your Git workflows, Jira boards, and architectural standards without overhead.",
    features: [
      "Zero recruitment latency with pre-vetted senior talent",
      "Direct daily standup participation and Slack integration",
      "Overlapping working hours with US/EU time zones (4-6 hours minimum)",
      "Strict 2-week risk-free trial guarantee",
      "Immediate capability to scale squad size up or down with 14-day notice",
    ],
  },
  {
    id: "dedicated-squads",
    title: "Dedicated Agile Squads",
    tagline: "Autonomous cross-functional product squads delivering complete roadmaps.",
    idealFor: "Companies launching new product verticals or modernizing legacy monoliths.",
    rampUpTime: "1 to 2 weeks",
    commitment: "Quarterly or semi-annual milestones",
    recommendedBadge: "Most Popular",
    description:
      "A fully managed, battle-tested squad comprising a Lead Architect, Senior Fullstack Engineers, QA Automation Specialists, and a Technical PM focused entirely on your KPIs.",
    features: [
      "Complete delivery accountability with structured bi-weekly demo releases",
      "Embedded QA automation ensuring 90%+ test coverage prior to staging",
      "Architectural governance adhering to DDD, clean architecture, and OWASP",
      "Full ownership of code repositories, IP rights, and infrastructure scripts",
      "Transparent Jira sprint burndowns and real-time velocity metrics",
    ],
  },
  {
    id: "end-to-end",
    title: "End-to-End Product Engineering",
    tagline: "From architectural blueprint to production deployment and 24/7 SRE.",
    idealFor: "Established enterprises seeking turnkey digital product transformations.",
    rampUpTime: "2 to 3 weeks discovery & scoping",
    commitment: "Fixed scope / Milestone-based SLA",
    description:
      "We take full lifecycle responsibility: system design, high-fidelity UI/UX design systems, cloud-native backend infrastructure, frontend web/mobile apps, and continuous monitoring.",
    features: [
      "Rigorous discovery phase establishing technical specs and risk matrices",
      "Production-grade Infrastructure as Code (Terraform / Kubernetes)",
      "99.99% uptime SLA with automated synthetic monitoring and alerting",
      "Comprehensive handover documentation and engineering knowledge transfer",
      "Post-launch L2/L3 production support and scheduled security patching",
    ],
  },
  {
    id: "mvp-launchpad",
    title: "Rapid MVP Launchpad",
    tagline: "Transform validated concepts into investor-ready products in 60 days.",
    idealFor: "Seed to Series A startups validating high-stakes market demand.",
    rampUpTime: "5 business days",
    commitment: "Fixed 8-week delivery cycle",
    description:
      "A laser-focused build designed to achieve product-market fit without accumulating technical debt. We use scalable frameworks ready for rapid post-launch iteration.",
    features: [
      "Prioritized backlog based on MoSCoW prioritization matrix",
      "Scalable foundational architecture preventing costly rewrites",
      "Integrated analytics, authentication, billing, and event telemetry",
      "Investor-grade product demo recording and architecture documentation",
      "Dedicated tech advisor support through your initial fundraising pitches",
    ],
  },
];

export const CORE_CAPABILITIES: ServiceItem[] = [
  {
    id: "custom-software",
    category: "Core Engineering",
    title: "Custom Software & Distributed Systems",
    description:
      "High-throughput, event-driven backends and distributed microservices engineered to handle millions of concurrent operations with single-digit millisecond latency.",
    metrics: "Sub-15ms p99 latency across distributed clusters",
    techStack: ["Go", "Node.js/TypeScript", "Python", "Rust", "Apache Kafka", "PostgreSQL"],
    deliverables: [
      "Event-driven microservices architecture",
      "ACID-compliant transactional database clustering",
      "Comprehensive OpenAPI/Swagger API documentation",
      "Zero-downtime blue/green deployment configurations",
    ],
  },
  {
    id: "ai-systems",
    category: "AI & Intelligence",
    title: "Applied AI, LLMs & Retrieval Systems",
    description:
      "Enterprise-grade retrieval-augmented generation (RAG), fine-tuned domain models, and autonomous agent workflows embedded securely behind private VPC perimeter boundaries.",
    metrics: "94.2% factual precision with strict PII masking",
    techStack: ["PyTorch", "LangChain/LlamaIndex", "pgvector", "FastAPI", "OpenAI/Claude API", "vLLM"],
    deliverables: [
      "Enterprise RAG architecture with vector database indexing",
      "Private VPC model hosting preventing proprietary data leakage",
      "Automated evaluation pipelines for hallucination prevention",
      "Autonomous tool-calling agent systems for operational workflows",
    ],
  },
  {
    id: "cloud-devops",
    category: "Infrastructure",
    title: "Cloud Infrastructure, Kubernetes & SRE",
    description:
      "Scalable cloud foundations built on Infrastructure as Code. We ensure SOC 2 Type II compliance, multi-region failover, automated CI/CD pipelines, and FinOps cost optimization.",
    metrics: "40%+ average cloud spend reduction via container rightsizing",
    techStack: ["AWS", "GCP", "Kubernetes", "Terraform", "Docker", "Prometheus/Grafana", "ArgoCD"],
    deliverables: [
      "Immutable Infrastructure as Code via Terraform & Helm",
      "GitOps continuous deployment pipelines with automated rollback",
      "Zero-trust VPC networking with mTLS and role-based access control",
      "Automated disaster recovery testing with RTO < 15min, RPO < 1min",
    ],
  },
  {
    id: "modern-web-mobile",
    category: "Frontend & Mobile",
    title: "High-Performance Web & Native Mobile",
    description:
      "Pixel-precise, accessible, and reactive frontend experiences built with modern SSR frameworks and cross-platform native engines for instantaneous user interactions.",
    metrics: "98+ Lighthouse performance score on core journeys",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native", "Swift/Kotlin"],
    deliverables: [
      "Server-Side Rendered (SSR) web applications with sub-second LCP",
      "Design systems conforming strictly to WCAG 2.1 AA accessibility",
      "Offline-first mobile applications with background data synchronization",
      "Micro-frontend architectures for distributed engineering teams",
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-gateway",
    clientIndustry: "FinTech & Banking Infrastructure",
    title: "High-Throughput Global Payments & Multi-Currency Clearing Gateway",
    challenge:
      "A European FinTech was experiencing transaction timeouts and reconciliation discrepancies during peak surge volumes on their legacy monolithic payment engine.",
    solution:
      "Engineered an event-driven clearing pipeline using Go, Apache Kafka, and CockroachDB with distributed saga transaction management and idempotency guarantees.",
    impactMetrics: [
      { label: "Throughput Surge", value: "8,500 tx/sec" },
      { label: "Latency Reduction", value: "68% faster" },
      { label: "SLA Adherence", value: "99.999% uptime" },
      { label: "Annual Savings", value: "1.4M+ USD saved" },
    ],
    tags: ["Go", "Kafka", "CockroachDB", "Kubernetes", "PCI-DSS Level 1"],
    duration: "6 months deployment",
  },
  {
    id: "healthtech-diagnostics",
    clientIndustry: "HealthTech & Clinical AI",
    title: "Real-Time Diagnostic Imaging Analysis with Edge Inference",
    challenge:
      "Radiology network needed automated anomaly detection for MRI scans capable of operating locally in hospital servers with zero patient data leaving on-premise firewalls.",
    solution:
      "Built a containerized PyTorch vision pipeline optimized with TensorRT, running on hospital edge nodes with secure federated model updates.",
    impactMetrics: [
      { label: "Inference Speed", value: "<120ms / scan" },
      { label: "Diagnostic Recall", value: "99.2% accuracy" },
      { label: "Compliance", value: "100% HIPAA/GDPR" },
      { label: "Radiologist Hours", value: "-4.5 hrs / day" },
    ],
    tags: ["PyTorch", "TensorRT", "FastAPI", "Docker", "DICOM", "HIPAA"],
    duration: "8 months deployment",
  },
  {
    id: "logistics-dispatch",
    clientIndustry: "Supply Chain & Smart Mobility",
    title: "Dynamic Autonomous Fleet Routing & Predictive Load Balancing",
    challenge:
      "A North American logistics carrier with 4,000+ freight trucks suffered from empty miles and driver idle time due to static dispatch scheduling.",
    solution:
      "Deployed a real-time mathematical optimization solver paired with predictive freight pricing models that recalculates routing every 90 seconds based on live traffic.",
    impactMetrics: [
      { label: "Empty Mile Reduction", value: "31% decrease" },
      { label: "Fuel Cost Savings", value: "4.8M+ USD / year" },
      { label: "On-Time Delivery", value: "98.7% rate" },
      { label: "Fleet Utilization", value: "+24% increase" },
    ],
    tags: ["Python", "Rust", "Redis Cluster", "AWS EKS", "Mapbox APIs"],
    duration: "5 months deployment",
  },
];

export const FEATURED_DEVELOPERS: DeveloperProfile[] = [
  {
    name: "Shakeebul Islam",
    role: "Head of Technical Operation",
    experience: "12+ Yrs Exp · Enterprise Scale & Agile Delivery",
    location: "Dhaka, Bangladesh (UTC+6)",
    status: "Available Immediately",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=1100&q=85",
    specialization: "Engineering operations governance, multi-squad agile calibration, distributed platform resilience.",
    stack: ["Go", "Node.js", "Kubernetes", "AWS EKS", "Kafka"],
    recentWin: "Orchestrated 80+ engineers across 12 mission-critical squads with 99.98% delivery predictability.",
  },
  {
    name: "Marcus Vance",
    role: "Staff Distributed Systems Architect",
    experience: "12+ Yrs Exp · Ex-Stripe & AWS",
    location: "Stockholm, Sweden (UTC+1)",
    status: "Available Immediately",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&h=1100&q=85",
    specialization: "High-scale Go & Rust event pipelines, distributed consensus, Kafka streaming fabrics.",
    stack: ["Go", "Rust", "Kafka", "Kubernetes", "PostgreSQL"],
    recentWin: "Architected a global settlement engine processing 14k rps with zero transaction loss.",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Principal AI & Applied LLM Systems Engineer",
    experience: "9+ Yrs Exp · Ph.D. ETH Zurich",
    location: "Berlin, Germany (UTC+1)",
    status: "Available Immediately",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=1100&q=85",
    specialization: "Enterprise RAG pipelines, fine-tuned domain models, vector retrieval optimization.",
    stack: ["PyTorch", "Python", "vLLM", "pgvector", "LangGraph"],
    recentWin: "Engineered a regulated literature retrieval engine achieving 97.4% citation precision.",
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Lead Cloud Native & Platform Architect",
    experience: "10+ Yrs Exp · AWS Solutions Architect Pro",
    location: "London, UK (UTC+0)",
    status: "Available Immediately",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=1100&q=85",
    specialization: "Next.js App Router, multi-region AWS infrastructure, micro-frontends.",
    stack: ["TypeScript", "Next.js", "Node.js", "AWS EKS", "GraphQL"],
    recentWin: "Reduced global p99 cold-start latency from 2.4s to 180ms for enterprise portal.",
  },
  {
    name: "Sofia Chen",
    role: "Senior Security Infrastructure & SRE Lead",
    experience: "8+ Yrs Exp · CISSP Certified",
    location: "Toronto, Canada (UTC-5)",
    status: "Available Immediately",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&h=1100&q=85",
    specialization: "SOC 2 Type II readiness, zero-trust network policies, automated GitOps deployments.",
    stack: ["Terraform", "ArgoCD", "Kubernetes", "Datadog", "Vault"],
    recentWin: "Automated vulnerability patching across 240 microservices with zero production downtime.",
  },
  {
    name: "David Lindqvist",
    role: "Principal Performance & Low-Latency Engineer",
    experience: "14+ Yrs Exp · Ex-Bloomberg",
    location: "Zurich, Switzerland (UTC+1)",
    status: "Available Immediately",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=1100&q=85",
    specialization: "Sub-millisecond order routing, C++ memory architectures, zero-copy kernel networking.",
    stack: ["C++20", "Rust", "Linux Kernel", "gRPC", "eBPF"],
    recentWin: "Reduced L2 market data processing jitter by 74% during peak trading volatility.",
  },
  {
    name: "Amara Okafor",
    role: "Staff Data Platform & Streaming Architect",
    experience: "11+ Yrs Exp · Ex-Netflix & Apache Committer",
    location: "Amsterdam, Netherlands (UTC+1)",
    status: "Available Immediately",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=1100&q=85",
    specialization: "Petabyte-scale distributed ingestion pipelines, Flink real-time stream processing.",
    stack: ["Apache Flink", "Kafka", "Iceberg", "Spark", "Python"],
    recentWin: "Consolidated 14 disparate data pipelines into a single unified real-time streaming lakehouse.",
  },
  {
    name: "Kenji Takahashi",
    role: "Lead Mobile Systems & Cross-Platform Architect",
    experience: "9+ Yrs Exp · Ex-Sony",
    location: "Tokyo, Japan (UTC+9)",
    status: "Available Immediately",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&h=1100&q=85",
    specialization: "High-frame-rate React Native TurboModules, native Swift / Kotlin bridging, offline sync.",
    stack: ["React Native", "TypeScript", "Swift", "Kotlin", "SQLite"],
    recentWin: "Sustained fluid 60fps animations on lower-end devices for banking fintech application.",
  },
];

export const TECH_MATRIX = [
  {
    domain: "Backend & Systems",
    technologies: [
      { name: "Go", badge: "High Concurrency" },
      { name: "Node.js / TypeScript", badge: "Enterprise API" },
      { name: "Python / FastAPI", badge: "Async & AI" },
      { name: "Rust", badge: "Zero Overhead" },
      { name: "Java / Spring Boot", badge: "Legacy Modernization" },
      { name: "Elixir / Phoenix", badge: "Real-time Telemetry" },
    ],
  },
  {
    domain: "AI & Machine Learning",
    technologies: [
      { name: "PyTorch & Transformers", badge: "Deep Learning" },
      { name: "LangChain & LlamaIndex", badge: "Agentic RAG" },
      { name: "pgvector & Pinecone", badge: "Semantic Search" },
      { name: "vLLM / TensorRT", badge: "Low Latency Inference" },
      { name: "OpenAI / Anthropic APIs", badge: "SaaS Intelligence" },
      { name: "Hugging Face Models", badge: "Private Distillation" },
    ],
  },
  {
    domain: "Frontend & Mobile",
    technologies: [
      { name: "React & Next.js 14+", badge: "SSR & Edge Routing" },
      { name: "TypeScript", badge: "Strict Type Safety" },
      { name: "Tailwind CSS & shadcn", badge: "Design Systems" },
      { name: "React Native", badge: "Cross-Platform" },
      { name: "Swift & Kotlin", badge: "Native Experience" },
      { name: "Vue.js / Nuxt", badge: "High Agility" },
    ],
  },
  {
    domain: "Cloud & Reliability",
    technologies: [
      { name: "AWS & Google Cloud", badge: "Multi-Cloud Infra" },
      { name: "Kubernetes (EKS/GKE)", badge: "Container Fleet" },
      { name: "Terraform & OpenTofu", badge: "GitOps IaC" },
      { name: "PostgreSQL & CockroachDB", badge: "Distributed SQL" },
      { name: "Apache Kafka & Redis", badge: "Event Streaming" },
      { name: "Datadog & Grafana", badge: "Full Observability" },
    ],
  },
];

export const DELIVERY_FRAMEWORK = [
  {
    step: "01",
    phase: "Discovery & Architectural Blueprint",
    duration: "Week 1",
    summary:
      "We unpack your business objectives, analyze existing technical debt, model data flows, and formalize an immutable architectural spec.",
    activities: [
      "Technical debt audit & code review of existing repositories",
      "Domain-Driven Design (DDD) boundary and data contract modeling",
      "Selection of tech stack balancing velocity, scalability, and hiring ease",
      "Deliverable: Architecture Decision Records (ADRs) & sprint milestone map",
    ],
  },
  {
    step: "02",
    phase: "Squad Assembly & Environment Provisioning",
    duration: "Week 2",
    summary:
      "We handpick senior engineers with domain expertise, provision automated staging environments, and calibrate sprint cadences.",
    activities: [
      "Selection of pre-vetted engineers matched to your technical profile",
      "Automated CI/CD pipeline setup with pre-commit security linters",
      "Staging and preview deployment environments with sanitized mock data",
      "Direct integration into your Jira, Slack, and GitHub workflows",
    ],
  },
  {
    step: "03",
    phase: "Agile Sprint Cycles & Test Automation",
    duration: "Bi-Weekly Cadence",
    summary:
      "Predictable two-week sprints featuring continuous integration, automated unit and integration tests, and live bi-weekly stakeholder demonstrations.",
    activities: [
      "Daily asynchronous check-ins and structured 15-minute sync standups",
      "Automated test coverage gating every pull request (unit, integration, e2e)",
      "Bi-weekly live software demonstrations in staging environments",
      "Sprint retrospectives and continuous velocity optimization",
    ],
  },
  {
    step: "04",
    phase: "Production Hardening & 24/7 SRE Handover",
    duration: "Continuous",
    summary:
      "Zero-downtime cutovers, security penetration testing, automated canary deployments, and ongoing 99.99% SLA monitoring.",
    activities: [
      "Blue/green or canary production cutovers with instant rollback hooks",
      "Third-party penetration testing and SOC 2 / HIPAA compliance audits",
      "24/7 synthetic monitoring, error tracking, and alerting runbooks",
      "Clean source code ownership and intellectual property handover",
    ],
  },
];

export const CLIENT_TESTIMONIALS = [
  {
    quote:
      "Nexora's dedicated squad integrated into our payments architecture in less than a week. Their senior Go engineers refactored our core ledger service, allowing us to process Black Friday volume without a single dropped transaction.",
    author: "Alexander Lindqvist",
    title: "Chief Technology Officer",
    company: "NordicPay Financial",
    logoText: "NORDICPAY",
    verifiedMetric: "Processed 140M+ USD in peak volume",
    country: "Sweden",
  },
  {
    quote:
      "Most agencies try to sell you junior developers disguised with layers of project management. Nexora provided genuinely senior engineers who pushed back on flawed architectural decisions and saved us months of rework.",
    author: "Dr. Rachel Sterling",
    title: "VP of Engineering",
    company: "OmniHealth Intelligence",
    logoText: "OMNIHEALTH",
    verifiedMetric: "Sub-100ms inference achieved",
    country: "United States",
  },
  {
    quote:
      "We needed an investor-ready MVP with complex geospatial optimization in 60 days. Nexora hit the deadline two weeks early, and the clean code architecture directly helped us close our 6.2M USD Series A.",
    author: "Julian Thorne",
    title: "Co-Founder & CEO",
    company: "FleetPulse Logistics",
    logoText: "FLEETPULSE",
    verifiedMetric: "Closed 6.2M USD Series A funding",
    country: "United Kingdom",
  },
  {
    quote:
      "Migrating our streaming ingestion pipeline to Apache Flink seemed like a 9-month ordeal. Nexora's platform engineers delivered the cluster cutover in 11 weeks with 0.00% event loss across 2.4PB of historical data.",
    author: "Marcus Vance-Heller",
    title: "Head of Infrastructure",
    company: "DataMesh Systems",
    logoText: "DATAMESH",
    verifiedMetric: "2.4PB Zero-Loss Migration",
    country: "Germany",
  },
  {
    quote:
      "Their automated CI/CD and SOC 2 Type II compliance controls gave our auditors zero room for findings. It's rare to find an external engineering partner that cares as much about code quality as our core founders.",
    author: "Elena Rostova-Berg",
    title: "Chief Information Security Officer",
    company: "Verity Vault",
    logoText: "VERITY",
    verifiedMetric: "100% SOC 2 Type II Audit Pass",
    country: "Switzerland",
  },
  {
    quote:
      "Nexora didn't just write code; they transformed our engineering velocity. We went from deploying bi-monthly with high failure rates to deploying 6 times a day with automated canary verification.",
    author: "Siddharth Nair",
    title: "VP of Product Engineering",
    company: "AetherScale Cloud",
    logoText: "AETHERSCALE",
    verifiedMetric: "6x Daily Production Releases",
    country: "Singapore",
  },
  {
    quote:
      "Rewriting our core matching algorithm in Rust reduced compute instance costs by 48% while cutting p99 response times from 340ms to 18ms. Outstanding engineering craftsmanship.",
    author: "Tariq Al-Sabah",
    title: "Head of Core Systems",
    company: "Q-Ventures Global",
    logoText: "Q-VENTURES",
    verifiedMetric: "48% AWS Infrastructure Savings",
    country: "UAE",
  },
  {
    quote:
      "The transparency and rigor of Nexora's delivery governance is unmatched. Every single pull request is backed by 85%+ test coverage, peer ADRs, and direct Jira/Slack alignment.",
    author: "Claire Dupont",
    title: "Director of Software Engineering",
    company: "Lumina Labs",
    logoText: "LUMINA",
    verifiedMetric: "88% Automated Test Coverage",
    country: "France",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: "Engagement",
    question: "How quickly can engineers join our active sprint cycles?",
    answer:
      "For individual senior engineers and team augmentation, we typically complete technical alignment and onboarding within 3 to 5 business days. For complete dedicated agile squads (3-8 engineers plus Tech Lead), onboarding is achieved in 10 to 14 business days.",
  },
  {
    category: "Engagement",
    question: "How does the 2-week risk-free trial work?",
    answer:
      "Every new developer allocation begins with an initial two-week trial period. If you feel the engineer's technical performance or cultural alignment does not meet your expectations, we will either replace them immediately at zero additional cost or waive all charges for those two weeks.",
  },
  {
    category: "Engineering",
    question: "How do you vet your senior engineers?",
    answer:
      "Our vetting acceptance rate is 1.5%. Candidates undergo a rigorous 4-stage technical evaluation: live algorithmic problem-solving, real-world system architecture design under high-load conditions, code quality/security review, and direct communication/behavioral vetting.",
  },
  {
    category: "Engineering",
    question: "Who owns the intellectual property and code written during the engagement?",
    answer:
      "You retain 100% full ownership of all source code, architecture documentation, design files, infrastructure scripts, and intellectual property from day one. All code is committed directly to your private GitHub or GitLab repositories.",
  },
  {
    category: "Security",
    question: "What security and data privacy standards do you enforce?",
    answer:
      "All engineers sign comprehensive NDAs and strict IP assignment agreements. We enforce SOC 2 Type II compliance workflows, encrypted hardware endpoints, zero-trust VPN access, and mandatory multi-factor authentication. Client code never trains public AI models.",
  },
  {
    category: "Billing",
    question: "What are your pricing structures and billing terms?",
    answer:
      "We provide two transparent models: Dedicated Developer & Squad allocation billed on a predictable monthly retainer based on seniority tier, and Milestone-based fixed-fee billing for well-defined end-to-end projects. Invoices are issued net-15 with itemized timesheet logs.",
  },
];
