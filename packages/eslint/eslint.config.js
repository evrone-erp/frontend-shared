import stylistic from '@stylistic/eslint-plugin';
import { configs } from 'eslint-config-airbnb-extended';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPerf from 'eslint-plugin-react-perf';
import tseslint from 'typescript-eslint';
import baseRules from './lint/base-rules.js';
import typescriptRules from './lint/typescript-rules.js';

const config = [
  {
    plugins: {
      '@stylistic': stylistic,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
      prettier,
      'react-perf': reactPerf,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      'react-perf': reactPerf,
    },
    rules: reactPerf.configs.recommended.rules,
  },
  eslintConfigPrettier,
  {
    rules: {
      ...baseRules,
    },
  },
  ...configs.react.typescript,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      ...baseRules,
      ...typescriptRules,
    },
  },
  // Node ESM требует .js в относительных импортах
  {
    files: ['configs/**', 'lint/**', 'index.js', 'eslint.config.js'],
    rules: {
      'import/extensions': ['error', 'ignorePackages', { js: 'always', jsx: 'never', ts: 'never', tsx: 'never' }],
    },
  },
];

export default config;
