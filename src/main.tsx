import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import GeneralComponent from "./pages/overview";
import RoutesComponent from "./routes";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     {/*  <RoutesComponent/> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
