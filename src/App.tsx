import React from "react";
import MainMenu from "./component/mainMenu";
import { Button, Divider, Input, Segment } from "semantic-ui-react";


const App = () => {
  return (
    <>
      <div className="min-h-screen bg-backimage bg-cover bg-no-repeat">
        {/*   <div className="flex justify-center">STATUS BAR</div> */}
        <div className="h-52 flex justify-center items-end">
          <div className="flex-col">
            <span className="text-white main-title text-glow-white">
              PEXAGY STELLAR
            </span>
            <div className="text-center text-lg mt-10">
              A multi purpose fansite made for players and managers of Pegaxy
            </div>
          </div>
        </div>
        <div className="mx-20">
          <div className="ui divider main-divider"></div>
        </div>{" "}
        <MainMenu />
      </div>
    </>
  );
};

export default App;
