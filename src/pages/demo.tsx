import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import CardInfoComponent from "../component/cardInfo";
import LayoutComponent from "../component/layout";
import StatusBarComponent from "../component/statusbar";
import TableComponent from "../component/table/table";
import { tableDemoData } from "../faker/faker";
import { numberFormat } from "../utils/utils";

const DemoPage = () => {
    const [demoData, setDemoData] = useState(tableDemoData);
    const [isDataReady, setIsDataReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsDataReady(true)
        },2000)
    },[])


    return (
        <>
            <LayoutComponent>
                <StatusBarComponent gobackprop={true} />
                <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
                    <span className="col-span-3 xl:col-span-1">
                        <CardInfoComponent>
                            <div className="flex flex-col justify-center items-center gap-x-2">
                                <div className="color-text-secundary text-base">WALLET</div>
                                <div className="text-lg">DEMO</div>
                            </div>
                        </CardInfoComponent>
                    </span>
                    <span className="col-span-3 xl:col-span-1">
                        <CardInfoComponent>
                            <div className="flex flex-col justify-center items-center gap-x-2">
                                <div className="color-text-secundary text-base">PEGA</div>
                                <div className="text-lg">15</div>
                            </div>
                        </CardInfoComponent>
                    </span>
                    <span className="col-span-3 xl:col-span-1">
                        <CardInfoComponent>
                            <div className="flex flex-col justify-center items-center gap-x-2">
                                <div className="color-text-secundary text-base">LOCKED</div>
                                <div className="flex gap-x-2 text-lg items-center">
                                    {numberFormat(154865)} <img src="/images/vis.png" width="15"></img>
                                </div>
                            </div>
                        </CardInfoComponent>
                    </span>
                    {/* <CardInfoComponent>Your wallet : {walletaddress}</CardInfoComponent> */}
                </div>
                <div className="grid grid-cols-1 mt-10">
                    {/*  <CardInfoComponent> */}
                    {isDataReady ? <TableComponent data={demoData} title=""/> : <Loader active />}
                    {/* </CardInfoComponent> */}
                </div>
            </LayoutComponent>
        </>
    );
};

export default DemoPage;
