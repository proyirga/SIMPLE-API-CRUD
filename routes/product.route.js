const express = require('express');
const router = express.Router();
const Product = require("../models/product.model.js");
const {getProducts, getProduct, deleteProduct, updateProduct, createProduct} = require('../controllers/product.controller.js');

//router add a product
router.post('/', createProduct);
//router get products
router.get('/', getProducts);
//router get product by ID
router.get('/:id', getProduct);
//router update product
router.put('/:id', updateProduct)
//router delete product
router.delete('/:id', deleteProduct);


module.exports = router;