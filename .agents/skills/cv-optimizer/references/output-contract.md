---
title: CV Optimizer Output Contract
---

# Output Contract

Use this response structure unless the user explicitly requests another format.

1. Context assumptions
- Target role, language, employer type assumptions, and data confidence.

2. Top issues
- Highest-impact weaknesses first.

3. Recommendations by mode
- Content, structure, visual sections as relevant.

4. Rewrites
- Respect `--rewrite` level.
- If rewrite is omitted, keep critique-first and provide targeted rewrite samples.

5. Visual/theme recommendation
- Provide 1-3 directions plus one recommended direction.

6. Implementation mapping
- For visual outputs: concrete document-first HTML/CSS guidance.

## Tone And Scope

- Be direct, concrete, and specific.
- Do not fabricate measurable outcomes.
- Highlight uncertainty where user evidence is incomplete.
- Keep language ATS-safe and evidence based.

## LinkedIn Profile Package

Use this response structure for `--mode linkedin` unless the user explicitly requests another format.

1. Context assumptions
- Baseline source used, target role assumptions, language, tailoring mode, rewrite level, and data confidence.

2. LinkedIn positioning strategy
- Explain how the CV framing should shift for LinkedIn searchability and human scanability.

3. Headline variants
- Provide three options within LinkedIn's 220-character limit.
- Include a short note on when to use each option.

4. About variants
- Provide two options within LinkedIn's 2,600-character limit.
- Include one direct professional version and one slightly warmer networking version.

5. Experience summaries
- Provide LinkedIn-ready summaries for current and recent roles.
- Compress older roles unless `--rewrite full` is requested.

6. Skills extension recommendations
- Recommend skills to add, prioritise, or emphasise.
- Do not recommend removing existing LinkedIn skills unless the user explicitly asks for pruning.

7. Recruiter-search keyword notes
- List keywords and phrases that should appear naturally.
- Flag terms with weak evidence or over-claim risk.

8. Featured/profile improvement suggestions
- Suggest profile assets, portfolio links, CV links, posts, articles, or featured items when supported by available evidence.

9. Manual update checklist
- Provide field-by-field steps for applying the generated content manually.
- State that direct LinkedIn editing is not supported; do not offer browser automation, session handling, scraping, or API-based profile updates.
