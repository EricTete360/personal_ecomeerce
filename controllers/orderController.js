const Order = require('../models/Order');


// Entry Order
exports.createOrder = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required field"
        });
    }

    const order = new Order({
        userId: req.user.id,
        orderProductsList: req.body.orderProductsList,
        address: req.body.address,
        mobile:req.body.mobile,
        price: req.body.price,
        status: req.body.status,
    });

    order.save().then(data=>{
        res.status(201).send(data);
    }).catch(err=>{
        res.status(300).send({
            message: err.message || "Something Wrong"
        });
    })
}

// Single Display
exports.singleOrder = (req,res) => {
    Order.find().then(obj=>{
        res.status(201).json(obj);
    }).catch(err=>{
        res.status(300).send({
            message:err.message || "Something Wrong"
        });
    });
}

// Update Order
exports.updateOrder = (req,res) => {

    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required field"
        });
    }
    Order.findByIdAndUpdate(req.params.id, {
        userId: req.user.id,
        orderProductsList: req.body.orderProductsList,
        address: req.body.address,
        mobile:req.body.mobile,
        price: req.body.price,
        status: req.body.status,
    }, {new: true})
    .then(obj => {
        if(!obj) {
            return res.status(404).send({
                message: "obj not found with id " + req.params.id
            });
        }
        res.send(obj);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "obj not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating obj with id " + req.params.id
        });
    });

}

// Deleted Order
exports.deleteOrder = (req, res) => {
    Order.findByIdAndRemove(req.params.id)
    .then(obj => {
        if(!obj) {
            return res.status(404).send({
                message: "obj not found with id " + req.params.id
            });
        }
        res.send({message: "obj deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "obj not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete obj with id " + req.params.id
        });
    });
};