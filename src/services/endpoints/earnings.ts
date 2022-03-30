import {axiosInstance} from "../api";
import {EARNINGS_ENDPOINT} from '../apiconfig';

export const economicDataUsersByTime = (givenTime? : number) => {
    if(givenTime)
        return axiosInstance.get(`${EARNINGS_ENDPOINT.EARNINGS}${EARNINGS_ENDPOINT.HISTORICAL}${EARNINGS_ENDPOINT.USER}?since=${givenTime}`);
    else 
        return axiosInstance.get(`${EARNINGS_ENDPOINT.EARNINGS}${EARNINGS_ENDPOINT.HISTORICAL}${EARNINGS_ENDPOINT.USER}`);
}
