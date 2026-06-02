---
title: CV Optimizer LinkedIn Mode
---

## Problem Statement

The existing `cv-optimizer` skill is focused on CV optimisation for Germany/EU senior and lead software-engineering roles. It supports content, structure, visual, and full optimisation modes, but it does not yet cover the adjacent workflow of aligning a LinkedIn profile with the current CV.

The user's current canonical CV is now the document-first HTML resume at `resumes/index.html`, not `resume.json`. The skill still describes `resume.json` as an accepted baseline source, which no longer matches the repository's active workflow. This creates friction whenever the user wants the skill to reason from the latest resume content without manually pasting or converting it.

LinkedIn also requires different optimisation behaviour from a CV. A CV is a compact proof document with dense evidence, parse-safe structure, and application-specific constraints. A LinkedIn profile is a searchable positioning page: it needs stronger recruiter-search discoverability, a more human About narrative, platform-specific length constraints, concise experience summaries, and skills guidance that extends rather than removes existing profile data.

The missing capability is therefore a dedicated LinkedIn optimisation mode that can reference the current CV baseline, preserve its evidence, adapt its framing to LinkedIn, and produce ready-to-paste profile content without claiming to edit LinkedIn directly.

## Solution

Extend the `cv-optimizer` skill with a new `linkedin` mode and update its baseline-source assumptions.

The skill should:

- treat `resumes/index.html` as the canonical default CV baseline when no CV text or alternate file is provided
- still accept pasted CV text or explicitly referenced alternate CV files
- extract visible CV content from the HTML body and ignore CSS, layout mechanics, comments, and print styling
- add `--mode linkedin` as a first-class mode alongside `content`, `structure`, `visual`, and `full`
- produce a LinkedIn Profile Package with ready-to-paste content and concise rationale
- preserve the CV's evidence while adapting structure, tone, density, and keyword strategy for LinkedIn
- support the existing tailoring, rewrite, and language controls in LinkedIn-specific ways
- explicitly state that direct LinkedIn profile editing is not supported

LinkedIn mode should default to practical output rather than pure advice. It should produce enough content for the user to manually update LinkedIn efficiently while preserving credibility and avoiding keyword stuffing.

Direct LinkedIn profile updates are out of scope. LinkedIn does not provide a generally available public API for editing core profile fields such as headline, About, Experience, or Skills. Browser automation would be brittle, session-sensitive, and risky for account security. The skill should therefore generate manual-update-ready content plus an update checklist.

## User Stories

1. As a user with a current HTML CV, I want the skill to use `resumes/index.html` as the default baseline, so that I do not need to paste or convert my CV content.
2. As a user with a different CV source, I want to explicitly reference another CV file or paste CV text, so that the skill can still handle one-off variants.
3. As a user invoking LinkedIn optimisation, I want the skill to extract visible resume content from the HTML and ignore styling/layout code, so that recommendations are based on career evidence rather than presentation mechanics.
4. As a lead/senior software engineer, I want a LinkedIn-specific mode, so that my profile is optimised for LinkedIn rather than treated like another CV document.
5. As a user aligning LinkedIn with my CV, I want the skill to preserve my existing positioning and evidence, so that the profile remains consistent and interview-defensible.
6. As a user updating LinkedIn, I want ready-to-paste content, so that I can update the profile without translating general advice myself.
7. As a user concerned about profile authenticity, I want the skill to avoid fabricated metrics or unsupported claims, so that every statement can be defended in interviews.
8. As a user optimizing for recruiter search, I want the skill to produce LinkedIn headline variants, so that I can choose the balance between broad searchability and precise positioning.
9. As a user with multiple positioning angles, I want three headline variants, so that I can compare balanced, architecture/platform-heavy, and AI/design-system-forward options.
10. As a user updating the About section, I want two About variants, so that I can choose between a direct professional style and a slightly warmer networking style.
11. As a user with a dense CV, I want LinkedIn experience summaries instead of copied CV bullets, so that each role reads naturally on the platform.
12. As a user with a long work history, I want recent roles to receive more detail and older roles to be compressed, so that the profile stays focused and readable.
13. As a user with existing LinkedIn skills, I want the skill to recommend skill additions and prioritisation rather than removals, so that it does not destructively alter my current profile strategy.
14. As a user targeting senior/lead engineering roles, I want recruiter-search keyword notes, so that I understand which terms should appear naturally in headline, About, experience, and skills.
15. As a user concerned about over-optimisation, I want the skill to flag weakly evidenced keywords, so that I do not inflate AI, architecture, leadership, or platform claims beyond the CV evidence.
16. As a user improving my whole profile, I want Featured/profile improvement suggestions, so that I can use LinkedIn sections beyond headline and experience when useful.
17. As a user updating LinkedIn manually, I want a manual update checklist, so that I can apply the generated content field by field.
18. As a user asking whether direct LinkedIn updates are possible, I want the skill to explain that direct editing is unsupported, so that expectations and account-safety boundaries are clear.
19. As a user using `--tailoring light`, I want LinkedIn content that remains broadly reusable, so that my profile is not overfitted to one job posting.
20. As a user using `--tailoring mirror`, I want supported target terminology reflected more strongly, so that I can align the profile with a target role family or job description.
21. As a user using `--rewrite none`, I want critique and strategy only, so that I can write the LinkedIn content myself.
22. As a user using `--rewrite section`, I want key LinkedIn sections rewritten by default, so that the mode is immediately useful without producing an unnecessarily large package.
23. As a user using `--rewrite full`, I want a complete LinkedIn Profile Package, so that I can update headline, About, experience, skills, and supporting sections in one pass.
24. As a user using `--language en`, I want the LinkedIn content in English, so that it fits international tech recruiting.
25. As a user using `--language de`, I want German LinkedIn content, so that I can target German-language employers if needed.
26. As a user using `--language match`, I want the language to match a provided job description when available, so that LinkedIn tailoring follows the target context.
27. As a maintainer, I want the new mode represented in the skill description, flags, playbooks, checklists, output contract, and examples, so that behaviour remains consistent across the skill package.
28. As a maintainer, I want the extension to remain documentation-first, so that it avoids premature automation and stays easy to evolve.

## Implementation Decisions

- Add `linkedin` as a first-class supported mode.
- Update the skill frontmatter description to mention LinkedIn profile alignment and LinkedIn-optimised content.
- Replace `resume.json` as the implied baseline source with `resumes/index.html`.
- Keep support for pasted CV text and explicitly referenced alternate CV files.
- Add explicit HTML-baseline handling instructions: read visible resume content from the body, ignore styles, ignore layout mechanics, ignore comments unless they clarify content semantics.
- Define LinkedIn mode as a platform-specific optimisation mode, not as a CV structure mode.
- Keep Germany/EU senior and lead software-engineering positioning as the default professional context.
- Preserve the existing evidence guardrails: no fabricated metrics, no unsupported claims, no keyword stuffing, and no claim inflation under mirror tailoring.
- Add LinkedIn-specific platform constraints.
- Headline should stay within LinkedIn's 220-character limit.
- About should stay within LinkedIn's 2,600-character limit.
- Experience summaries should be concise and skimmable, with more detail for recent roles and compression for older roles.
- Skills recommendations should extend and prioritise the user's LinkedIn skills rather than instruct removal.
- LinkedIn mode should produce three headline variants by default.
- LinkedIn mode should produce two About variants by default.
- LinkedIn mode should produce experience summaries for current and recent roles by default.
- LinkedIn mode should include older-role compression guidance unless `--rewrite full` asks for fuller coverage.
- LinkedIn mode should include recruiter-search keyword notes with evidence confidence where useful.
- LinkedIn mode should include Featured/profile improvement suggestions.
- LinkedIn mode should include a manual update checklist.
- The skill should state that direct LinkedIn profile editing is not supported and explain the reason when relevant.
- Do not introduce browser automation, LinkedIn scraping, session handling, or API integration.
- Keep the extension limited to Markdown skill files and references in v1.

## LinkedIn Mode Behaviour

Default invocation:

`Create LinkedIn-optimized content from my current CV. --mode linkedin`

Expected default behaviour:

- Use `resumes/index.html` as the baseline if no other CV input is supplied.
- Infer senior/lead software-engineering positioning from the CV unless the user supplies a different target.
- Use English unless language is explicitly changed.
- Apply `--tailoring light` unless another tailoring mode is specified.
- Apply `--rewrite section` by default.
- Produce ready-to-paste headline and About content plus selected experience and skills guidance.
- Ask clarifying questions only when the CV source, target role, or language choice is insufficient.

`--rewrite` handling in LinkedIn mode:

- `none`: critique, positioning strategy, platform constraints, and keyword notes only.
- `section`: default; produce headline variants, About variants, current/recent role summaries, skills extension guidance, and manual update notes.
- `full`: produce a complete LinkedIn Profile Package with fuller role coverage, skills prioritisation, Featured/profile suggestions, and update checklist.

`--tailoring` handling in LinkedIn mode:

- `light`: adjust emphasis while preserving a broadly reusable profile.
- `mirror`: mirror a target role, job description, or role family more strongly when the CV evidence supports the terminology.

`--language` handling in LinkedIn mode:

- `en`: English LinkedIn content.
- `de`: German LinkedIn content.
- `match`: match the supplied job description language when available; otherwise fall back to English.

## Output Contract

LinkedIn mode should use a LinkedIn-specific response shape rather than the normal CV optimisation output.

The default LinkedIn Profile Package should include:

1. Context assumptions
- Baseline source used, target role assumptions, language, tailoring mode, and confidence level.

2. LinkedIn positioning strategy
- Short explanation of how the CV framing should shift for LinkedIn.

3. Headline variants
- Three options within LinkedIn's 220-character limit.
- Include a short note on when to use each option.

4. About variants
- Two options within LinkedIn's 2,600-character limit.
- Include one direct professional version and one slightly warmer networking version.

5. Experience summaries
- LinkedIn-ready summaries for current and recent roles.
- Compress older roles unless `--rewrite full` is requested.

6. Skills extension recommendations
- Prioritised skills to add or emphasise.
- Do not recommend removing existing LinkedIn skills unless the user explicitly asks for pruning.

7. Recruiter-search keyword notes
- Keywords and phrases that should appear naturally.
- Flag terms with weak evidence or over-claim risk.

8. Featured/profile improvement suggestions
- Suggested profile assets, portfolio links, CV links, articles, or featured items when supported by available evidence.

9. Manual update checklist
- Field-by-field checklist for applying the generated content manually.
- State that direct LinkedIn editing is not supported.

## Testing Decisions

- Testing should focus on documentation contract consistency rather than exact generated prose.
- Validate that all supported mode lists include `linkedin` wherever modes are documented.
- Validate that the default baseline source is documented as `resumes/index.html`, not `resume.json`.
- Validate that LinkedIn mode has a distinct output contract.
- Validate that LinkedIn mode references headline, About, experience summaries, skills extension, recruiter-search notes, Featured/profile suggestions, and manual update checklist.
- Validate that LinkedIn platform constraints are documented: 220-character headline and 2,600-character About limit.
- Validate that direct LinkedIn profile editing is explicitly out of scope.
- Validate that existing flags have LinkedIn-specific semantics.
- Avoid tests that depend on exact wording of generated LinkedIn content.

## Out of Scope

- Direct LinkedIn profile editing.
- LinkedIn API integration.
- Browser automation for LinkedIn form filling.
- Credential, cookie, or session handling for LinkedIn.
- Scraping the user's live LinkedIn profile.
- Removing or pruning existing LinkedIn skills unless explicitly requested by the user.
- Fabricating metrics, responsibilities, seniority, or platform claims not supported by the CV.
- Generic social-media profile optimisation outside LinkedIn.
- Cover-letter, portfolio-site, or GitHub-profile optimisation as first-class features.
- Building helper scripts or deterministic HTML parsers in this extension.

## Further Notes

- LinkedIn content should not copy the CV verbatim. It should translate the CV into a more searchable and human-readable profile.
- The strongest conceptual distinction is: CV equals evidence; LinkedIn equals positioning plus discoverability.
- The user's current resume already contains strong LinkedIn-relevant signals: senior/lead software engineering, TypeScript, React, Next.js, frontend architecture, BFF architecture, design systems, AI agent integration, stakeholder communication, mentoring, healthcare, e-health commerce, and sustainability.
- The skill should distinguish between strongly evidenced keywords and keywords that are only lightly supported.
- The skill should remain pragmatic: provide content the user can paste manually, not theoretical branding advice.
- Because this is a skill documentation extension, implementation should remain small and focused on consistent instructions across the existing reference files.

## Proposed Implementation Tickets

The slices below are tracer bullets. Each one should leave the skill in a usable and verifiable state.

1. **Title**: Update baseline source and skill trigger contract
   **Type**: AFK
   **Blocked by**: None
   **User stories covered**: 1, 2, 3, 27, 28
   **What to build**: Update `SKILL.md` so the skill treats `resumes/index.html` as the canonical default CV baseline, still accepts pasted or explicitly referenced alternate CV sources, and extracts visible HTML body content while ignoring styling and layout mechanics.
   **Acceptance criteria**:
   - `SKILL.md` no longer presents `resume.json` as the default baseline source.
   - `SKILL.md` documents `resumes/index.html` as the canonical default when no CV input is supplied.
   - The workflow explicitly says to ignore CSS, comments, print layout, and visual mechanics when extracting CV evidence.

2. **Title**: Add LinkedIn mode to flags and mode routing
   **Type**: AFK
   **Blocked by**: 1. Update baseline source and skill trigger contract
   **User stories covered**: 4, 19, 20, 21, 22, 23, 24, 25, 26, 27
   **What to build**: Add `linkedin` to all supported mode lists and document LinkedIn-specific semantics for `--rewrite`, `--tailoring`, and `--language`.
   **Acceptance criteria**:
   - `--mode linkedin` is documented in `SKILL.md` and `references/prompt-flags.md`.
   - LinkedIn mode defaults to `--rewrite section`, `--tailoring light`, and English unless overridden.
   - Existing flags have clear LinkedIn-specific interpretations.

3. **Title**: Define LinkedIn mode playbook and guardrails
   **Type**: AFK
   **Blocked by**: 2. Add LinkedIn mode to flags and mode routing
   **User stories covered**: 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 18
   **What to build**: Extend the mode playbooks with LinkedIn-specific goals, checklist, platform constraints, and direct-editing limitations.
   **Acceptance criteria**:
   - `references/mode-playbooks.md` includes a LinkedIn Mode section.
   - The playbook requires three headline variants and two About variants.
   - The playbook documents LinkedIn headline and About length constraints.
   - The playbook explicitly rejects direct LinkedIn profile editing and unsupported automation.

4. **Title**: Add LinkedIn Profile Package output contract
   **Type**: AFK
   **Blocked by**: 3. Define LinkedIn mode playbook and guardrails
   **User stories covered**: 6, 8, 9, 10, 11, 13, 14, 16, 17, 18, 27
   **What to build**: Extend the output contract with a LinkedIn-specific response shape covering assumptions, positioning strategy, headline variants, About variants, experience summaries, skills extension, keyword notes, Featured/profile suggestions, and manual update checklist.
   **Acceptance criteria**:
   - `references/output-contract.md` contains a LinkedIn Profile Package section.
   - The output contract says skills should be extended/prioritised rather than removed by default.
   - The output contract includes manual-update guidance and direct-editing limitation language.

5. **Title**: Add LinkedIn checklist and examples
   **Type**: AFK
   **Blocked by**: 4. Add LinkedIn Profile Package output contract
   **User stories covered**: 13, 14, 15, 16, 17, 27, 28
   **What to build**: Update checklists and examples to include representative LinkedIn invocations and quality criteria.
   **Acceptance criteria**:
   - `references/checklists.md` includes a LinkedIn checklist.
   - `references/examples.md` includes at least one full LinkedIn mode example and one CV-reference LinkedIn alignment example.
   - Examples demonstrate using `resumes/index.html` as the baseline.

6. **Title**: Review documentation consistency
   **Type**: AFK
   **Blocked by**: 5. Add LinkedIn checklist and examples
   **User stories covered**: 27, 28
   **What to build**: Review all changed skill documentation for consistent terminology, mode names, defaults, and scope boundaries.
   **Acceptance criteria**:
   - All mode lists include the same set of modes.
   - `resumes/index.html` is consistently described as the default baseline.
   - Direct LinkedIn editing remains consistently out of scope.
   - The extension remains documentation-first with no unnecessary scripts or automation.

## Step By Step Implementation Plan

1. Inspect the current skill package
- Read `.agents/skills/cv-optimizer/SKILL.md` and every file in `.agents/skills/cv-optimizer/references/`.
- Identify every location that lists supported modes, input sources, output sections, default behaviours, guardrails, or examples.
- Confirm whether any existing wording still treats `resume.json` as the expected baseline.

2. Update the skill entrypoint
- Edit `.agents/skills/cv-optimizer/SKILL.md`.
- Update the frontmatter description so the skill explicitly supports LinkedIn profile alignment and LinkedIn-optimised content.
- Replace the input-source wording that mentions `resume.json` with `resumes/index.html` as the canonical default CV baseline.
- Add guidance that pasted CV text and explicitly referenced alternate CV files remain valid inputs.
- Add `linkedin` to the supported mode list.
- Add `linkedin` to the `--mode` flag declaration.
- Add workflow guidance for extracting visible resume content from `resumes/index.html` while ignoring CSS, layout mechanics, comments, and print styling.
- Add a guardrail stating that direct LinkedIn profile editing is not supported.

3. Update prompt flag semantics
- Edit `.agents/skills/cv-optimizer/references/prompt-flags.md`.
- Add `linkedin` to the `--mode` list and describe it as LinkedIn profile content generation based on the CV baseline.
- Document LinkedIn-specific `--rewrite` behaviour.
- Keep `section` as the LinkedIn default rewrite level.
- Document that `--tailoring light|mirror` affects LinkedIn headline, About, experience emphasis, skills, and keyword strategy.
- Document that `--language en|de|match` applies to generated LinkedIn profile content.

4. Add the LinkedIn mode playbook
- Edit `.agents/skills/cv-optimizer/references/mode-playbooks.md`.
- Add a new `LinkedIn Mode` section after the existing mode sections or before `Full Mode` if that reads better.
- Define the goal as producing a LinkedIn Profile Package that adapts CV evidence for LinkedIn searchability and human scanability.
- Add checklist items for baseline extraction, positioning strategy, headline variants, About variants, experience summaries, skills extension, keyword notes, Featured/profile suggestions, and manual update checklist.
- Add platform constraints: headline under 220 characters and About under 2,600 characters.
- Add explicit guidance to compress older roles and avoid copying dense CV bullets directly.
- Add a note that direct LinkedIn updates, browser automation, and API integration are out of scope.

5. Extend the output contract
- Edit `.agents/skills/cv-optimizer/references/output-contract.md`.
- Add a LinkedIn-specific section named `LinkedIn Profile Package`.
- Define the required response structure: context assumptions, LinkedIn positioning strategy, headline variants, About variants, experience summaries, skills extension recommendations, recruiter-search keyword notes, Featured/profile improvement suggestions, and manual update checklist.
- State that skills recommendations should extend and prioritise existing LinkedIn skills, not remove them by default.
- State that direct LinkedIn editing is unsupported and that the output is intended for manual profile updates.

6. Add LinkedIn quality checklist
- Edit `.agents/skills/cv-optimizer/references/checklists.md`.
- Add a `LinkedIn Checklist` section.
- Cover searchability, scanability, headline clarity, About narrative, experience compression, skills extension, keyword evidence, platform constraints, and direct-editing boundaries.
- Include a check that weakly evidenced keywords are flagged rather than strengthened.

7. Add usage examples
- Edit `.agents/skills/cv-optimizer/references/examples.md`.
- Add an example for creating a full LinkedIn Profile Package from the current CV: `Create LinkedIn-optimized content from my current CV. --mode linkedin --rewrite full`.
- Add an example for aligning LinkedIn with `@resumes/index.html`: `Align my LinkedIn profile with @resumes/index.html for senior/lead engineering roles. --mode linkedin --tailoring light`.
- Add expected behaviour notes for each example, including use of the HTML baseline, ready-to-paste output, manual update checklist, and no direct LinkedIn editing.

8. Check documentation consistency
- Search the skill package for `resume.json`, `--mode`, `content|structure|visual|full`, and `LinkedIn`.
- Ensure `resume.json` is no longer presented as the default baseline source.
- Ensure every mode list includes `linkedin` where the full supported set is documented.
- Ensure LinkedIn mode is consistently capitalised as `LinkedIn` in prose and `linkedin` in flags.
- Ensure direct LinkedIn editing is consistently described as unsupported.

9. Validate against the PRD acceptance criteria
- Compare the updated files against the implementation tickets in this PRD.
- Confirm that the baseline-source, mode-routing, playbook, output-contract, checklist, and example changes are all present.
- Confirm that no automation, scripts, browser control, API integration, or live LinkedIn scraping was introduced.

10. Produce the implementation summary
- Summarise the changed files.
- State the new default baseline behaviour.
- State the new `--mode linkedin` behaviour.
- Call out that direct LinkedIn profile updating remains unsupported and manual-update-ready content is the intended output.
