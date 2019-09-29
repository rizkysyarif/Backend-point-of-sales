const express   = require('express')
const Route     = express.Router()
const middleware = require('../../auth/middleware')

//import controller
const productController = require('../controller/products')
Route
        .get('/',productController.getProduct)
        .post('/',middleware.checkToken, productController.addProduct)
        .put('/:id', productController.updateProduct)
        .delete('/:id',middleware.checkToken, productController.deleteProduct)
        .patch('/reduce/:id',middleware.checkToken, productController.reduceProduct)
        .patch('/addcount/:id',middleware.checkToken, productController.addcountProduct)


    module.exports = Route