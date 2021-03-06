//impor model
const productModel = require('../models/products')
const uuid = require('uuid/v4')

const productController = {
    getProduct: (req, res) =>{
        let {sort} = req.query
        let {search} = req.query
        let {limit } = req.query
        let {page = 1} = req.query
        if(page < 1) page = 1
        
        let data = {sort, search, limit, page}
        
        productModel.getProducts(data)
            .then ( async resultQuery =>{
                let totalProduct = await productModel.getTotalProducts()
                res.json({
                    status : 200,
                    message: 'success',
                    totalData : totalProduct[0].totalData,
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

    getByOneProducts: (req,res) => {

        const {id} = req.params
    
        productModel.getByOneProducts(id)
          .then(resultQuery => {
            res.json({
              status: 200,
              message: "success get one data",
              data: resultQuery
            })
          })
          .catch(err => {
            console.log(err)
            res.status(400).json({
              status:400,
              message: "error get one data from database"
            })
          })
      },
      
    addProduct(req, res) {
        const {id, name, description, category, price, count} = req.body
        if(!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('file not found')
        }

        let images = req.files.image
        let fileType = images.mimetype
        var type = ``

        if(fileType !== 'image/png' && fileType !== 'image/jpg' && fileType !== 'image/jpeg' && fileType !== 'image/svg' && fileType !== 'image/gif' ) {
            return res.status(400).send('File not format')
        }
        if (fileType === 'image/png') {
            type = 'png'
        }
        if (fileType === 'image/jpg') {
            type = 'jpg'
        }
        if (fileType === 'image/jpeg') {
            type = 'jpeg'
        }
        if (fileType === 'image/svg') {
            type = 'svg'
        }
        if (fileType === 'image/gif') {
            type = 'gif'
        }

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
        const {name, description, category, price, count} = req.body
       
            if(!req.files || Object.keys(req.files).length === 0) {
                
            }else{
                let images = req.files.image
                var fileType = images.mimetype
                var type = ``
        
                if(fileType !== 'image/png' && fileType !== 'image/jpg' && fileType !== 'image/jpeg' && fileType !== 'image/svg' && fileType !== 'image/gif' ) {
                    return res.status(400).send('File not format')
                }
                if (fileType === 'image/png') {
                    type = 'png'
                }
                if (fileType === 'image/jpg') {
                    type = 'jpg'
                }
                if (fileType === 'image/jpeg') {
                    type = 'jpeg'
                }
                if (fileType === 'image/svg') {
                    type = 'svg'
                }
                if (fileType === 'image/gif') {
                    type = 'gif'
                }
                const img = productController.uploadimg(req.files.image)
                const data = {name, description, image: img, category, price, count}
                const id = req.params.id
            }
    
        let data = {name, description,  category, price, count}
        let id = req.params.id
        
        
        

        productModel.updateProduct(data, id)
        .then(result =>{
            res.json({
                status:200,
                message: 'Suksess',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
            res.json({
                status:500,
                status: 'Error',
                err
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


