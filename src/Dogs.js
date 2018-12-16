import React, { Component } from 'react';
import PrintDogs from './PrintDogs';
import Available from './Available';

class Dogs extends Component {
    state = {
        dogs: null
      }

    componentDidMount(){
    const url = "http://localhost:5000/dogs";
    fetch(url)
        .then(resp => resp.json())
        .then(json => {
            this.setState({ dogs: json})
        })
    }

    render() {
        const { dogs } = this.state
        
        if(dogs){
            if(this.props.available === true) {
                return <Available dogs={dogs} />
            } else {
                return <PrintDogs dogs={dogs} />
            }
        } else {
            return <h1>Loading ...</h1>
        }
    }
}

export default Dogs;