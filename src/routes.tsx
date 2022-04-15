import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import DemoComponent from './pages/demo';
import WalletInfoComponent from './pages/walletInfo';
import ReactGA from 'react-ga';
const GA = "G-JV591BP2V6";
ReactGA.initialize(GA);

function RoutesComponent() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  

  return (
    <>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/demo" element={<DemoComponent/>}/>
          <Route path="/:walletaddress" element={<WalletInfoComponent/>}/>
          <Route path="*" element={<App/>}/>
      </Routes>
   </>
  )
}

export default RoutesComponent