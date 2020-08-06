import React, { useState } from 'react';

function Game({ name, imgSrc, playable, detail }) {

  return (
    <div className="card">
      <img className={playable ? "img" : "img-gray"} src={imgSrc}></img>
      <div className="overlay">
        {/* whiteSpace property renders \n from detail properly in HTML */}
        <div style={{whiteSpace: "pre-line"}}>{detail}</div>
      </div>
      <div className="container">
        <h4><b>{name}</b></h4>
      </div>
    </div>
  )
}

export default Game;