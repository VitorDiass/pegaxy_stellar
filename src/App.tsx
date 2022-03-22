import React from "react";
import MainMenu from "./component/mainMenu";
import { Button, Divider, Input, Segment } from "semantic-ui-react";
import Footer from "./component/footer";
import StatusBarComponent from "./component/statusbar";
import MainHeaderComponent from "./component/mainHeader";
import LayoutComponent from "./component/layout";
import DividerComponent from "./component/divider";

const App = () => {
  return (
    <>
      {/*  <RoutesComponent/> */}
      {/*   <Routes>
        <Route path="/" element={<App />} />
        <Route path="general" element={<GeneralComponent />}/>
      </Routes> */}
      
      <LayoutComponent>
        <StatusBarComponent />
        <MainHeaderComponent />
        <DividerComponent />
        <MainMenu />
        <Footer />
      </LayoutComponent>
    </>
  );
};

export default App;
