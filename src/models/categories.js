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
            conn.query('UPDATE categories SET ? WHERE ?', [data, id], (err, result)=>{
                data.id = id
                if (!err) {
                        resolve(data)
                }else{
                    reject(new Error(err))
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