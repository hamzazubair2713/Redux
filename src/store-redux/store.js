import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import { combineReducers } from "redux";
import NameReducer from "./reducers/NameReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  name: NameReducer,
});
const store = createStore(rootReducer);

export default store;
