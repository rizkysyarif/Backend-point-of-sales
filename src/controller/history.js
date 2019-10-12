const historyModel = require('../models/history')

module.exports ={
    getDailyIncome: (req, res) => {
        historyModel.getDailyIncome()
        .then(result => {
            res.json({
                status: 200,
                data: result,
                message: "daily income"
            })
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                message: " no daily income "
            })
        })
    },

    getYearlyIncome: (req, res) => {
        historyModel.getYearlyIncome()
        .then(result => {
            res.json({
                status: 200,
                data: result,
                message: "yearly income"
            })
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                message: " no yearly income "
            })
        })
    },

    getWeeklyIncome: (req, res) => {
        historyModel.getWeeklyIncome()
        .then(result => {
            res.json({
                status: 200,
                data: result,
                message: "weekly income"
            })
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                message: " no weekly income "
            })
        })
    },

    getmonthlyIncome: (req, res) => {
        historyModel.getmonthlyIncome()
        .then(result => {
            res.json({
                status: 200,
                data: result,
                message: "monthly income"
            })
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                message: " no monthly income "
            })
        })
    },

}