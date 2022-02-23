const PayModel = require('../models/Payment');

exports.create = (req,res) =>{
    return res.status(201).json({
        msg: "Payment Function Accessed"
    })
}