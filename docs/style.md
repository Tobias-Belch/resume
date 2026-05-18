---
title: CV Style Decision
---

# CV Style Assessment And Decisions

## Goal

Define a visual direction for the CV that is distinctive and modern without sacrificing ATS safety, readability, or print quality.

## Assessment Of Inspiration Set

- [01](./research/style-inspiration.md#01): Strong direction. Text-first layout and restrained color are highly suitable for a senior engineering CV.
- [02](./research/style-inspiration.md#02): Good color and image integration, but overall treatment is likely too visual-heavy for our target use.
- [03](./research/style-inspiration.md#03): Strong hierarchy and layout clarity; good benchmark for section rhythm.
- [04](./research/style-inspiration.md#04): Strong heading treatment and line usage; good model for subtle visual identity.
- [05](./research/style-inspiration.md#05): Good near-one-column structure and text emphasis; safe baseline behavior.
- [06](./research/style-inspiration.md#06): Frame concept is useful, but should be used minimally to avoid fragmented scanning.
- [07](./research/style-inspiration.md#07): Photo integration is attractive, but risk of over-prioritizing portrait over content.
- [08](./research/style-inspiration.md#08): Excellent inspiration for minimal but non-boring headings and rhythm.
- [09](./research/style-inspiration.md#09): Strong typographic hierarchy and heading character; very compatible with our goals.
- [10](./research/style-inspiration.md#10): Hero-based photo treatment is stylish but too dominant for ATS-first and recruiter scan speed.
- [11](./research/style-inspiration.md#11): Strong principle: small color detail creates personality without noise.
- [12](./research/style-inspiration.md#12): Framing and heading ideas are useful when applied sparingly.

## Challenges And Disagreements

- Photo-heavy hero layouts (notably [07](./research/style-inspiration.md#07) and [10](./research/style-inspiration.md#10)) are not ideal for this CV because they reduce immediate information density at the top.
- Multiple frame/box patterns (as implied by [06](./research/style-inspiration.md#06) and [12](./research/style-inspiration.md#12)) can make long experience sections feel segmented and harder to scan.
- Strong color coverage from [02](./research/style-inspiration.md#02) is visually effective but should be toned down to keep print quality and enterprise suitability.

## Final Style Decision

Adopt **Editorial Minimal Tech**:

- Text-first, single-column layout.
- Controlled accent usage (deep blue family only).
- Compact portrait integrated in header, not dominant.
- Distinct but subtle heading language (short extension rule).
- One repeatable framing motif only (left rail + restrained role framing).
- Warm-neutral paper tone to avoid default "template" feel while preserving professionalism.

## Implementation Decisions

- Primary sources for accepted patterns: [01](./research/style-inspiration.md#01), [03](./research/style-inspiration.md#03), [04](./research/style-inspiration.md#04), [08](./research/style-inspiration.md#08), [09](./research/style-inspiration.md#09), [11](./research/style-inspiration.md#11).
- Secondary, constrained influence: [06](./research/style-inspiration.md#06), [12](./research/style-inspiration.md#12) for minimal framing only.
- Explicitly not adopted as dominant pattern: [02](./research/style-inspiration.md#02), [07](./research/style-inspiration.md#07), [10](./research/style-inspiration.md#10).

## Output

- Implemented style variant: `resumes/base-inspired.html`.
- Baseline retained for comparison: `resumes/base.html`.
