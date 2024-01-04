import {$authHost, $host} from "./index";


export const createGallery = async (gallery) => {
    const {data} = await $authHost.post('api/gallery', gallery)
    return data
}

export const fetchGallery = async (page, limit) => {
    const {data} = await $host.get('api/gallery', {params:{
        page, limit
    }} )
    //localStorage.setItem('token', data.token)
    return data
}