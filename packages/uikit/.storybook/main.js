const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next",
    "@react-theming/storybook-addon",
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "design-system": path.resolve(__dirname, "../src/design-system"),
      components: path.resolve(__dirname, "../src/components"),
    }

    return config
  }
}
