const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController');
const verifyToken = require('../middleware/verifyJWT');


router.post('/create',category.createCategory);
router.get('/getlist',category.singleCategory);
router.put('/updatelist',category.updateCategory);
router.delete('/delete',category.deleteCategory);


module.exports = router;