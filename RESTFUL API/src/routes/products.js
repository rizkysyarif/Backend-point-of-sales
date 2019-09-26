const express   = require('express')
const Route     = express.Router()

//import controller
const productController = require('../controller/products')
Route
        .get('/', productController.getProduct)
        .post('/', productController.addProduct)
        .put('/:id', productController.updateProduct)
        .delete('/:id', productController.deleteProduct)
        .patch('/reduce/:id', productController.reduceProduct)
        .patch('/addcount/:id', productController.addcountProduct)


    module.exports = Route