import {axiosInstance} from "../api";
import {STATS_ENDPOINT} from '../apiconfig';


export const rentalDistribution = () => {
    return axiosInstance.get(`${STATS_ENDPOINT.STATS}${STATS_ENDPOINT.RENTAL}${STATS_ENDPOINT.DISTRIBUTION}`);
}