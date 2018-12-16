import React from 'react';
import Dog from './Dog';
import './css/Dogs.css';

const PrintDogs = (props) => {
    const dogs = props.dogs
    
    return (
        <div className="dog-container">
            {
                dogs.map(dog => {
                //   console.log('hello')
                    return (
                            <Dog 
                            key={dog._id}
                            id={dog._id}
                            name={dog.name}
                            image={dog.image}
                            rating={dog.rating} /> 
                    )
                })
            }
        </div>
    )
}

export default PrintDogs;