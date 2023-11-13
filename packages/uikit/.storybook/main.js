import { dirname, join } from "path";
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],

  typescript: {
    check: true, // type-check stories during Storybook build
  },

  "framework": {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },

  staticDirs: [{ from: "../src/assets/fonts", to: "/fonts" }],

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "design-system": path.resolve(__dirname, "../src/design-system"),
      components: path.resolve(__dirname, "../src/components"),
    };

    return config;
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
