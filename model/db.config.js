const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    database: 'doox.in',
    password: 'admin',
    port: 5432
})

pool.connect(err => {
    if (err) {
        throw err
    }
    console.log('Successfully connected to the database.')
})

module.exports = pool