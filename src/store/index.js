// necessities and accessories for constructing a Redux Store;
import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import reducer functions to set up combineReducers here;

// construct Redux Store here;

// export Redux Store here so that we can pass it to the Provider wrapper;