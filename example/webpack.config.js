const fs = require('fs');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const 

function p(npth) {
    return path.resolve(__dirname, npth)
}
// const 
const entry = {};
(fs.readdirSync('./src') || []).forEach(npath => {
    entry[npath] = p(`src/${npath}/index.ts`)
});


module.exports = {
    entry: entry,

    output: {
        filename: `[name].js`,
        path: p(`./dist`)
    },
    module:{
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...Object.keys(entry).map(filename => new HtmlWebpackPlugin({
            filename: `${filename}.html`,
            chunks: [filename]
        }))
    
    ]
}