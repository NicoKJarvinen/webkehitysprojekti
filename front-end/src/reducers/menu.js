import { createStore, combineReducers } from "redux";
import { reducer as burgerMenu } from "redux-burger-menu";

const reducers = {
  // Your other reducers go here
  burgerMenu, // Must be mounted at 'burgerMenu'
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);
