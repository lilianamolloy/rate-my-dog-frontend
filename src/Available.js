import React from 'react';
import Dogs from './Dogs';
import Error from './Error';

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
  
  const Available = ({ match }) => {
    let id = match.params.id;
    let dog = dogs.find(p => p._id === id)
    if(!dog) return <Error />
    return (
      <Dogs
        key={dog._id}
        id={dog._id}
        name={dog.name}
        image={dog.image}
        description={dog.description}
        rating={dog.rating} /> 
    )
  }
  
export default Available;