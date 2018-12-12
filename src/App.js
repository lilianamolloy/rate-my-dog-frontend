import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import PrintDogs from './PrintDogs';
import Error from './Error';
import Available from './Available';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Welcome} exact/>
            <Route path="/dogs" component={PrintDogs} exact/>
            <Route path="/dogs/:id" component={Available} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
