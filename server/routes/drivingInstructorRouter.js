const Router = require('express')
const router = new Router()
const drivingInstructorController = require('../controllers/drivingInstuctorController')

router.post('/', drivingInstructorController.create)
router.get('/', drivingInstructorController.getAll)
router.get('/:id', drivingInstructorController.getOne);

module.exports=router