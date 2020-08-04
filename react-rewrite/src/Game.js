import React, { useState } from 'react';

function Game({ name, imgSrc, ownedSystems, gameObj }) {

  const [playable, setPlayable] = useState(false);
  var consoleDetails = "Playable on: \n";

  // function setState() {
    // alert("blah");
    // for (const console of gameObj.systemsPlayableOn) {
    //   if (ownedSystems.includes(console.name)) {
    //     setPlayable(true);
    //   }
    // }

    if (ownedSystems.includes(gameObj.systemsPlayableOn[0].name)) {
      // setPlayable(true);
    }

    // alert(playable);
  // }

  return (
    <div className="card">
      <img className={playable ? "img" : "img-gray"} src={imgSrc}></img>
      <div className="overlay">
        <p>{consoleDetails}</p>
      </div>
      <div className="container">
        <h4><b>{name}</b></h4>
      </div>
    </div>
  )
}

export default Game;