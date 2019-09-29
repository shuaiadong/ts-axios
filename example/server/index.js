const express = require('express');
const path = require('path');
const webpack = require('webpack'); 
const webpackDevConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const port = '3000';
const  dir = path.join(__dirname, './dist');


const compiler = webpack(webpackDevConfig);

app.use(webpackDevMiddleware(compiler, {
}));

// app.use(express.static(dir))

app.listen(port, () => {
    console.log(`localhost/${port}`)
    console.log(`127.0.0.1/${port}`)
})