const copy = require("rollup-plugin-copy");
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(
      copy({
        targets: [
          {
            src: "src/design-system/design-tokens/design-tokens.json",
            dest: "dist/design-system/design-tokens",
          },
          {
            src: "src/design-system/mui.d.ts",
            dest: "dist/design-system",
          },
        ],
      })
    );
    return config;
  },
};
