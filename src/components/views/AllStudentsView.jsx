// This is the AllStudentsView file;
import React from "react";

function AllStudentsView(props) {
    return (
        <div>
            <h1>ALLSTUDENTSVIEW IS RENDERING HERE</h1>
            {props.allStudents.map(student => <p key={student.id}>{student.name}</p>)}
        </div>
    )
}

export default AllStudentsView;