import React from 'react'
import { Route, Routes } from 'react-router-dom';

import App from './App';
import OverviewComponent from './pages/overview';

function RoutesComponent() {
  return (
   <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="/overview" element={<OverviewComponent/>}/>
   </Routes>
  )
}

export default RoutesComponent