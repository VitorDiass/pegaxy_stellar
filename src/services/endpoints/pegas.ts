import { getCurrentTimestamp, OLDEST_TIMESTAMP } from "../../utils/utils";
import { axiosInstance } from "../api";
import { PEGAS_ENDPOINT } from '../apiconfig';

/* v1/pegas/owner/user/{walletAddress} */
export const userOwnedPegaInfo = (walletaddress : string) => {
    if(walletaddress)
        return axiosInstance.get(`${PEGAS_ENDPOINT.PEGAS}${PEGAS_ENDPOINT.OWNER}${PEGAS_ENDPOINT.USER}/${walletaddress}`);
    else 
        return null;
}


/*v1/peagas/{pegaID}/earnings*/
export const pegaEarningsService = (pegaId : string, since? : number, to? : number) => {
    if(pegaId){
        return axiosInstance.get(`${PEGAS_ENDPOINT.PEGAS}/${pegaId}${PEGAS_ENDPOINT.EARNINGS}?since=${since ? since : OLDEST_TIMESTAMP}&to=${to ? to : getCurrentTimestamp()}`);
    }else{
        return null;
    }
}

/*v1/pegas/{pegaId}*/
export const getPegaInfoService = (pegaId : string) => {
    if(pegaId){
        return axiosInstance.get(`${PEGAS_ENDPOINT.PEGAS}/${pegaId}`);
    }else{
        return null;
    }
}