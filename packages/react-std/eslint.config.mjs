import sharedConfig from '@evrone-erp/eslint-config';
import tseslint from 'typescript-eslint';

const config = [
  ...sharedConfig,
  {
    ignores: ['dist/**', '*.config.mjs'],
  },
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];

export default config;
