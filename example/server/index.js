const webpack = require('webpack');
const express = require('express');
const WebDevMiddleware = require('webpack-dev-middleware');
const WebHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');

const webpackConfig = require('../webpack/webpack.config.js');

const compiler = webpack(webpackConfig);

const app = express();
const demo01 = require('./routers/demo01/index')
app.use('/demo01', demo01)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(WebDevMiddleware(compiler, {
    stats: {
        colors: true,
        chunks: false
      }
}))
app.use(WebHotMiddleware(compiler))

app.listen(3000, ()=> {

})