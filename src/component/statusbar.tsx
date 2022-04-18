import React, { useState } from "react";
/* import { useStatus } from "../hooks/useStatus"; */
import GoBackComponent from "./goBack";
import LogoComponent from "./logo";
import TokensPriceComponent from "./tokensPrice";

interface StatusBar {
    gobackprop?: boolean;
}

const StatusBarComponent = ({ gobackprop }: StatusBar) => {
    const [goback, setGoBack] = useState<boolean>(gobackprop || false);
 /*    const status = useStatus(); */

    return (
        <>
            <div className={goback ? 'grid grid-cols-2 text-gray-400 mb-16' : 'grid grid-cols-2 text-gray-400 mb-16 lg:px-16'}>
                {goback && (
                    <span className="flex justify-start items-center">
                        <GoBackComponent />
                    </span>
                )}
                {!goback && 
                    <span className="flex items-center justify-start">
                        <LogoComponent/>
                    </span>
                }
                <span className="flex items-center justify-end">
                    {/*     API STATUS
                    {status ? <AiOutlineCheckCircle className="text-2xl m-1" style={{ color: "lightgreen" }} /> : <AiOutlineCloseCircle className="text-2xl m-1" style={{ color: "red" }} />} */}
                    <TokensPriceComponent/>
                </span>
            </div>
        </>
    );
};

export default StatusBarComponent;
