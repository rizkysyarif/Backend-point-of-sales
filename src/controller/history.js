const historyModel = require('../models/history')

module.exports ={
    getDailyIncome: async (req, res) => {
        let datetime = new Date();
        todayDate = datetime.toISOString().slice(0,10)

        datetime.setDate(datetime.getDate() - 1)
        yesterdayDate = datetime.toISOString().slice(0,10)

        let resultYesterday = await historyModel.getIncome(yesterdayDate)

        historyModel.todayIncome()
        .then(result => {
            total = 0
            totalYesterday = 0
            if (result.length > 0){
                total = result[0]['TOTAL']
            }

            if (resultYesterday.length > 0){
                totalYesterday = resultYesterday[0]['TOTAL']
            }
            res.json({
                status: 200,
                data: {
                    today: total,
                    yesterday: totalYesterday 
                },
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

    getWeeklyIncome: async (req, res) => {
        
        let thisWeekData = await historyModel.getThisWeek()
        let lastWeekData = await historyModel.getLastWeek()
        historyModel.getWeeklyIncome()
        .then(result => {
            let data = {
                'thisWeek': thisWeekData,
                'lastWeek': lastWeekData
            }
            res.json({
                status: 200,
                data: result,
                week: data,
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