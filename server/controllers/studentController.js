const {Student} = require('../models/models')
const ApiError= require('../error/ApiError')

class StudentController{
    async create(req,res){
        try {
          const { name, patronymic, surname, phone, adress, birthday, passport_series, passport_number, userId, groupId } = req.body;

          const student = await Student.create({
            name,
            patronymic,
            surname,
            phone,
            adress,
            birthday,
            passport_series,
            passport_number,
            userId,
            groupId
          });
          console.log(student)
          return res.json(student);
          } catch (error) {
            console.error(`Failed to create student: ${error.message}`);
            return res.status(500).send('An error occurred while creating the student.');
          }
    }

    async gelAll(req,res){
        try {
            const { courseId } = req.query;
        
            // Если courseId указан, получаем всех студентов для указанного courseId
            if (courseId) {
              const students = await Student.findAll({ where: { groupId: courseId } });
              return res.json(students);
            }
        
            // Если courseId не указан, получаем всех студентов
            const students = await Student.findAll();
            return res.json(students);
          } catch (error) {
            console.error(`Failed to retrieve students: ${error.message}`);
            return res.status(500).send('An error occurred while retrieving the students.');
           }
    }

    async getOne(req,res){
        const {id}= req.params;
        const student = await Student.findOne(
            {where:{userId: id}}
        )
        return res.json(student)
    }
}

module.exports= new StudentController