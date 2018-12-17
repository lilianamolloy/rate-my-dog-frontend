import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Error from './Error';
import Form from './Form';
import Dogs from './Dogs';

class App extends Component {
  onSubmit = (fields) => {
    const name = fields.name;
    const image = fields.image;
    const description = fields.description;
    console.log(name) //values submited from the form 
    // when we connect to back end we can submit this info
    console.log(image) 
    console.log(description) 
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Welcome} exact/>
            <Route path="/dogs" component={Dogs} exact/>
            {/* <Route path="/dogs/:id" render={() => <Dogs available={true}/> }/> */}
            <Route path="/dogs/:id" component={Dogs}/>
            <Route path="/add" render={() => <Form onSubmit={fields => this.onSubmit(fields)}/>}/>/> 
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}



export default App;
