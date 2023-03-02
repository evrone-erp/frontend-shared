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
  },
};
