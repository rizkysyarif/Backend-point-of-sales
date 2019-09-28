const express   = require('express')
const Route     = express.Router()
const middleware = require('../../auth/middleware')

//import controller
const categoryController = require('../controller/categories')
Route
        .get('/', categoryController.getCategory)
        .post('/', categoryController.addCategory)
        .put('/:id', categoryController.updateCategory)
        .delete('/:id', categoryController.deleteCategory)

    module.exports = Route