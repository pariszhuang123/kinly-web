#!/usr/bin/env node
/**
 * Validates that all required primitives per Web Primitives v1 contract exist.
 */

import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PRIMITIVES_DIR = join(ROOT, "components", "primitives");

// Required primitives per web_primitives_v1.md contract
const REQUIRED_PRIMITIVES = [
  // Layout
  { name: "KinlyShell", dir: "shell" },
  { name: "KinlyStack", dir: "stack" },

  // Typography
  { name: "KinlyText", dir: "text" },
  { name: "KinlyHeading", dir: "heading" },

  // Actions & Navigation
  { name: "KinlyButton", dir: "button" },
  { name: "KinlyLink", dir: "link" },

  // Surfaces
  { name: "KinlyCard", dir: "card" },
  { name: "KinlyDivider", dir: "divider" },

  // Forms (optional for v1, but listed in contract)
  // { name: "KinlyField", dir: "field" },
  // { name: "KinlyInput", dir: "input" },
];

async function main() {
  const errors = [];
  const found = [];

  for (const primitive of REQUIRED_PRIMITIVES) {
    const componentPath = join(PRIMITIVES_DIR, primitive.dir, `${primitive.name}.tsx`);
    const cssPath = join(PRIMITIVES_DIR, primitive.dir, `${primitive.name}.module.css`);

    if (!existsSync(componentPath)) {
      errors.push(`Missing primitive component: ${primitive.name} (expected ${primitive.dir}/${primitive.name}.tsx)`);
    } else if (!existsSync(cssPath)) {
      errors.push(`Missing primitive styles: ${primitive.name} (expected ${primitive.dir}/${primitive.name}.module.css)`);
    } else {
      found.push(primitive.name);
    }
  }

  // Check barrel export exists
  const barrelPath = join(ROOT, "components", "index.ts");
  if (!existsSync(barrelPath)) {
    errors.push("Missing components/index.ts barrel export");
  }

  if (errors.length > 0) {
    console.log("Errors:");
    for (const e of errors) {
      console.log(`  ✗ ${e}`);
    }
    process.exit(1);
  }

  console.log(`✓ ${found.length} required primitives present`);
}

main().catch((err) => {
  console.error("check_primitives failed:", err);
  process.exit(1);
});
