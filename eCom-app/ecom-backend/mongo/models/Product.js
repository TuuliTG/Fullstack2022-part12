const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  price: {
    type: mongoose.Types.Decimal128,
    default: 0,
    get: getPrice
  }
}, {toJSON: {getters: true}})

function getPrice(value) {
  if (typeof value !== 'undefined') {
     return parseFloat(value.toString());
  }
  return value;
};

module.exports = mongoose.model('Product', productSchema)