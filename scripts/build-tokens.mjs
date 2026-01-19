// scripts/build-tokens.mjs
import { execSync } from "node:child_process";

execSync("npx style-dictionary build", { stdio: "inherit" });
