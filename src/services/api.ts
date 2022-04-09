import axios from 'axios';
import {apiconfig} from './apiconfig';

const getBaseURL = () => {
    return `${apiconfig.API_URL}${apiconfig.VERSION}`;
}

export const axiosInstance = axios.create({
    baseURL : getBaseURL()
})