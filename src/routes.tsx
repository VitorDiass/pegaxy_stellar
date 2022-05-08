import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import DemoPage from './pages/demo';
import WalletInfoComponent from './pages/walletInfo';
import ChangelogPage from './pages/changelog';
import PegaComponent from './pages/pega';



function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/demo" element={<DemoPage/>}/>
        <Route path="/changelog" element={<ChangelogPage/>}/>
        <Route path="/pega/:pegaid" element={<PegaComponent/>}/>
        <Route path="/pega" element={<PegaComponent/>}/>
        <Route path="/:walletaddress" element={<WalletInfoComponent/>}/>
        <Route path="*" element={<App/>}/>
      </Routes>
   </>
  )
}

export default RoutesComponent