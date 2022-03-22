import React from 'react'

function MainHeaderComponent() {
  return (
    <div className="flex text-7xl justify-center items-center">
    <div className="flex-col text-center">
      <span className="text-center text-white main-title text-glow-white">
        PEXAGY STELLAR
      </span>
      <div className="text-center text-lg mt-8" style={{color : "var(--color-text-muted)"}}>
        A multi purpose fansite made for players and managers of Pegaxy
      </div>
    </div>
  </div>
  )
}

export default MainHeaderComponent