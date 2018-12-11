import React, { Component } from 'react';
import './css/App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <h1>Welcome to my app</h1>
      </div>
    );
  }
}

export default App;
