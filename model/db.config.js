const { Pool } = require('pg')
const env = require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    database: env.DATABASE,
    password: 'admin',
    port: env.PORT
})

pool.connect(err => {
    if (err) {
        throw err
    }
    console.log('Successfully connected to the database.')
})

module.exports = pool