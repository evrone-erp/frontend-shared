const baseRules = require('./base-rules');
const typescriptRules = require('./typescript-rules');

const baseExtends = [
  'airbnb',
  'airbnb/hooks',
  'prettier',
  'plugin:react-perf/recommended',
  'plugin:storybook/recommended',
];

module.exports = {
  extends: baseExtends,
  plugins: ['import', 'prettier', 'react-perf'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        ...baseExtends,
        'airbnb-typescript',
        'plugin:@next/next/recommended',
        'plugin:import/typescript',
        'prettier', // it's here to override previous formatting rules
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: `${process.cwd()}/tsconfig.json`,
      },
      rules: { ...baseRules, ...typescriptRules },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: process.cwd(),
      },
    },
  },
  rules: baseRules,
};
