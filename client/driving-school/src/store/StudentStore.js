import { makeAutoObservable } from 'mobx';

export default class StudentStore {
  constructor(userStore) {
    this._isStudent = false
    this._userStore = userStore;
    this._student = {};
    this._exam = [
            // { id: 1, name: 'Зачёт 1', date: '2023-01-15' },
            // { id: 2, name: 'Зачёт 2', date: '2023-02-01' },
            // { id: 3, name: 'Зачёт 3', date: '2023-02-15' },
            // { id: 4, name: 'Зачёт 4', date: '2023-03-01' },
            // { id: 5, name: 'Зачёт 5', date: '2023-03-15' },
            // { id: 6, name: 'Зачёт 6', date: '2023-03-29' },
            // { id: 7, name: 'Зачёт 7', date: '2023-04-12' },
            // { id: 8, name: 'Экзамен', date: '2023-04-26' }
    ];
    this._examResults = [
        // { id: 1, isPassed: true, studentId: 1, examId: 1 },
        // { id: 2, isPassed: false, studentId: 1, examId: 2 },
        // { id: 3, isPassed: true, studentId: 1, examId: 3 },
    ];
    this._groups =  [];
    this._groupExam =[];
    this._lectureInstructors = [];
    // { id: 1, name: 'Иван', patronymic: 'Иванович', surname: 'Иванов', phone: '1234567890', experience: "7 лет"},
    // { id: 2, name: 'Петр', patronymic: 'Петрович', surname: 'Петров', phone: '9876543210', experience: "11 лет"},
    // { id: 3, name: 'Алексей', patronymic: 'Алексеевич', surname: 'Алексеев', phone: '5555555555', experience: "6 лет"},
    // { id: 4, name: 'Сергей', patronymic: 'Сергеевич', surname: 'Сергеев', phone: '9999999999', experience: "3 года" },
    // { id: 5, name: 'Анна', patronymic: 'Андреевна', surname: 'Андреева', phone: '1111111111', experience: "5 лет" }

    this._lectureSchedule = [];
    // { id: 1, date: '2023-01-01 10:00', instructorId: 1, groupId: 1 },
    // { id: 2, date: '2023-01-02 14:30', instructorId: 1, groupId: 1 },
    // { id: 3, date: '2023-01-03 09:15', instructorId: 1, groupId: 3 },
    // { id: 4, date: '2023-01-04 13:45', instructorId: 2, groupId: 4 },

    this._drivingInstructors = [];
    // { id: 1, name: 'Иван', patronymic: 'Иванович', surname: 'Иванов', phone: '1234567890', experience: '7 лет', availableSlots: 5 },
    // { id: 2, name: 'Петр', patronymic: 'Петрович', surname: 'Петров', phone: '9876543210', experience: '11 лет', availableSlots: 3 },
    // { id: 3, name: 'Алексей', patronymic: 'Алексеевич', surname: 'Алексеев', phone: '5555555555', experience: '6 лет', availableSlots: 2 },
    // { id: 4, name: 'Сергей', patronymic: 'Сергеевич', surname: 'Сергеев', phone: '9999999999', experience: '3 года', availableSlots: 7 },
    // { id: 5, name: 'Анна', patronymic: 'Андреевна', surname: 'Андреева', phone: '1111111111', experience: '5 лет', availableSlots: 1 },

    this._drivingSchedule = [];
    // { id: 1, date: '2023-01-01 10:00', instructorDrivingId: 1, studentId: 1 },
    // { id: 2, date: '2023-01-02 14:30', instructorDrivingId: 3, studentId: 2 },
    // { id: 3, date: '2023-01-03 09:15', instructorDrivingId: 1, studentId: 1 },
    // { id: 4, date: '2023-01-04 13:45', instructorDrivingId: 2, studentId: 4 },
    makeAutoObservable(this);
  }

  get groupExam(){
    return this._groupExam;
  }
  setExam(exam){
    return this._exam=exam;
  }
  setGroupExam(groupExam){
    return this._groupExam = groupExam;
  }
  get drivingSchedule(){
    return this._drivingSchedule;
  }
  setDrivingSchedule(driving){
    this._drivingSchedule = driving;
  }
  setDrivingInstructors(instructors){
    this._drivingInstructors = instructors
  }
  get drivingInstructors(){
    return this._drivingInstructors
  }

  // getOneLectureSchedule(groupId){
  //   return this._lectureSchedule.find((lec)=>lec.groupId===groupId)
  // }
  setLectureSchedule(lecture){
    this._lectureSchedule = lecture;
  }
  setStudent(student) {
    this._student = student;
  }

  setExamResults(results) {
    this._examResults = results;
  }

  setGroup(group) {
    this._groups = group;
  }

  setIsStudent(bool){
    this._isStudent=bool;
  }
  setLectureInstructor(instructor){
    this._lectureInstructors=instructor
  }
  get isStudent(){
    return this._isStudent
  }
  get student() {
    return this._student;
  }

  get user() {
    return this._userStore.user;
  }

  get lectureInstructors(){
    return this._lectureInstructors;
  }
  get lectureSchedule(){
    return this._lectureSchedule;
  }
//   getDrivingInstructorById(instructorId){
//     return this._drivingInstructors.find((inst)=>inst.id ===instructorId)
//   }
//   getDrivingScheduleByStudentId(studentId){
//     const schedules= this._drivingSchedule.filter((driving)=>driving.studentId===studentId);
//     return schedules;
//   }
//   getLectureScheduleByGroupId(groupId){
//     const lectures = this._lectureSchedule.filter((lec)=>lec.groupId===groupId)
//     return lectures;
//   }
//   getExamResultsByStudentId(id) {
//     const results = this._examResults.filter((result) => result.studentId === id);
//     return results;
//   }
//   getLectureInstructorByGroupId(groupId){
//     const instructorId = this._lectureSchedule.find((res )=> res.groupId===groupId);
//     return this._lectureInstructors.find((inst)=> inst.id===instructorId);
//   }

//  getLectureInstructorById(instId){
//   return this._lectureInstructors.find((lec)=> lec.id===instId)
//  }

 getGroupById(groupId){
  return this._groups.find((group)=>group.id ===groupId)
 }
//  getGroupByCourseId(courseId){
//   return this._groups.filter((group)=>group.courseId===courseId)
//  }

  get examResults() {
    return this._examResults;
  }

  get groups() {
    return this._groups;
  }

  get exam(){
    return this._exam;
  }
}