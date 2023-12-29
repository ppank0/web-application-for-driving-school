const Router = require('express')
const router = new Router()
const courseController = require('../controllers/courseController')

router.post('/', courseController.create)
router.get('/', courseController.gelAll)
router.get('/:id', courseController.getOne)

module.exports=router