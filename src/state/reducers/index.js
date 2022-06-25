import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

// The combineReducers helper function turns an object whose values are different reducer functions into a single reducer function you can pass to createStore
const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;
