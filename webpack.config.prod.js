// exporting things in a node.js environment:
//const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin")
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js", // bundle.[contenthash].js
    path: path.resolve(__dirname, "dist"),
  },
  //   devServer: {
  //     contentBase: path.resolve(__dirname, "dist"),
  //     publicPath: "/dist", //should provide the path of the served js , img , etc...
  //   },

  // tell webpack there will be generated source maps:
  // => extracts and bundles it up correctly
  devtool: "none",
  // tell webpack how to work with the file:
  module: {
    rules: [
      // js-object:
      {
        test: /\.ts$/,
        // specify the loader webpack should use:
        // every ts file should be handled by the ts-loader
        // ts-loader already takes tsconfig.json into account -> no further declaration needed
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // which file extensions should webpack add to the imports:
  // default: .js
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
      new CleanPlugin.CleanWebpackPlugin()
  ],
};

// IMPORTANT!!!
// "sourceMap": true, !!!
// helps debugging the code and stuff
