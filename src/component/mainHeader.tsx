import React, { useContext } from "react";
import AppContext from "../context/appContext";

function MainHeaderComponent() {
    const appcontext = useContext(AppContext);

    return (
        <div className="flex text-7xl justify-center items-center">
            <div className="flex-col text-center">
                <span className="text-center text-white main-title text-glow-white">
                  PEXAGY STELLAR
                </span>
                {appcontext.appContext.betaApp && <span className="flex items-center justify-center text-4xl main-title text-glow-white">
                  BETA
                </span>}
                {/*  <div className="text-center text-lg mt-8" style={{color : "var(--color-text-muted)"}}>
        A multi purpose fansite made for players and managers of Pegaxy
      </div> */}
            </div>
        </div>
    );
}

export default MainHeaderComponent;
