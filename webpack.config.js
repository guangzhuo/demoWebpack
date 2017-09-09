module.exports={
    entry:__dirname+'/src/js/main.js',
    output:{
        path: __dirname+'/public',
        filename:'bundle.js'
    },
    devtool:'eval-source-map',
    devServer:{
        contentBase:'./public',
        historyApiFallback:true,
        inline:true
    },
    module:{
        rules:[
            {
                test:/(\.js)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'es2015'
                        ]
                    }
                },
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }

        ]
    }
}