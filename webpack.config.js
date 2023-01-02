const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // mode: "production",
    entry: "/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[hash].js",
        clean: true,
    },

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }, 
            {
                test: /.scss$/,
                use:[{
                        loader: "style-loader"}, 
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                }]
            }, 
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/i,
                type: 'asset/resource'
            },
            // {
            //     test: /\.json$/,
            //     loader: "json-loader"
            // }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "/src/index.html"),
            title: "App",
        })
    ]
}