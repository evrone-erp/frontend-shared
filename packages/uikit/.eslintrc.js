module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['@evrone-erp/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@next/next/no-html-link-for-pages': ['off'],
    // TODO: use the version of this rule from @evrone-erp/eslint-config package
    '@typescript-eslint/naming-convention': ['off'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '+(constants|design-system)/**',
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
};
