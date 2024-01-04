import { makeAutoObservable } from 'mobx';

export default class CourseStore {
  constructor() {
    this._courses = [];
    makeAutoObservable(this);
  }

  setCourse(course) {
    this._courses = course;
  }

  get courses(){
    return this._courses
  }
  
}
