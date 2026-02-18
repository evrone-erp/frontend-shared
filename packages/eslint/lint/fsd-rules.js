import { genRestrictedPaths } from './helpers.js';

/**
 * Правила для проектов со структурой Feature-Sliced Design (https://feature-sliced.design/).
 */
const fsdRules = {
  'import/no-restricted-paths': [
    'error',
    {
      zones: [
        ...genRestrictedPaths([
          './src/1-app',
          './src/2-processes',
          './src/3-pages',
          './src/4-widgets',
          './src/5-features',
          './src/6-entities',
          './src/7-shared',
        ]),
      ],
    },
  ],
  'no-restricted-syntax': [
    'error',
    {
      selector:
        'ImportDeclaration[source.value=/(1-app|2-processes|3-pages|4-widgets|5-features|6-entities|7-shared)/]',
      message: 'Layer access only by alias',
    },
  ],
  'no-restricted-imports': ['error', { patterns: ['../*'] }],
};

export default fsdRules;
