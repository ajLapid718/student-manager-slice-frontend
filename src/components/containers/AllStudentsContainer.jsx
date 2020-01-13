// This is the AllStudentsContainer;
import React, { Component } from "react";
import { AllStudentsView } from "../views";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../store/utilities/students";

class AllStudentsContainer extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchAllStudents();
    }

    render() {
        return <AllStudentsView allStudents={this.props.allStudents}/>
    }
}

function mapState(state) {
    return {
        allStudents: state.allStudents
    }
} 

function mapDispatch(dispatch) {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
    }
}

export default connect(mapState, mapDispatch)(AllStudentsContainer);