import React from 'react'
import { Route, Routes } from 'react-router-dom';

import App from './App';
import OverviewComponent from './pages/overview';
import WalletInfoComponent from './pages/walletInfo';

function RoutesComponent() {
  return (
   <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="/:walletaddress" element={<WalletInfoComponent/>}/>
   </Routes>
  )
}

export default RoutesComponent