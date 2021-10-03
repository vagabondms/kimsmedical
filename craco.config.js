const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');

const modifyVars = {
  '@primary-color': 'green',
  '@layout-header-background': 'green',
};

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         javascriptEnabled: true,
    //       },
    //     },
    //   },
    // },
  ],
};
