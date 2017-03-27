const path = require("path");
const webpack = require("webpack");

module.exports = {

    entry: path.resolve("src/index.ts"),

    output: {
        path: path.resolve("lib"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader'
            }
        ]
    },

    resolve: {
        extensions: [".js", ".ts"],
        alias: {
            "vs": path.resolve("lib", "./node_modules/monaco-editor-core/dev/vs")
        }
    },

    devtool: "source-map",

    plugins: [
        require('copy-webpack-plugin')([
            {
                from: "./node_modules/monaco-editor-core/dev/vs",
                to: "vs"
            }
        ])
    ]

};
