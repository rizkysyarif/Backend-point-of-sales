const conn = require('../configs/db')

module.exports = {
    
    getOrders: (data)=>{
        return new Promise((resolve, reject) =>{
            conn.query(`SELECT order_item.*, product.* FROM order_item JOIN product on order_item.product_id = product.id ${data.limit ? `LIMIT ${data.limit} offset ${(data.page-1)*data.limit}` : ''} `,
            (err,result)=>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getTotalOrder: ()=>{

        return new Promise((resolve, reject) =>{
            conn.query('SELECT count(id) as totalData FROM order_item',
            (err,result)=>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    addOrders: (data) => {
        return new Promise((resolve, reject)=>{
            conn.query('INSERT INTO orders SET ?', data, (err, result) =>{

                if(!err){
                    resolve(result)
                }
                else{
                    reject(new Error(err))
                }

            })
        })
    },
    
    addOrderitem: (data) => {
        return new Promise((resolve, reject)=>{
            conn.query(`INSERT INTO order_item VALUES ?`,data,
             (err, result) =>{

                if(!err){
                    resolve(result)
                }
                else{
                    reject(new Error(err))
                }

            })
        })
    },

    deleteOrder: (data) => {
        return new Promise ((resolve, reject) =>{
            conn.query('DELETE from orders where id=?', [data], (err, result)=>{
                if (!err) {
                    resolve(data)
                }else{
                    reject(new Error(err))
                }
            })
        })
    }

}