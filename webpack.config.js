var webpack = require('webpack');
var path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build/resources/main/static/');
const HTMLPATH = path.resolve(__dirname, './src/main/resources/static/html/');
const JSPATH = path.resolve(__dirname, './src/main/resources/static/js/');
const SCSSPATH = path.resolve(__dirname, './src/main/resources/static/scss/');
const ERROR_DIR = path.resolve(__dirname, './src/main/resources/static/errorPages/');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PathRewriterPlugin = require('webpack-path-rewriter');

const extractScss = new ExtractTextPlugin({
    filename: "stylesheets/[name]-[chunkhash].css",
    allChunks: true
});
const pathRewriter = new PathRewriterPlugin();

function resolve (dir) {
    return path.join(__dirname, dir)
}

var config = {
    entry: {
        // main less file
        base: [SCSSPATH + '/base.scss'],
        app: [JSPATH + '/app.js', HTMLPATH + '/app.html', SCSSPATH + '/app.scss'],
        login: [JSPATH + '/login.js', HTMLPATH + '/login.html', SCSSPATH + '/login.scss']

        // '404': [APP_DIR + '/error.ts', ERROR_DIR + '/404.html']
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        chunkFilename: '[id].[name].js'
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery': resolve('node_modules/jquery/dist/jquery')
        }
    },
    module: {
        rules: [{
            test: /\.vue?/,
            use: [{
                loader: 'vue-loader'
            }],
            include: JSPATH
        }, {
            test: /\.scss/,
            include: SCSSPATH,
            use: ExtractTextPlugin.extract({
                fallback:"style-loader",
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'resolve-url-loader'
                }, {
                    loader: 'sass-loader?sourceMap'
                }],
                publicPath: '../'
            })
        }, {
            test: /\.html$/,
            include: HTMLPATH,
            use: PathRewriterPlugin.rewriteAndEmit({
                name: './[name].html'
            })
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }/*, {
             test: /\.html$/,
             include: ERROR_DIR,
             use: PathRewriterPlugin.rewriteAndEmit({
             name: './error/[name].html'
             })
             }*/]
    },
    plugins: [
        extractScss,
        pathRewriter,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};

module.exports = config;