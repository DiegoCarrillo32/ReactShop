const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {

    entry: './src/index.js',
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'

    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@icons': path.resolve(__dirname, 'src/images/icons'),
            '@logos': path.resolve(__dirname, 'src/images/logos'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        }

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        
                        loader: 'html-loader',
                    }
                ]

            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader,
                    //  'style-loader' , 
                     'css-loader' ],

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].css',
            
        })

    ],
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        compress:true,
        port: 3005,
        historyApiFallback: true,
    }


}