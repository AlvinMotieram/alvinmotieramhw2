import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            URL: ""
        }
    }
    
    handleNameChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       console.log("input updated")
       console.log(event.target)

       this.setState({name: event.target.value})
    }

    handleURLChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       console.log("input updated")
       console.log(event.target)

       this.setState({URL: event.target.value})
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        console.log(this.state)

        this.props.handleSubmit(this.state)

    }

    render() {

        return(
            <form>
                <label>Name</label>
                <input type="text" name="name" onChange={this.handleNameChange} value={this.state.name}></input>
                <label>URL</label>
                <input type="text" name="URL" onChange={this.handleURLChange} value={this.state.URL}></input>
                <button onClick={this.onFormSubmit}> Submit </button>
            </form>

        );
    
    }
}

export default Form;
