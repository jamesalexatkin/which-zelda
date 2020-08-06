import React, { useState } from 'react';

function Console({name, imgSrc, ownedSystems, setOwnedSystems, computePlayableGames}) {

    function handleClick() {
        setOwned(!owned);

        // alert(ownedSystems.toString());
        if (!(ownedSystems.includes(name))) {
            const copy = [...ownedSystems];
            copy.push(name);
            setOwnedSystems(copy);
        } else {
            const copy = [...ownedSystems];
            const index = copy.indexOf(name);
            copy.splice(index, 1);
            setOwnedSystems(copy);
        }

        // TODO: setPlayableGames passed in as prop
        computePlayableGames();
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