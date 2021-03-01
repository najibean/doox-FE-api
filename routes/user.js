const { Router } = require('express')
const router = Router()
const userController = require('./../controller/user')

router.get('/test', (req, res) => {
    res.status(200).send({
        msg: 'You are on the test endPoint'
    })
})

router.get('/all', userController.findAll)
router.get('/:id', userController.findOne)
router.post('/daftar', userController.create)


module.exports = router