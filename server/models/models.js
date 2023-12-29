const sequelize = require('../db')
const{DataTypes}=require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type:DataTypes.STRING, unique:true},
    password: {type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
})

const Student = sequelize.define('student',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, allowNull:false},
    patronymic: {type:DataTypes.STRING, allowNull:false},
    surname: {type:DataTypes.STRING, allowNull:false},
    phone: {type: DataTypes.STRING, allowNull:false},
    adress: {type: DataTypes.STRING , allowNull:false},
    birthday: {type: DataTypes.DATE , allowNull:false},
    passport_series: {type: DataTypes.STRING, allowNull:false},
    passport_number: {type: DataTypes.STRING, unique:true, allowNull:false},
})

const Gallery = sequelize.define('gallery',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    url: {type:DataTypes.STRING, unique:true},
})

const Course = sequelize.define('course',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true},
    description: {type:DataTypes.TEXT, allowNull:false},
    price:{type:DataTypes.DECIMAL(10, 2), defaultValue: 0.00},
    duration:{type:DataTypes.STRING},
})

const Group = sequelize.define('group',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, unique:true},
    quantity: {type:DataTypes.INTEGER},
})

const Exam = sequelize.define('exam',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING},
    date: {type: DataTypes.DATE},
})

const ExamResult = sequelize.define('exam_Result',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    isPassed: {type:DataTypes.BOOLEAN}
})

const InstructorLecture = sequelize.define('instructor_lecture',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, allowNull:false},
    patronymic: {type:DataTypes.STRING, allowNull:false},
    surname: {type:DataTypes.STRING, allowNull:false},
    phone: {type: DataTypes.STRING, allowNull:false},
    experience: {type:DataTypes.STRING},
})
const LectureSchedule = sequelize.define('lecture_schedule',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date: {type: DataTypes.DATE},
    
})
const InstructorDriving = sequelize.define('instructor_driving',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type:DataTypes.STRING, allowNull:false},
    patronymic: {type:DataTypes.STRING, allowNull:false},
    surname: {type:DataTypes.STRING, allowNull:false},
    phone: {type: DataTypes.STRING, allowNull:false},
    availableSlots : {type:DataTypes.INTEGER, allowNull:false},
    experience: {type:DataTypes.STRING},
})

const DrivingSchedule = sequelize.define('driving_schedule',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date: {type: DataTypes.DATE},
    
})

const GroupExam=sequelize.define('group_exam',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

User.hasOne(Student)
Student.belongsTo(User)

Group.hasMany(Student);
Student.belongsTo(Group);

Course.hasMany(Group)
Group.belongsTo(Course)

Group.belongsToMany(Exam, { through: GroupExam });
Exam.belongsToMany(Group, { through: GroupExam });

Student.hasMany(ExamResult)
ExamResult.belongsTo(Student)

InstructorDriving.hasMany(DrivingSchedule)
DrivingSchedule.belongsTo(InstructorDriving)

InstructorLecture.hasMany(LectureSchedule)
LectureSchedule.belongsTo(InstructorLecture)

Group.hasMany(LectureSchedule)
LectureSchedule.belongsTo(Group)

Student.hasMany(DrivingSchedule)
DrivingSchedule.belongsTo(Student)

Exam.hasMany(ExamResult)
ExamResult.belongsTo(Exam)

module.exports={
    User,
    Student,
    Group,
    Course,
    Exam, 
    ExamResult,
    InstructorDriving,
    InstructorLecture,
    DrivingSchedule,
    LectureSchedule,
    GroupExam,
    Gallery
}