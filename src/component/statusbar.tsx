import React, { useEffect, useState } from "react";
import { useStatus } from "../hooks/useStatus";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import GoBackComponent from "./goBack";
import TokensPriceComponent from "./tokensPrice";

interface StatusBar {
    gobackprop?: boolean;
}

const StatusBarComponent = ({ gobackprop }: StatusBar) => {
    const [goback, setGoBack] = useState<boolean>(gobackprop || false);
    const status = useStatus();

    return (
        <>
            <div className={goback ? "grid grid-cols-3 text-gray-400 mb-16" : "grid grid-cols-2 text-gray-400 mb-16"}>
                {/* <div className="flex justify-between items-center text-gray-400"></div> */}
                {goback && (
                    <span className="flex justify-start">
                        <GoBackComponent />
                    </span>
                )}
                <span className={goback ? 'flex items-center justify-center' : 'flex items-center justify-start'}>
                    <TokensPriceComponent />
                </span>
                <span className="flex items-center justify-end">
                    API STATUS
                    {!status ? <AiOutlineCheckCircle className="text-2xl m-1" style={{ color: "lightgreen" }} /> : <AiOutlineCloseCircle className="text-2xl m-1" style={{ color: "red" }} />}
                </span>
            </div>
        </>
    );
};

export default StatusBarComponent;
