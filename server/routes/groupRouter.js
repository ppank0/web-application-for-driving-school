const Router = require('express')
const router = new Router()
const groupController = require('../controllers/groupController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), groupController.create)//только админ сможет создать
router.get('/', groupController.gelAll)

module.exports=router