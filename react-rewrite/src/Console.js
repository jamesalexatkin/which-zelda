import React from 'react';

function Console({name, img_src}) {
    return (
        <div className="card">
            <img src={img_src}></img>
            <div className="container">
                <h4><b>{name}</b></h4>
            </div>
        </div>
    )
}

export default Console;