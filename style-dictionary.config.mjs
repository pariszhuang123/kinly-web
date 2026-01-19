import StyleDictionary from "style-dictionary";

// --- helpers (web-only derivations) ---
function hexToRgb(hex) {
  const v = String(hex).replace("#", "").trim();
  if (v.length !== 6) throw new Error(`Expected 6-digit hex, got: ${hex}`);
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return { r, g, b };
}

function rgbaFromHex(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  const a = typeof alpha === "number" ? alpha : parseFloat(alpha);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function tokenValue(token) {
  return token.$value ?? token.value ?? token.original?.$value ?? token.original?.value;
}

function pathKey(pathArr) {
  return pathArr.join(".");
}

// Required token paths per contract
const REQUIRED_TOKENS = [
  "color.foundation.neutral.ink",
  "opacity.shadow-light",
  "opacity.shadow-dark",
  "opacity.scrim-light",
  "opacity.scrim-dark"
];

function validateRequiredTokens(byPath) {
  const missing = REQUIRED_TOKENS.filter(path => byPath.get(path) === undefined);
  if (missing.length > 0) {
    throw new Error(
      `Token build failed: missing required tokens:\n  - ${missing.join("\n  - ")}\n` +
      `These tokens are required by the Web Tokens Build & Delivery contract.`
    );
  }
}

// Custom format that outputs theme-aware CSS (+ derived web-only vars)
StyleDictionary.registerFormat({
  name: "css/themed-variables",
  format: ({ dictionary }) => {
    const lightTokens = [];
    const darkTokens = [];
    const sharedTokens = [];

    // Build a lookup so we can derive values from other tokens
    const byPath = new Map();

    dictionary.allTokens.forEach((token) => {
      const value = tokenValue(token);
      if (value === undefined) return;
      byPath.set(pathKey(token.path), value);
    });

    // Validate required tokens per contract
    validateRequiredTokens(byPath);

    // --- derive web-only rgba values (Option B per contract) ---
    const inkHex = byPath.get("color.foundation.neutral.ink");
    const shadowLightAlpha = byPath.get("opacity.shadow-light");
    const shadowDarkAlpha = byPath.get("opacity.shadow-dark");
    const scrimLightAlpha = byPath.get("opacity.scrim-light");
    const scrimDarkAlpha = byPath.get("opacity.scrim-dark");

    const shadowLight = rgbaFromHex(inkHex, shadowLightAlpha);
    const shadowDark = rgbaFromHex(inkHex, shadowDarkAlpha);
    const scrimLight = rgbaFromHex(inkHex, scrimLightAlpha);
    const scrimDark = rgbaFromHex(inkHex, scrimDarkAlpha);

    // Emit CSS vars
    dictionary.allTokens.forEach((token) => {
      const name = token.name;
      const value = tokenValue(token);

      if (value === undefined) return;

      if (token.path.includes("light")) {
        const cleanName = name
          .replace(/-light-|-light$/, "-")
          .replace(/--+/g, "-")
          .replace(/-$/, "");
        lightTokens.push(`  --${cleanName}: ${value};`);
      } else if (token.path.includes("dark")) {
        const cleanName = name
          .replace(/-dark-|-dark$/, "-")
          .replace(/--+/g, "-")
          .replace(/-$/, "");
        darkTokens.push(`  --${cleanName}: ${value};`);
      } else {
        sharedTokens.push(`  --${name}: ${value};`);
      }
    });

    // Append derived vars (contract-specified names)
    lightTokens.push(`  --k-web-shadow-color: ${shadowLight};`);
    lightTokens.push(`  --k-web-scrim-color: ${scrimLight};`);
    lightTokens.push(`  --k-web-focus-ring: var(--color-primary);`);
    darkTokens.push(`  --k-web-shadow-color: ${shadowDark};`);
    darkTokens.push(`  --k-web-scrim-color: ${scrimDark};`);
    darkTokens.push(`  --k-web-focus-ring: var(--color-primary);`);

    return `/**
 * Do not edit directly, this file was auto-generated.
 * Generated from contracts/design-system/tokens.json
 */

:root {
  /* Shared tokens */
${sharedTokens.join("\n")}

  /* Light mode (default) */
${lightTokens.join("\n")}
}

[data-theme="dark"] {
  /* Dark mode overrides */
${darkTokens.join("\n")}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Auto dark mode when no explicit theme set */
${darkTokens.join("\n")}
  }
}
`;
  }
});

export default {
  source: ["contracts/design-system/tokens.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "app/styles/generated/",
      files: [
        {
          destination: "tokens.css",
          format: "css/themed-variables"
        }
      ]
    }
  }
};
