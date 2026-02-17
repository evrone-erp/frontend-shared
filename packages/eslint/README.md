# Конфигурация ESLint

Гибкая конфигурация ESLint (flat config) для проектов на JS/TS и React.

- **Базовый конфиг** — правила для JavaScript, TypeScript и React (подключается всегда).
- **Next.js** — дополнительные правила для проектов на Next.js (опционально).
- **Storybook** — правила для файлов `*.stories.*` и `.storybook` (опционально).
- **FSD** — правила для структуры Feature-Sliced Design (опционально, только для приложений с такой структурой).

Зависимости для Next и Storybook не входят в пакет: их нужно ставить в проекте только если вы подключаете соответствующие конфиги.

---

## Установка

### 1. Базовый пакет

**Yarn:**
```bash
yarn add -D @evrone-erp/eslint-config
```

**npm:**
```bash
npm install -D @evrone-erp/eslint-config
```

### 2. Дополнительные зависимости (по необходимости)

Подключайте только те конфиги, которые используете в проекте, и устанавливайте соответствующие плагины.

| Конфиг      | Когда нужен              | Yarn | npm |
|------------|---------------------------|------|-----|
| **Next.js**   | Проект на Next.js         | `yarn add -D @next/eslint-plugin-next` | `npm i -D @next/eslint-plugin-next` |
| **Storybook** | В проекте есть Storybook | `yarn add -D eslint-plugin-storybook`  | `npm i -D eslint-plugin-storybook`  |
| **FSD**       | Приложение со структурой FSD (1-app, 2-processes, …) | не требуется | не требуется |

**Пример: проект на Next.js со Storybook и FSD**

Yarn:
```bash
yarn add -D @evrone-erp/eslint-config @next/eslint-plugin-next eslint-plugin-storybook
```

npm:
```bash
npm install -D @evrone-erp/eslint-config @next/eslint-plugin-next eslint-plugin-storybook
```

**Пример: только React/TS без Next и Storybook**

Достаточно одного пакета:
```bash
yarn add -D @evrone-erp/eslint-config
# или
npm install -D @evrone-erp/eslint-config
```

---

## Настройка

В корне проекта создайте `eslint.config.js` и соберите конфиг из нужных частей.

### Вариант 1: только базовый конфиг (JS/TS/React)

Подходит для библиотек и проектов без Next.js и Storybook.

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

### Вариант 2: базовый + Next.js

Для проектов на Next.js обязательно установите `@next/eslint-plugin-next` (см. таблицу выше).

```javascript
import baseConfig from '@evrone-erp/eslint-config';
import nextConfig from '@evrone-erp/eslint-config/next';

export default [
  ...baseConfig,
  ...nextConfig,
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

### Вариант 3: базовый + Storybook

Для проектов со Storybook установите `eslint-plugin-storybook`.

```javascript
import baseConfig from '@evrone-erp/eslint-config';
import storybookConfig from '@evrone-erp/eslint-config/storybook';

export default [
  ...baseConfig,
  ...storybookConfig,
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

### Вариант 4: базовый + FSD (Feature-Sliced Design)

Для приложений со структурой [Feature-Sliced Design](https://feature-sliced.design/) (слои 1-app, 2-processes, 3-pages и т.д.). В библиотеках (uikit, bar-chart и т.п.) подключать не нужно.

```javascript
import baseConfig from '@evrone-erp/eslint-config';
import fsdConfig from '@evrone-erp/eslint-config/fsd';

export default [
  ...baseConfig,
  ...fsdConfig,
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

### Вариант 5: всё вместе (Next + Storybook + FSD)

```javascript
import baseConfig from '@evrone-erp/eslint-config';
import nextConfig from '@evrone-erp/eslint-config/next';
import storybookConfig from '@evrone-erp/eslint-config/storybook';
import fsdConfig from '@evrone-erp/eslint-config/fsd';

export default [
  ...baseConfig,
  ...nextConfig,
  ...storybookConfig,
  ...fsdConfig,
  {
    ignores: ['mockServiceWorker.js', 'dist/**', '*.config.js'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      'no-param-reassign': 'off',
      // свои правила...
    },
  },
];
```

Установка зависимостей для этого варианта:

**Yarn:**
```bash
yarn add -D @evrone-erp/eslint-config @next/eslint-plugin-next eslint-plugin-storybook
```

**npm:**
```bash
npm install -D @evrone-erp/eslint-config @next/eslint-plugin-next eslint-plugin-storybook
```

---

## Запуск линтера

В `package.json`:

```json
"scripts": {
  "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\""
}
```

В проектах на Next.js можно использовать встроенный линтер:

```bash
next lint
```

---

## Подробнее

- Миграция с `.eslintrc`, игнорирование файлов, соответствие опций — в [FLAT_CONFIG_MIGRATION.md](./FLAT_CONFIG_MIGRATION.md).

[<img src="https://evrone.com/logo/evrone-sponsored-logo.png" width=231>](https://evrone.com/?utm_source=github&utm_medium=evrone-erp-eslint-config)
