import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import DemoPage from './pages/demo';
import WalletInfoComponent from './pages/walletInfo';
import ReactGA from "react-ga4";
import ChangelogPage from './pages/changelog';
const GA = "";


function RoutesComponent() {
/*   ReactGA.initialize(GA);
  const walletAddRegex = new RegExp("^0x[a-fA-F0-9]{40}$");
  
  useEffect(() => {
    const isWalletAddress = walletAddRegex.test(window.location.search || '');

    if(isWalletAddress){
      ReactGA.send({hitType : 'pageview', page : 'walletaddress'});
    }else{
      ReactGA.send({hitType : 'pageview', page : window.location.search});
    }
  

  }, [])
   */

  return (
    <>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/demo" element={<DemoPage/>}/>
        <Route path="/changelog" element={<ChangelogPage/>}/>
        <Route path="/:walletaddress" element={<WalletInfoComponent/>}/>
        <Route path="*" element={<App/>}/>
      </Routes>
   </>
  )
}

export default RoutesComponent