import React from 'react';
import MainMenu from "./component/mainMenu";
import { Button, Divider, Input, Segment } from 'semantic-ui-react'

const App = () => {
  return (
    <>
    <div className="h-screen bg-backimage bg-cover bg-no-repeat">
    {/*   <div className="flex justify-center">STATUS BAR</div> */}
      <div className="h-52 flex justify-center items-center">
        <span className="text-white main-title text-glow-white">
          PEXAGY STELLAR
        </span>
      </div>
      <div className='mx-20'>
        <div className='ui divider main-divider'></div>
      </div>
    <MainMenu></MainMenu>
    </div>
    </>
  );
};

export default App;
