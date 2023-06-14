import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleSearch = async (input : string)  => {
    if(typeof input === 'string' && input){
    
      const walletAddRegex = new RegExp("^0x[a-fA-F0-9]{40}$");
      const isValidInput = walletAddRegex.test(input);

      if(isValidInput){
        setItemStorageAppend('wallets',input);
        navigate(`/${input}`)
      }else{
        MyToaster('NOT A VALID WALLET ADDRESS','wallet_input',TOAST_TYPE.ERROR);
      }
    }
  }

  useEffect(() => {
    document.title = 'Pegaxy Stellar';
  }, [])
  

  return (
    <>
      <LayoutMainPageComponent>
        <StatusBarComponent/>
        <MainHeaderComponent />
        <SearchComponent handleSearchInput={handleSearch}/>
        <RecentWalletComponent/>
      </LayoutMainPageComponent>
    </>
  );
};

export default App;
