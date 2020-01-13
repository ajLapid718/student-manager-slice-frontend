// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";

// ACTION CREATORS;
function fetchAllStudents(students) {
    return {
        type: FETCH_ALL_STUDENTS,
        payload: students
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

// REDUCER;
function allStudentsReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_STUDENTS:
            return action.payload;
        default:
            return state;
    }
}

export default allStudentsReducer;