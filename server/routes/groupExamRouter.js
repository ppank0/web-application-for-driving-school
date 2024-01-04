const Router = require('express')
const router = new Router()
const groupExamController = require('../controllers/groupExamController')

router.post('/', groupExamController.create)
router.get('/', groupExamController.getAll)
router.get('/:id', )

module.exports=router