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
  ],
};

module.exports = babelConfig;
