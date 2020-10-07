import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            URL: "",
        }
    }

    handleChange = event => {
        const target = event.target;
        this.setState({ paragraphs: target.value });
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        const submisson = {
            name: this.state.name,
            URL: this.state.URL
        };

        this.props.handleSubmit(submit)

    }

    render() {

        return(
            <div>
            <form>
                <label>Name</label>
                <input type="text" value ={this.state.name}/>
                <label>URL</label>
                <input type="text" value={this.state.URL}/>
            </form>
                <button>Submit</button>
            </div>

        );
    
    }
}

export default Form;
