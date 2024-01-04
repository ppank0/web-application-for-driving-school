const Router = require('express')
const router = new Router()
const examResultController = require('../controllers/examResultController')

router.post('/', examResultController.create)
router.get('/', examResultController.getAll)
router.get('/:studentId', examResultController.getByStudentId);

module.exports=router