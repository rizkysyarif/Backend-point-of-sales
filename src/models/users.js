  
const conn = require('../configs/db')

module.exports = {
    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM users`, (err, result) => {
                if(!err){
                    resolve(result)

                }else{
                    reject(err)
                }
            })
        })
    },
    register: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM users WHERE email = ?`, data.email, (err, result) => {
                if(result.length < 1){
                    conn.query(`INSERT INTO users SET ?`, data, (err,res) => {
                        if(!err){
                            resolve(res)
                        }else{
                            reject(err)
                        }
                    })

                }else{
                    reject('The email is already')
                }
            })
        })
    },
}