import { combineReducers } from "redux";

import covid19DataReducer from "./covid19Data";

const rootReducer = combineReducers({
  covid19Data: covid19DataReducer,
});

export default rootReducer;
