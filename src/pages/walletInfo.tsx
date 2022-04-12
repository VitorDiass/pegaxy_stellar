import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Loader, Popup } from "semantic-ui-react";
import CardInfoComponent from "../component/cardInfo";
import LayoutComponent from "../component/layout";
import StatusBarComponent from "../component/statusbar";
import TableComponent from "../component/table/table";
import { userPegaAndVisService } from "../services/endpoints/assets";
import { userOwnedPegaInfo } from "../services/endpoints/pegas";
import {FaCopy} from 'react-icons/fa';
import { numberFormat } from "../utils/utils";
import toast, {Toaster} from 'react-hot-toast';
import { AxiosError } from "axios";
import { MyToaster, TOAST_TYPE } from "../toast/toast";


const WalletInfoComponent = ({ walletAddressProp }: any) => {
    const { walletaddress } = useParams();
    const [userPegaInfoData, setUserPegaInfoData] = useState([]);
    const [isDataReady, setIsDataReady] = useState<boolean>(false);
    const [userLockedVis, setuserLockedVis] = useState();
    const [userTotalPega, setuserTotalPega] = useState();
    const [copyToCipBoardMessage, setcopyToCipBoardMessage] = useState(true);

    useEffect(() => {
        const getUserPegaInfo = async (walletAdd: string) => {
            try{
                setIsDataReady(false);
                if (walletAdd) {
                    const response = await userOwnedPegaInfo(walletAdd);
                    setUserPegaInfoData(response.data);
                    setIsDataReady(true);
                }
            }catch(e : AxiosError | any) {
                MyToaster(e.message, 'get_user_pega_info',TOAST_TYPE.ERROR)
            }finally {
                setIsDataReady(true);
            }
        };
        getUserPegaInfo(walletaddress);

        const getUserPegaAndVis = async (walletAdd: string) => {
            try{
                if (walletAdd) {
                    const response = await userPegaAndVisService(walletAdd);
                    setuserLockedVis(response?.data?.lockedVis || "N/A");
                    setuserTotalPega(response?.data?.pega || "N/A");
                }
            }catch(e : AxiosError | any){
                MyToaster(e.message, 'get_user_pega_and_vis',TOAST_TYPE.ERROR)
            }
        };
        getUserPegaAndVis(walletaddress);
        

        document.title = 'Pegaxy Stellar' + " - " + "Wallet"
        //setWalletAdd(walletaddress);
    }, []);

    return (
        <>
            <LayoutComponent>
                <StatusBarComponent gobackprop={true} />
                <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
                    <span className="col-span-3 xl:col-span-1">
                        <CardInfoComponent>
                            <div className="flex flex-col justify-center items-center gap-x-2">
                                <div className="color-text-secundary text-base">WALLET</div>
                                <div className="text-lg cursor-pointer" onClick={() => {navigator.clipboard.writeText(walletaddress); setcopyToCipBoardMessage(false); setTimeout(() => {setcopyToCipBoardMessage(true)},4000)}}>
                                    {copyToCipBoardMessage ? <Popup content="Copy to clipboard" position="bottom center"  trigger={<span className="flex items-center gap-x-2">{walletaddress} <FaCopy size={14}/> </span>}/> : 
                                    <Popup content="Copied!" position="bottom center"  trigger={<span className="flex items-center gap-x-2">{walletaddress} <FaCopy size={14}/> </span>}/>}
                                </div>
                            </div>
                        </CardInfoComponent>
                    </span>
                    <span className="col-span-3 xl:col-span-1">
                        <CardInfoComponent>
                            <div className="flex flex-col justify-center items-center gap-x-2">
                                <div className="color-text-secundary text-base">PEGA</div>
                                <div className="text-lg">{userTotalPega}</div>
                            </div>
                        </CardInfoComponent>
                    </span>
                    <span className="col-span-3 xl:col-span-1">
                        <CardInfoComponent>
                            <div className="flex flex-col justify-center items-center gap-x-2">
                                <div className="color-text-secundary text-base">LOCKED</div>
                                <div className="flex gap-x-2 text-lg items-center">
                                    {numberFormat(Math.round(userLockedVis))} <img src="/images/vis.png" width="15"></img>
                                </div>
                            </div>
                        </CardInfoComponent>
                    </span>
                    {/* <CardInfoComponent>Your wallet : {walletaddress}</CardInfoComponent> */}
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
