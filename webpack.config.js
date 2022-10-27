const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


var config = {
  watch: true,
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "bundle.css",
        },
        use: ["sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    followSymlinks: true,
    ignored: '**/node_modules',
  },
  optimization: {
    chunkIds: false,
    removeEmptyChunks: false,
    mergeDuplicateChunks: false,
    emitOnErrors: false,
  },
  performance: {
    hints: 'error',
    maxAssetSize: 100000,
    maxEntrypointSize: 400000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
    },
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }
  if (argv.mode === 'production') {
    config.devtool = 'eval';
  }
  return config;
};