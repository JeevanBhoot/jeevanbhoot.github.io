---
title: Building ML with calm confidence
date: 2024-01-15
type: post
---

Modern ML work oscillates between two poles: the velocity of new research and the gravity of production constraints. The best teams keep both in view. Here’s the operating pattern I return to when a project feels murky.

1. **Make the baseline lovable.** Before anything else, ship a deterministic baseline that is reliable and easy to reason about. Most model decisions get easier once you have a stable anchor and a clear set of failure modes.
2. **Instrument everything early.** Build the evaluation harness in parallel with the model. Log text, embeddings, slices, and examples. When surprises arrive, you want to debug with a trace, not a hunch.
3. **Design for human review.** Include affordances for domain experts — shortlists, example galleries, reversible actions. Trust grows when people feel invited, not bypassed.
4. **Ship in small, narrated steps.** Release a thin vertical slice, measure, write a short note, and repeat. The narrative keeps stakeholders aligned while the system steadily hardens.

The goal is to carry research-level curiosity into production without losing rigor or care for the people using the system. Calm beats frantic — in ML, and in everything adjacent to it.
