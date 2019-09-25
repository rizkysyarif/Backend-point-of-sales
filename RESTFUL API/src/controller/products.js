//impor model
const productModel = require('../models/products')
module.exports ={
    getProduct: (req, res) =>{
        let {sort} = req.query
        let {search} = req.query
        
        let data = {sort, search}
        
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
    addProduct: async (req, res) =>{
        const {id, name, description, image, category, price, count} = req.body
        const data = {id, name, description, image, category, price, count}
        // console.log(req.files)
        // // const uploadimg = await this.uploadimg(req.files.image)
        // console.log(uploadimg)

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
        productModel.reduceProduct(id, count).then(result =>{
        res.json({
            status: 200,
            message: 'Suksess reduce product by'+ count,
            
        })
    })
    .catch(err =>{
        res.json({
            status:500,
            message:'Error'
        })
    })
    },
    // uploadimg: (image) =>{
         
    //     let img = image
    //     let imgmime = img.mimetype.split("/")[1]

    //     let imgname = uuidv4() + "." + imgmime

    //     let moveimg = img.mv(`public/img/${imgname}`)

    //     if(!moveimg) {
    //         return false
    //     }

    //     return imgname
    // }
}


