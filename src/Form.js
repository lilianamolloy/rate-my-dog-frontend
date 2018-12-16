import React from 'react';
import './css/Form.css';

export default class Form extends React.Component {
    state = {
        name: '',
        image: '',
        description: ''
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        return(
            <div className="container">
                <form>
                    <label>
                        Name:     
                        <input type='text' name="name" value={this.state.name} onChange={ e => this.change(e)}/>
                    </label>
                    <br/>
                    <label>
                        Image URL:
                        <input type='text' name="image" value={this.state.image} onChange={ e => this.change(e)}/>
                    </label>
                    <br/>
                    <label>
                        Description:
                        <input className="desc" type='text' name="description" value={this.state.description} onChange={ e => this.change(e)}/>
                    </label>
                    <br/>
                    <button onClick={(e) => this.onSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }
}

// const Add= () => {
//     return(
//         <form>
//             <label>
//                 Name:
//                 <input type='text' name="name" />
//             </label>
//             <label>
//                 Image URL:
//                 <input type='text' name="image" />
//             </label>
//             <label>
//                 Description:
//                 <input type='text' name="description" />
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//     )

// }

// export default Add