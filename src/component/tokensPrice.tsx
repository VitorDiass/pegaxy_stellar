import React, { useEffect, useState } from "react";
import { PgxPriceService, PGX_TOKEN, VisPriceService, VIS_TOKEN } from "../services/endpoints/kyberswap/tokenprice";

const TokensPriceComponent = () => {
    const [visprice, setVisprice] = useState();
    const [pgxprice, setPgxprice] = useState();

    useEffect(() => {
        const getVisPrice = async () => {
            const response = await VisPriceService();
            if (response) {
                const price = response?.data[VIS_TOKEN]?.price;
                if (price) {
                    setVisprice(price.toFixed(4));
                }
            }
        };

        const getPgxPrice = async () => {
            const response = await PgxPriceService();
            if (response) {
                const price = response?.data[PGX_TOKEN]?.price;
                if (price) {
                    setPgxprice(price.toFixed(4));
                }
            }
        };
        getVisPrice();
        getPgxPrice();
        
        setInterval(() => {
            getVisPrice();
            getPgxPrice();
        },300000)
    }, []);

    return (
        <div className="w-52">
            <div className="flex justify-between items-center">
                <div className="flex gap-x-1">
                    <img src="/images/vis.png" width={20}></img>
                    <span>${visprice}</span> <span className="text-xs"></span>
                </div>
                <div className="flex items-center gap-x-1">
                    <img src="/images/pgx.png" width={20}></img>
                    <span>${pgxprice}</span> <span className="text-xs"></span>
                </div>
            </div>
        </div>
    );
};

export default TokensPriceComponent;
