const Router = require('express')
const router = new Router()
const galleryController = require('../controllers/galleryController')

router.post('/', galleryController.create)
router.get('/', galleryController.gelAll)

module.exports=router