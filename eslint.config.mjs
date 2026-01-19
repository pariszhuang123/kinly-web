import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import next from "@next/eslint-plugin-next";

export default [
  // Ignore generated/build outputs
  {
    ignores: [".next/**", "node_modules/**", "out/**", "public/**", "app/styles/generated/**"],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript (syntax + basic rules; no type-aware rules to keep it simple)
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      // Optional: treat variables/args starting with "_" as intentionally unused
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],
    },
  },

  // React + hooks
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { react, "react-hooks": reactHooks },
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // React 17+/Next: no need to import React for JSX
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },

  // Next.js core-web-vitals rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "@next/next": next },
    rules: {
      ...next.configs["core-web-vitals"].rules,
    },
  },

  // Globals for browser/node
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  },
];
