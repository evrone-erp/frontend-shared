const typescriptRules = {
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: false,
    },
  ],
  '@typescript-eslint/no-explicit-any': ['error'],
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: true,
      },
    },
    {
      selector: 'typeAlias',
      format: ['PascalCase'],
      custom: {
        regex: '^T[A-Z]',
        match: true,
      },
    },
  ],
  'import/extensions': 'off',
};

export default typescriptRules;
