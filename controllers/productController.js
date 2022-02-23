const Products = require("../models/Products");

// Entry Products
exports.createProducts = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required field"
        });
    }

    const products = new Products({
        title: req.body.title,
        availability: req.body.availability,
        desc: req.body.desc,
        img: req.body.img,
        categories: req.body.categories,
        ratings: req.body.ratings,
        price: req.body.price,

    });

    products.save().then(data=>{
        res.status(201).send(data);
    }).catch(err=>{
        res.status(300).send({
            message: err.message || "Something Wrong"
        });
    })
}

// Single Display
exports.singleProoducts = (req,res) => {
    Products.find().then(obj=>{
        res.status(201).json(obj);
    }).catch(err=>{
        res.status(300).send({
            message:err.message || "Something Wrong"
        });
    });
}

// Single Data Display
exports.showProductsDisplay = (req,res) => {
    Products.findById(req.params.id).then(obj=>{
        res.status(200).json(obj);
    }).catch(err=>{
        res.status(300).send({
            message: err.message || "Something went wrong"
        });
    })
}

// Update Products
exports.updateProducts = (req,res) => {

    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required field"
        });
    }
    Products.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        availability: req.body.availability,
        desc: req.body.desc,
        img: req.body.img,
        categories: req.body.categories,
        ratings: req.body.ratings,
        price: req.body.price,
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
    Products.findByIdAndRemove(req.params.id)
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