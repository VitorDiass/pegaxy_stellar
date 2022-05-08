import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardInfoComponent from "./component/cardInfo";
import LayoutMainPageComponent from "./component/layoutMainPage";
import MainHeaderComponent from "./component/mainHeader";
import RecentWalletComponent from "./component/recentWallet/recentWallet";
import SearchComponent from "./component/search";
import StatusBarComponent from "./component/statusbar";
import { MyToaster, TOAST_TYPE } from "./toast/toast";
import { setItemStorageAppend } from "./utils/utils";
/* const GA = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID
ReactGA.initialize(GA.toString());
 */

const App = () => {
    /*   const [tableData, setTableData] = useState([]);
  const [walletAddress, setWalletAddress] = useState<string>('') */
    const navigate = useNavigate();

    const handleSearch = async (input: string) => {
        if (typeof input === "string" && input) {
            const walletAddRegex = new RegExp("^0x[a-fA-F0-9]{40}$");
            const isValidInput = walletAddRegex.test(input);

            if (isValidInput) {
                setItemStorageAppend("wallets", input);
                navigate(`/${input}`);
            } else {
                MyToaster("NOT A VALID WALLET ADDRESS", "wallet_input", TOAST_TYPE.ERROR);
            }
        }
    };

    const handleSearchPega = async (input: number) => {
      if(typeof input === 'string' && input){
            
        const pegaIdRegex = new RegExp("^[0-9]+$");
        const isValidInput = pegaIdRegex.test(input);
  
        if(isValidInput){
          navigate(`/pega/${input}`)
        }else{
          MyToaster('NOT A VALID PEGA ID','pega_input',TOAST_TYPE.ERROR);
        }
      }
  };

    useEffect(() => {
        document.title = "Pegaxy Stellar";
    }, []);

    return (
        <>
            <LayoutMainPageComponent>
                <StatusBarComponent />
                <MainHeaderComponent />
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 px-16">
                    <div className="lg:col-span-3">
                        <CardInfoComponent>
                        <h2 className="flex justify-center text-2xl">Wallet Lookup</h2>
                            <SearchComponent handleSearchInput={handleSearch} placeholder="Type your wallet address here..." className="w-5/6" />
                            <RecentWalletComponent />
                        </CardInfoComponent>
                    </div>
                    <div className="lg:col-span-3">
                        <CardInfoComponent className="h-[307px] lg:h-full">
                        <h2 className="flex justify-center text-2xl">Pega Lookup</h2>
                            <SearchComponent handleSearchInput={handleSearchPega} placeholder="Type pega ID here..." className="w-5/6" />
                        </CardInfoComponent>
                    </div>
                </div>
            </LayoutMainPageComponent>
        </>
    );
};

export default App;
