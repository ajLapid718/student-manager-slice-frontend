// necessities and accessories for constructing a Redux Store;
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import reducer functions to set up combineReducers here;
// because the default export of the students.js file in the utilities directory is the reducer function, we can call it anything in this file where we are importing it (the name we choose will be the name of the key in our Redux store);
import allStudents from "./utilities/students";

// construct Redux Store here;
// you can also explicitly set the name of the key in your redux store within the object you are passing to combineReducers;
const rootReducer = combineReducers({allStudents});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(logger, thunkMiddleware));
const store = createStore(rootReducer, middleware);

// export Redux Store here so that we can pass it to the Provider wrapper;
export default store;