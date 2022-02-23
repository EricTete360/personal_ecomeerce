const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },

    orderProductsList:{
        type: Schema.Types.ObjectId,
        ref: 'cartsproduct',
    },

  address: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  status : {
      type: Boolean,
      default: "pending"
  },
  
},
{
    timestamps:true
});

module.exports = Orders = mongoose.model('orders', OrderSchema);