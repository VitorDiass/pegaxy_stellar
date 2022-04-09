import {axiosInstance} from "../api";
import {ASSETS_ENDPOINT} from '../apiconfig';

export const totalPegaCountService = () => {
    return axiosInstance.get(`${ASSETS_ENDPOINT.ASSETS}${ASSETS_ENDPOINT.COUNT}`);
}

export const bornPegaTodayService = (timestamp : number) => {
    return axiosInstance.get(`${ASSETS_ENDPOINT.ASSETS}${ASSETS_ENDPOINT.COUNT}${ASSETS_ENDPOINT.HISTORICAL}?since=${timestamp}`)
}

export const userPegaAndVisService = (walletaddress : string) => {
    if(walletaddress){
        return axiosInstance.get(`${ASSETS_ENDPOINT.ASSETS}${ASSETS_ENDPOINT.COUNT}${ASSETS_ENDPOINT.USER}/${walletaddress}`)
    }else{
        return null;
    }
}