const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const BUILD_FOLDER = 'dist'

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, BUILD_FOLDER),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'public/favicon.ico'),
					to: path.resolve(__dirname, BUILD_FOLDER),
				},
			],
		}),
	],
}
