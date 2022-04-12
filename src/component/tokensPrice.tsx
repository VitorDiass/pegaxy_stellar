import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PgxPriceService, PGX_TOKEN, VisPriceService, VIS_TOKEN } from "../services/endpoints/kyberswap/tokenprice";
import { MyToaster, TOAST_TYPE } from "../toast/toast";

interface TokenPrice {
    refreshTimeProp? : number;
}

const TOKEN_PRICE_REFRESH_INTERVAL = 300000;

const TokensPriceComponent = ({refreshTimeProp} : TokenPrice) => {
    const [visprice, setVisprice] = useState();
    const [pgxprice, setPgxprice] = useState();
    const [refreshTime, setRefreshTime] = useState(TOKEN_PRICE_REFRESH_INTERVAL) // every 5min

    useEffect(() => {
        setRefreshTime(refreshTimeProp || TOKEN_PRICE_REFRESH_INTERVAL);

        const getVisPrice = async () => {
            try{
                const response = await VisPriceService();
                if (response) {
                    const price = response?.data[VIS_TOKEN]?.price;
                    if (price) {
                        setVisprice(price.toFixed(4));
            }
                }
            }catch(e : AxiosError | any){
                MyToaster(e.message, 'vis_service', TOAST_TYPE.ERROR);
            }
            
        };

        const getPgxPrice = async () => {
            try {
                const response = await PgxPriceService();
                if (response) {
                    const price = response?.data[PGX_TOKEN]?.price;
                    if (price) {
                        setPgxprice(price.toFixed(4));
                    }
                }

            }catch(e : AxiosError | any){
                MyToaster(e.message, 'pgx_service', TOAST_TYPE.ERROR);
            }
        };
        getVisPrice();
        getPgxPrice();
        
        setInterval(() => {
            getVisPrice();
            getPgxPrice();
        },refreshTime)
    }, []);

    return (
        <div /* className="w-52" */>
            <div className="flex justify-between items-center gap-x-5">
                <div className="flex items-center justify-center gap-x-1">
                    <img src="/images/vis.png" width={20}></img>
                    <span className="mt-1">${visprice}</span> 
                </div>
                <div className="flex items-center justify-center gap-x-1">
                    <img src="/images/pgx.png" width={20}></img>
                    <span className="mt-1">${pgxprice}</span> 
                </div>
            </div>
        </div>
    );
};

export default TokensPriceComponent;
