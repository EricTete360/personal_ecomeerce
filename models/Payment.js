const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PaymentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },

  paymentid: {
    type: String,
    required: true
  },
  
  amount: {
    type: String,
    required: true
  },  


});

module.exports = Category = mongoose.model('payments', PaymentSchema);