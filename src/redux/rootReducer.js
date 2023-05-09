import { combineReducers } from "redux";

import { todoReducer } from "./todoApp/Reducer/todoReducer";

export const rootReducer = combineReducers({
  todoReducer,
});
