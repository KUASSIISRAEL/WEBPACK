// https://webpack.js.org/loaders/postcss-loader/#root
// https://stackoverflow.com/questions/71039049/use-tailwind-with-webpack-5
const isProductionMode = process.env.NODE_ENV === "production";

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


var config = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, "src"),
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
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
    splitChunks: {
      chunks: 'all',
    },
    emitOnErrors: false,
  },
  performance: {
    hints: false,
    maxAssetSize: 5120000,
    maxEntrypointSize: 5120000,
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
      Source: path.resolve(__dirname, 'src/'),
      Utilities: path.resolve(__dirname, 'src/utilities/'),
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