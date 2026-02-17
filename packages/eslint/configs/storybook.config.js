/**
 * Дополнительный конфиг ESLint для проектов со Storybook.
 * @see README.md для информации о подключении
 *
 * Требуемая зависимость (установите в проекте):
 *   yarn add -D eslint-plugin-storybook
 *   npm i -D eslint-plugin-storybook
 */
import storybookPlugin from 'eslint-plugin-storybook';

const storybookConfig = [
  {
    plugins: { storybook: storybookPlugin },
    rules: {
      'import/no-anonymous-default-export': 'off',
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'warn',
      'storybook/no-redundant-story-name': 'warn',
      'storybook/prefer-pascal-case': 'warn',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',
    },
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
  },
  {
    plugins: { storybook: storybookPlugin },
    rules: {
      'storybook/no-uninstalled-addons': 'error',
    },
    files: ['.storybook/main.@(js|cjs|mjs|ts)'],
  },
];

export default storybookConfig;
