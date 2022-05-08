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
          index < currentlvl ? <div className="progress-block"></div> : <div className="progress-block-bg"></div>
        )
      })}
      </>
    )
};

export default BarsComponent;
