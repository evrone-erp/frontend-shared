const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config) {
    config.plugins.push(
      copy({
        targets: [
          {
            src: 'src/design-system/design-tokens/design-tokens.json',
            dest: 'dist/design-system/design-tokens',
          },
          {
            src: 'src/assets/fonts/**/*',
            dest: 'dist/assets/fonts',
          },
        ],
        hook: 'writeBundle',
        verbose: true,
      }),
    );

    return config;
  },
};
