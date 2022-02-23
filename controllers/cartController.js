const Cart = require('../models/CartProducts');


// Entry Carts
exports.createCart = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required field"
        });
    }

    const cart = new Cart({
        userId: req.user.id,
        productId: req.body.productId,
        quantity: req.body.quantity,
    
    });

    cart.save().then(data=>{
        res.status(201).send(data);
    }).catch(err=>{
        res.status(300).send({
            message: err.message || "Something Wrong"
        });
    })
}

// Single Display
exports.singleProoducts = (req,res) => {
    Cart.find().then(obj=>{
        res.status(201).json(obj);
    }).catch(err=>{
        res.status(300).send({
            message:err.message || "Something Wrong"
        });
    });
}

// Update Products
exports.updateProducts = (req,res) => {

    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required field"
        });
    }
    Cart.findByIdAndUpdate(req.params.id, {
        userId: req.user.id,
        productId: req.body.productId,
        quantity: req.body.quantity,
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

// Deleted Products
exports.deleteProducts = (req, res) => {
    Cart.findByIdAndRemove(req.params.id)
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