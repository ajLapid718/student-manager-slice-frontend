// This might be more appropriate as a file in another directory titled "forms";
import React, { Component } from "react";
import { addAStudentThunk } from "../../thunks";
import { connect } from "react-redux";

class AddStudentForm extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input name="id" type="number" onChange={this.handleChange}></input>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" onChange={this.handleChange}></input>
            </form>
        )
    }
}

function mapDispatch(dispatch) {
    return {
        addAStudent: (studentToAdd) => dispatch(addAStudentThunk(studentToAdd));
    }
}

// if you do not need any slice of state from the redux store, you can pass in null in place of mapState;
export default connect(null, mapDispatch)(AddStudentForm);