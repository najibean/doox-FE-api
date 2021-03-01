const sql = require('./db.config')

// constructor
// this time, the constructor not from class but direct to function!
const User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
}

// CREATE NEW USER
User.create = function (newUser, result) {
    let queryRaw = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)'
    sql.query(queryRaw, newUser, function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(err, null)
            return
        }

        console.log('created user: ', {
            id: res.insertId,
            ...newUser
        })
        result(null, {
            id: res.insertId,
            ...newUser
        })
    })
}

// READ ALL DATA
User.getAll = function (result) {
    let queryRaw = 'SELECT * FROM users'
    sql.query(queryRaw, function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(err, null)
            return
        }

        console.log('users: ', res.rows)
        result(null, res.rows)
    })
}

// READ BASE ON ID
User.findById = function (userId, result) {
    let queryRaw = 'SELECT * FROM users WHERE id='
    sql.query(queryRaw + userId, function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(err, null)
            return
        }

        // there is value on the length when id founded (so it would be > 0)
        if (res.rows.length) {
            console.log('found user: ', res.rows)
            result(null, res.rows)
            return
        }

        // not found user with the id
        result({
            kind: 'not found!'
        }, null)
    })
}


module.exports = User