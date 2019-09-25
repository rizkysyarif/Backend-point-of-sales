const mysql  = require('mysql')
const config = require('./config')

const connection = mysql.createConnection(config.database.mysql)

connection.connect((err)=>{
    if(err) console.log('error : ${err}') //using string/template literal
    console.log('DB Connected')
})

//const connection = mysql.createConnection({
    

    //host: 'localhost',
    //    user: 'root',
     //   password : '',
       // database : 'post'}
//})

module.exports = connection