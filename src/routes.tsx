import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import App from './App';
import AppContext from './context/appContext';
import DemoComponent from './pages/demo';
import WalletInfoComponent from './pages/walletInfo';

function RoutesComponent() {

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