const express = require('express');
const router = express.Router();
const order = require('../controllers/orderController');
const verifyToken = require('../middleware/verifyJWT');


router.post('/create',verifyToken,order.createOrder);
router.get('/getlist',verifyToken,order.singleOrder);
router.put('/updatelist',verifyToken,order.updateOrder);
router.delete('/delete',verifyToken,order.deleteOrder);


module.exports = router;