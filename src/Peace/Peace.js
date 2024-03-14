import React from 'react';
import jpg from './peace.jpg';
import './Peace.css';

function Peace() {
    return (
        <div class="peace">
            <h2>Peace Symbol</h2>
            <img alt="peace symbol" src={jpg} />
            <p>Example of a peace symbol ☮</p>
        </div>
    )
}

export default Peace;