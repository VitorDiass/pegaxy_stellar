import {axiosInstance} from "../api";
import {apiconfig} from '../apiconfig';

export const healthService = async () => {
    return await axiosInstance.get(apiconfig.HEALTH);
}

