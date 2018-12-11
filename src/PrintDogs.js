import React from 'react';
import Dogs from './Dogs';
import './css/Dogs.css';

const PrintDogs = (props) => {
    const dogs = props.dogs
    return (
        <div className="dog-container">
            {
                dogs.map(dog => {
                //   console.log('hello')
                    return (
                            <Dogs 
                            key={dog.id}
                            name={dog.name}
                            image={dog.image}
                            description={dog.desc}
                            rating={dog.rating} /> 
                    )
                })
            }
        </div>
    )
}

export default PrintDogs;