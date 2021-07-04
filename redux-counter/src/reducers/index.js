import { combineReducers } from "redux";
import countIncDec from "./countIncDec";

const rootReducer = combineReducers({
  countIncDec,
});

export default rootReducer;
