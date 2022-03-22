import {axiosInstance} from "../api";
import {ASSETS_ENDPOINT} from '../apiconfig';

export const totalPegaCountService = () => {
    return axiosInstance.get(`${ASSETS_ENDPOINT.ASSETS}${ASSETS_ENDPOINT.COUNT}`);
}

