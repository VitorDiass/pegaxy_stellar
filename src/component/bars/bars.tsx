import React from "react";

interface EnergyBar {
    currentlvl: number;
    maxlvl: number;
}

const BarsComponent = ({ currentlvl, maxlvl }: EnergyBar) => {

    return ( 
      <>
      {Array.from(Array(maxlvl).keys()).map((_, index) => {
        return (
          index < currentlvl ? <div className="progress-block mx-1"></div> : <div className="progress-block-bg mx-1"></div>
        )
      })}
      </>
    )
};

export default BarsComponent;
