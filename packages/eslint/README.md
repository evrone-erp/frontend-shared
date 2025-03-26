# Common eslint config for frontend projects

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

3. Once ready you may use built in script `next lint` (https://nextjs.org/docs/basic-features/eslint) for Next.js or write your own script:
```json
"scripts": {
  "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'"
}
```

[<img src="https://evrone.com/logo/evrone-sponsored-logo.png" width=231>](https://evrone.com/?utm_source=github&utm_medium=evrone-erp-eslint-config)
