const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
// const DefinePlugin = require('webpack/lib/DefinePlugin');
// const { WebPlugin } = require('web-webpack-plugin');

 module.exports = {
	entry: {
		a: './src/entry/main.js', 
		b: './src/entry/login.js'
	},
	output: {
		filename: '[name]_[hash:8].js',
		path: path.resolve(__dirname, './dist')
		// chunkFilename: 'bundle_chunk_[name].js'
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.ts', '.json'],
		// modules: [],
		enforceExtension: false
	},
	watchOptions: {
	    // 不监听的 node_modules 目录下的文件
	    ignored: /node_modules/,
    },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader?minimize', 'postcss-loader']
				// use: ExtractTextPlugin.extract({
		  //           // 转换 .css 文件需要使用的 Loader
		  //           use: ['css-loader'],
		  //       })
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.ts$/,
				use: {
					loader: 'awesome-typescript-loader'
				}
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png | jpe?g | svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024 * 30,
							fallback: 'file-loader'
						},
					}
				]
			}
		]
	},
	devServer: {
		open: true,
		compress: false
	},
	devtool: 'source-map',
	externals: {jquery: 'jQuery'},
	resolveLoader: {
		modules: ['node_modules'],
		extensions: ['.js', 'json'],
		mainFields: ['loader', 'main']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			chunks: ['a']
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'login.html',
			chunks: ['b']
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					warnings: false,
					drop_console: true,
					collapse_vars: true,
					reduce_vars: true
				},
				output: {
					beautify: false,
					comments: false
				}
			}
		})
	]
}

if(process.env.NODE_ENV == 'production') {
	console.log('production')
}else {
	console.log('dev')
}