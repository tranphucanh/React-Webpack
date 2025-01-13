const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const CompressionPlugin = require('compression-webpack-plugin')

/** @type {(env: any, argv: {mode: string}) => import('webpack').Configuration} **/

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve('public/index.html'),
			filename: './index.html',
			chunksSortMode: 'none',
			favicon: path.resolve('public/favicon.ico'),
		}),
		new CompressionPlugin({
			deleteOriginalAssets: false,
			algorithm: 'brotliCompress',
			test: /\.(js|css)$/,
		}),
		new Dotenv(),
	],
})
