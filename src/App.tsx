import React, { useState } from "react";
import MainMenu from "./component/mainMenu";
import { Button, Divider, Input, Segment } from "semantic-ui-react";
import Footer from "./component/footer";
import StatusBarComponent from "./component/statusbar";
import MainHeaderComponent from "./component/mainHeader";
import LayoutComponent from "./component/layout";
import DividerComponent from "./component/divider";
import SearchComponent from "./component/search";
import { userOwnedPegaInfo } from "./services/endpoints/pegas";
import CardInfoComponent from "./component/cardInfo";
import TableComponent from "./component/table/table";
import { createSearchParams, useNavigate } from "react-router-dom";
import WalletInfoComponent from "./pages/walletInfo";
import RecentWalletComponent from "./component/recentWallet/recentWallet";
import { getItemStorage, setItemStorageAppend } from "./utils/utils";

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [walletAddress, setWalletAddress] = useState<string>('')
  const navigate = useNavigate();

  const handleSearch = async (input : string)  => {
    if(typeof input === 'string' && input){
    
      const walletAddRegex = new RegExp("^0x[a-fA-F0-9]{40}$");
      console.log(input, walletAddRegex)
      const isValidInput = walletAddRegex.test(input);
      console.log(isValidInput)

      if(isValidInput){
        setItemStorageAppend('wallets',input);
        navigate(`/${input}`)
      }else{
        alert('NOT A VALID WALLET ADDRESS')
      }


      //IF WALLET ADD 
      //TODO SAFE INPUT
    /*   const wallets = localStorage.getItem('walletadds');
      const newWallets = wallets?.concat(`,${input}`)
      localStorage.setItem("walletadds",newWallets);
      console.log(localStorage.getItem('walletadds')); */
     
    }
  }

  return (
    <>
      {/*  <RoutesComponent/> */}
      {/*   <Routes>
        <Route path="/" element={<App />} />
        <Route path="general" element={<GeneralComponent />}/>
      </Routes> */}
      
      <LayoutComponent>
        <StatusBarComponent/>
        <MainHeaderComponent />
        <SearchComponent handleSearchInput={handleSearch}/>
        <RecentWalletComponent/>
       {/*  {walletAddress && <WalletInfoComponent walletAddressProp={walletAddress}/>} */}
     {/*    <div className="mt-20">
          <CardInfoComponent>
            <TableComponent data={tableData}/>
          </CardInfoComponent>

        </div> */}
        {/* <DividerComponent /> */}
        {/* <MainMenu /> */}
       {/*  <Footer /> */}
      </LayoutComponent>
    </>
  );
};

export default App;
