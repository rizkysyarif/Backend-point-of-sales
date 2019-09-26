//impor model
const productModel = require('../models/products')
const uuid = require('uuid/v4')

const productController = {
    getProduct: (req, res) =>{
        let {sort} = req.query
        let {search} = req.query   
        let {limit} = req.query
        let {page = 1} = req.query
        if(page < 1) page = 1
        
        let data = {sort, search, limit, page}
        
        productModel.getProducts(data)
            .then(resultQuery =>{
                res.json({
                    status : 200,
                    message: 'success',
                    data:resultQuery
                })
            })
            .catch(err =>{
                console.log(err)
                res.json({
                    status:400,
                    message:'error get data'
                })
            })
    },
    async addProduct(req, res) {
        const {id, name, description, category, price, count} = req.body

        const image = productController.uploadimg(req.files.image)

        const data = {id, name, description, image, category, price, count}
        
        productModel.addProduct(data)
        .then(result =>{
            res.json({
                status : 200,
                message: 'Suksess',
                data: result
            })
        })
        .catch(err =>{
            console.log(err)
            res.json({
                status: 500,
                message:'error'
            })
        })
        },
    updateProduct:(req, res)=>{
        const {name, description, image, category, price, count} = req.body
        const data = {name, description, image, category, price, count}

        productModel.updateProduct([data,{id: req.params.id}])
        .then(result =>{
            res.json({
                status:200,
                message: 'Suksess',
                data: result
            })
        })
        .catch(err => {
            res.json({
                status:500,
                status: 'Error'
            })
        })
    },
    deleteProduct: (req, res)=>{

        productModel.deleteProduct(req.params.id)
        .then(result =>{
            res.json({
                status: 200,
                message: 'Suksess',
                data: result
            })
        })
        .catch(err =>{
            res.json({
                status:500,
                message:'Error'
            })
        })
    },
    reduceProduct: (req, res) => {
        const id = req.params.id
        const {count } = req.body
        productModel.reduceProduct(id, count)
        .then(result =>{
            res.json({
                status: 200,
                message: 'Suksess reduce product by '+ count,
                
            })
        })
        .catch(err =>{
            res.json({
                status:500,
                message: err
            })
        })
    },
    addcountProduct: (req, res) => {
        const id = req.params.id
        const {count } = req.body
        productModel.addcountProduct(id, count)
        .then(result =>{
            res.json({
                status: 200,
                message: 'Suksess add product by '+ count,
                
            })
        })
        .catch(err =>{
            res.json({
                status:500,
                message: err
            })
        })
    },
    uploadimg(image) {
         
        let img = image
        let imgmime = img.mimetype.split("/")[1]

        let imgname = uuid() + "." + imgmime

        let moveimg = img.mv(`public/img/${imgname}`)

        if(!moveimg) {
            return false
        }

        return imgname
    }
}

module.exports = productController


