const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/",
    hashFunction: "xxhash64",
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
