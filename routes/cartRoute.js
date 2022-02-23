const express = require('express');
const router = express.Router();
const cart = require('../controllers/cartController');
const verifyToken = require('../middleware/verifyJWT');


router.post('/create',verifyToken,cart.createCart);
router.get('/getlist',verifyToken,cart.singleProoducts);
router.put('/updatelist',verifyToken,cart.updateProducts);
router.delete('/delete',verifyToken,cart.deleteProducts);


module.exports = router;