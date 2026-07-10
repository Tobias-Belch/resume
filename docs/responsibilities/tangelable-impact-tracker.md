---
title: Tangelable Impact Tracker
---

Tracks measurable business impact findings for each role, structured by company and responsibility. Each entry lists the chosen revised summary followed by the supporting impact data and estimation rationale.

---

## DocMorris — Senior Software Engineer

### 1. White-Label Migration

**Chosen summary:**
> Led white-label monolith-to-multi-tenant migration. Onboarded 3 brands across 11M active users with ~90% code reuse; second tenant launched in 2 months vs. an estimated 2 years without the white-label architecture — a ~92% time reduction. Refactoring improved testability and maintainability over the original monolith.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Brands onboarded | 3 brands | Direct knowledge |
| Active users | ~11M across all brands | Internal product data |
| Code reuse | ~90% shared across tenants | Direct knowledge — platform architecture |
| Time-to-market (1st brand) | 3 months from concept/POC | Direct knowledge |
| Time-to-market (2nd brand) | 2 months — 33% faster than 1st | Direct knowledge |
| Counterfactual estimate | Estimated 2 years without multi-tenant architecture → ~92% time reduction | Engineering judgment |
| Maintainability impact | No regression; introduced best practices improving testability and maintainability | Direct knowledge |
| Architecture transformation | Monolith extracted into multi-tenant solution | Direct knowledge |

---

### 2. Mentorship

**Chosen summary:**

> Mentored 5 of 15 engineers through a structured program of 1:1s, pair programming, and weekly education sessions. One bootcamp-graduate engineer promoted to mid-level within 2 years and to senior within 4 — an estimated 2-year acceleration vs. industry average.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Promo acceleration | Bootcamp grad → mid (2 yr) → senior (4 yr). Industry avg for bootcamp → senior is 5–7 yr. Estimated ~2 yr acceleration. | Internal promo records; industry benchmarks (Triplebyte, Stack Overflow surveys) |
| Mentorship ratio | 5 mentees out of 15-person org (1:3 ratio) | Direct knowledge |
| Outperformance | 3 of 5 mentees exceeded performance expectations (60%) | Manager feedback / performance reviews |
| Onboarding speed | Mentees ramped in 1–4 months. Industry norm for senior IC: 3–6 months. Conservative avg 2.5 mo vs 4 mo baseline = ~38% faster | Self-reported; Glassdoor / SHRM onboarding benchmarks |
| Program structure | Authored docs, regular 1:1s, pair programming, code-review-as-teaching, weekly education meetings + side project | Direct knowledge |

---

### 3. AI Agent Initiatives

**Chosen summary:**
> Established LLM agent patterns for product creation workflows — piloted within own team, then packaged and handed to 3 additional teams. Improved response predictability and achieved an estimated 30x token-cost reduction on knowledge-retrieval tasks, with schema-validated outputs approaching deterministic reliability.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Token cost reduction | Early estimates show ~30x reduction for knowledge-retrieval use cases. Industry typical prompt optimisation yields 2–5x. | Internal benchmarking; industry context (Anthropic, OpenAI optimisation guides) |
| Determinism improvement | Shifted from probabilistic to near-deterministic output via structured prompts + multi-step reasoning; higher schema-validated response rate | Direct observation |
| Org adoption | Piloted in 1 team, packaged tools handed to 3 additional teams | Direct knowledge |
| Scope | Internal product creation lifecycle (not customer-facing) | Direct knowledge |

---

### 4. Design System

**Chosen summary:**
> Designed and led implementation of a cross-platform Design System (~30–40 components), structured from day one to enable AI-assisted UI generation. Projected to halve design time, eliminate handover overhead, and reduce implementation effort by an estimated 80% through AI-powered component assembly.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Component count | ~30–40 components | Direct knowledge |
| Design time reduction | Expected ~50% reduction | Industry benchmarks (NN/G, Forrester: Design Systems reduce design effort 25–50%) |
| Handover overhead | Expected near-elimination | Direct knowledge — single source of truth replaces Figma-to-code translation |
| Implementation effort | Expected ~80% reduction via AI-assisted assembly | Direct projection; enabled by DS architecture |
| AI-assisted UI generation | DS structured as semantic AI target — components designed for LLM-driven composition | Architectural decision |
| Cross-platform reach | Covers web + target platforms via consistent token system | Direct knowledge |
| Current adoption | Ongoing initiative, not yet consumed by other teams | Direct knowledge |

---

## Made2Flow — Head of Engineering

### 1. Domain Data Model Redesign

**Chosen summary:**
> Co-designed a next-generation domain data model with the CPO, replacing an MVP-stage model that blocked ~30 business cases. Delivered the redesign in 6 months alongside other responsibilities, directly unblocking several client-deals that were pending the transformation.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Business cases unblocked | ~30 business cases previously blocked by insufficient model | Direct knowledge — product roadmap |
| Client dependency | Multiple clients awaiting transformation before committing | Direct knowledge — partner discussions |
| Delivery timeline | 6 months, parallel to other workstreams | Direct knowledge |
| Collaboration | Co-designed with CPO | Direct knowledge |
| Departure note | Left before post-launch metrics could be captured | Context for limited quantitative data |

---

### 2. Team Building & Leadership

**Chosen summary:**
> Built and led a team of 4 engineers, hiring 2 within 2 months — including one of the strongest engineers I've worked with, who remains a key contributor at the company. Established domain documentation and refinement processes that closed a gap between business goals and implementation, eliminating recurring friction with the CPO and enabling engineers to deliver expectation-aligned features.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Hiring speed | 2 hires in 2 months | Direct knowledge |
| Hire quality | One hire described as among the best worked with; still at company as key contributor | Direct knowledge |
| Process gap closed | No refinement process before → domain docs + structured refinement → aligned delivery with CPO expectations | Direct knowledge |
| Friction eliminated | Previously recurring friction/frustration between engineering and CPO due to misaligned expectations | Direct knowledge |
| Decision making | Improved architecture decisions and best practices via mentoring | Direct knowledge |
| Tenure | ~8 months at company | Direct knowledge |

---

## eHealth-Tec — Technical Lead

### 1. ADR / Architecture Process

**Chosen summary:**
> Replaced ad-hoc architecture decisions — where proposals were lost and arbitrary shifts caused chaos — with a structured ADR and design review process (~15–20 ADRs). Accelerated decision-making, improved codebase stability and maintainability, and reduced onboarding time for new engineers. Process still active 5 years on.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Before state | Ideas lost without follow-through; arbitrary foundational shifts without peer review → chaos, inconsistency, maintainability regression | Direct knowledge |
| ADRs produced | ~15–20 | Direct knowledge |
| Decision speed | Accelerated via structured design reviews replacing ad-hoc hallway decisions | Direct observation |
| Maintainability | Improved codebase stability by preventing undocumented, unreviewed shifts | Architectural outcome |
| Onboarding | Reduced ramp-up time — new engineers could read ADR history to understand past decisions | Direct observation |
| Longevity | Process still in active use 5 years after introduction | Direct knowledge |

---

### 2. BFF Anti-Corruption Boundaries

**Chosen summary:**
> Architected BFF layers insulating the frontend (~11M users) from restructuring across ~20 backend services. Eliminated ripple-effect changes on the frontend whenever backend services were migrated or replaced, and provided the architectural seam for white-label tenant differentiation.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Scale | ~11M users on frontend, ~20 backend services decoupled | Internal product data |
| Maintenance cost avoidance | Backend migration/replacement no longer required frontend changes — eliminated cross-stack coupling | Architectural outcome |
| White-label enabler | BFF architecture later served as extension point for tenant-specific behaviour | Cross-reference: DocMorris WL migration |
| Security | Moved security-sensitive logic and backend access to server side — stronger security posture | Architectural decision |
| Tech stack | Node.js, NestJS | Direct knowledge |

---

### 3. White-Label Platform

Same white-label platform project as the DocMorris white-label migration entry — initiation at eHealth-Tec, then evolved and scaled at DocMorris. See **DocMorris → White-Label Migration** for full impact data.

---

## Medtower — Head of Engineering

### 1. AMQP Multi-Device Communication

**Chosen summary:**
> Architected a real-time distributed communication system using AMQP 1.0 / Apache Qpid where IoT hardware, servers, and web browsers operated as peers via pub/sub — eliminating point-to-point integration complexity and simplifying distributed system reasoning, monitoring, and debugging. The protocol's finance-sector provenance ensured the uptime and reliability required in a hospital environment. This was the core infrastructure enabling all product use cases.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Architectural simplification | Treated frontend, microservices, IoT devices as peers (pub/sub) — eliminated P2P integration complexity | Direct knowledge |
| Monitoring & debugging | Unified pub/sub mesh simplified reasoning about distributed system behaviour | Direct knowledge |
| Reliability | AMQP 1.0 originates from finance sector — designed for high-availability requirements | Protocol heritage |
| Business criticality | Core communication backbone for all product use cases | Direct knowledge |
| Maturity at departure | System still in development at time of leaving — production metrics not yet available | Context note |

---

### 2. 3D Indoor Maps

**Chosen summary:**
> Built 3D indoor multi-floor maps with live device location for hospital equipment tracking (beds, wheelchairs, devices), including indoor navigation and reporting views. Entire system operated in an offline hospital intranet — no internet access — requiring fully self-contained tile serving and real-time updates.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Use case | Equipment tracking (beds, wheelchairs, devices) + indoor navigation + reporting | Direct knowledge |
| Scale | ~4 floors per hospital | Direct knowledge |
| Offline constraint | Entire system in hospital intranet — no internet — self-contained tile serving + real-time updates | Direct knowledge |
| Business context | Company ceased operations before production metrics could be captured | Context note |

---

### 3. NiFi Consultant Management

**Chosen summary:**
> Managed an external Apache NiFi consultant for client-specific ETL pipelines. Within 2 weeks of engagement, the output enabled the team to build business cases — demonstrating rapid time-to-value from the ETL infrastructure.

**Impact findings:**

| Finding | Data | Source / rationale |
|---|---|---|
| Time-to-value | 2 weeks from engagement start to business-case-ready output | Direct knowledge |
| Delivery type | Client-specific extraction and reporting cases | Direct knowledge |
| Role | Requirements definition, deliverable review, day-to-day unblocking | Direct knowledge |
| Engagement | Single consultant from an agency | Direct knowledge |
