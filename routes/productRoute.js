const express = require('express');
const router = express.Router();
const products = require('../controllers/productController');
const verifyToken = require('../middleware/verifyJWT');


router.post('/create',products.createProducts);
router.get('/getlist',products.singleProoducts);
router.get('/getdetails/:id',products.showProductsDisplay);
router.put('/dupdate',products.updateProducts);
router.delete('/delete',products.deleteProducts);


module.exports = router;