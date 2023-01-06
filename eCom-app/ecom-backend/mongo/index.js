const mongoose = require('mongoose')
const Product = require('./models/Product')
const { MONGO_URL } = require('../util/config.js')
console.log(MONGO_URL)

mongoose.set('strictQuery',false)

if (MONGO_URL && !mongoose.connection.readyState) mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
  Product
}