---
title: 'Solutions Architect — Gap Analysis & Roadmap'
created: 2026-07-09
updated: 2026-07-09
---

## 1. Expected Core Experience & Skills

A Solutions Architect bridges business, sales, and engineering to design end-to-end technical solutions that win deals and scale in production. The baseline includes:

| Area | Description |
|---|---|
| **Cloud & Infrastructure** | Deep AWS, Azure, or GCP — compute, storage, networking, IAM, serverless, containers (EKS/AKS/GKE), Terraform/CDK. Cost modelling, HA/DR, SLAs. |
| **System Design & Integration** | REST, GraphQL, event-driven, streaming, ETL. Auth protocols (OAuth2/SAML/OIDC). Legacy integration patterns. DB selection (relational, document, timeseries, graph). |
| **Enterprise Architecture** | TOGAF or equivalent mindset. Security/compliance (SOC2, HIPAA, GDPR at infra level). Multi-tenancy, regional deployment, data residency. |
| **Presales & Discovery** | Conducting discovery workshops, writing RFI/RFP responses, building BoMs, delivering technical demos and proof-of-concepts, handling objections. |
| **Stakeholder Management** | C-level presentations, TCO/ROI narratives, translating business outcomes into technical requirements, managing procurement cycles. |
| **Communication** | Whiteboarding, diagramming (C4, Arc42), proposal writing, running architecture reviews with customer architects. |
| **Delivery & Operations** | Understanding of DevOps, observability, incident response, capacity planning, and how those feed back into cost and SLA commitments. |

## 2. Gap Analysis

| Gap | Severity | Evidence from CV |
|---|---|---|
| **No cloud certifications or infrastructure experience** | **Critical** | CV shows no mention of AWS, Azure, GCP, K8s, Terraform, or any provisioning/IaC. Entire career is application-layer code. |
| **No presales, proposals, or customer-facing discovery** | **Critical** | All roles are internal-facing delivery. Nothing on RFPs, discovery workshops, POCs for prospects, or revenue-influencing work. |
| **Narrow technical breadth** | **High** | Career is predominantly React/TypeScript/Node frontend. One IoT microservices stint. No database administration, networking, security, or stream-processing depth. |
| **No enterprise architecture framework** | **Medium** | iSAQB is good but product/solution focused. No TOGAF, no experience operating within enterprise governance boards. |
| **No scale, cost, or resilience storytelling** | **High** | Nothing about capacity planning, multi-region deployment, cost optimisation, or SLA attainment. |
| **Missing conventional SA bridge role** | **Medium** | Has not held a Solutions Engineer, Sales Engineer, or Field CTO role that typically precedes SA. |

## 3. Roadmap

### Phase 1 — Foundation (months 1–6)

**Goal:** Acquire cloud depth and earn a cert to de-risk the critical gap.

| Action | Details |
|---|---|
| **AWS Solutions Architect Associate (SAA-C03)** | 8–12 weeks of study (A Cloud Guru, Maarek). Core: VPC, EC2, S3, RDS, Lambda, IAM, CloudFront, Route53. |
| **Learn Terraform** | Build a personal project: multi-tier web app with VPC, ALB, ECS Fargate, RDS. Infrastructure as code, modularise, and publish on GitHub. |
| **Containers** | Docker + EKS (or AWS ECS). Understand pod networking, service discovery, secrets, horizontal scaling. |
| **Side project: "Reference architecture"** | Write a C4-model document for a greenfield multi-tenant SaaS platform. Include deployment diagram, cost estimate, DR strategy. Publish as a portfolio piece. |

### Phase 2 — Breadth & Enterprise Context (months 7–12)

**Goal:** Fill in integration, security, and enterprise-pattern blind spots.

| Action | Details |
|---|---|
| **AWS Solutions Architect Professional (SAP-C02)** | Required for senior SA roles. Covers cross-account, hybrid, migration, cost control, complex HA. |
| **Security** | AWS Security Specialty or equivalent. Understand KMS, Secrets Manager, WAF, Shield, GuardDuty, IAM policies at scale, SOC2 evidencing. |
| **Integration patterns** | Hands-on with Kafka/MSK, API Gateway, EventBridge, Step Functions. Build an event-driven sample. |
| **TOGAF (optional but useful)** | TOGAF 9 Foundation cert (1 week). Helps with enterprise architecture board conversations. |

### Phase 3 — Bridge Role (months 13–24)

**Goal:** Shift your career trajectory before applying to SA roles.

| Action | Details |
|---|---|
| **Target a "Staff Engineer" or "Lead Architect" role** at a company that also has SAs. | You'll get enterprise-context architecture work while you can shadow the SA team. |
| **Volunteer for presales-like work** | Demo to prospects, write PoCs, respond to security questionnaires, join sales calls with your SA team. |
| **Build a public presence** | Blog posts on architecture decisions, talks at meetups, LinkedIn content on cloud architecture. |
| **Consider an internal SA rotation** | If your current employer has SAs, ask to shadow on discovery calls or help with RFPs. |

### Phase 4 — Apply (month 25+)

**Target roles:** Solutions Architect (AWS, GCP, Azure — partner or vendor side), or Solutions Engineer at your current company's level with a path to SA.

**Interview prep:** System design (educative.io Grokking the System Design Interview), AWS white-paper reviews (Well-Architected Framework, 5 pillars), mock discovery sessions, and C-level presentation practice.

**Total time to readiness:** ~18–24 months of deliberate investment, shorter if you can shadow an SA team internally in phase 2.
