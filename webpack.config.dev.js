const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const path = require('path')

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		port: 3000,
		hot: true,
		open: true,
	},
})
