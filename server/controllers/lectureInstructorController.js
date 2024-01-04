const {InstructorLecture} = require('../models/models')
const ApiError= require('../error/ApiError')

class LectureInstructorController{
    async create(req,res){
        try {
            const { name, patronymic, surname, phone, experience } = req.body;
            
            const lector = await InstructorLecture.create({name, patronymic, surname, phone, experience});
            return res.json(lector);
          } catch (error) {
            console.error(`Failed to create result: ${error.message}`);
            return res.status(500).send('An error occurred while creating the result.');
          }
    }

    async getAll(req, res) {
        try {
          const lectors = await InstructorLecture.findAll();
          return res.json(lectors);
        } catch (error) {
          console.error(`Failed to get exam lectors: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving exam lectors.');
        }
      }

      async getOne(req, res) {
        try {
          const { id } = req.params;
          const lector = await InstructorLecture.findOne({ where: { id} });
      
          if (!lector) {
            return res.status(404).json({ message: 'Lector is not found.' });
          }

          return res.json(lector);

        } catch (error) {
          console.error(`Failed to get lector: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving the lector.');
        }
      }
}

module.exports = new LectureInstructorController