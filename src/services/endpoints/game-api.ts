import axios from "axios";
import {axiosInstance} from "../api";
import {GAME_API_ENDPOINT} from '../apiconfig';

export const getPegaDesignService = (pegaId : string) => {
    if(pegaId){
        return axiosInstance.get(`${GAME_API_ENDPOINT["GAME-API"]}${GAME_API_ENDPOINT.PEGA}/${pegaId}`)
    }else{
        return null;
    }
}

export const getPegaRaceHistoryService = (pegaId : string) => {
    if(pegaId){
        return axiosInstance.get(`${GAME_API_ENDPOINT["GAME-API"]}${GAME_API_ENDPOINT.RACE}${GAME_API_ENDPOINT.HISTORY}${GAME_API_ENDPOINT.PEGA}/${pegaId}`)
    }else{
        return null;
    }
}