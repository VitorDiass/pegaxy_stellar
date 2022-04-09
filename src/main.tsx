import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import GeneralComponent from "./pages/overview";
import RoutesComponent from "./routes";
import AppContext from "./context/appContext";


const storageLogged = localStorage.getItem('logged');
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
}

ReactDOM.render(
  <React.StrictMode>
    {logged && 
    <BrowserRouter>
    <AppContext.Provider value={{appContext : {betaApp : true}}}>
      <RoutesComponent/>
    </AppContext.Provider>
    </BrowserRouter>
    }
  </React.StrictMode>,
  document.getElementById("root")
);
