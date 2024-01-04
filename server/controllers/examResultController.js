const {ExamResult} = require('../models/models')
const ApiError= require('../error/ApiError')

class ExamResultController{
    async create(req,res){
        try {
            const { isPassed } = req.body;
            const { studentId } = req.body;
            const { examId } = req.body;
            
            const result = await ExamResult.create({ isPassed, studentId, examId});
            return res.json(result);
          } catch (error) {
            console.error(`Failed to create result: ${error.message}`);
            return res.status(500).send('An error occurred while creating the result.');
          }
    }

    async getAll(req, res) {
        try {
          const examResults = await ExamResult.findAll();
          return res.json(examResults);
        } catch (error) {
          console.error(`Failed to get exam results: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving exam results.');
        }
      }

      async getByStudentId(req, res) {
        try {
          const { studentId } = req.params;
          const examResult = await ExamResult.findAll({ where: { studentId } });
      
          if (!examResult) {
            return res.status(404).json({ message: 'Exam result not found.' });
          }
      
          return res.json(examResult);
        } catch (error) {
          console.error(`Failed to get exam result: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving the exam result.');
        }
      }
}

module.exports = new ExamResultController