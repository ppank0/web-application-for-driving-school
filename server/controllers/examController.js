const {Exam} = require('../models/models')
const ApiError= require('../error/ApiError')

class ExamController{
    async create(req,res){
        try {
            const { name } = req.body;
            const { date } = req.body;
        
            const exam = await Exam.create({ name, date});
            return res.json(exam);
          } catch (error) {
            console.error(`Failed to create course: ${error.message}`);
            return res.status(500).send('An error occurred while creating the course.');
          }
    }

    async getAll(req,res){
        const exams = await Exam.findAll()
        return res.json(exams)
    }

    async getOne(req,res){

    }
}

module.exports= new ExamController