const express   = require('express')
const Route     = express.Router()

//import controller
const productController = require('../controller/products')
Route
        .get('/', productController.getProduct)
        .post('/', productController.addProduct)
        .put('/:id', productController.updateProduct)
        .delete('/:id', productController.deleteProduct)
        .post('/reduce/:id', productController.reduceProduct)

    module.exports = Route