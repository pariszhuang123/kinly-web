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

Web UI and Edge Functions MUST NOT perform direct database writes.
This means:
- No client-side INSERT / UPDATE / DELETE on tables
- No direct table access for anon or authenticated roles

Web UI MAY call explicitly-approved Supabase RPC functions
as its public API surface, provided ALL of the following are true:

- RPCs are SECURITY DEFINER
- anon/authenticated roles have NO table write privileges
  (tables are REVOKE ALL; no write RLS paths)
- Only whitelisted RPCs are GRANTed EXECUTE to anon
- RPCs enforce:
  - input validation
  - abuse/rate limiting
  - stable error codes/messages
- RPCs are treated as versioned, contract-defined APIs

RPC calls from Web are considered API calls, NOT direct DB writes.

System-derived fields (e.g. ui_locale) may be auto-detected by Web
and sent invisibly to RPCs if required by contract.

## Commands

After making changes, run:

```bash
npm run check:all    # All quality gates (required before commit)
npm run build        # Full production build
npm run e2e          # End-to-end tests (requires build first)
```

Individual checks (run via check:all):
- `tokens:build` — compile design tokens
- `typecheck` — TypeScript validation
- `lint` — ESLint (includes primitive enforcement)
- `check:contracts` — validate contract registry
- `check:primitives` — ensure required primitives exist

## UI Rules (Web Primitives Contract)

All UI in `app/` MUST use primitives from `components/`:

```tsx
// ✗ Forbidden in app/
<button>, <p>, <h1>-<h6>, <input>

// ✓ Required
<KinlyButton>, <KinlyText>, <KinlyHeading>, <KinlyInput>
```

Import from barrel only:
```tsx
import { KinlyButton, KinlyText } from "../components";
```

Primitives do NOT accept `className`. All styling via tokens.

## Token System

- Source: `contracts/design-system/tokens.json`
- Generated: `app/styles/generated/tokens.css` (do not edit)
- Derived vars: `--k-web-shadow-color`, `--k-web-scrim-color`, `--k-web-focus-ring`

Run `npm run tokens:build` after editing tokens.json.

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

