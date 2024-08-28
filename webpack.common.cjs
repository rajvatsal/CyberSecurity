const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/main.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
    publicPath: '/',
		filename: "[name].bundle.js",
		clean: true,
		assetModuleFilename: "[name].asset.[ext]",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			inject: "body",
			title: "",
			filename: "index.html",
			scriptLoading: "defer",
			favicon: "./src/assets/images/logo.png",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|otf|ttf|eot)$/i,
				type: "asset/resource" /* This is called a MIME/media type/content type */,
			},
		],
	},
};
