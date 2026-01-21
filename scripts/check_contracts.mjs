#!/usr/bin/env node
/**
 * Validates that all Kinly contracts referenced in the registry exist
 * and that all Kinly contract files are registered.
 *
 * Repo layout assumed:
 *   <repo>/contracts/contracts/contracts_registry.md
 *   <repo>/contracts/contracts/product/kinly/**.md
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readdir } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Your "inner" contracts root: contracts/contracts
const CONTRACTS_ROOT = join(ROOT, "contracts", "contracts");

// Registry lives at the inner root
const REGISTRY_FILENAME = "contracts_registry.md";
const REGISTRY_PATH = join(CONTRACTS_ROOT, REGISTRY_FILENAME);

// Kinly Web scope root
const KINLY_REL = "product/kinly/web";
const KINLY_DIR = join(CONTRACTS_ROOT, "product", "kinly", "web");

// ---- Registry parsing ----
// Expects table rows like:
// | ... | `product/kinly/mobile/foo.md` | Active |
// | ... | `mobile/foo.md` | Deprecated |
function extractReferencedContracts(registryContent) {
  const tablePattern =
    /\|\s*`([a-z0-9_\-\/]+\.md)`\s*\|\s*(Active|Deprecated)\s*\|/gi;

  const matches = [...registryContent.matchAll(tablePattern)];
  return matches.map((m) => m[1].replace(/\\/g, "/"));
}

function normalizeRefToKinlyRelative(ref) {
  // Accept either:
  //  - product/kinly/web/...
  //  - links/... (kinly web-relative)
  if (ref.startsWith(`${KINLY_REL}/`)) return ref.slice(`${KINLY_REL}/`.length);
  return ref;
}

function refIsKinlyScoped(ref) {
  // If full path style, enforce it is within product/kinly/
  // If kinly-relative style, treat it as in-scope by default.
  // (This lets you keep a Kinly-only registry if you want.)
  if (ref.includes("/")) {
    if (ref.startsWith(`${KINLY_REL}/`)) return true;
    // If it starts with another top folder like "api/" or "design/", it's out of Kinly scope.
    if (
      ref.startsWith("api/") ||
      ref.startsWith("design/") ||
      ref.startsWith("platform/") ||
      ref.startsWith("decisions/") ||
      ref.startsWith("architecture/")
    ) {
      return false;
    }
  }
  return true;
}

// ---- File discovery (Kinly-only) ----
async function findKinlyContractFiles() {
  const files = [];

  async function walk(dir, prefix = "") {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const relPath = prefix ? `${prefix}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        // Optional exclusions (tune as you like)
        if (
          relPath.startsWith("_incoming/") ||
          relPath.startsWith("docs/") ||
          relPath.startsWith(".git/") ||
          relPath.startsWith(".github/")
        ) {
          continue;
        }
        await walk(join(dir, entry.name), relPath);
        continue;
      }

      if (!entry.name.endsWith(".md")) continue;
      if (entry.name === "README.md") continue;

      files.push(relPath.replace(/\\/g, "/")); // kinly-relative
    }
  }

  if (!existsSync(KINLY_DIR)) {
    throw new Error(`Kinly contracts directory not found: ${KINLY_DIR}`);
  }

  await walk(KINLY_DIR);
  return files;
}

// ---- Main ----
async function main() {
  // Check registry exists
  if (!existsSync(REGISTRY_PATH)) {
    console.error(`✗ ${REGISTRY_FILENAME} not found`);
    console.error(`  Expected at: ${REGISTRY_PATH}`);
    process.exit(1);
  }

  const registryContent = readFileSync(REGISTRY_PATH, "utf-8");
  const referencedRaw = extractReferencedContracts(registryContent);

  // Only consider Kinly entries (so you can share one registry later if needed)
  const referencedKinly = referencedRaw
    .filter(refIsKinlyScoped)
    .map(normalizeRefToKinlyRelative);

  const existingKinly = await findKinlyContractFiles();

  const errors = [];
  const warnings = [];

  // 1) All referenced Kinly contracts exist
  for (const refKinlyRel of referencedKinly) {
    const fullPath = join(KINLY_DIR, refKinlyRel);
    if (!existsSync(fullPath)) {
      errors.push(`Referenced Kinly contract not found: ${KINLY_REL}/${refKinlyRel}`);
    }
  }

  // 2) All existing Kinly contracts are registered (warning only)
  const referencedSet = new Set(referencedKinly);
  for (const fileKinlyRel of existingKinly) {
    if (!referencedSet.has(fileKinlyRel)) {
      warnings.push(`Kinly contract not registered: ${KINLY_REL}/${fileKinlyRel}`);
    }
  }

  // Output
  if (warnings.length > 0) {
    console.log("Warnings:");
    for (const w of warnings) console.log(`  ⚠ ${w}`);
  }

  if (errors.length > 0) {
    console.log("Errors:");
    for (const e of errors) console.log(`  ✗ ${e}`);
    process.exit(1);
  }

  console.log(`✓ ${referencedKinly.length} Kinly contracts validated`);
}

main().catch((err) => {
  console.error("check_contracts failed:", err);
  process.exit(1);
});
