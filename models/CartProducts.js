const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderProductSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'products',
    },
    quantity:{
        type:Number,
        default:1
    }
},
{
    timestamps:true
});

module.exports = Carts = mongoose.model('cartsproduct', OrderProductSchema);