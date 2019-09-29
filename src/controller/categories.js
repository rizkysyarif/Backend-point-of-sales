//impor model
const categoryModel = require('../models/categories')
module.exports ={
    getCategory: (req, res) =>{
        categoryModel.getCategories()
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
                    message:'error tambah data'
                })
            })
    },
    addCategory: (req, res) =>{
        const {id, name_category} = req.body
        const data = {id, name_category}

        categoryModel.addCategory(data)
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
    updateCategory:(req, res)=>{
        const {name_category} = req.body
        const data = {name_category}

        categoryModel.updateCategory(data, req.params.id)
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
    deleteCategory: (req, res)=>{

        categoryModel.deleteCategory(req.params.id)
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
    }
}


