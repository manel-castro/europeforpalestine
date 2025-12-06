const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
//const webpackBundleAnalyzer = require("webpack-bundle-analyzer");

process.env.NODE_ENV = "production"; //this is important for babel to know that we are using produciton mode, it also allows us to conditionally render dependencies by creating clones of files and exporting them.

module.exports = {
  mode: "production",
  target: "web",
  entry: {
    import: "./src/index.tsx",
    // import: "./src/_AppStore.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
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
    alias: {
      components: path.resolve(__dirname, "src/components"),
      "@components": path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
      "@utils": path.resolve(__dirname, "src/utils"),
      media: path.resolve(__dirname, "src/media"),
      "@media": path.resolve(__dirname, "src/media"),
      ui: path.resolve(__dirname, "src/components/ui"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      src: path.resolve(__dirname, "src"),
      "@src": path.resolve(__dirname, "src"),
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new ESLintPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),

    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/media/favicon2.png",
      templateParameters: {
        foo: "<script>window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}</script>",
      },

      minify: {
        // see https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"], //it is easier to put eslint into webpack, so it watches filechanges.
      },
      {
        test: /\.(css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",

          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["cssnano"],
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|jpe?g|png|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "imgs/",
            },
          },
        ],
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
