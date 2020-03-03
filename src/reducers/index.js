import { combineReducers } from "redux";
import counter from "./counter";
import users from "./user";

const allReducer = combineReducers({
  counter,
  users
});

export default allReducer;
