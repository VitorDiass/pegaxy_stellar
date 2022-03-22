import {axiosInstance} from "../api";
import {HEALTH_ENDPOINT} from '../apiconfig';

export const healthService = async () => {
    return; await axiosInstance.get(HEALTH_ENDPOINT.HEALTH);
}

