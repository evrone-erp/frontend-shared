module.exports = {
  // ..
  plugins: [
    [
      // npm i -D babel-plugin-module-resolver
      "module-resolver",
      {
        root: "./",
        alias: {
          "design-system": "./src/design-system",
          components: "./src/components",
        },
      },
    ],
  ],
};
