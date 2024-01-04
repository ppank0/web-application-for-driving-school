import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";


export const createStudent = async (student) => {
    const {data} = await $authHost.post('api/student', student)
    return data
}

export const fetchStudents = async () => {
    const {data} = await $authHost.get('api/student' )
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchStudent = async (id) => {
    const {data} = await $authHost.get((`api/student/${id}`))
    if(data!=null){
        localStorage.setItem('studentId', data.id)
        localStorage.setItem('isStudent', true)
        localStorage.setItem('groupId', data.groupId)
        return data
    }
    localStorage.setItem('isStudent', false)
    return null
}
export const fetchGroup = async () => {
    const {data} = await $authHost.get('api/group' )
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchExam = async () => {
    const {data} = await $authHost.get('api/exam' )
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchGroupExam = async () => {
    const {data} = await $authHost.get('api/groupExam' )
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchExamResults = async () => {
    const {data} = await $authHost.get('api/examResult' )
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchExamResult = async (studentId) => {
    const {data} = await $authHost.get(`api/examResult/${studentId} `)
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchLectureInstructor = async (Id) => {
    const {data} = await $authHost.get(`api/lector/${Id} `)
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchLectureInstructors = async () => {
    const {data} = await $authHost.get(`api/lector`)
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchDrivingInstructors = async () => {
    const {data} = await $authHost.get(`api/instructor`)
    //localStorage.setItem('token', data.token)
    return data
}

export const fetchDrivingSchedules = async (studentId) => {
    const {data} = await $authHost.get(`api/drivings/student/${studentId}`)
    //localStorage.setItem('token', data.token)
    return data
}
export const fetchLectureSchedules = async (groupId) => {
    const {data} = await $authHost.get(`api/lectures/group/${groupId}`)
    //localStorage.setItem('token', data.token)
    return data
}

export const createExam = async (exam) => {
    const {data} = await $authHost.post('api/exam', exam)
    return data
}

export const createGroup = async (group) => {
    const {data} = await $authHost.post('api/group', group)
    return data
}