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
    // TODO: use the version of this rule from @evrone-erp/eslint-config package
    '@typescript-eslint/naming-convention': ['off'],
    '@next/next/no-html-link-for-pages': ['off'],
  },
};
