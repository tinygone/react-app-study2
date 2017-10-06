var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry : path.join(__dirname, 'index'),
    output : {
        path:__dirname,
        filename : 'bundle.js'
    },
    module : {
        loaders: [
            {
                test: /\.css$/,
                loaders:['style-loader','css-loader']
            }
        ]
    },
    // 使用HtmlWebpackPlugin时，会自动生成index.html，不需要再手工添加
    plugins :[
        new HtmlWebpackPlugin({
            title :'use plugin'
        })
    ]

};