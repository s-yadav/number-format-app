const packagebind = require('packagebind');

const babelConfig = {
  presets: ['react-app'],
  plugins: [
    [
      require.resolve('babel-plugin-named-asset-import'),
      {
        loaderMap: {
          svg: {
            ReactComponent:
              '@svgr/webpack?-svgo,+titleProp,+ref![path]',
          },
        },
      },
    ],
    ['module-resolver', {
      'alias': {
        'react-number-format': '../react-number-format/src/number_format.js',
      },
    }],
  ],
};

module.exports = packagebind(babelConfig);
