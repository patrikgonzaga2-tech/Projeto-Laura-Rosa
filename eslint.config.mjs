// Fast lint tier. Everything here runs without type information, which is
// what keeps it quick enough for a pre-commit hook. The rules that need the
// type checker live in eslint.typed.config.mjs and run on their own script.
//
// Adaptado a este projeto (Next.js 16 + React 19 + TypeScript, sem src/):
//   - código do app em app/, components/, hooks/, lib/ e types/
//   - sem bloco import-x: o projeto não tem camadas formais
//   - sem quality/no-direct-data-access: não há cliente de banco no projeto
//   - sem bloco "off" de quality/no-direct-console: não há módulo de log
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

import quality from "./eslint-rules/index.cjs";

const appFiles = [
  "{app,components,hooks,lib,types}/**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}",
];

const testFiles = [
  "**/*{.,-}{test,spec}.{js,jsx,ts,tsx,mjs,cjs,mts,cts}",
  "**/{__tests__,__mocks__,fixtures,mocks}/**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}",
];

export default defineConfig([
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        // Arquivos .js/.jsx/.mjs também passam pelo parser do typescript-eslint
        // (vem de tseslint.configs.strict); isto garante que JSX neles não
        // vire erro de parsing falso.
        ecmaFeatures: { jsx: true },
      },
      // js.configs.recommended turns on no-undef. O app roda no navegador
      // (componentes React) e no Node (servidor do Next e arquivos de config).
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.strict,

  // Framework presets. Uncomment only what this project actually uses, and
  // add the matching import at the top of the file. Turning on a preset
  // wholesale is the opposite of what the rest of this config does -- prefer
  // a curated subset per plugin, added as its own files-scoped block below.
  //
  //   nextPlugin.configs["core-web-vitals"],
  //   reactPlugin.configs.flat["jsx-runtime"],
  //   reactHooks.configs.flat.recommended,

  {
    files: appFiles,
    plugins: { quality },
    rules: {
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-var": "error",
      "prefer-const": "error",
      // baseline 21/11/2026: 5 violações
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // The size and complexity budget is all "warn" on purpose. These
      // numbers are a conversation starter about factoring, not a gate --
      // promote one to "error" once the count for it reaches zero.
      complexity: ["warn", 12], // baseline 21/11/2026: 4 violações
      "max-depth": ["warn", 4],
      "max-statements": ["warn", 20],
      "max-params": ["warn", 4],
      // baseline 21/11/2026: 3 violações
      "max-lines-per-function": [
        "warn",
        { max: 150, skipBlankLines: true, skipComments: true },
      ],
      "max-nested-callbacks": ["warn", 3],
      "quality/max-lines": ["warn", { max: 350 }], // baseline 21/11/2026: 4 violações
      "quality/no-direct-console": [
        "error",
        { logger: "um logger do projeto" },
      ],
    },
  },
  {
    // The same file budget for test files, at "warn". Placed after the
    // "error" block for the ordering reason: for a file matched by both,
    // flat config applies the later block's rules last.
    files: testFiles,
    plugins: { quality },
    rules: {
      "quality/max-lines": ["warn", { max: 350, includeTests: true }],
    },
  },
  {
    files: testFiles,
    rules: {
      // These three fire heavily on describe/it nesting and on long arrange
      // sections without pointing at a real problem. complexity, max-depth
      // and max-params stay on for tests -- they were not part of the noise.
      "max-statements": "off",
      "max-lines-per-function": "off",
      "max-nested-callbacks": "off",
    },
  },
  {
    files: ["eslint-rules/**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { module: "readonly", require: "readonly" },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  globalIgnores([
    // Saída de build, dependências, arquivos gerados e pastas que não são do app.
    ".claude/**",
    ".next/**",
    "out/**",
    ".vercel/**",
    "node_modules/**",
    "dist/**",
    "build/**",
    "coverage/**",
    "**/*.tsbuildinfo",
    "next-env.d.ts",
  ]),
]);
