const path = require('path');

module.exports={

    entry : "./src/index.js",
    output:{
        path: path.resolve(__dirname,"dis/assets"),
        filename:"bundel.js"
    },
    
    devServer: {
        contentBase: path.resolve(__dirname,'dis'),
        publicPath: '/assets/'
    },
    
    module:{
        rules:[
            {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-env']
                }
            }},
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
}};

