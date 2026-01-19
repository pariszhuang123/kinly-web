#!/usr/bin/env node
/**
 * Validates that all contracts referenced in the registry exist
 * and that all contract files are registered.
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readdir } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CONTRACTS_DIR = join(ROOT, "contracts");
const REGISTRY_PATH = join(CONTRACTS_DIR, "contracts_registry.md");

function extractReferencedContracts(registryContent) {
  // Match contract file references in tables: | ... | `path/file.md` | Active/Deprecated |
  // This ensures we only pick up actual registry entries, not examples in text
  const tablePattern = /\|\s*`([a-z0-9_\-\/]+\.md)`\s*\|\s*(Active|Deprecated)/gi;
  const matches = [...registryContent.matchAll(tablePattern)];
  return matches.map((m) => m[1]);
}

async function findContractFiles() {
  const files = [];

  async function walk(dir, prefix = "") {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const relPath = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        await walk(join(dir, entry.name), relPath);
      } else if (
        entry.name.endsWith(".md") &&
        entry.name !== "contracts_registry.md" &&
        entry.name !== "README.md" &&
        !prefix.startsWith("docs") // Exclude docs folder (not contracts)
      ) {
        files.push(relPath);
      }
    }
  }

  await walk(CONTRACTS_DIR);
  return files;
}

async function main() {
  const errors = [];

  // Check registry exists
  if (!existsSync(REGISTRY_PATH)) {
    console.error("✗ contracts_registry.md not found");
    process.exit(1);
  }

  const registryContent = readFileSync(REGISTRY_PATH, "utf-8");
  const referenced = extractReferencedContracts(registryContent);
  const existing = await findContractFiles();

  // Check all referenced contracts exist
  for (const ref of referenced) {
    const fullPath = join(CONTRACTS_DIR, ref);
    if (!existsSync(fullPath)) {
      errors.push(`Referenced contract not found: ${ref}`);
    }
  }

  // Check all existing contracts are registered (warning only)
  const warnings = [];
  for (const file of existing) {
    const normalized = file.replace(/\\/g, "/");
    if (!referenced.some((r) => r === normalized || r === file)) {
      warnings.push(`Contract not registered: ${file}`);
    }
  }

  // Output
  if (warnings.length > 0) {
    console.log("Warnings:");
    for (const w of warnings) {
      console.log(`  ⚠ ${w}`);
    }
  }

  if (errors.length > 0) {
    console.log("Errors:");
    for (const e of errors) {
      console.log(`  ✗ ${e}`);
    }
    process.exit(1);
  }

  console.log(`✓ ${referenced.length} contracts validated`);
}

main().catch((err) => {
  console.error("check_contracts failed:", err);
  process.exit(1);
});
