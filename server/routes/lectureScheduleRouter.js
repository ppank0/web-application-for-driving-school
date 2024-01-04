const Router = require('express')
const router = new Router()
const lectureScheduleController = require('../controllers/lectureScheduleController')

router.post('/', lectureScheduleController.create)
router.get('/', lectureScheduleController.getAll)
router.get('/group/:groupId', lectureScheduleController.getByGroupId);
router.get('/lector/:instructorLectureId', lectureScheduleController.getByLectorId);

module.exports=router