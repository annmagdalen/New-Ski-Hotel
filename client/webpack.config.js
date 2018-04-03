const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-3'],
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['eslint-loader'],
			},
		],
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html',
		filename: 'index.html',
		inject: 'body',
	})],
	devServer: {
		historyApiFallback: true,
	},
	devtool: 'source-map',
};
