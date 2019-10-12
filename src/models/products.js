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

    getByOneProducts: (data) => {
        return new Promise((resolve, reject) => {
          conn.query("SELECT * from product WHERE id=?", [data, data.id],
          (err,result) => {
            if(!err) {
              resolve(result)
            } else {
              reject(err)
            }
          })
        })
      },
      
    getTotalProducts: ()=>{

        return new Promise((resolve, reject) =>{
            conn.query('SELECT count(id) as totalData FROM product',
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
    
    updateProduct: (data, id) => {
        return new Promise ((resolve, reject)=>{
            conn.query('select * from product where id = ?', id, (err, resultSelect) => {
                if (resultSelect.length > 0) {
                  conn.query('update product set ? where id = ?', [data, id], (err, result) => {
                    if (!err) {
                      resolve(result)
                    } else {
                      reject(err)
                    }
                  })
                } else {
                  reject('ID NOT FOUND!')
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