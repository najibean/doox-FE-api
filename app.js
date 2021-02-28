const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/user')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// to test the connection
app.get('/', (req, res) => {
    res.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

app.use('/api/v1/user/', router)

app.listen(port, () => {
    console.log('App Doox running on port ' + port)
})