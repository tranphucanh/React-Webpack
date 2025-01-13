const path = require('path')

/** @type {(env: any, argv: {mode: string}) => import('webpack').Configuration} **/

module.exports = {
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'static/js/[chunkhash:12].js',
		sourceMapFilename: 'static/js/[chunkhash:12].js.map',
		chunkFilename: 'static/js/[chunkhash:12].js',
		publicPath: '/',
		crossOriginLoading: 'anonymous',
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './public/assets'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.ts?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /\.module.(scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.module\.scss$/i,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								mode: 'local',
								localIdentName: 'vt-[local]-[hash:base64:5]',
							},
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: './assets/images/[name].[ext]',
				},
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './assets/svg/[name].[ext]',
						},
					},
				],
			},
			{
				type: 'javascript/auto',
				test: /\.json$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './assets/json/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './assets/fonts/[name].[ext]',
						},
					},
				],
			},
		],
	},
	stats: {
		warningsFilter: /sass-loader/,
	},
	devServer: {
		open: true,
		hot: true,
		historyApiFallback: true,
		port: 3000,

		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},
}
