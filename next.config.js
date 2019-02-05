const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const withSourceMaps = require('@zeit/next-source-maps');
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = withCSS(
  withSass({
    webpack(config, { dev }) {
      if (config.mode === 'production') {
        if (Array.isArray(config.optimization.minimizer)) {
          config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        }
        config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/
          }
        ]
      }))
        
      }
      return config;
    }
  })
);

// // const optimizedImages = require('next-optimized-images');
// const withSass = require('@zeit/next-sass');
// const withPlugins = require('next-compose-plugins');
// const webpack = require('webpack');

// const sassConfig = {
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[name]___[hash:base64:5]'
//   }
// };

// const optimizedImagesConfig = {
//   inlineImageLimit: 8192,
//   imagesFolder: 'images',
//   imagesName: '[name]-[hash].[ext]',
//   optimizeImagesInDev: false,
//   mozjpeg: {
//     quality: 80
//   },
//   optipng: {
//     optimizationLevel: 3
//   },
//   pngquant: false,
//   gifsicle: {
//     interlaced: true,
//     optimizationLevel: 3
//   },
//   svgo: {
//     // enable/disable svgo plugins here
//   },
//   webp: {
//     preset: 'default',
//     quality: 75
//   }
// };

// const nextConfiguration = {
//   webpack: config => {
//     config.plugins.push(
//       new webpack.DefinePlugin({
//         PC: JSON.stringify('pc')
//       })
//     );
//     return config;
//   }
// };

// module.exports = withPlugins([[withSass, sassConfig]], nextConfiguration);
