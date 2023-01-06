const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  price: Boolean
})

module.exports = mongoose.model('Product', productSchema)