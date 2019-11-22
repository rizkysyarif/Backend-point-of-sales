const historyModel = require('../models/history')

module.exports ={
    getDailyIncome: async (req, res) => {
        let datetime = new Date();
        todayDate = datetime.toISOString().slice(0,10)

        datetime.setDate(datetime.getDate() - 1)

        let resultYesterday = await historyModel.getIncome()
        
        historyModel.todayIncome()
        .then(result => {
            
            if (result[0]['TOTAL'] == null){
                result[0]['TOTAL'] = 0
            }

            if (resultYesterday[0]['TOTAL'] == null){
                resultYesterday[0]['TOTAL'] = 0
            }
            res.json({
                status: 200,
                data: {
                    today: result[0]['TOTAL'],
                    yesterday: resultYesterday[0]['TOTAL'] 
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

    getYearlyIncome: async (req, res) => {
        let card = await historyModel.getYearlyIncomeCard()
        historyModel.getYearlyIncome()
        .then(result => {
            res.json({
                status: 200,
                data: {
                    'chart':result,
                    'card':card
                },
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