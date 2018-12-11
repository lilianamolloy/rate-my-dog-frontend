import React, { Component } from 'react';
import './css/App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import PrintDogs from './PrintDogs';

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

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Welcome />
        {/* <PrintDogs dogs={dogs} /> */}
      </div>
    );
  }
}

export default App;
