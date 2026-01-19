# Guardrails — Kinly Web

Guardrails are non-negotiable rules that protect user trust, privacy, and safety.
They prevent accidental drift, data exposure, and unsafe onboarding flows.

If a change conflicts with guardrails, the change must not ship.

---

## 1) Data Access Guardrails (Hard)

- ❌ Web UI must not write to the database directly.
- ❌ Edge Functions must not write to tables directly.
- ✅ All writes must be recorded via Postgres RPCs (SECURITY DEFINER).
- ✅ Tables used for writes should be “dark tables”:
  - RLS enabled
  - no direct policies
  - no public grants
  - access via RPC only

Rationale: prevents silent security drift and keeps a single, auditable write path.

---

## 2) Public Surface Guardrails (Hard)

Public pages may exist (e.g., public house norms), but:
- ❌ Never expose private identifiers (user IDs, emails, roles, invite codes).
- ❌ Never render member lists or home composition.
- ❌ Never include internal moderation fields or audit trails.
- ✅ Only render allow-listed public fields defined in the relevant contract.
- ✅ If the public resource is missing or unpublished:
  - render `/fallback` (or an equivalent safe page)
  - do not reveal whether the home exists privately

Rationale: public content is shareable, indexable, and irreversible.

---

## 3) Deep Link Guardrails (Hard)

- ❌ No automatic deep-link attempts on page load.
- ✅ Deep linking must be user-initiated (tap/click “Open in Kinly”).
- ✅ App open must always be optional, never forced.
- ✅ If deep linking fails:
  - show store CTAs
  - show a safe web fallback (“Continue on web” / Today fallback)

Rationale: auto-deep-linking can dead-end users and creates a hostile onboarding feel.

---

## 4) Redirect & `next` Guardrails (Hard)

- ❌ No open redirects.
- ✅ `next` must be an internal path only:
  - must start with `/`
  - must not contain `//`
  - must not contain a scheme (`http:` / `https:`)
  - must not contain `\` backslashes
- ✅ If `next` is invalid:
  - ignore it
  - route to a safe default (Today or `/`)

Rationale: open redirects are a common security vulnerability and abuse vector.

---

## 5) Region Gating Guardrails (Hard)

- ✅ Supported countries in v1: NZ, SG.
- ✅ For unsupported regions:
  - Join flows must be gated to `/interest`
  - Public pages may remain readable (e.g., public norms), but must not enable join
- ✅ Country detection is best-effort:
  - if detection is missing or unknown, treat as unsupported until user selects

Rationale: prevents confusing onboarding and supports ethical expansion.

---

## 6) Interest Capture Guardrails (Hard)

Interest capture is allowed only for:
- email
- selected country
- (optional) detected country
- (optional) sanitized source path
- (optional) user agent

- ❌ Do not store IP address.
- ❌ Do not collect sensitive personal attributes.
- ✅ Clear disclosure must be shown:
  - “We’ll only email you about availability. No spam.”
- ✅ Validation must be server-side (Edge Function and/or RPC).

Rationale: data minimization protects users and reduces compliance burden.

---

## 7) Environment & Secret Guardrails (Hard)

- ✅ `.env.local` must be gitignored.
- ✅ `.env.example` must exist and be committed.
- ❌ Do not put secrets into `NEXT_PUBLIC_*`.
- ❌ Do not hardcode store URLs, endpoints, keys, or credentials in code.
- ✅ Secrets belong in:
  - Vercel environment variables (server-side)
  - Supabase Edge Function secrets

Rationale: public web bundles expose anything marked public.

---

## 8) Error Handling Guardrails (Hard)

- ❌ Do not return raw database error text to clients.
- ✅ Return non-sensitive reason codes (e.g., `INVALID_EMAIL`, `NOT_FOUND`).
- ✅ Always render a safe UI state (no blank screens).
- ✅ `/fallback` must exist and be safe.

Rationale: prevents information leakage and avoids dead-end UX.

---

## 9) Observability Guardrails (Hard)

- ❌ Do not log emails in plaintext.
- ✅ Logs must be actionable but non-sensitive.
- ✅ Prefer reason codes + coarse metadata.

Rationale: logs leak over time.

---

## 10) Enforcement

Guardrails must be enforced by:
- execution agents where feasible (`docs/execution_agents.md`)
- tests where appropriate
- review ownership (`docs/roles.md`)

If guardrails conflict with a proposed change:
- escalate to Planner
- do not ship without explicit decision + contract update
