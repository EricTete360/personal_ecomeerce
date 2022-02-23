const Category = require("../models/Category");

// Entry Category
exports.createCategory = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required field"
        });
    }

    const category = new Category({
        title: req.body.title,
        availability: req.body.availability,
        desc: req.body.desc,
    });

    category.save().then(data=>{
        res.status(201).send(data);
    }).catch(err=>{
        res.status(300).send({
            message: err.message || "Something Wrong"
        });
    })
}

// Single Display
exports.singleCategory = (req,res) => {
    Category.find().then(obj=>{
        res.status(201).json(obj);
    }).catch(err=>{
        res.status(300).send({
            message:err.message || "Something Wrong"
        });
    });
}

// Update Category
exports.updateCategory = (req,res) => {

    if(!req.body){
        return res.status(400).send({
            message:"Please fill all required field"
        });
    }
    Category.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        availability: req.body.availability,
        desc: req.body.desc,
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

// Deleted Category
exports.deleteCategory = (req, res) => {
    Category.findByIdAndRemove(req.params.id)
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