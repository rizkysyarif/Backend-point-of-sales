const express   = require('express')
const Route     = express.Router()
const middleware = require('../../auth/middleware')

//import controller
const productController = require('../controller/products')
Route
        .get('/',middleware.checkToken,productController.getProduct)
        .get("/:id", productController.getByOneProducts)
        .post('/', productController.addProduct)
        .patch('/:id', productController.updateProduct)
        .delete('/:id', productController.deleteProduct)
        .patch('/reduce/:id',middleware.checkToken, productController.reduceProduct)
        .patch('/addcount/:id',middleware.checkToken, productController.addcountProduct)


    module.exports = Route