const conn = require('../configs/db')

module.exports = {
    
    getCategories: ()=>{
        return new Promise((resolve, reject) =>{
            conn.query('SELECT * FROM categories',
            (err,result)=>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    
    addCategory: (data) => {
        return new Promise((resolve, reject)=>{
            conn.query('INSERT INTO categories SET ?', data, (err, result) =>{

                if(!err){
                    resolve(data)
                }
                else{
                    reject(new Error(err))
                }

            })
        })
    },
    
    updateCategory: (data, id) => {
        return new Promise ((resolve, reject)=>{
            conn.query('select * from categories where id = ?', id, (err, resultSelect) => {
                if (resultSelect.length > 0) {
                  conn.query('update categories set ? where id = ?', [data, id], (err, result) => {
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
    
    
    deleteCategory: (data) => {
        return new Promise ((resolve, reject) =>{
            conn.query('DELETE from categories where id=?', [data], (err, result)=>{
                if (!err) {
                    resolve(data)
                }else{
                    reject(new Error(err))
                }
            })
        })
    }

}