# Common eslint/prettier config for frontend projects

## Usage

1. Install package `@evrone-erp/eslint-config` and **all** of its peer dependencies.
2. Create `eslintrc.js` in the root folder of your frontend project:

```javascript
module.exports = {
  extends: ["@evrone-erp/eslint-config"],
  parserOptions: {
    project: './tsconfig.json' // Your own ts config
  },
  rules: {}
};

```