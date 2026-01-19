#!/usr/bin/env node
/**
 * Unified guardrail check runner for kinly-web.
 * Similar pattern to kinly_app's tool/check_all.dart
 *
 * Usage: node scripts/check_all.mjs
 * Or via npm: npm run check:all
 */

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const isCI = ["true", "1", "yes"].includes(
  (process.env.CI ?? "").toLowerCase().trim()
);

/**
 * @typedef {Object} Check
 * @property {string} name
 * @property {string} command
 * @property {string[]} args
 * @property {boolean} [skipInCI]
 * @property {boolean} [skipLocally]
 */

/** @type {Check[]} */
const checks = [
  // --- Core quality gates ---
  { name: "tokens:build", command: "npm", args: ["run", "tokens:build"] },
  { name: "typecheck", command: "npm", args: ["run", "typecheck"] },
  { name: "lint", command: "npm", args: ["run", "lint"] },

  // --- Contract checks ---
  {
    name: "check:contracts",
    command: "node",
    args: ["scripts/check_contracts.mjs"],
  },
  {
    name: "check:primitives",
    command: "node",
    args: ["scripts/check_primitives.mjs"],
  },

  // --- Build (runs after other checks pass) ---
  // Note: 'build' includes tokens:build, so we run it after to validate full pipeline
  // Skipped here since it's slow; CI runs it separately
  // { name: "build", command: "npm", args: ["run", "build"], skipLocally: true },
];

/**
 * @typedef {Object} CheckResult
 * @property {string} name
 * @property {number} exitCode
 * @property {string} stdout
 * @property {string} stderr
 * @property {number} durationMs
 */

/**
 * @param {Check} check
 * @returns {Promise<CheckResult>}
 */
async function runCheck(check) {
  const start = Date.now();

  return new Promise((resolve) => {
    const proc = spawn(check.command, check.args, {
      cwd: ROOT,
      shell: true,
      env: { ...process.env, FORCE_COLOR: "1" },
    });

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    proc.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    proc.on("close", (code) => {
      resolve({
        name: check.name,
        exitCode: code ?? 1,
        stdout,
        stderr,
        durationMs: Date.now() - start,
      });
    });

    proc.on("error", (err) => {
      resolve({
        name: check.name,
        exitCode: 1,
        stdout,
        stderr: stderr + "\n" + err.message,
        durationMs: Date.now() - start,
      });
    });
  });
}

async function main() {
  const startTime = Date.now();

  // Filter checks based on environment
  const activeChecks = checks.filter((check) => {
    if (isCI && check.skipInCI) return false;
    if (!isCI && check.skipLocally) return false;
    return true;
  });

  console.log(`Running ${activeChecks.length} checks${isCI ? " (CI mode)" : ""}...\n`);

  // Run all checks in parallel
  const results = await Promise.all(activeChecks.map(runCheck));

  const passed = results.filter((r) => r.exitCode === 0);
  const failed = results.filter((r) => r.exitCode !== 0);

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("RESULTS");
  console.log("=".repeat(60));

  for (const result of results) {
    const status = result.exitCode === 0 ? "✓" : "✗";
    const time = `${(result.durationMs / 1000).toFixed(1)}s`;
    console.log(`${status} ${result.name.padEnd(25)} ${time}`);
  }

  console.log("=".repeat(60));
  console.log(
    `${passed.length} passed, ${failed.length} failed (${((Date.now() - startTime) / 1000).toFixed(1)}s total)`
  );

  if (failed.length > 0) {
    console.log("\n" + "=".repeat(60));
    console.log("FAILURE OUTPUT");
    console.log("=".repeat(60));

    for (const result of failed) {
      console.log(`\n== ${result.name} (exit ${result.exitCode}) ==`);
      if (result.stdout.trim()) {
        console.log(result.stdout.trim());
      }
      if (result.stderr.trim()) {
        console.log(result.stderr.trim());
      }
    }

    process.exit(1);
  }

  console.log("\nAll guardrail checks passed ✓");
}

main().catch((err) => {
  console.error("check_all failed:", err);
  process.exit(1);
});
