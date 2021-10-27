const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    mode: 'development',
    entry: ['./src/app.js'],
    target: ['web', 'es5'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.DefinePlugin({
          'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
          'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
          'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
          'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
          'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
          'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
          'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
          'process.env.FIREBASE_MESUREMENT_ID': JSON.stringify(process.env.FIREBASE_MESUREMENT_ID)
        })
    ],
    devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
    devServer: {
      static:
      {
        directory: path.join(__dirname, 'public'),
      },
        historyApiFallback: true
    }
  };
};