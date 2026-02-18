/**
 * Дополнительный конфиг ESLint для проектов на Next.js.
 * @see README.md для информации о подключении
 *
 * Требуемая зависимость (установите в проекте):
 *   yarn add -D @next/eslint-plugin-next
 *   npm i -D @next/eslint-plugin-next
 */
import nextPlugin from '@next/eslint-plugin-next';
import { configs } from 'eslint-config-airbnb-extended';

const nextConfig = [
  {
    plugins: {
      '@next/next': nextPlugin,
    },
  },
  ...configs.next.recommended,
];

export default nextConfig;
