# Пример миграции на flat config (eslint.config.js)

В корне **вашего проекта** (где лежит `package.json`) создайте файл `eslint.config.js` и удалите `.eslintrc` / `.eslintrc.json`.

Подробная установка пакета и зависимостей для разных вариантов (только базовый конфиг, + Next.js, + Storybook, + FSD) описана в [README.md](./README.md). Ниже — структура конфига и типичные сценарии.

---

## Установка пакета и зависимостей

**Базовый конфиг (JS/TS/React):**
```bash
# Yarn
yarn add -D @evrone-erp/eslint-config

# npm
npm install -D @evrone-erp/eslint-config
```

**С Next.js** — дополнительно установите плагин Next в проекте:
```bash
# Yarn
yarn add -D @evrone-erp/eslint-config @next/eslint-plugin-next

# npm
npm install -D @evrone-erp/eslint-config @next/eslint-plugin-next
```

**Со Storybook** — дополнительно установите плагин Storybook:
```bash
# Yarn
yarn add -D @evrone-erp/eslint-config eslint-plugin-storybook

# npm
npm install -D @evrone-erp/eslint-config eslint-plugin-storybook
```

**С FSD** — дополнительных пакетов не нужно, подключается только конфиг `@evrone-erp/eslint-config/fsd` в `eslint.config.js`.

---

## eslint.config.js

Конфиг собирается из частей: базовый конфиг + при необходимости next, storybook, fsd.

**Приложение с Next.js, Storybook и FSD:**

```javascript
import baseConfig from '@evrone-erp/eslint-config';
import nextConfig from '@evrone-erp/eslint-config/next';
import storybookConfig from '@evrone-erp/eslint-config/storybook';
import fsdConfig from '@evrone-erp/eslint-config/fsd';

export default [
  ...nextConfig, // до baseConfig чтобы корректно отработали правила для ts файлов
  ...baseConfig,
  ...storybookConfig,
  ...fsdConfig,
  {
    ignores: ['mockServiceWorker.js', '*.config.js'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'import/unused-modules': ['error', { ... }],
      'no-param-reassign': 'off',
      'react/no-danger': 'off',
    },
  },
];
```

**Библиотека (без Next, Storybook и FSD):**

```javascript
import baseConfig from '@evrone-erp/eslint-config';

export default [
  ...baseConfig,
  {
    ignores: ['dist/**', '*.config.js'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      // свои правила...
    },
  },
];
```

---

## Соответствие старому .eslintrc

| Было в .eslintrc              | В flat config |
|------------------------------|---------------|
| `"extends": ["@evrone-erp/eslint-config"]` | `...baseConfig` (+ при необходимости `...nextConfig`, `...storybookConfig`, `...fsdConfig`) |
| `ignorePatterns`             | объект с `ignores` |
| `parserOptions.project`      | `languageOptions.parserOptions.project` в блоке с `files: ['**/*.ts', '**/*.tsx']` |
| `rules`                      | объект `rules` в одном из конфигов |

- Игнорируемые файлы задаются через `ignores` (в flat config нет `ignorePatterns`).
- `parserOptions` задаётся в объекте с `files`, чтобы применяться только к TypeScript, как и раньше.
- Правила переопределяют/дополняют базовый конфиг пакета.

---

## Игнорирование файлов

В flat config файл **`.eslintignore` (deprecated)** не используется. Игноры задаются только через свойство `ignores` в `eslint.config.js`:

```javascript
export default [
  ...baseConfig,
  // ... nextConfig, storybookConfig, fsdConfig при необходимости
  {
    ignores: [
      'mockServiceWorker.js',
      '*.config.js',
      'dist/**',
      'node_modules/**',
      '**/__generated__/**',
    ],
  },
  // ... остальные блоки
];
```

Паттерны те же, что в `.gitignore`: `*` — один сегмент пути, `**` — любое количество сегментов. Файлы, попавшие под `ignores`, не линтируются.

При миграции с `.eslintrc`: перенесите содержимое `.eslintignore` (или `ignorePatterns` из конфига) в такой блок с `ignores` и удалите файл `.eslintignore`.

---

## Подключение правил FSD (Feature-Sliced Design)

Правила для структуры [Feature-Sliced Design](https://feature-sliced.design/) вынесены в отдельный конфиг. **Подключайте его только в приложениях** с такой структурой (слои 1-app, 2-processes, 3-pages и т.д.).

### В приложении с FSD

Импортируйте базовый конфиг и конфиг FSD, добавьте FSD в массив **после** базового конфига:

```javascript
import baseConfig from '@evrone-erp/eslint-config';
import fsdConfig from '@evrone-erp/eslint-config/fsd';

export default [
  ...baseConfig,
  ...fsdConfig,
  {
    ignores: ['mockServiceWorker.js', '*.config.js'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      // ваши правила...
    },
  },
];
```

### В библиотеке (без FSD)

Подключайте только базовый конфиг — FSD не добавляйте:

```javascript
import baseConfig from '@evrone-erp/eslint-config';

export default baseConfig;
```
