const usersModel = require('../models/users')
const uuid = require('uuid/v1')
const conn = require('.././configs/db')
const jwt = require('jsonwebtoken')
const config = require('../../auth/config')

module.exports = {
    login: (req, res) => {
        var { email, password } = req.body

        if (email && password){
            conn.query(`SELECT * FROM users WHERE email = ? && password = ?`, [email, password], (err,result) =>{
                if (result.length < 1){
                    return res.json({
                        success: 400,
                        message: 'Account not Found!'
                    })
                }
                let token = jwt.sign({email: email}, config.secret,{ expiresIn: '24h'})
                res.json({
                    success: 200,
                    message: 'Authentication Success!',
                    token: token
                })
            })
        }else{
            res.json({
                success: 400,
                message: 'Please insret user and paswword'
            })
        }
    },
    getAllUsers: (req, res) => {
        usersModel.getAllUsers()
        .then(result => {
            res.json({
                status: 200,
                message: 'Success Viewing Users!',
                data: (result)
            })
        })
        .catch(err => {
            console.log(err)
            res.json({
                status: 500,
                message: 'Error Viewing Users!'
            })
        })
    },
    register: (req,res ) => {
      
        var { email, password } = req.body
        var data = {email, password }

        usersModel.register(data).then( result => {
            console.log(data)
            res.json({
                status: 200,
                message: 'Registration Success'
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                status: 500,
                message: 'Registration Failed'
            })
        })
    },
    updateUsers: (req,res ) => {
        var {password} = req.body
        var data = {password}
        var id = req.params.id

        usersModel.updateUsers(data, id).then( result => {
            res.json({
                status: 200,
                message: 'Update Success'
            })
        }).catch(err => {
            res.status(500).json({
                status: 500,
                message: 'Update Failed'
            })
        })
    },
}