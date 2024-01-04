const {DrivingSchedule} = require('../models/models')
const ApiError= require('../error/ApiError')

class DrivingScheduleController{
    async create(req,res){
        try {
            const { date, instructorDrivingId, studentId} = req.body;
            
            const schedule = await DrivingSchedule.create({date, instructorDrivingId, studentId});
            return res.json(schedule);
          } catch (error) {
            console.error(`Failed to create driving schedule: ${error.message}`);
            return res.status(500).send('An error occurred while creating the driving schedule.');
          }
    }

    async getAll(req, res) {
        try {
          const schedules = await DrivingSchedule.findAll();
          return res.json(schedules);
        } catch (error) {
          console.error(`Failed to get exam driving schedules: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving exam driving schedules.');
        }
      }

      async getByStudentId(req, res) {
        try {
          const { studentId } = req.params;
          const schedule = await DrivingSchedule.findAll({ where: {studentId} });
      
          if (!schedule) {
            return res.status(404).json({ message: 'Schedule is not found.' });
          }

          return res.json(schedule);

        } catch (error) {
          console.error(`Failed to get schedule: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving the schedule.');
        }
      }
      async getByInstructorId(req, res) {
        try {
          const { instructorDrivingId } = req.params;
          const schedule = await DrivingSchedule.findAll({ where: {instructorDrivingId} });
      
          if (!schedule) {
            return res.status(404).json({ message: 'Schedule is not found.' });
          }

          return res.json(schedule);

        } catch (error) {
          console.error(`Failed to get schedule: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving the schedule.');
        }
      }
}

module.exports = new DrivingScheduleController