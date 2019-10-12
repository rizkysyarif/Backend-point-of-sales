const express   = require('express')
const Route     = express.Router()
const middleware = require('../../auth/middleware')

//import controller
const orderController = require('../controller/orders')
Route
        .get('/', orderController.getOrder)
        .post('/', orderController.addOrder)
        .delete('/:id', orderController.deleteOrder)

    module.exports = Route