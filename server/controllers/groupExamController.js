const {GroupExam} = require('../models/models')
const ApiError= require('../error/ApiError')

class GroupExamController{
    async create(req,res){
        try {
            const { groupId } = req.body;
            const { examId } = req.body;
            
            const groupExam = await GroupExam.create({ groupId, examId});
            return res.json(groupExam);
          } catch (error) {
            console.error(`Failed to create groupExam: ${error.message}`);
            return res.status(500).send('An error occurred while creating the groupExam.');
          }
    }

    async getAll(req,res){
      const {groupId} = req.query
      if (groupId) {
        const groupExams = await GroupExam.findAll({ where: { groupId } });
        return res.json(groupExams);
      }
  
      const groupExams = await GroupExam.findAll();
      return res.json(groupExams);
    }

    async getOne(req,res){

    }
}

module.exports = new GroupExamController