const express   = require('express')
const Route     = express.Router()

//import routes
const products = require('./routes/products')
const categories = require('./routes/categories')

Route
    .use('/product', products)
    .use('/category', categories)

module.exports = Route
