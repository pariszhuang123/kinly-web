# Kinly Web

Public link and landing layer for Kinly.

This repository powers the public entry points into Kinly:
- platform-neutral share links (work on iOS, Android, desktop)
- deep-link mapping into the Kinly app (user-initiated)
- region gating (NZ/SG supported in v1)
- interest capture for unsupported regions
- public house norms pages (when a home chooses to publish them)
- safe fallback behavior (never dead-end)

Primary domain: `go.makinglifeeasie.com`

---

## Why this exists

Sharing platform-specific links breaks onboarding.
Example: an Android user shares a link that routes only to Google Play, leaving iOS users stuck.

Kinly Web provides a **single, neutral URL** that:
- always shows both app stores
- opens the app when possible
- degrades safely when it cannot

This repo is intentionally separate from:
- the mobile app (Flutter)
- the marketing site (WordPress / future Vercel)

---

## What this repo is (and is not)

### ✅ This repo is
- a public, unauthenticated web surface
- a routing + policy enforcement layer
- an intake point for interest capture (via Edge Function → RPC)
- allowed to render **public** content only

### ❌ This repo is not
- the full marketing site
- an authenticated web client
- allowed to write directly to the database
- allowed to expose private home or member data

---

## Architecture (high level)

Browser
↓
Next.js (Vercel)
↓
Supabase Edge Function (HTTP)
↓
Postgres RPC (SECURITY DEFINER)


All writes are recorded via RPC.  
Tables are RLS-enabled with no direct policies.

---

## Contracts & authority

Behavior is defined by versioned contracts under `/contracts`.

- Routes, edge functions, and deep-link behavior MUST conform to contracts.
- Behavioral changes require a contract version bump.

Start here:
- `contracts/contracts_registry.md`
- `AGENTS.md`

---

## Routes (v1)

- `/join/:inviteCode` — join a home
- `/home/:homePublicId` — open a home
- `/norms/:homePublicId` — public house norms (if published)
- `/interest` — capture email + country for unsupported regions
- `/fallback` — safe fallback
- `/` — generic landing

---

## Local development

### Install
```bash
npm install
