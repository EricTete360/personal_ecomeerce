const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  categories: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  },
  ratings: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  availability : {
      type: Boolean,
      required: true
  }

});

module.exports = Products = mongoose.model('products', ProductSchema);