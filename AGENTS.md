# AGENTS — Kinly Web

Scope: This repository only (Vercel-hosted public link + landing layer).

This repo provides the public entry surface for Kinly:
- platform-neutral share links
- deep-link mapping into the app (user action only)
- region gating + interest capture
- public house norms pages
- guaranteed fallback (never dead-end)

## Authority Model

Behavior is defined by versioned contracts under `/contracts`.
Implementation MUST conform to active contract versions.

- AGENTS.md defines **who decides** and **where truth lives**
- Contracts define **what the system does**
- Docs define **how it is operated**

Behavioral changes require a contract version bump.

## Dependency Direction (Hard Rule)
Direct DB writes from Web UI or Edge Functions are forbidden.

## Required Reading

Before proposing or implementing changes, read:
- `contracts/contracts_registry.md`
- `docs/roles.md`
- `docs/guardrails.md`
- `docs/dod.md`

## Ownership

- Product scope & safety: Planner
- Public/private boundaries: Planner + DB
- Deep-link semantics: Deep Linking + Planner
- DB schema/RPCs: Supabase/DB
- CI/infra: Release

## Non-Goals (v1)

- authenticated web sessions
- deferred deep linking after install
- full marketing site rendering

## Merge Rule

If a change alters:
- routing behavior
- join semantics
- public/private visibility
- region gating

→ the corresponding contract MUST be updated or explicitly reaffirmed.

