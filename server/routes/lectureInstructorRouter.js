const Router = require('express')
const router = new Router()
const lectureInstructorController = require('../controllers/lectureInstructorController')

router.post('/', lectureInstructorController.create)
router.get('/', lectureInstructorController.getAll)
router.get('/:id', lectureInstructorController.getOne);

module.exports=router