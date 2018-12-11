import React from 'react';
import './css/Dogs.css';

const Dogs = (props) => {
    return (
        <div className="dogs">
            <a href=""><h1>{props.name}</h1></a>
            <img src={props.image} alt="pictures of very cute dogs" width="200" />
            <p>{props.rating}</p>
        </div>
    )
};

export default Dogs;