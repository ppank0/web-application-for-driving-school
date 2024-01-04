const {LectureSchedule} = require('../models/models')
const ApiError= require('../error/ApiError')

class LectureScheduleController{
    async create(req,res){
        try {
            const { date, instructorLectureId, groupId} = req.body;
            
            const schedule = await LectureSchedule.create({date, instructorLectureId, groupId});
            return res.json(schedule);
          } catch (error) {
            console.error(`Failed to create lecture schedule: ${error.message}`);
            return res.status(500).send('An error occurred while creating the lecture schedule.');
          }
    }

    async getAll(req, res) {
        try {
          const schedules = await LectureSchedule.findAll();
          return res.json(schedules);
        } catch (error) {
          console.error(`Failed to get exam lecture schedules: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving exam lecture schedules.');
        }
      }

      async getByGroupId(req, res) {
        try {
          const { groupId } = req.params;
          const schedule = await LectureSchedule.findAll({ where: {groupId} });
      
          if (!schedule) {
            return res.status(404).json({ message: 'Schedule is not found.' });
          }

          return res.json(schedule);

        } catch (error) {
          console.error(`Failed to get schedule: ${error.message}`);
          return res.status(500).send('An error occurred while retrieving the schedule.');
        }
      }
      async getByLectorId(req, res) {
        try {
          const { instructorLectureId} = req.params;
          const schedule = await LectureSchedule.findAll({ where: {instructorLectureId} });
      
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

module.exports = new LectureScheduleController