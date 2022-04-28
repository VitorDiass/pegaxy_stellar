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
export const pegaEarnings = (pegaId : string) => {
    if(pegaId){
        return axiosInstance.get(`${PEGAS_ENDPOINT.PEGAS}/${pegaId}${PEGAS_ENDPOINT.EARNINGS}`);
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