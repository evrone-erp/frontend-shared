import sharedConfig from '@evrone-erp/eslint-config';
import storybookConfig from '@evrone-erp/eslint-config/storybook';
import nextConfig from '@evrone-erp/eslint-config/next';

const config = [
  ...nextConfig,
  ...sharedConfig,
  ...storybookConfig,
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js'],
  },
  {
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroupsExcludedImportTypes: [],
          pathGroups: [
            {
              pattern: '{constants,design-system}',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '{constants,design-system}/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '{components}',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'components/**',
              group: 'internal',
              position: 'after',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parserOptions: { project: './tsconfig.json' },
    },
  },
];

export default config;
