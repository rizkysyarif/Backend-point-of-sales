const express   = require('express')
const Route     = express.Router()
const middleware = require('../../auth/middleware')

//import controller
const historyController = require('../controller/history')
Route
        .get('/dailyIncome', historyController.getDailyIncome)
        .get('/yearlyIncome', historyController.getYearlyIncome)
        .get('/weeklyIncome', historyController.getWeeklyIncome)
        .get('/monthlyIncome', historyController.getmonthlyIncome)
        // .post('/', historyController.addHistory)

    module.exports = Route