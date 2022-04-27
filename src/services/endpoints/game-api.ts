import {axiosInstance} from "../api";
import {GAME_API_ENDPOINT} from '../apiconfig';

export const getPegaInfoService = (pegaId : string) => {
    if(pegaId){
        return axiosInstance.get(`${GAME_API_ENDPOINT["GAME-API"]}${GAME_API_ENDPOINT.PEGA}/${pegaId}`)
    }else{
        return null;
    }
}