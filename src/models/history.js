const conn = require('../configs/db')

module.exports = {

    getYearlyIncome: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT  MONTHNAME(create_date) as MONTH, SUM(total_price) as INCOME, SUM(quantity) as AMOUNT FROM order_item X1 LEFT JOIN orders X2 ON X1.no_recipient = X2.no_recipient GROUP BY month(create_date)', (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getYearlyIncomeCard: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT year(create_date) as Year , SUM(total_price) as INCOME, SUM(quantity) as AMOUNT FROM order_item X1 LEFT JOIN orders X2 ON X1.no_recipient = X2.no_recipient GROUP BY YEAR(create_date)', (err, result) =>{
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
            conn.query('SELECT week(create_date) as WEEK, SUM(quantity) as AMOUNT, SUM(price_order * quantity) as TOTAL FROM `order_item` WHERE Week(create_date) = Week(CURDATE()) ', (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getThisWeek: () => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT Dayname(create_date) as DAY, SUM(quantity) as AMOUNT, SUM(price_order * quantity) as TOTAL FROM `order_item` WHERE Week(create_date) = Week(CURDATE()) GROUP BY DAYOFWEEK(create_date)'
            conn.query(sql, (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    getLastWeek: () => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT Dayname(create_date) as DAY, SUM(quantity) as AMOUNT, SUM(price_order * quantity) as TOTAL FROM `order_item` WHERE Week(create_date) = (Week(CURDATE()) - 1) GROUP BY DAYOFWEEK(create_date)'
            conn.query(sql, (err, result) =>{
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

    todayIncome: () => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT Dayname(create_date) as DAY, SUM(price_order * quantity) as TOTAL, COUNT(*) as AMOUNT FROM `order_item` WHERE day(create_date) = day(CURDATE())'
            conn.query(sql, (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    
    getIncome: () => {
        return new Promise((resolve, reject) => {
            let sql = `SELECT Dayname(create_date) as DAY, SUM(price_order * quantity) as TOTAL, COUNT(*) as AMOUNT FROM order_item WHERE day(create_date) = day(CURDATE()-1)`
            conn.query(sql, (err, result) =>{
                if (!err) {
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
}