//Impor express versi es5
const express = require('express')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const cors = require('cors')
//const logger   = require('morgan')

//Import body-parser
//const bodyParser = require('body-parser');

//Impor express versi es6
//import expres from 'express'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileupload())
app.use(cors({
    origin: 'localhost'
}))

//app.use(logger('dev'))


//app.use(express.urlencoded({extended: true}))
//app.use(express.json())
const routerNav = require('./src/index')
//Menggunakan bodyparser


//mendefinisikan port yang akan digunakan : 5000
const port = process.env.SERVER_PORT || 5000


app.listen(port, function(){
    console.log('server berjalan ' + port)
})

app.use('/api', routerNav)


// menambahkan 404 Not Found
app.get('*',(req,res)=>{
    res.send('404 Not Found')
})
