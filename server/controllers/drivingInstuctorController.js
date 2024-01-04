const {InstructorDriving} = require('../models/models')
const ApiError= require('../error/ApiError')

class DrivingInstructorController{
    async create(req,res){
        try {
            const { name, patronymic, surname, phone, availableSlots, experience } = req.body;
            
            const instructor = await InstructorDriving.create({name, patronymic, surname, phone, availableSlots, experience});
            return res.json(instructor);
          } catch (error) {
            console.error(`Failed to create driving instructor: ${error.message}`);
            return res.status(500).send('An error occurred while creating the instructor.');
          }
    }

    async getAll(req, res) {
        try {
          const instructors = await InstructorDriving.findAll();
          return res.json(instructors);
        } catch (error) {
          console.error(`Failed to get exam instructors: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving exam instructors.');
        }
      }

      async getOne(req, res) {
        try {
          const { id } = req.params;
          const instructor = await InstructorDriving.findOne({ where: { id} });
      
          if (!instructor) {
            return res.status(404).json({ message: 'Instructor is not found.' });
          }

          return res.json(instructor);

        } catch (error) {
          console.error(`Failed to get instructor: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving the instructor.');
        }
      }
}

module.exports = new DrivingInstructorController