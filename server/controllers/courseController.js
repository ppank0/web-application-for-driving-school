const {Course} = require('../models/models')
const ApiError= require('../error/ApiError')

class CourseController{
    async create(req,res){
        try {
            const { name } = req.body;
            const { description } = req.body;
            const { price } = req.body;
            const { duration } = req.body;
        
            const course = await Course.create({ name, description, price, duration });
            return res.json(course);
          } catch (error) {
            console.error(`Failed to create course: ${error.message}`);
            return res.status(500).send('An error occurred while creating the course.');
          }
    }

    async gelAll(req,res){
        const courses = await Course.findAll()
        return res.json(courses)
    }

    async getOne(req,res){

    }
}

module.exports= new CourseController