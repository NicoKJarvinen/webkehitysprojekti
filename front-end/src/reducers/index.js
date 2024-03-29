import { createStore, combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import { reducer as burgerMenu } from "redux-burger-menu";
import userReducer from "./user";

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  burgerMenu: burgerMenu,
  user: userReducer,
});
