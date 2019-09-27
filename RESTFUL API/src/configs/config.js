module.exports = {
    database: {
        mysql: {
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASS,
            database: process.env.NAME,
        },
    }
}