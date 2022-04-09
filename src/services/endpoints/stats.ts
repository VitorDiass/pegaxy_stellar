import {axiosInstance} from "../api";
import {STATS_ENDPOINT} from '../apiconfig';


export const rentalDistribution = (givenTime? : number) => {
    if(givenTime){
        return axiosInstance.get(`${STATS_ENDPOINT.STATS}${STATS_ENDPOINT.RENTAL}${STATS_ENDPOINT.DISTRIBUTION}?since=${givenTime}`);
    }
    else{ 
        return axiosInstance.get(`${STATS_ENDPOINT.STATS}${STATS_ENDPOINT.RENTAL}${STATS_ENDPOINT.DISTRIBUTION}`);
    }
}