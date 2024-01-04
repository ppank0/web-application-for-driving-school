import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";


export const createCourse = async (course) => {
    const {data} = await $authHost.post('api/course', course)
    return data
}

export const fetchCourse = async () => {
    const {data} = await $authHost.get('api/course' )
    //localStorage.setItem('token', data.token)
    return data
}