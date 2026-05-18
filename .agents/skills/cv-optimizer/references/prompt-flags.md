---
title: CV Optimizer Flags
---

# Prompt Flags

Use these controls when present in user prompts.

## `--mode`

- `content`: Wording, evidence, credibility, role alignment.
- `structure`: Section order, chronology, compression, heading normalization.
- `visual`: Theme options and concrete implementation mapping.
- `full`: Coordinated pass across content, structure, and visual.

Default: `full`

## `--tailoring`

- `light`: Shift emphasis and terminology gently, keep broad reusability.
- `mirror`: Mirror target title and vocabulary strongly when evidence supports it.

Default: `light`

Guardrail: If evidence is weak, soften or warn rather than over-claim.

## `--rewrite`

- `none`: Critique only.
- `section`: Rewrite key sections (headline, summary, skills framing, selected bullets).
- `full`: Produce a fuller draft while preserving critique context.

Default:

- `section` in `full` mode.
- `none` in isolated `structure` or `visual` mode unless requested.

## `--language`

- `en`: English output.
- `de`: German output.
- `match`: Match JD language when JD exists; otherwise fallback to English.

Default: `en`

## `--employer`

- `traditional`: Lean into formal German-market conventions where relevant.
- `international`: Lean into global tech norms.
- `auto`: Infer from context and state assumptions.

Default: `auto`

## `--theme`

- `conservative`: Formal and restrained.
- `modern-tech`: Clean technical product style.
- `premium`: Refined, high-trust editorial style.
- `auto`: Propose multiple options and recommend one.

Default: `auto`
