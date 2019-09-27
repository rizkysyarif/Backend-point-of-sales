//Impor 

const express = require('express')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const cors = require('cors')
require('dotenv/config')



const app = express()
app.use(fileupload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin: 'localhost'
}))

const routerNav = require('./src/index')




const port = process.env.SERVER_PORT || 5000


app.listen(port, function(){
    console.log('server berjalan ' + port)
})

app.use('/api', routerNav)



app.get('*',(req,res)=>{
    res.send('404 Not Found')
})
