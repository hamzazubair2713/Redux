import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  REMOVE_TODO,
} from "../Actions/todoAction";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [];
    case REMOVE_TODO:
      const filterData = state.filter((todo) => todo.id !== action.payload);
      return filterData;
    case EDIT_TODO:
      const editData = state.find((todo) => todo.id === action.payload);
      console.log(editData);
    default:
      return state;
  }
};
