let jwt =require('jsonwebtoken')
const config = require('./config')

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']

    if (token) {
        if (token.startsWith('Bearer')) {
            token = token.slice(7, token.lenght)
        }
        jwt.verify(token, config.secret, (err,decoded) => {
            if(err){
                res.json({
                    success: 400,
                    message: 'Token not Found'
                })
            }else{
                req.decoded = decoded
                next()
            }
        })
    }else{
        return res.json({
            success: 400,
            message: 'Auth Token is not Supplied'
        })
    }
}

module.exports = {
    checkToken: checkToken
}