const webpack = require("webpack");
const path = require("path");
const TransferWebpackPlugin = require("transfer-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    // Entry points to the project
    entry: {
        listener: "./src/listener/listener.js",
        main: [
            // only- means to only hot reload for successful updates
            "webpack/hot/only-dev-server",
            "./src/app/app.js"
        ]
    },
    // Server Configuration options
    devServer: {
        contentBase: __dirname + "/src/www", // Relative directory for base of server
        inline: true,
        port: 8080, // Port Number
        host: "localhost", // Change to "0.0.0.0" for external facing server
    },
    devtool: "eval-source-map",
    output: {
        path: path.resolve(__dirname, "build"), // Path of output file
        filename: "[name].js?[hash]"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ "css-loader", "postcss-loader", "sass-loader" ]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ],
    },
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            { from: "www" },
        ], path.resolve(__dirname, "src")),
        // Extract sass then postcss to css
        new ExtractTextPlugin({
            filename: "app-[hash].css",
            allChunks: true
        }),
        // I add esj template as it is easier to add hashed js and css
        // also think to move title to package.json
        new HtmlWebpackPlugin({
            template: path.join(__dirname + "/src/www", "index.ejs"),
            path: __dirname + "/src/www",
            filename: "index.html",
            pkg: require("./package.json"),
            inject: false
        })
    ]
};

module.exports = config;
