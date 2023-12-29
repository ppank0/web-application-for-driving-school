const Router = require('express')
const router = new Router()
const examController = require('../controllers/examController')

router.post('/', examController.create)
router.get('/', examController.gelAll)
router.get('/:id', )

module.exports=router