const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
//const statisticsRouter = require('./routes/statistics');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/products', productsRouter);
//app.use('/statistics', statisticsRouter);

module.exports = app;