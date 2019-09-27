const express   = require('express')
const Route     = express.Router()

//import routes
const products = require('./routes/products')
const categories = require('./routes/categories')
const users = require('./routes/users')

Route
    .use('/product', products)
    .use('/category', categories)
    .use('/user', users)

module.exports = Route
