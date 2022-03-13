import React from "react";
import MainMenu from "./component/mainMenu";
import { Button, Divider, Input, Segment } from "semantic-ui-react";
import Footer from "./component/footer";


const App = () => {
  return (
    <>
      <div className="min-h-screen bg-backimage bg-center bg-cover bg-no-repeat p-5">
          <div className="flex justify-end">STATUS BAR</div>
        <div className="flex text-7xl justify-center items-center">
          <div className="flex-col text-center">
            <span className="text-center text-white main-title text-glow-white">
              PEXAGY STELLAR
            </span>
            <div className="text-center text-lg m-10">
              A multi purpose fansite made for players and managers of Pegaxy
            </div>
          </div>
        </div>
        <div className="mx-10 md:mx-20">
          <div className="ui divider main-divider"></div>
        </div>
        <MainMenu />
        <Footer/>
      </div>
    </>
  );
};

export default App;
