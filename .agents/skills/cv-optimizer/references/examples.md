---
title: CV Optimizer Examples
---

# Invocation Examples

Use these patterns to guide consistent behavior.

## Baseline Full Pass

Prompt:

`Optimize my CV for Germany/EU lead engineer roles. --mode full`

Expected behavior:

- No JD required.
- Critique-first output.
- Key-section rewrites by default.

## Role-Specific Mirror Tailoring

Prompt:

`Tailor my CV to this JD for Staff Backend Engineer. --mode full --tailoring mirror --language match`

Expected behavior:

- Strong vocabulary alignment.
- Guardrails against unsupported claim inflation.
- Explicit assumptions when evidence is incomplete.

## Structure-Only Pass

Prompt:

`Review only structure and ATS parse safety. --mode structure --rewrite none`

Expected behavior:

- No unnecessary content rewriting.
- Concrete section and chronology recommendations.

## Visual Direction And Mapping

Prompt:

`Suggest a visual theme and show how to implement it for an HTML CV. --mode visual --theme auto`

Expected behavior:

- 1-3 style directions.
- One recommendation.
- Concrete HTML/CSS implementation guidance.

## Language-Controlled Rewrite

Prompt:

`Rewrite key sections in German for this role. --mode content --rewrite section --language de`

Expected behavior:

- German output.
- Focused section rewrites.
- Role-appropriate terminology.

## LinkedIn Profile Package

Prompt:

`Create LinkedIn-optimized content from my current CV. --mode linkedin --rewrite full`

Expected behavior:

- Use `resumes/index.html` as the baseline when no other CV text or file is supplied.
- Produce a LinkedIn Profile Package with headline variants, About variants, experience summaries, skills extension recommendations, recruiter-search keyword notes, Featured/profile suggestions, and a manual update checklist.
- Keep all claims supported by CV evidence.
- State that direct LinkedIn editing is not supported.

## LinkedIn Alignment From HTML CV

Prompt:

`Align my LinkedIn profile with @resumes/index.html for senior/lead engineering roles. --mode linkedin --tailoring light`

Expected behavior:

- Extract visible resume evidence from `resumes/index.html` and ignore CSS, layout mechanics, comments, and print styling.
- Preserve the CV's core positioning while adapting the structure, tone, density, and keyword placement for LinkedIn.
- Extend and prioritise LinkedIn skills rather than recommending removals by default.
- Include manual-update-ready content, not browser automation or API-based profile editing.
