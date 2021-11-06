const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    mode:'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            '@assets':path.resolve(__dirname,'/src/Assets'),
            '@actions': path.resolve(__dirname,('/src/Redux/Actions')),
            '@reducers': path.resolve(__dirname,('/src/Redux/Reducers')),
            '@styles':path.resolve(__dirname,'/src/Assets/styles'),
            '@images': path.resolve(__dirname,'/src/Assets/images'),
            '@components':path.resolve(__dirname,'/src/Components'),
            '@template':path.resolve(__dirname, '/src/Templates'),
            '@pages': path.resolve(__dirname,'/src/Pages'),
            '@routes': path.resolve(__dirname,'/src/Routes')
        }
    },
    module:{
        rules:[
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                ],
            },
            {
                test: /\.(png|jp(e*g)|svg|gif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name:'images/[hash]-[name].[ext]',
                        }
                    }
                ]
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer:{
        historyApiFallback: true,
    }
}