import React from 'react'
import { Route, Routes } from 'react-router-dom';

import App from './App';
import GeneralComponent from './pages/general';

function RoutesComponent() {
  return (
   <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="/general" element={<GeneralComponent/>}/>
   </Routes>
  )
}

export default RoutesComponent