const copy = require("rollup-plugin-copy");

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config) {
    config.plugins.push(
      copy({
        targets: [
          {
            src: "src/design-system/design-tokens/design-tokens.json",
            dest: "dist/design-system/design-tokens",
          },
        ],
      }),
    );

    return config;
  },
};
