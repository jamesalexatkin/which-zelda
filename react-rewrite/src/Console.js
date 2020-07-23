import React, { useState } from 'react';

function Console({name, imgSrc}) {

    function handleClick() {
        setOwned(!owned);
    }

    const [owned, setOwned] = useState(false);

    return (
        <div className="card" onClick={handleClick}>
            <img className={owned ? "img" : "img-gray"} src={imgSrc}></img>
            <div className="container">
                <h4>{owned ? name + " ✅" : name}</h4>
            </div>
        </div>
    )
}

export default Console;