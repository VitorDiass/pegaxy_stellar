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

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [walletAddress, setWalletAddress] = useState<string>('')
  const navigate = useNavigate();

  const handleSearch = async (input : string)  => {
    if(typeof input === 'string'){

      navigate(`/${input}`)
      //TODO SAFE INPUT
     /*  setWalletAddress(input) */
    /*   try {
        const response = await userOwnedPegaInfo(input);
        console.log(response.data)
        setTableData(response.data)
      } catch (error) {
        console.log(error)
      } */
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
