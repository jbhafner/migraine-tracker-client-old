import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import headaches from "./myHeadaches";

const rootReducer = combineReducers({
  currentUser,
  errors,
  headaches
});

export default rootReducer;
