const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Reducers: path.resolve(__dirname, 'src/Redux/Reducers/'),
			Actions: path.resolve(__dirname, 'src/Redux/Actions/'),
			Styles: path.resolve(__dirname, 'src/Assets/Styles/'),
			Images: path.resolve(__dirname, 'src/Assets/Images/'),
            Pages: path.resolve(__dirname,'src/Pages/'),
			Hooks: path.resolve(__dirname,'src/Hooks/'),
			Components: path.resolve(__dirname,'src/Components')
		},
	},
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
				},
			},
			{
				test: /\.css$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
				],
			},
			{
				test: /\.(png|jp(e*g)|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[hash]-[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
	},
};
