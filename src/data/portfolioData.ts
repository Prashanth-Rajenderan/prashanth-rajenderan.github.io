export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tech: string[];
  problem: string;
  solution: string;
  outcome: string;
  award?: string;
  workflow: string[];
}

export const PERSONAL_INFO = {
  name: "Prashanth Rajenderan",
  title: "Senior DevOps & Data Platform Engineer",
  headline: "Multi-Cloud Engineering | Platform Engineering | Kubernetes | Terraform | GitOps | DevSecOps | AI-Powered Automation",
  tagline: "Building reliable cloud platforms, secure delivery pipelines, and intelligent infrastructure automation.",
  location: "Hyderabad, Telangana, India",
  experienceYears: "10+",
  email: "prashanthrajenderan@gmail.com",
  linkedin: "https://www.linkedin.com/in/prashanth-rajenderan/",
  resumePath: "/resume/Prashanth_Rajenderan_Resume.pdf",
};

export const METRICS = [
  { label: "Engineering Experience", value: "10+", suffix: "Years", desc: "Enterprise scale across AWS, Azure, & GCP" },
  { label: "Enterprise Apps Supported", value: "15+", suffix: "Workloads", desc: "Mission-critical Data & AI platforms" },
  { label: "Teams Cost-Optimized", value: "30+", suffix: "Engineering Teams", desc: "Automated rightsizing & scheduling" },
  { label: "AWS Cost Reduction", value: "7.5%", suffix: "Cost Cut", desc: "Direct OPEX savings achieved" },
  { label: "GKE App Onboarding", value: "1-2", suffix: "Days (was 3-4)", desc: "Accelerated via MCP & AI agents" },
];

export const SERVICES = [
  {
    title: "Multi-Cloud Engineering",
    desc: "Design, provision, operate, and troubleshoot mission-critical enterprise workloads across AWS, Microsoft Azure, and Google Cloud Platform with unified governance.",
    tech: ["AWS", "Azure", "GCP", "Cloud Architecture"]
  },
  {
    title: "Data Platform Engineering",
    desc: "Provision resilient cloud infrastructure supporting Dataiku, Databricks, Azure Data Factory, ADLS Gen2, and generative AI workloads (Azure OpenAI & Bedrock).",
    tech: ["Databricks", "ADLS Gen2", "ADF", "Dataiku Fleet", "OpenAI"]
  },
  {
    title: "Platform Engineering & GitOps",
    desc: "Automate zero-drift infrastructure using Terraform and drive zero-touch progressive deliveries via GitHub Actions, Helm, and Argo CD.",
    tech: ["Terraform", "Argo CD", "Kubernetes", "Helm", "GitOps"]
  },
  {
    title: "DevSecOps & Governance",
    desc: "Shift security left by embedding SonarQube, Snyk, IAM least privilege, Key Vault secrets management, and automated compliance into CI/CD pipelines.",
    tech: ["SonarQube", "Snyk", "Azure Key Vault", "IAM Policies"]
  },
  {
    title: "AI-Powered DevOps Automation",
    desc: "Leverage Model Context Protocol (MCP) servers, agentic orchestration, and LLM-assisted workflows to accelerate platform onboarding and site reliability.",
    tech: ["MCP Tooling", "AI Agents", "GitHub Copilot", "Python"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Deloitte",
    role: "L35 – DevOps Engineer II",
    dates: "March 2022 – Present",
    location: "Hyderabad, India",
    responsibilities: [
      "Shared DevOps engineer supporting the Platform, AI & Data Analytics portfolio.",
      "Support 15+ enterprise applications across AWS, Azure, and GCP.",
      "Provision and manage Azure infrastructure including AKS, App Service, PostgreSQL, Azure OpenAI, Key Vault, Data Factory, Databricks, and ADLS Gen2.",
      "Build CI/CD pipelines for Azure Data Factory and Databricks.",
      "Migrate Dataiku to Fleet Manager and automate application and API deployments.",
      "Support AWS applications running on ECS Fargate, ALB, S3, IAM, RDS, EC2, and Bedrock.",
      "Support GCP applications using GKE, Cloud SQL, Cloud Storage, IAM, Vertex AI, and Apigee.",
      "Implement GitOps using GitHub Actions, Helm, and Argo CD.",
      "Integrate SonarQube and Snyk quality gates.",
      "Develop Python-based cloud cost optimization automation."
    ],
    achievements: [
      "Supported 15+ enterprise applications across multi-cloud environments.",
      "Built cost optimization automation adopted by 30+ teams, yielding ~7.5% AWS cost reduction.",
      "Reduced GKE application onboarding time from 3–4 days to 1–2 days using MCP and AI agents."
    ]
  },
  {
    company: "Innominds",
    role: "Senior Software Engineer",
    dates: "February 2021 – March 2022",
    location: "Hyderabad, India",
    responsibilities: [
      "Migrated on-premises infrastructure and enterprise applications to Microsoft Azure.",
      "Built robust Azure DevOps CI/CD delivery pipelines.",
      "Engineered secure, scalable cloud migration architectures with high availability.",
      "Configured Azure Site Recovery for enterprise disaster recovery and business continuity.",
      "Collaborated with architects, application owners, and security teams for migration validation."
    ],
    achievements: [
      "Successfully transitioned mission-critical on-premises workloads to Azure without unscheduled downtime."
    ]
  },
  {
    company: "ZeroCodeHR",
    role: "DevOps Engineer",
    dates: "November 2019 – February 2021",
    location: "Hyderabad, India",
    responsibilities: [
      "Automated AWS EC2 start/stop schedules to minimize non-production compute costs.",
      "Implemented an ELK centralized logging proof-of-concept for platform observability.",
      "Managed Jenkins CI/CD workflows for rapid delivery cycles.",
      "Supported AWS infrastructure: EC2, S3, Route 53, ELB, RDS, SNS, Lambda, and CloudWatch."
    ],
    achievements: [
      "Optimized staging and test environments, reducing cloud compute bills by automating off-hour shutdowns."
    ]
  },
  {
    company: "Wipro",
    role: "Project Engineer",
    dates: "April 2017 – June 2019",
    location: "Hyderabad, India",
    responsibilities: [
      "Implemented Jenkins and Maven build automation pipelines.",
      "Managed Nexus artifact repositories and versioning strategies.",
      "Developed Ansible automation playbooks for server configuration and provisioning.",
      "Managed containerized deployments on Docker, Kubernetes, and Apache Tomcat."
    ],
    achievements: [
      "Recognized for driving CI/CD automation and pipeline optimization."
    ]
  },
  {
    company: "Wipro (Earlier Role)",
    role: "Administrator",
    dates: "July 2016 – April 2017",
    location: "Hyderabad, India",
    responsibilities: [
      "Enterprise SAN and storage administration across Dell EMC VNX and Unity platforms.",
      "Managed Fibre Channel SAN switches, zoning, and storage health monitoring.",
      "Provisioned LUNs, managed storage tiers, and resolved infrastructure incidents."
    ],
    achievements: [
      "Maintained 99.99% storage availability across high-throughput enterprise SAN arrays."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "gke-mcp",
    title: "AI-Powered GKE Application Onboarding",
    tech: ["GCP", "GKE", "MCP Tooling", "AI Agents", "Python", "GitOps"],
    problem: "Application onboarding onto multi-tenant Kubernetes clusters required manual ticket routing, RBAC configuration, network policies, and Helm chart templating.",
    solution: "Engineered an AI-agent-assisted onboarding pipeline powered by Model Context Protocol (MCP) servers to validate schemas, generate namespace manifests, and trigger Argo CD reconciliation.",
    outcome: "Reduced deployment lead time from 3–4 days to 1–2 days with zero manifest configuration drift.",
    workflow: ["Dev Request", "AI Agent (Schema validation)", "MCP Tooling Execution", "Argo CD Sync", "GKE Cluster"]
  },
  {
    id: "cost-opt",
    title: "Cloud Cost Optimization Automation",
    tech: ["Python", "AWS EC2", "Azure VMs", "App Service Plans", "Azure SQL", "CloudWatch"],
    problem: "Non-production computing resources across 30+ development teams remained active during idle hours and weekends, driving up unnecessary cloud overhead.",
    solution: "Developed serverless Python automation that inspects real-time CloudWatch telemetry, flags underutilized workloads, and enforces automated scheduled start/stop policies.",
    outcome: "Adopted across 30+ engineering teams, producing ~7.5% direct reduction in AWS operational infrastructure costs.",
    workflow: ["CloudWatch Metrics", "Lambda Evaluator", "Tag & Schedule Enforcer", "Automated Suspension", "Cost Savings"]
  },
  {
    id: "dataiku-fleet",
    title: "Enterprise Dataiku Fleet Migration",
    tech: ["Dataiku DSS", "Fleet Manager", "Azure", "CI/CD", "Python"],
    problem: "Managing decentralized Dataiku analytics instances created operational overhead, inconsistent patch levels, and manual API release bottlenecks.",
    solution: "Architected centralized instance governance using Dataiku Fleet Manager on Azure, automating zero-downtime deployment pipelines for analytical models and REST APIs.",
    outcome: "Eliminated operational fragmentation and standardized model deployments enterprise-wide.",
    award: "Deloitte Spot Award – Dataiku Fleet Migration",
    workflow: ["Dataiku Fleet Manager", "Azure VM Instances", "CI/CD Pipeline", "API Endpoint Automation", "Telemetry"]
  },
  {
    id: "multicloud-gitops",
    title: "Multi-Cloud GitOps Delivery Platform",
    tech: ["Terraform", "GitHub Actions", "Helm", "Argo CD", "AWS", "GCP"],
    problem: "Disparate deployment methodologies across AWS ECS and GCP GKE caused cross-cloud configuration drift and fragmented deployment observability.",
    solution: "Standardized on declarative GitOps workflows using Terraform for infrastructure, GitHub Actions for container building, and Argo CD for in-cluster state sync.",
    outcome: "Achieved single-pane-of-glass deployment velocity with rapid rollback capabilities across both clouds.",
    workflow: ["Git Commit", "GitHub Actions Build", "Container Registry", "Argo CD Reconciliation", "Multi-Cloud K8s"]
  },
  {
    id: "azure-data-ai",
    title: "Azure Data & AI Platform Infrastructure",
    tech: ["Azure Data Factory", "Databricks", "ADLS Gen2", "Key Vault", "Azure OpenAI", "Private Endpoints"],
    problem: "Enterprise analytics required high-throughput data processing and generative AI endpoints with strict banking-grade network isolation.",
    solution: "Provisioned an enterprise Data & AI landing zone utilizing ADLS Gen2, Databricks clusters, and Azure OpenAI, locked down via Private Endpoints and Managed Identities.",
    outcome: "Delivered a zero-trust analytics foundation compliant with enterprise cybersecurity requirements.",
    workflow: ["ADF Pipeline", "ADLS Gen2 Storage", "Databricks Compute", "Key Vault Secrets", "Azure OpenAI Service"]
  },
  {
    id: "cloud-migration",
    title: "Enterprise Cloud Migration & Disaster Recovery",
    tech: ["Azure", "Azure DevOps", "Azure Site Recovery", "Virtual Machines", "App Service"],
    problem: "Legacy on-premises data centers faced hardware end-of-life, scalability bottlenecks, and inadequate disaster recovery recovery time objectives (RTO).",
    solution: "Executed lift-and-shift as well as re-platforming migration patterns into Azure, configuring Azure Site Recovery for automated failover validation.",
    outcome: "Completed seamless migration of enterprise services with verified sub-15 minute RTO and strict business continuity.",
    workflow: ["On-Premises Servers", "Azure Migrate Assessment", "ASR Replication", "Cutover & Validation", "Production Azure"]
  }
];

export const SKILLS = {
  Cloud: ["AWS (ECS, Bedrock, ALB, S3, RDS)", "Microsoft Azure (AKS, OpenAI, ADF)", "Google Cloud Platform (GKE, Vertex AI)"],
  Containers: ["Kubernetes", "Azure Kubernetes Service (AKS)", "Google Kubernetes Engine (GKE)", "AWS ECS Fargate", "Docker"],
  IaC: ["Terraform", "Ansible", "ARM / Bicep"],
  CICD: ["GitHub Actions", "Azure DevOps", "Argo CD", "Helm", "Jenkins"],
  DevSecOps: ["SonarQube", "Snyk", "Azure Key Vault", "IAM Policies & Governance", "Managed Identities"],
  Observability: ["Dynatrace", "Azure Monitor", "Log Analytics", "AWS CloudWatch", "ELK Stack", "PRTG"],
  DataAI: ["Dataiku DSS & Fleet Manager", "Databricks", "Azure Data Factory", "ADLS Gen2", "Azure OpenAI", "AWS Bedrock", "Vertex AI"],
  AIAutomation: ["Model Context Protocol (MCP)", "AI Agents", "GitHub Copilot", "Python", "LLM-Assisted DevOps"]
};

export const CERTIFICATIONS = [
  { name: "Certified SAFe 5 Practitioner", org: "Scaled Agile", status: "Verified" },
  { name: "Associate – Information Storage and Management Version 3.0", org: "Dell EMC", status: "Verified" }
];

export const AWARDS = [
  { title: "Deloitte Spot Award", reason: "Dataiku Fleet Migration Excellence", org: "Deloitte" },
  { title: "Deloitte Spot Award", reason: "Azure Delivery Excellence & Platform Engineering", org: "Deloitte" }
];

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech) - Electronics & Communication Engineering",
  institution: "JNTUH College of Engineering Hyderabad"
};
