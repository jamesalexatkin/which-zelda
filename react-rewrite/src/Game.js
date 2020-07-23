import React, { useState } from 'react';

function Game({ name, imgSrc }) {

    const [playable, setPlayable] = useState(false);

    return (
        <div className="card">
            <img className={playable ? "img" : "img-gray"} src={imgSrc}></img>
            <div className="container">
                <h4><b>{name}</b></h4>
            </div>
        </div>
    )
}

export default Game;