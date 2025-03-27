# Конфигурация eslint
Содержит настроенную конфигурацию `eslint` готовую для подключения к проекту 

## Использование

1. Установите пакет `yarn add @evrone-erp/eslint-config`.
2. Создайте файл `.eslintrc` на одном уровне вложенности с `package.json` файлом.
3. Используйте `extends` за основу и при необходимости добавьте/перезапишите значения необходимых свойств через `rules`
    ```javascript
    module.exports = {
      extends: ["@evrone-erp/eslint-config"],
      parserOptions: {
        project: './tsconfig.json' // кофигурация typescript в директории вашего проекта
      },
      rules: {
        "no-param-reassign": "off",
      }
    };
    ```
4. Для запуска можно использовать команду [`next lint`](https://nextjs.org/docs/basic-features/eslint) если вы используете `next.js`
или написать свою собственную:
    ```json
    "scripts": {
      "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'"
    }
    ```

[<img src="https://evrone.com/logo/evrone-sponsored-logo.png" width=231>](https://evrone.com/?utm_source=github&utm_medium=evrone-erp-eslint-config)
