const express = require('express');
const router = express.Router();

const { addProduct, getAllProduct, getProductById, updageProduct, deleteProduct } = require('../controllers/product')

router.post('/add', addProduct);
router.get('/all', getAllProduct);
router.get('/:id', getProductById);
router.put('/:id', updageProduct);
router.delete('/:id', deleteProduct);


module.exports = router;