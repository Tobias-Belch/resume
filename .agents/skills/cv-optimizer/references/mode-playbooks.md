---
title: CV Optimizer Mode Playbooks
---

# Mode Playbooks

## Content Mode

Goal: Improve language quality, impact evidence, and role fit.

Checklist:

- Confirm target role and seniority framing.
- Evaluate summary for scope, outcomes, and direction.
- Convert weak bullets into action-impact-metric style.
- Validate skills claims against evidence in experience.
- Flag passive voice, vague phrasing, and unsupported claims.

Output emphasis:

- Top issues.
- Suggested rewrites per key section.
- Credibility notes where over-claim risk exists.

## Structure Mode

Goal: Produce ATS-safe, senior-appropriate information architecture.

Checklist:

- Enforce standard headings.
- Ensure reverse chronology and parseable dates.
- Prioritise recent 10-12 years and compress older history.
- Surface missing sections or misplaced information.
- Remove ATS-hostile structures from recommendations.

Output emphasis:

- Current structure issues.
- Proposed section order and rationale.
- Compact rewrite of headings and role blocks when requested.

## Visual Mode

Goal: Choose and apply a fitting visual direction that remains parse-safe.

Checklist:

- Propose 1-3 fitting style directions.
- Recommend one direction based on target context.
- Define typography, spacing, hierarchy, accent strategy.
- Include print-readiness and ATS constraints.
- Map recommendations to document-first HTML/CSS implementation.

Output emphasis:

- Options and recommendation.
- Concrete implementation mapping.
- Explicit do and do-not rules.

## LinkedIn Mode

Goal: Produce a LinkedIn Profile Package that adapts CV evidence for LinkedIn searchability, human scanability, and manual profile updates.

Checklist:

- Use `resumes/index.html` as the baseline when no CV text or alternate file is supplied.
- Extract visible resume evidence from the HTML body; ignore CSS, layout mechanics, comments, and print styling.
- Preserve the CV's evidence and seniority framing while adapting tone, structure, density, and keyword placement for LinkedIn.
- Produce three headline variants within LinkedIn's 220-character limit: balanced senior engineer, architecture/platform-heavy, and AI/design-system-forward.
- Produce two About variants within LinkedIn's 2,600-character limit: direct professional and slightly warmer networking.
- Rewrite experience as concise LinkedIn summaries rather than copied CV bullets.
- Give current and recent roles the most detail; compress older roles unless `--rewrite full` is requested.
- Recommend skills to add, prioritise, or emphasise; do not recommend removing existing LinkedIn skills unless explicitly asked.
- Include recruiter-search keyword notes and flag weakly evidenced terms rather than strengthening them.
- Include Featured/profile improvement suggestions when supported by available evidence.
- Include a manual update checklist.
- State that direct LinkedIn profile editing is not supported; do not offer browser automation, session handling, scraping, or API-based profile updates.

Output emphasis:

- LinkedIn positioning strategy.
- Ready-to-paste profile content.
- Searchability and credibility notes.
- Manual update steps.

## Full Mode

Goal: Deliver one coordinated optimization pass.

Checklist:

- Run content, structure, and visual logic in one flow.
- Keep recommendations internally consistent.
- Apply rewrite defaults (`section`) unless overridden.
- Ask questions only when critical context is missing.

Output emphasis:

- Integrated priorities.
- Targeted rewrites.
- One visual recommendation with practical implementation path.
