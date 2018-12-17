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
        console.log(this.props)
        if(dogs){
            if(this.props.match.params.id) {
                return <Available dogs={dogs} id={this.props.match.params.id}/>
            } else {
                return <PrintDogs dogs={dogs} />
            }
        } else {
            return <h1>Loading ...</h1>
        }
    }
}

export default Dogs;