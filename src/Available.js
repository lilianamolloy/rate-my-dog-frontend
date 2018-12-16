import React from 'react';
import Dog from './Dog';
import Error from './Error';
  
  const Available = (props) => {
    const dogs = props.dogs
    const { pathname } =window.location
    const id = pathname.substr(6);
    console.log(id)

    // let id = match.params.id;
    const dog = dogs.find(p => p._id === id)
    if(!dog) return <Error />
    return (
      <Dog
        key={dog._id}
        id={dog._id}
        name={dog.name}
        image={dog.image}
        description={dog.description}
        rating={dog.rating} /> 
    )
  }
  
export default Available;