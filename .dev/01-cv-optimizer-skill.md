## Problem Statement

The current resume workflow and supporting tooling are not optimised for systematic CV improvement aimed at Germany and EU senior software-engineering roles. The underlying research in `docs/research/cv-optimization.md` captures strong evidence-based guidance on content, structure, ATS safety, AI screening, and visual design, but that guidance is not yet operationalised into a reusable skill that can consistently help refine a CV.

From the user's perspective, the missing capability is an expert skill that can take an existing CV, optional job description, and optional employer context, then improve the document along three coordinated dimensions:

- content and wording
- structure and information hierarchy
- visual direction and implementation guidance

The current repository also reflects a transition point. It contains a `resume.json` plus Astro renderer workflow that is useful as source context, but it is visually constraining. The user wants to move toward a more document-focused approach, likely HTML first, without losing the ability to reason from the current data model and existing resume content.

The problem is therefore not just “review my CV.” It is to create a reusable packaged skill that acts as a senior Germany/EU software-engineering CV expert, can critique and optionally rewrite CV content, can tailor outputs to specific roles and employer types, can recommend a fitting visual style, and can map that style into a practical document-focused implementation direction.

## Solution

Build a real packaged skill that specialises in optimising CVs for senior and lead software engineers targeting Germany and the EU, using the repository's CV research as its source of truth.

The skill should:

- operate as one orchestrated skill with four modes: `content`, `structure`, `visual`, and `full`
- default to advisory behaviour with critique first and rewrite second
- optionally rewrite key sections or a full CV when requested
- accept a current CV plus optional job description and company or employer context
- support prompt-time experimentation through simple flags
- optimise toward a document-first HTML/CSS CV target in its first implementation
- treat the existing `resume.json` and Astro resume as source context rather than the long-term visual target
- provide theme recommendation plus implementation mapping for the visual mode

The skill package should remain reference- and workflow-driven in v1. It should primarily consist of `SKILL.md` plus bundled references, checklists, and invocation examples rather than deterministic automation scripts.

Default behaviour should be:

- English-first unless another language is specified
- ask clarifying questions only when the provided context is insufficient
- in `full` mode, provide critique plus rewritten key sections by default
- offer flexible tailoring depth via flags so the user can experiment with different optimisation strategies

The solution should produce a robust, reusable skill package that is immediately usable for day-to-day CV iteration and future evolution toward document-focused HTML implementations.

## User Stories

1. As a senior software engineer targeting Germany or the EU, I want the skill to review my CV against senior-market expectations, so that I can quickly identify what is weakening my applications.
2. As a lead engineer applying for a specific role, I want the skill to tailor my CV to a job description, so that my CV reflects the target title, expected skills, and relevant scope.
3. As a candidate experimenting with different recruiting strategies, I want the skill to support both light tailoring and stronger keyword mirroring, so that I can compare outputs and learn what performs better.
4. As a user with an existing general CV, I want the skill to improve wording and evidence quality, so that my experience reads as senior, concrete, and credible.
5. As a user with vague or passive bullet points, I want the skill to convert them into stronger action-impact-metric language, so that my achievements are easier for recruiters and reviewers to assess.
6. As a user with a long career history, I want the skill to help compress older experience appropriately, so that the CV stays focused on the most relevant recent years.
7. As a user applying to international tech employers in Germany, I want the skill to adapt recommendations away from overly traditional German norms, so that the document fits the employer context.
8. As a user applying to more traditional German employers, I want the skill to surface relevant German-market conventions, so that I can decide whether to include those signals deliberately.
9. As a user submitting to ATS-heavy pipelines, I want the skill to flag format and wording problems that reduce parse quality, so that the CV remains machine-readable.
10. As a user concerned about AI screening, I want the skill to emphasise evidence-rich and coherent phrasing, so that the CV performs better in semantic screening.
11. As a user with both English and German application targets, I want the skill to support language control, so that I can optimise in the right language for each application.
12. As a user who already knows what section needs work, I want the skill to optimise only the requested section when appropriate, so that I can iterate efficiently.
13. As a user who wants deeper help, I want the skill to produce a full-mode review, so that I get coordinated recommendations across content, structure, and visual presentation.
14. As a user who wants guidance rather than immediate rewriting, I want the skill to critique first, so that I understand the reasoning behind the changes.
15. As a user who wants to move quickly, I want the skill to rewrite key sections when enough context is present, so that I can adopt improvements without an extra round trip.
16. As a user who explicitly asks for a full rewrite, I want the skill to provide a consolidated revised draft, so that I can use it as a strong starting point.
17. As a user with a current `resume.json` source, I want the skill to understand that source as input context, so that I do not need to manually convert everything before getting value.
18. As a user moving toward a document-first workflow, I want the skill to optimise beyond the constraints of the current renderer, so that my visual and structural choices are not limited by the existing implementation.
19. As a user exploring presentation options, I want the visual mode to propose several fitting theme directions, so that I can choose a style aligned with the role and employer.
20. As a user who prefers clear recommendations, I want the skill to recommend one visual direction from the proposed options, so that I can make progress without design indecision.
21. As a user wanting practical next steps, I want the visual mode to translate its recommendation into concrete layout and styling guidance, so that the theme can actually be implemented.
22. As a user aiming for print-safe and ATS-safe output, I want the skill to advise on typography, spacing, hierarchy, and layout constraints, so that the document remains readable and parse-friendly.
23. As a user planning an HTML-based CV, I want the skill to produce implementation-ready visual guidance for HTML and CSS, so that the design direction is actionable.
24. As a user who provides a company profile, I want the skill to incorporate employer signals into its recommendations, so that the tone and presentation match the likely reviewer context.
25. As a user who provides no job description, I want the skill to still produce a strong senior-market baseline optimisation, so that it remains useful for general CV improvement.
26. As a user invoking the skill with clear inputs, I want it to proceed without unnecessary questions, so that the interaction stays efficient.
27. As a user invoking the skill with missing context, I want it to ask only the most relevant clarifying questions, so that the interaction stays focused.
28. As a user experimenting with prompt flags, I want the skill to support concise operational controls, so that I can intentionally vary mode, rewrite level, language, and tailoring approach.
29. As a user using `--mode content`, I want the skill to focus on wording, claims, bullets, and summaries, so that I get depth where I asked for it.
30. As a user using `--mode structure`, I want the skill to focus on section order, chronology, compression, and headings, so that I can fix information architecture problems.
31. As a user using `--mode visual`, I want the skill to focus on theme direction and implementation guidance, so that I can improve presentation without conflating it with content concerns.
32. As a user using `--mode full`, I want the skill to coordinate the three optimisation dimensions, so that the resulting recommendations are internally consistent.
33. As a user using `--tailoring light`, I want the skill to adjust emphasis without overfitting to one posting, so that I can maintain a broadly reusable CV.
34. As a user using `--tailoring mirror`, I want the skill to mirror target terminology more strongly while staying credible, so that I can test a more targeted strategy.
35. As a user concerned about over-claiming, I want the skill to warn when mirrored terms are not sufficiently supported by my experience, so that the CV remains defensible in interviews.
36. As a user using `--rewrite none`, I want the skill to stay analytical, so that I can make the edits myself.
37. As a user using `--rewrite section`, I want the skill to rewrite only the most critical parts, so that I can adopt targeted improvements quickly.
38. As a user using `--rewrite full`, I want the skill to produce a fuller draft, so that I can compare the current CV against a more transformed version.
39. As a user using `--language en`, I want the skill to optimise output in English, so that I can target international or English-language roles.
40. As a user using `--language de`, I want the skill to optimise output in German, so that I can target German-language roles.
41. As a user using `--language match`, I want the skill to infer and align to the job description language when possible, so that the CV follows the target posting context.
42. As a user who values consistent outputs, I want the skill to follow a clear response contract, so that I can quickly scan assumptions, issues, recommendations, rewrites, and implementation notes.
43. As a user iterating repeatedly, I want the skill package to include concise checklists and reference material, so that the skill's advice stays grounded and consistent over time.
44. As a user relying on strong domain expertise, I want the skill to encode the research findings rather than rediscover them ad hoc, so that its recommendations remain evidence-based.
45. As a maintainer of the skill, I want the package to separate core orchestration from detailed reference content, so that the skill remains lean and easier to evolve.
46. As a maintainer, I want the skill package to include example invocation patterns, so that usage expectations are easier to test and refine.
47. As a maintainer, I want the skill to stay documentation-first in v1, so that scope stays manageable and avoids premature automation.
48. As a maintainer, I want the package design to preserve room for future HTML/CSS assets or helper scripts, so that the skill can expand without rework.
49. As a maintainer, I want clear default behaviours for mode, language, rewrite scope, and tailoring level, so that the skill behaves predictably even when prompts are sparse.
50. As a maintainer, I want the skill to be explicitly scoped to senior and lead software-engineering CVs in Germany and the EU, so that it does one thing well rather than becoming a vague generic resume helper.

## Implementation Decisions

- Build one orchestrated skill rather than three separate skills.
- Define four operational modes: `content`, `structure`, `visual`, and `full`.
- Make the skill explicitly expert in Germany/EU senior and lead software-engineering CVs, based on the research corpus already present in the repository.
- Use the research document as the authoritative evidence base, but expose distilled guidance through bundled references and checklists rather than embedding everything into `SKILL.md`.
- Keep the skill advisory by default.
- Make critique the first response pattern and rewriting the optional second layer.
- In `full` mode, default to rewriting key sections rather than the entire CV unless the user explicitly requests a full rewrite.
- Support prompt flags for controlled experimentation. Initial flags should cover at least mode selection, tailoring depth, rewrite level, and language.
- Support both light tailoring and stronger mirroring through explicit prompt flags rather than implicit heuristics alone.
- Implement a credibility guardrail: when mirroring job-description terminology, only strengthen wording if the provided CV evidence supports the claim, otherwise warn or soften the recommendation.
- Default to English-first output, while supporting German and matching to job-description language when requested.
- Ask clarifying questions only when the supplied CV, target role, job description, or employer context is insufficient to produce a reliable optimisation pass.
- Optimise first toward a document-first HTML/CSS target for structure and visual implementation.
- Treat the current `resume.json` and Astro renderer as source context and transitional input, not as the primary future visual architecture.
- Keep v1 reference- and workflow-driven. Do not require helper scripts for the first implementation.
- Structure the package around the following major modules.

- Skill orchestration and trigger contract.
- CV optimisation reference pack derived from the research.
- Prompt flags and mode routing.
- Visual and theme guidance plus HTML/CSS implementation mapping.
- Examples and fixtures for representative invocation patterns.
- Keep the visual output concrete. The visual mode should not stop at abstract design advice; it should recommend 1 to 3 theme directions, recommend one, and then provide actionable implementation guidance.
- Ensure the implementation guidance covers layout hierarchy, typography, spacing, accent usage, print-readiness, and ATS safety.
- Keep the package lean through progressive disclosure: a concise `SKILL.md` with linked reference documents.
- Include reusable checklists for content, structure, and visual review so the skill can produce stable, auditable outputs.
- Include prompt examples and example invocation patterns to make flag handling and output expectations easier to reason about.
- Preserve room for future evolution into stronger document-generation or HTML/CSS scaffold support, but do not commit v1 to those automation concerns.
- Avoid hard-coding the skill to the existing renderer's visual vocabulary, because the user intends to move beyond those constraints.

Potential deep modules to emphasise:

- Prompt flags and mode routing: encapsulates input interpretation and defaulting in a stable interface that can evolve without rewriting the rest of the skill package.
- Visual/theme guidance plus implementation mapping: encapsulates employer-fit reasoning, theme selection, and concrete visual translation behind a compact output contract.
- CV optimisation reference pack: encapsulates the domain knowledge and heuristics in a reusable structure that supports consistent recommendations.

## Testing Decisions

- Good tests should validate externally observable behaviour rather than internal wording choices or implementation details.
- Tests should assert that the skill's behaviour is stable at the boundaries that matter to users: routing, defaults, supported flags, output sections, and the presence of required guidance.
- Tests should avoid overfitting to exact prose unless the prose is itself part of a defined contract.
- The highest-priority module for explicit testing is prompt flags and mode routing.
- Tests for flags and routing should verify supported modes, default behaviours, rewrite defaults, language selection behaviour, and tailoring-level handling.
- Tests should verify that representative invocation patterns yield the expected response structure, such as context assumptions, issues, recommendations, rewrites, and visual implementation notes where applicable.
- If helper scripts are introduced later, they should be tested for deterministic behaviour and interface stability, but helper scripts are not required for v1.
- Reference content should be reviewed for integrity and consistency, but reference files are lower priority for automated tests than routing and output-contract behaviour.
- Good prior art in this repository is the existing schema testing approach: validate contract behaviour and inputs at boundaries instead of testing internal implementation minutiae.
- The PRD should explicitly preserve flexibility for a combination of lightweight automated tests and manual validation using representative prompts.

## Out of Scope

- Building a generic CV skill for all professions.
- Positioning the skill as a universal global resume optimiser without regard to the Germany/EU senior software-engineering context.
- Cover-letter optimisation as a first-class feature.
- Automatic generation of unsupported claims, fabricated metrics, or speculative experience.
- Strong automation that rewrites `resume.json`, scaffolds a new HTML document, or transforms source files directly.
- Full document-generation pipelines or template engines in v1.
- Committing v1 to the current Astro renderer as the long-term visual implementation target.
- Designing a complete new CV website or renderer as part of this skill PRD.
- Country-specific optimisation for the full EU beyond the researched Germany/EU default heuristics.
- Broad non-technical career coaching beyond CV optimisation.

## Further Notes

- The current repository already contains a structured resume source and a presentational renderer, as well as print-aware styling. That context is useful input for the skill but should not constrain the skill's target direction.
- The research strongly supports ATS-safe, single-column, evidence-based, senior-oriented CV guidance. That should define the skill's baseline behaviour.
- The user explicitly wants flexibility to experiment with different optimisation strategies in real recruiting scenarios. Prompt flags are therefore part of the product, not a minor implementation detail.
- The skill should behave as a domain expert and reviewer first, not merely as a text rewriter.
- The visual mode must bridge strategy and implementation. A recommendation without concrete implementation mapping would not satisfy the user's goal.
- The package should be designed so it can later absorb document-focused HTML guidance, assets, or scripts without changing the skill's core conceptual contract.

## Proposed Implementation Tickets

The slices below are written as tracer bullets: each one should deliver a thin but complete improvement that is usable and verifiable on its own.

1. **Title**: Bootstrap the skill package with baseline content review
   **Type**: AFK
   **Blocked by**: None
   **User stories covered**: 1, 4, 14, 25, 26, 42, 44, 45, 49, 50
   **What to build**: Create the first working skill package with a trigger description, a concise `SKILL.md`, and the minimum bundled references needed to review a senior Germany/EU software-engineering CV in English without a job description. The slice should produce a stable baseline response contract with assumptions, top issues, and content-focused recommendations.
   **Acceptance criteria**:
   - A packaged skill exists with valid frontmatter, a concise body, and linked reference material grounded in the PRD research.
   - Invoking the skill on a general CV with no JD yields a structured content-review response rather than generic resume advice.
   - The output clearly reflects the Germany/EU senior software-engineering scope and critique-first behaviour.

2. **Title**: Add rewrite controls and key-section content rewrites
   **Type**: AFK
   **Blocked by**: 1. Bootstrap the skill package with baseline content review
   **User stories covered**: 5, 12, 15, 16, 29, 36, 37, 38, 42, 49
   **What to build**: Extend the baseline content-review skill so it supports `--rewrite none|section|full` and can rewrite headline, summary, skills framing, and selected bullets when enough evidence is present. The slice should preserve critique-first behaviour while making rewritten output available in a predictable format.
   **Acceptance criteria**:
   - The skill supports the agreed rewrite flags and applies sensible defaults when the flag is omitted.
   - `--rewrite section` produces targeted rewrites of key CV sections while preserving the analytical review.
   - `--rewrite full` expands into a fuller draft without dropping the review context or inventing unsupported claims.

3. **Title**: Add tailoring depth and language controls for role-specific optimisation
   **Type**: AFK
   **Blocked by**: 2. Add rewrite controls and key-section content rewrites
   **User stories covered**: 2, 3, 7, 8, 10, 11, 24, 27, 28, 33, 34, 35, 39, 40, 41, 49
   **What to build**: Add `--tailoring light|mirror` and `--language en|de|match`, plus the decision logic that uses optional job-description and employer context to adapt wording, terminology, and conventions. The slice should include the credibility guardrail that prevents over-claiming when mirrored terminology is not supported by the CV evidence.
   **Acceptance criteria**:
   - The skill can switch between light tailoring and stronger mirroring in a visible and explainable way.
   - The skill can produce English, German, or job-description-matched output using the agreed flags.
   - When the input evidence is weak, the skill warns or softens mirrored wording instead of overstating experience.

4. **Title**: Deliver a complete structure mode with ATS-safe restructuring guidance
   **Type**: AFK
   **Blocked by**: 1. Bootstrap the skill package with baseline content review
   **User stories covered**: 6, 9, 13, 17, 18, 22, 30, 32, 42, 43
   **What to build**: Add a dedicated `structure` mode that can review and reshape a CV into a senior-appropriate, reverse-chronological, ATS-safe structure. The slice should support both freeform CV input and current `resume.json`-derived context while staying oriented toward a document-first output model.
   **Acceptance criteria**:
   - The skill supports `--mode structure` and produces section-order, chronology, compression, and heading recommendations in a stable format.
   - The structure output reflects ATS-safe constraints and senior-level prioritisation of recent experience.
   - The skill can use the current repo CV source as input context without coupling recommendations to the existing renderer layout.

5. **Title**: Deliver a complete visual mode with theme recommendation and HTML/CSS mapping
   **Type**: AFK
   **Blocked by**: 1. Bootstrap the skill package with baseline content review
   **User stories covered**: 18, 19, 20, 21, 22, 23, 31, 42, 43, 48
   **What to build**: Add a dedicated `visual` mode that proposes 1 to 3 fitting style directions, recommends one, and maps the chosen direction into concrete HTML/CSS-oriented implementation guidance. The slice should tie visual recommendations to ATS safety, print friendliness, and employer fit.
   **Acceptance criteria**:
   - The skill supports `--mode visual` and returns multiple style directions plus one explicit recommendation.
   - The recommended direction includes concrete guidance for typography, spacing, hierarchy, accent usage, and print-safe layout.
   - The implementation mapping is clearly document-focused and not constrained by the current renderer's existing theme vocabulary.

6. **Title**: Orchestrate full mode across content, structure, and visual outputs
   **Type**: AFK
   **Blocked by**: 3. Add tailoring depth and language controls for role-specific optimisation, 4. Deliver a complete structure mode with ATS-safe restructuring guidance, 5. Deliver a complete visual mode with theme recommendation and HTML/CSS mapping
   **User stories covered**: 13, 26, 27, 28, 32, 42, 47, 49
   **What to build**: Add the `full` orchestration path that combines the three specialised modes into one coherent end-to-end response with sensible defaults and focused clarifying questions only when needed. The slice should make the skill feel complete for day-to-day use.
   **Acceptance criteria**:
   - The skill supports `--mode full` and produces a coordinated response spanning content, structure, and visual recommendations.
   - The default full-mode behaviour rewrites key sections while preserving critique-first output.
   - The skill asks clarifying questions only when the provided inputs are insufficient for a reliable pass.

7. **Title**: Add examples, fixtures, and output-contract validation
   **Type**: AFK
   **Blocked by**: 6. Orchestrate full mode across content, structure, and visual outputs
   **User stories covered**: 42, 43, 46, 47, 48, 49
   **What to build**: Add representative invocation examples, compact fixtures, and automated checks that validate supported flags, defaults, and response-shape expectations. This slice should make the skill easier to maintain and safer to evolve.
   **Acceptance criteria**:
   - The package includes representative examples covering baseline, tailored, structure, visual, and full-mode invocations.
   - Validation covers supported flags, default behaviours, and the expected response contract rather than brittle exact prose.
   - The added examples and checks make it easier to refine the skill without regressing the agreed user-facing behaviour.
