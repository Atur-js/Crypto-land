import React from 'react';

// Gif
import spinner from "../gif/coin.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="Loading" />
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;