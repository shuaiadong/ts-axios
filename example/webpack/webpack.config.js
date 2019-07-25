const nPath = require('path');
const fs = require('fs');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

function p (path) {
    return nPath.resolve(__dirname, './', path)
}
function getEntryList () {
    let entries = {};
    fs.readdirSync(p('../src/modules')).reduce((entrie, dir)=> {
        const fullDir = nPath.join(p('../src//modules'), dir)
        let entry = nPath.join(fullDir, 'index.ts')
        if((fs.statSync(fullDir).isDirectory() && fs.existsSync(entry))){
            entries[dir] = [
                // 'react-hot-loader/patch',
                'webpack-hot-middleware/client?reload=true&noInfo=false&name='+ dir,
                entry
            ]
        }
    }, {})
    return entries;
}

const entries = getEntryList();

module.exports = {

    mode: 'development',

    entry: entries,

    output: {
        filename: 'js/[name].dev.js',
        path: p('../dest/')
    },

    plugins: [
        new CleanWebpackPlugin(),

        // 循环出 html
        ...Object.keys(entries).map(entry => {
            return new HtmlWebpackPlugin({
            filename: `pages/${entry}.html`,
            template: p('./template.html'),
            chunks: [entry],
            entryName: entry
            })
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
      },
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader'
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true
                    }
                  }
                ]
            }
        ]
    },
}