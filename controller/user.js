const User = require('./../model/user')

// Retrieve all users from the database
exports.findAll = function (req, res) {
    User.getAll(function (err, data) {
        let obj = {}
        let arr = []

        for (let i = 0; i < data.length; i++) {
            obj.email = data[i].email
            obj.username = data[i].username

            arr.push(obj)
            obj = {}
        }
        // console.log(arr)

        if (err) {
            res.status(500).send({
                message: err.message || 'Some error accurred while retrieving Customers.'
            })
        } else res.status(200).send({
            code: 200,
            message: 'Retrieve all users',
            data: arr
        })
    })
}

// Create and save new user
exports.create = function (req, res) {
    const { username, email, password } = req.body

    // Validate request
    if (req.body.username == '' || req.body.email == '' || req.body.password == '') {
        return res.status(400).send({
            msg: 'Username/Email/Password can not be empty'
        })
    }

    // Save Customer in the database
    User.create([username, email, password], function (err, data) {
        if (err) {
            res.status(500).send({
                message: err.message || 'Some error accurred while creating the Customer.'
            })
        } else res.status(200).json({
            username: username,
            email: email
        })
    })
}

exports.findOne = function (req, res) {
    const userId = req.params.id
    User.findById(userId, function (err, data) {
        if (err) {
            if (err.kind === 'not found') {
                res.status(404).send({
                    message: 'Not found Customer with id ' + userId
                })
            } else {
                res.status(500).send({
                    message: 'Error retrieving Customer with id ' + userId
                })
            }
        } else res.status(200).send({
            id: userId,
            username: data[0].username,
            email: data[0].email
        })
    })
}
