const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CategorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },  
  availability : {
      type: Boolean,
      required: true
  }

});

module.exports = Category = mongoose.model('categories', CategorySchema);