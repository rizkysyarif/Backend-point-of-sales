const conn = require('../configs/db')

module.exports = {
    
    getProducts: (data)=>{

        return new Promise((resolve, reject) =>{
            conn.query(`SELECT product.*, categories.name_category FROM product JOIN categories on product.category = categories.id WHERE name LIKE '%${data.search ? data.search: ""}%' ${data.sort ? ` ORDER by ${data.sort}` : ''} ${data.limit ? `LIMIT ${data.limit} offset ${(data.page-1)*data.limit}` : ''} `,
            (err,result)=>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    
    addProduct: (data) => {
        return new Promise((resolve, reject)=>{
            conn.query('INSERT INTO product SET ?', data, (err, result) =>{

                if(!err){
                    resolve(data)
                }
                else{
                    reject(new Error(err))
                }

            })
        })
    },
    
    updateProduct: (data) => {
        return new Promise ((resolve, reject)=>{
            conn.query('UPDATE product SET ? WHERE ?', data, (err, result)=>{
                if (!err) {
                        resolve(data)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    
    deleteProduct: (data) => {
        return new Promise ((resolve, reject) =>{
            conn.query('DELETE from product where id=?', [data], (err, result)=>{
                if (!err) {
                    resolve(data)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    reduceProduct: (id, count) =>{
        return new Promise((resolve, reject)=>{
            conn.query('SELECT * FROM product WHERE id = ?', id, (err, result)=>{
                if(result.length >= 0){
                    const quantity = parseInt(result[0].count) - parseInt(count) 
                    if(quantity >= 0){
                    conn.query('UPDATE product SET count = ? WHERE id=?', [quantity, id], (err, update)=>{
                        if(!err){
                            resolve(result)
                        }else{
                            reject(err)
                        }
                    })
                    }else{
                        reject("too much")
                    }
                }else{
                    reject("your id is wrong")
                }
            })
        })
    },

    addcountProduct: (id, count) =>{
        return new Promise((resolve, reject)=>{
            conn.query('SELECT * FROM product WHERE id = ?', id, (err, result)=>{
                if(result.length >= 0){
                    const quantity = parseInt(result[0].count) + parseInt(count)
                    if(quantity > 0){
                    conn.query('UPDATE product SET count = ? WHERE id=?', [quantity, id], (err, update)=>{
                        if(!err){
                            resolve(result)
                        }else{
                            reject(err)
                        }
                    })
                    }else{
                        reject(err)
                    }
                }else{
                    reject("your id is wrong")
                }
            })
        })
    },


}