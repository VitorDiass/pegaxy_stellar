import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import CardInfoComponent from "../component/cardInfo";
import LayoutComponent from "../component/layout";
import StatusBarComponent from "../component/statusbar";
import TableComponent from "../component/table/table";
import { userOwnedPegaInfo } from "../services/endpoints/pegas";

const WalletInfoComponent = ({ walletAddressProp }: any) => {
    const [searchParams] = useSearchParams();
    const { walletaddress } = useParams();
    const [pegaUserData, setPegaUserData] = useState();
    const [walletAdd, setWalletAdd] = useState(walletAddressProp);
    const [userPegaInfoData, setUserPegaInfoData] = useState([]);
    const [isDataReady, setIsDataReady] = useState<boolean>(false);

    useEffect(() => {

        const getUserPegaInfo = async (walletAdd: string) => {
            setIsDataReady(false);
            if (walletAdd) {
                const response = await userOwnedPegaInfo(walletAdd);
                setUserPegaInfoData(response.data);
                setIsDataReady(true)
            }
        };
        getUserPegaInfo(walletaddress);
        //setWalletAdd(walletaddress); 
    }, []);

    return (
        <>
        <LayoutComponent>
            <StatusBarComponent gobackprop={true}/>
            <div className="grid grid-cols-3 mt-10 gap-x-4">
                <CardInfoComponent>Your wallet : {walletaddress}</CardInfoComponent>
                <CardInfoComponent>Your wallet : {walletaddress}</CardInfoComponent>
                <CardInfoComponent>Your wallet : {walletaddress}</CardInfoComponent>
            </div>
            <div className="grid grid-cols-1 mt-10">
               {/*  <CardInfoComponent> */}
                    {isDataReady ? <TableComponent data={userPegaInfoData} title=""></TableComponent> : <Loader active/>}
                {/* </CardInfoComponent> */}
            </div>
        </LayoutComponent>
        </>
    );
};

export default WalletInfoComponent;
