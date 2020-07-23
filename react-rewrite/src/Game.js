import React, { useState } from 'react';

function Game({ name, img_src }) {

    const [playable, setPlayable] = useState(false);

    return (
        <div className="card">
            <img className={playable ? "img" : "img-gray"} src={img_src}></img>
            <div className="container">
                <h4><b>{name}</b></h4>
            </div>
        </div>
    )
}

export default Game;