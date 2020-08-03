import React, { useState } from 'react';

function Console({name, imgSrc, ownedSystems}) {

    function handleClick() {
        setOwned(!owned);

        if (!(ownedSystems.includes(name))) {
            ownedSystems.push(name);
        } else {
            const index = ownedSystems.indexOf(name);
            ownedSystems.splice(index, 1);
        }
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