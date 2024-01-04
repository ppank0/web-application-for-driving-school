const Router = require('express')
const router = new Router()
const drivingScheduleController = require('../controllers/drivingScheduleController')

router.post('/', drivingScheduleController.create)
router.get('/', drivingScheduleController.getAll)
router.get('/student/:studentId', drivingScheduleController.getByStudentId);
router.get('/instructor/:instructorDrivingId', drivingScheduleController.getByInstructorId);

module.exports=router