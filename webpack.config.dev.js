const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  target: "web",
  devtool: "eval-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    // code-splitting: https://reactjs.org/docs/code-splitting.html
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: "[name].bundle.js",
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: "[name].bundle.js",
    // `path` is the folder where Webpack will place your bundles
    assetModuleFilename: "assets/[name][ext]",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    // saved for interesting posibilities
    // new webpack.DefinePlugin({
    //     "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   minChunks: Infinity,
    // }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/media/favicon2.png",
      templateParameters: {
        foo: "",
      },
    }),
  ],
  // experiments: {
  //   asset: true,
  // },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|jpg|jpeg|png|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
};
