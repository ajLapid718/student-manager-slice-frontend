// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const REMOVE_A_STUDENT = "REMOVE_A_STUDENT";

// ACTION CREATORS;
function fetchAllStudents(students) {
    return {
        type: FETCH_ALL_STUDENTS,
        payload: students
    }
}

function removeAStudent(id) {
    return {
        type: REMOVE_A_STUDENT,
        payload: id
    }
}

// THUNKS;
// These will be called in the anonymous function of our mapDispatch of one of our React components;
export function fetchAllStudentsThunk() {
    return function(dispatch) {
        const studentsFromAPI = [{id: 1, name: "AJ"}, {id: 2, name: "Billy"}, {id: 3, name: "Tony"}];
        dispatch(fetchAllStudents(studentsFromAPI));
    }
}

export function removeStudentThunk(id) {
    return function(dispatch) {
        dispatch(removeAStudent(id));
    }
}

// REDUCER;
function allStudentsReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_STUDENTS:
            return action.payload;
        case REMOVE_A_STUDENT:
            return state.filter(student => student.id !== action.payload);
        default:
            return state;
    }
}

export default allStudentsReducer;