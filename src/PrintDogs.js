import React from 'react';
import Dogs from './Dogs';
import './css/Dogs.css';

const dogs = [
    {
        "rating": [],
        "_id": "5c0f0848dca700029076a9ce",
        "name": "guy mcmanus",
        "description": "A fluffy dog",
        "image": "https://samoyedlife.com/images/photos/other-breeds/chow-chow.jpg"
    },
    {
        "rating": [],
        "_id": "5c0f08e4dca700029076a9cf",
        "name": "xian",
        "description": "shes small but fiesty",
        "image": "http://www.corgidogs.org/wp-content/uploads/2014/09/corgi-glasses.jpeg"
    }
  ];

const PrintDogs = () => {
    return (
        <div className="dog-container">
            {
                dogs.map(dog => {
                //   console.log('hello')
                    return (
                            <Dogs 
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