const { CheckerPlugin } = require('awesome-typescript-loader');
const { optimize } = require('webpack');
const { join } = require('path');
let prodPlugins = [];
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push(
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin()
  );
}
module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  entry: {
    popup: join(__dirname, 'src/popup.ts'),
    options: join(__dirname, 'src/options.ts')
  },
  output: {
    path: join(__dirname, 'extension'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts?$/,
        use: 'awesome-typescript-loader?{configFileName: "tsconfig.json"}',
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    ...prodPlugins,
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};