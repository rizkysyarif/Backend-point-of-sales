//impor model
const uuid = require('uuidv4').default;
const uuidv1 = require('uuid/v1');
const orderModel = require('../models/orders')
module.exports ={
    getOrder: (req, res) =>{
        let {limit } = req.query
        let {page = 1} = req.query
        if(page < 1) page = 1

        let data = { limit, page}

        orderModel.getOrders(data)
            .then( async resultQuery =>{
                let totalOrder = await orderModel.getTotalOrder()
                res.json({
                    status : 200,
                    message: 'success',
                    totalData: totalOrder[0].totalData,
                    data:resultQuery

                })
            })
            .catch(err =>{
                console.log(err)
                res.json({
                    status:400,
                    message:'error Get Data'
                })
            })
    },
    addOrder: (req, res) =>{
       const no_recipient = uuidv1()
       const data = { no_recipient: no_recipient, total_price: req.body.total_price }


        orderModel.addOrders(data)
        .then(result =>{
            // req.body.order.forEach(item => {   
            //     console.log(item)    
            let orderItem = []
            req.body.order.map(item => {
                orderItem.push([null, item[0], no_recipient, item[1], item[2], null])
            });
                orderModel.addOrderitem([orderItem])       
            // 
            res.json({
                status : 200,
                message: 'Suksess',
                no_recipient: no_recipient
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

    addOrderitem: (req, res) =>{
        const { id, product_id, orders_id, price, quantity } = req.body
        const data = { id, product_id, orders_id, price, quantity }

        orderModel.addOrderitem(data)
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
    
    deleteOrder: (req, res)=>{

        orderModel.deleteOrder(req.params.id)
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


