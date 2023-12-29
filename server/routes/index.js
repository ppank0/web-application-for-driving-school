const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const courseRouter = require('./courseRouter')
const studentRouter = require('./studentRouter')
const groupRouter = require('./groupRouter')
const examRouter = require('./examRouter')
const galleryRouter = require('./galleryRouter')

router.use('/user', userRouter)
router.use('/course', courseRouter)
router.use('/student', studentRouter)
router.use('/group', groupRouter)
router.use('/exam', examRouter)
router.use('/gallery', galleryRouter)

module.exports=router