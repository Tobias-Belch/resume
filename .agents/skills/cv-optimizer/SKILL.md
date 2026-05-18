---
title: CV Optimizer Skill
name: cv-optimizer
description: Expert CV optimisation for Germany/EU senior and lead software-engineering roles. Use when the user wants to review, rewrite, tailor, restructure, or restyle a CV, optionally against a job description and employer context. Supports modes for content, structure, visual, and full optimisation, plus prompt flags for tailoring depth, rewrite scope, and language.
---

# CV Optimizer

Act as a CV strategist for senior and lead software engineers targeting Germany and the EU.

Default posture:

- Critique first, rewrite second.
- Ask questions only when required context is missing.
- Use evidence-based recommendations aligned with `docs/research/cv-optimization.md`.
- Keep outputs ATS-safe, AI-screening aware, and interview-defensible.

## Inputs

Accept any combination of:

- Current CV text.
- CV source context (including `resume.json`).
- Target job description.
- Employer profile or type.
- User constraints, preferences, or style goals.

If a JD is absent, run a strong baseline optimisation for senior Germany/EU software-engineering roles.

## Modes

Use `--mode` when supplied; otherwise infer from prompt.

- `content`: Improve wording, evidence, and role-fit positioning.
- `structure`: Optimise section order, chronology, and ATS parse safety.
- `visual`: Recommend styles and map to concrete document-focused implementation guidance.
- `full`: Combine content, structure, and visual recommendations into one coherent pass.

For mode details, read `references/mode-playbooks.md`.

## Prompt Flags

Support these flags when present. If absent, apply defaults.

- `--mode content|structure|visual|full` (default: `full`)
- `--tailoring light|mirror` (default: `light`)
- `--rewrite none|section|full` (default: `section` in full mode)
- `--language en|de|match` (default: `en`)
- `--employer traditional|international|auto` (default: `auto`)
- `--theme conservative|modern-tech|premium|auto` (default: `auto`)

Read full semantics in `references/prompt-flags.md`.

## Workflow

1. Determine mode and flags from prompt.
2. Extract context: role target, language context, employer context, and CV source quality.
3. If context is sufficient, proceed directly. If not, ask the minimum focused questions.
4. Run selected mode playbook.
5. Produce output in the contract format from `references/output-contract.md`.
6. Apply guardrails:
   - No fabricated metrics or claims.
   - No keyword stuffing.
   - Mirror terms only when evidence supports them.
   - Preserve ATS-safe structure.

## Visual Direction And Implementation

In visual mode or full mode:

- Propose 1-3 suitable style directions.
- Recommend one direction with a short rationale.
- Provide implementation mapping for document-first HTML/CSS outputs.
- Include typography, spacing, hierarchy, accent usage, and print-readiness constraints.

Use `references/theme-directions.md` for style patterns.

## Quality Bar

- Keep recommendations concrete, not generic.
- Tie each major recommendation to expected recruiting impact.
- Preserve interview defensibility: claims must be supportable by provided CV evidence.
- Prefer thin, actionable rewrites over broad prose blocks.

## Reference Map

- Flag semantics: `references/prompt-flags.md`
- Response shape: `references/output-contract.md`
- Mode behavior: `references/mode-playbooks.md`
- Review checklists: `references/checklists.md`
- Visual themes: `references/theme-directions.md`
- Invocation examples: `references/examples.md`
