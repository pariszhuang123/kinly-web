# Kinly Web

Public link and landing layer for Kinly.

This repository powers the public entry points into Kinly:
- platform-neutral share links that work on iOS, Android, and desktop
- deep-link mapping into the Kinly app through user action
- region gating for install availability
- interest capture for unsupported regions
- public house norms pages when a home chooses to publish them
- safe fallback behavior so users never dead-end

Primary domain: `go.makinglifeeasie.com`

---

## Why this exists

Sharing platform-specific links breaks onboarding. An Android-only link leaves iOS users stuck, and an app-only route is not readable on desktop.

Kinly Web provides a single neutral URL surface that:
- stays readable in any browser
- opens the app when appropriate
- shows install options when appropriate
- degrades safely when it cannot continue

This repo is intentionally separate from:
- the mobile app
- any future full marketing site

---

## What this repo is (and is not)

### This repo is
- a public, unauthenticated web surface
- a routing and policy enforcement layer
- an intake point for interest capture through Edge Function to RPC
- allowed to render public content only

### This repo is not
- the full marketing site
- an authenticated web client
- allowed to write directly to the database
- allowed to expose private home or member data

---

## Architecture

Browser  
Next.js (Vercel)  
Supabase Edge Function (HTTP)  
Postgres RPC (SECURITY DEFINER)

All writes are recorded via RPC. Tables are RLS-enabled with no direct client write path.

---

## Contracts and authority

Behavior is defined by versioned contracts under `/contracts`.

- Routes, edge functions, and deep-link behavior MUST conform to active contracts.
- Behavioral changes require a contract version bump.

Start here:
- `contracts/contracts/product/kinly/web/contracts_registry.md`
- `AGENTS.md`

---

## Routes

- `/` - MakingLifeEasie company home
- `/kinly/general` - primary Kinly landing page
- `/kinly/market` - crawlable Kinly scenario hub
- `/kinly/market/:slug` - scenario-specific Kinly landing pages
- `/kinly/get` - install and interest-capture surface
- `/kinly/join/:inviteCode` - join a home
- `/kinly/norms/:homePublicId` - public house norms
- `/fallback` - safe fallback

---

## Local development

### Install

```bash
npm install
```
