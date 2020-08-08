const withSass = require('@zeit/next-sass');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');
const env = process.env.NODE_ENV || 'development'
module.exports = withSass({
  webpack: config => {
    config.output.publicPath = '/cinematics'
    config.module.rules.push(
      {
        test: /\.js(?:|x)$/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        exclude: path.join(__dirname, './node_modules/'),
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        loaders: [
          {
            loader: 'svg-sprite-loader'
          }
        ]
      },
      {
        test: /\.(jpe(?:|g)|png|gif)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: path.resolve(__dirname, 'dist'),
              publicPath: './dist/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: [0.65, 0.90]
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: [0.75]
              }
            }
          }
        ]
      }
    );
    return config;
  },
  exportPathMap: function () {
    return {
      '/': { page: '/home' },
      '/home': { page: '/home' }
    }
  },
  assetPrefix: env === 'production' ? '/cinematics/' : '',
});
