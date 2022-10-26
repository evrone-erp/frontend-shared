const copy = require('rollup-plugin-copy');
const ttypescript = require('ttypescript');
const typescript = require('rollup-plugin-typescript2');
const path = require('path');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    // eslint-disable-next-line no-use-before-define
    addSettingsToConvertTsAliasPathsToRelativePathsAfterBuild(config, options);
    config.plugins.push(
      copy({
        targets: [
          {
            src: path.resolve(__dirname, '/src/design-system/design-tokens/design-tokens.json'),
            dest: path.resolve(__dirname, '/dist/design-system/design-tokens'),
          },
          {
            src: path.resolve(__dirname, '/src/assets/fonts/**/*'),
            dest: path.resolve(__dirname, '/dist/assets/fonts'),
          },
        ],
      }),
    );

    return config;
  },
};

// helper to convert alias imports to relative imports (why it needs: aliases aren't recognized after install lib in an external app)
// comes with @zerollup/ts-transform-paths in tsconfig.json
// Solution was got from this PR: https://github.com/jaredpalmer/tsdx/issues/91#issuecomment-770021810
const addSettingsToConvertTsAliasPathsToRelativePathsAfterBuild = (config, options) => {
  const rpt2Plugin = config.plugins.find((p) => p.name === 'rpt2');
  const rpt2PluginIndex = config.plugins.indexOf(rpt2Plugin);

  const tsconfigPath = options.tsconfig || 'tsconfig.json';

  // borrowed from https://github.com/facebook/create-react-app/pull/7248
  const tsconfigJSON = ttypescript.readConfigFile(tsconfigPath, ttypescript.sys.readFile).config;

  const tsCompilerOptions = ttypescript.parseJsonConfigFileContent(tsconfigJSON, ttypescript.sys, './').options;

  const customRPT2Plugin = typescript({
    typescript: ttypescript,
    tsconfig: options.tsconfig,
    tsconfigDefaults: {
      exclude: [
        // all TS test files, regardless whether co-located or in test/ etc
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.spec.tsx',
        '**/*.test.tsx',
        // TS defaults below
        'node_modules',
        'bower_components',
        'jspm_packages',
        'dist',
      ],
      compilerOptions: {
        sourceMap: true,
        declaration: true,
        jsx: 'react',
      },
    },
    tsconfigOverride: {
      compilerOptions: {
        // TS -> esnext, then leave the rest to babel-preset-env
        target: 'esnext',
        // don't output declarations more than once
        ...(!options.writeMeta ? { declaration: false, declarationMap: false } : {}),
      },
    },
    check: !options.transpileOnly && options.writeMeta,
    useTsconfigDeclarationDir: Boolean(tsCompilerOptions && tsCompilerOptions.declarationDir),
  });

  config.plugins.splice(rpt2PluginIndex, 1, customRPT2Plugin);
};
