const {Group} = require('../models/models')
const ApiError= require('../error/ApiError')

class GroupController{
    async create(req,res){
        try {
            const { name } = req.body;
            const { quantity } = req.body;
            const { courseId } = req.body;
            
            const group = await Group.create({ name, quantity, courseId});
            return res.json(group);
          } catch (error) {
            console.error(`Failed to create course: ${error.message}`);
            return res.status(500).send('An error occurred while creating the course.');
          }
    }

    async gelAll(req,res){
      const {courseId} = req.query
      if (courseId) {
        const groups = await Group.findAll({ where: { courseId } });
        return res.json(groups);
      }
  
      // Если courseId не указан, получаем все группы
      const groups = await Group.findAll();
      return res.json(groups);
    }

    async getOne(req,res){
      try {
        const { id } = req.params;
        const group = await Group.findOne({ where: { id} });
    
        if (!group) {
          return res.status(404).json({ message: 'Group is not found.' });
        }

        return res.json(group);

      } catch (error) {
        console.error(`Failed to get group: ${error.message}`);
        return res.status(500).send('An error occurred while retrieving the group.');
      }
    }
}

module.exports = new GroupController