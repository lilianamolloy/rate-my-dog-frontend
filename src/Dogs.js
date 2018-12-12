import React from 'react';
import './css/Dogs.css';

const Dogs = (props) => {
    let link;
    !props.description ? link = `/dogs/${props.id}`: link = null;

    let styling;
    !props.description ? styling = "dogs" : styling = "dog";
  
    return (
        <div className={styling}>
            <a href={link}><h1>{props.name}</h1></a>
            <img src={props.image} alt="pictures of very cute dogs" width="200" />
            <p>{props.rating}</p>
            {props.description ? <p>{props.description}</p> : null}
        </div>
    )
};

export default Dogs;