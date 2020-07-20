import React, { useState } from 'react';

function Console({name, img_src}) {

    function handleClick() {
        setOwned(!owned);
    }

    const [owned, setOwned] = useState(false);

    return (
        <div className="card" onClick={handleClick}>
            <img className={owned ? "img" : "img-gray"} src={img_src}></img>
            <div className="container">
                <h4><b>{name}</b></h4>
            </div>
        </div>
    )
}

export default Console;