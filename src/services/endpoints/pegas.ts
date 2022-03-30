import {axiosInstance} from "../api";
import {PEGAS_ENDPOINT} from '../apiconfig';

export const userOwnedPegaInfo = (walletaddress : string) => {
    if(walletaddress)
        return axiosInstance.get(`${PEGAS_ENDPOINT.PEGAS}${PEGAS_ENDPOINT.OWNER}${PEGAS_ENDPOINT.USER}/${walletaddress}`);
    else 
        return null;
}
