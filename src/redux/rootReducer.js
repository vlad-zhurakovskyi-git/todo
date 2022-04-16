import { combineReducers } from "redux";

import counters from './reducers/counters';

export default combineReducers({
  counter: counters
})
