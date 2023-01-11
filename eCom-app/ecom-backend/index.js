const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/products', productsRouter);

module.exports = app;