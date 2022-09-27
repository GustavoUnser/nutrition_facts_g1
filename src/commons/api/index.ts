import axios from "axios";
import { API_KEY, FOOD_API_BASE_URL } from "../../config/api";

const foodApi = axios.create({
    baseURL: FOOD_API_BASE_URL
})

foodApi.interceptors.request.use( config => { 
    if (!config.headers) {
        config.headers = {}    
    }

    config.headers['x-api-key'] = API_KEY
    return config 
})

export default foodApi