const conn = require('../configs/db')

module.exports = {
    getDailyIncome: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT DAYNAME(create_date) as DAY , MONTHNAME(create_date) as MONTH, SUM(total_price) as INCOME, SUM(quantity) as AMOUNT FROM order_item X1 LEFT JOIN orders X2 ON X1.no_recipient = X2.no_recipient GROUP BY DAY(create_date) ORDER BY create_date ASC ', (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getYearlyIncome: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT DAYNAME(create_date) as DAY , MONTHNAME(create_date) as MONTH, SUM(total_price) as INCOME, SUM(quantity) as AMOUNT FROM order_item X1 LEFT JOIN orders X2 ON X1.no_recipient = X2.no_recipient GROUP BY YEAR(create_date),MONTH(create_date)   ', (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getWeeklyIncome: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT DAYNAME(create_date) as DAY , MONTHNAME(create_date) as MONTH, SUM(total_price) as INCOME, SUM(quantity) as AMOUNT FROM order_item X1 LEFT JOIN orders X2 ON X1.no_recipient = X2.no_recipient GROUP BY WEEK(create_date), DAY(create_date) ', (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getmonthlyIncome: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT DAYNAME(create_date) as DAY , MONTHNAME(create_date) as MONTH, SUM(total_price) as INCOME, SUM(quantity) as AMOUNT FROM order_item X1 LEFT JOIN orders X2 ON X1.no_recipient = X2.no_recipient GROUP BY MONTH(create_date), WEEK(create_date)', (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
}