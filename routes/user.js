const { Router } = require('express')
const router = Router()

router.get('/test', (req, res) => {
    res.status(200).send({
        msg: 'You are on the test endPoint'
    })
})

module.exports = router