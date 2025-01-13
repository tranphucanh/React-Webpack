const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

/** @type {(env: any, argv: {mode: string}) => import('webpack').Configuration} **/

module.exports = merge(common, {
	output: {
		path: path.resolve(__dirname, './build'),
		filename: `[name].js`,
		chunkFilename: `[name].js`,
		publicPath: '/',
		crossOriginLoading: 'anonymous',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve('public/index.html'),
			filename: './index.html',
			chunksSortMode: 'none',
			favicon: path.resolve('public/favicon.ico'),
		}),
		new Dotenv(),
	],
})
