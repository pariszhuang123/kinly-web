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

  // Web Primitives Contract Enforcement (app/ only)
  // Forbid raw elements that should use primitives
  {
    files: ["app/**/*.{jsx,tsx}"],
    plugins: { react },
    rules: {
      "react/forbid-elements": [
        "error",
        {
          forbid: [
            { element: "button", message: "Use <KinlyButton> instead" },
            { element: "p", message: "Use <KinlyText> instead" },
            { element: "h1", message: "Use <KinlyHeading level={1}> instead" },
            { element: "h2", message: "Use <KinlyHeading level={2}> instead" },
            { element: "h3", message: "Use <KinlyHeading level={3}> instead" },
            { element: "h4", message: "Use <KinlyHeading> instead" },
            { element: "h5", message: "Use <KinlyHeading> instead" },
            { element: "h6", message: "Use <KinlyHeading> instead" },
            { element: "input", message: "Use <KinlyInput> instead" },
          ],
        },
      ],
    },
  },

  // Prevent deep imports into primitives (use components/index.ts barrel)
  {
    files: ["app/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/components/primitives/**"],
              message: "Import from '@/components' or '../../components' barrel instead.",
            },
          ],
        },
      ],
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
