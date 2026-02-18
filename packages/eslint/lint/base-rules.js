const baseRules = {
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      printWidth: 120,
      trailingComma: 'all',
    },
    {
      usePrettierrc: false,
    },
  ],
  'no-console': ['error', { allow: ['warn', 'error'] }],

  // To enable support of Next.Link passHref
  'jsx-a11y/anchor-is-valid': 'off',
  // We want to use assert: either instead of both https://github.com/airbnb/javascript/pull/1951
  'jsx-a11y/label-has-associated-control': [
    'error',
    {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'either',
      depth: 25,
    },
  ],
  'react/jsx-props-no-spreading': 'off',
  'react/function-component-definition': 'off',
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  'react/no-array-index-key': 'error',
  'react-perf/jsx-no-new-array-as-prop': 'off',
  'react-perf/jsx-no-new-object-as-prop': 'off',
  'react-perf/jsx-no-new-function-as-prop': 'off',

  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/no-anonymous-default-export': 'error',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'import/prefer-default-export': 'off',
  'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never', js: 'never', jsx: 'never' }],

  'no-param-reassign': 'off',
  'react/no-danger': 'off',
};

export default baseRules;
