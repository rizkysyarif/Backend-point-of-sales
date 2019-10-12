const express   = require('express')
const Route     = express.Router()

//import routes
const products = require('./routes/products')
const categories = require('./routes/categories')
const users = require('./routes/users')
const orders = require('./routes/orders')
const history = require('./routes/history')

Route
    .use('/product', products)
    .use('/category', categories)
    .use('/user', users)
    .use('/order', orders)
    .use('/history', history)


module.exports = Route
