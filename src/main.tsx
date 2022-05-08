import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import AppContext from "./context/appContext";
import "./index.css";
import RoutesComponent from "./routes";

/* const storageLogged = localStorage.getItem('logged');
let logged = false
let pass = '';


if(!storageLogged){
  pass = prompt('Enter a password');

  if(pass === 'beta12345'){
    logged = true;
    localStorage.setItem('logged', logged.toString())
  }
}else{
  logged = true;
} */

ReactDOM.render(
  <React.StrictMode>
    {/* {logged &&  */}
    <BrowserRouter>
    <AppContext.Provider value={{appContext : {betaApp : true}}}>
      <Toaster/>
      <RoutesComponent/>
    </AppContext.Provider>
    </BrowserRouter>
   {/*  } */}
  </React.StrictMode>,
  document.getElementById("root")
);
