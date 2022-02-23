const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./index.html",
 filename: "./index.html"
});module.exports = {mode: 'development',
  module: {
    rules: [
  {
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   }
 },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i, 
    use: {
      loader: "url-loader?name=app/images/[name].[ext]"
    }
  }
]},
 plugins: [htmlPlugin]
};